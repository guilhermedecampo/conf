"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","06bf0dd9cb62c4810c0f9d41b0c85a82"],["static/js/main.d0eeecd0.js","775f3781072338c4e8588f16d092fb26"],["static/media/background3.a7449ec7.webm","a7449ec71aeebb62bbaf9205f578b820"],["static/media/codamos.037a0bf7.jpg","037a0bf79aa76b69adb6306dc59d5776"],["static/media/concrete.75bd5a42.png","75bd5a42f89e841144da5a3d21641524"],["static/media/dne.e321c712.svg","e321c7123077643a52869d5b4b17786b"],["static/media/geekhunter.c0604099.jpg","c06040999a28de5ec8545f6c96a67b27"],["static/media/greenmile.3b787abb.jpg","3b787abb8cd43996b7c498f9b9d7a5ef"],["static/media/infoqbrasil.352f76d1.png","352f76d1dc0f2d013fe1374d62fba53b"],["static/media/jsladies.7ca4658b.png","7ca4658bda5fbcd7483e33c6b2c6ad75"],["static/media/luizaLabs.accfa85d.jpg","accfa85d2a26d54de1113851abf49f29"],["static/media/movile.cf1f9acb.jpg","cf1f9acb81c823967ac2924407e5e518"],["static/media/reactconfbr2017.495081a1.jpg","495081a172a249fb3634fa5d8f993963"],["static/media/rivendel.3caf8de8.jpg","3caf8de84c15cb80cdce10247eff25c9"],["static/media/rung.5f6883ec.jpg","5f6883eca35d7051860b6dbe67a50a06"],["static/media/tableless.a819444c.png","a819444cbdfb80f8c39da628f7f12982"],["static/media/trainingcenter.d503922a.jpg","d503922a5590738c2c2adbe1a7f5bda3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});