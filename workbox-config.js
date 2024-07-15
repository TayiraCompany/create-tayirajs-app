const { WorkboxPlugin } = require('workbox-webpack-plugin');

module.exports = {

  plugins: [
    new WorkboxPlugin.GenerateSW({
      globDirectory: 'build/', 
      globPatterns: ['**/*.{html,js,css}'], 
      swDest: 'build/sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) =>
            request.destination === 'document' ||
            request.destination === 'script' ||
            request.destination === 'style',
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 10,
            },
          },
        },
      ],
    }),
  ],
};
