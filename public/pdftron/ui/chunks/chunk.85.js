(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
  {
    2076: function (e, n, a) {
      "use strict";
      a.r(n);
      (a(44), a(8));
      var t = a(0),
        r = a.n(t),
        u = a(6),
        c = a(4),
        i = a(408),
        P = a(5),
        o = a(1845);
      n.default = function () {
        var e = Object(u.e)(function (e) {
          return c.a.getSelectedThumbnailPageIndexes(e);
        });
        return r.a.createElement(
          i.a,
          {
            menu: P.a.THUMBNAILS_CONTROL_MANIPULATE_POPUP,
            trigger: P.a.THUMBNAILS_CONTROL_MANIPULATE_POPUP_TRIGGER,
          },
          r.a.createElement(o.a, {
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
//# sourceMappingURL=chunk.85.js.map
