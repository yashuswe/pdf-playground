(window.webpackJsonp = window.webpackJsonp || []).push([
  [76],
  {
    1990: function (e, o, n) {
      var a = n(35),
        t = n(1991);
      "string" == typeof (t = t.__esModule ? t.default : t) &&
        (t = [[e.i, t, ""]]);
      var r = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let o;
          ((o = document.getElementsByTagName("apryse-webviewer")),
            o.length ||
              (o = (function e(o, n = document) {
                const a = [];
                return (
                  n.querySelectorAll(o).forEach((e) => a.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && a.push(...e(o, n.shadowRoot));
                  }),
                  a
                );
              })("apryse-webviewer")));
          const n = [];
          for (let a = 0; a < o.length; a++) {
            const t = o[a];
            if (0 === a)
              (t.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((o) => {
                      o.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const o = e.cloneNode(!0);
              (t.shadowRoot.appendChild(o), n.push(o));
            }
          }
        },
        singleton: !1,
      };
      a(t, r);
      e.exports = t.locals || {};
    },
    1991: function (e, o, n) {
      ((o = e.exports = n(36)(!1)).push([
        e.i,
        ".open.SaveModal{visibility:visible}.closed.SaveModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SaveModal .footer .modal-button.confirm:hover,.SaveModal .modal-container .footer button:hover:not(:disabled){background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.SaveModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.SaveModal .footer .modal-button.confirm.disabled,.SaveModal .modal-container .footer button:disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.SaveModal .footer .modal-button.confirm.disabled span,.SaveModal .modal-container .footer button:disabled span{color:var(--primary-button-text)}.SaveModal .footer .modal-button.cancel:hover,.SaveModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.SaveModal .footer .modal-button.cancel,.SaveModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.SaveModal .footer .modal-button.cancel.disabled,.SaveModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.SaveModal .footer .modal-button.cancel.disabled span,.SaveModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.SaveModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.SaveModal .modal-container .wrapper .modal-content{padding:10px}.SaveModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.SaveModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.SaveModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.SaveModal .footer .modal-button.confirm{margin-inline-start:4px}.SaveModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SaveModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SaveModal .footer .modal-button{padding:23px 8px}}.SaveModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SaveModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SaveModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SaveModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SaveModal .swipe-indicator{width:32px}}.SaveModal{flex-direction:column}.SaveModal .modal-container{overflow:visible;display:flex;flex-direction:column;justify-content:space-evenly;height:auto;width:480px;padding:0}.SaveModal .modal-container .header{border-bottom:1px solid var(--gray-5);padding:16px;height:64px;width:100%;display:flex;align-items:center;justify-content:space-between}.SaveModal .modal-container .header .header-text{font-size:var(--font-size-large);font-weight:var(--font-weight-bold)}.SaveModal .modal-container .header .Button{width:32px;height:32px}.SaveModal .modal-container .modal-body{padding:16px;display:flex;flex-direction:column;font-size:var(--font-size-default);font-family:var(--font-family);grid-gap:12px;gap:12px}.SaveModal .modal-container .modal-body .title{line-height:16px;font-weight:var(--font-weight-bold)}.SaveModal .modal-container .modal-body .input-container{align-items:baseline;display:flex;grid-gap:16px;gap:16px;height:32px;margin-bottom:20px}.SaveModal .modal-container .modal-body .input-container .label{min-width:60px}.SaveModal .modal-container .modal-body .input-container .ui__input{border-color:var(--border)}.SaveModal .modal-container .modal-body .input-container .ui__input.ui__input--focused{box-shadow:none;border-color:var(--focus-border)}.SaveModal .modal-container .modal-body .input-container .ui__input.ui__input--message-warning{border-color:var(--error-border-color)}.SaveModal .modal-container .modal-body .input-container .ui__input.ui__input--message-warning .ui__icon svg{fill:var(--error-border-color)}.SaveModal .modal-container .modal-body .input-container .ui__input__messageText{color:var(--error-text-color);margin:8px 0;font-size:13px}.SaveModal .modal-container .modal-body .input-container input{padding:8px;height:32px;font-size:var(--font-size-default);flex:1 1 auto}.SaveModal .modal-container .modal-body .input-container .Dropdown__wrapper{height:32px;flex:1 1 auto}.SaveModal .modal-container .modal-body .input-container .Dropdown__wrapper .Dropdown{height:100%;width:100%!important}.SaveModal .modal-container .modal-body .input-container .Dropdown__wrapper .Dropdown .picked-option .picked-option-text{width:auto;flex:none}.SaveModal .modal-container .modal-body .input-container .Dropdown__wrapper .Dropdown .picked-option .arrow{flex:none}.SaveModal .modal-container .modal-body .input-container .Dropdown__wrapper .Dropdown__items{width:100%!important}.SaveModal .modal-container .modal-body .radio-container{grid-gap:8px;gap:8px;height:90px;display:grid;grid-template-columns:repeat(2,1fr)}.SaveModal .modal-container .modal-body .radio-container .ui__choice--checked .ui__choice__input__check{border-color:var(--blue-5)}.SaveModal .modal-container .modal-body .radio-container .ui__choice__input__check{border-color:var(--gray-7)}.SaveModal .modal-container .modal-body .radio-container .page-number-input-container.error .page-number-input{border:1px solid var(--error-border-color)}.SaveModal .modal-container .modal-body .radio-container .page-number-input-container .page-number-input{width:208px}.SaveModal .modal-container .modal-body .radio-container .page-number-input-container .specifyPagesChoiceLabel{display:flex;margin-bottom:8px}.SaveModal .modal-container .modal-body .radio-container .page-number-input-container .specifyPagesChoiceLabel .specifyPagesExampleLabel{margin-inline-start:4px;color:var(--faded-text)}.SaveModal .modal-container .modal-body .radio-container .page-range-column{display:grid;grid-gap:16px;gap:16px;align-content:baseline}.SaveModal .modal-container .modal-body .radio-container .page-range-column.custom-page-ranges .ui__choice{align-items:unset}.SaveModal .modal-container .modal-body .checkbox-container{display:grid;grid-template-columns:repeat(2,1fr)}.SaveModal .modal-container .footer{padding:16px;display:flex;justify-content:flex-end;border-top:1px solid var(--gray-5)}.SaveModal .modal-container .footer button{border:none;border-radius:4px;background:var(--primary-button)!important;width:82px;height:32px;color:var(--primary-button-text)}",
        "",
      ]),
        (o.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2131: function (e, o, n) {
      "use strict";
      n.r(o);
      (n(9),
        n(10),
        n(14),
        n(38),
        n(81),
        n(21),
        n(50),
        n(20),
        n(12),
        n(267),
        n(44),
        n(22),
        n(18),
        n(26),
        n(16),
        n(40),
        n(24),
        n(42),
        n(43),
        n(8),
        n(56),
        n(17),
        n(19),
        n(11),
        n(13));
      var a = n(0),
        t = n.n(a),
        r = n(6),
        i = n(4),
        l = n(3),
        d = n(305),
        c = n(5),
        p = n(41),
        s = n(2083),
        u = n(1404),
        m = n(1),
        b = n(15),
        f = n.n(b),
        v = n(72),
        g = n(476),
        h = n(186),
        x = n(65),
        y = n(57),
        w = n(555),
        S = n.n(w),
        E = n(373),
        M = n(182);
      n(1990);
      function _() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          o,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          t = n.toStringTag || "@@toStringTag";
        function r(n, a, t, r) {
          var d = a && a.prototype instanceof l ? a : l,
            c = Object.create(d.prototype);
          return (
            O(
              c,
              "_invoke",
              (function (n, a, t) {
                var r,
                  l,
                  d,
                  c = 0,
                  p = t || [],
                  s = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: m,
                    f: m.bind(e, 4),
                    d: function (o, n) {
                      return ((r = o), (l = 0), (d = e), (u.n = n), i);
                    },
                  };
                function m(n, a) {
                  for (
                    l = n, d = a, o = 0;
                    !s && c && !t && o < p.length;
                    o++
                  ) {
                    var t,
                      r = p[o],
                      m = u.p,
                      b = r[2];
                    n > 3
                      ? (t = b === a) &&
                        ((d = r[(l = r[4]) ? 5 : ((l = 3), 3)]),
                        (r[4] = r[5] = e))
                      : r[0] <= m &&
                        ((t = n < 2 && m < r[1])
                          ? ((l = 0), (u.v = a), (u.n = r[1]))
                          : m < b &&
                            (t = n < 3 || r[0] > a || a > b) &&
                            ((r[4] = n), (r[5] = a), (u.n = b), (l = 0)));
                  }
                  if (t || n > 1) return i;
                  throw ((s = !0), a);
                }
                return function (t, p, b) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    s && 1 === p && m(p, b), l = p, d = b;
                    (o = l < 2 ? e : d) || !s;

                  ) {
                    r ||
                      (l
                        ? l < 3
                          ? (l > 1 && (u.n = -1), m(l, d))
                          : (u.n = d)
                        : (u.v = d));
                    try {
                      if (((c = 2), r)) {
                        if ((l || (t = "next"), (o = r[t]))) {
                          if (!(o = o.call(r, d)))
                            throw TypeError("iterator result is not an object");
                          if (!o.done) return o;
                          ((d = o.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (o = r.return) && o.call(r),
                            l < 2 &&
                              ((d = TypeError(
                                "The iterator does not provide a '" +
                                  t +
                                  "' method",
                              )),
                              (l = 1)));
                        r = e;
                      } else if ((o = (s = u.n < 0) ? d : n.call(a, u)) !== i)
                        break;
                    } catch (o) {
                      ((r = e), (l = 1), (d = o));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: o, done: s };
                };
              })(n, t, r),
              !0,
            ),
            c
          );
        }
        var i = {};
        function l() {}
        function d() {}
        function c() {}
        o = Object.getPrototypeOf;
        var p = [][a]
            ? o(o([][a]()))
            : (O((o = {}), a, function () {
                return this;
              }),
              o),
          s = (c.prototype = l.prototype = Object.create(p));
        function u(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), O(e, t, "GeneratorFunction")),
            (e.prototype = Object.create(s)),
            e
          );
        }
        return (
          (d.prototype = c),
          O(s, "constructor", c),
          O(c, "constructor", d),
          (d.displayName = "GeneratorFunction"),
          O(c, t, "GeneratorFunction"),
          O(s),
          O(s, t, "Generator"),
          O(s, a, function () {
            return this;
          }),
          O(s, "toString", function () {
            return "[object Generator]";
          }),
          (_ = function () {
            return { w: r, m: u };
          })()
        );
      }
      function O(e, o, n, a) {
        var t = Object.defineProperty;
        try {
          t({}, "", {});
        } catch (e) {
          t = 0;
        }
        (O = function (e, o, n, a) {
          if (o)
            t
              ? t(e, o, {
                  value: n,
                  enumerable: !a,
                  configurable: !a,
                  writable: !a,
                })
              : (e[o] = n);
          else {
            var r = function (o, n) {
              O(e, o, function (e) {
                return this._invoke(o, n, e);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(e, o, n, a);
      }
      function D(e, o, n, a, t, r, i) {
        try {
          var l = e[r](i),
            d = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? o(d) : Promise.resolve(d).then(a, t);
      }
      function k(e, o) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, o) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var a,
                t,
                r,
                i,
                l = [],
                d = !0,
                c = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === o)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (a = r.call(n)).done) &&
                    (l.push(a.value), l.length !== o);
                    d = !0
                  );
              } catch (e) {
                ((c = !0), (t = e));
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw t;
                }
              }
              return l;
            }
          })(e, o) ||
          (function (e, o) {
            if (e) {
              if ("string" == typeof e) return A(e, o);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? A(e, o)
                    : void 0
              );
            }
          })(e, o) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function A(e, o) {
        (null == o || o > e.length) && (o = e.length);
        for (var n = 0, a = Array(o); n < o; n++) a[n] = e[n];
        return a;
      }
      var j = "all",
        F = "currentPage",
        T = "currentView",
        C = "specify",
        I = {
          OFFICE: {
            label: "OFFICE (*.pptx,*.docx,*.xlsx)",
            extension: y.a.OFFICE,
          },
          PDF: { label: "PDF (*.pdf)", extension: y.a.PDF },
          IMAGE: { label: "PNG (*.png)", extension: "png" },
          OFFICE_EDITOR: {
            label: "Word Document (*.docx)",
            extension: y.a.OFFICE,
          },
          SPREADSHEET_EDITOR: {
            label: "Excel Document (*.xlsx)",
            extension: y.a.SPREADSHEET_EDITOR,
          },
        },
        P = [".ppt", ".xls"],
        N = function () {
          var e = Object(r.f)(),
            o = Object(r.d)(),
            n = Object(d.a)().t,
            b = Object(r.e)(function (e) {
              return i.a.isElementOpen(e, c.a.SAVE_MODAL);
            }),
            w = Object(r.e)(function (e) {
              return i.a.getActiveDocumentViewerKey(e);
            }),
            O = Object(r.e)(i.a.isSpreadsheetEditorModeEnabled),
            A = [I.PDF, I.IMAGE],
            N = k(Object(a.useState)(A), 2),
            R = N[0],
            L = N[1],
            H = k(Object(a.useState)(""), 2),
            z = H[0],
            G = H[1],
            V = k(Object(a.useState)(R[0]), 2),
            W = V[0],
            B = V[1],
            q = k(Object(a.useState)(j), 2),
            U = q[0],
            J = q[1],
            K = k(Object(a.useState)(), 2),
            $ = K[0],
            Q = K[1],
            X = k(Object(a.useState)(!0), 2),
            Y = X[0],
            Z = X[1],
            ee = k(Object(a.useState)(!1), 2),
            oe = ee[0],
            ne = ee[1],
            ae = k(Object(a.useState)(1), 2),
            te = ae[0],
            re = ae[1],
            ie = k(Object(a.useState)(""), 2),
            le = ie[0],
            de = ie[1];
          (Object(a.useEffect)(
            function () {
              var e = (function () {
                  var e,
                    o =
                      ((e = _().m(function e() {
                        var o, n, a, t, r, i;
                        return _().w(function (e) {
                          for (;;)
                            switch (e.n) {
                              case 0:
                                if (!(o = m.a.getDocument(w))) {
                                  e.n = 4;
                                  break;
                                }
                                if (
                                  (B(I.PDF),
                                  L(A),
                                  (n = o.getFilename()),
                                  (a = n.substring(0, n.lastIndexOf(".")) || n),
                                  G(a),
                                  (t = o.getType()) !== y.a.OFFICE)
                                ) {
                                  e.n = 2;
                                  break;
                                }
                                return (
                                  (r = n.split(".")),
                                  (i = ".".concat(r[r.length - 1])),
                                  P.includes(i) || L([].concat(A, [I.OFFICE])),
                                  (e.n = 1),
                                  o.getDocumentCompletePromise()
                                );
                              case 1:
                                e.n = 3;
                                break;
                              case 2:
                                t === y.a.OFFICE_EDITOR
                                  ? (L([I.OFFICE_EDITOR, I.PDF]),
                                    B(I.OFFICE_EDITOR))
                                  : t === y.a.SPREADSHEET_EDITOR &&
                                    (L([I.SPREADSHEET_EDITOR, I.PDF]),
                                    B(I.SPREADSHEET_EDITOR));
                              case 3:
                                re(m.a.getTotalPages(w));
                              case 4:
                                return e.a(2);
                            }
                        }, e);
                      })),
                      function () {
                        var o = this,
                          n = arguments;
                        return new Promise(function (a, t) {
                          var r = e.apply(o, n);
                          function i(e) {
                            D(r, a, t, i, l, "next", e);
                          }
                          function l(e) {
                            D(r, a, t, i, l, "throw", e);
                          }
                          i(void 0);
                        });
                      });
                  return function () {
                    return o.apply(this, arguments);
                  };
                })(),
                n = function () {
                  (G(""),
                    re(0),
                    L(A),
                    B(A[0]),
                    o(l.a.closeElement(c.a.SAVE_MODAL)));
                };
              return (
                e(),
                m.a.addEventListener("documentUnloaded", n, void 0, w),
                m.a.addEventListener("documentLoaded", e, void 0, w),
                function () {
                  (m.a.removeEventListener("documentUnloaded", n, w),
                    m.a.removeEventListener("documentLoaded", e, w));
                }
              );
            },
            [w],
          ),
            Object(a.useEffect)(
              function () {
                var e = m.a.getDocument(w);
                if (Object(x.q)() && e) {
                  B(I.OFFICE_EDITOR);
                  var o = e.getFilename(),
                    n = o.substring(0, o.lastIndexOf(".")) || o;
                  G(n);
                }
              },
              [b],
            ));
          var ce = function () {
              return o(l.a.closeElement(c.a.SAVE_MODAL));
            },
            pe = Object(M.a)(ce),
            se = function () {
              return de("");
            },
            ue = k(Object(a.useState)(!1), 2),
            me = ue[0],
            be = ue[1],
            fe = ((le || !me) && U === C) || !z,
            ve = "office" === W.extension || Object(x.q)() || O,
            ge = t.a.createElement(
              "div",
              {
                className: f()("page-number-input-container", { error: !!le }),
              },
              t.a.createElement(
                "label",
                { className: "specifyPagesChoiceLabel" },
                t.a.createElement("span", null, n("option.print.specifyPages")),
                U === C &&
                  t.a.createElement(
                    "span",
                    { className: "specifyPagesExampleLabel" },
                    "- ",
                    n("option.thumbnailPanel.multiSelectPagesExample"),
                  ),
              ),
              U === C &&
                t.a.createElement(g.a, {
                  selectedPageNumbers: $,
                  pageCount: te,
                  onBlurHandler: Q,
                  onSelectedPageNumbersChange: function (e) {
                    (me || be(!0), e.length > 0 && se());
                  },
                  onError: function () {
                    return de(n("saveModal.pageError") + te);
                  },
                  pageNumberError: le,
                }),
            );
          return t.a.createElement(
            "div",
            {
              className: f()("SaveModal", { open: b, closed: !b }),
              "data-element": c.a.SAVE_MODAL,
            },
            t.a.createElement(
              E.a,
              {
                isOpen: b,
                title: n("saveModal.saveAs"),
                closeHandler: ce,
                onCloseClick: ce,
                swipeToClose: !0,
              },
              t.a.createElement(
                "div",
                { className: "modal-body" },
                t.a.createElement(
                  "div",
                  { className: "title" },
                  n("saveModal.general"),
                ),
                t.a.createElement(
                  "div",
                  { className: "input-container" },
                  t.a.createElement(
                    "label",
                    { htmlFor: "fileNameInput", className: "label" },
                    n("saveModal.fileName"),
                  ),
                  t.a.createElement(s.a, {
                    type: "text",
                    id: "fileNameInput",
                    "data-testid": "fileNameInput",
                    onChange: function (e) {
                      var o;
                      G(
                        null == e || null === (o = e.target) || void 0 === o
                          ? void 0
                          : o.value,
                      );
                    },
                    value: z,
                    fillWidth: "false",
                    padMessageText: !0,
                    messageText:
                      "" === z ? n("saveModal.fileNameCannotBeEmpty") : "",
                    message: "" === z ? "warning" : "default",
                  }),
                ),
                t.a.createElement(
                  "div",
                  { className: "input-container" },
                  t.a.createElement(
                    "div",
                    { className: "label", id: "file-type-dropdown-label" },
                    n("saveModal.fileType"),
                  ),
                  t.a.createElement(v.a, {
                    id: "fileTypeDropdown",
                    labelledById: "file-type-dropdown-label",
                    items: R.map(function (e) {
                      return e.label;
                    }),
                    onClickItem: function (e) {
                      (B(
                        R.find(function (o) {
                          return o.label === e;
                        }),
                      ),
                        e === I.OFFICE.label && J(j));
                    },
                    currentSelectionKey: W.label,
                  }),
                ),
                !ve &&
                  t.a.createElement(
                    t.a.Fragment,
                    null,
                    t.a.createElement(
                      "div",
                      { className: "title" },
                      n("saveModal.pageRange"),
                    ),
                    t.a.createElement(
                      "form",
                      {
                        className: "radio-container",
                        onChange: function (e) {
                          e.target.classList.contains("page-number-input") ||
                            (J(e.target.value), le && (be(!1), se()));
                        },
                        onSubmit: function (e) {
                          return e.preventDefault();
                        },
                      },
                      t.a.createElement(
                        "div",
                        { className: "page-range-column" },
                        t.a.createElement(u.a, {
                          checked: U === j,
                          radio: !0,
                          name: "page-range-option",
                          label: n("saveModal.all"),
                          value: j,
                        }),
                        t.a.createElement(u.a, {
                          checked: U === F,
                          radio: !0,
                          name: "page-range-option",
                          label: n("saveModal.currentPage"),
                          value: F,
                        }),
                      ),
                      t.a.createElement(
                        "div",
                        { className: "page-range-column custom-page-ranges" },
                        t.a.createElement(u.a, {
                          checked: U === C,
                          radio: !0,
                          name: "page-range-option",
                          label: ge,
                          value: C,
                        }),
                      ),
                    ),
                    t.a.createElement(
                      "div",
                      { className: "title" },
                      n("saveModal.properties"),
                    ),
                    t.a.createElement(
                      "div",
                      { className: "checkbox-container" },
                      t.a.createElement(u.a, {
                        checked: Y,
                        name: "include-annotation-option",
                        label: n("saveModal.includeAnnotation"),
                        onChange: function () {
                          return Z(!Y);
                        },
                      }),
                      t.a.createElement(u.a, {
                        checked: oe,
                        name: "include-comment-option",
                        label: n("saveModal.includeComments"),
                        onChange: function () {
                          return ne(!oe);
                        },
                      }),
                    ),
                  ),
              ),
              t.a.createElement(
                "div",
                { className: "footer" },
                t.a.createElement(p.a, {
                  disabled: fe,
                  onClick: function () {
                    var n;
                    m.a.getDocument(w)
                      ? z &&
                        ((n =
                          U === C
                            ? null != $ && $.length
                              ? $
                              : [m.a.getCurrentPage(w)]
                            : U === F || U === T
                              ? [m.a.getCurrentPage(w)]
                              : S()(1, m.a.getTotalPages(w) + 1, 1)),
                        Object(h.a)(
                          o,
                          {
                            includeAnnotations: Y,
                            includeComments: oe,
                            filename: z || "untitled",
                            downloadType: W.extension,
                            pages: n,
                            store: e,
                          },
                          w,
                        ),
                        pe())
                      : console.warn("Document is not loaded");
                  },
                  label: n("saveModal.save"),
                }),
              ),
            ),
          );
        };
      o.default = N;
    },
  },
]);
//# sourceMappingURL=chunk.76.js.map
