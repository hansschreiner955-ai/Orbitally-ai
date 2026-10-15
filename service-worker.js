const CACHE_NAME = 'orbitally-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Installieren und Dateien in den Cache laden
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Anfragen abfangen und aus dem Cache laden
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
