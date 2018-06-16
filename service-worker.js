"use strict";var version="build 2018/6/16 23:41",CACHE=version+"::PWA",offlineURL="./assets/no_cached/index.html",installFilesEssential=["./index.html","./manifest.json","./assets/javascripts/modernizr.1aa3b519.js","./javascript/jquery-3.3.1.min.js","./assets/stylesheets/application.css","./javascript/preload.js","./assets/javascripts/application.b438e6c5.js","./stylesheets/extra.css","./javascript/extra.js"].concat(offlineURL),installFilesDesirable=["./favicon.png","./saiming/web_logo.png","./fonts/fonts.css","./fonts/KFOkCnqEu92Fr1Mu51xIIzI.woff2","./fonts/KFOlCnqEu92Fr1MmSU5fBBc4.woff2","./fonts/KFOmCnqEu92Fr1Mu4mxK.woff2","./fonts/KFOlCnqEu92Fr1MmWUlfBBc4.woff2","./fonts/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2","./fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2","./fonts/fontawesome-webfont.woff2?v=4.7.0","./saiming/404.png"];function installStaticFiles(){return caches.open(CACHE).then(function(e){return e.addAll(installFilesDesirable),e.addAll(installFilesEssential)})}function clearOldCaches(){return caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e!==CACHE}).map(function(e){return caches.delete(e)}))})}self.addEventListener("install",function(e){e.waitUntil(installStaticFiles().then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){e.waitUntil(clearOldCaches().then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var s=t.request.url;s.includes("www.google-analytics.com")||t.respondWith(caches.open(CACHE).then(function(n){return n.match(t.request).then(function(e){return e||fetch(t.request).then(function(e){return e.ok&&n.put(t.request,e.clone()),e}).catch(function(){return offlineAsset(s)})})}))});var iExt=["png","jpg","jpeg","gif","webp","bmp","svg"].map(function(e){return"."+e});function isImage(t){return iExt.reduce(function(e,n){return e||t.endsWith(n)},!1)}function offlineAsset(e){return isImage(e)?new Response('<svg role="img" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title>offline</title><path d="M0 0h400v300H0z" fill="#eee" /><text x="200" y="150" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="50" fill="#ccc">offline</text></svg>',{headers:{"Content-Type":"image/svg+xml","Cache-Control":"no-store"}}):-1<e.indexOf(".js")?void 0:caches.match(offlineURL)}