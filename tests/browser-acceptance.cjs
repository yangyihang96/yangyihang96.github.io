/* Real Chrome acceptance; run against a local preview, never mutate production. */
const { chromium } = require(
  process.env.PLAYWRIGHT_MODULE ||
    "playwright",
);
const fs = require("node:fs"),
  path = require("node:path"),
  assert = require("node:assert/strict");
const base = process.env.QA_URL || "http://127.0.0.1:8765/";
const out = process.env.QA_OUT || "/tmp/portfolio-acceptance";
fs.mkdirSync(out, { recursive: true });
const platforms = [
  "philips",
  "philips-ultrasound",
  "philips-monitor",
  "philips-ecg",
  "bd",
  "corpuls",
  "hologic",
];
const results = [];
const noOverflow = (p) =>
  p.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > innerWidth + 1,
    width: innerWidth,
    scroll: document.documentElement.scrollWidth,
    offenders: [...document.querySelectorAll("main *,header *")]
      .filter((e) => {
        const r = e.getBoundingClientRect();
        return r.width > 0 && (r.right > innerWidth + 1 || r.left < -1);
      })
      .slice(0, 8)
      .map((e) => e.className),
  }));
async function captureFull(p, label) {
  for (const id of [
    "experience",
    "case-notes",
    "capabilities",
    "study",
    "ai-tools",
    "contact",
  ])
    await p.locator("#" + id).scrollIntoViewIfNeeded();
  await p.locator("img[src]").evaluateAll(async (a) => {
    await Promise.race([
      Promise.all(
        a
          .filter((i) => i.getClientRects().length)
          .map((i) => i.decode().catch(() => {})),
      ),
      new Promise((r) => setTimeout(r, 3000)),
    ]);
  });
  await p.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await p.screenshot({
    path: path.join(out, label + "-full.png"),
    fullPage: true,
  });
}
async function matrix() {
  for (const zoom of [1, 2]) {
    // Chrome's native per-host zoom preference: not CSS zoom, pinch zoom, or DPR emulation.
    const profile = path.join(out, "chrome-zoom-" + zoom);
    fs.mkdirSync(path.join(profile, "Default"), { recursive: true });
    fs.writeFileSync(
      path.join(profile, "Default/Preferences"),
      JSON.stringify({
        partition: {
          per_host_zoom_levels: {
            x: {
              [new URL(base).hostname]: {
                zoom_level: Math.log(zoom) / Math.log(1.2),
              },
            },
          },
        },
      }),
    );
    const context = await chromium.launchPersistentContext(profile, {
      channel: "chrome",
      headless: true,
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 1,
    });
    try {
      for (const width of [320, 390, 768, 1024, 1440, 1920])
        for (const colorScheme of ["light", "dark"])
          for (const lang of ["en", "zh"])
            for (const motion of ["no-preference", "reduce"]) {
              const label = `${width}-${colorScheme}-${lang}-${zoom * 100}-${motion}`;
              const p = await context.newPage();
              p.setDefaultTimeout(10000);
              await p.setViewportSize({ width, height: 1000 });
              await p.emulateMedia({ colorScheme, reducedMotion: motion });
              const errors = [],
                requests = [];
              p.on("pageerror", (e) => errors.push(e.message));
              p.on("console", (m) => {
                if (m.type() === "error") errors.push(m.text());
              });
              p.on("requestfailed", (r) =>
                requests.push({ url: r.url(), error: r.failure().errorText }),
              );
              const entry = { label };
              try {
                await p.goto(base, { waitUntil: "networkidle" });
                await p.locator(`[data-language-option="${lang}"]`).click();
                entry.zoom = await p.evaluate(() => ({
                  innerWidth,
                  outerWidth,
                  dpr: devicePixelRatio,
                  scale: visualViewport.scale,
                }));
                assert.equal(entry.zoom.dpr, zoom);
                assert.equal(entry.zoom.innerWidth, Math.round(width / zoom));
                assert.equal(entry.zoom.scale, 1);
                assert.equal(
                  await p.locator("html").getAttribute("lang"),
                  lang === "en" ? "en" : "zh-CN",
                );
                assert.equal(
                  await p.locator('main img[src*="headshot"]').count(),
                  1,
                );
                assert.equal(await p.locator("#experience img").count(), 0);
                for (const model of ["Ultrasound", "Monitor", "V60"])
                  assert.equal(
                    await p
                      .locator(`[data-i18n="case${model}Result"]`)
                      .isVisible(),
                    true,
                  );
                assert.equal(
                  (await noOverflow(p)).overflow,
                  false,
                  JSON.stringify(await noOverflow(p)),
                );
                for (const id of platforms) {
                  await p.locator(`[data-platform="${id}"]`).click();
                  await p
                    .locator(`[data-platform-panel="${id}"] picture img`)
                    .scrollIntoViewIfNeeded();
                  await p
                    .locator(`[data-platform-panel="${id}"] picture img`)
                    .evaluate((i) => i.decode());
                  assert.equal(
                    (await noOverflow(p)).overflow,
                    false,
                    JSON.stringify(await noOverflow(p)),
                  );
                }
                const switchLang = lang === "en" ? "zh" : "en";
                await p
                  .locator(`[data-language-option="${switchLang}"]`)
                  .click();
                assert.equal(
                  await p
                    .locator("[role=tab][aria-selected=true]")
                    .getAttribute("data-platform"),
                  "hologic",
                );
                await p.locator(`[data-language-option="${lang}"]`).click();
                if (motion === "reduce")
                  assert.equal(
                    await p
                      .locator("html")
                      .evaluate((e) => getComputedStyle(e).scrollBehavior),
                    "auto",
                  );
                if (motion === "no-preference" && [390, 1440].includes(width)) {
                  await p.locator("#tab-philips").click();
                  await p.evaluate(() =>
                    scrollTo({ top: 0, behavior: "instant" }),
                  );
                  await p.screenshot({
                    path: path.join(out, "after-" + label + "-hero.png"),
                  });
                  if (zoom === 1) await captureFull(p, "after-" + label);
                }
                if (
                  zoom === 1 &&
                  motion === "no-preference" &&
                  lang === "en" &&
                  colorScheme === "light"
                ) {
                  await p.evaluate(() =>
                    scrollTo({ top: 0, behavior: "instant" }),
                  );
                  await p.screenshot({
                    path: path.join(out, "after-width-" + width + ".png"),
                  });
                }
                assert.deepEqual(errors, []);
                assert.deepEqual(requests, []);
                entry.status = "passed";
              } catch (e) {
                entry.status = "failed";
                entry.error = e.message;
                entry.layout = await noOverflow(p);
                await p
                  .screenshot({
                    path: path.join(out, "failure-" + label + ".png"),
                  })
                  .catch(() => {});
              }
              entry.console = errors;
              entry.networkFailures = requests;
              results.push(entry);
              fs.writeFileSync(
                path.join(out, "matrix.json"),
                JSON.stringify(results, null, 2),
              );
              await p.close();
            }
    } finally {
      await context.close();
    }
    console.log("zoom", zoom, "completed");
    fs.writeFileSync(
      path.join(out, "matrix.json"),
      JSON.stringify(results, null, 2),
    );
  }
}
matrix()
  .then(() => {
    console.log(
      "matrix",
      results.length,
      "failed",
      results.filter((r) => r.status === "failed").length,
    );
    process.exitCode = results.some((r) => r.status === "failed") ? 1 : 0;
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
