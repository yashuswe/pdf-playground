/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [14],
    {
      654: function (ya, va, e) {
        e.r(va);
        var na = e(0),
          pa = e(382);
        ya = e(644);
        var oa = e(136);
        e = e(567);
        var ja = {},
          ia = (function (fa) {
            function w(z, n) {
              var f = fa.call(this, z, n) || this;
              f.url = z;
              f.range = n;
              f.status = pa.a.NOT_STARTED;
              return f;
            }
            Object(na.c)(w, fa);
            w.prototype.start = function (z) {
              var n = this;
              "undefined" === typeof ja[this.range.start] &&
                ((ja[this.range.start] = {
                  T1: function (f) {
                    var b = atob(f),
                      h,
                      r = b.length;
                    f = new Uint8Array(r);
                    for (h = 0; h < r; ++h) f[h] = b.charCodeAt(h);
                    b = f.length;
                    h = "";
                    for (var a = 0; a < b; )
                      ((r = f.subarray(a, a + 1024)),
                        (a += 1024),
                        (h += String.fromCharCode.apply(null, r)));
                    n.T1(h, z);
                  },
                  F1a: function () {
                    n.status = pa.a.ERROR;
                    z({ code: n.status });
                  },
                }),
                window.external.notify(this.url),
                (this.status = pa.a.STARTED));
              n.RM();
            };
            return w;
          })(ya.ByteRangeRequest);
        ya = (function (fa) {
          function w(z, n, f, b) {
            z = fa.call(this, z, f, b) || this;
            z.dH = ia;
            return z;
          }
          Object(na.c)(w, fa);
          w.prototype.aE = function (z, n) {
            return ""
              .concat(z, "?")
              .concat(n.start, "&")
              .concat(n.stop ? n.stop : "");
          };
          return w;
        })(oa.a);
        Object(e.a)(ya);
        Object(e.b)(ya);
        va["default"] = ya;
      },
    },
  ]);
}).call(this || window);
