const yearTarget = document.querySelector("[data-current-year]");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const translations = {
  en: {
    lang: "en",
    title: "Yihang (Henry) Yang | Biomedical Field Service Engineer",
    description:
      "Sydney-based Biomedical Field Service Engineer focused on medical device maintenance, troubleshooting, verification, service documentation, and resume download.",
    text: {
      ".skip-link": "Skip to content",
      ".site-nav a:nth-child(1)": "Skills",
      ".site-nav a:nth-child(2)": "Experience",
      ".site-nav a:nth-child(3)": "Cases",
      ".site-nav a:nth-child(4)": "Education",
      ".site-nav a:nth-child(5)": "Contact",
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
      ".hero-meta div:nth-child(4) dt": "Availability",
      ".hero-meta div:nth-child(4) dd": "Sydney field travel",
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
        "Credentials, training, and employment-check documents on request",
      ".hero-profile-card .hero-card-kicker": "Current profile",
      ".hero-profile-card strong": "Biomedical field service engineer",
      ".hero-profile-card .hero-card-note":
        "Resume PDF and DOCX available. Credentials and employment-check documents can be provided privately when required.",
      ".fit-strip .section-kicker": "Best fit for",
      "#fit-title": "Biomedical field service roles that need practical device judgement.",
      ".fit-strip .section-intro":
        "The quick read: Sydney-based, field-ready, bilingual, and focused on medical device maintenance, troubleshooting, verification, and clear service records.",
      ".fit-verdict div:nth-child(1) strong": "Best match",
      ".fit-verdict div:nth-child(1) span":
        "Biomedical field service roles needing device service, verification records, and clear handover.",
      ".fit-verdict div:nth-child(2) strong": "Evidence path",
      ".fit-verdict div:nth-child(2) span":
        "Proof points, experience, cases, and training records are listed below for review.",
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
      ".proof-grid article:nth-child(1) span": "Equipment",
      ".proof-grid article:nth-child(1) h3": "Equipment range",
      ".proof-grid article:nth-child(1) p":
        "Ventilation, monitoring, ultrasound, DEXA, pharmacy automation, and general biomedical equipment.",
      ".proof-grid article:nth-child(2) span": "Verification",
      ".proof-grid article:nth-child(2) h3": "Test evidence",
      ".proof-grid article:nth-child(2) p":
        "Functional tests, performance checks, and safety-aware verification that can be reviewed later.",
      ".proof-grid article:nth-child(3) span": "Records",
      ".proof-grid article:nth-child(3) h3": "Service documentation",
      ".proof-grid article:nth-child(3) p":
        "Simpro work orders, service reports, serial details, and equipment history kept traceable.",
      ".proof-grid article:nth-child(4) span": "Handover",
      ".proof-grid article:nth-child(4) h3": "Communication path",
      ".proof-grid article:nth-child(4) p":
        "Clinical users, biomedical teams, vendors, and internal engineers aligned on status and next steps.",
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
        "Resume files are public; credentials, training records, and employment-check material stay private until needed.",
      ".brief-grid article:nth-child(3) span": "Best next role",
      ".brief-grid article:nth-child(3) h3": "Biomedical field service",
      ".brief-grid article:nth-child(3) p":
        "Strongest match is hands-on service work with travel, documentation, troubleshooting, and follow-up ownership.",
      "#capabilities .section-kicker": "Skills Matrix",
      "#capabilities-title": "What I can handle in a service environment.",
      "#capabilities .section-intro":
        "A recruiter or hiring manager should be able to judge the fit quickly: device service, testing, records, communication, tools, and employment-check readiness.",
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
      ".capability-row article:nth-child(6) span": "Employment checks",
      ".capability-row article:nth-child(6) h3": "Sydney travel + private proof",
      ".capability-row article:nth-child(6) p":
        "Sydney field travel, resume download, and offline degree, training, identity, and right-to-work proof for formal hiring checks.",
      ".overview-heading .section-kicker": "Review Path",
      ".overview-heading h2": "Use this order when checking fit, evidence, and next step.",
      ".overview-grid a:nth-child(1) strong": "Field context",
      ".overview-grid a:nth-child(1) p":
        "Start with the service setting and the kind of device work involved.",
      ".overview-grid a:nth-child(2) strong": "Work evidence",
      ".overview-grid a:nth-child(2) p":
        "Check current role scope, equipment range, records, and handover evidence.",
      ".overview-grid a:nth-child(3) strong": "Case method",
      ".overview-grid a:nth-child(3) p":
        "Review how service problems are handled without exposing customer details.",
      ".overview-grid a:nth-child(4) strong": "Training proof",
      ".overview-grid a:nth-child(4) p":
        "Confirm the listed device training and certificate context.",
      ".overview-grid a:nth-child(5) strong": "Contact / resume",
      ".overview-grid a:nth-child(5) p":
        "Use email, PDF, DOCX, and private proof requests for the next step.",
      "#work .section-kicker": "Work",
      "#work-title": "Field service is not only fixing equipment. It is closing the loop.",
      ".work-section .story-content > p:not(.section-kicker)":
        "In Nova Biomedical field and workshop service, I work across preventive maintenance, fault diagnosis, corrective repair, installation support, and verification. Good service is not just leaving after a repair; it means making the equipment state, service action, and next responsibility clear.",
      ".feature-list div:nth-child(1) strong": "Device Service",
      ".feature-list div:nth-child(1) span":
        "From field PM to bench repair, I follow equipment condition and service procedure through maintenance, troubleshooting, functional checks, and performance verification.",
      ".feature-list div:nth-child(2) strong": "Equipment Range",
      ".feature-list div:nth-child(2) span":
        "Experience around ventilation, patient monitoring, ultrasound, DEXA, pharmacy automation, and general biomedical equipment.",
      ".feature-list div:nth-child(3) strong": "Service Records",
      ".feature-list div:nth-child(3) span":
        "I maintain work orders, service reports, serial details, equipment history, and customer updates so information does not break between people.",
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
        "Biomedical Engineer | Nova Biomedical Pty Ltd",
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
      ".scope-section .section-kicker": "Service Scope",
      "#scope-title": "The work covers more than one moment of a repair.",
      ".scope-section .section-intro":
        "A service job starts before opening the device and continues after the device is returned. The scope includes preparation, safe handling, technical checks, documentation, and follow-up.",
      ".scope-grid article:nth-child(1) h3": "Planned maintenance",
      ".scope-grid article:nth-child(1) p":
        "Prepare required tools and records, check equipment condition, follow the service procedure, and close the visit with clear notes and required test evidence.",
      ".scope-grid article:nth-child(2) h3": "Fault investigation",
      ".scope-grid article:nth-child(2) p":
        "Translate user feedback into a testable problem, reproduce the symptom where possible, and separate likely causes from confirmed causes.",
      ".scope-grid article:nth-child(3) h3": "Workshop repair",
      ".scope-grid article:nth-child(3) p":
        "Handle devices in a controlled repair setting, keep parts and actions traceable, and verify the repaired state before return or escalation.",
      ".scope-grid article:nth-child(4) h3": "Verification and safety",
      ".scope-grid article:nth-child(4) p":
        "Use functional checks, performance checks, and required safety checks to confirm that the device result is not only visually acceptable but technically supportable.",
      ".scope-grid article:nth-child(5) h3": "Handover and follow-up",
      ".scope-grid article:nth-child(5) p":
        "Summarize what was found, what was done, what was verified, and what needs attention next so the next person does not start from zero.",
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
      "#process .section-kicker": "Process",
      "#process-title": "I use a clear process to handle field problems.",
      "#process .section-intro":
        "Field service breaks down when information breaks. My process keeps the symptom, judgement, verification, and record connected.",
      ".process-track article:nth-child(1) h3": "Read the field state",
      ".process-track article:nth-child(1) p":
        "Confirm the symptom, user feedback, serial details, history, site limits, and current risk before jumping to a conclusion.",
      ".process-track article:nth-child(2) h3": "Locate the problem",
      ".process-track article:nth-child(2) p":
        "Combine service manuals, test steps, measurements, and previous records to turn a guess into a verifiable judgement.",
      ".process-track article:nth-child(3) h3": "Verify the result",
      ".process-track article:nth-child(3) p":
        "Complete functional tests, performance checks, and required safety checks so the device is not only \"apparently fixed.\"",
      ".process-track article:nth-child(4) h3": "Leave a usable record",
      ".process-track article:nth-child(4) p":
        "Keep work orders, service reports, serial details, service actions, and customer updates clear for handover and review.",
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
      ".credentials-section .section-kicker": "Credentials",
      "#credentials-title": "Education credentials are kept public-safe.",
      ".credentials-section .section-intro":
        "I keep original graduation certificates and transcripts offline. This site lists the credential context without publishing certificate scans, document numbers, signatures, or private verification details.",
      ".credential-grid article:nth-child(1) span": "University records",
      ".credential-grid article:nth-child(1) h3": "University of Sydney education",
      ".credential-grid article:nth-child(1) p":
        "Master of Philosophy and Bachelor of Biomedical Engineering records can be provided privately when needed for employment checks, credential verification, or formal applications.",
      ".credential-grid article:nth-child(2) span": "Document safety",
      ".credential-grid article:nth-child(2) h3": "No public certificate scans",
      ".credential-grid article:nth-child(2) p":
        "Original degree certificates may contain identifiers and verification details, so I keep them off the public site instead of using them as decorative images.",
      ".credential-grid article:nth-child(3) span": "Additional proof",
      ".credential-grid article:nth-child(3) h3": "Training certificates available",
      ".credential-grid article:nth-child(3) p":
        "I also keep selected service and vendor training certificates separately and can share relevant documents when a role or project requires formal evidence.",
      ".certification-section .section-kicker": "Selected Training",
      "#certification-title": "Training records support the service work behind the profile.",
      ".certification-section .section-intro":
        "I found relevant service and technical training certificates in my local files. This public page lists only safe titles and equipment scopes; original PDFs, certificate numbers, signatures, and verification details stay offline.",
      ".certification-grid article:nth-child(1) span": "2023 - 2025",
      ".certification-grid article:nth-child(1) h3": "Respiratory and monitoring service",
      ".certification-grid article:nth-child(1) li:nth-child(1)": "V60 / V60 Plus service training",
      ".certification-grid article:nth-child(1) li:nth-child(2)": "Trilogy 202 and Trilogy Evo service training",
      ".certification-grid article:nth-child(1) li:nth-child(3)": "Avalon FM20 / FM30, Efficia CM series, and HeartStart Intrepid training",
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
      ".certification-grid article:nth-child(2) li:nth-child(1)": "EPIQ / Affiniti and CX30 / CX50 ultrasound training",
      ".certification-grid article:nth-child(2) li:nth-child(2)": "Horizon DEXA technical training",
      ".certification-grid article:nth-child(2) li:nth-child(3)": "X-ray service and installation course",
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
      ".certification-grid article:nth-child(3) li:nth-child(1)": "BD FIX100 dispensing service basic training",
      ".certification-grid article:nth-child(3) li:nth-child(2)": "Vendor-led practical service preparation",
      ".certification-grid article:nth-child(3) li:nth-child(3)": "Original certificates available for private verification",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(1)": "Equipment scope",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(1)":
        "BD FIX100 and vendor-led specialty service preparation",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(2)": "Field work",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(2)":
        "Automation service readiness, workflow awareness, handover notes",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(3)": "Evidence",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(3)":
        "Original certificates available for formal verification only",
      "#life .section-kicker": "Life",
      "#life-title": "Outside work, I keep practicing how to organize complex things.",
      ".life-section .story-content > p:not(.section-kicker)":
        "Outside work, I keep the personal section deliberately short: enough to show rhythm and curiosity, not enough to distract from the engineering profile.",
      ".interests-section .section-kicker": "Interests",
      "#interests-title": "The things I enjoy also shape how I think.",
      ".interests-section .section-intro":
        "Outside work, I spend time on interests that keep me curious, organized, and observant. They are personal, but they also support how I learn and how I build clearer systems.",
      ".interest-grid article:nth-child(1) h3": "AI tools and personal systems",
      ".interest-grid article:nth-child(1) p":
        "I like experimenting with AI tools for notes, planning, bilingual writing, document structure, and personal workflow improvement.",
      ".interest-grid article:nth-child(2) h3": "Photography and visual notes",
      ".interest-grid article:nth-child(2) p":
        "Photos help me remember places, details, layouts, and moods. I enjoy using images as a way to record life more clearly.",
      ".interest-grid article:nth-child(3) h3": "Travel and city walks",
      ".interest-grid article:nth-child(3) p":
        "I like planning routes, comparing places, walking through different city areas, and understanding how daily life changes from place to place.",
      ".interest-grid article:nth-child(4) h3": "Reading and long-form learning",
      ".interest-grid article:nth-child(4) p":
        "I follow engineering, technology, medical devices, AI, business, and practical knowledge that can slowly improve judgement.",
      ".interest-grid article:nth-child(5) h3": "Food, coffee, and daily rhythm",
      ".interest-grid article:nth-child(5) p":
        "Simple routines matter to me: a good meal, a coffee, a clean desk, and a well-planned day make work and life feel more stable.",
      "#contact .section-kicker": "Contact",
      "#contact-title": "You can reach me here.",
      ".contact-inner > p:not(.section-kicker)":
        "If you want to know more about my work experience, education, or a biomedical / medical device field service opportunity, email me. English and Mandarin are both fine.",
      ".contact-actions-title": "Ready for field service conversations.",
      ".contact-actions-summary":
        "For roles needing Sydney field travel, medical device service, verification records, and bilingual communication.",
      ".contact-email-action": "Email Me",
      ".contact-resume-link": "Resume PDF",
      ".contact-docx-link": "Resume DOCX",
      ".contact-intake div:nth-child(1) strong": "Role scope",
      ".contact-intake div:nth-child(1) span":
        "Share device type, service setting, travel area, and start timing.",
      ".contact-intake div:nth-child(2) strong": "Proof needed",
      ".contact-intake div:nth-child(2) span":
        "Ask privately for degree, training, identity, right-to-work, or reference material when required.",
      ".contact-intake div:nth-child(3) strong": "Next step",
      ".contact-intake div:nth-child(3) span":
        "Send interview time, role description, or technical screen format.",
      ".contact-actions-note":
        "Private credentials and employment-check documents are shared only when required.",
    },
    html: {
      ".life-notes p:nth-child(1)":
        "<strong>Sydney life</strong> Building a sustainable rhythm across work, commuting, study, and daily planning.",
      ".life-notes p:nth-child(2)":
        "<strong>Continuous learning</strong> Following medical technology, engineering tools, AI tools, and practical ways to improve work.",
      ".life-notes p:nth-child(3)":
        "<strong>Organized records</strong> Turning scattered information into reusable structure so future work is easier.",
    },
    attrs: {
      ".nav-resume-link": { "aria-label": "Download Henry Yang resume PDF" },
      ".resume-link": { "aria-label": "Download Henry Yang resume as PDF" },
      ".resume-docx-link": { "aria-label": "Download Henry Yang resume as DOCX" },
      ".email-action": { "aria-label": "Email Yihang Henry Yang" },
      ".github-action": { "aria-label": "Open Yihang Yang GitHub profile" },
      ".contact-email-action": { "aria-label": "Email Yihang Henry Yang" },
      ".contact-resume-link": { "aria-label": "Download Henry Yang resume as PDF" },
      ".contact-docx-link": { "aria-label": "Download Henry Yang resume as DOCX" },
      ".contact-intake": { "aria-label": "Recruiter email checklist" },
      ".hero-action-path": { "aria-label": "Recruiter action path" },
      ".fit-verdict": { "aria-label": "Recruiter role-fit verdict" },
      ".brief-grid": { "aria-label": "Recruiter screening snapshot" },
      ".overview-section": { "aria-label": "Recruiter review path" },
      ".overview-grid": { "aria-label": "Recruiter review links" },
      ".experience-evidence": { "aria-label": "Current field-service evidence" },
      ".experience-outcome": { "aria-label": "Current role service outcome summary" },
      ".case-grid article:nth-child(1) .case-outcome": { "aria-label": "Public-safe case outcome" },
      ".case-grid article:nth-child(2) .case-outcome": { "aria-label": "Public-safe case outcome" },
      ".case-grid article:nth-child(3) .case-outcome": { "aria-label": "Public-safe case outcome" },
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
    text: {
      ".skip-link": "跳到主要内容",
      ".site-nav a:nth-child(1)": "能力",
      ".site-nav a:nth-child(2)": "经历",
      ".site-nav a:nth-child(3)": "案例",
      ".site-nav a:nth-child(4)": "背景",
      ".site-nav a:nth-child(5)": "联系",
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
      ".hero-meta div:nth-child(4) dt": "可支持",
      ".hero-meta div:nth-child(4) dd": "悉尼现场出行",
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
        "学历、培训和雇佣检查材料按需提供",
      ".hero-profile-card .hero-card-kicker": "当前身份",
      ".hero-profile-card strong": "生物医学现场服务工程师",
      ".hero-profile-card .hero-card-note":
        "PDF 和 DOCX 简历都可下载。学历、培训证书和雇佣检查材料可在正式流程中私下提供。",
      ".fit-strip .section-kicker": "适合岗位",
      "#fit-title": "需要现场判断和设备服务能力的 biomedical field service 岗位。",
      ".fit-strip .section-intro":
        "快速判断：常驻悉尼，可支持现场出行，中英文沟通，重点在医疗设备维护、故障排查、验证测试和清楚的服务记录。",
      ".fit-verdict div:nth-child(1) strong": "最适合",
      ".fit-verdict div:nth-child(1) span":
        "需要设备服务、验证记录和清楚交接的 biomedical field service 岗位。",
      ".fit-verdict div:nth-child(2) strong": "证据路径",
      ".fit-verdict div:nth-child(2) span":
        "证明点、经历、案例和培训记录都在下方，方便招聘方快速核对。",
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
      ".proof-grid article:nth-child(1) span": "设备",
      ".proof-grid article:nth-child(1) h3": "设备范围",
      ".proof-grid article:nth-child(1) p":
        "Ventilation、monitoring、ultrasound、DEXA、pharmacy automation 和通用 biomedical equipment。",
      ".proof-grid article:nth-child(2) span": "验证",
      ".proof-grid article:nth-child(2) h3": "测试证据",
      ".proof-grid article:nth-child(2) p":
        "Functional tests、performance checks 和带安全意识的 verification，结果后续可以复查。",
      ".proof-grid article:nth-child(3) span": "记录",
      ".proof-grid article:nth-child(3) h3": "服务文档",
      ".proof-grid article:nth-child(3) p":
        "Simpro 工单、service reports、serial details 和 equipment history 保持可追踪。",
      ".proof-grid article:nth-child(4) span": "交接",
      ".proof-grid article:nth-child(4) h3": "沟通路径",
      ".proof-grid article:nth-child(4) p":
        "和临床用户、biomedical teams、vendors、内部工程师对齐状态和下一步。",
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
        "公开页面只放简历；学历、培训和 employment-check 相关材料需要时再私下提供。",
      ".brief-grid article:nth-child(3) span": "最适合下一步",
      ".brief-grid article:nth-child(3) h3": "Biomedical field service",
      ".brief-grid article:nth-child(3) p":
        "最强匹配是需要现场服务、出行、记录、故障排查和后续跟进 ownership 的岗位。",
      ".overview-heading .section-kicker": "阅读路径",
      ".overview-heading h2": "招聘方可以按这个顺序看匹配、证据和下一步。",
      ".overview-grid a:nth-child(1) strong": "现场背景",
      ".overview-grid a:nth-child(1) p": "先看服务环境，以及我接触的是哪类设备工作。",
      ".overview-grid a:nth-child(2) strong": "经历证据",
      ".overview-grid a:nth-child(2) p": "再看当前岗位范围、设备类型、记录和交接证据。",
      ".overview-grid a:nth-child(3) strong": "案例方法",
      ".overview-grid a:nth-child(3) p": "看我怎么讲服务问题，同时不暴露客户和内部资料。",
      ".overview-grid a:nth-child(4) strong": "培训证明",
      ".overview-grid a:nth-child(4) p":
        "核对公开列出的设备培训和证书范围。",
      ".overview-grid a:nth-child(5) strong": "联系 / 简历",
      ".overview-grid a:nth-child(5) p":
        "需要下一步时，用邮箱、PDF、DOCX 和私下证明材料继续推进。",
      "#work .section-kicker": "工作",
      "#work-title": "我做现场服务，不是只追求“修好了”。",
      ".work-section .story-content > p:not(.section-kicker)":
        "在 Nova Biomedical 的 field 和 workshop service 中，我接触 preventive maintenance、fault diagnosis、corrective repair、installation support 和 verification。对我来说，真正的服务闭环，是设备状态清楚、处理过程清楚、下一步责任也清楚。",
      ".feature-list div:nth-child(1) strong": "设备服务",
      ".feature-list div:nth-child(1) span":
        "从现场 PM 到 bench repair，先看设备状态，再按流程完成维护、故障处理、功能检查和性能验证。",
      ".feature-list div:nth-child(2) strong": "设备范围",
      ".feature-list div:nth-child(2) span":
        "接触过 ventilation、patient monitoring、ultrasound、DEXA、pharmacy automation 和通用 biomedical equipment。",
      ".feature-list div:nth-child(3) strong": "服务记录",
      ".feature-list div:nth-child(3) span":
        "维护 work orders、service reports、serial details、equipment history 和 customer updates，让信息不要断在某个人手里。",
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
        "Biomedical Engineer | Nova Biomedical Pty Ltd",
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
      ".scope-section .section-kicker": "服务范围",
      "#scope-title": "一次服务不是从拆机开始，也不是修完就结束。",
      ".scope-section .section-intro":
        "一项服务工作前面有准备，过程中有安全处理和技术验证，结束以后还有记录、交接和后续跟进。我更希望把这些环节当成一个完整流程来看。",
      ".scope-grid article:nth-child(1) h3": "计划性维护",
      ".scope-grid article:nth-child(1) p":
        "提前准备工具和记录，确认设备状态，按流程完成维护，并用清楚的测试证据和服务说明结束这次 visit。",
      ".scope-grid article:nth-child(2) h3": "故障调查",
      ".scope-grid article:nth-child(2) p":
        "把用户反馈变成可以验证的问题，尽量复现现象，把“可能原因”和“已经确认的原因”分开。",
      ".scope-grid article:nth-child(3) h3": "Workshop repair",
      ".scope-grid article:nth-child(3) p":
        "在更可控的维修环境里处理设备，同时保持 parts、actions、observations 和 return status 可追踪。",
      ".scope-grid article:nth-child(4) h3": "验证与安全",
      ".scope-grid article:nth-child(4) p":
        "通过 functional check、performance check 和必要的 safety check，确认结果不是表面上看起来可以，而是技术上站得住。",
      ".scope-grid article:nth-child(5) h3": "交接与跟进",
      ".scope-grid article:nth-child(5) p":
        "把发现了什么、做了什么、验证了什么、下一步要注意什么写清楚，让后面接手的人不用从零开始。",
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
      "#process .section-kicker": "流程",
      "#process-title": "我的处理顺序：先看清，再判断，再验证，再记录。",
      "#process .section-intro":
        "现场服务最怕的是信息断掉。流程清楚，后续的人才能知道当时为什么这么判断。",
      ".process-track article:nth-child(1) h3": "看现场状态",
      ".process-track article:nth-child(1) p":
        "先确认设备现象、用户反馈、serial、历史记录、现场限制和当前风险，不急着给答案。",
      ".process-track article:nth-child(2) h3": "定位问题",
      ".process-track article:nth-child(2) p":
        "结合 service manual、测试步骤、实际测量结果和过往记录，把“可能是”变成可以验证的判断。",
      ".process-track article:nth-child(3) h3": "验证结果",
      ".process-track article:nth-child(3) p":
        "完成 functional test、performance check 和必要的 safety check，确认设备不是“看起来好了”。",
      ".process-track article:nth-child(4) h3": "留下记录",
      ".process-track article:nth-child(4) p":
        "把工单、服务报告、serial、处理结果和客户更新写清楚，让交接和复查少走弯路。",
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
      ".credentials-section .section-kicker": "学历证明",
      "#credentials-title": "毕业证书会保留原件，但不直接公开扫描件。",
      ".credentials-section .section-intro":
        "毕业证、学位证和成绩单属于比较敏感的文件，可能包含编号、签名或核验信息。这个网站只公开学历背景和可核验状态，不把原件当作图片展示。",
      ".credential-grid article:nth-child(1) span": "学历记录",
      ".credential-grid article:nth-child(1) h3": "悉尼大学教育背景",
      ".credential-grid article:nth-child(1) p":
        "Master of Philosophy 和 Bachelor of Biomedical Engineering 的学历材料可以在求职、背景核验或正式申请需要时单独提供。",
      ".credential-grid article:nth-child(2) span": "文件安全",
      ".credential-grid article:nth-child(2) h3": "不公开毕业证扫描件",
      ".credential-grid article:nth-child(2) p":
        "证书原件不适合作为公开网页装饰图。公开网站更适合展示学历摘要，把证书原件留给正式核验场景。",
      ".credential-grid article:nth-child(3) span": "补充证明",
      ".credential-grid article:nth-child(3) h3": "培训证书可按需提供",
      ".credential-grid article:nth-child(3) p":
        "除了学历材料，我也保留了一些 service 和 vendor training certificates，可以在相关岗位或项目需要时提供。",
      ".certification-section .section-kicker": "培训证书",
      "#certification-title": "证书部分展示能力范围，不公开证书原件。",
      ".certification-section .section-intro":
        "我在本地文件里找到了多份服务培训和技术培训证书。公开网页只放适合展示的培训方向和设备范围，不放 PDF 原件、证书编号、签名或核验细节。",
      ".certification-grid article:nth-child(1) span": "2023 - 2025",
      ".certification-grid article:nth-child(1) h3": "呼吸与监护设备服务",
      ".certification-grid article:nth-child(1) li:nth-child(1)": "V60 / V60 Plus service training",
      ".certification-grid article:nth-child(1) li:nth-child(2)": "Trilogy 202 和 Trilogy Evo service training",
      ".certification-grid article:nth-child(1) li:nth-child(3)": "Avalon FM20 / FM30、Efficia CM 系列和 HeartStart Intrepid 培训",
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
      ".certification-grid article:nth-child(2) li:nth-child(1)": "EPIQ / Affiniti 和 CX30 / CX50 ultrasound training",
      ".certification-grid article:nth-child(2) li:nth-child(2)": "Horizon DEXA technical training",
      ".certification-grid article:nth-child(2) li:nth-child(3)": "X-ray service and installation course",
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
      ".certification-grid article:nth-child(3) li:nth-child(1)": "BD FIX100 dispensing service basic training",
      ".certification-grid article:nth-child(3) li:nth-child(2)": "厂商技术培训和服务准备",
      ".certification-grid article:nth-child(3) li:nth-child(3)": "证书原件可在正式核验时单独提供",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(1)": "设备范围",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(1)":
        "BD FIX100 和厂商专项服务准备",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(2)": "现场工作",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(2)":
        "自动化服务准备、流程意识和交接记录",
      ".certification-grid article:nth-child(3) .training-evidence dt:nth-of-type(3)": "证据",
      ".certification-grid article:nth-child(3) .training-evidence dd:nth-of-type(3)":
        "证书原件只在正式核验时提供",
      "#life .section-kicker": "生活",
      "#life-title": "生活里，我也喜欢把复杂事情理顺。",
      ".life-section .story-content > p:not(.section-kicker)":
        "生活部分刻意保持简短：展示一点节奏和好奇心，但不抢走工程履历的主线。",
      ".interests-section .section-kicker": "兴趣爱好",
      "#interests-title": "我喜欢的事情，很多也在影响我的思考方式。",
      ".interests-section .section-intro":
        "我的兴趣不算特别夸张，更多是一些能让我保持好奇、观察细节、整理信息和维持生活节奏的事情。它们看起来是生活爱好，但也会反过来影响我学习和工作的方式。",
      ".interest-grid article:nth-child(1) h3": "AI 工具和个人系统",
      ".interest-grid article:nth-child(1) p":
        "我喜欢尝试 AI 工具，用它们整理笔记、做计划、起草中英文内容、梳理文档结构，也优化自己的日常工作流。",
      ".interest-grid article:nth-child(2) h3": "摄影和视觉记录",
      ".interest-grid article:nth-child(2) p":
        "我会用照片记录地点、细节、空间和当时的状态。对我来说，照片不是只为了好看，也是一种整理记忆的方式。",
      ".interest-grid article:nth-child(3) h3": "旅行和城市观察",
      ".interest-grid article:nth-child(3) p":
        "我喜欢规划路线、比较不同地方，也喜欢走进一个城市的日常区域，看不同地方的人怎么生活。",
      ".interest-grid article:nth-child(4) h3": "阅读和长期学习",
      ".interest-grid article:nth-child(4) p":
        "我会持续关注工程、科技、医疗设备、AI、商业和实用知识。很多内容不会马上用上，但会慢慢改变判断方式。",
      ".interest-grid article:nth-child(5) h3": "食物、咖啡和日常节奏",
      ".interest-grid article:nth-child(5) p":
        "我也重视一些简单的日常：好好吃饭、喝杯咖啡、整理桌面、安排好一天，这些会让工作和生活都更稳定。",
      "#capabilities .section-kicker": "能力矩阵",
      "#capabilities-title": "我能在服务环境里承担什么。",
      "#capabilities .section-intro":
        "招聘方可以先看这一部分，快速判断我在设备服务、测试验证、记录、沟通、工具和雇佣检查材料方面是否匹配。",
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
      ".capability-row article:nth-child(6) span": "雇佣检查",
      ".capability-row article:nth-child(6) h3": "悉尼出行 + 私下核验证明",
      ".capability-row article:nth-child(6) p":
        "可支持悉尼现场出行，简历可下载，学历、培训、身份证明和 right-to-work 材料可在正式流程中提供。",
      "#contact .section-kicker": "联系",
      "#contact-title": "可以在这里联系我。",
      ".contact-inner > p:not(.section-kicker)":
        "如果你想了解我的工作经历、学习背景，或者有 biomedical / medical device field service 相关机会，可以直接发邮件给我。中文和英文都可以。",
      ".contact-actions-title": "可以继续聊医疗设备现场服务机会。",
      ".contact-actions-summary":
        "适合需要悉尼现场出行、医疗设备服务、验证记录和中英文沟通的岗位。",
      ".contact-email-action": "发邮件联系我",
      ".contact-resume-link": "PDF 简历",
      ".contact-docx-link": "DOCX 简历",
      ".contact-intake div:nth-child(1) strong": "岗位范围",
      ".contact-intake div:nth-child(1) span":
        "说明设备类型、服务环境、出行范围和开始时间。",
      ".contact-intake div:nth-child(2) strong": "需要核验",
      ".contact-intake div:nth-child(2) span":
        "需要时可私下索取学历、培训、身份、right-to-work 或 reference 材料。",
      ".contact-intake div:nth-child(3) strong": "下一步",
      ".contact-intake div:nth-child(3) span":
        "发送面试时间、岗位说明或技术筛选形式。",
      ".contact-actions-note":
        "学历、培训证书和雇佣检查材料只在正式需要时私下提供。",
    },
    html: {
      ".life-notes p:nth-child(1)":
        "<strong>悉尼生活</strong> 在工作、通勤、学习和日常安排之间，建立自己的节奏。",
      ".life-notes p:nth-child(2)":
        "<strong>持续学习</strong> 关注医疗技术、工程工具、AI 工具和真正能改善工作的做法。",
      ".life-notes p:nth-child(3)":
        "<strong>记录整理</strong> 喜欢把零散信息变成能复用的结构，让未来的自己少走弯路。",
    },
    attrs: {
      ".nav-resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".resume-docx-link": { "aria-label": "下载 Henry Yang DOCX 简历" },
      ".email-action": { "aria-label": "发邮件联系 Yihang Henry Yang" },
      ".github-action": { "aria-label": "打开 Yihang Yang GitHub 主页" },
      ".contact-email-action": { "aria-label": "发邮件联系 Yihang Henry Yang" },
      ".contact-resume-link": { "aria-label": "下载 Henry Yang PDF 简历" },
      ".contact-docx-link": { "aria-label": "下载 Henry Yang DOCX 简历" },
      ".contact-intake": { "aria-label": "招聘方邮件清单" },
      ".hero-action-path": { "aria-label": "招聘方行动路径" },
      ".fit-verdict": { "aria-label": "招聘方岗位匹配判断" },
      ".brief-grid": { "aria-label": "招聘方筛选快照" },
      ".overview-section": { "aria-label": "招聘方阅读路径" },
      ".overview-grid": { "aria-label": "招聘方阅读链接" },
      ".experience-evidence": { "aria-label": "当前现场服务证据" },
      ".experience-outcome": { "aria-label": "当前岗位服务结果摘要" },
      ".case-grid article:nth-child(1) .case-outcome": { "aria-label": "公开安全的案例结果" },
      ".case-grid article:nth-child(2) .case-outcome": { "aria-label": "公开安全的案例结果" },
      ".case-grid article:nth-child(3) .case-outcome": { "aria-label": "公开安全的案例结果" },
      ".certification-grid article:nth-child(1) .training-evidence": { "aria-label": "培训证书能力映射" },
      ".certification-grid article:nth-child(2) .training-evidence": { "aria-label": "培训证书能力映射" },
      ".certification-grid article:nth-child(3) .training-evidence": { "aria-label": "培训证书能力映射" },
    },
  },
};

const languageButtons = Array.from(document.querySelectorAll("[data-language-option]"));
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

  if (shouldStore) {
    setStoredLanguage(selected);
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption);
  });
});

applyLanguage("en", false);

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

const revealItems = Array.from(document.querySelectorAll(".reveal"));

const revealTarget = (target) => {
  if (target && target.classList.contains("reveal")) {
    target.classList.add("is-visible");
  }
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    revealTarget(document.querySelector(link.getAttribute("href")));
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

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
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
}

window.addEventListener("hashchange", () => {
  revealTarget(document.querySelector(window.location.hash));
});
