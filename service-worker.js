self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('rastreo-bus-cache').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/style.css',
          '/script.js',
          '/icon-192x192.png',
          '/icon-512x512.png',
          'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css',
          'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
        ]);
      })
    );
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
    console.log('Service Worker interceptando: ', event.request.url);
  });
  
