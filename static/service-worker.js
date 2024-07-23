const CACHE_NAME = 'static-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/_headers',
  '/fonts/baloo-2-v16-latin-500.woff',
  '/fonts/baloo-2-v16-latin-regular.woff2',
  '/fonts/baloo-2-v16-latin-600.woff2',
  '/css/main.css',
  '/fonts/baloo-2-v16-latin-800.woff2',
  '/_redirects',
  '/script.js',
  '/css/main.css',
  '/js/main.js',
  '/site.webmanifest',
  '/img/favicon/android-chrome-192x192.png',
  '/img/favicon/android-chrome-512x512.png'
];

// Evento di installazione del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.all(
        FILES_TO_CACHE.map(function(url) {
          return fetch(new Request(url)).then(function(response) {
            if (response.ok) {
              return cache.put(url, response);
            } else {
              console.error('Failed to fetch and cache:', url, response.status);
            }
          }).catch(function(error) {
            console.error('Fetch failed for:', url, error);
          });
        })
      );
    }).catch(function(error) {
      console.error('Failed to open cache:', error);
    })
  );
});

// Evento di attivazione del Service Worker
self.addEventListener('fetch', function(event) {
  // Gestire solo richieste GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Gestire solo richieste HTTP e HTTPS
  if (!event.request.url.startsWith('http') && !event.request.url.startsWith('https')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Restituire la risposta dalla cache se disponibile
      if (response) {
        return response;
      }

      // Se la risposta non è nella cache, effettuare una richiesta di rete
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function(networkResponse) {
        // Solo mettere in cache risposte da HTTP/HTTPS con status 200 e tipo 'basic'
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          let responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache).catch(function(error) {
              console.error('Failed to cache network response:', error);
            });
          });
        }
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
