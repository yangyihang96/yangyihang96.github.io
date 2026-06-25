import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const html = read("index.html");
const css = read("styles.css");
const script = read("script.js");
const publicSource = `${html}\n${css}\n${script}`;
const linkedinUrl = "https://au.linkedin.com/in/henry-yang-9644382bb";
const githubUrl = "https://github.com/yangyihang96";
const privacySentence =
  "De-identified service examples are shown here. Formal certificates, customer-specific records, and sensitive documents are available only through an authorized hiring process.";

const sectionById = (id) => {
  const start = html.indexOf(`<section id="${id}"`);
  assert.notEqual(start, -1, `missing section #${id}`);
  const end = html.indexOf("</section>", start);
  assert.notEqual(end, -1, `missing end for section #${id}`);
  return html.slice(start, end);
};

const sectionByClass = (className) => {
  const start = html.indexOf(`<section class="${className}`);
  assert.notEqual(start, -1, `missing section .${className}`);
  const end = html.indexOf("</section>", start);
  assert.notEqual(end, -1, `missing end for section .${className}`);
  return html.slice(start, end);
};

const articleCount = (source) => (source.match(/<article>/g) || []).length;

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

test("metadata targets a Sydney biomedical field-service recruiter", () => {
  assert.match(html, /<title>Yihang \(Henry\) Yang \| Biomedical Field Service Engineer in Sydney<\/title>/);
  assert.match(
    html,
    /<meta name="description" content="Sydney-based Biomedical Field Service Engineer with nearly three years of field and workshop service experience across hospital and pharmacy medical equipment\."/
  );
  assert.match(html, /href="styles\.css\?v=field-service-snapshot-1"/);
  assert.match(html, /src="script\.js\?v=field-service-snapshot-1"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/yangyihang96\.com\/">/);
  assert.doesNotMatch(html, /http:\/\/yangyihang96\.com/);

  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, "missing JSON-LD");
  const data = JSON.parse(match[1]);
  assert.equal(data.name, "Yihang (Henry) Yang");
  assert.equal(data.jobTitle, "Biomedical Field Service Engineer");
  assert.equal(
    data.description,
    "Sydney-based Biomedical Field Service Engineer with nearly three years of field and workshop service experience across hospital and pharmacy medical equipment."
  );
  assert.deepEqual(data.sameAs, [linkedinUrl, githubUrl]);
});

test("hero leads with role, experience, mobility, work-right readiness, and three primary actions", () => {
  const hero = sectionByClass("hero");
  const heroActions = hero.match(/<div class="hero-actions">([\s\S]*?)<\/div>/)?.[1] ?? "";

  assert.match(hero, /<p class="eyebrow">Yihang \(Henry\) Yang · Sydney<\/p>/);
  assert.match(hero, /<h1 id="hero-title">Biomedical Field Service Engineer \| Sydney<\/h1>/);
  assert.match(
    hero,
    /Nearly three years of full-time field and workshop service experience across hospital and pharmacy medical equipment - PM, fault diagnosis, repair, installation support, verification, and service documentation\./
  );
  assert.match(hero, /<dt>Experience<\/dt>\s*<dd>Nearly 3 years<\/dd>/);
  assert.match(hero, /<dt>Mobility<\/dt>\s*<dd>Driver licence \+ field travel<\/dd>/);
  assert.match(hero, /<dt>Work rights<\/dt>\s*<dd>Employer verification ready<\/dd>/);
  assert.match(hero, /class="hero-skill-tags"/);
  assert.match(hero, /Ventilation/);
  assert.match(hero, /Patient Monitoring/);
  assert.match(hero, /Pharmacy Automation/);
  assert.match(hero, /Simpro/);
  assert.match(heroActions, />Download Resume</);
  assert.match(heroActions, />Email Henry</);
  assert.match(heroActions, />LinkedIn</);
  assert.match(heroActions, new RegExp(linkedinUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.doesNotMatch(heroActions, /GitHub|DOCX|View De-identified Cases|Private proof|Hiring docs/);
});

test("defensive privacy language is compressed to one clear boundary", () => {
  const matches = publicSource.match(new RegExp(privacySentence.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || [];
  assert.equal(matches.length, 1);
  assert.doesNotMatch(
    publicSource,
    /Private proof|Proof boundary|Screening Snapshot|Hiring docs|Public-safe summary|Private after role fit|Sensitive check material|Request documents after fit/
  );
  assert.doesNotMatch(
    publicSource,
    /passport|VEVO|visa grant|visa subclass|date of birth|DOB|student ID|护照|签证号|签证批签|出生日期|学生号/i
  );
});

test("navigation and section order follow the recruiter reading path", () => {
  assert.match(
    html,
    /<nav class="site-nav" aria-label="Primary navigation">\s*<a href="#experience">Experience<\/a>\s*<a href="#capabilities">Scope<\/a>\s*<a href="#case-notes">Cases<\/a>\s*<a href="#study">Education<\/a>\s*<a href="#contact">Contact<\/a>\s*<\/nav>/
  );

  const fitIndex = html.indexOf('<section class="fit-strip');
  const experienceIndex = html.indexOf('<section id="experience"');
  const scopeIndex = html.indexOf('<section id="capabilities"');
  const targetRolesIndex = html.indexOf('<section class="target-roles');
  const caseIndex = html.indexOf('<section id="case-notes"');
  const studyIndex = html.indexOf('<section id="study"');
  const contactIndex = html.indexOf('<section id="contact"');

  assert.ok(fitIndex > -1, "missing quick fit section");
  assert.ok(fitIndex < experienceIndex);
  assert.ok(experienceIndex < scopeIndex);
  assert.ok(scopeIndex < targetRolesIndex);
  assert.ok(targetRolesIndex < caseIndex);
  assert.ok(caseIndex < studyIndex);
  assert.ok(studyIndex < contactIndex);
  assert.equal(html.includes('<section class="proof-strip'), false);
  assert.equal(html.includes('<section class="brief-section'), false);
  assert.equal(html.includes('<section id="certifications"'), false);
});

test("quick fit and proof points answer HR questions without sounding like an interview script", () => {
  const fit = sectionByClass("fit-strip");

  assert.match(fit, /<p class="section-kicker">Field Service Snapshot<\/p>/);
  assert.match(fit, /<h2 id="fit-title">Field-ready service profile for hospital and pharmacy equipment\.<\/h2>/);
  assert.match(fit, /Nearly 3 years field\/workshop service/);
  assert.match(fit, /Driver licence and Sydney field travel/);
  assert.match(fit, /<span>Records<\/span>\s*<strong>Simpro, service reports, equipment history, handover<\/strong>/);
  assert.match(fit, /class="proof-grid" aria-label="Recruiter proof points"/);
  assert.equal(articleCount(fit.match(/<div class="proof-grid"[\s\S]*?<\/div>/)?.[0] ?? ""), 4);
  assert.doesNotMatch(fit, /Quick Fit|What a recruiter needs|Ask in interview|Private check|Public evidence|what proof to request/i);
});

test("target roles make the career direction explicit without adding another proof section", () => {
  const targetRoles = sectionByClass("target-roles");

  assert.match(targetRoles, /<p class="section-kicker">Target Roles<\/p>/);
  assert.match(targetRoles, /Biomedical Field Service Engineer/);
  assert.match(targetRoles, /Medical Device Service Engineer/);
  assert.match(targetRoles, /Clinical Engineering Service Support/);
  assert.match(targetRoles, /Biomedical Technician \/ Service Technician/);
  assert.doesNotMatch(targetRoles, /student|research assistant|data scientist/i);
});

test("equipment and service scope merges skills and training into equipment categories", () => {
  const scope = sectionById("capabilities");

  assert.match(scope, /<p class="section-kicker">Equipment &amp; Service Scope<\/p>/);
  assert.match(scope, /<h2 id="capabilities-title">Where the service experience is strongest\.<\/h2>/);
  assert.equal(articleCount(scope), 6);
  assert.match(scope, /Respiratory service/);
  assert.match(scope, /Patient monitoring/);
  assert.match(scope, /Ultrasound systems/);
  assert.match(scope, /DEXA and X-ray support/);
  assert.match(scope, /Pharmacy automation/);
  assert.match(scope, /Service records and handover/);
  assert.match(scope, /Hands-on service exposure/);
  assert.match(scope, /Training completed/);
  assert.match(scope, /Installation support/);
  assert.match(scope, /Documentation \/ handover exposure/);
});

test("case notes include de-identified outcomes and operational value", () => {
  const cases = sectionById("case-notes");

  assert.match(cases, new RegExp(privacySentence.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.equal((cases.match(/<dt>Outcome<\/dt>/g) || []).length, 3);
  assert.match(cases, /Returned equipment with a clear next-use status and service close-out trail/);
  assert.match(cases, /Anonymised troubleshooting example/);
  assert.match(cases, /A user-reported intermittent fault was reviewed against device condition, service history, and reproducible symptoms/);
  assert.match(cases, /Helped make repeat troubleshooting faster by keeping service actions, test notes, equipment history, and customer updates aligned in Simpro/);
  assert.doesNotMatch(cases, /Reduced repeat troubleshooting time/);
  assert.doesNotMatch(cases, /customer names|serial numbers|internal records/i);
});

test("education stays concise and work-right proof is not over-explained", () => {
  const study = sectionById("study");

  assert.equal(articleCount(study), 3);
  assert.match(study, /Master of Philosophy/);
  assert.match(study, /Awarded Jun 2024/);
  assert.match(study, /Bachelor of Biomedical Engineering/);
  assert.match(study, /Flexible Electrodes for Smart Bandages/);
  assert.doesNotMatch(study, /study-proof-strip|Academic records|submission\/examination documents|Eligibility checks stay private/);
});

test("contact prioritizes email, resume, LinkedIn, GitHub, availability, and field readiness", () => {
  const contact = sectionById("contact");

  assert.match(contact, /Ready for biomedical field service conversations\./);
  assert.match(contact, /Email Henry/);
  assert.match(contact, /Resume PDF/);
  assert.match(contact, /Resume DOCX/);
  assert.match(contact, new RegExp(linkedinUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(contact, new RegExp(githubUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.doesNotMatch(contact.match(/<div class="contact-action-buttons">([\s\S]*?)<\/div>/)?.[1] ?? "", /GitHub/);
  assert.match(contact, /<div class="contact-secondary-links" aria-label="Professional links">/);
  assert.match(contact, /<strong>Availability<\/strong>\s*<span>Upon discussion<\/span>/);
  assert.match(contact, /<strong>Driver licence<\/strong>\s*<span>Sydney field travel ready<\/span>/);
  assert.match(contact, /<strong>Work rights<\/strong>\s*<span>Employer verification ready<\/span>/);
  assert.doesNotMatch(contact, /tel:|\+61\s?4|\b04\d{2}\b|phone-number|mobile-number/);
});

test("links remain recognizable in body copy while navigation and buttons stay button-like", () => {
  assert.doesNotMatch(css, /a\s*{\s*color:\s*inherit;\s*text-decoration:\s*none;\s*}/);
  assert.match(css, /a\s*{[\s\S]*?color:\s*var\(--teal\);[\s\S]*?text-decoration:\s*underline;/);
  assert.match(css, /\.site-nav a,[\s\S]*?\.button,[\s\S]*?\.brand,[\s\S]*?\.nav-email-link,[\s\S]*?\.nav-resume-link[\s\S]*?text-decoration:\s*none;/);
  assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /animation-duration:\s*0\.001ms !important;/);
  assert.match(css, /transition-duration:\s*0\.001ms !important;/);
});

test("resume PDF and DOCX match the revised HR-first positioning", () => {
  const pdfText = extractPdfText();
  const docxText = extractDocxText();
  const combined = `${pdfText}\n${docxText}`;

  assert.match(combined, /Biomedical Field Service Engineer \| Sydney/);
  assert.match(combined, /Nearly three years of full-time field and workshop service experience at Nova Biomedical Australia/);
  assert.match(combined, /Sydney field travel/);
  assert.match(combined, /Driver licence/);
  assert.match(combined, /Work-right evidence ready/);
  assert.match(combined, /PM, fault diagnosis, repair, installation support, verification, and service documentation/);
  assert.match(combined, /Nova Biomedical Australia/);
  assert.match(combined, /Returned devices with functional checks, performance evidence, or clear escalation status/);
  assert.match(combined, /Simpro work orders, service reports, equipment history, and customer updates/);
  assert.match(combined, /Field service tools/i);
  assert.match(combined, /Simpro \/ CMMS/);
  assert.match(combined, /electrical safety testing awareness/i);
  assert.match(combined, /Target roles/i);
  assert.match(combined, /Biomedical Technician \/ Service Technician/);
  assert.match(combined, /Master of Philosophy, The University of Sydney, awarded Jun 2024/);
  assert.doesNotMatch(combined, /DOCUMENT FORMAT|PDF for quick review|Reduced repeat troubleshooting time/);
  assert.doesNotMatch(combined, /Full-time,\s*38 hours per week|38 hours per week|Nova Biomedical Pty Ltd/);
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
  assert.doesNotMatch(pdfSource, /127\.0\.0\.1|localhost|HeadlessChrome|Mozilla\/5\.0|Skia\/PDF/);
  assert.match(docxCoreProperties, /<dc:title>Henry Yang Biomedical Field Service Engineer Resume<\/dc:title>/);
  assert.match(docxCoreProperties, /<dc:creator>Yihang Henry Yang<\/dc:creator>/);
  assert.match(docxCoreProperties, /<dc:description>Biomedical field service resume for Yihang Henry Yang<\/dc:description>/);
});

test("published assets, robots, and sitemap stay aligned with the live site", () => {
  assert.ok(fs.existsSync(path.join(root, "assets/Henry_Yang_Biomedical_Engineer_Resume.pdf")));
  assert.ok(fs.existsSync(path.join(root, "assets/Henry_Yang_Biomedical_Engineer_Resume.docx")));
  assert.ok(fs.existsSync(path.join(root, "assets/logo-nova-biomedical-au.png")));
  assert.match(html, /src="assets\/logo-nova-biomedical-au\.png"/);
  assert.match(html, /alt="Nova Biomedical Australia logo"/);

  const robots = read("robots.txt");
  const sitemap = read("sitemap.xml");
  assert.match(robots, /Sitemap: https:\/\/yangyihang96\.com\/sitemap\.xml/);
  assert.match(robots, /Disallow: \/assets\/personal-gallery\//);
  assert.match(sitemap, /<loc>https:\/\/yangyihang96\.com\/<\/loc>/);
  assert.match(sitemap, /<lastmod>2026-06-25<\/lastmod>/);
});
