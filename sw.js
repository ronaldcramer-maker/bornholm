const CACHE = 'bornholm-v2';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-180.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// stale-while-revalidate: sofort aus dem Cache (offline-faehig),
// im Hintergrund aktualisieren -> neue Uploads erscheinen beim naechsten Start.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(e.request).then((cached) => {
        const network = fetch(e.request).then((resp) => {
          if (resp && resp.status === 200 && resp.type === 'basic') cache.put(e.request, resp.clone());
          return resp;
        }).catch(() => cached || cache.match('./index.html'));
        return cached || network;
      })
    )
  );
});
