self.addEventListener('install', (event) => {
    console.info('on Service Worker install');
});

self.addEventListener('activate', (event) => {
  console.info('on Service Worker activate');
});
