const CACHE_NAME = 'my-pwa-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/_headers',
  '/fonts/baloo-2-v16-latin-500.woff',
  '/fonts/baloo-2-v16-latin-regular.woff2',
  '/fonts/baloo-2-v16-latin-600.woff2',
  '../src/css/main.css',
  '/fonts/baloo-2-v16-latin-800.woff2',
  '/fonts/baloo-2-v16-latin-500.woff2',
  '/static/baloo-2-v16-latin-600.woff',
  '/_redirects',
  '/script.js',
  '/css/main.css',
  '/js/main.js',
  '/site.webmanifest',
  '/img/favicon/android-chrome-192x192.png',
  '/img/favicon/android-chrome-512x512.png'
];

const MAIN_PATHS = [
  '/blog',
  '/for-meetups',
  '/for-businesses/',
  '/peach-for-businesses/',
  '/support/',
  '/buy-btc-with-cash/',
  '/how-it-works/',
  '/buy-btc-with-cash/',
  '/how-to-buy-btc-no-kyc/'
];

const LANGUAGES = ['es', 'de', 'it', 'fr', 'el', 'hu', 'nl', 'pl', 'pt', 'sw', 'uk'];

// Installazione del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files during install');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// Attivazione del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercettazione delle richieste di rete
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Se il file è nella cache, restituiscilo
        }
        return fetch(event.request).then(
          function(response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

// Funzione per mettere in cache le pagine principali e le lingue disponibili
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const pathsToCache = MAIN_PATHS.flatMap(path => LANGUAGES.map(lang => `/${lang}${path}`));
      return cache.addAll(pathsToCache);
    })
  );
});