(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    1867: function (t, e, n) {
      var o = n(35),
        a = n(1957);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, ""]]);
      var r = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function t(e, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(e).forEach((t) => o.push(t)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...t(e, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < e.length; o++) {
            const a = e[o];
            if (0 === o)
              (a.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (a.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(a, r);
      t.exports = a.locals || {};
    },
    1955: function (t, e, n) {
      var o = n(35),
        a = n(1956);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, ""]]);
      var r = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function t(e, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(e).forEach((t) => o.push(t)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...t(e, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < e.length; o++) {
            const a = e[o];
            if (0 === o)
              (a.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (a.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(a, r);
      t.exports = a.locals || {};
    },
    1956: function (t, e, n) {
      ((e = t.exports = n(36)(!1)).push([
        t.i,
        ".Watermark{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.Watermark .modal-container .wrapper .modal-content{padding:10px}.Watermark .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.Watermark .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.Watermark .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.Watermark .footer .modal-button.confirm{margin-inline-start:4px}.Watermark .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .footer .modal-button{padding:23px 8px}}.Watermark .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .swipe-indicator{width:32px}}.open.Watermark{visibility:visible}.closed.Watermark{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.Watermark .button-container .button.add-watermark:hover,.Watermark .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.Watermark .button-container .button.add-watermark,.Watermark .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.Watermark .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.Watermark .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.Watermark .footer .modal-button.cancel:hover,.Watermark .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.Watermark .footer .modal-button.cancel,.Watermark .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.Watermark .footer .modal-button.cancel.disabled,.Watermark .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.Watermark .footer .modal-button.cancel.disabled span,.Watermark .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.Watermark{z-index:110}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .modal-container{overflow:visible}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .modal-container{overflow:visible}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .h2{font-size:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .h2{font-size:16px}}.Watermark .StylePopup{position:absolute;margin-top:-140px;background:var(--preset-background);display:flex;flex-direction:column;justify-content:center;border-radius:0 0 4px 4px;box-shadow:0 0 3px 0 var(--box-shadow);align-items:center;z-index:85}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.Watermark .StylePopup{margin-top:0}}.Watermark .StylePopup .ColorPalette{padding:10px}.Watermark .style-container{display:flex}.Watermark .style-container .Button{margin-inline-end:8px}.Watermark .style-container .Button:hover{background:var(--popup-button-hover)}.Watermark .style-container .Button.active{background:var(--popup-button-active)}.Watermark .form-content-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:16px;width:100%}.Watermark .form-content-container form{width:auto}@media(min-width:315px)and (max-width:480px){.Watermark .form-content-container form{width:auto}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .form-content-container{flex-direction:column;padding:16px 16px 0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .form-content-container{flex-direction:column;padding:16px 16px 0}}.Watermark .font-form-fields{display:flex;flex-direction:column;margin:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .font-form-fields{flex-direction:row}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .font-form-fields{flex-direction:row}}.Watermark .font-form-fields .form-font-type{margin-top:16px;margin-inline-start:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .font-form-fields .form-font-type{width:160px;margin-inline-start:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .font-form-fields .form-font-type{width:160px;margin-inline-start:0}}.Watermark .font-form-fields .form-font-type label{font-weight:700}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .font-form-fields .form-font-type label{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .font-form-fields .form-font-type label{font-size:13px}}.Watermark .font-form-fields .form-font-type .Dropdown__wrapper{margin-top:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .font-form-fields .form-font-type .Dropdown__wrapper{width:160px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .font-form-fields .form-font-type .Dropdown__wrapper{width:160px}}.Watermark .font-form-fields .form-font-type .Dropdown__wrapper .Dropdown{text-align:start;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .font-form-fields .form-font-type .Dropdown__wrapper .Dropdown{height:28px;width:160px;z-index:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .font-form-fields .form-font-type .Dropdown__wrapper .Dropdown{height:28px;width:160px;z-index:0}}.Watermark .font-form-fields .form-font-type .Dropdown__wrapper .Dropdown__items{width:100%;inset-block-start:0}.Watermark .font-form-fields .form-font-type .Dropdown__wrapper#location .Dropdown__items{z-index:101}.Watermark .font-form-fields .form-font-size{margin-top:16px;margin-inline-start:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .font-form-fields .form-font-size{width:160px;margin-inline-start:8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .font-form-fields .form-font-size{width:160px;margin-inline-start:8px}}.Watermark .font-form-fields .form-font-size label{font-weight:700}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .font-form-fields .form-font-size label{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .font-form-fields .form-font-size label{font-size:13px}}.Watermark .font-form-fields .form-font-size .FontSizeDropdown{padding:2px;height:32px;margin-top:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .font-form-fields .form-font-size .FontSizeDropdown{height:28px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .font-form-fields .form-font-size .FontSizeDropdown{height:28px}}.Watermark .font-form-fields .form-font-size .FontSizeDropdown .icon-button{cursor:pointer;width:14px;height:14px}.Watermark .font-form-fields .form-font-size .FontSizeDropdown .icon-button>.Icon{color:var(--icon-color);width:12px;height:16px;margin-top:2px}.Watermark .watermark-settings{display:flex;flex-direction:column;width:330px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings{width:100%;height:374px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings{width:100%;height:374px}}.Watermark .watermark-settings .form-field{display:flex;flex-direction:column;margin:16px 0 0 16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings .form-field{margin:0;width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings .form-field{margin:0;width:100%}}.Watermark .watermark-settings .form-field label{margin-bottom:8px;font-weight:700}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings .form-field label{margin-top:16px;font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings .form-field label{margin-top:16px;font-size:13px}}.Watermark .watermark-settings .form-field .text-input,.Watermark .watermark-settings .form-field select{height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings .form-field .text-input,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings .form-field select{height:28px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings .form-field .text-input,.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings .form-field select{height:28px}}.Watermark .watermark-settings .form-field.opacity-slider{display:flex;margin-bottom:0}.Watermark .watermark-settings .form-field.opacity-slider .slider-property{font-weight:700}.Watermark .watermark-settings .form-field.opacity-slider .slider-svg-container{margin:0;height:30px}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.Watermark .watermark-settings .form-field.opacity-slider{align-items:stretch}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings .form-field.opacity-slider{font-size:13px;margin-top:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings .form-field.opacity-slider{font-size:13px;margin-top:16px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings .form-field .Dropdown__wrapper{width:328px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings .form-field .Dropdown__wrapper{width:328px}}.Watermark .watermark-settings .form-field .Dropdown__wrapper button{width:314px}.Watermark .watermark-settings .form-field .Dropdown__wrapper .Dropdown{text-align:start;width:314px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings .form-field .Dropdown__wrapper .Dropdown{height:28px;z-index:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings .form-field .Dropdown__wrapper .Dropdown{height:28px;z-index:0}}.Watermark .watermark-settings .form-field .Dropdown__wrapper .Dropdown__items{width:100%;inset-block-start:0}.Watermark .watermark-settings .form-field .Dropdown__wrapper#location .Dropdown__items{z-index:101}.Watermark .watermark-settings .colorSelect{width:18px;height:18px;margin:7px;margin-inline-end:8px;border-radius:10000000px}.Watermark .watermark-settings .white-color{border:1px solid var(--white-color-palette-border)}.Watermark .watermark-settings .slider-input-field{height:32px}.Watermark .canvas-container{display:flex;justify-content:center;align-items:center;width:500px;height:436px;background-color:var(--file-preview-background);border:1px solid var(--lighter-border)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .canvas-container{display:block;width:328px;height:261px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .canvas-container{display:block;width:328px;height:261px}}.Watermark .canvas-container canvas{width:325px!important}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .canvas-container canvas{width:328px;height:261px;-o-object-fit:contain;object-fit:contain;background-color:var(--file-preview-background)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .canvas-container canvas{width:328px;height:261px;-o-object-fit:contain;object-fit:contain;background-color:var(--file-preview-background)}}.Watermark .divider{height:1px;width:100%;background:var(--divider)}.Watermark .divider.separator{margin-top:16px}.Watermark .button-container{display:flex;justify-content:space-between;align-items:baseline;width:100%;padding:16px}.Watermark .button-container .button{padding:6px 18px;width:auto}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .button-container .button.add-watermark{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .button-container .button.add-watermark{font-size:13px}}.Watermark .button-container .button.cancel{color:var(--secondary-button-text);background:none}.Watermark .button-container .button.cancel:hover{color:var(--secondary-button-hover)}.Watermark .button-container .reset-settings{background-color:transparent;cursor:pointer;background:none;border:0;border-radius:4px;color:var(--secondary-button-text);display:flex;font-size:13px;padding:6px 18px}:host(:not([data-tabbing=true])) .Watermark .button-container .reset-settings,html:not([data-tabbing=true]) .Watermark .button-container .reset-settings{outline:none}.Watermark .button-container .reset-settings:hover{color:var(--secondary-button-hover)}.Watermark .button-container .reset-settings.focus-visible,.Watermark .button-container .reset-settings:focus-visible{outline:var(--focus-visible-outline)!important}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .button-container .reset-settings{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .button-container .reset-settings{font-size:13px}}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1957: function (t, e, n) {
      ((e = t.exports = n(36)(!1)).push([
        t.i,
        ".open.PrintModal{visibility:visible}.closed.PrintModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.PrintModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.PrintModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.PrintModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.PrintModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.PrintModal .footer .modal-button.cancel:hover,.PrintModal .footer .modal-button.secondary-btn-custom:hover,.PrintModal .modal-container .apply-watermark:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.PrintModal .footer .modal-button.cancel,.PrintModal .footer .modal-button.secondary-btn-custom,.PrintModal .modal-container .apply-watermark{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.PrintModal .footer .modal-button.cancel.disabled,.PrintModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.PrintModal .footer .modal-button.cancel.disabled span,.PrintModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.PrintModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.PrintModal .modal-container .wrapper .modal-content{padding:10px}.PrintModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.PrintModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.PrintModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.PrintModal .footer .modal-button.confirm{margin-inline-start:4px}.PrintModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .footer .modal-button{padding:23px 8px}}.PrintModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .swipe-indicator{width:32px}}.PrintModal .modal-container{width:480px;overflow:hidden}.PrintModal .modal-container .settings{display:flex;flex-direction:column;width:100%;padding:24px}.PrintModal .modal-container .settings .ui__choice{margin:10px 4px 4px 0}.PrintModal .modal-container .settings .ui__choice--disabled{opacity:.5}.PrintModal .modal-container .settings .ui__input{border:none}.PrintModal .modal-container .settings .ui__input.ui__input--focused{box-shadow:none}.PrintModal .modal-container .settings .settings-form{margin-bottom:0}.PrintModal .modal-container .settings .specifyPagesChoiceLabel{display:flex}.PrintModal .modal-container .settings .specifyPagesChoiceLabel .specifyPagesExampleLabel{margin-inline-start:4px;color:var(--faded-text)}.PrintModal .modal-container .settings .page-number-input-container{margin-top:8px}.PrintModal .modal-container .divider{height:1px;width:100%;background:var(--divider)}.PrintModal .modal-container .section{padding-bottom:16px}.PrintModal .modal-container .section.watermark-section{padding-bottom:0}.PrintModal .modal-container .section .section-label{font-weight:700}.PrintModal .modal-container .section .hidden{display:none}.PrintModal .modal-container label.section-label,.PrintModal .modal-container label.ui__choice__label{padding:2px 0 2px 4px}.PrintModal .modal-container .print-quality-section-label{padding:0;margin-bottom:8px}.PrintModal .modal-container #printQualityOptions button.Dropdown{height:32px;margin-top:8px}.PrintModal .modal-container #printQualityOptions.Dropdown__wrapper .Dropdown{text-align:start}.PrintModal .modal-container #printQualityOptions.Dropdown__wrapper .Dropdown__items{width:274px;inset-inline-start:0}.PrintModal .modal-container input[type=text]{width:100%;height:32px;padding-inline-start:8px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding-bottom:6px;padding-inline-end:42px;padding-top:4px;margin-top:6px}.PrintModal .modal-container input[type=text]:focus{outline:none;border:1px solid var(--focus-border)}.PrintModal .modal-container input[type=text]::-moz-placeholder{color:var(--placeholder-text)}.PrintModal .modal-container input[type=text]::placeholder{color:var(--placeholder-text)}.PrintModal .modal-container input[type=text].page-number-input--error{border-color:var(--error-border-color)}.PrintModal .modal-container .total{display:flex;flex-direction:row;padding-bottom:16px;color:var(--text-color)}.PrintModal .modal-container .background{width:100%;height:10px;transform:translateY(-50%);fill:#e2f3fe}.PrintModal .modal-container .progress{height:10px;transform:translateY(-50%);fill:#077bc5}.PrintModal .modal-container .buttons{display:flex;flex-direction:row;justify-content:flex-end;width:100%;padding:20px}.PrintModal .modal-container .buttons .button{background-color:transparent;display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);padding:6px 18px;width:auto;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;border:0;height:32px;cursor:pointer;font-size:13px}:host(:not([data-tabbing=true])) .PrintModal .modal-container .buttons .button,html:not([data-tabbing=true]) .PrintModal .modal-container .buttons .button{outline:none}.PrintModal .modal-container .buttons .button:hover:not(:disabled){background:var(--primary-button-hover)}.PrintModal .modal-container .buttons .button:disabled{opacity:.5;cursor:auto}.PrintModal .modal-container .specify-pages-choice{margin-bottom:18px}.PrintModal .modal-container .specify-pages-choice input{width:195px;margin-top:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .modal-container .specify-pages-choice input{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .modal-container .specify-pages-choice input{width:100%}}.PrintModal .modal-container .specify-pages-choice label{display:grid}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .modal-container .specify-pages-choice label{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .modal-container .specify-pages-choice label{width:100%}}.PrintModal .modal-container .specify-pages-choice.ui__choice--checked{align-items:baseline;height:80px}.PrintModal .modal-container .specify-pages-choice.ui__choice--checked .ui__choice__input{inset-block-start:3px}.PrintModal .modal-container .apply-watermark{margin-top:10px;width:auto;padding:6px 16px}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2099: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(9),
        n(10),
        n(14),
        n(27),
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
        n(29),
        n(13));
      var o = n(0),
        a = n.n(o),
        r = n(3),
        i = n(4),
        l = n(6),
        s = n(5),
        c = n(1),
        d = n(166),
        p = n(252),
        m = n(304),
        u = (n(38), n(28), n(37), n(15)),
        f = n.n(u),
        b = n(2),
        h = n.n(b),
        g = n(1610),
        w = n(575),
        y =
          (n(30),
          n(34),
          n(81),
          n(50),
          n(31),
          n(1662),
          n(59),
          n(48),
          n(47),
          n(49),
          n(111),
          n(84),
          n(62),
          n(115),
          n(153),
          n(194)),
        x = n(318),
        k = n(1556),
        v = n(41),
        P = n(591),
        E = [
          "Arial",
          "Times New Roman",
          "Tahoma ",
          "Trebuchet MS",
          "Courier",
          "Verdana",
          "Georgia",
          "Palatino",
          "Comic Sans MS",
          "Arial Black",
          "Impact",
        ],
        W = (n(1955), n(373)),
        O = n(60),
        C = n(72),
        A = n(45);
      function S(t) {
        return (S =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function M(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          (e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(n), !0).forEach(function (e) {
                F(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : M(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function _() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.toStringTag || "@@toStringTag";
        function r(n, o, a, r) {
          var s = o && o.prototype instanceof l ? o : l,
            c = Object.create(s.prototype);
          return (
            T(
              c,
              "_invoke",
              (function (n, o, a) {
                var r,
                  l,
                  s,
                  c = 0,
                  d = a || [],
                  p = !1,
                  m = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: u,
                    f: u.bind(t, 4),
                    d: function (e, n) {
                      return ((r = e), (l = 0), (s = t), (m.n = n), i);
                    },
                  };
                function u(n, o) {
                  for (
                    l = n, s = o, e = 0;
                    !p && c && !a && e < d.length;
                    e++
                  ) {
                    var a,
                      r = d[e],
                      u = m.p,
                      f = r[2];
                    n > 3
                      ? (a = f === o) &&
                        ((s = r[(l = r[4]) ? 5 : ((l = 3), 3)]),
                        (r[4] = r[5] = t))
                      : r[0] <= u &&
                        ((a = n < 2 && u < r[1])
                          ? ((l = 0), (m.v = o), (m.n = r[1]))
                          : u < f &&
                            (a = n < 3 || r[0] > o || o > f) &&
                            ((r[4] = n), (r[5] = o), (m.n = f), (l = 0)));
                  }
                  if (a || n > 1) return i;
                  throw ((p = !0), o);
                }
                return function (a, d, f) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === d && u(d, f), l = d, s = f;
                    (e = l < 2 ? t : s) || !p;

                  ) {
                    r ||
                      (l
                        ? l < 3
                          ? (l > 1 && (m.n = -1), u(l, s))
                          : (m.n = s)
                        : (m.v = s));
                    try {
                      if (((c = 2), r)) {
                        if ((l || (a = "next"), (e = r[a]))) {
                          if (!(e = e.call(r, s)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((s = e.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (e = r.return) && e.call(r),
                            l < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  a +
                                  "' method",
                              )),
                              (l = 1)));
                        r = t;
                      } else if ((e = (p = m.n < 0) ? s : n.call(o, m)) !== i)
                        break;
                    } catch (e) {
                      ((r = t), (l = 1), (s = e));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: e, done: p };
                };
              })(n, a, r),
              !0,
            ),
            c
          );
        }
        var i = {};
        function l() {}
        function s() {}
        function c() {}
        e = Object.getPrototypeOf;
        var d = [][o]
            ? e(e([][o]()))
            : (T((e = {}), o, function () {
                return this;
              }),
              e),
          p = (c.prototype = l.prototype = Object.create(d));
        function m(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, c)
              : ((t.__proto__ = c), T(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(p)),
            t
          );
        }
        return (
          (s.prototype = c),
          T(p, "constructor", c),
          T(c, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          T(c, a, "GeneratorFunction"),
          T(p),
          T(p, a, "Generator"),
          T(p, o, function () {
            return this;
          }),
          T(p, "toString", function () {
            return "[object Generator]";
          }),
          (_ = function () {
            return { w: r, m: m };
          })()
        );
      }
      function T(t, e, n, o) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (t) {
          a = 0;
        }
        (T = function (t, e, n, o) {
          if (e)
            a
              ? a(t, e, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (t[e] = n);
          else {
            var r = function (e, n) {
              T(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(t, e, n, o);
      }
      function D(t, e, n, o, a, r, i) {
        try {
          var l = t[r](i),
            s = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(s) : Promise.resolve(s).then(o, a);
      }
      function I(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, a) {
            var r = t.apply(e, n);
            function i(t) {
              D(r, o, a, i, l, "next", t);
            }
            function l(t) {
              D(r, o, a, i, l, "throw", t);
            }
            i(void 0);
          });
        };
      }
      function N(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, V(o.key), o));
        }
      }
      function L(t, e, n) {
        return (
          (e = z(e)),
          (function (t, e) {
            if (e && ("object" == S(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], z(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function z(t) {
        return (z = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function R(t, e) {
        return (R = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function F(t, e, n) {
        return (
          (e = V(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function V(t) {
        var e = (function (t, e) {
          if ("object" != S(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(t, e || "default");
            if ("object" != S(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == S(e) ? e : e + "";
      }
      var G = {
          CENTER: "center",
          TOP_LEFT: "topLeft",
          TOP_RIGHT: "topRight",
          TOP_CENTER: "topCenter",
          BOT_LEFT: "bottomLeft",
          BOT_RIGHT: "bottomRight",
          BOT_CENTER: "bottomCenter",
        },
        B = "fontSize",
        H = "text",
        U = "color",
        Q = "opacity",
        q = "font",
        Y = "isBolded",
        K = "isItalic",
        J = "isUnderlined",
        $ = F(
          F(
            F(
              F(
                F(
                  F(
                    F(F(F({}, "location", G.CENTER), B, 48), H, ""),
                    U,
                    new window.Core.Annotations.Color(228, 66, 52),
                  ),
                  Q,
                  100,
                ),
                q,
                E[0],
              ),
              Y,
              !1,
            ),
            K,
            !1,
          ),
          J,
          !1,
        ),
        X = F(
          F(
            F(
              F(
                F(
                  F(F({}, G.CENTER, "diagonal"), G.TOP_LEFT, "headerLeft"),
                  G.TOP_RIGHT,
                  "headerRight",
                ),
                G.TOP_CENTER,
                "headerCenter",
              ),
              G.BOT_LEFT,
              "footerLeft",
            ),
            G.BOT_RIGHT,
            "footerRight",
          ),
          G.BOT_CENTER,
          "footerCenter",
        ),
        Z = (function (t) {
          function e(t) {
            var n;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              F(
                (n = L(this, e, [t])),
                "handleWatermarkOnVisibilityChanged",
                function () {
                  n.props.isVisible
                    ? n.setState(
                        { locationSettings: n.state.previousLocationSettings },
                        I(
                          _().m(function t() {
                            return _().w(function (t) {
                              for (;;)
                                switch (t.n) {
                                  case 0:
                                    return ((t.n = 1), c.a.getWatermark());
                                  case 1:
                                    ((n.preExistingWatermark = t.v),
                                      n.addWatermarks());
                                  case 2:
                                    return t.a(2);
                                }
                            }, t);
                          }),
                        ),
                      )
                    : (n.removeWatermarkCreatedByModal(),
                      c.a.setWatermark(n.preExistingWatermark));
                },
              ),
              F(n, "addWatermarks", function () {
                var t = n.createWatermarks(),
                  e = n.props.t;
                c.a.setWatermark(t);
                var o = c.a.getPageHeight(n.props.pageIndexToView + 1),
                  a = 300 / c.a.getPageWidth(n.props.pageIndexToView + 1),
                  r = 300 / o,
                  i = Math.min(r, a),
                  l = n.props.pageIndexToView + 1;
                c.a.getDocument().loadCanvas({
                  pageNumber: l,
                  zoom: i,
                  drawComplete: function (t) {
                    var o = n.canvasContainerRef.current.childNodes;
                    (o &&
                      o.length > 0 &&
                      n.canvasContainerRef.current.removeChild(o[0]),
                      (t.style.border =
                        n.canvasContainerRef.current.style.border),
                      (t.style.height =
                        n.canvasContainerRef.current.style.height),
                      (t.style.backgroundColor =
                        n.canvasContainerRef.current.style.backgroundColor),
                      t.setAttribute("role", "img"),
                      t.setAttribute(
                        "aria-label",
                        "".concat(e("action.page"), " ").concat(l),
                      ),
                      n.canvasContainerRef.current.appendChild(t));
                  },
                });
              }),
              F(n, "constructWatermarkOption", function (t) {
                var e = [];
                return (
                  t.isBolded && e.push(c.a.getFontStyles().BOLD),
                  t.isItalic && e.push(c.a.getFontStyles().ITALIC),
                  t.isUnderlined && e.push(c.a.getFontStyles().UNDERLINE),
                  {
                    fontSize: t.fontSize,
                    fontFamily: t.font,
                    color: t.color.toString(),
                    opacity: t.opacity,
                    text: t.text,
                    fontStyles: e,
                  }
                );
              }),
              F(n, "createWatermarks", function () {
                var t = {};
                return (
                  Object.keys(G).forEach(function (e) {
                    var o = n.constructWatermarkOption(
                      n.state.locationSettings[e],
                    );
                    t[X[G[e]]] = o;
                  }),
                  t
                );
              }),
              F(n, "removeWatermarkCreatedByModal", function () {
                c.a.setWatermark({});
              }),
              F(n, "closeModal", function () {
                n.props.modalClosed();
              }),
              F(n, "handleInputChange", function (t, e) {
                var o = j({}, n.state.locationSettings),
                  a = n.getCurrentSelectedLocation();
                ((o[a] = j(j({}, o[a]), {}, F({}, t, e))),
                  n.setState({ locationSettings: o }, function () {
                    n.addWatermarks();
                  }));
              }),
              F(n, "resetForm", function (t) {
                t.preventDefault();
                var e = n.resetLocationSettings();
                n.setState({ locationSettings: e }, function () {
                  return n.addWatermarks();
                });
              }),
              F(n, "onOkPressed", function () {
                n.setState(
                  { previousLocationSettings: n.state.locationSettings },
                  function () {
                    n.props.modalClosed();
                    var t = n.createWatermarks();
                    n.props.formSubmitted(t);
                  },
                );
              }),
              F(n, "setColorPaletteVisibility", function (t) {
                n.setState({ isColorPaletteVisible: t });
              }),
              F(n, "onLocationChanged", function (t) {
                var e = j({}, n.state.locationSettings);
                (Object.keys(e).forEach(function (n) {
                  var o = e[n];
                  ((o = j(j({}, o), {}, { isSelected: t === n })), (e[n] = o));
                }),
                  n.setState({ locationSettings: e }, function () {
                    n.addWatermarks();
                  }));
              }),
              F(n, "resetLocationSettings", function () {
                var t = {};
                return (
                  Object.keys(G).forEach(function (e) {
                    var n = j(
                      j(
                        {},
                        Object.assign(
                          {},
                          ((function (t) {
                            if (null == t)
                              throw new TypeError("Cannot destructure " + t);
                          })($),
                          $),
                        ),
                      ),
                      {},
                      { isSelected: G[e] === $.location },
                    );
                    t[e] = n;
                  }),
                  t
                );
              }),
              F(n, "initializeLocationSettings", function () {
                var t = n.resetLocationSettings();
                return (
                  n.props.watermarkLocations &&
                    Object.keys(G).forEach(function (e) {
                      var o,
                        a,
                        r = G[e],
                        i =
                          null !== (o = n.props.watermarkLocations[X[r]]) &&
                          void 0 !== o &&
                          o;
                      if (i) {
                        var l = n.constructWatermarkOption(i);
                        t[e].text = l.text;
                        var s = i.color.slice(5).replace(")", "").split(","),
                          c = new window.Core.Annotations.Color(
                            s[0],
                            s[1],
                            s[2],
                            s[3],
                          );
                        ((t[e].color = c),
                          (t[e].opacity = l.opacity),
                          (t[e].fontSize = l.fontSize),
                          i.fontStyles &&
                            ((t[e].isBolded = i.fontStyles.includes("BOLD")),
                            (t[e].isItalic = i.fontStyles.includes("ITALIC")),
                            (t[e].isUnderlined =
                              i.fontStyles.includes("UNDERLINE"))));
                        var d =
                          null !== (a = i.fontFamily) && void 0 !== a && a;
                        (d && 0 !== d.trim().length) || (t[e] = $.font);
                      }
                    }),
                  t
                );
              }),
              F(n, "getKeyByValue", function (t, e) {
                return Object.keys(t).find(function (n) {
                  return t[n] === e;
                });
              }),
              F(n, "getCurrentSelectedLocation", function () {
                return Object.keys(n.state.locationSettings).find(function (t) {
                  return n.state.locationSettings[t].isSelected;
                });
              }),
              F(n, "onColorChanged", function (t) {
                var e = n.getCurrentSelectedLocation(),
                  o = n.state.locationSettings[e];
                o[U] = new window.Core.Annotations.Color(t.R, t.G, t.B);
                var a = j({}, n.state.locationSettings);
                (o[H] ||
                  Object.keys(G).forEach(function (e) {
                    var n = a[e];
                    n[H] ||
                      (n[U] = new window.Core.Annotations.Color(t.R, t.G, t.B));
                  }),
                  n.setState({ locationSettings: a }, function () {
                    n.addWatermarks();
                  }));
              }));
            var o = n.initializeLocationSettings();
            return (
              (n.preExistingWatermark = void 0),
              (n.state = {
                isColorPaletteVisible: !1,
                locationSettings: o,
                previousLocationSettings: o,
                lockFocus: !1,
              }),
              (n.canvasContainerRef = a.a.createRef()),
              n
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && R(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && N(t.prototype, e),
                n && N(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(e, [
              {
                key: "componentDidUpdate",
                value: function (t) {
                  var e = this;
                  (c.a.addEventListener("documentLoaded", this.closeModal),
                    this.props.isVisible !== t.isVisible &&
                      (this.props.isVisible
                        ? this.setState({ lockFocus: !0 })
                        : this.setState({ lockFocus: !1 }),
                      this.setState({ isColorPaletteVisible: !1 }, function () {
                        return e.handleWatermarkOnVisibilityChanged();
                      })));
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  if (!this.props.isVisible) return null;
                  var e = this.props,
                    n = e.t,
                    o = e.isCustomizableUI,
                    r = this.getCurrentSelectedLocation(),
                    i = this.state.locationSettings[r],
                    l = i[U].toHexString(),
                    s = Object(A.k)() ? 160 : 314,
                    c = Object(A.k)() ? 328 : 314;
                  return a.a.createElement(
                    O.a,
                    {
                      className: "Modal Watermark",
                      id: "watermarkModal",
                      "data-element": "watermarkModal",
                    },
                    a.a.createElement(
                      W.a,
                      {
                        isOpen: this.state.lockFocus,
                        title: "option.watermark.addWatermark",
                        closeButtonDataElement: "watermarkModalCloseButton",
                        onCloseClick: this.closeModal,
                        swipeToClose: !0,
                        closeHandler: this.closeModal,
                      },
                      a.a.createElement("div", {
                        className: "swipe-indicator",
                      }),
                      a.a.createElement(
                        "div",
                        { className: "form-content-container" },
                        a.a.createElement("div", {
                          className: "canvas-container",
                          ref: this.canvasContainerRef,
                        }),
                        a.a.createElement(
                          "div",
                          { className: "watermark-settings" },
                          a.a.createElement(
                            "form",
                            {
                              id: "form",
                              onSubmit: function (t) {
                                return t.preventDefault();
                              },
                            },
                            a.a.createElement(
                              "div",
                              { className: "form-field" },
                              a.a.createElement(
                                "label",
                                {
                                  className:
                                    "section-label print-quality-section-label",
                                  htmlFor: "location",
                                  id: "watermark-location-dropdown-label",
                                },
                                n("option.watermark.location"),
                              ),
                              a.a.createElement(C.a, {
                                id: "location",
                                labelledById:
                                  "watermark-location-dropdown-label",
                                dataElement: "watermarkLocation",
                                items: Object.keys(G),
                                getTranslationLabel: function (t) {
                                  return n(
                                    "option.watermark.locations.".concat(G[t]),
                                  );
                                },
                                currentSelectionKey: r,
                                onClickItem: this.onLocationChanged,
                                width: c,
                              }),
                              a.a.createElement("div", {
                                className: "separator divider",
                              }),
                            ),
                            a.a.createElement(
                              "div",
                              { className: "form-field" },
                              a.a.createElement(
                                "label",
                                { htmlFor: "textInput" },
                                n("option.watermark.text"),
                              ),
                              a.a.createElement("input", {
                                className: "text-input",
                                id: "textInput",
                                value: i[H],
                                onChange: function (e) {
                                  return t.handleInputChange(H, e.target.value);
                                },
                                type: "text",
                              }),
                            ),
                            a.a.createElement(
                              "div",
                              { className: "font-form-fields" },
                              a.a.createElement(
                                "div",
                                { className: "form-font-type" },
                                a.a.createElement(
                                  "label",
                                  {
                                    htmlFor: "fonts",
                                    id: "watermark-font-dropdown-label",
                                  },
                                  n("option.watermark.font"),
                                ),
                                a.a.createElement(C.a, {
                                  id: "fonts",
                                  labelledById: "watermark-font-dropdown-label",
                                  dataElement: "watermarkFont",
                                  items: E,
                                  currentSelectionKey: i[q],
                                  onClickItem: function (e) {
                                    return t.handleInputChange(q, e);
                                  },
                                  width: s,
                                }),
                              ),
                              a.a.createElement(
                                "div",
                                { className: "form-font-size" },
                                a.a.createElement(
                                  "label",
                                  { htmlFor: "fontSize" },
                                  n("option.watermark.size"),
                                ),
                                a.a.createElement(P.a, {
                                  fontSize: i[B],
                                  key: "fontSize",
                                  fontUnit: "pt",
                                  onFontSizeChange: function (e) {
                                    return t.handleInputChange(
                                      B,
                                      Number.parseInt(e),
                                    );
                                  },
                                  maxFontSize: 1600,
                                  initialFontValue: 1,
                                  initialMaxFontValue: 512,
                                  width: s,
                                }),
                              ),
                            ),
                            a.a.createElement(
                              "div",
                              {
                                className: "form-field opacity-slider",
                                id: "opacitySlider",
                              },
                              a.a.createElement(x.a, {
                                dataElement: "watermarkOpacitySlider",
                                property: "Opacity",
                                displayProperty: "opacity",
                                min: 0,
                                max: 100,
                                step: 1,
                                value: i[Q],
                                getDisplayValue: function (t) {
                                  return "".concat(Math.round(t), "%");
                                },
                                withInputField: o,
                                inputFieldType: "number",
                                onSliderChange: function () {},
                                onStyleChange: function (e, n) {
                                  return t.handleInputChange(
                                    Q,
                                    Math.round(100 * n),
                                  );
                                },
                                getLocalValue: function (t) {
                                  return parseInt(t) / 100;
                                },
                              }),
                            ),
                            a.a.createElement(
                              "div",
                              { className: "form-field" },
                              a.a.createElement(
                                "label",
                                null,
                                n("option.watermark.style"),
                              ),
                              a.a.createElement(
                                "div",
                                { className: "style-container" },
                                a.a.createElement(v.a, {
                                  id: "currentColorCell",
                                  className: "colorSelect ".concat(
                                    "#FFFFFF" === l ? "white-color" : "",
                                  ),
                                  ariaLabel: "colorSelectButton",
                                  style: { backgroundColor: l },
                                  onClick: function () {
                                    return t.setColorPaletteVisibility(
                                      !t.state.isColorPaletteVisible,
                                    );
                                  },
                                }),
                                a.a.createElement(
                                  "div",
                                  { className: "style-container" },
                                  a.a.createElement(v.a, {
                                    dataElement: "boldText",
                                    img: "icon-text-bold",
                                    isActive: i[Y],
                                    onClick: function () {
                                      return t.handleInputChange(Y, !i[Y]);
                                    },
                                    ariaLabel: n("option.richText.bold"),
                                  }),
                                  a.a.createElement(v.a, {
                                    dataElement: "italicizeText",
                                    img: "icon-text-italic",
                                    isActive: i[K],
                                    onClick: function () {
                                      return t.handleInputChange(K, !i[K]);
                                    },
                                    ariaLabel: n("option.richText.italic"),
                                  }),
                                  a.a.createElement(v.a, {
                                    dataElement: "underlineText",
                                    img: "icon-text-underline",
                                    isActive: i[J],
                                    onClick: function () {
                                      return t.handleInputChange(J, !i[J]);
                                    },
                                    ariaLabel: n("option.richText.underline"),
                                  }),
                                ),
                              ),
                              this.state.isColorPaletteVisible &&
                                a.a.createElement(
                                  "div",
                                  {
                                    className: "Popup StylePopup",
                                    id: "stylePopup",
                                    onClick: function () {
                                      return t.setColorPaletteVisibility(!1);
                                    },
                                  },
                                  a.a.createElement(y.a, {
                                    color: i[U],
                                    property: "TextColor",
                                    onStyleChange: function (e, n) {
                                      (t.onColorChanged(n),
                                        t.setColorPaletteVisibility(!1));
                                    },
                                  }),
                                ),
                            ),
                          ),
                        ),
                      ),
                      a.a.createElement("div", { className: "divider" }),
                      a.a.createElement(
                        "div",
                        { className: "button-container" },
                        a.a.createElement(
                          "button",
                          {
                            className: "reset-settings",
                            id: "reset",
                            onClick: this.resetForm,
                          },
                          n("option.watermark.resetAllSettings"),
                        ),
                        a.a.createElement(
                          v.a,
                          {
                            className: "add-watermark button",
                            id: "submit",
                            onClick: this.onOkPressed,
                          },
                          n("action.add"),
                        ),
                      ),
                    ),
                  );
                },
              },
            ])
          );
        })(a.a.PureComponent);
      F(Z, "propTypes", {
        isVisible: h.a.bool,
        pageIndexToView: h.a.number,
        watermarkLocations: h.a.object,
        modalClosed: h.a.func,
        formSubmitted: h.a.func,
        t: h.a.func.isRequired,
        isCustomizableUI: h.a.bool,
      });
      var tt = Object(k.a)()(Z),
        et = n(235),
        nt = n(305),
        ot = n(476),
        at = n(90),
        rt = n(182);
      n(1867);
      function it(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var o,
                a,
                r,
                i,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((r = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    s = !0
                  );
              } catch (t) {
                ((c = !0), (a = t));
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return lt(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? lt(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function lt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var st = function (t) {
          var e = t.isDisabled,
            n = t.isOpen,
            d = t.isApplyWatermarkDisabled,
            p = t.isFullAPIEnabled,
            m = t.currentPage,
            u = t.printQuality,
            b = t.isGrayscale,
            y = t.setIsGrayscale,
            x = t.setIsCurrentView,
            k = t.isCurrentViewDisabled,
            P = t.includeAnnotations,
            E = t.setIncludeAnnotations,
            A = t.includeComments,
            S = t.setIncludeComments,
            M = t.isWatermarkModalVisible,
            j = t.setIsWatermarkModalVisible,
            _ = t.watermarkModalOptions,
            T = t.existingWatermarksRef,
            D = t.setAllowWatermarkModal,
            I = t.closePrintModal,
            N = t.createPagesAndPrint,
            L = t.pagesToPrint,
            z = t.setPagesToPrint,
            R = t.count,
            F = t.isPrinting,
            V = t.layoutMode,
            G = t.useEmbeddedPrint,
            B = t.pageLabels;
          st.propTypes = {
            isDisabled: h.a.bool,
            isOpen: h.a.bool,
            isApplyWatermarkDisabled: h.a.bool,
            isFullAPIEnabled: h.a.bool,
            currentPage: h.a.number,
            printQuality: h.a.number,
            isGrayscale: h.a.bool,
            setIsGrayscale: h.a.func,
            setIsCurrentView: h.a.func,
            isCurrentViewDisabled: h.a.bool,
            includeAnnotations: h.a.bool,
            setIncludeAnnotations: h.a.func,
            includeComments: h.a.bool,
            setIncludeComments: h.a.func,
            isWatermarkModalVisible: h.a.bool,
            setIsWatermarkModalVisible: h.a.func,
            watermarkModalOptions: h.a.object,
            existingWatermarksRef: h.a.object,
            setAllowWatermarkModal: h.a.func,
            closePrintModal: h.a.func,
            createPagesAndPrint: h.a.func,
            pagesToPrint: h.a.array,
            setPagesToPrint: h.a.func,
            count: h.a.number,
            isPrinting: h.a.bool,
            layoutMode: h.a.string,
            useEmbeddedPrint: h.a.bool,
            pageLabels: h.a.array,
          };
          var H = Object(l.d)(),
            U = it(Object(nt.a)(), 1)[0],
            Q = Object(o.useRef)(),
            q = Object(o.useRef)(),
            Y = Object(o.useRef)(),
            K = Object(o.useRef)(),
            J = Object(o.useRef)(),
            $ = it(Object(o.useState)(!1), 2),
            X = $[0],
            Z = $[1],
            lt = it(Object(o.useState)([]), 2),
            ct = lt[0],
            dt = lt[1],
            pt = it(Object(o.useState)(""), 2),
            mt = pt[0],
            ut = pt[1],
            ft = it(Object(o.useState)(!1), 2),
            bt = ft[0],
            ht = ft[1],
            gt = Object(l.e)(function (t) {
              var e;
              return null === (e = i.a.getFeatureFlags(t)) || void 0 === e
                ? void 0
                : e.customizableUI;
            }),
            wt = {
              1: "".concat(U("option.print.qualityNormal")),
              2: "".concat(U("option.print.qualityHigh")),
            },
            yt = function (t) {
              j(t);
            },
            xt = Object(g.a)("Modal PrintModal", { isOpen: n }),
            kt = a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                "label",
                {
                  htmlFor: "specifyPagesInput",
                  className: "specifyPagesChoiceLabel",
                },
                a.a.createElement("span", null, U("option.print.specifyPages")),
                bt &&
                  a.a.createElement(
                    "span",
                    { className: "specifyPagesExampleLabel" },
                    "- ",
                    U("option.thumbnailPanel.multiSelectPagesExample"),
                  ),
              ),
              bt &&
                a.a.createElement(
                  "div",
                  {
                    className: f()("page-number-input-container", {
                      error: !!mt,
                    }),
                  },
                  a.a.createElement(ot.a, {
                    id: "specifyPagesInput",
                    selectedPageNumbers: ct,
                    pageCount: c.a.getTotalPages(),
                    onSelectedPageNumbersChange: function (t) {
                      t.length > 0 && (ut(""), dt(t));
                    },
                    onBlurHandler: dt,
                    onError: function (t) {
                      t &&
                        ut(
                          ""
                            .concat(U("message.errorPageNumber"), " ")
                            .concat(c.a.getTotalPages()),
                        );
                    },
                    pageNumberError: mt,
                    customPageLabels: B,
                    enablePageLabels: !0,
                  }),
                ),
            );
          Object(o.useEffect)(
            function () {
              vt();
            },
            [ct],
          );
          var vt = function () {
            var t,
              e,
              n,
              o,
              a,
              r,
              i,
              l = [];
            if (
              (x(null === (t = J.current) || void 0 === t ? void 0 : t.checked),
              ht(null === (e = Y.current) || void 0 === e ? void 0 : e.checked),
              (null !== (n = Q.current) && void 0 !== n && n.checked) ||
                (null !== (o = J.current) && void 0 !== o && o.checked && X))
            )
              for (var s = 1; s <= c.a.getTotalPages(); s++) l.push(s);
            else if (null !== (a = q.current) && void 0 !== a && a.checked) {
              var d = c.a.getTotalPages();
              switch (V) {
                case w.a.FacingCover:
                case w.a.FacingCoverContinuous:
                  1 === m || (m === d && d % 2 == 0)
                    ? l.push(m)
                    : (l = m % 2 ? [m - 1, m] : [m, m + 1]);
                  break;
                case w.a.FacingContinuous:
                case w.a.Facing:
                  m === d && d % 2 == 1
                    ? l.push(m)
                    : (l = m % 2 ? [m, m + 1] : [m - 1, m]);
                  break;
                default:
                  l.push(m);
              }
            } else
              null !== (r = Y.current) && void 0 !== r && r.checked
                ? (l = ct)
                : null !== (i = J.current) &&
                  void 0 !== i &&
                  i.checked &&
                  (l = [m]);
            z(l);
          };
          (Object(o.useEffect)(function () {
            return (
              vt(),
              c.a.getWatermark().then(function (t) {
                (D(null == t || 0 === Object.keys(t).length), (T.current = t));
              }),
              function () {
                (c.a.setWatermark(T.current), j(!1));
              }
            );
          }, []),
            Object(o.useEffect)(
              function () {
                "xod" !== c.a.getDocument().getType() && G ? Z(!0) : Z(!1);
              },
              [G],
            ));
          var Pt = Object(at.a)(function () {
              F || yt(!0);
            }),
            Et = Object(rt.a)(function (t) {
              H(r.a.setWatermarkModalOptions(t));
            }, "applyWatermark");
          return e
            ? null
            : a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(tt, {
                  isVisible: !(!n || !M),
                  pageIndexToView: m - 1,
                  modalClosed: yt,
                  formSubmitted: Et,
                  watermarkLocations: _,
                  isCustomizableUI: gt,
                }),
                a.a.createElement(
                  "div",
                  { className: xt, "data-element": s.a.PRINT_MODAL },
                  a.a.createElement(
                    W.a,
                    {
                      isOpen: n && !M,
                      title: "option.print.printSettings",
                      containerOnClick: function (t) {
                        return t.stopPropagation();
                      },
                      onCloseClick: I,
                      closeButtonDataElement: "printModalCloseButton",
                      swipeToClose: !0,
                      closeHandler: I,
                    },
                    a.a.createElement("div", { className: "swipe-indicator" }),
                    a.a.createElement(
                      "div",
                      { className: "settings" },
                      a.a.createElement(
                        "div",
                        { className: "section" },
                        a.a.createElement(
                          "div",
                          { className: "section-label" },
                          "".concat(U("option.print.pages"), ":"),
                        ),
                        a.a.createElement(
                          "form",
                          {
                            className: "settings-form",
                            onChange: vt,
                            onSubmit: N,
                          },
                          a.a.createElement(et.a, {
                            dataElement: "allPagesPrintOption",
                            ref: Q,
                            id: "all-pages",
                            name: "pages",
                            radio: !0,
                            label: U("option.print.all"),
                            defaultChecked: !0,
                            disabled: F,
                            center: !0,
                          }),
                          a.a.createElement(et.a, {
                            dataElement: "currentPagePrintOption",
                            ref: q,
                            id: "current-page",
                            name: "pages",
                            radio: !0,
                            label: U("option.print.current"),
                            disabled: F,
                            center: !0,
                          }),
                          a.a.createElement(et.a, {
                            dataElement: "currentViewPrintOption",
                            ref: J,
                            id: "current-view",
                            name: "pages",
                            radio: !0,
                            label: U("option.print.view"),
                            disabled: k,
                            center: !0,
                            title: U("option.print.printCurrentDisabled"),
                          }),
                          a.a.createElement(et.a, {
                            dataElement: "customPagesPrintOption",
                            ref: Y,
                            id: "custom-pages",
                            name: "pages",
                            className: "specify-pages-choice",
                            radio: !0,
                            label: kt,
                            disabled: F,
                            center: !0,
                          }),
                          a.a.createElement(et.a, {
                            dataElement: "annotationsPrintOption",
                            id: "include-annotations",
                            name: "annotations",
                            label: U("option.print.includeAnnotations"),
                            disabled: F,
                            onChange: function () {
                              return E(function (t) {
                                return !t;
                              });
                            },
                            checked: P,
                            center: !0,
                          }),
                          X &&
                            a.a.createElement(
                              a.a.Fragment,
                              null,
                              p &&
                                a.a.createElement(
                                  a.a.Fragment,
                                  null,
                                  a.a.createElement(et.a, {
                                    dataElement: "grayscalePrintOption",
                                    id: "print-grayscale",
                                    name: "grayscale",
                                    label: U("option.print.printGrayscale"),
                                    disabled: F,
                                    onChange: function () {
                                      return y(function (t) {
                                        return !t;
                                      });
                                    },
                                    checked: b,
                                    center: !0,
                                  }),
                                  a.a.createElement(et.a, {
                                    dataElement: "commentsPrintOption",
                                    ref: K,
                                    id: "include-comments",
                                    name: "comments",
                                    label: U("option.print.includeComments"),
                                    onChange: function () {
                                      return S(function (t) {
                                        return !t;
                                      });
                                    },
                                    disabled: F,
                                    checked: A,
                                    center: !0,
                                  }),
                                ),
                            ),
                          !X &&
                            a.a.createElement(
                              a.a.Fragment,
                              null,
                              a.a.createElement(et.a, {
                                dataElement: "grayscalePrintOption",
                                id: "print-grayscale",
                                name: "grayscale",
                                label: U("option.print.printGrayscale"),
                                disabled: F,
                                onChange: function () {
                                  return y(function (t) {
                                    return !t;
                                  });
                                },
                                checked: b,
                                center: !0,
                              }),
                              a.a.createElement(et.a, {
                                dataElement: "commentsPrintOption",
                                ref: K,
                                id: "include-comments",
                                name: "comments",
                                label: U("option.print.includeComments"),
                                onChange: function () {
                                  return S(function (t) {
                                    return !t;
                                  });
                                },
                                disabled: F,
                                checked: A,
                                center: !0,
                              }),
                            ),
                        ),
                      ),
                      !X &&
                        a.a.createElement(
                          O.a,
                          {
                            className: "section",
                            dataElement: s.a.PRINT_QUALITY,
                          },
                          a.a.createElement(
                            "label",
                            {
                              className:
                                "section-label print-quality-section-label",
                              htmlFor: "printQualityOptions",
                              id: "print-quality-options-label",
                            },
                            "".concat(U("option.print.pageQuality"), ":"),
                          ),
                          a.a.createElement(C.a, {
                            id: "printQualityOptions",
                            labelledById: "print-quality-options-label",
                            dataElement: "printQualityOptions",
                            items: Object.keys(wt),
                            getDisplayValue: function (t) {
                              return wt[t];
                            },
                            onClickItem: function (t) {
                              H(r.a.setPrintQuality(Number(t)));
                            },
                            currentSelectionKey:
                              null == u ? void 0 : u.toString(),
                            width: 274,
                          }),
                        ),
                      a.a.createElement(
                        "div",
                        { className: "total" },
                        F
                          ? a.a.createElement(
                              "div",
                              null,
                              ""
                                .concat(U("message.processing"), " ")
                                .concat(R, "/")
                                .concat(L.length),
                            )
                          : a.a.createElement(
                              "div",
                              null,
                              U("message.printTotalPageCount", {
                                count: L.length,
                              }),
                            ),
                      ),
                      !d &&
                        a.a.createElement(
                          O.a,
                          {
                            className: "section watermark-section",
                            dataElement: s.a.PRINT_WATERMARK,
                          },
                          a.a.createElement(
                            "div",
                            { className: "section-label" },
                            U("option.watermark.title"),
                          ),
                          a.a.createElement(
                            v.a,
                            {
                              dataElement: "applyWatermark",
                              className: "apply-watermark",
                              disabled: F,
                              onClick: Pt,
                            },
                            U("option.watermark.addNew"),
                          ),
                        ),
                    ),
                    a.a.createElement("div", { className: "divider" }),
                    a.a.createElement(
                      "div",
                      { className: "buttons" },
                      a.a.createElement(v.a, {
                        className: "button",
                        onClick: N,
                        label: U("action.print"),
                        ariaLabel: U("action.print"),
                      }),
                    ),
                  ),
                ),
              );
        },
        ct = st;
      function dt() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.toStringTag || "@@toStringTag";
        function r(n, o, a, r) {
          var s = o && o.prototype instanceof l ? o : l,
            c = Object.create(s.prototype);
          return (
            pt(
              c,
              "_invoke",
              (function (n, o, a) {
                var r,
                  l,
                  s,
                  c = 0,
                  d = a || [],
                  p = !1,
                  m = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: u,
                    f: u.bind(t, 4),
                    d: function (e, n) {
                      return ((r = e), (l = 0), (s = t), (m.n = n), i);
                    },
                  };
                function u(n, o) {
                  for (
                    l = n, s = o, e = 0;
                    !p && c && !a && e < d.length;
                    e++
                  ) {
                    var a,
                      r = d[e],
                      u = m.p,
                      f = r[2];
                    n > 3
                      ? (a = f === o) &&
                        ((s = r[(l = r[4]) ? 5 : ((l = 3), 3)]),
                        (r[4] = r[5] = t))
                      : r[0] <= u &&
                        ((a = n < 2 && u < r[1])
                          ? ((l = 0), (m.v = o), (m.n = r[1]))
                          : u < f &&
                            (a = n < 3 || r[0] > o || o > f) &&
                            ((r[4] = n), (r[5] = o), (m.n = f), (l = 0)));
                  }
                  if (a || n > 1) return i;
                  throw ((p = !0), o);
                }
                return function (a, d, f) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === d && u(d, f), l = d, s = f;
                    (e = l < 2 ? t : s) || !p;

                  ) {
                    r ||
                      (l
                        ? l < 3
                          ? (l > 1 && (m.n = -1), u(l, s))
                          : (m.n = s)
                        : (m.v = s));
                    try {
                      if (((c = 2), r)) {
                        if ((l || (a = "next"), (e = r[a]))) {
                          if (!(e = e.call(r, s)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((s = e.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (e = r.return) && e.call(r),
                            l < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  a +
                                  "' method",
                              )),
                              (l = 1)));
                        r = t;
                      } else if ((e = (p = m.n < 0) ? s : n.call(o, m)) !== i)
                        break;
                    } catch (e) {
                      ((r = t), (l = 1), (s = e));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: e, done: p };
                };
              })(n, a, r),
              !0,
            ),
            c
          );
        }
        var i = {};
        function l() {}
        function s() {}
        function c() {}
        e = Object.getPrototypeOf;
        var d = [][o]
            ? e(e([][o]()))
            : (pt((e = {}), o, function () {
                return this;
              }),
              e),
          p = (c.prototype = l.prototype = Object.create(d));
        function m(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, c)
              : ((t.__proto__ = c), pt(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(p)),
            t
          );
        }
        return (
          (s.prototype = c),
          pt(p, "constructor", c),
          pt(c, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          pt(c, a, "GeneratorFunction"),
          pt(p),
          pt(p, a, "Generator"),
          pt(p, o, function () {
            return this;
          }),
          pt(p, "toString", function () {
            return "[object Generator]";
          }),
          (dt = function () {
            return { w: r, m: m };
          })()
        );
      }
      function pt(t, e, n, o) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (t) {
          a = 0;
        }
        (pt = function (t, e, n, o) {
          if (e)
            a
              ? a(t, e, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (t[e] = n);
          else {
            var r = function (e, n) {
              pt(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(t, e, n, o);
      }
      function mt(t, e, n, o, a, r, i) {
        try {
          var l = t[r](i),
            s = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(s) : Promise.resolve(s).then(o, a);
      }
      function ut(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, a) {
            var r = t.apply(e, n);
            function i(t) {
              mt(r, o, a, i, l, "next", t);
            }
            function l(t) {
              mt(r, o, a, i, l, "throw", t);
            }
            i(void 0);
          });
        };
      }
      function ft(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var o,
                a,
                r,
                i,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((r = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    s = !0
                  );
              } catch (t) {
                ((c = !0), (a = t));
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return bt(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? bt(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function bt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var ht = function () {
        var t = Object(l.d)(),
          e = ft(
            Object(l.e)(function (t) {
              return [
                i.a.isElementDisabled(t, s.a.PRINT_MODAL),
                i.a.isElementOpen(t, s.a.PRINT_MODAL),
                i.a.isElementDisabled(t, "applyWatermark"),
                i.a.getCurrentPage(t),
                i.a.getPrintQuality(t),
                i.a.getDefaultPrintOptions(t),
                i.a.getPageLabels(t, "pageLabels"),
                i.a.getSortStrategy(t),
                i.a.getColorMap(t),
                i.a.getDisplayMode(t),
                i.a.getPrintedNoteDateFormat(t),
                i.a.getCurrentLanguage(t),
                i.a.getWatermarkModalOptions(t),
                i.a.getTimezone(t),
                i.a.isEmbedPrintSupported(t, "useEmbeddedPrint"),
              ];
            }, l.c),
            15,
          ),
          n = e[0],
          u = e[1],
          f = e[2],
          b = e[3],
          h = e[4],
          g = e[5],
          w = e[6],
          y = e[7],
          x = e[8],
          k = e[9],
          v = e[10],
          P = e[11],
          E = e[12],
          W = e[13],
          O = e[14],
          C = Object(o.useRef)(),
          A = ft(Object(o.useState)(!1), 2),
          S = A[0],
          M = A[1],
          j = ft(Object(o.useState)(-1), 2),
          _ = j[0],
          T = j[1],
          D = ft(Object(o.useState)(!1), 2),
          I = D[0],
          N = D[1],
          L = ft(Object(o.useState)([]), 2),
          z = L[0],
          R = L[1],
          F = ft(Object(o.useState)(!1), 2),
          V = F[0],
          G = F[1],
          B = ft(Object(o.useState)(!1), 2),
          H = B[0],
          U = B[1],
          Q = ft(Object(o.useState)(!0), 2),
          q = Q[0],
          Y = Q[1],
          K = ft(Object(o.useState)(!1), 2),
          J = K[0],
          $ = K[1],
          X = ft(Object(o.useState)(!1), 2),
          Z = X[0],
          tt = X[1],
          et = ft(Object(o.useState)(!1), 2),
          nt = et[0],
          ot = et[1];
        Object(o.useEffect)(
          function () {
            var t, e, n;
            g &&
              (Y(null !== (t = g.includeAnnotations) && void 0 !== t ? t : q),
              $(null !== (e = g.includeComments) && void 0 !== e ? e : J),
              N(
                null !== (n = g.maintainPageOrientation) && void 0 !== n
                  ? n
                  : I,
              ));
          },
          [g],
        );
        var at = _ >= 0;
        Object(o.useEffect)(
          function () {
            u &&
              (O && it(),
              t(
                r.a.closeElements([
                  s.a.SIGNATURE_MODAL,
                  s.a.LOADING_MODAL,
                  s.a.PROGRESS_MODAL,
                  s.a.ERROR_MODAL,
                ]),
              ));
          },
          [u, t],
        );
        var it = function () {
            if (!nt) {
              var t = c.a.getDisplayModeObject().getVisiblePages(0, 0);
              (null == t ? void 0 : t.length) > 1 ? ot(!0) : ot(!1);
            }
          },
          lt = (function () {
            var t = ut(
              dt().m(function t() {
                var e, n, o, a, r, i;
                return dt().w(function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return (
                          (e = c.a
                            .getDocumentViewer()
                            .isAlwaysPrintAnnotationsInColorEnabled()),
                          (n = {
                            isCurrentView: Z,
                            includeAnnotations: q,
                            includeComments: J,
                            watermarkModalOptions: E,
                            pagesToPrint: z,
                            isGrayscale: V,
                            isAlwaysPrintAnnotationsInColorEnabled: e,
                          }),
                          (o = c.a.getDocument()),
                          (a = c.a.getAnnotationManager()),
                          (r = m.c),
                          (t.n = 1),
                          Object(m.d)(n, o, a)
                        );
                      case 1:
                        ((i = t.v), r(i));
                      case 2:
                        return t.a(2);
                    }
                }, t);
              }),
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          st = function (t) {
            if ((t.preventDefault(), !(z.length < 1))) {
              (T(0), S ? c.a.setWatermark(E) : c.a.setWatermark(C.current));
              var e = {
                  includeComments: J,
                  includeAnnotations: q,
                  maintainPageOrientation: I,
                  printQuality: h,
                  sortStrategy: y,
                  colorMap: x,
                  printedNoteDateFormat: v,
                  isCurrentView: Z,
                  language: P,
                  timezone: W,
                  createCanvases: !1,
                  isGrayscale: V,
                },
                n = Object(p.b)(z, e, void 0);
              (n.forEach(
                (function () {
                  var t = ut(
                    dt().m(function t(e) {
                      return dt().w(function (t) {
                        for (;;)
                          switch (t.n) {
                            case 0:
                              return ((t.n = 1), e);
                            case 1:
                              T(_ < z.length && (-1 !== _ ? _ + 1 : _));
                            case 2:
                              return t.a(2);
                          }
                      }, t);
                    }),
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
                Promise.all(n)
                  .then(function (t) {
                    (Object(d.b)(t), mt());
                  })
                  .catch(function (t) {
                    (console.error(t), T(-1));
                  }));
            }
          },
          pt = function () {
            (T(-1), t(r.a.closeElement(s.a.PRINT_MODAL)));
          },
          mt = Object(rt.a)(pt);
        return a.a.createElement(ct, {
          isDisabled: n,
          isOpen: u,
          isApplyWatermarkDisabled: f,
          isFullAPIEnabled: c.a.isFullPDFEnabled(),
          currentPage: b,
          printQuality: h,
          isGrayscale: V,
          setIsGrayscale: G,
          setIsCurrentView: tt,
          isCurrentViewDisabled: nt,
          checkCurrentView: it,
          includeAnnotations: q,
          setIncludeAnnotations: Y,
          includeComments: J,
          setIncludeComments: $,
          isWatermarkModalVisible: H,
          setIsWatermarkModalVisible: U,
          watermarkModalOptions: E,
          existingWatermarksRef: C,
          setAllowWatermarkModal: M,
          closePrintModal: pt,
          createPagesAndPrint: function (t) {
            var e = c.a.getDocument().getType();
            (O &&
              "xod" === e &&
              console.warn(
                "Falling back to raster printing, XOD files and Embedded Printing is not supported",
              ),
              O && "xod" !== e ? lt() : st(t));
          },
          pagesToPrint: z,
          setPagesToPrint: R,
          count: _,
          isPrinting: at,
          pageLabels: w,
          layoutMode: k,
          useEmbeddedPrint: O,
        });
      };
      e.default = ht;
    },
  },
]);
//# sourceMappingURL=chunk.54.js.map
