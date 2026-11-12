import { site } from './content.mjs';
import { getContent } from './locales.mjs';
const e = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const lines = value => e(value).replace(/\n/g, '<br>');
const svg = path => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
const arrow = svg('<path d="M4 12h16m-6-6 6 6-6 6"/>');
const northeast = svg('<path d="M6 18 18 6M6 6h12v12"/>');
const mark = svg('<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>');
const sun = svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>');
const moon = svg('<path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z"/>');
const pause = svg('<path d="M9 5v14M15 5v14"/>');
const play = svg('<path d="m8 5 11 7-11 7Z"/>');
const label = (n, text) => `<p class="eyebrow"><span class="section-number">${n}</span>${text}</p>`;
const heading = (n, eyebrow, id, title, text) => `<div class="section-heading reveal">${label(n, eyebrow)}<div class="heading-row"><h2 id="${id}">${lines(title)}</h2><p>${lines(text)}</p></div></div>`;

export function renderReviews(locale) {
  const { copy: c, reviews } = getContent(locale);
  const newTab = '<span class="sr-only"> (' + e(c.newTab) + ')</span>';
  const quote = text => text.split('\n\n').map(p => '<p>' + lines(p) + '</p>').join('');
  const cards = reviews.map((r, i) => {
    const original = r.originalComment || r.comment;
    const commentId = 'client-voice-' + (i + 1) + '-comment';
    const full = locale === 'en' ? `<details class="review-full original-review"><summary>${e(c.original)}<span aria-hidden="true">+</span></summary><div class="review-original-text" lang="ja">${quote(original)}</div></details>` : '';
    const projectHost = r.projectUrl ? new URL(r.projectUrl).hostname : '';
    const showProjectLink = projectHost && !/(^|\.)(lancers\.jp|crowdworks\.jp)$/i.test(projectHost);
    const thumbnail = r.image ? `<a class="review-thumbnail" href="${e(r.image)}" target="_blank" rel="noopener noreferrer" aria-label="${e(r.project)} — ${e(c.zoom)} (${e(c.newTab)})"><img src="${e(r.image)}" alt="${e(r.imageAlt)}" width="${r.imageWidth}" height="${r.imageHeight}" loading="lazy" decoding="async" draggable="false"></a>` : '';
    return `<figure class="review-card" id="client-voice-${i + 1}" aria-label="${i + 1} / ${reviews.length}"><div class="review-quote"><div class="review-meta"><span class="review-theme">${e(r.theme)}</span><time datetime="${e(r.date)}">${e(r.date.replaceAll('-', '.'))}</time></div><span class="quote-mark" aria-hidden="true">“</span><blockquote class="review-highlight" id="${commentId}" lang="${locale}" data-review-text>${quote(r.comment)}</blockquote><button class="review-text-toggle" type="button" aria-expanded="false" aria-controls="${commentId}" aria-label="${e(c.reviewExpand)}" data-expand-label="${e(c.reviewExpand)}" data-collapse-label="${e(c.reviewCollapse)}" data-collapse-text="${e(c.reviewLess)}" title="${e(c.reviewExpand)}" hidden><span aria-hidden="true">…</span></button><small class="review-excerpt">${e(r.commentIsExcerpt ? c.reviewExcerpt : c.reviewOriginal)}</small>${full}</div><figcaption class="review-project">${thumbnail}<div class="review-project-copy"><h3>${e(r.project)}</h3><p class="review-project-summary">${e(r.projectSummary)}</p>${showProjectLink ? `<div class="review-project-links"><a class="review-project-link text-link" href="${e(r.projectUrl)}" target="_blank" rel="noopener noreferrer">${e(r.projectLinkLabel)}${northeast}${newTab}</a></div>` : ''}</div></figcaption></figure>`;
  }).join('');
  return `<section id="reviews" class="section reviews-section color-section" aria-labelledby="reviews-heading"><div class="container">${heading('02', 'CLIENT VOICES', 'reviews-heading', c.reviewsHeading, c.reviewsText)}<div class="review-toolbar"><p class="swipe-hint">${arrow}${e(c.swipe)}</p><div class="review-controls" hidden><button class="review-prev icon-button" type="button" aria-label="${e(c.previous)}" aria-controls="review-track">${arrow}</button><span class="review-position mono" aria-live="polite" aria-atomic="true">01 / ${String(reviews.length).padStart(2, '0')}</span><button class="review-next icon-button" type="button" aria-label="${e(c.next)}" aria-controls="review-track">${arrow}</button></div></div></div><div class="review-track container" id="review-track" role="region" aria-label="${e(c.reviewRegion)}" tabindex="0">${cards}</div><div class="container"><p class="section-note">${e(c.reviewNote)}</p></div></section>`;
}

export function renderContact(locale) {
const { copy: c, reviews, services } = getContent(locale);
const newTab = '<span class="sr-only"> (' + e(c.newTab) + ')</span>';
const isEmail = site.contactUrl.startsWith('mailto:');
const emailAddress = isEmail ? decodeURIComponent(site.contactUrl.slice(7).split('?')[0]) : '';
const contactTarget = isEmail ? '' : ' target="_blank" rel="noopener noreferrer"';
const quote = text => text.split('\n\n').map(p => '<p>' + lines(p) + '</p>').join('');
return `<section id="contact" class="section contact-section color-section" aria-labelledby="contact-heading"><div class="container contact-layout"><div class="contact-intro reveal">${label('09', 'PROJECT CONSULTATION')}<h2 id="contact-heading">${lines(c.contactHeading)}</h2><p>${lines(c.contactText)}</p>${site.contactUrl ? `<a class="button button-dark contact-primary" href="${e(site.contactUrl)}"${contactTarget}>${e(c.contactButton)}${northeast}${isEmail ? '' : newTab}</a>` : ''}${isEmail ? `<div class="contact-email"><p>${e(c.emailAddress)}</p><a class="contact-email-address" href="${e(site.contactUrl)}">${e(emailAddress)}</a><button class="text-link" id="copy-email" type="button" data-email="${e(emailAddress)}" hidden>${e(c.copyEmail)}${arrow}</button><p class="email-status" role="status" aria-live="polite"></p><p class="contact-email-note">${e(c.emailNote)}</p></div>` : ''}<span class="contact-arrow" aria-hidden="true">↗</span></div><div class="brief-panel glass-panel"><p class="eyebrow">PROJECT BRIEF</p><h3>${e(c.briefHeading)}</h3><p class="brief-description">${e(c.briefText)}</p><noscript><p>${e(c.noJs)}</p></noscript><form id="brief-form"><label for="brief-topic">${e(c.topic)}</label><select id="brief-topic" name="topic"><option>${e(c.topics[0])}</option>${services.map(s => `<option>${e(s.title)}</option>`).join('')}${c.topics.slice(1).map(t => `<option>${e(t)}</option>`).join('')}</select><div class="form-row"><div><label for="brief-budget">${e(c.budget)}</label><select id="brief-budget" name="budget">${c.budgets.map(t => `<option>${e(t)}</option>`).join('')}</select></div><div><label for="brief-timing">${e(c.timing)}</label><select id="brief-timing" name="timing">${c.timings.map(t => `<option>${e(t)}</option>`).join('')}</select></div></div><label for="brief-message">${e(c.message)}<span>${e(c.optional)}</span></label><textarea id="brief-message" name="message" rows="4" maxlength="3000" placeholder="${e(c.placeholder)}"></textarea><button class="button button-dark brief-submit" type="submit" disabled>${e(c.generate)}${arrow}</button><p class="form-privacy">${e(c.privacy)}</p></form><div class="brief-result" hidden><label for="brief-output">${e(c.output)}</label><textarea id="brief-output" rows="9" readonly></textarea>${isEmail ? `<a class="button button-dark" id="email-brief" href="${e(site.contactUrl)}" data-email="${e(emailAddress)}">${e(c.emailBrief)}${northeast}</a>` : ''}<button class="button button-outline" id="copy-brief" type="button">${e(c.copy)}${arrow}</button><p>${e(c.sendNote)}</p></div><p class="brief-status" role="status" aria-live="polite"></p></div></div></section>`;
}
