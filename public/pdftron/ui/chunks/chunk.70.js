(window.webpackJsonp = window.webpackJsonp || []).push([
  [70],
  {
    1912: function (e, t, n) {
      var o = n(35),
        r = n(1913);
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
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
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
      o(r, a);
      e.exports = r.locals || {};
    },
    1913: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FlyoutMenu[data-element=menuOverlay] .ActionButton{justify-content:flex-start}.FlyoutMenu[data-element=menuOverlay] .ActionButton .Icon{margin:4px}.FlyoutMenu[data-element=menuOverlay] .ActionButton span{margin:0 4px}.FlyoutMenu[data-element=menuOverlay] .ActionButton.row.disabled:hover{background:none;cursor:default}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2125: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
        n(34),
        n(81),
        n(27),
        n(21),
        n(20),
        n(12),
        n(85),
        n(44),
        n(22),
        n(31),
        n(18),
        n(26),
        n(16),
        n(28),
        n(40),
        n(48),
        n(24),
        n(47),
        n(49),
        n(42),
        n(37),
        n(43),
        n(8),
        n(56),
        n(17),
        n(19),
        n(11),
        n(29),
        n(13));
      var o = n(3),
        r = n(82),
        a = n(184),
        i = n(57),
        l = n(1),
        c = n(186),
        u = n(294),
        s = n(219),
        p = n(166),
        d = n(0),
        m = n.n(d),
        f = n(305),
        b = n(6),
        y = n(4),
        h = n(408),
        O = n(5),
        v = n(109),
        E = n(65);
      n(1912);
      function w(e) {
        return (w =
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
      function g() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function a(n, o, r, a) {
          var c = o && o.prototype instanceof l ? o : l,
            u = Object.create(c.prototype);
          return (
            T(
              u,
              "_invoke",
              (function (n, o, r) {
                var a,
                  l,
                  c,
                  u = 0,
                  s = r || [],
                  p = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: m,
                    f: m.bind(e, 4),
                    d: function (t, n) {
                      return ((a = t), (l = 0), (c = e), (d.n = n), i);
                    },
                  };
                function m(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !p && u && !r && t < s.length;
                    t++
                  ) {
                    var r,
                      a = s[t],
                      m = d.p,
                      f = a[2];
                    n > 3
                      ? (r = f === o) &&
                        ((c = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                        (a[4] = a[5] = e))
                      : a[0] <= m &&
                        ((r = n < 2 && m < a[1])
                          ? ((l = 0), (d.v = o), (d.n = a[1]))
                          : m < f &&
                            (r = n < 3 || a[0] > o || o > f) &&
                            ((a[4] = n), (a[5] = o), (d.n = f), (l = 0)));
                  }
                  if (r || n > 1) return i;
                  throw ((p = !0), o);
                }
                return function (r, s, f) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === s && m(s, f), l = s, c = f;
                    (t = l < 2 ? e : c) || !p;

                  ) {
                    a ||
                      (l
                        ? l < 3
                          ? (l > 1 && (d.n = -1), m(l, c))
                          : (d.n = c)
                        : (d.v = c));
                    try {
                      if (((u = 2), a)) {
                        if ((l || (r = "next"), (t = a[r]))) {
                          if (!(t = t.call(a, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = a.return) && t.call(a),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        a = e;
                      } else if ((t = (p = d.n < 0) ? c : n.call(o, d)) !== i)
                        break;
                    } catch (t) {
                      ((a = e), (l = 1), (c = t));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: p };
                };
              })(n, r, a),
              !0,
            ),
            u
          );
        }
        var i = {};
        function l() {}
        function c() {}
        function u() {}
        t = Object.getPrototypeOf;
        var s = [][o]
            ? t(t([][o]()))
            : (T((t = {}), o, function () {
                return this;
              }),
              t),
          p = (u.prototype = l.prototype = Object.create(s));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), T(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(p)),
            e
          );
        }
        return (
          (c.prototype = u),
          T(p, "constructor", u),
          T(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          T(u, r, "GeneratorFunction"),
          T(p),
          T(p, r, "Generator"),
          T(p, o, function () {
            return this;
          }),
          T(p, "toString", function () {
            return "[object Generator]";
          }),
          (g = function () {
            return { w: a, m: d };
          })()
        );
      }
      function T(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (T = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var a = function (t, n) {
              T(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, n, o);
      }
      function j(e, t, n, o, r, a, i) {
        try {
          var l = e[a](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function A(e, t) {
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
              var o,
                r,
                a,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
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
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                x(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : S(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function x(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != w(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != w(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == w(t) ? t : t + "";
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
      var L = function (e) {
        var t = e.dataElement,
          n = e.children,
          o = Object(b.e)(function (e) {
            return y.a.getMenuOverlayItems(e, t);
          }, b.c),
          i = m.a.Children.toArray(n);
        return o.map(function (e, t) {
          var n = e.dataElement,
            o = e.type,
            l = e.hidden,
            c = "".concat(o, "-").concat(n || t),
            u =
              null == l
                ? void 0
                : l
                    .map(function (e) {
                      return "hide-in-".concat(e);
                    })
                    .join(" "),
            s = i.find(function (e) {
              return e.props.dataElement === n;
            });
          if (!s) {
            var p = _(_({}, e), {}, { mediaQueryClassName: u });
            switch (o) {
              case "actionButton":
                s = m.a.createElement(r.a, p);
                break;
              case "customElement":
                s = m.a.createElement(a.a, p);
            }
          }
          return s ? m.a.cloneElement(s, { key: c }) : null;
        });
      };
      var P = function () {
        var e = Object(b.d)(),
          t = A(Object(f.a)(), 1)[0],
          n = A(Object(d.useState)(), 2),
          a = n[0],
          w = n[1],
          T = Object(b.e)(y.a.isEmbedPrintSupported),
          N = Object(b.e)(y.a.useClientSidePrint),
          S = Object(b.e)(y.a.getColorMap),
          _ = Object(b.e)(y.a.getSortStrategy),
          x = Object(b.e)(function (e) {
            return y.a.isFullScreen(e);
          }),
          P = Object(b.e)(function (e) {
            return y.a.getTimezone(e);
          }),
          F =
            !Object(b.e)(function (e) {
              return y.a.isElementDisabled(e, O.a.CREATE_PORTFOLIO_BUTTON);
            }) && l.a.isFullPDFEnabled(),
          k = Object(d.useCallback)(
            function () {
              return e(o.a.closeElements([O.a.MENU_OVERLAY]));
            },
            [e],
          );
        Object(d.useEffect)(function () {
          var e = function () {
            var e,
              t =
                null === (e = l.a.getDocument()) || void 0 === e
                  ? void 0
                  : e.getType();
            w(t);
          };
          return (
            e(),
            l.a.addEventListener("documentLoaded", e),
            function () {
              l.a.removeEventListener("documentLoaded", e);
            }
          );
        }, []);
        var C = (function () {
          var t,
            n =
              ((t = g().m(function t() {
                return g().w(function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        (k(),
                          Object(v.a)(e, null, {
                            filename: "Untitled.docx",
                            enableOfficeEditing: !0,
                          }));
                      case 1:
                        return t.a(2);
                    }
                }, t);
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (o, r) {
                  var a = t.apply(e, n);
                  function i(e) {
                    j(a, o, r, i, l, "next", e);
                  }
                  function l(e) {
                    j(a, o, r, i, l, "throw", e);
                  }
                  i(void 0);
                });
              });
          return function () {
            return n.apply(this, arguments);
          };
        })();
        return m.a.createElement(
          h.a,
          {
            menu: O.a.MENU_OVERLAY,
            trigger: O.a.MENU_OVERLAY_BUTTON,
            ariaLabel: t("component.menuOverlay"),
          },
          m.a.createElement(
            L,
            null,
            Object(E.q)() &&
              m.a.createElement(r.a, {
                dataElement: O.a.NEW_DOCUMENT_BUTTON,
                className: "row",
                img: "icon-plus-sign",
                label: t("action.newDocument"),
                ariaLabel: t("action.newDocument"),
                role: "option",
                onClick: C,
              }),
            m.a.createElement(r.a, {
              dataElement: O.a.FILE_PICKER_BUTTON,
              className: "row",
              img: "icon-header-file-picker-line",
              label: t("action.openFile"),
              ariaLabel: t("action.openFile"),
              role: "option",
              onClick: u.a,
            }),
            a !== i.a.XOD &&
              !Object(E.q)() &&
              m.a.createElement(r.a, {
                dataElement: O.a.DOWNLOAD_BUTTON,
                className: "row",
                img: "icon-download",
                label: t("action.download"),
                ariaLabel: t("action.download"),
                role: "option",
                onClick: function () {
                  Object(c.a)(e);
                },
              }),
            Object(E.q)() &&
              m.a.createElement(r.a, {
                dataElement: O.a.FULLSCREEN_BUTTON,
                className: "row",
                img: x
                  ? "icon-header-full-screen-exit"
                  : "icon-header-full-screen",
                label: t(
                  x ? "action.exitFullscreen" : "action.enterFullscreen",
                ),
                ariaLabel: t(
                  x ? "action.exitFullscreen" : "action.enterFullscreen",
                ),
                role: "option",
                onClick: s.a,
              }),
            a !== i.a.XOD &&
              m.a.createElement(r.a, {
                dataElement: O.a.SAVE_AS_BUTTON,
                className: "row",
                img: "icon-save",
                label: t("saveModal.saveAs"),
                ariaLabel: t("saveModal.saveAs"),
                role: "option",
                onClick: function () {
                  (k(), e(o.a.openElement(O.a.SAVE_MODAL)));
                },
              }),
            m.a.createElement(r.a, {
              dataElement: O.a.PRINT_BUTTON,
              className: "row",
              img: "icon-header-print-line",
              label: t("action.print"),
              ariaLabel: t("action.print"),
              role: "option",
              onClick: function () {
                (k(),
                  Object(p.a)(e, N, T, _, S, {
                    isGrayscale: l.a
                      .getDocumentViewer()
                      .isGrayscaleModeEnabled(),
                    timezone: P,
                  }));
              },
            }),
          ),
          m.a.createElement("div", { className: "divider" }),
          F &&
            m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(r.a, {
                dataElement: O.a.CREATE_PORTFOLIO_BUTTON,
                className: "row",
                img: "icon-pdf-portfolio",
                label: t("portfolio.createPDFPortfolio"),
                ariaLabel: t("portfolio.createPDFPortfolio"),
                role: "option",
                onClick: function () {
                  (k(), e(o.a.openElement(O.a.CREATE_PORTFOLIO_MODAL)));
                },
              }),
              m.a.createElement("div", { className: "divider" }),
            ),
          m.a.createElement(r.a, {
            dataElement: O.a.SETTINGS_BUTTON,
            className: "row",
            img: "icon-header-settings-line",
            label: t("option.settings.settings"),
            ariaLabel: t("option.settings.settings"),
            role: "option",
            onClick: function () {
              (k(), e(o.a.openElement(O.a.SETTINGS_MODAL)));
            },
          }),
        );
      };
      t.default = P;
    },
  },
]);
//# sourceMappingURL=chunk.70.js.map
