(window.webpackJsonp = window.webpackJsonp || []).push([
  [87],
  {
    2130: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(34),
        n(27),
        n(21),
        n(50),
        n(76),
        n(20),
        n(12),
        n(44),
        n(22),
        n(18),
        n(26),
        n(16),
        n(40),
        n(24),
        n(42),
        n(43),
        n(8),
        n(111),
        n(56),
        n(17),
        n(19),
        n(132),
        n(62),
        n(11),
        n(180),
        n(29),
        n(13));
      var a = n(0),
        r = n.n(a),
        o = n(15),
        i = n.n(o),
        l = n(6),
        c = n(305),
        u = n(68),
        s = n(1),
        f = n(138),
        d = n(41),
        m = n(3),
        p = n(4),
        b = n(5),
        v = n(373),
        h = n(60);
      n(1866);
      function g(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return N(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          k(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function y() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function o(n, a, r, o) {
          var c = a && a.prototype instanceof l ? a : l,
            u = Object.create(c.prototype);
          return (
            E(
              u,
              "_invoke",
              (function (n, a, r) {
                var o,
                  l,
                  c,
                  u = 0,
                  s = r || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: m,
                    f: m.bind(e, 4),
                    d: function (t, n) {
                      return ((o = t), (l = 0), (c = e), (d.n = n), i);
                    },
                  };
                function m(n, a) {
                  for (
                    l = n, c = a, t = 0;
                    !f && u && !r && t < s.length;
                    t++
                  ) {
                    var r,
                      o = s[t],
                      m = d.p,
                      p = o[2];
                    n > 3
                      ? (r = p === a) &&
                        ((c = o[(l = o[4]) ? 5 : ((l = 3), 3)]),
                        (o[4] = o[5] = e))
                      : o[0] <= m &&
                        ((r = n < 2 && m < o[1])
                          ? ((l = 0), (d.v = a), (d.n = o[1]))
                          : m < p &&
                            (r = n < 3 || o[0] > a || a > p) &&
                            ((o[4] = n), (o[5] = a), (d.n = p), (l = 0)));
                  }
                  if (r || n > 1) return i;
                  throw ((f = !0), a);
                }
                return function (r, s, p) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === s && m(s, p), l = s, c = p;
                    (t = l < 2 ? e : c) || !f;

                  ) {
                    o ||
                      (l
                        ? l < 3
                          ? (l > 1 && (d.n = -1), m(l, c))
                          : (d.n = c)
                        : (d.v = c));
                    try {
                      if (((u = 2), o)) {
                        if ((l || (r = "next"), (t = o[r]))) {
                          if (!(t = t.call(o, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = o.return) && t.call(o),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        o = e;
                      } else if ((t = (f = d.n < 0) ? c : n.call(a, d)) !== i)
                        break;
                    } catch (t) {
                      ((o = e), (l = 1), (c = t));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(n, r, o),
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
        var s = [][a]
            ? t(t([][a]()))
            : (E((t = {}), a, function () {
                return this;
              }),
              t),
          f = (u.prototype = l.prototype = Object.create(s));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), E(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (c.prototype = u),
          E(f, "constructor", u),
          E(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          E(u, r, "GeneratorFunction"),
          E(f),
          E(f, r, "Generator"),
          E(f, a, function () {
            return this;
          }),
          E(f, "toString", function () {
            return "[object Generator]";
          }),
          (y = function () {
            return { w: o, m: d };
          })()
        );
      }
      function E(e, t, n, a) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (E = function (e, t, n, a) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !a,
                  configurable: !a,
                  writable: !a,
                })
              : (e[t] = n);
          else {
            var o = function (t, n) {
              E(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (o("next", 0), o("throw", 1), o("return", 2));
          }
        })(e, t, n, a);
      }
      function w(e, t, n, a, r, o, i) {
        try {
          var l = e[o](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(a, r);
      }
      function A(e, t) {
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
              var a,
                r,
                o,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (a = o.call(n)).done) &&
                    (l.push(a.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          k(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function k(e, t) {
        if (e) {
          if ("string" == typeof e) return N(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? N(e, t)
                : void 0
          );
        }
      }
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var S = function (e) {
        var t = e.rightClickedAnnotation,
          n = e.setRightClickedAnnotation,
          o = A(
            Object(l.e)(function (e) {
              return [
                p.a.isElementDisabled(e, b.a.LINK_MODAL),
                p.a.isElementOpen(e, b.a.LINK_MODAL),
                p.a.getTotalPages(e),
                p.a.getCurrentPage(e),
                p.a.getSelectedTab(e, b.a.LINK_MODAL),
                p.a.getPageLabels(e),
                p.a.isRightClickAnnotationPopupEnabled(e),
                p.a.getActiveDocumentViewerKey(e),
                p.a.getSelectedTab(e, "linkModal"),
              ];
            }),
            9,
          ),
          E = o[0],
          k = o[1],
          N = o[2],
          S = o[3],
          O = o[4],
          C = o[5],
          P = o[6],
          L = o[7],
          j = o[8],
          I = A(Object(c.a)(), 1)[0],
          T = Object(l.d)(),
          M = r.a.createRef(),
          U = r.a.createRef(),
          x = A(Object(a.useState)(""), 2),
          _ = x[0],
          D = x[1],
          R = A(Object(a.useState)(""), 2),
          G = R[0],
          B = R[1],
          H = s.a.isAnnotationSelected(t, L),
          K = s.a.getSelectedAnnotations(L),
          F = s.a.getAnnotationManager(L),
          W = function () {
            (T(m.a.closeElement(b.a.LINK_MODAL)),
              D(""),
              s.a.setToolMode(u.a),
              n(null));
          },
          X = function (e, t, n, a) {
            var r =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : S,
              o = new window.Core.Annotations.Link();
            return (
              (o.PageNumber = r),
              (o.StrokeColor = new window.Core.Annotations.Color(0, 165, 228)),
              (o.StrokeStyle = "underline"),
              (o.StrokeThickness = 2),
              (o.Author = s.a.getCurrentUser()),
              (o.Subject = "Link"),
              (o.X = e),
              (o.Y = t),
              (o.Width = n),
              (o.Height = a),
              o
            );
          },
          Y = function (e) {
            var n = [],
              a = s.a.getSelectedTextQuads(L);
            if (a) {
              var r = s.a.getSelectedText(L),
                o = function (t) {
                  var o = [];
                  (a[t].forEach(function (e) {
                    o.push(
                      X(
                        Math.min(e.x1, e.x3),
                        Math.min(e.y1, e.y3),
                        Math.abs(e.x1 - e.x3),
                        Math.abs(e.y1 - e.y3),
                        parseInt(t),
                      ),
                    );
                  }),
                    z(o, a[t], r, e),
                    n.push.apply(n, o));
                };
              for (var i in a) o(i);
            }
            return (
              (!P || H ? K : [t]).forEach(function (t) {
                if (t) {
                  var a = F.getGroupAnnotations(t);
                  if (a.length > 1) {
                    var r = a.filter(function (e) {
                      return e instanceof window.Core.Annotations.Link;
                    });
                    r.length > 0 && s.a.deleteAnnotations(r, L);
                  }
                  var o = X(t.X, t.Y, t.Width, t.Height);
                  (o.addAction("U", e),
                    s.a.addAnnotations([o], L),
                    n.push(o),
                    F.groupAnnotations(t, [o]));
                }
              }),
              n
            );
          },
          z = (function () {
            var e,
              t =
                ((e = y().m(function e(t, n, a, r) {
                  var o, i;
                  return y().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          ((o = t[0]),
                            ((i =
                              new window.Core.Annotations.TextHighlightAnnotation()).PageNumber =
                              o.PageNumber),
                            (i.X = o.X),
                            (i.Y = o.Y),
                            (i.Width = o.Width),
                            (i.Height = o.Height),
                            (i.StrokeColor = new window.Core.Annotations.Color(
                              0,
                              0,
                              0,
                              0,
                            )),
                            (i.Opacity = 0),
                            (i.Quads = n),
                            (i.Author = s.a.getCurrentUser(L)),
                            i.setContents(a),
                            t.forEach(function (e, t) {
                              (e.addAction("U", r),
                                0 === t
                                  ? s.a.addAnnotations([e, i], L)
                                  : s.a.addAnnotations([e], L));
                            }),
                            F.groupAnnotations(i, t, L));
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (a, r) {
                    var o = e.apply(t, n);
                    function i(e) {
                      w(o, a, r, i, l, "next", e);
                    }
                    function l(e) {
                      w(o, a, r, i, l, "throw", e);
                    }
                    i(void 0);
                  });
                });
            return function (e, n, a, r) {
              return t.apply(this, arguments);
            };
          })(),
          J = function (e) {
            if ((e.preventDefault(), _.length)) {
              var t;
              t = s.a.isValidURI(_) ? _ : "https://".concat(_);
              var n = new window.Core.Actions.URI({ uri: t }),
                a = Y(n).map(function (e) {
                  return e.PageNumber;
                });
              ((a = g(new Set(a))).forEach(function (e) {
                s.a.drawAnnotations(e, null, !0, void 0, L);
              }),
                W());
            }
          },
          Q = function (e) {
            e.preventDefault();
            var t = {
                dest: new (0, window.Core.Actions.GoTo.Dest)({
                  page: C.indexOf(G) + 1,
                }),
              },
              n = new window.Core.Actions.GoTo(t),
              a = Y(n).map(function (e) {
                return e.PageNumber;
              });
            ((a = g(new Set(a))).forEach(function (e) {
              s.a.drawAnnotations(e, null, !0, void 0, L);
            }),
              W());
          };
        (Object(a.useEffect)(
          function () {
            if (k) {
              var e = s.a.getSelectedText(L);
              if (e) {
                var t = e.match(
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                );
                t && t.length > 0 && D(t[0]);
              }
              B(C.length > 0 ? C[0] : "1");
            }
          },
          [N, k],
        ),
          Object(a.useEffect)(
            function () {
              "PageNumberPanelButton" === O && k
                ? U.current.focus()
                : "URLPanelButton" === O && k && M.current.focus();
            },
            [O, k, U, M],
          ),
          Object(a.useEffect)(function () {
            return (
              s.a.addEventListener("documentUnloaded", W),
              function () {
                s.a.removeEventListener("documentUnloaded", W);
              }
            );
          }, []));
        var V = i()({ Modal: !0, LinkModal: !0, open: k, closed: !k });
        return E
          ? null
          : r.a.createElement(
              h.a,
              { dataElement: b.a.LINK_MODAL, className: V },
              r.a.createElement(
                v.a,
                {
                  title: I("link.insertLinkOrPage"),
                  isOpen: k,
                  closeHandler: W,
                  onCloseClick: W,
                  swipeToClose: !0,
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
                    f.d,
                    { id: "linkModal" },
                    r.a.createElement(
                      "div",
                      { className: "tabs-header-container" },
                      r.a.createElement(
                        "div",
                        { className: "tab-list" },
                        r.a.createElement(
                          f.a,
                          { dataElement: "URLPanelButton" },
                          r.a.createElement(
                            "button",
                            { className: "tab-options-button" },
                            I("link.url"),
                          ),
                        ),
                        r.a.createElement("div", {
                          className: "tab-options-divider",
                        }),
                        r.a.createElement(
                          f.a,
                          { dataElement: "PageNumberPanelButton" },
                          r.a.createElement(
                            "button",
                            { className: "tab-options-button" },
                            I("link.page"),
                          ),
                        ),
                      ),
                    ),
                    r.a.createElement(
                      f.c,
                      { dataElement: "URLPanel" },
                      r.a.createElement(
                        "div",
                        { className: "panel-body" },
                        r.a.createElement(
                          "div",
                          { className: "add-url-link" },
                          r.a.createElement(
                            "form",
                            { onSubmit: J },
                            r.a.createElement(
                              "label",
                              { htmlFor: "urlInput", className: "inputLabel" },
                              I("link.enterUrlAlt"),
                            ),
                            r.a.createElement(
                              "div",
                              { className: "linkInput" },
                              r.a.createElement("input", {
                                id: "urlInput",
                                className: "urlInput",
                                ref: M,
                                value: _,
                                onChange: function (e) {
                                  return D(e.target.value);
                                },
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                    r.a.createElement(
                      f.c,
                      { dataElement: "PageNumberPanel" },
                      r.a.createElement(
                        "div",
                        { className: "panel-body" },
                        r.a.createElement(
                          "div",
                          { className: "add-url-link" },
                          r.a.createElement(
                            "form",
                            { onSubmit: Q },
                            r.a.createElement(
                              "label",
                              { htmlFor: "pageInput", className: "inputLabel" },
                              I("link.enterpage"),
                            ),
                            r.a.createElement(
                              "div",
                              { className: "linkInput" },
                              r.a.createElement("input", {
                                id: "pageInput",
                                className: "pageInput",
                                ref: U,
                                value: G,
                                onChange: function (e) {
                                  return B(e.target.value);
                                },
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  r.a.createElement("div", { className: "divider" }),
                  r.a.createElement(
                    "div",
                    { className: "footer" },
                    "URLPanelButton" === j
                      ? r.a.createElement(d.a, {
                          className: "ok-button",
                          dataElement: "linkSubmitButton",
                          label: I("action.link"),
                          onClick: J,
                          disabled: !_.length,
                        })
                      : r.a.createElement(d.a, {
                          className: "ok-button",
                          dataElement: "linkSubmitButton",
                          label: I("action.link"),
                          onClick: Q,
                          disabled: !(null == C ? void 0 : C.includes(G)),
                        }),
                  ),
                ),
              ),
            );
      };
      t.default = S;
    },
  },
]);
//# sourceMappingURL=chunk.87.js.map
