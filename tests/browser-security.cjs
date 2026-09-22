/* Browser security regressions. Injection is confined to intercepted test responses. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const base = process.env.QA_URL || "http://127.0.0.1:8765/";
const out = process.env.QA_OUT || "/tmp/portfolio-security";
const results = [];
fs.mkdirSync(out, { recursive: true });

async function runScenario(browser, name, exercise, expectedError = () => false) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  const entry = { name, consoleErrors: [], pageErrors: [], requestFailures: [], badResponses: [] };
  page.on("console", (message) => {
    if (message.type() === "error") entry.consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => entry.pageErrors.push(error.message));
  page.on("requestfailed", (request) => entry.requestFailures.push({
    url: request.url(), error: request.failure()?.errorText,
  }));
  page.on("response", (response) => {
    if (response.status() >= 400) entry.badResponses.push({ url: response.url(), status: response.status() });
  });
  await page.addInitScript(() => {
    window.__securityViolations = [];
    document.addEventListener("securitypolicyviolation", (event) => {
      window.__securityViolations.push({ directive: event.effectiveDirective, blockedURI: event.blockedURI });
    });
  });
  try {
    entry.evidence = await exercise(page, context);
    entry.violations = await page.evaluate(() => window.__securityViolations);
    entry.expectedInjectionErrors = entry.consoleErrors.filter(expectedError);
    entry.unexpectedConsoleErrors = entry.consoleErrors.filter((message) => !expectedError(message));
    assert.deepEqual(entry.unexpectedConsoleErrors, [], "Unexpected console errors");
    assert.deepEqual(entry.pageErrors, [], "Unexpected uncaught errors");
    assert.deepEqual(entry.requestFailures, [], "Unexpected failed requests");
    assert.deepEqual(entry.badResponses, [], "Unexpected HTTP errors");
    entry.status = "passed";
  } catch (error) {
    entry.status = "failed";
    entry.error = error.stack;
    await page.screenshot({ path: path.join(out, `security-${name}-failure.png`), fullPage: true }).catch(() => {});
  } finally {
    results.push(entry);
    fs.writeFileSync(path.join(out, "browser-security.json"), JSON.stringify({
      url: base, testedAt: new Date().toISOString(), browser: browser.version(), results,
    }, null, 2));
    await context.close();
    console.log(`${entry.status}: ${name}`);
  }
}

async function ready(page, url = base) {
  await page.goto(url, { waitUntil: "networkidle" });
  assert.equal(await page.locator("html").evaluate((node) => node.classList.contains("js-ready")), true);
  assert.equal(await page.locator("h1").isVisible(), true);
}

async function checkLanguageFallback(page, value) {
  await page.addInitScript((stored) => localStorage.setItem("portfolio-language", stored), value);
  await ready(page);
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  assert.equal(await page.locator('[data-language-option="en"]').getAttribute("aria-pressed"), "true");
  assert.equal(await page.evaluate(() => window.__securityXSS), undefined);
  await page.locator('[data-language-option="zh"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "zh-CN");
  assert.equal(await page.evaluate(() => localStorage.getItem("portfolio-language")), "zh");
  return { storedValue: value, fallback: "en", languageSwitchStillWorks: true };
}

async function main() {
  const preview = await fetch(base);
  assert.equal(preview.ok, true, `Preview unavailable: HTTP ${preview.status}`);
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  try {
    await runScenario(browser, "normal-navigation", async (page) => {
      await ready(page);
      for (const anchor of ["#experience", "#case-notes", "#capabilities", "#study", "#contact"]) {
        await page.locator(`.site-nav a[href="${anchor}"]`).click();
        assert.equal(new URL(page.url()).hash, anchor);
        assert.equal(await page.locator(anchor).isVisible(), true);
      }
      await page.locator('[data-platform="philips-monitor"]').click();
      assert.equal(await page.locator('[data-platform-panel="philips-monitor"]').isVisible(), true);
      assert.deepEqual(await page.evaluate(() => window.__securityViolations), []);
      return { version: await page.locator('script[src*="script.js"]').getAttribute("src") };
    });

    for (const [name, value] of [
      ["stored-prototype-key", "__proto__"],
      ["stored-constructor-key", "constructor"],
      ["stored-unknown-xss-value", '<img src=x onerror="window.__securityXSS=true">'],
    ]) {
      await runScenario(browser, name, (page) => checkLanguageFallback(page, value));
    }

    await runScenario(browser, "untrusted-fragments", async (page) => {
      const fragments = [
        "%E0%A4%A", // malformed UTF-8 must not escape as an uncaught URIError
        '"],body,*[id="', // selector syntax must remain a literal fragment
        '<img src=x onerror="window.__securityXSS=true">',
        'javascript:window.__securityXSS=true',
      ];
      for (const fragment of fragments) {
        const target = new URL(base);
        target.hash = fragment;
        await ready(page, target.href);
        assert.equal(await page.evaluate(() => window.__securityXSS), undefined);
        assert.equal(await page.locator("img[onerror],script:not([src]):not([type='application/ld+json'])").count(), 0);
        await page.locator('[data-language-option="zh"]').click();
        await page.locator('[data-language-option="en"]').click();
        assert.equal(await page.locator("html").getAttribute("lang"), "en");
      }
      assert.deepEqual(await page.evaluate(() => window.__securityViolations), []);
      return { fragments, injectedContentFound: false };
    });

    await runScenario(browser, "csp-inline-script", async (page) => {
      let injected = false;
      await page.route((url) => url.origin === new URL(base).origin && url.pathname === new URL(base).pathname, async (route) => {
        if (route.request().resourceType() !== "document") return route.continue();
        const response = await route.fetch();
        const html = await response.text();
        assert.ok(html.includes("</head>"));
        injected = true;
        await route.fulfill({ response, body: html.replace("</head>", '<script>window.__securityInlineExecuted=true</script></head>') });
      });
      await ready(page);
      assert.equal(injected, true, "The test must actually inject an inline script");
      assert.equal(await page.evaluate(() => window.__securityInlineExecuted), undefined);
      const violations = await page.evaluate(() => window.__securityViolations);
      assert.ok(violations.some((violation) => violation.directive === "script-src-elem" && violation.blockedURI === "inline"));
      return { injected, executed: false, violations };
    }, (message) => /Executing inline script violates.*Content Security Policy/i.test(message));

    await runScenario(browser, "csp-external-connection", async (page) => {
      const destination = "https://example.invalid/security-regression-probe";
      let reachedNetworkRoute = false;
      await page.route(destination, (route) => {
        reachedNetworkRoute = true;
        return route.fulfill({ status: 200, body: "This test request must be blocked by CSP." });
      });
      await ready(page);
      const fetchResult = await page.evaluate(async (url) => {
        try { await fetch(url); return "allowed"; } catch (error) { return error.name; }
      }, destination);
      await page.waitForFunction(() => window.__securityViolations.some((violation) => violation.directive === "connect-src"));
      assert.equal(fetchResult, "TypeError");
      assert.equal(reachedNetworkRoute, false, "CSP must block before network interception");
      return { destination, fetchResult, reachedNetworkRoute };
    }, (message) => /Connecting to.*violates.*Content Security Policy|Fetch API cannot load.*Content Security Policy/i.test(message));

    await runScenario(browser, "sri-tampered-script", async (page) => {
      let injected = false;
      await page.route((url) => /\/script\.js$/.test(url.pathname), async (route) => {
        const response = await route.fetch();
        const body = await response.text();
        injected = true;
        await route.fulfill({ response, body: "window.__securityTamperedExecuted=true;\n" + body });
      });
      await page.goto(base, { waitUntil: "networkidle" });
      assert.equal(injected, true, "The test must actually tamper with the script response");
      assert.equal(await page.evaluate(() => window.__securityTamperedExecuted), undefined);
      assert.equal(await page.locator("html").evaluate((node) => node.classList.contains("js-ready") || node.classList.contains("js-pending")), false);
      assert.equal(await page.locator("h1").isVisible(), true);
      for (const panel of await page.locator("[data-platform-panel]").all()) assert.equal(await panel.isVisible(), true);
      for (const name of ["Ultrasound", "Monitor", "V60"]) assert.equal(await page.locator(`[data-i18n="case${name}Result"]`).isVisible(), true);
      assert.equal(await page.locator(".site-nav").isVisible(), true);
      assert.equal(await page.locator('[data-language-option="zh"]').isVisible(), false);
      return { injected, executed: false, readableFallback: true };
    }, (message) => /Failed to find a valid digest in the ['"]integrity['"] attribute/i.test(message));
  } finally {
    await browser.close();
  }
  const failed = results.filter((entry) => entry.status === "failed");
  console.log(`${results.length - failed.length}/${results.length} security scenarios passed`);
  process.exitCode = failed.length ? 1 : 0;
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
