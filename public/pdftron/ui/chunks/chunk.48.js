(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    2061: function (e, t, r) {
      var n = r(35),
        a = r(2062);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, r = document) {
                const n = [];
                return (
                  r.querySelectorAll(t).forEach((e) => n.push(e)),
                  r.querySelectorAll("*").forEach((r) => {
                    r.shadowRoot && n.push(...e(t, r.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer")));
          const r = [];
          for (let n = 0; n < t.length; n++) {
            const a = t[n];
            if (0 === n)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  r.length > 0 &&
                    r.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), r.push(t));
            }
          }
        },
        singleton: !1,
      };
      n(a, o);
      e.exports = a.locals || {};
    },
    2062: function (e, t, r) {
      (e.exports = r(36)(!1)).push([
        e.i,
        ".FormulaOverlay{max-height:320px;width:320px;position:absolute;inset-block-start:100%;inset-inline-start:0;background:var(--component-background);z-index:90;list-style:none;margin:0;padding:var(--padding-tiny) 0;box-shadow:0 0 3px 0 var(--box-shadow);border-radius:var(--border-radius);overflow-x:hidden;overflow-y:auto}.FormulaOverlay .formula-label{display:flex;font-weight:var(--font-weight-bold);height:28px;padding:var(--padding-tiny) var(--padding-small);line-height:20px}.FormulaOverlay .formula-overlay-list{list-style:none;padding:0;margin:0}.FormulaOverlay .formula-option{cursor:pointer;display:flex;flex-direction:column;padding:var(--padding-tiny) var(--padding-small);height:32px;line-height:20px}.FormulaOverlay .formula-option .formula-description{font-size:10px;color:var(--text-secondary);line-height:16px}.FormulaOverlay .formula-option.highlighted{background-color:var(--dropdown-item-hover);color:var(--dropdown-item-active-text);height:44px}.FormulaOverlay .formula-option.highlighted .formula-name{font-weight:var(--font-weight-bold)}",
        "",
      ]);
    },
    2063: function (e, t, r) {
      var n = r(35),
        a = r(2064);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, r = document) {
                const n = [];
                return (
                  r.querySelectorAll(t).forEach((e) => n.push(e)),
                  r.querySelectorAll("*").forEach((r) => {
                    r.shadowRoot && n.push(...e(t, r.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer")));
          const r = [];
          for (let n = 0; n < t.length; n++) {
            const a = t[n];
            if (0 === n)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  r.length > 0 &&
                    r.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), r.push(t));
            }
          }
        },
        singleton: !1,
      };
      n(a, o);
      e.exports = a.locals || {};
    },
    2064: function (e, t, r) {
      (e.exports = r(36)(!1)).push([
        e.i,
        ".FormulaHelperOverlay .formulaHelperOverlayValue{display:inline-block;padding:var(--padding-tiny) var(--padding-small)}",
        "",
      ]);
    },
    2065: function (e, t, r) {
      var n = r(35),
        a = r(2066);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, r = document) {
                const n = [];
                return (
                  r.querySelectorAll(t).forEach((e) => n.push(e)),
                  r.querySelectorAll("*").forEach((r) => {
                    r.shadowRoot && n.push(...e(t, r.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer")));
          const r = [];
          for (let n = 0; n < t.length; n++) {
            const a = t[n];
            if (0 === n)
              (a.shadowRoot.appendChild(e),
                (e.onload = function () {
                  r.length > 0 &&
                    r.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (a.shadowRoot.appendChild(t), r.push(t));
            }
          }
        },
        singleton: !1,
      };
      n(a, o);
      e.exports = a.locals || {};
    },
    2066: function (e, t, r) {
      (e.exports = r(36)(!1)).push([
        e.i,
        ".FormulaBar{display:flex;border:1px solid var(--gray-5);background-color:var(--gray-2);padding:8px;grid-gap:8px;gap:8px;border-bottom:1px solid #e0e0e0;position:relative}.FormulaBar .RangeInput{padding:6px 8px}.FormulaBar .RangeInput.focus-visible,.FormulaBar .RangeInput:focus-visible{outline:var(--focus-visible-outline)!important}.FormulaBar .Formula{display:flex;align-items:center;flex-grow:1;height:32px;position:relative;border:1px solid var(--border);border-radius:4px;background-color:var(--component-background);padding-inline-start:30px}.FormulaBar .Formula .FormulaInput{position:relative;z-index:1;flex-grow:1;width:100%;padding:6px 8px;border:none;outline:none;font-size:14px;background-color:transparent}.FormulaBar .Formula .FormulaInput.hasFormula{color:transparent;caret-color:var(--gray-13)}.FormulaBar .Formula .FormulaOverlay{transform:translateX(38px);transform-origin:left top}.FormulaBar .Formula.readOnly{border-color:var(--lighter-border)}.FormulaBar .Formula[focus-within]{outline:var(--focus-visible-outline)!important}.FormulaBar .Formula:focus-within{outline:var(--focus-visible-outline)!important}.FormulaBar .Formula .FormulaInputMask{position:absolute;inset-block-start:0;padding:6px 8px;color:transparent;pointer-events:none;white-space:pre-wrap;width:100%;padding-inline-start:8px;font-size:14px;z-index:0}.FormulaBar .FormulaIcon{position:absolute;inset-inline-start:8px}.FormulaBar .FormulaIcon.readOnly{color:var(--disabled-icon)}.FormulaBar .FormulaInput{flex-grow:1;width:100%;padding:6px 8px;border:none;outline:none;background-color:transparent}",
        "",
      ]);
    },
    2101: function (e, t, r) {
      "use strict";
      r.r(t);
      (r(9),
        r(10),
        r(14),
        r(21),
        r(20),
        r(12),
        r(22),
        r(18),
        r(16),
        r(8),
        r(17),
        r(19),
        r(11),
        r(13));
      var n = r(0),
        a = r.n(n),
        o = r(6),
        l = r(4),
        i = (r(38), r(85), r(44), r(2)),
        u = r.n(i),
        c = r(15),
        s = r.n(c),
        d = r(305),
        m = r(51),
        p = r(5),
        f = r(60),
        g = r(144),
        v =
          (r(2061),
          r(2063),
          function (e) {
            var t,
              r = e.selectedFormula,
              n = e.labelId,
              o = Object(d.a)().t,
              l = (null == r ? void 0 : r.name) || "",
              i =
                (null == r || null === (t = r.parameters) || void 0 === t
                  ? void 0
                  : t.map(function (e) {
                      return o(
                        "formulas."
                          .concat(r.name, ".parameters.")
                          .concat(e.name, ".name"),
                        e.name,
                      );
                    })) || [];
            return a.a.createElement(
              "div",
              { className: "FormulaHelperOverlay", "aria-labelledby": n },
              a.a.createElement(
                "span",
                { className: "formulaHelperOverlayValue" },
                l,
                "(",
                i.join(", "),
                ")",
              ),
            );
          });
      v.propTypes = { selectedFormula: u.a.object, labelId: u.a.string };
      var h = v,
        b = function (e) {
          var t = e.isOpen,
            r = e.options,
            o = e.onSelect,
            l = e.onClose,
            i = e.triggerElement,
            u = e.highlightedIndex,
            c = e.setHighlightedIndex,
            m = e.selectedFormula,
            v = e.id,
            b = Object(d.a)().t,
            y = Object(n.useRef)(null),
            w = Object(n.useRef)([]);
          Object(n.useEffect)(
            function () {
              w.current[u] &&
                w.current[u].scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
            },
            [u],
          );
          var E = Object(n.useCallback)(
            function (e) {
              !t || (null != i && i.contains(e.target)) || l();
            },
            [t, l, i],
          );
          return (
            Object(g.a)(y, E),
            t
              ? a.a.createElement(
                  f.a,
                  {
                    dataElement: p.a.FORMULA_OVERLAY,
                    className: "FormulaOverlay",
                  },
                  a.a.createElement(
                    "span",
                    { id: "formula-overlay-label", className: "formula-label" },
                    b("formulaBar.formulas"),
                  ),
                  !m &&
                    a.a.createElement(
                      "ul",
                      {
                        ref: y,
                        className: "formula-overlay-list",
                        role: "listbox",
                        "aria-labelledby": "formula-overlay-label",
                        id: v,
                      },
                      r.map(function (e, t) {
                        return a.a.createElement(
                          "li",
                          {
                            key: "".concat(e.name, "-").concat(t),
                            ref: function (e) {
                              return (w.current[t] = e);
                            },
                            className: s()("formula-option", {
                              highlighted: u === t,
                            }),
                            onClick: function () {
                              return o(e);
                            },
                            onMouseEnter: function () {
                              return c(t);
                            },
                            id: "option-".concat(t),
                            role: "option",
                            "aria-labelledby": "formula-name-"
                              .concat(t, " formula-desc-")
                              .concat(t),
                            "aria-selected": u === t,
                            tabIndex: 0,
                          },
                          a.a.createElement(
                            "div",
                            {
                              id: "formula-name-".concat(t),
                              className: "formula-name",
                            },
                            e.name,
                          ),
                          u === t &&
                            a.a.createElement(
                              "div",
                              {
                                id: "formula-desc-".concat(t),
                                className: "formula-description",
                              },
                              b(
                                "formulas.".concat(e.name, ".description"),
                                e.description,
                              ),
                            ),
                        );
                      }),
                    ),
                  m &&
                    a.a.createElement(h, {
                      selectedFormula: m,
                      labelId: "formula-overlay-label",
                    }),
                )
              : null
          );
        };
      b.propTypes = {
        id: u.a.string.isRequired,
        isOpen: u.a.bool.isRequired,
        options: u.a.arrayOf(
          u.a.shape({
            name: u.a.string.isRequired,
            description: u.a.string.isRequired,
          }),
        ).isRequired,
        onSelect: u.a.func.isRequired,
        onClose: u.a.func.isRequired,
        triggerElement: u.a.instanceOf(Element),
        highlightedIndex: u.a.number.isRequired,
        setHighlightedIndex: u.a.func.isRequired,
        selectedFormula: u.a.shape({
          name: u.a.string,
          description: u.a.string.isRequired,
          parameters: u.a.arrayOf(u.a.shape({ name: u.a.string })),
        }),
      };
      var y = b,
        w = r(1);
      r(2065);
      function E(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                l,
                i = [],
                u = !0,
                c = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    u = !0
                  );
              } catch (e) {
                ((c = !0), (a = e));
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((l = r.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return x(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? x(e, t)
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
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var F = function (e) {
        var t = e.isReadOnly,
          r = e.activeCellRange,
          o = e.cellFormula,
          l = e.stringCellValue,
          i = e.onRangeInputChange,
          u = e.onRangeInputKeyDown,
          c = Object(d.a)().t,
          g = o || l || "",
          v = E(Object(n.useState)(g), 2),
          h = v[0],
          b = v[1],
          x = E(Object(n.useState)(!1), 2),
          F = x[0],
          O = x[1],
          R = E(Object(n.useState)(0), 2),
          C = R[0],
          j = R[1],
          S = E(Object(n.useState)(null), 2),
          I = S[0],
          B = S[1],
          A = E(Object(n.useState)([]), 2),
          k = A[0],
          L = A[1],
          M = E(Object(n.useState)([]), 2),
          N = M[0],
          T = M[1],
          q = E(Object(n.useState)(!1), 2),
          H = q[0],
          D = q[1],
          V = Object(n.useRef)(null),
          _ = Object(n.useRef)(null),
          K = Object(n.useRef)(),
          U = w.a.getDocumentViewer().getSpreadsheetEditorManager();
        (Object(n.useEffect)(
          function () {
            function e() {
              _.current = U.getFormulaBarProvider();
            }
            return (
              w.a.addEventListener("spreadsheetEditorReady", e),
              function () {
                w.a.removeEventListener("spreadsheetEditorReady", e);
              }
            );
          },
          [U],
        ),
          Object(n.useEffect)(
            function () {
              var e = function (e) {
                var t, r;
                if (H) {
                  var n =
                    null !==
                      (t =
                        null === (r = e.getFormulaInfoItems) || void 0 === r
                          ? void 0
                          : r.call(e)) && void 0 !== t
                      ? t
                      : [];
                  (L(n), j(0));
                }
              };
              return (
                w.a.addEventListener("formulaSearchEvent", e),
                function () {
                  w.a.removeEventListener("formulaSearchEvent", e);
                }
              );
            },
            [H],
          ),
          Object(n.useEffect)(function () {
            var e = function (e) {
                var t = e.getInfo();
                T(t);
                var r = t
                  .map(function (e) {
                    return e._text;
                  })
                  .join("");
                b(r);
              },
              t = function (e) {
                var t, r;
                null === (t = V.current) || void 0 === t || t.focus();
                var n = e.getSelectionPosition();
                null === (r = V.current) ||
                  void 0 === r ||
                  r.setSelectionRange(n, n);
              },
              r = function (e) {
                B(e.getFormulaInfo());
              };
            return (
              w.a.addEventListener("formulaBarTextChangedEvent", e),
              w.a.addEventListener("formulaBarSelectionChangedEvent", t),
              w.a.addEventListener("formulaHelpEvent", r),
              function () {
                (w.a.removeEventListener("formulaBarTextChangedEvent", e),
                  w.a.removeEventListener("formulaBarSelectionChangedEvent", t),
                  w.a.removeEventListener("formulaHelpEvent", r));
              }
            );
          }, []),
          Object(n.useEffect)(
            function () {
              var e = r;
              K.current !== e && (b(g), (K.current = e));
            },
            [r, g],
          ));
        var W = Object(n.useCallback)(function (e) {
            _.current &&
              (_.current.onFormulaBarSelectFormula(e.name),
              _.current.onFormulaBarTextChange(e.name));
          }, []),
          z = Object(n.useCallback)(function () {
            O(!1);
          }, []),
          P = Object(n.useCallback)(function (e) {
            var t = e.target.value;
            (b(t),
              T([]),
              _.current &&
                (_.current.onFormulaBarSelectionChanged(
                  V.current.selectionStart,
                ),
                _.current.onFormulaBarTextChange(t)));
          }, []);
        Object(n.useEffect)(
          function () {
            (0 === k.length && !I) || !H ? O(!1) : O(!0);
          },
          [k, I],
        );
        var J = Object(n.useCallback)(function () {
            (D(!0), _.current && _.current.onFormulaBarFocus());
          }, []),
          Y = "formula-overlay-".concat(p.a.FORMULA_BAR),
          $ = Object(n.useCallback)(
            function (e) {
              if (F && !t)
                switch (e.key) {
                  case "ArrowDown":
                    return (
                      e.preventDefault(),
                      void j(function (e) {
                        return (e + 1) % k.length;
                      })
                    );
                  case "ArrowUp":
                    return (
                      e.preventDefault(),
                      void j(function (e) {
                        return (e - 1 + k.length) % k.length;
                      })
                    );
                  case "Enter":
                    if (k[C]) return void W(k[C]);
                    break;
                  case "Tab":
                    if (!e.shiftKey)
                      return (e.preventDefault(), void (k[C] && W(k[C])));
                    break;
                  case "Escape":
                    return (e.stopPropagation(), void z());
                }
              _.current &&
                (_.current.onFormulaBarSelectionChanged(
                  V.current.selectionStart,
                ),
                _.current.onFormulaBarKeyDown(e));
            },
            [F, t, k, C, W, z],
          );
        return a.a.createElement(
          f.a,
          { className: "FormulaBar", dataElement: p.a.FORMULA_BAR },
          a.a.createElement("input", {
            type: "text",
            className: "RangeInput",
            value: r,
            onChange: function (e) {
              return i(e.target.value);
            },
            onKeyDown: u,
            "aria-label": c("formulaBar.range"),
          }),
          a.a.createElement(
            "div",
            { className: s()("Formula", { readOnly: t }) },
            a.a.createElement(m.a, {
              glyph: "function",
              className: s()("FormulaIcon", { readOnly: t }),
            }),
            a.a.createElement(
              "div",
              { className: "FormulaInputMask" },
              N.map(function (e, t) {
                return a.a.createElement(
                  "span",
                  {
                    key: "".concat(e.text, "-").concat(t),
                    style: { color: e.color },
                  },
                  e.text,
                );
              }),
            ),
            a.a.createElement("input", {
              onFocus: J,
              id: p.a.FORMULA_BAR,
              ref: V,
              type: "text",
              role: "combobox",
              "aria-autocomplete": "list",
              "aria-expanded": k.length > 0,
              "aria-controls": Y,
              className: s()({ FormulaInput: !0, hasFormula: N.length > 0 }),
              "aria-activedescendant":
                F && -1 !== C ? "option-".concat(C) : void 0,
              value: h,
              onChange: P,
              onBlur: function (e) {
                var t;
                (!F ||
                  (null !== (t = e.relatedTarget) &&
                    void 0 !== t &&
                    t.closest("#".concat(Y))) ||
                  z(),
                  D(!1));
              },
              onKeyDown: $,
              readOnly: t,
              "aria-label": c("formulaBar.label"),
            }),
            F &&
              !t &&
              a.a.createElement(y, {
                isOpen: F,
                options: k,
                onSelect: W,
                onClose: z,
                triggerElement: V.current,
                highlightedIndex: C,
                setHighlightedIndex: j,
                selectedFormula: I,
                id: Y,
              }),
          ),
        );
      };
      F.propTypes = {
        isReadOnly: u.a.bool,
        activeCellRange: u.a.string,
        cellFormula: u.a.oneOfType([u.a.string, u.a.number]),
        stringCellValue: u.a.string,
        onRangeInputChange: u.a.func,
        onRangeInputKeyDown: u.a.func,
      };
      var O = F;
      function R(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                l,
                i = [],
                u = !0,
                c = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    u = !0
                  );
              } catch (e) {
                ((c = !0), (a = e));
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((l = r.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return C(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? C(e, t)
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
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var j = window.Core.SpreadsheetEditor.SpreadsheetEditorEditMode,
        S = function () {
          var e = Object(o.e)(l.a.getActiveCellRange),
            t = Object(o.e)(l.a.getCellFormula),
            r = Object(o.e)(l.a.getStringCellValue),
            i = Object(o.e)(l.a.getSpreadsheetEditorEditMode) === j.VIEW_ONLY,
            u = R(Object(n.useState)(e), 2),
            c = u[0],
            s = u[1];
          return (
            Object(n.useEffect)(
              function () {
                s(e);
              },
              [e],
            ),
            a.a.createElement(O, {
              isReadOnly: i,
              activeCellRange: c,
              cellFormula: t,
              stringCellValue: r,
              onRangeInputChange: function (e) {
                s(e);
              },
              onRangeInputKeyDown: function (t) {
                if ("Enter" === t.key)
                  try {
                    var r = w.a
                        .getDocumentViewer()
                        .getDocument()
                        .getSpreadsheetEditorDocument(),
                      n = w.a.getCellRange(t.target.value);
                    r.selectCellRange(n);
                  } catch (t) {
                    return (s(e), void console.error(t));
                  }
              },
            })
          );
        };
      t.default = S;
    },
  },
]);
//# sourceMappingURL=chunk.48.js.map
