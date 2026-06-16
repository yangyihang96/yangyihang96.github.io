const yearTarget = document.querySelector("[data-current-year]");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const translations = {
  en: {
    lang: "en",
    title: "Yihang (Henry) Yang | Biomedical Field Service",
    description:
      "Personal website for Yihang (Henry) Yang, covering biomedical field service, medical device maintenance, testing, documentation, education, selected training records, personal moments, and contact details.",
    text: {
      ".site-nav a:nth-child(1)": "Work",
      ".site-nav a:nth-child(2)": "Experience",
      ".site-nav a:nth-child(3)": "Cases",
      ".site-nav a:nth-child(4)": "Process",
      ".site-nav a:nth-child(5)": "Education",
      ".site-nav a:nth-child(6)": "Life",
      ".site-nav a:nth-child(7)": "Contact",
      ".eyebrow": "Sydney · Biomedical Engineering · Field Service",
      ".hero-subtitle":
        "Sydney-based biomedical field service engineer focused on medical device maintenance, fault diagnosis, verification, and service documentation.",
      ".hero-meta div:nth-child(1) dt": "Base",
      ".hero-meta div:nth-child(1) dd": "Sydney, Australia",
      ".hero-meta div:nth-child(2) dt": "Focus",
      ".hero-meta div:nth-child(2) dd": "Medical device service",
      ".hero-meta div:nth-child(3) dt": "Languages",
      ".hero-meta div:nth-child(3) dd": "English / Mandarin",
      ".button.primary": "View Work",
      ".button.secondary": "Contact Me",
      ".statement-copy > p":
        "My work sits between equipment and information: understand the field condition, find the fault path, verify the result, and leave records that other people can actually reuse.",
      ".mini-facts span:nth-child(3)": "English / Mandarin",
      ".profile-panel > span": "Profile",
      ".profile-panel strong": "Biomedical field service engineer",
      ".profile-panel p":
        "Sydney based. Focused on medical device service, testing, documentation and clear handover.",
      ".profile-panel div:nth-child(1) dt": "Focus",
      ".profile-panel div:nth-child(1) dd": "Field service / workshop repair",
      ".profile-panel div:nth-child(2) dt": "Style",
      ".profile-panel div:nth-child(2) dd": "Evidence first, record clearly",
      ".brief-section .section-kicker": "Professional Brief",
      "#brief-title": "A practical engineering profile built around service reliability.",
      ".brief-section .section-intro":
        "My current work is close to the real operating environment of medical devices: equipment comes from hospitals, clinics, service calls, workshop repairs, scheduled work, and follow-up questions. I try to keep the technical judgement, communication, and written record aligned.",
      ".brief-grid article:nth-child(1) span": "Current role",
      ".brief-grid article:nth-child(1) h3": "Biomedical field service",
      ".brief-grid article:nth-child(1) p":
        "I support device maintenance, fault finding, repair, functional checks, performance verification, and service close-out. The work requires patience with detail and a practical sense of what can be confirmed on site.",
      ".brief-grid article:nth-child(2) span": "Working habit",
      ".brief-grid article:nth-child(2) h3": "Evidence before conclusion",
      ".brief-grid article:nth-child(2) p":
        "I prefer to record what was observed, what was tested, what changed, and what remains open. This makes technical decisions easier to review and reduces repeated work later.",
      ".brief-grid article:nth-child(3) span": "Direction",
      ".brief-grid article:nth-child(3) h3": "Service quality and systems thinking",
      ".brief-grid article:nth-child(3) p":
        "I am building a long-term path in biomedical engineering service, with interest in better service records, device reliability, process improvement, and practical tools that help teams work clearly.",
      ".overview-heading .section-kicker": "Overview",
      ".overview-heading h2": "This site answers five practical questions first.",
      ".overview-grid a:nth-child(1) strong": "Field Work",
      ".overview-grid a:nth-child(1) p":
        "How I work with real devices, real sites, and real service workflows.",
      ".overview-grid a:nth-child(2) strong": "Case Notes",
      ".overview-grid a:nth-child(2) p":
        "Public-safe examples of how I approach medical device service problems.",
      ".overview-grid a:nth-child(3) strong": "Process",
      ".overview-grid a:nth-child(3) p":
        "Observe, diagnose, verify, and document so service work can close cleanly.",
      ".overview-grid a:nth-child(4) strong": "Engineering Background",
      ".overview-grid a:nth-child(4) p":
        "Biomedical engineering training from the University of Sydney.",
      ".overview-grid a:nth-child(5) strong": "Life Rhythm",
      ".overview-grid a:nth-child(5) p":
        "How I keep learning, organizing, and building a steady direction outside work.",
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
      ".experience-timeline article:nth-child(1) span": "Jul 2023 - Present",
      ".experience-timeline article:nth-child(1) h3":
        "Biomedical Engineer | Nova Biomedical Pty Ltd",
      ".experience-timeline article:nth-child(1) .experience-meta":
        "Australia-wide field service / workshop support · Full-time, 38 hours per week",
      ".experience-timeline article:nth-child(1) li:nth-child(1)":
        "Perform field and workshop service for hospital and pharmacy medical equipment, including preventive maintenance, troubleshooting, repair, installation support, verification, and service follow-up.",
      ".experience-timeline article:nth-child(1) li:nth-child(2)":
        "Support ventilation, patient monitoring, ultrasound, DEXA, pharmacy automation, and general biomedical equipment work across service and documentation workflows.",
      ".experience-timeline article:nth-child(1) li:nth-child(3)":
        "Maintain Simpro work orders, service reports, serial details, equipment history, and customer updates for biomedical teams and internal engineers.",
      ".experience-timeline article:nth-child(2) span": "Dec 2019 - Feb 2020",
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
      ".case-grid article:nth-child(1) li:nth-child(1)": "Field condition check",
      ".case-grid article:nth-child(1) li:nth-child(2)": "Functional and performance testing",
      ".case-grid article:nth-child(1) li:nth-child(3)": "Service record close-out",
      ".case-grid article:nth-child(2) span": "02 / Fault diagnosis",
      ".case-grid article:nth-child(2) h3": "Turning user feedback into a verifiable judgement",
      ".case-grid article:nth-child(2) p":
        "When a fault is reported, I separate the symptom, use condition, repair history, and reproducible path before combining service manual steps, measurements, and replacement checks.",
      ".case-grid article:nth-child(2) li:nth-child(1)": "Fault symptom review",
      ".case-grid article:nth-child(2) li:nth-child(2)": "Test step documentation",
      ".case-grid article:nth-child(2) li:nth-child(3)": "Post-repair verification",
      ".case-grid article:nth-child(3) span": "03 / Documentation",
      ".case-grid article:nth-child(3) h3": "Keeping service information reusable",
      ".case-grid article:nth-child(3) p":
        "I align serial details, work orders, service reports, parts/actions, and customer updates so service knowledge is not trapped in memory and can support later troubleshooting.",
      ".case-grid article:nth-child(3) li:nth-child(1)": "Equipment history cleanup",
      ".case-grid article:nth-child(3) li:nth-child(2)": "Work order alignment",
      ".case-grid article:nth-child(3) li:nth-child(3)": "Clear customer updates",
      ".case-grid article:nth-child(4) span": "04 / Communication",
      ".case-grid article:nth-child(4) h3": "Making technical limits understandable",
      ".case-grid article:nth-child(4) p":
        "Some service situations are not solved by one replacement or one visit. I try to explain what is known, what is not yet confirmed, and what needs follow-up without making the record vague.",
      ".case-grid article:nth-child(4) li:nth-child(1)": "Known issue summary",
      ".case-grid article:nth-child(4) li:nth-child(2)": "Follow-up boundary",
      ".case-grid article:nth-child(4) li:nth-child(3)": "Plain service language",
      ".case-grid article:nth-child(5) span": "05 / Workshop control",
      ".case-grid article:nth-child(5) h3": "Keeping bench work traceable",
      ".case-grid article:nth-child(5) p":
        "Workshop repair needs a different discipline from field work. The device can be tested more deeply, but parts, observations, and return status still need to stay traceable.",
      ".case-grid article:nth-child(5) li:nth-child(1)": "Bench test notes",
      ".case-grid article:nth-child(5) li:nth-child(2)": "Parts/action traceability",
      ".case-grid article:nth-child(5) li:nth-child(3)": "Return condition check",
      ".case-grid article:nth-child(6) span": "06 / Improvement",
      ".case-grid article:nth-child(6) h3": "Learning from repeated patterns",
      ".case-grid article:nth-child(6) p":
        "When similar issues appear repeatedly, the useful question is not only how to fix this case, but what record, checklist, or communication habit would prevent confusion next time.",
      ".case-grid article:nth-child(6) li:nth-child(1)": "Pattern recognition",
      ".case-grid article:nth-child(6) li:nth-child(2)": "Checklist refinement",
      ".case-grid article:nth-child(6) li:nth-child(3)": "Reusable service knowledge",
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
        "Focused on biomedical engineering research, experimental planning, and technical documentation. It trained me to separate hypotheses, evidence, and conclusions.",
      ".study-grid article:nth-child(2) p:nth-of-type(2)":
        "Studied medical science, biomedical design, data analysis, and engineering design tools, building the foundation for how I understand devices, workflows, and data.",
      ".study-grid article:nth-child(3) span": "MPhil thesis",
      ".study-grid article:nth-child(3) h3":
        "Flexible Electrodes for Smart Bandages: Feasibility Exploration",
      ".study-grid article:nth-child(3) p":
        "Explored flexible electrode design for wearable health-monitoring and therapeutic devices, including micro-perforated structures, silver ink, z-conductive electrodes, and impedance measurement. Earlier academic work included a cochlear implant electrode impedance study and a hospital-linked controllable blood pumping simulation.",
      ".study-grid article:nth-child(4) span": "Research discipline",
      ".study-grid article:nth-child(4) h3": "Separating evidence from assumption",
      ".study-grid article:nth-child(4) p":
        "Research training makes me more careful about what can actually be claimed. That habit carries into service work: describe the evidence, then state the judgement.",
      ".study-grid article:nth-child(5) span": "Technical writing",
      ".study-grid article:nth-child(5) h3": "Making complex work readable",
      ".study-grid article:nth-child(5) p":
        "I value records that can be read by someone who was not present. A good technical note should reduce ambiguity, not add more work for the next person.",
      ".study-grid article:nth-child(6) span": "Applied tools",
      ".study-grid article:nth-child(6) h3": "Using tools to organize work",
      ".study-grid article:nth-child(6) p":
        "Engineering tools, spreadsheets, diagrams, service manuals, and AI-assisted organization help me turn scattered details into clearer decisions and repeatable workflows.",
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
      ".certification-grid article:nth-child(1) li:nth-child(3)": "Avalon FM20 / FM30 and Efficia CM series training",
      ".certification-grid article:nth-child(1) li:nth-child(4)": "HeartStart Intrepid monitor defibrillator service training",
      ".certification-grid article:nth-child(2) span": "2023 - 2025",
      ".certification-grid article:nth-child(2) h3": "Imaging and diagnostic equipment",
      ".certification-grid article:nth-child(2) li:nth-child(1)": "EPIQ / Affiniti and CX30 / CX50 ultrasound training",
      ".certification-grid article:nth-child(2) li:nth-child(2)": "Horizon DEXA technical training",
      ".certification-grid article:nth-child(2) li:nth-child(3)": "X-ray service and installation course",
      ".certification-grid article:nth-child(2) li:nth-child(4)": "Technical checks, safe handover, and support records",
      ".certification-grid article:nth-child(3) span": "2024",
      ".certification-grid article:nth-child(3) h3": "Automation and specialty systems",
      ".certification-grid article:nth-child(3) li:nth-child(1)": "BD FIX100 dispensing service basic training",
      ".certification-grid article:nth-child(3) li:nth-child(2)": "Vendor-led practical service preparation",
      ".certification-grid article:nth-child(3) li:nth-child(3)": "Fault finding, service readiness, and documentation",
      ".certification-grid article:nth-child(3) li:nth-child(4)": "Original certificates available for private verification",
      ".certification-grid article:nth-child(4) span": "Public boundary",
      ".certification-grid article:nth-child(4) h3": "Proof without exposing documents",
      ".certification-grid article:nth-child(4) p":
        "For a public website, the right level is the training scope and credential context. Full scans, document IDs, and certificate numbers should only be shared in a formal verification process.",
      "#life .section-kicker": "Life",
      "#life-title": "Outside work, I keep practicing how to organize complex things.",
      ".life-section .story-content > p:not(.section-kicker)":
        "Outside work, I like turning scattered information into clear structure: files, plans, daily routines, travel, and study notes are different versions of the same habit. This website can grow from a personal card into a fuller personal space.",
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
      ".moments-section .section-kicker": "Personal Moments",
      "#moments-title": "A few real photos from life outside work.",
      ".moments-section .section-intro":
        "These images come from my local photo library. I keep the captions broad: enough to make the site personal, without naming other people or exposing private details.",
      ".moments-grid figure:nth-child(1) strong": "A small personal milestone",
      ".moments-grid figure:nth-child(1) span":
        "A quiet reminder that life needs records of people and moments, not only work tasks.",
      ".moments-grid figure:nth-child(2) strong": "Travel and open space",
      ".moments-grid figure:nth-child(2) span":
        "I like places that create room to think, walk, and reset.",
      ".moments-grid figure:nth-child(3) strong": "Learning through places",
      ".moments-grid figure:nth-child(3) span":
        "Visiting public spaces makes me notice how systems, layout, and people meet.",
      ".moments-grid figure:nth-child(4) strong": "Sydney coast rhythm",
      ".moments-grid figure:nth-child(4) span":
        "Coastal walks help me keep the site connected to real life in Australia.",
      ".moments-grid figure:nth-child(5) strong": "Weather and real life",
      ".moments-grid figure:nth-child(5) span":
        "Not every good memory needs perfect weather. Some days feel more real because they are unplanned.",
      ".moments-grid figure:nth-child(6) strong": "Small travel stops",
      ".moments-grid figure:nth-child(6) span":
        "The pauses between destinations often become the photos I remember most clearly.",
      ".moments-grid figure:nth-child(7) strong": "Walking and noticing",
      ".moments-grid figure:nth-child(7) span":
        "I like photos that keep a place, a route, and a small feeling together.",
      ".moments-grid figure:nth-child(8) strong": "Seeing public systems",
      ".moments-grid figure:nth-child(8) span":
        "Visits like this make me pay attention to how people, space, and process work together.",
      ".moments-grid figure:nth-child(9) strong": "Another civic view",
      ".moments-grid figure:nth-child(9) span":
        "Keeping more than one frame helps the site feel lived-in rather than staged.",
      ".moments-grid figure:nth-child(10) strong": "Coastline memory",
      ".moments-grid figure:nth-child(10) span":
        "A clearer personal photo from the coast, with the place and people both visible.",
      ".family-section .section-kicker": "Family Moments",
      "#family-title": "Family photos are part of the story, but kept carefully public.",
      ".family-section .section-intro":
        "I selected travel and public-place photos rather than documents, private records, addresses, or sensitive family paperwork. The captions stay broad on purpose.",
      ".family-grid figure:nth-child(1) strong": "Family visit in Sydney",
      ".family-grid figure:nth-child(1) span":
        "A public travel photo that keeps family support connected to life in Australia.",
      ".family-grid figure:nth-child(2) strong": "Travel with family",
      ".family-grid figure:nth-child(2) span":
        "Shared trips are one way to remember where I come from and who has supported the long path.",
      ".family-grid figure:nth-child(3) strong": "Public-place memory",
      ".family-grid figure:nth-child(3) span":
        "A family travel moment kept broad, with names and private details left out.",
      ".family-grid figure:nth-child(4) strong": "Travel as a family record",
      ".family-grid figure:nth-child(4) span":
        "A wider travel photo that keeps the place and the family memory in the same frame.",
      ".family-grid figure:nth-child(5) strong": "Closer family frame",
      ".family-grid figure:nth-child(5) span":
        "A more direct family photo, still kept public-safe with no names or private context.",
      ".family-grid figure:nth-child(6) strong": "Another Sydney family day",
      ".family-grid figure:nth-child(6) span":
        "Some places are worth keeping from more than one angle because the memory belongs to the visit.",
      "#capabilities .section-kicker": "Capabilities",
      "#capabilities-title": "What I can handle",
      "#capabilities .section-intro":
        "This section works as a capability index so people can quickly judge whether my background fits a relevant opportunity.",
      ".capability-row article:nth-child(1) h3": "Service",
      ".capability-row article:nth-child(1) p":
        "Field PM, troubleshooting, repair, installation support, bench service, pre/post checks, and close-out.",
      ".capability-row article:nth-child(2) h3": "Testing",
      ".capability-row article:nth-child(2) p":
        "Electrical safety, performance checks, functional testing, and test records that can be reviewed later.",
      ".capability-row article:nth-child(3) h3": "Communication",
      ".capability-row article:nth-child(3) p":
        "Aligning field information, limits, and next steps with clinical users, biomedical teams, vendors, and internal engineers.",
      ".capability-row article:nth-child(4) h3": "Tools",
      ".capability-row article:nth-child(4) p":
        "Excel, Microsoft Office, MATLAB, SolidWorks, Visio, service manuals, vendor tools, and AI-assisted information organization.",
      ".capability-row article:nth-child(5) h3": "Records",
      ".capability-row article:nth-child(5) p":
        "Work orders, service reports, equipment history, serial details, action logs, and concise follow-up notes.",
      ".capability-row article:nth-child(6) h3": "Judgement",
      ".capability-row article:nth-child(6) p":
        "Separating observed facts, likely causes, verified results, and remaining uncertainty so decisions stay reviewable.",
      ".capability-row article:nth-child(7) h3": "Reliability",
      ".capability-row article:nth-child(7) p":
        "Thinking beyond one repair: repeatability, handover quality, service readiness, and clearer future troubleshooting.",
      ".capability-row article:nth-child(8) h3": "Growth",
      ".capability-row article:nth-child(8) p":
        "Continuing to build stronger biomedical engineering judgement, technical writing, and practical process improvement skills.",
      ".capability-row article:nth-child(9) h3": "AI Workflow",
      ".capability-row article:nth-child(9) p":
        "Using AI tools to organize technical references, draft bilingual notes, build checklists, structure service records, and speed up document preparation while verifying final judgement against manuals, test results, and real device evidence.",
      "#gallery .section-kicker": "Visual Notes",
      "#gallery-title": "The site keeps some work context and personal warmth.",
      "#gallery .section-intro":
        "The images are not resume attachments. They help people feel the working style and personal rhythm faster.",
      ".gallery-grid figure:nth-child(1) figcaption": "Field judgement",
      ".gallery-grid figure:nth-child(2) figcaption": "Repair verification",
      ".gallery-grid figure:nth-child(3) figcaption": "Continuous learning",
      "#contact .section-kicker": "Contact",
      "#contact-title": "You can reach me here.",
      ".contact-inner > p:not(.section-kicker)":
        "If you want to know more about my work experience, education, or a biomedical / medical device field service opportunity, email me. English and Mandarin are both fine.",
    },
    html: {
      ".life-notes p:nth-child(1)":
        "<strong>Sydney life</strong> Building a sustainable rhythm across work, commuting, study, and daily planning.",
      ".life-notes p:nth-child(2)":
        "<strong>Continuous learning</strong> Following medical technology, engineering tools, AI tools, and practical ways to improve work.",
      ".life-notes p:nth-child(3)":
        "<strong>Organized records</strong> Turning scattered information into reusable structure so future work is easier.",
      ".life-notes p:nth-child(4)":
        "<strong>Practical mindset</strong> I like work that becomes clearer after it is touched: a cleaner file, a better note, a more reliable checklist, or a simpler handover.",
      ".life-notes p:nth-child(5)":
        "<strong>Long-term direction</strong> I want this site to grow into a professional home for engineering experience, selected notes, and future project writing.",
    },
  },
  zh: {
    lang: "zh-CN",
    title: "Yihang (Henry) Yang | 医疗设备现场服务",
    description:
      "Yihang (Henry) Yang 的个人网站，记录医疗设备现场服务、测试验证、工程背景、培训证书、生活照片和联系方式。",
    text: {
      ".site-nav a:nth-child(1)": "工作",
      ".site-nav a:nth-child(2)": "经历",
      ".site-nav a:nth-child(3)": "案例",
      ".site-nav a:nth-child(4)": "流程",
      ".site-nav a:nth-child(5)": "背景",
      ".site-nav a:nth-child(6)": "生活",
      ".site-nav a:nth-child(7)": "联系",
      ".eyebrow": "悉尼 · 生物医学工程 · 现场服务",
      ".hero-subtitle":
        "我在悉尼做医疗设备现场服务，关注的不只是把设备修好，而是把现场判断、测试验证和服务记录做成可交接的闭环。",
      ".hero-meta div:nth-child(1) dt": "地点",
      ".hero-meta div:nth-child(1) dd": "澳大利亚悉尼",
      ".hero-meta div:nth-child(2) dt": "重点",
      ".hero-meta div:nth-child(2) dd": "医疗设备服务",
      ".hero-meta div:nth-child(3) dt": "语言",
      ".hero-meta div:nth-child(3) dd": "英文 / 中文",
      ".button.primary": "看工作方式",
      ".button.secondary": "联系我",
      ".statement-copy > p":
        "做现场服务时，我最在意两件事：设备现在到底是什么状态，以及这次处理以后，下一位接手的人能不能看懂发生了什么。",
      ".mini-facts span:nth-child(3)": "英文 / 中文",
      ".profile-panel > span": "个人概览",
      ".profile-panel strong": "生物医学现场服务工程师",
      ".profile-panel p":
        "常驻悉尼，长期和医疗设备、测试流程、服务记录打交道。",
      ".profile-panel div:nth-child(1) dt": "重点",
      ".profile-panel div:nth-child(1) dd": "现场服务 / workshop repair",
      ".profile-panel div:nth-child(2) dt": "风格",
      ".profile-panel div:nth-child(2) dd": "先核对事实，再下判断",
      ".brief-section .section-kicker": "职业简介",
      "#brief-title": "我的定位：把医疗设备服务做得可靠、清楚、可交接。",
      ".brief-section .section-intro":
        "我现在的工作很靠近医疗设备真实使用现场：有医院和诊所的设备，有现场电话，有 workshop repair，有计划性维护，也有后续追问。越是这种环境，越需要把技术判断、沟通和文字记录放在同一条线上。",
      ".brief-grid article:nth-child(1) span": "当前工作",
      ".brief-grid article:nth-child(1) h3": "医疗设备现场服务",
      ".brief-grid article:nth-child(1) p":
        "我的工作包括设备维护、故障排查、维修、功能检查、性能验证和服务 close-out。它需要对细节有耐心，也需要知道现场到底能确认到什么程度。",
      ".brief-grid article:nth-child(2) span": "做事习惯",
      ".brief-grid article:nth-child(2) h3": "先有证据，再下结论",
      ".brief-grid article:nth-child(2) p":
        "我更愿意把观察到的现象、做过的测试、发生的变化和仍然没确认的部分写清楚。这样技术判断后面才有人能复查，也能减少重复劳动。",
      ".brief-grid article:nth-child(3) span": "长期方向",
      ".brief-grid article:nth-child(3) h3": "服务质量和系统化能力",
      ".brief-grid article:nth-child(3) p":
        "我希望长期在 biomedical engineering service 方向发展，持续关注服务记录、设备可靠性、流程改进，以及能让团队工作更清楚的实用工具。",
      ".overview-heading .section-kicker": "概览",
      ".overview-heading h2": "先让你快速知道我是谁、做什么、怎么工作。",
      ".overview-grid a:nth-child(1) strong": "工作现场",
      ".overview-grid a:nth-child(1) p": "我主要和医疗设备现场服务、维修验证、服务记录打交道。",
      ".overview-grid a:nth-child(2) strong": "服务案例",
      ".overview-grid a:nth-child(2) p": "不暴露客户和内部资料，只讲我处理问题的方法。",
      ".overview-grid a:nth-child(3) strong": "处理流程",
      ".overview-grid a:nth-child(3) p": "我怎么从现场现象走到验证结果。",
      ".overview-grid a:nth-child(4) strong": "工程背景",
      ".overview-grid a:nth-child(4) p":
        "工程训练如何影响我的判断方式。",
      ".overview-grid a:nth-child(5) strong": "生活节奏",
      ".overview-grid a:nth-child(5) p":
        "工作之外的整理习惯和学习节奏。",
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
      ".experience-timeline article:nth-child(1) span": "2023 年 7 月 - 至今",
      ".experience-timeline article:nth-child(1) h3":
        "Biomedical Engineer | Nova Biomedical Pty Ltd",
      ".experience-timeline article:nth-child(1) .experience-meta":
        "澳大利亚范围现场服务 / workshop support · 全职，每周 38 小时",
      ".experience-timeline article:nth-child(1) li:nth-child(1)":
        "为医院和药房医疗设备提供现场和 workshop 服务，包括 preventive maintenance、故障排查、维修、安装支持、验证和后续跟进。",
      ".experience-timeline article:nth-child(1) li:nth-child(2)":
        "服务范围覆盖 ventilation、patient monitoring、ultrasound、DEXA、pharmacy automation 和通用 biomedical equipment，并配套完成记录流程。",
      ".experience-timeline article:nth-child(1) li:nth-child(3)":
        "维护 Simpro 工单、service reports、serial details、equipment history 和 customer updates，支持 biomedical teams 和内部工程师交接。",
      ".experience-timeline article:nth-child(2) span": "2019 年 12 月 - 2020 年 2 月",
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
      ".case-grid article:nth-child(1) li:nth-child(1)": "现场状态确认",
      ".case-grid article:nth-child(1) li:nth-child(2)": "功能与性能检查",
      ".case-grid article:nth-child(1) li:nth-child(3)": "服务记录 close-out",
      ".case-grid article:nth-child(2) span": "02 / 故障诊断",
      ".case-grid article:nth-child(2) h3": "先把故障描述变成可验证的问题",
      ".case-grid article:nth-child(2) p":
        "面对用户反馈，我不会一开始就猜原因。我会先拆出现象、使用场景、历史维修和可复现条件，再结合 service manual、测量结果和替换验证去收窄判断。",
      ".case-grid article:nth-child(2) li:nth-child(1)": "故障现象复核",
      ".case-grid article:nth-child(2) li:nth-child(2)": "测试步骤记录",
      ".case-grid article:nth-child(2) li:nth-child(3)": "维修后验证",
      ".case-grid article:nth-child(3) span": "03 / 服务记录",
      ".case-grid article:nth-child(3) h3": "记录写清楚，后面才接得住",
      ".case-grid article:nth-child(3) p":
        "服务结束以后，信息不能只留在记忆里。我会把 serial、work order、service report、parts/action 和 customer update 对齐，让后续排查和交接有依据。",
      ".case-grid article:nth-child(3) li:nth-child(1)": "设备历史整理",
      ".case-grid article:nth-child(3) li:nth-child(2)": "工单信息对齐",
      ".case-grid article:nth-child(3) li:nth-child(3)": "客户更新清晰",
      ".case-grid article:nth-child(4) span": "04 / 沟通",
      ".case-grid article:nth-child(4) h3": "把技术限制讲清楚",
      ".case-grid article:nth-child(4) p":
        "有些服务情况不是一次更换或一次上门就能完全结束。我会尽量把已知信息、还没确认的部分和需要跟进的边界写明白，而不是只留下模糊描述。",
      ".case-grid article:nth-child(4) li:nth-child(1)": "已知问题总结",
      ".case-grid article:nth-child(4) li:nth-child(2)": "后续边界说明",
      ".case-grid article:nth-child(4) li:nth-child(3)": "服务语言清楚",
      ".case-grid article:nth-child(5) span": "05 / 维修控制",
      ".case-grid article:nth-child(5) h3": "让 bench work 可追踪",
      ".case-grid article:nth-child(5) p":
        "Workshop repair 和现场服务不一样，可以做更深入的检查，但 parts、observations 和 return condition 依然要能追溯。",
      ".case-grid article:nth-child(5) li:nth-child(1)": "Bench test notes",
      ".case-grid article:nth-child(5) li:nth-child(2)": "Parts/action 追踪",
      ".case-grid article:nth-child(5) li:nth-child(3)": "Return condition check",
      ".case-grid article:nth-child(6) span": "06 / 改进",
      ".case-grid article:nth-child(6) h3": "从重复问题里整理经验",
      ".case-grid article:nth-child(6) p":
        "如果类似问题反复出现，我会想的不只是这一次怎么修，而是什么记录、checklist 或沟通习惯能减少下一次的混乱。",
      ".case-grid article:nth-child(6) li:nth-child(1)": "识别重复模式",
      ".case-grid article:nth-child(6) li:nth-child(2)": "优化检查清单",
      ".case-grid article:nth-child(6) li:nth-child(3)": "沉淀可复用经验",
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
        "研究训练让我更习惯把问题拆成假设、证据和结论，而不是只停留在感觉上。",
      ".study-grid article:nth-child(2) p:nth-of-type(2)":
        "medical science、biomedical design、data analysis 和 engineering design tools，是我理解设备、流程和数据的基础。",
      ".study-grid article:nth-child(3) span": "MPhil 论文题目",
      ".study-grid article:nth-child(3) h3":
        "Flexible Electrodes for Smart Bandages: Feasibility Exploration",
      ".study-grid article:nth-child(3) p":
        "围绕用于 wearable health-monitoring 和 therapeutic devices 的柔性电极设计，探索 micro-perforated structures、silver ink、z-conductive electrodes 和 impedance measurement。早期学术项目还包括 cochlear implant electrode impedance study 和 hospital-linked controllable blood pumping simulation。",
      ".study-grid article:nth-child(4) span": "研究训练",
      ".study-grid article:nth-child(4) h3": "把证据和假设分开",
      ".study-grid article:nth-child(4) p":
        "研究训练让我更谨慎地判断什么能说、什么还不能说。这个习惯也会带到服务工作里：先描述证据，再写结论。",
      ".study-grid article:nth-child(5) span": "技术写作",
      ".study-grid article:nth-child(5) h3": "让复杂工作变得可读",
      ".study-grid article:nth-child(5) p":
        "我很重视让不在现场的人也能看懂记录。好的技术记录应该减少歧义，而不是给下一位接手的人增加负担。",
      ".study-grid article:nth-child(6) span": "应用工具",
      ".study-grid article:nth-child(6) h3": "用工具整理工作",
      ".study-grid article:nth-child(6) p":
        "工程工具、表格、流程图、service manuals 和 AI 辅助整理，都能帮我把零散信息变成更清楚的判断和流程。",
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
      ".certification-grid article:nth-child(1) li:nth-child(3)": "Avalon FM20 / FM30 和 Efficia CM 系列培训",
      ".certification-grid article:nth-child(1) li:nth-child(4)": "HeartStart Intrepid monitor defibrillator service training",
      ".certification-grid article:nth-child(2) span": "2023 - 2025",
      ".certification-grid article:nth-child(2) h3": "影像与诊断设备",
      ".certification-grid article:nth-child(2) li:nth-child(1)": "EPIQ / Affiniti 和 CX30 / CX50 ultrasound training",
      ".certification-grid article:nth-child(2) li:nth-child(2)": "Horizon DEXA technical training",
      ".certification-grid article:nth-child(2) li:nth-child(3)": "X-ray service and installation course",
      ".certification-grid article:nth-child(2) li:nth-child(4)": "技术检查、安全交接和支持记录",
      ".certification-grid article:nth-child(3) span": "2024",
      ".certification-grid article:nth-child(3) h3": "自动化与专项系统",
      ".certification-grid article:nth-child(3) li:nth-child(1)": "BD FIX100 dispensing service basic training",
      ".certification-grid article:nth-child(3) li:nth-child(2)": "厂商技术培训和服务准备",
      ".certification-grid article:nth-child(3) li:nth-child(3)": "故障排查、服务准备度和记录整理",
      ".certification-grid article:nth-child(3) li:nth-child(4)": "证书原件可在正式核验时单独提供",
      ".certification-grid article:nth-child(4) span": "公开边界",
      ".certification-grid article:nth-child(4) h3": "证明能力，但不暴露文件",
      ".certification-grid article:nth-child(4) p":
        "个人网站适合展示培训方向和能力范围。完整扫描件、证书编号和核验信息，应只在求职、项目或正式背景核验流程中提供。",
      "#life .section-kicker": "生活",
      "#life-title": "生活里，我也喜欢把复杂事情理顺。",
      ".life-section .story-content > p:not(.section-kicker)":
        "工作之外，我也会整理文件、计划、日常安排、旅行和学习笔记。对我来说，这些事情背后是同一种能力：把分散的信息变成以后还能用的结构。",
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
      ".moments-section .section-kicker": "生活合影",
      "#moments-title": "放几张真实生活照，让网站不只是简历。",
      ".moments-section .section-intro":
        "这些照片来自本地相册。我没有在说明里写别人的姓名，也不展示太私密的细节，只保留能让页面更有人味的生活片段。",
      ".moments-grid figure:nth-child(1) strong": "一个小小的生活节点",
      ".moments-grid figure:nth-child(1) span":
        "有些照片不是为了证明什么，只是提醒自己生活里也有值得认真保存的时刻。",
      ".moments-grid figure:nth-child(2) strong": "走到开阔的地方",
      ".moments-grid figure:nth-child(2) span":
        "我喜欢去能看见天空和路的地方，走一走，也让脑子从工作里松出来。",
      ".moments-grid figure:nth-child(3) strong": "在公共空间里观察城市",
      ".moments-grid figure:nth-child(3) span":
        "参观公共建筑和城市空间时，我会留意布局、秩序和人的使用方式。",
      ".moments-grid figure:nth-child(4) strong": "海边和悉尼生活",
      ".moments-grid figure:nth-child(4) span":
        "海边散步是悉尼生活里很真实的一部分，也让这个网站不只停留在职业介绍。",
      ".moments-grid figure:nth-child(5) strong": "天气不完美，也是真实生活",
      ".moments-grid figure:nth-child(5) span":
        "不是每张好照片都需要天气很好。有些照片因为随意，反而更像真实生活。",
      ".moments-grid figure:nth-child(6) strong": "路上的停顿",
      ".moments-grid figure:nth-child(6) span":
        "旅行里很多记忆不是目的地，而是中间停下来的那几分钟。",
      ".moments-grid figure:nth-child(7) strong": "边走边看",
      ".moments-grid figure:nth-child(7) span":
        "我喜欢能把地点、路线和当时感受一起留下来的照片。",
      ".moments-grid figure:nth-child(8) strong": "观察公共空间",
      ".moments-grid figure:nth-child(8) span":
        "参观这类空间时，我会留意人、空间和流程是怎么配合的。",
      ".moments-grid figure:nth-child(9) strong": "多留一个公共空间角度",
      ".moments-grid figure:nth-child(9) span":
        "多放一张真实照片，会比只放一张精选照更像个人网站。",
      ".moments-grid figure:nth-child(10) strong": "海岸线记忆",
      ".moments-grid figure:nth-child(10) span":
        "这张照片里人和地点都更清楚，适合作为生活照片的一部分。",
      ".family-section .section-kicker": "家庭照片",
      "#family-title": "家庭照片也可以放，但要放得克制。",
      ".family-section .section-intro":
        "我选的是出游和公共场景照片，没有放证件、住址、家庭材料或太私密的画面。说明文字也会刻意写得宽一点，不写家人的姓名和具体身份细节。",
      ".family-grid figure:nth-child(1) strong": "家人来悉尼",
      ".family-grid figure:nth-child(1) span":
        "这类照片能把澳洲生活和家人的支持放在一起，比单纯写经历更真实。",
      ".family-grid figure:nth-child(2) strong": "和家人一起出行",
      ".family-grid figure:nth-child(2) span":
        "家庭出游不一定要写得很重，但它会提醒我自己从哪里来，也是谁一直在支持。",
      ".family-grid figure:nth-child(3) strong": "公共空间里的家庭记忆",
      ".family-grid figure:nth-child(3) span":
        "只保留公开场景和大致记忆，不把家人的私人信息放到网页上。",
      ".family-grid figure:nth-child(4) strong": "把地点也留下来",
      ".family-grid figure:nth-child(4) span":
        "这类照片不只是合影，也能记住当时去了哪里。",
      ".family-grid figure:nth-child(5) strong": "更近一点的家庭合影",
      ".family-grid figure:nth-child(5) span":
        "照片可以更直接，但说明里仍然不放家人的姓名和私人背景。",
      ".family-grid figure:nth-child(6) strong": "另一张悉尼家庭日",
      ".family-grid figure:nth-child(6) span":
        "同一个地方从不同角度看，也是在记录那次家人来访。",
      "#capabilities .section-kicker": "能力",
      "#capabilities-title": "我能独立承担的部分",
      "#capabilities .section-intro":
        "如果你只想快速判断我能做什么，可以先看这一部分。",
      ".capability-row article:nth-child(1) h3": "服务",
      ".capability-row article:nth-child(1) p":
        "现场 PM、故障排查、维修、安装支持、bench service，以及完成前后的确认和 close-out。",
      ".capability-row article:nth-child(2) h3": "测试",
      ".capability-row article:nth-child(2) p":
        "按流程做 electrical safety、performance check、functional test，并把测试结果写成后续能复查的记录。",
      ".capability-row article:nth-child(3) h3": "沟通",
      ".capability-row article:nth-child(3) p":
        "和临床用户、医院 biomedical team、vendor、内部工程师对齐现场信息、限制条件和下一步。",
      ".capability-row article:nth-child(4) h3": "工具",
      ".capability-row article:nth-child(4) p":
        "使用 Excel、Microsoft Office、MATLAB、SolidWorks、Visio、service manuals 和 vendor tools，也会用 AI 工具整理复杂资料。",
      ".capability-row article:nth-child(5) h3": "记录",
      ".capability-row article:nth-child(5) p":
        "处理 work orders、service reports、equipment history、serial details、action logs 和简洁的 follow-up notes。",
      ".capability-row article:nth-child(6) h3": "判断",
      ".capability-row article:nth-child(6) p":
        "把观察事实、可能原因、验证结果和仍未确认的部分分开，让判断以后还能复查。",
      ".capability-row article:nth-child(7) h3": "可靠性",
      ".capability-row article:nth-child(7) p":
        "不只看一次维修，也关注重复性、交接质量、服务准备度和以后排查是否更清楚。",
      ".capability-row article:nth-child(8) h3": "成长",
      ".capability-row article:nth-child(8) p":
        "继续提高 biomedical engineering judgement、technical writing 和实际流程改进能力。",
      ".capability-row article:nth-child(9) h3": "AI 工作流",
      ".capability-row article:nth-child(9) p":
        "使用 AI 工具整理技术资料、起草中英文笔记、生成 checklist、结构化服务记录，并提高文档准备效率；但最终判断仍以 service manual、测试结果和真实设备证据为准。",
      "#gallery .section-kicker": "视觉",
      "#gallery-title": "我希望这个网站有专业感，也有一点生活感。",
      "#gallery .section-intro":
        "图片不是简历附件，而是让页面不只有文字，也能更快传达我的工作方式和日常节奏。",
      ".gallery-grid figure:nth-child(1) figcaption": "现场判断",
      ".gallery-grid figure:nth-child(2) figcaption": "维修验证",
      ".gallery-grid figure:nth-child(3) figcaption": "持续学习",
      "#contact .section-kicker": "联系",
      "#contact-title": "可以在这里联系我。",
      ".contact-inner > p:not(.section-kicker)":
        "如果你想了解我的工作经历、学习背景，或者有 biomedical / medical device field service 相关机会，可以直接发邮件给我。中文和英文都可以。",
    },
    html: {
      ".life-notes p:nth-child(1)":
        "<strong>悉尼生活</strong> 在工作、通勤、学习和日常安排之间，建立自己的节奏。",
      ".life-notes p:nth-child(2)":
        "<strong>持续学习</strong> 关注医疗技术、工程工具、AI 工具和真正能改善工作的做法。",
      ".life-notes p:nth-child(3)":
        "<strong>记录整理</strong> 喜欢把零散信息变成能复用的结构，让未来的自己少走弯路。",
      ".life-notes p:nth-child(4)":
        "<strong>实际感</strong> 我喜欢把事情处理到更清楚：文件更干净、笔记更可读、清单更可靠、交接更简单。",
      ".life-notes p:nth-child(5)":
        "<strong>长期方向</strong> 希望这个网站以后不只是名片，也能放下工程经历、精选笔记和更完整的项目记录。",
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
