const CACHE_NAME = 'static-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/static/_headers',
  '/fonts/baloo-2-v16-latin-500.woff',
  '/fonts/baloo-2-v16-latin-regular.woff2',
  '/fonts/baloo-2-v16-latin-600.woff2',
  '/static/css',
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

// Evento di installazione del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    }).catch(function(error) {
      console.error('Failed to cache during install:', error);
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
    }).catch(function(error) {
      console.error('Failed to clean up old caches:', error);
    })
  );
  return self.clients.claim();
});

// Evento di fetch (richiesta di risorse)
self.addEventListener('fetch', function(event) {
  // Gestire solo le richieste GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Rispondere con il file dalla cache o effettuare una richiesta in rete
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Restituire la risposta dalla cache se disponibile
      if (response) {
        return response;
      }

      // Se la risposta non è nella cache, effettuare una richiesta in rete
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function(networkResponse) {
        // Controllare se la risposta della rete è valida
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Clonare la risposta della rete e metterla in cache
        let responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache).catch(function(error) {
            console.error('Failed to cache network response:', error);
          });
        });
        return networkResponse;
      }).catch(function(error) {
        console.error('Fetch error:', error);

        // Opzionale: Fornire una risposta di fallback se non disponibile la rete
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html'); // Fallback alla pagina principale per le richieste di navigazione
        }
      });
    })
  );
});