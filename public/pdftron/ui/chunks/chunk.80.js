(window.webpackJsonp = window.webpackJsonp || []).push([
  [80],
  {
    2002: function (n, t, o) {
      var e = o(35),
        r = o(2003);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[n.i, r, ""]]);
      var a = {
        insert: function (n) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(n);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function n(t, o = document) {
                const e = [];
                return (
                  o.querySelectorAll(t).forEach((n) => e.push(n)),
                  o.querySelectorAll("*").forEach((o) => {
                    o.shadowRoot && e.push(...n(t, o.shadowRoot));
                  }),
                  e
                );
              })("apryse-webviewer")));
          const o = [];
          for (let e = 0; e < t.length; e++) {
            const r = t[e];
            if (0 === e)
              (r.shadowRoot.appendChild(n),
                (n.onload = function () {
                  o.length > 0 &&
                    o.forEach((t) => {
                      t.innerHTML = n.innerHTML;
                    });
                }));
            else {
              const t = n.cloneNode(!0);
              (r.shadowRoot.appendChild(t), o.push(t));
            }
          }
        },
        singleton: !1,
      };
      e(r, a);
      n.exports = r.locals || {};
    },
    2003: function (n, t, o) {
      ((t = n.exports = o(36)(!1)).push([
        n.i,
        ".open.WarningModal{visibility:visible}.closed.WarningModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.WarningModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.WarningModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.WarningModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.WarningModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.WarningModal .footer .modal-button.cancel:hover,.WarningModal .footer .modal-button.second-option-button:hover,.WarningModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.WarningModal .footer .modal-button.cancel,.WarningModal .footer .modal-button.second-option-button,.WarningModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.WarningModal .footer .modal-button.cancel.disabled,.WarningModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.WarningModal .footer .modal-button.cancel.disabled span,.WarningModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.WarningModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.WarningModal .modal-container .wrapper .modal-content{padding:10px}.WarningModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.WarningModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.WarningModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.WarningModal .footer .modal-button.confirm{margin-inline-start:4px}.WarningModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button{padding:23px 8px}}.WarningModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .swipe-indicator{width:32px}}.WarningModal{z-index:101}.WarningModal .container{display:flex;width:480px;flex-direction:column;align-items:flex-start;border-radius:4px;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .container{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .container{width:100%}}.WarningModal.connect-to-url-modal{overflow:hidden;word-break:break-all}.WarningModal .header{display:flex;align-items:center;position:relative;width:100%;padding:16px}.WarningModal .header .header-text span{font-size:16px;font-weight:700}.WarningModal .header .Button{position:absolute;inset-block-start:10px;inset-inline-end:10px}.WarningModal .header .Button .Icon{height:22px;width:22px;color:var(--icon-color)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .header .Button .Icon{height:28px;width:28px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .header .Button .Icon{height:28px;width:28px}}.WarningModal .header .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.WarningModal .body{font-size:13px;padding:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .body{padding:16px 32px 16px 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .body{padding:16px 32px 16px 16px}}.WarningModal .body .customMessage p:first-child{margin-top:0}.WarningModal .body .customMessage p:last-child{margin-bottom:0}.WarningModal .body .footer{justify-content:flex-start}.WarningModal .footer{padding:16px;margin-top:0}.WarningModal .footer .ui__choice--center{flex:auto;align-self:center}.WarningModal .footer .modal-button{height:32px;margin:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button{padding:0;border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;height:32px;width:52px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer;font-size:13px}:host(:not([data-tabbing=true])) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button,html:not([data-tabbing=true]) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button{outline:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button{padding:0;border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;height:32px;width:52px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer;font-size:13px}:host(:not([data-tabbing=true])) .App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button,html:not([data-tabbing=true]) .App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button{outline:none}}.WarningModal .divider{height:1px;width:100%;background:var(--divider)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2133: function (n, t, o) {
      "use strict";
      o.r(t);
      (o(9),
        o(10),
        o(14),
        o(30),
        o(21),
        o(50),
        o(20),
        o(12),
        o(44),
        o(22),
        o(31),
        o(18),
        o(26),
        o(16),
        o(28),
        o(40),
        o(24),
        o(42),
        o(43),
        o(8),
        o(56),
        o(17),
        o(19),
        o(62),
        o(11),
        o(13));
      var e = o(0),
        r = o.n(e),
        a = o(6),
        i = o(33),
        d = o(1),
        l = o(41),
        c = o(235),
        p = o(1610),
        s = o(15),
        u = o.n(s),
        m = o(3),
        b = o(4),
        f = o(5),
        g = o(373),
        h = o(182);
      o(2002);
      function y(n) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function x(n, t, o) {
        return (
          (t = (function (n) {
            var t = (function (n, t) {
              if ("object" != y(n) || !n) return n;
              var o = n[Symbol.toPrimitive];
              if (void 0 !== o) {
                var e = o.call(n, t || "default");
                if ("object" != y(e)) return e;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(n);
            })(n, "string");
            return "symbol" == y(t) ? t : t + "";
          })(t)) in n
            ? Object.defineProperty(n, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = o),
          n
        );
      }
      function w() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
          t,
          o = "function" == typeof Symbol ? Symbol : {},
          e = o.iterator || "@@iterator",
          r = o.toStringTag || "@@toStringTag";
        function a(o, e, r, a) {
          var l = e && e.prototype instanceof d ? e : d,
            c = Object.create(l.prototype);
          return (
            v(
              c,
              "_invoke",
              (function (o, e, r) {
                var a,
                  d,
                  l,
                  c = 0,
                  p = r || [],
                  s = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: n,
                    a: m,
                    f: m.bind(n, 4),
                    d: function (t, o) {
                      return ((a = t), (d = 0), (l = n), (u.n = o), i);
                    },
                  };
                function m(o, e) {
                  for (
                    d = o, l = e, t = 0;
                    !s && c && !r && t < p.length;
                    t++
                  ) {
                    var r,
                      a = p[t],
                      m = u.p,
                      b = a[2];
                    o > 3
                      ? (r = b === e) &&
                        ((l = a[(d = a[4]) ? 5 : ((d = 3), 3)]),
                        (a[4] = a[5] = n))
                      : a[0] <= m &&
                        ((r = o < 2 && m < a[1])
                          ? ((d = 0), (u.v = e), (u.n = a[1]))
                          : m < b &&
                            (r = o < 3 || a[0] > e || e > b) &&
                            ((a[4] = o), (a[5] = e), (u.n = b), (d = 0)));
                  }
                  if (r || o > 1) return i;
                  throw ((s = !0), e);
                }
                return function (r, p, b) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    s && 1 === p && m(p, b), d = p, l = b;
                    (t = d < 2 ? n : l) || !s;

                  ) {
                    a ||
                      (d
                        ? d < 3
                          ? (d > 1 && (u.n = -1), m(d, l))
                          : (u.n = l)
                        : (u.v = l));
                    try {
                      if (((c = 2), a)) {
                        if ((d || (r = "next"), (t = a[r]))) {
                          if (!(t = t.call(a, l)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((l = t.value), d < 2 && (d = 0));
                        } else
                          (1 === d && (t = a.return) && t.call(a),
                            d < 2 &&
                              ((l = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (d = 1)));
                        a = n;
                      } else if ((t = (s = u.n < 0) ? l : o.call(e, u)) !== i)
                        break;
                    } catch (t) {
                      ((a = n), (d = 1), (l = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: s };
                };
              })(o, r, a),
              !0,
            ),
            c
          );
        }
        var i = {};
        function d() {}
        function l() {}
        function c() {}
        t = Object.getPrototypeOf;
        var p = [][e]
            ? t(t([][e]()))
            : (v((t = {}), e, function () {
                return this;
              }),
              t),
          s = (c.prototype = d.prototype = Object.create(p));
        function u(n) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(n, c)
              : ((n.__proto__ = c), v(n, r, "GeneratorFunction")),
            (n.prototype = Object.create(s)),
            n
          );
        }
        return (
          (l.prototype = c),
          v(s, "constructor", c),
          v(c, "constructor", l),
          (l.displayName = "GeneratorFunction"),
          v(c, r, "GeneratorFunction"),
          v(s),
          v(s, r, "Generator"),
          v(s, e, function () {
            return this;
          }),
          v(s, "toString", function () {
            return "[object Generator]";
          }),
          (w = function () {
            return { w: a, m: u };
          })()
        );
      }
      function v(n, t, o, e) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (n) {
          r = 0;
        }
        (v = function (n, t, o, e) {
          if (t)
            r
              ? r(n, t, {
                  value: o,
                  enumerable: !e,
                  configurable: !e,
                  writable: !e,
                })
              : (n[t] = o);
          else {
            var a = function (t, o) {
              v(n, t, function (n) {
                return this._invoke(t, o, n);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(n, t, o, e);
      }
      function W(n, t, o, e, r, a, i) {
        try {
          var d = n[a](i),
            l = d.value;
        } catch (n) {
          return void o(n);
        }
        d.done ? t(l) : Promise.resolve(l).then(e, r);
      }
      function M(n) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (e, r) {
            var a = n.apply(t, o);
            function i(n) {
              W(a, e, r, i, d, "next", n);
            }
            function d(n) {
              W(a, e, r, i, d, "throw", n);
            }
            i(void 0);
          });
        };
      }
      function k(n, t) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, t) {
            var o =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != o) {
              var e,
                r,
                a,
                i,
                d = [],
                l = !0,
                c = !1;
              try {
                if (((a = (o = o.call(n)).next), 0 === t)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (e = a.call(o)).done) &&
                    (d.push(e.value), d.length !== t);
                    l = !0
                  );
              } catch (n) {
                ((c = !0), (r = n));
              } finally {
                try {
                  if (
                    !l &&
                    null != o.return &&
                    ((i = o.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return d;
            }
          })(n, t) ||
          (function (n, t) {
            if (n) {
              if ("string" == typeof n) return A(n, t);
              var o = {}.toString.call(n).slice(8, -1);
              return (
                "Object" === o && n.constructor && (o = n.constructor.name),
                "Map" === o || "Set" === o
                  ? Array.from(n)
                  : "Arguments" === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? A(n, t)
                    : void 0
              );
            }
          })(n, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function A(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var o = 0, e = Array(t); o < t; o++) e[o] = n[o];
        return e;
      }
      var E = function () {
        var n = r.a.createRef(),
          t = k(
            Object(a.e)(function (n) {
              return [
                b.a.getWarningTitle(n) || "",
                b.a.getWarningMessage(n),
                b.a.getWarningConfirmEvent(n),
                b.a.getWarningConfirmBtnText(n),
                b.a.getWarningSecondaryEvent(n),
                b.a.getWarningSecondaryBtnText(n),
                b.a.getWarningSecondaryBtnClass(n),
                b.a.getWarningCancelEvent(n),
                b.a.isElementDisabled(n, f.a.WARNING_MODAL),
                b.a.isElementOpen(n, f.a.WARNING_MODAL),
                b.a.getShowAskAgainCheckbox(n),
                b.a.getWarningTemplateStrings(n) || {},
                b.a.getWarningModalClass(n) || "",
                b.a.getWarningCloseEvent(n) || "",
              ];
            }, a.c),
            14,
          ),
          o = t[0],
          s = t[1],
          y = t[2],
          v = t[3],
          W = t[4],
          A = t[5],
          E = t[6],
          j = t[7],
          O = t[8],
          S = t[9],
          C = t[10],
          T = t[11],
          N = t[12],
          _ = t[13],
          I = k(Object(e.useState)(!1), 2),
          B = I[0],
          R = I[1],
          D = Object(a.d)(),
          G = Object(p.a)("Modal WarningModal ".concat(N), { isOpen: S }),
          P = i.a.t(v, T) || i.a.t("action.ok");
        (Object(e.useEffect)(function () {
          return (
            d.a.addEventListener("documentUnloaded", U),
            function () {
              d.a.removeEventListener("documentUnloaded", U);
            }
          );
        }, []),
          Object(e.useEffect)(
            function () {
              S && R(!1);
            },
            [S],
          ));
        var z,
          H,
          L = (function () {
            var n = M(
              w().m(function n() {
                return w().w(function (n) {
                  for (;;)
                    switch (n.n) {
                      case 0:
                        if (!S) {
                          n.n = 2;
                          break;
                        }
                        if (!_) {
                          n.n = 1;
                          break;
                        }
                        return ((n.n = 1), _(B));
                      case 1:
                        D(m.a.closeElements(f.a.WARNING_MODAL));
                      case 2:
                        return n.a(2);
                    }
                }, n);
              }),
            );
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          F = Object(h.a)(L),
          U = (function () {
            var n = M(
              w().m(function n() {
                return w().w(function (n) {
                  for (;;)
                    switch (n.n) {
                      case 0:
                        if (!j) {
                          n.n = 1;
                          break;
                        }
                        return ((n.n = 1), j());
                      case 1:
                        F();
                      case 2:
                        return n.a(2);
                    }
                }, n);
              }),
            );
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          q = (function () {
            var n = M(
              w().m(function n(t) {
                return w().w(function (n) {
                  for (;;)
                    switch (n.n) {
                      case 0:
                        if (!y) {
                          n.n = 1;
                          break;
                        }
                        return ((n.n = 1), y(t));
                      case 1:
                        F();
                      case 2:
                        return n.a(2);
                    }
                }, n);
              }),
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          J = (function () {
            var n = M(
              w().m(function n() {
                return w().w(function (n) {
                  for (;;)
                    switch (n.n) {
                      case 0:
                        if (!W) {
                          n.n = 1;
                          break;
                        }
                        return ((n.n = 1), W());
                      case 1:
                        F();
                      case 2:
                        return n.a(2);
                    }
                }, n);
              }),
            );
            return function () {
              return n.apply(this, arguments);
            };
          })();
        return O
          ? null
          : r.a.createElement(
              "div",
              {
                className: G,
                onMouseDown: U,
                role: "alertdialog",
                "aria-modal": "true",
                "aria-label": i.a.t(o, T),
                "aria-describedby": i.a.t(o, T),
              },
              r.a.createElement(
                g.a,
                {
                  title: i.a.t(o, T),
                  isOpen: S,
                  closeHandler: U,
                  onCloseClick: U,
                  swipeToClose: !0,
                },
                r.a.createElement(
                  "div",
                  {
                    className: "container",
                    onMouseDown: function (n) {
                      return n.stopPropagation();
                    },
                  },
                  r.a.createElement(
                    "div",
                    { className: "body" },
                    ((H =
                      "string" == typeof s && i.a.exists(s) ? i.a.t(s, T) : s),
                    null !== (z = H.includes) && void 0 !== z && z.call(H, "\n")
                      ? H.split("\n").map(function (n, t) {
                          return r.a.createElement(
                            r.a.Fragment,
                            { key: t },
                            0 === t
                              ? r.a.createElement(r.a.Fragment, null, n)
                              : r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement("br", null),
                                  n,
                                ),
                          );
                        })
                      : H),
                  ),
                  r.a.createElement("div", { className: "divider" }),
                  r.a.createElement(
                    "div",
                    { className: "footer" },
                    C &&
                      r.a.createElement(c.a, {
                        dataElement: "doNotAskAgainCheckbox",
                        ref: n,
                        id: "do-not-ask-again-checkbox",
                        name: "do-not-ask-again-checkbox",
                        label: i.a.t("message.doNotAskAgain"),
                        onChange: function (n) {
                          return R(n.target.checked);
                        },
                        checked: B,
                        center: !0,
                      }),
                    W &&
                      r.a.createElement(l.a, {
                        className: u()(
                          x(
                            { "modal-button": !0, "second-option-button": !0 },
                            E,
                            E,
                          ),
                        ),
                        dataElement: "WarningModalClearButton",
                        label: i.a.t(A, T),
                        onClick: J,
                      }),
                    r.a.createElement(l.a, {
                      className: "confirm modal-button",
                      dataElement: "WarningModalSignButton",
                      label: P,
                      onClick: q,
                    }),
                  ),
                ),
              ),
            );
      };
      t.default = E;
    },
  },
]);
//# sourceMappingURL=chunk.80.js.map
