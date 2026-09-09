import assert from "node:assert/strict";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const html = read("index.html");
const css = read("styles.css");
const script = read("script.js");
const themeInit = read("theme-init.js");
const version = "portfolio-v16-20260910";
const linkedinUrl = "https://au.linkedin.com/in/henry-yang-9644382bb";
const githubUrl = "https://github.com/yangyihang96";
const sriSha384 = (source) =>
  "sha384-" + crypto.createHash("sha384").update(source).digest("base64");

// Exercise the actual browser functions with only their platform boundaries stubbed.
const browserFunction = (name, context) => {
  const start = script.indexOf(`const ${name} =`);
  assert.notEqual(start, -1);
  const end = script.indexOf("\n};", start) + 3;
  return vm.runInNewContext(script.slice(start, end) + `\n${name}`, context);
};

const sectionById = (id) => {
  const start = html.indexOf('<section id="' + id + '"');
  assert.notEqual(start, -1, "missing section #" + id);
  const end = html.indexOf("</section>", start);
  assert.notEqual(end, -1, "missing end for section #" + id);
  return html.slice(start, end);
};

const sectionByClass = (className) => {
  const start = html.indexOf('<section class="' + className);
  assert.notEqual(start, -1, "missing section ." + className);
  const end = html.indexOf("</section>", start);
  assert.notEqual(end, -1, "missing end for section ." + className);
  return html.slice(start, end);
};

const extractPdfText = () =>
  execFileSync(
    "python3",
    [
      "-c",
      [
        "from pypdf import PdfReader",
        "r=PdfReader('assets/Henry_Yang_Biomedical_Engineer_Resume.pdf')",
        "print('\\n'.join((p.extract_text() or '') for p in r.pages))",
      ].join("; "),
    ],
    { cwd: root, encoding: "utf8" }
  );

const extractDocxText = () =>
  execFileSync(
    "python3",
    [
      "-c",
      [
        "from docx import Document",
        "d=Document('assets/Henry_Yang_Biomedical_Engineer_Resume.docx')",
        "print('\\n'.join(p.text for p in d.paragraphs if p.text))",
      ].join("; "),
    ],
    { cwd: root, encoding: "utf8" }
  );

test("clipboard denial falls back, reports failure, and always restores focus and removes the field", async () => {
  for (const mode of ["modern", "denied", "missing", "false", "throws"]) {
    let removed = 0, focused = 0, fallback = 0;
    const textarea = { setAttribute() {}, select() {}, remove() { removed++; } };
    const document = {
      activeElement: { focus() { focused++; } },
      body: { append() {} },
      createElement: () => textarea,
      execCommand: () => {
        fallback++;
        if (mode === "throws") throw new Error("Unavailable");
        return mode !== "false";
      },
    };
    const navigator = mode === "missing" ? {} : { clipboard: { writeText: async () => {
      if (mode !== "modern") throw new Error("Denied");
    } } };
    const copy = browserFunction("copyTextToClipboard", { document, navigator });
    if (["false", "throws"].includes(mode)) await assert.rejects(copy("test@example.com"));
    else await copy("test@example.com");
    const expected = mode === "modern" ? 0 : 1;
    assert.equal(fallback, expected, mode);
    assert.equal(removed, expected, mode);
    assert.equal(focused, expected, mode);
    if (expected) assert.equal(textarea.value, "test@example.com");
  }
});

test("closing compact navigation returns focus only when its focused control would be hidden", () => {
  for (const [compact, inside, open, expected] of [
    [true, true, false, 1], [true, false, false, 0],
    [true, true, true, 0], [false, true, false, 0],
  ]) {
    let focused = 0;
    const attributes = {};
    const setMenuOpen = browserFunction("setMenuOpen", {
      compactMenuMedia: { matches: compact },
      document: { activeElement: {} },
      headerActions: { contains: () => inside },
      header: { classList: { toggle() {} } },
      menuToggle: { focus() { focused++; }, setAttribute(name, value) { attributes[name] = value; } },
      getActiveDictionary: () => ({ menu: { open: "Open", close: "Close" } }),
    });
    setMenuOpen(open);
    assert.equal(focused, expected);
    assert.equal(attributes["aria-expanded"], String(compact && open));
    assert.equal(attributes["aria-label"], compact && open ? "Close" : "Open");
  }
});

test("metadata and structured data target a Sydney biomedical field-service recruiter", () => {
  assert.match(html, /<title>Yihang \(Henry\) Yang \| Biomedical Field Service Engineer in Sydney<\/title>/);
  assert.match(html, /<meta name="description" content="Sydney-based Biomedical Field Service Engineer with three years/);
  assert.match(html, /<link rel="canonical" href="https:\/\/yangyihang96\.com\/">/);
  assert.ok(html.includes("theme-init.js?v=" + version));
  assert.ok(html.includes("styles.css?v=" + version));
  assert.ok(html.includes("script.js?v=" + version));

  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, "missing JSON-LD");
  const person = JSON.parse(match[1]);
  assert.equal(person.name, "Yihang (Henry) Yang");
  assert.equal(person.jobTitle, "Biomedical Field Service Engineer");
  assert.equal(person.address.addressLocality, "Sydney");
  assert.deepEqual(person.sameAs, [linkedinUrl, githubUrl]);
  ["Preventive maintenance", "Medical device repair", "Installation support"].forEach((term) =>
    assert.ok(person.knowsAbout.includes(term), term)
  );
});

test("document CSP keeps the static site surface constrained", () => {
  const csp = html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]+)">/)?.[1];
  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(csp);
  assert.ok(jsonLd);
  const hash = crypto.createHash("sha256").update(jsonLd).digest("base64");
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "script-src-attr 'none'",
    "style-src 'self'",
    "img-src 'self'",
    "font-src 'none'",
    "connect-src 'none'",
    "form-action 'none'",
    "frame-src 'none'",
    "worker-src 'none'",
    "media-src 'none'",
    "manifest-src 'none'",
    "require-trusted-types-for 'script'",
    "trusted-types default",
    "upgrade-insecure-requests",
  ];
  directives.forEach((directive) => assert.ok(csp.includes(directive), directive));
  assert.ok(csp.includes("sha256-" + hash));
  assert.doesNotMatch(csp, /unsafe-inline|unsafe-eval|\*/);
  assert.doesNotMatch(csp, /img-src[^;]*data:/);
});

test("static assets carry exact subresource integrity metadata", () => {
  assert.ok(html.includes('<script src="theme-init.js?v=' + version + '" integrity="' + sriSha384(themeInit) + '" crossorigin="anonymous"></script>'));
  assert.ok(html.includes('<link rel="stylesheet" href="styles.css?v=' + version + '" integrity="' + sriSha384(css) + '" crossorigin="anonymous">'));
  assert.ok(html.includes('<script defer src="script.js?v=' + version + '" integrity="' + sriSha384(script) + '" crossorigin="anonymous"></script>'));
});

test("hosting security files remain aligned with the document policy", () => {
  const headers = read("_headers");
  const securityTxt = read(".well-known/security.txt");
  const documentCsp = html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]+)">/)?.[1];
  const headerCsp = headers.match(/^\s*Content-Security-Policy:\s*(.+)$/m)?.[1];
  assert.ok(fs.existsSync(path.join(root, ".nojekyll")));
  assert.equal(headerCsp?.replace("; frame-ancestors 'none'", ""), documentCsp);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /X-Frame-Options: DENY/);
  assert.match(headers, /Strict-Transport-Security: max-age=31536000/);
  assert.match(headers, /Permissions-Policy:/);
  assert.match(securityTxt, /Contact: mailto:yangyihang96@gmail\.com/);
});

test("the public page avoids phone exposure and unsupported qualification claims", () => {
  const publicBody = html.slice(html.indexOf("<body"));
  assert.doesNotMatch(publicBody, /tel:|\+61\s?4|\b04\d{2}[\s-]?\d{3}[\s-]?\d{3}\b/);
  assert.doesNotMatch(publicBody + "\n" + script, /Restricted Electrical Licence|AHPRA|ISO 13485|IEC 60601|AS\/NZS 3551|permanent resident|citizen/i);
});

test("resume PDF and DOCX retain the verified field-service positioning", () => {
  const resumeTexts = [extractPdfText(), extractDocxText()];
  for (const text of resumeTexts) {
    assert.ok(text.replace(/\s+/g, " ").includes("AI tools: Working knowledge of Codex, Claude Code and ChatGPT for research, drafting and coding assistance, with outputs reviewed before use."));
  }
  const combined = resumeTexts.join("\n");
  [
    "Biomedical Field Service Engineer | Sydney",
    "Three years of field and workshop service experience at Nova Biomedical Australia",
    "Sydney field travel",
    "Driver licence",
    "Work rights available for employer verification",
    "Nova Biomedical Australia",
    "Simpro work orders, service reports, equipment history, and communication notes",
    "Master of Philosophy, The University of Sydney, awarded Jun 2024",
  ].forEach((text) => assert.ok(combined.includes(text), text));
  assert.match(combined, /electrical safety testing awareness/i);
  assert.doesNotMatch(combined, /38 hours per week|Nova Biomedical Pty Ltd|permanent resident/i);
});

test("downloadable resume files keep professional metadata", () => {
  const pdfSource = fs.readFileSync(path.join(root, "assets/Henry_Yang_Biomedical_Engineer_Resume.pdf"), "latin1");
  const docxCoreProperties = execFileSync(
    "/usr/bin/unzip",
    ["-p", path.join(root, "assets/Henry_Yang_Biomedical_Engineer_Resume.docx"), "docProps/core.xml"],
    { encoding: "utf8" }
  );
  assert.match(pdfSource, /\/Title \(Henry Yang Biomedical Field Service Engineer Resume\)/);
  assert.match(pdfSource, /\/Author \(Yihang Henry Yang\)/);
  assert.doesNotMatch(pdfSource, /127\.0\.0\.1|localhost|HeadlessChrome|Mozilla\/5\.0/);
  assert.match(docxCoreProperties, /<dc:title>Henry Yang Biomedical Field Service Engineer Resume<\/dc:title>/);
  assert.match(docxCoreProperties, /<dc:creator>Yihang Henry Yang<\/dc:creator>/);
});

test("published assets, robots, and sitemap stay aligned with the site", () => {
  [
    "favicon.svg",
    "favicon.ico",
    "apple-touch-icon.png",
    "assets/yihang-professional-headshot-960.webp",
    "assets/yihang-professional-headshot-1400.webp",
    "assets/biomedical-service-workbench-960.webp",
    "assets/biomedical-service-workbench-1400.webp",
    "assets/Henry_Yang_Biomedical_Engineer_Resume.pdf",
    "assets/Henry_Yang_Biomedical_Engineer_Resume.docx",
    "assets/logo-nova-biomedical-au.png",
    "assets/logo-lundbeck.svg",
    "assets/logo-university-of-sydney.svg",
    "assets/logo-university-of-sydney-white.svg",
    "assets/logo-philips.svg",
    "assets/logo-bd.svg",
    "assets/logo-device-technologies.svg",
    "assets/logo-hologic.svg",
    "assets/logo-jaeger.svg",
  ].forEach((asset) => assert.ok(fs.existsSync(path.join(root, asset)), asset));
  const robots = read("robots.txt");
  const sitemap = read("sitemap.xml");
  assert.match(robots, /Sitemap: https:\/\/yangyihang96\.com\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/yangyihang96\.com\/<\/loc>/);
  assert.match(sitemap, /<lastmod>2026-09-10<\/lastmod>/);
});


test("hero retains identity, contact actions and recruiter facts before mobile artwork", () => {
  const hero = sectionByClass("hero");
  for (const term of ["Yihang (Henry) Yang", "Biomedical Field Service Engineer", "Sydney-based", "Since Jul 2023", "Sydney, NSW", "Driver licence", "English / Mandarin", "Download resume", "Email Henry"]) assert.ok(hero.includes(term), term);
  assert.equal((hero.match(/<a\b/g) || []).length, 2);
  assert.match(hero, /fetchpriority="high"/);
  assert.match(hero, /hero-mobile-dark/);
  assert.match(css, /\.hero-content[^{}]*\{[^{}]*order:\s*0/);
});

test("all section anchors and native download paths remain valid", () => {
  const sections = ["experience", "capabilities", "case-notes", "ai-tools", "study", "contact"];
  let previous = -1;
  sections.forEach(id => {
    const position = html.indexOf('<section id="' + id + '"');
    assert.ok(position > previous, id); previous = position;
  });
  assert.equal((html.match(/<section\b/g) || []).length, 7);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, "unique IDs");
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), match[1]);
  for (const match of html.matchAll(/href="(assets\/[^"]+)"/g)) assert.ok(fs.existsSync(path.join(root, match[1])));
});

test("seven evidence-supported equipment categories preserve qualification boundaries", () => {
  const equipment = sectionById("capabilities");
  for (const name of ["Philips Healthcare", "BD / BD Rowa", "Device Technologies / Corpuls", "Hologic"]) assert.ok(equipment.includes(name));
  assert.equal((equipment.match(/data-platform-panel=/g) || []).length, 7);
  assert.doesNotMatch(equipment, /Jaeger|Vyntus|SentrySuite|certified|official partner/i);
  assert.match(equipment, /Completed training/);
  for (const model of ["Affiniti", "CX50", "Efficia CM10", "MX40", "FM20", "PageWriter", "HeartStart Intrepid", "Horizon EMI"]) assert.ok(equipment.includes(model), model);
  assert.match(equipment, /data-platform-navigation[^>]*hidden/);
  assert.equal((equipment.match(/<noscript>/g) || []).length, 6);
});

test("platform selection updates panels, focus and deferred image loading together", () => {
  const ids = ["philips", "philips-ultrasound", "philips-monitor", "philips-ecg", "bd", "corpuls", "hologic"];
  const tabs = ids.map(id => ({ dataset: { platform: id }, attrs: {}, setAttribute(k,v) { this.attrs[k]=v; }, focus() { this.focused=true; } }));
  const panels = ids.map(id => ({ dataset: { platformPanel: id } }));
  const loaded = [];
  const activate = browserFunction("activatePlatform", { platformTabs: tabs, platformPanels: panels, hydrateArt: panel => loaded.push(panel.dataset.platformPanel) });
  activate("bd", true);
  assert.deepEqual(panels.map(p => p.hidden), ids.map(id => id !== "bd"));
  assert.deepEqual(tabs.map(t => t.tabIndex), ids.map(id => id === "bd" ? 0 : -1));
  assert.equal(tabs[4].attrs["aria-selected"], "true");
  assert.equal(tabs[4].focused, true);
  assert.deepEqual(loaded, ["bd"]);
  activate("unknown");
  assert.deepEqual(loaded, ["bd"]);
});

test("service and AI notes use independently readable native disclosure", () => {
  for (const [id, count] of [["case-notes", 4], ["ai-tools", 2]]) {
    const section = sectionById(id);
    assert.equal((section.match(/<details\b/g) || []).length, count);
    assert.equal((section.match(/<details[^>]*\bopen/g) || []).length, 1);
    assert.equal((section.match(/<summary>/g) || []).length, count);
    assert.doesNotMatch(section, /<details[^>]*\bname=/);
  }
  for (const term of ["Assess", "Follow procedure", "Verify", "handover", "user-reported fault"]) assert.ok(sectionById("case-notes").includes(term));
  for (const term of ["Codex", "Claude Code", "ChatGPT", "outputs reviewed before use", "Personal website", "Resume &amp; document workflow"]) assert.ok(sectionById("ai-tools").includes(term));
});

test("stable bilingual keys cover every translated leaf and preserve unsafe-language fallback", () => {
  const match = script.match(/text: (\{[\s\S]*?\}),\n    menu: \{ open: "打开导航"/);
  assert.ok(match);
  const zh = JSON.parse(match[1]);
  for (const key of new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]))) assert.equal(typeof zh[key], "string", key);
  const initial = browserFunction("getInitialLanguage", { localStorage: { getItem: () => "__proto__" }, isSupportedLanguage: value => ["en", "zh"].includes(value) });
  assert.equal(initial(), "en");
  assert.match(script, /Object\.hasOwn\(translations, language\)/);
  assert.doesNotMatch(script, /nth-child|innerHTML|insertAdjacentHTML|eval\(/);
});

test("keyboard equipment navigation and safe long-section navigation are present", () => {
  for (const key of ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"]) assert.ok(script.includes('"' + key + '"'));
  const target = {id:"ai-tools"};
  const getTarget = browserFunction("getHashTarget", {document:{getElementById:id => id==="ai-tools" ? target : null}});
  assert.equal(getTarget("#ai-tools"), target);
  assert.equal(getTarget("#%invalid"), null);
  assert.equal(getTarget("https://example.com"), null);
  assert.match(script, /getBoundingClientRect\(\)\.top <= offset/);
  assert.match(script, /requestAnimationFrame\(updateActiveNav\)/);
  assert.match(script, /passive: true/);
});

test("responsive themes and reduced-motion mode retain readable content", () => {
  for (const width of [1120,900,700]) assert.ok(css.includes("(max-width: " + width + "px)"));
  assert.match(css, /prefers-color-scheme: dark/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /animation-timeline: scroll\(root\)/);
  assert.match(css, /\[hidden\]/);
  assert.match(css, /\.is-menu-open \.header-actions/);
  assert.match(themeInit, /#0d1828/);
  assert.match(themeInit, /#f4f6f8/);
});

test("every image has fixed dimensions and all local image references exist", () => {
  const images=[...html.matchAll(/<img\b[^>]*>/g)].map(m=>m[0]);
  for(const img of images) {
    assert.match(img,/\bwidth="\d+"/,img);
    assert.match(img,/\bheight="\d+"/,img);
    assert.match(img,/\balt="/,img);
  }
  for(const match of html.matchAll(/(?:src|data-src)="(assets\/[^"]+)"/g)) assert.ok(fs.existsSync(path.join(root,match[1])),match[1]);
  for(const [name,max] of [["hero-mobile-light-960.webp",250000],["hero-mobile-dark-960.webp",250000],["hero-light-1920.webp",450000],["hero-dark-1920.webp",450000]]) assert.ok(fs.statSync(path.join(root,"assets/studio-v16",name)).size<=max,name);
});
