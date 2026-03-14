// ── Highlight.js ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
});

// ── TEMA (dark / light) ───────────────────────
// El usuario puede alternar entre tema oscuro y claro.
// Se persiste en localStorage para recordar la preferencia.
const body = document.body;
const themeBtn = document.getElementById('themeBtn');
const saved = localStorage.getItem('theme') || 'dark';
body.dataset.theme = saved;

themeBtn.addEventListener('click', () => {
    const next = body.dataset.theme === 'dark' ? 'light' : 'dark';
    body.dataset.theme = next;
    localStorage.setItem('theme', next);
});

// ── HAMBURGUESA ───────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
}

// Cerrar menu al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
    }
});

// ── DEMO ESTADO – Contador ────────────────────
let count = 0;

function updateContador() {
    const el = document.getElementById('contNum');
    el.textContent = count;
    // Animación "bump"
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 200);
}

function agregarLog(msg) {
    const log = document.getElementById('cicloLog');
    const div = document.createElement('div');
    div.className = 'log-entry new';
    div.textContent = msg;
    log.prepend(div);
    // quitar el resaltado verde después de 1.5 s
    setTimeout(() => div.classList.remove('new'), 1500);
    // Limitar a 6 entradas
    while (log.children.length > 6) log.removeChild(log.lastChild);
}

function cambiarContador(delta) {
    count += delta;
    updateContador();
    agregarLog(`🔄 count actualizado → ${count}`);
}

function resetContador() {
    count = 0;
    updateContador();
    agregarLog('↩️  count reseteado → 0');
}

// ── DEMO EVENTOS ──────────────────────────────
function handleEvChange(e) {
    // onChange: refleja el valor del input en tiempo real
    const val = e.target.value;
    const preview = document.getElementById('previewText');
    preview.textContent = val || '—';
    logEvento('onChange (input)', null, `"${val}"`);
}

function logEvento(tipo, el, extra = '') {
    const history = document.getElementById('eventHistory');
    const now = new Date().toLocaleTimeString('es-CO', { hour12: false });
    const line = document.createElement('div');
    line.className = 'ev-line';
    line.innerHTML = `<span>[${now}]</span> ${tipo} ${extra}`;
    history.prepend(line);
    while (history.children.length > 8) history.removeChild(history.lastChild);
}