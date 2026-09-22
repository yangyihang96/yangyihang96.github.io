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
  for (const width of [390, 1440])
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
        if (width === 390) {
          await p.locator("[data-menu-toggle]").click();
          await audit("menu");
        }
        const sizes = await p
          .locator(
            "button, summary, .site-nav a, .button, .contact-secondary a, .reference-link",
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
  await b.close();
  const failures = rows.filter(
    (x) => x.violations?.length || x.under24?.length,
  );
  console.log("checks", rows.length, "failing", failures.length);
  process.exitCode = failures.length ? 1 : 0;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
