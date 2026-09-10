"use strict";
document.documentElement.classList.add("js-ready");

const recruiterEmailAddress = "yangyihang96@gmail.com";
const textTargets = Array.from(document.querySelectorAll("[data-i18n]"));
const englishText = Object.fromEntries(textTargets.map(node => [node.dataset.i18n, node.textContent]));
const translations = {
  en: {
    lang: "en",
    title: "Yihang (Henry) Yang | Biomedical Field Service Engineer in Sydney",
    description: "Sydney-based Biomedical Field Service Engineer with three years at Nova Biomedical Australia. Ultrasound maintenance, patient-monitor upgrades, V60 field changes and documented verification.",
    text: englishText,
    menu: { open: "Open navigation", close: "Close navigation" },
    copyEmail: { default: "Copy email", copied: "Email copied", failed: "Copy failed — use the email link" },
    platformLabel: "Equipment platforms"
  },
  zh: {
    lang: "zh-CN",
    title: "杨颐航 Henry Yang | 悉尼医疗设备现场服务工程师",
    description: "常驻悉尼的医疗设备现场服务工程师，在 Nova Biomedical Australia 工作三年，具有超声维护、监护仪升级、V60 现场变更及验证记录经验。",
    text: {
  "aboutLabel": "工作经历",
  "aiAccent": "数字工具箱。",
  "aiIntro": "我使用 Codex、Claude Code 和 ChatGPT 辅助研究、文档起草与代码制作，并在使用前检查事实、内容和运行结果。",
  "aiLabel": "数字工具与 AI 应用",
  "aiTitle": "实用的",
  "bachelor": "生物医学工程学士",
  "bachelorScope": "医学科学、生物医学设计、数据分析与电子学。",
  "backTop": "返回顶部",
  "bdArtCaption": "图示：BD Rowa Vmax",
  "bdCategory": "药品管理 / 药房自动化",
  "bdEquipment0": "Pyxis MedStation / PAS ES",
  "bdEquipment1": "Rowa Vmax / Rowa Smart / ProLog",
  "bdScope": "Rowa Vmax 与 ProLog 预防性维护、药房现场服务、故障记录及交接。",
  "bdTab": "药房自动化",
  "bdTraining": "2024 年 1 月完成 FIX 100 配药服务基础培训，以及 Pyxis MedStation / PAS ES 硬件 FIX 100 课程。",
  "brief": "定义任务",
  "build": "辅助制作",
  "caseActionLabel": "承担的工作",
  "caseDetails": "展开服务详情",
  "caseMonitorAction": "按分配清单参与 X3 配置与升级，核查设备选项，维护各临床区域的完成记录。",
  "caseMonitorContext": "Philips IntelliVue X3 · 2026 年",
  "caseMonitorResult": "提交分配区域内已找到设备的完成记录；未找到设备、缺少 C12 选项及手术室占用导致无法进入的情况，均保留为跟进事项。",
  "caseMonitorSummary": "跟踪多个临床区域的升级与配置工作，逐项记录已完成设备及需要跟进的异常。",
  "caseMonitorTitle": "患者监护仪配置与升级",
  "caseResultLabel": "记录结果",
  "caseUltrasoundAction": "检查操控部件、接口、滤网和风扇，核查诊断及日志，完成电气安全测试和适用的探头测试。",
  "caseUltrasoundContext": "Philips Affiniti 70G / CX50 · 2025 年",
  "caseUltrasoundResult": "两次预防性维护均记录为通过，并完成服务报告。",
  "caseUltrasoundSummary": "完成预防性维护、功能检查及电气安全测试，服务报告记录为通过。",
  "caseUltrasoundTitle": "超声设备预防性维护",
  "caseV60Action": "承担分配的 V60 现场变更工作，整理剩余完成记录并交接。",
  "caseV60Context": "Philips Respironics V60 · 2026 年",
  "caseV60Result": "剩余分配的 V60 现场变更工作于 2026 年 4 月完成并汇报。",
  "caseV60Summary": "完成分配的 V60 现场变更工作，并提交完成记录以便后续跟踪。",
  "caseV60Title": "呼吸机现场变更",
  "contactIntro": "常驻悉尼，关注医疗设备厂家及服务公司的现场服务工程师岗位。",
  "contactLabel": "联系",
  "contactTitle": "保持联系。",
  "copyEmail": "复制邮箱",
  "corpulsArtCaption": "图示：corpuls3 modules",
  "corpulsCategory": "监护 / 除颤",
  "corpulsEquipment0": "corpuls3 modular monitor-defibrillator",
  "corpulsScope": "设备更换与软件升级实施、车间准备、完成情况追踪及服务交接。",
  "corpulsTab": "急救设备",
  "corpulsTraining": "2026 年参加软件升级项目培训，随后开展现场实施工作。",
  "digitalTools": "使用 Simpro 管理工单和服务历史，使用 Microsoft Office 整理技术记录、完成清单及交接文档。",
  "documentBrief": "整理原始信息，明确文档的使用对象。",
  "documentBuild": "使用 AI 辅助起草内容、安排结构与调整格式。",
  "documentIntro": "起草、排版并检查 PDF 与 Word 文档。",
  "documentReview": "核对事实，并检查最终 PDF 和 Word 的排版。",
  "documentTitle": "简历与文档流程",
  "download": "英文简历 · PDF",
  "earlierLabel": "早期经历",
  "ecgArtCaption": "图示：Philips PageWriter TC50",
  "ecgCategory": "诊断心电 / 监护除颤仪",
  "ecgEquipment0": "PageWriter TC20 / TC30 / TC50",
  "ecgEquipment1": "HeartStart Intrepid",
  "ecgScope": "参与 PageWriter TC50 现场升级并整理服务报告。HeartStart Intrepid 在此列为已完成服务培训的设备。",
  "ecgTab": "心电与除颤",
  "ecgTraining": "2023 年 11 月完成 PageWriter TC20 / TC30 / TC50 系列课程；2025 年 3 月完成 HeartStart Intrepid 监护除颤仪服务培训。",
  "email": "邮件联系",
  "equipmentIntro": "接触多类医疗设备。下方分别说明已完成的培训与实际承担的服务工作。",
  "equipmentLabel": "设备范围",
  "equipmentOverviewLabel": "服务范围概览",
  "equipmentTitle": "设备与",
  "equipmentTitleAccent": "培训。",
  "experienceIntro": "在澳大利亚开展医疗设备现场服务，结合客户现场工作、车间维修与技术记录。",
  "experienceLabel": "工作经历",
  "experienceTitle": "做好现场工作，也做好每一份记录。",
  "heroIntro": "自 2023 年 7 月起任职于 Nova Biomedical Australia，常驻悉尼，为医院与药房设备提供现场服务和车间维修，工作涵盖预防性维护、设备验证与服务记录。",
  "heroRole": "医疗设备\n现场服务工程师",
  "hologicArtCaption": "图示：Hologic Horizon DXA",
  "hologicCategory": "骨密度检测 / 标本影像",
  "hologicEquipment0": "Horizon DXA",
  "hologicEquipment1": "Trident HD",
  "hologicScope": "参与 Horizon EMI 整改，以及 Trident HD 上电与设备信息记录支持；培训与支持范围对应具体承担的工作。",
  "hologicTab": "骨密度与手术影像",
  "hologicTraining": "2025 年 5 月在悉尼完成 Horizon EMI 整改安装技术服务培训。",
  "howAi": "我怎样使用 AI",
  "illustrationNote": "器械示意图以真实设备为参考，不代表实际作业现场照片。",
  "imageNote": "AI 器械示意图以真实设备为参考。",
  "languages": "英语 / 普通话",
  "languagesLabel": "语言",
  "licence": "持有驾驶执照",
  "locationLabel": "所在地",
  "lundbeckDate": "2019 年 12 月至 2020 年 2 月",
  "lundbeckIntro": "协助处理不良反应记录、药物安全文档及跨部门沟通。",
  "lundbeckRole": "药物警戒部门助理",
  "monitorArtCaption": "图示：Philips Efficia CM150",
  "monitorCategory": "床旁、遥测与胎儿监护",
  "monitorEquipment0": "Efficia CM10 / CM12 / CM100 / CM120 / CM150",
  "monitorEquipment1": "IntelliVue MX40 / X3",
  "monitorEquipment2": "Avalon FM20 / FM30",
  "monitorScope": "参与 IntelliVue X3 配置与软件升级、设备选项核查、完成记录整理和临床区域验证支持。",
  "monitorTab": "患者监护",
  "monitorTraining": "已完成 Efficia CM 系列服务培训、MX40 安装与维修课程，以及 Avalon FM20 / FM30 支持培训。",
  "mphil": "哲学硕士（研究型）",
  "mphilDate": "2024 年 6 月获授学位",
  "mphilScope": "柔性电极研究：实验规划、阻抗测量、验证与技术记录。",
  "navAi": "AI 与工具",
  "navContact": "联系",
  "navEducation": "教育",
  "navEquipment": "设备与培训",
  "navExperience": "经历",
  "navService": "代表项目",
  "novaBullet1": "依据厂家文档和适用服务程序，为医院及药房设备开展预防性维护、故障排查和维修。",
  "novaBullet2": "参与现场变更、软件升级及安装工作，跟踪分配设备，并结合临床使用情况协调作业安排。",
  "novaBullet3": "开展功能检查并记录验证结果，包括在 Affiniti 70G 和 CX50 超声维护中进行电气安全测试。",
  "novaBullet4": "记录故障、未完成工作与后续要求，对需要进一步技术支持的问题进行升级处理。",
  "novaBullet5": "维护 Simpro 工单、服务报告和设备历史，清楚记录完成状态与交接事项。",
  "novaDate": "2023 年 7 月至今",
  "novaRole": "生物医学工程师",
  "philipsArtCaption": "图示：Philips Respironics V60",
  "philipsCategory": "呼吸机",
  "philipsEquipment0": "V60 / V60 Plus",
  "philipsEquipment1": "Trilogy 202 / Trilogy Evo",
  "philipsScope": "V60 现场变更实施、预防性维护、功能验证与服务报告。",
  "philipsTab": "呼吸治疗",
  "philipsTraining": "已完成 V60 / V60 Plus 在线服务培训、Trilogy 202 服务培训及 Trilogy Evo 维修课程。",
  "platformHint": "选择类别，查看设备示意图、已完成培训和服务经历。",
  "resumeFormat": "2 页 · 英文",
  "review": "检查结果",
  "scope0Body": "V60 现场变更、维护与验证。",
  "scope0Models": "V60 / V60 Plus · Trilogy 202 / Evo",
  "scope0Title": "呼吸治疗",
  "scope1Body": "Affiniti 70G 与 CX50 预防性维护。",
  "scope1Models": "EPIQ / Affiniti · CX30 / CX50 / SPARQ",
  "scope1Title": "超声设备",
  "scope2Body": "X3 配置与升级；相关设备服务培训。",
  "scope2Models": "Efficia CM · MX40 / X3 · Avalon FM20 / FM30",
  "scope2Title": "患者监护",
  "scope3Body": "TC50 现场升级；PageWriter 与 Intrepid 培训。",
  "scope3Models": "PageWriter TC20 / TC30 / TC50 · HeartStart Intrepid",
  "scope3Title": "心电与除颤",
  "scope4Body": "Rowa Vmax／ProLog 维护；Pyxis 硬件培训。",
  "scope4Models": "Pyxis MedStation / PAS ES · Rowa Vmax / Smart / ProLog",
  "scope4Title": "药房自动化",
  "scope5Body": "项目培训、设备更换与软件升级实施。",
  "scope5Models": "corpuls3",
  "scope5Title": "急救设备",
  "scope6Body": "Horizon EMI 整改；Trident 上电与信息记录支持。",
  "scope6Models": "Horizon DXA · Trident HD",
  "scope6Title": "骨密度与手术影像",
  "serviceContext": "服务经历",
  "serviceIntro": "通过维护、配置与现场变更项目，介绍本人承担的工作及结果记录。",
  "serviceLabel": "代表现场项目",
  "serviceTitle": "设备背后，是具体的工程工作。",
  "since": "自 2023 年 7 月",
  "skip": "跳至正文",
  "sterilizerScope": "台式 B 类／S 类灭菌器及清洗消毒器——2026 年 8 月内部实操培训。",
  "sterilizerTitle": "灭菌与清洗消毒",
  "studyIntro": "围绕柔性电极开展研究，涉及实验规划、阻抗测量、验证和技术记录。",
  "studyLabel": "研究与教育",
  "studyTitle": "生物医学工程基础。",
  "trainingLabel": "已完成培训",
  "travelLabel": "现场出差",
  "ultrasoundArtCaption": "图示：Philips Affiniti 70",
  "ultrasoundCategory": "台车式与便携式超声",
  "ultrasoundEquipment0": "EPIQ / Affiniti",
  "ultrasoundEquipment1": "CX30 / CX50 / SPARQ",
  "ultrasoundScope": "Affiniti 70G 与 CX50 预防性维护：检查操控部件、接口和滤网，运行诊断，进行电气安全测试并记录验证结果。",
  "ultrasoundTab": "超声设备",
  "ultrasoundTraining": "2023 年 3 月在悉尼完成超声基础、EPIQ / Affiniti 现场课程，以及 CX30 / CX50 / SPARQ 现场服务工程师培训；同时完成相关在线课程。",
  "websiteBrief": "明确问题、目标与限制条件。",
  "websiteBuild": "借助编程工具与生成的视觉方案进行迭代。",
  "websiteIntro": "双语设计、响应式优化与交互检查。",
  "websiteReview": "检查文案、交互行为和实际呈现效果。",
  "websiteTitle": "个人网站",
  "wordDownload": "Word 版本"
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
  const reachedBottom = window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  const current = reachedBottom ? navSections.at(-1) : navSections.filter(item => item.target.getBoundingClientRect().top <= offset).at(-1);
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
