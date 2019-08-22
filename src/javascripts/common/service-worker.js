/*
 * Load service worker, for offline support
 * Actual service worker is in src/static/sw.js
 */

if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}
