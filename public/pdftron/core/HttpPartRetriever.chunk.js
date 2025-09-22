/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [0],
    {
      644: function (ya, va, e) {
        e.r(va);
        e.d(va, "ByteRangeRequest", function () {
          return y;
        });
        var na = e(0),
          pa = e(1);
        e.n(pa);
        var oa = e(2),
          ja = e(234);
        ya = e(136);
        var ia = e(383),
          fa = e(113),
          w = e(107),
          z = e(382),
          n = e(261);
        e = e(567);
        var f = [],
          b = [],
          h = window,
          r = (function () {
            return function () {
              this.ur = 1;
            };
          })(),
          a;
        (function (ea) {
          ea[(ea.UNSENT = 0)] = "UNSENT";
          ea[(ea.DONE = 4)] = "DONE";
        })(a || (a = {}));
        var y = (function () {
            function ea(ha, x, ca, aa) {
              var ma = this;
              this.url = ha;
              this.range = x;
              this.Vf = ca;
              this.withCredentials = aa;
              this.ypa = a;
              this.request = new XMLHttpRequest();
              this.request.open("GET", this.url, !0);
              h.Uint8Array && (this.request.responseType = "arraybuffer");
              aa && (this.request.withCredentials = aa);
              ba.DISABLE_RANGE_HEADER ||
                (Object(pa.isUndefined)(x.stop)
                  ? this.request.setRequestHeader(
                      "Range",
                      "bytes=".concat(x.start),
                    )
                  : this.request.setRequestHeader(
                      "Range",
                      ["bytes=", x.start, "-", x.stop - 1].join(""),
                    ));
              ca &&
                Object.keys(ca).forEach(function (la) {
                  ma.request.setRequestHeader(la, ca[la]);
                });
              this.request.overrideMimeType
                ? this.request.overrideMimeType(
                    "text/plain; charset=x-user-defined",
                  )
                : this.request.setRequestHeader(
                    "Accept-Charset",
                    "x-user-defined",
                  );
              this.status = z.a.NOT_STARTED;
            }
            ea.prototype.start = function (ha) {
              var x = this,
                ca = this.request;
              ca.onreadystatechange = function () {
                if (x.aborted)
                  return ((x.status = z.a.ABORTED), ha({ code: z.a.ABORTED }));
                if (this.readyState === x.ypa.DONE) {
                  x.RM();
                  var aa = 0 === window.document.URL.indexOf("file:///");
                  200 === ca.status ||
                  206 === ca.status ||
                  (aa && 0 === ca.status)
                    ? ((aa = h.yba(this)), x.T1(aa, ha))
                    : ((x.status = z.a.ERROR),
                      ha({ code: x.status, status: x.status }));
                }
              };
              this.request.send(null);
              this.status = z.a.STARTED;
            };
            ea.prototype.T1 = function (ha, x) {
              this.status = z.a.SUCCESS;
              if (x) return x(!1, ha);
            };
            ea.prototype.abort = function () {
              this.RM();
              this.aborted = !0;
              this.request.abort();
            };
            ea.prototype.RM = function () {
              var ha = Object(n.c)(this.url, this.range, b);
              -1 !== ha && b.splice(ha, 1);
              if (0 < f.length) {
                ha = f.shift();
                var x = new ea(ha.url, ha.range, this.Vf, this.withCredentials);
                ha.request = x;
                b.push(ha);
                x.start(Object(n.d)(ha));
              }
            };
            ea.prototype.extend = function (ha) {
              var x = Object.assign({}, this, ha.prototype);
              x.constructor = ha;
              return x;
            };
            return ea;
          })(),
          ba = (function (ea) {
            function ha(x, ca, aa, ma, la) {
              aa = ea.call(this, x, aa, ma) || this;
              aa.Zm = {};
              aa.LK = ca;
              aa.url = x;
              aa.DISABLE_RANGE_HEADER = !1;
              aa.dH = y;
              aa.G3 = 3;
              aa.Vf = la || {};
              return aa;
            }
            Object(na.c)(ha, ea);
            ha.prototype.aE = function (x, ca, aa) {
              var ma = -1 === x.indexOf("?") ? "?" : "&";
              switch (aa) {
                case !1:
                case w.a.NEVER_CACHE:
                  x = "".concat(x + ma, "_=").concat(Object(pa.uniqueId)());
                  break;
                case !0:
                case w.a.CACHE:
                  x = ""
                    .concat(x + ma, "_=")
                    .concat(ca.start, ",")
                    .concat(Object(pa.isUndefined)(ca.stop) ? "" : ca.stop);
              }
              return x;
            };
            ha.prototype.l9 = function (x, ca, aa, ma) {
              void 0 === aa && (aa = {});
              return new this.dH(x, ca, aa, ma);
            };
            ha.prototype.BBa = function (x, ca, aa, ma, la) {
              for (var ka = 0; ka < f.length; ka++)
                if (
                  Object(pa.isEqual)(f[ka].range, ca) &&
                  Object(pa.isEqual)(f[ka].url, x)
                )
                  return (f[ka].Bj.push(ma), f[ka].zO++, null);
              for (ka = 0; ka < b.length; ka++)
                if (
                  Object(pa.isEqual)(b[ka].range, ca) &&
                  Object(pa.isEqual)(b[ka].url, x)
                )
                  return (b[ka].Bj.push(ma), b[ka].zO++, null);
              aa = { url: x, range: ca, LK: aa, Bj: [ma], zO: 1 };
              if (0 === f.length && b.length < this.G3)
                return (
                  b.push(aa),
                  (aa.request = this.l9(x, ca, la, this.withCredentials)),
                  aa
                );
              f.push(aa);
              return null;
            };
            ha.prototype.Nt = function (x, ca, aa) {
              var ma = this.aE(x, ca, this.LK);
              (x = this.BBa(ma, ca, this.LK, aa, this.Vf)) &&
                x.request.start(Object(n.d)(x));
              return function () {
                var la = Object(n.c)(ma, ca, b);
                if (-1 !== la) {
                  var ka = --b[la].zO;
                  0 === ka && b[la].request && b[la].request.abort();
                } else
                  ((la = Object(n.c)(ma, ca, f)),
                    -1 !== la &&
                      ((ka = --f[la].zO), 0 === ka && f.splice(la, 1)));
              };
            };
            ha.prototype.Naa = function () {
              return { start: -ja.a };
            };
            ha.prototype.vHa = function () {
              var x = -(ja.a + ja.e);
              return { start: x - ja.d, end: x };
            };
            ha.prototype.MA = function (x) {
              var ca = this;
              this.UK = !0;
              var aa = ja.a;
              this.Nt(this.url, this.Naa(), function (ma, la, ka) {
                function ra() {
                  var qa = ca.bf.Iaa();
                  ca.Nt(ca.url, qa, function (sa, ua) {
                    if (sa)
                      return (
                        Object(oa.j)(
                          "Error loading central directory: ".concat(sa),
                        ),
                        x(sa)
                      );
                    ua = Object(fa.a)(ua);
                    if (ua.length !== qa.stop - qa.start)
                      return x(
                        "Invalid XOD file: Zip central directory data is wrong size! Should be "
                          .concat(qa.stop - qa.start, " but is ")
                          .concat(ua.length),
                      );
                    ca.bf.Sga(ua);
                    ca.lU = !0;
                    ca.UK = !1;
                    return x(!1);
                  });
                }
                if (ma)
                  return (
                    Object(oa.j)("Error loading end header: ".concat(ma)),
                    x(ma, la, ka)
                  );
                la = Object(fa.a)(la);
                if (la.length !== aa)
                  return x(
                    "Invalid XOD file: Zip end header data is wrong size!",
                  );
                try {
                  ca.bf = new ia.a(la);
                } catch (qa) {
                  return x(qa);
                }
                ca.bf.UKa
                  ? ca.Nt(ca.url, ca.vHa(), function (qa, sa) {
                      if (qa)
                        return (
                          Object(oa.j)(
                            "Error loading zip64 header: ".concat(qa),
                          ),
                          x(qa)
                        );
                      sa = Object(fa.a)(sa);
                      ca.bf.CLa(sa);
                      ra();
                    })
                  : ra();
              });
            };
            ha.prototype.sba = function (x) {
              x(Object.keys(this.bf.dt));
            };
            ha.prototype.K_ = function (x, ca) {
              var aa = this;
              if (this.bf.Q8(x)) {
                var ma = this.bf.UE(x);
                if (ma in this.Zm) {
                  var la = this.$j[x];
                  la.hz = this.Zm[ma];
                  la.hz.ur++;
                  la.cancel = la.hz.cancel;
                } else {
                  var ka = this.bf.nEa(x),
                    ra = this.Nt(this.url, ka, function (sa, ua) {
                      sa
                        ? (Object(oa.j)(
                            'Error loading part "'.concat(x, '": ').concat(sa),
                          ),
                          aa.Nt(aa.url, ka, function (wa, Aa) {
                            if (wa) return ca(wa, x);
                            aa.Wga(Aa, ka, ma, x, ca);
                          }))
                        : aa.Wga(ua, ka, ma, x, ca);
                    }),
                    qa = this.$j[x];
                  qa &&
                    ((qa.mka = !0),
                    (qa.cancel = function () {
                      qa.hz.ur--;
                      0 === qa.hz.ur && (ra(), delete aa.Zm[ma]);
                    }),
                    (this.Zm[ma] = new r(ma)),
                    (qa.hz = this.Zm[ma]),
                    (qa.hz.cancel = qa.cancel));
                }
              } else
                (delete this.$j[x],
                  ca(Error('File not found: "'.concat(x, '"')), x));
            };
            ha.prototype.Wga = function (x, ca, aa, ma, la) {
              if (x.length !== ca.stop - ca.start)
                la(Error("Part data is wrong size!"), ma);
              else {
                do {
                  if (!this.Zm[aa]) return;
                  ma = this.Zm[aa].ur;
                  for (var ka = ca.qx.length, ra = 0; ra < ka; ++ra) {
                    var qa = ca.qx[ra];
                    la(
                      !1,
                      qa.mx,
                      x["string" === typeof x ? "substring" : "subarray"](
                        qa.start,
                        qa.stop,
                      ),
                      this.bf.eda(qa.mx),
                    );
                    qa.mx in this.$j && delete this.$j[qa.mx];
                  }
                } while (ma !== this.Zm[aa].ur);
                delete this.Zm[aa];
              }
            };
            ha.DISABLE_RANGE_HEADER = !1;
            ha.G3 = 3;
            return ha;
          })(ya.a);
        (function (ea) {
          function ha(x, ca, aa) {
            var ma = ea.call(this) || this,
              la;
            for (la in x) ma[la] = x[la];
            ma.J2a = x;
            ma.startOffset = ca;
            ma.endOffset = aa;
            ma.l9 = function (ka, ra, qa, sa) {
              Object(pa.isUndefined)(ra.stop)
                ? ((ra.start += ma.endOffset), (ra.stop = ma.endOffset))
                : ((ra.start += ma.startOffset), (ra.stop += ma.startOffset));
              ka = ma.aE(ma.url, ra, ma.LK);
              return new x.dH(ka, ra, qa, sa);
            };
            return ma;
          }
          Object(na.c)(ha, ea);
          return ha;
        })(ba);
        Object(e.a)(ba);
        Object(e.b)(ba);
        va["default"] = ba;
      },
    },
  ]);
}).call(this || window);
