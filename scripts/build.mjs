import { cp, mkdir, readFile, rm, writeFile, lstat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderPage, escapeHtml } from '../src/page.mjs';
import { site, experiences } from '../src/content.mjs';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const output = path.resolve(root, 'dist');
// ビルドで削除する対象は、このプロジェクト直下の生成物 dist のみ。
if (output !== path.join(root, 'dist') || output === root) throw new Error('Invalid output directory');
const oldOutput = await lstat(output).catch(error => { if (error.code !== 'ENOENT') throw error; });
if (oldOutput?.isSymbolicLink()) throw new Error('dist must not be a symbolic link');

for (const key of ['contactUrl', 'siteUrl']) {
  if (site[key] && new URL(site[key]).protocol !== 'https:') throw new Error(`${key} must be an https:// URL`);
}
if (site.indexable && (!site.ownerName || !site.contactUrl || !site.siteUrl)) {
  throw new Error('検索公開前に src/content.mjs の ownerName / contactUrl / siteUrl を設定してください。');
}
for (const work of experiences) {
  if (work.image) {
    if (!work.image.startsWith('/images/') || work.image.includes('..') || work.image.includes('\\')) throw new Error('実績画像は public/images/ 内を指定してください。');
    if (!work.imageAlt.trim()) throw new Error('実績画像には imageAlt を指定してください。');
    await readFile(path.join(root, 'public', work.image));
  }
}

const html = renderPage();
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, 'public'), output, { recursive: true });
await writeFile(path.join(output, 'index.html'), html, 'utf8');
const canonical = site.siteUrl ? `${site.siteUrl.replace(/\/$/, '')}/` : '';
await writeFile(path.join(output, 'robots.txt'), site.indexable
  ? `User-agent: *\nAllow: /\nSitemap: ${canonical}sitemap.xml\n`
  : 'User-agent: *\nDisallow: /\n', 'utf8');
if (canonical && site.indexable) {
  await writeFile(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeHtml(canonical)}</loc></url></urlset>`, 'utf8');
}
await writeFile(path.join(output, '404.html'), '<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>ページが見つかりません</title><link rel="stylesheet" href="/styles.css"><main class="container section"><p class="eyebrow">404 / NOT FOUND</p><h1 class="error-title">ページが見つかりません。</h1><p>URLをご確認いただくか、トップページからご覧ください。</p><a class="button button-dark" href="/">トップページへ</a></main></html>', 'utf8');
console.log('Build complete: dist/');
if (!site.ownerName || !site.contactUrl) console.log('Preview content: 公開用のお名前・お問い合わせ先は src/content.mjs で設定できます。');
if (!site.indexable) console.log('Search indexing: disabled (indexable: false)');
