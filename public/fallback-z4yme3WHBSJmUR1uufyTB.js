(() => {
  'use strict';
  self.fallback = async (e) =>
    'document' === e.destination
      ? caches.match('/apps', { ignoreSearch: !0 })
      : Response.error();
})();
