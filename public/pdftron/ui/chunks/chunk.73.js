(window.webpackJsonp = window.webpackJsonp || []).push([
  [73],
  {
    2038: function (t, e, n) {
      var o = n(35),
        r = n(2039);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, ""]]);
      var i = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function t(e, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(e).forEach((t) => o.push(t)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...t(e, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < e.length; o++) {
            const r = e[o];
            if (0 === o)
              (r.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (r.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    2039: function (t, e, n) {
      ((e = t.exports = n(36)(!1)).push([
        t.i,
        ".open.OfficeEditorMarginsModal{visibility:visible}.closed.OfficeEditorMarginsModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.OfficeEditorMarginsModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.OfficeEditorMarginsModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.OfficeEditorMarginsModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.OfficeEditorMarginsModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.OfficeEditorMarginsModal .footer .modal-button.cancel:hover,.OfficeEditorMarginsModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.OfficeEditorMarginsModal .footer .modal-button.cancel,.OfficeEditorMarginsModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.OfficeEditorMarginsModal .footer .modal-button.cancel.disabled,.OfficeEditorMarginsModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.OfficeEditorMarginsModal .footer .modal-button.cancel.disabled span,.OfficeEditorMarginsModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.OfficeEditorMarginsModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.OfficeEditorMarginsModal .modal-container .wrapper .modal-content{padding:10px}.OfficeEditorMarginsModal .footer{flex-direction:row;width:100%;margin-top:13px}.OfficeEditorMarginsModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.OfficeEditorMarginsModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.OfficeEditorMarginsModal .footer .modal-button.confirm{margin-inline-start:4px}.OfficeEditorMarginsModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OfficeEditorMarginsModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OfficeEditorMarginsModal .footer .modal-button{padding:23px 8px}}.OfficeEditorMarginsModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OfficeEditorMarginsModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .OfficeEditorMarginsModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OfficeEditorMarginsModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OfficeEditorMarginsModal .swipe-indicator{width:32px}}.OfficeEditorMarginsModal{flex-direction:column}.OfficeEditorMarginsModal .modal-container{display:flex;flex-direction:column;height:auto;width:480px}.OfficeEditorMarginsModal .modal-body{padding:16px;display:flex;flex-direction:row;flex-wrap:wrap;font-size:var(--font-size-default);font-family:var(--font-family);grid-gap:16px;gap:16px}.OfficeEditorMarginsModal .modal-body .title{line-height:16px;font-weight:var(--font-weight-bold)}.OfficeEditorMarginsModal .input-container{display:flex;flex-direction:column;grid-gap:8px;gap:8px}.OfficeEditorMarginsModal .input-container .modal-label{color:var(--gray-12)}.OfficeEditorMarginsModal .input-container .ui__input__wrapper{width:auto;max-width:216px}.OfficeEditorMarginsModal .input-container .ui__input{border-color:var(--gray-6);position:relative}.OfficeEditorMarginsModal .input-container .ui__input.ui__input--focused{box-shadow:none;border-color:var(--focus-border)}.OfficeEditorMarginsModal .input-container .ui__input[\\:has\\(\\:disabled\\)]{border-color:var(--gray-5)}.OfficeEditorMarginsModal .input-container .ui__input:has(:disabled){border-color:var(--gray-5)}.OfficeEditorMarginsModal .input-container input{padding:8px 40px 8px 8px;height:32px;font-size:var(--font-size-default);width:100%}.OfficeEditorMarginsModal .input-container input[type=number]{-moz-appearance:textfield}.OfficeEditorMarginsModal .input-container input:disabled{opacity:1}.OfficeEditorMarginsModal .input-container input::-webkit-inner-spin-button,.OfficeEditorMarginsModal .input-container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.OfficeEditorMarginsModal .flex-half{flex-basis:calc(50% - 8px)}.OfficeEditorMarginsModal .flex-full{flex-basis:100%}.OfficeEditorMarginsModal .flex-third{flex-basis:calc(33.33333% - 8px)}.OfficeEditorMarginsModal .footer{padding:16px;display:flex;justify-content:flex-end;border-top:1px solid var(--gray-5)}.OfficeEditorMarginsModal .footer button{border:none;border-radius:4px;background:var(--primary-button);min-width:59px;width:auto;padding:8px 16px;height:32px;color:var(--primary-button-text)}.OfficeEditorMarginsModal .footer button:hover{background:var(--primary-button-hover)}.OfficeEditorMarginsModal .unit-dropdown.Dropdown{height:34px}.OfficeEditorMarginsModal .unit-dropdown .Dropdown__items{width:100%}.OfficeEditorMarginsModal .unit-dropdown.Dropdown__wrapper{width:calc(50% - 8px)}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2137: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
        n(130),
        n(34),
        n(27),
        n(21),
        n(20),
        n(12),
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
        n(91),
        n(56),
        n(17),
        n(19),
        n(11),
        n(29),
        n(13));
      var o = n(0),
        r = n.n(o),
        i = n(6),
        a = n(305),
        c = n(4),
        d = n(3),
        l = n(1),
        f = n(5),
        u = n(41),
        p = n(373),
        s = n(72),
        b = n(2083),
        m = n(522),
        g = n(25),
        h = n(65);
      n(2038);
      function y(t) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function O() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var d = o && o.prototype instanceof c ? o : c,
            l = Object.create(d.prototype);
          return (
            M(
              l,
              "_invoke",
              (function (n, o, r) {
                var i,
                  c,
                  d,
                  l = 0,
                  f = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: s,
                    f: s.bind(t, 4),
                    d: function (e, n) {
                      return ((i = e), (c = 0), (d = t), (p.n = n), a);
                    },
                  };
                function s(n, o) {
                  for (
                    c = n, d = o, e = 0;
                    !u && l && !r && e < f.length;
                    e++
                  ) {
                    var r,
                      i = f[e],
                      s = p.p,
                      b = i[2];
                    n > 3
                      ? (r = b === o) &&
                        ((d = i[(c = i[4]) ? 5 : ((c = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= s &&
                        ((r = n < 2 && s < i[1])
                          ? ((c = 0), (p.v = o), (p.n = i[1]))
                          : s < b &&
                            (r = n < 3 || i[0] > o || o > b) &&
                            ((i[4] = n), (i[5] = o), (p.n = b), (c = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, f, b) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === f && s(f, b), c = f, d = b;
                    (e = c < 2 ? t : d) || !u;

                  ) {
                    i ||
                      (c
                        ? c < 3
                          ? (c > 1 && (p.n = -1), s(c, d))
                          : (p.n = d)
                        : (p.v = d));
                    try {
                      if (((l = 2), i)) {
                        if ((c || (r = "next"), (e = i[r]))) {
                          if (!(e = e.call(i, d)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((d = e.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (e = i.return) && e.call(i),
                            c < 2 &&
                              ((d = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (c = 1)));
                        i = t;
                      } else if ((e = (u = p.n < 0) ? d : n.call(o, p)) !== a)
                        break;
                    } catch (e) {
                      ((i = t), (c = 1), (d = e));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: e, done: u };
                };
              })(n, r, i),
              !0,
            ),
            l
          );
        }
        var a = {};
        function c() {}
        function d() {}
        function l() {}
        e = Object.getPrototypeOf;
        var f = [][o]
            ? e(e([][o]()))
            : (M((e = {}), o, function () {
                return this;
              }),
              e),
          u = (l.prototype = c.prototype = Object.create(f));
        function p(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, l)
              : ((t.__proto__ = l), M(t, r, "GeneratorFunction")),
            (t.prototype = Object.create(u)),
            t
          );
        }
        return (
          (d.prototype = l),
          M(u, "constructor", l),
          M(l, "constructor", d),
          (d.displayName = "GeneratorFunction"),
          M(l, r, "GeneratorFunction"),
          M(u),
          M(u, r, "Generator"),
          M(u, o, function () {
            return this;
          }),
          M(u, "toString", function () {
            return "[object Generator]";
          }),
          (O = function () {
            return { w: i, m: p };
          })()
        );
      }
      function M(t, e, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (t) {
          r = 0;
        }
        (M = function (t, e, n, o) {
          if (e)
            r
              ? r(t, e, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (t[e] = n);
          else {
            var i = function (e, n) {
              M(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(t, e, n, o);
      }
      function w(t, e, n, o, r, i, a) {
        try {
          var c = t[i](a),
            d = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(d) : Promise.resolve(d).then(o, r);
      }
      function x(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = t.apply(e, n);
            function a(t) {
              w(i, o, r, a, c, "next", t);
            }
            function c(t) {
              w(i, o, r, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function v(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          (e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(n), !0).forEach(function (e) {
                j(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function j(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != y(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || "default");
                if ("object" != y(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == y(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function _(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var o,
                r,
                i,
                a,
                c = [],
                d = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (o = i.call(n)).done) &&
                    (c.push(o.value), c.length !== e);
                    d = !0
                  );
              } catch (t) {
                ((l = !0), (r = t));
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw r;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return k(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? k(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var S = [g.p.LEFT, g.p.RIGHT, g.p.TOP, g.p.BOTTOM],
        A = function () {
          var t = _(Object(a.a)(), 1)[0],
            e = Object(i.d)(),
            n = Object(i.e)(c.a.getOfficeEditorUnitMeasurement),
            y = _(Object(o.useState)(n), 2),
            M = y[0],
            w = y[1],
            v = _(
              Object(o.useState)({ left: 0, right: 0, top: 0, bottom: 0 }),
              2,
            ),
            k = v[0],
            A = v[1],
            T = _(
              Object(o.useState)({ left: 0, right: 0, top: 0, bottom: 0 }),
              2,
            ),
            I = T[0],
            P = T[1],
            N = _(
              Object(o.useState)({
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
              }),
              2,
            ),
            D = N[0],
            C = N[1],
            R = _(
              Object(o.useState)({ left: 0, right: 0, top: 0, bottom: 0 }),
              2,
            ),
            F = R[0],
            G = R[1],
            z = _(Object(o.useState)(0), 2),
            H = z[0],
            B = z[1],
            L = _(Object(o.useState)(0), 2),
            U = L[0],
            W = L[1],
            q = function (t, e) {
              return S.every(function (n) {
                return t[n] === e[n];
              });
            },
            J = function (t, e, n) {
              return t - e - Object(h.o)(n);
            },
            K = function (t, e, n, o) {
              var r = e * g.D;
              return {
                top: r,
                bottom: r,
                left: J(t, n.right, o),
                right: J(t, n.left, o),
              };
            },
            V = (function () {
              var t = x(
                O().m(function t() {
                  var o;
                  return O().w(
                    function (t) {
                      for (;;)
                        switch ((t.p = t.n)) {
                          case 0:
                            if (!q(I, k)) {
                              t.n = 1;
                              break;
                            }
                            return (Q(), t.a(2));
                          case 1:
                            return (
                              (t.p = 1),
                              (t.n = 2),
                              l.a.getOfficeEditor().setSectionMargins(I, n)
                            );
                          case 2:
                            ($(), (t.n = 4));
                            break;
                          case 3:
                            ((t.p = 3),
                              (o = t.v),
                              console.error("Error applying margins:", o),
                              Object(h.u)(e, d.a, g.A.MARGIN));
                          case 4:
                            return t.a(2);
                        }
                    },
                    t,
                    null,
                    [[1, 3]],
                  );
                }),
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            $ = function () {
              e(d.a.closeElement(f.a.OFFICE_EDITOR_MARGINS_MODAL));
            },
            Q = function () {
              ($(), Object(h.i)());
            },
            X = S.map(function (e) {
              return {
                id: "".concat(e, "MarginInput"),
                label: t("".concat(g.x, "marginsModal.").concat(e, "Margin")),
                value: D[e],
                onChange: function (t) {
                  return (function (t, e) {
                    C(function (n) {
                      return E(E({}, n), {}, j({}, e, t));
                    });
                  })(t.target.value, e);
                },
                onBlur: function (t) {
                  return (function (t, e, n) {
                    var o = Object(h.v)(t, n);
                    (I[e] === o && D[e] === o.toString()) ||
                      (P(function (t) {
                        return E(E({}, t), {}, j({}, e, o));
                      }),
                      C(function (t) {
                        return E(E({}, t), {}, j({}, e, o.toString()));
                      }));
                  })(t.target.valueAsNumber, e, F[e]);
                },
              };
            });
          return (
            Object(o.useEffect)(function () {
              (function () {
                var t = x(
                  O().m(function t() {
                    var e, o, r, i, a;
                    return O().w(function (t) {
                      for (;;)
                        switch (t.n) {
                          case 0:
                            return (
                              (t.n = 1),
                              l.a.getOfficeEditor().getEditingPageNumber()
                            );
                          case 1:
                            return (
                              (e = t.v),
                              (t.n = 2),
                              l.a.getOfficeEditor().getSectionMargins(n)
                            );
                          case 2:
                            ((o = t.v),
                              (r = l.a
                                .getOfficeEditor()
                                .getPageDimensions(e, n)),
                              (i = r.width),
                              (a = r.height),
                              B(i),
                              W(a),
                              w(n),
                              A(o),
                              P(o),
                              C(
                                Object(m.a)(S, function (t) {
                                  return Object(h.j)(o[t]);
                                }),
                              ),
                              G(K(i, a, o, n)));
                          case 3:
                            return t.a(2);
                        }
                    }, t);
                  }),
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            }, []),
            Object(o.useEffect)(
              function () {
                G(function (t) {
                  return E(
                    E({}, t),
                    {},
                    { left: J(H, I.right, n), right: J(H, I.left, n) },
                  );
                });
              },
              [H, I.left, I.right],
            ),
            Object(o.useEffect)(
              function () {
                if (n !== M) {
                  w(n);
                  var t = Object(h.g)(H, M, n),
                    e = Object(h.g)(U, M, n);
                  (B(t), W(e));
                  var o = Object(m.a)(S, function (t) {
                      return Object(h.g)(k[t], M, n);
                    }),
                    r = Object(m.a)(S, function (t) {
                      return Object(h.g)(I[t], M, n);
                    }),
                    i = K(t, e, r, n),
                    a = Object(m.a)(S, function (t) {
                      return Object(h.v)(r[t], i[t]);
                    });
                  (A(o),
                    G(i),
                    P(a),
                    C(
                      Object(m.a)(S, function (t) {
                        return Object(h.j)(a[t]);
                      }),
                    ));
                }
              },
              [n, M],
            ),
            r.a.createElement(
              "div",
              {
                className: "OfficeEditorMarginsModal",
                "data-element": f.a.OFFICE_EDITOR_MARGINS_MODAL,
              },
              r.a.createElement(
                p.a,
                {
                  title: t("".concat(g.x, "marginsModal.title")),
                  closehandler: Q,
                  onCloseClick: Q,
                  swipeToClose: !0,
                  isOpen: !0,
                },
                r.a.createElement(
                  "div",
                  { className: "modal-body" },
                  r.a.createElement(
                    "div",
                    { className: "input-container flex-full" },
                    r.a.createElement(
                      "label",
                      {
                        id: "office-editor-margin-unit-label",
                        className: "modal-label",
                      },
                      t("".concat(g.x, "unitMeasurement")),
                    ),
                    r.a.createElement(s.a, {
                      id: "office-editor-margin-unit",
                      dataElement: f.a.OFFICE_EDITOR_MARGIN_UNIT,
                      labelledById: "office-editor-margin-unit-label",
                      className: "unit-dropdown",
                      items: Object.values(g.m),
                      onClickItem: function (t) {
                        return e(d.a.setOfficeEditorUnitMeasurement(t));
                      },
                      getKey: function (t) {
                        return t;
                      },
                      currentSelectionKey: n,
                      width: "auto",
                    }),
                  ),
                  X.map(function (t) {
                    return r.a.createElement(
                      "div",
                      { key: t.id, className: "input-container flex-half" },
                      r.a.createElement(
                        "label",
                        { htmlFor: t.id, className: "modal-label" },
                        t.label,
                      ),
                      r.a.createElement(b.a, {
                        type: "number",
                        id: t.id,
                        onChange: t.onChange,
                        onBlur: t.onBlur,
                        value: t.value,
                        min: "0",
                        step: "0.1",
                      }),
                    );
                  }),
                ),
                r.a.createElement(
                  "div",
                  { className: "footer" },
                  r.a.createElement(u.a, {
                    onClick: V,
                    label: t("action.apply"),
                  }),
                ),
              ),
            )
          );
        };
      e.default = A;
    },
  },
]);
//# sourceMappingURL=chunk.73.js.map
