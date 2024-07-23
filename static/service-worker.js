// Nome della cache
const CACHE_NAME = 'static-v1';

// File da mettere in cache
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

// Percorsi principali
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

// Lingue disponibili
const LANGUAGES = ['es', 'de', 'it', 'fr', 'el', 'hu', 'nl', 'pl', 'pt', 'sw', 'uk'];

// Aggiungere i percorsi per le lingue disponibili
LANGUAGES.forEach(lang => {
  MAIN_PATHS.forEach(path => {
    FILES_TO_CACHE.push(`/${lang}${path}`);
  });
});

// Aggiungere i percorsi principali alla cache
FILES_TO_CACHE.push(...MAIN_PATHS);

// Evento di installazione del Service Worker
self.addEventListener('install', function(event) {
  // Mettere i file in cache durante l'installazione
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    }).catch(function(error) {
      // Gestione dell'errore di caching durante l'installazione
    })
  );
});

// Evento di attivazione del Service Worker
self.addEventListener('activate', function(event) {
  // Pulire le vecchie cache non utilizzate
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
  // Prendere il controllo delle pagine attualmente aperte
  return self.clients.claim();
});

// Evento di fetch (richiesta di risorse)
self.addEventListener('fetch', function(event) {
  // Ignorare richieste non GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Gestire solo le richieste HTTP
  if (event.request.url.startsWith('http')) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        // Restituire la risposta dalla cache o effettuare una richiesta in rete
        return response || fetch(event.request).then(function(networkResponse) {
          // Controllare se la risposta della rete è valida
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          // Clonare la risposta della rete e metterla in cache
          let responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache).catch(function(error) {
              // Gestione dell'errore durante il caching della richiesta
            });
          });
          return networkResponse;
        });
      }).catch(function(error) {
        // Gestione dell'errore durante il fetch e caching
      })
    );
  }
});
