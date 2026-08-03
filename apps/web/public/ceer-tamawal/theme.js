(function () {
  var saved = localStorage.getItem('tamawal-theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.title = 'Toggle dark mode';
    btn.textContent = isDark() ? '☀️' : '🌙';
    btn.addEventListener('click', function () {
      var dark = !isDark();
      if (dark) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      localStorage.setItem('tamawal-theme', dark ? 'dark' : 'light');
      btn.textContent = dark ? '☀️' : '🌙';
    });
    document.body.appendChild(btn);
  });
})();
