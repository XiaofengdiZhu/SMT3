const
    version = 'build 2018/6/10 1:52',
    CACHE = version + '::PWA',
    offlineURL = './assets/no_cached/index.html',
    installFilesEssential = [
        './index.html',
        './manifest.json',
        './assets/javascripts/modernizr.1aa3b519.js',
        './javascript/jquery-3.3.1.min.js',
        './assets/stylesheets/application.8d40d89b.css',
        './javascript/preload.js',
        './assets/stylesheets/application-palette.6079476c.css',
        './assets/javascripts/application.b438e6c5.js',
        './stylesheets/extra.css',
        './javascript/extra.js'
    ].concat(offlineURL),
    installFilesDesirable = [
        './favicon.png',
        './saiming/web_logo.png',
        './fonts/Roboto_Mono.css',
        './assets/javascripts/lunr/lunr.stemmer.support.js',
        './fonts/Material_Icons.css',
        './fonts/font-awesome.min.css',
        './fonts/KFOkCnqEu92Fr1Mu51xIIzI.woff2',
        './fonts/KFOlCnqEu92Fr1MmSU5fBBc4.woff2',
        './fonts/KFOmCnqEu92Fr1Mu4mxK.woff2',
        './fonts/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
        './fonts/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2',
        './fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
        './fonts/fontawesome-webfont.woff2?v=4.7.0',
        './saiming/404.png'
    ];

//let href =window.document.location.href;

function installStaticFiles() {
    return caches.open(CACHE)
        .then(cache => {
            cache.addAll(installFilesDesirable);
            return cache.addAll(installFilesEssential);
        });
}

self.addEventListener('install', event => {
    event.waitUntil(
        installStaticFiles()
            .then(() => self.skipWaiting())
    );
});

function clearOldCaches() {
    return caches.keys()
        .then(keylist => {
            return Promise.all(
                keylist
                    .filter(key => key !== CACHE)
                    .map(key => caches.delete(key))
            );
        });
}

self.addEventListener('activate', event => {
    event.waitUntil(
        clearOldCaches()
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    let url = event.request.url;
    if (url.includes("www.google-analytics.com")){ return;}
    event.respondWith(
        caches.open(CACHE)
            .then(cache => {
                return cache.match(event.request)
                    .then(response => {
                        if (response) {
                            return response;
                        }

                        return fetch(event.request)
                            .then(newreq => {
                                if (newreq.ok) cache.put(event.request, newreq.clone());
                                return newreq;
                            })
                            .catch(() => offlineAsset(url));
                    });
            })
    );
});

let iExt = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg'].map(f => '.' + f);
function isImage(url) {
    return iExt.reduce((ret, ext) => ret || url.endsWith(ext), false);
}

function offlineAsset(url) {
    if (isImage(url)) {
        return new Response(
            '<svg role="img" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title>offline</title><path d="M0 0h400v300H0z" fill="#eee" /><text x="200" y="150" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="50" fill="#ccc">offline</text></svg>',
            { headers: {
                    'Content-Type': 'image/svg+xml',
                    'Cache-Control': 'no-store'
                }}
        );
    }
    else if(url.indexOf(".js")>-1){
        return;
    }else{
        return caches.match(offlineURL);
    }
}