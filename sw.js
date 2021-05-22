const cacheName = 'services-v1';
const staticAssets = [
  './',
  './404.html',
  './index.html',
  './assets/images/logo-transparent.svg',
  './assets/images/logo-circle.svg',
  './assets/images/logo.svg',
  './assets/css/home.css',
  './assets/css/main.css',
  './assets/js/oldArabic.js',
  './assets/js/letterToWord.js',
  './letter-to-word/index.html',
  './old-arabic/index.html'
];


self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}