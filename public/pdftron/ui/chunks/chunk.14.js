(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    1798: function (e, o, n) {
      var t = n(35),
        a = n(1968);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let o;
          ((o = document.getElementsByTagName("apryse-webviewer")),
            o.length ||
              (o = (function e(o, n = document) {
                const t = [];
                return (
                  n.querySelectorAll(o).forEach((e) => t.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && t.push(...e(o, n.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer")));
          const n = [];
          for (let t = 0; t < o.length; t++) {
            const a = o[t];
            if (0 === t)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((o) => {
                      o.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const o = e.cloneNode(!0);
              (a.shadowRoot.appendChild(o), n.push(o));
            }
          }
        },
        singleton: !1,
      };
      t(a, i);
      e.exports = a.locals || {};
    },
    1878: function (e, o, n) {
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
        n(13));
      var t = n(0),
        a = n.n(t),
        i = n(6),
        l = n(4),
        r = n(305),
        d = (n(1966), n(72)),
        p = n(51),
        c = n(15),
        s = n.n(c),
        b = n(2),
        m = n.n(b);
      function u(e, o) {
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
              var t,
                a,
                i,
                l,
                r = [],
                d = !0,
                p = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === o)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (t = i.call(n)).done) &&
                    (r.push(t.value), r.length !== o);
                    d = !0
                  );
              } catch (e) {
                ((p = !0), (a = e));
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (p) throw a;
                }
              }
              return r;
            }
          })(e, o) ||
          (function (e, o) {
            if (e) {
              if ("string" == typeof e) return g(e, o);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? g(e, o)
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
      function g(e, o) {
        (null == o || o > e.length) && (o = e.length);
        for (var n = 0, t = Array(o); n < o; n++) t[n] = e[n];
        return t;
      }
      var h = function (e) {
        var o = e.defaultValue,
          n = e.onFileSelect,
          c = e.acceptFormats,
          b = e.extension,
          m = e.setExtension,
          g = e.error,
          h = u(Object(r.a)(), 1)[0],
          f = u(Object(t.useState)(o || ""), 2),
          x = f[0],
          M = f[1],
          w = Object(i.e)(function (e) {
            var o;
            return null === (o = l.a.getFeatureFlags(e)) || void 0 === o
              ? void 0
              : o.customizableUI;
          });
        return (
          Object(t.useEffect)(function () {
            o || o === x || M("");
          }),
          a.a.createElement(
            "div",
            { className: "FileInputPanel" },
            a.a.createElement(
              "label",
              { htmlFor: "urlInput", className: "url-input-header" },
              h("link.enterUrlAlt"),
            ),
            a.a.createElement(
              "div",
              { className: "url-input" },
              a.a.createElement("input", {
                type: "text",
                id: "urlInput",
                className: s()({ "file-input": !0, "file-input--error": !!g }),
                style: {
                  width: "100%",
                  height: 32,
                  paddingLeft: 8,
                  fontSize: 13,
                  boxSizing: "border-box",
                },
                value: x,
                onChange: function (e) {
                  (M(e.target.value), n(e.target.value));
                },
                placeholder: w ? "" : h("link.urlLink"),
                "aria-describedby": g ? "urlInputError" : void 0,
              }),
              g && a.a.createElement(p.a, { glyph: "icon-alert" }),
            ),
            g &&
              a.a.createElement(
                "div",
                { className: "url-input-error", id: "urlInputError" },
                a.a.createElement(
                  "p",
                  { "aria-live": "assertive", className: "no-margin" },
                  h(g),
                ),
              ),
            m
              ? a.a.createElement(
                  "div",
                  { className: "extension-dropdown" },
                  a.a.createElement(d.a, {
                    disabled: !x,
                    id: "open-file-extension-dropdown",
                    labelledById: "open-file-extension-dropdown-label",
                    placeholder: h("tool.selectAnOption"),
                    onClick: function (e) {
                      return e.stopPropagation();
                    },
                    items: c,
                    ariaLabel: h("OpenFile.extension"),
                    onClickItem: m,
                    currentSelectionKey: b,
                    maxHeight: 200,
                    height: 32,
                  }),
                  a.a.createElement(
                    "label",
                    { id: "open-file-extension-dropdown-label" },
                    h("OpenFile.extension"),
                  ),
                )
              : null,
          )
        );
      };
      h.propTypes = {
        defaultValue: m.a.string,
        onFileSelect: m.a.func.isRequired,
        acceptFormats: m.a.oneOfType([
          m.a.arrayOf(
            m.a.shape({
              key: m.a.string.isRequired,
              value: m.a.string.isRequired,
            }),
          ),
          m.a.arrayOf(m.a.string),
        ]),
        extension: m.a.string,
        setExtension: m.a.func,
        error: m.a.string,
      };
      var f = h;
      o.a = f;
    },
    1966: function (e, o, n) {
      var t = n(35),
        a = n(1967);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let o;
          ((o = document.getElementsByTagName("apryse-webviewer")),
            o.length ||
              (o = (function e(o, n = document) {
                const t = [];
                return (
                  n.querySelectorAll(o).forEach((e) => t.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && t.push(...e(o, n.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer")));
          const n = [];
          for (let t = 0; t < o.length; t++) {
            const a = o[t];
            if (0 === t)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((o) => {
                      o.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const o = e.cloneNode(!0);
              (a.shadowRoot.appendChild(o), n.push(o));
            }
          }
        },
        singleton: !1,
      };
      t(a, i);
      e.exports = a.locals || {};
    },
    1967: function (e, o, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".FileInputPanel{display:flex;justify-content:center;height:100%;flex-direction:column;background-color:var(--document-background-color);border-radius:4px}.FileInputPanel .url-input-header{font-size:13px;line-height:16px;padding-inline-start:16px;padding-bottom:8px;font-weight:700}.FileInputPanel .url-input{padding:0 16px;position:relative;display:flex;align-items:center}.FileInputPanel .url-input input:focus{border-color:var(--outline-color)}.FileInputPanel .url-input input:active{border-color:var(--focus-border)}.FileInputPanel .url-input .Icon{position:absolute;inset-inline-end:20px;color:var(--error-border-color)}.FileInputPanel .file-input{padding:6px;width:108px;height:32px}.FileInputPanel .file-input.file-input--error{padding-inline-end:30px;border-color:var(--error-border-color)}.FileInputPanel .url-input-error{padding:0 16px;margin-top:8px;font-size:13px;color:var(--error-text-color)}.FileInputPanel ::-moz-placeholder{color:var(--placeholder-text)}.FileInputPanel ::placeholder{color:var(--placeholder-text)}",
        "",
      ]);
    },
    1968: function (e, o, n) {
      ((o = e.exports = n(36)(!1)).push([
        e.i,
        ".open.OpenFileModal,.open.PageReplacementModal{visibility:visible}.closed.OpenFileModal,.closed.PageReplacementModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.OpenFileModal .container .footer .modal-btn:hover:not(:disabled),.OpenFileModal .footer .modal-button.confirm:hover,.PageReplacementModal .container .footer .modal-btn:hover:not(:disabled),.PageReplacementModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.OpenFileModal .container .footer .modal-btn,.OpenFileModal .footer .modal-button.confirm,.PageReplacementModal .container .footer .modal-btn,.PageReplacementModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.OpenFileModal .container .Button.disabled,.OpenFileModal .container .footer .modal-btn:disabled,.OpenFileModal .footer .modal-button.confirm.disabled,.PageReplacementModal .container .Button.disabled,.PageReplacementModal .container .footer .modal-btn:disabled,.PageReplacementModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.OpenFileModal .container .Button.disabled span,.OpenFileModal .container .footer .modal-btn:disabled span,.OpenFileModal .footer .modal-button.confirm.disabled span,.PageReplacementModal .container .Button.disabled span,.PageReplacementModal .container .footer .modal-btn:disabled span,.PageReplacementModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.OpenFileModal .footer .modal-button.cancel:hover,.OpenFileModal .footer .modal-button.secondary-btn-custom:hover,.PageReplacementModal .footer .modal-button.cancel:hover,.PageReplacementModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.OpenFileModal .footer .modal-button.cancel,.OpenFileModal .footer .modal-button.secondary-btn-custom,.PageReplacementModal .footer .modal-button.cancel,.PageReplacementModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.OpenFileModal .footer .modal-button.cancel.disabled,.OpenFileModal .footer .modal-button.secondary-btn-custom.disabled,.PageReplacementModal .footer .modal-button.cancel.disabled,.PageReplacementModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.OpenFileModal .footer .modal-button.cancel.disabled span,.OpenFileModal .footer .modal-button.secondary-btn-custom.disabled span,.PageReplacementModal .footer .modal-button.cancel.disabled span,.PageReplacementModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.OpenFileModal.modular-ui .thumb-card:hover,.PageReplacementModal.modular-ui .thumb-card:hover{cursor:pointer;border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}.OpenFileModal,.PageReplacementModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.OpenFileModal .modal-container .wrapper .modal-content,.PageReplacementModal .modal-container .wrapper .modal-content{padding:10px}.OpenFileModal .footer,.PageReplacementModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.OpenFileModal .footer.modal-footer,.PageReplacementModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.OpenFileModal .footer .modal-button,.PageReplacementModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.OpenFileModal .footer .modal-button.confirm,.PageReplacementModal .footer .modal-button.confirm{margin-inline-start:4px}.OpenFileModal .footer .modal-button.secondary-btn-custom,.PageReplacementModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .footer .modal-button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .footer .modal-button,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .footer .modal-button{padding:23px 8px}}.OpenFileModal .swipe-indicator,.PageReplacementModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .swipe-indicator,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .swipe-indicator,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .swipe-indicator,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .swipe-indicator,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .swipe-indicator{width:32px}}.OpenFileModal .container,.PageReplacementModal .container{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .OpenFileModal .container,.App:not(.is-web-component) .PageReplacementModal .container,.OpenFileModal .App:not(.is-web-component) .container,.PageReplacementModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .OpenFileModal .container,.App.is-web-component .PageReplacementModal .container,.OpenFileModal .App.is-web-component .container,.PageReplacementModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .container,.OpenFileModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container,.PageReplacementModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;inset-inline-start:0;inset-block-end:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .container,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .container,.OpenFileModal .App.is-web-component:not(.is-in-desktop-only-mode) .container,.PageReplacementModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;inset-inline-start:0;inset-block-end:0;padding-top:4px;min-width:100px}}.OpenFileModal .container .tab-list,.PageReplacementModal .container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;color:var(--text-color)}.OpenFileModal .container .tab-list .tab-options-button,.PageReplacementModal .container .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.OpenFileModal .container .tab-list .tab-options-button:first-child,.PageReplacementModal .container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.OpenFileModal .container .tab-list .tab-options-button:last-child,.PageReplacementModal .container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.OpenFileModal .container .tab-list .tab-options-button:hover,.PageReplacementModal .container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.OpenFileModal .container .tab-list .tab-options-button.selected,.PageReplacementModal .container .tab-list .tab-options-button.selected{cursor:default}.OpenFileModal .container .tab-list .tab-options-button.focus-visible,.OpenFileModal .container .tab-list .tab-options-button:focus-visible,.PageReplacementModal .container .tab-list .tab-options-button.focus-visible,.PageReplacementModal .container .tab-list .tab-options-button:focus-visible{outline:var(--focus-visible-outline)}.OpenFileModal .container .tab-panel,.PageReplacementModal .container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.OpenFileModal .container .tab-panel.focus-visible,.OpenFileModal .container .tab-panel:focus-visible,.PageReplacementModal .container .tab-panel.focus-visible,.PageReplacementModal .container .tab-panel:focus-visible{outline:var(--focus-visible-outline)!important}.OpenFileModal .container,.PageReplacementModal .container{box-sizing:border-box;display:flex;flex-direction:column;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);padding:0;background:var(--component-background);overflow-y:visible;width:480px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .container{border-radius:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .container,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .container{border-radius:0}}@media(max-height:320px){.App:not(.is-web-component) .OpenFileModal .container,.App:not(.is-web-component) .PageReplacementModal .container{display:grid;height:100%;position:fixed;inset-block-start:0;grid-template-rows:100px auto 70px;justify-content:normal}}@container (max-height: 320px){.App.is-web-component .OpenFileModal .container,.App.is-web-component .PageReplacementModal .container{display:grid;height:100%;position:fixed;inset-block-start:0;grid-template-rows:100px auto 70px;justify-content:normal}}.OpenFileModal .container .Button,.PageReplacementModal .container .Button{height:100%;justify-content:right}.OpenFileModal .container .Button.close-button,.PageReplacementModal .container .Button.close-button{justify-content:center}.OpenFileModal .container .page-replacement-divider,.PageReplacementModal .container .page-replacement-divider{border-top:1px solid var(--divider);margin:0}.OpenFileModal .container .modal-container,.PageReplacementModal .container .modal-container{overflow-y:unset}.OpenFileModal .container .tabs-header-container,.PageReplacementModal .container .tabs-header-container{padding:16px}.OpenFileModal .container .header,.PageReplacementModal .container .header{margin:0;display:flex;justify-content:space-between;width:100%;font-size:16px;line-height:24px;font-weight:700}.OpenFileModal .container .footer,.PageReplacementModal .container .footer{margin-top:0;padding:16px;justify-content:flex-end}.OpenFileModal .container .footer.isFileSelected,.PageReplacementModal .container .footer.isFileSelected{justify-content:space-between}.OpenFileModal .container .footer .deselect-thumbnails,.PageReplacementModal .container .footer .deselect-thumbnails{border:none;background-color:transparent;color:var(--secondary-button-text);padding:0 8px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer}.OpenFileModal .container .footer .deselect-thumbnails,:host(:not([data-tabbing=true])) .PageReplacementModal .container .footer .deselect-thumbnails,html:not([data-tabbing=true]) .PageReplacementModal .container .footer .deselect-thumbnails{outline:none}.OpenFileModal .container .footer .deselect-thumbnails:hover,.PageReplacementModal .container .footer .deselect-thumbnails:hover{color:var(--secondary-button-hover)}.OpenFileModal .container .footer .deselect-thumbnails.disabled,.PageReplacementModal .container .footer .deselect-thumbnails.disabled{visibility:hidden}.OpenFileModal .container .footer .modal-btn,.PageReplacementModal .container .footer .modal-btn{border:none;background-color:transparent;border-radius:4px;padding:0 20px;height:32px;width:67px;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;background-color:var(--primary-button)}.OpenFileModal .container .footer .modal-btn,:host(:not([data-tabbing=true])) .PageReplacementModal .container .footer .modal-btn,html:not([data-tabbing=true]) .PageReplacementModal .container .footer .modal-btn{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .container .footer .modal-btn,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .container .footer .modal-btn{height:32px;width:100px;font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .container .footer .modal-btn,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .container .footer .modal-btn{height:32px;width:100px;font-size:13px}}.OpenFileModal .container .footer .modal-btn.noFile,.PageReplacementModal .container .footer .modal-btn.noFile{opacity:.5;cursor:default}.OpenFileModal .container .modal-body,.PageReplacementModal .container .modal-body{height:unset;display:flex;flex-direction:column;font-size:13px}.OpenFileModal .container .modal-body .modal-body-container,.PageReplacementModal .container .modal-body .modal-body-container{width:100%;height:409px;padding:16px 0 16px 16px;border-radius:4px;overflow:auto;background-color:var(--gray-2);display:flex;flex-wrap:wrap;grid-gap:16px;gap:16px}.OpenFileModal .container .modal-body .modal-body-container.isLoading,.PageReplacementModal .container .modal-body .modal-body-container.isLoading{justify-content:center;align-items:center}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .container .modal-body .modal-body-container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .container .modal-body .modal-body-container{padding:12px 0 12px 12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .container .modal-body .modal-body-container,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .container .modal-body .modal-body-container{padding:12px 0 12px 12px}}.OpenFileModal .container .tab-panel .panel-body,.PageReplacementModal .container .tab-panel .panel-body{width:100%;height:240px;position:relative;padding:0 16px 16px;font-size:13px;border-radius:4px}.OpenFileModal .container .tab-panel .panel-body.upload,.PageReplacementModal .container .tab-panel .panel-body.upload{background:transparent}.OpenFileModal .container .tab-list .tab-options-button,.PageReplacementModal .container .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}.OpenFileModal .container .tab-list .tab-options-button,:host(:not([data-tabbing=true])) .PageReplacementModal .container .tab-list .tab-options-button,html:not([data-tabbing=true]) .PageReplacementModal .container .tab-list .tab-options-button{outline:none}.OpenFileModal .container .tab-list .tab-options-divider+.tab-options-button,.PageReplacementModal .container .tab-list .tab-options-divider+.tab-options-button{border-inline-start:none!important}.OpenFileModal .container .tab-list .tab-options-button,.PageReplacementModal .container .tab-list .tab-options-button{border-top:1px solid var(--tab-border-color);border-bottom:1px solid var(--tab-border-color)}.OpenFileModal .container .tab-list .tab-options-button:first-child,.PageReplacementModal .container .tab-list .tab-options-button:first-child{border-inline-start:1px solid var(--tab-border-color)}.OpenFileModal .container .tab-list .tab-options-button:last-child,.PageReplacementModal .container .tab-list .tab-options-button:last-child{border-inline-end:1px solid var(--tab-border-color)}.OpenFileModal .container .tab-list .tab-options-button:hover,.PageReplacementModal .container .tab-list .tab-options-button:hover{background:var(--tab-background-color-hover);border-top:1px solid var(--tab-border-color-hover);border-bottom:1px solid var(--tab-border-color-hover);border-inline-end:1px solid var(--tab-border-color-hover)}.OpenFileModal .container .tab-list .tab-options-button:hover+button,.OpenFileModal .container .tab-list .tab-options-button:hover+div,.PageReplacementModal .container .tab-list .tab-options-button:hover+button,.PageReplacementModal .container .tab-list .tab-options-button:hover+div{border-inline-start:none}.OpenFileModal .container .tab-list .tab-options-button.selected,.PageReplacementModal .container .tab-list .tab-options-button.selected{background:var(--tab-color-selected);border:1px solid var(--tab-color-selected);color:var(--tab-text-color-selected)}.OpenFileModal .container .tab-list .tab-options-button.selected+button,.OpenFileModal .container .tab-list .tab-options-button.selected+div,.PageReplacementModal .container .tab-list .tab-options-button.selected+button,.PageReplacementModal .container .tab-list .tab-options-button.selected+div{border-inline-start:none!important}.OpenFileModal .container .tab-list .tab-options-button:not(.selected),.PageReplacementModal .container .tab-list .tab-options-button:not(.selected){border-inline-end:solid 1px var(--tab-border-color)}.OpenFileModal.modular-ui .thumb-card,.PageReplacementModal.modular-ui .thumb-card{border:none;box-shadow:inset 0 0 0 1px var(--lighter-border)}.OpenFileModal.modular-ui .thumb-card:hover,.PageReplacementModal.modular-ui .thumb-card:hover{background:var(--gray-1)}",
        "",
      ]),
        (o.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
  },
]);
//# sourceMappingURL=chunk.14.js.map
