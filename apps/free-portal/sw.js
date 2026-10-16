const CACHE_NAME = 'cosy-free-portal-v2';
const STATIC_ASSETS = [
  './',
  '../../index.html',
  '../../placement-quiz.html',
  '../../print-studio/print-grammar.html',
  '../../print-studio/print-cards.html',
  '../../print-studio/print-zine.html',
  '../../print-studio/print-box.html',
  '../../print-studio/print-boardgame.html',
  '../../apps/classroom-sync/index.html',
  '../../practice/index.html',
  '../../practice/cognitive-immersion.html',
  '../../css/base.css',
  '../../css/components.css',
  '../../css/layout.css',
  '../../css/home.css',
  '../../css/mobile.css',
  '../../js/core/engine.js',
  '../../js/core/i18n.js',
  '../../js/core/ui.js',
  '../../js/core/linguistics.js',
  '../../js/core/morphology.js',
  '../../js/data/languages.js',
  '../../js/data/grammar_config.js',
  '../../practice/_engine/core.js',
  '../../practice/_engine/renderers.js',
  '../../images/logos/cosylanguages.png',
  '../../images/languages/cosyenglish.png',
  '../../images/languages/cosyfrench.png',
  '../../images/languages/cosyitalian.png',
  '../../images/languages/cosyrussian.png',
  '../../images/languages/cosygreek.png',
];

let cacheDisabled = false;

async function safeCacheOpen(name) {
  if (cacheDisabled) return null;
  try {
    if (!self.caches) return null;
    return await caches.open(name);
  } catch (e) {
    if (e.name === 'UnknownError' || e.message.includes('internal error')) cacheDisabled = true;
    console.warn('[SW] Cache open failed:', e);
    return null;
  }
}

async function safeCacheMatch(request) {
  if (cacheDisabled) return null;
  try {
    if (!self.caches) return null;
    return await caches.match(request);
  } catch (e) {
    if (e.name === 'UnknownError' || e.message.includes('internal error')) cacheDisabled = true;
    console.warn('[SW] Cache match failed:', e);
    return null;
  }
}

self.addEventListener('install', e => {
  e.waitUntil(
    safeCacheOpen(CACHE_NAME).then(cache => {
      if (cache) return cache.addAll(STATIC_ASSETS);
    }).catch(err => console.warn('[SW] Install failed:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    (async () => {
      try {
        if (!self.caches) return;
        const keys = await caches.keys();
        await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
      } catch (err) {
        console.warn('[SW] Activation cleanup failed:', err);
      }
    })()
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Network-First for Code Files (HTML, JS, CSS)
  const isCodeFile = e.request.mode === 'navigate' ||
                     url.pathname.endsWith('.html') ||
                     url.pathname.endsWith('.js') ||
                     url.pathname.endsWith('.css');

  if (isCodeFile) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            safeCacheOpen(CACHE_NAME).then(cache => {
              if (cache) cache.put(e.request, clone).catch(() => {});
            });
          }
          return res;
        })
        .catch(() => safeCacheMatch(e.request))
    );
    return;
  }

  // Cache-First with background update for Media (Images, Fonts)
  e.respondWith(
    safeCacheMatch(e.request)
      .then(cached => {
        const networked = fetch(e.request)
          .then(res => {
            if (res.ok) {
              const clone = res.clone();
              safeCacheOpen(CACHE_NAME).then(cache => {
                if (cache) cache.put(e.request, clone).catch(() => {});
              });
            }
            return res;
          })
          .catch(() => null);

        return cached || networked;
      })
  );
});
