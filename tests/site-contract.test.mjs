import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const html = read("index.html");
const css = read("styles.css");
const script = read("script.js");

const sectionBody = (className) => {
  const match = html.match(new RegExp(`<div class="${className}"[^>]*>([\\s\\S]*?)</div>`));
  assert.ok(match, `missing ${className}`);
  return match[1];
};

const articleCount = (className) => {
  return (sectionBody(className).match(/<article>/g) || []).length;
};

test("site uses HTTPS canonical and sharing metadata", () => {
  assert.match(html, /<meta name="robots" content="index, follow">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/yangyihang96\.com\/">/);
  assert.match(html, /property="og:url" content="https:\/\/yangyihang96\.com\/"/);
  assert.match(html, /property="og:image" content="https:\/\/yangyihang96\.com\/assets\//);
  assert.match(html, /property="og:image:width" content="2200"/);
  assert.match(html, /property="og:image:height" content="1238"/);
  assert.match(html, /property="og:image:alt" content="Professional portrait and biomedical service profile for Yihang Yang"/);
  assert.match(html, /name="twitter:image:alt" content="Professional portrait and biomedical service profile for Yihang Yang"/);
  assert.doesNotMatch(html, /http:\/\/yangyihang96\.com/);
});

test("stylesheet and script use the current cache-busting version", () => {
  assert.match(html, /href="styles\.css\?v=nav-flow-1"/);
  assert.match(html, /src="script\.js\?v=nav-flow-1"/);
});

test("hero exposes recruiter actions and downloadable resume files", () => {
  assert.match(html, /Download PDF/);
  assert.match(html, /Download DOCX/);
  assert.match(html, /href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.pdf"/);
  assert.match(html, /href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.docx"/);
  assert.match(html, /Resume PDF and DOCX available/);
  assert.match(html, /github\.com\/yangyihang96/);
  assert.ok(fs.existsSync(path.join(root, "assets/Henry_Yang_Biomedical_Engineer_Resume.docx")));
  assert.ok(fs.existsSync(path.join(root, "assets/Henry_Yang_Biomedical_Engineer_Resume.pdf")));
});

test("contact section repeats recruiter conversion actions at the close", () => {
  assert.match(html, /class="contact-actions"/);
  assert.match(html, /Ready for field service conversations/);
  assert.match(html, /Sydney field travel, medical device service, verification records, and bilingual communication/);
  assert.match(html, /class="button primary contact-email-action" href="mailto:yangyihang96@gmail\.com"/);
  assert.match(html, /class="button secondary contact-resume-link" href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.pdf" type="application\/pdf" download/);
  assert.match(html, /class="button secondary contact-docx-link" href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.docx" download/);
  assert.match(html, /Private credentials and employment-check documents are shared only when required/);
  assert.match(script, /"\.contact-actions-title": "Ready for field service conversations\."/);
  assert.match(script, /"\.contact-actions-title": "可以继续聊医疗设备现场服务机会。"/);
  assert.match(css, /\.contact-actions\s*{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\) auto;/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.contact-action-buttons\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
});

test("fixed header keeps a persistent resume PDF action", () => {
  assert.match(
    html,
    /<a class="nav-resume-link" href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.pdf" type="application\/pdf" download>Resume PDF<\/a>/
  );
  assert.match(script, /"\.nav-resume-link": "Resume PDF"/);
  assert.match(script, /"\.nav-resume-link": "PDF 简历"/);
  assert.match(css, /\.nav-resume-link\s*{[\s\S]*?flex:\s*0 0 auto;[\s\S]*?min-height:\s*36px;/);
  assert.match(
    css,
    /@media \(max-width:\s*760px\)[\s\S]*?\.nav-resume-link\s*{[\s\S]*?position:\s*absolute;[\s\S]*?top:\s*12px;[\s\S]*?right:\s*118px;/
  );
});

test("primary navigation follows the visible recruiter reading order", () => {
  assert.match(
    html,
    /<nav class="site-nav" aria-label="Primary navigation">\s*<a href="#capabilities">Skills<\/a>\s*<a href="#experience">Experience<\/a>\s*<a href="#case-notes">Cases<\/a>\s*<a href="#study">Education<\/a>\s*<a href="#contact">Contact<\/a>\s*<\/nav>/
  );
  assert.match(script, /"\.site-nav a:nth-child\(1\)": "Skills"/);
  assert.match(script, /"\.site-nav a:nth-child\(2\)": "Experience"/);
  assert.match(script, /"\.site-nav a:nth-child\(3\)": "Cases"/);
  assert.match(script, /"\.site-nav a:nth-child\(1\)": "能力"/);
  assert.match(script, /"\.site-nav a:nth-child\(2\)": "经历"/);
  assert.match(script, /"\.site-nav a:nth-child\(3\)": "案例"/);
});

test("compact homepage keeps capability matrix visible", () => {
  assert.match(html, /id="capabilities"/);
  assert.match(html, /Employment checks/);
  assert.match(html, /Sydney field travel/);
  assert.doesNotMatch(css, /\.resume-style\.resume-compact \.capabilities[\s\S]{0,180}display:\s*none/);
});

test("early recruiter proof points summarize equipment, verification, records, and handover", () => {
  assert.match(html, /class="proof-strip reveal"/);
  assert.match(html, /aria-label="Recruiter proof points"/);
  assert.equal(articleCount("proof-grid"), 4);
  assert.match(html, /Ventilation, monitoring, ultrasound, DEXA, pharmacy automation/);
  assert.match(html, /Functional tests, performance checks, and safety-aware verification/);
  assert.match(html, /Simpro work orders, service reports, serial details, and equipment history/);
  assert.match(html, /Clinical users, biomedical teams, vendors, and internal engineers/);
  assert.match(script, /"\.proof-grid article:nth-child\(1\) h3": "Equipment range"/);
  assert.match(script, /"\.proof-grid article:nth-child\(1\) h3": "设备范围"/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.proof-heading\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.proof-grid article\s*{[\s\S]*?min-height:\s*0;[\s\S]*?padding:\s*18px;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.resume-style \.proof-grid article\s*{[\s\S]*?padding:\s*18px;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.resume-style\.resume-compact \.proof-strip,[\s\S]*?padding-top:\s*52px;/);
  assert.doesNotMatch(css, /\.resume-style\.resume-compact \.proof-strip[\s\S]{0,180}display:\s*none/);
});

test("keyboard users can skip fixed navigation", () => {
  assert.match(html, /<body id="top" class="resume-style resume-compact">/);
  assert.match(html, /<a class="skip-link" href="#main-content">Skip to content<\/a>/);
  assert.match(html, /<main id="main-content" tabindex="-1">/);
  assert.match(css, /\.skip-link:focus\s*{[\s\S]*?transform:\s*translateY\(0\)/);
  assert.match(css, /a:focus-visible,\s*button:focus-visible/);
});

test("recruiter-facing content is compact and quick to scan", () => {
  assert.match(html, /id="fit-title"/);
  assert.match(html, /Best fit for/);
  assert.match(html, /Resume and checks ready/);
  assert.equal(articleCount("fit-grid"), 5);
  assert.equal(articleCount("proof-grid"), 4);
  assert.equal(articleCount("capability-row"), 6);
  assert.equal(articleCount("case-grid"), 3);
  assert.equal(articleCount("study-grid"), 3);
  assert.equal(articleCount("certification-grid"), 3);
});

test("hidden personal galleries are not loaded by the compact homepage", () => {
  assert.doesNotMatch(html, /assets\/personal-gallery\//);
  assert.doesNotMatch(html, /id="family"/);
  assert.doesNotMatch(html, /id="moments"/);
  assert.doesNotMatch(html, /id="gallery"/);
  assert.ok(!fs.existsSync(path.join(root, "assets/personal-gallery")), "personal-gallery should not be published");
});

test("removed personal gallery copy is not shipped in public source", () => {
  const publicSource = `${html}\n${css}\n${script}`;

  assert.doesNotMatch(publicSource, /Personal Moments|Family Moments|family photos|家庭照片|生活合影/);
  assert.doesNotMatch(publicSource, /moments-section|family-section|gallery-section/);
  assert.doesNotMatch(publicSource, /moments-grid|family-grid|gallery-grid/);
});

test("published visual assets are referenced by the site", () => {
  const publicSource = `${html}\n${css}\n${script}`;
  const ignoredAssetFiles = new Set(["Henry_Yang_Biomedical_Engineer_Resume.docx"]);
  const assetFiles = fs
    .readdirSync(path.join(root, "assets"))
    .filter((file) => !ignoredAssetFiles.has(file));

  assetFiles.forEach((file) => {
    assert.match(publicSource, new RegExp(`assets/${file.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  });
});

test("site images declare stable dimensions", () => {
  assert.match(html, /src="assets\/yihang-professional-headshot-formal-4k\.jpg"[^>]*width="1407"[^>]*height="2200"/);
  assert.match(html, /src="assets\/work-bench\.jpg"[^>]*width="1448"[^>]*height="1086"/);
  assert.match(html, /src="assets\/logo-nova-biomedical\.jpg"[^>]*width="182"[^>]*height="108"/);
  assert.match(html, /src="assets\/logo-lundbeck\.svg"[^>]*width="485"[^>]*height="206"/);
  assert.match(html, /src="assets\/study-life\.jpg"[^>]*width="1448"[^>]*height="1086"/);
});

test("hero portrait stays visually constrained after image dimensions load", () => {
  assert.match(
    css,
    /\.resume-style\.resume-compact \.hero-profile-card img\s*{[\s\S]*?aspect-ratio:\s*4\s*\/\s*5;[\s\S]*?height:\s*auto;[\s\S]*?object-fit:\s*cover;/
  );
  assert.match(
    css,
    /@media \(max-width:\s*920px\)[\s\S]*?\.resume-style\.resume-compact \.hero-profile-card img\s*{[\s\S]*?aspect-ratio:\s*1;[\s\S]*?height:\s*auto;/
  );
});

test("person structured data is present and parseable", () => {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, "missing JSON-LD script");

  const data = JSON.parse(match[1]);
  assert.equal(data["@type"], "Person");
  assert.equal(data.name, "Yihang (Henry) Yang");
  assert.equal(data.jobTitle, "Biomedical Field Service Engineer");
  assert.match(data.description, /Sydney-based biomedical field service engineer/);
  assert.equal(data.url, "https://yangyihang96.com/");
  assert.equal(data.image, "https://yangyihang96.com/assets/yihang-professional-headshot-formal-4k.jpg");
  assert.equal(data.email, "mailto:yangyihang96@gmail.com");
  assert.ok(data.knowsAbout.includes("Medical device maintenance"));
  assert.ok(data.knowsAbout.includes("Service documentation"));
  assert.deepEqual(data.sameAs, ["https://github.com/yangyihang96"]);
});

test("robots and sitemap advertise the live domain", () => {
  const robots = read("robots.txt");
  const sitemap = read("sitemap.xml");

  assert.match(robots, /Sitemap: https:\/\/yangyihang96\.com\/sitemap\.xml/);
  assert.match(robots, /Disallow: \/assets\/personal-gallery\//);
  assert.match(sitemap, /<loc>https:\/\/yangyihang96\.com\/<\/loc>/);
});
