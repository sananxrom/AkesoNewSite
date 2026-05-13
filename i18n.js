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
