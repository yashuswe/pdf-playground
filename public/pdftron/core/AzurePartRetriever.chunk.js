/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [3],
    {
      650: function (ya, va, e) {
        e.r(va);
        var na = e(0),
          pa = e(234);
        ya = e(644);
        e = e(567);
        ya = (function (oa) {
          function ja(ia, fa, w, z) {
            return oa.call(this, ia, fa, w, z) || this;
          }
          Object(na.c)(ja, oa);
          ja.prototype.Naa = function () {
            return { start: this.B$ - pa.a, stop: this.B$ };
          };
          ja.prototype.MA = function (ia) {
            var fa = this;
            this.Nt(this.url, { start: 0, stop: 1 }, function (w, z, n) {
              if (w) return ia(w);
              w = n.request.getResponseHeader("Content-Range");
              fa.B$ = w.split("/")[1];
              oa.prototype.MA.call(fa, ia);
            });
          };
          return ja;
        })(ya["default"]);
        Object(e.a)(ya);
        Object(e.b)(ya);
        va["default"] = ya;
      },
    },
  ]);
}).call(this || window);
