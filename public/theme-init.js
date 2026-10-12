// Applies the saved theme before React renders, so the page doesn't flash light first.
// Kept as a file (not inline) so it passes the Content-Security-Policy in _headers.
(function () {
  var theme;
  try {
    theme = localStorage.getItem('theme');
  } catch {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();
