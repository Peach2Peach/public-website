const CACHE_NAME = 'static-v1';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/how-it-works/',
  '/script.js',
  '/css/main.css',
  '/js/main.js',
  '/site.webmanifest'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    }).catch(function(error) {
      // Gestione dell'errore di caching durante l'installazione
    })
  );
});

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

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') {
    return;
  }

  if (event.request.url.startsWith('http')) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(networkResponse) {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          let responseToCache = networkResponse.clone();
          
          // Caching dinamico per articoli del blog
          if (event.request.url.includes('/blog/')) {
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseToCache).catch(function(error) {
                // Gestione dell'errore durante il caching della richiesta
              });
            });
          }
          
          return networkResponse;
        });
      }).catch(function(error) {
        // Gestione dell'errore durante il fetch e caching
      })
    );
  }
});