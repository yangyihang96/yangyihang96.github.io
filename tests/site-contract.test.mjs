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
  assert.match(html, /href="styles\.css\?v=hero-portrait-1"/);
  assert.match(html, /src="script\.js\?v=hero-portrait-1"/);
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

test("compact homepage keeps capability matrix visible", () => {
  assert.match(html, /id="capabilities"/);
  assert.match(html, /Employment checks/);
  assert.match(html, /Sydney field travel/);
  assert.doesNotMatch(css, /\.resume-style\.resume-compact \.capabilities[\s\S]{0,180}display:\s*none/);
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
