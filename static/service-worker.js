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
  '/site.webmanifest'
];

// Evento di installazione del Service Worker
self.addEventListener('install', function(event) {
  // Mettere i file in cache durante l'installazione
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    }).catch(function(error) {
      console.error('Errore durante la cache dei file:', error);
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

  // Gestire le richieste per le pagine del blog dinamicamente
  if (event.request.url.includes('/blog/')) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(function(networkResponse) {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          let responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache).catch(function(error) {
              console.error('Errore durante il caching della risposta:', error);
            });
          });
          return networkResponse;
        }).catch(function(error) {
          console.error('Errore durante il fetch dalla rete:', error);
        });
      }).catch(function(error) {
        console.error('Errore durante la cache match:', error);
      })
    );
    return;
  }

  // Gestire le richieste per le altre risorse
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(networkResponse) {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        let responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache).catch(function(error) {
            console.error('Errore durante il caching della risposta:', error);
          });
        });
        return networkResponse;
      }).catch(function(error) {
        console.error('Errore durante il fetch dalla rete:', error);
      });
    }).catch(function(error) {
      console.error('Errore durante la cache match:', error);
    })
  );
});