(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    1702: function (e, t, n) {
      var i = n(35),
        r = n(1703);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
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
            const r = t[i];
            if (0 === i)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      i(r, a);
      e.exports = r.locals || {};
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
        r = n(1705);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
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
            const r = t[i];
            if (0 === i)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      i(r, a);
      e.exports = r.locals || {};
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
          return G;
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
        r = n.n(i),
        a = n(6),
        o = n(305),
        s = n(3),
        c = n(1),
        u = n(4);
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
      function l(e) {
        return (l =
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
        throw new TypeError(l(e) + " is not iterable");
      }
      function f(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return g(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? g(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var a,
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
            ((s = !0), (a = e));
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function p() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function a(n, i, r, a) {
          var c = i && i.prototype instanceof s ? i : s,
            u = Object.create(c.prototype);
          return (
            m(
              u,
              "_invoke",
              (function (n, i, r) {
                var a,
                  s,
                  c,
                  u = 0,
                  l = r || [],
                  d = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: g,
                    f: g.bind(e, 4),
                    d: function (t, n) {
                      return ((a = t), (s = 0), (c = e), (f.n = n), o);
                    },
                  };
                function g(n, i) {
                  for (
                    s = n, c = i, t = 0;
                    !d && u && !r && t < l.length;
                    t++
                  ) {
                    var r,
                      a = l[t],
                      g = f.p,
                      p = a[2];
                    n > 3
                      ? (r = p === i) &&
                        ((c = a[(s = a[4]) ? 5 : ((s = 3), 3)]),
                        (a[4] = a[5] = e))
                      : a[0] <= g &&
                        ((r = n < 2 && g < a[1])
                          ? ((s = 0), (f.v = i), (f.n = a[1]))
                          : g < p &&
                            (r = n < 3 || a[0] > i || i > p) &&
                            ((a[4] = n), (a[5] = i), (f.n = p), (s = 0)));
                  }
                  if (r || n > 1) return o;
                  throw ((d = !0), i);
                }
                return function (r, l, p) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === l && g(l, p), s = l, c = p;
                    (t = s < 2 ? e : c) || !d;

                  ) {
                    a ||
                      (s
                        ? s < 3
                          ? (s > 1 && (f.n = -1), g(s, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), a)) {
                        if ((s || (r = "next"), (t = a[r]))) {
                          if (!(t = t.call(a, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), s < 2 && (s = 0));
                        } else
                          (1 === s && (t = a.return) && t.call(a),
                            s < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (s = 1)));
                        a = e;
                      } else if ((t = (d = f.n < 0) ? c : n.call(i, f)) !== o)
                        break;
                    } catch (t) {
                      ((a = e), (s = 1), (c = t));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, r, a),
              !0,
            ),
            u
          );
        }
        var o = {};
        function s() {}
        function c() {}
        function u() {}
        t = Object.getPrototypeOf;
        var l = [][i]
            ? t(t([][i]()))
            : (m((t = {}), i, function () {
                return this;
              }),
              t),
          d = (u.prototype = s.prototype = Object.create(l));
        function f(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), m(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (c.prototype = u),
          m(d, "constructor", u),
          m(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          m(u, r, "GeneratorFunction"),
          m(d),
          m(d, r, "Generator"),
          m(d, i, function () {
            return this;
          }),
          m(d, "toString", function () {
            return "[object Generator]";
          }),
          (p = function () {
            return { w: a, m: f };
          })()
        );
      }
      function m(e, t, n, i) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (m = function (e, t, n, i) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !i,
                  configurable: !i,
                  writable: !i,
                })
              : (e[t] = n);
          else {
            var a = function (t, n) {
              m(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, n, i);
      }
      function v(e, t, n, i, r, a, o) {
        try {
          var s = e[a](o),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r);
      }
      function b(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, r) {
            var a = e.apply(t, n);
            function o(e) {
              v(a, i, r, o, s, "next", e);
            }
            function s(e) {
              v(a, i, r, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      var h = (function () {
          var e = b(
            p().m(function e(t, n, i, r, a, o, c) {
              var u;
              return p().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return ((e.n = 1), y(t, n, i, r, a, o));
                    case 1:
                      return (
                        (u = e.v),
                        c(s.a.setVerificationResult(u)),
                        e.a(2, u)
                      );
                  }
              }, e);
            }),
          );
          return function (t, n, i, r, a, o, s) {
            return e.apply(this, arguments);
          };
        })(),
        y = (function () {
          var e = b(
            p().m(function e(t, n, i, r, a, o) {
              var s, c, u, l, g, m, v;
              return p().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return (
                        (s = window.Core.PDFNet),
                        (c = s.VerificationResult),
                        (u = c.TrustStatus),
                        (l = c.DigestStatus),
                        (g = c.ModificationPermissionsStatus),
                        (m = c.DocumentStatus),
                        (v = {}),
                        (e.n = 1),
                        s.runWithCleanup(
                          b(
                            p().m(function e() {
                              var c,
                                h,
                                y,
                                E,
                                k,
                                _,
                                A,
                                T,
                                V,
                                j,
                                O,
                                P,
                                C,
                                D,
                                N,
                                F,
                                I,
                                L,
                                M,
                                R,
                                U,
                                B,
                                G,
                                z,
                                H,
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
                                re,
                                ae,
                                oe,
                                se,
                                ce,
                                ue,
                                le,
                                de,
                                fe,
                                ge,
                                pe,
                                me,
                                ve,
                                be,
                                he,
                                ye,
                                we,
                                Se,
                                xe,
                                Ee,
                                ke,
                                _e,
                                Ae,
                                Te,
                                Ve,
                                je,
                                Oe,
                                Pe,
                                Ce,
                                De;
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
                                        if (((c = e.v), !a)) {
                                          e.n = 3;
                                          break;
                                        }
                                        return (
                                          (e.n = 3),
                                          c.enableOnlineCRLRevocationChecking(
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
                                          c.setRevocationProxyPrefix(
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
                                          c.setRevocationProxyPrefix(o)
                                        );
                                      case 6:
                                        ((h = f(n)),
                                          (e.p = 7),
                                          (E = p().m(function e() {
                                            var t, n, i, r, a, o, s;
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
                                                        c.addTrustedCertificateFromURL(
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
                                                                var t = b(
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
                                                        (r = c),
                                                        (e.n = 7),
                                                        i
                                                      );
                                                    case 7:
                                                      return (
                                                        (a = e.v),
                                                        (e.n = 8),
                                                        r.addTrustedCertificate.call(
                                                          r,
                                                          a,
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
                                                        c.addTrustedCertificate(
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
                                          h.s());
                                      case 8:
                                        if ((y = h.n()).done) {
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
                                        ((e.p = 12), (xe = e.v), h.e(xe));
                                      case 13:
                                        return ((e.p = 13), h.f(), e.f(13));
                                      case 14:
                                        ((k = f(i)), (e.p = 15), k.s());
                                      case 16:
                                        if ((_ = k.n()).done) {
                                          e.n = 25;
                                          break;
                                        }
                                        if (
                                          ((A = _.value),
                                          (T = A.constructor.name),
                                          (V = [
                                            "ArrayBuffer",
                                            "Int8Array",
                                            "Uint8Array",
                                            "Uint8ClampedArray",
                                          ]),
                                          (j = void 0),
                                          "Blob" !== T)
                                        ) {
                                          e.n = 18;
                                          break;
                                        }
                                        return ((e.n = 17), A.arrayBuffer());
                                      case 17:
                                        ((j = e.v), (e.n = 20));
                                        break;
                                      case 18:
                                        if (!V.includes(T)) {
                                          e.n = 19;
                                          break;
                                        }
                                        ((j = A), (e.n = 20));
                                        break;
                                      case 19:
                                        return (
                                          console.error(
                                            "The provided TrustList is an unsupported data-structure. Please ensure the TrustList is formatted as one of the following " +
                                              "data-structures: ".concat(
                                                []
                                                  .concat(V, ["Blob"])
                                                  .join("|"),
                                              ),
                                          ),
                                          e.a(3, 24)
                                        );
                                      case 20:
                                        return (
                                          (e.p = 20),
                                          (e.n = 21),
                                          s.FDFDoc.createFromMemoryBuffer(j)
                                        );
                                      case 21:
                                        return (
                                          (O = e.v),
                                          (e.n = 22),
                                          c.loadTrustList(O)
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
                                        ((e.p = 26), (ke = e.v), k.e(ke));
                                      case 27:
                                        return ((e.p = 27), k.f(), e.f(27));
                                      case 28:
                                        return (
                                          (e.n = 29),
                                          t.getFieldIteratorBegin()
                                        );
                                      case 29:
                                        P = e.v;
                                      case 30:
                                        return ((e.n = 31), P.hasNext());
                                      case 31:
                                        if (!e.v) {
                                          e.n = 91;
                                          break;
                                        }
                                        return ((e.n = 32), P.current());
                                      case 32:
                                        return (
                                          (C = e.v),
                                          (e.n = 33),
                                          C.isValid()
                                        );
                                      case 33:
                                        if ((_e = !e.v)) {
                                          e.n = 35;
                                          break;
                                        }
                                        return ((e.n = 34), C.getType());
                                      case 34:
                                        ((Ae = e.v),
                                          (Te = s.Field.Type.e_signature),
                                          (_e = Ae !== Te));
                                      case 35:
                                        if (!_e) {
                                          e.n = 36;
                                          break;
                                        }
                                        return e.a(3, 90);
                                      case 36:
                                        return (
                                          (e.n = 37),
                                          s.DigitalSignatureField.createFromField(
                                            C,
                                          )
                                        );
                                      case 37:
                                        return (
                                          (D = e.v),
                                          (e.p = 38),
                                          (e.n = 39),
                                          D.verify(c)
                                        );
                                      case 39:
                                        return (
                                          (N = e.v),
                                          (e.n = 40),
                                          D.getSDFObj()
                                        );
                                      case 40:
                                        return ((e.n = 41), e.v.getObjNum());
                                      case 41:
                                        return (
                                          (F = e.v),
                                          (I = void 0),
                                          (L = void 0),
                                          (M = void 0),
                                          (R = void 0),
                                          (U = void 0),
                                          (B = void 0),
                                          (G = void 0),
                                          (z = void 0),
                                          (H = void 0),
                                          (W = {}),
                                          (q = {}),
                                          (e.n = 42),
                                          D.hasCryptographicSignature()
                                        );
                                      case 42:
                                        if (!($ = e.v)) {
                                          e.n = 63;
                                          break;
                                        }
                                        return ((e.n = 43), D.getSubFilter());
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
                                          D.getSignerCertFromCMS()
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
                                        if ((Ve = e.v)) {
                                          e.n = 47;
                                          break;
                                        }
                                        Ve = {};
                                      case 47:
                                        I = Ve.e_commonName;
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
                                          D.getSignatureName()
                                        );
                                      case 49:
                                        if ((je = e.v)) {
                                          e.n = 51;
                                          break;
                                        }
                                        return ((e.n = 50), D.getContactInfo());
                                      case 50:
                                        je = e.v;
                                      case 51:
                                        I = je;
                                      case 52:
                                        return ((e.n = 53), D.getSigningTime());
                                      case 53:
                                        return (
                                          (L = e.v),
                                          (e.n = 54),
                                          L.isValid()
                                        );
                                      case 54:
                                        if (!e.v) {
                                          e.n = 55;
                                          break;
                                        }
                                        ((L = w(L, r)), (e.n = 56));
                                        break;
                                      case 55:
                                        L = null;
                                      case 56:
                                        return ((e.n = 57), D.getContactInfo());
                                      case 57:
                                        return (
                                          (U = e.v),
                                          (e.n = 58),
                                          D.getLocation()
                                        );
                                      case 58:
                                        return (
                                          (B = e.v),
                                          (e.n = 59),
                                          D.getReason()
                                        );
                                      case 59:
                                        G = e.v;
                                      case 60:
                                        return (
                                          (e.n = 61),
                                          D.getDocumentPermissions()
                                        );
                                      case 61:
                                        return (
                                          (M = e.v),
                                          (e.n = 62),
                                          D.isCertification()
                                        );
                                      case 62:
                                        R = e.v;
                                      case 63:
                                        return (
                                          (e.n = 64),
                                          N.getVerificationStatus()
                                        );
                                      case 64:
                                        return (
                                          (Q = e.v),
                                          (e.n = 65),
                                          N.getDocumentStatus()
                                        );
                                      case 65:
                                        return (
                                          (X = e.v),
                                          (e.n = 66),
                                          N.getDigestStatus()
                                        );
                                      case 66:
                                        return (
                                          (Y = e.v),
                                          (e.n = 67),
                                          N.getTrustStatus()
                                        );
                                      case 67:
                                        return (
                                          (ee = e.v),
                                          (e.n = 68),
                                          N.getPermissionsStatus()
                                        );
                                      case 68:
                                        return (
                                          (te = e.v),
                                          (e.n = 69),
                                          N.getDigestAlgorithm()
                                        );
                                      case 69:
                                        return (
                                          (ne = e.v),
                                          (Oe = Promise),
                                          (e.n = 70),
                                          N.getDisallowedChanges()
                                        );
                                      case 70:
                                        return (
                                          (Pe = e.v.map(
                                            (function () {
                                              var e = b(
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
                                          Oe.all.call(Oe, Pe)
                                        );
                                      case 71:
                                        return (
                                          (ie = e.v),
                                          (re = ee === u.e_trust_verified),
                                          (ae = void 0),
                                          (oe = void 0),
                                          (se = void 0),
                                          (ce = void 0),
                                          (e.n = 72),
                                          N.hasTrustVerificationResult()
                                        );
                                      case 72:
                                        if (!e.v) {
                                          e.n = 87;
                                          break;
                                        }
                                        return (
                                          (e.n = 73),
                                          N.getTrustVerificationResult()
                                        );
                                      case 73:
                                        return (
                                          (ue = e.v),
                                          (e.n = 74),
                                          ue.wasSuccessful()
                                        );
                                      case 74:
                                        return (
                                          (oe = e.v),
                                          (e.n = 75),
                                          ue.getResultString()
                                        );
                                      case 75:
                                        return (
                                          (ae = e.v),
                                          (e.n = 76),
                                          ue.getTimeOfTrustVerificationEnum()
                                        );
                                      case 76:
                                        return (
                                          (se = e.v),
                                          (e.n = 77),
                                          ue.getTimeOfTrustVerification()
                                        );
                                      case 77:
                                        return (
                                          (le = e.v) && (ce = S(le, r)),
                                          (e.n = 78),
                                          ue.getCertPath()
                                        );
                                      case 78:
                                        if (!(de = e.v).length) {
                                          e.n = 87;
                                          break;
                                        }
                                        return (
                                          (fe = de[0]),
                                          (e.n = 79),
                                          fe.getIssuerField()
                                        );
                                      case 79:
                                        return ((ge = e.v), (e.n = 80), x(ge));
                                      case 80:
                                        return (
                                          (pe = e.v),
                                          Object.assign(W, pe),
                                          (e.n = 81),
                                          fe.getSubjectField()
                                        );
                                      case 81:
                                        return ((me = e.v), (e.n = 82), x(me));
                                      case 82:
                                        return (
                                          (ve = e.v),
                                          Object.assign(q, ve),
                                          (be = de[de.length - 1]),
                                          (e.p = 83),
                                          (e.n = 84),
                                          be.getNotBeforeEpochTime()
                                        );
                                      case 84:
                                        return (
                                          (he = e.v),
                                          (e.n = 85),
                                          be.getNotAfterEpochTime()
                                        );
                                      case 85:
                                        ((ye = e.v),
                                          (z = ye >= le && le >= he),
                                          (e.n = 87));
                                        break;
                                      case 86:
                                        ((e.p = 86),
                                          (Ce = e.v).includes(
                                            "calendar_point::to_std_timepoint() does not support years after",
                                          ) &&
                                            (console.warn(
                                              "The following error is a known issue with Botan, and aims to be addressed in a future release of PDFNet. This currently does not impact PDFTron's Digital Signature Verification capabilities.",
                                            ),
                                            console.warn(Ce)));
                                      case 87:
                                        return (
                                          (we = void 0),
                                          (we = Q
                                            ? "digital_signature_valid"
                                            : X !== m.e_no_error ||
                                                (Y !== l.e_digest_verified &&
                                                  Y !==
                                                    l.e_digest_verification_disabled) ||
                                                ee === u.e_no_trust_status ||
                                                (te !== g.e_unmodified &&
                                                  te !==
                                                    g.e_has_allowed_changes &&
                                                  te !==
                                                    g.e_permissions_verification_disabled)
                                              ? "digital_signature_error"
                                              : "digital_signature_warning"),
                                          I
                                            ? (H = I)
                                            : !I &&
                                              q.e_commonName &&
                                              (H = q.e_commonName),
                                          (e.n = 88),
                                          C.getName()
                                        );
                                      case 88:
                                        ((Se = e.v),
                                          (v[Se] = {
                                            signed: $,
                                            signer: I,
                                            signerName: H,
                                            signTime: L,
                                            verificationStatus: Q,
                                            documentStatus: X,
                                            digestStatus: Y,
                                            trustStatus: ee,
                                            permissionStatus: te,
                                            disallowedChanges: ie,
                                            trustVerificationResultBoolean: oe,
                                            trustVerificationResultString: ae,
                                            timeOfTrustVerificationEnum: se,
                                            trustVerificationTime: ce,
                                            id: F,
                                            badgeIcon: we,
                                            validSignerIdentity: re,
                                            digestAlgorithm: ne,
                                            documentPermission: M,
                                            isCertification: R,
                                            contactInfo: U,
                                            location: B,
                                            reason: G,
                                            issuerField: W,
                                            subjectField: q,
                                            validAtTimeOfSigning: z,
                                          }),
                                          (e.n = 90));
                                        break;
                                      case 89:
                                        ((e.p = 89),
                                          (De = e.v),
                                          console.error(De));
                                      case 90:
                                        (P.next(), (e.n = 30));
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
                      return e.a(2, v);
                  }
              }, e);
            }),
          );
          return function (t, n, i, r, a, o) {
            return e.apply(this, arguments);
          };
        })(),
        w = function (e, t) {
          var n = e.year,
            i = e.month,
            r = e.day,
            a = e.hour,
            o = e.minute,
            s = e.second;
          return new Date(Date.UTC(n, i - 1, r, a, o, s)).toLocaleDateString(
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
          var e = b(
            p().m(function e(t) {
              var n, i, r, a, o, s, c, u, l;
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
                        ((i = e.v), (r = f(i)), (e.p = 2), r.s());
                      case 3:
                        if ((a = r.n()).done) {
                          e.n = 8;
                          break;
                        }
                        return (
                          (o = a.value),
                          (e.n = 4),
                          o.getAttributeTypeOID()
                        );
                      case 4:
                        return ((s = e.v), (e.n = 5), s.getRawValue());
                      case 5:
                        return ((c = e.v), (e.n = 6), o.getStringValue());
                      case 6:
                        ((u = e.v), (n[E(c)] = u));
                      case 7:
                        e.n = 3;
                        break;
                      case 8:
                        e.n = 10;
                        break;
                      case 9:
                        ((e.p = 9), (l = e.v), r.e(l));
                      case 10:
                        return ((e.p = 10), r.f(), e.f(10));
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
        k = n(471),
        _ = (n(30), n(31), n(28), n(2)),
        A = n.n(_),
        T = n(15),
        V = n.n(T),
        j = (n(94), n(119)),
        O = n.n(j),
        P = n(23);
      function C(e, t) {
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
                r,
                a,
                o,
                s = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (i = a.call(n)).done) &&
                    (s.push(i.value), s.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return D(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? D(e, t)
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
      function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      var N = function (e) {
          var t = e.rect,
            n = C(Object(i.useState)(!1), 2),
            a = n[0],
            o = n[1];
          return (
            Object(i.useEffect)(function () {
              var e = c.a.getScrollViewElement(),
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
            a &&
              O.a.createPortal(
                r.a.createElement("div", {
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
                Object(P.a)().querySelector("#app"),
              )
          );
        },
        F = n(90),
        I = n(1597),
        L = n(41);
      n(1702);
      function M(e) {
        return (M =
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
      function R(e, t) {
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
                r,
                a,
                o,
                s = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (i = a.call(n)).done) &&
                    (s.push(i.value), s.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return U(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? U(e, t)
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
      function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function B(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != M(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, t || "default");
                if ("object" != M(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == M(t) ? t : t + "";
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
      var G = function (e) {
          var t = e.isCertification,
            n = e.ModificationPermissionsStatus,
            i = e.permissionStatus,
            a = e.translate;
          if (e.digestStatus === e.DigestStatusErrorCodes.e_digest_invalid)
            return r.a.createElement(
              "p",
              null,
              a(
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
                          a(
                            "digitalSignatureVerification.permissionStatus.unmodified",
                          ),
                          " ",
                        )
                        .concat(
                          a("digitalSignatureVerification.certified"),
                          ".",
                        )
                    : ""
                        .concat(
                          a(
                            "digitalSignatureVerification.permissionStatus.unmodified",
                          ),
                          " ",
                        )
                        .concat(a("digitalSignatureVerification.signed"), "."),
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
          return r.a.createElement("p", null, a(o[i] || ""));
        },
        z = {
          name: A.a.string.isRequired,
          onClick: A.a.func,
          field: A.a.instanceOf(window.Core.Annotations.Forms.Field),
        },
        H = function (e) {
          var t,
            n,
            l = e.name,
            d = e.field,
            f = Object(a.e)(function (e) {
              return u.a.getVerificationResult(e, l);
            }),
            g = R(Object(i.useState)(null), 2),
            p = g[0],
            m = g[1],
            v = R(Object(i.useState)(!1), 2),
            b = v[0],
            h = v[1],
            y = window.Core.PDFNet,
            w = y.VerificationResult,
            S = y.VerificationOptions.TimeMode,
            x = w.ModificationPermissionsStatus,
            E = w.DigestStatus,
            k = R(Object(o.a)(), 1)[0],
            _ = f.signed,
            A = f.signTime,
            T = f.verificationStatus,
            j = f.permissionStatus,
            O = f.disallowedChanges,
            P = f.trustVerificationResultBoolean,
            C = f.timeOfTrustVerificationEnum,
            D = f.trustVerificationTime,
            M = f.badgeIcon,
            U = f.isCertification,
            B = f.contactInfo,
            z = f.location,
            H = f.reason,
            W = f.signerName,
            q = f.digestStatus,
            $ = Object(a.d)(),
            J = function () {
              !(function (e) {
                if (e.widgets.length) {
                  var t = e.widgets[0];
                  c.a.jumpToAnnotation(t);
                  var n = c.a.getScrollViewElement(),
                    i = n.scrollLeft,
                    r = n.scrollTop,
                    a = t.getRect(),
                    o = c.a
                      .getDisplayModeObject()
                      .pageToWindow({ x: a.x1, y: a.y1 }, t.PageNumber),
                    s = c.a
                      .getDisplayModeObject()
                      .pageToWindow({ x: a.x2, y: a.y2 }, t.PageNumber);
                  m({ x1: o.x - i, y1: o.y - r, x2: s.x - i, y2: s.y - r });
                }
              })(d);
            },
            K = Object(F.a)(function () {
              ($(s.a.setSignatureValidationModalWidgetName(l)),
                $(s.a.openElement("signatureValidationModal")));
            });
          return r.a.createElement(
            "div",
            { className: "signature-widget-info" },
            _
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    I.a,
                    {
                      labelHeader:
                        ((n = k(
                          U
                            ? "digitalSignatureVerification.Certified"
                            : "digitalSignatureVerification.Signed",
                        )),
                        (n += " "
                          .concat(k("digitalSignatureVerification.by"), " ")
                          .concat(W || k("digitalSignatureModal.unknown"))),
                        A &&
                          (n += " "
                            .concat(k("digitalSignatureVerification.on"), " ")
                            .concat(A)),
                        n),
                      iconGlyph: M,
                      useI18String: !1,
                      onClick: J,
                      onKeyDown: J,
                    },
                    r.a.createElement(
                      "div",
                      { className: "verificationDetails", tabIndex: -1 },
                      r.a.createElement(
                        "div",
                        { className: "header" },
                        ((t = k(
                          U
                            ? "digitalSignatureVerification.Certification"
                            : "digitalSignatureVerification.Signature",
                        )),
                        r.a.createElement(
                          "div",
                          { className: "title" },
                          r.a.createElement(
                            "p",
                            null,
                            k(
                              T
                                ? "digitalSignatureVerification.verificationStatus.valid"
                                : "digitalSignatureVerification.verificationStatus.failed",
                              { verificationType: t },
                            ),
                          ),
                        )),
                        r.a.createElement(
                          "ul",
                          { className: "body" },
                          r.a.createElement(
                            "li",
                            null,
                            G({
                              isCertification: U,
                              ModificationPermissionsStatus: x,
                              permissionStatus: j,
                              translate: k,
                              digestStatus: q,
                              DigestStatusErrorCodes: E,
                            }),
                          ),
                          O.map(function (e) {
                            var t = e.objnum,
                              n = e.type;
                            return r.a.createElement(
                              "li",
                              { key: t },
                              r.a.createElement(
                                "p",
                                null,
                                k(
                                  "digitalSignatureVerification.disallowedChange",
                                  { type: n, objnum: t },
                                ),
                              ),
                            );
                          }),
                          (function () {
                            var e;
                            switch (C) {
                              case S.e_current:
                                e = k(
                                  "digitalSignatureVerification.trustVerification.current",
                                );
                                break;
                              case S.e_signing:
                                e = k(
                                  "digitalSignatureVerification.trustVerification.signing",
                                );
                                break;
                              case S.e_timestamp:
                                e = k(
                                  "digitalSignatureVerification.trustVerification.timestamp",
                                );
                                break;
                              default:
                                console.warn(
                                  "Unexpected pdftron::PDF::VerificationOptions::TimeMode: ".concat(
                                    C,
                                  ),
                                );
                            }
                            return r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "li",
                                null,
                                r.a.createElement(
                                  "p",
                                  null,
                                  k(
                                    P
                                      ? "digitalSignatureVerification.trustVerification.verifiedTrust"
                                      : "digitalSignatureVerification.trustVerification.noTrustVerification",
                                  ),
                                ),
                              ),
                              r.a.createElement(
                                "li",
                                null,
                                r.a.createElement("p", null, D),
                              ),
                              r.a.createElement(
                                "li",
                                null,
                                r.a.createElement("p", null, e),
                              ),
                            );
                          })(),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "button",
                              {
                                "data-element": "signatureProperties-".concat(
                                  l,
                                ),
                                onClick: K,
                                tabIndex: 0,
                                className: "signatureProperties link",
                                "aria-label": "Open signature properties modal",
                              },
                              r.a.createElement(
                                "p",
                                { className: "bold underline" },
                                k(
                                  "digitalSignatureVerification.signatureProperties",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    r.a.createElement(
                      "div",
                      { className: "header header-with-arrow" },
                      B || z || H
                        ? r.a.createElement(
                            "div",
                            { className: "signatureDetails", tabIndex: -1 },
                            r.a.createElement(
                              "div",
                              { className: "title collapsible" },
                              r.a.createElement(L.a, {
                                img: "icon-chevron-right",
                                className: V()({ arrow: !0, expanded: b }),
                                ariaExpanded: b,
                                isActive: b,
                                ariaLabel: k(
                                  "digitalSignatureVerification.signatureDetails.signatureDetails",
                                ),
                                onClick: function () {
                                  return h(!b);
                                },
                              }),
                              r.a.createElement(
                                "p",
                                null,
                                k(
                                  "digitalSignatureVerification.signatureDetails.signatureDetails",
                                ),
                              ),
                            ),
                            b &&
                              r.a.createElement(
                                "ul",
                                { className: "body" },
                                r.a.createElement(
                                  "li",
                                  null,
                                  r.a.createElement(
                                    "p",
                                    { className: "bold" },
                                    "".concat(
                                      k(
                                        "digitalSignatureVerification.signatureDetails.contactInformation",
                                      ),
                                      ":",
                                    ),
                                  ),
                                  r.a.createElement(
                                    "p",
                                    { className: "result-for-header" },
                                    B ||
                                      k(
                                        "digitalSignatureVerification.signatureDetails.noContactInformation",
                                      ),
                                  ),
                                ),
                                r.a.createElement(
                                  "li",
                                  null,
                                  r.a.createElement(
                                    "p",
                                    { className: "bold" },
                                    "".concat(
                                      k(
                                        "digitalSignatureVerification.signatureDetails.location",
                                      ),
                                      ":",
                                    ),
                                  ),
                                  r.a.createElement(
                                    "p",
                                    { className: "result-for-header" },
                                    z ||
                                      k(
                                        "digitalSignatureVerification.signatureDetails.noLocation",
                                      ),
                                  ),
                                ),
                                r.a.createElement(
                                  "li",
                                  null,
                                  r.a.createElement(
                                    "p",
                                    { className: "bold" },
                                    "".concat(
                                      k(
                                        "digitalSignatureVerification.signatureDetails.reason",
                                      ),
                                      ":",
                                    ),
                                  ),
                                  r.a.createElement(
                                    "p",
                                    { className: "result-for-header" },
                                    H ||
                                      k(
                                        "digitalSignatureVerification.signatureDetails.noReason",
                                      ),
                                  ),
                                ),
                                A &&
                                  r.a.createElement(
                                    "li",
                                    null,
                                    r.a.createElement(
                                      "p",
                                      { className: "bold" },
                                      "".concat(
                                        k(
                                          "digitalSignatureVerification.signatureDetails.signingTime",
                                        ),
                                        ":",
                                      ),
                                    ),
                                    r.a.createElement(
                                      "p",
                                      { className: "result-for-header" },
                                      A ||
                                        k(
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
              : r.a.createElement(I.a, {
                  labelHeader: k(
                    "digitalSignatureVerification.unsignedSignatureField",
                    { fieldName: d.name },
                  ),
                  iconGlyph: "digital_signature_empty",
                  useI18String: !1,
                  onClick: J,
                  onKeyDown: J,
                }),
            r.a.createElement(N, { rect: p }),
          );
        };
      H.propTypes = z;
      var W = H,
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
          r = n.toStringTag || "@@toStringTag";
        function a(n, i, r, a) {
          var c = i && i.prototype instanceof s ? i : s,
            u = Object.create(c.prototype);
          return (
            Z(
              u,
              "_invoke",
              (function (n, i, r) {
                var a,
                  s,
                  c,
                  u = 0,
                  l = r || [],
                  d = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: g,
                    f: g.bind(e, 4),
                    d: function (t, n) {
                      return ((a = t), (s = 0), (c = e), (f.n = n), o);
                    },
                  };
                function g(n, i) {
                  for (
                    s = n, c = i, t = 0;
                    !d && u && !r && t < l.length;
                    t++
                  ) {
                    var r,
                      a = l[t],
                      g = f.p,
                      p = a[2];
                    n > 3
                      ? (r = p === i) &&
                        ((c = a[(s = a[4]) ? 5 : ((s = 3), 3)]),
                        (a[4] = a[5] = e))
                      : a[0] <= g &&
                        ((r = n < 2 && g < a[1])
                          ? ((s = 0), (f.v = i), (f.n = a[1]))
                          : g < p &&
                            (r = n < 3 || a[0] > i || i > p) &&
                            ((a[4] = n), (a[5] = i), (f.n = p), (s = 0)));
                  }
                  if (r || n > 1) return o;
                  throw ((d = !0), i);
                }
                return function (r, l, p) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === l && g(l, p), s = l, c = p;
                    (t = s < 2 ? e : c) || !d;

                  ) {
                    a ||
                      (s
                        ? s < 3
                          ? (s > 1 && (f.n = -1), g(s, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), a)) {
                        if ((s || (r = "next"), (t = a[r]))) {
                          if (!(t = t.call(a, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), s < 2 && (s = 0));
                        } else
                          (1 === s && (t = a.return) && t.call(a),
                            s < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (s = 1)));
                        a = e;
                      } else if ((t = (d = f.n < 0) ? c : n.call(i, f)) !== o)
                        break;
                    } catch (t) {
                      ((a = e), (s = 1), (c = t));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, r, a),
              !0,
            ),
            u
          );
        }
        var o = {};
        function s() {}
        function c() {}
        function u() {}
        t = Object.getPrototypeOf;
        var l = [][i]
            ? t(t([][i]()))
            : (Z((t = {}), i, function () {
                return this;
              }),
              t),
          d = (u.prototype = s.prototype = Object.create(l));
        function f(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), Z(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (c.prototype = u),
          Z(d, "constructor", u),
          Z(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          Z(u, r, "GeneratorFunction"),
          Z(d),
          Z(d, r, "Generator"),
          Z(d, i, function () {
            return this;
          }),
          Z(d, "toString", function () {
            return "[object Generator]";
          }),
          (K = function () {
            return { w: a, m: f };
          })()
        );
      }
      function Z(e, t, n, i) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (Z = function (e, t, n, i) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !i,
                  configurable: !i,
                  writable: !i,
                })
              : (e[t] = n);
          else {
            var a = function (t, n) {
              Z(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, n, i);
      }
      function Q(e, t, n, i, r, a, o) {
        try {
          var s = e[a](o),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r);
      }
      function X(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, r) {
            var a = e.apply(t, n);
            function o(e) {
              Q(a, i, r, o, s, "next", e);
            }
            function s(e) {
              Q(a, i, r, o, s, "throw", e);
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
                r,
                a,
                o,
                s = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (i = a.call(n)).done) &&
                    (s.push(i.value), s.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw r;
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
        var e = Object(a.d)(),
          t = Y(Object(i.useState)([]), 2),
          n = t[0],
          l = t[1],
          d = Y(Object(i.useState)(!1), 2),
          f = d[0],
          g = d[1],
          p = Y(Object(i.useState)(""), 2),
          m = p[0],
          v = p[1],
          b = Y(Object(i.useState)(c.a.getDocument()), 2),
          y = b[0],
          w = b[1],
          S = Y(
            Object(a.e)(function (e) {
              return [
                u.a.isElementDisabled(e, "signaturePanel"),
                u.a.getCertificates(e),
                u.a.getTrustLists(e),
                u.a.getCurrentLanguage(e),
                u.a.getIsRevocationCheckingEnabled(e),
                u.a.getRevocationProxyPrefix(e),
              ];
            }),
            6,
          ),
          x = S[0],
          E = S[1],
          _ = S[2],
          A = S[3],
          T = S[4],
          V = S[5],
          j = Y(Object(o.a)(), 1)[0],
          O = (function () {
            var e = X(
              K().m(function e() {
                return K().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        w(c.a.getDocument());
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
          P = Object(i.useCallback)(
            function () {
              (g(!0), e(s.a.setVerificationResult({})));
            },
            [g, e],
          ),
          C = function (e, t) {
            var n = c.a
              .getAnnotationManager()
              .getFormFieldCreationManager()
              .isInFormFieldCreationMode();
            "add" === t
              ? N(c.a.getAnnotationManager().getAnnotationsList())
              : "delete" === t && n && F(e);
          },
          D = function () {
            var e = c.a.getAnnotationManager().getAnnotationsList();
            N(e);
          },
          N = function (e) {
            var t = [];
            e.forEach(function (e) {
              e instanceof window.Core.Annotations.SignatureWidgetAnnotation &&
                t.push(e.getField());
            });
            var n = new Set(t);
            l(J(n));
          },
          F = function (e) {
            (e.forEach(function (e) {
              I(e);
            }),
              D());
          },
          I = function (e) {
            if (e instanceof window.Core.Annotations.WidgetAnnotation) {
              var t = c.a.getAnnotationManager(),
                n = t.getAnnotationsList().filter(function (t) {
                  return t.getCustomData("trn-editing-rectangle-id") === e.Id;
                });
              t.deleteAnnotations(n);
            }
          },
          L = function () {
            (l([]), D());
          };
        if (
          (Object(i.useEffect)(
            function () {
              return (
                c.a.addEventListener("documentLoaded", O),
                c.a.addEventListener("documentUnloaded", P),
                c.a.addEventListener("annotationChanged", C),
                c.a.addEventListener("formFieldCreationModeStarted", L),
                c.a.addEventListener("formFieldCreationModeEnded", L),
                function () {
                  (c.a.removeEventListener("documentLoaded", O),
                    c.a.removeEventListener("documentUnloaded", P),
                    c.a.removeEventListener("annotationChanged", C),
                    c.a.removeEventListener("formFieldCreationModeStarted", L),
                    c.a.removeEventListener("formFieldCreationModeEnded", L));
                }
              );
            },
            [P],
          ),
          Object(i.useEffect)(
            function () {
              y
                ? c.a.getAnnotationsLoadedPromise().then(function () {
                    (g(!0),
                      h(y, E, _, A, T, V, e)
                        .then(
                          (function () {
                            var e = X(
                              K().m(function e(t) {
                                var n;
                                return K().w(function (e) {
                                  for (;;)
                                    switch (e.n) {
                                      case 0:
                                        ((n = c.a
                                          .getAnnotationManager()
                                          .getFieldManager()),
                                          l(
                                            Object.keys(t).map(function (e) {
                                              return n.getField(e);
                                            }),
                                          ),
                                          v(""));
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
                          e && e.message ? v(e.message) : console.error(e);
                        })
                        .then(function () {
                          D();
                        })
                        .finally(function () {
                          g(!1);
                        }));
                  })
                : g(!0);
            },
            [E, y, e, A],
          ),
          x)
        )
          return null;
        return r.a.createElement(
          "div",
          {
            className: "Panel SignaturePanel",
            "data-element": "signaturePanel",
          },
          (function () {
            var e;
            if (f)
              e = r.a.createElement(k.a, {
                inPanel: !0,
                width: "40px",
                height: "40px",
              });
            else if ("Error reading the local certificate" === m)
              e = j(
                "digitalSignatureVerification.panelMessages.localCertificateError",
              );
            else if ("Download Failed" === m)
              e = j(
                "digitalSignatureVerification.panelMessages.certificateDownloadError",
              );
            else {
              if (n.length) return null;
              e = j(
                "digitalSignatureVerification.panelMessages.noSignatureFields",
              );
            }
            return r.a.createElement(
              "div",
              { className: "empty-panel-container" },
              r.a.createElement(q.a, {
                className: "empty-icon",
                glyph: $.c[$.e.SIGNATURE].icon,
              }),
              r.a.createElement("div", { className: "empty-message" }, e),
            );
          })(),
          !f &&
            n.length > 0 &&
            n.map(function (e, t) {
              return r.a.createElement(W, {
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
  },
]);
//# sourceMappingURL=chunk.55.js.map
