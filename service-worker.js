/******/ (() => { // webpackBootstrap
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");
workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([{'revision':'5798a4455d278d5770c6cb22f7758fdf','url':'./index.html'},{'revision':'bb710c1dd6273341ca09066bbe62600d','url':'main.css'},{'revision':'6f3659b068fe709f9e70c387b31e6de8','url':'main.js'}]);
workbox.precaching.precache(["/", "http://localhost:7070/file.png", "http://localhost:7070/microphone.png", "http://localhost:7070/more.png", "http://localhost:7070/search.png", "http://localhost:7070/smile.png", "http://localhost:7070/star-clicked.png", "http://localhost:7070/star-unclicked.png"]);
const {
  strategies
} = workbox;
self.addEventListener("fetch", evt => {
  const url = new URL(evt.request.url);
  if (url.pathname.startsWith("/api/import")) {
    const networkFirst = new strategies.NetworkFirst();
    evt.respondWith(networkFirst.makeRequest({
      request: evt.request
    }));
  }
});
/******/ })()
;