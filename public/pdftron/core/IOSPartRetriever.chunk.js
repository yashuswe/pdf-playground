/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [6],
    {
      652: function (ya, va, e) {
        e.r(va);
        var na = e(0),
          pa = e(382);
        ya = e(644);
        e(37);
        e = e(567);
        var oa = (function (ja) {
          function ia(fa, w) {
            var z = ja.call(this, fa, w) || this;
            z.url = fa;
            z.range = w;
            z.status = pa.a.NOT_STARTED;
            return z;
          }
          Object(na.c)(ia, ja);
          ia.prototype.start = function () {
            var fa = document.createElement("IFRAME");
            fa.setAttribute("src", this.url);
            document.documentElement.appendChild(fa);
            fa.parentNode.removeChild(fa);
            this.status = pa.a.STARTED;
            this.RM();
          };
          return ia;
        })(ya.ByteRangeRequest);
        ya = (function (ja) {
          function ia(fa, w, z, n) {
            fa = ja.call(this, fa, w, z, n) || this;
            fa.dH = oa;
            return fa;
          }
          Object(na.c)(ia, ja);
          ia.prototype.aE = function (fa, w) {
            return ""
              .concat(fa, "#")
              .concat(w.start, "&")
              .concat(w.stop ? w.stop : "");
          };
          return ia;
        })(ya["default"]);
        Object(e.a)(ya);
        Object(e.b)(ya);
        va["default"] = ya;
      },
    },
  ]);
}).call(this || window);
