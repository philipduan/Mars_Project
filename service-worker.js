"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Mars_Project/index.html","bbe99d331c936e0fe02b71a840a394f7"],["/Mars_Project/static/css/main.c806e07f.css","d8c6b4acede16bc0586c9d467f0d5eed"],["/Mars_Project/static/js/main.859d6537.js","2ab7e9165181f32c9be9c3572e28ef45"],["/Mars_Project/static/media/mars.af7043e3.jpg","af7043e3c1d9c362e1a20bb00d82e040"],["/Mars_Project/static/media/playfairdisplay-bold-webfont.0c8c85c5.eot","0c8c85c55ae82c4efffd9323115b8ae8"],["/Mars_Project/static/media/playfairdisplay-bold-webfont.2febb049.woff","2febb049440cfac0f8161a6f47290cb6"],["/Mars_Project/static/media/playfairdisplay-bold-webfont.52d9903f.svg","52d9903f656c846daa4b26882ee1c188"],["/Mars_Project/static/media/playfairdisplay-bold-webfont.87a4cbd0.woff2","87a4cbd020e20b563164a369c3196297"],["/Mars_Project/static/media/playfairdisplay-bolditalic-webfont.199cf7ca.svg","199cf7ca529c6cd969147848de86e3a5"],["/Mars_Project/static/media/playfairdisplay-bolditalic-webfont.5a0d22cf.woff","5a0d22cf03121e96aee9211c2699a3ff"],["/Mars_Project/static/media/playfairdisplay-bolditalic-webfont.6958c77b.eot","6958c77b56da5096724fe19635e2a664"],["/Mars_Project/static/media/playfairdisplay-bolditalic-webfont.fbc141cc.woff2","fbc141ccf8e94e1bb5f2794f5d0f7e5f"],["/Mars_Project/static/media/playfairdisplay-italic-webfont.a3b05f9c.svg","a3b05f9c4ce93ec920badf33304074af"],["/Mars_Project/static/media/playfairdisplay-italic-webfont.a46ac807.eot","a46ac8070da42491a05515233ef58c4b"],["/Mars_Project/static/media/playfairdisplay-italic-webfont.bc7dfa8a.woff2","bc7dfa8a903623d17ad7935aeeeb07c6"],["/Mars_Project/static/media/playfairdisplay-italic-webfont.d04b9632.woff","d04b9632b5ad02d9ff44b3d3bdb5b785"],["/Mars_Project/static/media/playfairdisplay-regular-webfont.500b36e6.woff2","500b36e651fe53a64a500f010dfc1a3b"],["/Mars_Project/static/media/playfairdisplay-regular-webfont.5dd54909.svg","5dd54909bfc6f8fbe22caf4d88680281"],["/Mars_Project/static/media/playfairdisplay-regular-webfont.bfd22877.eot","bfd2287705bab12c5e05083f5751f8cd"],["/Mars_Project/static/media/playfairdisplay-regular-webfont.de5a6745.woff","de5a6745f6e0334d620aab00b6bc1bd7"],["/Mars_Project/static/media/raleway-light-webfont.01e46a40.eot","01e46a402467fb896a010d617f491f31"],["/Mars_Project/static/media/raleway-light-webfont.8b2985c6.woff","8b2985c65fcc3475b039d59852849844"],["/Mars_Project/static/media/raleway-light-webfont.e0ec1f34.svg","e0ec1f34184d5a0f61a79c11918e1d2d"],["/Mars_Project/static/media/raleway-light-webfont.e75cc427.woff2","e75cc427cf1c6bf796f66d89bbdfba9c"],["/Mars_Project/static/media/raleway-lightitalic-webfont.4c0cee28.woff","4c0cee283fdc907ba8be30c7eb8de5e8"],["/Mars_Project/static/media/raleway-lightitalic-webfont.acabdc95.svg","acabdc95fadd7338deb838338bb989bf"],["/Mars_Project/static/media/raleway-lightitalic-webfont.fc23fe86.eot","fc23fe869b59a128f9fbe058233d5586"],["/Mars_Project/static/media/raleway-lightitalic-webfont.ffb7e0a3.woff2","ffb7e0a3a033f33b7e4860775d547242"],["/Mars_Project/static/media/raleway-medium-webfont.548bd13f.svg","548bd13fa62a11b47331ded1b23f9740"],["/Mars_Project/static/media/raleway-medium-webfont.77bb32b6.eot","77bb32b6a586e44208821b453b6710a2"],["/Mars_Project/static/media/raleway-medium-webfont.84b40dae.woff","84b40dae7ea953eaab24a8d002851385"],["/Mars_Project/static/media/raleway-medium-webfont.929770f6.woff2","929770f6a2c8171205cd9f4e9749661a"],["/Mars_Project/static/media/raleway-mediumitalic-webfont.103acc09.svg","103acc09141ab741eff1bfbbc6eac2c7"],["/Mars_Project/static/media/raleway-mediumitalic-webfont.45d06c37.eot","45d06c3746f5a29bf0adb758f8e7774a"],["/Mars_Project/static/media/raleway-mediumitalic-webfont.66ae3ded.woff2","66ae3deda6f63c240310c45a0d8a16b6"],["/Mars_Project/static/media/raleway-mediumitalic-webfont.b5e9e005.woff","b5e9e005f0797783c399062c2321e878"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/Mars_Project/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});