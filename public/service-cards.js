(() => {
  const dialog = document.querySelector('#service-scope-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const title = dialog.querySelector('#service-scope-title');
  const panel = dialog.querySelector('[data-service-panel]');
  let disclosure;

  function restoreContent() {
    if (dialog.open || !disclosure) return;
    if (panel.firstElementChild) disclosure.append(panel.firstElementChild);
    disclosure = null;
  }

  document.querySelectorAll('.service-disclosure').forEach(details => {
    const opener = details.querySelector('summary');
    opener.setAttribute('aria-haspopup', 'dialog');
    opener.setAttribute('aria-controls', dialog.id);
    opener.addEventListener('click', event => {
      if (event.defaultPrevented || dialog.open) return;
      event.preventDefault();
      restoreContent();
      disclosure = details;
      title.textContent = details.closest('.service-item').querySelector('h3').textContent;
      panel.append(details.querySelector('.service-detail-content'));
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', event => {
    if (event.target.closest('a[href]')) {
      dialog.close();
      return;
    }
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });

  dialog.addEventListener('close', restoreContent);
})();