export function renderInquiryForm(locale, endpoint, copy, services, escape) {
  const ja = locale === 'ja';
  const options = items => items.map(item => `<option>${escape(item)}</option>`).join('');
  return `<section id="contact" class="section contact-section" aria-labelledby="contact-heading">
    <div class="container contact-layout">
      <div class="contact-intro"><p class="eyebrow">Project consultation</p>
        <h2 id="contact-heading">${escape(copy.contactHeading).replace(/\n/g,'<br>')}</h2>
        <p>${ja?'ご検討中の内容をお知らせください。ご希望の返信先にご連絡します。':'Tell me what you have in mind and where I can reply.'}</p>
      </div>
      <div class="brief-panel">
        <form id="direct-inquiry" action="${escape(endpoint)}" method="post">
          <label for="inquiry-name">${ja?'お名前':'Your name'}</label>
          <input id="inquiry-name" name="name" autocomplete="name" maxlength="100" required>
          <label for="inquiry-email">${ja?'返信先メールアドレス':'Reply email address'}</label>
          <input id="inquiry-email" name="email" type="email" autocomplete="email" maxlength="254" required>
          <label for="brief-topic">${escape(copy.topic)}</label>
          <select id="brief-topic" name="topic">${options([copy.topics[0],...services.map(s=>s.title),...copy.topics.slice(1)])}</select>
          <label for="inquiry-message">${escape(copy.message)}</label>
          <textarea id="inquiry-message" name="message" maxlength="3000" rows="5" required></textarea>
          <button class="button button-dark brief-submit" type="submit">${ja?'相談内容を送信する':'Send inquiry'}</button>
          <p class="form-privacy">${ja?'入力した内容はご相談への返信に使用します。機密資料の記載はお控えください。':'Your details will be used to reply to this inquiry. Please leave out confidential material.'}</p>
        </form>
      </div>
    </div>
  </section>`;
}
