(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    2067: function (e, t, n) {
      var r = n(35),
        a = n(2068);
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
                const r = [];
                return (
                  n.querySelectorAll(t).forEach((e) => r.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && r.push(...e(t, n.shadowRoot));
                  }),
                  r
                );
              })("apryse-webviewer")));
          const n = [];
          for (let r = 0; r < t.length; r++) {
            const a = t[r];
            if (0 === r)
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
      r(a, o);
      e.exports = a.locals || {};
    },
    2068: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".sheet-tab{cursor:pointer;border-bottom:none;border-top-right-radius:4px;border-top-left-radius:4px;min-width:170px;height:40px;position:relative;border-inline-end:1px solid transparent}.sheet-tab:hover{background:var(--faded-component-background)}.sheet-tab.no-left-border .tab-body{border-inline-end:1px solid transparent}.sheet-tab .tab-body{height:24px;display:flex;padding:0;padding-inline-start:8px;padding-inline-end:8px;width:100%;position:absolute;inset-block-start:50%;transform:translateY(-50%);border-inline-end:1px solid var(--border)}.sheet-tab .tab-body.input-mode{padding-inline-start:5px;padding-inline-end:6px}.sheet-tab .tab-body .sheet-label{width:calc(100% - 24px);text-align:start;justify-content:left;height:24px}.sheet-tab .tab-body .sheet-label span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.sheet-tab .tab-body .sheet-input{max-width:100%}.sheet-tab .tab-body input.input-error{border-color:red}.sheet-tab.active{border:1px solid var(--border);border-bottom:none;background:var(--gray-0)}.sheet-tab.active .tab-body{border-inline-end:1px solid transparent}.sheet-tab .sheet-options .ToggleElementButton button{width:24px;height:24px;min-width:24px}.sheet-tab .sheet-options .ToggleElementButton button .Icon{width:16px;height:14px}.sheet-tab .sheet-options .more-options-icon{height:24px;width:24px}.sheet-tab .sheet-options .more-options-icon .Icon{width:16px;height:16px}",
        "",
      ]);
    },
    2069: function (e, t, n) {
      var r = n(35),
        a = n(2070);
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
                const r = [];
                return (
                  n.querySelectorAll(t).forEach((e) => r.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && r.push(...e(t, n.shadowRoot));
                  }),
                  r
                );
              })("apryse-webviewer")));
          const n = [];
          for (let r = 0; r < t.length; r++) {
            const a = t[r];
            if (0 === r)
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
      r(a, o);
      e.exports = a.locals || {};
    },
    2070: function (e, t, n) {
      (e.exports = n(36)(!1)).push([
        e.i,
        ".Flyout[\\:has\\(.SheetOptionsFlyout\\)]{z-index:130}.Flyout:has(.SheetOptionsFlyout){z-index:130}.SpreadsheetSwitcher{padding:0}.GenericFileTab{display:flex;padding-inline-start:4px;padding-top:4px}.GenericFileTab .dropdown-menu{border:1px solid var(--border);margin-top:3px;margin-inline-start:5px}.GenericFileTab .dropdown-menu .Icon{position:absolute}.GenericFileTab .add-sheet-tab{margin-top:3px;margin-inline-start:5px}.GenericFileTab .add-sheet-tab .Icon{width:14px;height:14px}",
        "",
      ]);
    },
    2097: function (e, t, n) {
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
        n(29),
        n(13));
      var r = n(0),
        a = n.n(r),
        o = n(1),
        i = (n(81), n(44), n(99), n(6)),
        l = n(305),
        c = n(556),
        u = n(41),
        s = n(96),
        d = n(51),
        h = n(5),
        b = n(87),
        f = n(4),
        p = n(3),
        m = n(2),
        g = n.n(m),
        v = function (e) {
          var t = e.id,
            n = void 0 === t ? "" : t,
            a = e.additionalTabs,
            o = e.tabsForReference,
            l = e.onClick,
            c = e.activeItem,
            u = Object(i.d)(),
            s = Object(i.e)(function (e) {
              return f.a.getFlyout(e, n);
            });
          return (
            Object(r.useLayoutEffect)(
              function () {
                var e = {
                  dataElement: n,
                  className: "AdditionalTabsFlyout",
                  items: a.map(function (e) {
                    var t = e.name;
                    return {
                      label: t,
                      title: t,
                      option: t,
                      disabled: e.disabled,
                      isActive: t === c,
                      dataElement: Symbol(t).toString(),
                      onClick: function () {
                        return l(t, e.sheetIndex);
                      },
                    };
                  }),
                };
                u(s ? p.a.updateFlyout(e.dataElement, e) : p.a.addFlyout(e));
              },
              [o, c],
            ),
            null
          );
        };
      v.propTypes = {
        id: g.a.string,
        additionalTabs: g.a.arrayOf(
          g.a.shape({
            name: g.a.string,
            sheetIndex: g.a.number,
            disabled: g.a.bool,
          }),
        ),
        tabsForReference: g.a.array,
        onClick: g.a.func,
        activeItem: g.a.string,
      };
      var y = v,
        S = (n(115), n(153), n(15)),
        E = n.n(S),
        w = n(90),
        O = function (e) {
          var t = e.sheetId,
            n = e.handleClick,
            a = e.sheetCount,
            o = e.disabled,
            l = Object(i.d)(),
            c = "".concat(h.a.SHEET_TAB_OPTIONS_FLYOUT, "-").concat(t),
            u = Object(i.e)(function (e) {
              return f.a.getFlyout(e, c);
            }),
            s = Object(w.a)(function (e) {
              return n("Rename", e);
            }),
            d = Object(w.a)(function (e) {
              return n("Delete", e);
            });
          return (
            Object(r.useLayoutEffect)(
              function () {
                var e = {
                  dataElement: c,
                  className: "TabOptionsFlyout",
                  items: [
                    {
                      label: "action.rename",
                      title: "action.rename",
                      option: "Rename",
                      dataElement: "sheetTabRenameOption",
                      onClick: s,
                    },
                    {
                      label: "action.delete",
                      title: "action.delete",
                      option: "Delete",
                      dataElement: "sheetTabDeleteOption",
                      onClick: d,
                      disabled: 1 === a || o,
                    },
                  ],
                };
                l(u ? p.a.updateFlyout(e.dataElement, e) : p.a.addFlyout(e));
              },
              [a, o, n],
            ),
            null
          );
        };
      O.propTypes = {
        sheetId: g.a.string,
        handleClick: g.a.func,
        sheetCount: g.a.number,
        disabled: g.a.bool,
      };
      var x = O;
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
              var r,
                a,
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
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
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
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var I = function (e) {
        var t = e.handleClick,
          n = void 0 === t ? function () {} : t,
          r = e.id,
          o = e.onToggle,
          i = e.label,
          c = e.disabled,
          u = e.sheetCount,
          d = j(Object(l.a)(), 1)[0];
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(s.a, {
            dataElement: "options-".concat(r),
            title: ""
              .concat(d("option.searchPanel.moreOptions"), " ")
              .concat(i),
            img: "icon-tools-more-vertical",
            onToggle: function (e) {
              e && o(i);
            },
            disabled: c,
            toggleElement: ""
              .concat(h.a.SHEET_TAB_OPTIONS_FLYOUT, "-")
              .concat(r),
          }),
          a.a.createElement(x, {
            sheetId: r,
            sheetCount: u,
            handleClick: function (e) {
              return n(r, i, e);
            },
            disabled: c,
          }),
        );
      };
      I.propTypes = {
        id: g.a.string,
        label: g.a.string,
        onToggle: g.a.func,
        handleClick: g.a.func,
        disabled: g.a.bool,
        sheetCount: g.a.number,
      };
      var k = I,
        A = (n(2067), n(182));
      function C(e, t) {
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
              var r,
                a,
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
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return D(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? D(e, t)
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
      function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var R = {
          sheet: g.a.any.isRequired,
          sheetCount: g.a.number,
          activeSheetLabel: g.a.string.isRequired,
          setLabelBeingEdited: g.a.func.isRequired,
          setActiveSheet: g.a.func.isRequired,
          renameSheet: g.a.func.isRequired,
          deleteSheet: g.a.func.isRequired,
          onClick: g.a.func.isRequired,
          isEditMode: g.a.bool.isRequired,
          checkIsSheetNameDuplicated: g.a.func,
          noRightBorder: g.a.bool,
          isReadOnlyMode: g.a.bool,
          skipDeleteWarning: g.a.bool,
        },
        N = function (e) {
          var t = e.sheet,
            n = e.activeSheetLabel,
            o = e.onClick,
            c = e.sheetCount,
            s = e.setLabelBeingEdited,
            d = e.setActiveSheet,
            h = e.isEditMode,
            b = e.noRightBorder,
            f = e.checkIsSheetNameDuplicated,
            m = e.isReadOnlyMode,
            g = e.deleteSheet,
            v = e.renameSheet,
            y = e.skipDeleteWarning,
            S = t.sheetIndex,
            w = t.name,
            O = t.disabled,
            x = w === n,
            j = C(Object(r.useState)(""), 2),
            T = j[0],
            I = j[1],
            D = C(Object(r.useState)(!1), 2),
            R = D[0],
            N = D[1],
            M = Object(l.a)().t,
            L = Object(r.useRef)(),
            F = Object(i.d)();
          Object(r.useEffect)(
            function () {
              T && L.current && L.current.focus();
            },
            [T],
          );
          var B = function () {
              var e =
                  "" === T
                    ? "warning.sheetTabRenameIssueTwo"
                    : "warning.sheetTabRenameIssueOne",
                t = {
                  message: M("".concat(e, ".message")),
                  title: M("".concat(e, ".title")),
                  confirmBtnText: M("action.ok"),
                  onConfirm: function () {
                    return L.current.focus();
                  },
                  onCancel: function () {
                    (s(!1), N(!1), I(w));
                  },
                };
              F(p.a.showWarningMessage(t));
            },
            W = function () {
              if (R) B();
              else {
                var e = f(T),
                  t = "" === T.trim();
                if (e || t) return (N(!0), void B());
                (v(w, T), s(null), N(!1), I(""));
              }
            },
            P = Object(A.a)(W, "addTabButton"),
            _ = null;
          return (
            (_ = h
              ? a.a.createElement("input", {
                  type: "text",
                  className: E()("sheet-input", { "input-error": R }),
                  ref: L,
                  value: T,
                  onChange: function (e) {
                    var t = e.target.value,
                      n = f(t);
                    (N(n), I(t));
                  },
                  onBlur: W,
                  onKeyDown: function (e) {
                    "Enter" !== e.key || R || P();
                  },
                  "aria-invalid": R,
                  "aria-label": M("action.rename"),
                })
              : a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(u.a, {
                    role: "tab",
                    ariaSelected: x,
                    ariaLabel: w,
                    className: "sheet-label",
                    onClick: function (e) {
                      return o(e, w, S);
                    },
                    title: w,
                    label: w,
                    useI18String: !1,
                    disabled: O,
                  }),
                  a.a.createElement(
                    "div",
                    { className: "sheet-options" },
                    a.a.createElement(k, {
                      id:
                        null == w
                          ? void 0
                          : w.replace(/\s+/g, "-").toLowerCase(),
                      label: w,
                      sheetCount: c,
                      onToggle: function (e) {
                        return ((t = e), (n = S), s(null), N(!1), void d(t, n));
                        var t, n;
                      },
                      handleClick: function (e, t, n) {
                        if ("Rename" === n) (I((a = t)), N(!1), s(a));
                        else if ("Delete" === n) {
                          if (y) return g(w);
                          var r = {
                            message: M("warning.sheetTabDeleteMessage.message"),
                            title: M("warning.sheetTabDeleteMessage.title"),
                            confirmBtnText: M("action.ok"),
                            secondaryBtnText: M("action.cancel"),
                            onConfirm: function () {
                              g(w);
                            },
                          };
                          F(p.a.showWarningMessage(r));
                        }
                        var a;
                      },
                      disabled: m,
                    }),
                  ),
                )),
            a.a.createElement(
              "div",
              {
                className: E()(
                  { active: x, "no-left-border": b, disabled: O },
                  "sheet-tab",
                ),
              },
              a.a.createElement(
                "div",
                { className: E()({ "input-mode": h }, "tab-body") },
                _,
              ),
            )
          );
        };
      N.propTypes = R;
      var M = a.a.memo(N),
        L = (n(2069), n(597));
      function F(e, t) {
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
              var r,
                a,
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
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return B(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? B(e, t)
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
      function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var W = function (e) {
        var t,
          n = e.tabs,
          o = void 0 === n ? [] : n,
          p = e.activeSheetIndex,
          m = void 0 === p ? 0 : p,
          g = e.setActiveSheet,
          v = e.createNewSheet,
          S = e.deleteSheet,
          E = e.renameSheet,
          w = e.checkIsSheetNameDuplicated,
          O = e.skipDeleteWarning,
          x = void 0 !== O && O,
          j =
            (null ===
              (t = o.find(function (e) {
                return e.sheetIndex === m;
              })) || void 0 === t
              ? void 0
              : t.name) || "",
          T = Object(c.a)().width,
          I = Object(r.useMemo)(
            function () {
              return Math.floor((T - 80) / 170);
            },
            [T],
          ),
          k = Object(l.a)().t,
          A = F(Object(r.useState)(""), 2),
          C = A[0],
          D = A[1],
          R = Object(i.e)(f.a.getSpreadsheetEditorEditMode) === b.f.VIEW_ONLY,
          N = function (e, t) {
            (D(null), g(e, t));
          },
          B = function (e, t, n) {
            (e.preventDefault(), e.stopPropagation(), N(t, n));
          },
          W = F(
            Object(r.useMemo)(
              function () {
                return [o.slice(0, I), o.slice(I)];
              },
              [o, I],
            ),
            2,
          ),
          P = W[0],
          _ = W[1],
          q = Object(r.useRef)(),
          H = Object(L.a)(q, [P, C]).currentFocusIndex,
          U = P.map(function (e, t) {
            return a.a.createElement(M, {
              key: e.sheetIndex,
              sheet: e,
              sheetCount: o.length,
              activeSheetLabel: j,
              onClick: B,
              isEditMode: C === e.name,
              setLabelBeingEdited: D,
              setActiveSheet: g,
              deleteSheet: S,
              renameSheet: E,
              noRightBorder:
                o[e.sheetIndex + 1] && o[e.sheetIndex + 1].name === j,
              checkIsSheetNameDuplicated: w,
              isReadOnlyMode: R,
              skipDeleteWarning: x,
              tabIndex: H === t ? 0 : -1,
            });
          }),
          G = Object(r.useMemo)(
            function () {
              return _.some(function (e) {
                return e.name === j;
              });
            },
            [_, j],
          );
        return a.a.createElement(
          "div",
          {
            className:
              "SpreadsheetSwitcher ModularHeader BottomHeader stroke start",
          },
          a.a.createElement(
            "div",
            { className: "GenericFileTab", role: "tablist", ref: q },
            U,
            (null == _ ? void 0 : _.length) > 0
              ? a.a.createElement(
                  s.a,
                  {
                    className: "dropdown-menu tab-dropdown-button",
                    dataElement: "tabTrigger",
                    title: k("message.showMore"),
                    toggleElement: h.a.ADDITIONAL_SPREADSHEET_TABS_MENU,
                    label: _.length.toString(),
                  },
                  G &&
                    a.a.createElement(d.a, { glyph: "icon-active-indicator" }),
                )
              : null,
            a.a.createElement(u.a, {
              className: "add-sheet-tab",
              title: "action.addSheet",
              img: "icon-menu-add",
              onClick: v,
              dataElement: "addTabButton",
              label: "",
              ariaLabel: k("action.addSheet"),
              disabled: R,
            }),
            (null == _ ? void 0 : _.length) > 0 &&
              a.a.createElement(y, {
                id: h.a.ADDITIONAL_SPREADSHEET_TABS_MENU,
                additionalTabs: _,
                tabsForReference: o,
                onClick: N,
                activeItem: j,
              }),
          ),
        );
      };
      W.propTypes = {
        tabs: g.a.arrayOf(
          g.a.shape({
            name: g.a.string,
            sheetIndex: g.a.number,
            disabled: g.a.bool,
          }),
        ),
        activeSheetIndex: g.a.number,
        setActiveSheet: g.a.func,
        createNewSheet: g.a.func,
        deleteSheet: g.a.func,
        renameSheet: g.a.func,
        skipDeleteWarning: g.a.bool,
        checkIsSheetNameDuplicated: g.a.func,
      };
      var P = W,
        _ = n(196);
      function q(e) {
        return (q =
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
      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                G(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : H(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function G(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != q(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != q(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == q(t) ? t : t + "";
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
      function V(e, t) {
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
              var r,
                a,
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
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Y(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Y(e, t)
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
      function Y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var $ = "SpreadsheetEditorDocument is not loaded",
        z = 2;
      function J(e) {
        var t = Object(l.a)().t,
          n = V(Object(r.useState)([]), 2),
          i = n[0],
          c = n[1],
          u = V(Object(r.useState)(0), 2),
          s = u[0],
          d = u[1];
        Object(r.useEffect)(function () {
          var e = function (e) {
              (c(e.getVisibleSheets()), d(e.getActiveSheetIndex()));
            },
            t = function (e) {
              d(e.getSheetIndex());
            },
            n = function () {
              var e = o.a
                .getDocumentViewer()
                .getDocument()
                .getSpreadsheetEditorDocument()
                .getWorkbook();
              e &&
                c(
                  (function (e) {
                    for (var t = e.sheetCount, n = [], r = 0; r < t; r++) {
                      var a = e.getSheetAt(r);
                      n.push({ name: a.name, sheetIndex: r });
                    }
                    return n;
                  })(e),
                );
            };
          return (
            o.a.addEventListener("activeSheetChanged", t),
            o.a.addEventListener("spreadsheetEditorReady", n),
            o.a.addEventListener("sheetChanged", e),
            function () {
              (o.a.removeEventListener("sheetChanged", e),
                o.a.removeEventListener("spreadsheetEditorReady", n),
                o.a.removeEventListener("activeSheetChanged", t));
            }
          );
        }, []);
        var h = Object(r.useCallback)(function () {
          (c([]), d(0));
        }, []);
        Object(_.a)(h);
        var b = Object(A.a)(function (e) {
            var t,
              n,
              r =
                null === (t = o.a.getDocument()) ||
                void 0 === t ||
                null === (n = t.getSpreadsheetEditorDocument()) ||
                void 0 === n
                  ? void 0
                  : n.getWorkbook();
            if (!r) return console.error($);
            r.getSheet(e) && r.removeSheet(e);
          }, "addTabButton"),
          f = U(
            U({}, e),
            {},
            {
              tabs: i,
              activeSheetIndex: s,
              setActiveSheet: function (e, t) {
                var n,
                  r,
                  a =
                    null === (n = o.a.getDocument()) ||
                    void 0 === n ||
                    null === (r = n.getSpreadsheetEditorDocument()) ||
                    void 0 === r
                      ? void 0
                      : r.getWorkbook();
                if (!a) return console.error($);
                a.getSheetAt(t) && (a.setActiveSheet(t), d(t));
              },
              createNewSheet: function () {
                var e,
                  n,
                  r =
                    null === (e = o.a.getDocument()) ||
                    void 0 === e ||
                    null === (n = e.getSpreadsheetEditorDocument()) ||
                    void 0 === n
                      ? void 0
                      : n.getWorkbook();
                if (!r) return console.error($);
                for (
                  var a = t("spreadsheetEditor.blankSheet"), i = !r.getSheet(a);
                  !i;

                )
                  ((a = ""
                    .concat(t("spreadsheetEditor.blankSheet"), " ")
                    .concat(z++)),
                    (i = !r.getSheet(a)));
                r.createSheet(a);
              },
              deleteSheet: b,
              renameSheet: function (e, t) {
                var n,
                  r,
                  a =
                    null === (n = o.a.getDocument()) ||
                    void 0 === n ||
                    null === (r = n.getSpreadsheetEditorDocument()) ||
                    void 0 === r
                      ? void 0
                      : r.getWorkbook();
                if (!a) return console.error($);
                var i = a.getSheet(e);
                i && (i.name = t);
              },
              checkIsSheetNameDuplicated: function (e) {
                var t, n;
                return (
                  null === (t = o.a.getDocument()) ||
                  void 0 === t ||
                  null === (n = t.getSpreadsheetEditorDocument()) ||
                  void 0 === n
                    ? void 0
                    : n.getWorkbook()
                )
                  ? (function (e, t, n) {
                      var r = n.toLowerCase();
                      return e.some(function (e) {
                        return (
                          e.name.toLowerCase() === r &&
                          e.sheetIndex !== t.sheetIndex
                        );
                      });
                    })(i, i[s], e)
                  : (console.error($), !1);
              },
            },
          );
        return a.a.createElement(P, f);
      }
      J.propTypes = {};
      var K = J;
      t.default = K;
    },
  },
]);
//# sourceMappingURL=chunk.52.js.map
