importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js",
);

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
workbox.precaching.precache([
  "/",
  "http://localhost:7070/file.png",
  "http://localhost:7070/microphone.png",
  "http://localhost:7070/more.png",
  "http://localhost:7070/search.png",
  "http://localhost:7070/smile.png",
  "http://localhost:7070/star-clicked.png",
  "http://localhost:7070/star-unclicked.png",
]);

const { strategies } = workbox;

self.addEventListener("fetch", (evt) => {
  const url = new URL(evt.request.url);
  if (url.pathname.startsWith("/api/import")) {
    const networkFirst = new strategies.NetworkFirst();
    evt.respondWith(networkFirst.makeRequest({ request: evt.request }));
  }
});
