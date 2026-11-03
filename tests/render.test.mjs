import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderPage, escapeHtml } from '../src/page.mjs';
import { getContent, stackLogos } from '../src/locales.mjs';
import { reviews, services, site } from '../src/content.mjs';

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
