(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    1650: function (n, t, o) {
      "use strict";
      var i = o(55),
        r = o(134),
        e = o(270),
        f = o(71),
        u = o(146),
        a = o(86),
        c = o(312),
        l = o(628),
        s = o(112),
        p = e && e.prototype;
      if (
        (i(
          {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
              !!e &&
              f(function () {
                p.finally.call({ then: function () {} }, function () {});
              }),
          },
          {
            finally: function (n) {
              var t = c(this, u("Promise")),
                o = a(n);
              return this.then(
                o
                  ? function (o) {
                      return l(t, n()).then(function () {
                        return o;
                      });
                    }
                  : n,
                o
                  ? function (o) {
                      return l(t, n()).then(function () {
                        throw o;
                      });
                    }
                  : n,
              );
            },
          },
        ),
        !r && a(e))
      ) {
        var h = u("Promise").prototype.finally;
        p.finally !== h && s(p, "finally", h, { unsafe: !0 });
      }
    },
  },
]);
//# sourceMappingURL=chunk.11.js.map
