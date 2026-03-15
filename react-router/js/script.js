let currentPage = 'home';
  let menuOpen = false;

  function goTo(page) {
    document.getElementById('page-' + currentPage)?.classList.remove('active');
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => a.classList.remove('active'));
    currentPage = page;
    document.getElementById('page-' + page)?.classList.add('active');
    const el = document.getElementById('nav-' + page);
    const mel = document.getElementById('mnav-' + page);
    if (el) el.classList.add('active');
    if (mel) mel.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleTheme() {
    document.body.classList.toggle('light');
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
    document.getElementById('hamburger').classList.toggle('open', menuOpen);
    document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
  }

  function simulateNav(to, replace = false) {
    const msgs = {
      '/dashboard': '→ Navegando a /dashboard',
      '/login': replace ? '→ Reemplazando con /login (sin historial)' : '→ /login',
      '-1': '← Volviendo a la página anterior'
    };
    const key = String(to);
    const results = ['res1', 'res2', 'res3'];
    const idx = ['/dashboard', '/login', -1].indexOf(to);
    if (idx < 0) return;
    const el = document.getElementById(results[idx]);
    el.style.color = 'var(--accent2)';
    el.textContent = '⏳ ejecutando...';
    setTimeout(() => {
      el.style.color = 'var(--green)';
      el.textContent = '✓ ' + (key === '/dashboard' ? '→ URL: /dashboard' : key === '/login' ? '→ URL: /login (replace)' : '← Historial: -1');
    }, 600);
  }