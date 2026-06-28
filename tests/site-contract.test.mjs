import assert from "node:assert/strict";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const html = read("index.html");
const css = read("styles.css");
const script = read("script.js");
const themeInit = read("theme-init.js");
const publicSource = `${html}\n${css}\n${script}\n${themeInit}`;
const linkedinUrl = "https://au.linkedin.com/in/henry-yang-9644382bb";
const githubUrl = "https://github.com/yangyihang96";
const defensiveCopyPattern =
  /De-identified|Anonymised|Based on service records|Small clinics|individual sites|job numbers|serial numbers|customer records|public endorsements|intentionally not published|Formal certificates|customer-specific records|sensitive documents|authorized hiring process|不发布|不公开|小诊所|具体站点|工单号|序列号|客户记录|公开背书|敏感记录|敏感文件|授权招聘流程|匿名服务案例|匿名故障排查案例/i;

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
  assert.match(html, /src="theme-init\.js\?v=zh-translation-fix-1"/);
  assert.match(html, /href="styles\.css\?v=zh-translation-fix-1"/);
  assert.match(html, /src="script\.js\?v=zh-translation-fix-1"/);
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

test("document security policy constrains the static site surface", () => {
  const csp = html.match(
    /<meta http-equiv="Content-Security-Policy" content="([^"]+)">/
  )?.[1];
  assert.ok(csp, "missing CSP meta");

  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(jsonLd, "missing JSON-LD");
  const jsonLdHash = crypto.createHash("sha256").update(jsonLd).digest("base64");

  assert.match(csp, /default-src 'self'/);
  assert.match(csp, /base-uri 'self'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, new RegExp(`script-src 'self' 'sha256-${jsonLdHash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}'`));
  assert.match(csp, new RegExp(`script-src-elem 'self' 'sha256-${jsonLdHash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}'`));
  assert.match(csp, /script-src-attr 'none'/);
  assert.match(csp, /style-src 'self'/);
  assert.match(csp, /style-src-elem 'self'/);
  assert.match(csp, /style-src-attr 'none'/);
  assert.match(csp, /img-src 'self' data:/);
  assert.match(csp, /connect-src 'none'/);
  assert.match(csp, /form-action 'none'/);
  assert.match(csp, /frame-src 'none'/);
  assert.match(csp, /child-src 'none'/);
  assert.match(csp, /worker-src 'none'/);
  assert.match(csp, /require-trusted-types-for 'script'/);
  assert.match(csp, /trusted-types default/);
  assert.match(csp, /upgrade-insecure-requests/);
  assert.doesNotMatch(csp, /unsafe-inline|unsafe-eval|\*/);
  assert.match(html, /<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">/);
});

test("static security files document deployable response headers and reporting contact", () => {
  const headers = read("_headers");
  const securityTxt = read(".well-known/security.txt");
  const jekyllConfig = read("_config.yml");

  assert.ok(fs.existsSync(path.join(root, ".nojekyll")));
  assert.match(jekyllConfig, /include:\s*\n\s*- \.well-known/);
  assert.match(securityTxt, /Contact: mailto:yangyihang96@gmail\.com/);
  assert.match(securityTxt, /Expires: 2027-06-28T00:00:00Z/);
  assert.match(securityTxt, /Canonical: https:\/\/yangyihang96\.com\/\.well-known\/security\.txt/);
  assert.match(headers, /Content-Security-Policy: default-src 'self'/);
  assert.match(headers, /frame-ancestors 'none'/);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /X-Frame-Options: DENY/);
  assert.match(headers, /Cross-Origin-Opener-Policy: same-origin-allow-popups/);
  assert.match(headers, /Cross-Origin-Resource-Policy: same-origin/);
  assert.match(headers, /Origin-Agent-Cluster: \?1/);
  assert.match(headers, /X-Permitted-Cross-Domain-Policies: none/);
  assert.match(headers, /Permissions-Policy:/);
  assert.match(headers, /camera=\(\)/);
  assert.match(headers, /microphone=\(\)/);
  assert.match(headers, /geolocation=\(\)/);
  assert.match(headers, /Strict-Transport-Security: max-age=31536000; includeSubDomains; preload/);
  assert.match(read("SECURITY.md"), /GitHub Pages does not let this repository set custom HTTP response headers/);
  assert.match(read("SECURITY.md"), /The current DNS points directly to GitHub Pages/);
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

test("defensive privacy language stays off the public page", () => {
  assert.doesNotMatch(publicSource, defensiveCopyPattern);
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
  const partnersIndex = html.indexOf('<section class="partners-section');
  const judgementIndex = html.indexOf('<section class="judgement-section');
  const scopeIndex = html.indexOf('<section id="capabilities"');
  const targetRolesIndex = html.indexOf('<section class="target-roles');
  const caseIndex = html.indexOf('<section id="case-notes"');
  const studyIndex = html.indexOf('<section id="study"');
  const contactIndex = html.indexOf('<section id="contact"');

  assert.ok(fitIndex > -1, "missing quick fit section");
  assert.ok(fitIndex < experienceIndex);
  assert.ok(experienceIndex < partnersIndex);
  assert.ok(partnersIndex < judgementIndex);
  assert.ok(judgementIndex < scopeIndex);
  assert.ok(scopeIndex < targetRolesIndex);
  assert.ok(targetRolesIndex < caseIndex);
  assert.ok(caseIndex < studyIndex);
  assert.ok(studyIndex < contactIndex);
  assert.equal(html.includes('<section class="proof-strip'), false);
  assert.equal(html.includes('<section class="brief-section'), false);
  assert.equal(html.includes('<section id="certifications"'), false);
});

test("commercial partner ecosystems are listed without overclaiming endorsement", () => {
  const partners = sectionByClass("partners-section");

  assert.match(partners, /<p class="section-kicker">Commercial Partner Ecosystems<\/p>/);
  assert.match(partners, /<h2 id="partners-title">Enterprise medical-technology ecosystems add context to the service scope\.<\/h2>/);
  assert.match(partners, /Representative brands and platforms help show the equipment families, workflows, and service environments covered through field service and workshop support\./);
  assert.equal(articleCount(partners), 5);
  assert.match(partners, /src="assets\/logo-philips\.svg"/);
  assert.match(partners, /src="assets\/logo-bd\.svg"/);
  assert.match(partners, /src="assets\/logo-device-technologies\.svg"/);
  assert.match(partners, /src="assets\/logo-hologic\.svg"/);
  assert.match(partners, /src="assets\/logo-jaeger\.svg"/);
  assert.match(partners, /Philips Healthcare/);
  assert.match(partners, /BD \/ BD Rowa/);
  assert.match(partners, /Device Technologies/);
  assert.match(partners, /Hologic/);
  assert.match(partners, /Jaeger Medical/);
  assert.match(partners, /Respiratory \/ monitoring \/ ultrasound/);
  assert.match(partners, /Medication management \/ automation/);
  assert.match(partners, /Critical care \/ resuscitation/);
  assert.match(partners, /Diagnostics \/ DEXA \/ surgical imaging/);
  assert.match(partners, /Respiratory diagnostics/);
  assert.match(partners, /Respironics V60/);
  assert.match(partners, /BD Pyxis/);
  assert.match(partners, /Corpuls CPR arms/);
  assert.match(partners, /Horizon DEXA/);
  assert.match(partners, /Vyntus Body/);
  assert.match(css, /\.partner-logo-frame/);
  assert.match(css, /\.partner-equipment/);
  assert.doesNotMatch(partners, /official partner|official endorsement|customer list|client list|strategic partner|Private Hospital|Medical Centre|Day Surgery|QAS|Small clinics|not published|serial numbers/i);
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
  assert.match(fit, /Service traceability/);
  assert.match(fit, /evidence for the next service decision, not just admin/);
  assert.doesNotMatch(fit, /Quick Fit|What a recruiter needs|Ask in interview|Private check|Public evidence|what proof to request/i);
});

test("clinical service judgement explains return-to-use, escalation, and regulated records", () => {
  const judgement = sectionByClass("judgement-section");

  assert.match(judgement, /<p class="section-kicker">Clinical Safety &amp; Service Judgement<\/p>/);
  assert.match(judgement, /safe return-to-use decisions/);
  assert.match(judgement, /Unsafe or uncertain devices should not be returned to use/);
  assert.match(judgement, /verified ready/);
  assert.match(judgement, /restricted or monitored use/);
  assert.match(judgement, /escalated \/ not returned/);
  assert.match(judgement, /AS\/NZS 3551-aware lifecycle thinking/);
  assert.match(judgement, /Regulated healthcare documentation mindset/);
  assert.match(judgement, /factual notes, traceable actions, escalation/);
  assert.doesNotMatch(judgement, /expert|certified|qualified compliance/i);
  assert.match(script, /\.judgement-lead > p:not\(\.section-kicker\)/);
  assert.doesNotMatch(script, /"\.judgement-lead > p":/);
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
  assert.match(scope, /<h2 id="capabilities-title">Equipment scope with conservative verification evidence\.<\/h2>/);
  assert.equal(articleCount(scope), 6);
  assert.match(scope, /Respiratory service/);
  assert.match(scope, /Patient monitoring/);
  assert.match(scope, /Ultrasound systems/);
  assert.match(scope, /DEXA and X-ray support/);
  assert.match(scope, /Pharmacy automation/);
  assert.match(scope, /Service traceability/);
  assert.match(scope, /Hands-on service exposure/);
  assert.match(scope, /Training completed/);
  assert.match(scope, /Installation support/);
  assert.match(scope, /Documentation \/ handover exposure/);
  assert.equal((scope.match(/<dt>Verification evidence<\/dt>/g) || []).length, 6);
  assert.match(scope, /Flow\/pressure-related checks/);
  assert.match(scope, /ECG\/SpO2\/NIBP-related functional checks/);
  assert.match(scope, /probe\/cable condition/);
  assert.match(scope, /safety documentation and escalation pathway/);
  assert.match(scope, /dispensing\/workflow check/);
});

test("case notes include service outcomes and operational value", () => {
  const cases = sectionById("case-notes");

  assert.match(cases, /<p class="section-kicker">Service Case Notes<\/p>/);
  assert.match(cases, /Service examples show judgement, verification and handover/);
  assert.match(cases, /These examples focus on the service logic behind maintenance, troubleshooting, documentation and release decisions/);
  assert.match(cases, /Fault diagnosis approach/);
  assert.match(cases, /Reported symptom/);
  assert.match(cases, /safety screen/);
  assert.match(cases, /device \/ accessory condition/);
  assert.match(cases, /post-service verification/);
  assert.equal((cases.match(/<dt>Outcome<\/dt>/g) || []).length, 3);
  assert.equal((cases.match(/<dt>Risk point<\/dt>/g) || []).length, 3);
  assert.equal((cases.match(/<dt>Evidence used<\/dt>/g) || []).length, 3);
  assert.equal((cases.match(/<dt>Release decision<\/dt>/g) || []).length, 3);
  assert.match(cases, /Returned equipment with a clear next-use status and service close-out trail/);
  assert.match(cases, /Troubleshooting example - intermittent user-reported fault/);
  assert.match(cases, /device condition, service history, accessories, user workflow, and reproducible symptoms/);
  assert.match(cases, /ready for use, monitored, or escalated/);
  assert.match(cases, /Service records are treated as engineering evidence/);
  assert.doesNotMatch(cases, /Reduced repeat troubleshooting time/);
  assert.doesNotMatch(cases, /customer names|serial numbers|internal records|De-identified|Anonymised|sensitive records|authorized hiring/i);
});

test("Chinese translation reads naturally for HR and field-service review", () => {
  assert.match(script, /"现场服务概览"/);
  assert.match(script, /"适合医院与药房设备服务岗位的候选人画像。"/);
  assert.match(script, /"近 3 年现场服务和车间支持经验"/);
  assert.match(script, /"呼吸治疗、患者监护、超声、DEXA、药房自动化"/);
  assert.match(script, /"持有驾照，支持现场出勤"/);
  assert.match(script, /"Simpro、服务报告、设备服务历史和交接记录"/);
  assert.match(script, /设备服务历史和客户沟通更新/);
  assert.match(script, /"合作厂商与设备平台"/);
  assert.match(script, /"合作过的医疗技术厂商与设备平台能更直观看到服务范围。"/);
  assert.match(script, /参与车间支持、台架检查、现场准备、设备状态记录和服务交接/);
  assert.match(script, /"按设备族说明服务范围和验证依据。"/);
  assert.match(script, /"参与内容"/);
  assert.match(script, /"判断依据"/);
  assert.match(script, /"处理动作"/);
  assert.match(script, /"请直接发送岗位范围。"/);
  assert.match(script, /"可按雇主流程核验"/);
  assert.doesNotMatch(script, /现场服务快照|现场服务画像|商业伙伴生态|服务接触|台面检查|用户工作流|客户更新链路|受监管医疗记录|本地 biomedical governance|避免过度承诺|雇主核验材料已准备|清晰交接|近 3 年现场 \/ 车间服务|呼吸、监护、超声、DEXA、自动化|驾照和悉尼现场出行|客户更新/);
});

test("visual polish keeps the site professional without adding marketing clutter", () => {
  assert.match(css, /\/\* Visual design polish pass \*\//);
  assert.match(css, /--soft-shadow:/);
  assert.match(css, /--grid-line:/);
  assert.match(css, /\.resume-style\.resume-compact \.hero::before/);
  assert.match(css, /\.resume-style \.resume-link::before/);
  assert.match(css, /\.resume-style \.email-action::before/);
  assert.match(css, /\.resume-style \.linkedin-action::before/);
  assert.match(css, /\.resume-style\.resume-compact \.hero-meta div[\s\S]*?border-left:\s*3px solid/);
  assert.match(css, /\.resume-style \.fit-grid article[\s\S]*?border-top:\s*3px solid/);
  assert.match(css, /\.resume-style \.partners-section,[\s\S]*?\.resume-style \.capabilities[\s\S]*?background-size:\s*40px 40px/);
  assert.doesNotMatch(css, /gradient orb|bokeh|decorative blob/i);
});

test("education stays concise and work-right proof is not over-explained", () => {
  const study = sectionById("study");

  assert.equal(articleCount(study), 3);
  assert.match(study, /Master of Philosophy/);
  assert.match(study, /Awarded Jun 2024/);
  assert.match(study, /Bachelor of Biomedical Engineering/);
  assert.equal((study.match(/src="assets\/logo-university-of-sydney\.svg"/g) || []).length, 2);
  assert.equal((study.match(/src="assets\/logo-university-of-sydney-white\.svg"/g) || []).length, 2);
  assert.equal((study.match(/aria-label="The University of Sydney logo"/g) || []).length, 2);
  assert.match(study, /Flexible Electrodes for Smart Bandages/);
  assert.match(study, /impedance measurement, material\/process trade-offs, validation evidence, and technical documentation/);
  assert.match(study, /measurement, evidence, and controlled documentation rather than assumption/);
  assert.doesNotMatch(study, /study-proof-strip|Academic records|submission\/examination documents|Eligibility checks stay private/);
});

test("professional development direction stays biomedical-service focused", () => {
  const development = sectionById("life");

  assert.match(development, /<p class="section-kicker">Professional Development<\/p>/);
  assert.match(development, /Electrical safety testing and medical equipment performance verification/);
  assert.match(development, /Biomedical asset management and CMMS record quality/);
  assert.match(development, /Manufacturer training and procedure-led troubleshooting/);
  assert.doesNotMatch(development, /AI tools|Structured weeks|personal note|study rhythm/i);
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

test("dark mode follows system preference without a manual toggle", () => {
  assert.doesNotMatch(html, /theme-toggle|data-theme-toggle|Toggle dark mode/);
  assert.ok(html.indexOf('src="theme-init.js?v=zh-translation-fix-1"') < html.indexOf('href="styles.css?v=zh-translation-fix-1"'));
  assert.doesNotMatch(themeInit, /localStorage|siteTheme|storageKey/);
  assert.match(themeInit, /prefers-color-scheme: dark/);
  assert.match(themeInit, /const resolvedTheme = mediaQuery\?\.matches \? "dark" : "light"/);
  assert.match(themeInit, /document\.documentElement\.dataset\.theme = resolvedTheme/);
  assert.doesNotMatch(script, /themeStorageKey|siteTheme|data-theme-toggle|updateThemeToggle|setStoredThemePreference|getStoredThemePreference/);
  assert.match(script, /themePreferenceMedia\?\.addEventListener\("change"/);
  assert.doesNotMatch(css, /\.theme-toggle/);
  assert.match(css, /:root\[data-theme="dark"\]/);
  assert.match(css, /@media \(prefers-color-scheme: dark\)/);
  assert.match(css, /color-scheme:\s*dark/);
  assert.match(css, /--header-surface:/);
  assert.match(css, /--hero-surface:/);
});

test("runtime translation avoids HTML string injection and external links isolate referrers", () => {
  assert.doesNotMatch(script, /innerHTML|insertAdjacentHTML/);
  assert.match(script, /replaceChildren/);
  assert.match(script, /document\.createElement\("a"\)/);
  assert.match(script, /link\.rel = "noopener noreferrer"/);

  const externalLinks = [...html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].map((match) => match[0]);
  assert.ok(externalLinks.length > 0, "expected external links");
  externalLinks.forEach((link) => {
    assert.match(link, /rel="noopener noreferrer"/);
  });
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
  assert.match(combined, /safe return-to-use decisions/i);
  assert.match(combined, /ready for use, monitored, or escalated/i);
  assert.match(combined, /service records as engineering evidence/i);
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
  assert.ok(fs.existsSync(path.join(root, "assets/logo-university-of-sydney.svg")));
  assert.ok(fs.existsSync(path.join(root, "assets/logo-university-of-sydney-white.svg")));
  assert.ok(fs.existsSync(path.join(root, "assets/logo-philips.svg")));
  assert.ok(fs.existsSync(path.join(root, "assets/logo-bd.svg")));
  assert.ok(fs.existsSync(path.join(root, "assets/logo-device-technologies.svg")));
  assert.ok(fs.existsSync(path.join(root, "assets/logo-hologic.svg")));
  assert.ok(fs.existsSync(path.join(root, "assets/logo-jaeger.svg")));
  assert.match(html, /src="assets\/logo-nova-biomedical-au\.png"/);
  assert.match(html, /src="assets\/logo-university-of-sydney\.svg"/);
  assert.match(html, /src="assets\/logo-university-of-sydney-white\.svg"/);
  assert.match(html, /src="assets\/logo-philips\.svg"/);
  assert.match(html, /src="assets\/logo-bd\.svg"/);
  assert.match(html, /src="assets\/logo-device-technologies\.svg"/);
  assert.match(html, /src="assets\/logo-hologic\.svg"/);
  assert.match(html, /src="assets\/logo-jaeger\.svg"/);
  assert.match(html, /alt="Nova Biomedical Australia logo"/);

  const robots = read("robots.txt");
  const sitemap = read("sitemap.xml");
  assert.match(robots, /Sitemap: https:\/\/yangyihang96\.com\/sitemap\.xml/);
  assert.match(robots, /Disallow: \/assets\/personal-gallery\//);
  assert.match(sitemap, /<loc>https:\/\/yangyihang96\.com\/<\/loc>/);
  assert.match(sitemap, /<lastmod>2026-06-28<\/lastmod>/);
});
