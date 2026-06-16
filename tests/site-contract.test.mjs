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

const sectionBody = (className) => {
  const match = html.match(new RegExp(`<div class="${className}"[^>]*>([\\s\\S]*?)</div>`));
  assert.ok(match, `missing ${className}`);
  return match[1];
};

const articleCount = (className) => {
  return (sectionBody(className).match(/<article>/g) || []).length;
};

test("site uses HTTPS canonical and sharing metadata", () => {
  assert.match(html, /<title>Yihang \(Henry\) Yang \| Biomedical Field Service Engineer<\/title>/);
  assert.match(
    html,
    /<meta name="description" content="Sydney-based Biomedical Field Service Engineer focused on medical device maintenance, troubleshooting, verification, service documentation, and resume download\.">/
  );
  assert.match(html, /<meta name="robots" content="index, follow">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/yangyihang96\.com\/">/);
  assert.match(html, /property="og:title" content="Yihang \(Henry\) Yang \| Biomedical Field Service Engineer"/);
  assert.match(
    html,
    /property="og:description" content="Sydney-based Biomedical Field Service Engineer focused on medical device maintenance, troubleshooting, verification, service documentation, and resume download\."/
  );
  assert.match(html, /name="twitter:title" content="Yihang \(Henry\) Yang \| Biomedical Field Service Engineer"/);
  assert.match(
    html,
    /name="twitter:description" content="Sydney-based Biomedical Field Service Engineer focused on medical device maintenance, troubleshooting, verification, service documentation, and resume download\."/
  );
  assert.match(html, /property="og:url" content="https:\/\/yangyihang96\.com\/"/);
  assert.match(html, /property="og:image" content="https:\/\/yangyihang96\.com\/assets\//);
  assert.match(html, /property="og:image:width" content="2200"/);
  assert.match(html, /property="og:image:height" content="1238"/);
  assert.match(html, /property="og:image:alt" content="Professional portrait and biomedical service profile for Yihang Yang"/);
  assert.match(html, /name="twitter:image:alt" content="Professional portrait and biomedical service profile for Yihang Yang"/);
  assert.doesNotMatch(html, /http:\/\/yangyihang96\.com/);
  assert.match(script, /title: "Yihang \(Henry\) Yang \| Biomedical Field Service Engineer"/);
  assert.match(
    script,
    /description:\s*"Sydney-based Biomedical Field Service Engineer focused on medical device maintenance, troubleshooting, verification, service documentation, and resume download\."/
  );
  assert.match(script, /title: "Yihang \(Henry\) Yang \| 医疗设备现场服务工程师"/);
  assert.match(
    script,
    /description:\s*"Yihang \(Henry\) Yang 是悉尼医疗设备现场服务工程师，重点展示设备维护、故障排查、验证记录、服务文档和简历下载。"/
  );
});

test("stylesheet and script use the current cache-busting version", () => {
  assert.match(html, /href="styles\.css\?v=proof-boundary-1"/);
  assert.match(html, /src="script\.js\?v=proof-boundary-1"/);
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

test("downloadable resume files expose professional document metadata", () => {
  const pdfSource = fs.readFileSync(
    path.join(root, "assets/Henry_Yang_Biomedical_Engineer_Resume.pdf"),
    "latin1"
  );
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
  assert.match(docxCoreProperties, /<cp:lastModifiedBy>Yihang Henry Yang<\/cp:lastModifiedBy>/);
  assert.match(docxCoreProperties, /<dcterms:created xsi:type="dcterms:W3CDTF">2026-06-16T00:00:00Z<\/dcterms:created>/);
  assert.match(docxCoreProperties, /<dcterms:modified xsi:type="dcterms:W3CDTF">2026-06-16T00:00:00Z<\/dcterms:modified>/);
  assert.doesNotMatch(docxCoreProperties, /python-docx|generated by python-docx|2013-12-23/);
});

test("hero shows a compact recruiter action path near first-screen CTAs", () => {
  assert.match(html, /class="hero-action-path" aria-label="Recruiter action path"/);
  assert.match(html, /<strong>Contact<\/strong>\s*<span>Email for field-service fit<\/span>/);
  assert.match(html, /<strong>Resume<\/strong>\s*<span>PDF and DOCX ready<\/span>/);
  assert.match(html, /<strong>Private proof<\/strong>\s*<span>Credentials, training, and employment-check documents on request<\/span>/);
  assert.match(script, /"\.hero-action-path div:nth-child\(1\) strong": "Contact"/);
  assert.match(script, /"\.hero-action-path div:nth-child\(1\) strong": "联系"/);
  assert.match(script, /"\.hero-action-path": { "aria-label": "Recruiter action path" }/);
  assert.match(script, /"\.hero-action-path": { "aria-label": "招聘方行动路径" }/);
  assert.match(css, /\.hero-action-path\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.hero-action-path\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
});

test("recruiter actions expose clear accessible labels for file type and destination", () => {
  assert.match(html, /class="button primary resume-link"[^>]*aria-label="Download Henry Yang resume as PDF"/);
  assert.match(html, /class="button secondary resume-docx-link"[^>]*aria-label="Download Henry Yang resume as DOCX"/);
  assert.match(html, /class="button secondary email-action"[^>]*aria-label="Email Yihang Henry Yang"/);
  assert.match(html, /class="button tertiary github-action"[^>]*aria-label="Open Yihang Yang GitHub profile"/);
  assert.match(html, /class="nav-resume-link"[^>]*aria-label="Download Henry Yang resume PDF"/);
  assert.match(html, /class="button primary contact-email-action"[^>]*aria-label="Email Yihang Henry Yang"/);
  assert.match(html, /class="button secondary contact-copy-email-action"[^>]*aria-label="Copy Yihang Henry Yang email address"/);
  assert.match(html, /class="button secondary contact-resume-link"[^>]*aria-label="Download Henry Yang resume as PDF"/);
  assert.match(html, /class="button secondary contact-docx-link"[^>]*aria-label="Download Henry Yang resume as DOCX"/);
  assert.match(script, /attrs:\s*{[\s\S]*?"\.resume-link":\s*{ "aria-label": "Download Henry Yang resume as PDF" }/);
  assert.match(script, /attrs:\s*{[\s\S]*?"\.resume-link":\s*{ "aria-label": "下载 Henry Yang PDF 简历" }/);
});

test("contact section repeats recruiter conversion actions at the close", () => {
  assert.match(html, /class="contact-actions"/);
  assert.match(html, /Ready for field service conversations/);
  assert.match(html, /Sydney field travel, medical device service, verification records, and bilingual communication/);
  assert.match(html, /class="button primary contact-email-action" href="mailto:yangyihang96@gmail\.com"/);
  assert.match(html, /class="button secondary contact-copy-email-action" type="button" data-copy-email="yangyihang96@gmail\.com"/);
  assert.match(html, /class="button secondary contact-resume-link" href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.pdf" type="application\/pdf" download/);
  assert.match(html, /class="button secondary contact-docx-link" href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.docx" download/);
  assert.match(html, /Private credentials and employment-check documents are shared only when required/);
  assert.match(script, /"\.contact-actions-title": "Ready for field service conversations\."/);
  assert.match(script, /"\.contact-actions-title": "可以继续聊医疗设备现场服务机会。"/);
  assert.match(html, /class="contact-intake" aria-label="Recruiter email checklist"/);
  assert.match(html, /<strong>Role scope<\/strong>\s*<span>Share device type, service setting, travel area, and start timing\.<\/span>/);
  assert.match(html, /<strong>Proof needed<\/strong>\s*<span>Ask privately for degree, training, identity, right-to-work, or reference material when required\.<\/span>/);
  assert.match(html, /<strong>Next step<\/strong>\s*<span>Send interview time, role description, or technical screen format\.<\/span>/);
  assert.match(html, /class="contact-response-strip" aria-label="Recruiter response expectations"/);
  assert.match(html, /<strong>Reply window<\/strong>\s*<span>I aim to reply within 1 business day for role-fit, interview, or document requests\.<\/span>/);
  assert.match(html, /<strong>Best format<\/strong>\s*<span>Email the role description, device scope, location, and preferred call times\.<\/span>/);
  assert.match(html, /<strong>Document order<\/strong>\s*<span>Resume first; sensitive checks only after role fit and formal process are clear\.<\/span>/);
  assert.match(script, /"\.contact-intake div:nth-child\(1\) strong": "Role scope"/);
  assert.match(script, /"\.contact-intake div:nth-child\(1\) strong": "岗位范围"/);
  assert.match(script, /"\.contact-response-strip div:nth-child\(1\) strong": "Reply window"/);
  assert.match(script, /"\.contact-response-strip div:nth-child\(1\) strong": "回复预期"/);
  assert.match(script, /"\.contact-intake": { "aria-label": "Recruiter email checklist" }/);
  assert.match(script, /"\.contact-intake": { "aria-label": "招聘方邮件清单" }/);
  assert.match(script, /"\.contact-response-strip": { "aria-label": "Recruiter response expectations" }/);
  assert.match(script, /"\.contact-response-strip": { "aria-label": "招聘方回复预期" }/);
  assert.match(css, /\.contact-intake\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(css, /\.contact-response-strip\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.contact-intake\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.contact-response-strip\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
  assert.match(css, /\.contact-actions\s*{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\) auto;/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.contact-action-buttons\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
});

test("contact offers a copy-email fallback when mail clients are unavailable", () => {
  const contactStart = html.indexOf('<section id="contact"');
  const contactEnd = html.indexOf("</section>", contactStart);
  assert.notEqual(contactStart, -1, "missing contact section");
  assert.notEqual(contactEnd, -1, "missing contact section end");

  const contactSource = html.slice(contactStart, contactEnd);
  assert.match(
    contactSource,
    /<button class="button secondary contact-copy-email-action" type="button" data-copy-email="yangyihang96@gmail\.com" aria-label="Copy Yihang Henry Yang email address">Copy Email<\/button>/
  );
  assert.match(script, /"\.contact-copy-email-action": "Copy Email"/);
  assert.match(script, /"\.contact-copy-email-action": "复制邮箱"/);
  assert.match(script, /copyEmail:\s*{[\s\S]*?default:\s*"Copy Email"[\s\S]*?copied:\s*"Copied"[\s\S]*?failed:\s*"Copy failed"/);
  assert.match(script, /copyEmail:\s*{[\s\S]*?default:\s*"复制邮箱"[\s\S]*?copied:\s*"已复制"[\s\S]*?failed:\s*"复制失败"/);
  assert.match(script, /document\.querySelectorAll\("\[data-copy-email\]"\)/);
  assert.match(script, /navigator\.clipboard\.writeText\(text\)/);
  assert.match(script, /document\.execCommand\("copy"\)/);
  assert.match(css, /\.contact-copy-email-action\.is-copied\s*{/);
});

test("contact section keeps one mail action and a compact visible email line", () => {
  const contactStart = html.indexOf('<section id="contact"');
  const contactEnd = html.indexOf("</section>", contactStart);
  assert.notEqual(contactStart, -1, "missing contact section");
  assert.notEqual(contactEnd, -1, "missing contact section end");

  const contactSource = html.slice(contactStart, contactEnd);
  assert.equal((contactSource.match(/href="mailto:/g) || []).length, 1);
  assert.doesNotMatch(contactSource, /class="email-link"/);
  assert.match(contactSource, /class="contact-email-text">yangyihang96@gmail\.com<\/span>/);
  assert.match(contactSource, /class="contact-privacy-note">Private credentials and employment-check documents are shared only when required\.<\/span>/);
  assert.match(script, /"\.contact-actions-note strong": "Direct email"/);
  assert.match(script, /"\.contact-actions-note strong": "直接邮箱"/);
  assert.doesNotMatch(css, /\.email-link\s*{/);
  assert.match(css, /\.contact-actions-note\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*auto auto minmax\(0,\s*1fr\);/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.contact-actions-note\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
});

test("contact appears before optional personal life content in the recruiter reading flow", () => {
  const certificationsIndex = html.indexOf('<section id="certifications"');
  const contactIndex = html.indexOf('<section id="contact"');
  const lifeIndex = html.indexOf('<section id="life"');

  assert.ok(certificationsIndex > -1, "missing certifications section");
  assert.ok(contactIndex > -1, "missing contact section");
  assert.ok(lifeIndex > -1, "missing life section");
  assert.ok(certificationsIndex < contactIndex, "contact should follow professional training evidence");
  assert.ok(contactIndex < lifeIndex, "contact should appear before optional personal life content");
});

test("fixed header keeps a persistent resume PDF action", () => {
  assert.match(
    html,
    /<a class="nav-resume-link" href="assets\/Henry_Yang_Biomedical_Engineer_Resume\.pdf" type="application\/pdf" download aria-label="Download Henry Yang resume PDF">Resume PDF<\/a>/
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
    /<nav class="site-nav" aria-label="Primary navigation">\s*<a href="#experience">Experience<\/a>\s*<a href="#capabilities">Skills<\/a>\s*<a href="#case-notes">Cases<\/a>\s*<a href="#study">Education<\/a>\s*<a href="#contact">Contact<\/a>\s*<\/nav>/
  );
  assert.match(script, /"\.site-nav a:nth-child\(1\)": "Experience"/);
  assert.match(script, /"\.site-nav a:nth-child\(2\)": "Skills"/);
  assert.match(script, /"\.site-nav a:nth-child\(3\)": "Cases"/);
  assert.match(script, /"\.site-nav a:nth-child\(1\)": "经历"/);
  assert.match(script, /"\.site-nav a:nth-child\(2\)": "能力"/);
  assert.match(script, /"\.site-nav a:nth-child\(3\)": "案例"/);
});

test("compact homepage keeps capability matrix visible", () => {
  assert.match(html, /id="capabilities"/);
  assert.match(html, /Employment checks/);
  assert.match(html, /Sydney field travel/);
  assert.doesNotMatch(css, /\.resume-style\.resume-compact \.capabilities[\s\S]{0,180}display:\s*none/);
});

test("fit section gives a recruiter-facing role-fit verdict", () => {
  assert.match(html, /class="fit-verdict" aria-label="Recruiter role-fit verdict"/);
  assert.match(html, /<strong>Best match<\/strong>\s*<span>Biomedical field service roles needing device service, verification records, and clear handover\.<\/span>/);
  assert.match(html, /<strong>Evidence path<\/strong>\s*<span>Work experience comes next, followed by proof points, cases, and training records\.<\/span>/);
  assert.match(script, /"\.fit-verdict div:nth-child\(1\) strong": "Best match"/);
  assert.match(script, /"\.fit-verdict div:nth-child\(1\) strong": "最适合"/);
  assert.match(script, /"\.fit-verdict": { "aria-label": "Recruiter role-fit verdict" }/);
  assert.match(script, /"\.fit-verdict": { "aria-label": "招聘方岗位匹配判断" }/);
  assert.match(css, /\.fit-verdict\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.fit-verdict\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
});

test("early recruiter proof points summarize equipment, verification, records, and handover", () => {
  assert.match(html, /class="proof-strip reveal"/);
  assert.match(html, /aria-label="Recruiter evidence checklist"/);
  assert.equal(articleCount("proof-grid"), 4);
  assert.equal((html.match(/class="proof-evidence"/g) || []).length, 4);
  assert.match(html, /<dt>Public evidence<\/dt>\s*<dd>Experience card and skills matrix show ventilation, monitoring, ultrasound, DEXA, pharmacy automation, and general biomedical equipment\.<\/dd>/);
  assert.match(html, /<dt>Private check<\/dt>\s*<dd>Ask for relevant training records or certificate context only after role fit is clear\.<\/dd>/);
  assert.match(html, /<dt>Public evidence<\/dt>\s*<dd>Current role summary shows functional checks, performance evidence, service reports, and escalation status\.<\/dd>/);
  assert.match(html, /<dt>Private check<\/dt>\s*<dd>Ask in interview for one device issue: symptom, test step, verified result, and handover\.<\/dd>/);
  assert.match(script, /"\.proof-grid": { "aria-label": "Recruiter evidence checklist" }/);
  assert.match(script, /"\.proof-grid": { "aria-label": "招聘方证据核对清单" }/);
  assert.match(script, /"\.proof-grid article:nth-child\(1\) h3": "Equipment scope"/);
  assert.match(script, /"\.proof-grid article:nth-child\(1\) h3": "设备范围"/);
  assert.match(css, /\.proof-grid\s*{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(css, /\.proof-evidence\s*{[^}]*display:\s*grid;[^}]*grid-template-columns:\s*minmax\(96px,\s*auto\) minmax\(0,\s*1fr\);/);
  assert.match(css, /@media \(max-width:\s*560px\)\s*{(?:(?!@media)[\s\S])*?\.resume-style\.resume-compact \.proof-grid article\s*{[^}]*padding:\s*14px;/);
  assert.match(css, /@media \(max-width:\s*560px\)\s*{(?:(?!@media)[\s\S])*?\.proof-evidence\s*{[^}]*font-size:\s*13px;/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.proof-evidence\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.proof-heading\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.proof-grid article\s*{[\s\S]*?min-height:\s*0;[\s\S]*?padding:\s*18px;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.resume-style \.proof-grid article\s*{[\s\S]*?padding:\s*18px;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.resume-style\.resume-compact \.proof-strip,[\s\S]*?padding-top:\s*52px;/);
  assert.doesNotMatch(css, /\.resume-style\.resume-compact \.proof-strip[\s\S]{0,180}display:\s*none/);
});

test("proof section states the public and private evidence boundary before detailed cards", () => {
  const proofStart = html.indexOf('<section class="proof-strip');
  const proofGridStart = html.indexOf('<div class="proof-grid"', proofStart);
  assert.notEqual(proofStart, -1, "missing proof section");
  assert.notEqual(proofGridStart, -1, "missing proof grid");

  const proofLeadSource = html.slice(proofStart, proofGridStart);
  assert.match(proofLeadSource, /class="proof-boundary" aria-label="Public and private evidence boundary"/);
  assert.match(proofLeadSource, /<strong>Public now<\/strong>\s*<span>Role scope, equipment families, service method, and safe case patterns\.<\/span>/);
  assert.match(proofLeadSource, /<strong>Private after fit<\/strong>\s*<span>Certificates, identity, right-to-work, references, and detailed employment checks\.<\/span>/);
  assert.match(proofLeadSource, /<strong>Not published<\/strong>\s*<span>Customer names, serial numbers, internal records, and site-specific details\.<\/span>/);
  assert.match(script, /"\.proof-boundary div:nth-child\(1\) strong": "Public now"/);
  assert.match(script, /"\.proof-boundary div:nth-child\(1\) strong": "当前公开"/);
  assert.match(script, /"岗位范围、设备类别、服务方法和适合公开的案例框架。"/);
  assert.match(script, /"证书、身份、工作权利、推荐人和更详细的雇佣核验材料。"/);
  assert.match(script, /"\.proof-boundary": { "aria-label": "Public and private evidence boundary" }/);
  assert.match(script, /"\.proof-boundary": { "aria-label": "公开与私下核验证据边界" }/);
  assert.match(css, /\.proof-boundary\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.proof-boundary\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.proof-boundary div\s*{[\s\S]*?padding:\s*10px 12px;/);
});

test("brief section acts as a recruiter screening snapshot", () => {
  assert.match(html, /<p class="section-kicker">Screening Snapshot<\/p>/);
  assert.match(html, /<h2 id="brief-title">How to assess the fit quickly after the first screen\.<\/h2>/);
  assert.match(html, /class="brief-grid" aria-label="Recruiter screening snapshot"/);
  assert.equal(articleCount("brief-grid"), 3);
  assert.match(html, /<span>Interview focus<\/span>\s*<h3>Ask for a service example<\/h3>\s*<p>Use one device issue to discuss symptom capture, test steps, verification evidence, and handover\.<\/p>/);
  assert.match(html, /<span>Private proof<\/span>\s*<h3>Request documents after fit<\/h3>\s*<p>Resume files are public; credentials, training records, and employment-check material stay private until needed\.<\/p>/);
  assert.match(html, /<span>Best next role<\/span>\s*<h3>Biomedical field service<\/h3>\s*<p>Strongest match is hands-on service work with travel, documentation, troubleshooting, and follow-up ownership\.<\/p>/);
  assert.match(script, /"\.brief-section \.section-kicker": "Screening Snapshot"/);
  assert.match(script, /"\.brief-section \.section-kicker": "招聘筛选快照"/);
  assert.match(script, /"\.brief-grid": { "aria-label": "Recruiter screening snapshot" }/);
  assert.match(script, /"\.brief-grid": { "aria-label": "招聘方筛选快照" }/);
  assert.match(css, /\.brief-grid article\s*{[\s\S]*?min-height:\s*240px;/);
  assert.doesNotMatch(html, /Professional Brief/);
  assert.doesNotMatch(html, /A practical engineering profile built around service reliability/);
});

test("compact homepage prioritizes real work experience over supporting preamble", () => {
  const fitIndex = html.indexOf('<section class="fit-strip');
  const experienceIndex = html.indexOf('<section id="experience"');
  const proofIndex = html.indexOf('<section class="proof-strip');
  const briefIndex = html.indexOf('<section class="brief-section');
  const capabilitiesIndex = html.indexOf('<section id="capabilities"');

  assert.ok(fitIndex !== -1, "fit section should exist");
  assert.ok(experienceIndex !== -1, "experience section should exist");
  assert.ok(fitIndex < experienceIndex, "experience should follow the role-fit summary");
  assert.ok(experienceIndex < proofIndex, "experience should appear before supporting proof cards");
  assert.ok(experienceIndex < briefIndex, "experience should appear before interview guidance");
  assert.ok(experienceIndex < capabilitiesIndex, "experience should appear before the skill matrix");

  assert.doesNotMatch(html, /Life Rhythm/);
  assert.doesNotMatch(html, /This site answers five practical questions first/);
});

test("legacy hidden recruiter sections are not shipped in the compact public site", () => {
  const publicSource = `${html}\n${css}\n${script}`;

  assert.doesNotMatch(html, /class="overview-section|class="scope-section|id="work"|id="process"|id="credentials"/);
  assert.doesNotMatch(publicSource, /overview-section|scope-section|scope-grid|work-section|process-section|credentials-section/);
  assert.doesNotMatch(publicSource, /Review Path|Service Scope|The work covers more than one moment|Field service is not only fixing equipment|I use a clear process|Education credentials are kept public-safe/);
  assert.doesNotMatch(publicSource, /招聘方阅读路径|服务范围|一次服务不是|我做现场服务|我的处理顺序|学历证明/);
  assert.doesNotMatch(publicSource, /work-bench\.jpg/);
  assert.doesNotMatch(publicSource, /\.statement|\.profile-panel|\.profile-photo|\.feature-list|@keyframes lineGrow/);
  assert.ok(!fs.existsSync(path.join(root, "assets/work-bench.jpg")), "unused hidden-section image should not be published");
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

test("current experience card exposes scannable field-service evidence", () => {
  assert.match(html, /class="experience-evidence" aria-label="Current field-service evidence"/);
  assert.match(html, /<strong>Equipment<\/strong>\s*<span>Ventilation \/ monitoring \/ ultrasound \/ DEXA<\/span>/);
  assert.match(html, /<strong>Service actions<\/strong>\s*<span>PM \/ repair \/ installation \/ verification<\/span>/);
  assert.match(html, /<strong>Records<\/strong>\s*<span>Simpro \/ service reports \/ equipment history<\/span>/);
  assert.match(html, /<strong>Service settings<\/strong>\s*<span>Hospital \/ pharmacy \/ workshop support<\/span>/);
  assert.match(script, /"\.experience-evidence div:nth-child\(1\) strong": "Equipment"/);
  assert.match(script, /"\.experience-evidence div:nth-child\(1\) strong": "设备"/);
  assert.match(
    css,
    /\.experience-evidence\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\);/
  );
  assert.match(
    css,
    /@media \(max-width:\s*760px\)[\s\S]*?\.experience-evidence\s*{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/
  );
  assert.match(
    css,
    /@media \(max-width:\s*560px\)[\s\S]*?\.experience-evidence\s*{[\s\S]*?grid-template-columns:\s*1fr;/
  );
});

test("current experience card summarizes service outcomes settings records and handover", () => {
  assert.match(html, /class="experience-outcome" aria-label="Current role service outcome summary"/);
  assert.match(html, /<dt>Service setting<\/dt>\s*<dd>Hospital, pharmacy, workshop, and field-support environments<\/dd>/);
  assert.match(html, /<dt>Verified outcome<\/dt>\s*<dd>Devices returned with functional checks, performance evidence, or clear escalation status<\/dd>/);
  assert.match(html, /<dt>Record trail<\/dt>\s*<dd>Simpro work order, service report, serial details, equipment history, and customer update aligned<\/dd>/);
  assert.match(html, /<dt>Handover<\/dt>\s*<dd>Biomedical teams, clinical users, vendors, and internal engineers can see next-use status<\/dd>/);
  assert.match(script, /"\.experience-outcome dt:nth-of-type\(1\)": "Service setting"/);
  assert.match(script, /"\.experience-outcome dt:nth-of-type\(1\)": "服务环境"/);
  assert.match(css, /\.experience-outcome\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*minmax\(124px,\s*auto\) minmax\(0,\s*1fr\);/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.experience-outcome\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
});

test("current experience card avoids duplicate bullet summaries after structured outcomes", () => {
  const firstCardStart = html.indexOf('<div class="experience-body">');
  const secondCardStart = html.indexOf('<div class="experience-body">', firstCardStart + 1);
  assert.notEqual(firstCardStart, -1, "missing current experience body");
  assert.notEqual(secondCardStart, -1, "missing second experience body");

  const currentExperienceSource = html.slice(firstCardStart, secondCardStart);
  assert.doesNotMatch(currentExperienceSource, /<ul>/);
  assert.doesNotMatch(currentExperienceSource, /<li>/);

  const secondExperienceSource = html.slice(secondCardStart, html.indexOf("</section>", secondCardStart));
  assert.match(secondExperienceSource, /<ul>/);
  assert.equal((secondExperienceSource.match(/<li>/g) || []).length, 2);

  const publicSource = `${html}\n${script}`;
  assert.doesNotMatch(script, /\.experience-timeline article:nth-child\(1\) li/);
  assert.doesNotMatch(publicSource, /Perform field and workshop service for hospital and pharmacy medical equipment/);
  assert.doesNotMatch(publicSource, /Support ventilation, patient monitoring, ultrasound, DEXA/);
  assert.doesNotMatch(publicSource, /Maintain Simpro work orders, service reports, serial details, equipment history, and customer updates for biomedical teams and internal engineers/);
  assert.doesNotMatch(publicSource, /为医院和药房医疗设备提供现场和 workshop 服务/);
  assert.doesNotMatch(publicSource, /服务范围覆盖 ventilation、patient monitoring、ultrasound、DEXA/);
  assert.doesNotMatch(publicSource, /维护 Simpro 工单、service reports、serial details、equipment history 和 customer updates，支持 biomedical teams 和内部工程师交接/);
});

test("case notes expose scenario action verification and handover outcomes", () => {
  assert.equal((html.match(/class="case-outcome" aria-label="Public-safe case outcome"/g) || []).length, 3);
  assert.match(html, /<dt>Scenario<\/dt>\s*<dd>Scheduled service with site constraints<\/dd>/);
  assert.match(html, /<dt>Action<\/dt>\s*<dd>Condition check, procedure steps, and performance evidence<\/dd>/);
  assert.match(html, /<dt>Verification<\/dt>\s*<dd>Functional check and service record close-out<\/dd>/);
  assert.match(html, /<dt>Handover<\/dt>\s*<dd>Clear next-use status for biomedical or site teams<\/dd>/);
  assert.match(html, /<dd>User-reported symptom with repair history<\/dd>/);
  assert.match(html, /<dd>Reusable service trail for later troubleshooting<\/dd>/);
  assert.match(script, /"\.case-grid article:nth-child\(1\) \.case-outcome dt:nth-of-type\(1\)": "Scenario"/);
  assert.match(script, /"\.case-grid article:nth-child\(1\) \.case-outcome dt:nth-of-type\(1\)": "场景"/);
  assert.match(css, /\.case-outcome\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*auto minmax\(0,\s*1fr\);/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.case-outcome\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
});

test("case notes avoid duplicate bullet summaries after structured outcomes", () => {
  const caseGridStart = html.indexOf('<div class="case-grid">');
  const caseGridEnd = html.indexOf("</section>", caseGridStart);
  assert.notEqual(caseGridStart, -1, "missing case grid");
  assert.notEqual(caseGridEnd, -1, "missing case section end");

  const caseGridSource = html.slice(caseGridStart, caseGridEnd);
  assert.doesNotMatch(caseGridSource, /<ul>/);
  assert.doesNotMatch(caseGridSource, /<li>/);

  const publicSource = `${html}\n${script}`;
  assert.doesNotMatch(publicSource, /Field condition check|Functional and performance testing|Service record close-out/);
  assert.doesNotMatch(publicSource, /Fault symptom review|Test step documentation|Post-repair verification/);
  assert.doesNotMatch(publicSource, /Equipment history cleanup|Work order alignment|Clear customer updates/);
  assert.doesNotMatch(publicSource, /现场状态确认|功能与性能检查|故障现象复核|设备历史整理/);
});

test("training section maps certificates to equipment scope field work and verification evidence", () => {
  assert.equal((html.match(/class="training-evidence" aria-label="Training evidence map"/g) || []).length, 3);
  assert.match(html, /<dt>Equipment scope<\/dt>\s*<dd>V60, V60 Plus, Trilogy, Avalon, Efficia, HeartStart<\/dd>/);
  assert.match(html, /<dt>Field work<\/dt>\s*<dd>Planned service, troubleshooting preparation, functional checks<\/dd>/);
  assert.match(html, /<dt>Evidence<\/dt>\s*<dd>Offline certificates and service records available for formal checks<\/dd>/);
  assert.match(html, /<dd>EPIQ, Affiniti, CX30, CX50, Horizon DEXA, X-ray systems<\/dd>/);
  assert.match(html, /<dd>BD FIX100 and vendor-led specialty service preparation<\/dd>/);
  assert.match(script, /"\.certification-grid article:nth-child\(1\) \.training-evidence dt:nth-of-type\(1\)": "Equipment scope"/);
  assert.match(script, /"\.certification-grid article:nth-child\(1\) \.training-evidence dt:nth-of-type\(1\)": "设备范围"/);
  assert.match(css, /\.training-evidence\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*minmax\(96px,\s*auto\) minmax\(0,\s*1fr\);/);
  assert.match(css, /@media \(max-width:\s*560px\)[\s\S]*?\.training-evidence\s*{[\s\S]*?grid-template-columns:\s*1fr;/);
});

test("training cards avoid duplicate bullet lists after evidence maps", () => {
  const certificationGridStart = html.indexOf('<div class="certification-grid">');
  const certificationGridEnd = html.indexOf("</section>", certificationGridStart);
  assert.notEqual(certificationGridStart, -1, "missing certification grid");
  assert.notEqual(certificationGridEnd, -1, "missing certification section end");

  const certificationGridSource = html.slice(certificationGridStart, certificationGridEnd);
  assert.doesNotMatch(certificationGridSource, /<ul>/);
  assert.doesNotMatch(certificationGridSource, /<li>/);

  const publicSource = `${html}\n${script}\n${css}`;
  assert.doesNotMatch(script, /\.certification-grid article:nth-child\(\d+\) li/);
  assert.doesNotMatch(css, /\.certification-grid ul|\.certification-grid li/);
  assert.doesNotMatch(publicSource, /V60 \/ V60 Plus service training/);
  assert.doesNotMatch(publicSource, /Trilogy 202 and Trilogy Evo service training/);
  assert.doesNotMatch(publicSource, /Avalon FM20 \/ FM30, Efficia CM series, and HeartStart Intrepid training/);
  assert.doesNotMatch(publicSource, /EPIQ \/ Affiniti and CX30 \/ CX50 ultrasound training/);
  assert.doesNotMatch(publicSource, /BD FIX100 dispensing service basic training/);
  assert.doesNotMatch(publicSource, /Trilogy 202 和 Trilogy Evo service training/);
  assert.doesNotMatch(publicSource, /厂商技术培训和服务准备/);
});

test("hidden personal galleries are not loaded by the compact homepage", () => {
  assert.doesNotMatch(html, /assets\/personal-gallery\//);
  assert.doesNotMatch(html, /id="family"/);
  assert.doesNotMatch(html, /id="moments"/);
  assert.doesNotMatch(html, /id="gallery"/);
  assert.ok(!fs.existsSync(path.join(root, "assets/personal-gallery")), "personal-gallery should not be published");
});

test("optional personal section stays professional and compact", () => {
  const publicSource = `${html}\n${script}`;

  assert.match(html, /<section id="life" class="story-section life-section reveal" aria-labelledby="life-title">/);
  assert.match(html, /<p class="section-kicker">Professional Rhythm<\/p>/);
  assert.match(html, /<h2 id="life-title">The personal note is kept short and work-adjacent\.<\/h2>/);
  assert.match(html, /<p><strong>Structured weeks<\/strong> Keeping work, commuting, study, and admin organized so field-service days stay reliable\.<\/p>/);
  assert.match(html, /<p><strong>Continuous learning<\/strong> Following medical technology, engineering tools, AI tools, and practical ways to improve service work\.<\/p>/);
  assert.match(html, /<p><strong>Record discipline<\/strong> Turning scattered information into reusable notes, checklists, and handover structure\.<\/p>/);
  assert.match(script, /"#life \.section-kicker": "Professional Rhythm"/);
  assert.match(script, /"#life \.section-kicker": "职业节奏"/);
  assert.match(script, /"#life-title": "The personal note is kept short and work-adjacent\."/);
  assert.match(script, /"#life-title": "个人内容保持简短，并贴近工作习惯。"/);
  assert.match(css, /\.resume-style\.resume-compact \.life-section\s*{[\s\S]*?grid-template-columns:\s*minmax\(460px,\s*0\.95fr\) minmax\(360px,\s*1\.05fr\);/);
  assert.match(css, /\.resume-style\.resume-compact \.life-section \.story-content\s*{[\s\S]*?padding:\s*clamp\(42px,\s*4vw,\s*58px\);/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.resume-style\.resume-compact \.life-section\s*{[\s\S]*?min-height:\s*0;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.resume-style\.resume-compact \.life-section \.story-media\s*{[\s\S]*?min-height:\s*240px;[\s\S]*?max-height:\s*260px;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.resume-style\.resume-compact \.life-section \.story-content\s*{[\s\S]*?padding:\s*38px 24px;/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.resume-style\.resume-compact \.life-notes\s*{[\s\S]*?gap:\s*10px;[\s\S]*?margin-top:\s*24px;/);
  assert.doesNotMatch(html, /<section id="interests"/);
  assert.doesNotMatch(publicSource, /Food, coffee|Travel and city walks|The things I enjoy|Interests|兴趣爱好|食物、咖啡|旅行和城市观察/);
  assert.doesNotMatch(css, /\.resume-style\.resume-compact \.interests-section/);
});

test("removed personal gallery copy is not shipped in public source", () => {
  const publicSource = `${html}\n${css}\n${script}`;

  assert.doesNotMatch(publicSource, /Personal Moments|Family Moments|family photos|家庭照片|生活合影/);
  assert.doesNotMatch(publicSource, /moments-section|family-section|gallery-section|interests-section/);
  assert.doesNotMatch(publicSource, /moments-grid|family-grid|gallery-grid|interest-grid/);
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
  assert.match(html, /src="assets\/yihang-professional-headshot-720\.jpg"[^>]*width="720"[^>]*height="1125"/);
  assert.match(html, /src="assets\/logo-nova-biomedical\.jpg"[^>]*width="182"[^>]*height="108"/);
  assert.match(html, /src="assets\/logo-lundbeck\.svg"[^>]*width="485"[^>]*height="206"/);
  assert.match(html, /src="assets\/study-life\.jpg"[^>]*width="1448"[^>]*height="1086"/);
});

test("hero portrait serves responsive image candidates", () => {
  const sourceOriginal = path.join(root, "assets/yihang-professional-headshot-formal-4k.jpg");
  const source720 = path.join(root, "assets/yihang-professional-headshot-720.jpg");
  const source420 = path.join(root, "assets/yihang-professional-headshot-420.jpg");

  assert.match(
    html,
    /<img src="assets\/yihang-professional-headshot-720\.jpg"[^>]*srcset="assets\/yihang-professional-headshot-420\.jpg 420w, assets\/yihang-professional-headshot-720\.jpg 720w, assets\/yihang-professional-headshot-formal-4k\.jpg 1407w"[^>]*sizes="\(max-width: 560px\) 64px, \(max-width: 920px\) 112px, 300px"[^>]*fetchpriority="high"[^>]*decoding="async"/
  );
  assert.ok(fs.existsSync(source720), "720px hero portrait candidate should exist");
  assert.ok(fs.existsSync(source420), "420px hero portrait candidate should exist");
  assert.ok(fs.statSync(source720).size < fs.statSync(sourceOriginal).size, "720px candidate should be lighter than the source portrait");
  assert.ok(fs.statSync(source420).size < fs.statSync(source720).size, "420px candidate should be lighter than the 720px candidate");
  assert.match(css, /\.resume-style\.resume-compact \.hero-profile-card img\s*{[\s\S]*?width:\s*100%;[\s\S]*?height:\s*auto;/);
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

test("desktop compact hero keeps first-screen recruiter actions visible on short desktop screens", () => {
  assert.match(
    css,
    /\.resume-style\.resume-compact \.hero-copy\s*{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\) minmax\(240px,\s*300px\);[\s\S]*?padding:\s*88px 0 26px;/
  );
  assert.match(
    css,
    /\.resume-style\.resume-compact \.hero-card-body\s*{[\s\S]*?padding:\s*14px 4px 0;/
  );
  assert.match(
    css,
    /\.resume-style\.resume-compact \.hero-profile-card strong\s*{[\s\S]*?font-size:\s*20px;/
  );
  assert.match(
    css,
    /\.resume-style\.resume-compact \.hero-card-note\s*{[\s\S]*?font-size:\s*13px;[\s\S]*?line-height:\s*1.42;/
  );
  assert.match(
    css,
    /@media \(max-height:\s*720px\) and \(min-width:\s*921px\)\s*{[\s\S]*?\.resume-style\.resume-compact \.hero-copy\s*{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\) minmax\(220px,\s*240px\);[\s\S]*?padding:\s*76px 0 18px;/
  );
  assert.match(
    css,
    /@media \(max-height:\s*720px\) and \(min-width:\s*921px\)\s*{[\s\S]*?\.resume-style\.resume-compact \.hero-card-note\s*{[\s\S]*?-webkit-line-clamp:\s*2;[\s\S]*?overflow:\s*hidden;/
  );
  assert.match(
    css,
    /@media \(max-height:\s*720px\) and \(min-width:\s*921px\)\s*{[\s\S]*?\.resume-style\.resume-compact \.hero-action-path div\s*{[\s\S]*?padding:\s*8px 10px;/
  );
});

test("tablet compact hero keeps quick facts scannable without over-tall stacking", () => {
  const compactTabletMediaStart = css.indexOf(
    "@media (max-width: 920px) {\n  .resume-style.resume-compact .hero-copy"
  );
  assert.notEqual(compactTabletMediaStart, -1, "missing compact tablet media block");

  const compactTabletMediaEnd = css.indexOf("\n}\n\n@media (max-width: 760px)", compactTabletMediaStart);
  assert.notEqual(compactTabletMediaEnd, -1, "missing end of compact tablet media block");
  const compactTabletMedia = css.slice(compactTabletMediaStart, compactTabletMediaEnd);

  assert.match(
    compactTabletMedia,
    /\.resume-style\.resume-compact \.hero-meta\s*{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/
  );
  assert.match(
    compactTabletMedia,
    /\.resume-style\.resume-compact \.hero-meta div:nth-child\(odd\)\s*{[\s\S]*?border-right:\s*1px solid rgba\(19,\s*33,\s*31,\s*0\.12\);/
  );
  assert.match(
    compactTabletMedia,
    /\.resume-style\.resume-compact \.hero-meta div:nth-last-child\(-n \+ 2\)\s*{[\s\S]*?border-bottom:\s*0;/
  );
});

test("mobile compact hero keeps recruiter actions inside a short first screen", () => {
  assert.match(
    css,
    /@media \(max-width:\s*560px\)[\s\S]*?\.resume-style\.resume-compact \.hero-copy\s*{[\s\S]*?gap:\s*18px;[\s\S]*?padding-top:\s*108px;[\s\S]*?padding-bottom:\s*24px;/
  );
  assert.match(
    css,
    /@media \(max-width:\s*560px\)[\s\S]*?\.resume-style\.resume-compact \.hero-card-note\s*{[\s\S]*?display:\s*none;/
  );
  assert.match(
    css,
    /@media \(max-width:\s*560px\)[\s\S]*?\.resume-style\.resume-compact \.hero-actions\s*{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);[\s\S]*?gap:\s*8px;/
  );
  assert.match(
    css,
    /@media \(max-width:\s*560px\)[\s\S]*?\.resume-style\.resume-compact \.hero-action-path\s*{[\s\S]*?gap:\s*4px;[\s\S]*?margin-top:\s*10px;/
  );
  assert.match(
    css,
    /@media \(max-width:\s*560px\)[\s\S]*?\.resume-style\.resume-compact \.hero-action-path div\s*{[\s\S]*?padding:\s*6px 8px;/
  );
  assert.match(
    css,
    /@media \(max-width:\s*560px\)[\s\S]*?\.resume-style\.resume-compact \.hero-action-path span\s*{[\s\S]*?display:\s*none;/
  );
  assert.match(
    css,
    /@media \(max-width:\s*560px\)[\s\S]*?\.resume-style\.resume-compact \.resume-link\s*{[\s\S]*?grid-column:\s*auto;/
  );
});

test("person structured data is present and parseable", () => {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, "missing JSON-LD script");

  const data = JSON.parse(match[1]);
  assert.equal(data["@type"], "Person");
  assert.equal(data.name, "Yihang (Henry) Yang");
  assert.equal(data.jobTitle, "Biomedical Field Service Engineer");
  assert.equal(
    data.description,
    "Sydney-based Biomedical Field Service Engineer focused on medical device maintenance, troubleshooting, verification, service documentation, and resume download."
  );
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
