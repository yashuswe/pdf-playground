(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    2040: function (t, n, e) {
      var o = e(35),
        r = e(2041);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, ""]]);
      var i = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function t(n, e = document) {
                const o = [];
                return (
                  e.querySelectorAll(n).forEach((t) => o.push(t)),
                  e.querySelectorAll("*").forEach((e) => {
                    e.shadowRoot && o.push(...t(n, e.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const e = [];
          for (let o = 0; o < n.length; o++) {
            const r = n[o];
            if (0 === o)
              (r.shadowRoot.appendChild(t),
                (t.onload = function () {
                  e.length > 0 &&
                    e.forEach((n) => {
                      n.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const n = t.cloneNode(!0);
              (r.shadowRoot.appendChild(n), e.push(n));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    2041: function (t, n, e) {
      ((n = t.exports = e(36)(!1)).push([
        t.i,
        ".open.OfficeEditorColumnsModal{visibility:visible}.closed.OfficeEditorColumnsModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.OfficeEditorColumnsModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.OfficeEditorColumnsModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.OfficeEditorColumnsModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.OfficeEditorColumnsModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.OfficeEditorColumnsModal .footer .modal-button.cancel:hover,.OfficeEditorColumnsModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.OfficeEditorColumnsModal .footer .modal-button.cancel,.OfficeEditorColumnsModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.OfficeEditorColumnsModal .footer .modal-button.cancel.disabled,.OfficeEditorColumnsModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.OfficeEditorColumnsModal .footer .modal-button.cancel.disabled span,.OfficeEditorColumnsModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.OfficeEditorColumnsModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.OfficeEditorColumnsModal .modal-container .wrapper .modal-content{padding:10px}.OfficeEditorColumnsModal .footer{flex-direction:row;width:100%;margin-top:13px}.OfficeEditorColumnsModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.OfficeEditorColumnsModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.OfficeEditorColumnsModal .footer .modal-button.confirm{margin-inline-start:4px}.OfficeEditorColumnsModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OfficeEditorColumnsModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OfficeEditorColumnsModal .footer .modal-button{padding:23px 8px}}.OfficeEditorColumnsModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OfficeEditorColumnsModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .OfficeEditorColumnsModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OfficeEditorColumnsModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OfficeEditorColumnsModal .swipe-indicator{width:32px}}.OfficeEditorColumnsModal{flex-direction:column}.OfficeEditorColumnsModal .modal-container{display:flex;flex-direction:column;height:auto;width:480px}.OfficeEditorColumnsModal .modal-body{padding:16px;display:flex;flex-direction:row;flex-wrap:wrap;font-size:var(--font-size-default);font-family:var(--font-family);grid-gap:16px;gap:16px}.OfficeEditorColumnsModal .modal-body .title{line-height:16px;font-weight:var(--font-weight-bold)}.OfficeEditorColumnsModal .input-container{display:flex;flex-direction:column;grid-gap:8px;gap:8px}.OfficeEditorColumnsModal .input-container .modal-label{color:var(--gray-12)}.OfficeEditorColumnsModal .input-container .ui__input__wrapper{width:auto;max-width:216px}.OfficeEditorColumnsModal .input-container .ui__input{border-color:var(--gray-6);position:relative}.OfficeEditorColumnsModal .input-container .ui__input.ui__input--focused{box-shadow:none;border-color:var(--focus-border)}.OfficeEditorColumnsModal .input-container .ui__input[\\:has\\(\\:disabled\\)]{border-color:var(--gray-5)}.OfficeEditorColumnsModal .input-container .ui__input:has(:disabled){border-color:var(--gray-5)}.OfficeEditorColumnsModal .input-container input{padding:8px 40px 8px 8px;height:32px;font-size:var(--font-size-default);width:100%}.OfficeEditorColumnsModal .input-container input[type=number]{-moz-appearance:textfield}.OfficeEditorColumnsModal .input-container input:disabled{opacity:1}.OfficeEditorColumnsModal .input-container input::-webkit-inner-spin-button,.OfficeEditorColumnsModal .input-container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.OfficeEditorColumnsModal .flex-half{flex-basis:calc(50% - 8px)}.OfficeEditorColumnsModal .flex-full{flex-basis:100%}.OfficeEditorColumnsModal .flex-third{flex-basis:calc(33.33333% - 8px)}.OfficeEditorColumnsModal .footer{padding:16px;display:flex;justify-content:flex-end;border-top:1px solid var(--gray-5)}.OfficeEditorColumnsModal .footer button{border:none;border-radius:4px;background:var(--primary-button);min-width:59px;width:auto;padding:8px 16px;height:32px;color:var(--primary-button-text)}.OfficeEditorColumnsModal .footer button:hover{background:var(--primary-button-hover)}.OfficeEditorColumnsModal .unit-dropdown.Dropdown{height:34px}.OfficeEditorColumnsModal .unit-dropdown .Dropdown__items{width:100%}.OfficeEditorColumnsModal .input-container .ui__input input[type=number].column-amount-input{-moz-appearance:auto;padding-inline-end:8px}.OfficeEditorColumnsModal .input-container .ui__input input.column-amount-input::-webkit-inner-spin-button,.OfficeEditorColumnsModal .input-container .ui__input input.column-amount-input::-webkit-outer-spin-button{-webkit-appearance:auto}.OfficeEditorColumnsModal .section{width:100%;border-top:1px solid var(--gray-5)}.OfficeEditorColumnsModal .section .section-label{font-weight:var(--font-weight-bold);padding:2px 0;margin:16px 0}.OfficeEditorColumnsModal .section .row{display:flex;align-items:center;grid-gap:8px;gap:8px}.OfficeEditorColumnsModal .section .row.columns-headers{padding:2px 0;margin-bottom:8px}.OfficeEditorColumnsModal .section .columns-container{height:156px;background-color:var(--gray-2);overflow:auto;border:1px solid var(--gray-5)}.OfficeEditorColumnsModal .section .columns-container .row{background-color:var(--gray-0);padding:7px}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2121: function (t, n, e) {
      "use strict";
      e.r(n);
      (e(9),
        e(10),
        e(14),
        e(38),
        e(21),
        e(20),
        e(12),
        e(44),
        e(22),
        e(18),
        e(26),
        e(16),
        e(40),
        e(24),
        e(42),
        e(43),
        e(8),
        e(91),
        e(56),
        e(17),
        e(19),
        e(11),
        e(13));
      var o = e(0),
        r = e.n(o),
        i = e(6),
        a = e(305),
        l = e(3),
        c = e(5),
        u = e(41),
        d = e(373),
        s = e(72),
        f = e(2083),
        p = e(1404),
        m = e(65),
        b = (e(617), e(118), e(133), e(111), e(4)),
        h = e(1),
        g = e(571),
        y = e(25);
      function x(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return M(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          E(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function v() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
          n,
          e = "function" == typeof Symbol ? Symbol : {},
          o = e.iterator || "@@iterator",
          r = e.toStringTag || "@@toStringTag";
        function i(e, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            u = Object.create(c.prototype);
          return (
            w(
              u,
              "_invoke",
              (function (e, o, r) {
                var i,
                  l,
                  c,
                  u = 0,
                  d = r || [],
                  s = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (n, e) {
                      return ((i = n), (l = 0), (c = t), (f.n = e), a);
                    },
                  };
                function p(e, o) {
                  for (
                    l = e, c = o, n = 0;
                    !s && u && !r && n < d.length;
                    n++
                  ) {
                    var r,
                      i = d[n],
                      p = f.p,
                      m = i[2];
                    e > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= p &&
                        ((r = e < 2 && p < i[1])
                          ? ((l = 0), (f.v = o), (f.n = i[1]))
                          : p < m &&
                            (r = e < 3 || i[0] > o || o > m) &&
                            ((i[4] = e), (i[5] = o), (f.n = m), (l = 0)));
                  }
                  if (r || e > 1) return a;
                  throw ((s = !0), o);
                }
                return function (r, d, m) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    s && 1 === d && p(d, m), l = d, c = m;
                    (n = l < 2 ? t : c) || !s;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (f.n = -1), p(l, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((l || (r = "next"), (n = i[r]))) {
                          if (!(n = n.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!n.done) return n;
                          ((c = n.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (n = i.return) && n.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = t;
                      } else if ((n = (s = f.n < 0) ? c : e.call(o, f)) !== a)
                        break;
                    } catch (n) {
                      ((i = t), (l = 1), (c = n));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: n, done: s };
                };
              })(e, r, i),
              !0,
            ),
            u
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function u() {}
        n = Object.getPrototypeOf;
        var d = [][o]
            ? n(n([][o]()))
            : (w((n = {}), o, function () {
                return this;
              }),
              n),
          s = (u.prototype = l.prototype = Object.create(d));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, u)
              : ((t.__proto__ = u), w(t, r, "GeneratorFunction")),
            (t.prototype = Object.create(s)),
            t
          );
        }
        return (
          (c.prototype = u),
          w(s, "constructor", u),
          w(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          w(u, r, "GeneratorFunction"),
          w(s),
          w(s, r, "Generator"),
          w(s, o, function () {
            return this;
          }),
          w(s, "toString", function () {
            return "[object Generator]";
          }),
          (v = function () {
            return { w: i, m: f };
          })()
        );
      }
      function w(t, n, e, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (t) {
          r = 0;
        }
        (w = function (t, n, e, o) {
          if (n)
            r
              ? r(t, n, {
                  value: e,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (t[n] = e);
          else {
            var i = function (n, e) {
              w(t, n, function (t) {
                return this._invoke(n, e, t);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(t, n, e, o);
      }
      function O(t, n, e, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void e(t);
        }
        l.done ? n(c) : Promise.resolve(c).then(o, r);
      }
      function C(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            var e =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (e = e.call(t)).next), 0 === n)) {
                  if (Object(e) !== e) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(e)).done) &&
                    (l.push(o.value), l.length !== n);
                    c = !0
                  );
              } catch (t) {
                ((u = !0), (r = t));
              } finally {
                try {
                  if (
                    !c &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
            }
          })(t, n) ||
          E(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function E(t, n) {
        if (t) {
          if ("string" == typeof t) return M(t, n);
          var e = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === e && t.constructor && (e = t.constructor.name),
            "Map" === e || "Set" === e
              ? Array.from(t)
              : "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? M(t, n)
                : void 0
          );
        }
      }
      function M(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, o = Array(n); e < n; e++) o[e] = t[e];
        return o;
      }
      var j = function () {
        var t = Object(i.e)(b.a.getOfficeEditorUnitMeasurement),
          n = C(Object(o.useState)(t), 2),
          e = n[0],
          r = n[1],
          a = C(Object(o.useState)(0), 2),
          l = a[0],
          c = a[1],
          u = C(Object(o.useState)([]), 2),
          d = u[0],
          s = u[1],
          f = C(Object(o.useState)([]), 2),
          p = f[0],
          w = f[1],
          E = C(Object(o.useState)(!0), 2),
          M = E[0],
          j = E[1],
          A = C(Object(o.useState)(0), 2),
          I = A[0],
          _ = A[1],
          S = C(Object(o.useState)(0), 2),
          k = S[0],
          N = S[1];
        (Object(o.useEffect)(function () {
          (function () {
            var n,
              e =
                ((n = v().m(function n() {
                  var e, o, i, a, l, u, d;
                  return v().w(function (n) {
                    for (;;)
                      switch (n.n) {
                        case 0:
                          return (
                            (n.n = 1),
                            h.a.getOfficeEditor().getEditingPageNumber()
                          );
                        case 1:
                          return (
                            (e = n.v),
                            (o = h.a.getOfficeEditor().getPageDimensions(e, t)),
                            (i = o.width),
                            (n.n = 2),
                            h.a.getOfficeEditor().getSectionMargins(t)
                          );
                        case 2:
                          return (
                            (a = n.v),
                            (n.n = 3),
                            h.a.getOfficeEditor().getSectionColumns(t)
                          );
                        case 3:
                          ((l = n.v),
                            (u = T(l, t)),
                            (d = Object(g.a)(l)),
                            r(t),
                            _(i - a.left - a.right),
                            c(Math.ceil(l.length / 2)),
                            j(d),
                            s(u),
                            w(D(u)));
                        case 4:
                          return n.a(2);
                      }
                  }, n);
                })),
                function () {
                  var t = this,
                    e = arguments;
                  return new Promise(function (o, r) {
                    var i = n.apply(t, e);
                    function a(t) {
                      O(i, o, r, a, l, "next", t);
                    }
                    function l(t) {
                      O(i, o, r, a, l, "throw", t);
                    }
                    a(void 0);
                  });
                });
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []),
          Object(o.useEffect)(
            function () {
              if (t !== e) {
                r(t);
                var n = Object(m.g)(I, e, t);
                _(n);
                var o = d.map(function (n) {
                  return {
                    width: Object(m.g)(n.width, e, t),
                    spacing: Object(m.g)(n.spacing, e, t),
                  };
                });
                (s(o), w(D(o)));
              }
            },
            [t, e],
          ));
        var T = function (t, n) {
            for (var e = [], o = 0; o < t.length; o += 2) {
              var r,
                i = t[o],
                a =
                  null !== (r = t[o + 1]) && void 0 !== r ? r : Object(m.l)(n);
              e.push({ width: i, spacing: a });
            }
            return e;
          },
          D = function (t) {
            return t.map(function (t) {
              return {
                width: Object(m.j)(t.width),
                spacing: Object(m.j)(t.spacing),
              };
            });
          };
        (Object(o.useEffect)(
          function () {
            N(Math.floor(I / Object(m.o)(t)));
          },
          [I, t],
        ),
          Object(o.useEffect)(
            function () {
              d.length < 1 || (M && F(d));
            },
            [M, d.length, I],
          ));
        var P = function (n, e) {
            if (n === e.length) return e;
            if (n < e.length) return e.slice(0, n);
            for (var o = x(e), r = e.length + 1; r <= n; r++)
              o.push({ width: 0, spacing: Object(m.l)(t) });
            return o;
          },
          F = function (n) {
            var e = n.length,
              o = n[0].spacing;
            if (1 === e) {
              var r = [{ width: I, spacing: o }];
              return (s(r), void w(D(r)));
            }
            var i = e - 1,
              a = i * o,
              l = I - a,
              c = Object(m.o)(t) * e;
            if (l < c) {
              var u = c - l;
              ((l += u), (a -= u), (o = Object(m.h)(a / i)));
            }
            var d = new Array(e).fill().map(function () {
              return { width: Object(m.h)(l / e), spacing: Math.max(o, 0) };
            });
            (s(d), w(D(d)));
          };
        return {
          columnAmount: l,
          inputColumns: p,
          equalColumns: M,
          maxAllowedColumns: k,
          currentUnit: t,
          handleColumnAmountChange: function (t) {
            if ("" !== t) {
              var n = parseInt(t);
              if (0 !== n) {
                ((isNaN(n) || n < 0) && (n = 1), n > k && (n = k), c(n));
                var e = P(n, d);
                (s(e), w(D(e)), F(e));
              } else c(n);
            } else c(t);
          },
          handleColumnChange: function (t, n, e) {
            var o = x(p);
            ((o[n] = {
              width: (e === y.c.WIDTH ? t : o[n].width).toString(),
              spacing: (e === y.c.SPACING ? t : o[n].spacing).toString(),
            }),
              w(o));
          },
          handleColumnBlur: function (n, e, o) {
            var r = d.length,
              i = Object(m.o)(t),
              a = M ? I / r : I - (r - 1) * i,
              l = M ? (I - i * r) / (r - 1) : I - i * r,
              c = o === y.c.WIDTH ? i : 0,
              u = o === y.c.WIDTH ? a : l,
              f = parseFloat(n);
            (isNaN(f) || f < c) && (f = c);
            var p = (function (t, n, e, o) {
              var r = x(o),
                i = o.length;
              if (M) {
                if (e === y.c.WIDTH) {
                  var a = I - t * i,
                    l = Object(m.h)(a / (i - 1));
                  r = r.map(function () {
                    return { width: t, spacing: l };
                  });
                } else if (e === y.c.SPACING) {
                  var c = I - t * (i - 1),
                    u = Object(m.h)(c / i);
                  r = r.map(function () {
                    return { width: u, spacing: t };
                  });
                }
                return r;
              }
              r[n] = {
                width: e === y.c.WIDTH ? t : r[n].width,
                spacing: e === y.c.SPACING ? t : r[n].spacing,
              };
              var d = parseFloat(r[i - 1].spacing),
                s =
                  r.reduce(function (t, n) {
                    return t + parseFloat(n.width) + parseFloat(n.spacing);
                  }, -d) - I,
                f = {};
              if (
                ((r = x(
                  (f = Object(g.b)({
                    columns: r,
                    excessAmount: s,
                    startIndex: n + 1,
                    endIndex: i - 1,
                    numberOfColumns: i - n - 1,
                    type: y.c.WIDTH,
                  })).nextColumns,
                )),
                0 === (s = f.excessAmountRemaining))
              )
                return r;
              if (e === y.c.WIDTH) {
                if (
                  ((r = x(
                    (f = Object(g.c)({
                      columns: r,
                      excessAmount: s,
                      startIndex: i - 2,
                      endIndex: 0,
                      numberOfColumns: i - 1,
                      type: y.c.SPACING,
                    })).nextColumns,
                  )),
                  0 === (s = f.excessAmountRemaining))
                )
                  return r;
                if (
                  ((r = x(
                    (f = Object(g.c)({
                      columns: r,
                      excessAmount: s,
                      startIndex: n - 1,
                      endIndex: 0,
                      numberOfColumns: n,
                      type: y.c.WIDTH,
                    })).nextColumns,
                  )),
                  0 === (s = f.excessAmountRemaining))
                )
                  return r;
              } else if (e === y.c.SPACING) {
                if (
                  ((r = x(
                    (f = Object(g.b)({
                      columns: r,
                      excessAmount: s,
                      startIndex: 0,
                      endIndex: n,
                      numberOfColumns: n + 1,
                      type: y.c.WIDTH,
                    })).nextColumns,
                  )),
                  0 === (s = f.excessAmountRemaining))
                )
                  return r;
                r = x(
                  (f = Object(g.c)({
                    columns: r,
                    excessAmount: s,
                    startIndex: i - 2,
                    endIndex: 0,
                    numberOfColumns: i - 2,
                    type: y.c.SPACING,
                    skipIndex: n,
                  })).nextColumns,
                );
              }
              return r;
            })((f = Math.min(f, u)), e, o, d);
            (s(p), w(D(p)));
          },
          handleColumnAmountBlur: function (t) {
            t !== d.length && c(d.length);
          },
          toggleEqualColumns: function () {
            j(!M);
          },
          onApply: function () {
            var n = d.reduce(function (t, n) {
              return (t.push(parseFloat(n.width), parseFloat(n.spacing)), t);
            }, []);
            (n.pop(), h.a.getOfficeEditor().setCustomSectionColumns(n, t));
          },
        };
      };
      e(2040);
      function A() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
          n,
          e = "function" == typeof Symbol ? Symbol : {},
          o = e.iterator || "@@iterator",
          r = e.toStringTag || "@@toStringTag";
        function i(e, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            u = Object.create(c.prototype);
          return (
            I(
              u,
              "_invoke",
              (function (e, o, r) {
                var i,
                  l,
                  c,
                  u = 0,
                  d = r || [],
                  s = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (n, e) {
                      return ((i = n), (l = 0), (c = t), (f.n = e), a);
                    },
                  };
                function p(e, o) {
                  for (
                    l = e, c = o, n = 0;
                    !s && u && !r && n < d.length;
                    n++
                  ) {
                    var r,
                      i = d[n],
                      p = f.p,
                      m = i[2];
                    e > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= p &&
                        ((r = e < 2 && p < i[1])
                          ? ((l = 0), (f.v = o), (f.n = i[1]))
                          : p < m &&
                            (r = e < 3 || i[0] > o || o > m) &&
                            ((i[4] = e), (i[5] = o), (f.n = m), (l = 0)));
                  }
                  if (r || e > 1) return a;
                  throw ((s = !0), o);
                }
                return function (r, d, m) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    s && 1 === d && p(d, m), l = d, c = m;
                    (n = l < 2 ? t : c) || !s;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (f.n = -1), p(l, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((l || (r = "next"), (n = i[r]))) {
                          if (!(n = n.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!n.done) return n;
                          ((c = n.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (n = i.return) && n.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = t;
                      } else if ((n = (s = f.n < 0) ? c : e.call(o, f)) !== a)
                        break;
                    } catch (n) {
                      ((i = t), (l = 1), (c = n));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: n, done: s };
                };
              })(e, r, i),
              !0,
            ),
            u
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function u() {}
        n = Object.getPrototypeOf;
        var d = [][o]
            ? n(n([][o]()))
            : (I((n = {}), o, function () {
                return this;
              }),
              n),
          s = (u.prototype = l.prototype = Object.create(d));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, u)
              : ((t.__proto__ = u), I(t, r, "GeneratorFunction")),
            (t.prototype = Object.create(s)),
            t
          );
        }
        return (
          (c.prototype = u),
          I(s, "constructor", u),
          I(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          I(u, r, "GeneratorFunction"),
          I(s),
          I(s, r, "Generator"),
          I(s, o, function () {
            return this;
          }),
          I(s, "toString", function () {
            return "[object Generator]";
          }),
          (A = function () {
            return { w: i, m: f };
          })()
        );
      }
      function I(t, n, e, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (t) {
          r = 0;
        }
        (I = function (t, n, e, o) {
          if (n)
            r
              ? r(t, n, {
                  value: e,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (t[n] = e);
          else {
            var i = function (n, e) {
              I(t, n, function (t) {
                return this._invoke(n, e, t);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(t, n, e, o);
      }
      function _(t, n, e, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void e(t);
        }
        l.done ? n(c) : Promise.resolve(c).then(o, r);
      }
      function S(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            var e =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (e = e.call(t)).next), 0 === n)) {
                  if (Object(e) !== e) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(e)).done) &&
                    (l.push(o.value), l.length !== n);
                    c = !0
                  );
              } catch (t) {
                ((u = !0), (r = t));
              } finally {
                try {
                  if (
                    !c &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
            }
          })(t, n) ||
          (function (t, n) {
            if (t) {
              if ("string" == typeof t) return k(t, n);
              var e = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === e && t.constructor && (e = t.constructor.name),
                "Map" === e || "Set" === e
                  ? Array.from(t)
                  : "Arguments" === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    ? k(t, n)
                    : void 0
              );
            }
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function k(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, o = Array(n); e < n; e++) o[e] = t[e];
        return o;
      }
      var N = function () {
        var t = S(Object(a.a)(), 1)[0],
          n = Object(i.d)(),
          e = t("".concat(y.x, "column")),
          o = j(),
          b = o.columnAmount,
          h = o.inputColumns,
          g = o.equalColumns,
          x = o.maxAllowedColumns,
          v = o.currentUnit,
          w = o.handleColumnAmountChange,
          O = o.handleColumnChange,
          C = o.handleColumnBlur,
          E = o.handleColumnAmountBlur,
          M = o.toggleEqualColumns,
          I = o.onApply,
          k = function () {
            return n(l.a.closeElement(c.a.OFFICE_EDITOR_COLUMNS_MODAL));
          },
          N = function () {
            (k(), Object(m.i)());
          },
          T = (function () {
            var t,
              n =
                ((t = A().m(function t() {
                  return A().w(function (t) {
                    for (;;)
                      switch (t.n) {
                        case 0:
                          (I(), k());
                        case 1:
                          return t.a(2);
                      }
                  }, t);
                })),
                function () {
                  var n = this,
                    e = arguments;
                  return new Promise(function (o, r) {
                    var i = t.apply(n, e);
                    function a(t) {
                      _(i, o, r, a, l, "next", t);
                    }
                    function l(t) {
                      _(i, o, r, a, l, "throw", t);
                    }
                    a(void 0);
                  });
                });
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          D = Object.values(y.c).map(function (n) {
            return {
              id: "".concat(n, "ColumnInput"),
              label: t("".concat(y.x, "columnsModal.").concat(n)),
              onChange: function (t, e) {
                return O(t, e, n);
              },
              onBlur: function (t, e) {
                return C(t, e, n);
              },
              type: n,
            };
          });
        return r.a.createElement(
          "div",
          {
            className: "OfficeEditorColumnsModal",
            "data-element": c.a.OFFICE_EDITOR_COLUMNS_MODAL,
          },
          r.a.createElement(
            d.a,
            {
              title: t("".concat(y.x, "columnsModal.title")),
              closehandler: N,
              onCloseClick: N,
              swipeToClose: !0,
              isOpen: !0,
            },
            r.a.createElement(
              "div",
              { className: "modal-body" },
              r.a.createElement(
                "div",
                { className: "input-container flex-half" },
                r.a.createElement(
                  "label",
                  { htmlFor: "columnAmountInput", className: "modal-label" },
                  t("".concat(y.x, "columnsModal.columnAmount")),
                ),
                r.a.createElement(f.a, {
                  type: "number",
                  id: "columnAmountInput",
                  onBlur: function (t) {
                    return E(t.target.valueAsNumber);
                  },
                  onChange: function (t) {
                    return w(t.target.value);
                  },
                  value: b,
                  min: "1",
                  max: x,
                  step: "1",
                  className: "column-amount-input",
                }),
              ),
              r.a.createElement(
                "div",
                { className: "input-container flex-half" },
                r.a.createElement(
                  "label",
                  {
                    id: "office-editor-column-unit-label",
                    className: "modal-label",
                  },
                  t("".concat(y.x, "unitMeasurement")),
                ),
                r.a.createElement(s.a, {
                  id: "office-editor-column-unit",
                  dataElement: c.a.OFFICE_EDITOR_COLUMN_UNIT,
                  labelledById: "office-editor-column-unit-label",
                  className: "unit-dropdown",
                  items: Object.values(y.m),
                  onClickItem: function (t) {
                    return n(l.a.setOfficeEditorUnitMeasurement(t));
                  },
                  getKey: function (t) {
                    return t;
                  },
                  currentSelectionKey: v,
                  width: "auto",
                }),
              ),
              r.a.createElement(
                "div",
                { className: "section" },
                r.a.createElement(
                  "div",
                  { className: "section-label" },
                  t("".concat(y.x, "columnsModal.widthAndSpacing")),
                ),
                r.a.createElement(
                  "div",
                  { className: "columns-headers row" },
                  r.a.createElement(
                    "div",
                    { className: "flex-third" },
                    t("".concat(y.x, "columnsModal.columnNumber")),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "flex-third" },
                    t("".concat(y.x, "columnsModal.width")),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "flex-third" },
                    t("".concat(y.x, "columnsModal.spacing")),
                  ),
                ),
                r.a.createElement(
                  "div",
                  { className: "columns-container" },
                  h.map(function (t, n) {
                    var o = n + 1;
                    return r.a.createElement(
                      "div",
                      { key: o, className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "row-label flex-third" },
                        e,
                        " ",
                        o,
                      ),
                      D.map(function (i) {
                        var a = n === h.length - 1,
                          l = i.type === y.c.SPACING,
                          c = !(a && l),
                          u = 1 === h.length || (g && 1 !== o);
                        return (
                          c &&
                          r.a.createElement(
                            "div",
                            {
                              key: "".concat(o, " ").concat(i.id),
                              className: "input-container flex-third",
                            },
                            r.a.createElement(f.a, {
                              type: "number",
                              id: "".concat(i.id, "-").concat(o),
                              onChange: function (t) {
                                return i.onChange(t.target.value, n);
                              },
                              onBlur: function (t) {
                                return i.onBlur(t.target.valueAsNumber, n);
                              },
                              value: t[i.type],
                              "aria-label": ""
                                .concat(e, " ")
                                .concat(o, " ")
                                .concat(i.label),
                              disabled: u,
                              min: "0",
                              step: "0.1",
                            }),
                          )
                        );
                      }),
                    );
                  }),
                ),
              ),
              r.a.createElement(p.a, {
                id: "equal-columns-checkbox",
                label: t("".concat(y.x, "columnsModal.equalColumns")),
                "aria-label": t("".concat(y.x, "columnsModal.equalColumns")),
                checked: g,
                "aria-checked": g,
                onChange: M,
              }),
            ),
            r.a.createElement(
              "div",
              { className: "footer" },
              r.a.createElement(u.a, { onClick: T, label: t("action.apply") }),
            ),
          ),
        );
      };
      n.default = N;
    },
  },
]);
//# sourceMappingURL=chunk.72.js.map
