(window.webpackJsonp = window.webpackJsonp || []).push([
  [42, 55],
  {
    1702: function (e, t, n) {
      var i = n(35),
        a = n(1703);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const i = [];
                return (
                  n.querySelectorAll(t).forEach((e) => i.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && i.push(...e(t, n.shadowRoot));
                  }),
                  i
                );
              })("apryse-webviewer")));
          const n = [];
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            if (0 === i)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      i(a, r);
      e.exports = a.locals || {};
    },
    1703: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".signature-widget-info{--widget-header-indent:49px;--widget-body-indent:22px;--arrow-width:12px;padding:4px;display:flex;flex-direction:column;font-size:13px;margin-bottom:10px;margin-inline-start:5px;box-sizing:border-box;border:1px solid transparent;cursor:pointer;--border-radius-amount:4px;-moz-border-radius-topleft:var(--border-radius-amount);-moz-border-radius-topright:var(--border-radius-amount);-moz-border-radius-bottomright:var(--border-radius-amount);-moz-border-radius-bottomleft:var(--border-radius-amount);border-radius:var(--border-radius-amount)}.signature-widget-info p+p{margin:1em 0 0}.signature-widget-info p.result-for-header{margin-top:0}.signature-widget-info p.bold{font-weight:700;margin-bottom:4px}.signature-widget-info p.underline{text-decoration:underline}.signature-widget-info .signatureProperties{padding:0;margin:0}.signature-widget-info .signatureProperties:focus,.signature-widget-info .signatureProperties:hover{color:var(--blue-5)}.signature-widget-info .link{cursor:pointer;outline:none;border:0;background-color:transparent;white-space:nowrap}.signature-widget-info .link.focus-visible,.signature-widget-info .link:focus-visible{outline:var(--focus-visible-outline)}.signature-widget-info .link p{margin:0;padding:0}.signature-widget-info .panel-list-text-container{height:100%}.signature-widget-info .panel-list-text-container .panel-list-label-header .Button span{text-align:start;overflow:visible;white-space:normal;text-overflow:inherit}.signature-widget-info .panel-list-icon-container .Icon{width:20px;height:20px}.signature-widget-info .title{padding-inline-start:4px;font-weight:700;display:flex;align-items:center;margin-block-start:0;margin-block-end:0;min-height:32px;margin-top:-5px;margin-bottom:-5px;overflow:hidden;border:0;background-color:transparent}.signature-widget-info .title button+*,.signature-widget-info .title div+*{margin-inline-start:2px}.signature-widget-info .title .arrow{min-width:var(--arrow-width);transition:transform .1s ease;margin-top:0;background-color:transparent;border:none;padding:0;display:flex;justify-content:center;align-items:center}.signature-widget-info .title .arrow.expanded{transform:rotate(90deg)}.signature-widget-info .title .arrow .Icon{width:var(--arrow-width);height:var(--arrow-width)}.signature-widget-info .title .arrow.hidden{visibility:hidden;padding:23px}.signature-widget-info .title .arrow:hover .Icon{color:var(--blue-6)}.signature-widget-info .title .arrow.focus-visible,.signature-widget-info .title .arrow:focus-visible{outline:var(--focus-visible-outline)}.signature-widget-info .title .signature-icon{margin-inline-end:5px}.signature-widget-info .title.focus-visible,.signature-widget-info .title:focus-visible{outline:var(--focus-visible-outline)}.signature-widget-info .header{margin-inline-start:32px}.signature-widget-info .header ul{padding-inline-start:24px}.signature-widget-info .header .body>div:first-child>p:first-child,.signature-widget-info .header .body>p:first-child{margin-top:.5em}.signature-widget-info .header .body>div:last-child{margin-bottom:.5em}.signature-widget-info .header-with-arrow{margin-inline-start:0}.signature-widget-info .header-with-arrow ul{margin-inline-start:var(--arrow-width)}.signature-widget-info .header-with-arrow ul li{margin-inline-start:18px}.signature-widget-info .panel-list-label-header button{font-weight:700;font-size:13px}.signature-widget-info .signatureDetails,.signature-widget-info .verificationDetails{cursor:default;padding:0;background-color:transparent;border:none;text-align:start}",
        "",
      ]);
    },
    1704: function (e, t, n) {
      var i = n(35),
        a = n(1705);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const i = [];
                return (
                  n.querySelectorAll(t).forEach((e) => i.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && i.push(...e(t, n.shadowRoot));
                  }),
                  i
                );
              })("apryse-webviewer")));
          const n = [];
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            if (0 === i)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      i(a, r);
      e.exports = a.locals || {};
    },
    1705: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SignaturePanel{z-index:65;transition:transform .3s ease,visibility 0s ease .3s}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignaturePanel{inset-block-start:0;width:100%;height:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignaturePanel{inset-block-start:0;width:100%;height:100%}}.open.SignaturePanel{transform:none;visibility:visible;transition:transform .3s ease,visibility 0s ease 0s}.SignaturePanel .empty-panel-container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;padding:36px;grid-gap:8px;gap:8px}.SignaturePanel .empty-panel-container .empty-icon{width:60px;height:60px;color:var(--gray-6);fill:var(--gray-6)}.SignaturePanel .empty-panel-container .empty-icon svg{width:60px;height:60px}.SignaturePanel .empty-panel-container .empty-message{text-align:center;max-width:131px;font-size:13px}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignaturePanel .empty-panel-container .empty-message{line-height:15px}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignaturePanel .empty-panel-container .empty-message{line-height:15px}}.SignaturePanel{margin:0 8px 8px;display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignaturePanel{width:auto;margin:16px;flex-grow:1;overflow-y:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignaturePanel{width:auto;margin:16px;flex-grow:1;overflow-y:auto}}.SignaturePanel .center{display:flex;justify-content:center;align-items:center}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignaturePanel .signature-widget-info .title .arrow{min-width:auto;padding:3px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignaturePanel .signature-widget-info .title .arrow{min-width:auto;padding:3px}}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1718: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, "renderPermissionStatus", function () {
          return U;
        }),
        n.d(t, "SignaturePanel", function () {
          return ne;
        }));
      (n(9),
        n(10),
        n(14),
        n(34),
        n(27),
        n(21),
        n(20),
        n(12),
        n(44),
        n(22),
        n(18),
        n(26),
        n(16),
        n(40),
        n(24),
        n(42),
        n(37),
        n(43),
        n(8),
        n(56),
        n(1650),
        n(17),
        n(19),
        n(132),
        n(11),
        n(29),
        n(13));
      var i = n(0),
        a = n.n(i),
        r = n(6),
        o = n(305),
        s = n(3),
        l = n(1),
        c = n(4);
      (n(38),
        n(50),
        n(85),
        n(309),
        n(310),
        n(311),
        n(171),
        n(59),
        n(62),
        n(115),
        n(1716),
        n(382),
        n(1717),
        n(383),
        n(384),
        n(385),
        n(386),
        n(387),
        n(388),
        n(389),
        n(390),
        n(391),
        n(392),
        n(393),
        n(394),
        n(395),
        n(396),
        n(397),
        n(398),
        n(399),
        n(400),
        n(401),
        n(402),
        n(403),
        n(404),
        n(405));
      function u(e) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function d(e) {
        if (null != e) {
          var t =
              e[
                ("function" == typeof Symbol && Symbol.iterator) || "@@iterator"
              ],
            n = 0;
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length))
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
        }
        throw new TypeError(u(e) + " is not iterable");
      }
      function g(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? f(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var r,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((o = e.done), e);
          },
          e: function (e) {
            ((s = !0), (r = e));
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw r;
            }
          },
        };
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function p() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          a = n.toStringTag || "@@toStringTag";
        function r(n, i, a, r) {
          var l = i && i.prototype instanceof s ? i : s,
            c = Object.create(l.prototype);
          return (
            m(
              c,
              "_invoke",
              (function (n, i, a) {
                var r,
                  s,
                  l,
                  c = 0,
                  u = a || [],
                  d = !1,
                  g = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((r = t), (s = 0), (l = e), (g.n = n), o);
                    },
                  };
                function f(n, i) {
                  for (
                    s = n, l = i, t = 0;
                    !d && c && !a && t < u.length;
                    t++
                  ) {
                    var a,
                      r = u[t],
                      f = g.p,
                      p = r[2];
                    n > 3
                      ? (a = p === i) &&
                        ((l = r[(s = r[4]) ? 5 : ((s = 3), 3)]),
                        (r[4] = r[5] = e))
                      : r[0] <= f &&
                        ((a = n < 2 && f < r[1])
                          ? ((s = 0), (g.v = i), (g.n = r[1]))
                          : f < p &&
                            (a = n < 3 || r[0] > i || i > p) &&
                            ((r[4] = n), (r[5] = i), (g.n = p), (s = 0)));
                  }
                  if (a || n > 1) return o;
                  throw ((d = !0), i);
                }
                return function (a, u, p) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === u && f(u, p), s = u, l = p;
                    (t = s < 2 ? e : l) || !d;

                  ) {
                    r ||
                      (s
                        ? s < 3
                          ? (s > 1 && (g.n = -1), f(s, l))
                          : (g.n = l)
                        : (g.v = l));
                    try {
                      if (((c = 2), r)) {
                        if ((s || (a = "next"), (t = r[a]))) {
                          if (!(t = t.call(r, l)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((l = t.value), s < 2 && (s = 0));
                        } else
                          (1 === s && (t = r.return) && t.call(r),
                            s < 2 &&
                              ((l = TypeError(
                                "The iterator does not provide a '" +
                                  a +
                                  "' method",
                              )),
                              (s = 1)));
                        r = e;
                      } else if ((t = (d = g.n < 0) ? l : n.call(i, g)) !== o)
                        break;
                    } catch (t) {
                      ((r = e), (s = 1), (l = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, a, r),
              !0,
            ),
            c
          );
        }
        var o = {};
        function s() {}
        function l() {}
        function c() {}
        t = Object.getPrototypeOf;
        var u = [][i]
            ? t(t([][i]()))
            : (m((t = {}), i, function () {
                return this;
              }),
              t),
          d = (c.prototype = s.prototype = Object.create(u));
        function g(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), m(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (l.prototype = c),
          m(d, "constructor", c),
          m(c, "constructor", l),
          (l.displayName = "GeneratorFunction"),
          m(c, a, "GeneratorFunction"),
          m(d),
          m(d, a, "Generator"),
          m(d, i, function () {
            return this;
          }),
          m(d, "toString", function () {
            return "[object Generator]";
          }),
          (p = function () {
            return { w: r, m: g };
          })()
        );
      }
      function m(e, t, n, i) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (e) {
          a = 0;
        }
        (m = function (e, t, n, i) {
          if (t)
            a
              ? a(e, t, {
                  value: n,
                  enumerable: !i,
                  configurable: !i,
                  writable: !i,
                })
              : (e[t] = n);
          else {
            var r = function (t, n) {
              m(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(e, t, n, i);
      }
      function b(e, t, n, i, a, r, o) {
        try {
          var s = e[r](o),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, a);
      }
      function h(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, a) {
            var r = e.apply(t, n);
            function o(e) {
              b(r, i, a, o, s, "next", e);
            }
            function s(e) {
              b(r, i, a, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      var v = (function () {
          var e = h(
            p().m(function e(t, n, i, a, r, o, l) {
              var c;
              return p().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return ((e.n = 1), y(t, n, i, a, r, o));
                    case 1:
                      return (
                        (c = e.v),
                        l(s.a.setVerificationResult(c)),
                        e.a(2, c)
                      );
                  }
              }, e);
            }),
          );
          return function (t, n, i, a, r, o, s) {
            return e.apply(this, arguments);
          };
        })(),
        y = (function () {
          var e = h(
            p().m(function e(t, n, i, a, r, o) {
              var s, l, c, u, f, m, b;
              return p().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return (
                        (s = window.Core.PDFNet),
                        (l = s.VerificationResult),
                        (c = l.TrustStatus),
                        (u = l.DigestStatus),
                        (f = l.ModificationPermissionsStatus),
                        (m = l.DocumentStatus),
                        (b = {}),
                        (e.n = 1),
                        s.runWithCleanup(
                          h(
                            p().m(function e() {
                              var l,
                                v,
                                y,
                                E,
                                _,
                                V,
                                k,
                                A,
                                M,
                                T,
                                O,
                                C,
                                D,
                                N,
                                j,
                                P,
                                I,
                                R,
                                F,
                                L,
                                H,
                                B,
                                U,
                                z,
                                G,
                                W,
                                q,
                                $,
                                J,
                                K,
                                Z,
                                Q,
                                X,
                                Y,
                                ee,
                                te,
                                ne,
                                ie,
                                ae,
                                re,
                                oe,
                                se,
                                le,
                                ce,
                                ue,
                                de,
                                ge,
                                fe,
                                pe,
                                me,
                                be,
                                he,
                                ve,
                                ye,
                                we,
                                Se,
                                xe,
                                Ee,
                                _e,
                                Ve,
                                ke,
                                Ae,
                                Me,
                                Te,
                                Oe,
                                Ce,
                                De,
                                Ne;
                              return p().w(
                                function (e) {
                                  for (;;)
                                    switch ((e.p = e.n)) {
                                      case 0:
                                        return ((e.n = 1), t.getPDFDoc());
                                      case 1:
                                        return (
                                          (t = e.v),
                                          (e.n = 2),
                                          s.VerificationOptions.create(
                                            s.VerificationOptions.SecurityLevel
                                              .e_compatibility_and_archiving,
                                          )
                                        );
                                      case 2:
                                        if (((l = e.v), !r)) {
                                          e.n = 3;
                                          break;
                                        }
                                        return (
                                          (e.n = 3),
                                          l.enableOnlineCRLRevocationChecking(
                                            !0,
                                          )
                                        );
                                      case 3:
                                        if (null !== o) {
                                          e.n = 5;
                                          break;
                                        }
                                        return (
                                          (e.n = 4),
                                          l.setRevocationProxyPrefix(
                                            "https://proxy.pdftron.com",
                                          )
                                        );
                                      case 4:
                                        e.n = 6;
                                        break;
                                      case 5:
                                        if (void 0 === o) {
                                          e.n = 6;
                                          break;
                                        }
                                        return (
                                          (e.n = 6),
                                          l.setRevocationProxyPrefix(o)
                                        );
                                      case 6:
                                        ((v = g(n)),
                                          (e.p = 7),
                                          (E = p().m(function e() {
                                            var t, n, i, a, r, o, s;
                                            return p().w(
                                              function (e) {
                                                for (;;)
                                                  switch ((e.p = e.n)) {
                                                    case 0:
                                                      if (
                                                        "string" !=
                                                        typeof (t = y.value)
                                                      ) {
                                                        e.n = 5;
                                                        break;
                                                      }
                                                      return (
                                                        (e.p = 1),
                                                        (e.n = 2),
                                                        l.addTrustedCertificateFromURL(
                                                          t,
                                                        )
                                                      );
                                                    case 2:
                                                      e.n = 4;
                                                      break;
                                                    case 3:
                                                      return (
                                                        (e.p = 3),
                                                        e.v,
                                                        console.error(
                                                          "Error encountered when trying to load certificate from URL: ".concat(
                                                            t,
                                                            "\n",
                                                          ) +
                                                            "Certificate will not be used as part of verification process.",
                                                        ),
                                                        e.a(2, 0)
                                                      );
                                                    case 4:
                                                      e.n = 15;
                                                      break;
                                                    case 5:
                                                      if (
                                                        !(
                                                          t instanceof File ||
                                                          "[object File]" ===
                                                            Object.prototype.toString.call(
                                                              t,
                                                            )
                                                        )
                                                      ) {
                                                        e.n = 11;
                                                        break;
                                                      }
                                                      return (
                                                        (n = new FileReader()),
                                                        (i = new Promise(
                                                          function (e, i) {
                                                            (n.addEventListener(
                                                              "load",
                                                              (function () {
                                                                var t = h(
                                                                  p().m(
                                                                    function t(
                                                                      n,
                                                                    ) {
                                                                      return p().w(
                                                                        function (
                                                                          t,
                                                                        ) {
                                                                          for (;;)
                                                                            switch (
                                                                              t.n
                                                                            ) {
                                                                              case 0:
                                                                                e(
                                                                                  new Uint8Array(
                                                                                    n.target.result,
                                                                                  ),
                                                                                );
                                                                              case 1:
                                                                                return t.a(
                                                                                  2,
                                                                                );
                                                                            }
                                                                        },
                                                                        t,
                                                                      );
                                                                    },
                                                                  ),
                                                                );
                                                                return function (
                                                                  e,
                                                                ) {
                                                                  return t.apply(
                                                                    this,
                                                                    arguments,
                                                                  );
                                                                };
                                                              })(),
                                                            ),
                                                              n.addEventListener(
                                                                "error",
                                                                function () {
                                                                  i(
                                                                    "Error reading the local certificate",
                                                                  );
                                                                },
                                                              ),
                                                              n.readAsArrayBuffer(
                                                                t,
                                                              ));
                                                          },
                                                        )),
                                                        (e.p = 6),
                                                        (a = l),
                                                        (e.n = 7),
                                                        i
                                                      );
                                                    case 7:
                                                      return (
                                                        (r = e.v),
                                                        (e.n = 8),
                                                        a.addTrustedCertificate.call(
                                                          a,
                                                          r,
                                                        )
                                                      );
                                                    case 8:
                                                      e.n = 10;
                                                      break;
                                                    case 9:
                                                      return (
                                                        (e.p = 9),
                                                        (o = e.v),
                                                        console.error(
                                                          "Error encountered when trying to load certificate: ".concat(
                                                            o,
                                                          ) +
                                                            "Certificate will not be used as part of the verification process.",
                                                        ),
                                                        e.a(2, 0)
                                                      );
                                                    case 10:
                                                      e.n = 15;
                                                      break;
                                                    case 11:
                                                      if (
                                                        !(
                                                          t instanceof
                                                            ArrayBuffer ||
                                                          t instanceof
                                                            Int8Array ||
                                                          t instanceof
                                                            Uint8Array ||
                                                          t instanceof
                                                            Uint8ClampedArray
                                                        )
                                                      ) {
                                                        e.n = 15;
                                                        break;
                                                      }
                                                      return (
                                                        (e.p = 12),
                                                        (e.n = 13),
                                                        l.addTrustedCertificate(
                                                          t,
                                                        )
                                                      );
                                                    case 13:
                                                      e.n = 15;
                                                      break;
                                                    case 14:
                                                      return (
                                                        (e.p = 14),
                                                        (s = e.v),
                                                        console.error(
                                                          "Error encountered when trying to load certificate: ".concat(
                                                            s,
                                                          ) +
                                                            "Certificate will not be used as part of the verification process.",
                                                        ),
                                                        e.a(2, 0)
                                                      );
                                                    case 15:
                                                      return e.a(2);
                                                  }
                                              },
                                              e,
                                              null,
                                              [
                                                [12, 14],
                                                [6, 9],
                                                [1, 3],
                                              ],
                                            );
                                          })),
                                          v.s());
                                      case 8:
                                        if ((y = v.n()).done) {
                                          e.n = 11;
                                          break;
                                        }
                                        return e.d(d(E()), 9);
                                      case 9:
                                        if (0 !== e.v) {
                                          e.n = 10;
                                          break;
                                        }
                                        return e.a(3, 10);
                                      case 10:
                                        e.n = 8;
                                        break;
                                      case 11:
                                        e.n = 13;
                                        break;
                                      case 12:
                                        ((e.p = 12), (xe = e.v), v.e(xe));
                                      case 13:
                                        return ((e.p = 13), v.f(), e.f(13));
                                      case 14:
                                        ((_ = g(i)), (e.p = 15), _.s());
                                      case 16:
                                        if ((V = _.n()).done) {
                                          e.n = 25;
                                          break;
                                        }
                                        if (
                                          ((k = V.value),
                                          (A = k.constructor.name),
                                          (M = [
                                            "ArrayBuffer",
                                            "Int8Array",
                                            "Uint8Array",
                                            "Uint8ClampedArray",
                                          ]),
                                          (T = void 0),
                                          "Blob" !== A)
                                        ) {
                                          e.n = 18;
                                          break;
                                        }
                                        return ((e.n = 17), k.arrayBuffer());
                                      case 17:
                                        ((T = e.v), (e.n = 20));
                                        break;
                                      case 18:
                                        if (!M.includes(A)) {
                                          e.n = 19;
                                          break;
                                        }
                                        ((T = k), (e.n = 20));
                                        break;
                                      case 19:
                                        return (
                                          console.error(
                                            "The provided TrustList is an unsupported data-structure. Please ensure the TrustList is formatted as one of the following " +
                                              "data-structures: ".concat(
                                                []
                                                  .concat(M, ["Blob"])
                                                  .join("|"),
                                              ),
                                          ),
                                          e.a(3, 24)
                                        );
                                      case 20:
                                        return (
                                          (e.p = 20),
                                          (e.n = 21),
                                          s.FDFDoc.createFromMemoryBuffer(T)
                                        );
                                      case 21:
                                        return (
                                          (O = e.v),
                                          (e.n = 22),
                                          l.loadTrustList(O)
                                        );
                                      case 22:
                                        e.n = 24;
                                        break;
                                      case 23:
                                        return (
                                          (e.p = 23),
                                          (Ee = e.v),
                                          console.error(
                                            "Error encountered when trying to load certificate: ".concat(
                                              Ee,
                                              ". ",
                                            ) +
                                              "Certificate will not be used as part of the verification process.",
                                          ),
                                          e.a(3, 24)
                                        );
                                      case 24:
                                        e.n = 16;
                                        break;
                                      case 25:
                                        e.n = 27;
                                        break;
                                      case 26:
                                        ((e.p = 26), (_e = e.v), _.e(_e));
                                      case 27:
                                        return ((e.p = 27), _.f(), e.f(27));
                                      case 28:
                                        return (
                                          (e.n = 29),
                                          t.getFieldIteratorBegin()
                                        );
                                      case 29:
                                        C = e.v;
                                      case 30:
                                        return ((e.n = 31), C.hasNext());
                                      case 31:
                                        if (!e.v) {
                                          e.n = 91;
                                          break;
                                        }
                                        return ((e.n = 32), C.current());
                                      case 32:
                                        return (
                                          (D = e.v),
                                          (e.n = 33),
                                          D.isValid()
                                        );
                                      case 33:
                                        if ((Ve = !e.v)) {
                                          e.n = 35;
                                          break;
                                        }
                                        return ((e.n = 34), D.getType());
                                      case 34:
                                        ((ke = e.v),
                                          (Ae = s.Field.Type.e_signature),
                                          (Ve = ke !== Ae));
                                      case 35:
                                        if (!Ve) {
                                          e.n = 36;
                                          break;
                                        }
                                        return e.a(3, 90);
                                      case 36:
                                        return (
                                          (e.n = 37),
                                          s.DigitalSignatureField.createFromField(
                                            D,
                                          )
                                        );
                                      case 37:
                                        return (
                                          (N = e.v),
                                          (e.p = 38),
                                          (e.n = 39),
                                          N.verify(l)
                                        );
                                      case 39:
                                        return (
                                          (j = e.v),
                                          (e.n = 40),
                                          N.getSDFObj()
                                        );
                                      case 40:
                                        return ((e.n = 41), e.v.getObjNum());
                                      case 41:
                                        return (
                                          (P = e.v),
                                          (I = void 0),
                                          (R = void 0),
                                          (F = void 0),
                                          (L = void 0),
                                          (H = void 0),
                                          (B = void 0),
                                          (U = void 0),
                                          (z = void 0),
                                          (G = void 0),
                                          (W = {}),
                                          (q = {}),
                                          (e.n = 42),
                                          N.hasCryptographicSignature()
                                        );
                                      case 42:
                                        if (!($ = e.v)) {
                                          e.n = 63;
                                          break;
                                        }
                                        return ((e.n = 43), N.getSubFilter());
                                      case 43:
                                        if (
                                          (J = e.v) !==
                                          s.DigitalSignatureField.SubFilterType
                                            .e_adbe_pkcs7_detached
                                        ) {
                                          e.n = 48;
                                          break;
                                        }
                                        return (
                                          (e.n = 44),
                                          N.getSignerCertFromCMS()
                                        );
                                      case 44:
                                        return (
                                          (K = e.v),
                                          (e.n = 45),
                                          K.getSubjectField()
                                        );
                                      case 45:
                                        return ((Z = e.v), (e.n = 46), x(Z));
                                      case 46:
                                        if ((Me = e.v)) {
                                          e.n = 47;
                                          break;
                                        }
                                        Me = {};
                                      case 47:
                                        I = Me.e_commonName;
                                      case 48:
                                        if (
                                          J ===
                                          s.DigitalSignatureField.SubFilterType
                                            .e_ETSI_RFC3161
                                        ) {
                                          e.n = 60;
                                          break;
                                        }
                                        if (I) {
                                          e.n = 52;
                                          break;
                                        }
                                        return (
                                          (e.n = 49),
                                          N.getSignatureName()
                                        );
                                      case 49:
                                        if ((Te = e.v)) {
                                          e.n = 51;
                                          break;
                                        }
                                        return ((e.n = 50), N.getContactInfo());
                                      case 50:
                                        Te = e.v;
                                      case 51:
                                        I = Te;
                                      case 52:
                                        return ((e.n = 53), N.getSigningTime());
                                      case 53:
                                        return (
                                          (R = e.v),
                                          (e.n = 54),
                                          R.isValid()
                                        );
                                      case 54:
                                        if (!e.v) {
                                          e.n = 55;
                                          break;
                                        }
                                        ((R = w(R, a)), (e.n = 56));
                                        break;
                                      case 55:
                                        R = null;
                                      case 56:
                                        return ((e.n = 57), N.getContactInfo());
                                      case 57:
                                        return (
                                          (H = e.v),
                                          (e.n = 58),
                                          N.getLocation()
                                        );
                                      case 58:
                                        return (
                                          (B = e.v),
                                          (e.n = 59),
                                          N.getReason()
                                        );
                                      case 59:
                                        U = e.v;
                                      case 60:
                                        return (
                                          (e.n = 61),
                                          N.getDocumentPermissions()
                                        );
                                      case 61:
                                        return (
                                          (F = e.v),
                                          (e.n = 62),
                                          N.isCertification()
                                        );
                                      case 62:
                                        L = e.v;
                                      case 63:
                                        return (
                                          (e.n = 64),
                                          j.getVerificationStatus()
                                        );
                                      case 64:
                                        return (
                                          (Q = e.v),
                                          (e.n = 65),
                                          j.getDocumentStatus()
                                        );
                                      case 65:
                                        return (
                                          (X = e.v),
                                          (e.n = 66),
                                          j.getDigestStatus()
                                        );
                                      case 66:
                                        return (
                                          (Y = e.v),
                                          (e.n = 67),
                                          j.getTrustStatus()
                                        );
                                      case 67:
                                        return (
                                          (ee = e.v),
                                          (e.n = 68),
                                          j.getPermissionsStatus()
                                        );
                                      case 68:
                                        return (
                                          (te = e.v),
                                          (e.n = 69),
                                          j.getDigestAlgorithm()
                                        );
                                      case 69:
                                        return (
                                          (ne = e.v),
                                          (Oe = Promise),
                                          (e.n = 70),
                                          j.getDisallowedChanges()
                                        );
                                      case 70:
                                        return (
                                          (Ce = e.v.map(
                                            (function () {
                                              var e = h(
                                                p().m(function e(t) {
                                                  var n, i;
                                                  return p().w(function (e) {
                                                    for (;;)
                                                      switch (e.n) {
                                                        case 0:
                                                          return (
                                                            (e.n = 1),
                                                            t.getObjNum()
                                                          );
                                                        case 1:
                                                          return (
                                                            (n = e.v),
                                                            (e.n = 2),
                                                            t.getTypeAsString()
                                                          );
                                                        case 2:
                                                          return (
                                                            (i = e.v),
                                                            e.a(2, {
                                                              objnum: n,
                                                              type: i,
                                                            })
                                                          );
                                                      }
                                                  }, e);
                                                }),
                                              );
                                              return function (t) {
                                                return e.apply(this, arguments);
                                              };
                                            })(),
                                          )),
                                          (e.n = 71),
                                          Oe.all.call(Oe, Ce)
                                        );
                                      case 71:
                                        return (
                                          (ie = e.v),
                                          (ae = ee === c.e_trust_verified),
                                          (re = void 0),
                                          (oe = void 0),
                                          (se = void 0),
                                          (le = void 0),
                                          (e.n = 72),
                                          j.hasTrustVerificationResult()
                                        );
                                      case 72:
                                        if (!e.v) {
                                          e.n = 87;
                                          break;
                                        }
                                        return (
                                          (e.n = 73),
                                          j.getTrustVerificationResult()
                                        );
                                      case 73:
                                        return (
                                          (ce = e.v),
                                          (e.n = 74),
                                          ce.wasSuccessful()
                                        );
                                      case 74:
                                        return (
                                          (oe = e.v),
                                          (e.n = 75),
                                          ce.getResultString()
                                        );
                                      case 75:
                                        return (
                                          (re = e.v),
                                          (e.n = 76),
                                          ce.getTimeOfTrustVerificationEnum()
                                        );
                                      case 76:
                                        return (
                                          (se = e.v),
                                          (e.n = 77),
                                          ce.getTimeOfTrustVerification()
                                        );
                                      case 77:
                                        return (
                                          (ue = e.v) && (le = S(ue, a)),
                                          (e.n = 78),
                                          ce.getCertPath()
                                        );
                                      case 78:
                                        if (!(de = e.v).length) {
                                          e.n = 87;
                                          break;
                                        }
                                        return (
                                          (ge = de[0]),
                                          (e.n = 79),
                                          ge.getIssuerField()
                                        );
                                      case 79:
                                        return ((fe = e.v), (e.n = 80), x(fe));
                                      case 80:
                                        return (
                                          (pe = e.v),
                                          Object.assign(W, pe),
                                          (e.n = 81),
                                          ge.getSubjectField()
                                        );
                                      case 81:
                                        return ((me = e.v), (e.n = 82), x(me));
                                      case 82:
                                        return (
                                          (be = e.v),
                                          Object.assign(q, be),
                                          (he = de[de.length - 1]),
                                          (e.p = 83),
                                          (e.n = 84),
                                          he.getNotBeforeEpochTime()
                                        );
                                      case 84:
                                        return (
                                          (ve = e.v),
                                          (e.n = 85),
                                          he.getNotAfterEpochTime()
                                        );
                                      case 85:
                                        ((ye = e.v),
                                          (z = ye >= ue && ue >= ve),
                                          (e.n = 87));
                                        break;
                                      case 86:
                                        ((e.p = 86),
                                          (De = e.v).includes(
                                            "calendar_point::to_std_timepoint() does not support years after",
                                          ) &&
                                            (console.warn(
                                              "The following error is a known issue with Botan, and aims to be addressed in a future release of PDFNet. This currently does not impact PDFTron's Digital Signature Verification capabilities.",
                                            ),
                                            console.warn(De)));
                                      case 87:
                                        return (
                                          (we = void 0),
                                          (we = Q
                                            ? "digital_signature_valid"
                                            : X !== m.e_no_error ||
                                                (Y !== u.e_digest_verified &&
                                                  Y !==
                                                    u.e_digest_verification_disabled) ||
                                                ee === c.e_no_trust_status ||
                                                (te !== f.e_unmodified &&
                                                  te !==
                                                    f.e_has_allowed_changes &&
                                                  te !==
                                                    f.e_permissions_verification_disabled)
                                              ? "digital_signature_error"
                                              : "digital_signature_warning"),
                                          I
                                            ? (G = I)
                                            : !I &&
                                              q.e_commonName &&
                                              (G = q.e_commonName),
                                          (e.n = 88),
                                          D.getName()
                                        );
                                      case 88:
                                        ((Se = e.v),
                                          (b[Se] = {
                                            signed: $,
                                            signer: I,
                                            signerName: G,
                                            signTime: R,
                                            verificationStatus: Q,
                                            documentStatus: X,
                                            digestStatus: Y,
                                            trustStatus: ee,
                                            permissionStatus: te,
                                            disallowedChanges: ie,
                                            trustVerificationResultBoolean: oe,
                                            trustVerificationResultString: re,
                                            timeOfTrustVerificationEnum: se,
                                            trustVerificationTime: le,
                                            id: P,
                                            badgeIcon: we,
                                            validSignerIdentity: ae,
                                            digestAlgorithm: ne,
                                            documentPermission: F,
                                            isCertification: L,
                                            contactInfo: H,
                                            location: B,
                                            reason: U,
                                            issuerField: W,
                                            subjectField: q,
                                            validAtTimeOfSigning: z,
                                          }),
                                          (e.n = 90));
                                        break;
                                      case 89:
                                        ((e.p = 89),
                                          (Ne = e.v),
                                          console.error(Ne));
                                      case 90:
                                        (C.next(), (e.n = 30));
                                        break;
                                      case 91:
                                        return e.a(2);
                                    }
                                },
                                e,
                                null,
                                [
                                  [83, 86],
                                  [38, 89],
                                  [20, 23],
                                  [15, 26, 27, 28],
                                  [7, 12, 13, 14],
                                ],
                              );
                            }),
                          ),
                        )
                      );
                    case 1:
                      return e.a(2, b);
                  }
              }, e);
            }),
          );
          return function (t, n, i, a, r, o) {
            return e.apply(this, arguments);
          };
        })(),
        w = function (e, t) {
          var n = e.year,
            i = e.month,
            a = e.day,
            r = e.hour,
            o = e.minute,
            s = e.second;
          return new Date(Date.UTC(n, i - 1, a, r, o, s)).toLocaleDateString(
            t.replace("_", "-"),
            {
              year: "numeric",
              month: "long",
              weekday: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              timeZoneName: "short",
            },
          );
        },
        S = function (e, t) {
          var n = new Date(0);
          return (
            n.setUTCSeconds(e),
            n.toLocaleDateString(t.replace("_", "-"), {
              year: "numeric",
              month: "long",
              weekday: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              timeZoneName: "short",
            })
          );
        },
        x = (function () {
          var e = h(
            p().m(function e(t) {
              var n, i, a, r, o, s, l, c, u;
              return p().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (n = {}),
                          (e.n = 1),
                          t.getAllAttributesAndValues()
                        );
                      case 1:
                        ((i = e.v), (a = g(i)), (e.p = 2), a.s());
                      case 3:
                        if ((r = a.n()).done) {
                          e.n = 8;
                          break;
                        }
                        return (
                          (o = r.value),
                          (e.n = 4),
                          o.getAttributeTypeOID()
                        );
                      case 4:
                        return ((s = e.v), (e.n = 5), s.getRawValue());
                      case 5:
                        return ((l = e.v), (e.n = 6), o.getStringValue());
                      case 6:
                        ((c = e.v), (n[E(l)] = c));
                      case 7:
                        e.n = 3;
                        break;
                      case 8:
                        e.n = 10;
                        break;
                      case 9:
                        ((e.p = 9), (u = e.v), a.e(u));
                      case 10:
                        return ((e.p = 10), a.f(), e.f(10));
                      case 11:
                        return e.a(2, n);
                    }
                },
                e,
                null,
                [[2, 9, 10, 11]],
              );
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        E = function (e) {
          return {
            "[2,5,4,3]": "e_commonName",
            "[2,5,4,4]": "e_surname",
            "[2,5,4,6]": "e_countryName",
            "[2,5,4,7]": "e_localityName",
            "[2,5,4,8]": "e_stateOrProvinceName",
            "[2,5,4,9]": "e_streetAddress",
            "[2,5,4,10]": "e_organizationName",
            "[2,5,4,11]": "e_organizationalUnitName",
            "[1,2,840,113549,1,9,1]": "e_emailAddress",
          }["string" == typeof e ? e : JSON.stringify(e)];
        },
        _ = n(471),
        V = (n(30), n(31), n(28), n(2)),
        k = n.n(V),
        A = n(15),
        M = n.n(A),
        T = (n(94), n(119)),
        O = n.n(T),
        C = n(23);
      function D(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                a,
                r,
                o,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = r.call(n)).done) &&
                    (s.push(i.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((c = !0), (a = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return N(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? N(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      var j = function (e) {
          var t = e.rect,
            n = D(Object(i.useState)(!1), 2),
            r = n[0],
            o = n[1];
          return (
            Object(i.useEffect)(function () {
              var e = l.a.getScrollViewElement(),
                t = function () {
                  o(!1);
                };
              return (
                e.addEventListener("scroll", t),
                function () {
                  return e.removeEventListener("scroll", t);
                }
              );
            }),
            Object(i.useEffect)(
              function () {
                t &&
                  (setTimeout(function () {
                    o(!0);
                  }, 50),
                  setTimeout(function () {
                    o(!1);
                  }, 700));
              },
              [t],
            ),
            r &&
              O.a.createPortal(
                a.a.createElement("div", {
                  style: {
                    position: "absolute",
                    top: t.y1,
                    left: t.x1,
                    width: t.x2 - t.x1,
                    height: t.y2 - t.y1,
                    border: "1px solid #00a5e4",
                    zIndex: 99,
                  },
                }),
                Object(C.a)().querySelector("#app"),
              )
          );
        },
        P = n(90),
        I = n(1597),
        R = n(41);
      n(1702);
      function F(e) {
        return (F =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function L(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                a,
                r,
                o,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = r.call(n)).done) &&
                    (s.push(i.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((c = !0), (a = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return H(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? H(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function H(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function B(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != F(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, t || "default");
                if ("object" != F(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == F(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var U = function (e) {
          var t = e.isCertification,
            n = e.ModificationPermissionsStatus,
            i = e.permissionStatus,
            r = e.translate;
          if (e.digestStatus === e.DigestStatusErrorCodes.e_digest_invalid)
            return a.a.createElement(
              "p",
              null,
              r(
                "digitalSignatureVerification.digestStatus.documentHasBeenAltered",
              ),
            );
          var o = B(
            B(
              B(
                B(
                  B(
                    B(
                      {},
                      n.e_invalidated_by_disallowed_changes,
                      "digitalSignatureVerification.permissionStatus.invalidatedByDisallowedChanges",
                    ),
                    n.e_has_allowed_changes,
                    "digitalSignatureVerification.permissionStatus.hasAllowedChanges",
                  ),
                  n.e_unmodified,
                  t
                    ? ""
                        .concat(
                          r(
                            "digitalSignatureVerification.permissionStatus.unmodified",
                          ),
                          " ",
                        )
                        .concat(
                          r("digitalSignatureVerification.certified"),
                          ".",
                        )
                    : ""
                        .concat(
                          r(
                            "digitalSignatureVerification.permissionStatus.unmodified",
                          ),
                          " ",
                        )
                        .concat(r("digitalSignatureVerification.signed"), "."),
                ),
                n.e_permissions_verification_disabled,
                "digitalSignatureVerification.permissionStatus.permissionsVerificationDisabled",
              ),
              n.e_no_permissions_status,
              "digitalSignatureVerification.permissionStatus.noPermissionsStatus",
            ),
            n.e_unsupported_permissions_features,
            "digitalSignatureVerification.permissionStatus.unsupportedPermissionsFeatures",
          );
          return a.a.createElement("p", null, r(o[i] || ""));
        },
        z = {
          name: k.a.string.isRequired,
          onClick: k.a.func,
          field: k.a.instanceOf(window.Core.Annotations.Forms.Field),
        },
        G = function (e) {
          var t,
            n,
            u = e.name,
            d = e.field,
            g = Object(r.e)(function (e) {
              return c.a.getVerificationResult(e, u);
            }),
            f = L(Object(i.useState)(null), 2),
            p = f[0],
            m = f[1],
            b = L(Object(i.useState)(!1), 2),
            h = b[0],
            v = b[1],
            y = window.Core.PDFNet,
            w = y.VerificationResult,
            S = y.VerificationOptions.TimeMode,
            x = w.ModificationPermissionsStatus,
            E = w.DigestStatus,
            _ = L(Object(o.a)(), 1)[0],
            V = g.signed,
            k = g.signTime,
            A = g.verificationStatus,
            T = g.permissionStatus,
            O = g.disallowedChanges,
            C = g.trustVerificationResultBoolean,
            D = g.timeOfTrustVerificationEnum,
            N = g.trustVerificationTime,
            F = g.badgeIcon,
            H = g.isCertification,
            B = g.contactInfo,
            z = g.location,
            G = g.reason,
            W = g.signerName,
            q = g.digestStatus,
            $ = Object(r.d)(),
            J = function () {
              !(function (e) {
                if (e.widgets.length) {
                  var t = e.widgets[0];
                  l.a.jumpToAnnotation(t);
                  var n = l.a.getScrollViewElement(),
                    i = n.scrollLeft,
                    a = n.scrollTop,
                    r = t.getRect(),
                    o = l.a
                      .getDisplayModeObject()
                      .pageToWindow({ x: r.x1, y: r.y1 }, t.PageNumber),
                    s = l.a
                      .getDisplayModeObject()
                      .pageToWindow({ x: r.x2, y: r.y2 }, t.PageNumber);
                  m({ x1: o.x - i, y1: o.y - a, x2: s.x - i, y2: s.y - a });
                }
              })(d);
            },
            K = Object(P.a)(function () {
              ($(s.a.setSignatureValidationModalWidgetName(u)),
                $(s.a.openElement("signatureValidationModal")));
            });
          return a.a.createElement(
            "div",
            { className: "signature-widget-info" },
            V
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    I.a,
                    {
                      labelHeader:
                        ((n = _(
                          H
                            ? "digitalSignatureVerification.Certified"
                            : "digitalSignatureVerification.Signed",
                        )),
                        (n += " "
                          .concat(_("digitalSignatureVerification.by"), " ")
                          .concat(W || _("digitalSignatureModal.unknown"))),
                        k &&
                          (n += " "
                            .concat(_("digitalSignatureVerification.on"), " ")
                            .concat(k)),
                        n),
                      iconGlyph: F,
                      useI18String: !1,
                      onClick: J,
                      onKeyDown: J,
                    },
                    a.a.createElement(
                      "div",
                      { className: "verificationDetails", tabIndex: -1 },
                      a.a.createElement(
                        "div",
                        { className: "header" },
                        ((t = _(
                          H
                            ? "digitalSignatureVerification.Certification"
                            : "digitalSignatureVerification.Signature",
                        )),
                        a.a.createElement(
                          "div",
                          { className: "title" },
                          a.a.createElement(
                            "p",
                            null,
                            _(
                              A
                                ? "digitalSignatureVerification.verificationStatus.valid"
                                : "digitalSignatureVerification.verificationStatus.failed",
                              { verificationType: t },
                            ),
                          ),
                        )),
                        a.a.createElement(
                          "ul",
                          { className: "body" },
                          a.a.createElement(
                            "li",
                            null,
                            U({
                              isCertification: H,
                              ModificationPermissionsStatus: x,
                              permissionStatus: T,
                              translate: _,
                              digestStatus: q,
                              DigestStatusErrorCodes: E,
                            }),
                          ),
                          O.map(function (e) {
                            var t = e.objnum,
                              n = e.type;
                            return a.a.createElement(
                              "li",
                              { key: t },
                              a.a.createElement(
                                "p",
                                null,
                                _(
                                  "digitalSignatureVerification.disallowedChange",
                                  { type: n, objnum: t },
                                ),
                              ),
                            );
                          }),
                          (function () {
                            var e;
                            switch (D) {
                              case S.e_current:
                                e = _(
                                  "digitalSignatureVerification.trustVerification.current",
                                );
                                break;
                              case S.e_signing:
                                e = _(
                                  "digitalSignatureVerification.trustVerification.signing",
                                );
                                break;
                              case S.e_timestamp:
                                e = _(
                                  "digitalSignatureVerification.trustVerification.timestamp",
                                );
                                break;
                              default:
                                console.warn(
                                  "Unexpected pdftron::PDF::VerificationOptions::TimeMode: ".concat(
                                    D,
                                  ),
                                );
                            }
                            return a.a.createElement(
                              a.a.Fragment,
                              null,
                              a.a.createElement(
                                "li",
                                null,
                                a.a.createElement(
                                  "p",
                                  null,
                                  _(
                                    C
                                      ? "digitalSignatureVerification.trustVerification.verifiedTrust"
                                      : "digitalSignatureVerification.trustVerification.noTrustVerification",
                                  ),
                                ),
                              ),
                              a.a.createElement(
                                "li",
                                null,
                                a.a.createElement("p", null, N),
                              ),
                              a.a.createElement(
                                "li",
                                null,
                                a.a.createElement("p", null, e),
                              ),
                            );
                          })(),
                          a.a.createElement(
                            "li",
                            null,
                            a.a.createElement(
                              "button",
                              {
                                "data-element": "signatureProperties-".concat(
                                  u,
                                ),
                                onClick: K,
                                tabIndex: 0,
                                className: "signatureProperties link",
                                "aria-label": "Open signature properties modal",
                              },
                              a.a.createElement(
                                "p",
                                { className: "bold underline" },
                                _(
                                  "digitalSignatureVerification.signatureProperties",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    a.a.createElement(
                      "div",
                      { className: "header header-with-arrow" },
                      B || z || G
                        ? a.a.createElement(
                            "div",
                            { className: "signatureDetails", tabIndex: -1 },
                            a.a.createElement(
                              "div",
                              { className: "title collapsible" },
                              a.a.createElement(R.a, {
                                img: "icon-chevron-right",
                                className: M()({ arrow: !0, expanded: h }),
                                ariaExpanded: h,
                                isActive: h,
                                ariaLabel: _(
                                  "digitalSignatureVerification.signatureDetails.signatureDetails",
                                ),
                                onClick: function () {
                                  return v(!h);
                                },
                              }),
                              a.a.createElement(
                                "p",
                                null,
                                _(
                                  "digitalSignatureVerification.signatureDetails.signatureDetails",
                                ),
                              ),
                            ),
                            h &&
                              a.a.createElement(
                                "ul",
                                { className: "body" },
                                a.a.createElement(
                                  "li",
                                  null,
                                  a.a.createElement(
                                    "p",
                                    { className: "bold" },
                                    "".concat(
                                      _(
                                        "digitalSignatureVerification.signatureDetails.contactInformation",
                                      ),
                                      ":",
                                    ),
                                  ),
                                  a.a.createElement(
                                    "p",
                                    { className: "result-for-header" },
                                    B ||
                                      _(
                                        "digitalSignatureVerification.signatureDetails.noContactInformation",
                                      ),
                                  ),
                                ),
                                a.a.createElement(
                                  "li",
                                  null,
                                  a.a.createElement(
                                    "p",
                                    { className: "bold" },
                                    "".concat(
                                      _(
                                        "digitalSignatureVerification.signatureDetails.location",
                                      ),
                                      ":",
                                    ),
                                  ),
                                  a.a.createElement(
                                    "p",
                                    { className: "result-for-header" },
                                    z ||
                                      _(
                                        "digitalSignatureVerification.signatureDetails.noLocation",
                                      ),
                                  ),
                                ),
                                a.a.createElement(
                                  "li",
                                  null,
                                  a.a.createElement(
                                    "p",
                                    { className: "bold" },
                                    "".concat(
                                      _(
                                        "digitalSignatureVerification.signatureDetails.reason",
                                      ),
                                      ":",
                                    ),
                                  ),
                                  a.a.createElement(
                                    "p",
                                    { className: "result-for-header" },
                                    G ||
                                      _(
                                        "digitalSignatureVerification.signatureDetails.noReason",
                                      ),
                                  ),
                                ),
                                k &&
                                  a.a.createElement(
                                    "li",
                                    null,
                                    a.a.createElement(
                                      "p",
                                      { className: "bold" },
                                      "".concat(
                                        _(
                                          "digitalSignatureVerification.signatureDetails.signingTime",
                                        ),
                                        ":",
                                      ),
                                    ),
                                    a.a.createElement(
                                      "p",
                                      { className: "result-for-header" },
                                      k ||
                                        _(
                                          "digitalSignatureVerification.signatureDetails.noSigningTime",
                                        ),
                                    ),
                                  ),
                              ),
                          )
                        : null,
                    ),
                  ),
                )
              : a.a.createElement(I.a, {
                  labelHeader: _(
                    "digitalSignatureVerification.unsignedSignatureField",
                    { fieldName: d.name },
                  ),
                  iconGlyph: "digital_signature_empty",
                  useI18String: !1,
                  onClick: J,
                  onKeyDown: J,
                }),
            a.a.createElement(j, { rect: p }),
          );
        };
      G.propTypes = z;
      var W = G,
        q = (n(1704), n(51)),
        $ = n(32);
      function J(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return te(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          ee(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function K() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          a = n.toStringTag || "@@toStringTag";
        function r(n, i, a, r) {
          var l = i && i.prototype instanceof s ? i : s,
            c = Object.create(l.prototype);
          return (
            Z(
              c,
              "_invoke",
              (function (n, i, a) {
                var r,
                  s,
                  l,
                  c = 0,
                  u = a || [],
                  d = !1,
                  g = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((r = t), (s = 0), (l = e), (g.n = n), o);
                    },
                  };
                function f(n, i) {
                  for (
                    s = n, l = i, t = 0;
                    !d && c && !a && t < u.length;
                    t++
                  ) {
                    var a,
                      r = u[t],
                      f = g.p,
                      p = r[2];
                    n > 3
                      ? (a = p === i) &&
                        ((l = r[(s = r[4]) ? 5 : ((s = 3), 3)]),
                        (r[4] = r[5] = e))
                      : r[0] <= f &&
                        ((a = n < 2 && f < r[1])
                          ? ((s = 0), (g.v = i), (g.n = r[1]))
                          : f < p &&
                            (a = n < 3 || r[0] > i || i > p) &&
                            ((r[4] = n), (r[5] = i), (g.n = p), (s = 0)));
                  }
                  if (a || n > 1) return o;
                  throw ((d = !0), i);
                }
                return function (a, u, p) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === u && f(u, p), s = u, l = p;
                    (t = s < 2 ? e : l) || !d;

                  ) {
                    r ||
                      (s
                        ? s < 3
                          ? (s > 1 && (g.n = -1), f(s, l))
                          : (g.n = l)
                        : (g.v = l));
                    try {
                      if (((c = 2), r)) {
                        if ((s || (a = "next"), (t = r[a]))) {
                          if (!(t = t.call(r, l)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((l = t.value), s < 2 && (s = 0));
                        } else
                          (1 === s && (t = r.return) && t.call(r),
                            s < 2 &&
                              ((l = TypeError(
                                "The iterator does not provide a '" +
                                  a +
                                  "' method",
                              )),
                              (s = 1)));
                        r = e;
                      } else if ((t = (d = g.n < 0) ? l : n.call(i, g)) !== o)
                        break;
                    } catch (t) {
                      ((r = e), (s = 1), (l = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, a, r),
              !0,
            ),
            c
          );
        }
        var o = {};
        function s() {}
        function l() {}
        function c() {}
        t = Object.getPrototypeOf;
        var u = [][i]
            ? t(t([][i]()))
            : (Z((t = {}), i, function () {
                return this;
              }),
              t),
          d = (c.prototype = s.prototype = Object.create(u));
        function g(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), Z(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (l.prototype = c),
          Z(d, "constructor", c),
          Z(c, "constructor", l),
          (l.displayName = "GeneratorFunction"),
          Z(c, a, "GeneratorFunction"),
          Z(d),
          Z(d, a, "Generator"),
          Z(d, i, function () {
            return this;
          }),
          Z(d, "toString", function () {
            return "[object Generator]";
          }),
          (K = function () {
            return { w: r, m: g };
          })()
        );
      }
      function Z(e, t, n, i) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (e) {
          a = 0;
        }
        (Z = function (e, t, n, i) {
          if (t)
            a
              ? a(e, t, {
                  value: n,
                  enumerable: !i,
                  configurable: !i,
                  writable: !i,
                })
              : (e[t] = n);
          else {
            var r = function (t, n) {
              Z(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(e, t, n, i);
      }
      function Q(e, t, n, i, a, r, o) {
        try {
          var s = e[r](o),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, a);
      }
      function X(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, a) {
            var r = e.apply(t, n);
            function o(e) {
              Q(r, i, a, o, s, "next", e);
            }
            function s(e) {
              Q(r, i, a, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function Y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                a,
                r,
                o,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = r.call(n)).done) &&
                    (s.push(i.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((c = !0), (a = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return s;
            }
          })(e, t) ||
          ee(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ee(e, t) {
        if (e) {
          if ("string" == typeof e) return te(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? te(e, t)
                : void 0
          );
        }
      }
      function te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      var ne = function () {
        var e = Object(r.d)(),
          t = Y(Object(i.useState)([]), 2),
          n = t[0],
          u = t[1],
          d = Y(Object(i.useState)(!1), 2),
          g = d[0],
          f = d[1],
          p = Y(Object(i.useState)(""), 2),
          m = p[0],
          b = p[1],
          h = Y(Object(i.useState)(l.a.getDocument()), 2),
          y = h[0],
          w = h[1],
          S = Y(
            Object(r.e)(function (e) {
              return [
                c.a.isElementDisabled(e, "signaturePanel"),
                c.a.getCertificates(e),
                c.a.getTrustLists(e),
                c.a.getCurrentLanguage(e),
                c.a.getIsRevocationCheckingEnabled(e),
                c.a.getRevocationProxyPrefix(e),
              ];
            }),
            6,
          ),
          x = S[0],
          E = S[1],
          V = S[2],
          k = S[3],
          A = S[4],
          M = S[5],
          T = Y(Object(o.a)(), 1)[0],
          O = (function () {
            var e = X(
              K().m(function e() {
                return K().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        w(l.a.getDocument());
                      case 1:
                        return e.a(2);
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          C = Object(i.useCallback)(
            function () {
              (f(!0), e(s.a.setVerificationResult({})));
            },
            [f, e],
          ),
          D = function (e, t) {
            var n = l.a
              .getAnnotationManager()
              .getFormFieldCreationManager()
              .isInFormFieldCreationMode();
            "add" === t
              ? j(l.a.getAnnotationManager().getAnnotationsList())
              : "delete" === t && n && P(e);
          },
          N = function () {
            var e = l.a.getAnnotationManager().getAnnotationsList();
            j(e);
          },
          j = function (e) {
            var t = [];
            e.forEach(function (e) {
              e instanceof window.Core.Annotations.SignatureWidgetAnnotation &&
                t.push(e.getField());
            });
            var n = new Set(t);
            u(J(n));
          },
          P = function (e) {
            (e.forEach(function (e) {
              I(e);
            }),
              N());
          },
          I = function (e) {
            if (e instanceof window.Core.Annotations.WidgetAnnotation) {
              var t = l.a.getAnnotationManager(),
                n = t.getAnnotationsList().filter(function (t) {
                  return t.getCustomData("trn-editing-rectangle-id") === e.Id;
                });
              t.deleteAnnotations(n);
            }
          },
          R = function () {
            (u([]), N());
          };
        if (
          (Object(i.useEffect)(
            function () {
              return (
                l.a.addEventListener("documentLoaded", O),
                l.a.addEventListener("documentUnloaded", C),
                l.a.addEventListener("annotationChanged", D),
                l.a.addEventListener("formFieldCreationModeStarted", R),
                l.a.addEventListener("formFieldCreationModeEnded", R),
                function () {
                  (l.a.removeEventListener("documentLoaded", O),
                    l.a.removeEventListener("documentUnloaded", C),
                    l.a.removeEventListener("annotationChanged", D),
                    l.a.removeEventListener("formFieldCreationModeStarted", R),
                    l.a.removeEventListener("formFieldCreationModeEnded", R));
                }
              );
            },
            [C],
          ),
          Object(i.useEffect)(
            function () {
              y
                ? l.a.getAnnotationsLoadedPromise().then(function () {
                    (f(!0),
                      v(y, E, V, k, A, M, e)
                        .then(
                          (function () {
                            var e = X(
                              K().m(function e(t) {
                                var n;
                                return K().w(function (e) {
                                  for (;;)
                                    switch (e.n) {
                                      case 0:
                                        ((n = l.a
                                          .getAnnotationManager()
                                          .getFieldManager()),
                                          u(
                                            Object.keys(t).map(function (e) {
                                              return n.getField(e);
                                            }),
                                          ),
                                          b(""));
                                      case 1:
                                        return e.a(2);
                                    }
                                }, e);
                              }),
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })(),
                        )
                        .catch(function (e) {
                          e && e.message ? b(e.message) : console.error(e);
                        })
                        .then(function () {
                          N();
                        })
                        .finally(function () {
                          f(!1);
                        }));
                  })
                : f(!0);
            },
            [E, y, e, k],
          ),
          x)
        )
          return null;
        return a.a.createElement(
          "div",
          {
            className: "Panel SignaturePanel",
            "data-element": "signaturePanel",
          },
          (function () {
            var e;
            if (g)
              e = a.a.createElement(_.a, {
                inPanel: !0,
                width: "40px",
                height: "40px",
              });
            else if ("Error reading the local certificate" === m)
              e = T(
                "digitalSignatureVerification.panelMessages.localCertificateError",
              );
            else if ("Download Failed" === m)
              e = T(
                "digitalSignatureVerification.panelMessages.certificateDownloadError",
              );
            else {
              if (n.length) return null;
              e = T(
                "digitalSignatureVerification.panelMessages.noSignatureFields",
              );
            }
            return a.a.createElement(
              "div",
              { className: "empty-panel-container" },
              a.a.createElement(q.a, {
                className: "empty-icon",
                glyph: $.c[$.e.SIGNATURE].icon,
              }),
              a.a.createElement("div", { className: "empty-message" }, e),
            );
          })(),
          !g &&
            n.length > 0 &&
            n.map(function (e, t) {
              return a.a.createElement(W, {
                key: t,
                name: e.name,
                collapsible: !0,
                field: e,
              });
            }),
        );
      };
      t.default = ne;
    },
    2025: function (e, t, n) {
      var i = n(35),
        a = n(2026);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const i = [];
                return (
                  n.querySelectorAll(t).forEach((e) => i.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && i.push(...e(t, n.shadowRoot));
                  }),
                  i
                );
              })("apryse-webviewer")));
          const n = [];
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            if (0 === i)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      i(a, r);
      e.exports = a.locals || {};
    },
    2026: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".signature-icon .badge{color:#fff}.signature-icon .medium{width:18px;height:18px}.signature-icon .small{width:16px;height:16px}",
        "",
      ]);
    },
    2027: function (e, t, n) {
      var i = n(35),
        a = n(2028);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const i = [];
                return (
                  n.querySelectorAll(t).forEach((e) => i.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && i.push(...e(t, n.shadowRoot));
                  }),
                  i
                );
              })("apryse-webviewer")));
          const n = [];
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            if (0 === i)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      i(a, r);
      e.exports = a.locals || {};
    },
    2028: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ".open.SignatureValidationModal{visibility:visible}.closed.SignatureValidationModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SignatureValidationModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.SignatureValidationModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.SignatureValidationModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.SignatureValidationModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.SignatureValidationModal .footer .modal-button.cancel:hover,.SignatureValidationModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.SignatureValidationModal .footer .modal-button.cancel,.SignatureValidationModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.SignatureValidationModal .footer .modal-button.cancel.disabled,.SignatureValidationModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.SignatureValidationModal .footer .modal-button.cancel.disabled span,.SignatureValidationModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.SignatureValidationModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.SignatureValidationModal .modal-container .wrapper .modal-content{padding:10px}.SignatureValidationModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.SignatureValidationModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.SignatureValidationModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.SignatureValidationModal .footer .modal-button.confirm{margin-inline-start:4px}.SignatureValidationModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureValidationModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureValidationModal .footer .modal-button{padding:23px 8px}}.SignatureValidationModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureValidationModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureValidationModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureValidationModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureValidationModal .swipe-indicator{width:32px}}.SignatureValidationModal .container{display:flex;flex-direction:column;justify-content:space-around;border-radius:4px;min-width:350px;padding:20px;max-width:630px}.SignatureValidationModal .validation-header{position:relative;display:flex;justify-content:left;align-items:center;padding-bottom:20px;font-size:16px}.SignatureValidationModal .validation-header [data-element=signatureValidationModalCloseButton]{position:absolute;inset-inline-end:0}.SignatureValidationModal .validation-header [data-element=signatureValidationModalCloseButton]:hover{background:none}.SignatureValidationModal .summary-box{position:relative;display:flex;border:1px solid;border-color:var(--gray-4);border-radius:5px;padding:16px;font-weight:700}.SignatureValidationModal .summary-box>:not(:first-child){margin-inline-start:8px}.SignatureValidationModal .validation-header-valid{background-color:#8dd88d}.SignatureValidationModal .validation-header-warning{background-color:#e2b719}.SignatureValidationModal .validation-header-error{background-color:#ff7979}.SignatureValidationModal .validation-header-unknown{background-color:#ddd}.SignatureValidationModal .body{margin-top:16px}.SignatureValidationModal div.body>div.section:first-child{margin-top:0}.SignatureValidationModal div.body>div.section{margin:16px;padding-bottom:16px;border-bottom:1px solid var(--gray-5)}.SignatureValidationModal div.body>div.section:last-child{margin-bottom:0}.SignatureValidationModal div.body>div.section>p{font-size:13px;margin:8px 0}.SignatureValidationModal div.body>div.section>p:last-child{margin:0}.SignatureValidationModal .header{font-weight:700}.SignatureValidationModal .modal-footer{display:flex;justify-content:flex-end;margin-top:32px}.SignatureValidationModal .modal-footer .close-modal-button{background:var(--primary-button);border:1px;border-color:var(--primary-button);border-radius:4px;padding:0 16px;height:32px;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureValidationModal .modal-footer .close-modal-button{height:40px;width:128px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureValidationModal .modal-footer .close-modal-button{height:40px;width:128px}}.SignatureValidationModal .modal-footer .close-modal-button:hover{background:var(--primary-button-hover)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2109: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(21),
        n(20),
        n(12),
        n(22),
        n(18),
        n(16),
        n(8),
        n(17),
        n(19),
        n(11),
        n(13));
      var i = n(0),
        a = n.n(i),
        r = n(6),
        o = n(305),
        s = n(15),
        l = n.n(s),
        c = n(4),
        u = n(5),
        d = n(41),
        g = n(373),
        f = n(1718),
        p = n(2),
        m = n.n(p),
        b = n(51),
        h = (n(2025), { badge: m.a.string, size: m.a.string }),
        v = function (e) {
          var t = e.badge,
            n = e.size,
            i = void 0 === n ? "medium" : n;
          return a.a.createElement(
            "div",
            { className: "signature-icon" },
            t &&
              a.a.createElement(b.a, {
                glyph: t,
                className: "badge ".concat(i),
              }),
          );
        };
      v.propTypes = h;
      var y = v,
        w = n(3),
        S = (n(2027), n(182));
      function x(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                a,
                r,
                o,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = r.call(n)).done) &&
                    (s.push(i.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((c = !0), (a = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return E(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? E(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      var _ = function () {
        var e = x(Object(o.a)(), 1)[0],
          t = x(
            Object(r.e)(function (e) {
              var t = e.digitalSignatureValidation.validationModalWidgetName;
              return [
                c.a.isElementOpen(e, u.a.SIGNATURE_VALIDATION_MODAL),
                c.a.getVerificationResult(e, t),
              ];
            }, r.c),
            2,
          ),
          n = t[0],
          s = t[1],
          p = Object(r.d)(),
          m = Object(S.a)(function () {
            p(w.a.closeElements([u.a.SIGNATURE_VALIDATION_MODAL]));
          });
        Object(i.useEffect)(
          function () {
            n &&
              p(
                w.a.closeElements([
                  u.a.SIGNATURE_MODAL,
                  u.a.LOADING_MODAL,
                  u.a.PRINT_MODAL,
                  u.a.ERROR_MODAL,
                  u.a.PASSWORD_MODAL,
                ]),
              );
          },
          [p, n],
        );
        var b,
          h = s.badgeIcon,
          v = s.verificationStatus,
          E = s.permissionStatus,
          _ = s.isCertification,
          V = s.documentPermission,
          k = s.trustVerificationResultString,
          A = s.timeOfTrustVerificationEnum,
          M = s.trustVerificationTime,
          T = s.digestAlgorithm,
          O = s.digestStatus,
          C = s.documentStatus,
          D = s.trustStatus,
          N = s.signerName,
          j = window.Core.PDFNet,
          P = j.DigestAlgorithm,
          I = j.DigitalSignatureField,
          R = j.VerificationOptions,
          F = j.VerificationResult,
          L = F.ModificationPermissionsStatus,
          H = F.TrustStatus,
          B = F.DigestStatus,
          U = F.DocumentStatus,
          z = R.TimeMode;
        return a.a.createElement(
          "div",
          {
            className: l()({
              Modal: !0,
              SignatureValidationModal: !0,
              open: n,
              closed: !n,
            }),
            "data-element": u.a.SIGNATURE_VALIDATION_MODAL,
          },
          a.a.createElement(
            g.a,
            {
              title:
                ((b = e(
                  _
                    ? "digitalSignatureModal.Certification"
                    : "digitalSignatureModal.Signature",
                )),
                e("digitalSignatureModal.title", { type: b })),
              closeHandler: m,
              onCloseClick: m,
              isOpen: n,
              swipeToClose: !0,
            },
            a.a.createElement(
              "div",
              { className: "container" },
              (function () {
                var t;
                switch (h) {
                  case "digital_signature_valid":
                    t = e("digitalSignatureModal.valid");
                    break;
                  case "digital_signature_warning":
                    t = e("digitalSignatureModal.unknown");
                    break;
                  case "digital_signature_error":
                    t = e("digitalSignatureModal.invalid");
                    break;
                  default:
                    t = e("digitalSignatureModal.unknown");
                }
                var n = e(
                  _
                    ? "digitalSignatureModal.certification"
                    : "digitalSignatureModal.signature",
                );
                return a.a.createElement(
                  "div",
                  null,
                  a.a.createElement(
                    "div",
                    { className: "summary-box" },
                    a.a.createElement(y, { badge: h, size: "medium" }),
                    a.a.createElement(
                      "div",
                      null,
                      e("digitalSignatureModal.summaryBox.summary", {
                        type: n,
                        status: t,
                      }),
                      "digital_signature_valid" === h
                        ? e("digitalSignatureModal.summaryBox.signedBy", {
                            name: N || e("digitalSignatureModal.unknown"),
                            interpolation: { escapeValue: !1 },
                          })
                        : "",
                    ),
                  ),
                );
              })(),
              void 0 === v
                ? a.a.createElement(
                    "div",
                    { className: "center" },
                    a.a.createElement(f.Spinner, null),
                  )
                : a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      "div",
                      { className: "body" },
                      a.a.createElement(
                        "div",
                        { className: "section" },
                        a.a.createElement(
                          "p",
                          { className: "header" },
                          e("digitalSignatureModal.header.documentIntegrity"),
                        ),
                        Object(f.renderPermissionStatus)({
                          isCertification: _,
                          ModificationPermissionsStatus: L,
                          permissionStatus: E,
                          translate: e,
                          digestStatus: O,
                          DigestStatusErrorCodes: B,
                        }),
                        (function () {
                          if (V) {
                            var t = "",
                              n = _ ? "certifier" : "signer";
                            switch (V) {
                              case I.DocumentPermissions.e_no_changes_allowed:
                                t += e(
                                  "digitalSignatureModal.documentPermission.noChangesAllowed",
                                  { editor: n },
                                );
                                break;
                              case I.DocumentPermissions
                                .e_formfilling_signing_allowed:
                                t += e(
                                  "digitalSignatureModal.documentPermission.formfillingSigningAllowed",
                                  { editor: n },
                                );
                                break;
                              case I.DocumentPermissions
                                .e_annotating_formfilling_signing_allowed:
                                t += e(
                                  "digitalSignatureModal.documentPermission.annotatingFormfillingSigningAllowed",
                                  { editor: n },
                                );
                                break;
                              case I.DocumentPermissions.e_unrestricted:
                                t += e(
                                  "digitalSignatureModal.documentPermission.unrestricted",
                                  { editor: n },
                                );
                            }
                            return a.a.createElement("p", null, t);
                          }
                        })(),
                      ),
                      a.a.createElement(
                        "div",
                        { className: "section" },
                        a.a.createElement(
                          "p",
                          { className: "header" },
                          e("digitalSignatureModal.header.identitiesTrust"),
                        ),
                        (function () {
                          var t,
                            n = e(
                              _
                                ? "digitalSignatureVerification.certifier"
                                : "digitalSignatureVerification.signer",
                            );
                          switch (D) {
                            case H.e_trust_verified:
                              t = e(
                                "digitalSignatureVerification.trustStatus.trustVerified",
                                { verificationType: n },
                              );
                              break;
                            case H.e_untrusted:
                              t = e(
                                "digitalSignatureVerification.trustStatus.untrusted",
                              );
                              break;
                            case H.e_trust_verification_disabled:
                              t = e(
                                "digitalSignatureVerification.trustStatus.trustVerificationDisabled",
                              );
                              break;
                            case H.e_no_trust_status:
                              t = e(
                                "digitalSignatureVerification.trustStatus.noTrustStatus",
                              );
                          }
                          return a.a.createElement("p", null, t);
                        })(),
                        (function () {
                          if (!k)
                            return a.a.createElement(
                              "p",
                              null,
                              e("digitalSignatureModal.trustVerification.none"),
                            );
                          var t = "";
                          switch (A) {
                            case z.e_current:
                              t += e(
                                "digitalSignatureModal.trustVerification.current",
                                { trustVerificationTime: M },
                              );
                              break;
                            case z.e_signing:
                              t += e(
                                "digitalSignatureModal.trustVerification.signing",
                                { trustVerificationTime: M },
                              );
                              break;
                            case z.e_timestamp:
                              t += e(
                                "digitalSignatureModal.trustVerification.timestamp",
                                { trustVerificationTime: M },
                              );
                          }
                          return a.a.createElement("p", null, t);
                        })(),
                      ),
                      a.a.createElement(
                        "div",
                        { className: "section" },
                        a.a.createElement(
                          "p",
                          { className: "header" },
                          e("digitalSignatureModal.header.generalErrors"),
                        ),
                        (function () {
                          var t;
                          switch (C) {
                            case U.e_no_error:
                              t = e(
                                "digitalSignatureVerification.documentStatus.noError",
                              );
                              break;
                            case U.e_corrupt_file:
                              t = e(
                                "digitalSignatureVerification.documentStatus.corruptFile",
                              );
                              break;
                            case U.e_unsigned:
                              t = e(
                                "digitalSignatureVerification.documentStatus.unsigned",
                              );
                              break;
                            case U.e_bad_byteranges:
                              t = e(
                                "digitalSignatureVerification.documentStatus.badByteRanges",
                              );
                              break;
                            case U.e_corrupt_cryptographic_contents:
                              t = e(
                                "digitalSignatureVerification.documentStatus.corruptCryptographicContents",
                              );
                          }
                          return a.a.createElement("p", null, t);
                        })(),
                      ),
                      a.a.createElement(
                        "div",
                        { className: "section" },
                        a.a.createElement(
                          "p",
                          { className: "header" },
                          e("digitalSignatureModal.header.digestStatus"),
                        ),
                        (function () {
                          var t;
                          switch (O) {
                            case B.e_digest_invalid:
                              t = e(
                                "digitalSignatureVerification.digestStatus.digestInvalid",
                              );
                              break;
                            case B.e_digest_verified:
                              t = e(
                                "digitalSignatureVerification.digestStatus.digestVerified",
                              );
                              break;
                            case B.e_digest_verification_disabled:
                              t = e(
                                "digitalSignatureVerification.digestStatus.digestVerificationDisabled",
                              );
                              break;
                            case B.e_weak_digest_algorithm_but_digest_verifiable:
                              t = e(
                                "digitalSignatureVerification.digestStatus.weakDigestAlgorithmButDigestVerifiable",
                              );
                              break;
                            case B.e_no_digest_status:
                              t = e(
                                "digitalSignatureVerification.digestStatus.noDigestStatus",
                              );
                              break;
                            case B.e_unsupported_encoding:
                              t = e(
                                "digitalSignatureVerification.digestStatus.unsupportedEncoding",
                              );
                          }
                          return a.a.createElement("p", null, t);
                        })(),
                        (function () {
                          var t = e(
                            "digitalSignatureModal.digestAlgorithm.preamble",
                          );
                          switch (T) {
                            case P.Type.e_SHA1:
                              t += "SHA1.";
                              break;
                            case P.Type.e_SHA256:
                              t += "SHA256.";
                              break;
                            case P.Type.e_SHA384:
                              t += "SHA384.";
                              break;
                            case P.Type.e_SHA512:
                              t += "SHA512.";
                              break;
                            case P.Type.e_RIPEMD160:
                              t += "RIPEMD160.";
                              break;
                            case P.Type.e_unknown_digest_algorithm:
                              t = e(
                                "digitalSignatureModal.digestAlgorithm.unknown",
                              );
                          }
                          return a.a.createElement("p", null, t);
                        })(),
                      ),
                    ),
                    a.a.createElement(
                      "div",
                      { className: "modal-footer" },
                      a.a.createElement(d.a, {
                        className: "close-modal-button",
                        onClick: m,
                        label: e("action.close"),
                      }),
                    ),
                  ),
            ),
          ),
        );
      };
      t.default = _;
    },
  },
]);
//# sourceMappingURL=chunk.42.js.map
