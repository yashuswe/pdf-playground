(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    1636: function (e, t, n) {
      "use strict";
      (n(9),
        n(10),
        n(14),
        n(21),
        n(20),
        n(12),
        n(22),
        n(18),
        n(16),
        n(8),
        n(17),
        n(19),
        n(11),
        n(115),
        n(13));
      var o = n(0),
        r = n.n(o),
        a = n(2),
        i = n.n(a),
        c = n(305),
        l = n(15),
        s = n.n(l);
      n(1648);
      function d(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return u(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(e, t)
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
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function p(e) {
        var t = e.children.replace(/\n$/, ""),
          n = e.panelWidth,
          a = e.linesToBreak,
          i = e.renderRichText,
          l = e.richTextStyle,
          u = e.resize,
          p = e.style,
          m = e.comment,
          f = void 0 !== m && m,
          h = e.beforeContent,
          b = void 0 === h ? function () {} : h,
          y = d(Object(o.useState)(!1), 2),
          g = y[0],
          v = y[1],
          x = d(Object(o.useState)(null), 2),
          w = x[0],
          S = x[1],
          O = d(Object(o.useState)(null), 2),
          A = O[0],
          E = O[1],
          j = d(Object(o.useState)(!1), 2),
          R = j[0],
          k = j[1],
          P = r.a.useRef(null),
          C = Object(c.a)().t,
          T = g ? t : t.substring(0, A * a),
          I = C(g ? "action.showLess" : "action.showMore"),
          N = s()("note-text-preview", { "preview-comment": f });
        return (
          Object(o.useEffect)(
            function () {
              var e = P.current.clientWidth;
              S(e);
            },
            [n],
          ),
          Object(o.useLayoutEffect)(
            function () {
              var e = (function (e) {
                  var t = document.createElement("canvas").getContext("2d");
                  return ((t.font = "13px sans-serif"), t.measureText(e).width);
                })(t),
                n = e / t.length,
                o = Math.floor(w / n);
              (E(o), k(e / w > a));
            },
            [t, w],
          ),
          r.a.createElement(
            "div",
            { className: N, ref: P, style: p, "aria-live": "polite" },
            b(),
            i && l ? i(T, l, 0) : T,
            " ",
            R &&
              r.a.createElement(
                "button",
                {
                  className: "note-text-preview-prompt",
                  onClick: function (e) {
                    (e.stopPropagation(), v(!g), u && u());
                  },
                },
                I,
              ),
          )
        );
      }
      ((p.propTypes = {
        panelWidth: i.a.number,
        linesToBreak: i.a.number,
        renderRichText: i.a.func,
        richTextStyle: i.a.any,
        resize: i.a.func,
        style: i.a.any,
        comment: i.a.bool,
        beforeContent: i.a.func,
      }),
        (t.a = p));
    },
    1648: function (e, t, n) {
      var o = n(35),
        r = n(1649);
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
    1649: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".note-text-preview{font-size:13px;color:var(--gray-7);padding-inline-end:var(--note-content-right-padding-width);-webkit-user-select:text!important;-moz-user-select:text!important;user-select:text!important;cursor:text;height:-moz-fit-content;height:fit-content;width:calc(100% - var(--note-content-right-padding-width));overflow:hidden}.note-text-preview>*{pointer-events:all}.preview-comment{color:var(--text-color)}.note-text-preview-prompt{cursor:pointer;color:var(--primary-button);text-decoration:underline;position:relative;pointer-events:auto;background:transparent;border:none;padding:0}.note-text-preview-prompt:hover{color:var(--primary-button-hover)}.trackedChangePopup .note-text-preview{max-height:400px;overflow-y:auto;width:calc(100% + var(--note-content-right-padding-width))}",
        "",
      ]);
    },
    1658: function (e, t, n) {
      "use strict";
      var o = n(0),
        r = n.n(o),
        a = n(1589),
        i = n(1568),
        c = n(23),
        l = function (e) {
          var t = e.children,
            n = Object(o.useMemo)(function () {
              var e = Object(c.a)();
              return Object(a.a)({
                key: "wv-react-select-emotion",
                container: e,
              });
            }, []);
          return window.isApryseWebViewerWebComponent
            ? r.a.createElement(i.a, { value: n }, t)
            : t;
        };
      t.a = l;
    },
    1667: function (e, t, n) {
      "use strict";
      (n(8), n(56));
      var o = n(1),
        r = n(33),
        a = n(3),
        i = n(66),
        c = n(186);
      function l() {}
      t.a = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return function (r) {
          return o.a.isWebViewerServerDocument() ? s(e, r, n) : d(e, t, r, n);
        };
      };
      var s = function (e, t, n) {
          return o.a.applyRedactions(e, n).then(function (e) {
            if (e && e.url)
              return Object(c.a)(t, {
                filename: "redacted.pdf",
                includeAnnotations: !0,
                externalURL: e.url,
              });
            console.warn("WebViewer Server did not return a valid result");
          });
        },
        d = function (e, t, n, c) {
          var l = {
            message: r.a.t("warning.redaction.applyMessage"),
            title: r.a.t("warning.redaction.applyTile"),
            confirmBtnText: r.a.t("action.apply"),
            onConfirm: function () {
              return (
                o.a
                  .applyRedactions(e, c)
                  .then(function () {
                    t();
                  })
                  .catch(function (e) {
                    return Object(i.b)(e);
                  }),
                Promise.resolve()
              );
            },
          };
          return n(a.a.showWarningMessage(l));
        };
    },
    1824: function (e, t, n) {
      var o = n(35),
        r = n(1825);
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
    1825: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.RedactionPanel{padding:16px 16px 0;display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel{width:100%;height:100%;min-width:100%;padding:8px 0 0}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .close-container{display:flex;align-items:center;justify-content:flex-end;height:32px;width:100%;padding-inline-end:12px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .close-container .close-icon-container{padding:0;border:none;background-color:transparent;z-index:3;cursor:pointer}:host(:not([data-tabbing=true])) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .close-container .close-icon-container,html:not([data-tabbing=true]) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .close-container .close-icon-container{outline:none}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .close-container .close-icon-container .close-icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel{width:100%;height:100%;min-width:100%;padding:8px 0 0}.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .close-container{display:flex;align-items:center;justify-content:flex-end;height:32px;width:100%;padding-inline-end:12px}.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .close-container .close-icon-container{padding:0;border:none;background-color:transparent;z-index:3;cursor:pointer}:host(:not([data-tabbing=true])) .App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .close-container .close-icon-container,html:not([data-tabbing=true]) .App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .close-container .close-icon-container{outline:none}.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .close-container .close-icon-container .close-icon{width:24px;height:24px}}.RedactionPanel .marked-redaction-counter{flex:0 1 19px;margin-top:24px;margin-bottom:12px;font-size:16px}.RedactionPanel .marked-redaction-counter span{font-weight:400}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .marked-redaction-counter{margin-top:16px;margin-bottom:16px;margin-inline-start:16px;margin-inline-end:16px;font-size:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .marked-redaction-counter{margin-top:16px;margin-bottom:16px;margin-inline-start:16px;margin-inline-end:16px;font-size:16px}}.RedactionPanel .no-marked-redactions{display:flex;flex-direction:column;align-items:center;flex:1 1 auto}.RedactionPanel .no-marked-redactions .msg{text-align:center}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .no-marked-redactions .msg{line-height:15px;width:146px}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .no-marked-redactions .msg{line-height:15px;width:146px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .no-marked-redactions .msg{line-height:15px;width:146px;margin-bottom:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .no-marked-redactions .msg{line-height:15px;width:146px;margin-bottom:32px}}.RedactionPanel .no-marked-redactions .empty-icon,.RedactionPanel .no-marked-redactions .empty-icon svg{width:65px;height:83px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .no-marked-redactions .empty-icon,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .no-marked-redactions .empty-icon svg{width:60px;height:60px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .no-marked-redactions .empty-icon,.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .no-marked-redactions .empty-icon svg{width:60px;height:60px}}.RedactionPanel .no-marked-redactions .empty-icon *{fill:var(--gray-5);color:var(--gray-5)}.RedactionPanel .redaction-panel-controls{flex:0 0 57px;margin-inline-start:-16px;padding-top:13px;border-top:1px solid var(--divider);display:flex;background-color:var(--component-background);width:inherit;justify-content:flex-end;padding-inline-end:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .redaction-panel-controls{margin-inline-start:0;margin-inline-end:0;margin-top:0;margin-bottom:16px;padding:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .redaction-panel-controls{margin-inline-start:0;margin-inline-end:0;margin-top:0;margin-bottom:16px;padding:16px}}.RedactionPanel .redaction-panel-controls .Button.redact-all-marked{padding:0;border:none;background-color:transparent;background-color:var(--primary-button);color:var(--primary-button-text);border-radius:4px;height:32px;width:90px}:host(:not([data-tabbing=true])) .RedactionPanel .redaction-panel-controls .Button.redact-all-marked,html:not([data-tabbing=true]) .RedactionPanel .redaction-panel-controls .Button.redact-all-marked{outline:none}.RedactionPanel .redaction-panel-controls .Button.redact-all-marked:hover:not(.disabled){background-color:var(--primary-button-hover)}.RedactionPanel .redaction-panel-controls .Button.redact-all-marked.disabled{opacity:.5}.RedactionPanel .redaction-panel-controls .Button.redact-all-marked.disabled span{color:var(--primary-button-text)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .redaction-panel-controls .Button.redact-all-marked{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .redaction-panel-controls .Button.redact-all-marked{font-size:13px}}.RedactionPanel .redaction-panel-controls .clear-all-marked{padding:0;color:var(--secondary-button-text);background-color:transparent;border:none;height:32px;width:70px;margin-inline-end:8px;cursor:pointer}:host(:not([data-tabbing=true])) .RedactionPanel .redaction-panel-controls .clear-all-marked,html:not([data-tabbing=true]) .RedactionPanel .redaction-panel-controls .clear-all-marked{outline:none}.RedactionPanel .redaction-panel-controls .clear-all-marked:hover:not(.disabled){color:var(--secondary-button-hover)}.RedactionPanel .redaction-panel-controls .clear-all-marked.disabled{opacity:.5;cursor:not-allowed}.RedactionPanel .redaction-panel-controls .clear-all-marked.disabled span{color:var(--secondary-button-text)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .redaction-panel-controls .clear-all-marked{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .redaction-panel-controls .clear-all-marked{font-size:13px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .redaction-panel-controls{inset-inline-start:0;margin-bottom:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .redaction-panel-controls{inset-inline-start:0;margin-bottom:16px}}.RedactionPanel .redaction-group-container{flex:1 1 auto}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionPanel .redaction-group-container{margin-inline-end:4px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionPanel .redaction-group-container{margin-inline-end:4px}}.RedactionPanel button.focus-visible,.RedactionPanel button:focus-visible{outline:var(--focus-visible-outline)}.ModularPanel-container .RedactionPanel{height:100%;padding:unset}.ModularPanel-container .RedactionPanel .redaction-panel-controls{margin-inline-end:-16px;padding-bottom:16px}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1826: function (e, t, n) {
      var o = n(35),
        r = n(1827);
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
    1827: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".redaction-item{display:flex;align-items:center;padding:12px 16px;position:relative}.redaction-item:hover{background-color:var(--view-header-button-hover);cursor:pointer}.redaction-item.focus-visible,.redaction-item:focus-visible{outline:var(--focus-visible-outline)}.redaction-item.modular-ui:hover:not(:disabled):not(.disabled){background-color:transparent;box-shadow:inset 0 0 0 1px var(--hover-border)}.redaction-item .redaction-item-button{position:absolute;width:100%;height:100%;inset-block-start:0;inset-inline-start:0}.redaction-item-selected{background-color:var(--view-header-button-active)!important}.redaction-item-selected.modular-ui{box-shadow:inset 0 0 0 1px var(--focus-border)}.redaction-item-info{flex:1;padding-inline-start:18px;padding-inline-end:20px}.redaction-item-preview{font-size:13px;color:var(--text-color)}.redaction-item-date-author{font-size:10px;color:var(--faded-text)}.redaction-item-label-text{font-size:10px;margin:2px 0}.redaction-item-delete.customUI:hover{box-shadow:inset 0 0 0 1px var(--hover-border)}",
        "",
      ]);
    },
    1828: function (e, t, n) {
      var o = n(35),
        r = n(1829);
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
    1829: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.redaction-items{margin:8px 2px 1px;background-color:var(--component-background);box-shadow:0 0 3px 0 var(--box-shadow);border-radius:4px;padding:0}.redaction-items>:first-child{padding-top:16px;border-radius:4px 4px 0 0}.redaction-items>:last-child{padding-bottom:16px;border-radius:0 0 4px 4px}.redaction-items>:only-child{padding-top:16px;padding-bottom:16px;border-radius:4px}.redaction-page-group{padding-top:12px;padding-bottom:12px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .redaction-page-group{padding-top:8px;padding-inline-end:4px;padding-inline-start:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .redaction-page-group{padding-top:8px;padding-inline-end:4px;padding-inline-start:16px}}.redaction-page-group h2{margin:0}.redaction-page-group h2 button{margin:0;font-size:13px;font-weight:400;color:var(--faded-text)}.redaction-page-group-header{display:flex;justify-content:space-between;align-items:baseline}.expand-arrow{height:16px;width:16px;display:flex;align-items:center;cursor:pointer}.expand-arrow .Icon{width:12px;height:12px}.expand-arrow.Button.custom-ui.icon-only:hover{box-shadow:inset 0 0 0 1px var(--hover-border)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1830: function (e, t, n) {
      var o = n(35),
        r = n(1831);
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
    1831: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".creatable-multi-select-label{display:inline-block;font-weight:700;margin-bottom:var(--padding-small)}",
        "",
      ]);
    },
    1832: function (e, t, n) {
      var o = n(35),
        r = n(1833);
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
    1833: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .redaction-search-multi-select{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .redaction-search-multi-select{font-size:13px}}.redaction-search-multi-select-search-icon-container{height:28px;align-self:flex-start;display:flex;align-items:center;margin:0 var(--padding-tiny)}.redaction-search-multi-select-search-icon-container .Icon{width:16px;height:16px}.custom-remove-button{display:flex;align-items:center}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1834: function (e, t, n) {
      var o = n(35),
        r = n(1835);
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
    1835: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionSearchOverlay{margin-inline-start:16px;margin-inline-end:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionSearchOverlay{margin-inline-start:16px;margin-inline-end:16px}}.RedactionSearchOverlay input{width:100%;padding:6px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RedactionSearchOverlay .creatable-multi-select-label{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RedactionSearchOverlay .creatable-multi-select-label{font-size:13px}}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1836: function (e, t, n) {
      var o = n(35),
        r = n(1837);
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
    1837: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".redaction-search-result{display:flex;align-items:center;padding:12px;background-color:var(--component-background);border:1px solid transparent;border-radius:4px;box-shadow:0 0 3px var(--document-box-shadow);margin:8px 0;position:relative}.redaction-search-result .redaction-search-result-button{position:absolute;width:100%;height:100%;inset-block-start:0;inset-inline-start:0;background:transparent;border:none;cursor:pointer}.redaction-search-result .Icon svg{transform:scale(1.2);padding-top:2px}.redaction-search-result .search-value{word-break:break-all;color:var(--secondary-button-text);font-weight:700}.redaction-search-result.active{background-color:transparent!important;border:1px solid var(--focus-border)}.redaction-search-result-info{font-size:13px;color:var(--text-color)}",
        "",
      ]);
    },
    1838: function (e, t, n) {
      var o = n(35),
        r = n(1839);
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
    1839: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".redaction-search-results-page-number{display:flex;align-items:start;padding:8px 12px 4px}.redaction-search-results-page-number .redaction-search-results-page-number-checkbox{position:absolute;inset-inline-start:24px}.redaction-search-results-page-number .collapsible-page-group-header button{font-size:13px;font-weight:400;color:var(--faded-text);margin:0 0 0 32px;width:calc(100% - 32px)}.redaction-search-results-page-number .redaction-search-results{padding:0;margin:0}",
        "",
      ]);
    },
    1840: function (e, t, n) {
      var o = n(35),
        r = n(1841);
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
    1841: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.redaction-search-counter-controls{display:flex;flex-direction:row;margin-top:36px;font-size:var(--font-size-default);padding:16px;border:1px solid var(--lighter-border);background-color:var(--gray-0);border-radius:4px 4px 0 0;max-height:50px;min-height:50px;grid-column-gap:var(--padding-medium);-moz-column-gap:var(--padding-medium);column-gap:var(--padding-medium)}.redaction-search-counter-controls .redaction-search-results-counter{flex:2 1 auto}.redaction-search-counter-controls .redaction-search-results-counter span{font-weight:400}.redaction-search-counter-controls .spinner{margin:auto;flex:3 1 "25px"}.redaction-search-counter-controls button{padding:0;background-color:transparent;flex:1 1 auto;color:var(--secondary-button-text);border:none;cursor:pointer;height:100%;white-space:nowrap}:host(:not([data-tabbing=true])) .redaction-search-counter-controls button,html:not([data-tabbing=true]) .redaction-search-counter-controls button{outline:none}.redaction-search-counter-controls button:hover:not(:disabled){color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .redaction-search-counter-controls button{font-size:var(--font-size-default)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .redaction-search-counter-controls button{font-size:var(--font-size-default)}}.redaction-search-counter-controls button.disabled{opacity:.5}.redaction-search-counter-controls button.disabled span{color:var(--secondary-button-text)}.redaction-search-results-container{flex:1 1 auto;background-color:var(--gray-2);color:var(--faded-text);font-size:13px;border-inline-start:1px solid var(--lighter-border);border-inline-end:1px solid var(--lighter-border);display:flex;flex-direction:column}.redaction-search-no-results,.redaction-search-results-container.emptyList{justify-content:center;align-items:center}.redaction-search-panel-controls{display:flex;flex-direction:row;flex:0 1 52px;padding:12px;background-color:var(--component-background);border:1px solid var(--lighter-border);margin-bottom:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .redaction-search-panel-controls{margin-bottom:30px;font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .redaction-search-panel-controls{margin-bottom:30px;font-size:13px}}.redaction-search-panel-controls button{border:none;background-color:transparent;height:28px;padding:0 16px;cursor:pointer}:host(:not([data-tabbing=true])) .redaction-search-panel-controls button,html:not([data-tabbing=true]) .redaction-search-panel-controls button{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .redaction-search-panel-controls button{height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .redaction-search-panel-controls button{height:32px}}.redaction-search-panel-controls .Button{white-space:nowrap}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .redaction-search-panel-controls .Button{font-size:var(--font-size-default)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .redaction-search-panel-controls .Button{font-size:var(--font-size-default)}}.redaction-search-panel-controls .Button.cancel{flex:2 1 auto;color:var(--secondary-button-text);border:none;cursor:pointer;margin-inline-end:20px}.redaction-search-panel-controls .Button.cancel:hover:not(.disabled) span{color:var(--secondary-button-hover)}.redaction-search-panel-controls .Button.redact-all-selected{flex:1 1 auto;border:1px solid var(--secondary-button-text);border-radius:4px;margin-inline-end:8px}.redaction-search-panel-controls .Button.redact-all-selected span{color:var(--secondary-button-text)}.redaction-search-panel-controls .Button.redact-all-selected.disabled{opacity:.5}.redaction-search-panel-controls .Button.redact-all-selected:hover:not(.disabled){border-color:var(--secondary-button-hover)}.redaction-search-panel-controls .Button.redact-all-selected:hover:not(.disabled) span{color:var(--secondary-button-hover)}.redaction-search-panel-controls .Button.mark-all-selected{flex:2 1 auto;background-color:var(--primary-button)!important;border:1px solid var(--primary-button);border-radius:4px}.redaction-search-panel-controls .Button.mark-all-selected span{color:var(--primary-button-text)}.redaction-search-panel-controls .Button.mark-all-selected:hover:not(.disabled){border-color:var(--primary-button-hover);background-color:var(--primary-button-hover)!important}.redaction-search-panel-controls .Button.mark-all-selected.disabled{opacity:.5}',
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1871: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(34),
        n(27),
        n(21),
        n(20),
        n(12),
        n(118),
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
        n(17),
        n(19),
        n(11),
        n(29),
        n(13),
        n(94));
      var o = n(0),
        r = n.n(o),
        a = n(2),
        i = n.n(a),
        c = (n(38), n(26), n(59), n(305)),
        l = n(15),
        s = n.n(l),
        d = n(51),
        u = n(1655),
        p = (n(125), n(1));
      function m(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return f(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? f(e, t)
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
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var h = r.a.createContext(),
        b = function (e) {
          var t = e.children,
            n = m(Object(o.useState)(null), 2),
            a = n[0],
            i = n[1],
            c = m(Object(o.useState)(!1), 2),
            l = c[0],
            s = c[1],
            d = m(Object(o.useState)(-1), 2),
            u = d[0],
            f = d[1];
          Object(o.useEffect)(function () {
            var e = function (e, t) {
                if ("selected" === t) {
                  var n = e.filter(function (e) {
                      return "Redact" === e.Subject;
                    }),
                    o = n.length > 0 ? n[0].Id : null;
                  i(o);
                } else i(null);
              },
              t = function (e) {
                if (e) {
                  var t = (p.a.getPageSearchResults() || []).findIndex(
                    function (t) {
                      return p.a.isSearchResultEqual(t, e);
                    },
                  );
                  f(t);
                }
              };
            return (
              p.a.addEventListener("annotationSelected", e),
              p.a.addEventListener("activeSearchResultChanged", t),
              function () {
                (p.a.removeEventListener("annotationSelected", e),
                  p.a.removeEventListener("activeSearchResultChanged", t));
              }
            );
          }, []);
          var b = {
            selectedRedactionItemId: a,
            setSelectedRedactionItemId: i,
            isRedactionSearchActive: l,
            setIsRedactionSearchActive: s,
            activeSearchResultIndex: u,
          };
          return r.a.createElement(h.Provider, { value: b }, t);
        },
        y = n(155),
        g = n(41),
        v = (n(1824), n(44), n(6)),
        x = n(4),
        w = n(233),
        S = n(106),
        O = n.n(S),
        A = (n(1826), n(1636));
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function j(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return R(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? R(e, t)
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
      function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var k = function (e) {
        var t = j(
          Object(v.e)(function (e) {
            return [x.a.getRedactionPanelWidth(e)];
          }, v.c),
          1,
        )[0];
        return r.a.createElement(A.a, E({}, e, { panelWidth: t, comment: !0 }));
      };
      function P(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return C(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? C(e, t)
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
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var T = function (e) {
          var t = P(
              Object(v.e)(function (e) {
                var t;
                return [
                  null === (t = x.a.getFeatureFlags(e)) || void 0 === t
                    ? void 0
                    : t.customizableUI,
                ];
              }),
              1,
            )[0],
            n = e.iconColor,
            o = e.annotation,
            a = e.author,
            i = e.dateFormat,
            l = e.language,
            u = e.onRedactionItemDelete,
            p = e.onRedactionItemSelection,
            m = e.textPreview,
            f = e.isSelected,
            h = e.timezone,
            b = Object(c.a)().t,
            S = Object(w.a)(o);
          if (h) {
            var A = S.toLocaleString("en-US", { timeZone: h });
            S = new Date(A);
          }
          var E,
            j = S
              ? O()(S).locale(l).format(i)
              : b("option.notesPanel.noteContent.noDate"),
            R = "".concat(a, " - ").concat(j),
            C = s()(
              "redaction-item",
              { "redaction-item-selected": f },
              { "modular-ui": t },
            ),
            T = o.label,
            I = o.icon,
            N = void 0 === I ? "icon-text-redaction" : I,
            M = o.redactionType;
          return (
            (E =
              M === y.c.TEXT
                ? r.a.createElement(k, { linesToBreak: 2 }, m)
                : M === y.c.FULL_PAGE ||
                    M === y.c.FULL_VIDEO_FRAME ||
                    M === y.c.REGION ||
                    M === y.c.AUDIO_REDACTION ||
                    M === y.c.FULL_VIDEO_FRAME_AND_AUDIO
                  ? b(T)
                  : o.getContents()),
            r.a.createElement(
              "li",
              { className: C },
              r.a.createElement(g.a, {
                className: "redaction-item-button",
                onClick: p,
                ariaLabel: ""
                  .concat(E, " ")
                  .concat(R, " ")
                  .concat(b("action.select")),
                ariaCurrent: f,
              }),
              r.a.createElement(
                "div",
                { className: "redaction-icon-container" },
                r.a.createElement(d.a, { glyph: N, color: n }),
              ),
              r.a.createElement(
                "div",
                { className: "redaction-item-info" },
                r.a.createElement(
                  "div",
                  { className: "redaction-item-preview" },
                  E,
                ),
                o.OverlayText
                  ? r.a.createElement(
                      "div",
                      { className: "redaction-item-label-text" },
                      b("option.stylePopup.labelText"),
                      ": ",
                      o.OverlayText,
                    )
                  : null,
                r.a.createElement(
                  "div",
                  { className: "redaction-item-date-author" },
                  R,
                ),
              ),
              r.a.createElement(g.a, {
                className: "redaction-item-delete",
                style: { marginLeft: "auto" },
                img: "icon-close",
                onClick: u,
                ariaLabel: ""
                  .concat(E, " ")
                  .concat(R, " ")
                  .concat(b("action.delete")),
              }),
            )
          );
        },
        I = r.a.memo(T);
      function N(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return M(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
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
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var D = function (e) {
          var t = e.annotation,
            n = Object(o.useContext)(h),
            a = n.selectedRedactionItemId,
            i = n.setSelectedRedactionItemId,
            c = N(
              Object(v.e)(function (e) {
                return [
                  x.a.getNoteDateFormat(e),
                  x.a.getCurrentLanguage(e),
                  x.a.getCustomNoteSelectionFunction(e),
                  x.a.getTimezone(e),
                ];
              }, v.c),
              4,
            ),
            l = c[0],
            s = c[1],
            d = c[2],
            u = c[3],
            m = t.getCustomData("trn-annot-preview"),
            f = t.StrokeColor.toString(),
            b = p.a.getDisplayAuthor(t.Author),
            y = Object(o.useCallback)(
              function () {
                (d && d(t),
                  p.a.deselectAllAnnotations(),
                  p.a.selectAnnotation(t),
                  p.a.jumpToAnnotation(t),
                  i(t.Id));
              },
              [t],
            ),
            g = Object(o.useCallback)(
              function () {
                p.a.deleteAnnotations([t]);
              },
              [t],
            );
          return r.a.createElement(I, {
            dateFormat: l,
            language: s,
            timezone: u,
            author: b,
            annotation: t,
            iconColor: f,
            textPreview: m,
            onRedactionItemDelete: g,
            onRedactionItemSelection: y,
            isSelected: a === t.Id,
          });
        },
        _ = n(117),
        L =
          (n(1828),
          function (e) {
            var t = e.pageNumber,
              n = e.redactionItems,
              o = Object(c.a)().t;
            return r.a.createElement(
              _.a,
              {
                className: "redaction-page-group",
                header: function () {
                  return "".concat(o("option.shared.page"), " ").concat(t);
                },
                expansionDescription: ""
                  .concat(o("option.shared.page"), " ")
                  .concat(t, " ")
                  .concat(o("redactionPanel.redactionItems")),
                headingLevel: 2,
              },
              r.a.createElement(
                "ul",
                { className: "redaction-items" },
                n.map(function (e) {
                  return r.a.createElement(D, {
                    annotation: e,
                    key: "".concat(e.Id, "-").concat(t),
                  });
                }),
              ),
            );
          });
      L.propTypes = {
        pageNumber: i.a.oneOfType([i.a.number, i.a.string]),
        redactionItems: i.a.array,
      };
      var z = L,
        H = n(183);
      function W() {
        return (W = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function B(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return F(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? F(e, t)
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
      function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var U = function (e) {
          var t = e.redactionItems,
            n = B(Object(o.useState)([]), 2),
            a = n[0],
            i = n[1];
          return (
            Object(o.useEffect)(
              function () {
                i(Object(H.c)().position.getSortedNotes(t));
              },
              [t],
            ),
            r.a.createElement(z, W({ redactionItems: a }, e))
          );
        },
        q = n(5),
        V = n(90);
      function $() {
        return ($ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function G(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return J(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Y(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function X(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return c;
            }
          })(e, t) ||
          Y(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Y(e, t) {
        if (e) {
          if ("string" == typeof e) return J(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? J(e, t)
                : void 0
          );
        }
      }
      function J(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var K = function (e) {
          var t = e.redactionAnnotations,
            n = e.applyAllRedactions,
            a = e.deleteAllRedactionAnnotations,
            i = e.redactionTypesDictionary,
            l = Object(c.a)().t,
            p = X(Object(o.useState)({}), 2),
            m = p[0],
            f = p[1],
            b = X(Object(o.useState)([]), 2),
            v = b[0],
            x = b[1],
            w = Object(o.useContext)(h).isTestMode;
          Object(o.useEffect)(
            function () {
              var e = {};
              (t.forEach(function (t) {
                var n = Object(y.b)(t),
                  o = i[n] || {
                    icon: "icon-tool-redaction-area",
                    label: "redactionPanel.redactionItem.regionRedaction",
                  },
                  r = o.label,
                  a = o.icon;
                ((t.label = r), (t.icon = a), (t.redactionType = n));
                var c = t.PageNumber;
                void 0 === e[c] ? (e[c] = [t]) : (e[c] = [t].concat(G(e[c])));
              }),
                f(e),
                x(Object.keys(e)));
            },
            [t],
          );
          var S,
            O = r.a.createElement(
              "div",
              { className: "no-marked-redactions" },
              r.a.createElement(
                "div",
                null,
                r.a.createElement(d.a, {
                  className: "empty-icon",
                  glyph: "icon-no-marked-redactions",
                }),
              ),
              r.a.createElement(
                "div",
                { className: "msg" },
                l("redactionPanel.noMarkedRedactions"),
              ),
            ),
            A = s()("redact-all-marked", { disabled: 0 === t.length }),
            E = s()("clear-all-marked", { disabled: 0 === t.length }),
            j = Object(V.a)(n);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "h2",
              { className: "marked-redaction-counter" },
              l("redactionPanel.redactionCounter"),
              r.a.createElement("span", null, " (".concat(t.length, ")")),
            ),
            v.length > 0
              ? ((S = w ? { initialItemCount: v.length } : {}),
                r.a.createElement(
                  "div",
                  { className: "redaction-group-container" },
                  r.a.createElement(
                    u.a,
                    $(
                      {
                        data: v,
                        itemContent: function (e, t) {
                          return r.a.createElement(U, {
                            key: e,
                            pageNumber: t,
                            redactionItems: m[t],
                          });
                        },
                      },
                      S,
                    ),
                  ),
                ))
              : O,
            r.a.createElement(
              "div",
              { className: "redaction-panel-controls" },
              r.a.createElement(g.a, {
                disabled: 0 === t.length,
                className: E,
                onClick: a,
                label: l("redactionPanel.clearMarked"),
              }),
              r.a.createElement(g.a, {
                disabled: 0 === t.length,
                className: A,
                onClick: j,
                dataElement: q.a.REDACT_ALL_MARKED_BUTTON,
                label: l("redactionPanel.redactAllMarked"),
              }),
            ),
          );
        },
        Q = n(3),
        Z = n(1667),
        ee = n(61),
        te = n(60),
        ne = (n(91), n(76), n(1583)),
        oe = n(1713),
        re = n(1658),
        ae = (n(1830), ["id", "label"]);
      function ie() {
        return (ie = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      var ce = function (e) {
        var t = e.id,
          n = e.label,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var o in e)
                  if ({}.hasOwnProperty.call(e, o)) {
                    if (-1 !== t.indexOf(o)) continue;
                    n[o] = e[o];
                  }
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (o = 0; o < a.length; o++)
                ((n = a[o]),
                  -1 === t.indexOf(n) &&
                    {}.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]));
            }
            return r;
          })(e, ae);
        return r.a.createElement(
          re.a,
          null,
          r.a.createElement(
            "label",
            { htmlFor: t, className: "creatable-multi-select-label" },
            n,
          ),
          r.a.createElement(
            "div",
            {
              onTouchEndCapture: function (e) {
                return e.stopPropagation();
              },
            },
            r.a.createElement(oe.a, ie({ isMulti: !0 }, o, { inputId: t })),
          ),
        );
      };
      ((ce.propTypes = { id: i.a.string, label: i.a.string }),
        (ce.defaultProps = { id: "", label: "" }));
      var le = ce,
        se = n(107),
        de = (n(1832), ["children"]);
      function ue(e) {
        return (ue =
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
      function pe() {
        return (pe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function me(e, t) {
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
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? me(Object(n), !0).forEach(function (t) {
                he(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : me(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function he(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ue(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != ue(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == ue(t) ? t : t + "";
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
      var be = function (e, t, n) {
          var o =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          return o ? (e ? t : n) : "transparent";
        },
        ye = function (e) {
          var t = e.data;
          return r.a.createElement(
            ne.o.Option,
            e,
            t.icon && r.a.createElement(d.a, { glyph: t.icon }),
            t.label,
          );
        };
      ye.propTypes = { data: i.a.object.isRequired };
      var ge = function (e) {
        var t = e.data;
        return r.a.createElement(
          "div",
          { tabIndex: 0, style: { display: "flex", height: "18px" } },
          t.icon && r.a.createElement(d.a, { glyph: t.icon }),
          t.label,
        );
      };
      ge.propTypes = { data: i.a.object.isRequired };
      var ve = function (e) {
          var t = e.children,
            n = (function (e, t) {
              if (null == e) return {};
              var n,
                o,
                r = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var o in e)
                    if ({}.hasOwnProperty.call(e, o)) {
                      if (-1 !== t.indexOf(o)) continue;
                      n[o] = e[o];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                  ((n = a[o]),
                    -1 === t.indexOf(n) &&
                      {}.propertyIsEnumerable.call(e, n) &&
                      (r[n] = e[n]));
              }
              return r;
            })(e, de);
          return r.a.createElement(
            ne.o.Control,
            n,
            r.a.createElement(
              "div",
              {
                className:
                  "redaction-search-multi-select-search-icon-container",
              },
              r.a.createElement(d.a, {
                className: "redaction-search-multi-select-search-icon",
                glyph: "icon-header-search",
              }),
            ),
            t,
          );
        },
        xe = function (e) {
          var t = Object(c.a)().t,
            n = e.data.label,
            o = fe(
              fe({}, e),
              {},
              {
                innerProps: fe(
                  fe({}, e.innerProps),
                  {},
                  {
                    "aria-label": "".concat(t("action.remove"), " ").concat(n),
                    tabIndex: 0,
                    onKeyDown: function (t) {
                      ("Enter" !== t.key && " " !== t.key) ||
                        (t.stopPropagation(), e.innerProps.onClick());
                    },
                  },
                ),
              },
            );
          return r.a.createElement(ne.o.MultiValueRemove, o);
        };
      ve.propTypes = { children: i.a.node };
      var we = function (e) {
        var t = Object(c.a)().t,
          n = e.activeTheme,
          o = e.redactionSearchOptions,
          a = [{ label: t("redactionPanel.search.pattern"), options: o }],
          i = (function (e) {
            return {
              groupHeading: function (t) {
                return fe(
                  fe({}, t),
                  {},
                  {
                    textTransform: "none",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: be(e, se.b.white, se.c["text-color"]),
                    paddingBottom: "8px",
                    paddingLeft: "8px",
                    paddingTop: "10px",
                  },
                );
              },
              group: function (e) {
                return fe(fe({}, e), {}, { padding: "0px" });
              },
              menu: function (e) {
                return fe(
                  fe({}, e),
                  {},
                  {
                    padding: "0px 0px 0px 0px",
                    borderRadius: "4px",
                    overflowY: "visible",
                    margin: "0",
                  },
                );
              },
              menuList: function (t) {
                return fe(
                  fe({}, t),
                  {},
                  {
                    padding: "0px",
                    backgroundColor: be(e, se.b.black, se.b.gray0),
                    overflowY: "visible",
                    borderRadius: "4px",
                  },
                );
              },
              multiValue: function (t) {
                return fe(
                  fe({}, t),
                  {},
                  {
                    backgroundColor: be(e, se.b.blue1DarkMode, se.b.gray2),
                    padding: "2px 8px",
                    fontSize: "13px",
                    borderRadius: "4px",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    color: be(e, se.b.white, se.c["text-color"]),
                  },
                );
              },
              multiValueRemove: function (e) {
                return fe(
                  fe({}, e),
                  {},
                  {
                    color: se.b.gray6,
                    borderRadius: "4px",
                    marginLeft: "4px",
                    padding: "0px",
                    "&:hover": {
                      backgroundColor: se.b.gray2,
                      boxShadow: "inset 0 0 0 1px ".concat(se.b.blue6),
                      color: se.b.gray6,
                    },
                    svg: { color: se.b.gray6, height: "16px", width: "16px" },
                  },
                );
              },
              option: function (t, n) {
                var o = n.isFocused;
                return fe(
                  fe({}, t),
                  {},
                  {
                    display: "flex",
                    fontSize: "13px",
                    padding: "6px 8px 0",
                    outline: o ? "var(--focus-visible-outline)" : void 0,
                    "&:hover": {
                      backgroundColor: be(
                        e,
                        se.b.blue1DarkMode,
                        se.c["primary-button-hover"],
                      ),
                      color: se.b.gray0,
                    },
                    backgroundColor: be(e, se.b.blue1DarkMode, se.b.gray0),
                    overflowY: "visible",
                    whiteSpace: "normal",
                    "&:last-child": {
                      borderRadius: "0 0 4px 4px",
                      paddingBottom: "6px",
                    },
                  },
                );
              },
              noOptionsMessage: function (e) {
                return fe(fe({}, e), {}, { color: se.c["text-color"] });
              },
              valueContainer: function (e) {
                return fe(
                  fe({}, e),
                  {},
                  {
                    padding: "1px",
                    maxHeight: Object(ee.b)() ? "55px" : "70px",
                    overflowY: "scroll",
                  },
                );
              },
              control: function (t) {
                return fe(
                  fe({}, t),
                  {},
                  {
                    backgroundColor: be(e, se.b.gray10, se.b.white),
                    minHeight: "28px",
                    borderColor: be(e, se.b.gray8, se.b.gray6),
                    "&:focus-within": {
                      borderColor: be(e, se.b.gray8, se.b.blue5),
                    },
                    "&:hover": { borderColor: be(e, se.b.gray8, se.b.gray6) },
                    boxShadow: "none !important",
                  },
                );
              },
              placeholder: function (t) {
                return fe(
                  fe({}, t),
                  {},
                  {
                    fontSize: "13px",
                    color: be(e, se.b.gray7, se.b.gray5),
                    paddingLeft: "4px",
                  },
                );
              },
              input: function (t) {
                return fe(
                  fe({}, t),
                  {},
                  {
                    fontSize: "13px",
                    color: be(e, se.b.white, se.c["text-color"]),
                    paddingLeft: "3px",
                  },
                );
              },
            };
          })("dark" === n);
        return r.a.createElement(
          le,
          pe(
            {
              options: a,
              styles: i,
              components: {
                Option: ye,
                MultiValueLabel: ge,
                IndicatorsContainer: function () {
                  return null;
                },
                Control: ve,
                MultiValueRemove: xe,
              },
              placeholder: "",
              formatCreateLabel: function (e) {
                return "".concat(t("component.searchPanel"), " ").concat(e);
              },
              id: "redaction-search-multi-select",
              label: t("redactionPanel.redactionSearchPlaceholder"),
            },
            e,
          ),
        );
      };
      we.propTypes = {
        activeTheme: i.a.string.isRequired,
        redactionSearchOptions: i.a.array.isRequired,
      };
      var Se = we;
      n(1834);
      function Oe(e) {
        return (Oe =
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
      function Ae(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Ce(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Pe(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ee(e, t) {
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
      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ee(Object(n), !0).forEach(function (t) {
                Re(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ee(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Re(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Oe(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != Oe(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Oe(t) ? t : t + "";
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
      function ke(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return c;
            }
          })(e, t) ||
          Pe(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Pe(e, t) {
        if (e) {
          if ("string" == typeof e) return Ce(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Ce(e, t)
                : void 0
          );
        }
      }
      function Ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Te = function (e) {
          var t = { textSearch: [], caseSensitive: !0 };
          return e
            ? (e.forEach(function (e) {
                var n = e.type;
                (n === y.c.TEXT ? t.textSearch.push(e.label) : (t[n] = !0),
                  e.regex &&
                    (t.caseSensitive = t.caseSensitive && !e.regex.ignoreCase));
              }),
              t)
            : t;
        },
        Ie = function (e) {
          var t = e.setIsRedactionSearchActive,
            n = e.searchTerms,
            o = e.setSearchTerms,
            a = e.executeRedactionSearch,
            i = e.activeTheme,
            l = e.redactionSearchOptions,
            s = ke(Object(c.a)(), 1)[0],
            d = l.map(function (e) {
              return je(je({}, e), {}, { label: s(e.label) });
            });
          return r.a.createElement(
            te.a,
            {
              className: "RedactionSearchOverlay",
              dataElement: "redactionSearchOverlay",
            },
            r.a.createElement(Se, {
              onFocus: function () {
                return t(!0);
              },
              value: n,
              onCreateOption: function (e) {
                var t = { label: e, value: e, type: y.c.TEXT },
                  r = [].concat(Ae(n || []), [t]);
                o(r);
                var i = Te(r);
                ((i.caseSensitive = !1), a(i));
              },
              onChange: function (e) {
                o(e);
                var t = Te(e);
                a(t);
              },
              activeTheme: i,
              redactionSearchOptions: d,
            }),
          );
        },
        Ne = (n(85), n(480));
      function Me(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return De(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return De(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? De(e, t)
                    : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function De(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var _e = function (e) {
        return function (t) {
          var n = (0, e.getState)(),
            o = x.a.getRedactionSearchPatterns(n),
            r = Object.keys(o).reduce(function (e, t) {
              var n = o[t],
                r = n.regex;
              return ((e[n.type] = r), e);
            }, {}),
            a = { regex: !0, caseSensitive: t.caseSensitive },
            i = Me(t.textSearch);
          Object.keys(t).forEach(function (e) {
            var t = r[e];
            t && i.push(t.source);
          });
          var c = i.join("|");
          "" !== c ? Object(Ne.a)()(c, a) : p.a.clearSearchResults();
        };
      };
      function Le(e) {
        return (Le =
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
      function ze() {
        return (ze = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function He(e, t) {
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
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? He(Object(n), !0).forEach(function (t) {
                Be(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : He(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Be(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Le(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != Le(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Le(t) ? t : t + "";
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
      function Fe(e, t) {
        _e(t)(e);
      }
      var Ue = function (e) {
          var t = Object(o.useContext)(h).setIsRedactionSearchActive,
            n = Object(v.f)(),
            a = Object(v.e)(function (e) {
              return x.a.getActiveTheme(e);
            }),
            i = Object(v.e)(function (e) {
              return x.a.getRedactionSearchPatterns(e);
            }, v.c),
            c = Object.values(i).map(function (e) {
              return We(We({}, e), {}, { value: e.type });
            });
          return r.a.createElement(
            Ie,
            ze(
              {
                setIsRedactionSearchActive: t,
                executeRedactionSearch: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return Fe(e, n);
                },
                activeTheme: a,
                redactionSearchOptions: c,
              },
              e,
            ),
          );
        },
        qe = (n(50), n(62), n(1404)),
        Ve =
          (n(1836),
          function (e) {
            var t = e.isChecked,
              n = e.onChange,
              o = e.onClickResult,
              a = e.isActive,
              i = e.icon,
              c = e.ambientStr,
              l = (function (e) {
                var t = e.ambientStr,
                  n = e.resultStrStart,
                  o = e.resultStrEnd,
                  a = e.resultStr;
                if (e.type === y.c.TEXT) {
                  var i = "" === t ? a : t.slice(n, o),
                    c = t.slice(0, n),
                    l = t.slice(o);
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    c,
                    r.a.createElement("span", { className: "search-value" }, i),
                    l,
                  );
                }
                return a;
              })(e),
              u = s()("redaction-search-result", { active: a });
            return r.a.createElement(
              "li",
              { className: u },
              r.a.createElement("button", {
                className: "redaction-search-result-button",
                onClick: o,
                "aria-label": c,
                "aria-current": a,
              }),
              r.a.createElement(
                "div",
                { style: { paddingRight: "14px" } },
                r.a.createElement(qe.a, {
                  "aria-label": "".concat(c),
                  checked: t,
                  onChange: n,
                }),
              ),
              r.a.createElement(
                "div",
                { style: { paddingRight: "14px" } },
                r.a.createElement(d.a, { glyph: i }),
              ),
              r.a.createElement(
                "div",
                { className: "redaction-search-result-info" },
                l,
              ),
            );
          });
      Ve.propTypes = {
        isChecked: i.a.bool,
        onChange: i.a.func,
        onClickResult: i.a.func,
        isActive: i.a.bool,
        icon: i.a.string,
        ambientStr: i.a.string,
      };
      var $e = r.a.memo(Ve),
        Ge = function (e) {
          var t = e.searchResult,
            n = e.checked,
            a = e.checkResult,
            i = Object(o.useContext)(h).activeSearchResultIndex,
            c = t.ambientStr,
            l = t.resultStrStart,
            s = t.resultStrEnd,
            d = t.resultStr,
            u = t.icon,
            m = t.index,
            f = t.type,
            b = Object(o.useCallback)(
              function (e) {
                a(e, m);
              },
              [m, a],
            ),
            y = Object(o.useCallback)(
              function () {
                p.a.setActiveSearchResult(t);
              },
              [t],
            );
          return r.a.createElement($e, {
            ambientStr: c,
            resultStrStart: l,
            resultStrEnd: s,
            resultStr: d,
            icon: u,
            type: f,
            isChecked: n,
            onChange: b,
            onClickResult: y,
            isActive: i === m,
          });
        };
      n(1838);
      function Xe(e) {
        return (Xe =
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
      function Ye(e, t) {
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
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ye(Object(n), !0).forEach(function (t) {
                Ke(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ye(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Ke(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Xe(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != Xe(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Xe(t) ? t : t + "";
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
      function Qe(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return Ze(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ze(e, t)
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
      function Ze(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var et = function (e) {
          var t = e.pageNumber,
            n = e.searchResults,
            a = e.selectedSearchResultIndexes,
            i = e.setSelectedSearchResultIndexes,
            l = Object(c.a)().t,
            s = n.map(function (e) {
              return e.index;
            }),
            d = Qe(Object(o.useState)(!1), 2),
            u = d[0],
            p = d[1];
          Object(o.useEffect)(
            function () {
              var e = s.reduce(function (e, t) {
                return a[t] && e;
              }, !0);
              p(e);
            },
            [a, s],
          );
          var m = Object(o.useCallback)(
              function (e) {
                var t = e.target.checked;
                (s.forEach(function (e) {
                  a[e] = t;
                }),
                  p(t),
                  i(Je({}, a)));
              },
              [a, s],
            ),
            f = Object(o.useCallback)(
              function (e, t) {
                var n = e.target.checked;
                ((a[t] = n), i(Je({}, a)));
              },
              [a],
            );
          return r.a.createElement(
            "div",
            { className: "redaction-search-results-page-number" },
            r.a.createElement(qe.a, {
              className: "redaction-search-results-page-number-checkbox",
              "aria-label": "".concat(l("option.shared.page"), " ").concat(t),
              checked: u,
              onChange: function (e) {
                (e.stopPropagation(), m(e));
              },
            }),
            r.a.createElement(
              _.a,
              {
                header: function () {
                  return "".concat(l("option.shared.page"), " ").concat(t);
                },
                style: { width: "100%" },
                expansionDescription: ""
                  .concat(l("option.shared.page"), " ")
                  .concat(t),
              },
              r.a.createElement(
                "ul",
                { className: "redaction-search-results" },
                n.map(function (e, n) {
                  return r.a.createElement(Ge, {
                    checked: a[e.index],
                    checkResult: f,
                    searchResult: e,
                    key: "".concat(n, "-").concat(t),
                  });
                }),
              ),
            ),
          );
        },
        tt = n(471),
        nt = (n(1840), "SEARCH_NOT_INITIATED"),
        ot = "SEARCH_IN_PROGRESS",
        rt = "SEARCH_DONE";
      function at() {
        return (at = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function it(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return st(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          lt(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ct(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return c;
            }
          })(e, t) ||
          lt(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function lt(e, t) {
        if (e) {
          if ("string" == typeof e) return st(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? st(e, t)
                : void 0
          );
        }
      }
      function st(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var dt = function (e) {
        var t = e.redactionSearchResults,
          n = e.searchStatus,
          a = e.onCancelSearch,
          i = e.isProcessingRedactionResults,
          l = e.markSelectedResultsForRedaction,
          d = e.redactSelectedResults,
          p = Object(c.a)().t,
          m = ct(Object(o.useState)({}), 2),
          f = m[0],
          b = m[1],
          y = ct(Object(o.useState)({}), 2),
          v = y[0],
          x = y[1],
          w = ct(Object(o.useState)([]), 2),
          S = w[0],
          O = w[1],
          A = Object(o.useContext)(h).isTestMode;
        (Object(o.useEffect)(
          function () {
            var e = {};
            (t.forEach(function (t, n) {
              var o = t.pageNum;
              ((t.index = n),
                void 0 === e[o]
                  ? (e[o] = [t])
                  : (e[o] = [].concat(it(e[o]), [t])));
            }),
              b(e));
            var n = {};
            (t.forEach(function (e, t) {
              n[t] = !1;
            }),
              x(n));
          },
          [t],
        ),
          Object(o.useEffect)(
            function () {
              var e = t.filter(function (e, t) {
                return v[t];
              });
              O(e);
            },
            [v],
          ));
        var E = r.a.createElement(
            "div",
            { "aria-label": p("message.noResults") },
            r.a.createElement(
              "p",
              {
                "aria-live": "assertive",
                role: "alert",
                className: "no-margin",
              },
              p("message.noResults"),
            ),
          ),
          j = 0 === t.length,
          R = s()("redaction-search-results-container", { emptyList: j }),
          k = s()("redact-all-selected", { disabled: 0 === S.length }),
          P = s()("mark-all-selected", { disabled: 0 === S.length }),
          C = (n === rt && !i) || n === nt;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            { className: "redaction-search-counter-controls" },
            n === ot &&
              r.a.createElement(
                "div",
                { style: { flexGrow: 1 } },
                r.a.createElement(tt.a, { height: "18px", width: "18px" }),
              ),
            C &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "redaction-search-results-counter" },
                  r.a.createElement(
                    "h4",
                    {
                      "aria-live": "assertive",
                      role: "alert",
                      className: "no-margin",
                    },
                    p("redactionPanel.searchResults"),
                    r.a.createElement("span", null, " (".concat(t.length, ")")),
                  ),
                ),
                r.a.createElement(g.a, {
                  className: s()({ inactive: S.length < 1 }),
                  onClick: function () {
                    var e = {};
                    (t.forEach(function (t, n) {
                      e[n] = !0;
                    }),
                      x(e));
                  },
                  disabled: j,
                  label: p("action.selectAll"),
                }),
                r.a.createElement(g.a, {
                  className: s()({ inactive: S.length < 1 }),
                  disabled: j,
                  onClick: function () {
                    var e = {};
                    (t.forEach(function (t, n) {
                      e[n] = !1;
                    }),
                      x(e));
                  },
                  label: p("action.unselect"),
                }),
              ),
          ),
          r.a.createElement(
            "div",
            { className: R, role: "list" },
            n === nt &&
              r.a.createElement(
                "div",
                { "aria-label": p("redactionPanel.search.start") },
                p("redactionPanel.search.start"),
              ),
            n === ot &&
              j &&
              i &&
              r.a.createElement(
                "div",
                null,
                r.a.createElement(tt.a, { height: "25px", width: "25px" }),
              ),
            n === rt && j && !i && E,
            (n === ot || n === rt) &&
              (function () {
                var e = Object.keys(f);
                if (e.length > 0) {
                  var t = A ? { initialItemCount: e.length } : {};
                  return r.a.createElement(
                    u.a,
                    at(
                      {
                        data: e,
                        itemContent: function (e, t) {
                          return r.a.createElement(et, {
                            key: e,
                            pageNumber: t,
                            searchResults: f[t],
                            selectedSearchResultIndexes: v,
                            setSelectedSearchResultIndexes: x,
                          });
                        },
                      },
                      t,
                    ),
                  );
                }
              })(),
          ),
          r.a.createElement(
            "div",
            { className: "redaction-search-panel-controls" },
            r.a.createElement(g.a, {
              onClick: function () {
                (b({}), a());
              },
              label: p("action.cancel"),
              className: "cancel",
            }),
            r.a.createElement(g.a, {
              disabled: 0 === S.length,
              label: p("annotation.redact"),
              className: k,
              onClick: function () {
                d(S);
              },
            }),
            r.a.createElement(g.a, {
              disabled: 0 === S.length,
              label: p("action.addMark"),
              ariaLabel: p("action.addMark"),
              className: P,
              onClick: function () {
                (l(S), a());
              },
            }),
          ),
        );
      };
      function ut() {
        return (ut = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function pt(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return mt(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? mt(e, t)
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
      function mt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var ft = window.Core.Tools.ToolNames,
        ht = {
          OverlayText: "",
          StrokeColor: new window.Core.Annotations.Color(255, 0, 0),
          TextColor: new window.Core.Annotations.Color(255, 0, 0, 1),
          Font: "Helvetica",
        };
      function bt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ht,
          n = t.StrokeColor,
          o = t.OverlayText,
          r = t.FillColor,
          a = t.Font,
          i = void 0 === a ? "Helvetica" : a,
          c = t.TextColor,
          l = t.FontSize,
          s = t.TextAlign,
          d = e.map(function (e) {
            var t = new window.Core.Annotations.RedactionAnnotation();
            return (
              (t.PageNumber = e.page_num),
              (t.Quads = e.quads.map(function (e) {
                return e.getPoints();
              })),
              (t.StrokeColor = n),
              (t.OverlayText = o),
              (t.FillColor = r),
              (t.Font = i),
              (t.FontSize = l),
              window.Core.Annotations.Utilities.calculateAutoFontSize &&
                (t.FontSize =
                  window.Core.Annotations.Utilities.calculateAutoFontSize(t)),
              (t.TextColor = c),
              (t.TextAlign = s),
              t.setContents(e.result_str),
              (t.type = e.type),
              (t.Author = p.a.getCurrentUser()),
              "text" === e.type &&
                t.setCustomData("trn-annot-preview", e.result_str),
              t.setCustomData("trn-redaction-type", e.type),
              t
            );
          });
        return d;
      }
      var yt = function (e) {
        var t = e.onCancelSearch,
          n = Object(v.d)(),
          a = pt(
            Object(v.e)(function (e) {
              return [x.a.getActiveToolStyles(e), x.a.getActiveToolName(e)];
            }, v.c),
            2,
          ),
          i = a[0],
          c = a[1],
          l = Object(o.useCallback)(
            function (e) {
              var t = p.a.getTool(ft.REDACTION),
                n = t && t.defaults ? t.defaults : ht,
                o = bt(e, c.includes("Redaction") ? i : n);
              p.a.getAnnotationManager().addAnnotations(o);
            },
            [i, c],
          );
        return r.a.createElement(
          dt,
          ut(
            {
              markSelectedResultsForRedaction: l,
              redactSelectedResults: function (e) {
                var o = bt(e, ht);
                n(Object(Z.a)(o, t));
              },
            },
            e,
          ),
        );
      };
      function gt(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return vt(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? vt(e, t)
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
      function vt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var xt = function (e) {
        var t = Object(v.d)(),
          n = gt(Object(o.useState)([]), 2),
          a = n[0],
          i = n[1],
          c = Object(o.useContext)(h),
          l = c.isRedactionSearchActive,
          s = c.setIsRedactionSearchActive,
          u = e.redactionSearchResults,
          p = e.isProcessingRedactionResults,
          m = e.clearRedactionSearchResults,
          f = e.searchStatus,
          b = Object(ee.b)();
        return r.a.createElement(
          r.a.Fragment,
          null,
          b &&
            r.a.createElement(
              "div",
              { className: "close-container" },
              r.a.createElement(
                "button",
                {
                  className: "close-icon-container",
                  onClick: function () {
                    t(Q.a.closeElement("redactionPanel"));
                  },
                },
                r.a.createElement(d.a, {
                  glyph: "ic_close_black_24px",
                  className: "close-icon",
                }),
              ),
            ),
          r.a.createElement(Ue, { searchTerms: a, setSearchTerms: i }),
          l &&
            r.a.createElement(yt, {
              redactionSearchResults: u,
              onCancelSearch: function () {
                (i([]), m(), s(!1));
              },
              searchStatus: f,
              isProcessingRedactionResults: p,
            }),
        );
      };
      n(81);
      function wt(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return St(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? St(e, t)
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
      function St(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ot = function () {
          var e = wt(Object(o.useState)(nt), 2),
            t = e[0],
            n = e[1],
            r = wt(Object(o.useState)([]), 2),
            a = r[0],
            i = r[1],
            c = wt(Object(o.useState)(!1), 2),
            l = c[0],
            s = c[1],
            d = Object(v.e)(function (e) {
              return x.a.getRedactionSearchPatterns(e);
            }, v.c),
            u = Object(o.useMemo)(
              function () {
                return Object.keys(d).reduce(function (e, t) {
                  var n = d[t],
                    o = n.regex,
                    r = n.type,
                    a = n.icon;
                  return ((e[r] = { regex: o, icon: a }), e);
                }, {});
              },
              [d],
            ),
            m = Object(o.useCallback)(
              function (e) {
                var t = e.resultStr,
                  n = Object.keys(u).find(function (e) {
                    return u[e].regex.test(t);
                  });
                e.type = void 0 === n ? y.c.TEXT : n;
                var o = (u[e.type] || {}).icon,
                  r = void 0 === o ? "icon-text-redaction" : o;
                return ((e.icon = r), e);
              },
              [u],
            ),
            f = Object(o.useCallback)(function () {
              (i([]), p.a.clearSearchResults(), s(!1));
            });
          return (
            Object(o.useEffect)(
              function () {
                function e(e) {
                  var t = e.map(m);
                  (s(!0), i(t));
                }
                return (
                  p.a.addEventListener("searchResultsChanged", e),
                  function () {
                    p.a.removeEventListener("searchResultsChanged", e);
                  }
                );
              },
              [t],
            ),
            Object(o.useEffect)(function () {
              function e(e) {
                null == e
                  ? n(nt)
                  : e
                    ? n(ot)
                    : (n(rt),
                      setTimeout(function () {
                        s(!1);
                      }, 100));
              }
              return (
                p.a.addEventListener("searchInProgress", e),
                function () {
                  p.a.removeEventListener("searchInProgress", e);
                }
              );
            }, []),
            {
              redactionSearchResults: a,
              isProcessingRedactionResults: l,
              clearRedactionSearchResults: f,
              searchStatus: t,
            }
          );
        },
        At = function () {
          var e = Ot(),
            t = e.redactionSearchResults,
            n = e.isProcessingRedactionResults,
            o = e.clearRedactionSearchResults,
            a = e.searchStatus;
          return r.a.createElement(xt, {
            redactionSearchResults: t,
            isProcessingRedactionResults: n,
            clearRedactionSearchResults: o,
            searchStatus: a,
          });
        };
      function Et(e) {
        return (Et =
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
      function jt(e, t) {
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
      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? jt(Object(n), !0).forEach(function (t) {
                kt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : jt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function kt(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Et(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != Et(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Et(t) ? t : t + "";
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
      function Pt(e, t) {
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
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (c.push(o.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
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
              if ("string" == typeof e) return Ct(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ct(e, t)
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
      function Ct(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Tt = function (e) {
        var t = Pt(
            Object(v.e)(function (e) {
              return [
                x.a.isElementOpen(e, "redactionPanel"),
                x.a.isElementDisabled(e, "redactionPanel"),
                x.a.getRedactionPanelWidth(e),
                x.a.isInDesktopOnlyMode(e),
                x.a.getCustomApplyRedactionsHandler(e),
                x.a.getRedactionSearchPatterns(e),
              ];
            }, v.c),
            6,
          ),
          n = t[0],
          a = t[1],
          i = t[2],
          c = t[3],
          l = t[4],
          s = t[5],
          u = Object(ee.b)(),
          m = e.redactionAnnotationsList,
          f = e.isCustomPanel,
          b = e.dataElement,
          g = Object(o.useMemo)(
            function () {
              return Rt(
                Rt(
                  {},
                  Object.keys(s).reduce(function (e, t) {
                    var n = s[t],
                      o = n.label,
                      r = n.type,
                      a = n.icon;
                    return ((e[r] = { label: o, icon: a }), e);
                  }, {}),
                ),
                y.a,
              );
            },
            [s],
          ),
          w = Object(v.d)(),
          S = function () {
            var e = f ? b : "redactionPanel";
            w(Q.a.closeElement(e));
          },
          O =
            f || (!c && u)
              ? {}
              : { width: "".concat(i, "px"), minWidth: "".concat(i, "px") },
          A = Object(o.useContext)(h).isRedactionSearchActive,
          E = Pt(Object(o.useState)(!1), 2),
          j = E[0],
          R = E[1];
        if (
          (Object(o.useEffect)(
            function () {
              var e = setTimeout(function () {
                R(!n);
              }, 500);
              return function () {
                clearTimeout(e);
              };
            },
            [n],
          ),
          a || (!n && j && !f))
        )
          return null;
        var k = f ? b : "redactionPanel";
        return r.a.createElement(
          te.a,
          { dataElement: k, className: "Panel RedactionPanel", style: O },
          !c &&
            u &&
            !f &&
            r.a.createElement(
              "div",
              { className: "close-container" },
              r.a.createElement(
                "div",
                { className: "close-icon-container", onClick: S },
                r.a.createElement(d.a, {
                  glyph: "ic_close_black_24px",
                  className: "close-icon",
                }),
              ),
            ),
          r.a.createElement(At, null),
          !A &&
            r.a.createElement(K, {
              redactionAnnotations: m,
              redactionTypesDictionary: g,
              applyAllRedactions: function () {
                var e = function () {
                  var e = f ? S : function () {};
                  w(Object(Z.a)(m, e));
                };
                l ? l(m, e) : e();
              },
              deleteAllRedactionAnnotations: function () {
                p.a.deleteAnnotations(m);
              },
            }),
        );
      };
      ((Tt.propTypes = {
        redactionAnnotationsList: i.a.array,
        isCustomPanel: i.a.bool,
        dataElement: i.a.string,
      }),
        (Tt.defaultProps = { isCustomPanel: !1, dataElement: "" }));
      var It = function (e) {
        return r.a.createElement(b, null, r.a.createElement(Tt, e));
      };
      t.default = It;
    },
  },
]);
//# sourceMappingURL=chunk.32.js.map
