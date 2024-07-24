// Nome della cache
const CACHE_NAME = 'dynamic-v1';

// Evento di installazione del Service Worker
self.addEventListener('install', function(event) {
  self.skipWaiting();
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
        if (response) {
          return response;
        }
        return fetch(event.request).then(function(networkResponse) {
          // Controllare se la risposta della rete è valida
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Gestire le risposte con status 302 (redirezione)
          if (networkResponse.status === 302) {
            return fetch(networkResponse.headers.get('Location')).then(function(redirectedResponse) {
              // Controllare se la risposta rediretta è valida
              if (!redirectedResponse || redirectedResponse.status !== 200 || redirectedResponse.type !== 'basic') {
                return redirectedResponse;
              }
              // Clonare la risposta rediretta e metterla in cache
              let responseToCache = redirectedResponse.clone();
              caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request, responseToCache).catch(function(error) {
                  console.error('Errore durante il caching della risposta rediretta:', error);
                });
              });
              return redirectedResponse;
            }).catch(function(error) {
              console.error('Errore durante il fetch della redirezione:', error);
            });
          }

          // Clonare la risposta della rete e metterla in cache
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
  }
});