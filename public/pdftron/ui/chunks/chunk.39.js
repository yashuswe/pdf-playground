(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    1598: function (e, t, n) {
      var o = n(35),
        a = n(1743);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
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
            const a = t[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(a, r);
      e.exports = a.locals || {};
    },
    1739: function (e, t, n) {
      var o = n(35),
        a = n(1740);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
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
            const a = t[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(a, r);
      e.exports = a.locals || {};
    },
    1740: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.thumbnailControls-overlay{display:grid;text-align:center;z-index:2;margin-top:5px;grid-template-areas:"rotate delete . more";grid-template-columns:repeat(3,1fr)}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.thumbnailControls-overlay{display:flex}}.thumbnailControls-overlay .Button{height:32px;padding:0;width:32px}.thumbnailControls-overlay .Button .Icon{height:24px;width:24px;color:var(--icon-color)}.thumbnailControls-overlay .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.thumbnailControls-overlay .Button.active{background:var(--view-header-button-active)}.thumbnailControls-overlay .Button.active .Icon{color:var(--selected-icon-color)}.thumbnailControls-overlay.modular-ui .Button:hover{border:1px solid var(--focus-border);background:var(--tools-button-hover)}.thumbnailControls-overlay .rotate-button{grid-area:rotate}.thumbnailControls-overlay .delete-button{grid-area:delete}.thumbnailControls-overlay .more-options{grid-area:more}.thumbnailControls-overlay.custom-buttons .Button{grid-area:auto}.thumbnailControls{display:flex;flex-direction:row;text-align:center;z-index:2;margin-top:5px}.thumbnailControls .Button{height:32px;padding:0;width:32px;margin:0 4px}.thumbnailControls .Button .Icon{height:24px;width:24px;color:var(--icon-color)}.thumbnailControls .Button:hover{background:var(--view-header-button-hover);border-radius:4px}',
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1741: function (e, t, n) {
      var o = n(35),
        a = n(1742);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
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
            const a = t[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(a, r);
      e.exports = a.locals || {};
    },
    1742: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.Thumbnail{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer}.Thumbnail.active .container .page-image{border:2px solid var(--focus-border);box-shadow:none;box-sizing:content-box}.Thumbnail .container{position:relative;display:flex;justify-content:center;align-items:center;cursor:pointer}.Thumbnail .container .page-image{box-shadow:0 0 3px 0 var(--box-shadow)}.Thumbnail .container .annotation-image,.Thumbnail .container .page-image{position:absolute;inset-inline-start:50%;inset-block-start:50%;transform:translate(-50%,-50%)}.Thumbnail .container .annotation-image.right-to-left,.Thumbnail .container .page-image.right-to-left{transform:translate(-15%,-50%);inset-inline-start:0}.Thumbnail .container .checkbox{position:absolute;border-radius:4px;z-index:4}.Thumbnail .container .default{inset-block-start:3%;inset-inline-end:15%}.Thumbnail .container .rotated{inset-block-start:15%;inset-inline-end:3%}.Thumbnail .page-label{margin-top:11px}.Thumbnail.selected .container .thumbnail:before{color:#fff;background:var(--focus-border);width:16px;height:16px;position:absolute;z-index:10}.Thumbnail.selected .container canvas{background:hsla(0,0%,100%,.6)}.Thumbnail.active .page-label{color:var(--focus-border)!important}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1743: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .documentControlsContainer{margin-inline-start:16px;margin-inline-end:16px;margin-bottom:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .documentControlsContainer{margin-inline-start:16px;margin-inline-end:16px;margin-bottom:16px}}.documentControlsContainer .PageControlContainer{display:flex;background-color:var(--gray-2);justify-content:center;align-content:center;border-radius:4px}.documentControlsContainer .PageControlContainer .dropdown-menu{position:relative}.documentControlsContainer .PageControlContainer .dropdown-menu .indicator{position:absolute;inset-block-end:1px;inset-inline-end:1px;width:0;height:0;border-inline-start:4px solid transparent;border-inline-end:4px solid transparent;border-top:4px solid #c4c4c4;transform:rotateY(0deg) rotate(315deg)}.documentControlsContainer .PageControlContainer button .Icon{height:21px;width:21px;color:var(--icon-color)}.documentControlsContainer .PageControlContainer .button-hover:hover{background:var(--view-header-button-hover);border-radius:4px}.documentControlsContainer .PageControlContainer .divider{height:20px;width:1px;background:var(--divider);margin:6px;display:block!important}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1744: function (e, t, n) {
      var o = n(35),
        a = n(1745);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
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
            const a = t[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(a, r);
      e.exports = a.locals || {};
    },
    1745: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.documentControls{display:flex;flex-direction:column}.documentControls .divider{height:1px;background:var(--divider);margin:16px 0 8px}.documentControls .documentControlsInput{display:flex;flex-direction:row;padding-bottom:16px;padding-top:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .documentControls .documentControlsInput{padding-bottom:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .documentControls .documentControlsInput{padding-bottom:0}}.documentControls .documentControlsInput.customizableUI{padding:8px 0}.documentControls .documentControlsInput .pagesInput{width:100%;height:30px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding-top:4px;padding-bottom:4px;padding-inline-start:8px;padding-inline-end:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .documentControls .documentControlsInput .pagesInput{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .documentControls .documentControlsInput .pagesInput{font-size:13px}}.documentControls .documentControlsInput .pagesInput:focus{outline:none;border:1px solid var(--focus-border)}.documentControls .documentControlsInput .pagesInput::-moz-placeholder{color:var(--placeholder-text)}.documentControls .documentControlsInput .pagesInput::placeholder{color:var(--placeholder-text)}.documentControls .documentControlsInput .documentControlsButton{display:flex;flex-direction:row;padding-inline-start:2px}.documentControls .documentControlsInput .documentControlsButton .Button{height:30px;padding:0;width:30px;margin:0 4px}.documentControls .documentControlsInput .documentControlsButton .Button .Icon{height:24px;width:24px;color:var(--icon-color)}.documentControls .documentControlsInput .documentControlsButton .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.documentControls .documentControlsLabel{margin-top:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .documentControls .documentControlsLabel{margin-top:8px;font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .documentControls .documentControlsLabel{margin-top:8px;font-size:13px}}.documentControls .documentControlsLabel .multiSelectExampleLabel{color:var(--faded-text);margin-inline-start:2px}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1746: function (e, t, n) {
      var o = n(35),
        a = n(1747);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var r = {
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
            const a = t[o];
            if (0 === o)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(a, r);
      e.exports = a.locals || {};
    },
    1747: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.thumbnail-slider-container{display:flex;align-items:center;width:230px;margin:0 auto;height:40px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumbnail-slider-container{width:inherit;margin:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumbnail-slider-container{width:inherit;margin:16px}}.thumbnail-slider-container .thumbnail-slider{width:100%;height:20px;padding:0;color:transparent;background-color:transparent;border:0 transparent}.thumbnail-slider-container input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;accent-color:green;height:3px;background:#2980b9}.thumbnail-slider-container input[type=range]::-webkit-slider-runnable-track{height:5px;border-radius:6px}.thumbnail-slider-container input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;height:14px;width:14px;background-color:var(--slider-filled);border-radius:50%;border:2px solid var(--slider-filled);margin-top:-4px}.thumbnail-slider-container input[type=range]::-moz-range-track{height:5px;border-radius:4px}.thumbnail-slider-container button{width:15px;height:15px;margin:2.5px;padding-top:6px}.thumbnail-slider-container button:hover{background:var(--view-header-button-hover);border-radius:4px}.thumbnail-slider-container .slider{width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumbnail-slider-container .slider{margin-top:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumbnail-slider-container .slider{margin-top:0}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumbnail-slider-container .slider .slider-element-container{width:auto;margin-inline-start:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumbnail-slider-container .slider .slider-element-container{width:auto;margin-inline-start:auto}}.ThumbnailsPanel{overflow:hidden!important;display:flex;height:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ThumbnailsPanel{width:inherit;margin:0 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ThumbnailsPanel{width:inherit;margin:0 16px}}.ThumbnailsPanel #virtualized-thumbnails-container{flex:1}.ThumbnailsPanel .ReactVirtualized__Grid.ReactVirtualized__List.thumbnailsList.right-to-left{direction:rtl!important}.ThumbnailsPanel .row{display:flex;justify-content:space-around;align-items:center;flex-direction:column}.ThumbnailsPanel .thumbnailPlaceholder{width:150px;margin:2px;border:1px solid var(--focus-border)}.ThumbnailsPanel .columnsOfThumbnails.row{display:flex;justify-content:left;align-items:center;flex-direction:row}.ThumbnailsPanel .columnsOfThumbnails .cellThumbContainer{display:flex;flex-direction:row}.ThumbnailsPanel .columnsOfThumbnails .Thumbnail{display:inline-flex}.ThumbnailsPanel .columnsOfThumbnails .thumbnailPlaceholder{width:116px;min-width:116px;height:150px;margin-bottom:30px}.cellThumbContainer{border-radius:4px}.thumbnailAutoScrollArea{position:absolute;width:calc(100% - 55px);z-index:10;background:hsla(0,0%,100%,0)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1777: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
        n(617),
        n(34),
        n(125),
        n(27),
        n(21),
        n(50),
        n(76),
        n(20),
        n(12),
        n(44),
        n(22),
        n(99),
        n(129),
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
        n(62),
        n(11),
        n(29),
        n(13));
      var o = n(105),
        a = n.n(o),
        r = n(0),
        i = n.n(r),
        l = n(6),
        c = n(1654),
        u = n(206),
        s = n(15),
        d = n.n(s),
        m = n(45),
        p = (n(26), n(59), n(4)),
        h = n(3),
        b = (n(40), n(42), n(43), n(111), n(56), n(132), n(94), n(229)),
        f = n(1),
        g = n(2),
        v = n.n(g),
        y = n(122),
        w = n(41),
        x = (n(1739), n(5)),
        E = n(96);
      var C = function (e) {
          var t = e.className,
            n = e.pageIndex,
            o = Object(l.d)(),
            a = Object(l.e)(function (e) {
              return p.a.getSelectedThumbnailPageIndexes(e);
            });
          return i.a.createElement(
            "div",
            {
              className: t,
              onClick: function () {
                -1 === a.indexOf(n) && o(h.a.setSelectedPageThumbnails([n]));
              },
            },
            i.a.createElement(E.a, {
              dataElement: x.a.PAGE_MANIPULATION_OVERLAY_BUTTON,
              toggleElement: x.a.PAGE_MANIPULATION,
              img: "icon-tool-more",
              title: "option.thumbnailPanel.moreOptions",
            }),
          );
        },
        O = n(57),
        T = n(305),
        A = n(236);
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
                a,
                r,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
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
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var k = { index: v.a.number.isRequired },
        S = function (e) {
          var t = e.index,
            n = Object(T.a)().t,
            o = j(
              Object(l.e)(function (e) {
                return [p.a.isElementDisabled(e, "thumbnailControl")];
              }),
              1,
            )[0],
            a = j(
              Object(l.e)(function (e) {
                return [
                  p.a.isElementDisabled(
                    e,
                    x.a.PAGE_MANIPULATION_OVERLAY_BUTTON,
                  ),
                ];
              }),
              1,
            )[0],
            c = j(
              Object(l.e)(function (e) {
                return [
                  p.a.pageDeletionConfirmationModalEnabled(e),
                  p.a.getSelectedThumbnailPageIndexes(e),
                ];
              }),
              2,
            ),
            u = c[0],
            s = c[1],
            m = Object(l.d)(),
            h = Object(r.useRef)([]),
            b = Object(r.useRef)(null),
            g = j(
              Object(l.e)(function (e) {
                return [
                  p.a.getCurrentPage(e),
                  p.a.getThumbnailControlMenuItems(e),
                  p.a.getFeatureFlags(e),
                ];
              }, l.c),
              3,
            ),
            v = g[0],
            E = g[1],
            P = g[2],
            k =
              s.length > 0
                ? s.map(function (e) {
                    return e + 1;
                  })
                : [t + 1],
            S = k.includes(v),
            I = P.customizableUI;
          S || (k = [v]);
          var R = f.a.getDocument(),
            L = null == R ? void 0 : R.type,
            N = L === O.a.XOD,
            D = L === O.a.OFFICE || L === O.a.LEGACY_OFFICE,
            M = {
              thumbRotateClockwise: i.a.createElement(w.a, {
                className: "rotate-button",
                img: "icon-header-page-manipulation-page-rotation-clockwise-line",
                onClick: function () {
                  return Object(y.o)(k);
                },
                title: "option.thumbnailPanel.rotatePageClockwise",
                dataElement: "thumbRotateClockwise",
              }),
              thumbRotateCounterClockwise: i.a.createElement(w.a, {
                img: "icon-header-page-manipulation-page-rotation-counterclockwise-line",
                onClick: function () {
                  return Object(y.p)(k);
                },
                title: "option.thumbnailPanel.rotatePageCounterClockwise",
                dataElement: "thumbRotateCounterClockwise",
              }),
              thumbDelete: i.a.createElement(w.a, {
                className: "delete-button",
                img: "icon-delete-line",
                onClick: function () {
                  return Object(y.b)(k, m, u);
                },
                title: "option.thumbnailPanel.delete",
                dataElement: "thumbDelete",
                onClickAnnouncement: ""
                  .concat(n("action.delete"), " ")
                  .concat(n("action.modal"), " ")
                  .concat(n("action.isOpen")),
              }),
            },
            _ = !1,
            z = [],
            H = E.map(function (e) {
              var t = e.dataElement,
                n = t,
                o = M[t];
              if (z.indexOf(t) > -1) return null;
              if ((z.push(t), !o)) {
                _ = !0;
                var a = e.img,
                  r = e.onClick,
                  l = e.title;
                o = i.a.createElement(w.a, {
                  className: "".concat(t, "-button"),
                  img: a,
                  onClick: function () {
                    return r(v);
                  },
                  title: l,
                  dataElement: t,
                });
              }
              return o ? i.a.cloneElement(o, { key: n }) : null;
            });
          return (
            Object(r.useEffect)(
              function () {
                ((h.current = Object(A.a)(b.current)),
                  h.current.length > 0 &&
                    h.current.forEach(function (e) {
                      e.tabIndex = -1;
                    }));
              },
              [h.current, H],
            ),
            o
              ? null
              : N || D || (null != R && R.isWebViewerServerDocument())
                ? i.a.createElement(
                    "div",
                    {
                      className: "thumbnailControls-overlay",
                      "data-element": "thumbnailControl",
                      style: { display: "flex" },
                    },
                    i.a.createElement(w.a, {
                      img: "icon-header-page-manipulation-page-rotation-counterclockwise-line",
                      onClick: function () {
                        return Object(y.p)(k);
                      },
                      title: "option.thumbnailPanel.rotatePageCounterClockwise",
                      dataElement: "thumbRotateCounterClockwise",
                    }),
                    i.a.createElement(w.a, {
                      img: "icon-header-page-manipulation-page-rotation-clockwise-line",
                      onClick: function () {
                        return Object(y.o)(k);
                      },
                      title: "option.thumbnailPanel.rotatePageClockwise",
                      dataElement: "thumbRotateClockwise",
                    }),
                  )
                : i.a.createElement(
                    "div",
                    {
                      className: d()({
                        "thumbnailControls-overlay": !0,
                        "custom-buttons": _,
                        "modular-ui": I,
                      }),
                      "data-element": "thumbnailControl",
                      ref: b,
                    },
                    H,
                    a
                      ? null
                      : i.a.createElement(C, {
                          className: "more-options",
                          pageIndex: t,
                        }),
                  )
          );
        };
      S.propTypes = k;
      var I = S,
        R = n(413),
        L = (n(1741), n(1404)),
        N = n(23);
      function D(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return B(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          U(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function M() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.toStringTag || "@@toStringTag";
        function r(n, o, a, r) {
          var c = o && o.prototype instanceof l ? o : l,
            u = Object.create(c.prototype);
          return (
            _(
              u,
              "_invoke",
              (function (n, o, a) {
                var r,
                  l,
                  c,
                  u = 0,
                  s = a || [],
                  d = !1,
                  m = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return ((r = t), (l = 0), (c = e), (m.n = n), i);
                    },
                  };
                function p(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !d && u && !a && t < s.length;
                    t++
                  ) {
                    var a,
                      r = s[t],
                      p = m.p,
                      h = r[2];
                    n > 3
                      ? (a = h === o) &&
                        ((c = r[(l = r[4]) ? 5 : ((l = 3), 3)]),
                        (r[4] = r[5] = e))
                      : r[0] <= p &&
                        ((a = n < 2 && p < r[1])
                          ? ((l = 0), (m.v = o), (m.n = r[1]))
                          : p < h &&
                            (a = n < 3 || r[0] > o || o > h) &&
                            ((r[4] = n), (r[5] = o), (m.n = h), (l = 0)));
                  }
                  if (a || n > 1) return i;
                  throw ((d = !0), o);
                }
                return function (a, s, h) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === s && p(s, h), l = s, c = h;
                    (t = l < 2 ? e : c) || !d;

                  ) {
                    r ||
                      (l
                        ? l < 3
                          ? (l > 1 && (m.n = -1), p(l, c))
                          : (m.n = c)
                        : (m.v = c));
                    try {
                      if (((u = 2), r)) {
                        if ((l || (a = "next"), (t = r[a]))) {
                          if (!(t = t.call(r, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = r.return) && t.call(r),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  a +
                                  "' method",
                              )),
                              (l = 1)));
                        r = e;
                      } else if ((t = (d = m.n < 0) ? c : n.call(o, m)) !== i)
                        break;
                    } catch (t) {
                      ((r = e), (l = 1), (c = t));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, a, r),
              !0,
            ),
            u
          );
        }
        var i = {};
        function l() {}
        function c() {}
        function u() {}
        t = Object.getPrototypeOf;
        var s = [][o]
            ? t(t([][o]()))
            : (_((t = {}), o, function () {
                return this;
              }),
              t),
          d = (u.prototype = l.prototype = Object.create(s));
        function m(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), _(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (c.prototype = u),
          _(d, "constructor", u),
          _(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          _(u, a, "GeneratorFunction"),
          _(d),
          _(d, a, "Generator"),
          _(d, o, function () {
            return this;
          }),
          _(d, "toString", function () {
            return "[object Generator]";
          }),
          (M = function () {
            return { w: r, m: m };
          })()
        );
      }
      function _(e, t, n, o) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (e) {
          a = 0;
        }
        (_ = function (e, t, n, o) {
          if (t)
            a
              ? a(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var r = function (t, n) {
              _(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(e, t, n, o);
      }
      function z(e, t, n, o, a, r, i) {
        try {
          var l = e[r](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, a);
      }
      function H(e, t) {
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
                a,
                r,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          U(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function U(e, t) {
        if (e) {
          if ("string" == typeof e) return B(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? B(e, t)
                : void 0
          );
        }
      }
      function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var F = i.a.forwardRef(function (e, t) {
        var n = e.index,
          o = e.isSelected,
          a = e.updateAnnotations,
          c = e.shiftKeyThumbnailPivotIndex,
          u = e.onFinishLoading,
          s = e.onLoad,
          m = e.onRemove,
          h = void 0 === m ? function () {} : m,
          g = e.onDragStart,
          v = e.onDragOver,
          y = e.isDraggable,
          w = e.shouldShowControls,
          x = e.thumbnailSize,
          E = e.currentPage,
          C = e.pageLabels,
          O = void 0 === C ? [] : C,
          j = e.selectedPageIndexes,
          P = e.isThumbnailMultiselectEnabled,
          k = e.isReaderModeOrReadOnly,
          S = e.dispatch,
          _ = e.actions,
          U = e.isMobile,
          B = e.canLoad,
          F = e.onCancel,
          W = e.isThumbnailSelectingPages,
          G = e.thumbnailSelectionMode,
          V = e.activeDocumentViewerKey,
          K = e.panelSelector,
          q = e.parentKeyListener,
          Y = e.isRightToLeft,
          $ = x ? Number(x) : 150,
          X = H(Object(r.useState)(-1), 2),
          J = X[0],
          Q = X[1],
          Z = Object(r.useRef)(null),
          ee = Object(r.useRef)([]),
          te = Object(r.useRef)([]),
          ne = H(Object(r.useState)({ width: $, height: $ }), 2),
          oe = ne[0],
          ae = ne[1],
          re = Object(T.a)().t,
          ie = H(Object(r.useState)(!1), 2),
          le = ie[0],
          ce = ie[1],
          ue = Object(l.e)(p.a.isContentEditingEnabled),
          se = null;
        Object(r.useEffect)(function () {
          var e = function (e) {
            Z.current && !Z.current.contains(e.target) && ye();
          };
          return (
            document.addEventListener("mousedown", e),
            function () {
              document.removeEventListener("mousedown", e);
            }
          );
        }, []);
        var de = function () {
          se = setTimeout(function () {
            var e,
              t,
              o = Object(N.a)().querySelector(
                ".ThumbnailsPanel.".concat(K, " #pageThumb").concat(n),
              ),
              r = n + 1,
              i = f.a.getRotation(r),
              l = f.a.getDocument(V);
            if (l && l.getPageInfo(r)) {
              var c = l.loadCanvas({
                pageNumber: r,
                width: $,
                height: $,
                drawComplete:
                  ((e = M().m(function e(t) {
                    var o, r, l, c;
                    return M().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            ((o = Object(N.a)().querySelector(
                              ".ThumbnailsPanel."
                                .concat(K, " #pageThumb")
                                .concat(n),
                            )) &&
                              ((r = o.querySelector(".page-image")) &&
                                o.removeChild(r),
                              (t.className = "page-image ".concat(
                                Y ? "right-to-left" : "",
                              )),
                              (l = Math.min($ / t.width, $ / t.height)),
                              (t.style.width = "".concat(t.width * l, "px")),
                              (t.style.height = "".concat(t.height * l, "px")),
                              ae({
                                width: Number(t.width),
                                height: Number(t.height),
                              }),
                              Math.abs(i) &&
                                ((c = "rotate(".concat(
                                  90 * i,
                                  "deg) translate(-50%,-50%)",
                                )),
                                (t.style.transform = c),
                                (t.style["transform-origin"] = "top left"),
                                (t.style["ms-transform"] = c),
                                (t.style["ms-transform-origin"] = "top left"),
                                (t.style["-moz-transform"] = c),
                                (t.style["-moz-transform-origin"] = "top left"),
                                (t.style["-webkit-transform-origin"] =
                                  "top left"),
                                (t.style["-webkit-transform"] = c),
                                (t.style["-o-transform"] = c),
                                (t.style["-o-transform-origin"] = "top left")),
                              o.appendChild(t)),
                              a && a(n),
                              u(n),
                              ce(!0));
                          case 1:
                            return e.a(2);
                        }
                    }, e);
                  })),
                  (t = function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, a) {
                      var r = e.apply(t, n);
                      function i(e) {
                        z(r, o, a, i, l, "next", e);
                      }
                      function l(e) {
                        z(r, o, a, i, l, "throw", e);
                      }
                      i(void 0);
                    });
                  }),
                  function (e) {
                    return t.apply(this, arguments);
                  }),
                allowUseOfOptimizedThumbnail: !0,
              });
              s(n, o, c);
            }
          }, 50);
        };
        (Object(r.useEffect)(function () {
          var e = function (e) {
              var t = e.contentChanged,
                o = e.moved,
                a = e.added,
                r = e.removed,
                i = n + 1,
                l = a.includes(i),
                c = t.some(function (e) {
                  return i === e;
                }),
                u = Object.keys(o).some(function (e) {
                  return i === parseInt(e);
                }),
                s = r.includes(i),
                d = f.a.getTotalPages();
              (r.length > 0 && n + 1 > d) || ((l || c || u || s) && de());
            },
            t = function () {
              (ce(!1), de());
            };
          return (
            f.a.addEventListener("pagesUpdated", e),
            f.a.addEventListener("rotationUpdated", t),
            B && de(),
            function () {
              (f.a.removeEventListener("pagesUpdated", e),
                f.a.removeEventListener("rotationUpdated", t),
                clearTimeout(se),
                h(n));
            }
          );
        }, []),
          Object(b.a)(
            function () {
              B ? (de(), a(n)) : F(n);
            },
            [B, V],
          ));
        var me = E === n + 1,
          pe = O[n],
          he = "default",
          be = f.a.getRotation(n + 1);
        ((((!be || 2 === be) && oe.width > oe.height) ||
          ((1 === be || 3 === be) && oe.width < oe.height)) &&
          (he = "rotated"),
          Object(r.useImperativeHandle)(t, function () {
            return {
              focusInput: function () {
                W && le
                  ? (fe(te.current[0]), Q(0))
                  : ee.current &&
                    setTimeout(function () {
                      (fe(ee.current[0]), Q(0));
                    }, 0);
              },
            };
          }));
        var fe = function (e) {
            e && ((e.ariaCurrent = "page"), e.focus());
          },
          ge = function (e) {
            e && (e.ariaCurrent = void 0);
          },
          ve = function (e) {
            (e.preventDefault(), ye());
          },
          ye = function () {
            ee.current.forEach(function (e) {
              ge(e);
            });
          },
          we = Object(r.useCallback)(
            function (e) {
              (e.stopPropagation(), q(e));
              var t,
                n = {
                  Tab: function () {
                    return ve(e);
                  },
                  Escape: function () {
                    return ve(e);
                  },
                };
              n[e.key] &&
                (null === (t = n[e.key]) || void 0 === t || t.call(n));
              var o = {
                ArrowUp: function () {
                  return xe(e, -1);
                },
                ArrowDown: function () {
                  return xe(e, 1);
                },
                ArrowLeft: function () {
                  return xe(e, -1);
                },
                ArrowRight: function () {
                  return xe(e, 1);
                },
              };
              o[e.key] && !Ce && o[e.key]();
            },
            [ee.current, J],
          ),
          xe = function (e, t) {
            (e.preventDefault(),
              0 !== ee.current.length &&
                Q(function (e) {
                  var n = e + t;
                  return (
                    n < 0
                      ? (n = ee.current.length - 1)
                      : n >= ee.current.length && (n = 0),
                    Ee(ee.current[n]),
                    n
                  );
                }));
          },
          Ee = function (e) {
            ee.current.forEach(function (t) {
              t === e ? fe(t) : ge(t);
            });
          };
        (Object(r.useEffect)(
          function () {
            Z.current && (ee.current = Object(A.a)(Z.current));
          },
          [w, me, le],
        ),
          Object(r.useEffect)(
            function () {
              Z.current && (te.current = Object(A.a)(Z.current));
            },
            [W, le],
          ));
        var Ce = W && le;
        return i.a.createElement(
          "button",
          {
            className: d()({ Thumbnail: !0, active: me, selected: o && W }),
            onDragOver: function (e) {
              return v(e, n);
            },
            id: "Thumbnail-container-".concat(n),
            ref: Z,
            onKeyDown: function (e) {
              return we(e);
            },
            onClick: function (e) {
              var t = e.target.type && "checkbox" === e.target.type;
              if (P && !k) {
                var o = e.ctrlKey || e.metaKey,
                  a = e.shiftKey,
                  r = D(j);
                if (a) {
                  S(_.setThumbnailSelectingPages(!0));
                  var i = c;
                  null === i &&
                    ((i = E - 1), S(_.setShiftKeyThumbnailsPivotIndex(i)));
                  var l = Math.min(i, n),
                    u = Math.max(i, n);
                  r = D(
                    new Set(
                      D(
                        Array.from({ length: u - l + 1 }, function (e, t) {
                          return t + l;
                        }),
                      ),
                    ),
                  );
                } else
                  o || W
                    ? (S(_.setThumbnailSelectingPages(!0)),
                      (o || t || G === R.a.THUMBNAIL) &&
                        (0 !== j.length || W
                          ? j.includes(n)
                            ? (r = j.filter(function (e) {
                                return n !== e;
                              }))
                            : r.push(n)
                          : r.push(E - 1)),
                      S(_.setShiftKeyThumbnailsPivotIndex(n)))
                    : (r = [n]);
                var s = r[r.length - 1];
                (!W && !a && S(_.setShiftKeyThumbnailsPivotIndex(s)),
                  S(_.setSelectedPageThumbnails(r)));
              } else U() && S(_.closeElement("leftPanel"));
              setTimeout(function () {
                (t && G !== R.a.THUMBNAIL) || f.a.setCurrentPage(n + 1);
              }, 0);
            },
            style: {
              width: $,
              cursor: "pointer",
              background: "none",
              border: "none",
            },
            tabIndex: -1,
          },
          i.a.createElement(
            "div",
            {
              className: "container",
              style: { height: $, width: $ },
              onDragStart: function (e) {
                return g(e, n);
              },
              draggable: y,
              tabIndex: -1,
            },
            i.a.createElement("div", {
              id: "pageThumb".concat(n),
              className: "thumbnail",
            }),
            W &&
              le &&
              i.a.createElement(L.a, {
                className: "checkbox ".concat(he),
                checked: j.includes(n),
                "aria-label": ""
                  .concat(re("action.page"), " ")
                  .concat(pe, " ")
                  .concat(re("formField.types.checkbox")),
                tabIndex: -1,
              }),
          ),
          i.a.createElement("div", { className: "page-label" }, pe),
          !W && me && w && !ue && i.a.createElement(I, { index: n }),
        );
      });
      ((F.displayName = "Thumbnail"),
        (F.propTypes = {
          index: v.a.number,
          isSelected: v.a.bool,
          updateAnnotations: v.a.func,
          shiftKeyThumbnailPivotIndex: v.a.number,
          onFinishLoading: v.a.func,
          onLoad: v.a.func,
          onRemove: v.a.func,
          onDragStart: v.a.func,
          onDragOver: v.a.func,
          isDraggable: v.a.bool,
          shouldShowControls: v.a.bool,
          thumbnailSize: v.a.number,
          currentPage: v.a.number,
          pageLabels: v.a.array,
          selectedPageIndexes: v.a.array,
          isThumbnailMultiselectEnabled: v.a.bool,
          isReaderModeOrReadOnly: v.a.bool,
          dispatch: v.a.func,
          actions: v.a.object,
          isMobile: v.a.func,
          canLoad: v.a.bool,
          onCancel: v.a.func,
          isThumbnailSelectingPages: v.a.bool,
          thumbnailSelectionMode: v.a.string,
          activeDocumentViewerKey: v.a.number,
          panelSelector: v.a.string,
          parentKeyListener: v.a.func,
          isRightToLeft: v.a.bool,
        }));
      var W = F;
      function G() {
        return (G = Object.assign
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
      function V(e, t) {
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
                a,
                r,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return K(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? K(e, t)
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
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var q = i.a.forwardRef(function (e, t) {
        var n = V(
            Object(l.e)(function (e) {
              return [
                p.a.getCurrentPage(e),
                p.a.getPageLabels(e),
                p.a.getSelectedThumbnailPageIndexes(e),
                p.a.isThumbnailMultiselectEnabled(e),
                p.a.isReaderMode(e),
                p.a.isDocumentReadOnly(e),
                p.a.getShiftKeyThumbnailPivotIndex(e),
                p.a.isThumbnailSelectingPages(e),
                p.a.getThumbnailSelectionMode(e),
                p.a.getActiveDocumentViewerKey(e),
              ];
            }, l.c),
            11,
          ),
          o = n[0],
          a = n[1],
          r = n[2],
          c = n[3],
          u = n[4],
          s = n[5],
          d = n[6],
          b = n[7],
          f = n[8],
          g = n[9],
          v = n[10],
          y = Object(l.d)();
        return i.a.createElement(
          W,
          G({}, e, {
            ref: t,
            currentPage: o,
            pageLabels: a,
            selectedPageIndexes: r,
            isThumbnailMultiselectEnabled: c,
            isReaderModeOrReadOnly: u || s,
            dispatch: y,
            actions: h.a,
            isMobile: m.k,
            shiftKeyThumbnailPivotIndex: d,
            isThumbnailSelectingPages: b,
            thumbnailSelectionMode: f,
            selectionModes: v,
            activeDocumentViewerKey: g,
          }),
        );
      });
      q.displayName = "ThumbnailRedux";
      var Y = q,
        $ = (n(142), n(115), n(411)),
        X = n(32);
      n(1598);
      function J(e) {
        var t = e.moveToTop,
          n = e.moveToBottom;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "moveToTop",
            img: "icon-page-move-up",
            onClick: t,
            title: "action.moveToTop",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "moveToBottom",
            img: "icon-page-move-down",
            onClick: n,
            title: "action.moveToBottom",
          }),
        );
      }
      J.propTypes = { moveToTop: v.a.func, moveToBottom: v.a.func };
      var Q = J;
      function Z(e) {
        var t = e.onInsert,
          n = e.onReplace,
          o = e.onExtractPages,
          a = e.onDeletePages;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlInsert",
            img: "icon-page-insertion-insert",
            onClick: t,
            title: "action.insert",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlReplace",
            img: "icon-page-replacement",
            onClick: n,
            title: "action.replace",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlExtract",
            img: "icon-page-manipulation-extract",
            onClick: o,
            title: "action.extract",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlDelete",
            img: "icon-delete-line",
            onClick: a,
            title: "action.delete",
          }),
        );
      }
      Z.propTypes = {
        onInsert: v.a.func,
        onReplace: v.a.func,
        onExtractPages: v.a.func,
        onDeletePages: v.a.func,
      };
      var ee = Z;
      function te(e) {
        var t = e.onRotateClockwise,
          n = e.onRotateCounterClockwise;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlRotateCounterClockwise",
            img: "icon-header-page-manipulation-page-rotation-counterclockwise-line",
            onClick: n,
            title: "action.rotateCounterClockwise",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlRotateClockwise",
            img: "icon-header-page-manipulation-page-rotation-clockwise-line",
            onClick: t,
            title: "action.rotateClockwise",
          }),
        );
      }
      te.propTypes = {
        onRotateClockwise: v.a.func,
        onRotateCounterClockwise: v.a.func,
      };
      var ne = te,
        oe = n(177);
      function ae() {
        return (ae = Object.assign
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
      function re(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ce(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          le(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ie(e, t) {
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
                a,
                r,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          le(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function le(e, t) {
        if (e) {
          if ("string" == typeof e) return ce(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? ce(e, t)
                : void 0
          );
        }
      }
      function ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function ue(e) {
        var t,
          n = e.parentElement,
          o = Object(l.f)(),
          a = Object(l.d)(),
          c = Object(m.k)(),
          u = Object(l.e)(p.a.getSelectedThumbnailPageIndexes),
          s = Object(l.e)(function (e) {
            return n && "leftPanel" !== n
              ? p.a.getPanelWidth(e, n)
              : p.a.getLeftPanelWidth(e);
          }),
          d = Object(l.e)(p.a.pageDeletionConfirmationModalEnabled),
          b = Object(l.e)(p.a.isInDesktopOnlyMode),
          g = Object(l.e)(p.a.getMultiPageManipulationControlsItems, l.c),
          v = ie(Object(r.useState)(!1), 2),
          C = v[0],
          T = v[1],
          A = Object(r.useMemo)(
            function () {
              return u.map(function (e) {
                return e + 1;
              });
            },
            [u],
          ),
          j = Object(r.useMemo)(
            function () {
              return {
                onReplace: function () {
                  return !Object(y.k)(A, a) && Object(y.m)(a);
                },
                onExtractPages: function () {
                  return !Object(y.k)(A, a) && Object(y.e)(A, a);
                },
                onDeletePages: function () {
                  return !Object(y.k)(A, a) && Object(y.b)(A, a, d);
                },
                onRotateCounterClockwise: function () {
                  return !Object(y.k)(A, a) && Object(y.p)(A);
                },
                onRotateClockwise: function () {
                  return !Object(y.k)(A, a) && Object(y.o)(A);
                },
                onInsert: function () {
                  return (
                    !Object(y.k)(A, a) &&
                    (a(h.a.closeElement(x.a.PAGE_MANIPULATION_OVERLAY)),
                    void a(h.a.openElement("insertPageModal")))
                  );
                },
                moveToTop: function () {
                  return !Object(y.k)(A, a) && Object(y.j)(A);
                },
                moveToBottom: function () {
                  return !Object(y.k)(A, a) && Object(y.i)(A);
                },
                pageNumbers: A,
              };
            },
            [A, d],
          ),
          P = j.onRotateClockwise,
          k = j.onRotateCounterClockwise,
          S = f.a.getDocument(),
          I = null == S ? void 0 : S.type,
          R = I === O.a.XOD,
          L = I === O.a.OFFICE || I === O.a.LEGACY_OFFICE;
        if (!b && c)
          try {
            t =
              Object(N.a)().querySelector(".App").getBoundingClientRect()
                .width - 88;
          } catch (e) {
            t = (s || X.d) - 88;
          }
        else t = (s || X.d) - 88;
        var D = t < 190,
          M = t > 290;
        Object(r.useEffect)(
          function () {
            var e,
              t = [];
            e = D ? 1 : M ? 3 : 2;
            var n = 0;
            g.forEach(function (a) {
              var r = !1;
              ((n < e ||
                (0 === t.length &&
                  "divider" === (null == a ? void 0 : a.type))) &&
                (r = !0),
                a && "divider" !== a.type && n++,
                !r &&
                  t.push.apply(
                    t,
                    re(
                      (function (e) {
                        return "leftPanelPageTabsRotate" === e.dataElement
                          ? Object(oe.e)(o, !0)
                          : "leftPanelPageTabsMove" === e.dataElement
                            ? Object(oe.a)(o, !0)
                            : "leftPanelPageTabsMore" === e.dataElement
                              ? Object(oe.c)(o, !0)
                              : "customPageOperation" === e.type
                                ? Object(oe.b)(o, e)
                                : "divider" === e.type
                                  ? ["divider"]
                                  : void 0;
                      })(a),
                    ),
                  ));
            });
            var r = {
              dataElement: x.a.PAGE_MANIPULATION_FLYOUT_MULTI_SELECT,
              className: x.a.PAGE_MANIPULATION_FLYOUT_MULTI_SELECT,
              items: t,
            };
            (M && a(h.a.closeElement(r.dataElement)),
              r.items.length
                ? (a(h.a.updateFlyout(r.dataElement, r)), T(!0))
                : (a(h.a.removeFlyout(r.dataElement)), T(!1)));
          },
          [o, M, D, g],
        );
        var _ = Object(r.useMemo)(
          function () {
            var e = !1,
              t = 0;
            return g.map(function (n, o) {
              var a;
              return (
                (a = D ? 0 : M ? 2 : 1),
                "divider" !== (null == n ? void 0 : n.type) || e
                  ? t > a
                    ? null
                    : (n && "divider" !== n.type && t++,
                      "leftPanelPageTabsRotate" === n.dataElement
                        ? i.a.createElement(
                            ne,
                            ae({}, j, { key: "leftPanelPageTabsRotate" }),
                          )
                        : "leftPanelPageTabsMove" === n.dataElement
                          ? i.a.createElement(
                              Q,
                              ae({}, j, { key: "leftPanelPageTabsMove" }),
                            )
                          : "leftPanelPageTabsMore" === n.dataElement
                            ? i.a.createElement(
                                ee,
                                ae({}, j, { key: "leftPanelPageTabsMore" }),
                              )
                            : "customPageOperation" === n.type
                              ? n.operations
                                ? n.operations.map(function (e) {
                                    return i.a.createElement(w.a, {
                                      key: e.dataElement,
                                      className: "button-hover",
                                      dataElement: e.dataElement,
                                      img: e.img,
                                      onClick: function () {
                                        return e.onClick(A);
                                      },
                                      title: e.title,
                                    });
                                  })
                                : (t--, null)
                              : null)
                  : (t > a && (e = !0),
                    i.a.createElement("div", {
                      key: "divider".concat(o),
                      className: "divider",
                    }))
              );
            });
          },
          [g, j, D, M],
        );
        return R || L || (null != S && S.isWebViewerServerDocument())
          ? i.a.createElement(
              "div",
              { className: "PageControlContainer root small" },
              i.a.createElement(ne, {
                onRotateClockwise: P,
                onRotateCounterClockwise: k,
              }),
            )
          : i.a.createElement(
              "div",
              { className: "PageControlContainer root" },
              _,
              C &&
                i.a.createElement(
                  "div",
                  { className: "dropdown-menu" },
                  i.a.createElement(E.a, {
                    dataElement: "".concat(
                      x.a.PAGE_MANIPULATION_FLYOUT_MULTI_SELECT,
                      "Button",
                    ),
                    toggleElement: x.a.PAGE_MANIPULATION_FLYOUT_MULTI_SELECT,
                    title: "action.more",
                    img: "icon-tool-more",
                  }),
                  i.a.createElement("div", { className: "indicator" }),
                ),
            );
      }
      ue.propTypes = { parentElement: v.a.string };
      var se = ue;
      n(1744);
      function de(e, t) {
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
                a,
                r,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return me(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? me(e, t)
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
      function me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function pe(e, t) {
        for (
          var n = "",
            o = e.sort(function (e, t) {
              return e - t;
            }),
            a = null,
            r = 0;
          o.length > r;
          r++
        )
          o[r + 1] === o[r] + 1
            ? (a = null !== a ? a : o[r])
            : null !== a
              ? ((n = "".concat(n).concat(t[a], "-").concat(t[o[r]], ", ")),
                (a = null))
              : (n = "".concat(n).concat(t[o[r]], ", "));
        return n.slice(0, -2);
      }
      var he = function (e) {
        var t = e.shouldShowControls,
          n = e.parentElement,
          o = de(Object(T.a)(), 1)[0],
          a = Object(l.d)(),
          c = de(
            Object(l.e)(function (e) {
              return [
                p.a.getSelectedThumbnailPageIndexes(e),
                p.a.isElementDisabled(e, "documentControl"),
                p.a.getPageLabels(e),
                p.a.isThumbnailSelectingPages(e),
                p.a.getFeatureFlags(e),
              ];
            }),
            5,
          ),
          u = c[0],
          s = c[1],
          d = c[2],
          m = c[3],
          b = c[4],
          g = pe(u, d),
          v = de(Object(r.useState)(g), 2),
          y = v[0],
          x = v[1],
          E = de(Object(r.useState)(g), 2),
          C = E[0],
          O = E[1],
          A = b.customizableUI;
        Object(r.useEffect)(
          function () {
            x(pe(u, d));
          },
          [x, u, t, d],
        );
        var j = function () {
          a(h.a.setThumbnailSelectingPages(!0));
        };
        return s
          ? null
          : i.a.createElement(
              "div",
              {
                className: "documentControlsContainer",
                "data-element": "documentControl",
              },
              t
                ? i.a.createElement(
                    "div",
                    { className: "documentControls" },
                    i.a.createElement("div", { className: "divider" }),
                    m && i.a.createElement(se, { parentElement: n }),
                    A &&
                      i.a.createElement(
                        "label",
                        {
                          className: "documentControlsLabel",
                          htmlFor: "pageNumbersInput",
                        },
                        i.a.createElement(
                          "span",
                          null,
                          o("option.thumbnailPanel.multiSelectPages"),
                          " -",
                        ),
                        i.a.createElement(
                          "span",
                          { className: "multiSelectExampleLabel" },
                          o("option.thumbnailPanel.multiSelectPagesExample"),
                        ),
                      ),
                    i.a.createElement(
                      "div",
                      { className: "documentControlsInput" },
                      i.a.createElement("input", {
                        name: "pageNumbersInput",
                        onBlur: function (e) {
                          var t = e.target.value.replace(/ /g, ""),
                            n = t ? Object($.a)(t, d) : [],
                            o = n.map(function (e) {
                              return e - 1;
                            });
                          if (n.length || !t) {
                            a(h.a.setSelectedPageThumbnails(o));
                            var r = pe(u, d);
                            (x(r), O(r));
                          } else x(C);
                          u.length > 0 &&
                            !m &&
                            setTimeout(function () {
                              y !== C && j();
                            }, 100);
                        },
                        onChange: function (e) {
                          x(e.target.value);
                        },
                        value: y,
                        placeholder: A ? "" : "1, 3, 5-10",
                        "aria-label": o(
                          "option.thumbnailPanel.enterPageNumbers",
                        ),
                        className: "pagesInput",
                        type: "text",
                      }),
                      i.a.createElement(
                        "div",
                        { className: "documentControlsButton" },
                        m
                          ? i.a.createElement(w.a, {
                              img: "icon-close",
                              title: "option.documentControls.closeTooltip",
                              onClick: function () {
                                (a(
                                  h.a.setSelectedPageThumbnails([
                                    f.a.getCurrentPage() - 1,
                                  ]),
                                ),
                                  a(h.a.setThumbnailSelectingPages(!1)));
                              },
                              dataElement: "thumbCloseMultiSelect",
                            })
                          : i.a.createElement(w.a, {
                              img: "icon-tool-select-pages",
                              title: "option.documentControls.selectTooltip",
                              onClick: j,
                              dataElement: "thumbMultiSelect",
                            }),
                      ),
                    ),
                  )
                : null,
            );
      };
      he.propTypes = {
        isDisabled: v.a.bool,
        pageLabels: v.a.arrayOf(v.a.string),
        toggleDocumentControl: v.a.func,
        shouldShowControls: v.a.bool,
      };
      var be = he,
        fe = n(318),
        ge = n(292),
        ve = n(66),
        ye = n(54),
        we = function (e, t) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          return function (o) {
            return (
              o(h.a.openElement(x.a.LOADING_MODAL)),
              new Promise(function (a, r) {
                f.a
                  .mergeDocument(e, t)
                  .then(function (e) {
                    (o(h.a.closeElement(x.a.LOADING_MODAL)),
                      f.a.setCurrentPage(t),
                      n && Object(ve.a)(ye.a.DOCUMENT_MERGED, e),
                      a(e));
                  })
                  .catch(function (e) {
                    (r(e), o(h.a.closeElement(x.a.LOADING_MODAL)));
                  });
              })
            );
          };
        },
        xe = (n(1746), n(33));
      function Ee(e) {
        return (Ee =
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
      function Ce(e, t) {
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
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ce(Object(n), !0).forEach(function (t) {
                Te(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ce(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Te(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Ee(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != Ee(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Ee(t) ? t : t + "";
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
      function Ae(e, t) {
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
                a,
                r,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return je(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? je(e, t)
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
      function je(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Pe = function (e) {
        var t = e.panelSelector,
          n = e.parentDataElement,
          o = Object(l.e)(function (e) {
            return p.a.isElementOpen(e, "leftPanel");
          }),
          s = Object(l.e)(function (e) {
            return p.a.isElementDisabled(e, "thumbnailsPanel");
          }),
          b = Object(l.e)(p.a.getTotalPages),
          g = Object(l.e)(p.a.getCurrentPage),
          v = Object(l.e)(function (e) {
            return p.a.getSelectedThumbnailPageIndexes(e);
          }, l.c),
          y = Object(l.e)(p.a.getIsThumbnailMergingEnabled),
          E = Object(l.e)(p.a.getIsThumbnailReorderingEnabled),
          C = Object(l.e)(p.a.getIsMultipleViewerMerging),
          O = Object(l.e)(function (e) {
            return p.a.isElementDisabled(e, "thumbnailControl");
          }),
          A = Object(l.e)(function (e) {
            return p.a.isElementDisabled(e, "thumbnailsSizeSlider");
          }),
          j = Object(l.e)(p.a.isReaderMode),
          P = Object(l.e)(p.a.isDocumentReadOnly),
          k = Object(l.e)(function (e) {
            return p.a.getTotalPages(e, 2);
          }),
          S = Object(l.e)(p.a.getActiveDocumentViewerKey),
          I = Object(l.e)(
            p.a.openingPageManipulationOverlayByRightClickEnabled,
          ),
          R = Object(l.e)(p.a.getFeatureFlags, l.c),
          L = Object(l.e)(p.a.isContentEditingEnabled),
          D = Ae(Object(T.a)(), 1)[0],
          M = "rtl" === xe.a.dir(),
          _ = Object(r.useRef)(),
          z = Object(r.useRef)([]),
          H = Object(r.useRef)([]),
          U = Object(r.useRef)(null),
          B = Ae(Object(r.useState)(!1), 2),
          F = B[0],
          W = B[1],
          G = Ae(Object(r.useState)(!0), 2),
          V = G[0],
          K = G[1],
          q = Ae(Object(r.useState)(0), 2),
          $ = q[0],
          X = q[1],
          J = Ae(Object(r.useState)(0), 2),
          Q = J[0],
          Z = J[1],
          ee = Ae(Object(r.useState)(null), 2),
          te = ee[0],
          ne = ee[1],
          oe = Ae(Object(r.useState)(!1), 2),
          ae = oe[0],
          re = oe[1],
          ie = Ae(Object(r.useState)(1), 2),
          le = ie[0],
          ce = ie[1],
          ue = Ae(Object(r.useState)(!1), 2),
          se = ue[0],
          de = ue[1],
          me = Ae(Object(r.useState)(0), 2),
          pe = me[0],
          he = me[1],
          Ee = Object(r.useRef)([]),
          Ce = Object(r.useRef)([]),
          Te = Object(r.useRef)(null),
          je = Ae(Object(r.useState)(150), 2),
          Pe = je[0],
          ke = je[1],
          Se = Ae(Object(r.useState)(0), 2),
          Ie = Se[0],
          Re = Se[1],
          Le = Ae(Object(r.useState)(0), 2),
          Ne = Le[0],
          De = Le[1],
          Me = 2 === S ? k : b,
          _e = null == R ? void 0 : R.customizableUI,
          ze = Object(l.d)(),
          He = {};
        Object(r.useEffect)(function () {
          var e = function (e) {
            Te.current && !Te.current.contains(e.target) && We(Te.current);
          };
          return (
            document.addEventListener("mousedown", e),
            function () {
              document.removeEventListener("mousedown", e);
            }
          );
        }, []);
        var Ue = Object(r.useCallback)(
            function (e, t, n) {
              var o;
              e.stopPropagation();
              var a = {
                  ArrowLeft: function () {
                    return Ve(e, t, -1);
                  },
                  ArrowRight: function () {
                    return Ve(e, t, 1);
                  },
                  ArrowUp: function () {
                    return Ve(e, t, -n);
                  },
                  ArrowDown: function () {
                    return Ve(e, t, n);
                  },
                },
                r = {
                  Enter: function () {
                    return Ke(e, t);
                  },
                  Tab: function () {
                    return Ge(t);
                  },
                };
              (a[e.key] && (o = a[e.key]()),
                r[e.key] && r[e.key](),
                void 0 !== o &&
                  o !== t &&
                  (he(o), Be(Ee.current[o]), Fe(Ee.current[t])));
            },
            [Ce, Ee],
          ),
          Be = function (e) {
            ((e.tabIndex = 0),
              (e.ariaCurrent = "page"),
              (e.style.outline = "var(--focus-visible-outline)"),
              e.focus(),
              (Te.current = e));
          },
          Fe = function (e) {
            ((e.tabIndex = -1), (e.ariaCurrent = void 0), We(e));
          },
          We = function (e) {
            e.style.outline = "none";
          },
          Ge = function (e) {
            We(Ee.current[e]);
          },
          Ve = function (e, t, n) {
            var o = t + n;
            return o < 0 || o >= Me ? t : o;
          },
          Ke = function (e, t) {
            (e.preventDefault(),
              Be(Ee.current[t]),
              f.a.setCurrentPage(t + 1),
              Ce.current[t].focusInput());
          },
          qe = Object(r.useCallback)(
            function (e, t) {
              e.stopPropagation();
              var n,
                o = {
                  Tab: function () {
                    return $e(e, t);
                  },
                  Escape: function () {
                    return Ye(e, t);
                  },
                };
              o[e.key] &&
                (null === (n = o[e.key]) || void 0 === n || n.call(o));
            },
            [Ee],
          ),
          Ye = function (e, t) {
            (e.preventDefault(), Be(Ee.current[t]));
          },
          $e = function (e, t) {
            var n = t + (e.shiftKey ? -1 : 1);
            ((n < 0 || n >= Me) && (n = t),
              he(n),
              Be(Ee.current[n]),
              n !== t && Fe(Ee.current[t]));
          },
          Xe = function (e) {
            var t = H.current && H.current[e] && H.current[e].element;
            if (t) {
              var n = e + 1,
                o = f.a.getPageWidth(n),
                r = (function (e, t) {
                  var n, o, a;
                  return (
                    e > t
                      ? ((a = e / Pe), (n = Pe), (o = Math.round(t / a)))
                      : ((a = t / Pe), (n = Math.round(e / a)), (o = Pe)),
                    { width: n, height: o }
                  );
                })(o, f.a.getPageHeight(n)),
                i = r.width,
                l = r.height,
                c =
                  t.querySelector(".annotation-image") ||
                  document.createElement("canvas");
              ((c.className = "annotation-image ".concat(
                M ? "right-to-left" : "",
              )),
                (c.role = "img"),
                (c.ariaLabel = "".concat(D("action.page"), " ").concat(n)),
                (c.style.maxWidth = "".concat(Pe, "px")),
                (c.style.maxHeight = "".concat(Pe, "px")));
              var u = c.getContext("2d"),
                s = 1,
                d = f.a.getCompleteRotation(n);
              d < 0 && (d += 4);
              var m = window.Core.getCanvasMultiplier();
              (d % 2 == 0
                ? ((c.width = i), (c.height = l), (s = c.width / o), (s /= m))
                : ((c.width = l), (c.height = i), (s = c.height / o), (s /= m)),
                t.appendChild(c),
                f.a.setAnnotationCanvasTransform(u, s, d));
              var p = { pageNumber: n, overrideCanvas: c },
                h = t.querySelector(".page-image");
              if (h)
                ((p = Oe(
                  Oe({}, p),
                  {},
                  { overridePageRotation: d, overridePageCanvas: h },
                )),
                  He[n] || (He[n] = a()(f.a.drawAnnotations, 112)),
                  (0, He[n])(p));
            }
          };
        if (
          (Object(r.useEffect)(function () {
            var e = function () {
                K(!1);
              },
              t = function (e) {
                e || K(!0);
              },
              n = function () {
                var e;
                ("officeEditor" ===
                (null === (e = f.a.getDocument()) || void 0 === e
                  ? void 0
                  : e.getType())
                  ? W(!0)
                  : W(!1),
                  (He = {}),
                  ze(h.a.setSelectedPageThumbnails([])));
              },
              o = function () {
                U.current &&
                  (f.a.setCurrentPage(U.current), (U.current = null));
              };
            return (
              f.a.addEventListener("beginRendering", e),
              f.a.addEventListener("finishedRendering", t),
              f.a.addEventListener("documentLoaded", n),
              f.a.addEventListener("pageComplete", o),
              f.a.getDocument() && n(),
              function () {
                (f.a.removeEventListener("beginRendering", e),
                  f.a.removeEventListener("finishedRendering", t),
                  f.a.removeEventListener("documentLoaded", n),
                  f.a.removeEventListener("pageComplete", o));
              }
            );
          }, []),
          Object(r.useEffect)(
            function () {
              var e = function (e) {
                if (e) {
                  var t = Array.from(v);
                  (e.removed &&
                    (t = t.filter(function (t) {
                      return -1 === e.removed.indexOf(t + 1);
                    })),
                    e.moved &&
                      (t = t.map(function (t) {
                        return e.moved[t + 1] ? e.moved[t + 1] - 1 : t;
                      })));
                  var n = e.added && e.added[0] - 1 <= t[0];
                  (1 === t.length &&
                    n &&
                    (t = e.added.map(function (e) {
                      return e - 1;
                    })),
                    ze(h.a.setSelectedPageThumbnails(t)));
                }
              };
              return (
                f.a.addEventListener("pagesUpdated", e),
                function () {
                  return f.a.removeEventListener("pagesUpdated", e);
                }
              );
            },
            [v],
          ),
          Object(r.useEffect)(
            function () {
              var e;
              null === (e = _.current) ||
                void 0 === e ||
                e.scrollToRow(Math.floor((g - 1) / le));
              var t = function (e) {
                  var t = [];
                  e.forEach(function (e) {
                    var n = e.PageNumber - 1;
                    !e.Listable || t.indexOf(n) > -1 || (t.push(n), Xe(n));
                  });
                },
                n = function (e) {
                  var t,
                    n = e - 1;
                  null === (t = _.current) ||
                    void 0 === t ||
                    t.scrollToRow(Math.floor(n / le));
                };
              return (
                f.a.addEventListener("pageNumberUpdated", n),
                f.a.addEventListener("annotationChanged", t),
                f.a.addEventListener("annotationHidden", t),
                function () {
                  (f.a.removeEventListener("pageNumberUpdated", n),
                    f.a.removeEventListener("annotationChanged", t),
                    f.a.removeEventListener("annotationHidden", t));
                }
              );
            },
            [Pe, le],
          ),
          Object(r.useEffect)(
            function () {
              (j || P) &&
                (ze(h.a.setSelectedPageThumbnails([])),
                ze(h.a.setThumbnailSelectingPages(!1)));
            },
            [j, P],
          ),
          s || F || (!o && !t && !_e))
        )
          return null;
        var Je = function () {
            (de(!1), ne(null));
          },
          Qe = function (e, t, n) {
            var o,
              a = new Date().getTime();
            return e < Me - 1 && e > 0 && a - Ie >= n
              ? (null === (o = _.current) ||
                  void 0 === o ||
                  o.scrollToRow(Math.floor((e + t) / le)),
                Re(a),
                e + t)
              : e;
          },
          Ze = function (e, t) {
            if ((e.preventDefault(), e.stopPropagation(), E || y)) {
              var n = e.target.getBoundingClientRect();
              (re(
                le > 1
                  ? !(e.pageX > n.x + n.width / 2)
                  : !(e.pageY > n.y + n.height / 2),
              ),
                ne(t));
              var o = Object(N.a)()
                  .querySelector("#virtualized-thumbnails-container")
                  .getBoundingClientRect(),
                a = o.y,
                r = o.bottom;
              e.pageY < a + 100
                ? De(Qe(t, -1, 400))
                : e.pageY > r - 100 && De(Qe(t, 1, 400));
            }
          },
          et = function () {
            De(Qe(Ne, 1, 200));
          },
          tt = function () {
            De(Qe(Ne, -1, 200));
          },
          nt = function () {
            return window.isApryseWebViewerWebComponent
              ? Object(N.a)().host.id
              : window.frameElement.id;
          },
          ot = function (e, t) {
            (De(t), de(!0));
            var n,
              o = v.some(function (e) {
                return e === t;
              }),
              a = o
                ? v.map(function (e) {
                    return e + 1;
                  })
                : [t + 1];
            (Object(ve.a)(ye.a.THUMBNAIL_DRAGGED),
              e.dataTransfer.setData("text", ""),
              a.length > 1 && e.dataTransfer.setDragImage(new Image(), 0, 0),
              y &&
                C &&
                ((e.dataTransfer.dropEffect = "move"),
                (e.dataTransfer.effectAllowed = "all"),
                e.dataTransfer.setData("dataTransferWebViewerFrame", nt()),
                (n = a),
                (window.extractedDataPromise = Object(ge.a)(n)),
                (window.pagesExtracted = n)),
              o || ze(h.a.setSelectedPageThumbnails([t])),
              f.a.setCurrentPage(t + 1));
          },
          at = function (e) {
            e.preventDefault();
            var t,
              n = e.dataTransfer.files,
              o = ae ? te + 1 : te + 2;
            m.f || (t = e.dataTransfer.getData("dataTransferWebViewerFrame"));
            var a,
              r,
              i = (t && nt() !== t) || n.length,
              l = g - 1;
            if (y && i)
              t && nt() !== t
                ? ze(
                    ((a = t),
                    (r = o),
                    function (e) {
                      return new Promise(function (t, n) {
                        var o = window.parent.document.querySelector(
                          "#".concat(a),
                        );
                        o ||
                          (console.warn(
                            "Could not find other instance of WebViewer",
                          ),
                          n());
                        var i = o.contentWindow;
                        window.isApryseWebViewerWebComponent && (i = window);
                        var l = i.extractedDataPromise;
                        (l ||
                          (console.warn(
                            "Could not retrieve data from other instance of WebViewer",
                          ),
                          n()),
                          e(h.a.openElement(x.a.LOADING_MODAL)),
                          l
                            .then(function (n) {
                              e(we(n, r, !1)).then(function (n) {
                                var o = n.filename,
                                  a = n.pages;
                                (Object(ve.a)(ye.a.DOCUMENT_MERGED, {
                                  filename: o,
                                  pages: i.pagesExtracted,
                                }),
                                  e(h.a.closeElement(x.a.LOADING_MODAL)),
                                  t({ filename: o, pages: a }));
                              });
                            })
                            .catch(function (t) {
                              (e(h.a.closeElement(x.a.LOADING_MODAL)), n(t));
                            }));
                      });
                    }),
                  )
                : n.length &&
                  Array.from(n).forEach(function (e) {
                    ze(we(e, o));
                  });
            else if (E && !i && null !== te) {
              var c = ae ? te + 1 : te + 2,
                u = v.some(function (e) {
                  return e === l;
                })
                  ? v.map(function (e) {
                      return e + 1;
                    })
                  : [g];
              ((U.current =
                c -
                u.filter(function (e) {
                  return e < c;
                }).length),
                f.a.movePages(u, c));
              for (var s = [], d = 0; d < u.length; d++) s.push(U.current + d);
              Object(ve.a)(ye.a.THUMBNAIL_DROPPED, {
                pageNumbersBeforeMove: u,
                pagesNumbersAfterMove: s,
                numberOfPagesMoved: s.length,
              });
            }
            (ne(null), de(!1));
          },
          rt = function (e, t, n) {
            lt(e) ||
              ct(e) ||
              ((H.current[e] = { element: t, loaded: !1 }),
              z.current.push({ pageIndex: e, id: n }));
          },
          it = function (e) {
            var t = st(e);
            -1 !== t && z.current.splice(t, 1);
          },
          lt = function (e) {
            var t;
            return null === (t = H.current[e]) || void 0 === t
              ? void 0
              : t.loaded;
          },
          ct = function (e) {
            return -1 !== st(e);
          },
          ut = function (e) {
            var t = st(e);
            -1 !== t &&
              (f.a.cancelLoadThumbnail(z.current[t].id),
              z.current.splice(t, 1));
          },
          st = function (e) {
            return z.current.findIndex(function (t) {
              return t.pageIndex === e;
            });
          },
          dt = function (e) {
            var t, n;
            ut(e);
            var o =
              null === (t = H.current[e]) ||
              void 0 === t ||
              null === (n = t.element) ||
              void 0 === n
                ? void 0
                : n.querySelectorAll("canvas");
            (null != o &&
              o.length &&
              o.forEach(function (e) {
                ((e.height = 0), (e.width = 0));
              }),
              He[e] && He[e].cancel(),
              (H.current[e] = null));
          },
          mt = function (e) {
            var n = e.index,
              o = e.key,
              a = e.style,
              r = d()({ columnsOfThumbnails: le > 1, row: !0 }),
              l = !(j || P);
            return i.a.createElement(
              "div",
              {
                role: "row",
                "aria-label": "row",
                className: r,
                key: o,
                style: a,
              },
              new Array(le).fill().map(function (e, o) {
                var a = n * le + o,
                  r = l && (y || E),
                  c = r && te === a;
                return a < Me
                  ? i.a.createElement(
                      i.a.Fragment,
                      { key: a },
                      (le > 1 || 0 === a) &&
                        c &&
                        ae &&
                        i.a.createElement("div", {
                          key: "placeholder1-".concat(a),
                          className: "thumbnailPlaceholder",
                        }),
                      i.a.createElement(
                        "td",
                        {
                          ref: function (e) {
                            return (Ee.current[a] = e);
                          },
                          key: a,
                          role: "gridcell",
                          tabIndex: pe === a ? 0 : -1,
                          "aria-current": pe === a ? "page" : void 0,
                          onDragEnd: Je,
                          className: "cellThumbContainer",
                          onKeyDown: function (e) {
                            return Ue(e, a, le);
                          },
                          onContextMenu: function (e) {
                            return (
                              I &&
                              ((n = a),
                              (t = e).preventDefault(),
                              f.a.setCurrentPage(n + 1),
                              v.includes(n) ||
                                ze(h.a.setSelectedPageThumbnails([n])),
                              void (
                                j ||
                                P ||
                                L ||
                                (ze(
                                  h.a.setFlyoutPosition({
                                    x: t.pageX,
                                    y: t.pageY,
                                  }),
                                ),
                                ze(h.a.openElements([x.a.PAGE_MANIPULATION])))
                              ))
                            );
                            var t, n;
                          },
                          onFocus: function (e) {
                            return (function (e, t) {
                              Ee.current &&
                                Ee.current.includes(e.target) &&
                                Be(Ee.current[t]);
                            })(e, a);
                          },
                        },
                        i.a.createElement(Y, {
                          ref: function (e) {
                            return (Ce.current[a] = e);
                          },
                          isDraggable: r,
                          isSelected: v.includes(a),
                          index: a,
                          canLoad: V,
                          onLoad: rt,
                          onCancel: ut,
                          onRemove: dt,
                          onDragStart: ot,
                          onDragOver: Ze,
                          onFinishLoading: it,
                          updateAnnotations: Xe,
                          shouldShowControls: l,
                          thumbnailSize: Pe,
                          panelSelector: t,
                          parentKeyListener: function (e) {
                            return qe(e, a);
                          },
                          isRightToLeft: M,
                        }),
                      ),
                      c &&
                        !ae &&
                        i.a.createElement("div", {
                          key: "placeholder2-".concat(a),
                          className: "thumbnailPlaceholder",
                        }),
                    )
                  : null;
              }),
            );
          },
          pt = function () {
            ce(Math.min(16, Math.max(1, Math.floor(Q / Pe))));
          },
          ht = O ? Number(Pe) + 50 : Number(Pe) + 80,
          bt = !(j || P || L),
          ft = { height: "".concat(25, "px") },
          gt = function (e, t) {
            var n = "1000" * Number(t);
            (n < 100 && (n = 100), ke(n), pt());
          };
        return i.a.createElement(
          i.a.Fragment,
          null,
          !A &&
            i.a.createElement(
              "div",
              {
                "data-element": "thumbnailsSizeSlider",
                className: "thumbnail-slider-container",
              },
              i.a.createElement(w.a, {
                img: "icon-zoom-thumb-out",
                title: "action.zoomOut",
                hideTooltipShortcut: !0,
                onClick: function () {
                  Pe - "50" > "50" && (ke(Pe - "50"), pt());
                },
                dataElement: "zoomThumbOutButton",
              }),
              _e &&
                i.a.createElement(fe.a, {
                  dataElement: "thumbnailsSizeSlider",
                  property: "zoom",
                  displayProperty: "zoom",
                  min: 0,
                  max: 1,
                  step: 0.01,
                  value: Pe / 1e3,
                  getDisplayValue: function () {
                    return Pe;
                  },
                  onSliderChange: gt,
                  onStyleChange: gt,
                  shouldHideSliderTitle: !0,
                  shouldHideSliderValue: !0,
                }),
              !_e &&
                i.a.createElement("input", {
                  role: "slider",
                  type: "range",
                  "aria-label": "thumbnail size slider",
                  min: "100",
                  max: "1000",
                  value: Pe,
                  "aria-valuemin": "100",
                  "aria-valuemax": "1000",
                  "aria-valuenow": Pe,
                  onChange: function (e) {
                    (ke(Number(e.target.value)), pt());
                  },
                  step: "50",
                  className: "thumbnail-slider",
                  id: "thumbnailSize",
                }),
              i.a.createElement(w.a, {
                img: "icon-zoom-thumb-in",
                title: "action.zoomIn",
                hideTooltipShortcut: !0,
                onClick: function () {
                  Pe + Number("50") < 1001 && (ke(Pe + Number("50")), pt());
                },
                dataElement: "zoomThumbInButton",
              }),
            ),
          i.a.createElement(
            u.a,
            {
              bounds: !0,
              onResize: function (e) {
                var t = e.bounds;
                (X(t.height),
                  Z(t.width),
                  ce(Math.min(16, Math.max(1, Math.floor(t.width / Pe)))));
              },
              key: Pe,
            },
            function (e) {
              var n = e.measureRef;
              return i.a.createElement(
                "div",
                {
                  className: "Panel ThumbnailsPanel ".concat(t),
                  id: "virtualized-thumbnails-container",
                  "data-element": "thumbnailsPanel",
                  onDrop: at,
                  ref: n,
                },
                i.a.createElement(
                  "div",
                  { className: "virtualized-thumbnails-container" },
                  se
                    ? i.a.createElement("div", {
                        className: "thumbnailAutoScrollArea",
                        onDragOver: tt,
                        style: ft,
                      })
                    : "",
                  i.a.createElement(c.c, {
                    ref: _,
                    height: $,
                    width: Q,
                    rowHeight: ht,
                    rowCount: Math.ceil(Me / le),
                    rowRenderer: mt,
                    overscanRowCount: 3,
                    className: d()({ thumbnailsList: !0, "right-to-left": M }),
                    scrollToIndex: Math.floor((g - 1) / le),
                    role: "grid",
                    "aria-label": D("component.thumbnailsPanel"),
                    tabIndex: -1,
                  }),
                  se
                    ? i.a.createElement("div", {
                        className: "thumbnailAutoScrollArea",
                        onDragOver: et,
                        style: Oe(Oe({}, ft), {}, { bottom: "70px" }),
                      })
                    : "",
                ),
              );
            },
          ),
          i.a.createElement(be, {
            shouldShowControls: bt,
            parentElement: n || t,
          }),
        );
      };
      t.default = Pe;
    },
  },
]);
//# sourceMappingURL=chunk.39.js.map
