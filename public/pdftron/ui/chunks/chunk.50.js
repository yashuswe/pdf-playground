(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    1960: function (t, e, o) {
      var n = o(35),
        a = o(1961);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, ""]]);
      var r = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function t(e, o = document) {
                const n = [];
                return (
                  o.querySelectorAll(e).forEach((t) => n.push(t)),
                  o.querySelectorAll("*").forEach((o) => {
                    o.shadowRoot && n.push(...t(e, o.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer")));
          const o = [];
          for (let n = 0; n < e.length; n++) {
            const a = e[n];
            if (0 === n)
              (a.shadowRoot.appendChild(t),
                (t.onload = function () {
                  o.length > 0 &&
                    o.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (a.shadowRoot.appendChild(e), o.push(e));
            }
          }
        },
        singleton: !1,
      };
      n(a, r);
      t.exports = a.locals || {};
    },
    1961: function (t, e, o) {
      ((e = t.exports = o(36)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.text-customstamp .color-container .ColorPalette .cell-tool:hover{cursor:pointer;border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}.text-customstamp{padding:16px;margin:0;display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp{width:100%;padding:4px 8px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .scroll-container{width:100%;max-height:50%;padding-bottom:0;margin-bottom:0;overflow-y:auto;overflow-x:visible}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp{width:100%;padding:4px 8px}.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .scroll-container{width:100%;max-height:50%;padding-bottom:0;margin-bottom:0;overflow-y:auto;overflow-x:visible}}.text-customstamp-input{outline:none;border-radius:4px;border:1px solid var(--gray-6);box-shadow:none;padding:5px}.text-customstamp .txt-uppercase{text-transform:uppercase}.text-customstamp-container{position:relative;margin-top:10px;flex:1;border:1px solid var(--modal-stroke-and-border);border-radius:4px;overflow:auto}.text-customstamp-container canvas{position:absolute;visibility:hidden;z-index:-1;width:100%;height:100%}.text-customstamp-inner-container{position:absolute;min-width:100%}.text-customstamp .canvas-container{border:1px solid var(--gray-6);box-sizing:border-box;position:relative;overflow:hidden;background-color:var(--signature-draw-background);display:flex;flex-direction:row;justify-content:center;padding:48px 74px;border-radius:4px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .canvas-container{padding:12px .5px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .canvas-container{padding:12px .5px}}.text-customstamp .canvas-container .custom-stamp-canvas{box-sizing:border-box}@media(max-width:430px){.text-customstamp .canvas-container .custom-stamp-canvas{transform:scale(.8)}}.text-customstamp .color-container{margin-top:16px;width:100%}.text-customstamp .color-container .ColorPalette{display:flex;flex-wrap:wrap;width:100%;grid-gap:4px;gap:4px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .color-container .ColorPalette{padding:4px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .color-container .ColorPalette{padding:4px}}.text-customstamp .color-container .ColorPalette .cell-outer{margin-inline-end:16px}.text-customstamp .color-container .ColorPalette .cell-outer.active{margin-inline-start:-4px;margin-inline-end:10px;width:28px;height:28px}.text-customstamp .color-container .ColorPalette .cell-outer .cell{width:16px;height:16px}.text-customstamp .color-container .ColorPalette .cell-container{flex:unset;width:auto;height:auto}.text-customstamp .color-container .ColorPalette .cell-tool{margin-inline-end:8px;margin-inline-start:-4px}.text-customstamp .color-container .ColorPalette .cell-tool .cell-outer{margin:4px}.text-customstamp .color-container .ColorPalette .cell-tool.active{box-shadow:inset 0 0 0 1px var(--blue-5);background:var(--tools-button-active)}.text-customstamp .color-container .ColorPalette .cell-tool.active .Icon{color:var(--blue-5)}.text-customstamp .color-container .ColorPalette .cell-tool:disabled{box-shadow:none;background:transparent}.text-customstamp .stamp-input-container{margin-top:16px;padding:0;position:relative}.text-customstamp .stamp-input-container .text-customstamp-input{margin-top:8px;height:32px;width:100%;padding:6px}.text-customstamp .stamp-input-container .text-customstamp-input.error{border:1px solid var(--error-text-color)}.text-customstamp .stamp-input-container .error-icon{position:absolute;inset-inline-end:8px;inset-block-start:28px;color:var(--error-text-color)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .stamp-input-container .error-icon{inset-block-start:30px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .stamp-input-container .error-icon{inset-block-start:30px}}.text-customstamp .stamp-input-container .empty-stamp-input{height:16px;margin-top:4px;color:var(--error-text-color)}.text-customstamp .stamp-label,.text-customstamp .stamp-sublabel{font-weight:700;margin-bottom:8px;text-transform:capitalize}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .stamp-label,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .stamp-sublabel{font-size:13px;height:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .stamp-label,.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .stamp-sublabel{font-size:13px;height:16px}}.text-customstamp .timestamp-container{margin-top:16px;padding:0}.text-customstamp .timestamp-container .timeStamp-choice{height:16px;display:grid;width:100%;grid-template-columns:22.32% 22.32% 22.32% 33.04%;grid-gap:16px}@media(max-width:430px){.text-customstamp .timestamp-container .timeStamp-choice{grid-template-columns:30% 30% 30%;height:100%;font-size:13px}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.text-customstamp .timestamp-container .timeStamp-choice .ui__choice{display:-ms-inline-flexbox;width:33.33%}}.text-customstamp .timestamp-container .timeStamp-choice .ui__choice{margin:0;line-height:1}.text-customstamp .timestamp-container .timeStamp-choice .ui__choice .ui__choice__label{padding-inline-start:4px}.text-customstamp .date-format-container{margin-top:16px;display:flex;flex-wrap:wrap}.text-customstamp .date-format-container .Dropdown__wrapper{width:100%}.text-customstamp .date-format-container .Dropdown__wrapper .Dropdown{height:32px;width:100%!important;text-align:start}.text-customstamp .date-format-container .Dropdown__wrapper .arrow{flex:unset}.text-customstamp .date-format-container .Dropdown__wrapper .Dropdown__items{z-index:101;inset-block-start:auto;inset-inline-start:0;inset-inline-end:auto;width:100%!important}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .date-format-container .Dropdown__wrapper .Dropdown__items{max-height:200px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .date-format-container .Dropdown__wrapper .Dropdown__items{max-height:200px}}.text-customstamp .date-format-container .Dropdown__wrapper .Dropdown__items.hide{height:0}.text-customstamp .date-format-container .hover-icon{margin-inline-start:2px;position:relative}.text-customstamp .date-format-container .hover-icon .Icon{width:18px;height:18px}.text-customstamp .date-format-container .hover-icon .date-format-description{display:flex;flex-direction:column;text-align:start;position:absolute;background-color:#000;border-radius:5px;padding:12px;color:#fff;width:120px;z-index:101;inset-block-end:100%;inset-block-start:auto;inset-inline-start:0;inset-inline-end:auto}.text-customstamp .date-format-container .hover-icon:hover .Icon{color:var(--blue-6)}.text-customstamp .font-container{margin-top:8px}.text-customstamp .font-container .font-inner-container{display:flex;grid-gap:12px;gap:12px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .font-container .font-inner-container{grid-gap:6px;gap:6px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .font-container .font-inner-container{grid-gap:6px;gap:6px}}.text-customstamp .font-container .stamp-sublabel{font-weight:700;margin-bottom:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .font-container .stamp-sublabel{font-size:13px;height:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .font-container .stamp-sublabel{font-size:13px;height:16px}}.text-customstamp .font-container .Dropdown__wrapper .Dropdown{margin-inline-end:4px;height:32px;width:268px!important;text-align:start}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .font-container .Dropdown__wrapper .Dropdown{width:200px!important}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .font-container .Dropdown__wrapper .Dropdown{width:200px!important}}.text-customstamp .font-container .Dropdown__wrapper .arrow{flex:unset}.text-customstamp .font-container .Dropdown__wrapper .Dropdown__items{inset-block-start:auto;inset-inline-start:0;inset-inline-end:auto;width:268px!important}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .font-container .Dropdown__wrapper .Dropdown__items{inset-block-end:auto;height:200px;width:200px!important}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .font-container .Dropdown__wrapper .Dropdown__items{inset-block-end:auto;height:200px;width:200px!important}}.text-customstamp .font-container .Button{background:none;width:32px;height:32px;margin:0}.text-customstamp .font-container .Button .Icon{height:24px;width:24px;color:var(--icon-color)}.text-customstamp .font-container .Button:hover{background:var(--popup-button-hover)}.text-customstamp .font-container .Button:hover .Icon .cls-1{fill:currentColor}.text-customstamp .font-container .Button.active{background:var(--popup-button-active)}.text-customstamp .font-container .Button.active .Icon{color:var(--blue-5)}.text-customstamp .font-container .Button.active .Icon .cls-1{fill:currentColor}.text-customstamp .custom-checkbox{position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-bottom:5px;margin-top:5px}.text-customstamp .custom-checkbox input{display:none}.text-customstamp .custom-checkbox input+label:before{cursor:pointer;content:"";margin:1px 10px 0 0;display:inline-block;vertical-align:text-top;width:16px;height:16px;border-radius:4px;border:1px solid #979797}.text-customstamp .custom-checkbox input:checked+label:before{background:#00a5e4;border:1px solid transparent}.text-customstamp .custom-checkbox input:checked+label:after{content:"";position:absolute;inset-inline-start:4px;inset-block-start:9px;background:var(--gray-0);width:2px;height:2px;box-shadow:2px 0 0 var(--gray-0),4px 0 0 var(--gray-0),4px -2px 0 var(--gray-0),4px -4px 0 var(--gray-0),4px -6px 0 var(--gray-0),4px -8px 0 var(--gray-0);transform:rotate(45deg)}.text-customstamp .custom-checkbox label{align-items:center}',
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1962: function (t, e, o) {
      var n = o(35),
        a = o(1963);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, ""]]);
      var r = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function t(e, o = document) {
                const n = [];
                return (
                  o.querySelectorAll(e).forEach((t) => n.push(t)),
                  o.querySelectorAll("*").forEach((o) => {
                    o.shadowRoot && n.push(...t(e, o.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer")));
          const o = [];
          for (let n = 0; n < e.length; n++) {
            const a = e[n];
            if (0 === n)
              (a.shadowRoot.appendChild(t),
                (t.onload = function () {
                  o.length > 0 &&
                    o.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (a.shadowRoot.appendChild(e), o.push(e));
            }
          }
        },
        singleton: !1,
      };
      n(a, r);
      t.exports = a.locals || {};
    },
    1963: function (t, e, o) {
      ((e = t.exports = o(36)(!1)).push([
        t.i,
        ".open.CustomStampModal{visibility:visible}.closed.CustomStampModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CustomStampModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.CustomStampModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.CustomStampModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.CustomStampModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.CustomStampModal .footer .modal-button.cancel:hover,.CustomStampModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.CustomStampModal .footer .modal-button.cancel,.CustomStampModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.CustomStampModal .footer .modal-button.cancel.disabled,.CustomStampModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.CustomStampModal .footer .modal-button.cancel.disabled span,.CustomStampModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.CustomStampModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.CustomStampModal .modal-container .wrapper .modal-content{padding:10px}.CustomStampModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.CustomStampModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.CustomStampModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.CustomStampModal .footer .modal-button.confirm{margin-inline-start:4px}.CustomStampModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .footer .modal-button{padding:23px 8px}}.CustomStampModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .swipe-indicator{width:32px}}.CustomStampModal .modal-container{display:flex;flex-direction:column;width:480px;padding:0;border-radius:4px;background:var(--component-background);overflow:visible;max-height:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .modal-container{width:100%;border-radius:0;inset-inline-start:0;inset-block-end:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .modal-container{width:100%;border-radius:0;inset-inline-start:0;inset-block-end:0}}.CustomStampModal .modal-container .header{box-shadow:inset 0 -1px 0 var(--modal-stroke-and-border);margin:0;display:flex;align-items:center;width:100%;padding:16px}.CustomStampModal .modal-container .header p{font-size:16px;font-weight:700;width:89.286%;margin:0;margin-inline-end:16px}.CustomStampModal .modal-container .header .Button{position:static;height:32px;width:32px;border-radius:4px}.CustomStampModal .modal-container .header .Button:hover{background:var(--popup-button-hover)}.CustomStampModal .modal-container .header .Button.selected{background:var(--popup-button-active);cursor:default}.CustomStampModal .modal-container .footer{display:flex;align-items:center;flex-direction:row-reverse;justify-content:space-between;margin:0;inset-block-start:460px;padding:16px;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border)}.CustomStampModal .modal-container .footer .stamp-close{border:none;background-color:transparent;color:var(--secondary-button-text);padding:0 8px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer}:host(:not([data-tabbing=true])) .CustomStampModal .modal-container .footer .stamp-close,html:not([data-tabbing=true]) .CustomStampModal .modal-container .footer .stamp-close{outline:none}.CustomStampModal .modal-container .footer .stamp-close:hover{color:var(--secondary-button-hover)}.CustomStampModal .modal-container .footer .stamp-create{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;height:32px;display:flex;align-items:center;padding:8px 16px;width:72px;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .CustomStampModal .modal-container .footer .stamp-create,html:not([data-tabbing=true]) .CustomStampModal .modal-container .footer .stamp-create{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .modal-container .footer .stamp-create{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .modal-container .footer .stamp-create{font-size:13px}}.CustomStampModal .modal-container .footer .stamp-create:hover{background:var(--primary-button-hover)}.CustomStampModal .modal-container .footer .stamp-create:disabled{background:var(--primary-button);opacity:.5;cursor:default}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2117: function (t, e, o) {
      "use strict";
      o.r(e);
      (o(9),
        o(10),
        o(14),
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
        o(8),
        o(56),
        o(17),
        o(19),
        o(11),
        o(13));
      var n = o(0),
        a = o.n(n),
        r = o(15),
        i = o.n(r),
        s = o(6),
        c = o(1),
        l = o(3),
        p = o(4),
        m = o(305),
        d =
          (o(30),
          o(38),
          o(34),
          o(27),
          o(44),
          o(31),
          o(28),
          o(48),
          o(47),
          o(49),
          o(37),
          o(132),
          o(231),
          o(266),
          o(29),
          o(160)),
        u = o(72),
        b = o(41),
        x = o(51),
        f = o(544),
        h = o(54),
        w = o(2),
        g = o.n(w),
        v = (o(1960), o(23)),
        y = o(107);
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
      function C(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          (e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n));
        }
        return o;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(o), !0).forEach(function (e) {
                E(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
              : C(Object(o)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(o, e),
                  );
                });
        }
        return t;
      }
      function E(t, e, o) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != S(t) || !t) return t;
              var o = t[Symbol.toPrimitive];
              if (void 0 !== o) {
                var n = o.call(t, e || "default");
                if ("object" != S(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == S(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = o),
          t
        );
      }
      function M(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != o) {
              var n,
                a,
                r,
                i,
                s = [],
                c = !0,
                l = !1;
              try {
                if (((r = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = r.call(o)).done) &&
                    (s.push(n.value), s.length !== e);
                    c = !0
                  );
              } catch (t) {
                ((l = !0), (a = t));
              } finally {
                try {
                  if (
                    !c &&
                    null != o.return &&
                    ((i = o.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (l) throw a;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return O(t, e);
              var o = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === o && t.constructor && (o = t.constructor.name),
                "Map" === o || "Set" === o
                  ? Array.from(t)
                  : "Arguments" === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? O(t, e)
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
      function O(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var A = { date: "MM/DD/YYYY", time: "hh:mm A", timeFirst: !1 },
        T = function (t) {
          var e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            o =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          return e
            ? o
              ? t.timeFirst
                ? "".concat(t.time, " ").concat(t.date)
                : "".concat(t.date, " ").concat(t.time)
              : t.date
                ? t.date
                : ""
            : t.time
              ? t.time
              : "";
        },
        _ = {
          state: g.a.object,
          setState: g.a.func,
          setEmptyInput: g.a.func,
          fonts: g.a.array,
          openColorPicker: g.a.func,
          getCustomColorAndRemove: g.a.func,
          openDeleteModal: g.a.func,
          dateTimeFormats: g.a.array,
          stampTool: g.a.object,
          userName: g.a.string,
        },
        j = function (t) {
          var e = t.state,
            o = t.setState,
            r = t.setEmptyInput,
            s = t.fonts,
            l = t.openColorPicker,
            p = t.getCustomColorAndRemove,
            w = t.openDeleteModal,
            g = t.dateTimeFormats,
            S = t.stampTool,
            C = t.userName,
            O = function (t, e, o) {
              var n = "";
              return (t && (n += "[$currentUser] "), e && (n += o), n);
            },
            _ = g && g[0] ? g[0] : A,
            j = M(Object(n.useState)(T(_)), 2),
            D = j[0],
            I = j[1],
            N = M(Object(n.useState)(!0), 2),
            P = N[0],
            L = N[1],
            R = M(Object(n.useState)(!0), 2),
            B = R[0],
            H = R[1],
            F = M(Object(n.useState)(!0), 2),
            z = F[0],
            U = F[1],
            G = M(Object(n.useState)("Draft"), 2),
            W = G[0],
            Y = G[1],
            V = M(Object(m.a)(), 1)[0],
            X = O(P, B, D),
            q = M(Object(n.useState)(X), 2),
            K = q[0],
            $ = q[1],
            J = M(Object(n.useState)(!1), 2),
            Q = J[0],
            Z = J[1],
            tt = Object(n.useRef)(null),
            et = c.a.getCurrentUser(),
            ot = new Date().toLocaleString(),
            nt = function (t) {
              tt.current && !tt.current.contains(t.target) && Z(!1);
            };
          Object(n.useEffect)(
            function () {
              return (
                Q
                  ? document.addEventListener("click", nt)
                  : document.removeEventListener("click", nt),
                function () {
                  document.removeEventListener("click", nt);
                }
              );
            },
            [Q],
          );
          var at = function () {
              Z(!Q);
            },
            rt = Object(n.useRef)(),
            it = Object(n.useRef)(),
            st = Object(n.useRef)(),
            ct = function (t, n) {
              var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : e,
                r = {
                  canvas: rt.current,
                  title: t,
                  subtitle: n,
                  width: 300,
                  height: 100,
                  color: a.color,
                  textColor: a.textColor,
                  canvasParent: it.current,
                  font: a.font,
                  bold: a.bold,
                  italic: a.italic,
                  underline: a.underline,
                  strikeout: a.strikeout,
                },
                i = S.drawCustomStamp(r),
                s = rt.current.toDataURL();
              o(
                k(
                  k({}, a),
                  {},
                  {
                    width: i,
                    title: t,
                    subtitle: n,
                    height: r.height,
                    dataURL: s,
                  },
                ),
              );
            };
          Object(n.useEffect)(
            function () {
              ct(W, K, e);
            },
            [C],
          );
          var lt = function (t) {
              ct(W, K, k(k({}, e), {}, E({}, t, !e[t])));
            },
            pt = V("option.customStampModal.stampText"),
            mt = function (t) {
              return t && t.A ? t.toHexString().toLowerCase() : y.b.black;
            },
            dt = function (t, o) {
              var n = "text" === o;
              l();
              var a = function (t) {
                var o = t.detail,
                  r = o.element,
                  i = o.isVisible;
                if ("ColorPickerModal" === r && !i) {
                  var s = p();
                  if (s) {
                    var c = mt(s);
                    n ? At(c) : gt(c);
                    var l =
                      window.Core.Tools.RubberStampCreateTool[
                        n ? "TEXT_COLORS" : "FILL_COLORS"
                      ];
                    (l.push(c),
                      n ? Et(l) : ft(l),
                      (e = k(
                        k({}, e),
                        {},
                        E({}, n ? "textColor" : "color", c),
                      )),
                      ct(W, K, e));
                  }
                  Object(v.c)().instance.UI.removeEventListener(
                    h.a.VISIBILITY_CHANGED,
                    a,
                  );
                }
              };
              Object(v.c)().instance.UI.addEventListener(
                h.a.VISIBILITY_CHANGED,
                a,
              );
            },
            ut = function (t) {
              var e = "text" === t;
              w(function () {
                var t = e
                  ? kt.filter(function (t) {
                      return t !== _t;
                    })
                  : xt.filter(function (t) {
                      return t !== yt;
                    });
                (e ? Et(t) : ft(t),
                  e ? jt(null) : St(null),
                  (window.Core.Tools.RubberStampCreateTool[
                    e ? "TEXT_COLORS" : "FILL_COLORS"
                  ] = t));
              });
            },
            bt = M(
              Object(n.useState)(
                window.Core.Tools.RubberStampCreateTool.FILL_COLORS,
              ),
              2,
            ),
            xt = bt[0],
            ft = bt[1],
            ht = M(
              Object(n.useState)(
                e.color ||
                  window.Core.Tools.RubberStampCreateTool.FILL_COLORS[0],
              ),
              2,
            ),
            wt = ht[0],
            gt = ht[1],
            vt = M(Object(n.useState)(null), 2),
            yt = vt[0],
            St = vt[1],
            Ct = M(
              Object(n.useState)(
                window.Core.Tools.RubberStampCreateTool.TEXT_COLORS,
              ),
              2,
            ),
            kt = Ct[0],
            Et = Ct[1],
            Mt = M(
              Object(n.useState)(
                window.Core.Tools.RubberStampCreateTool.TEXT_COLORS[0],
              ),
              2,
            ),
            Ot = Mt[0],
            At = Mt[1],
            Tt = M(Object(n.useState)(null), 2),
            _t = Tt[0],
            jt = Tt[1],
            Dt = function (t) {
              (At(t), (e = k(k({}, e), {}, { textColor: t })), ct(W, K, e));
            },
            It = function (t) {
              (gt(t), (e = k(k({}, e), {}, { color: t })), ct(W, K, e));
            },
            Nt = g || [A],
            Pt = Array.from(
              new Set(
                Nt.map(function (t) {
                  return T(t, B, z);
                }),
              ),
            ).filter(function (t) {
              return "" !== t;
            });
          return a.a.createElement(
            "div",
            { className: "text-customstamp" },
            a.a.createElement(
              "div",
              { className: "canvas-container", ref: it },
              a.a.createElement("canvas", {
                className: "custom-stamp-canvas",
                ref: rt,
                role: "img",
                "aria-label": ""
                  .concat(V("option.customStampModal.previewCustomStamp"), " ")
                  .concat(W, ", ")
                  .concat(et, " ")
                  .concat(ot),
              }),
            ),
            a.a.createElement(
              "div",
              { className: "scroll-container" },
              a.a.createElement(
                "div",
                { className: "stamp-input-container" },
                a.a.createElement(
                  "label",
                  { htmlFor: "stampTextInput", className: "stamp-label" },
                  " ",
                  pt,
                  "*",
                ),
                a.a.createElement("input", {
                  id: "stampTextInput",
                  className: i()("text-customstamp-input", { error: !W }),
                  ref: st,
                  type: "text",
                  "aria-label": pt,
                  value: W,
                  onChange: function (t) {
                    var e = t.target.value || "";
                    (Y(e), r(!e), ct(e, K));
                  },
                }),
                !W &&
                  a.a.createElement(x.a, {
                    glyph: "icon-alert",
                    className: "error-icon",
                    role: "presentation",
                  }),
                a.a.createElement(
                  "div",
                  { className: "empty-stamp-input", "aria-live": "assertive" },
                  !W &&
                    a.a.createElement(
                      "p",
                      { className: "no-margin" },
                      V("message.emptyCustomStampInput"),
                    ),
                ),
              ),
              a.a.createElement(
                "div",
                { className: "font-container" },
                a.a.createElement(
                  "div",
                  {
                    className: "stamp-sublabel",
                    id: "custom-stamp-font-family-label",
                  },
                  " ",
                  V("option.customStampModal.fontStyle"),
                  " ",
                ),
                a.a.createElement(
                  "div",
                  { className: "font-inner-container" },
                  a.a.createElement(u.a, {
                    id: "custom-stamp-font",
                    labelledById: "custom-stamp-font-family-label",
                    items: s,
                    ariaLabel: V("option.customStampModal.fontStyle"),
                    onClickItem: function (t) {
                      ct(W, K, k(k({}, e), {}, { font: t }));
                    },
                    currentSelectionKey: e.font || s[0],
                    getCustomItemStyle: function (t) {
                      return { fontFamily: t };
                    },
                    maxHeight: 200,
                  }),
                  a.a.createElement(b.a, {
                    dataElement: "stampTextBoldButton",
                    onClick: function () {
                      return lt("bold");
                    },
                    img: "icon-menu-bold",
                    title: "option.richText.bold",
                    isActive: e.bold,
                    ariaPressed: e.bold,
                  }),
                  a.a.createElement(b.a, {
                    dataElement: "stampTextItalicButton",
                    onClick: function () {
                      return lt("italic");
                    },
                    img: "icon-menu-italic",
                    title: "option.richText.italic",
                    isActive: e.italic,
                    ariaPressed: e.italic,
                  }),
                  a.a.createElement(b.a, {
                    dataElement: "stampTextUnderlineButton",
                    onClick: function () {
                      return lt("underline");
                    },
                    img: "icon-menu-text-underline",
                    title: "option.richText.underline",
                    isActive: e.underline,
                    ariaPressed: e.underline,
                  }),
                  a.a.createElement(b.a, {
                    dataElement: "stampTextStrikeoutButton",
                    onClick: function () {
                      return lt("strikeout");
                    },
                    img: "icon-tool-text-manipulation-strikethrough",
                    title: "option.richText.strikeout",
                    isActive: e.strikeout,
                    ariaPressed: e.strikeout,
                  }),
                ),
              ),
              a.a.createElement(
                "div",
                { className: "color-container" },
                a.a.createElement(
                  "div",
                  { id: "stamp-text-color-label", className: "stamp-sublabel" },
                  V("option.customStampModal.textColor"),
                ),
                a.a.createElement(
                  "div",
                  { className: "colorpalette-container" },
                  a.a.createElement(f.a, {
                    getHexColor: mt,
                    color: Ot,
                    setColorToBeDeleted: jt,
                    colorToBeDeleted: _t,
                    customColors: kt,
                    onStyleChange: At,
                    handleColorOnClick: Dt,
                    handleOnClick: Dt,
                    openColorPicker: function (t) {
                      return dt(0, "text");
                    },
                    openDeleteModal: function () {
                      return ut("text");
                    },
                    ariaLabelledBy: "stamp-text-color-label",
                    toolTipXOffset: -7,
                    disableTitle: !0,
                    enableEdit: !0,
                    colorsAreHex: !0,
                  }),
                ),
              ),
              a.a.createElement(
                "div",
                { className: "color-container" },
                a.a.createElement(
                  "div",
                  {
                    id: "stamp-background-color-label",
                    className: "stamp-sublabel",
                  },
                  V("option.customStampModal.backgroundColor"),
                ),
                a.a.createElement(
                  "div",
                  { className: "colorpalette-container" },
                  a.a.createElement(f.a, {
                    getHexColor: mt,
                    color: wt,
                    setColorToBeDeleted: St,
                    colorToBeDeleted: yt,
                    customColors: xt,
                    onStyleChange: gt,
                    handleColorOnClick: It,
                    handleOnClick: It,
                    openColorPicker: function (t) {
                      return dt(0, "fill");
                    },
                    openDeleteModal: function () {
                      return ut("fill");
                    },
                    ariaLabelledBy: "stamp-background-color-label",
                    toolTipXOffset: -7,
                    disableTitle: !0,
                    enableEdit: !0,
                    colorsAreHex: !0,
                  }),
                ),
              ),
              a.a.createElement(
                "div",
                { className: "timestamp-container" },
                a.a.createElement(
                  "div",
                  { id: "timestamp-label", className: "stamp-sublabel" },
                  V("option.customStampModal.timestampText"),
                ),
                a.a.createElement(
                  "div",
                  {
                    className: "timeStamp-choice",
                    role: "group",
                    "aria-labelledby": "timestamp-label",
                  },
                  a.a.createElement(d.a, {
                    id: "default-username",
                    checked: P,
                    onChange: function () {
                      L(!P);
                      var t = O(!P, B, D);
                      ($(t), ct(W, t));
                    },
                    label: V("option.customStampModal.Username"),
                  }),
                  a.a.createElement(d.a, {
                    id: "default-date",
                    checked: B,
                    onChange: function () {
                      H(!B);
                      var t = T(_, !B, z);
                      I(t);
                      var e = O(P, !B || z, t);
                      ($(e), ct(W, e));
                    },
                    label: V("option.customStampModal.Date"),
                  }),
                  a.a.createElement(d.a, {
                    id: "default-time",
                    checked: z,
                    onChange: function () {
                      U(!z);
                      var t = T(_, B, !z);
                      I(t);
                      var e = O(P, B || !z, t);
                      ($(e), ct(W, e));
                    },
                    label: V("option.customStampModal.Time"),
                  }),
                ),
              ),
              (B || z) &&
                a.a.createElement(
                  "div",
                  { className: "date-format-container" },
                  a.a.createElement(
                    "div",
                    {
                      className: "stamp-sublabel",
                      id: "custom-stamp-date-format-label",
                    },
                    V("option.customStampModal.dateFormat"),
                  ),
                  a.a.createElement(
                    "button",
                    {
                      className: "hover-icon",
                      ref: tt,
                      onClick: at,
                      "aria-label": "".concat(
                        V("option.customStampModal.dateToolTipLabel"),
                      ),
                      type: "button",
                      tabIndex: "0",
                      onKeyDown: function (t) {
                        ("Enter" !== t.key && " " !== t.key) ||
                          (t.preventDefault(), at());
                      },
                      style: {
                        background: "none",
                        border: "none",
                        padding: 0,
                        display: "flex",
                        alignItems: "flex-start",
                        cursor: "pointer",
                      },
                    },
                    a.a.createElement(x.a, { glyph: "icon-info" }),
                    Q &&
                      a.a.createElement(
                        "div",
                        { className: "date-format-description" },
                        a.a.createElement(
                          "div",
                          { className: "date-format-cell" },
                          "M = ",
                          V("option.customStampModal.month"),
                        ),
                        a.a.createElement(
                          "div",
                          { className: "date-format-cell" },
                          "D = ",
                          V("option.customStampModal.day"),
                        ),
                        a.a.createElement(
                          "div",
                          { className: "date-format-cell" },
                          "Y = ",
                          V("option.customStampModal.year"),
                        ),
                        a.a.createElement(
                          "div",
                          { className: "date-format-cell" },
                          "H = ",
                          V("option.customStampModal.hour"),
                          " (24hr)",
                        ),
                        a.a.createElement(
                          "div",
                          { className: "date-format-cell" },
                          "h = ",
                          V("option.customStampModal.hour"),
                          " (12hr)",
                        ),
                        a.a.createElement(
                          "div",
                          { className: "date-format-cell" },
                          "m = ",
                          V("option.customStampModal.minute"),
                        ),
                        a.a.createElement(
                          "div",
                          { className: "date-format-cell" },
                          "s = ",
                          V("option.customStampModal.second"),
                        ),
                        a.a.createElement(
                          "div",
                          { className: "date-format-cell" },
                          "A = AM/PM",
                        ),
                      ),
                  ),
                  a.a.createElement(u.a, {
                    id: "custom-stamp-date-format-dropdown",
                    labelledById: "custom-stamp-date-format-label",
                    items: Pt,
                    ariaLabel: ""
                      .concat(V("option.customStampModal.dateFormat"), " - ")
                      .concat(D),
                    currentSelectionKey: D,
                    onClickItem: function (t) {
                      I(t);
                      var e = O(P, B || z, t);
                      ($(e), ct(W, e));
                    },
                    maxHeight: 200,
                  }),
                ),
            ),
          );
        };
      j.propTypes = _;
      var D = j,
        I = o(5),
        N = o(373),
        P = o(182);
      o(1962);
      function L(t, e) {
        var o =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!o) {
          if (
            Array.isArray(t) ||
            (o = U(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            o && (t = o);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var r,
          i = !0,
          s = !1;
        return {
          s: function () {
            o = o.call(t);
          },
          n: function () {
            var t = o.next();
            return ((i = t.done), t);
          },
          e: function (t) {
            ((s = !0), (r = t));
          },
          f: function () {
            try {
              i || null == o.return || o.return();
            } finally {
              if (s) throw r;
            }
          },
        };
      }
      function R() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var t,
          e,
          o = "function" == typeof Symbol ? Symbol : {},
          n = o.iterator || "@@iterator",
          a = o.toStringTag || "@@toStringTag";
        function r(o, n, a, r) {
          var c = n && n.prototype instanceof s ? n : s,
            l = Object.create(c.prototype);
          return (
            B(
              l,
              "_invoke",
              (function (o, n, a) {
                var r,
                  s,
                  c,
                  l = 0,
                  p = a || [],
                  m = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: u,
                    f: u.bind(t, 4),
                    d: function (e, o) {
                      return ((r = e), (s = 0), (c = t), (d.n = o), i);
                    },
                  };
                function u(o, n) {
                  for (
                    s = o, c = n, e = 0;
                    !m && l && !a && e < p.length;
                    e++
                  ) {
                    var a,
                      r = p[e],
                      u = d.p,
                      b = r[2];
                    o > 3
                      ? (a = b === n) &&
                        ((c = r[(s = r[4]) ? 5 : ((s = 3), 3)]),
                        (r[4] = r[5] = t))
                      : r[0] <= u &&
                        ((a = o < 2 && u < r[1])
                          ? ((s = 0), (d.v = n), (d.n = r[1]))
                          : u < b &&
                            (a = o < 3 || r[0] > n || n > b) &&
                            ((r[4] = o), (r[5] = n), (d.n = b), (s = 0)));
                  }
                  if (a || o > 1) return i;
                  throw ((m = !0), n);
                }
                return function (a, p, b) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    m && 1 === p && u(p, b), s = p, c = b;
                    (e = s < 2 ? t : c) || !m;

                  ) {
                    r ||
                      (s
                        ? s < 3
                          ? (s > 1 && (d.n = -1), u(s, c))
                          : (d.n = c)
                        : (d.v = c));
                    try {
                      if (((l = 2), r)) {
                        if ((s || (a = "next"), (e = r[a]))) {
                          if (!(e = e.call(r, c)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((c = e.value), s < 2 && (s = 0));
                        } else
                          (1 === s && (e = r.return) && e.call(r),
                            s < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  a +
                                  "' method",
                              )),
                              (s = 1)));
                        r = t;
                      } else if ((e = (m = d.n < 0) ? c : o.call(n, d)) !== i)
                        break;
                    } catch (e) {
                      ((r = t), (s = 1), (c = e));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: e, done: m };
                };
              })(o, a, r),
              !0,
            ),
            l
          );
        }
        var i = {};
        function s() {}
        function c() {}
        function l() {}
        e = Object.getPrototypeOf;
        var p = [][n]
            ? e(e([][n]()))
            : (B((e = {}), n, function () {
                return this;
              }),
              e),
          m = (l.prototype = s.prototype = Object.create(p));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, l)
              : ((t.__proto__ = l), B(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(m)),
            t
          );
        }
        return (
          (c.prototype = l),
          B(m, "constructor", l),
          B(l, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          B(l, a, "GeneratorFunction"),
          B(m),
          B(m, a, "Generator"),
          B(m, n, function () {
            return this;
          }),
          B(m, "toString", function () {
            return "[object Generator]";
          }),
          (R = function () {
            return { w: r, m: d };
          })()
        );
      }
      function B(t, e, o, n) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (t) {
          a = 0;
        }
        (B = function (t, e, o, n) {
          if (e)
            a
              ? a(t, e, {
                  value: o,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (t[e] = o);
          else {
            var r = function (e, o) {
              B(t, e, function (t) {
                return this._invoke(e, o, t);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(t, e, o, n);
      }
      function H(t, e, o, n, a, r, i) {
        try {
          var s = t[r](i),
            c = s.value;
        } catch (t) {
          return void o(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, a);
      }
      function F(t) {
        return function () {
          var e = this,
            o = arguments;
          return new Promise(function (n, a) {
            var r = t.apply(e, o);
            function i(t) {
              H(r, n, a, i, s, "next", t);
            }
            function s(t) {
              H(r, n, a, i, s, "throw", t);
            }
            i(void 0);
          });
        };
      }
      function z(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != o) {
              var n,
                a,
                r,
                i,
                s = [],
                c = !0,
                l = !1;
              try {
                if (((r = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = r.call(o)).done) &&
                    (s.push(n.value), s.length !== e);
                    c = !0
                  );
              } catch (t) {
                ((l = !0), (a = t));
              } finally {
                try {
                  if (
                    !c &&
                    null != o.return &&
                    ((i = o.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (l) throw a;
                }
              }
              return s;
            }
          })(t, e) ||
          U(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function U(t, e) {
        if (t) {
          if ("string" == typeof t) return G(t, e);
          var o = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === o && t.constructor && (o = t.constructor.name),
            "Map" === o || "Set" === o
              ? Array.from(t)
              : "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? G(t, e)
                : void 0
          );
        }
      }
      function G(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var W = window.Core.Tools.RubberStampCreateTool.FILL_COLORS,
        Y = function () {
          var t = z(
              Object(n.useState)({ font: "Helvetica", bold: !0, color: W[0] }),
              2,
            ),
            e = t[0],
            o = t[1],
            r = c.a.getToolsFromAllDocumentViewers(
              "AnnotationCreateRubberStamp",
            ),
            d = z(Object(m.a)(), 1)[0],
            u = Object(s.f)(),
            x = z(Object(n.useState)(!1), 2),
            f = x[0],
            h = x[1],
            w = Object(n.useRef)(null),
            g = Object(n.useRef)(null),
            v = z(
              Object(s.e)(function (t) {
                return [
                  p.a.isElementOpen(t, I.a.CUSTOM_STAMP_MODAL),
                  p.a.getFonts(t),
                  p.a.getDateTimeFormats(t),
                  p.a.getUserName(t),
                ];
              }),
              4,
            ),
            y = v[0],
            S = v[1],
            C = v[2],
            k = v[3],
            E = Object(s.d)(),
            M = function () {
              var t = w.current;
              if (t) {
                var e = g.current;
                if (e) {
                  var o = t.getBoundingClientRect(),
                    n = e.getBoundingClientRect(),
                    a = o.height > 0 && n.height >= o.height;
                  e.style.overflow = a ? "auto" : "visible";
                }
              }
            };
          (Object(n.useLayoutEffect)(
            function () {
              if (y)
                return (
                  M(),
                  window.addEventListener("resize", M),
                  function () {
                    window.removeEventListener("resize", M);
                  }
                );
            },
            [y],
          ),
            Object(n.useEffect)(
              function () {
                y && c.a.deselectAllAnnotations();
              },
              [y],
            ));
          var O = Object(P.a)(function () {
              E(l.a.closeElement(I.a.CUSTOM_STAMP_MODAL));
            }),
            A = (function () {
              var t = F(
                R().m(function t(e) {
                  var o, n, a, r;
                  return R().w(function (t) {
                    for (;;)
                      switch (t.n) {
                        case 0:
                          ((o = d("warning.colorPicker.deleteMessage")),
                            (n = d("warning.colorPicker.deleteTitle")),
                            (a = d("action.ok")),
                            (r = {
                              message: o,
                              title: n,
                              confirmBtnText: a,
                              onConfirm: e,
                            }),
                            E(l.a.showWarningMessage(r)));
                        case 1:
                          return t.a(2);
                      }
                  }, t);
                }),
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            T = i()({ Modal: !0, CustomStampModal: !0, open: y, closed: !y }),
            _ = (function () {
              var t = F(
                R().m(function t() {
                  var o, n, a, i, s, p, m;
                  return R().w(
                    function (t) {
                      for (;;)
                        switch ((t.p = t.n)) {
                          case 0:
                            (c.a.setToolMode("AnnotationCreateRubberStamp"),
                              (o = L(r)),
                              (t.p = 1),
                              o.s());
                          case 2:
                            if ((n = o.n()).done) {
                              t.n = 6;
                              break;
                            }
                            return (
                              (a = n.value).addCustomStamp(e),
                              (t.n = 3),
                              a.createCustomStampAnnotation(e)
                            );
                          case 3:
                            return ((i = t.v), (t.n = 4), a.setRubberStamp(i));
                          case 4:
                            a.showPreview();
                          case 5:
                            t.n = 2;
                            break;
                          case 6:
                            t.n = 8;
                            break;
                          case 7:
                            ((t.p = 7), (m = t.v), o.e(m));
                          case 8:
                            return ((t.p = 8), o.f(), t.f(8));
                          case 9:
                            (E(l.a.closeElement(I.a.CUSTOM_STAMP_MODAL)),
                              (s = r[0].getStandardStamps().length),
                              (p = r[0].getCustomStamps().length),
                              E(l.a.setSelectedStampIndex(s + p - 1)));
                          case 10:
                            return t.a(2);
                        }
                    },
                    t,
                    null,
                    [[1, 7, 8, 9]],
                  );
                }),
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            j = Object(P.a)(function () {
              f || _();
            });
          return y
            ? a.a.createElement(
                "div",
                {
                  className: T,
                  "data-element": I.a.CUSTOM_STAMP_MODAL,
                  ref: w,
                },
                a.a.createElement(
                  N.a,
                  {
                    ref: g,
                    title: d("option.customStampModal.modalName"),
                    closeHandler: O,
                    onCloseClick: O,
                    isOpen: y,
                    swipeToClose: !0,
                  },
                  a.a.createElement(
                    "div",
                    {
                      className: "container",
                      onMouseDown: function (t) {
                        return t.stopPropagation();
                      },
                    },
                    a.a.createElement(D, {
                      openDeleteModal: A,
                      getCustomColorAndRemove: function () {
                        var t = p.a.getCustomColor(u.getState());
                        return (E(l.a.setCustomColor(null)), t);
                      },
                      openColorPicker: function () {
                        E(l.a.openElement("ColorPickerModal"));
                      },
                      isModalOpen: y,
                      state: e,
                      setState: o,
                      closeModal: O,
                      setEmptyInput: h,
                      fonts: S,
                      dateTimeFormats: C,
                      stampTool: r[0],
                      userName: k,
                    }),
                    a.a.createElement(
                      "div",
                      { className: "footer" },
                      a.a.createElement(b.a, {
                        label: d("action.create"),
                        title: d("action.create"),
                        onClick: j,
                        disabled: f,
                        className: "stamp-create",
                      }),
                    ),
                  ),
                ),
              )
            : null;
        };
      e.default = Y;
    },
  },
]);
//# sourceMappingURL=chunk.50.js.map
