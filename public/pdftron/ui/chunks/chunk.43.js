(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    1992: function (e, n, t) {
      var o = t(35),
        a = t(1993);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(n).forEach((e) => o.push(e)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...e(n, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < n.length; o++) {
            const a = n[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (a.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      o(a, i);
      e.exports = a.locals || {};
    },
    1993: function (e, n, t) {
      (e.exports = t(36)(!1)).push([
        e.i,
        ".dimension-input-container{display:flex;align-items:center;border:1px solid var(--border);background:var(--component-background);color:var(--text-color);border-radius:4px;width:100%;max-width:80px;min-width:64px;height:28px;padding:1px 2px}.dimension-input-container input::-webkit-inner-spin-button,.dimension-input-container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.dimension-input-container input[type=number]{-moz-appearance:textfield}.dimension-input-container input,.dimension-input-container input:focus{border:0}.dimension-input{border:0;border-radius:0;padding:0;margin-inline-end:0;margin-inline-start:4px;min-width:1ch}.dimension-unit{color:var(--text-color);font-size:13px}",
        "",
      ]);
    },
    1994: function (e, n, t) {
      var o = t(35),
        a = t(1995);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(n).forEach((e) => o.push(e)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...e(n, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < n.length; o++) {
            const a = n[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (a.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      o(a, i);
      e.exports = a.locals || {};
    },
    1995: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.incrementNumberInput .increment-buttons .increment-arrow-button:hover{cursor:pointer;border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}.insert-blank-page-panel{width:100%}.insert-blank-page-panel .dimension-input-container{min-width:100%;margin:0;height:32px}.insert-blank-page-panel .dimension-input-container[focus-within]{border:1px solid var(--focus-border)}.insert-blank-page-panel .dimension-input-container:focus-within{border:1px solid var(--focus-border)}.insert-blank-page-panel .subheader{font-size:13px;font-weight:700;margin-bottom:8px}.insert-blank-page-panel .panel-container .section{display:flex;padding-bottom:16px;grid-gap:16px;gap:16px}.insert-blank-page-panel .panel-container .section.extra-space-section{height:98px}.insert-blank-page-panel .panel-container .section.page-dimensions-section,.insert-blank-page-panel .panel-container .section:last-of-type{padding-bottom:0}.insert-blank-page-panel .panel-container .section .input-container{display:flex;flex-direction:column}.insert-blank-page-panel .panel-container .section .input-container label{margin:0;padding-bottom:8px;font-size:13px}.insert-blank-page-panel .panel-container .section .input-container .page-number-input{width:100%;height:32px;margin:0}.insert-blank-page-panel .panel-container .section .input-container .customSelector{margin-inline-start:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section .input-container .customSelector ul{inset-block-start:auto;inset-block-end:calc(100% + 4px)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section .input-container .customSelector ul{inset-block-start:auto;inset-block-end:calc(100% + 4px)}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section .input-container .customSelector li:first-child{display:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section .input-container .customSelector li:first-child{display:none}}.insert-blank-page-panel .panel-container .section .input-container select{height:28px;width:100%}.insert-blank-page-panel .panel-container .section .input-container .Dropdown{height:32px;min-width:150px;width:100%!important}.insert-blank-page-panel .panel-container .section .input-container .Dropdown .arrow{flex:0 1 auto}.insert-blank-page-panel .panel-container .section .input-container .Dropdown .picked-option .picked-option-text{text-align:start}.insert-blank-page-panel .panel-container .section .input-container .Dropdown__items{inset-block-start:-52px;z-index:80;width:100%}.insert-blank-page-panel .panel-container .section .input-container .page-number-error{margin-top:8px;font-size:13px;color:var(--color-message-error)}.insert-blank-page-panel .panel-container .section .input-container .specify-pages-wrapper{display:flex;justify-content:space-between}.insert-blank-page-panel .panel-container .section .input-container .specify-pages-wrapper .input-sub-text{color:var(--faded-text)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section .ui__choice__label,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section input{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section .ui__choice__label,.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section button,.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section input{font-size:13px}}.insert-blank-page-panel .panel-container .section>*{flex:1;margin:8px 0}.incrementNumberInput{border:1px solid var(--border);border-radius:4px;display:flex;height:32px}.incrementNumberInput input[type=number]::-webkit-inner-spin-button,.incrementNumberInput input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.incrementNumberInput input[type=number]{-moz-appearance:textfield}.incrementNumberInput .ui__input{border:0;height:100%}.incrementNumberInput .ui__input .ui__input__input{width:100%;height:100%;padding:6px;line-height:normal}.incrementNumberInput .ui__input--message-default.ui__input--focused{outline:none;box-shadow:none}.incrementNumberInput .increment-buttons{display:flex;flex-direction:column;grid-gap:2px;gap:2px;justify-content:center;padding:2px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .incrementNumberInput .increment-buttons{display:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .incrementNumberInput .increment-buttons{display:none}}.incrementNumberInput .increment-buttons .increment-arrow-button{border:0;border-radius:2px;height:10px;width:20px;display:flex;justify-content:center;align-items:center;line-height:10px;padding:0;background:none;cursor:pointer}.incrementNumberInput .increment-buttons .increment-arrow-button .Icon{height:12px;width:12px}.incrementNumberInput .increment-buttons .increment-arrow-button:active{box-shadow:0 0 1px 0 var(--document-box-shadow)}.incrementNumberInput[focus-within]{border:1px solid var(--focus-border)}.incrementNumberInput:focus-within{border:1px solid var(--focus-border)}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1996: function (e, n, t) {
      var o = t(35),
        a = t(1997);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(n).forEach((e) => o.push(e)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...e(n, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < n.length; o++) {
            const a = n[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (a.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      o(a, i);
      e.exports = a.locals || {};
    },
    1997: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.insert-uploaded-page-panel .insert-page-footer .modal-btn.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.insert-uploaded-page-panel .insert-page-footer .modal-btn.disabled span{color:var(--primary-button-text)}.insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container.modular-ui .thumb-card:hover{cursor:pointer;border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}.insert-uploaded-page-panel{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .insert-uploaded-page-panel{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .insert-uploaded-page-panel{overflow:auto;max-height:100%}}.insert-uploaded-page-panel{box-sizing:border-box;display:flex;flex-direction:column;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);width:791px;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel{width:100%;height:100vh;inset-inline-start:0;inset-block-end:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel{width:100%;height:100vh;inset-inline-start:0;inset-block-end:0}}.insert-uploaded-page-panel .header{display:flex;justify-content:space-between;width:100%;font-size:16px;line-height:24px;color:var(--gray-9);font-weight:700;box-shadow:inset 0 -1px 0 var(--divider);padding:20px 16px}.insert-uploaded-page-panel .header .left-header{display:flex;align-items:center;grid-gap:4px;gap:4px}.insert-uploaded-page-panel .header .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.insert-uploaded-page-panel .insert-page-divider{border-top:1px solid var(--divider);margin:18px -16px 16px;width:inherit}.insert-uploaded-page-panel .insert-blank-page-controls{padding-bottom:32px;display:flex;grid-gap:48px;gap:48px;height:90px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-blank-page-controls{height:auto;flex-direction:column;grid-gap:20px;gap:20px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-blank-page-controls input,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-blank-page-controls label{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-blank-page-controls{height:auto;flex-direction:column;grid-gap:20px;gap:20px}.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-blank-page-controls input,.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-blank-page-controls label{font-size:13px}}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-titles{font-size:13px;font-weight:700;color:var(--text-color)}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location-options{display:flex;flex-direction:column}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location-options .insert-page-options{display:flex;flex-direction:row;align-items:baseline;grid-gap:20px;gap:20px;padding-top:11px}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location{display:flex;flex-direction:column}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location .insert-page-input{display:flex;padding-top:8px;grid-gap:8px;gap:8px;align-items:baseline;font-size:13px;font-weight:400;-webkit-font-smoothing:auto}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location .page-number-error{color:var(--color-message-error)}.insert-uploaded-page-panel .modal-body{height:unset;display:flex;flex-direction:column;box-shadow:inset 0 -1px 0 var(--divider);padding:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body{flex:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body{flex:1}}.insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container{height:409px;width:100%;padding:16px 0 16px 16px;border-radius:4px;overflow:auto;background-color:var(--gray-2);display:flex;flex-wrap:wrap;grid-gap:16px;gap:16px}.insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container.isLoading{display:flex;justify-content:center;align-items:center}.insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container.modular-ui .thumb-card{border:none;box-shadow:inset 0 0 0 1px var(--lighter-border)}.insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container.modular-ui .thumb-card:hover{background:var(--gray-1)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container{flex-direction:row;flex:1;grid-gap:16px;gap:16px;padding:16px;max-height:calc(100vh - 328px)}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-card{flex:0 0 calc(50% - 8px);box-sizing:border-box}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-card-img{height:110px;width:83px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-body{align-items:center}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-image{width:100%}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-checkbox{position:absolute;inset-block-start:2px;inset-inline-end:2px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container{flex-direction:row;flex:1;grid-gap:16px;gap:16px;padding:16px;max-height:calc(100vh - 328px)}.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-card{flex:0 0 calc(50% - 8px);box-sizing:border-box}.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-card-img{height:110px;width:83px}.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-body{align-items:center}.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-image{width:100%}.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-checkbox{position:absolute;inset-block-start:2px;inset-inline-end:2px}}.insert-uploaded-page-panel .insert-page-footer{display:flex;padding:16px;justify-content:flex-end}.insert-uploaded-page-panel .insert-page-footer.isFileSelected{justify-content:space-between}.insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails{border:none;background-color:transparent;color:var(--secondary-button-text);padding:8px 16px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer}:host(:not([data-tabbing=true])) .insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails,html:not([data-tabbing=true]) .insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails{outline:none}.insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails:hover{color:var(--secondary-button-hover)}.insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails.disabled{visibility:hidden}.insert-uploaded-page-panel .insert-page-footer .modal-btn{border:none;background-color:transparent;border-radius:4px;padding:8px 16px;height:32px;width:100px;display:flex;align-items:center;justify-content:center;position:relative;font-weight:400;cursor:pointer}:host(:not([data-tabbing=true])) .insert-uploaded-page-panel .insert-page-footer .modal-btn,html:not([data-tabbing=true]) .insert-uploaded-page-panel .insert-page-footer .modal-btn{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-page-footer .modal-btn{height:32px;width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-page-footer .modal-btn{height:32px;width:100px}}.insert-uploaded-page-panel .insert-page-footer .modal-btn:not(:disabled):not(.disabled){background:var(--primary-button);color:var(--primary-button-text)}.insert-uploaded-page-panel .insert-page-footer .modal-btn:not(:disabled):not(.disabled):hover{background:var(--primary-button-hover)}.insert-uploaded-page-panel .insert-page-footer .modal-btn.disabled{border:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-page-footer button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-page-footer button{font-size:13px}}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1998: function (e, n, t) {
      var o = t(35),
        a = t(1999);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(n).forEach((e) => o.push(e)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...e(n, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < n.length; o++) {
            const a = n[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (a.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      o(a, i);
      e.exports = a.locals || {};
    },
    1999: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ".open.InsertPageModal{visibility:visible}.closed.InsertPageModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.InsertPageModal .footer .modal-button.confirm:hover,.InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton:enabled:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.InsertPageModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.InsertPageModal .footer .modal-button.confirm.disabled,.InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.InsertPageModal .footer .modal-button.confirm.disabled span,.InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton.disabled span{color:var(--primary-button-text)}.InsertPageModal .footer .modal-button.cancel:hover,.InsertPageModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.InsertPageModal .footer .modal-button.cancel,.InsertPageModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.InsertPageModal .footer .modal-button.cancel.disabled,.InsertPageModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.InsertPageModal .footer .modal-button.cancel.disabled span,.InsertPageModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.InsertPageModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.InsertPageModal .modal-container .wrapper .modal-content{padding:10px}.InsertPageModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.InsertPageModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.InsertPageModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.InsertPageModal .footer .modal-button.confirm{margin-inline-start:4px}.InsertPageModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .footer .modal-button{padding:23px 8px}}.InsertPageModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .swipe-indicator{width:32px}}.InsertPageModal .modal-container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;color:var(--text-color)}.InsertPageModal .modal-container .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.InsertPageModal .modal-container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.InsertPageModal .modal-container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.InsertPageModal .modal-container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.InsertPageModal .modal-container .tab-list .tab-options-button.selected{cursor:default}.InsertPageModal .modal-container .tab-list .tab-options-button.focus-visible,.InsertPageModal .modal-container .tab-list .tab-options-button:focus-visible{outline:var(--focus-visible-outline)}.InsertPageModal .modal-container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.InsertPageModal .modal-container .tab-panel.focus-visible,.InsertPageModal .modal-container .tab-panel:focus-visible{outline:var(--focus-visible-outline)!important}.InsertPageModal .modal-container{overflow-y:visible;display:flex;flex-direction:column;justify-content:space-between;width:480px;padding:0;border-radius:4px;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .modal-container{border-radius:0;width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .modal-container{border-radius:0;width:100%}}@media(max-height:320px){.App:not(.is-web-component) .InsertPageModal .modal-container{display:grid;height:100%;position:fixed;inset-block-start:0;grid-template-rows:100px auto 70px;justify-content:normal}}@container (max-height: 320px){.App.is-web-component .InsertPageModal .modal-container{display:grid;height:100%;position:fixed;inset-block-start:0;grid-template-rows:100px auto 70px;justify-content:normal}}.InsertPageModal .modal-container .tabs-header-container{padding:16px}.InsertPageModal .modal-container .header{margin:0;display:flex;align-items:center;width:100%}.InsertPageModal .modal-container .header p{font-size:16px;font-weight:700;width:89.286%;margin:0;margin-inline-end:16px}.InsertPageModal .modal-container .header .insertPageModalCloseButton{position:static;height:32px;width:32px;border-radius:4px}.InsertPageModal .modal-container .header .insertPageModalCloseButton:hover{background:var(--tools-button-hover)}.InsertPageModal .modal-container .header .insertPageModalCloseButton.selected{background:var(--view-header-button-active);cursor:default}.InsertPageModal .modal-container .tab-panel{overflow-y:visible}.InsertPageModal .modal-container .tab-panel .panel-container{padding:0 16px 16px}.InsertPageModal .modal-container .tab-panel .panel-body{width:100%;height:240px;position:relative;padding:0 16px 16px}.InsertPageModal .modal-container .tab-list{font-size:14px}.InsertPageModal .modal-container .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}:host(:not([data-tabbing=true])) .InsertPageModal .modal-container .tab-list .tab-options-button,html:not([data-tabbing=true]) .InsertPageModal .modal-container .tab-list .tab-options-button{outline:none}.InsertPageModal .modal-container .footer{display:flex;padding:16px;align-items:center;justify-content:flex-end;width:100%;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;width:92px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton,html:not([data-tabbing=true]) .InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton{font-size:13px}}.InsertPageModal .modal-container .footer .Button.insertPageModalConfirmButton.disabled{border:none}.InsertPageModal .modal-container .tab-list .tab-options-divider+.tab-options-button{border-inline-start:none!important}.InsertPageModal .modal-container .tab-list .tab-options-button{border-top:1px solid var(--tab-border-color);border-bottom:1px solid var(--tab-border-color)}.InsertPageModal .modal-container .tab-list .tab-options-button:first-child{border-inline-start:1px solid var(--tab-border-color)}.InsertPageModal .modal-container .tab-list .tab-options-button:last-child{border-inline-end:1px solid var(--tab-border-color)}.InsertPageModal .modal-container .tab-list .tab-options-button:hover{background:var(--tab-background-color-hover);border-top:1px solid var(--tab-border-color-hover);border-bottom:1px solid var(--tab-border-color-hover);border-inline-end:1px solid var(--tab-border-color-hover)}.InsertPageModal .modal-container .tab-list .tab-options-button:hover+button,.InsertPageModal .modal-container .tab-list .tab-options-button:hover+div{border-inline-start:none}.InsertPageModal .modal-container .tab-list .tab-options-button.selected{background:var(--tab-color-selected);border:1px solid var(--tab-color-selected);color:var(--tab-text-color-selected)}.InsertPageModal .modal-container .tab-list .tab-options-button.selected+button,.InsertPageModal .modal-container .tab-list .tab-options-button.selected+div{border-inline-start:none!important}.InsertPageModal .modal-container .tab-list .tab-options-button:not(.selected){border-inline-end:solid 1px var(--tab-border-color)}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2092: function (e, n, t) {
      "use strict";
      t.r(n);
      (t(9),
        t(10),
        t(14),
        t(21),
        t(20),
        t(12),
        t(22),
        t(18),
        t(16),
        t(8),
        t(17),
        t(19),
        t(11),
        t(13));
      var o = t(0),
        a = t.n(o),
        i = (t(44), t(26), t(40), t(24), t(42), t(43), t(56), t(6)),
        r = t(3),
        l = t(4),
        s = t(305),
        d = t(5),
        p = t(138),
        c = t(41),
        u = t(23),
        m = t(373),
        b = t(1),
        g = t(122),
        f = (t(38), t(638), t(37), t(2)),
        h = t.n(f),
        y = t(1404),
        x = t(476),
        w = t(72),
        v = (t(30), t(31), t(28), t(111), t(2083)),
        P = t(51),
        k = t(15),
        I = t.n(k);
      function E(e) {
        return (E =
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
      function A(e, n, t) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ("object" != E(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(e, n || "default");
                if ("object" != E(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === n ? String : Number)(e);
            })(e, "string");
            return "symbol" == E(n) ? n : n + "";
          })(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function M(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                a,
                i,
                r,
                l = [],
                s = !0,
                d = !1;
              try {
                if (((i = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = i.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((d = !0), (a = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw a;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return N(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? N(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function N(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var S = function (e) {
        var n = e.id,
          t = e.className,
          i = e.min,
          r = e.onChange,
          l = e.value,
          s = e.fillWidth,
          d = M(Object(o.useState)(l), 2),
          p = d[0],
          c = d[1];
        return a.a.createElement(
          "div",
          { className: I()(A({ incrementNumberInput: !0 }, t, !!t)) },
          a.a.createElement(v.a, {
            id: n,
            type: "number",
            min: i,
            onChange: function (e) {
              (r(parseInt(e.target.value)), c(parseInt(e.target.value)));
            },
            value: p,
            fillWidth: s,
            onBlur: function (e) {
              var n = parseInt(e.target.value);
              n || ((n = parseInt(i)), r(n), c(n));
            },
          }),
          a.a.createElement(
            "div",
            { className: "increment-buttons" },
            a.a.createElement(
              "button",
              {
                className: "increment-arrow-button",
                onClick: function () {
                  (r(p + 1), c(p + 1));
                },
              },
              a.a.createElement(P.a, {
                className: "up-arrow",
                glyph: "icon-chevron-up",
              }),
            ),
            a.a.createElement(
              "button",
              {
                className: "increment-arrow-button",
                onClick: function () {
                  var e = p - 1;
                  e < i || (r(e), c(e));
                },
              },
              a.a.createElement(P.a, {
                className: "down-arrow",
                glyph: "icon-chevron-down",
              }),
            ),
          ),
        );
      };
      S.propTypes = {
        id: h.a.string,
        className: h.a.string,
        min: h.a.string,
        onChange: h.a.func.isRequired,
        value: h.a.number,
        fillWidth: h.a.bool,
      };
      var j = S,
        O = (t(50), t(62), t(45));
      t(1992);
      function C(e) {
        return (C =
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
      function _(e, n, t) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ("object" != C(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(e, n || "default");
                if ("object" != C(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === n ? String : Number)(e);
            })(e, "string");
            return "symbol" == C(n) ? n : n + "";
          })(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function T(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                a,
                i,
                r,
                l = [],
                s = !0,
                d = !1;
              try {
                if (((i = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = i.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((d = !0), (a = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw a;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return B(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? B(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function B(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var D = function (e) {
        var n = e.id,
          t = e.className,
          i = e.label,
          r = e.initialValue,
          l = e.onChange,
          s = e.unit,
          d = e.maxLength,
          p = void 0 === d ? 10 : d,
          c = e.disabled,
          u = T(Object(o.useState)(r), 2),
          m = u[0],
          b = u[1];
        return a.a.createElement(
          "div",
          { className: I()(_({ dimensionInput: !0 }, t, !!t)) },
          a.a.createElement(
            "label",
            { className: "dimension-input-label" },
            i,
            a.a.createElement(
              "div",
              { className: "dimension-input-container" },
              a.a.createElement("input", {
                id: n,
                className: "dimension-input",
                type: "number",
                min: "0",
                step: 0.01,
                onChange: function (e) {
                  (b(e.target.value), l(e.target.value));
                },
                disabled: c,
                style: {
                  width: "".concat(
                    (function (e) {
                      var n = e.toString().length,
                        t = 0.3;
                      if (O.f) {
                        ((n *= 1.25), (p *= 1.25), (t *= 1.25));
                      }
                      return (
                        e.toString().includes(".") ? (n -= t) : (n += t),
                        n > p ? p : n
                      );
                    })(m),
                    "ch",
                  ),
                },
                value: m,
              }),
              a.a.createElement(
                "span",
                { className: "dimension-unit" },
                m > 0 && s,
              ),
            ),
          ),
        );
      };
      D.propTypes = {
        id: h.a.string.isRequired,
        className: h.a.string,
        label: h.a.string,
        initialValue: h.a.number.isRequired,
        onChange: h.a.func.isRequired,
        unit: h.a.string.isRequired,
        maxLength: h.a.number,
        disabled: h.a.bool,
      };
      var R = D;
      t(1994);
      function L(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                a,
                i,
                r,
                l = [],
                s = !0,
                d = !1;
              try {
                if (((i = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = i.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((d = !0), (a = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw a;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return H(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? H(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function H(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var F = function (e) {
        var n = e.insertNewPageBelow,
          t = e.insertNewPageIndexes,
          r = e.numberOfBlankPagesToInsert,
          d = e.pageNumberError,
          p = e.setInsertNewPageBelow,
          c = e.setInsertNewPageIndexes,
          u = e.setNumberOfBlankPagesToInsert,
          m = e.setInsertPageHeight,
          b = e.setInsertPageWidth,
          g = e.setPageNumberError,
          f = e.loadedDocumentPageCount,
          h = L(
            Object(i.e)(function (e) {
              return [l.a.getPresetNewPageDimensions(e)];
            }),
            1,
          )[0],
          v = L(Object(s.a)(), 1)[0],
          P = Object.keys(h),
          k = "above",
          I = "below",
          E = {
            "Inches (in)": '"',
            "Centimeters (cm)": "cm",
            "Millimeters (mm)": "mm",
          },
          A = { '"': 1, cm: 2.54, mm: 25.4, pt: 72 },
          M = L(Object(o.useState)(P[0]), 2),
          N = M[0],
          S = M[1],
          O = L(Object(o.useState)(!1), 2),
          C = O[0],
          _ = O[1],
          T = L(Object(o.useState)(Object.getOwnPropertyNames(E)[0]), 2),
          B = T[0],
          D = T[1],
          H = L(Object(o.useState)(h[P[0]].width), 2),
          F = H[0],
          z = H[1],
          W = L(Object(o.useState)(h[P[0]].height), 2),
          G = W[0],
          q = W[1];
        Object(o.useEffect)(function () {
          (b(72 * h[N].width), m(72 * h[N].height));
        }, []);
        var U = function (e) {
          (e.length > 0
            ? g(null)
            : g("".concat(v("message.errorBlankPageNumber"))),
            c(e));
        };
        return a.a.createElement(
          "div",
          { className: "insert-blank-page-panel" },
          a.a.createElement(
            "div",
            { className: "panel-container" },
            a.a.createElement(
              "div",
              { className: "subheader" },
              v("insertPageModal.pagePlacements.header"),
            ),
            a.a.createElement(
              "div",
              { className: "section" },
              a.a.createElement(y.a, {
                label: v("insertPageModal.pagePlacements.".concat(k)),
                name: "PAGE_PLACEMENT",
                onChange: function () {
                  p(!1);
                },
                checked: !n,
                radio: !0,
              }),
              a.a.createElement(y.a, {
                label: v("insertPageModal.pagePlacements.".concat(I)),
                name: "PAGE_PLACEMENT",
                onChange: function () {
                  p(!0);
                },
                checked: n,
                radio: !0,
              }),
            ),
            a.a.createElement(
              "div",
              { className: "subheader" },
              v("insertPageModal.pageLocations.header"),
            ),
            a.a.createElement(
              "div",
              { className: "section extra-space-section" },
              a.a.createElement(
                "div",
                { className: "input-container" },
                a.a.createElement(
                  "label",
                  {
                    className: "specify-pages-wrapper",
                    htmlFor: "specifyPagesInput",
                  },
                  v("insertPageModal.pageLocations.specify"),
                  a.a.createElement(
                    "span",
                    { className: "input-sub-text" },
                    v("insertPageModal.pageLocations.total"),
                    ": ",
                    f,
                    " ",
                    v("insertPageModal.pageLocations.pages"),
                  ),
                ),
                a.a.createElement(x.a, {
                  id: "specifyPagesInput",
                  selectedPageNumbers: t,
                  pageCount: f,
                  onSelectedPageNumbersChange: U,
                  onBlurHandler: U,
                  pageNumberError: d,
                }),
              ),
              a.a.createElement(
                "div",
                { className: "input-container" },
                a.a.createElement(
                  "label",
                  { htmlFor: "numberOfPagesInput" },
                  v("insertPageModal.pageLocations.amount"),
                ),
                a.a.createElement(j, {
                  id: "numberOfPagesInput",
                  type: "number",
                  min: "1",
                  onChange: function (e) {
                    u(e);
                  },
                  value: r,
                  fillWidth: !0,
                }),
              ),
            ),
            a.a.createElement(
              "div",
              { className: "subheader" },
              v("insertPageModal.pageDimensions.header"),
            ),
            a.a.createElement(
              "div",
              { className: "section page-dimensions-section" },
              a.a.createElement(
                "div",
                { className: "input-container" },
                a.a.createElement(
                  "label",
                  {
                    id: "insert-blank-pages-preset-label",
                    htmlFor: "pagesPreset",
                  },
                  v("insertPageModal.pageDimensions.subHeader"),
                ),
                a.a.createElement(w.a, {
                  id: "pagesPreset",
                  labelledById: "insert-blank-pages-preset-label",
                  dataElement: "presetSelector",
                  currentSelectionKey: N,
                  onClickItem: function (e) {
                    ("Custom" === e
                      ? (_(!0), b(F * (72 / A[E[B]])), m(G * (72 / A[E[B]])))
                      : (b(72 * h[e].width), m(72 * h[e].height), _(!1)),
                      S(e));
                  },
                  items: [].concat(P, ["Custom"]),
                }),
              ),
              a.a.createElement(
                "div",
                {
                  className: "input-container",
                  style: { visibility: C ? "visible" : "hidden" },
                },
                a.a.createElement(
                  "label",
                  {
                    id: "insert-blank-pages-dimensions-label",
                    htmlFor: "pageDimensionsUnit",
                  },
                  v("insertPageModal.pageDimensions.units"),
                ),
                a.a.createElement(w.a, {
                  id: "pageDimensionsUnit",
                  labelledById: "insert-blank-pages-dimensions-label",
                  dataElement: "unitSelector",
                  currentSelectionKey: B,
                  onClickItem: function (e) {
                    (D(e), b(F * (72 / A[E[e]])), m(G * (72 / A[E[e]])));
                  },
                  items: Object.keys(E),
                }),
              ),
            ),
            a.a.createElement(
              "div",
              { className: "section", style: { display: C ? "flex" : "none" } },
              a.a.createElement(
                "div",
                { className: "input-container" },
                a.a.createElement(
                  "label",
                  { htmlFor: "pageWidthInput" },
                  v("formField.formFieldPopup.width"),
                ),
                a.a.createElement(R, {
                  id: "pageWidthInput",
                  className: "customWidthInput",
                  initialValue: F,
                  onChange: function (e) {
                    (z(e), b(e * (72 / A[E[B]])));
                  },
                  unit: E[B],
                }),
              ),
              a.a.createElement(
                "div",
                { className: "input-container" },
                a.a.createElement(
                  "label",
                  { htmlFor: "pageHeightInput" },
                  v("formField.formFieldPopup.height"),
                ),
                a.a.createElement(R, {
                  id: "pageHeightInput",
                  className: "customHeightInput",
                  initialValue: G,
                  onChange: function (e) {
                    (q(e), m(e * (72 / A[E[B]])));
                  },
                  unit: E[B],
                }),
              ),
            ),
          ),
        );
      };
      F.propTypes = {
        insertNewPageBelow: h.a.bool,
        insertNewPageIndexes: h.a.array,
        numberOfBlankPagesToInsert: h.a.number,
        pageNumberError: h.a.string,
        setInsertNewPageBelow: h.a.func,
        setInsertNewPageIndexes: h.a.func,
        setNumberOfBlankPagesToInsert: h.a.func,
        setInsertPageHeight: h.a.func,
        setInsertPageWidth: h.a.func,
        setPageNumberError: h.a.func,
        loadedDocumentPageCount: h.a.number,
      };
      var z = F,
        W =
          (t(59),
          t(34),
          t(27),
          t(118),
          t(48),
          t(47),
          t(49),
          t(29),
          t(1996),
          t(1873));
      function G(e) {
        return (G =
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
      function q(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o));
        }
        return t;
      }
      function U(e, n, t) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ("object" != G(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(e, n || "default");
                if ("object" != G(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === n ? String : Number)(e);
            })(e, "string");
            return "symbol" == G(n) ? n : n + "";
          })(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function V(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                a,
                i,
                r,
                l = [],
                s = !0,
                d = !1;
              try {
                if (((i = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = i.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((d = !0), (a = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw a;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return $(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? $(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function $(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var K = a.a.forwardRef(function (e, n) {
        var t = e.sourceDocument,
          r = e.closeModal,
          d = e.clearLoadedFile,
          p = e.insertPages,
          u = e.loadedDocumentPageCount,
          m = e.closeModalWarning,
          b = e.insertNewPageIndexes,
          g = void 0 === b ? [1] : b,
          f = V(Object(s.a)(), 1)[0],
          h = V(Object(o.useState)({}), 2),
          w = h[0],
          v = h[1],
          P = V(Object(o.useState)(!0), 2),
          k = P[0],
          E = P[1],
          A = V(Object(o.useState)([g[0]]), 2),
          M = A[0],
          N = A[1],
          S = V(Object(o.useState)(!0), 2),
          j = S[0],
          O = S[1],
          C = V(Object(o.useState)(""), 2),
          _ = C[0],
          T = C[1],
          B = Object(i.e)(function (e) {
            var n;
            return null === (n = l.a.getFeatureFlags(e)) || void 0 === n
              ? void 0
              : n.customizableUI;
          });
        Object(o.useEffect)(
          function () {
            for (var e = t.getPageCount(), n = {}, o = 1; o <= e; o++)
              n[o] = !0;
            v(n);
          },
          [t],
        );
        var D = function () {
            return Object.keys(w).reduce(function (e, n) {
              return (w[n] && e.push(parseInt(n)), e);
            }, []);
          },
          R = function () {
            O(!j);
          };
        return a.a.createElement(
          "div",
          {
            className: "insert-uploaded-page-panel",
            onMouseDown: function (e) {
              return e.stopPropagation();
            },
            ref: n,
          },
          a.a.createElement(
            "div",
            { className: "header" },
            a.a.createElement(
              "div",
              { className: "left-header" },
              a.a.createElement(c.a, {
                img: "icon-arrow-back",
                onClick: d,
                dataElement: "insertFromFileBackButton",
                title: f("action.back"),
              }),
              f("insertPageModal.selectPages"),
              " ",
              "(".concat(k ? 0 : D().length, ")"),
            ),
            a.a.createElement(c.a, {
              className: "insertPageModalCloseButton",
              img: "icon-close",
              onClick: function () {
                m();
              },
              title: "action.cancel",
            }),
          ),
          a.a.createElement(
            "div",
            { className: "modal-body" },
            a.a.createElement(
              "div",
              { className: "insert-blank-page-controls" },
              a.a.createElement(
                "div",
                { className: "insert-page-location-options" },
                a.a.createElement(
                  "span",
                  { className: "insert-page-titles " },
                  f("insertPageModal.pagePlacements.header"),
                ),
                a.a.createElement(
                  "div",
                  { className: "insert-page-options" },
                  a.a.createElement(y.a, {
                    label: f("insertPageModal.pagePlacements.above"),
                    radio: !0,
                    name: "insertPagePosition",
                    checked: j,
                    onChange: R,
                  }),
                  a.a.createElement(y.a, {
                    label: f("insertPageModal.pagePlacements.below"),
                    radio: !0,
                    name: "insertPagePosition",
                    checked: !j,
                    onChange: R,
                  }),
                ),
              ),
              a.a.createElement(
                "div",
                { className: "insert-page-location" },
                a.a.createElement(
                  "span",
                  { className: "insert-page-titles " },
                  f("insertPageModal.pageLocations.specifyLocation"),
                ),
                a.a.createElement(
                  "div",
                  { className: "insert-page-input" },
                  f("insertPageModal.page"),
                  ":",
                  a.a.createElement(x.a, {
                    selectedPageNumbers: M,
                    pageCount: u,
                    onSelectedPageNumbersChange: function (e) {
                      e.length > 0 && (T(null), N(e));
                    },
                    onBlurHandler: N,
                    onError: function (e) {
                      e &&
                        T(
                          ""
                            .concat(f("message.errorPageNumber"), " ")
                            .concat(u),
                        );
                    },
                    pageNumberError: _,
                  }),
                ),
              ),
            ),
            a.a.createElement(
              "div",
              {
                className: I()("modal-body-thumbnail-container", {
                  isLoading: k,
                  "modular-ui": B,
                }),
              },
              a.a.createElement(W.a, {
                document: t,
                onThumbnailSelected: function (e) {
                  (void 0 === w[e] ? (w[e] = !0) : (w[e] = !w[e]),
                    v(
                      (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                          var t = null != arguments[n] ? arguments[n] : {};
                          n % 2
                            ? q(Object(t), !0).forEach(function (n) {
                                U(e, n, t[n]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(t),
                                )
                              : q(Object(t)).forEach(function (n) {
                                  Object.defineProperty(
                                    e,
                                    n,
                                    Object.getOwnPropertyDescriptor(t, n),
                                  );
                                });
                        }
                        return e;
                      })({}, w),
                    ));
                },
                selectedThumbnails: w,
                onfileLoadedHandler: E,
              }),
            ),
          ),
          a.a.createElement(
            "div",
            { className: I()("insert-page-footer", { isFileSelected: !k }) },
            a.a.createElement(
              "button",
              {
                className: I()("deselect-thumbnails", { disabled: k }),
                onClick: function () {
                  v({});
                },
                disabled: k,
              },
              f("action.deselectAll"),
            ),
            a.a.createElement(c.a, {
              className: "modal-btn",
              onClick: function () {
                var e = M[0];
                if (e) {
                  var n = j ? e : ++e;
                  (n > u && (n = null), p(t, D(), n));
                }
                r();
              },
              label: f("insertPageModal.button"),
              disabled: 0 === D().length || k || 0 === M.length || _,
            }),
          ),
        );
      });
      K.displayName = K;
      var J = K;
      function Q() {
        return (Q = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var o in t)
                  ({}).hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      var X = a.a.forwardRef(function (e, n) {
        var t = Object(i.d)(),
          o = e.closeModal;
        return a.a.createElement(
          J,
          Q({}, e, {
            insertPages: g.h,
            closeModalWarning: function () {
              return Object(g.c)(o, t);
            },
            ref: n,
          }),
        );
      });
      X.displayName = "InsertUploadedPagePanelContainer";
      var Y = X,
        Z = t(483);
      t(1998);
      function ee() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          n,
          t = "function" == typeof Symbol ? Symbol : {},
          o = t.iterator || "@@iterator",
          a = t.toStringTag || "@@toStringTag";
        function i(t, o, a, i) {
          var s = o && o.prototype instanceof l ? o : l,
            d = Object.create(s.prototype);
          return (
            ne(
              d,
              "_invoke",
              (function (t, o, a) {
                var i,
                  l,
                  s,
                  d = 0,
                  p = a || [],
                  c = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: m,
                    f: m.bind(e, 4),
                    d: function (n, t) {
                      return ((i = n), (l = 0), (s = e), (u.n = t), r);
                    },
                  };
                function m(t, o) {
                  for (
                    l = t, s = o, n = 0;
                    !c && d && !a && n < p.length;
                    n++
                  ) {
                    var a,
                      i = p[n],
                      m = u.p,
                      b = i[2];
                    t > 3
                      ? (a = b === o) &&
                        ((s = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= m &&
                        ((a = t < 2 && m < i[1])
                          ? ((l = 0), (u.v = o), (u.n = i[1]))
                          : m < b &&
                            (a = t < 3 || i[0] > o || o > b) &&
                            ((i[4] = t), (i[5] = o), (u.n = b), (l = 0)));
                  }
                  if (a || t > 1) return r;
                  throw ((c = !0), o);
                }
                return function (a, p, b) {
                  if (d > 1) throw TypeError("Generator is already running");
                  for (
                    c && 1 === p && m(p, b), l = p, s = b;
                    (n = l < 2 ? e : s) || !c;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (u.n = -1), m(l, s))
                          : (u.n = s)
                        : (u.v = s));
                    try {
                      if (((d = 2), i)) {
                        if ((l || (a = "next"), (n = i[a]))) {
                          if (!(n = n.call(i, s)))
                            throw TypeError("iterator result is not an object");
                          if (!n.done) return n;
                          ((s = n.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (n = i.return) && n.call(i),
                            l < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  a +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((n = (c = u.n < 0) ? s : t.call(o, u)) !== r)
                        break;
                    } catch (n) {
                      ((i = e), (l = 1), (s = n));
                    } finally {
                      d = 1;
                    }
                  }
                  return { value: n, done: c };
                };
              })(t, a, i),
              !0,
            ),
            d
          );
        }
        var r = {};
        function l() {}
        function s() {}
        function d() {}
        n = Object.getPrototypeOf;
        var p = [][o]
            ? n(n([][o]()))
            : (ne((n = {}), o, function () {
                return this;
              }),
              n),
          c = (d.prototype = l.prototype = Object.create(p));
        function u(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, d)
              : ((e.__proto__ = d), ne(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(c)),
            e
          );
        }
        return (
          (s.prototype = d),
          ne(c, "constructor", d),
          ne(d, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          ne(d, a, "GeneratorFunction"),
          ne(c),
          ne(c, a, "Generator"),
          ne(c, o, function () {
            return this;
          }),
          ne(c, "toString", function () {
            return "[object Generator]";
          }),
          (ee = function () {
            return { w: i, m: u };
          })()
        );
      }
      function ne(e, n, t, o) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (e) {
          a = 0;
        }
        (ne = function (e, n, t, o) {
          if (n)
            a
              ? a(e, n, {
                  value: t,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[n] = t);
          else {
            var i = function (n, t) {
              ne(e, n, function (e) {
                return this._invoke(n, t, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, n, t, o);
      }
      function te(e, n, t, o, a, i, r) {
        try {
          var l = e[i](r),
            s = l.value;
        } catch (e) {
          return void t(e);
        }
        l.done ? n(s) : Promise.resolve(s).then(o, a);
      }
      function oe(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                a,
                i,
                r,
                l = [],
                s = !0,
                d = !1;
              try {
                if (((i = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = i.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((d = !0), (a = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw a;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return ae(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? ae(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ae(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var ie = { loadAsPDF: !0 },
        re = function (e) {
          var n = e.loadedDocumentPageCount,
            t = oe(
              Object(i.e)(function (e) {
                return [
                  l.a.getSelectedThumbnailPageIndexes(e),
                  l.a.getCurrentPage(e),
                  l.a.getSelectedTab(e, d.a.INSERT_PAGE_MODAL),
                ];
              }),
              3,
            ),
            f = t[0],
            h = t[1],
            y = t[2],
            x = oe(Object(o.useState)(null), 2),
            w = x[0],
            v = x[1],
            P = oe(Object(o.useState)(!1), 2),
            k = P[0],
            I = P[1],
            E = oe(Object(o.useState)([]), 2),
            A = E[0],
            M = E[1],
            N = oe(Object(o.useState)(1), 2),
            S = N[0],
            j = N[1],
            O = oe(Object(o.useState)(0), 2),
            C = O[0],
            _ = O[1],
            T = oe(Object(o.useState)(0), 2),
            B = T[0],
            D = T[1],
            R = oe(Object(o.useState)(""), 2),
            L = R[0],
            H = R[1];
          Object(o.useEffect)(
            function () {
              var e =
                f.length > 0
                  ? f.map(function (e) {
                      return e + 1;
                    })
                  : [h];
              M(e);
            },
            [f],
          );
          var F,
            W,
            G = Object(i.d)(),
            q = oe(Object(s.a)(), 1)[0],
            U = function () {
              G(r.a.closeElement(d.a.INSERT_PAGE_MODAL));
            },
            V = function () {
              if (k)
                for (
                  var e = function (e) {
                      Object(g.g)(
                        A.map(function (n, t) {
                          return n + (t + 1) * e;
                        }),
                        B,
                        C,
                      );
                    },
                    n = 0;
                  n < S;
                  ++n
                )
                  e(n);
              else
                for (
                  var t = function (e) {
                      Object(g.f)(
                        A.map(function (n, t) {
                          return n + (t + 1) * e;
                        }),
                        B,
                        C,
                      );
                    },
                    o = 0;
                  o < S;
                  ++o
                )
                  t(o);
              U();
            },
            $ = (function () {
              var e,
                n =
                  ((e = ee().m(function e(n) {
                    var t;
                    return ee().w(
                      function (e) {
                        for (;;)
                          switch ((e.p = e.n)) {
                            case 0:
                              if (
                                !(
                                  n instanceof
                                  Object(u.c)().instance.Core.Document
                                )
                              ) {
                                e.n = 1;
                                break;
                              }
                              ((t = n), (e.n = 4));
                              break;
                            case 1:
                              return (
                                (e.p = 1),
                                (e.n = 2),
                                b.a.createDocument(n, ie)
                              );
                            case 2:
                              ((t = e.v), (e.n = 4));
                              break;
                            case 3:
                              ((e.p = 3),
                                e.v,
                                console.error("File type not supported"));
                            case 4:
                              v(t);
                            case 5:
                              return e.a(2);
                          }
                      },
                      e,
                      null,
                      [[1, 3]],
                    );
                  })),
                  function () {
                    var n = this,
                      t = arguments;
                    return new Promise(function (o, a) {
                      var i = e.apply(n, t);
                      function r(e) {
                        te(i, o, a, r, l, "next", e);
                      }
                      function l(e) {
                        te(i, o, a, r, l, "throw", e);
                      }
                      r(void 0);
                    });
                  });
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            K = function () {
              v(null);
            };
          return a.a.createElement(
            "div",
            {
              className: "Modal open InsertPageModal",
              "data-element": d.a.INSERT_PAGE_MODAL,
              onMouseDown: w
                ? function () {
                    Object(g.c)(U, G);
                  }
                : U,
            },
            a.a.createElement(
              m.a,
              {
                title: w ? null : q("insertPageModal.title"),
                isOpen: !0,
                closeHandler: U,
                onCloseClick: U,
                swipeToClose: !0,
              },
              w
                ? a.a.createElement(Y, {
                    sourceDocument: w,
                    closeModal: U,
                    clearLoadedFile: K,
                    loadedDocumentPageCount: n,
                    insertNewPageIndexes: A,
                  })
                : ((F = y === d.a.INSERT_FROM_FILE_TAB),
                  (W = {
                    insertNewPageBelow: k,
                    insertNewPageIndexes: A,
                    numberOfBlankPagesToInsert: S,
                    pageNumberError: L,
                    setInsertNewPageBelow: I,
                    setInsertNewPageIndexes: M,
                    setNumberOfBlankPagesToInsert: j,
                    setInsertPageHeight: _,
                    setInsertPageWidth: D,
                    setPageNumberError: H,
                    loadedDocumentPageCount: n,
                  }),
                  a.a.createElement(
                    "div",
                    {
                      className: "container tabs",
                      onClick: function (e) {
                        return e.stopPropagation();
                      },
                      onMouseDown: function (e) {
                        return e.stopPropagation();
                      },
                    },
                    a.a.createElement(
                      p.d,
                      {
                        className: "insert-page-tabs",
                        id: d.a.INSERT_PAGE_MODAL,
                      },
                      a.a.createElement(
                        "div",
                        { className: "tabs-header-container" },
                        a.a.createElement(
                          "div",
                          { className: "tab-list" },
                          a.a.createElement(
                            p.a,
                            { dataElement: d.a.INSERT_BLANK_PAGE_TAB },
                            a.a.createElement(
                              "button",
                              { className: "tab-options-button" },
                              q("insertPageModal.tabs.blank"),
                            ),
                          ),
                          a.a.createElement("div", {
                            className: "tab-options-divider",
                          }),
                          a.a.createElement(
                            p.a,
                            { dataElement: d.a.INSERT_FROM_FILE_TAB },
                            a.a.createElement(
                              "button",
                              { className: "tab-options-button" },
                              q("insertPageModal.tabs.upload"),
                            ),
                          ),
                        ),
                      ),
                      a.a.createElement(
                        p.c,
                        { dataElement: d.a.INSERT_BLANK_PAGE_PANEL },
                        a.a.createElement(z, W),
                      ),
                      a.a.createElement(
                        p.c,
                        { dataElement: d.a.INSERT_FROM_FILE_PANEL },
                        a.a.createElement(
                          "div",
                          { className: "panel-body" },
                          a.a.createElement(Z.a, { onFileProcessed: $ }),
                        ),
                      ),
                    ),
                    a.a.createElement("div", { className: "divider" }),
                    a.a.createElement(
                      "div",
                      { className: "footer" },
                      a.a.createElement(c.a, {
                        className: "insertPageModalConfirmButton",
                        label: "insertPageModal.button",
                        onClick: V,
                        disabled: B <= 0 || C <= 0 || F || 0 === A.length || L,
                      }),
                    ),
                  )),
            ),
          );
        };
      function le(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                a,
                i,
                r,
                l = [],
                s = !0,
                d = !1;
              try {
                if (((i = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = i.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((d = !0), (a = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw a;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return se(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? se(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function se(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var de = function () {
        var e = le(
            Object(i.e)(function (e) {
              return [
                l.a.isElementDisabled(e, d.a.INSERT_PAGE_MODAL),
                l.a.isElementOpen(e, d.a.INSERT_PAGE_MODAL),
              ];
            }),
            2,
          ),
          n = e[0],
          t = e[1];
        if (!n && t) {
          var o = b.a.getDocumentViewer().getDocument()
            ? b.a.getTotalPages()
            : null;
          return a.a.createElement(re, { loadedDocumentPageCount: o });
        }
        return null;
      };
      n.default = de;
    },
  },
]);
//# sourceMappingURL=chunk.43.js.map
