(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    1723: function (e, t, n) {
      var o = n(35),
        i = n(1724);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
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
            const i = t[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (i.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1724: function (e, t, n) {
      (e.exports = n(36)(!1)).push([e.i, "", ""]);
    },
    1768: function (e, t, n) {
      "use strict";
      (n(9),
        n(10),
        n(14),
        n(30),
        n(12),
        n(31),
        n(26),
        n(28),
        n(40),
        n(24),
        n(42),
        n(43),
        n(8),
        n(84),
        n(11),
        n(13));
      var o = n(0),
        i = n.n(o),
        r = n(2),
        a = n.n(r),
        l = n(6),
        c = n(4);
      n(1723);
      function p(e) {
        return (p =
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
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, f(o.key), o));
        }
      }
      function s(e, t, n) {
        return (
          (t = m(t)),
          (function (e, t) {
            if (t && ("object" == p(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(
            e,
            (function () {
              try {
                var e = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (e) {}
              return (function () {
                return !!e;
              })();
            })()
              ? Reflect.construct(t, n || [], m(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e, t) {
        return (h = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return ((e.__proto__ = t), e);
            })(e, t);
      }
      function f(e) {
        var t = (function (e, t) {
          if ("object" != p(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" != p(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == p(t) ? t : t + "";
      }
      var b,
        x,
        y,
        g = (function (e) {
          function t() {
            return (u(this, t), s(this, t, arguments));
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && h(e, t));
            })(t, e),
            (n = t),
            (o = [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    n = e.className,
                    o = e.dataElement,
                    r = e.children;
                  return t
                    ? null
                    : i.a.createElement(
                        "div",
                        { className: n, "data-element": o },
                        r,
                      );
                },
              },
            ]) && d(n.prototype, o),
            r && d(n, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, o, r;
        })(i.a.PureComponent);
      ((b = g),
        (x = "propTypes"),
        (y = {
          isDisabled: a.a.bool,
          className: a.a.string.isRequired,
          dataElement: a.a.string.isRequired,
          children: a.a.node,
        }),
        (x = f(x)) in b
          ? Object.defineProperty(b, x, {
              value: y,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (b[x] = y));
      var w = Object(l.b)(function (e, t) {
        return { isDisabled: c.a.isElementDisabled(e, t.dataElement) };
      })(g);
      t.a = w;
    },
    1933: function (e, t, n) {
      var o = n(35),
        i = n(1934);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
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
            const i = t[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (i.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1934: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.mathSymbolsContainer{display:flex;flex-wrap:wrap;overflow-y:auto;display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:5px}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.mathSymbolsContainer{width:196px}}.mathSymbolsContainer.padding{padding-top:4px;padding-bottom:8px;padding-inline-start:20px;padding-inline-end:20px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer{max-width:450px;width:auto}}@media(max-width:640px)and (-ms-high-contrast:active),(max-width:640px)and (-ms-high-contrast:none){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer{width:308px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer{max-width:450px;width:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer{width:308px}}}.mathSymbolsContainer .cell-container{padding:0;border:none;background-color:transparent;flex:1 0 14%;cursor:pointer;border-radius:4px;width:28px;height:28px;display:flex;align-items:center;justify-content:center}:host(:not([data-tabbing=true])) .mathSymbolsContainer .cell-container,html:not([data-tabbing=true]) .mathSymbolsContainer .cell-container{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer .cell-container{width:44px;height:44px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer .cell-container{width:44px;height:44px}}.mathSymbolsContainer .cell-container:hover{background:var(--popup-button-hover)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1935: function (e, t, n) {
      var o = n(35),
        i = n(1936);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
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
            const i = t[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (i.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1936: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ".open.RichTextPopup{visibility:visible}.closed.RichTextPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.RichTextPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.RichTextPopup:empty{padding:0}.RichTextPopup .buttons{display:flex}.RichTextPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RichTextPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RichTextPopup .Button{width:42px;height:42px}}.RichTextPopup .Button:hover{background:var(--popup-button-hover)}.RichTextPopup .Button:hover:disabled{background:none}.RichTextPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RichTextPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RichTextPopup .Button .Icon{width:24px;height:24px}}.is-vertical.RichTextPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-inline-start:var(--padding-small);padding-inline-end:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.RichTextPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.RichTextPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.RichTextPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.RichTextPopup .Button.main-menu-button .Icon{margin-inline-end:10px}.is-vertical.RichTextPopup .Button.main-menu-button span{white-space:nowrap}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.RichTextPopup{overflow:visible;flex-direction:column;background:var(--component-background);border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);width:220px;padding:6px 12px;align-items:flex-start}.RichTextPopup #FontSizeDropdown.Dropdown__wrapper{width:80px}.RichTextPopup #FontSizeDropdown.Dropdown__wrapper .Dropdown,.RichTextPopup #FontSizeDropdown.Dropdown__wrapper .Dropdown__items{width:80px!important}.RichTextPopup.legacy{padding:0;width:auto;align-items:center}.RichTextPopup.legacy .ColorPalette.padding{padding:4px 12px 8px}.RichTextPopup.legacy .colorPicker{padding:0 12px 8px}.RichTextPopup .rich-text-format-legacy{display:flex;width:100%;justify-content:center}.RichTextPopup .ColorPalette.padding{padding:0}.RichTextPopup .menu-items{width:100%;padding:6px 4px}.RichTextPopup .collapsible-menu{width:100%;display:flex;cursor:pointer;align-items:center;justify-content:space-between}.RichTextPopup .collapsible-menu .menu-title{padding-inline-start:4px;padding-top:6px;padding-bottom:6px;font-weight:700;font-size:14px}.RichTextPopup .collapsible-menu .Icon{height:18px;width:18px}.RichTextPopup .divider{background-color:var(--divider);width:100%;height:1px;margin:6px 0}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2102: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
        n(34),
        n(27),
        n(21),
        n(50),
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
        n(62),
        n(11),
        n(231),
        n(266),
        n(381),
        n(29),
        n(13),
        n(94));
      var o = n(0),
        i = n.n(o),
        r = n(185),
        a = n.n(r),
        l = n(15),
        c = n.n(l),
        p = n(6),
        u = n(105),
        d = n.n(u),
        s = n(2),
        m = n.n(s),
        h = n(1768),
        f = n(194),
        b = n(41),
        x = n(195),
        y = n(45),
        g = n(1),
        w = (n(133), n(230)),
        v = n(23),
        T = function (e, t) {
          if (t && t.current) {
            var n = Object(v.a)().querySelector(
              "#pageWidgetContainer"
                .concat(e.PageNumber, ' [id="freetext-editor-')
                .concat(e.Id, '"]'),
            );
            if (n) {
              var o = g.a.getScrollViewElement(),
                i = 2 * parseFloat(e.StrokeThickness) * g.a.getZoom(),
                r = n.getBoundingClientRect(),
                a = 0,
                l = 0;
              if (window.isApryseWebViewerWebComponent) {
                var c,
                  p =
                    null === (c = Object(v.a)().host) || void 0 === c
                      ? void 0
                      : c.getBoundingClientRect();
                ((a = p.top), (l = p.left));
              }
              var u = {
                  topLeft: {
                    x: r.left + o.scrollLeft - i,
                    y: r.top + o.scrollTop - i,
                  },
                  bottomRight: {
                    x: r.right + o.scrollLeft + i,
                    y: r.bottom + o.scrollTop + i,
                  },
                },
                d = t.current.getBoundingClientRect();
              return {
                left: Object(w.a)(u, d) - l,
                top: Object(w.b)(u, d) - a,
              };
            }
          }
        },
        E = n(313),
        S =
          (n(44),
          n(1933),
          [
            "+",
            "−",
            "×",
            "÷",
            "=",
            "≠",
            "±",
            "¬",
            "<",
            ">",
            "⋜",
            "⋝",
            "°",
            "¹",
            "²",
            "³",
            "ƒ",
            "%",
            "‰",
            "‱",
            "∀",
            "∁",
            "∂",
            "∃",
            "∄",
            "∅",
            "∆",
            "∇",
            "∈",
            "∉",
            "∊",
            "∋",
            "∌",
            "∍",
            "∎",
            "∏",
            "∐",
            "∑",
            "∓",
            "∔",
            "∕",
            "∖",
            "∗",
            "∘",
            "∙",
            "√",
            "∛",
            "∜",
            "∝",
            "∞",
            "∟",
            "∠",
            "∡",
            "∢",
            "∣",
            "∤",
            "∥",
            "∦",
            "∧",
            "∨",
            "∩",
            "∪",
            "∫",
            "∬",
            "∭",
            "∮",
            "∯",
            "∰",
            "∱",
            "∲",
            "∳",
            "∴",
            "∵",
            "∶",
            "∷",
            "∸",
            "∹",
            "∺",
            "∻",
            "∼",
            "∽",
            "∾",
            "∿",
            "≀",
            "≁",
            "≂",
            "≃",
            "≄",
            "≅",
            "≆",
            "≇",
            "≈",
            "≉",
            "≊",
            "≋",
            "≌",
          ]),
        P = function (e) {
          var t = e.onClickHandler,
            n = e.maxHeight;
          return i.a.createElement(
            "div",
            {
              className: "mathSymbolsContainer padding",
              style: { maxHeight: "".concat(n, "px") },
            },
            S.map(function (e, n) {
              return i.a.createElement(
                "button",
                {
                  key: n,
                  className: "cell-container",
                  onClick: function () {
                    t(e);
                  },
                },
                e,
              );
            }),
          );
        },
        O = n(352),
        C = n(3),
        R = n(4),
        _ = (n(1935), n(5)),
        A = n(33),
        k = n(51),
        j = n(253),
        N = n(478);
      function D(e) {
        return (D =
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
      function L(e, t) {
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                F(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : L(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function F(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != D(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != D(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == D(t) ? t : t + "";
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
      function I(e, t) {
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
                i,
                r,
                a,
                l = [],
                c = !0,
                p = !1;
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
                ((p = !0), (i = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (p) throw i;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return z(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? z(e, t)
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
      function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var H = { annotation: m.a.object, editor: m.a.object },
        M = function (e) {
          var t = e.annotation,
            n = e.editor,
            r = I(
              Object(p.e)(function (e) {
                return [
                  R.a.isElementDisabled(e, _.a.RICH_TEXT_POPUP),
                  R.a.isElementOpen(e, _.a.RICH_TEXT_POPUP),
                  R.a.isElementDisabled(e, "colorPalette"),
                  R.a.getCustomColors(e, "customColors"),
                  R.a.isInDesktopOnlyMode(e),
                  R.a.isElementOpen(e, _.a.STYLE_POPUP_TEXT_STYLE_CONTAINER),
                  R.a.isElementOpen(e, _.a.STYLE_POPUP_COLORS_CONTAINER),
                  R.a.getFonts(e),
                  !R.a.isElementDisabled(e, _.a.LEGACY_RICH_TEXT_POPUP),
                ];
              }, p.c),
              9,
            ),
            l = r[0],
            u = r[1],
            s = r[2],
            m = r[3],
            w = r[4],
            v = r[5],
            S = r[6],
            D = r[7],
            L = r[8],
            z = I(Object(o.useState)(!1), 2),
            H = z[0],
            M = z[1],
            U = I(Object(o.useState)({ left: 0, top: 0 }), 2),
            Y = U[0],
            W = U[1],
            q = I(Object(o.useState)({ x: 0, y: 0 }), 2),
            V = q[0],
            X = q[1],
            G = I(Object(o.useState)({}), 2),
            J = G[0],
            K = G[1],
            Z = Object(o.useRef)(null),
            $ = Object(o.useRef)(null),
            Q = Object(o.useRef)(null),
            ee = Object(o.useRef)({}),
            te = Object(p.d)(),
            ne = Object(o.useRef)(),
            oe = I(Object(o.useState)(t.isAutoSizeFont()), 2),
            ie = oe[0],
            re = oe[1];
          (Object(o.useEffect)(function () {
            return (
              te(C.a.disableElements([_.a.ANNOTATION_STYLE_POPUP])),
              te(C.a.closeElement(_.a.ANNOTATION_POPUP)),
              function () {
                te(C.a.enableElements([_.a.ANNOTATION_STYLE_POPUP]));
              }
            );
          }, []),
            Object(o.useEffect)(function () {
              var e = function (e, t) {
                  (!e &&
                    t &&
                    $.current &&
                    $.current.setSelection(t.index, t.length),
                    e && $.current && K(le(e)));
                },
                t = function () {
                  var e, t;
                  if (
                    null !== (e = Q.current) &&
                    void 0 !== e &&
                    e.isAutoSized() &&
                    Z.current
                  ) {
                    var n = T(Q.current, Z);
                    W(n);
                  }
                  K(
                    le(
                      null === (t = $.current) || void 0 === t
                        ? void 0
                        : t.getSelection(),
                    ),
                  );
                };
              return (
                g.a.addEventListener("editorSelectionChanged", e),
                g.a.addEventListener("editorTextChanged", t),
                function () {
                  (g.a.removeEventListener("editorSelectionChanged", e),
                    g.a.removeEventListener("editorTextChanged", t));
                }
              );
            }, []),
            Object(o.useEffect)(
              function () {
                var e, o, i, r, a, l, c;
                (X({ x: 0, y: 0 }), ($.current = n), (Q.current = t));
                var p = "solid";
                try {
                  p =
                    "dash" === t.Style
                      ? "".concat(t.Style, ",").concat(t.Dashes)
                      : t.Style;
                } catch (e) {
                  console.error(e);
                }
                var u = t.getRichTextStyle()[0];
                ((ee.current = {
                  Font: t.Font,
                  FontSize: t.FontSize,
                  TextAlign: t.TextAlign,
                  TextVerticalAlign: t.TextVerticalAlign,
                  bold:
                    null !==
                      (e =
                        "bold" === (null == u ? void 0 : u["font-weight"])) &&
                    void 0 !== e &&
                    e,
                  italic:
                    null !==
                      (o =
                        "italic" === (null == u ? void 0 : u["font-style"])) &&
                    void 0 !== o &&
                    o,
                  underline:
                    (null == u ||
                    null === (i = u["text-decoration"]) ||
                    void 0 === i
                      ? void 0
                      : i.includes("underline")) ||
                    (null == u ||
                    null === (r = u["text-decoration"]) ||
                    void 0 === r
                      ? void 0
                      : r.includes("word")),
                  strikeout:
                    null !==
                      (a =
                        null == u ||
                        null === (l = u["text-decoration"]) ||
                        void 0 === l
                          ? void 0
                          : l.includes("line-through")) &&
                    void 0 !== a &&
                    a,
                  size: null == u ? void 0 : u["font-size"],
                  font: null == u ? void 0 : u["font-family"],
                  StrokeStyle: p,
                  calculatedFontSize: t.getCalculatedFontSize(),
                }),
                  K(
                    le(
                      null === (c = $.current) || void 0 === c
                        ? void 0
                        : c.getSelection(),
                    ),
                  ),
                  ne.current &&
                    ($.current.setSelection(ne.current), (ne.current = null)));
              },
              [t, n],
            ),
            Object(o.useEffect)(
              function () {
                var e = function () {
                  (te(C.a.closeElements([_.a.RICH_TEXT_POPUP])),
                    ($.current = null),
                    (Q.current = null));
                };
                return (
                  g.a.addEventListener("editorBlur", e),
                  function () {
                    g.a.removeEventListener("editorBlur", e);
                  }
                );
              },
              [te],
            ));
          var ae = function () {
            if (Z.current) {
              var e = T(t, Z);
              W(e);
            }
          };
          (Object(o.useLayoutEffect)(
            function () {
              ae();
            },
            [t],
          ),
            Object(o.useLayoutEffect)(
              function () {
                var e = d()(function () {
                    Z.current && ae();
                  }, 100),
                  t = g.a.getDocumentViewer().getScrollViewElement();
                return (
                  null == t || t.addEventListener("scroll", e),
                  function () {
                    return null == t
                      ? void 0
                      : t.removeEventListener("scroll", e);
                  }
                );
              },
              [t, H],
            ));
          var le = function (e) {
              if (!e) return {};
              var t = $.current.getFormat(e.index, e.length);
              if ("string" == typeof t.color)
                t.color = new window.Core.Annotations.Color(t.color);
              else if (Array.isArray(t.color)) {
                var n = new window.Core.Annotations.Color(
                  t.color[t.color.length - 1],
                );
                t.color = n;
              } else t.color || (t.color = Q.current.TextColor);
              return t;
            },
            ce = function (e) {
              return function () {
                var t = $.current.getSelection(),
                  n = t.index,
                  o = t.length;
                if (0 === o) {
                  ne.current = { index: n, length: o };
                  var i = $.current.getSelection();
                  ((n = i.index), (o = i.length));
                }
                var r = $.current.getFormat(n, o);
                ue(e, !r[e]);
              };
            },
            pe = function (e, t) {
              ue("color", t.toHexString());
            },
            ue = function (e, t) {
              var n, o;
              "size" === e
                ? null === (n = $.current) ||
                  void 0 === n ||
                  n.format("applyCustomFontSize", t)
                : null === (o = $.current) || void 0 === o || o.format(e, t);
              if (
                ("color" === e && (t = new window.Core.Annotations.Color(t)),
                g.a.isFullPDFEnabled() && "font" === e)
              ) {
                var i = B(B({}, J), {}, { "original-font-family": t });
                return K(i);
              }
              K(B(B({}, J), {}, F({}, e, t)));
            },
            de = function (e, t) {
              var n = t.x,
                o = t.y;
              X({ x: n, y: o });
            },
            se = F(
              F({}, _.a.STYLE_POPUP_TEXT_STYLE_CONTAINER, v),
              _.a.STYLE_POPUP_COLORS_CONTAINER,
              S,
            ),
            me = function (e) {
              se[e] ? te(C.a.closeElement(e)) : te(C.a.openElement(e));
            },
            he = function () {
              return me(_.a.STYLE_POPUP_TEXT_STYLE_CONTAINER);
            },
            fe = function () {
              return me(_.a.STYLE_POPUP_COLORS_CONTAINER);
            };
          return (
            (ee.current.bold = J.bold),
            (ee.current.italic = J.italic),
            (ee.current.underline = J.underline),
            (ee.current.strikeout = J.strike),
            (ee.current.quillFont =
              J["original-font-family"] || J.font || ee.current.Font),
            (ee.current.quillFontSize = J.originalSize || ee.current.FontSize),
            l || (Object(y.k)() && !w)
              ? null
              : i.a.createElement(
                  a.a,
                  {
                    position: V,
                    onDrag: de,
                    onStop: de,
                    enableUserSelectHack: !1,
                    cancel:
                      ".Button, .cell, .mathSymbolsContainer, .Dropdown, .Dropdown__item",
                    onMouseDown: function (e) {
                      "touchstart" !== e.type && e.preventDefault();
                    },
                  },
                  i.a.createElement(
                    "div",
                    {
                      className: c()({
                        Popup: !0,
                        RichTextPopup: !0,
                        open: u,
                        closed: !u,
                        legacy: L,
                      }),
                      ref: Z,
                      "data-element": _.a.RICH_TEXT_POPUP,
                      style: B({}, Y),
                    },
                    L
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            h.a,
                            {
                              className: "rich-text-format-legacy",
                              dataElement: "richTextFormats",
                            },
                            i.a.createElement(b.a, {
                              isActive: J.bold,
                              dataElement: "richTextBoldButton",
                              onClick: ce("bold"),
                              img: "icon-text-bold",
                              title: "option.richText.bold",
                            }),
                            i.a.createElement(b.a, {
                              isActive: J.italic,
                              dataElement: "richTextItalicButton",
                              onClick: ce("italic"),
                              img: "icon-text-italic",
                              title: "option.richText.italic",
                            }),
                            i.a.createElement(b.a, {
                              isActive: J.underline,
                              dataElement: "richTextUnderlineButton",
                              onClick: ce("underline"),
                              img: "ic_annotation_underline_black_24px",
                              title: "option.richText.underline",
                            }),
                            i.a.createElement(b.a, {
                              isActive: J.strike,
                              dataElement: "richTextStrikeButton",
                              onClick: ce("strike"),
                              img: "ic_annotation_strikeout_black_24px",
                              title: "option.richText.strikeout",
                            }),
                            i.a.createElement(b.a, {
                              dataElement: "mathSymbolsButton",
                              onClick: function () {
                                M(!H);
                              },
                              img: "ic_thumbnails_grid_black_24px",
                              title: "option.mathSymbols",
                            }),
                          ),
                          i.a.createElement(x.a, { style: { paddingTop: 0 } }),
                        )
                      : i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            "div",
                            {
                              className: "collapsible-menu",
                              onClick: he,
                              onTouchStart: he,
                              role: "toolbar",
                            },
                            i.a.createElement(
                              "div",
                              { className: "menu-title" },
                              A.a.t("option.stylePopup.textStyle"),
                            ),
                            i.a.createElement(k.a, {
                              glyph: "icon-chevron-".concat(v ? "up" : "down"),
                            }),
                          ),
                          v &&
                            i.a.createElement(
                              "div",
                              { className: "menu-items" },
                              i.a.createElement(j.a, {
                                fonts: D,
                                onPropertyChange: function (e, t) {
                                  var n = $.current.getSelection(),
                                    o = n.index,
                                    i = n.length,
                                    r = Q.current;
                                  ((r[e] = t),
                                    $.current.blur(),
                                    ("FontSize" !== e && "Font" !== e) ||
                                      Object(E.a)(r),
                                    setTimeout(function () {
                                      ((ne.current = { index: o, length: i }),
                                        g.a
                                          .getAnnotationManager()
                                          .getEditBoxManager()
                                          .focusBox(r));
                                    }, 0));
                                },
                                onRichTextStyleChange: function (e, t) {
                                  var n = {
                                    "font-weight": "bold",
                                    "font-style": "italic",
                                    underline: "underline",
                                    "line-through": "strike",
                                    "font-family": "font",
                                    "font-size": "size",
                                  };
                                  if (
                                    "font-family" === e ||
                                    "font-size" === e
                                  ) {
                                    ue(n[e], t);
                                    var o = Q.current;
                                    if (o.isAutoSized())
                                      g.a
                                        .getAnnotationManager()
                                        .getEditBoxManager()
                                        .resizeAnnotation(o);
                                  } else ce(n[e])();
                                },
                                properties: ee.current,
                                stateless: !0,
                                isFreeText: !0,
                                onFreeTextSizeToggle: function () {
                                  return Object(N.a)(t, re, ie);
                                },
                                isFreeTextAutoSize: ie,
                                isRichTextEditMode: !0,
                              }),
                            ),
                          i.a.createElement("div", { className: "divider" }),
                          !s &&
                            i.a.createElement(
                              "div",
                              {
                                className: "collapsible-menu",
                                onClick: fe,
                                onTouchStart: fe,
                                role: "toolbar",
                              },
                              i.a.createElement(
                                "div",
                                { className: "menu-title" },
                                A.a.t("option.stylePopup.colors"),
                              ),
                              i.a.createElement(k.a, {
                                glyph: "icon-chevron-".concat(
                                  S ? "up" : "down",
                                ),
                              }),
                            ),
                        ),
                    !s &&
                      (L || S) &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(f.a, {
                          colorMapKey: "freeText",
                          color: J.color,
                          property: "TextColor",
                          onStyleChange: pe,
                          hasPadding: !0,
                        }),
                        m.length > 0 &&
                          i.a.createElement(O.a, {
                            color: J.color,
                            property: "TextColor",
                            onStyleChange: pe,
                            enableEdit: !1,
                          }),
                      ),
                    H &&
                      i.a.createElement(P, {
                        onClickHandler: function (e) {
                          var t = $.current.getSelection(),
                            n = t.index,
                            o = t.length;
                          (o > 0 && $.current.deleteText(n, o),
                            $.current.insertText(n, e),
                            $.current.setSelection(n + 1));
                        },
                        maxHeight: 150,
                      }),
                  ),
                )
          );
        };
      M.propTypes = H;
      var U = i.a.memo(M);
      t.default = U;
    },
  },
]);
//# sourceMappingURL=chunk.47.js.map
