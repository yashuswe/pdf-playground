(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    1953: function (e, n, t) {
      var a = t(35),
        o = t(1954);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, t = document) {
                const a = [];
                return (
                  t.querySelectorAll(n).forEach((e) => a.push(e)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && a.push(...e(n, t.shadowRoot));
                  }),
                  a
                );
              })("apryse-webviewer")));
          const t = [];
          for (let a = 0; a < n.length; a++) {
            const o = n[a];
            if (0 === a)
              (o.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (o.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      a(o, i);
      e.exports = o.locals || {};
    },
    1954: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ".open.ScaleModal{visibility:visible}.closed.ScaleModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ScaleModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.ScaleModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.ScaleModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.ScaleModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.ScaleModal .footer .modal-button.cancel:hover,.ScaleModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.ScaleModal .footer .modal-button.cancel,.ScaleModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.ScaleModal .footer .modal-button.cancel.disabled,.ScaleModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.ScaleModal .footer .modal-button.cancel.disabled span,.ScaleModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.ScaleModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.ScaleModal .modal-container .wrapper .modal-content{padding:10px}.ScaleModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.ScaleModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.ScaleModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.ScaleModal .footer .modal-button.confirm{margin-inline-start:4px}.ScaleModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .footer .modal-button{padding:23px 8px}}.ScaleModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .swipe-indicator{width:32px}}.ScaleModal .modal-container{width:480px;overflow-y:visible}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container{width:100%;position:fixed;border-radius:0;inset-inline-start:0;inset-block-end:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container{width:100%;position:fixed;border-radius:0;inset-inline-start:0;inset-block-end:0}}.ScaleModal .modal-container .content-container{padding:24px 16px 16px}.ScaleModal .modal-container .content-container .ui__choice__label{font-weight:700;font-size:13px;line-height:16px;display:flex;align-items:center}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-option{padding:4px 0}.ScaleModal .modal-container .content-container .scaleSetting .custom-option-wrapper{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.ScaleModal .modal-container .content-container .scaleSetting .custom-option-wrapper .calibrate-btn{font-weight:400;line-height:16px;display:flex;align-items:center;text-align:center;color:var(--blue-5);background-color:transparent;border:none;cursor:pointer}.ScaleModal .modal-container .content-container .scaleSetting .custom-option-wrapper .calibrate-btn:hover{color:var(--blue-6)}.ScaleModal .modal-container .content-container .scaleSetting .selector{margin-top:16px;width:100%;height:32px;margin-bottom:18px}.ScaleModal .modal-container .content-container .scaleSetting .selector .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .modal-container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown{height:100%;width:100%!important;text-align:start}.ScaleModal .modal-container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown .arrow{flex:0 1 auto}.ScaleModal .modal-container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown__items{width:100%}.ScaleModal .modal-container .content-container .scaleSetting .block{height:18px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container{margin-top:8px;margin-bottom:8px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display{display:flex;flex-direction:row;align-items:center;justify-content:space-between;grid-gap:8px;gap:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .left-container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .left-container .input-wrapper>div,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .right-container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .right-container .input-wrapper>div{flex:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .left-container,.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .left-container .input-wrapper>div,.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .right-container,.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .right-container .input-wrapper>div{flex:1}}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .unit-label{padding-bottom:8px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .scale-ratio-equal{padding-top:24px;font-size:20px;width:28px;text-align:center}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper{display:flex;flex-direction:row}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{border-radius:var(--border-radius);border:1px solid var(--border);width:94px;height:32px;margin-inline-end:8px;padding-inline-start:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{width:79px;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{width:79px;height:32px}}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input.invalid-value{border-color:var(--red)}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input:not(.invalid-value):focus{border:1px solid var(--blue-5)}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:100px;height:32px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper .Dropdown{height:100%;text-align:start}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper .Dropdown__items{width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:4rem;height:2rem}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:4rem;height:2rem}}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper input::-webkit-inner-spin-button,.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper input[type=number]{-moz-appearance:textfield}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-alert{position:relative;margin-inline-end:8px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-alert input{margin-inline-end:0!important}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-alert .Icon{text-align:center;position:absolute;inset-block-start:50%;inset-inline-end:5px;margin:auto;transform:translateY(-50%);color:var(--red);display:block}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-alert-icon{display:none}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-messages{height:16px;font-weight:400;color:var(--red);margin-top:4px;position:relative;display:flex}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-messages .world-value-warning{position:absolute;inset-inline-start:246px}.ScaleModal .modal-container .content-container .precision-container{display:flex;font-size:13px;font-weight:400;margin-top:16px;align-items:center;justify-content:space-between;border-top:1px solid var(--modal-stroke-and-border);padding-top:16px;grid-gap:16px;gap:16px}.ScaleModal .modal-container .content-container .precision-container .precision-selector{display:flex;justify-content:space-between;align-items:center;width:288px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .precision-container .precision-selector{flex:2}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .precision-container .precision-selector{flex:2}}.ScaleModal .modal-container .content-container .precision-container .precision-selector .precision-title{height:1rem;font-weight:400;font-size:13px;line-height:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .precision-container .precision-selector .precision-title{margin-inline-end:8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .precision-container .precision-selector .precision-title{margin-inline-end:8px}}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector{width:223px;height:32px;z-index:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .precision-container .precision-selector .selector{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .precision-container .precision-selector .selector{width:100%}}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown{height:100%;width:100%!important;text-align:start}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown .arrow{flex:0 1 auto}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown__items{width:100%}.ScaleModal .modal-container .content-container .precision-container .ui__choice__label{font-weight:400}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .precision-container .fractional-units-container{flex:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .precision-container .fractional-units-container{flex:1}}.ScaleModal .modal-container .footer{display:flex;padding:16px;align-items:center;justify-content:flex-end;width:100%;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.ScaleModal .modal-container .footer .scale-update{height:32px;min-width:72px;display:flex;align-items:center;justify-content:center;color:var(--blue-5);background-color:transparent;border:1px solid var(--blue-5);box-sizing:border-box;border-radius:var(--border-radius);cursor:pointer;margin-inline-end:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .footer .scale-update{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .footer .scale-update{font-size:13px}}.ScaleModal .modal-container .footer .scale-update:enabled:hover{border:1px solid var(--blue-6);color:var(--blue-6)}.ScaleModal .modal-container .footer .scale-update:disabled{opacity:.5;cursor:not-allowed}.ScaleModal .modal-container .footer .scale-create{border:none;background-color:transparent;background:var(--primary-button);border-radius:var(--border-radius);padding:0 8px;height:32px;min-width:72px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .ScaleModal .modal-container .footer .scale-create,html:not([data-tabbing=true]) .ScaleModal .modal-container .footer .scale-create{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .footer .scale-create{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .footer .scale-create{font-size:13px}}.ScaleModal .modal-container .footer .scale-create:enabled:hover{background:var(--primary-button-hover)}.ScaleModal .modal-container .footer .scale-create:disabled{opacity:.5;cursor:not-allowed}.ScaleModal .ui__choice__input__check.ui__choice__input__check--checked{border:3px solid var(--gray-0);outline:solid 1px var(--blue-5);background-color:var(--blue-5)}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2116: function (e, n, t) {
      "use strict";
      t.r(n);
      (t(9),
        t(10),
        t(14),
        t(38),
        t(81),
        t(21),
        t(50),
        t(20),
        t(12),
        t(44),
        t(22),
        t(18),
        t(16),
        t(265),
        t(37),
        t(8),
        t(17),
        t(19),
        t(62),
        t(11),
        t(13),
        t(94));
      var a = t(0),
        o = t.n(a),
        i = t(6),
        r = t(305),
        c = t(1404),
        l = t(15),
        s = t.n(l),
        d = t(409),
        p = t(1),
        m = t(3),
        u = t(4),
        b = (t(34), t(133), t(153), t(2)),
        f = t.n(b),
        w = t(116),
        g = t(72),
        S = t(51);
      function h(e, n) {
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
              var a,
                o,
                i,
                r,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((i = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (a = i.call(t)).done) &&
                    (c.push(a.value), c.length !== n);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (o = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return c;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return x(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? x(e, n)
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
      function x(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      var v = window.Core.Scale,
        y = {
          scale: f.a.array,
          onScaleChange: f.a.func,
          precision: f.a.number,
        };
      function M(e) {
        var n = e.scale,
          t = e.onScaleChange,
          c = e.precision,
          l = h(
            Object(i.e)(function (e) {
              return [u.a.getMeasurementUnits(e)];
            }, i.c),
            1,
          )[0],
          p = h(Object(a.useState)(""), 2),
          m = p[0],
          b = p[1],
          f = h(Object(a.useState)(""), 2),
          x = f[0],
          y = f[1],
          M = h(Object(a.useState)(!1), 2),
          E = M[0],
          A = M[1],
          k = h(Object(a.useState)(""), 2),
          j = k[0],
          O = k[1],
          _ = h(Object(a.useState)(""), 2),
          C = _[0],
          N = _[1],
          D = h(Object(a.useState)(!1), 2),
          I = D[0],
          L = D[1],
          T = h(Object(a.useState)(0), 2),
          R = T[0],
          z = T[1],
          U = Object(a.useRef)(null),
          H = Object(a.useRef)(null),
          F = Object(a.useRef)(null),
          P = h(Object(r.a)(), 1)[0],
          B = function (e) {
            return e.filter(function (e) {
              return d.e.includes(e);
            });
          },
          V = E ? B(l.from) : l.from,
          W = E ? B(l.to) : l.to;
        (Object(a.useEffect)(
          function () {
            V.includes(n[0][1]) || Q(V[0], !0);
          },
          [n[0][1]],
        ),
          Object(a.useEffect)(
            function () {
              V.includes(n[0][1]) && !W.includes(n[1][1]) && Q(W[0], !1);
            },
            [n[0][1], n[1][1]],
          ),
          Object(a.useEffect)(
            function () {
              var e = function (e) {
                return null == e
                  ? void 0
                  : e.toFixed((1 / c).toString().length - 1);
              };
              (n[0][0] &&
                (null == U ? void 0 : U.current) !== document.activeElement &&
                b(
                  E
                    ? v.getFormattedValue(n[0][0], n[0][1], c, !1, !0) || ""
                    : e(n[0][0]) || "",
                ),
                !n[1][0] ||
                  (H && H.current === document.activeElement) ||
                  (E || "ft-in" === n[1][1]
                    ? y(v.getFormattedValue(n[1][0], n[1][1], c, !1, !0) || "")
                    : y(e(n[1][0]) || "")));
            },
            [n, c, H, U, E, I],
          ),
          Object(a.useEffect)(
            function () {
              A(Object(d.j)(c));
            },
            [c],
          ),
          Object(a.useEffect)(
            function () {
              E
                ? (O(d.i[n[0][1]]), N(d.i[n[1][1]]))
                : "ft-in" === n[1][1]
                  ? (O(""), N(d.i["ft-in decimal"]))
                  : (O(""), N(""));
            },
            [n, E],
          ),
          Object(a.useEffect)(
            function () {
              !K && Y(H.current.value, !1);
            },
            [n[1][1]],
          ),
          Object(a.useEffect)(
            function () {
              if (q || K)
                (!q && Y(U.current.value, !0), !K && Y(H.current.value, !1));
              else {
                var e = { value: n[0][0], unit: n[0][1] };
                Y(U.current.value, !0, function (n) {
                  e = n.pageScale;
                });
                var t = { value: n[1][0], unit: n[1][1] };
                (Y(H.current.value, !1, function (e) {
                  t = e.worldScale;
                }),
                  $(new v({ pageScale: e, worldScale: t })));
              }
            },
            [E],
          ),
          Object(a.useEffect)(
            function () {
              F.current && z((F.current.clientWidth - 8) / 2);
            },
            [F],
          ));
        var q = !!n[0][0],
          K = !!n[1][0],
          G = s()("scale-input", { "invalid-value": !q }),
          J = s()("scale-input", { "invalid-value": !K }),
          $ = function (e) {
            var n = function (e) {
              return "ft-in" === e ? c / 12 : c;
            };
            (e.pageScale.value &&
              e.pageScale.value < c &&
              (e.pageScale.value = n(e.pageScale.unit)),
              e.worldScale.value &&
                e.worldScale.value < c &&
                (e.worldScale.value = n(e.worldScale.unit)),
              t(e));
          },
          Y = function (e, t, a) {
            var o = function (e) {
              if ((t && e !== n[0][0]) || (!t && e !== n[1][0])) {
                var o = new v({
                  pageScale: { value: t ? e : n[0][0], unit: n[0][1] },
                  worldScale: { value: t ? n[1][0] : e, unit: n[1][1] },
                });
                a ? a(o) : $(o);
              }
            };
            t ? b(e) : y(e);
            var i = e.trim();
            if (E) {
              var r = t ? n[0][1] : n[1][1];
              if ("in" === r) {
                if (d.k.test(i)) {
                  var c = Object(d.p)(i);
                  if (c > 0) return void o(c);
                }
              } else if ("ft-in" === r && d.g.test(i)) {
                var l = Object(d.o)(i);
                if (l > 0) return void o(l);
              }
            } else if (t || "ft-in" !== n[1][1]) {
              if (d.d.test(i)) {
                return void o(parseFloat(i) || 0);
              }
            } else if (d.f.test(i)) {
              var s = Object(d.n)(i);
              if (s > 0) return void o(s);
            }
            o(void 0);
          },
          Q = function (e, t) {
            var a, o;
            ((a =
              t && e !== n[0][1]
                ? {
                    value: n[0][0] ? Object(d.c)(n[0][0], n[0][1], e) : n[0][0],
                    unit: e,
                  }
                : { value: n[0][0], unit: n[0][1] }),
              (o =
                t || e === n[1][1]
                  ? { value: n[1][0], unit: n[1][1] }
                  : {
                      value: n[1][0]
                        ? Object(d.c)(n[1][0], n[1][1], e)
                        : n[1][0],
                      unit: e,
                    }),
              $(new v({ pageScale: a, worldScale: o })));
          },
          X = function (e) {
            var t = e ? n[0][1] : n[1][1];
            return E ? d.i[t] : "ft-in" === t ? d.i["ft-in decimal"] : "";
          },
          Z = function () {
            L(function (e) {
              return !e;
            });
          };
        return o.a.createElement(
          "div",
          { className: "custom-scale-container" },
          o.a.createElement(
            "div",
            { className: "scale-ratio-input-container" },
            o.a.createElement(
              "div",
              { className: "scale-ratio-display" },
              o.a.createElement(
                "div",
                { className: "left-container", ref: F },
                o.a.createElement(
                  "div",
                  { className: "unit-label", id: "paper-units-dropdown-label" },
                  P("option.measurement.scaleModal.paperUnits"),
                ),
                o.a.createElement(
                  "div",
                  { className: "input-wrapper" },
                  o.a.createElement(
                    "div",
                    { className: s()({ "warning-alert": !q }) },
                    o.a.createElement("input", {
                      type: E ? "text" : "number",
                      min: "0",
                      className: G,
                      value: m,
                      "aria-label": P("insertPageModal.pageDimensions.units"),
                      "data-element": "customPageScaleValue",
                      onChange: function (e) {
                        return Y(e.target.value, !0);
                      },
                      placeholder: X(!0),
                      ref: U,
                      onBlur: Z,
                    }),
                    o.a.createElement(S.a, {
                      glyph: "icon-alert",
                      className: "warning-alert-icon",
                    }),
                  ),
                  o.a.createElement(
                    w.a,
                    { content: "option.measurement.scaleModal.paperUnits" },
                    o.a.createElement(
                      "div",
                      { className: "unit-input" },
                      o.a.createElement(g.a, {
                        id: "paper-units-dropdown",
                        labelledById: "paper-units-dropdown-label",
                        dataElement: "customPageScaleUnit",
                        items: V,
                        onClickItem: function (e) {
                          return Q(e, !0);
                        },
                        currentSelectionKey: n[0][1],
                        width: R,
                      }),
                    ),
                  ),
                ),
              ),
              o.a.createElement(
                "div",
                { className: "scale-ratio-equal" },
                " = ",
              ),
              o.a.createElement(
                "div",
                { className: "right-container" },
                o.a.createElement(
                  "div",
                  {
                    className: "unit-label",
                    id: "display-units-dropdown-label",
                  },
                  P("option.measurement.scaleModal.displayUnits"),
                ),
                o.a.createElement(
                  "div",
                  { className: "input-wrapper" },
                  o.a.createElement(
                    "div",
                    { className: s()({ "warning-alert": !K }) },
                    o.a.createElement("input", {
                      type: E || "ft-in" === n[1][1] ? "text" : "number",
                      min: "0",
                      className: J,
                      value: x,
                      "aria-label": P("insertPageModal.pageDimensions.units"),
                      "data-element": "customDisplayScaleValue",
                      onChange: function (e) {
                        return Y(e.target.value, !1);
                      },
                      placeholder: X(!1),
                      ref: H,
                      onBlur: Z,
                    }),
                    o.a.createElement(S.a, {
                      glyph: "icon-alert",
                      className: "warning-alert-icon",
                    }),
                  ),
                  o.a.createElement(
                    w.a,
                    { content: "option.measurement.scaleModal.displayUnits" },
                    o.a.createElement(
                      "div",
                      { className: "unit-input" },
                      o.a.createElement(g.a, {
                        id: "display-units-dropdown",
                        labelledById: "display-units-dropdown-label",
                        items: W,
                        dataElement: "customDisplayScaleUnit",
                        onClickItem: function (e) {
                          return Q(e, !1);
                        },
                        currentSelectionKey: n[1][1],
                        width: R,
                      }),
                    ),
                  ),
                ),
              ),
            ),
          ),
          o.a.createElement(
            "div",
            { className: "warning-messages", "aria-live": "assertive" },
            !q &&
              o.a.createElement(
                "p",
                { className: "no-margin" },
                ""
                  .concat(
                    P("option.measurement.scaleModal.incorrectSyntax"),
                    " ",
                  )
                  .concat(j),
              ),
            !K &&
              o.a.createElement(
                "p",
                { className: "world-value-warning no-margin" },
                ""
                  .concat(
                    P("option.measurement.scaleModal.incorrectSyntax"),
                    " ",
                  )
                  .concat(C),
              ),
          ),
        );
      }
      M.propTypes = y;
      var E = M,
        A = t(5),
        k = t(229),
        j = t(60),
        O = t(373);
      (t(1953), t(636));
      function _(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return D(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          N(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function C(e, n) {
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
              var a,
                o,
                i,
                r,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((i = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (a = i.call(t)).done) &&
                    (c.push(a.value), c.length !== n);
                    l = !0
                  );
              } catch (e) {
                ((s = !0), (o = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return c;
            }
          })(e, n) ||
          N(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function N(e, n) {
        if (e) {
          if ("string" == typeof e) return D(e, n);
          var t = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? D(e, n)
                : void 0
          );
        }
      }
      function D(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      var I = window.Core.Scale,
        L = "custom",
        T = "preset",
        R = function (e) {
          var n,
            t,
            l = e.annotations,
            b = e.selectedTool,
            f = Object(i.d)(),
            S = C(Object(r.a)(), 1)[0],
            h = C(
              Object(i.e)(function (e) {
                return [
                  u.a.isElementDisabled(e, A.a.SCALE_MODAL),
                  u.a.isElementOpen(e, A.a.SCALE_MODAL),
                  u.a.isElementHidden(e, A.a.SCALE_MODAL),
                  u.a.getCurrentToolbarGroup(e),
                  u.a.getSelectedScale(e),
                  u.a.getActiveToolName(e),
                  u.a.getIsAddingNewScale(e),
                  u.a.getMeasurementScalePreset(e),
                  u.a.getCalibrationInfo(e),
                  u.a.getIsMultipleScalesMode(e),
                ];
              }),
              10,
            ),
            x = h[0],
            v = h[1],
            y = h[2],
            M = h[3],
            N = h[4],
            D = h[5],
            R = h[6],
            z = h[7],
            U = h[8],
            H = U.tempScale,
            F = U.isFractionalUnit,
            P = h[9],
            B = C(Object(a.useState)(!1), 2),
            V = B[0],
            W = B[1],
            q = C(Object(a.useState)(d.r[d.a.DECIMAL][0]), 2),
            K = q[0],
            G = q[1],
            J = C(Object(a.useState)(L), 2),
            $ = J[0],
            Y = J[1],
            Q = C(Object(a.useState)(z[d.b.METRIC][0]), 2),
            X = Q[0],
            Z = Q[1],
            ee = C(Object(a.useState)(new I("")), 2),
            ne = ee[0],
            te = ee[1],
            ae = C(Object(a.useState)(!1), 2),
            oe = ae[0],
            ie = ae[1],
            re = Object.keys(p.a.getScales()).length;
          (Object(a.useEffect)(
            function () {
              (d.r[ue].includes(K) || G(d.r[ue][0]), Z(z[pe][0]));
            },
            [V],
          ),
            Object(a.useEffect)(
              function () {
                (Y(L), te(new I(N.getScaleRatioAsArray())));
                var e = p.a.getScalePrecision(N);
                if (e) {
                  var n = Object(d.j)(e);
                  W(n);
                  var t = d.r[me(n)].find(function (n) {
                    return n[1] === e;
                  });
                  (G(t),
                    setTimeout(function () {
                      ie(!1);
                    }));
                }
              },
              [N],
            ),
            Object(k.a)(
              function () {
                if ($ === L) te(X[1]);
                else {
                  var e = d.s[X[0]];
                  e && e !== K && G(e);
                }
              },
              [$],
            ),
            Object(k.a)(
              function () {
                "toolbarGroup-Measure" === M && ce();
              },
              [M],
            ),
            Object(a.useEffect)(
              function () {
                var e = d.s[X[0]];
                e && $ === T && G(e);
              },
              [X],
            ),
            Object(a.useEffect)(
              function () {
                !y &&
                  H &&
                  (te(new I(H)),
                  f(m.a.updateCalibrationInfo({ isCalibration: !1 })),
                  W(F));
              },
              [y],
            ),
            Object(a.useEffect)(
              function () {
                ie(!0);
              },
              [K, ne, X, $],
            ),
            Object(a.useEffect)(
              function () {
                v && R && !H && (Y(L), te(d.l), W(!1), G(d.r[d.a.DECIMAL][0]));
              },
              [v, R],
            ));
          var ce = function () {
              f(m.a.closeElement(A.a.SCALE_MODAL));
            },
            le = function () {
              var e = function (e, n) {
                var t = e,
                  a = K[1];
                return (
                  V
                    ? ("ft-in" === n && (a /= 12), (t = Math.round(t / a) * a))
                    : "ft-in" !== n &&
                      (t = t.toFixed((1 / a).toString().length - 1)),
                  1 * t
                );
              };
              if (de) {
                var n = ne.getScaleRatioAsArray();
                return (
                  (n[0][0] = e(n[0][0], n[0][1])),
                  (n[1][0] = e(n[1][0], n[1][1])),
                  n
                );
              }
              return X[1].toString();
            },
            se = s()("Modal", "ScaleModal", { open: !y, closed: y }),
            de = $ === L,
            pe = V ? d.b.IMPERIAL : d.b.METRIC,
            me = function (e) {
              return e ? d.a.FRACTIONAL : d.a.DECIMAL;
            },
            ue = me(V),
            be = !de || ne.isValid(),
            fe =
              de &&
              !(
                d.e.includes(
                  null === (n = ne.pageScale) || void 0 === n ? void 0 : n.unit,
                ) &&
                d.e.includes(
                  null === (t = ne.worldScale) || void 0 === t
                    ? void 0
                    : t.unit,
                )
              );
          return (
            !x &&
            o.a.createElement(
              "div",
              { className: se, "data-element": A.a.SCALE_MODAL },
              o.a.createElement(
                O.a,
                {
                  title: "option.measurementOption.scale",
                  isOpen: v,
                  onCloseClick: ce,
                  closeHandler: ce,
                  swipeToClose: !0,
                },
                o.a.createElement(
                  "div",
                  { className: "content-container" },
                  o.a.createElement(
                    "div",
                    { className: "scaleSetting" },
                    o.a.createElement(
                      "div",
                      { className: "custom-option-wrapper" },
                      o.a.createElement(
                        "div",
                        { className: "custom-scale-option" },
                        o.a.createElement(c.a, {
                          "data-element": "customScaleOption",
                          radio: !0,
                          name: "setting",
                          onChange: function () {
                            return Y(L);
                          },
                          checked: de,
                          label: "".concat(
                            S("option.measurement.scaleModal.custom"),
                            ":",
                          ),
                          center: !0,
                        }),
                      ),
                      de &&
                        o.a.createElement(
                          "button",
                          {
                            "data-element": "calibrate",
                            className: "calibrate-btn",
                            onClick: function () {
                              var e;
                              p.a.setToolMode(
                                "AnnotationCreateCalibrationMeasurement",
                              );
                              var n = de
                                ? (null === (e = ne.worldScale) || void 0 === e
                                    ? void 0
                                    : e.unit) || ""
                                : X[1].worldScale.unit;
                              (f(
                                m.a.updateCalibrationInfo({
                                  isCalibration: !0,
                                  previousToolName: D,
                                  defaultUnit: n,
                                }),
                              ),
                                f(m.a.setIsElementHidden(A.a.SCALE_MODAL, !0)));
                            },
                          },
                          S("option.measurement.scaleModal.calibrate"),
                        ),
                    ),
                    de
                      ? o.a.createElement(E, {
                          scale: ne.getScaleRatioAsArray(),
                          onScaleChange: te,
                          precision: K[1],
                        })
                      : null,
                    o.a.createElement(
                      "div",
                      { className: "custom-scale-option" },
                      o.a.createElement(c.a, {
                        "data-element": "presetScaleOption",
                        radio: !0,
                        onChange: function () {
                          return Y(T);
                        },
                        name: "setting",
                        checked: !de,
                        label: "".concat(
                          S("option.measurement.scaleModal.preset"),
                          ":",
                        ),
                        center: !0,
                      }),
                    ),
                    !de &&
                      o.a.createElement(
                        "div",
                        { className: "scaleModal__preset-container" },
                        o.a.createElement(
                          "div",
                          { className: "selector" },
                          o.a.createElement(g.a, {
                            id: "preset-scale-dropdown",
                            dataElement: "presetScales",
                            items: z[pe].map(function (e) {
                              return e[0];
                            }),
                            currentSelectionKey: X[0],
                            onClickItem: function (e, n) {
                              return Z(z[pe][n]);
                            },
                          }),
                        ),
                      ),
                    de
                      ? null
                      : o.a.createElement("div", { className: "block" }),
                  ),
                  o.a.createElement(
                    "div",
                    { className: "precision-container" },
                    o.a.createElement(
                      "div",
                      { className: "precision-selector" },
                      o.a.createElement(
                        "div",
                        {
                          className: "precision-title",
                          id: "scale-precision-dropdown-label",
                        },
                        S("option.shared.precision"),
                        ":",
                      ),
                      o.a.createElement(
                        "div",
                        { className: "selector" },
                        o.a.createElement(g.a, {
                          id: "scale-precision-dropdown",
                          labelledById: "scale-precision-dropdown-label",
                          dataElement: "scalePrecisions",
                          items: d.r[ue].map(function (e) {
                            return e[0];
                          }),
                          currentSelectionKey: K[0],
                          onClickItem: function (e, n) {
                            return G(d.r[ue][n]);
                          },
                          ariaLabel: S("option.shared.precision"),
                        }),
                      ),
                    ),
                    o.a.createElement(
                      w.a,
                      {
                        content: S(
                          "option.measurement.scaleModal.fractionUnitsTooltip",
                        ),
                      },
                      o.a.createElement(
                        "div",
                        { className: "fractional-units-container" },
                        o.a.createElement(c.a, {
                          isSwitch: !0,
                          leftLabel: !0,
                          id: "scale-modal-fractional-units",
                          label: S(
                            "option.measurement.scaleModal.fractionalUnits",
                          ),
                          checked: V,
                          onChange: function () {
                            W(function (e) {
                              return !e;
                            });
                          },
                          disabled: fe,
                        }),
                      ),
                    ),
                  ),
                ),
                o.a.createElement(
                  "div",
                  { className: "footer" },
                  o.a.createElement(
                    j.a,
                    {
                      type: "button",
                      onClick: function () {
                        var e, n;
                        ((e = [N]),
                          (n = new I(le(), K[1])),
                          p.a.replaceScales(e, n),
                          ce());
                      },
                      className: "scale-update",
                      dataElement: "updateScale",
                      disabled: R || !be || !oe,
                    },
                    S("action.update"),
                  ),
                  o.a.createElement(
                    "button",
                    {
                      onClick: function () {
                        var e, n;
                        ((e = new I(le(), K[1])),
                          (n = [].concat(_(l), [b])),
                          p.a.createAndApplyScale(e, n),
                          ce());
                      },
                      className: "scale-create",
                      "data-element": "createScale",
                      disabled: !be || (!P && re) || (!R && !oe),
                    },
                    S("action.create"),
                  ),
                ),
              ),
            )
          );
        };
      n.default = R;
    },
  },
]);
//# sourceMappingURL=chunk.77.js.map
