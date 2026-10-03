const CACHE_NAME = 'maibot-app-v1';
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(['index.html', 'manifest.json', 'icon.png'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});