(window.webpackJsonp = window.webpackJsonp || []).push([
  [95],
  {
    2095: function (e, t, a) {
      "use strict";
      a.r(t);
      (a(9),
        a(10),
        a(14),
        a(21),
        a(20),
        a(12),
        a(44),
        a(22),
        a(18),
        a(16),
        a(8),
        a(17),
        a(19),
        a(11),
        a(13));
      var n = a(0),
        r = a.n(n),
        l = a(6),
        o =
          (a(38),
          a(34),
          a(81),
          a(50),
          a(118),
          a(26),
          a(59),
          a(56),
          a(62),
          a(3)),
        i = a(305),
        c = a(60),
        u = a(41);
      var m = function (e) {
          var t = Object(i.a)().t,
            a = e.rotateClockwise,
            n = e.rotateCounterClockwise;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              c.a,
              { dataElement: "pageRotationHeader", className: "type" },
              t("action.rotate"),
            ),
            r.a.createElement(
              c.a,
              {
                dataElement: "rotatePageClockwise",
                className: "row",
                onClick: a,
              },
              r.a.createElement(u.a, {
                title: "option.thumbnailPanel.rotatePageClockwise",
                img: "icon-header-page-manipulation-page-rotation-clockwise-line",
                role: "option",
              }),
              r.a.createElement(
                "div",
                { className: "title" },
                t("option.thumbnailPanel.rotateClockwise"),
              ),
            ),
            r.a.createElement(
              c.a,
              {
                dataElement: "rotatePageCounterClockwise",
                className: "row",
                onClick: n,
              },
              r.a.createElement(u.a, {
                title: "option.thumbnailPanel.rotatePageCounterClockwise",
                img: "icon-header-page-manipulation-page-rotation-counterclockwise-line",
                role: "option",
              }),
              r.a.createElement(
                "div",
                { className: "title" },
                t("option.thumbnailPanel.rotateCounterClockwise"),
              ),
            ),
          );
        },
        s = a(122),
        p = a(2),
        d = a.n(p),
        E = a(45),
        g = a(5),
        f = { pageNumbers: d.a.arrayOf(d.a.number), warn: d.a.bool };
      function b(e) {
        var t = Object(l.d)(),
          a = e.pageNumbers,
          n = e.warn;
        return r.a.createElement(m, {
          rotateCounterClockwise: function () {
            (n ? !Object(s.k)(a, t) && Object(s.p)(a) : Object(s.p)(a),
              Object(E.k)() &&
                t(o.a.closeElement(g.a.PAGE_MANIPULATION_OVERLAY)));
          },
          rotateClockwise: function () {
            (n ? !Object(s.k)(a, t) && Object(s.o)(a) : Object(s.o)(a),
              Object(E.k)() &&
                t(o.a.closeElement(g.a.PAGE_MANIPULATION_OVERLAY)));
          },
        });
      }
      b.propTypes = f;
      var v = b,
        O = a(1845),
        y = a(1874);
      var N = function (e) {
          var t = e.dataElement,
            a = e.pageNumbers,
            n = e.header,
            l = e.operations;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(c.a, { dataElement: t, className: "type" }, n),
            l.map(function (e) {
              return r.a.createElement(
                c.a,
                {
                  key: e.dataElement,
                  className: "row",
                  dataElement: e.dataElement,
                  onClick: function () {
                    return e.onClick(a);
                  },
                },
                (function (e) {
                  if (e.img)
                    return r.a.createElement(u.a, {
                      title: e.title,
                      img: e.img,
                      role: "option",
                    });
                })(e),
                r.a.createElement("div", { className: "title" }, e.title),
              );
            }),
          );
        },
        A = a(57),
        C = a(1);
      function h() {
        return (h = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                  ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function w(e) {
        var t = e.children,
          a = e.pageNumbers,
          n = e.pageManipulationOverlayItems,
          l = r.a.Children.toArray(t);
        return n.map(function (e, t) {
          var n = e.dataElement,
            o = e.type,
            i = l.find(function (e) {
              return e.props.dataElement === n;
            }),
            c = n || "".concat(o, "-").concat(t);
          return (
            i ||
              ("divider" === o &&
                (i = r.a.createElement("div", { className: "divider" })),
              "customPageOperation" === o &&
                (i = r.a.createElement(N, h({ key: n, pageNumbers: a }, e)))),
            i ? r.a.cloneElement(i, { key: c }) : null
          );
        });
      }
      var P = function (e) {
          var t = e.pageNumbers,
            a = e.pageManipulationOverlayItems,
            i = Object(l.d)(),
            c = Object(n.useCallback)(
              function () {
                (i(o.a.setPageManipulationOverlayAlternativePosition(null)),
                  i(o.a.closeElements([g.a.PAGE_MANIPULATION_OVERLAY])));
              },
              [i],
            ),
            u = C.a.getDocument(),
            m = null == u ? void 0 : u.type,
            s = m === A.a.XOD,
            p = m === A.a.OFFICE || m === A.a.LEGACY_OFFICE,
            d = a;
          if (s || p) {
            var E = d.reduce(function (e, t, a) {
              var n,
                r,
                l = t.dataElement;
              "pageAdditionalControls" === l &&
                (e.push(a),
                "divider" ===
                  (null === (n = d[a + 1]) || void 0 === n ? void 0 : n.type) &&
                  e.push(a + 1));
              "pageManipulationControls" === l &&
                (e.push(a),
                "divider" ===
                  (null === (r = d[a - 1]) || void 0 === r ? void 0 : r.type) &&
                  e.push(a - 1));
              return e;
            }, []);
            d = d.filter(function (e, t) {
              return !E.includes(t);
            });
          }
          return (
            Object(n.useEffect)(function () {
              return (
                C.a.addEventListener("documentLoaded", c),
                function () {
                  C.a.removeEventListener("documentLoaded", c);
                }
              );
            }, []),
            r.a.createElement(
              w,
              { pageNumbers: t, pageManipulationOverlayItems: d },
              !s &&
                !p &&
                r.a.createElement(y.a, {
                  pageNumbers: t,
                  dataElement: "pageAdditionalControls",
                }),
              r.a.createElement(v, {
                pageNumbers: t,
                dataElement: "pageRotationControls",
              }),
              !s &&
                !p &&
                r.a.createElement(O.a, {
                  pageNumbers: t,
                  dataElement: "pageManipulationControls",
                }),
            )
          );
        },
        k = a(408),
        j = a(4);
      function I(e, t) {
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
                r,
                l,
                o,
                i = [],
                c = !0,
                u = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (r = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((o = a.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return L(e, t);
              var a = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                    ? L(e, t)
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
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var M = function () {
        var e = I(
            Object(l.e)(function (e) {
              return [
                j.a.getSelectedThumbnailPageIndexes(e),
                j.a.getCurrentPage(e),
                j.a.getPageManipulationOverlayItems(e),
              ];
            }, l.c),
            3,
          ),
          t = e[0],
          a = e[1],
          n = e[2],
          o =
            t.length > 0
              ? t.map(function (e) {
                  return e + 1;
                })
              : [a],
          c = I(Object(i.a)(), 1)[0];
        return r.a.createElement(
          k.a,
          {
            menu: g.a.PAGE_MANIPULATION_OVERLAY,
            trigger: g.a.PAGE_MANIPULATION_OVERLAY_BUTTON,
            ariaLabel: c("option.thumbnailPanel.moreOptionsMenu"),
          },
          r.a.createElement(
            "span",
            { className: "visually-hidden" },
            r.a.createElement(
              "p",
              { "aria-live": "assertive", role: "alert" },
              " ",
              c("option.thumbnailPanel.moreOptionsMenu"),
            ),
          ),
          r.a.createElement(P, {
            pageNumbers: o,
            pageManipulationOverlayItems: n,
          }),
        );
      };
      t.default = M;
    },
  },
]);
//# sourceMappingURL=chunk.95.js.map
