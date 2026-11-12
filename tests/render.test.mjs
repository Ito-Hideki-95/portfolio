import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderPage, escapeHtml, pageRoutes } from '../src/page.mjs';
import { getContent, stackLogos } from '../src/locales.mjs';
import { reviews, services, site } from '../src/content.mjs';
import { projects, projectCategories } from '../src/projects.mjs';
import { projectInsights } from '../src/project-insights.mjs';

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
  assert.match(getContent('en').copy.reviewNote,/translat(?:ed|ion)/i);
  assert.throws(() => getContent('fr'));
});

test('all screenshot and stack assets exist locally, without external image dependencies', async () => {
  for (const review of reviews) if (review.image) assert.ok((await readFile(new URL(`../public${review.image}`, import.meta.url))).length > 0);
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

test('all 70 published pages are unique, translated, linked, categorized and backed by local images', async () => {
  assert.equal(projects.length, 70);
  assert.equal(new Set(projects.map(p => p.id)).size, 70);
  assert.equal(new Set(projects.map(p => p.url.replace(/\/$/, ''))).size, 70);
  for (const project of projects) {
    assert.equal(new URL(project.url).protocol, 'https:');
    assert.ok(project.categories.every(key => projectCategories[key]));
    assert.ok((await readFile(new URL(`../public${project.image}`, import.meta.url))).length > 1000);
    for (const locale of ['ja', 'en']) {
      const html = renderPage(locale,'projects');
      assert.ok(html.includes(`href="${escapeHtml(project.url)}"`));
      assert.ok(html.includes(`<h3>${escapeHtml(project.name[locale])}</h3>`));
      assert.ok(html.includes(escapeHtml(projectInsights[project.id]?.summary[locale] || project.description[locale])));
    }
  }
  for (const locale of ['ja', 'en']) {
    const html = renderPage(locale,'projects');
    assert.equal((html.match(/class="project-card"/g) || []).length, 70);
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
    assert.ok(!/(^|\.)(lancers\.jp|crowdworks\.jp)$/i.test(target.hostname), 'Platform link remains: '+path+' → '+href);
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
    const introduction=hero.slice(0,hero.indexOf('<div class="hero-showcase'));
    assert.doesNotMatch(introduction,/11年|11 years|YEARS OF DEVELOPMENT/);
    assert.equal((html.match(/class="project-card(?: featured-case)?"/g)||[]).length,9);
    const voices=html.match(/<section id="reviews"[\s\S]*?<\/section>/)[0];
    assert.ok(!voices.includes('ランサーズ')&&!voices.includes('評価：満足'));
  }
});


test('every portfolio entry has bilingual feature evidence and safe public or archived sources', async () => {
  const expected = new Set([...projects.map(p => p.id), 'flash-reserve', 'visual-anatomy']);
  assert.deepEqual(new Set(Object.keys(projectInsights)), expected);
  for (const [id, insight] of Object.entries(projectInsights)) {
    assert.equal(insight.id, id);
    assert.ok(['verified','partial'].includes(insight.status), id);
    if (insight.status === 'partial') assert.ok(insight.availability.ja && insight.availability.en, id);
    for (const locale of ['ja','en']) {
      assert.ok(insight.summary[locale]?.trim(), id);
      assert.ok(insight.features.length >= 2 && insight.features.every(f => f[locale]?.trim()), id);
    }
    assert.ok(insight.sources.length > 0, id);
    for (const source of insight.sources) {
      if (source.url.startsWith('/images/')) assert.ok((await readFile(new URL('../public' + source.url, import.meta.url))).length > 0);
      else assert.equal(new URL(source.url).protocol, 'https:', id);
    }
    for (const tech of insight.technologies) {
      assert.ok(['public','owner'].includes(tech.basis), id);
      assert.ok(tech.name.trim() && tech.evidence.trim(), id);
    }
  }
  for (const locale of ['ja','en']) {
    const html = renderPage(locale, 'projects');
    assert.doesNotMatch(html, /b2b[.]daiichisekken[.]com/);
    assert.equal((html.match(/<template data-project-insights>/g)||[]).length,70);
    assert.equal((renderPage(locale).match(/class="capability-card"/g)||[]).length,6);
  }
});
