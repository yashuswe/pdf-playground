(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    1575: function (o, e, n) {
      var t = n(35),
        r = n(1651);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[o.i, r, ""]]);
      var i = {
        insert: function (o) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(o);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function o(e, n = document) {
                const t = [];
                return (
                  n.querySelectorAll(e).forEach((o) => t.push(o)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && t.push(...o(e, n.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer")));
          const n = [];
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            if (0 === t)
              (r.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                }));
            else {
              const e = o.cloneNode(!0);
              (r.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      t(r, i);
      o.exports = r.locals || {};
    },
    1585: function (o, e, n) {
      "use strict";
      (n.d(e, "c", function () {
        return t;
      }),
        n.d(e, "b", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return i;
        }));
      var t = { OUTLINE: "outline", PORTFOLIO: "portfolio" },
        r = {
          ON_TARGET_HORIZONTAL_MIDPOINT: "onTargetHorizontalMidPoint",
          ABOVE_TARGET: "aboveTarget",
          BELOW_TARGET: "belowTarget",
          INITIAL: "initial",
        },
        i = 8;
    },
    1651: function (o, e, n) {
      (o.exports = n(36)(!1)).push([
        o.i,
        ".bookmark-outline-panel{display:flex;padding-inline-start:var(--padding);padding-inline-end:var(--padding-small)}.bookmark-outline-control-button{width:auto}.bookmark-outline-control-button span{color:inherit}.bookmark-outline-control-button,.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{color:var(--secondary-button-text)}.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{opacity:.5}.bookmark-outline-control-button.disabled span,.bookmark-outline-control-button[disabled] span{color:inherit}.bookmark-outline-control-button:not(.disabled):active,.bookmark-outline-control-button:not(.disabled):hover,.bookmark-outline-control-button:not([disabled]):active,.bookmark-outline-control-button:not([disabled]):hover{color:var(--secondary-button-hover)}.bookmark-outline-panel-header{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;padding:var(--padding-tiny);border-bottom:1px solid var(--divider)}.bookmark-outline-panel-header .header-title{font-size:16px}.bookmark-outline-row{flex-grow:1;overflow-y:auto}.msg-no-bookmark-outline{color:var(--placeholder-text);text-align:center}.bookmark-outline-single-container{display:flex;flex-flow:row nowrap;align-items:flex-start;border-radius:4px;margin-inline-start:2px;margin-inline-end:2px}.bookmark-outline-single-container.default{padding:var(--padding-tiny);border:1px solid transparent}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:hover,.bookmark-outline-single-container.default[focus-within]{cursor:pointer}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:focus-within,.bookmark-outline-single-container.default:hover{cursor:pointer}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button,.bookmark-outline-single-container.default[focus-within] .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:focus-within .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default[focus-within]{border-color:transparent}.bookmark-outline-single-container.default:focus-within{border-color:transparent}.bookmark-outline-single-container.default .bookmark-outline-label-row{overflow:hidden}.bookmark-outline-single-container.default.focus-visible,.bookmark-outline-single-container.default:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.editing{background-color:var(--faded-component-background);padding:var(--padding-medium) 20px}.bookmark-outline-single-container.editing.focus-visible,.bookmark-outline-single-container.editing:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.preview{display:inline-flex;margin-top:0;padding:var(--padding-small);background-color:var(--component-background);box-shadow:0 0 3px var(--note-box-shadow)}.bookmark-outline-single-container .bookmark-outline-checkbox{flex-grow:0;flex-shrink:0;margin-top:2px;margin-bottom:2px;margin-inline-end:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-label-row{flex-grow:1;flex-shrink:1;display:flex;flex-flow:row wrap;align-items:flex-start;position:relative;overflow:hidden}.bookmark-outline-single-container .bookmark-outline-label{font-weight:600;flex-grow:1;flex-shrink:1;margin-bottom:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-input,.bookmark-outline-single-container .bookmark-outline-text{flex-grow:1;flex-shrink:1;flex-basis:calc(100% - 22px);margin-top:2px;margin-bottom:2px}.bookmark-outline-single-container .bookmark-text-input{margin-inline-start:var(--padding-large)}.bookmark-outline-single-container .bookmark-outline-input{color:var(--text-color);width:calc(100% - var(--padding-large));padding:var(--padding-small);border:1px solid var(--border)}.bookmark-outline-single-container .bookmark-outline-input:focus{border-color:var(--outline-color)}.bookmark-outline-single-container .bookmark-outline-input::-moz-placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-input::placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-more-button{display:none;flex-grow:0;flex-shrink:0;width:16px;height:16px;margin:2px 2px 2px var(--padding-tiny)}.bookmark-outline-single-container .bookmark-outline-more-button .Icon{width:14px;height:14px}.bookmark-outline-single-container .bookmark-outline-more-button.icon-only:hover:not(:disabled):not(.disabled){box-shadow:none;outline:solid 1px var(--hover-border)}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within].icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within.icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within] .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-editing-controls{padding:2px;flex-basis:100%;display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:center;margin-top:var(--padding-medium)}.bookmark-outline-single-container .bookmark-outline-cancel-button,.bookmark-outline-single-container .bookmark-outline-save-button{width:auto;padding:6px var(--padding)}.bookmark-outline-single-container .bookmark-outline-cancel-button{color:var(--secondary-button-text)}.bookmark-outline-single-container .bookmark-outline-cancel-button:hover{color:var(--secondary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button{color:var(--primary-button-text);background-color:var(--primary-button);margin-inline-start:var(--padding-tiny);border-radius:4px}.bookmark-outline-single-container .bookmark-outline-save-button:hover{background-color:var(--primary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button.disabled,.bookmark-outline-single-container .bookmark-outline-save-button:disabled{background-color:var(--primary-button)!important;opacity:.5}.bookmark-outline-single-container .bookmark-outline-save-button.disabled span,.bookmark-outline-single-container .bookmark-outline-save-button:disabled span{color:var(--primary-button-text)}.bookmark-outline-footer{border-top:1.5px solid var(--gray-4);padding-top:var(--padding-medium);padding-bottom:var(--padding-medium);display:flex;justify-content:center;align-items:center}.bookmark-outline-footer .add-new-button .Icon{width:14px;height:14px;margin-inline-end:var(--padding-tiny);color:inherit;fill:currentColor}.bookmark-outline-footer .add-new-button.disabled .Icon.disabled,.bookmark-outline-footer .add-new-button.disabled .Icon.disabled path,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled path{color:inherit;fill:currentColor}.bookmark-outline-footer .multi-selection-button{width:auto;padding:7px}.bookmark-outline-footer .multi-selection-button .Icon{width:18px;height:18px}.bookmark-outline-footer .multi-selection-button:not(:first-child){margin-inline-start:var(--padding-tiny)}.bookmark-outline-footer .multi-selection-button:hover{background-color:transparent}.bookmark-outline-footer .multi-selection-button.disabled:hover,.bookmark-outline-footer .multi-selection-button:disabled:hover{box-shadow:none}",
        "",
      ]);
    },
    1762: function (o, e, n) {
      var t = n(35),
        r = n(1763);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[o.i, r, ""]]);
      var i = {
        insert: function (o) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(o);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function o(e, n = document) {
                const t = [];
                return (
                  n.querySelectorAll(e).forEach((o) => t.push(o)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && t.push(...o(e, n.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer")));
          const n = [];
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            if (0 === t)
              (r.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                }));
            else {
              const e = o.cloneNode(!0);
              (r.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      t(r, i);
      o.exports = r.locals || {};
    },
    1763: function (o, e, n) {
      ((e = o.exports = n(36)(!1)).push([
        o.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.PortfolioPanel .bookmark-outline-single-container .bookmark-outline-label-row{align-items:center}.PortfolioPanel .bookmark-outline-single-container .bookmark-outline-label-row.editing{background-color:var(--faded-component-background);padding:var(--padding-medium) 20px}.PortfolioPanel .bookmark-outline-single-container .bookmark-outline-label-row.editing.focus-visible,.PortfolioPanel .bookmark-outline-single-container .bookmark-outline-label-row.editing:focus-visible{outline:var(--focus-visible-outline)}.PortfolioPanel .bookmark-outline-single-container .portfolio-input-label{font-weight:600;padding-bottom:var(--padding-small)}.PortfolioPanel .bookmark-outline-single-container .portfolio-input{-webkit-font-smoothing:antialiased}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input{border-color:var(--border)}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input.ui__input--message-warning{border-color:var(--error-border-color)}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input.ui__input--message-warning.ui__input--focused{box-shadow:none}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input.ui__input--message-warning .ui__input__icon svg{fill:var(--error-border-color)}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input.ui__input--message-default.ui__input--focused{border-color:var(--outline-color);box-shadow:none}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input .ui__input__input{padding:var(--padding-small);color:var(--text-color);height:auto;overflow:auto;line-height:normal}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input .ui__input__input::-moz-placeholder{color:var(--placeholder-text)}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input .ui__input__input::placeholder{color:var(--placeholder-text)}.PortfolioPanel .bookmark-outline-single-container .portfolio-input .ui__input__messageText{color:var(--error-text-color);margin-top:var(--padding-small);font-size:inherit}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1764: function (o, e, n) {
      var t = n(35),
        r = n(1765);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[o.i, r, ""]]);
      var i = {
        insert: function (o) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(o);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function o(e, n = document) {
                const t = [];
                return (
                  n.querySelectorAll(e).forEach((o) => t.push(o)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && t.push(...o(e, n.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer")));
          const n = [];
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            if (0 === t)
              (r.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                }));
            else {
              const e = o.cloneNode(!0);
              (r.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      t(r, i);
      o.exports = r.locals || {};
    },
    1765: function (o, e, n) {
      (o.exports = n(36)(!1)).push([o.i, "", ""]);
    },
    1766: function (o, e, n) {
      var t = n(35),
        r = n(1767);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[o.i, r, ""]]);
      var i = {
        insert: function (o) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(o);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function o(e, n = document) {
                const t = [];
                return (
                  n.querySelectorAll(e).forEach((o) => t.push(o)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && t.push(...o(e, n.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer")));
          const n = [];
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            if (0 === t)
              (r.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                }));
            else {
              const e = o.cloneNode(!0);
              (r.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      t(r, i);
      o.exports = r.locals || {};
    },
    1767: function (o, e, n) {
      ((e = o.exports = n(36)(!1)).push([
        o.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.PortfolioPanel .portfolio-panel-control{display:flex}.PortfolioPanel .bookmark-outline-row{padding-top:6px}.PortfolioPanel .bookmark-outline-panel-header .header-title{font-size:16px;font-weight:400;margin:0}.PortfolioPanel .portfolio-panel-list{padding-top:8px}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1779: function (o, e, n) {
      "use strict";
      n.r(e);
      (n(9),
        n(10),
        n(14),
        n(34),
        n(81),
        n(125),
        n(21),
        n(20),
        n(12),
        n(44),
        n(22),
        n(99),
        n(129),
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
      var t = n(0),
        r = n.n(t),
        i = n(6),
        a = n(305),
        l = n(1559),
        u = n(1663),
        c = n(472),
        s = n(4),
        d = n(3),
        f = n(41),
        p = r.a.createContext(),
        m = n(2),
        b = n.n(m),
        g = n(1876),
        k = n(1877),
        h = n(630),
        v = n(1585),
        w = (n(38), n(1584)),
        y = n(5),
        x = n(2083),
        O = n(269),
        E = (n(1575), n(1762), n(1656)),
        P = n(15),
        T = n.n(P);
      function I(o, e) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, e) {
            var n =
              null == o
                ? null
                : ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
            if (null != n) {
              var t,
                r,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(o)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (t = i.call(n)).done) &&
                    (l.push(t.value), l.length !== e);
                    u = !0
                  );
              } catch (o) {
                ((c = !0), (r = o));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return l;
            }
          })(o, e) ||
          (function (o, e) {
            if (o) {
              if ("string" == typeof o) return A(o, e);
              var n = {}.toString.call(o).slice(8, -1);
              return (
                "Object" === n && o.constructor && (n = o.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(o)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? A(o, e)
                    : void 0
              );
            }
          })(o, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function A(o, e) {
        (null == e || e > o.length) && (e = o.length);
        for (var n = 0, t = Array(e); n < e; n++) t[n] = o[n];
        return t;
      }
      var _ = {
          portfolioItem: b.a.object.isRequired,
          isPortfolioRenaming: b.a.bool,
          setPortfolioRenaming: b.a.func,
          movePortfolio: b.a.func,
        },
        N = function (o) {
          var e = o.portfolioItem,
            n = o.isPortfolioRenaming,
            l = o.setPortfolioRenaming,
            u = o.movePortfolio,
            c = Object(t.useContext)(p),
            d = c.refreshPortfolio,
            m = c.renamePortfolioItem,
            b = c.removePortfolioItem,
            g = c.openPortfolioItem,
            k = c.downloadPortfolioItem,
            h = c.isNameDuplicated,
            v = c.setActivePortfolioItem,
            P = e.name,
            A = e.nameWithoutExtension,
            _ = e.extension,
            N = e.id,
            j = I(Object(a.a)(), 1)[0],
            D = Object(t.useRef)(),
            R = I(Object(t.useState)(!1), 2),
            L = R[0],
            S = R[1],
            C = I(Object(t.useState)(A), 2),
            M = C[0],
            F = C[1],
            W = Object(t.useCallback)(
              function () {
                n || (g(e), v(e.id));
              },
              [n, e, g, v],
            ),
            G = function () {
              return !M || A === M || h("".concat(M, ".").concat(_), N);
            },
            B = function () {
              (l(!1), m(N, "".concat(M, ".").concat(_)));
            },
            H = function () {
              (n && (l(!1), F(A)), d());
            };
          Object(t.useEffect)(
            function () {
              (n && (D.current.focus(), D.current.select()), S(!n));
            },
            [n],
          );
          var V = "".concat(y.a.BOOKMARK_OUTLINE_FLYOUT, "-").concat(N),
            U = Object(i.e)(function (o) {
              return s.a.getFlyout(o, V);
            }),
            q = {
              moreOptionsDataElement: "portfolio-item-more-button-".concat(N),
              flyoutToggleElement: V,
            },
            z = {
              shouldHideDeleteButton: !1,
              currentFlyout: U,
              flyoutSelector: V,
              type: "portfolio",
              handleOnClick: function (o) {
                switch (o) {
                  case w.b.MOVE_UP:
                  case w.b.MOVE_DOWN:
                    u(N, o);
                    break;
                  case w.b.OPENFILE:
                    Object(O.g)(_) && g(e);
                    break;
                  case w.b.RENAME:
                    l(!0);
                    break;
                  case w.b.DOWNLOAD:
                    k(e);
                    break;
                  case w.b.DELETE:
                    b(N);
                }
              },
            };
          return r.a.createElement(
            "div",
            { className: "bookmark-outline-single-container" },
            L &&
              r.a.createElement(E.a, {
                iconGlyph:
                  "icon-header-page-manipulation-page-layout-single-page-line",
                labelHeader: P,
                enableMoreOptionsContextMenuFlyout: !0,
                onDoubleClick: W,
                contextMenuMoreButtonOptions: q,
                contentMenuFlyoutOptions: z,
              }),
            n &&
              r.a.createElement(
                "div",
                {
                  className: T()({
                    "bookmark-outline-label-row": !0,
                    editing: n,
                  }),
                },
                r.a.createElement(
                  "label",
                  { className: "portfolio-input-label", htmlFor: N },
                  j("portfolio.portfolioDocumentTitle"),
                ),
                r.a.createElement(x.a, {
                  id: N,
                  type: "text",
                  name: "outline",
                  ref: D,
                  wrapperClassName: "portfolio-input",
                  value: M,
                  onKeyDown: function (o) {
                    ("Enter" === o.key &&
                      (o.stopPropagation(), n && !G() && B()),
                      "Escape" === o.key && H());
                  },
                  onChange: function (o) {
                    return F(o.target.value);
                  },
                  fillWidth: !0,
                  messageText: h("".concat(M, ".").concat(_), N)
                    ? j("portfolio.fileNameAlreadyExists")
                    : "",
                  message: h("".concat(M, ".").concat(_), N)
                    ? "warning"
                    : "default",
                  "aria-label": ""
                    .concat(j("action.rename"), " ")
                    .concat(M, ".")
                    .concat(_),
                }),
                r.a.createElement(
                  "div",
                  { className: "bookmark-outline-editing-controls" },
                  r.a.createElement(f.a, {
                    className: "bookmark-outline-cancel-button",
                    label: j("action.cancel"),
                    onClick: H,
                  }),
                  n &&
                    r.a.createElement(f.a, {
                      className: "bookmark-outline-save-button",
                      label: j("action.save"),
                      isSubmitType: !0,
                      disabled: G(),
                      onClick: B,
                    }),
                ),
              ),
          );
        };
      N.propTypes = _;
      var j = N;
      n(1764);
      function D(o, e) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, e) {
            var n =
              null == o
                ? null
                : ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
            if (null != n) {
              var t,
                r,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(o)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (t = i.call(n)).done) &&
                    (l.push(t.value), l.length !== e);
                    u = !0
                  );
              } catch (o) {
                ((c = !0), (r = o));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return l;
            }
          })(o, e) ||
          (function (o, e) {
            if (o) {
              if ("string" == typeof o) return R(o, e);
              var n = {}.toString.call(o).slice(8, -1);
              return (
                "Object" === n && o.constructor && (n = o.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(o)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? R(o, e)
                    : void 0
              );
            }
          })(o, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function R(o, e) {
        (null == e || e > o.length) && (e = o.length);
        for (var n = 0, t = Array(e); n < e; n++) t[n] = o[n];
        return t;
      }
      var L = {
          portfolioItem: b.a.object.isRequired,
          connectDragSource: b.a.func,
          connectDragPreview: b.a.func,
          connectDropTarget: b.a.func,
          isDragging: b.a.bool,
          isDraggedUpwards: b.a.bool,
          isDraggedDownwards: b.a.bool,
          movePortfolio: b.a.func,
        },
        S = Object(t.forwardRef)(function (o, e) {
          var n = o.portfolioItem,
            i = o.connectDragSource,
            a = o.connectDragPreview,
            l = o.connectDropTarget,
            u = o.isDragging,
            c = o.isDraggedUpwards,
            s = o.isDraggedDownwards,
            d = o.movePortfolio,
            f = Object(t.useRef)(null);
          (i(f), a(Object(h.a)(), { captureDraggingState: !0 }), l(f));
          var p = u ? 0.5 : 1;
          Object(t.useImperativeHandle)(e, function () {
            return {
              getNode: function () {
                return f.current;
              },
            };
          });
          var m = D(Object(t.useState)(!1), 2),
            b = m[0],
            g = m[1];
          return r.a.createElement(
            "div",
            {
              ref: f,
              className: "outline-drag-container",
              style: { opacity: p },
            },
            r.a.createElement("div", {
              className: "outline-drag-line",
              style: { opacity: c ? 1 : 0 },
            }),
            r.a.createElement(j, {
              movePortfolio: d,
              portfolioItem: n,
              isPortfolioRenaming: b,
              setPortfolioRenaming: g,
            }),
            r.a.createElement("div", {
              className: "outline-drag-line",
              style: { opacity: s ? 1 : 0 },
            }),
          );
        });
      ((S.propTypes = L), (S.displayName = "PortfolioItem"));
      var C = Object(g.a)(
        v.c.PORTFOLIO,
        {
          hover: function (o, e, n) {
            if (n) {
              var t = e.getItem();
              if (t) {
                var r = t.dragPortfolioItem,
                  i = t.dragSourceNode,
                  a = o.portfolioItem,
                  l = n.getNode();
                if (i && l) {
                  if (i.contains(l))
                    return (
                      (t.dropTargetNode = void 0),
                      void (t.dropLocation = v.b.INITIAL)
                    );
                  if (((t.dropTargetNode = l), r.id !== a.id)) {
                    var u = l.getBoundingClientRect(),
                      c = u.height / 2 + u.top,
                      s = e.getClientOffset().y;
                    switch (!0) {
                      case s > c:
                        ((t.dropLocation = v.b.BELOW_TARGET),
                          l.classList.remove("isNesting"));
                        break;
                      case s < c:
                        ((t.dropLocation = v.b.ABOVE_TARGET),
                          l.classList.remove("isNesting"));
                        break;
                      default:
                        ((t.dropLocation = v.b.INITIAL),
                          l.classList.remove("isNesting"));
                    }
                  }
                }
              }
            }
          },
          drop: function (o, e, n) {
            if (n) {
              var t = e.getItem(),
                r = t.dragPortfolioItem,
                i = t.dropTargetNode,
                a = o.portfolioItem,
                l = o.movePortfolioInward,
                u = o.movePortfolioBeforeTarget,
                c = o.movePortfolioAfterTarget;
              if (i) {
                switch (t.dropLocation) {
                  case v.b.ON_TARGET_HORIZONTAL_MIDPOINT:
                    l(r, a);
                    break;
                  case v.b.ABOVE_TARGET:
                    u(r.id, a.id);
                    break;
                  case v.b.BELOW_TARGET:
                    c(r.id, a.id);
                }
                (i.classList.remove("isNesting"),
                  (t.dropLocation = v.b.INITIAL));
              }
            }
          },
        },
        function (o, e) {
          var n, t;
          return {
            connectDropTarget: o.dropTarget(),
            isDraggedUpwards:
              e.isOver({ shallow: !0 }) &&
              (null === (n = e.getItem()) || void 0 === n
                ? void 0
                : n.dropLocation) === v.b.ABOVE_TARGET,
            isDraggedDownwards:
              e.isOver({ shallow: !0 }) &&
              (null === (t = e.getItem()) || void 0 === t
                ? void 0
                : t.dropLocation) === v.b.BELOW_TARGET,
          };
        },
      )(
        Object(k.a)(
          v.c.PORTFOLIO,
          {
            beginDrag: function (o, e, n) {
              return {
                sourceId: e.sourceId,
                dragPortfolioItem: o.portfolioItem,
                dragSourceNode: n.getNode(),
                dropLocation: v.b.INITIAL,
              };
            },
            canDrag: function () {
              return !0;
            },
          },
          function (o, e) {
            return {
              connectDragSource: o.dragSource(),
              connectDragPreview: o.dragPreview(),
              isDragging: e.isDragging(),
            };
          },
        )(S),
      );
      C.propTypes = L;
      var M = C,
        F = n(1869),
        W = {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        },
        G = function (o, e) {
          if (!o || !e) return { display: "none" };
          var n = e.x,
            t = e.y,
            r = "translate(calc("
              .concat(n, "px - 50%), calc(")
              .concat(t, "px - 100%))");
          return { transform: r, WebkitTransform: r };
        },
        B = function () {
          var o = Object(F.a)(function (o) {
              return {
                itemType: o.getItemType(),
                item: o.getItem(),
                isDragging: o.isDragging(),
                initialOffset: o.getInitialSourceClientOffset(),
                currentOffset: o.getClientOffset(),
              };
            }),
            e = o.itemType,
            n = o.item,
            t = o.isDragging,
            i = o.initialOffset,
            a = o.currentOffset;
          return t
            ? r.a.createElement(
                "div",
                { style: W },
                r.a.createElement(
                  "div",
                  {
                    className: "bookmark-outline-single-container preview",
                    style: G(i, a),
                  },
                  (function () {
                    if (!n) return null;
                    var o = n.dragPortfolioItem;
                    return e === v.c.PORTFOLIO
                      ? r.a.createElement(r.a.Fragment, null, o.name)
                      : null;
                  })(),
                ),
              )
            : null;
        },
        H = n(60),
        V = n(45),
        U = n(136),
        q = n(1);
      n(1766);
      function z(o, e) {
        var n =
          ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
          o["@@iterator"];
        if (!n) {
          if (
            Array.isArray(o) ||
            (n = X(o)) ||
            (e && o && "number" == typeof o.length)
          ) {
            n && (o = n);
            var t = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return t >= o.length
                  ? { done: !0 }
                  : { done: !1, value: o[t++] };
              },
              e: function (o) {
                throw o;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          a = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(o);
          },
          n: function () {
            var o = n.next();
            return ((a = o.done), o);
          },
          e: function (o) {
            ((l = !0), (i = o));
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function K(o) {
        return (
          (function (o) {
            if (Array.isArray(o)) return oo(o);
          })(o) ||
          (function (o) {
            if (
              ("undefined" != typeof Symbol && null != o[Symbol.iterator]) ||
              null != o["@@iterator"]
            )
              return Array.from(o);
          })(o) ||
          X(o) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function $() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var o,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          t = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, t, r, i) {
          var u = t && t.prototype instanceof l ? t : l,
            c = Object.create(u.prototype);
          return (
            J(
              c,
              "_invoke",
              (function (n, t, r) {
                var i,
                  l,
                  u,
                  c = 0,
                  s = r || [],
                  d = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: o,
                    a: p,
                    f: p.bind(o, 4),
                    d: function (e, n) {
                      return ((i = e), (l = 0), (u = o), (f.n = n), a);
                    },
                  };
                function p(n, t) {
                  for (
                    l = n, u = t, e = 0;
                    !d && c && !r && e < s.length;
                    e++
                  ) {
                    var r,
                      i = s[e],
                      p = f.p,
                      m = i[2];
                    n > 3
                      ? (r = m === t) &&
                        ((u = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = o))
                      : i[0] <= p &&
                        ((r = n < 2 && p < i[1])
                          ? ((l = 0), (f.v = t), (f.n = i[1]))
                          : p < m &&
                            (r = n < 3 || i[0] > t || t > m) &&
                            ((i[4] = n), (i[5] = t), (f.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((d = !0), t);
                }
                return function (r, s, m) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === s && p(s, m), l = s, u = m;
                    (e = l < 2 ? o : u) || !d;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (f.n = -1), p(l, u))
                          : (f.n = u)
                        : (f.v = u));
                    try {
                      if (((c = 2), i)) {
                        if ((l || (r = "next"), (e = i[r]))) {
                          if (!(e = e.call(i, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (e = i.return) && e.call(i),
                            l < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = o;
                      } else if ((e = (d = f.n < 0) ? u : n.call(t, f)) !== a)
                        break;
                    } catch (e) {
                      ((i = o), (l = 1), (u = e));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: e, done: d };
                };
              })(n, r, i),
              !0,
            ),
            c
          );
        }
        var a = {};
        function l() {}
        function u() {}
        function c() {}
        e = Object.getPrototypeOf;
        var s = [][t]
            ? e(e([][t]()))
            : (J((e = {}), t, function () {
                return this;
              }),
              e),
          d = (c.prototype = l.prototype = Object.create(s));
        function f(o) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(o, c)
              : ((o.__proto__ = c), J(o, r, "GeneratorFunction")),
            (o.prototype = Object.create(d)),
            o
          );
        }
        return (
          (u.prototype = c),
          J(d, "constructor", c),
          J(c, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          J(c, r, "GeneratorFunction"),
          J(d),
          J(d, r, "Generator"),
          J(d, t, function () {
            return this;
          }),
          J(d, "toString", function () {
            return "[object Generator]";
          }),
          ($ = function () {
            return { w: i, m: f };
          })()
        );
      }
      function J(o, e, n, t) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (o) {
          r = 0;
        }
        (J = function (o, e, n, t) {
          if (e)
            r
              ? r(o, e, {
                  value: n,
                  enumerable: !t,
                  configurable: !t,
                  writable: !t,
                })
              : (o[e] = n);
          else {
            var i = function (e, n) {
              J(o, e, function (o) {
                return this._invoke(e, n, o);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(o, e, n, t);
      }
      function Z(o, e, n, t, r, i, a) {
        try {
          var l = o[i](a),
            u = l.value;
        } catch (o) {
          return void n(o);
        }
        l.done ? e(u) : Promise.resolve(u).then(t, r);
      }
      function Y(o) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (t, r) {
            var i = o.apply(e, n);
            function a(o) {
              Z(i, t, r, a, l, "next", o);
            }
            function l(o) {
              Z(i, t, r, a, l, "throw", o);
            }
            a(void 0);
          });
        };
      }
      function Q(o, e) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, e) {
            var n =
              null == o
                ? null
                : ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
            if (null != n) {
              var t,
                r,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(o)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (t = i.call(n)).done) &&
                    (l.push(t.value), l.length !== e);
                    u = !0
                  );
              } catch (o) {
                ((c = !0), (r = o));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return l;
            }
          })(o, e) ||
          X(o, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function X(o, e) {
        if (o) {
          if ("string" == typeof o) return oo(o, e);
          var n = {}.toString.call(o).slice(8, -1);
          return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(o)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? oo(o, e)
                : void 0
          );
        }
      }
      function oo(o, e) {
        (null == e || e > o.length) && (e = o.length);
        for (var n = 0, t = Array(e); n < e; n++) t[n] = o[n];
        return t;
      }
      var eo = function () {
        var o = Q(
            Object(i.e)(function (o) {
              return [
                s.a.isElementDisabled(o, y.a.PORTFOLIO_PANEL),
                s.a.getTabManager(o),
                s.a.getPortfolio(o),
              ];
            }, i.c),
            3,
          ),
          e = o[0],
          n = o[1],
          m = o[2],
          b = Object(i.d)(),
          g = Q(Object(a.a)(), 1)[0],
          k = Q(Object(t.useState)(null), 2),
          h = k[0],
          x = k[1],
          E = Q(Object(t.useState)(!1), 2),
          P = E[0],
          T = E[1],
          I = Object(t.useRef)(null),
          A = function () {
            var o;
            null == I || null === (o = I.current) || void 0 === o || o.click();
          },
          _ = (function () {
            var o = Y(
              $().m(function o(e) {
                var n, t, r, i, a, l, u, c;
                return $().w(function (o) {
                  for (;;)
                    switch (o.n) {
                      case 0:
                        if (1 !== (n = e.target.files).length) {
                          o.n = 4;
                          break;
                        }
                        if (
                          ((t = n[0]),
                          !m.some(function (o) {
                            return o.name === t.name;
                          }))
                        ) {
                          o.n = 1;
                          break;
                        }
                        ((r = g("portfolio.fileAlreadyExistsMessage", {
                          fileName: t.name,
                        })),
                          (i = g("portfolio.fileAlreadyExists")),
                          (a = g("portfolio.reselect")),
                          (l = {
                            message: r,
                            title: i,
                            confirmBtnText: a,
                            onConfirm: function () {
                              return A();
                            },
                          }),
                          b(d.a.showWarningMessage(l)),
                          (o.n = 4));
                        break;
                      case 1:
                        if (!(u = q.a.getDocument())) {
                          o.n = 4;
                          break;
                        }
                        return ((o.n = 2), u.getPDFDoc());
                      case 2:
                        if (!(c = o.v)) {
                          o.n = 4;
                          break;
                        }
                        return ((o.n = 3), Object(O.b)(c, t));
                      case 3:
                        D();
                      case 4:
                        return o.a(2);
                    }
                }, o);
              }),
            );
            return function (e) {
              return o.apply(this, arguments);
            };
          })(),
          N = (function () {
            var o = Y(
              $().m(function o(e, n) {
                return $().w(function (o) {
                  for (;;)
                    switch (o.n) {
                      case 0:
                        return ((o.n = 1), Object(O.h)(e, n));
                      case 1:
                        D();
                      case 2:
                        return o.a(2);
                    }
                }, o);
              }),
            );
            return function (e, n) {
              return o.apply(this, arguments);
            };
          })(),
          D = (function () {
            var o = Y(
              $().m(function o() {
                var e, n, t, r;
                return $().w(function (o) {
                  for (;;)
                    switch (o.n) {
                      case 0:
                        return ((e = b), (n = d.a), (o.n = 1), Object(O.f)());
                      case 1:
                        ((t = o.v),
                          (r = n.setPortfolio.call(n, t)),
                          e(r),
                          T(!1));
                      case 2:
                        return o.a(2);
                    }
                }, o);
              }),
            );
            return function () {
              return o.apply(this, arguments);
            };
          })(),
          R = (function () {
            var o = Y(
              $().m(function o(e) {
                return $().w(function (o) {
                  for (;;)
                    switch (o.n) {
                      case 0:
                        return (
                          b(d.a.openElement(y.a.LOADING_MODAL)),
                          (o.n = 1),
                          Object(O.e)(e)
                        );
                      case 1:
                        b(d.a.closeElement(y.a.LOADING_MODAL));
                      case 2:
                        return o.a(2);
                    }
                }, o);
              }),
            );
            return function (e) {
              return o.apply(this, arguments);
            };
          })(),
          L = function (o, e) {
            console.log(o.name, "Inward", e.name);
          },
          S = (function () {
            var o = Y(
              $().m(function o(e, n, t, r) {
                var i, a, l, u, c, s, d, f, p, m;
                return $().w(
                  function (o) {
                    for (;;)
                      switch ((o.p = o.n)) {
                        case 0:
                          ((i = K(e)),
                            (a = i.findIndex(function (o) {
                              return o.id === n;
                            })),
                            (l = i.findIndex(function (o) {
                              return o.id === t;
                            })),
                            (u = l),
                            r === v.b.ABOVE_TARGET && a < l && (u = l - 1),
                            r === v.b.BELOW_TARGET && a > l && (u = l + 1),
                            i.splice(u, 0, i.splice(a, 1)[0]),
                            (c = z(i.entries())),
                            (o.p = 1),
                            c.s());
                        case 2:
                          if ((s = c.n()).done) {
                            o.n = 4;
                            break;
                          }
                          if (
                            ((d = Q(s.value, 2)),
                            (f = d[0]),
                            (p = d[1]).order === f)
                          ) {
                            o.n = 3;
                            break;
                          }
                          return ((o.n = 3), Object(O.i)(p.id, f));
                        case 3:
                          o.n = 2;
                          break;
                        case 4:
                          o.n = 6;
                          break;
                        case 5:
                          ((o.p = 5), (m = o.v), c.e(m));
                        case 6:
                          return ((o.p = 6), c.f(), o.f(6));
                        case 7:
                          return o.a(2);
                      }
                  },
                  o,
                  null,
                  [[1, 5, 6, 7]],
                );
              }),
            );
            return function (e, n, t, r) {
              return o.apply(this, arguments);
            };
          })(),
          C = (function () {
            var o = Y(
              $().m(function o(e, n) {
                var t, r, i, a, l, u, c, s, d;
                return $().w(
                  function (o) {
                    for (;;)
                      switch ((o.p = o.n)) {
                        case 0:
                          return ((o.n = 1), Object(O.f)());
                        case 1:
                          if (
                            ((t = o.v),
                            (r = t.findIndex(function (o) {
                              return o.id === e;
                            })),
                            !(
                              (0 === r && n === w.b.MOVE_UP) ||
                              (r === t.length - 1 && n === w.b.MOVE_DOWN)
                            ))
                          ) {
                            o.n = 2;
                            break;
                          }
                          return o.a(2);
                        case 2:
                          ((i = n === w.b.MOVE_UP ? r - 1 : r + 1),
                            t.splice(i, 0, t.splice(r, 1)[0]),
                            (a = z(t.entries())),
                            (o.p = 3),
                            a.s());
                        case 4:
                          if ((l = a.n()).done) {
                            o.n = 6;
                            break;
                          }
                          if (
                            ((u = Q(l.value, 2)),
                            (c = u[0]),
                            (s = u[1]).order === c)
                          ) {
                            o.n = 5;
                            break;
                          }
                          return ((o.n = 5), Object(O.i)(s.id, c));
                        case 5:
                          o.n = 4;
                          break;
                        case 6:
                          o.n = 8;
                          break;
                        case 7:
                          ((o.p = 7), (d = o.v), a.e(d));
                        case 8:
                          return ((o.p = 8), a.f(), o.f(8));
                        case 9:
                          return ((o.n = 10), D());
                        case 10:
                          return o.a(2);
                      }
                  },
                  o,
                  null,
                  [[3, 7, 8, 9]],
                );
              }),
            );
            return function (e, n) {
              return o.apply(this, arguments);
            };
          })(),
          F = Object(t.useCallback)(
            (function () {
              var o = Y(
                $().m(function o(e, n) {
                  return $().w(function (o) {
                    for (;;)
                      switch (o.n) {
                        case 0:
                          return ((o.n = 1), S(m, e, n, v.b.ABOVE_TARGET));
                        case 1:
                          D();
                        case 2:
                          return o.a(2);
                      }
                  }, o);
                }),
              );
              return function (e, n) {
                return o.apply(this, arguments);
              };
            })(),
            [m],
          ),
          W = Object(t.useCallback)(
            (function () {
              var o = Y(
                $().m(function o(e, n) {
                  return $().w(function (o) {
                    for (;;)
                      switch (o.n) {
                        case 0:
                          return ((o.n = 1), S(m, e, n, v.b.BELOW_TARGET));
                        case 1:
                          D();
                        case 2:
                          return o.a(2);
                      }
                  }, o);
                }),
              );
              return function (e, n) {
                return o.apply(this, arguments);
              };
            })(),
            [m],
          );
        return e
          ? null
          : r.a.createElement(
              H.a,
              {
                className: "Panel PortfolioPanel bookmark-outline-panel",
                dataElement: y.a.PORTFOLIO_PANEL,
              },
              r.a.createElement(
                "div",
                { className: "bookmark-outline-panel-header" },
                r.a.createElement(
                  "h2",
                  { className: "header-title" },
                  g("portfolio.portfolioPanelTitle"),
                ),
                r.a.createElement(
                  "div",
                  { className: "portfolio-panel-control" },
                  r.a.createElement(f.a, {
                    className: "portfolio-panel-control-button",
                    dataElement: y.a.PORTFOLIO_ADD_FILE,
                    img: "icon-add-file",
                    title: g("portfolio.addFile"),
                    disabled: P,
                    onClick: A,
                  }),
                  r.a.createElement("input", {
                    ref: I,
                    style: { display: "none" },
                    type: "file",
                    onChange: function (o) {
                      (_(o), (o.target.value = null));
                    },
                  }),
                ),
              ),
              r.a.createElement(
                p.Provider,
                {
                  value: {
                    activePortfolioItem: h,
                    setActivePortfolioItem: x,
                    isPortfolioItemActive: function (o) {
                      return (null == o ? void 0 : o.id) === h;
                    },
                    isAddingNewFolder: P,
                    setAddingNewFolder: T,
                    addNewFolder: function (o) {
                      (o || (o = g("message.untitled")), D());
                    },
                    renamePortfolioItem: N,
                    removePortfolioItem: function (o) {
                      var e,
                        n = m.find(function (e) {
                          return e.id === o;
                        }),
                        t = {
                          message: g("portfolio.deletePortfolio", {
                            fileName: n.name,
                          }),
                          title: g("action.delete"),
                          confirmBtnText: g("action.delete"),
                          onConfirm:
                            ((e = Y(
                              $().m(function e() {
                                return $().w(function (e) {
                                  for (;;)
                                    switch (e.n) {
                                      case 0:
                                        return ((e.n = 1), Object(O.d)(o));
                                      case 1:
                                        D();
                                      case 2:
                                        return e.a(2);
                                    }
                                }, e);
                              }),
                            )),
                            function () {
                              return e.apply(this, arguments);
                            }),
                        };
                      b(d.a.showWarningMessage(t));
                    },
                    openPortfolioItem: function (o) {
                      Object(O.g)(o.extension) &&
                        (b(Object(U.b)()), b(d.a.addPortfolioTab(o)));
                    },
                    downloadPortfolioItem: R,
                    refreshPortfolio: D,
                    isNameDuplicated: function (o, e) {
                      return m
                        .filter(function (o) {
                          return o.id !== e;
                        })
                        .some(function (e) {
                          return e.name === o;
                        });
                    },
                    tabManager: n,
                  },
                },
                r.a.createElement(
                  l.a,
                  { backend: V.l ? u.a : c.a },
                  r.a.createElement(B, null),
                  r.a.createElement(
                    "div",
                    { className: "portfolio-panel-list" },
                    m.map(function (o) {
                      return r.a.createElement(M, {
                        key: o.id,
                        portfolioItem: o,
                        movePortfolioInward: L,
                        movePortfolioBeforeTarget: F,
                        movePortfolioAfterTarget: W,
                        movePortfolio: C,
                      });
                    }),
                    P &&
                      r.a.createElement(
                        H.a,
                        {
                          className:
                            "bookmark-outline-single-container editing",
                        },
                        r.a.createElement(j, {
                          name: "",
                          id: "0",
                          isFolder: !0,
                          isAdding: !0,
                        }),
                      ),
                  ),
                ),
              ),
            );
      };
      e.default = eo;
    },
  },
]);
//# sourceMappingURL=chunk.41.js.map
