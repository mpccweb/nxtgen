// Minimal service worker - required by Chrome to allow "Install app"
// This app always needs internet to log scans, so this worker doesn't
// cache anything for offline use; it just needs to exist and register.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Pass every request straight through to the network, no caching.
  event.respondWith(fetch(event.request));
});
