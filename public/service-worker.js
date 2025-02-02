importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  console.log('Workbox is loaded');

  // Precache files. The manifest will be injected by Workbox during the build process.
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  // Cache CSS, JS, and image files with a Stale-While-Revalidate strategy
  workbox.routing.registerRoute(
    ({request}) => request.destination === 'style' || request.destination === 'script' || request.destination === 'image',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'assets-cache',
    })
  );
} else {
  console.log('Workbox could not be loaded. No offline support.');
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
}); 