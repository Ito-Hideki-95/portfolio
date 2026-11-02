import { site, experiences, services, technologies, faqs } from './content.mjs';

export const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const e = escapeHtml;
const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const northeast = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const mark = '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="m14 10-10 10 10 10m12-20 10 10-10 10M23 7l-6 26" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const categoryLabels = { ai: 'AI・自動化', system: '業務システム', web: 'Web・EC' };
const sectionLabel = (n, text) => `<div class="eyebrow"><span class="section-number">${n}</span>${text}</div>`;

function workVisual(work) {
  if (work.image) return `<div class="work-visual has-image"><img src="${e(work.image)}" alt="${e(work.imageAlt)}" width="1200" height="800" loading="lazy"></div>`;
  const content = {
    business: `<div class="mini-window"><div class="window-bar"><span class="window-dots">● ● ●</span><span>WORKSPACE / 業務管理</span><span>↗</span></div><div class="dashboard"><aside><span class="mini-mark">${mark}</span><i class="active"></i><i></i><i></i><i></i></aside><div class="dashboard-body"><div class="dashboard-heading"><b>業務の流れを、ひとつに。</b><span>OVERVIEW</span></div><div class="mini-stat-row"><div><span>データ管理</span><b>集約</b></div><div><span>申請・承認</span><b>連携</b></div><div><span>操作履歴</span><b>記録</b></div></div><div class="mini-table"><div><span>WORKFLOW</span><span>STATUS</span></div><div><span><i></i>条件の確認</span><em>確認</em></div><div><span><i></i>候補の管理</span><em>管理</em></div><div><span><i></i>帳票の出力</span><em>出力</em></div></div></div></div></div>`,
    reservation: `<div class="booking-card"><div class="booking-top"><span>BOOKING FLOW</span><span>↗</span></div><b>つながる、サービス体験。</b><div class="booking-grid">${Array.from({ length: 14 }, (_, i) => `<span class="${[3, 4, 8, 11].includes(i) ? 'selected' : ''}">${String(i + 1).padStart(2, '0')}</span>`).join('')}</div><div class="booking-footer"><span>予約</span><i>→</i><span>通知</span><i>→</i><span>決済</span></div></div>`,
    automation: `<div class="automation-flow"><div class="flow-source"><span>DOCUMENTS</span><div class="paper-stack"><i></i><i></i><i></i><b>資料・データ</b></div></div><span class="flow-line"></span><div class="ai-core">${mark}<b>AI</b></div><span class="flow-line"></span><div class="flow-output"><span>OUTPUT</span><div><i>✓</i> 検索</div><div><i>✓</i> 集計</div><div><i>✓</i> 連携</div></div></div>`,
  };
  return `<div class="work-visual ${e(work.theme)}" role="img" aria-label="${e(work.domain)}の構成イメージ。実際の納品画面ではありません。"><div class="visual-content" aria-hidden="true">${content[work.theme]}</div><span class="visual-note">ILLUSTRATION / 構成イメージ</span></div>`;
}

export function renderPage() {
  const title = `${site.ownerName || site.brandName} | 業務システム・AI・Web開発`;
  const contactLink = site.contactUrl ? `<a class="button button-lime" href="${e(site.contactUrl)}" target="_blank" rel="noopener noreferrer">${e(site.contactLabel)}<span class="sr-only">（新しいタブで開きます）</span>${northeast}</a>` : '';
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f6f7f2">
  <title>${e(title)}</title>
  <meta name="description" content="${e(site.description)}">
  <meta name="robots" content="${site.indexable ? 'index,follow' : 'noindex,nofollow'}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ja_JP">
  <meta property="og:title" content="${e(title)}">
  <meta property="og:description" content="${e(site.description)}">
  <meta property="og:site_name" content="${e(site.brandName)}">
  ${site.siteUrl ? `<link rel="canonical" href="${e(site.siteUrl)}"><meta property="og:url" content="${e(site.siteUrl)}">` : ''}
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css">
  <script src="/app.js" defer></script>
</head>
<body>
<a class="skip-link" href="#main">本文へ移動</a>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="#top" aria-label="${e(site.brandName)} トップへ"><span class="brand-mark">${mark}</span><span>${e(site.brandName)}<small>SOFTWARE & DIGITAL SOLUTIONS</small></span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" hidden><span>メニュー</span><span class="menu-lines" aria-hidden="true"></span></button>
    <nav id="main-nav" aria-label="メインナビゲーション"><a href="#experience">開発経験</a><a href="#services">サービス</a><a href="#about">私について</a><a class="nav-contact" href="#contact">ご相談はこちら ${northeast}</a></nav>
  </div>
</header>
<main id="main">
  <section class="hero container" id="top" aria-labelledby="hero-heading">
    <div class="hero-copy">
      <p class="eyebrow hero-eyebrow"><span class="status-dot"></span> YOUR DEVELOPMENT PARTNER</p>
      <h1 id="hero-heading">事業に寄り添う。<br>技術で、<span class="hero-emphasis">前へ。</span></h1>
      <p class="hero-lead">業務を理解し、使い続けられるシステムへ。</p>
      <p class="hero-description">業務システム・AI・Web／アプリ開発。<br>課題の整理から設計・実装、公開後の運用まで。<br>あなたの事業に、技術のパートナーを。</p>
      <div class="hero-actions"><a class="button button-dark" href="#contact">プロジェクトを相談する ${northeast}</a><a class="text-link" href="#experience">開発経験を見る ${arrow}</a></div>
      <p class="hero-footnote">小さな改善も、構想段階のご相談も。</p>
    </div>
    <figure class="hero-art">
      <div class="art-grid" aria-hidden="true"></div>
      <div class="art-caption" aria-hidden="true"><span>FROM IDEA TO OPERATION</span><span>01 — 04</span></div>
      <div class="orbit orbit-one" aria-hidden="true"></div><div class="orbit orbit-two" aria-hidden="true"></div>
      <div class="blueprint-card" aria-hidden="true">
        <div class="blueprint-top"><span class="tiny-cross">＋</span> A SYSTEM THAT WORKS <span>↗</span></div>
        <div class="blueprint-title">想いを、仕組みに。</div>
        <div class="blueprint-sub">DESIGN WITH PURPOSE.</div>
        <div class="blueprint-nodes"><div><span>01</span><b>理解</b><small>DISCOVER</small></div><i>→</i><div><span>02</span><b>設計</b><small>DESIGN</small></div><i>→</i><div><span>03</span><b>実装</b><small>BUILD</small></div></div>
        <div class="blueprint-bottom"><span class="status-dot"></span> BUSINESS × TECHNOLOGY <span>＋</span></div>
      </div>
      <div class="operation-card" aria-hidden="true"><span class="operation-icon">${mark}</span><div><small>04 / KEEP IMPROVING</small><b>つくった、その先まで。</b><span>テスト・公開・保守・引き継ぎ</span></div><span class="operation-check">✓</span></div>
      <figcaption><span class="art-cross">＋</span> 課題の整理から、日々の運用まで。<span>＋</span></figcaption>
    </figure>
  </section>

  <div class="container trust-strip" aria-label="プロフィールのポイント">
    <div class="trust-intro"><span class="eyebrow">EXPERIENCE & COMMITMENT</span><p>積み重ねた経験を、<br>次のプロジェクトへ。</p></div>
    <div class="trust-stat"><span>開発歴</span><p><strong>${site.experienceYears}</strong><span>年</span></p></div>
    <div class="trust-stat"><span>高評価</span><p><strong>${site.positiveReviews}<i>+</i></strong><span>件</span></p></div>
    <div class="trust-promise"><span class="promise-icon">↗</span><p>設計から運用まで<small>一貫した開発・サポート</small></p></div>
  </div>

  <section id="experience" class="section container" aria-labelledby="experience-heading">
    <div class="section-heading">${sectionLabel('01', 'EXPERIENCE')}<div class="heading-row"><h2 id="experience-heading">業務の現場に、<br class="mobile-only">技術を届ける。</h2><p>複雑なルールも、日々の手作業も。<br>業務の背景を理解するところから始めます。</p></div></div>
    <div class="works-grid">${experiences.map((w, i) => `<article class="work-card ${i === 0 ? 'work-featured' : ''}">
      ${workVisual(w)}
      <div class="work-copy"><div class="work-meta"><span>${w.number} / ${e(w.category)}</span><span>↗</span></div><h3>${e(w.title).replace(/\n/g, '<br>')}</h3><p class="work-domain">${e(w.domain)}</p><p class="work-description">${e(w.description)}</p><ul class="tag-list">${w.tags.map(t => `<li>${e(t)}</li>`).join('')}</ul><details class="work-detail"><summary>経験した内容と大切にしていること<span aria-hidden="true">＋</span></summary><div><p><b>経験した内容</b>${e(w.scope)}</p><p><b>設計で大切にしていること</b>${e(w.consideration)}</p></div></details></div>
    </article>`).join('')}</div>
    <p class="section-note">開発経験の概要を掲載しています。構成イメージは説明用の図で、実際の納品画面ではありません。</p>
  </section>

  <section id="services" class="section services-section" aria-labelledby="services-heading"><div class="container">
    <div class="section-heading">${sectionLabel('02', 'WHAT I CAN DO')}<div class="heading-row"><h2 id="services-heading">いま必要なことから、<br>その先の成長まで。</h2><p>目的に合わせて、技術と規模を選びます。<br>まずは課題に近いサービスをご覧ください。</p></div></div>
    <div class="service-toolbar" hidden><div class="filter-group" role="group" aria-label="サービスのカテゴリー"><button type="button" class="filter active" data-filter="all" aria-pressed="true">すべて <span>${services.length}</span></button>${Object.entries(categoryLabels).map(([key, label]) => `<button type="button" class="filter" data-filter="${key}" aria-pressed="false">${label}<span>${services.filter(s => s.category === key).length}</span></button>`).join('')}</div><p class="service-count" aria-live="polite" aria-atomic="true"></p></div>
    <div class="services-grid">${services.map(s => `<article class="service-item" data-category="${s.category}" data-service="${e(s.title)}"><span class="service-index">${s.id}</span><div class="service-content"><span class="service-category">${categoryLabels[s.category]}</span><h3>${e(s.title)}</h3><p>${e(s.text)}</p><details><summary>対応内容を見る <span aria-hidden="true">＋</span></summary><div class="service-details"><p>${e(s.scope)}</p><a href="#contact" data-inquiry="${e(s.title)}">この内容で相談を整理する ${arrow}</a></div></details></div></article>`).join('')}</div>
    <div class="services-more" hidden><button class="button button-outline" id="show-all-services" type="button" aria-expanded="false">すべてのサービスを見る ${arrow}</button></div>
    <div class="maintenance-note"><div class="maintenance-symbol">＋</div><div><h3>既存システムの改善・保守、アプリ開発も。</h3><p>障害の切り分け、性能・セキュリティ改善、他社制作物の引き継ぎまで。<br>掲載内容に当てはまらないご相談も、お聞かせください。</p></div><a class="text-link" href="#contact">相談する ${northeast}</a></div>
    <p class="section-note">費用・納期は、対応範囲や利用環境を確認して個別にお見積もりします。</p>
  </div></section>

  <section id="process" class="section container" aria-labelledby="process-heading"><div class="process-layout"><div class="process-intro">${sectionLabel('03', 'HOW WE WORK')}<h2 id="process-heading">見通しのある開発を、<br>一緒に。</h2><p>専門用語より、わかりやすい対話を。<br>「何を、いつまでに、どこまで」を共有し、<br>納得して進められる開発を大切にします。</p><a class="text-link" href="#contact">まだ曖昧な構想でも、ご相談ください ${arrow}</a></div><ol class="process-steps">
    <li><span>01</span><div><h3>お話を聞く、業務を知る</h3><p>現状のフローと課題を確認。優先順位を整理し、必要な機能と実装方法を考えます。</p></div></li>
    <li><span>02</span><div><h3>範囲とゴールを揃える</h3><p>対象範囲・納期・受入条件を着手前に明確化。費用対効果と拡張性も踏まえてご提案します。</p></div></li>
    <li><span>03</span><div><h3>つくる、確かめる、共有する</h3><p>設計・実装を進めながら進捗と課題を共有。実際の業務を想定して品質と動作を確認します。</p></div></li>
    <li><span>04</span><div><h3>公開する、運用につなぐ</h3><p>テスト結果と操作資料を揃えて引き継ぎ。公開後の運用・保守も、合意した範囲で対応します。</p></div></li>
  </ol></div></section>

  <section id="about" class="about-section" aria-labelledby="about-heading"><div class="container about-layout"><div class="about-title">${sectionLabel('04', 'ABOUT ME')}<h2 id="about-heading">つくる前から、<br>つくった後まで。</h2><div class="about-signature">${mark}<span>${e(site.ownerName || site.brandName)}<small>${e(site.role)}</small></span></div></div><div class="about-copy"><p class="about-lead">現場で継続利用できる<br>システムづくりを、大切にしています。</p><p>プロフィールをご覧いただき、ありがとうございます。業務理解から設計・実装・テスト・公開・保守まで、一貫した開発を得意としています。</p><p>課題が明確でない段階でも、業務フローと優先順位を整理し、費用対効果や拡張性を踏まえて実装方法をご提案します。部分改修や、小規模なご相談も歓迎します。</p><details class="tech-details"><summary>対応技術を見る<span aria-hidden="true">＋</span></summary><dl>${technologies.map(([label, tech]) => `<div><dt>${e(label)}</dt><dd>${e(tech)}</dd></div>`).join('')}</dl></details></div></div></section>

  <section id="faq" class="section container faq-section" aria-labelledby="faq-heading"><div>${sectionLabel('05', 'QUESTIONS')}<h2 id="faq-heading">ご相談の前に。</h2><p>よくいただくご相談について。</p></div><div class="faq-list">${faqs.map(([q, a], i) => `<details><summary><span class="faq-number">Q${String(i + 1).padStart(2, '0')}</span><span>${e(q)}</span><span class="faq-plus" aria-hidden="true">＋</span></summary><p>${e(a)}</p></details>`).join('')}</div></section>

  <section id="contact" class="contact-section" aria-labelledby="contact-heading"><div class="container contact-layout"><div class="contact-intro">${sectionLabel('06', 'LET’S TALK')}<h2 id="contact-heading">その「できたら」を、<br>一緒にかたちに。</h2><p>要件がまとまっていなくても大丈夫です。<br>いま困っていること、実現したいこと。<br>そこから、次の一歩を考えましょう。</p>${contactLink}<div class="contact-note"><span>FIRST STEP</span><p>ご相談の前に、フォームで<br class="desktop-only">伝えたい内容を整理できます。</p></div></div>
    <div class="brief-panel"><p class="brief-eyebrow">PROJECT BRIEF</p><h3>相談内容を、かんたんに整理。</h3><p class="brief-description">入力した内容から相談文を作成できます。<br>このフォームからの送信・保存は行いません。</p><noscript><p class="no-js-note">相談文の作成にはJavaScriptを有効にしてください。ご相談の際は、内容・予算・希望時期をお知らせください。</p></noscript>
      <form id="brief-form"><label for="brief-topic">ご相談の内容</label><select id="brief-topic" name="topic"><option value="まだ決まっていない・まずは相談したい">まだ決まっていない・まずは相談したい</option>${services.map(s => `<option value="${e(s.title)}">${e(s.title)}</option>`).join('')}<option>既存システムの改善・保守</option><option>アプリ開発</option><option>その他</option></select><div class="form-row"><div><label for="brief-budget">ご予算の目安</label><select id="brief-budget" name="budget"><option>相談して決めたい</option>10万円未満</option><option>10〜30万円</option><option>30〜100万円</option><option>100万円以上</option></select></div><div><label for="brief-timing">ご希望の時期</label><select id="brief-timing" name="timing"><option>相談して決めたい</option><option>できるだけ早く</option><option>1〜3か月以内</option><option>3か月以降</option></select></div></div><label for="brief-message">困っていること・実現したいこと <span>任意</span></label><textarea id="brief-message" name="message" rows="3" maxlength="3000" placeholder="例：Excelで管理している案件情報を、チームで共有できるようにしたい。"></textarea><button class="button button-dark brief-submit" type="submit" disabled>相談文を作成する ${arrow}</button><p class="form-privacy">個人情報や機密情報の入力はお控えください。</p></form>
      <div class="brief-result" hidden><label for="brief-output">作成した相談文</label><textarea id="brief-output" rows="9" readonly></textarea><button class="button button-outline" id="copy-brief" type="button">相談文をコピー ${arrow}</button><p>コピーした文章を、ご利用の連絡先${site.contactUrl ? '（上記の相談ボタン）' : ''}からお送りください。</p></div><p class="brief-status" role="status" aria-live="polite"></p>
    </div>
  </div></section>
</main>
<footer class="site-footer"><div class="container footer-main"><a class="brand" href="#top"><span class="brand-mark">${mark}</span><span>${e(site.brandName)}<small>IDEAS INTO WORKING SYSTEMS.</small></span></a><a class="back-top" href="#top">ページの先頭へ <span aria-hidden="true">↑</span></a></div><div class="container footer-bottom"><small>© ${new Date().getUTCFullYear()} ${e(site.ownerName || site.brandName)}</small><span>DESIGNED AROUND YOUR BUSINESS.</span></div></footer>
</body>
</html>`;
}
