(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    2124: function (e, t, a) {
      "use strict";
      a.r(t);
      (a(9),
        a(10),
        a(14),
        a(81),
        a(21),
        a(20),
        a(12),
        a(22),
        a(18),
        a(16),
        a(8),
        a(17),
        a(19),
        a(11),
        a(13),
        a(94));
      var n = a(15),
        i = a.n(n),
        o = a(82),
        l = a(41),
        r = a(459),
        c = a(1),
        s = a(0),
        u = a.n(s),
        m = a(305),
        d = a(6),
        p = a(4),
        g = a(408),
        E = a(60),
        v = a(259),
        f = a(3),
        y = a(219),
        w = a(5),
        b = a(45);
      function C(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != a) {
              var n,
                i,
                o,
                l,
                r = [],
                c = !0,
                s = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(a)).done) &&
                    (r.push(n.value), r.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((s = !0), (i = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((l = a.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return r;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return N(e, t);
              var a = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                    ? N(e, t)
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
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var T = function () {
        var e,
          t = C(Object(m.a)(), 1)[0],
          a = Object(d.f)(),
          n = C(
            Object(d.e)(function (e) {
              return [
                p.a.getTotalPages(e),
                p.a.getDisplayMode(e),
                p.a.isElementDisabled(e, w.a.VIEW_CONTROLS_OVERLAY),
                p.a.isReaderMode(e),
                p.a.isMultiViewerMode(e),
                p.a.isFullScreen(e),
                p.a.getActiveDocumentViewerKey(e),
                p.a.getIsMultiTab(e),
                p.a.getIsMultiViewerModeAvailable(e),
              ];
            }),
            9,
          ),
          s = n[0],
          N = n[1],
          T = n[2],
          h = n[3],
          k = n[4],
          M = n[5],
          A = n[6],
          O = n[7],
          L = n[8],
          V = s < 1e3,
          B = c.a.getDocumentViewer(),
          D = null == B ? void 0 : B.getDisplayModeManager();
        D && D.isVirtualDisplayEnabled() && (V = !0);
        var S,
          j,
          I = !b.f && !O && L,
          F = function (e, t) {
            var n = function () {
              var a = r.a.find(function (a) {
                return a.pageTransition === e && a.layout === t;
              });
              c.a.setDisplayMode(a.displayMode);
            };
            h
              ? (Object(v.b)(a),
                setTimeout(function () {
                  n();
                }))
              : n();
          };
        if (T) return null;
        var R = r.a.find(function (e) {
          return e.displayMode === N;
        });
        R && ((S = R.pageTransition), (j = R.layout));
        var _ =
          c.a.isFullPDFEnabled() &&
          "pdf" ===
            (null === (e = c.a.getDocument()) || void 0 === e
              ? void 0
              : e.getType());
        return u.a.createElement(
          g.a,
          {
            menu: w.a.VIEW_CONTROLS_OVERLAY,
            trigger: w.a.VIEW_CONTROLS_OVERLAY_BUTTON,
            ariaLabel: t("component.viewControls"),
          },
          V &&
            u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(
                E.a,
                {
                  dataElement: "pageTransitionHeader",
                  className: "type",
                  ariaLabel: t("option.displayMode.pageTransition"),
                },
                t("option.displayMode.pageTransition"),
              ),
              u.a.createElement(
                E.a,
                {
                  className: i()({ row: !0, active: "continuous" === S && !h }),
                  onClick: function () {
                    return F("continuous", j);
                  },
                  dataElement: "continuousPageTransitionButton",
                },
                u.a.createElement(l.a, {
                  title: "option.pageTransition.continuous",
                  img: "icon-header-page-manipulation-page-transition-continuous-page-line",
                  isActive: "continuous" === S && !h,
                  role: "option",
                }),
                u.a.createElement(
                  "div",
                  { className: "title" },
                  t("option.pageTransition.continuous"),
                ),
              ),
              u.a.createElement(
                E.a,
                {
                  className: i()({ row: !0, active: "default" === S && !h }),
                  onClick: function () {
                    return F("default", j);
                  },
                  dataElement: "defaultPageTransitionButton",
                },
                u.a.createElement(l.a, {
                  title: "option.pageTransition.default",
                  img: "icon-header-page-manipulation-page-transition-page-by-page-line",
                  isActive: "default" === S && !h,
                  role: "option",
                }),
                u.a.createElement(
                  "div",
                  { className: "title" },
                  t("option.pageTransition.default"),
                ),
              ),
              _ &&
                u.a.createElement(
                  E.a,
                  {
                    className: i()({ row: !0, active: h }),
                    onClick: function () {
                      h || Object(v.a)(a);
                    },
                    dataElement: "readerPageTransitionButton",
                  },
                  u.a.createElement(l.a, {
                    title: "option.pageTransition.reader",
                    img: "icon-header-page-manipulation-page-transition-reader",
                    isActive: h,
                    role: "option",
                  }),
                  u.a.createElement(
                    "div",
                    { className: "title" },
                    t("option.pageTransition.reader"),
                  ),
                ),
              !h &&
                u.a.createElement(E.a, {
                  dataElement: "viewControlsDivider1",
                  className: "divider",
                }),
            ),
          !h &&
            u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(
                E.a,
                {
                  dataElement: "rotateHeader",
                  className: "type",
                  ariaLabel: t("action.rotate"),
                },
                t("action.rotate"),
              ),
              u.a.createElement(
                E.a,
                {
                  className: "row",
                  onClick: function () {
                    return c.a.rotateClockwise(A);
                  },
                  dataElement: "rotateClockwiseButton",
                },
                u.a.createElement(o.a, {
                  title: "action.rotateClockwise",
                  img: "icon-header-page-manipulation-page-rotation-clockwise-line",
                  role: "option",
                }),
                u.a.createElement(
                  "div",
                  { className: "title" },
                  t("action.rotateClockwise"),
                ),
              ),
              u.a.createElement(
                E.a,
                {
                  className: "row",
                  onClick: function () {
                    return c.a.rotateCounterClockwise(A);
                  },
                  dataElement: "rotateCounterClockwiseButton",
                },
                u.a.createElement(o.a, {
                  title: "action.rotateCounterClockwise",
                  img: "icon-header-page-manipulation-page-rotation-counterclockwise-line",
                  role: "option",
                }),
                u.a.createElement(
                  "div",
                  { className: "title" },
                  t("action.rotateCounterClockwise"),
                ),
              ),
              u.a.createElement(E.a, {
                dataElement: "viewControlsDivider2",
                className: "divider",
              }),
              u.a.createElement(
                E.a,
                {
                  dataElement: "layoutHeader",
                  className: "type",
                  ariaLabel: t("option.displayMode.layout"),
                },
                t("option.displayMode.layout"),
              ),
              u.a.createElement(
                E.a,
                {
                  className: i()({ row: !0, active: "single" === j }),
                  onClick: function () {
                    return F(S, "single");
                  },
                  dataElement: "singleLayoutButton",
                },
                u.a.createElement(l.a, {
                  title: "option.layout.single",
                  img: "icon-header-page-manipulation-page-layout-single-page-line",
                  isActive: "single" === j,
                  role: "option",
                }),
                u.a.createElement(
                  "div",
                  { className: "title" },
                  t("option.layout.single"),
                ),
              ),
              u.a.createElement(
                E.a,
                {
                  className: i()({ row: !0, active: "double" === j }),
                  onClick: function () {
                    return F(S, "double");
                  },
                  dataElement: "doubleLayoutButton",
                },
                u.a.createElement(l.a, {
                  title: "option.layout.double",
                  img: "icon-header-page-manipulation-page-layout-double-page-line",
                  isActive: "double" === j,
                  role: "option",
                }),
                u.a.createElement(
                  "div",
                  { className: "title" },
                  t("option.layout.double"),
                ),
              ),
              u.a.createElement(
                E.a,
                {
                  className: i()({ row: !0, active: "cover" === j }),
                  onClick: function () {
                    return F(S, "cover");
                  },
                  dataElement: "coverLayoutButton",
                },
                u.a.createElement(l.a, {
                  title: "option.layout.cover",
                  img: "icon-header-page-manipulation-page-layout-cover-line",
                  isActive: "cover" === j,
                  role: "option",
                }),
                u.a.createElement(
                  "div",
                  { className: "title" },
                  t("option.layout.cover"),
                ),
              ),
              I &&
                u.a.createElement(
                  E.a,
                  {
                    className: i()({ row: !0, active: k }),
                    onClick: function () {
                      a.dispatch(f.a.setIsMultiViewerMode(!k));
                    },
                    dataElement: "toggleCompareModeButton",
                  },
                  u.a.createElement(l.a, {
                    title: "action.comparePages",
                    img: "icon-header-compare",
                    isActive: k,
                    role: "option",
                  }),
                  u.a.createElement(
                    "div",
                    { className: "title" },
                    t("action.sideBySideView"),
                  ),
                ),
            ),
          b.h && !b.i
            ? null
            : u.a.createElement(
                u.a.Fragment,
                null,
                u.a.createElement(E.a, {
                  dataElement: "viewControlsDivider3",
                  className: "divider",
                }),
                u.a.createElement(
                  E.a,
                  {
                    className: "row",
                    onClick: y.a,
                    dataElement: "fullScreenButton",
                  },
                  u.a.createElement(l.a, {
                    img: M
                      ? "icon-header-full-screen-exit"
                      : "icon-header-full-screen",
                    role: "option",
                  }),
                  u.a.createElement(
                    "div",
                    { className: "title" },
                    t(M ? "action.exitFullscreen" : "action.enterFullscreen"),
                  ),
                ),
              ),
        );
      };
      t.default = T;
    },
  },
]);
//# sourceMappingURL=chunk.96.js.map
