(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    2126: function (e, t, r) {
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
        o = r.n(n),
        a = r(3),
        i = r(4),
        c = r(78),
        u = r(6),
        l = r(305),
        f = r(408),
        s = r(462),
        m = r(5);
      function O(e, t) {
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
                o,
                a,
                i,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((a = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = a.call(r)).done) &&
                    (c.push(n.value), c.length !== t);
                    u = !0
                  );
              } catch (e) {
                ((l = !0), (o = e));
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((i = r.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return b(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? b(e, t)
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
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var d = function () {
        var e = Object(u.d)(),
          t = O(Object(l.a)(), 1)[0],
          r = O(
            Object(u.e)(function (e) {
              return [i.a.getActiveDocumentViewerKey(e)];
            }),
            1,
          )[0];
        return o.a.createElement(
          f.a,
          {
            menu: m.a.ZOOM_OVERLAY,
            trigger: m.a.ZOOM_OVERLAY_BUTTON,
            ariaLabel: t("component.zoomOverlay"),
          },
          o.a.createElement(s.a, {
            zoomList: Object(u.e)(i.a.getZoomList),
            currentZoomLevel: Object(u.e)(i.a.getZoom),
            isReaderMode: Object(u.e)(i.a.isReaderMode),
            isMarqueeZoomActive:
              "MarqueeZoomTool" === Object(u.e)(i.a.getActiveToolName),
            isMarqueeToolButtonDisabled: Object(u.e)(function (e) {
              return i.a.isElementDisabled(e, "marqueeToolButton");
            }),
            fitToWidth: function () {
              return Object(c.b)(r);
            },
            fitToPage: function () {
              return Object(c.a)(r);
            },
            onClickZoomLevelOption: function (t) {
              (Object(c.f)(t), e(a.a.closeElements([m.a.ZOOM_OVERLAY])));
            },
            onClickMarqueeZoom: function () {
              e(a.a.closeElements([m.a.ZOOM_OVERLAY]));
            },
          }),
        );
      };
      t.default = d;
    },
  },
]);
//# sourceMappingURL=chunk.97.js.map
