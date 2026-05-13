// AKESO — Chinese translations + language toggle behavior
(function () {
  'use strict';

  const T_ZH = {
    // Nav
    'nav.home': '首页',
    'nav.technology': '技术',
    'nav.research': '研究领域',
    'nav.about': '关于',
    'nav.contact': '联系',
    'nav.partner': '与 AKESO 合作',

    // Hero
    'hero.eyebrow': 'AKESO — 视觉技术',
    'hero.h1': '构筑人类<br/><span class="em">视觉</span>的未来。',
    'hero.support': 'AKESO 致力于研发先进光学技术、精密视觉系统，以及以研究为驱动的视觉基础设施 — 从眼科学对人眼的深入理解出发进行工程化。',
    'hero.cta_partner': '与 AKESO 合作',
    'hero.cta_explore': '探索技术',
    'hero.disc_label_1': '01 / 学科',
    'hero.disc_label_2': '02 / 学科',
    'hero.disc_label_3': '03 / 学科',
    'hero.disc_1': '精密光学',
    'hero.disc_2': 'Ai+ 视觉智能',
    'hero.disc_3': 'Xr+ 未来视觉平台',
    'hero.viz_signal': '信号激活 · 折射模型',
    'hero.viz_caption': '光线穿过精密工程化的镜片<br/>表面 — 折射模型示意。',

    // Section 2 — Platform
    'sec2.index': '02 — 平台',
    'sec2.eyebrow': 'AKESO 构建的内容',
    'sec2.h2': '横跨光学、视觉智能与新兴视觉系统的研究驱动平台。',

    'sec2.card1_kicker': '光学平台',
    'sec2.card1_title': 'MetaRx<sup>™</sup>',
    'sec2.card1_body': 'AKESO 技术栈的光学基础 — 融合精密制造、先进透镜工程，以及新一代视觉系统开发。',
    'sec2.card1_l1': '精密光学制造',
    'sec2.card1_l2': '先进透镜系统',
    'sec2.card1_l3': '纳米级光学结构',
    'sec2.card1_l4': '眼科光学工程',

    'sec2.card2_kicker': 'Ai+ 视觉智能',
    'sec2.card2_title': 'Ai+ 视觉智能',
    'sec2.card2_body': '眼动感知的视觉智能系统 — 专注于追踪、机器视觉、诊断，以及人与视觉界面之间的自适应交互。',
    'sec2.card2_l1': '眼动追踪',
    'sec2.card2_l2': '基于摄像头的诊断',
    'sec2.card2_l3': '人类视觉行为系统',
    'sec2.card2_l4': '自适应视觉界面',

    'sec2.card3_kicker': '未来平台',
    'sec2.card3_title': 'Xr+ 未来视觉平台',
    'sec2.card3_body': '面向未来视觉计算的研究 — XR 光学、远焦架构，以及将定义下一时代沉浸式系统的视觉舒适技术。',
    'sec2.card3_l1': 'XR 光学系统',
    'sec2.card3_l2': '远焦视觉架构',
    'sec2.card3_l3': '视觉舒适技术',
    'sec2.card3_l4': '未来显示系统',

    // Section 3 — Philosophy
    'sec3.index': '03 — 理念',
    'sec3.eyebrow': '从眼睛出发构建',
    'sec3.h2': '基于对人类视觉的理解构建 —<br/>而非围绕硬件的局限。',
    'sec3.visual_label': '人眼 · 光学层示意图',
    'sec3.p1': '大多数视觉技术围绕硬件局限设计。AKESO 则反其道而行之。',
    'sec3.p2': '通过融合眼科学、光学工程与精密研究，公司开发的技术更自然地契合人类视觉系统的真实运作方式 — 视锐度、调节、深度与舒适度。',
    'sec3.p3': '这一视角塑造了从光学架构、透镜工程到沉浸式显示系统，乃至下一代视觉界面的一切。',
    'sec3.process': '流程 · 渐进呈现',
    'sec3.step1': '人类视觉',
    'sec3.step1_sub': '眼科基准',
    'sec3.step2': '光学研究',
    'sec3.step2_sub': '行为 + 光',
    'sec3.step3': '精密工程',
    'sec3.step3_sub': '制造',
    'sec3.step4': '未来视觉系统',
    'sec3.step4_sub': '部署',

    // Section 4 — Research
    'sec4.index': '04 — 研究领域',
    'sec4.eyebrow': '六个活跃学科',
    'sec4.h2': '横跨光学、计算、制造与人类视觉的技术深度。',
    'sec4.r1_title': '先进光学',
    'sec4.r1_body': '精密透镜系统、光学工程，以及纳米级视觉技术。',
    'sec4.r2_title': '计算光学',
    'sec4.r2_body': '关于智能光学架构与视觉优化系统的研究。',
    'sec4.r3_title': '精密制造',
    'sec4.r3_body': '先进的制造流程与高精度光学生产系统。',
    'sec4.r4_title': '视觉智能',
    'sec4.r4_body': '机器视觉系统、眼动追踪与视觉分析技术。',
    'sec4.r5_title': 'XR 光学基础设施',
    'sec4.r5_body': '支持未来沉浸式平台的光学系统与视觉架构。',
    'sec4.r6_title': '人类视觉系统',
    'sec4.r6_body': '融合眼科学、光学与人类视觉行为的研究。',

    // Section 5 — Capability
    'sec5.index': '05 — 能力',
    'sec5.eyebrow': '研究为本。精密驱动。',
    'sec5.h2': '研究、工程与制造，作为同一个精密系统协同运作。',
    'sec5.slot': '图像位 · 16 / 8',
    'sec5.slot_hint': '宽幅制造 / 实验室 / 制造图像 — 嵌入此处',
    'sec5.annot1': '帧 01 · 光学制造',
    'sec5.annot2': '精密受控环境',
    'sec5.m1': '研究项目',
    'sec5.m2': '精密系统',
    'sec5.m3': '光学实验',
    'sec5.m4': '原型迭代',

    // Section 6 — Future (black)
    'sec6.index': '06 — 前瞻定位',
    'sec6.right': '/ 视觉成为新的计算层',
    'sec6.h2': '下一代<br/>计算<br/>将是<br/>视觉的。',
    'sec6.p': '新兴技术将日益依赖先进的视觉系统 — 精密光学、智能界面，以及人类感知的显示架构。AKESO 正在构建支撑这一转型的基础技术。',
    'sec6.l1': '精密光学基础设施',
    'sec6.l1_status': '进行中',
    'sec6.l2': '人类感知的视觉系统',
    'sec6.l2_status': '研发',
    'sec6.l3': '沉浸式光学架构',
    'sec6.l3_status': '探索中',
    'sec6.l4': '视觉计算基底',
    'sec6.l4_status': '前瞻',

    // Section 7 — CTA
    'sec7.eyebrow': '/ 联系我们',
    'sec7.h2': '与 AKESO 合作。',
    'sec7.p': '面向企业合作、研究合作与先进视觉技术项目 — 我们与构建下一代视觉层的团队携手同行。',
    'sec7.cta_partner': '与 AKESO 合作',
    'sec7.cta_contact': '联系研究团队',

    // Footer
    'foot.tagline': '围绕人类视觉工程化的研究驱动视觉技术。',
    'foot.col1': '平台',
    'foot.col2': '公司',
    'foot.col3': '联系',
    'foot.l_metarx': 'MetaRx™',
    'foot.l_vi': 'Ai+ 视觉智能',
    'foot.l_fvp': 'Xr+ 未来视觉平台',
    'foot.l_tech': '技术',
    'foot.l_research': '研究领域',
    'foot.l_about': '关于',
    'foot.l_contact': '联系',
    'foot.l_partnerships': '合作伙伴',
    'foot.l_linkedin': 'LinkedIn',
    'foot.l_press': '媒体',
    'foot.copyright': '© 2026 AKESO · 版权所有',
    'foot.privacy': '隐私政策',
    'foot.terms': '服务条款',
  };

  // ── cache english originals from the DOM so we can swap back ──
  const T_EN = {};
  function snapshotEnglish() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.dataset.i18n;
      if (!(k in T_EN)) T_EN[k] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.dataset.i18nHtml;
      if (!(k in T_EN)) T_EN[k] = el.innerHTML;
    });
  }

  function applyLang(lang) {
    const dict = lang === 'zh' ? T_ZH : T_EN;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.dataset.i18n;
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.dataset.i18nHtml;
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');
    document.documentElement.dataset.lang = lang;
    // segmented toggle state
    document.querySelectorAll('#lang-toggle .seg').forEach((seg) => {
      seg.classList.toggle('on', seg.dataset.lang === lang);
    });
  }

  // ── init ────────────────────────────────────────────────
  snapshotEnglish();
  const saved = (function () {
    try { return localStorage.getItem('akeso.lang'); } catch (e) { return null; }
  })();
  const initial = saved === 'zh' ? 'zh' : 'en';
  applyLang(initial);

  // ── toggle button ───────────────────────────────────────
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      // If the user clicked a specific segment, switch to that lang;
      // otherwise flip.
      const segClick = e.target.closest('.seg');
      const cur = document.documentElement.dataset.lang || 'en';
      let next;
      if (segClick && segClick.dataset.lang) {
        next = segClick.dataset.lang;
        if (next === cur) return;
      } else {
        next = cur === 'zh' ? 'en' : 'zh';
      }
      applyLang(next);
      try { localStorage.setItem('akeso.lang', next); } catch (e2) {}
    });
  }
})();

// ── Additional page translations ──────────────────────────────
(function() {
  'use strict';
  const EXTRA_ZH = {
    // Research page
    'res.eyebrow': '研究领域',
    'res.h1': '六个活跃<br/>研究学科。',
    'res.intro': 'AKESO在视觉技术研究的多个领域开展工作——融合光学、计算系统、精密工程和人类视觉科学。每个学科均处于活跃状态、相互关联，并以眼科学理解为基础。',
    'res.status_active': '进行中',
    'res.r1_title': '先进光学',
    'res.r1_signal': '先进光学 · 精密镜片系统',
    'res.r1_body': '精密镜片系统、光学工程和纳米级视觉技术构成AKESO研究的基础层。该领域的工作涵盖从经典光学系统设计到先进计算方法——制造出在人类视觉需求方面性能更优于传统工程的光学系统。',
    'res.r1_a1': '精密镜片工程', 'res.r1_a1s': '高精度光学系统设计与制造',
    'res.r1_a2': '纳米级光学结构', 'res.r1_a2s': '亚波长图案与超表面设计',
    'res.r1_a3': '视觉优化系统', 'res.r1_a3s': '性能驱动的光学系统调优',
    'res.r1_a4': '眼科光学工程', 'res.r1_a4s': '基于临床视觉科学设计的镜片系统',
    'res.r2_title': '计算光学',
    'res.r2_signal': '计算光学 · 波前分析',
    'res.r2_body': 'AKESO的计算光学融合了光学行为建模、智能系统优化和软件驱动的视觉性能增强。该学科架起了物理光学与智能系统之间的桥梁——使光学架构能够适应个体视觉特征、环境条件及静态光学设计无法满足的性能需求。',
    'res.r2_a1': '波前分析与建模', 'res.r2_a1s': '相位重建与像差图',
    'res.r2_a2': '智能光学架构', 'res.r2_a2s': '软件自适应镜片与显示系统',
    'res.r2_a3': '视觉优化算法', 'res.r2_a3s': '感知驱动的光学性能调优',
    'res.r2_a4': '光学仿真系统', 'res.r2_a4s': '复杂光学行为的高保真建模',
    'res.r3_title': '精密制造',
    'res.r3_signal': '精密制造 · 光刻工艺',
    'res.r3_body': 'AKESO的精密制造研究借鉴了应用于光学制造的半导体级光刻技术——这是核心差异化优势，使得以传统光学制造工艺无法达到的分辨率和公差生产镜片结构成为可能。公司的MetaRx™光刻平台是该研究领域的商业化成果。',
    'res.r3_a1': '光学光刻', 'res.r3_a1s': '半导体级工艺应用于镜片制造',
    'res.r3_a2': '先进制造流程', 'res.r3_a2s': '高精度、研究驱动的制造管线',
    'res.r3_a3': '纳米结构生产', 'res.r3_a3s': '光学表面的亚微米图案化',
    'res.r3_a4': '质量与计量系统', 'res.r3_a4s': '精密测量与工艺验证',
    'res.r4_title': '视觉智能',
    'res.r4_signal': '视觉智能 · 注视映射',
    'res.r4_body': '机器视觉系统、眼动追踪和视觉分析技术共同构成AKESO的视觉智能研究领域。工作涵盖从硬件级传感器系统到解释和响应人类注视的算法——实现诊断、视觉界面设计及能够实时适应人眼注视位置和方式的智能系统等应用。',
    'res.r4_a1': '眼动追踪系统', 'res.r4_a1s': '高频注视估计与注视点分析',
    'res.r4_a2': '基于摄像头的诊断', 'res.r4_a2s': '非侵入式视觉健康评估系统',
    'res.r4_a3': '机器视觉集成', 'res.r4_a3s': '光学与医学场景的计算机视觉系统',
    'res.r4_a4': '自适应视觉界面', 'res.r4_a4s': '注视响应的显示与交互系统',
    'res.r5_title': 'XR光学基础设施',
    'res.r5_signal': 'XR光学基础设施 · 波导结构',
    'res.r5_body': '支持未来沉浸式技术的光学系统和视觉架构，是AKESO前瞻性但技术扎实的研究领域。工作涵盖波导光学、显示耦合系统，以及将支撑下一代空间和混合现实视觉体验的视觉基础设施——以视觉舒适度和长时间可用性为主要设计准则。',
    'res.r5_a1': '波导光学系统', 'res.r5_a1s': '薄形光耦合与传播结构',
    'res.r5_a2': '远焦视觉架构', 'res.r5_a2s': '支持自然焦距深度的显示系统',
    'res.r5_a3': '沉浸式显示光学', 'res.r5_a3s': '宽视场、高分辨率光学系统',
    'res.r5_a4': '近视预防系统', 'res.r5_a4s': '临床设计的近视预防显示架构',
    'res.r6_title': '人类视觉系统',
    'res.r6_signal': '人类视觉系统 · 眼科模型',
    'res.r6_body': '人类视觉研究融合了眼科学、光学和视觉行为科学——构成所有其他AKESO研究学科的基础知识体系。这是起点：对人眼功能、失调方式、适应机制的严谨理解，以及如何将视觉技术工程化，以与眼睛生物学协调运作而非与之对抗。',
    'res.r6_a1': '眼科研究', 'res.r6_a1s': '视觉技术开发的临床基础',
    'res.r6_a2': '视觉行为建模', 'res.r6_a2s': '人类如何在视觉环境中观看、适应和响应',
    'res.r6_a3': '近视与视觉健康', 'res.r6_a3s': '近视进展与预防机制研究',
    'res.r6_a4': '视觉舒适科学', 'res.r6_a4s': '长时间视觉交互与视疲劳研究',

    // About page
    'about.eyebrow': '关于AKESO',
    'about.h1': '围绕人类<br/>视觉创立。',
    'about.intro': 'AKESO是一家研究驱动的视觉技术公司，专注于先进光学、精密工程和面向未来的人类视觉系统——由眼科医生和技术专家创立，他们相信眼睛应是每项视觉技术的起点。',
    'about.origin_index': '01 — 起源',
    'about.origin_eyebrow': '围绕人类视觉创立',
    'about.origin_h2': '以对眼睛的理解为基础构建技术——而非围绕它构建。',
    'about.origin_lede': 'AKESO建立在这样一种认知之上：视觉技术的未来需要工程与人类视觉系统之间更深层的契合。',
    'about.origin_p1': '以眼科学、光学科学和先进视觉研究为基础，公司开发的技术围绕人类实际的视觉方式和信息交互方式进行设计——将视锐度、调节、深度感知和长时间视觉舒适度作为主要工程约束，而非事后考量。',
    'about.origin_p2': '这一创立理念——技术应适应人类视觉，而非反之——塑造了公司追求的每一个研究方向、产品决策和合作关系。',
    'about.origin_label': 'AKESO · 研究设施',
    'about.pillar1_h': '眼科学优先', 'about.pillar1_p': '每个技术方向都始于对人类视觉生物学的严谨理解——而非从现有硬件出发。',
    'about.pillar2_h': '研究驱动开发', 'about.pillar2_p': 'AKESO首先作为研究机构运营——在每个阶段，技术深度先于商业化。',
    'about.pillar3_h': '精密工程', 'about.pillar3_p': '从半导体级光刻到纳米级光学结构，制造精度是核心能力，而非能力短板。',
    'about.pillar4_h': '长远思考', 'about.pillar4_p': '构建基础性视觉技术需要以十年为单位思考——而非产品周期。AKESO在这个时间维度上运营。',
    'about.lead_index': '02 — 领导层',
    'about.lead_eyebrow': '创始人与首席科学家',
    'about.lead_h2': '眼科医生与科学家共同构建下一个时代的视觉技术。',
    'about.ceo_role': 'CEO · AKESO',
    'about.ceo_name': '蔡晓骨博士',
    'about.ceo_bio': '蔡晓骨博士是眼科创新和数字眼健康领域的杰出领导者，推动了AI驱动诊断、可穿戴近视控制设备和先进AR/VR视觉解决方案的开发。他拥有北京同仁医院眼科学博士学位，持有30余项专利，在主要期刊发表多篇论文。',
    'about.cs_role': '首席科学家 · AKESO',
    'about.cs_name': '王宁利教授',
    'about.cs_bio': '王宁利教授是全球知名的眼科医生，担任AKESO首席科学家，同时任北京同仁眼科中心主任、首都医科大学眼科学院院长。拥有30余年临床和研究经验，发表超过400篇同行评审论文，持有20项专利。',
    'about.team_index': '03 — 团队',
    'about.team_eyebrow': '全球研究机构',
    'about.team_h2': '全球分布的专家团队，以深厚技术专长和长远愿景为纽带。',
    'about.team_label': 'AKESO团队',
    'about.team_label_br': '中国 · 印度 · 新加坡 · 日本',
    'about.team_p1': 'AKESO的核心是一支充满激情、全球互联的动态团队，致力于创新与卓越。创始人和核心成员带来了国际视野、创业精神，以及在顶级科技公司积累的丰富经验。',
    'about.team_p2': '近70%的员工专注于研究与开发——核心研发团队中近80%拥有高级学位。技术深度是公司的根基。',
    'about.team_p3': '团队横跨中国、印度、新加坡、日本等地，汇聚了光学、AI、工程和消费电子领域的专家。这种多元化的背景和学科融合，使AKESO能够将视觉技术作为真正的多学科挑战来应对。',
    'about.stat1_k': '研发占比', 'about.stat2_k': '高学历占比', 'about.stat3_k': '专利总数', 'about.stat4_k': '覆盖国家',
    'about.values_index': '04 — 原则',
    'about.values_eyebrow': '我们的工作方式',
    'about.values_h2': '精准超越炒作。研究超越路线图。愿景超越捷径。',
    'about.v1_title': '精准超越炒作', 'about.v1_desc': '严格的技术论证和对可行性的诚实评估——以科学为根基，而非趋势周期或投资者叙事。',
    'about.v2_title': '研究驱动创新', 'about.v2_desc': 'AKESO开发的每项技术都以有据可查的研究、临床理解和系统工程为基础——而非仅凭直觉或迭代。',
    'about.v3_title': '以人为本的视觉技术', 'about.v3_desc': '人眼是设计任务书。AKESO构建服务于人类视觉生物学的技术——而非反之。',
    'about.v4_title': '长远思考', 'about.v4_desc': '基础技术需要时间。AKESO正在为下一代计算的视觉层构建基础设施——这个时间维度以年计，而非以季度计。',
    'about.v5_title': '科学严谨性', 'about.v5_desc': '已发表的研究、同行评审的成果和临床试验是标准。AKESO不发表无法证实的声明。',

    // Contact page
    'contact.eyebrow': '联系AKESO',
    'contact.h1': '欢迎<br/>联系我们。',
    'contact.intro': '欢迎就企业合作、研究协作、制造咨询及先进视觉技术讨论与我们取得联系——我们与构建下一代视觉层的团队携手合作。',
    'contact.inquiries_label': '咨询类型',
    'contact.ch1_title': '企业合作', 'contact.ch1_desc': '技术许可、联合开发协议，以及AKESO光学和视觉智能平台的B2B集成。',
    'contact.ch2_title': '研究协作', 'contact.ch2_desc': '光学、眼科、计算视觉和人类视觉系统领域的学术、临床和产业研究合作。',
    'contact.ch3_title': '制造咨询', 'contact.ch3_desc': '精密光学制造、光刻基础镜片生产及先进制造能力洽谈。',
    'contact.ch4_title': '技术洽谈', 'contact.ch4_desc': 'MetaRx™、Ai+和Xr+平台能力、路线图对齐及技术可行性评估。',
    'contact.ch5_title': '媒体与新闻', 'contact.ch5_desc': 'AKESO研究与技术进展的新闻咨询、编辑专访及媒体简报。',
    'contact.email_label': '电子邮件',
    'contact.email_sub': '所有咨询类型的直接联系方式。我们在2个工作日内回复。',
    'contact.social_label': '社交与网络',
    'contact.linkedin': 'LinkedIn — AKESO',
    'contact.hq_label': '总部',
    'contact.hq_address': '中国北京',
    'contact.hq_sub': '全球业务覆盖中国、印度、新加坡及日本',
    'contact.partner_index': '02 — 合作方式',
    'contact.partner_eyebrow': '我们的合作模式',
    'contact.partner_h2': 'AKESO与视觉技术领域的企业、研究机构和技术团队开展合作。',
    'contact.p1_title': '企业技术合作伙伴', 'contact.p1_desc': '将AKESO光学和视觉智能平台集成到现有产品开发流程中。',
    'contact.p2_title': '研究机构', 'contact.p2_desc': '光学、眼科、计算视觉和视觉系统领域的学术与临床研究合作。',
    'contact.p3_title': '制造合作伙伴', 'contact.p3_desc': '利用AKESO光刻和光学制造能力的精密制造合作。',
    'contact.p4_title': 'XR与显示企业', 'contact.p4_desc': 'XR、空间计算和下一代显示产品的光学架构与波导系统开发。',
    'contact.p5_title': '医疗与临床合作伙伴', 'contact.p5_desc': '临床试验合作、诊断平台开发及医疗级视觉技术验证。',
    'contact.p6_title': '投资与战略合作伙伴', 'contact.p6_desc': '战略投资洽谈、合资企业讨论及长期技术开发合作。',
  };

  // Apply extra translations on language switch
  var _origApply = null;
  function patchI18n() {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    function applyExtra(lang) {
      if (lang !== 'zh') return;
      Object.keys(EXTRA_ZH).forEach(function(k) {
        document.querySelectorAll('[data-i18n="' + k + '"]').forEach(function(el) {
          el.textContent = EXTRA_ZH[k];
        });
        document.querySelectorAll('[data-i18n-html="' + k + '"]').forEach(function(el) {
          el.innerHTML = EXTRA_ZH[k];
        });
      });
    }
    toggle.addEventListener('click', function() {
      setTimeout(function() {
        applyExtra(document.documentElement.dataset.lang);
      }, 20);
    });
    // apply on page load if saved lang is zh
    try {
      if (localStorage.getItem('akeso.lang') === 'zh') {
        setTimeout(function() { applyExtra('zh'); }, 50);
      }
    } catch(e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchI18n);
  } else {
    patchI18n();
  }
})();
