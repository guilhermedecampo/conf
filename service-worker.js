"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","aa7d7bd965a767ed15de13f4a9f2b328"],["static/js/main.2a69dfe5.js","715767a7af05622d98fafb47a8deae4b"],["static/media/background3.a7449ec7.webm","a7449ec71aeebb62bbaf9205f578b820"],["static/media/codamos.037a0bf7.jpg","037a0bf79aa76b69adb6306dc59d5776"],["static/media/concrete.75bd5a42.png","75bd5a42f89e841144da5a3d21641524"],["static/media/geekhunter.c0604099.jpg","c06040999a28de5ec8545f6c96a67b27"],["static/media/greenmile.3b787abb.jpg","3b787abb8cd43996b7c498f9b9d7a5ef"],["static/media/infoqbrasil.352f76d1.png","352f76d1dc0f2d013fe1374d62fba53b"],["static/media/jsladies.e9c192a7.jpg","e9c192a7a65cb83bae2c8c9dbab48c99"],["static/media/luizaLabs.accfa85d.jpg","accfa85d2a26d54de1113851abf49f29"],["static/media/movile.cf1f9acb.jpg","cf1f9acb81c823967ac2924407e5e518"],["static/media/reactconfbr2017.495081a1.jpg","495081a172a249fb3634fa5d8f993963"],["static/media/rivendel.3caf8de8.jpg","3caf8de84c15cb80cdce10247eff25c9"],["static/media/rung.5f6883ec.jpg","5f6883eca35d7051860b6dbe67a50a06"],["static/media/tableless.a819444c.png","a819444cbdfb80f8c39da628f7f12982"],["static/media/trainingcenter.d503922a.jpg","d503922a5590738c2c2adbe1a7f5bda3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});