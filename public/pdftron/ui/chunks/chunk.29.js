(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    1571: function (e, t, n) {
      "use strict";
      var o = n(0),
        r = n.n(o).a.createContext();
      t.a = r;
    },
    1596: function (e, t, n) {
      "use strict";
      (n(27), n(8), n(231), n(266), n(381), n(29));
      t.a = function (e, t) {
        var n = {},
          o = e.getContents().ops,
          r = 0;
        (o.forEach(function (e) {
          var t,
            o = e.attributes,
            i = null === (t = e.insert) || void 0 === t ? void 0 : t.mention,
            a = e.insert;
          if (i) {
            var l = e.insert.mention;
            a = l.denotationChar + l.value;
          }
          var c = {};
          ((null == o ? void 0 : o.bold) && (c["font-weight"] = "bold"),
            (null == o ? void 0 : o.italic) && (c["font-style"] = "italic"),
            (null == o ? void 0 : o.color) && (c.color = o.color),
            (null == o ? void 0 : o.underline) &&
              (c["text-decoration"] = "word"),
            (null == o ? void 0 : o.strike) &&
              (c["text-decoration"]
                ? (c["text-decoration"] = "".concat(
                    c["text-decoration"],
                    " line-through",
                  ))
                : (c["text-decoration"] = "line-through")),
            (null == o ? void 0 : o.size) && (c["font-size"] = o.size),
            (null == o ? void 0 : o.font) && (c["font-family"] = o.font),
            (n[r] = c),
            (r += a.length));
        }),
          t.setRichTextStyle(n));
      };
    },
    1599: function (e, t, n) {
      "use strict";
      (n(9),
        n(10),
        n(14),
        n(30),
        n(34),
        n(27),
        n(21),
        n(20),
        n(12),
        n(22),
        n(31),
        n(18),
        n(16),
        n(28),
        n(48),
        n(24),
        n(47),
        n(49),
        n(37),
        n(8),
        n(17),
        n(19),
        n(11),
        n(115),
        n(153),
        n(29),
        n(13),
        n(94));
      var o = n(0),
        r = n.n(o),
        i = n(2),
        a = n.n(i),
        l = n(6),
        c = n(127),
        s = n.n(c),
        d = n(1571),
        u = n(4),
        p = (n(38), n(26), n(40), n(42), n(43), n(56), n(1619)),
        f = n(1711),
        m = n(372),
        b = n(41),
        h = n(305),
        g = n(5),
        y = n(23);
      (n(85), n(44));
      var v = function (e) {
        if (!e) return e;
        var t = e.split("\n");
        return t.length > 1
          ? t
              .map(function (e) {
                return "<p>".concat(e || "<br>", "</p>");
              })
              .join("")
          : e;
      };
      (n(76), n(84));
      function w(e) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                k(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : q(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function k(e, t, n) {
        return (
          (t = j(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function O(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, j(o.key), o));
        }
      }
      function E(e, t, n) {
        return (
          t && O(e.prototype, t),
          n && O(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function j(e) {
        var t = (function (e, t) {
          if ("object" != w(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" != w(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == w(t) ? t : t + "";
      }
      function A(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function C(e, t, n) {
        return (
          (t = N(t)),
          (function (e, t) {
            if (t && ("object" == w(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(
            e,
            (function () {
              try {
                var e = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (e) {}
              return (function () {
                return !!e;
              })();
            })()
              ? Reflect.construct(t, n || [], N(e).constructor)
              : t.apply(e, n),
          )
        );
      }
      function N(e) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function S(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && P(e, t));
      }
      function P(e, t) {
        return (P = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return ((e.__proto__ = t), e);
            })(e, t);
      }
      var T = p.a.import("modules/clipboard"),
        I = window.Core.quillShadowDOMWorkaround,
        _ = (function (e) {
          function t(e, n) {
            return (A(this, t), I(e), C(this, t, [e, n]));
          }
          return (S(t, e), E(t));
        })(T),
        R = p.a.import("modules/keyboard"),
        M = (function (e) {
          function t() {
            return (A(this, t), C(this, t, arguments));
          }
          return (S(t, e), E(t));
        })(R);
      k(
        M,
        "DEFAULTS",
        x(
          x({}, R.DEFAULTS),
          {},
          {
            bindings: x(
              x({}, R.DEFAULTS.bindings),
              {},
              { "list autofill": void 0 },
            ),
          },
        ),
      );
      var D = (function () {
        return E(
          function e(t) {
            var n,
              o = this;
            (A(this, e),
              k(this, "handleKeyDown", function (e) {
                "Escape" === e.key
                  ? o.blurQuill()
                  : "Tab" === e.key &&
                    o.shouldSkipInput &&
                    (e.preventDefault(), o.moveFocus(e.shiftKey));
              }),
              (this.quill = t),
              (this.noteContainer = t.root.closest(".Note")),
              (this.shouldSkipInput = !1),
              null === (n = this.noteContainer) ||
                void 0 === n ||
                n.addEventListener("keydown", this.handleKeyDown.bind(this)));
          },
          [
            {
              key: "blurQuill",
              value: function () {
                ((this.shouldSkipInput = !0),
                  this.quill.blur(),
                  (this.quill.container.tabIndex = 0),
                  this.quill.container.focus());
              },
            },
            {
              key: "moveFocus",
              value: function (e) {
                var t,
                  n = Array.from(
                    this.noteContainer.querySelectorAll(
                      ".ql-container.ql-snow, button.modular-ui",
                    ),
                  ),
                  o = n.indexOf(this.quill.container);
                -1 !== o &&
                  (null === (t = n[e ? o - 1 : o + 1]) ||
                    void 0 === t ||
                    t.focus());
                ((this.shouldSkipInput = !1),
                  (this.quill.container.tabIndex = -1));
              },
            },
          ],
        );
      })();
      (n(1682), n(1684));
      function L(e) {
        return (L =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                F(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : z(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function F(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != L(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != L(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == L(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function B(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return W(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? W(e, t)
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
      function W(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function U() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            s = Object.create(c.prototype);
          return (
            G(
              s,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  c,
                  s = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (c = e), (p.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !u && s && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      f = p.p,
                      m = i[2];
                    n > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (p.v = o), (p.n = i[1]))
                          : f < m &&
                            (r = n < 3 || i[0] > o || o > m) &&
                            ((i[4] = n), (i[5] = o), (p.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, d, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && f(d, m), l = d, c = m;
                    (t = l < 2 ? e : c) || !u;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), f(l, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((s = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (u = p.n < 0) ? c : n.call(o, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: u };
                };
              })(n, r, i),
              !0,
            ),
            s
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var d = [][o]
            ? t(t([][o]()))
            : (G((t = {}), o, function () {
                return this;
              }),
              t),
          u = (s.prototype = l.prototype = Object.create(d));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), G(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(u)),
            e
          );
        }
        return (
          (c.prototype = s),
          G(u, "constructor", s),
          G(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          G(s, r, "GeneratorFunction"),
          G(u),
          G(u, r, "Generator"),
          G(u, o, function () {
            return this;
          }),
          G(u, "toString", function () {
            return "[object Generator]";
          }),
          (U = function () {
            return { w: i, m: p };
          })()
        );
      }
      function G(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (G = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              G(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function V(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      var Y = [],
        K = [
          "background",
          "bold",
          "color",
          "font",
          "code",
          "italic",
          "link",
          "size",
          "strike",
          "script",
          "underline",
          "blockquote",
          "header",
          "indent",
          "list",
          "align",
          "direction",
          "code-block",
          "formula",
          "mention",
        ];
      (p.a.register("modules/keyboard", M, !0),
        p.a.register("modules/clipboard", _, !0),
        p.a.register("modules/blurInput", D),
        p.a.register({ "modules/mention": f.a, "blots/mention": f.b }));
      var $ = {
          mention: {
            allowedChars: /^[A-Za-z\sÅÄÖåäö0-9\-_]*$/,
            mentionDenotationChars: ["@", "#"],
            mentionContainerClass: "mention__element",
            mentionListClass: "mention__suggestions__list",
            listItemClass: "mention__suggestions__item",
            renderItem: function (e) {
              var t = document.createElement("div");
              if (((t.innerText = e.value), e.email)) {
                var n = document.createElement("p");
                ((n.innerText = e.email),
                  (n.className = "email"),
                  t.appendChild(n));
              }
              return t;
            },
            source: function (e, t) {
              return ((n = U().m(function n() {
                var o, r;
                return U().w(function (n) {
                  for (;;)
                    switch (n.n) {
                      case 0:
                        return (
                          (o = m.a.getMentionLookupCallback()),
                          (n.n = 1),
                          o(Y, e)
                        );
                      case 1:
                        ((r = n.v), t(r, e));
                      case 2:
                        return n.a(2);
                    }
                }, n);
              })),
              function () {
                var e = this,
                  t = arguments;
                return new Promise(function (o, r) {
                  var i = n.apply(e, t);
                  function a(e) {
                    V(i, o, r, a, l, "next", e);
                  }
                  function l(e) {
                    V(i, o, r, a, l, "throw", e);
                  }
                  a(void 0);
                });
              })();
              var n;
            },
          },
        },
        Z = r.a.forwardRef(function (e, t) {
          var n = e.value,
            o = void 0 === n ? "" : n,
            i = e.onChange,
            a = e.onKeyDown,
            c = e.onBlur,
            s = e.onFocus,
            d = e.userData,
            f = e.isReply,
            m = B(Object(h.a)(), 1)[0],
            w = Object(l.e)(function (e) {
              return u.a.isElementDisabled(
                e,
                g.a.NotesPanel.ADD_REPLY_ATTACHMENT_BUTTON,
              );
            });
          Y = d;
          o = v(o);
          var q = { blurInput: {} };
          return r.a.createElement(
            "div",
            {
              className: "comment-textarea",
              onBlur: c,
              onFocus: s,
              onClick: function (e) {
                (e.preventDefault(), e.stopPropagation());
              },
              onScroll: function (e) {
                (e.preventDefault(), e.stopPropagation());
              },
            },
            r.a.createElement(p.b, {
              className: "comment-textarea ql-container ql-editor",
              style: { overflowY: "visible" },
              ref: function (e) {
                return (
                  e &&
                    (e.getEditor().root.ariaLabel = "".concat(
                      m(f ? "action.reply" : "action.comment"),
                    )),
                  t(e)
                );
              },
              modules: d && d.length > 0 ? H(H({}, q), $) : q,
              theme: "snow",
              value: o,
              placeholder: "".concat(
                m(f ? "action.reply" : "action.comment"),
                "...",
              ),
              onChange: i,
              onKeyDown: a,
              formats: K,
            }),
            f &&
              !w &&
              r.a.createElement(b.a, {
                className: "add-attachment",
                dataElement: g.a.NotesPanel.ADD_REPLY_ATTACHMENT_BUTTON,
                img: "ic_fileattachment_24px",
                title: ""
                  .concat(m("action.add"), " ")
                  .concat(m("option.type.fileattachment")),
                onClick: function () {
                  var e;
                  null ===
                    (e = Object(y.a)().querySelector(
                      "#reply-attachment-picker",
                    )) ||
                    void 0 === e ||
                    e.click();
                },
              }),
          );
        });
      Z.displayName = "CommentTextarea";
      var X = Z;
      function J(e) {
        return (J =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                te(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Q(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function te(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != J(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != J(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == J(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ne(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return oe(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? oe(e, t)
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
      function oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var re = {
          value: a.a.string,
          placeholder: a.a.string,
          onChange: a.a.func.isRequired,
          onBlur: a.a.func,
          onFocus: a.a.func,
          onSubmit: a.a.func,
        },
        ie = r.a.forwardRef(function (e, t) {
          var n = ne(
              Object(l.e)(function (e) {
                return [
                  u.a.getUserData(e),
                  u.a.isNoteSubmissionWithEnterEnabled(e),
                  u.a.getAutoFocusNoteOnAnnotationSelection(e),
                  u.a.getIsNoteEditing(e),
                ];
              }, l.c),
              2,
            ),
            i = n[0],
            a = n[1],
            c = Object(o.useContext)(d.a).resize,
            p = Object(o.useRef)(),
            f = Object(o.useRef)();
          Object(o.useLayoutEffect)(
            function () {
              var e,
                t,
                n =
                  null === (e = p.current) ||
                  void 0 === e ||
                  null === (t = e.editor) ||
                  void 0 === t
                    ? void 0
                    : t.container.firstElementChild,
                o = (null == n ? void 0 : n.getBoundingClientRect()) || {};
              (f.current && f.current !== o.height && c(),
                (f.current = o.height));
            },
            [e.value, c],
          );
          var b = ee(
            ee({}, e),
            {},
            {
              ref: function (e) {
                ((p.current = e), t(e));
              },
              onChange: s()(function (t, n, o, r) {
                if (((t = t.replace(/&nbsp;/g, " ")), p.current)) {
                  var i = "";
                  if (
                    ((r && "" === r.getText().trim() && "<p><br></p>" === t) ||
                      (i = t.target ? t.target.value : t),
                    e.onChange(i),
                    m.a.doesDeltaContainMention(n.ops))
                  ) {
                    var a,
                      l = m.a.getFormattedTextFromDeltas(n.ops),
                      c = m.a.extractMentionDataFromStr(l),
                      s = r.getText().length + c.plainTextValue.length,
                      d =
                        null === (a = p.current) || void 0 === a
                          ? void 0
                          : a.editor;
                    setTimeout(function () {
                      return null == d ? void 0 : d.setSelection(s, s);
                    }, 1);
                  }
                }
              }, 100),
              onKeyDown: function (t) {
                if (13 === t.which) {
                  var n = a,
                    o = t.metaKey || t.ctrlKey;
                  (n || o) && e.onSubmit(t);
                }
              },
              userData: i,
            },
          );
          return r.a.createElement(r.a.Fragment, null, r.a.createElement(X, b));
        });
      ((ie.displayName = "NoteTextarea"), (ie.propTypes = re));
      var ae = ie;
      t.a = ae;
    },
    1635: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      n(38);
      var o = n(33),
        r = n(1);
      function i(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          i = new window.Core.Annotations.StickyAnnotation();
        ((i.InReplyTo = e.Id),
          (i.X = e.X),
          (i.Y = e.Y),
          (i.PageNumber = e.PageNumber),
          (i.Subject = "Sticky Note"),
          (i.Author = r.a.getCurrentUser()),
          (i.State = t),
          (i.StateModel =
            "Marked" === t || "Unmarked" === t ? "Marked" : "Review"),
          (i.Hidden = !0),
          i.enableSkipAutoLink());
        var a = r.a.getDisplayAuthor(i.Author, n),
          l = o.a.t("option.state.".concat(t.toLowerCase())),
          c = ""
            .concat(l, " ")
            .concat(o.a.t("option.state.setBy"), " ")
            .concat(a);
        return (i.setContents(c), i);
      }
    },
    1636: function (e, t, n) {
      "use strict";
      (n(9),
        n(10),
        n(14),
        n(21),
        n(20),
        n(12),
        n(22),
        n(18),
        n(16),
        n(8),
        n(17),
        n(19),
        n(11),
        n(115),
        n(13));
      var o = n(0),
        r = n.n(o),
        i = n(2),
        a = n.n(i),
        l = n(305),
        c = n(15),
        s = n.n(c);
      n(1648);
      function d(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return u(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(e, t)
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
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function p(e) {
        var t = e.children.replace(/\n$/, ""),
          n = e.panelWidth,
          i = e.linesToBreak,
          a = e.renderRichText,
          c = e.richTextStyle,
          u = e.resize,
          p = e.style,
          f = e.comment,
          m = void 0 !== f && f,
          b = e.beforeContent,
          h = void 0 === b ? function () {} : b,
          g = d(Object(o.useState)(!1), 2),
          y = g[0],
          v = g[1],
          w = d(Object(o.useState)(null), 2),
          q = w[0],
          x = w[1],
          k = d(Object(o.useState)(null), 2),
          O = k[0],
          E = k[1],
          j = d(Object(o.useState)(!1), 2),
          A = j[0],
          C = j[1],
          N = r.a.useRef(null),
          S = Object(l.a)().t,
          P = y ? t : t.substring(0, O * i),
          T = S(y ? "action.showLess" : "action.showMore"),
          I = s()("note-text-preview", { "preview-comment": m });
        return (
          Object(o.useEffect)(
            function () {
              var e = N.current.clientWidth;
              x(e);
            },
            [n],
          ),
          Object(o.useLayoutEffect)(
            function () {
              var e = (function (e) {
                  var t = document.createElement("canvas").getContext("2d");
                  return ((t.font = "13px sans-serif"), t.measureText(e).width);
                })(t),
                n = e / t.length,
                o = Math.floor(q / n);
              (E(o), C(e / q > i));
            },
            [t, q],
          ),
          r.a.createElement(
            "div",
            { className: I, ref: N, style: p, "aria-live": "polite" },
            h(),
            a && c ? a(P, c, 0) : P,
            " ",
            A &&
              r.a.createElement(
                "button",
                {
                  className: "note-text-preview-prompt",
                  onClick: function (e) {
                    (e.stopPropagation(), v(!y), u && u());
                  },
                },
                T,
              ),
          )
        );
      }
      ((p.propTypes = {
        panelWidth: a.a.number,
        linesToBreak: a.a.number,
        renderRichText: a.a.func,
        richTextStyle: a.a.any,
        resize: a.a.func,
        style: a.a.any,
        comment: a.a.bool,
        beforeContent: a.a.func,
      }),
        (t.a = p));
    },
    1638: function (e, t, n) {
      "use strict";
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
        n(34),
        n(27),
        n(12),
        n(44),
        n(31),
        n(28),
        n(48),
        n(24),
        n(47),
        n(49),
        n(37),
        n(8),
        n(11),
        n(29),
        n(13));
      var o = n(0),
        r = n(6),
        i = n(2),
        a = n.n(i),
        l = n(5),
        c = n(3),
        s = n(4);
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function f(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != d(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != d(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == d(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var m = function (e, t, n) {
          return {
            icon: t,
            label: "option.state.".concat(e.toLowerCase()),
            title: "option.state.".concat(e.toLowerCase()),
            option: e,
            dataElement: n,
          };
        },
        b = [
          m(
            "Accepted",
            "icon-annotation-status-accepted",
            "noteStateFlyoutAcceptedOption",
          ),
          m(
            "Rejected",
            "icon-annotation-status-rejected",
            "noteStateFlyoutRejectedOption",
          ),
          m(
            "Cancelled",
            "icon-annotation-status-cancelled",
            "noteStateFlyoutCancelledOption",
          ),
          m(
            "Completed",
            "icon-annotation-status-completed",
            "noteStateFlyoutCompletedOption",
          ),
          m("None", "icon-annotation-status-none", "noteStateFlyoutNoneOption"),
          m(
            "Marked",
            "icon-annotation-status-marked",
            "noteStateFlyoutMarkedOption",
          ),
          m(
            "Unmarked",
            "icon-annotation-status-unmarked",
            "noteStateFlyoutUnmarkedOption",
          ),
        ],
        h = function (e) {
          var t = e.noteId,
            n = e.handleStateChange,
            i = void 0 === n ? function () {} : n,
            a = e.isMultiSelectMode,
            d = void 0 !== a && a,
            u = Object(r.d)(),
            f = d ? "" : "-".concat(t),
            m = "".concat(l.a.NOTE_STATE_FLYOUT).concat(f),
            h = Object(r.e)(function (e) {
              return s.a.getFlyout(e, m);
            });
          return (
            Object(o.useLayoutEffect)(
              function () {
                var e = {
                  dataElement: m,
                  className: "NoteStateFlyout",
                  items: b.map(function (e) {
                    return p(
                      p({}, e),
                      {},
                      {
                        onClick: function () {
                          return ((t = e.option), void i(t));
                          var t;
                        },
                      },
                    );
                  }),
                };
                u(h ? c.a.updateFlyout(e.dataElement, e) : c.a.addFlyout(e));
              },
              [i],
            ),
            null
          );
        };
      h.propTypes = {
        noteId: a.a.string,
        handleStateChange: a.a.func,
        isMultiSelectMode: a.a.bool,
      };
      var g = h;
      t.a = g;
    },
    1639: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      (n(50), n(62));
      var o = function (e, t) {
        var n = e
          .getDisplayModeObject()
          .getVisiblePages()
          .includes(t.PageNumber);
        return (
          e.isContinuousDisplayMode() || (!e.isContinuousDisplayMode() && n)
        );
      };
    },
    1648: function (e, t, n) {
      var o = n(35),
        r = n(1649);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1649: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".note-text-preview{font-size:13px;color:var(--gray-7);padding-inline-end:var(--note-content-right-padding-width);-webkit-user-select:text!important;-moz-user-select:text!important;user-select:text!important;cursor:text;height:-moz-fit-content;height:fit-content;width:calc(100% - var(--note-content-right-padding-width));overflow:hidden}.note-text-preview>*{pointer-events:all}.preview-comment{color:var(--text-color)}.note-text-preview-prompt{cursor:pointer;color:var(--primary-button);text-decoration:underline;position:relative;pointer-events:auto;background:transparent;border:none;padding:0}.note-text-preview-prompt:hover{color:var(--primary-button-hover)}.trackedChangePopup .note-text-preview{max-height:400px;overflow-y:auto;width:calc(100% + var(--note-content-right-padding-width))}",
        "",
      ]);
    },
    1682: function (e, t, n) {
      var o = n(35),
        r = n(1683);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1683: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        '.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{inset-inline-start:-100000px;height:1px;overflow-y:hidden;position:absolute;inset-block-start:50%}.ql-clipboard p{margin:0;padding:0}.ql-container .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:start;white-space:pre-wrap;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor p{margin:0;padding:0}.ql-editor ol,.ql-editor ul{padding-inline-start:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-inline-start:-1.5em;margin-inline-end:.3em;text-align:end}.ql-editor li.ql-direction-rtl:before{margin-inline-start:.3em;margin-inline-end:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-inline-start:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-inline-end:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-inline-start:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-inline-start:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-inline-end:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-inline-end:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-inline-start:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-inline-start:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-inline-end:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-inline-end:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-inline-start:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-inline-start:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-inline-end:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-inline-end:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-inline-start:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-inline-start:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-inline-end:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-inline-end:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-inline-start:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-inline-start:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-inline-end:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-inline-end:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-inline-start:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-inline-start:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-inline-end:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-inline-end:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-inline-start:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-inline-start:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-inline-end:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-inline-end:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-inline-start:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-inline-start:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-inline-end:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-inline-end:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-inline-start:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-inline-start:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-inline-end:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-inline-end:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:end}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;inset-inline-start:15px;pointer-events:none;position:absolute;inset-inline-end:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:"";display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:inline-start;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:inline-start;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media(pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:"";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-inline-start:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-inline-start:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:inline-start;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-inline-start:8px;padding-inline-end:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;inset-block-start:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{inset-inline-end:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:inline-start;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;inset-inline-end:0;inset-block-start:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before{content:"Heading 1"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before{content:"Heading 2"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before{content:"Heading 3"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before{content:"Heading 4"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before{content:"Heading 5"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before{content:"Heading 6"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:"Sans Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:"Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:"Monospace"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"Small"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"Large"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"Huge"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-inline-end:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:"Visit URL:";line-height:26px;margin-inline-end:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-inline-end:1px solid #ccc;content:"Edit";margin-inline-start:16px;padding-inline-end:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:"Remove";margin-inline-start:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-inline-end:0;content:"Save";padding-inline-end:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:"Enter link:"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:"Enter formula:"}.ql-snow .ql-tooltip[data-mode=video]:before{content:"Enter video:"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}',
        "",
      ]);
    },
    1684: function (e, t, n) {
      var o = n(35),
        r = n(1685);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1685: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.comment-textarea{position:relative}.comment-textarea .ql-toolbar{display:none}.comment-textarea .ql-container{border:none}.comment-textarea .ql-container .ql-editor{width:100%;padding:4px 6px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);resize:none;overflow:hidden;box-sizing:border-box}.comment-textarea .ql-container .ql-editor:focus{outline:none;border:1px solid var(--focus-border)}.comment-textarea .ql-container .ql-editor.ql-blank:before{inset-inline-start:8px;list-style-type:none;font-style:normal;color:var(--placeholder-text)}.comment-textarea .ql-container .ql-editor p{margin:0;word-break:break-word}.comment-textarea .ql-container .ql-editor ul>li:before{content:none!important}.comment-textarea .ql-container.ql-snow{border:none}.comment-textarea .ql-container.ql-snow:focus{outline:var(--focus-visible-outline);border-radius:4px}.comment-textarea .add-attachment{position:absolute;inset-block-end:2px;inset-inline-end:2px;width:24px;height:24px}.comment-textarea .add-attachment:hover{background-color:var(--blue-1)}.comment-textarea .add-attachment .Icon{padding:3px}.ql-editor ul>li:before{content:none!important}.mention__element{width:170px;z-index:9001!important;max-height:200px;overflow-y:auto;overflow-y:overlay;overflow-x:hidden;background-color:var(--component-background);border:1px solid var(--border);border-radius:4px}.mention__suggestions__list{width:100%;font-size:14px;margin-top:0;padding-inline-start:0!important;list-style:none;word-wrap:break-word;border-radius:4px}.mention__suggestions__item{background-color:var(--component-background);white-space:nowrap;margin-inline-start:0;padding-inline-start:0;text-overflow:clip;padding:7px 5px 1px!important;margin:0;width:100%;cursor:pointer}.mention__suggestions__item .email{margin-top:2px;font-size:12px;white-space:normal;color:var(--faded-text)}.mention__suggestions__item.selected{background-color:var(--view-header-button-active)!important}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1686: function (e, t, n) {
      var o = n(35),
        r = n(1687);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1687: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NotePopup .options.modular-ui .option:hover{cursor:pointer;background:var(--primary-button-hover);color:var(--gray-0)}.NotePopup{flex-grow:0;display:flex;justify-content:flex-end;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:28px;height:28px;position:relative}.NotePopup .Button.overflow{width:28px;height:28px;border-radius:4px;display:flex;justify-content:center;align-items:center}.NotePopup .Button.overflow .Icon{width:24px;height:24px}.NotePopup .Button.overflow:hover{background:var(--blue-1)}.NotePopup .Button.overflow.active{background:var(--popup-button-active)}.NotePopup .options{display:flex;flex-direction:column;box-shadow:0 0 3px 0 var(--box-shadow);z-index:80;position:absolute;border-radius:4px;background:var(--component-background);inset-block-start:40px;width:-moz-max-content;width:max-content}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NotePopup .options{inset-inline-end:0}}.NotePopup .options .note-popup-option{padding:0;border:none;background-color:transparent;align-items:flex-start}:host(:not([data-tabbing=true])) .NotePopup .options .note-popup-option,html:not([data-tabbing=true]) .NotePopup .options .note-popup-option{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NotePopup .options .note-popup-option{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NotePopup .options .note-popup-option{font-size:13px}}.NotePopup .options.options-reply{inset-block-start:30px}.NotePopup .options .option{display:flex;flex-direction:column;justify-content:center;height:28px;padding-inline-start:8px;padding-inline-end:17px;border-radius:0}.NotePopup .options .option:hover{background-color:var(--popup-button-hover)}.NotePopup .options .option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.NotePopup .options .option:last-child{border-bottom-right-radius:4px}.NotePopup .Button{height:28px}.NotePopup .Button.active{background:var(--popup-button-active)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NotePopup .Button.note-popup-toggle-trigger{width:28px;height:28px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NotePopup .Button.note-popup-toggle-trigger{width:28px;height:28px}}.NotePopupFlyout{min-width:unset!important;max-width:unset!important}.NotePopupFlyout .flyout-item-container{height:unset!important;margin:unset!important}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1688: function (e, t, n) {
      var o = n(35),
        r = n(1689);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1689: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NoteHeader{padding-inline-end:12px;position:relative;flex:1;color:var(--text-color);display:flex}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NoteHeader{flex:none}}.NoteHeader .type-icon{margin:2px;width:24px;height:24px}.NoteHeader .type-icon-container{padding-inline-end:13px}.NoteHeader .type-icon-container .unread-notification{position:absolute;width:13px;height:13px;inset-inline-end:-2px;inset-block-start:-2px;border-radius:10000px;border:2px solid var(--component-background);background:#00a5e4}.NoteHeader .author-and-date{flex:1;min-width:0;position:relative}.NoteHeader .author-and-date.isReply{padding-inline-start:0;padding-top:0;font-size:10px}.NoteHeader .author-and-date .author-and-overflow{display:flex;justify-content:space-between}.NoteHeader .author-and-date .author-and-overflow .author-and-time{display:flex;flex-direction:column;word-break:break-word}.NoteHeader .author-and-date .author-and-overflow .author-and-time .author{font-weight:700;font-size:13px}.NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies{display:flex}.NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies .date-and-time{font-size:10px;color:var(--faded-text)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies .date-and-time{font-size:10px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies .date-and-time{font-size:10px}}.NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies .num-replies-container{display:flex;flex-grow:1;padding-inline-start:10px}.NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies .num-replies-container .num-reply-icon{height:12px;width:12px}.NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies .num-replies-container .num-replies{font-size:10px;color:var(--gray-7)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies .num-replies-container .num-replies{font-size:12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NoteHeader .author-and-date .author-and-overflow .author-and-time .date-and-num-replies .num-replies-container .num-replies{font-size:12px}}.NoteHeader .author-and-date .author-and-overflow .state-and-overflow{display:flex;flex:1;justify-content:flex-end}.NoteHeader .author-and-date .author-and-overflow .state-and-overflow>*{pointer-events:auto}.NoteHeader .author-and-date .author-and-overflow .state-and-overflow .tracked-change-icon-wrapper .tracked-change-icon{margin:2px;width:24px;height:24px}.NoteHeader .author-and-date .author-and-overflow .state-and-overflow .tracked-change-icon-wrapper:hover.accept{background-color:#d5f5ca}.NoteHeader .author-and-date .author-and-overflow .state-and-overflow .tracked-change-icon-wrapper:hover.reject{background-color:#ffe8e8}.NoteHeader .author-and-date .author-and-overflow .state-and-overflow .ToggleElementButton button{width:28px;height:28px;margin:0 8px 0 13px}.NoteHeader .author-and-date .author-and-overflow .state-and-overflow .ToggleElementButton button .Icon{width:20px;height:20px}.NoteHeader .author-name{font-weight:700}.NoteHeader .note-popup-toggle-trigger{padding:0;margin-inline-end:0!important;margin-inline-start:0!important;min-width:28px!important}.NoteHeader .note-popup-toggle-trigger .Icon{width:24px!important;height:24px!important}.parent{padding-inline-start:12px;padding-top:12px}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1691: function (e, t, n) {
      var o = n(35),
        r = n(1692);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1692: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".reply-attachment-list{display:flex;flex-direction:column;cursor:default}.reply-attachment-list .reply-attachment{background-color:var(--gray-1);border-radius:4px;cursor:pointer;pointer-events:auto}.reply-attachment-list .reply-attachment:not(:last-child){margin-bottom:8px}.reply-attachment-list .reply-attachment .reply-attachment-preview{width:100%;max-height:80px;display:flex;justify-content:center}.reply-attachment-list .reply-attachment .reply-attachment-preview.dirty{position:relative;margin-bottom:15px}.reply-attachment-list .reply-attachment .reply-attachment-preview img{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.reply-attachment-list .reply-attachment .reply-attachment-preview .reply-attachment-preview-message{font-size:11px;color:var(--error-text-color);position:absolute;inset-block-end:-15px;inset-inline-start:10px}.reply-attachment-list .reply-attachment .reply-attachment-info{display:flex;align-items:center;height:40px;padding:8px}.reply-attachment-list .reply-attachment .reply-attachment-info .reply-attachment-icon{height:24px;min-height:24px;width:24px;min-width:24px}.reply-attachment-list .reply-attachment .reply-attachment-info .reply-file-name{height:16px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-inline-start:8px;margin-inline-end:8px}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button{height:24px;min-height:24px;width:24px;min-width:24px}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button:hover{background-color:var(--blue-1)}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button .Icon{height:16px;width:16px}",
        "",
      ]);
    },
    1693: function (e, t, n) {
      var o = n(35),
        r = n(1694);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1694: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NoteContent.modular-ui .edit-content .edit-buttons .save-button.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.NoteContent.modular-ui .edit-content .edit-buttons .save-button.disabled span{color:var(--primary-button-text)}.NoteContent{--note-content-right-padding-width:12px;position:relative;display:flex;flex-direction:column;align-items:left;flex:1;color:var(--text-color);padding-bottom:12px;pointer-events:none}.NoteContent.isReply{padding-bottom:0}.NoteContent.unread.isReply{background:rgba(0,165,228,.08)}.NoteContent.unread.clicked .author-and-time span{font-weight:400}.NoteContent.unread .author-and-time span{font-weight:700}.NoteContent .container{margin-top:8px;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;user-select:text;cursor:text;padding-inline-start:52px;padding-inline-end:var(--note-content-right-padding-width)}.NoteContent .container>*{pointer-events:all}.NoteContent .container-reply{margin-top:8px;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;user-select:text;cursor:text}.NoteContent .edit-content{margin-top:7px;display:flex;flex-direction:column;position:relative;flex:1;padding-inline-start:52px;padding-inline-end:12px;padding-bottom:12px;pointer-events:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NoteContent .edit-content{flex:none}}.NoteContent .edit-content textarea{width:100%;padding-inline-start:8px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding-top:4px;padding-bottom:4px;resize:none;overflow:hidden;box-sizing:border-box}.NoteContent .edit-content textarea:focus{outline:none;border:1px solid var(--focus-border)}.NoteContent .edit-content textarea::-moz-placeholder{color:var(--placeholder-text)}.NoteContent .edit-content textarea::placeholder{color:var(--placeholder-text)}.NoteContent .edit-content .edit-buttons{display:flex;flex-direction:row;justify-content:flex-end;margin-top:8px}.NoteContent .edit-content .edit-buttons>div{margin-inline-end:4px}.NoteContent .edit-content .edit-buttons .save-button{background-color:transparent;cursor:pointer;flex-shrink:0;background:var(--primary-button);border-radius:4px;width:-moz-fit-content;width:fit-content;border:none;height:28px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);padding:0 13px}:host(:not([data-tabbing=true])) .NoteContent .edit-content .edit-buttons .save-button,html:not([data-tabbing=true]) .NoteContent .edit-content .edit-buttons .save-button{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NoteContent .edit-content .edit-buttons .save-button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NoteContent .edit-content .edit-buttons .save-button{font-size:13px}}.NoteContent .edit-content .edit-buttons .save-button:hover{background:var(--primary-button-hover);color:var(--primary-button-text)}.NoteContent .edit-content .edit-buttons .save-button.disabled{background:var(--gray-6)!important;border-color:var(--gray-6)!important;cursor:not-allowed}.NoteContent .edit-content .edit-buttons .save-button.disabled span{color:var(--primary-button-text)}.NoteContent .edit-content .edit-buttons .cancel-button{border:none;background-color:transparent;color:var(--secondary-button-text);padding:0 10px;width:-moz-fit-content;width:fit-content;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-inline-end:2px}:host(:not([data-tabbing=true])) .NoteContent .edit-content .edit-buttons .cancel-button,html:not([data-tabbing=true]) .NoteContent .edit-content .edit-buttons .cancel-button{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NoteContent .edit-content .edit-buttons .cancel-button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NoteContent .edit-content .edit-buttons .cancel-button{font-size:13px}}.NoteContent .edit-content .edit-buttons .cancel-button:hover{color:var(--secondary-button-hover)}.NoteContent .reply-content{padding-inline-start:0}.NoteContent .contents{white-space:pre-wrap;color:var(--text-color);margin-inline-end:5px;padding:0;word-break:normal;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;user-select:text}.NoteContent .contents .highlight{background:#fffc95;color:#333}.NoteContent .highlight{background:#fffc95}.NoteContent .selected-text-preview{padding-inline-start:52px;padding-top:8px;pointer-events:auto}.NoteContent .reply-attachment-list{margin-bottom:8px}.NoteContent.modular-ui .highlight{font-weight:700;color:var(--blue-5);background:none}.NoteContent.modular-ui .edit-content .edit-buttons .save-button.disabled{border:none}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1695: function (e, t, n) {
      var o = n(35),
        r = n(1696);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1696: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.reply-area-container{border-top:1px solid var(--divider);display:flex;flex-direction:column;margin-bottom:0}.reply-area-container .reply-attachment-list{margin:12px 12px 0}.reply-area-container .reply-area-with-button{display:flex}.reply-area-container .reply-area-with-button .reply-area{position:relative;flex:1;margin:12px 17px 12px 12px;border-radius:4px;align-items:center}.reply-area-container .reply-area-with-button .reply-area.unread{background:rgba(0,165,228,.08)}.reply-area-container .reply-area-with-button .reply-area .comment-textarea .ql-container .ql-editor.ql-blank{padding:4px}.reply-area-container .reply-area-with-button .reply-area .comment-textarea .ql-container .ql-editor.ql-blank:before{inset-inline-start:4px}.reply-area-container .reply-area-with-button .reply-button-container{display:flex;flex-direction:column;justify-content:flex-end}.reply-area-container .reply-area-with-button .reply-button-container .reply-button{width:28px;height:28px;padding:0;border:none;background-color:transparent;inset-inline-end:10px;inset-block-end:12px}:host(:not([data-tabbing=true])) .reply-area-container .reply-area-with-button .reply-button-container .reply-button,html:not([data-tabbing=true]) .reply-area-container .reply-area-with-button .reply-button-container .reply-button{outline:none}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.reply-area-container .reply-area-with-button .reply-button-container .reply-button{width:80px}}.reply-area-container .reply-area-with-button .reply-button-container .reply-button:hover{background:var(--blue-1)}.reply-area-container .reply-area-with-button .reply-button-container .reply-button.disabled{cursor:not-allowed}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1697: function (e, t, n) {
      var o = n(35),
        r = n(1698);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1698: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@media print{#line-connector-root{opacity:0}}#line-connector-root{position:relative;z-index:69}.horizontalLine{height:2px}.horizontalLine,.verticalLine{background-color:rgba(30,120,235,.5);position:fixed}.verticalLine{width:2px}.arrowHead{position:absolute;inset-block-start:0;inset-inline-start:0;margin:auto;width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-inline-end:7px solid rgba(30,120,235,.5);transform:translateX(-100%) translateY(-50%) translateY(1px)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1699: function (e, t, n) {
      var o = n(35),
        r = n(1700);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1700: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.Note{padding:0;border:none;background-color:transparent;display:block;text-align:start;border-radius:4px;box-shadow:0 0 3px 0 var(--note-box-shadow);margin-bottom:8px;margin-inline-start:2px;background:var(--component-background);cursor:pointer;position:relative}:host(:not([data-tabbing=true])) .Note,html:not([data-tabbing=true]) .Note{outline:none}.Note.unread{border:1.2px solid #00a5e4}.Note.expanded{box-shadow:0 4px 16px var(--note-box-shadow-expanded),0 0 4px 0 var(--note-box-shadow)}.Note.is-multi-selected{box-shadow:0 4px 16px rgba(134,142,150,.24),0 0 4px 0 var(--note-box-shadow)}.Note.disabled{opacity:.5;pointer-events:none}.Note .note-button{position:absolute;width:100%;height:100%;inset-block-start:0;inset-inline-start:0}.Note .mark-all-read-button{background:#00a5e4;text-align:center;color:#fff;height:16px;font-size:12px;width:100%;border-radius:0}.Note .divider{height:1px;width:100%;background:var(--divider)}.Note .reply-divider{background:var(--reply-divider);height:1px;width:100%}.Note .replies{margin-inline-start:52px;padding-bottom:12px}.Note .reply{padding-inline-start:12px;padding-bottom:24px;border-inline-start:1px solid var(--reply-divider)}.Note .reply:last-of-type{padding-bottom:0}.Note .group-section{margin-inline-start:52px;padding-bottom:12px;display:flex;flex-direction:column;grid-row-gap:4px;row-gap:4px;padding-inline-end:12px}.Note .group-section.modular-ui .group-child:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);background:var(--faded-component-background);border-radius:4px}.Note .text-button{color:var(--secondary-button-text);display:flex;position:relative;width:auto;height:auto;flex-direction:row-reverse;justify-content:flex-end}.Note .text-button .Icon{color:var(--secondary-button-text);height:18px;width:18px}.Note .group-child{position:relative;width:auto;height:auto;display:block;text-align:start;padding-top:4px;padding-bottom:4px}.Note .group-child:hover{background:var(--view-header-button-hover)}.Note .group-child .NoteContent{padding-bottom:0}.Note:focus{outline:none}.Note.focus-visible,.Note:focus-visible{outline:var(--focus-visible-outline)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1701: function (e, t, n) {
      "use strict";
      (n(9), n(10), n(26), n(16), n(40), n(24), n(42), n(43), n(8), n(56));
      var o = n(0),
        r = n.n(o),
        i = n(6),
        a = n(4);
      function l() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var l = o && o.prototype instanceof s ? o : s,
            d = Object.create(l.prototype);
          return (
            c(
              d,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  c,
                  s = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (c = e), (p.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !u && s && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      f = p.p,
                      m = i[2];
                    n > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (p.v = o), (p.n = i[1]))
                          : f < m &&
                            (r = n < 3 || i[0] > o || o > m) &&
                            ((i[4] = n), (i[5] = o), (p.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, d, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && f(d, m), l = d, c = m;
                    (t = l < 2 ? e : c) || !u;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), f(l, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((s = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (u = p.n < 0) ? c : n.call(o, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: u };
                };
              })(n, r, i),
              !0,
            ),
            d
          );
        }
        var a = {};
        function s() {}
        function d() {}
        function u() {}
        t = Object.getPrototypeOf;
        var p = [][o]
            ? t(t([][o]()))
            : (c((t = {}), o, function () {
                return this;
              }),
              t),
          f = (u.prototype = s.prototype = Object.create(p));
        function m(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), c(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (d.prototype = u),
          c(f, "constructor", u),
          c(u, "constructor", d),
          (d.displayName = "GeneratorFunction"),
          c(u, r, "GeneratorFunction"),
          c(f),
          c(f, r, "Generator"),
          c(f, o, function () {
            return this;
          }),
          c(f, "toString", function () {
            return "[object Generator]";
          }),
          (l = function () {
            return { w: i, m: m };
          })()
        );
      }
      function c(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (c = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              c(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function s(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      t.a = function (e) {
        var t = e.annotationId,
          n = e.addAttachments,
          o = Object(i.e)(function (e) {
            return a.a.getReplyAttachmentHandler(e);
          }),
          c = (function () {
            var e,
              r =
                ((e = l().m(function e(r) {
                  var i, a, c;
                  return l().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (!(i = r.target.files[0])) {
                            e.n = 3;
                            break;
                          }
                          if (((a = i), !o)) {
                            e.n = 2;
                            break;
                          }
                          return ((e.n = 1), o(i));
                        case 1:
                          ((c = e.v),
                            (a = {
                              url: c,
                              name: i.name,
                              size: i.size,
                              type: i.type,
                            }));
                        case 2:
                          n(t, [a]);
                        case 3:
                          return e.a(2);
                      }
                  }, e);
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                      s(i, o, r, a, l, "next", e);
                    }
                    function l(e) {
                      s(i, o, r, a, l, "throw", e);
                    }
                    a(void 0);
                  });
                });
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        return r.a.createElement("input", {
          id: "reply-attachment-picker",
          type: "file",
          style: { display: "none" },
          onChange: c,
          onClick: function (e) {
            e.target.value = "";
          },
        });
      };
    },
    1709: function (e, t, n) {
      "use strict";
      (n(9),
        n(10),
        n(14),
        n(30),
        n(34),
        n(27),
        n(21),
        n(20),
        n(12),
        n(44),
        n(22),
        n(99),
        n(142),
        n(31),
        n(18),
        n(26),
        n(16),
        n(28),
        n(40),
        n(48),
        n(24),
        n(47),
        n(49),
        n(42),
        n(37),
        n(43),
        n(8),
        n(91),
        n(56),
        n(17),
        n(19),
        n(132),
        n(11),
        n(29),
        n(13),
        n(94));
      var o = n(0),
        r = n.n(o),
        i = n(15),
        a = n.n(i),
        l = n(2),
        c = n.n(l),
        s = n(6),
        d = n(305),
        u = n(1571),
        p =
          (n(50),
          n(76),
          n(171),
          n(468),
          n(62),
          n(115),
          n(153),
          n(1618),
          n(1710)),
        f = n(106),
        m = n.n(f),
        b = n(315),
        h = n.n(b),
        g = n(237),
        y = n.n(g),
        v = n(1672),
        w = n.n(v),
        q = n(1599),
        x = (n(38), n(59), n(1)),
        k = n(4),
        O = n(5),
        E = n(3),
        j = (n(1686), n(96));
      function A(e) {
        return (A =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                S(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : C(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function S(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != A(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != A(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == A(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function P(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return T(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? T(e, t)
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
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var I = function (e, t, n) {
          return {
            icon: t,
            label: "action.".concat(e.toLowerCase()),
            title: "action.".concat(e.toLowerCase()),
            option: e,
            dataElement: n,
          };
        },
        _ = [
          I("Edit", "", "notePopupEdit"),
          I("Delete", "", "notePopupDelete"),
        ],
        R = {
          handleEdit: c.a.func,
          handleDelete: c.a.func,
          isEditable: c.a.bool,
          isDeletable: c.a.bool,
          noteId: c.a.string,
        };
      function M() {}
      function D(e) {
        var t = e.handleEdit,
          n = void 0 === t ? M : t,
          o = e.handleDelete,
          i = void 0 === o ? M : o,
          l = e.isEditable,
          c = e.isDeletable,
          u = e.isReply,
          p = e.noteId,
          f = Object(s.e)(function (e) {
            var t;
            return null === (t = k.a.getFeatureFlags(e)) || void 0 === t
              ? void 0
              : t.customizableUI;
          }),
          m = "".concat(O.a.NOTE_POPUP_FLYOUT, "-").concat(p),
          b = P(Object(d.a)(), 1)[0];
        if (!l && !c) return null;
        var h = a()("overflow note-popup-toggle-trigger"),
          g = a()("NotePopup options note-popup-options", {
            "options-reply": u,
            "modular-ui": f,
          });
        return r.a.createElement(
          "div",
          { className: g },
          r.a.createElement(j.a, {
            dataElement: "notePopup-".concat(p),
            className: h,
            img: "icon-tools-more",
            title: b("formField.formFieldPopup.options"),
            toggleElement: m,
            disabled: !1,
          }),
          r.a.createElement(L, {
            flyoutSelector: m,
            handleClick: function (e) {
              "Edit" === e ? n() : "Delete" === e && i();
            },
            isEditable: l,
            isDeletable: c,
          }),
        );
      }
      var L = function (e) {
        var t = e.flyoutSelector,
          n = e.handleClick,
          r = e.isEditable,
          i = e.isDeletable,
          a = Object(s.d)(),
          l = Object(s.e)(function (e) {
            return k.a.getFlyout(e, t);
          }),
          c = P(Object(d.a)(), 1)[0];
        return (
          Object(o.useLayoutEffect)(
            function () {
              var e = _;
              r
                ? i ||
                  (e = e.filter(function (e) {
                    return "Delete" !== e.option;
                  }))
                : (e = e.filter(function (e) {
                    return "Edit" !== e.option;
                  }));
              var o = {
                dataElement: t,
                className: "NotePopupFlyout",
                items: e.map(function (e) {
                  return N(
                    N({}, e),
                    {},
                    {
                      label: c(e.label),
                      title: c(e.title),
                      onClick: function () {
                        return n(e.option);
                      },
                    },
                  );
                }),
              };
              a(l ? E.a.updateFlyout(o.dataElement, o) : E.a.addFlyout(o));
            },
            [r, i],
          ),
          null
        );
      };
      ((L.propTypes = {
        flyoutSelector: c.a.string,
        handleClick: c.a.func,
        isEditable: c.a.bool,
        isDeletable: c.a.bool,
      }),
        (D.propTypes = R));
      var z = D;
      function H() {
        return (H = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function F(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return U(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          W(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function B(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          W(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function W(e, t) {
        if (e) {
          if ("string" == typeof e) return U(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? U(e, t)
                : void 0
          );
        }
      }
      function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var G = function (e) {
          var t = B(
              Object(s.e)(function (e) {
                return [k.a.getActiveDocumentViewerKey(e)];
              }),
              1,
            )[0],
            n = e.annotation,
            o = e.setIsEditing,
            i = e.noteIndex,
            a = B(r.a.useState(x.a.canModify(n)), 2),
            l = a[0],
            c = a[1],
            d = B(r.a.useState(x.a.canModifyContents(n)), 2),
            u = d[0],
            p = d[1];
          r.a.useEffect(
            function () {
              function e() {
                (c(x.a.canModify(n, t)), p(x.a.canModifyContents(n, t)));
              }
              return (
                e(),
                x.a.addEventListener(
                  "updateAnnotationPermission",
                  e,
                  void 0,
                  t,
                ),
                function () {
                  return x.a.removeEventListener(
                    "updateAnnotationPermission",
                    e,
                    t,
                  );
                }
              );
            },
            [n, t],
          );
          var f = {
            handleEdit: r.a.useCallback(
              function () {
                n instanceof window.Core.Annotations.FreeTextAnnotation &&
                x.a.getAnnotationManager(t).isFreeTextEditingEnabled()
                  ? x.a
                      .getAnnotationManager(t)
                      .trigger("annotationDoubleClicked", n)
                  : o(!0, i);
              },
              [n, o, i],
            ),
            handleDelete: r.a.useCallback(
              function () {
                x.a.deleteAnnotations(
                  [n].concat(F(n.getGroupedChildren())),
                  void 0,
                  t,
                );
              },
              [n],
            ),
            isEditable: u,
            isDeletable: l && !(null != n && n.NoDelete),
            noteId: n ? n.Id : "",
          };
          return r.a.createElement(z, H({}, e, f));
        },
        V = n(1638);
      function Y(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return K(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? K(e, t)
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
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var $ = {
        annotation: c.a.object.isRequired,
        handleStateChange: c.a.func,
      };
      function Z(e) {
        var t = e.annotation,
          n = e.handleStateChange,
          o = void 0 === n ? function () {} : n,
          i = Y(Object(d.a)(), 1)[0],
          a = t.getStatus(),
          l = "icon-annotation-status-".concat(
            "" === a ? "none" : a.toLowerCase(),
          ),
          c = t.Id;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(j.a, {
            dataElement: "noteState-".concat(c),
            title: i("option.notesOrder.status"),
            img: l,
            toggleElement: "".concat(O.a.NOTE_STATE_FLYOUT, "-").concat(c),
          }),
          r.a.createElement(V.a, { noteId: c, handleStateChange: o }),
        );
      }
      Z.propTypes = $;
      var X = Z,
        J = n(1635),
        Q = n(182);
      function ee() {
        return (ee = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      var te = { annotation: c.a.object };
      function ne(e) {
        var t = Object(s.e)(function (e) {
            return k.a.getActiveDocumentViewerKey(e);
          }),
          n = Object(s.e)(function (e) {
            return k.a.isElementDisabled(e, "noteState");
          }),
          i = e.annotation,
          a = Object(Q.a)(
            Object(o.useCallback)(
              function (e) {
                var n = Object(J.a)(i, e, t);
                i.addReply(n);
                var o = x.a.getAnnotationManager(t);
                (o.addAnnotation(n),
                  o.trigger("addReply", [n, i, o.getRootAnnotation(i)]));
              },
              [i, t],
            ),
          );
        return (
          !n &&
          r.a.createElement(
            "div",
            null,
            r.a.createElement(X, ee({ handleStateChange: a }, e)),
          )
        );
      }
      ne.propTypes = te;
      var oe = ne,
        re = n(51),
        ie = n(116);
      function ae(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return le(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? le(e, t)
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
      function le(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var ce = {
          annotationId: c.a.string,
          ariaLabel: c.a.string,
          pendingEditTextMap: c.a.object,
          pendingReplyMap: c.a.object,
          pendingAttachmentMap: c.a.object,
        },
        se = function (e) {
          var t = e.annotationId,
            n = e.ariaLabel,
            i = e.pendingEditTextMap,
            a = e.pendingReplyMap,
            l = e.pendingAttachmentMap,
            c = Object(d.a)().t,
            s = ae(Object(o.useState)(!1), 2),
            u = s[0],
            p = s[1],
            f = ae(Object(o.useState)(!1), 2),
            m = f[0],
            b = f[1],
            h = ae(Object(o.useState)(!1), 2),
            g = h[0],
            y = h[1];
          return (
            Object(o.useEffect)(
              function () {
                var e, n, o;
                (p(
                  (null === (e = i[t]) || void 0 === e ? void 0 : e.length) > 0,
                ),
                  b(
                    (null === (n = a[t]) || void 0 === n ? void 0 : n.length) >
                      0,
                  ),
                  y(
                    (null === (o = l[t]) || void 0 === o ? void 0 : o.length) >
                      0,
                  ));
              },
              [i, a, l],
            ),
            u || m || g
              ? r.a.createElement(
                  "div",
                  { "data-element": "unpostedCommentIndicator" },
                  r.a.createElement(
                    ie.a,
                    { content: c("message.unpostedComment") },
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(re.a, {
                        className: "type-icon",
                        glyph: "icon-unposted-comment",
                        ariaLabel: n,
                      }),
                    ),
                  ),
                )
              : null
          );
        };
      se.propTypes = ce;
      var de = se,
        ue = { annotationId: c.a.string, ariaLabel: c.a.string },
        pe = function (e) {
          var t = e.annotationId,
            n = e.ariaLabel,
            o = Object(s.e)(function (e) {
              return k.a.isElementDisabled(e, "unpostedCommentIndicator");
            }),
            i = r.a.useContext(u.a),
            a = i.pendingEditTextMap,
            l = i.pendingReplyMap,
            c = i.pendingAttachmentMap;
          return o
            ? null
            : r.a.createElement(de, {
                annotationId: t,
                ariaLabel: n,
                pendingEditTextMap: a,
                pendingReplyMap: l,
                pendingAttachmentMap: c,
              });
        };
      pe.propTypes = ue;
      var fe = pe,
        me = n(160),
        be = n(41),
        he = n(233),
        ge = n(176),
        ye = n(161),
        ve = n(183),
        we = n(232),
        qe = n(25),
        xe = n(107);
      n(1688);
      function ke(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Oe(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Oe(e, t)
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
      function Oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ee = {
        icon: c.a.string,
        iconColor: c.a.string,
        color: c.a.string,
        fillColor: c.a.string,
        annotation: c.a.object,
        language: c.a.string,
        noteDateFormat: c.a.string,
        isSelected: c.a.bool,
        setIsEditing: c.a.func,
        notesShowLastUpdatedDate: c.a.bool,
        isUnread: c.a.bool,
        renderAuthorName: c.a.func,
        isNoteStateDisabled: c.a.bool,
        isEditing: c.a.bool,
        noteIndex: c.a.number,
        sortStrategy: c.a.string,
        activeTheme: c.a.string,
        isMultiSelected: c.a.bool,
        isMultiSelectMode: c.a.bool,
        handleMultiSelect: c.a.func,
        isGroupMember: c.a.bool,
        showAnnotationNumbering: c.a.bool,
        isTrackedChange: c.a.bool,
      };
      function je(e) {
        var t,
          n,
          o,
          i = e.icon,
          l = e.iconColor,
          c = e.annotation,
          s = e.language,
          u = e.noteDateFormat,
          p = e.isSelected,
          f = e.setIsEditing,
          b = e.notesShowLastUpdatedDate,
          h = e.isReply,
          g = e.isUnread,
          y = e.renderAuthorName,
          v = e.isNoteStateDisabled,
          w = e.isEditing,
          q = e.noteIndex,
          k = e.sortStrategy,
          O = e.activeTheme,
          E = e.isMultiSelected,
          j = e.isMultiSelectMode,
          A = e.handleMultiSelect,
          C = e.isGroupMember,
          N = e.showAnnotationNumbering,
          S = e.timezone,
          P = e.isTrackedChange,
          T = ke(Object(d.a)(), 1)[0],
          I =
            k === ve.a.MODIFIED_DATE || (b && k !== ve.a.CREATED_DATE)
              ? Object(he.a)(c)
              : c.DateCreated;
        if (S && I) {
          var _ = I.toLocaleString("en-US", { timeZone: S });
          o = new Date(_);
        } else o = I;
        var R = o
            ? m()(o).locale(s).format(u)
            : T("option.notesPanel.noteContent.noDate"),
          M = c.getReplies().length,
          D =
            null === (t = c[l]) ||
            void 0 === t ||
            null === (n = t.toHexString) ||
            void 0 === n
              ? void 0
              : n.call(t);
        O === we.a.DARK && D && Object(ye.c)(D)
          ? (D = xe.b.white)
          : O === we.a.LIGHT && D && Object(ye.d)(D) && (D = xe.b.black);
        var L = Object(ge.a)(c.FillColor),
          z = c.getAssociatedNumber(),
          H = "#".concat(z, " - "),
          F = a()("author-and-date", { isReply: h }),
          B = a()("NoteHeader", { parent: !h && !C });
        return r.a.createElement(
          "div",
          { className: B },
          !h &&
            r.a.createElement(
              "div",
              { className: "type-icon-container" },
              g &&
                r.a.createElement("div", { className: "unread-notification" }),
              r.a.createElement(re.a, {
                className: "type-icon",
                glyph: i,
                color: D,
                fillColor: L,
              }),
            ),
          r.a.createElement(
            "div",
            { className: F },
            r.a.createElement(
              "div",
              { className: "author-and-overflow" },
              r.a.createElement(
                "div",
                { className: "author-and-time" },
                r.a.createElement(
                  "div",
                  { className: "author" },
                  N &&
                    void 0 !== z &&
                    r.a.createElement(
                      "span",
                      { className: "annotation-number" },
                      H,
                    ),
                  y(c),
                ),
                r.a.createElement(
                  "div",
                  { className: "date-and-num-replies" },
                  r.a.createElement(
                    "div",
                    { className: "date-and-time" },
                    R,
                    C && " (Page ".concat(c.PageNumber, ")"),
                  ),
                  M > 0 &&
                    !p &&
                    r.a.createElement(
                      "div",
                      { className: "num-replies-container" },
                      r.a.createElement(re.a, {
                        className: "num-reply-icon",
                        glyph: "icon-chat-bubble",
                      }),
                      r.a.createElement("div", { className: "num-replies" }, M),
                    ),
                ),
              ),
              r.a.createElement(
                "div",
                { className: "state-and-overflow" },
                j &&
                  !C &&
                  !h &&
                  r.a.createElement(me.a, {
                    id: "note-multi-select-toggle_".concat(c.Id),
                    "aria-label": ""
                      .concat(y(c), " ")
                      .concat(T("option.notesPanel.toggleMultiSelect")),
                    checked: E,
                    onClick: function (e) {
                      (e.preventDefault(), e.stopPropagation(), A(!E));
                    },
                  }),
                r.a.createElement(fe, {
                  annotationId: c.Id,
                  ariaLabel: "Unposted Comment, ".concat(y(c), ", ").concat(R),
                }),
                !v &&
                  !h &&
                  !j &&
                  !C &&
                  !P &&
                  r.a.createElement(oe, { annotation: c, isSelected: p }),
                !w &&
                  p &&
                  !j &&
                  !C &&
                  !P &&
                  r.a.createElement(G, {
                    noteIndex: q,
                    annotation: c,
                    setIsEditing: f,
                    isReply: h,
                  }),
                p &&
                  P &&
                  !j &&
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(be.a, {
                      title: T("officeEditor.accept"),
                      img: "icon-menu-checkmark",
                      className: "tracked-change-icon-wrapper accept",
                      onClick: function () {
                        return (
                          (e = c.getCustomData(qe.w)),
                          void x.a.getOfficeEditor().acceptTrackedChange(e)
                        );
                        var e;
                      },
                      iconClassName: "tracked-change-icon",
                    }),
                    r.a.createElement(be.a, {
                      title: T("officeEditor.reject"),
                      img: "icon-close",
                      className: "tracked-change-icon-wrapper reject",
                      onClick: function () {
                        return (
                          (e = c.getCustomData(qe.w)),
                          void x.a.getOfficeEditor().rejectTrackedChange(e)
                        );
                        var e;
                      },
                      iconClassName: "tracked-change-icon",
                    }),
                  ),
              ),
            ),
          ),
        );
      }
      je.propTypes = Ee;
      var Ae = je,
        Ce = n(1636);
      function Ne() {
        return (Ne = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      function Se(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Pe(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Pe(e, t)
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
      function Pe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Te = function (e) {
          var t = Se(
            Object(s.e)(function (e) {
              return [k.a.getNotesPanelWidth(e)];
            }, s.c),
            1,
          )[0];
          return r.a.createElement(Ce.a, Ne({}, e, { panelWidth: t }));
        },
        Ie = (n(378), n(379), n(380), n(172));
      n(181);
      function _e() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            s = Object.create(c.prototype);
          return (
            Re(
              s,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  c,
                  s = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (c = e), (p.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !u && s && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      f = p.p,
                      m = i[2];
                    n > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (p.v = o), (p.n = i[1]))
                          : f < m &&
                            (r = n < 3 || i[0] > o || o > m) &&
                            ((i[4] = n), (i[5] = o), (p.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, d, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && f(d, m), l = d, c = m;
                    (t = l < 2 ? e : c) || !u;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), f(l, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((s = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (u = p.n < 0) ? c : n.call(o, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: u };
                };
              })(n, r, i),
              !0,
            ),
            s
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var d = [][o]
            ? t(t([][o]()))
            : (Re((t = {}), o, function () {
                return this;
              }),
              t),
          u = (s.prototype = l.prototype = Object.create(d));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), Re(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(u)),
            e
          );
        }
        return (
          (c.prototype = s),
          Re(u, "constructor", s),
          Re(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          Re(s, r, "GeneratorFunction"),
          Re(u),
          Re(u, r, "Generator"),
          Re(u, o, function () {
            return this;
          }),
          Re(u, "toString", function () {
            return "[object Generator]";
          }),
          (_e = function () {
            return { w: i, m: p };
          })()
        );
      }
      function Re(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (Re = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              Re(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function Me(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function De(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = e.apply(t, n);
            function a(e) {
              Me(i, o, r, a, l, "next", e);
            }
            function l(e) {
              Me(i, o, r, a, l, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var Le = "ic-file-pdf",
        ze = "ic-file-img",
        He = "ic-file-cad",
        Fe = "ic-file-doc",
        Be = "ic-file-ppt",
        We = "ic-file-xls",
        Ue = "ic-file-etc",
        Ge = window.Core.Annotations.FileAttachmentUtils;
      function Ve(e) {
        return Ye.apply(this, arguments);
      }
      function Ye() {
        return (Ye = De(
          _e().m(function e(t) {
            return _e().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return e.a(
                      2,
                      Ge.decompressWithFlateDecode(t.content, t.type),
                    );
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ke(e) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return ($e = De(
          _e().m(function e(t) {
            var n,
              o = arguments;
            return _e().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return (
                      (n = o.length > 1 && void 0 !== o[1] ? o[1] : []),
                      (e.n = 1),
                      t.setAttachments(n)
                    );
                  case 1:
                    return e.a(2);
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Ze(e) {
        return !(!e.type || !e.type.startsWith("image/"));
      }
      function Xe(e) {
        var t;
        if (Ze(e)) return ze;
        switch (
          null === (t = e.name) || void 0 === t
            ? void 0
            : t.split(".").pop().toLowerCase()
        ) {
          case "pdf":
            return Le;
          case "cad":
            return He;
          case "doc":
          case "docx":
            return Fe;
          case "ppt":
          case "pptx":
            return Be;
          case "xls":
          case "xlsx":
            return We;
          default:
            return Ue;
        }
      }
      var Je = n(1690),
        Qe = n.n(Je);
      function et() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            s = Object.create(c.prototype);
          return (
            tt(
              s,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  c,
                  s = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (c = e), (p.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !u && s && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      f = p.p,
                      m = i[2];
                    n > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (p.v = o), (p.n = i[1]))
                          : f < m &&
                            (r = n < 3 || i[0] > o || o > m) &&
                            ((i[4] = n), (i[5] = o), (p.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, d, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && f(d, m), l = d, c = m;
                    (t = l < 2 ? e : c) || !u;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), f(l, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((s = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (u = p.n < 0) ? c : n.call(o, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: u };
                };
              })(n, r, i),
              !0,
            ),
            s
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var d = [][o]
            ? t(t([][o]()))
            : (tt((t = {}), o, function () {
                return this;
              }),
              t),
          u = (s.prototype = l.prototype = Object.create(d));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), tt(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(u)),
            e
          );
        }
        return (
          (c.prototype = s),
          tt(u, "constructor", s),
          tt(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          tt(s, r, "GeneratorFunction"),
          tt(u),
          tt(u, r, "Generator"),
          tt(u, o, function () {
            return this;
          }),
          tt(u, "toString", function () {
            return "[object Generator]";
          }),
          (et = function () {
            return { w: i, m: p };
          })()
        );
      }
      function tt(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (tt = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              tt(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function nt(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      var ot = function (e) {
          return new Promise(function (t) {
            if (void 0 === e.size) t(e.toString("utf-8"));
            else {
              var n = new FileReader();
              ((n.onload = function () {
                return t(n.result);
              }),
                n.readAsText(e));
            }
          });
        },
        rt = function (e) {
          return "image/svg+xml" === e.type;
        },
        it = (function () {
          var e,
            t =
              ((e = et().m(function e(t) {
                var n, o, r, i;
                return et().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return ((e.n = 1), ot(t));
                      case 1:
                        if ((n = e.v)) {
                          e.n = 2;
                          break;
                        }
                        return e.a(2, { svg: t });
                      case 2:
                        return (
                          (o = []),
                          Qe.a.addHook("uponSanitizeElement", function (e, t) {
                            var n = t.tagName;
                            t.allowedTags[n] || o.push(n);
                          }),
                          (r = Qe.a.sanitize(n)),
                          (i = new Blob([r], { type: "image/svg+xml" })),
                          e.a(2, { svg: i, isDirty: o.length > 0 })
                        );
                    }
                }, e);
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (o, r) {
                  var i = e.apply(t, n);
                  function a(e) {
                    nt(i, o, r, a, l, "next", e);
                  }
                  function l(e) {
                    nt(i, o, r, a, l, "throw", e);
                  }
                  a(void 0);
                });
              });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      n(1691);
      function at() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            s = Object.create(c.prototype);
          return (
            lt(
              s,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  c,
                  s = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (c = e), (p.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !u && s && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      f = p.p,
                      m = i[2];
                    n > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (p.v = o), (p.n = i[1]))
                          : f < m &&
                            (r = n < 3 || i[0] > o || o > m) &&
                            ((i[4] = n), (i[5] = o), (p.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, d, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && f(d, m), l = d, c = m;
                    (t = l < 2 ? e : c) || !u;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), f(l, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((s = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (u = p.n < 0) ? c : n.call(o, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: u };
                };
              })(n, r, i),
              !0,
            ),
            s
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var d = [][o]
            ? t(t([][o]()))
            : (lt((t = {}), o, function () {
                return this;
              }),
              t),
          u = (s.prototype = l.prototype = Object.create(d));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), lt(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(u)),
            e
          );
        }
        return (
          (c.prototype = s),
          lt(u, "constructor", s),
          lt(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          lt(s, r, "GeneratorFunction"),
          lt(u),
          lt(u, r, "Generator"),
          lt(u, o, function () {
            return this;
          }),
          lt(u, "toString", function () {
            return "[object Generator]";
          }),
          (at = function () {
            return { w: i, m: p };
          })()
        );
      }
      function lt(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (lt = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              lt(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function ct(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function st(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = e.apply(t, n);
            function a(e) {
              ct(i, o, r, a, l, "next", e);
            }
            function l(e) {
              ct(i, o, r, a, l, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function dt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ut(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ut(e, t)
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
      function ut(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var pt = function (e) {
          var t = e.file,
            n = dt(Object(d.a)(), 1)[0],
            i = dt(Object(o.useState)(), 2),
            l = i[0],
            c = i[1],
            s = dt(Object(o.useState)(!1), 2),
            u = s[0],
            p = s[1];
          return (
            Object(o.useEffect)(
              function () {
                (function () {
                  var e = st(
                    at().m(function e() {
                      var n, o, r, i, a;
                      return at().w(function (e) {
                        for (;;)
                          switch (e.n) {
                            case 0:
                              if (
                                (p(!1),
                                (n = t),
                                !(o = !(t instanceof File || t.url)))
                              ) {
                                e.n = 2;
                                break;
                              }
                              return ((e.n = 1), Ve(t));
                            case 1:
                              n = e.v;
                            case 2:
                              if (!(t instanceof File || o)) {
                                e.n = 5;
                                break;
                              }
                              if (!rt(t)) {
                                e.n = 4;
                                break;
                              }
                              return ((e.n = 3), it(n));
                            case 3:
                              ((r = e.v),
                                (i = r.svg),
                                (a = r.isDirty),
                                c(URL.createObjectURL(i)),
                                p(a),
                                (e.n = 5));
                              break;
                            case 4:
                              c(URL.createObjectURL(n));
                            case 5:
                              return e.a(2);
                          }
                      }, e);
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [t],
            ),
            r.a.createElement(
              "div",
              { className: a()({ "reply-attachment-preview": !0, dirty: u }) },
              r.a.createElement("img", { src: l }),
              u &&
                r.a.createElement(
                  "span",
                  { className: "reply-attachment-preview-message" },
                  n("message.svgMalicious"),
                ),
            )
          );
        },
        ft = function (e) {
          var t = e.files,
            n = e.isEditing,
            o = e.fileDeleted,
            i = dt(
              Object(s.e)(function (e) {
                return [
                  k.a.getTabManager(e),
                  k.a.isReplyAttachmentPreviewEnabled(e),
                ];
              }),
              2,
            ),
            a = i[0],
            l = i[1],
            c = dt(Object(d.a)(), 1)[0],
            u = (function () {
              var e = st(
                at().m(function e(t, n) {
                  var o;
                  return at().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if ((t.preventDefault(), t.stopPropagation(), a)) {
                            e.n = 1;
                            break;
                          }
                          return e.a(
                            2,
                            console.warn(
                              "Can't open attachment in non-multi-tab mode",
                            ),
                          );
                        case 1:
                          if (!(n instanceof File)) {
                            e.n = 2;
                            break;
                          }
                          ((o = n), (e.n = 5));
                          break;
                        case 2:
                          if (!n.url) {
                            e.n = 3;
                            break;
                          }
                          ((o = n.url), (e.n = 5));
                          break;
                        case 3:
                          return ((e.n = 4), Ve(n));
                        case 4:
                          o = e.v;
                        case 5:
                          o &&
                            a.addTab(o, {
                              filename: n.name,
                              setActive: !0,
                              saveCurrentActiveTabState: !0,
                            });
                        case 6:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            p = (function () {
              var e = st(
                at().m(function e(t, n) {
                  var o, r;
                  return at().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (
                            (t.preventDefault(), t.stopPropagation(), !n.url)
                          ) {
                            e.n = 1;
                            break;
                          }
                          ((r = n.url), (e.n = 3));
                          break;
                        case 1:
                          return ((e.n = 2), Ve(n));
                        case 2:
                          r = e.v;
                        case 3:
                          ((o = r), Object(Ie.saveAs)(o, n.name));
                        case 4:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            "div",
            { className: "reply-attachment-list" },
            t.map(function (e, t) {
              return r.a.createElement(
                "div",
                {
                  className: "reply-attachment",
                  key: t,
                  onClick: function (t) {
                    return u(t, e);
                  },
                },
                l && Ze(e) && r.a.createElement(pt, { file: e }),
                r.a.createElement(
                  "div",
                  { className: "reply-attachment-info" },
                  r.a.createElement(re.a, {
                    className: "reply-attachment-icon",
                    glyph: Xe(e),
                  }),
                  r.a.createElement(
                    ie.a,
                    { content: e.name },
                    r.a.createElement(
                      "div",
                      { className: "reply-file-name" },
                      e.name,
                    ),
                  ),
                  n
                    ? r.a.createElement(be.a, {
                        className: "attachment-button",
                        title: ""
                          .concat(c("action.delete"), " ")
                          .concat(c("option.type.fileattachment")),
                        img: "icon-close",
                        onClick: function (t) {
                          return (function (e, t) {
                            (e.preventDefault(), e.stopPropagation(), o(t));
                          })(t, e);
                        },
                      })
                    : r.a.createElement(be.a, {
                        className: "attachment-button",
                        title: ""
                          .concat(c("action.download"), " ")
                          .concat(c("option.type.fileattachment")),
                        img: "icon-download",
                        onClick: function (t) {
                          return p(t, e);
                        },
                      }),
                ),
              );
            }),
          );
        },
        mt = n(479),
        bt = n(372),
        ht = n(1596),
        gt = function (e) {
          var t = {};
          if (
            (e["font-weight"] && "normal" !== e["font-weight"] && (t.bold = !0),
            e["font-style"] && "normal" !== e["font-style"] && (t.italic = !0),
            e.color && (t.color = e.color),
            e["text-decoration"])
          ) {
            var n = e["text-decoration"].split(" ");
            (n.includes("line-through") && (t.strike = !0),
              n.includes("word") && (t.underline = !0));
          }
          return t;
        },
        yt = function (e, t) {
          for (
            var n = e.getRichTextStyle(),
              o = Object.keys(n),
              r = bt.a.getFormattedTextFromDeltas(t.getContents()),
              i = bt.a.extractMentionDataFromStr(r).plainTextValue,
              a = [],
              l = 0;
            l < o.length;
            l++
          ) {
            var c = n[o[l]],
              s = gt(c);
            if (!isNaN(o[l])) {
              var d = isNaN(o[l + 1]) ? i.length : o[l + 1],
                u = i.slice(o[l], d);
              a.push({ insert: u, attributes: s });
            }
          }
          (t.setContents(a), t.setSelection(i.length, 0));
        },
        vt = n(45),
        wt = n(53),
        qt = n(229),
        xt = n(60);
      n(1693);
      function kt() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            s = Object.create(c.prototype);
          return (
            Ot(
              s,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  c,
                  s = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (c = e), (p.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !u && s && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      f = p.p,
                      m = i[2];
                    n > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (p.v = o), (p.n = i[1]))
                          : f < m &&
                            (r = n < 3 || i[0] > o || o > m) &&
                            ((i[4] = n), (i[5] = o), (p.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, d, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && f(d, m), l = d, c = m;
                    (t = l < 2 ? e : c) || !u;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), f(l, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((s = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (u = p.n < 0) ? c : n.call(o, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: u };
                };
              })(n, r, i),
              !0,
            ),
            s
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var d = [][o]
            ? t(t([][o]()))
            : (Ot((t = {}), o, function () {
                return this;
              }),
              t),
          u = (s.prototype = l.prototype = Object.create(d));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), Ot(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(u)),
            e
          );
        }
        return (
          (c.prototype = s),
          Ot(u, "constructor", s),
          Ot(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          Ot(s, r, "GeneratorFunction"),
          Ot(u),
          Ot(u, r, "Generator"),
          Ot(u, o, function () {
            return this;
          }),
          Ot(u, "toString", function () {
            return "[object Generator]";
          }),
          (kt = function () {
            return { w: i, m: p };
          })()
        );
      }
      function Ot(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (Ot = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              Ot(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function Et(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function jt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return At(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? At(e, t)
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
      function At(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      m.a.extend(h.a);
      var Ct = {
          annotation: c.a.object.isRequired,
          isEditing: c.a.bool,
          setIsEditing: c.a.func,
          noteIndex: c.a.number,
          isUnread: c.a.bool,
          isNonReplyNoteRead: c.a.bool,
          onReplyClicked: c.a.func,
          isMultiSelected: c.a.bool,
          isMultiSelectMode: c.a.bool,
          handleMultiSelect: c.a.func,
          isGroupMember: c.a.bool,
          handleNoteClick: c.a.func,
        },
        Nt = function (e) {
          var t,
            n = e.annotation,
            i = e.isEditing,
            l = e.setIsEditing,
            c = e.noteIndex,
            f = e.isUnread,
            m = e.isNonReplyNoteRead,
            b = e.onReplyClicked,
            h = e.isMultiSelected,
            g = e.isMultiSelectMode,
            v = e.handleMultiSelect,
            q = e.isGroupMember,
            O = e.handleNoteClick,
            j = void 0 === O ? function () {} : O,
            A = Object(s.e)(function (e) {
              return k.a.getNoteDateFormat(e);
            }),
            C = Object(s.e)(function (e) {
              return k.a.getIconColor(e, Object(wt.g)(n), s.c);
            }),
            N = Object(s.e)(function (e) {
              return k.a.isElementDisabled(e, "noteStateFlyout");
            }),
            S = Object(s.e)(function (e) {
              return k.a.getCurrentLanguage(e);
            }),
            P = Object(s.e)(function (e) {
              return k.a.notesShowLastUpdatedDate(e);
            }),
            T = Object(s.e)(function (e) {
              return k.a.isNotesPanelTextCollapsingEnabled(e);
            }),
            I = Object(s.e)(function (e) {
              return k.a.isNotesPanelRepliesCollapsingEnabled(e);
            }),
            _ = Object(s.e)(function (e) {
              return k.a.getActiveTheme(e);
            }),
            R = Object(s.e)(function (e) {
              return k.a.getTimezone(e);
            }),
            M = Object(s.e)(function (e) {
              var t;
              return null === (t = k.a.getFeatureFlags(e)) || void 0 === t
                ? void 0
                : t.customizableUI;
            }),
            D = Object(o.useContext)(u.a),
            L = D.isSelected,
            z = D.searchInput,
            H = D.resize,
            F = D.pendingEditTextMap,
            B = D.onTopNoteContentClicked,
            W = D.sortStrategy,
            U = D.showAnnotationNumbering,
            G = D.setPendingEditText,
            V = Object(s.d)(),
            Y = jt(Object(d.a)(), 1)[0],
            K = n.isReply(),
            $ = Object(wt.g)(n) === wt.c.TRACKED_CHANGE,
            Z = jt(Object(o.useState)([]), 2),
            X = Z[0],
            J = Z[1];
          (Object(o.useEffect)(
            function () {
              J(n.getAttachments());
            },
            [n],
          ),
            Object(o.useEffect)(
              function () {
                var e = function (e, t) {
                  "modify" === t &&
                    e.forEach(function (e) {
                      e.Id === n.Id && J(e.getAttachments());
                    });
                };
                return (
                  x.a.addEventListener("annotationChanged", e),
                  function () {
                    x.a.removeEventListener("annotationChanged", e);
                  }
                );
              },
              [n],
            ),
            Object(qt.a)(
              function () {
                (i || V(E.a.finishNoteEditing()), H());
              },
              [i],
            ));
          var Q,
            ee = Object(o.useCallback)(
              function (e) {
                var t = x.a.getDisplayAuthor(e.Author);
                return t ? _t(t, z) : Y("option.notesPanel.noteContent.noName");
              },
              [z],
            ),
            te = n.getSkipAutoLink && n.getSkipAutoLink(),
            ne = Object(o.useCallback)(
              function (e, t, o, i) {
                var a = [];
                if (
                  (i ||
                    p.a.link(e, {
                      stripPrefix: !1,
                      stripTrailingSlash: !1,
                      replaceFn: function (e) {
                        var t = e.getAnchorHref(),
                          n = e.getAnchorText(),
                          o = e.getOffset();
                        switch (e.getType()) {
                          case "url":
                          case "email":
                          case "phone":
                            a.push({
                              href: t,
                              text: n,
                              start: o,
                              end: o + e.getMatchedText().length,
                            });
                        }
                      },
                    }),
                  !a.length)
                ) {
                  var l = _t(e, z, t);
                  if (!z && ((!K && T) || (K && I))) {
                    return r.a.createElement(
                      Te,
                      {
                        linesToBreak: 3,
                        comment: !0,
                        renderRichText: It,
                        richTextStyle: t,
                        resize: H,
                        style: o,
                        beforeContent: function () {
                          if (!$) return null;
                          var e =
                            1 === n.TrackedChangeType
                              ? Y("officeEditor.added")
                              : Y("officeEditor.deleted");
                          return r.a.createElement(
                            "span",
                            {
                              style: {
                                color: n.FillColor.toString(),
                                fontWeight: 700,
                              },
                            },
                            e,
                          );
                        },
                      },
                      e,
                    );
                  }
                  return l;
                }
                var c = [],
                  s = 0;
                return (
                  a.forEach(function (n, o) {
                    var i = n.start,
                      a = n.end,
                      l = n.href;
                    (s < i &&
                      c.push(
                        r.a.createElement(
                          "span",
                          { key: "span_".concat(o) },
                          _t(e, z, t, s, i),
                        ),
                      ),
                      c.push(
                        r.a.createElement(
                          "a",
                          {
                            href: l,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            key: "a_".concat(o),
                          },
                          _t(e, z, t, i, a),
                        ),
                      ),
                      (s = a));
                  }),
                  s < e.length - 1 && c.push(_t(e, z, t, s)),
                  c
                );
              },
              [z],
            ),
            oe = Object(wt.e)(Object(wt.g)(n)).icon;
          try {
            Q = JSON.parse(n.getCustomData("trn-mention"));
          } catch (e) {
            Q = n.getCustomData("trn-mention");
          }
          var re =
            (null === (t = Q) || void 0 === t ? void 0 : t.contents) ||
            n.getContents();
          re = (function (e) {
            return e ? w()(e) : e;
          })(re);
          var ie =
              n instanceof window.Core.Annotations.Link
                ? Object(mt.a)(n)
                : n.getContents(),
            ae = n.getRichTextStyle(),
            le = n.TextColor;
          if (_ === we.a.DARK)
            (le &&
              Object(ye.c)(le.toHexString()) &&
              (le = new window.Core.Annotations.Color(255, 255, 255, 1)),
              ae &&
                Object.keys(ae).forEach(function (e) {
                  ae[e].color &&
                    Object(ye.c)(ae[e].color) &&
                    (ae[e].color = xe.b.white);
                }));
          else if (_ === we.a.LIGHT) {
            if (
              (le &&
                Object(ye.d)(le.toHexString()) &&
                (le = new window.Core.Annotations.Color(0, 0, 0, 1)),
              ae)
            )
              Object.keys(ae).forEach(function (e) {
                ae[e].color &&
                  Object(ye.d)(ae[e].color) &&
                  (ae[e].color = xe.b.black);
              });
          }
          var ce,
            se = void 0 === F[n.Id];
          ce = re && se ? re : F[n.Id];
          var de = function (e) {
              var t;
              (null !== (t = window.getSelection()) &&
                void 0 !== t &&
                t.toString() &&
                (null == e || e.stopPropagation()),
                j(e));
            },
            ue = a()({
              NoteContent: !0,
              isReply: K,
              unread: f,
              clicked: m,
              "modular-ui": M,
            }),
            pe = Object(o.useMemo)(
              function () {
                var e = {};
                return (
                  le && (e.color = le.toHexString()),
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    i && L
                      ? r.a.createElement(Pt, {
                          annotation: n,
                          noteIndex: c,
                          setIsEditing: l,
                          textAreaValue: ce,
                          onTextAreaValueChange: G,
                          pendingText: F[n.Id],
                        })
                      : ie &&
                          r.a.createElement(
                            "div",
                            {
                              className: a()("container", {
                                "reply-content": K,
                              }),
                              onClick: de,
                            },
                            K &&
                              X.length > 0 &&
                              r.a.createElement(ft, {
                                files: X,
                                isEditing: !1,
                              }),
                            ne(ie, ae, e, te),
                          ),
                  )
                );
              },
              [n, L, i, l, re, ne, ce, G, X],
            ),
            fe = n.getCustomData("trn-annot-preview"),
            me = Object(o.useMemo)(
              function () {
                if ("" === fe) return null;
                var e = _t(fe, z),
                  t = !K && T;
                return y()(e) && t
                  ? r.a.createElement(
                      xt.a,
                      {
                        onClick: j,
                        className: "selected-text-preview",
                        dataElement: "notesSelectedTextPreview",
                      },
                      r.a.createElement(
                        Te,
                        { linesToBreak: 3 },
                        '"'.concat(e, '"'),
                      ),
                    )
                  : r.a.createElement(
                      "div",
                      {
                        className: "selected-text-preview",
                        style: { paddingRight: "12px" },
                      },
                      e,
                    );
              },
              [fe, z],
            ),
            be = Object(o.useMemo)(
              function () {
                return r.a.createElement(Ae, {
                  icon: oe,
                  iconColor: C,
                  annotation: n,
                  language: S,
                  noteDateFormat: A,
                  isSelected: L,
                  setIsEditing: l,
                  notesShowLastUpdatedDate: P,
                  isReply: K,
                  isUnread: f,
                  renderAuthorName: ee,
                  isNoteStateDisabled: N,
                  isEditing: i,
                  noteIndex: c,
                  sortStrategy: W,
                  activeTheme: _,
                  handleMultiSelect: v,
                  isMultiSelected: h,
                  isMultiSelectMode: g,
                  isGroupMember: q,
                  showAnnotationNumbering: U,
                  timezone: R,
                  isTrackedChange: $,
                });
              },
              [
                oe,
                C,
                n,
                S,
                A,
                L,
                l,
                P,
                K,
                f,
                ee,
                x.a.getDisplayAuthor(n.Author),
                N,
                i,
                c,
                Object(he.a)(n),
                W,
                v,
                h,
                g,
                q,
                R,
                $,
              ],
            );
          return r.a.createElement(
            "div",
            {
              className: ue,
              onClick: function () {
                q || (K ? b(n) : i || B());
              },
            },
            be,
            me,
            pe,
          );
        };
      Nt.propTypes = Ct;
      var St = Nt,
        Pt = function (e) {
          var t = e.annotation,
            n = e.noteIndex,
            i = e.setIsEditing,
            l = e.textAreaValue,
            c = e.onTextAreaValueChange,
            p = e.pendingText,
            f = jt(
              Object(s.e)(function (e) {
                return [
                  k.a.getAutoFocusNoteOnAnnotationSelection(e),
                  k.a.getIsMentionEnabled(e),
                  k.a.isElementDisabled(e, O.a.INLINE_COMMENT_POPUP),
                  k.a.isElementOpen(e, O.a.INLINE_COMMENT_POPUP),
                  k.a.isElementOpen(e, O.a.NOTES_PANEL),
                  k.a.getActiveDocumentViewerKey(e),
                  k.a.isAnyCustomPanelOpen(e),
                ];
              }),
              7,
            ),
            m = f[0],
            b = f[1],
            h = f[2],
            g = f[3],
            y = f[4],
            v = f[5],
            w = f[6],
            E = jt(Object(d.a)(), 1)[0],
            j = Object(o.useRef)(),
            A = t.isReply(),
            C = Object(o.useContext)(u.a),
            N = C.setCurAnnotId,
            S = C.pendingAttachmentMap,
            P = C.deleteAttachment,
            T = C.clearAttachments,
            I = C.addAttachments,
            _ = !h && g && Object(vt.k)();
          (Object(o.useEffect)(
            function () {
              if (w || ((y || g) && j.current)) {
                var e = j.current.getEditor();
                (t &&
                  t instanceof window.Core.Annotations.FreeTextAnnotation &&
                  e.setText(""),
                  p
                    ? Object(ht.a)(e, t)
                    : e.getContents() &&
                      setTimeout(function () {
                        if (b) {
                          l = bt.a.getFormattedTextFromDeltas(e.getContents());
                          var n = bt.a.extractMentionDataFromStr(l),
                            o = n.plainTextValue;
                          n.ids.length && e.setText(o);
                        }
                        var r;
                        _ ||
                          (m &&
                            (null === (r = j.current) ||
                              void 0 === r ||
                              r.focus(),
                            t.getRichTextStyle() && yt(t, e)));
                      }, 100));
                var n = e.getLength() - 1;
                if (_) return;
                setTimeout(function () {
                  n && e.setSelection(n, n);
                }, 100);
              }
            },
            [y, g, _],
          ),
            Object(o.useEffect)(function () {
              if (A && 0 === D.length) {
                var e = t.getAttachments();
                I(t.Id, e);
              }
            }, []));
          var R = (function () {
              var e,
                o =
                  ((e = kt().m(function e(o) {
                    var r, a, s, d, u;
                    return kt().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return (
                              o.preventDefault(),
                              (r = j.current.getEditor()),
                              (l = bt.a.getFormattedTextFromDeltas(
                                r.getContents(),
                              )),
                              Object(ht.a)(r, t),
                              l.length > 1 &&
                                "\n" === l[l.length - 1] &&
                                (l = l.slice(0, l.length - 1)),
                              t.getSkipAutoLink &&
                                t.getSkipAutoLink() &&
                                t.disableSkipAutoLink(),
                              b
                                ? ((a = bt.a.extractMentionDataFromStr(l)),
                                  (s = a.plainTextValue),
                                  (d = a.ids),
                                  bt.a
                                    .extractMentionDataFromAnnot(t)
                                    .mentions.forEach(function (e) {
                                      s.includes(e.value) && d.push(e.id);
                                    }),
                                  t.setCustomData(
                                    "trn-mention",
                                    JSON.stringify({ contents: l, ids: d }),
                                  ),
                                  t.setContents(s))
                                : t.setContents(l),
                              (e.n = 1),
                              Ke(t, S[t.Id])
                            );
                          case 1:
                            ((u =
                              t instanceof
                              window.Core.Annotations.FreeTextAnnotation
                                ? "textChanged"
                                : "noteChanged"),
                              x.a
                                .getAnnotationManager(v)
                                .trigger("annotationChanged", [
                                  [t],
                                  "modify",
                                  { source: u },
                                ]),
                              t instanceof
                                window.Core.Annotations.FreeTextAnnotation &&
                                x.a.drawAnnotationsFromList([t]),
                              i(!1, n),
                              "" !== l && c(void 0, t.Id),
                              T(t.Id));
                          case 2:
                            return e.a(2);
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, r) {
                      var i = e.apply(t, n);
                      function a(e) {
                        Et(i, o, r, a, l, "next", e);
                      }
                      function l(e) {
                        Et(i, o, r, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function (e) {
                return o.apply(this, arguments);
              };
            })(),
            M = a()("edit-content", { "reply-content": A }),
            D = S[t.Id] || [];
          return r.a.createElement(
            "div",
            { className: M },
            A &&
              D.length > 0 &&
              r.a.createElement(ft, {
                files: D,
                isEditing: !0,
                fileDeleted: function (e) {
                  return P(t.Id, e);
                },
              }),
            r.a.createElement(q.a, {
              ref: function (e) {
                j.current = e;
              },
              value: l,
              onChange: function (e) {
                return c(e, t.Id);
              },
              onSubmit: R,
              isReply: A,
              onBlur: function (e) {
                var t, n;
                null !== (t = e.relatedTarget) &&
                void 0 !== t &&
                null !== (n = t.getAttribute("data-element")) &&
                void 0 !== n &&
                n.includes("annotationCommentButton")
                  ? e.target.focus()
                  : N(void 0);
              },
              onFocus: function () {
                N(t.Id);
              },
            }),
            r.a.createElement(
              "div",
              { className: "edit-buttons" },
              r.a.createElement(be.a, {
                className: "cancel-button",
                label: E("action.cancel"),
                onClick: function (e) {
                  (e.stopPropagation(), i(!1, n), c(void 0, t.Id), T(t.Id));
                },
              }),
              r.a.createElement(be.a, {
                className: "save-button".concat(l ? "" : " disabled"),
                disabled: !l,
                label: E("action.save"),
                onClick: function (e) {
                  (e.stopPropagation(), R(e));
                },
              }),
            ),
          );
        };
      Pt.propTypes = {
        noteIndex: c.a.number.isRequired,
        annotation: c.a.object.isRequired,
        setIsEditing: c.a.func.isRequired,
        textAreaValue: c.a.string,
        onTextAreaValueChange: c.a.func.isRequired,
        pendingText: c.a.string,
      };
      var Tt = function (e, t, n) {
          var o = {
            fontWeight: t["font-weight"],
            fontStyle: t["font-style"],
            textDecoration: t["text-decoration"],
            color: t.color,
          };
          return (
            o.textDecoration &&
              (o.textDecoration = o.textDecoration.replace(
                "word",
                "underline",
              )),
            r.a.createElement("span", { style: o, key: n }, e)
          );
        },
        It = function (e, t, n) {
          if (!t || !e) return e;
          for (
            var o = {},
              r = Object.keys(t)
                .map(Number)
                .sort(function (e, t) {
                  return e - t;
                }),
              i = 0;
            i < r.length;
            i++
          ) {
            var a = r[i] - n;
            if (
              ((o[(a = Math.min(Math.max(a, 0), e.length))] = t[r[i]]),
              a === e.length)
            )
              break;
          }
          for (
            var l = [],
              c = Object.keys(o)
                .map(Number)
                .sort(function (e, t) {
                  return e - t;
                }),
              s = 1;
            s < c.length;
            s++
          )
            l.push(
              Tt(
                e.slice(c[s - 1], c[s]),
                o[c[s - 1]],
                "richtext_span_".concat(s),
              ),
            );
          return l;
        },
        _t = function (e, t, n) {
          var o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : e.length,
            a = e.slice(o, i),
            l = a.toLowerCase(),
            c = t.toLowerCase();
          n && ((n[0] = n[0] || {}), (n[e.length] = n[e.length] || {}));
          var s = l.indexOf(c);
          if (!c.trim() || -1 === s) return It(a, n, o);
          var d = [],
            u = [s],
            p = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          if (new RegExp("(".concat(p, ")"), "gi").test(l))
            for (; -1 !== s; )
              -1 !== (s = l.indexOf(c, s + c.length)) && u.push(s);
          return (
            u.forEach(function (e, t) {
              (0 === t && 0 !== e && d.push(It(a.substring(0, e), n, o)),
                d.push(
                  r.a.createElement(
                    "span",
                    {
                      className: "highlight",
                      key: "highlight_span_".concat(t),
                    },
                    It(a.substring(e, e + c.length), n, o + e),
                  ),
                ),
                e + c.length < l.length &&
                  e + c.length !== u[t + 1] &&
                  d.push(
                    It(
                      a.substring(e + c.length, u[t + 1]),
                      n,
                      o + e + c.length,
                    ),
                  ));
            }),
            d
          );
        };
      var Rt = St;
      n(1695);
      function Mt() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            s = Object.create(c.prototype);
          return (
            Dt(
              s,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  c,
                  s = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (c = e), (p.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !u && s && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      f = p.p,
                      m = i[2];
                    n > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (p.v = o), (p.n = i[1]))
                          : f < m &&
                            (r = n < 3 || i[0] > o || o > m) &&
                            ((i[4] = n), (i[5] = o), (p.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, d, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && f(d, m), l = d, c = m;
                    (t = l < 2 ? e : c) || !u;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), f(l, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((s = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (u = p.n < 0) ? c : n.call(o, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: u };
                };
              })(n, r, i),
              !0,
            ),
            s
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var d = [][o]
            ? t(t([][o]()))
            : (Dt((t = {}), o, function () {
                return this;
              }),
              t),
          u = (s.prototype = l.prototype = Object.create(d));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), Dt(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(u)),
            e
          );
        }
        return (
          (c.prototype = s),
          Dt(u, "constructor", s),
          Dt(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          Dt(s, r, "GeneratorFunction"),
          Dt(u),
          Dt(u, r, "Generator"),
          Dt(u, o, function () {
            return this;
          }),
          Dt(u, "toString", function () {
            return "[object Generator]";
          }),
          (Mt = function () {
            return { w: i, m: p };
          })()
        );
      }
      function Dt(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (Dt = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              Dt(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function Lt(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function zt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Ht(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ht(e, t)
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
      function Ht(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ft = { annotation: c.a.object.isRequired },
        Bt = function (e) {
          var t = e.annotation,
            n = e.isUnread,
            i = e.onPendingReplyChange,
            l = zt(
              Object(s.e)(function (e) {
                var n;
                return [
                  k.a.getAutoFocusNoteOnAnnotationSelection(e),
                  k.a.isDocumentReadOnly(e),
                  k.a.isElementDisabled(e, "noteReply"),
                  null === (n = k.a.getIsReplyDisabled(e)) || void 0 === n
                    ? void 0
                    : n(t),
                  k.a.getIsMentionEnabled(e),
                  k.a.getIsNoteEditing(e),
                  k.a.isElementDisabled(e, O.a.INLINE_COMMENT_POPUP),
                  k.a.isElementOpen(e, O.a.INLINE_COMMENT_POPUP),
                  k.a.getActiveDocumentViewerKey(e),
                ];
              }, s.c),
              9,
            ),
            c = l[0],
            d = l[1],
            p = l[2],
            f = l[3],
            m = l[4],
            b = l[5],
            h = l[6],
            g = l[7],
            y = l[8],
            v = Object(o.useContext)(u.a),
            w = v.isContentEditable,
            j = v.isSelected,
            A = v.pendingReplyMap,
            C = v.setPendingReply,
            N = v.isExpandedFromSearch,
            S = v.scrollToSelectedAnnot,
            P = v.setCurAnnotId,
            T = v.pendingAttachmentMap,
            I = v.clearAttachments,
            _ = v.deleteAttachment,
            R = zt(Object(o.useState)(!1), 2),
            M = R[0],
            D = R[1],
            L = Object(s.d)(),
            z = Object(o.useRef)(),
            H = !h && g && Object(vt.k)();
          (Object(qt.a)(
            function () {
              M || L(E.a.finishNoteEditing());
            },
            [M],
          ),
            Object(o.useEffect)(
              function () {
                H || (b && j && !w && c && z && z.current && z.current.focus());
              },
              [w, b, j, H],
            ),
            Object(o.useEffect)(function () {
              if (
                (!N &&
                  S &&
                  setTimeout(function () {
                    z && z.current && c && z.current.focus();
                  }, 100),
                z && z.current)
              ) {
                if (H) return;
                var e = z.current.getEditor().getLength() - 1;
                setTimeout(function () {
                  z.current && z.current.editor.setSelection(e, e);
                }, 100);
              }
            }, []));
          var F = (function () {
              var e,
                n =
                  ((e = Mt().m(function e(n) {
                    var o, r, i, a;
                    return Mt().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            if (
                              (n.preventDefault(),
                              n.stopPropagation(),
                              (o = z.current.getEditor()),
                              (r = bt.a.getFormattedTextFromDeltas(
                                o.getContents(),
                              )).trim())
                            ) {
                              e.n = 1;
                              break;
                            }
                            return e.a(2);
                          case 1:
                            if (!m) {
                              e.n = 3;
                              break;
                            }
                            return (
                              (i = bt.a.createMentionReply(t, r)),
                              Object(ht.a)(o, i),
                              (e.n = 2),
                              Ke(i, T[t.Id])
                            );
                          case 2:
                            (x.a.addAnnotations([i], y), (e.n = 5));
                            break;
                          case 3:
                            return (
                              (a = x.a.createAnnotationReply(t, r)),
                              Object(ht.a)(o, a),
                              (e.n = 4),
                              Ke(a, T[t.Id])
                            );
                          case 4:
                            x.a
                              .getAnnotationManager(y)
                              .trigger("annotationChanged", [
                                [a],
                                "modify",
                                {},
                              ]);
                          case 5:
                            (C("", t.Id), I(t.Id));
                          case 6:
                            return e.a(2);
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, r) {
                      var i = e.apply(t, n);
                      function a(e) {
                        Lt(i, o, r, a, l, "next", e);
                      }
                      function l(e) {
                        Lt(i, o, r, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            B = d || p || f,
            W = a()({ "reply-area": !0, unread: n }),
            U = T[t.Id] || [];
          return B || !j
            ? null
            : r.a.createElement(
                "form",
                { onSubmit: F, className: "reply-area-container" },
                U.length > 0 &&
                  r.a.createElement(ft, {
                    files: U,
                    isEditing: !0,
                    fileDeleted: function (e) {
                      return _(t.Id, e);
                    },
                  }),
                r.a.createElement(
                  "div",
                  { className: "reply-area-with-button" },
                  r.a.createElement(
                    "div",
                    {
                      className: W,
                      onMouseDown: function (e) {
                        return e.stopPropagation();
                      },
                    },
                    r.a.createElement(q.a, {
                      ref: function (e) {
                        z.current = e;
                      },
                      value: A[t.Id],
                      onChange: function (e) {
                        return (function (e) {
                          (C(e, t.Id), i && i());
                        })(e);
                      },
                      onSubmit: F,
                      onBlur: function () {
                        (D(!1), P(void 0));
                      },
                      onFocus: function () {
                        (D(!0), P(t.Id));
                      },
                      isReply: !0,
                    }),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "reply-button-container" },
                    r.a.createElement(be.a, {
                      img: "icon-post-reply",
                      className: "reply-button",
                      title: "action.submit",
                      disabled: !A[t.Id],
                      onClick: F,
                      isSubmitType: !0,
                    }),
                  ),
                ),
              );
        };
      Bt.propTypes = Ft;
      var Wt = Bt;
      function Ut(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Gt(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Gt(e, t)
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
      function Gt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Vt = {
          groupAnnotations: c.a.array.isRequired,
          isMultiSelectMode: c.a.bool.isRequired,
        },
        Yt = function (e) {
          var t = e.groupAnnotations,
            n = e.isMultiSelectMode,
            i = Ut(Object(d.a)(), 1)[0],
            l = Object(s.d)(),
            c = Ut(Object(o.useState)(!1), 2),
            u = c[0],
            p = c[1],
            f = Object(s.e)(function (e) {
              var t;
              return null === (t = k.a.getFeatureFlags(e)) || void 0 === t
                ? void 0
                : t.customizableUI;
            }),
            m = r.a.createElement(be.a, {
              onClick: function (e) {
                (e.preventDefault(), e.stopPropagation(), p(!0));
              },
              className: "text-button",
              ariaLabel: i("component.noteGroupSection.open"),
              label: i("component.noteGroupSection.open"),
              img: "ic_chevron_down_black_24px",
            }),
            b = r.a.createElement(be.a, {
              onClick: function (e) {
                (e.preventDefault(), e.stopPropagation(), p(!1));
              },
              className: "text-button",
              ariaLabel: i("component.noteGroupSection.close"),
              label: i("component.noteGroupSection.close"),
              img: "ic_chevron_up_black_24px",
            });
          return r.a.createElement(
            "div",
            { className: a()({ "group-section": !0, "modular-ui": f }) },
            u ? b : m,
            u &&
              t.map(function (e, t) {
                return 0 === t
                  ? null
                  : r.a.createElement(
                      be.a,
                      {
                        key: e.Id,
                        className: "group-child",
                        onClick: function (t) {
                          (t.preventDefault(),
                            t.stopPropagation(),
                            x.a.selectAnnotation(e),
                            x.a.jumpToAnnotation(e),
                            l(E.a.openElement("annotationPopup")));
                        },
                      },
                      r.a.createElement(Rt, {
                        key: e.Id,
                        annotation: e,
                        isUnread: !1,
                        isGroupMember: !0,
                        isMultiSelectMode: n,
                      }),
                    );
              }),
          );
        };
      Yt.propTypes = Vt;
      var Kt = Yt,
        $t = n(119),
        Zt = n(32),
        Xt = n(230),
        Jt = n(23);
      n(1697);
      function Qt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return en(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? en(e, t)
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
      function en(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var tn = function (e) {
          var t = e.children,
            n = Object(Jt.a)().querySelector("#line-connector-root"),
            r = document.createElement("div");
          return (
            r.setAttribute("data-element", O.a.ANNOTATION_NOTE_CONNECTOR_LINE),
            Object(o.useEffect)(
              function () {
                return (
                  n.appendChild(r),
                  function () {
                    return n.removeChild(r);
                  }
                );
              },
              [r, n],
            ),
            Object($t.createPortal)(t, r)
          );
        },
        nn = {
          annotation: c.a.object,
          noteContainerRef: c.a.object,
          isCustomPanelOpen: c.a.bool,
        },
        on = function (e) {
          var t = e.annotation,
            n = e.noteContainerRef,
            i = e.isCustomPanelOpen,
            a = Qt(
              Object(s.e)(function (e) {
                return [
                  k.a.getIsCustomUIEnabled(e),
                  k.a.getTopHeadersHeight(e),
                  k.a.getBottomHeadersHeight(e),
                  k.a.getNotesPanelWidth(e),
                  k.a.isElementOpen(e, O.a.ANNOTATION_NOTE_CONNECTOR_LINE),
                  k.a.isElementOpen(e, O.a.NOTES_PANEL),
                  k.a.isElementDisabled(e, O.a.ANNOTATION_NOTE_CONNECTOR_LINE),
                  k.a.getDocumentContainerWidth(e),
                  k.a.getDocumentContainerHeight(e),
                  k.a.getActiveDocumentViewerKey(e),
                ];
              }, s.c),
              10,
            ),
            l = a[0],
            c = a[1],
            d = a[2],
            u = a[3],
            p = a[4],
            f = a[5],
            m = a[6],
            b = a[7],
            h = a[8],
            g = a[9],
            y = Object(s.d)(),
            v = Qt(Object(o.useState)(0), 2),
            w = v[0],
            q = v[1],
            j = Qt(Object(o.useState)(0), 2),
            A = j[0],
            C = j[1],
            N = Qt(Object(o.useState)(0), 2),
            S = N[0],
            P = N[1],
            T = Qt(Object(o.useState)(0), 2),
            I = T[0],
            _ = T[1],
            R = Qt(Object(o.useState)(0), 2),
            M = R[0],
            D = R[1],
            L = Qt(Object(o.useState)(0), 2),
            z = L[0],
            H = L[1],
            F = l ? Zt.b : 0,
            B = Object(Xt.d)(t, g),
            W = B.bottomRight,
            U = B.topLeft,
            G = Object(o.useCallback)(
              function () {
                return "Note" === t.Subject ? 4 : 15;
              },
              [t],
            );
          if (
            (Object(o.useEffect)(function () {
              var e = function () {
                y(E.a.closeElement(O.a.ANNOTATION_NOTE_CONNECTOR_LINE));
              };
              return (
                x.a.addEventListener("pageNumberUpdated", e, void 0, g),
                function () {
                  x.a.removeEventListener("pageNumberUpdated", e, g);
                }
              );
            }, []),
            Object(o.useEffect)(
              function () {
                if (n && n.current) {
                  var e = x.a.getScrollViewElement(g),
                    o = e.scrollTop,
                    r = e.scrollLeft;
                  if (!(W && U))
                    return function () {
                      y(E.a.closeElement(O.a.ANNOTATION_NOTE_CONNECTOR_LINE));
                    };
                  var i,
                    a = window.isApryseWebViewerWebComponent,
                    l = W.x - U.x,
                    c = window.isApryseWebViewerWebComponent
                      ? Object(Jt.a)().host.clientWidth
                      : window.innerWidth,
                    s =
                      (i = {
                        viewerWidth: c,
                        annotationXPosition: U.x,
                        annotationWidth: l,
                        notePanelWidth: u,
                        notePanelPadding: 16,
                        notesPanelResizeBarWidth: F,
                        scrollLeft: r,
                      }).viewerWidth -
                      i.annotationXPosition -
                      i.annotationWidth -
                      i.notePanelWidth +
                      i.notePanelPadding +
                      i.notesPanelResizeBarWidth +
                      i.scrollLeft,
                    d = (function (e) {
                      var t = e.notePanelWidth,
                        n = e.notePanelPadding,
                        o = e.notesPanelResizeBarWidth,
                        r = e.notesContainerTop,
                        i = e.viewerOffsetTop,
                        a = e.distanceToAnnotation,
                        l = e.lineWidthRatio;
                      return {
                        rightHorizontalLineRightOffset: t - n - o,
                        rightHorizontalLineTopOffset: r - i,
                        rightHorizontalLineLength:
                          a * (void 0 === l ? 0.75 : l),
                      };
                    })({
                      notePanelWidth: u,
                      notePanelPadding: 16,
                      notesPanelResizeBarWidth: F,
                      notesContainerTop: n.current.getBoundingClientRect().top,
                      viewerOffsetTop: a ? Object(Jt.a)().host.offsetTop : 0,
                      distanceToAnnotation: s,
                      lineWidthRatio: 0.75,
                    }),
                    p = d.rightHorizontalLineRightOffset,
                    f = d.rightHorizontalLineTopOffset,
                    m = d.rightHorizontalLineLength;
                  (P(p), C(f), q(m));
                  var b = (function (e) {
                      var t = e.isAnnotationNoZoom,
                        n = e.annotationNoZoomReferencePoint,
                        o = e.annotationHeight,
                        r = e.notePanelWidth,
                        i = e.notePanelPadding,
                        a = e.notesPanelResizeBarWidth,
                        l = e.rightHorizontalLineLength,
                        c = e.distanceToAnnotation,
                        s = e.annotationTopLeftY,
                        d = e.scrollTop,
                        u = e.annotationLineOffset,
                        p = t && n.x ? n.x * o : 0;
                      return {
                        leftHorizontalLineRightOffset: r - i - a + l,
                        leftHorizontalLineTopOffset:
                          s + o / 2 - d - (t && n.y ? n.y * o : 0),
                        leftHorizontalLineLength: c - l - u + p,
                      };
                    })({
                      isAnnotationNoZoom: t.NoZoom,
                      annotationNoZoomReferencePoint:
                        t.getNoZoomReferencePoint(),
                      annotationHeight: W.y - U.y,
                      notePanelWidth: u,
                      notePanelPadding: 16,
                      notesPanelResizeBarWidth: F,
                      rightHorizontalLineLength: m,
                      distanceToAnnotation: s,
                      annotationTopLeftY: U.y,
                      scrollTop: o,
                      annotationLineOffset: G(),
                    }),
                    h = b.leftHorizontalLineRightOffset,
                    v = b.leftHorizontalLineTopOffset,
                    w = b.leftHorizontalLineLength;
                  (H(h), D(v), _(w));
                }
              },
              [n, u, W, U, b, h],
            ),
            Object(o.useEffect)(
              function () {
                var e = function () {
                  y(E.a.closeElement(O.a.ANNOTATION_NOTE_CONNECTOR_LINE));
                };
                return (
                  x.a.addEventListener("pageNumberUpdated", e, void 0, g),
                  function () {
                    x.a.removeEventListener("pageNumberUpdated", e, g);
                  }
                );
              },
              [y, g],
            ),
            p && (f || i) && !m)
          ) {
            var V = (function (e) {
                var t = e.rightHorizontalLineTop,
                  n = e.leftHorizontalLineTop,
                  o = e.bottomHeaderTop,
                  r = e.topHeadersHeight,
                  i = e.isCustomUIEnabled,
                  a = t > n ? n + 2 : t,
                  l = Math.abs(t - n),
                  c = a < r,
                  s = a + l > o,
                  d = c || s;
                return (
                  d &&
                    i &&
                    (c
                      ? ((l = Math.abs(t - r) + 2), (a = r))
                      : s && (l = Math.abs(o - t))),
                  {
                    verticalLineTop: a,
                    verticalLineHeight: l,
                    isAnnotationOffScreen: d,
                  }
                );
              })({
                rightHorizontalLineTop: A,
                leftHorizontalLineTop: M,
                bottomHeaderTop:
                  (window.isApryseWebViewerWebComponent
                    ? Object(Jt.a)().host.clientHeight
                    : window.innerWidth) - d,
                topHeadersHeight: c,
                isCustomUIEnabled: l,
              }),
              Y = V.verticalLineTop,
              K = V.verticalLineHeight,
              $ = V.isAnnotationOffScreen;
            return r.a.createElement(
              tn,
              null,
              r.a.createElement("div", {
                className: "horizontalLine",
                style: { width: w, right: S, top: A },
              }),
              r.a.createElement("div", {
                className: "verticalLine",
                style: { height: K, top: Y, right: S + w },
              }),
              r.a.createElement(
                "div",
                {
                  className: "horizontalLine",
                  style: {
                    width: I,
                    right: z,
                    top: M,
                    visibility: $ ? "hidden" : "visible",
                  },
                },
                r.a.createElement("div", { className: "arrowHead" }),
              ),
            );
          }
          return null;
        };
      on.propTypes = nn;
      var rn = on,
        an = (n(1699), n(1639));
      function ln(e) {
        return (ln =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function cn() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var c = o && o.prototype instanceof l ? o : l,
            s = Object.create(c.prototype);
          return (
            sn(
              s,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  c,
                  s = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (c = e), (p.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, c = o, t = 0;
                    !u && s && !r && t < d.length;
                    t++
                  ) {
                    var r,
                      i = d[t],
                      f = p.p,
                      m = i[2];
                    n > 3
                      ? (r = m === o) &&
                        ((c = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (p.v = o), (p.n = i[1]))
                          : f < m &&
                            (r = n < 3 || i[0] > o || o > m) &&
                            ((i[4] = n), (i[5] = o), (p.n = m), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((u = !0), o);
                }
                return function (r, d, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && f(d, m), l = d, c = m;
                    (t = l < 2 ? e : c) || !u;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (p.n = -1), f(l, c))
                          : (p.n = c)
                        : (p.v = c));
                    try {
                      if (((s = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((c = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (u = p.n < 0) ? c : n.call(o, p)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: u };
                };
              })(n, r, i),
              !0,
            ),
            s
          );
        }
        var a = {};
        function l() {}
        function c() {}
        function s() {}
        t = Object.getPrototypeOf;
        var d = [][o]
            ? t(t([][o]()))
            : (sn((t = {}), o, function () {
                return this;
              }),
              t),
          u = (s.prototype = l.prototype = Object.create(d));
        function p(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), sn(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(u)),
            e
          );
        }
        return (
          (c.prototype = s),
          sn(u, "constructor", s),
          sn(s, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          sn(s, r, "GeneratorFunction"),
          sn(u),
          sn(u, r, "Generator"),
          sn(u, o, function () {
            return this;
          }),
          sn(u, "toString", function () {
            return "[object Generator]";
          }),
          (cn = function () {
            return { w: i, m: p };
          })()
        );
      }
      function sn(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (sn = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              sn(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function dn(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function un(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function pn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? un(Object(n), !0).forEach(function (t) {
                fn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : un(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function fn(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ln(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != ln(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == ln(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function mn(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return bn(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? bn(e, t)
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
      function bn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var hn = {
          annotation: c.a.object.isRequired,
          isMultiSelected: c.a.bool,
          isMultiSelectMode: c.a.bool,
          isInNotesPanel: c.a.bool,
          handleMultiSelect: c.a.func,
        },
        gn = 0,
        yn = function (e) {
          var t = e.annotation,
            n = e.isMultiSelected,
            i = e.isMultiSelectMode,
            l = e.isInNotesPanel,
            c = e.handleMultiSelect,
            p = e.isCustomPanelOpen,
            f = e.shouldHideConnectorLine,
            m = Object(o.useContext)(u.a),
            b = m.isSelected,
            h = m.resize,
            g = m.pendingEditTextMap,
            y = m.isContentEditable,
            v = m.isDocumentReadOnly,
            w = m.isExpandedFromSearch,
            q = m.setCurAnnotId,
            j = Object(o.useRef)(),
            A = Object(o.useRef)(),
            C = mn(Object(o.useState)({}), 2),
            N = C[0],
            S = C[1],
            P = Object(o.useRef)([]),
            T = Object(s.d)(),
            I = mn(Object(d.a)(), 1)[0],
            _ = new Set(),
            R = mn(
              Object(s.e)(function (e) {
                return [
                  k.a.getNoteTransformFunction(e),
                  k.a.getCustomNoteSelectionFunction(e),
                  k.a.getUnreadAnnotationIdSet(e),
                  k.a.isCommentThreadExpansionEnabled(e),
                  k.a.isRightClickAnnotationPopupEnabled(e),
                  k.a.getActiveDocumentViewerKey(e),
                  k.a.getIsOfficeEditorMode(e),
                  k.a.getOfficeEditorEditMode(e),
                ];
              }, s.c),
              8,
            ),
            M = R[0],
            D = R[1],
            L = R[2],
            z = R[3],
            H = R[4],
            F = R[5],
            B = R[6],
            W = R[7],
            U = Object(o.useCallback)(
              function (e, t) {
                S(function (n) {
                  return pn(pn({}, n), {}, fn({}, t, e));
                });
              },
              [S],
            ),
            G = t.getReplies().sort(function (e, t) {
              return e.DateCreated - t.DateCreated;
            });
          (G.filter(function (e) {
            return L.has(e.Id);
          }).forEach(function (e) {
            return _.add(e.Id);
          }),
            Object(o.useEffect)(
              function () {
                var e = function (e, t) {
                  "delete" === t &&
                    e.forEach(function (e) {
                      L.has(e.Id) &&
                        T(
                          E.a.setAnnotationReadState({
                            isRead: !0,
                            annotationId: e.Id,
                          }),
                        );
                    });
                };
                return (
                  x.a.addEventListener("annotationChanged", e, void 0, F),
                  function () {
                    x.a.removeEventListener("annotationChanged", e, F);
                  }
                );
              },
              [L],
            ),
            Object(o.useEffect)(function () {
              var e = A.current,
                t = j.current.getBoundingClientRect().height;
              ((A.current = t), e && Math.round(e) !== Math.round(t) && h());
            }),
            Object(o.useEffect)(function () {
              if (M) {
                var e = Object(Jt.a)().querySelectorAll(".NotesPanel")[0];
                (P.current.forEach(function (t) {
                  var n = e.querySelector(
                    "[data-webviewer-custom-element=".concat(t, "]"),
                  );
                  n && n.parentNode.removeChild(n);
                }),
                  (P.current = []));
                var n = { annotation: t, isSelected: b };
                M(j.current, n, function () {
                  var e,
                    t = (e = document).createElement.apply(e, arguments),
                    n = "custom-element-".concat(gn);
                  return (
                    gn++,
                    P.current.push(n),
                    t.setAttribute("data-webviewer-custom-element", n),
                    t.addEventListener("mousedown", function (e) {
                      e.stopPropagation();
                    }),
                    t
                  );
                });
              }
            }),
            Object(o.useEffect)(
              function () {
                "" !== g[t.Id] && y && !v && U(!0, 0);
              },
              [v, y, U, t, i],
            ),
            Object(qt.a)(
              function () {
                (!v && y) || U(!1, 0);
              },
              [v, y, U],
            ));
          var V = (function () {
              var e,
                o =
                  ((e = cn().m(function e(o) {
                    var r;
                    return cn().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            if ((o && o.stopPropagation(), !i)) {
                              e.n = 1;
                              break;
                            }
                            return (c(!n), e.a(2));
                          case 1:
                            if (
                              (L.has(t.Id) &&
                                T(
                                  E.a.setAnnotationReadState({
                                    isRead: !0,
                                    annotationId: t.Id,
                                  }),
                                ),
                              D && D(t),
                              b ||
                                (x.a.deselectAllAnnotations(F),
                                setTimeout(function () {
                                  return T(
                                    E.a.openElement(
                                      O.a.ANNOTATION_NOTE_CONNECTOR_LINE,
                                    ),
                                  );
                                }, 300)),
                              !l || (B && W === qe.z.PREVIEW))
                            ) {
                              e.n = 3;
                              break;
                            }
                            if (
                              (x.a.selectAnnotation(t, F),
                              q(t.Id),
                              x.a.jumpToAnnotation(t, F),
                              H || T(E.a.openElement(O.a.ANNOTATION_POPUP)),
                              !B)
                            ) {
                              e.n = 3;
                              break;
                            }
                            return (
                              (r = t.getCustomData(qe.w)),
                              (e.n = 2),
                              x.a.getOfficeEditor().moveCursorToTrackedChange(r)
                            );
                          case 2:
                            x.a.getOfficeEditor().freezeMainCursor();
                          case 3:
                            return e.a(2);
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, r) {
                      var i = e.apply(t, n);
                      function a(e) {
                        dn(i, o, r, a, l, "next", e);
                      }
                      function l(e) {
                        dn(i, o, r, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function (e) {
                return o.apply(this, arguments);
              };
            })(),
            Y = _.size > 0,
            K = a()({
              Note: !0,
              expanded: b,
              "is-multi-selected": n,
              unread: L.has(t.Id) || Y,
              disabled: B && W === qe.z.PREVIEW,
            }),
            $ = a()({ replies: !0, hidden: !b });
          (Object(o.useEffect)(
            function () {
              i ||
                G.forEach(function (e, t) {
                  var n = g[e.Id];
                  "" !== n && void 0 !== n && b && U(!0, 1 + t);
                });
            },
            [b, i],
          ),
            Object(o.useEffect)(
              function () {
                i && U(!1, 0);
              },
              [i],
            ));
          var Z = !Object.values(N).some(function (e) {
              return e;
            }),
            X = function (e) {
              _.has(e.Id) &&
                (T(
                  E.a.setAnnotationReadState({
                    isRead: !0,
                    annotationId: e.Id,
                  }),
                ),
                x.a.getAnnotationManager(F).selectAnnotation(e));
            },
            J = function () {
              if (_.size > 0) {
                var e = G.filter(function (e) {
                  return _.has(e.Id);
                });
                (x.a.getAnnotationManager(F).selectAnnotations(e),
                  e.forEach(function (e) {
                    return T(
                      E.a.setAnnotationReadState({
                        isRead: !0,
                        annotationId: e.Id,
                      }),
                    );
                  }));
              }
            },
            Q = x.a.getGroupAnnotations(t, F),
            ee = Q.length > 1,
            te = Object(wt.g)(t) === wt.c.TRACKED_CHANGE,
            ne = G.length > 0 ? G[G.length - 1].Id : null,
            oe = Object(an.a)(x.a, t),
            re = b && (l || p) && !f && oe;
          return r.a.createElement(
            "div",
            { ref: j, className: K, id: "note_".concat(t.Id) },
            r.a.createElement(be.a, {
              className: "note-button",
              onClick: function (e) {
                return V(e);
              },
              ariaLabelledby: "note_".concat(t.Id),
              ariaCurrent: b,
              dataElement: "expandNoteButton",
            }),
            r.a.createElement(Rt, {
              noteIndex: 0,
              annotation: t,
              setIsEditing: U,
              handleNoteClick: V,
              isEditing: N[0],
              isNonReplyNoteRead: !L.has(t.Id),
              isUnread: L.has(t.Id) || Y,
              handleMultiSelect: function (e) {
                (q(t.Id), c(e));
              },
              isMultiSelected: n,
              isMultiSelectMode: i,
            }),
            (b || w || z) &&
              !te &&
              r.a.createElement(
                r.a.Fragment,
                null,
                G.length > 0 &&
                  r.a.createElement(
                    "div",
                    { className: $ },
                    Y &&
                      r.a.createElement(be.a, {
                        dataElement: "markAllReadButton",
                        className: "mark-all-read-button",
                        label: I("action.markAllRead"),
                        onClick: J,
                      }),
                    G.map(function (e, t) {
                      return r.a.createElement(
                        "div",
                        {
                          className: "reply",
                          id: "note_reply_".concat(e.Id),
                          key: "note_reply_".concat(e.Id),
                        },
                        r.a.createElement(Rt, {
                          noteIndex: t + 1,
                          key: e.Id,
                          annotation: e,
                          setIsEditing: U,
                          isEditing: N[t + 1],
                          onReplyClicked: X,
                          isUnread: L.has(e.Id),
                          handleMultiSelect: c,
                          isMultiSelected: n,
                          isMultiSelectMode: i,
                          handleNoteClick: V,
                        }),
                      );
                    }),
                  ),
                ee &&
                  r.a.createElement(Kt, {
                    groupAnnotations: Q,
                    isMultiSelectMode: i,
                  }),
                Z &&
                  !i &&
                  r.a.createElement(Wt, {
                    isUnread: ne && L.has(ne),
                    onPendingReplyChange: J,
                    annotation: t,
                  }),
              ),
            re &&
              r.a.createElement(rn, {
                annotation: t,
                noteContainerRef: j,
                isCustomPanelOpen: p,
              }),
          );
        };
      yn.propTypes = hn;
      var vn = yn;
      t.a = vn;
    },
    1937: function (e, t, n) {
      var o = n(35),
        r = n(1938);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1938: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ".open.InlineCommentingPopup{visibility:visible}.closed.InlineCommentingPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.InlineCommentingPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.InlineCommentingPopup:empty{padding:0}.InlineCommentingPopup .buttons{display:flex}.InlineCommentingPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button{width:42px;height:42px}}.InlineCommentingPopup .Button:hover{background:var(--popup-button-hover)}.InlineCommentingPopup .Button:hover:disabled{background:none}.InlineCommentingPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button .Icon{width:24px;height:24px}}.is-vertical.InlineCommentingPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-inline-start:var(--padding-small);padding-inline-end:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.InlineCommentingPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.InlineCommentingPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.InlineCommentingPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.InlineCommentingPopup .Button.main-menu-button .Icon{margin-inline-end:10px}.is-vertical.InlineCommentingPopup .Button.main-menu-button span{white-space:nowrap}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.InlineCommentingPopup{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);align-items:flex-start}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;flex-direction:column;justify-content:flex-end;width:100%;background:var(--modal-negative-space)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;flex-direction:column;justify-content:flex-end;width:100%;background:var(--modal-negative-space)}}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup{overflow:auto;max-height:calc(100% - 100px)}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup{overflow:auto;max-height:calc(100% - 100px)}}.InlineCommentingPopup .inline-comment-container{display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .inline-comment-container{flex-basis:auto;width:100%;max-height:40%;background:var(--component-background);box-shadow:0 0 3px 0 var(--document-box-shadow);border-radius:4px 4px 0 0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .inline-comment-container{flex-basis:auto;width:100%;max-height:40%;background:var(--component-background);box-shadow:0 0 3px 0 var(--document-box-shadow);border-radius:4px 4px 0 0}}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .inline-comment-container{width:260px}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .inline-comment-container{width:260px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .inline-comment-container.expanded{flex-grow:1;max-height:90%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .inline-comment-container.expanded{flex-grow:1;max-height:90%}}.InlineCommentingPopup .inline-comment-container .inline-comment-header{flex-grow:0;flex-shrink:0;display:flex;flex-direction:row;align-items:center}.InlineCommentingPopup .inline-comment-container .inline-comment-header .inline-comment-header-title{flex-grow:1;font-size:16px}.InlineCommentingPopup .inline-comment-container .inline-comment-header .Button{margin:4px}.InlineCommentingPopup .Note{border-radius:0;background:none;margin:0;cursor:default}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note{flex-grow:1;display:flex;flex-direction:column;overflow:auto;box-shadow:0 0 3px 0 var(--document-box-shadow)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note{flex-grow:1;display:flex;flex-direction:column;overflow:auto;box-shadow:0 0 3px 0 var(--document-box-shadow)}}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note{box-shadow:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note{box-shadow:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note>div:not(:nth-last-child(2)){flex-grow:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note>div:not(:nth-last-child(2)){flex-grow:0}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note>div:nth-last-child(2){flex-grow:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note>div:nth-last-child(2){flex-grow:1}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note>.NoteContent:only-child{flex-grow:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note>.NoteContent:only-child{flex-grow:1}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note>.NoteContent:only-child .edit-content{flex-grow:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note>.NoteContent:only-child .edit-content{flex-grow:0}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .NoteHeader{flex-grow:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .NoteHeader{flex-grow:0}}.InlineCommentingPopup .NoteContent .edit-content{margin-top:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .ql-container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .ql-editor,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .quill{font-size:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .ql-container,.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .ql-editor,.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .quill{font-size:16px}}.InlineCommentingPopup .Button,.InlineCommentingPopup .Button.add-attachment,.InlineCommentingPopup .Button.reply-button{margin:0}.InlineCommentingPopup .Button.add-attachment .Icon,.InlineCommentingPopup .Button.reply-button .Icon{width:22px;height:22px}.InlineCommentingPopup .Button.add-attachment{width:24px;height:24px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button.add-attachment{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button.add-attachment{width:24px;height:24px}}.InlineCommentingPopup .Button.note-popup-toggle-trigger,.InlineCommentingPopup .Button.reply-button{width:28px;height:28px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button.note-popup-toggle-trigger,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button.reply-button{width:28px;height:28px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button.note-popup-toggle-trigger,.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button.reply-button{width:28px;height:28px}}.sb-show-main .InlineCommentingPopup .quill.comment-textarea{padding:0}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2113: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
        n(34),
        n(27),
        n(21),
        n(76),
        n(20),
        n(12),
        n(22),
        n(129),
        n(31),
        n(18),
        n(16),
        n(28),
        n(48),
        n(24),
        n(47),
        n(49),
        n(37),
        n(8),
        n(17),
        n(19),
        n(11),
        n(29),
        n(13));
      var o = n(0),
        r = n.n(o),
        i = n(6),
        a = n(185),
        l = n.n(a),
        c = n(15),
        s = n.n(c),
        d = n(2),
        u = n.n(d),
        p = n(305),
        f = n(1571),
        m = n(1709),
        b = n(1701),
        h = n(41),
        g = n(5),
        y = n(53);
      n(1937);
      function v(e) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                x(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function x(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != v(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != v(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == v(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function k(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return O(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? O(e, t)
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
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var E = {
          isMobile: u.a.bool,
          isUndraggable: u.a.bool,
          isNotesPanelClosed: u.a.bool,
          popupRef: u.a.any,
          position: u.a.object,
          closeAndReset: u.a.func,
          commentingAnnotation: u.a.object,
          contextValue: u.a.object,
          annotationForAttachment: u.a.string,
          addAttachments: u.a.func,
        },
        j = function (e) {
          var t = e.isMobile,
            n = e.isUndraggable,
            i = e.isNotesPanelClosed,
            a = e.popupRef,
            c = e.position,
            d = e.closeAndReset,
            u = e.commentingAnnotation,
            v = e.contextValue,
            w = e.annotationForAttachment,
            x = e.addAttachments,
            O = k(Object(p.a)(), 1)[0],
            E = k(Object(o.useState)(!1), 2),
            j = E[0],
            A = E[1],
            C = Object(y.g)(u) === y.c.TRACKED_CHANGE,
            N = r.a.createElement(
              "div",
              {
                className: s()({
                  Popup: !0,
                  InlineCommentingPopup: !0,
                  open: i,
                  trackedChangePopup: C,
                }),
                ref: a,
                "data-element": g.a.INLINE_COMMENT_POPUP,
                style: q({}, c),
                onMouseMove: function (e) {
                  e.stopPropagation();
                },
                onMouseDown: function (e) {
                  t && (e.stopPropagation(), d());
                },
                onKeyDown: function (e) {
                  "Escape" === e.key && d();
                },
              },
              r.a.createElement(
                "div",
                {
                  className: s()({
                    "inline-comment-container": !0,
                    expanded: j,
                  }),
                  onMouseDown: function (e) {
                    t && e.stopPropagation();
                  },
                },
                t &&
                  r.a.createElement(
                    "div",
                    { className: "inline-comment-header" },
                    r.a.createElement(h.a, {
                      img: j ? "icon-chevron-down" : "icon-chevron-up",
                      className: "expand-arrow",
                      dataElement: g.a.INLINE_COMMENT_POPUP_EXPAND_BUTTON,
                      onClick: function () {
                        return A(!j);
                      },
                    }),
                    r.a.createElement(
                      "span",
                      { className: "inline-comment-header-title" },
                      O("action.comment"),
                    ),
                    r.a.createElement(h.a, {
                      img: "icon-close",
                      dataElement: g.a.INLINE_COMMENT_POPUP_CLOSE_BUTTON,
                      onClick: d,
                    }),
                  ),
                r.a.createElement(
                  f.a.Provider,
                  { value: v },
                  r.a.createElement(m.a, {
                    annotation: u,
                    isMultiSelected: !1,
                    isMultiSelectMode: !1,
                    handleMultiSelect: function () {},
                  }),
                  r.a.createElement(b.a, {
                    annotationId: w,
                    addAttachments: x,
                  }),
                ),
              ),
            );
          return n || C
            ? N
            : r.a.createElement(
                l.a,
                {
                  cancel:
                    ".Button, .cell, svg, select, button, input, .quill, .note-text-preview",
                },
                N,
              );
        };
      j.propTypes = E;
      var A = j,
        C = n(1),
        N = n(230),
        S = n(216),
        P = n(144),
        T = n(3),
        I = n(4),
        _ = n(45),
        R = n(23),
        M = n(105),
        D = n.n(M),
        L = n(57);
      function z(e) {
        return (z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function H(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return V(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          G(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : F(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function W(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != z(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != z(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == z(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function U(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          G(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function G(e, t) {
        if (e) {
          if ("string" == typeof e) return V(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? V(e, t)
                : void 0
          );
        }
      }
      function V(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Y = { annotation: u.a.object, closeAndReset: u.a.func },
        K = function (e) {
          var t = e.annotation,
            n = e.closeAndReset,
            a = U(
              Object(i.e)(function (e) {
                return [
                  I.a.isElementOpen(e, g.a.NOTES_PANEL),
                  I.a.getNotesInLeftPanel(e),
                  I.a.isElementOpen(e, g.a.LEFT_PANEL),
                  I.a.getActiveLeftPanel(e),
                  I.a.isAnnotationNumberingEnabled(e),
                  I.a.getSortStrategy(e),
                  I.a.isDocumentReadOnly(e),
                  I.a.getActiveDocumentViewerKey(e),
                ];
              }, i.c),
              8,
            ),
            l = a[0],
            c = a[1],
            s = a[2],
            d = a[3],
            u = a[4],
            p = a[5],
            f = a[6],
            m = a[7],
            b = Object(i.d)(),
            h = U(Object(o.useState)({ left: 0, top: 0 }), 2),
            y = h[0],
            v = h[1],
            w = Object(o.useRef)(),
            q = Object(_.k)(),
            x = q || !!_.l || _.e,
            k = l || (c && s && "notesPanel" === d);
          Object(P.a)(w, function (e) {
            var n = Object(R.a)().querySelector('[data-element="notesPanel"]'),
              o = null == n ? void 0 : n.contains(e.target),
              r = Object(R.a)().querySelector(
                '[data-element="noteStateFlyout-'.concat(t.Id, '"]'),
              ),
              i = null == r ? void 0 : r.contains(e.target),
              a = Object(S.b)(),
              l = Object(S.d)(),
              c = Object(S.c)();
            o ||
              i ||
              l ||
              c ||
              a ||
              b(T.a.closeElement(g.a.INLINE_COMMENT_POPUP));
          });
          var O = !k,
            E = function () {
              O && w.current && !q && v(Object(N.c)(t, w, m));
            };
          Object(o.useLayoutEffect)(
            function () {
              E();
            },
            [m, t],
          );
          var j = D()(
            function () {
              E();
            },
            16,
            { trailing: !0, leading: !1 },
          );
          Object(o.useLayoutEffect)(function () {
            return (
              window.addEventListener("resize", j),
              function () {
                window.removeEventListener("resize", j);
              }
            );
          }, []);
          var M = U(Object(o.useState)({}), 2),
            z = M[0],
            F = M[1],
            G = function (e, t) {
              F(function (n) {
                return B(
                  B({}, n),
                  {},
                  W({}, e, [].concat(H(n[e] || []), H(t))),
                );
              });
            },
            V = U(Object(o.useState)(void 0), 2),
            Y = V[0],
            K = V[1],
            $ = U(Object(o.useState)({}), 2),
            Z = $[0],
            X = $[1],
            J = Object(o.useCallback)(
              function (e, t) {
                X(function (n) {
                  return B(B({}, n), {}, W({}, t, e));
                });
              },
              [X],
            ),
            Q = U(Object(o.useState)({}), 2),
            ee = Q[0],
            te = Q[1],
            ne = Object(o.useCallback)(
              function (e, t) {
                te(function (n) {
                  return B(B({}, n), {}, W({}, t, e));
                });
              },
              [te],
            ),
            oe = {
              searchInput: "",
              resize: function () {
                var e;
                (null === (e = C.a.getDocument()) || void 0 === e
                  ? void 0
                  : e.getType()) === L.a.OFFICE_EDITOR &&
                  v(Object(N.c)(t, w, m));
              },
              isSelected: !0,
              isContentEditable: C.a.canModifyContents(t) && !t.getContents(),
              pendingEditTextMap: Z,
              setPendingEditText: J,
              pendingReplyMap: ee,
              setPendingReply: ne,
              isDocumentReadOnly: f,
              onTopNoteContentClicked: function () {},
              isExpandedFromSearch: !1,
              scrollToSelectedAnnot: !1,
              sortStrategy: p,
              showAnnotationNumbering: u,
              setCurAnnotId: K,
              pendingAttachmentMap: z,
              addAttachments: G,
              clearAttachments: function (e) {
                F(function (t) {
                  return B(B({}, t), {}, W({}, e, []));
                });
              },
              deleteAttachment: function (e, t) {
                var n = z[e];
                if ((null == n ? void 0 : n.length) > 0) {
                  var o = n.indexOf(t);
                  o > -1 &&
                    (n.splice(o, 1),
                    F(function (t) {
                      return B(B({}, t), {}, W({}, e, H(n)));
                    }));
                }
              },
            };
          return r.a.createElement(A, {
            isMobile: q,
            isUndraggable: x,
            isNotesPanelClosed: O,
            popupRef: w,
            position: y,
            closeAndReset: n,
            commentingAnnotation: t,
            contextValue: oe,
            annotationForAttachment: Y,
            addAttachments: G,
          });
        };
      K.propTypes = Y;
      var $ = K;
      t.default = $;
    },
  },
]);
//# sourceMappingURL=chunk.29.js.map
