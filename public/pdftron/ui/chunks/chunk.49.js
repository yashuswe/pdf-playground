(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    2032: function (t, o, e) {
      var n = e(35),
        r = e(2033);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, ""]]);
      var i = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let o;
          ((o = document.getElementsByTagName("apryse-webviewer")),
            o.length ||
              (o = (function t(o, e = document) {
                const n = [];
                return (
                  e.querySelectorAll(o).forEach((t) => n.push(t)),
                  e.querySelectorAll("*").forEach((e) => {
                    e.shadowRoot && n.push(...t(o, e.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer")));
          const e = [];
          for (let n = 0; n < o.length; n++) {
            const r = o[n];
            if (0 === n)
              (r.shadowRoot.appendChild(t),
                (t.onload = function () {
                  e.length > 0 &&
                    e.forEach((o) => {
                      o.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const o = t.cloneNode(!0);
              (r.shadowRoot.appendChild(o), e.push(o));
            }
          }
        },
        singleton: !1,
      };
      n(r, i);
      t.exports = r.locals || {};
    },
    2033: function (t, o, e) {
      (t.exports = e(36)(!1)).push([
        t.i,
        ".portfolio-items{height:100%;overflow-y:auto;margin:16px;padding:16px;background-color:var(--faded-component-background);display:flex;flex-wrap:wrap;grid-gap:16px;gap:16px}.portfolio-items .portfolio-item{width:130px;height:185px;padding:12px 24px 8px;background-color:var(--component-background);border:1px solid var(--lighter-border);display:flex;flex-direction:column;align-items:center;border-radius:6px}.portfolio-items .portfolio-item .portfolio-item-preview{width:100%;height:104px;border:1px solid var(--gray-3)}.portfolio-items .portfolio-item .portfolio-item-preview .preview-container{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.portfolio-items .portfolio-item .portfolio-item-preview .preview-container .Icon{color:var(--gray-6)}.portfolio-items .portfolio-item .portfolio-item-name{margin:8px 0;height:15px;font-size:13px;max-width:90px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:var(--gray-9)}.portfolio-items .portfolio-item .Button,.portfolio-items .portfolio-item .Button .Icon{width:28px;height:28px}",
        "",
      ]);
    },
    2034: function (t, o, e) {
      var n = e(35),
        r = e(2035);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, ""]]);
      var i = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let o;
          ((o = document.getElementsByTagName("apryse-webviewer")),
            o.length ||
              (o = (function t(o, e = document) {
                const n = [];
                return (
                  e.querySelectorAll(o).forEach((t) => n.push(t)),
                  e.querySelectorAll("*").forEach((e) => {
                    e.shadowRoot && n.push(...t(o, e.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer")));
          const e = [];
          for (let n = 0; n < o.length; n++) {
            const r = o[n];
            if (0 === n)
              (r.shadowRoot.appendChild(t),
                (t.onload = function () {
                  e.length > 0 &&
                    e.forEach((o) => {
                      o.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const o = t.cloneNode(!0);
              (r.shadowRoot.appendChild(o), e.push(o));
            }
          }
        },
        singleton: !1,
      };
      n(r, i);
      t.exports = r.locals || {};
    },
    2035: function (t, o, e) {
      ((o = t.exports = e(36)(!1)).push([
        t.i,
        ".open.CreatePortfolioModal{visibility:visible}.closed.CreatePortfolioModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CreatePortfolioModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.CreatePortfolioModal .content-container .footer .create-portfolio,.CreatePortfolioModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.CreatePortfolioModal .content-container .footer .create-portfolio:disabled,.CreatePortfolioModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.CreatePortfolioModal .content-container .footer .create-portfolio:disabled span,.CreatePortfolioModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.CreatePortfolioModal .footer .modal-button.cancel:hover,.CreatePortfolioModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.CreatePortfolioModal .footer .modal-button.cancel,.CreatePortfolioModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.CreatePortfolioModal .footer .modal-button.cancel.disabled,.CreatePortfolioModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.CreatePortfolioModal .footer .modal-button.cancel.disabled span,.CreatePortfolioModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.CreatePortfolioModal .content-container .footer .add-item-option:hover{border:none;background:none;color:var(--blue-6)}.CreatePortfolioModal .content-container .footer .add-item-option:hover .Icon{color:var(--blue-6)}.CreatePortfolioModal .content-container .footer .add-item-option{border:none;background:none;color:var(--blue-5)}.CreatePortfolioModal .content-container .footer .add-item-option .Icon{color:var(--blue-5)}.CreatePortfolioModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.CreatePortfolioModal .modal-container .wrapper .modal-content{padding:10px}.CreatePortfolioModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.CreatePortfolioModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.CreatePortfolioModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.CreatePortfolioModal .footer .modal-button.confirm{margin-inline-start:4px}.CreatePortfolioModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .footer .modal-button{padding:23px 8px}}.CreatePortfolioModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .swipe-indicator{width:32px}}.CreatePortfolioModal .content-container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;color:var(--text-color)}.CreatePortfolioModal .content-container .tab-list .tab-options-button{background-color:transparent;text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.CreatePortfolioModal .content-container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.CreatePortfolioModal .content-container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.CreatePortfolioModal .content-container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.CreatePortfolioModal .content-container .tab-list .tab-options-button.selected{cursor:default}.CreatePortfolioModal .content-container .tab-list .tab-options-button.focus-visible,.CreatePortfolioModal .content-container .tab-list .tab-options-button:focus-visible{outline:var(--focus-visible-outline)}.CreatePortfolioModal .content-container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.CreatePortfolioModal .content-container .tab-panel.focus-visible,.CreatePortfolioModal .content-container .tab-panel:focus-visible{outline:var(--focus-visible-outline)!important}.CreatePortfolioModal .content-container{display:flex;flex-direction:column;justify-content:space-between;width:786px;height:604px;padding:0;border-radius:4px;overflow-y:visible;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .content-container{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .content-container{width:100%}}.CreatePortfolioModal .content-container .header{display:flex;justify-content:space-between;margin:16px;font-size:16px;font-weight:700;align-items:center;height:24px}.CreatePortfolioModal .content-container .header .Button{height:32px;width:32px}.CreatePortfolioModal .content-container .divider{height:1px;width:100%;background:var(--divider)}.CreatePortfolioModal .content-container .file-picker-container{width:100%;height:100%;padding:16px}.CreatePortfolioModal .content-container .footer{display:flex;padding:16px;align-items:center;justify-content:space-between;width:100%;margin:0}.CreatePortfolioModal .content-container .footer .add-item-option{visibility:hidden;display:flex;align-items:center;position:relative}.CreatePortfolioModal .content-container .footer .add-item-option.show-popup,.CreatePortfolioModal .content-container .footer .add-item-option.show-popup .add-item-icon,.CreatePortfolioModal .content-container .footer .add-item-option.show-popup .Button .Icon{color:var(--secondary-button-hover)}.CreatePortfolioModal .content-container .footer .add-item-option .add-item-icon{color:var(--secondary-button-text)}.CreatePortfolioModal .content-container .footer .add-item-option .add-item-trigger{width:1px;height:1px;visibility:hidden;position:absolute;inset-inline-start:100px;inset-block-start:30px}.CreatePortfolioModal .content-container .footer .create-portfolio{min-width:72px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .content-container .footer .create-portfolio{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .content-container .footer .create-portfolio{font-size:13px}}.CreatePortfolioModal .content-container .footer .create-portfolio:enabled:hover{background:var(--primary-button-hover)}.CreatePortfolioModal .content-container .tab-list .tab-options-divider+.tab-options-button{border-inline-start:none!important}.CreatePortfolioModal .content-container .tab-list .tab-options-button{border-top:1px solid var(--tab-border-color);border-bottom:1px solid var(--tab-border-color)}.CreatePortfolioModal .content-container .tab-list .tab-options-button:first-child{border-inline-start:1px solid var(--tab-border-color)}.CreatePortfolioModal .content-container .tab-list .tab-options-button:last-child{border-inline-end:1px solid var(--tab-border-color)}.CreatePortfolioModal .content-container .tab-list .tab-options-button:hover{background:var(--tab-background-color-hover);border-top:1px solid var(--tab-border-color-hover);border-bottom:1px solid var(--tab-border-color-hover);border-inline-end:1px solid var(--tab-border-color-hover)}.CreatePortfolioModal .content-container .tab-list .tab-options-button:hover+button,.CreatePortfolioModal .content-container .tab-list .tab-options-button:hover+div{border-inline-start:none}.CreatePortfolioModal .content-container .tab-list .tab-options-button.selected{background:var(--tab-color-selected);border:1px solid var(--tab-color-selected);color:var(--tab-text-color-selected)}.CreatePortfolioModal .content-container .tab-list .tab-options-button.selected+button,.CreatePortfolioModal .content-container .tab-list .tab-options-button.selected+div{border-inline-start:none!important}.CreatePortfolioModal .content-container .tab-list .tab-options-button:not(.selected){border-inline-end:solid 1px var(--tab-border-color)}.CreatePortfolioModal.is-editing .content-container .header{margin-bottom:20px}.CreatePortfolioModal.is-editing .content-container .footer .add-item-option{visibility:visible;min-width:115px;padding:8px 16px}.CreatePortfolioModal.is-editing .content-container .footer .add-item-option .Icon{width:16px;height:16px;margin-inline-end:4px}",
        "",
      ]),
        (o.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2110: function (t, o, e) {
      "use strict";
      e.r(o);
      (e(9),
        e(10),
        e(14),
        e(38),
        e(81),
        e(21),
        e(20),
        e(12),
        e(22),
        e(129),
        e(18),
        e(26),
        e(16),
        e(40),
        e(24),
        e(42),
        e(43),
        e(8),
        e(56),
        e(17),
        e(19),
        e(11),
        e(13));
      var n = e(0),
        r = e.n(n),
        i = e(6),
        a = e(305),
        l = e(4),
        c = e(3),
        d = e(15),
        p = e.n(d),
        s = e(5),
        f = e(41),
        u = e(595),
        b = (e(44), e(1)),
        m = e(51),
        h = e(2);
      function v() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
          o,
          e = "function" == typeof Symbol ? Symbol : {},
          n = e.iterator || "@@iterator",
          r = e.toStringTag || "@@toStringTag";
        function i(e, n, r, i) {
          var c = n && n.prototype instanceof l ? n : l,
            d = Object.create(c.prototype);
          return (
            y(
              d,
              "_invoke",
              (function (e, n, r) {
                var i,
                  l,
                  c,
                  d = 0,
                  p = r || [],
                  s = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: u,
                    f: u.bind(t, 4),
                    d: function (o, e) {
                      return ((i = o), (l = 0), (c = t), (f.n = e), a);
                    },
                  };
                function u(e, n) {
                  for (
                    l = e, c = n, o = 0;
                    !s && d && !r && o < p.length;
                    o++
                  ) {
                    var r,
                      i = p[o],
                      u = f.p,
                      b = i[2];
                    e > 3
                      ? (r = b === n) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= u &&
                        ((r = e < 2 && u < i[1])
                          ? ((l = 0), (f.v = n), (f.n = i[1]))
                          : u < b &&
                            (r = e < 3 || i[0] > n || n > b) &&
                            ((i[4] = e), (i[5] = n), (f.n = b), (l = 0)));
                  }
                  if (r || e > 1) return a;
                  throw ((s = !0), n);
                }
                return function (r, p, b) {
                  if (d > 1) throw TypeError("Generator is already running");
                  for (
                    s && 1 === p && u(p, b), l = p, c = b;
                    (o = l < 2 ? t : c) || !s;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (f.n = -1), u(l, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((d = 2), i)) {
                        if ((l || (r = "next"), (o = i[r]))) {
                          if (!(o = o.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!o.done) return o;
                          ((c = o.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (o = i.return) && o.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = t;
                      } else if ((o = (s = f.n < 0) ? c : e.call(n, f)) !== a)
                        break;
                    } catch (o) {
                      ((i = t), (l = 1), (c = o));
                    } finally {
                      d = 1;
                    }
                  }
                  return { value: o, done: s };
                };
              })(e, r, i),
              !0,
            ),
            d
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function d() {}
        o = Object.getPrototypeOf;
        var p = [][n]
            ? o(o([][n]()))
            : (y((o = {}), n, function () {
                return this;
              }),
              o),
          s = (d.prototype = l.prototype = Object.create(p));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, d)
              : ((t.__proto__ = d), y(t, r, "GeneratorFunction")),
            (t.prototype = Object.create(s)),
            t
          );
        }
        return (
          (c.prototype = d),
          y(s, "constructor", d),
          y(d, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          y(d, r, "GeneratorFunction"),
          y(s),
          y(s, r, "Generator"),
          y(s, n, function () {
            return this;
          }),
          y(s, "toString", function () {
            return "[object Generator]";
          }),
          (v = function () {
            return { w: i, m: f };
          })()
        );
      }
      function y(t, o, e, n) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (t) {
          r = 0;
        }
        (y = function (t, o, e, n) {
          if (o)
            r
              ? r(t, o, {
                  value: e,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (t[o] = e);
          else {
            var i = function (o, e) {
              y(t, o, function (t) {
                return this._invoke(o, e, t);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(t, o, e, n);
      }
      function x(t, o, e, n, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void e(t);
        }
        l.done ? o(c) : Promise.resolve(c).then(n, r);
      }
      function g(t, o) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, o) {
            var e =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var n,
                r,
                i,
                a,
                l = [],
                c = !0,
                d = !1;
              try {
                if (((i = (e = e.call(t)).next), 0 === o)) {
                  if (Object(e) !== e) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(e)).done) &&
                    (l.push(n.value), l.length !== o);
                    c = !0
                  );
              } catch (t) {
                ((d = !0), (r = t));
              } finally {
                try {
                  if (
                    !c &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw r;
                }
              }
              return l;
            }
          })(t, o) ||
          (function (t, o) {
            if (t) {
              if ("string" == typeof t) return w(t, o);
              var e = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === e && t.constructor && (e = t.constructor.name),
                "Map" === e || "Set" === e
                  ? Array.from(t)
                  : "Arguments" === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    ? w(t, o)
                    : void 0
              );
            }
          })(t, o) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function w(t, o) {
        (null == o || o > t.length) && (o = t.length);
        for (var e = 0, n = Array(o); e < o; e++) n[e] = t[e];
        return n;
      }
      var C = { item: e.n(h).a.object },
        P = { loadAsPDF: !0 },
        M = function (t) {
          var o = t.item,
            e = Object(n.useRef)(),
            i = g(Object(n.useState)(!1), 2),
            l = i[0],
            c = i[1],
            d = Object(a.a)().t;
          return (
            Object(n.useEffect)(function () {
              var t, n;
              return (
                (function () {
                  var r,
                    i =
                      ((r = v().m(function r() {
                        return v().w(
                          function (r) {
                            for (;;)
                              switch ((r.p = r.n)) {
                                case 0:
                                  return (
                                    (r.p = 0),
                                    (r.n = 1),
                                    b.a.createDocument(o, P)
                                  );
                                case 1:
                                  if (!((t = r.v).getPageCount() < 1)) {
                                    r.n = 2;
                                    break;
                                  }
                                  return (c(!0), r.a(2));
                                case 2:
                                  return (
                                    (r.n = 3),
                                    t.loadThumbnail(1, function (t) {
                                      var n,
                                        r = e.current.clientWidth,
                                        i = e.current.clientHeight,
                                        a = t.width,
                                        l = t.height;
                                      if (r < a || i < l) {
                                        var c = Math.min(r / a, i / l);
                                        ((t.style.width = "".concat(
                                          a * c,
                                          "px",
                                        )),
                                          (t.style.height = "".concat(
                                            l * c,
                                            "px",
                                          )));
                                      }
                                      (t.setAttribute("role", "img"),
                                        t.setAttribute(
                                          "aria-label",
                                          ""
                                            .concat(
                                              d(
                                                "portfolio.portfolioPanelTitle",
                                              ),
                                              " ",
                                            )
                                            .concat(o.name),
                                        ),
                                        null === (n = e.current) ||
                                          void 0 === n ||
                                          n.appendChild(t));
                                    })
                                  );
                                case 3:
                                  ((n = r.v), (r.n = 5));
                                  break;
                                case 4:
                                  ((r.p = 4), r.v, c(!0));
                                case 5:
                                  return r.a(2);
                              }
                          },
                          r,
                          null,
                          [[0, 4]],
                        );
                      })),
                      function () {
                        var t = this,
                          o = arguments;
                        return new Promise(function (e, n) {
                          var i = r.apply(t, o);
                          function a(t) {
                            x(i, e, n, a, l, "next", t);
                          }
                          function l(t) {
                            x(i, e, n, a, l, "throw", t);
                          }
                          a(void 0);
                        });
                      });
                  return function () {
                    return i.apply(this, arguments);
                  };
                })()(),
                function () {
                  n && t.cancelLoadThumbnail(n);
                }
              );
            }, []),
            r.a.createElement(
              "div",
              { className: "preview-container", ref: e },
              l && r.a.createElement(m.a, { glyph: "icon-portfolio-file" }),
            )
          );
        };
      M.propTypes = C;
      var O = Object(n.memo)(M),
        E =
          (e(2032),
          function (t) {
            var o = t.items,
              e = t.onDeleteItem,
              n = t.onDropItems;
            return r.a.createElement(
              "div",
              {
                className: "portfolio-items",
                onDragEnter: function (t) {
                  (t.preventDefault(), t.stopPropagation());
                },
                onDragOver: function (t) {
                  (t.preventDefault(), t.stopPropagation());
                },
                onDrop: n,
              },
              o.map(function (t, o) {
                return r.a.createElement(
                  "div",
                  { className: "portfolio-item", key: t.name },
                  r.a.createElement(
                    "div",
                    { className: "portfolio-item-preview" },
                    r.a.createElement(O, { item: t }),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "portfolio-item-name", title: t.name },
                    t.name,
                  ),
                  r.a.createElement(f.a, {
                    img: "ic-delete",
                    onClick: function () {
                      return e(o);
                    },
                    title: "action.delete",
                  }),
                );
              }),
            );
          }),
        k = e(269),
        A = e(109),
        j = e(373),
        T = e(182);
      e(2034);
      function _(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return F(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          L(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function I() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
          o,
          e = "function" == typeof Symbol ? Symbol : {},
          n = e.iterator || "@@iterator",
          r = e.toStringTag || "@@toStringTag";
        function i(e, n, r, i) {
          var c = n && n.prototype instanceof l ? n : l,
            d = Object.create(c.prototype);
          return (
            S(
              d,
              "_invoke",
              (function (e, n, r) {
                var i,
                  l,
                  c,
                  d = 0,
                  p = r || [],
                  s = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: u,
                    f: u.bind(t, 4),
                    d: function (o, e) {
                      return ((i = o), (l = 0), (c = t), (f.n = e), a);
                    },
                  };
                function u(e, n) {
                  for (
                    l = e, c = n, o = 0;
                    !s && d && !r && o < p.length;
                    o++
                  ) {
                    var r,
                      i = p[o],
                      u = f.p,
                      b = i[2];
                    e > 3
                      ? (r = b === n) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= u &&
                        ((r = e < 2 && u < i[1])
                          ? ((l = 0), (f.v = n), (f.n = i[1]))
                          : u < b &&
                            (r = e < 3 || i[0] > n || n > b) &&
                            ((i[4] = e), (i[5] = n), (f.n = b), (l = 0)));
                  }
                  if (r || e > 1) return a;
                  throw ((s = !0), n);
                }
                return function (r, p, b) {
                  if (d > 1) throw TypeError("Generator is already running");
                  for (
                    s && 1 === p && u(p, b), l = p, c = b;
                    (o = l < 2 ? t : c) || !s;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (f.n = -1), u(l, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((d = 2), i)) {
                        if ((l || (r = "next"), (o = i[r]))) {
                          if (!(o = o.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!o.done) return o;
                          ((c = o.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (o = i.return) && o.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = t;
                      } else if ((o = (s = f.n < 0) ? c : e.call(n, f)) !== a)
                        break;
                    } catch (o) {
                      ((i = t), (l = 1), (c = o));
                    } finally {
                      d = 1;
                    }
                  }
                  return { value: o, done: s };
                };
              })(e, r, i),
              !0,
            ),
            d
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function d() {}
        o = Object.getPrototypeOf;
        var p = [][n]
            ? o(o([][n]()))
            : (S((o = {}), n, function () {
                return this;
              }),
              o),
          s = (d.prototype = l.prototype = Object.create(p));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, d)
              : ((t.__proto__ = d), S(t, r, "GeneratorFunction")),
            (t.prototype = Object.create(s)),
            t
          );
        }
        return (
          (c.prototype = d),
          S(s, "constructor", d),
          S(d, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          S(d, r, "GeneratorFunction"),
          S(s),
          S(s, r, "Generator"),
          S(s, n, function () {
            return this;
          }),
          S(s, "toString", function () {
            return "[object Generator]";
          }),
          (I = function () {
            return { w: i, m: f };
          })()
        );
      }
      function S(t, o, e, n) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (t) {
          r = 0;
        }
        (S = function (t, o, e, n) {
          if (o)
            r
              ? r(t, o, {
                  value: e,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (t[o] = e);
          else {
            var i = function (o, e) {
              S(t, o, function (t) {
                return this._invoke(o, e, t);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(t, o, e, n);
      }
      function D(t, o, e, n, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void e(t);
        }
        l.done ? o(c) : Promise.resolve(c).then(n, r);
      }
      function R(t) {
        return function () {
          var o = this,
            e = arguments;
          return new Promise(function (n, r) {
            var i = t.apply(o, e);
            function a(t) {
              D(i, n, r, a, l, "next", t);
            }
            function l(t) {
              D(i, n, r, a, l, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function N(t, o) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, o) {
            var e =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var n,
                r,
                i,
                a,
                l = [],
                c = !0,
                d = !1;
              try {
                if (((i = (e = e.call(t)).next), 0 === o)) {
                  if (Object(e) !== e) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(e)).done) &&
                    (l.push(n.value), l.length !== o);
                    c = !0
                  );
              } catch (t) {
                ((d = !0), (r = t));
              } finally {
                try {
                  if (
                    !c &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw r;
                }
              }
              return l;
            }
          })(t, o) ||
          L(t, o) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function L(t, o) {
        if (t) {
          if ("string" == typeof t) return F(t, o);
          var e = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === e && t.constructor && (e = t.constructor.name),
            "Map" === e || "Set" === e
              ? Array.from(t)
              : "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? F(t, o)
                : void 0
          );
        }
      }
      function F(t, o) {
        (null == o || o > t.length) && (o = t.length);
        for (var e = 0, n = Array(o); e < o; e++) n[e] = t[e];
        return n;
      }
      var G = function () {
        var t = N(Object(a.a)(), 1)[0],
          o = Object(i.d)(),
          e = N(
            Object(i.e)(function (t) {
              return [
                l.a.isElementDisabled(t, s.a.CREATE_PORTFOLIO_MODAL),
                l.a.isElementOpen(t, s.a.CREATE_PORTFOLIO_MODAL),
                l.a.getIsMultiTab(t),
                l.a.getTabManager(t),
              ];
            }, i.c),
            4,
          ),
          d = e[0],
          b = e[1],
          m = e[2],
          h = e[3],
          v = N(Object(n.useState)([]), 2),
          y = v[0],
          x = v[1],
          g = Object(n.useRef)(null),
          w = function () {
            o(c.a.closeElement(s.a.CREATE_PORTFOLIO_MODAL));
          },
          C = Object(T.a)(w),
          P = function (t) {
            x(t);
          },
          M = Object(n.useCallback)(
            R(
              I().m(function t() {
                var e, n, r, i;
                return I().w(function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return ((t.n = 1), Object(k.c)(y));
                      case 1:
                        if (((e = t.v), !m)) {
                          t.n = 4;
                          break;
                        }
                        return ((r = Blob), (t.n = 2), e.saveMemoryBuffer(0));
                      case 2:
                        return (
                          (i = t.v),
                          (n = new r([i], { type: "application/pdf" })),
                          (t.n = 3),
                          h.addTab(n, { setActive: !0, extension: "pdf" })
                        );
                      case 3:
                        t.n = 5;
                        break;
                      case 4:
                        Object(A.a)(o, e);
                      case 5:
                        C();
                      case 6:
                        return t.a(2);
                    }
                }, t);
              }),
            ),
            [y, m, h],
          ),
          O = function (e) {
            if (e.length > 0) {
              e = Array.from(e);
              var n = y.find(function (t) {
                return e.find(function (o) {
                  return o.name === t.name;
                });
              });
              if (n) {
                var r = {
                  message: t("portfolio.fileAlreadyExistsMessage", {
                    fileName: n.name,
                  }),
                  title: t("portfolio.fileAlreadyExists"),
                  confirmBtnText: t("portfolio.reselect"),
                  onConfirm: function () {
                    return S();
                  },
                };
                o(c.a.showWarningMessage(r));
              } else x(y.concat(e));
            }
          },
          S = function () {
            var t;
            null == g || null === (t = g.current) || void 0 === t || t.click();
          },
          D = p()({ CreatePortfolioModal: !0, "is-editing": y.length > 0 });
        return d || !b
          ? null
          : r.a.createElement(
              "div",
              { className: D, "data-element": s.a.CREATE_PORTFOLIO_MODAL },
              r.a.createElement(
                j.a,
                {
                  isOpen: b,
                  title: t("portfolio.createPDFPortfolio"),
                  closehandler: w,
                  onCloseClick: w,
                  swipeToClose: !0,
                },
                r.a.createElement(
                  "div",
                  { className: "content-container" },
                  0 === y.length &&
                    r.a.createElement(
                      "div",
                      { className: "file-picker-container" },
                      r.a.createElement(u.a, {
                        onChange: P,
                        onDrop: P,
                        allowMultiple: !0,
                      }),
                    ),
                  y.length > 0 &&
                    r.a.createElement(E, {
                      items: y,
                      onDeleteItem: function (t) {
                        (y.splice(t, 1), x(_(y)));
                      },
                      onDropItems: function (t) {
                        (t.preventDefault(), O(t.dataTransfer.files));
                      },
                    }),
                  r.a.createElement("div", { className: "divider" }),
                  r.a.createElement(
                    "div",
                    { className: "footer" },
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(f.a, {
                        className: "add-item-option",
                        img: "icon-portfolio-file",
                        onClick: S,
                        label: t("portfolio.addFiles"),
                      }),
                      r.a.createElement("div", {
                        className: "add-item-trigger",
                        "data-element": s.a.PORTFOLIO_MODAL_ADD_ITEM_TRIGGER,
                      }),
                    ),
                    r.a.createElement(f.a, {
                      className: "create-portfolio",
                      disabled: 0 === y.length,
                      onClick: M,
                      label: t("action.create"),
                    }),
                  ),
                  r.a.createElement("input", {
                    ref: g,
                    multiple: !0,
                    style: { display: "none" },
                    type: "file",
                    onChange: function (t) {
                      (O(t.target.files), (t.target.value = null));
                    },
                  }),
                ),
              ),
            );
      };
      o.default = G;
    },
  },
]);
//# sourceMappingURL=chunk.49.js.map
