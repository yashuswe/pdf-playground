(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    1873: function (n, t, e) {
      "use strict";
      (e(9),
        e(10),
        e(14),
        e(38),
        e(27),
        e(21),
        e(20),
        e(12),
        e(44),
        e(22),
        e(142),
        e(18),
        e(26),
        e(16),
        e(40),
        e(24),
        e(42),
        e(43),
        e(8),
        e(56),
        e(17),
        e(19),
        e(11),
        e(13));
      var o = e(0),
        r = e.n(o),
        i = e(305),
        a = e(235),
        c = (e(1971), e(2)),
        p = e.n(c),
        u = {
          onChange: p.a.func,
          checked: p.a.bool,
          index: p.a.number,
          thumbnail: p.a.object,
        },
        d = function (n) {
          var t,
            e = n.onChange,
            o = n.checked,
            c = n.index,
            p = n.thumbnail,
            u = null,
            d = Object(i.a)().t,
            l = ""
              .concat(d("component.thumbnailsPanel"), " ")
              .concat(p.pageNumber, " ");
          p &&
            (p.currentSrc
              ? (t = p.currentSrc)
              : p.url
                ? (t = p.url)
                : p.toDataURL && (t = p.toDataURL()),
            (u = r.a.createElement("img", {
              className: "thumb-card-img",
              alt: l,
              src: t,
            })));
          return r.a.createElement(
            "div",
            { className: "thumb-card", onClick: e },
            r.a.createElement(
              "div",
              { className: "thumb-body" },
              r.a.createElement("div", { className: "thumb-image" }, u),
              r.a.createElement(a.a, {
                id: "custom-checkbox-".concat(c),
                className: "thumb-checkbox",
                name: "thumb".concat(c),
                checked: o,
              }),
            ),
            r.a.createElement("div", { className: "thumb-card-title" }, c + 1),
          );
        };
      d.propTypes = u;
      var l = d;
      function s(n) {
        return (s =
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
      function m(n) {
        if (null != n) {
          var t =
              n[
                ("function" == typeof Symbol && Symbol.iterator) || "@@iterator"
              ],
            e = 0;
          if (t) return t.call(n);
          if ("function" == typeof n.next) return n;
          if (!isNaN(n.length))
            return {
              next: function () {
                return (
                  n && e >= n.length && (n = void 0),
                  { value: n && n[e++], done: !n }
                );
              },
            };
        }
        throw new TypeError(s(n) + " is not iterable");
      }
      function h() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var n,
          t,
          e = "function" == typeof Symbol ? Symbol : {},
          o = e.iterator || "@@iterator",
          r = e.toStringTag || "@@toStringTag";
        function i(e, o, r, i) {
          var p = o && o.prototype instanceof c ? o : c,
            u = Object.create(p.prototype);
          return (
            f(
              u,
              "_invoke",
              (function (e, o, r) {
                var i,
                  c,
                  p,
                  u = 0,
                  d = r || [],
                  l = !1,
                  s = {
                    p: 0,
                    n: 0,
                    v: n,
                    a: m,
                    f: m.bind(n, 4),
                    d: function (t, e) {
                      return ((i = t), (c = 0), (p = n), (s.n = e), a);
                    },
                  };
                function m(e, o) {
                  for (
                    c = e, p = o, t = 0;
                    !l && u && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      m = s.p,
                      h = i[2];
                    e > 3
                      ? (r = h === o) &&
                        ((p = i[(c = i[4]) ? 5 : ((c = 3), 3)]),
                        (i[4] = i[5] = n))
                      : i[0] <= m &&
                        ((r = e < 2 && m < i[1])
                          ? ((c = 0), (s.v = o), (s.n = i[1]))
                          : m < h &&
                            (r = e < 3 || i[0] > o || o > h) &&
                            ((i[4] = e), (i[5] = o), (s.n = h), (c = 0)));
                  }
                  if (r || e > 1) return a;
                  throw ((l = !0), o);
                }
                return function (r, d, h) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    l && 1 === d && m(d, h), c = d, p = h;
                    (t = c < 2 ? n : p) || !l;

                  ) {
                    i ||
                      (c
                        ? c < 3
                          ? (c > 1 && (s.n = -1), m(c, p))
                          : (s.n = p)
                        : (s.v = p));
                    try {
                      if (((u = 2), i)) {
                        if ((c || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, p)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((p = t.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (t = i.return) && t.call(i),
                            c < 2 &&
                              ((p = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (c = 1)));
                        i = n;
                      } else if ((t = (l = s.n < 0) ? p : e.call(o, s)) !== a)
                        break;
                    } catch (t) {
                      ((i = n), (c = 1), (p = t));
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: l };
                };
              })(e, r, i),
              !0,
            ),
            u
          );
        }
        var a = {};
        function c() {}
        function p() {}
        function u() {}
        t = Object.getPrototypeOf;
        var d = [][o]
            ? t(t([][o]()))
            : (f((t = {}), o, function () {
                return this;
              }),
              t),
          l = (u.prototype = c.prototype = Object.create(d));
        function s(n) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(n, u)
              : ((n.__proto__ = u), f(n, r, "GeneratorFunction")),
            (n.prototype = Object.create(l)),
            n
          );
        }
        return (
          (p.prototype = u),
          f(l, "constructor", u),
          f(u, "constructor", p),
          (p.displayName = "GeneratorFunction"),
          f(u, r, "GeneratorFunction"),
          f(l),
          f(l, r, "Generator"),
          f(l, o, function () {
            return this;
          }),
          f(l, "toString", function () {
            return "[object Generator]";
          }),
          (h = function () {
            return { w: i, m: s };
          })()
        );
      }
      function f(n, t, e, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (n) {
          r = 0;
        }
        (f = function (n, t, e, o) {
          if (t)
            r
              ? r(n, t, {
                  value: e,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (n[t] = e);
          else {
            var i = function (t, e) {
              f(n, t, function (n) {
                return this._invoke(t, e, n);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(n, t, e, o);
      }
      function b(n, t, e, o, r, i, a) {
        try {
          var c = n[i](a),
            p = c.value;
        } catch (n) {
          return void e(n);
        }
        c.done ? t(p) : Promise.resolve(p).then(o, r);
      }
      function y(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (o, r) {
            var i = n.apply(t, e);
            function a(n) {
              b(i, o, r, a, c, "next", n);
            }
            function c(n) {
              b(i, o, r, a, c, "throw", n);
            }
            a(void 0);
          });
        };
      }
      function w(n, t) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, t) {
            var e =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != e) {
              var o,
                r,
                i,
                a,
                c = [],
                p = !0,
                u = !1;
              try {
                if (((i = (e = e.call(n)).next), 0 === t)) {
                  if (Object(e) !== e) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (o = i.call(e)).done) &&
                    (c.push(o.value), c.length !== t);
                    p = !0
                  );
              } catch (n) {
                ((u = !0), (r = n));
              } finally {
                try {
                  if (
                    !p &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return c;
            }
          })(n, t) ||
          (function (n, t) {
            if (n) {
              if ("string" == typeof n) return x(n, t);
              var e = {}.toString.call(n).slice(8, -1);
              return (
                "Object" === e && n.constructor && (e = n.constructor.name),
                "Map" === e || "Set" === e
                  ? Array.from(n)
                  : "Arguments" === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    ? x(n, t)
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
      function x(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
        return o;
      }
      var g = function (n) {
        var t = n.document,
          e = n.onThumbnailSelected,
          a = n.selectedThumbnails,
          c = n.onfileLoadedHandler,
          p = w(Object(o.useState)([]), 2),
          u = p[0],
          d = p[1],
          s = w(Object(o.useState)(0), 2),
          f = s[0],
          b = s[1],
          x = w(Object(i.a)(), 1)[0];
        if (
          (Object(o.useEffect)(
            function () {
              var n = [];
              function e() {
                return (e = y(
                  h().m(function e() {
                    var o, r, i, a, p, u;
                    return h().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            ((o = []),
                              (r = t.getPageCount()),
                              (i = []),
                              (a = h().m(function e(r) {
                                var a;
                                return h().w(function (e) {
                                  for (;;)
                                    switch (e.n) {
                                      case 0:
                                        ((a = new Promise(function (e) {
                                          var i = t.loadThumbnail(
                                            r,
                                            function (n) {
                                              var t;
                                              ((t = n.currentSrc
                                                ? {
                                                    pageNumber: r,
                                                    currentSrc: n.currentSrc,
                                                  }
                                                : {
                                                    pageNumber: r,
                                                    url: n.toDataURL(),
                                                  }),
                                                o.push(t),
                                                b(r),
                                                e());
                                            },
                                          );
                                          n.push(i);
                                        })),
                                          i.push(a));
                                      case 1:
                                        return e.a(2);
                                    }
                                }, e);
                              })),
                              (p = 1));
                          case 1:
                            if (!(p <= r)) {
                              e.n = 3;
                              break;
                            }
                            return e.d(m(a(p)), 2);
                          case 2:
                            (p++, (e.n = 1));
                            break;
                          case 3:
                            return ((e.n = 4), Promise.all(i));
                          case 4:
                            ((u = [].concat(o).sort(function (n, t) {
                              return n.pageNumber - t.pageNumber;
                            })),
                              d(u),
                              (n.length = 0),
                              c(!1));
                          case 5:
                            return e.a(2);
                        }
                    }, e);
                  }),
                )).apply(this, arguments);
              }
              return (
                t &&
                  (function () {
                    e.apply(this, arguments);
                  })(),
                function () {
                  n.forEach(function (n) {
                    return t.cancelLoadThumbnail(n);
                  });
                }
              );
            },
            [t],
          ),
          u.length > 0)
        )
          return u.map(function (n, t) {
            var o = t + 1;
            return r.a.createElement(l, {
              key: o,
              onChange: function () {
                return e(o);
              },
              checked: !!a[o],
              index: t,
              thumbnail: n,
            });
          });
        var g = t ? t.getPageCount() : 0,
          v = "".concat(f, "/").concat(g);
        return r.a.createElement("div", null, x("message.processing"), " ", v);
      };
      t.a = g;
    },
    1971: function (n, t, e) {
      var o = e(35),
        r = e(1972);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[n.i, r, ""]]);
      var i = {
        insert: function (n) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(n);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function n(t, e = document) {
                const o = [];
                return (
                  e.querySelectorAll(t).forEach((n) => o.push(n)),
                  e.querySelectorAll("*").forEach((e) => {
                    e.shadowRoot && o.push(...n(t, e.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const e = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(n),
                (n.onload = function () {
                  e.length > 0 &&
                    e.forEach((t) => {
                      t.innerHTML = n.innerHTML;
                    });
                }));
            else {
              const t = n.cloneNode(!0);
              (r.shadowRoot.appendChild(t), e.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      n.exports = r.locals || {};
    },
    1972: function (n, t, e) {
      ((t = n.exports = e(36)(!1)).push([
        n.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.thumb-card{box-sizing:border-box;width:133px;height:-moz-fit-content;height:fit-content;background:var(--gray-1);border-radius:6px;padding:0 24px 2px;position:relative;cursor:pointer}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:142px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:142px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:97px;padding:0 12px 2px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:97px;padding:0 12px 2px}}@media(max-width:430px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:97px;padding:0 12px 2px}}@container (max-width: 430px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:97px;padding:0 12px 2px}}.thumb-card:hover{background:var(--tools-overlay-button-hover)}.thumb-body{display:flex;align-items:flex-start}.thumb-image{padding-top:12px;padding-inline-end:5px;text-align:center}.thumb-card-img{width:83px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card-img{width:68px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card-img{width:68px}}@media(max-width:430px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card-img{width:68px}}@container (max-width: 430px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card-img{width:68px}}.thumb-card-title{text-align:center;padding-top:8px;padding-bottom:10px}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
  },
]);
//# sourceMappingURL=chunk.15.js.map
