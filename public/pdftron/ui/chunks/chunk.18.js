(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    1874: function (e, a, o) {
      "use strict";
      var t = o(0),
        n = o.n(t),
        c = o(305),
        m = o(60),
        l = o(41);
      var r = function (e) {
          var a = Object(c.a)().t,
            o = e.moveToTop,
            t = e.moveToBottom;
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              m.a,
              {
                dataElement: "pageAdditionalControlsHeader",
                className: "type",
                "aria-label": "presentation",
              },
              a("option.thumbnailsControlOverlay.move"),
            ),
            n.a.createElement(
              m.a,
              { className: "row", dataElement: "moveToTop", onClick: o },
              n.a.createElement(l.a, {
                title: "action.movePageToTop",
                img: "icon-page-move-up",
                role: "option",
                onClick: o,
              }),
              n.a.createElement(
                "div",
                { className: "title" },
                a("action.moveToTop"),
              ),
            ),
            n.a.createElement(
              m.a,
              { className: "row", dataElement: "moveToBottom", onClick: t },
              n.a.createElement(l.a, {
                title: "action.movePageToBottom",
                img: "icon-page-move-down",
                role: "option",
                onClick: t,
              }),
              n.a.createElement(
                "div",
                { className: "title" },
                a("action.moveToBottom"),
              ),
            ),
          );
        },
        i = o(122),
        p = o(6),
        s = o(2),
        v = o.n(s),
        E = o(3),
        T = o(45),
        b = o(5),
        O = { pageIndexes: v.a.arrayOf(v.a.number), warn: v.a.bool };
      function u(e) {
        var a = Object(p.d)(),
          o = e.pageNumbers,
          t = e.warn;
        return n.a.createElement(r, {
          moveToTop: function () {
            (t ? !Object(i.k)(o, a) && Object(i.j)(o) : Object(i.j)(o),
              Object(T.k)() &&
                a(E.a.closeElement(b.a.PAGE_MANIPULATION_OVERLAY)));
          },
          moveToBottom: function () {
            (t ? !Object(i.k)(o, a) && Object(i.i)(o) : Object(i.i)(o),
              Object(T.k)() &&
                a(E.a.closeElement(b.a.PAGE_MANIPULATION_OVERLAY)));
          },
        });
      }
      u.propTypes = O;
      var d = u;
      a.a = d;
    },
  },
]);
//# sourceMappingURL=chunk.18.js.map
