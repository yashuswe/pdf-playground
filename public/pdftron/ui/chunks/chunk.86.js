(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    2077: function (e, n, a) {
      "use strict";
      a.r(n);
      (a(44), a(8));
      var t = a(0),
        r = a.n(t),
        u = a(6),
        c = a(4),
        i = a(408),
        L = a(1874),
        m = a(1845),
        o = a(5);
      n.default = function () {
        var e = Object(u.e)(function (e) {
          return c.a.getSelectedThumbnailPageIndexes(e);
        });
        return r.a.createElement(
          i.a,
          {
            menu: o.a.THUMBNAILS_CONTROL_MANIPULATE_POPUP_SMALL,
            trigger: o.a.THUMBNAILS_CONTROL_MANIPULATE_POPUP_SMALL_TRIGGER,
          },
          r.a.createElement(L.a, {
            pageNumbers: e.map(function (e) {
              return e + 1;
            }),
            warn: !0,
          }),
          r.a.createElement(m.a, {
            pageNumbers: e.map(function (e) {
              return e + 1;
            }),
            warn: !0,
          }),
        );
      };
    },
  },
]);
//# sourceMappingURL=chunk.86.js.map
