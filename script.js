"use strict";
document.documentElement.classList.add("js-ready");

const recruiterEmailAddress = "yangyihang96@gmail.com";
const textTargets = Array.from(document.querySelectorAll("[data-i18n]"));
const englishText = Object.fromEntries([
  ...textTargets.map(node => [node.dataset.i18n, node.textContent]),
  ...Array.from(document.querySelectorAll("[data-i18n-aria]")).map(node => [node.dataset.i18nAria, node.getAttribute("aria-label")])
]);
const translations = {
  en: {
    lang: "en",
    title: "Yihang (Henry) Yang | Biomedical Field Service Engineer in Sydney",
    description: "Sydney-based Biomedical Field Service Engineer at Nova Biomedical Australia since July 2023. Ultrasound maintenance, patient-monitor upgrades and documented verification.",
    text: englishText,
    menu: { open: "Open navigation", close: "Close navigation" },
    copyEmail: {"default": "Copy email", "copied": "Email copied", "failed": "Copy failed — use the email link"},
    platformLabel: "Equipment categories"
  },
  zh: {
    lang: "zh-CN",
    title: "杨颐航 Henry Yang | 悉尼医疗设备现场服务工程师",
    description: "常驻悉尼，自 2023 年 7 月起任职于 Nova Biomedical Australia，具有超声维护、监护仪升级及验证记录经验。",
    text: {
  "aboutLabel": "工作经历",
  "aiIntro": "我使用 Codex、Claude Code 和 ChatGPT 辅助研究、文档起草与代码制作，并在使用前检查事实、内容和运行结果。",
  "aiLabel": "补充能力",
  "aiTitle": "数字工具。",
  "bachelor": "生物医学工程学士",
  "bachelorScope": "医学科学、生物医学设计、数据分析与电子学。",
  "backTop": "返回顶部",
  "bdArtCaption": "图示：BD Rowa Vmax",
  "bdCategory": "药品管理 / 药房自动化",
  "bdEquipment0": "Pyxis MedStation / PAS ES",
  "bdEquipment1": "Rowa Vmax / Rowa Smart / ProLog",
  "bdScope": "Rowa Vmax 与 ProLog 预防性维护、药房现场服务、故障记录及交接。",
  "bdTab": "药房自动化",
  "bdTraining": "FIX 100 配药服务基础培训及 Pyxis MedStation / PAS ES 硬件课程（2024 年 1 月）。",
  "brief": "定义任务",
  "build": "辅助制作",
  "caseActionLabel": "工程操作",
  "caseDetails": "服务详情",
  "caseMonitorAction": "按分配清单参与 X3 配置与升级，核查设备选项，维护各临床区域的完成记录。",
  "caseMonitorContext": "Philips IntelliVue X3 · 2026 年",
  "caseMonitorResult": "提交分配区域内已找到设备的完成记录；未找到设备、缺少 C12 选项及手术室占用导致无法进入的情况，均保留为跟进事项。",
  "caseMonitorSummary": "在分配的临床区域开展配置与软件升级。",
  "caseMonitorTitle": "患者监护仪配置与升级",
  "caseResultLabel": "结果与状态",
  "caseUltrasoundAction": "检查操控部件、接口、滤网和风扇，核查诊断及日志，完成电气安全测试和适用的探头测试。",
  "caseUltrasoundContext": "Philips Affiniti 70G / CX50 · 2025 年",
  "caseUltrasoundResult": "两次预防性维护均记录为通过，并完成服务报告。",
  "caseUltrasoundSummary": "医院超声系统的预防性维护。",
  "caseUltrasoundTitle": "超声设备预防性维护",
  "caseV60Action": "承担分配的 V60 现场变更工作，整理剩余完成记录并交接。",
  "caseV60Context": "Philips Respironics V60 · 2026 年",
  "caseV60Result": "剩余分配的 V60 现场变更工作于 2026 年 4 月完成并汇报。",
  "caseV60Summary": "分配的呼吸机现场变更及服务交接。",
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
  "download": "下载英文简历（PDF）",
  "earlierLabel": "早期经历",
  "ecgArtCaption": "图示：Philips PageWriter TC50",
  "ecgCategory": "诊断心电 / 监护除颤仪",
  "ecgEquipment0": "PageWriter TC20 / TC30 / TC50",
  "ecgEquipment1": "HeartStart Intrepid",
  "ecgScope": "参与 PageWriter TC50 现场升级并整理服务报告。HeartStart Intrepid 在此列为已完成服务培训的设备。",
  "ecgTab": "心电与除颤",
  "ecgTraining": "PageWriter TC20 / TC30 / TC50 系列课程（2023 年 11 月）；HeartStart Intrepid 服务培训（2025 年 3 月）。",
  "email": "邮件联系",
  "equipmentIntro": "按类别分别查看实际服务、实施支持及已完成培训。工作范围对应具体任务，不代表全系列维修权限。",
  "equipmentLabel": "设备范围",
  "equipmentTitle": "设备与",
  "equipmentTitleAccent": "培训。",
  "experienceIntro": "在澳大利亚开展医疗设备现场服务，结合客户现场工作、车间维修与技术记录。",
  "experienceLabel": "工作经历",
  "experienceTitle": "工作经历。",
  "heroIntro": "为医院及药房设备提供预防性维护、故障排查、升级与验证记录服务。",
  "heroRole": "医疗设备现场服务工程师",
  "hologicArtCaption": "图示：Hologic Horizon DXA",
  "hologicCategory": "骨密度检测 / 标本影像",
  "hologicEquipment0": "Horizon DXA",
  "hologicEquipment1": "Trident HD",
  "hologicScope": "参与 Horizon EMI 整改，以及 Trident HD 上电与设备信息记录支持；培训与支持范围对应具体承担的工作。",
  "hologicTab": "骨密度与手术影像",
  "hologicTraining": "Horizon EMI 整改安装技术服务培训，悉尼（2025 年 5 月）。",
  "illustrationNote": "以真实设备为参考的 AI 类别示意图，不是作业现场照片或服务经历证明。",
  "imageNote": "AI 器械示意图以真实设备为参考。",
  "languages": "英语 / 普通话",
  "languagesLabel": "语言",
  "licence": "持有驾驶执照",
  "locationLabel": "所在地",
  "lundbeckDate": "2019 年 12 月至2020 年 2 月",
  "lundbeckIntro": "协助处理不良反应记录、药物安全文档及跨部门沟通。",
  "lundbeckRole": "药物警戒部门助理",
  "monitorArtCaption": "类别示意：Efficia CM150，与案例中的 X3 并非同一设备。",
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
  "navContact": "联系",
  "navEducation": "教育",
  "navEquipment": "设备能力",
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
  "philipsScope": "V60 预防性维护、功能验证及服务报告。",
  "philipsTab": "呼吸治疗",
  "philipsTraining": "已完成 V60 / V60 Plus 在线服务培训、Trilogy 202 服务培训及 Trilogy Evo 维修课程。",
  "platformHint": "器械图片仅为类别示意；实际承担的工作见上方项目。",
  "resumeFormat": "2 页 · 英文",
  "review": "检查结果",
  "serviceContext": "实际服务",
  "serviceIntro": "说明本人职责、实际操作与记录结果，也保留需要继续跟进的事项。",
  "serviceLabel": "代表现场项目",
  "serviceTitle": "代表服务项目。",
  "since": "自 2023 年 7 月",
  "skip": "跳至正文",
  "sterilizerScope": "台式 B 类／S 类灭菌器及清洗消毒器——2026 年 8 月内部实操培训。",
  "sterilizerTitle": "灭菌与清洗消毒",
  "studyIntro": "围绕柔性电极开展研究，涉及实验规划、阻抗测量、验证和技术记录。",
  "studyLabel": "研究与教育",
  "studyTitle": "教育与研究。",
  "trainingLabel": "已完成培训",
  "travelLabel": "驾驶资格",
  "ultrasoundArtCaption": "类别示意：Affiniti 70；服务案例型号为 Affiniti 70G / CX50。",
  "ultrasoundCategory": "台车式与便携式超声",
  "ultrasoundEquipment0": "EPIQ / Affiniti",
  "ultrasoundEquipment1": "CX30 / CX50 / SPARQ",
  "ultrasoundScope": "Affiniti 70G / CX50 预防性维护、功能检查、电气安全测试及验证记录。",
  "ultrasoundTab": "超声设备",
  "ultrasoundTraining": "2023 年 3 月在悉尼完成超声基础、EPIQ / Affiniti 现场课程及 CX30 / CX50 / SPARQ 现场服务课程，并完成相关在线学习。",
  "websiteBrief": "定义使用对象、事实边界与需求。",
  "websiteBuild": "借助 Codex、Claude Code 和 ChatGPT 辅助实现及文档起草。",
  "websiteIntro": "个人作品集项目：借助 AI 辅助编写代码，并检查网页内容与浏览器表现。",
  "websiteReview": "核对原始事实、浏览器交互、响应式布局与生成文档。",
  "websiteTitle": "个人网站",
  "wordDownload": "Word 版本",
  "heroArtCaption": "杨颐航 Henry · 澳大利亚悉尼",
  "officialReference": "厂家原图依据",
  "viewImage": "放大示意图",
  "viewerTitle": "设备示意图",
  "closeImage": "关闭",
  "heroLocation": "澳大利亚 · 悉尼 NSW",
  "bachelorDate": "2017 年 2 月至2020 年 12 月",
  "caseContextLabel": "任务背景",
  "caseResponsibilityLabel": "本人职责",
  "caseVerificationLabel": "验证方式",
  "caseUltrasoundResponsibility": "承担分配的维护、检查及服务报告工作。",
  "caseUltrasoundVerification": "完成并记录功能检查、电气安全测试及适用的探头测试。",
  "caseMonitorResponsibility": "参与分配的升级工作，并维护逐台设备的完成记录。",
  "caseMonitorVerification": "核查设备选项和完成记录，将已完成工作与待跟进异常分开记录。",
  "caseV60Responsibility": "承担分配的变更工作并汇总完成记录。",
  "caseV60Verification": "记录完成状态，并汇报以供交接。",
  "supportLabel": "实施支持",
  "equipmentModelsLabel": "涉及设备",
  "philipsSupport": "分配的 V60 现场变更实施及完成记录交接。",
  "monitorSupport": "参与 IntelliVue X3 配置与软件升级、设备选项核查、完成记录整理和临床区域验证支持。",
  "ecgSupport": "PageWriter TC50 现场升级及服务报告；HeartStart Intrepid 仅列为已完成培训。",
  "hologicSupport": "Horizon EMI 整改实施；Trident HD 上电与设备信息记录支持。",
  "corpulsSupport": "设备更换与软件升级实施、车间准备、完成情况追踪及服务交接。",
  "websiteSource": "查看网站源码",
  "imageUnavailable": "图片暂时无法加载，设备范围仍可在文字中阅读。",
  "imageLoading": "正在加载示意图……",
  "navigationLabel": "主导航",
  "languageLabel": "语言选择"
},
    menu: { open: "打开导航", close: "关闭导航" },
    copyEmail: {"default": "复制邮箱", "copied": "邮箱已复制", "failed": "复制失败，请使用邮箱链接"},
    platformLabel: "设备类别"
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
  document.querySelectorAll("[data-i18n-aria]").forEach(node => {
    const value = dictionary.text[node.dataset.i18nAria];
    if (typeof value === "string") node.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(node => {
    const value = dictionary.text[node.dataset.i18nAlt];
    if (typeof value === "string") node.alt = value;
  });
  updateViewerCaption();
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

// Keep failures readable without replacing native dialog or tab behaviour.
const showImageFailure = image => {
  const figure = image.closest(".platform-art");
  if (!figure) return;
  image.hidden = true;
  const status = figure.querySelector("[data-image-error]");
  if (status) status.hidden = false;
};
document.addEventListener("error", event => {
  if (event.target instanceof HTMLImageElement) showImageFailure(event.target);
}, true);
document.querySelectorAll(".platform-art img[src]").forEach(image => {
  if (image.complete && image.naturalWidth === 0) showImageFailure(image);
});

// A native modal supplies keyboard containment, Escape and focus restoration.
const imageViewer = document.querySelector("[data-image-viewer]");
let viewerSource = null;
const updateViewerCaption = () => {
  if (!imageViewer || !viewerSource) return;
  const caption = viewerSource.querySelector("figcaption > span")?.textContent || "";
  imageViewer.querySelector("[data-viewer-caption]").textContent = caption;
  imageViewer.querySelector("[data-viewer-image]").alt = caption;
};
if (imageViewer && typeof imageViewer.showModal === "function") {
  const viewerImage = imageViewer.querySelector("[data-viewer-image]");
  const loading = imageViewer.querySelector("[data-viewer-loading]");
  const failure = imageViewer.querySelector("[data-viewer-error]");
  viewerImage.addEventListener("load", () => {
    loading.hidden = true;
    failure.hidden = true;
    viewerImage.hidden = false;
  });
  viewerImage.addEventListener("error", () => {
    loading.hidden = true;
    failure.hidden = false;
    viewerImage.hidden = true;
  });
  document.querySelectorAll("[data-art-zoom]").forEach(button => {
    const figure = button.closest("figure");
    const source = figure.querySelector("picture img");
    if (!source?.dataset.fullSrc) return;
    button.hidden = false;
    button.addEventListener("click", () => {
      viewerSource = figure;
      updateViewerCaption();
      viewerImage.hidden = true;
      failure.hidden = true;
      loading.hidden = false;
      viewerImage.src = source.dataset.fullSrc;
      imageViewer.showModal();
      document.documentElement.classList.add("image-viewer-open");
    });
  });
  imageViewer.querySelector("[data-close-viewer]").addEventListener("click", () => imageViewer.close());
  imageViewer.addEventListener("click", event => {
    if (event.target !== imageViewer) return;
    const rect = imageViewer.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) imageViewer.close();
  });
  imageViewer.addEventListener("close", () => document.documentElement.classList.remove("image-viewer-open"));
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

document.documentElement.classList.remove("js-pending");
