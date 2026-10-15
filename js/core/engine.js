// App bootstrap: initialises global state, visitor mode, and app startup sequence.
/**
 * js/core/engine.js
 * App bootstrap, global state management, and user role detection (Free visitor).
 */
/**
 * cosy-mode.js — THE ENGINE
 * ─────────────────────────────────────────────────────────────────────────────
 * COSYlanguages shared mode system.
 * Visitor mode only.
 * ───────────────────────────────────────────────────────────────────────────── */
;(function () { 'use strict'

/* ═══════════════════════════════════════════════════════════════
   1. CONSTANTS & KEYS
   ═══════════════════════════════════════════════════════════════ */

const DEFAULT_ECOSYSTEM_URLS = {
    home: 'index.html',
    languages: 'index.html#languages',
    courses: 'index.html#courses',
    practice: 'practice/index.html',
    tools: 'https://cosylanguages.github.io/COSYtools/',
    games: 'https://cosylanguages.github.io/COSYgames/',
    events: 'apps/premium-events/index.html',
    placement_quiz: 'placement-quiz.html',
    calculator: 'index.html#calculator',
    blog: 'blog/index.html',
    join: 'index.html#start',
    login: 'login.html'
};

function getConfigModule() {
    if (typeof window !== 'undefined' && window.COSY_CONFIG_MODULE) {
        return window.COSY_CONFIG_MODULE;
    }
    if (typeof require === 'function') {
        try {
            return require('./config.js');
        } catch (e) {}
    }
    return null;
}

function getEcosystemUrls(env, overrides) {
    const cfg = getConfigModule();
    if (cfg && typeof cfg.getEcosystemConfig === 'function') {
        const repoConfig = cfg.getEcosystemConfig({ env: env, overrides: overrides });
        return {
            home: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html' : 'index.html',
            languages: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html#languages' : 'index.html#languages',
            courses: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html#courses' : 'index.html#courses',
            practice: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'practice/index.html' : 'practice/index.html',
            tools: repoConfig.COSYtools,
            games: repoConfig.COSYgames,
            events: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'apps/premium-events/index.html' : 'apps/premium-events/index.html',
            placement_quiz: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'placement-quiz.html' : 'placement-quiz.html',
            calculator: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html#calculator' : 'index.html#calculator',
            blog: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'blog/index.html' : 'blog/index.html',
            join: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'index.html#start' : 'index.html#start',
            login: repoConfig.COSYlanguages ? repoConfig.COSYlanguages + 'login.html' : 'login.html'
        };
    }

    // Fallback if config module is absent
    const processEnv = (typeof process !== 'undefined' && process.env) ? process.env : {};
    const winConfig = (typeof window !== 'undefined' && window.COSY_CONFIG) ? window.COSY_CONFIG : {};
    const winUrls = (typeof window !== 'undefined' && window.COSY_ECOSYSTEM_URLS) ? window.COSY_ECOSYSTEM_URLS : {};

    let localSavedUrls = {};
    if (typeof localStorage !== 'undefined') {
        try {
            const raw = localStorage.getItem('cosy_ecosystem_urls');
            if (raw) localSavedUrls = JSON.parse(raw);
        } catch (e) {}
    }

    const activeEnv = env ||
        winConfig.env ||
        (typeof window !== 'undefined' && window.COSY_ENV) ||
        processEnv.COSY_ENV ||
        ((typeof location !== 'undefined' && location.hostname && (location.hostname === 'localhost' || location.hostname === '127.0.0.1')) ? 'development' : 'production');

    const envDefaults = Object.assign({}, DEFAULT_ECOSYSTEM_URLS);

    if (activeEnv === 'development') {
        envDefaults.home = 'index.html';
        envDefaults.languages = 'index.html#languages';
        envDefaults.courses = 'index.html#courses';
        envDefaults.practice = 'practice/index.html';
        envDefaults.placement_quiz = 'placement-quiz.html';
        envDefaults.calculator = 'index.html#calculator';
        envDefaults.blog = 'blog/index.html';
        envDefaults.join = 'index.html#start';
    }

    const procEnvUrls = {};
    if (processEnv.COSY_HOME_URL) procEnvUrls.home = processEnv.COSY_HOME_URL;
    if (processEnv.COSY_LANGUAGES_URL) procEnvUrls.languages = processEnv.COSY_LANGUAGES_URL;
    if (processEnv.COSY_COURSES_URL) procEnvUrls.courses = processEnv.COSY_COURSES_URL;
    if (processEnv.COSY_PRACTICE_URL) procEnvUrls.practice = processEnv.COSY_PRACTICE_URL;
    if (processEnv.COSY_TOOLS_URL) procEnvUrls.tools = processEnv.COSY_TOOLS_URL;
    if (processEnv.COSY_GAMES_URL) procEnvUrls.games = processEnv.COSY_GAMES_URL;
    if (processEnv.COSY_EVENTS_URL) procEnvUrls.events = processEnv.COSY_EVENTS_URL;
    if (processEnv.COSY_PLACEMENT_QUIZ_URL) procEnvUrls.placement_quiz = processEnv.COSY_PLACEMENT_QUIZ_URL;
    if (processEnv.COSY_CALCULATOR_URL) procEnvUrls.calculator = processEnv.COSY_CALCULATOR_URL;
    if (processEnv.COSY_BLOG_URL) procEnvUrls.blog = processEnv.COSY_BLOG_URL;
    if (processEnv.COSY_JOIN_URL) procEnvUrls.join = processEnv.COSY_JOIN_URL;
    if (processEnv.COSY_LOGIN_URL) procEnvUrls.login = processEnv.COSY_LOGIN_URL;

    return Object.assign({}, envDefaults, procEnvUrls, localSavedUrls, winUrls, winConfig.urls, overrides);
}

function getNavHref(itemKey) {
    const urls = getEcosystemUrls();
    const rawHref = urls[itemKey] || DEFAULT_ECOSYSTEM_URLS[itemKey] || 'index.html';
    if (!rawHref) return 'index.html';
    const isAbsolute = rawHref.startsWith('http://') || rawHref.startsWith('https://') || rawHref.startsWith('//');
    if (isAbsolute) return rawHref;
    const p = getPrefix();
    return `${p}${rawHref.replace(/^\/+/, '')}`;
}

const NAV_CONFIG = {
    free: [
        { key: 'languages',      hrefKey: 'languages',      icon: '🌍' },
        { key: 'courses',        hrefKey: 'courses',        icon: '📚' },
        { key: 'calculator',     hrefKey: 'calculator',     icon: '🧮' },
        { key: 'blog',           hrefKey: 'blog',           icon: '📰' },
        { key: 'practice',       hrefKey: 'practice',       icon: '💡' },
        { key: 'placement_quiz', hrefKey: 'placement_quiz', icon: '📝' }
    ]
};

const COSY_ECOSYSTEM_MENU = [
    {
        group: 'Learn for free',
        accentKey: 'learn-free',
        items: [
            {
                key: 'practice',
                title: 'Practice',
                icon: '💡',
                promise: 'Interactive drills & instant feedback',
                hrefKey: 'practice'
            },
            {
                key: 'dictionary',
                title: 'Dictionary',
                icon: '📖',
                promise: 'Rich vocabulary & example sentences',
                href: 'https://cosylanguages.github.io/COSYdata/'
            },
            {
                key: 'tools',
                title: 'Verb & Preposition Library',
                icon: '🔎',
                promise: 'Master conjugation & preposition patterns',
                href: 'https://cosylanguages.github.io/COSYtools/'
            },
            {
                key: 'games',
                title: 'Games',
                icon: '🎮',
                promise: 'Fun, immersive language practice',
                href: 'https://cosylanguages.github.io/COSYgames/'
            },
            {
                key: 'blog',
                title: 'Blog',
                icon: '📰',
                promise: 'Articles, Top 100 lists & podcasts',
                hrefKey: 'blog'
            }
        ]
    },
    {
        group: 'Your classes (members)',
        accentKey: 'your-classes',
        items: [
            {
                key: 'platform',
                title: 'Student Platform',
                icon: '🎓',
                promise: 'Your personal course dashboard',
                href: 'login.html?redirect=https://cosylanguages.github.io/COSYplatform/&note=This%20area%20is%20for%20enrolled%20students.',
                isGated: true
            },
            {
                key: 'manuals',
                title: 'Manuals',
                icon: '📚',
                promise: 'Full lesson materials & guides',
                href: 'login.html?redirect=https://cosylanguages.github.io/COSYmanuals/&note=This%20area%20is%20for%20enrolled%20students.',
                isGated: true
            }
        ]
    },
    {
        group: 'Join in',
        accentKey: 'join-in',
        items: [
            {
                key: 'events',
                title: 'Live Events',
                icon: '🎉',
                promise: 'Speaking clubs & live workshops',
                hrefKey: 'events'
            }
        ]
    }
];

const BASE_URL = (typeof window !== 'undefined' && (window.location.pathname.startsWith('/COSYlanguages/') || window.location.pathname === '/COSYlanguages'))
    ? '/COSYlanguages/'
    : '/';

const KEY_PRACTICE = 'cosy_practice'
const KEY_NOTEBOOK = 'cosy_notebook' // { [lessonId]: { notes: '', mistakes: [] } }

let vocabManifest = null;
const FALLBACK_VOCAB_FILES = [
    'vocabulary.js','verbs.js','adjectives.js','grammar_elements.js',
    'grammar.js','dishes.js','speaking.js','debates.js','opinions.js',
    'quotes.js','fluency.js','locations.js','people.js','nationalities.js'
];

/* ═══════════════════════════════════════════════════════════════
   2. STATE MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */
function readState () {
    const mode = 'free'

    // Consolidate practice state from multiple keys
    const practice = tryParse(localStorage.getItem(KEY_PRACTICE)) || { totalPts: 0, streak: 0, mistakes: [] }
    practice.totalPts = parseInt(localStorage.getItem('cosy_total_points') || practice.totalPts || '0')
    practice.streak = parseInt(localStorage.getItem('practice_streak') || practice.streak || '0')

    const notebook = tryParse(localStorage.getItem(KEY_NOTEBOOK)) || {}
    return { mode, practice, notebook }
}

function tryParse (str) { try { return str ? JSON.parse(str) : null } catch { return null } }

function getPrefix() {
    return BASE_URL;
}

/* ═══════════════════════════════════════════════════════════════
   3. AUTH & LIVE SYNC (DEPRECATED)
   ═══════════════════════════════════════════════════════════════ */
// Authenticated features moved to ProgressMe.

/* ═══════════════════════════════════════════════════════════════
   4. NAV TEMPLATES
   ═══════════════════════════════════════════════════════════════ */
function isActive (href) {
    const target = new URL(href, window.location.href);
    const current = new URL(window.location.href);
    const targetPath = target.pathname.replace(/\/index\.html$/, '/');
    const currentPath = current.pathname.replace(/\/index\.html$/, '/');

    if (target.origin === current.origin && targetPath === currentPath && (!target.hash || target.hash === current.hash)) {
        return 'aria-current="page"';
    }
    return '';
}

function updateNavActiveState() {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const path = window.location.pathname.toLowerCase();
    const items = document.querySelectorAll('.mobile-nav-item');
    items.forEach(item => item.classList.remove('active'));

    let activeId = null;
    if (path.includes('/practice')) {
        activeId = 'mnav-practice';
    } else if (path.includes('/courses')) {
        activeId = 'mnav-courses';
    } else if ((path === '/' || path.endsWith('/') || path.endsWith('/index.html')) &&
        !['/blog', '/games', '/apps', '/languages'].some(section => path.includes(section))) {
        activeId = 'mnav-home';
    }

    if (activeId) {
        const activeItem = document.getElementById(activeId);
        if (activeItem) activeItem.classList.add('active');
    }
}

function getActiveNavLang() {
    if (typeof window === 'undefined') return 'en';
    const path = window.location.pathname.toLowerCase();
    const langMatch = path.match(/\/languages\/([a-z]{2})\b/);
    if (langMatch && langMatch[1]) {
        return langMatch[1];
    }
    const htmlLang = (document.documentElement && document.documentElement.lang) ? document.documentElement.lang.toLowerCase() : '';
    if (path.includes('/languages/') && htmlLang) {
        return htmlLang;
    }
    return (typeof localStorage !== 'undefined' && (localStorage.getItem('cosy_ui_lang') || localStorage.getItem('cosy_last_language'))) || htmlLang || 'en';
}

const NAV_FALLBACKS = {
    en: { home: 'Home', home_aria: 'COSYlanguages Home', languages: 'Languages', courses: 'Courses', practice: 'Practice', tools: 'Tools', games: 'Games', events: 'Events', placement_quiz: 'Placement Quiz', calculator: 'Calculator', blog: 'Blog', join: 'Join', contact: '💬 Contact us', login: '🔐 Log in', more: 'More ▾', pin_to_home: '📲 Pin to Home', breadcrumb_home: 'Home', toggle_dark_mode: '🌓 Toggle Dark Mode', whatsapp_contact: '💬 Contact us on WhatsApp' },
    fr: { home: 'Accueil', home_aria: 'Accueil COSYlanguages', languages: 'Langues', courses: 'Cours', practice: 'Entraînement', tools: 'Outils', games: 'Jeux', events: 'Événements', placement_quiz: 'Test de niveau', calculator: 'Calculateur', blog: 'Blog', join: 'Rejoindre', contact: '💬 Contact', login: '🔐 Connexion', more: 'Plus ▾', pin_to_home: "📲 Épingler à l'accueil", breadcrumb_home: 'Accueil', toggle_dark_mode: '🌓 Mode sombre', whatsapp_contact: '💬 Contactez-nous sur WhatsApp' },
    it: { home: 'Home', home_aria: 'COSYlanguages Home', languages: 'Lingue', courses: 'Corsi', practice: 'Pratica', tools: 'Strumenti', games: 'Giochi', events: 'Eventi', placement_quiz: 'Test di livello', calculator: 'Calcolatore', blog: 'Blog', join: 'Unisciti', contact: '💬 Contatti', login: '🔐 Accedi', more: 'Altro ▾', pin_to_home: '📲 Aggiungi a Home', breadcrumb_home: 'Home', toggle_dark_mode: '🌓 Modalità scura', whatsapp_contact: '💬 Contattaci su WhatsApp' },
    es: { home: 'Inicio', home_aria: 'Inicio COSYlanguages', languages: 'Idiomas', courses: 'Cursos', practice: 'Práctica', tools: 'Herramientas', games: 'Juegos', events: 'Eventos', placement_quiz: 'Test de nivel', calculator: 'Calculadora', blog: 'Blog', join: 'Unirse', contact: '💬 Contacto', login: '🔐 Iniciar sesión', more: 'Más ▾', pin_to_home: '📲 Añadir a inicio', breadcrumb_home: 'Inicio', toggle_dark_mode: '🌓 Modo oscuro', whatsapp_contact: '💬 Contáctanos por WhatsApp' },
    ru: { home: 'Главная', home_aria: 'Главная COSYlanguages', languages: 'Языки', courses: 'Курсы', practice: 'Практика', tools: 'Инструменты', games: 'Игры', events: 'Мероприятия', placement_quiz: 'Тест уровня', calculator: 'Калькулятор', blog: 'Блог', join: 'Начать', contact: '💬 Связь', login: '🔐 Вход', more: 'Ещё ▾', pin_to_home: '📲 На главный экран', breadcrumb_home: 'Главная', toggle_dark_mode: '🌓 Тёмная тема', whatsapp_contact: '💬 Написать нам в WhatsApp' },
    de: { home: 'Startseite', home_aria: 'COSYlanguages Startseite', languages: 'Sprachen', courses: 'Kurse', practice: 'Übung', tools: 'Werkzeuge', games: 'Spiele', events: 'Veranstaltungen', placement_quiz: 'Einstufungstest', calculator: 'Rechner', blog: 'Blog', join: 'Beitreten', contact: '💬 Kontakt', login: '🔐 Anmelden', more: 'Mehr ▾', pin_to_home: '📲 Zum Startbildschirm', breadcrumb_home: 'Startseite', toggle_dark_mode: '🌓 Dunkelmodus', whatsapp_contact: '💬 Kontaktieren Sie uns auf WhatsApp' },
    pt: { home: 'Início', home_aria: 'Página inicial do COSYlanguages', languages: 'Línguas', courses: 'Cursos', practice: 'Prática', tools: 'Ferramentas', games: 'Jogos', events: 'Eventos', placement_quiz: 'Teste de nível', calculator: 'Calculadora', blog: 'Blog', join: 'Juntar-se', contact: '💬 Contacto', login: '🔐 Entrar', more: 'Mais ▾', pin_to_home: '📲 Fixar no ecrã principal', breadcrumb_home: 'Início', toggle_dark_mode: '🌓 Modo escuro', whatsapp_contact: '💬 Contacte-nos no WhatsApp' },
    ba: { home: 'Баш бит', home_aria: 'COSYlanguages Баш бит', languages: 'Телдәр', courses: 'Курстар', practice: 'Практика', tools: 'Ҡоралдар', games: 'Уйындар', events: 'Чаралар', placement_quiz: 'Тест', calculator: 'Калькулятор', blog: 'Блог', join: 'Ҡошулыу', contact: '💬 Бәйләнеш', login: '🔐 Киреү', more: 'Тағы ▾', pin_to_home: '📲 Баш экранға өҫтәү', breadcrumb_home: 'Баш бит', toggle_dark_mode: '🌓 Ҡара тема', whatsapp_contact: '💬 WhatsApp арҡылы бәйләнеш' },
    tt: { home: 'Төп бит', home_aria: 'COSYlanguages Төп бит', languages: 'Телләр', courses: 'Курслар', practice: 'Практика', tools: 'Кораллар', games: 'Уеннар', events: 'Чаралар', placement_quiz: 'Тест', calculator: 'Калькулятор', blog: 'Блог', join: 'Кушылу', contact: '💬 Бәйләнеш', login: '🔐 Керү', more: 'Тагын ▾', pin_to_home: '📲 Төп экранга өстәү', breadcrumb_home: 'Төп бит', toggle_dark_mode: '🌓 Карангы тема', whatsapp_contact: '💬 WhatsApp аша элемтә' },
    el: { home: 'Αρχική', home_aria: 'Αρχική COSYlanguages', languages: 'Γλώσσες', courses: 'Μαθήματα', practice: 'Εξάσκηση', tools: 'Εργαλεία', games: 'Παιχνίδια', events: 'Εκδηλώσεις', placement_quiz: 'Τεστ επιπέδου', calculator: 'Υπολογιστής', blog: 'Ιστολόγιο', join: 'Εγγραφή', contact: '💬 Επικοινωνία', login: '🔐 Σύνδεση', more: 'Περισσότερα ▾', pin_to_home: '📲 Στην αρχική οθόνη', breadcrumb_home: 'Αρχική', toggle_dark_mode: '🌓 Σκοτεινή λειτουργία', whatsapp_contact: '💬 Επικοινωνήστε μαζί μας στο WhatsApp' },
    hy: { home: 'Գլխավոր', home_aria: 'COSYlanguages Գլխավոր', languages: 'Լեզուներ', courses: 'Դասընթացներ', practice: 'Պրակտիկա', tools: 'Գործիքներ', games: 'Խաղեր', events: 'Միջոցառումներ', placement_quiz: 'Մակարդակի թեստ', calculator: 'Հաշվիչ', blog: 'Բլոգ', join: 'Միանալ', contact: '💬 Կապ', login: '🔐 Մուտք', more: 'Ավելին ▾', pin_to_home: '📲 Ավելացնել գլխավոր էկրանին', breadcrumb_home: 'Գլխավոր', toggle_dark_mode: '🌓 Մութ ռեժիմ', whatsapp_contact: '💬 Կապվել մեզ հետ WhatsApp-ով' },
    ka: { home: 'მთავარი', home_aria: 'COSYlanguages მთავარი', languages: 'ენები', courses: 'კურსები', practice: 'პრაქტიკა', tools: 'ინსტრუმენტები', games: 'თამაშები', events: 'ღონისძიებები', placement_quiz: 'დონის ტესტი', calculator: 'კალկულატორი', blog: 'ბლოგი', join: 'შეერთება', contact: '💬 კონტაქტი', login: '🔐 შესვლა', more: 'მეტი ▾', pin_to_home: '📲 მთავარ ეკრანზე', breadcrumb_home: 'მთავარი', toggle_dark_mode: '🌓 მუქი რეჟიმი', whatsapp_contact: '💬 დაგვიკავშირდით WhatsApp-ით' },
    br: { home: 'Degemer', home_aria: 'Pajenn degemer COSYlanguages', languages: 'Yezhoù', courses: 'Kentelioù', practice: 'Pleustriñ', tools: 'Stilioù', games: "C'hoarioù", events: 'Darvoudoù', placement_quiz: 'Test livezh', calculator: 'Kamplerezh', blog: 'Blog', join: 'Kemer perzh', contact: '💬 Kevarzheo', login: '🔐 Kevreañ', more: "Muioc'h ▾", pin_to_home: '📲 Stagañ war ar skramm degemer', breadcrumb_home: 'Degemer', toggle_dark_mode: '🌓 Mod teñval', whatsapp_contact: '💬 Kit e darempred ganeomp war WhatsApp' },
    cv: { home: 'Тĕп страницă', home_aria: 'COSYlanguages Тĕп страницă', languages: 'Чĕлхесем', courses: 'Курссене', practice: 'Практика', tools: 'Инструментсем', games: 'Вăйăсем', events: 'Пулăмсем', placement_quiz: 'Уровень тестĕ', calculator: 'Калькулятор', blog: 'Блог', join: 'Хушăнма', contact: '💬 Çыхăну', login: '🔐 Кĕрĕм', more: 'Нумайрах ▾', pin_to_home: '📲 Тĕп экран çинче сăнлама', breadcrumb_home: 'Тĕп страницă', toggle_dark_mode: '🌓 Тĕттĕм режим', whatsapp_contact: '💬 WhatsApp урлă çыхăнма' }
};

function getNavLabel(key, fallback) {
    const cleanKey = key.replace(/^nav\./, '');
    const activeLang = getActiveNavLang();

    if (NAV_FALLBACKS[activeLang] && NAV_FALLBACKS[activeLang][cleanKey]) {
        return NAV_FALLBACKS[activeLang][cleanKey];
    }
    if (typeof window !== 'undefined' && window.t) {
        const val = window.t('nav.' + cleanKey) || window.t('nav_' + cleanKey) || window.t(cleanKey);
        if (val) return val;
    }
    if (NAV_FALLBACKS.en && NAV_FALLBACKS.en[cleanKey]) return NAV_FALLBACKS.en[cleanKey];
    return fallback;
}

function renderNavLinks(mode) {
    const config = NAV_CONFIG[mode] || [];
    return config.map(item => {
        const fallbackLabel = item.key[0].toUpperCase() + item.key.slice(1);
        const label = getNavLabel(item.key, fallbackLabel);
        const key = `nav_${item.key}`;
        const href = getNavHref(item.hrefKey || item.key);
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        const targetAttr = isExternal ? ' target="_blank" rel="noopener"' : '';
        return `<li role="none"><a href="${href}" ${isActive(href)} data-translate-key="${key}" data-i18n="nav.${item.key}" role="menuitem"${targetAttr}>${item.icon ? item.icon + ' ' : ''}${label}</a></li>`;
    }).join('');
}

function renderLangPanelHTML() {
    const currentPinned = (typeof localStorage !== 'undefined' && (localStorage.getItem('cosy.pinnedLang') || localStorage.getItem('cosy_ui_lang'))) || 'en';
    const languages = (typeof window !== 'undefined' && window.COSY_LANGUAGES && window.COSY_LANGUAGES.length)
        ? window.COSY_LANGUAGES
        : [
            { code: 'en', name: 'English', native: 'English', icon: '🇬🇧' },
            { code: 'fr', name: 'French', native: 'Français', icon: '🇫🇷' },
            { code: 'it', name: 'Italian', native: 'Italiano', icon: '🇮🇹' },
            { code: 'ru', name: 'Russian', native: 'Русский', icon: '🇷🇺' },
            { code: 'el', name: 'Greek', native: 'Ελληνικά', icon: '🇬🇷' },
            { code: 'es', name: 'Spanish', native: 'Español', icon: '🇪🇸' },
            { code: 'de', name: 'German', native: 'Deutsch', icon: '🇩🇪' },
            { code: 'pt', name: 'Portuguese', native: 'Português', icon: '🇵🇹' },
            { code: 'hy', name: 'Armenian', native: 'Հայերեն', icon: '🇦🇲' },
            { code: 'ka', name: 'Georgian', native: 'ქართული', icon: '🇬🇪' },
            { code: 'tt', name: 'Tatar', native: 'Татарча', icon: '🌐' },
            { code: 'ba', name: 'Bashkir', native: 'Башҡортса', icon: '🌐' },
            { code: 'br', name: 'Breton', native: 'Brezhoneg', icon: '🌐' },
            { code: 'cv', name: 'Chuvash', native: 'Чӑвашла', icon: '🌐' }
        ];

    const rows = languages.map(l => {
        const isPinned = (l.code === currentPinned);
        const iconDisplay = (l.icon && !l.icon.includes('<')) ? l.icon : (l.flag && !l.flag.includes('<') ? l.flag : '🌐');
        return `
          <div class="cosy-lang-row ${isPinned ? 'is-pinned' : ''}" data-lang="${l.code}" onclick="COSY.pinLanguage('${l.code}', event)" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){COSY.pinLanguage('${l.code}', event);}">
            <span class="cosy-lang-flag">${iconDisplay}</span>
            <span class="cosy-lang-info">
              <span class="cosy-lang-name">${l.name}</span>
              <span class="cosy-lang-native">(${l.native})</span>
            </span>
            <button type="button" class="cosy-lang-pin-btn ${isPinned ? 'pinned' : ''}" aria-pressed="${isPinned ? 'true' : 'false'}" aria-label="Pin ${l.name}" onclick="COSY.pinLanguage('${l.code}', event)" title="Pin ${l.name}">📌</button>
          </div>`;
    }).join('');

    return `
      <div id="cosy-lang-panel" class="cosy-lang-panel" role="dialog" aria-label="Languages We Teach" hidden>
        <div class="cosy-lang-panel-header">
          <span class="cosy-lang-panel-title">Languages We Teach</span>
          <button type="button" class="cosy-lang-panel-close" aria-label="Close language menu" onclick="COSY.closeLangPanel()">✕</button>
        </div>
        <div class="cosy-lang-list">
          ${rows}
        </div>
      </div>`;
}

function navFree () {
    const t = getNavLabel;
    const homeHref = getNavHref('home');
    const loginHref = getNavHref('login');
    const isDark = (typeof localStorage !== 'undefined' && (localStorage.getItem('cosy.theme') || localStorage.getItem('cosy_theme') || 'light') === 'dark');
    const pinnedLang = (typeof localStorage !== 'undefined' && (localStorage.getItem('cosy.pinnedLang') || localStorage.getItem('cosy_ui_lang'))) || getActiveNavLang() || 'en';
    const logoPrefix = getPrefix();

    return `
      <a class="nav-logo" href="${homeHref}" aria-label="${t('home_aria', 'COSYlanguages Home')}">
        <img src="${logoPrefix}images/logos/cosylanguages.png" alt="COSYlanguages logo" onerror="this.style.display='none'">
        <span>COSYlanguages</span>
      </a>
      <ul class="nav-links" role="menubar">
        ${renderNavLinks('free')}
      </ul>
      <div id="cosy-nav-context" class="nav-context"></div>
      <div class="nav-right" style="display:flex; align-items:center; gap:8px;">
        <a href="${loginHref}" class="nav-login" data-translate-key="nav_login" data-i18n="nav.login">${t('login', '🔐 Log in')}</a>
        <a class="nav-cta" href="https://wa.me/330766784195?text=Hi!" target="_blank" rel="noopener" data-translate-key="nav_contact" data-i18n="nav.contact">${t('contact', '💬 Contact us')}</a>
        <div class="cosy-lang-dropdown-wrap" style="position:relative;">
          <button id="cosy-lang-menu-btn" type="button" class="cosy-lang-menu-btn" aria-haspopup="dialog" aria-expanded="false" aria-controls="cosy-lang-panel" aria-label="Select Language" onclick="COSY.toggleLangPanel()" style="background:none; border:1px solid var(--border); border-radius:var(--r-sm); padding:4px 8px; font-size:0.85rem; height:36px; cursor:pointer; display:inline-flex; align-items:center; gap:4px; color:var(--ink);">
            🌐 <span class="cosy-pinned-lang-label" id="cosy-pinned-lang-badge">${pinnedLang.toUpperCase()}</span>
          </button>
          ${renderLangPanelHTML()}
        </div>
        <button type="button" class="theme-toggle-btn cosy-theme-btn" onclick="COSY.toggleTheme()" aria-label="Toggle Theme" style="background:none; border:none; font-size:1.2rem; cursor:pointer; padding:6px; display:inline-flex; align-items:center;">
            ${isDark ? '☀️' : '🌙'}
        </button>
        <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Toggle Menu" aria-expanded="false" aria-controls="cosy-mobile-menu">☰</button>
      </div>`
}

/* ═══════════════════════════════════════════════════════════════
   5. UI CORE (Templates)
   ═══════════════════════════════════════════════════════════════ */

function bindNavKeyboardHandlers() {
    const nav = document.getElementById('cosy-nav');
    if (nav && !nav.dataset.kbdBound) {
        nav.dataset.kbdBound = 'true';
        nav.addEventListener('keydown', (e) => {
            const menuItems = Array.from(nav.querySelectorAll('[role="menuitem"], .cosy-nav-more-btn'));
            if (menuItems.length === 0) return;
            const currentIndex = menuItems.indexOf(document.activeElement);

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                if (currentIndex !== -1) {
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % menuItems.length;
                    menuItems[nextIndex].focus();
                }
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                if (currentIndex !== -1) {
                    e.preventDefault();
                    const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                    menuItems[prevIndex].focus();
                }
            } else if (e.key === 'Home') {
                e.preventDefault();
                menuItems[0].focus();
            } else if (e.key === 'End') {
                e.preventDefault();
                menuItems[menuItems.length - 1].focus();
            }
        });
    }

    if (typeof document !== 'undefined' && !window.cosyNavOutsideHandlerSetup) {
        window.cosyNavOutsideHandlerSetup = true;
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const langPanel = document.getElementById('cosy-lang-panel');
                if (langPanel && !langPanel.hasAttribute('hidden')) {
                    if (window.COSY && typeof window.COSY.closeLangPanel === 'function') {
                        window.COSY.closeLangPanel();
                    }
                }

                const moreDropdown = document.querySelector('.cosy-nav-more-wrap.open');
                if (moreDropdown) {
                    moreDropdown.classList.remove('open');
                    const btn = moreDropdown.querySelector('.cosy-nav-more-btn');
                    if (btn) {
                        btn.setAttribute('aria-expanded', 'false');
                        btn.focus();
                    }
                }

                const mm = document.getElementById('cosy-mobile-menu');
                if (mm && mm.classList.contains('open')) {
                    mm.classList.remove('open');
                    const btn = document.querySelector('.nav-menu-btn');
                    if (btn) {
                        btn.setAttribute('aria-expanded', 'false');
                        btn.focus();
                    }
                }
            }
        });

        document.addEventListener('click', (e) => {
            const langWrap = document.querySelector('.cosy-lang-dropdown-wrap');
            if (langWrap && !langWrap.contains(e.target)) {
                if (window.COSY && typeof window.COSY.closeLangPanel === 'function') {
                    window.COSY.closeLangPanel();
                }
            }

            const moreDropdown = document.querySelector('.cosy-nav-more-wrap.open');
            if (moreDropdown && !moreDropdown.contains(e.target)) {
                moreDropdown.classList.remove('open');
                const btn = moreDropdown.querySelector('.cosy-nav-more-btn');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

function ensureSharedNavCss() {
    if (typeof document === 'undefined') return;
    const p = getPrefix();
    if (!document.querySelector('link[href*="css/shared-nav.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = p + 'css/shared-nav.css';
        const nav = document.getElementById('cosy-nav');
        if (nav) nav.style.visibility = 'hidden';
        link.onload = () => {
            if (nav) nav.style.visibility = '';
        };
        link.onerror = () => {
            if (nav) nav.style.visibility = '';
        };
        if (document.head) {
            document.head.appendChild(link);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                if (document.head) document.head.appendChild(link);
            });
        }
    } else {
        const nav = document.getElementById('cosy-nav');
        if (nav) nav.style.visibility = '';
    }
}

function renderNav() {
    ensureSharedNavCss();
    applyMode();
}

function applyMode () {
    const { mode } = STATE;
    if (typeof document !== 'undefined' && document.body) {
        document.body.className = document.body.className.replace(/mode-\w+/g, '').trim();
        document.body.classList.add('mode-free');
    }

    ensureSharedNavCss();

    const nav = typeof document !== 'undefined' ? document.getElementById('cosy-nav') : null;
    if (nav) {
        if (!document.querySelector('.cosy-ecosystem-strip')) {
            const stripEl = document.createElement('nav');
            const homeUrl = getNavHref('home');
            stripEl.className = 'cosy-ecosystem-strip';
            stripEl.setAttribute('aria-label', 'COSY Ecosystem Products');
            stripEl.innerHTML = `
              <div class="cosy-strip-inner">
                <span class="cosy-strip-brand">🌐 COSY Ecosystem:</span>
                <ul class="cosy-strip-links">
                  <li><a href="${homeUrl}" class="cosy-strip-link active">COSYlanguages</a></li>
                  <li><a href="https://cosylanguages.github.io/COSYevents/" target="_blank" rel="noopener" class="cosy-strip-link">COSYevents 🎉</a></li>
                  <li><a href="https://cosylanguages.github.io/COSYgames/" target="_blank" rel="noopener" class="cosy-strip-link">COSYgames 🎮</a></li>
                  <li><a href="https://cosylanguages.github.io/COSYdata/" target="_blank" rel="noopener" class="cosy-strip-link">COSYdata 📖</a></li>
                  <li><a href="https://cosylanguages.github.io/COSYtools/" target="_blank" rel="noopener" class="cosy-strip-link">COSYtools 🔎</a></li>
                </ul>
              </div>`;
            nav.parentNode.insertBefore(stripEl, nav);
        }
        nav.className = 'nav-container';
        const t = getNavLabel;
        nav.setAttribute('aria-label', t('main_aria', 'Main Navigation'));
        nav.innerHTML = navFree();
        bindNavKeyboardHandlers();

        if (!document.getElementById('cosy-eco-mega-menu')) {
            const container = document.createElement('div');
            container.innerHTML = window.COSY.renderEcosystemMegaMenuHTML();
            if (container.firstElementChild) {
                document.body.appendChild(container.firstElementChild);
            }
        }
        window.COSY.bindEcosystemLogoTriggers();

        const activeNavLang = getActiveNavLang();
        const desktopSw = document.getElementById('cosy-language-switcher');
        if (desktopSw) desktopSw.value = activeNavLang;

        // Restore context if any
        if (typeof COSY !== 'undefined' && COSY._navContext) {
            const ctx = document.getElementById('cosy-nav-context');
            if (ctx) ctx.innerHTML = COSY._navContext;
        }
    }

    const mm = typeof document !== 'undefined' ? document.getElementById('cosy-mobile-menu') : null;
    if (mm) {
        mm.innerHTML = mobileMenuHTML(mode);
        const mobileSw = document.getElementById('cosy-language-switcher-mobile');
        if (mobileSw) mobileSw.value = getActiveNavLang();
    }

    if (typeof window !== 'undefined' && window.COSY_UI && typeof window.COSY_UI.updateMobileNav === 'function') {
        window.COSY_UI.updateMobileNav(mode);
    }

    if (typeof document !== 'undefined') {
        document.dispatchEvent(new CustomEvent('cosyModeChanged', { detail: STATE }));
    }

    // Re-apply translations if i18n is available
    if (typeof window !== 'undefined' && window.COSY_I18N && typeof window.COSY_I18N.refresh === 'function') {
        window.COSY_I18N.refresh();
    }
}

function mobileMenuHTML (mode) {
    const t = getNavLabel;
    const homeUrl = getNavHref('home');
    const loginHref = getNavHref('login');
    const pinnedLang = (typeof localStorage !== 'undefined' && (localStorage.getItem('cosy.pinnedLang') || localStorage.getItem('cosy_ui_lang'))) || 'en';

    const freeItems = NAV_CONFIG.free || [];

    const linksHtml = freeItems.map(item => {
        const fallbackLabel = item.key[0].toUpperCase() + item.key.slice(1);
        const label = t(item.key, fallbackLabel);
        const href = getNavHref(item.hrefKey || item.key);
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        const targetAttr = isExternal ? ' target="_blank" rel="noopener"' : '';
        return `<a href="${href}" ${targetAttr} class="cosy-mobile-nav-link" data-translate-key="nav_${item.key}" data-i18n="nav.${item.key}">${item.icon ? item.icon + ' ' : ''}${label}</a>`;
    }).join('\n      ');

    const langs = (typeof window !== 'undefined' && window.COSY_LANGUAGES && window.COSY_LANGUAGES.length)
        ? window.COSY_LANGUAGES
        : [
            { code: 'en', name: 'English', native: 'English', icon: '🇬🇧' },
            { code: 'fr', name: 'French', native: 'Français', icon: '🇫🇷' },
            { code: 'it', name: 'Italian', native: 'Italiano', icon: '🇮🇹' },
            { code: 'ru', name: 'Russian', native: 'Русский', icon: '🇷🇺' },
            { code: 'el', name: 'Greek', native: 'Ελληνικά', icon: '🇬🇷' }
        ];

    return `
      <a href="${homeUrl}" class="cosy-mobile-nav-link" data-translate-key="nav_home" data-i18n="nav.home">🏡 ${t('home', 'Home')}</a>
      ${linksHtml}
      <a href="${loginHref}" class="cosy-mobile-nav-link" data-translate-key="nav_login" data-i18n="nav.login">${t('login', '🔐 Log in')}</a>

      <div class="mm-divider" style="height: 1px; background: var(--border, rgba(74, 107, 80, 0.12)); margin: 8px 0;"></div>

      <div class="cosy-mobile-eco-section" style="padding: 4px 12px;">
        <span class="cosy-mobile-eco-title" style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-soft, #666); display: block; margin-bottom: 6px;">COSY ecosystem</span>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <a href="${homeUrl}" class="cosy-mobile-eco-link active" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYlanguages</a>
          <a href="https://cosylanguages.github.io/COSYevents/" target="_blank" rel="noopener" class="cosy-mobile-eco-link" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYevents 🎉</a>
          <a href="https://cosylanguages.github.io/COSYgames/" target="_blank" rel="noopener" class="cosy-mobile-eco-link" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYgames 🎮</a>
          <a href="https://cosylanguages.github.io/COSYdata/" target="_blank" rel="noopener" class="cosy-mobile-eco-link" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYdata 📖</a>
          <a href="https://cosylanguages.github.io/COSYtools/" target="_blank" rel="noopener" class="cosy-mobile-eco-link" style="font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center;">COSYtools 🔎</a>
        </div>
      </div>

      <div class="mm-divider" style="height: 1px; background: var(--border, rgba(74, 107, 80, 0.12)); margin: 8px 0;"></div>

      <a href="#" onclick="event.preventDefault(); COSY.toggleTheme();" class="cosy-mobile-nav-link mobile-theme-toggle-a" style="display: flex; align-items: center; gap: 8px;" data-translate-key="nav_toggle_dark_mode" data-i18n="nav.toggle_dark_mode">${t('toggle_dark_mode', '🌓 Toggle Dark Mode')}</a>

      <div class="cosy-mobile-lang-section" style="padding: 8px 12px;">
         <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-soft, #666); display: block; margin-bottom: 6px;" data-i18n="label.language">Languages We Teach 🌍</span>
         <div class="cosy-mobile-lang-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 6px;">
           ${langs.map(l => {
              const isPinned = (l.code === pinnedLang);
              const iconDisplay = (l.icon && !l.icon.includes('<')) ? l.icon : (l.flag && !l.flag.includes('<') ? l.flag : '🌐');
              return `
              <button type="button" class="cosy-mobile-lang-btn ${isPinned ? 'pinned' : ''}" onclick="COSY.pinLanguage('${l.code}', event)" style="display:flex; align-items:center; justify-content:space-between; padding:8px 10px; border:1px solid var(--border, rgba(74, 107, 80, 0.12)); border-radius:6px; background:${isPinned ? 'var(--sage-mist, #e0eee2)' : 'var(--warm-white, #fff)'}; color:var(--ink, #2a2a2a); font-size:0.82rem; font-weight:600; cursor:pointer; min-height:44px;">
                <span>${iconDisplay} ${l.code.toUpperCase()}</span>
                <span>📌</span>
              </button>`;
           }).join('')}
         </div>
      </div>

      <div class="mm-divider" style="height: 1px; background: var(--border, rgba(74, 107, 80, 0.12)); margin: 8px 0;"></div>
      <a href="https://wa.me/330766784195" target="_blank" rel="noopener" class="mm-cta cosy-mobile-nav-link" style="background: var(--sage, #416b49); color: #fff; font-weight: 700; border-radius: 100px; text-align: center; justify-content: center;" data-translate-key="nav_whatsapp_contact" data-i18n="nav.whatsapp_contact">${t('whatsapp_contact', '💬 Contact us on WhatsApp')}</a>`
}

function updateMobileNavTranslated() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (!mobileNav) return;

    const getNavHref = (window.COSY && typeof window.COSY.getNavHref === 'function')
        ? window.COSY.getNavHref
        : (key => (key === 'home' ? 'index.html' : key === 'practice' ? 'practice/index.html' : key === 'courses' ? 'index.html#courses' : key === 'blog' ? 'blog/index.html' : `https://cosylanguages.github.io/COSY${key}/`));

    const t = getNavLabel;
    const homeHref = getNavHref('home');
    const practiceHref = getNavHref('practice');
    const gamesHref = getNavHref('games');
    const eventsHref = getNavHref('events');
    const coursesHref = getNavHref('courses');

    mobileNav.innerHTML = `
        <a href="${practiceHref}" class="mobile-nav-item" id="mnav-practice"><span class="mn-icon">💡</span><span data-i18n="nav.practice">${t('practice', 'Practice')}</span></a>
        <a href="${gamesHref}" ${gamesHref.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="mobile-nav-item" id="mnav-games"><span class="mn-icon">🎮</span><span data-i18n="nav.games">${t('games', 'Games')}</span></a>
        <a href="${eventsHref}" ${eventsHref.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="mobile-nav-item" id="mnav-events"><span class="mn-icon">🎉</span><span data-i18n="nav.events">${t('events', 'Events')}</span></a>
        <a href="${coursesHref}" class="mobile-nav-item" id="mnav-courses"><span class="mn-icon">📚</span><span data-i18n="nav.courses">${t('courses', 'Courses')}</span></a>
        <a href="${homeHref}" class="mobile-nav-item" id="mnav-home"><span class="mn-icon">🏡</span><span data-i18n="nav.home">${t('home', 'Home')}</span></a>`;

    const path = window.location.pathname;
    const items = document.querySelectorAll('.mobile-nav-item');

    items.forEach(item => item.classList.remove('active'));

    updateNavActiveState();
}

if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'updateMobileNav', {
        get: function() { return updateMobileNavTranslated; },
        set: function(val) { /* ignore hardcoded ui.js overwrite */ },
        configurable: true,
        enumerable: true
    });
}

function injectStyles() {
    const p = getPrefix();
    if (!document.querySelector(`link[href*="css/components.css"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = p + 'css/components.css';
        document.head.appendChild(link);
    }

    // Modular dynamic CSS loading
    if (document.body && document.body.className && document.body.className.includes('theme-mind')) {
        if (!document.querySelector(`link[href*="apps/premium-events/clubs/mind/style.css"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = p + 'apps/premium-events/clubs/mind/style.css';
            document.head.appendChild(link);
        }
    }
    if (document.body && document.body.className && document.body.className.includes('theme-quotes')) {
        if (!document.querySelector(`link[href*="apps/premium-events/clubs/quotes/style.css"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = p + 'apps/premium-events/clubs/quotes/style.css';
            document.head.appendChild(link);
        }
    }
    if (document.body && document.body.className && document.body.className.includes('theme-celebrate')) {
        if (!document.querySelector(`link[href*="apps/premium-events/clubs/celebrate/style.css"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = p + 'apps/premium-events/clubs/celebrate/style.css';
            document.head.appendChild(link);
        }
    }
}

function ensureI18nLoaded() {
    if (window.COSY_I18N || window.setLanguage) return;

    // Check if script is already present in DOM
    const existing = document.querySelector('script[src*="js/core/i18n.js"]');
    if (existing) return;

    const p = getPrefix();
    const s = document.createElement('script');
    s.src = p + 'js/core/i18n.js';
    document.head.appendChild(s);
}

function ensureSSOAndCMSLoaded() {
    if (typeof document === 'undefined') return;
    const p = getPrefix();

    function loadSSOAndCMS() {
        if (!document.querySelector('script[src*="js/core/auth-sso.js"]')) {
            const s = document.createElement('script');
            s.src = p + 'js/core/auth-sso.js';
            document.head.appendChild(s);
        }

        if (!document.querySelector('script[src*="js/core/cms-editor.js"]')) {
            const s = document.createElement('script');
            s.src = p + 'js/core/cms-editor.js';
            document.head.appendChild(s);
        }
    }

    if (!window.supabase && !document.querySelector('script[src*="supabase-js"]')) {
        const sbScript = document.createElement('script');
        sbScript.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.1';
        sbScript.crossOrigin = 'anonymous';
        sbScript.onload = loadSSOAndCMS;
        document.head.appendChild(sbScript);
    } else {
        loadSSOAndCMS();
    }
}

function inject () {
    injectStyles();
    ensureI18nLoaded();
    ensureSSOAndCMSLoaded();
    if (!document.getElementById('cosy-mobile-menu')) {
        const m = document.createElement('div'); m.id = 'cosy-mobile-menu'; document.body.appendChild(m);
    }

    applyMode();
}

/* ═══════════════════════════════════════════════════════════════
   6. PUBLIC API
   ═══════════════════════════════════════════════════════════════ */

async function getVocabFileList(lang, folderCode) {
    const prefix = getPrefix();
    if (!vocabManifest) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 1000);
            const res = await fetch(prefix + 'vocabulary/manifest.json', { signal: controller.signal });
            clearTimeout(timeoutId);
            if (res.ok) {
                vocabManifest = await res.json();
            } else {
                console.warn('[COSY] vocabulary/manifest.json missing, using fallback list');
            }
        } catch (e) {
            console.warn('[COSY] Failed to fetch manifest, using fallback list', e);
        }
    }

    if (vocabManifest && vocabManifest[lang] && vocabManifest[lang][folderCode]) {
        return vocabManifest[lang][folderCode];
    }
    return FALLBACK_VOCAB_FILES;
}

async function loadVocabFile(path) {
    const prefix = getPrefix();
    const fullPath = prefix + path;

    return new Promise((resolve) => {
        const s = document.createElement('script');
        let done = false;
        const cleanup = () => {
            if (!done) {
                done = true;
                if (s.parentNode) s.remove();
                resolve();
            }
        };
        s.onload = cleanup;
        s.onerror = cleanup;
        s.src = fullPath;
        setTimeout(cleanup, 250);
        document.head.appendChild(s);
    });
}

let STATE = readState();

if (typeof window !== 'undefined') {
    window.toggleTheme = function() {
        if (window.COSY && typeof window.COSY.toggleTheme === 'function') {
            window.COSY.toggleTheme();
        }
    };
}

const COSY = window.COSY = {
    renderNav,
    get mode() { return STATE.mode },
    get practice() { return STATE.practice },
    get notebook() { return STATE.notebook },
    getPrefix,

    initTheme() {
        let theme = null;
        try {
            theme = localStorage.getItem('cosy.theme') || localStorage.getItem('cosy_theme');
        } catch (e) {}
        if (!theme) {
            theme = (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', theme);
        if (typeof document !== 'undefined' && document.body) {
            if (theme === 'dark') {
                document.body.classList.add('theme-dark');
            } else {
                document.body.classList.remove('theme-dark');
            }
        }
        this.updateThemeIcons(theme);
    },

    updateThemeIcons(theme) {
        if (typeof document === 'undefined') return;
        const currentTheme = theme || document.documentElement.getAttribute('data-theme') || 'light';
        const toggles = document.querySelectorAll('.theme-toggle-btn, .cosy-theme-btn');
        toggles.forEach(btn => {
            btn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
            btn.setAttribute('aria-label', currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        });
    },

    toggleTheme() {
        let currentTheme = null;
        try {
            currentTheme = localStorage.getItem('cosy.theme') || localStorage.getItem('cosy_theme');
        } catch (e) {}
        if (!currentTheme) {
            currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        }
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        try {
            localStorage.setItem('cosy.theme', newTheme);
            localStorage.setItem('cosy_theme', newTheme);
        } catch (e) {}
        document.documentElement.setAttribute('data-theme', newTheme);
        if (typeof document !== 'undefined' && document.body) {
            if (newTheme === 'dark') {
                document.body.classList.add('theme-dark');
            } else {
                document.body.classList.remove('theme-dark');
            }
        }
        this.updateThemeIcons(newTheme);
        if (window.COSY && typeof window.COSY.showToast === 'function') {
            window.COSY.showToast(`Theme switched to ${newTheme}!`);
        }
    },

    getPinnedLanguage() {
        try {
            return localStorage.getItem('cosy.pinnedLang') || localStorage.getItem('cosy_ui_lang') || 'en';
        } catch (e) {
            return 'en';
        }
    },

    pinLanguage(langCode, event) {
        if (event) {
            event.stopPropagation();
            if (event.preventDefault) event.preventDefault();
        }
        try {
            localStorage.setItem('cosy.pinnedLang', langCode);
            localStorage.setItem('cosy_ui_lang', langCode);
            localStorage.setItem('cosy_last_language', langCode);
        } catch (e) {}

        const detail = { lang: langCode, pinned: true };
        const evt = new CustomEvent('cosy:langchange', {
            detail: detail,
            bubbles: true
        });
        if (typeof window !== 'undefined' && window.dispatchEvent) {
            window.dispatchEvent(evt);
        } else if (typeof document !== 'undefined' && document.dispatchEvent) {
            document.dispatchEvent(evt);
        }

        if (typeof window !== 'undefined' && typeof window.setLanguage === 'function') {
            window.setLanguage(langCode);
        }

        this.updateLangPanelUI(langCode);
    },

    dispatchInitialLangChange() {
        const lang = this.getPinnedLanguage();
        const detail = { lang: lang, pinned: true, initial: true };
        const evt = new CustomEvent('cosy:langchange', {
            detail: detail,
            bubbles: true
        });
        if (typeof window !== 'undefined' && window.dispatchEvent) {
            window.dispatchEvent(evt);
        } else if (typeof document !== 'undefined' && document.dispatchEvent) {
            document.dispatchEvent(evt);
        }
    },

    updateLangPanelUI(pinnedLang) {
        if (typeof document === 'undefined') return;
        const currentLang = pinnedLang || this.getPinnedLanguage();
        const badge = document.getElementById('cosy-pinned-lang-badge');
        if (badge) {
            badge.textContent = currentLang.toUpperCase();
        }

        const rows = document.querySelectorAll('.cosy-lang-row');
        rows.forEach(row => {
            const code = row.getAttribute('data-lang');
            const isPinned = (code === currentLang);
            if (isPinned) {
                row.classList.add('is-pinned');
            } else {
                row.classList.remove('is-pinned');
            }
            const pinBtn = row.querySelector('.cosy-lang-pin-btn');
            if (pinBtn) {
                pinBtn.classList.toggle('pinned', isPinned);
                pinBtn.setAttribute('aria-pressed', isPinned ? 'true' : 'false');
            }
        });
    },

    toggleLangPanel() {
        const panel = document.getElementById('cosy-lang-panel');
        if (!panel) return;
        const isHidden = panel.hasAttribute('hidden') || !panel.classList.contains('open');
        if (isHidden) {
            this.openLangPanel();
        } else {
            this.closeLangPanel();
        }
    },

    openLangPanel() {
        const panel = document.getElementById('cosy-lang-panel');
        const btn = document.getElementById('cosy-lang-menu-btn');
        if (!panel) return;
        panel.removeAttribute('hidden');
        panel.classList.add('open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        this.updateLangPanelUI();
        const firstBtn = panel.querySelector('button, a, [tabindex="0"]');
        if (firstBtn) firstBtn.focus();
    },

    closeLangPanel() {
        const panel = document.getElementById('cosy-lang-panel');
        const btn = document.getElementById('cosy-lang-menu-btn');
        if (!panel) return;
        panel.setAttribute('hidden', '');
        panel.classList.remove('open');
        if (btn) {
            btn.setAttribute('aria-expanded', 'false');
            btn.focus();
        }
    },

    toggleMoreMenu(btn) {
      if (!btn) return;
      const wrap = btn.closest('.cosy-nav-more-wrap');
      if (!wrap) return;
      wrap.classList.toggle('open');
      const isOpen = wrap.classList.contains('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        const firstLink = wrap.querySelector('.cosy-nav-more-dropdown a');
        if (firstLink) firstLink.focus();
      }
    },

    toggleMobileMenu () {
      const mm = typeof document !== 'undefined' ? document.getElementById('cosy-mobile-menu') : null;
      const btn = typeof document !== 'undefined' ? document.querySelector('.nav-menu-btn') : null;
      if (mm) {
        mm.classList.toggle('open');
        const isOpen = mm.classList.contains('open');
        if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (isOpen) {
            const firstLink = mm.querySelector('a');
            if (firstLink) firstLink.focus();
        }
      }
    },
    getEcosystemUrls,
    getNavHref,
    DEFAULT_ECOSYSTEM_URLS,
    NAV_CONFIG,
    NAV_FALLBACKS,
    COSY_ECOSYSTEM_MENU,

    renderEcosystemMegaMenuHTML() {
        const groupsHtml = COSY_ECOSYSTEM_MENU.map(grp => {
            const cardsHtml = grp.items.map(item => {
                const href = item.href ? item.href : (item.hrefKey ? getNavHref(item.hrefKey) : '#');
                const lockBadge = item.isGated ? '<span class="cosy-eco-card-lock" title="Enrolled students area">🔒</span>' : '';
                const externalAttr = (href.startsWith('http://') || href.startsWith('https://')) ? ' target="_blank" rel="noopener"' : '';
                return `
                  <a href="${href}" class="cosy-eco-card" data-accent="${grp.accentKey}" ${externalAttr}>
                    <div class="cosy-eco-card-header">
                      <span class="cosy-eco-card-icon">${item.icon}</span>
                      <span class="cosy-eco-card-title">${item.title}</span>
                      ${lockBadge}
                    </div>
                    <div class="cosy-eco-card-promise">${item.promise}</div>
                  </a>`;
            }).join('');

            return `
              <div class="cosy-eco-group" data-accent="${grp.accentKey}">
                <div class="cosy-eco-group-title">${grp.group}</div>
                <div class="cosy-eco-group-grid">
                  ${cardsHtml}
                </div>
              </div>`;
        }).join('');

        return `
          <div id="cosy-eco-mega-menu" class="cosy-eco-mega-menu" role="dialog" aria-label="COSY Ecosystem Navigation" hidden>
            <div class="cosy-eco-menu-header">
              <span class="cosy-eco-menu-title">🌐 COSY Ecosystem</span>
              <button type="button" class="cosy-eco-menu-close" aria-label="Close ecosystem menu" onclick="COSY.closeEcosystemMenu()">✕</button>
            </div>
            <div class="cosy-eco-menu-body">
              ${groupsHtml}
            </div>
          </div>`;
    },

    openEcosystemMenu() {
        const menu = document.getElementById('cosy-eco-mega-menu');
        const trigger = document.querySelector('.nav-logo, .cosy-nav-logo');
        if (!menu) return;
        menu.removeAttribute('hidden');
        menu.classList.add('open');
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'true');
            trigger.classList.add('cosy-logo-sparkle');
        }
        this._ecoPreviousFocus = document.activeElement;
        const firstCard = menu.querySelector('.cosy-eco-card, button');
        if (firstCard) firstCard.focus();
    },

    closeEcosystemMenu() {
        const menu = document.getElementById('cosy-eco-mega-menu');
        const trigger = document.querySelector('.nav-logo, .cosy-nav-logo');
        if (!menu) return;
        menu.setAttribute('hidden', '');
        menu.classList.remove('open');
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
            trigger.classList.remove('cosy-logo-sparkle');
            if (this._ecoPreviousFocus) {
                this._ecoPreviousFocus.focus();
            }
        }
    },

    toggleEcosystemMenu() {
        const menu = document.getElementById('cosy-eco-mega-menu');
        if (!menu) return;
        const isOpen = !menu.hasAttribute('hidden') && menu.classList.contains('open');
        if (isOpen) {
            this.closeEcosystemMenu();
        } else {
            this.openEcosystemMenu();
        }
    },

    bindEcosystemLogoTriggers() {
        const triggers = document.querySelectorAll('.nav-logo, .cosy-nav-logo');
        triggers.forEach(trig => {
            if (trig.dataset.ecoBound) return;
            trig.dataset.ecoBound = 'true';
            trig.setAttribute('aria-haspopup', 'dialog');
            trig.setAttribute('aria-expanded', 'false');

            let hoverTimer = null;
            trig.addEventListener('mouseenter', () => {
                if (window.innerWidth >= 768) {
                    hoverTimer = setTimeout(() => {
                        COSY.openEcosystemMenu();
                    }, 150);
                }
            });
            trig.addEventListener('mouseleave', () => {
                if (hoverTimer) clearTimeout(hoverTimer);
            });

            trig.addEventListener('click', (e) => {
                // On mobile or keyboard click, prevent default link navigation if menu closed, or toggle
                e.preventDefault();
                COSY.toggleEcosystemMenu();
            });

            trig.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    COSY.toggleEcosystemMenu();
                }
            });
        });

        // Setup global escape / focus trap / click outside handler for ecosystem menu
        if (!window._ecoGlobalHandlerBound) {
            window._ecoGlobalHandlerBound = true;

            document.addEventListener('keydown', (e) => {
                const menu = document.getElementById('cosy-eco-mega-menu');
                if (!menu || menu.hasAttribute('hidden') || !menu.classList.contains('open')) return;

                if (e.key === 'Escape') {
                    e.preventDefault();
                    COSY.closeEcosystemMenu();
                    return;
                }

                if (e.key === 'Tab') {
                    const focusables = Array.from(menu.querySelectorAll('a[href], button, [tabindex="0"]')).filter(el => !el.hasAttribute('disabled'));
                    if (focusables.length === 0) return;
                    const firstEl = focusables[0];
                    const lastEl = focusables[focusables.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstEl) {
                            e.preventDefault();
                            lastEl.focus();
                        }
                    } else {
                        if (document.activeElement === lastEl) {
                            e.preventDefault();
                            firstEl.focus();
                        }
                    }
                }
            });

            document.addEventListener('click', (e) => {
                const menu = document.getElementById('cosy-eco-mega-menu');
                const logo = e.target.closest('.nav-logo, .cosy-nav-logo');
                if (!menu || menu.hasAttribute('hidden') || !menu.classList.contains('open')) return;

                if (!menu.contains(e.target) && !logo) {
                    COSY.closeEcosystemMenu();
                }
            });
        }
    },


    async loadLanguageData(lang, levelId) {
        const COSYDATA_BASE = 'https://cosylanguages.github.io/COSYdata/';
        let levelsToLoad = (levelId === 'all')
            ? (window.COSY_LEVELS ? window.COSY_LEVELS.map(l => l.id) : ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'])
            : [levelId];
        let remoteEntries = [];

        const keys = ['vocabularyData', 'verbsData', 'adjectivesData', 'locationsData', 'peopleData', 'nationalitiesData', 'grammarData', 'grammarElements', 'dishesData'];
        keys.forEach(key => {
            window[key] = window[key] || {};
            window[key][lang] = window[key][lang] || [];
        });

        // Attempt remote COSYdata fetch first for centralized vocabulary
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 1500);
            const indexRes = await fetch(`${COSYDATA_BASE}vocabulary/${lang}/index.json`, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (indexRes.ok) {
                const indexData = await indexRes.json();
                const themeFiles = [...new Set(Object.values(indexData))];
                const themeFetches = themeFiles.map(tf =>
                    fetch(`${COSYDATA_BASE}vocabulary/${lang}/${tf}`, { signal: controller.signal })
                        .then(r => r.ok ? r.json() : null)
                        .catch(() => null)
                );
                const themeResults = await Promise.all(themeFetches);
                const loadedEntries = [];
                const seenIds = new Set(window.vocabularyData[lang].map(e => e.id || e.word));

                for (const tData of themeResults) {
                    if (!tData) continue;
                    const items = Array.isArray(tData) ? tData : (tData.id ? [tData] : Object.values(tData));
                    for (const item of items) {
                        if (!item || !item.word) continue;
                        const keyId = item.id || `${item.word.toLowerCase()}|${item.level || ''}`;
                        if (seenIds.has(keyId)) continue;
                        seenIds.add(keyId);

                        // Normalize level and level_code
                        if (!item.level && item.level_code) item.level = item.level_code;
                        if (!item.level_code && item.level) item.level_code = item.level;

                        // Check level filter if applicable
                        if (levelId && levelId !== 'all') {
                            const itemLvl = (item.level_code || item.level || '').toLowerCase();
                            const folderCode = window.getLevelDir ? window.getLevelDir(levelId).toLowerCase() : levelId.toLowerCase();
                            const shortCode = window.levelIdToShort ? window.levelIdToShort(levelId).toLowerCase() : levelId.toLowerCase();
                            if (itemLvl !== levelId.toLowerCase() && itemLvl !== folderCode && itemLvl !== shortCode) {
                                const aliases = { 'starter': 'a1', 'elementary': 'a2', 'intermediate': 'b1', 'upper-intermediate': 'b2', 'advanced': 'c1', 'proficiency': 'c2' };
                                if (aliases[itemLvl] !== shortCode && itemLvl !== shortCode) continue;
                            }
                        }

                        window.vocabularyData[lang].push(item);
                        loadedEntries.push(item);

                        if (item.form === 'verb' || item.pos === 'verb') window.verbsData[lang].push(item);
                        if (item.form === 'adjective' || item.pos === 'adjective') window.adjectivesData[lang].push(item);
                        if (item.theme === 'locations' || item.pos_section === 'locations') window.locationsData[lang].push(item);
                        if (item.theme === 'people' || item.pos_section === 'people') window.peopleData[lang].push(item);
                        if (item.theme === 'nationalities') window.nationalitiesData[lang].push(item);
                        if (item.theme === 'dishes') window.dishesData[lang].push(item);
                    }
                }

                if (loadedEntries.length > 0) {
                    remoteEntries = loadedEntries;
                    if (levelId !== 'all') return remoteEntries;

                    const remoteLevels = new Set(remoteEntries.map(item => {
                        const itemLevel = item.level_code || item.level || '';
                        const shortCode = window.levelIdToShort ? window.levelIdToShort(itemLevel) : itemLevel;
                        return String(shortCode).toUpperCase();
                    }));
                    levelsToLoad = levelsToLoad.filter(lid => {
                        const shortCode = window.levelIdToShort ? window.levelIdToShort(lid) : lid;
                        return !remoteLevels.has(String(shortCode).toUpperCase());
                    });
                    if (levelsToLoad.length === 0) return remoteEntries;
                }
            }
        } catch (err) {
            console.warn(`[COSYdata] COSYdata fetch failed for ${lang}, falling back to local files:`, err);
        }

        // Fallback to local script loading for non-migrated languages or offline mode
        const allEntries = [];
        const beforeCounts = {};
        keys.forEach(key => { beforeCounts[key] = window[key][lang].length; });

        const loadPromises = [];
        for (const lid of levelsToLoad) {
            const folderCode = window.getLevelDir ? window.getLevelDir(lid) : lid;
            const basePath = lid === 'all' ? `vocabulary/${lang}/` : `vocabulary/${lang}/${folderCode}/`;
            const files = await getVocabFileList(lang, folderCode);
            for (const file of files) {
                loadPromises.push(loadVocabFile(basePath + file));
            }
        }

        await Promise.all(loadPromises);

        keys.forEach(key => {
            const after = window[key][lang];
            allEntries.push(...after.slice(beforeCounts[key]));
        });

        return remoteEntries.concat(allEntries);
    },

    async loadCurriculum(lang, level) {
        if (!lang || !level) return [];

        const prefix = getPrefix();
        const levelUp = level.toUpperCase();
        const levelLow = level.toLowerCase();
        const langLow = lang.toLowerCase();

        const standardPath = `https://raw.githubusercontent.com/cosylanguages/COSYplatform/main/curriculums/${lang}/general/${levelUp}.json`;
        const v2Path = `https://raw.githubusercontent.com/cosylanguages/COSYplatform/main/curriculums/${lang}/general/${levelUp}_v2.json`;

        try {
            const res = await fetch(standardPath);
            const data = res.ok ? await res.json() : await fetch(v2Path).then(r => r.ok ? r.json() : null);
            if (data && data.units) {
                const units = data.units;
                window.curriculumData = window.curriculumData || {};
                const key = `${langLow}_${levelLow}`;
                window.curriculumData[key] = units;
                if (window.cosyDays) window.cosyDays.state.curriculum = units;
                return units;
            }
        } catch (e) {
            console.warn(`Failed to load curriculum for ${lang} ${level}:`, e);
        }

        const key = `${langLow}_${levelLow}`;
        return (window.curriculumData && window.curriculumData[key]) || [];
    },

    async loadMorphologyData(lang) {
        if (!lang) return [];

        const langLow = lang.toLowerCase();
        window.morphologyData = window.morphologyData || {};
        window.morphologyData[langLow] = window.morphologyData[langLow] || [];

        const prefix = getPrefix();
        const files = ['verbs.json', 'nouns.json', 'pronouns.json', 'determiners.json', 'adjectives.json', 'numerals.json'];

        const loadPromises = files.map(file => {
            const path = `${prefix}grammar/${langLow}/morphology/${file}`;
            return fetch(path)
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    if (data && data.groups) {
                        data.groups.forEach(group => {
                            const items = group.items || [group];
                            items.forEach(item => {
                                if (!item.id) return;
                                const entry = {
                                    ...item,
                                    group: group.id,
                                    group_label: group.label || group.id,
                                    category: data.category || 'morphology',
                                    language: langLow
                                };
                                window.morphologyData[langLow].push(entry);
                            });
                        });
                    }
                })
                .catch(err => console.warn(`[COSY Morphology Loader] Failed to load ${path}:`, err));
        });

        await Promise.all(loadPromises);
        return window.morphologyData[langLow];
    },

    setNavContext(html) {
        const ctx = document.getElementById('cosy-nav-context');
        if (ctx) ctx.innerHTML = html;
        this._navContext = html; // Persist across refreshes in current session
    },
    updateNavActiveState,

    registerSW() {
        if ('serviceWorker' in navigator) {
            const p = getPrefix();
            // Register root service worker for Free Portal
            navigator.serviceWorker.register(p + 'sw.js').catch(e => console.log('SW (Root):', e));
        }
    }
};

if (typeof window !== 'undefined') {
    window.addEventListener('cosy:langchange', (event) => {
        const lang = event.detail && event.detail.lang;
        if (lang) {
            const badge = document.getElementById('cosy-pinned-lang-badge');
            if (badge) {
                badge.textContent = lang.toUpperCase();
            }
        }
    });
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            COSY.initTheme();
            inject();
            COSY.registerSW();
            updateNavActiveState();
            COSY.dispatchInitialLangChange();
        });
    } else {
        COSY.initTheme();
        inject();
        COSY.registerSW();
        updateNavActiveState();
        COSY.dispatchInitialLangChange();
    }
}
if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', updateNavActiveState);
    window.addEventListener('popstate', updateNavActiveState);
}

COSY.getUser = function() {
    try {
        if (typeof localStorage !== 'undefined') {
            const stored = localStorage.getItem('cosy_user') || localStorage.getItem('supabase.auth.token');
            if (stored) {
                const parsed = JSON.parse(stored);
                return parsed.user || parsed;
            }
        }
    } catch(e) {}
    if (typeof window !== 'undefined' && window.COSY_USER) {
        return window.COSY_USER;
    }
    return null;
};

COSY.isUserAuthenticated = function() {
    const u = COSY.getUser();
    if (!u) return false;
    const role = String(u.role || u.user_metadata?.role || u.app_metadata?.role || 'student').toLowerCase();
    return (role === 'student' || role === 'teacher' || role === 'admin');
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getEcosystemUrls,
        getNavHref,
        DEFAULT_ECOSYSTEM_URLS,
        NAV_CONFIG,
        NAV_FALLBACKS,
        COSY_ECOSYSTEM_MENU
    };
}

})();
