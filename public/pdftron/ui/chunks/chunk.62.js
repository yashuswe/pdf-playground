(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    1958: function (o, e, n) {
      var t = n(35),
        r = n(1959);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[o.i, r, ""]]);
      var a = {
        insert: function (o) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(o);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function o(e, n = document) {
                const t = [];
                return (
                  n.querySelectorAll(e).forEach((o) => t.push(o)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && t.push(...o(e, n.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer")));
          const n = [];
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            if (0 === t)
              (r.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                }));
            else {
              const e = o.cloneNode(!0);
              (r.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      t(r, a);
      o.exports = r.locals || {};
    },
    1959: function (o, e, n) {
      ((e = o.exports = n(36)(!1)).push([
        o.i,
        ".open.ErrorModal{visibility:visible}.closed.ErrorModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ErrorModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.ErrorModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.ErrorModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.ErrorModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.ErrorModal .footer .modal-button.cancel:hover,.ErrorModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.ErrorModal .footer .modal-button.cancel,.ErrorModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.ErrorModal .footer .modal-button.cancel.disabled,.ErrorModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.ErrorModal .footer .modal-button.cancel.disabled span,.ErrorModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.ErrorModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.ErrorModal .modal-container .wrapper .modal-content{padding:10px}.ErrorModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.ErrorModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.ErrorModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.ErrorModal .footer .modal-button.confirm{margin-inline-start:4px}.ErrorModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ErrorModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ErrorModal .footer .modal-button{padding:23px 8px}}.ErrorModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ErrorModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .ErrorModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ErrorModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ErrorModal .swipe-indicator{width:32px}}.ErrorModal .modal-container{width:300px;word-break:break-word;white-space:pre-wrap}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2129: function (o, e, n) {
      "use strict";
      n.r(e);
      (n(9),
        n(10),
        n(14),
        n(21),
        n(50),
        n(20),
        n(12),
        n(22),
        n(18),
        n(16),
        n(8),
        n(17),
        n(19),
        n(62),
        n(11),
        n(181),
        n(13));
      var t = n(0),
        r = n.n(t),
        a = n(15),
        i = n.n(a),
        d = n(6),
        l = n(305),
        s = n(3),
        p = n(4),
        c = n(41),
        m = n(77),
        u = n(373),
        b = n(5);
      n(1958);
      function f(o, e) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, e) {
            var n =
              null == o
                ? null
                : ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
            if (null != n) {
              var t,
                r,
                a,
                i,
                d = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(o)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (t = a.call(n)).done) &&
                    (d.push(t.value), d.length !== e);
                    l = !0
                  );
              } catch (o) {
                ((s = !0), (r = o));
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
              return d;
            }
          })(o, e) ||
          (function (o, e) {
            if (o) {
              if ("string" == typeof o) return h(o, e);
              var n = {}.toString.call(o).slice(8, -1);
              return (
                "Object" === n && o.constructor && (n = o.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(o)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? h(o, e)
                    : void 0
              );
            }
          })(o, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function h(o, e) {
        (null == e || e > o.length) && (e = o.length);
        for (var n = 0, t = Array(e); n < e; n++) t[n] = o[n];
        return t;
      }
      var w = function () {
        var o = f(
            Object(d.e)(function (o) {
              return [
                p.a.getErrorMessage(o),
                p.a.getErrorTitle(o),
                p.a.isElementDisabled(o, b.a.ERROR_MODAL),
                p.a.isElementOpen(o, b.a.ERROR_MODAL),
              ];
            }, d.c),
            4,
          ),
          e = o[0],
          n = o[1],
          a = o[2],
          h = o[3],
          w = Object(d.d)(),
          x = f(Object(l.a)(), 1)[0],
          y = function (o) {
            return null == o ? void 0 : o.includes("dev.apryse.com");
          };
        Object(t.useEffect)(
          function () {
            if (h)
              return (
                w(
                  s.a.closeElements([
                    b.a.SIGNATURE_MODAL,
                    b.a.PRINT_MODAL,
                    b.a.LOADING_MODAL,
                    b.a.PROGRESS_MODAL,
                    b.a.PASSWORD_MODAL,
                    b.a.FILTER_MODAL,
                  ]),
                ),
                window.addEventListener("keydown", function (o) {
                  return Object(m.b)(o, v);
                }),
                function () {
                  return window.removeEventListener("keydown", m.b);
                }
              );
          },
          [w, h],
        );
        var E = e.startsWith("message."),
          v = function () {
            (w(s.a.closeElement(b.a.ERROR_MODAL)),
              y(e) && window.open("https://dev.apryse.com", "_blank"));
          },
          M = x("action.ok");
        return (
          y(e) && (M = "Get trial key"),
          a
            ? null
            : r.a.createElement(
                "div",
                {
                  className: i()({
                    Modal: !0,
                    ErrorModal: !0,
                    open: h,
                    closed: !h,
                  }),
                  "data-element": b.a.ERROR_MODAL,
                },
                r.a.createElement(
                  u.a,
                  {
                    isOpen: h,
                    title: n || "message.error",
                    closeButtonDataElement: "errorModalCloseButton",
                    onCloseClick: v,
                  },
                  r.a.createElement(
                    "div",
                    { className: "modal-content error-modal-content" },
                    r.a.createElement("p", null, E ? x(e) : e),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "modal-footer footer" },
                    r.a.createElement(c.a, {
                      className: "confirm modal-button",
                      dataElement: "closeErrorModalButton",
                      label: M,
                      onClick: v,
                    }),
                  ),
                ),
              )
        );
      };
      e.default = w;
    },
  },
]);
//# sourceMappingURL=chunk.62.js.map
