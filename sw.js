self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('spielzeit-cache').then(cache => {
      return cache.addAll([
        '/Spielzeittracker/spielzeit_tracker_modern_mobile.html',
        '/Spielzeittracker/manifest.webmanifest',
        '/Spielzeittracker/icon-192.png',
        '/Spielzeittracker/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
