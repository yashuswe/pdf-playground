(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    1868: function (e, n, o) {
      var t = o(35),
        a = o(1975);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, o = document) {
                const t = [];
                return (
                  o.querySelectorAll(n).forEach((e) => t.push(e)),
                  o.querySelectorAll("*").forEach((o) => {
                    o.shadowRoot && t.push(...e(n, o.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer")));
          const o = [];
          for (let t = 0; t < n.length; t++) {
            const a = n[t];
            if (0 === t)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  o.length > 0 &&
                    o.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (a.shadowRoot.appendChild(n), o.push(n));
            }
          }
        },
        singleton: !1,
      };
      t(a, i);
      e.exports = a.locals || {};
    },
    1975: function (e, n, o) {
      ((n = e.exports = o(36)(!1)).push([
        e.i,
        ".open.PageRedactionModal{visibility:visible}.closed.PageRedactionModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.PageRedactionModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.PageRedactionModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.PageRedactionModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.PageRedactionModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.PageRedactionModal .footer .modal-button.cancel:hover,.PageRedactionModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.PageRedactionModal .footer .modal-button.cancel,.PageRedactionModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.PageRedactionModal .footer .modal-button.cancel.disabled,.PageRedactionModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.PageRedactionModal .footer .modal-button.cancel.disabled span,.PageRedactionModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.PageRedactionModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.PageRedactionModal .modal-container .wrapper .modal-content{padding:10px}.PageRedactionModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.PageRedactionModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.PageRedactionModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.PageRedactionModal .footer .modal-button.confirm{margin-inline-start:4px}.PageRedactionModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .footer .modal-button{padding:23px 8px}}.PageRedactionModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .swipe-indicator{width:32px}}.PageRedactionModal .modal-container{align-items:center;background:var(--component-background);width:888px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .modal-container{width:480px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .modal-container{width:480px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .modal-container{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .modal-container{width:100%}}.PageRedactionModal .modal-container .body{padding:16px;grid-gap:16px;gap:16px;display:flex;width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .modal-container .body{display:flex;grid-gap:5px;gap:5px;flex-direction:column}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .modal-container .body{display:flex;grid-gap:5px;gap:5px;flex-direction:column}}.PageRedactionModal .modal-container .body .canvas-container{border:1px solid var(--lighter-border);background-color:var(--file-preview-background);height:448px;width:60%;display:flex;align-items:center;justify-content:space-between;flex-direction:column;overflow:auto;grid-gap:5px;gap:5px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .modal-container .body .canvas-container{width:55%;height:300px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .modal-container .body .canvas-container{width:55%;height:300px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .modal-container .body .canvas-container{width:100%;height:250px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .modal-container .body .canvas-container{width:100%;height:250px}}.PageRedactionModal .modal-container .body .canvas-container canvas{box-shadow:0 0 3px 0 var(--box-shadow)}.PageRedactionModal .modal-container .body .selection-options{width:40%;grid-gap:12px;gap:12px;display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .modal-container .body .selection-options{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .modal-container .body .selection-options{width:100%}}.PageRedactionModal .modal-container .body .selection-options fieldset{border:0;padding:0;margin:0;min-width:0;display:grid;grid-gap:12px;gap:12px}.PageRedactionModal .modal-container .body .selection-options legend{padding:0;margin-bottom:12px}.PageRedactionModal .modal-container .body .selection-options .page-number-input-container{width:100%;margin-top:8px}.PageRedactionModal .modal-container .body .selection-options .page-number-input-container .PageNumberInput{height:54px}.PageRedactionModal .modal-container .body .selection-options .page-number-input-container .PageNumberInput .page-number-input{height:32px;width:100%;align-self:flex-end}.PageRedactionModal .modal-container .body .selection-options .ui__choice--disabled{text-decoration:line-through}.PageRedactionModal .modal-container .body .selection-options .ui__choice{font-size:13px;margin:0}.PageRedactionModal .modal-container .body .selection-options .ui__choice.specify-pages-choice.ui__choice--checked{align-items:baseline;height:75px}.PageRedactionModal .modal-container .body .selection-options .ui__choice.specify-pages-choice.ui__choice--checked .ui__choice__label{width:100%;position:relative;inset-block-start:-2px}.PageRedactionModal .modal-container .body .selection-options .ui__choice .specifyPagesChoiceLabel{display:flex}.PageRedactionModal .modal-container .body .selection-options .ui__choice .specifyPagesChoiceLabel .specifyPagesExampleLabel{margin-inline-start:4px;color:var(--faded-text)}.PageRedactionModal .modal-container .footer{margin-top:0;width:100%;display:flex;align-items:center;justify-content:flex-end;padding:16px;border-top:1px solid var(--divider)}.PageRedactionModal .modal-container .footer .Button{margin-top:0;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .modal-container .footer .Button{padding:8px 16px!important}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .modal-container .footer .Button{padding:8px 16px!important}}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2119: function (e, n, o) {
      "use strict";
      o.r(n);
      (o(9),
        o(10),
        o(14),
        o(38),
        o(21),
        o(50),
        o(20),
        o(12),
        o(44),
        o(22),
        o(129),
        o(18),
        o(16),
        o(8),
        o(111),
        o(17),
        o(19),
        o(62),
        o(11),
        o(13));
      var t = o(0),
        a = o.n(t),
        i = o(5),
        r = o(6),
        d = o(4),
        l = o(3),
        c = o(1),
        p = o(122),
        s = o(15),
        m = o.n(s),
        u = o(305),
        g = o(41),
        b = o(160),
        f = o(2),
        h = o.n(f),
        y = o(476),
        x = o(373),
        w = o(182);
      o(1868);
      function v(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var o =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != o) {
              var t,
                a,
                i,
                r,
                d = [],
                l = !0,
                c = !1;
              try {
                if (((i = (o = o.call(e)).next), 0 === n)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (t = i.call(o)).done) &&
                    (d.push(t.value), d.length !== n);
                    l = !0
                  );
              } catch (e) {
                ((c = !0), (a = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return d;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return P(e, n);
              var o = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === o && e.constructor && (o = e.constructor.name),
                "Map" === o || "Set" === o
                  ? Array.from(e)
                  : "Arguments" === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? P(e, n)
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
      function P(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var o = 0, t = Array(n); o < n; o++) t[o] = e[o];
        return t;
      }
      var R = {
          closeModal: h.a.func,
          currentPage: h.a.number,
          pageLabels: h.a.array,
          selectedPages: h.a.array,
          markPages: h.a.func,
          redactPages: h.a.func,
          evenDisabled: h.a.bool,
          renderCanvases: h.a.func,
          isOpen: h.a.bool,
        },
        M = "current",
        A = "specify",
        E = "odd",
        k = "even",
        O = function (e) {
          var n = e.closeModal,
            o = e.pageLabels,
            r = e.selectedPages,
            d = e.currentPage,
            l = e.markPages,
            c = e.redactPages,
            p = e.evenDisabled,
            s = e.renderCanvases,
            f = e.isOpen,
            h = Object(u.a)().t,
            P = v(Object(t.useState)(M), 2),
            R = P[0],
            O = P[1],
            _ = v(Object(t.useState)(), 2),
            C = _[0],
            S = _[1],
            j = v(Object(t.useState)(""), 2),
            L = j[0],
            D = j[1];
          Object(t.useEffect)(
            function () {
              S(r);
            },
            [r],
          );
          var N = function () {
              var e = [];
              if (R === M) return [d];
              if (R === A) return C;
              if (R === E) for (var n = 1; o.length >= n; n += 2) e.push(n);
              else if (R === k)
                for (var t = 2; o.length >= t; t += 2) e.push(t);
              return e;
            },
            T = Object(w.a)(function () {
              return c(N());
            }),
            I = Object(w.a)(function () {
              return l(N());
            }),
            H = Object(t.useRef)();
          Object(t.useEffect)(
            function () {
              f && s(H, N());
            },
            [R, f, C, s, N],
          );
          var B = function (e) {
              var o = e.event.target;
              (H.current.clientHeight < H.current.scrollHeight ||
                H.current.clientWidth < H.current.scrollWidth) &&
              (o === H.current || H.current.contains(o))
                ? e.event.stopPropagation()
                : n();
            },
            W = a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                "label",
                { className: "specifyPagesChoiceLabel" },
                a.a.createElement(
                  "span",
                  null,
                  h("option.pageRedactModal.specify"),
                ),
                "specify" === R &&
                  a.a.createElement(
                    "span",
                    { className: "specifyPagesExampleLabel" },
                    "- ",
                    h("option.thumbnailPanel.multiSelectPagesExample"),
                  ),
              ),
              "specify" === R &&
                a.a.createElement(
                  "div",
                  {
                    className: m()("page-number-input-container", {
                      error: !!L,
                    }),
                  },
                  a.a.createElement(y.a, {
                    selectedPageNumbers: C,
                    pageCount: o.length,
                    ariaLabel: h("option.pageRedactModal.specify"),
                    onSelectedPageNumbersChange: function (e) {
                      e.length > 0 && (D(""), S(e));
                    },
                    onBlurHandler: S,
                    onError: function (e) {
                      e &&
                        D(
                          ""
                            .concat(h("message.errorPageNumber"), " ")
                            .concat(o.length),
                        );
                    },
                    pageNumberError: L,
                  }),
                ),
            );
          return a.a.createElement(
            "div",
            {
              className: m()({
                Modal: !0,
                PageRedactionModal: !0,
                open: f,
                closed: !f,
              }),
              "data-element": i.a.PAGE_REDACT_MODAL,
            },
            a.a.createElement(
              x.a,
              {
                title: "action.redactPages",
                isOpen: f,
                onCloseClick: n,
                closeHandler: n,
                onSwipedDown: B,
                onSwipedUp: B,
                swipeToClose: !0,
              },
              a.a.createElement(
                "div",
                { className: "body" },
                a.a.createElement("div", {
                  className: "canvas-container",
                  ref: H,
                }),
                a.a.createElement(
                  "form",
                  {
                    className: "selection-options",
                    role: "group",
                    "aria-labelledby": h(
                      "option.pageRedactModal.pageSelection",
                    ),
                    onChange: function (e) {
                      e.target.classList.contains("page-number-input") ||
                        (O(e.target.value), D(""));
                    },
                    onSubmit: function (e) {
                      return e.preventDefault();
                    },
                  },
                  a.a.createElement(
                    "fieldset",
                    null,
                    a.a.createElement(
                      "legend",
                      null,
                      a.a.createElement(
                        "strong",
                        null,
                        h("option.pageRedactModal.pageSelection"),
                      ),
                    ),
                    a.a.createElement(b.a, {
                      checked: R === M,
                      radio: !0,
                      name: "page-redaction-option",
                      label: h("option.pageRedactModal.current"),
                      value: M,
                    }),
                    a.a.createElement(b.a, {
                      checked: R === A,
                      radio: !0,
                      name: "page-redaction-option",
                      className: "specify-pages-choice",
                      label: W,
                      value: A,
                    }),
                    a.a.createElement(b.a, {
                      checked: R === E,
                      radio: !0,
                      name: "page-redaction-option",
                      label: h("option.pageRedactModal.odd"),
                      value: E,
                    }),
                    a.a.createElement(b.a, {
                      checked: R === k,
                      radio: !0,
                      name: "page-redaction-option",
                      label: h("option.pageRedactModal.even"),
                      value: k,
                      disabled: p,
                    }),
                  ),
                ),
              ),
              a.a.createElement(
                "div",
                { className: "footer" },
                a.a.createElement(g.a, {
                  className: "cancel modal-button secondary-button",
                  dataElement: "modalRedactButton",
                  label: "annotation.redact",
                  disabled: L,
                  onClick: T,
                }),
                a.a.createElement(g.a, {
                  className: "confirm modal-button",
                  dataElement: "modalMarkRedactButton",
                  label: "option.pageRedactModal.addMark",
                  disabled: L,
                  onClick: I,
                }),
              ),
            ),
          );
        };
      O.propTypes = R;
      var _ = O;
      function C(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return L(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          j(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function S(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var o =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != o) {
              var t,
                a,
                i,
                r,
                d = [],
                l = !0,
                c = !1;
              try {
                if (((i = (o = o.call(e)).next), 0 === n)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (t = i.call(o)).done) &&
                    (d.push(t.value), d.length !== n);
                    l = !0
                  );
              } catch (e) {
                ((c = !0), (a = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return d;
            }
          })(e, n) ||
          j(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function j(e, n) {
        if (e) {
          if ("string" == typeof e) return L(e, n);
          var o = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === o && e.constructor && (o = e.constructor.name),
            "Map" === o || "Set" === o
              ? Array.from(e)
              : "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? L(e, n)
                : void 0
          );
        }
      }
      function L(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var o = 0, t = Array(n); o < n; o++) t[o] = e[o];
        return t;
      }
      var D = function () {
        var e = Object(r.d)(),
          n = S(
            Object(r.e)(function (e) {
              return [
                d.a.isElementOpen(e, i.a.PAGE_REDACT_MODAL),
                d.a.getCurrentPage(e),
                d.a.getSelectedThumbnailPageIndexes(e),
                d.a.getPageLabels(e),
                d.a.getActiveToolName(e),
                d.a.getActiveToolStyles(e),
              ];
            }),
            6,
          ),
          o = n[0],
          s = n[1],
          m = n[2],
          g = n[3],
          b = n[4],
          f = n[5],
          h = Object(t.useRef)(0),
          y = m.map(function (e) {
            return e + 1;
          });
        Object(t.useEffect)(
          function () {
            o &&
              e(
                l.a.closeElements([
                  i.a.PRINT_MODAL,
                  i.a.LOADING_MODAL,
                  i.a.PROGRESS_MODAL,
                  i.a.ERROR_MODAL,
                ]),
              );
          },
          [o, e],
        );
        var x = function () {
            return e(l.a.closeElement(i.a.PAGE_REDACT_MODAL));
          },
          w = function () {
            return null != b && b.includes("AnnotationCreateRedaction")
              ? f
              : {};
          },
          v = Object(u.a)().t,
          P = S(Object(t.useState)(!1), 2),
          R = P[0],
          M = P[1];
        return (
          Object(t.useEffect)(function () {
            var e = function () {
              var e = c.a.getDocument(),
                n = e.getDocumentCompletePromise();
              null == n ||
                n.then(function () {
                  var n = e.getPageCount();
                  M(n < 2);
                });
            };
            return (
              c.a.addEventListener("documentLoaded", e),
              function () {
                return c.a.removeEventListener("documentLoaded", e);
              }
            );
          }, []),
          a.a.createElement(_, {
            evenDisabled: R,
            closeModal: x,
            renderCanvases: function (e, n) {
              var t;
              h.current++;
              for (
                var a = h.current, i = C(n), r = c.a.getDocument();
                e.current.firstChild;

              )
                e.current.removeChild(e.current.firstChild);
              if (i) {
                (null === (t = i) || void 0 === t ? void 0 : t.length) > 10 &&
                  (i = i.splice(0, 10));
                var d,
                  l = (function (e, n) {
                    var o =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!o) {
                      if (
                        Array.isArray(e) ||
                        (o = j(e)) ||
                        (n && e && "number" == typeof e.length)
                      ) {
                        o && (e = o);
                        var t = 0,
                          a = function () {};
                        return {
                          s: a,
                          n: function () {
                            return t >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[t++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: a,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    }
                    var i,
                      r = !0,
                      d = !1;
                    return {
                      s: function () {
                        o = o.call(e);
                      },
                      n: function () {
                        var e = o.next();
                        return ((r = e.done), e);
                      },
                      e: function (e) {
                        ((d = !0), (i = e));
                      },
                      f: function () {
                        try {
                          r || null == o.return || o.return();
                        } finally {
                          if (d) throw i;
                        }
                      },
                    };
                  })(i);
                try {
                  var p = function () {
                    var n = d.value,
                      t = null == r ? void 0 : r.getPageInfo(n);
                    if (o && r && e.current && t) {
                      var i = 1,
                        l = e.current.getBoundingClientRect(),
                        c =
                          parseInt(
                            window.getComputedStyle(e.current).borderWidth,
                          ) + 0.1;
                      ((l.height -= c),
                        (l.width -= c),
                        (i =
                          t.width > t.height
                            ? l.width / t.width
                            : l.height / t.height) > 0 &&
                          r.loadCanvas({
                            pageNumber: n,
                            zoom: i,
                            pageRotation: 0,
                            drawComplete: function (o) {
                              var t;
                              a === h.current &&
                                null !== (t = e.current) &&
                                void 0 !== t &&
                                t.appendChild(o) &&
                                (o.setAttribute("role", "img"),
                                o.setAttribute(
                                  "aria-label",
                                  "".concat(v("action.page"), " ").concat(n),
                                ));
                            },
                            allowUseOfOptimizedThumbnail: !0,
                          }));
                    }
                  };
                  for (l.s(); !(d = l.n()).done; ) p();
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              }
            },
            redactPages: function (e) {
              (Object(p.l)(e, w()), x());
            },
            markPages: function (e) {
              (Object(p.a)(e, w()), x());
            },
            currentPage: s,
            selectedPages: y,
            pageLabels: g,
            isOpen: o,
          })
        );
      };
      n.default = D;
    },
  },
]);
//# sourceMappingURL=chunk.75.js.map
