(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    1916: function (e, t, o) {
      var n = o(35),
        r = o(1917);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
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
      n(r, i);
      e.exports = r.locals || {};
    },
    1917: function (e, t, o) {
      ((t = e.exports = o(36)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.header-footer-edit-ui{position:absolute;height:46px;width:100%;align-items:center;display:flex;visibility:hidden}.header-footer-edit-ui.header-edit-ui{inset-block-start:143px}.header-footer-edit-ui.footer-edit-ui{inset-block-end:143px}.header-footer-edit-ui.active{visibility:visible}.header-footer-edit-ui .box-shadow-div{width:100%;height:100%;overflow:hidden;position:absolute;display:flex;align-items:center}.header-footer-edit-ui .box-shadow-div:after{content:"";position:absolute;width:100%;height:40px;padding:3px 0;background-color:var(--gray-0);box-shadow:0 0 3px 0 var(--gray-7);z-index:-1}.header-footer-edit-ui .label{color:var(--gray-8);font-size:.8125rem;font-weight:700;margin-inline-start:16px}.header-footer-edit-ui .options-dropdown-container{position:absolute;inset-inline-end:16px}.header-footer-edit-ui .options-dropdown-container .options-button{color:var(--blue-5);padding:8px 32px 8px 8px;background:transparent;width:auto;border:none;cursor:pointer}.header-footer-edit-ui .options-dropdown-container .options-button .Icon{width:16px;height:16px;position:absolute;inset-inline-end:9.5px;inset-block-start:0;inset-block-end:0;margin:auto;color:var(--blue-5)}.header-footer-edit-ui .options-dropdown-container .options-button.active,.header-footer-edit-ui .options-dropdown-container .options-button.active .Icon,.header-footer-edit-ui .options-dropdown-container .options-button:hover,.header-footer-edit-ui .options-dropdown-container .options-button:hover .Icon{color:var(--blue-6)}.header-footer-edit-ui .options-dropdown-container .options-button.active .Icon{transform:rotate(180deg)}.header-footer-edit-ui .options-dropdown-container .Dropdown__items{padding:4px 0;min-width:157px}.header-footer-edit-ui .options-dropdown-container .Dropdown__items .Dropdown__item{height:32px;padding:0 10px 0 40px;position:relative;width:auto}.header-footer-edit-ui .options-dropdown-container .Dropdown__items .Dropdown__item:first-child{margin-bottom:9px}.header-footer-edit-ui .options-dropdown-container .Dropdown__items .Dropdown__item .Icon{position:absolute;inset-inline-start:10px;fill:var(--gray-7);inset-block-start:0;inset-block-end:0;margin:auto}.header-footer-edit-ui .options-dropdown-container .Dropdown__items .Divider{flex-basis:100%;width:100%;height:1px;margin:0;position:absolute;inset-block-end:-5px;inset-inline-start:0}',
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1918: function (e, t, o) {
      var n = o(35),
        r = o(1919);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
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
      n(r, i);
      e.exports = r.locals || {};
    },
    1919: function (e, t, o) {
      (e.exports = o(36)(!1)).push([
        e.i,
        ".HeaderFooterControlsOverlay{position:absolute;inset-block-start:0;inset-inline-start:0;width:100%;height:100%;z-index:501}",
        "",
      ]);
    },
    2105: function (e, t, o) {
      "use strict";
      o.r(t);
      (o(44), o(8));
      var n = o(0),
        r = o.n(n),
        i = o(119),
        a = o(23),
        c =
          (o(9),
          o(10),
          o(14),
          o(38),
          o(81),
          o(27),
          o(21),
          o(20),
          o(12),
          o(22),
          o(18),
          o(26),
          o(16),
          o(40),
          o(24),
          o(42),
          o(43),
          o(56),
          o(17),
          o(19),
          o(11),
          o(13),
          o(6)),
        d = o(305),
        s = o(51),
        u = o(82),
        l = o(255),
        p = o(2),
        f = o.n(p),
        h = o(3),
        m = o(5),
        v = o(72),
        b = o(15),
        w = o.n(b),
        y = o(1),
        g = o(1861),
        E = o(25);
      o(1916);
      function x() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          o = "function" == typeof Symbol ? Symbol : {},
          n = o.iterator || "@@iterator",
          r = o.toStringTag || "@@toStringTag";
        function i(o, n, r, i) {
          var d = n && n.prototype instanceof c ? n : c,
            s = Object.create(d.prototype);
          return (
            _(
              s,
              "_invoke",
              (function (o, n, r) {
                var i,
                  c,
                  d,
                  s = 0,
                  u = r || [],
                  l = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, o) {
                      return ((i = t), (c = 0), (d = e), (p.n = o), a);
                    },
                  };
                function f(o, n) {
                  for (
                    c = o, d = n, t = 0;
                    !l && s && !r && t < u.length;
                    t++
                  ) {
                    var r,
                      i = u[t],
                      f = p.p,
                      h = i[2];
                    o > 3
                      ? (r = h === n) &&
                        ((d = i[(c = i[4]) ? 5 : ((c = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = o < 2 && f < i[1])
                          ? ((c = 0), (p.v = n), (p.n = i[1]))
                          : f < h &&
                            (r = o < 3 || i[0] > n || n > h) &&
                            ((i[4] = o), (i[5] = n), (p.n = h), (c = 0)));
                  }
                  if (r || o > 1) return a;
                  throw ((l = !0), n);
                }
                return function (r, u, h) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    l && 1 === u && f(u, h), c = u, d = h;
                    (t = c < 2 ? e : d) || !l;

                  ) {
                    i ||
                      (c
                        ? c < 3
                          ? (c > 1 && (p.n = -1), f(c, d))
                          : (p.n = d)
                        : (p.v = d));
                    try {
                      if (((s = 2), i)) {
                        if ((c || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, d)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((d = t.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (t = i.return) && t.call(i),
                            c < 2 &&
                              ((d = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (c = 1)));
                        i = e;
                      } else if ((t = (l = p.n < 0) ? d : o.call(n, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (c = 1), (d = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: l };
                };
              })(o, r, i),
              !0,
            ),
            s
          );
        }
        var a = {};
        function c() {}
        function d() {}
        function s() {}
        t = Object.getPrototypeOf;
        var u = [][n]
            ? t(t([][n]()))
            : (_((t = {}), n, function () {
                return this;
              }),
              t),
          l = (s.prototype = c.prototype = Object.create(u));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), _(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(l)),
            e
          );
        }
        return (
          (d.prototype = s),
          _(l, "constructor", s),
          _(s, "constructor", d),
          (d.displayName = "GeneratorFunction"),
          _(s, r, "GeneratorFunction"),
          _(l),
          _(l, r, "Generator"),
          _(l, n, function () {
            return this;
          }),
          _(l, "toString", function () {
            return "[object Generator]";
          }),
          (x = function () {
            return { w: i, m: p };
          })()
        );
      }
      function _(e, t, o, n) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (_ = function (e, t, o, n) {
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
            var i = function (t, o) {
              _(e, t, function (e) {
                return this._invoke(t, o, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, o, n);
      }
      function O(e, t, o, n, r, i, a) {
        try {
          var c = e[i](a),
            d = c.value;
        } catch (e) {
          return void o(e);
        }
        c.done ? t(d) : Promise.resolve(d).then(n, r);
      }
      function k(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (n, r) {
            var i = e.apply(t, o);
            function a(e) {
              O(i, n, r, a, c, "next", e);
            }
            function c(e) {
              O(i, n, r, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function A(e, t) {
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
                i,
                a,
                c = [],
                d = !0,
                s = !1;
              try {
                if (((i = (o = o.call(e)).next), 0 === t)) {
                  if (Object(o) !== o) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (n = i.call(o)).done) &&
                    (c.push(n.value), c.length !== t);
                    d = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !d &&
                    null != o.return &&
                    ((a = o.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return j(e, t);
              var o = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === o && e.constructor && (o = e.constructor.name),
                "Map" === o || "Set" === o
                  ? Array.from(e)
                  : "Arguments" === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? j(e, t)
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
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = Array(t); o < t; o++) n[o] = e[o];
        return n;
      }
      var T = {
          type: f.a.oneOf(["header", "footer"]),
          pageNumber: f.a.number,
          isActive: f.a.bool,
        },
        N = [
          "click",
          "mousedown",
          "mouseup",
          "mousemove",
          "mouseenter",
          "mouseleave",
          "contextmenu",
        ],
        S = function (e) {
          var t = e.type,
            o = e.pageNumber,
            i = e.isActive,
            a = A(Object(d.a)(), 1)[0],
            p = Object(c.d)(),
            f = y.a.getDocument(),
            b = f.getOfficeEditor(),
            _ = Object(n.useRef)(),
            O = "".concat(t, "-options-dropdown-").concat(o),
            j = "".concat(t, "-edit-ui-").concat(o),
            T = A(Object(n.useState)({}), 2),
            S = T[0],
            D = T[1],
            P = A(Object(n.useState)(null), 2),
            C = P[0],
            F = P[1],
            H = A(Object(n.useState)(0), 2),
            I = H[0],
            L = H[1],
            R = A(Object(n.useState)(0), 2),
            M = R[0],
            W = R[1],
            G = A(Object(n.useState)(!1), 2),
            U = G[0],
            z = G[1],
            B = A(Object(n.useState)(!1), 2),
            q = B[0],
            V = B[1],
            J = A(Object(n.useState)(!1), 2),
            K = J[0],
            X = J[1],
            Y = Object(n.useMemo)(
              function () {
                var e = "header" === t ? q : K;
                return w()("header-footer-edit-ui", "".concat(t, "-edit-ui"), {
                  active: i && e,
                });
              },
              [t, i, q, K],
            ),
            $ = function () {
              var e,
                n =
                  (null === (e = _.current) || void 0 === e
                    ? void 0
                    : e.clientHeight) || 0;
              switch (t) {
                case "header":
                  return b.getHeaderPosition(o);
                case "footer":
                  return b.getFooterPosition(o) - n;
                default:
                  return 0;
              }
            },
            Q = (function () {
              var e = k(
                x().m(function e() {
                  var t;
                  return x().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return ((e.n = 1), b.getSectionNumber(o));
                        case 1:
                          ((t = e.v), F(t));
                        case 2:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (Object(n.useEffect)(
            k(
              x().m(function e() {
                var o, n, r, i;
                return x().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          (o = function (e) {
                            ("mousedown" === e.type &&
                              p(h.a.closeElements([m.a.CONTEXT_MENU_POPUP])),
                              e.stopPropagation());
                          }),
                          N.forEach(function (e) {
                            _.current.addEventListener(e, o);
                          }),
                          (n = function () {
                            (r(), Q());
                          }),
                          (r = function () {
                            var e = $();
                            e > 0 && D({ top: e });
                          }),
                          f.addEventListener("headerFooterUpdated", n),
                          (i = function (e) {
                            var t = e === E.z.VIEW_ONLY || e === E.z.PREVIEW;
                            z(t);
                          }),
                          f.addEventListener("editModeUpdated", i),
                          D(
                            (function () {
                              var e =
                                  "header" === t
                                    ? { top: E.k }
                                    : { bottom: E.k },
                                o = $();
                              return o > 0 ? { top: o } : e;
                            })(),
                          ),
                          e.a(2, function () {
                            (N.forEach(function (e) {
                              var t;
                              null === (t = _.current) ||
                                void 0 === t ||
                                t.removeEventListener(e, o);
                            }),
                              f.removeEventListener("headerFooterUpdated", n),
                              f.removeEventListener("editModeUpdated", i));
                          })
                        );
                    }
                }, e);
              }),
            ),
            [i],
          ),
            Object(n.useEffect)(
              function () {
                var e = function (e) {
                  if ("headerFooter" === e.source) {
                    var t = b.getHeaderPageType(o),
                      n = b.getFooterPageType(o);
                    (-1 !== t && (V(!0), L(t)), -1 !== n && (X(!0), W(n)));
                  }
                };
                return (
                  f.addEventListener("officeDocumentEdited", e),
                  function () {
                    f.removeEventListener("officeDocumentEdited", e);
                  }
                );
              },
              [o],
            ),
            Object(n.useEffect)(
              function () {
                Q();
                var e = b.getHeaderPageType(o),
                  t = b.getFooterPageType(o);
                (-1 !== e && (V(!0), L(e)), -1 !== t && (X(!0), W(t)));
              },
              [i, o],
            ));
          var Z = (function () {
              var e = k(
                x().m(function e() {
                  return x().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          (g.a.setPageNumber(o),
                            p(
                              h.a.openElement(m.a.HEADER_FOOTER_OPTIONS_MODAL),
                            ));
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
            ee = [
              {
                label: a("officeEditor.pageOptions"),
                key: "page-options",
                icon: "ic-edit-page",
                onClick: Z,
              },
              {
                label: a(
                  "header" === t
                    ? "officeEditor.removeHeader"
                    : "officeEditor.removeFooter",
                ),
                key: "remove-".concat(t),
                icon: "ic-delete-page",
                onClick: function () {
                  return "header" === t
                    ? b.removeHeaders(o)
                    : "footer" === t
                      ? b.removeFooters(o)
                      : void 0;
                },
              },
            ],
            te = (function () {
              var e = k(
                x().m(function e(t) {
                  var o;
                  return x().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (o = ee.find(function (e) {
                              return e.key === t;
                            })),
                            (e.n = 1),
                            null == o ? void 0 : o.onClick()
                          );
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
            oe = "header" === t ? I : M,
            ne = "officeEditor.".concat(t, ".").concat(oe),
            re = C
              ? " - ".concat(a("officeEditor.section"), " ").concat(C)
              : "",
            ie = "".concat(a(ne)).concat(re),
            ae = "".concat(ie, " ").concat(a("officeEditor.options")),
            ce = "".concat(O, "-label");
          return r.a.createElement(
            "div",
            { className: Y, id: j, style: S },
            r.a.createElement("div", { className: "box-shadow-div", ref: _ }),
            r.a.createElement("div", { className: "label" }, ie),
            r.a.createElement(v.a, {
              width: "auto",
              id: O,
              renderItem: function (e) {
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(s.a, {
                    glyph: e.icon,
                    className: "Dropdown__item-icon",
                  }),
                  r.a.createElement(
                    "div",
                    { className: "Dropdown__item-vertical" },
                    r.a.createElement(
                      "div",
                      { className: "Dropdown__item-label" },
                      a(e.label),
                    ),
                  ),
                  "page-options" === e.key &&
                    r.a.createElement("div", { className: "Divider" }),
                );
              },
              className: "options-dropdown-container",
              getKey: function (e) {
                return e.key;
              },
              items: ee,
              onClickItem: te,
              displayButton: function (e) {
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, {
                    className: "options-button",
                    ariaLabelledby: ce,
                    ariaControls: "".concat(O, "-dropdown"),
                    ariaExpanded: e,
                    img: "ic_chevron_down_black_24px",
                    label: a("officeEditor.options"),
                    isActive: e,
                    disabled: U,
                  }),
                  r.a.createElement(l.a, { id: ce, label: ae }),
                );
              },
              labelledById: ce,
              stopPropagationOnMouseDown: !0,
              disabled: U,
            }),
          );
        };
      S.propTypes = T;
      var D = r.a.memo(S),
        P =
          (o(1918),
          {
            visiblePages: f.a.arrayOf(f.a.number),
            isHeaderControlsActive: f.a.bool,
            isFooterControlsActive: f.a.bool,
          }),
        C = function (e) {
          var t = e.visiblePages,
            o = e.isHeaderControlsActive,
            n = e.isFooterControlsActive,
            c = t.map(function (e) {
              var t = Object(a.a)().getElementById("pageSection".concat(e));
              return t
                ? Object(i.createPortal)(
                    r.a.createElement(
                      "div",
                      { key: e, className: "HeaderFooterControlsOverlay" },
                      r.a.createElement(D, {
                        type: "header",
                        pageNumber: e,
                        isActive: o,
                      }),
                      r.a.createElement(D, {
                        type: "footer",
                        pageNumber: e,
                        isActive: n,
                      }),
                    ),
                    t,
                  )
                : null;
            });
          return r.a.createElement(r.a.Fragment, null, c);
        };
      C.propTypes = P;
      var F = C;
      t.default = F;
    },
  },
]);
//# sourceMappingURL=chunk.51.js.map
