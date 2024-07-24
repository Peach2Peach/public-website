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
  '/offline.html'  // Aggiungi una pagina offline per i fallback
];

// Evento di installazione del Service Worker
self.addEventListener('install', function(event) {
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

// Funzione per mettere in cache le richieste dinamiche
function addToCache(request, response) {
  if (request && response) {
    return caches.open(CACHE_NAME).then(function(cache) {
      return cache.put(request, response);
    });
  }
}

// Evento di fetch (richiesta di risorse)
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') {
    return;
  }

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
        addToCache(event.request, responseToCache);
        return networkResponse;
      }).catch(function() {
        return caches.match('/offline.html').then(function(fallbackResponse) {
          if (fallbackResponse) {
            return fallbackResponse;
          }
          return new Response('Pagina non disponibile offline.', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({'Content-Type': 'text/plain'})
          });
        });
      });
    }).catch(function(error) {
      console.error('Errore durante la cache match:', error);
      return caches.match('/offline.html').then(function(fallbackResponse) {
        if (fallbackResponse) {
          return fallbackResponse;
        }
        return new Response('Pagina non disponibile offline.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({'Content-Type': 'text/plain'})
        });
      });
    })
  );
});