(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    1980: function (t, e, n) {
      var o = n(35),
        i = n(1981);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, ""]]);
      var a = {
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
            const i = e[o];
            if (0 === o)
              (i.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (i.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      t.exports = i.locals || {};
    },
    1981: function (t, e, n) {
      (t.exports = n(36)(!1)).push([
        t.i,
        ".language-dropdown.Dropdown{border:1px solid var(--gray-6)}.language-dropdown .Dropdown__items{inset-inline-start:0;width:336px}.theme-options{width:336px;height:160px;display:flex;justify-content:space-between}.theme-options .theme-option{width:160px;height:160px;display:flex;flex-direction:column}.theme-options .theme-option .Icon{width:160px;height:120px}.theme-options .theme-option .Icon.light-mode-icon{color:#fff}.theme-options .theme-option .Icon.dark-mode-icon{color:#000}.theme-options .theme-option .Icon svg{border:1px solid;border-color:var(--border);border-top-left-radius:4px;border-top-right-radius:4px}.theme-options .theme-option .theme-choice{height:100%;border:1px solid;border-color:var(--border);border-top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;display:flex;padding-inline-start:12px}.theme-options .theme-option.active-theme .Icon svg,.theme-options .theme-option.active-theme .theme-choice{border-color:var(--blue-5)}",
        "",
      ]);
    },
    1982: function (t, e, n) {
      var o = n(35),
        i = n(1983);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, ""]]);
      var a = {
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
            const i = e[o];
            if (0 === o)
              (i.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (i.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      t.exports = i.locals || {};
    },
    1983: function (t, e, n) {
      ((e = t.exports = n(36)(!1)).push([
        t.i,
        ".open.EditKeyboardShortcutModal.Modal{visibility:visible}.closed.EditKeyboardShortcutModal.Modal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.EditKeyboardShortcutModal.Modal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.EditKeyboardShortcutModal.Modal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.EditKeyboardShortcutModal.Modal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.EditKeyboardShortcutModal.Modal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.EditKeyboardShortcutModal.Modal .footer .modal-button.cancel:hover,.EditKeyboardShortcutModal.Modal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.EditKeyboardShortcutModal.Modal .footer .modal-button.cancel,.EditKeyboardShortcutModal.Modal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.EditKeyboardShortcutModal.Modal .footer .modal-button.cancel.disabled,.EditKeyboardShortcutModal.Modal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.EditKeyboardShortcutModal.Modal .footer .modal-button.cancel.disabled span,.EditKeyboardShortcutModal.Modal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.EditKeyboardShortcutModal.Modal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.EditKeyboardShortcutModal.Modal .modal-container .wrapper .modal-content{padding:10px}.EditKeyboardShortcutModal.Modal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.EditKeyboardShortcutModal.Modal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.EditKeyboardShortcutModal.Modal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.EditKeyboardShortcutModal.Modal .footer .modal-button.confirm{margin-inline-start:4px}.EditKeyboardShortcutModal.Modal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .EditKeyboardShortcutModal.Modal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .EditKeyboardShortcutModal.Modal .footer .modal-button{padding:23px 8px}}.EditKeyboardShortcutModal.Modal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .EditKeyboardShortcutModal.Modal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .EditKeyboardShortcutModal.Modal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .EditKeyboardShortcutModal.Modal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .EditKeyboardShortcutModal.Modal .swipe-indicator{width:32px}}.EditKeyboardShortcutModal.Modal .modal-container{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .EditKeyboardShortcutModal.Modal .modal-container,.EditKeyboardShortcutModal.Modal .App:not(.is-web-component) .modal-container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .EditKeyboardShortcutModal.Modal .modal-container,.EditKeyboardShortcutModal.Modal .App.is-web-component .modal-container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .EditKeyboardShortcutModal.Modal .modal-container,.EditKeyboardShortcutModal.Modal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .modal-container{width:100%;position:fixed;inset-inline-start:0;inset-block-end:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .EditKeyboardShortcutModal.Modal .modal-container,.EditKeyboardShortcutModal.Modal .App.is-web-component:not(.is-in-desktop-only-mode) .modal-container{width:100%;position:fixed;inset-inline-start:0;inset-block-end:0;padding-top:4px;min-width:100px}}.EditKeyboardShortcutModal.Modal .modal-container{display:flex;flex-direction:column;width:480px;height:320px}.EditKeyboardShortcutModal.Modal .modal-container .header{display:flex;flex-direction:row;justify-content:space-between;padding:16px;font-size:16px;font-weight:700;align-items:center}.EditKeyboardShortcutModal.Modal .modal-container .body{height:100%;display:flex;flex-direction:column;padding:16px;position:relative}.EditKeyboardShortcutModal.Modal .modal-container .body .press-key-note{font-weight:700}.EditKeyboardShortcutModal.Modal .modal-container .body .keyboard-shortcut{height:100%;color:var(--gray-7);display:flex;align-items:center;justify-content:center;background:var(--gray-2);border-radius:4px}.EditKeyboardShortcutModal.Modal .modal-container .body .keyboard-shortcut span:not(:last-child){margin-inline-end:8px}.EditKeyboardShortcutModal.Modal .modal-container .body .keyboard-shortcut.recording{outline:var(--focus-visible-outline)}.EditKeyboardShortcutModal.Modal .modal-container .body .conflict-warning{position:absolute;inset-block-end:50px;font-size:13px;color:var(--red);width:calc(100% - 32px);display:flex;justify-content:center}.EditKeyboardShortcutModal.Modal .modal-container .divider{height:1px;width:100%;background:var(--divider)}.EditKeyboardShortcutModal.Modal .modal-container .footer{padding:16px;margin-top:0;grid-gap:8px;gap:8px}.EditKeyboardShortcutModal.Modal .modal-container .footer .modal-button{height:32px;margin:0;font-weight:unset}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1984: function (t, e, n) {
      var o = n(35),
        i = n(1985);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, ""]]);
      var a = {
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
            const i = e[o];
            if (0 === o)
              (i.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (i.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      t.exports = i.locals || {};
    },
    1985: function (t, e, n) {
      ((e = t.exports = n(36)(!1)).push([
        t.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.shortcut-table-header{border:1px solid var(--gray-4);border-bottom:0;padding:12px 16px;display:flex;font-weight:700;position:relative}.shortcut-table-header .shortcut-table-header-command{width:220px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .shortcut-table-header .shortcut-table-header-command{width:180px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .shortcut-table-header .shortcut-table-header-command{width:180px}}.shortcut-table-header .shortcut-table-header-action{position:absolute;inset-inline-end:16px}.shortcut-table-content{border:1px solid var(--gray-4);padding:0 16px;display:flex;flex-direction:column}.shortcut-table-content .shortcut-table-item{display:flex;align-items:center;height:40px;position:relative}.shortcut-table-content .shortcut-table-item .shortcut-table-item-command{color:var(--gray-7);width:220px}.shortcut-table-content .shortcut-table-item .shortcut-table-item-command span:not(:last-child){margin-inline-end:8px}.shortcut-table-content .shortcut-table-item .shortcut-table-item-description{width:380px}.shortcut-table-content .shortcut-table-item button{position:absolute;inset-inline-end:0;height:32px;width:32px}.shortcut-table-content .shortcut-table-item button .Icon{height:20px;width:20px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .shortcut-table-content .shortcut-table-item .shortcut-table-item-command{width:180px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .shortcut-table-content .shortcut-table-item .shortcut-table-item-description{width:340px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .shortcut-table-content .shortcut-table-item .shortcut-table-item-command{width:180px}.App.is-web-component:not(.is-in-desktop-only-mode) .shortcut-table-content .shortcut-table-item .shortcut-table-item-description{width:340px}}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1986: function (t, e, n) {
      var o = n(35),
        i = n(1987);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, ""]]);
      var a = {
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
            const i = e[o];
            if (0 === o)
              (i.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (i.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      t.exports = i.locals || {};
    },
    1987: function (t, e, n) {
      (t.exports = n(36)(!1)).push([
        t.i,
        ".setting-item{border:1px solid var(--gray-4);padding:16px;display:flex;align-items:flex-start;justify-content:space-between}.setting-item:not(:last-child){border-bottom:0}.setting-item .setting-item-info{display:flex;flex-direction:column;margin-inline-end:18px}.setting-item .setting-item-info .setting-item-label{font-weight:700;margin-bottom:10px}",
        "",
      ]);
    },
    1988: function (t, e, n) {
      var o = n(35),
        i = n(1989);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, ""]]);
      var a = {
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
            const i = e[o];
            if (0 === o)
              (i.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (i.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      t.exports = i.locals || {};
    },
    1989: function (t, e, n) {
      ((e = t.exports = n(36)(!1)).push([
        t.i,
        ".open.SettingsModal{visibility:visible}.closed.SettingsModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SettingsModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.SettingsModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.SettingsModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.SettingsModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.SettingsModal .footer .modal-button.cancel:hover,.SettingsModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.SettingsModal .footer .modal-button.cancel,.SettingsModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.SettingsModal .footer .modal-button.cancel.disabled,.SettingsModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.SettingsModal .footer .modal-button.cancel.disabled span,.SettingsModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.SettingsModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.SettingsModal .modal-container .wrapper .modal-content{padding:10px}.SettingsModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.SettingsModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.SettingsModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.SettingsModal .footer .modal-button.confirm{margin-inline-start:4px}.SettingsModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .footer .modal-button{padding:23px 8px}}.SettingsModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .swipe-indicator{width:32px}}.SettingsModal .container{display:flex;flex-direction:column;width:888px;height:445px}.SettingsModal .container .settings-search-input{display:flex;border:1px solid var(--border);align-items:center;height:32px;padding:6px;border-radius:4px;background:var(--component-background);width:100%}.SettingsModal .container .settings-search-input[focus-within]{outline:none;border:1px solid var(--blue-5)}.SettingsModal .container .settings-search-input:focus-within{outline:none;border:1px solid var(--blue-5)}.SettingsModal .container .settings-search-input .Icon{width:16px;height:16px}.SettingsModal .container .settings-search-input input{width:100%;padding-inline-end:26px;height:20px;border:none;background:transparent;padding-inline-start:8px}.SettingsModal .container .header{display:flex;flex-direction:column;padding:12px 16px;font-size:16px;font-weight:700;align-items:center}.SettingsModal .container .header .title{display:flex;justify-content:space-between;align-items:center;width:100%;height:32px;margin-bottom:8px}.SettingsModal .container .body{height:100%;display:flex;flex-direction:row;overflow-y:hidden}.SettingsModal .container .body .settings-tabs-container{width:168px;flex-shrink:0;border-inline-end:1px solid var(--gray-4)}.SettingsModal .container .body .settings-tabs-container .settings-tabs button{border:none;background:none;width:100%}.SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab{height:32px;margin-top:4px;display:flex;align-items:center;padding:8px;color:var(--gray-9);cursor:pointer}.SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab:hover{border-inline-end:2px solid var(--blue-6);color:var(--blue-6)}.SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab.selected{background-color:var(--gray-2)!important;border-inline-end:2px var(--blue-5) solid;color:var(--blue-5);cursor:default}.SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab.focus-visible,.SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab:focus-visible{outline-offset:-2px;outline:var(--focus-visible-outline);border-radius:4px}.SettingsModal .container .body .settings-content{padding:16px;overflow-y:scroll;width:100%}.SettingsModal .container .body .settings-content .setting-section{margin-bottom:16px}.SettingsModal .container .body .settings-content .setting-section .setting-label{font-weight:700;margin-bottom:8px}.SettingsModal .container .body .settings-content .Dropdown.language-dropdown{height:32px}.SettingsModal .container .body .Button.custom-ui.icon-only:not([disabled]):hover{box-shadow:none;border:1px solid var(--blue-6)}.SettingsModal .container .divider{height:1px;width:100%;background:var(--divider)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container{width:100%;height:100%}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body{flex-direction:column}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-tabs-container{width:100%}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-tabs-container .settings-tabs{display:flex}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab{flex:1;height:48px;margin-top:0;justify-content:center;min-width:0}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab.selected{border-inline-end:0;border-bottom:2px solid var(--blue-5)}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-content{margin-top:16px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-content.KeyboardShortcutTab{overflow-x:scroll;width:640px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container{width:100%;height:100%}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body{flex-direction:column}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-tabs-container{width:100%}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-tabs-container .settings-tabs{display:flex}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab{flex:1;height:48px;margin-top:0;justify-content:center;min-width:0}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab.selected{border-inline-end:0;border-bottom:2px solid var(--blue-5)}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-content{margin-top:16px}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-content.KeyboardShortcutTab{overflow-x:scroll;width:640px}}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2096: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(9),
        n(10),
        n(14),
        n(34),
        n(21),
        n(20),
        n(12),
        n(44),
        n(22),
        n(18),
        n(16),
        n(8),
        n(17),
        n(19),
        n(11),
        n(13));
      var o = n(0),
        i = n.n(o),
        a = n(6),
        r = n(305),
        d = n(4),
        l = n(15),
        s = n.n(l),
        c = n(3),
        p = n(5),
        u = n(60),
        m = n(45),
        b = n(350),
        h = n(232),
        g = n(251),
        f = n(72),
        y = n(51),
        x = n(160),
        w = (n(50), n(99), n(62), n(153), Object(o.createContext)()),
        E = function (t) {
          var e = t.children,
            n = t.keywords,
            a = void 0 === n ? [] : n,
            r = Object(o.useContext)(w).trim();
          return !r ||
            a.some(function (t) {
              return t.toLowerCase().includes(r.toLowerCase());
            })
            ? i.a.createElement(i.a.Fragment, null, e)
            : null;
        };
      n(1980);
      function v(t, e) {
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
                i,
                a,
                r,
                d = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (d.push(o.value), d.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (i = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return d;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return S(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? S(t, e)
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
      function S(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var M = function () {
          var t = v(
              Object(a.e)(function (t) {
                return [d.a.getCurrentLanguage(t), d.a.getActiveTheme(t)];
              }),
              2,
            ),
            e = t[0],
            n = t[1],
            o = v(Object(r.a)(), 1)[0],
            l = Object(a.d)(),
            s = Object(a.f)(),
            w = n === h.a.LIGHT,
            S = function (t) {
              l(c.a.setActiveTheme(t));
            };
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              E,
              { keywords: [o("option.settings.language")] },
              i.a.createElement(
                u.a,
                {
                  className: "setting-section",
                  dataElement: p.a.SETTINGS_LANGUAGE_SECTION,
                },
                i.a.createElement(
                  "div",
                  { className: "setting-label" },
                  i.a.createElement(
                    "label",
                    { id: "language-dropdown-label" },
                    o("option.settings.language"),
                  ),
                ),
                i.a.createElement(f.a, {
                  id: "language-dropdown",
                  labelledById: "language-dropdown-label",
                  dataElement: p.a.SETTINGS_LANGUAGE_DROPDOWN,
                  items: b.a,
                  currentSelectionKey: e,
                  getKey: function (t) {
                    return t[0];
                  },
                  getDisplayValue: function (t) {
                    return t[1];
                  },
                  onClickItem: function (t) {
                    t !== e && Object(g.a)(s)(t);
                  },
                  maxHeight: 200,
                  width: 336,
                  getCustomItemStyle: function () {
                    return { textAlign: "left", width: "326px" };
                  },
                  className: "language-dropdown",
                }),
              ),
            ),
            i.a.createElement(
              E,
              {
                keywords: [
                  o("option.settings.theme"),
                  o("option.settings.lightMode"),
                  o("option.settings.darkMode"),
                ],
              },
              !m.e &&
                i.a.createElement(
                  u.a,
                  {
                    className: "setting-section",
                    dataElement: p.a.SETTINGS_THEME_SECTION,
                  },
                  i.a.createElement(
                    "div",
                    { className: "setting-label" },
                    i.a.createElement(
                      "label",
                      null,
                      o("option.settings.theme"),
                    ),
                  ),
                  i.a.createElement(
                    "div",
                    { className: "theme-options" },
                    i.a.createElement(
                      "div",
                      {
                        className: "theme-option ".concat(
                          w ? "active-theme" : "",
                        ),
                      },
                      i.a.createElement(y.a, {
                        glyph: "icon-light-mode-option",
                        className: "light-mode-icon",
                      }),
                      i.a.createElement(
                        "div",
                        { className: "theme-choice" },
                        i.a.createElement(x.a, {
                          radio: !0,
                          checked: w,
                          onChange: function () {
                            return S(h.a.LIGHT);
                          },
                          label: o("option.settings.lightMode"),
                          name: "theme_choice",
                        }),
                      ),
                    ),
                    i.a.createElement(
                      "div",
                      {
                        className: "theme-option ".concat(
                          w ? "" : "active-theme",
                        ),
                      },
                      i.a.createElement(y.a, {
                        glyph: "icon-dark-mode-option",
                        className: "dark-mode-icon",
                      }),
                      i.a.createElement(
                        "div",
                        { className: "theme-choice" },
                        i.a.createElement(x.a, {
                          radio: !0,
                          checked: !w,
                          onChange: function () {
                            return S(h.a.DARK);
                          },
                          label: o("option.settings.darkMode"),
                          name: "theme_choice",
                        }),
                      ),
                    ),
                  ),
                ),
            ),
          );
        },
        A = (n(38), n(91), n(115), n(467), n(41)),
        T = n(58),
        k = (n(76), n(85), n(132), n(140)),
        N = n(373),
        O = n(23),
        C = n(182);
      n(1982);
      function j(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return K(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          _(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function D(t, e) {
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
                i,
                a,
                r,
                d = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (d.push(o.value), d.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (i = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return d;
            }
          })(t, e) ||
          _(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _(t, e) {
        if (t) {
          if ("string" == typeof t) return K(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? K(t, e)
                : void 0
          );
        }
      }
      function K(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var I = function (t) {
          var e = t.currentShortcut,
            n = t.finishEditing,
            l = t.getCommandStrings,
            c = D(Object(r.a)(), 1)[0],
            p = Object(a.e)(d.a.getShortcutKeyMap),
            u = D(Object(o.useState)(""), 2),
            m = u[0],
            b = u[1],
            h = D(Object(o.useState)(!1), 2),
            g = h[0],
            f = h[1],
            y = D(Object(o.useState)(new Set()), 2),
            x = y[0],
            w = y[1],
            E = D(Object(o.useState)(!1), 2),
            v = E[0],
            S = E[1];
          (Object(o.useEffect)(
            function () {
              b(p[e]);
            },
            [e, p],
          ),
            Object(o.useEffect)(
              function () {
                if (g) {
                  var t = function (t) {
                      t.preventDefault();
                      var e = _(t);
                      w(function (t) {
                        return new Set([].concat(j(t), [e]));
                      });
                    },
                    e = function () {
                      if (x.size > 0) {
                        var t = Array.from(x).join("+").toLowerCase();
                        b(t);
                      }
                      if ((w(new Set()), f(!1), v)) {
                        var e = Object(O.a)().querySelector(
                          '[data-element="EditKeyboardShortcutModalEditButton"]',
                        );
                        e && e.focus();
                      }
                    };
                  return (
                    window.addEventListener("keydown", t),
                    window.addEventListener("keyup", e),
                    k.a.setScope("editShortcut"),
                    function () {
                      (window.removeEventListener("keydown", t),
                        window.removeEventListener("keyup", e),
                        k.a.setScope(T.h));
                    }
                  );
                }
              },
              [g, x, v],
            ));
          var M = Object(C.a)(n),
            _ = function (t) {
              switch (t.keyCode) {
                case 16:
                  return "shift";
                case 17:
                  return "ctrl";
                case 18:
                  return "alt";
                case 91:
                case 93:
                  return "command";
                default:
                  return k.a.getPressedKeyString()[
                    k.a.getPressedKeyCodes().indexOf(t.keyCode)
                  ];
              }
            },
            K = T.g.hasConflict(e, m);
          return i.a.createElement(
            "div",
            { className: "Modal EditKeyboardShortcutModal open" },
            i.a.createElement(
              N.a,
              {
                isOpen: !0,
                title: "option.settings.editKeyboardShortcut",
                onCloseClick: n,
              },
              i.a.createElement(
                "div",
                { className: "body" },
                i.a.createElement(
                  "div",
                  {
                    className: s()({
                      "keyboard-shortcut": !0,
                      recording: g && v,
                    }),
                  },
                  l(m).map(function (t, e) {
                    return i.a.createElement("span", { key: e }, t);
                  }),
                ),
                K &&
                  i.a.createElement(
                    "div",
                    { className: "conflict-warning" },
                    c("option.settings.shortcutAlreadyExists"),
                  ),
              ),
              i.a.createElement("div", { className: "divider" }),
              i.a.createElement(
                "div",
                { className: "footer" },
                i.a.createElement(A.a, {
                  className: "modal-button secondary-btn-custom",
                  label: c("option.settings.editShortcut"),
                  disabled: g,
                  onClick: function (t) {
                    if ((w(new Set()), t.detail > 0)) (f(!0), S(!1));
                    else {
                      S(!0);
                      var e = function () {
                        (f(!0), window.removeEventListener("keyup", e));
                      };
                      window.addEventListener("keyup", e);
                    }
                  },
                  dataElement: "EditKeyboardShortcutModalEditButton",
                }),
                i.a.createElement(A.a, {
                  className: "modal-button confirm",
                  label: c("option.settings.setShortcut"),
                  disabled: g || K,
                  onClick: function () {
                    (k.a.setScope(T.h), T.g.setShortcutKey(e, m), M());
                  },
                  dataElement: "EditKeyboardShortcutModalSetButton",
                }),
              ),
            ),
          );
        },
        R = n(90),
        L = n(2),
        G = n.n(L),
        H = function (t) {
          var e,
            n = Object(a.e)(d.a.getShortcutKeyMap),
            i = Object(o.useMemo)(
              function () {
                return T.c[t] || T.c[T.a.DEFAULT];
              },
              [t],
            );
          switch (t) {
            case T.a.SPREADSHEET:
              e = T.f;
              break;
            case T.a.DEFAULT:
            default:
              e = n;
          }
          return { keyboardShortcuts: i, shortcutKeyMap: e };
        };
      n(1984);
      function U(t, e) {
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
                i,
                a,
                r,
                d = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (d.push(o.value), d.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (i = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return d;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return B(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? B(t, e)
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
      function B(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var P = function (t) {
        var e = t.editorMode,
          n = void 0 === e ? T.a.DEFAULT : e,
          d = U(Object(r.a)(), 1)[0],
          l = Object(a.d)(),
          s = H(n),
          u = s.keyboardShortcuts,
          b = s.shortcutKeyMap,
          h = U(Object(o.useState)(void 0), 2),
          g = h[0],
          f = h[1],
          y = Object(o.useMemo)(
            function () {
              return n !== T.a.DEFAULT;
            },
            [n],
          ),
          x = function (t) {
            if (!t) return [];
            if ((t = t.toUpperCase()).includes(", COMMAND")) {
              var e = t.split(", ");
              t = m.j ? e[1] : e[0];
            }
            return t.split(/(\+)/g);
          },
          w = Object(R.a)(function (t) {
            !(function (t) {
              (l(c.a.setIsElementHidden(p.a.SETTINGS_MODAL, !0)), f(t));
            })(
              t.currentTarget
                .getAttribute("data-element")
                .replace("edit-button-", ""),
            );
          });
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            { className: "shortcut-table-header" },
            i.a.createElement(
              "div",
              { className: "shortcut-table-header-command" },
              d("option.settings.command"),
            ),
            i.a.createElement(
              "div",
              { className: "shortcut-table-header-description" },
              d("option.settings.description"),
            ),
            i.a.createElement(
              "div",
              { className: "shortcut-table-header-action" },
              d("option.settings.action"),
            ),
          ),
          i.a.createElement(
            "div",
            { className: "shortcut-table-content" },
            u.map(function (t) {
              var e = U(t, 2),
                n = e[0],
                o = e[1];
              return i.a.createElement(
                E,
                { key: n, keywords: [d(o)] },
                i.a.createElement(
                  "div",
                  { className: "shortcut-table-item" },
                  i.a.createElement(
                    "div",
                    { className: "shortcut-table-item-command" },
                    x(b[n]).map(function (t, e) {
                      return i.a.createElement("span", { key: e }, t);
                    }),
                  ),
                  i.a.createElement(
                    "div",
                    { className: "shortcut-table-item-description" },
                    d(o),
                  ),
                  i.a.createElement(A.a, {
                    dataElement: "edit-button-".concat(n),
                    img: "icon-edit-form-field",
                    title: d("action.edit"),
                    ariaLabel: "".concat(d(o), " ").concat(d("action.edit")),
                    onClick: w,
                    disabled: y,
                  }),
                ),
              );
            }),
          ),
          g &&
            i.a.createElement(I, {
              currentShortcut: g,
              finishEditing: function () {
                (f(void 0), l(c.a.setIsElementHidden(p.a.SETTINGS_MODAL, !1)));
              },
              getCommandStrings: x,
            }),
        );
      };
      P.propTypes = { editorMode: G.a.oneOf(Object.values(T.a)) };
      var F = P,
        W = (n(631), n(632), n(110)),
        V = n(1),
        q = n(7);
      n(1986);
      function z(t, e) {
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
                i,
                a,
                r,
                d = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (d.push(o.value), d.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (i = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return d;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Y(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Y(t, e)
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
      function Y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var $ = function (t, e, n, o) {
          return { label: t, description: e, isChecked: n, onToggled: o };
        },
        J = function () {
          var t = z(
              Object(a.e)(function (t) {
                return [
                  d.a.shouldFadePageNavigationComponent(t),
                  d.a.isNoteSubmissionWithEnterEnabled(t),
                  d.a.isCommentThreadExpansionEnabled(t),
                  d.a.isNotesPanelRepliesCollapsingEnabled(t),
                  d.a.isNotesPanelTextCollapsingEnabled(t),
                  d.a.shouldClearSearchPanelOnClose(t),
                  d.a.pageDeletionConfirmationModalEnabled(t),
                  d.a.isThumbnailSelectingPages(t),
                  d.a.getCustomSettings(t),
                  d.a.isToolDefaultStyleUpdateFromAnnotationPopupEnabled(t),
                  d.a.isWidgetHighlightingEnabled(t),
                  d.a.getUIConfiguration(t),
                ];
              }),
              12,
            ),
            e = t[0],
            n = t[1],
            l = t[2],
            s = t[3],
            p = t[4],
            u = t[5],
            m = t[6],
            b = t[7],
            h = t[8],
            g = t[9],
            f = t[10],
            y = t[11],
            w = z(Object(r.a)(), 1)[0],
            v = Object(a.d)(),
            S = z(Object(o.useState)(), 2)[1],
            M = Object(o.useCallback)(function () {
              return S({});
            }, []),
            A = [
              $(
                w("option.settings.disableFadePageNavigationComponent"),
                w("option.settings.disableFadePageNavigationComponentDesc"),
                !e,
                function (t) {
                  v(
                    t
                      ? c.a.disableFadePageNavigationComponent()
                      : c.a.enableFadePageNavigationComponent(),
                  );
                },
              ),
              $(
                w("option.settings.disableNativeScrolling"),
                w("option.settings.disableNativeScrollingDesc"),
                !W.a.useNativeScroll,
                function (t) {
                  W.a.useNativeScroll = !t;
                },
              ),
              $(
                w("option.settings.enabledFormFieldHighlighting"),
                w("option.settings.enabledFormFieldHighlightingDesc"),
                f,
                function (t) {
                  t ? k() : T();
                },
              ),
            ],
            T = function () {
              V.a
                .getAnnotationManager()
                .getFieldManager()
                .disableWidgetHighlighting();
            },
            k = function () {
              V.a
                .getAnnotationManager()
                .getFieldManager()
                .enableWidgetHighlighting();
            },
            N = [
              $(
                w(
                  "option.settings.disableToolDefaultStyleUpdateFromAnnotationPopup",
                ),
                w(
                  "option.settings.disableToolDefaultStyleUpdateFromAnnotationPopupDesc",
                ),
                !g,
                function (t) {
                  return v(
                    c.a.setToolDefaultStyleUpdateFromAnnotationPopupEnabled(!t),
                  );
                },
              ),
            ],
            O = [
              $(
                w("option.settings.disableNoteSubmissionWithEnter"),
                w("option.settings.disableNoteSubmissionWithEnterDesc"),
                !n,
                function (t) {
                  return v(c.a.setNoteSubmissionEnabledWithEnter(!t));
                },
              ),
              $(
                w("option.settings.disableAutoExpandCommentThread"),
                w("option.settings.disableAutoExpandCommentThreadDesc"),
                !l,
                function (t) {
                  return v(c.a.setCommentThreadExpansion(!t));
                },
              ),
              $(
                w("option.settings.disableReplyCollapse"),
                w("option.settings.disableReplyCollapseDesc"),
                !s,
                function (t) {
                  return v(c.a.setNotesPanelRepliesCollapsing(!t));
                },
              ),
              $(
                w("option.settings.disableTextCollapse"),
                w("option.settings.disableTextCollapseDesc"),
                !p,
                function (t) {
                  return v(c.a.setNotesPanelTextCollapsing(!t));
                },
              ),
            ],
            C =
              y !== q.y.DOCX_EDITOR
                ? [
                    $(
                      w("option.settings.disableClearSearchOnPanelClose"),
                      w("option.settings.disableClearSearchOnPanelCloseDesc"),
                      !u,
                      function (t) {
                        return v(c.a.setClearSearchOnPanelClose(!t));
                      },
                    ),
                  ]
                : [],
            j = [
              $(
                w("option.settings.disablePageDeletionConfirmationModal"),
                w("option.settings.disablePageDeletionConfirmationModalDesc"),
                !m,
                function (t) {
                  v(
                    t
                      ? c.a.disablePageDeletionConfirmationModal()
                      : c.a.enablePageDeletionConfirmationModal(),
                  );
                },
              ),
              $(
                w("option.settings.disableMultiselect"),
                w("option.settings.disableMultiselectDesc"),
                !b,
                function (t) {
                  return v(c.a.setThumbnailSelectingPages(!t));
                },
              ),
            ],
            D = [
              [w("option.settings.viewing"), A],
              [w("option.settings.annotations"), N],
              [w("option.settings.notesPanel"), O],
              [w("option.settings.search"), C],
              [w("option.settings.pageManipulation"), j],
              [w("option.settings.miscellaneous"), h],
            ],
            _ = function (t, e) {
              return [
                t,
                e
                  .map(function (t) {
                    return [t.label, t.description];
                  })
                  .flat(),
              ].flat();
            };
          return i.a.createElement(
            i.a.Fragment,
            null,
            D.map(function (t) {
              var e = z(t, 2),
                n = e[0],
                o = e[1];
              return o.length < 1
                ? null
                : i.a.createElement(
                    E,
                    { key: n, keywords: _(n, o) },
                    i.a.createElement(
                      "div",
                      { className: "setting-section" },
                      i.a.createElement(
                        "div",
                        { className: "setting-label" },
                        i.a.createElement("label", null, n),
                      ),
                      o.map(function (t) {
                        return i.a.createElement(
                          E,
                          {
                            key: t.label,
                            keywords: [n, t.label, t.description],
                          },
                          i.a.createElement(
                            "div",
                            { className: "setting-item" },
                            i.a.createElement(
                              "div",
                              { className: "setting-item-info" },
                              i.a.createElement(
                                "div",
                                { className: "setting-item-label" },
                                t.label,
                              ),
                              i.a.createElement("div", null, t.description),
                            ),
                            i.a.createElement(x.a, {
                              "aria-label": t.label,
                              isSwitch: !0,
                              checked:
                                "function" == typeof t.isChecked
                                  ? t.isChecked()
                                  : t.isChecked,
                              onChange: function (e) {
                                (t.onToggled(e.target.checked), M());
                              },
                            }),
                          ),
                        );
                      }),
                    ),
                  );
            }),
          );
        };
      n(1988);
      function X(t, e) {
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
                i,
                a,
                r,
                d = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = a.call(n)).done) &&
                    (d.push(o.value), d.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (i = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return d;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Q(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Q(t, e)
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
      function Q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var Z = p.a.SETTINGS_MODAL,
        tt = function () {
          var t = Object(a.e)(function (t) {
              return d.a.isElementDisabled(t, p.a.SETTINGS_MODAL);
            }),
            e = Object(a.e)(function (t) {
              return d.a.isElementOpen(t, p.a.SETTINGS_MODAL);
            }),
            n = Object(a.e)(d.a.isSpreadsheetEditorModeEnabled),
            l = Object(a.e)(function (t) {
              return d.a.getSelectedTab(t, Z);
            }),
            m = Object(a.e)(function (t) {
              return d.a.isElementDisabled(t, p.a.SETTINGS_GENERAL_BUTTON);
            }),
            b = Object(a.e)(function (t) {
              return d.a.isElementDisabled(t, p.a.SETTINGS_KEYBOARD_BUTTON);
            }),
            h = Object(a.e)(function (t) {
              return d.a.isElementDisabled(t, p.a.SETTINGS_ADVANCED_BUTTON);
            }),
            g = X(Object(r.a)(), 1)[0],
            f = Object(a.d)(),
            x = X(Object(o.useState)(""), 2),
            E = x[0],
            v = x[1],
            S = [
              [p.a.SETTINGS_GENERAL_BUTTON, g("option.settings.general")],
              [
                p.a.SETTINGS_KEYBOARD_BUTTON,
                g("option.settings.keyboardShortcut"),
              ],
              [
                p.a.SETTINGS_ADVANCED_BUTTON,
                g("option.settings.advancedSetting"),
              ],
            ];
          Object(o.useEffect)(
            function () {
              if (
                (l === p.a.SETTINGS_GENERAL_BUTTON && m) ||
                (l === p.a.SETTINGS_KEYBOARD_BUTTON && b) ||
                (l === p.a.SETTINGS_ADVANCED_BUTTON && h)
              ) {
                var t = "";
                (m
                  ? b
                    ? h || (t = p.a.SETTINGS_ADVANCED_BUTTON)
                    : (t = p.a.SETTINGS_KEYBOARD_BUTTON)
                  : (t = p.a.SETTINGS_GENERAL_BUTTON),
                  f(c.a.setSelectedTab(Z, t)));
              }
            },
            [m, b, h],
          );
          var A = function () {
            f(c.a.closeElement(p.a.SETTINGS_MODAL));
          };
          if (t) return null;
          var k = s()("Modal", "SettingsModal", "open");
          return i.a.createElement(
            w.Provider,
            { value: E },
            i.a.createElement(
              "div",
              { className: k, "data-element": p.a.SettingsModal },
              i.a.createElement(
                N.a,
                {
                  title: g("option.settings.settings"),
                  closeHandler: A,
                  onCloseClick: A,
                  isOpen: e,
                  swipeToClose: !0,
                },
                i.a.createElement(
                  "div",
                  { className: "container" },
                  i.a.createElement("div", { className: "swipe-indicator" }),
                  i.a.createElement(
                    "div",
                    { className: "header" },
                    i.a.createElement(
                      "div",
                      { className: "settings-search-input" },
                      i.a.createElement(y.a, { glyph: "icon-header-search" }),
                      i.a.createElement("input", {
                        value: E,
                        onChange: function (t) {
                          return v(t.target.value);
                        },
                        "aria-label": g("message.searchSettingsPlaceholder"),
                      }),
                    ),
                  ),
                  i.a.createElement("div", { className: "divider" }),
                  i.a.createElement(
                    "div",
                    { className: "body" },
                    i.a.createElement(
                      "div",
                      { className: "settings-tabs-container" },
                      i.a.createElement(
                        "div",
                        { className: "settings-tabs" },
                        S.filter(function (t) {
                          var e = X(t, 1)[0];
                          return !n || e !== p.a.SETTINGS_ADVANCED_BUTTON;
                        }).map(function (t) {
                          var e = X(t, 2),
                            n = e[0],
                            o = e[1],
                            a = s()("settings-tab", { selected: n === l });
                          return i.a.createElement(
                            u.a,
                            {
                              type: "button",
                              className: a,
                              dataElement: n,
                              onClick: function () {
                                return (function (t) {
                                  t !== l && f(c.a.setSelectedTab(Z, t));
                                })(n);
                              },
                              key: n,
                              "aria-selected": n === l,
                              "aria-current": n === l ? "page" : null,
                            },
                            o,
                          );
                        }),
                      ),
                    ),
                    i.a.createElement(
                      "div",
                      {
                        className: s()("settings-content", {
                          KeyboardShortcutTab:
                            l === p.a.SETTINGS_KEYBOARD_BUTTON,
                        }),
                      },
                      l === p.a.SETTINGS_GENERAL_BUTTON &&
                        i.a.createElement(M, null),
                      l === p.a.SETTINGS_KEYBOARD_BUTTON &&
                        i.a.createElement(F, {
                          editorMode: (function () {
                            switch (!0) {
                              case n:
                                return T.a.SPREADSHEET;
                              default:
                                return T.a.DEFAULT;
                            }
                          })(),
                        }),
                      l === p.a.SETTINGS_ADVANCED_BUTTON &&
                        i.a.createElement(J, null),
                    ),
                  ),
                ),
              ),
            ),
          );
        };
      e.default = tt;
    },
  },
]);
//# sourceMappingURL=chunk.37.js.map
