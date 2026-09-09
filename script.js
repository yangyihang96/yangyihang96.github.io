"use strict";
document.documentElement.classList.add("js-ready");

const recruiterEmailAddress = "yangyihang96@gmail.com";
const textTargets = Array.from(document.querySelectorAll("[data-i18n]"));
const englishText = Object.fromEntries(textTargets.map(node => [node.dataset.i18n, node.textContent]));
const translations = {
  en: {
    lang: "en",
    title: "Yihang (Henry) Yang | Biomedical Field Service Engineer in Sydney",
    description: "Biomedical field service, thoughtful problem-solving and practical AI workflows. Meet Sydney-based engineer Yihang (Henry) Yang.",
    text: englishText,
    menu: { open: "Open navigation", close: "Close navigation" },
    copyEmail: { default: "Copy email", copied: "Email copied", failed: "Copy failed — use the email link" },
    platformLabel: "Equipment platforms"
  },
  zh: {
    lang: "zh-CN",
    title: "杨颐航 Henry Yang | 悉尼医疗设备现场服务工程师",
    description: "医疗设备现场服务、严谨排障与实用 AI 工作方法。了解在悉尼工作的工程师杨颐航。",
    text: {
  "navService": "排障笔记",
  "navEducation": "教育",
  "philipsArtCaption": "图示：Philips Respironics V60",
  "bdArtCaption": "图示：BD Rowa Vmax",
  "corpulsArtCaption": "图示：corpuls3 modules",
  "hologicArtCaption": "图示：Hologic Horizon DXA",
  "philipsCategory": "呼吸机",
  "equipmentLabel": "设备范围",
  "philipsEquipment0": "V60 / V60 Plus",
  "philipsEquipment1": "Trilogy 202 / Trilogy Evo",
  "serviceContext": "服务经历",
  "philipsScope": "V60 现场变更实施、预防性维护、功能验证与服务报告。",
  "bdCategory": "药品管理 / 药房自动化",
  "bdEquipment0": "Pyxis MedStation / PAS ES",
  "bdEquipment1": "Rowa Vmax / Rowa Smart / ProLog",
  "bdScope": "Rowa Vmax 与 ProLog 预防性维护、药房现场服务、故障记录及交接。",
  "corpulsCategory": "监护 / 除颤",
  "corpulsEquipment0": "corpuls3 modular monitor-defibrillator",
  "corpulsScope": "设备更换与软件升级实施、车间准备、完成情况追踪及服务交接。",
  "hologicCategory": "骨密度检测 / 标本影像",
  "hologicEquipment0": "Horizon DXA",
  "hologicEquipment1": "Trident HD",
  "hologicScope": "参与 Horizon EMI 整改，以及 Trident HD 上电与设备信息记录支持；培训与支持范围对应具体承担的工作。",
  "assessTitle": "评估",
  "assessIntro": "理解故障表现及使用情境。",
  "assessBody": "面对用户报告的间歇性故障，我会检查设备状态、服务历史、附件与使用流程，并确认问题是否可以复现。",
  "procedureTitle": "按程序检查",
  "procedureIntro": "依据制造商文档与适用的服务程序。",
  "procedureBody": "依据制造商文档及适用程序排查故障，记录检查发现，并识别需要进一步支持或升级处理的问题。",
  "verifyTitle": "验证",
  "verifyIntro": "检查服务后的功能与性能。",
  "verifyBody": "按适用程序进行服务后检查，以测量记录和功能验证结果作为后续判断的依据。",
  "handoverTitle": "记录与交接",
  "handoverIntro": "记录检查发现、设备状态与后续行动。",
  "handoverBody": "通过 Simpro 工单和服务报告记录已完成的工作、验证结果、设备状态及未解决事项，让交接有据可查。",
  "skip": "跳至正文",
  "navExperience": "经历",
  "navEquipment": "设备",
  "navAi": "AI 与工具",
  "navContact": "联系",
  "heroRole": "医疗设备\n现场服务工程师",
  "heroIntro": "常驻悉尼，从现场服务到车间维修，认真处理每一个工程问题。",
  "download": "下载简历",
  "email": "邮件联系",
  "experienceLabel": "工作经历",
  "since": "自 2023 年 7 月",
  "locationLabel": "所在地",
  "travelLabel": "现场出差",
  "licence": "持有驾驶执照",
  "languagesLabel": "语言",
  "languages": "英语 / 普通话",
  "aboutLabel": "关于我",
  "experienceTitle": "用务实的方法，解决复杂的设备问题。",
  "experienceIntro": "在澳大利亚开展现场服务，为医院与药房设备提供车间维修和技术支持。",
  "novaDate": "2023 年 7 月至今",
  "novaRole": "生物医学工程师",
  "lundbeckDate": "2019 年 12 月至 2020 年 2 月",
  "lundbeckRole": "药物警戒部门助理",
  "lundbeckIntro": "协助处理不良反应记录、药物安全文档及跨部门沟通。",
  "focusDiagnosis": "诊断与维修",
  "focusDiagnosisBody": "预防性维护、故障排查、纠正性维修与安装支持。",
  "focusVerification": "服务后验证",
  "focusVerificationBody": "依据适用程序进行功能测试与性能检查。",
  "focusDocumentation": "服务记录",
  "focusDocumentationBody": "Simpro 工单、设备历史及可追溯的服务交接。",
  "equipmentTitle": "医疗技术，",
  "equipmentTitleAccent": "付诸实践。",
  "equipmentIntro": "现场服务、车间维修、安装支持与服务记录。",
  "platformHint": "选择平台，查看设备范围与服务经历。",
  "serviceTitle": "从故障表现，到清晰交接。",
  "serviceOutcome": "以记录支持判断：可投入使用、需要跟进，或需要升级处理。",
  "aiLabel": "AI 工具与工作方式",
  "aiTitle": "AI，融入",
  "aiAccent": "日常工作。",
  "aiIntro": "我使用 Codex、Claude Code 和 ChatGPT 辅助调研、文案撰写与编程，并在使用前检查输出。",
  "websiteTitle": "个人网站",
  "websiteIntro": "双语设计、响应式优化与交互检查。",
  "howAi": "我怎样使用 AI",
  "brief": "定义任务",
  "websiteBrief": "明确问题、目标与限制条件。",
  "build": "辅助制作",
  "websiteBuild": "借助编程工具与生成的视觉方案进行迭代。",
  "review": "检查结果",
  "websiteReview": "检查文案、交互行为和实际呈现效果。",
  "documentTitle": "简历与文档流程",
  "documentIntro": "起草、排版并检查 PDF 与 Word 文档。",
  "documentBrief": "整理原始信息，明确文档的使用对象。",
  "documentBuild": "使用 AI 辅助起草内容、安排结构与调整格式。",
  "documentReview": "核对事实，并检查最终 PDF 和 Word 的排版。",
  "define": "定义",
  "defineBody": "明确任务与背景。",
  "create": "制作",
  "createBody": "探索、起草与迭代。",
  "reviewStep": "检查",
  "reviewStepBody": "核对事实与适用性。",
  "verifyStep": "验证",
  "verifyStepBody": "验证最终结果。",
  "studyLabel": "研究与教育",
  "studyTitle": "让好奇心，经得起验证。",
  "studyIntro": "生物医学工程研究，侧重实验规划、阻抗测量、验证方法与技术记录。",
  "mphil": "哲学硕士（研究型）",
  "mphilDate": "2024 年 6 月获授学位",
  "mphilScope": "实验规划、阻抗测量与验证。",
  "bachelor": "生物医学工程学士",
  "bachelorScope": "医学科学、生物医学设计、数据分析与电子学。",
  "contactLabel": "联系",
  "contactTitle": "聊一聊。",
  "contactIntro": "欢迎联系我，交流悉尼的生物医学工程与医疗设备现场服务岗位机会。",
  "copyEmail": "复制邮箱",
  "eligibility": "工作资格：可在招聘过程中核实。",
  "imageNote": "部分工程主题图片由 AI 生成，用于视觉呈现。",
  "backTop": "返回顶部",
  "trainingLabel": "已完成培训",
  "philipsTab": "呼吸治疗",
  "philipsTraining": "已完成 V60 / V60 Plus 在线服务培训、Trilogy 202 服务培训及 Trilogy Evo 维修课程。",
  "ultrasoundTab": "超声设备",
  "ultrasoundCategory": "台车式与便携式超声",
  "ultrasoundTraining": "2023 年 3 月在悉尼完成超声基础、EPIQ / Affiniti 现场课程，以及 CX30 / CX50 / SPARQ 现场服务工程师培训；同时完成相关在线课程。",
  "ultrasoundScope": "Affiniti 70G 与 CX50 预防性维护：检查操控部件、接口和滤网，运行诊断，进行电气安全测试并记录验证结果。",
  "ultrasoundArtCaption": "图示：Philips Affiniti 70",
  "ultrasoundEquipment0": "EPIQ / Affiniti",
  "ultrasoundEquipment1": "CX30 / CX50 / SPARQ",
  "monitorTab": "患者监护",
  "monitorCategory": "床旁、遥测与胎儿监护",
  "monitorTraining": "已完成 Efficia CM 系列服务培训、MX40 安装与维修课程，以及 Avalon FM20 / FM30 支持培训。",
  "monitorScope": "参与 IntelliVue X3 配置与软件升级、设备选项核查、完成记录整理和临床区域验证支持。",
  "monitorArtCaption": "图示：Philips Efficia CM150",
  "monitorEquipment0": "Efficia CM10 / CM12 / CM100 / CM120 / CM150",
  "monitorEquipment1": "IntelliVue MX40 / X3",
  "monitorEquipment2": "Avalon FM20 / FM30",
  "ecgTab": "心电与除颤",
  "ecgCategory": "诊断心电 / 监护除颤仪",
  "ecgTraining": "2023 年 11 月完成 PageWriter TC20 / TC30 / TC50 系列课程；2025 年 3 月完成 HeartStart Intrepid 监护除颤仪服务培训。",
  "ecgScope": "参与 PageWriter TC50 现场升级并整理服务报告。HeartStart Intrepid 在此列为已完成服务培训的设备。",
  "ecgArtCaption": "图示：Philips PageWriter TC50",
  "ecgEquipment0": "PageWriter TC20 / TC30 / TC50",
  "ecgEquipment1": "HeartStart Intrepid",
  "bdTab": "药房自动化",
  "bdTraining": "2024 年 1 月完成 FIX 100 配药服务基础培训，以及 Pyxis MedStation / PAS ES 硬件 FIX 100 课程。",
  "corpulsTab": "急救设备",
  "corpulsTraining": "2026 年参加软件升级项目培训，随后开展现场实施工作。",
  "hologicTab": "骨密度与手术影像",
  "hologicTraining": "2025 年 5 月在悉尼完成 Horizon EMI 整改安装技术服务培训。"
},
    menu: { open: "打开导航", close: "关闭导航" },
    copyEmail: { default: "复制邮箱", copied: "邮箱已复制", failed: "复制失败，请使用邮箱链接" },
    platformLabel: "设备平台"
  }
};
const isSupportedLanguage = language => typeof language === "string" && Object.hasOwn(translations, language);
const getInitialLanguage = () => {
  try {
    const storedLanguage = localStorage.getItem("portfolio-language");
    return isSupportedLanguage(storedLanguage) ? storedLanguage : "en";
  } catch { return "en"; }
};
const setStoredLanguage = language => {
  try { localStorage.setItem("portfolio-language", language); } catch { /* Browsing with storage disabled remains supported. */ }
};
let activeLanguage = "en";
const getActiveDictionary = () => translations[activeLanguage];
const header = document.querySelector("[data-site-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const headerActions = document.querySelector("#site-menu");
const compactMenuMedia = window.matchMedia?.("(max-width: 1120px)");
const languageButtons = document.querySelectorAll("[data-language-option]");
const emailCopyButtons = document.querySelectorAll("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");
const descriptionMeta = document.querySelector('meta[name="description"]');

const setMenuOpen = (isOpen) => {
  const nextState = Boolean(isOpen && compactMenuMedia?.matches);
  if (!nextState && compactMenuMedia?.matches && headerActions?.contains(document.activeElement)) {
    menuToggle?.focus({ preventScroll: true });
  }
  header?.classList.toggle("is-menu-open", nextState);
  menuToggle?.setAttribute("aria-expanded", String(nextState));
  const labels = getActiveDictionary().menu;
  menuToggle?.setAttribute("aria-label", nextState ? labels.close : labels.open);
};

const applyLanguage = (language, shouldStore = true) => {
  activeLanguage = isSupportedLanguage(language) ? language : "en";
  const dictionary = getActiveDictionary();
  document.documentElement.lang = dictionary.lang;
  document.body.dataset.language = activeLanguage;
  document.title = dictionary.title;
  descriptionMeta?.setAttribute("content", dictionary.description);
  textTargets.forEach(node => {
    const value = dictionary.text[node.dataset.i18n];
    if (typeof value === "string") node.textContent = value;
  });
  languageButtons.forEach(button => {
    const selected = button.dataset.languageOption === activeLanguage;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelector("[data-platform-tabs]")?.setAttribute("aria-label", dictionary.platformLabel);
  document.querySelectorAll(".email-action").forEach(link => {
    const subject = activeLanguage === "zh" ? "医疗设备现场服务岗位机会" : "Biomedical field service opportunity";
    link.href = "mailto:" + recruiterEmailAddress + "?subject=" + encodeURIComponent(subject);
  });
  emailCopyButtons.forEach(button => {
    window.clearTimeout(Number(button.dataset.copyResetTimer));
    button.classList.remove("is-copied", "is-copy-failed");
    delete button.dataset.copyResetTimer;
  });
  if (copyStatus) copyStatus.textContent = "";
  setMenuOpen(false);
  if (shouldStore) setStoredLanguage(activeLanguage);
};
languageButtons.forEach(button => button.addEventListener("click", () => {
  applyLanguage(button.dataset.languageOption);
  queueNavUpdate();
}));
menuToggle?.addEventListener("click", () => setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true"));
compactMenuMedia?.addEventListener("change", () => setMenuOpen(false));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && header?.classList.contains("is-menu-open")) {
    setMenuOpen(false);
    menuToggle?.focus({ preventScroll: true });
  }
});
document.addEventListener("click", event => {
  if (header?.classList.contains("is-menu-open") && !header.contains(event.target)) setMenuOpen(false);
});
headerActions?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenuOpen(false)));

const copyTextToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Embedded browsers may deny the async API but allow a copy command.
    }
  }

  const previousFocus = document.activeElement;
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.className = "visually-hidden";
  document.body.append(textarea);
  try {
    textarea.select();
    if (!document.execCommand("copy")) {
      throw new Error("Copy command failed");
    }
  } finally {
    textarea.remove();
    previousFocus?.focus({ preventScroll: true });
  }
};

const setCopyButtonState = (button, state) => {
  const labels = getActiveDictionary().copyEmail;
  const label = button.querySelector("[data-i18n]");
  if (label) label.textContent = labels[state] || labels.default;
  button.classList.toggle("is-copied", state === "copied");
  button.classList.toggle("is-copy-failed", state === "failed");
  if (copyStatus) copyStatus.textContent = labels[state] || "";
  window.clearTimeout(Number(button.dataset.copyResetTimer));
  button.dataset.copyResetTimer = String(window.setTimeout(() => {
    if (label) label.textContent = getActiveDictionary().copyEmail.default;
    button.classList.remove("is-copied", "is-copy-failed");
    if (copyStatus) copyStatus.textContent = "";
    delete button.dataset.copyResetTimer;
  }, 1800));
};
emailCopyButtons.forEach(button => button.addEventListener("click", async () => {
  try {
    await copyTextToClipboard(button.dataset.copyEmail || recruiterEmailAddress);
    setCopyButtonState(button, "copied");
  } catch { setCopyButtonState(button, "failed"); }
}));

const equipment = document.querySelector("[data-equipment]");
const platformTabs = Array.from(document.querySelectorAll("[data-platform]"));
const platformPanels = Array.from(document.querySelectorAll("[data-platform-panel]"));
const hydrateArt = panel => {
  panel.querySelectorAll("[data-deferred-art]").forEach(picture => {
    picture.querySelectorAll("[data-srcset]").forEach(node => {
      node.setAttribute("srcset", node.dataset.srcset);
      node.removeAttribute("data-srcset");
    });
    picture.querySelectorAll("[data-src]").forEach(node => {
      node.setAttribute("src", node.dataset.src);
      node.removeAttribute("data-src");
    });
    picture.hidden = false;
  });
};
const activatePlatform = (id, moveFocus = false) => {
  if (!platformTabs.some(tab => tab.dataset.platform === id)) return;
  platformTabs.forEach(tab => {
    const selected = tab.dataset.platform === id;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && moveFocus) tab.focus({ preventScroll: true });
  });
  platformPanels.forEach(panel => {
    const selected = panel.dataset.platformPanel === id;
    panel.hidden = !selected;
    if (selected) hydrateArt(panel);
  });
};
if (equipment && platformTabs.length === platformPanels.length && platformTabs.length > 0) {
  platformPanels.forEach(panel => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "tab-" + panel.dataset.platformPanel);
    panel.tabIndex = 0;
  });
  equipment.classList.add("is-enhanced");
  document.querySelector("[data-platform-navigation]").hidden = false;
  activatePlatform("philips");
  platformTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activatePlatform(tab.dataset.platform));
    tab.addEventListener("keydown", event => {
      let next = index;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % platformTabs.length;
      else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + platformTabs.length) % platformTabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = platformTabs.length - 1;
      else return;
      event.preventDefault();
      activatePlatform(platformTabs[next].dataset.platform, true);
    });
  });
}

const themePreferenceMedia = window.matchMedia?.("(prefers-color-scheme: dark)");
const applyTheme = () => {
  const theme = themePreferenceMedia?.matches ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0d1828" : "#f4f6f8");
};
themePreferenceMedia?.addEventListener("change", applyTheme);
const yearTarget = document.querySelector("[data-current-year]");
if (yearTarget) yearTarget.textContent = String(new Date().getFullYear());
const getHashTarget = hash => {
  if (typeof hash !== "string" || !hash.startsWith("#") || hash.length < 2) return null;
  try { return document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return null; }
};
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const navSections = navLinks.map(link => ({ link, target: getHashTarget(link.getAttribute("href")) })).filter(item => item.target);
let navFrame = 0;
const updateActiveNav = () => {
  navFrame = 0;
  const offset = (header?.offsetHeight || 84) + 100;
  const current = navSections.filter(item => item.target.getBoundingClientRect().top <= offset).at(-1);
  navSections.forEach(item => {
    const active = item === current;
    item.link.classList.toggle("is-active", active);
    if (active) item.link.setAttribute("aria-current", "location");
    else item.link.removeAttribute("aria-current");
  });
};
const queueNavUpdate = () => {
  if (!navFrame) navFrame = window.requestAnimationFrame(updateActiveNav);
};
window.addEventListener("scroll", queueNavUpdate, { passive: true });
window.addEventListener("resize", queueNavUpdate, { passive: true });
window.addEventListener("hashchange", queueNavUpdate);
document.querySelectorAll("details").forEach(note => note.addEventListener("toggle", queueNavUpdate));
applyTheme();
applyLanguage(getInitialLanguage(), false);
queueNavUpdate();
