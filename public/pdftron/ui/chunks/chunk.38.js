(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    1943: function (e, t, n) {
      var a = n(35),
        o = n(1944);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var i = {
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
            const o = t[a];
            if (0 === a)
              (o.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (o.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      a(o, i);
      e.exports = o.locals || {};
    },
    1944: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ink-signature{width:100%;height:100%;padding:16px}.ink-signature-canvas-container{display:flex;flex-direction:column;background:var(--signature-draw-background);border-radius:4px;border:1px solid var(--modal-stroke-and-border);padding:8px;height:200px}.ink-signature-canvas-container.full-signature{flex:1.5 0 0}.ink-signature-canvas-container.initials{flex:1 0 0}.ink-signature .ink-signature-canvas{height:144px;border-bottom:1px solid var(--gray-6)}@media(max-height:500px){.App:not(.is-web-component) .ink-signature .ink-signature-canvas{height:116px}}@container (max-height: 500px){.App.is-web-component .ink-signature .ink-signature-canvas{height:116px}}@media(max-height:320px){.App:not(.is-web-component) .ink-signature .ink-signature-canvas{height:86px}}@container (max-height: 320px){.App.is-web-component .ink-signature .ink-signature-canvas{height:86px}}.ink-signature-canvas{z-index:1;width:inherit;height:inherit;cursor:crosshair}.ink-signature-footer{display:flex;flex-direction:row;border-top:1px solid var(--modal-stroke-and-border);padding-top:7px}.ink-signature-sign-here{color:var(--faded-text);height:48px;text-align:center;font-size:10px;flex:2 0 0}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ink-signature-sign-here{inset-inline-start:44.5%}}.ink-signature .canvas-colorpalette-container{padding:0;box-sizing:border-box;display:flex;flex-direction:column}.ink-signature .colorpalette-clear-container{display:flex;height:44px;justify-content:space-between}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1945: function (e, t, n) {
      var a = n(35),
        o = n(1946);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var i = {
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
            const o = t[a];
            if (0 === a)
              (o.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (o.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      a(o, i);
      e.exports = o.locals || {};
    },
    1946: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.text-signature{width:100%;height:100%;padding:16px}.text-signature canvas{display:none}.text-signature-input{outline:none;width:100%;background:transparent;border:none;border-bottom:1px solid var(--gray-6);border-radius:0;text-align:center;height:85px}@media(max-height:500px){.App:not(.is-web-component) .text-signature-input{font-size:42px!important;height:50px}}@container (max-height: 500px){.App.is-web-component .text-signature-input{font-size:42px!important;height:50px}}@media(max-height:320px){.App:not(.is-web-component) .text-signature-input{font-size:34px!important}}@container (max-height: 320px){.App.is-web-component .text-signature-input{font-size:34px!important}}.text-signature-input:focus{border:none;border-bottom:1px solid var(--gray-6)}.text-signature-inner-container{position:absolute;height:100%;min-width:100%}.text-signature-text{display:flex;align-items:center;background:var(--signature-draw-background);white-space:nowrap;border-radius:4px;padding:0 8px;margin-top:10px;overflow-y:auto;flex-grow:1;visibility:hidden;position:fixed}.text-signature-text:hover{cursor:pointer}.text-signature-text .text-container{margin:auto;padding:0 20px}.text-signature label{margin-top:60px;width:100%}.text-signature .Dropdown__items{inset-block-start:unset!important}.text-signature .Dropdown__items [data-testid=sig-no-result]{font-size:13px!important}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1947: function (e, t, n) {
      var a = n(35),
        o = n(1948);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var i = {
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
            const o = t[a];
            if (0 === a)
              (o.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (o.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      a(o, i);
      e.exports = o.locals || {};
    },
    1948: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.image-signature{width:100%;height:100%;padding:16px}@media(max-height:500px){.App:not(.is-web-component) .image-signature{height:192px}}@container (max-height: 500px){.App.is-web-component .image-signature{height:192px}}@media(max-height:320px){.App:not(.is-web-component) .image-signature{height:162px}}@container (max-height: 320px){.App.is-web-component .image-signature{height:162px}}.image-signature .image-signature-modal-overlay{position:absolute;width:100%;height:480px;background:transparent;z-index:9999;inset-inline-start:0;inset-block-start:-100px}.image-signature-image-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.image-signature-image-container img{max-height:100%;max-width:100%;width:auto;height:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.image-signature-image-container img{flex-grow:1;flex-basis:0}}.image-signature-image-container .Button{position:absolute;inset-block-end:0;inset-inline-end:0}.image-signature .mobile{background:var(--signature-draw-background);border:1px solid var(--modal-stroke-and-border)}.image-signature-upload-container{position:relative;border-radius:4px;border:1px dashed var(--modal-stroke-and-border);display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.image-signature-upload-container.dragging{background:var(--image-signature-drop-background);border:1px dashed var(--image-signature-drop-border)}.image-signature-dnd,.image-signature-separator{color:var(--faded-text)}.image-signature-upload input[type=file]{display:none}.image-signature-upload .pick-image-button{height:24px;border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);display:flex;align-items:center;padding:0 11px;cursor:pointer}.image-signature-upload .pick-image-button:hover{border:1px solid var(--primary-button-hover);color:var(--primary-button-hover)}.image-signature-upload .pick-image-button.focus-visible,.image-signature-upload .pick-image-button:focus-visible{outline:var(--focus-visible-outline)}.image-signature-separator{margin:10px}.image-signature-error{position:absolute;color:red;inset-block-end:0;inset-inline-end:0;margin:0 5px 5px 0}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1949: function (e, t, n) {
      var a = n(35),
        o = n(1950);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var i = {
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
            const o = t[a];
            if (0 === a)
              (o.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (o.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      a(o, i);
      e.exports = o.locals || {};
    },
    1950: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SavedSignatures{width:100%;height:276px;padding:16px;overflow-y:auto;display:flex;grid-gap:16px;gap:16px;flex-direction:column}@media(max-height:500px){.App:not(.is-web-component) .SavedSignatures{height:192px}}@container (max-height: 500px){.App.is-web-component .SavedSignatures{height:192px}}@media(max-height:320px){.App:not(.is-web-component) .SavedSignatures{height:162px}}@container (max-height: 320px){.App.is-web-component .SavedSignatures{height:162px}}.SavedSignatures .signature-row{display:flex;flex-direction:column;justify-content:center;height:25%;width:100%}.SavedSignatures .signature-row .inputContainer{width:100%;display:grid;grid-gap:8px;gap:8px;align-items:center;grid-template-columns:20px 1fr}.SavedSignatures .signature-row .inputContainer input{width:16px;height:16px}.SavedSignatures .signature-row .inputContainer input[type=radio]:checked{accent-color:var(--blue-5)}.SavedSignatures .signature-row .inputContainer .contentContainer{padding-bottom:4px;margin-bottom:4px;border-bottom:1px solid var(--gray-5);display:grid;align-items:center;grid-template-columns:1fr 1fr 1fr}.SavedSignatures .signature-row .inputContainer .contentContainer .icon-button{justify-self:end;padding:0;border:none;background-color:transparent;display:flex;align-items:center;justify-content:center;width:34px;border-radius:4px;cursor:pointer}:host(:not([data-tabbing=true])) .SavedSignatures .signature-row .inputContainer .contentContainer .icon-button,html:not([data-tabbing=true]) .SavedSignatures .signature-row .inputContainer .contentContainer .icon-button{outline:none}.SavedSignatures .signature-row .inputContainer .contentContainer .icon-button:hover{background:var(--tools-overlay-button-hover)}.SavedSignatures .signature-row .inputContainer .contentContainer .radioButton{border-radius:100px;border:1px solid var(--blue-5);width:16px;height:16px;border-spacing:2px}.SavedSignatures .signature-row .inputContainer .contentContainer .radioButton.selected{background-color:var(--blue-5)}.SavedSignatures .signature-row .inputContainer .contentContainer .imgContainer{width:162px;height:26px}.SavedSignatures .signature-row .inputContainer .contentContainer .imgContainer img{max-width:100%;max-height:100%}.SavedSignatures .signature-row .labelContainer{display:grid;grid-template-columns:1fr 2fr;padding-inline-start:28px;color:var(--gray-7)}.SavedSignatures .signature-row.no-initials .contentContainer{grid-template-columns:1fr 2fr}.SavedSignatures .emptyListContainer{height:100%;display:flex;align-items:center;justify-content:center;text-align:center}.SavedSignatures.empty{grid-template-rows:1fr}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1951: function (e, t, n) {
      var a = n(35),
        o = n(1952);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var i = {
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
            const o = t[a];
            if (0 === a)
              (o.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (o.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      a(o, i);
      e.exports = o.locals || {};
    },
    1952: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ".open.SignatureModal{visibility:visible}.closed.SignatureModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SignatureModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.SignatureModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.SignatureModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.SignatureModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.SignatureModal .footer .modal-button.cancel:hover,.SignatureModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.SignatureModal .footer .modal-button.cancel,.SignatureModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.SignatureModal .footer .modal-button.cancel.disabled,.SignatureModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.SignatureModal .footer .modal-button.cancel.disabled span,.SignatureModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.SignatureModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.SignatureModal .modal-container .wrapper .modal-content{padding:10px}.SignatureModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.SignatureModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.SignatureModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.SignatureModal .footer .modal-button.confirm{margin-inline-start:4px}.SignatureModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .footer .modal-button{padding:23px 8px}}.SignatureModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .swipe-indicator{width:32px}}.SignatureModal .modal-container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;color:var(--text-color)}.SignatureModal .modal-container .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.SignatureModal .modal-container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.SignatureModal .modal-container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.SignatureModal .modal-container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.SignatureModal .modal-container .tab-list .tab-options-button.selected{cursor:default}.SignatureModal .modal-container .tab-list .tab-options-button.focus-visible,.SignatureModal .modal-container .tab-list .tab-options-button:focus-visible{outline:var(--focus-visible-outline)}.SignatureModal .modal-container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.SignatureModal .modal-container .tab-panel.focus-visible,.SignatureModal .modal-container .tab-panel:focus-visible{outline:var(--focus-visible-outline)!important}.SignatureModal .modal-container{display:flex;flex-direction:column;justify-content:space-between;width:480px;padding:0;border-radius:4px;background:var(--component-background);overflow-y:visible}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .modal-container{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .modal-container{width:100%}}.SignatureModal .modal-container.include-initials{width:664px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .modal-container{border-radius:0;height:440px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .modal-container{border-radius:0;height:440px}}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .modal-container{display:grid;height:100%;position:fixed;inset-block-start:0;grid-template-rows:100px auto 70px;justify-content:normal}}@container (max-height: 320px){.App.is-web-component .SignatureModal .modal-container{display:grid;height:100%;position:fixed;inset-block-start:0;grid-template-rows:100px auto 70px;justify-content:normal}}.SignatureModal .modal-container .tabs-header-container{padding:16px 16px 0}.SignatureModal .modal-container .header{margin:0;display:flex;align-items:center;width:100%;height:24px}.SignatureModal .modal-container .header p{font-size:16px;font-weight:700;width:calc(100% - 32px);margin:0;margin-inline-end:16px}.SignatureModal .modal-container .header .signatureModalCloseButton{position:static;height:32px;width:32px}.SignatureModal .modal-container .header .signatureModalCloseButton:hover{background:var(--gray-2);border-radius:4px}.SignatureModal .modal-container .header .signatureModalCloseButton.selected{background:var(--view-header-button-active);cursor:default}.SignatureModal .modal-container .StylePopup{border-radius:0;box-shadow:none}.SignatureModal .modal-container .tab-panel{overflow-y:auto}.SignatureModal .modal-container .tab-list{font-size:14px}.SignatureModal .modal-container .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}:host(:not([data-tabbing=true])) .SignatureModal .modal-container .tab-list .tab-options-button,html:not([data-tabbing=true]) .SignatureModal .modal-container .tab-list .tab-options-button{outline:none}.SignatureModal .modal-container .signature-style-options{width:90%;display:flex}.SignatureModal .modal-container .signature-style-options .ColorPalette{margin:8px;grid-template-columns:repeat(3,1fr);width:100px}.SignatureModal .modal-container .signature-style-options .ColorPalette :not(:last-child){margin-inline-end:8px}.SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container{width:28px;height:28px}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container{width:22px;height:22px}}@container (max-height: 320px){.App.is-web-component .SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container{width:22px;height:22px}}.SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container .cell-outer .cell{width:16px;height:16px}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container .cell-outer .cell{width:14px;height:14px}}@container (max-height: 320px){.App.is-web-component .SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container .cell-outer .cell{width:14px;height:14px}}.SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container .cell-outer.active{width:28px;height:28px}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container .cell-outer.active{width:22px;height:22px}}@container (max-height: 320px){.App.is-web-component .SignatureModal .modal-container .signature-style-options .ColorPalette .cell-container .cell-outer.active{width:22px;height:22px}}.SignatureModal .modal-container .signature-clear{background-color:transparent;color:var(--secondary-button-text);padding:0 16px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;height:28px;width:63px;margin:auto 8px;font-size:13px}:host(:not([data-tabbing=true])) .SignatureModal .modal-container .signature-clear,html:not([data-tabbing=true]) .SignatureModal .modal-container .signature-clear{outline:none}.SignatureModal .modal-container .signature-clear:enabled:hover{color:var(--secondary-button-hover)}.SignatureModal .modal-container .signature-clear:disabled{opacity:.5}.SignatureModal .modal-container .footer{display:flex;padding:16px;align-items:center;justify-content:flex-end;width:100%;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.SignatureModal .modal-container .footer .signature-create{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;width:72px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .SignatureModal .modal-container .footer .signature-create,html:not([data-tabbing=true]) .SignatureModal .modal-container .footer .signature-create{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .modal-container .footer .signature-create{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .modal-container .footer .signature-create{font-size:13px}}.SignatureModal .modal-container .footer .signature-create:enabled:hover{background:var(--primary-button-hover)}.SignatureModal .modal-container .footer .signature-create:disabled{opacity:.5;cursor:default}.SignatureModal .modal-container .footer .signature-create.focus-visible,.SignatureModal .modal-container .footer .signature-create:focus-visible{outline:var(--focus-visible-outline)}.SignatureModal .modal-container .tab-list .tab-options-divider+.tab-options-button{border-inline-start:none!important}.SignatureModal .modal-container .tab-list .tab-options-button{border-top:1px solid var(--tab-border-color);border-bottom:1px solid var(--tab-border-color)}.SignatureModal .modal-container .tab-list .tab-options-button:first-child{border-inline-start:1px solid var(--tab-border-color)}.SignatureModal .modal-container .tab-list .tab-options-button:last-child{border-inline-end:1px solid var(--tab-border-color)}.SignatureModal .modal-container .tab-list .tab-options-button:hover{background:var(--tab-background-color-hover);border-top:1px solid var(--tab-border-color-hover);border-bottom:1px solid var(--tab-border-color-hover);border-inline-end:1px solid var(--tab-border-color-hover)}.SignatureModal .modal-container .tab-list .tab-options-button:hover+button,.SignatureModal .modal-container .tab-list .tab-options-button:hover+div{border-inline-start:none}.SignatureModal .modal-container .tab-list .tab-options-button.selected{background:var(--tab-color-selected);border:1px solid var(--tab-color-selected);color:var(--tab-text-color-selected)}.SignatureModal .modal-container .tab-list .tab-options-button.selected+button,.SignatureModal .modal-container .tab-list .tab-options-button.selected+div{border-inline-start:none!important}.SignatureModal .modal-container .tab-list .tab-options-button:not(.selected){border-inline-end:solid 1px var(--tab-border-color)}.SignatureModal .colorpalette-clear-container{display:flex;height:38px;box-sizing:border-box;justify-content:space-between;align-items:baseline;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.SignatureModal .colorpalette-clear-container .signature-style-options{width:90%;display:flex}.SignatureModal .colorpalette-clear-container .signature-style-options .divider{display:inline-block;border-inline-start:1px solid var(--modal-stroke-and-border);margin:auto 8px auto 16px;height:16px}.SignatureModal .colorpalette-clear-container .signature-style-options .placeholder-dropdown{width:160px;height:31px;margin:auto 0}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper{width:160px;height:31px;position:absolute;margin:8px 0 auto}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown{width:100%!important;height:100%;text-align:start}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .picked-option-text{margin-inline-end:-18px;padding-inline-start:2px;font-size:13px}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .arrow{flex:unset}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__items{inset-block-end:auto;inset-block-start:100%;width:100%;inset-inline-start:0;inset-inline-end:auto}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__items button:nth-child(n){font-size:15px}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__items button:nth-child(2){font-size:13px}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__items button:nth-child(4){font-size:18px}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__item{display:block;padding-inline-end:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:start}.SignatureModal .footer-signature-clear{padding:0;background-color:transparent;color:var(--secondary-button-text);display:flex;flex:0 0 0;align-items:baseline;justify-content:center;cursor:pointer;border:none;height:28px;width:63px;font-size:13px}:host(:not([data-tabbing=true])) .SignatureModal .footer-signature-clear,html:not([data-tabbing=true]) .SignatureModal .footer-signature-clear{outline:none}.SignatureModal .footer-signature-clear:enabled:hover{color:var(--secondary-button-hover)}.SignatureModal .footer-signature-clear:disabled{opacity:.5}.SignatureModal .footer-signature-clear.focus-visible,.SignatureModal .footer-signature-clear:focus-visible{outline:var(--focus-visible-outline)}.SignatureModal .signature-input{background:var(--signature-draw-background);border:1px solid var(--modal-stroke-and-border);display:flex;flex-direction:column;grid-gap:8px;gap:8px;align-items:center;justify-content:center;padding:8px;width:100%;height:200px;border-radius:4px}.SignatureModal .signature-input.full-signature{flex:1.5 0 0}.SignatureModal .signature-input.initials{flex:1 0 0}@media(max-height:500px){.App:not(.is-web-component) .SignatureModal .signature-input{height:116px}}@container (max-height: 500px){.App.is-web-component .SignatureModal .signature-input{height:116px}}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .signature-input{height:86px}}@container (max-height: 320px){.App.is-web-component .SignatureModal .signature-input{height:86px}}.SignatureModal .signature-input.image{height:244px}.SignatureModal .signature-input-footer{display:flex;flex-direction:row;width:100%}.SignatureModal .signature-input .signature-prompt{font-size:10px;color:var(--faded-text);flex:3 0 0;text-align:center}.SignatureModal .signature-and-initials-container{display:flex;flex-direction:row;grid-gap:8px;gap:8px}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2091: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(21),
        n(20),
        n(12),
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
        o = n.n(a),
        i = n(15),
        r = n.n(i),
        l = n(6),
        s = n(305),
        c = n(138),
        u = n(206),
        d = n(2),
        p = n.n(d),
        g = n(124),
        m = n(150),
        f = n(194),
        b = n(72),
        h = n(93),
        v = n(1),
        x = n(107);
      n(1943);
      function y() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function i(n, a, o, i) {
          var s = a && a.prototype instanceof l ? a : l,
            c = Object.create(s.prototype);
          return (
            w(
              c,
              "_invoke",
              (function (n, a, o) {
                var i,
                  l,
                  s,
                  c = 0,
                  u = o || [],
                  d = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: g,
                    f: g.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (s = e), (p.n = n), r);
                    },
                  };
                function g(n, a) {
                  for (
                    l = n, s = a, t = 0;
                    !d && c && !o && t < u.length;
                    t++
                  ) {
                    var o,
                      i = u[t],
                      g = p.p,
                      m = i[2];
                    n > 3
                      ? (o = m === a) &&
                        ((s = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= g &&
                        ((o = n < 2 && g < i[1])
                          ? ((l = 0), (p.v = a), (p.n = i[1]))
                          : g < m &&
                            (o = n < 3 || i[0] > a || a > m) &&
                            ((i[4] = n), (i[5] = a), (p.n = m), (l = 0)));
                  }
                  if (o || n > 1) return r;
                  throw ((d = !0), a);
                }
                return function (o, u, m) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === u && g(u, m), l = u, s = m;
                    (t = l < 2 ? e : s) || !d;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), g(l, s))
                          : (p.n = s)
                        : (p.v = s));
                    try {
                      if (((c = 2), i)) {
                        if ((l || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, s)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((s = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (d = p.n < 0) ? s : n.call(a, p)) !== r)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (s = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, o, i),
              !0,
            ),
            c
          );
        }
        var r = {};
        function l() {}
        function s() {}
        function c() {}
        t = Object.getPrototypeOf;
        var u = [][a]
            ? t(t([][a]()))
            : (w((t = {}), a, function () {
                return this;
              }),
              t),
          d = (c.prototype = l.prototype = Object.create(u));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), w(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (s.prototype = c),
          w(d, "constructor", c),
          w(c, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          w(c, o, "GeneratorFunction"),
          w(d),
          w(d, o, "Generator"),
          w(d, a, function () {
            return this;
          }),
          w(d, "toString", function () {
            return "[object Generator]";
          }),
          (y = function () {
            return { w: i, m: p };
          })()
        );
      }
      function w(e, t, n, a) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (w = function (e, t, n, a) {
          if (t)
            o
              ? o(e, t, {
                  value: n,
                  enumerable: !a,
                  configurable: !a,
                  writable: !a,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              w(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, a);
      }
      function S(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = k(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var a = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return a >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[a++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          r = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((r = e.done), e);
          },
          e: function (e) {
            ((l = !0), (i = e));
          },
          f: function () {
            try {
              r || null == n.return || n.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function E(e, t, n, a, o, i, r) {
        try {
          var l = e[i](r),
            s = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(s) : Promise.resolve(s).then(a, o);
      }
      function A(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(t, n);
            function r(e) {
              E(i, a, o, r, l, "next", e);
            }
            function l(e) {
              E(i, a, o, r, l, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function M(e, t) {
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
                o,
                i,
                r,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (a = i.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    s = !0
                  );
              } catch (e) {
                ((c = !0), (o = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          k(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function k(e, t) {
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
      }
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var O = {
          isModalOpen: p.a.bool,
          isTabPanelSelected: p.a.bool,
          disableCreateButton: p.a.func,
          enableCreateButton: p.a.func,
          isInitialsModeEnabled: p.a.bool,
        },
        j = function (e) {
          var t,
            n = e.isModalOpen,
            i = e.isTabPanelSelected,
            r = e.disableCreateButton,
            l = e.enableCreateButton,
            c = e.isInitialsModeEnabled,
            d = void 0 !== c && c,
            p = Object(a.useRef)(),
            w = Object(a.useRef)(),
            E = Object(a.useRef)(),
            k = Object(a.useRef)(),
            C = M(Object(s.a)(), 1)[0],
            O = M(Object(a.useState)({}), 2),
            j = O[0],
            I = O[1],
            T = M(Object(a.useState)(!1), 2),
            N = T[0],
            _ = T[1],
            D = M(Object(a.useState)(!1), 2),
            R = D[0],
            P = D[1],
            L =
              ((t = M(Object(a.useState)(!1), 2)[1]),
              function () {
                return t(function (e) {
                  return !e;
                });
              });
          (Object(a.useEffect)(function () {
            var e = v.a.getTool("AnnotationCreateSignature"),
              t = p.current;
            e.setSignatureCanvas(t);
            var n = window.Core.getCanvasMultiplier();
            t.getContext("2d").scale(n, n);
            var a = w.current;
            (e.setInitialsCanvas(a), a.getContext("2d").scale(n, n));
          }, []),
            Object(a.useEffect)(
              function () {
                n && (F(), G());
              },
              [n],
            ),
            Object(a.useEffect)(
              function () {
                function e() {
                  return (e = A(
                    y().m(function e() {
                      var t, a, o, r, l;
                      return y().w(
                        function (e) {
                          for (;;)
                            switch ((e.p = e.n)) {
                              case 0:
                                if (!n || !i) {
                                  e.n = 7;
                                  break;
                                }
                                ((t = v.a.getToolsFromAllDocumentViewers(
                                  "AnnotationCreateSignature",
                                )),
                                  (a = S(t)),
                                  (e.p = 1),
                                  a.s());
                              case 2:
                                if ((o = a.n()).done) {
                                  e.n = 4;
                                  break;
                                }
                                return (
                                  (r = o.value).setSignature(E.current),
                                  r.setInitials(k.current),
                                  (e.n = 3),
                                  r.resizeCanvas(h.a.FULL_SIGNATURE)
                                );
                              case 3:
                                e.n = 2;
                                break;
                              case 4:
                                e.n = 6;
                                break;
                              case 5:
                                ((e.p = 5), (l = e.v), a.e(l));
                              case 6:
                                return ((e.p = 6), a.f(), e.f(6));
                              case 7:
                                return e.a(2);
                            }
                        },
                        e,
                        null,
                        [[1, 5, 6, 7]],
                      );
                    }),
                  )).apply(this, arguments);
                }
                function t() {
                  return (t = A(
                    y().m(function e() {
                      var t, a, o, r, l;
                      return y().w(
                        function (e) {
                          for (;;)
                            switch ((e.p = e.n)) {
                              case 0:
                                if (!(n && i && d)) {
                                  e.n = 7;
                                  break;
                                }
                                ((t = v.a.getToolsFromAllDocumentViewers(
                                  "AnnotationCreateSignature",
                                )),
                                  (a = S(t)),
                                  (e.p = 1),
                                  a.s());
                              case 2:
                                if ((o = a.n()).done) {
                                  e.n = 4;
                                  break;
                                }
                                return (
                                  (r = o.value).setInitials(k.current),
                                  (e.n = 3),
                                  r.resizeCanvas(h.a.INITIALS)
                                );
                              case 3:
                                e.n = 2;
                                break;
                              case 4:
                                e.n = 6;
                                break;
                              case 5:
                                ((e.p = 5), (l = e.v), a.e(l));
                              case 6:
                                return ((e.p = 6), a.f(), e.f(6));
                              case 7:
                                return e.a(2);
                            }
                        },
                        e,
                        null,
                        [[1, 5, 6, 7]],
                      );
                    }),
                  )).apply(this, arguments);
                }
                (!(function () {
                  e.apply(this, arguments);
                })(),
                  (function () {
                    t.apply(this, arguments);
                  })(),
                  d
                    ? E.current && k.current
                      ? l()
                      : r()
                    : E.current
                      ? l()
                      : r());
              },
              [i, n, d],
            ),
            Object(a.useEffect)(
              function () {
                function e() {
                  return (e = A(
                    y().m(function e() {
                      var t;
                      return y().w(function (e) {
                        for (;;)
                          switch (e.n) {
                            case 0:
                              if (!j.height || !j.width) {
                                e.n = 2;
                                break;
                              }
                              return (
                                (t = v.a.getTool("AnnotationCreateSignature")),
                                (e.n = 1),
                                t.resizeCanvas()
                              );
                            case 1:
                              if (!d) {
                                e.n = 2;
                                break;
                              }
                              return ((e.n = 2), t.resizeCanvas(h.a.INITIALS));
                            case 2:
                              return e.a(2);
                          }
                      }, e);
                    }),
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [j, d],
            ),
            Object(a.useEffect)(
              function () {
                !N || (d && !R) ? r() : l();
              },
              [R, N, d],
            ));
          var F = Object(a.useCallback)(function () {
              (v.a.getTool("AnnotationCreateSignature").clearSignatureCanvas(),
                (E.current = null),
                _(!1));
            }, []),
            G = Object(a.useCallback)(function () {
              (v.a.getTool("AnnotationCreateSignature").clearInitialsCanvas(),
                (k.current = null),
                P(!1));
            }, []),
            z = (function () {
              var e = A(
                y().m(function e() {
                  var t;
                  return y().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (t = v.a.getTool("AnnotationCreateSignature")),
                            (e.n = 1),
                            t.isEmptySignature()
                          );
                        case 1:
                          if (e.v) {
                            e.n = 2;
                            break;
                          }
                          ((E.current = B(
                            t.getFullSignatureAnnotation().getPaths(),
                          )),
                            _(!0));
                        case 2:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            H = (function () {
              var e = A(
                y().m(function e() {
                  var t;
                  return y().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          ((t = v.a.getTool("AnnotationCreateSignature")),
                            t.getInitialsAnnotation() &&
                              ((k.current = B(
                                t.getInitialsAnnotation().getPaths(),
                              )),
                              P(!0)));
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
            B = function (e) {
              for (var t = [], n = 0; n < e.length; ++n)
                for (var a = 0; a < e[n].length; ++a)
                  (t[n] || (t[n] = []),
                    (t[n][a] = new window.Core.Math.Point(
                      e[n][a].x,
                      e[n][a].y,
                    )));
              return t;
            },
            U = v.a.getTool("AnnotationCreateSignature").defaults,
            W = d ? {} : { display: "none" };
          return o.a.createElement(
            u.a,
            {
              bounds: !0,
              onResize: function (e) {
                var t = e.bounds;
                return I(t);
              },
            },
            function (e) {
              var t = e.measureRef;
              return o.a.createElement(
                "div",
                { className: "ink-signature", ref: t },
                o.a.createElement(
                  m.a,
                  {
                    onSwiping: function (e) {
                      return e.event.stopPropagation();
                    },
                    className: "canvas-colorpalette-container",
                  },
                  o.a.createElement(
                    "div",
                    { className: "signature-and-initials-container" },
                    o.a.createElement(
                      "div",
                      { className: "signature-input full-signature" },
                      o.a.createElement("canvas", {
                        className: "ink-signature-canvas",
                        onMouseUp: z,
                        onTouchEnd: z,
                        onMouseLeave: z,
                        ref: p,
                      }),
                      o.a.createElement(
                        "div",
                        { className: "signature-input-footer" },
                        o.a.createElement(
                          "div",
                          { className: "signature-prompt" },
                          C("option.signatureModal.drawSignature"),
                        ),
                        o.a.createElement(
                          "button",
                          {
                            className: "footer-signature-clear",
                            onClick: F,
                            disabled: !N,
                            "aria-label": C("action.clearSignature"),
                          },
                          C("action.clear"),
                        ),
                      ),
                    ),
                    o.a.createElement(
                      "div",
                      { className: "signature-input initials", style: W },
                      o.a.createElement("canvas", {
                        className: "ink-signature-canvas",
                        onMouseUp: H,
                        onTouchEnd: H,
                        onMouseLeave: H,
                        ref: w,
                      }),
                      o.a.createElement(
                        "div",
                        { className: "signature-input-footer" },
                        o.a.createElement(
                          "div",
                          { className: "signature-prompt" },
                          C("option.signatureModal.drawInitial"),
                        ),
                        o.a.createElement(
                          "button",
                          {
                            className: "footer-signature-clear",
                            onClick: G,
                            disabled: !R,
                            "aria-label": C("action.clearInitial"),
                          },
                          C("action.clear"),
                        ),
                      ),
                    ),
                  ),
                  o.a.createElement(
                    "div",
                    { className: "colorpalette-clear-container" },
                    o.a.createElement(
                      "div",
                      { className: "signature-style-options" },
                      o.a.createElement(b.a, {
                        id: "ink-signature-font-dropdown",
                        disabled: !0,
                        placeholder: "Text Styles",
                      }),
                      o.a.createElement("div", {
                        className: "placeholder-dropdown",
                      }),
                      o.a.createElement("div", { className: "divider" }),
                      o.a.createElement(f.a, {
                        color: U.StrokeColor,
                        property: "StrokeColor",
                        onStyleChange: function (e, t) {
                          return (function (e, t) {
                            Object(g.a)("AnnotationCreateSignature", e, t);
                            var n = v.a.getTool("AnnotationCreateSignature");
                            (n.getFullSignatureAnnotation() &&
                              ((n.getFullSignatureAnnotation().StrokeColor = t),
                              n.resizeCanvas(h.a.FULL_SIGNATURE)),
                              n.getInitialsAnnotation() &&
                                ((n.getInitialsAnnotation().StrokeColor = t),
                                n.resizeCanvas(h.a.INITIALS)),
                              L());
                          })(e, t);
                        },
                        overridePalette2: [x.b.black, x.a[12], x.a[7]],
                      }),
                    ),
                  ),
                ),
              );
            },
          );
        };
      j.propTypes = O;
      var I = j,
        T =
          (n(38),
          n(27),
          n(50),
          n(85),
          n(44),
          n(62),
          n(115),
          n(153),
          n(29),
          n(45));
      n(142);
      var N = function (e) {
          var t,
            n,
            a,
            o = e.getContext("2d"),
            i = e.width,
            r = e.height,
            l = { x: [], y: [] },
            s = o.getImageData(0, 0, e.width, e.height);
          for (n = 0; n < r; n++)
            for (t = 0; t < i; t++)
              ((a = 4 * (n * i + t)),
                s.data[a + 3] > 0 && (l.x.push(t), l.y.push(n)));
          (l.x.sort(function (e, t) {
            return e - t;
          }),
            l.y.sort(function (e, t) {
              return e - t;
            }));
          var c = l.x.length - 1;
          ((i = 1 + l.x[c] - l.x[0]), (r = 1 + l.y[c] - l.y[0]));
          var u = o.getImageData(l.x[0], l.y[0], i, r);
          return (
            (e.width = i),
            (e.height = r),
            o.putImageData(u, 0, 0),
            e.toDataURL()
          );
        },
        _ = n(4),
        D = (n(1945), n(23));
      function R(e, t) {
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
                o,
                i,
                r,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (a = i.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    s = !0
                  );
              } catch (e) {
                ((c = !0), (o = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return P(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? P(e, t)
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
      function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var L = {
          isModalOpen: p.a.bool,
          isTabPanelSelected: p.a.bool,
          disableCreateButton: p.a.func,
          enableCreateButton: p.a.func,
          isInitialsModeEnabled: p.a.bool,
        },
        F = x.b.black,
        G = window.Core.getCanvasMultiplier(),
        z = function (e) {
          return null == e
            ? void 0
            : e
                .split(" ")
                .map(function (e) {
                  return e[0];
                })
                .join("")
                .toUpperCase();
        },
        H = function (e, t, n) {
          var a = "".concat(t, "px ").concat(n),
            o = document.createElement("span");
          ((o.id = "textSpan"),
            (o.style.display = "inline-block"),
            (o.style.visibility = "hidden"),
            (o.style.font = a));
          var i = Object(D.a)();
          (window.isApryseWebViewerWebComponent
            ? i.appendChild(o)
            : i.getElementsByTagName("body")[0].appendChild(o),
            (o.textContent = e));
          var r = o.getBoundingClientRect().width;
          return (o.remove(), r);
        },
        B = function (e, t) {
          for (var n, a = 0, o = 48; a <= o; ) {
            ((n = Math.floor((a + o) / 2)),
              H(e, n, t) > 350 ? (o = n - 1) : (a = n + 1));
          }
          return n;
        },
        U = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            a = t.current.getBoundingClientRect(),
            o = a.width,
            i = a.height;
          ((o += 100),
            (i += 100),
            (e.style.width = "".concat(o, "px")),
            (e.style.height = "".concat(i, "px")),
            (e.width = o * Math.max(n, G)),
            (e.height = i * Math.max(n, G)));
        },
        W = function (e) {
          var t = e.canvas,
            n = e.text,
            a = e.selectedFontFamily,
            o = e.fontColor,
            i = e.overrideMultiplier,
            r = void 0 === i ? 0 : i,
            l = t.getContext("2d"),
            s = B(n, a);
          ((l.fillStyle = o),
            (l.textAlign = "center"),
            (l.textBaseline = "middle"),
            (l.font = "".concat(s * Math.max(r, G), "px ").concat(a)));
        },
        V = function (e, t) {
          var n = e.getContext("2d"),
            a = e.width,
            o = e.height;
          (n.clearRect(0, 0, a, o), n.fillText(t, a / 2, o / 2));
        },
        q = function (e) {
          var t,
            n = e.isModalOpen,
            i = e.isTabPanelSelected,
            c = e.disableCreateButton,
            u = e.enableCreateButton,
            d = e.isInitialsModeEnabled,
            p = void 0 !== d && d,
            g = Object(l.e)(function (e) {
              return _.a.getSignatureFonts(e);
            }),
            m = Object(l.e)(function (e) {
              return _.a.getTextSignatureQuality(e);
            }),
            h = R(Object(a.useState)(""), 2),
            y = h[0],
            w = h[1],
            S = R(Object(a.useState)(""), 2),
            E = S[0],
            A = S[1],
            M = R(Object(a.useState)(!0), 2),
            k = M[0],
            C = M[1],
            O = R(Object(a.useState)(new window.Core.Annotations.Color(F)), 2),
            j = O[0],
            I = O[1],
            D = R(Object(a.useState)(48), 2),
            P = D[0],
            L = D[1],
            G = Object(a.useRef)(),
            H = Object(a.useRef)(),
            q = Object(a.useRef)(),
            $ = Object(a.useRef)(),
            K = Object(a.useRef)(),
            J = R(Object(s.a)(), 1)[0],
            Q = R(Object(a.useState)(g[0]), 2),
            Y = Q[0],
            Z = Q[1],
            X =
              ((t = R(Object(a.useState)(!1), 2)[1]),
              function () {
                return t(function (e) {
                  return !e;
                });
              });
          (Object(a.useEffect)(
            function () {
              (null == y ? void 0 : y.length) > 0 && (!p || E) ? u() : c();
            },
            [E, y, p],
          ),
            Object(a.useEffect)(
              function () {
                g.includes(Y) || Z(g[0]);
              },
              [Y, g],
            ),
            Object(a.useEffect)(
              function () {
                var e = q.current;
                i &&
                  (U(e, K),
                  W({
                    canvas: e,
                    text: E,
                    selectedFontFamily: Y,
                    fontColor: j,
                  }),
                  V(e, E),
                  n && te());
              },
              [i, E, g, j, Y],
            ),
            Object(a.useEffect)(
              function () {
                var e = H.current;
                i &&
                  (U(e, $, m),
                  W({
                    canvas: e,
                    text: y,
                    selectedFontFamily: Y,
                    fontColor: j,
                    overrideMultiplier: m,
                  }),
                  V(e, y),
                  n && ee());
              },
              [i, y, g, j, Y],
            ),
            Object(a.useEffect)(
              function () {
                if ((I(j), n && i)) {
                  var e = v.a.getDisplayAuthor(v.a.getCurrentUser());
                  (w(e),
                    A(z(e)),
                    ee(),
                    (null == y ? void 0 : y.length) > 0 && (!p || E) && u());
                }
              },
              [n, i],
            ),
            Object(a.useEffect)(
              function () {
                var e;
                i &&
                  (null === (e = G.current) || void 0 === e || e.focus(),
                  T.h
                    ? G.current.setSelectionRange(0, 9999)
                    : G.current.select());
              },
              [i],
            ),
            Object(a.useEffect)(
              function () {
                var e = function () {
                  if (k) {
                    var e = v.a.getDisplayAuthor(v.a.getCurrentUser());
                    (w(e), A(z(e)), u());
                  }
                };
                return (
                  v.a.addEventListener("updateAnnotationPermission", e),
                  function () {
                    v.a.removeEventListener("updateAnnotationPermission", e);
                  }
                );
              },
              [k],
            ));
          var ee = function () {
              var e = v.a.getToolsFromAllDocumentViewers(
                  "AnnotationCreateSignature",
                ),
                t = H.current;
              if ((y || "").trim()) {
                var n = N(t);
                e.forEach(function (e) {
                  return e.setSignature(n);
                });
              } else
                e.forEach(function (e) {
                  return e.setSignature(null);
                });
            },
            te = function () {
              var e = v.a.getToolsFromAllDocumentViewers(
                  "AnnotationCreateSignature",
                ),
                t = q.current;
              if ((E || "").trim()) {
                var n = N(t);
                e.forEach(function (e) {
                  return e.setInitials(n);
                });
              } else
                e.forEach(function (e) {
                  return e.setInitials(null);
                });
            },
            ne = function (e) {
              Z(e);
              var t = B(y, e);
              L(t);
            },
            ae = !(n && i),
            oe = p ? {} : { display: "none" };
          return o.a.createElement(
            "div",
            { className: "text-signature" },
            o.a.createElement(
              "div",
              { className: "signature-and-initials-container" },
              o.a.createElement(
                "div",
                { className: "signature-input full-signature" },
                o.a.createElement(
                  "label",
                  null,
                  o.a.createElement("input", {
                    className: "text-signature-input",
                    ref: G,
                    "aria-label": J("option.signatureModal.typeSignature"),
                    type: "text",
                    value: y,
                    onChange: function (e) {
                      C(!1);
                      var t = e.target.value.replace(/^\s+/g, "");
                      (ee(), w(t), A(z(t)));
                      var n = B(t, Y);
                      L(n);
                    },
                    style: {
                      fontFamily: Y || g,
                      fontSize: P,
                      color: j.toHexString(),
                    },
                    disabled: ae,
                  }),
                ),
                o.a.createElement(
                  "div",
                  { className: "signature-input-footer" },
                  o.a.createElement(
                    "div",
                    { className: "signature-prompt" },
                    J("option.signatureModal.typeSignature"),
                  ),
                  o.a.createElement(
                    "button",
                    {
                      className: "footer-signature-clear",
                      "aria-label": J("action.clearSignature"),
                      onClick: function () {
                        (w(""), G.current.focus());
                      },
                      disabled: ae || 0 === y.length,
                    },
                    J("action.clear"),
                  ),
                ),
              ),
              o.a.createElement(
                "div",
                { className: "signature-input initials", style: oe },
                o.a.createElement(
                  "label",
                  null,
                  o.a.createElement("input", {
                    className: "text-signature-input",
                    type: "text",
                    value: E,
                    "aria-label": J("option.signatureModal.typeInitial"),
                    onChange: function (e) {
                      C(!1);
                      var t = e.target.value.replace(/^\s+/g, "");
                      (ee(), A(t));
                    },
                    style: {
                      fontFamily: Y || g,
                      fontSize: P,
                      color: j.toHexString(),
                    },
                    disabled: ae,
                  }),
                ),
                o.a.createElement(
                  "div",
                  { className: "signature-input-footer" },
                  o.a.createElement(
                    "div",
                    { className: "signature-prompt" },
                    J("option.signatureModal.typeInitial"),
                  ),
                  o.a.createElement(
                    "button",
                    {
                      className: "footer-signature-clear",
                      "aria-label": J("action.clearInitial"),
                      onClick: function () {
                        return A("");
                      },
                      disabled: ae || 0 === E.length,
                    },
                    J("action.clear"),
                  ),
                ),
              ),
            ),
            o.a.createElement(
              "div",
              {
                className: r()({ "text-signature-text": !0 }),
                style: { fontFamily: Y, fontSize: 72, color: j.toHexString() },
              },
              o.a.createElement(
                "div",
                { className: "text-container", ref: $ },
                y,
              ),
              o.a.createElement(
                "div",
                { className: "text-container", ref: K },
                E,
              ),
            ),
            o.a.createElement("canvas", { ref: H }),
            o.a.createElement("canvas", { ref: q }),
            o.a.createElement(
              "div",
              { className: "colorpalette-clear-container" },
              o.a.createElement(
                "div",
                { className: "signature-style-options" },
                "" !== y || ((!p || "" !== E) && p)
                  ? o.a.createElement(b.a, {
                      id: "text-signature-font-dropdown",
                      items: g.map(function (e) {
                        return {
                          font: e,
                          value: "".concat(y, " ").concat(p ? E : ""),
                        };
                      }),
                      getCustomItemStyle: function (e) {
                        return { fontFamily: e.font };
                      },
                      getKey: function (e) {
                        return e.font;
                      },
                      translationPrefix: "option.signatureModal.textSignature",
                      showLabelInList: !0,
                      getDisplayValue: function (e) {
                        return e.value || e.font;
                      },
                      onClickItem: ne,
                      currentSelectionKey: Y || g[0],
                      maxHeight: Object(T.k)() ? 80 : null,
                      dataElement: "text-signature-font-dropdown",
                    })
                  : o.a.createElement(b.a, {
                      id: "text-signature-font-dropdown",
                      disabled: !0,
                      placeholder: J("option.signatureModal.fontStyle"),
                    }),
                o.a.createElement("div", { className: "placeholder-dropdown" }),
                o.a.createElement("div", { className: "divider" }),
                o.a.createElement(f.a, {
                  color: j,
                  property: "fontColor",
                  onStyleChange: function (e, t) {
                    return (function (e, t) {
                      (I(t), X());
                    })(0, t);
                  },
                  overridePalette2: [x.b.black, x.a[12], x.a[7]],
                }),
              ),
            ),
          );
        };
      q.propTypes = L;
      var $ = q,
        K = (n(76), n(99), n(33));
      n(1947);
      function J() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function i(n, a, o, i) {
          var s = a && a.prototype instanceof l ? a : l,
            c = Object.create(s.prototype);
          return (
            Q(
              c,
              "_invoke",
              (function (n, a, o) {
                var i,
                  l,
                  s,
                  c = 0,
                  u = o || [],
                  d = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: g,
                    f: g.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (s = e), (p.n = n), r);
                    },
                  };
                function g(n, a) {
                  for (
                    l = n, s = a, t = 0;
                    !d && c && !o && t < u.length;
                    t++
                  ) {
                    var o,
                      i = u[t],
                      g = p.p,
                      m = i[2];
                    n > 3
                      ? (o = m === a) &&
                        ((s = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= g &&
                        ((o = n < 2 && g < i[1])
                          ? ((l = 0), (p.v = a), (p.n = i[1]))
                          : g < m &&
                            (o = n < 3 || i[0] > a || a > m) &&
                            ((i[4] = n), (i[5] = a), (p.n = m), (l = 0)));
                  }
                  if (o || n > 1) return r;
                  throw ((d = !0), a);
                }
                return function (o, u, m) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === u && g(u, m), l = u, s = m;
                    (t = l < 2 ? e : s) || !d;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), g(l, s))
                          : (p.n = s)
                        : (p.v = s));
                    try {
                      if (((c = 2), i)) {
                        if ((l || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, s)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((s = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (d = p.n < 0) ? s : n.call(a, p)) !== r)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (s = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, o, i),
              !0,
            ),
            c
          );
        }
        var r = {};
        function l() {}
        function s() {}
        function c() {}
        t = Object.getPrototypeOf;
        var u = [][a]
            ? t(t([][a]()))
            : (Q((t = {}), a, function () {
                return this;
              }),
              t),
          d = (c.prototype = l.prototype = Object.create(u));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), Q(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (s.prototype = c),
          Q(d, "constructor", c),
          Q(c, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          Q(c, o, "GeneratorFunction"),
          Q(d),
          Q(d, o, "Generator"),
          Q(d, a, function () {
            return this;
          }),
          Q(d, "toString", function () {
            return "[object Generator]";
          }),
          (J = function () {
            return { w: i, m: p };
          })()
        );
      }
      function Q(e, t, n, a) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (Q = function (e, t, n, a) {
          if (t)
            o
              ? o(e, t, {
                  value: n,
                  enumerable: !a,
                  configurable: !a,
                  writable: !a,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              Q(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, a);
      }
      function Y(e, t, n, a, o, i, r) {
        try {
          var l = e[i](r),
            s = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(s) : Promise.resolve(s).then(a, o);
      }
      function Z(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(t, n);
            function r(e) {
              Y(i, a, o, r, l, "next", e);
            }
            function l(e) {
              Y(i, a, o, r, l, "throw", e);
            }
            r(void 0);
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
                o,
                i,
                r,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (a = i.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    s = !0
                  );
              } catch (e) {
                ((c = !0), (o = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ee(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ee(e, t)
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
      function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var te = {
          isModalOpen: p.a.bool,
          isTabPanelSelected: p.a.bool,
          disableCreateButton: p.a.func,
          enableCreateButton: p.a.func,
          isInitialsModeEnabled: p.a.bool,
        },
        ne = "fullSignature",
        ae = "initials",
        oe = ["png", "jpg", "jpeg"],
        ie = null;
      function re(e) {
        return new Promise(function (t, n) {
          var a = new FileReader();
          ((a.onload = function (a) {
            var o = a.target.result;
            oe.some(function (e) {
              return -1 !== o.indexOf("image/".concat(e));
            })
              ? t({ imageSource: o, fileSize: e.size })
              : n(
                  K.a.t("message.imageSignatureAcceptedFileTypes", {
                    acceptedFileTypes: oe.join(", "),
                  }),
                );
          }),
            a.readAsDataURL(e));
        });
      }
      var le = function (e) {
        var t = e.isModalOpen,
          n = e.isTabPanelSelected,
          i = e.disableCreateButton,
          l = e.enableCreateButton,
          c = e.isInitialsModeEnabled,
          u = void 0 !== c && c,
          d = X(Object(a.useState)(null), 2),
          p = d[0],
          g = d[1],
          m = X(Object(a.useState)(null), 2),
          f = m[0],
          b = m[1],
          h = X(Object(a.useState)(null), 2),
          x = h[0],
          y = h[1],
          w = X(Object(a.useState)(null), 2),
          S = w[0],
          E = w[1],
          A = X(Object(a.useState)(""), 2),
          M = A[0],
          k = A[1],
          C = X(Object(a.useState)(null), 2),
          O = C[0],
          j = C[1],
          I = X(Object(a.useState)(null), 2),
          N = I[0],
          _ = I[1],
          D = Object(a.useRef)(),
          R = Object(a.useRef)(),
          P = X(Object(s.a)(), 1)[0];
        Object(a.useEffect)(
          function () {
            var e = v.a.getToolsFromAllDocumentViewers(
              "AnnotationCreateSignature",
            );
            ((ie = e[0].ACCEPTED_FILE_SIZE),
              t
                ? t &&
                  n &&
                  (e.forEach(function (e) {
                    return e.setSignature(p, f);
                  }),
                  e.forEach(function (e) {
                    return e.setInitials(x, S);
                  }),
                  !p || (u && !x) ? i() : l())
                : (g(null), y(null), E(null), E(null)));
          },
          [p, x, n, t, S, f, u],
        );
        var L = function (e) {
            W(e.target.files[0]);
          },
          F = function (e) {
            q(e.target.files[0]);
          },
          G = Object(a.useCallback)(function (e, t) {
            (e.preventDefault(), k(t));
          }, []),
          z = Object(a.useCallback)(function (e) {
            e.preventDefault();
          }, []),
          H = Object(a.useCallback)(function (e) {
            (e.preventDefault(),
              e.target.parentNode.contains(e.relatedTarget) || k(null));
          }, []),
          B = Object(a.useCallback)(function (e) {
            (e.preventDefault(), k(null));
          }, []),
          U = function (e) {
            (e.preventDefault(), k(null));
            var t = e.dataTransfer.files;
            t.length && W(t[0]);
          },
          W = (function () {
            var e = Z(
              J().m(function e(t) {
                var n, a, o, i;
                return J().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          return ((e.p = 0), (e.n = 1), re(t));
                        case 1:
                          ((n = e.v),
                            (a = n.imageSource),
                            (o = n.fileSize),
                            j(""),
                            g(a),
                            b(o),
                            (e.n = 3));
                          break;
                        case 2:
                          ((e.p = 2), (i = e.v), j(i));
                        case 3:
                          return e.a(2);
                      }
                  },
                  e,
                  null,
                  [[0, 2]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          V = function (e) {
            (e.preventDefault(), k(null));
            var t = e.dataTransfer.files;
            t.length && q(t[0]);
          },
          q = (function () {
            var e = Z(
              J().m(function e(t) {
                var n, a, o, i;
                return J().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          return ((e.p = 0), (e.n = 1), re(t));
                        case 1:
                          ((n = e.v),
                            (a = n.imageSource),
                            (o = n.fileSize),
                            _(""),
                            y(a),
                            E(o),
                            (e.n = 3));
                          break;
                        case 2:
                          ((e.p = 2), (i = e.v), _(i));
                        case 3:
                          return e.a(2);
                      }
                  },
                  e,
                  null,
                  [[0, 2]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          $ = Object(a.useCallback)(
            function (e) {
              G(e, ne);
            },
            [G],
          ),
          K = Object(a.useCallback)(
            function (e) {
              H(e, ne);
            },
            [H],
          ),
          Q = Object(a.useCallback)(
            function (e) {
              G(e, ae);
            },
            [G],
          ),
          Y = Object(a.useCallback)(
            function (e) {
              H(e, ae);
            },
            [H],
          ),
          ee = function () {
            return Object(T.k)()
              ? o.a.createElement(
                  "div",
                  { className: "image-signature-separator" },
                  P("option.signatureModal.selectImage"),
                )
              : o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    "div",
                    { className: "image-signature-dnd" },
                    P("option.signatureModal.dragAndDrop"),
                  ),
                  o.a.createElement(
                    "div",
                    { className: "image-signature-separator" },
                    P("option.signatureModal.or"),
                  ),
                );
          },
          te = "number" == typeof ie && ie > 0,
          le = !te || f < ie,
          se = !te || S < ie,
          ce = r()("image-signature-upload-container", {
            mobile: Object(T.k)(),
            dragging: M === ne,
          }),
          ue = r()("image-signature-upload-container", {
            mobile: Object(T.k)(),
            dragging: M === ae,
          }),
          de = u ? {} : { display: "none" };
        return o.a.createElement(
          "div",
          { className: "image-signature" },
          o.a.createElement(
            "div",
            { className: "signature-and-initials-container" },
            o.a.createElement(
              "div",
              { className: "signature-input image full-signature" },
              p && le
                ? o.a.createElement("img", {
                    src: p,
                    alt: P("option.signatureModal.imageSignature"),
                    style: { maxWidth: "100%", maxHeight: "100%" },
                  })
                : o.a.createElement(
                    "div",
                    {
                      className: ce,
                      onDragEnter: $,
                      onDragLeave: K,
                      onDragOver: z,
                      onDrop: U,
                      onDragExit: B,
                    },
                    ee(),
                    o.a.createElement(
                      "div",
                      { className: "image-signature-upload" },
                      o.a.createElement("input", {
                        ref: D,
                        id: "upload",
                        type: "file",
                        accept: oe
                          .map(function (e) {
                            return ".".concat(e);
                          })
                          .join(","),
                        onChange: L,
                        disabled: !(t && n),
                      }),
                      o.a.createElement(
                        "button",
                        {
                          onClick: function () {
                            return D.current.click();
                          },
                          className: "pick-image-button",
                        },
                        P("option.signatureModal.pickImage"),
                      ),
                    ),
                    O &&
                      o.a.createElement(
                        "div",
                        { className: "image-signature-error" },
                        O,
                      ),
                  ),
            ),
            o.a.createElement(
              "div",
              { className: "signature-input image initials", style: de },
              x && se
                ? o.a.createElement("img", {
                    src: x,
                    alt: P("option.signatureModal.imageInitial"),
                    style: { maxWidth: "100%", maxHeight: "100%" },
                  })
                : o.a.createElement(
                    "div",
                    {
                      className: ue,
                      onDragEnter: Q,
                      onDragLeave: Y,
                      onDragOver: z,
                      onDrop: V,
                      onDragExit: B,
                    },
                    ee(),
                    o.a.createElement(
                      "div",
                      { className: "image-signature-upload" },
                      o.a.createElement("input", {
                        ref: R,
                        id: "upload",
                        type: "file",
                        accept: oe
                          .map(function (e) {
                            return ".".concat(e);
                          })
                          .join(","),
                        onChange: F,
                        disabled: !(t && n),
                      }),
                      o.a.createElement(
                        "button",
                        {
                          onClick: function () {
                            return R.current.click();
                          },
                          className: "pick-image-button",
                        },
                        P("option.signatureModal.pickInitialsFile"),
                      ),
                    ),
                    N &&
                      o.a.createElement(
                        "div",
                        { className: "image-signature-error" },
                        N,
                      ),
                  ),
            ),
          ),
        );
      };
      le.propTypes = te;
      var se = le,
        ce = n(3),
        ue = (n(1949), n(68)),
        de = n(51);
      function pe() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function i(n, a, o, i) {
          var s = a && a.prototype instanceof l ? a : l,
            c = Object.create(s.prototype);
          return (
            ge(
              c,
              "_invoke",
              (function (n, a, o) {
                var i,
                  l,
                  s,
                  c = 0,
                  u = o || [],
                  d = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: g,
                    f: g.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (s = e), (p.n = n), r);
                    },
                  };
                function g(n, a) {
                  for (
                    l = n, s = a, t = 0;
                    !d && c && !o && t < u.length;
                    t++
                  ) {
                    var o,
                      i = u[t],
                      g = p.p,
                      m = i[2];
                    n > 3
                      ? (o = m === a) &&
                        ((s = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= g &&
                        ((o = n < 2 && g < i[1])
                          ? ((l = 0), (p.v = a), (p.n = i[1]))
                          : g < m &&
                            (o = n < 3 || i[0] > a || a > m) &&
                            ((i[4] = n), (i[5] = a), (p.n = m), (l = 0)));
                  }
                  if (o || n > 1) return r;
                  throw ((d = !0), a);
                }
                return function (o, u, m) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === u && g(u, m), l = u, s = m;
                    (t = l < 2 ? e : s) || !d;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), g(l, s))
                          : (p.n = s)
                        : (p.v = s));
                    try {
                      if (((c = 2), i)) {
                        if ((l || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, s)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((s = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (d = p.n < 0) ? s : n.call(a, p)) !== r)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (s = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, o, i),
              !0,
            ),
            c
          );
        }
        var r = {};
        function l() {}
        function s() {}
        function c() {}
        t = Object.getPrototypeOf;
        var u = [][a]
            ? t(t([][a]()))
            : (ge((t = {}), a, function () {
                return this;
              }),
              t),
          d = (c.prototype = l.prototype = Object.create(u));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), ge(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (s.prototype = c),
          ge(d, "constructor", c),
          ge(c, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          ge(c, o, "GeneratorFunction"),
          ge(d),
          ge(d, o, "Generator"),
          ge(d, a, function () {
            return this;
          }),
          ge(d, "toString", function () {
            return "[object Generator]";
          }),
          (pe = function () {
            return { w: i, m: p };
          })()
        );
      }
      function ge(e, t, n, a) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (ge = function (e, t, n, a) {
          if (t)
            o
              ? o(e, t, {
                  value: n,
                  enumerable: !a,
                  configurable: !a,
                  writable: !a,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              ge(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, a);
      }
      function me(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = he(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var a = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return a >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[a++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          r = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((r = e.done), e);
          },
          e: function (e) {
            ((l = !0), (i = e));
          },
          f: function () {
            try {
              r || null == n.return || n.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function fe(e, t, n, a, o, i, r) {
        try {
          var l = e[i](r),
            s = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(s) : Promise.resolve(s).then(a, o);
      }
      function be(e, t) {
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
                o,
                i,
                r,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (a = i.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    s = !0
                  );
              } catch (e) {
                ((c = !0), (o = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          he(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function he(e, t) {
        if (e) {
          if ("string" == typeof e) return ve(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? ve(e, t)
                : void 0
          );
        }
      }
      function ve(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var xe = function (e) {
          var t = e.selectedIndex,
            n = e.setSelectedIndex,
            a = Object(l.d)(),
            i = Object(s.a)().t,
            c = be(
              Object(l.e)(function (e) {
                return [
                  _.a.getDisplayedSignatures(e),
                  _.a.getSelectedDisplayedSignatureIndex(e),
                  _.a.isElementDisabled(e, "defaultSignatureDeleteButton"),
                  _.a.getSavedInitials(e),
                  _.a.getSelectedDisplayedInitialsIndex(e),
                  _.a.getSignatureMode(e),
                  _.a.getInitialsOffset(e),
                ];
              }),
              7,
            ),
            u = c[0],
            d = c[1],
            p = c[2],
            g = c[3],
            m = c[4],
            f = c[5],
            b = c[6],
            x = v.a.getToolsFromAllDocumentViewers("AnnotationCreateSignature"),
            y = (function () {
              var e,
                t =
                  ((e = pe().m(function e(t) {
                    var n, o, i, r, l, s, c;
                    return pe().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            if (
                              ((n = f === h.a.FULL_SIGNATURE),
                              (i = (o = t - b) < 0))
                            )
                              a(ce.a.setInitialsOffset(b - 1));
                            else if (
                              (x[0].deleteSavedInitials(o), m === o && !i)
                            ) {
                              (a(ce.a.setSelectedDisplayedInitialsIndex(0)),
                                (r = me(x)));
                              try {
                                for (r.s(); !(l = r.n()).done; )
                                  l.value.hidePreview();
                              } catch (e) {
                                r.e(e);
                              } finally {
                                r.f();
                              }
                              v.a.setToolMode(ue.a);
                            }
                            if ((x[0].deleteSavedSignature(t), d === t)) {
                              (a(ce.a.setSelectedDisplayedSignatureIndex(0)),
                                (s = me(x)));
                              try {
                                for (s.s(); !(c = s.n()).done; )
                                  c.value.hidePreview();
                              } catch (e) {
                                s.e(e);
                              } finally {
                                s.f();
                              }
                              v.a.setToolMode(ue.a);
                            } else
                              (n ? t < d : o < m) &&
                                a(
                                  ce.a.setSelectedDisplayedSignatureIndex(
                                    d - 1,
                                  ),
                                );
                          case 1:
                            return e.a(2);
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (a, o) {
                      var i = e.apply(t, n);
                      function r(e) {
                        fe(i, a, o, r, l, "next", e);
                      }
                      function l(e) {
                        fe(i, a, o, r, l, "throw", e);
                      }
                      r(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            w = new Array(b).concat(g);
          return o.a.createElement(
            "div",
            {
              className: r()("SavedSignatures", { empty: !u || u.length < 1 }),
            },
            u.length
              ? u.map(function (e, a) {
                  return o.a.createElement(
                    "div",
                    {
                      key: a,
                      className: r()("signature-row", {
                        active: t === a,
                        "no-initials": !(null != w && w[a]),
                      }),
                      onClick: function () {
                        return n(a);
                      },
                    },
                    o.a.createElement(
                      "div",
                      { className: "inputContainer" },
                      o.a.createElement("input", {
                        type: "radio",
                        onChange: function () {
                          return n(a);
                        },
                        checked: a === t,
                      }),
                      o.a.createElement(
                        "div",
                        { className: "contentContainer" },
                        o.a.createElement(
                          "div",
                          { className: "imgContainer" },
                          o.a.createElement("img", {
                            alt: i("option.toolsOverlay.signatureAltText"),
                            src: u[a].imgSrc,
                          }),
                        ),
                        (null == w ? void 0 : w[a]) &&
                          o.a.createElement(
                            "div",
                            { className: "imgContainer" },
                            o.a.createElement("img", {
                              alt: i("option.toolsOverlay.signatureAltText"),
                              src: w[a].imgSrc,
                            }),
                          ),
                        !p &&
                          o.a.createElement(
                            "button",
                            {
                              className: "icon-button",
                              "data-element": "defaultSignatureDeleteButton",
                              onClick: function () {
                                return y(a);
                              },
                            },
                            o.a.createElement(de.a, {
                              glyph: "icon-delete-line",
                            }),
                          ),
                      ),
                    ),
                    o.a.createElement(
                      "div",
                      { className: "labelContainer" },
                      o.a.createElement(
                        "div",
                        { className: "signatureLabel" },
                        i("option.type.signature"),
                      ),
                      (null == w ? void 0 : w[a]) &&
                        o.a.createElement(
                          "div",
                          { className: "intialsLabel" },
                          i("option.type.initials"),
                        ),
                    ),
                  );
                })
              : o.a.createElement(
                  "div",
                  { className: "emptyListContainer" },
                  i("option.signatureModal.noSignatures"),
                ),
          );
        },
        ye = n(5),
        we = n(229),
        Se = n(373),
        Ee = n(182);
      n(1951);
      function Ae() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function i(n, a, o, i) {
          var s = a && a.prototype instanceof l ? a : l,
            c = Object.create(s.prototype);
          return (
            Me(
              c,
              "_invoke",
              (function (n, a, o) {
                var i,
                  l,
                  s,
                  c = 0,
                  u = o || [],
                  d = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: g,
                    f: g.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (s = e), (p.n = n), r);
                    },
                  };
                function g(n, a) {
                  for (
                    l = n, s = a, t = 0;
                    !d && c && !o && t < u.length;
                    t++
                  ) {
                    var o,
                      i = u[t],
                      g = p.p,
                      m = i[2];
                    n > 3
                      ? (o = m === a) &&
                        ((s = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= g &&
                        ((o = n < 2 && g < i[1])
                          ? ((l = 0), (p.v = a), (p.n = i[1]))
                          : g < m &&
                            (o = n < 3 || i[0] > a || a > m) &&
                            ((i[4] = n), (i[5] = a), (p.n = m), (l = 0)));
                  }
                  if (o || n > 1) return r;
                  throw ((d = !0), a);
                }
                return function (o, u, m) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === u && g(u, m), l = u, s = m;
                    (t = l < 2 ? e : s) || !d;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), g(l, s))
                          : (p.n = s)
                        : (p.v = s));
                    try {
                      if (((c = 2), i)) {
                        if ((l || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, s)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((s = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (d = p.n < 0) ? s : n.call(a, p)) !== r)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (s = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, o, i),
              !0,
            ),
            c
          );
        }
        var r = {};
        function l() {}
        function s() {}
        function c() {}
        t = Object.getPrototypeOf;
        var u = [][a]
            ? t(t([][a]()))
            : (Me((t = {}), a, function () {
                return this;
              }),
              t),
          d = (c.prototype = l.prototype = Object.create(u));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), Me(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (s.prototype = c),
          Me(d, "constructor", c),
          Me(c, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          Me(c, o, "GeneratorFunction"),
          Me(d),
          Me(d, o, "Generator"),
          Me(d, a, function () {
            return this;
          }),
          Me(d, "toString", function () {
            return "[object Generator]";
          }),
          (Ae = function () {
            return { w: i, m: p };
          })()
        );
      }
      function Me(e, t, n, a) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (Me = function (e, t, n, a) {
          if (t)
            o
              ? o(e, t, {
                  value: n,
                  enumerable: !a,
                  configurable: !a,
                  writable: !a,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              Me(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, a);
      }
      function ke(e, t, n, a, o, i, r) {
        try {
          var l = e[i](r),
            s = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(s) : Promise.resolve(s).then(a, o);
      }
      function Ce(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(t, n);
            function r(e) {
              ke(i, a, o, r, l, "next", e);
            }
            function l(e) {
              ke(i, a, o, r, l, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function Oe(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = Ie(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var a = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return a >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[a++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          r = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((r = e.done), e);
          },
          e: function (e) {
            ((l = !0), (i = e));
          },
          f: function () {
            try {
              r || null == n.return || n.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function je(e, t) {
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
                o,
                i,
                r,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (a = i.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    s = !0
                  );
              } catch (e) {
                ((c = !0), (o = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          Ie(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ie(e, t) {
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
      }
      function Te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var Ne = function () {
        var e = je(
            Object(l.e)(function (e) {
              return [
                _.a.isElementDisabled(e, ye.a.SIGNATURE_MODAL),
                _.a.isElementOpen(e, ye.a.SIGNATURE_MODAL),
                _.a.getActiveToolName(e),
                _.a.getSignatureMode(e),
                _.a.getActiveDocumentViewerKey(e),
                _.a.getIsInitialsModeEnabled(e),
                _.a.isElementDisabled(e, ye.a.SAVED_SIGNATURES_TAB),
                _.a.getSelectedTab(e, ye.a.SIGNATURE_MODAL),
                _.a.getDisplayedSignatures(e),
                _.a.getSavedInitials(e),
              ];
            }),
            10,
          ),
          t = e[0],
          n = e[1],
          i = e[2],
          u = e[3],
          d = e[4],
          p = e[5],
          g = e[6],
          m = e[7],
          f = e[8],
          b = e[9],
          x = v.a.getToolsFromAllDocumentViewers("AnnotationCreateSignature"),
          y = je(Object(a.useState)(!0), 2),
          w = y[0],
          S = y[1],
          E = je(Object(a.useState)(0), 2),
          A = E[0],
          M = E[1],
          k = Object(l.d)(),
          C = je(Object(s.a)(), 1)[0];
        (Object(we.a)(
          function () {
            "AnnotationCreateSignature" !== i &&
              k(
                ce.a.closeElements([
                  ye.a.SIGNATURE_MODAL,
                  ye.a.SIGNATURE_OVERLAY,
                ]),
              );
          },
          [k, i],
        ),
          Object(a.useEffect)(
            function () {
              n &&
                k(
                  ce.a.closeElements([
                    ye.a.PRINT_MODAL,
                    ye.a.LOADING_MODAL,
                    ye.a.PROGRESS_MODAL,
                    ye.a.ERROR_MODAL,
                  ]),
                );
            },
            [k, n],
          ));
        var O = function () {
            var e,
              t = Oe(x);
            try {
              for (t.s(); !(e = t.n()).done; ) {
                var n = e.value;
                (n.clearLocation(), n.setSignature(null), n.setInitials(null));
              }
            } catch (e) {
              t.e(e);
            } finally {
              t.f();
            }
            k(ce.a.closeElement(ye.a.SIGNATURE_MODAL));
          },
          j = (function () {
            var e = Ce(
              Ae().m(function e() {
                return Ae().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        (T(), p && N());
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
          T = (function () {
            var e = Ce(
              Ae().m(function e() {
                var t, n, a, o, i, r;
                return Ae().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          (x[0].saveSignatures(
                            x[0].getFullSignatureAnnotation(),
                          ),
                            (t = 1));
                        case 1:
                          if (!(t < x.length)) {
                            e.n = 3;
                            break;
                          }
                          return (
                            (e.n = 2),
                            x[t].setSignature(x[0].getFullSignatureAnnotation())
                          );
                        case 2:
                          (t++, (e.n = 1));
                          break;
                        case 3:
                          return (
                            (n = x[d - 1]),
                            (e.n = 4),
                            n.isEmptySignature()
                          );
                        case 4:
                          if (e.v) {
                            e.n = 14;
                            break;
                          }
                          if (
                            (v.a.setToolMode("AnnotationCreateSignature"),
                            u !== h.a.FULL_SIGNATURE)
                          ) {
                            e.n = 14;
                            break;
                          }
                          if (!n.hasLocation()) {
                            e.n = 6;
                            break;
                          }
                          return ((e.n = 5), n.addSignature());
                        case 5:
                          e.n = 13;
                          break;
                        case 6:
                          ((a = Oe(x)), (e.p = 7), a.s());
                        case 8:
                          if ((o = a.n()).done) {
                            e.n = 10;
                            break;
                          }
                          return ((i = o.value), (e.n = 9), i.showPreview());
                        case 9:
                          e.n = 8;
                          break;
                        case 10:
                          e.n = 12;
                          break;
                        case 11:
                          ((e.p = 11), (r = e.v), a.e(r));
                        case 12:
                          return ((e.p = 12), a.f(), e.f(12));
                        case 13:
                          k(ce.a.closeElement(ye.a.SIGNATURE_MODAL));
                        case 14:
                          return e.a(2);
                      }
                  },
                  e,
                  null,
                  [[7, 11, 12, 13]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          N = (function () {
            var e = Ce(
              Ae().m(function e() {
                var t, n, a, o, i, r;
                return Ae().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          (x[0].saveInitials(x[0].getInitialsAnnotation()),
                            (t = 1));
                        case 1:
                          if (!(t < x.length)) {
                            e.n = 3;
                            break;
                          }
                          return (
                            (e.n = 2),
                            x[t].saveInitials(x[0].getInitialsAnnotation())
                          );
                        case 2:
                          (t++, (e.n = 1));
                          break;
                        case 3:
                          return (
                            (n = x[d - 1]),
                            (e.n = 4),
                            n.isEmptyInitialsSignature()
                          );
                        case 4:
                          if (e.v) {
                            e.n = 14;
                            break;
                          }
                          if (
                            (v.a.setToolMode("AnnotationCreateSignature"),
                            u !== h.a.INITIALS)
                          ) {
                            e.n = 13;
                            break;
                          }
                          if (!n.hasLocation()) {
                            e.n = 6;
                            break;
                          }
                          return ((e.n = 5), n.addInitials());
                        case 5:
                          e.n = 13;
                          break;
                        case 6:
                          ((a = Oe(x)), (e.p = 7), a.s());
                        case 8:
                          if ((o = a.n()).done) {
                            e.n = 10;
                            break;
                          }
                          return (
                            (i = o.value),
                            (e.n = 9),
                            i.showInitialsPreview()
                          );
                        case 9:
                          e.n = 8;
                          break;
                        case 10:
                          e.n = 12;
                          break;
                        case 11:
                          ((e.p = 11), (r = e.v), a.e(r));
                        case 12:
                          return ((e.p = 12), a.f(), e.f(12));
                        case 13:
                          (k(ce.a.closeElement(ye.a.SIGNATURE_MODAL)),
                            k(ce.a.setSignatureMode(h.a.FULL_SIGNATURE)));
                        case 14:
                          return e.a(2);
                      }
                  },
                  e,
                  null,
                  [[7, 11, 12, 13]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          D = (function () {
            var e = Ce(
              Ae().m(function e(t) {
                var n, a, o, i, r, l, s;
                return Ae().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          ((n = u === h.a.FULL_SIGNATURE),
                            k(
                              ce.a[
                                n
                                  ? "setSelectedDisplayedSignatureIndex"
                                  : "setSelectedDisplayedInitialsIndex"
                              ](t),
                            ),
                            (a = n ? f[t] : b[t]),
                            (o = a.annotation),
                            v.a.setToolMode("AnnotationCreateSignature"),
                            (i = Oe(x)),
                            (e.p = 1),
                            i.s());
                        case 2:
                          if ((r = i.n()).done) {
                            e.n = 7;
                            break;
                          }
                          return (
                            (l = r.value),
                            (e.n = 3),
                            l[n ? "setSignature" : "setInitials"](o)
                          );
                        case 3:
                          if (!l.hasLocation()) {
                            e.n = 5;
                            break;
                          }
                          return (
                            (e.n = 4),
                            l[n ? "addSignature" : "addInitials"]()
                          );
                        case 4:
                          e.n = 6;
                          break;
                        case 5:
                          return (
                            (e.n = 6),
                            l[n ? "showPreview" : "showInitialsPreview"]()
                          );
                        case 6:
                          e.n = 2;
                          break;
                        case 7:
                          e.n = 9;
                          break;
                        case 8:
                          ((e.p = 8), (s = e.v), i.e(s));
                        case 9:
                          return ((e.p = 9), i.f(), e.f(9));
                        case 10:
                          k(ce.a.closeElement(ye.a.SIGNATURE_MODAL));
                        case 11:
                          return e.a(2);
                      }
                  },
                  e,
                  null,
                  [[1, 8, 9, 10]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          R = Object(a.useCallback)(
            function () {
              S(!0);
            },
            [w],
          ),
          P = Object(a.useCallback)(
            function () {
              S(!1);
            },
            [w],
          ),
          L = r()({ Modal: !0, SignatureModal: !0, open: n, closed: !n }),
          F = "savedSignaturePanelButton" === m;
        return t
          ? null
          : o.a.createElement(
              "div",
              { className: L, "data-element": ye.a.SIGNATURE_MODAL },
              o.a.createElement(
                Se.a,
                {
                  title: C("option.signatureModal.modalName"),
                  closeHandler: O,
                  onCloseClick: O,
                  isOpen: n,
                  swipeToClose: !0,
                },
                o.a.createElement(
                  "div",
                  {
                    className: r()("container", { "include-initials": p }),
                    onMouseDown: function (e) {
                      return e.stopPropagation();
                    },
                  },
                  o.a.createElement("div", { className: "swipe-indicator" }),
                  o.a.createElement(
                    c.d,
                    { id: "signatureModal" },
                    o.a.createElement(
                      "div",
                      { className: "tabs-header-container" },
                      o.a.createElement(
                        "div",
                        { className: "tab-list" },
                        !g &&
                          o.a.createElement(
                            o.a.Fragment,
                            null,
                            o.a.createElement(
                              c.a,
                              { dataElement: "savedSignaturePanelButton" },
                              o.a.createElement(
                                "button",
                                { className: "tab-options-button" },
                                C("option.type.saved"),
                              ),
                            ),
                            o.a.createElement("div", {
                              className: "tab-options-divider",
                            }),
                          ),
                        o.a.createElement(
                          c.a,
                          { dataElement: "inkSignaturePanelButton" },
                          o.a.createElement(
                            "button",
                            { className: "tab-options-button" },
                            C("action.draw"),
                          ),
                        ),
                        o.a.createElement("div", {
                          className: "tab-options-divider",
                        }),
                        o.a.createElement(
                          c.a,
                          { dataElement: "textSignaturePanelButton" },
                          o.a.createElement(
                            "button",
                            { className: "tab-options-button" },
                            C("action.type"),
                          ),
                        ),
                        o.a.createElement("div", {
                          className: "tab-options-divider",
                        }),
                        o.a.createElement(
                          c.a,
                          { dataElement: "imageSignaturePanelButton" },
                          o.a.createElement(
                            "button",
                            { className: "tab-options-button" },
                            C("action.upload"),
                          ),
                        ),
                      ),
                    ),
                    !g &&
                      o.a.createElement(
                        c.c,
                        { dataElement: "savedSignaturePanel" },
                        o.a.createElement(xe, {
                          selectedIndex: A,
                          setSelectedIndex: M,
                        }),
                      ),
                    o.a.createElement(
                      c.c,
                      { dataElement: "inkSignaturePanel" },
                      o.a.createElement(I, {
                        isModalOpen: n,
                        enableCreateButton: P,
                        disableCreateButton: R,
                        isInitialsModeEnabled: p,
                      }),
                    ),
                    o.a.createElement(
                      c.c,
                      { dataElement: "textSignaturePanel" },
                      o.a.createElement($, {
                        isModalOpen: n,
                        enableCreateButton: P,
                        disableCreateButton: R,
                        isInitialsModeEnabled: p,
                      }),
                    ),
                    o.a.createElement(
                      c.c,
                      { dataElement: "imageSignaturePanel" },
                      o.a.createElement(se, {
                        isModalOpen: n,
                        enableCreateButton: P,
                        disableCreateButton: R,
                        isInitialsModeEnabled: p,
                      }),
                    ),
                    o.a.createElement(
                      "div",
                      { className: "footer" },
                      o.a.createElement(
                        "button",
                        {
                          className: "signature-create",
                          onClick: Object(Ee.a)(
                            F
                              ? function () {
                                  return D(A);
                                }
                              : j,
                          ),
                          disabled: F ? !F || !f.length || !n : !n || w,
                          title: p ? C("message.signatureRequired") : "",
                        },
                        C(F ? "action.apply" : "action.create"),
                      ),
                    ),
                  ),
                ),
              ),
            );
      };
      t.default = Ne;
    },
  },
]);
//# sourceMappingURL=chunk.38.js.map
