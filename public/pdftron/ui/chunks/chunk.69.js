(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
  {
    1910: function (e, n, t) {
      var a = t(35),
        i = t(1911);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var o = {
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
            const i = n[a];
            if (0 === a)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (i.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      a(i, o);
      e.exports = i.locals || {};
    },
    1911: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ".open.MeasurementOverlay{visibility:visible}.closed.MeasurementOverlay{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.MeasurementOverlay{position:absolute;z-index:95;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);flex-direction:column;inset-block-end:60px;inset-inline-end:14px;font-size:16px;min-width:215px;padding:6px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .MeasurementOverlay{inset-block-end:8px;inset-inline-end:8px;padding:8px;font-size:14px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .MeasurementOverlay{inset-block-end:8px;inset-inline-end:8px;padding:8px;font-size:14px}}.MeasurementOverlay>*{margin:6px}.MeasurementOverlay.transparent{opacity:.5;pointer-events:none}.measurement__value{display:flex;flex-direction:row}.measurement__value .distance-show{margin-inline-start:3px;cursor:pointer}.measurement__title{display:flex;justify-content:center;align-items:center}.measurement__title .measurement__icon{margin-inline-end:5px}.measurement__deltas{display:flex;justify-content:space-between}.lineMeasurementInput{width:50px;margin-inline-start:4px}.length_input{margin-bottom:3px}.angle_input{margin-top:3px}.angle_input .lineMeasurementInput{width:65px}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2104: function (e, n, t) {
      "use strict";
      t.r(n);
      (t(9),
        t(10),
        t(14),
        t(34),
        t(21),
        t(50),
        t(20),
        t(12),
        t(22),
        t(99),
        t(18),
        t(26),
        t(16),
        t(59),
        t(8),
        t(17),
        t(19),
        t(11),
        t(13));
      var a = t(0),
        i = t.n(a),
        o = t(15),
        r = t.n(o),
        l = t(185),
        s = t.n(l),
        c = t(2),
        u = t.n(c),
        p = t(1),
        d = t(53),
        m = t(3),
        f = t(4),
        h = t(6),
        v = (t(38), t(265), t(1556)),
        y = t(51);
      function b(e) {
        return (function (n) {
          switch (Object(d.g)(e.annotation)) {
            case "ellipse":
              return i.a.createElement(x, e);
            default:
              console.error(
                "Custom overlay for annotation type: ".concat(
                  n,
                  " not supported",
                ),
              );
          }
        })(e.type);
      }
      function x(e) {
        var n,
          t = Object(d.g)(e.annotation),
          a = Object(d.e)(t).icon,
          o = e.t,
          r = p.a.getTool("AnnotationCreateDistanceMeasurement"),
          l = r.defaults.Precision,
          s = r.defaults.Scale,
          c = r.Measure,
          u = s[1][1];
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            { className: "measurement__title" },
            a &&
              i.a.createElement(y.a, {
                className: "measurement__icon",
                glyph: a,
              }),
            e.title,
          ),
          i.a.createElement(
            "div",
            { className: "measurement__scale" },
            o("option.measurementOverlay.scale"),
            ": ",
            ""
              .concat(s[0][0], " ")
              .concat(s[0][1], " = ")
              .concat(s[1][0], " ")
              .concat(s[1][1]),
          ),
          i.a.createElement(
            "div",
            { className: "measurement__precision" },
            o("option.shared.precision"),
            ": ",
            l,
          ),
          i.a.createElement(
            "div",
            { className: "measurement__value" },
            e.label,
            ": ",
            i.a.createElement("input", {
              className: "lineMeasurementInput",
              type: "number",
              min: "0",
              value:
                ((n = c.axis[0].factor),
                (e.value(e.annotation).toFixed(2) * n).toFixed(2)),
              onChange: function (n) {
                return e.onChange(n, e.annotation);
              },
            }),
            " ",
            u,
          ),
        );
      }
      ((b.propTypes = {
        annotation: u.a.object.isRequired,
        value: u.a.func.isRequired,
        onChange: u.a.func.isRequired,
        label: u.a.string.isRequired,
        t: u.a.func.isRequired,
        title: u.a.string.isRequired,
      }),
        (x.propTypes = b.propTypes));
      var g = Object(v.a)()(b),
        w = t(305);
      function E(e) {
        var n = Object(d.g)(e.annotation),
          t = Object(d.e)(n).icon,
          a = Object(w.a)().t,
          o = p.a.getAnnotationsList().filter(function (e) {
            return e.getCustomData("trn-is-count");
          }).length;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            { className: "measurement__title" },
            t &&
              i.a.createElement(y.a, {
                className: "measurement__icon",
                glyph: t,
              }),
            a("option.measurementOverlay.countMeasurement"),
          ),
          i.a.createElement(
            "div",
            { className: "measurement__count" },
            a("option.measurementOverlay.count"),
            ": ",
            o,
          ),
        );
      }
      E.propTypes = { annotation: u.a.object.isRequired };
      var O = E,
        _ = t(5);
      t(1910);
      function M() {
        return (M = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var a in t)
                  ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      function A(e, n) {
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
                i,
                o,
                r,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((o = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (a = o.call(t)).done) &&
                    (l.push(a.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((c = !0), (i = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return j(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? j(e, n)
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
      function j(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      var R = { annotation: u.a.object },
        T = function (e) {
          var n,
            t = e.annotation,
            o = Object(h.e)(function (e) {
              return f.a.isElementDisabled(e, _.a.MEASUREMENT_OVERLAY);
            }),
            l =
              ((n = A(Object(a.useState)(0), 2)[1]),
              function () {
                return n(function (e) {
                  return e + 1;
                });
              }),
            c = Object(h.d)(),
            u = A(Object(a.useState)({ x: 0, y: 0 }), 2),
            v = u[0],
            y = u[1],
            b = A(Object(a.useState)(!1), 2),
            x = b[0],
            w = b[1],
            E = A(Object(a.useState)(!1), 2),
            j = E[0],
            R = E[1],
            T = Object(h.e)(function (e) {
              return f.a.isElementOpen(e, _.a.MEASUREMENT_OVERLAY);
            }),
            N = Object(h.e)(function (e) {
              return f.a.getActiveToolName(e);
            }),
            S = Object(h.e)(function (e) {
              return f.a.getCustomMeasurementOverlay(e);
            }),
            C = Object(a.useRef)(),
            k = Object(d.g)(t),
            L = function (e) {
              return (
                !(function (e) {
                  return ["countMeasurement"].includes(Object(d.g)(e));
                })(e) &&
                S.some(function (n) {
                  return n.validate(e);
                })
              );
            },
            q = function (e) {
              var n = p.a.getTool(N);
              if (t) {
                var a,
                  i = (function (e, n) {
                    if (null === n) return !1;
                    var t,
                      a,
                      i = n.getBoundingClientRect();
                    return (
                      e.touches && e instanceof TouchEvent
                        ? ((t = e.touches[0].clientX),
                          (a = e.touches[0].clientY))
                        : ((t = e.clientX), (a = e.clientY)),
                      t >= i.left && t <= i.right && a >= i.top && a <= i.bottom
                    );
                  })(e, C.current);
                if (j) {
                  var o,
                    r,
                    s =
                      null === (o = (r = p.a.getToolMode()).getDrawMode) ||
                      void 0 === o
                        ? void 0
                        : o.call(r);
                  a = i && "twoClicks" !== s;
                } else {
                  var u = p.a.getAnnotationByMouseEvent(e);
                  a = i && u === t;
                }
                (w(a), l());
              } else
                L(n.annotation) &&
                  (c(m.a.openElement(_.a.MEASUREMENT_OVERLAY)), R(!0));
            },
            D = function (e, n) {
              ("add" === n &&
                1 === e.length &&
                e[0] === t &&
                c(m.a.closeElement(_.a.MEASUREMENT_OVERLAY)),
                "modify" === n && 1 === e.length && e[0] === t && l());
            };
          return (
            Object(a.useEffect)(function () {
              return (
                p.a.addEventListener("mouseMove", q),
                p.a.addEventListener("annotationChanged", D),
                function () {
                  (p.a.removeEventListener("mouseMove", q),
                    p.a.removeEventListener("annotationChanged", D));
                }
              );
            }, []),
            o || !t
              ? null
              : i.a.createElement(
                  s.a,
                  {
                    cancel: "input",
                    position: v,
                    onDrag: function (e, n) {
                      var t = n.x,
                        a = n.y;
                      return y({ x: t, y: a });
                    },
                    onStop: function (e, n) {
                      var t = n.x,
                        a = n.y;
                      return y({ x: t, y: a });
                    },
                  },
                  i.a.createElement(
                    "div",
                    {
                      className: r()({
                        Overlay: !0,
                        MeasurementOverlay: !0,
                        open: T,
                        closed: !T,
                        transparent: x,
                      }),
                      ref: C,
                      "data-element": _.a.MEASUREMENT_OVERLAY,
                    },
                    (function (e, n) {
                      return L(e)
                        ? i.a.createElement(
                            g,
                            M(
                              { annotation: e },
                              S.filter(function (n) {
                                return n.validate(e);
                              })[0],
                            ),
                          )
                        : "countMeasurement" === n
                          ? i.a.createElement(O, { annotation: e })
                          : void 0;
                    })(t, k),
                  ),
                )
          );
        };
      T.propTypes = R;
      var N = T;
      n.default = N;
    },
  },
]);
//# sourceMappingURL=chunk.69.js.map
