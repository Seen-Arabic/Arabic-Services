const version = '2.0.0-' + new Date().getTime();
const CACHE_NAME = `services-v${version}`;
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
	console.log('Installing new service worker...');
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log('Opened cache');
				return cache.addAll(staticAssets);
			})
			.then(() => {
				console.log('Skip waiting on install');
				return self.skipWaiting(); // Add this line to activate the service worker immediately
			}),
	);
});

self.addEventListener('activate', (event) => {
	console.log('Activating new service worker...');
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					console.log('cacheName', cacheName);
					if (cacheName !== CACHE_NAME) {
						console.log('Deleting old cache...', cacheName);
						return caches.delete(cacheName);
					}
				}),
			);
		}),
	);
});

self.addEventListener('fetch', (event) => {
	// Check if the request is a GET request and comes from our origin
	if (event.request.method === 'GET' && new URL(event.request.url).origin === location.origin) {
		event.respondWith(
			fetch(event.request)
				.then((res) => {
					// Check if we received a valid response
					if (!res || res.status !== 200 || res.type !== 'basic') {
						return res;
					}

					// Make copy/clone of response
					const resClone = res.clone();
					// Open cache
					caches.open(CACHE_NAME).then((cache) => {
						// Add response to cache
						cache.put(event.request, resClone);
					});
					return res;
				})
				.catch((err) => {
					// Check if the response exists in the cache
					return caches.match(event.request).then((response) => {
						return response || Promise.reject(new Error('no-match'));
					});
				}),
		);
	} else {
		// If the request is not from our origin or not a GET request, just fetch it without caching
		event.respondWith(fetch(event.request));
	}
});
