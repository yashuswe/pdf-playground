(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    1978: function (n, t, o) {
      var e = o(35),
        a = o(1979);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[n.i, a, ""]]);
      var i = {
        insert: function (n) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(n);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function n(t, o = document) {
                const e = [];
                return (
                  o.querySelectorAll(t).forEach((n) => e.push(n)),
                  o.querySelectorAll("*").forEach((o) => {
                    o.shadowRoot && e.push(...n(t, o.shadowRoot));
                  }),
                  e
                );
              })("apryse-webviewer")));
          const o = [];
          for (let e = 0; e < t.length; e++) {
            const a = t[e];
            if (0 === e)
              (a.shadowRoot.appendChild(n),
                (n.onload = function () {
                  o.length > 0 &&
                    o.forEach((t) => {
                      t.innerHTML = n.innerHTML;
                    });
                }));
            else {
              const t = n.cloneNode(!0);
              (a.shadowRoot.appendChild(t), o.push(t));
            }
          }
        },
        singleton: !1,
      };
      e(a, i);
      n.exports = a.locals || {};
    },
    1979: function (n, t, o) {
      ((t = n.exports = o(36)(!1)).push([
        n.i,
        ".open.CalibrationModal{visibility:visible}.closed.CalibrationModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CalibrationModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.CalibrationModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.CalibrationModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.CalibrationModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.CalibrationModal .footer .modal-button.cancel:hover,.CalibrationModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.CalibrationModal .footer .modal-button.cancel,.CalibrationModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.CalibrationModal .footer .modal-button.cancel.disabled,.CalibrationModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.CalibrationModal .footer .modal-button.cancel.disabled span,.CalibrationModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.CalibrationModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.CalibrationModal .modal-container .wrapper .modal-content{padding:10px}.CalibrationModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.CalibrationModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.CalibrationModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.CalibrationModal .footer .modal-button.confirm{margin-inline-start:4px}.CalibrationModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .footer .modal-button{padding:23px 8px}}.CalibrationModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .swipe-indicator{width:32px}}.CalibrationModal .container{border-radius:4px;overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .CalibrationModal .container,.CalibrationModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .CalibrationModal .container,.CalibrationModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .container,.CalibrationModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;inset-inline-start:0;inset-block-end:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .container,.CalibrationModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;inset-inline-start:0;inset-block-end:0;padding-top:4px;min-width:100px}}.CalibrationModal .container{display:flex;flex-direction:column;min-width:400px;box-shadow:0 0 3px 0 var(--document-box-shadow);padding:8px;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .container{padding-top:24px;padding-bottom:16px;padding-inline-start:24px;padding-inline-end:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .container{padding-top:24px;padding-bottom:16px;padding-inline-start:24px;padding-inline-end:24px}}.CalibrationModal .container .calibration__header{font-size:16px;margin-top:8px;margin-bottom:8px}.CalibrationModal .container .calibration__body{padding-top:8px}.CalibrationModal .container .calibration__body .calibration__input{margin-top:8px;display:flex;flex-direction:row;justify-content:space-between}.CalibrationModal .container .calibration__body input{width:100%;height:30px;font-size:13px;padding-inline-start:8px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding-bottom:6px;padding-inline-end:42px;padding-top:4px;margin-inline-end:8px}.CalibrationModal .container .calibration__body input:focus{outline:none;border:1px solid var(--focus-border)}.CalibrationModal .container .calibration__body input::-moz-placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body input::placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body .error{border:1px solid var(--error-border-color)}.CalibrationModal .container .calibration__body .unitToInput{height:29px;width:45px;border-radius:5px;border:1px solid var(--border);font-size:13px}.CalibrationModal .container .calibration__body .unitToInput:focus{outline:none;border:1px solid var(--focus-border)}.CalibrationModal .container .calibration__body .unitToInput::-moz-placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body .unitToInput::placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body .errorMeasurement{font-size:13px;margin-top:8px;margin-bottom:8px;color:var(--error-text-color);max-width:400px}.CalibrationModal .container .calibration__footer{display:flex;justify-content:flex-end;margin-top:8px}.CalibrationModal .container .calibration__footer .Button{display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);font-weight:600;padding:6px 18px;margin-top:8px;margin-inline-start:5px;width:auto;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;height:30px;cursor:pointer}.CalibrationModal .container .calibration__footer .Button:hover{background:var(--primary-button-hover)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2120: function (n, t, o) {
      "use strict";
      o.r(t);
      (o(9),
        o(10),
        o(14),
        o(21),
        o(20),
        o(12),
        o(44),
        o(22),
        o(18),
        o(16),
        o(28),
        o(1976),
        o(265),
        o(8),
        o(133),
        o(17),
        o(19),
        o(11),
        o(153),
        o(13));
      var e = o(0),
        a = o.n(e),
        i = o(15),
        r = o.n(i),
        l = o(6),
        d = o(305),
        p = o(41),
        c = o(1),
        s = o(53),
        b = o(124);
      function u(n, t) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, t) {
            var o =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != o) {
              var e,
                a,
                i,
                r,
                l = [],
                d = !0,
                p = !1;
              try {
                if (((i = (o = o.call(n)).next), 0 === t)) {
                  if (Object(o) !== o) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (e = i.call(o)).done) &&
                    (l.push(e.value), l.length !== t);
                    d = !0
                  );
              } catch (n) {
                ((p = !0), (a = n));
              } finally {
                try {
                  if (
                    !d &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (p) throw a;
                }
              }
              return l;
            }
          })(n, t) ||
          (function (n, t) {
            if (n) {
              if ("string" == typeof n) return m(n, t);
              var o = {}.toString.call(n).slice(8, -1);
              return (
                "Object" === o && n.constructor && (o = n.constructor.name),
                "Map" === o || "Set" === o
                  ? Array.from(n)
                  : "Arguments" === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? m(n, t)
                    : void 0
              );
            }
          })(n, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function m(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var o = 0, e = Array(t); o < t; o++) e[o] = n[o];
        return e;
      }
      var f = function (n) {
          var t = u(n.split("/"), 2),
            o = t[0],
            e = t[1];
          return Number(o) / Number(e);
        },
        x = o(3),
        h = o(4),
        y = o(150),
        w = o(5);
      o(1978);
      function v(n, t) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, t) {
            var o =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != o) {
              var e,
                a,
                i,
                r,
                l = [],
                d = !0,
                p = !1;
              try {
                if (((i = (o = o.call(n)).next), 0 === t)) {
                  if (Object(o) !== o) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (e = i.call(o)).done) &&
                    (l.push(e.value), l.length !== t);
                    d = !0
                  );
              } catch (n) {
                ((p = !0), (a = n));
              } finally {
                try {
                  if (
                    !d &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (p) throw a;
                }
              }
              return l;
            }
          })(n, t) ||
          (function (n, t) {
            if (n) {
              if ("string" == typeof n) return g(n, t);
              var o = {}.toString.call(n).slice(8, -1);
              return (
                "Object" === o && n.constructor && (o = n.constructor.name),
                "Map" === o || "Set" === o
                  ? Array.from(n)
                  : "Arguments" === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? g(n, t)
                    : void 0
              );
            }
          })(n, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function g(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var o = 0, e = Array(t); o < t; o++) e[o] = n[o];
        return e;
      }
      var M = function (n) {
          var t = n.Measure.axis[0].factor;
          switch (n.Scale[1][1]) {
            case "ft-in":
              return (n.getLineLength() * t) / 12;
            case "in":
            default:
              return n.getLineLength() * t;
          }
        },
        C = /^\d*(\.\d*)?$/,
        A = /^\d*(\s\d\/\d*)$/,
        _ = /^(\d\/\d*)*$/,
        E = function () {
          var n = v(
              Object(l.e)(function (n) {
                return [
                  h.a.isElementOpen(n, w.a.CALIBRATION_MODAL),
                  h.a.isElementDisabled(n, w.a.CALIBRATION_MODAL),
                  h.a.getMeasurementUnits(n),
                ];
              }, l.c),
              3,
            ),
            t = n[0],
            o = n[1],
            i = n[2],
            u = Object(l.d)(),
            m = v(Object(e.useState)(null), 2),
            g = m[0],
            E = m[1],
            k = v(Object(e.useState)(""), 2),
            S = k[0],
            O = k[1],
            j = v(Object(e.useState)(0), 2),
            I = j[0],
            N = j[1],
            L = v(Object(e.useState)(""), 2),
            T = L[0],
            D = L[1],
            R = v(Object(e.useState)(!1), 2),
            z = R[0],
            F = R[1],
            B = v(Object(d.a)(), 1)[0],
            H = Object(e.useRef)(null);
          (Object(e.useEffect)(
            function () {
              var n;
              (t &&
                (null == H ||
                  null === (n = H.current) ||
                  void 0 === n ||
                  n.focus()),
                $(c.a.getSelectedAnnotations()));
            },
            [t],
          ),
            Object(e.useEffect)(function () {
              var n = function (n, t) {
                "selected" === t
                  ? $(n)
                  : "deselected" === t && (E(null), O(""), D(""), N(0));
              };
              return (
                c.a.addEventListener("annotationSelected", n),
                function () {
                  return c.a.removeEventListener("annotationSelected", n);
                }
              );
            }, []),
            Object(e.useEffect)(
              function () {
                var n = function (n, t) {
                  "modify" === t &&
                    1 === n.length &&
                    n[0] === g &&
                    (O(M(g).toFixed(2)), D(g.Scale[1][1]));
                };
                return (
                  c.a.addEventListener("annotationChanged", n),
                  function () {
                    return c.a.removeEventListener("annotationChanged", n);
                  }
                );
              },
              [g],
            ));
          var $ = function (n) {
              if (
                1 === (null == n ? void 0 : n.length) &&
                "distanceMeasurement" === Object(s.g)(n[0])
              ) {
                var t = n[0];
                E(t);
                var o = M(t).toFixed(2);
                (O(o), D(t.Scale[1][1]), N(parseFloat(o)));
              }
            },
            U = function (n) {
              return ((g.Scale = n), W());
            },
            W = function () {
              var n = M(g),
                t = I / n,
                o = g.Scale;
              return [
                [o[0][0], o[0][1]],
                [o[1][0] * t, T],
              ];
            },
            q = function () {
              u(x.a.closeElements([w.a.CALIBRATION_MODAL]));
            };
          return o || !g
            ? null
            : a.a.createElement(
                y.a,
                {
                  onSwipedUp: q,
                  onSwipedDown: q,
                  preventDefaultTouchmoveEvent: !0,
                },
                a.a.createElement(
                  "div",
                  {
                    className: r()({
                      Modal: !0,
                      CalibrationModal: !0,
                      open: t,
                      closed: !t,
                    }),
                    onMouseDown: q,
                  },
                  " ",
                  a.a.createElement(
                    "div",
                    {
                      className: "container",
                      onMouseDown: function (n) {
                        return n.stopPropagation();
                      },
                    },
                    a.a.createElement("div", { className: "swipe-indicator" }),
                    a.a.createElement(
                      "div",
                      { className: "calibration__header" },
                      B("component.calibration"),
                    ),
                    a.a.createElement(
                      "div",
                      { className: "calibration__body" },
                      a.a.createElement(
                        "div",
                        null,
                        B("message.enterMeasurement"),
                      ),
                      a.a.createElement(
                        "div",
                        { className: "calibration__input" },
                        a.a.createElement("input", {
                          className: z ? "error" : "",
                          ref: H,
                          type: "text",
                          value: S,
                          onChange: function (n) {
                            (F(!1), O(n.target.value));
                          },
                          onBlur: function (n) {
                            var t = n.target.value.trim();
                            if (("" === t && F(!0), C.test(t)))
                              0 !== parseFloat(t)
                                ? (N(parseFloat(t)), O(t))
                                : F(!0);
                            else if (A.test(t)) {
                              var o = v(t.split(" "), 2),
                                e = o[0],
                                a = o[1];
                              if (Number.isFinite(f(a))) {
                                var i = Number(e) + f(a);
                                (N(parseFloat(i)), O(i));
                              } else F(!0);
                            } else if (_.test(t))
                              if (Number.isFinite(f(t))) {
                                var r = f(t);
                                (N(parseFloat(r)), O(r));
                              } else F(!0);
                            else F(!0);
                          },
                        }),
                        a.a.createElement(
                          "select",
                          {
                            className: "unitToInput",
                            value: T,
                            onChange: function (n) {
                              D(n.target.value);
                            },
                          },
                          i.to.map(function (n) {
                            return a.a.createElement(
                              "option",
                              { key: n, value: n },
                              n,
                            );
                          }),
                        ),
                      ),
                      z
                        ? a.a.createElement(
                            "div",
                            { className: "errorMeasurement" },
                            B("message.errorEnterMeasurement"),
                          )
                        : null,
                    ),
                    a.a.createElement(
                      "div",
                      { className: "calibration__footer" },
                      a.a.createElement(p.a, {
                        dataElement: "passwordSubmitButton",
                        label: B("action.apply"),
                        onClick: function () {
                          var n = W(),
                            t = U(n);
                          (c.a.setAnnotationStyles(g, { Scale: t }),
                            Object(b.a)(
                              "AnnotationCreateDistanceMeasurement",
                              "Scale",
                              t,
                            ),
                            u(x.a.closeElements([w.a.CALIBRATION_MODAL])));
                        },
                        disabled: z,
                      }),
                    ),
                  ),
                ),
              );
        };
      t.default = E;
    },
  },
]);
//# sourceMappingURL=chunk.58.js.map
