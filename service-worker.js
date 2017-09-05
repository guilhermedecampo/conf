"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","afbf0f0339f3143a6c31533c72143195"],["static/js/main.9a13b8ac.js","96ac3e39acda09980fb555cc0f1601d9"],["static/media/amorim-pb.7edc2aff.jpg","7edc2afffa4c4b874248310a6836ec3b"],["static/media/background3.a7449ec7.webm","a7449ec71aeebb62bbaf9205f578b820"],["static/media/codamos.037a0bf7.jpg","037a0bf79aa76b69adb6306dc59d5776"],["static/media/daciuk-pb.0a1c612a.jpg","0a1c612a77aa9cfd02c009f55dc2dad6"],["static/media/fullcircle.0245f8d9.jpg","0245f8d95a5e450e1ad2334ead6a211e"],["static/media/greenmile.3b787abb.jpg","3b787abb8cd43996b7c498f9b9d7a5ef"],["static/media/jbaxleyiii-pb.64107823.jpg","64107823f0def410b0a45823a6896cb0"],["static/media/jsladies.e9c192a7.jpg","e9c192a7a65cb83bae2c8c9dbab48c99"],["static/media/kete-pb.c9f397f4.jpg","c9f397f47a872dc2df82edca4fccc217"],["static/media/marsiglio-pb.81280409.jpg","8128040997a53cf949a94455417ca5af"],["static/media/meteor.87f3ffc5.jpg","87f3ffc5f439ddb9efa05a191e18e49c"],["static/media/milfont-pb.f8ee7970.jpg","f8ee79703b914d58a1303446c72e3c62"],["static/media/reactconfbr-event.0b7bc4b8.jpg","0b7bc4b89bef962384443baf1539738a"],["static/media/rivendel.3caf8de8.jpg","3caf8de84c15cb80cdce10247eff25c9"],["static/media/sashko-pb.b8be63f8.jpg","b8be63f8bd33680ba69fff1fcdaeb839"],["static/media/sibelius-pb.32fc0260.jpg","32fc02603c61a2e699f660715d893125"],["static/media/stq.6796b7b8.jpg","6796b7b8d15b1b390bf62da3c4acaf1f"],["static/media/taller.7e623bf4.jpg","7e623bf4bf7278cc4d9a1116426e8ef8"],["static/media/theater-augusta.ec81a1e2.png","ec81a1e21057e0afb6a1839239a3ae78"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});