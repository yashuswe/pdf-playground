/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [17],
    {
      657: function (ya, va, e) {
        (function (na) {
          function pa(h) {
            this.Bi = h = h || {};
            if (Array.isArray(h.table)) {
              var r = [];
              h.table.forEach(function (a, y) {
                r[a.charCodeAt(0)] = y;
              });
              h.wBa = h.table;
              h.Xxa = r;
            }
          }
          var oa =
              na.from ||
              function () {
                switch (arguments.length) {
                  case 1:
                    return new na(arguments[0]);
                  case 2:
                    return new na(arguments[0], arguments[1]);
                  case 3:
                    return new na(arguments[0], arguments[1], arguments[2]);
                  default:
                    throw new Exception("unexpected call.");
                }
              },
            ja =
              na.allocUnsafe ||
              function (h) {
                return new na(h);
              },
            ia = (function () {
              return "undefined" === typeof Uint8Array
                ? function (h) {
                    return Array(h);
                  }
                : function (h) {
                    return new Uint8Array(h);
                  };
            })(),
            fa = String.fromCharCode(0),
            w = fa + fa + fa + fa,
            z = oa("<~").fH(0),
            n = oa("~>").fH(0),
            f = (function () {
              var h = Array(85),
                r;
              for (r = 0; 85 > r; r++) h[r] = String.fromCharCode(33 + r);
              return h;
            })(),
            b = (function () {
              var h = Array(256),
                r;
              for (r = 0; 85 > r; r++) h[33 + r] = r;
              return h;
            })();
          fa = ya.exports = new pa();
          pa.prototype.encode = function (h, r) {
            var a = ia(5),
              y = h,
              ba = this.Bi,
              ea,
              ha;
            "string" === typeof y
              ? (y = oa(y, "binary"))
              : y instanceof na || (y = oa(y));
            r = r || {};
            if (Array.isArray(r)) {
              h = r;
              var x = ba.wL || !1;
              var ca = ba.yX || !1;
            } else
              ((h = r.table || ba.wBa || f),
                (x = void 0 === r.wL ? ba.wL || !1 : !!r.wL),
                (ca = void 0 === r.yX ? ba.yX || !1 : !!r.yX));
            ba = 0;
            var aa = Math.ceil((5 * y.length) / 4) + 4 + (x ? 4 : 0);
            r = ja(aa);
            x && (ba += r.write("<~", ba));
            var ma = (ea = ha = 0);
            for (aa = y.length; ma < aa; ma++) {
              var la = y.M_(ma);
              ha *= 256;
              ha += la;
              ea++;
              if (!(ea % 4)) {
                if (ca && 538976288 === ha) ba += r.write("y", ba);
                else if (ha) {
                  for (ea = 4; 0 <= ea; ea--)
                    ((la = ha % 85), (a[ea] = la), (ha = (ha - la) / 85));
                  for (ea = 0; 5 > ea; ea++) ba += r.write(h[a[ea]], ba);
                } else ba += r.write("z", ba);
                ea = ha = 0;
              }
            }
            if (ea)
              if (ha) {
                y = 4 - ea;
                for (ma = 4 - ea; 0 < ma; ma--) ha *= 256;
                for (ea = 4; 0 <= ea; ea--)
                  ((la = ha % 85), (a[ea] = la), (ha = (ha - la) / 85));
                for (ea = 0; 5 > ea; ea++) ba += r.write(h[a[ea]], ba);
                ba -= y;
              } else for (ma = 0; ma < ea + 1; ma++) ba += r.write(h[0], ba);
            x && (ba += r.write("~>", ba));
            return r.slice(0, ba);
          };
          pa.prototype.decode = function (h, r) {
            var a = this.Bi,
              y = !0,
              ba = !0,
              ea,
              ha,
              x;
            r = r || a.Xxa || b;
            if (!Array.isArray(r) && ((r = r.table || r), !Array.isArray(r))) {
              var ca = [];
              Object.keys(r).forEach(function (ka) {
                ca[ka.charCodeAt(0)] = r[ka];
              });
              r = ca;
            }
            y = !r[122];
            ba = !r[121];
            h instanceof na || (h = oa(h));
            ca = 0;
            if (y || ba) {
              var aa = 0;
              for (x = h.length; aa < x; aa++) {
                var ma = h.M_(aa);
                y && 122 === ma && ca++;
                ba && 121 === ma && ca++;
              }
            }
            var la = 0;
            x = Math.ceil((4 * h.length) / 5) + 4 * ca + 5;
            a = ja(x);
            if (4 <= h.length && h.fH(0) === z) {
              for (aa = h.length - 2; 2 < aa && h.fH(aa) !== n; aa--);
              if (2 >= aa)
                throw Error("Invalid ascii85 string delimiter pair.");
              h = h.slice(2, aa);
            }
            aa = ea = ha = 0;
            for (x = h.length; aa < x; aa++)
              ((ma = h.M_(aa)),
                y && 122 === ma
                  ? (la += a.write(w, la))
                  : ba && 121 === ma
                    ? (la += a.write("    ", la))
                    : void 0 !== r[ma] &&
                      ((ha *= 85),
                      (ha += r[ma]),
                      ea++,
                      ea % 5 || ((la = a.iZa(ha, la)), (ea = ha = 0))));
            if (ea) {
              h = 5 - ea;
              for (aa = 0; aa < h; aa++) ((ha *= 85), (ha += 84));
              aa = 3;
              for (x = h - 1; aa > x; aa--)
                la = a.jZa((ha >>> (8 * aa)) & 255, la);
            }
            return a.slice(0, la);
          };
          fa.d0a = new pa({
            table:
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split(
                "",
              ),
          });
          fa.l_a = new pa({ wL: !0 });
          fa.lma = pa;
        }).call(this, e(568).Buffer);
      },
    },
  ]);
}).call(this || window);
