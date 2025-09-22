/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [7],
    {
      646: function (ya, va, e) {
        e.r(va);
        var na = e(0),
          pa = e(2),
          oa = e(234);
        ya = e(136);
        var ja = e(383);
        e = e(567);
        var ia = window;
        ya = (function (fa) {
          function w(z, n, f) {
            n = fa.call(this, z, n, f) || this;
            if (z.name && "xod" !== z.name.toLowerCase().split(".").pop())
              throw Error("Not an XOD file");
            if (!ia.FileReader || !ia.File || !ia.Blob)
              throw Error("File API is not supported in this browser");
            n.file = z;
            n.ZK = [];
            n.PU = 0;
            return n;
          }
          Object(na.c)(w, fa);
          w.prototype.gZ = function (z, n, f) {
            var b = this,
              h = new FileReader();
            h.onloadend = function (r) {
              if (0 < b.ZK.length) {
                var a = b.ZK.shift();
                a.PPa.readAsBinaryString(a.file);
              } else b.PU--;
              if (h.error) {
                r = h.error;
                if (r.code === r.ABORT_ERR) {
                  Object(pa.j)(
                    "Request for chunk "
                      .concat(n.start, "-")
                      .concat(n.stop, " was aborted"),
                  );
                  return;
                }
                return f(r);
              }
              if ((r = h.content || r.target.result)) return f(!1, r);
              Object(pa.j)("No data was returned from FileReader.");
            };
            n &&
              (z = (z.slice || z.webkitSlice || z.mozSlice || z.G1a).call(
                z,
                n.start,
                n.stop,
              ));
            0 === b.ZK.length && 50 > b.PU
              ? (h.readAsBinaryString(z), b.PU++)
              : b.ZK.push({ PPa: h, file: z });
            return function () {
              h.abort();
            };
          };
          w.prototype.MA = function (z) {
            var n = this;
            n.UK = !0;
            var f = oa.a;
            n.gZ(n.file, { start: -f, stop: n.file.size }, function (b, h) {
              if (b)
                return (
                  Object(pa.j)("Error loading end header: %s ".concat(b)),
                  z(b)
                );
              if (h.length !== f)
                throw Error("Zip end header data is wrong size!");
              n.bf = new ja.a(h);
              var r = n.bf.Iaa();
              n.gZ(n.file, r, function (a, y) {
                if (a)
                  return (
                    Object(pa.j)(
                      "Error loading central directory: %s ".concat(a),
                    ),
                    z(a)
                  );
                if (y.length !== r.stop - r.start)
                  throw Error("Zip central directory data is wrong size!");
                n.bf.Sga(y);
                n.lU = !0;
                n.UK = !1;
                return z(!1);
              });
            });
          };
          w.prototype.K_ = function (z, n) {
            var f = this,
              b = f.$j[z];
            if (f.bf.Q8(z)) {
              var h = f.bf.VE(z),
                r = f.gZ(f.file, h, function (a, y) {
                  delete f.$j[z];
                  if (a)
                    return (
                      Object(pa.j)(
                        'Error loading part "%s": %s, '
                          .concat(z, ", ")
                          .concat(a),
                      ),
                      n(a)
                    );
                  if (y.length !== h.stop - h.start)
                    throw Error("Part data is wrong size!");
                  n(!1, z, y, f.bf.eda(z));
                });
              b.mka = !0;
              b.cancel = r;
            } else n(Error('File not found: "'.concat(z, '"')), z);
          };
          return w;
        })(ya.a);
        Object(e.a)(ya);
        Object(e.b)(ya);
        va["default"] = ya;
      },
    },
  ]);
}).call(this || window);
