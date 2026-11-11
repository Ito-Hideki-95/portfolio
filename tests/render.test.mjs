import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderPage, escapeHtml, pageRoutes } from '../src/page.mjs';
import { getContent, stackLogos } from '../src/locales.mjs';
import { reviews, services, site } from '../src/content.mjs';
import { projects, projectCategories } from '../src/projects.mjs';

test('both languages contain complete content, matching canonical URLs and language alternatives', () => {
  for (const locale of ['ja', 'en']) {
    const html = renderPage(locale);
    const content = getContent(locale);
    assert.ok(html.includes(`<html lang="${locale}">`));
    assert.ok(html.includes(`rel="canonical" href="${site.siteUrl}${locale === 'en' ? '/en/' : '/'}"`));
    assert.equal((html.match(/class="service-item"/g) || []).length, services.length);
    assert.equal((html.match(/class="review-card"/g) || []).length, reviews.length);
    assert.ok(html.includes('hreflang="ja"') && html.includes('hreflang="en"'));
    for (const item of content.services) assert.ok(html.includes(`<h3>${escapeHtml(item.title)}</h3>`));
    assert.ok(!html.includes('undefined') && !html.includes('[object Object]'));
    assert.equal(content.faqs.length, 5);
  }
});

test('client comments remain intact; English translations retain accessible Japanese originals', () => {
  for (const locale of ['ja', 'en']) {
    const html = renderPage(locale);
    for (const review of reviews) for (const paragraph of review.comment.split('\n\n')) assert.ok(html.includes(escapeHtml(paragraph)));
  }
  assert.ok(renderPage('en').includes('lang="ja"'));
  assert.ok(getContent('en').copy.reviewNote.includes('translations'));
  assert.throws(() => getContent('fr'));
});

test('all screenshot and stack assets exist locally, without external image dependencies', async () => {
  for (const review of reviews) assert.ok((await readFile(new URL(`../public${review.image}`, import.meta.url))).length > 0);
  for (const [, slug] of stackLogos) {
    const svg = await readFile(new URL(`../public/images/stack/${slug}.svg`, import.meta.url), 'utf8');
    assert.ok(svg.includes('<svg'));
    assert.ok(!/<script|<foreignObject|\bon\w+\s*=/i.test(svg));
  }
  assert.ok(!renderPage('en').includes('<img src="https:'));
});

test('content escaping preserves text without allowing markup injection', () => {
  assert.equal(escapeHtml('<img src=x onerror="x"> & \'hi\''), '&lt;img src=x onerror=&quot;x&quot;&gt; &amp; &#39;hi&#39;');
});

test('all 71 supplied pages are unique, translated, linked, categorized and backed by local images', async () => {
  assert.equal(projects.length, 71);
  assert.equal(new Set(projects.map(p => p.id)).size, 71);
  assert.equal(new Set(projects.map(p => p.url.replace(/\/$/, ''))).size, 71);
  for (const project of projects) {
    assert.equal(new URL(project.url).protocol, 'https:');
    assert.ok(project.categories.every(key => projectCategories[key]));
    assert.ok((await readFile(new URL(`../public${project.image}`, import.meta.url))).length > 1000);
    for (const locale of ['ja', 'en']) {
      const html = renderPage(locale,'projects');
      assert.ok(html.includes(`href="${escapeHtml(project.url)}"`));
      assert.ok(html.includes(`<h3>${escapeHtml(project.name[locale])}</h3>`));
      assert.ok(html.includes(escapeHtml(project.description[locale])));
    }
  }
  for (const locale of ['ja', 'en']) {
    const html = renderPage(locale,'projects');
    assert.equal((html.match(/class="project-card"/g) || []).length, 71);
    assert.ok(html.includes('id="project-search"') && html.includes('id="project-dialog"'));
  }
});

test('every bilingual route has a matching canonical, one heading, unique IDs and working internal links', () => {
  const rendered = new Map();
  for (const locale of ['ja','en']) for (const page of pageRoutes) {
    const path = `${locale === 'en' ? '/en/' : '/'}${page ? page + '/' : ''}`;
    const html = renderPage(locale,page);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
    assert.equal(new Set(ids).size,ids.length,`Duplicate ID on ${path}`);
    assert.equal((html.match(/<h1\b/g)||[]).length,1,`Heading on ${path}`);
    assert.ok(html.includes(`rel="canonical" href="${site.siteUrl}${path}"`));
    assert.doesNotMatch(html, /mailto:|data-email=|[\w.+-]+@[\w.-]+\.[a-z]{2,}/i, `Public email on ${path}`);
    assert.doesNotMatch(html, /href=""/, `Empty link on ${path}`);
    assert.ok(!html.includes('undefined') && !html.includes('[object Object]'));
    rendered.set(path,{html,ids:new Set(ids)});
  }
  for (const [path,{html}] of rendered) for (const [,href] of html.matchAll(/\bhref="([^"]+)"/g)) {
    const target = new URL(href,new URL(path,site.siteUrl));
    if (target.origin !== site.siteUrl || /\.(svg|webp|jpg|png|css)$/.test(target.pathname)) continue;
    assert.ok(rendered.has(target.pathname),`Missing internal page: ${path} → ${href}`);
    if (target.hash) assert.ok(rendered.get(target.pathname).ids.has(target.hash.slice(1)),`Missing anchor: ${path} → ${href}`);
  }
});

test('the introduction omits personal names and experience claims while real evidence remains in the page', () => {
  assert.equal(site.ownerName,'');
  for (const locale of ['ja','en']) {
    const html=renderPage(locale);
    const hero=html.match(/<section id="top"[\s\S]*?<\/section>/)[0];
    assert.ok(!hero.includes('11'));
    assert.equal((html.match(/class="project-card(?: featured-case)?"/g)||[]).length,9);
    const voices=html.match(/<section id="reviews"[\s\S]*?<\/section>/)[0];
    assert.ok(!voices.includes('ランサーズ')&&!voices.includes('評価：満足'));
  }
});
