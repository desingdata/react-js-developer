const modules = [
  {
    id: 'intro', num: '01', icon: '📦', title: 'Introducción a React', 
    color: '#61dafb', bg: 'rgba(97,218,251,0.12)', tag: 'FUNDAMENTOS', tagColor: '#61dafb',
    desc: 'Configuración del entorno y primeros pasos con React.',
    topics: [
      { name: 'Instalación y configuración', def: 'Preparar Node.js, npm y crear el entorno de desarrollo.' },
      { name: 'Creación de proyecto', def: 'Usar Create React App o Vite para scaffolding inicial.' },
      { name: 'Introducción a componentes', def: 'Unidades reutilizables de UI: funciones que retornan JSX.' },
      { name: 'Pensar en React.js', def: 'Metodología de diseño top-down dividiendo UI en componentes.' }
    ]
  },
  {
    id: 'comp1', num: '02', icon: '🧩', title: 'Componentes Nivel I',
    color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', tag: 'CORE', tagColor: '#a78bfa',
    desc: 'El ABC de los componentes: props, estado y ciclo de vida.',
    topics: [
      { name: 'Renderización de elementos', def: 'React renderiza JSX al DOM real usando ReactDOM.render().' },
      { name: 'Componentes y propiedades', def: 'Props: datos inmutables pasados de padre a hijo.' },
      { name: 'Estado y ciclo de vida', def: 'State: datos internos que cambian y disparan re-renders.' },
      { name: 'Manejo de eventos', def: 'Escuchar clicks, inputs y más con sintaxis camelCase en JSX.' }
    ]
  },
  {
    id: 'comp2', num: '03', icon: '🔄', title: 'Componentes Nivel II',
    color: '#34d399', bg: 'rgba(52,211,153,0.12)', tag: 'INTERMEDIO', tagColor: '#34d399',
    desc: 'Renderizado dinámico, formularios y comunicación entre componentes.',
    topics: [
      { name: 'map, filter y reduce', def: 'Métodos de array para renderizar listas y transformar datos.' },
      { name: 'Listas y keys', def: 'Key prop: identificador único para optimizar reconciliación.' },
      { name: 'Formularios', def: 'Controlled components: React controla el valor del input.' },
      { name: 'Uplifting State', def: 'Elevar estado al ancestro común para compartirlo entre hijos.' }
    ]
  },
  {
    id: 'routing', num: '04', icon: '🗺', title: 'Routing y Navegación',
    color: '#fb923c', bg: 'rgba(251,146,60,0.12)', tag: 'NAVEGACIÓN', tagColor: '#fb923c',
    desc: 'Navegación entre vistas con React Router.',
    topics: [
      { name: 'Introducción a React-Router', def: 'Librería para mapear URLs a componentes de React.' },
      { name: 'Componentes principales', def: 'BrowserRouter, Route, Link, Switch/Routes.' },
      { name: 'Ruta actual desde componente', def: 'useLocation() y useParams() para acceder a la URL.' },
      { name: 'Redirecciones', def: 'Navigate y Redirect para redirigir programáticamente.' }
    ]
  },
  {
    id: 'hooks', num: '05', icon: '🪝', title: 'Patrones Avanzados',
    color: '#f472b6', bg: 'rgba(244,114,182,0.12)', tag: 'AVANZADO', tagColor: '#f472b6',
    desc: 'Hooks, Context, HOC y patrones de composición.',
    topics: [
      { name: 'Composición de componentes', def: 'Combinar componentes simples para crear UI complejas.' },
      { name: 'useState, useEffect, useContext, useReducer', def: 'Hooks nativos para estado, efectos y contexto.' },
      { name: 'Hooks propios (Custom Hooks)', def: 'Funciones reutilizables que encapsulan lógica de estado.' },
      { name: 'Context API / HOC / RenderProps', def: 'Patrones para compartir lógica sin prop drilling.' }
    ]
  },
  {
    id: 'api', num: '06', icon: '🌐', title: 'Consumo de API REST',
    color: '#38bdf8', bg: 'rgba(56,189,248,0.12)', tag: 'INTEGRACIÓN', tagColor: '#38bdf8',
    desc: 'Conectar React con servicios externos usando Fetch y Axios.',
    topics: [
      { name: 'Async / Await', def: 'Sintaxis moderna para manejar Promises de forma síncrona.' },
      { name: 'Promises con Fetch', def: 'API nativa del browser para realizar peticiones HTTP.' },
      { name: 'Axios', def: 'Librería HTTP con interceptores, cancelación y mejor ergonomía.' },
      { name: 'Axios en componentes', def: 'Llamadas a API dentro de useEffect con manejo de errores.' }
    ]
  },
  {
    id: 'redux', num: '07', icon: '🏪', title: 'Introducción a Redux',
    color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', tag: 'ESTADO GLOBAL', tagColor: '#a78bfa',
    desc: 'Gestión de estado global predecible con Redux.',
    topics: [
      { name: 'Concepto de Redux', def: 'Store único e inmutable como fuente de verdad de la app.' },
      { name: 'Arquitectura Flux', def: 'Flujo unidireccional: Action → Dispatcher → Store → View.' },
      { name: 'Comunicación con React', def: 'react-redux: Provider, useSelector y useDispatch.' },
      { name: 'Componentes principales', def: 'Actions, Reducers, Store, Selectors y Slices.' }
    ]
  },
  {
    id: 'middleware', num: '08', icon: '⚙', title: 'Redux Middlewares',
    color: '#f0db4f', bg: 'rgba(240,219,79,0.12)', tag: 'PRODUCCIÓN', tagColor: '#c9a800',
    desc: 'Middlewares, efectos asíncronos y deploy a producción.',
    topics: [
      { name: 'Middlewares: concepto y creación', def: 'Funciones que interceptan actions antes del reducer.' },
      { name: 'Redux-Logger', def: 'Middleware que loguea cada action y cambio de estado.' },
      { name: 'Redux-Thunk y Redux-Sagas', def: 'Thunk: actions asíncronas. Sagas: efectos con generators.' },
      { name: 'Deploy a producción', def: 'Build optimizado con npm run build y hosting en Vercel/Netlify.' }
    ]
  }
];

// STATE
const done = {};
let isDark = true;

function countDone() {
  return Object.values(done).filter(Boolean).length;
}
function totalTopics() {
  return modules.reduce((a,m) => a + m.topics.length, 0);
}

function updateProgress() {
  const n = countDone(), t = totalTopics();
  const pct = Math.round(n / t * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = n + ' de ' + t + ' temas completados — ' + pct + '%';
}

function renderModules() {
  const grid = document.getElementById('modules-grid');
  grid.innerHTML = modules.map(m => `
    <div class="module-card" id="card-${m.id}">
      <div class="card-header">
        <div class="card-icon" style="background:${m.bg}; font-size:20px">${m.icon}</div>
        <div class="card-meta">
          <div class="card-num">MÓDULO ${m.num}</div>
          <div class="card-title">${m.title}</div>
          <div class="card-desc">${m.desc}</div>
          <span class="card-tag" style="background:${m.bg};color:${m.tagColor}">${m.tag}</span>
        </div>
      </div>
      <div class="card-topics">
        ${m.topics.map((t,i) => `
          <div class="topic-item">
            <div class="topic-check ${done[m.id+'-'+i] ? 'done' : ''}" 
                 onclick="toggleTopic('${m.id}',${i})"></div>
            <div class="topic-text">
              <div class="topic-name">${t.name}</div>
              <div class="topic-def">${t.def}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleTopic(modId, idx) {
  const key = modId + '-' + idx;
  done[key] = !done[key];
  const el = document.querySelector(`#card-${modId} .topic-check:nth-of-type(${idx+1})`);
  // Re-render for simplicity
  renderModules();
  updateProgress();
}

function toggleTheme() {
  isDark = !isDark;
  document.getElementById('root').setAttribute('data-theme', isDark ? '' : 'light');
  document.querySelector('body').setAttribute('data-theme', isDark ? '' : 'light');
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'light');
  document.getElementById('theme-btn').textContent = isDark ? '🌙 Oscuro' : '☀️ Claro';
}

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}
function jumpTo(id) {
  const el = document.getElementById('card-' + id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Init
renderModules();
updateProgress();
setTimeout(() => updateProgress(), 100);