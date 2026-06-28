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
    "岗位信息：",
    "设备范围：",
    "地点 / 现场服务范围：",
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
      ".proof-grid article:nth-child(3) h3": "Service traceability",
      ".proof-grid article:nth-child(3) p":
        "Work orders, test notes, equipment history, customer updates, and handover status become evidence for the next service decision, not just admin.",
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
      ".partners-section .section-kicker": "Medical Technology Platforms",
      "#partners-title": "Representative manufacturers and platforms show the device types and service settings.",
      ".partners-copy > p:not(.section-kicker)":
        "These entries describe equipment families, workflows, and field or workshop service contexts from the service record.",
      ".partners-grid article:nth-child(1) .partner-category": "Respiratory / monitoring / ultrasound",
      ".partners-grid article:nth-child(1) h3": "Philips Healthcare",
      ".partners-grid article:nth-child(1) p":
        "Service preparation, field support, functional checks, upgrade support, and handover exposure across respiratory, patient monitoring, ultrasound, and ECG-cart contexts.",
      ".partners-grid article:nth-child(1) .partner-equipment strong": "Equipment / platforms",
      ".partners-grid article:nth-child(1) .partner-equipment p":
        "Respironics V60, MX40/MX450, patient monitors, ultrasound systems, ECG carts, PNA testing.",
      ".partners-grid article:nth-child(2) .partner-category": "Medication management / automation",
      ".partners-grid article:nth-child(2) h3": "BD / BD Rowa",
      ".partners-grid article:nth-child(2) p":
        "Pyxis, Rowa, and Alaris-related service contexts covering call-outs, workflow support, remediation support, service notes, customer updates, and handover.",
      ".partners-grid article:nth-child(2) .partner-equipment strong": "Equipment / platforms",
      ".partners-grid article:nth-child(2) .partner-equipment p":
        "BD Pyxis, BD Rowa Vmax/Smart, Prolog, Alaris remediation, pharmacy automation workflows.",
      ".partners-grid article:nth-child(3) .partner-category": "Critical care / resuscitation",
      ".partners-grid article:nth-child(3) h3": "Device Technologies",
      ".partners-grid article:nth-child(3) p":
        "Corpuls and related critical-care support contexts covering workshop support, bench checks, field preparation, equipment status notes, and service handover.",
      ".partners-grid article:nth-child(3) .partner-equipment strong": "Equipment / platforms",
      ".partners-grid article:nth-child(3) .partner-equipment p":
        "Corpuls CPR arms, Corpuls systems, Hamilton T1, H-900 humidifiers, connectivity and PM support.",
      ".partners-grid article:nth-child(4) .partner-category": "Diagnostics / DEXA / surgical imaging",
      ".partners-grid article:nth-child(4) h3": "Hologic",
      ".partners-grid article:nth-child(4) p":
        "DEXA, TridentHD, and remediation-support contexts with attention to performance evidence, service records, escalation pathways, and release status.",
      ".partners-grid article:nth-child(4) .partner-equipment strong": "Equipment / platforms",
      ".partners-grid article:nth-child(4) .partner-equipment p":
        "Horizon DEXA, TridentHD, mammography and biopsy systems, EMI remediation support.",
      ".partners-grid article:nth-child(5) .partner-category": "Respiratory diagnostics",
      ".partners-grid article:nth-child(5) h3": "Jaeger Medical",
      ".partners-grid article:nth-child(5) p":
        "Respiratory diagnostic equipment service contexts covering planned service, functional checks, equipment condition notes, and traceable close-out records.",
      ".partners-grid article:nth-child(5) .partner-equipment strong": "Equipment / platforms",
      ".partners-grid article:nth-child(5) .partner-equipment p":
        "Vyntus Body, Vyntus One, Vyntus Spiro, Vyntus CPX, Pneumo and SentrySuite-related support.",
      ".judgement-section .section-kicker": "Clinical Safety & Service Judgement",
      "#judgement-title": "Safe service decisions need evidence, not assumptions.",
      ".judgement-lead > p:not(.section-kicker)":
        "My service approach is built around safe return-to-use decisions: understand the reported issue, check device condition and service history, follow manufacturer-led procedures, verify the result with functional or performance evidence, document the action clearly, and hand over a traceable next-use or escalation status.",
      ".judgement-grid article:nth-child(1) span": "Return-to-use boundary",
      ".judgement-grid article:nth-child(1) h3": "Do not return uncertain equipment",
      ".judgement-grid article:nth-child(1) p":
        "Unsafe or uncertain devices should not be returned to use until the result is verified or escalated.",
      ".release-list li:nth-child(1)": "verified ready",
      ".release-list li:nth-child(2)": "restricted or monitored use",
      ".release-list li:nth-child(3)": "escalated / not returned",
      ".judgement-grid article:nth-child(2) span": "Procedure discipline",
      ".judgement-grid article:nth-child(2) h3": "Test equipment and procedure discipline",
      ".judgement-grid article:nth-child(2) p":
        "Service checks are performed using appropriate manufacturer procedures, controlled test equipment where required, and documented pass/fail or escalation notes.",
      ".judgement-grid article:nth-child(3) span": "Australian biomedical service awareness",
      ".judgement-grid article:nth-child(3) h3": "AS/NZS 3551-aware lifecycle thinking",
      ".judgement-grid article:nth-child(3) p":
        "Familiar with the importance of medical equipment lifecycle thinking: acceptance, planned service, fault management, routine testing, service records, disposal awareness, and escalation in line with manufacturer procedures and local biomedical governance.",
      ".judgement-grid article:nth-child(4) span": "Regulated records",
      ".judgement-grid article:nth-child(4) h3": "Regulated healthcare documentation mindset",
      ".judgement-grid article:nth-child(4) p":
        "Biomedical service work benefits from the same discipline used in regulated healthcare records: clear event history, factual notes, traceable actions, escalation when safety or performance concerns remain unresolved, and no unsupported assumptions.",
      ".experience-timeline article:nth-child(2) .experience-date": "Dec 2019 - Feb 2020",
      ".experience-timeline article:nth-child(2) h3":
        "Pharmacovigilance Department Assistant | Lundbeck Beijing",
      ".experience-timeline article:nth-child(2) .experience-meta": "Internship · Beijing, China",
      ".experience-timeline article:nth-child(2) li:nth-child(1)":
        "Supported adverse reaction record handling and drug-safety documentation for Lundbeck products listed in China.",
      ".experience-timeline article:nth-child(2) li:nth-child(2)":
        "Assisted documentation work related to regulated healthcare records and cross-functional communication.",
      "#capabilities .section-kicker": "Equipment & Service Scope",
      "#capabilities-title": "Equipment scope with conservative verification evidence.",
      "#capabilities .section-intro":
        "This separates equipment families, service exposure, and verification evidence so the scope is clearer than a generic skills list.",
      ".capability-row article:nth-child(1) span": "Respiratory",
      ".capability-row article:nth-child(1) h3": "Respiratory service",
      ".capability-row article:nth-child(1) p":
        "V60, V60 Plus, Trilogy, planned service, functional checks, and troubleshooting preparation.",
      ".capability-row article:nth-child(1) .scope-evidence dt:nth-of-type(1)": "Service exposure",
      ".capability-row article:nth-child(1) .scope-evidence dd:nth-of-type(1)":
        "PM, functional checks, and troubleshooting preparation.",
      ".capability-row article:nth-child(1) .scope-evidence dt:nth-of-type(2)": "Verification evidence",
      ".capability-row article:nth-child(1) .scope-evidence dd:nth-of-type(2)":
        "Flow/pressure-related checks, alarm/function confirmation, and manufacturer procedure notes where applicable.",
      ".capability-row article:nth-child(1) .scope-level": "Hands-on service exposure",
      ".capability-row article:nth-child(2) span": "Monitoring",
      ".capability-row article:nth-child(2) h3": "Patient monitoring",
      ".capability-row article:nth-child(2) p":
        "Avalon, Efficia, HeartStart and related monitoring-service preparation, checks, and handover notes.",
      ".capability-row article:nth-child(2) .scope-evidence dt:nth-of-type(1)": "Service exposure",
      ".capability-row article:nth-child(2) .scope-evidence dd:nth-of-type(1)":
        "Monitoring-service preparation, checks, and handover.",
      ".capability-row article:nth-child(2) .scope-evidence dt:nth-of-type(2)": "Verification evidence",
      ".capability-row article:nth-child(2) .scope-evidence dd:nth-of-type(2)":
        "ECG/SpO2/NIBP-related functional checks, visual inspection, and user-ready status where applicable.",
      ".capability-row article:nth-child(2) .scope-level": "Training completed",
      ".capability-row article:nth-child(3) span": "Imaging",
      ".capability-row article:nth-child(3) h3": "Ultrasound systems",
      ".capability-row article:nth-child(3) p":
        "EPIQ, Affiniti, CX30, CX50 support exposure across service preparation, installation support, and checks.",
      ".capability-row article:nth-child(3) .scope-evidence dt:nth-of-type(1)": "Service exposure",
      ".capability-row article:nth-child(3) .scope-evidence dd:nth-of-type(1)":
        "Installation support, service preparation, and checks.",
      ".capability-row article:nth-child(3) .scope-evidence dt:nth-of-type(2)": "Verification evidence",
      ".capability-row article:nth-child(3) .scope-evidence dd:nth-of-type(2)":
        "System function check, probe/cable condition, and image/function confirmation where applicable.",
      ".capability-row article:nth-child(3) .scope-level": "Installation support",
      ".capability-row article:nth-child(4) span": "Diagnostics",
      ".capability-row article:nth-child(4) h3": "DEXA and X-ray support",
      ".capability-row article:nth-child(4) p":
        "Horizon DEXA, X-ray installation and service training, with performance and service-record awareness.",
      ".capability-row article:nth-child(4) .scope-evidence dt:nth-of-type(1)": "Service exposure",
      ".capability-row article:nth-child(4) .scope-evidence dd:nth-of-type(1)":
        "Installation and service training exposure.",
      ".capability-row article:nth-child(4) .scope-evidence dt:nth-of-type(2)": "Verification evidence",
      ".capability-row article:nth-child(4) .scope-evidence dd:nth-of-type(2)":
        "Performance check awareness, safety documentation and escalation pathway.",
      ".capability-row article:nth-child(4) .scope-level": "Training completed",
      ".capability-row article:nth-child(5) span": "Automation",
      ".capability-row article:nth-child(5) h3": "Pharmacy automation",
      ".capability-row article:nth-child(5) p":
        "BD FIX100, Pyxis, ROWA and specialty workflow support where service notes and handover are critical.",
      ".capability-row article:nth-child(5) .scope-evidence dt:nth-of-type(1)": "Service exposure",
      ".capability-row article:nth-child(5) .scope-evidence dd:nth-of-type(1)":
        "Workflow support, service notes, and customer handover.",
      ".capability-row article:nth-child(5) .scope-evidence dt:nth-of-type(2)": "Verification evidence",
      ".capability-row article:nth-child(5) .scope-evidence dd:nth-of-type(2)":
        "Functional status, dispensing/workflow check, and customer update trail where applicable.",
      ".capability-row article:nth-child(5) .scope-level": "Documentation / handover exposure",
      ".capability-row article:nth-child(6) span": "Records",
      ".capability-row article:nth-child(6) h3": "Service traceability",
      ".capability-row article:nth-child(6) p":
        "Simpro work orders, service reports, equipment history, customer updates, and close-out notes.",
      ".capability-row article:nth-child(6) .scope-evidence dt:nth-of-type(1)": "Service exposure",
      ".capability-row article:nth-child(6) .scope-evidence dd:nth-of-type(1)":
        "CMMS records, handover notes, and service history alignment.",
      ".capability-row article:nth-child(6) .scope-evidence dt:nth-of-type(2)": "Verification evidence",
      ".capability-row article:nth-child(6) .scope-evidence dd:nth-of-type(2)":
        "Device condition, action taken, test result, parts or escalation status, customer update, and next-use decision.",
      ".capability-row article:nth-child(6) .scope-level": "Hands-on service exposure",
      ".target-roles .section-kicker": "Target Roles",
      "#target-roles-title": "The strongest fit is practical medical device service.",
      ".target-role-list li:nth-child(1)": "Biomedical Field Service Engineer",
      ".target-role-list li:nth-child(2)": "Medical Device Service Engineer",
      ".target-role-list li:nth-child(3)": "Clinical Engineering Service Support",
      ".target-role-list li:nth-child(4)": "Biomedical Technician / Service Technician",
      "#case-notes .section-kicker": "Service Case Notes",
      "#case-title": "Service examples show judgement, verification and handover.",
      "#case-notes .section-intro":
        "These examples focus on the service logic behind maintenance, troubleshooting, documentation and release decisions.",
      ".fault-approach h3": "Fault diagnosis approach",
      ".fault-approach li:nth-child(1)": "Reported symptom",
      ".fault-approach li:nth-child(2)": "safety screen",
      ".fault-approach li:nth-child(3)": "device / accessory condition",
      ".fault-approach li:nth-child(4)": "service history",
      ".fault-approach li:nth-child(5)": "reproduce or isolate fault",
      ".fault-approach li:nth-child(6)": "manual-led checks",
      ".fault-approach li:nth-child(7)": "repair or escalation",
      ".fault-approach li:nth-child(8)": "post-service verification",
      ".fault-approach li:nth-child(9)": "documented handover",
      ".case-grid article:nth-child(1) span": "01 / Preventive maintenance",
      ".case-grid article:nth-child(1) h3": "Routine maintenance with a usable close-out",
      ".case-grid article:nth-child(1) p":
        "Scheduled service is handled by confirming condition, history, site limits, procedure steps, and performance evidence before handover.",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(1)": "Risk point",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(1)":
        "Scheduled equipment can still carry risk if condition, history, or site limits are unclear",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(2)": "Evidence used",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(2)":
        "Device condition, service history, manufacturer procedure steps, and functional or performance evidence",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(3)": "Service action",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(3)":
        "Planned service steps, condition check, and service record close-out",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(4)": "Verification",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(4)":
        "Functional check and documented next-use status",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(5)": "Release decision",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(5)":
        "Returned only when the service result supported a clear verified-ready status",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(6)": "Outcome",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(6)":
        "Returned equipment with a clear next-use status and service close-out trail",
      ".case-grid article:nth-child(2) span": "02 / Fault diagnosis",
      ".case-grid article:nth-child(2) h3":
        "Troubleshooting example - intermittent user-reported fault",
      ".case-grid article:nth-child(2) p":
        "A user-reported intermittent fault was reviewed against device condition, service history, accessories, user workflow, and reproducible symptoms. I followed manual-led checks, recorded measurement notes, confirmed post-repair function, and documented whether the device was ready for use, monitored, or escalated.",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(1)": "Risk point",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(1)":
        "Intermittent symptoms can be device, accessory, workflow, environment, or configuration related",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(2)": "Evidence used",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(2)":
        "Device condition, service history, accessories, user workflow, and reproducible symptoms",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(3)": "Service action",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(3)":
        "Symptom review, reproducible path, and manual-led checks",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(4)": "Verification",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(4)":
        "Measurement notes and post-repair confirmation",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(5)": "Release decision",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(5)":
        "Documented whether the device was ready for use, monitored, or escalated based on post-service evidence",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(6)": "Outcome",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(6)":
        "Separated use condition, repair history, accessories, reproducible symptoms, and manual-led checks before handover",
      ".case-grid article:nth-child(3) span": "03 / Documentation",
      ".case-grid article:nth-child(3) h3": "Traceability, not just admin",
      ".case-grid article:nth-child(3) p":
        "Service records are treated as engineering evidence: device condition, reported symptom, action taken, test result, parts or escalation status, customer update, and next-use decision.",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(1)": "Risk point",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(1)":
        "Vague service notes make later troubleshooting slower and less defensible",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(2)": "Evidence used",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(2)":
        "Work order, service action, test note, equipment history, customer update, and escalation status",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(3)": "Service action",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(3)":
        "Serial details, work order, service report, and actions aligned",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(4)": "Verification",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(4)":
        "Equipment history and customer update cross-check",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(5)": "Release decision",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(5)":
        "Next-use or escalation status recorded clearly for biomedical teams and internal engineers",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(6)": "Outcome",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(6)":
        "Later service decisions start from evidence, not memory",
      "#study .section-kicker": "Education",
      "#study-title": "Biomedical engineering background with practical service focus.",
      "#study .section-intro":
        "The academic story stays short because the main selling point is now field service experience.",
      ".study-grid article:nth-child(1) span": "Awarded Jun 2024",
      ".study-grid article:nth-child(1) h3": "Master of Philosophy",
      ".study-grid article:nth-child(1) p:nth-of-type(1)": "The University of Sydney",
      ".study-grid article:nth-child(1) p:nth-of-type(2)":
        "Biomedical engineering research with a focus on experimental planning, impedance measurement, material/process trade-offs, validation evidence, and technical documentation. This research background supports a service style based on measurement, evidence, and controlled documentation rather than assumption.",
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
      "#life .section-kicker": "Professional Development",
      "#life-title": "Development direction for clinical engineering service.",
      ".life-section .story-content > p:not(.section-kicker)":
        "The long-term direction is deeper biomedical service capability: safer verification, better traceability, and stronger procedure-led troubleshooting.",
    },
    rich: {
      profileLinks: [
        { label: "LinkedIn", href: "https://au.linkedin.com/in/henry-yang-9644382bb" },
        { label: "GitHub", href: "https://github.com/yangyihang96" },
      ],
      lifeNotes: [
        {
          title: "Electrical safety testing",
          body: "Electrical safety testing and medical equipment performance verification.",
        },
        {
          title: "Equipment depth",
          body: "Respiratory, monitoring, imaging, and pharmacy automation service depth.",
        },
        {
          title: "CMMS quality",
          body: "Biomedical asset management and CMMS record quality.",
        },
        {
          title: "Procedure-led troubleshooting",
          body: "Manufacturer training and procedure-led troubleshooting.",
        },
        {
          title: "Clinical communication",
          body: "Clinical communication and safe handover.",
        },
      ],
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
      ".judgement-grid": { "aria-label": "Clinical service judgement points" },
      ".release-list": { "aria-label": "Next-use status options" },
      ".fault-approach": { "aria-label": "Fault diagnosis approach" },
      ".case-grid article:nth-child(1) .case-outcome": { "aria-label": "Service case outcome" },
      ".case-grid article:nth-child(2) .case-outcome": { "aria-label": "Service case outcome" },
      ".case-grid article:nth-child(3) .case-outcome": { "aria-label": "Service case outcome" },
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
      ".hero-meta div:nth-child(3) dt": "现场",
      ".hero-meta div:nth-child(3) dd": "驾照 + 现场服务",
      ".hero-meta div:nth-child(4) dt": "工作权利",
      ".hero-meta div:nth-child(4) dd": "可按雇主流程核验",
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
      ".hero-action-path div:nth-child(3) span": "邮件沟通岗位匹配",
      ".hero-profile-card .hero-card-kicker": "当前定位",
      ".hero-profile-card strong": "医疗设备服务记录与交接",
      ".hero-profile-card .hero-card-note":
        "经验重点是预防性维护、故障排查、验证记录和服务闭环。",
      ".profile-status-strip div:nth-child(1) strong": "更新",
      ".profile-status-strip div:nth-child(1) span": "2026 年 6 月",
      ".profile-status-strip div:nth-child(2) strong": "职业链接",
      ".fit-strip .section-kicker": "现场服务概览",
      "#fit-title": "适合医院与药房医疗设备服务岗位。",
      ".fit-strip .section-intro":
        "适合需要现场服务、实际故障排查、验证记录和明确交接的医疗设备服务岗位。",
      ".fit-grid article:nth-child(1) span": "经验",
      ".fit-grid article:nth-child(1) strong": "近 3 年现场服务和车间支持经验",
      ".fit-grid article:nth-child(2) span": "设备",
      ".fit-grid article:nth-child(2) strong": "呼吸治疗、患者监护、超声、DEXA、药房自动化",
      ".fit-grid article:nth-child(3) span": "现场",
      ".fit-grid article:nth-child(3) strong": "持有驾照，支持现场服务",
      ".fit-grid article:nth-child(4) span": "记录",
      ".fit-grid article:nth-child(4) strong": "Simpro、服务报告、设备服务历史和交接记录",
      ".proof-grid article:nth-child(1) span": "服务",
      ".proof-grid article:nth-child(1) h3": "预防性维护、故障维修、安装支持",
      ".proof-grid article:nth-child(1) p":
        "服务经验覆盖医院与药房医疗设备的现场服务和车间支持。",
      ".proof-grid article:nth-child(2) span": "验证",
      ".proof-grid article:nth-child(2) h3": "功能与性能检查",
      ".proof-grid article:nth-child(2) p":
        "服务结论以测试记录、性能证据或明确升级状态为依据。",
      ".proof-grid article:nth-child(3) span": "记录",
      ".proof-grid article:nth-child(3) h3": "服务可追踪性",
      ".proof-grid article:nth-child(3) p":
        "工单、测试记录、设备服务历史、客户沟通更新和交接状态会成为下一次服务决策的证据，而不只是行政记录。",
      ".proof-grid article:nth-child(4) span": "沟通",
      ".proof-grid article:nth-child(4) h3": "中英文沟通与交接",
      ".proof-grid article:nth-child(4) p":
        "能向临床用户、医院工程团队、厂商和内部工程师清楚说明服务状态。",
      ".experience-section .section-kicker": "工作经历",
      "#experience-title": "最能体现能力的是现场服务和车间支持经验。",
      ".experience-section .section-intro":
        "按服务岗位最关心的内容组织经历：设备范围、服务动作、验证、记录和交接。",
      ".experience-summary > p":
        "医疗设备现场服务工程师，拥有近三年全职经验，覆盖医院与药房医疗设备服务、预防性维护、故障诊断、维修、安装支持、验证测试和文档记录。",
      ".experience-summary-grid div:nth-child(1) strong": "服务闭环",
      ".experience-summary-grid div:nth-child(1) span":
        "准备设备，完成现场服务或车间支持，验证结果，记录工作，并交接下一次使用状态。",
      ".experience-summary-grid div:nth-child(2) strong": "设备范围",
      ".experience-summary-grid div:nth-child(2) span":
        "呼吸设备、患者监护、超声、DEXA、药房自动化、X-ray 支持和通用医疗设备。",
      ".experience-summary-grid div:nth-child(3) strong": "运营价值",
      ".experience-summary-grid div:nth-child(3) span":
        "后续排查从一致的服务记录、设备服务历史和客户沟通更新开始，而不是只靠记忆。",
      ".experience-timeline article:nth-child(1) .experience-date": "2023 年 7 月 - 至今",
      ".experience-timeline article:nth-child(1) h3":
        "Biomedical Engineer | Nova Biomedical Australia",
      ".experience-timeline article:nth-child(1) .experience-meta":
        "澳大利亚范围内现场服务 / 车间支持",
      ".experience-evidence div:nth-child(1) strong": "设备",
      ".experience-evidence div:nth-child(1) span": "呼吸 / 监护 / 超声 / DEXA",
      ".experience-evidence div:nth-child(2) strong": "服务动作",
      ".experience-evidence div:nth-child(2) span": "PM / 维修 / 安装 / 验证",
      ".experience-evidence div:nth-child(3) strong": "记录",
      ".experience-evidence div:nth-child(3) span": "Simpro / 服务报告 / 设备服务历史",
      ".experience-evidence div:nth-child(4) strong": "服务场景",
      ".experience-evidence div:nth-child(4) span": "医院 / 药房 / 车间支持",
      ".experience-outcome dt:nth-of-type(1)": "服务环境",
      ".experience-outcome dd:nth-of-type(1)": "医院、药房、车间和现场支持环境",
      ".experience-outcome dt:nth-of-type(2)": "验证结果",
      ".experience-outcome dd:nth-of-type(2)":
        "服务结果以功能检查、性能证据或明确升级状态记录",
      ".experience-outcome dt:nth-of-type(3)": "记录链路",
      ".experience-outcome dd:nth-of-type(3)":
        "Simpro 工单、服务报告、设备服务历史和客户沟通更新保持一致",
      ".experience-outcome dt:nth-of-type(4)": "交接",
      ".experience-outcome dd:nth-of-type(4)":
        "医院工程团队、临床用户、厂商和内部工程师能明确看到下一次使用状态",
      ".partners-section .section-kicker": "设备厂商与平台",
      "#partners-title": "服务中接触过的医疗技术厂商与设备平台，可以说明设备类型和服务场景。",
      ".partners-copy > p:not(.section-kicker)":
        "以下按主要医疗技术厂商和设备平台列出设备类型、工作流和现场 / 车间服务场景。",
      ".partners-grid article:nth-child(1) .partner-category": "呼吸 / 监护 / 超声",
      ".partners-grid article:nth-child(1) h3": "Philips Healthcare 飞利浦医疗",
      ".partners-grid article:nth-child(1) p":
        "围绕呼吸治疗、患者监护、超声和 ECG 推车相关场景，参与服务准备、现场支持、功能检查、升级支持和交接记录。",
      ".partners-grid article:nth-child(1) .partner-equipment strong": "对应设备 / 平台",
      ".partners-grid article:nth-child(1) .partner-equipment p":
        "Respironics V60、MX40/MX450、患者监护仪、超声系统、ECG 推车、PNA 测试。",
      ".partners-grid article:nth-child(2) .partner-category": "用药管理 / 自动化",
      ".partners-grid article:nth-child(2) h3": "BD / BD Rowa",
      ".partners-grid article:nth-child(2) p":
        "围绕 Pyxis、Rowa 和 Alaris 相关场景，参与现场故障支持、工作流支持、整改项目支持、服务记录、客户沟通更新和交接。",
      ".partners-grid article:nth-child(2) .partner-equipment strong": "对应设备 / 平台",
      ".partners-grid article:nth-child(2) .partner-equipment p":
        "BD Pyxis、BD Rowa Vmax/Smart、Prolog、Alaris 整改、药房自动化工作流。",
      ".partners-grid article:nth-child(3) .partner-category": "急救 / 重症支持",
      ".partners-grid article:nth-child(3) h3": "Device Technologies",
      ".partners-grid article:nth-child(3) p":
        "围绕 Corpuls 等急救和重症相关设备场景，参与车间支持、台架检查、现场准备、设备状态记录和服务交接。",
      ".partners-grid article:nth-child(3) .partner-equipment strong": "对应设备 / 平台",
      ".partners-grid article:nth-child(3) .partner-equipment p":
        "Corpuls CPR arm、Corpuls 系统、Hamilton T1、H-900 humidifier、连接测试和 PM 支持。",
      ".partners-grid article:nth-child(4) .partner-category": "诊断 / DEXA / 手术影像",
      ".partners-grid article:nth-child(4) h3": "Hologic",
      ".partners-grid article:nth-child(4) p":
        "围绕 DEXA、TridentHD 和整改项目支持场景，关注性能证据、服务记录、升级路径和能否返回使用的状态。",
      ".partners-grid article:nth-child(4) .partner-equipment strong": "对应设备 / 平台",
      ".partners-grid article:nth-child(4) .partner-equipment p":
        "Horizon DEXA、TridentHD、乳腺影像和活检系统、EMI 整改支持。",
      ".partners-grid article:nth-child(5) .partner-category": "呼吸诊断",
      ".partners-grid article:nth-child(5) h3": "Jaeger Medical",
      ".partners-grid article:nth-child(5) p":
        "围绕呼吸诊断设备服务场景，参与计划性服务、功能检查、设备状态记录和可追踪的服务闭环记录。",
      ".partners-grid article:nth-child(5) .partner-equipment strong": "对应设备 / 平台",
      ".partners-grid article:nth-child(5) .partner-equipment p":
        "Vyntus Body、Vyntus One、Vyntus Spiro、Vyntus CPX、Pneumo、SentrySuite 相关支持。",
      ".judgement-section .section-kicker": "临床安全与服务判断",
      "#judgement-title": "安全的服务决策需要证据，而不是假设。",
      ".judgement-lead > p:not(.section-kicker)":
        "我做服务判断时，会先理解报告问题，查看设备状态和服务历史，遵循厂家流程，用功能或性能证据验证结果，清楚记录动作，并交接可追踪的下一次使用或升级状态。",
      ".judgement-grid article:nth-child(1) span": "放行边界",
      ".judgement-grid article:nth-child(1) h3": "不确定的设备不应直接返回临床使用",
      ".judgement-grid article:nth-child(1) p":
        "不安全或结果不确定的设备，在完成验证或升级处理前，不应返回临床使用。",
      ".release-list li:nth-child(1)": "已验证，可返回使用",
      ".release-list li:nth-child(2)": "限制或观察使用",
      ".release-list li:nth-child(3)": "升级处理 / 不返回使用",
      ".judgement-grid article:nth-child(2) span": "流程纪律",
      ".judgement-grid article:nth-child(2) h3": "测试设备和流程纪律",
      ".judgement-grid article:nth-child(2) p":
        "服务检查应按合适的厂家流程执行；需要时使用符合要求的测试设备，并记录通过 / 未通过或升级说明。",
      ".judgement-grid article:nth-child(3) span": "澳洲医疗设备服务意识",
      ".judgement-grid article:nth-child(3) h3": "AS/NZS 3551 生命周期意识",
      ".judgement-grid article:nth-child(3) p":
        "理解医疗设备生命周期管理的重要性：验收、计划性服务、故障管理、例行测试、服务记录、退役 / 报废意识，以及结合厂家流程和本地临床工程管理要求的升级路径。",
      ".judgement-grid article:nth-child(4) span": "合规记录",
      ".judgement-grid article:nth-child(4) h3": "合规医疗记录思维",
      ".judgement-grid article:nth-child(4) p":
        "医疗设备服务也需要合规记录纪律：清楚事件历史、事实性记录、可追踪动作，在安全或性能疑问未解决时升级，并避免没有证据支持的假设。",
      ".experience-timeline article:nth-child(2) .experience-date": "2019 年 12 月 - 2020 年 2 月",
      ".experience-timeline article:nth-child(2) h3": "药物警戒部门助理 | Lundbeck Beijing",
      ".experience-timeline article:nth-child(2) .experience-meta": "实习 · 中国北京",
      ".experience-timeline article:nth-child(2) li:nth-child(1)":
        "支持 Lundbeck 在中国上市产品的不良反应记录处理和药物安全文档工作。",
      ".experience-timeline article:nth-child(2) li:nth-child(2)":
        "参与合规医疗记录相关文档整理，接触跨部门沟通和记录边界。",
      "#capabilities .section-kicker": "设备与服务范围",
      "#capabilities-title": "按设备类别说明服务范围和验证依据。",
      "#capabilities .section-intro":
        "这里按设备类别、参与内容和验证方式分开写，让服务范围比普通技能清单更清楚。",
      ".capability-row article:nth-child(1) span": "呼吸",
      ".capability-row article:nth-child(1) h3": "呼吸设备服务",
      ".capability-row article:nth-child(1) p":
        "V60、V60 Plus、Trilogy 等呼吸设备的计划性服务、功能检查和故障排查准备。",
      ".capability-row article:nth-child(1) .scope-evidence dt:nth-of-type(1)": "参与内容",
      ".capability-row article:nth-child(1) .scope-evidence dd:nth-of-type(1)":
        "预防性维护、功能检查和故障排查准备。",
      ".capability-row article:nth-child(1) .scope-evidence dt:nth-of-type(2)": "验证证据",
      ".capability-row article:nth-child(1) .scope-evidence dd:nth-of-type(2)":
        "适用时包括流量 / 压力相关检查、报警和功能确认、厂家流程记录。",
      ".capability-row article:nth-child(1) .scope-level": "实际服务经验",
      ".capability-row article:nth-child(2) span": "监护",
      ".capability-row article:nth-child(2) h3": "患者监护",
      ".capability-row article:nth-child(2) p":
        "Avalon、Efficia、HeartStart 等监护设备的服务准备、检查和交接记录。",
      ".capability-row article:nth-child(2) .scope-evidence dt:nth-of-type(1)": "参与内容",
      ".capability-row article:nth-child(2) .scope-evidence dd:nth-of-type(1)":
        "监护设备的服务准备、检查和交接记录。",
      ".capability-row article:nth-child(2) .scope-evidence dt:nth-of-type(2)": "验证证据",
      ".capability-row article:nth-child(2) .scope-evidence dd:nth-of-type(2)":
        "适用时包括 ECG / SpO2 / NIBP 相关功能检查、外观检查和可用状态确认。",
      ".capability-row article:nth-child(2) .scope-level": "培训已完成",
      ".capability-row article:nth-child(3) span": "影像",
      ".capability-row article:nth-child(3) h3": "超声系统",
      ".capability-row article:nth-child(3) p":
        "EPIQ、Affiniti、CX30、CX50 的服务准备、安装支持和检查。",
      ".capability-row article:nth-child(3) .scope-evidence dt:nth-of-type(1)": "参与内容",
      ".capability-row article:nth-child(3) .scope-evidence dd:nth-of-type(1)":
        "安装支持、服务准备和检查。",
      ".capability-row article:nth-child(3) .scope-evidence dt:nth-of-type(2)": "验证证据",
      ".capability-row article:nth-child(3) .scope-evidence dd:nth-of-type(2)":
        "适用时包括系统功能检查、探头 / 线缆状态和图像 / 功能确认。",
      ".capability-row article:nth-child(3) .scope-level": "安装支持",
      ".capability-row article:nth-child(4) span": "诊断",
      ".capability-row article:nth-child(4) h3": "DEXA 和 X-ray 支持",
      ".capability-row article:nth-child(4) p":
        "Horizon DEXA、X-ray 安装和服务培训，重点是性能检查和服务记录。",
      ".capability-row article:nth-child(4) .scope-evidence dt:nth-of-type(1)": "参与内容",
      ".capability-row article:nth-child(4) .scope-evidence dd:nth-of-type(1)":
        "安装支持和服务培训。",
      ".capability-row article:nth-child(4) .scope-evidence dt:nth-of-type(2)": "验证证据",
      ".capability-row article:nth-child(4) .scope-evidence dd:nth-of-type(2)":
        "性能检查意识、安全文档和升级路径。",
      ".capability-row article:nth-child(4) .scope-level": "培训已完成",
      ".capability-row article:nth-child(5) span": "自动化",
      ".capability-row article:nth-child(5) h3": "药房自动化",
      ".capability-row article:nth-child(5) p":
        "BD FIX100、Pyxis、ROWA 和专项工作流支持，重点是服务记录和交接。",
      ".capability-row article:nth-child(5) .scope-evidence dt:nth-of-type(1)": "参与内容",
      ".capability-row article:nth-child(5) .scope-evidence dd:nth-of-type(1)":
        "工作流支持、服务记录和客户沟通交接。",
      ".capability-row article:nth-child(5) .scope-evidence dt:nth-of-type(2)": "验证证据",
      ".capability-row article:nth-child(5) .scope-evidence dd:nth-of-type(2)":
        "适用时包括功能状态、发药流程 / 工作流检查和客户沟通记录。",
      ".capability-row article:nth-child(5) .scope-level": "记录 / 交接经验",
      ".capability-row article:nth-child(6) span": "记录",
      ".capability-row article:nth-child(6) h3": "服务可追踪性",
      ".capability-row article:nth-child(6) p":
        "Simpro 工单、服务报告、设备服务历史、客户沟通更新和闭环说明。",
      ".capability-row article:nth-child(6) .scope-evidence dt:nth-of-type(1)": "参与内容",
      ".capability-row article:nth-child(6) .scope-evidence dd:nth-of-type(1)":
        "CMMS 记录、交接记录与设备服务历史保持一致。",
      ".capability-row article:nth-child(6) .scope-evidence dt:nth-of-type(2)": "验证证据",
      ".capability-row article:nth-child(6) .scope-evidence dd:nth-of-type(2)":
        "设备状态、处理动作、测试结果、备件或升级状态、客户沟通更新和下一次使用判断。",
      ".capability-row article:nth-child(6) .scope-level": "实际服务经验",
      ".target-roles .section-kicker": "目标岗位",
      "#target-roles-title": "最匹配现场服务和临床工程支持岗位。",
      ".target-role-list li:nth-child(1)": "Biomedical Field Service Engineer",
      ".target-role-list li:nth-child(2)": "Medical Device Service Engineer",
      ".target-role-list li:nth-child(3)": "Clinical Engineering Service Support",
      ".target-role-list li:nth-child(4)": "Biomedical Technician / Service Technician",
      "#case-notes .section-kicker": "服务案例",
      "#case-title": "案例重点是判断、验证和交接。",
      "#case-notes .section-intro":
        "这些案例聚焦维护、故障诊断、记录和放行判断背后的服务逻辑。",
      ".fault-approach h3": "故障诊断路径",
      ".fault-approach li:nth-child(1)": "报告现象",
      ".fault-approach li:nth-child(2)": "安全初筛",
      ".fault-approach li:nth-child(3)": "设备 / 附件状态",
      ".fault-approach li:nth-child(4)": "服务历史",
      ".fault-approach li:nth-child(5)": "复现或隔离故障",
      ".fault-approach li:nth-child(6)": "按手册检查",
      ".fault-approach li:nth-child(7)": "维修或升级",
      ".fault-approach li:nth-child(8)": "服务后验证",
      ".fault-approach li:nth-child(9)": "记录并交接",
      ".case-grid article:nth-child(1) span": "01 / 预防性维护",
      ".case-grid article:nth-child(1) h3": "例行维护也要留下清楚的交接结果",
      ".case-grid article:nth-child(1) p":
        "计划性服务会先确认设备状态、历史、现场限制、流程步骤和性能证据，再完成交接。",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(1)": "风险点",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(1)":
        "计划性设备如果状态、历史或现场限制不清楚，仍然可能带来风险",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(2)": "判断依据",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(2)":
        "设备状态、服务历史、厂家流程步骤，以及功能或性能证据",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(3)": "处理动作",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(3)":
        "计划性服务步骤、状态检查和服务记录完善",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(4)": "验证",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(4)":
        "功能检查和已记录的下一次使用状态",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(5)": "放行判断",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(5)":
        "只有当服务结果支持明确的已验证可用状态时才返回使用",
      ".case-grid article:nth-child(1) .case-outcome dt:nth-of-type(6)": "结果",
      ".case-grid article:nth-child(1) .case-outcome dd:nth-of-type(6)":
        "设备带有明确的下一次使用状态和完整的服务记录",
      ".case-grid article:nth-child(2) span": "02 / 故障诊断",
      ".case-grid article:nth-child(2) h3": "故障排查案例：用户反馈的间歇性故障",
      ".case-grid article:nth-child(2) p":
        "对用户反馈的间歇性故障，会结合设备状态、服务历史、附件、用户使用流程和可复现现象判断；按手册检查，记录测量结果，确认维修后功能，并记录设备是可使用、需观察使用，还是需要升级。",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(1)": "风险点",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(1)":
        "间歇性现象可能来自主机、附件、工作流、环境或配置",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(2)": "判断依据",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(2)":
        "设备状态、服务历史、附件、用户使用流程和可复现现象",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(3)": "处理动作",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(3)":
        "现象复核、复现路径和按手册检查",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(4)": "验证",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(4)": "测量记录和维修后功能确认",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(5)": "放行判断",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(5)":
        "根据服务后证据记录设备是可使用、需观察使用，还是需要升级",
      ".case-grid article:nth-child(2) .case-outcome dt:nth-of-type(6)": "结果",
      ".case-grid article:nth-child(2) .case-outcome dd:nth-of-type(6)":
        "在交接前区分使用条件、维修历史、附件、可复现现象和手册检查结果",
      ".case-grid article:nth-child(3) span": "03 / 服务记录",
      ".case-grid article:nth-child(3) h3": "可追踪性，而不只是行政记录",
      ".case-grid article:nth-child(3) p":
        "服务记录会被当作工程证据：设备状态、报告现象、处理动作、测试结果、备件或升级状态、客户沟通更新和下一次使用判断。",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(1)": "风险点",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(1)":
        "模糊的服务记录会让后续排查更慢，也更难说明判断依据",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(2)": "判断依据",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(2)":
        "工单、处理动作、测试记录、设备服务历史、客户沟通更新和升级状态",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(3)": "处理动作",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(3)":
        "对齐工单、服务报告、设备服务历史和处理动作",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(4)": "验证",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(4)": "交叉核对设备服务历史和客户沟通更新",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(5)": "放行判断",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(5)":
        "为医院工程团队和内部工程师清楚记录下一次使用或升级状态",
      ".case-grid article:nth-child(3) .case-outcome dt:nth-of-type(6)": "结果",
      ".case-grid article:nth-child(3) .case-outcome dd:nth-of-type(6)":
        "后续服务决策从证据开始，而不是只靠记忆",
      "#study .section-kicker": "教育",
      "#study-title": "生物医学工程背景，服务岗位导向。",
      "#study .section-intro": "学历部分保持简洁，重点突出与现场服务相关的验证、测量和记录能力。",
      ".study-grid article:nth-child(1) span": "2024 年 6 月授予",
      ".study-grid article:nth-child(1) h3": "Master of Philosophy",
      ".study-grid article:nth-child(1) p:nth-of-type(1)": "The University of Sydney",
      ".study-grid article:nth-child(1) p:nth-of-type(2)":
        "生物医学工程研究，重点包括实验计划、阻抗测量、材料 / 工艺权衡、验证证据和技术文档。这段研究经历也支持以测量、证据和规范记录为基础的服务方式，而不是凭假设判断。",
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
      "#contact-title": "可以继续沟通医疗设备现场服务机会。",
      ".contact-inner > p:not(.section-kicker)":
        "如果是悉尼医疗设备现场服务相关岗位，邮件是最合适的第一步；中文或英文都可以。",
      ".contact-actions-title": "请直接发送岗位信息。",
      ".contact-actions-summary":
        "有用信息包括设备类型、服务环境、现场服务范围、开始时间，以及招聘流程的下一步安排。",
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
      ".contact-readiness div:nth-child(2) span": "可支持悉尼现场服务",
      ".contact-readiness div:nth-child(3) strong": "工作权利",
      ".contact-readiness div:nth-child(3) span": "可按雇主流程核验",
      ".contact-readiness div:nth-child(4) strong": "直接邮箱",
      ".contact-email-text": "yangyihang96@gmail.com",
      "#life .section-kicker": "职业发展",
      "#life-title": "面向临床工程服务的发展方向。",
      ".life-section .story-content > p:not(.section-kicker)":
        "长期方向是更深的医疗设备服务能力：更安全的验证、更好的可追踪性，以及更强的按流程故障排查。",
    },
    rich: {
      profileLinks: [
        { label: "LinkedIn", href: "https://au.linkedin.com/in/henry-yang-9644382bb" },
        { label: "GitHub", href: "https://github.com/yangyihang96" },
      ],
      lifeNotes: [
        {
          title: "电气安全测试",
          body: "电气安全测试和医疗设备性能验证。",
        },
        {
          title: "设备经验深度",
          body: "加深呼吸、监护、影像和药房自动化服务能力。",
        },
        {
          title: "CMMS 记录质量",
          body: "医疗设备资产管理和 CMMS 记录质量。",
        },
        {
          title: "按流程故障排查",
          body: "厂家培训和按流程故障排查。",
        },
        {
          title: "临床沟通",
          body: "临床沟通和安全交接。",
        },
      ],
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
      ".judgement-grid": { "aria-label": "临床服务判断点" },
      ".release-list": { "aria-label": "下一次使用状态选项" },
      ".fault-approach": { "aria-label": "故障诊断路径" },
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
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themePreferenceMedia = window.matchMedia?.("(prefers-color-scheme: dark)");
const themeColors = {
  light: "#f4f7f4",
  dark: "#0d1716",
};

const createExternalLink = ({ label, href }) => {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  return link;
};

const applyRichContent = (dictionary) => {
  const profileLinkTarget = document.querySelector(".profile-status-strip div:nth-child(2) span");
  if (profileLinkTarget && dictionary.rich?.profileLinks?.length) {
    const nodes = dictionary.rich.profileLinks.flatMap((linkData, index) => {
      const nodesForLink = [createExternalLink(linkData)];
      if (index < dictionary.rich.profileLinks.length - 1) {
        nodesForLink.push(document.createTextNode(" · "));
      }
      return nodesForLink;
    });
    profileLinkTarget.replaceChildren(...nodes);
  }

  (dictionary.rich?.lifeNotes || []).forEach((note, index) => {
    const target = document.querySelector(`.life-notes p:nth-child(${index + 1})`);
    if (!target) {
      return;
    }

    const title = document.createElement("strong");
    title.textContent = note.title;
    target.replaceChildren(title, document.createTextNode(` ${note.body}`));
  });
};

const getResolvedTheme = () => (themePreferenceMedia?.matches ? "dark" : "light");

const getActiveDictionary = () => {
  const language = document.body.dataset.language || "en";
  return translations[language] || translations.en;
};

const applyTheme = (theme) => {
  const selected = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = selected;
  document.documentElement.style.colorScheme = selected;

  if (themeMeta) {
    themeMeta.setAttribute("content", themeColors[selected]);
  }
};

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

  applyRichContent(dictionary);

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

themePreferenceMedia?.addEventListener("change", () => {
  applyTheme(getResolvedTheme());
});

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

applyTheme(getResolvedTheme());
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
