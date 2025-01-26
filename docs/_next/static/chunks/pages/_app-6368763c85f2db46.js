(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    1395: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 });
      let {
          Decimal: n,
          objectEnumValues: i,
          makeStrictEnum: s,
          Public: a,
          getRuntime: o,
          skip: u,
        } = r(8401),
        l = {};
      (t.Prisma = l),
        (t.$Enums = {}),
        (l.prismaVersion = {
          client: '6.2.1',
          engine: '4123509d24aa4dede1e864b46351bf2790323b69',
        }),
        (l.PrismaClientKnownRequestError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.PrismaClientUnknownRequestError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.PrismaClientRustPanicError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.PrismaClientInitializationError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.PrismaClientValidationError = () => {
          let e = o().prettyName;
          throw Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.Decimal = n),
        (l.sql = () => {
          let e = o().prettyName;
          throw Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.empty = () => {
          let e = o().prettyName;
          throw Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.join = () => {
          let e = o().prettyName;
          throw Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.raw = () => {
          let e = o().prettyName;
          throw Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.validator = a.validator),
        (l.getExtensionContext = () => {
          let e = o().prettyName;
          throw Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.defineExtension = () => {
          let e = o().prettyName;
          throw Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (l.DbNull = i.instances.DbNull),
        (l.JsonNull = i.instances.JsonNull),
        (l.AnyNull = i.instances.AnyNull),
        (l.NullTypes = {
          DbNull: i.classes.DbNull,
          JsonNull: i.classes.JsonNull,
          AnyNull: i.classes.AnyNull,
        }),
        (t.Prisma.TransactionIsolationLevel = s({
          ReadUncommitted: 'ReadUncommitted',
          ReadCommitted: 'ReadCommitted',
          RepeatableRead: 'RepeatableRead',
          Serializable: 'Serializable',
        })),
        (t.Prisma.WordScalarFieldEnum = {
          word: 'word',
          results: 'results',
          syllables: 'syllables',
          pronunciation: 'pronunciation',
          frequency: 'frequency',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.PlayerScalarFieldEnum = {
          id: 'id',
          username: 'username',
          avatar: 'avatar',
          name: 'name',
          title: 'title',
          country: 'country',
          countryCode: 'countryCode',
          status: 'status',
          league: 'league',
          url: 'url',
          twitchUrl: 'twitchUrl',
          isStreamer: 'isStreamer',
          verified: 'verified',
          lastOnline: 'lastOnline',
          joined: 'joined',
          rapidRatingBest: 'rapidRatingBest',
          rapidRatingLast: 'rapidRatingLast',
          rapidRatingDeviation: 'rapidRatingDeviation',
          rapidRecordWin: 'rapidRecordWin',
          rapidRecordDraw: 'rapidRecordDraw',
          rapidRecordLoss: 'rapidRecordLoss',
          blitzRatingBest: 'blitzRatingBest',
          blitzRatingLast: 'blitzRatingLast',
          blitzRatingDeviation: 'blitzRatingDeviation',
          blitzRecordWin: 'blitzRecordWin',
          blitzRecordDraw: 'blitzRecordDraw',
          blitzRecordLoss: 'blitzRecordLoss',
          bulletRatingBest: 'bulletRatingBest',
          bulletRatingLast: 'bulletRatingLast',
          bulletRatingDeviation: 'bulletRatingDeviation',
          bulletRecordWin: 'bulletRecordWin',
          bulletRecordDraw: 'bulletRecordDraw',
          bulletRecordLoss: 'bulletRecordLoss',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.GameScalarFieldEnum = {
          uuid: 'uuid',
          url: 'url',
          pgn: 'pgn',
          timeClass: 'timeClass',
          timeControl: 'timeControl',
          endTime: 'endTime',
          rated: 'rated',
          initialSetup: 'initialSetup',
          fen: 'fen',
          tcn: 'tcn',
          rules: 'rules',
          whiteAccuracy: 'whiteAccuracy',
          whiteRating: 'whiteRating',
          whiteResult: 'whiteResult',
          whiteUsername: 'whiteUsername',
          whiteKing: 'whiteKing',
          whiteQueen: 'whiteQueen',
          whiteRook: 'whiteRook',
          whiteBishop: 'whiteBishop',
          whiteKnight: 'whiteKnight',
          whitePawn: 'whitePawn',
          whiteCastling: 'whiteCastling',
          blackAccuracy: 'blackAccuracy',
          blackRating: 'blackRating',
          blackResult: 'blackResult',
          blackUsername: 'blackUsername',
          blackKing: 'blackKing',
          blackQueen: 'blackQueen',
          blackRook: 'blackRook',
          blackBishop: 'blackBishop',
          blackKnight: 'blackKnight',
          blackPawn: 'blackPawn',
          blackCastling: 'blackCastling',
          opening: 'opening',
          openingName: 'openingName',
          endPhrase: 'endPhrase',
          termination: 'termination',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.OpeningScalarFieldEnum = {
          eco: 'eco',
          name: 'name',
          fen: 'fen',
          pgn: 'pgn',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.CountryScalarFieldEnum = {
          cca2: 'cca2',
          cca3: 'cca3',
          name: 'name',
          common: 'common',
          official: 'official',
          flag: 'flag',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }),
        (t.Prisma.SortOrder = { asc: 'asc', desc: 'desc' }),
        (t.Prisma.NullableJsonNullValueInput = {
          DbNull: l.DbNull,
          JsonNull: l.JsonNull,
        }),
        (t.Prisma.QueryMode = {
          default: 'default',
          insensitive: 'insensitive',
        }),
        (t.Prisma.JsonNullValueFilter = {
          DbNull: l.DbNull,
          JsonNull: l.JsonNull,
          AnyNull: l.AnyNull,
        }),
        (t.Prisma.NullsOrder = { first: 'first', last: 'last' }),
        (t.Title = t.$Enums.Title =
          {
            GM: 'GM',
            IM: 'IM',
            FM: 'FM',
            CM: 'CM',
            NM: 'NM',
            WGM: 'WGM',
            WIM: 'WIM',
            WFM: 'WFM',
            WCM: 'WCM',
            WNM: 'WNM',
            AGM: 'AGM',
            AIM: 'AIM',
            AFM: 'AFM',
            ACM: 'ACM',
          }),
        (t.TimeClass = t.$Enums.TimeClass =
          {
            daily: 'daily',
            classical: 'classical',
            rapid: 'rapid',
            blitz: 'blitz',
            bullet: 'bullet',
          }),
        (t.Variant = t.$Enums.Variant =
          {
            bughouse: 'bughouse',
            chess: 'chess',
            chess960: 'chess960',
            crazyhouse: 'crazyhouse',
            kingofthehill: 'kingofthehill',
            oddschess: 'oddschess',
            threecheck: 'threecheck',
          }),
        (t.Result = t.$Enums.Result =
          {
            win: 'win',
            fiftymove: 'fiftymove',
            agreed: 'agreed',
            insufficient: 'insufficient',
            repetition: 'repetition',
            stalemate: 'stalemate',
            timevsinsufficient: 'timevsinsufficient',
            checkmated: 'checkmated',
            resigned: 'resigned',
            timeout: 'timeout',
            abandoned: 'abandoned',
            bughousepartnerlose: 'bughousepartnerlose',
            threecheck: 'threecheck',
            kingofthehill: 'kingofthehill',
          }),
        (t.Phrase = t.$Enums.Phrase =
          { opening: 'opening', middlegame: 'middlegame', endgame: 'endgame' }),
        (t.Prisma.ModelName = {
          Word: 'Word',
          Player: 'Player',
          Game: 'Game',
          Opening: 'Opening',
          Country: 'Country',
        });
      class c {
        constructor() {
          return new Proxy(this, {
            get(e, t) {
              let r = o();
              throw Error(
                (r.isEdge
                  ? `PrismaClient is not configured to run in ${r.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`
                  : 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' +
                    r.prettyName +
                    '`).') +
                  `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`
              );
            },
          });
        }
      }
      (t.PrismaClient = c), Object.assign(t, l);
    },
    4233: (e, t, r) => {
      let n = r(1395);
      e.exports = n;
    },
    8401: (e) => {
      'use strict';
      var t = Object.defineProperty,
        r = Object.getOwnPropertyDescriptor,
        n = Object.getOwnPropertyNames,
        i = Object.prototype.hasOwnProperty,
        s = (e, r) => {
          for (var n in r) t(e, n, { get: r[n], enumerable: !0 });
        },
        a = {};
      s(a, {
        Decimal: () => e0,
        Public: () => o,
        getRuntime: () => _,
        makeStrictEnum: () => v,
        objectEnumValues: () => y,
      }),
        (e.exports = ((e, s, a, o) => {
          if ((s && 'object' == typeof s) || 'function' == typeof s)
            for (let u of n(s))
              i.call(e, u) ||
                u === a ||
                t(e, u, {
                  get: () => s[u],
                  enumerable: !(o = r(s, u)) || o.enumerable,
                });
          return e;
        })(t({}, '__esModule', { value: !0 }), a));
      var o = {};
      function u(...e) {
        return (e) => e;
      }
      s(o, { validator: () => u });
      var l = Symbol(),
        c = new WeakMap(),
        d = class {
          constructor(e) {
            e === l
              ? c.set(this, 'Prisma.'.concat(this._getName()))
              : c.set(
                  this,
                  'new Prisma.'
                    .concat(this._getNamespace(), '.')
                    .concat(this._getName(), '()')
                );
          }
          _getName() {
            return this.constructor.name;
          }
          toString() {
            return c.get(this);
          }
        },
        h = class extends d {
          _getNamespace() {
            return 'NullTypes';
          }
        },
        f = class extends h {};
      g(f, 'DbNull');
      var p = class extends h {};
      g(p, 'JsonNull');
      var m = class extends h {};
      g(m, 'AnyNull');
      var y = {
        classes: { DbNull: f, JsonNull: p, AnyNull: m },
        instances: { DbNull: new f(l), JsonNull: new p(l), AnyNull: new m(l) },
      };
      function g(e, t) {
        Object.defineProperty(e, 'name', { value: t, configurable: !0 });
      }
      var b = new Set([
        'toJSON',
        '$$typeof',
        'asymmetricMatch',
        Symbol.iterator,
        Symbol.toStringTag,
        Symbol.isConcatSpreadable,
        Symbol.toPrimitive,
      ]);
      function v(e) {
        return new Proxy(e, {
          get(e, t) {
            if (t in e) return e[t];
            if (!b.has(t))
              throw TypeError('Invalid enum value: '.concat(String(t)));
          },
        });
      }
      var w = {
        node: 'Node.js',
        workerd: 'Cloudflare Workers',
        deno: 'Deno and Deno Deploy',
        netlify: 'Netlify Edge Functions',
        'edge-light':
          'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)',
      };
      function _() {
        var e, t, r;
        let n =
          'object' == typeof Netlify
            ? 'netlify'
            : 'string' == typeof EdgeRuntime
              ? 'edge-light'
              : (null == (e = globalThis.navigator) ? void 0 : e.userAgent) ===
                  'Cloudflare-Workers'
                ? 'workerd'
                : globalThis.Deno
                  ? 'deno'
                  : globalThis.__lagon__
                    ? 'lagon'
                    : (null ==
                        (r =
                          null == (t = globalThis.process) ? void 0 : t.release)
                          ? void 0
                          : r.name) === 'node'
                      ? 'node'
                      : globalThis.Bun
                        ? 'bun'
                        : globalThis.fastly
                          ? 'fastly'
                          : 'unknown';
        return {
          id: n,
          prettyName: w[n] || n,
          isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(n),
        };
      }
      var E,
        S,
        R = '0123456789abcdef',
        O =
          '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
        A =
          '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
        x = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        C = !0,
        N = '[DecimalError] ',
        k = N + 'Invalid argument: ',
        T = N + 'Precision limit exceeded',
        P = N + 'crypto unavailable',
        D = '[object Decimal]',
        I = Math.floor,
        j = Math.pow,
        M = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        U = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        L = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        q = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        F = O.length - 1,
        B = A.length - 1,
        Q = { toStringTag: D };
      function z(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          s = '',
          a = e[0];
        if (i > 0) {
          for (s += a, t = 1; t < i; t++)
            (r = 7 - (n = e[t] + '').length) && (s += ee(r)), (s += n);
          (r = 7 - (n = (a = e[t]) + '').length) && (s += ee(r));
        } else if (0 === a) return '0';
        for (; a % 10 == 0; ) a /= 10;
        return s + a;
      }
      function Z(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(k + e);
      }
      function $(e, t, r, n) {
        var i, s, a, o;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (s = j(10, 7 - t)),
          (o = e[i] % s | 0),
          null == n
            ? t < 3
              ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                (a =
                  (r < 4 && 99999 == o) ||
                  (r > 3 && 49999 == o) ||
                  5e4 == o ||
                  0 == o))
              : (a =
                  (((r < 4 && o + 1 == s) || (r > 3 && o + 1 == s / 2)) &&
                    ((e[i + 1] / s / 100) | 0) == j(10, t - 2) - 1) ||
                  ((o == s / 2 || 0 == o) && ((e[i + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t
                  ? (o = (o / 1e3) | 0)
                  : 1 == t
                    ? (o = (o / 100) | 0)
                    : 2 == t && (o = (o / 10) | 0),
                (a = ((n || r < 4) && 9999 == o) || (!n && r > 3 && 4999 == o)))
              : (a =
                  (((n || r < 4) && o + 1 == s) ||
                    (!n && r > 3 && o + 1 == s / 2)) &&
                  ((e[i + 1] / s / 1e3) | 0) == j(10, t - 3) - 1),
          a
        );
      }
      function H(e, t, r) {
        for (var n, i, s = [0], a = 0, o = e.length; a < o; ) {
          for (i = s.length; i--; ) s[i] *= t;
          for (s[0] += R.indexOf(e.charAt(a++)), n = 0; n < s.length; n++)
            s[n] > r - 1 &&
              (void 0 === s[n + 1] && (s[n + 1] = 0),
              (s[n + 1] += (s[n] / r) | 0),
              (s[n] %= r));
        }
        return s.reverse();
      }
      (Q.absoluteValue = Q.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), V(e);
        }),
        (Q.ceil = function () {
          return V(new this.constructor(this), this.e + 1, 2);
        }),
        (Q.clampedTo = Q.clamp =
          function (e, t) {
            var r = this.constructor;
            if (((e = new r(e)), (t = new r(t)), !e.s || !t.s))
              return new r(NaN);
            if (e.gt(t)) throw Error(k + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new r(this);
          }),
        (Q.comparedTo = Q.cmp =
          function (e) {
            var t,
              r,
              n,
              i,
              s = this.d,
              a = (e = new this.constructor(e)).d,
              o = this.s,
              u = e.s;
            if (!s || !a)
              return o && u
                ? o !== u
                  ? o
                  : s === a
                    ? 0
                    : !s ^ (o < 0)
                      ? 1
                      : -1
                : NaN;
            if (!s[0] || !a[0]) return s[0] ? o : a[0] ? -u : 0;
            if (o !== u) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (
              n = s.length, i = a.length, t = 0, r = n < i ? n : i;
              t < r;
              ++t
            )
              if (s[t] !== a[t]) return (s[t] > a[t]) ^ (o < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (o < 0) ? 1 : -1;
          }),
        (Q.cosine = Q.cos =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.d
              ? r.d[0]
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r, n, i;
                    if (t.isZero()) return t;
                    (n = t.d.length) < 32
                      ? (i = (1 / el(4, (r = Math.ceil(n / 3)))).toString())
                      : ((r = 16), (i = '2.3283064365386962890625e-10')),
                      (e.precision += r),
                      (t = eu(e, 1, t.times(i), new e(1)));
                    for (var s = r; s--; ) {
                      var a = t.times(t);
                      t = a.times(a).minus(a).times(8).plus(1);
                    }
                    return (e.precision -= r), t;
                  })(n, ec(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  V(2 == S || 3 == S ? r.neg() : r, e, t, !0))
                : new n(1)
              : new n(NaN);
          }),
        (Q.cubeRoot = Q.cbrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l,
              c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
              C = !1,
                (s = this.s * j(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0
                  ? (n = new c(s.toString()))
                  : ((r = z(this.d)),
                    (s = ((e = this.e) - r.length + 1) % 3) &&
                      (r += 1 == s || -2 == s ? '0' : '00'),
                    (s = j(r, 1 / 3)),
                    (e = I((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((n = new c(
                      (r =
                        s == 1 / 0
                          ? '5e' + e
                          : (r = s.toExponential()).slice(
                              0,
                              r.indexOf('e') + 1
                            ) + e)
                    )).s = this.s)),
                a = (e = c.precision) + 3;
              ;

            )
              if (
                ((n = W(
                  (l = (u = (o = n).times(o).times(o)).plus(this))
                    .plus(this)
                    .times(o),
                  l.plus(u),
                  a + 2,
                  1
                )),
                z(o.d).slice(0, a) === (r = z(n.d)).slice(0, a))
              ) {
                if (
                  '9999' != (r = r.slice(a - 3, a + 1)) &&
                  (i || '4999' != r)
                ) {
                  (+r && (+r.slice(1) || '5' != r.charAt(0))) ||
                    (V(n, e + 1, 1), (t = !n.times(n).times(n).eq(this)));
                  break;
                }
                if (!i && (V(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                  n = o;
                  break;
                }
                (a += 4), (i = 1);
              }
            return (C = !0), V(n, e, c.rounding, t);
          }),
        (Q.decimalPlaces = Q.dp =
          function () {
            var e,
              t = this.d,
              r = NaN;
            if (t) {
              if (((r = ((e = t.length - 1) - I(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) r--;
              r < 0 && (r = 0);
            }
            return r;
          }),
        (Q.dividedBy = Q.div =
          function (e) {
            return W(this, new this.constructor(e));
          }),
        (Q.dividedToIntegerBy = Q.divToInt =
          function (e) {
            var t = this.constructor;
            return V(W(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (Q.equals = Q.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (Q.floor = function () {
          return V(new this.constructor(this), this.e + 1, 3);
        }),
        (Q.greaterThan = Q.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (Q.greaterThanOrEqualTo = Q.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (Q.hyperbolicCosine = Q.cosh =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s = this,
              a = s.constructor,
              o = new a(1);
            if (!s.isFinite()) return new a(s.s ? 1 / 0 : NaN);
            if (s.isZero()) return o;
            (r = a.precision),
              (n = a.rounding),
              (a.precision = r + Math.max(s.e, s.sd()) + 4),
              (a.rounding = 1),
              (i = s.d.length) < 32
                ? (t = (1 / el(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = '2.3283064365386962890625e-10')),
              (s = eu(a, 1, s.times(t), new a(1), !0));
            for (var u, l = e, c = new a(8); l--; )
              (u = s.times(s)), (s = o.minus(u.times(c.minus(u.times(c)))));
            return V(s, (a.precision = r), (a.rounding = n), !0);
          }),
        (Q.hyperbolicSine = Q.sinh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            if (!i.isFinite() || i.isZero()) return new s(i);
            if (
              ((t = s.precision),
              (r = s.rounding),
              (s.precision = t + Math.max(i.e, i.sd()) + 4),
              (s.rounding = 1),
              (n = i.d.length) < 3)
            )
              i = eu(s, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e),
                (i = eu(s, 2, (i = i.times(1 / el(5, e))), i, !0));
              for (var a, o = new s(5), u = new s(16), l = new s(20); e--; )
                (a = i.times(i)),
                  (i = i.times(o.plus(a.times(u.times(a).plus(l)))));
            }
            return (s.precision = t), (s.rounding = r), V(i, t, r, !0);
          }),
        (Q.hyperbolicTangent = Q.tanh =
          function () {
            var e,
              t,
              r = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new r(this)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 7),
                  (r.rounding = 1),
                  W(
                    this.sinh(),
                    this.cosh(),
                    (r.precision = e),
                    (r.rounding = t)
                  ))
              : new r(this.s);
          }),
        (Q.inverseCosine = Q.acos =
          function () {
            var e,
              t = this,
              r = t.constructor,
              n = t.abs().cmp(1),
              i = r.precision,
              s = r.rounding;
            return -1 !== n
              ? 0 === n
                ? t.isNeg()
                  ? Y(r, i, s)
                  : new r(0)
                : new r(NaN)
              : t.isZero()
                ? Y(r, i + 4, s).times(0.5)
                : ((r.precision = i + 6),
                  (r.rounding = 1),
                  (t = t.asin()),
                  (e = Y(r, i + 4, s).times(0.5)),
                  (r.precision = i),
                  (r.rounding = s),
                  e.minus(t));
          }),
        (Q.inverseHyperbolicCosine = Q.acosh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.lte(1)
              ? new n(r.eq(1) ? 0 : NaN)
              : r.isFinite()
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
                  (n.rounding = 1),
                  (C = !1),
                  (r = r.times(r).minus(1).sqrt().plus(r)),
                  (C = !0),
                  (n.precision = e),
                  (n.rounding = t),
                  r.ln())
                : new n(r);
          }),
        (Q.inverseHyperbolicSine = Q.asinh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return !r.isFinite() || r.isZero()
              ? new n(r)
              : ((e = n.precision),
                (t = n.rounding),
                (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
                (n.rounding = 1),
                (C = !1),
                (r = r.times(r).plus(1).sqrt().plus(r)),
                (C = !0),
                (n.precision = e),
                (n.rounding = t),
                r.ln());
          }),
        (Q.inverseHyperbolicTangent = Q.atanh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                : ((e = s.precision),
                  (t = s.rounding),
                  Math.max((n = i.sd()), e) < -(2 * i.e) - 1
                    ? V(new s(i), e, t, !0)
                    : ((s.precision = r = n - i.e),
                      (i = W(i.plus(1), new s(1).minus(i), r + e, 1)),
                      (s.precision = e + 4),
                      (s.rounding = 1),
                      (i = i.ln()),
                      (s.precision = e),
                      (s.rounding = t),
                      i.times(0.5)))
              : new s(NaN);
          }),
        (Q.inverseSine = Q.asin =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            return i.isZero()
              ? new s(i)
              : ((t = i.abs().cmp(1)),
                (r = s.precision),
                (n = s.rounding),
                -1 !== t
                  ? 0 === t
                    ? (((e = Y(s, r + 4, n).times(0.5)).s = i.s), e)
                    : new s(NaN)
                  : ((s.precision = r + 6),
                    (s.rounding = 1),
                    (i = i
                      .div(new s(1).minus(i.times(i)).sqrt().plus(1))
                      .atan()),
                    (s.precision = r),
                    (s.rounding = n),
                    i.times(2)));
          }),
        (Q.inverseTangent = Q.atan =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l = this,
              c = l.constructor,
              d = c.precision,
              h = c.rounding;
            if (l.isFinite()) {
              if (l.isZero()) return new c(l);
              if (l.abs().eq(1) && d + 4 <= B)
                return ((a = Y(c, d + 4, h).times(0.25)).s = l.s), a;
            } else {
              if (!l.s) return new c(NaN);
              if (d + 4 <= B)
                return ((a = Y(c, d + 4, h).times(0.5)).s = l.s), a;
            }
            for (
              c.precision = o = d + 10,
                c.rounding = 1,
                e = r = Math.min(28, (o / 7 + 2) | 0);
              e;
              --e
            )
              l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (
              C = !1,
                t = Math.ceil(o / 7),
                n = 1,
                u = l.times(l),
                a = new c(l),
                i = l;
              -1 !== e;

            )
              if (
                ((i = i.times(u)),
                (s = a.minus(i.div((n += 2)))),
                (i = i.times(u)),
                void 0 !== (a = s.plus(i.div((n += 2)))).d[t])
              )
                for (e = t; a.d[e] === s.d[e] && e--; );
            return (
              r && (a = a.times(2 << (r - 1))),
              (C = !0),
              V(a, (c.precision = d), (c.rounding = h), !0)
            );
          }),
        (Q.isFinite = function () {
          return !!this.d;
        }),
        (Q.isInteger = Q.isInt =
          function () {
            return !!this.d && I(this.e / 7) > this.d.length - 2;
          }),
        (Q.isNaN = function () {
          return !this.s;
        }),
        (Q.isNegative = Q.isNeg =
          function () {
            return this.s < 0;
          }),
        (Q.isPositive = Q.isPos =
          function () {
            return this.s > 0;
          }),
        (Q.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (Q.lessThan = Q.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (Q.lessThanOrEqualTo = Q.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (Q.logarithm = Q.log =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u = this.constructor,
              l = u.precision,
              c = u.rounding;
            if (null == e) (e = new u(10)), (t = !0);
            else {
              if (((r = (e = new u(e)).d), e.s < 0 || !r || !r[0] || e.eq(1)))
                return new u(NaN);
              t = e.eq(10);
            }
            if (((r = this.d), this.s < 0 || !r || !r[0] || this.eq(1)))
              return new u(
                r && !r[0] ? -1 / 0 : 1 != this.s ? NaN : r ? 0 : 1 / 0
              );
            if (t) {
              if (r.length > 1) i = !0;
              else {
                for (n = r[0]; n % 10 == 0; ) n /= 10;
                i = 1 !== n;
              }
            }
            if (
              ((C = !1),
              $(
                (o = W(
                  es(this, (a = l + 5)),
                  t ? J(u, a + 10) : es(e, a),
                  a,
                  1
                )).d,
                (n = l),
                c
              ))
            )
              do
                if (
                  ((a += 10),
                  (o = W(es(this, a), t ? J(u, a + 10) : es(e, a), a, 1)),
                  !i)
                ) {
                  +z(o.d).slice(n + 1, n + 15) + 1 == 1e14 &&
                    (o = V(o, l + 1, 0));
                  break;
                }
              while ($(o.d, (n += 10), c));
            return (C = !0), V(o, l, c);
          }),
        (Q.minus = Q.sub =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l,
              c,
              d,
              h,
              f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new f(e.d || this.s !== e.s ? this : NaN))
                  : (e = new f(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((l = this.d),
              (h = e.d),
              (o = f.precision),
              (u = f.rounding),
              !l[0] || !h[0])
            ) {
              if (h[0]) e.s = -e.s;
              else {
                if (!l[0]) return new f(3 === u ? -0 : 0);
                e = new f(this);
              }
              return C ? V(e, o, u) : e;
            }
            if (
              ((r = I(e.e / 7)),
              (c = I(this.e / 7)),
              (l = l.slice()),
              (s = c - r))
            ) {
              for (
                (d = s < 0)
                  ? ((t = l), (s = -s), (a = h.length))
                  : ((t = h), (r = c), (a = l.length)),
                  s > (n = Math.max(Math.ceil(o / 7), a) + 2) &&
                    ((s = n), (t.length = 1)),
                  t.reverse(),
                  n = s;
                n--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (d = (n = l.length) < (a = h.length)) && (a = n), n = 0;
                n < a;
                n++
              )
                if (l[n] != h[n]) {
                  d = l[n] < h[n];
                  break;
                }
              s = 0;
            }
            for (
              d && ((t = l), (l = h), (h = t), (e.s = -e.s)),
                a = l.length,
                n = h.length - a;
              n > 0;
              --n
            )
              l[a++] = 0;
            for (n = h.length; n > s; ) {
              if (l[--n] < h[n]) {
                for (i = n; i && 0 === l[--i]; ) l[i] = 1e7 - 1;
                --l[i], (l[n] += 1e7);
              }
              l[n] -= h[n];
            }
            for (; 0 === l[--a]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --r;
            return l[0]
              ? ((e.d = l), (e.e = G(l, r)), C ? V(e, o, u) : e)
              : new f(3 === u ? -0 : 0);
          }),
        (Q.modulo = Q.mod =
          function (e) {
            var t,
              r = this.constructor;
            return (
              (e = new r(e)),
              this.d && e.s && (!e.d || e.d[0])
                ? e.d && (!this.d || this.d[0])
                  ? ((C = !1),
                    9 == r.modulo
                      ? ((t = W(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                      : (t = W(this, e, 0, r.modulo, 1)),
                    (t = t.times(e)),
                    (C = !0),
                    this.minus(t))
                  : V(new r(this), r.precision, r.rounding)
                : new r(NaN)
            );
          }),
        (Q.naturalExponential = Q.exp =
          function () {
            return ei(this);
          }),
        (Q.naturalLogarithm = Q.ln =
          function () {
            return es(this);
          }),
        (Q.negated = Q.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), V(e);
          }),
        (Q.plus = Q.add =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l,
              c,
              d = this.constructor;
            if (((e = new d(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new d(e.d || this.s === e.s ? this : NaN))
                  : (e = new d(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((l = this.d),
              (c = e.d),
              (o = d.precision),
              (u = d.rounding),
              !l[0] || !c[0])
            )
              return c[0] || (e = new d(this)), C ? V(e, o, u) : e;
            if (
              ((s = I(this.e / 7)),
              (n = I(e.e / 7)),
              (l = l.slice()),
              (i = s - n))
            ) {
              for (
                i < 0
                  ? ((r = l), (i = -i), (a = c.length))
                  : ((r = c), (n = s), (a = l.length)),
                  i > (a = (s = Math.ceil(o / 7)) > a ? s + 1 : a + 1) &&
                    ((i = a), (r.length = 1)),
                  r.reverse();
                i--;

              )
                r.push(0);
              r.reverse();
            }
            for (
              (a = l.length) - (i = c.length) < 0 &&
                ((i = a), (r = c), (c = l), (l = r)),
                t = 0;
              i;

            )
              (t = ((l[--i] = l[i] + c[i] + t) / 1e7) | 0), (l[i] %= 1e7);
            for (t && (l.unshift(t), ++n), a = l.length; 0 == l[--a]; ) l.pop();
            return (e.d = l), (e.e = G(l, n)), C ? V(e, o, u) : e;
          }),
        (Q.precision = Q.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(k + e);
            return (
              this.d
                ? ((t = X(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = NaN),
              t
            );
          }),
        (Q.round = function () {
          var e = this.constructor;
          return V(new e(this), this.e + 1, e.rounding);
        }),
        (Q.sine = Q.sin =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r,
                      n = t.d.length;
                    if (n < 3) return t.isZero() ? t : eu(e, 2, t, t);
                    (r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r),
                      (t = eu(e, 2, (t = t.times(1 / el(5, r))), t));
                    for (
                      var i, s = new e(5), a = new e(16), o = new e(20);
                      r--;

                    )
                      (i = t.times(t)),
                        (t = t.times(s.plus(i.times(a.times(i).minus(o)))));
                    return t;
                  })(n, ec(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  V(S > 2 ? r.neg() : r, e, t, !0))
              : new n(NaN);
          }),
        (Q.squareRoot = Q.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              a = this.d,
              o = this.e,
              u = this.s,
              l = this.constructor;
            if (1 !== u || !a || !a[0])
              return new l(
                !u || (u < 0 && (!a || a[0])) ? NaN : a ? this : 1 / 0
              );
            for (
              C = !1,
                0 == (u = Math.sqrt(+this)) || u == 1 / 0
                  ? (((t = z(a)).length + o) % 2 == 0 && (t += '0'),
                    (u = Math.sqrt(t)),
                    (o = I((o + 1) / 2) - (o < 0 || o % 2)),
                    (n = new l(
                      (t =
                        u == 1 / 0
                          ? '5e' + o
                          : (t = u.toExponential()).slice(
                              0,
                              t.indexOf('e') + 1
                            ) + o)
                    )))
                  : (n = new l(u.toString())),
                r = (o = l.precision) + 3;
              ;

            )
              if (
                ((n = (s = n).plus(W(this, s, r + 2, 1)).times(0.5)),
                z(s.d).slice(0, r) === (t = z(n.d)).slice(0, r))
              ) {
                if (
                  '9999' != (t = t.slice(r - 3, r + 1)) &&
                  (i || '4999' != t)
                ) {
                  (+t && (+t.slice(1) || '5' != t.charAt(0))) ||
                    (V(n, o + 1, 1), (e = !n.times(n).eq(this)));
                  break;
                }
                if (!i && (V(s, o + 1, 0), s.times(s).eq(this))) {
                  n = s;
                  break;
                }
                (r += 4), (i = 1);
              }
            return (C = !0), V(n, o, l.rounding, e);
          }),
        (Q.tangent = Q.tan =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 10),
                  (n.rounding = 1),
                  ((r = r.sin()).s = 1),
                  (r = W(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
                  (n.precision = e),
                  (n.rounding = t),
                  V(2 == S || 4 == S ? r.neg() : r, e, t, !0))
              : new n(NaN);
          }),
        (Q.times = Q.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o,
              u,
              l,
              c = this.constructor,
              d = this.d,
              h = (e = new c(e)).d;
            if (((e.s *= this.s), !d || !d[0] || !h || !h[0]))
              return new c(
                e.s && (!d || d[0] || h) && (!h || h[0] || d)
                  ? d && h
                    ? 0 * e.s
                    : e.s / 0
                  : NaN
              );
            for (
              r = I(this.e / 7) + I(e.e / 7),
                (u = d.length) < (l = h.length) &&
                  ((s = d), (d = h), (h = s), (a = u), (u = l), (l = a)),
                s = [],
                n = a = u + l;
              n--;

            )
              s.push(0);
            for (n = l; --n >= 0; ) {
              for (t = 0, i = u + n; i > n; )
                (o = s[i] + h[n] * d[i - n - 1] + t),
                  (s[i--] = o % 1e7 | 0),
                  (t = (o / 1e7) | 0);
              s[i] = (s[i] + t) % 1e7 | 0;
            }
            for (; !s[--a]; ) s.pop();
            return (
              t ? ++r : s.shift(),
              (e.d = s),
              (e.e = G(s, r)),
              C ? V(e, c.precision, c.rounding) : e
            );
          }),
        (Q.toBinary = function (e, t) {
          return ed(this, 2, e, t);
        }),
        (Q.toDecimalPlaces = Q.toDP =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return (
              (r = new n(r)),
              void 0 === e
                ? r
                : (Z(e, 0, 1e9),
                  void 0 === t ? (t = n.rounding) : Z(t, 0, 8),
                  V(r, e + r.e + 1, t))
            );
          }),
        (Q.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = K(n, !0))
              : (Z(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : Z(t, 0, 8),
                (r = K((n = V(new i(n), e + 1, t)), !0, e + 1))),
            n.isNeg() && !n.isZero() ? '-' + r : r
          );
        }),
        (Q.toFixed = function (e, t) {
          var r,
            n,
            i = this.constructor;
          return (
            void 0 === e
              ? (r = K(this))
              : (Z(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : Z(t, 0, 8),
                (r = K(
                  (n = V(new i(this), e + this.e + 1, t)),
                  !1,
                  e + n.e + 1
                ))),
            this.isNeg() && !this.isZero() ? '-' + r : r
          );
        }),
        (Q.toFraction = function (e) {
          var t,
            r,
            n,
            i,
            s,
            a,
            o,
            u,
            l,
            c,
            d,
            h,
            f = this.d,
            p = this.constructor;
          if (!f) return new p(this);
          if (
            ((l = r = new p(1)),
            (n = u = new p(0)),
            (a = (s = (t = new p(n)).e = X(f) - this.e - 1) % 7),
            (t.d[0] = j(10, a < 0 ? 7 + a : a)),
            null == e)
          )
            e = s > 0 ? t : l;
          else {
            if (!(o = new p(e)).isInt() || o.lt(l)) throw Error(k + o);
            e = o.gt(t) ? (s > 0 ? t : l) : o;
          }
          for (
            C = !1,
              o = new p(z(f)),
              c = p.precision,
              p.precision = s = 14 * f.length;
            (d = W(o, t, 0, 1, 1)), 1 != (i = r.plus(d.times(n))).cmp(e);

          )
            (r = n),
              (n = i),
              (i = l),
              (l = u.plus(d.times(i))),
              (u = i),
              (i = t),
              (t = o.minus(d.times(i))),
              (o = i);
          return (
            (i = W(e.minus(r), n, 0, 1, 1)),
            (u = u.plus(i.times(l))),
            (r = r.plus(i.times(n))),
            (u.s = l.s = this.s),
            (h =
              1 >
              W(l, n, s, 1)
                .minus(this)
                .abs()
                .cmp(W(u, r, s, 1).minus(this).abs())
                ? [l, n]
                : [u, r]),
            (p.precision = c),
            (C = !0),
            h
          );
        }),
        (Q.toHexadecimal = Q.toHex =
          function (e, t) {
            return ed(this, 16, e, t);
          }),
        (Q.toNearest = function (e, t) {
          var r = this,
            n = r.constructor;
          if (((r = new n(r)), null == e)) {
            if (!r.d) return r;
            (e = new n(1)), (t = n.rounding);
          } else {
            if (
              ((e = new n(e)),
              void 0 === t ? (t = n.rounding) : Z(t, 0, 8),
              !r.d)
            )
              return e.s ? r : e;
            if (!e.d) return e.s && (e.s = r.s), e;
          }
          return (
            e.d[0]
              ? ((C = !1), (r = W(r, e, 0, t, 1).times(e)), (C = !0), V(r))
              : ((e.s = r.s), (r = e)),
            r
          );
        }),
        (Q.toNumber = function () {
          return +this;
        }),
        (Q.toOctal = function (e, t) {
          return ed(this, 8, e, t);
        }),
        (Q.toPower = Q.pow =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o = this,
              u = o.constructor,
              l = +(e = new u(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new u(j(+o, l));
            if ((o = new u(o)).eq(1)) return o;
            if (((n = u.precision), (s = u.rounding), e.eq(1)))
              return V(o, n, s);
            if (
              (t = I(e.e / 7)) >= e.d.length - 1 &&
              (r = l < 0 ? -l : l) <= 0x1fffffffffffff
            )
              return (
                (i = et(u, o, r, n)), e.s < 0 ? new u(1).div(i) : V(i, n, s)
              );
            if ((a = o.s) < 0) {
              if (t < e.d.length - 1) return new u(NaN);
              if (
                (1 & e.d[t] || (a = 1),
                0 == o.e && 1 == o.d[0] && 1 == o.d.length)
              )
                return (o.s = a), o;
            }
            return (t =
              0 != (r = j(+o, l)) && isFinite(r)
                ? new u(r + '').e
                : I(l * (Math.log('0.' + z(o.d)) / Math.LN10 + o.e + 1))) >
              u.maxE + 1 || t < u.minE - 1
              ? new u(t > 0 ? a / 0 : 0)
              : ((C = !1),
                (u.rounding = o.s = 1),
                (r = Math.min(12, (t + '').length)),
                (i = ei(e.times(es(o, n + r)), n)).d &&
                  $((i = V(i, n + 5, 1)).d, n, s) &&
                  ((t = n + 10),
                  +z((i = V(ei(e.times(es(o, t + r)), t), t + 5, 1)).d).slice(
                    n + 1,
                    n + 15
                  ) +
                    1 ==
                    1e14 && (i = V(i, n + 1, 0))),
                (i.s = a),
                (C = !0),
                (u.rounding = s),
                V(i, n, s));
          }),
        (Q.toPrecision = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = K(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
              : (Z(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : Z(t, 0, 8),
                (r = K(
                  (n = V(new i(n), e, t)),
                  e <= n.e || n.e <= i.toExpNeg,
                  e
                ))),
            n.isNeg() && !n.isZero() ? '-' + r : r
          );
        }),
        (Q.toSignificantDigits = Q.toSD =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (Z(e, 1, 1e9), void 0 === t ? (t = r.rounding) : Z(t, 0, 8)),
              V(new r(this), e, t)
            );
          }),
        (Q.toString = function () {
          var e = this.constructor,
            t = K(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? '-' + t : t;
        }),
        (Q.truncated = Q.trunc =
          function () {
            return V(new this.constructor(this), this.e + 1, 1);
          }),
        (Q.valueOf = Q.toJSON =
          function () {
            var e = this.constructor,
              t = K(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? '-' + t : t;
          });
      var W = (function () {
        function e(e, t, r) {
          var n,
            i = 0,
            s = e.length;
          for (e = e.slice(); s--; )
            (n = e[s] * t + i), (e[s] = n % r | 0), (i = (n / r) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, r, n) {
          var i, s;
          if (r != n) s = r > n ? 1 : -1;
          else
            for (i = s = 0; i < r; i++)
              if (e[i] != t[i]) {
                s = e[i] > t[i] ? 1 : -1;
                break;
              }
          return s;
        }
        function r(e, t, r, n) {
          for (var i = 0; r--; )
            (e[r] -= i),
              (i = e[r] < t[r] ? 1 : 0),
              (e[r] = i * n + e[r] - t[r]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (n, i, s, a, o, u) {
          var l,
            c,
            d,
            h,
            f,
            p,
            m,
            y,
            g,
            b,
            v,
            w,
            _,
            S,
            R,
            O,
            A,
            x,
            C,
            N,
            k = n.constructor,
            T = n.s == i.s ? 1 : -1,
            P = n.d,
            D = i.d;
          if (!P || !P[0] || !D || !D[0])
            return new k(
              n.s && i.s && (P ? !D || P[0] != D[0] : D)
                ? (P && 0 == P[0]) || !D
                  ? 0 * T
                  : T / 0
                : NaN
            );
          for (
            u
              ? ((f = 1), (c = n.e - i.e))
              : ((u = 1e7), (f = 7), (c = I(n.e / f) - I(i.e / f))),
              C = D.length,
              A = P.length,
              b = (g = new k(T)).d = [],
              d = 0;
            D[d] == (P[d] || 0);
            d++
          );
          if (
            (D[d] > (P[d] || 0) && c--,
            null == s
              ? ((S = s = k.precision), (a = k.rounding))
              : (S = o ? s + (n.e - i.e) + 1 : s),
            S < 0)
          )
            b.push(1), (p = !0);
          else {
            if (((S = (S / f + 2) | 0), (d = 0), 1 == C)) {
              for (h = 0, D = D[0], S++; (d < A || h) && S--; d++)
                (R = h * u + (P[d] || 0)),
                  (b[d] = (R / D) | 0),
                  (h = R % D | 0);
              p = h || d < A;
            } else {
              for (
                (h = (u / (D[0] + 1)) | 0) > 1 &&
                  ((D = e(D, h, u)),
                  (P = e(P, h, u)),
                  (C = D.length),
                  (A = P.length)),
                  O = C,
                  w = (v = P.slice(0, C)).length;
                w < C;

              )
                v[w++] = 0;
              (N = D.slice()).unshift(0), (x = D[0]), D[1] >= u / 2 && ++x;
              do
                (h = 0),
                  (l = t(D, v, C, w)) < 0
                    ? ((_ = v[0]),
                      C != w && (_ = _ * u + (v[1] || 0)),
                      (h = (_ / x) | 0) > 1
                        ? (h >= u && (h = u - 1),
                          (y = (m = e(D, h, u)).length),
                          (w = v.length),
                          1 == (l = t(m, v, y, w)) &&
                            (h--, r(m, C < y ? N : D, y, u)))
                        : (0 == h && (l = h = 1), (m = D.slice())),
                      (y = m.length) < w && m.unshift(0),
                      r(v, m, w, u),
                      -1 == l &&
                        ((w = v.length),
                        (l = t(D, v, C, w)) < 1 &&
                          (h++, r(v, C < w ? N : D, w, u))),
                      (w = v.length))
                    : 0 === l && (h++, (v = [0])),
                  (b[d++] = h),
                  l && v[0] ? (v[w++] = P[O] || 0) : ((v = [P[O]]), (w = 1));
              while ((O++ < A || void 0 !== v[0]) && S--);
              p = void 0 !== v[0];
            }
            b[0] || b.shift();
          }
          if (1 == f) (g.e = c), (E = p);
          else {
            for (d = 1, h = b[0]; h >= 10; h /= 10) d++;
            (g.e = d + c * f - 1), V(g, o ? s + g.e + 1 : s, a, p);
          }
          return g;
        };
      })();
      function V(e, t, r, n) {
        var i,
          s,
          a,
          o,
          u,
          l,
          c,
          d,
          h,
          f = e.constructor;
        e: if (null != t) {
          if (!(d = e.d)) return e;
          for (i = 1, o = d[0]; o >= 10; o /= 10) i++;
          if ((s = t - i) < 0)
            (s += 7),
              (a = t),
              (u = ((c = d[(h = 0)]) / j(10, i - a - 1)) % 10 | 0);
          else if ((h = Math.ceil((s + 1) / 7)) >= (o = d.length)) {
            if (n) {
              for (; o++ <= h; ) d.push(0);
              (c = u = 0), (i = 1), (s %= 7), (a = s - 7 + 1);
            } else break e;
          } else {
            for (c = o = d[h], i = 1; o >= 10; o /= 10) i++;
            (s %= 7),
              (u = (a = s - 7 + i) < 0 ? 0 : (c / j(10, i - a - 1)) % 10 | 0);
          }
          if (
            ((n =
              n ||
              t < 0 ||
              void 0 !== d[h + 1] ||
              (a < 0 ? c : c % j(10, i - a - 1))),
            (l =
              r < 4
                ? (u || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : u > 5 ||
                  (5 == u &&
                    (4 == r ||
                      n ||
                      (6 == r &&
                        (s > 0 ? (a > 0 ? c / j(10, i - a) : 0) : d[h - 1]) %
                          10 &
                          1) ||
                      r == (e.s < 0 ? 8 : 7)))),
            t < 1 || !d[0])
          )
            return (
              (d.length = 0),
              l
                ? ((t -= e.e + 1),
                  (d[0] = j(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (d[0] = e.e = 0),
              e
            );
          if (
            (0 == s
              ? ((d.length = h), (o = 1), h--)
              : ((d.length = h + 1),
                (o = j(10, 7 - s)),
                (d[h] = a > 0 ? ((c / j(10, i - a)) % j(10, a) | 0) * o : 0)),
            l)
          )
            for (;;)
              if (0 == h) {
                for (s = 1, a = d[0]; a >= 10; a /= 10) s++;
                for (a = d[0] += o, o = 1; a >= 10; a /= 10) o++;
                s != o && (e.e++, 1e7 == d[0] && (d[0] = 1));
                break;
              } else {
                if (((d[h] += o), 1e7 != d[h])) break;
                (d[h--] = 0), (o = 1);
              }
          for (s = d.length; 0 === d[--s]; ) d.pop();
        }
        return (
          C &&
            (e.e > f.maxE
              ? ((e.d = null), (e.e = NaN))
              : e.e < f.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function K(e, t, r) {
        if (!e.isFinite()) return ea(e);
        var n,
          i = e.e,
          s = z(e.d),
          a = s.length;
        return (
          t
            ? (r && (n = r - a) > 0
                ? (s = s.charAt(0) + '.' + s.slice(1) + ee(n))
                : a > 1 && (s = s.charAt(0) + '.' + s.slice(1)),
              (s = s + (e.e < 0 ? 'e' : 'e+') + e.e))
            : i < 0
              ? ((s = '0.' + ee(-i - 1) + s),
                r && (n = r - a) > 0 && (s += ee(n)))
              : i >= a
                ? ((s += ee(i + 1 - a)),
                  r && (n = r - i - 1) > 0 && (s = s + '.' + ee(n)))
                : ((n = i + 1) < a && (s = s.slice(0, n) + '.' + s.slice(n)),
                  r &&
                    (n = r - a) > 0 &&
                    (i + 1 === a && (s += '.'), (s += ee(n)))),
          s
        );
      }
      function G(e, t) {
        var r = e[0];
        for (t *= 7; r >= 10; r /= 10) t++;
        return t;
      }
      function J(e, t, r) {
        if (t > F) throw ((C = !0), r && (e.precision = r), Error(T));
        return V(new e(O), t, 1, !0);
      }
      function Y(e, t, r) {
        if (t > B) throw Error(T);
        return V(new e(A), t, r, !0);
      }
      function X(e) {
        var t = e.length - 1,
          r = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) r--;
          for (t = e[0]; t >= 10; t /= 10) r++;
        }
        return r;
      }
      function ee(e) {
        for (var t = ''; e--; ) t += '0';
        return t;
      }
      function et(e, t, r, n) {
        var i,
          s = new e(1),
          a = Math.ceil(n / 7 + 4);
        for (C = !1; ; ) {
          if (
            (r % 2 && eh((s = s.times(t)).d, a) && (i = !0),
            0 === (r = I(r / 2)))
          ) {
            (r = s.d.length - 1), i && 0 === s.d[r] && ++s.d[r];
            break;
          }
          eh((t = t.times(t)).d, a);
        }
        return (C = !0), s;
      }
      function er(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function en(e, t, r) {
        for (var n, i = new e(t[0]), s = 0; ++s < t.length; )
          if ((n = new e(t[s])).s) i[r](n) && (i = n);
          else {
            i = n;
            break;
          }
        return i;
      }
      function ei(e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          u,
          l = 0,
          c = 0,
          d = 0,
          h = e.constructor,
          f = h.rounding,
          p = h.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new h(
            e.d
              ? e.d[0]
                ? e.s < 0
                  ? 0
                  : 1 / 0
                : 1
              : e.s
                ? e.s < 0
                  ? 0
                  : e
                : NaN
          );
        for (
          null == t ? ((C = !1), (u = p)) : (u = t), o = new h(0.03125);
          e.e > -2;

        )
          (e = e.times(o)), (d += 5);
        for (
          u += n = ((Math.log(j(2, d)) / Math.LN10) * 2 + 5) | 0,
            r = s = a = new h(1),
            h.precision = u;
          ;

        ) {
          if (
            ((s = V(s.times(e), u, 1)),
            (r = r.times(++c)),
            z((o = a.plus(W(s, r, u, 1))).d).slice(0, u) === z(a.d).slice(0, u))
          ) {
            for (i = d; i--; ) a = V(a.times(a), u, 1);
            if (null != t) return (h.precision = p), a;
            if (!(l < 3 && $(a.d, u - n, f, l)))
              return V(a, (h.precision = p), f, (C = !0));
            (h.precision = u += 10), (r = s = o = new h(1)), (c = 0), l++;
          }
          a = o;
        }
      }
      function es(e, t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          u,
          l,
          c,
          d,
          h,
          f = 1,
          p = e,
          m = p.d,
          y = p.constructor,
          g = y.rounding,
          b = y.precision;
        if (p.s < 0 || !m || !m[0] || (!p.e && 1 == m[0] && 1 == m.length))
          return new y(m && !m[0] ? -1 / 0 : 1 != p.s ? NaN : m ? 0 : p);
        if (
          (null == t ? ((C = !1), (c = b)) : (c = t),
          (y.precision = c += 10),
          (n = (r = z(m)).charAt(0)),
          !(15e14 > Math.abs((s = p.e))))
        )
          return (
            (l = J(y, c + 2, b).times(s + '')),
            (p = es(new y(n + '.' + r.slice(1)), c - 10).plus(l)),
            (y.precision = b),
            null == t ? V(p, b, g, (C = !0)) : p
          );
        for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
          (n = (r = z((p = p.times(e)).d)).charAt(0)), f++;
        for (
          s = p.e,
            n > 1
              ? ((p = new y('0.' + r)), s++)
              : (p = new y(n + '.' + r.slice(1))),
            d = p,
            u = a = p = W(p.minus(1), p.plus(1), c, 1),
            h = V(p.times(p), c, 1),
            i = 3;
          ;

        ) {
          if (
            ((a = V(a.times(h), c, 1)),
            z((l = u.plus(W(a, new y(i), c, 1))).d).slice(0, c) ===
              z(u.d).slice(0, c))
          ) {
            if (
              ((u = u.times(2)),
              0 !== s && (u = u.plus(J(y, c + 2, b).times(s + ''))),
              (u = W(u, new y(f), c, 1)),
              null != t)
            )
              return (y.precision = b), u;
            if (!$(u.d, c - 10, g, o))
              return V(u, (y.precision = b), g, (C = !0));
            (y.precision = c += 10),
              (l = a = p = W(d.minus(1), d.plus(1), c, 1)),
              (h = V(p.times(p), c, 1)),
              (i = o = 1);
          }
          (u = l), (i += 2);
        }
      }
      function ea(e) {
        return String((e.s * e.s) / 0);
      }
      function eo(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +t.slice(n + 1)),
                (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);
          n++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = r = r - n - 1),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; )
              e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += '0';
          e.d.push(+t),
            C &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function eu(e, t, r, n, i) {
        var s,
          a,
          o,
          u,
          l = e.precision,
          c = Math.ceil(l / 7);
        for (C = !1, u = r.times(r), o = new e(n); ; ) {
          if (
            ((a = W(o.times(u), new e(t++ * t++), l, 1)),
            (o = i ? n.plus(a) : n.minus(a)),
            (n = W(a.times(u), new e(t++ * t++), l, 1)),
            void 0 !== (a = o.plus(n)).d[c])
          ) {
            for (s = c; a.d[s] === o.d[s] && s--; );
            if (-1 == s) break;
          }
          (s = o), (o = n), (n = a), (a = s);
        }
        return (C = !0), (a.d.length = c + 1), a;
      }
      function el(e, t) {
        for (var r = e; --t; ) r *= e;
        return r;
      }
      function ec(e, t) {
        var r,
          n = t.s < 0,
          i = Y(e, e.precision, 1),
          s = i.times(0.5);
        if ((t = t.abs()).lte(s)) return (S = n ? 4 : 1), t;
        if ((r = t.divToInt(i)).isZero()) S = n ? 3 : 2;
        else {
          if ((t = t.minus(r.times(i))).lte(s))
            return (S = er(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
          S = er(r) ? (n ? 1 : 4) : n ? 3 : 2;
        }
        return t.minus(i).abs();
      }
      function ed(e, t, r, n) {
        var i,
          s,
          a,
          o,
          u,
          l,
          c,
          d,
          h,
          f = e.constructor,
          p = void 0 !== r;
        if (
          (p
            ? (Z(r, 1, 1e9), void 0 === n ? (n = f.rounding) : Z(n, 0, 8))
            : ((r = f.precision), (n = f.rounding)),
          e.isFinite())
        ) {
          for (
            a = (c = K(e)).indexOf('.'),
              p
                ? ((i = 2),
                  16 == t ? (r = 4 * r - 3) : 8 == t && (r = 3 * r - 2))
                : (i = t),
              a >= 0 &&
                ((c = c.replace('.', '')),
                ((h = new f(1)).e = c.length - a),
                (h.d = H(K(h), 10, i)),
                (h.e = h.d.length)),
              s = u = (d = H(c, 10, i)).length;
            0 == d[--u];

          )
            d.pop();
          if (d[0]) {
            if (
              (a < 0
                ? s--
                : (((e = new f(e)).d = d),
                  (e.e = s),
                  (d = (e = W(e, h, r, n, 0, i)).d),
                  (s = e.e),
                  (l = E)),
              (a = d[r]),
              (o = i / 2),
              (l = l || void 0 !== d[r + 1]),
              (l =
                n < 4
                  ? (void 0 !== a || l) && (0 === n || n === (e.s < 0 ? 3 : 2))
                  : a > o ||
                    (a === o &&
                      (4 === n ||
                        l ||
                        (6 === n && 1 & d[r - 1]) ||
                        n === (e.s < 0 ? 8 : 7)))),
              (d.length = r),
              l)
            )
              for (; ++d[--r] > i - 1; ) (d[r] = 0), r || (++s, d.unshift(1));
            for (u = d.length; !d[u - 1]; --u);
            for (a = 0, c = ''; a < u; a++) c += R.charAt(d[a]);
            if (p) {
              if (u > 1) {
                if (16 == t || 8 == t) {
                  for (a = 16 == t ? 4 : 3, --u; u % a; u++) c += '0';
                  for (u = (d = H(c, i, t)).length; !d[u - 1]; --u);
                  for (a = 1, c = '1.'; a < u; a++) c += R.charAt(d[a]);
                } else c = c.charAt(0) + '.' + c.slice(1);
              }
              c = c + (s < 0 ? 'p' : 'p+') + s;
            } else if (s < 0) {
              for (; ++s; ) c = '0' + c;
              c = '0.' + c;
            } else if (++s > u) for (s -= u; s--; ) c += '0';
            else s < u && (c = c.slice(0, s) + '.' + c.slice(s));
          } else c = p ? '0p+0' : '0';
          c = (16 == t ? '0x' : 2 == t ? '0b' : 8 == t ? '0o' : '') + c;
        } else c = ea(e);
        return e.s < 0 ? '-' + c : c;
      }
      function eh(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function ef(e) {
        return new this(e).abs();
      }
      function ep(e) {
        return new this(e).acos();
      }
      function em(e) {
        return new this(e).acosh();
      }
      function ey(e, t) {
        return new this(e).plus(t);
      }
      function eg(e) {
        return new this(e).asin();
      }
      function eb(e) {
        return new this(e).asinh();
      }
      function ev(e) {
        return new this(e).atan();
      }
      function ew(e) {
        return new this(e).atanh();
      }
      function e_(e, t) {
        (e = new this(e)), (t = new this(t));
        var r,
          n = this.precision,
          i = this.rounding,
          s = n + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((r = t.s < 0 ? Y(this, n, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                  ? ((r = Y(this, s, 1).times(0.5)).s = e.s)
                  : t.s < 0
                    ? ((this.precision = s),
                      (this.rounding = 1),
                      (r = this.atan(W(e, t, s, 1))),
                      (t = Y(this, s, 1)),
                      (this.precision = n),
                      (this.rounding = i),
                      (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                    : (r = this.atan(W(e, t, s, 1)))
              : ((r = Y(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (r = new this(NaN)),
          r
        );
      }
      function eE(e) {
        return new this(e).cbrt();
      }
      function eS(e) {
        return V((e = new this(e)), e.e + 1, 2);
      }
      function eR(e, t, r) {
        return new this(e).clamp(t, r);
      }
      function eO(e) {
        if (!e || 'object' != typeof e) throw Error(N + 'Object expected');
        var t,
          r,
          n,
          i = !0 === e.defaults,
          s = [
            'precision',
            1,
            1e9,
            'rounding',
            0,
            8,
            'toExpNeg',
            -9e15,
            0,
            'toExpPos',
            0,
            9e15,
            'maxE',
            0,
            9e15,
            'minE',
            -9e15,
            0,
            'modulo',
            0,
            9,
          ];
        for (t = 0; t < s.length; t += 3)
          if (((r = s[t]), i && (this[r] = x[r]), void 0 !== (n = e[r]))) {
            if (I(n) === n && n >= s[t + 1] && n <= s[t + 2]) this[r] = n;
            else throw Error(k + r + ': ' + n);
          }
        if (((r = 'crypto'), i && (this[r] = x[r]), void 0 !== (n = e[r]))) {
          if (!0 === n || !1 === n || 0 === n || 1 === n) {
            if (n) {
              if (
                'u' > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[r] = !0;
              else throw Error(P);
            } else this[r] = !1;
          } else throw Error(k + r + ': ' + n);
        }
        return this;
      }
      function eA(e) {
        return new this(e).cos();
      }
      function ex(e) {
        return new this(e).cosh();
      }
      function eC(e, t) {
        return new this(e).div(t);
      }
      function eN(e) {
        return new this(e).exp();
      }
      function ek(e) {
        return V((e = new this(e)), e.e + 1, 3);
      }
      function eT() {
        var e,
          t,
          r = new this(0);
        for (C = !1, e = 0; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            r.d && (r = r.plus(t.times(t)));
          else {
            if (t.s) return (C = !0), new this(1 / 0);
            r = t;
          }
        return (C = !0), r.sqrt();
      }
      function eP(e) {
        return e instanceof eX || (e && e.toStringTag === D) || !1;
      }
      function eD(e) {
        return new this(e).ln();
      }
      function eI(e, t) {
        return new this(e).log(t);
      }
      function ej(e) {
        return new this(e).log(2);
      }
      function eM(e) {
        return new this(e).log(10);
      }
      function eU() {
        return en(this, arguments, 'lt');
      }
      function eL() {
        return en(this, arguments, 'gt');
      }
      function eq(e, t) {
        return new this(e).mod(t);
      }
      function eF(e, t) {
        return new this(e).mul(t);
      }
      function eB(e, t) {
        return new this(e).pow(t);
      }
      function eQ(e) {
        var t,
          r,
          n,
          i,
          s = 0,
          a = new this(1),
          o = [];
        if (
          (void 0 === e ? (e = this.precision) : Z(e, 1, 1e9),
          (n = Math.ceil(e / 7)),
          this.crypto)
        ) {
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); s < n; )
              (i = t[s]) >= 429e7
                ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (o[s++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((n *= 4)); s < n; )
              (i =
                t[s] +
                (t[s + 1] << 8) +
                (t[s + 2] << 16) +
                ((127 & t[s + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, s)
                : (o.push(i % 1e7), (s += 4));
            s = n / 4;
          } else throw Error(P);
        } else for (; s < n; ) o[s++] = (1e7 * Math.random()) | 0;
        for (
          n = o[--s],
            e %= 7,
            n && e && ((i = j(10, 7 - e)), (o[s] = ((n / i) | 0) * i));
          0 === o[s];
          s--
        )
          o.pop();
        if (s < 0) (r = 0), (o = [0]);
        else {
          for (r = -1; 0 === o[0]; r -= 7) o.shift();
          for (n = 1, i = o[0]; i >= 10; i /= 10) n++;
          n < 7 && (r -= 7 - n);
        }
        return (a.e = r), (a.d = o), a;
      }
      function ez(e) {
        return V((e = new this(e)), e.e + 1, this.rounding);
      }
      function eZ(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
      }
      function e$(e) {
        return new this(e).sin();
      }
      function eH(e) {
        return new this(e).sinh();
      }
      function eW(e) {
        return new this(e).sqrt();
      }
      function eV(e, t) {
        return new this(e).sub(t);
      }
      function eK() {
        var e = 0,
          t = arguments,
          r = new this(t[0]);
        for (C = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
        return (C = !0), V(r, this.precision, this.rounding);
      }
      function eG(e) {
        return new this(e).tan();
      }
      function eJ(e) {
        return new this(e).tanh();
      }
      function eY(e) {
        return V((e = new this(e)), e.e + 1, 1);
      }
      (Q[Symbol.for('nodejs.util.inspect.custom')] = Q.toString),
        (Q[Symbol.toStringTag] = 'Decimal');
      var eX = (Q.constructor = (function e(t) {
        var r, n, i;
        function s(e) {
          var t, r, n;
          if (!(this instanceof s)) return new s(e);
          if (((this.constructor = s), eP(e))) {
            (this.s = e.s),
              C
                ? !e.d || e.e > s.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : e.e < s.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ('number' == (n = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, r = e; r >= 10; r /= 10) t++;
              C
                ? t > s.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : t < s.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = NaN), (this.e = NaN), (this.d = null);
              return;
            }
            return eo(this, e.toString());
          }
          if ('string' !== n) throw Error(k + e);
          return (
            45 === (r = e.charCodeAt(0))
              ? ((e = e.slice(1)), (this.s = -1))
              : (43 === r && (e = e.slice(1)), (this.s = 1)),
            q.test(e)
              ? eo(this, e)
              : (function (e, t) {
                  var r, n, i, s, a, o, u, l, c;
                  if (t.indexOf('_') > -1) {
                    if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), q.test(t)))
                      return eo(e, t);
                  } else if ('Infinity' === t || 'NaN' === t)
                    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                  if (U.test(t)) (r = 16), (t = t.toLowerCase());
                  else if (M.test(t)) r = 2;
                  else if (L.test(t)) r = 8;
                  else throw Error(k + t);
                  for (
                    (s = t.search(/p/i)) > 0
                      ? ((u = +t.slice(s + 1)), (t = t.substring(2, s)))
                      : (t = t.slice(2)),
                      a = (s = t.indexOf('.')) >= 0,
                      n = e.constructor,
                      a &&
                        ((s = (o = (t = t.replace('.', '')).length) - s),
                        (i = et(n, new n(r), s, 2 * s))),
                      s = c = (l = H(t, r, 1e7)).length - 1;
                    0 === l[s];
                    --s
                  )
                    l.pop();
                  return s < 0
                    ? new n(0 * e.s)
                    : ((e.e = G(l, c)),
                      (e.d = l),
                      (C = !1),
                      a && (e = W(e, i, 4 * o)),
                      u &&
                        (e = e.times(
                          54 > Math.abs(u) ? j(2, u) : eX.pow(2, u)
                        )),
                      (C = !0),
                      e);
                })(this, e)
          );
        }
        if (
          ((s.prototype = Q),
          (s.ROUND_UP = 0),
          (s.ROUND_DOWN = 1),
          (s.ROUND_CEIL = 2),
          (s.ROUND_FLOOR = 3),
          (s.ROUND_HALF_UP = 4),
          (s.ROUND_HALF_DOWN = 5),
          (s.ROUND_HALF_EVEN = 6),
          (s.ROUND_HALF_CEIL = 7),
          (s.ROUND_HALF_FLOOR = 8),
          (s.EUCLID = 9),
          (s.config = s.set = eO),
          (s.clone = e),
          (s.isDecimal = eP),
          (s.abs = ef),
          (s.acos = ep),
          (s.acosh = em),
          (s.add = ey),
          (s.asin = eg),
          (s.asinh = eb),
          (s.atan = ev),
          (s.atanh = ew),
          (s.atan2 = e_),
          (s.cbrt = eE),
          (s.ceil = eS),
          (s.clamp = eR),
          (s.cos = eA),
          (s.cosh = ex),
          (s.div = eC),
          (s.exp = eN),
          (s.floor = ek),
          (s.hypot = eT),
          (s.ln = eD),
          (s.log = eI),
          (s.log10 = eM),
          (s.log2 = ej),
          (s.max = eU),
          (s.min = eL),
          (s.mod = eq),
          (s.mul = eF),
          (s.pow = eB),
          (s.random = eQ),
          (s.round = ez),
          (s.sign = eZ),
          (s.sin = e$),
          (s.sinh = eH),
          (s.sqrt = eW),
          (s.sub = eV),
          (s.sum = eK),
          (s.tan = eG),
          (s.tanh = eJ),
          (s.trunc = eY),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            i = [
              'precision',
              'rounding',
              'toExpNeg',
              'toExpPos',
              'maxE',
              'minE',
              'modulo',
              'crypto',
            ],
              r = 0;
            r < i.length;

          )
            t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
        return s.config(t), s;
      })(x));
      (O = new eX(O)), (A = new eX(A));
      var e0 = eX;
    },
    5350: (e, t) => {
      'use strict';
      (t.byteLength = function (e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            s = u(e),
            a = s[0],
            o = s[1],
            l = new i(((a + o) * 3) / 4 - o),
            c = 0,
            d = o > 0 ? a - 4 : a;
          for (r = 0; r < d; r += 4)
            (t =
              (n[e.charCodeAt(r)] << 18) |
              (n[e.charCodeAt(r + 1)] << 12) |
              (n[e.charCodeAt(r + 2)] << 6) |
              n[e.charCodeAt(r + 3)]),
              (l[c++] = (t >> 16) & 255),
              (l[c++] = (t >> 8) & 255),
              (l[c++] = 255 & t);
          return (
            2 === o &&
              ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
              (l[c++] = 255 & t)),
            1 === o &&
              ((t =
                (n[e.charCodeAt(r)] << 10) |
                (n[e.charCodeAt(r + 1)] << 4) |
                (n[e.charCodeAt(r + 2)] >> 2)),
              (l[c++] = (t >> 8) & 255),
              (l[c++] = 255 & t)),
            l
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, n = e.length, i = n % 3, s = [], a = 0, o = n - i;
            a < o;
            a += 16383
          )
            s.push(
              (function (e, t, n) {
                for (var i, s = [], a = t; a < n; a += 3)
                  s.push(
                    r[
                      ((i =
                        ((e[a] << 16) & 0xff0000) +
                        ((e[a + 1] << 8) & 65280) +
                        (255 & e[a + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return s.join('');
              })(e, a, a + 16383 > o ? o : a + 16383)
            );
          return (
            1 === i
              ? s.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + '==')
              : 2 === i &&
                s.push(
                  r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                    r[(t >> 4) & 63] +
                    r[(t << 2) & 63] +
                    '='
                ),
            s.join('')
          );
        });
      for (
        var r = [],
          n = [],
          i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          s =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          a = 0,
          o = s.length;
        a < o;
        ++a
      )
        (r[a] = s[a]), (n[s.charCodeAt(a)] = a);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw Error('Invalid string. Length must be a multiple of 4');
        var r = e.indexOf('=');
        -1 === r && (r = t);
        var n = r === t ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63);
    },
    2796: (e, t, r) => {
      'use strict';
      var n = r(5350),
        i = r(7947),
        s =
          'function' == typeof Symbol && 'function' == typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null;
      function a(e) {
        if (e > 0x7fffffff)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        var t = new Uint8Array(e);
        return Object.setPrototypeOf(t, o.prototype), t;
      }
      function o(e, t, r) {
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return c(e);
        }
        return u(e, t, r);
      }
      function u(e, t, r) {
        if ('string' == typeof e)
          return (function (e, t) {
            if (
              (('string' != typeof t || '' === t) && (t = 'utf8'),
              !o.isEncoding(t))
            )
              throw TypeError('Unknown encoding: ' + t);
            var r = 0 | p(e, t),
              n = a(r),
              i = n.write(e, t);
            return i !== r && (n = n.slice(0, i)), n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (N(e, Uint8Array)) {
              var t = new Uint8Array(e);
              return h(t.buffer, t.byteOffset, t.byteLength);
            }
            return d(e);
          })(e);
        if (null == e)
          throw TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof e
          );
        if (
          N(e, ArrayBuffer) ||
          (e && N(e.buffer, ArrayBuffer)) ||
          ('undefined' != typeof SharedArrayBuffer &&
            (N(e, SharedArrayBuffer) || (e && N(e.buffer, SharedArrayBuffer))))
        )
          return h(e, t, r);
        if ('number' == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        var n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return o.from(n, t, r);
        var i = (function (e) {
          if (o.isBuffer(e)) {
            var t,
              r = 0 | f(e.length),
              n = a(r);
            return 0 === n.length || e.copy(n, 0, 0, r), n;
          }
          return void 0 !== e.length
            ? 'number' != typeof e.length || (t = e.length) != t
              ? a(0)
              : d(e)
            : 'Buffer' === e.type && Array.isArray(e.data)
              ? d(e.data)
              : void 0;
        })(e);
        if (i) return i;
        if (
          'undefined' != typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' == typeof e[Symbol.toPrimitive]
        )
          return o.from(e[Symbol.toPrimitive]('string'), t, r);
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof e
        );
      }
      function l(e) {
        if ('number' != typeof e)
          throw TypeError('"size" argument must be of type number');
        if (e < 0)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
      }
      function c(e) {
        return l(e), a(e < 0 ? 0 : 0 | f(e));
      }
      function d(e) {
        for (
          var t = e.length < 0 ? 0 : 0 | f(e.length), r = a(t), n = 0;
          n < t;
          n += 1
        )
          r[n] = 255 & e[n];
        return r;
      }
      function h(e, t, r) {
        var n;
        if (t < 0 || e.byteLength < t)
          throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                  ? new Uint8Array(e, t)
                  : new Uint8Array(e, t, r)),
            o.prototype
          ),
          n
        );
      }
      function f(e) {
        if (e >= 0x7fffffff)
          throw RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes'
          );
        return 0 | e;
      }
      function p(e, t) {
        if (o.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || N(e, ArrayBuffer)) return e.byteLength;
        if ('string' != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        var r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        for (var i = !1; ; )
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r;
            case 'utf8':
            case 'utf-8':
              return A(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return x(e).length;
            default:
              if (i) return n ? -1 : A(e).length;
              (t = ('' + t).toLowerCase()), (i = !0);
          }
      }
      function m(e, t, r) {
        var i,
          s,
          a = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (t >>>= 0)))
        )
          return '';
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return (function (e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = '', s = t; s < r; ++s) i += k[e[s]];
                return i;
              })(this, t, r);
            case 'utf8':
            case 'utf-8':
              return v(this, t, r);
            case 'ascii':
              return (function (e, t, r) {
                var n = '';
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i)
                  n += String.fromCharCode(127 & e[i]);
                return n;
              })(this, t, r);
            case 'latin1':
            case 'binary':
              return (function (e, t, r) {
                var n = '';
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n;
              })(this, t, r);
            case 'base64':
              return (
                (i = t),
                (s = r),
                0 === i && s === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(i, s))
              );
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return (function (e, t, r) {
                for (
                  var n = e.slice(t, r), i = '', s = 0;
                  s < n.length - 1;
                  s += 2
                )
                  i += String.fromCharCode(n[s] + 256 * n[s + 1]);
                return i;
              })(this, t, r);
            default:
              if (a) throw TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (a = !0);
          }
      }
      function y(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function g(e, t, r, n, i) {
        var s;
        if (0 === e.length) return -1;
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 0x7fffffff
              ? (r = 0x7fffffff)
              : r < -0x80000000 && (r = -0x80000000),
          (s = r = +r) != s && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (('string' == typeof t && (t = o.from(t, n)), o.isBuffer(t)))
          return 0 === t.length ? -1 : b(e, t, r, n, i);
        if ('number' == typeof t)
          return ((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(e, t, r)
              : Uint8Array.prototype.lastIndexOf.call(e, t, r)
            : b(e, [t], r, n, i);
        throw TypeError('val must be string, number or Buffer');
      }
      function b(e, t, r, n, i) {
        var s,
          a = 1,
          o = e.length,
          u = t.length;
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (o /= 2), (u /= 2), (r /= 2);
        }
        function l(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (i) {
          var c = -1;
          for (s = r; s < o; s++)
            if (l(e, s) === l(t, -1 === c ? 0 : s - c)) {
              if ((-1 === c && (c = s), s - c + 1 === u)) return c * a;
            } else -1 !== c && (s -= s - c), (c = -1);
        } else
          for (r + u > o && (r = o - u), s = r; s >= 0; s--) {
            for (var d = !0, h = 0; h < u; h++)
              if (l(e, s + h) !== l(t, h)) {
                d = !1;
                break;
              }
            if (d) return s;
          }
        return -1;
      }
      function v(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], i = t; i < r; ) {
          var s,
            a,
            o,
            u,
            l = e[i],
            c = null,
            d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
          if (i + d <= r)
            switch (d) {
              case 1:
                l < 128 && (c = l);
                break;
              case 2:
                (192 & (s = e[i + 1])) == 128 &&
                  (u = ((31 & l) << 6) | (63 & s)) > 127 &&
                  (c = u);
                break;
              case 3:
                (s = e[i + 1]),
                  (a = e[i + 2]),
                  (192 & s) == 128 &&
                    (192 & a) == 128 &&
                    (u = ((15 & l) << 12) | ((63 & s) << 6) | (63 & a)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (c = u);
                break;
              case 4:
                (s = e[i + 1]),
                  (a = e[i + 2]),
                  (o = e[i + 3]),
                  (192 & s) == 128 &&
                    (192 & a) == 128 &&
                    (192 & o) == 128 &&
                    (u =
                      ((15 & l) << 18) |
                      ((63 & s) << 12) |
                      ((63 & a) << 6) |
                      (63 & o)) > 65535 &&
                    u < 1114112 &&
                    (c = u);
            }
          null === c
            ? ((c = 65533), (d = 1))
            : c > 65535 &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (i += d);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          for (var r = '', n = 0; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function w(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
        if (e + t > r)
          throw RangeError('Trying to access beyond buffer length');
      }
      function _(e, t, r, n, i, s) {
        if (!o.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < s)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw RangeError('Index out of range');
      }
      function E(e, t, r, n, i, s) {
        if (r + n > e.length || r < 0) throw RangeError('Index out of range');
      }
      function S(e, t, r, n, s) {
        return (
          (t = +t),
          (r >>>= 0),
          s || E(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function R(e, t, r, n, s) {
        return (
          (t = +t),
          (r >>>= 0),
          s || E(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (t.hp = o),
        (t.IS = 50),
        (o.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        o.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(o.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (o.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(o.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (o.isBuffer(this)) return this.byteOffset;
          },
        }),
        (o.poolSize = 8192),
        (o.from = function (e, t, r) {
          return u(e, t, r);
        }),
        Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(o, Uint8Array),
        (o.alloc = function (e, t, r) {
          return (l(e), e <= 0)
            ? a(e)
            : void 0 !== t
              ? 'string' == typeof r
                ? a(e).fill(t, r)
                : a(e).fill(t)
              : a(e);
        }),
        (o.allocUnsafe = function (e) {
          return c(e);
        }),
        (o.allocUnsafeSlow = function (e) {
          return c(e);
        }),
        (o.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== o.prototype;
        }),
        (o.compare = function (e, t) {
          if (
            (N(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)),
            N(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)),
            !o.isBuffer(e) || !o.isBuffer(t))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, i = 0, s = Math.min(r, n);
            i < s;
            ++i
          )
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (o.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (o.concat = function (e, t) {
          if (!Array.isArray(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return o.alloc(0);
          if (void 0 === t)
            for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
          var r,
            n = o.allocUnsafe(t),
            i = 0;
          for (r = 0; r < e.length; ++r) {
            var s = e[r];
            if (N(s, Uint8Array))
              i + s.length > n.length
                ? o.from(s).copy(n, i)
                : Uint8Array.prototype.set.call(n, s, i);
            else if (o.isBuffer(s)) s.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += s.length;
          }
          return n;
        }),
        (o.byteLength = p),
        (o.prototype._isBuffer = !0),
        (o.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw RangeError('Buffer size must be a multiple of 16-bits');
          for (var t = 0; t < e; t += 2) y(this, t, t + 1);
          return this;
        }),
        (o.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw RangeError('Buffer size must be a multiple of 32-bits');
          for (var t = 0; t < e; t += 4)
            y(this, t, t + 3), y(this, t + 1, t + 2);
          return this;
        }),
        (o.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw RangeError('Buffer size must be a multiple of 64-bits');
          for (var t = 0; t < e; t += 8)
            y(this, t, t + 7),
              y(this, t + 1, t + 6),
              y(this, t + 2, t + 5),
              y(this, t + 3, t + 4);
          return this;
        }),
        (o.prototype.toString = function () {
          var e = this.length;
          return 0 === e
            ? ''
            : 0 == arguments.length
              ? v(this, 0, e)
              : m.apply(this, arguments);
        }),
        (o.prototype.toLocaleString = o.prototype.toString),
        (o.prototype.equals = function (e) {
          if (!o.isBuffer(e)) throw TypeError('Argument must be a Buffer');
          return this === e || 0 === o.compare(this, e);
        }),
        (o.prototype.inspect = function () {
          var e = '',
            r = t.IS;
          return (
            (e = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (e += ' ... '),
            '<Buffer ' + e + '>'
          );
        }),
        s && (o.prototype[s] = o.prototype.inspect),
        (o.prototype.compare = function (e, t, r, n, i) {
          if (
            (N(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)),
            !o.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
          )
            throw RangeError('out of range index');
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e))
            return 0;
          for (
            var s = i - n,
              a = r - t,
              u = Math.min(s, a),
              l = this.slice(n, i),
              c = e.slice(t, r),
              d = 0;
            d < u;
            ++d
          )
            if (l[d] !== c[d]) {
              (s = l[d]), (a = c[d]);
              break;
            }
          return s < a ? -1 : a < s ? 1 : 0;
        }),
        (o.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (o.prototype.indexOf = function (e, t, r) {
          return g(this, e, t, r, !0);
        }),
        (o.prototype.lastIndexOf = function (e, t, r) {
          return g(this, e, t, r, !1);
        }),
        (o.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0);
          else if (void 0 === r && 'string' == typeof t)
            (n = t), (r = this.length), (t = 0);
          else if (isFinite(t))
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0));
          else
            throw Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            );
          var i,
            s,
            a,
            o,
            u,
            l,
            c,
            d,
            h = this.length - t;
          if (
            ((void 0 === r || r > h) && (r = h),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw RangeError('Attempt to write outside buffer bounds');
          n || (n = 'utf8');
          for (var f = !1; ; )
            switch (n) {
              case 'hex':
                return (function (e, t, r, n) {
                  r = Number(r) || 0;
                  var i = e.length - r;
                  n ? (n = Number(n)) > i && (n = i) : (n = i);
                  var s = t.length;
                  n > s / 2 && (n = s / 2);
                  for (var a = 0; a < n; ++a) {
                    var o = parseInt(t.substr(2 * a, 2), 16);
                    if (o != o) break;
                    e[r + a] = o;
                  }
                  return a;
                })(this, e, t, r);
              case 'utf8':
              case 'utf-8':
                return (i = t), (s = r), C(A(e, this.length - i), this, i, s);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return (
                  (a = t),
                  (o = r),
                  C(
                    (function (e) {
                      for (var t = [], r = 0; r < e.length; ++r)
                        t.push(255 & e.charCodeAt(r));
                      return t;
                    })(e),
                    this,
                    a,
                    o
                  )
                );
              case 'base64':
                return (u = t), (l = r), C(x(e), this, u, l);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return (
                  (c = t),
                  (d = r),
                  C(
                    (function (e, t) {
                      for (
                        var r, n, i = [], s = 0;
                        s < e.length && !((t -= 2) < 0);
                        ++s
                      )
                        (n = (r = e.charCodeAt(s)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(e, this.length - c),
                    this,
                    c,
                    d
                  )
                );
              default:
                if (f) throw TypeError('Unknown encoding: ' + n);
                (n = ('' + n).toLowerCase()), (f = !0);
            }
        }),
        (o.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (o.prototype.slice = function (e, t) {
          var r = this.length;
          (e = ~~e),
            (t = void 0 === t ? r : ~~t),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
          var n = this.subarray(e, t);
          return Object.setPrototypeOf(n, o.prototype), n;
        }),
        (o.prototype.readUintLE = o.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
              n += this[e + s] * i;
            return n;
          }),
        (o.prototype.readUintBE = o.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
              n += this[e + --t] * i;
            return n;
          }),
        (o.prototype.readUint8 = o.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || w(e, 1, this.length), this[e];
          }),
        (o.prototype.readUint16LE = o.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (o.prototype.readUint16BE = o.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (o.prototype.readUint32LE = o.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                0x1000000 * this[e + 3]
            );
          }),
        (o.prototype.readUint32BE = o.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || w(e, 4, this.length),
              0x1000000 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (o.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
          for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
            n += this[e + s] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (o.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || w(e, t, this.length);
          for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256); )
            s += this[e + --n] * i;
          return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s;
        }),
        (o.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0), t || w(e, 1, this.length), 128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (o.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || w(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (o.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || w(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (o.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || w(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (o.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || w(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (o.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 4, this.length), i.read(this, e, !0, 23, 4)
          );
        }),
        (o.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 4, this.length), i.read(this, e, !1, 23, 4)
          );
        }),
        (o.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 8, this.length), i.read(this, e, !0, 52, 8)
          );
        }),
        (o.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || w(e, 8, this.length), i.read(this, e, !1, 52, 8)
          );
        }),
        (o.prototype.writeUintLE = o.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              var i = Math.pow(2, 8 * r) - 1;
              _(this, e, t, r, i, 0);
            }
            var s = 1,
              a = 0;
            for (this[t] = 255 & e; ++a < r && (s *= 256); )
              this[t + a] = (e / s) & 255;
            return t + r;
          }),
        (o.prototype.writeUintBE = o.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              var i = Math.pow(2, 8 * r) - 1;
              _(this, e, t, r, i, 0);
            }
            var s = r - 1,
              a = 1;
            for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
              this[t + s] = (e / a) & 255;
            return t + r;
          }),
        (o.prototype.writeUint8 = o.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 4, 0xffffffff, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || _(this, e, t, 4, 0xffffffff, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (o.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            _(this, e, t, r, i - 1, -i);
          }
          var s = 0,
            a = 1,
            o = 0;
          for (this[t] = 255 & e; ++s < r && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1),
              (this[t + s] = (((e / a) >> 0) - o) & 255);
          return t + r;
        }),
        (o.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            _(this, e, t, r, i - 1, -i);
          }
          var s = r - 1,
            a = 1,
            o = 0;
          for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1),
              (this[t + s] = (((e / a) >> 0) - o) & 255);
          return t + r;
        }),
        (o.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (o.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (o.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (o.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 4, 0x7fffffff, -0x80000000),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (o.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || _(this, e, t, 4, 0x7fffffff, -0x80000000),
            e < 0 && (e = 0xffffffff + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (o.prototype.writeFloatLE = function (e, t, r) {
          return S(this, e, t, !0, r);
        }),
        (o.prototype.writeFloatBE = function (e, t, r) {
          return S(this, e, t, !1, r);
        }),
        (o.prototype.writeDoubleLE = function (e, t, r) {
          return R(this, e, t, !0, r);
        }),
        (o.prototype.writeDoubleBE = function (e, t, r) {
          return R(this, e, t, !1, r);
        }),
        (o.prototype.copy = function (e, t, r, n) {
          if (!o.isBuffer(e)) throw TypeError('argument should be a Buffer');
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0) throw RangeError('targetStart out of bounds');
          if (r < 0 || r >= this.length) throw RangeError('Index out of range');
          if (n < 0) throw RangeError('sourceEnd out of bounds');
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          var i = n - r;
          return (
            this === e && 'function' == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            i
          );
        }),
        (o.prototype.fill = function (e, t, r, n) {
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' != typeof n)
            )
              throw TypeError('encoding must be a string');
            if ('string' == typeof n && !o.isEncoding(n))
              throw TypeError('Unknown encoding: ' + n);
            if (1 === e.length) {
              var i,
                s = e.charCodeAt(0);
              (('utf8' === n && s < 128) || 'latin1' === n) && (e = s);
            }
          } else
            'number' == typeof e
              ? (e &= 255)
              : 'boolean' == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw RangeError('Out of range index');
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            'number' == typeof e)
          )
            for (i = t; i < r; ++i) this[i] = e;
          else {
            var a = o.isBuffer(e) ? e : o.from(e, n),
              u = a.length;
            if (0 === u)
              throw TypeError(
                'The value "' + e + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - t; ++i) this[i + t] = a[i % u];
          }
          return this;
        });
      var O = /[^+/0-9A-Za-z-_]/g;
      function A(e, t) {
        t = t || 1 / 0;
        for (var r, n = e.length, i = null, s = [], a = 0; a < n; ++a) {
          if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || a + 1 === n) {
                (t -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && s.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (t -= 3) > -1 && s.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            s.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            s.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            s.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error('Invalid code point');
        }
        return s;
      }
      function x(e) {
        return n.toByteArray(
          (function (e) {
            if ((e = (e = e.split('=')[0]).trim().replace(O, '')).length < 2)
              return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          })(e)
        );
      }
      function C(e, t, r, n) {
        for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      function N(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      var k = (function () {
        for (var e = '0123456789abcdef', t = Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
        return t;
      })();
    },
    7947: (e, t) => {
      (t.read = function (e, t, r, n, i) {
        var s,
          a,
          o = 8 * i - n - 1,
          u = (1 << o) - 1,
          l = u >> 1,
          c = -7,
          d = r ? i - 1 : 0,
          h = r ? -1 : 1,
          f = e[t + d];
        for (
          d += h, s = f & ((1 << -c) - 1), f >>= -c, c += o;
          c > 0;
          s = 256 * s + e[t + d], d += h, c -= 8
        );
        for (
          a = s & ((1 << -c) - 1), s >>= -c, c += n;
          c > 0;
          a = 256 * a + e[t + d], d += h, c -= 8
        );
        if (0 === s) s = 1 - l;
        else {
          if (s === u) return a ? NaN : (1 / 0) * (f ? -1 : 1);
          (a += Math.pow(2, n)), (s -= l);
        }
        return (f ? -1 : 1) * a * Math.pow(2, s - n);
      }),
        (t.write = function (e, t, r, n, i, s) {
          var a,
            o,
            u,
            l = 8 * s - i - 1,
            c = (1 << l) - 1,
            d = c >> 1,
            h = 23 === i ? 5960464477539062e-23 : 0,
            f = n ? 0 : s - 1,
            p = n ? 1 : -1,
            m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((o = isNaN(t) ? 1 : 0), (a = c))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                a + d >= 1 ? (t += h / u) : (t += h * Math.pow(2, 1 - d)),
                t * u >= 2 && (a++, (u /= 2)),
                a + d >= c
                  ? ((o = 0), (a = c))
                  : a + d >= 1
                    ? ((o = (t * u - 1) * Math.pow(2, i)), (a += d))
                    : ((o = t * Math.pow(2, d - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            e[r + f] = 255 & o, f += p, o /= 256, i -= 8
          );
          for (
            a = (a << i) | o, l += i;
            l > 0;
            e[r + f] = 255 & a, f += p, a /= 256, l -= 8
          );
          e[r + f - p] |= 128 * m;
        });
    },
    5932: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(2530);
        },
      ]);
    },
    142: (e, t, r) => {
      'use strict';
      function n() {
        throw Error(
          '`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.'
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'forbidden', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(4334).HTTP_ERROR_FALLBACK_ERROR_CODE,
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    733: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DynamicServerError: function () {
            return n;
          },
          isDynamicServerError: function () {
            return i;
          },
        });
      let r = 'DYNAMIC_SERVER_USAGE';
      class n extends Error {
        constructor(e) {
          super('Dynamic server usage: ' + e),
            (this.description = e),
            (this.digest = r);
        }
      }
      function i(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          'digest' in e &&
          'string' == typeof e.digest &&
          e.digest === r
        );
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6289: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return u.ReadonlyURLSearchParams;
          },
          RedirectType: function () {
            return u.RedirectType;
          },
          ServerInsertedHTMLContext: function () {
            return c.ServerInsertedHTMLContext;
          },
          forbidden: function () {
            return u.forbidden;
          },
          notFound: function () {
            return u.notFound;
          },
          permanentRedirect: function () {
            return u.permanentRedirect;
          },
          redirect: function () {
            return u.redirect;
          },
          unauthorized: function () {
            return u.unauthorized;
          },
          unstable_rethrow: function () {
            return u.unstable_rethrow;
          },
          useParams: function () {
            return p;
          },
          usePathname: function () {
            return h;
          },
          useRouter: function () {
            return f;
          },
          useSearchParams: function () {
            return d;
          },
          useSelectedLayoutSegment: function () {
            return y;
          },
          useSelectedLayoutSegments: function () {
            return m;
          },
          useServerInsertedHTML: function () {
            return c.useServerInsertedHTML;
          },
        });
      let n = r(8101),
        i = r(5989),
        s = r(5452),
        a = r(1200),
        o = r(2117),
        u = r(2898),
        l = r(3896),
        c = r(2778);
      function d() {
        let e = (0, n.useContext)(s.SearchParamsContext);
        return (0, n.useMemo)(
          () => (e ? new u.ReadonlyURLSearchParams(e) : null),
          [e]
        );
      }
      function h() {
        return (
          (0, l.useDynamicRouteParams)('usePathname()'),
          (0, n.useContext)(s.PathnameContext)
        );
      }
      function f() {
        let e = (0, n.useContext)(i.AppRouterContext);
        if (null === e)
          throw Error('invariant expected app router to be mounted');
        return e;
      }
      function p() {
        return (
          (0, l.useDynamicRouteParams)('useParams()'),
          (0, n.useContext)(s.PathParamsContext)
        );
      }
      function m(e) {
        void 0 === e && (e = 'children'),
          (0, l.useDynamicRouteParams)('useSelectedLayoutSegments()');
        let t = (0, n.useContext)(i.LayoutRouterContext);
        return t
          ? (function e(t, r, n, i) {
              let s;
              if ((void 0 === n && (n = !0), void 0 === i && (i = []), n))
                s = t[1][r];
              else {
                var u;
                let e = t[1];
                s = null != (u = e.children) ? u : Object.values(e)[0];
              }
              if (!s) return i;
              let l = s[0],
                c = (0, a.getSegmentValue)(l);
              return !c || c.startsWith(o.PAGE_SEGMENT_KEY)
                ? i
                : (i.push(c), e(s, r, !1, i));
            })(t.tree, e)
          : null;
      }
      function y(e) {
        void 0 === e && (e = 'children'),
          (0, l.useDynamicRouteParams)('useSelectedLayoutSegment()');
        let t = m(e);
        if (!t || 0 === t.length) return null;
        let r = 'children' === e ? t[0] : t[t.length - 1];
        return r === o.DEFAULT_SEGMENT_KEY ? null : r;
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2898: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return c;
          },
          RedirectType: function () {
            return i.RedirectType;
          },
          forbidden: function () {
            return a.forbidden;
          },
          notFound: function () {
            return s.notFound;
          },
          permanentRedirect: function () {
            return n.permanentRedirect;
          },
          redirect: function () {
            return n.redirect;
          },
          unauthorized: function () {
            return o.unauthorized;
          },
          unstable_rethrow: function () {
            return u.unstable_rethrow;
          },
        });
      let n = r(3779),
        i = r(3400),
        s = r(9427),
        a = r(142),
        o = r(3205),
        u = r(6425);
      class l extends Error {
        constructor() {
          super(
            'Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams'
          );
        }
      }
      class c extends URLSearchParams {
        append() {
          throw new l();
        }
        delete() {
          throw new l();
        }
        set() {
          throw new l();
        }
        sort() {
          throw new l();
        }
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9427: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'notFound', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = '' + r(4334).HTTP_ERROR_FALLBACK_ERROR_CODE + ';404';
      function i() {
        let e = Error(n);
        throw ((e.digest = n), e);
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3779: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRedirectError: function () {
            return a;
          },
          getRedirectStatusCodeFromError: function () {
            return d;
          },
          getRedirectTypeFromError: function () {
            return c;
          },
          getURLFromRedirectError: function () {
            return l;
          },
          permanentRedirect: function () {
            return u;
          },
          redirect: function () {
            return o;
          },
        });
      let n = r(2360),
        i = r(782),
        s = r(3400);
      function a(e, t, r) {
        void 0 === r && (r = i.RedirectStatusCode.TemporaryRedirect);
        let n = Error(s.REDIRECT_ERROR_CODE);
        return (
          (n.digest =
            s.REDIRECT_ERROR_CODE + ';' + t + ';' + e + ';' + r + ';'),
          n
        );
      }
      function o(e, t) {
        let r = n.actionAsyncStorage.getStore();
        throw a(
          e,
          t ||
            ((null == r ? void 0 : r.isAction)
              ? s.RedirectType.push
              : s.RedirectType.replace),
          i.RedirectStatusCode.TemporaryRedirect
        );
      }
      function u(e, t) {
        throw (
          (void 0 === t && (t = s.RedirectType.replace),
          a(e, t, i.RedirectStatusCode.PermanentRedirect))
        );
      }
      function l(e) {
        return (0, s.isRedirectError)(e)
          ? e.digest.split(';').slice(2, -2).join(';')
          : null;
      }
      function c(e) {
        if (!(0, s.isRedirectError)(e)) throw Error('Not a redirect error');
        return e.digest.split(';', 2)[1];
      }
      function d(e) {
        if (!(0, s.isRedirectError)(e)) throw Error('Not a redirect error');
        return Number(e.digest.split(';').at(-2));
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1200: (e, t) => {
      'use strict';
      function r(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getSegmentValue', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    6745: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          StaticGenBailoutError: function () {
            return n;
          },
          isStaticGenBailoutError: function () {
            return i;
          },
        });
      let r = 'NEXT_STATIC_GEN_BAILOUT';
      class n extends Error {
        constructor(...e) {
          super(...e), (this.code = r);
        }
      }
      function i(e) {
        return (
          'object' == typeof e && null !== e && 'code' in e && e.code === r
        );
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3205: (e, t, r) => {
      'use strict';
      function n() {
        throw Error(
          '`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.'
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'unauthorized', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(4334).HTTP_ERROR_FALLBACK_ERROR_CODE,
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    6425: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'unstable_rethrow', {
          enumerable: !0,
          get: function () {
            return function e(t) {
              if (
                (0, a.isNextRouterError)(t) ||
                (0, s.isBailoutToCSRError)(t) ||
                (0, n.isDynamicUsageError)(t) ||
                (0, i.isPostpone)(t)
              )
                throw t;
              t instanceof Error && 'cause' in t && e(t.cause);
            };
          },
        });
      let n = r(6705),
        i = r(3138),
        s = r(4412),
        a = r(6040);
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2778: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ServerInsertedHTMLContext: function () {
            return i;
          },
          useServerInsertedHTML: function () {
            return s;
          },
        });
      let n = r(3232)._(r(8101)),
        i = n.default.createContext(null);
      function s(e) {
        let t = (0, n.useContext)(i);
        t && t(e);
      }
    },
    2530: (e, t, r) => {
      'use strict';
      let n, i;
      r.r(t), r.d(t, { default: () => a1 });
      var s,
        a,
        o,
        u,
        l,
        c,
        d,
        h,
        f,
        p,
        m,
        y,
        g,
        b = {};
      r.r(b),
        r.d(b, {
          hasBrowserEnv: () => ne,
          hasStandardBrowserEnv: () => nr,
          hasStandardBrowserWebWorkerEnv: () => nn,
          navigator: () => nt,
          origin: () => ni,
        });
      var v = r(5105),
        w = 'undefined' == typeof window || 'Deno' in globalThis;
      function _() {}
      function E(e) {
        return 'number' == typeof e && e >= 0 && e !== 1 / 0;
      }
      function S(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function R(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function O(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function A(e, t) {
        let {
          type: r = 'all',
          exact: n,
          fetchStatus: i,
          predicate: s,
          queryKey: a,
          stale: o,
        } = e;
        if (a) {
          if (n) {
            if (t.queryHash !== C(a, t.options)) return !1;
          } else if (!k(t.queryKey, a)) return !1;
        }
        if ('all' !== r) {
          let e = t.isActive();
          if (('active' === r && !e) || ('inactive' === r && e)) return !1;
        }
        return (
          ('boolean' != typeof o || t.isStale() === o) &&
          (!i || i === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function x(e, t) {
        let { exact: r, status: n, predicate: i, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (N(t.options.mutationKey) !== N(s)) return !1;
          } else if (!k(t.options.mutationKey, s)) return !1;
        }
        return (!n || t.state.status === n) && (!i || !!i(t));
      }
      function C(e, t) {
        return (t?.queryKeyHashFn || N)(e);
      }
      function N(e) {
        return JSON.stringify(e, (e, t) =>
          I(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function k(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            'object' == typeof e &&
            'object' == typeof t &&
            !Object.keys(t).some((r) => !k(e[r], t[r])))
        );
      }
      function T(e, t) {
        if (e === t) return e;
        let r = D(e) && D(t);
        if (r || (I(e) && I(t))) {
          let n = r ? e : Object.keys(e),
            i = n.length,
            s = r ? t : Object.keys(t),
            a = s.length,
            o = r ? [] : {},
            u = 0;
          for (let i = 0; i < a; i++) {
            let a = r ? i : s[i];
            ((!r && n.includes(a)) || r) && void 0 === e[a] && void 0 === t[a]
              ? ((o[a] = void 0), u++)
              : ((o[a] = T(e[a], t[a])),
                o[a] === e[a] && void 0 !== e[a] && u++);
          }
          return i === a && u === i ? e : o;
        }
        return t;
      }
      function P(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function D(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function I(e) {
        if (!j(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return (
          !!(j(r) && r.hasOwnProperty('isPrototypeOf')) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function j(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      function M(e, t, r) {
        return 'function' == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
            ? T(e, t)
            : t;
      }
      function U(e, t, r = 0) {
        let n = [...e, t];
        return r && n.length > r ? n.slice(1) : n;
      }
      function L(e, t, r = 0) {
        let n = [t, ...e];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var q = Symbol();
      function F(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== q
            ? e.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      var B = (function () {
          let e = [],
            t = 0,
            r = (e) => {
              e();
            },
            n = (e) => {
              e();
            },
            i = (e) => setTimeout(e, 0),
            s = (n) => {
              t
                ? e.push(n)
                : i(() => {
                    r(n);
                  });
            },
            a = () => {
              let t = e;
              (e = []),
                t.length &&
                  i(() => {
                    n(() => {
                      t.forEach((e) => {
                        r(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let r;
              t++;
              try {
                r = e();
              } finally {
                --t || a();
              }
              return r;
            },
            batchCalls:
              (e) =>
              (...t) => {
                s(() => {
                  e(...t);
                });
              },
            schedule: s,
            setNotifyFunction: (e) => {
              r = e;
            },
            setBatchNotifyFunction: (e) => {
              n = e;
            },
            setScheduler: (e) => {
              i = e;
            },
          };
        })(),
        Q = class {
          constructor() {
            (this.listeners = new Set()),
              (this.subscribe = this.subscribe.bind(this));
          }
          subscribe(e) {
            return (
              this.listeners.add(e),
              this.onSubscribe(),
              () => {
                this.listeners.delete(e), this.onUnsubscribe();
              }
            );
          }
          hasListeners() {
            return this.listeners.size > 0;
          }
          onSubscribe() {}
          onUnsubscribe() {}
        },
        z = new (class extends Q {
          #e;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!w && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener('visibilitychange', t, !1),
                    () => {
                      window.removeEventListener('visibilitychange', t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#r = e),
              this.#t?.(),
              (this.#t = e((e) => {
                'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#e !== e && ((this.#e = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return 'boolean' == typeof this.#e
              ? this.#e
              : globalThis.document?.visibilityState !== 'hidden';
          }
        })(),
        Z = new (class extends Q {
          #n = !0;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!w && window.addEventListener) {
                  let t = () => e(!0),
                    r = () => e(!1);
                  return (
                    window.addEventListener('online', t, !1),
                    window.addEventListener('offline', r, !1),
                    () => {
                      window.removeEventListener('online', t),
                        window.removeEventListener('offline', r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#r = e),
              this.#t?.(),
              (this.#t = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#n !== e &&
              ((this.#n = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#n;
          }
        })();
      function $() {
        let e, t;
        let r = new Promise((r, n) => {
          (e = r), (t = n);
        });
        function n(e) {
          Object.assign(r, e), delete r.resolve, delete r.reject;
        }
        return (
          (r.status = 'pending'),
          r.catch(() => {}),
          (r.resolve = (t) => {
            n({ status: 'fulfilled', value: t }), e(t);
          }),
          (r.reject = (e) => {
            n({ status: 'rejected', reason: e }), t(e);
          }),
          r
        );
      }
      function H(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function W(e) {
        return (e ?? 'online') !== 'online' || Z.isOnline();
      }
      var V = class extends Error {
        constructor(e) {
          super('CancelledError'),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function K(e) {
        return e instanceof V;
      }
      function G(e) {
        let t,
          r = !1,
          n = 0,
          i = !1,
          s = $(),
          a = () =>
            z.isFocused() &&
            ('always' === e.networkMode || Z.isOnline()) &&
            e.canRun(),
          o = () => W(e.networkMode) && e.canRun(),
          u = (r) => {
            i || ((i = !0), e.onSuccess?.(r), t?.(), s.resolve(r));
          },
          l = (r) => {
            i || ((i = !0), e.onError?.(r), t?.(), s.reject(r));
          },
          c = () =>
            new Promise((r) => {
              (t = (e) => {
                (i || a()) && r(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), i || e.onContinue?.();
            }),
          d = () => {
            let t;
            if (i) return;
            let s = 0 === n ? e.initialPromise : void 0;
            try {
              t = s ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(u)
              .catch((t) => {
                if (i) return;
                let s = e.retry ?? (w ? 0 : 3),
                  o = e.retryDelay ?? H,
                  u = 'function' == typeof o ? o(n, t) : o,
                  h =
                    !0 === s ||
                    ('number' == typeof s && n < s) ||
                    ('function' == typeof s && s(n, t));
                if (r || !h) {
                  l(t);
                  return;
                }
                n++,
                  e.onFail?.(n, t),
                  new Promise((e) => {
                    setTimeout(e, u);
                  })
                    .then(() => (a() ? void 0 : c()))
                    .then(() => {
                      r ? l(t) : d();
                    });
              });
          };
        return {
          promise: s,
          cancel: (t) => {
            i || (l(new V(t)), e.abort?.());
          },
          continue: () => (t?.(), s),
          cancelRetry: () => {
            r = !0;
          },
          continueRetry: () => {
            r = !1;
          },
          canStart: o,
          start: () => (o() ? d() : c().then(d), s),
        };
      }
      var J = class {
          #i;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              E(this.gcTime) &&
                (this.#i = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (w ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#i && (clearTimeout(this.#i), (this.#i = void 0));
          }
        },
        Y = class extends J {
          #s;
          #a;
          #o;
          #u;
          #l;
          #c;
          constructor(e) {
            super(),
              (this.#c = !1),
              (this.#l = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#o = e.cache),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#s = (function (e) {
                let t =
                    'function' == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== t,
                  n = r
                    ? 'function' == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? (n ?? Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? 'success' : 'pending',
                  fetchStatus: 'idle',
                };
              })(this.options)),
              (this.state = e.state ?? this.#s),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#u?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#l, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              'idle' !== this.state.fetchStatus ||
              this.#o.remove(this);
          }
          setData(e, t) {
            let r = M(this.state.data, e, this.options);
            return (
              this.#d({
                data: r,
                type: 'success',
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              r
            );
          }
          setState(e, t) {
            this.#d({ type: 'setState', state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#u?.promise;
            return (
              this.#u?.cancel(e), t ? t.then(_).catch(_) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#s);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== O(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === q ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !S(this.state.dataUpdatedAt, e)
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#u?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#u?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#o.notify({
                type: 'observerAdded',
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#u &&
                  (this.#c
                    ? this.#u.cancel({ revert: !0 })
                    : this.#u.cancelRetry()),
                this.scheduleGc()),
              this.#o.notify({
                type: 'observerRemoved',
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#d({ type: 'invalidate' });
          }
          fetch(e, t) {
            if ('idle' !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#u) return this.#u.continueRetry(), this.#u.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let r = new AbortController(),
              n = (e) => {
                Object.defineProperty(e, 'signal', {
                  enumerable: !0,
                  get: () => ((this.#c = !0), r.signal),
                });
              },
              i = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  let e = F(this.options, t),
                    r = { queryKey: this.queryKey, meta: this.meta };
                  return (n(r), (this.#c = !1), this.options.persister)
                    ? this.options.persister(e, r, this)
                    : e(r);
                },
              };
            n(i),
              this.options.behavior?.onFetch(i, this),
              (this.#a = this.state),
              ('idle' === this.state.fetchStatus ||
                this.state.fetchMeta !== i.fetchOptions?.meta) &&
                this.#d({ type: 'fetch', meta: i.fetchOptions?.meta });
            let s = (e) => {
              (K(e) && e.silent) || this.#d({ type: 'error', error: e }),
                K(e) ||
                  (this.#o.config.onError?.(e, this),
                  this.#o.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#u = G({
                initialPromise: t?.initialPromise,
                fn: i.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (e) => {
                  if (void 0 === e) {
                    s(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(e);
                  } catch (e) {
                    s(e);
                    return;
                  }
                  this.#o.config.onSuccess?.(e, this),
                    this.#o.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: s,
                onFail: (e, t) => {
                  this.#d({ type: 'failed', failureCount: e, error: t });
                },
                onPause: () => {
                  this.#d({ type: 'pause' });
                },
                onContinue: () => {
                  this.#d({ type: 'continue' });
                },
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: () => !0,
              })),
              this.#u.start()
            );
          }
          #d(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case 'failed':
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case 'pause':
                  return { ...t, fetchStatus: 'paused' };
                case 'continue':
                  return { ...t, fetchStatus: 'fetching' };
                case 'fetch':
                  return {
                    ...t,
                    ...X(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case 'success':
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: 'success',
                    ...(!e.manual && {
                      fetchStatus: 'idle',
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case 'error':
                  let r = e.error;
                  if (K(r) && r.revert && this.#a)
                    return { ...this.#a, fetchStatus: 'idle' };
                  return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: 'idle',
                    status: 'error',
                  };
                case 'invalidate':
                  return { ...t, isInvalidated: !0 };
                case 'setState':
                  return { ...t, ...e.state };
              }
            })(this.state)),
              B.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#o.notify({ query: this, type: 'updated', action: e });
              });
          }
        };
      function X(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: W(t.networkMode) ? 'fetching' : 'paused',
          ...(void 0 === e && { error: null, status: 'pending' }),
        };
      }
      var ee = class extends Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#h = new Map());
          }
          #h;
          build(e, t, r) {
            let n = t.queryKey,
              i = t.queryHash ?? C(n, t),
              s = this.get(i);
            return (
              s ||
                ((s = new Y({
                  cache: this,
                  queryKey: n,
                  queryHash: i,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(n),
                })),
                this.add(s)),
              s
            );
          }
          add(e) {
            this.#h.has(e.queryHash) ||
              (this.#h.set(e.queryHash, e),
              this.notify({ type: 'added', query: e }));
          }
          remove(e) {
            let t = this.#h.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#h.delete(e.queryHash),
              this.notify({ type: 'removed', query: e }));
          }
          clear() {
            B.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#h.get(e);
          }
          getAll() {
            return [...this.#h.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => A(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter((t) => A(e, t)) : t;
          }
          notify(e) {
            B.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            B.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            B.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        et = class extends J {
          #f;
          #p;
          #u;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#p = e.mutationCache),
              (this.#f = []),
              (this.state = e.state || er()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#f.includes(e) ||
              (this.#f.push(e),
              this.clearGcTimeout(),
              this.#p.notify({
                type: 'observerAdded',
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#f = this.#f.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#p.notify({
                type: 'observerRemoved',
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#f.length ||
              ('pending' === this.state.status
                ? this.scheduleGc()
                : this.#p.remove(this));
          }
          continue() {
            return this.#u?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            this.#u = G({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error('No mutationFn found')),
              onFail: (e, t) => {
                this.#d({ type: 'failed', failureCount: e, error: t });
              },
              onPause: () => {
                this.#d({ type: 'pause' });
              },
              onContinue: () => {
                this.#d({ type: 'continue' });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#p.canRun(this),
            });
            let t = 'pending' === this.state.status,
              r = !this.#u.canStart();
            try {
              if (!t) {
                this.#d({ type: 'pending', variables: e, isPaused: r }),
                  await this.#p.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#d({
                    type: 'pending',
                    context: t,
                    variables: e,
                    isPaused: r,
                  });
              }
              let n = await this.#u.start();
              return (
                await this.#p.config.onSuccess?.(
                  n,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(n, e, this.state.context),
                await this.#p.config.onSettled?.(
                  n,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(n, null, e, this.state.context),
                this.#d({ type: 'success', data: n }),
                n
              );
            } catch (t) {
              try {
                throw (
                  (await this.#p.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#p.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#d({ type: 'error', error: t });
              }
            } finally {
              this.#p.runNext(this);
            }
          }
          #d(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case 'failed':
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case 'pause':
                  return { ...t, isPaused: !0 };
                case 'continue':
                  return { ...t, isPaused: !1 };
                case 'pending':
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: 'pending',
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case 'success':
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: 'success',
                    isPaused: !1,
                  };
                case 'error':
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: 'error',
                  };
              }
            })(this.state)),
              B.batch(() => {
                this.#f.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#p.notify({
                    mutation: this,
                    type: 'updated',
                    action: e,
                  });
              });
          }
        };
      function er() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: 'idle',
          variables: void 0,
          submittedAt: 0,
        };
      }
      var en = class extends Q {
        constructor(e = {}) {
          super(),
            (this.config = e),
            (this.#m = new Set()),
            (this.#y = new Map()),
            (this.#g = 0);
        }
        #m;
        #y;
        #g;
        build(e, t, r) {
          let n = new et({
            mutationCache: this,
            mutationId: ++this.#g,
            options: e.defaultMutationOptions(t),
            state: r,
          });
          return this.add(n), n;
        }
        add(e) {
          this.#m.add(e);
          let t = ei(e);
          if ('string' == typeof t) {
            let r = this.#y.get(t);
            r ? r.push(e) : this.#y.set(t, [e]);
          }
          this.notify({ type: 'added', mutation: e });
        }
        remove(e) {
          if (this.#m.delete(e)) {
            let t = ei(e);
            if ('string' == typeof t) {
              let r = this.#y.get(t);
              if (r) {
                if (r.length > 1) {
                  let t = r.indexOf(e);
                  -1 !== t && r.splice(t, 1);
                } else r[0] === e && this.#y.delete(t);
              }
            }
          }
          this.notify({ type: 'removed', mutation: e });
        }
        canRun(e) {
          let t = ei(e);
          if ('string' != typeof t) return !0;
          {
            let r = this.#y.get(t),
              n = r?.find((e) => 'pending' === e.state.status);
            return !n || n === e;
          }
        }
        runNext(e) {
          let t = ei(e);
          if ('string' != typeof t) return Promise.resolve();
          {
            let r = this.#y.get(t)?.find((t) => t !== e && t.state.isPaused);
            return r?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          B.batch(() => {
            this.#m.forEach((e) => {
              this.notify({ type: 'removed', mutation: e });
            }),
              this.#m.clear(),
              this.#y.clear();
          });
        }
        getAll() {
          return Array.from(this.#m);
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => x(t, e));
        }
        findAll(e = {}) {
          return this.getAll().filter((t) => x(e, t));
        }
        notify(e) {
          B.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          let e = this.getAll().filter((e) => e.state.isPaused);
          return B.batch(() =>
            Promise.all(e.map((e) => e.continue().catch(_)))
          );
        }
      };
      function ei(e) {
        return e.options.scope?.id;
      }
      function es(e) {
        return {
          onFetch: (t, r) => {
            let n = t.options,
              i = t.fetchOptions?.meta?.fetchMore?.direction,
              s = t.state.data?.pages || [],
              a = t.state.data?.pageParams || [],
              o = { pages: [], pageParams: [] },
              u = 0,
              l = async () => {
                let r = !1,
                  l = (e) => {
                    Object.defineProperty(e, 'signal', {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (r = !0)
                          : t.signal.addEventListener('abort', () => {
                              r = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  c = F(t.options, t.fetchOptions),
                  d = async (e, n, i) => {
                    if (r) return Promise.reject();
                    if (null == n && e.pages.length) return Promise.resolve(e);
                    let s = {
                      queryKey: t.queryKey,
                      pageParam: n,
                      direction: i ? 'backward' : 'forward',
                      meta: t.options.meta,
                    };
                    l(s);
                    let a = await c(s),
                      { maxPages: o } = t.options,
                      u = i ? L : U;
                    return {
                      pages: u(e.pages, a, o),
                      pageParams: u(e.pageParams, n, o),
                    };
                  };
                if (i && s.length) {
                  let e = 'backward' === i,
                    t = { pages: s, pageParams: a },
                    r = (e ? eo : ea)(n, t);
                  o = await d(t, r, e);
                } else {
                  let t = e ?? s.length;
                  do {
                    let e = 0 === u ? (a[0] ?? n.initialPageParam) : ea(n, o);
                    if (u > 0 && null == e) break;
                    (o = await d(o, e)), u++;
                  } while (u < t);
                }
                return o;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    l,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    r
                  ))
              : (t.fetchFn = l);
          },
        };
      }
      function ea(e, { pages: t, pageParams: r }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
      }
      function eo(e, { pages: t, pageParams: r }) {
        return t.length > 0
          ? e.getPreviousPageParam?.(t[0], t, r[0], r)
          : void 0;
      }
      var eu = class {
          #b;
          #p;
          #l;
          #v;
          #w;
          #_;
          #E;
          #S;
          constructor(e = {}) {
            (this.#b = e.queryCache || new ee()),
              (this.#p = e.mutationCache || new en()),
              (this.#l = e.defaultOptions || {}),
              (this.#v = new Map()),
              (this.#w = new Map()),
              (this.#_ = 0);
          }
          mount() {
            this.#_++,
              1 === this.#_ &&
                ((this.#E = z.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#b.onFocus());
                })),
                (this.#S = Z.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#b.onOnline());
                })));
          }
          unmount() {
            this.#_--,
              0 === this.#_ &&
                (this.#E?.(),
                (this.#E = void 0),
                this.#S?.(),
                (this.#S = void 0));
          }
          isFetching(e) {
            return this.#b.findAll({ ...e, fetchStatus: 'fetching' }).length;
          }
          isMutating(e) {
            return this.#p.findAll({ ...e, status: 'pending' }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#b.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              r = this.#b.build(this, t),
              n = r.state.data;
            return void 0 === n
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  r.isStaleByTime(R(t.staleTime, r)) &&
                  this.prefetchQuery(t),
                Promise.resolve(n));
          }
          getQueriesData(e) {
            return this.#b
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, r) {
            let n = this.defaultQueryOptions({ queryKey: e }),
              i = this.#b.get(n.queryHash),
              s = i?.state.data,
              a = 'function' == typeof t ? t(s) : t;
            if (void 0 !== a)
              return this.#b.build(this, n).setData(a, { ...r, manual: !0 });
          }
          setQueriesData(e, t, r) {
            return B.batch(() =>
              this.#b
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#b.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#b;
            B.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let r = this.#b,
              n = { type: 'active', ...e };
            return B.batch(
              () => (
                r.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(n, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let r = { revert: !0, ...t };
            return Promise.all(
              B.batch(() => this.#b.findAll(e).map((e) => e.cancel(r)))
            )
              .then(_)
              .catch(_);
          }
          invalidateQueries(e, t = {}) {
            return B.batch(() => {
              if (
                (this.#b.findAll(e).forEach((e) => {
                  e.invalidate();
                }),
                e?.refetchType === 'none')
              )
                return Promise.resolve();
              let r = { ...e, type: e?.refetchType ?? e?.type ?? 'active' };
              return this.refetchQueries(r, t);
            });
          }
          refetchQueries(e, t = {}) {
            let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              B.batch(() =>
                this.#b
                  .findAll(e)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, r);
                    return (
                      r.throwOnError || (t = t.catch(_)),
                      'paused' === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(_);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let r = this.#b.build(this, t);
            return r.isStaleByTime(R(t.staleTime, r))
              ? r.fetch(t)
              : Promise.resolve(r.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(_).catch(_);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = es(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(_).catch(_);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = es(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return Z.isOnline()
              ? this.#p.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#b;
          }
          getMutationCache() {
            return this.#p;
          }
          getDefaultOptions() {
            return this.#l;
          }
          setDefaultOptions(e) {
            this.#l = e;
          }
          setQueryDefaults(e, t) {
            this.#v.set(N(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#v.values()],
              r = {};
            return (
              t.forEach((t) => {
                k(e, t.queryKey) && Object.assign(r, t.defaultOptions);
              }),
              r
            );
          }
          setMutationDefaults(e, t) {
            this.#w.set(N(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#w.values()],
              r = {};
            return (
              t.forEach((t) => {
                k(e, t.mutationKey) && (r = { ...r, ...t.defaultOptions });
              }),
              r
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#l.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = C(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = 'always' !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
              t.queryFn === q && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#l.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#b.clear(), this.#p.clear();
          }
        },
        el = r(8101),
        ec = el.createContext(void 0),
        ed = (e) => {
          let t = el.useContext(ec);
          if (e) return e;
          if (!t)
            throw Error(
              'No QueryClient set, use QueryClientProvider to set one'
            );
          return t;
        },
        eh = ({ client: e, children: t }) => (
          el.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          ),
          (0, v.jsx)(ec.Provider, { value: e, children: t })
        ),
        ef = () => {
          window.va ||
            (window.va = function (...e) {
              (window.vaq = window.vaq || []).push(e);
            });
        };
      function ep() {
        return 'undefined' != typeof window;
      }
      function em() {
        return 'production';
      }
      function ey() {
        return 'development' === ((ep() ? window.vam : em()) || 'production');
      }
      function eg(e) {
        return (
          (0, el.useEffect)(() => {
            var t;
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, 'beforeSend', e.beforeSend));
          }, [e.beforeSend]),
          (0, el.useEffect)(() => {
            !(function (e = { debug: !0 }) {
              var t;
              if (!ep()) return;
              (function (e = 'auto') {
                if ('auto' === e) {
                  window.vam = em();
                  return;
                }
                window.vam = e;
              })(e.mode),
                ef(),
                e.beforeSend &&
                  (null == (t = window.va) ||
                    t.call(window, 'beforeSend', e.beforeSend));
              let r =
                e.scriptSrc ||
                (ey()
                  ? 'https://va.vercel-scripts.com/v1/script.debug.js'
                  : '/_vercel/insights/script.js');
              if (document.head.querySelector(`script[src*="${r}"]`)) return;
              let n = document.createElement('script');
              (n.src = r),
                (n.defer = !0),
                (n.dataset.sdkn =
                  '@vercel/analytics' + (e.framework ? `/${e.framework}` : '')),
                (n.dataset.sdkv = '1.4.1'),
                e.disableAutoTrack && (n.dataset.disableAutoTrack = '1'),
                e.endpoint && (n.dataset.endpoint = e.endpoint),
                e.dsn && (n.dataset.dsn = e.dsn),
                (n.onerror = () => {
                  let e = ey()
                    ? 'Please check if any ad blockers are enabled and try again.'
                    : 'Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.';
                  console.log(
                    `[Vercel Web Analytics] Failed to load script from ${r}. ${e}`
                  );
                }),
                ey() && !1 === e.debug && (n.dataset.debug = 'false'),
                document.head.appendChild(n);
            })({
              framework: e.framework || 'react',
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, el.useEffect)(() => {
            e.route &&
              e.path &&
              (function ({ route: e, path: t }) {
                var r;
                null == (r = window.va) ||
                  r.call(window, 'pageview', { route: e, path: t });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
      var eb = r(8884),
        ev = () => {
          window.si ||
            (window.si = function (...e) {
              (window.siq = window.siq || []).push(e);
            });
        };
      function ew() {
        return false;
      }
      function e_(e) {
        return RegExp(
          `/${e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=[/?#]|$)`
        );
      }
      var eE = 'https://va.vercel-scripts.com/v1/speed-insights',
        eS = `${eE}/script.js`,
        eR = `${eE}/script.debug.js`;
      function eO(e) {
        (0, el.useEffect)(() => {
          var t;
          e.beforeSend &&
            (null == (t = window.si) ||
              t.call(window, 'beforeSend', e.beforeSend));
        }, [e.beforeSend]);
        let t = (0, el.useRef)(null);
        return (
          (0, el.useEffect)(() => {
            if (t.current) e.route && t.current(e.route);
            else {
              let r = (function (e = {}) {
                var t;
                if (!('undefined' != typeof window) || null === e.route)
                  return null;
                ev();
                let r = !!e.dsn,
                  n =
                    e.scriptSrc ||
                    (r ? eS : '/_vercel/speed-insights/script.js');
                if (document.head.querySelector(`script[src*="${n}"]`))
                  return null;
                e.beforeSend &&
                  (null == (t = window.si) ||
                    t.call(window, 'beforeSend', e.beforeSend));
                let i = document.createElement('script');
                return (
                  (i.src = n),
                  (i.defer = !0),
                  (i.dataset.sdkn =
                    '@vercel/speed-insights' +
                    (e.framework ? `/${e.framework}` : '')),
                  (i.dataset.sdkv = '1.1.0'),
                  e.sampleRate &&
                    (i.dataset.sampleRate = e.sampleRate.toString()),
                  e.route && (i.dataset.route = e.route),
                  e.endpoint && (i.dataset.endpoint = e.endpoint),
                  e.dsn && (i.dataset.dsn = e.dsn),
                  (i.onerror = () => {
                    console.log(
                      `[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`
                    );
                  }),
                  document.head.appendChild(i),
                  {
                    setRoute: (e) => {
                      i.dataset.route = e ?? void 0;
                    },
                  }
                );
              })({ framework: e.framework || 'react', ...e });
              r && (t.current = r.setRoute);
            }
          }, [e.route]),
          null
        );
      }
      var eA = () => {
        let e = (0, eb.useParams)(),
          t = (0, eb.useSearchParams)() || new URLSearchParams(),
          r = (0, eb.usePathname)();
        return e
          ? (function (e, t) {
              if (!e || !t) return e;
              let r = e;
              try {
                let e = Object.entries(t);
                for (let [t, n] of e)
                  if (!Array.isArray(n)) {
                    let e = e_(n);
                    e.test(r) && (r = r.replace(e, `/[${t}]`));
                  }
                for (let [t, n] of e)
                  if (Array.isArray(n)) {
                    let e = e_(n.join('/'));
                    e.test(r) && (r = r.replace(e, `/[...${t}]`));
                  }
                return r;
              } catch (t) {
                return e;
              }
            })(r, Object.keys(e).length ? e : Object.fromEntries(t.entries()))
          : null;
      };
      function ex(e) {
        let t = eA();
        return el.createElement(eO, { route: t, ...e, framework: 'next' });
      }
      function eC(e) {
        return el.createElement(
          el.Suspense,
          { fallback: null },
          el.createElement(ex, { ...e })
        );
      }
      function eN(e) {
        let t = {
          subscribe(t) {
            let r = null,
              n = !1,
              i = !1,
              s = !1;
            function a() {
              if (null === r) {
                s = !0;
                return;
              }
              !i &&
                ((i = !0), 'function' == typeof r ? r() : r && r.unsubscribe());
            }
            return (
              (r = e({
                next(e) {
                  n || t.next?.(e);
                },
                error(e) {
                  n || ((n = !0), t.error?.(e), a());
                },
                complete() {
                  n || ((n = !0), t.complete?.(), a());
                },
              })),
              s && a(),
              { unsubscribe: a }
            );
          },
          pipe: (...e) => e.reduce(ek, t),
        };
        return t;
      }
      function ek(e, t) {
        return t(e);
      }
      r(8517), Symbol();
      let eT = () => {},
        eP = (e) => {
          Object.freeze && Object.freeze(e);
        },
        eD = (e) =>
          (function e(t, r, n) {
            let i = r.join('.');
            return (
              n[i] ??
                (n[i] = new Proxy(eT, {
                  get(i, s) {
                    if ('string' == typeof s && 'then' !== s)
                      return e(t, [...r, s], n);
                  },
                  apply(e, n, i) {
                    let s = r[r.length - 1],
                      a = { args: i, path: r };
                    return (
                      'call' === s
                        ? (a = {
                            args: i.length >= 2 ? [i[1]] : [],
                            path: r.slice(0, -1),
                          })
                        : 'apply' === s &&
                          (a = {
                            args: i.length >= 2 ? i[1] : [],
                            path: r.slice(0, -1),
                          }),
                      eP(a.args),
                      eP(a.path),
                      t(a)
                    );
                  },
                })),
              n[i]
            );
          })(e, [], Object.create(null)),
        eI = (e) =>
          new Proxy(eT, {
            get(t, r) {
              if ('string' == typeof r && 'then' !== r) return e(r);
            },
          }),
        ej = {
          INTERNAL_SERVER_ERROR: -32603,
          BAD_GATEWAY: -32603,
          SERVICE_UNAVAILABLE: -32603,
          GATEWAY_TIMEOUT: -32603,
        },
        eM = Symbol();
      function eU(e, ...t) {
        let r = Object.assign(Object.create(null), e);
        for (let e of t)
          for (let t in e) {
            if (t in r && r[t] !== e[t]) throw Error(`Duplicate key ${t}`);
            r[t] = e[t];
          }
        return r;
      }
      function eL(e) {
        return !!e && !Array.isArray(e) && 'object' == typeof e;
      }
      function eq(e) {
        return Object.assign(Object.create(null), e);
      }
      let eF = 'function' == typeof Symbol && !!Symbol.asyncIterator;
      function eB(e) {
        return eF && eL(e) && Symbol.asyncIterator in e;
      }
      function eQ(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class ez extends Error {}
      function eZ(e) {
        if (e instanceof e$ || (e instanceof Error && 'TRPCError' === e.name))
          return e;
        let t = new e$({ code: 'INTERNAL_SERVER_ERROR', cause: e });
        return e instanceof Error && e.stack && (t.stack = e.stack), t;
      }
      class e$ extends Error {
        constructor(e) {
          let t = (function (e) {
            if (e instanceof Error) return e;
            let t = typeof e;
            if ('undefined' !== t && 'function' !== t && null !== e) {
              if ('object' !== t) return Error(String(e));
              if (eL(e)) {
                let t = new ez();
                for (let r in e) t[r] = e[r];
                return t;
              }
            }
          })(e.cause);
          super(e.message ?? t?.message ?? e.code, { cause: t }),
            eQ(this, 'cause', void 0),
            eQ(this, 'code', void 0),
            (this.code = e.code),
            (this.name = 'TRPCError'),
            this.cause || (this.cause = t);
        }
      }
      new WeakMap(),
        Symbol.toStringTag,
        (u = Symbol).dispose ?? (u.dispose = Symbol()),
        (l = Symbol).asyncDispose ?? (l.asyncDispose = Symbol()),
        Symbol();
      Symbol(), Symbol('ping');
      let eH = {
        input: { serialize: (e) => e, deserialize: (e) => e },
        output: { serialize: (e) => e, deserialize: (e) => e },
      };
      class eW extends Error {
        constructor() {
          super('Unable to transform response from server');
        }
      }
      let eV = ({ shape: e }) => e,
        eK = 'middlewareMarker';
      class eG extends Error {
        constructor(e) {
          super(e[0]?.message),
            (function (e, t, r) {
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r);
            })(this, 'issues', void 0),
            (this.name = 'SchemaError'),
            (this.issues = e);
        }
      }
      function eJ(e) {
        if ('function' == typeof e && 'function' == typeof e.assert)
          return e.assert.bind(e);
        if ('function' == typeof e) return e;
        if ('function' == typeof e.parseAsync) return e.parseAsync.bind(e);
        if ('function' == typeof e.parse) return e.parse.bind(e);
        if ('function' == typeof e.validateSync) return e.validateSync.bind(e);
        if ('function' == typeof e.create) return e.create.bind(e);
        if ('function' == typeof e.assert) return (t) => (e.assert(t), t);
        if ('~standard' in e)
          return async (t) => {
            let r = await e['~standard'].validate(t);
            if (r.issues) throw new eG(r.issues);
            return r.value;
          };
        throw Error('Could not find a validator fn');
      }
      function eY(e, t) {
        let { middlewares: r = [], inputs: n, meta: i, ...s } = t;
        return eX({
          ...eU(e, s),
          inputs: [...e.inputs, ...(n ?? [])],
          middlewares: [...e.middlewares, ...r],
          meta: e.meta && i ? { ...e.meta, ...i } : (i ?? e.meta),
        });
      }
      function eX(e = {}) {
        let t = { procedure: !0, inputs: [], middlewares: [], ...e };
        return {
          _def: t,
          input(e) {
            let r = eJ(e);
            return eY(t, {
              inputs: [e],
              middlewares: [
                (function (e) {
                  let t = async function (t) {
                    let r;
                    let n = await t.getRawInput();
                    try {
                      r = await e(n);
                    } catch (e) {
                      throw new e$({ code: 'BAD_REQUEST', cause: e });
                    }
                    let i = eL(t.input) && eL(r) ? { ...t.input, ...r } : r;
                    return t.next({ input: i });
                  };
                  return (t._type = 'input'), t;
                })(r),
              ],
            });
          },
          output(e) {
            let r = eJ(e);
            return eY(t, {
              output: e,
              middlewares: [
                (function (e) {
                  let t = async function ({ next: t }) {
                    let r = await t();
                    if (!r.ok) return r;
                    try {
                      let t = await e(r.data);
                      return { ...r, data: t };
                    } catch (e) {
                      throw new e$({
                        message: 'Output validation failed',
                        code: 'INTERNAL_SERVER_ERROR',
                        cause: e,
                      });
                    }
                  };
                  return (t._type = 'output'), t;
                })(r),
              ],
            });
          },
          meta: (e) => eY(t, { meta: e }),
          use: (e) =>
            eY(t, { middlewares: '_middlewares' in e ? e._middlewares : [e] }),
          unstable_concat: (e) => eY(t, e._def),
          query: (e) => e0({ ...t, type: 'query' }, e),
          mutation: (e) => e0({ ...t, type: 'mutation' }, e),
          subscription: (e) => e0({ ...t, type: 'subscription' }, e),
          experimental_caller: (e) => eY(t, { caller: e }),
        };
      }
      function e0(e, t) {
        let r = eY(e, {
            resolver: t,
            middlewares: [
              async function (e) {
                return { marker: eK, ok: !0, data: await t(e), ctx: e.ctx };
              },
            ],
          }),
          n = {
            ...r._def,
            type: e.type,
            experimental_caller: !!r._def.caller,
            meta: r._def.meta,
            $types: null,
          },
          i = (function (e) {
            async function t(t) {
              if (!t || !('getRawInput' in t)) throw Error(e1);
              let r = await e2(0, e, t);
              if (!r)
                throw new e$({
                  code: 'INTERNAL_SERVER_ERROR',
                  message:
                    'No result from middlewares - did you forget to `return next()`?',
                });
              if (!r.ok) throw r.error;
              return r.data;
            }
            return (t._def = e), t;
          })(r._def),
          s = r._def.caller;
        if (!s) return i;
        let a = async (...e) => await s({ args: e, invoke: i, _def: n });
        return (a._def = n), a;
      }
      let e1 = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
      async function e2(e, t, r) {
        try {
          let n = t.middlewares[e];
          return await n({
            ...r,
            meta: t.meta,
            input: r.input,
            next: (n) =>
              e2(e + 1, t, {
                ...r,
                ctx: n?.ctx ? { ...r.ctx, ...n.ctx } : r.ctx,
                input: n && 'input' in n ? n.input : r.input,
                getRawInput: n?.getRawInput ?? r.getRawInput,
              }),
          });
        } catch (e) {
          return { ok: !1, error: eZ(e), marker: eK };
        }
      }
      let e4 =
          'undefined' == typeof window ||
          'Deno' in window ||
          globalThis.process?.env?.NODE_ENV === 'test' ||
          !!globalThis.process?.env?.JEST_WORKER_ID ||
          !!globalThis.process?.env?.VITEST_WORKER_ID,
        e5 = {
          _ctx: null,
          _errorShape: null,
          _meta: null,
          queries: {},
          mutations: {},
          subscriptions: {},
          errorFormatter: eV,
          transformer: eH,
        },
        e3 = ['then', 'call', 'apply'];
      function e8(e) {
        return function (t) {
          let r = new Set(Object.keys(t).filter((e) => e3.includes(e)));
          if (r.size > 0)
            throw Error(
              'Reserved words used in `router({})` call: ' +
                Array.from(r).join(', ')
            );
          let n = eq({}),
            i = (function e(t, r = []) {
              let i = eq({});
              for (let [s, a] of Object.entries(t ?? {})) {
                if (a._def && 'router' in a._def) {
                  i[s] = e(a._def.record, [...r, s]);
                  continue;
                }
                if (!e6(a)) {
                  i[s] = e(a, [...r, s]);
                  continue;
                }
                let t = [...r, s].join('.');
                if (n[t]) throw Error(`Duplicate key: ${t}`);
                (n[t] = a), (i[s] = a);
              }
              return i;
            })(t),
            s = { _config: e, router: !0, procedures: n, ...e5, record: i };
          return { ...i, _def: s, createCaller: e9()({ _def: s }) };
        };
      }
      function e6(e) {
        return 'function' == typeof e;
      }
      function e9() {
        return function (e) {
          let t = e._def;
          return function (e, r) {
            return eD(async ({ path: n, args: i }) => {
              let s;
              let a = n.join('.');
              if (1 === n.length && '_def' === n[0]) return t;
              let o = t.procedures[a];
              try {
                return (
                  (s = 'function' == typeof e ? await Promise.resolve(e()) : e),
                  await o({
                    path: a,
                    getRawInput: async () => i[0],
                    ctx: s,
                    type: o._def.type,
                    signal: r?.signal,
                  })
                );
              } catch (e) {
                throw (
                  (r?.onError?.({
                    ctx: s,
                    error: eZ(e),
                    input: i[0],
                    path: a,
                    type: o._def.type,
                  }),
                  e)
                );
              }
            });
          };
        };
      }
      function e7(...e) {
        let t = eU({}, ...e.map((e) => e._def.record));
        return e8({
          errorFormatter: e.reduce((e, t) => {
            if (
              t._def._config.errorFormatter &&
              t._def._config.errorFormatter !== eV
            ) {
              if (e !== eV && e !== t._def._config.errorFormatter)
                throw Error('You seem to have several error formatters');
              return t._def._config.errorFormatter;
            }
            return e;
          }, eV),
          transformer: e.reduce((e, t) => {
            if (
              t._def._config.transformer &&
              t._def._config.transformer !== eH
            ) {
              if (e !== eH && e !== t._def._config.transformer)
                throw Error('You seem to have several transformers');
              return t._def._config.transformer;
            }
            return e;
          }, eH),
          isDev: e.every((e) => e._def._config.isDev),
          allowOutsideOfServer: e.every(
            (e) => e._def._config.allowOutsideOfServer
          ),
          isServer: e.every((e) => e._def._config.isServer),
          $types: e[0]?._def._config.$types,
        })(t);
      }
      class te {
        context() {
          return new te();
        }
        meta() {
          return new te();
        }
        create(e) {
          var t;
          let r = {
            ...e,
            transformer:
              'input' in (t = e?.transformer ?? eH)
                ? t
                : { input: t, output: t },
            isDev:
              e?.isDev ?? globalThis.process?.env.NODE_ENV !== 'production',
            allowOutsideOfServer: e?.allowOutsideOfServer ?? !1,
            errorFormatter: e?.errorFormatter ?? eV,
            isServer: e?.isServer ?? e4,
            $types: null,
          };
          if (!(e?.isServer ?? e4) && e?.allowOutsideOfServer !== !0)
            throw Error(
              "You're trying to use @trpc/server in a non-server environment. This is not supported by default."
            );
          return {
            _config: r,
            procedure: eX({ meta: e?.defaultMeta }),
            middleware: function (e) {
              return (function e(t) {
                return {
                  _middlewares: t,
                  unstable_pipe: (r) =>
                    e([...t, ...('_middlewares' in r ? r._middlewares : [r])]),
                };
              })([e]);
            },
            router: e8(r),
            mergeRouters: e7,
            createCallerFactory: e9(),
          };
        }
      }
      let tt = new te();
      function tr(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class tn extends Error {
        static from(e, t = {}) {
          return e instanceof tn ||
            (e instanceof Error && 'TRPCClientError' === e.name)
            ? (t.meta && (e.meta = { ...e.meta, ...t.meta }), e)
            : eL(e) &&
                eL(e.error) &&
                'number' == typeof e.error.code &&
                'string' == typeof e.error.message
              ? new tn(e.error.message, { ...t, result: e })
              : new tn(
                  'string' == typeof e
                    ? e
                    : eL(e) && 'string' == typeof e.message
                      ? e.message
                      : 'Unknown error',
                  { ...t, cause: e }
                );
        }
        constructor(e, t) {
          let r = t?.cause;
          super(e, { cause: r }),
            tr(this, 'cause', void 0),
            tr(this, 'shape', void 0),
            tr(this, 'data', void 0),
            tr(this, 'meta', void 0),
            (this.meta = t?.meta),
            (this.cause = r),
            (this.shape = t?.result?.error),
            (this.data = t?.result?.error.data),
            (this.name = 'TRPCClientError'),
            Object.setPrototypeOf(this, tn.prototype);
        }
      }
      function ti(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class ts {
        $request(e) {
          var t;
          return ((t = {
            links: this.links,
            op: { ...e, context: e.context ?? {}, id: ++this.requestId },
          }),
          eN((e) =>
            (function e(r = 0, n = t.op) {
              let i = t.links[r];
              if (!i)
                throw Error(
                  'No more links to execute - did you forget to add an ending link?'
                );
              return i({ op: n, next: (t) => e(r + 1, t) });
            })().subscribe(e)
          )).pipe((e) => {
            let t = 0,
              r = null,
              n = [];
            return eN(
              (i) => (
                t++,
                n.push(i),
                r ||
                  (r = e.subscribe({
                    next(e) {
                      for (let t of n) t.next?.(e);
                    },
                    error(e) {
                      for (let t of n) t.error?.(e);
                    },
                    complete() {
                      for (let e of n) e.complete?.();
                    },
                  })),
                {
                  unsubscribe() {
                    t--,
                      (function () {
                        if (0 === t && r) {
                          let e = r;
                          (r = null), e.unsubscribe();
                        }
                      })();
                    let e = n.findIndex((e) => e === i);
                    e > -1 && n.splice(e, 1);
                  },
                }
              )
            );
          });
        }
        async requestAsPromise(e) {
          try {
            let t = this.$request(e);
            return (
              await (function (e) {
                let t = new AbortController();
                return new Promise((r, n) => {
                  let i = !1;
                  function s() {
                    i || ((i = !0), a.unsubscribe());
                  }
                  t.signal.addEventListener('abort', () => {
                    n(t.signal.reason);
                  });
                  let a = e.subscribe({
                    next(e) {
                      (i = !0), r(e), s();
                    },
                    error(e) {
                      n(e);
                    },
                    complete() {
                      t.abort(), s();
                    },
                  });
                });
              })(t)
            ).result.data;
          } catch (e) {
            throw tn.from(e);
          }
        }
        query(e, t, r) {
          return this.requestAsPromise({
            type: 'query',
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        mutation(e, t, r) {
          return this.requestAsPromise({
            type: 'mutation',
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        subscription(e, t, r) {
          return this.$request({
            type: 'subscription',
            path: e,
            input: t,
            context: r.context,
            signal: r.signal,
          }).subscribe({
            next(e) {
              switch (e.result.type) {
                case 'state':
                  r.onConnectionStateChange?.(e.result);
                  break;
                case 'started':
                  r.onStarted?.({ context: e.context });
                  break;
                case 'stopped':
                  r.onStopped?.();
                  break;
                case 'data':
                case void 0:
                  r.onData?.(e.result.data);
              }
            },
            error(e) {
              r.onError?.(e);
            },
            complete() {
              r.onComplete?.();
            },
          });
        }
        constructor(e) {
          ti(this, 'links', void 0),
            ti(this, 'runtime', void 0),
            ti(this, 'requestId', void 0),
            (this.requestId = 0),
            (this.runtime = {}),
            (this.links = e.links.map((e) => e(this.runtime)));
        }
      }
      let ta = {
          query: 'query',
          mutate: 'mutation',
          subscribe: 'subscription',
        },
        to = (e) => ta[e];
      function tu(e) {
        let t = eD(({ path: t, args: r }) => {
          let n = [...t],
            i = to(n.pop()),
            s = n.join('.');
          return e[i](s, ...r);
        });
        return eI((r) =>
          e.hasOwnProperty(r) ? e[r] : '__untypedClient' === r ? e : t[r]
        );
      }
      function tl(e) {
        return tu(new ts(e));
      }
      function tc(e) {
        return e.__untypedClient;
      }
      let td = () => {
        throw Error(
          'Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new'
        );
      };
      function th(e) {
        let t = null,
          r = null,
          n = () => {
            clearTimeout(r), (r = null), (t = null);
          };
        function i() {
          let r = (function (t) {
            let r = [[]],
              n = 0;
            for (;;) {
              let i = t[n];
              if (!i) break;
              let s = r[r.length - 1];
              if (i.aborted) {
                i.reject?.(Error('Aborted')), n++;
                continue;
              }
              if (e.validate(s.concat(i).map((e) => e.key))) {
                s.push(i), n++;
                continue;
              }
              if (0 === s.length) {
                i.reject?.(Error('Input is too big for a single dispatch')),
                  n++;
                continue;
              }
              r.push([]);
            }
            return r;
          })(t);
          for (let t of (n(), r)) {
            if (!t.length) continue;
            let r = { items: t };
            for (let e of t) e.batch = r;
            e.fetch(r.items.map((e) => e.key))
              .then(async (e) => {
                for (let t of (await Promise.all(
                  e.map(async (e, t) => {
                    let n = r.items[t];
                    try {
                      let t = await Promise.resolve(e);
                      n.resolve?.(t);
                    } catch (e) {
                      n.reject?.(e);
                    }
                    (n.batch = null), (n.reject = null), (n.resolve = null);
                  })
                ),
                r.items))
                  t.reject?.(Error('Missing result')), (t.batch = null);
              })
              .catch((e) => {
                for (let t of r.items) t.reject?.(e), (t.batch = null);
              });
          }
        }
        return {
          load: function (e) {
            let n = {
                aborted: !1,
                key: e,
                batch: null,
                resolve: td,
                reject: td,
              },
              s = new Promise((e, r) => {
                (n.reject = r), (n.resolve = e), t || (t = []), t.push(n);
              });
            return r || (r = setTimeout(i)), s;
          },
        };
      }
      let tf = (e) => 'function' == typeof e;
      function tp(e) {
        return e
          ? 'input' in e
            ? e
            : { input: e, output: e }
          : {
              input: { serialize: (e) => e, deserialize: (e) => e },
              output: { serialize: (e) => e, deserialize: (e) => e },
            };
      }
      let tm = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
      function ty(e) {
        return 'input' in e
          ? e.transformer.input.serialize(e.input)
          : (function (e) {
              let t = {};
              for (let r = 0; r < e.length; r++) {
                let n = e[r];
                t[r] = n;
              }
              return t;
            })(e.inputs.map((t) => e.transformer.input.serialize(t)));
      }
      let tg = (e) => {
          let t = e.url.split('?'),
            r = t[0].replace(/\/$/, '') + '/' + e.path,
            n = [];
          if (
            (t[1] && n.push(t[1]),
            'inputs' in e && n.push('batch=1'),
            'query' === e.type || 'subscription' === e.type)
          ) {
            let t = ty(e);
            void 0 !== t &&
              'POST' !== e.methodOverride &&
              n.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
          }
          return n.length && (r += '?' + n.join('&')), r;
        },
        tb = (e) => {
          if ('query' === e.type && 'POST' !== e.methodOverride) return;
          let t = ty(e);
          return void 0 !== t ? JSON.stringify(t) : void 0;
        },
        tv = (e) =>
          tS({
            ...e,
            contentTypeHeader: 'application/json',
            getUrl: tg,
            getBody: tb,
          });
      class tw extends Error {
        constructor() {
          let e = 'AbortError';
          super(e), (this.name = e), (this.message = e);
        }
      }
      let t_ = (e) => {
        if (e?.aborted) {
          if ((e.throwIfAborted?.(), 'undefined' != typeof DOMException))
            throw new DOMException('AbortError', 'AbortError');
          throw new tw();
        }
      };
      async function tE(e) {
        t_(e.signal);
        let t = e.getUrl(e),
          r = e.getBody(e),
          { type: n } = e,
          i = await (async () => {
            let t = await e.headers();
            return Symbol.iterator in t ? Object.fromEntries(t) : t;
          })(),
          s = {
            ...(e.contentTypeHeader
              ? { 'content-type': e.contentTypeHeader }
              : {}),
            ...(e.trpcAcceptHeader
              ? { 'trpc-accept': e.trpcAcceptHeader }
              : void 0),
            ...i,
          };
        return (function (e) {
          if (e) return e;
          if ('undefined' != typeof window && tf(window.fetch))
            return window.fetch;
          if ('undefined' != typeof globalThis && tf(globalThis.fetch))
            return globalThis.fetch;
          throw Error('No fetch implementation found');
        })(e.fetch)(t, {
          method: e.methodOverride ?? tm[n],
          signal: e.signal,
          body: r,
          headers: s,
        });
      }
      async function tS(e) {
        let t = {},
          r = await tE(e);
        t.response = r;
        let n = await r.json();
        return (t.responseJSON = n), { json: n, meta: t };
      }
      class tR extends Error {
        constructor(e) {
          super(e?.message ?? 'WebSocket closed', { cause: e?.cause }),
            (this.name = 'TRPCWebSocketClosedError'),
            Object.setPrototypeOf(this, tR.prototype);
        }
      }
      function tO(e) {
        return e;
      }
      function tA(e) {
        return e.state.isPaused;
      }
      function tx(e) {
        return 'success' === e.state.status;
      }
      function tC(e, t, r) {
        if ('object' != typeof t || null === t) return;
        let n = e.getMutationCache(),
          i = e.getQueryCache(),
          s =
            r?.defaultOptions?.deserializeData ??
            e.getDefaultOptions().hydrate?.deserializeData ??
            tO,
          a = t.mutations || [],
          o = t.queries || [];
        a.forEach(({ state: t, ...i }) => {
          n.build(
            e,
            {
              ...e.getDefaultOptions().hydrate?.mutations,
              ...r?.defaultOptions?.mutations,
              ...i,
            },
            t
          );
        }),
          o.forEach(
            ({ queryKey: t, state: n, queryHash: a, meta: o, promise: u }) => {
              let l = i.get(a),
                c = void 0 === n.data ? n.data : s(n.data);
              if (l) {
                if (l.state.dataUpdatedAt < n.dataUpdatedAt) {
                  let { fetchStatus: e, ...t } = n;
                  l.setState({ ...t, data: c });
                }
              } else
                l = i.build(
                  e,
                  {
                    ...e.getDefaultOptions().hydrate?.queries,
                    ...r?.defaultOptions?.queries,
                    queryKey: t,
                    queryHash: a,
                    meta: o,
                  },
                  { ...n, data: c, fetchStatus: 'idle' }
                );
              if (u) {
                let e = Promise.resolve(u).then(s);
                l.fetch(void 0, { initialPromise: e });
              }
            }
          );
      }
      ej.BAD_GATEWAY,
        ej.SERVICE_UNAVAILABLE,
        ej.GATEWAY_TIMEOUT,
        ej.INTERNAL_SERVER_ERROR;
      var tN = ({ children: e, options: t = {}, state: r, queryClient: n }) => {
        let i = ed(n),
          [s, a] = el.useState(),
          o = el.useRef(t);
        return (
          (o.current = t),
          el.useMemo(() => {
            if (r) {
              if ('object' != typeof r) return;
              let e = i.getQueryCache(),
                t = r.queries || [],
                n = [],
                u = [];
              for (let r of t) {
                let t = e.get(r.queryHash);
                if (t) {
                  let e = r.state.dataUpdatedAt > t.state.dataUpdatedAt,
                    n = s?.find((e) => e.queryHash === r.queryHash);
                  e &&
                    (!n || r.state.dataUpdatedAt > n.state.dataUpdatedAt) &&
                    u.push(r);
                } else n.push(r);
              }
              n.length > 0 && tC(i, { queries: n }, o.current),
                u.length > 0 && a((e) => (e ? [...e, ...u] : u));
            }
          }, [i, s, r]),
          el.useEffect(() => {
            s && (tC(i, { queries: s }, o.current), a(void 0));
          }, [i, s]),
          e
        );
      };
      let tk = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
        tT = el.createContext?.(null);
      function tP(e, t, r) {
        let n = e.flatMap((e) => e.split('.'));
        if (!t && (!r || 'any' === r)) return n.length ? [n] : [];
        if ('infinite' === r && eL(t) && ('direction' in t || 'cursor' in t)) {
          let { cursor: e, direction: r, ...i } = t;
          return [n, { input: i, type: 'infinite' }];
        }
        return [
          n,
          {
            ...(void 0 !== t && t !== q && { input: t }),
            ...(r && 'any' !== r && { type: r }),
          },
        ];
      }
      function tD(e) {
        return tP(e, void 0, 'any');
      }
      let tI = (e) => {
        switch (e) {
          case 'queryOptions':
          case 'fetch':
          case 'ensureData':
          case 'prefetch':
          case 'getData':
          case 'setData':
          case 'setQueriesData':
            return 'query';
          case 'infiniteQueryOptions':
          case 'fetchInfinite':
          case 'prefetchInfinite':
          case 'getInfiniteData':
          case 'setInfiniteData':
            return 'infinite';
          case 'setMutationDefaults':
          case 'getMutationDefaults':
          case 'isMutating':
          case 'cancel':
          case 'invalidate':
          case 'refetch':
          case 'reset':
            return 'any';
        }
      };
      function tj(e) {
        let t = e instanceof ts ? e : tc(e);
        return eD((e) => {
          let r = e.path,
            n = r.join('.'),
            [i, s] = e.args;
          return {
            queryKey: tP(r, i, 'query'),
            queryFn: () => t.query(n, i, s?.trpc),
            ...s,
          };
        });
      }
      var tM = class extends Q {
        constructor(e, t) {
          super(),
            (this.options = t),
            (this.#R = e),
            (this.#O = null),
            (this.#A = $()),
            this.options.experimental_prefetchInRender ||
              this.#A.reject(
                Error(
                  'experimental_prefetchInRender feature flag is not enabled'
                )
              ),
            this.bindMethods(),
            this.setOptions(t);
        }
        #R;
        #x = void 0;
        #C = void 0;
        #N = void 0;
        #k;
        #T;
        #A;
        #O;
        #P;
        #D;
        #I;
        #j;
        #M;
        #U;
        #L = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#x.addObserver(this),
            tU(this.#x, this.options) ? this.#q() : this.updateResult(),
            this.#F());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return tL(this.#x, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return tL(this.#x, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          (this.listeners = new Set()),
            this.#B(),
            this.#Q(),
            this.#x.removeObserver(this);
        }
        setOptions(e, t) {
          let r = this.options,
            n = this.#x;
          if (
            ((this.options = this.#R.defaultQueryOptions(e)),
            void 0 !== this.options.enabled &&
              'boolean' != typeof this.options.enabled &&
              'function' != typeof this.options.enabled &&
              'boolean' != typeof O(this.options.enabled, this.#x))
          )
            throw Error(
              'Expected enabled to be a boolean or a callback that returns a boolean'
            );
          this.#z(),
            this.#x.setOptions(this.options),
            r._defaulted &&
              !P(this.options, r) &&
              this.#R
                .getQueryCache()
                .notify({
                  type: 'observerOptionsUpdated',
                  query: this.#x,
                  observer: this,
                });
          let i = this.hasListeners();
          i && tq(this.#x, n, this.options, r) && this.#q(),
            this.updateResult(t),
            i &&
              (this.#x !== n ||
                O(this.options.enabled, this.#x) !== O(r.enabled, this.#x) ||
                R(this.options.staleTime, this.#x) !==
                  R(r.staleTime, this.#x)) &&
              this.#Z();
          let s = this.#$();
          i &&
            (this.#x !== n ||
              O(this.options.enabled, this.#x) !== O(r.enabled, this.#x) ||
              s !== this.#U) &&
            this.#H(s);
        }
        getOptimisticResult(e) {
          let t = this.#R.getQueryCache().build(this.#R, e),
            r = this.createResult(t, e);
          return (
            P(this.getCurrentResult(), r) ||
              ((this.#N = r),
              (this.#T = this.options),
              (this.#k = this.#x.state)),
            r
          );
        }
        getCurrentResult() {
          return this.#N;
        }
        trackResult(e, t) {
          let r = {};
          return (
            Object.keys(e).forEach((n) => {
              Object.defineProperty(r, n, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackProp(n), t?.(n), e[n]),
              });
            }),
            r
          );
        }
        trackProp(e) {
          this.#L.add(e);
        }
        getCurrentQuery() {
          return this.#x;
        }
        refetch({ ...e } = {}) {
          return this.fetch({ ...e });
        }
        fetchOptimistic(e) {
          let t = this.#R.defaultQueryOptions(e),
            r = this.#R.getQueryCache().build(this.#R, t);
          return r.fetch().then(() => this.createResult(r, t));
        }
        fetch(e) {
          return this.#q({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#N)
          );
        }
        #q(e) {
          this.#z();
          let t = this.#x.fetch(this.options, e);
          return e?.throwOnError || (t = t.catch(_)), t;
        }
        #Z() {
          this.#B();
          let e = R(this.options.staleTime, this.#x);
          if (w || this.#N.isStale || !E(e)) return;
          let t = S(this.#N.dataUpdatedAt, e);
          this.#j = setTimeout(() => {
            this.#N.isStale || this.updateResult();
          }, t + 1);
        }
        #$() {
          return (
            ('function' == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#x)
              : this.options.refetchInterval) ?? !1
          );
        }
        #H(e) {
          this.#Q(),
            (this.#U = e),
            !w &&
              !1 !== O(this.options.enabled, this.#x) &&
              E(this.#U) &&
              0 !== this.#U &&
              (this.#M = setInterval(() => {
                (this.options.refetchIntervalInBackground || z.isFocused()) &&
                  this.#q();
              }, this.#U));
        }
        #F() {
          this.#Z(), this.#H(this.#$());
        }
        #B() {
          this.#j && (clearTimeout(this.#j), (this.#j = void 0));
        }
        #Q() {
          this.#M && (clearInterval(this.#M), (this.#M = void 0));
        }
        createResult(e, t) {
          let r;
          let n = this.#x,
            i = this.options,
            s = this.#N,
            a = this.#k,
            o = this.#T,
            u = e !== n ? e.state : this.#C,
            { state: l } = e,
            c = { ...l },
            d = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              s = !r && tU(e, t),
              a = r && tq(e, n, t, i);
            (s || a) && (c = { ...c, ...X(l.data, e.options) }),
              'isRestoring' === t._optimisticResults &&
                (c.fetchStatus = 'idle');
          }
          let { error: h, errorUpdatedAt: f, status: p } = c;
          if (t.select && void 0 !== c.data) {
            if (s && c.data === a?.data && t.select === this.#P) r = this.#D;
            else
              try {
                (this.#P = t.select),
                  (r = t.select(c.data)),
                  (r = M(s?.data, r, t)),
                  (this.#D = r),
                  (this.#O = null);
              } catch (e) {
                this.#O = e;
              }
          } else r = c.data;
          if (void 0 !== t.placeholderData && void 0 === r && 'pending' === p) {
            let e;
            if (
              s?.isPlaceholderData &&
              t.placeholderData === o?.placeholderData
            )
              e = s.data;
            else if (
              ((e =
                'function' == typeof t.placeholderData
                  ? t.placeholderData(this.#I?.state.data, this.#I)
                  : t.placeholderData),
              t.select && void 0 !== e)
            )
              try {
                (e = t.select(e)), (this.#O = null);
              } catch (e) {
                this.#O = e;
              }
            void 0 !== e && ((p = 'success'), (r = M(s?.data, e, t)), (d = !0));
          }
          this.#O &&
            ((h = this.#O), (r = this.#D), (f = Date.now()), (p = 'error'));
          let m = 'fetching' === c.fetchStatus,
            y = 'pending' === p,
            g = 'error' === p,
            b = y && m,
            v = void 0 !== r,
            w = {
              status: p,
              fetchStatus: c.fetchStatus,
              isPending: y,
              isSuccess: 'success' === p,
              isError: g,
              isInitialLoading: b,
              isLoading: b,
              data: r,
              dataUpdatedAt: c.dataUpdatedAt,
              error: h,
              errorUpdatedAt: f,
              failureCount: c.fetchFailureCount,
              failureReason: c.fetchFailureReason,
              errorUpdateCount: c.errorUpdateCount,
              isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
              isFetchedAfterMount:
                c.dataUpdateCount > u.dataUpdateCount ||
                c.errorUpdateCount > u.errorUpdateCount,
              isFetching: m,
              isRefetching: m && !y,
              isLoadingError: g && !v,
              isPaused: 'paused' === c.fetchStatus,
              isPlaceholderData: d,
              isRefetchError: g && v,
              isStale: tF(e, t),
              refetch: this.refetch,
              promise: this.#A,
            };
          if (this.options.experimental_prefetchInRender) {
            let t = (e) => {
                'error' === w.status
                  ? e.reject(w.error)
                  : void 0 !== w.data && e.resolve(w.data);
              },
              r = () => {
                t((this.#A = w.promise = $()));
              },
              i = this.#A;
            switch (i.status) {
              case 'pending':
                e.queryHash === n.queryHash && t(i);
                break;
              case 'fulfilled':
                ('error' === w.status || w.data !== i.value) && r();
                break;
              case 'rejected':
                ('error' !== w.status || w.error !== i.reason) && r();
            }
          }
          return w;
        }
        updateResult(e) {
          let t = this.#N,
            r = this.createResult(this.#x, this.options);
          if (
            ((this.#k = this.#x.state),
            (this.#T = this.options),
            void 0 !== this.#k.data && (this.#I = this.#x),
            P(r, t))
          )
            return;
          this.#N = r;
          let n = {};
          e?.listeners !== !1 &&
            (() => {
              if (!t) return !0;
              let { notifyOnChangeProps: e } = this.options,
                r = 'function' == typeof e ? e() : e;
              if ('all' === r || (!r && !this.#L.size)) return !0;
              let n = new Set(r ?? this.#L);
              return (
                this.options.throwOnError && n.add('error'),
                Object.keys(this.#N).some(
                  (e) => this.#N[e] !== t[e] && n.has(e)
                )
              );
            })() &&
            (n.listeners = !0),
            this.#W({ ...n, ...e });
        }
        #z() {
          let e = this.#R.getQueryCache().build(this.#R, this.options);
          if (e === this.#x) return;
          let t = this.#x;
          (this.#x = e),
            (this.#C = e.state),
            this.hasListeners() &&
              (t?.removeObserver(this), e.addObserver(this));
        }
        onQueryUpdate() {
          this.updateResult(), this.hasListeners() && this.#F();
        }
        #W(e) {
          B.batch(() => {
            e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#N);
              }),
              this.#R
                .getQueryCache()
                .notify({ query: this.#x, type: 'observerResultsUpdated' });
          });
        }
      };
      function tU(e, t) {
        return (
          (!1 !== O(t.enabled, e) &&
            void 0 === e.state.data &&
            !('error' === e.state.status && !1 === t.retryOnMount)) ||
          (void 0 !== e.state.data && tL(e, t, t.refetchOnMount))
        );
      }
      function tL(e, t, r) {
        if (!1 !== O(t.enabled, e)) {
          let n = 'function' == typeof r ? r(e) : r;
          return 'always' === n || (!1 !== n && tF(e, t));
        }
        return !1;
      }
      function tq(e, t, r, n) {
        return (
          (e !== t || !1 === O(n.enabled, e)) &&
          (!r.suspense || 'error' !== e.state.status) &&
          tF(e, r)
        );
      }
      function tF(e, t) {
        return !1 !== O(t.enabled, e) && e.isStaleByTime(R(t.staleTime, e));
      }
      var tB = el.createContext(
          (function () {
            let e = !1;
            return {
              clearReset: () => {
                e = !1;
              },
              reset: () => {
                e = !0;
              },
              isReset: () => e,
            };
          })()
        ),
        tQ = () => el.useContext(tB);
      function tz(e, t) {
        return 'function' == typeof e ? e(...t) : !!e;
      }
      function tZ() {}
      var t$ = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        tH = (e) => {
          el.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        tW = ({
          result: e,
          errorResetBoundary: t,
          throwOnError: r,
          query: n,
        }) =>
          e.isError &&
          !t.isReset() &&
          !e.isFetching &&
          n &&
          tz(r, [e.error, n]),
        tV = el.createContext(!1),
        tK = () => el.useContext(tV);
      tV.Provider;
      var tG = (e, t) => void 0 === t.state.data,
        tJ = (e) => {
          let t = e.staleTime;
          e.suspense &&
            ((e.staleTime =
              'function' == typeof t
                ? (...e) => Math.max(t(...e), 1e3)
                : Math.max(t ?? 1e3, 1e3)),
            'number' == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        tY = (e, t) => e.isLoading && e.isFetching && !t,
        tX = (e, t) => e?.suspense && t.isPending,
        t0 = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          });
      function t1(e, t, r) {
        let n = ed(r),
          i = tK(),
          s = tQ(),
          a = n.defaultQueryOptions(e);
        n.getDefaultOptions().queries?._experimental_beforeQuery?.(a),
          (a._optimisticResults = i ? 'isRestoring' : 'optimistic'),
          tJ(a),
          t$(a, s),
          tH(s);
        let o = !n.getQueryCache().get(a.queryHash),
          [u] = el.useState(() => new t(n, a)),
          l = u.getOptimisticResult(a),
          c = !i && !1 !== e.subscribed;
        if (
          (el.useSyncExternalStore(
            el.useCallback(
              (e) => {
                let t = c ? u.subscribe(B.batchCalls(e)) : tZ;
                return u.updateResult(), t;
              },
              [u, c]
            ),
            () => u.getCurrentResult(),
            () => u.getCurrentResult()
          ),
          el.useEffect(() => {
            u.setOptions(a, { listeners: !1 });
          }, [a, u]),
          tX(a, l))
        )
          throw t0(a, u, s);
        if (
          tW({
            result: l,
            errorResetBoundary: s,
            throwOnError: a.throwOnError,
            query: n.getQueryCache().get(a.queryHash),
          })
        )
          throw l.error;
        if (
          (n.getDefaultOptions().queries?._experimental_afterQuery?.(a, l),
          a.experimental_prefetchInRender && !w && tY(l, i))
        ) {
          let e = o ? t0(a, u, s) : n.getQueryCache().get(a.queryHash)?.promise;
          e?.catch(tZ).finally(() => {
            u.updateResult();
          });
        }
        return a.notifyOnChangeProps ? l : u.trackResult(l);
      }
      var t2 = class extends Q {
          #R;
          #N = void 0;
          #V;
          #K;
          constructor(e, t) {
            super(),
              (this.#R = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#G();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#R.defaultMutationOptions(e)),
              P(this.options, t) ||
                this.#R
                  .getMutationCache()
                  .notify({
                    type: 'observerOptionsUpdated',
                    mutation: this.#V,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              N(t.mutationKey) !== N(this.options.mutationKey)
                ? this.reset()
                : this.#V?.state.status === 'pending' &&
                  this.#V.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#V?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#G(), this.#W(e);
          }
          getCurrentResult() {
            return this.#N;
          }
          reset() {
            this.#V?.removeObserver(this),
              (this.#V = void 0),
              this.#G(),
              this.#W();
          }
          mutate(e, t) {
            return (
              (this.#K = t),
              this.#V?.removeObserver(this),
              (this.#V = this.#R
                .getMutationCache()
                .build(this.#R, this.options)),
              this.#V.addObserver(this),
              this.#V.execute(e)
            );
          }
          #G() {
            let e = this.#V?.state ?? er();
            this.#N = {
              ...e,
              isPending: 'pending' === e.status,
              isSuccess: 'success' === e.status,
              isError: 'error' === e.status,
              isIdle: 'idle' === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #W(e) {
            B.batch(() => {
              if (this.#K && this.hasListeners()) {
                let t = this.#N.variables,
                  r = this.#N.context;
                e?.type === 'success'
                  ? (this.#K.onSuccess?.(e.data, t, r),
                    this.#K.onSettled?.(e.data, null, t, r))
                  : e?.type === 'error' &&
                    (this.#K.onError?.(e.error, t, r),
                    this.#K.onSettled?.(void 0, e.error, t, r));
              }
              this.listeners.forEach((e) => {
                e(this.#N);
              });
            });
          }
        },
        t4 = class extends tM {
          constructor(e, t) {
            super(e, t);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(e, t) {
            super.setOptions({ ...e, behavior: es() }, t);
          }
          getOptimisticResult(e) {
            return (e.behavior = es()), super.getOptimisticResult(e);
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: 'forward' } },
            });
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: 'backward' } },
            });
          }
          createResult(e, t) {
            var r, n;
            let { state: i } = e,
              s = super.createResult(e, t),
              {
                isFetching: a,
                isRefetching: o,
                isError: u,
                isRefetchError: l,
              } = s,
              c = i.fetchMeta?.fetchMore?.direction,
              d = u && 'forward' === c,
              h = a && 'forward' === c,
              f = u && 'backward' === c,
              p = a && 'backward' === c;
            return {
              ...s,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: !!(r = i.data) && null != ea(t, r),
              hasPreviousPage:
                !!(n = i.data) && !!t.getPreviousPageParam && null != eo(t, n),
              isFetchNextPageError: d,
              isFetchingNextPage: h,
              isFetchPreviousPageError: f,
              isFetchingPreviousPage: p,
              isRefetchError: l && !d && !f,
              isRefetching: o && !h && !p,
            };
          }
        };
      function t5(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var t3 = class extends Q {
        #R;
        #J;
        #h;
        #Y;
        #f;
        #X;
        #ee;
        #et;
        constructor(e, t, r) {
          super(),
            (this.#R = e),
            (this.#Y = r),
            (this.#h = []),
            (this.#f = []),
            (this.#J = []),
            this.setQueries(t);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            this.#f.forEach((e) => {
              e.subscribe((t) => {
                this.#er(e, t);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            this.#f.forEach((e) => {
              e.destroy();
            });
        }
        setQueries(e, t, r) {
          (this.#h = e),
            (this.#Y = t),
            B.batch(() => {
              let e = this.#f,
                t = this.#en(this.#h);
              t.forEach((e) =>
                e.observer.setOptions(e.defaultedQueryOptions, r)
              );
              let n = t.map((e) => e.observer),
                i = n.map((e) => e.getCurrentResult()),
                s = n.some((t, r) => t !== e[r]);
              (e.length !== n.length || s) &&
                ((this.#f = n),
                (this.#J = i),
                this.hasListeners() &&
                  (t5(e, n).forEach((e) => {
                    e.destroy();
                  }),
                  t5(n, e).forEach((e) => {
                    e.subscribe((t) => {
                      this.#er(e, t);
                    });
                  }),
                  this.#W()));
            });
        }
        getCurrentResult() {
          return this.#J;
        }
        getQueries() {
          return this.#f.map((e) => e.getCurrentQuery());
        }
        getObservers() {
          return this.#f;
        }
        getOptimisticResult(e, t) {
          let r = this.#en(e).map((e) =>
            e.observer.getOptimisticResult(e.defaultedQueryOptions)
          );
          return [r, (e) => this.#ei(e ?? r, t), () => this.#es(r, e)];
        }
        #es(e, t) {
          let r = this.#en(t);
          return r.map((t, n) => {
            let i = e[n];
            return t.defaultedQueryOptions.notifyOnChangeProps
              ? i
              : t.observer.trackResult(i, (e) => {
                  r.forEach((t) => {
                    t.observer.trackProp(e);
                  });
                });
          });
        }
        #ei(e, t) {
          return t
            ? ((this.#X && this.#J === this.#et && t === this.#ee) ||
                ((this.#ee = t),
                (this.#et = this.#J),
                (this.#X = T(this.#X, t(e)))),
              this.#X)
            : e;
        }
        #en(e) {
          let t = new Map(this.#f.map((e) => [e.options.queryHash, e])),
            r = [];
          return (
            e.forEach((e) => {
              let n = this.#R.defaultQueryOptions(e),
                i = t.get(n.queryHash);
              i
                ? r.push({ defaultedQueryOptions: n, observer: i })
                : r.push({
                    defaultedQueryOptions: n,
                    observer: new tM(this.#R, n),
                  });
            }),
            r
          );
        }
        #er(e, t) {
          let r = this.#f.indexOf(e);
          -1 !== r &&
            ((this.#J = (function (e, t, r) {
              let n = e.slice(0);
              return (n[t] = r), n;
            })(this.#J, r, t)),
            this.#W());
        }
        #W() {
          this.hasListeners() &&
            this.#X !==
              this.#ei(this.#es(this.#J, this.#h), this.#Y?.combine) &&
            B.batch(() => {
              this.listeners.forEach((e) => {
                e(this.#J);
              });
            });
        }
      };
      function t8({ queries: e, ...t }, r) {
        let n = ed(r),
          i = tK(),
          s = tQ(),
          a = el.useMemo(
            () =>
              e.map((e) => {
                let t = n.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = i ? 'isRestoring' : 'optimistic'), t
                );
              }),
            [e, n, i]
          );
        a.forEach((e) => {
          tJ(e), t$(e, s);
        }),
          tH(s);
        let [o] = el.useState(() => new t3(n, a, t)),
          [u, l, c] = o.getOptimisticResult(a, t.combine),
          d = !i && !1 !== t.subscribed;
        el.useSyncExternalStore(
          el.useCallback(
            (e) => (d ? o.subscribe(B.batchCalls(e)) : tZ),
            [o, d]
          ),
          () => o.getCurrentResult(),
          () => o.getCurrentResult()
        ),
          el.useEffect(() => {
            o.setQueries(a, t, { listeners: !1 });
          }, [a, t, o]);
        let h = u.some((e, t) => tX(a[t], e))
          ? u.flatMap((e, t) => {
              let r = a[t];
              if (r) {
                let t = new tM(n, r);
                if (tX(r, e)) return t0(r, t, s);
                tY(e, i) && t0(r, t, s);
              }
              return [];
            })
          : [];
        if (h.length > 0) throw Promise.all(h);
        let f = u.find((e, t) => {
          let r = a[t];
          return (
            r &&
            tW({
              result: e,
              errorResetBoundary: s,
              throwOnError: r.throwOnError,
              query: n.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (f?.error) throw f.error;
        return l(c());
      }
      function t6(e, t, r) {
        let n = e[0],
          i = e[1]?.input;
        return (
          r &&
            (i = {
              ...(i ?? {}),
              ...(r.pageParam ? { cursor: r.pageParam } : {}),
              direction: r.direction,
            }),
          [n.join('.'), i, t?.trpc]
        );
      }
      function t9(e) {
        return { path: e.path.join('.') };
      }
      function t7(e) {
        let t = t9(e);
        return el.useMemo(() => t, [t]);
      }
      async function re(e, t, r) {
        let n = t.getQueryCache().build(t, { queryKey: r });
        n.setState({ data: [], status: 'success' });
        let i = [];
        for await (let t of e) i.push(t), n.setState({ data: [...i] });
        return i;
      }
      let rt = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
      function rr(e) {
        let t = e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
          r = e?.context ?? tT;
        function n() {
          let e = el.useContext(r);
          if (!e)
            throw Error(
              'Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?'
            );
          return e;
        }
        function i(e, t) {
          let { queryClient: r, ssrState: i } = n();
          return i &&
            'mounted' !== i &&
            r.getQueryCache().find({ queryKey: e })?.state.status === 'error'
            ? { retryOnMount: !1, ...t }
            : t;
        }
        return {
          Provider: (e) => {
            let { abortOnUnmount: t = !1, queryClient: n, ssrContext: i } = e,
              [s, a] = el.useState(e.ssrState ?? !1),
              o = e.client instanceof ts ? e.client : tc(e.client),
              u = el.useMemo(
                () =>
                  (function (e) {
                    let { client: t, queryClient: r } = e,
                      n = t instanceof ts ? t : tc(t);
                    return {
                      infiniteQueryOptions: (e, t, r) => {
                        let i = t[1]?.input === q,
                          s = async (e) => {
                            let i = {
                              ...r,
                              trpc: {
                                ...r?.trpc,
                                ...(r?.trpc?.abortOnUnmount
                                  ? { signal: e.signal }
                                  : { signal: null }),
                              },
                            };
                            return await n.query(
                              ...t6(t, i, {
                                direction: e.direction,
                                pageParam: e.pageParam,
                              })
                            );
                          };
                        return Object.assign(
                          {
                            ...r,
                            initialData: r?.initialData,
                            queryKey: t,
                            queryFn: i ? q : s,
                            initialPageParam: r?.initialCursor ?? null,
                          },
                          { trpc: t9({ path: e }) }
                        );
                      },
                      queryOptions: (e, t, i) => {
                        let s = t[1]?.input === q,
                          a = async (e) => {
                            let s = {
                                ...i,
                                trpc: {
                                  ...i?.trpc,
                                  ...(i?.trpc?.abortOnUnmount
                                    ? { signal: e.signal }
                                    : { signal: null }),
                                },
                              },
                              a = await n.query(...t6(t, s));
                            return eB(a) ? re(a, r, t) : a;
                          };
                        return Object.assign(
                          {
                            ...i,
                            initialData: i?.initialData,
                            queryKey: t,
                            queryFn: s ? q : a,
                          },
                          { trpc: t9({ path: e }) }
                        );
                      },
                      fetchQuery: (e, t) =>
                        r.fetchQuery({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...t6(e, t)),
                        }),
                      fetchInfiniteQuery: (e, t) =>
                        r.fetchInfiniteQuery({
                          ...t,
                          queryKey: e,
                          queryFn: ({ pageParam: r, direction: i }) =>
                            n.query(
                              ...t6(e, t, { pageParam: r, direction: i })
                            ),
                          initialPageParam: t?.initialCursor ?? null,
                        }),
                      prefetchQuery: (e, t) =>
                        r.prefetchQuery({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...t6(e, t)),
                        }),
                      prefetchInfiniteQuery: (e, t) =>
                        r.prefetchInfiniteQuery({
                          ...t,
                          queryKey: e,
                          queryFn: ({ pageParam: r, direction: i }) =>
                            n.query(
                              ...t6(e, t, { pageParam: r, direction: i })
                            ),
                          initialPageParam: t?.initialCursor ?? null,
                        }),
                      ensureQueryData: (e, t) =>
                        r.ensureQueryData({
                          ...t,
                          queryKey: e,
                          queryFn: () => n.query(...t6(e, t)),
                        }),
                      invalidateQueries: (e, t, n) =>
                        r.invalidateQueries({ ...t, queryKey: e }, n),
                      resetQueries: (e, t, n) =>
                        r.resetQueries({ ...t, queryKey: e }, n),
                      refetchQueries: (e, t, n) =>
                        r.refetchQueries({ ...t, queryKey: e }, n),
                      cancelQuery: (e, t) =>
                        r.cancelQueries({ queryKey: e }, t),
                      setQueryData: (e, t, n) => r.setQueryData(e, t, n),
                      setQueriesData: (e, t, n, i) =>
                        r.setQueriesData({ ...t, queryKey: e }, n, i),
                      getQueryData: (e) => r.getQueryData(e),
                      setInfiniteQueryData: (e, t, n) =>
                        r.setQueryData(e, t, n),
                      getInfiniteQueryData: (e) => r.getQueryData(e),
                      setMutationDefaults: (t, i) => {
                        let s = t[0];
                        return r.setMutationDefaults(
                          t,
                          'function' == typeof i
                            ? i({
                                canonicalMutationFn: (t) =>
                                  n.mutation(...t6([s, { input: t }], e)),
                              })
                            : i
                        );
                      },
                      getMutationDefaults: (e) => r.getMutationDefaults(e),
                      isMutating: (e) => r.isMutating({ ...e, exact: !0 }),
                    };
                  })({ client: o, queryClient: n }),
                [o, n]
              ),
              l = el.useMemo(
                () => ({
                  abortOnUnmount: t,
                  queryClient: n,
                  client: o,
                  ssrContext: i ?? null,
                  ssrState: s,
                  ...u,
                }),
                [t, o, u, n, i, s]
              );
            return (
              el.useEffect(() => {
                a((e) => !!e && 'mounted');
              }, []),
              el.createElement(r.Provider, { value: l }, e.children)
            );
          },
          createClient: tl,
          useContext: n,
          useUtils: n,
          useQuery: function (t, r, s) {
            let {
                abortOnUnmount: a,
                client: o,
                ssrState: u,
                queryClient: l,
                prefetchQuery: c,
              } = n(),
              d = tP(t, r, 'query'),
              h = l.getQueryDefaults(d),
              f = r === q;
            'undefined' != typeof window ||
              'prepass' !== u ||
              s?.trpc?.ssr === !1 ||
              (s?.enabled ?? h?.enabled) === !1 ||
              f ||
              l.getQueryCache().find({ queryKey: d }) ||
              c(d, s);
            let p = i(d, { ...h, ...s }),
              m = s?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? a,
              y = t1(
                {
                  ...p,
                  queryKey: d,
                  queryFn: f
                    ? r
                    : async (e) => {
                        let t = {
                            ...p,
                            trpc: {
                              ...p?.trpc,
                              ...(m ? { signal: e.signal } : { signal: null }),
                            },
                          },
                          r = await o.query(...t6(d, t));
                        return eB(r) ? re(r, l, d) : r;
                      },
                },
                tM,
                l
              );
            return (y.trpc = t7({ path: t })), y;
          },
          usePrefetchQuery: function (t, r, i) {
            let s = n(),
              a = tP(t, r, 'query'),
              o = r === q,
              u =
                i?.trpc?.abortOnUnmount ??
                e?.abortOnUnmount ??
                s.abortOnUnmount;
            !(function (e, t) {
              let r = ed(void 0);
              r.getQueryState(e.queryKey) || r.prefetchQuery(e);
            })({
              ...i,
              queryKey: a,
              queryFn: o
                ? r
                : (e) => {
                    let t = {
                      trpc: { ...i?.trpc, ...(u ? { signal: e.signal } : {}) },
                    };
                    return s.client.query(...t6(a, t));
                  },
            });
          },
          useSuspenseQuery: function (t, r, i) {
            var s, a;
            let o = n(),
              u = tP(t, r, 'query'),
              l =
                i?.trpc?.abortOnUnmount ??
                e?.abortOnUnmount ??
                o.abortOnUnmount,
              c =
                ((s = {
                  ...i,
                  queryKey: u,
                  queryFn: (e) => {
                    let t = {
                      ...i,
                      trpc: {
                        ...i?.trpc,
                        ...(l ? { signal: e.signal } : { signal: null }),
                      },
                    };
                    return o.client.query(...t6(u, t));
                  },
                }),
                (a = o.queryClient),
                t1(
                  {
                    ...s,
                    enabled: !0,
                    suspense: !0,
                    throwOnError: tG,
                    placeholderData: void 0,
                  },
                  tM,
                  a
                ));
            return (c.trpc = t7({ path: t })), [c.data, c];
          },
          useQueries: (e, t) => {
            let {
                ssrState: r,
                queryClient: i,
                prefetchQuery: s,
                client: a,
              } = n(),
              o = e(tj(a));
            if ('undefined' == typeof window && 'prepass' === r)
              for (let e of o)
                e.trpc?.ssr === !1 ||
                  i.getQueryCache().find({ queryKey: e.queryKey }) ||
                  s(e.queryKey, e);
            return t8(
              {
                queries: o.map((e) => ({ ...e, queryKey: e.queryKey })),
                combine: t?.combine,
              },
              i
            );
          },
          useSuspenseQueries: (e) => {
            var t;
            let { queryClient: r, client: i } = n(),
              s = t8(
                {
                  ...(t = {
                    queries: e(tj(i)).map((e) => ({
                      ...e,
                      queryFn: e.queryFn,
                      queryKey: e.queryKey,
                    })),
                  }),
                  queries: t.queries.map((e) => ({
                    ...e,
                    suspense: !0,
                    throwOnError: tG,
                    enabled: !0,
                    placeholderData: void 0,
                  })),
                },
                r
              );
            return [s.map((e) => e.data), s];
          },
          useMutation: function (e, r) {
            let { client: i, queryClient: s } = n(),
              a = tD(e),
              o = s.defaultMutationOptions(s.getMutationDefaults(a)),
              u = (function (e, t) {
                let r = ed(t),
                  [n] = el.useState(() => new t2(r, e));
                el.useEffect(() => {
                  n.setOptions(e);
                }, [n, e]);
                let i = el.useSyncExternalStore(
                    el.useCallback((e) => n.subscribe(B.batchCalls(e)), [n]),
                    () => n.getCurrentResult(),
                    () => n.getCurrentResult()
                  ),
                  s = el.useCallback(
                    (e, t) => {
                      n.mutate(e, t).catch(tZ);
                    },
                    [n]
                  );
                if (i.error && tz(n.options.throwOnError, [i.error]))
                  throw i.error;
                return { ...i, mutate: s, mutateAsync: i.mutate };
              })(
                {
                  ...r,
                  mutationKey: a,
                  mutationFn: (t) => i.mutation(...t6([e, { input: t }], r)),
                  onSuccess: (...e) =>
                    t({
                      originalFn: () =>
                        r?.onSuccess?.(...e) ?? o?.onSuccess?.(...e),
                      queryClient: s,
                      meta: r?.meta ?? o?.meta ?? {},
                    }),
                },
                s
              );
            return (u.trpc = t7({ path: e })), u;
          },
          useSubscription: function (e, t, r) {
            let i = r?.enabled ?? t !== q,
              s = N(tP(e, t, 'any')),
              { client: a } = n(),
              o = el.useRef(r);
            o.current = r;
            let u = el.useRef(new Set([])),
              l = el.useCallback((e) => {
                u.current.add(e);
              }, []),
              c = el.useRef(null),
              d = el.useCallback(() => {
                if ((c.current?.(), y(h), !i)) return;
                let r = !1,
                  n = a.subscription(e.join('.'), t ?? void 0, {
                    onStarted: () => {
                      r ||
                        (o.current.onStarted?.(),
                        y((e) => ({ ...e, status: 'pending', error: null })));
                    },
                    onData: (e) => {
                      r ||
                        (o.current.onData?.(e),
                        y((t) => ({
                          ...t,
                          status: 'pending',
                          data: e,
                          error: null,
                        })));
                    },
                    onError: (e) => {
                      r ||
                        (o.current.onError?.(e),
                        y((t) => ({ ...t, status: 'error', error: e })));
                    },
                    onConnectionStateChange: (e) => {
                      let t = { status: e.state, error: e.error };
                      y((e) => ({ ...e, ...t }));
                    },
                  });
                c.current = () => {
                  (r = !0), n.unsubscribe();
                };
              }, [s, i]),
              h = el.useCallback(
                () =>
                  i
                    ? {
                        data: void 0,
                        error: null,
                        status: 'connecting',
                        reset: d,
                      }
                    : { data: void 0, error: null, status: 'idle', reset: d },
                [i, d]
              ),
              f = el.useRef(h()),
              [p, m] = el.useState(rt(f.current, l));
            p.reset = d;
            let y = el.useCallback(
              (e) => {
                let t = f.current,
                  r = (f.current = e(t)),
                  n = !1;
                for (let e of u.current)
                  if (t[e] !== r[e]) {
                    n = !0;
                    break;
                  }
                n && m(rt(r, l));
              },
              [l]
            );
            return (
              el.useEffect(() => {
                if (i)
                  return (
                    d(),
                    () => {
                      c.current?.();
                    }
                  );
              }, [d, i]),
              p
            );
          },
          useInfiniteQuery: function (e, t, r) {
            let {
                client: s,
                ssrState: a,
                prefetchInfiniteQuery: o,
                queryClient: u,
                abortOnUnmount: l,
              } = n(),
              c = tP(e, t, 'infinite'),
              d = u.getQueryDefaults(c),
              h = t === q;
            'undefined' != typeof window ||
              'prepass' !== a ||
              r?.trpc?.ssr === !1 ||
              (r?.enabled ?? d?.enabled) === !1 ||
              h ||
              u.getQueryCache().find({ queryKey: c }) ||
              o(c, { ...d, ...r });
            let f = i(c, { ...d, ...r }),
              p = r?.trpc?.abortOnUnmount ?? l,
              m = t1(
                {
                  ...f,
                  initialPageParam: r.initialCursor ?? null,
                  persister: r.persister,
                  queryKey: c,
                  queryFn: h
                    ? t
                    : (e) => {
                        let t = {
                          ...f,
                          trpc: {
                            ...f?.trpc,
                            ...(p ? { signal: e.signal } : { signal: null }),
                          },
                        };
                        return s.query(
                          ...t6(c, t, {
                            pageParam: e.pageParam ?? r.initialCursor,
                            direction: e.direction,
                          })
                        );
                      },
                },
                t4,
                u
              );
            return (m.trpc = t7({ path: e })), m;
          },
          usePrefetchInfiniteQuery: function (e, t, r) {
            let s = n(),
              a = tP(e, t, 'infinite'),
              o = s.queryClient.getQueryDefaults(a),
              u = t === q,
              l = i(a, { ...o, ...r }),
              c = r?.trpc?.abortOnUnmount ?? s.abortOnUnmount;
            !(function (e, t) {
              let r = ed(void 0);
              r.getQueryState(e.queryKey) || r.prefetchInfiniteQuery(e);
            })({
              ...r,
              initialPageParam: r.initialCursor ?? null,
              queryKey: a,
              queryFn: u
                ? t
                : (e) => {
                    let t = {
                      ...l,
                      trpc: { ...l?.trpc, ...(c ? { signal: e.signal } : {}) },
                    };
                    return s.client.query(
                      ...t6(a, t, {
                        pageParam: e.pageParam ?? r.initialCursor,
                        direction: e.direction,
                      })
                    );
                  },
            });
          },
          useSuspenseInfiniteQuery: function (e, t, r) {
            var s, a;
            let o = n(),
              u = tP(e, t, 'infinite'),
              l = o.queryClient.getQueryDefaults(u),
              c = i(u, { ...l, ...r }),
              d = r?.trpc?.abortOnUnmount ?? o.abortOnUnmount,
              h =
                ((s = {
                  ...r,
                  initialPageParam: r.initialCursor ?? null,
                  queryKey: u,
                  queryFn: (e) => {
                    let t = {
                      ...c,
                      trpc: { ...c?.trpc, ...(d ? { signal: e.signal } : {}) },
                    };
                    return o.client.query(
                      ...t6(u, t, {
                        pageParam: e.pageParam ?? r.initialCursor,
                        direction: e.direction,
                      })
                    );
                  },
                }),
                (a = o.queryClient),
                t1(
                  { ...s, enabled: !0, suspense: !0, throwOnError: tG },
                  t4,
                  a
                ));
            return (h.trpc = t7({ path: e })), [h.data, h];
          },
        };
      }
      let rn = (e) => e.queryClient ?? new eu(e.queryClientConfig);
      var ri = r(4233);
      function rs(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var ra = r(7840);
      let { toString: ro } = Object.prototype,
        { getPrototypeOf: ru } = Object,
        rl = ((e) => (t) => {
          let r = ro.call(t);
          return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        rc = (e) => ((e = e.toLowerCase()), (t) => rl(t) === e),
        rd = (e) => (t) => typeof t === e,
        { isArray: rh } = Array,
        rf = rd('undefined'),
        rp = rc('ArrayBuffer'),
        rm = rd('string'),
        ry = rd('function'),
        rg = rd('number'),
        rb = (e) => null !== e && 'object' == typeof e,
        rv = (e) => {
          if ('object' !== rl(e)) return !1;
          let t = ru(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        rw = rc('Date'),
        r_ = rc('File'),
        rE = rc('Blob'),
        rS = rc('FileList'),
        rR = rc('URLSearchParams'),
        [rO, rA, rx, rC] = [
          'ReadableStream',
          'Request',
          'Response',
          'Headers',
        ].map(rc);
      function rN(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != e) {
          if (('object' != typeof e && (e = [e]), rh(e)))
            for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
          else {
            let i;
            let s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = s.length;
            for (n = 0; n < a; n++) (i = s[n]), t.call(null, e[i], i, e);
          }
        }
      }
      function rk(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e),
          i = n.length;
        for (; i-- > 0; ) if (t === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let rT =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
                ? window
                : global,
        rP = (e) => !rf(e) && e !== rT,
        rD = (
          (e) => (t) =>
            e && t instanceof e
        )('undefined' != typeof Uint8Array && ru(Uint8Array)),
        rI = rc('HTMLFormElement'),
        rj = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        rM = rc('RegExp'),
        rU = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          rN(r, (r, i) => {
            let s;
            !1 !== (s = t(r, i, e)) && (n[i] = s || r);
          }),
            Object.defineProperties(e, n);
        },
        rL = 'abcdefghijklmnopqrstuvwxyz',
        rq = '0123456789',
        rF = { DIGIT: rq, ALPHA: rL, ALPHA_DIGIT: rL + rL.toUpperCase() + rq },
        rB = rc('AsyncFunction'),
        rQ =
          ((s = 'function' == typeof setImmediate),
          (a = ry(rT.postMessage)),
          s
            ? setImmediate
            : a
              ? ((e, t) => (
                  rT.addEventListener(
                    'message',
                    ({ source: r, data: n }) => {
                      r === rT && n === e && t.length && t.shift()();
                    },
                    !1
                  ),
                  (r) => {
                    t.push(r), rT.postMessage(e, '*');
                  }
                ))(`axios@${Math.random()}`, [])
              : (e) => setTimeout(e)),
        rz =
          'undefined' != typeof queueMicrotask
            ? queueMicrotask.bind(rT)
            : (void 0 !== ra && ra.nextTick) || rQ,
        rZ = {
          isArray: rh,
          isArrayBuffer: rp,
          isBuffer: function (e) {
            return (
              null !== e &&
              !rf(e) &&
              null !== e.constructor &&
              !rf(e.constructor) &&
              ry(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (('function' == typeof FormData && e instanceof FormData) ||
                (ry(e.append) &&
                  ('formdata' === (t = rl(e)) ||
                    ('object' === t &&
                      ry(e.toString) &&
                      '[object FormData]' === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && rp(e.buffer);
          },
          isString: rm,
          isNumber: rg,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: rb,
          isPlainObject: rv,
          isReadableStream: rO,
          isRequest: rA,
          isResponse: rx,
          isHeaders: rC,
          isUndefined: rf,
          isDate: rw,
          isFile: r_,
          isBlob: rE,
          isRegExp: rM,
          isFunction: ry,
          isStream: (e) => rb(e) && ry(e.pipe),
          isURLSearchParams: rR,
          isTypedArray: rD,
          isFileList: rS,
          forEach: rN,
          merge: function e() {
            let { caseless: t } = (rP(this) && this) || {},
              r = {},
              n = (n, i) => {
                let s = (t && rk(r, i)) || i;
                rv(r[s]) && rv(n)
                  ? (r[s] = e(r[s], n))
                  : rv(n)
                    ? (r[s] = e({}, n))
                    : rh(n)
                      ? (r[s] = n.slice())
                      : (r[s] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && rN(arguments[e], n);
            return r;
          },
          extend: (e, t, r, { allOwnKeys: n } = {}) => (
            rN(
              t,
              (t, n) => {
                r && ry(t) ? (e[n] = rs(t, r)) : (e[n] = t);
              },
              { allOwnKeys: n }
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, r, n) => {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, 'super', { value: t.prototype }),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: (e, t, r, n) => {
            let i, s, a;
            let o = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (s = (i = Object.getOwnPropertyNames(e)).length; s-- > 0; )
                (a = i[s]),
                  (!n || n(a, e, t)) && !o[a] && ((t[a] = e[a]), (o[a] = !0));
              e = !1 !== r && ru(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: rl,
          kindOfTest: rc,
          endsWith: (e, t, r) => {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: (e) => {
            if (!e) return null;
            if (rh(e)) return e;
            let t = e.length;
            if (!rg(t)) return null;
            let r = Array(t);
            for (; t-- > 0; ) r[t] = e[t];
            return r;
          },
          forEachEntry: (e, t) => {
            let r;
            let n = (e && e[Symbol.iterator]).call(e);
            for (; (r = n.next()) && !r.done; ) {
              let n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let r;
            let n = [];
            for (; null !== (r = e.exec(t)); ) n.push(r);
            return n;
          },
          isHTMLForm: rI,
          hasOwnProperty: rj,
          hasOwnProp: rj,
          reduceDescriptors: rU,
          freezeMethods: (e) => {
            rU(e, (t, r) => {
              if (ry(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(r))
                return !1;
              if (ry(e[r])) {
                if (((t.enumerable = !1), 'writable' in t)) {
                  t.writable = !1;
                  return;
                }
                t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  });
              }
            });
          },
          toObjectSet: (e, t) => {
            let r = {};
            return (
              ((e) => {
                e.forEach((e) => {
                  r[e] = !0;
                });
              })(rh(e) ? e : String(e).split(t)),
              r
            );
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
                return t.toUpperCase() + r;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e = +e)) ? e : t,
          findKey: rk,
          global: rT,
          isContextDefined: rP,
          ALPHABET: rF,
          generateString: (e = 16, t = rF.ALPHA_DIGIT) => {
            let r = '',
              { length: n } = t;
            for (; e--; ) r += t[(Math.random() * n) | 0];
            return r;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              ry(e.append) &&
              'FormData' === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            let t = Array(10),
              r = (e, n) => {
                if (rb(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!('toJSON' in e)) {
                    t[n] = e;
                    let i = rh(e) ? [] : {};
                    return (
                      rN(e, (e, t) => {
                        let s = r(e, n + 1);
                        rf(s) || (i[t] = s);
                      }),
                      (t[n] = void 0),
                      i
                    );
                  }
                }
                return e;
              };
            return r(e, 0);
          },
          isAsyncFn: rB,
          isThenable: (e) => e && (rb(e) || ry(e)) && ry(e.then) && ry(e.catch),
          setImmediate: rQ,
          asap: rz,
        };
      function r$(e, t, r, n, i) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = 'AxiosError'),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          i &&
            ((this.response = i), (this.status = i.status ? i.status : null));
      }
      rZ.inherits(r$, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: rZ.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let rH = r$.prototype,
        rW = {};
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED',
        'ERR_NOT_SUPPORT',
        'ERR_INVALID_URL',
      ].forEach((e) => {
        rW[e] = { value: e };
      }),
        Object.defineProperties(r$, rW),
        Object.defineProperty(rH, 'isAxiosError', { value: !0 }),
        (r$.from = (e, t, r, n, i, s) => {
          let a = Object.create(rH);
          return (
            rZ.toFlatObject(
              e,
              a,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => 'isAxiosError' !== e
            ),
            r$.call(a, e.message, t, r, n, i),
            (a.cause = e),
            (a.name = e.name),
            s && Object.assign(a, s),
            a
          );
        });
      var rV = r(2796).hp;
      function rK(e) {
        return rZ.isPlainObject(e) || rZ.isArray(e);
      }
      function rG(e) {
        return rZ.endsWith(e, '[]') ? e.slice(0, -2) : e;
      }
      function rJ(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = rG(e)), !r && t ? '[' + e + ']' : e;
              })
              .join(r ? '.' : '')
          : t;
      }
      let rY = rZ.toFlatObject(rZ, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        }),
        rX = function (e, t, r) {
          if (!rZ.isObject(e)) throw TypeError('target must be an object');
          t = t || new FormData();
          let n = (r = rZ.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !rZ.isUndefined(t[e]);
              }
            )).metaTokens,
            i = r.visitor || l,
            s = r.dots,
            a = r.indexes,
            o =
              (r.Blob || ('undefined' != typeof Blob && Blob)) &&
              rZ.isSpecCompliantForm(t);
          if (!rZ.isFunction(i)) throw TypeError('visitor must be a function');
          function u(e) {
            if (null === e) return '';
            if (rZ.isDate(e)) return e.toISOString();
            if (!o && rZ.isBlob(e))
              throw new r$('Blob is not supported. Use a Buffer instead.');
            return rZ.isArrayBuffer(e) || rZ.isTypedArray(e)
              ? o && 'function' == typeof Blob
                ? new Blob([e])
                : rV.from(e)
              : e;
          }
          function l(e, r, i) {
            let o = e;
            if (e && !i && 'object' == typeof e) {
              if (rZ.endsWith(r, '{}'))
                (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
              else {
                var l;
                if (
                  (rZ.isArray(e) && ((l = e), rZ.isArray(l) && !l.some(rK))) ||
                  ((rZ.isFileList(e) || rZ.endsWith(r, '[]')) &&
                    (o = rZ.toArray(e)))
                )
                  return (
                    (r = rG(r)),
                    o.forEach(function (e, n) {
                      rZ.isUndefined(e) ||
                        null === e ||
                        t.append(
                          !0 === a ? rJ([r], n, s) : null === a ? r : r + '[]',
                          u(e)
                        );
                    }),
                    !1
                  );
              }
            }
            return !!rK(e) || (t.append(rJ(i, r, s), u(e)), !1);
          }
          let c = [],
            d = Object.assign(rY, {
              defaultVisitor: l,
              convertValue: u,
              isVisitable: rK,
            });
          if (!rZ.isObject(e)) throw TypeError('data must be an object');
          return (
            !(function e(r, n) {
              if (!rZ.isUndefined(r)) {
                if (-1 !== c.indexOf(r))
                  throw Error('Circular reference detected in ' + n.join('.'));
                c.push(r),
                  rZ.forEach(r, function (r, s) {
                    !0 ===
                      (!(rZ.isUndefined(r) || null === r) &&
                        i.call(t, r, rZ.isString(s) ? s.trim() : s, n, d)) &&
                      e(r, n ? n.concat(s) : [s]);
                  }),
                  c.pop();
              }
            })(e),
            t
          );
        };
      function r0(e) {
        let t = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\0',
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function r1(e, t) {
        (this._pairs = []), e && rX(e, this, t);
      }
      let r2 = r1.prototype;
      function r4(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      function r5(e, t, r) {
        let n;
        if (!t) return e;
        let i = (r && r.encode) || r4;
        rZ.isFunction(r) && (r = { serialize: r });
        let s = r && r.serialize;
        if (
          (n = s
            ? s(t, r)
            : rZ.isURLSearchParams(t)
              ? t.toString()
              : new r1(t, r).toString(i))
        ) {
          let t = e.indexOf('#');
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf('?') ? '?' : '&') + n);
        }
        return e;
      }
      (r2.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (r2.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, r0);
              }
            : r0;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + '=' + t(e[1]);
            }, '')
            .join('&');
        });
      class r3 {
        constructor() {
          this.handlers = [];
        }
        use(e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          rZ.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      }
      let r8 = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        r6 = 'undefined' != typeof URLSearchParams ? URLSearchParams : r1,
        r9 = 'undefined' != typeof FormData ? FormData : null,
        r7 = 'undefined' != typeof Blob ? Blob : null,
        ne = 'undefined' != typeof window && 'undefined' != typeof document,
        nt = ('object' == typeof navigator && navigator) || void 0,
        nr =
          ne &&
          (!nt ||
            0 > ['ReactNative', 'NativeScript', 'NS'].indexOf(nt.product)),
        nn =
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          'function' == typeof self.importScripts,
        ni = (ne && window.location.href) || 'http://localhost',
        ns = {
          ...b,
          isBrowser: !0,
          classes: { URLSearchParams: r6, FormData: r9, Blob: r7 },
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        },
        na = function (e) {
          if (rZ.isFormData(e) && rZ.isFunction(e.entries)) {
            let t = {};
            return (
              rZ.forEachEntry(e, (e, r) => {
                !(function e(t, r, n, i) {
                  let s = t[i++];
                  if ('__proto__' === s) return !0;
                  let a = Number.isFinite(+s),
                    o = i >= t.length;
                  return (
                    ((s = !s && rZ.isArray(n) ? n.length : s), o)
                      ? rZ.hasOwnProp(n, s)
                        ? (n[s] = [n[s], r])
                        : (n[s] = r)
                      : ((n[s] && rZ.isObject(n[s])) || (n[s] = []),
                        e(t, r, n[s], i) &&
                          rZ.isArray(n[s]) &&
                          (n[s] = (function (e) {
                            let t, r;
                            let n = {},
                              i = Object.keys(e),
                              s = i.length;
                            for (t = 0; t < s; t++) n[(r = i[t])] = e[r];
                            return n;
                          })(n[s]))),
                    !a
                  );
                })(
                  rZ
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ('[]' === e[0] ? '' : e[1] || e[0])),
                  r,
                  t,
                  0
                );
              }),
              t
            );
          }
          return null;
        },
        no = {
          transitional: r8,
          adapter: ['xhr', 'http', 'fetch'],
          transformRequest: [
            function (e, t) {
              let r;
              let n = t.getContentType() || '',
                i = n.indexOf('application/json') > -1,
                s = rZ.isObject(e);
              if (
                (s && rZ.isHTMLForm(e) && (e = new FormData(e)),
                rZ.isFormData(e))
              )
                return i ? JSON.stringify(na(e)) : e;
              if (
                rZ.isArrayBuffer(e) ||
                rZ.isBuffer(e) ||
                rZ.isStream(e) ||
                rZ.isFile(e) ||
                rZ.isBlob(e) ||
                rZ.isReadableStream(e)
              )
                return e;
              if (rZ.isArrayBufferView(e)) return e.buffer;
              if (rZ.isURLSearchParams(e))
                return (
                  t.setContentType(
                    'application/x-www-form-urlencoded;charset=utf-8',
                    !1
                  ),
                  e.toString()
                );
              if (s) {
                if (n.indexOf('application/x-www-form-urlencoded') > -1) {
                  var a, o;
                  return ((a = e),
                  (o = this.formSerializer),
                  rX(
                    a,
                    new ns.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return ns.isNode && rZ.isBuffer(e)
                            ? (this.append(t, e.toString('base64')), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      o
                    )
                  )).toString();
                }
                if (
                  (r = rZ.isFileList(e)) ||
                  n.indexOf('multipart/form-data') > -1
                ) {
                  let t = this.env && this.env.FormData;
                  return rX(
                    r ? { 'files[]': e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              return s || i
                ? (t.setContentType('application/json', !1),
                  (function (e, t, r) {
                    if (rZ.isString(e))
                      try {
                        return (0, JSON.parse)(e), rZ.trim(e);
                      } catch (e) {
                        if ('SyntaxError' !== e.name) throw e;
                      }
                    return (0, JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              let t = this.transitional || no.transitional,
                r = t && t.forcedJSONParsing,
                n = 'json' === this.responseType;
              if (rZ.isResponse(e) || rZ.isReadableStream(e)) return e;
              if (e && rZ.isString(e) && ((r && !this.responseType) || n)) {
                let r = t && t.silentJSONParsing;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (!r && n) {
                    if ('SyntaxError' === e.name)
                      throw r$.from(
                        e,
                        r$.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: ns.classes.FormData, Blob: ns.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': void 0,
            },
          },
        };
      rZ.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
        no.headers[e] = {};
      });
      let nu = rZ.toObjectSet([
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ]),
        nl = (e) => {
          let t, r, n;
          let i = {};
          return (
            e &&
              e.split('\n').forEach(function (e) {
                (n = e.indexOf(':')),
                  (t = e.substring(0, n).trim().toLowerCase()),
                  (r = e.substring(n + 1).trim()),
                  !t ||
                    (i[t] && nu[t]) ||
                    ('set-cookie' === t
                      ? i[t]
                        ? i[t].push(r)
                        : (i[t] = [r])
                      : (i[t] = i[t] ? i[t] + ', ' + r : r));
              }),
            i
          );
        },
        nc = Symbol('internals');
      function nd(e) {
        return e && String(e).trim().toLowerCase();
      }
      function nh(e) {
        return !1 === e || null == e
          ? e
          : rZ.isArray(e)
            ? e.map(nh)
            : String(e);
      }
      let nf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function np(e, t, r, n, i) {
        if (rZ.isFunction(n)) return n.call(this, t, r);
        if ((i && (t = r), rZ.isString(t))) {
          if (rZ.isString(n)) return -1 !== t.indexOf(n);
          if (rZ.isRegExp(n)) return n.test(t);
        }
      }
      class nm {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function i(e, t, r) {
            let i = nd(t);
            if (!i) throw Error('header name must be a non-empty string');
            let s = rZ.findKey(n, i);
            (s &&
              void 0 !== n[s] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[s])) ||
              (n[s || t] = nh(e));
          }
          let s = (e, t) => rZ.forEach(e, (e, r) => i(e, r, t));
          if (rZ.isPlainObject(e) || e instanceof this.constructor) s(e, t);
          else if (rZ.isString(e) && (e = e.trim()) && !nf(e)) s(nl(e), t);
          else if (rZ.isHeaders(e)) for (let [t, n] of e.entries()) i(n, t, r);
          else null != e && i(t, e, r);
          return this;
        }
        get(e, t) {
          if ((e = nd(e))) {
            let r = rZ.findKey(this, e);
            if (r) {
              let e = this[r];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  let t;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (t = n.exec(e)); ) r[t[1]] = t[2];
                  return r;
                })(e);
              if (rZ.isFunction(t)) return t.call(this, e, r);
              if (rZ.isRegExp(t)) return t.exec(e);
              throw TypeError('parser must be boolean|regexp|function');
            }
          }
        }
        has(e, t) {
          if ((e = nd(e))) {
            let r = rZ.findKey(this, e);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!t || np(this, this[r], r, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function i(e) {
            if ((e = nd(e))) {
              let i = rZ.findKey(r, e);
              i && (!t || np(r, r[i], i, t)) && (delete r[i], (n = !0));
            }
          }
          return rZ.isArray(e) ? e.forEach(i) : i(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let i = t[r];
            (!e || np(this, this[i], i, e, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            rZ.forEach(this, (n, i) => {
              let s = rZ.findKey(r, i);
              if (s) {
                (t[s] = nh(n)), delete t[i];
                return;
              }
              let a = e
                ? i
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, r) => t.toUpperCase() + r
                    )
                : String(i).trim();
              a !== i && delete t[i], (t[a] = nh(n)), (r[a] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            rZ.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (t[n] = e && rZ.isArray(r) ? r.join(', ') : r);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ': ' + t)
            .join('\n');
        }
        get [Symbol.toStringTag]() {
          return 'AxiosHeaders';
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let r = new this(e);
          return t.forEach((e) => r.set(e)), r;
        }
        static accessor(e) {
          let t = (this[nc] = this[nc] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(e) {
            let n = nd(e);
            t[n] ||
              (!(function (e, t) {
                let r = rZ.toCamelCase(' ' + t);
                ['get', 'set', 'has'].forEach((n) => {
                  Object.defineProperty(e, n + r, {
                    value: function (e, r, i) {
                      return this[n].call(this, t, e, r, i);
                    },
                    configurable: !0,
                  });
                });
              })(r, e),
              (t[n] = !0));
          }
          return rZ.isArray(e) ? e.forEach(n) : n(e), this;
        }
      }
      function ny(e, t) {
        let r = this || no,
          n = t || r,
          i = nm.from(n.headers),
          s = n.data;
        return (
          rZ.forEach(e, function (e) {
            s = e.call(r, s, i.normalize(), t ? t.status : void 0);
          }),
          i.normalize(),
          s
        );
      }
      function ng(e) {
        return !!(e && e.__CANCEL__);
      }
      function nb(e, t, r) {
        r$.call(this, null == e ? 'canceled' : e, r$.ERR_CANCELED, t, r),
          (this.name = 'CanceledError');
      }
      function nv(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? e(r)
          : t(
              new r$(
                'Request failed with status code ' + r.status,
                [r$.ERR_BAD_REQUEST, r$.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r
              )
            );
      }
      nm.accessor([
        'Content-Type',
        'Content-Length',
        'Accept',
        'Accept-Encoding',
        'User-Agent',
        'Authorization',
      ]),
        rZ.reduceDescriptors(nm.prototype, ({ value: e }, t) => {
          let r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[r] = e;
            },
          };
        }),
        rZ.freezeMethods(nm),
        rZ.inherits(nb, r$, { __CANCEL__: !0 });
      let nw = function (e, t) {
          let r;
          let n = Array((e = e || 10)),
            i = Array(e),
            s = 0,
            a = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (o) {
              let u = Date.now(),
                l = i[a];
              r || (r = u), (n[s] = o), (i[s] = u);
              let c = a,
                d = 0;
              for (; c !== s; ) (d += n[c++]), (c %= e);
              if (((s = (s + 1) % e) === a && (a = (a + 1) % e), u - r < t))
                return;
              let h = l && u - l;
              return h ? Math.round((1e3 * d) / h) : void 0;
            }
          );
        },
        n_ = function (e, t) {
          let r,
            n,
            i = 0,
            s = 1e3 / t,
            a = (t, s = Date.now()) => {
              (i = s),
                (r = null),
                n && (clearTimeout(n), (n = null)),
                e.apply(null, t);
            };
          return [
            (...e) => {
              let t = Date.now(),
                o = t - i;
              o >= s
                ? a(e, t)
                : ((r = e),
                  n ||
                    (n = setTimeout(() => {
                      (n = null), a(r);
                    }, s - o)));
            },
            () => r && a(r),
          ];
        },
        nE = (e, t, r = 3) => {
          let n = 0,
            i = nw(50, 250);
          return n_((r) => {
            let s = r.loaded,
              a = r.lengthComputable ? r.total : void 0,
              o = s - n,
              u = i(o);
            (n = s),
              e({
                loaded: s,
                total: a,
                progress: a ? s / a : void 0,
                bytes: o,
                rate: u || void 0,
                estimated: u && a && s <= a ? (a - s) / u : void 0,
                event: r,
                lengthComputable: null != a,
                [t ? 'download' : 'upload']: !0,
              });
          }, r);
        },
        nS = (e, t) => {
          let r = null != e;
          return [
            (n) => t[0]({ lengthComputable: r, total: e, loaded: n }),
            t[1],
          ];
        },
        nR =
          (e) =>
          (...t) =>
            rZ.asap(() => e(...t)),
        nO = ns.hasStandardBrowserEnv
          ? ((e, t) => (r) => (
              (r = new URL(r, ns.origin)),
              e.protocol === r.protocol &&
                e.host === r.host &&
                (t || e.port === r.port)
            ))(
              new URL(ns.origin),
              ns.navigator && /(msie|trident)/i.test(ns.navigator.userAgent)
            )
          : () => !0,
        nA = ns.hasStandardBrowserEnv
          ? {
              write(e, t, r, n, i, s) {
                let a = [e + '=' + encodeURIComponent(t)];
                rZ.isNumber(r) &&
                  a.push('expires=' + new Date(r).toGMTString()),
                  rZ.isString(n) && a.push('path=' + n),
                  rZ.isString(i) && a.push('domain=' + i),
                  !0 === s && a.push('secure'),
                  (document.cookie = a.join('; '));
              },
              read(e) {
                let t = document.cookie.match(
                  RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function nx(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? t
            ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '')
            : e
          : t;
      }
      let nC = (e) => (e instanceof nm ? { ...e } : e);
      function nN(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r, n) {
          return rZ.isPlainObject(e) && rZ.isPlainObject(t)
            ? rZ.merge.call({ caseless: n }, e, t)
            : rZ.isPlainObject(t)
              ? rZ.merge({}, t)
              : rZ.isArray(t)
                ? t.slice()
                : t;
        }
        function i(e, t, r, i) {
          return rZ.isUndefined(t)
            ? rZ.isUndefined(e)
              ? void 0
              : n(void 0, e, r, i)
            : n(e, t, r, i);
        }
        function s(e, t) {
          if (!rZ.isUndefined(t)) return n(void 0, t);
        }
        function a(e, t) {
          return rZ.isUndefined(t)
            ? rZ.isUndefined(e)
              ? void 0
              : n(void 0, e)
            : n(void 0, t);
        }
        function o(r, i, s) {
          return s in t ? n(r, i) : s in e ? n(void 0, r) : void 0;
        }
        let u = {
          url: s,
          method: s,
          data: s,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          withXSRFToken: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: o,
          headers: (e, t, r) => i(nC(e), nC(t), r, !0),
        };
        return (
          rZ.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let s = u[n] || i,
              a = s(e[n], t[n], n);
            (rZ.isUndefined(a) && s !== o) || (r[n] = a);
          }),
          r
        );
      }
      let nk = (e) => {
          let t;
          let r = nN({}, e),
            {
              data: n,
              withXSRFToken: i,
              xsrfHeaderName: s,
              xsrfCookieName: a,
              headers: o,
              auth: u,
            } = r;
          if (
            ((r.headers = o = nm.from(o)),
            (r.url = r5(nx(r.baseURL, r.url), e.params, e.paramsSerializer)),
            u &&
              o.set(
                'Authorization',
                'Basic ' +
                  btoa(
                    (u.username || '') +
                      ':' +
                      (u.password
                        ? unescape(encodeURIComponent(u.password))
                        : '')
                  )
              ),
            rZ.isFormData(n))
          ) {
            if (ns.hasStandardBrowserEnv || ns.hasStandardBrowserWebWorkerEnv)
              o.setContentType(void 0);
            else if (!1 !== (t = o.getContentType())) {
              let [e, ...r] = t
                ? t
                    .split(';')
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              o.setContentType([e || 'multipart/form-data', ...r].join('; '));
            }
          }
          if (
            ns.hasStandardBrowserEnv &&
            (i && rZ.isFunction(i) && (i = i(r)), i || (!1 !== i && nO(r.url)))
          ) {
            let e = s && a && nA.read(a);
            e && o.set(s, e);
          }
          return r;
        },
        nT =
          'undefined' != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              let n, i, s, a, o;
              let u = nk(e),
                l = u.data,
                c = nm.from(u.headers).normalize(),
                {
                  responseType: d,
                  onUploadProgress: h,
                  onDownloadProgress: f,
                } = u;
              function p() {
                a && a(),
                  o && o(),
                  u.cancelToken && u.cancelToken.unsubscribe(n),
                  u.signal && u.signal.removeEventListener('abort', n);
              }
              let m = new XMLHttpRequest();
              function y() {
                if (!m) return;
                let n = nm.from(
                  'getAllResponseHeaders' in m && m.getAllResponseHeaders()
                );
                nv(
                  function (e) {
                    t(e), p();
                  },
                  function (e) {
                    r(e), p();
                  },
                  {
                    data:
                      d && 'text' !== d && 'json' !== d
                        ? m.response
                        : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: n,
                    config: e,
                    request: m,
                  }
                ),
                  (m = null);
              }
              m.open(u.method.toUpperCase(), u.url, !0),
                (m.timeout = u.timeout),
                'onloadend' in m
                  ? (m.onloadend = y)
                  : (m.onreadystatechange = function () {
                      m &&
                        4 === m.readyState &&
                        (0 !== m.status ||
                          (m.responseURL &&
                            0 === m.responseURL.indexOf('file:'))) &&
                        setTimeout(y);
                    }),
                (m.onabort = function () {
                  m &&
                    (r(new r$('Request aborted', r$.ECONNABORTED, e, m)),
                    (m = null));
                }),
                (m.onerror = function () {
                  r(new r$('Network Error', r$.ERR_NETWORK, e, m)), (m = null);
                }),
                (m.ontimeout = function () {
                  let t = u.timeout
                      ? 'timeout of ' + u.timeout + 'ms exceeded'
                      : 'timeout exceeded',
                    n = u.transitional || r8;
                  u.timeoutErrorMessage && (t = u.timeoutErrorMessage),
                    r(
                      new r$(
                        t,
                        n.clarifyTimeoutError ? r$.ETIMEDOUT : r$.ECONNABORTED,
                        e,
                        m
                      )
                    ),
                    (m = null);
                }),
                void 0 === l && c.setContentType(null),
                'setRequestHeader' in m &&
                  rZ.forEach(c.toJSON(), function (e, t) {
                    m.setRequestHeader(t, e);
                  }),
                rZ.isUndefined(u.withCredentials) ||
                  (m.withCredentials = !!u.withCredentials),
                d && 'json' !== d && (m.responseType = u.responseType),
                f && (([s, o] = nE(f, !0)), m.addEventListener('progress', s)),
                h &&
                  m.upload &&
                  (([i, a] = nE(h)),
                  m.upload.addEventListener('progress', i),
                  m.upload.addEventListener('loadend', a)),
                (u.cancelToken || u.signal) &&
                  ((n = (t) => {
                    m &&
                      (r(!t || t.type ? new nb(null, e, m) : t),
                      m.abort(),
                      (m = null));
                  }),
                  u.cancelToken && u.cancelToken.subscribe(n),
                  u.signal &&
                    (u.signal.aborted
                      ? n()
                      : u.signal.addEventListener('abort', n)));
              let g = (function (e) {
                let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || '';
              })(u.url);
              if (g && -1 === ns.protocols.indexOf(g)) {
                r(
                  new r$(
                    'Unsupported protocol ' + g + ':',
                    r$.ERR_BAD_REQUEST,
                    e
                  )
                );
                return;
              }
              m.send(l || null);
            });
          },
        nP = (e, t) => {
          let { length: r } = (e = e ? e.filter(Boolean) : []);
          if (t || r) {
            let r,
              n = new AbortController(),
              i = function (e) {
                if (!r) {
                  (r = !0), a();
                  let t = e instanceof Error ? e : this.reason;
                  n.abort(
                    t instanceof r$
                      ? t
                      : new nb(t instanceof Error ? t.message : t)
                  );
                }
              },
              s =
                t &&
                setTimeout(() => {
                  (s = null),
                    i(new r$(`timeout ${t} of ms exceeded`, r$.ETIMEDOUT));
                }, t),
              a = () => {
                e &&
                  (s && clearTimeout(s),
                  (s = null),
                  e.forEach((e) => {
                    e.unsubscribe
                      ? e.unsubscribe(i)
                      : e.removeEventListener('abort', i);
                  }),
                  (e = null));
              };
            e.forEach((e) => e.addEventListener('abort', i));
            let { signal: o } = n;
            return (o.unsubscribe = () => rZ.asap(a)), o;
          }
        },
        nD = function* (e, t) {
          let r,
            n = e.byteLength;
          if (!t || n < t) {
            yield e;
            return;
          }
          let i = 0;
          for (; i < n; ) (r = i + t), yield e.slice(i, r), (i = r);
        },
        nI = async function* (e, t) {
          for await (let r of nj(e)) yield* nD(r, t);
        },
        nj = async function* (e) {
          if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
          }
          let t = e.getReader();
          try {
            for (;;) {
              let { done: e, value: r } = await t.read();
              if (e) break;
              yield r;
            }
          } finally {
            await t.cancel();
          }
        },
        nM = (e, t, r, n) => {
          let i;
          let s = nI(e, t),
            a = 0,
            o = (e) => {
              !i && ((i = !0), n && n(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  let { done: t, value: n } = await s.next();
                  if (t) {
                    o(), e.close();
                    return;
                  }
                  let i = n.byteLength;
                  if (r) {
                    let e = (a += i);
                    r(e);
                  }
                  e.enqueue(new Uint8Array(n));
                } catch (e) {
                  throw (o(e), e);
                }
              },
              cancel: (e) => (o(e), s.return()),
            },
            { highWaterMark: 2 }
          );
        },
        nU =
          'function' == typeof fetch &&
          'function' == typeof Request &&
          'function' == typeof Response,
        nL = nU && 'function' == typeof ReadableStream,
        nq =
          nU &&
          ('function' == typeof TextEncoder
            ? ((i = new TextEncoder()), (e) => i.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        nF = (e, ...t) => {
          try {
            return !!e(...t);
          } catch (e) {
            return !1;
          }
        },
        nB =
          nL &&
          nF(() => {
            let e = !1,
              t = new Request(ns.origin, {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                  return (e = !0), 'half';
                },
              }).headers.has('Content-Type');
            return e && !t;
          }),
        nQ = nL && nF(() => rZ.isReadableStream(new Response('').body)),
        nz = { stream: nQ && ((e) => e.body) };
      nU &&
        ((o = new Response()),
        ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((e) => {
          nz[e] ||
            (nz[e] = rZ.isFunction(o[e])
              ? (t) => t[e]()
              : (t, r) => {
                  throw new r$(
                    `Response type '${e}' is not supported`,
                    r$.ERR_NOT_SUPPORT,
                    r
                  );
                });
        }));
      let nZ = async (e) => {
          if (null == e) return 0;
          if (rZ.isBlob(e)) return e.size;
          if (rZ.isSpecCompliantForm(e)) {
            let t = new Request(ns.origin, { method: 'POST', body: e });
            return (await t.arrayBuffer()).byteLength;
          }
          return rZ.isArrayBufferView(e) || rZ.isArrayBuffer(e)
            ? e.byteLength
            : (rZ.isURLSearchParams(e) && (e += ''), rZ.isString(e))
              ? (await nq(e)).byteLength
              : void 0;
        },
        n$ = async (e, t) => {
          let r = rZ.toFiniteNumber(e.getContentLength());
          return null == r ? nZ(t) : r;
        },
        nH = {
          http: null,
          xhr: nT,
          fetch:
            nU &&
            (async (e) => {
              let t,
                r,
                {
                  url: n,
                  method: i,
                  data: s,
                  signal: a,
                  cancelToken: o,
                  timeout: u,
                  onDownloadProgress: l,
                  onUploadProgress: c,
                  responseType: d,
                  headers: h,
                  withCredentials: f = 'same-origin',
                  fetchOptions: p,
                } = nk(e);
              d = d ? (d + '').toLowerCase() : 'text';
              let m = nP([a, o && o.toAbortSignal()], u),
                y =
                  m &&
                  m.unsubscribe &&
                  (() => {
                    m.unsubscribe();
                  });
              try {
                if (
                  c &&
                  nB &&
                  'get' !== i &&
                  'head' !== i &&
                  0 !== (r = await n$(h, s))
                ) {
                  let e,
                    t = new Request(n, {
                      method: 'POST',
                      body: s,
                      duplex: 'half',
                    });
                  if (
                    (rZ.isFormData(s) &&
                      (e = t.headers.get('content-type')) &&
                      h.setContentType(e),
                    t.body)
                  ) {
                    let [e, n] = nS(r, nE(nR(c)));
                    s = nM(t.body, 65536, e, n);
                  }
                }
                rZ.isString(f) || (f = f ? 'include' : 'omit');
                let a = 'credentials' in Request.prototype;
                t = new Request(n, {
                  ...p,
                  signal: m,
                  method: i.toUpperCase(),
                  headers: h.normalize().toJSON(),
                  body: s,
                  duplex: 'half',
                  credentials: a ? f : void 0,
                });
                let o = await fetch(t),
                  u = nQ && ('stream' === d || 'response' === d);
                if (nQ && (l || (u && y))) {
                  let e = {};
                  ['status', 'statusText', 'headers'].forEach((t) => {
                    e[t] = o[t];
                  });
                  let t = rZ.toFiniteNumber(o.headers.get('content-length')),
                    [r, n] = (l && nS(t, nE(nR(l), !0))) || [];
                  o = new Response(
                    nM(o.body, 65536, r, () => {
                      n && n(), y && y();
                    }),
                    e
                  );
                }
                d = d || 'text';
                let g = await nz[rZ.findKey(nz, d) || 'text'](o, e);
                return (
                  !u && y && y(),
                  await new Promise((r, n) => {
                    nv(r, n, {
                      data: g,
                      headers: nm.from(o.headers),
                      status: o.status,
                      statusText: o.statusText,
                      config: e,
                      request: t,
                    });
                  })
                );
              } catch (r) {
                if (
                  (y && y(),
                  r && 'TypeError' === r.name && /fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new r$('Network Error', r$.ERR_NETWORK, e, t),
                    { cause: r.cause || r }
                  );
                throw r$.from(r, r && r.code, e, t);
              }
            }),
        };
      rZ.forEach(nH, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, 'name', { value: t });
          } catch (e) {}
          Object.defineProperty(e, 'adapterName', { value: t });
        }
      });
      let nW = (e) => `- ${e}`,
        nV = (e) => rZ.isFunction(e) || null === e || !1 === e,
        nK = {
          getAdapter: (e) => {
            let t, r;
            let { length: n } = (e = rZ.isArray(e) ? e : [e]),
              i = {};
            for (let s = 0; s < n; s++) {
              let n;
              if (
                ((r = t = e[s]),
                !nV(t) && void 0 === (r = nH[(n = String(t)).toLowerCase()]))
              )
                throw new r$(`Unknown adapter '${n}'`);
              if (r) break;
              i[n || '#' + s] = r;
            }
            if (!r) {
              let e = Object.entries(i).map(
                ([e, t]) =>
                  `adapter ${e} ` +
                  (!1 === t
                    ? 'is not supported by the environment'
                    : 'is not available in the build')
              );
              throw new r$(
                'There is no suitable adapter to dispatch the request ' +
                  (n
                    ? e.length > 1
                      ? 'since :\n' + e.map(nW).join('\n')
                      : ' ' + nW(e[0])
                    : 'as no adapter specified'),
                'ERR_NOT_SUPPORT'
              );
            }
            return r;
          },
        };
      function nG(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new nb(null, e);
      }
      function nJ(e) {
        return (
          nG(e),
          (e.headers = nm.from(e.headers)),
          (e.data = ny.call(e, e.transformRequest)),
          -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
          nK
            .getAdapter(e.adapter || no.adapter)(e)
            .then(
              function (t) {
                return (
                  nG(e),
                  (t.data = ny.call(e, e.transformResponse, t)),
                  (t.headers = nm.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  !ng(t) &&
                    (nG(e),
                    t &&
                      t.response &&
                      ((t.response.data = ny.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = nm.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
        );
      }
      let nY = '1.7.9',
        nX = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
        (e, t) => {
          nX[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
          };
        }
      );
      let n0 = {};
      (nX.transitional = function (e, t, r) {
        function n(e, t) {
          return (
            '[Axios v' +
            nY +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? '. ' + r : '')
          );
        }
        return (r, i, s) => {
          if (!1 === e)
            throw new r$(
              n(i, ' has been removed' + (t ? ' in ' + t : '')),
              r$.ERR_DEPRECATED
            );
          return (
            t &&
              !n0[i] &&
              ((n0[i] = !0),
              console.warn(
                n(
                  i,
                  ' has been deprecated since v' +
                    t +
                    ' and will be removed in the near future'
                )
              )),
            !e || e(r, i, s)
          );
        };
      }),
        (nX.spelling = function (e) {
          return (t, r) => (
            console.warn(`${r} is likely a misspelling of ${e}`), !0
          );
        });
      let n1 = {
          assertOptions: function (e, t, r) {
            if ('object' != typeof e)
              throw new r$(
                'options must be an object',
                r$.ERR_BAD_OPTION_VALUE
              );
            let n = Object.keys(e),
              i = n.length;
            for (; i-- > 0; ) {
              let s = n[i],
                a = t[s];
              if (a) {
                let t = e[s],
                  r = void 0 === t || a(t, s, e);
                if (!0 !== r)
                  throw new r$(
                    'option ' + s + ' must be ' + r,
                    r$.ERR_BAD_OPTION_VALUE
                  );
                continue;
              }
              if (!0 !== r)
                throw new r$('Unknown option ' + s, r$.ERR_BAD_OPTION);
            }
          },
          validators: nX,
        },
        n2 = n1.validators;
      class n4 {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new r3(), response: new r3() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (e) {
            if (e instanceof Error) {
              let t = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(t)
                : (t = Error());
              let r = t.stack ? t.stack.replace(/^.+\n/, '') : '';
              try {
                e.stack
                  ? r &&
                    !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, '')) &&
                    (e.stack += '\n' + r)
                  : (e.stack = r);
              } catch (e) {}
            }
            throw e;
          }
        }
        _request(e, t) {
          let r, n;
          'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {});
          let {
            transitional: i,
            paramsSerializer: s,
            headers: a,
          } = (t = nN(this.defaults, t));
          void 0 !== i &&
            n1.assertOptions(
              i,
              {
                silentJSONParsing: n2.transitional(n2.boolean),
                forcedJSONParsing: n2.transitional(n2.boolean),
                clarifyTimeoutError: n2.transitional(n2.boolean),
              },
              !1
            ),
            null != s &&
              (rZ.isFunction(s)
                ? (t.paramsSerializer = { serialize: s })
                : n1.assertOptions(
                    s,
                    { encode: n2.function, serialize: n2.function },
                    !0
                  )),
            n1.assertOptions(
              t,
              {
                baseUrl: n2.spelling('baseURL'),
                withXsrfToken: n2.spelling('withXSRFToken'),
              },
              !0
            ),
            (t.method = (
              t.method ||
              this.defaults.method ||
              'get'
            ).toLowerCase());
          let o = a && rZ.merge(a.common, a[t.method]);
          a &&
            rZ.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = nm.concat(o, a));
          let u = [],
            l = !0;
          this.interceptors.request.forEach(function (e) {
            ('function' != typeof e.runWhen || !1 !== e.runWhen(t)) &&
              ((l = l && e.synchronous), u.unshift(e.fulfilled, e.rejected));
          });
          let c = [];
          this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          });
          let d = 0;
          if (!l) {
            let e = [nJ.bind(this), void 0];
            for (
              e.unshift.apply(e, u),
                e.push.apply(e, c),
                n = e.length,
                r = Promise.resolve(t);
              d < n;

            )
              r = r.then(e[d++], e[d++]);
            return r;
          }
          n = u.length;
          let h = t;
          for (d = 0; d < n; ) {
            let e = u[d++],
              t = u[d++];
            try {
              h = e(h);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            r = nJ.call(this, h);
          } catch (e) {
            return Promise.reject(e);
          }
          for (d = 0, n = c.length; d < n; ) r = r.then(c[d++], c[d++]);
          return r;
        }
        getUri(e) {
          return r5(
            nx((e = nN(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      rZ.forEach(['delete', 'get', 'head', 'options'], function (e) {
        n4.prototype[e] = function (t, r) {
          return this.request(
            nN(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
        rZ.forEach(['post', 'put', 'patch'], function (e) {
          function t(t) {
            return function (r, n, i) {
              return this.request(
                nN(i || {}, {
                  method: e,
                  headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (n4.prototype[e] = t()), (n4.prototype[e + 'Form'] = t(!0));
        });
      class n5 {
        constructor(e) {
          let t;
          if ('function' != typeof e)
            throw TypeError('executor must be a function.');
          this.promise = new Promise(function (e) {
            t = e;
          });
          let r = this;
          this.promise.then((e) => {
            if (!r._listeners) return;
            let t = r._listeners.length;
            for (; t-- > 0; ) r._listeners[t](e);
            r._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              let n = new Promise((e) => {
                r.subscribe(e), (t = e);
              }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e, n, i) {
              r.reason || ((r.reason = new nb(e, n, i)), t(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          let e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          return {
            token: new n5(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      let n3 = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(n3).forEach(([e, t]) => {
        n3[t] = e;
      });
      let n8 = (function e(t) {
        let r = new n4(t),
          n = rs(n4.prototype.request, r);
        return (
          rZ.extend(n, n4.prototype, r, { allOwnKeys: !0 }),
          rZ.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(nN(t, r));
          }),
          n
        );
      })(no);
      (n8.Axios = n4),
        (n8.CanceledError = nb),
        (n8.CancelToken = n5),
        (n8.isCancel = ng),
        (n8.VERSION = nY),
        (n8.toFormData = rX),
        (n8.AxiosError = r$),
        (n8.Cancel = n8.CanceledError),
        (n8.all = function (e) {
          return Promise.all(e);
        }),
        (n8.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (n8.isAxiosError = function (e) {
          return rZ.isObject(e) && !0 === e.isAxiosError;
        }),
        (n8.mergeConfig = nN),
        (n8.AxiosHeaders = nm),
        (n8.formToJSON = (e) => na(rZ.isHTMLForm(e) ? new FormData(e) : e)),
        (n8.getAdapter = nK.getAdapter),
        (n8.HttpStatusCode = n3),
        (n8.default = n8);
      let n6 = async (e) => (await n8.get(e)).data;
      var n9 = (function (e) {
        return (
          (e.DEFI = 'defi'),
          (e.STABLE_COIN = 'stablecoin'),
          (e.NFT = 'nft'),
          (e.DEX = 'dex'),
          (e.EXCHANGE = 'exchange'),
          (e.STAKING = 'staking'),
          (e.DAO = 'dao'),
          (e.MEME = 'meme'),
          (e.PRIVACY = 'privacy'),
          (e.METAVERSE = 'metaverse'),
          (e.GAMING = 'gaming'),
          (e.WRAPPED = 'wrapped'),
          (e.LAYER_1 = 'layer-1'),
          (e.LAYER_2 = 'layer-2'),
          (e.FAN_TOKEN = 'fan-token'),
          (e.FOOTBALL_CLUB = 'football-club'),
          (e.WEB_3 = 'web3'),
          (e.SOCIAL = 'social'),
          e
        );
      })({});
      let n7 = async (e) => {
          let { tag: t } = e;
          try {
            let e = new URLSearchParams();
            t && e.append('tags', t);
            let r = ''
              .concat('https://api.coinranking.com', '/v2/coins?')
              .concat(e.toString());
            return await n6(r);
          } catch (e) {
            return {
              status: 'error',
              data: {
                stats: {
                  total: 0,
                  totalCoins: 0,
                  totalMarkets: 0,
                  totalExchanges: 0,
                  totalMarketCap: '0',
                  total24hVolume: '0',
                },
                coins: [],
              },
            };
          }
        },
        ie = async (e) => (await n8.get(e)).data,
        it = async function () {
          let {
              amount: e = 1,
              base: t = 'EUR',
              to: r = [],
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { amount: 1, base: 'EUR', to: [] },
            n = new URLSearchParams();
          return (
            n.set('amount', e.toString()),
            n.set('from', t),
            r.length > 0 && n.set('to', r.join(',')),
            ie(
              ''
                .concat('https://api.frankfurter.app', '/latest?')
                .concat(n.toString())
            )
          );
        };
      var ir = r(4403);
      let ii = r.n(ir)()(),
        is = async () => {
          try {
            let { data: e } = await n8.get(
              'https://trends.google.com/trends/hottrends/visualize/internal/data'
            );
            return e;
          } catch (e) {
            return ii.error('getTrends error='.concat(e)), {};
          }
        };
      var ia = (function (e) {
          return (
            (e.UNITED_ARAB_EMIRATES = 'ae'),
            (e.ARGENTINA = 'ar'),
            (e.AUSTRIA = 'at'),
            (e.AUSTRALIA = 'au'),
            (e.BELGIUM = 'be'),
            (e.BULGARIA = 'bg'),
            (e.BRAZIL = 'br'),
            (e.CANADA = 'ca'),
            (e.SWITZERLAND = 'ch'),
            (e.CHINA = 'cn'),
            (e.COLOMBIA = 'co'),
            (e.CUBA = 'cu'),
            (e.CZECHIA = 'cz'),
            (e.GERMANY = 'de'),
            (e.EGYPT = 'eg'),
            (e.FRANCE = 'fr'),
            (e.UNITED_KINGDOM = 'gb'),
            (e.GREECE = 'gr'),
            (e.HONG_KONG = 'hk'),
            (e.HUNGARY = 'hu'),
            (e.INDONESIA = 'id'),
            (e.IRELAND = 'ie'),
            (e.ISRAEL = 'il'),
            (e.INDIA = 'in'),
            (e.ITALY = 'it'),
            (e.JAPAN = 'jp'),
            (e.SOUTH_KOREA = 'kr'),
            (e.LITHUANIA = 'lt'),
            (e.LATVIA = 'lv'),
            (e.MOROCCO = 'ma'),
            (e.MEXICO = 'mx'),
            (e.MALAYSIA = 'my'),
            (e.NIGERIA = 'ng'),
            (e.NETHERLANDS = 'nl'),
            (e.NoRway = 'no'),
            (e.NEW_ZEALAND = 'nz'),
            (e.PHILIPPINES = 'ph'),
            (e.POLAND = 'pl'),
            (e.PORTUGAL = 'PT'),
            (e.ROMANIA = 'ro'),
            (e.SERBIA = 'rs'),
            (e.RUSSIA = 'ru'),
            (e.SAUDI_ARABIA = 'sa'),
            (e.SWEDEN = 'se'),
            (e.SINGAPORE = 'sg'),
            (e.SLOVENIA = 'si'),
            (e.SLOVAKIA = 'sk'),
            (e.THAILAND = 'th'),
            (e.TURKEY = 'tr'),
            (e.TAIWAN = 'tw'),
            (e.UKRAINE = 'ua'),
            (e.UNITED_STATES = 'us'),
            (e.VENEZUELA = 've'),
            (e.SOUTH_AFRICA = 'za'),
            e
          );
        })({}),
        io = (function (e) {
          return (
            (e.BUSINESS = 'business'),
            (e.ENTERTAINMENT = 'entertainment'),
            (e.GENERAL = 'general'),
            (e.HEALTH = 'health'),
            (e.SCIENCE = 'science'),
            (e.SPORTS = 'sports'),
            (e.TECHNOLOGY = 'technology'),
            e
          );
        })({});
      let iu = null !== (c = r(7840).env.NEWS_API_KEY) && void 0 !== c ? c : '',
        il = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (await n8.get(e, t)).data;
        },
        ic = async function () {
          let {
              category: e = io.GENERAL,
              country: t = ia.UNITED_STATES,
              page: r = 1,
              pageSize: n = 20,
              query: i = '',
              sources: s = [],
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {
                  category: io.GENERAL,
                  country: ia.UNITED_STATES,
                  page: 1,
                  pageSize: 20,
                  query: '',
                  sources: [],
                },
            a = new URLSearchParams();
          a.set('category', e),
            a.set('country', t),
            r > 0 && a.set('page', r.toString()),
            n > 0 && a.set('pageSize', n.toString()),
            '' !== i && a.set('q', i),
            s.length > 0 && a.set('sources', s.join(','));
          let o = ''
              .concat('https://newsapi.org/v2', '/top-headlines?')
              .concat(a.toString()),
            {
              status: u,
              totalResults: l,
              articles: c,
            } = await il(o, { headers: { 'X-Api-Key': iu } });
          return { status: u, totalResults: l, articles: c };
        },
        id =
          null !== (d = r(7840).env.LANGUAGES_API) && void 0 !== d
            ? d
            : 'http://localhost:8080',
        ih = [ri.Result.win],
        ip = [
          ri.Result.fiftymove,
          ri.Result.agreed,
          ri.Result.insufficient,
          ri.Result.repetition,
          ri.Result.stalemate,
          ri.Result.timevsinsufficient,
        ],
        im = [
          ri.Result.checkmated,
          ri.Result.resigned,
          ri.Result.timeout,
          ri.Result.abandoned,
        ],
        iy = new Set();
      iy.add('sunday'),
        iy.add('monday'),
        iy.add('tuesday'),
        iy.add('wednesday'),
        iy.add('thursday'),
        iy.add('friday'),
        iy.add('saturday');
      let ig = new Set();
      ig.add('night'),
        ig.add('morning'),
        ig.add('afternoon'),
        ig.add('evening');
      let ib = new ri.PrismaClient(),
        iv = () => (void 0 !== ib ? ib : (ib = new ri.PrismaClient()));
      BigInt.prototype.toJSON = function () {
        let e = Number.parseInt(this.toString());
        return null != e ? e : this.toString();
      };
      let iw = (e) => {
          let {
              username: t = '',
              results: r = [],
              accuracy: n = !1,
              variant: i = ri.Variant.chess,
              timeClass: s = ri.TimeClass.blitz,
              rated: a = !0,
              endPhrase: o = !1,
            } = e,
            u = '';
          if (r.length > 0) {
            let e = r.map((e) => "'".concat(e, "'")).join(',');
            u = 'TEXT(CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_result" ELSE g."black_result" END) in ('
              )
              .concat(e, ')');
          }
          let l =
              t.length > 0
                ? '(g."white_username"=\''
                    .concat(t, '\' OR g."black_username"=\'')
                    .concat(t, "')")
                : '',
            c = [
              o ? 'g."end_phrase" IS NOT NULL' : '',
              s ? 'g."time_class" = \''.concat(s, "'") : '',
              n ? 'g."white_accuracy" != 0 AND g."black_accuracy" != 0' : '',
              l,
              u,
              a ? 'g."rated" = true' : '',
              i ? 'g."rules" = \''.concat(i, "'") : '',
            ];
          return 'WHERE '.concat(c.filter((e) => '' !== e).join(' AND '));
        },
        i_ = function () {
          let {
            username: e = '',
            results: t = [],
            timeClass: r = ri.TimeClass.blitz,
            variant: n = ri.Variant.chess,
            rated: i = !0,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(t.length > 0
              ? {
                  OR: [
                    { whiteUsername: e, whiteResult: { in: t } },
                    { blackUsername: e, blackResult: { in: t } },
                  ],
                }
              : { OR: [{ whiteUsername: e }, { blackUsername: e }] }),
            rated: i,
            rules: n,
            timeClass: r,
          };
        },
        iE = (e) =>
          'AVG(CASE WHEN g."white_username" = \''.concat(
            e,
            '\' THEN g."white_accuracy" ELSE g."black_accuracy" END) as "average"'
          ),
        iS = (e) => {
          let {
              name: t = 'query',
              sqlFunction: r = 'count',
              column: n = '',
              accuracy: i = !1,
              username: s = '',
              variant: a = ri.Variant.chess,
              timeClass: o = ri.TimeClass.blitz,
              results: u = [],
              rated: l = !0,
              endPhrase: c = !1,
            } = e,
            d = iE(s),
            h = [
              'count' === r ? 'COUNT(*) as "count"' : d,
              n.length > 0
                ? ''.concat(
                    {
                      year: 'extract(year from g."end_time")::int',
                      dayOfWeek: 'extract(dow from g."end_time")',
                      timeOfDay:
                        'floor(extract(hour from g."end_time") / 6.0)::int',
                      result: 'CASE WHEN g."white_username" = \''.concat(
                        s,
                        '\' THEN g."white_result" ELSE g."black_result" END'
                      ),
                      opponent:
                        'floor((CASE WHEN g."white_username" = \''.concat(
                          s,
                          '\' THEN g."black_rating" ELSE g."white_rating" END) / 100)'
                        ),
                      endPhrase: 'g."end_phrase"',
                    }[n],
                    ' as "column"'
                  )
                : '',
            ]
              .filter((e) => '' !== e)
              .join(', '),
            f = iw({
              accuracy: i,
              username: s,
              results: u,
              variant: a,
              timeClass: o,
              rated: l,
              endPhrase: c,
            }),
            p = n.length > 0 ? 'GROUP BY "column"' : '',
            m = n.length > 0 ? 'ORDER BY "column"' : '',
            y = ''
              .concat('SELECT '.concat(h), ' ')
              .concat('FROM chess."game" as g', ' ')
              .concat(f, ' ')
              .concat(p, ' ')
              .concat(m)
              .trim();
          return (
            ii.info(
              {
                username: s,
                variant: a,
                timeClass: o,
                column: n,
                results: u,
                accuracy: i,
                endPhrase: c,
                sqlFunction: r,
              },
              'buildFunctionQuery name='.concat(t, ' query=').concat(y)
            ),
            ri.Prisma.raw(y)
          );
        },
        iR = (e) => {
          let {
              username: t,
              side: r,
              limit: n = 10,
              variant: i = 'chess',
              timeClass: s = 'blitz',
            } = e,
            a = ih.map((e) => "'".concat(e, "'")).join(','),
            o = ip.map((e) => "'".concat(e, "'")).join(','),
            u = im.map((e) => "'".concat(e, "'")).join(','),
            l =
              'SELECT g."opening",\ng."opening_name",\nCOUNT(*) as total,\nSUM(CASE WHEN g."'
                .concat(r, '_result" IN (')
                .concat(a, ') THEN 1 ELSE 0 END) as win,\nSUM(CASE WHEN g."')
                .concat(r, '_result" IN (')
                .concat(o, ') THEN 1 ELSE 0 END) as draw,\nSUM(CASE WHEN g."')
                .concat(r, '_result" IN (')
                .concat(
                  u,
                  ') THEN 1 ELSE 0 END) as loss\nFROM chess."game" as g\nWHERE g."opening" <> \'\'\nAND g."rated" = true\nAND g."rules" = \''
                )
                .concat(i, '\'\nAND g."time_class" = \'')
                .concat(s, '\'\nAND g."')
                .concat(r, '_username" = \'')
                .concat(
                  t,
                  '\'\nGROUP BY g."opening", g."opening_name"\nORDER BY total DESC\nLIMIT 10;'
                );
          return (
            ii.info(
              { username: t, side: r, limit: n },
              'buildOpeningsQuery query='.concat(l)
            ),
            ri.Prisma.raw(l)
          );
        },
        iO = (e) => {
          let { username: t, variant: r = 'chess', timeClass: n = 'blitz' } = e,
            i = 'SELECT\nSUM(CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_pawn" ELSE g."black_pawn" END) as pawn,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_knight" ELSE g."black_knight" END) as knight,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_bishop" ELSE g."black_bishop" END) as bishop,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_rook" ELSE g."black_rook" END) as rook,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_queen" ELSE g."black_queen" END) as queen,\nSUM(CASE WHEN g."white_username" = \''
              )
              .concat(
                t,
                '\' THEN g."white_king" ELSE g."black_king" END) as king\nFROM chess."game" as g\nWHERE (g."white_username" = \''
              )
              .concat(t, '\' OR g."black_username" = \'')
              .concat(t, '\')\nAND g."rated" = true\nAND g."rules" = \'')
              .concat(r, '\'\nAND g."time_class" = \'')
              .concat(n, "';");
          return (
            ii.info(
              { username: t },
              'buildMovesByPiecesQuery query='.concat(i)
            ),
            ri.Prisma.raw(i)
          );
        },
        iA = (e, t, r) => (n, i) => {
          let s = n.map((e) => "'".concat(e, "'")).join(',');
          return 'SUM(CASE WHEN\n  (CASE WHEN c."white_username" = \''
            .concat(
              e,
              '\' THEN c."white_castling" ELSE c."black_castling" END) = \''
            )
            .concat(t, '\' AND\n  (CASE WHEN c."white_username" = \'')
            .concat(
              e,
              '\' THEN c."black_castling" ELSE c."white_castling" END) = \''
            )
            .concat(r, '\' AND\n  (CASE WHEN c."white_username" = \'')
            .concat(
              e,
              '\' THEN c."white_result" ELSE c."black_result" END) IN ('
            )
            .concat(s, ') THEN 1 ELSE 0 END\n) as ')
            .concat(i);
        },
        ix = (e) => {
          let { username: t, variant: r = 'chess', timeClass: n = 'blitz' } = e,
            i = iA(t, 'short', 'short'),
            s = i(ih, 'short_short_win'),
            a = i(ip, 'short_short_draw'),
            o = i(im, 'short_short_loss'),
            u = iA(t, 'short', 'long'),
            l = u(ih, 'short_long_win'),
            c = u(ip, 'short_long_draw'),
            d = u(im, 'short_long_loss'),
            h = iA(t, 'short', ''),
            f = h(ih, 'short_none_win'),
            p = h(ip, 'short_none_draw'),
            m = h(im, 'short_none_loss'),
            y = iA(t, 'long', 'short'),
            g = y(ih, 'long_short_win'),
            b = y(ip, 'long_short_draw'),
            v = y(im, 'long_short_loss'),
            w = iA(t, 'long', 'long'),
            _ = w(ih, 'long_long_win'),
            E = w(ip, 'long_long_draw'),
            S = w(im, 'long_long_loss'),
            R = iA(t, 'long', ''),
            O = R(ih, 'long_none_win'),
            A = R(ip, 'long_none_draw'),
            x = R(im, 'long_none_loss'),
            C = iA(t, '', 'short'),
            N = C(ih, 'none_short_win'),
            k = C(ip, 'none_short_draw'),
            T = C(im, 'none_short_loss'),
            P = iA(t, '', 'long'),
            D = P(ih, 'none_long_win'),
            I = P(ip, 'none_long_draw'),
            j = P(im, 'none_long_loss'),
            M = iA(t, '', ''),
            U = M(ih, 'none_none_win'),
            L = M(ip, 'none_none_draw'),
            q = M(im, 'none_none_loss'),
            F = 'SELECT\n'
              .concat(s, ', ')
              .concat(a, ', ')
              .concat(o, ', ')
              .concat(l, ', ')
              .concat(c, ', ')
              .concat(d, ', ')
              .concat(f, ', ')
              .concat(p, ', ')
              .concat(m, ',\n')
              .concat(g, ', ')
              .concat(b, ', ')
              .concat(v, ', ')
              .concat(_, ', ')
              .concat(E, ', ')
              .concat(S, ', ')
              .concat(O, ', ')
              .concat(A, ', ')
              .concat(x, ',\n')
              .concat(N, ', ')
              .concat(k, ', ')
              .concat(T, ', ')
              .concat(D, ', ')
              .concat(I, ', ')
              .concat(j, ', ')
              .concat(U, ', ')
              .concat(L, ', ')
              .concat(
                q,
                '\nFROM chess."game" as c\nWHERE (c."white_username" = \''
              )
              .concat(t, '\' OR c."black_username" = \'')
              .concat(t, '\')\nAND c."rated" = true\nAND c."rules" = \'')
              .concat(r, '\'\nAND c."time_class" = \'')
              .concat(n, "';");
          return (
            ii.info(
              { username: t },
              'buildMovesByCastlingQuery query='.concat(F)
            ),
            ri.Prisma.raw(F)
          );
        },
        iC = (e) => {
          let { username: t, variant: r = 'chess', timeClass: n = 'blitz' } = e,
            i = ih.map((e) => "'".concat(e, "'")).join(','),
            s = ip.map((e) => "'".concat(e, "'")).join(','),
            a = im.map((e) => "'".concat(e, "'")).join(','),
            o =
              'SELECT\nc."flag",\np."country_code" as code,\nc."name",\nCOUNT(p."country_code") as total,\nSUM(CASE WHEN (CASE WHEN g."white_username" = \''
                .concat(
                  t,
                  '\' THEN g."white_result" ELSE g."black_result" END) IN ('
                )
                .concat(
                  i,
                  ') THEN 1 ELSE 0 END) as win,\nSUM(CASE WHEN (CASE WHEN g."white_username" = \''
                )
                .concat(
                  t,
                  '\' THEN g."white_result" ELSE g."black_result" END) IN ('
                )
                .concat(
                  s,
                  ') THEN 1 ELSE 0 END) as draw,\nSUM(CASE WHEN (CASE WHEN g."white_username" = \''
                )
                .concat(
                  t,
                  '\' THEN g."white_result" ELSE g."black_result" END) IN ('
                )
                .concat(
                  a,
                  ') THEN 1 ELSE 0 END) as loss\nFROM chess."game" as g\nJOIN chess."player" as p\nON (CASE g."white_username" WHEN \''
                )
                .concat(
                  t,
                  '\' THEN g."black_username" ELSE g."white_username" END) = p."username"\nJOIN chess."country" as c\nON c."cca2" = p."country_code"\nWHERE (g."white_username" = \''
                )
                .concat(t, '\' OR g."black_username" = \'')
                .concat(t, '\')\nAND g."rated" = true\nAND g."rules" = \'')
                .concat(r, '\'\nAND g."time_class" = \'')
                .concat(
                  n,
                  '\'\nGROUP BY c."flag", p."country_code", c."name"\nORDER BY total DESC;'
                );
          return ri.Prisma.raw(o);
        },
        iN = (e) => {
          let {
              username: t = '',
              limit: r = 100,
              variant: n = ri.Variant.chess,
              timeClass: i = ri.TimeClass.blitz,
              rated: s = !0,
            } = e,
            a = ih.map((e) => "'".concat(e, "'")).join(','),
            o = ip.map((e) => "'".concat(e, "'")).join(','),
            u = im.map((e) => "'".concat(e, "'")).join(','),
            l = '(CASE WHEN g."white_username" = \''.concat(
              t,
              '\' THEN g."black_username" ELSE g."white_username" END) as "opponent"'
            ),
            c = 'COUNT(1) FILTER (WHERE (CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_result" ELSE g."black_result" END) in ('
              )
              .concat(a, ')) as "win"'),
            d = 'COUNT(1) FILTER (WHERE (CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_result" ELSE g."black_result" END) in ('
              )
              .concat(o, ')) as "draw"'),
            h = 'COUNT(1) FILTER (WHERE (CASE WHEN g."white_username" = \''
              .concat(
                t,
                '\' THEN g."white_result" ELSE g."black_result" END) in ('
              )
              .concat(u, ')) as "loss"'),
            f = 'SELECT '
              .concat(l, ', ')
              .concat('COUNT(*) as "games"', ', ')
              .concat(c, ', ')
              .concat(d, ', ')
              .concat(h),
            p = iw({ username: t, variant: n, timeClass: i, rated: s }),
            m = ''
              .concat(f, ' ')
              .concat('FROM chess."game" as g', ' ')
              .concat(p, ' ')
              .concat('GROUP BY "opponent"', ' ')
              .concat('ORDER BY "games" DESC', ' ')
              .concat('LIMIT '.concat(r), ';');
          return (
            ii.info(
              { username: t, timeClass: i, variant: n },
              'buildOpponentsQuery query='.concat(m)
            ),
            ri.Prisma.raw(m)
          );
        },
        ik = async (e) => {
          let {
            username: t,
            variant: r = ri.Variant.chess,
            timeClass: n = ri.TimeClass.blitz,
            rated: i = !0,
          } = e;
          try {
            let e = iv(),
              {
                avatar: s,
                title: a,
                name: o,
              } = await e.player.findFirstOrThrow({ where: { username: t } }),
              u = { username: t, timeClass: n, variant: r, rated: i },
              l = iS({
                ...u,
                name: 'averageAccuracyQuery',
                sqlFunction: 'avg',
                accuracy: !0,
              }),
              c = iS({
                ...u,
                name: 'averageAccuracyQueryByWinResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: ih,
              }),
              d = iS({
                ...u,
                name: 'averageAccuracyQueryByDrawResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: ip,
              }),
              h = iS({
                ...u,
                name: 'averageAccuracyQueryByLossResults',
                sqlFunction: 'avg',
                accuracy: !0,
                results: im,
              }),
              f = iS({
                ...u,
                name: 'averageAccuracyQueryByYears',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'year',
              }),
              p = iS({
                ...u,
                name: 'averageAccuracyQueryByTimeOfDay',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'timeOfDay',
              }),
              m = iS({
                ...u,
                name: 'averageAccuracyQueryByDayOfWeek',
                sqlFunction: 'avg',
                accuracy: !0,
                column: 'dayOfWeek',
              }),
              y = i_(u),
              g = i_({ ...u, results: ih }),
              b = i_({ ...u, results: ip }),
              v = i_({ ...u, results: im }),
              w = iS({ ...u, name: 'gamesQueryByYear', column: 'year' }),
              _ = iS({
                ...u,
                name: 'gamesQueryByTimeOfDay',
                column: 'timeOfDay',
              }),
              E = iS({
                ...u,
                name: 'gamesQueryByDayOfWeek',
                column: 'dayOfWeek',
              }),
              S = iR({
                variant: r,
                username: t,
                timeClass: n,
                limit: 10,
                side: 'white',
              }),
              R = iR({
                variant: r,
                username: t,
                timeClass: n,
                limit: 10,
                side: 'black',
              }),
              O = iO({ variant: r, username: t, timeClass: n }),
              A = ix({ variant: r, username: t, timeClass: n }),
              x = iC({ variant: r, username: t, timeClass: n }),
              C = iN({ ...u, limit: 100 }),
              N = iS({
                ...u,
                name: 'winResultsQuery',
                column: 'result',
                results: ih,
              }),
              k = iS({
                ...u,
                name: 'drawResultsQuery',
                column: 'result',
                results: ip,
              }),
              T = iS({
                ...u,
                name: 'lossResultsQuery',
                column: 'result',
                results: im,
              }),
              P = iS({
                ...u,
                name: 'winResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: ih,
              }),
              D = iS({
                ...u,
                name: 'drawResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: ip,
              }),
              I = iS({
                ...u,
                name: 'lossResultsQueryByTimeOfDay',
                column: 'timeOfDay',
                results: im,
              }),
              j = iS({
                ...u,
                name: 'winResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: ih,
              }),
              M = iS({
                ...u,
                name: 'drawResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: ip,
              }),
              U = iS({
                ...u,
                name: 'lossResultsQueryByDayOfWeek',
                column: 'dayOfWeek',
                results: im,
              }),
              L = iS({
                ...u,
                name: 'winResultsQueryByOpponentRating',
                column: 'opponent',
                results: ih,
              }),
              q = iS({
                ...u,
                name: 'drawResultsQueryByOpponentRating',
                column: 'opponent',
                results: ip,
              }),
              F = iS({
                ...u,
                name: 'lossResultsQueryByOpponentRating',
                column: 'opponent',
                results: im,
              }),
              B = iS({
                ...u,
                endPhrase: !0,
                name: 'winResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: ih,
              }),
              Q = iS({
                ...u,
                endPhrase: !0,
                name: 'drawResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: ip,
              }),
              z = iS({
                ...u,
                endPhrase: !0,
                name: 'lossResultsQueryByEndPhrase',
                column: 'endPhrase',
                results: im,
              }),
              [
                [{ average: Z = 0 }] = [{ average: 0 }],
                [{ average: $ = 0 }] = [{ average: 0 }],
                [{ average: H = 0 }] = [{ average: 0 }],
                [{ average: W = 0 }] = [{ average: 0 }],
                V = [],
                K = [],
                G = [],
                J = [],
                Y = [],
                [
                  {
                    king: X = 0,
                    queen: ee = 0,
                    rook: et = 0,
                    bishop: er = 0,
                    knight: en = 0,
                    pawn: ei = 0,
                  },
                ] = [
                  { king: 0, queen: 0, rook: 0, bishop: 0, knight: 0, pawn: 0 },
                ],
                [
                  {
                    short_short_win: es = 0,
                    short_short_draw: ea = 0,
                    short_short_loss: eo = 0,
                    short_long_win: eu = 0,
                    short_long_draw: el = 0,
                    short_long_loss: ec = 0,
                    short_none_win: ed = 0,
                    short_none_draw: eh = 0,
                    short_none_loss: ef = 0,
                    long_short_win: ep = 0,
                    long_short_draw: em = 0,
                    long_short_loss: ey = 0,
                    long_long_win: eg = 0,
                    long_long_draw: eb = 0,
                    long_long_loss: ev = 0,
                    long_none_win: ew = 0,
                    long_none_draw: e_ = 0,
                    long_none_loss: eE = 0,
                    none_short_win: eS = 0,
                    none_short_draw: eR = 0,
                    none_short_loss: eO = 0,
                    none_long_win: eA = 0,
                    none_long_draw: ex = 0,
                    none_long_loss: eC = 0,
                    none_none_win: eN = 0,
                    none_none_draw: ek = 0,
                    none_none_loss: eT = 0,
                  },
                ] = [
                  {
                    short_short_win: 0,
                    short_short_draw: 0,
                    short_short_loss: 0,
                    short_long_win: 0,
                    short_long_draw: 0,
                    short_long_loss: 0,
                    short_none_win: 0,
                    short_none_draw: 0,
                    short_none_loss: 0,
                    long_short_win: 0,
                    long_short_draw: 0,
                    long_short_loss: 0,
                    long_long_win: 0,
                    long_long_draw: 0,
                    long_long_loss: 0,
                    long_none_win: 0,
                    long_none_draw: 0,
                    long_none_loss: 0,
                    none_short_win: 0,
                    none_short_draw: 0,
                    none_short_loss: 0,
                    none_long_win: 0,
                    none_long_draw: 0,
                    none_long_loss: 0,
                    none_none_win: 0,
                    none_none_draw: 0,
                    none_none_loss: 0,
                  },
                ],
                eP = [],
                eD = [],
                eI = 0,
                ej = 0,
                eM = 0,
                eU = 0,
                eL = [],
                eq = [],
                eF = [],
                eB = [],
                eQ = [],
                ez = [],
                eZ = [],
                e$ = [],
                eH = [],
                eW = [],
                eV = [],
                eK = [],
                eG = [],
                eJ = [],
                eY = [],
                eX = [],
                e0 = [],
                e1 = [],
              ] = await e.$transaction([
                e.$queryRaw(l),
                e.$queryRaw(c),
                e.$queryRaw(d),
                e.$queryRaw(h),
                e.$queryRaw(f),
                e.$queryRaw(p),
                e.$queryRaw(m),
                e.$queryRaw(S),
                e.$queryRaw(R),
                e.$queryRaw(O),
                e.$queryRaw(A),
                e.$queryRaw(x),
                e.$queryRaw(C),
                e.game.count({ where: y }),
                e.game.count({ where: g }),
                e.game.count({ where: b }),
                e.game.count({ where: v }),
                e.$queryRaw(w),
                e.$queryRaw(_),
                e.$queryRaw(E),
                e.$queryRaw(N),
                e.$queryRaw(k),
                e.$queryRaw(T),
                e.$queryRaw(P),
                e.$queryRaw(D),
                e.$queryRaw(I),
                e.$queryRaw(j),
                e.$queryRaw(M),
                e.$queryRaw(U),
                e.$queryRaw(L),
                e.$queryRaw(q),
                e.$queryRaw(F),
                e.$queryRaw(B),
                e.$queryRaw(Q),
                e.$queryRaw(z),
              ]),
              e2 = {
                average: Z,
                win: $,
                draw: H,
                loss: W,
                periods: V.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, period: r };
                }),
                timeOfDays: K.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, timeOfDay: [...ig][''.concat(r)] };
                }),
                daysOfWeek: G.map((e) => {
                  let { average: t, column: r } = e;
                  return { average: t, dayOfWeek: [...iy][''.concat(r)] };
                }),
              },
              e4 = eL.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return { games: parseInt(t.toString(), 10), period: r };
              }),
              e5 = eq.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return {
                  games: parseInt(t.toString(), 10),
                  timeOfDay: [...ig][''.concat(r)],
                };
              }),
              e3 = eF.map((e) => {
                let { count: t = 0, column: r = 0 } = e;
                return {
                  games: parseInt(t.toString(), 10),
                  dayOfWeek: [...iy][''.concat(r)],
                };
              }),
              e8 = eZ.map((e) => {
                var t, r;
                let { count: n, column: i } = e,
                  s = [...ig][''.concat(Number.parseInt(i.toString()))],
                  { count: a = 0 } =
                    null !==
                      (t = e$.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== t
                      ? t
                      : { draw: 0 },
                  { count: o = 0 } =
                    null !==
                      (r = eH.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== r
                      ? r
                      : { count: 0 };
                return {
                  timeOfDay: s,
                  win: parseInt(n.toString(), 10),
                  draw: parseInt(a.toString(), 10),
                  loss: parseInt(o.toString(), 10),
                };
              }),
              e6 = eW.map((e) => {
                var t, r;
                let { count: n, column: i } = e,
                  s = [...iy][''.concat(Number.parseInt(i.toString()))],
                  { count: a = 0 } =
                    null !==
                      (t = eV.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== t
                      ? t
                      : { draw: 0 },
                  { count: o = 0 } =
                    null !==
                      (r = eK.find((e) => {
                        let { column: t } = e;
                        return t.toString() === i.toString();
                      })) && void 0 !== r
                      ? r
                      : { count: 0 };
                return {
                  dayOfWeek: s,
                  win: parseInt(n.toString(), 10),
                  draw: parseInt(a.toString(), 10),
                  loss: parseInt(o.toString(), 10),
                };
              }),
              e9 = [
                ...new Set(
                  [...eG, ...eJ, ...eY].map((e) => {
                    let { column: t } = e;
                    return t;
                  })
                ),
              ]
                .map((e) => {
                  var t, r, n;
                  let { count: i = 0 } =
                      null !==
                        (t = eG.find((t) => {
                          let { column: r } = t;
                          return r.toString() === e.toString();
                        })) && void 0 !== t
                        ? t
                        : { count: 0 },
                    { count: s = 0 } =
                      null !==
                        (r = eJ.find((t) => {
                          let { column: r } = t;
                          return r.toString() === e.toString();
                        })) && void 0 !== r
                        ? r
                        : { count: 0 },
                    { count: a = 0 } =
                      null !==
                        (n = eY.find((t) => {
                          let { column: r } = t;
                          return r.toString() === e.toString();
                        })) && void 0 !== n
                        ? n
                        : { count: 0 };
                  return {
                    rating: 100 * e,
                    win: parseInt(i.toString(), 10),
                    draw: parseInt(s.toString(), 10),
                    loss: parseInt(a.toString(), 10),
                  };
                })
                .sort((e, t) => (e.rating > t.rating ? 1 : -1)),
              e7 = [
                ...new Set(
                  [...eX, ...e0, ...e1].map((e) => {
                    let { column: t } = e;
                    return t;
                  })
                ),
              ].map((e) => {
                var t, r, n;
                let { count: i = 0 } =
                    null !==
                      (t = eX.find((t) => {
                        let { column: r } = t;
                        return r.toString() === e.toString();
                      })) && void 0 !== t
                      ? t
                      : { count: 0 },
                  { count: s = 0 } =
                    null !==
                      (r = e0.find((t) => {
                        let { column: r } = t;
                        return r.toString() === e.toString();
                      })) && void 0 !== r
                      ? r
                      : { count: 0 },
                  { count: a = 0 } =
                    null !==
                      (n = e1.find((t) => {
                        let { column: r } = t;
                        return r.toString() === e.toString();
                      })) && void 0 !== n
                      ? n
                      : { count: 0 };
                return {
                  phrase: e.toString(),
                  win: parseInt(i.toString(), 10),
                  draw: parseInt(s.toString(), 10),
                  loss: parseInt(a.toString(), 10),
                };
              }),
              te = {
                win: eB.map((e) => {
                  let { column: t, count: r } = e;
                  return {
                    result: t.toString(),
                    count: parseInt(r.toString(), 10),
                  };
                }),
                draw: eQ.map((e) => {
                  let { column: t, count: r } = e;
                  return {
                    result: t.toString(),
                    count: parseInt(r.toString(), 10),
                  };
                }),
                loss: ez.map((e) => {
                  let { column: t, count: r } = e;
                  return {
                    result: t.toString(),
                    count: parseInt(r.toString(), 10),
                  };
                }),
                timeOfDays: e8,
                daysOfWeek: e6,
                opponents: e9,
                endPhrases: e7,
              };
            return (
              await e.$disconnect(),
              {
                username: t,
                avatar: s,
                title: a,
                name: o,
                accuracy: e2,
                results: te,
                games: {
                  total: eI,
                  win: ej,
                  draw: eM,
                  loss: eU,
                  periods: e4,
                  timeOfDays: e5,
                  daysOfWeek: e3,
                },
                openings: {
                  white: J.map((e) => {
                    let {
                      opening: t = '',
                      opening_name: r = '',
                      pgn: n = '',
                      total: i,
                      win: s,
                      draw: a,
                      loss: o,
                    } = e;
                    return {
                      opening: t,
                      opening_name: r,
                      pgn: n,
                      total: parseInt(i.toString(), 10),
                      win: parseInt(s.toString(), 10),
                      draw: parseInt(a.toString(), 10),
                      loss: parseInt(o.toString(), 10),
                    };
                  }),
                  black: Y.map((e) => {
                    let {
                      opening: t = '',
                      opening_name: r = '',
                      pgn: n = '',
                      total: i,
                      win: s,
                      draw: a,
                      loss: o,
                    } = e;
                    return {
                      opening: t,
                      opening_name: r,
                      pgn: n,
                      total: parseInt(i.toString(), 10),
                      win: parseInt(s.toString(), 10),
                      draw: parseInt(a.toString(), 10),
                      loss: parseInt(o.toString(), 10),
                    };
                  }),
                },
                moves: {
                  pieces: {
                    king: parseInt(X.toString(), 10),
                    queen: parseInt(ee.toString(), 10),
                    rook: parseInt(et.toString(), 10),
                    bishop: parseInt(er.toString(), 10),
                    knight: parseInt(en.toString(), 10),
                    pawn: parseInt(ei.toString(), 10),
                  },
                  castling: {
                    short: {
                      short: {
                        win: parseInt(es.toString(), 10),
                        draw: parseInt(ea.toString(), 10),
                        loss: parseInt(eo.toString(), 10),
                      },
                      long: {
                        win: parseInt(eu.toString(), 10),
                        draw: parseInt(el.toString(), 10),
                        loss: parseInt(ec.toString(), 10),
                      },
                      none: {
                        win: parseInt(ed.toString(), 10),
                        draw: parseInt(eh.toString(), 10),
                        loss: parseInt(ef.toString(), 10),
                      },
                    },
                    long: {
                      short: {
                        win: parseInt(ep.toString(), 10),
                        draw: parseInt(em.toString(), 10),
                        loss: parseInt(ey.toString(), 10),
                      },
                      long: {
                        win: parseInt(eg.toString(), 10),
                        draw: parseInt(eb.toString(), 10),
                        loss: parseInt(ev.toString(), 10),
                      },
                      none: {
                        win: parseInt(ew.toString(), 10),
                        draw: parseInt(e_.toString(), 10),
                        loss: parseInt(eE.toString(), 10),
                      },
                    },
                    none: {
                      short: {
                        win: parseInt(eS.toString(), 10),
                        draw: parseInt(eR.toString(), 10),
                        loss: parseInt(eO.toString(), 10),
                      },
                      long: {
                        win: parseInt(eA.toString(), 10),
                        draw: parseInt(ex.toString(), 10),
                        loss: parseInt(eC.toString(), 10),
                      },
                      none: {
                        win: parseInt(eN.toString(), 10),
                        draw: parseInt(ek.toString(), 10),
                        loss: parseInt(eT.toString(), 10),
                      },
                    },
                  },
                },
                geography: eP.map((e) => {
                  let {
                    flag: t = '',
                    code: r = '',
                    name: n = '',
                    total: i,
                    win: s,
                    draw: a,
                    loss: o,
                  } = e;
                  return {
                    flag: t,
                    code: r,
                    name: n,
                    total: parseInt(i.toString(), 10),
                    win: parseInt(s.toString(), 10),
                    draw: parseInt(a.toString(), 10),
                    loss: parseInt(o.toString(), 10),
                  };
                }),
                opponents: eD.map((e) => {
                  let {
                    opponent: t = '',
                    games: r,
                    win: n,
                    draw: i,
                    loss: s,
                  } = e;
                  return {
                    opponent: t,
                    games: parseInt(r.toString(), 10),
                    win: parseInt(n.toString(), 10),
                    draw: parseInt(i.toString(), 10),
                    loss: parseInt(s.toString(), 10),
                  };
                }),
              }
            );
          } catch (e) {
            return ii.error('getInsights error='.concat(e)), { username: t };
          }
        },
        iT = async (e) => {
          let { days: t, title: r, countryCode: n } = e,
            { count: i, overall: s } = await iD({
              days: t,
              title: r,
              countryCode: n,
            }),
            a = await iM({ days: t, title: r, countryCode: n }),
            o = await ij({ days: t, title: r, countryCode: n }),
            u = await iU({ days: t, title: r, countryCode: n });
          return (
            await ib.$disconnect(),
            {
              count: i,
              overall: s,
              distribution: o,
              countries: a,
              leaderboard: u,
            }
          );
        },
        iP = function (e) {
          let { days: t, title: r, countryCode: n } = e,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
          r && i.push('p."title" = \''.concat(r, "'")),
            n && i.push('p."country_code" = \''.concat(n, "'")),
            t &&
              i.push(
                'p."last_online" > now() - interval \''.concat(t, " days'")
              );
          let s = 0 === i.length ? '' : 'WHERE '.concat(i.join(' AND '));
          return ii.info('whereClause='.concat(s)), s;
        },
        iD = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                '-- Descriptive (Count - Average - Max) --\nSELECT COUNT(p."username") AS "count_total", -- Count - Total\nSUM(CASE WHEN p."title" = \'GM\' then 1 else 0 end) AS "count_gm", -- Count - GM\nSUM(CASE WHEN p."title" = \'IM\' then 1 else 0 end) AS "count_im", -- Count - IM\nSUM(CASE WHEN p."title" = \'FM\' then 1 else 0 end) AS "count_fm", -- Count - FM\nSUM(CASE WHEN p."title" = \'CM\' then 1 else 0 end) AS "count_cm", -- Count - CM\nSUM(CASE WHEN p."title" = \'NM\' then 1 else 0 end) AS "count_nm", -- Count - NM\nSUM(CASE WHEN p."title" = \'WGM\' then 1 else 0 end) AS "count_wgm", -- Count - WGM\nSUM(CASE WHEN p."title" = \'WIM\' then 1 else 0 end) AS "count_wim", -- Count - WIM\nSUM(CASE WHEN p."title" = \'WFM\' then 1 else 0 end) AS "count_wfm", -- Count - WFM\nSUM(CASE WHEN p."title" = \'WCM\' then 1 else 0 end) AS "count_wcm", -- Count - WCM\nSUM(CASE WHEN p."title" = \'WNM\' then 1 else 0 end) AS "count_wnm", -- Count - WNM\nCAST(ROUND(AVG(CASE WHEN p."rapid_rating_best" <> 0 THEN p."rapid_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_rapid_rating_best", -- Average\nCAST(ROUND(AVG(CASE WHEN p."blitz_rating_best" <> 0 THEN p."blitz_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_blitz_rating_best", -- Average\nCAST(ROUND(AVG(CASE WHEN p."bullet_rating_best" <> 0 THEN p."bullet_rating_best" ELSE NULL END), 2) AS FLOAT) AS "average_bullet_rating_best", -- Average\nMAX(p."rapid_rating_best") AS "max_rapid_rating_best", -- Max\nMAX(p."blitz_rating_best") AS "max_blitz_rating_best", -- Max\nMAX(p."bullet_rating_best") AS "max_bullet_rating_best" -- Max\nFROM chess."player" AS p\n'.concat(
                  iP({ days: t, title: r, countryCode: n }),
                  ';'
                ),
              i = ri.Prisma.raw(e),
              {
                count_total: s = 0,
                count_gm: a = 0,
                count_im: o = 0,
                count_fm: u = 0,
                count_cm: l = 0,
                count_nm: c = 0,
                count_wgm: d = 0,
                count_wim: h = 0,
                count_wfm: f = 0,
                count_wcm: p = 0,
                count_wnm: m = 0,
                average_rapid_rating_best: y = 0,
                average_blitz_rating_best: g = 0,
                average_bullet_rating_best: b = 0,
                max_rapid_rating_best: v = 0,
                max_blitz_rating_best: w = 0,
                max_bullet_rating_best: _ = 0,
              } = (await ib.$queryRaw(i))[0];
            return {
              count: {
                total: s,
                gm: a,
                im: o,
                fm: u,
                cm: l,
                nm: c,
                wgm: d,
                wim: h,
                wfm: f,
                wcm: p,
                wnm: m,
              },
              overall: {
                rapid: { average: y, max: v },
                blitz: { average: g, max: w },
                bullet: { average: b, max: _ },
              },
            };
          } catch (e) {
            return (
              ii.error('getDescriptive error='.concat(e)),
              {
                count: {
                  total: 0,
                  gm: 0,
                  im: 0,
                  fm: 0,
                  cm: 0,
                  nm: 0,
                  wgm: 0,
                  wim: 0,
                  wfm: 0,
                  wcm: 0,
                  wnm: 0,
                },
                rapid: { average: 0, max: 0 },
                blitz: { average: 0, max: 0 },
                bullet: { average: 0, max: 0 },
              }
            );
          }
        },
        iI = async (e) => {
          let { days: t, title: r, countryCode: n, timeClass: i } = e;
          try {
            let e = 'SELECT COUNT(p."username") AS "total", (FLOOR((p."'
                .concat(
                  i,
                  '_rating_last" / 100)) * 100) AS "group" FROM chess."player" AS p '
                )
                .concat(
                  iP({ days: t, title: r, countryCode: n }, [
                    '(FLOOR((p."'.concat(
                      i,
                      '_rating_last" / 100)) * 100) <> 0'
                    ),
                  ]),
                  ' GROUP BY "group" ORDER BY "group";'
                ),
              s = ri.Prisma.raw(e);
            return ib.$queryRaw(s);
          } catch (e) {
            return ii.error('getDistributionByTimeClass error='.concat(e)), [];
          }
        },
        ij = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          return {
            rapid: await iI({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'rapid',
            }),
            blitz: await iI({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'blitz',
            }),
            bullet: await iI({
              days: t,
              title: r,
              countryCode: n,
              timeClass: 'bullet',
            }),
          };
        },
        iM = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                'SELECT p."country_code", p."country", COUNT(p."username") AS "count" FROM chess."player" AS p '.concat(
                  iP({ days: t, title: r, countryCode: n }),
                  ' GROUP BY p."country_code", p."country"\nORDER BY p."count" DESC;'
                ),
              i = ri.Prisma.raw(e);
            return ib.$queryRaw(i);
          } catch (e) {
            return ii.error('getCountries error='.concat(e)), [];
          }
        },
        iU = async (e) => {
          let { days: t, title: r, countryCode: n } = e;
          try {
            let e =
                'SELECT p."title", p."country_code", p."country", p."username", p."name", p."bullet_rating_best", p."blitz_rating_best", p."rapid_rating_best" FROM chess."player" AS p '.concat(
                  iP({ days: t, title: r, countryCode: n }),
                  ' ORDER BY p."blitz_rating_best" DESC, p."bullet_rating_best" DESC, p."rapid_rating_best" DESC LIMIT 100 OFFSET 0 ;'
                ),
              i = ri.Prisma.raw(e);
            return ib.$queryRaw(i);
          } catch (e) {
            return ii.error('getLeaderboard error='.concat(e)), [];
          }
        },
        {
          Axios: iL,
          AxiosError: iq,
          CanceledError: iF,
          isCancel: iB,
          CancelToken: iQ,
          VERSION: iz,
          all: iZ,
          Cancel: i$,
          isAxiosError: iH,
          spread: iW,
          toFormData: iV,
          AxiosHeaders: iK,
          HttpStatusCode: iG,
          formToJSON: iJ,
          getAdapter: iY,
          mergeConfig: iX,
        } = n8;
      !(function (e) {
        (e.assertEqual = (e) => e),
          (e.assertIs = function (e) {}),
          (e.assertNever = function (e) {
            throw Error();
          }),
          (e.arrayToEnum = (e) => {
            let t = {};
            for (let r of e) t[r] = r;
            return t;
          }),
          (e.getValidEnumValues = (t) => {
            let r = e.objectKeys(t).filter((e) => 'number' != typeof t[t[e]]),
              n = {};
            for (let e of r) n[e] = t[e];
            return e.objectValues(n);
          }),
          (e.objectValues = (t) =>
            e.objectKeys(t).map(function (e) {
              return t[e];
            })),
          (e.objectKeys =
            'function' == typeof Object.keys
              ? (e) => Object.keys(e)
              : (e) => {
                  let t = [];
                  for (let r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                  return t;
                }),
          (e.find = (e, t) => {
            for (let r of e) if (t(r)) return r;
          }),
          (e.isInteger =
            'function' == typeof Number.isInteger
              ? (e) => Number.isInteger(e)
              : (e) =>
                  'number' == typeof e && isFinite(e) && Math.floor(e) === e),
          (e.joinValues = function (e, t = ' | ') {
            return e.map((e) => ('string' == typeof e ? `'${e}'` : e)).join(t);
          }),
          (e.jsonStringifyReplacer = (e, t) =>
            'bigint' == typeof t ? t.toString() : t);
      })(h || (h = {})),
        ((f || (f = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let i0 = h.arrayToEnum([
          'string',
          'nan',
          'number',
          'integer',
          'float',
          'boolean',
          'date',
          'bigint',
          'symbol',
          'function',
          'undefined',
          'null',
          'array',
          'object',
          'unknown',
          'promise',
          'void',
          'never',
          'map',
          'set',
        ]),
        i1 = (e) => {
          switch (typeof e) {
            case 'undefined':
              return i0.undefined;
            case 'string':
              return i0.string;
            case 'number':
              return isNaN(e) ? i0.nan : i0.number;
            case 'boolean':
              return i0.boolean;
            case 'function':
              return i0.function;
            case 'bigint':
              return i0.bigint;
            case 'symbol':
              return i0.symbol;
            case 'object':
              if (Array.isArray(e)) return i0.array;
              if (null === e) return i0.null;
              if (
                e.then &&
                'function' == typeof e.then &&
                e.catch &&
                'function' == typeof e.catch
              )
                return i0.promise;
              if ('undefined' != typeof Map && e instanceof Map) return i0.map;
              if ('undefined' != typeof Set && e instanceof Set) return i0.set;
              if ('undefined' != typeof Date && e instanceof Date)
                return i0.date;
              return i0.object;
            default:
              return i0.unknown;
          }
        },
        i2 = h.arrayToEnum([
          'invalid_type',
          'invalid_literal',
          'custom',
          'invalid_union',
          'invalid_union_discriminator',
          'invalid_enum_value',
          'unrecognized_keys',
          'invalid_arguments',
          'invalid_return_type',
          'invalid_date',
          'invalid_string',
          'too_small',
          'too_big',
          'invalid_intersection_types',
          'not_multiple_of',
          'not_finite',
        ]);
      class i4 extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e);
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            r = { _errors: [] },
            n = (e) => {
              for (let i of e.issues)
                if ('invalid_union' === i.code) i.unionErrors.map(n);
                else if ('invalid_return_type' === i.code) n(i.returnTypeError);
                else if ('invalid_arguments' === i.code) n(i.argumentsError);
                else if (0 === i.path.length) r._errors.push(t(i));
                else {
                  let e = r,
                    n = 0;
                  for (; n < i.path.length; ) {
                    let r = i.path[n];
                    n === i.path.length - 1
                      ? ((e[r] = e[r] || { _errors: [] }),
                        e[r]._errors.push(t(i)))
                      : (e[r] = e[r] || { _errors: [] }),
                      (e = e[r]),
                      n++;
                  }
                }
            };
          return n(this), r;
        }
        static assert(e) {
          if (!(e instanceof i4)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, h.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            r = [];
          for (let n of this.issues)
            n.path.length > 0
              ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n)))
              : r.push(e(n));
          return { formErrors: r, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      i4.create = (e) => new i4(e);
      let i5 = (e, t) => {
          let r;
          switch (e.code) {
            case i2.invalid_type:
              r =
                e.received === i0.undefined
                  ? 'Required'
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case i2.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(e.expected, h.jsonStringifyReplacer)}`;
              break;
            case i2.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${h.joinValues(e.keys, ', ')}`;
              break;
            case i2.invalid_union:
              r = 'Invalid input';
              break;
            case i2.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${h.joinValues(e.options)}`;
              break;
            case i2.invalid_enum_value:
              r = `Invalid enum value. Expected ${h.joinValues(e.options)}, received '${e.received}'`;
              break;
            case i2.invalid_arguments:
              r = 'Invalid function arguments';
              break;
            case i2.invalid_return_type:
              r = 'Invalid function return type';
              break;
            case i2.invalid_date:
              r = 'Invalid date';
              break;
            case i2.invalid_string:
              'object' == typeof e.validation
                ? 'includes' in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    'number' == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : 'startsWith' in e.validation
                    ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                    : 'endsWith' in e.validation
                      ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                      : h.assertNever(e.validation)
                : (r =
                    'regex' !== e.validation
                      ? `Invalid ${e.validation}`
                      : 'Invalid');
              break;
            case i2.too_small:
              r =
                'array' === e.type
                  ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`
                  : 'string' === e.type
                    ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`
                    : 'number' === e.type
                      ? `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`
                      : 'date' === e.type
                        ? `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`
                        : 'Invalid input';
              break;
            case i2.too_big:
              r =
                'array' === e.type
                  ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`
                  : 'string' === e.type
                    ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`
                    : 'number' === e.type
                      ? `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                      : 'bigint' === e.type
                        ? `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                        : 'date' === e.type
                          ? `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`
                          : 'Invalid input';
              break;
            case i2.custom:
              r = 'Invalid input';
              break;
            case i2.invalid_intersection_types:
              r = 'Intersection results could not be merged';
              break;
            case i2.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case i2.not_finite:
              r = 'Number must be finite';
              break;
            default:
              (r = t.defaultError), h.assertNever(e);
          }
          return { message: r };
        },
        i3 = i5;
      function i8() {
        return i3;
      }
      let i6 = (e) => {
        let { data: t, path: r, errorMaps: n, issueData: i } = e,
          s = [...r, ...(i.path || [])],
          a = { ...i, path: s };
        if (void 0 !== i.message) return { ...i, path: s, message: i.message };
        let o = '';
        for (let e of n
          .filter((e) => !!e)
          .slice()
          .reverse())
          o = e(a, { data: t, defaultError: o }).message;
        return { ...i, path: s, message: o };
      };
      function i9(e, t) {
        let r = i8(),
          n = i6({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              r,
              r === i5 ? void 0 : i5,
            ].filter((e) => !!e),
          });
        e.common.issues.push(n);
      }
      class i7 {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          'valid' === this.value && (this.value = 'dirty');
        }
        abort() {
          'aborted' !== this.value && (this.value = 'aborted');
        }
        static mergeArray(e, t) {
          let r = [];
          for (let n of t) {
            if ('aborted' === n.status) return se;
            'dirty' === n.status && e.dirty(), r.push(n.value);
          }
          return { status: e.value, value: r };
        }
        static async mergeObjectAsync(e, t) {
          let r = [];
          for (let e of t) {
            let t = await e.key,
              n = await e.value;
            r.push({ key: t, value: n });
          }
          return i7.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          let r = {};
          for (let n of t) {
            let { key: t, value: i } = n;
            if ('aborted' === t.status || 'aborted' === i.status) return se;
            'dirty' === t.status && e.dirty(),
              'dirty' === i.status && e.dirty(),
              '__proto__' !== t.value &&
                (void 0 !== i.value || n.alwaysSet) &&
                (r[t.value] = i.value);
          }
          return { status: e.value, value: r };
        }
      }
      let se = Object.freeze({ status: 'aborted' }),
        st = (e) => ({ status: 'dirty', value: e }),
        sr = (e) => ({ status: 'valid', value: e }),
        sn = (e) => 'aborted' === e.status,
        si = (e) => 'dirty' === e.status,
        ss = (e) => 'valid' === e.status,
        sa = (e) => 'undefined' != typeof Promise && e instanceof Promise;
      function so(e, t, r, n) {
        if ('a' === r && !n)
          throw TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            'Cannot read private member from an object whose class did not declare it'
          );
        return 'm' === r ? n : 'a' === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function su(e, t, r, n, i) {
        if ('m' === n) throw TypeError('Private method is not writable');
        if ('a' === n && !i)
          throw TypeError('Private accessor was defined without a setter');
        if ('function' == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            'Cannot write private member to an object whose class did not declare it'
          );
        return 'a' === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
      }
      'function' == typeof SuppressedError && SuppressedError,
        (function (e) {
          (e.errToObj = (e) =>
            'string' == typeof e ? { message: e } : e || {}),
            (e.toString = (e) =>
              'string' == typeof e ? e : null == e ? void 0 : e.message);
        })(p || (p = {}));
      class sl {
        constructor(e, t, r, n) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = r),
            (this._key = n);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let sc = (e, t) => {
        if (ss(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new i4(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function sd(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: r,
          required_error: n,
          description: i,
        } = e;
        if (t && (r || n))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return t
          ? { errorMap: t, description: i }
          : {
              errorMap: (t, i) => {
                var s, a;
                let { message: o } = e;
                return 'invalid_enum_value' === t.code
                  ? { message: null != o ? o : i.defaultError }
                  : void 0 === i.data
                    ? {
                        message:
                          null !== (s = null != o ? o : n) && void 0 !== s
                            ? s
                            : i.defaultError,
                      }
                    : 'invalid_type' !== t.code
                      ? { message: i.defaultError }
                      : {
                          message:
                            null !== (a = null != o ? o : r) && void 0 !== a
                              ? a
                              : i.defaultError,
                        };
              },
              description: i,
            };
      }
      class sh {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return i1(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: i1(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new i7(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: i1(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (sa(t)) throw Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let r = this.safeParse(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(e, t) {
          var r;
          let n = {
              common: {
                issues: [],
                async:
                  null !== (r = null == t ? void 0 : t.async) &&
                  void 0 !== r &&
                  r,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i1(e),
            },
            i = this._parseSync({ data: e, path: n.path, parent: n });
          return sc(n, i);
        }
        '~validate'(e) {
          var t, r;
          let n = {
            common: { issues: [], async: !!this['~standard'].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: i1(e),
          };
          if (!this['~standard'].async)
            try {
              let t = this._parseSync({ data: e, path: [], parent: n });
              return ss(t) ? { value: t.value } : { issues: n.common.issues };
            } catch (e) {
              (null ===
                (r =
                  null === (t = null == e ? void 0 : e.message) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) || void 0 === r
                ? void 0
                : r.includes('encountered')) && (this['~standard'].async = !0),
                (n.common = { issues: [], async: !0 });
            }
          return this._parseAsync({ data: e, path: [], parent: n }).then((e) =>
            ss(e) ? { value: e.value } : { issues: n.common.issues }
          );
        }
        async parseAsync(e, t) {
          let r = await this.safeParseAsync(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(e, t) {
          let r = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i1(e),
            },
            n = this._parse({ data: e, path: r.path, parent: r });
          return sc(r, await (sa(n) ? n : Promise.resolve(n)));
        }
        refine(e, t) {
          let r = (e) =>
            'string' == typeof t || void 0 === t
              ? { message: t }
              : 'function' == typeof t
                ? t(e)
                : t;
          return this._refinement((t, n) => {
            let i = e(t),
              s = () => n.addIssue({ code: i2.custom, ...r(t) });
            return 'undefined' != typeof Promise && i instanceof Promise
              ? i.then((e) => !!e || (s(), !1))
              : !!i || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (r, n) =>
              !!e(r) || (n.addIssue('function' == typeof t ? t(r, n) : t), !1)
          );
        }
        _refinement(e) {
          return new s8({
            schema: this,
            typeName: g.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this)),
            (this['~standard'] = {
              version: 1,
              vendor: 'zod',
              validate: (e) => this['~validate'](e),
            });
        }
        optional() {
          return s6.create(this, this._def);
        }
        nullable() {
          return s9.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return sz.create(this);
        }
        promise() {
          return s3.create(this, this._def);
        }
        or(e) {
          return s$.create([this, e], this._def);
        }
        and(e) {
          return sV.create(this, e, this._def);
        }
        transform(e) {
          return new s8({
            ...sd(this._def),
            schema: this,
            typeName: g.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          return new s7({
            ...sd(this._def),
            innerType: this,
            defaultValue: 'function' == typeof e ? e : () => e,
            typeName: g.ZodDefault,
          });
        }
        brand() {
          return new an({
            typeName: g.ZodBranded,
            type: this,
            ...sd(this._def),
          });
        }
        catch(e) {
          return new ae({
            ...sd(this._def),
            innerType: this,
            catchValue: 'function' == typeof e ? e : () => e,
            typeName: g.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return ai.create(this, e);
        }
        readonly() {
          return as.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let sf = /^c[^\s-]{8,}$/i,
        sp = /^[0-9a-z]+$/,
        sm = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        sy =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        sg = /^[a-z0-9_-]{21}$/i,
        sb = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        sv =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        sw =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        s_ =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        sE =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        sS =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        sR =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        sO = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        sA =
          /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        sx =
          '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
        sC = RegExp(`^${sx}$`);
      function sN(e) {
        let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
        return (
          e.precision
            ? (t = `${t}\\.\\d{${e.precision}}`)
            : null == e.precision && (t = `${t}(\\.\\d+)?`),
          t
        );
      }
      function sk(e) {
        let t = `${sx}T${sN(e)}`,
          r = [];
        return (
          r.push(e.local ? 'Z?' : 'Z'),
          e.offset && r.push('([+-]\\d{2}:?\\d{2})'),
          (t = `${t}(${r.join('|')})`),
          RegExp(`^${t}$`)
        );
      }
      class sT extends sh {
        _parse(e) {
          var t, r, i, s;
          let a;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== i0.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.string,
                received: t.parsedType,
              }),
              se
            );
          }
          let o = new i7();
          for (let u of this._def.checks)
            if ('min' === u.kind)
              e.data.length < u.value &&
                (i9((a = this._getOrReturnCtx(e, a)), {
                  code: i2.too_small,
                  minimum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ('max' === u.kind)
              e.data.length > u.value &&
                (i9((a = this._getOrReturnCtx(e, a)), {
                  code: i2.too_big,
                  maximum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ('length' === u.kind) {
              let t = e.data.length > u.value,
                r = e.data.length < u.value;
              (t || r) &&
                ((a = this._getOrReturnCtx(e, a)),
                t
                  ? i9(a, {
                      code: i2.too_big,
                      maximum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    })
                  : r &&
                    i9(a, {
                      code: i2.too_small,
                      minimum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    }),
                o.dirty());
            } else if ('email' === u.kind)
              sw.test(e.data) ||
                (i9((a = this._getOrReturnCtx(e, a)), {
                  validation: 'email',
                  code: i2.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('emoji' === u.kind)
              n ||
                (n = RegExp(
                  '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
                  'u'
                )),
                n.test(e.data) ||
                  (i9((a = this._getOrReturnCtx(e, a)), {
                    validation: 'emoji',
                    code: i2.invalid_string,
                    message: u.message,
                  }),
                  o.dirty());
            else if ('uuid' === u.kind)
              sy.test(e.data) ||
                (i9((a = this._getOrReturnCtx(e, a)), {
                  validation: 'uuid',
                  code: i2.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('nanoid' === u.kind)
              sg.test(e.data) ||
                (i9((a = this._getOrReturnCtx(e, a)), {
                  validation: 'nanoid',
                  code: i2.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('cuid' === u.kind)
              sf.test(e.data) ||
                (i9((a = this._getOrReturnCtx(e, a)), {
                  validation: 'cuid',
                  code: i2.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('cuid2' === u.kind)
              sp.test(e.data) ||
                (i9((a = this._getOrReturnCtx(e, a)), {
                  validation: 'cuid2',
                  code: i2.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('ulid' === u.kind)
              sm.test(e.data) ||
                (i9((a = this._getOrReturnCtx(e, a)), {
                  validation: 'ulid',
                  code: i2.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('url' === u.kind)
              try {
                new URL(e.data);
              } catch (t) {
                i9((a = this._getOrReturnCtx(e, a)), {
                  validation: 'url',
                  code: i2.invalid_string,
                  message: u.message,
                }),
                  o.dirty();
              }
            else
              'regex' === u.kind
                ? ((u.regex.lastIndex = 0),
                  u.regex.test(e.data) ||
                    (i9((a = this._getOrReturnCtx(e, a)), {
                      validation: 'regex',
                      code: i2.invalid_string,
                      message: u.message,
                    }),
                    o.dirty()))
                : 'trim' === u.kind
                  ? (e.data = e.data.trim())
                  : 'includes' === u.kind
                    ? e.data.includes(u.value, u.position) ||
                      (i9((a = this._getOrReturnCtx(e, a)), {
                        code: i2.invalid_string,
                        validation: { includes: u.value, position: u.position },
                        message: u.message,
                      }),
                      o.dirty())
                    : 'toLowerCase' === u.kind
                      ? (e.data = e.data.toLowerCase())
                      : 'toUpperCase' === u.kind
                        ? (e.data = e.data.toUpperCase())
                        : 'startsWith' === u.kind
                          ? e.data.startsWith(u.value) ||
                            (i9((a = this._getOrReturnCtx(e, a)), {
                              code: i2.invalid_string,
                              validation: { startsWith: u.value },
                              message: u.message,
                            }),
                            o.dirty())
                          : 'endsWith' === u.kind
                            ? e.data.endsWith(u.value) ||
                              (i9((a = this._getOrReturnCtx(e, a)), {
                                code: i2.invalid_string,
                                validation: { endsWith: u.value },
                                message: u.message,
                              }),
                              o.dirty())
                            : 'datetime' === u.kind
                              ? sk(u).test(e.data) ||
                                (i9((a = this._getOrReturnCtx(e, a)), {
                                  code: i2.invalid_string,
                                  validation: 'datetime',
                                  message: u.message,
                                }),
                                o.dirty())
                              : 'date' === u.kind
                                ? sC.test(e.data) ||
                                  (i9((a = this._getOrReturnCtx(e, a)), {
                                    code: i2.invalid_string,
                                    validation: 'date',
                                    message: u.message,
                                  }),
                                  o.dirty())
                                : 'time' === u.kind
                                  ? RegExp(`^${sN(u)}$`).test(e.data) ||
                                    (i9((a = this._getOrReturnCtx(e, a)), {
                                      code: i2.invalid_string,
                                      validation: 'time',
                                      message: u.message,
                                    }),
                                    o.dirty())
                                  : 'duration' === u.kind
                                    ? sv.test(e.data) ||
                                      (i9((a = this._getOrReturnCtx(e, a)), {
                                        validation: 'duration',
                                        code: i2.invalid_string,
                                        message: u.message,
                                      }),
                                      o.dirty())
                                    : 'ip' === u.kind
                                      ? ((t = e.data),
                                        (('v4' === (r = u.version) || !r) &&
                                          s_.test(t)) ||
                                          (('v6' === r || !r) && sS.test(t)) ||
                                          (i9(
                                            (a = this._getOrReturnCtx(e, a)),
                                            {
                                              validation: 'ip',
                                              code: i2.invalid_string,
                                              message: u.message,
                                            }
                                          ),
                                          o.dirty()))
                                      : 'jwt' === u.kind
                                        ? !(function (e, t) {
                                            if (!sb.test(e)) return !1;
                                            try {
                                              let [r] = e.split('.'),
                                                n = r
                                                  .replace(/-/g, '+')
                                                  .replace(/_/g, '/')
                                                  .padEnd(
                                                    r.length +
                                                      ((4 - (r.length % 4)) %
                                                        4),
                                                    '='
                                                  ),
                                                i = JSON.parse(atob(n));
                                              if (
                                                'object' != typeof i ||
                                                null === i ||
                                                !i.typ ||
                                                !i.alg ||
                                                (t && i.alg !== t)
                                              )
                                                return !1;
                                              return !0;
                                            } catch (e) {
                                              return !1;
                                            }
                                          })(e.data, u.alg) &&
                                          (i9(
                                            (a = this._getOrReturnCtx(e, a)),
                                            {
                                              validation: 'jwt',
                                              code: i2.invalid_string,
                                              message: u.message,
                                            }
                                          ),
                                          o.dirty())
                                        : 'cidr' === u.kind
                                          ? ((i = e.data),
                                            (('v4' === (s = u.version) || !s) &&
                                              sE.test(i)) ||
                                              (('v6' === s || !s) &&
                                                sR.test(i)) ||
                                              (i9(
                                                (a = this._getOrReturnCtx(
                                                  e,
                                                  a
                                                )),
                                                {
                                                  validation: 'cidr',
                                                  code: i2.invalid_string,
                                                  message: u.message,
                                                }
                                              ),
                                              o.dirty()))
                                          : 'base64' === u.kind
                                            ? sO.test(e.data) ||
                                              (i9(
                                                (a = this._getOrReturnCtx(
                                                  e,
                                                  a
                                                )),
                                                {
                                                  validation: 'base64',
                                                  code: i2.invalid_string,
                                                  message: u.message,
                                                }
                                              ),
                                              o.dirty())
                                            : 'base64url' === u.kind
                                              ? sA.test(e.data) ||
                                                (i9(
                                                  (a = this._getOrReturnCtx(
                                                    e,
                                                    a
                                                  )),
                                                  {
                                                    validation: 'base64url',
                                                    code: i2.invalid_string,
                                                    message: u.message,
                                                  }
                                                ),
                                                o.dirty())
                                              : h.assertNever(u);
          return { status: o.value, value: e.data };
        }
        _regex(e, t, r) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: i2.invalid_string,
            ...p.errToObj(r),
          });
        }
        _addCheck(e) {
          return new sT({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...p.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...p.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...p.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...p.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: 'nanoid', ...p.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...p.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...p.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...p.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: 'base64', ...p.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: 'base64url', ...p.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: 'jwt', ...p.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...p.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: 'cidr', ...p.errToObj(e) });
        }
        datetime(e) {
          var t, r;
          return 'string' == typeof e
            ? this._addCheck({
                kind: 'datetime',
                precision: null,
                offset: !1,
                local: !1,
                message: e,
              })
            : this._addCheck({
                kind: 'datetime',
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                      ? void 0
                      : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                local:
                  null !== (r = null == e ? void 0 : e.local) &&
                  void 0 !== r &&
                  r,
                ...p.errToObj(null == e ? void 0 : e.message),
              });
        }
        date(e) {
          return this._addCheck({ kind: 'date', message: e });
        }
        time(e) {
          return 'string' == typeof e
            ? this._addCheck({ kind: 'time', precision: null, message: e })
            : this._addCheck({
                kind: 'time',
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                      ? void 0
                      : e.precision,
                ...p.errToObj(null == e ? void 0 : e.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: 'duration', ...p.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...p.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: null == t ? void 0 : t.position,
            ...p.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: 'startsWith',
            value: e,
            ...p.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: 'endsWith',
            value: e,
            ...p.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...p.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...p.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: 'length', value: e, ...p.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, p.errToObj(e));
        }
        trim() {
          return new sT({
            ...this._def,
            checks: [...this._def.checks, { kind: 'trim' }],
          });
        }
        toLowerCase() {
          return new sT({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toLowerCase' }],
          });
        }
        toUpperCase() {
          return new sT({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toUpperCase' }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => 'datetime' === e.kind);
        }
        get isDate() {
          return !!this._def.checks.find((e) => 'date' === e.kind);
        }
        get isTime() {
          return !!this._def.checks.find((e) => 'time' === e.kind);
        }
        get isDuration() {
          return !!this._def.checks.find((e) => 'duration' === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => 'email' === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => 'url' === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => 'emoji' === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => 'uuid' === e.kind);
        }
        get isNANOID() {
          return !!this._def.checks.find((e) => 'nanoid' === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => 'cuid' === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => 'cuid2' === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => 'ulid' === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => 'ip' === e.kind);
        }
        get isCIDR() {
          return !!this._def.checks.find((e) => 'cidr' === e.kind);
        }
        get isBase64() {
          return !!this._def.checks.find((e) => 'base64' === e.kind);
        }
        get isBase64url() {
          return !!this._def.checks.find((e) => 'base64url' === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      sT.create = (e) => {
        var t;
        return new sT({
          checks: [],
          typeName: g.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...sd(e),
        });
      };
      class sP extends sh {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== i0.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.number,
                received: t.parsedType,
              }),
              se
            );
          }
          let r = new i7();
          for (let n of this._def.checks)
            'int' === n.kind
              ? h.isInteger(e.data) ||
                (i9((t = this._getOrReturnCtx(e, t)), {
                  code: i2.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: n.message,
                }),
                r.dirty())
              : 'min' === n.kind
                ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                  (i9((t = this._getOrReturnCtx(e, t)), {
                    code: i2.too_small,
                    minimum: n.value,
                    type: 'number',
                    inclusive: n.inclusive,
                    exact: !1,
                    message: n.message,
                  }),
                  r.dirty())
                : 'max' === n.kind
                  ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                    (i9((t = this._getOrReturnCtx(e, t)), {
                      code: i2.too_big,
                      maximum: n.value,
                      type: 'number',
                      inclusive: n.inclusive,
                      exact: !1,
                      message: n.message,
                    }),
                    r.dirty())
                  : 'multipleOf' === n.kind
                    ? 0 !==
                        (function (e, t) {
                          let r = (e.toString().split('.')[1] || '').length,
                            n = (t.toString().split('.')[1] || '').length,
                            i = r > n ? r : n;
                          return (
                            (parseInt(e.toFixed(i).replace('.', '')) %
                              parseInt(t.toFixed(i).replace('.', ''))) /
                            Math.pow(10, i)
                          );
                        })(e.data, n.value) &&
                      (i9((t = this._getOrReturnCtx(e, t)), {
                        code: i2.not_multiple_of,
                        multipleOf: n.value,
                        message: n.message,
                      }),
                      r.dirty())
                    : 'finite' === n.kind
                      ? Number.isFinite(e.data) ||
                        (i9((t = this._getOrReturnCtx(e, t)), {
                          code: i2.not_finite,
                          message: n.message,
                        }),
                        r.dirty())
                      : h.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, p.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, p.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, p.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, p.toString(t));
        }
        setLimit(e, t, r, n) {
          return new sP({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: p.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new sP({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: p.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !1,
            message: p.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !1,
            message: p.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !0,
            message: p.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !0,
            message: p.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: p.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: p.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: p.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: p.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              'int' === e.kind ||
              ('multipleOf' === e.kind && h.isInteger(e.value))
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let r of this._def.checks) {
            if (
              'finite' === r.kind ||
              'int' === r.kind ||
              'multipleOf' === r.kind
            )
              return !0;
            'min' === r.kind
              ? (null === t || r.value > t) && (t = r.value)
              : 'max' === r.kind &&
                (null === e || r.value < e) &&
                (e = r.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      sP.create = (e) =>
        new sP({
          checks: [],
          typeName: g.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...sd(e),
        });
      class sD extends sh {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          let t;
          if (this._def.coerce)
            try {
              e.data = BigInt(e.data);
            } catch (t) {
              return this._getInvalidInput(e);
            }
          if (this._getType(e) !== i0.bigint) return this._getInvalidInput(e);
          let r = new i7();
          for (let n of this._def.checks)
            'min' === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (i9((t = this._getOrReturnCtx(e, t)), {
                  code: i2.too_small,
                  type: 'bigint',
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : 'max' === n.kind
                ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                  (i9((t = this._getOrReturnCtx(e, t)), {
                    code: i2.too_big,
                    type: 'bigint',
                    maximum: n.value,
                    inclusive: n.inclusive,
                    message: n.message,
                  }),
                  r.dirty())
                : 'multipleOf' === n.kind
                  ? e.data % n.value !== BigInt(0) &&
                    (i9((t = this._getOrReturnCtx(e, t)), {
                      code: i2.not_multiple_of,
                      multipleOf: n.value,
                      message: n.message,
                    }),
                    r.dirty())
                  : h.assertNever(n);
          return { status: r.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            i9(t, {
              code: i2.invalid_type,
              expected: i0.bigint,
              received: t.parsedType,
            }),
            se
          );
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, p.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, p.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, p.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, p.toString(t));
        }
        setLimit(e, t, r, n) {
          return new sD({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: p.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new sD({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: p.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: p.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: p.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: p.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: p.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      sD.create = (e) => {
        var t;
        return new sD({
          checks: [],
          typeName: g.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...sd(e),
        });
      };
      class sI extends sh {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== i0.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.boolean,
                received: t.parsedType,
              }),
              se
            );
          }
          return sr(e.data);
        }
      }
      sI.create = (e) =>
        new sI({
          typeName: g.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...sd(e),
        });
      class sj extends sh {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== i0.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.date,
                received: t.parsedType,
              }),
              se
            );
          }
          if (isNaN(e.data.getTime()))
            return i9(this._getOrReturnCtx(e), { code: i2.invalid_date }), se;
          let r = new i7();
          for (let n of this._def.checks)
            'min' === n.kind
              ? e.data.getTime() < n.value &&
                (i9((t = this._getOrReturnCtx(e, t)), {
                  code: i2.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: 'date',
                }),
                r.dirty())
              : 'max' === n.kind
                ? e.data.getTime() > n.value &&
                  (i9((t = this._getOrReturnCtx(e, t)), {
                    code: i2.too_big,
                    message: n.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: n.value,
                    type: 'date',
                  }),
                  r.dirty())
                : h.assertNever(n);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new sj({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: 'min',
            value: e.getTime(),
            message: p.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: 'max',
            value: e.getTime(),
            message: p.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      sj.create = (e) =>
        new sj({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: g.ZodDate,
          ...sd(e),
        });
      class sM extends sh {
        _parse(e) {
          if (this._getType(e) !== i0.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.symbol,
                received: t.parsedType,
              }),
              se
            );
          }
          return sr(e.data);
        }
      }
      sM.create = (e) => new sM({ typeName: g.ZodSymbol, ...sd(e) });
      class sU extends sh {
        _parse(e) {
          if (this._getType(e) !== i0.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.undefined,
                received: t.parsedType,
              }),
              se
            );
          }
          return sr(e.data);
        }
      }
      sU.create = (e) => new sU({ typeName: g.ZodUndefined, ...sd(e) });
      class sL extends sh {
        _parse(e) {
          if (this._getType(e) !== i0.null) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.null,
                received: t.parsedType,
              }),
              se
            );
          }
          return sr(e.data);
        }
      }
      sL.create = (e) => new sL({ typeName: g.ZodNull, ...sd(e) });
      class sq extends sh {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return sr(e.data);
        }
      }
      sq.create = (e) => new sq({ typeName: g.ZodAny, ...sd(e) });
      class sF extends sh {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return sr(e.data);
        }
      }
      sF.create = (e) => new sF({ typeName: g.ZodUnknown, ...sd(e) });
      class sB extends sh {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            i9(t, {
              code: i2.invalid_type,
              expected: i0.never,
              received: t.parsedType,
            }),
            se
          );
        }
      }
      sB.create = (e) => new sB({ typeName: g.ZodNever, ...sd(e) });
      class sQ extends sh {
        _parse(e) {
          if (this._getType(e) !== i0.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.void,
                received: t.parsedType,
              }),
              se
            );
          }
          return sr(e.data);
        }
      }
      sQ.create = (e) => new sQ({ typeName: g.ZodVoid, ...sd(e) });
      class sz extends sh {
        _parse(e) {
          let { ctx: t, status: r } = this._processInputParams(e),
            n = this._def;
          if (t.parsedType !== i0.array)
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.array,
                received: t.parsedType,
              }),
              se
            );
          if (null !== n.exactLength) {
            let e = t.data.length > n.exactLength.value,
              i = t.data.length < n.exactLength.value;
            (e || i) &&
              (i9(t, {
                code: e ? i2.too_big : i2.too_small,
                minimum: i ? n.exactLength.value : void 0,
                maximum: e ? n.exactLength.value : void 0,
                type: 'array',
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== n.minLength &&
              t.data.length < n.minLength.value &&
              (i9(t, {
                code: i2.too_small,
                minimum: n.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.minLength.message,
              }),
              r.dirty()),
            null !== n.maxLength &&
              t.data.length > n.maxLength.value &&
              (i9(t, {
                code: i2.too_big,
                maximum: n.maxLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.maxLength.message,
              }),
              r.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, r) =>
                n.type._parseAsync(new sl(t, e, t.path, r))
              )
            ).then((e) => i7.mergeArray(r, e));
          let i = [...t.data].map((e, r) =>
            n.type._parseSync(new sl(t, e, t.path, r))
          );
          return i7.mergeArray(r, i);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new sz({
            ...this._def,
            minLength: { value: e, message: p.toString(t) },
          });
        }
        max(e, t) {
          return new sz({
            ...this._def,
            maxLength: { value: e, message: p.toString(t) },
          });
        }
        length(e, t) {
          return new sz({
            ...this._def,
            exactLength: { value: e, message: p.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      sz.create = (e, t) =>
        new sz({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: g.ZodArray,
          ...sd(t),
        });
      class sZ extends sh {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = h.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== i0.object) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.object,
                received: t.parsedType,
              }),
              se
            );
          }
          let { status: t, ctx: r } = this._processInputParams(e),
            { shape: n, keys: i } = this._getCached(),
            s = [];
          if (
            !(
              this._def.catchall instanceof sB &&
              'strip' === this._def.unknownKeys
            )
          )
            for (let e in r.data) i.includes(e) || s.push(e);
          let a = [];
          for (let e of i) {
            let t = n[e],
              i = r.data[e];
            a.push({
              key: { status: 'valid', value: e },
              value: t._parse(new sl(r, i, r.path, e)),
              alwaysSet: e in r.data,
            });
          }
          if (this._def.catchall instanceof sB) {
            let e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (let e of s)
                a.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: r.data[e] },
                });
            else if ('strict' === e)
              s.length > 0 &&
                (i9(r, { code: i2.unrecognized_keys, keys: s }), t.dirty());
            else if ('strip' === e);
            else
              throw Error(
                'Internal ZodObject error: invalid unknownKeys value.'
              );
          } else {
            let e = this._def.catchall;
            for (let t of s) {
              let n = r.data[t];
              a.push({
                key: { status: 'valid', value: t },
                value: e._parse(new sl(r, n, r.path, t)),
                alwaysSet: t in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of a) {
                    let r = await t.key,
                      n = await t.value;
                    e.push({ key: r, value: n, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => i7.mergeObjectSync(t, e))
            : i7.mergeObjectSync(t, a);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            p.errToObj,
            new sZ({
              ...this._def,
              unknownKeys: 'strict',
              ...(void 0 !== e
                ? {
                    errorMap: (t, r) => {
                      var n, i, s, a;
                      let o =
                        null !==
                          (s =
                            null === (i = (n = this._def).errorMap) ||
                            void 0 === i
                              ? void 0
                              : i.call(n, t, r).message) && void 0 !== s
                          ? s
                          : r.defaultError;
                      return 'unrecognized_keys' === t.code
                        ? {
                            message:
                              null !== (a = p.errToObj(e).message) &&
                              void 0 !== a
                                ? a
                                : o,
                          }
                        : { message: o };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new sZ({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new sZ({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new sZ({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new sZ({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: g.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new sZ({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            h.objectKeys(e).forEach((r) => {
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            }),
            new sZ({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            h.objectKeys(this.shape).forEach((r) => {
              e[r] || (t[r] = this.shape[r]);
            }),
            new sZ({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof sZ) {
              let r = {};
              for (let n in t.shape) {
                let i = t.shape[n];
                r[n] = s6.create(e(i));
              }
              return new sZ({ ...t._def, shape: () => r });
            }
            return t instanceof sz
              ? new sz({ ...t._def, type: e(t.element) })
              : t instanceof s6
                ? s6.create(e(t.unwrap()))
                : t instanceof s9
                  ? s9.create(e(t.unwrap()))
                  : t instanceof sK
                    ? sK.create(t.items.map((t) => e(t)))
                    : t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            h.objectKeys(this.shape).forEach((r) => {
              let n = this.shape[r];
              e && !e[r] ? (t[r] = n) : (t[r] = n.optional());
            }),
            new sZ({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            h.objectKeys(this.shape).forEach((r) => {
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof s6; ) e = e._def.innerType;
                t[r] = e;
              }
            }),
            new sZ({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return s2(h.objectKeys(this.shape));
        }
      }
      (sZ.create = (e, t) =>
        new sZ({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: sB.create(),
          typeName: g.ZodObject,
          ...sd(t),
        })),
        (sZ.strictCreate = (e, t) =>
          new sZ({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: sB.create(),
            typeName: g.ZodObject,
            ...sd(t),
          })),
        (sZ.lazycreate = (e, t) =>
          new sZ({
            shape: e,
            unknownKeys: 'strip',
            catchall: sB.create(),
            typeName: g.ZodObject,
            ...sd(t),
          }));
      class s$ extends sh {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = this._def.options;
          if (t.common.async)
            return Promise.all(
              r.map(async (e) => {
                let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r,
                  }),
                  ctx: r,
                };
              })
            ).then(function (e) {
              for (let t of e) if ('valid' === t.result.status) return t.result;
              for (let r of e)
                if ('dirty' === r.result.status)
                  return t.common.issues.push(...r.ctx.common.issues), r.result;
              let r = e.map((e) => new i4(e.ctx.common.issues));
              return i9(t, { code: i2.invalid_union, unionErrors: r }), se;
            });
          {
            let e;
            let n = [];
            for (let i of r) {
              let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                s = i._parseSync({ data: t.data, path: t.path, parent: r });
              if ('valid' === s.status) return s;
              'dirty' !== s.status || e || (e = { result: s, ctx: r }),
                r.common.issues.length && n.push(r.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let i = n.map((e) => new i4(e));
            return i9(t, { code: i2.invalid_union, unionErrors: i }), se;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      s$.create = (e, t) =>
        new s$({ options: e, typeName: g.ZodUnion, ...sd(t) });
      let sH = (e) => {
        if (e instanceof s0) return sH(e.schema);
        if (e instanceof s8) return sH(e.innerType());
        if (e instanceof s1) return [e.value];
        if (e instanceof s4) return e.options;
        if (e instanceof s5) return h.objectValues(e.enum);
        if (e instanceof s7) return sH(e._def.innerType);
        if (e instanceof sU) return [void 0];
        else if (e instanceof sL) return [null];
        else if (e instanceof s6) return [void 0, ...sH(e.unwrap())];
        else if (e instanceof s9) return [null, ...sH(e.unwrap())];
        else if (e instanceof an) return sH(e.unwrap());
        else if (e instanceof as) return sH(e.unwrap());
        else if (e instanceof ae) return sH(e._def.innerType);
        else return [];
      };
      class sW extends sh {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== i0.object)
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.object,
                received: t.parsedType,
              }),
              se
            );
          let r = this.discriminator,
            n = t.data[r],
            i = this.optionsMap.get(n);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (i9(t, {
                code: i2.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              se);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, r) {
          let n = new Map();
          for (let r of t) {
            let t = sH(r.shape[e]);
            if (!t.length)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (let i of t) {
              if (n.has(i))
                throw Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(i)}`
                );
              n.set(i, r);
            }
          }
          return new sW({
            typeName: g.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ...sd(r),
          });
        }
      }
      class sV extends sh {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = (e, n) => {
              if (sn(e) || sn(n)) return se;
              let i = (function e(t, r) {
                let n = i1(t),
                  i = i1(r);
                if (t === r) return { valid: !0, data: t };
                if (n === i0.object && i === i0.object) {
                  let n = h.objectKeys(r),
                    i = h.objectKeys(t).filter((e) => -1 !== n.indexOf(e)),
                    s = { ...t, ...r };
                  for (let n of i) {
                    let i = e(t[n], r[n]);
                    if (!i.valid) return { valid: !1 };
                    s[n] = i.data;
                  }
                  return { valid: !0, data: s };
                }
                if (n === i0.array && i === i0.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let n = [];
                  for (let i = 0; i < t.length; i++) {
                    let s = e(t[i], r[i]);
                    if (!s.valid) return { valid: !1 };
                    n.push(s.data);
                  }
                  return { valid: !0, data: n };
                }
                return n === i0.date && i === i0.date && +t == +r
                  ? { valid: !0, data: t }
                  : { valid: !1 };
              })(e.value, n.value);
              return i.valid
                ? ((si(e) || si(n)) && t.dirty(),
                  { status: t.value, value: i.data })
                : (i9(r, { code: i2.invalid_intersection_types }), se);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then(([e, t]) => n(e, t))
            : n(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                })
              );
        }
      }
      sV.create = (e, t, r) =>
        new sV({ left: e, right: t, typeName: g.ZodIntersection, ...sd(r) });
      class sK extends sh {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i0.array)
            return (
              i9(r, {
                code: i2.invalid_type,
                expected: i0.array,
                received: r.parsedType,
              }),
              se
            );
          if (r.data.length < this._def.items.length)
            return (
              i9(r, {
                code: i2.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              se
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (i9(r, {
              code: i2.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            t.dirty());
          let n = [...r.data]
            .map((e, t) => {
              let n = this._def.items[t] || this._def.rest;
              return n ? n._parse(new sl(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(n).then((e) => i7.mergeArray(t, e))
            : i7.mergeArray(t, n);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new sK({ ...this._def, rest: e });
        }
      }
      sK.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new sK({ items: e, typeName: g.ZodTuple, rest: null, ...sd(t) });
      };
      class sG extends sh {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i0.object)
            return (
              i9(r, {
                code: i2.invalid_type,
                expected: i0.object,
                received: r.parsedType,
              }),
              se
            );
          let n = [],
            i = this._def.keyType,
            s = this._def.valueType;
          for (let e in r.data)
            n.push({
              key: i._parse(new sl(r, e, r.path, e)),
              value: s._parse(new sl(r, r.data[e], r.path, e)),
              alwaysSet: e in r.data,
            });
          return r.common.async
            ? i7.mergeObjectAsync(t, n)
            : i7.mergeObjectSync(t, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new sG(
            t instanceof sh
              ? { keyType: e, valueType: t, typeName: g.ZodRecord, ...sd(r) }
              : {
                  keyType: sT.create(),
                  valueType: e,
                  typeName: g.ZodRecord,
                  ...sd(t),
                }
          );
        }
      }
      class sJ extends sh {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i0.map)
            return (
              i9(r, {
                code: i2.invalid_type,
                expected: i0.map,
                received: r.parsedType,
              }),
              se
            );
          let n = this._def.keyType,
            i = this._def.valueType,
            s = [...r.data.entries()].map(([e, t], s) => ({
              key: n._parse(new sl(r, e, r.path, [s, 'key'])),
              value: i._parse(new sl(r, t, r.path, [s, 'value'])),
            }));
          if (r.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let r of s) {
                let n = await r.key,
                  i = await r.value;
                if ('aborted' === n.status || 'aborted' === i.status) return se;
                ('dirty' === n.status || 'dirty' === i.status) && t.dirty(),
                  e.set(n.value, i.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let r of s) {
              let n = r.key,
                i = r.value;
              if ('aborted' === n.status || 'aborted' === i.status) return se;
              ('dirty' === n.status || 'dirty' === i.status) && t.dirty(),
                e.set(n.value, i.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      sJ.create = (e, t, r) =>
        new sJ({ valueType: t, keyType: e, typeName: g.ZodMap, ...sd(r) });
      class sY extends sh {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i0.set)
            return (
              i9(r, {
                code: i2.invalid_type,
                expected: i0.set,
                received: r.parsedType,
              }),
              se
            );
          let n = this._def;
          null !== n.minSize &&
            r.data.size < n.minSize.value &&
            (i9(r, {
              code: i2.too_small,
              minimum: n.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
            t.dirty()),
            null !== n.maxSize &&
              r.data.size > n.maxSize.value &&
              (i9(r, {
                code: i2.too_big,
                maximum: n.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: n.maxSize.message,
              }),
              t.dirty());
          let i = this._def.valueType;
          function s(e) {
            let r = new Set();
            for (let n of e) {
              if ('aborted' === n.status) return se;
              'dirty' === n.status && t.dirty(), r.add(n.value);
            }
            return { status: t.value, value: r };
          }
          let a = [...r.data.values()].map((e, t) =>
            i._parse(new sl(r, e, r.path, t))
          );
          return r.common.async ? Promise.all(a).then((e) => s(e)) : s(a);
        }
        min(e, t) {
          return new sY({
            ...this._def,
            minSize: { value: e, message: p.toString(t) },
          });
        }
        max(e, t) {
          return new sY({
            ...this._def,
            maxSize: { value: e, message: p.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      sY.create = (e, t) =>
        new sY({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: g.ZodSet,
          ...sd(t),
        });
      class sX extends sh {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== i0.function)
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.function,
                received: t.parsedType,
              }),
              se
            );
          function r(e, r) {
            return i6({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                i8(),
                i5,
              ].filter((e) => !!e),
              issueData: { code: i2.invalid_arguments, argumentsError: r },
            });
          }
          function n(e, r) {
            return i6({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                i8(),
                i5,
              ].filter((e) => !!e),
              issueData: { code: i2.invalid_return_type, returnTypeError: r },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            s = t.data;
          if (this._def.returns instanceof s3) {
            let e = this;
            return sr(async function (...t) {
              let a = new i4([]),
                o = await e._def.args.parseAsync(t, i).catch((e) => {
                  throw (a.addIssue(r(t, e)), a);
                }),
                u = await Reflect.apply(s, this, o);
              return await e._def.returns._def.type
                .parseAsync(u, i)
                .catch((e) => {
                  throw (a.addIssue(n(u, e)), a);
                });
            });
          }
          {
            let e = this;
            return sr(function (...t) {
              let a = e._def.args.safeParse(t, i);
              if (!a.success) throw new i4([r(t, a.error)]);
              let o = Reflect.apply(s, this, a.data),
                u = e._def.returns.safeParse(o, i);
              if (!u.success) throw new i4([n(o, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new sX({ ...this._def, args: sK.create(e).rest(sF.create()) });
        }
        returns(e) {
          return new sX({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new sX({
            args: e || sK.create([]).rest(sF.create()),
            returns: t || sF.create(),
            typeName: g.ZodFunction,
            ...sd(r),
          });
        }
      }
      class s0 extends sh {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      s0.create = (e, t) =>
        new s0({ getter: e, typeName: g.ZodLazy, ...sd(t) });
      class s1 extends sh {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                received: t.data,
                code: i2.invalid_literal,
                expected: this._def.value,
              }),
              se
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function s2(e, t) {
        return new s4({ values: e, typeName: g.ZodEnum, ...sd(t) });
      }
      s1.create = (e, t) =>
        new s1({ value: e, typeName: g.ZodLiteral, ...sd(t) });
      class s4 extends sh {
        constructor() {
          super(...arguments), m.set(this, void 0);
        }
        _parse(e) {
          if ('string' != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              i9(t, {
                expected: h.joinValues(r),
                received: t.parsedType,
                code: i2.invalid_type,
              }),
              se
            );
          }
          if (
            (so(this, m, 'f') || su(this, m, new Set(this._def.values), 'f'),
            !so(this, m, 'f').has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              i9(t, {
                received: t.data,
                code: i2.invalid_enum_value,
                options: r,
              }),
              se
            );
          }
          return sr(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e, t = this._def) {
          return s4.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return s4.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t }
          );
        }
      }
      (m = new WeakMap()), (s4.create = s2);
      class s5 extends sh {
        constructor() {
          super(...arguments), y.set(this, void 0);
        }
        _parse(e) {
          let t = h.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== i0.string && r.parsedType !== i0.number) {
            let e = h.objectValues(t);
            return (
              i9(r, {
                expected: h.joinValues(e),
                received: r.parsedType,
                code: i2.invalid_type,
              }),
              se
            );
          }
          if (
            (so(this, y, 'f') ||
              su(this, y, new Set(h.getValidEnumValues(this._def.values)), 'f'),
            !so(this, y, 'f').has(e.data))
          ) {
            let e = h.objectValues(t);
            return (
              i9(r, {
                received: r.data,
                code: i2.invalid_enum_value,
                options: e,
              }),
              se
            );
          }
          return sr(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      (y = new WeakMap()),
        (s5.create = (e, t) =>
          new s5({ values: e, typeName: g.ZodNativeEnum, ...sd(t) }));
      class s3 extends sh {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== i0.promise && !1 === t.common.async
            ? (i9(t, {
                code: i2.invalid_type,
                expected: i0.promise,
                received: t.parsedType,
              }),
              se)
            : sr(
                (t.parsedType === i0.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  })
                )
              );
        }
      }
      s3.create = (e, t) =>
        new s3({ type: e, typeName: g.ZodPromise, ...sd(t) });
      class s8 extends sh {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === g.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = this._def.effect || null,
            i = {
              addIssue: (e) => {
                i9(r, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((i.addIssue = i.addIssue.bind(i)), 'preprocess' === n.type)) {
            let e = n.transform(r.data, i);
            if (r.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ('aborted' === t.value) return se;
                let n = await this._def.schema._parseAsync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
                return 'aborted' === n.status
                  ? se
                  : 'dirty' === n.status || 'dirty' === t.value
                    ? st(n.value)
                    : n;
              });
            {
              if ('aborted' === t.value) return se;
              let n = this._def.schema._parseSync({
                data: e,
                path: r.path,
                parent: r,
              });
              return 'aborted' === n.status
                ? se
                : 'dirty' === n.status || 'dirty' === t.value
                  ? st(n.value)
                  : n;
            }
          }
          if ('refinement' === n.type) {
            let e = (e) => {
              let t = n.refinement(e, i);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
                );
              return e;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((r) =>
                  'aborted' === r.status
                    ? se
                    : ('dirty' === r.status && t.dirty(),
                      e(r.value).then(() => ({
                        status: t.value,
                        value: r.value,
                      })))
                );
            {
              let n = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return 'aborted' === n.status
                ? se
                : ('dirty' === n.status && t.dirty(),
                  e(n.value),
                  { status: t.value, value: n.value });
            }
          }
          if ('transform' === n.type) {
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((e) =>
                  ss(e)
                    ? Promise.resolve(n.transform(e.value, i)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e
                );
            {
              let e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!ss(e)) return e;
              let s = n.transform(e.value, i);
              if (s instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
                );
              return { status: t.value, value: s };
            }
          }
          h.assertNever(n);
        }
      }
      (s8.create = (e, t, r) =>
        new s8({ schema: e, typeName: g.ZodEffects, effect: t, ...sd(r) })),
        (s8.createWithPreprocess = (e, t, r) =>
          new s8({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: g.ZodEffects,
            ...sd(r),
          }));
      class s6 extends sh {
        _parse(e) {
          return this._getType(e) === i0.undefined
            ? sr(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      s6.create = (e, t) =>
        new s6({ innerType: e, typeName: g.ZodOptional, ...sd(t) });
      class s9 extends sh {
        _parse(e) {
          return this._getType(e) === i0.null
            ? sr(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      s9.create = (e, t) =>
        new s9({ innerType: e, typeName: g.ZodNullable, ...sd(t) });
      class s7 extends sh {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return (
            t.parsedType === i0.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      s7.create = (e, t) =>
        new s7({
          innerType: e,
          typeName: g.ZodDefault,
          defaultValue:
            'function' == typeof t.default ? t.default : () => t.default,
          ...sd(t),
        });
      class ae extends sh {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            n = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return sa(n)
            ? n.then((e) => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new i4(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: 'valid',
                value:
                  'valid' === n.status
                    ? n.value
                    : this._def.catchValue({
                        get error() {
                          return new i4(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      ae.create = (e, t) =>
        new ae({
          innerType: e,
          typeName: g.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...sd(t),
        });
      class at extends sh {
        _parse(e) {
          if (this._getType(e) !== i0.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              i9(t, {
                code: i2.invalid_type,
                expected: i0.nan,
                received: t.parsedType,
              }),
              se
            );
          }
          return { status: 'valid', value: e.data };
        }
      }
      at.create = (e) => new at({ typeName: g.ZodNaN, ...sd(e) });
      let ar = Symbol('zod_brand');
      class an extends sh {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class ai extends sh {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return 'aborted' === e.status
                ? se
                : 'dirty' === e.status
                  ? (t.dirty(), st(e.value))
                  : this._def.out._parseAsync({
                      data: e.value,
                      path: r.path,
                      parent: r,
                    });
            })();
          {
            let e = this._def.in._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            return 'aborted' === e.status
              ? se
              : 'dirty' === e.status
                ? (t.dirty(), { status: 'dirty', value: e.value })
                : this._def.out._parseSync({
                    data: e.value,
                    path: r.path,
                    parent: r,
                  });
          }
        }
        static create(e, t) {
          return new ai({ in: e, out: t, typeName: g.ZodPipeline });
        }
      }
      class as extends sh {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            r = (e) => (ss(e) && (e.value = Object.freeze(e.value)), e);
          return sa(t) ? t.then((e) => r(e)) : r(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function aa(e, t = {}, r) {
        return e
          ? sq.create().superRefine((n, i) => {
              var s, a;
              if (!e(n)) {
                let e =
                    'function' == typeof t
                      ? t(n)
                      : 'string' == typeof t
                        ? { message: t }
                        : t,
                  o =
                    null ===
                      (a = null !== (s = e.fatal) && void 0 !== s ? s : r) ||
                    void 0 === a ||
                    a,
                  u = 'string' == typeof e ? { message: e } : e;
                i.addIssue({ code: 'custom', ...u, fatal: o });
              }
            })
          : sq.create();
      }
      as.create = (e, t) =>
        new as({ innerType: e, typeName: g.ZodReadonly, ...sd(t) });
      let ao = { object: sZ.lazycreate };
      !(function (e) {
        (e.ZodString = 'ZodString'),
          (e.ZodNumber = 'ZodNumber'),
          (e.ZodNaN = 'ZodNaN'),
          (e.ZodBigInt = 'ZodBigInt'),
          (e.ZodBoolean = 'ZodBoolean'),
          (e.ZodDate = 'ZodDate'),
          (e.ZodSymbol = 'ZodSymbol'),
          (e.ZodUndefined = 'ZodUndefined'),
          (e.ZodNull = 'ZodNull'),
          (e.ZodAny = 'ZodAny'),
          (e.ZodUnknown = 'ZodUnknown'),
          (e.ZodNever = 'ZodNever'),
          (e.ZodVoid = 'ZodVoid'),
          (e.ZodArray = 'ZodArray'),
          (e.ZodObject = 'ZodObject'),
          (e.ZodUnion = 'ZodUnion'),
          (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
          (e.ZodIntersection = 'ZodIntersection'),
          (e.ZodTuple = 'ZodTuple'),
          (e.ZodRecord = 'ZodRecord'),
          (e.ZodMap = 'ZodMap'),
          (e.ZodSet = 'ZodSet'),
          (e.ZodFunction = 'ZodFunction'),
          (e.ZodLazy = 'ZodLazy'),
          (e.ZodLiteral = 'ZodLiteral'),
          (e.ZodEnum = 'ZodEnum'),
          (e.ZodEffects = 'ZodEffects'),
          (e.ZodNativeEnum = 'ZodNativeEnum'),
          (e.ZodOptional = 'ZodOptional'),
          (e.ZodNullable = 'ZodNullable'),
          (e.ZodDefault = 'ZodDefault'),
          (e.ZodCatch = 'ZodCatch'),
          (e.ZodPromise = 'ZodPromise'),
          (e.ZodBranded = 'ZodBranded'),
          (e.ZodPipeline = 'ZodPipeline'),
          (e.ZodReadonly = 'ZodReadonly');
      })(g || (g = {}));
      let au = sT.create,
        al = sP.create,
        ac = at.create,
        ad = sD.create,
        ah = sI.create,
        af = sj.create,
        ap = sM.create,
        am = sU.create,
        ay = sL.create,
        ag = sq.create,
        ab = sF.create,
        av = sB.create,
        aw = sQ.create,
        a_ = sz.create,
        aE = sZ.create,
        aS = sZ.strictCreate,
        aR = s$.create,
        aO = sW.create,
        aA = sV.create,
        ax = sK.create,
        aC = sG.create,
        aN = sJ.create,
        ak = sY.create,
        aT = sX.create,
        aP = s0.create,
        aD = s1.create,
        aI = s4.create,
        aj = s5.create,
        aM = s3.create,
        aU = s8.create,
        aL = s6.create,
        aq = s9.create,
        aF = s8.createWithPreprocess,
        aB = ai.create;
      var aQ = Object.freeze({
        __proto__: null,
        defaultErrorMap: i5,
        setErrorMap: function (e) {
          i3 = e;
        },
        getErrorMap: i8,
        makeIssue: i6,
        EMPTY_PATH: [],
        addIssueToContext: i9,
        ParseStatus: i7,
        INVALID: se,
        DIRTY: st,
        OK: sr,
        isAborted: sn,
        isDirty: si,
        isValid: ss,
        isAsync: sa,
        get util() {
          return h;
        },
        get objectUtil() {
          return f;
        },
        ZodParsedType: i0,
        getParsedType: i1,
        ZodType: sh,
        datetimeRegex: sk,
        ZodString: sT,
        ZodNumber: sP,
        ZodBigInt: sD,
        ZodBoolean: sI,
        ZodDate: sj,
        ZodSymbol: sM,
        ZodUndefined: sU,
        ZodNull: sL,
        ZodAny: sq,
        ZodUnknown: sF,
        ZodNever: sB,
        ZodVoid: sQ,
        ZodArray: sz,
        ZodObject: sZ,
        ZodUnion: s$,
        ZodDiscriminatedUnion: sW,
        ZodIntersection: sV,
        ZodTuple: sK,
        ZodRecord: sG,
        ZodMap: sJ,
        ZodSet: sY,
        ZodFunction: sX,
        ZodLazy: s0,
        ZodLiteral: s1,
        ZodEnum: s4,
        ZodNativeEnum: s5,
        ZodPromise: s3,
        ZodEffects: s8,
        ZodTransformer: s8,
        ZodOptional: s6,
        ZodNullable: s9,
        ZodDefault: s7,
        ZodCatch: ae,
        ZodNaN: at,
        BRAND: ar,
        ZodBranded: an,
        ZodPipeline: ai,
        ZodReadonly: as,
        custom: aa,
        Schema: sh,
        ZodSchema: sh,
        late: ao,
        get ZodFirstPartyTypeKind() {
          return g;
        },
        coerce: {
          string: (e) => sT.create({ ...e, coerce: !0 }),
          number: (e) => sP.create({ ...e, coerce: !0 }),
          boolean: (e) => sI.create({ ...e, coerce: !0 }),
          bigint: (e) => sD.create({ ...e, coerce: !0 }),
          date: (e) => sj.create({ ...e, coerce: !0 }),
        },
        any: ag,
        array: a_,
        bigint: ad,
        boolean: ah,
        date: af,
        discriminatedUnion: aO,
        effect: aU,
        enum: aI,
        function: aT,
        instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
          aa((t) => t instanceof e, t),
        intersection: aA,
        lazy: aP,
        literal: aD,
        map: aN,
        nan: ac,
        nativeEnum: aj,
        never: av,
        null: ay,
        nullable: aq,
        number: al,
        object: aE,
        oboolean: () => ah().optional(),
        onumber: () => al().optional(),
        optional: aL,
        ostring: () => au().optional(),
        pipeline: aB,
        preprocess: aF,
        promise: aM,
        record: aC,
        set: ak,
        strictObject: aS,
        string: au,
        symbol: ap,
        transformer: aU,
        tuple: ax,
        undefined: am,
        union: aR,
        unknown: ab,
        void: aw,
        NEVER: se,
        ZodIssueCode: i2,
        quotelessJson: (e) =>
          JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
        ZodError: i4,
      });
      let az = tt.create({ allowOutsideOfServer: !0 }),
        aZ = az.router,
        a$ = az.procedure,
        aH = {
          0: 'Clear sky',
          1: 'Mainly Clear',
          2: 'Partly Cloudy',
          3: 'Overcast',
          45: 'Fog',
          48: 'Depositing Rime Fog',
          51: 'Light Drizzle',
          53: 'Moderate Drizzle',
          55: 'Dense Intensity Drizzle',
          56: 'Light Freezing Drizzle',
          57: 'Dense Intensity Freezing Drizzle',
          61: 'Slight Rain',
          63: 'Moderate Rain',
          65: 'Heavy Intensity Rain',
          66: 'Light Freezing Rain',
          67: 'Heavy Intensity Freezing Rain',
          71: 'Slight Snow Fall',
          73: 'Moderate Snow Fall',
          75: 'Heavy Intensity Snow Fall',
          77: 'Snow grains',
          80: 'Slight Rain Showers',
          81: 'Moderate Rain Showers',
          82: 'Violent Rain Showers',
          85: 'Slight Snow showers',
          86: 'Heavy Snow Showers',
          95: 'Thunderstorm',
          96: 'Slight Thunderstorm',
          99: 'Heavy Thunderstorm',
        },
        aW = aZ({
          chess: {
            titled: a$
              .input(
                aQ.object({
                  days: aQ.number().int().optional(),
                  title: aQ.nativeEnum(ri.Title).optional(),
                  countryCode: aQ.string().optional(),
                })
              )
              .query(async (e) => {
                let t = e.input.days,
                  r = e.input.title,
                  n = e.input.countryCode;
                return await iT({ days: t, title: r, countryCode: n });
              }),
            insights: a$
              .input(
                aQ.object({
                  username: aQ.string(),
                  variant: aQ.nativeEnum(ri.Variant),
                  timeClass: aQ.nativeEnum(ri.TimeClass),
                })
              )
              .query(async (e) => {
                let t = e.input.timeClass,
                  r = e.input.username,
                  n = e.input.variant;
                return await ik({
                  username: r,
                  variant: n,
                  timeClass: t,
                  rated: !0,
                });
              }),
          },
          countries: a$.query(async () => {
            let { data: e } = await n8.get(
              'https://restcountries.com/v3.1/all'
            );
            return e;
          }),
          crypto: a$
            .input(
              aQ.object({
                tag: aQ.nativeEnum(n9).optional().default(n9.LAYER_1),
              })
            )
            .query(async (e) => {
              let t = e.input.tag,
                {
                  data: { coins: r = [] },
                } = await n7({ tag: t });
              return r;
            }),
          forex: a$
            .input(
              aQ.object({
                amount: aQ.number().int().optional().default(1),
                base: aQ.string().optional().default('EUR'),
              })
            )
            .query((e) => it({ amount: e.input.amount, base: e.input.base })),
          languages: aZ({
            health: a$.query(async () => {
              try {
                let {
                  data: { status: e },
                } = await n8.get(''.concat(id, '/health'), {
                  headers: { 'Content-Type': 'application/json' },
                });
                return { status: e };
              } catch (t) {
                if (t instanceof iq) {
                  var e;
                  ii.error(
                    null !== (e = t.cause) && void 0 !== e ? e : t.message
                  );
                } else ii.error(t);
                return { status: 'ERROR' };
              }
            }),
            predict: a$
              .input(aQ.object({ text: aQ.string().default('') }))
              .mutation(async (e) => {
                try {
                  let t = e.input.text,
                    {
                      data: { language: r },
                    } = await n8.post(
                      ''.concat(id, '/predict'),
                      { text: t },
                      { headers: { 'Content-Type': 'application/json' } }
                    );
                  return { language: r };
                } catch (e) {
                  if (e instanceof iq) {
                    var t;
                    ii.error(
                      null !== (t = e.cause) && void 0 !== t ? t : e.message
                    );
                  } else ii.error(e);
                  return { language: 'N/A' };
                }
              }),
          }),
          news: a$
            .input(
              aQ.object({
                category: aQ.nativeEnum(io).optional().default(io.GENERAL),
                country: aQ.nativeEnum(ia).optional().default(ia.UNITED_STATES),
                page: aQ.number().int().optional().default(1),
                pageSize: aQ.number().int().optional().default(100),
                query: aQ.string().optional().default(''),
              })
            )
            .query(async (e) => {
              let t = e.input.category,
                r = e.input.country,
                n = e.input.page,
                i = e.input.pageSize,
                s = e.input.query,
                { articles: a = [] } = await ic({
                  category: t,
                  country: r,
                  page: n,
                  pageSize: i,
                  query: s,
                });
              return a;
            }),
          trends: a$.query(() => is()),
          weather: a$
            .input(
              aQ.object({
                latitude: aQ.number().default(0),
                longitude: aQ.number().default(0),
              })
            )
            .query(async (e) => {
              let { latitude: t = 0, longitude: r = 0 } = e.input;
              try {
                var n;
                let e = new URLSearchParams();
                e.set('timezone', 'GMT'),
                  e.set('latitude', t.toString()),
                  e.set('longitude', r.toString()),
                  e.set('current', 'temperature_2m'),
                  e.append('current', 'weather_code');
                let i = 'https://api.open-meteo.com/v1/forecast?'.concat(
                    e.toString()
                  ),
                  { data: s } = await n8.get(i),
                  { current: a } = s,
                  { weather_code: o = 0, temperature_2m: u = 0 } = a;
                return {
                  main: null !== (n = aH[o]) && void 0 !== n ? n : 'N/A',
                  temperature: u,
                };
              } catch (e) {
                return (
                  ii.error('error='.concat(e)), { main: '', temperature: 0 }
                );
              }
            }),
          word: a$
            .input(aQ.object({ word: aQ.string().default('') }))
            .query(async (e) => {
              let { word: t } = e.input;
              try {
                let e = 'https://www.wordsapi.com/mashape/words/'.concat(
                    encodeURIComponent(t),
                    '?when=2024-06-03T05:47:08.760Z&encrypted=8cfdb18ee722959bea9207bfea58babeaeb0250937f997b8'
                  ),
                  { data: r } = await n8.get(e),
                  { results: n } = r;
                return { word: t, results: n };
              } catch (e) {
                return ii.error('error='.concat(e)), { word: t, results: [] };
              }
            }),
        });
      var aV = r(7840);
      aV.env.VERCEL_URL, aV.env.RENDER_INTERNAL_HOSTNAME, aV.env.PORT;
      let aK = () => '',
        aG = (function (e) {
          let t = rr(e),
            r = (function (e) {
              let { config: t } = e,
                r = tp(e.transformer);
              return (n) => {
                let i = rr(e),
                  s = (s) => {
                    let [a] = (0, el.useState)(() => {
                        if (s.trpc) return s.trpc;
                        let r = t({}),
                          n = rn(r),
                          a = i.createClient(r);
                        return {
                          abortOnUnmount: r.abortOnUnmount,
                          queryClient: n,
                          trpcClient: a,
                          ssrState: !!e.ssr && 'mounting',
                          ssrContext: null,
                        };
                      }),
                      {
                        queryClient: o,
                        trpcClient: u,
                        ssrState: l,
                        ssrContext: c,
                      } = a,
                      d = s.pageProps?.trpcState,
                      h = el.useMemo(
                        () => (d ? r.input.deserialize(d) : d),
                        [d, u]
                      );
                    return el.createElement(
                      i.Provider,
                      {
                        abortOnUnmount: a.abortOnUnmount ?? !1,
                        client: u,
                        queryClient: o,
                        ssrState: l,
                        ssrContext: c,
                      },
                      el.createElement(
                        eh,
                        { client: o },
                        el.createElement(
                          tN,
                          { state: h },
                          el.createElement(n, s)
                        )
                      )
                    );
                  };
                e.ssr
                  ? e.ssrPrepass({ parent: e, AppOrPage: n, WithTRPC: s })
                  : n.getInitialProps &&
                    (s.getInitialProps = async (e) => {
                      let t;
                      let r = !!e.Component,
                        i = {},
                        s = await n.getInitialProps(e);
                      return (
                        (t = i = { ...(r ? (s.pageProps ?? {}) : s), ...i }),
                        r ? { pageProps: t } : t
                      );
                    });
                let a = n.displayName ?? n.name ?? 'Component';
                return (s.displayName = `withTRPC(${a})`), s;
              };
            })(e),
            n = eD(({ path: e, args: r }) => {
              let n = [...e],
                i = n.pop();
              if ('useMutation' === i) return t[i](n, ...r);
              if ('_def' === i) return { path: n };
              let [s, ...a] = r,
                o = a[0] || {};
              return t[i](n, s, o);
            });
          return eI((e) =>
            'useContext' === e || 'useUtils' === e
              ? () => {
                  let e = t.useUtils();
                  return (0, el.useMemo)(
                    () =>
                      (function (e) {
                        let t = tu(e.client),
                          r = eD((t) => {
                            let r = [...t.path],
                              n = r.pop(),
                              i = [...t.args],
                              s = i.shift(),
                              a = tP(r, s, tI(n));
                            return {
                              infiniteQueryOptions: () =>
                                e.infiniteQueryOptions(r, a, i[0]),
                              queryOptions: () => e.queryOptions(r, a, ...i),
                              fetch: () => e.fetchQuery(a, ...i),
                              fetchInfinite: () =>
                                e.fetchInfiniteQuery(a, i[0]),
                              prefetch: () => e.prefetchQuery(a, ...i),
                              prefetchInfinite: () =>
                                e.prefetchInfiniteQuery(a, i[0]),
                              ensureData: () => e.ensureQueryData(a, ...i),
                              invalidate: () => e.invalidateQueries(a, ...i),
                              reset: () => e.resetQueries(a, ...i),
                              refetch: () => e.refetchQueries(a, ...i),
                              cancel: () => e.cancelQuery(a, ...i),
                              setData: () => {
                                e.setQueryData(a, i[0], i[1]);
                              },
                              setQueriesData: () =>
                                e.setQueriesData(a, i[0], i[1], i[2]),
                              setInfiniteData: () => {
                                e.setInfiniteQueryData(a, i[0], i[1]);
                              },
                              getData: () => e.getQueryData(a),
                              getInfiniteData: () => e.getInfiniteQueryData(a),
                              setMutationDefaults: () =>
                                e.setMutationDefaults(tD(r), s),
                              getMutationDefaults: () =>
                                e.getMutationDefaults(tD(r)),
                              isMutating: () =>
                                e.isMutating({ mutationKey: tD(r) }),
                            }[n]();
                          });
                        return eI((n) =>
                          'client' === n ? t : tk.includes(n) ? e[n] : r[n]
                        );
                      })(e),
                    [e]
                  );
                }
              : 'useQueries' === e
                ? t.useQueries
                : 'useSuspenseQueries' === e
                  ? t.useSuspenseQueries
                  : 'withTRPC' === e
                    ? r
                    : n[e]
          );
        })({
          config: () => ({
            links: [
              (function (e) {
                let t = {
                    url: e.url.toString(),
                    fetch: e.fetch,
                    transformer: tp(e.transformer),
                    methodOverride: e.methodOverride,
                  },
                  r = e.maxURLLength ?? 1 / 0;
                return () => {
                  let n = (n) => ({
                      validate(e) {
                        if (r === 1 / 0) return !0;
                        let i = e.map((e) => e.path).join(','),
                          s = e.map((e) => e.input);
                        return (
                          tg({
                            ...t,
                            type: n,
                            path: i,
                            inputs: s,
                            signal: null,
                          }).length <= r
                        );
                      },
                      async fetch(r) {
                        let i = r.map((e) => e.path).join(','),
                          s = r.map((e) => e.input),
                          a = (function (...e) {
                            let t = new AbortController(),
                              r = e.length,
                              n = 0,
                              i = () => {
                                ++n === r && t.abort();
                              };
                            for (let t of e)
                              t?.aborted
                                ? i()
                                : t?.addEventListener('abort', i, { once: !0 });
                            return t.signal;
                          })(...r.map((e) => e.signal)),
                          o = await tv({
                            ...t,
                            path: i,
                            inputs: s,
                            type: n,
                            headers: () =>
                              e.headers
                                ? 'function' == typeof e.headers
                                  ? e.headers({ opList: r })
                                  : e.headers
                                : {},
                            signal: a,
                          });
                        return (
                          Array.isArray(o.json) ? o.json : r.map(() => o.json)
                        ).map((e) => ({ meta: o.meta, json: e }));
                      },
                    }),
                    i = { query: th(n('query')), mutation: th(n('mutation')) };
                  return ({ op: e }) =>
                    eN((r) => {
                      let n;
                      if ('subscription' === e.type)
                        throw Error(
                          'Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`'
                        );
                      return (
                        i[e.type]
                          .load(e)
                          .then((e) => {
                            n = e;
                            let i = (function (e, t) {
                              let r;
                              try {
                                r = (function (e, t) {
                                  if ('error' in e) {
                                    let r = t.deserialize(e.error);
                                    return {
                                      ok: !1,
                                      error: { ...e, error: r },
                                    };
                                  }
                                  return {
                                    ok: !0,
                                    result: {
                                      ...e.result,
                                      ...((!e.result.type ||
                                        'data' === e.result.type) && {
                                        type: 'data',
                                        data: t.deserialize(e.result.data),
                                      }),
                                    },
                                  };
                                })(e, t);
                              } catch {
                                throw new eW();
                              }
                              if (
                                (!r.ok &&
                                  (!eL(r.error.error) ||
                                    'number' != typeof r.error.error.code)) ||
                                (r.ok && !eL(r.result))
                              )
                                throw new eW();
                              return r;
                            })(e.json, t.transformer.output);
                            if (!i.ok) {
                              r.error(tn.from(i.error, { meta: e.meta }));
                              return;
                            }
                            r.next({ context: e.meta, result: i.result }),
                              r.complete();
                          })
                          .catch((e) => {
                            r.error(tn.from(e, { meta: n?.meta }));
                          }),
                        () => {}
                      );
                    });
                };
              })({
                url: ''.concat(aK(), '/api/trpc'),
                headers: async () => ({}),
              }),
            ],
          }),
          ssr: !1,
        });
      !(function (e) {
        let t = rn(e),
          r = tp(e.transformer),
          n = (() => {
            if ('router' in e) {
              let { ctx: t, router: n } = e;
              return {
                serialize: r.output.serialize,
                query: (e) =>
                  (function (e) {
                    let { type: t, path: r } = e,
                      n = e.procedures[r];
                    if (
                      !n ||
                      !e6(n) ||
                      (n._def.type !== t && !e.allowMethodOverride)
                    )
                      throw new e$({
                        code: 'NOT_FOUND',
                        message: `No "${t}"-procedure on path "${r}"`,
                      });
                    if (
                      n._def.type !== t &&
                      e.allowMethodOverride &&
                      'subscription' === n._def.type
                    )
                      throw new e$({
                        code: 'METHOD_NOT_SUPPORTED',
                        message:
                          'Method override is not supported for subscriptions',
                      });
                    return n(e);
                  })({
                    procedures: n._def.procedures,
                    path: e.path,
                    getRawInput: async () => e.input,
                    ctx: t,
                    type: 'query',
                    signal: void 0,
                  }),
              };
            }
            let { client: t } = e,
              n = t instanceof ts ? t : tc(t);
            return {
              query: (e) => n.query(e.path, e.input),
              serialize: (e) => r.output.serialize(e),
            };
          })();
        function i(e = { shouldDehydrateQuery: () => !0 }) {
          let r = (function (e, t = {}) {
            let r =
                t.shouldDehydrateMutation ??
                e.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
                tA,
              n = e
                .getMutationCache()
                .getAll()
                .flatMap((e) =>
                  r(e)
                    ? [
                        {
                          mutationKey: e.options.mutationKey,
                          state: e.state,
                          ...(e.options.scope && { scope: e.options.scope }),
                          ...(e.meta && { meta: e.meta }),
                        },
                      ]
                    : []
                ),
              i =
                t.shouldDehydrateQuery ??
                e.getDefaultOptions().dehydrate?.shouldDehydrateQuery ??
                tx,
              s =
                t.serializeData ??
                e.getDefaultOptions().dehydrate?.serializeData ??
                tO;
            return {
              mutations: n,
              queries: e
                .getQueryCache()
                .getAll()
                .flatMap((e) =>
                  i(e)
                    ? [
                        {
                          state: {
                            ...e.state,
                            ...(void 0 !== e.state.data && {
                              data: s(e.state.data),
                            }),
                          },
                          queryKey: e.queryKey,
                          queryHash: e.queryHash,
                          ...('pending' === e.state.status && {
                            promise: e.promise
                              ?.then(s)
                              .catch((e) => Promise.reject(Error('redacted'))),
                          }),
                          ...(e.meta && { meta: e.meta }),
                        },
                      ]
                    : []
                ),
            };
          })(t, e);
          return n.serialize(r);
        }
        let s = eD((e) => {
          let r = e.args,
            i = r[0],
            s = [...e.path],
            a = s.pop(),
            o = () => n.query({ path: s.join('.'), input: i }),
            u = tP(s, i, tI(a));
          return {
            queryOptions: () => ({ ...r[1], queryKey: u, queryFn: o }),
            infiniteQueryOptions: () => ({ ...r[1], queryKey: u, queryFn: o }),
            fetch: () => {
              let e = r[1];
              return t.fetchQuery({ ...e, queryKey: u, queryFn: o });
            },
            fetchInfinite: () => {
              let e = r[1];
              return t.fetchInfiniteQuery({
                ...e,
                queryKey: u,
                queryFn: o,
                initialPageParam: e?.initialCursor ?? null,
              });
            },
            prefetch: () => {
              let e = r[1];
              return t.prefetchQuery({ ...e, queryKey: u, queryFn: o });
            },
            prefetchInfinite: () => {
              let e = r[1];
              return t.prefetchInfiniteQuery({
                ...e,
                queryKey: u,
                queryFn: o,
                initialPageParam: e?.initialCursor ?? null,
              });
            },
          }[a]();
        });
        eI((e) => ('queryClient' === e ? t : 'dehydrate' === e ? i : s[e]));
      })({ router: aW, ctx: {} }),
        r(3958);
      var aJ = r(1028),
        aY = r.n(aJ);
      let aX = () =>
          (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)(eg, {}), (0, v.jsx)(eC, {})],
          }),
        a0 = new eu(),
        a1 = aG.withTRPC((e) => {
          let { Component: t, pageProps: r } = e;
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)(aY(), {
                children: [
                  (0, v.jsx)('title', { children: 'HIEU DOAN (hieudoanm)' }),
                  (0, v.jsx)('link', {
                    rel: 'manifest',
                    href: '/manifest.json',
                  }),
                  (0, v.jsx)('link', {
                    rel: 'icon',
                    href: '/favicon.ico',
                    sizes: 'any',
                  }),
                  (0, v.jsx)('link', {
                    href: '/icons/png/512x512.png',
                    rel: 'apple-touch-icon',
                    type: 'image/png',
                  }),
                  (0, v.jsx)('meta', { charSet: 'UTF-8' }),
                  (0, v.jsx)('meta', { name: 'keywords', content: 'f(x)' }),
                  (0, v.jsx)('meta', {
                    name: 'url',
                    content: 'https://hieudoanm.vercel.app',
                  }),
                  (0, v.jsx)('meta', {
                    name: 'viewport',
                    content:
                      'width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
                  }),
                ],
              }),
              (0, v.jsx)(aX, {}),
              (0, v.jsx)(eh, { client: a0, children: (0, v.jsx)(t, { ...r }) }),
            ],
          });
        });
    },
    3958: () => {},
    8517: () => {},
    6705: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isDynamicUsageError', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(733),
        i = r(4412),
        s = r(6040),
        a = r(3896),
        o = (e) =>
          (0, n.isDynamicServerError)(e) ||
          (0, i.isBailoutToCSRError)(e) ||
          (0, s.isNextRouterError)(e) ||
          (0, a.isDynamicPostpone)(e);
    },
    5786: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          METADATA_BOUNDARY_NAME: function () {
            return r;
          },
          OUTLET_BOUNDARY_NAME: function () {
            return i;
          },
          VIEWPORT_BOUNDARY_NAME: function () {
            return n;
          },
        });
      let r = '__next_metadata_boundary__',
        n = '__next_viewport_boundary__',
        i = '__next_outlet_boundary__';
    },
    3941: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'actionAsyncStorageInstance', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(4086).createAsyncLocalStorage)();
    },
    2360: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'actionAsyncStorage', {
          enumerable: !0,
          get: function () {
            return n.actionAsyncStorageInstance;
          },
        });
      let n = r(3941);
    },
    4086: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          bindSnapshot: function () {
            return a;
          },
          createAsyncLocalStorage: function () {
            return s;
          },
          createSnapshot: function () {
            return o;
          },
        });
      let r = Error(
        'Invariant: AsyncLocalStorage accessed in runtime where it is not available'
      );
      class n {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
        static bind(e) {
          return e;
        }
      }
      let i = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
      function s() {
        return i ? new i() : new n();
      }
      function a(e) {
        return i ? i.bind(e) : n.bind(e);
      }
      function o() {
        return i
          ? i.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    3896: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          Postpone: function () {
            return S;
          },
          abortAndThrowOnSynchronousRequestDataAccess: function () {
            return _;
          },
          abortOnSynchronousPlatformIOAccess: function () {
            return v;
          },
          accessedDynamicData: function () {
            return T;
          },
          annotateDynamicAccess: function () {
            return M;
          },
          consumeDynamicAccess: function () {
            return P;
          },
          createDynamicTrackingState: function () {
            return d;
          },
          createDynamicValidationState: function () {
            return h;
          },
          createPostponedAbortSignal: function () {
            return j;
          },
          formatDynamicAPIAccesses: function () {
            return D;
          },
          getFirstDynamicReason: function () {
            return f;
          },
          isDynamicPostpone: function () {
            return A;
          },
          isPrerenderInterruptedError: function () {
            return k;
          },
          markCurrentScopeAsDynamic: function () {
            return p;
          },
          postponeWithTracking: function () {
            return R;
          },
          throwIfDisallowedDynamic: function () {
            return z;
          },
          throwToInterruptStaticGeneration: function () {
            return y;
          },
          trackAllowedDynamicAccess: function () {
            return Q;
          },
          trackDynamicDataInDynamicRender: function () {
            return g;
          },
          trackFallbackParamAccessed: function () {
            return m;
          },
          trackSynchronousPlatformIOAccessInDev: function () {
            return w;
          },
          trackSynchronousRequestDataAccessInDev: function () {
            return E;
          },
          useDynamicRouteParams: function () {
            return U;
          },
        });
      let n = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r(8101)),
        i = r(733),
        s = r(6745),
        a = r(3718),
        o = r(373),
        u = r(3045),
        l = r(5786),
        c = 'function' == typeof n.default.unstable_postpone;
      function d(e) {
        return {
          isDebugDynamicAccesses: e,
          dynamicAccesses: [],
          syncDynamicExpression: void 0,
          syncDynamicErrorWithStack: null,
        };
      }
      function h() {
        return {
          hasSuspendedDynamic: !1,
          hasDynamicMetadata: !1,
          hasDynamicViewport: !1,
          hasSyncDynamicErrors: !1,
          dynamicErrors: [],
        };
      }
      function f(e) {
        var t;
        return null == (t = e.dynamicAccesses[0]) ? void 0 : t.expression;
      }
      function p(e, t, r) {
        if (
          (!t || ('cache' !== t.type && 'unstable-cache' !== t.type)) &&
          !e.forceDynamic &&
          !e.forceStatic
        ) {
          if (e.dynamicShouldError)
            throw new s.StaticGenBailoutError(
              `Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
            );
          if (t) {
            if ('prerender-ppr' === t.type) R(e.route, r, t.dynamicTracking);
            else if ('prerender-legacy' === t.type) {
              t.revalidate = 0;
              let n = new i.DynamicServerError(
                `Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
              );
              throw (
                ((e.dynamicUsageDescription = r),
                (e.dynamicUsageStack = n.stack),
                n)
              );
            }
          }
        }
      }
      function m(e, t) {
        let r = a.workUnitAsyncStorage.getStore();
        r && 'prerender-ppr' === r.type && R(e.route, t, r.dynamicTracking);
      }
      function y(e, t, r) {
        let n = new i.DynamicServerError(
          `Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
        );
        throw (
          ((r.revalidate = 0),
          (t.dynamicUsageDescription = e),
          (t.dynamicUsageStack = n.stack),
          n)
        );
      }
      function g(e, t) {
        t &&
          'cache' !== t.type &&
          'unstable-cache' !== t.type &&
          ('prerender' === t.type || 'prerender-legacy' === t.type) &&
          (t.revalidate = 0);
      }
      function b(e, t, r) {
        let n = N(
          `Route ${e} needs to bail out of prerendering at this point because it used ${t}.`
        );
        r.controller.abort(n);
        let i = r.dynamicTracking;
        i &&
          i.dynamicAccesses.push({
            stack: i.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: t,
          });
      }
      function v(e, t, r, n) {
        let i = n.dynamicTracking;
        return (
          i &&
            null === i.syncDynamicErrorWithStack &&
            ((i.syncDynamicExpression = t), (i.syncDynamicErrorWithStack = r)),
          b(e, t, n)
        );
      }
      function w(e) {
        e.prerenderPhase = !1;
      }
      function _(e, t, r, n) {
        let i = n.dynamicTracking;
        throw (
          (i &&
            null === i.syncDynamicErrorWithStack &&
            ((i.syncDynamicExpression = t),
            (i.syncDynamicErrorWithStack = r),
            !0 === n.validating && (i.syncDynamicLogged = !0)),
          b(e, t, n),
          N(
            `Route ${e} needs to bail out of prerendering at this point because it used ${t}.`
          ))
        );
      }
      let E = w;
      function S({ reason: e, route: t }) {
        let r = a.workUnitAsyncStorage.getStore();
        R(t, e, r && 'prerender-ppr' === r.type ? r.dynamicTracking : null);
      }
      function R(e, t, r) {
        I(),
          r &&
            r.dynamicAccesses.push({
              stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
              expression: t,
            }),
          n.default.unstable_postpone(O(e, t));
      }
      function O(e, t) {
        return `Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      }
      function A(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          'string' == typeof e.message &&
          x(e.message)
        );
      }
      function x(e) {
        return (
          e.includes(
            'needs to bail out of prerendering at this point because it used'
          ) &&
          e.includes(
            'Learn more: https://nextjs.org/docs/messages/ppr-caught-error'
          )
        );
      }
      if (!1 === x(O('%%%', '^^^')))
        throw Error(
          'Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'
        );
      let C = 'NEXT_PRERENDER_INTERRUPTED';
      function N(e) {
        let t = Error(e);
        return (t.digest = C), t;
      }
      function k(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.digest === C &&
          'name' in e &&
          'message' in e &&
          e instanceof Error
        );
      }
      function T(e) {
        return e.length > 0;
      }
      function P(e, t) {
        return e.dynamicAccesses.push(...t.dynamicAccesses), e.dynamicAccesses;
      }
      function D(e) {
        return e
          .filter((e) => 'string' == typeof e.stack && e.stack.length > 0)
          .map(
            ({ expression: e, stack: t }) => (
              (t = t
                .split('\n')
                .slice(4)
                .filter(
                  (e) =>
                    !(
                      e.includes('node_modules/next/') ||
                      e.includes(' (<anonymous>)') ||
                      e.includes(' (node:')
                    )
                )
                .join('\n')),
              `Dynamic API Usage Debug - ${e}:
${t}`
            )
          );
      }
      function I() {
        if (!c)
          throw Error(
            'Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js'
          );
      }
      function j(e) {
        I();
        let t = new AbortController();
        try {
          n.default.unstable_postpone(e);
        } catch (e) {
          t.abort(e);
        }
        return t.signal;
      }
      function M(e, t) {
        let r = t.dynamicTracking;
        r &&
          r.dynamicAccesses.push({
            stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: e,
          });
      }
      function U(e) {
        if ('undefined' == typeof window) {
          let t = o.workAsyncStorage.getStore();
          if (
            t &&
            t.isStaticGeneration &&
            t.fallbackRouteParams &&
            t.fallbackRouteParams.size > 0
          ) {
            let r = a.workUnitAsyncStorage.getStore();
            r &&
              ('prerender' === r.type
                ? n.default.use((0, u.makeHangingPromise)(r.renderSignal, e))
                : 'prerender-ppr' === r.type
                  ? R(t.route, e, r.dynamicTracking)
                  : 'prerender-legacy' === r.type && y(e, t, r));
          }
        }
      }
      let L = /\n\s+at Suspense \(<anonymous>\)/,
        q = RegExp(`\\n\\s+at ${l.METADATA_BOUNDARY_NAME}[\\n\\s]`),
        F = RegExp(`\\n\\s+at ${l.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),
        B = RegExp(`\\n\\s+at ${l.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
      function Q(e, t, r, n, i) {
        if (!B.test(t)) {
          if (q.test(t)) {
            r.hasDynamicMetadata = !0;
            return;
          }
          if (F.test(t)) {
            r.hasDynamicViewport = !0;
            return;
          }
          if (L.test(t)) {
            r.hasSuspendedDynamic = !0;
            return;
          }
          if (n.syncDynamicErrorWithStack || i.syncDynamicErrorWithStack) {
            r.hasSyncDynamicErrors = !0;
            return;
          } else {
            let n = (function (e, t) {
              let r = Error(e);
              return (r.stack = 'Error: ' + e + t), r;
            })(
              `Route "${e}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`,
              t
            );
            r.dynamicErrors.push(n);
            return;
          }
        }
      }
      function z(e, t, r, n) {
        let i, a, o;
        if (
          (r.syncDynamicErrorWithStack
            ? ((i = r.syncDynamicErrorWithStack),
              (a = r.syncDynamicExpression),
              (o = !0 === r.syncDynamicLogged))
            : n.syncDynamicErrorWithStack
              ? ((i = n.syncDynamicErrorWithStack),
                (a = n.syncDynamicExpression),
                (o = !0 === n.syncDynamicLogged))
              : ((i = null), (a = void 0), (o = !1)),
          t.hasSyncDynamicErrors && i)
        )
          throw (o || console.error(i), new s.StaticGenBailoutError());
        let u = t.dynamicErrors;
        if (u.length) {
          for (let e = 0; e < u.length; e++) console.error(u[e]);
          throw new s.StaticGenBailoutError();
        }
        if (!t.hasSuspendedDynamic) {
          if (t.hasDynamicMetadata) {
            if (i)
              throw (
                (console.error(i),
                new s.StaticGenBailoutError(
                  `Route "${e}" has a \`generateMetadata\` that could not finish rendering before ${a} was used. Follow the instructions in the error for this expression to resolve.`
                ))
              );
            throw new s.StaticGenBailoutError(
              `Route "${e}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`
            );
          }
          if (t.hasDynamicViewport) {
            if (i)
              throw (
                (console.error(i),
                new s.StaticGenBailoutError(
                  `Route "${e}" has a \`generateViewport\` that could not finish rendering before ${a} was used. Follow the instructions in the error for this expression to resolve.`
                ))
              );
            throw new s.StaticGenBailoutError(
              `Route "${e}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`
            );
          }
        }
      }
    },
    8420: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'workAsyncStorageInstance', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(4086).createAsyncLocalStorage)();
    },
    373: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'workAsyncStorage', {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorageInstance;
          },
        });
      let n = r(8420);
    },
    2439: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'workUnitAsyncStorageInstance', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(4086).createAsyncLocalStorage)();
    },
    3718: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getExpectedRequestStore: function () {
            return i;
          },
          getPrerenderResumeDataCache: function () {
            return s;
          },
          getRenderResumeDataCache: function () {
            return a;
          },
          workUnitAsyncStorage: function () {
            return n.workUnitAsyncStorageInstance;
          },
        });
      let n = r(2439);
      function i(e) {
        let t = n.workUnitAsyncStorageInstance.getStore();
        if (t) {
          if ('request' === t.type) return t;
          if (
            'prerender' === t.type ||
            'prerender-ppr' === t.type ||
            'prerender-legacy' === t.type
          )
            throw Error(
              `\`${e}\` cannot be called inside a prerender. This is a bug in Next.js.`
            );
          if ('cache' === t.type)
            throw Error(
              `\`${e}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`
            );
          if ('unstable-cache' === t.type)
            throw Error(
              `\`${e}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
            );
        }
        throw Error(
          `\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`
        );
      }
      function s(e) {
        return 'prerender' === e.type || 'prerender-ppr' === e.type
          ? e.prerenderResumeDataCache
          : null;
      }
      function a(e) {
        return 'prerender-legacy' !== e.type &&
          'cache' !== e.type &&
          'unstable-cache' !== e.type
          ? 'request' === e.type
            ? e.renderResumeDataCache
            : e.prerenderResumeDataCache
          : null;
      }
    },
    3045: (e, t) => {
      'use strict';
      function r(e, t) {
        let r = new Promise((r, n) => {
          e.addEventListener(
            'abort',
            () => {
              n(
                Error(
                  `During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`
                )
              );
            },
            { once: !0 }
          );
        });
        return r.catch(n), r;
      }
      function n() {}
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'makeHangingPromise', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    3138: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isPostpone', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = Symbol.for('react.postpone');
      function n(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r;
      }
    },
    1028: (e, t, r) => {
      e.exports = r(3500);
    },
    8884: (e, t, r) => {
      e.exports = r(6289);
    },
    2141: (e) => {
      'use strict';
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, n) {
        var i = (n && n.stringify) || t;
        if ('object' == typeof e && null !== e) {
          var s = r.length + 1;
          if (1 === s) return e;
          var a = Array(s);
          a[0] = i(e);
          for (var o = 1; o < s; o++) a[o] = i(r[o]);
          return a.join(' ');
        }
        if ('string' != typeof e) return e;
        var u = r.length;
        if (0 === u) return e;
        for (
          var l = '', c = 0, d = -1, h = (e && e.length) || 0, f = 0;
          f < h;

        ) {
          if (37 === e.charCodeAt(f) && f + 1 < h) {
            switch (((d = d > -1 ? d : 0), e.charCodeAt(f + 1))) {
              case 100:
              case 102:
                if (c >= u || null == r[c]) break;
                d < f && (l += e.slice(d, f)),
                  (l += Number(r[c])),
                  (d = f + 2),
                  f++;
                break;
              case 105:
                if (c >= u || null == r[c]) break;
                d < f && (l += e.slice(d, f)),
                  (l += Math.floor(Number(r[c]))),
                  (d = f + 2),
                  f++;
                break;
              case 79:
              case 111:
              case 106:
                if (c >= u || void 0 === r[c]) break;
                d < f && (l += e.slice(d, f));
                var p = typeof r[c];
                if ('string' === p) {
                  (l += "'" + r[c] + "'"), (d = f + 2), f++;
                  break;
                }
                if ('function' === p) {
                  (l += r[c].name || '<anonymous>'), (d = f + 2), f++;
                  break;
                }
                (l += i(r[c])), (d = f + 2), f++;
                break;
              case 115:
                if (c >= u) break;
                d < f && (l += e.slice(d, f)),
                  (l += String(r[c])),
                  (d = f + 2),
                  f++;
                break;
              case 37:
                d < f && (l += e.slice(d, f)),
                  (l += '%'),
                  (d = f + 2),
                  f++,
                  c--;
            }
            ++c;
          }
          ++f;
        }
        return -1 === d ? e : (d < h && (l += e.slice(d)), l);
      };
    },
    4403: (e, t, r) => {
      'use strict';
      let n = r(2141);
      e.exports = c;
      let i =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ('undefined' != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, 'globalThis', {
                get: function () {
                  return (
                    delete Object.prototype.globalThis, (this.globalThis = this)
                  );
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function s(e, t) {
        return 'silent' === e ? 1 / 0 : t.levels.values[e];
      }
      let a = Symbol('pino.logFuncs'),
        o = Symbol('pino.hierarchy'),
        u = {
          error: 'log',
          fatal: 'error',
          warn: 'error',
          info: 'log',
          debug: 'log',
          trace: 'log',
        };
      function l(e, t) {
        let r = { logger: t, parent: e[o] };
        t[o] = r;
      }
      function c(e) {
        var t, r;
        (e = e || {}).browser = e.browser || {};
        let n = e.browser.transmit;
        if (n && 'function' != typeof n.send)
          throw Error('pino: transmit option must have a send function');
        let o = e.browser.write || i;
        e.browser.write && (e.browser.asObject = !0);
        let p = e.serializers || {},
          m = Array.isArray((t = e.browser.serialize))
            ? t.filter(function (e) {
                return '!stdSerializers.err' !== e;
              })
            : !0 === t && Object.keys(p),
          y = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
          (y = !1);
        let w = Object.keys(e.customLevels || {}),
          _ = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'].concat(w);
        'function' == typeof o &&
          _.forEach(function (e) {
            o[e] = o;
          }),
          (!1 === e.enabled || e.browser.disabled) && (e.level = 'silent');
        let E = e.level || 'info',
          S = Object.create(o);
        S.log || (S.log = g),
          (function (e, t, r) {
            let n = {};
            t.forEach((e) => {
              n[e] = r[e] ? r[e] : i[e] || i[u[e] || 'log'] || g;
            }),
              (e[a] = n);
          })(S, _, o),
          l({}, S),
          Object.defineProperty(S, 'levelVal', {
            get: function () {
              return s(this.level, this);
            },
          }),
          Object.defineProperty(S, 'level', {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ('silent' !== e && !this.levels.values[e])
                throw Error('unknown level ' + e);
              (this._level = e),
                d(this, R, S, 'error'),
                d(this, R, S, 'fatal'),
                d(this, R, S, 'warn'),
                d(this, R, S, 'info'),
                d(this, R, S, 'debug'),
                d(this, R, S, 'trace'),
                w.forEach((e) => {
                  d(this, R, S, e);
                });
            },
          });
        let R = {
          transmit: n,
          serialize: m,
          asObject: e.browser.asObject,
          formatters: e.browser.formatters,
          levels: _,
          timestamp:
            'function' == typeof (r = e).timestamp
              ? r.timestamp
              : !1 === r.timestamp
                ? b
                : v,
          messageKey: e.messageKey || 'msg',
          onChild: e.onChild || g,
        };
        function O(t, r, i) {
          if (!r) throw Error('missing bindings for child Pino');
          (i = i || {}), m && r.serializers && (i.serializers = r.serializers);
          let s = i.serializers;
          if (m && s) {
            var a = Object.assign({}, p, s),
              o = !0 === e.browser.serialize ? Object.keys(a) : m;
            delete r.serializers, h([r], o, a, this._stdErrSerialize);
          }
          function u(e) {
            (this._childLevel = (0 | e._childLevel) + 1),
              (this.bindings = r),
              a && ((this.serializers = a), (this._serialize = o)),
              n && (this._logEvent = f([].concat(e._logEvent.bindings, r)));
          }
          u.prototype = this;
          let c = new u(this);
          return (
            l(this, c),
            (c.child = function (...e) {
              return O.call(this, t, ...e);
            }),
            (c.level = i.level || this.level),
            t.onChild(c),
            c
          );
        }
        return (
          (S.levels = (function (e) {
            let t = e.customLevels || {};
            return {
              values: Object.assign({}, c.levels.values, t),
              labels: Object.assign(
                {},
                c.levels.labels,
                (function (e) {
                  let t = {};
                  return (
                    Object.keys(e).forEach(function (r) {
                      t[e[r]] = r;
                    }),
                    t
                  );
                })(t)
              ),
            };
          })(e)),
          (S.level = E),
          (S.setMaxListeners =
            S.getMaxListeners =
            S.emit =
            S.addListener =
            S.on =
            S.prependListener =
            S.once =
            S.prependOnceListener =
            S.removeListener =
            S.removeAllListeners =
            S.listeners =
            S.listenerCount =
            S.eventNames =
            S.write =
            S.flush =
              g),
          (S.serializers = p),
          (S._serialize = m),
          (S._stdErrSerialize = y),
          (S.child = function (...e) {
            return O.call(this, R, ...e);
          }),
          n && (S._logEvent = f()),
          S
        );
      }
      function d(e, t, r, u) {
        var l, c;
        if (
          (Object.defineProperty(e, u, {
            value: s(e.level, r) > s(u, r) ? g : r[a][u],
            writable: !0,
            enumerable: !0,
            configurable: !0,
          }),
          e[u] === g)
        ) {
          if (!t.transmit) return;
          let n = s(t.transmit.level || e.level, r);
          if (s(u, r) < n) return;
        }
        e[u] =
          ((l = e[a][u]),
          function () {
            let a = t.timestamp(),
              o = Array(arguments.length),
              c =
                Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                  ? i
                  : this;
            for (var d = 0; d < o.length; d++) o[d] = arguments[d];
            var p = !1;
            if (
              (t.serialize &&
                (h(o, this._serialize, this.serializers, this._stdErrSerialize),
                (p = !0)),
              t.asObject || t.formatters
                ? l.call(
                    c,
                    (function (e, t, r, i, s) {
                      let { level: a, log: o = (e) => e } = s.formatters || {},
                        u = r.slice(),
                        l = u[0],
                        c = {};
                      i && (c.time = i),
                        a
                          ? Object.assign(c, a(t, e.levels.values[t]))
                          : (c.level = e.levels.values[t]);
                      let d = (0 | e._childLevel) + 1;
                      if (
                        (d < 1 && (d = 1), null !== l && 'object' == typeof l)
                      ) {
                        for (; d-- && 'object' == typeof u[0]; )
                          Object.assign(c, u.shift());
                        l = u.length ? n(u.shift(), u) : void 0;
                      } else 'string' == typeof l && (l = n(u.shift(), u));
                      return void 0 !== l && (c[s.messageKey] = l), o(c);
                    })(this, u, o, a, t)
                  )
                : l.apply(c, o),
              t.transmit)
            ) {
              let n = t.transmit.level || e._level,
                i = s(n, r),
                l = s(u, r);
              if (l < i) return;
              (function (e, t, r, n = !1) {
                let i = t.send,
                  s = t.ts,
                  a = t.methodLevel,
                  o = t.methodValue,
                  u = t.val,
                  l = e._logEvent.bindings;
                n ||
                  h(
                    r,
                    e._serialize || Object.keys(e.serializers),
                    e.serializers,
                    void 0 === e._stdErrSerialize || e._stdErrSerialize
                  ),
                  (e._logEvent.ts = s),
                  (e._logEvent.messages = r.filter(function (e) {
                    return -1 === l.indexOf(e);
                  })),
                  (e._logEvent.level.label = a),
                  (e._logEvent.level.value = o),
                  i(a, e._logEvent, u),
                  (e._logEvent = f(l));
              })(
                this,
                {
                  ts: a,
                  methodLevel: u,
                  methodValue: l,
                  transmitLevel: n,
                  transmitValue: r.levels.values[t.transmit.level || e._level],
                  send: t.transmit.send,
                  val: s(e._level, r),
                },
                o,
                p
              );
            }
          });
        let d = (function (e) {
          let t = [];
          e.bindings && t.push(e.bindings);
          let r = e[o];
          for (; r.parent; )
            (r = r.parent).logger.bindings && t.push(r.logger.bindings);
          return t.reverse();
        })(e);
        0 !== d.length &&
          (e[u] =
            ((c = e[u]),
            function () {
              return c.apply(this, [...d, ...arguments]);
            }));
      }
      function h(e, t, r, n) {
        for (let i in e)
          if (n && e[i] instanceof Error) e[i] = c.stdSerializers.err(e[i]);
          else if ('object' == typeof e[i] && !Array.isArray(e[i]) && t)
            for (let n in e[i])
              t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]));
      }
      function f(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: '', value: 0 },
        };
      }
      function p(e) {
        let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
        for (let r in e) void 0 === t[r] && (t[r] = e[r]);
        return t;
      }
      function m() {
        return {};
      }
      function y(e) {
        return e;
      }
      function g() {}
      function b() {
        return !1;
      }
      function v() {
        return Date.now();
      }
      (c.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: 'trace',
          20: 'debug',
          30: 'info',
          40: 'warn',
          50: 'error',
          60: 'fatal',
        },
      }),
        (c.stdSerializers = {
          mapHttpRequest: m,
          mapHttpResponse: m,
          wrapRequestSerializer: y,
          wrapResponseSerializer: y,
          wrapErrorSerializer: y,
          req: m,
          res: m,
          err: p,
          errWithCause: p,
        }),
        (c.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: b,
            epochTime: v,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        )),
        (e.exports.default = c),
        (e.exports.pino = c);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [593, 792], () => (t(5932), t(5493))), (_N_E = e.O());
  },
]);
