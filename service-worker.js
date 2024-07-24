// Nome della cache
const CACHE_NAME = 'static-v1';

// File da mettere in cache
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/how-it-works/',
  '/script.js',
  '/css/main.css',
  '/js/main.js',
  '/site.webmanifest',
  '/blog/',
  '/blog/Why-Choose-Peach/',
  '/blog/bitcoin-explained-in-2024/',
  '/blog/grouphug-for-everyone/',
  '/blog/if-bitcoin-goes-to-1-million/',
  '/blog/peachy-christmas-bitcoiners/',
  '/blog/why-bitcoin/',
  '/blog/peach-reputation-system/',
  '/blog/newsletter-october-4/',
  '/blog/1y-anniversary/',
  '/blog/how-to-restore-peach-wallet/',
  '/blog/funding-multiple-sell-offers/'
];

// Evento di installazione del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch(function(error) {
        console.error('Errore durante il caching dei file:', error);
      })
  );
});

// Evento di attivazione del Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Evento di fetch (richiesta di risorse)
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') {
    return;
  }

  if (event.request.url.startsWith('http')) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request).then(function(networkResponse) {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Controllo se la risposta ha un contenuto
          if (networkResponse.ok && networkResponse.headers.get('Content-Length') !== '0') {
            let responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseToCache).catch(function(error) {
                console.error('Errore durante il caching della richiesta:', error);
              });
            });
          }

          return networkResponse;
        }).catch(function(error) {
          console.error('Errore durante il fetch dalla rete:', error);
          return new Response('Errore di rete', { status: 500 });
        });
      }).catch(function(error) {
        console.error('Errore durante il match dalla cache:', error);
        return new Response('Errore di cache', { status: 500 });
      })
    );
  }
});