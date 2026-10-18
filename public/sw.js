// Service Worker Kill Switch
// The old Gatsby site (gatsby-plugin-offline) registered a service worker at
// /sw.js which aggressively caches pages. Serving this file in its place makes
// any browser that still has the old worker install this one instead, which
// immediately unregisters itself and clears every cache. See also the cleanup
// script in src/layouts/BaseLayout.astro. Both can be removed once the
// migration has been live for a while.

self.addEventListener('install', function (event) {
  self.skipWaiting()
})

self.addEventListener('activate', function (event) {
  event.waitUntil(
    self.registration.unregister().then(function () {
      return self.caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            return self.caches.delete(cacheName)
          }),
        )
      })
    }),
  )
})
