(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [190],
  {
    2538: (e, t, r) => {
      'use strict';
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(3098),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    184: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let n = r(173),
        o = r(5105),
        l = n._(r(8101)),
        u = r(810),
        f = r(8562),
        a = r(2635),
        c = r(7645),
        i = r(5836),
        s = r(7451),
        d = r(6595),
        p = r(2538),
        b = r(7631),
        y = r(9273),
        h = new Set();
      function v(e, t, r, n) {
        if ((0, f.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              '%' +
              r +
              '%' +
              (void 0 !== n.locale
                ? n.locale
                : 'locale' in e
                  ? e.locale
                  : void 0);
            if (h.has(o)) return;
            h.add(o);
          }
          e.prefetch(t, r, n).catch((e) => {});
        }
      }
      function g(e) {
        return 'string' == typeof e ? e : (0, a.formatUrl)(e);
      }
      let _ = l.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: a,
          as: h,
          children: _,
          prefetch: M = null,
          passHref: j,
          replace: m,
          shallow: O,
          scroll: P,
          locale: C,
          onClick: k,
          onMouseEnter: E,
          onTouchStart: R,
          legacyBehavior: x = !1,
          ...L
        } = e;
        (r = _),
          x &&
            ('string' == typeof r || 'number' == typeof r) &&
            (r = (0, o.jsx)('a', { children: r }));
        let w = l.default.useContext(s.RouterContext),
          I = !1 !== M,
          { href: S, as: T } = l.default.useMemo(() => {
            if (!w) {
              let e = g(a);
              return { href: e, as: h ? g(h) : e };
            }
            let [e, t] = (0, u.resolveHref)(w, a, !0);
            return { href: e, as: h ? (0, u.resolveHref)(w, h) : t || e };
          }, [w, a, h]),
          U = l.default.useRef(S),
          D = l.default.useRef(T);
        x && (n = l.default.Children.only(r));
        let K = x ? n && 'object' == typeof n && n.ref : t,
          [A, N, H] = (0, d.useIntersection)({ rootMargin: '200px' }),
          q = l.default.useCallback(
            (e) => {
              (D.current !== T || U.current !== S) &&
                (H(), (D.current = T), (U.current = S)),
                A(e);
            },
            [T, S, H, A]
          ),
          z = (0, y.useMergedRef)(q, K);
        l.default.useEffect(() => {
          w && N && I && v(w, S, T, { locale: C });
        }, [T, S, N, C, I, null == w ? void 0 : w.locale, w]);
        let B = {
          ref: z,
          onClick(e) {
            x || 'function' != typeof k || k(e),
              x &&
                n.props &&
                'function' == typeof n.props.onClick &&
                n.props.onClick(e),
              w &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, l, u, a) {
                  let { nodeName: c } = e.currentTarget;
                  ('A' === c.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute('target');
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !(0, f.isLocalURL)(r))) ||
                    (e.preventDefault(),
                    (() => {
                      let e = null == u || u;
                      'beforePopState' in t
                        ? t[o ? 'replace' : 'push'](r, n, {
                            shallow: l,
                            locale: a,
                            scroll: e,
                          })
                        : t[o ? 'replace' : 'push'](n || r, { scroll: e });
                    })());
                })(e, w, S, T, m, O, P, C);
          },
          onMouseEnter(e) {
            x || 'function' != typeof E || E(e),
              x &&
                n.props &&
                'function' == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              w &&
                v(w, S, T, {
                  locale: C,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart: function (e) {
            x || 'function' != typeof R || R(e),
              x &&
                n.props &&
                'function' == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              w &&
                v(w, S, T, {
                  locale: C,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if ((0, c.isAbsoluteUrl)(T)) B.href = T;
        else if (!x || j || ('a' === n.type && !('href' in n.props))) {
          let e = void 0 !== C ? C : null == w ? void 0 : w.locale,
            t =
              (null == w ? void 0 : w.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                T,
                e,
                null == w ? void 0 : w.locales,
                null == w ? void 0 : w.domainLocales
              );
          B.href =
            t ||
            (0, b.addBasePath)(
              (0, i.addLocale)(T, e, null == w ? void 0 : w.defaultLocale)
            );
        }
        return x
          ? l.default.cloneElement(n, B)
          : (0, o.jsx)('a', { ...L, ...B, children: r });
      });
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6595: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(8101),
        o = r(9464),
        l = 'function' == typeof IntersectionObserver,
        u = new Map(),
        f = [];
      function a(e) {
        let { rootRef: t, rootMargin: r, disabled: a } = e,
          c = a || !l,
          [i, s] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (l) {
              if (c || i) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || '',
                      },
                      n = f.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = u.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      f.push(r),
                      u.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), u.delete(n);
                        let e = f.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && f.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && s(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!i) {
              let e = (0, o.requestIdleCallback)(() => s(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [c, r, t, i, d.current]),
          [
            p,
            i,
            (0, n.useCallback)(() => {
              s(!1);
            }, []),
          ]
        );
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9273: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useMergedRef', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(8101);
      function o(e, t) {
        let r = (0, n.useRef)(() => {}),
          o = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), o.current())
                    : ((r.current = l(e, n)), (o.current = l(t, n)));
                }
              : e || t,
          [e, t]
        );
      }
      function l(e, t) {
        if ('function' != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return 'function' == typeof r ? r : () => e(null);
        }
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2190: (e, t, r) => {
      e.exports = r(184);
    },
  },
]);
