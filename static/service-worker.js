// Nome della cache
const CACHE_NAME = 'static-v1';

// File da mettere in cache
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/static/_headers',
  '/fonts/baloo-2-v16-latin-500.woff',
  '/fonts/baloo-2-v16-latin-regular.woff2',
  '/fonts/baloo-2-v16-latin-600.woff2',
  '../src/css/main.css',
  '/fonts/baloo-2-v16-latin-800.woff2',
  '/fonts/baloo-2-v16-latin-500.woff2',
  '/static/baloo-2-v16-latin-600.woff',
  '/static/_redirects',
  '/script.js',
  '/css/main.css',
  '/js/main.js',
  '/static/site.webmanifest',
  '/img/favicon/android-chrome-192x192.png',
  '/img/favicon/android-chrome-512x512.png'
];

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Installazione in corso...');

  
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[ServiceWorker] Caching dei file statici in corso...');
      return cache.addAll(FILES_TO_CACHE);
    }).catch(function(error) {
      console.error('Errore durante il caching dei file:', error);
    })
  );

  // Forza il nuovo Service Worker a diventare attivo subito
  self.skipWaiting();
});

// Evento di attivazione del Service Worker
self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Attivazione in corso...');

  // Pulire le vecchie cache non utilizzate
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Rimozione della cache vecchia:', key);
          return caches.delete(key);
        }
      }));
    }).catch(function(error) {
      console.error('Errore durante la pulizia delle cache:', error);
    })
  );

  // check actual open page
  return self.clients.claim();
});

// Evento di fetch (richiesta di risorse)
self.addEventListener('fetch', function(event) {
  console.log('[ServiceWorker] Fetching:', event.request.url);

  // ignore non GET rqst
  if (event.request.method !== 'GET') {
    return;
  }

  // check if rqst is correct
  if (event.request.headers.get('accept').includes('text/html')) {
    // cache-then-network
    event.respondWith(
      caches.match(event.request).then(function(cachedResponse) {
        if (cachedResponse) {
          // response to cache
          return cachedResponse;
        }

        // Fetch to put in intranet
        return fetch(event.request).then(function(networkResponse) {
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, networkResponse.clone()).catch(function(error) {
              console.error('Errore durante il caching della risposta di rete:', error);
            });
          });
          return networkResponse;
        }).catch(function(error) {
          // error while fetch network
          console.error('Errore durante il fetch di rete:', error);

          // fallback case of error
          return caches.match('/offline.html');
        });
      }).catch(function(error) {
        console.error('Errore durante il fetch dalla cache:', error);
        return caches.match('/offline.html');
      })
    );
  } else {
    // for CSS, JS, immagini, ecc
    event.respondWith(
      caches.match(event.request).then(function(cachedResponse) {
        return cachedResponse || fetch(event.request).then(function(networkResponse) {
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, networkResponse.clone()).catch(function(error) {
              console.error('Errore durante il caching della risposta di rete:', error);
            });
          });
          return networkResponse;
        });
      }).catch(function(error) {
        console.error('Errore durante il fetch dalla cache:', error);
      })
    );
  }
});