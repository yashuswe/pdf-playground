/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [10],
    {
      663: function (ya, va, e) {
        e.r(va);
        var na = e(673),
          pa = e(177),
          oa = e(67),
          ja = e(99);
        ya = (function () {
          function ia() {
            this.fc = this.xg = this.Bc = this.Cd = null;
            this.Sg = !1;
          }
          ia.prototype.clear = function () {
            Object(oa.b)(this.Cd);
            this.Bc = "";
            Object(oa.b)(this.xg);
            Object(oa.b)(this.fc);
            this.Sg = !1;
          };
          ia.prototype.Sq = function () {
            this.Cd = [];
            this.xg = [];
            this.fc = [];
            this.Sg = !1;
          };
          ia.prototype.GJ = function (fa) {
            for (var w = "", z = 0, n, f, b; z < fa.length; )
              ((n = fa.charCodeAt(z)),
                9 === n
                  ? ((w += String.fromCharCode(10)), z++)
                  : 128 > n
                    ? ((w += String.fromCharCode(n)), z++)
                    : 191 < n && 224 > n
                      ? ((f = fa.charCodeAt(z + 1)),
                        (w += String.fromCharCode(((n & 31) << 6) | (f & 63))),
                        (z += 2))
                      : ((f = fa.charCodeAt(z + 1)),
                        (b = fa.charCodeAt(z + 2)),
                        (w += String.fromCharCode(
                          ((n & 15) << 12) | ((f & 63) << 6) | (b & 63),
                        )),
                        (z += 3)));
            return w;
          };
          ia.prototype.initData = function (fa) {
            this.Cd = [];
            this.xg = [];
            this.fc = [];
            this.Sg = !1;
            try {
              var w = new ja.a(fa);
              this.Bc = "";
              w.$a();
              if (!w.advance()) return;
              var z = w.current.textContent;
              this.Bc = z = this.GJ(z);
              Object(oa.b)(this.xg);
              w.advance();
              z = w.current.textContent;
              for (var n = z.split(","), f = Object(pa.a)(n); f.br(); ) {
                var b = f.current;
                try {
                  var h = parseInt(b.trim(), 10);
                  this.xg.push(h);
                } catch (x) {}
              }
              Object(oa.b)(this.Cd);
              w.advance();
              z = w.current.textContent;
              n = z.split(",");
              for (var r = Object(pa.a)(n); r.br(); ) {
                b = r.current;
                try {
                  ((h = parseFloat(b.trim())), this.Cd.push(h));
                } catch (x) {}
              }
              Object(oa.b)(this.fc);
              w.advance();
              z = w.current.textContent;
              n = z.split(",");
              fa = [];
              w = [];
              z = 0;
              for (var a = Object(pa.a)(n); a.br(); ) {
                b = a.current;
                switch (b) {
                  case "Q":
                    z = 1;
                    break;
                  case "R":
                    z = 2;
                    break;
                  case "S":
                    z = 3;
                    break;
                  default:
                    z = 0;
                }
                if (z) (fa.push(0), w.push(z));
                else
                  try {
                    ((h = parseFloat(b.trim())), fa.push(h), w.push(z));
                  } catch (x) {
                    return;
                  }
              }
              z = 0;
              var y = fa.length;
              f = a = b = n = void 0;
              for (var ba = (r = 0), ea = 0; ea < y; ) {
                var ha = w[ea];
                if (0 < ha)
                  ((z = ha),
                    ++ea,
                    3 === z && ((r = fa[ea]), (ba = fa[ea + 1]), (ea += 2)));
                else if (1 === z)
                  for (h = 0; 8 > h; ++h) this.fc.push(fa[ea++]);
                else
                  2 === z
                    ? ((n = fa[ea++]),
                      (b = fa[ea++]),
                      (a = fa[ea++]),
                      (f = fa[ea++]),
                      this.fc.push(n),
                      this.fc.push(b),
                      this.fc.push(a),
                      this.fc.push(b),
                      this.fc.push(a),
                      this.fc.push(f),
                      this.fc.push(n),
                      this.fc.push(f))
                    : 3 === z &&
                      ((n = fa[ea++]),
                      (b = r),
                      (a = fa[ea++]),
                      (f = ba),
                      this.fc.push(n),
                      this.fc.push(b),
                      this.fc.push(a),
                      this.fc.push(b),
                      this.fc.push(a),
                      this.fc.push(f),
                      this.fc.push(n),
                      this.fc.push(f));
              }
            } catch (x) {
              return;
            }
            this.Bc.length &&
              this.Bc.length === this.xg.length &&
              8 * this.Bc.length === this.fc.length &&
              (this.Sg = !0);
          };
          ia.prototype.ready = function () {
            return this.Sg;
          };
          ia.prototype.XE = function () {
            var fa = new na.a();
            if (!this.Cd.length)
              return (fa.Dm(this.Cd, -1, this.Bc, this.fc, 0), fa);
            fa.Dm(this.Cd, 1, this.Bc, this.fc, 1);
            return fa;
          };
          ia.prototype.Ah = function () {
            return this.fc;
          };
          ia.prototype.getData = function () {
            return {
              m_Struct: this.Cd,
              m_Str: this.Bc,
              m_Offsets: this.xg,
              m_Quads: this.fc,
              m_Ready: this.Sg,
            };
          };
          return ia;
        })();
        va["default"] = ya;
      },
      673: function (ya, va, e) {
        var na = e(146),
          pa = e(72),
          oa = e(685);
        ya = (function () {
          function ja() {
            this.Lg = 0;
            this.og = this.Jd = this.Ai = null;
            this.rd = 0;
            this.uk = null;
          }
          ja.prototype.Sq = function () {
            this.Lg = -1;
            this.rd = 0;
            this.uk = [];
          };
          ja.prototype.Dm = function (ia, fa, w, z, n) {
            this.Lg = fa;
            this.rd = n;
            this.uk = [];
            this.Ai = ia;
            this.Jd = w;
            this.og = z;
          };
          ja.prototype.ge = function (ia) {
            return this.Lg === ia.Lg;
          };
          ja.prototype.ow = function () {
            return Math.abs(this.Ai[this.Lg]);
          };
          ja.prototype.Rw = function () {
            return 0 < this.Ai[this.Lg];
          };
          ja.prototype.Ok = function () {
            var ia = this.Rw() ? 6 : 10,
              fa = new oa.a();
            fa.Dm(this.Ai, this.Lg + ia, this.Lg, this.Jd, this.og, 1);
            return fa;
          };
          ja.prototype.Rk = function () {
            var ia = this.Lg + parseInt(this.Ai[this.Lg + 1], 10);
            if (ia >= this.Ai.length)
              return (
                (ia = new ja()),
                ia.Dm(this.Ai, -1, this.Jd, this.og, 0),
                ia
              );
            var fa = new ja();
            fa.Dm(this.Ai, ia, this.Jd, this.og, this.rd + 1);
            return fa;
          };
          ja.prototype.getBBox = function (ia) {
            if (this.Rw())
              ((ia.x1 = this.Ai[this.Lg + 2 + 0]),
                (ia.y1 = this.Ai[this.Lg + 2 + 1]),
                (ia.x2 = this.Ai[this.Lg + 2 + 2]),
                (ia.y2 = this.Ai[this.Lg + 2 + 3]));
            else {
              for (
                var fa = 1.79769e308,
                  w = na.a.MIN,
                  z = 1.79769e308,
                  n = na.a.MIN,
                  f = 0;
                4 > f;
                ++f
              ) {
                var b = this.Ai[this.Lg + 2 + 2 * f],
                  h = this.Ai[this.Lg + 2 + 2 * f + 1];
                fa = Math.min(fa, b);
                w = Math.max(w, b);
                z = Math.min(z, h);
                n = Math.max(n, h);
              }
              ia.x1 = fa;
              ia.y1 = z;
              ia.x2 = w;
              ia.y2 = n;
            }
          };
          ja.prototype.xM = function () {
            if (this.uk.length) return this.uk[0];
            var ia = new pa.a(),
              fa = new pa.a(),
              w = new oa.a();
            w.Sq();
            var z = this.Ok(),
              n = new oa.a();
            n.Sq();
            for (var f = this.Ok(); !f.ge(w); f = f.Sk()) n = f;
            w = Array(8);
            f = Array(8);
            z.Jj(0, w);
            ia.x = (w[0] + w[2] + w[4] + w[6]) / 4;
            ia.y = (w[1] + w[3] + w[5] + w[7]) / 4;
            n.Jj(n.Eq() - 1, f);
            fa.x = (f[0] + f[2] + f[4] + f[6]) / 4;
            fa.y = (f[1] + f[3] + f[5] + f[7]) / 4;
            0.01 > Math.abs(ia.x - fa.x) &&
              0.01 > Math.abs(ia.y - fa.y) &&
              this.uk.push(0);
            ia = Math.atan2(fa.y - ia.y, fa.x - ia.x);
            ia *= 180 / 3.1415926;
            0 > ia && (ia += 360);
            this.uk.push(ia);
            return 0;
          };
          return ja;
        })();
        va.a = ya;
      },
      685: function (ya, va, e) {
        var na = e(673),
          pa = e(137),
          oa = e(146);
        ya = (function () {
          function ja() {
            this.Kp = this.nf = 0;
            this.og = this.Jd = this.Cd = null;
            this.rd = 0;
          }
          ja.prototype.Sq = function () {
            this.Kp = this.nf = -1;
            this.rd = 0;
          };
          ja.prototype.Dm = function (ia, fa, w, z, n, f) {
            this.nf = fa;
            this.Kp = w;
            this.Cd = ia;
            this.Jd = z;
            this.og = n;
            this.rd = f;
          };
          ja.prototype.ge = function (ia) {
            return this.nf === ia.nf;
          };
          ja.prototype.Eq = function () {
            return parseInt(this.Cd[this.nf], 10);
          };
          ja.prototype.Am = function () {
            return parseInt(this.Cd[this.nf + 2], 10);
          };
          ja.prototype.Nj = function () {
            return parseInt(this.Cd[this.nf + 1], 10);
          };
          ja.prototype.Rw = function () {
            return 0 < this.Cd[this.Kp];
          };
          ja.prototype.FFa = function () {
            return Math.abs(this.Cd[this.Kp]);
          };
          ja.prototype.Sk = function () {
            var ia = this.Rw(),
              fa = ia ? 5 : 11;
            if (this.nf >= this.Kp + (ia ? 6 : 10) + (this.FFa() - 1) * fa)
              return (
                (fa = new ja()),
                fa.Dm(this.Cd, -1, -1, this.Jd, this.og, 0),
                fa
              );
            ia = new ja();
            ia.Dm(
              this.Cd,
              this.nf + fa,
              this.Kp,
              this.Jd,
              this.og,
              this.rd + 1,
            );
            return ia;
          };
          ja.prototype.yEa = function (ia) {
            var fa = this.Eq();
            return 0 > ia || ia >= fa
              ? -1
              : parseInt(this.Cd[this.nf + 1], 10) + ia;
          };
          ja.prototype.Jj = function (ia, fa) {
            ia = this.yEa(ia);
            if (!(0 > ia)) {
              var w = new na.a();
              w.Dm(this.Cd, this.Kp, this.Jd, this.og, 0);
              if (w.Rw()) {
                var z = new pa.a();
                w.getBBox(z);
                w = z.y1 < z.y2 ? z.y1 : z.y2;
                z = z.y1 > z.y2 ? z.y1 : z.y2;
                ia *= 8;
                fa[0] = this.og[ia];
                fa[1] = w;
                fa[2] = this.og[ia + 2];
                fa[3] = fa[1];
                fa[4] = this.og[ia + 4];
                fa[5] = z;
                fa[6] = this.og[ia + 6];
                fa[7] = fa[5];
              } else for (ia *= 8, w = 0; 8 > w; ++w) fa[w] = this.og[ia + w];
            }
          };
          ja.prototype.Wk = function (ia) {
            var fa = new na.a();
            fa.Dm(this.Cd, this.Kp, this.Jd, this.og, 0);
            if (fa.Rw()) {
              var w = this.Cd[this.nf + 3],
                z = this.Cd[this.nf + 4];
              if (w > z) {
                var n = w;
                w = z;
                z = n;
              }
              n = new pa.a();
              fa.getBBox(n);
              fa = n.y1 < n.y2 ? n.y1 : n.y2;
              n = n.y1 > n.y2 ? n.y1 : n.y2;
              ia[0] = w;
              ia[1] = fa;
              ia[2] = z;
              ia[3] = fa;
              ia[4] = z;
              ia[5] = n;
              ia[6] = w;
              ia[7] = n;
            } else
              for (w = this.nf + 3, z = 0; 8 > z; ++z) ia[z] = this.Cd[w + z];
          };
          ja.prototype.getBBox = function (ia) {
            var fa = new na.a();
            fa.Dm(this.Cd, this.Kp, this.Jd, this.og, 0);
            if (fa.Rw()) {
              var w = this.Cd[this.nf + 3],
                z = this.Cd[this.nf + 4];
              if (w > z) {
                var n = w;
                w = z;
                z = n;
              }
              n = new pa.a();
              fa.getBBox(n);
              fa = n.y1 < n.y2 ? n.y1 : n.y2;
              n = n.y1 > n.y2 ? n.y1 : n.y2;
              ia[0] = w;
              ia[1] = fa;
              ia[2] = z;
              ia[3] = n;
            } else {
              w = 1.79769e308;
              z = oa.a.MIN;
              fa = 1.79769e308;
              n = oa.a.MIN;
              for (var f = this.nf + 3, b = 0; 4 > b; ++b) {
                var h = this.Cd[f + 2 * b],
                  r = this.Cd[f + 2 * b + 1];
                w = Math.min(w, h);
                z = Math.max(z, h);
                fa = Math.min(fa, r);
                n = Math.max(n, r);
              }
              ia[0] = w;
              ia[1] = fa;
              ia[2] = z;
              ia[3] = n;
            }
          };
          return ja;
        })();
        va.a = ya;
      },
    },
  ]);
}).call(this || window);
