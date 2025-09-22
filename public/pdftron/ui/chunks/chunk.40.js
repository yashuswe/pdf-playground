(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    1639: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return o;
      });
      (t(50), t(62));
      var o = function (n, e) {
        var t = n
          .getDisplayModeObject()
          .getVisiblePages()
          .includes(e.PageNumber);
        return (
          n.isContinuousDisplayMode() || (!n.isContinuousDisplayMode() && t)
        );
      };
    },
    1667: function (n, e, t) {
      "use strict";
      (t(8), t(56));
      var o = t(1),
        i = t(33),
        a = t(3),
        r = t(66),
        l = t(186);
      function c() {}
      e.a = function (n) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
          t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return function (i) {
          return o.a.isWebViewerServerDocument() ? u(n, i, t) : s(n, e, i, t);
        };
      };
      var u = function (n, e, t) {
          return o.a.applyRedactions(n, t).then(function (n) {
            if (n && n.url)
              return Object(l.a)(e, {
                filename: "redacted.pdf",
                includeAnnotations: !0,
                externalURL: n.url,
              });
            console.warn("WebViewer Server did not return a valid result");
          });
        },
        s = function (n, e, t, l) {
          var c = {
            message: i.a.t("warning.redaction.applyMessage"),
            title: i.a.t("warning.redaction.applyTile"),
            confirmBtnText: i.a.t("action.apply"),
            onConfirm: function () {
              return (
                o.a
                  .applyRedactions(n, l)
                  .then(function () {
                    e();
                  })
                  .catch(function (n) {
                    return Object(r.b)(n);
                  }),
                Promise.resolve()
              );
            },
          };
          return t(a.a.showWarningMessage(c));
        };
    },
    1668: function (n, e, t) {
      var o = t(35),
        i = t(1669);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[n.i, i, ""]]);
      var a = {
        insert: function (n) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(n);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function n(e, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(e).forEach((n) => o.push(n)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...n(e, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < e.length; o++) {
            const i = e[o];
            if (0 === o)
              (i.shadowRoot.appendChild(n),
                (n.onload = function () {
                  t.length > 0 &&
                    t.forEach((e) => {
                      e.innerHTML = n.innerHTML;
                    });
                }));
            else {
              const e = n.cloneNode(!0);
              (i.shadowRoot.appendChild(e), t.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      n.exports = i.locals || {};
    },
    1669: function (n, e, t) {
      ((e = n.exports = t(36)(!1)).push([
        n.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationStylePopup{width:100%;margin:0;position:relative;max-width:none;border-radius:4px 4px 0 0;border:0;padding-bottom:24px;box-shadow:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationStylePopup{width:100%;margin:0;position:relative;max-width:none;border-radius:4px 4px 0 0;border:0;padding-bottom:24px;box-shadow:none}}.AnnotationStylePopup .back-to-menu-container{margin-top:var(--padding-medium);margin-inline-end:var(--padding-medium);margin-inline-start:var(--padding-medium);padding-bottom:var(--padding-small);border-bottom:1px solid var(--border)}.AnnotationStylePopup .Button.back-to-menu-button{margin:0;width:100%;height:32px;border-radius:0;justify-content:flex-start}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationStylePopup .Button.back-to-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationStylePopup .Button.back-to-menu-button{width:100%;height:32px}}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1712: function (n, e, t) {
      "use strict";
      (t(9),
        t(10),
        t(14),
        t(30),
        t(27),
        t(21),
        t(20),
        t(12),
        t(22),
        t(31),
        t(18),
        t(16),
        t(28),
        t(24),
        t(8),
        t(17),
        t(19),
        t(11),
        t(29),
        t(13));
      var o = t(0),
        i = t.n(o),
        a = t(2),
        r = t.n(a),
        l = t(6),
        c = t(206),
        u = t(305),
        s = t(317),
        p = t(82),
        d = t(1),
        m = t(1610),
        f = t(124),
        b = t(45),
        h = t(313),
        y = t(3),
        w = t(4),
        g = t(5),
        v = t(478);
      t(1668);
      function A(n) {
        return (A =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function O(n, e, t) {
        return (
          (e = (function (n) {
            var e = (function (n, e) {
              if ("object" != A(n) || !n) return n;
              var t = n[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(n, e || "default");
                if ("object" != A(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(n);
            })(n, "string");
            return "symbol" == A(e) ? e : e + "";
          })(e)) in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function E(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var o,
                i,
                a,
                r,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (t = t.call(n)).next), 0 === e)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (n) {
                ((u = !0), (i = n));
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return P(n, e);
              var t = {}.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(n)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? P(n, e)
                    : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function P(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, o = Array(e); t < e; t++) o[t] = n[t];
        return o;
      }
      var S = {
          annotations: r.a.array.isRequired,
          style: r.a.object.isRequired,
          properties: r.a.object.isRequired,
          isRedaction: r.a.bool,
          isFreeText: r.a.bool,
          isEllipse: r.a.bool,
          hasBackToMenu: r.a.bool,
          onBackToMenu: r.a.func,
        },
        x = function (n) {
          var e = n.annotations,
            t = n.style,
            a = n.isRedaction,
            r = n.isFreeText,
            A = n.isEllipse,
            P = n.isMeasure,
            S = n.colorMapKey,
            x = n.showLineStyleOptions,
            T = n.properties,
            C = n.hideSnapModeCheckbox,
            N = n.onResize,
            k = n.hasBackToMenu,
            j = n.onBackToMenu,
            _ = E(
              Object(l.e)(function (n) {
                return [
                  w.a.isElementDisabled(n, g.a.ANNOTATION_STYLE_POPUP),
                  w.a.isToolDefaultStyleUpdateFromAnnotationPopupEnabled(n),
                  w.a.getActiveDocumentViewerKey(n),
                ];
              }),
              3,
            ),
            D = _[0],
            F = _[1],
            M = _[2],
            I = Object(l.d)(),
            R = E(Object(u.a)(), 1)[0],
            B = E(Object(o.useState)(T.isAutoSizeFont), 2),
            L = B[0],
            U = B[1],
            z = function (n, t) {
              var o = d.a.getAnnotationManager(M);
              e.forEach(function (e) {
                ((e[n] = t),
                  "StrokeThickness" === n && Object(h.a)(e),
                  o.redrawAnnotation(e),
                  e instanceof window.Core.Annotations.WidgetAnnotation &&
                    e.refresh());
              });
            },
            W = function (n, t) {
              e.forEach(function (e) {
                (d.a.setAnnotationStyles(e, O({}, n, t), M),
                  F && Object(f.a)(e.ToolName, n, t),
                  ("FontSize" !== n && "Font" !== n) || Object(h.a)(e));
              });
            },
            Y = function (n, t) {
              e.forEach(function (e) {
                (d.a.setAnnotationStyles(e, O({}, n, t), M),
                  F && Object(f.a)(e.ToolName, n, t));
              });
            },
            G = function (n, t) {
              e.forEach(function (e) {
                d.a.updateAnnotationRichTextStyle(e, O({}, n, t), M);
              });
            },
            V = function (n, t) {
              (e.forEach(function (e) {
                var o = "";
                if ("start" === n) (e.setStartStyle(t), (o = "StartLineStyle"));
                else if ("end" === n) (e.setEndStyle(t), (o = "EndLineStyle"));
                else if ("middle" === n) {
                  var i = t.split(","),
                    a = i.shift();
                  ((e.Style = a), (e.Dashes = i), (o = "StrokeStyle"));
                }
                (F && Object(f.a)(e.ToolName, o, t),
                  d.a.getAnnotationManager(M).redrawAnnotation(e));
              }),
                d.a
                  .getAnnotationManager(M)
                  .trigger("annotationChanged", [e, "modify", {}]));
            },
            H = function (n) {
              Object(b.k)() &&
                n.target === n.currentTarget &&
                I(y.a.closeElement(g.a.ANNOTATION_POPUP));
            },
            K = Object(m.a)("Popup AnnotationStylePopup", n);
          return D
            ? null
            : i.a.createElement(
                c.a,
                {
                  onResize: function () {
                    N && N();
                  },
                },
                function (n) {
                  var o = n.measureRef;
                  return i.a.createElement(
                    "div",
                    {
                      className: K,
                      "data-element": g.a.ANNOTATION_STYLE_POPUP,
                      onClick: H,
                      ref: o,
                    },
                    k &&
                      i.a.createElement(
                        "div",
                        {
                          className: "back-to-menu-container",
                          "data-element":
                            g.a.ANNOTATION_STYLE_POPUP_BACK_BUTTON_CONTAINER,
                        },
                        i.a.createElement(p.a, {
                          className: "back-to-menu-button",
                          dataElement: g.a.ANNOTATION_STYLE_POPUP_BACK_BUTTON,
                          label: R("action.backToMenu"),
                          img: "icon-chevron-left",
                          onClick: j,
                        }),
                      ),
                    i.a.createElement(s.a, {
                      hideSnapModeCheckbox: C,
                      colorMapKey: S,
                      style: t,
                      isFreeText: r,
                      isFreeTextAutoSize: L,
                      onFreeTextSizeToggle: function () {
                        return Object(v.a)(e[0], U, L);
                      },
                      isEllipse: A,
                      isMeasure: P,
                      onStyleChange: Y,
                      onSliderChange: z,
                      onPropertyChange: W,
                      disableSeparator: !0,
                      properties: T,
                      onRichTextStyleChange: G,
                      isRedaction: a,
                      showLineStyleOptions: x,
                      onLineStyleChange: V,
                    }),
                  );
                },
              );
        };
      x.propTypes = S;
      var T = x;
      e.a = T;
    },
    1862: function (n, e, t) {
      var o = t(35),
        i = t(1922);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[n.i, i, ""]]);
      var a = {
        insert: function (n) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(n);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function n(e, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(e).forEach((n) => o.push(n)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...n(e, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < e.length; o++) {
            const i = e[o];
            if (0 === o)
              (i.shadowRoot.appendChild(n),
                (n.onload = function () {
                  t.length > 0 &&
                    t.forEach((e) => {
                      e.innerHTML = n.innerHTML;
                    });
                }));
            else {
              const e = n.cloneNode(!0);
              (i.shadowRoot.appendChild(e), t.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      n.exports = i.locals || {};
    },
    1920: function (n, e, t) {
      var o = t(35),
        i = t(1921);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[n.i, i, ""]]);
      var a = {
        insert: function (n) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(n);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function n(e, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(e).forEach((n) => o.push(n)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...n(e, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < e.length; o++) {
            const i = e[o];
            if (0 === o)
              (i.shadowRoot.appendChild(n),
                (n.onload = function () {
                  t.length > 0 &&
                    t.forEach((e) => {
                      e.innerHTML = n.innerHTML;
                    });
                }));
            else {
              const e = n.cloneNode(!0);
              (i.shadowRoot.appendChild(e), t.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      n.exports = i.locals || {};
    },
    1921: function (n, e, t) {
      ((e = n.exports = t(36)(!1)).push([
        n.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.CalibrationPopup{display:flex;flex-direction:column;align-items:flex-start;padding:var(--padding-medium);width:220px;background:var(--gray-0);box-shadow:0 0 3px var(--gray-7);border-radius:4px}.CalibrationPopup .calibration-popup-label{font-weight:700;margin-bottom:var(--padding-medium)}.CalibrationPopup .pop-switch{margin-top:var(--padding-medium)}.CalibrationPopup .pop-switch.ui__choice--disabled .ui__choice__label{color:var(--gray-5)}.CalibrationPopup .input-container{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;grid-gap:var(--padding-small);gap:var(--padding-small);height:32px}.CalibrationPopup .input-container .input-field{width:94px;height:32px}.CalibrationPopup .input-container .input-field.invalid-value{border-color:red}.CalibrationPopup .input-container .input-field:focus{border:1px solid var(--blue-5)}.CalibrationPopup .input-container .input-field .Dropdown__wrapper{width:100%;height:100%}.CalibrationPopup .input-container .input-field .Dropdown__wrapper .Dropdown{height:100%;width:100%!important;text-align:start}.CalibrationPopup .input-container .input-field .Dropdown__wrapper .Dropdown__items{width:100%}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1922: function (n, e, t) {
      ((e = n.exports = t(36)(!1)).push([
        n.i,
        ".open.AnnotationPopup{visibility:visible}.closed.AnnotationPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.AnnotationPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.AnnotationPopup:empty{padding:0}.AnnotationPopup .buttons{display:flex}.AnnotationPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationPopup .Button{width:42px;height:42px}}.AnnotationPopup .Button:hover{background:var(--popup-button-hover)}.AnnotationPopup .Button:hover:disabled{background:none}.AnnotationPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationPopup .Button .Icon{width:24px;height:24px}}.is-vertical.AnnotationPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-inline-start:var(--padding-small);padding-inline-end:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.AnnotationPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.AnnotationPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.AnnotationPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.AnnotationPopup .Button.main-menu-button .Icon{margin-inline-end:10px}.is-vertical.AnnotationPopup .Button.main-menu-button span{white-space:nowrap}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.AnnotationPopup{position:fixed;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background)}.AnnotationPopup.is-horizontal .container{display:inherit}.AnnotationPopup.is-vertical{flex-direction:column;align-items:flex-start}.shortCuts3D{position:relative}.shortCuts3D .closeButton{position:absolute;inset-inline-end:4px;padding:2px;cursor:pointer;width:20px;text-align:center}.shortCuts3D .row{padding:4px 0;margin:8px 26px 8px 16px}.shortCuts3D .row span{background:#e7ebee;padding:4px 8px;border-radius:4px}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2098: function (n, e, t) {
      "use strict";
      t.r(e);
      (t(9),
        t(10),
        t(14),
        t(81),
        t(27),
        t(21),
        t(50),
        t(20),
        t(12),
        t(22),
        t(18),
        t(26),
        t(16),
        t(40),
        t(24),
        t(42),
        t(37),
        t(43),
        t(8),
        t(56),
        t(17),
        t(19),
        t(62),
        t(11),
        t(29),
        t(13));
      var o = t(0),
        i = t.n(o),
        a = t(6),
        r = t(2),
        l = t.n(r),
        c = t(105),
        u = t.n(c),
        s = t(172),
        p = t(1),
        d = t(230),
        m = t(1667),
        f = t(45),
        b = t(305),
        h = t(216),
        y = t(487),
        w = t(39),
        g = t(144),
        v = t(3),
        A = t(4),
        O = t(5),
        E = t(64),
        P = t(23),
        S = t(7),
        x = (t(30), t(38), t(34), t(31), t(28), t(48), t(47), t(49), t(185)),
        T = t.n(x),
        C = t(15),
        N = t.n(C),
        k = t(321),
        j = t(82),
        _ = t(1712);
      function D() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
          e,
          t = "function" == typeof Symbol ? Symbol : {},
          o = t.iterator || "@@iterator",
          i = t.toStringTag || "@@toStringTag";
        function a(t, o, i, a) {
          var c = o && o.prototype instanceof l ? o : l,
            u = Object.create(c.prototype);
          return (
            F(
              u,
              "_invoke",
              (function (t, o, i) {
                var a,
                  l,
                  c,
                  u = 0,
                  s = i || [],
                  p = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: n,
                    a: m,
                    f: m.bind(n, 4),
                    d: function (e, t) {
                      return ((a = e), (l = 0), (c = n), (d.n = t), r);
                    },
                  };
                function m(t, o) {
                  for (
                    l = t, c = o, e = 0;
                    !p && u && !i && e < s.length;
                    e++
                  ) {
                    var i,
                      a = s[e],
                      m = d.p,
                      f = a[2];
                    t > 3
                      ? (i = f === o) &&
                        ((c = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                        (a[4] = a[5] = n))
                      : a[0] <= m &&
                        ((i = t < 2 && m < a[1])
                          ? ((l = 0), (d.v = o), (d.n = a[1]))
                          : m < f &&
                            (i = t < 3 || a[0] > o || o > f) &&
                            ((a[4] = t), (a[5] = o), (d.n = f), (l = 0)));
                  }
                  if (i || t > 1) return r;
                  throw ((p = !0), o);
                }
                return function (i, s, f) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === s && m(s, f), l = s, c = f;
                    (e = l < 2 ? n : c) || !p;

                  ) {
                    a ||
                      (l
                        ? l < 3
                          ? (l > 1 && (d.n = -1), m(l, c))
                          : (d.n = c)
                        : (d.v = c));
                    try {
                      if (((u = 2), a)) {
                        if ((l || (i = "next"), (e = a[i]))) {
                          if (!(e = e.call(a, c)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((c = e.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (e = a.return) && e.call(a),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  i +
                                  "' method",
                              )),
                              (l = 1)));
                        a = n;
                      } else if ((e = (p = d.n < 0) ? c : t.call(o, d)) !== r)
                        break;
                    } catch (e) {
                      ((a = n), (l = 1), (c = e));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: e, done: p };
                };
              })(t, i, a),
              !0,
            ),
            u
          );
        }
        var r = {};
        function l() {}
        function c() {}
        function u() {}
        e = Object.getPrototypeOf;
        var s = [][o]
            ? e(e([][o]()))
            : (F((e = {}), o, function () {
                return this;
              }),
              e),
          p = (u.prototype = l.prototype = Object.create(s));
        function d(n) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(n, u)
              : ((n.__proto__ = u), F(n, i, "GeneratorFunction")),
            (n.prototype = Object.create(p)),
            n
          );
        }
        return (
          (c.prototype = u),
          F(p, "constructor", u),
          F(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          F(u, i, "GeneratorFunction"),
          F(p),
          F(p, i, "Generator"),
          F(p, o, function () {
            return this;
          }),
          F(p, "toString", function () {
            return "[object Generator]";
          }),
          (D = function () {
            return { w: a, m: d };
          })()
        );
      }
      function F(n, e, t, o) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (n) {
          i = 0;
        }
        (F = function (n, e, t, o) {
          if (e)
            i
              ? i(n, e, {
                  value: t,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (n[e] = t);
          else {
            var a = function (e, t) {
              F(n, e, function (n) {
                return this._invoke(e, t, n);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(n, e, t, o);
      }
      function M(n, e, t, o, i, a, r) {
        try {
          var l = n[a](r),
            c = l.value;
        } catch (n) {
          return void t(n);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, i);
      }
      var I = function (n) {
        var e = n.onClick,
          t = n.annotation,
          a = n.onDatePickerShow,
          r = Object(o.useRef)(null),
          l = Object(o.useRef)(null);
        return (
          Object(o.useEffect)(function () {
            var n;
            return (
              (function () {
                var o,
                  i =
                    ((o = D().m(function o() {
                      return D().w(function (o) {
                        for (;;)
                          switch (o.n) {
                            case 0:
                              return (
                                (o.n = 1),
                                window.Core.createDatePicker({
                                  field: r.current,
                                  onClick: e,
                                  container: l.current,
                                  format: t.getDateFormat(),
                                })
                              );
                            case 1:
                              ((n = o.v), a(!0));
                            case 2:
                              return o.a(2);
                          }
                      }, o);
                    })),
                    function () {
                      var n = this,
                        e = arguments;
                      return new Promise(function (t, i) {
                        var a = o.apply(n, e);
                        function r(n) {
                          M(a, t, i, r, l, "next", n);
                        }
                        function l(n) {
                          M(a, t, i, r, l, "throw", n);
                        }
                        r(void 0);
                      });
                    });
                return function () {
                  return i.apply(this, arguments);
                };
              })()(),
              function () {
                (n.destroy(), (n = null), a(!1));
              }
            );
          }, []),
          i.a.createElement(
            "div",
            { "data-element": "datePickerContainer" },
            i.a.createElement("div", { ref: r }),
            i.a.createElement("div", { ref: l }),
          )
        );
      };
      I.propTypes = {
        onClick: l.a.func.isRequired,
        annotation: l.a.object.isRequired,
        onDatePickerShow: l.a.func.isRequired,
      };
      var R = I,
        B = t(1846),
        L = (t(133), t(153), t(1404)),
        U = t(72),
        z = t(116),
        W = t(409);
      t(1920);
      function Y(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var o,
                i,
                a,
                r,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (t = t.call(n)).next), 0 === e)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (n) {
                ((u = !0), (i = n));
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return G(n, e);
              var t = {}.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(n)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? G(n, e)
                    : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function G(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, o = Array(e); t < e; t++) o[t] = n[t];
        return o;
      }
      var V = window.Core.Scale,
        H = function (n) {
          var e = n.Measure.axis[0].factor;
          switch (n.Scale[1][1]) {
            case "ft-in":
              return (n.getLineLength() * e) / 12;
            case "in":
            default:
              return n.getLineLength() * e;
          }
        },
        K = { annotation: l.a.shape({ Scale: l.a.arrayOf(l.a.array) }) },
        q = function (n) {
          var e,
            t,
            r = n.annotation,
            l = Y(Object(b.a)(), 1)[0],
            c = Object(a.d)(),
            u = Y(
              Object(a.e)(function (n) {
                return [A.a.getMeasurementUnits(n), A.a.getCalibrationInfo(n)];
              }, a.c),
              2,
            ),
            s = u[0],
            d = u[1],
            m = d.tempScale,
            f = d.isFractionalUnit,
            h = d.defaultUnit,
            y = Y(Object(o.useState)(""), 2),
            w = y[0],
            g = y[1],
            O = Object(o.useRef)(null),
            E =
              (null === (e = new V(m).worldScale) || void 0 === e
                ? void 0
                : e.unit) || "mm",
            P = f
              ? s.to.filter(function (n) {
                  return W.e.includes(n);
                })
              : s.to,
            S = !W.e.includes(E),
            x = f || "ft-in" === E ? "text" : "number",
            T = N()("input-field", {
              "invalid-value": !(
                m &&
                (null === (t = new V(m).worldScale) || void 0 === t
                  ? void 0
                  : t.value) > 0
              ),
            }),
            C = function (n, e) {
              var t,
                o = H(r),
                i = r.Scale,
                a = o / i[1][0],
                l = [i[0][0] * a, i[0][1]],
                u = "pt" === (t = e) ? "pt" : W.m.includes(t) ? "mm" : "in",
                s = Object(W.c)(l[0], l[1], u);
              c(
                v.a.updateCalibrationInfo({
                  tempScale: ""
                    .concat(s, " ")
                    .concat(u, " = ")
                    .concat(n, " ")
                    .concat(e),
                  isFractionalUnit: f,
                }),
              );
            },
            k = function (n) {
              var e;
              C(
                n,
                null === (e = new V(m).worldScale) || void 0 === e
                  ? void 0
                  : e.unit,
              );
            },
            j = function () {
              var n,
                e,
                t =
                  null === (n = new V(m).worldScale) || void 0 === n
                    ? void 0
                    : n.value;
              ((e =
                f || "ft-in" === E
                  ? V.getFormattedValue(t, E, f ? 1 / 64 : 1e-4, !1, !0)
                  : "".concat(t)),
                g(e || ""));
            },
            _ = Object(o.useRef)(m);
          return (
            Object(o.useEffect)(
              function () {
                _.current = m;
              },
              [m],
            ),
            Object(o.useEffect)(
              function () {
                if (r) {
                  var n = H(r),
                    e = r.Scale[1][1];
                  h ? C(Object(W.c)(n, e, h), h) : C(n, e);
                }
                var t = function (n, e) {
                  if ("modify" === e && 1 === n.length && n[0] === r) {
                    var t,
                      o = H(r),
                      i = r.Scale[1][1],
                      a =
                        null === (t = new V(_.current).worldScale) ||
                        void 0 === t
                          ? void 0
                          : t.unit;
                    a ? C(Object(W.c)(o, i, a), a) : C(o, i);
                  }
                };
                return (
                  p.a.addEventListener("annotationChanged", t),
                  function () {
                    (p.a.removeEventListener("annotationChanged", t),
                      p.a.deleteAnnotations([r]));
                  }
                );
              },
              [r],
            ),
            Object(o.useEffect)(
              function () {
                (null == O ? void 0 : O.current) !== document.activeElement &&
                  j();
              },
              [m, f],
            ),
            i.a.createElement(
              "div",
              {
                className: "CalibrationPopup",
                "data-element": "calibrationPopup",
              },
              i.a.createElement(
                "label",
                {
                  className: "calibration-popup-label",
                  id: "calibration-popup-label",
                  htmlFor: "calibration-popup-value",
                },
                l("option.measurement.scaleModal.units"),
              ),
              i.a.createElement(
                "div",
                { className: "input-container" },
                i.a.createElement("input", {
                  id: "calibration-popup-value",
                  className: T,
                  ref: O,
                  type: x,
                  value: w,
                  min: "0",
                  onChange: function (n) {
                    g(n.target.value);
                    var e = n.target.value.trim();
                    if (f) {
                      if ("in" === E) {
                        if (W.k.test(e)) {
                          var t = Object(W.p)(e);
                          if (t > 0) return void k(t);
                        }
                      } else if ("ft-in" === E && W.g.test(e)) {
                        var o = Object(W.o)(e);
                        if (o > 0) return void k(o);
                      }
                    } else if ("ft-in" === E && W.f.test(e)) {
                      var i = Object(W.n)(e);
                      if (i > 0) return void k(i);
                    } else if (W.d.test(e)) {
                      var a = parseFloat(e) || 0;
                      return void k(a);
                    }
                    k(0);
                  },
                  onBlur: function () {
                    j();
                  },
                  placeholder: f
                    ? W.i[E]
                    : "ft-in" === E
                      ? W.i["ft-in decimal"]
                      : "",
                }),
                i.a.createElement(
                  z.a,
                  { content: "option.measurement.scaleModal.displayUnits" },
                  i.a.createElement(
                    "div",
                    { className: "input-field" },
                    i.a.createElement(U.a, {
                      id: "calibration-popup-units",
                      dataElement: "calibrationUnits",
                      items: P,
                      currentSelectionKey: E,
                      onClickItem: function (n) {
                        var e;
                        C(
                          null === (e = new V(m).worldScale) || void 0 === e
                            ? void 0
                            : e.value,
                          n,
                        );
                      },
                      labelledById: "calibration-popup-label",
                    }),
                  ),
                ),
              ),
              i.a.createElement(
                z.a,
                {
                  content: l(
                    "option.measurement.scaleModal.fractionUnitsTooltip",
                  ),
                },
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(L.a, {
                    isSwitch: !0,
                    leftLabel: !0,
                    label: l("option.measurement.scaleModal.fractionalUnits"),
                    disabled: S,
                    checked: f,
                    id: "calibration-popup-fractional-units",
                    className: "pop-switch",
                    onChange: function () {
                      c(
                        v.a.updateCalibrationInfo({
                          tempScale: m,
                          isFractionalUnit: !f,
                        }),
                      );
                    },
                  }),
                ),
              ),
            )
          );
        };
      q.propTypes = K;
      var $ = q,
        J = t(53);
      t(1862);
      function X(n) {
        return (X =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function Q(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          (e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, o));
        }
        return t;
      }
      function Z(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Q(Object(t), !0).forEach(function (e) {
                nn(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
              : Q(Object(t)).forEach(function (e) {
                  Object.defineProperty(
                    n,
                    e,
                    Object.getOwnPropertyDescriptor(t, e),
                  );
                });
        }
        return n;
      }
      function nn(n, e, t) {
        return (
          (e = (function (n) {
            var e = (function (n, e) {
              if ("object" != X(n) || !n) return n;
              var t = n[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(n, e || "default");
                if ("object" != X(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(n);
            })(n, "string");
            return "symbol" == X(e) ? e : e + "";
          })(e)) in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function en(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var o,
                i,
                a,
                r,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (t = t.call(n)).next), 0 === e)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (n) {
                ((u = !0), (i = n));
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return tn(n, e);
              var t = {}.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(n)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? tn(n, e)
                    : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function tn(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, o = Array(e); t < e; t++) o[t] = n[t];
        return o;
      }
      var on = {
          isMobile: l.a.bool,
          isIE: l.a.bool,
          isOpen: l.a.bool,
          isRightClickMenu: l.a.bool,
          isNotesPanelOpenOrActive: l.a.bool,
          isRichTextPopupOpen: l.a.bool,
          isLinkModalOpen: l.a.bool,
          isWarningModalOpen: l.a.bool,
          isContextMenuPopupOpen: l.a.bool,
          isVisible: l.a.bool,
          focusedAnnotation: l.a.object,
          multipleAnnotationsSelected: l.a.bool,
          popupRef: l.a.any,
          position: l.a.object,
          showViewFileButton: l.a.bool,
          onViewFile: l.a.func,
          showCommentButton: l.a.bool,
          onCommentAnnotation: l.a.func,
          isDateFreeTextCanEdit: l.a.bool,
          isDatePickerOpen: l.a.bool,
          handleDateChange: l.a.func,
          onDatePickerShow: l.a.func,
          isCalibrationPopupOpen: l.a.bool,
          showEditStyleButton: l.a.bool,
          isStylePopupOpen: l.a.bool,
          hideSnapModeCheckbox: l.a.bool,
          openEditStylePopup: l.a.func,
          closeEditStylePopup: l.a.func,
          annotationStyle: l.a.object,
          onResize: l.a.func,
          showContentEditButton: l.a.bool,
          onEditContent: l.a.func,
          openContentEditDeleteWarningModal: l.a.func,
          isAppearanceSignature: l.a.bool,
          onClearAppearanceSignature: l.a.func,
          showRedactionButton: l.a.bool,
          onApplyRedaction: l.a.func,
          showGroupButton: l.a.bool,
          onGroupAnnotations: l.a.func,
          showUngroupButton: l.a.bool,
          onUngroupAnnotations: l.a.func,
          showFormFieldButton: l.a.bool,
          onOpenFormField: l.a.func,
          showDeleteButton: l.a.bool,
          onDeleteAnnotation: l.a.func,
          showLinkButton: l.a.bool,
          hasAssociatedLink: l.a.bool,
          linkAnnotationToURL: l.a.func,
          showFileDownloadButton: l.a.bool,
          downloadFileAttachment: l.a.func,
          showAudioPlayButton: l.a.bool,
          handlePlaySound: l.a.func,
          showCalibrateButton: l.a.bool,
          onOpenCalibration: l.a.func,
          customizableUI: l.a.bool,
          toggleStylePanel: l.a.func,
          isInReadOnlyMode: l.a.bool,
          onOpenAlignmentModal: l.a.func,
        },
        an = function (n) {
          var e,
            t,
            a = n.isMobile,
            r = n.isIE,
            l = n.isOpen,
            c = n.isRightClickMenu,
            u = n.isNotesPanelOpenOrActive,
            s = n.isRichTextPopupOpen,
            p = n.isLinkModalOpen,
            d = n.isWarningModalOpen,
            m = n.isContextMenuPopupOpen,
            f = n.isVisible,
            h = n.focusedAnnotation,
            y = n.popupRef,
            w = n.position,
            g = n.multipleAnnotationsSelected,
            v = n.showViewFileButton,
            A = n.onViewFile,
            E = n.showCommentButton,
            S = n.onCommentAnnotation,
            x = n.isDateFreeTextCanEdit,
            C = n.isDatePickerOpen,
            D = n.handleDateChange,
            F = n.onDatePickerShow,
            M = n.isCalibrationPopupOpen,
            I = n.showEditStyleButton,
            L = n.isStylePopupOpen,
            U = n.hideSnapModeCheckbox,
            z = n.openEditStylePopup,
            W = n.closeEditStylePopup,
            Y = n.annotationStyle,
            G = n.onResize,
            V = n.showContentEditButton,
            H = n.onEditContent,
            K = n.openContentEditDeleteWarningModal,
            q = n.isAppearanceSignature,
            X = n.onClearAppearanceSignature,
            Q = n.showRedactionButton,
            nn = n.onApplyRedaction,
            tn = n.showGroupButton,
            on = n.onGroupAnnotations,
            an = n.showUngroupButton,
            rn = n.onUngroupAnnotations,
            ln = n.showFormFieldButton,
            cn = n.onOpenFormField,
            un = n.showDeleteButton,
            sn = n.onDeleteAnnotation,
            pn = n.showLinkButton,
            dn = n.hasAssociatedLink,
            mn = n.linkAnnotationToURL,
            fn = n.showFileDownloadButton,
            bn = n.downloadFileAttachment,
            hn = n.showAudioPlayButton,
            yn = n.handlePlaySound,
            wn = n.showCalibrateButton,
            gn = n.onOpenCalibration,
            vn = n.customizableUI,
            An = n.toggleStylePanel,
            On = n.isInReadOnlyMode,
            En = n.onOpenAlignmentModal,
            Pn = en(Object(b.a)(), 1)[0],
            Sn = en(Object(o.useState)(!1), 2),
            xn = Sn[0],
            Tn = Sn[1],
            Cn = x ? "action.changeDate" : "action.comment",
            Nn = x
              ? "icon-tool-fill-and-sign-calendar"
              : "icon-header-chat-line",
            kn =
              !On &&
              h instanceof window.Core.Annotations.Model3DAnnotation &&
              !a,
            jn = h instanceof window.Core.Annotations.RectangleAnnotation,
            _n = h instanceof window.Core.Annotations.EllipseAnnotation,
            Dn = h instanceof window.Core.Annotations.PolygonAnnotation,
            Fn =
              h instanceof window.Core.Annotations.FreeTextAnnotation &&
              (h.getIntent() ===
                window.Core.Annotations.FreeTextAnnotation.Intent.FreeText ||
                h.getIntent() ===
                  window.Core.Annotations.FreeTextAnnotation.Intent
                    .FreeTextCallout),
            Mn = h instanceof window.Core.Annotations.RedactionAnnotation,
            In = Object(J.g)(h),
            Rn = !!h.Measure,
            Bn = Object(J.e)(Object(J.j)(h.ToolName)).hasLineEndings,
            Ln =
              !window.isApryseWebViewerWebComponent ||
              (null === (e = document.activeElement) || void 0 === e
                ? void 0
                : e.shadowRoot) === Object(P.a)(),
            Un = "solid",
            zn =
              null === (t = h.isContentEditPlaceholder) || void 0 === t
                ? void 0
                : t.call(h),
            Wn =
              h instanceof window.Core.Annotations.SignatureWidgetAnnotation &&
              h.fieldFlags.get(window.Core.Annotations.WidgetFlags.READ_ONLY),
            Yn = q && !ln;
          try {
            Un =
              "dash" === h.Style
                ? "".concat(h.Style, ",").concat(h.Dashes)
                : h.Style;
          } catch (n) {
            console.error(n);
          }
          var Gn = {};
          if (
            (Bn &&
              (Gn = {
                StartLineStyle: h.getStartStyle(),
                EndLineStyle: h.getEndStyle(),
                StrokeStyle: Un,
              }),
            (jn || _n || Dn) && (Gn = { StrokeStyle: Un }),
            Fn)
          ) {
            var Vn,
              Hn,
              Kn,
              qn,
              $n,
              Jn,
              Xn,
              Qn,
              Zn,
              ne,
              ee,
              te = h.getRichTextStyle(),
              oe = h.isAutoSizeFont(),
              ie = h.getCalculatedFontSize();
            Gn = {
              Font: h.Font,
              FontSize: h.FontSize,
              TextAlign: h.TextAlign,
              TextVerticalAlign: h.TextVerticalAlign,
              bold:
                null !==
                  (Vn =
                    "bold" ===
                    (null == te || null === (Hn = te[0]) || void 0 === Hn
                      ? void 0
                      : Hn["font-weight"])) &&
                void 0 !== Vn &&
                Vn,
              italic:
                null !==
                  (Kn =
                    "italic" ===
                    (null == te || null === (qn = te[0]) || void 0 === qn
                      ? void 0
                      : qn["font-style"])) &&
                void 0 !== Kn &&
                Kn,
              underline:
                (null == te ||
                null === ($n = te[0]) ||
                void 0 === $n ||
                null === (Jn = $n["text-decoration"]) ||
                void 0 === Jn
                  ? void 0
                  : Jn.includes("underline")) ||
                (null == te ||
                null === (Xn = te[0]) ||
                void 0 === Xn ||
                null === (Qn = Xn["text-decoration"]) ||
                void 0 === Qn
                  ? void 0
                  : Qn.includes("word")),
              strikeout:
                null !==
                  (Zn =
                    null == te ||
                    null === (ne = te[0]) ||
                    void 0 === ne ||
                    null === (ee = ne["text-decoration"]) ||
                    void 0 === ee
                      ? void 0
                      : ee.includes("line-through")) &&
                void 0 !== Zn &&
                Zn,
              StrokeStyle: Un,
              isAutoSizeFont: oe,
              calculatedFontSize: ie,
            };
          }
          Mn &&
            (Gn = {
              OverlayText: h.OverlayText,
              Font: h.Font,
              FontSize: h.FontSize,
              TextAlign: h.TextAlign,
            });
          var ae = i.a.createElement(
            "div",
            {
              className: N()({
                Popup: !0,
                AnnotationPopup: !0,
                open: l,
                closed: !l,
                stylePopupOpen: L,
                "is-vertical": c,
                "is-horizontal": !c,
              }),
              ref: y,
              "data-element": O.a.ANNOTATION_POPUP,
              style: Z(
                Z({}, w),
                {},
                { visibility: f || void 0 === f ? "visible" : "hidden" },
              ),
            },
            (function () {
              switch (!0) {
                case L:
                  return i.a.createElement(_.a, {
                    annotations: [h],
                    style: Y,
                    isOpen: l,
                    onResize: G,
                    isFreeText: Fn,
                    isEllipse: _n,
                    isRedaction: Mn,
                    isMeasure: Rn,
                    colorMapKey: In,
                    showLineStyleOptions: Bn,
                    properties: Gn,
                    hideSnapModeCheckbox: U,
                    hasBackToMenu: c,
                    onBackToMenu: W,
                  });
                case C:
                  return i.a.createElement(R, {
                    onClick: D,
                    annotation: h,
                    onDatePickerShow: F,
                  });
                case M:
                  return i.a.createElement($, { annotation: h });
                case xn &&
                  h instanceof window.Core.Annotations.Model3DAnnotation:
                  return i.a.createElement(
                    "div",
                    { className: "shortCuts3D" },
                    i.a.createElement(
                      "div",
                      {
                        className: "closeButton",
                        onClick: function () {
                          return Tn(!1);
                        },
                      },
                      "x",
                    ),
                    i.a.createElement(
                      "div",
                      { className: "row" },
                      Pn("action.rotate3D"),
                      " ",
                      i.a.createElement("span", null, Pn("shortcut.rotate3D")),
                    ),
                    i.a.createElement(
                      "div",
                      { className: "row" },
                      Pn("action.zoom"),
                      " ",
                      i.a.createElement("span", null, Pn("shortcut.zoom3D")),
                    ),
                  );
                default:
                  return i.a.createElement(
                    k.a,
                    { locked: l && Ln && !s && !u && !p && !d && !Fn && !m },
                    i.a.createElement(
                      "div",
                      { className: "container" },
                      i.a.createElement(
                        B.a,
                        {
                          dataElement: O.a.ANNOTATION_POPUP,
                          childrenClassName: "main-menu-button",
                        },
                        v &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "viewFileButton",
                            label: c ? "action.viewFile" : "",
                            title: c ? "" : "action.viewFile",
                            img: "icon-view",
                            onClick: A,
                          }),
                        E &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "annotationCommentButton",
                            label: c ? Cn : "",
                            title: c ? "" : Cn,
                            img: Nn,
                            onClick: S,
                          }),
                        I &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "annotationStyleEditButton",
                            label: c ? "action.style" : "",
                            title: c ? "" : "action.style",
                            img: "icon-menu-style-line",
                            onClick: vn ? An : z,
                          }),
                        V &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "annotationContentEditButton",
                            label: c ? "action.edit" : "",
                            title: c ? "" : "action.edit",
                            img: "ic_edit_page_24px",
                            onClick: H,
                          }),
                        Yn &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "annotationClearSignatureButton",
                            label: !Wn && c ? "action.clearSignature" : "",
                            title: Wn
                              ? "action.readOnlySignature"
                              : c
                                ? ""
                                : "action.clearSignature",
                            img: "icon-delete-line",
                            onClick: X,
                            isNotClickableSelector: function () {
                              return Wn;
                            },
                          }),
                        Q &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "annotationRedactButton",
                            label: c ? "action.apply" : "",
                            title: c ? "" : "action.apply",
                            img: "ic_check_black_24px",
                            onClick: nn,
                          }),
                        tn &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "annotationGroupButton",
                            label: c ? "action.group" : "",
                            title: c ? "" : "action.group",
                            img: "group-annotations-icon",
                            onClick: on,
                          }),
                        an &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "annotationUngroupButton",
                            label: c ? "action.ungroup" : "",
                            title: c ? "" : "action.ungroup",
                            img: "ungroup-annotations-icon",
                            onClick: rn,
                          }),
                        g &&
                          !a &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "openAlignmentButton",
                            label: c ? "alignment" : "",
                            title: c ? "" : "Align",
                            img: "ic-alignment-main",
                            onClick: En,
                          }),
                        ln &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "formFieldEditButton",
                            label: c ? "action.formFieldEdit" : "",
                            title: c ? "" : "action.formFieldEdit",
                            img: "icon-edit-form-field",
                            onClick: cn,
                          }),
                        un &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "annotationDeleteButton",
                            label: c ? "action.delete" : "",
                            title: c ? "" : "action.delete",
                            img: "icon-delete-line",
                            onClick: zn ? K : sn,
                          }),
                        wn &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: O.a.CALIBRATION_POPUP_BUTTON,
                            label: c ? "action.calibrate" : "",
                            title: c ? "" : "action.calibrate",
                            img: "calibrate",
                            onClick: gn,
                          }),
                        pn &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "linkButton",
                            label: c ? "tool.Link" : "",
                            title: c ? "" : "tool.Link",
                            img: dn ? "icon-tool-unlink" : "icon-tool-link",
                            onClick: mn,
                          }),
                        fn &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "fileAttachmentDownload",
                            label: c ? "action.fileAttachmentDownload" : "",
                            title: c ? "" : "action.fileAttachmentDownload",
                            img: "icon-download",
                            onClick: function () {
                              return bn(h);
                            },
                          }),
                        kn &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "shortCutKeysFor3D",
                            label: c ? "action.viewShortCutKeysFor3D" : "",
                            title: c ? "" : "action.viewShortCutKeysFor3D",
                            img: "icon-keyboard",
                            onClick: function () {
                              return Tn(!0);
                            },
                          }),
                        hn &&
                          i.a.createElement(j.a, {
                            className: "main-menu-button",
                            dataElement: "playSoundButton",
                            label: c ? "action.playAudio" : "",
                            title: c ? "" : "action.playAudio",
                            img: "ic_play_24px",
                            onClick: function () {
                              return yn(h);
                            },
                          }),
                      ),
                    ),
                  );
              }
            })(),
          );
          return r || a
            ? ae
            : i.a.createElement(
                T.a,
                {
                  cancel:
                    ".Button, .cell, .sliders-container svg, select, button, input",
                },
                ae,
              );
        };
      an.propTypes = on;
      var rn = an,
        ln = t(1639);
      function cn() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
          e,
          t = "function" == typeof Symbol ? Symbol : {},
          o = t.iterator || "@@iterator",
          i = t.toStringTag || "@@toStringTag";
        function a(t, o, i, a) {
          var c = o && o.prototype instanceof l ? o : l,
            u = Object.create(c.prototype);
          return (
            un(
              u,
              "_invoke",
              (function (t, o, i) {
                var a,
                  l,
                  c,
                  u = 0,
                  s = i || [],
                  p = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: n,
                    a: m,
                    f: m.bind(n, 4),
                    d: function (e, t) {
                      return ((a = e), (l = 0), (c = n), (d.n = t), r);
                    },
                  };
                function m(t, o) {
                  for (
                    l = t, c = o, e = 0;
                    !p && u && !i && e < s.length;
                    e++
                  ) {
                    var i,
                      a = s[e],
                      m = d.p,
                      f = a[2];
                    t > 3
                      ? (i = f === o) &&
                        ((c = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                        (a[4] = a[5] = n))
                      : a[0] <= m &&
                        ((i = t < 2 && m < a[1])
                          ? ((l = 0), (d.v = o), (d.n = a[1]))
                          : m < f &&
                            (i = t < 3 || a[0] > o || o > f) &&
                            ((a[4] = t), (a[5] = o), (d.n = f), (l = 0)));
                  }
                  if (i || t > 1) return r;
                  throw ((p = !0), o);
                }
                return function (i, s, f) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === s && m(s, f), l = s, c = f;
                    (e = l < 2 ? n : c) || !p;

                  ) {
                    a ||
                      (l
                        ? l < 3
                          ? (l > 1 && (d.n = -1), m(l, c))
                          : (d.n = c)
                        : (d.v = c));
                    try {
                      if (((u = 2), a)) {
                        if ((l || (i = "next"), (e = a[i]))) {
                          if (!(e = e.call(a, c)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((c = e.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (e = a.return) && e.call(a),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  i +
                                  "' method",
                              )),
                              (l = 1)));
                        a = n;
                      } else if ((e = (p = d.n < 0) ? c : t.call(o, d)) !== r)
                        break;
                    } catch (e) {
                      ((a = n), (l = 1), (c = e));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: e, done: p };
                };
              })(t, i, a),
              !0,
            ),
            u
          );
        }
        var r = {};
        function l() {}
        function c() {}
        function u() {}
        e = Object.getPrototypeOf;
        var s = [][o]
            ? e(e([][o]()))
            : (un((e = {}), o, function () {
                return this;
              }),
              e),
          p = (u.prototype = l.prototype = Object.create(s));
        function d(n) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(n, u)
              : ((n.__proto__ = u), un(n, i, "GeneratorFunction")),
            (n.prototype = Object.create(p)),
            n
          );
        }
        return (
          (c.prototype = u),
          un(p, "constructor", u),
          un(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          un(u, i, "GeneratorFunction"),
          un(p),
          un(p, i, "Generator"),
          un(p, o, function () {
            return this;
          }),
          un(p, "toString", function () {
            return "[object Generator]";
          }),
          (cn = function () {
            return { w: a, m: d };
          })()
        );
      }
      function un(n, e, t, o) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (n) {
          i = 0;
        }
        (un = function (n, e, t, o) {
          if (e)
            i
              ? i(n, e, {
                  value: t,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (n[e] = t);
          else {
            var a = function (e, t) {
              un(n, e, function (n) {
                return this._invoke(e, t, n);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(n, e, t, o);
      }
      function sn(n, e, t, o, i, a, r) {
        try {
          var l = n[a](r),
            c = l.value;
        } catch (n) {
          return void t(n);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, i);
      }
      function pn(n) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (o, i) {
            var a = n.apply(e, t);
            function r(n) {
              sn(a, o, i, r, l, "next", n);
            }
            function l(n) {
              sn(a, o, i, r, l, "throw", n);
            }
            r(void 0);
          });
        };
      }
      function dn(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var o,
                i,
                a,
                r,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (t = t.call(n)).next), 0 === e)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (n) {
                ((u = !0), (i = n));
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return mn(n, e);
              var t = {}.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(n)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? mn(n, e)
                    : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function mn(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, o = Array(e); t < e; t++) o[t] = n[t];
        return o;
      }
      var fn = window.Core.Tools.ToolNames,
        bn = window.Core.Annotations,
        hn = {
          focusedAnnotation: l.a.object,
          selectedMultipleAnnotations: l.a.bool,
          canModify: l.a.bool,
          focusedAnnotationStyle: l.a.object,
          isStylePopupOpen: l.a.bool,
          setIsStylePopupOpen: l.a.func,
          isDatePickerOpen: l.a.bool,
          setDatePickerOpen: l.a.func,
          isDatePickerMount: l.a.bool,
          setDatePickerMount: l.a.func,
          hasAssociatedLink: l.a.bool,
          includesFormFieldAnnotation: l.a.bool,
          stylePopupRepositionFlag: l.a.bool,
          setStylePopupRepositionFlag: l.a.func,
          closePopup: l.a.func,
        },
        yn = function (n) {
          var e = n.focusedAnnotation,
            t = n.selectedMultipleAnnotations,
            r = n.canModify,
            l = n.focusedAnnotationStyle,
            c = n.isStylePopupOpen,
            x = n.setIsStylePopupOpen,
            T = n.isDatePickerOpen,
            C = n.setDatePickerOpen,
            N = n.isDatePickerMount,
            k = n.setDatePickerMount,
            j = n.hasAssociatedLink,
            _ = n.includesFormFieldAnnotation,
            D = n.stylePopupRepositionFlag,
            F = n.setStylePopupRepositionFlag,
            M = n.closePopup,
            I = Object(a.e)(function (n) {
              return A.a.isElementDisabled(n, O.a.ANNOTATION_POPUP);
            }),
            R = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, O.a.ANNOTATION_POPUP);
            }),
            B = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, O.a.CONTEXT_MENU_POPUP);
            }),
            L = Object(a.e)(A.a.isRightClickAnnotationPopupEnabled),
            U = Object(a.e)(function (n) {
              return A.a.isElementDisabled(n, O.a.NOTES_PANEL);
            }),
            z = Object(a.e)(function (n) {
              return A.a.isElementDisabled(n, O.a.ANNOTATION_STYLE_POPUP);
            }),
            W = Object(a.e)(function (n) {
              return A.a.isElementDisabled(n, O.a.INLINE_COMMENT_POPUP);
            }),
            Y = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, O.a.NOTES_PANEL);
            }),
            G = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, O.a.LINK_MODAL);
            }),
            V = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, O.a.WARNING_MODAL);
            }),
            H = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, "richTextPopup");
            }),
            K = Object(a.e)(A.a.getIsMultiTab),
            q = Object(a.e)(A.a.getTabManager),
            $ = Object(a.e)(A.a.getTabs),
            J = Object(a.e)(A.a.getNotesInLeftPanel),
            X = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, O.a.LEFT_PANEL);
            }),
            Q = Object(a.e)(A.a.getActiveLeftPanel),
            Z = Object(a.e)(A.a.getActiveDocumentViewerKey),
            nn = Object(a.e)(A.a.isAnyCustomPanelOpen),
            en = Object(a.e)(A.a.getFeatureFlags),
            tn = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, O.a.STYLE_PANEL);
            }),
            on = Object(a.e)(function (n) {
              return A.a.isElementDisabled(n, O.a.STYLE_PANEL);
            }),
            an = Object(a.e)(function (n) {
              return A.a.getIsPanelInFlyout(n, S.i.STYLE_PANEL, [
                O.a.MULTI_SELECT_STYLE_PANEL_FLYOUT,
              ]);
            }),
            un = Object(a.e)(function (n) {
              return A.a.isElementOpen(n, null == an ? void 0 : an.dataElement);
            }),
            sn = dn(Object(b.a)(), 1)[0],
            mn = Object(a.d)(),
            hn = dn(Object(o.useState)({ left: 0, top: 0 }), 2),
            wn = hn[0],
            gn = hn[1],
            vn = dn(Object(o.useState)(!1), 2),
            An = vn[0],
            On = vn[1],
            En = dn(Object(o.useState)(!1), 2),
            Pn = En[0],
            Sn = En[1],
            xn = Object(o.useRef)(),
            Tn = !L || p.a.isAnnotationSelected(e, Z),
            Cn = p.a.getAnnotationManager(Z),
            Nn = en.customizableUI;
          Object(g.a)(
            xn,
            Object(o.useCallback)(
              function (n) {
                var e,
                  t = Object(P.a)().querySelector(
                    '[data-element="'.concat(O.a.NOTES_PANEL, '"]'),
                  ),
                  o = null == t ? void 0 : t.contains(n.target),
                  i =
                    null ===
                      (e = Object(P.a)().querySelector(".LinkModal.open")) ||
                    void 0 === e
                      ? void 0
                      : e.contains(n.target),
                  a = Object(P.a)().querySelector(
                    "[data-element=".concat(
                      null == an ? void 0 : an.dataElement,
                      "]",
                    ),
                  ),
                  r = null == a ? void 0 : a.contains(n.target),
                  l = Object(h.b)(),
                  c = Object(h.d)(),
                  u = Object(h.c)();
                o ||
                  i ||
                  r ||
                  c ||
                  u ||
                  l ||
                  (L ? M() : mn(v.a.closeElement(O.a.ANNOTATION_POPUP)));
              },
              [L],
            ),
          );
          var kn = u()(
              function () {
                yn &&
                  (function () {
                    var n = p.a.getDisplayModeObject().getVisiblePages(),
                      t = Object(ln.a)(p.a, e);
                    if (xn.current && t && e) gn(Object(d.c)(e, xn, Z));
                    else if (!U && !t) {
                      var o = p.a.getSelectedAnnotations().find(function (e) {
                        return n.includes(e.PageNumber);
                      });
                      gn(Object(d.c)(o, xn, Z));
                    }
                  })();
              },
              16,
              { trailing: !0, leading: !1 },
            ),
            jn = u()(
              function () {
                yn && On(Tn);
              },
              32,
              { trailing: !0, leading: !1 },
            );
          (Object(o.useEffect)(function () {
            return (
              window.addEventListener("resize", kn),
              function () {
                window.removeEventListener("resize", kn);
              }
            );
          }, []),
            Object(o.useLayoutEffect)(
              function () {
                (e || c || N) && (kn(), On(!1), jn());
              },
              [e, c, N, r, Z],
            ),
            Object(o.useEffect)(
              function () {
                e && e.ToolName === fn.CALIBRATION_MEASUREMENT && Sn(!0);
              },
              [e],
            ),
            Object(o.useEffect)(
              function () {
                (R || H) && mn(v.a.closeElement(O.a.INLINE_COMMENT_POPUP));
              },
              [R, H],
            ));
          var _n = !!Object(w.a)("webviewerServerURL", null)
              ? window.Core.SupportedFileFormats.SERVER
              : window.Core.SupportedFileFormats.CLIENT,
            Dn =
              e instanceof bn.FileAttachmentAnnotation &&
              K &&
              _n.includes(
                window.Core.mimeTypeToExtension[e.getFileMetadata().mimeType],
              ),
            Fn = Object(o.useCallback)(
              pn(
                cn().m(function n() {
                  var t, o, i, a, r;
                  return cn().w(function (n) {
                    for (;;)
                      switch (n.n) {
                        case 0:
                          if (q && K) {
                            n.n = 1;
                            break;
                          }
                          return n.a(
                            2,
                            console.warn(
                              "Can't open file in non-multi-tab mode",
                            ),
                          );
                        case 1:
                          if (
                            ((t = e.getFileMetadata()),
                            !(o = $.find(function (n) {
                              return n.options.filename === t.filename;
                            })))
                          ) {
                            n.n = 3;
                            break;
                          }
                          return ((n.n = 2), q.setActiveTab(o.id, !0));
                        case 2:
                          return n.a(2);
                        case 3:
                          return ((i = q), (n.n = 4), e.getFileData());
                        case 4:
                          return (
                            (a = n.v),
                            (r = {
                              extension:
                                window.Core.mimeTypeToExtension[t.mimeType],
                              filename: t.filename,
                              saveCurrentActiveTabState: !0,
                              setActive: !0,
                            }),
                            (n.n = 5),
                            i.addTab.call(i, a, r)
                          );
                        case 5:
                          return n.a(2);
                      }
                  }, n);
                }),
              ),
              [q, e, $, K],
            );
          if (I || !e) return null;
          var Mn = p.a.getSelectedAnnotations(Z),
            In = Mn.length,
            Rn = In > 1,
            Bn =
              e instanceof bn.FreeTextAnnotation &&
              !!e.getDateFormat() &&
              p.a.canModifyContents(e, Z),
            Ln = p.a.getNumberOfGroups(Mn, Z),
            Un = Ln > 1,
            zn = 1 === Ln && In > 1 && Tn,
            Wn =
              e instanceof bn.SignatureWidgetAnnotation &&
              e.isSignedByAppearance(),
            Yn = p.a.getIsReadOnly(),
            Gn =
              (!U || !W) &&
              (!Rn || (Rn && !Tn)) &&
              e.ToolName !== fn.CROP &&
              !_ &&
              !e.isContentEditPlaceholder() &&
              !Wn,
            Vn = Object.keys(l).length > 0,
            Hn = [
              fn.CROP,
              fn.VIDEO_REDACTION,
              fn.VIDEO_AND_AUDIO_REDACTION,
              fn.AUDIO_REDACTION,
            ],
            Kn =
              r &&
              Vn &&
              (!z || Nn) &&
              (!Rn || zn || (Rn && !Tn)) &&
              !Hn.includes(e.ToolName) &&
              !(e instanceof bn.Model3DAnnotation) &&
              !e.isContentEditPlaceholder() &&
              !Wn &&
              !(e instanceof bn.PushButtonWidgetAnnotation),
            qn = e instanceof bn.EllipseAnnotation || !p.a.isFullPDFEnabled(),
            $n =
              e.isContentEditPlaceholder() &&
              e.getContentEditType() === window.Core.ContentEdit.Types.TEXT,
            Jn = (function () {
              var n = pn(
                cn().m(function n() {
                  return cn().w(function (n) {
                    for (;;)
                      switch (n.n) {
                        case 0:
                          (Cn.trigger("annotationDoubleClicked", e),
                            mn(v.a.closeElement(O.a.ANNOTATION_POPUP)));
                        case 1:
                          return n.a(2);
                      }
                  }, n);
                }),
              );
              return function () {
                return n.apply(this, arguments);
              };
            })(),
            Xn = p.a.isAnnotationRedactable(e, Z) && !Rn && !_,
            Qn = Mn.find(function (n) {
              return !n.InReplyTo;
            }),
            Zn = r && Tn && Un && !_,
            ne = zn,
            ee = p.a.getFormFieldCreationManager(Z).isInFormFieldCreationMode(),
            te = _ && ee && !(e instanceof bn.PushButtonWidgetAnnotation),
            oe = r,
            ie = function () {
              (Tn
                ? p.a.deleteAnnotations(
                    p.a.getSelectedAnnotations(Z),
                    void 0,
                    Z,
                  )
                : p.a.deleteAnnotations([e], void 0, Z),
                M());
            },
            ae = !(
              [
                fn.CROP,
                fn.SIGNATURE,
                fn.REDACTION,
                fn.REDACTION2,
                fn.REDACTION3,
                fn.REDACTION4,
                fn.STICKY,
                fn.STICKY2,
                fn.STICKY3,
                fn.STICKY4,
              ].includes(e.ToolName) ||
              _ ||
              e.isContentEditPlaceholder() ||
              e instanceof bn.SoundAnnotation ||
              Wn
            ),
            re = r && e.Measure && e instanceof bn.LineAnnotation,
            le = e instanceof bn.FileAttachmentAnnotation,
            ce = (function () {
              var n = pn(
                cn().m(function n(e) {
                  var t, o, i;
                  return cn().w(function (n) {
                    for (;;)
                      switch (n.n) {
                        case 0:
                          return ((n.n = 1), e.getFullFileMetadata());
                        case 1:
                          ((t = n.v),
                            (o = t.fileData),
                            (i = t.fileName),
                            Object(s.saveAs)(o, i));
                        case 2:
                          return n.a(2);
                      }
                  }, n);
                }),
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            ue =
              !f.e && !t && e instanceof bn.SoundAnnotation && e.hasAudioData(),
            se = Y || (J && X && "notesPanel" === Q) || nn || ee;
          return i.a.createElement(rn, {
            isMobile: Object(f.k)(),
            isIE: f.e,
            isOpen: R,
            isRightClickMenu: L,
            isNotesPanelOpenOrActive: se,
            isRichTextPopupOpen: H,
            isLinkModalOpen: G,
            isWarningModalOpen: V,
            isContextMenuPopupOpen: B,
            isVisible: An,
            popupRef: xn,
            position: wn,
            focusedAnnotation: e,
            multipleAnnotationsSelected: Rn,
            showViewFileButton: Dn,
            onViewFile: Fn,
            showCommentButton: Gn,
            onCommentAnnotation: function () {
              if (Bn) C(!0);
              else {
                (mn(v.a.closeElement("searchPanel")),
                  mn(v.a.closeElement("redactionPanel")));
                var n = p.a.getContentEditManager(Z);
                (n.isInContentEditMode() &&
                  (mn(v.a.closeElement("textEditingPanel")),
                  n.endContentEditMode()),
                  mn(v.a.triggerNoteEditing()),
                  W
                    ? (mn(v.a.openElement(O.a.NOTES_PANEL)),
                      mn(v.a.closeElement(O.a.ANNOTATION_POPUP)))
                    : (Y || mn(v.a.openElement(O.a.INLINE_COMMENT_POPUP)),
                      M()));
              }
            },
            isDateFreeTextCanEdit: Bn,
            isDatePickerOpen: T,
            handleDateChange: function (n) {
              (Cn.setNoteContents(e, n), Cn.updateAnnotation(e));
            },
            onDatePickerShow: function (n) {
              k(n);
            },
            isCalibrationPopupOpen: Pn,
            showEditStyleButton: Kn,
            isStylePopupOpen: c,
            hideSnapModeCheckbox: qn,
            openEditStylePopup: function () {
              return x(!0);
            },
            closeEditStylePopup: function () {
              return x(!1);
            },
            annotationStyle: l,
            onResize: function () {
              F(!D);
            },
            showContentEditButton: $n,
            onEditContent: Jn,
            openContentEditDeleteWarningModal: function () {
              var n = {
                message: sn("option.contentEdit.deletionModal.message"),
                title: sn("option.contentEdit.deletionModal.title"),
                confirmBtnText: sn("action.ok"),
                onConfirm: function () {
                  return ie();
                },
              };
              mn(v.a.showWarningMessage(n));
            },
            isAppearanceSignature: Wn,
            onClearAppearanceSignature: function () {
              (e.clearSignature(Cn),
                mn(v.a.closeElement(O.a.ANNOTATION_POPUP)));
            },
            showRedactionButton: Xn,
            onApplyRedaction: function () {
              (mn(Object(m.a)(e, void 0, Z)),
                mn(v.a.closeElement(O.a.ANNOTATION_POPUP)));
            },
            showGroupButton: Zn,
            onGroupAnnotations: function () {
              p.a.groupAnnotations(Qn, Mn, Z);
            },
            showUngroupButton: ne,
            onUngroupAnnotations: function () {
              p.a.ungroupAnnotations(Mn, Z);
            },
            showFormFieldButton: te,
            onOpenFormField: function () {
              (M(),
                Nn
                  ? (mn(v.a.disableElement(E.b)),
                    mn(v.a.closeElement(O.a.FORM_FIELD_EDIT_POPUP)))
                  : mn(v.a.disableElement(O.a.ANNOTATION_POPUP, E.b)),
                mn(v.a.openElement(O.a.FORM_FIELD_EDIT_POPUP)),
                mn(v.a.openElement(O.a.FORM_FIELD_PANEL)));
            },
            showDeleteButton: oe,
            onDeleteAnnotation: ie,
            showLinkButton: ae,
            hasAssociatedLink: j,
            linkAnnotationToURL: function () {
              j
                ? ((Tn ? Mn : [e]).forEach(function (n) {
                    Object(y.a)(n).forEach(function (e, t) {
                      (Cn.ungroupAnnotations([e]),
                        n instanceof bn.TextHighlightAnnotation &&
                        0 === n.Opacity &&
                        0 === t
                          ? Cn.deleteAnnotations([n, e], null, !0)
                          : Cn.deleteAnnotation(e, null, !0));
                    });
                  }),
                  M())
                : mn(v.a.openElement(O.a.LINK_MODAL));
            },
            showFileDownloadButton: le,
            downloadFileAttachment: ce,
            showAudioPlayButton: ue,
            handlePlaySound: function (n) {
              (mn(v.a.setActiveSoundAnnotation(n)),
                mn(v.a.triggerResetAudioPlaybackPosition(!0)),
                mn(v.a.openElement("audioPlaybackPopup")));
            },
            showCalibrateButton: re,
            onOpenCalibration: function () {
              (mn(v.a.closeElement(O.a.ANNOTATION_POPUP)),
                mn(v.a.openElement(O.a.CALIBRATION_MODAL)));
            },
            customizableUI: Nn,
            toggleStylePanel: function () {
              (tn || on || an || mn(v.a.openElement(O.a.STYLE_PANEL)),
                an &&
                  mn(
                    un
                      ? v.a.closeElement(an.dataElement)
                      : v.a.openFlyout(
                          an.dataElement,
                          "annotationStyleEditButton",
                        ),
                  ),
                an || M());
            },
            isStylePanelOpen: tn,
            isInReadOnlyMode: Yn,
            onOpenAlignmentModal: function () {
              (mn(v.a.openElement(O.a.ANNOTATION_ALIGNMENT_POPUP)), M());
            },
          });
        };
      yn.propTypes = hn;
      var wn = yn;
      e.default = wn;
    },
  },
]);
//# sourceMappingURL=chunk.40.js.map
