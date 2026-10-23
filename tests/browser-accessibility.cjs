const { chromium } = require(
  process.env.PLAYWRIGHT_MODULE ||
    "playwright",
);
const fs = require("node:fs"),
  path = require("node:path");
const axe = fs.readFileSync(
  process.env.AXE_SOURCE ||
    require.resolve("axe-core/axe.min.js"),
  "utf8",
);
const out = process.env.QA_OUT || "/tmp/portfolio-accessibility";
fs.mkdirSync(out, { recursive: true });
(async () => {
  const b = await chromium.launch({ channel: "chrome" });
  const rows = [];
  for (const width of [320, 390, 1440])
    for (const colorScheme of ["light", "dark"])
      for (const language of ["en", "zh"]) {
        const p = await b.newPage({
          viewport: { width, height: 1000 },
          colorScheme,
        });
        await p.goto(process.env.QA_URL || "http://127.0.0.1:8765/");
        await p.locator(`[data-language-option=${language}]`).click();
        await p.evaluate(axe);
        const audit = async (state, selector) => {
          const r = await p.evaluate(
            async ({ selector }) =>
              axe.run(selector || document, {
                runOnly: {
                  type: "tag",
                  values: [
                    "wcag2a",
                    "wcag2aa",
                    "wcag21aa",
                    "wcag22aa",
                    "best-practice",
                  ],
                },
              }),
            { selector },
          );
          rows.push({
            width,
            colorScheme,
            language,
            state,
            passes: r.passes.length,
            violations: r.violations,
            incomplete: r.incomplete.map((x) => ({
              id: x.id,
              nodes: x.nodes.map((n) => n.target),
            })),
          });
        };
        await audit("page");
        // axe marks gradient backgrounds for manual review. Check the full
        // colour ramp of the controls, including the smaller selected label.
        const contrast = await p.evaluate(() => {
          const rgb = (value) => [...value.matchAll(/rgba?\(([^)]+)\)/g)]
            .map((match) => match[1].split(",").slice(0, 3).map(Number));
          const luminance = (channels) => channels.map((v) => {
            v /= 255;
            return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
          }).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
          return [".brand-mark", ".hero .button.primary", "[role=tab][aria-selected=true]", "[role=tab][aria-selected=true] small"].map((selector) => {
            const element = document.querySelector(selector);
            const foreground = rgb(getComputedStyle(element).color)[0];
            const background = getComputedStyle(element.closest("button") || element).backgroundImage;
            const stops = rgb(background);
            if (stops.length !== 2) return { selector, error: "Expected a two-colour control gradient" };
            const ratios = Array.from({ length: 21 }, (_, i) => {
              const shade = stops[0].map((v, c) => v + (stops[1][c] - v) * i / 20);
              const [low, high] = [luminance(foreground), luminance(shade)].sort((a, b) => a - b);
              return (high + .05) / (low + .05);
            });
            return { selector, minimum: Math.min(...ratios) };
          });
        });
        rows.push({ width, colorScheme, language, state: "gradient-contrast", contrast,
          contrastFailures: contrast.filter((item) => item.error || item.minimum < 4.5) });
        for (const id of [
          "philips-ultrasound",
          "philips-monitor",
          "philips-ecg",
          "bd",
          "corpuls",
          "hologic",
        ]) {
          await p.locator(`[data-platform=${id}]`).click();
          await audit(id, "#platform-" + id);
        }
        await p.locator("#tab-philips").click();
        await p.locator("#platform-philips [data-art-zoom]").click();
        await p.locator("[data-viewer-image]").evaluate((i) => i.decode());
        await audit("dialog");
        await p.keyboard.press("Escape");
        if (width <= 390) {
          await p.locator("[data-menu-toggle]").click();
          await audit("menu");
        }
        const sizes = await p
          .locator(
            "button, summary, .brand, .site-nav a, .button, .contact-secondary a, .reference-link",
          )
          .evaluateAll((a) =>
            a
              .filter((e) => e.getClientRects().length)
              .map((e) => ({
                tag: e.tagName,
                text: (e.getAttribute("aria-label") || e.textContent).trim(),
                width: e.getBoundingClientRect().width,
                height: e.getBoundingClientRect().height,
              })),
          );
        rows.push({
          width,
          colorScheme,
          language,
          state: "touch-targets",
          under24: sizes.filter((x) => x.width < 24 || x.height < 24),
          under44: sizes.filter((x) => x.width < 44 || x.height < 44),
        });
        await p.close();
        fs.writeFileSync(
          path.join(out, "accessibility.json"),
          JSON.stringify(rows, null, 2),
        );
        console.log(width, colorScheme, language, "checked");
      }
  for (const width of [320, 390, 1440])
    for (const language of ["en", "zh"])
      for (const state of ["text-spacing", "forced-colors"]) {
        const p = await b.newPage({ viewport: { width, height: 900 },
          forcedColors: state === "forced-colors" ? "active" : "none" });
        await p.goto(process.env.QA_URL || "http://127.0.0.1:8765/");
        await p.locator(`[data-language-option=${language}]`).click();
        if (state === "text-spacing")
          await p.evaluate(() => {
            for (const element of document.querySelectorAll("body, body *:not(svg):not(svg *)")) {
              element.style.lineHeight = "1.5";
              element.style.letterSpacing = ".12em";
              element.style.wordSpacing = ".16em";
              if (element.tagName === "P") element.style.marginBottom = "2em";
            }
          });
        const layout = await p.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          menuStroke: getComputedStyle(document.querySelector(".menu-toggle span")).borderTopWidth,
          selectedOutline: getComputedStyle(document.querySelector("[aria-selected=true]")).outlineWidth,
        }));
        const failures = [];
        if (layout.overflow) failures.push("Horizontal overflow");
        if (state === "forced-colors") {
          if (layout.menuStroke !== "2px") failures.push("Menu icon has no forced-colour stroke");
          if (layout.selectedOutline !== "2px") failures.push("Selected tab has no forced-colour outline");
          await p.locator("#tab-philips").focus();
          await p.keyboard.press("Tab");
          await p.keyboard.press("Shift+Tab");
          layout.tabFocusOffset = await p.locator("#tab-philips").evaluate((e) => getComputedStyle(e).outlineOffset);
          if (layout.tabFocusOffset !== "4px") failures.push("Keyboard focus is not distinct from tab selection");
          if (width <= 390) {
            await p.locator("[data-menu-toggle]").click();
            if (!(await p.locator(".site-nav").isVisible())) failures.push("Menu did not open");
            await p.keyboard.press("Escape");
          }
        }
        await p.screenshot({ path: path.join(out, `${width}-${language}-${state}.png`) });
        rows.push({ width, language, state, layout, failures });
        await p.close();
      }
  fs.writeFileSync(path.join(out, "accessibility.json"), JSON.stringify(rows, null, 2));
  await b.close();
  const failures = rows.filter(
    (x) => x.violations?.length || x.under24?.length || x.contrastFailures?.length || x.failures?.length,
  );
  console.log("checks", rows.length, "failing", failures.length);
  process.exitCode = failures.length ? 1 : 0;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
