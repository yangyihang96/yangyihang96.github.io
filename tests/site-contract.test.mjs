import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const html = read("index.html");
const css = read("styles.css");

const sectionBody = (className) => {
  const match = html.match(new RegExp(`<div class="${className}"[^>]*>([\\s\\S]*?)</div>`));
  assert.ok(match, `missing ${className}`);
  return match[1];
};

const articleCount = (className) => {
  return (sectionBody(className).match(/<article>/g) || []).length;
};

test("site uses HTTPS canonical and sharing metadata", () => {
  assert.match(html, /<link rel="canonical" href="https:\/\/yangyihang96\.com\/">/);
  assert.match(html, /property="og:url" content="https:\/\/yangyihang96\.com\/"/);
  assert.match(html, /property="og:image" content="https:\/\/yangyihang96\.com\/assets\//);
  assert.doesNotMatch(html, /http:\/\/yangyihang96\.com/);
});

test("hero exposes recruiter actions and downloadable resume file", () => {
  assert.match(html, /Download Resume/);
  assert.match(html, /href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.docx"/);
  assert.match(html, /download/);
  assert.match(html, /github\.com\/yangyihang96/);
  assert.ok(fs.existsSync(path.join(root, "assets/Henry_Yang_Biomedical_Engineer_Resume.docx")));
});

test("compact homepage keeps capability matrix visible", () => {
  assert.match(html, /id="capabilities"/);
  assert.match(html, /Employment checks/);
  assert.match(html, /Sydney field travel/);
  assert.doesNotMatch(css, /\.resume-style\.resume-compact \.capabilities[\s\S]{0,180}display:\s*none/);
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
});

test("person structured data is present and parseable", () => {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, "missing JSON-LD script");

  const data = JSON.parse(match[1]);
  assert.equal(data["@type"], "Person");
  assert.equal(data.name, "Yihang (Henry) Yang");
  assert.equal(data.jobTitle, "Biomedical Field Service Engineer");
  assert.equal(data.url, "https://yangyihang96.com/");
  assert.equal(data.email, "mailto:yangyihang96@gmail.com");
  assert.deepEqual(data.sameAs, ["https://github.com/yangyihang96"]);
});

test("robots and sitemap advertise the live domain", () => {
  const robots = read("robots.txt");
  const sitemap = read("sitemap.xml");

  assert.match(robots, /Sitemap: https:\/\/yangyihang96\.com\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/yangyihang96\.com\/<\/loc>/);
});
