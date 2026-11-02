(() => {
  'use strict';

  // メニューはキーボード・タッチの両方で操作できます。
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  nav.classList.add('js-nav');
  menuButton.hidden = false;
  function closeMenu(restoreFocus = false) {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const opened = menuButton.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', opened);
    menuButton.setAttribute('aria-expanded', String(opened));
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  window.matchMedia('(min-width: 701px)').addEventListener('change', () => closeMenu());

  // サービスの一覧はHTMLにも含まれるため、JavaScriptなしでも閲覧できます。
  const serviceCards = [...document.querySelectorAll('.service-item')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const counter = document.querySelector('.service-count');
  const more = document.querySelector('.services-more');
  const showAll = document.querySelector('#show-all-services');
  let category = 'all';
  let expanded = false;
  function updateServices() {
    const matching = serviceCards.filter(card => category === 'all' || card.dataset.category === category);
    const visible = category === 'all' && !expanded ? matching.slice(0, 6) : matching;
    for (const card of serviceCards) card.hidden = !visible.includes(card);
    for (const filter of filters) {
      const active = filter.dataset.filter === category;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    }
    counter.textContent = `${visible.length} / ${matching.length} 件を表示`;
    more.hidden = category !== 'all' || expanded;
    showAll.setAttribute('aria-expanded', String(expanded));
  }
  for (const filter of filters) filter.addEventListener('click', () => {
    category = filter.dataset.filter;
    expanded = false;
    updateServices();
  });
  showAll.addEventListener('click', () => {
    expanded = true;
    updateServices();
    // 消えるボタンから、追加表示された最初の項目へフォーカスを移動。
    serviceCards[6]?.querySelector('summary')?.focus({ preventScroll: true });
  });
  document.querySelector('.service-toolbar').hidden = false;
  updateServices();

  // 相談文は端末内で作成し、ネットワーク送信や永続保存を行いません。
  const form = document.querySelector('#brief-form');
  const topic = document.querySelector('#brief-topic');
  const output = document.querySelector('#brief-output');
  const result = document.querySelector('.brief-result');
  const status = document.querySelector('.brief-status');
  document.querySelectorAll('[data-inquiry]').forEach(link => {
    link.addEventListener('click', () => {
      topic.value = link.dataset.inquiry;
      result.hidden = true;
      status.textContent = `「${topic.value}」を選択しました。ご予算やご希望を入力できます。`;
    });
  });
  form.addEventListener('input', () => {
    result.hidden = true;
    status.textContent = '';
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const message = String(values.get('message') || '').trim();
    output.value = [
      'ポートフォリオを拝見し、開発について相談したくご連絡しました。',
      '',
      `【相談内容】${values.get('topic')}`,
      `【予算の目安】${values.get('budget')}`,
      `【希望時期】${values.get('timing')}`,
      '',
      '【困っていること・実現したいこと】',
      message || 'まずは現状をお伝えし、進め方から相談したいです。',
      '',
      '対応可能な範囲と、進め方についてご相談させてください。',
    ].join('\n');
    result.hidden = false;
    status.textContent = '相談文を作成しました。内容を確認してコピーできます。まだ送信されていません。';
    output.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
  });
  document.querySelector('.brief-submit').disabled = false;
  document.querySelector('#copy-brief').addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(output.value);
      status.textContent = '相談文をコピーしました。ご利用の連絡先に貼り付けてお送りください。';
    } catch {
      output.focus();
      output.select();
      status.textContent = '自動コピーを利用できませんでした。選択された相談文を、コピー操作でコピーしてください。';
    }
  });
})();
