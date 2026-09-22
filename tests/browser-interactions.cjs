/* Native Chrome interaction/failure checks. QA output is kept outside the public site. */
const { chromium } = require(
  process.env.PLAYWRIGHT_MODULE ||
    "playwright",
);
const fs = require("node:fs"),
  path = require("node:path"),
  assert = require("node:assert/strict"),
  crypto = require("node:crypto");
const base = process.env.QA_URL || "http://127.0.0.1:8765/";
const out = process.env.QA_OUT || "/tmp/portfolio-interactions";
fs.mkdirSync(out, { recursive: true });
const results = [];
const sha = (x) => crypto.createHash("sha256").update(x).digest("hex");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  async function run(name, options, setup, check, expectedFailure = false) {
    const ctx = await browser.newContext({
      viewport: { width: 390, height: 844 },
      ...options,
    });
    const p = await ctx.newPage();
    p.setDefaultTimeout(10000);
    const entry = { name, expectedFailure, console: [], networkFailures: [] };
    p.on("pageerror", (e) => entry.console.push(e.message));
    p.on("console", (m) => {
      if (m.type() === "error") entry.console.push(m.text());
    });
    p.on("requestfailed", (r) =>
      entry.networkFailures.push({
        url: r.url(),
        error: r.failure().errorText,
      }),
    );
    try {
      if (setup) await setup(p, ctx);
      await p.goto(base, { waitUntil: "networkidle" });
      await check(p, ctx, entry);
      if (!expectedFailure) {
        assert.deepEqual(entry.console, []);
        assert.deepEqual(entry.networkFailures, []);
      }
      entry.status = "passed";
    } catch (e) {
      entry.status = "failed";
      entry.error = e.stack;
      await p
        .screenshot({
          path: path.join(out, name + "-failure.png"),
          fullPage: true,
        })
        .catch(() => {});
    } finally {
      results.push(entry);
      await ctx.close();
      fs.writeFileSync(
        path.join(out, "interactions.json"),
        JSON.stringify(results, null, 2),
      );
      console.log(name, entry.status);
    }
  }
  for (const colorScheme of ["light", "dark"])
    for (const language of ["en", "zh"]) {
      await run(
        `interaction-${colorScheme}-${language}`,
        { colorScheme },
        null,
        async (p, ctx, entry) => {
          await p.locator(`[data-language-option=${language}]`).click();
          const menu = p.locator("[data-menu-toggle]");
          await menu.click();
          assert.equal(await menu.getAttribute("aria-expanded"), "true");
          await p.screenshot({
            path: path.join(out, `after-menu-${colorScheme}-${language}.png`),
          });
          await p.locator(".site-nav a").first().focus();
          await p.keyboard.press("Escape");
          assert.equal(
            await menu.evaluate((e) => e === document.activeElement),
            true,
          );
          assert.equal(await menu.getAttribute("aria-expanded"), "false");
          await menu.click();
          await p.mouse.click(10, 800);
          assert.equal(await menu.getAttribute("aria-expanded"), "false");
          await menu.click();
          await p.locator('.site-nav a[href="#case-notes"]').click();
          assert.equal(await menu.getAttribute("aria-expanded"), "false");
          assert.equal(new URL(p.url()).hash, "#case-notes");
          const notes = p.locator(".field-project details");
          assert.equal(await notes.nth(0).getAttribute("open"), "");
          await notes.nth(1).locator("summary").click();
          await notes.nth(2).locator("summary").click();
          assert.equal(
            await notes.evaluateAll((a) => a.filter((e) => e.open).length),
            3,
          );
          await notes.nth(0).locator("summary").click();
          assert.equal(await notes.nth(0).getAttribute("open"), null);
          assert.equal(
            await p.locator("[data-i18n=caseUltrasoundResult]").isVisible(),
            true,
          );
          const first = p.locator("#tab-philips");
          await first.focus();
          await p.keyboard.press("End");
          assert.equal(
            await p.locator(":focus").getAttribute("id"),
            "tab-hologic",
          );
          await p.keyboard.press("Home");
          assert.equal(
            await first.evaluate((e) => e === document.activeElement),
            true,
          );
          await p.keyboard.press("ArrowRight");
          assert.equal(
            await p.locator(":focus").getAttribute("id"),
            "tab-philips-ultrasound",
          );
          await p.keyboard.press("ArrowLeft");
          await p.keyboard.press("ArrowUp");
          assert.equal(
            await p.locator(":focus").getAttribute("id"),
            "tab-hologic",
          );
          await p.keyboard.press("ArrowDown");
          assert.equal(
            await first.evaluate((e) => e === document.activeElement),
            true,
          );
          await p.keyboard.press("Tab");
          assert.equal(
            await p.locator(":focus").getAttribute("id"),
            "platform-philips",
          );
          await p.keyboard.press("Shift+Tab");
          assert.equal(
            await first.evaluate((e) => e === document.activeElement),
            true,
          );
          assert.notEqual(
            await first.evaluate((e) => getComputedStyle(e).outlineStyle),
            "none",
          );
          const zoom = p.locator("#platform-philips [data-art-zoom]");
          await zoom.click();
          await p.locator("[data-viewer-image]").evaluate((i) => i.decode());
          assert.equal(await p.locator("dialog").evaluate((e) => e.open), true);
          assert.equal(
            await p
              .locator("[data-viewer-image]")
              .evaluate((e) => e.naturalWidth),
            1536,
          );
          assert.match(
            await p.locator("[data-viewer-image]").getAttribute("src"),
            /studio-v20/,
          );
          await p.screenshot({
            path: path.join(out, `after-dialog-${colorScheme}-${language}.png`),
          });
          await p.keyboard.press("Tab");
          assert.equal(
            await p
              .locator("dialog")
              .evaluate(
                (e) =>
                  e.contains(document.activeElement) ||
                  document.activeElement === document.body,
              ),
            true,
          );
          await p.keyboard.press("Shift+Tab");
          assert.equal(
            await p
              .locator("[data-close-viewer]")
              .evaluate((e) => e === document.activeElement),
            true,
          );
          await p.keyboard.press("Escape");
          await p.waitForFunction(
            () =>
              !document.documentElement.classList.contains("image-viewer-open"),
          );
          assert.equal(
            await zoom.evaluate((e) => e === document.activeElement),
            true,
          );
          await zoom.click();
          await p.locator("[data-close-viewer]").click();
          assert.equal(
            await zoom.evaluate((e) => e === document.activeElement),
            true,
          );
          await zoom.click();
          await p.mouse.click(2, 2);
          assert.equal(
            await p.locator("dialog").evaluate((e) => e.open),
            false,
          );
          await ctx.grantPermissions(["clipboard-read", "clipboard-write"]);
          await p.locator("[data-copy-email]").click();
          assert.equal(
            await p.evaluate(() => navigator.clipboard.readText()),
            "yangyihang96@gmail.com",
          );
          assert.equal(
            await p
              .locator("[data-copy-email]")
              .evaluate((e) => e.classList.contains("is-copied")),
            true,
          );
          for (const selector of [".hero .resume-link", ".word-link"]) {
            const link = p.locator(selector);
            const [download] = await Promise.all([
              p.waitForEvent("download"),
              link.click(),
            ]);
            assert.equal(await download.failure(), null);
            const bytes = fs.readFileSync(await download.path());
            const local = fs.readFileSync(
              path.resolve(
                __dirname,
                "../assets",
                download.suggestedFilename(),
              ),
            );
            assert.equal(sha(bytes), sha(local));
            entry.downloads = (entry.downloads || []).concat({
              name: download.suggestedFilename(),
              bytes: bytes.length,
            });
          }
          for (const link of await p.locator('a[href^="mailto:"]').all()) {
            assert.match(
              await link.getAttribute("href"),
              /^mailto:yangyihang96@gmail\.com(?:\?|$)/,
            );
          }
          entry.externalLinks = await p
            .locator('a[href^="https:"]')
            .evaluateAll((a) =>
              a.map((e) => ({ href: e.href, target: e.target, rel: e.rel })),
            );
          assert.ok(
            entry.externalLinks
              .filter((a) => a.target === "_blank")
              .every((a) => a.rel.includes("noopener")),
          );
          await p.reload({ waitUntil: "networkidle" });
          assert.equal(
            await p.locator("html").getAttribute("lang"),
            language === "en" ? "en" : "zh-CN",
          );
          await menu.click();
          assert.equal(await menu.getAttribute("aria-expanded"), "true");
          await p.setViewportSize({ width: 1440, height: 1000 });
          // Chrome dispatches matchMedia change after the viewport command resolves.
          // Wait for the real controller state, rather than forcing it or sleeping.
          await p.waitForFunction(
            () => !matchMedia("(max-width: 1120px)").matches &&
              document.querySelector("[data-menu-toggle]")?.getAttribute("aria-expanded") === "false" &&
              !document.querySelector("[data-site-header]")?.classList.contains("is-menu-open"),
            undefined,
            { timeout: 2000 },
          );
          assert.equal(await menu.getAttribute("aria-expanded"), "false");
          await p.setViewportSize({ width: 390, height: 844 });
          await p.waitForFunction(
            () => matchMedia("(max-width: 1120px)").matches &&
              document.querySelector("[data-menu-toggle]")?.getAttribute("aria-expanded") === "false",
            undefined,
            { timeout: 2000 },
          );
          assert.equal(await menu.getAttribute("aria-expanded"), "false");
          await p.emulateMedia({ media: "print" });
          await p.pdf({
            path: path.join(out, `after-print-${colorScheme}-${language}.pdf`),
            format: "A4",
            printBackground: true,
          });
          entry.print = await p
            .locator("body")
            .evaluate((e) => ({
              color: getComputedStyle(e).color,
              background: getComputedStyle(e).backgroundColor,
            }));
          assert.equal(entry.print.background, "rgb(255, 255, 255)");
          for (const panel of await p.locator("[data-platform-panel]").all())
            assert.equal(await panel.isVisible(), true);
        },
      );
    }
  for (const mode of [
    "no-js",
    "main-script-failed",
    "storage-denied",
    "copy-denied-fallback",
    "copy-all-denied",
    "thumbnail-failed",
    "full-image-failed",
    "partial-script-failed",
  ]) {
    await run(
      mode,
      { javaScriptEnabled: mode !== "no-js" },
      async (p) => {
        if (mode === "main-script-failed")
          await p.route("**/script.js?*", (r) => r.abort("failed"));
        if (mode === "partial-script-failed")
          await p.addInitScript(() => {
            const original = document.querySelector.bind(document);
            document.querySelector = (s) => {
              if (s === "[data-image-viewer]")
                throw Error("INJECTED partial script failure");
              return original(s);
            };
          });
        if (mode === "storage-denied")
          await p.addInitScript(() =>
            Object.defineProperty(window, "localStorage", {
              get() {
                throw new DOMException(
                  "INJECTED storage denied",
                  "SecurityError",
                );
              },
            }),
          );
        if (mode.startsWith("copy-"))
          await p.addInitScript((fail) => {
            Object.defineProperty(navigator, "clipboard", {
              value: {
                writeText: async () => {
                  throw Error("INJECTED clipboard denied");
                },
              },
            });
            const original = document.execCommand.bind(document);
            document.execCommand = (s) => {
              window.copyFallbackCalls = (window.copyFallbackCalls || 0) + 1;
              return fail ? false : original(s);
            };
          }, mode === "copy-all-denied");
        if (mode === "thumbnail-failed")
          await p.route("**/studio-v18/v60-*", (r) => r.abort("failed"));
        if (mode === "full-image-failed")
          await p.route("**/studio-v20/v60-1536.webp", (r) =>
            r.abort("failed"),
          );
      },
      async (p, ctx, entry) => {
        if (
          ["no-js", "main-script-failed", "partial-script-failed"].includes(
            mode,
          )
        ) {
          for (const panel of await p.locator("[data-platform-panel]").all())
            assert.equal(await panel.isVisible(), true);
          assert.equal(await p.locator(".site-nav").isVisible(), true);
          await p
            .locator(".field-project details")
            .nth(1)
            .locator("summary")
            .click();
          assert.equal(
            await p.locator("[data-i18n=caseMonitorAction]").isVisible(),
            true,
          );
          assert.equal(
            await p.locator("[data-i18n=caseMonitorResult]").isVisible(),
            true,
          );
        }
        if (mode === "storage-denied") {
          await p.locator("[data-language-option=zh]").click();
          assert.equal(await p.locator("html").getAttribute("lang"), "zh-CN");
          await p.locator("#tab-hologic").click();
          assert.equal(await p.locator("#platform-hologic").isVisible(), true);
        }
        if (mode.startsWith("copy-")) {
          await p.locator("[data-language-option=zh]").click();
          const copy = p.locator("[data-copy-email]");
          await copy.click();
          await p.waitForFunction(() =>
            document
              .querySelector("[data-copy-email]")
              .className.includes("is-cop"),
          );
          assert.equal(await p.evaluate(() => window.copyFallbackCalls), 1);
          assert.equal(
            await copy.evaluate((e) => e === document.activeElement),
            true,
          );
          assert.equal(await p.locator("textarea").count(), 0);
          assert.match(
            await p.locator("[data-copy-status]").textContent(),
            mode === "copy-all-denied" ? /复制失败/ : /邮箱已复制/,
          );
        }
        if (mode === "thumbnail-failed") {
          await p.locator("#platform-philips").scrollIntoViewIfNeeded();
          await p
            .locator("#platform-philips [data-image-error]")
            .waitFor({ state: "visible" });
          await p.locator("[data-language-option=zh]").click();
          assert.match(
            await p
              .locator("#platform-philips [data-image-error]")
              .textContent(),
            /无法加载/,
          );
          assert.equal(
            await p.locator("#platform-philips .platform-copy").isVisible(),
            true,
          );
        }
        if (mode === "full-image-failed") {
          const zoom = p.locator("#platform-philips [data-art-zoom]");
          await zoom.click();
          await p.locator("[data-viewer-error]").waitFor({ state: "visible" });
          await p.keyboard.press("Escape");
          assert.equal(
            await zoom.evaluate((e) => e === document.activeElement),
            true,
          );
        }
        entry.overflow = await p.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        );
        assert.equal(entry.overflow, false);
        await p.screenshot({
          path: path.join(out, "after-" + mode + ".png"),
          fullPage: true,
        });
      },
      [
        "main-script-failed",
        "partial-script-failed",
        "thumbnail-failed",
        "full-image-failed",
      ].includes(mode),
    );
  }
  await browser.close();
  console.log(
    "scenarios",
    results.length,
    "failed",
    results.filter((x) => x.status === "failed").length,
  );
  process.exitCode = results.some((x) => x.status === "failed") ? 1 : 0;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
