(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    1637: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n.n(o),
        l = (n(1652), { renderContent: i.a.func, children: i.a.node }),
        c = function (e) {
          var t = e.renderContent ? e.renderContent() : e.children;
          return r.a.createElement("h4", { className: "ListSeparator" }, t);
        };
      c.propTypes = l;
      var s = r.a.memo(c);
      t.a = s;
    },
    1652: function (e, t, n) {
      var a = n(35),
        r = n(1653);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const a = [];
                return (
                  n.querySelectorAll(t).forEach((e) => a.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && a.push(...e(t, n.shadowRoot));
                  }),
                  a
                );
              })("apryse-webviewer")));
          const n = [];
          for (let a = 0; a < t.length; a++) {
            const r = t[a];
            if (0 === a)
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
      a(r, o);
      e.exports = r.locals || {};
    },
    1653: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ListSeparator{margin-top:16px;margin-bottom:8px;font-family:Lato;font-weight:500;color:var(--list-separator-color);-webkit-user-select:none;-moz-user-select:none;user-select:none}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1800: function (e, t, n) {
      var a = n(35),
        r = n(1801);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const a = [];
                return (
                  n.querySelectorAll(t).forEach((e) => a.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && a.push(...e(t, n.shadowRoot));
                  }),
                  a
                );
              })("apryse-webviewer")));
          const n = [];
          for (let a = 0; a < t.length; a++) {
            const r = t[a];
            if (0 === a)
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
      a(r, o);
      e.exports = r.locals || {};
    },
    1801: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SearchResult{background-color:transparent;border:1px solid transparent;display:block;width:calc(100% - 4px);text-align:start;cursor:pointer;border-radius:4px;box-shadow:0 0 3px 0 var(--box-shadow);padding:10px 12px;margin-inline-start:2px;margin-bottom:8px;background:var(--component-background);word-break:break-all}:host(:not([data-tabbing=true])) .SearchResult,html:not([data-tabbing=true]) .SearchResult{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchResult{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SearchResult{font-size:13px}}.SearchResult .search-value{background:var(--yellow-1);word-break:break-all}.SearchResult.modular-ui.selected,.SearchResult.modular-ui:hover{border:1px solid var(--focus-border)}.SearchResult.modular-ui.selected{background-color:var(--faded-component-background);box-shadow:none}.SearchResult.modular-ui.focus-visible,.SearchResult.modular-ui:focus-visible{outline:var(--focus-visible-outline)}.SearchResult.modular-ui .search-value{font-weight:700;color:var(--blue-5);background:none}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1818: function (e, t, n) {
      var a = n(35),
        r = n(1819);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const a = [];
                return (
                  n.querySelectorAll(t).forEach((e) => a.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && a.push(...e(t, n.shadowRoot));
                  }),
                  a
                );
              })("apryse-webviewer")));
          const n = [];
          for (let a = 0; a < t.length; a++) {
            const r = t[a];
            if (0 === a)
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
      a(r, o);
      e.exports = r.locals || {};
    },
    1819: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".CustomElement{padding:0 8px}.CustomElement span:first-of-type{margin:4px 4px 4px 0}",
        "",
      ]);
    },
    1820: function (e, t, n) {
      var a = n(35),
        r = n(1821);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const a = [];
                return (
                  n.querySelectorAll(t).forEach((e) => a.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && a.push(...e(t, n.shadowRoot));
                  }),
                  a
                );
              })("apryse-webviewer")));
          const n = [];
          for (let a = 0; a < t.length; a++) {
            const r = t[a];
            if (0 === a)
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
      a(r, o);
      e.exports = r.locals || {};
    },
    1821: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SearchOverlay.modular-ui .replace-buttons .btn-replace:hover:not(:disabled){background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.SearchOverlay.modular-ui .replace-buttons .btn-replace-all:hover:not(:disabled){border:none;background:none;color:var(--blue-6)}.SearchOverlay.modular-ui .replace-buttons .btn-replace-all:hover:not(:disabled) .Icon{color:var(--blue-6)}.SearchOverlay.modular-ui .footer .buttons .button:hover,.SearchOverlay.modular-ui .input-container .clearSearch-button:hover{cursor:pointer;border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}.SearchOverlay{position:static;display:flex;flex-direction:column;padding-inline-end:8px;flex-wrap:nowrap;border:0;border-radius:0;background:transparent;visibility:visible!important;flex-grow:0}.SearchOverlay .search-input-row{display:flex;align-items:center;grid-gap:8px;gap:8px}.SearchOverlay .search-options-button{height:32px;width:32px}.SearchOverlay .search-options-button .Icon,.SearchOverlay .search-options-button .Icon svg{width:24px;height:24px}.SearchOverlay .search-options-button .Icon svg .dot{fill:var(--blue-5)}.SearchOverlay .search-options-button .Icon svg .filter{fill:var(--gray-6)}.SearchOverlay .replace-icon{margin:0 8px 0 0}.SearchOverlay .replace-icon .Icon svg{fill:var(--gray-6);color:var(--gray-6)}.SearchOverlay .input-container{position:relative;box-sizing:border-box;border:1px solid var(--border);border-radius:4px;height:32px;display:flex;align-items:center;justify-content:flex-end;color:var(--text-color);padding:4px 8px;background:var(--component-background);flex:1}.SearchOverlay .input-container.with-replace-icon{justify-content:flex-start}.SearchOverlay .input-container input{width:100%;padding-inline-end:26px;height:24px;border:none;background:transparent;padding:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchOverlay .input-container input{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SearchOverlay .input-container input{font-size:13px}}.SearchOverlay .input-container.with-replace-icon input{padding-inline-end:0}.SearchOverlay .input-container input::-moz-placeholder{color:var(--placeholder-text)}.SearchOverlay .input-container input::placeholder{color:var(--placeholder-text)}.SearchOverlay .input-container .Icon{width:16px;height:16px}.SearchOverlay .input-container .clearSearch-button{padding:0;border:none;background-color:transparent;cursor:pointer;border-radius:4px;display:flex;align-items:center;justify-content:center;position:absolute;width:24px;height:24px}:host(:not([data-tabbing=true])) .SearchOverlay .input-container .clearSearch-button,html:not([data-tabbing=true]) .SearchOverlay .input-container .clearSearch-button{outline:none}.SearchOverlay .input-container .clearSearch-button svg{color:var(--gray-7)}.SearchOverlay .input-container .clearSearch-button:hover{background:var(--blue-1)}.SearchOverlay .search-option-buttons{display:flex;align-items:center;grid-gap:8px;gap:8px}.SearchOverlay .divider{height:1px;width:100%;background:var(--divider);margin:16px 0}.SearchOverlay .options{display:flex;flex-wrap:wrap;margin-top:8px}.SearchOverlay .options>span{margin-inline-end:16px}.SearchOverlay .options>span>label{white-space:nowrap}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchOverlay .options>span>label{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SearchOverlay .options>span>label{font-size:13px}}.SearchOverlay .replace-options{margin-top:8px}.SearchOverlay .replace-options .replace-buttons{display:flex;flex-direction:row;justify-content:flex-end;padding-top:10px}.SearchOverlay .replace-options .replace-buttons .spinner{margin:0;position:absolute;inset-inline-start:30px}.SearchOverlay .replace-options .replace-buttons .btn-replace{display:flex;justify-content:center;align-items:center;background-color:var(--blue-5);border:1px solid var(--blue-5);color:var(--gray-0);padding:6px 18px;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:32px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchOverlay .replace-options .replace-buttons .btn-replace{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SearchOverlay .replace-options .replace-buttons .btn-replace{font-size:13px}}.SearchOverlay .replace-options .replace-buttons .btn-replace-all{display:flex;justify-content:center;align-items:center;color:var(--blue-5);padding:6px 18px;width:auto;width:-moz-fit-content;width:fit-content;height:32px;cursor:pointer;margin-inline-end:5px}.SearchOverlay .replace-options .replace-buttons .btn-replace-all:hover:not(:disabled){color:var(--blue-6)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchOverlay .replace-options .replace-buttons .btn-replace-all{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SearchOverlay .replace-options .replace-buttons .btn-replace-all{font-size:13px}}.SearchOverlay .replace-options .replace-buttons button:disabled{opacity:.5;cursor:default}.SearchOverlay .footer{display:flex;align-items:center;justify-content:space-between;color:var(--faded-text);margin-bottom:16px}.SearchOverlay .footer .spinner{height:25px!important;width:25px!important;margin:0}.SearchOverlay .footer .buttons{display:flex;flex-direction:row;align-self:flex-end;justify-content:space-evenly;margin-inline-start:auto;width:64px;height:28px}.SearchOverlay .footer .buttons .button{padding:0;border:none;background-color:transparent;width:28px;height:28px;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer}:host(:not([data-tabbing=true])) .SearchOverlay .footer .buttons .button,html:not([data-tabbing=true]) .SearchOverlay .footer .buttons .button{outline:none}.SearchOverlay .footer .buttons .button svg{color:var(--gray-6)}.SearchOverlay .footer .buttons .button:hover{background-color:var(--blue-1)}.SearchOverlay .footer .buttons .arrow{width:18px;height:18px}.SearchOverlay.modular-ui .input-container[focus-within]{outline:none;border:1px solid var(--focus-border)}.SearchOverlay.modular-ui .input-container:focus-within{outline:none;border:1px solid var(--focus-border)}.SearchOverlay.modular-ui .input-container .search-panel-input{padding-inline-start:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchOverlay.modular-ui .input-container .search-panel-input{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SearchOverlay.modular-ui .input-container .search-panel-input{font-size:13px}}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1822: function (e, t, n) {
      var a = n(35),
        r = n(1823);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const a = [];
                return (
                  n.querySelectorAll(t).forEach((e) => a.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && a.push(...e(t, n.shadowRoot));
                  }),
                  a
                );
              })("apryse-webviewer")));
          const n = [];
          for (let a = 0; a < t.length; a++) {
            const r = t[a];
            if (0 === a)
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
      a(r, o);
      e.exports = r.locals || {};
    },
    1823: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.search-panel-container{z-index:65;flex-direction:column;background-color:var(--panel-background);display:flex;flex-direction:row;position:relative;overflow:hidden}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .search-panel-container{z-index:95}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .search-panel-container{z-index:95}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .search-panel-container{border-inline-start:1px solid var(--side-panel-border)}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .search-panel-container{border-inline-start:1px solid var(--side-panel-border)}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .search-panel-container{position:fixed;inset-block-start:0;inset-inline-end:0;height:100%;width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .search-panel-container{position:fixed;inset-block-start:0;inset-inline-end:0;height:100%;width:100%}}.SearchPanel{padding:16px 8px 0 16px;display:flex;flex-direction:column;height:100%}.SearchPanel .ListSeparator:first-child{margin-top:0}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.SearchPanel .ReactVirtualized__Grid__innerScrollContainer{max-width:1000px!important}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel{width:100%;min-width:100%;padding-top:0}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container{display:flex;align-items:center;justify-content:flex-end;height:28px;margin-bottom:8px;width:100%;padding-inline-end:12px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container .close-icon-container{padding:0;border:none;background-color:transparent;z-index:3;cursor:pointer}:host(:not([data-tabbing=true])) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container .close-icon-container,html:not([data-tabbing=true]) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container .close-icon-container{outline:none}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container .close-icon-container .close-icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel{width:100%;min-width:100%;padding-top:0}.App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container{display:flex;align-items:center;justify-content:flex-end;height:28px;margin-bottom:8px;width:100%;padding-inline-end:12px}.App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container .close-icon-container{padding:0;border:none;background-color:transparent;z-index:3;cursor:pointer}:host(:not([data-tabbing=true])) .App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container .close-icon-container,html:not([data-tabbing=true]) .App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container .close-icon-container{outline:none}.App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container .close-icon-container .close-icon{width:24px;height:24px}}.SearchPanel .results{overflow-y:auto;overflow-y:overlay;flex:1}.SearchPanel .results.wild-card-visible{margin-top:110px!important}.SearchPanel .results .ReactVirtualized__List{overflow:overlay!important;padding-inline-end:8px;width:auto!important}.SearchPanel .results .ReactVirtualized__List:focus{outline:none}.SearchPanel .results .ReactVirtualized__List .ReactVirtualized__Grid__innerScrollContainer{max-width:unset!important}.SearchPanel .loader-wrapper{display:flex;padding:10px;justify-content:center}.SearchPanel .info{padding:15px 0}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1872: function (e, t, n) {
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
        n(13));
      var a = n(0),
        r = n.n(a),
        o = n(6),
        i = n(1),
        l = n(3),
        c = n(4),
        s = n(61),
        u = n(2),
        p = n.n(u),
        d = n(305),
        h = (n(76), n(26), n(59), n(38), n(206)),
        m = (n(1800), n(1802)),
        f = n.n(m),
        b = n(1814),
        v = n.n(b),
        y = n(1637),
        g = n(15),
        w = n.n(g),
        x = ["measureRef", "contentRect"];
      function S() {
        return (S = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      function O(e, t) {
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
              var a,
                r,
                o,
                i,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (a = o.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
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
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var E = {
        currentResultIndex: p.a.number.isRequired,
        searchResults: p.a.arrayOf(p.a.object).isRequired,
        t: p.a.func.isRequired,
        pageLabels: p.a.arrayOf(p.a.any).isRequired,
        isProcessingSearchResults: p.a.bool,
      };
      function A(e) {
        var t = e.currentResultIndex,
          n = e.searchResults,
          a = e.t,
          o = e.pageLabels,
          i = 0 === t ? t : t - 1,
          l = n[t],
          c = n[i],
          s = c === l,
          u = c.pageNum !== l.pageNum;
        if (s || u) {
          var p = ""
            .concat(a("option.shared.page"), " ")
            .concat(o[l.pageNum - 1]);
          return r.a.createElement(
            "div",
            { role: "cell" },
            r.a.createElement(y.a, null, p),
          );
        }
        return null;
      }
      A.propTypes = E;
      var C = {
        result: p.a.object.isRequired,
        currentResultIndex: p.a.number.isRequired,
        activeResultIndex: p.a.number.isRequired,
        onSearchResultClick: p.a.func,
        activeDocumentViewerKey: p.a.number,
      };
      function k(e) {
        var t = O(
            Object(o.e)(function (e) {
              return [e.featureFlags.customizableUI];
            }),
            1,
          )[0],
          n = e.result,
          a = e.currentResultIndex,
          i = e.activeResultIndex,
          l = e.onSearchResultClick,
          c = e.activeDocumentViewerKey,
          s = n.ambientStr,
          u = n.resultStrStart,
          p = n.resultStrEnd,
          d = n.resultStr,
          h = s.slice(0, u),
          m = "" === s ? d : s.slice(u, p),
          f = s.slice(p);
        return r.a.createElement(
          "button",
          {
            role: "cell",
            className: w()({
              SearchResult: !0,
              selected: a === i,
              "modular-ui": t,
            }),
            onClick: function () {
              l && l(a, n, c);
            },
            "aria-current": a === i,
          },
          h,
          r.a.createElement("span", { className: "search-value" }, m),
          f,
        );
      }
      k.propTypes = C;
      var j = {
        width: p.a.number,
        height: p.a.number,
        activeResultIndex: p.a.number,
        searchStatus: p.a.oneOf([
          "SEARCH_NOT_INITIATED",
          "SEARCH_IN_PROGRESS",
          "SEARCH_DONE",
        ]),
        searchResults: p.a.arrayOf(p.a.object),
        t: p.a.func.isRequired,
        onClickResult: p.a.func,
        pageLabels: p.a.arrayOf(p.a.any),
        activeDocumentViewerKey: p.a.number,
      };
      function P(e) {
        var t = e.height,
          n = e.searchStatus,
          a = e.searchResults,
          o = e.activeResultIndex,
          i = e.t,
          l = e.onClickResult,
          c = e.pageLabels,
          s = e.isProcessingSearchResults,
          u = e.isSearchInProgress,
          p = e.activeDocumentViewerKey,
          d = r.a.useMemo(function () {
            return new b.CellMeasurerCache({
              defaultHeight: 50,
              fixedWidth: !0,
            });
          }, []),
          h = r.a.useRef(null),
          m = O(r.a.useState(0), 2),
          y = m[0],
          g = m[1];
        (0 === a.length && d.clearAll(),
          a.length && a.length !== y && (g(a.length), d.clearAll()));
        var w = r.a.useCallback(
          function (e) {
            var t = e.index,
              n = e.key,
              s = e.parent,
              u = e.style,
              h = a[t];
            return r.a.createElement(
              v.a,
              { cache: d, columnIndex: 0, key: n, parent: s, rowIndex: t },
              function (e) {
                var n = e.registerChild;
                return r.a.createElement(
                  "div",
                  { role: "row", ref: n, style: u },
                  r.a.createElement(A, {
                    currentResultIndex: t,
                    searchResults: a,
                    pageLabels: c,
                    t: i,
                  }),
                  r.a.createElement(k, {
                    result: h,
                    currentResultIndex: t,
                    activeResultIndex: o,
                    onSearchResultClick: l,
                    activeDocumentViewerKey: p,
                  }),
                );
              },
            );
          },
          [d, a, o, i, c],
        );
        return (
          r.a.useEffect(
            function () {
              var e;
              h &&
                (null === (e = h.current) || void 0 === e || e.scrollToRow(o));
            },
            [o],
          ),
          null == t
            ? null
            : "SEARCH_DONE" !== n || 0 !== a.length || s
              ? r.a.createElement(f.a, {
                  width: 200,
                  height: t,
                  tabIndex: -1,
                  overscanRowCount: 10,
                  rowCount: a.length,
                  deferredMeasurementCache: d,
                  rowHeight: d.rowHeight,
                  rowRenderer: w,
                  ref: h,
                  scrollToIndex: o - 1,
                })
              : u
                ? null
                : r.a.createElement(
                    "div",
                    { className: "info" },
                    r.a.createElement(
                      "p",
                      { className: "no-margin" },
                      i("message.noResults"),
                    ),
                  )
        );
      }
      function I(e) {
        var t = e.measureRef,
          n = e.contentRect,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var a in e)
                  if ({}.hasOwnProperty.call(e, a)) {
                    if (-1 !== t.indexOf(a)) continue;
                    n[a] = e[a];
                  }
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (a = 0; a < o.length; a++)
                ((n = o[a]),
                  -1 === t.indexOf(n) &&
                    {}.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]));
            }
            return r;
          })(e, x),
          o = n.bounds.height;
        return r.a.createElement(
          "div",
          { className: "results", ref: t },
          r.a.createElement(P, S({ height: o }, a)),
        );
      }
      ((P.propTypes = j),
        (I.propTypes = {
          contentRect: p.a.object,
          measureRef: p.a.oneOfType([
            p.a.func,
            p.a.shape({ current: p.a.any }),
          ]),
        }));
      var _ = Object(h.b)("bounds")(I),
        N = function (e) {
          return r.a.createElement(_, e);
        },
        T = (n(40), n(42), n(43), n(56), n(468), n(94), n(1817)),
        D = n.n(T),
        W = n(127),
        H = n.n(W),
        V = n(5),
        L = n(51),
        z = n(41),
        q = n(96),
        M = n(471),
        F = n(235),
        G =
          (n(1818),
          function (e) {
            var t = e.isPanelOpen,
              n = e.isCaseSensitive,
              i = e.isWholeWord,
              s = e.isWildcard,
              u = e.onCaseSensitiveSearchOptionChange,
              p = e.wholeWordSearchOptionOnChange,
              h = e.wildcardOptionOnChange,
              m = Object(d.a)().t,
              f = Object(o.d)(),
              b = V.a.SEARCH_OPTIONS_FLYOUT,
              v = Object(o.e)(function (e) {
                return c.a.getFlyout(e, b);
              });
            return (
              Object(a.useLayoutEffect)(
                function () {
                  var e = {
                    dataElement: b,
                    className: "SearchOptionsFlyout",
                    items: [
                      {
                        type: "customElement",
                        render: function () {
                          return r.a.createElement(F.a, {
                            dataElement: V.a.CASE_SENSITIVE_SEARCH_OPTION,
                            id: "case-sensitive-option",
                            checked: n,
                            onChange: u,
                            label: m("option.searchPanel.caseSensitive"),
                            tabIndex: t ? 0 : -1,
                          });
                        },
                      },
                      {
                        type: "customElement",
                        render: function () {
                          return r.a.createElement(F.a, {
                            dataElement: V.a.WHOLE_WORD_SEARCH_OPTION,
                            id: "whole-word-option",
                            checked: i,
                            onChange: p,
                            label: m("option.searchPanel.wholeWordOnly"),
                            tabIndex: t ? 0 : -1,
                          });
                        },
                      },
                      {
                        type: "customElement",
                        render: function () {
                          return r.a.createElement(F.a, {
                            dataElement: V.a.WILD_CARD_SEARCH_OPTION,
                            id: "wildcard-option",
                            checked: s,
                            onChange: h,
                            label: m("option.searchPanel.wildcard"),
                            tabIndex: t ? 0 : -1,
                          });
                        },
                      },
                    ],
                  };
                  f(v ? l.a.updateFlyout(e.dataElement, e) : l.a.addFlyout(e));
                },
                [n, i, s, t, u, p, h],
              ),
              null
            );
          });
      G.propTypes = {
        isCaseSensitive: p.a.bool.isRequired,
        isWholeWord: p.a.bool.isRequired,
        isWildcard: p.a.bool.isRequired,
        isPanelOpen: p.a.bool,
        onCaseSensitiveSearchOptionChange: p.a.func.isRequired,
        wholeWordSearchOptionOnChange: p.a.func.isRequired,
        wildcardOptionOnChange: p.a.func.isRequired,
      };
      var K = G,
        U = n(23),
        B = n(65);
      (n(1820), n(316));
      function $() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function o(n, a, r, o) {
          var c = a && a.prototype instanceof l ? a : l,
            s = Object.create(c.prototype);
          return (
            Y(
              s,
              "_invoke",
              (function (n, a, r) {
                var o,
                  l,
                  c,
                  s = 0,
                  u = r || [],
                  p = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: h,
                    f: h.bind(e, 4),
                    d: function (t, n) {
                      return ((o = t), (l = 0), (c = e), (d.n = n), i);
                    },
                  };
                function h(n, a) {
                  for (
                    l = n, c = a, t = 0;
                    !p && s && !r && t < u.length;
                    t++
                  ) {
                    var r,
                      o = u[t],
                      h = d.p,
                      m = o[2];
                    n > 3
                      ? (r = m === a) &&
                        ((c = o[(l = o[4]) ? 5 : ((l = 3), 3)]),
                        (o[4] = o[5] = e))
                      : o[0] <= h &&
                        ((r = n < 2 && h < o[1])
                          ? ((l = 0), (d.v = a), (d.n = o[1]))
                          : h < m &&
                            (r = n < 3 || o[0] > a || a > m) &&
                            ((o[4] = n), (o[5] = a), (d.n = m), (l = 0)));
                  }
                  if (r || n > 1) return i;
                  throw ((p = !0), a);
                }
                return function (r, u, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === u && h(u, m), l = u, c = m;
                    (t = l < 2 ? e : c) || !p;

                  ) {
                    o ||
                      (l
                        ? l < 3
                          ? (l > 1 && (d.n = -1), h(l, c))
                          : (d.n = c)
                        : (d.v = c));
                    try {
                      if (((s = 2), o)) {
                        if ((l || (r = "next"), (t = o[r]))) {
                          if (!(t = t.call(o, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = o.return) && t.call(o),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        o = e;
                      } else if ((t = (p = d.n < 0) ? c : n.call(a, d)) !== i)
                        break;
                    } catch (t) {
                      ((o = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: p };
                };
              })(n, r, o),
              !0,
            ),
            s
          );
        }
        var i = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var u = [][a]
            ? t(t([][a]()))
            : (Y((t = {}), a, function () {
                return this;
              }),
              t),
          p = (s.prototype = l.prototype = Object.create(u));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), Y(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(p)),
            e
          );
        }
        return (
          (c.prototype = s),
          Y(p, "constructor", s),
          Y(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          Y(s, r, "GeneratorFunction"),
          Y(p),
          Y(p, r, "Generator"),
          Y(p, a, function () {
            return this;
          }),
          Y(p, "toString", function () {
            return "[object Generator]";
          }),
          ($ = function () {
            return { w: o, m: d };
          })()
        );
      }
      function Y(e, t, n, a) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (Y = function (e, t, n, a) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !a,
                  configurable: !a,
                  writable: !a,
                })
              : (e[t] = n);
          else {
            var o = function (t, n) {
              Y(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (o("next", 0), o("throw", 1), o("return", 2));
          }
        })(e, t, n, a);
      }
      function J(e, t, n, a, r, o, i) {
        try {
          var l = e[o](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(a, r);
      }
      function Q(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, r) {
            var o = e.apply(t, n);
            function i(e) {
              J(o, a, r, i, l, "next", e);
            }
            function l(e) {
              J(o, a, r, i, l, "throw", e);
            }
            i(void 0);
          });
        };
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
              var a,
                r,
                o,
                i,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (a = o.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Z(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Z(e, t)
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
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var ee = {
        isPanelOpen: p.a.bool,
        isSearchOverlayDisabled: p.a.bool,
        searchValue: p.a.string,
        searchStatus: p.a.oneOf([
          "SEARCH_NOT_INITIATED",
          "SEARCH_IN_PROGRESS",
          "SEARCH_DONE",
        ]),
        isCaseSensitive: p.a.bool,
        isWholeWord: p.a.bool,
        isWildcard: p.a.bool,
        searchResults: p.a.arrayOf(p.a.object),
        activeResultIndex: p.a.number,
        setSearchValue: p.a.func.isRequired,
        setCaseSensitive: p.a.func.isRequired,
        setSearchStatus: p.a.func.isRequired,
        setWholeWord: p.a.func.isRequired,
        setWildcard: p.a.func.isRequired,
        executeSearch: p.a.func.isRequired,
        selectNextResult: p.a.func,
        selectPreviousResult: p.a.func,
        isProcessingSearchResults: p.a.bool,
        activeDocumentViewerKey: p.a.number,
      };
      function te(e) {
        var t = Object(d.a)().t,
          n = e.isSearchOverlayDisabled,
          s = e.searchResults,
          u = e.activeResultIndex,
          p = e.selectNextResult,
          h = e.selectPreviousResult,
          m = e.isProcessingSearchResults,
          f = e.activeDocumentViewerKey,
          b = e.searchValue,
          v = e.setSearchValue,
          y = e.executeSearch,
          g = e.replaceValue,
          x = e.nextResultValue,
          S = e.setReplaceValue,
          O = e.isCaseSensitive,
          R = e.setCaseSensitive,
          E = e.isWholeWord,
          A = e.setWholeWord,
          C = e.isWildcard,
          k = e.setWildcard,
          j = e.setSearchStatus,
          P = e.isSearchInProgress,
          I = e.setIsSearchInProgress,
          _ = e.searchStatus,
          N = e.isPanelOpen,
          T = X(Object(a.useState)(!0), 2),
          W = T[0],
          F = T[1],
          G = X(Object(a.useState)(!0), 2),
          Y = G[0],
          J = G[1],
          Z = X(Object(a.useState)(!1), 2),
          ee = Z[0],
          te = Z[1],
          ne = X(Object(a.useState)(!0), 2),
          ae = ne[0],
          re = ne[1],
          oe = X(Object(a.useState)(!1), 2),
          ie = oe[0],
          le = oe[1],
          ce = X(Object(a.useState)(!1), 2),
          se = ce[0],
          ue = ce[1],
          pe = Object(o.e)(function (e) {
            return c.a.isElementDisabled(e, "searchAndReplace");
          }),
          de = Object(o.e)(function (e) {
            var t;
            return null === (t = c.a.getFeatureFlags(e)) || void 0 === t
              ? void 0
              : t.customizableUI;
          }),
          he = Object(a.useRef)();
        (Object(a.useEffect)(function () {
          try {
            new RegExp("(?<!</?[^>]*|&[^;]*)");
          } catch (e) {
            re(!1);
          }
        }, []),
          Object(a.useEffect)(
            function () {
              Ce > 0 && j("SEARCH_DONE");
            },
            [s],
          ),
          Object(a.useEffect)(
            function () {
              (he.current &&
                N &&
                setTimeout(function () {
                  (he.current.focus(), le(!0));
                }, 300),
                pe ||
                  ae ||
                  !N ||
                  console.warn(
                    "Search and Replace is not supported in this browser",
                  ));
            },
            [N, O],
          ),
          Object(a.useEffect)(
            function () {
              b && b.length > 0
                ? ie && y(b, { caseSensitive: O, wholeWord: E, wildcard: C })
                : ye();
            },
            [O, E, C, f],
          ),
          Object(a.useEffect)(function () {
            return (
              i.a.addEventListener("pagesUpdated", me),
              function () {
                i.a.removeEventListener("pagesUpdated", me);
              }
            );
          }));
        var me = function (e) {
            e.linearizedUpdate || fe(b);
          },
          fe = (function () {
            var e = Q(
              $().m(function e(t) {
                return $().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if (!(t && t.length > 0)) {
                          e.n = 2;
                          break;
                        }
                        if ((I(!0), j("SEARCH_IN_PROGRESS"), !Object(B.q)())) {
                          e.n = 1;
                          break;
                        }
                        return (
                          (e.n = 1),
                          i.a.getDocument().getOfficeEditor().updateSearchData()
                        );
                      case 1:
                        (y(t, { caseSensitive: O, wholeWord: E, wildcard: C }),
                          (e.n = 3));
                        break;
                      case 2:
                        ye();
                      case 3:
                        return e.a(2);
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          be = Object(a.useCallback)(D()(fe, 300), [O, E, C]),
          ve = Object(a.useCallback)(H()(fe, 300), [O, E, C]);
        Object(a.useEffect)(
          function () {
            var e,
              t = function () {
                b && b.length > 0 && ve(b);
              };
            return (
              null === (e = i.a.getDocument()) ||
                void 0 === e ||
                e.addEventListener("officeDocumentEdited", t),
              function () {
                var e;
                null === (e = i.a.getDocument()) ||
                  void 0 === e ||
                  e.removeEventListener("officeDocumentEdited", t);
              }
            );
          },
          [b],
        );
        function ye() {
          (i.a.clearSearchResults(),
            v(""),
            j("SEARCH_NOT_INITIATED"),
            S(""),
            F(!0),
            J(!0));
        }
        var ge = Object(a.useCallback)(function (e) {
            var t = e.target.checked;
            R(t);
          }, []),
          we = Object(a.useCallback)(function (e) {
            var t = e.target.checked;
            A(t);
          }, []),
          xe = Object(a.useCallback)(function (e) {
            var t = e.target.checked;
            k(t);
          }, []),
          Se = Object(a.useCallback)(
            function () {
              p && p(s, u);
            },
            [p, s, u],
          ),
          Oe = Object(a.useCallback)(
            function () {
              h && h(s, u);
            },
            [h, s, u],
          ),
          Re = Object(a.useCallback)(
            (function () {
              var e = Q(
                $().m(function e() {
                  return $().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (!Y || !x) {
                            e.n = 1;
                            break;
                          }
                          return e.a(2);
                        case 1:
                          return (
                            te(!0),
                            (e.n = 2),
                            Object(
                              U.c,
                            )().instance.Core.ContentEdit.searchAndReplaceText({
                              documentViewer: Object(U.c)().instance.Core
                                .documentViewer,
                              searchResults: i.a.getPageSearchResults(),
                              replaceWith: g,
                            })
                          );
                        case 2:
                          te(!1);
                        case 3:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            [g],
          ),
          Ee = Object(a.useCallback)(
            (function () {
              var e = Q(
                $().m(function e() {
                  return $().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (!W || !x) {
                            e.n = 1;
                            break;
                          }
                          return e.a(2);
                        case 1:
                          return (
                            te(!0),
                            (e.n = 2),
                            Object(
                              U.c,
                            )().instance.Core.ContentEdit.searchAndReplaceText({
                              documentViewer: Object(U.c)().instance.Core
                                .documentViewer,
                              replaceWith: g,
                              searchResults: [i.a.getActiveSearchResult()],
                            })
                          );
                        case 2:
                          te(!1);
                        case 3:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            [g, x, W],
          ),
          Ae = Object(o.d)();
        if (n) return null;
        var Ce = s ? s.length : 0,
          ke = "SEARCH_DONE" === _ && !m,
          je = !ke || P ? r.a.createElement(M.a, null) : null,
          Pe = !pe && ae,
          Ie = Pe && se,
          _e = O || E || C;
        return r.a.createElement(
          "div",
          { className: w()({ SearchOverlay: !0, "modular-ui": de }) },
          r.a.createElement(
            "div",
            { className: "search-input-row" },
            r.a.createElement(
              "div",
              { className: "input-container" },
              de && r.a.createElement(L.a, { glyph: "icon-header-search" }),
              r.a.createElement("input", {
                className: "search-panel-input",
                ref: he,
                type: "text",
                autoComplete: "off",
                onChange: function (e) {
                  (v(e.target.value),
                    be(e.target.value),
                    e.target.value && g && (F(!1), J(!1)));
                },
                value: b,
                placeholder: de ? "" : t("message.searchDocumentPlaceholder"),
                "aria-label": t("message.searchDocumentPlaceholder"),
                id: "SearchPanel__input",
                tabIndex: N ? 0 : -1,
              }),
              void 0 !== b &&
                b.length > 0 &&
                r.a.createElement(z.a, {
                  className: "clearSearch-button",
                  img: "icon-close",
                  onClick: ye,
                  title: t("message.clearSearchResults"),
                  ariaLabel: t("message.clearSearchResults"),
                  onClickAnnouncement: t("message.searchResultsCleared"),
                }),
            ),
            r.a.createElement(
              "div",
              { className: "search-option-buttons" },
              r.a.createElement(q.a, {
                dataElement: "searchOptionsButton",
                title: t("message.toggleSearchOptions"),
                ariaLabel: t("message.toggleSearchOptions"),
                tabIndex: N ? 0 : -1,
                img: _e ? "ic-filter-with-dot" : "ic-filter-alt",
                className: "search-options-button",
                toggleElement: V.a.SEARCH_OPTIONS_FLYOUT,
              }),
              Pe
                ? r.a.createElement(z.a, {
                    onClick: function () {
                      ue(!se);
                    },
                    title: t("message.toggleReplaceInput"),
                    ariaLabel: t("message.toggleReplaceInput"),
                    tabIndex: N ? 0 : -1,
                    img: "ic_replace",
                    className: "search-options-button",
                    isActive: se,
                  })
                : null,
            ),
          ),
          Ie &&
            r.a.createElement(
              "div",
              {
                "data-element": "searchAndReplace",
                className: "replace-options",
              },
              r.a.createElement(
                "div",
                { className: "input-container with-replace-icon" },
                r.a.createElement(L.a, {
                  disabled: !1,
                  glyph: "ic_replace",
                  className: "replace-icon",
                }),
                r.a.createElement("input", {
                  type: "text",
                  "aria-label": t("option.searchPanel.replace"),
                  onChange: function (e) {
                    (S(e.target.value), e.target.value && b && (F(!1), J(!1)));
                  },
                  value: g,
                }),
              ),
              r.a.createElement(
                "div",
                { className: "replace-buttons" },
                ee ? r.a.createElement(M.a, { width: 25, height: 25 }) : null,
                r.a.createElement(
                  "button",
                  {
                    className: "Button btn-replace-all",
                    disabled: Y,
                    "aria-label": t("option.searchPanel.replaceAll"),
                    onClick: function () {
                      var e = t("option.searchPanel.replaceText"),
                        n = {
                          message: t(
                            "option.searchPanel.confirmMessageReplaceAll",
                          ),
                          title: e,
                          confirmBtnText: t("option.searchPanel.confirm"),
                          onConfirm: function () {
                            Re();
                          },
                        };
                      Ae(l.a.showWarningMessage(n));
                    },
                  },
                  t("option.searchPanel.replaceAll"),
                ),
                r.a.createElement(
                  "button",
                  {
                    className: "Button btn-replace",
                    disabled: W || !x || !i.a.getActiveSearchResult(),
                    "aria-label": t("option.searchPanel.replace"),
                    onClick: function () {
                      var e = t("option.searchPanel.replaceText"),
                        n = {
                          message: t(
                            "option.searchPanel.confirmMessageReplaceOne",
                          ),
                          title: e,
                          confirmBtnText: t("option.searchPanel.confirm"),
                          onConfirm: function () {
                            Ee();
                          },
                        };
                      Ae(l.a.showWarningMessage(n));
                    },
                  },
                  t("option.searchPanel.replace"),
                ),
              ),
            ),
          r.a.createElement(K, {
            isCaseSensitive: O,
            isWholeWord: E,
            isWildcard: C,
            isPanelOpen: N,
            onCaseSensitiveSearchOptionChange: ge,
            wholeWordSearchOptionOnChange: we,
            wildcardOptionOnChange: xe,
          }),
          r.a.createElement("div", { className: "divider" }),
          r.a.createElement(
            "div",
            { className: "footer" },
            "SEARCH_NOT_INITIATED" === _ ? null : je,
            r.a.createElement(
              "p",
              { className: "no-margin", "aria-live": "assertive" },
              ke && !P
                ? "".concat(Ce, " ").concat(t("message.numResultsFound"))
                : void 0,
            ),
            Ce > 0 &&
              r.a.createElement(
                "div",
                { className: "buttons" },
                r.a.createElement(
                  "button",
                  {
                    className: "button",
                    onClick: Oe,
                    "aria-label": t("action.prevResult"),
                  },
                  r.a.createElement(L.a, {
                    className: "arrow",
                    glyph: "icon-chevron-left",
                  }),
                ),
                r.a.createElement(
                  "button",
                  {
                    className: "button",
                    onClick: Se,
                    "aria-label": t("action.nextResult"),
                  },
                  r.a.createElement(L.a, {
                    className: "arrow",
                    glyph: "icon-chevron-right",
                  }),
                ),
              ),
          ),
        );
      }
      te.propTypes = ee;
      var ne = te,
        ae = n(165),
        re = n(480);
      function oe(e) {
        return (oe =
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
      function ie() {
        return (ie = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          (t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a));
        }
        return n;
      }
      function ce(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != oe(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var a = n.call(e, t || "default");
                if ("object" != oe(a)) return a;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == oe(t) ? t : t + "";
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
      function se(e, t, n) {
        var a = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? le(Object(n), !0).forEach(function (t) {
                  ce(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : le(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        })({ regex: !1 }, t);
        if (null != e) {
          var r = Object(ae.b)();
          if (r) r(e, a);
          else Object(re.a)(n)(e, a, !1);
        }
      }
      function ue() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (e.length > 0) {
          var a = t === e.length - 1 ? 0 : t + 1;
          if ((i.a.setActiveSearchResult(e[a]), n)) {
            var r = a > 0 ? a - 1 : 0;
            n(l.a.setNextResultValue(e[a], r));
          }
        }
      }
      function pe() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (e.length > 0) {
          var a = t <= 0 ? e.length - 1 : t - 1;
          (i.a.setActiveSearchResult(e[a]),
            n && n(l.a.setNextResultValue(e[a])));
        }
      }
      var de = function (e) {
          var t = Object(o.d)(),
            n = Object(o.f)();
          return r.a.createElement(
            ne,
            ie(
              {
                executeSearch: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  se(e, t, n);
                },
                selectNextResult: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  ue(e, n, t);
                },
                selectPreviousResult: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  pe(e, n, t);
                },
              },
              e,
            ),
          );
        },
        he = {
          closeElements: l.a.closeElements,
          setSearchValue: l.a.setSearchValue,
          setReplaceValue: l.a.setReplaceValue,
          setCaseSensitive: l.a.setCaseSensitive,
          setWholeWord: l.a.setWholeWord,
          setWildcard: l.a.setWildcard,
        };
      var me = Object(o.b)(function (e) {
          return {
            isSearchOverlayDisabled: c.a.isElementDisabled(
              e,
              V.a.SEARCH_OVERLAY,
            ),
            searchValue: c.a.getSearchValue(e),
            replaceValue: c.a.getReplaceValue(e),
            nextResultValue: c.a.getNextResultValue(e),
            isCaseSensitive: c.a.isCaseSensitive(e),
            isWholeWord: c.a.isWholeWord(e),
            isWildcard: c.a.isWildcard(e),
            isProcessingSearchResults: c.a.isProcessingSearchResults(e),
          };
        }, he)(function (e) {
          return r.a.createElement(de, e);
        }),
        fe = function (e) {
          return r.a.createElement(me, e);
        },
        be = n(1610),
        ve = n(60),
        ye = n(484);
      (n(1822), n(125));
      function ge(e, t) {
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
              var a,
                r,
                o,
                i,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (a = o.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return we(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? we(e, t)
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
      function we(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var xe = function (e) {
        var t = ge(r.a.useState([]), 2),
          n = t[0],
          a = t[1],
          c = ge(r.a.useState(), 2),
          s = c[0],
          u = c[1],
          p = ge(r.a.useState(0), 2),
          d = p[0],
          h = p[1],
          m = ge(r.a.useState("SEARCH_NOT_INITIATED"), 2),
          f = m[0],
          b = m[1],
          v = Object(o.d)(),
          y = i.a.getDocumentViewers().length;
        return (
          r.a.useEffect(function () {
            var t = i.a.getDocumentViewer(e).getPageSearchResults() || [];
            if (t.length > 0) {
              var n = i.a.getActiveSearchResult();
              if (n) {
                var r = t.findIndex(function (e) {
                  return i.a.isSearchResultEqual(e, n);
                });
                (a(t), r >= 0 && (u(t[r]), h(r)));
              } else (a(t), u(t[0]), h(0));
            }
          }, []),
          r.a.useEffect(
            function () {
              var t = i.a.getDocumentViewer(e);
              function n(e) {
                var n = (t.getPageSearchResults() || []).findIndex(
                  function (t) {
                    return i.a.isSearchResultEqual(t, e);
                  },
                );
                n >= 0 && (u(e), h(n));
              }
              function r() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                (a(e), e && 0 === e.length && (u(void 0), h(-1)));
              }
              function o(e) {
                if (null == e) b("SEARCH_NOT_INITIATED");
                else if (e) b("SEARCH_IN_PROGRESS");
                else {
                  var n = t.getActiveSearchResult();
                  if (n) {
                    u(n);
                    var a = (t.getPageSearchResults() || []).findIndex(
                      function (e) {
                        return i.a.isSearchResultEqual(e, n);
                      },
                    );
                    (h(a), v(l.a.setNextResultValue(n)));
                  }
                  b("SEARCH_DONE");
                }
              }
              var c = i.a.getDocumentViewers();
              return (
                c.forEach(function (e) {
                  (e.addEventListener("activeSearchResultChanged", n),
                    e.addEventListener("searchResultsChanged", r),
                    e.addEventListener("searchInProgress", o));
                }),
                function () {
                  c.forEach(function (e) {
                    (e.removeEventListener("activeSearchResultChanged", n),
                      e.removeEventListener("searchResultsChanged", r),
                      e.removeEventListener("searchInProgress", o));
                  });
                }
              );
            },
            [u, h, b, v, y, e],
          ),
          {
            searchStatus: f,
            searchResults: n,
            activeSearchResult: s,
            activeSearchResultIndex: d,
            setSearchStatus: b,
          }
        );
      };
      function Se(e, t) {
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
              var a,
                r,
                o,
                i,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (a = o.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Oe(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Oe(e, t)
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
      function Oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var Re = {
        isOpen: p.a.bool,
        isMobile: p.a.bool,
        pageLabels: p.a.array,
        currentWidth: p.a.number,
        closeSearchPanel: p.a.func,
        setActiveResult: p.a.func,
        isInDesktopOnlyMode: p.a.bool,
        isProcessingSearchResults: p.a.bool,
        activeDocumentViewerKey: p.a.number,
        isCustomPanel: p.a.bool,
      };
      function Ee() {}
      function Ae(e) {
        var t = e.isOpen,
          n = e.currentWidth,
          a = e.pageLabels,
          o = e.closeSearchPanel,
          i = void 0 === o ? Ee : o,
          l = e.setActiveResult,
          c = void 0 === l ? Ee : l,
          s = e.setNextResultValue,
          u = void 0 === s ? Ee : s,
          p = e.isMobile,
          h = void 0 !== p && p,
          m = e.isInDesktopOnlyMode,
          f = e.isProcessingSearchResults,
          b = e.activeDocumentViewerKey,
          v = e.dataElement,
          y = void 0 === v ? "searchPanel" : v,
          g = e.isCustomPanel,
          w = void 0 !== g && g,
          x = Object(d.a)().t,
          S = xe(b),
          O = S.searchStatus,
          R = S.searchResults,
          E = S.activeSearchResultIndex,
          A = S.setSearchStatus,
          C = r.a.useCallback(
            function () {
              i && i();
            },
            [i],
          ),
          k = r.a.useCallback(
            function (e, t, n) {
              (c(t, n), !m && h && i(), u(t));
            },
            [i, h],
          ),
          j = Se(r.a.useState(!1), 2),
          P = j[0],
          I = j[1],
          _ = function () {
            I(!1);
          },
          T = function (e) {
            if (Object(B.r)()) {
              var t = document.getElementById("editorWrapper");
              if (e) t.style.removeProperty("width");
              else {
                var a = "".concat(window.innerWidth - n, "px");
                t.style.width = a;
              }
              Object(ye.a)()
                .getSpreadsheetEditorDocument()
                .getEditor()
                .onSizeChanged();
            }
          };
        (r.a.useEffect(
          function () {
            T();
          },
          [n],
        ),
          r.a.useEffect(function () {
            (T(), Object(ae.a)(_));
          }, []),
          r.a.useEffect(function () {
            return function () {
              (T(!0), Object(ae.e)(_));
            };
          }, []));
        var D = Object(be.a)("Panel SearchPanel", { isOpen: t }),
          W = {};
        return (
          w ||
            (!m && h) ||
            (W = { width: "".concat(n, "px"), minWidth: "".concat(n, "px") }),
          r.a.createElement(
            ve.a,
            { className: D, dataElement: y, style: W },
            !m &&
              h &&
              r.a.createElement(
                "div",
                { className: "close-container" },
                r.a.createElement(
                  "button",
                  { className: "close-icon-container", onClick: C },
                  r.a.createElement(L.a, {
                    glyph: "ic_close_black_24px",
                    className: "close-icon",
                  }),
                ),
              ),
            r.a.createElement(fe, {
              searchStatus: O,
              setSearchStatus: A,
              searchResults: R,
              activeResultIndex: E,
              isPanelOpen: t,
              isSearchInProgress: P,
              setIsSearchInProgress: I,
              activeDocumentViewerKey: b,
            }),
            r.a.createElement(N, {
              t: x,
              searchStatus: O,
              searchResults: R,
              activeResultIndex: E,
              onClickResult: k,
              pageLabels: a,
              isProcessingSearchResults: f,
              isSearchInProgress: P,
              activeDocumentViewerKey: b,
            }),
          )
        );
      }
      Ae.propTypes = Re;
      var Ce = Ae,
        ke = n(32);
      function je(e) {
        return (je =
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
      function Pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          (t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a));
        }
        return n;
      }
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pe(Object(n), !0).forEach(function (t) {
                _e(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Pe(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function _e(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != je(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var a = n.call(e, t || "default");
                if ("object" != je(a)) return a;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == je(t) ? t : t + "";
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
      function Ne(e, t) {
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
              var a,
                r,
                o,
                i,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (a = o.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Te(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Te(e, t)
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
      function Te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var De = function (e) {
        var t = e.dataElement,
          n = void 0 === t ? V.a.SEARCH_PANEL : t,
          a = e.parentDataElement,
          u = void 0 === a ? void 0 : a,
          p = Object(s.b)(),
          d = Ne(
            Object(o.e)(function (e) {
              return [
                c.a.isElementOpen(e, n),
                c.a.getPageLabels(e),
                c.a.shouldClearSearchPanelOnClose(e),
                c.a.isInDesktopOnlyMode(e),
                c.a.isProcessingSearchResults(e),
                c.a.getActiveDocumentViewerKey(e),
              ];
            }, o.c),
            6,
          ),
          h = d[0],
          m = d[1],
          f = d[2],
          b = d[3],
          v = d[4],
          y = d[5],
          g = Object(o.e)(function (e) {
            return u || n !== V.a.SEARCH_PANEL
              ? c.a.getPanelWidth(e, u || n)
              : c.a.getSearchPanelWidth(e);
          }),
          w = Object(o.d)(),
          x = r.a.useCallback(
            function () {
              w(l.a.closeElements([n]));
            },
            [w],
          ),
          S = r.a.useCallback(
            function () {
              w(l.a.setSearchValue(""));
            },
            [w],
          ),
          O = r.a.useCallback(
            function (e) {
              w(l.a.setNextResultValue(e));
            },
            [w],
          ),
          R = r.a.useCallback(function (e, t) {
            if (t) return i.a.getDocumentViewer(t).setActiveSearchResult(e);
          }, []);
        (r.a.useEffect(
          function () {
            (!b && p) || (!h && f && (i.a.clearSearchResults(), S()));
          },
          [p, h, f, b],
        ),
          r.a.useEffect(
            function () {
              return function () {
                (!b && p) || (f && (i.a.clearSearchResults(), S()));
              };
            },
            [p, f, b],
          ),
          n !== V.a.SEARCH_PANEL && ((g -= 16), (g -= ke.b)));
        var E = Ie(
          Ie({}, e),
          {},
          {
            isOpen: h,
            currentWidth: g,
            pageLabels: m,
            closeSearchPanel: x,
            setActiveResult: R,
            setNextResultValue: O,
            isMobile: p,
            isInDesktopOnlyMode: b,
            isProcessingSearchResults: v,
            activeDocumentViewerKey: y,
          },
        );
        return r.a.createElement(Ce, E);
      };
      t.default = De;
    },
  },
]);
//# sourceMappingURL=chunk.36.js.map
