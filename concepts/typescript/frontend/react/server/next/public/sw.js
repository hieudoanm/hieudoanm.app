if (!self.define) {
  let e,
    t = {};
  const s = (s, a) => (
    (s = new URL(s + '.js', a).href),
    t[s] ||
      new Promise((t) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = t), document.head.appendChild(e);
        } else {
          (e = s), importScripts(s), t();
        }
      }).then(() => {
        let e = t[s];
        if (!e) {
          throw new Error(`Module ${s} didn’t register its module`);
        }
        return e;
      })
  );
  self.define = (a, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (t[c]) {
      return;
    }
    let i = {};
    const r = (e) => s(e, c),
      l = { module: { uri: c }, exports: i, require: r };
    t[c] = Promise.all(a.map((e) => l[e] || r(e))).then((e) => (n(...e), i));
  };
}
define(['./workbox-ea5a7399'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/nextjs-template/_next/static/TtxXiQLPywCl_lP8vbpLL/_buildManifest.js',
          revision: 'ebaf9b24f8ab3c888c7d0f672de59d1f',
        },
        {
          url: '/nextjs-template/_next/static/TtxXiQLPywCl_lP8vbpLL/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/nextjs-template/_next/static/chunks/592-8344712ba2b21b5c.js',
          revision: '8344712ba2b21b5c',
        },
        {
          url: '/nextjs-template/_next/static/chunks/598-479f6c107c6a7021.js',
          revision: '479f6c107c6a7021',
        },
        {
          url: '/nextjs-template/_next/static/chunks/604.dd6a56065afe6cc0.js',
          revision: 'dd6a56065afe6cc0',
        },
        {
          url: '/nextjs-template/_next/static/chunks/664-9bd75eb52ffc53a7.js',
          revision: '9bd75eb52ffc53a7',
        },
        {
          url: '/nextjs-template/_next/static/chunks/702-ee07e2c53a621aa4.js',
          revision: 'ee07e2c53a621aa4',
        },
        {
          url: '/nextjs-template/_next/static/chunks/7d60f9e2.cf61c50426713cc9.js',
          revision: 'cf61c50426713cc9',
        },
        {
          url: '/nextjs-template/_next/static/chunks/824-2257ac1558ff5ac5.js',
          revision: '2257ac1558ff5ac5',
        },
        {
          url: '/nextjs-template/_next/static/chunks/834-fc5a5c9b126f23e4.js',
          revision: 'fc5a5c9b126f23e4',
        },
        {
          url: '/nextjs-template/_next/static/chunks/910-679636c7618c05ab.js',
          revision: '679636c7618c05ab',
        },
        {
          url: '/nextjs-template/_next/static/chunks/952-b9164903e1f130b0.js',
          revision: 'b9164903e1f130b0',
        },
        {
          url: '/nextjs-template/_next/static/chunks/framework-fb572cd42a99c20d.js',
          revision: 'fb572cd42a99c20d',
        },
        {
          url: '/nextjs-template/_next/static/chunks/main-e76dc49fda9ef181.js',
          revision: 'e76dc49fda9ef181',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/404-1b7a4d8f4ea04f34.js',
          revision: '1b7a4d8f4ea04f34',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/500-b4ff218ac36e3e79.js',
          revision: 'b4ff218ac36e3e79',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/_app-674ea2055ce1fbd4.js',
          revision: '674ea2055ce1fbd4',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/_error-223a054d031f5f9f.js',
          revision: '223a054d031f5f9f',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/apps/calendar-cedb8905a6bc1f1e.js',
          revision: 'cedb8905a6bc1f1e',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/apps/chart-67608f830e04b401.js',
          revision: '67608f830e04b401',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/apps/table-5c5025aaf4d54fc0.js',
          revision: '5c5025aaf4d54fc0',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/auth/sign-in-00158b33a29e5faf.js',
          revision: '00158b33a29e5faf',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/auth/sign-up-a6f7d9338459ba36.js',
          revision: 'a6f7d9338459ba36',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/index-79c9f94e4c4fce9a.js',
          revision: '79c9f94e4c4fce9a',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/password/forget-2d8f16158d11d884.js',
          revision: '2d8f16158d11d884',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/password/reset-b5c34cf9dd44cd43.js',
          revision: 'b5c34cf9dd44cd43',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/user/profile-321d48c626ae4de0.js',
          revision: '321d48c626ae4de0',
        },
        {
          url: '/nextjs-template/_next/static/chunks/pages/user/settings-150586b668ab9b93.js',
          revision: '150586b668ab9b93',
        },
        {
          url: '/nextjs-template/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/nextjs-template/_next/static/chunks/webpack-64e08e48c5de9137.js',
          revision: '64e08e48c5de9137',
        },
        {
          url: '/nextjs-template/_next/static/css/1bf854ea50102040.css',
          revision: '1bf854ea50102040',
        },
        {
          url: '/nextjs-template/_next/static/media/solid.1a17d133.svg',
          revision: '217fc83ff2e177a2e9b09793b96d9d86',
        },
        {
          url: '/nextjs-template/apple-touch-icon.png',
          revision: '7937902f0d03eab4361567de894d318e',
        },
        {
          url: '/nextjs-template/favicon-16x16.png',
          revision: '8693d4efcc5c1964643c5bad4495fed1',
        },
        {
          url: '/nextjs-template/favicon-32x32.png',
          revision: '61036d61b353e05fc0a3dc1f616e54ca',
        },
        {
          url: '/nextjs-template/favicon.ico',
          revision: 'c30c7d42707a47a3f4591831641e50dc',
        },
        {
          url: '/nextjs-template/manifest.json',
          revision: 'e628b05ec199019600514d3048aa23f0',
        },
        {
          url: '/nextjs-template/next.svg',
          revision: '8e061864f388b47f33a1c3780831193e',
        },
        {
          url: '/nextjs-template/robots.txt',
          revision: '3e042940d36d3b7142e5d790c68f4a39',
        },
        {
          url: '/nextjs-template/sitemap.xml',
          revision: '87cc10741326b8db7c900261716c3549',
        },
        {
          url: '/nextjs-template/thirteen.svg',
          revision: '53f96b8290673ef9d2895908e69b2f92',
        },
        {
          url: '/nextjs-template/vercel.svg',
          revision: '61c6b19abff40ea7acd577be818f3976',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/nextjs-template',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: t,
              event: s,
              state: a,
            }) =>
              t && 'opaqueredirect' === t.type
                ? new Response(t.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: t.headers,
                  })
                : t,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) {
          return !1;
        }
        const t = e.pathname;
        return !t.startsWith('/api/auth/') && !!t.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) {
          return !1;
        }
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
