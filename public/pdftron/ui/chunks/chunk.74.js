(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    2023: function (e, n, t) {
      var o = t(35),
        r = t(2024);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(n).forEach((e) => o.push(e)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...e(n, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < n.length; o++) {
            const r = n[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (r.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      o(r, a);
      e.exports = r.locals || {};
    },
    2024: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.OpenFileModal .container .footer .modal-btn.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.OpenFileModal .container .footer .modal-btn.disabled span{color:var(--primary-button-text)}.OpenFileModal .container{overflow-y:unset;width:600px}.OpenFileModal .container .footer .modal-btn{color:var(--tab-footer-button-color);border:none}.OpenFileModal .container .footer .modal-btn.disabled span{color:var(--tab-footer-button-color)}.OpenFileModal .container .tab-list .tab-options-divider+.tab-options-button{border-inline-start:none!important}.OpenFileModal .container .tab-list .tab-options-button{border-top:1px solid var(--tab-border-color);border-bottom:1px solid var(--tab-border-color)}.OpenFileModal .container .tab-list .tab-options-button:first-child{border-inline-start:1px solid var(--tab-border-color)}.OpenFileModal .container .tab-list .tab-options-button:last-child{border-inline-end:1px solid var(--tab-border-color)}.OpenFileModal .container .tab-list .tab-options-button:hover{background:var(--tab-background-color-hover);border-top:1px solid var(--tab-border-color-hover);border-bottom:1px solid var(--tab-border-color-hover);border-inline-end:1px solid var(--tab-border-color-hover)}.OpenFileModal .container .tab-list .tab-options-button:hover+button,.OpenFileModal .container .tab-list .tab-options-button:hover+div{border-inline-start:none}.OpenFileModal .container .tab-list .tab-options-button.selected{background:var(--tab-color-selected);border:1px solid var(--tab-color-selected);color:var(--tab-text-color-selected)}.OpenFileModal .container .tab-list .tab-options-button.selected+button,.OpenFileModal .container .tab-list .tab-options-button.selected+div{border-inline-start:none!important}.OpenFileModal .container .tab-list .tab-options-button:not(.selected){border-inline-end:solid 1px var(--tab-border-color)}.OpenFileModal .image-signature{height:240px!important;width:100%}.OpenFileModal .error{color:red;margin:5px}.OpenFileModal .extension-dropdown{padding:0 16px;display:flex;flex-direction:column}.OpenFileModal .extension-dropdown label,.OpenFileModal .extension-dropdown p{width:100%;font-size:13px;line-height:16px;font-weight:700;order:1;margin-bottom:8px}.OpenFileModal .extension-dropdown label{margin-top:13px}.OpenFileModal .extension-dropdown .Dropdown__wrapper{order:2;width:100%}.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown{width:100%!important}.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown:disabled{border:1px solid var(--gray-4)}.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown:disabled .arrow,.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown:disabled .picked-option{color:var(--gray-5)}.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown__items{width:100%}.OpenFileModal .extension-dropdown .Dropdown__wrapper .arrow{flex:unset;width:12px;height:16px;margin-top:2px}.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown .picked-option .picked-option-text{flex:none;width:unset}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2134: function (e, n, t) {
      "use strict";
      t.r(n);
      (t(9),
        t(10),
        t(14),
        t(21),
        t(76),
        t(20),
        t(12),
        t(267),
        t(118),
        t(22),
        t(18),
        t(26),
        t(16),
        t(40),
        t(24),
        t(42),
        t(43),
        t(8),
        t(56),
        t(17),
        t(19),
        t(11),
        t(153),
        t(13),
        t(378),
        t(379),
        t(380));
      var o = t(0),
        r = t.n(o),
        a = t(6),
        i = t(136),
        l = t(15),
        d = t.n(l),
        s = t(39),
        c = t(41),
        p = t(305),
        u = t(138),
        b = t(1878),
        m = t(483),
        f = t(4),
        w = t(3),
        h = t(5),
        v = t(373),
        E = t(182),
        O = (t(1798), t(2023), t(1)),
        x = t(2),
        y = t.n(x);
      function M() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          n,
          t = "function" == typeof Symbol ? Symbol : {},
          o = t.iterator || "@@iterator",
          r = t.toStringTag || "@@toStringTag";
        function a(t, o, r, a) {
          var d = o && o.prototype instanceof l ? o : l,
            s = Object.create(d.prototype);
          return (
            g(
              s,
              "_invoke",
              (function (t, o, r) {
                var a,
                  l,
                  d,
                  s = 0,
                  c = r || [],
                  p = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: b,
                    f: b.bind(e, 4),
                    d: function (n, t) {
                      return ((a = n), (l = 0), (d = e), (u.n = t), i);
                    },
                  };
                function b(t, o) {
                  for (
                    l = t, d = o, n = 0;
                    !p && s && !r && n < c.length;
                    n++
                  ) {
                    var r,
                      a = c[n],
                      b = u.p,
                      m = a[2];
                    t > 3
                      ? (r = m === o) &&
                        ((d = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                        (a[4] = a[5] = e))
                      : a[0] <= b &&
                        ((r = t < 2 && b < a[1])
                          ? ((l = 0), (u.v = o), (u.n = a[1]))
                          : b < m &&
                            (r = t < 3 || a[0] > o || o > m) &&
                            ((a[4] = t), (a[5] = o), (u.n = m), (l = 0)));
                  }
                  if (r || t > 1) return i;
                  throw ((p = !0), o);
                }
                return function (r, c, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === c && b(c, m), l = c, d = m;
                    (n = l < 2 ? e : d) || !p;

                  ) {
                    a ||
                      (l
                        ? l < 3
                          ? (l > 1 && (u.n = -1), b(l, d))
                          : (u.n = d)
                        : (u.v = d));
                    try {
                      if (((s = 2), a)) {
                        if ((l || (r = "next"), (n = a[r]))) {
                          if (!(n = n.call(a, d)))
                            throw TypeError("iterator result is not an object");
                          if (!n.done) return n;
                          ((d = n.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (n = a.return) && n.call(a),
                            l < 2 &&
                              ((d = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        a = e;
                      } else if ((n = (p = u.n < 0) ? d : t.call(o, u)) !== i)
                        break;
                    } catch (n) {
                      ((a = e), (l = 1), (d = n));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: n, done: p };
                };
              })(t, r, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function l() {}
        function d() {}
        function s() {}
        n = Object.getPrototypeOf;
        var c = [][o]
            ? n(n([][o]()))
            : (g((n = {}), o, function () {
                return this;
              }),
              n),
          p = (s.prototype = l.prototype = Object.create(c));
        function u(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), g(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(p)),
            e
          );
        }
        return (
          (d.prototype = s),
          g(p, "constructor", s),
          g(s, "constructor", d),
          (d.displayName = "GeneratorFunction"),
          g(s, r, "GeneratorFunction"),
          g(p),
          g(p, r, "Generator"),
          g(p, o, function () {
            return this;
          }),
          g(p, "toString", function () {
            return "[object Generator]";
          }),
          (M = function () {
            return { w: a, m: u };
          })()
        );
      }
      function g(e, n, t, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (g = function (e, n, t, o) {
          if (n)
            r
              ? r(e, n, {
                  value: t,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[n] = t);
          else {
            var a = function (n, t) {
              g(e, n, function (e) {
                return this._invoke(n, t, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, n, t, o);
      }
      function F(e, n, t, o, r, a, i) {
        try {
          var l = e[a](i),
            d = l.value;
        } catch (e) {
          return void t(e);
        }
        l.done ? n(d) : Promise.resolve(d).then(o, r);
      }
      function _(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (o, r) {
            var a = e.apply(n, t);
            function i(e) {
              F(a, o, r, i, l, "next", e);
            }
            function l(e) {
              F(a, o, r, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function D(e, n) {
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
              var o,
                r,
                a,
                i,
                l = [],
                d = !0,
                s = !1;
              try {
                if (((a = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    d = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !d &&
                    null != t.return &&
                    ((i = t.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return A(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? A(e, n)
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
      function A(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var k = function (e) {
        var n = e.isDisabled,
          t = e.isOpen,
          l = e.tabManager,
          w = e.closeElements,
          x = Object(p.a)().t,
          y = D(
            Object(a.e)(function (e) {
              return [f.a.getSelectedTab(e, "openFileModal")];
            }),
            1,
          )[0],
          g = D(Object(o.useState)(""), 2),
          F = g[0],
          A = g[1],
          k = D(Object(o.useState)("pdf"), 2),
          S = k[0],
          N = k[1],
          j = D(Object(o.useState)(), 2),
          T = j[0],
          L = j[1],
          R = D(Object(o.useState)(), 2),
          P = R[0],
          I = R[1],
          C = D(
            Object(o.useState)({
              fileError: "",
              urlError: "",
              extensionError: "",
            }),
            2,
          ),
          G = C[0],
          H = C[1],
          B = D(Object(o.useState)(null), 2),
          U = B[0],
          q = B[1],
          W = function () {
            (A(""),
              H({ fileError: "", urlError: "" }),
              L(null),
              N("pdf"),
              I(null),
              w([h.a.OPEN_FILE_MODAL]));
          };
        Object(o.useEffect)(
          function () {
            t
              ? w([
                  h.a.PRINT_MODAL,
                  h.a.LOADING_MODAL,
                  h.a.PROGRESS_MODAL,
                  h.a.ERROR_MODAL,
                  h.a.MODEL3D_MODAL,
                ])
              : (A(""),
                H({ fileError: "", urlError: "" }),
                L(null),
                N(null),
                I(null));
          },
          [t],
        );
        var z = (function () {
            var e = _(
              M().m(function e(n, t, o, r) {
                var a, d, s;
                return M().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          if ((q(null), n)) {
                            e.n = 1;
                            break;
                          }
                          return e.a(
                            2,
                            H({ urlError: "URL or File must be provided" }),
                          );
                        case 1:
                          if (t && -1 !== Z.indexOf(t)) {
                            e.n = 2;
                            break;
                          }
                          return e.a(
                            2,
                            H({ extensionError: "Extension must be provided" }),
                          );
                        case 2:
                          return (
                            (a = !r || i.a.MAX_FILE_SIZE > r),
                            (e.p = 3),
                            (e.n = 4),
                            O.a.createDocument(n)
                          );
                        case 4:
                          if (!(d = e.v)) {
                            e.n = 5;
                            break;
                          }
                          return (
                            (e.n = 5),
                            l.addTab(d, {
                              extension: t,
                              filename: o,
                              setActive: !0,
                              saveCurrentActiveTabState: !0,
                              useDB: a,
                            })
                          );
                        case 5:
                          e.n = 7;
                          break;
                        case 6:
                          ((e.p = 6),
                            (s = e.v),
                            q(x("message.urlInputFileLoadError")),
                            console.error("Error adding tab:", s));
                        case 7:
                          return e.a(2);
                      }
                  },
                  e,
                  null,
                  [[3, 6]],
                );
              }),
            );
            return function (n, t, o, r) {
              return e.apply(this, arguments);
            };
          })(),
          V = d()({ Modal: !0, OpenFileModal: !0, open: t, closed: !t }),
          J = /(?:\.([^.?]+))?$/,
          $ = (function () {
            var e = _(
              M().m(function e(n) {
                var t, o, r, a;
                return M().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if ((H(null), n)) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2);
                      case 1:
                        if (!(n instanceof window.Core.Document)) {
                          e.n = 3;
                          break;
                        }
                        return ((e.n = 2), z(n, n.type, n.filename));
                      case 2:
                        e.n = 4;
                        break;
                      case 3:
                        return (
                          (t =
                            window.Core.mimeTypeToExtension[n.type] ||
                            J.exec(n.name)[1] ||
                            null),
                          (o = n.name),
                          (r = n.size),
                          (a = URL.createObjectURL(n)),
                          A(a),
                          L(o),
                          N(t),
                          I(r),
                          (e.n = 4),
                          z(n, t, o, r)
                        );
                      case 4:
                        return e.a(2);
                    }
                }, e);
              }),
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          X = (function () {
            var e = _(
              M().m(function e(n) {
                var t;
                return M().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        (H(null),
                          A(n.trim()),
                          (t = n
                            .substring(n.lastIndexOf("/") + 1)
                            .split("?")[0]),
                          L(t),
                          N(J.exec(t)[1]),
                          I(null));
                      case 1:
                        return e.a(2);
                    }
                }, e);
              }),
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          Z = !!Object(s.a)("webviewerServerURL", null)
            ? window.Core.SupportedFileFormats.SERVER
            : window.Core.SupportedFileFormats.CLIENT;
        return (
          (Z = Z.reduce(function (e, n) {
            return (-1 === e.indexOf(n) && e.push(n), e);
          }, [])),
          !n &&
            r.a.createElement(
              "div",
              {
                className: V,
                "data-element": h.a.OPEN_FILE_MODAL,
                onMouseDown: W,
              },
              r.a.createElement(
                "div",
                {
                  className: "container",
                  onMouseDown: function (e) {
                    return e.stopPropagation();
                  },
                },
                r.a.createElement(
                  v.a,
                  {
                    title: x("OpenFile.newTab"),
                    isOpen: t,
                    closeButtonDataElement: "openFileModalClose",
                    onCloseClick: W,
                    swipeToClose: !0,
                    closeHandler: W,
                  },
                  r.a.createElement("div", { className: "swipe-indicator" }),
                  r.a.createElement(
                    u.d,
                    { className: "open-file-modal-tabs", id: "openFileModal" },
                    r.a.createElement(
                      "div",
                      { className: "tabs-header-container" },
                      r.a.createElement(
                        "div",
                        { role: "tablist", className: "tab-list" },
                        r.a.createElement(
                          u.a,
                          { dataElement: "urlInputPanelButton" },
                          r.a.createElement(
                            "button",
                            { role: "tab", className: "tab-options-button" },
                            x("link.url"),
                          ),
                        ),
                        r.a.createElement("div", {
                          className: "tab-options-divider",
                        }),
                        r.a.createElement(
                          u.a,
                          { dataElement: "filePickerPanelButton" },
                          r.a.createElement(
                            "button",
                            { role: "tab", className: "tab-options-button" },
                            x("option.pageReplacementModal.localFile"),
                          ),
                        ),
                      ),
                    ),
                    r.a.createElement(
                      u.c,
                      { dataElement: "urlInputPanel" },
                      r.a.createElement(
                        "div",
                        { className: "panel-body" },
                        r.a.createElement(b.a, {
                          onFileSelect: function (e) {
                            X(e);
                          },
                          error: U,
                          acceptFormats: Z,
                          extension: F.length && null != S && S.length ? S : "",
                          setExtension: N,
                          defaultValue: F,
                        }),
                      ),
                    ),
                    r.a.createElement(
                      u.c,
                      { dataElement: "filePickerPanel" },
                      r.a.createElement(
                        "div",
                        { className: "panel-body" },
                        r.a.createElement(m.a, {
                          onFileProcessed: function (e) {
                            return $(e);
                          },
                        }),
                      ),
                    ),
                  ),
                  r.a.createElement("div", {
                    className: "page-replacement-divider",
                  }),
                  r.a.createElement(
                    "div",
                    { className: "footer" },
                    (null == G ? void 0 : G.urlError) &&
                      r.a.createElement(
                        "p",
                        { className: "error" },
                        "* ",
                        G.urlError,
                      ),
                    (null == G ? void 0 : G.fileError) &&
                      r.a.createElement(
                        "p",
                        { className: "error" },
                        "* ",
                        G.fileError,
                      ),
                    (null == G ? void 0 : G.extensionError) &&
                      r.a.createElement(
                        "p",
                        { className: "error" },
                        "* ",
                        G.extensionError,
                      ),
                    r.a.createElement(c.a, {
                      className: "modal-btn",
                      dataElement: "linkSubmitButton",
                      label: x("OpenFile.addTab"),
                      style: { width: 90 },
                      onClick: Object(E.a)(function () {
                        return z(F, S, T, P);
                      }),
                      disabled:
                        "urlInputPanelButton" !== y ||
                        !F.length ||
                        !(null != S && S.length),
                    }),
                  ),
                ),
              ),
            )
        );
      };
      k.propTypes = {
        isDisabled: y.a.bool,
        isOpen: y.a.bool,
        tabManager: y.a.instanceOf(i.a).isRequired,
        closeElements: y.a.func.isRequired,
      };
      var S = { closeElements: w.a.closeElements },
        N = Object(a.b)(function (e) {
          return {
            isDisabled: f.a.isElementDisabled(e, h.a.OPEN_FILE_MODAL),
            isOpen: f.a.isElementOpen(e, h.a.OPEN_FILE_MODAL),
            tabManager: f.a.getTabManager(e),
          };
        }, S)(k);
      n.default = N;
    },
  },
]);
//# sourceMappingURL=chunk.74.js.map
