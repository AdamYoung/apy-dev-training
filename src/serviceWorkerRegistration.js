// This is a serviceWorkerRegistration.js file
export function register() {
   if ('serviceWorker' in navigator) {
     window.addEventListener('load', function() {
       navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
         // Registration was successful
         console.log('ServiceWorker registration successful with scope: ', registration.scope);
       }, function(err) {
         // registration failed :(
         console.log('ServiceWorker registration failed: ', err);
       });
     });
   }
 }
 
 export function unregister() {
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.ready.then(function(registration) {
       registration.unregister();
     });
   }
 }
