(window.webpackJsonp = window.webpackJsonp || []).push([
  [35, 5],
  {
    1575: function (e, t, n) {
      var o = n(35),
        i = n(1651);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var r = {
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
            const i = t[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (i.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1585: function (e, t, n) {
      "use strict";
      (n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return r;
        }));
      var o = { OUTLINE: "outline", PORTFOLIO: "portfolio" },
        i = {
          ON_TARGET_HORIZONTAL_MIDPOINT: "onTargetHorizontalMidPoint",
          ABOVE_TARGET: "aboveTarget",
          BELOW_TARGET: "belowTarget",
          INITIAL: "initial",
        },
        r = 8;
    },
    1595: function (e, t, n) {
      "use strict";
      var o = n(0),
        i = n.n(o),
        r = n(2),
        a = n.n(r),
        l = n(41),
        u =
          (n(1706),
          {
            img: a.a.string,
            label: a.a.oneOfType([a.a.string, a.a.number]),
            dataElement: a.a.string,
            onClick: a.a.func,
            ariaLabel: a.a.string,
            ariaControls: a.a.string,
            role: a.a.string,
            disabled: a.a.bool,
          }),
        c = function (e) {
          var t = e.img,
            n = e.dataElement,
            o = e.onClick,
            r = e.label,
            a = e.ariaLabel,
            u = e.ariaControls,
            c = e.role,
            s = e.disabled;
          return i.a.createElement(l.a, {
            className: "TextButton",
            img: t,
            label: r,
            dataElement: n,
            onClick: o,
            ariaLabel: a,
            ariaControls: u,
            role: c,
            disabled: s,
          });
        };
      c.propTypes = u;
      var s = i.a.memo(c);
      t.a = s;
    },
    1597: function (e, t, n) {
      "use strict";
      var o = n(1656);
      t.a = o.a;
    },
    1626: function (e, t, n) {
      "use strict";
      var o = n(0),
        i = n.n(o).a.createContext();
      t.a = i;
    },
    1651: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".bookmark-outline-panel{display:flex;padding-inline-start:var(--padding);padding-inline-end:var(--padding-small)}.bookmark-outline-control-button{width:auto}.bookmark-outline-control-button span{color:inherit}.bookmark-outline-control-button,.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{color:var(--secondary-button-text)}.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{opacity:.5}.bookmark-outline-control-button.disabled span,.bookmark-outline-control-button[disabled] span{color:inherit}.bookmark-outline-control-button:not(.disabled):active,.bookmark-outline-control-button:not(.disabled):hover,.bookmark-outline-control-button:not([disabled]):active,.bookmark-outline-control-button:not([disabled]):hover{color:var(--secondary-button-hover)}.bookmark-outline-panel-header{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;padding:var(--padding-tiny);border-bottom:1px solid var(--divider)}.bookmark-outline-panel-header .header-title{font-size:16px}.bookmark-outline-row{flex-grow:1;overflow-y:auto}.msg-no-bookmark-outline{color:var(--placeholder-text);text-align:center}.bookmark-outline-single-container{display:flex;flex-flow:row nowrap;align-items:flex-start;border-radius:4px;margin-inline-start:2px;margin-inline-end:2px}.bookmark-outline-single-container.default{padding:var(--padding-tiny);border:1px solid transparent}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:hover,.bookmark-outline-single-container.default[focus-within]{cursor:pointer}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:focus-within,.bookmark-outline-single-container.default:hover{cursor:pointer}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button,.bookmark-outline-single-container.default[focus-within] .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:focus-within .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default[focus-within]{border-color:transparent}.bookmark-outline-single-container.default:focus-within{border-color:transparent}.bookmark-outline-single-container.default .bookmark-outline-label-row{overflow:hidden}.bookmark-outline-single-container.default.focus-visible,.bookmark-outline-single-container.default:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.editing{background-color:var(--faded-component-background);padding:var(--padding-medium) 20px}.bookmark-outline-single-container.editing.focus-visible,.bookmark-outline-single-container.editing:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.preview{display:inline-flex;margin-top:0;padding:var(--padding-small);background-color:var(--component-background);box-shadow:0 0 3px var(--note-box-shadow)}.bookmark-outline-single-container .bookmark-outline-checkbox{flex-grow:0;flex-shrink:0;margin-top:2px;margin-bottom:2px;margin-inline-end:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-label-row{flex-grow:1;flex-shrink:1;display:flex;flex-flow:row wrap;align-items:flex-start;position:relative;overflow:hidden}.bookmark-outline-single-container .bookmark-outline-label{font-weight:600;flex-grow:1;flex-shrink:1;margin-bottom:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-input,.bookmark-outline-single-container .bookmark-outline-text{flex-grow:1;flex-shrink:1;flex-basis:calc(100% - 22px);margin-top:2px;margin-bottom:2px}.bookmark-outline-single-container .bookmark-text-input{margin-inline-start:var(--padding-large)}.bookmark-outline-single-container .bookmark-outline-input{color:var(--text-color);width:calc(100% - var(--padding-large));padding:var(--padding-small);border:1px solid var(--border)}.bookmark-outline-single-container .bookmark-outline-input:focus{border-color:var(--outline-color)}.bookmark-outline-single-container .bookmark-outline-input::-moz-placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-input::placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-more-button{display:none;flex-grow:0;flex-shrink:0;width:16px;height:16px;margin:2px 2px 2px var(--padding-tiny)}.bookmark-outline-single-container .bookmark-outline-more-button .Icon{width:14px;height:14px}.bookmark-outline-single-container .bookmark-outline-more-button.icon-only:hover:not(:disabled):not(.disabled){box-shadow:none;outline:solid 1px var(--hover-border)}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within].icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within.icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within] .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-editing-controls{padding:2px;flex-basis:100%;display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:center;margin-top:var(--padding-medium)}.bookmark-outline-single-container .bookmark-outline-cancel-button,.bookmark-outline-single-container .bookmark-outline-save-button{width:auto;padding:6px var(--padding)}.bookmark-outline-single-container .bookmark-outline-cancel-button{color:var(--secondary-button-text)}.bookmark-outline-single-container .bookmark-outline-cancel-button:hover{color:var(--secondary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button{color:var(--primary-button-text);background-color:var(--primary-button);margin-inline-start:var(--padding-tiny);border-radius:4px}.bookmark-outline-single-container .bookmark-outline-save-button:hover{background-color:var(--primary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button.disabled,.bookmark-outline-single-container .bookmark-outline-save-button:disabled{background-color:var(--primary-button)!important;opacity:.5}.bookmark-outline-single-container .bookmark-outline-save-button.disabled span,.bookmark-outline-single-container .bookmark-outline-save-button:disabled span{color:var(--primary-button-text)}.bookmark-outline-footer{border-top:1.5px solid var(--gray-4);padding-top:var(--padding-medium);padding-bottom:var(--padding-medium);display:flex;justify-content:center;align-items:center}.bookmark-outline-footer .add-new-button .Icon{width:14px;height:14px;margin-inline-end:var(--padding-tiny);color:inherit;fill:currentColor}.bookmark-outline-footer .add-new-button.disabled .Icon.disabled,.bookmark-outline-footer .add-new-button.disabled .Icon.disabled path,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled path{color:inherit;fill:currentColor}.bookmark-outline-footer .multi-selection-button{width:auto;padding:7px}.bookmark-outline-footer .multi-selection-button .Icon{width:18px;height:18px}.bookmark-outline-footer .multi-selection-button:not(:first-child){margin-inline-start:var(--padding-tiny)}.bookmark-outline-footer .multi-selection-button:hover{background-color:transparent}.bookmark-outline-footer .multi-selection-button.disabled:hover,.bookmark-outline-footer .multi-selection-button:disabled:hover{box-shadow:none}",
        "",
      ]);
    },
    1665: function (e, t, n) {
      "use strict";
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
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
        n(56),
        n(17),
        n(19),
        n(62),
        n(11),
        n(153),
        n(29),
        n(13));
      var o = n(0),
        i = n.n(o),
        r = n(305),
        a = n(6),
        l = n(2),
        u = n.n(l),
        c = n(1),
        s = n(4),
        d = n(41),
        m = n(1595),
        b = n(1584),
        p = n(1626),
        f = (n(1729), n(1575), n(5)),
        g = n(1597),
        k = n(475);
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
      function h() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          i = n.toStringTag || "@@toStringTag";
        function r(n, o, i, r) {
          var u = o && o.prototype instanceof l ? o : l,
            c = Object.create(u.prototype);
          return (
            w(
              c,
              "_invoke",
              (function (n, o, i) {
                var r,
                  l,
                  u,
                  c = 0,
                  s = i || [],
                  d = !1,
                  m = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: b,
                    f: b.bind(e, 4),
                    d: function (t, n) {
                      return ((r = t), (l = 0), (u = e), (m.n = n), a);
                    },
                  };
                function b(n, o) {
                  for (
                    l = n, u = o, t = 0;
                    !d && c && !i && t < s.length;
                    t++
                  ) {
                    var i,
                      r = s[t],
                      b = m.p,
                      p = r[2];
                    n > 3
                      ? (i = p === o) &&
                        ((u = r[(l = r[4]) ? 5 : ((l = 3), 3)]),
                        (r[4] = r[5] = e))
                      : r[0] <= b &&
                        ((i = n < 2 && b < r[1])
                          ? ((l = 0), (m.v = o), (m.n = r[1]))
                          : b < p &&
                            (i = n < 3 || r[0] > o || o > p) &&
                            ((r[4] = n), (r[5] = o), (m.n = p), (l = 0)));
                  }
                  if (i || n > 1) return a;
                  throw ((d = !0), o);
                }
                return function (i, s, p) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === s && b(s, p), l = s, u = p;
                    (t = l < 2 ? e : u) || !d;

                  ) {
                    r ||
                      (l
                        ? l < 3
                          ? (l > 1 && (m.n = -1), b(l, u))
                          : (m.n = u)
                        : (m.v = u));
                    try {
                      if (((c = 2), r)) {
                        if ((l || (i = "next"), (t = r[i]))) {
                          if (!(t = t.call(r, u)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((u = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = r.return) && t.call(r),
                            l < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  i +
                                  "' method",
                              )),
                              (l = 1)));
                        r = e;
                      } else if ((t = (d = m.n < 0) ? u : n.call(o, m)) !== a)
                        break;
                    } catch (t) {
                      ((r = e), (l = 1), (u = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, i, r),
              !0,
            ),
            c
          );
        }
        var a = {};
        function l() {}
        function u() {}
        function c() {}
        t = Object.getPrototypeOf;
        var s = [][o]
            ? t(t([][o]()))
            : (w((t = {}), o, function () {
                return this;
              }),
              t),
          d = (c.prototype = l.prototype = Object.create(s));
        function m(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), w(e, i, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (u.prototype = c),
          w(d, "constructor", c),
          w(c, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          w(c, i, "GeneratorFunction"),
          w(d),
          w(d, i, "Generator"),
          w(d, o, function () {
            return this;
          }),
          w(d, "toString", function () {
            return "[object Generator]";
          }),
          (h = function () {
            return { w: r, m: m };
          })()
        );
      }
      function w(e, t, n, o) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (e) {
          i = 0;
        }
        (w = function (e, t, n, o) {
          if (t)
            i
              ? i(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var r = function (t, n) {
              w(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(e, t, n, o);
      }
      function O(e, t, n, o, i, r, a) {
        try {
          var l = e[r](a),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(o, i);
      }
      function y(e, t) {
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
            ? y(Object(n), !0).forEach(function (t) {
                E(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : y(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function E(e, t, n) {
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
      function T(e, t) {
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
                i,
                r,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                ((c = !0), (i = e));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw i;
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
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var N = Object(o.lazy)(function () {
          return Promise.resolve().then(n.bind(null, 1769));
        }),
        j = {
          text: u.a.string.isRequired,
          outlinePath: u.a.string,
          isAdding: u.a.bool,
          isExpanded: u.a.bool,
          setIsExpanded: u.a.func,
          isOutlineRenaming: u.a.bool,
          setOutlineRenaming: u.a.func,
          isOutlineChangingDest: u.a.bool,
          setOutlineChangingDest: u.a.func,
          onCancel: u.a.func,
          textColor: u.a.string,
          children: u.a.array,
          setMultiSelected: u.a.func,
          moveOutlineInward: u.a.func,
          moveOutlineBeforeTarget: u.a.func,
          moveOutlineAfterTarget: u.a.func,
        },
        I = function (e) {
          var t = e.text,
            n = e.outlinePath,
            l = e.isAdding,
            u = e.isExpanded,
            v = e.setIsExpanded,
            w = e.isOutlineRenaming,
            y = e.setOutlineRenaming,
            E = e.isOutlineChangingDest,
            A = e.setOutlineChangingDest,
            j = e.onCancel,
            I = e.textColor,
            P = e.children,
            L = e.setMultiSelected,
            S = e.moveOutlineInward,
            C = e.moveOutlineBeforeTarget,
            D = e.moveOutlineAfterTarget,
            R = Object(o.useContext)(p.a),
            _ = R.currentDestPage,
            M = R.currentDestText,
            B = R.editingOutlines,
            F = R.setEditingOutlines,
            H = R.isMultiSelectMode,
            G = R.isOutlineEditable,
            U = R.addNewOutline,
            W = R.renameOutline,
            z = R.updateOutlineDest,
            V = R.selectedOutlines,
            q = R.updateOutlines,
            K = R.removeOutlines,
            Z = Object(a.e)(function (e) {
              return s.a.getFeatureFlags(e);
            }, a.c).customizableUI,
            $ = T(Object(r.a)(), 1)[0],
            J = T(Object(o.useState)(!1), 2),
            Y = J[0],
            X = J[1],
            Q = T(Object(o.useState)(t), 2),
            ee = Q[0],
            te = Q[1],
            ne = Object(o.useRef)(),
            oe = (null == V ? void 0 : V.includes(n)) || !1,
            ie = function () {
              U("" === ee.trim() ? "" : ee);
            },
            re = function () {
              (y(!1), W(n, ee));
            },
            ae = function () {
              (q(), w && (y(!1), te(t)), E && A(!1), l && j());
            },
            le = function () {
              return !ee || t === ee;
            };
          (Object(o.useEffect)(
            function () {
              ee !== t && te(t);
            },
            [t],
          ),
            Object(o.useEffect)(
              function () {
                ((l || w) && (ne.current.focus(), ne.current.select()),
                  X(!l && !w && !E));
              },
              [w, E],
            ),
            Object(o.useEffect)(
              function () {
                var e = x({}, B),
                  t = w || E;
                (t ? (e[n] = t) : delete e[n], F(x({}, e)));
              },
              [w, E],
            ));
          var ue = { color: I || "auto" },
            ce = (function () {
              var e,
                t =
                  ((e = h().m(function e(t) {
                    var o;
                    return h().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            ((o = t),
                              (e.n =
                                o === b.b.RENAME
                                  ? 1
                                  : o === b.b.SETDEST
                                    ? 2
                                    : o === b.b.DELETE
                                      ? 3
                                      : o === b.b.MOVE_UP
                                        ? 4
                                        : o === b.b.MOVE_DOWN
                                          ? 6
                                          : o === b.b.MOVE_LEFT
                                            ? 8
                                            : o === b.b.MOVE_RIGHT
                                              ? 10
                                              : 12));
                            break;
                          case 1:
                            return (y(!0), e.a(3, 13));
                          case 2:
                            return (
                              A(!0),
                              c.a.setToolMode("OutlineDestinationCreateTool"),
                              e.a(3, 13)
                            );
                          case 3:
                            return (K([n]), e.a(3, 13));
                          case 4:
                            return ((e.n = 5), k.a.moveOutlineUp(n));
                          case 5:
                            return (q(), e.a(3, 13));
                          case 6:
                            return ((e.n = 7), k.a.moveOutlineDown(n));
                          case 7:
                            return (q(), e.a(3, 13));
                          case 8:
                            return ((e.n = 9), k.a.moveOutlineOutward(n));
                          case 9:
                            return (q(), e.a(3, 13));
                          case 10:
                            return ((e.n = 11), k.a.moveOutlineInward(n));
                          case 11:
                            return (q(), e.a(3, 13));
                          case 12:
                            return e.a(3, 13);
                          case 13:
                            return e.a(2);
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, i) {
                      var r = e.apply(t, n);
                      function a(e) {
                        O(r, o, i, a, l, "next", e);
                      }
                      function l(e) {
                        O(r, o, i, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            se = f.a.BOOKMARK_OUTLINE_FLYOUT,
            de = {
              shouldHideDeleteButton: !1,
              currentFlyout: Object(a.e)(function (e) {
                return s.a.getFlyout(e, se);
              }),
              flyoutSelector: se,
              type: "outline",
              handleOnClick: ce,
            },
            me = {
              flyoutToggleElement: "bookmarkOutlineFlyout",
              moreOptionsDataElement: "outline-more-button-".concat(n),
            },
            be = {
              id: "outline-checkbox-".concat(n),
              checked: oe,
              onChange: function (e) {
                L(n, e.target.checked);
              },
              ariaLabel: t,
              disabled: !H,
            };
          return i.a.createElement(
            "div",
            { className: "bookmark-outline-label-row" },
            l &&
              i.a.createElement(
                "div",
                { className: "bookmark-outline-label" },
                $("component.newOutlineTitle"),
              ),
            w &&
              i.a.createElement(
                "div",
                { className: "bookmark-outline-label" },
                $("component.outlineTitle"),
              ),
            Y &&
              i.a.createElement(
                g.a,
                {
                  key: n,
                  labelHeader: t,
                  textColor: I,
                  enableMoreOptionsContextMenuFlyout: G,
                  onDoubleClick: function () {
                    G && y(!0);
                  },
                  checkboxOptions: be,
                  contentMenuFlyoutOptions: de,
                  contextMenuMoreButtonOptions: me,
                  expanded: u,
                  setIsExpandedHandler: v,
                },
                P.map(function (e) {
                  return (function (e) {
                    return i.a.createElement(N, {
                      key: k.a.getOutlineId(e),
                      outline: e,
                      setMultiSelected: L,
                      moveOutlineInward: S,
                      moveOutlineBeforeTarget: C,
                      moveOutlineAfterTarget: D,
                    });
                  })(e);
                }),
              ),
            E &&
              i.a.createElement(
                "div",
                { className: "bookmark-outline-text outline-text", style: ue },
                t,
              ),
            (l || w) &&
              i.a.createElement("input", {
                type: "text",
                name: "outline",
                ref: ne,
                className: "bookmark-outline-input",
                placeholder: Z ? "" : $("component.outlineTitle"),
                "aria-label": $("component.newOutlineTitle"),
                value: ee,
                onKeyDown: function (e) {
                  ("Enter" === e.key &&
                    (e.stopPropagation(), l && ie(), w && !le() && re()),
                    "Escape" === e.key && ae());
                },
                onChange: function (e) {
                  return te(e.target.value);
                },
              }),
            (l || E) &&
              i.a.createElement(
                "div",
                { className: "outline-destination" },
                $("component.destination"),
                ": ",
                $("component.bookmarkPage"),
                " ",
                _,
                ",",
                i.a.createElement(
                  "span",
                  { style: { fontStyle: "italic" } },
                  " “",
                  M,
                  "”",
                ),
              ),
            (l || w || E) &&
              i.a.createElement(
                "div",
                { className: "bookmark-outline-editing-controls" },
                i.a.createElement(m.a, {
                  className: "bookmark-outline-cancel-button",
                  label: $("action.cancel"),
                  ariaLabel: ""
                    .concat($("action.cancel"), " ")
                    .concat($("component.outlineTitle")),
                  onClick: ae,
                }),
                l &&
                  i.a.createElement(d.a, {
                    className: "bookmark-outline-save-button",
                    label: $("action.add"),
                    isSubmitType: !0,
                    onClick: ie,
                  }),
                w &&
                  i.a.createElement(d.a, {
                    className: "bookmark-outline-save-button",
                    label: $("action.save"),
                    isSubmitType: !0,
                    disabled: le(),
                    onClick: re,
                  }),
                E &&
                  i.a.createElement(d.a, {
                    className: "bookmark-outline-save-button",
                    label: $("action.save"),
                    isSubmitType: !0,
                    onClick: function () {
                      (A(!1), z(n));
                    },
                  }),
              ),
          );
        };
      I.propTypes = j;
      var P = I;
      t.a = P;
    },
    1706: function (e, t, n) {
      var o = n(35),
        i = n(1707);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var r = {
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
            const i = t[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (i.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1707: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".TextButton{color:var(--secondary-button-text);width:-moz-fit-content;width:fit-content;padding-inline-start:8px;padding-inline-end:8px}.TextButton .Icon{display:flex;align-items:center}.TextButton svg{color:var(--secondary-button-text);height:14px;width:14px}.TextButton:hover{box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}",
        "",
      ]);
    },
    1729: function (e, t, n) {
      var o = n(35),
        i = n(1730);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var r = {
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
            const i = t[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (i.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1730: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".outline-destination,.outline-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.outline-destination{flex-basis:100%;font-size:10px;color:var(--faded-text);margin-top:var(--padding-small)}.bookmark-outline-label-row .ToggleElementButton .Button{padding:0;min-width:16px}",
        "",
      ]);
    },
    1731: function (e, t, n) {
      var o = n(35),
        i = n(1732);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var r = {
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
            const i = t[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (i.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1732: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.outline-drag-container{border-radius:4px}.outline-drag-container.isNesting>.bookmark-outline-single-container{background-color:var(--popup-button-active);border-color:var(--focus-border)}.outline-treeview-toggle{flex-grow:0;flex-shrink:0;margin-inline-end:var(--padding-small);margin-top:2px;margin-bottom:2px;min-width:14px;transition:transform .1s ease}.outline-treeview-toggle.expanded{transform:rotate(90deg)}.outline-treeview-toggle .Button{width:auto;height:auto}.outline-treeview-toggle .Button .Icon{width:16px;height:16px}.outline-drag-line{margin-inline-start:var(--padding);margin-inline-end:var(--padding);border-top:1px solid var(--focus-border);position:relative}.outline-drag-line:before{content:"";display:block;position:absolute;width:5px;height:5px;inset-block-start:-3px;inset-inline-start:0;background-color:var(--focus-border);border-radius:50%}',
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1733: function (e, t, n) {
      var o = n(35),
        i = n(1734);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var r = {
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
            const i = t[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (i.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1734: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OutlinesPanel{margin:16px;padding:0;overflow-y:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OutlinesPanel{margin:16px;padding:0;overflow-y:auto}}.OutlinesPanel .bookmark-outline-single-container:not(.editing){height:-moz-fit-content;height:fit-content}.OutlinesPanel .bookmark-outline-row{padding-top:6px}.OutlinesPanel .msg-no-bookmark-outline{margin-top:6px}.OutlinesPanel .spinner{align-self:center}.OutlinesPanel .small-outlines-list{height:calc(100% - 154px)!important}.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container .panel-list-label-header .Button{width:-moz-fit-content;width:fit-content;height:100%;padding:0 8px;justify-content:start}.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container .panel-list-label-header .Button:hover{cursor:pointer;border:none;border-radius:4px;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container .panel-list-label-header .Button:focus{border-radius:4px;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container .bookmark-outline-more-button.active{display:flex}.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container .bookmark-outline-more-button.active .Icon{color:var(--blue-5)}.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container.default.hover:not(.selected),.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container.default:hover:not(.selected){background:none}.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container.focus-visible,.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container:focus-visible{outline:var(--focus-visible-outline)!important}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OutlinesPanel.modular-ui-panel .bookmark-outline-single-container .bookmark-outline-input{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OutlinesPanel.modular-ui-panel .bookmark-outline-single-container .bookmark-outline-input{font-size:13px}}.OutlinesPanel.modular-ui-panel .bookmark-outline-single-container .bookmark-outline-input:active{border-color:var(--focus-border)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OutlinesPanel .bookmark-outline-cancel-button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OutlinesPanel .bookmark-outline-control-button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OutlinesPanel .bookmark-outline-save-button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OutlinesPanel .bookmark-outline-cancel-button,.App.is-web-component:not(.is-in-desktop-only-mode) .OutlinesPanel .bookmark-outline-control-button,.App.is-web-component:not(.is-in-desktop-only-mode) .OutlinesPanel .bookmark-outline-save-button{font-size:13px}}.Panel.OutlinesPanel{overflow:auto;-webkit-overflow-scrolling:touch;flex:1;flex-direction:column}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1769: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(38),
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
        n(181),
        n(13),
        n(94));
      var o = n(0),
        i = n.n(o),
        r = n(15),
        a = n.n(r),
        l = n(2),
        u = n.n(l),
        c = n(6),
        s = n(1876),
        d = n(1877),
        m = n(630),
        b = n(1585),
        p = n(1),
        f = n(3),
        g = n(4),
        k = n(54),
        v = n(66),
        h = n(475),
        w = n(45),
        O = n(1626),
        y = n(1665),
        x = n(60);
      (n(1731), n(1575));
      function E(e, t) {
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
                i,
                r,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                ((c = !0), (i = e));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw i;
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
      var A = {
          outline: u.a.object.isRequired,
          setMultiSelected: u.a.func,
          moveOutlineInward: u.a.func.isRequired,
          moveOutlineBeforeTarget: u.a.func.isRequired,
          moveOutlineAfterTarget: u.a.func.isRequired,
          connectDragSource: u.a.func,
          connectDragPreview: u.a.func,
          connectDropTarget: u.a.func,
          isDragging: u.a.bool,
          isDraggedUpwards: u.a.bool,
          isDraggedDownwards: u.a.bool,
        },
        N = Object(o.forwardRef)(function (e, t) {
          var n = e.outline,
            r = e.setMultiSelected,
            l = e.isDragging,
            u = e.isDraggedUpwards,
            s = e.isDraggedDownwards,
            d = e.connectDragSource,
            b = e.connectDragPreview,
            k = e.connectDropTarget,
            v = e.moveOutlineInward,
            T = e.moveOutlineBeforeTarget,
            A = e.moveOutlineAfterTarget,
            N = Object(c.e)(function (e) {
              return g.a.getOutlines(e);
            }),
            j = Object(o.useContext)(O.a),
            I = j.setActiveOutlinePath,
            P = j.activeOutlinePath,
            L = j.isOutlineActive,
            S = j.setAddingNewOutline,
            C = j.isAddingNewOutline,
            D = j.isMultiSelectMode,
            R = j.shouldAutoExpandOutlines,
            _ = j.isOutlineEditable,
            M = j.updateOutlines,
            B = h.a.getPath(n),
            F = E(Object(o.useState)(R), 2),
            H = F[0],
            G = F[1],
            U = E(Object(o.useState)(!1), 2),
            W = U[0],
            z = U[1],
            V = E(Object(o.useState)(!1), 2),
            q = V[0],
            K = V[1],
            Z = E(Object(o.useState)(void 0), 2),
            $ = Z[0],
            J = Z[1],
            Y = Object(c.d)(),
            X = Object(o.useRef)(null);
          (d(X), b(Object(m.a)(), { captureDraggingState: !0 }), k(X));
          var Q = l ? 0.5 : 1;
          (Object(o.useImperativeHandle)(t, function () {
            return {
              getNode: function () {
                return X.current;
              },
            };
          }),
            Object(o.useEffect)(
              function () {
                null !== P && P !== B && P.startsWith(B) && G(!0);
              },
              [P, C, n],
            ),
            Object(o.useLayoutEffect)(
              function () {
                G(R);
              },
              [R],
            ),
            Object(o.useLayoutEffect)(
              function () {
                (z(!1), K(!1), C && P === B && G(!0));
              },
              [N],
            ));
          var ee,
            te,
            ne,
            oe,
            ie = Object(o.useCallback)(
              function () {
                (p.a.goToOutline(n),
                  I(B === P ? null : B),
                  C && (S(!1), M()),
                  Object(w.k)() && Y(f.a.closeElement("leftPanel")));
              },
              [Y, I, P, C, n],
            ),
            re = L(n);
          return i.a.createElement(
            "div",
            {
              ref: !C && D && _ ? X : null,
              className: "outline-drag-container",
              style: { opacity: Q },
            },
            i.a.createElement("div", {
              className: "outline-drag-line",
              style: { opacity: u ? 1 : 0 },
            }),
            i.a.createElement(
              x.a,
              {
                className: a()({
                  "bookmark-outline-single-container": !0,
                  editing: W || q,
                  default: !W && !q,
                  selected: re,
                }),
                tabIndex: 0,
                onKeyDown: function (e) {
                  ("Enter" === e.key && ie(), e.stopPropagation());
                },
                onClick: function (e) {
                  (e.stopPropagation(),
                    W || q || 1 !== e.detail || J(setTimeout(ie, 300)));
                },
                onDoubleClick: function () {
                  W || q || clearTimeout($);
                },
              },
              i.a.createElement(
                y.a,
                {
                  text: n.getName(),
                  outlinePath: B,
                  isOutlineRenaming: W,
                  setOutlineRenaming: z,
                  isOutlineChangingDest: q,
                  setOutlineChangingDest: K,
                  textColor: n.color
                    ? ((ee = n.color),
                      (te = 255 * ee.r),
                      (ne = 255 * ee.g),
                      (oe = 255 * ee.b),
                      "rgb(".concat(te, ", ").concat(ne, ", ").concat(oe, ")"))
                    : null,
                  setMultiSelected: r,
                  isExpanded: H,
                  setIsExpanded: G,
                  moveOutlineInward: v,
                  moveOutlineBeforeTarget: T,
                  moveOutlineAfterTarget: A,
                },
                n.getChildren(),
              ),
            ),
            i.a.createElement("div", {
              className: "outline-drag-line",
              style: { opacity: s ? 1 : 0 },
            }),
            C &&
              re &&
              i.a.createElement(
                x.a,
                { className: "bookmark-outline-single-container editing" },
                i.a.createElement("div", {
                  className: "outline-treeview-toggle",
                  style: { marginLeft: 12 * h.a.getNestedLevel(n) },
                }),
                i.a.createElement(y.a, {
                  isAdding: !0,
                  text: "",
                  onCancel: function () {
                    return S(!1);
                  },
                }),
              ),
          );
        });
      N.propTypes = A;
      var j = Object(s.a)(
        b.c.OUTLINE,
        {
          hover: function (e, t, n) {
            if (n) {
              var o = t.getItem();
              if (o) {
                var i = o.dragOutline,
                  r = o.dragSourceNode,
                  a = e.outline,
                  l = n.getNode();
                if (r && l) {
                  if (r.contains(l))
                    return (
                      (o.dropTargetNode = void 0),
                      void (o.dropLocation = b.b.INITIAL)
                    );
                  o.dropTargetNode = l;
                  var u = i.index,
                    c = a.index;
                  if (i.parent !== a.parent || u !== c) {
                    var s = l.getBoundingClientRect(),
                      d = (s.bottom - s.top) / 2,
                      m = t.getClientOffset().y - s.top;
                    switch (!0) {
                      case m <= d + b.a && m >= d - b.a:
                        ((o.dropLocation = b.b.ON_TARGET_HORIZONTAL_MIDPOINT),
                          t.isOver({ shallow: !0 }) &&
                            l.classList.add("isNesting"),
                          setTimeout(function () {
                            (null == o ? void 0 : o.dropTargetNode) !== l &&
                              l.classList.remove("isNesting");
                          }, 100));
                        break;
                      case m > d + b.a:
                        ((o.dropLocation = b.b.BELOW_TARGET),
                          l.classList.remove("isNesting"));
                        break;
                      case m < d - b.a:
                        ((o.dropLocation = b.b.ABOVE_TARGET),
                          l.classList.remove("isNesting"));
                        break;
                      default:
                        ((o.dropLocation = b.b.INITIAL),
                          l.classList.remove("isNesting"));
                    }
                    Object(v.a)(k.a.DRAG_OUTLINE, {
                      targetOutline: a,
                      draggedOutline: o.dragOutline,
                      dropLocation: o.dropLocation,
                    });
                  }
                }
              }
            }
          },
          drop: function (e, t, n) {
            if (n) {
              var o = t.getItem(),
                i = o.dragOutline,
                r = o.dropTargetNode,
                a = e.outline,
                l = e.moveOutlineInward,
                u = e.moveOutlineBeforeTarget,
                c = e.moveOutlineAfterTarget;
              if (r) {
                switch (o.dropLocation) {
                  case b.b.ON_TARGET_HORIZONTAL_MIDPOINT:
                    l(i, a);
                    break;
                  case b.b.ABOVE_TARGET:
                    u(i, a);
                    break;
                  case b.b.BELOW_TARGET:
                    c(i, a);
                }
                (r.classList.remove("isNesting"),
                  Object(v.a)(k.a.DROP_OUTLINE, {
                    targetOutline: a,
                    draggedOutline: i,
                    dropLocation: o.dropLocation,
                  }),
                  (o.dropLocation = b.b.INITIAL));
              }
            }
          },
        },
        function (e, t) {
          var n, o;
          return {
            connectDropTarget: e.dropTarget(),
            isDraggedUpwards:
              t.isOver({ shallow: !0 }) &&
              (null === (n = t.getItem()) || void 0 === n
                ? void 0
                : n.dropLocation) === b.b.ABOVE_TARGET,
            isDraggedDownwards:
              t.isOver({ shallow: !0 }) &&
              (null === (o = t.getItem()) || void 0 === o
                ? void 0
                : o.dropLocation) === b.b.BELOW_TARGET,
          };
        },
      )(
        Object(d.a)(
          b.c.OUTLINE,
          {
            beginDrag: function (e, t, n) {
              return {
                sourceId: t.sourceId,
                dragOutline: e.outline,
                dragSourceNode: n.getNode(),
                dropLocation: b.b.INITIAL,
              };
            },
            canDrag: function () {
              return w.e
                ? (console.warn(
                    "Drag and drop outlines for IE11 is not supported",
                  ),
                  !1)
                : !!p.a.isFullPDFEnabled() ||
                    (console.warn(
                      "Full API must be enabled to drag and drop outlines",
                    ),
                    !1);
            },
          },
          function (e, t) {
            return {
              connectDragSource: e.dragSource(),
              connectDragPreview: e.dragPreview(),
              isDragging: t.isDragging(),
            };
          },
        )(N),
      );
      j.propTypes = A;
      var I = j;
      t.default = I;
    },
    1781: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(38),
        n(34),
        n(81),
        n(21),
        n(50),
        n(20),
        n(12),
        n(629),
        n(22),
        n(99),
        n(142),
        n(18),
        n(26),
        n(16),
        n(40),
        n(24),
        n(42),
        n(43),
        n(8),
        n(91),
        n(56),
        n(17),
        n(19),
        n(11),
        n(13));
      var o = n(0),
        i = n.n(o),
        r = n(6),
        a = n(305),
        l = n(1559),
        u = n(45),
        c = n(472),
        s = n(1663),
        d = n(1769),
        m = n(1626),
        b = n(41),
        p = n(1595),
        f = n(1665),
        g = n(60),
        k = n(1),
        v = n(475),
        h = n(77),
        w = n(5),
        O = n(68),
        y = n(57),
        x = n(319),
        E = n(3),
        T = n(4),
        A = (n(1575), n(1733), n(1869)),
        N = n(1585),
        j = {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        },
        I = function (e, t) {
          if (!e || !t) return { display: "none" };
          var n = t.x,
            o = t.y,
            i = "translate(calc("
              .concat(n, "px - 50%), calc(")
              .concat(o, "px - 100%))");
          return { transform: i, WebkitTransform: i };
        },
        P = function () {
          var e = Object(A.a)(function (e) {
              return {
                itemType: e.getItemType(),
                item: e.getItem(),
                isDragging: e.isDragging(),
                initialOffset: e.getInitialSourceClientOffset(),
                currentOffset: e.getClientOffset(),
              };
            }),
            t = e.itemType,
            n = e.item,
            o = e.isDragging,
            r = e.initialOffset,
            a = e.currentOffset;
          return o
            ? i.a.createElement(
                "div",
                { style: j },
                i.a.createElement(
                  "div",
                  {
                    className: "bookmark-outline-single-container preview",
                    style: I(r, a),
                  },
                  (function () {
                    if (!n) return null;
                    var e = n.dragOutline;
                    switch (t) {
                      case N.c.OUTLINE:
                        return i.a.createElement(
                          i.a.Fragment,
                          null,
                          e.getName(),
                        );
                      default:
                        return null;
                    }
                  })(),
                ),
              )
            : null;
        },
        L = n(15),
        S = n.n(L),
        C = n(1655),
        D = n(471),
        R = n(481);
      function _(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return W(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          U(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function M() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          i = n.toStringTag || "@@toStringTag";
        function r(n, o, i, r) {
          var u = o && o.prototype instanceof l ? o : l,
            c = Object.create(u.prototype);
          return (
            B(
              c,
              "_invoke",
              (function (n, o, i) {
                var r,
                  l,
                  u,
                  c = 0,
                  s = i || [],
                  d = !1,
                  m = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: b,
                    f: b.bind(e, 4),
                    d: function (t, n) {
                      return ((r = t), (l = 0), (u = e), (m.n = n), a);
                    },
                  };
                function b(n, o) {
                  for (
                    l = n, u = o, t = 0;
                    !d && c && !i && t < s.length;
                    t++
                  ) {
                    var i,
                      r = s[t],
                      b = m.p,
                      p = r[2];
                    n > 3
                      ? (i = p === o) &&
                        ((u = r[(l = r[4]) ? 5 : ((l = 3), 3)]),
                        (r[4] = r[5] = e))
                      : r[0] <= b &&
                        ((i = n < 2 && b < r[1])
                          ? ((l = 0), (m.v = o), (m.n = r[1]))
                          : b < p &&
                            (i = n < 3 || r[0] > o || o > p) &&
                            ((r[4] = n), (r[5] = o), (m.n = p), (l = 0)));
                  }
                  if (i || n > 1) return a;
                  throw ((d = !0), o);
                }
                return function (i, s, p) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === s && b(s, p), l = s, u = p;
                    (t = l < 2 ? e : u) || !d;

                  ) {
                    r ||
                      (l
                        ? l < 3
                          ? (l > 1 && (m.n = -1), b(l, u))
                          : (m.n = u)
                        : (m.v = u));
                    try {
                      if (((c = 2), r)) {
                        if ((l || (i = "next"), (t = r[i]))) {
                          if (!(t = t.call(r, u)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((u = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = r.return) && t.call(r),
                            l < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  i +
                                  "' method",
                              )),
                              (l = 1)));
                        r = e;
                      } else if ((t = (d = m.n < 0) ? u : n.call(o, m)) !== a)
                        break;
                    } catch (t) {
                      ((r = e), (l = 1), (u = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, i, r),
              !0,
            ),
            c
          );
        }
        var a = {};
        function l() {}
        function u() {}
        function c() {}
        t = Object.getPrototypeOf;
        var s = [][o]
            ? t(t([][o]()))
            : (B((t = {}), o, function () {
                return this;
              }),
              t),
          d = (c.prototype = l.prototype = Object.create(s));
        function m(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), B(e, i, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (u.prototype = c),
          B(d, "constructor", c),
          B(c, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          B(c, i, "GeneratorFunction"),
          B(d),
          B(d, i, "Generator"),
          B(d, o, function () {
            return this;
          }),
          B(d, "toString", function () {
            return "[object Generator]";
          }),
          (M = function () {
            return { w: r, m: m };
          })()
        );
      }
      function B(e, t, n, o) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (e) {
          i = 0;
        }
        (B = function (e, t, n, o) {
          if (t)
            i
              ? i(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var r = function (t, n) {
              B(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (r("next", 0), r("throw", 1), r("return", 2));
          }
        })(e, t, n, o);
      }
      function F(e, t, n, o, i, r, a) {
        try {
          var l = e[r](a),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(o, i);
      }
      function H(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var r = e.apply(t, n);
            function a(e) {
              F(r, o, i, a, l, "next", e);
            }
            function l(e) {
              F(r, o, i, a, l, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function G(e, t) {
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
                i,
                r,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                ((c = !0), (i = e));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(e, t) ||
          U(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function U(e, t) {
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
      }
      function W(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var z = function (e) {
          var t = e.isTest,
            n = void 0 !== t && t,
            A = G(
              Object(r.e)(function (e) {
                return [
                  T.a.isElementDisabled(e, w.a.OUTLINE_PANEL),
                  T.a.getOutlines(e),
                  T.a.getOutlineEditingEnabled(e),
                  T.a.shouldAutoExpandOutlines(e),
                  T.a.getCurrentPage(e),
                  T.a.getPageLabels(e),
                  T.a.getFeatureFlags(e),
                ];
              }, r.c),
              7,
            ),
            N = A[0],
            j = A[1],
            I = A[2],
            L = A[3],
            B = A[4],
            F = A[5],
            U = A[6],
            W = "Full Page",
            z = "Area Selection",
            V = { x: 0, y: 0 },
            q = null === j,
            K = Object(R.a)(),
            Z = G(Object(o.useState)(W), 2),
            $ = Z[0],
            J = Z[1],
            Y = G(Object(o.useState)(V), 2),
            X = Y[0],
            Q = Y[1],
            ee = G(Object(o.useState)(B), 2),
            te = ee[0],
            ne = ee[1],
            oe = G(Object(o.useState)(!1), 2),
            ie = oe[0],
            re = oe[1],
            ae = G(Object(o.useState)(null), 2),
            le = ae[0],
            ue = ae[1],
            ce = G(Object(o.useState)(!1), 2),
            se = ce[0],
            de = ce[1],
            me = G(Object(o.useState)({}), 2),
            be = me[0],
            pe = me[1],
            fe = G(Object(o.useState)(!1), 2),
            ge = fe[0],
            ke = fe[1],
            ve = G(Object(o.useState)(!1), 2),
            he = ve[0],
            we = ve[1],
            Oe = G(Object(o.useState)([]), 2),
            ye = Oe[0],
            xe = Oe[1],
            Ee = U.customizableUI,
            Te = G(Object(a.a)(), 1)[0],
            Ae = Object(r.d)(),
            Ne = Object(o.useRef)(null),
            je = "OutlineDestinationCreateTool",
            Ie = k.a.getTool(je),
            Pe = Object(o.useRef)();
          (Object(o.useEffect)(
            function () {
              q &&
                K &&
                k.a.getOutlines(function (e) {
                  Ae(E.a.setOutlines(e));
                });
            },
            [q, K],
          ),
            Object(o.useLayoutEffect)(
              function () {
                (de(!1),
                  null !== Ne.current && (ue(Ne.current), (Ne.current = null)),
                  (!j || 0 === j.length) && we(!1));
              },
              [j],
            ),
            Object(o.useEffect)(
              function () {
                var e = Object(x.a)(),
                  t = e === y.a.PDF || e === y.a.IMAGE,
                  n = function () {
                    return k.a.isFullPDFEnabled() && t && I;
                  };
                re(n());
                var o = function () {
                  re(n());
                };
                return (
                  k.a.addEventListener("documentLoaded", o),
                  function () {
                    return k.a.removeEventListener("documentLoaded", o);
                  }
                );
              },
              [I],
            ),
            Object(o.useEffect)(
              function () {
                var e = Object.values(be).some(function (e) {
                  return e;
                });
                ke(e);
              },
              [be, j],
            ),
            Object(o.useEffect)(function () {
              var e = function (e) {
                  (J(e.IsText ? e.getCustomData("trn-annot-preview") : z),
                    Q({ x: e.X, y: e.Y }),
                    ne(e.PageNumber));
                },
                t = function () {
                  k.a.getOutlines(function (e) {
                    Ae(E.a.setOutlines(e));
                  });
                },
                n = function () {
                  ue(null);
                };
              return (
                k.a.addEventListener("outlineSetDestination", e),
                window.addEventListener("outlineBookmarksChanged", t),
                k.a.addEventListener("documentLoaded", n),
                function () {
                  (k.a.removeEventListener("outlineSetDestination", e),
                    window.removeEventListener("outlineBookmarksChanged", t),
                    k.a.removeEventListener("documentLoaded", n));
                }
              );
            }, []),
            Object(o.useEffect)(function () {
              var e = function (e) {
                e.target.classList.contains("bookmark-outline-row") &&
                  (ue(null), xe([]));
              };
              return (
                Pe.current && Pe.current.addEventListener("click", e),
                function () {
                  Pe.current && Pe.current.removeEventListener("click", e);
                }
              );
            }, []));
          var Le = function (e, t) {
              var n = t.x,
                o = t.y;
              return k.a
                .getDocumentViewer()
                .getDocument()
                .getViewerCoordinates(e, n, o);
            },
            Se = (function () {
              var e = H(
                M().m(function e(t) {
                  var n, o, i, r, a, l, u;
                  return M().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (
                            ((n = Le(te, X)),
                            (o = n.x),
                            (i = n.y),
                            (r = t),
                            [W, z].includes($) || t
                              ? t || (r = Te("message.untitled"))
                              : (r = $.slice(0, 40)),
                            (a = k.a.getDocumentViewer().getDocument()),
                            ((l = a.getPageRotation(te) / 90) !==
                              window.Core.PageRotation.E_90 &&
                              l !== window.Core.PageRotation.E_270) ||
                              ((u = o), (o = i), (i = u)),
                            0 !== j.length)
                          ) {
                            e.n = 2;
                            break;
                          }
                          return (
                            (e.n = 1),
                            v.a.addRootOutline(r, te, o, i, 0)
                          );
                        case 1:
                          e.n = 3;
                          break;
                        case 2:
                          return (
                            (e.n = 3),
                            v.a.addNewOutline(r, le, te, o, i, 0)
                          );
                        case 3:
                          Ce();
                        case 4:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Ce = function () {
              (Object(h.f)(),
                k.a.getOutlines(function (e) {
                  Ae(E.a.setOutlines(e));
                }),
                Re(),
                pe({}));
            },
            De = function (e) {
              return v.a.getPath(e);
            },
            Re = function () {
              (k.a.setToolMode(O.a),
                J(W),
                Q(V),
                ne(B),
                Ie.clearOutlineDestination());
            },
            _e = (function () {
              var e = H(
                M().m(function e(t) {
                  var n, o, i, r, a, l;
                  return M().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (n = Le(te, X)),
                            (o = n.x),
                            (i = n.y),
                            (r = k.a.getDocumentViewer().getDocument()),
                            ((a = r.getPageRotation(te) / 90) !==
                              window.Core.PageRotation.E_90 &&
                              a !== window.Core.PageRotation.E_270) ||
                              ((l = o), (o = i), (i = l)),
                            (e.n = 1),
                            v.a.setOutlineDestination(t, te, o, i, 0)
                          );
                        case 1:
                          ((Ne.current = t), Ce());
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
          (Object(o.useEffect)(
            function () {
              $ === W && ne(B);
            },
            [$, B],
          ),
            Object(o.useEffect)(
              function () {
                se ? k.a.setToolMode(je) : Re();
              },
              [se],
            ));
          var Me = function (e, t, n) {
              var o = De(e),
                i = De(t);
              (xe([]),
                n.call(v.a, o, i).then(function (e) {
                  (Ce(), (Ne.current = e));
                }),
                k.a.goToOutline(e));
            },
            Be = function (e, t) {
              Me(e, t, v.a.moveOutlineAfterTarget);
            },
            Fe = function (e, t) {
              Me(e, t, v.a.moveOutlineBeforeTarget);
            },
            He = function (e, t) {
              Me(e, t, v.a.moveOutlineInTarget);
            },
            Ge = (function () {
              var e = H(
                M().m(function e(t, n) {
                  return M().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return ((e.n = 1), v.a.setOutlineName(t, n));
                        case 1:
                          Ce();
                        case 2:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            Ue = (function () {
              var e = H(
                M().m(function e(t) {
                  var n;
                  return M().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          (t.sort().reverse(),
                            (n = {
                              message: Te("warning.deleteOutline.message"),
                              title: Te("warning.deleteOutline.title"),
                              confirmBtnText: Te("action.delete"),
                              onConfirm: (function () {
                                var e = H(
                                  M().m(function e() {
                                    var n, o;
                                    return M().w(function (e) {
                                      for (;;)
                                        switch (e.n) {
                                          case 0:
                                            n = 0;
                                          case 1:
                                            if (!(n < t.length)) {
                                              e.n = 3;
                                              break;
                                            }
                                            return (
                                              (o = t[n]),
                                              (e.n = 2),
                                              v.a.deleteOutline(o)
                                            );
                                          case 2:
                                            (n++, (e.n = 1));
                                            break;
                                          case 3:
                                            (Ce(), ue(null), xe([]));
                                          case 4:
                                            return e.a(2);
                                        }
                                    }, e);
                                  }),
                                );
                                return function () {
                                  return e.apply(this, arguments);
                                };
                              })(),
                            }),
                            Ae(E.a.showWarningMessage(n)));
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return N
            ? null
            : i.a.createElement(
                "div",
                {
                  className: S()("Panel OutlinesPanel bookmark-outline-panel", {
                    "modular-ui-panel": Ee,
                  }),
                  "data-element": w.a.OUTLINE_PANEL,
                  ref: Pe,
                },
                i.a.createElement(
                  "div",
                  { className: "bookmark-outline-panel-header" },
                  i.a.createElement(
                    "h2",
                    { className: "header-title" },
                    Te("component.outlinesPanel"),
                  ),
                  ie &&
                    (he
                      ? i.a.createElement(p.a, {
                          className: "bookmark-outline-control-button",
                          dataElement: w.a.OUTLINE_MULTI_SELECT,
                          label: Te("option.bookmarkOutlineControls.done"),
                          disabled: se,
                          onClick: function () {
                            return we(!1);
                          },
                          ariaLabel: ""
                            .concat(
                              Te("option.bookmarkOutlineControls.done"),
                              " ",
                            )
                            .concat(Te("action.edit")),
                        })
                      : i.a.createElement(p.a, {
                          className: "bookmark-outline-control-button",
                          dataElement: w.a.OUTLINE_MULTI_SELECT,
                          label: Te("option.bookmarkOutlineControls.edit"),
                          disabled: se || q || 0 === j.length,
                          onClick: function () {
                            (we(!0), xe([]));
                          },
                          ariaLabel: ""
                            .concat(Te("action.edit"), " ")
                            .concat(Te("component.outlinesPanel")),
                        })),
                ),
                q && K
                  ? i.a.createElement(D.a, {
                      inPanel: !0,
                      width: "40px",
                      height: "40px",
                    })
                  : i.a.createElement(
                      m.a.Provider,
                      {
                        value: {
                          currentDestPage: F[te - 1],
                          currentDestText: $,
                          setActiveOutlinePath: ue,
                          activeOutlinePath: le,
                          isOutlineActive: function (e) {
                            return De(e) === le;
                          },
                          setAddingNewOutline: de,
                          isAddingNewOutline: se,
                          setEditingOutlines: pe,
                          editingOutlines: be,
                          selectedOutlines: ye,
                          isAnyOutlineRenaming: ge,
                          isMultiSelectMode: he,
                          shouldAutoExpandOutlines: L,
                          isOutlineEditable: ie,
                          addNewOutline: Se,
                          updateOutlines: Ce,
                          renameOutline: Ge,
                          updateOutlineDest: _e,
                          removeOutlines: Ue,
                        },
                      },
                      i.a.createElement(
                        l.a,
                        { backend: u.l ? s.a : c.a },
                        i.a.createElement(P, null),
                        i.a.createElement(
                          "div",
                          { className: "bookmark-outline-row" },
                          !se &&
                            (q || 0 === j.length) &&
                            i.a.createElement(
                              "div",
                              { className: "msg msg-no-bookmark-outline" },
                              Te("message.noOutlines"),
                            ),
                          se &&
                            null === le &&
                            i.a.createElement(
                              g.a,
                              {
                                className:
                                  "bookmark-outline-single-container editing",
                              },
                              i.a.createElement(f.a, {
                                isAdding: !0,
                                text: "",
                                onCancel: function () {
                                  return de(!1);
                                },
                              }),
                            ),
                          i.a.createElement(C.a, {
                            className: S()({ "small-outlines-list": se }),
                            data: j || [],
                            itemContent: function (e, t) {
                              return i.a.createElement(d.default, {
                                key: v.a.getOutlineId(t),
                                outline: t,
                                setMultiSelected: function (e, t) {
                                  ye.find(function (t) {
                                    return t === e;
                                  })
                                    ? t ||
                                      xe(
                                        ye.filter(function (t) {
                                          return t !== e;
                                        }),
                                      )
                                    : t && xe([].concat(_(ye), [e]));
                                },
                                moveOutlineInward: He,
                                moveOutlineBeforeTarget: Fe,
                                moveOutlineAfterTarget: Be,
                              });
                            },
                            initialItemCount: n
                              ? null == j
                                ? void 0
                                : j.length
                              : void 0,
                          }),
                        ),
                      ),
                      ie &&
                        i.a.createElement(
                          g.a,
                          {
                            className: "bookmark-outline-footer",
                            dataElement: w.a.OUTLINE_ADD_NEW_BUTTON_CONTAINER,
                          },
                          he
                            ? i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(b.a, {
                                  className: "multi-selection-button",
                                  img: "icon-menu-add",
                                  ariaLabel: ""
                                    .concat(Te("action.add"), " ")
                                    .concat(Te("component.outlinesPanel")),
                                  disabled: ye.length > 0 || se || ge,
                                  onClick: function () {
                                    return de(!0);
                                  },
                                }),
                                i.a.createElement(b.a, {
                                  className: "multi-selection-button",
                                  img: "icon-delete-line",
                                  disabled: 0 === ye.length || ge,
                                  onClick: function () {
                                    return Ue(ye);
                                  },
                                }),
                              )
                            : i.a.createElement(p.a, {
                                className:
                                  "bookmark-outline-control-button add-new-button",
                                img: "icon-menu-add",
                                dataElement: w.a.OUTLINE_ADD_NEW_BUTTON,
                                disabled: se || ge,
                                label: ""
                                  .concat(Te("action.add"), " ")
                                  .concat(Te("component.outlinePanel")),
                                onClick: function () {
                                  return de(!0);
                                },
                                ariaLabel: ""
                                  .concat(Te("action.add"), " ")
                                  .concat(Te("component.outlinesPanel")),
                              }),
                        ),
                    ),
              );
        },
        V = i.a.memo(z);
      t.default = V;
    },
  },
]);
//# sourceMappingURL=chunk.35.js.map
