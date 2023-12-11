const CACHE_NAME = 'services-v2.2.17';
const staticAssets = [
	'./',
	'./index.html',
	'./assets/css/main.css',
	'./assets/js/main.js',
	'./assets/js/arabic-services.umd.js',
	// images
	'./assets/images/logo-transparent.svg',
	'./assets/images/logo-circle.svg',
	'./assets/images/logo.svg',
	// logo icons
	'./assets/images/logo_x48.png',
	'./assets/images/logo_x72.png',
	'./assets/images/logo_x96.png',
	'./assets/images/logo_x128.png',
	'./assets/images/logo_x192.png',
	'./assets/images/logo_x384.png',
	'./assets/images/logo_x512.png',

	'./404.html',
	'./manifest.json',
	'./robots.txt',
];

self.addEventListener('install', (event) => {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Opened cache');
			return cache.addAll(staticAssets);
		}),
	);
});

self.addEventListener('activate', (event) => {
	const cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				}),
			);
		}),
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Cache hit - return response
			if (response) {
				return response;
			}
			return fetch(event.request);
		}),
	);
});
