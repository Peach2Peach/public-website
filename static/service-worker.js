
const CACHE_NAME = 'dynamic-v1';


self.addEventListener('install', function(event) {
  self.skipWaiting();
});


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
  
  return self.clients.claim();
});

// Evento di fetch (richiesta di risorse)
self.addEventListener('fetch', function(event) {
  // Ignorare richieste non GET
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
          
          let responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache).catch(function(error) {
              console.error('Errore durante il caching della risposta:', error);
            });
          });
          return networkResponse;
        }).catch(function(error) {
          console.error('Errore durante il fetch dalla rete:', error);
          return new Response('Errore di rete', {
            status: 408,
            statusText: 'Errore di rete'
          });
        });
      }).catch(function(error) {
        console.error('Errore durante la cache match:', error);
        return new Response('Errore di cache', {
          status: 408,
          statusText: 'Errore di cache'
        });
      })
    );
  }
});
