(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    2554: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(8817);
        },
      ]);
    },
    8817: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => o, dynamic: () => c });
      var n = r(5105),
        i = r(2190),
        l = r.n(i),
        a = r(8319);
      let c = 'force-static',
        o = () =>
          (0, n.jsx)('div', {
            className: 'h-screen w-screen bg-gray-100 p-8',
            children: (0, n.jsxs)('div', {
              className:
                'flex h-full flex-col items-center justify-center gap-y-4',
              children: [
                (0, n.jsx)('p', {
                  className: 'text-xl text-black lowercase',
                  children: (0, n.jsx)(l(), {
                    href: '/nothing',
                    target: '_blank',
                    className: 'underline decoration-dotted underline-offset-6',
                    children: 'Hieu Doan',
                  }),
                }),
                (0, n.jsxs)('div', {
                  className:
                    'flex items-center gap-x-1 text-xl text-black lowercase',
                  children: [
                    (0, n.jsx)(a.hL4, {}),
                    (0, n.jsx)(l(), {
                      href: 'https://github.com/hieudoanm',
                      target: '_blank',
                      className:
                        'underline decoration-dotted underline-offset-6',
                      children: 'github',
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className:
                    'flex items-center gap-x-1 text-xl text-black lowercase',
                  children: [
                    (0, n.jsx)(a.QEs, {}),
                    (0, n.jsx)(l(), {
                      href: 'https://www.linkedin.com/in/hieudoanm',
                      target: '_blank',
                      className:
                        'underline decoration-dotted underline-offset-6',
                      children: 'linkedin',
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className:
                    'flex items-center gap-x-1 text-xl text-black lowercase',
                  children: [
                    (0, n.jsx)(a.TCj, {}),
                    (0, n.jsx)(l(), {
                      href: 'https://x.com/hieudoanm',
                      target: '_blank',
                      className:
                        'underline decoration-dotted underline-offset-6',
                      children: 'x (twitter)',
                    }),
                  ],
                }),
              ],
            }),
          });
    },
    9637: (e, t, r) => {
      'use strict';
      r.d(t, { k5: () => u });
      var n = r(8101),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        l = n.createContext && n.createContext(i),
        a = ['attr', 'size', 'title'];
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n, i;
                (n = t),
                  (i = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default');
                        if ('object' != typeof n) return n;
                        throw TypeError(
                          '@@toPrimitive must return a primitive value.'
                        );
                      }
                      return ('string' === t ? String : Number)(e);
                    })(e, 'string');
                    return 'symbol' == typeof t ? t : t + '';
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function u(e) {
        return (t) =>
          n.createElement(
            f,
            c({ attr: s({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, s({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function f(e) {
        var t = (t) => {
          var r,
            { attr: i, size: l, title: o } = e,
            u = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                  (r = l[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r]);
              }
              return i;
            })(e, a),
            f = l || t.size || '1em';
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + ' ' : '') + e.className),
            n.createElement(
              'svg',
              c(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                i,
                u,
                {
                  className: r,
                  style: s(s({ color: e.color || t.color }, t.style), e.style),
                  height: f,
                  width: f,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              o && n.createElement('title', null, o),
              e.children
            )
          );
        };
        return void 0 !== l
          ? n.createElement(l.Consumer, null, (e) => t(e))
          : t(i);
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [433, 190, 636, 593, 792], () => t(2554)), (_N_E = e.O());
  },
]);
