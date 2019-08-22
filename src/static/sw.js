importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    // Project namespace
    var projectNamespace = 'static';

    // Fonts we can serve immediatelly
    workbox.routing.registerRoute(
        new RegExp('^(https://fonts\.googleapis\.com/|https://use\.typekit\.net)'),
        workbox.strategies.cacheFirst({
            cacheName: projectNamespace + '-web-fonts-cache',
            cacheableResponse: {
                statuses: [0, 200]
            }
        })
    );

    workbox.routing.registerRoute(
        new RegExp('/assets/.*.(woff|woff2|eot|ttf|otf)'),
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: projectNamespace + '-custom-fonts-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache for a maximum of a week
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ]
        })
    );

    // Don't cache video
    workbox.routing.registerRoute(
        new RegExp('\\.mp4$'),
        function () {} // default browser behaviour
    );

    // Ignore API, etc. calls
    workbox.routing.registerRoute(
        new RegExp('(/api/|/admin/).*'),
        function () {} // default browser behaviour
    );

    // Rest of the assets network first
    workbox.routing.registerRoute(
        new RegExp('/assets/.*'),
        workbox.strategies.networkFirst({
            cacheName: projectNamespace + '-assets-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache for a maximum of a week
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ]
        })
    );

    workbox.routing.registerRoute(
        new RegExp('/'),
        workbox.strategies.networkFirst({
            cacheName: projectNamespace + '-other-cache'
        })
    );
}
