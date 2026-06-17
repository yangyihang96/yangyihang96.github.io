const yearTarget = document.querySelector("[data-current-year]");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const recruiterEmailAddress = "yangyihang96@gmail.com";
const recruiterEmailHrefEn = `mailto:${recruiterEmailAddress}?subject=${encodeURIComponent(
  "Biomedical field service opportunity"
)}&body=${encodeURIComponent(
  [
    "Hi Yihang,",
    "",
    "I'm contacting you about a biomedical field service role.",
    "",
    "Role scope: ",
    "Device scope: ",
    "Location / travel: ",
    "Preferred call times: ",
    "",
    "Regards,",
  ].join("\r\n")
)}`;
const recruiterEmailHrefZh = `mailto:${recruiterEmailAddress}?subject=${encodeURIComponent(
  "医疗设备现场服务机会"
)}&body=${encodeURIComponent(
  [
    "Yihang 你好，",
    "",
    "我想联系你沟通一个医疗设备现场服务相关机会。",
    "",
    "岗位范围：",
    "设备范围：",
    "地点 / 出行：",
    "合适通话时间：",
    "",
    "谢谢。",
  ].join("\r\n")
)}`;

const translations = {
  en: {
    lang: "en",
    title: "Yihang (Henry) Yang | Biomedical Field Service Engineer",
    description:
      "Sydney-based Biomedical Field Service Engineer focused on medical device maintenance, troubleshooting, verification, service documentation, and resume download.",
    copyEmail: {
      default: "Copy Email",
      copied: "Copied",
      failed: "Copy failed",
    },
    text: {
      ".skip-link": "Skip to content",
      ".site-nav a:nth-child(1)": "Experience",
      ".site-nav a:nth-child(2)": "Skills",
      ".site-nav a:nth-child(3)": "Cases",
      ".site-nav a:nth-child(4)": "Education",
      ".site-nav a:nth-child(5)": "Training",
      ".site-nav a:nth-child(6)": "Contact",
      ".nav-email-link": "Email",
      ".nav-resume-link": "Resume PDF",
      ".eyebrow": "Sydney · Biomedical Engineering · Field Service",
      ".hero-subtitle":
        "Sydney-based biomedical field service engineer focused on medical device maintenance, fault diagnosis, verification, and service documentation.",
      ".hero-meta div:nth-child(1) dt": "Base",
      ".hero-meta div:nth-child(1) dd": "Sydney, Australia",
      ".hero-meta div:nth-child(2) dt": "Focus",
      ".hero-meta div:nth-child(2) dd": "Medical device service",
      ".hero-meta div:nth-child(3) dt": "Languages",
      ".hero-meta div:nth-child(3) dd": "English / Mandarin",
      ".hero-meta div:nth-child(4) dt": "Hiring docs",
      ".hero-meta div:nth-child(4) dd": "Private after role fit",
      ".resume-link": "Download PDF",
      ".resume-docx-link": "Download DOCX",
      ".email-action": "Email Me",
      ".github-action": "GitHub",
      ".hero-action-path div:nth-child(1) strong": "Contact",
      ".hero-action-path div:nth-child(1) span": "Email for field-service fit",
      ".hero-action-path div:nth-child(2) strong": "Resume",
      ".hero-action-path div:nth-child(2) span": "PDF and DOCX ready",
      ".hero-action-path div:nth-child(3) strong": "Private proof",
      ".hero-action-path div:nth-child(3) span":
        "Credentials, training, right-to-work, and reference checks after fit",
      ".hero-profile-card .hero-card-kicker": "Current profile",
      ".hero-profile-card strong": "Biomedical field service engineer",
      ".hero-profile-card .hero-card-note":
        "Resume PDF and DOCX available. Credentials and pre-employment screening material can be provided privately when required.",
      ".profile-status-strip div:nth-child(1) strong": "Updated",
      ".profile-status-strip div:nth-child(1) span": "June 2026",
      ".profile-status-strip div:nth-child(2) strong": "Proof boundary",
      ".profile-status-strip div:nth-child(2) span": "Public-safe summary; private documents after role fit.",
      ".fit-strip .section-kicker": "Best fit for",
      "#fit-title": "Biomedical field service roles that need practical device judgement.",
      ".fit-strip .section-intro":
        "The quick read: Sydney-based, field-ready, bilingual, and focused on medical device maintenance, troubleshooting, verification, and clear service records.",
      ".fit-verdict div:nth-child(1) strong": "Best match",
      ".fit-verdict div:nth-child(1) span":
        "Biomedical field service roles needing device service, verification records, and clear handover.",
      ".fit-verdict div:nth-child(2) strong": "Evidence path",
      ".fit-verdict div:nth-child(2) span":
        "Work experience comes next, followed by proof points, cases, and training records.",
      ".fit-grid article:nth-child(1) span": "Role",
      ".fit-grid article:nth-child(1) strong": "Biomedical Field Service Engineer",
      ".fit-grid article:nth-child(2) span": "Service work",
      ".fit-grid article:nth-child(2) strong": "PM / repair / installation support",
      ".fit-grid article:nth-child(3) span": "Location",
      ".fit-grid article:nth-child(3) strong": "Sydney field travel",
      ".fit-grid article:nth-child(4) span": "Communication",
      ".fit-grid article:nth-child(4) strong": "English / Mandarin",
      ".fit-grid article:nth-child(5) span": "Hiring",
      ".fit-grid article:nth-child(5) strong": "Resume and checks ready",
      ".proof-strip .section-kicker": "Recruiter Proof",
      "#proof-title": "The evidence points are kept close to the top.",
      ".proof-boundary div:nth-child(1) strong": "Public now",
      ".proof-boundary div:nth-child(1) span":
        "Role scope, equipment families, service method, and safe case patterns.",
      ".proof-boundary div:nth-child(2) strong": "Private after fit",
      ".proof-boundary div:nth-child(2) span":
        "Certificates, identity, right-to-work checks, references, and pre-employment screening.",
      ".proof-boundary div:nth-child(3) strong": "Not published",
      ".proof-boundary div:nth-child(3) span":
        "Customer names, serial numbers, internal records, and site-specific details.",
      ".proof-grid article:nth-child(1) span": "Equipment",
      ".proof-grid article:nth-child(1) h3": "Equipment scope",
      ".proof-grid article:nth-child(1) .proof-evidence dt:nth-of-type(1)": "Public evidence",
      ".proof-grid article:nth-child(1) .proof-evidence dd:nth-of-type(1)":
        "Experience card and skills matrix show ventilation, monitoring, ultrasound, DEXA, pharmacy automation, and general biomedical equipment.",
      ".proof-grid article:nth-child(1) .proof-evidence dt:nth-of-type(2)": "Private check",
      ".proof-grid article:nth-child(1) .proof-evidence dd:nth-of-type(2)":
        "Ask for relevant training records or certificate context only after role fit is clear.",
      ".proof-grid article:nth-child(2) span": "Verification",
      ".proof-grid article:nth-child(2) h3": "Verification method",
      ".proof-grid article:nth-child(2) .proof-evidence dt:nth-of-type(1)": "Public evidence",
      ".proof-grid article:nth-child(2) .proof-evidence dd:nth-of-type(1)":
        "Current role summary shows functional checks, performance evidence, service reports, and escalation status.",
      ".proof-grid article:nth-child(2) .proof-evidence dt:nth-of-type(2)": "Private check",
      ".proof-grid article:nth-child(2) .proof-evidence dd:nth-of-type(2)":
        "Ask in interview for one device issue: symptom, test step, verified result, and handover.",
      ".proof-grid article:nth-child(3) span": "Records",
      ".proof-grid article:nth-child(3) h3": "Record trail",
      ".proof-grid article:nth-child(3) .proof-evidence dt:nth-of-type(1)": "Public evidence",
      ".proof-grid article:nth-child(3) .proof-evidence dd:nth-of-type(1)":
        "Experience outcome lists Simpro work orders, service reports, serial details, equipment history, and customer updates.",
      ".proof-grid article:nth-child(3) .proof-evidence dt:nth-of-type(2)": "Private check",
      ".proof-grid article:nth-child(3) .proof-evidence dd:nth-of-type(2)":
        "Ask how notes are written so the next engineer or biomedical team can continue safely.",
      ".proof-grid article:nth-child(4) span": "Handover",
      ".proof-grid article:nth-child(4) h3": "Handover path",
      ".proof-grid article:nth-child(4) .proof-evidence dt:nth-of-type(1)": "Public evidence",
      ".proof-grid article:nth-child(4) .proof-evidence dd:nth-of-type(1)":
        "Case notes show scenario, action, verification, and handover without customer or serial details.",
      ".proof-grid article:nth-child(4) .proof-evidence dt:nth-of-type(2)": "Private check",
      ".proof-grid article:nth-child(4) .proof-evidence dd:nth-of-type(2)":
        "Ask who receives the handover and what next-use status is communicated.",
      ".brief-section .section-kicker": "Screening Snapshot",
      "#brief-title": "How to assess the fit quickly after the first screen.",
      ".brief-section .section-intro":
        "Use this section as a short hiring screen: what to ask in interview, what proof to request privately, and where the role match is strongest.",
      ".brief-grid article:nth-child(1) span": "Interview focus",
      ".brief-grid article:nth-child(1) h3": "Ask for a service example",
      ".brief-grid article:nth-child(1) p":
        "Use one device issue to discuss symptom capture, test steps, verification evidence, and handover.",
      ".brief-grid article:nth-child(2) span": "Private proof",
      ".brief-grid article:nth-child(2) h3": "Request documents after fit",
      ".brief-grid article:nth-child(2) p":
        "Resume files are public; credentials, training records, and screening material stay private until needed.",
      ".brief-grid article:nth-child(3) span": "Best next role",
      ".brief-grid article:nth-child(3) h3": "Biomedical field service",
      ".brief-grid article:nth-child(3) p":
        "Strongest match is hands-on service work with travel, documentation, troubleshooting, and follow-up ownership.",
      "#capabilities .section-kicker": "Skills Matrix",
      "#capabilities-title": "What I can handle in a service environment.",
      "#capabilities .section-intro":
        "A recruiter or hiring manager should be able to judge the fit quickly: device service, testing, records, communication, tools, and pre-employment screening readiness.",
      ".capability-row article:nth-child(1) span": "Service",
      ".capability-row article:nth-child(1) h3": "Field and workshop work",
      ".capability-row article:nth-child(1) p":
        "Preventive maintenance, troubleshooting, repair, installation support, bench service, and close-out.",
      ".capability-row article:nth-child(2) span": "Testing",
      ".capability-row article:nth-child(2) h3": "Verification evidence",
      ".capability-row article:nth-child(2) p":
        "Functional testing, performance checks, electrical safety awareness, and test notes that can be reviewed later.",
      ".capability-row article:nth-child(3) span": "Equipment",
      ".capability-row article:nth-child(3) h3": "Medical device range",
      ".capability-row article:nth-child(3) p":
        "Ventilation, patient monitoring, ultrasound, DEXA, pharmacy automation, and general biomedical equipment.",
      ".capability-row article:nth-child(4) span": "Records",
      ".capability-row article:nth-child(4) h3": "Traceable service notes",
      ".capability-row article:nth-child(4) p":
        "Work orders, service reports, equipment history, serial details, action logs, and concise follow-up notes.",
      ".capability-row article:nth-child(5) span": "Communication",
      ".capability-row article:nth-child(5) h3": "Clear handover",
      ".capability-row article:nth-child(5) p":
        "Aligning observed issues, limits, and next steps with clinical users, biomedical teams, vendors, and internal engineers.",
      ".capability-row article:nth-child(6) span": "Pre-employment checks",
      ".capability-row article:nth-child(6) h3": "Sydney travel + private proof",
      ".capability-row article:nth-child(6) p":
        "Sydney field travel, resume download, and private degree, training, identity, and right-to-work proof for formal hiring checks.",
      ".experience-section .section-kicker": "Work Experience",
      "#experience-title":
        "Professional experience across field service, workshop support, and healthcare records.",
      ".experience-section .section-intro":
        "The roles below summarize public-safe work history without customer names, serial numbers, internal documents, or private site details.",
      ".experience-summary > p":
        "Biomedical field service engineer with full-time experience across hospital and pharmacy medical equipment service, preventive maintenance, troubleshooting, repair, verification, and service documentation.",
      ".experience-summary-grid div:nth-child(1) strong": "Service loop",
      ".experience-summary-grid div:nth-child(1) span":
        "Cover equipment preparation, on-site or workshop service, installation support, functional checks, safety-aware verification, and follow-up.",
      ".experience-summary-grid div:nth-child(2) strong": "Equipment range",
      ".experience-summary-grid div:nth-child(2) span":
        "Work across ventilation, patient monitoring, ultrasound, DEXA, pharmacy automation, and general biomedical equipment.",
      ".experience-summary-grid div:nth-child(3) strong": "Documentation",
      ".experience-summary-grid div:nth-child(3) span":
        "Maintain Simpro work orders, service reports, serial details, equipment history, and customer updates so technical decisions remain traceable.",
      ".experience-timeline article:nth-child(1) .experience-date": "Jul 2023 - Present",
      ".experience-timeline article:nth-child(1) h3":
        "Biomedical Engineer | Nova Biomedical Australia",
      ".experience-timeline article:nth-child(1) .experience-meta":
        "Australia-wide field service / workshop support · Full-time, 38 hours per week",
      ".experience-evidence div:nth-child(1) strong": "Equipment",
      ".experience-evidence div:nth-child(1) span": "Ventilation / monitoring / ultrasound / DEXA",
      ".experience-evidence div:nth-child(2) strong": "Service actions",
      ".experience-evidence div:nth-child(2) span": "PM / repair / installation / verification",
      ".experience-evidence div:nth-child(3) strong": "Records",
      ".experience-evidence div:nth-child(3) span": "Simpro / service reports / equipment history",
      ".experience-evidence div:nth-child(4) strong": "Service settings",
      ".experience-evidence div:nth-child(4) span": "Hospital / pharmacy / workshop support",
      ".experience-outcome dt:nth-of-type(1)": "Service setting",
      ".experience-outcome dd:nth-of-type(1)":
        "Hospital, pharmacy, workshop, and field-support environments",
      ".experience-outcome dt:nth-of-type(2)": "Verified outcome",
      ".experience-outcome dd:nth-of-type(2)":
        "Devices returned with functional checks, performance evidence, or clear escalation status",
      ".experience-outcome dt:nth-of-type(3)": "Record trail",
      ".experience-outcome dd:nth-of-type(3)":
        "Simpro work order, service report, serial details, equipment history, and customer update aligned",
      ".experience-outcome dt:nth-of-type(4)": "Handover",
      ".experience-outcome dd:nth-of-type(4)":
        "Biomedical teams, clinical users, vendors, and internal engineers can see next-use status",
      ".experience-timeline article:nth-child(2) .experience-date": "Dec 2019 - Feb 2020",
      ".experience-timeline article:nth-child(2) h3":
        "Pharmacovigilance Department Assistant | Lundbeck Beijing",
      ".experience-timeline article:nth-child(2) .experience-meta":
        "Internship · Beijing, China",
      ".experience-timeline article:nth-child(2) li:nth-child(1)":
        "Supported adverse reaction record handling and drug-safety documentation for Lundbeck products listed in China.",
      ".experience-timeline article:nth-child(2) li:nth-child(2)":
        "Assisted documentation work related to regulated healthcare records and cross-functional communication.",
      "#case-notes .section-kicker": "Case Notes",
      "#case-title": "Public-safe service cases are more useful than generic claims.",
      "#case-notes .section-intro":
        "I do not publish customer names, serial numbers, or internal records here. These notes show the method and judgement structure instead.",
      ".case-grid article:nth-child(1) span": "01 / Preventive maintenance",
      ".case-grid article:nth-child(1) h3": "From routine maintenance to clear handover",
      ".case-grid article:nth-child(1) p":
        "I first confirm equipment condition, history, and site limits, then complete checks, calibration, or performance verification by procedure. The close-out record should make the next handover easier, not harder.",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(1)": "Scenario",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(1)":
        "Scheduled service with site constraints",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(2)": "Action",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(2)":
        "Condition check, procedure steps, and performance evidence",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(3)": "Verification",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(3)":
        "Functional check and service record close-out",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(4)": "Handover",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(4)":
        "Clear next-use status for biomedical or site teams",
      ".case-grid article:nth-child(2) span": "02 / Fault diagnosis",
      ".case-grid article:nth-child(2) h3": "Turning user feedback into a verifiable judgement",
      ".case-grid article:nth-child(2) p":
        "When a fault is reported, I separate the symptom, use condition, repair history, and reproducible path before combining service manual steps, measurements, and replacement checks.",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(1)": "Scenario",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(1)":
        "User-reported symptom with repair history",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(2)": "Action",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(2)":
        "Symptom review, reproducible path, and manual-led checks",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(3)": "Verification",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(3)":
        "Measurement notes and post-repair confirmation",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(4)": "Handover",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(4)":
        "Traceable finding for the next service decision",
      ".case-grid article:nth-child(3) span": "03 / Documentation",
      ".case-grid article:nth-child(3) h3": "Keeping service information reusable",
      ".case-grid article:nth-child(3) p":
        "I align serial details, work orders, service reports, parts/actions, and customer updates so later troubleshooting does not start from memory alone.",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(1)": "Scenario",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(1)":
        "Reusable service trail for later troubleshooting",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(2)": "Action",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(2)":
        "Serial details, work order, service report, and actions aligned",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(3)": "Verification",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(3)":
        "Equipment history and customer update cross-check",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(4)": "Handover",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(4)":
        "Clear record for biomedical teams and internal engineers",
      "#study .section-kicker": "Education",
      "#study-title":
        "My engineering background keeps me grounded in principles, evidence, and records.",
      "#study .section-intro":
        "From biomedical engineering study to field service, I keep training the same habit: break the problem down, verify it, and write it clearly.",
      ".study-grid article:nth-child(1) p:nth-of-type(2)":
        "Biomedical engineering research, experimental planning, validation evidence, and technical documentation.",
      ".study-grid article:nth-child(2) p:nth-of-type(2)":
        "Medical science, biomedical design, data analysis, and engineering design tools.",
      ".study-grid article:nth-child(3) span": "MPhil thesis",
      ".study-grid article:nth-child(3) h3":
        "Flexible Electrodes for Smart Bandages: Feasibility Exploration",
      ".study-grid article:nth-child(3) p":
        "Wearable medical-device feasibility work using electrode geometry, silver ink coating, impedance measurement, and manufacturability trade-offs.",
      ".study-proof-strip article:nth-child(1) strong": "Academic records",
      ".study-proof-strip article:nth-child(1) span":
        "University certificate, academic transcripts, and degree evidence are organized offline for formal checks.",
      ".study-proof-strip article:nth-child(2) strong": "Research evidence",
      ".study-proof-strip article:nth-child(2) span":
        "MPhil thesis, submission/examination documents, and lab records support the research claims.",
      ".study-proof-strip article:nth-child(3) strong": "Work-right checks",
      ".study-proof-strip article:nth-child(3) span":
        "Right-to-work, identity, and screening documents stay private until a formal hiring process.",
      ".certification-section .section-kicker": "Selected Training",
      "#certification-title": "Training records support the service work behind the profile.",
      ".certification-section .section-intro":
        "I found relevant service and technical training certificates in my local files. This public page lists only safe titles and equipment scopes; original PDFs, certificate numbers, signatures, and verification details stay offline.",
      ".certification-grid article:nth-child(1) span": "2023 - 2025",
      ".certification-grid article:nth-child(1) h3": "Respiratory and monitoring service",
      ".certification-grid article:nth-child(1) .training-evidence dt:nth-of-type(1)": "Equipment scope",
      ".certification-grid article:nth-child(1) .training-evidence dd:nth-of-type(1)":
        "V60, V60 Plus, Trilogy, Avalon, Efficia, HeartStart",
      ".certification-grid article:nth-child(1) .training-evidence dt:nth-of-type(2)": "Field work",
      ".certification-grid article:nth-child(1) .training-evidence dd:nth-of-type(2)":
        "Planned service, troubleshooting preparation, functional checks",
      ".certification-grid article:nth-child(1) .training-evidence dt:nth-of-type(3)": "Evidence",
      ".certification-grid article:nth-child(1) .training-evidence dd:nth-of-type(3)":
        "Offline certificates and service records available for formal checks",
      ".certification-grid article:nth-child(2) span": "2023 - 2025",
      ".certification-grid article:nth-child(2) h3": "Imaging and diagnostic equipment",
      ".certification-grid article:nth-child(2) .training-evidence dt:nth-of-type(1)": "Equipment scope",
      ".certification-grid article:nth-child(2) .training-evidence dd:nth-of-type(1)":
        "EPIQ, Affiniti, CX30, CX50, Horizon DEXA, X-ray systems",
      ".certification-grid article:nth-child(2) .training-evidence dt:nth-of-type(2)": "Field work",
      ".certification-grid article:nth-child(2) .training-evidence dd:nth-of-type(2)":
        "Imaging system service preparation, installation support, checks",
      ".certification-grid article:nth-child(2) .training-evidence dt:nth-of-type(3)": "Evidence",
      ".certification-grid article:nth-child(2) .training-evidence dd:nth-of-type(3)":
        "Training records and service notes available for private review",
      ".certification-grid article:nth-child(3) span": "2024",
      ".certification-grid article:nth-child(3) h3": "Automation and specialty systems",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(1)": "Equipment scope",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(1)":
        "BD FIX100 and vendor-led specialty service preparation",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(2)": "Field work",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(2)":
        "Automation service readiness, workflow awareness, handover notes",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(3)": "Evidence",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(3)":
        "Original certificates available for formal verification only",
      "#life .section-kicker": "Professional Rhythm",
      "#life-title": "The personal note is kept short and work-adjacent.",
      ".life-section .story-content > p:not(.section-kicker)":
        "Outside work, I keep the personal section deliberately short: enough to show learning rhythm and organization habits without distracting from the engineering profile.",
      "#contact .section-kicker": "Contact",
      "#contact-title": "You can reach me here.",
      ".contact-inner > p:not(.section-kicker)":
        "For biomedical / medical device field service opportunities, use the actions below. English and Mandarin are both fine.",
      ".contact-actions-title": "Ready for field service conversations.",
      ".contact-actions-summary":
        "For roles needing Sydney field travel, medical device service, verification records, and bilingual communication.",
      ".contact-email-action": "Email Me",
      ".contact-copy-email-action": "Copy Email",
      ".contact-resume-link": "Resume PDF",
      ".contact-docx-link": "Resume DOCX",
      ".contact-resume-format-note": "PDF for quick review; DOCX for ATS or recruiter systems.",
      ".contact-intake div:nth-child(1) strong": "Role scope",
      ".contact-intake div:nth-child(1) span":
        "Share device type, service setting, travel area, and start timing.",
      ".contact-intake div:nth-child(2) strong": "Proof needed",
      ".contact-intake div:nth-child(2) span":
        "Ask privately for degree, training, identity, right-to-work, or reference-check material when required.",
      ".contact-intake div:nth-child(3) strong": "Next step",
      ".contact-intake div:nth-child(3) span":
        "Send interview time, role description, or technical screen format.",
      ".contact-response-strip div:nth-child(1) strong": "Reply window",
      ".contact-response-strip div:nth-child(1) span":
        "I aim to reply within 1 business day for role-fit, interview, or document requests.",
      ".contact-response-strip div:nth-child(2) strong": "Best format",
      ".contact-response-strip div:nth-child(2) span":
        "Email the role description, device scope, location, and preferred call times.",
      ".contact-response-strip div:nth-child(3) strong": "Document order",
      ".contact-response-strip div:nth-child(3) span":
        "Resume first; sensitive checks only after role fit and formal process are clear.",
      ".contact-actions-note strong": "Direct email",
      ".contact-email-text": "yangyihang96@gmail.com",
      ".contact-privacy-note":
        "Private credentials and pre-employment screening material are shared only when required.",
      ".contact-call-note": "Phone or video calls can be arranged after email confirmation.",
    },
    html: {
      ".life-notes p:nth-child(1)":
        "<strong>Structured weeks</strong> Keeping work, commuting, study, and admin organized so field-service days stay reliable.",
      ".life-notes p:nth-child(2)":
        "<strong>Continuous learning</strong> Following medical technology, engineering tools, AI tools, and practical ways to improve service work.",
      ".life-notes p:nth-child(3)":
        "<strong>Record discipline</strong> Turning scattered information into reusable notes, checklists, and handover structure.",
    },
    attrs: {
      ".brand": { "aria-label": "Back to top" },
      ".site-nav": { "aria-label": "Primary navigation" },
      ".language-switch": { "aria-label": "Language switcher" },
      ".hero-meta": { "aria-label": "Quick profile" },
      ".hero-profile-card": { "aria-label": "Profile snapshot" },
      ".profile-status-strip": { "aria-label": "Profile currency and proof boundary" },
      ".fit-grid": { "aria-label": "Recruiter quick match" },
      ".experience-summary-grid": { "aria-label": "Work experience summary" },
      ".nav-email-link": { "aria-label": "Email Yihang Henry Yang", href: recruiterEmailHrefEn },
      ".nav-resume-link": { "aria-label": "Download Henry Yang resume PDF" },
      ".resume-link": { "aria-label": "Download Henry Yang resume as PDF" },
      ".resume-docx-link": { "aria-label": "Download Henry Yang resume as DOCX" },
      ".email-action": { "aria-label": "Email Yihang Henry Yang", href: recruiterEmailHrefEn },
      ".github-action": { "aria-label": "Open Yihang Yang GitHub profile" },
      ".contact-email-action": { "aria-label": "Email Yihang Henry Yang", href: recruiterEmailHrefEn },
      ".contact-copy-email-action": { "aria-label": "Copy Yihang Henry Yang email address" },
      ".contact-resume-link": { "aria-label": "Download Henry Yang resume as PDF" },
      ".contact-docx-link": { "aria-label": "Download Henry Yang resume as DOCX" },
      ".contact-actions": { "aria-label": "Recruiter contact actions" },
      ".contact-intake": { "aria-label": "Recruiter email checklist" },
      ".contact-response-strip": { "aria-label": "Recruiter response expectations" },
      ".hero-action-path": { "aria-label": "Recruiter action path" },
      ".fit-verdict": { "aria-label": "Recruiter role-fit verdict" },
      ".proof-boundary": { "aria-label": "Public and private evidence boundary" },
      ".proof-grid": { "aria-label": "Recruiter evidence checklist" },
      ".brief-grid": { "aria-label": "Recruiter screening snapshot" },
      ".experience-evidence": { "aria-label": "Current field-service evidence" },
      ".experience-outcome": { "aria-label": "Current role service outcome summary" },
      ".case-grid article:nth-child(1) .case-outcome": { "aria-label": "Public-safe case outcome" },
      ".case-grid article:nth-child(2) .case-outcome": { "aria-label": "Public-safe case outcome" },
      ".case-grid article:nth-child(3) .case-outcome": { "aria-label": "Public-safe case outcome" },
      ".study-proof-strip": { "aria-label": "Academic and work-right evidence path" },
      ".certification-grid article:nth-child(1) .training-evidence": { "aria-label": "Training evidence map" },
      ".certification-grid article:nth-child(2) .training-evidence": { "aria-label": "Training evidence map" },
      ".certification-grid article:nth-child(3) .training-evidence": { "aria-label": "Training evidence map" },
    },
  },
  zh: {
    lang: "zh-CN",
    title: "Yihang (Henry) Yang | 医疗设备现场服务工程师",
    description:
      "Yihang (Henry) Yang 是悉尼医疗设备现场服务工程师，重点展示设备维护、故障排查、验证记录、服务文档和简历下载。",
    copyEmail: {
      default: "复制邮箱",
      copied: "已复制",
      failed: "复制失败",
    },
    text: {
      ".skip-link": "跳到主要内容",
      ".site-nav a:nth-child(1)": "经历",
      ".site-nav a:nth-child(2)": "能力",
      ".site-nav a:nth-child(3)": "案例",
      ".site-nav a:nth-child(4)": "背景",
      ".site-nav a:nth-child(5)": "培训",
      ".site-nav a:nth-child(6)": "联系",
      ".nav-email-link": "邮件",
      ".nav-resume-link": "PDF 简历",
      ".eyebrow": "悉尼 · 生物医学工程 · 现场服务",
      ".hero-subtitle":
        "我在悉尼做医疗设备现场服务，关注的不只是把设备修好，而是把现场判断、测试验证和服务记录做成可交接的闭环。",
      ".hero-meta div:nth-child(1) dt": "地点",
      ".hero-meta div:nth-child(1) dd": "澳大利亚悉尼",
      ".hero-meta div:nth-child(2) dt": "重点",
      ".hero-meta div:nth-child(2) dd": "医疗设备服务",
      ".hero-meta div:nth-child(3) dt": "语言",
      ".hero-meta div:nth-child(3) dd": "英文 / 中文",
      ".hero-meta div:nth-child(4) dt": "招聘材料",
      ".hero-meta div:nth-child(4) dd": "岗位匹配后私下提供",
      ".resume-link": "下载 PDF 简历",
      ".resume-docx-link": "下载 DOCX",
      ".email-action": "发邮件联系我",
      ".github-action": "GitHub",
      ".hero-action-path div:nth-child(1) strong": "联系",
      ".hero-action-path div:nth-child(1) span": "发邮件确认岗位匹配",
      ".hero-action-path div:nth-child(2) strong": "简历",
      ".hero-action-path div:nth-child(2) span": "PDF 和 DOCX 可下载",
      ".hero-action-path div:nth-child(3) strong": "私下核验",
      ".hero-action-path div:nth-child(3) span":
        "学历、培训、工作权利和推荐人核验在匹配后私下提供",
      ".hero-profile-card .hero-card-kicker": "当前身份",
      ".hero-profile-card strong": "生物医学现场服务工程师",
      ".hero-profile-card .hero-card-note":
        "PDF 和 DOCX 简历都可下载。学历、培训证书和入职前筛选材料可在正式流程中私下提供。",
      ".profile-status-strip div:nth-child(1) strong": "更新",
      ".profile-status-strip div:nth-child(1) span": "2026 年 6 月",
      ".profile-status-strip div:nth-child(2) strong": "证明边界",
      ".profile-status-strip div:nth-child(2) span": "公开安全摘要；正式匹配后私下提供文件。",
      ".fit-strip .section-kicker": "适合岗位",
      "#fit-title": "需要现场判断和设备服务能力的 biomedical field service 岗位。",
      ".fit-strip .section-intro":
        "快速判断：常驻悉尼，可支持现场出行，中英文沟通，重点在医疗设备维护、故障排查、验证测试和清楚的服务记录。",
      ".fit-verdict div:nth-child(1) strong": "最适合",
      ".fit-verdict div:nth-child(1) span":
        "需要设备服务、验证记录和清楚交接的 biomedical field service 岗位。",
      ".fit-verdict div:nth-child(2) strong": "证据路径",
      ".fit-verdict div:nth-child(2) span":
        "下面先看正式工作经历，再看证据点、案例和培训记录。",
      ".fit-grid article:nth-child(1) span": "岗位",
      ".fit-grid article:nth-child(1) strong": "Biomedical Field Service Engineer",
      ".fit-grid article:nth-child(2) span": "服务内容",
      ".fit-grid article:nth-child(2) strong": "PM / 维修 / 安装支持",
      ".fit-grid article:nth-child(3) span": "地点",
      ".fit-grid article:nth-child(3) strong": "悉尼现场出行",
      ".fit-grid article:nth-child(4) span": "沟通",
      ".fit-grid article:nth-child(4) strong": "英文 / 中文",
      ".fit-grid article:nth-child(5) span": "招聘材料",
      ".fit-grid article:nth-child(5) strong": "简历和核验材料已准备",
      ".proof-strip .section-kicker": "招聘方快速核对",
      "#proof-title": "把关键证明点放在页面前半段。",
      ".proof-boundary div:nth-child(1) strong": "当前公开",
      ".proof-boundary div:nth-child(1) span":
        "岗位范围、设备类别、服务方法和适合公开的案例框架。",
      ".proof-boundary div:nth-child(2) strong": "匹配后私下核验",
      ".proof-boundary div:nth-child(2) span":
        "证书、身份、工作权利核验、推荐人核验和入职前筛选材料。",
      ".proof-boundary div:nth-child(3) strong": "不公开",
      ".proof-boundary div:nth-child(3) span":
        "客户名称、序列号、内部记录和具体现场细节。",
      ".proof-grid article:nth-child(1) span": "设备",
      ".proof-grid article:nth-child(1) h3": "设备范围",
      ".proof-grid article:nth-child(1) .proof-evidence dt:nth-of-type(1)": "公开证据",
      ".proof-grid article:nth-child(1) .proof-evidence dd:nth-of-type(1)":
        "工作经历卡片和能力矩阵显示 ventilation、monitoring、ultrasound、DEXA、pharmacy automation 和通用 biomedical equipment。",
      ".proof-grid article:nth-child(1) .proof-evidence dt:nth-of-type(2)": "私下核验",
      ".proof-grid article:nth-child(1) .proof-evidence dd:nth-of-type(2)":
        "岗位匹配清楚后，再要求相关 training records 或 certificate context。",
      ".proof-grid article:nth-child(2) span": "验证",
      ".proof-grid article:nth-child(2) h3": "验证方法",
      ".proof-grid article:nth-child(2) .proof-evidence dt:nth-of-type(1)": "公开证据",
      ".proof-grid article:nth-child(2) .proof-evidence dd:nth-of-type(1)":
        "当前岗位摘要展示 functional checks、performance evidence、service reports 和 escalation status。",
      ".proof-grid article:nth-child(2) .proof-evidence dt:nth-of-type(2)": "私下核验",
      ".proof-grid article:nth-child(2) .proof-evidence dd:nth-of-type(2)":
        "面试时让他讲一个设备问题：症状、测试步骤、验证结果和交接方式。",
      ".proof-grid article:nth-child(3) span": "记录",
      ".proof-grid article:nth-child(3) h3": "记录链路",
      ".proof-grid article:nth-child(3) .proof-evidence dt:nth-of-type(1)": "公开证据",
      ".proof-grid article:nth-child(3) .proof-evidence dd:nth-of-type(1)":
        "经历结果里列出 Simpro work orders、service reports、serial details、equipment history 和 customer updates。",
      ".proof-grid article:nth-child(3) .proof-evidence dt:nth-of-type(2)": "私下核验",
      ".proof-grid article:nth-child(3) .proof-evidence dd:nth-of-type(2)":
        "询问他如何写记录，让下一位工程师或 biomedical team 可以安全继续处理。",
      ".proof-grid article:nth-child(4) span": "交接",
      ".proof-grid article:nth-child(4) h3": "交接路径",
      ".proof-grid article:nth-child(4) .proof-evidence dt:nth-of-type(1)": "公开证据",
      ".proof-grid article:nth-child(4) .proof-evidence dd:nth-of-type(1)":
        "案例笔记展示 scenario、action、verification 和 handover，同时不暴露客户或序列号。",
      ".proof-grid article:nth-child(4) .proof-evidence dt:nth-of-type(2)": "私下核验",
      ".proof-grid article:nth-child(4) .proof-evidence dd:nth-of-type(2)":
        "询问交接对象是谁，以及设备下一次使用状态如何被说明。",
      ".brief-section .section-kicker": "招聘筛选快照",
      "#brief-title": "第一轮看完后，可以这样快速判断匹配度。",
      ".brief-section .section-intro":
        "这里按招聘方的筛选方式写：面试可以问什么，哪些证明适合私下核验，以及最强匹配的岗位场景。",
      ".brief-grid article:nth-child(1) span": "面试重点",
      ".brief-grid article:nth-child(1) h3": "让他讲一个服务案例",
      ".brief-grid article:nth-child(1) p":
        "用一个设备问题去看症状收集、测试步骤、验证证据和交接表达是否清楚。",
      ".brief-grid article:nth-child(2) span": "私下核验",
      ".brief-grid article:nth-child(2) h3": "匹配后再要证明文件",
      ".brief-grid article:nth-child(2) p":
        "公开页面只放简历；学历、培训和筛选材料需要时再私下提供。",
      ".brief-grid article:nth-child(3) span": "最适合下一步",
      ".brief-grid article:nth-child(3) h3": "Biomedical field service",
      ".brief-grid article:nth-child(3) p":
        "最强匹配是需要现场服务、出行、记录、故障排查和后续跟进 ownership 的岗位。",
      ".experience-section .section-kicker": "工作经历",
      "#experience-title": "正式履历覆盖现场服务、workshop support 和医疗记录相关工作。",
      ".experience-section .section-intro":
        "下面只放适合公开展示的履历摘要，不公开客户名称、序列号、内部文件或具体现场细节。",
      ".experience-summary > p":
        "我目前从事 biomedical field service 工作，服务对象覆盖医院和药房相关医疗设备，工作内容包括预防性维护、故障排查、维修、安装支持、验证测试和服务记录。",
      ".experience-summary-grid div:nth-child(1) strong": "服务闭环",
      ".experience-summary-grid div:nth-child(1) span":
        "覆盖设备准备、现场或 workshop 服务、安装支持、功能检查、安全意识下的验证和后续跟进。",
      ".experience-summary-grid div:nth-child(2) strong": "设备范围",
      ".experience-summary-grid div:nth-child(2) span":
        "接触 ventilation、patient monitoring、ultrasound、DEXA、pharmacy automation 和通用 biomedical equipment。",
      ".experience-summary-grid div:nth-child(3) strong": "记录能力",
      ".experience-summary-grid div:nth-child(3) span":
        "维护 Simpro 工单、service reports、serial details、equipment history 和 customer updates，让技术判断可以追踪和交接。",
      ".experience-timeline article:nth-child(1) .experience-date": "2023 年 7 月 - 至今",
      ".experience-timeline article:nth-child(1) h3":
        "Biomedical Engineer | Nova Biomedical Australia",
      ".experience-timeline article:nth-child(1) .experience-meta":
        "澳大利亚范围现场服务 / workshop support · 全职，每周 38 小时",
      ".experience-evidence div:nth-child(1) strong": "设备",
      ".experience-evidence div:nth-child(1) span": "Ventilation / monitoring / ultrasound / DEXA",
      ".experience-evidence div:nth-child(2) strong": "服务动作",
      ".experience-evidence div:nth-child(2) span": "PM / 维修 / 安装支持 / 验证",
      ".experience-evidence div:nth-child(3) strong": "记录",
      ".experience-evidence div:nth-child(3) span": "Simpro / service reports / equipment history",
      ".experience-evidence div:nth-child(4) strong": "服务场景",
      ".experience-evidence div:nth-child(4) span": "医院 / 药房 / workshop support",
      ".experience-outcome dt:nth-of-type(1)": "服务环境",
      ".experience-outcome dd:nth-of-type(1)":
        "医院、药房、workshop 和现场支持环境",
      ".experience-outcome dt:nth-of-type(2)": "验证结果",
      ".experience-outcome dd:nth-of-type(2)":
        "设备以功能检查、性能证据或清楚升级状态结束",
      ".experience-outcome dt:nth-of-type(3)": "记录链路",
      ".experience-outcome dd:nth-of-type(3)":
        "Simpro 工单、service report、serial details、equipment history 和 customer update 对齐",
      ".experience-outcome dt:nth-of-type(4)": "交接对象",
      ".experience-outcome dd:nth-of-type(4)":
        "Biomedical teams、临床用户、vendors 和内部工程师能看到下一次使用状态",
      ".experience-timeline article:nth-child(2) .experience-date": "2019 年 12 月 - 2020 年 2 月",
      ".experience-timeline article:nth-child(2) h3":
        "药物警戒部门助理 | Lundbeck Beijing",
      ".experience-timeline article:nth-child(2) .experience-meta":
        "实习 · 中国北京",
      ".experience-timeline article:nth-child(2) li:nth-child(1)":
        "支持 Lundbeck 在中国上市产品的不良反应记录处理和药物安全文档工作。",
      ".experience-timeline article:nth-child(2) li:nth-child(2)":
        "参与受监管医疗记录相关文档整理，接触跨部门沟通和合规记录边界。",
      "#case-notes .section-kicker": "服务案例",
      "#case-title": "服务经历不能公开细节，但可以公开方法。",
      "#case-notes .section-intro":
        "这里不会搬出内部工单、客户名称或设备序列号，只保留我判断问题和整理结果的方式。",
      ".case-grid article:nth-child(1) span": "01 / 计划性维护",
      ".case-grid article:nth-child(1) h3": "从例行维护到可交接记录",
      ".case-grid article:nth-child(1) p":
        "例行维护看起来重复，但每次都要先确认设备状态、历史记录和现场限制。检查、校准或性能验证完成后，记录要写到下一位接手的人不用重新猜。",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(1)": "场景",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(1)":
        "有现场限制的计划性服务",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(2)": "动作",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(2)":
        "状态确认、流程步骤和性能证据",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(3)": "验证",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(3)":
        "功能检查和服务记录 close-out",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(4)": "交付",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(4)":
        "给 biomedical 或现场团队清楚的下一次使用状态",
      ".case-grid article:nth-child(2) span": "02 / 故障诊断",
      ".case-grid article:nth-child(2) h3": "先把故障描述变成可验证的问题",
      ".case-grid article:nth-child(2) p":
        "面对用户反馈，我不会一开始就猜原因。我会先拆出现象、使用场景、历史维修和可复现条件，再结合 service manual、测量结果和替换验证去收窄判断。",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(1)": "场景",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(1)":
        "带有维修历史的用户反馈故障",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(2)": "动作",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(2)":
        "现象复核、复现路径和手册引导检查",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(3)": "验证",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(3)":
        "测量记录和维修后确认",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(4)": "交付",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(4)":
        "给下一次服务决策可追踪的判断",
      ".case-grid article:nth-child(3) span": "03 / 服务记录",
      ".case-grid article:nth-child(3) h3": "记录写清楚，后面才接得住",
      ".case-grid article:nth-child(3) p":
        "服务结束以后，信息不能只留在记忆里。我会把 serial、work order、service report、parts/action 和 customer update 对齐，让后续排查不用重新猜。",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(1)": "场景",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(1)":
        "后续排查需要复用的服务轨迹",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(2)": "动作",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(2)":
        "对齐 serial、work order、service report 和 actions",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(3)": "验证",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(3)":
        "交叉检查 equipment history 和 customer update",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(4)": "交付",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(4)":
        "给 biomedical team 和内部工程师清楚记录",
      "#study .section-kicker": "教育",
      "#study-title": "工程背景让我更习惯用证据说话。",
      "#study .section-intro":
        "从 biomedical engineering 到现场服务，我一直在练习同一件事：把复杂问题拆开，找到证据，再把结论写清楚。",
      ".study-grid article:nth-child(1) p:nth-of-type(2)":
        "Biomedical engineering research、实验计划、验证证据和技术文档。",
      ".study-grid article:nth-child(2) p:nth-of-type(2)":
        "Medical science、biomedical design、data analysis 和 engineering design tools。",
      ".study-grid article:nth-child(3) span": "MPhil 论文题目",
      ".study-grid article:nth-child(3) h3":
        "Flexible Electrodes for Smart Bandages: Feasibility Exploration",
      ".study-grid article:nth-child(3) p":
        "围绕 wearable medical device 可行性，处理柔性电极几何、银墨涂层、阻抗测量和可制造性权衡。",
      ".study-proof-strip article:nth-child(1) strong": "学历记录",
      ".study-proof-strip article:nth-child(1) span":
        "大学证书、成绩单和学位证明已在本地整理好，可在正式流程中私下核验。",
      ".study-proof-strip article:nth-child(2) strong": "研究证据",
      ".study-proof-strip article:nth-child(2) span":
        "MPhil 论文、提交/审查文件和实验记录可以支撑页面里的研究经历。",
      ".study-proof-strip article:nth-child(3) strong": "工作权利核验",
      ".study-proof-strip article:nth-child(3) span":
        "工作权利、身份和入职前筛选材料只在正式招聘流程中私下提供。",
      ".certification-section .section-kicker": "培训证书",
      "#certification-title": "证书部分展示能力范围，不公开证书原件。",
      ".certification-section .section-intro":
        "我在本地文件里找到了多份服务培训和技术培训证书。公开网页只放适合展示的培训方向和设备范围，不放 PDF 原件、证书编号、签名或核验细节。",
      ".certification-grid article:nth-child(1) span": "2023 - 2025",
      ".certification-grid article:nth-child(1) h3": "呼吸与监护设备服务",
      ".certification-grid article:nth-child(1) .training-evidence dt:nth-of-type(1)": "设备范围",
      ".certification-grid article:nth-child(1) .training-evidence dd:nth-of-type(1)":
        "V60、V60 Plus、Trilogy、Avalon、Efficia、HeartStart",
      ".certification-grid article:nth-child(1) .training-evidence dt:nth-of-type(2)": "现场工作",
      ".certification-grid article:nth-child(1) .training-evidence dd:nth-of-type(2)":
        "计划性服务、故障排查准备和功能检查",
      ".certification-grid article:nth-child(1) .training-evidence dt:nth-of-type(3)": "证据",
      ".certification-grid article:nth-child(1) .training-evidence dd:nth-of-type(3)":
        "线下证书和服务记录可在正式流程中核验",
      ".certification-grid article:nth-child(2) span": "2023 - 2025",
      ".certification-grid article:nth-child(2) h3": "影像与诊断设备",
      ".certification-grid article:nth-child(2) .training-evidence dt:nth-of-type(1)": "设备范围",
      ".certification-grid article:nth-child(2) .training-evidence dd:nth-of-type(1)":
        "EPIQ、Affiniti、CX30、CX50、Horizon DEXA、X-ray systems",
      ".certification-grid article:nth-child(2) .training-evidence dt:nth-of-type(2)": "现场工作",
      ".certification-grid article:nth-child(2) .training-evidence dd:nth-of-type(2)":
        "影像系统服务准备、安装支持和检查",
      ".certification-grid article:nth-child(2) .training-evidence dt:nth-of-type(3)": "证据",
      ".certification-grid article:nth-child(2) .training-evidence dd:nth-of-type(3)":
        "培训记录和服务笔记可在私下核验时提供",
      ".certification-grid article:nth-child(3) span": "2024",
      ".certification-grid article:nth-child(3) h3": "自动化与专项系统",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(1)": "设备范围",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(1)":
        "BD FIX100 和厂商专项服务准备",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(2)": "现场工作",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(2)":
        "自动化服务准备、流程意识和交接记录",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(3)": "证据",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(3)":
        "证书原件只在正式核验时提供",
      "#life .section-kicker": "职业节奏",
      "#life-title": "个人内容保持简短，并贴近工作习惯。",
      ".life-section .story-content > p:not(.section-kicker)":
        "个人内容刻意保持简短：展示学习节奏和组织习惯，但不抢走工程履历的主线。",
      "#capabilities .section-kicker": "能力矩阵",
      "#capabilities-title": "我能在服务环境里承担什么。",
      "#capabilities .section-intro":
        "招聘方可以先看这一部分，快速判断我在设备服务、测试验证、记录、沟通、工具和入职前筛选材料方面是否匹配。",
      ".capability-row article:nth-child(1) span": "服务",
      ".capability-row article:nth-child(1) h3": "现场和 workshop 工作",
      ".capability-row article:nth-child(1) p":
        "预防性维护、故障排查、维修、安装支持、bench service，以及服务 close-out。",
      ".capability-row article:nth-child(2) span": "测试",
      ".capability-row article:nth-child(2) h3": "可复查的验证证据",
      ".capability-row article:nth-child(2) p":
        "按流程做 functional test、performance check，保持 electrical safety awareness，并留下后续能复查的测试记录。",
      ".capability-row article:nth-child(3) span": "设备",
      ".capability-row article:nth-child(3) h3": "医疗设备范围",
      ".capability-row article:nth-child(3) p":
        "接触 ventilation、patient monitoring、ultrasound、DEXA、pharmacy automation 和通用 biomedical equipment。",
      ".capability-row article:nth-child(4) span": "记录",
      ".capability-row article:nth-child(4) h3": "可追踪的服务记录",
      ".capability-row article:nth-child(4) p":
        "处理 work orders、service reports、equipment history、serial details、action logs 和简洁的 follow-up notes。",
      ".capability-row article:nth-child(5) span": "沟通",
      ".capability-row article:nth-child(5) h3": "清楚交接",
      ".capability-row article:nth-child(5) p":
        "和临床用户、医院 biomedical team、vendor、内部工程师对齐现场信息、限制条件和下一步。",
      ".capability-row article:nth-child(6) span": "入职前筛选",
      ".capability-row article:nth-child(6) h3": "悉尼出行 + 私下核验证明",
      ".capability-row article:nth-child(6) p":
        "可支持悉尼现场出行，简历可下载，学历、培训、身份证明和工作权利材料可在正式流程中提供。",
      "#contact .section-kicker": "联系",
      "#contact-title": "可以在这里联系我。",
      ".contact-inner > p:not(.section-kicker)":
        "如果有 biomedical / medical device field service 相关机会，可以用下面的行动入口联系我。中文和英文都可以。",
      ".contact-actions-title": "可以继续聊医疗设备现场服务机会。",
      ".contact-actions-summary":
        "适合需要悉尼现场出行、医疗设备服务、验证记录和中英文沟通的岗位。",
      ".contact-email-action": "发邮件联系我",
      ".contact-copy-email-action": "复制邮箱",
      ".contact-resume-link": "PDF 简历",
      ".contact-docx-link": "DOCX 简历",
      ".contact-resume-format-note": "PDF 适合快速查看；DOCX 适合 ATS 或招聘系统。",
      ".contact-intake div:nth-child(1) strong": "岗位范围",
      ".contact-intake div:nth-child(1) span":
        "说明设备类型、服务环境、出行范围和开始时间。",
      ".contact-intake div:nth-child(2) strong": "需要核验",
      ".contact-intake div:nth-child(2) span":
        "需要时可私下索取学历、培训、身份、工作权利或推荐人核验材料。",
      ".contact-intake div:nth-child(3) strong": "下一步",
      ".contact-intake div:nth-child(3) span":
        "发送面试时间、岗位说明或技术筛选形式。",
      ".contact-response-strip div:nth-child(1) strong": "回复预期",
      ".contact-response-strip div:nth-child(1) span":
        "岗位匹配、面试或材料请求，我会尽量在 1 个工作日内回复。",
      ".contact-response-strip div:nth-child(2) strong": "最佳格式",
      ".contact-response-strip div:nth-child(2) span":
        "邮件里请附岗位说明、设备范围、地点和合适的通话时间。",
      ".contact-response-strip div:nth-child(3) strong": "材料顺序",
      ".contact-response-strip div:nth-child(3) span":
        "先看简历；敏感核验材料只在岗位匹配和正式流程清楚后提供。",
      ".contact-actions-note strong": "直接邮箱",
      ".contact-email-text": "yangyihang96@gmail.com",
      ".contact-privacy-note":
        "学历、培训证书和入职前筛选材料只在正式需要时私下提供。",
      ".contact-call-note": "电话或视频沟通可在邮件确认后安排。",
    },
    html: {
      ".life-notes p:nth-child(1)":
        "<strong>结构化安排</strong> 把工作、通勤、学习和个人事务安排清楚，让现场服务日保持可靠。",
      ".life-notes p:nth-child(2)":
        "<strong>持续学习</strong> 关注医疗技术、工程工具、AI 工具和能改善服务工作的实际做法。",
      ".life-notes p:nth-child(3)":
        "<strong>记录纪律</strong> 把零散信息整理成可复用的笔记、清单和交接结构。",
    },
    attrs: {
      ".brand": { "aria-label": "返回页面顶部" },
      ".site-nav": { "aria-label": "主导航" },
      ".language-switch": { "aria-label": "语言切换" },
      ".hero-meta": { "aria-label": "快速资料" },
      ".hero-profile-card": { "aria-label": "个人资料快照" },
      ".profile-status-strip": { "aria-label": "资料更新时间和证明边界" },
      ".fit-grid": { "aria-label": "招聘方快速匹配" },
      ".experience-summary-grid": { "aria-label": "工作经历摘要" },
      ".nav-email-link": { "aria-label": "发邮件联系 Yihang Henry Yang", href: recruiterEmailHrefZh },
      ".nav-resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".resume-docx-link": { "aria-label": "下载 Henry Yang DOCX 简历" },
      ".email-action": { "aria-label": "发邮件联系 Yihang Henry Yang", href: recruiterEmailHrefZh },
      ".github-action": { "aria-label": "打开 Yihang Yang GitHub 主页" },
      ".contact-email-action": { "aria-label": "发邮件联系 Yihang Henry Yang", href: recruiterEmailHrefZh },
      ".contact-copy-email-action": { "aria-label": "复制 Yihang Henry Yang 邮箱地址" },
      ".contact-resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".contact-docx-link": { "aria-label": "下载 Henry Yang DOCX 简历" },
      ".contact-actions": { "aria-label": "招聘方联系操作" },
      ".contact-intake": { "aria-label": "招聘方邮件清单" },
      ".contact-response-strip": { "aria-label": "招聘方回复预期" },
      ".hero-action-path": { "aria-label": "招聘方行动路径" },
      ".fit-verdict": { "aria-label": "招聘方岗位匹配判断" },
      ".proof-boundary": { "aria-label": "公开与私下核验证据边界" },
      ".proof-grid": { "aria-label": "招聘方证据核对清单" },
      ".brief-grid": { "aria-label": "招聘方筛选快照" },
      ".experience-evidence": { "aria-label": "当前现场服务证据" },
      ".experience-outcome": { "aria-label": "当前岗位服务结果摘要" },
      ".case-grid article:nth-child(1) .case-outcome": { "aria-label": "公开安全的案例结果" },
      ".case-grid article:nth-child(2) .case-outcome": { "aria-label": "公开安全的案例结果" },
      ".case-grid article:nth-child(3) .case-outcome": { "aria-label": "公开安全的案例结果" },
      ".study-proof-strip": { "aria-label": "学历和工作权利证明链路" },
      ".certification-grid article:nth-child(1) .training-evidence": { "aria-label": "培训证书能力映射" },
      ".certification-grid article:nth-child(2) .training-evidence": { "aria-label": "培训证书能力映射" },
      ".certification-grid article:nth-child(3) .training-evidence": { "aria-label": "培训证书能力映射" },
    },
  },
};

const languageButtons = Array.from(document.querySelectorAll("[data-language-option]"));
const emailCopyButtons = Array.from(document.querySelectorAll("[data-copy-email]"));
const descriptionMeta = document.querySelector('meta[name="description"]');

const setStoredLanguage = (language) => {
  try {
    window.localStorage.setItem("siteLanguage", language);
  } catch {
    // Local storage can be unavailable in restricted preview contexts.
  }
};

const getStoredLanguage = () => {
  try {
    return window.localStorage.getItem("siteLanguage");
  } catch {
    return null;
  }
};

const getInitialLanguage = () => {
  const storedLanguage = getStoredLanguage();
  return translations[storedLanguage] ? storedLanguage : "en";
};

const applyLanguage = (language, shouldStore = true) => {
  const selected = translations[language] ? language : "en";
  const dictionary = translations[selected];

  document.documentElement.lang = dictionary.lang;
  document.body.dataset.language = selected;
  document.title = dictionary.title;

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", dictionary.description);
  }

  Object.entries(dictionary.text).forEach(([selector, value]) => {
    const target = document.querySelector(selector);
    if (target) {
      target.textContent = value;
    }
  });

  Object.entries(dictionary.html).forEach(([selector, value]) => {
    const target = document.querySelector(selector);
    if (target) {
      target.innerHTML = value;
    }
  });

  Object.entries(dictionary.attrs || {}).forEach(([selector, attributes]) => {
    const target = document.querySelector(selector);
    if (target) {
      Object.entries(attributes).forEach(([name, value]) => {
        target.setAttribute(name, value);
      });
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageOption === selected;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  emailCopyButtons.forEach((button) => {
    button.classList.remove("is-copied", "is-copy-failed");
  });

  if (shouldStore) {
    setStoredLanguage(selected);
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption);
  });
});

const getActiveDictionary = () => {
  const language = document.body.dataset.language || "en";
  return translations[language] || translations.en;
};

const setCopyButtonState = (button, state) => {
  const copyLabels = getActiveDictionary().copyEmail || translations.en.copyEmail;
  button.textContent = copyLabels[state] || copyLabels.default;
  button.classList.toggle("is-copied", state === "copied");
  button.classList.toggle("is-copy-failed", state === "failed");

  window.clearTimeout(Number(button.dataset.copyResetTimer));
  const resetTimer = window.setTimeout(() => {
    const resetLabels = getActiveDictionary().copyEmail || translations.en.copyEmail;
    button.textContent = resetLabels.default;
    button.classList.remove("is-copied", "is-copy-failed");
    delete button.dataset.copyResetTimer;
  }, 1800);
  button.dataset.copyResetTimer = String(resetTimer);
};

const copyTextToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();

  const didCopy = document.execCommand("copy");
  textarea.remove();

  if (!didCopy) {
    throw new Error("Copy command failed");
  }
};

emailCopyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.copyEmail;
    if (!email) {
      return;
    }

    try {
      await copyTextToClipboard(email);
      setCopyButtonState(button, "copied");
    } catch {
      setCopyButtonState(button, "failed");
    }
  });
});

applyLanguage(getInitialLanguage(), false);

const header = document.querySelector("[data-site-header]");
const updateHeader = () => {
  if (!header) {
    return;
  }
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let activeHashLock = null;
let activeHashLockUntil = 0;

const setActiveNavLink = (hash) => {
  if (!hash) {
    return;
  }

  navLinks.forEach((navLink) => {
    navLink.classList.toggle("is-active", navLink.getAttribute("href") === hash);
  });
};

const lockActiveHash = (hash) => {
  if (!hash) {
    return;
  }

  activeHashLock = hash;
  activeHashLockUntil = window.performance.now() + 1800;
};

const shouldKeepHashActive = (hash) => {
  const target = hash ? document.querySelector(hash) : null;
  if (!target) {
    return false;
  }

  const rect = target.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
};

const revealItems = Array.from(document.querySelectorAll(".reveal"));

const revealTarget = (target) => {
  if (target && target.classList.contains("reveal")) {
    target.classList.add("is-visible");
  }
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const hash = link.getAttribute("href");
    revealTarget(document.querySelector(hash));
    lockActiveHash(hash);
    setActiveNavLink(hash);
  });
});

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      const currentHash = window.location.hash;
      const isHashLocked =
        currentHash &&
        activeHashLock === currentHash &&
        window.performance.now() < activeHashLockUntil;

      if (isHashLocked || shouldKeepHashActive(currentHash)) {
        setActiveNavLink(currentHash);
        return;
      }

      setActiveNavLink(`#${visible.target.id}`);
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

if (window.location.hash) {
  revealTarget(document.querySelector(window.location.hash));
  lockActiveHash(window.location.hash);
  setActiveNavLink(window.location.hash);
}

window.addEventListener("hashchange", () => {
  revealTarget(document.querySelector(window.location.hash));
  lockActiveHash(window.location.hash);
  setActiveNavLink(window.location.hash);
});
