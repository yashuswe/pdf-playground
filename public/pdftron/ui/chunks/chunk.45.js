(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    2053: function (e, n, t) {
      var o = t(35),
        r = t(2054);
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
    2054: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.wv3d-properties-panel{padding:16px 0 0 16px;display:flex;flex-direction:column;overflow-y:auto;-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.wv3d-properties-panel .no-selections{flex-direction:column;display:flex;align-items:center;justify-content:center}.wv3d-properties-panel .no-selections .empty-icon,.wv3d-properties-panel .no-selections .empty-icon svg{width:100px;height:100px}.wv3d-properties-panel .no-selections .empty-icon *{fill:var(--gray-5);color:var(--gray-5)}.wv3d-properties-panel .no-selections .empty-text{margin-top:4px;padding-inline-start:4px;padding-inline-end:4px;width:68%;text-align:center}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .wv3d-properties-panel{width:100%;min-width:100%;padding-top:0}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .wv3d-properties-panel .close-container{display:flex;align-items:center;justify-content:flex-end;height:64px;width:100%;padding-inline-end:12px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .wv3d-properties-panel .close-container .close-icon-container{cursor:pointer}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .wv3d-properties-panel .close-container .close-icon-container .close-icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .wv3d-properties-panel{width:100%;min-width:100%;padding-top:0}.App.is-web-component:not(.is-in-desktop-only-mode) .wv3d-properties-panel .close-container{display:flex;align-items:center;justify-content:flex-end;height:64px;width:100%;padding-inline-end:12px}.App.is-web-component:not(.is-in-desktop-only-mode) .wv3d-properties-panel .close-container .close-icon-container{cursor:pointer}.App.is-web-component:not(.is-in-desktop-only-mode) .wv3d-properties-panel .close-container .close-icon-container .close-icon{width:24px;height:24px}}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2055: function (e, n, t) {
      var o = t(35),
        r = t(2056);
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
    2056: function (e, n, t) {
      (e.exports = t(36)(!1)).push([
        e.i,
        ".property-pair{margin-inline-start:24px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;padding-bottom:10px;-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.property-key{flex-basis:140px}.property-key,.property-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.property-value{flex-basis:300px;padding-inline-start:20px}",
        "",
      ]);
    },
    2057: function (e, n, t) {
      var o = t(35),
        r = t(2058);
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
    2058: function (e, n, t) {
      (e.exports = t(36)(!1)).push([
        e.i,
        ".group-title{display:flex;align-items:center;margin-bottom:5px;-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.dropdown.active{visibility:visible}.dropdown.inactive{visibility:hidden;display:none}",
        "",
      ]);
    },
    2059: function (e, n, t) {
      var o = t(35),
        r = t(2060);
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
    2060: function (e, n, t) {
      (e.exports = t(36)(!1)).push([
        e.i,
        ".header-value{color:var(--gray-7)}.header-title{font-size:16px}",
        "",
      ]);
    },
    2094: function (e, n, t) {
      "use strict";
      t.r(n);
      (t(9),
        t(10),
        t(14),
        t(21),
        t(20),
        t(12),
        t(22),
        t(18),
        t(16),
        t(8),
        t(17),
        t(19),
        t(11),
        t(13),
        t(94));
      var o = t(0),
        r = t.n(o),
        a = (t(38), t(44), t(305)),
        i = t(51),
        l = t(60),
        s = t(1561),
        p =
          (t(2053),
          t(639),
          t(37),
          t(2055),
          function (e) {
            var n = e.name,
              t = e.value;
            return r.a.createElement(
              "div",
              {
                "data-element": "propertyKeyValuePair",
                className: "property-pair",
                key: n,
              },
              r.a.createElement("span", { className: "property-key" }, n),
              r.a.createElement("span", { className: "property-value" }, t),
            );
          }),
        c = function (e) {
          var n = e.entities,
            t = [];
          for (var o in n)
            t.push(r.a.createElement(p, { key: o, name: o, value: n[o] }));
          return r.a.createElement(
            "div",
            { "data-element": "generalValues" },
            t,
          );
        };
      (t(50), t(62), t(228), t(2057));
      function d(e, n) {
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
                s = !0,
                p = !1;
              try {
                if (((a = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((p = !0), (r = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((i = t.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (p) throw r;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return u(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? u(e, n)
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
      function u(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var m = function (e) {
          var n = e.name,
            t = e.data,
            a = e.open,
            l = d(Object(o.useState)(a), 2),
            s = l[0],
            c = l[1],
            u = Object(o.useMemo)(
              function () {
                return Object.entries(t).map(function (e) {
                  return r.a.createElement(p, {
                    key: e[0],
                    name: e[0],
                    value: e[1],
                  });
                });
              },
              [t],
            );
          return r.a.createElement(
            "div",
            { "data-element": "Group" },
            r.a.createElement(
              "div",
              { className: "group-title" },
              r.a.createElement(
                "div",
                {
                  onClick: function () {
                    c(!s);
                  },
                },
                r.a.createElement(i.a, {
                  glyph: "".concat(
                    s
                      ? "ic_chevron_down_black_24px"
                      : "ic_chevron_right_black_24px",
                  ),
                }),
              ),
              r.a.createElement("span", null, n),
            ),
            r.a.createElement(
              "div",
              { className: "dropdown ".concat(s ? "active" : "inactive") },
              u,
            ),
          );
        },
        h = r.a.memo(m);
      var f = function (e) {
          var n = e.groups,
            t = e.groupOrder,
            o = [];
          if (t && t.length > 0)
            for (var a in ((o = (function (e, n) {
              var t = [];
              for (var o in e) {
                var a = e[o];
                a in n &&
                  t.push(
                    r.a.createElement(h, {
                      name: a,
                      key: a,
                      data: n[a],
                      open: !0,
                    }),
                  );
              }
              return t;
            })(t, n)),
            n))
              t.includes(a) ||
                o.push(
                  r.a.createElement(h, {
                    name: a,
                    key: a,
                    data: n[a],
                    open: !0,
                  }),
                );
          else
            for (var i in n)
              o.push(
                r.a.createElement(h, { name: i, key: i, data: n[i], open: !0 }),
              );
          return r.a.createElement(
            "div",
            { "data-element": "groupsContainer" },
            o,
          );
        },
        w =
          (t(2059),
          function (e) {
            var n = e.title,
              t = Object(a.a)().t;
            return r.a.createElement(
              "h1",
              { "data-element": "headerTitle", className: "header-title" },
              r.a.createElement(
                "span",
                null,
                t("wv3dPropertiesPanel.propertiesHeader"),
              ),
              r.a.createElement("span", null, " "),
              r.a.createElement("span", { className: "header-value" }, n),
            );
          });
      function v(e, n, t) {
        var o = {};
        if (t)
          for (var r in e) {
            var a = n[e[r]];
            void 0 !== a && "" !== a && (o[r] = a);
          }
        else for (var i in e) o[i] = n[e[i]];
        return o;
      }
      function y(e) {
        for (var n in e) {
          var t = e[n];
          if (void 0 !== t && "" !== t) return !1;
        }
        return !0;
      }
      var b = function (e) {
          var n = e.element,
            t = e.schema,
            o = t.headerName,
            i = t.defaultValues,
            l = t.groups,
            s = t.groupOrder,
            p = t.removeEmptyRows,
            d = t.removeEmptyGroups,
            u = t.createRawValueGroup,
            m = Object(a.a)().t,
            b = v(i, n, p),
            g = (function (e, n, t, o) {
              var r = {};
              if (o)
                for (var a in e) {
                  var i = v(e[a], n, t);
                  Object.keys(i).length > 0 && (y(i) || (r[a] = i));
                }
              else for (var l in e) r[l] = v(e[l], n, t);
              return r;
            })(l, n, p, d),
            x = n[o];
          return r.a.createElement(
            "section",
            { "data-element": "propertiesElement" },
            r.a.createElement(w, { title: x }),
            r.a.createElement(c, { entities: b }),
            r.a.createElement(f, { groups: g, groupOrder: s }),
            u
              ? r.a.createElement(h, {
                  "data-element": "Group",
                  name: m("wv3dPropertiesPanel.miscValuesHeader"),
                  data: n,
                  open: !0,
                })
              : null,
          );
        },
        g = function (e) {
          var n = e.currentWidth,
            t = e.isInDesktopOnlyMode,
            o = e.isMobile,
            p = void 0 !== o && o,
            c = e.closeWv3dPropertiesPanel,
            d = e.schema,
            u = e.modelData,
            m = Object(a.a)().t,
            h =
              !t && p
                ? {}
                : { width: "".concat(n, "px"), minWidth: "".concat(n, "px") },
            f = u.map(function (e) {
              return r.a.createElement(b, {
                key: "".concat(e.handle, "-").concat(Object(s.a)()),
                element: e,
                schema: d,
              });
            });
          return (
            u.length < 1 &&
              (f = r.a.createElement(
                "div",
                { className: "no-selections" },
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(i.a, {
                    className: "empty-icon",
                    glyph: "ic-wv3d-properties-panel-menu",
                  }),
                ),
                r.a.createElement(
                  "div",
                  { className: "empty-text" },
                  m("wv3dPropertiesPanel.emptyPanelMessage"),
                ),
              )),
            r.a.createElement(
              l.a,
              {
                dataElement: "wv3dPropertiesPanel",
                className: "Panel wv3d-properties-panel",
                style: h,
              },
              !t &&
                p &&
                r.a.createElement(
                  "div",
                  { className: "close-container" },
                  r.a.createElement(
                    "div",
                    { className: "close-icon-container", onClick: c },
                    r.a.createElement(i.a, {
                      glyph: "ic_close_black_24px",
                      className: "close-icon",
                    }),
                  ),
                ),
              f,
            )
          );
        },
        x = t(6),
        E = t(4),
        A = t(3),
        k = t(61);
      function P(e, n) {
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
                s = !0,
                p = !1;
              try {
                if (((a = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    s = !0
                  );
              } catch (e) {
                ((p = !0), (r = e));
              } finally {
                try {
                  if (
                    !s &&
                    null != t.return &&
                    ((i = t.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (p) throw r;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return O(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? O(e, n)
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
      function O(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var j = function () {
        var e = P(
            Object(x.e)(function (e) {
              return [
                E.a.isElementOpen(e, "wv3dPropertiesPanel"),
                E.a.isElementDisabled(e, "wv3dPropertiesPanel"),
                E.a.getWv3dPropertiesPanelWidth(e),
                E.a.isInDesktopOnlyMode(e),
                E.a.getWv3dPropertiesPanelModelData(e),
                E.a.getWv3dPropertiesPanelSchema(e),
              ];
            }, x.c),
            6,
          ),
          n = e[0],
          t = e[1],
          a = e[2],
          i = e[3],
          l = e[4],
          s = e[5],
          p = Object(k.b)(),
          c = Object(x.d)(),
          d = P(Object(o.useState)(!1), 2),
          u = d[0],
          m = d[1];
        return (
          Object(o.useEffect)(
            function () {
              var e = setTimeout(function () {
                m(!n);
              }, 500);
              return function () {
                clearTimeout(e);
              };
            },
            [n],
          ),
          t || (!n && u)
            ? null
            : r.a.createElement(g, {
                isInDesktopOnlyMode: i,
                isMobile: p,
                currentWidth: a,
                closeWv3dPropertiesPanel: function () {
                  c(A.a.closeElement("wv3dPropertiesPanel"));
                },
                modelData: l,
                schema: s,
              })
        );
      };
      n.default = j;
    },
  },
]);
//# sourceMappingURL=chunk.45.js.map
