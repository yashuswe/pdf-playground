(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    1737: function (e, t, n) {
      var i = n(35),
        a = n(1738);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const i = [];
                return (
                  n.querySelectorAll(t).forEach((e) => i.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && i.push(...e(t, n.shadowRoot));
                  }),
                  i
                );
              })("apryse-webviewer")));
          const n = [];
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            if (0 === i)
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
      i(a, o);
      e.exports = a.locals || {};
    },
    1738: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.fileAttachmentPanel{z-index:65;display:flex;flex-direction:column;transition:transform .3s ease,visibility 0s ease .3s}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileAttachmentPanel{inset-block-start:0;width:100%;height:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileAttachmentPanel{inset-block-start:0;width:100%;height:100%}}.open.fileAttachmentPanel{transform:none;visibility:visible;transition:transform .3s ease,visibility 0s ease 0s}.fileAttachmentPanel .empty-panel-container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;padding:36px;grid-gap:8px;gap:8px}.fileAttachmentPanel .empty-panel-container .empty-icon{width:60px;height:60px;color:var(--gray-6);fill:var(--gray-6)}.fileAttachmentPanel .empty-panel-container .empty-icon svg{width:60px;height:60px}.fileAttachmentPanel .empty-panel-container .empty-message{text-align:center;max-width:131px;font-size:13px}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileAttachmentPanel .empty-panel-container .empty-message{line-height:15px}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileAttachmentPanel .empty-panel-container .empty-message{line-height:15px}}.fileAttachmentPanel{display:block;font-size:var(--font-size-default)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileAttachmentPanel{margin:16px;width:auto;flex-grow:1;overflow-y:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileAttachmentPanel{margin:16px;width:auto;flex-grow:1;overflow-y:auto}}.fileAttachmentPanel .section{margin-bottom:8px}.fileAttachmentPanel .section h2.title{font-weight:700;font-size:13px;padding-inline-start:var(--fileAttachment-title-padding);margin:12px 0}.fileAttachmentPanel .section ul.downloadable{padding-inline-start:var(--fileAttachment-list-padding)}.fileAttachmentPanel .section ul.downloadable>li{width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:4px 0}.fileAttachmentPanel .section ul.downloadable>li>button{cursor:pointer;color:var(--secondary-button-text);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:4px 0}.fileAttachmentPanel .section ul.downloadable>li>button:hover{color:var(--secondary-button-hover)}.fileAttachmentPanel .section ul.downloadable .embedSpinner{display:flex;flex-direction:row;justify-content:space-between}.fileAttachmentPanel .section ul.downloadable .embedSpinner .spinner{margin:0}.fileAttachmentPanel .section ul ul{padding-inline-start:10px;list-style-type:none}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1782: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(38),
        n(21),
        n(20),
        n(12),
        n(44),
        n(22),
        n(18),
        n(26),
        n(16),
        n(40),
        n(24),
        n(228),
        n(42),
        n(43),
        n(8),
        n(56),
        n(1650),
        n(17),
        n(19),
        n(11),
        n(180),
        n(13),
        n(94));
      var i = n(0),
        a = n.n(i),
        o = n(305),
        r = n(289),
        l = n(471),
        c = n(172),
        s = n(51),
        d = n(1),
        p = n(6),
        m = n(4),
        u = n(3),
        f = n(5),
        h = (n(1737), n(32));
      function b() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          a = n.toStringTag || "@@toStringTag";
        function o(n, i, a, o) {
          var c = i && i.prototype instanceof l ? i : l,
            s = Object.create(c.prototype);
          return (
            y(
              s,
              "_invoke",
              (function (n, i, a) {
                var o,
                  l,
                  c,
                  s = 0,
                  d = a || [],
                  p = !1,
                  m = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: u,
                    f: u.bind(e, 4),
                    d: function (t, n) {
                      return ((o = t), (l = 0), (c = e), (m.n = n), r);
                    },
                  };
                function u(n, i) {
                  for (
                    l = n, c = i, t = 0;
                    !p && s && !a && t < d.length;
                    t++
                  ) {
                    var a,
                      o = d[t],
                      u = m.p,
                      f = o[2];
                    n > 3
                      ? (a = f === i) &&
                        ((c = o[(l = o[4]) ? 5 : ((l = 3), 3)]),
                        (o[4] = o[5] = e))
                      : o[0] <= u &&
                        ((a = n < 2 && u < o[1])
                          ? ((l = 0), (m.v = i), (m.n = o[1]))
                          : u < f &&
                            (a = n < 3 || o[0] > i || i > f) &&
                            ((o[4] = n), (o[5] = i), (m.n = f), (l = 0)));
                  }
                  if (a || n > 1) return r;
                  throw ((p = !0), i);
                }
                return function (a, d, f) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === d && u(d, f), l = d, c = f;
                    (t = l < 2 ? e : c) || !p;

                  ) {
                    o ||
                      (l
                        ? l < 3
                          ? (l > 1 && (m.n = -1), u(l, c))
                          : (m.n = c)
                        : (m.v = c));
                    try {
                      if (((s = 2), o)) {
                        if ((l || (a = "next"), (t = o[a]))) {
                          if (!(t = t.call(o, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = o.return) && t.call(o),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  a +
                                  "' method",
                              )),
                              (l = 1)));
                        o = e;
                      } else if ((t = (p = m.n < 0) ? c : n.call(i, m)) !== r)
                        break;
                    } catch (t) {
                      ((o = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: p };
                };
              })(n, a, o),
              !0,
            ),
            s
          );
        }
        var r = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var d = [][i]
            ? t(t([][i]()))
            : (y((t = {}), i, function () {
                return this;
              }),
              t),
          p = (s.prototype = l.prototype = Object.create(d));
        function m(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), y(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(p)),
            e
          );
        }
        return (
          (c.prototype = s),
          y(p, "constructor", s),
          y(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          y(s, a, "GeneratorFunction"),
          y(p),
          y(p, a, "Generator"),
          y(p, i, function () {
            return this;
          }),
          y(p, "toString", function () {
            return "[object Generator]";
          }),
          (b = function () {
            return { w: o, m: m };
          })()
        );
      }
      function y(e, t, n, i) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (e) {
          a = 0;
        }
        (y = function (e, t, n, i) {
          if (t)
            a
              ? a(e, t, {
                  value: n,
                  enumerable: !i,
                  configurable: !i,
                  writable: !i,
                })
              : (e[t] = n);
          else {
            var o = function (t, n) {
              y(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (o("next", 0), o("throw", 1), o("return", 2));
          }
        })(e, t, n, i);
      }
      function w(e, t, n, i, a, o, r) {
        try {
          var l = e[o](r),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(i, a);
      }
      function v(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, a) {
            var o = e.apply(t, n);
            function r(e) {
              w(o, i, a, r, l, "next", e);
            }
            function l(e) {
              w(o, i, a, r, l, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function g(e, t) {
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
              var i,
                a,
                o,
                r,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (i = o.call(n)).done) &&
                    (l.push(i.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return A(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? A(e, t)
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
      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      var x = function (e) {
          return e.match(/[^\\\/]+$/g)[0];
        },
        E = function (e, t, n, i) {
          var o = (e = x(e)).split(".").pop().toUpperCase(),
            r = function (e) {
              ("Enter" !== e.key && " " !== e.key) || t();
            };
          return i === n
            ? a.a.createElement(
                "li",
                { key: n },
                a.a.createElement(
                  "button",
                  {
                    className: "embedSpinner",
                    onClick: t,
                    onKeyDown: r,
                    style: {
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                      padding: 0,
                    },
                    type: "button",
                  },
                  "[".concat(o, "] ").concat(e),
                  a.a.createElement(l.a, { height: 15, width: 15 }),
                ),
              )
            : a.a.createElement(
                "li",
                { key: n },
                a.a.createElement(
                  "button",
                  {
                    className: "embedSpinner",
                    onClick: t,
                    onKeyDown: r,
                    style: {
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                      padding: 0,
                    },
                    type: "button",
                  },
                  "[".concat(o, "] ").concat(e),
                ),
              );
        },
        P = { embeddedFiles: [], fileAttachmentAnnotations: [] },
        k = function (e) {
          var t = e.initialFiles,
            n = void 0 === t ? P : t,
            l = g(Object(o.a)(), 1)[0],
            y = Object(p.d)(),
            w = g(Object(i.useState)(n), 2),
            A = w[0],
            k = w[1],
            O = Object(p.e)(m.a.getIsMultiTab),
            j = Object(p.e)(m.a.getTabManager),
            T = g(Object(i.useState)(null), 2),
            N = T[0],
            _ = T[1];
          if (
            (Object(i.useEffect)(function () {
              var e = (function () {
                var e = v(
                  b().m(function e() {
                    var t;
                    return b().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return ((e.n = 1), Object(r.b)());
                          case 1:
                            ((t = e.v), k(t));
                          case 2:
                            return e.a(2);
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              return (
                d.a.addEventListener("annotationChanged", e),
                d.a.addEventListener("documentLoaded", e),
                e(),
                function () {
                  (d.a.removeEventListener("annotationChanged", e),
                    d.a.removeEventListener("documentLoaded", e));
                }
              );
            }, []),
            0 === A.embeddedFiles.length &&
              0 === Object.entries(A.fileAttachmentAnnotations).length)
          )
            return a.a.createElement(
              "div",
              { className: "fileAttachmentPanel" },
              a.a.createElement(
                "div",
                { className: "empty-panel-container" },
                a.a.createElement(s.a, {
                  className: "empty-icon",
                  glyph: h.c[h.e.FILE_ATTACHMENT].icon,
                }),
                a.a.createElement(
                  "div",
                  { className: "empty-message" },
                  l("message.noAttachments"),
                ),
              ),
            );
          var S = (function () {
            var e = v(
              b().m(function e(t) {
                return b().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if (!O) {
                          e.n = 1;
                          break;
                        }
                        (y(u.a.openElement(f.a.LOADING_MODAL)),
                          setTimeout(
                            v(
                              b().m(function e() {
                                var n, i, a;
                                return b().w(function (e) {
                                  for (;;)
                                    switch (e.n) {
                                      case 0:
                                        return ((e.n = 1), t.getFileData());
                                      case 1:
                                        return (
                                          (n = e.v),
                                          (i = x(t.filename)),
                                          (e.n = 2),
                                          j.addTab(n, { filename: i })
                                        );
                                      case 2:
                                        return (
                                          (a = e.v),
                                          y(
                                            u.a.closeElement(f.a.LOADING_MODAL),
                                          ),
                                          y(u.a.closeElement(f.a.LEFT_PANEL)),
                                          (e.n = 3),
                                          j.setActiveTab(a)
                                        );
                                      case 3:
                                        return e.a(2);
                                    }
                                }, e);
                              }),
                            ),
                            100,
                          ),
                          (e.n = 2));
                        break;
                      case 1:
                        return e.a(
                          2,
                          d.a
                            .getAnnotationManager()
                            .trigger("annotationDoubleClicked", t),
                        );
                      case 2:
                        return e.a(2);
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return a.a.createElement(
            "div",
            { className: "fileAttachmentPanel" },
            a.a.createElement(
              "div",
              { className: "section" },
              A.embeddedFiles.length
                ? a.a.createElement(
                    "h2",
                    { className: "title" },
                    l("message.embeddedFiles"),
                  )
                : null,
              a.a.createElement(
                "ul",
                { className: "downloadable" },
                A.embeddedFiles.map(function (e, t) {
                  return E(
                    x(e.filename),
                    function () {
                      (_("embeddedFile_".concat(t)),
                        Object(r.a)(e.fileObject)
                          .then(function (t) {
                            Object(c.saveAs)(t, x(e.filename));
                          })
                          .finally(function () {
                            _(null);
                          }));
                    },
                    "embeddedFile_".concat(t),
                    N,
                  );
                }),
              ),
            ),
            Object.entries(A.fileAttachmentAnnotations).map(function (e) {
              var t = g(e, 2),
                n = t[0],
                i = t[1];
              return a.a.createElement(
                "div",
                { key: n, className: "section" },
                a.a.createElement(
                  "h2",
                  { className: "title" },
                  l("message.pageNum"),
                  " ",
                  n,
                ),
                a.a.createElement(
                  "ul",
                  { className: "downloadable" },
                  i.map(function (e, t) {
                    return E(
                      x(e.filename),
                      v(
                        b().m(function t() {
                          return b().w(function (t) {
                            for (;;)
                              switch (t.n) {
                                case 0:
                                  return (
                                    d.a.setCurrentPage(e.PageNumber),
                                    d.a.selectAnnotation(e),
                                    (t.n = 1),
                                    S(e)
                                  );
                                case 1:
                                  return t.a(2);
                              }
                          }, t);
                        }),
                      ),
                      "fileAttachmentAnnotation_".concat(t),
                    );
                  }),
                ),
              );
            }),
          );
        };
      t.default = k;
    },
  },
]);
//# sourceMappingURL=chunk.63.js.map
