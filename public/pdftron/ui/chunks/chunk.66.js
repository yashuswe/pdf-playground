(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    2036: function (e, t, o) {
      var n = o(35),
        r = o(2037);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, o = document) {
                const n = [];
                return (
                  o.querySelectorAll(t).forEach((e) => n.push(e)),
                  o.querySelectorAll("*").forEach((o) => {
                    o.shadowRoot && n.push(...e(t, o.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer")));
          const o = [];
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            if (0 === n)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  o.length > 0 &&
                    o.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), o.push(t));
            }
          }
        },
        singleton: !1,
      };
      n(r, a);
      e.exports = r.locals || {};
    },
    2037: function (e, t, o) {
      ((t = e.exports = o(36)(!1)).push([
        e.i,
        ".open.HeaderFooterOptionsModal{visibility:visible}.closed.HeaderFooterOptionsModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.HeaderFooterOptionsModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.HeaderFooterOptionsModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.HeaderFooterOptionsModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.HeaderFooterOptionsModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.HeaderFooterOptionsModal .footer .modal-button.cancel:hover,.HeaderFooterOptionsModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.HeaderFooterOptionsModal .footer .modal-button.cancel,.HeaderFooterOptionsModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.HeaderFooterOptionsModal .footer .modal-button.cancel.disabled,.HeaderFooterOptionsModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.HeaderFooterOptionsModal .footer .modal-button.cancel.disabled span,.HeaderFooterOptionsModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.HeaderFooterOptionsModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.HeaderFooterOptionsModal .modal-container .wrapper .modal-content{padding:10px}.HeaderFooterOptionsModal .footer{flex-direction:row;width:100%;margin-top:13px}.HeaderFooterOptionsModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.HeaderFooterOptionsModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.HeaderFooterOptionsModal .footer .modal-button.confirm{margin-inline-start:4px}.HeaderFooterOptionsModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderFooterOptionsModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderFooterOptionsModal .footer .modal-button{padding:23px 8px}}.HeaderFooterOptionsModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderFooterOptionsModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderFooterOptionsModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .HeaderFooterOptionsModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .HeaderFooterOptionsModal .swipe-indicator{width:32px}}.HeaderFooterOptionsModal{flex-direction:column}.HeaderFooterOptionsModal .modal-container{display:flex;flex-direction:column;height:auto;width:480px}.HeaderFooterOptionsModal .modal-body{padding:16px;display:flex;flex-direction:row;flex-wrap:wrap;font-size:var(--font-size-default);font-family:var(--font-family);grid-gap:16px;gap:16px}.HeaderFooterOptionsModal .modal-body .title{line-height:16px;font-weight:var(--font-weight-bold)}.HeaderFooterOptionsModal .input-container{display:flex;flex-direction:column;grid-gap:8px;gap:8px}.HeaderFooterOptionsModal .input-container .modal-label{color:var(--gray-12)}.HeaderFooterOptionsModal .input-container .ui__input__wrapper{width:auto;max-width:216px}.HeaderFooterOptionsModal .input-container .ui__input{border-color:var(--gray-6);position:relative}.HeaderFooterOptionsModal .input-container .ui__input.ui__input--focused{box-shadow:none;border-color:var(--focus-border)}.HeaderFooterOptionsModal .input-container .ui__input[\\:has\\(\\:disabled\\)]{border-color:var(--gray-5)}.HeaderFooterOptionsModal .input-container .ui__input:has(:disabled){border-color:var(--gray-5)}.HeaderFooterOptionsModal .input-container input{padding:8px 40px 8px 8px;height:32px;font-size:var(--font-size-default);width:100%}.HeaderFooterOptionsModal .input-container input[type=number]{-moz-appearance:textfield}.HeaderFooterOptionsModal .input-container input:disabled{opacity:1}.HeaderFooterOptionsModal .input-container input::-webkit-inner-spin-button,.HeaderFooterOptionsModal .input-container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.HeaderFooterOptionsModal .flex-half{flex-basis:calc(50% - 8px)}.HeaderFooterOptionsModal .flex-full{flex-basis:100%}.HeaderFooterOptionsModal .flex-third{flex-basis:calc(33.33333% - 8px)}.HeaderFooterOptionsModal .footer{padding:16px;display:flex;justify-content:flex-end;border-top:1px solid var(--gray-5)}.HeaderFooterOptionsModal .footer button{border:none;border-radius:4px;background:var(--primary-button);min-width:59px;width:auto;padding:8px 16px;height:32px;color:var(--primary-button-text)}.HeaderFooterOptionsModal .footer button:hover{background:var(--primary-button-hover)}.HeaderFooterOptionsModal .unit-dropdown.Dropdown{height:34px}.HeaderFooterOptionsModal .unit-dropdown .Dropdown__items{width:100%}.HeaderFooterOptionsModal .margin-unit-dropdown.Dropdown__wrapper{width:calc(50% - 8px)}.HeaderFooterOptionsModal .margin-unit-dropdown.Dropdown__wrapper .Dropdown__items{width:100%}.HeaderFooterOptionsModal .modal-container .modal-body{flex-direction:column}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2136: function (e, t, o) {
      "use strict";
      o.r(t);
      (o(9),
        o(10),
        o(14),
        o(21),
        o(20),
        o(12),
        o(44),
        o(22),
        o(18),
        o(26),
        o(16),
        o(40),
        o(24),
        o(42),
        o(43),
        o(8),
        o(91),
        o(56),
        o(17),
        o(19),
        o(11),
        o(13));
      var n = o(0),
        r = o.n(n),
        a = o(6),
        i = o(305),
        d = o(4),
        l = o(3),
        c = o(5),
        p = o(41),
        s = o(373),
        u = o(2083),
        f = o(1404),
        m = o(1),
        b = o(25),
        h = o(1861),
        O = o(65),
        g = o(72);
      o(2036);
      function v() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          o = "function" == typeof Symbol ? Symbol : {},
          n = o.iterator || "@@iterator",
          r = o.toStringTag || "@@toStringTag";
        function a(o, n, r, a) {
          var l = n && n.prototype instanceof d ? n : d,
            c = Object.create(l.prototype);
          return (
            y(
              c,
              "_invoke",
              (function (o, n, r) {
                var a,
                  d,
                  l,
                  c = 0,
                  p = r || [],
                  s = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, o) {
                      return ((a = t), (d = 0), (l = e), (u.n = o), i);
                    },
                  };
                function f(o, n) {
                  for (
                    d = o, l = n, t = 0;
                    !s && c && !r && t < p.length;
                    t++
                  ) {
                    var r,
                      a = p[t],
                      f = u.p,
                      m = a[2];
                    o > 3
                      ? (r = m === n) &&
                        ((l = a[(d = a[4]) ? 5 : ((d = 3), 3)]),
                        (a[4] = a[5] = e))
                      : a[0] <= f &&
                        ((r = o < 2 && f < a[1])
                          ? ((d = 0), (u.v = n), (u.n = a[1]))
                          : f < m &&
                            (r = o < 3 || a[0] > n || n > m) &&
                            ((a[4] = o), (a[5] = n), (u.n = m), (d = 0)));
                  }
                  if (r || o > 1) return i;
                  throw ((s = !0), n);
                }
                return function (r, p, m) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    s && 1 === p && f(p, m), d = p, l = m;
                    (t = d < 2 ? e : l) || !s;

                  ) {
                    a ||
                      (d
                        ? d < 3
                          ? (d > 1 && (u.n = -1), f(d, l))
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
                        a = e;
                      } else if ((t = (s = u.n < 0) ? l : o.call(n, u)) !== i)
                        break;
                    } catch (t) {
                      ((a = e), (d = 1), (l = t));
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
        var p = [][n]
            ? t(t([][n]()))
            : (y((t = {}), n, function () {
                return this;
              }),
              t),
          s = (c.prototype = d.prototype = Object.create(p));
        function u(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), y(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(s)),
            e
          );
        }
        return (
          (l.prototype = c),
          y(s, "constructor", c),
          y(c, "constructor", l),
          (l.displayName = "GeneratorFunction"),
          y(c, r, "GeneratorFunction"),
          y(s),
          y(s, r, "Generator"),
          y(s, n, function () {
            return this;
          }),
          y(s, "toString", function () {
            return "[object Generator]";
          }),
          (v = function () {
            return { w: a, m: u };
          })()
        );
      }
      function y(e, t, o, n) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (y = function (e, t, o, n) {
          if (t)
            r
              ? r(e, t, {
                  value: o,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (e[t] = o);
          else {
            var a = function (t, o) {
              y(e, t, function (e) {
                return this._invoke(t, o, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, o, n);
      }
      function x(e, t, o, n, r, a, i) {
        try {
          var d = e[a](i),
            l = d.value;
        } catch (e) {
          return void o(e);
        }
        d.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function w(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (n, r) {
            var a = e.apply(t, o);
            function i(e) {
              x(a, n, r, i, d, "next", e);
            }
            function d(e) {
              x(a, n, r, i, d, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function F(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var o =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != o) {
              var n,
                r,
                a,
                i,
                d = [],
                l = !0,
                c = !1;
              try {
                if (((a = (o = o.call(e)).next), 0 === t)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(o)).done) &&
                    (d.push(n.value), d.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((c = !0), (r = e));
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
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return M(e, t);
              var o = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === o && e.constructor && (o = e.constructor.name),
                "Map" === o || "Set" === o
                  ? Array.from(e)
                  : "Arguments" === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? M(e, t)
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
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = Array(t); o < t; o++) n[o] = e[o];
        return n;
      }
      var H = function () {
        var e = F(Object(i.a)(), 1)[0],
          t = Object(a.d)(),
          o = Object(a.e)(function (e) {
            return d.a.isElementOpen(e, c.a.HEADER_FOOTER_OPTIONS_MODAL);
          }),
          y = F(Object(n.useState)(0), 2),
          x = y[0],
          M = y[1],
          H = F(Object(n.useState)(0), 2),
          E = H[0],
          j = H[1],
          _ = F(Object(n.useState)(0), 2),
          k = _[0],
          A = _[1],
          T = F(Object(n.useState)(0), 2),
          S = T[0],
          N = T[1],
          P = F(Object(n.useState)(""), 2),
          I = P[0],
          D = P[1],
          C = F(Object(n.useState)(""), 2),
          R = C[0],
          L = C[1],
          B = F(Object(n.useState)(!1), 2),
          z = B[0],
          G = B[1],
          U = F(Object(n.useState)(!1), 2),
          W = U[0],
          Y = U[1],
          q = F(Object(n.useState)(0), 2),
          J = q[0],
          K = q[1],
          V = Object(a.e)(d.a.getOfficeEditorUnitMeasurement),
          $ = F(Object(n.useState)(V), 2),
          Q = $[0],
          X = $[1],
          Z = (function () {
            var e = w(
              v().m(function e() {
                var o, n;
                return v().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          t(l.a.closeElement(c.a.HEADER_FOOTER_OPTIONS_MODAL)),
                          (o = h.a.getPageNumber()),
                          (n = x !== k || E !== S),
                          e.a(
                            2,
                            Promise.all([
                              m.a.getOfficeEditor().setDifferentFirstPage(o, z),
                              m.a.getOfficeEditor().setOddEven(W),
                              n &&
                                m.a
                                  .getOfficeEditor()
                                  .setHeaderFooterMargins(
                                    o,
                                    {
                                      headerDistanceToTop: k,
                                      footerDistanceToBottom: S,
                                    },
                                    V,
                                  ),
                            ]),
                          )
                        );
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        (Object(n.useEffect)(
          w(
            v().m(function e() {
              var t, n, r, a, i, d, l, c, p;
              return v().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      if (!o) {
                        e.n = 5;
                        break;
                      }
                      return (
                        (t = h.a.getPageNumber()),
                        (e.n = 1),
                        m.a.getOfficeEditor().getHeaderFooterMargins(t, V)
                      );
                    case 1:
                      return (
                        (n = e.v),
                        (r = n.headerDistanceToTop),
                        (a = n.footerDistanceToBottom),
                        A(r),
                        D(Object(O.j)(r)),
                        N(a),
                        L(Object(O.j)(a)),
                        M(r),
                        j(a),
                        (d = G),
                        (e.n = 2),
                        m.a.getOfficeEditor().getDifferentFirstPage(t)
                      );
                    case 2:
                      return (
                        (l = e.v),
                        d(l),
                        (c = Y),
                        (e.n = 3),
                        m.a.getOfficeEditor().getOddEven()
                      );
                    case 3:
                      return (
                        (p = e.v),
                        c(p),
                        (e.n = 4),
                        m.a
                          .getOfficeEditor()
                          .getMaxHeaderFooterDistance(t, b.m.PHYSICAL_POINT)
                      );
                    case 4:
                      ((i = e.v), K(i));
                    case 5:
                      return e.a(2);
                  }
              }, e);
            }),
          ),
          [o],
        ),
          Object(n.useEffect)(
            w(
              v().m(function e() {
                var t, o, n, r, a;
                return v().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if (V !== Q) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2);
                      case 1:
                        (X(V),
                          (t = Object(O.g)(k, Q, V)),
                          (o = Object(O.g)(S, Q, V)),
                          (n = Object(O.g)(J, b.m.PHYSICAL_POINT, V)),
                          (r = Object(O.v)(t, n)),
                          (a = Object(O.v)(o, n)),
                          A(r),
                          D(Object(O.j)(r)),
                          N(a),
                          L(Object(O.j)(a)));
                      case 2:
                        return e.a(2);
                    }
                }, e);
              }),
            ),
            [V, Q],
          ));
        var ee = function () {
            (t(l.a.closeElement(c.a.HEADER_FOOTER_OPTIONS_MODAL)),
              Object(O.i)());
          },
          te = [
            {
              id: "headerToTopInput",
              value: I,
              label: e("officeEditor.headerFooterOptionsModal.headerFromTop"),
              onChange: function (e) {
                return ((t = e.target.value), void D(t));
                var t;
              },
              onBlur: function (e) {
                return (
                  (t = e.target.valueAsNumber),
                  (o = Object(O.g)(J, b.m.PHYSICAL_POINT, V)),
                  (n = Object(O.v)(t, o)),
                  A(n),
                  void D(Object(O.j)(n))
                );
                var t, o, n;
              },
            },
            {
              id: "footerToBottomInput",
              value: R,
              label: e(
                "officeEditor.headerFooterOptionsModal.footerFromBottom",
              ),
              onChange: function (e) {
                return ((t = e.target.value), void L(t));
                var t;
              },
              onBlur: function (e) {
                return (
                  (t = e.target.valueAsNumber),
                  (o = Object(O.g)(J, b.m.PHYSICAL_POINT, V)),
                  (n = Object(O.v)(t, o)),
                  N(n),
                  void L(Object(O.j)(n))
                );
                var t, o, n;
              },
            },
          ];
        return (
          o &&
          r.a.createElement(
            "div",
            {
              className: "HeaderFooterOptionsModal",
              "data-element": c.a.HEADER_FOOTER_OPTIONS_MODAL,
            },
            r.a.createElement(
              s.a,
              {
                isOpen: o,
                title: e("officeEditor.headerFooterOptionsModal.title"),
                closehandler: ee,
                onCloseClick: ee,
                swipeToClose: !0,
              },
              r.a.createElement(
                "div",
                { className: "modal-body" },
                r.a.createElement(
                  "div",
                  { className: "title" },
                  e("officeEditor.margins"),
                ),
                r.a.createElement(
                  "div",
                  { className: "input-container" },
                  r.a.createElement(
                    "label",
                    {
                      id: "office-editor-margin-unit-label",
                      className: "modal-label",
                    },
                    e("".concat(b.x, "unitMeasurement")),
                  ),
                  r.a.createElement(g.a, {
                    id: "office-editor-margin-unit",
                    dataElement: c.a.OFFICE_EDITOR_MARGIN_UNIT,
                    labelledById: "office-editor-margin-unit-label",
                    className: "margin-unit-dropdown",
                    items: Object.values(b.m),
                    onClickItem: function (e) {
                      return t(l.a.setOfficeEditorUnitMeasurement(e));
                    },
                    getKey: function (e) {
                      return e;
                    },
                    currentSelectionKey: V,
                    width: "auto",
                  }),
                ),
                te.map(function (e) {
                  return r.a.createElement(
                    "div",
                    { key: e.id, className: "input-container" },
                    r.a.createElement(
                      "label",
                      { htmlFor: e.id, className: "modal-label" },
                      e.label,
                    ),
                    r.a.createElement(u.a, {
                      type: "number",
                      id: e.id,
                      onChange: e.onChange,
                      onBlur: e.onBlur,
                      value: e.value,
                      min: "0",
                      step: "0.1",
                    }),
                  );
                }),
                r.a.createElement(
                  "div",
                  { className: "title" },
                  e("officeEditor.headerFooterOptionsModal.layouts.layout"),
                ),
                r.a.createElement(f.a, {
                  id: "different-first-page",
                  label: e(
                    "officeEditor.headerFooterOptionsModal.layouts.differentFirstPage",
                  ),
                  "aria-label": e(
                    "officeEditor.headerFooterOptionsModal.layouts.differentFirstPage",
                  ),
                  checked: z,
                  "aria-checked": z,
                  onChange: function (e) {
                    return G(e.target.checked);
                  },
                }),
                r.a.createElement(f.a, {
                  id: "different-odd-even",
                  label: e(
                    "officeEditor.headerFooterOptionsModal.layouts.differentEvenOddPages",
                  ),
                  "aria-label": e(
                    "officeEditor.headerFooterOptionsModal.layouts.differentEvenOddPages",
                  ),
                  checked: W,
                  "aria-checked": W,
                  onChange: function (e) {
                    return Y(e.target.checked);
                  },
                }),
              ),
              r.a.createElement(
                "div",
                { className: "footer" },
                r.a.createElement(p.a, { onClick: Z, label: e("action.save") }),
              ),
            ),
          )
        );
      };
      t.default = H;
    },
  },
]);
//# sourceMappingURL=chunk.66.js.map
