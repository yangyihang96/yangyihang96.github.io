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
    "Formal checklist if needed: ",
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
    "正式流程所需清单：",
    "",
    "谢谢。",
  ].join("\r\n")
)}`;

const translations = {
  en: {
    lang: "en",
    title: "Yihang (Henry) Yang | Biomedical Field Service Engineer in Sydney",
    description:
      "Sydney-based Biomedical Field Service Engineer with nearly three years of field and workshop service experience across hospital and pharmacy medical equipment.",
    copyEmail: {
      default: "Copy Email",
      copied: "Copied",
      failed: "Copy failed",
    },
    text: {
      ".skip-link": "Skip to content",
      ".site-nav a:nth-child(1)": "Experience",
      ".site-nav a:nth-child(2)": "Scope",
      ".site-nav a:nth-child(3)": "Cases",
      ".site-nav a:nth-child(4)": "Education",
      ".site-nav a:nth-child(5)": "Contact",
      ".nav-email-link": "Email",
      ".nav-resume-link": "Resume PDF",
      ".eyebrow": "Yihang (Henry) Yang · Sydney",
      "#hero-title": "Biomedical Field Service Engineer | Sydney",
      ".hero-subtitle":
        "Nearly three years of full-time field and workshop service experience across hospital and pharmacy medical equipment - PM, fault diagnosis, repair, installation support, verification, and service documentation.",
      ".hero-meta div:nth-child(1) dt": "Experience",
      ".hero-meta div:nth-child(1) dd": "Nearly 3 years",
      ".hero-meta div:nth-child(2) dt": "Base",
      ".hero-meta div:nth-child(2) dd": "Sydney, NSW",
      ".hero-meta div:nth-child(3) dt": "Mobility",
      ".hero-meta div:nth-child(3) dd": "Driver licence + field travel",
      ".hero-meta div:nth-child(4) dt": "Work rights",
      ".hero-meta div:nth-child(4) dd": "Employer verification ready",
      ".hero-skill-tags li:nth-child(1)": "Ventilation",
      ".hero-skill-tags li:nth-child(2)": "Patient Monitoring",
      ".hero-skill-tags li:nth-child(3)": "Ultrasound",
      ".hero-skill-tags li:nth-child(4)": "DEXA",
      ".hero-skill-tags li:nth-child(5)": "Pharmacy Automation",
      ".hero-skill-tags li:nth-child(6)": "Simpro",
      ".hero-skill-tags li:nth-child(7)": "English / Mandarin",
      ".resume-link": "Download Resume",
      ".email-action": "Email Henry",
      ".linkedin-action": "LinkedIn",
      ".hero-action-path div:nth-child(1) strong": "Role match",
      ".hero-action-path div:nth-child(1) span": "Medical device field service",
      ".hero-action-path div:nth-child(2) strong": "Service work",
      ".hero-action-path div:nth-child(2) span": "PM / repair / verification",
      ".hero-action-path div:nth-child(3) strong": "Next step",
      ".hero-action-path div:nth-child(3) span": "Email for role fit",
      ".hero-profile-card .hero-card-kicker": "Current profile",
      ".hero-profile-card strong": "Biomedical service, records, and handover",
      ".hero-profile-card .hero-card-note":
        "Hands-on profile across preventive maintenance, troubleshooting, verification records, and service close-out.",
      ".profile-status-strip div:nth-child(1) strong": "Updated",
      ".profile-status-strip div:nth-child(1) span": "June 2026",
      ".profile-status-strip div:nth-child(2) strong": "Professional links",
      ".fit-strip .section-kicker": "Field Service Snapshot",
      "#fit-title": "Field-ready service profile for hospital and pharmacy equipment.",
      ".fit-strip .section-intro":
        "The strongest match is a biomedical or medical device field-service role that needs field travel, practical troubleshooting, verification records, and clear customer handover.",
      ".fit-grid article:nth-child(1) span": "Experience",
      ".fit-grid article:nth-child(1) strong": "Nearly 3 years field/workshop service",
      ".fit-grid article:nth-child(2) span": "Equipment",
      ".fit-grid article:nth-child(2) strong":
        "Ventilation, monitoring, ultrasound, DEXA, automation",
      ".fit-grid article:nth-child(3) span": "Mobility",
      ".fit-grid article:nth-child(3) strong": "Driver licence and Sydney field travel",
      ".fit-grid article:nth-child(4) span": "Records",
      ".fit-grid article:nth-child(4) strong": "Simpro, service reports, equipment history, handover",
      ".proof-grid article:nth-child(1) span": "Service",
      ".proof-grid article:nth-child(1) h3": "PM, repair, installation support",
      ".proof-grid article:nth-child(1) p":
        "Field and workshop service across hospital and pharmacy medical equipment.",
      ".proof-grid article:nth-child(2) span": "Verification",
      ".proof-grid article:nth-child(2) h3": "Functional and performance checks",
      ".proof-grid article:nth-child(2) p":
        "Service decisions are closed with test notes, performance evidence, or clear escalation status.",
      ".proof-grid article:nth-child(3) span": "Records",
      ".proof-grid article:nth-child(3) h3": "Simpro and service reports",
      ".proof-grid article:nth-child(3) p":
        "Work orders, service reports, equipment history, and customer updates stay aligned.",
      ".proof-grid article:nth-child(4) span": "Communication",
      ".proof-grid article:nth-child(4) h3": "English / Mandarin handover",
      ".proof-grid article:nth-child(4) p":
        "Clear updates for clinical users, biomedical teams, vendors, and internal engineers.",
      ".experience-section .section-kicker": "Work Experience",
      "#experience-title": "Field service and workshop support are the main selling points.",
      ".experience-section .section-intro":
        "The work history is organized around what matters for a service role: equipment range, service action, verification, records, and handover.",
      ".experience-summary > p":
        "Biomedical field service engineer with nearly three years of full-time experience across hospital and pharmacy medical equipment service, preventive maintenance, fault diagnosis, repair, installation support, verification, and documentation.",
      ".experience-summary-grid div:nth-child(1) strong": "Service loop",
      ".experience-summary-grid div:nth-child(1) span":
        "Prepare the device, complete field or workshop service, verify the result, document the work, and hand over the next-use status.",
      ".experience-summary-grid div:nth-child(2) strong": "Equipment range",
      ".experience-summary-grid div:nth-child(2) span":
        "Ventilation, patient monitoring, ultrasound, DEXA, pharmacy automation, X-ray support, and general biomedical equipment.",
      ".experience-summary-grid div:nth-child(3) strong": "Operational value",
      ".experience-summary-grid div:nth-child(3) span":
        "Repeat troubleshooting starts from aligned service notes, equipment history, and customer updates instead of memory alone.",
      ".experience-timeline article:nth-child(1) .experience-date": "Jul 2023 - Present",
      ".experience-timeline article:nth-child(1) h3":
        "Biomedical Engineer | Nova Biomedical Australia",
      ".experience-timeline article:nth-child(1) .experience-meta":
        "Australia-wide field service / workshop support",
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
        "Simpro work orders, service reports, equipment history, and customer updates aligned",
      ".experience-outcome dt:nth-of-type(4)": "Handover",
      ".experience-outcome dd:nth-of-type(4)":
        "Biomedical teams, clinical users, vendors, and internal engineers can see next-use status",
      ".experience-timeline article:nth-child(2) .experience-date": "Dec 2019 - Feb 2020",
      ".experience-timeline article:nth-child(2) h3":
        "Pharmacovigilance Department Assistant | Lundbeck Beijing",
      ".experience-timeline article:nth-child(2) .experience-meta": "Internship · Beijing, China",
      ".experience-timeline article:nth-child(2) li:nth-child(1)":
        "Supported adverse reaction record handling and drug-safety documentation for Lundbeck products listed in China.",
      ".experience-timeline article:nth-child(2) li:nth-child(2)":
        "Assisted documentation work related to regulated healthcare records and cross-functional communication.",
      "#capabilities .section-kicker": "Equipment & Service Scope",
      "#capabilities-title": "Where the service experience is strongest.",
      "#capabilities .section-intro":
        "This combines practical service work and selected training into equipment families, so the scope is easier to judge than a generic skills list.",
      ".capability-row article:nth-child(1) span": "Respiratory",
      ".capability-row article:nth-child(1) h3": "Respiratory service",
      ".capability-row article:nth-child(1) p":
        "V60, V60 Plus, Trilogy, functional checks, planned service, and troubleshooting preparation.",
      ".capability-row article:nth-child(1) .scope-level": "Hands-on service exposure",
      ".capability-row article:nth-child(2) span": "Monitoring",
      ".capability-row article:nth-child(2) h3": "Patient monitoring",
      ".capability-row article:nth-child(2) p":
        "Avalon, Efficia, HeartStart and related monitoring-service preparation, checks, and handover notes.",
      ".capability-row article:nth-child(2) .scope-level": "Training completed",
      ".capability-row article:nth-child(3) span": "Imaging",
      ".capability-row article:nth-child(3) h3": "Ultrasound systems",
      ".capability-row article:nth-child(3) p":
        "EPIQ, Affiniti, CX30, CX50 support exposure across service preparation, installation support, and checks.",
      ".capability-row article:nth-child(3) .scope-level": "Installation support",
      ".capability-row article:nth-child(4) span": "Diagnostics",
      ".capability-row article:nth-child(4) h3": "DEXA and X-ray support",
      ".capability-row article:nth-child(4) p":
        "Horizon DEXA, X-ray installation and service training, with performance and service-record awareness.",
      ".capability-row article:nth-child(4) .scope-level": "Training completed",
      ".capability-row article:nth-child(5) span": "Automation",
      ".capability-row article:nth-child(5) h3": "Pharmacy automation",
      ".capability-row article:nth-child(5) p":
        "BD FIX100, Pyxis, ROWA and specialty workflow support where service notes and handover are critical.",
      ".capability-row article:nth-child(5) .scope-level": "Documentation / handover exposure",
      ".capability-row article:nth-child(6) span": "Records",
      ".capability-row article:nth-child(6) h3": "Service records and handover",
      ".capability-row article:nth-child(6) p":
        "Simpro work orders, service reports, serial details, equipment history, customer updates, and close-out notes.",
      ".capability-row article:nth-child(6) .scope-level": "Hands-on service exposure",
      ".target-roles .section-kicker": "Target Roles",
      "#target-roles-title": "The strongest fit is practical medical device service.",
      ".target-role-list li:nth-child(1)": "Biomedical Field Service Engineer",
      ".target-role-list li:nth-child(2)": "Medical Device Service Engineer",
      ".target-role-list li:nth-child(3)": "Clinical Engineering Service Support",
      ".target-role-list li:nth-child(4)": "Biomedical Technician / Service Technician",
      "#case-notes .section-kicker": "De-identified Case Notes",
      "#case-title": "Service examples should show judgement, not expose sensitive records.",
      "#case-notes .section-intro":
        "These cases are de-identified; formal certificates, customer-specific records, and sensitive documents are handled through an authorized hiring process.",
      ".case-grid article:nth-child(1) span": "01 / Preventive maintenance",
      ".case-grid article:nth-child(1) h3": "Routine maintenance with a usable close-out",
      ".case-grid article:nth-child(1) p":
        "Scheduled service is handled by confirming condition, history, site limits, procedure steps, and performance evidence before handover.",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(1)": "Scenario",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(1)":
        "Scheduled service with site constraints",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(2)": "Action",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(2)":
        "Condition check, procedure steps, calibration or performance evidence",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(3)": "Verification",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(3)":
        "Functional check and service record close-out",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(4)": "Handover",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(4)":
        "Clear next-use status for biomedical or site teams",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(5)": "Outcome",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(5)":
        "Returned equipment with a clear next-use status and service close-out trail",
      ".case-grid article:nth-child(2) span": "02 / Fault diagnosis",
      ".case-grid article:nth-child(2) h3": "Anonymised troubleshooting example",
      ".case-grid article:nth-child(2) p":
        "A user-reported intermittent fault was reviewed against device condition, service history, and reproducible symptoms. I followed manual-led checks, documented measurement notes, confirmed post-repair function, and handed over the next-use status with a clear service trail.",
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
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(5)": "Outcome",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(5)":
        "Separated use condition, repair history, reproducible symptoms, and manual-led checks before returning the device with post-repair verification",
      ".case-grid article:nth-child(3) span": "03 / Documentation",
      ".case-grid article:nth-child(3) h3": "Making service information reusable",
      ".case-grid article:nth-child(3) p":
        "Work orders, service actions, equipment history, and customer updates are kept aligned so the next troubleshooting pass starts from evidence.",
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
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(5)": "Outcome",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(5)":
        "Helped make repeat troubleshooting faster by keeping service actions, test notes, equipment history, and customer updates aligned in Simpro",
      "#study .section-kicker": "Education",
      "#study-title": "Biomedical engineering background with practical service focus.",
      "#study .section-intro":
        "The academic story stays short because the main selling point is now field service experience.",
      ".study-grid article:nth-child(1) span": "Awarded Jun 2024",
      ".study-grid article:nth-child(1) h3": "Master of Philosophy",
      ".study-grid article:nth-child(1) p:nth-of-type(1)": "The University of Sydney",
      ".study-grid article:nth-child(1) p:nth-of-type(2)":
        "Biomedical engineering research, experimental planning, validation evidence, and technical documentation.",
      ".study-grid article:nth-child(2) span": "2017 - 2020",
      ".study-grid article:nth-child(2) h3": "Bachelor of Biomedical Engineering",
      ".study-grid article:nth-child(2) p:nth-of-type(1)": "The University of Sydney",
      ".study-grid article:nth-child(2) p:nth-of-type(2)":
        "Medical science, biomedical design, data analysis, electronics, and engineering design tools.",
      ".study-grid article:nth-child(3) span": "MPhil thesis",
      ".study-grid article:nth-child(3) h3":
        "Flexible Electrodes for Smart Bandages: Feasibility Exploration",
      ".study-grid article:nth-child(3) p":
        "Wearable medical-device feasibility work using electrode geometry, silver ink coating, impedance measurement, and manufacturability trade-offs.",
      "#contact .section-kicker": "Contact",
      "#contact-title": "Ready for biomedical field service conversations.",
      ".contact-inner > p:not(.section-kicker)":
        "For biomedical or medical device field service opportunities in Sydney, email is the best first step. English and Mandarin are both fine.",
      ".contact-actions-title": "Email Henry with the role scope.",
      ".contact-actions-summary":
        "Useful details: device type, service setting, travel area, start timing, and formal checklist if the process needs one.",
      ".contact-email-action": "Email Henry",
      ".contact-copy-email-action": "Copy Email",
      ".contact-resume-link": "Resume PDF",
      ".contact-docx-link": "Resume DOCX",
      ".contact-linkedin-link": "LinkedIn",
      ".contact-github-link": "GitHub",
      ".contact-secondary-links strong": "Professional links",
      ".contact-readiness div:nth-child(1) strong": "Availability",
      ".contact-readiness div:nth-child(1) span": "Upon discussion",
      ".contact-readiness div:nth-child(2) strong": "Driver licence",
      ".contact-readiness div:nth-child(2) span": "Sydney field travel ready",
      ".contact-readiness div:nth-child(3) strong": "Work rights",
      ".contact-readiness div:nth-child(3) span": "Employer verification ready",
      ".contact-readiness div:nth-child(4) strong": "Direct email",
      ".contact-email-text": "yangyihang96@gmail.com",
      "#life .section-kicker": "Professional Rhythm",
      "#life-title": "The personal note stays short and work-adjacent.",
      ".life-section .story-content > p:not(.section-kicker)":
        "Outside work, I keep this section deliberately brief: enough to show learning rhythm and organization habits without distracting from the engineering profile.",
    },
    html: {
      ".profile-status-strip div:nth-child(2) span":
        '<a href="https://au.linkedin.com/in/henry-yang-9644382bb" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://github.com/yangyihang96" target="_blank" rel="noopener">GitHub</a>',
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
      ".hero-skill-tags": { "aria-label": "Core equipment and service tags" },
      ".hero-profile-card": { "aria-label": "Profile snapshot" },
      ".profile-status-strip": { "aria-label": "Profile currency and professional links" },
      ".fit-grid": { "aria-label": "Recruiter quick match" },
      ".proof-grid": { "aria-label": "Recruiter proof points" },
      ".target-role-list": { "aria-label": "Target role titles" },
      ".experience-summary-grid": { "aria-label": "Work experience summary" },
      ".experience-evidence": { "aria-label": "Current field-service evidence" },
      ".experience-outcome": { "aria-label": "Current role service outcome summary" },
      ".case-grid article:nth-child(1) .case-outcome": { "aria-label": "De-identified case outcome" },
      ".case-grid article:nth-child(2) .case-outcome": { "aria-label": "De-identified case outcome" },
      ".case-grid article:nth-child(3) .case-outcome": { "aria-label": "De-identified case outcome" },
      ".contact-actions": { "aria-label": "Recruiter contact actions" },
      ".contact-readiness": { "aria-label": "Recruiter readiness details" },
      ".nav-email-link": { "aria-label": "Email Yihang Henry Yang", href: recruiterEmailHrefEn },
      ".nav-resume-link": { "aria-label": "Download Henry Yang resume PDF" },
      ".resume-link": { "aria-label": "Download Henry Yang resume as PDF" },
      ".email-action": { "aria-label": "Email Yihang Henry Yang", href: recruiterEmailHrefEn },
      ".linkedin-action": {
        "aria-label": "Open Henry Yang LinkedIn profile",
        href: "https://au.linkedin.com/in/henry-yang-9644382bb",
      },
      ".contact-email-action": { "aria-label": "Email Yihang Henry Yang", href: recruiterEmailHrefEn },
      ".contact-copy-email-action": { "aria-label": "Copy Yihang Henry Yang email address" },
      ".contact-resume-link": { "aria-label": "Download Henry Yang resume as PDF" },
      ".contact-docx-link": { "aria-label": "Download Henry Yang resume as DOCX" },
      ".contact-linkedin-link": { "aria-label": "Open Henry Yang LinkedIn profile" },
      ".contact-github-link": { "aria-label": "Open Yihang Yang GitHub profile" },
    },
  },
  zh: {
    lang: "zh-CN",
    title: "Yihang (Henry) Yang | 悉尼医疗设备现场服务工程师",
    description:
      "Yihang (Henry) Yang 常驻悉尼，拥有近三年医院和药房医疗设备现场及车间服务经验。",
    copyEmail: {
      default: "复制邮箱",
      copied: "已复制",
      failed: "复制失败",
    },
    text: {
      ".skip-link": "跳到主要内容",
      ".site-nav a:nth-child(1)": "经历",
      ".site-nav a:nth-child(2)": "范围",
      ".site-nav a:nth-child(3)": "案例",
      ".site-nav a:nth-child(4)": "教育",
      ".site-nav a:nth-child(5)": "联系",
      ".nav-email-link": "邮件",
      ".nav-resume-link": "PDF 简历",
      ".eyebrow": "Yihang (Henry) Yang · 悉尼",
      "#hero-title": "医疗设备现场服务工程师 | 悉尼",
      ".hero-subtitle":
        "近三年全职现场和车间服务经验，覆盖医院与药房医疗设备：预防性维护、故障诊断、维修、安装支持、验证测试和服务记录。",
      ".hero-meta div:nth-child(1) dt": "经验",
      ".hero-meta div:nth-child(1) dd": "近 3 年",
      ".hero-meta div:nth-child(2) dt": "地点",
      ".hero-meta div:nth-child(2) dd": "悉尼 NSW",
      ".hero-meta div:nth-child(3) dt": "出行",
      ".hero-meta div:nth-child(3) dd": "驾照 + 现场出行",
      ".hero-meta div:nth-child(4) dt": "工作权利",
      ".hero-meta div:nth-child(4) dd": "雇主核验材料已准备",
      ".hero-skill-tags li:nth-child(1)": "呼吸设备",
      ".hero-skill-tags li:nth-child(2)": "患者监护",
      ".hero-skill-tags li:nth-child(3)": "超声",
      ".hero-skill-tags li:nth-child(4)": "DEXA",
      ".hero-skill-tags li:nth-child(5)": "药房自动化",
      ".hero-skill-tags li:nth-child(6)": "Simpro",
      ".hero-skill-tags li:nth-child(7)": "英文 / 中文",
      ".resume-link": "下载简历",
      ".email-action": "发邮件给 Henry",
      ".linkedin-action": "LinkedIn",
      ".hero-action-path div:nth-child(1) strong": "岗位匹配",
      ".hero-action-path div:nth-child(1) span": "医疗设备现场服务",
      ".hero-action-path div:nth-child(2) strong": "服务内容",
      ".hero-action-path div:nth-child(2) span": "维护 / 维修 / 验证",
      ".hero-action-path div:nth-child(3) strong": "下一步",
      ".hero-action-path div:nth-child(3) span": "邮件确认岗位匹配",
      ".hero-profile-card .hero-card-kicker": "当前定位",
      ".hero-profile-card strong": "医疗设备服务、记录和交接",
      ".hero-profile-card .hero-card-note":
        "经验重点是预防性维护、故障排查、验证记录和服务闭环。",
      ".profile-status-strip div:nth-child(1) strong": "更新",
      ".profile-status-strip div:nth-child(1) span": "2026 年 6 月",
      ".profile-status-strip div:nth-child(2) strong": "职业链接",
      ".fit-strip .section-kicker": "现场服务快照",
      "#fit-title": "面向医院和药房设备的现场服务画像。",
      ".fit-strip .section-intro":
        "最匹配的是需要现场出行、实际故障排查、验证记录和清楚客户交接的医疗设备现场服务岗位。",
      ".fit-grid article:nth-child(1) span": "经验",
      ".fit-grid article:nth-child(1) strong": "近 3 年现场 / 车间服务",
      ".fit-grid article:nth-child(2) span": "设备",
      ".fit-grid article:nth-child(2) strong": "呼吸、监护、超声、DEXA、自动化",
      ".fit-grid article:nth-child(3) span": "出行",
      ".fit-grid article:nth-child(3) strong": "驾照和悉尼现场出行",
      ".fit-grid article:nth-child(4) span": "记录",
      ".fit-grid article:nth-child(4) strong": "Simpro、服务报告、设备历史、交接",
      ".proof-grid article:nth-child(1) span": "服务",
      ".proof-grid article:nth-child(1) h3": "预防性维护、维修、安装支持",
      ".proof-grid article:nth-child(1) p":
        "服务经验覆盖医院和药房医疗设备的现场与车间工作。",
      ".proof-grid article:nth-child(2) span": "验证",
      ".proof-grid article:nth-child(2) h3": "功能与性能检查",
      ".proof-grid article:nth-child(2) p":
        "服务结论以测试记录、性能证据或明确升级状态收尾。",
      ".proof-grid article:nth-child(3) span": "记录",
      ".proof-grid article:nth-child(3) h3": "Simpro 和服务报告",
      ".proof-grid article:nth-child(3) p":
        "工单、服务报告、设备历史和客户更新保持一致。",
      ".proof-grid article:nth-child(4) span": "沟通",
      ".proof-grid article:nth-child(4) h3": "中英文交接",
      ".proof-grid article:nth-child(4) p":
        "面向临床用户、医院工程团队、厂商和内部工程师给出清楚更新。",
      ".experience-section .section-kicker": "工作经历",
      "#experience-title": "现场服务和车间支持是最核心卖点。",
      ".experience-section .section-intro":
        "经历按服务岗位最关心的内容组织：设备范围、服务动作、验证、记录和交接。",
      ".experience-summary > p":
        "医疗设备现场服务工程师，拥有近三年全职经验，覆盖医院和药房医疗设备服务、预防性维护、故障诊断、维修、安装支持、验证测试和文档记录。",
      ".experience-summary-grid div:nth-child(1) strong": "服务闭环",
      ".experience-summary-grid div:nth-child(1) span":
        "准备设备，完成现场或车间服务，验证结果，记录工作，并交接下一次使用状态。",
      ".experience-summary-grid div:nth-child(2) strong": "设备范围",
      ".experience-summary-grid div:nth-child(2) span":
        "呼吸设备、患者监护、超声、DEXA、药房自动化、X-ray 支持和通用医疗设备。",
      ".experience-summary-grid div:nth-child(3) strong": "运营价值",
      ".experience-summary-grid div:nth-child(3) span":
        "后续排查从对齐过的服务记录、设备历史和客户更新开始，而不是只靠记忆。",
      ".experience-timeline article:nth-child(1) .experience-date": "2023 年 7 月 - 至今",
      ".experience-timeline article:nth-child(1) h3":
        "Biomedical Engineer | Nova Biomedical Australia",
      ".experience-timeline article:nth-child(1) .experience-meta":
        "澳大利亚范围现场服务 / 车间支持",
      ".experience-evidence div:nth-child(1) strong": "设备",
      ".experience-evidence div:nth-child(1) span": "呼吸 / 监护 / 超声 / DEXA",
      ".experience-evidence div:nth-child(2) strong": "服务动作",
      ".experience-evidence div:nth-child(2) span": "PM / 维修 / 安装 / 验证",
      ".experience-evidence div:nth-child(3) strong": "记录",
      ".experience-evidence div:nth-child(3) span": "Simpro / 服务报告 / 设备历史",
      ".experience-evidence div:nth-child(4) strong": "服务场景",
      ".experience-evidence div:nth-child(4) span": "医院 / 药房 / 车间支持",
      ".experience-outcome dt:nth-of-type(1)": "服务环境",
      ".experience-outcome dd:nth-of-type(1)": "医院、药房、车间和现场支持环境",
      ".experience-outcome dt:nth-of-type(2)": "验证结果",
      ".experience-outcome dd:nth-of-type(2)":
        "设备以功能检查、性能证据或明确升级状态收尾",
      ".experience-outcome dt:nth-of-type(3)": "记录链路",
      ".experience-outcome dd:nth-of-type(3)":
        "Simpro 工单、服务报告、设备历史和客户更新保持一致",
      ".experience-outcome dt:nth-of-type(4)": "交接",
      ".experience-outcome dd:nth-of-type(4)":
        "医院工程团队、临床用户、厂商和内部工程师能看到下一次使用状态",
      ".experience-timeline article:nth-child(2) .experience-date": "2019 年 12 月 - 2020 年 2 月",
      ".experience-timeline article:nth-child(2) h3": "药物警戒部门助理 | Lundbeck Beijing",
      ".experience-timeline article:nth-child(2) .experience-meta": "实习 · 中国北京",
      ".experience-timeline article:nth-child(2) li:nth-child(1)":
        "支持 Lundbeck 在中国上市产品的不良反应记录处理和药物安全文档工作。",
      ".experience-timeline article:nth-child(2) li:nth-child(2)":
        "参与受监管医疗记录相关文档整理，接触跨部门沟通和合规记录边界。",
      "#capabilities .section-kicker": "设备与服务范围",
      "#capabilities-title": "服务经验最强的几个方向。",
      "#capabilities .section-intro":
        "这里把实际服务经验和培训记录合并到设备类别里，比单纯技能清单更容易判断匹配度。",
      ".capability-row article:nth-child(1) span": "呼吸",
      ".capability-row article:nth-child(1) h3": "呼吸设备服务",
      ".capability-row article:nth-child(1) p":
        "V60、V60 Plus、Trilogy、功能检查、计划性服务和故障排查准备。",
      ".capability-row article:nth-child(1) .scope-level": "实际服务接触",
      ".capability-row article:nth-child(2) span": "监护",
      ".capability-row article:nth-child(2) h3": "患者监护",
      ".capability-row article:nth-child(2) p":
        "Avalon、Efficia、HeartStart 相关监护设备服务准备、检查和交接记录。",
      ".capability-row article:nth-child(2) .scope-level": "培训已完成",
      ".capability-row article:nth-child(3) span": "影像",
      ".capability-row article:nth-child(3) h3": "超声系统",
      ".capability-row article:nth-child(3) p":
        "EPIQ、Affiniti、CX30、CX50 的服务准备、安装支持和检查接触。",
      ".capability-row article:nth-child(3) .scope-level": "安装支持",
      ".capability-row article:nth-child(4) span": "诊断",
      ".capability-row article:nth-child(4) h3": "DEXA 和 X-ray 支持",
      ".capability-row article:nth-child(4) p":
        "Horizon DEXA、X-ray 安装和服务培训，关注性能与服务记录。",
      ".capability-row article:nth-child(4) .scope-level": "培训已完成",
      ".capability-row article:nth-child(5) span": "自动化",
      ".capability-row article:nth-child(5) h3": "药房自动化",
      ".capability-row article:nth-child(5) p":
        "BD FIX100、Pyxis、ROWA 和专项工作流支持，服务记录和交接很关键。",
      ".capability-row article:nth-child(5) .scope-level": "记录 / 交接接触",
      ".capability-row article:nth-child(6) span": "记录",
      ".capability-row article:nth-child(6) h3": "服务记录和交接",
      ".capability-row article:nth-child(6) p":
        "Simpro 工单、服务报告、序列信息、设备历史、客户更新和闭环说明。",
      ".capability-row article:nth-child(6) .scope-level": "实际服务接触",
      ".target-roles .section-kicker": "目标岗位",
      "#target-roles-title": "最匹配的是实际医疗设备服务岗位。",
      ".target-role-list li:nth-child(1)": "Biomedical Field Service Engineer",
      ".target-role-list li:nth-child(2)": "Medical Device Service Engineer",
      ".target-role-list li:nth-child(3)": "Clinical Engineering Service Support",
      ".target-role-list li:nth-child(4)": "Biomedical Technician / Service Technician",
      "#case-notes .section-kicker": "匿名服务案例",
      "#case-title": "服务案例应该展示判断方式，而不是暴露敏感记录。",
      "#case-notes .section-intro":
        "这里展示的是匿名服务案例。正式证书、客户相关记录和敏感文件只会在授权招聘流程中提供。",
      ".case-grid article:nth-child(1) span": "01 / 预防性维护",
      ".case-grid article:nth-child(1) h3": "例行维护也要有可交接的收尾",
      ".case-grid article:nth-child(1) p":
        "计划性服务会先确认设备状态、历史、现场限制、流程步骤和性能证据，再完成交接。",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(1)": "场景",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(1)": "有现场限制的计划性服务",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(2)": "动作",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(2)":
        "状态检查、流程步骤、校准或性能证据",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(3)": "验证",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(3)": "功能检查和服务记录闭环",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(4)": "交接",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(4)":
        "给医院工程团队或现场团队明确下一次使用状态",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(5)": "结果",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(5)":
        "设备带着明确下一次使用状态和服务闭环记录返回",
      ".case-grid article:nth-child(2) span": "02 / 故障诊断",
      ".case-grid article:nth-child(2) h3": "匿名故障排查案例",
      ".case-grid article:nth-child(2) p":
        "对用户反馈的间歇性故障，先结合设备状态、服务历史和可复现现象判断，再按手册检查，记录测量结果，确认维修后功能，并用清楚的服务轨迹交接下一次使用状态。",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(1)": "场景",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(1)": "带维修历史的用户反馈故障",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(2)": "动作",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(2)":
        "现象复核、复现路径和手册引导检查",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(3)": "验证",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(3)": "测量记录和维修后确认",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(4)": "交接",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(4)": "给下一次服务决策可追踪的判断",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(5)": "结果",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(5)":
        "区分使用条件、维修历史、可复现现象和手册检查后，再用维修后验证交回设备",
      ".case-grid article:nth-child(3) span": "03 / 文档记录",
      ".case-grid article:nth-child(3) h3": "让服务信息可以被下一次复用",
      ".case-grid article:nth-child(3) p":
        "工单、处理动作、设备历史和客户更新保持一致，下一次排查可以从证据开始。",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(1)": "场景",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(1)": "后续排查需要复用的服务轨迹",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(2)": "动作",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(2)":
        "对齐序列信息、工单、服务报告和处理动作",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(3)": "验证",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(3)": "交叉检查设备历史和客户更新",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(4)": "交接",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(4)": "给医院工程团队和内部工程师清楚记录",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(5)": "结果",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(5)":
        "通过在 Simpro 中对齐服务动作、测试记录、设备历史和客户更新，让重复排查更快进入有效信息",
      "#study .section-kicker": "教育",
      "#study-title": "生物医学工程背景，服务岗位导向。",
      "#study .section-intro": "学历部分保持简洁，因为现在最核心的卖点是现场服务经验。",
      ".study-grid article:nth-child(1) span": "2024 年 6 月授予",
      ".study-grid article:nth-child(1) h3": "Master of Philosophy",
      ".study-grid article:nth-child(1) p:nth-of-type(1)": "The University of Sydney",
      ".study-grid article:nth-child(1) p:nth-of-type(2)":
        "生物医学工程研究、实验计划、验证证据和技术文档。",
      ".study-grid article:nth-child(2) span": "2017 - 2020",
      ".study-grid article:nth-child(2) h3": "Bachelor of Biomedical Engineering",
      ".study-grid article:nth-child(2) p:nth-of-type(1)": "The University of Sydney",
      ".study-grid article:nth-child(2) p:nth-of-type(2)":
        "医学科学、生物医学设计、数据分析、电子学和工程设计工具。",
      ".study-grid article:nth-child(3) span": "MPhil 论文",
      ".study-grid article:nth-child(3) h3":
        "Flexible Electrodes for Smart Bandages: Feasibility Exploration",
      ".study-grid article:nth-child(3) p":
        "围绕可穿戴医疗设备可行性，处理柔性电极几何、银墨涂层、阻抗测量和可制造性权衡。",
      "#contact .section-kicker": "联系",
      "#contact-title": "可以继续聊医疗设备现场服务机会。",
      ".contact-inner > p:not(.section-kicker)":
        "如果是悉尼医疗设备现场服务相关岗位，邮件是最合适的第一步；中文或英文都可以。",
      ".contact-actions-title": "请把岗位范围发给 Henry。",
      ".contact-actions-summary":
        "有用信息包括设备类型、服务环境、出行范围、开始时间，以及正式流程需要的清单。",
      ".contact-email-action": "发邮件给 Henry",
      ".contact-copy-email-action": "复制邮箱",
      ".contact-resume-link": "PDF 简历",
      ".contact-docx-link": "DOCX 简历",
      ".contact-linkedin-link": "LinkedIn",
      ".contact-github-link": "GitHub",
      ".contact-secondary-links strong": "职业链接",
      ".contact-readiness div:nth-child(1) strong": "可开始时间",
      ".contact-readiness div:nth-child(1) span": "可沟通",
      ".contact-readiness div:nth-child(2) strong": "驾照",
      ".contact-readiness div:nth-child(2) span": "可支持悉尼现场出行",
      ".contact-readiness div:nth-child(3) strong": "工作权利",
      ".contact-readiness div:nth-child(3) span": "雇主核验材料已准备",
      ".contact-readiness div:nth-child(4) strong": "直接邮箱",
      ".contact-email-text": "yangyihang96@gmail.com",
      "#life .section-kicker": "职业节奏",
      "#life-title": "个人内容保持简短，并贴近工作习惯。",
      ".life-section .story-content > p:not(.section-kicker)":
        "个人内容刻意保持简短：展示学习节奏和组织习惯，但不抢走工程履历的主线。",
    },
    html: {
      ".profile-status-strip div:nth-child(2) span":
        '<a href="https://au.linkedin.com/in/henry-yang-9644382bb" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://github.com/yangyihang96" target="_blank" rel="noopener">GitHub</a>',
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
      ".hero-skill-tags": { "aria-label": "核心设备和服务标签" },
      ".hero-profile-card": { "aria-label": "个人资料快照" },
      ".profile-status-strip": { "aria-label": "资料更新时间和职业链接" },
      ".fit-grid": { "aria-label": "招聘方快速匹配" },
      ".proof-grid": { "aria-label": "招聘方证据点" },
      ".target-role-list": { "aria-label": "目标岗位名称" },
      ".experience-summary-grid": { "aria-label": "工作经历摘要" },
      ".experience-evidence": { "aria-label": "当前现场服务证据" },
      ".experience-outcome": { "aria-label": "当前岗位服务结果摘要" },
      ".case-grid article:nth-child(1) .case-outcome": { "aria-label": "匿名案例结果" },
      ".case-grid article:nth-child(2) .case-outcome": { "aria-label": "匿名案例结果" },
      ".case-grid article:nth-child(3) .case-outcome": { "aria-label": "匿名案例结果" },
      ".contact-actions": { "aria-label": "招聘方联系操作" },
      ".contact-readiness": { "aria-label": "招聘方准备信息" },
      ".nav-email-link": { "aria-label": "发邮件联系 Yihang Henry Yang", href: recruiterEmailHrefZh },
      ".nav-resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".email-action": { "aria-label": "发邮件联系 Yihang Henry Yang", href: recruiterEmailHrefZh },
      ".linkedin-action": {
        "aria-label": "打开 Henry Yang LinkedIn 主页",
        href: "https://au.linkedin.com/in/henry-yang-9644382bb",
      },
      ".contact-email-action": { "aria-label": "发邮件联系 Yihang Henry Yang", href: recruiterEmailHrefZh },
      ".contact-copy-email-action": { "aria-label": "复制 Yihang Henry Yang 邮箱地址" },
      ".contact-resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".contact-docx-link": { "aria-label": "下载 Henry Yang DOCX 简历" },
      ".contact-linkedin-link": { "aria-label": "打开 Henry Yang LinkedIn 主页" },
      ".contact-github-link": { "aria-label": "打开 Yihang Yang GitHub 主页" },
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

  const bounds = target.getBoundingClientRect();
  const headerOffset = header?.offsetHeight || 0;
  return bounds.top <= headerOffset + 40 && bounds.bottom > headerOffset + 80;
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
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if ("IntersectionObserver" in window && sections.length > 0) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      const currentHash = window.location.hash;
      const isHashLocked =
        currentHash &&
        activeHashLock === currentHash &&
        window.performance.now() < activeHashLockUntil;

      if (isHashLocked || shouldKeepHashActive(currentHash)) {
        setActiveNavLink(currentHash);
        return;
      }

      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveNavLink(`#${visibleEntry.target.id}`);
      }
    },
    {
      rootMargin: "-22% 0px -58% 0px",
      threshold: [0.1, 0.24, 0.5],
    }
  );

  sections.forEach((section) => navObserver.observe(section));
}

if (window.location.hash) {
  lockActiveHash(window.location.hash);
  setActiveNavLink(window.location.hash);
  revealTarget(document.querySelector(window.location.hash));
} else {
  setActiveNavLink("#experience");
}

window.addEventListener("hashchange", () => {
  lockActiveHash(window.location.hash);
  setActiveNavLink(window.location.hash);
  revealTarget(document.querySelector(window.location.hash));
});
