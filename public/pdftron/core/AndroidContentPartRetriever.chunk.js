/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [1],
    {
      648: function (ya, va, e) {
        e.r(va);
        var na = e(0),
          pa = e(382);
        ya = e(644);
        e = e(567);
        var oa = window,
          ja = (function (ia) {
            function fa(w, z) {
              var n = ia.call(this, w, z) || this;
              n.url = w;
              n.range = z;
              n.request = new XMLHttpRequest();
              n.request.open("GET", n.url, !0);
              oa.Uint8Array && (n.request.responseType = "arraybuffer");
              n.request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
              n.status = pa.a.NOT_STARTED;
              return n;
            }
            Object(na.c)(fa, ia);
            return fa;
          })(ya.ByteRangeRequest);
        ya = (function (ia) {
          function fa(w, z, n, f) {
            w = ia.call(this, w, z, n, f) || this;
            w.dH = ja;
            return w;
          }
          Object(na.c)(fa, ia);
          fa.prototype.aE = function (w, z) {
            return ""
              .concat(w, "/bytes=")
              .concat(z.start, ",")
              .concat(z.stop ? z.stop : "");
          };
          return fa;
        })(ya["default"]);
        Object(e.a)(ya);
        Object(e.b)(ya);
        va["default"] = ya;
      },
    },
  ]);
}).call(this || window);
