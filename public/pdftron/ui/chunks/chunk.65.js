(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  {
    2071: function (e, t, n) {
      var i = n(35),
        o = n(2072);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var r = {
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
            const o = t[i];
            if (0 === i)
              (o.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (o.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      i(o, r);
      e.exports = o.locals || {};
    },
    2072: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.MainHeader.OfficeEditorTools{padding:0 8px;align-items:center;flex-direction:row}.MainHeader.OfficeEditorTools .HeaderItems{width:auto}.MainHeader.OfficeEditorTools .HeaderItems .Dropdown{margin-inline-start:8px}.MainHeader.OfficeEditorTools .HeaderItems .Dropdown .picked-option{text-align:start}.MainHeader.OfficeEditorTools .HeaderItems .action-button-wrapper{display:flex;align-items:center;position:relative}.MainHeader.OfficeEditorTools .HeaderItems .action-button-wrapper .more-tools{position:absolute;inset-block-start:46px;inset-inline-end:6px;width:auto;padding:0}.MainHeader.OfficeEditorTools .Button .Icon svg{vertical-align:middle}.MainHeader.OfficeEditorTools .icon-text-color{display:flex;align-items:center;justify-content:center}.MainHeader.OfficeEditorTools .list-style-button{margin-inline-end:0!important}.MainHeader.OfficeEditorTools .list-style-dropdown{background:transparent;border:none;width:12px!important;height:32px!important;margin-inline-start:0!important;z-index:0}.MainHeader.OfficeEditorTools .list-style-dropdown.Dropdown__wrapper:hover{border-radius:4px;background:var(--tools-button-hover)}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown{padding:0}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown svg rect{stroke:none}.MainHeader.OfficeEditorTools .list-style-dropdown .picked-option-text{display:none}.MainHeader.OfficeEditorTools .list-style-dropdown .arrow{padding-inline-start:0}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown__items{overflow:hidden;width:auto!important}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown__items .Dropdown__item{height:74px!important;padding:15px 0;margin:3px;cursor:pointer}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown__items .Dropdown__item .officeEditor-list-style-icon{width:60px!important;height:74px!important}.MainHeader.OfficeEditorTools .insert-table-dropdown{margin:0 6px}.MainHeader.OfficeEditorTools .insert-table-dropdown.open{background-color:var(--tools-button-hover);border-radius:4px}.MainHeader.OfficeEditorTools .insert-table-dropdown .display-button{display:flex;align-items:center;cursor:pointer}.MainHeader.OfficeEditorTools .insert-table-dropdown .display-button:hover{background-color:var(--tools-button-hover);border-radius:4px}.MainHeader.OfficeEditorTools .insert-table-dropdown .display-button .Button{background-color:transparent!important}.MainHeader.OfficeEditorTools .insert-table-dropdown .display-button .Icon.arrow{width:12px;height:12px;margin:0 2px}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2084: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(34),
        n(27),
        n(21),
        n(50),
        n(20),
        n(12),
        n(44),
        n(22),
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
        n(111),
        n(56),
        n(17),
        n(19),
        n(62),
        n(11),
        n(231),
        n(266),
        n(29),
        n(13));
      var i = n(0),
        o = n.n(i),
        r = n(6),
        a = n(3),
        c = n(4),
        l = n(206),
        d = n(2),
        s = n.n(d),
        f = n(1),
        u = n(72),
        p = n(82),
        m = n(349),
        E = n(60),
        g = n(592),
        b = n(593),
        y = n(51),
        h = n(594),
        O = n(5),
        v = n(232),
        w = n(25),
        S = n(570),
        T = n(65);
      (n(486), n(2071), n(637));
      function x(e) {
        return (x =
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
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                F(e, t, n[t]);
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
      function j(e, t) {
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
                o,
                r,
                a,
                c = [],
                l = !0,
                d = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = r.call(n)).done) &&
                    (c.push(i.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                ((d = !0), (o = e));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw o;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return _(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? _(e, t)
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
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function A() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function r(n, i, o, r) {
          var l = i && i.prototype instanceof c ? i : c,
            d = Object.create(l.prototype);
          return (
            H(
              d,
              "_invoke",
              (function (n, i, o) {
                var r,
                  c,
                  l,
                  d = 0,
                  s = o || [],
                  f = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return ((r = t), (c = 0), (l = e), (u.n = n), a);
                    },
                  };
                function p(n, i) {
                  for (
                    c = n, l = i, t = 0;
                    !f && d && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      r = s[t],
                      p = u.p,
                      m = r[2];
                    n > 3
                      ? (o = m === i) &&
                        ((l = r[(c = r[4]) ? 5 : ((c = 3), 3)]),
                        (r[4] = r[5] = e))
                      : r[0] <= p &&
                        ((o = n < 2 && p < r[1])
                          ? ((c = 0), (u.v = i), (u.n = r[1]))
                          : p < m &&
                            (o = n < 3 || r[0] > i || i > m) &&
                            ((r[4] = n), (r[5] = i), (u.n = m), (c = 0)));
                  }
                  if (o || n > 1) return a;
                  throw ((f = !0), i);
                }
                return function (o, s, m) {
                  if (d > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === s && p(s, m), c = s, l = m;
                    (t = c < 2 ? e : l) || !f;

                  ) {
                    r ||
                      (c
                        ? c < 3
                          ? (c > 1 && (u.n = -1), p(c, l))
                          : (u.n = l)
                        : (u.v = l));
                    try {
                      if (((d = 2), r)) {
                        if ((c || (o = "next"), (t = r[o]))) {
                          if (!(t = t.call(r, l)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((l = t.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (t = r.return) && t.call(r),
                            c < 2 &&
                              ((l = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (c = 1)));
                        r = e;
                      } else if ((t = (f = u.n < 0) ? l : n.call(i, u)) !== a)
                        break;
                    } catch (t) {
                      ((r = e), (c = 1), (l = t));
                    } finally {
                      d = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(n, o, r),
              !0,
            ),
            d
          );
        }
        var a = {};
        function c() {}
        function l() {}
        function d() {}
        t = Object.getPrototypeOf;
        var s = [][i]
            ? t(t([][i]()))
            : (H((t = {}), i, function () {
                return this;
              }),
              t),
          f = (d.prototype = c.prototype = Object.create(s));
        function u(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, d)
              : ((e.__proto__ = d), H(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (l.prototype = d),
          H(f, "constructor", d),
          H(d, "constructor", l),
          (l.displayName = "GeneratorFunction"),
          H(d, o, "GeneratorFunction"),
          H(f),
          H(f, o, "Generator"),
          H(f, i, function () {
            return this;
          }),
          H(f, "toString", function () {
            return "[object Generator]";
          }),
          (A = function () {
            return { w: r, m: u };
          })()
        );
      }
      function H(e, t, n, i) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (H = function (e, t, n, i) {
          if (t)
            o
              ? o(e, t, {
                  value: n,
                  enumerable: !i,
                  configurable: !i,
                  writable: !i,
                })
              : (e[t] = n);
          else {
            var r = function (t, n) {
              H(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(e, t, n, i);
      }
      function k(e, t, n, i, o, r, a) {
        try {
          var c = e[r](a),
            l = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function P(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              k(r, i, o, a, c, "next", e);
            }
            function c(e) {
              k(r, i, o, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function F(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != x(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, t || "default");
                if ("object" != x(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == x(t) ? t : t + "";
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
      var N = window.Core.Document.OfficeEditor.ToggleableStyles,
        M = function (e) {
          var t = e.activeStates;
          return Object.values(N).map(function (e) {
            return o.a.createElement(p.a, {
              key: e,
              isActive: t[e],
              ariaPressed: t[e],
              onClick: function () {
                f.a
                  .getOfficeEditor()
                  .updateSelectionAndCursorStyle(F({}, e, !0));
              },
              dataElement: "office-editor-".concat(e),
              title: "officeEditor.".concat(e),
              img: "icon-text-".concat(e),
            });
          });
        },
        D = function (e) {
          var t = e.justification;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(p.a, {
              isActive: t === w.l.Left,
              dataElement: "office-editor-left-align",
              title: "officeEditor.leftAlign",
              img: "icon-menu-left-align",
              onClick: function () {
                f.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: "left" });
              },
            }),
            o.a.createElement(p.a, {
              isActive: t === w.l.Center,
              dataElement: "office-editor-center-align",
              title: "officeEditor.centerAlign",
              img: "icon-menu-center-align",
              onClick: function () {
                f.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: "center" });
              },
            }),
            o.a.createElement(p.a, {
              isActive: t === w.l.Right,
              dataElement: "office-editor-right-align",
              title: "officeEditor.rightAlign",
              img: "icon-menu-right-align",
              onClick: function () {
                f.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: "right" });
              },
            }),
            o.a.createElement(p.a, {
              isActive: t === w.l.Both,
              dataElement: "office-editor-justify",
              title: "officeEditor.justify",
              img: "icon-menu-both-align",
              onClick: function () {
                f.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: "both" });
              },
            }),
          );
        },
        R = function (e) {
          var t = e.listType,
            n = w.u.map(function (e) {
              return {
                className: "officeEditor-list-style-icon",
                key: e.enum,
                src: e.img,
              };
            }),
            i = w.y.map(function (e) {
              return {
                className: "officeEditor-list-style-icon",
                key: e.enum,
                src: e.img,
              };
            });
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(p.a, {
              isActive: t === w.o.Unordered,
              dataElement: "unorderedListDropButton",
              title: "officeEditor.bulletList",
              img: "icon-office-editor-bullet-list",
              className: "list-style-button",
              onClick: function () {
                f.a.getOfficeEditor().toggleListSelection(w.o.Unordered);
              },
            }),
            o.a.createElement(u.a, {
              id: "office-editor-bullet-list-dropdown",
              dataElement: "office-editor-bullet-list-dropdown",
              images: n,
              columns: 3,
              onClickItem: function (e) {
                f.a.getOfficeEditor().setListPreset(e);
              },
              className: "list-style-dropdown",
            }),
            o.a.createElement(p.a, {
              isActive: t === w.o.Ordered,
              dataElement: "office-editor-number-list",
              title: "officeEditor.numberList",
              img: "icon-office-editor-number-list",
              className: "list-style-button",
              onClick: function () {
                f.a.getOfficeEditor().toggleListSelection(w.o.Ordered);
              },
            }),
            o.a.createElement(u.a, {
              id: "office-editor-number-list-dropdown",
              dataElement: "office-editor-number-list-dropdown",
              images: i,
              columns: 3,
              onClickItem: function (e) {
                f.a.getOfficeEditor().setListPreset(e);
              },
              className: "list-style-dropdown",
            }),
            o.a.createElement(p.a, {
              dataElement: "decreaseIndentButton",
              title: "officeEditor.decreaseIndent",
              img: "ic-indent-decrease",
              onClick: P(
                A().m(function e() {
                  return A().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (e.n = 1),
                            f.a.getOfficeEditor().decreaseIndent()
                          );
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                }),
              ),
            }),
            o.a.createElement(p.a, {
              dataElement: "increaseIndentButton",
              title: "officeEditor.increaseIndent",
              img: "ic-indent-increase",
              onClick: P(
                A().m(function e() {
                  return A().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (e.n = 1),
                            f.a.getOfficeEditor().increaseIndent()
                          );
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                }),
              ),
            }),
          );
        };
      R.propTypes = { listType: s.a.string };
      t.default = function () {
        var e,
          t = Object(r.d)(),
          n = j(
            Object(r.e)(function (e) {
              return [
                c.a.isElementOpen(e, O.a.OFFICE_EDITOR_TOOLS_HEADER),
                c.a.getOfficeEditorCursorProperties(e),
                c.a.isCursorInTable(e),
                c.a.getOfficeEditorSelectionProperties(e),
                c.a.getAvailableFontFaces(e),
                c.a.getActiveTheme(e),
                c.a.getCSSFontValues(e),
                c.a.isNonPrintingCharactersEnabled(e),
              ];
            }, r.c),
            8,
          ),
          d = n[0],
          s = n[1],
          x = n[2],
          C = n[3],
          _ = n[4],
          H = n[5],
          k = n[6],
          F = n[7],
          N = j(Object(i.useState)(0), 2),
          L = N[0],
          B = N[1],
          G = j(Object(i.useState)(0), 2),
          z = G[0],
          U = G[1],
          K = j(Object(i.useState)(6), 2),
          V = K[0],
          W = K[1],
          X = j(Object(i.useState)(!1), 2),
          q = X[0],
          J = X[1];
        (Object(i.useEffect)(function () {
          var e,
            n = (function () {
              var e = P(
                A().m(function e(n) {
                  return A().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          t(a.a.setOfficeEditorCursorProperties(n));
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            i = function (e) {
              t(a.a.setOfficeEditorSelectionProperties(e));
            };
          return (
            f.a.getDocument().addEventListener("cursorPropertiesUpdated", n),
            null === (e = f.a.getDocument()) ||
              void 0 === e ||
              e.addEventListener("selectionPropertiesUpdated", i),
            function () {
              (f.a
                .getDocument()
                .removeEventListener("selectionPropertiesUpdated", i),
                f.a
                  .getDocument()
                  .removeEventListener("cursorPropertiesUpdated", n));
            }
          );
        }, []),
          Object(i.useEffect)(
            function () {
              s.fontFace &&
                !_.includes(s.fontFace) &&
                t(a.a.addOfficeEditorAvailableFontFace(s.fontFace));
            },
            [_, s],
          ),
          Object(i.useEffect)(
            function () {
              if (0 !== L && 0 !== z) {
                var e = L - 16;
                W(
                  e >= z
                    ? 6
                    : e < z && e >= z - 121 + 77
                      ? 5
                      : e < z - 121 + 77 && e >= z - 121 - 209 + 77 && e >= 858
                        ? 4
                        : 3,
                );
              }
            },
            [L, z],
          ));
        var Y = f.a.getOfficeEditor().isTextSelected() ? C : s,
          $ = Y.bold,
          Q = Y.italic,
          Z = "single" === Y.underlineStyle,
          ee = Y.fontFace || "",
          te = Y.pointSize,
          ne = void 0 === te ? "" : te.toString(),
          ie = Y.paragraphProperties.justification,
          oe = Object(T.d)(
            Y.paragraphProperties.lineHeightMultiplier,
            Y.paragraphProperties.lineHeight,
            s.paragraphProperties.fontPointSize || w.f,
          ),
          re = Y.paragraphProperties.listType,
          ae = H === v.a.LIGHT,
          ce = Object(T.e)(Y.color),
          le = ae
            ? "rgba(255,255,255,1)" === ce.toString()
            : "rgba(0,0,0,1)" === ce.toString(),
          de =
            null == ce || null === (e = ce.toHexString) || void 0 === e
              ? void 0
              : e.call(ce);
        return d
          ? o.a.createElement(
              E.a,
              {
                dataElement: O.a.OFFICE_EDITOR_TOOLS_HEADER,
                className: "HeaderToolsContainer",
              },
              o.a.createElement(
                l.a,
                {
                  bounds: !0,
                  onResize: function (e) {
                    var t = e.bounds;
                    B(t.width);
                  },
                },
                function (e) {
                  var n = e.measureRef;
                  return o.a.createElement(
                    "div",
                    { className: "MainHeader Tools OfficeEditorTools", ref: n },
                    o.a.createElement(
                      l.a,
                      {
                        bounds: !0,
                        onResize: function (e) {
                          var t = e.bounds;
                          0 === z && U(t.width);
                        },
                      },
                      function (e) {
                        var n = e.measureRef;
                        return o.a.createElement(
                          "div",
                          { className: "HeaderItems", ref: n },
                          o.a.createElement(u.a, {
                            id: "office-editor-text-format",
                            items: Object.keys(w.b),
                            onOpened: function () {
                              return J(!1);
                            },
                            onClickItem: (function () {
                              var e = P(
                                A().m(function e(t) {
                                  var n, i, o, r, a;
                                  return A().w(function (e) {
                                    for (;;)
                                      switch (e.n) {
                                        case 0:
                                          return (
                                            (n = w.b[t]),
                                            (i = parseInt(n.fontSize, 10)),
                                            (o =
                                              new window.Core.Annotations.Color(
                                                n.color,
                                              )),
                                            (r = {
                                              r: o.R,
                                              g: o.G,
                                              b: o.B,
                                              a: 255,
                                            }),
                                            (a = {
                                              bold: !1,
                                              italic: !1,
                                              underline: !1,
                                              pointSize: i,
                                              color: r,
                                            }),
                                            (e.n = 1),
                                            f.a
                                              .getOfficeEditor()
                                              .updateParagraphStylePresets(a)
                                          );
                                        case 1:
                                          return (
                                            (e.n = 2),
                                            f.a
                                              .getOfficeEditor()
                                              .setMainCursorStyle(a)
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
                            })(),
                            getCustomItemStyle: function (e) {
                              return I(
                                I({}, w.b[e]),
                                {},
                                {
                                  padding: "20px 10px",
                                  color: "var(--gray-8)",
                                },
                              );
                            },
                            applyCustomStyleToButton: !1,
                            currentSelectionKey: Object(T.f)(Y),
                            width: 160,
                            dataElement: "office-editor-text-format",
                          }),
                          o.a.createElement(u.a, {
                            id: "office-editor-font",
                            items: _,
                            onOpened: function () {
                              return J(!1);
                            },
                            onClickItem: function (e) {
                              "string" == typeof e &&
                                f.a
                                  .getOfficeEditor()
                                  .updateSelectionAndCursorStyle({
                                    fontFace: e,
                                  });
                            },
                            getCustomItemStyle: function (e) {
                              return I({}, k[e]);
                            },
                            maxHeight: 500,
                            customDataValidator: function (e) {
                              return _.includes(e);
                            },
                            width: 160,
                            dataElement: "office-editor-font",
                            currentSelectionKey: ee,
                            hasInput: !0,
                          }),
                          o.a.createElement(u.a, {
                            id: "office-editor-font-size",
                            items: w.a,
                            onOpened: function () {
                              return J(!1);
                            },
                            onClickItem: function (e) {
                              var t = parseInt(e, 10);
                              (isNaN(t) && (t = w.f),
                                t > w.j.MAX
                                  ? (t = w.j.MAX)
                                  : t < w.j.MIN && (t = w.j.MIN),
                                f.a
                                  .getOfficeEditor()
                                  .updateSelectionAndCursorStyle({
                                    pointSize: t,
                                  }));
                            },
                            currentSelectionKey: ne,
                            width: 80,
                            dataElement: "office-editor-font-size",
                            hasInput: !0,
                            isSearchEnabled: !1,
                          }),
                          V >= 4 &&
                            o.a.createElement(
                              o.a.Fragment,
                              null,
                              o.a.createElement("div", {
                                className: "divider",
                              }),
                              o.a.createElement(M, {
                                activeStates: {
                                  bold: $,
                                  italic: Q,
                                  underline: Z,
                                },
                              }),
                            ),
                          o.a.createElement("div", { className: "divider" }),
                          o.a.createElement(m.a, {
                            onClick: function () {
                              return J(!1);
                            },
                            dataElement: O.a.OFFICE_EDITOR_TEXT_COLOR_BUTTON,
                            title: "officeEditor.textColor",
                            ariaLabel: de,
                            img: "icon-office-editor-circle",
                            element: O.a.OFFICE_EDITOR_COLOR_PICKER_OVERLAY,
                            color: ce.toString(),
                            iconClassName: "".concat(
                              le ? "icon-border" : "",
                              " icon-text-color",
                            ),
                          }),
                          o.a.createElement(b.a, {
                            onStyleChange: function (e, n) {
                              var i = { r: n.R, g: n.G, b: n.B, a: 255 };
                              (f.a
                                .getOfficeEditor()
                                .updateSelectionAndCursorStyle({ color: i }),
                                t(
                                  a.a.closeElements([
                                    O.a.OFFICE_EDITOR_COLOR_PICKER_OVERLAY,
                                  ]),
                                ));
                            },
                            color: ce,
                          }),
                          V >= 5 &&
                            o.a.createElement(
                              o.a.Fragment,
                              null,
                              o.a.createElement("div", {
                                className: "divider",
                              }),
                              o.a.createElement(D, { justification: ie }),
                            ),
                          o.a.createElement("div", { className: "divider" }),
                          o.a.createElement(u.a, {
                            id: "office-editor-line-spacing",
                            items: Object.keys(w.n),
                            onClickItem: function (e) {
                              var t = w.n[e];
                              f.a
                                .getOfficeEditor()
                                .updateParagraphStyle({
                                  lineHeightMultiplier: t,
                                });
                            },
                            currentSelectionKey: oe,
                            width: 80,
                            dataElement: "office-editor-line-spacing",
                            displayButton: function (e) {
                              return o.a.createElement(p.a, {
                                title: "officeEditor.lineSpacing",
                                img: "icon-office-editor-line-spacing",
                                isActive: e,
                                onClick: function () {
                                  return J(!1);
                                },
                              });
                            },
                          }),
                          o.a.createElement("div", { className: "divider" }),
                          o.a.createElement(p.a, {
                            title: "officeEditor.pageBreak",
                            img: "icon-office-editor-page-break",
                            dataElement: O.a.OFFICE_EDITOR_PAGE_BREAK,
                            disabled: x,
                            onClick: function () {
                              f.a.getOfficeEditor().insertPageBreak();
                            },
                          }),
                          o.a.createElement(
                            u.a,
                            {
                              id: "office-editor-insert-table",
                              dataElement:
                                O.a.OFFICE_EDITOR_TOOLS_HEADER_INSERT_TABLE,
                              width: 136,
                              className: "insert-table-dropdown",
                              displayButton: function (e) {
                                return o.a.createElement(
                                  o.a.Fragment,
                                  null,
                                  o.a.createElement(p.a, {
                                    title: "officeEditor.table",
                                    img: "ic-table",
                                    isActive: e,
                                  }),
                                  o.a.createElement(y.a, {
                                    className: "arrow",
                                    glyph: "icon-chevron-".concat(
                                      e ? "up" : "down",
                                    ),
                                  }),
                                );
                              },
                            },
                            o.a.createElement(h.a, null),
                          ),
                          o.a.createElement(
                            o.a.Fragment,
                            null,
                            o.a.createElement(p.a, {
                              className: "tool-group-button",
                              dataElement:
                                O.a.OFFICE_EDITOR_TOOLS_HEADER_INSERT_IMAGE,
                              title: "officeEditor.insertImage",
                              img: "icon-tool-image-line",
                              onClick: function () {
                                Object(S.a)();
                              },
                            }),
                            o.a.createElement(g.a, null),
                          ),
                          6 === V &&
                            o.a.createElement(
                              o.a.Fragment,
                              null,
                              o.a.createElement("div", {
                                className: "divider",
                              }),
                              o.a.createElement(R, {
                                listType: re,
                                enableNonPrintingCharacters: F,
                              }),
                            ),
                          V < 6 &&
                            o.a.createElement(
                              o.a.Fragment,
                              null,
                              o.a.createElement("div", {
                                className: "divider",
                              }),
                              o.a.createElement(
                                "div",
                                { className: "action-button-wrapper" },
                                o.a.createElement(p.a, {
                                  className: "tool-group-button",
                                  isActive: q,
                                  dataElement: "office-editor-more-tools",
                                  title: "action.more",
                                  img: "icon-tools-more-vertical",
                                  onClick: function () {
                                    return J(!q);
                                  },
                                }),
                                q &&
                                  o.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "more-tools MainHeader Tools OfficeEditorTools",
                                    },
                                    o.a.createElement(
                                      "div",
                                      { className: "HeaderItems" },
                                      V < 4 &&
                                        o.a.createElement(
                                          o.a.Fragment,
                                          null,
                                          o.a.createElement(M, {
                                            activeStates: {
                                              bold: $,
                                              italic: Q,
                                              underline: Z,
                                            },
                                          }),
                                          o.a.createElement("div", {
                                            className: "divider",
                                          }),
                                        ),
                                      V < 5 &&
                                        o.a.createElement(
                                          o.a.Fragment,
                                          null,
                                          o.a.createElement(D, {
                                            justification: ie,
                                          }),
                                          o.a.createElement("div", {
                                            className: "divider",
                                          }),
                                        ),
                                      V < 6 &&
                                        o.a.createElement(R, {
                                          listType: re,
                                          enableNonPrintingCharacters: F,
                                        }),
                                    ),
                                  ),
                              ),
                            ),
                        );
                      },
                    ),
                  );
                },
              ),
            )
          : null;
      };
    },
  },
]);
//# sourceMappingURL=chunk.65.js.map
