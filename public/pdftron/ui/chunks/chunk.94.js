(window.webpackJsonp = window.webpackJsonp || []).push([
  [94],
  {
    2085: function (n, t, a) {
      "use strict";
      a.r(t);
      (a(26), a(59));
      var e = a(0),
        r = a.n(e),
        i = a(598),
        l = a(4),
        s = a(2),
        o = a.n(s);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var e in a)
                  ({}).hasOwnProperty.call(a, e) && (n[e] = a[e]);
              }
              return n;
            }).apply(null, arguments);
      }
      var g = {
          isFlyoutItem: o.a.bool,
          alignment: o.a.string,
          dataElement: o.a.string,
          style: o.a.object,
          className: o.a.string,
          alignmentValue: o.a.string,
          img: o.a.string,
          title: o.a.string,
        },
        u = function (n, t) {
          return r.a.createElement(
            i.a,
            c({}, n, {
              ref: t,
              selector: l.a.getActiveCellRangeVerticalAlignment,
            }),
          );
        };
      ((t.default = r.a.forwardRef(u)),
        (u.displayName = "VerticalAlignmentButton"),
        (u.propTypes = g));
    },
  },
]);
//# sourceMappingURL=chunk.94.js.map
