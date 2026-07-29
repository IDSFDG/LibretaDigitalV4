var CACHE_NAME = "LibretaDigitalSB";
var CACHED_URLS = [
  "LibretaDigitalSB.html",
  "IconResHigh.png",
  "IconResLow.png",
  "IconResMid.png",
  "LibretaDigitalSB.js",
  "uFormaListaArchivos.html",
  "Unit1.html",
  "uNotaRapida.html"
  ];

self.addEventListener('install', function(event) {
                event.waitUntil(
                                caches.open(CACHE_NAME).then(function(cache) {
                                return cache.addAll(CACHED_URLS);
                })
                                );
});


self.addEventListener('fetch',function(event) {
   event.respondWith(
     fetch(event.request).catch(function() {
                   return caches.match(event.request).then(function(response) {
       if (response) {
                                   return response;
       } else if (event.request.headers.get("accept").includes("text/html")) {
                                   return caches.match("LibretaDigitalSB.html");
                   }
                   });
   })
                   );
});