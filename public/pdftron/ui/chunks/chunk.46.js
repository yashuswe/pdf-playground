(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    1575: function (o, e, n) {
      var t = n(35),
        a = n(1651);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[o.i, a, ""]]);
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
            const a = e[t];
            if (0 === t)
              (a.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                }));
            else {
              const e = o.cloneNode(!0);
              (a.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      t(a, i);
      o.exports = a.locals || {};
    },
    1595: function (o, e, n) {
      "use strict";
      var t = n(0),
        a = n.n(t),
        i = n(2),
        r = n.n(i),
        l = n(41),
        c =
          (n(1706),
          {
            img: r.a.string,
            label: r.a.oneOfType([r.a.string, r.a.number]),
            dataElement: r.a.string,
            onClick: r.a.func,
            ariaLabel: r.a.string,
            ariaControls: r.a.string,
            role: r.a.string,
            disabled: r.a.bool,
          }),
        u = function (o) {
          var e = o.img,
            n = o.dataElement,
            t = o.onClick,
            i = o.label,
            r = o.ariaLabel,
            c = o.ariaControls,
            u = o.role,
            s = o.disabled;
          return a.a.createElement(l.a, {
            className: "TextButton",
            img: e,
            label: i,
            dataElement: n,
            onClick: t,
            ariaLabel: r,
            ariaControls: c,
            role: u,
            disabled: s,
          });
        };
      u.propTypes = c;
      var s = a.a.memo(u);
      e.a = s;
    },
    1651: function (o, e, n) {
      (o.exports = n(36)(!1)).push([
        o.i,
        ".bookmark-outline-panel{display:flex;padding-inline-start:var(--padding);padding-inline-end:var(--padding-small)}.bookmark-outline-control-button{width:auto}.bookmark-outline-control-button span{color:inherit}.bookmark-outline-control-button,.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{color:var(--secondary-button-text)}.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{opacity:.5}.bookmark-outline-control-button.disabled span,.bookmark-outline-control-button[disabled] span{color:inherit}.bookmark-outline-control-button:not(.disabled):active,.bookmark-outline-control-button:not(.disabled):hover,.bookmark-outline-control-button:not([disabled]):active,.bookmark-outline-control-button:not([disabled]):hover{color:var(--secondary-button-hover)}.bookmark-outline-panel-header{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;padding:var(--padding-tiny);border-bottom:1px solid var(--divider)}.bookmark-outline-panel-header .header-title{font-size:16px}.bookmark-outline-row{flex-grow:1;overflow-y:auto}.msg-no-bookmark-outline{color:var(--placeholder-text);text-align:center}.bookmark-outline-single-container{display:flex;flex-flow:row nowrap;align-items:flex-start;border-radius:4px;margin-inline-start:2px;margin-inline-end:2px}.bookmark-outline-single-container.default{padding:var(--padding-tiny);border:1px solid transparent}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:hover,.bookmark-outline-single-container.default[focus-within]{cursor:pointer}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:focus-within,.bookmark-outline-single-container.default:hover{cursor:pointer}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button,.bookmark-outline-single-container.default[focus-within] .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:focus-within .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default[focus-within]{border-color:transparent}.bookmark-outline-single-container.default:focus-within{border-color:transparent}.bookmark-outline-single-container.default .bookmark-outline-label-row{overflow:hidden}.bookmark-outline-single-container.default.focus-visible,.bookmark-outline-single-container.default:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.editing{background-color:var(--faded-component-background);padding:var(--padding-medium) 20px}.bookmark-outline-single-container.editing.focus-visible,.bookmark-outline-single-container.editing:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.preview{display:inline-flex;margin-top:0;padding:var(--padding-small);background-color:var(--component-background);box-shadow:0 0 3px var(--note-box-shadow)}.bookmark-outline-single-container .bookmark-outline-checkbox{flex-grow:0;flex-shrink:0;margin-top:2px;margin-bottom:2px;margin-inline-end:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-label-row{flex-grow:1;flex-shrink:1;display:flex;flex-flow:row wrap;align-items:flex-start;position:relative;overflow:hidden}.bookmark-outline-single-container .bookmark-outline-label{font-weight:600;flex-grow:1;flex-shrink:1;margin-bottom:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-input,.bookmark-outline-single-container .bookmark-outline-text{flex-grow:1;flex-shrink:1;flex-basis:calc(100% - 22px);margin-top:2px;margin-bottom:2px}.bookmark-outline-single-container .bookmark-text-input{margin-inline-start:var(--padding-large)}.bookmark-outline-single-container .bookmark-outline-input{color:var(--text-color);width:calc(100% - var(--padding-large));padding:var(--padding-small);border:1px solid var(--border)}.bookmark-outline-single-container .bookmark-outline-input:focus{border-color:var(--outline-color)}.bookmark-outline-single-container .bookmark-outline-input::-moz-placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-input::placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-more-button{display:none;flex-grow:0;flex-shrink:0;width:16px;height:16px;margin:2px 2px 2px var(--padding-tiny)}.bookmark-outline-single-container .bookmark-outline-more-button .Icon{width:14px;height:14px}.bookmark-outline-single-container .bookmark-outline-more-button.icon-only:hover:not(:disabled):not(.disabled){box-shadow:none;outline:solid 1px var(--hover-border)}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within].icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within.icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within] .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-editing-controls{padding:2px;flex-basis:100%;display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:center;margin-top:var(--padding-medium)}.bookmark-outline-single-container .bookmark-outline-cancel-button,.bookmark-outline-single-container .bookmark-outline-save-button{width:auto;padding:6px var(--padding)}.bookmark-outline-single-container .bookmark-outline-cancel-button{color:var(--secondary-button-text)}.bookmark-outline-single-container .bookmark-outline-cancel-button:hover{color:var(--secondary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button{color:var(--primary-button-text);background-color:var(--primary-button);margin-inline-start:var(--padding-tiny);border-radius:4px}.bookmark-outline-single-container .bookmark-outline-save-button:hover{background-color:var(--primary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button.disabled,.bookmark-outline-single-container .bookmark-outline-save-button:disabled{background-color:var(--primary-button)!important;opacity:.5}.bookmark-outline-single-container .bookmark-outline-save-button.disabled span,.bookmark-outline-single-container .bookmark-outline-save-button:disabled span{color:var(--primary-button-text)}.bookmark-outline-footer{border-top:1.5px solid var(--gray-4);padding-top:var(--padding-medium);padding-bottom:var(--padding-medium);display:flex;justify-content:center;align-items:center}.bookmark-outline-footer .add-new-button .Icon{width:14px;height:14px;margin-inline-end:var(--padding-tiny);color:inherit;fill:currentColor}.bookmark-outline-footer .add-new-button.disabled .Icon.disabled,.bookmark-outline-footer .add-new-button.disabled .Icon.disabled path,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled path{color:inherit;fill:currentColor}.bookmark-outline-footer .multi-selection-button{width:auto;padding:7px}.bookmark-outline-footer .multi-selection-button .Icon{width:18px;height:18px}.bookmark-outline-footer .multi-selection-button:not(:first-child){margin-inline-start:var(--padding-tiny)}.bookmark-outline-footer .multi-selection-button:hover{background-color:transparent}.bookmark-outline-footer .multi-selection-button.disabled:hover,.bookmark-outline-footer .multi-selection-button:disabled:hover{box-shadow:none}",
        "",
      ]);
    },
    1706: function (o, e, n) {
      var t = n(35),
        a = n(1707);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[o.i, a, ""]]);
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
            const a = e[t];
            if (0 === t)
              (a.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                }));
            else {
              const e = o.cloneNode(!0);
              (a.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      t(a, i);
      o.exports = a.locals || {};
    },
    1707: function (o, e, n) {
      (o.exports = n(36)(!1)).push([
        o.i,
        ".TextButton{color:var(--secondary-button-text);width:-moz-fit-content;width:fit-content;padding-inline-start:8px;padding-inline-end:8px}.TextButton .Icon{display:flex;align-items:center}.TextButton svg{color:var(--secondary-button-text);height:14px;width:14px}.TextButton:hover{box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}",
        "",
      ]);
    },
    1735: function (o, e, n) {
      var t = n(35),
        a = n(1736);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[o.i, a, ""]]);
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
            const a = e[t];
            if (0 === t)
              (a.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                }));
            else {
              const e = o.cloneNode(!0);
              (a.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      t(a, i);
      o.exports = a.locals || {};
    },
    1736: function (o, e, n) {
      ((e = o.exports = n(36)(!1)).push([
        o.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.BookmarksPanel{display:flex;flex-direction:column;flex:1;font-size:var(--font-size-default)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel{margin:16px;padding:0;overflow-y:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel{margin:16px;padding:0;overflow-y:auto}}.BookmarksPanel .bookmark-switch{-webkit-font-smoothing:antialiased;margin-top:var(--padding-medium);padding-inline-start:4px}.BookmarksPanel .bookmark-outline-single-container{margin-top:var(--padding-medium)}.BookmarksPanel .bookmark-outline-single-container[focus-within]:not(.editing){background-color:var(--outline-selected);outline:1px solid var(--bookmark-outline-hover-border)}.BookmarksPanel .bookmark-outline-single-container:focus-within:not(.editing){background-color:var(--outline-selected);outline:1px solid var(--bookmark-outline-hover-border)}.BookmarksPanel .msg-no-bookmark-outline{margin-top:var(--padding)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .ui__choice__label{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .ui__choice__label{font-size:13px}}.BookmarksPanel .ui__choice__input__switch{background-color:var(--gray-6)!important}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-row{overflow:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-row{overflow:auto}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-cancel-button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-control-button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-save-button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-cancel-button,.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-control-button,.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-save-button{font-size:13px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-input,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-text-input{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-input,.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-text-input{font-size:13px}}.BookmarksPanel .panel-list-row .Button{font-weight:700}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1780: function (o, e, n) {
      "use strict";
      n.r(e);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
        n(34),
        n(81),
        n(27),
        n(21),
        n(50),
        n(20),
        n(12),
        n(44),
        n(22),
        n(31),
        n(18),
        n(16),
        n(28),
        n(48),
        n(24),
        n(47),
        n(49),
        n(37),
        n(8),
        n(111),
        n(17),
        n(19),
        n(62),
        n(11),
        n(29),
        n(13));
      var t = n(0),
        a = n.n(t),
        i = n(6),
        r = n(305),
        l = (n(153), n(94), n(4)),
        c = n(15),
        u = n.n(c),
        s = n(1),
        d = n(2),
        m = n.n(d),
        b = n(41),
        k = n(1595),
        p = n(60),
        f = n(1584),
        g = n(5),
        h = n(1597);
      n(1575);
      function v(o, e) {
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
                a,
                i,
                r,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(o)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (t = i.call(n)).done) &&
                    (l.push(t.value), l.length !== e);
                    c = !0
                  );
              } catch (o) {
                ((u = !0), (a = o));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(o, e) ||
          (function (o, e) {
            if (o) {
              if ("string" == typeof o) return w(o, e);
              var n = {}.toString.call(o).slice(8, -1);
              return (
                "Object" === n && o.constructor && (n = o.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(o)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? w(o, e)
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
      function w(o, e) {
        (null == e || e > o.length) && (e = o.length);
        for (var n = 0, t = Array(e); n < e; n++) t[n] = o[n];
        return t;
      }
      var y = {
          text: m.a.string.isRequired,
          label: m.a.string.isRequired,
          defaultLabel: m.a.string,
          pageIndex: m.a.number.isRequired,
          isAdding: m.a.bool,
          isMultiSelectionMode: m.a.bool,
          setSelected: m.a.func,
          onSave: m.a.func.isRequired,
          onRemove: m.a.func,
          onCancel: m.a.func,
          panelSelector: m.a.string,
        },
        x = function (o) {
          var e = o.text,
            n = o.label,
            c = o.defaultLabel,
            d = o.pageIndex,
            m = o.isAdding,
            w = o.isMultiSelectionMode,
            y = o.setSelected,
            x = o.onSave,
            E = o.onRemove,
            O = o.onCancel,
            A = o.panelSelector,
            S = v(Object(r.a)(), 1)[0],
            B = v(Object(t.useState)(!1), 2),
            P = B[0],
            C = B[1],
            T = v(Object(t.useState)(!1), 2),
            j = T[0],
            _ = T[1],
            I = v(Object(t.useState)(e), 2),
            N = I[0],
            M = I[1],
            R = v(Object(t.useState)(void 0), 2),
            L = R[0],
            D = R[1],
            K = Object(t.useRef)(),
            H = function () {
              return !N || e === N;
            },
            z = function () {
              (C(!1), x("" === N.trim() ? S("message.untitled") : N));
            },
            U = function () {
              (C(!1), P && M(e), m && O());
            };
          (Object(t.useEffect)(
            function () {
              N !== e && M(e);
            },
            [e],
          ),
            Object(t.useEffect)(
              function () {
                ((m || P) && (K.current.focus(), K.current.select()),
                  _(!m && !P));
              },
              [P],
            ));
          var W = "".concat(g.a.BOOKMARK_FLYOUT, "-").concat(d),
            q = Object(i.e)(function (o) {
              return l.a.getFlyout(o, W);
            }),
            F = "bookmark-more-button-".concat(A, "-").concat(d),
            V = {
              labelHeader: c,
              description: e,
              enableMoreOptionsContextMenuFlyout: !0,
              contentMenuFlyoutOptions: {
                shouldHideDeleteButton: !1,
                currentFlyout: q,
                flyoutSelector: W,
                type: "bookmark",
                handleOnClick: function (o) {
                  switch (o) {
                    case f.b.RENAME:
                      C(!0);
                      break;
                    case f.b.DELETE:
                      E(d);
                  }
                },
              },
              contextMenuMoreButtonOptions: {
                flyoutToggleElement: W,
                moreOptionsDataElement: F,
              },
              onClick: function (o) {
                j &&
                  1 === o.detail &&
                  D(
                    setTimeout(function () {
                      !(function (o) {
                        s.a.setCurrentPage(o + 1);
                      })(d);
                    }, 300),
                  );
              },
              onDoubleClick: function () {
                j && C(!0);
              },
              checkboxOptions: {
                id: "bookmark-checkbox-".concat(d + 1),
                onChange: function (o) {
                  y(d, o.target.checked);
                },
                ariaLabel: "".concat(S("action.select"), " ").concat(n),
                disabled: !w,
              },
            };
          return a.a.createElement(
            a.a.Fragment,
            null,
            j && a.a.createElement(h.a, V),
            (m || P) &&
              a.a.createElement(
                p.a,
                {
                  className: u()({
                    "bookmark-outline-single-container": !0,
                    editing: m || P,
                    default: j,
                  }),
                  onDoubleClick: function () {
                    j && clearTimeout(L);
                  },
                },
                a.a.createElement(
                  "div",
                  { className: "bookmark-outline-label-row" },
                  a.a.createElement(
                    "div",
                    { className: "bookmark-outline-label" },
                    m || P ? n : c,
                  ),
                  a.a.createElement("input", {
                    type: "text",
                    name: "bookmark",
                    ref: K,
                    className: "bookmark-outline-input bookmark-text-input",
                    "aria-label": S("action.name"),
                    value: N,
                    onKeyDown: function (o) {
                      ("Enter" === o.key &&
                        (o.stopPropagation(), (m || (P && !H())) && z()),
                        "Escape" === o.key && U());
                    },
                    onChange: function (o) {
                      return M(o.target.value);
                    },
                  }),
                  a.a.createElement(
                    "div",
                    { className: "bookmark-outline-editing-controls" },
                    a.a.createElement(k.a, {
                      label: S("action.cancel"),
                      onClick: U,
                      ariaLabel: ""
                        .concat(S("action.cancel"), " ")
                        .concat(S("component.bookmarkPanel")),
                    }),
                    m &&
                      a.a.createElement(b.a, {
                        className: "bookmark-outline-save-button",
                        label: S("action.add"),
                        isSubmitType: !0,
                        onClick: z,
                        ariaLabel: ""
                          .concat(S("action.add"), " ")
                          .concat(S("component.bookmarkPanel")),
                      }),
                    P &&
                      a.a.createElement(b.a, {
                        className: "bookmark-outline-save-button",
                        label: S("action.save"),
                        isSubmitType: !0,
                        disabled: H(),
                        onClick: z,
                        ariaLabel: ""
                          .concat(S("action.save"), " ")
                          .concat(S("component.bookmarkPanel")),
                      }),
                  ),
                ),
              ),
          );
        };
      x.propTypes = y;
      var E = x,
        O = n(160),
        A = n(3);
      n(1735);
      function S(o) {
        return (S =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  "function" == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? "symbol"
                  : typeof o;
              })(o);
      }
      function B(o) {
        return (
          (function (o) {
            if (Array.isArray(o)) return I(o);
          })(o) ||
          (function (o) {
            if (
              ("undefined" != typeof Symbol && null != o[Symbol.iterator]) ||
              null != o["@@iterator"]
            )
              return Array.from(o);
          })(o) ||
          _(o) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function P(o, e) {
        var n = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(o);
          (e &&
            (t = t.filter(function (e) {
              return Object.getOwnPropertyDescriptor(o, e).enumerable;
            })),
            n.push.apply(n, t));
        }
        return n;
      }
      function C(o) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(n), !0).forEach(function (e) {
                T(o, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n))
              : P(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    o,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return o;
      }
      function T(o, e, n) {
        return (
          (e = (function (o) {
            var e = (function (o, e) {
              if ("object" != S(o) || !o) return o;
              var n = o[Symbol.toPrimitive];
              if (void 0 !== n) {
                var t = n.call(o, e || "default");
                if ("object" != S(t)) return t;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(o);
            })(o, "string");
            return "symbol" == S(e) ? e : e + "";
          })(e)) in o
            ? Object.defineProperty(o, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[e] = n),
          o
        );
      }
      function j(o, e) {
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
                a,
                i,
                r,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(o)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (t = i.call(n)).done) &&
                    (l.push(t.value), l.length !== e);
                    c = !0
                  );
              } catch (o) {
                ((u = !0), (a = o));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(o, e) ||
          _(o, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _(o, e) {
        if (o) {
          if ("string" == typeof o) return I(o, e);
          var n = {}.toString.call(o).slice(8, -1);
          return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(o)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? I(o, e)
                : void 0
          );
        }
      }
      function I(o, e) {
        (null == e || e > o.length) && (e = o.length);
        for (var n = 0, t = Array(e); n < e; n++) t[n] = o[n];
        return t;
      }
      var N = function (o) {
        var e,
          n = o.panelSelector,
          c = j(
            Object(i.e)(function (o) {
              return [
                l.a.isElementDisabled(o, g.a.BOOKMARK_PANEL),
                l.a.getBookmarks(o),
                l.a.getCurrentPage(o) - 1,
                l.a.getPageLabels(o),
                l.a.isBookmarkIconShortcutVisible(o),
                l.a.getFeatureFlags(o),
              ];
            }, i.c),
            6,
          ),
          d = c[0],
          m = c[1],
          f = c[2],
          h = c[3],
          v = c[4],
          w = c[5],
          y = j(Object(t.useState)(!1), 2),
          x = y[0],
          S = y[1],
          P = j(Object(t.useState)(!1), 2),
          _ = P[0],
          I = P[1],
          N = j(Object(t.useState)([]), 2),
          M = N[0],
          R = N[1],
          L = w.customizableUI,
          D = j(Object(r.a)(), 1)[0],
          K = Object(i.d)();
        Object(t.useEffect)(
          function () {
            v && !d
              ? s.a.setBookmarkIconShortcutVisibility(!0)
              : s.a.setBookmarkIconShortcutVisibility(!1);
          },
          [d, v],
        );
        var H = Object.keys(m).map(function (o) {
          return parseInt(o, 10);
        });
        Object(t.useEffect)(
          function () {
            (M.forEach(function (o) {
              H.includes(o) ||
                R(
                  M.filter(function (e) {
                    return e !== o;
                  }),
                );
            }),
              0 === H.length && I(!1));
          },
          [m],
        );
        var z = function (o) {
          var e = D("warning.deleteBookmark.title"),
            n = {
              message: D("warning.deleteBookmark.message"),
              title: e,
              onConfirm: function () {
                (o.forEach(function (o) {
                  return s.a.removeUserBookmark(Number(o));
                }),
                  R([]));
              },
              confirmBtnText: D("action.delete"),
            };
          K(A.a.showWarningMessage(n));
        };
        return d
          ? null
          : a.a.createElement(
              "div",
              {
                className: u()(
                  T(
                    T(
                      {
                        Panel: !0,
                        BookmarksPanel: !0,
                        "bookmark-outline-panel": !0,
                      },
                      n,
                      !0,
                    ),
                    "modular-ui-panel",
                    L,
                  ),
                ),
                "data-element": g.a.BOOKMARK_PANEL,
              },
              a.a.createElement(
                "div",
                { className: "bookmark-outline-panel-header" },
                a.a.createElement(
                  "div",
                  { className: "header-title" },
                  D("component.bookmarksPanel"),
                ),
                !_ &&
                  a.a.createElement(k.a, {
                    dataElement: g.a.BOOKMARK_MULTI_SELECT,
                    label: D("action.edit"),
                    disabled: x || 0 === H.length,
                    onClick: function () {
                      return I(!0);
                    },
                    ariaLabel: ""
                      .concat(D("action.edit"), " ")
                      .concat(D("component.bookmarksPanel")),
                  }),
                _ &&
                  a.a.createElement(k.a, {
                    dataElement: g.a.BOOKMARK_MULTI_SELECT,
                    label: D("option.bookmarkOutlineControls.done"),
                    disabled: x,
                    onClick: function () {
                      (I(!1), R([]));
                    },
                    ariaLabel: ""
                      .concat(D("option.bookmarkOutlineControls.done"), " ")
                      .concat(D("action.edit")),
                  }),
              ),
              a.a.createElement(O.a, {
                dataElement: g.a.BOOKMARK_SHORTCUT_OPTION,
                type: "checkbox",
                isSwitch: !0,
                id: "bookmark-view-option",
                className: "bookmark-switch",
                label: D("message.viewBookmark"),
                checked: v,
                onChange: function (o) {
                  return K(
                    A.a.setBookmarkIconShortcutVisibility(o.target.checked),
                  );
                },
              }),
              !x &&
                0 === H.length &&
                a.a.createElement(
                  "div",
                  { className: "msg msg-no-bookmark-outline" },
                  D("message.noBookmarks"),
                ),
              a.a.createElement(
                "div",
                { className: "bookmark-outline-row" },
                x &&
                  a.a.createElement(E, {
                    isAdding: !0,
                    label: ""
                      .concat(D("component.bookmarkPage"), " ")
                      .concat(h[f], " - ")
                      .concat(D("component.bookmarkTitle")),
                    text: null !== (e = m[f]) && void 0 !== e ? e : "",
                    pageIndex: f,
                    onSave: function (o) {
                      (s.a.addUserBookmark(f, o), S(!1));
                    },
                    onCancel: function () {
                      return S(!1);
                    },
                    panelSelector: n,
                  }),
                H.map(function (o) {
                  return a.a.createElement(E, {
                    key: o,
                    panelSelector: n,
                    isMultiSelectionMode: _,
                    label: ""
                      .concat(D("component.bookmarkPage"), " ")
                      .concat(h[o], " - ")
                      .concat(D("component.bookmarkTitle")),
                    defaultLabel: ""
                      .concat(D("component.bookmarkPage"), " ")
                      .concat(h[o]),
                    text: m[o],
                    pageIndex: o,
                    onSave: function (e) {
                      var n = C(C({}, s.a.getUserBookmarks()), {}, T({}, o, e));
                      s.a.setUserBookmarks(n);
                    },
                    onRemove: function (o) {
                      return z([o]);
                    },
                    setSelected: function (o, e) {
                      ((o = o.toString()),
                        M.find(function (e) {
                          return e === o;
                        })
                          ? e ||
                            R(
                              M.filter(function (e) {
                                return e !== o;
                              }),
                            )
                          : e && R([].concat(B(M), [o])));
                    },
                  });
                }),
              ),
              a.a.createElement(
                p.a,
                {
                  className: "bookmark-outline-footer",
                  dataElement: g.a.BOOKMARK_ADD_NEW_BUTTON_CONTAINER,
                },
                _
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(b.a, {
                        className: "multi-selection-button",
                        img: "icon-menu-add",
                        disabled: M.length > 0 || !!m[f] || x,
                        onClick: function () {
                          return S(!0);
                        },
                        ariaLabel: ""
                          .concat(D("action.add"), " ")
                          .concat(D("component.bookmarkPanel")),
                      }),
                      a.a.createElement(b.a, {
                        className: "multi-selection-button",
                        img: "icon-delete-line",
                        disabled: 0 === M.length,
                        onClick: function () {
                          return z(M);
                        },
                        ariaLabel: ""
                          .concat(D("action.delete"), " ")
                          .concat(D("component.bookmarkPanel")),
                      }),
                    )
                  : a.a.createElement(k.a, {
                      img: "icon-menu-add",
                      dataElement: g.a.BOOKMARK_ADD_NEW_BUTTON,
                      label: ""
                        .concat(D("action.add"), " ")
                        .concat(D("component.bookmarkPanel")),
                      disabled: x || !!m[f],
                      onClick: function () {
                        return S(!0);
                      },
                      ariaLabel: ""
                        .concat(D("action.add"), " ")
                        .concat(D("component.bookmarkPanel")),
                    }),
              ),
            );
      };
      e.default = N;
    },
  },
]);
//# sourceMappingURL=chunk.46.js.map
