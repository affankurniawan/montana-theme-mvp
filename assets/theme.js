document.documentElement.classList.remove('no-js');

document.addEventListener('click', function (event) {
  const toggle = event.target.closest('[data-copy-link]');
  if (!toggle) return;
  navigator.clipboard.writeText(window.location.href);
  toggle.textContent = 'Copied';
  setTimeout(() => toggle.textContent = 'Copy link', 1500);
});
