// import * as caches from '/server/caches.js';

console.log(`sw.js`);

if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('service-worker.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}
