const themeBtn = document.getElementById('themeBtn');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let dark = true;

// Cambio de tema: alterna entre modo oscuro y claro
themeBtn.addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('light', !dark);
    themeBtn.textContent = dark ? '🌙' : '☀️';
});

// Navbar hamburguesa: abre/cierra el menú en móvil
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
}

// Sidebar activo según scroll
const sections = document.querySelectorAll('.section');
const sideLinks = document.querySelectorAll('.sidebar a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
    });
    sideLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});