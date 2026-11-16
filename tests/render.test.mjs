import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
import { renderPage, escapeHtml, pageRoutes } from '../src/page.mjs';
import { getContent, stackLogos } from '../src/locales.mjs';
import { reviews, services, site } from '../src/content.mjs';
import { projects, projectCategories } from '../src/projects.mjs';
import { projectInsights } from '../src/project-insights.mjs';
import { getPortfolio } from '../src/portfolio.mjs';
import { getFeatured } from '../src/featured.mjs';
import { caseStudies } from '../src/project-case-studies.mjs';

const selectedIds = ['digital-certificates', 'flash-reserve', 'backend-audit', 'vivum-sallier', 'visual-anatomy'];
const cardFor = (html, id) => html.match(new RegExp('<article[^>]*data-project-id="' + id + '"[^>]*>[\\s\\S]*?</article>'))?.[0];
const countCards = html => (html.match(/class="project-card(?: featured-case)?"/g) || []).length;

test('both languages have complete service and FAQ pages with a concise homepage', () => {
  assert.equal(services.length, 13);
  for (const locale of ['ja', 'en']) {
    const html = renderPage(locale), fullServices = renderPage(locale, 'services'), content = getContent(locale);
    assert.ok(html.includes(`<html lang="${locale}">`));
    assert.ok(html.includes(`rel="canonical" href="${site.siteUrl}${locale === 'en' ? '/en/' : '/'}"`));
    assert.equal((fullServices.match(/class="service-item"/g) || []).length, services.length);
    assert.equal((html.match(/class="service-item"/g) || []).length, 3);
    assert.equal(countCards(html), 5);
    assert.equal((html.match(/class="review-card"/g) || []).length, reviews.length);
    assert.ok(html.includes('hreflang="ja"') && html.includes('hreflang="en"'));
    for (const item of content.services) assert.ok(fullServices.includes(`<h3>${escapeHtml(item.title)}</h3>`));
    assert.equal(content.faqs.length, 9);
    const faqPage = renderPage(locale, 'faq');
    for (const [question, answer] of content.faqs) assert.ok(faqPage.includes(escapeHtml(question)) && faqPage.includes(escapeHtml(answer)));
  }
});

test('supplied client comments remain exact and English translations retain Japanese originals', () => {
  // Fingerprints of the six owner-supplied original comments, before the presentation changes.
  const originals = [
    '41be415115c836e58d6f854ef8b315aa23153d107cfce7a7a5a8f3738462ce0d',
    'c5eb449b0adc18d59ba3ebb29685b850832876b988128311fa385630285dfdb4',
    '3872169ae2ca7336c3a6a937cd4c8df52b08b5d1488909246b5bb6ef400d7da2',
    '84d9f860d674b4f60399514b905fff5c2938c648e1a04fd9876263ff94f7680a',
    'ad411bda7a7beb59c31d84836b6c41e92983221430f9a720e3e4feda2810b2be',
    'dfd6b0f3858f9934045d57e54cf8110f9ec268ad5a6917a21b9e83d983cd89a7',
  ];
  assert.deepEqual(reviews.map(review => createHash('sha256').update(review.comment).digest('hex')), originals);
  for (const locale of ['ja', 'en']) {
    const html = renderPage(locale);
    for (const [index, review] of reviews.entries()) {
      assert.ok(html.includes(`id="client-voice-${index + 1}"`));
      for (const paragraph of review.comment.split('\n\n')) assert.ok(html.includes(escapeHtml(paragraph)));
    }
    const voices = html.match(/<section id="reviews"[\s\S]*?<\/section>/)[0];
    assert.ok(!voices.includes('ランサーズ') && !voices.includes('評価：満足'));
  }
  assert.ok(renderPage('en').includes('lang="ja"'));
  assert.match(getContent('en').copy.reviewTranslation, /translat(?:ed|ion)/i);
  assert.throws(() => getContent('fr'));
});

test('all original screenshots and technology assets remain local and present', async () => {
  for (const review of reviews) if (review.image) assert.ok((await readFile(new URL(`../public${review.image}`, import.meta.url))).length > 0);
  for (const project of getPortfolio('ja')) assert.ok((await readFile(new URL(`../public${project.image}`, import.meta.url))).length > (project.imageKind === 'diagram' ? 0 : 1000), project.id);
  for (const [, slug] of stackLogos) {
    const svg = await readFile(new URL(`../public/images/stack/${slug}.svg`, import.meta.url), 'utf8');
    assert.ok(svg.includes('<svg'));
    assert.ok(!/<script|<foreignObject|\bon\w+\s*=/i.test(svg));
  }
  assert.ok(!renderPage('en').includes('<img src="https:'));
});

test('content escaping preserves text without permitting markup injection', () => {
  assert.equal(escapeHtml('<img src=x onerror="x"> & \'hi\''), '&lt;img src=x onerror=&quot;x&quot;&gt; &amp; &#39;hi&#39;');
});

test('the 74-entry catalog retains the original 70 sites and adds complete bilingual case studies', () => {
  assert.equal(projects.length, 70);
  assert.equal(new Set(projects.map(project => project.id)).size, 70);
  assert.equal(new Set(projects.map(project => project.url.replace(/\/$/, ''))).size, 70);
  for (const locale of ['ja', 'en']) {
    const catalog = getPortfolio(locale), html = renderPage(locale, 'projects');
    assert.equal(catalog.length, 74);
    assert.equal(new Set(catalog.map(project => project.id)).size, 74);
    assert.deepEqual(new Set(Object.keys(caseStudies)), new Set(catalog.map(project => project.id)));
    assert.equal(countCards(html), 74);
    for (const project of catalog) {
      const card = cardFor(html, project.id);
      assert.ok(card, project.id);
      assert.ok(card.includes(`id="project-${project.id}"`));
      assert.ok(card.includes(`<h3>${escapeHtml(project.title)}</h3>`));
      assert.ok(card.includes(escapeHtml(project.lead)));
      assert.ok(project.categories.every(key => projectCategories[key]), project.id);
      assert.ok(project.lead.trim() && project.strength.trim() && project.focus.length, project.id);
      if (project.url) assert.equal(new URL(project.url).protocol, 'https:');
      if (project.url && project.websiteAvailable !== false && project.status !== 'paused') assert.ok(card.includes(`href="${escapeHtml(project.url)}"`), project.id);
      else assert.doesNotMatch(card, /class="project-site /, 'Unavailable website must not be offered: ' + project.id);
      for (const original of projects) assert.ok(catalog.some(item => item.id === original.id));
    }
    assert.ok(html.includes('id="project-search"') && html.includes('id="project-dialog"'));
  }
});

test('selected contributions are identical on the homepage and in the library', () => {
  for (const locale of ['ja', 'en']) {
    const home = renderPage(locale), library = renderPage(locale, 'projects'), catalog = getPortfolio(locale);
    for (const id of selectedIds) {
      const project = catalog.find(item => item.id === id);
      assert.ok(project?.role, id);
      for (const html of [home, library]) {
        const card = cardFor(html, id);
        assert.ok(card.includes(escapeHtml(project.role)), id);
        assert.ok(card.includes(escapeHtml(project.lead)), id);
        assert.ok(card.includes(`#client-voice-${project.featured.voice}`), id);
      }
    }
    for (const id of ['digital-certificates', 'backend-audit']) {
      const project = catalog.find(item => item.id === id);
      assert.equal(project.imageKind, 'diagram');
      assert.equal(project.websiteAvailable, id === 'digital-certificates');
      assert.equal(project.url, id === 'digital-certificates' ? 'https://ssi-sake.jp/' : '');
    }
    for (const page of ['', 'projects', 'about']) {
      assert.ok(renderPage(locale, page).includes('href="https://ssi-sake.jp/"'), locale + '/' + page);
    }
  }
});

test('every route has one main heading, unique IDs and valid internal links without personal contact details', () => {
  const rendered = new Map();
  for (const locale of ['ja', 'en']) for (const page of pageRoutes) {
    const path = `${locale === 'en' ? '/en/' : '/'}${page ? page + '/' : ''}`, html = renderPage(locale, page);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, `Duplicate ID on ${path}`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `Heading on ${path}`);
    assert.ok(html.includes(`rel="canonical" href="${site.siteUrl}${path}"`));
    assert.doesNotMatch(html, /mailto:|data-email=|[\w.+-]+@[\w.-]+\.[a-z]{2,}/i, `Public email on ${path}`);
    assert.doesNotMatch(html, /href=""/, `Empty link on ${path}`);
    assert.ok(!html.includes('undefined') && !html.includes('[object Object]'));
    rendered.set(path, { html, ids: new Set(ids) });
  }
  for (const [path, { html }] of rendered) for (const [, href] of html.matchAll(/\bhref="([^"]+)"/g)) {
    const target = new URL(href, new URL(path, site.siteUrl));
    assert.ok(!/(^|\.)(lancers\.jp|crowdworks\.jp)$/i.test(target.hostname), 'Platform link remains: ' + path + ' → ' + href);
    if (target.origin !== new URL(site.siteUrl).origin || /\.(svg|webp|avif|jpg|png|css|pdf)$/.test(target.pathname)) continue;
    assert.ok(rendered.has(target.pathname), `Missing internal page: ${path} → ${href}`);
    if (target.hash) assert.ok(rendered.get(target.pathname).ids.has(target.hash.slice(1)), `Missing anchor: ${path} → ${href}`);
  }
});

test('the hero covers every site using its selected screenshot without exposing unavailable external websites', () => {
  assert.equal(site.ownerName, '');
  for (const locale of ['ja', 'en']) {
    const html = renderPage(locale), hero = html.match(/<section id="top"[\s\S]*?<\/section>/)[0];
    const introduction = hero.slice(0, hero.indexOf('<div class="hero-showcase'));
    assert.doesNotMatch(introduction, /11年|11 years|YEARS OF DEVELOPMENT/);
    const featuredImages = new Map(getFeatured(locale).filter(project => project.review.image).map(project => [project.id, project.review.image]));
    const screens = getPortfolio(locale).filter(project => project.imageKind !== 'diagram');
    for (const project of screens) {
      const image = featuredImages.get(project.id) || project.image;
      assert.ok(hero.includes(`src="${escapeHtml(image)}"`), project.id);
      assert.ok(hero.includes(`href="${locale === 'en' ? '/en/' : '/'}projects/#project-${project.id}"`), project.id);
      if (project.websiteAvailable === false) assert.ok(!html.includes(`href="${escapeHtml(project.url)}"`), project.id);
    }
    assert.equal((hero.match(/class="hero-slide"/g) || []).length, screens.length);
    assert.doesNotMatch(hero, /src="\/images\/cases\//);
  }
});

test('public observations retain source evidence without inventing archived store functions', async () => {
  const expected = new Set([...projects.map(project => project.id), 'flash-reserve', 'visual-anatomy']);
  assert.deepEqual(new Set(Object.keys(projectInsights)), expected);
  for (const [id, insight] of Object.entries(projectInsights)) {
    assert.equal(insight.id, id);
    assert.ok(['verified', 'partial'].includes(insight.status), id);
    if (insight.status === 'partial') assert.ok(insight.availability.ja && insight.availability.en, id);
    for (const locale of ['ja', 'en']) {
      assert.ok(insight.summary[locale]?.trim(), id);
      assert.ok(insight.features.length >= 1 && insight.features.every(feature => feature[locale]?.trim()), id);
    }
    assert.ok(insight.sources.length > 0, id);
    for (const source of insight.sources) {
      if (source.url.startsWith('/images/')) assert.ok((await readFile(new URL('../public' + source.url, import.meta.url))).length > 0);
      else assert.equal(new URL(source.url).protocol, 'https:', id);
    }
    for (const technology of insight.technologies) {
      assert.ok(['public', 'owner'].includes(technology.basis), id);
      assert.ok(technology.name.trim() && technology.evidence.trim(), id);
    }
  }
  const ramutei = projectInsights.ramutei;
  assert.deepEqual(ramutei.technologies.map(item => [item.name, item.basis]), [['Shopify', 'owner']]);
  assert.doesNotMatch(JSON.stringify(ramutei.features), /cloud|CSS|related websites|暗号|関連サイト/i);
  assert.equal(projects.find(project => project.id === 'orcasa').websiteAvailable, false);
  assert.equal(projects.find(project => project.id === 'ramutei').websiteAvailable, false);
  for (const locale of ['ja', 'en']) {
    const html = renderPage(locale, 'projects');
    assert.doesNotMatch(html, /b2b[.]daiichisekken[.]com/);
    assert.equal((html.match(/<template data-project-insights>/g) || []).length, 74);
    assert.equal((renderPage(locale, 'skills').match(/class="capability-card"/g) || []).length, 6);
  }
});

// Run the actual carousel code with deterministic image failures and time controls.
const flush = () => new Promise(resolve => setImmediate(resolve));
async function carouselFixture(available, { reduced = false, deferred = -1 } = {}) {
  const source = await readFile(new URL('../public/app.js', import.meta.url), 'utf8');
  const start = source.indexOf("  const showcase = document.querySelector('.hero-showcase');"), end = source.indexOf('  const sectionLinks =');
  assert.ok(start >= 0 && end > start);
  const timers = new Map(); let timerId = 0, motion = !reduced, observer;
  const node = () => ({ hidden: false, disabled: false, textContent: '', attrs: {}, events: {}, setAttribute(key, value) { this.attrs[key] = value; }, getAttribute(key) { return this.attrs[key]; }, addEventListener(key, value) { this.events[key] = value; } });
  let release; const pending = deferred >= 0 ? new Promise(resolve => { release = resolve; }) : null;
  const slides = available.map((good, index) => {
    const item = node(); item.hidden = index !== 0; item.title = { textContent: 'Project ' + index };
    item.image = { complete: index !== deferred, naturalWidth: good && index !== deferred ? 100 : 0, loading: 'lazy', async decode() { if (index === deferred) { await pending; this.complete = true; this.naturalWidth = good ? 100 : 0; } if (!good) throw new Error('Image failed'); } };
    item.querySelector = selector => selector === 'img' ? item.image : item.title;
    return item;
  });
  const controls = Object.fromEntries(['.hero-slides', '.hero-autoplay', '.hero-position', '.hero-status', '.hero-carousel-controls', '.hero-prev', '.hero-next'].map(key => [key, node()]));
  const icons = { '.hero-pause-icon': node(), '.hero-play-icon': node() }; controls['.hero-autoplay'].querySelector = selector => icons[selector];
  const showcase = node(); showcase.querySelector = selector => controls[selector]; showcase.querySelectorAll = () => slides; showcase.contains = element => element === controls['.hero-autoplay'];
  const root = { classList: { contains: () => false } };
  const document = { hidden: false, activeElement: null, querySelector: () => showcase, addEventListener() {}, removeEventListener() {} };
  const context = { root, document, en: true, window: { addEventListener() {} }, moving: () => motion, MutationObserver: class { constructor(callback) { observer = callback; } observe() {} disconnect() {} }, setTimeout(callback, delay) { const id = ++timerId; timers.set(id, { callback, delay }); return id; }, clearTimeout(id) { timers.delete(id); }, queueMicrotask };
  vm.runInNewContext('(() => {' + source.slice(start, end) + '})()', context);
  await flush();
  return {
    timers, release, active: () => slides.findIndex(slide => !slide.hidden),
    async tick() { assert.equal(timers.size, 1); const [id, { callback, delay }] = timers.entries().next().value; assert.equal(delay, 2000); timers.delete(id); callback(); await flush(); },
    async click(selector) { controls[selector].events.click(); await flush(); },
    async setMotion(value) { motion = value; observer(); await flush(); },
  };
}

test('the hero skips failed previews in either direction while retaining the two-second interval', async () => {
  const carousel = await carouselFixture([true, false, true, true]);
  await carousel.tick(); assert.equal(carousel.active(), 2);
  await carousel.tick(); assert.equal(carousel.active(), 3);
  await carousel.click('.hero-prev'); assert.equal(carousel.active(), 2);
  await carousel.click('.hero-prev'); assert.equal(carousel.active(), 0);
  await carousel.click('.hero-autoplay'); assert.equal(carousel.timers.size, 0);
  await carousel.click('.hero-next'); assert.equal(carousel.active(), 2); assert.equal(carousel.timers.size, 0);
  const allFailed = await carouselFixture([false, false, false]);
  await allFailed.tick(); assert.equal(allFailed.active(), 0); assert.equal(allFailed.timers.size, 1);
});

test('image failure recovery respects reduced motion and ignores stale image requests', async () => {
  const reduced = await carouselFixture([true, false, true], { reduced: true });
  assert.equal(reduced.timers.size, 0); await reduced.click('.hero-next'); assert.equal(reduced.active(), 2); assert.equal(reduced.timers.size, 0);
  const pending = await carouselFixture([true, true, true], { deferred: 1 });
  const tick = pending.tick(); await pending.setMotion(false); pending.release(); await tick; await flush();
  assert.equal(pending.active(), 0); assert.equal(pending.timers.size, 0);
  await pending.setMotion(true); await pending.tick(); assert.equal(pending.active(), 1);
  const race = await carouselFixture([true, true, true], { deferred: 1 });
  const first = race.click('.hero-next'); await race.click('.hero-next'); assert.equal(race.active(), 2);
  race.release(); await first; await flush(); assert.equal(race.active(), 2);
});