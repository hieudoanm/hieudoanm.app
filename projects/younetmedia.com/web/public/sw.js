if (!self.define) {
  let e,
    t = {};
  const i = (i, o) => (
    (i = new URL(i + '.js', o).href),
    t[i] ||
      new Promise((t) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = t), document.head.appendChild(e);
        } else (e = i), importScripts(i), t();
      }).then(() => {
        let e = t[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (o, a) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (t[n]) return;
    let r = {};
    const s = (e) => i(e, n),
      c = { module: { uri: n }, exports: r, require: s };
    t[n] = Promise.all(o.map((e) => c[e] || s(e))).then((e) => (a(...e), r));
  };
}
define(['./workbox-cf9e2b60'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/M0BcHjkcwbR4KnYuWgmfc/_buildManifest.js',
          revision: 'a14176af5f6883810dc4c16d2dfdaf3d',
        },
        {
          url: '/_next/static/M0BcHjkcwbR4KnYuWgmfc/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/204-d6164c2e47668a3d.js',
          revision: 'd6164c2e47668a3d',
        },
        {
          url: '/_next/static/chunks/253-92444206e30ffb46.js',
          revision: '92444206e30ffb46',
        },
        {
          url: '/_next/static/chunks/361-124fa7fdb8099185.js',
          revision: '124fa7fdb8099185',
        },
        {
          url: '/_next/static/chunks/382-62259ae2b8d86012.js',
          revision: '62259ae2b8d86012',
        },
        {
          url: '/_next/static/chunks/538-5d47beaf82a36d34.js',
          revision: '5d47beaf82a36d34',
        },
        {
          url: '/_next/static/chunks/840-77da9ad209cc30c7.js',
          revision: '77da9ad209cc30c7',
        },
        {
          url: '/_next/static/chunks/97-5e766c91f9905335.js',
          revision: '5e766c91f9905335',
        },
        {
          url: '/_next/static/chunks/framework-38698f7be9dad502.js',
          revision: '38698f7be9dad502',
        },
        {
          url: '/_next/static/chunks/main-5cdcbed0b1755943.js',
          revision: '5cdcbed0b1755943',
        },
        {
          url: '/_next/static/chunks/pages/404-5153f540c134d85f.js',
          revision: '5153f540c134d85f',
        },
        {
          url: '/_next/static/chunks/pages/500-8932beb21dc660a6.js',
          revision: '8932beb21dc660a6',
        },
        {
          url: '/_next/static/chunks/pages/_app-4df062106c8c2df4.js',
          revision: '4df062106c8c2df4',
        },
        {
          url: '/_next/static/chunks/pages/_error-5c556b70fbd65812.js',
          revision: '5c556b70fbd65812',
        },
        {
          url: '/_next/static/chunks/pages/auth-45b8646ff17fdab2.js',
          revision: '45b8646ff17fdab2',
        },
        {
          url: '/_next/static/chunks/pages/index-125861bedf0579b1.js',
          revision: '125861bedf0579b1',
        },
        {
          url: '/_next/static/chunks/pages/socialheat-99941d311d2cb92f.js',
          revision: '99941d311d2cb92f',
        },
        {
          url: '/_next/static/chunks/pages/socialtrend-79cbdafa5d64c9bb.js',
          revision: '79cbdafa5d64c9bb',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-6af0e3c12b874bb0.js',
          revision: '6af0e3c12b874bb0',
        },
        {
          url: '/_next/static/css/3c6c8999107670d1.css',
          revision: '3c6c8999107670d1',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-300-normal.17dc3449.woff',
          revision: '17dc3449',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-300-normal.88798412.woff2',
          revision: '88798412',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-400-normal.19f93502.woff',
          revision: '19f93502',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-400-normal.2d9c9d60.woff2',
          revision: '2d9c9d60',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-500-normal.6e4060e5.woff',
          revision: '6e4060e5',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-500-normal.aa68ea54.woff2',
          revision: 'aa68ea54',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-700-normal.1ea775f3.woff',
          revision: '1ea775f3',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-700-normal.258a358e.woff2',
          revision: '258a358e',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-ext-300-normal.cd7c5715.woff2',
          revision: 'cd7c5715',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-ext-300-normal.de365ce5.woff',
          revision: 'de365ce5',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-ext-400-normal.02e18372.woff',
          revision: '02e18372',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-ext-400-normal.d7827ae3.woff2',
          revision: 'd7827ae3',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-ext-500-normal.a05054d8.woff',
          revision: 'a05054d8',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-ext-500-normal.a1b5c90d.woff2',
          revision: 'a1b5c90d',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-ext-700-normal.46ca43b3.woff',
          revision: '46ca43b3',
        },
        {
          url: '/_next/static/media/roboto-cyrillic-ext-700-normal.dd3651fb.woff2',
          revision: 'dd3651fb',
        },
        {
          url: '/_next/static/media/roboto-greek-300-normal.122e04f2.woff',
          revision: '122e04f2',
        },
        {
          url: '/_next/static/media/roboto-greek-300-normal.25dc89b0.woff2',
          revision: '25dc89b0',
        },
        {
          url: '/_next/static/media/roboto-greek-400-normal.63e6dc18.woff2',
          revision: '63e6dc18',
        },
        {
          url: '/_next/static/media/roboto-greek-400-normal.e3b5876b.woff',
          revision: 'e3b5876b',
        },
        {
          url: '/_next/static/media/roboto-greek-500-normal.533b03d2.woff2',
          revision: '533b03d2',
        },
        {
          url: '/_next/static/media/roboto-greek-500-normal.55bbf615.woff',
          revision: '55bbf615',
        },
        {
          url: '/_next/static/media/roboto-greek-700-normal.432b858b.woff2',
          revision: '432b858b',
        },
        {
          url: '/_next/static/media/roboto-greek-700-normal.b3d9786c.woff',
          revision: 'b3d9786c',
        },
        {
          url: '/_next/static/media/roboto-greek-ext-300-normal.69dd9b06.woff',
          revision: '69dd9b06',
        },
        {
          url: '/_next/static/media/roboto-greek-ext-300-normal.bc5ce703.woff2',
          revision: 'bc5ce703',
        },
        {
          url: '/_next/static/media/roboto-greek-ext-400-normal.2b547ded.woff2',
          revision: '2b547ded',
        },
        {
          url: '/_next/static/media/roboto-greek-ext-400-normal.d17f5f2b.woff',
          revision: 'd17f5f2b',
        },
        {
          url: '/_next/static/media/roboto-greek-ext-500-normal.7ea6cffa.woff2',
          revision: '7ea6cffa',
        },
        {
          url: '/_next/static/media/roboto-greek-ext-500-normal.fcc37f63.woff',
          revision: 'fcc37f63',
        },
        {
          url: '/_next/static/media/roboto-greek-ext-700-normal.950178dd.woff',
          revision: '950178dd',
        },
        {
          url: '/_next/static/media/roboto-greek-ext-700-normal.a8d16efd.woff2',
          revision: 'a8d16efd',
        },
        {
          url: '/_next/static/media/roboto-latin-300-normal.73b81266.woff',
          revision: '73b81266',
        },
        {
          url: '/_next/static/media/roboto-latin-300-normal.a4eae32d.woff2',
          revision: 'a4eae32d',
        },
        {
          url: '/_next/static/media/roboto-latin-400-normal.d6d4cf7b.woff',
          revision: 'd6d4cf7b',
        },
        {
          url: '/_next/static/media/roboto-latin-400-normal.f2894edc.woff2',
          revision: 'f2894edc',
        },
        {
          url: '/_next/static/media/roboto-latin-500-normal.3170fd9a.woff2',
          revision: '3170fd9a',
        },
        {
          url: '/_next/static/media/roboto-latin-500-normal.cdad2023.woff',
          revision: 'cdad2023',
        },
        {
          url: '/_next/static/media/roboto-latin-700-normal.71b2beb8.woff2',
          revision: '71b2beb8',
        },
        {
          url: '/_next/static/media/roboto-latin-700-normal.f3ddaf9d.woff',
          revision: 'f3ddaf9d',
        },
        {
          url: '/_next/static/media/roboto-latin-ext-300-normal.37d4965d.woff2',
          revision: '37d4965d',
        },
        {
          url: '/_next/static/media/roboto-latin-ext-300-normal.b9b4688a.woff',
          revision: 'b9b4688a',
        },
        {
          url: '/_next/static/media/roboto-latin-ext-400-normal.21abc8c8.woff2',
          revision: '21abc8c8',
        },
        {
          url: '/_next/static/media/roboto-latin-ext-400-normal.9600b4a6.woff',
          revision: '9600b4a6',
        },
        {
          url: '/_next/static/media/roboto-latin-ext-500-normal.41845160.woff',
          revision: '41845160',
        },
        {
          url: '/_next/static/media/roboto-latin-ext-500-normal.85ebfb55.woff2',
          revision: '85ebfb55',
        },
        {
          url: '/_next/static/media/roboto-latin-ext-700-normal.6af98c24.woff2',
          revision: '6af98c24',
        },
        {
          url: '/_next/static/media/roboto-latin-ext-700-normal.b6be88e2.woff',
          revision: 'b6be88e2',
        },
        {
          url: '/_next/static/media/roboto-vietnamese-300-normal.44e9a722.woff',
          revision: '44e9a722',
        },
        {
          url: '/_next/static/media/roboto-vietnamese-300-normal.b3d3e960.woff2',
          revision: 'b3d3e960',
        },
        {
          url: '/_next/static/media/roboto-vietnamese-400-normal.b339d926.woff',
          revision: 'b339d926',
        },
        {
          url: '/_next/static/media/roboto-vietnamese-400-normal.c95fc061.woff2',
          revision: 'c95fc061',
        },
        {
          url: '/_next/static/media/roboto-vietnamese-500-normal.65b57a7f.woff',
          revision: '65b57a7f',
        },
        {
          url: '/_next/static/media/roboto-vietnamese-500-normal.7f8c0554.woff2',
          revision: '7f8c0554',
        },
        {
          url: '/_next/static/media/roboto-vietnamese-700-normal.72bf832f.woff2',
          revision: '72bf832f',
        },
        {
          url: '/_next/static/media/roboto-vietnamese-700-normal.82ca662a.woff',
          revision: '82ca662a',
        },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        { url: '/manifest.json', revision: '4307a509118a8cb78053a1993aae66fa' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/robots.txt', revision: '3e042940d36d3b7142e5d790c68f4a39' },
        { url: '/sitemap.xml', revision: '87cc10741326b8db7c900261716c3549' },
        { url: '/thirteen.svg', revision: '53f96b8290673ef9d2895908e69b2f92' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: t,
              event: i,
              state: o,
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
        if (!(self.origin === e.origin)) return !1;
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
        if (!(self.origin === e.origin)) return !1;
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
