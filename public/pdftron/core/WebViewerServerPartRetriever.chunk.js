/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [13],
    {
      655: function (ya, va, e) {
        function na() {
          return !1;
        }
        function pa(ba, ea, ha) {
          if (!(ea in y)) return !0;
          ea = y[ea];
          for (var x = 0; x < ea.length; x++) {
            var ca = ba;
            var aa = ea[x];
            var ma = ha;
            if (aa.name in ca) {
              var la = "",
                ka = !1;
              ca = ca[aa.name];
              switch (aa.type) {
                case "s":
                  la = "String";
                  ka = Object(ia.isString)(ca);
                  break;
                case "a":
                  la = "Array";
                  ka = Object(ia.isArray)(ca);
                  break;
                case "n":
                  la = "Number";
                  ka = Object(ia.isNumber)(ca) && Object(ia.isFinite)(ca);
                  break;
                case "o":
                  ((la = "Object"),
                    (ka = Object(ia.isObject)(ca) && !Object(ia.isArray)(ca)));
              }
              ka ||
                ma.reject(
                  'Expected response field "'
                    .concat(aa.name, '" to have type ')
                    .concat(la),
                );
              aa = ka;
            } else
              (ma.reject('Response missing field "'.concat(aa.name, '"')),
                (aa = !1));
            if (!aa) return !1;
          }
          return !0;
        }
        function oa(ba) {
          for (
            var ea = 0,
              ha = [
                "locale",
                "excelMaxAllowedCellCount",
                "applyPageBreaksToSheet",
                "excelDefaultCellBorderWidth",
                "displayChangeTracking",
              ];
            ea < ha.length;
            ea++
          ) {
            var x = ha[ea],
              ca = x;
            x = x.charAt(0).toUpperCase() + x.slice(1);
            ba[ca] &&
              (Object.defineProperty(
                ba,
                x,
                Object.getOwnPropertyDescriptor(ba, ca),
              ),
              delete ba[ca]);
          }
          return ba;
        }
        e.r(va);
        var ja = e(0),
          ia = e(1);
        e.n(ia);
        var fa = e(2);
        ya = e(52);
        var w = e(37),
          z = e(674),
          n = e(136),
          f = e(567),
          b = e(54),
          h = e(261),
          r = (function () {
            function ba() {
              this.request = this.result = null;
              this.state = 0;
              var ea = this;
              ea.promise = new Promise(function (ha, x) {
                ea.resolve = function () {
                  if (0 === ea.state || 4 === ea.state)
                    ((ea.state = 1),
                      (ea.result = arguments[0]),
                      ha.apply(null, arguments));
                };
                ea.reject = function () {
                  if (0 === ea.state || 4 === ea.state)
                    ((ea.state = 2), x.apply(null, arguments));
                };
              });
            }
            ba.prototype.Qo = function () {
              return 1 === (this.state & 1);
            };
            ba.prototype.uKa = function () {
              return 2 === (this.state & 2);
            };
            ba.prototype.Km = function () {
              return !this.uKa() && !this.Qo();
            };
            ba.prototype.KJa = function () {
              return 4 === (this.state & 4);
            };
            ba.prototype.$0 = function () {
              this.state |= 4;
            };
            return ba;
          })(),
          a = (function () {
            function ba() {
              this.rA = {};
              this.Nc = [];
            }
            ba.prototype.pop = function () {
              var ea = this.Nc.pop();
              this.rA[ea.key] = void 0;
              return ea;
            };
            ba.prototype.push = function (ea, ha) {
              ha = { key: ea, data: ha };
              this.Nc.push(ha);
              this.rA[ea] = ha.data;
            };
            ba.prototype.contains = function (ea) {
              return !!this.rA[ea];
            };
            ba.prototype.get = function (ea) {
              return this.rA[ea];
            };
            ba.prototype.set = function (ea, ha) {
              var x = this;
              this.rA[ea] = ha;
              this.Nc.forEach(function (ca, aa) {
                ca.key === ea && (x.Nc[aa] = ca);
              });
            };
            ba.prototype.remove = function (ea) {
              var ha = this;
              this.rA[ea] = void 0;
              this.Nc.forEach(function (x, ca) {
                x.key === ea && ha.Nc.splice(ca, 1);
              });
            };
            ba.prototype.length = function () {
              return this.Nc.length;
            };
            return ba;
          })(),
          y = {
            pages: [{ name: "pages", type: "a" }],
            pdf: [{ name: "url", type: "s" }],
            docmod: [
              { name: "url", type: "s" },
              { name: "rID", type: "s" },
            ],
            health: [],
            tiles: [
              { name: "z", type: "n" },
              { name: "rID", type: "n" },
              { name: "tiles", type: "a" },
              { name: "size", type: "n" },
            ],
            cAnnots: [{ name: "annots", type: "a" }],
            annots: [
              { name: "url", type: "s" },
              { name: "name", type: "s" },
            ],
            image: [
              { name: "url", type: "s" },
              { name: "name", type: "s" },
              { name: "p", type: "n" },
            ],
            text: [
              { name: "url", type: "s" },
              { name: "name", type: "s" },
              { name: "p", type: "n" },
            ],
            ApString2Xod: [
              { name: "url", type: "s" },
              { name: "rID", type: "s" },
            ],
          };
        e = (function () {
          function ba(ea, ha, x) {
            var ca = this;
            this.K1 = this.P9 = !1;
            this.Zj =
              this.VQ =
              this.jC =
              this.Bg =
              this.JD =
              this.Rt =
              this.ID =
              this.Pr =
                null;
            this.jr = new r();
            this.zv = new r();
            this.iL = !1;
            this.Vh = this.Gg = this.Hg = this.Ih = null;
            this.ui = [];
            this.gM = [];
            this.cache = {};
            this.timeStamp = 0;
            this.Tj = [];
            this.Uj = [];
            this.NV = null;
            this.A9 = !1;
            this.xia = this.id = null;
            this.dZ = this.Dca = na;
            this.ni = 0;
            this.DX = !1;
            this.Xea = 1;
            this.Qm = {};
            this.Sy = 0;
            this.rB = new a();
            ha.endsWith("/") || (ha += "/");
            x = x || {};
            this.P9 = x.disableWebsockets || !1;
            this.K1 = x.singleServerMode || !1;
            null != x.customQueryParameters &&
              Object(b.b)("wvsQueryParameters", x.customQueryParameters);
            ha.endsWith("blackbox/") || (ha += "blackbox/");
            this.Pr = x.uploadData || null;
            this.jC = x.uriData || null;
            this.ID = x.cacheKey || null;
            if ((this.Rt = x.officeOptions || null)) this.Rt = oa(this.Rt);
            this.Bg = x.rasterizerOptions || null;
            this.JD = x.cadOptions || null;
            this.$g = ha;
            this.mV = ea;
            this.ju(!0);
            this.oz = new z.a(ha, null, this.al()).RCa(
              !this.P9,
              function (aa) {
                ca.eNa(aa);
              },
              function () {
                return null;
              },
              function () {
                ca.iL = !1;
              },
              function () {
                ca.KRa();
              },
            );
          }
          ba.prototype.rya = function () {
            var ea = this;
            return new Promise(function (ha, x) {
              var ca = new XMLHttpRequest(),
                aa = "".concat(ea.$g, "ck");
              ca.open("GET", aa);
              ca.withCredentials = ea.al();
              ca.onreadystatechange = function () {
                ca.readyState === XMLHttpRequest.DONE &&
                  (200 === ca.status ? ha() : x());
              };
              ca.send();
            });
          };
          ba.prototype.dUa = function (ea) {
            this.Dca = ea || na;
            this.dZ = na;
          };
          ba.prototype.Uva = function () {
            this.Pha();
            return this.oz.Wv();
          };
          ba.prototype.Pha = function () {
            Object(ja.b)(this, void 0, void 0, function () {
              return Object(ja.d)(this, function (ea) {
                switch (ea.label) {
                  case 0:
                    return (
                      (this.zv = new r()),
                      (this.jr = new r()),
                      (this.iL = !1),
                      (this.id = null),
                      (this.A9 = !1),
                      [4, this.rya().catch(function () {})]
                    );
                  case 1:
                    return (ea.aa(), [2]);
                }
              });
            });
          };
          ba.prototype.KRa = function () {
            this.Dca();
            this.Pha();
            this.Ih &&
              (this.Ih.Km()
                ? this.dk(this.Ih.request)
                : this.Ih.Qo() &&
                  this.dZ(this.Ih.result.url, "pdf") &&
                  ((this.Ih = null), this.Mha()));
            this.Vh && this.Vh.Km() && this.dk(this.Vh.request);
            this.Hg && this.Hg.Km()
              ? this.dk(this.Hg.request)
              : this.Gg && this.Gg.Km() && this.eca();
            var ea;
            for (ea = 0; ea < this.Tj.length; ea++)
              this.Tj[ea] &&
                (this.Tj[ea].Km()
                  ? this.dk(this.Tj[ea].request)
                  : this.Tj[ea].Qo() &&
                    this.dZ(this.Tj[ea].result.url, "image") &&
                    ((this.Tj[ea] = null), this.yP(Object(ia.uniqueId)(), ea)));
            for (ea = 0; ea < this.Uj.length; ea++)
              this.Uj[ea] &&
                this.Uj[ea].Km() &&
                !this.Uj[ea].KJa() &&
                this.dk(this.Uj[ea].request);
            for (ea = 0; ea < this.ui.length; ea++)
              this.ui[ea] && this.ui[ea].Km() && this.dk(this.ui[ea].request);
          };
          ba.prototype.MIa = function () {
            return this.iL
              ? Promise.resolve()
              : ((this.iL = !0), (this.timeStamp = Date.now()), this.oz.FN());
          };
          ba.prototype.GYa = function () {
            var ea = this,
              ha,
              x,
              ca,
              aa,
              ma;
            return new Promise(function (la, ka) {
              if (ea.Pr)
                ((ha = new FormData()),
                  ha.append("file", ea.Pr.fileHandle, ea.Pr.fileHandle.name),
                  ea.Rt && ha.append("officeOptions", JSON.stringify(ea.Rt)),
                  ea.Bg &&
                    ha.append("rasterizerOptions", JSON.stringify(ea.Bg)),
                  ea.JD && ha.append("cadOptions", ea.JD.getJsonString()),
                  ea.ID && ha.append("cacheKey", ea.ID),
                  (x = ea.Pr.loadCallback),
                  (aa = "upload"),
                  (ca = ea.Pr.extension));
              else if (ea.jC)
                ((ha = { uri: ea.jC.uri, j3a: ea.jC.shareId }),
                  (ha = Object.keys(ha)
                    .map(function (sa) {
                      return ""
                        .concat(sa, "=")
                        .concat(ha[sa] ? encodeURIComponent(ha[sa]) : "");
                    })
                    .join("&")),
                  (ma = "application/x-www-form-urlencoded; charset=UTF-8"),
                  (x = ea.jC.loadCallback),
                  (aa = "url"),
                  (ca = ea.jC.extension));
              else {
                la();
                return;
              }
              var ra = new XMLHttpRequest(),
                qa = Object(w.l)(ea.$g, "AuxUpload");
              qa = Object(h.a)(qa, { type: aa, ext: ca });
              ra.open("POST", qa);
              ra.withCredentials = ea.al();
              ma && ra.setRequestHeader("Content-Type", ma);
              ra.addEventListener("load", function () {
                if (ra.readyState === ra.DONE && 200 === ra.status) {
                  var sa = JSON.parse(ra.response);
                  ea.mV = sa.uri;
                  x(sa);
                  la(sa);
                }
              });
              ra.addEventListener("error", function () {
                ka("".concat(ra.statusText, " ").concat(JSON.stringify(ra)));
              });
              ea.Pr &&
                null != ea.Pr.onProgress &&
                (ra.upload.onprogress = function (sa) {
                  ea.Pr.onProgress(sa);
                });
              ra.send(ha);
            });
          };
          ba.prototype.wRa = function (ea) {
            this.password = ea || null;
            this.jr.Qo() || ((this.jr = new r()), this.dk({ t: "pages" }));
            return this.jr.promise;
          };
          ba.prototype.mH = function (ea) {
            this.NV = ea || null;
            this.jr.Qo() || this.dk({ t: "pages" });
            return this.jr.promise;
          };
          ba.prototype.VD = function (ea) {
            ea = Object.assign(ea, { uri: encodeURIComponent(this.mV) });
            this.NV && (ea.ext = this.NV);
            this.Zj && (ea.c = this.Zj);
            this.password && (ea.pswd = this.password);
            this.ID && (ea.cacheKey = this.ID);
            this.Rt && (ea.officeOptions = this.Rt);
            this.Bg && (ea.rastOptions = this.Bg);
            this.JD && (ea.cadOptions = this.JD.mImpl);
            return ea;
          };
          ba.prototype.CSa = function () {
            0 < this.rB.length() &&
              10 >= this.Sy &&
              this.DSa(this.rB.pop().data);
          };
          ba.prototype.cva = function (ea) {
            0 < this.rB.length() && this.rB.contains(ea) && this.rB.remove(ea);
          };
          ba.prototype.dk = function (ea) {
            ea = this.VD(ea);
            this.oz.send(ea);
          };
          ba.prototype.tia = function (ea, ha) {
            10 < this.Sy
              ? this.rB.push(ea, ha)
              : (this.Sy++, (ea = this.VD(ha)), this.oz.send(ea));
          };
          ba.prototype.DSa = function (ea) {
            this.Sy++;
            ea = this.VD(ea);
            this.oz.send(ea);
          };
          ba.prototype.cq = function (ea) {
            return ea;
          };
          ba.prototype.Cca = function (ea) {
            this.K1 && ea
              ? Object(fa.j)(
                  "Server failed health check. Single server mode ignoring check.",
                )
              : !this.r1a && ea && 3 >= this.ni
                ? ((this.DX = !0), this.oz.Wv())
                : 3 < this.ni && (this.K1 = !0);
          };
          ba.prototype.eNa = function (ea) {
            var ha = this,
              x = ea.data,
              ca = ea.err,
              aa = ea.t;
            switch (aa) {
              case "upload":
                ca ? this.HYa.reject(ca) : this.HYa.resolve("Success");
                break;
              case "pages":
                ca
                  ? this.jr.reject(ca)
                  : pa(x, aa, this.jr) && this.jr.resolve(x);
                break;
              case "config":
                if (ca) this.zv.reject(ca);
                else if (pa(x, aa, this.zv)) {
                  this.Cca(x.unhealthy);
                  x.id && (this.id = x.id);
                  if (x.auth) {
                    var ma = Object(b.a)("wvsQueryParameters");
                    ma.auth = x.auth;
                    Object(b.b)("wvsQueryParameters", ma);
                  }
                  x.serverVersion &&
                    ((this.VQ = x.serverVersion),
                    Object(fa.h)(
                      "[WebViewer Server] server version: ".concat(this.VQ),
                    ));
                  x.serverID
                    ? ((this.ni =
                        x.serverID === this.xia && this.DX ? this.ni + 1 : 0),
                      (this.xia = x.serverID))
                    : (this.ni = 0);
                  this.DX = !1;
                  this.zv.resolve(x);
                }
                break;
              case "health":
                ca
                  ? this.zv.reject(ca)
                  : pa(x, aa, this.zv) && this.Cca(x.unhealthy);
                break;
              case "pdf":
                x.url = Object(h.a)(
                  "".concat(this.$g, "../").concat(encodeURI(x.url)),
                );
                ca
                  ? this.Ih.reject(ca)
                  : pa(x, aa, this.Ih) && this.Ih.resolve(x);
                break;
              case "ApString2Xod":
                x.url = Object(h.a)(
                  "".concat(this.$g, "../data/").concat(encodeURI(x.url)),
                );
                ca
                  ? this.Qm[x.rID].reject(ca)
                  : pa(x, aa, this.Qm[x.rID]) && this.Qm[x.rID].resolve(x);
                break;
              case "docmod":
                x.url = Object(h.a)(
                  "".concat(this.$g, "../").concat(encodeURI(x.url)),
                );
                ca
                  ? this.Qm[x.rID].reject(ca)
                  : pa(x, aa, this.Ih) && this.Qm[x.rID].resolve(x);
                break;
              case "xod":
                if (ca)
                  (this.Hg && this.Hg.Km() && this.Hg.reject(ca),
                    this.Gg && this.Gg.Km() && this.Gg.reject(ca));
                else if (x.notFound)
                  (x.noCreate ||
                    (this.Hg && this.Hg.Km() && this.Hg.resolve(x)),
                    this.Gg && this.Gg.Km() && this.Gg.resolve(x));
                else {
                  x.url &&
                    (x.url = Object(h.a)(
                      "".concat(this.$g, "../").concat(encodeURI(x.url)),
                    ));
                  if (!this.Gg || this.Gg.Qo())
                    ((this.Gg = new r()),
                      (this.Gg.request = { t: "xod", noCreate: !0 }));
                  this.Hg ||
                    ((this.Hg = new r()), (this.Hg.request = { t: "xod" }));
                  this.Gg.resolve(x);
                  this.Hg.resolve(x);
                }
                break;
              case "cAnnots":
                ma = this.Vh;
                if (ca) ma.reject(ca);
                else if (pa(x, aa, ma)) {
                  ma.$0();
                  var la = [],
                    ka = x.annots;
                  x = function (Aa) {
                    var Ba = ka[Aa].s,
                      Ea = ka[Aa].e,
                      za = ""
                        .concat(ra.$g, "../")
                        .concat(encodeURI(ka[Aa].xfdf)),
                      Ca =
                        "true" === ka[Aa].hasAppearance
                          ? Object(h.a)("".concat(za, ".xodapp"))
                          : null,
                      Ia = Object(ia.range)(Ba, Ea);
                    la[Aa] = {
                      range: Ia,
                      promise: new Promise(function (La, Ka) {
                        var Oa = new XMLHttpRequest();
                        Oa.open("GET", Object(h.a)(za));
                        Oa.responseType = "text";
                        Oa.withCredentials = ha.al();
                        Oa.addEventListener("load", function () {
                          Oa.readyState === Oa.DONE &&
                            200 === Oa.status &&
                            La({ Tr: Oa.response, Tp: Ca, range: Ia });
                        });
                        Oa.addEventListener("error", function () {
                          Ka(
                            ""
                              .concat(Oa.statusText, " ")
                              .concat(JSON.stringify(Oa)),
                          );
                        });
                        Oa.send();
                      }),
                    };
                  };
                  var ra = this;
                  for (ca = 0; ca < ka.length; ca++) x(ca);
                  ma.resolve(la);
                }
                break;
              case "annots":
                if (ca) this.Vh.reject(ca);
                else if (pa(x, aa, this.Vh)) {
                  this.Vh.$0();
                  var qa = new XMLHttpRequest();
                  ma = "".concat(this.$g, "../").concat(encodeURI(x.url));
                  var sa = x.hasAppearance
                    ? Object(h.a)("".concat(ma, ".xodapp"))
                    : null;
                  qa.open("GET", Object(h.a)(ma));
                  qa.responseType = "text";
                  qa.withCredentials = this.al();
                  qa.addEventListener("load", function () {
                    qa.readyState === qa.DONE &&
                      200 === qa.status &&
                      ha.Vh.resolve({ Tr: qa.response, Tp: sa });
                  });
                  qa.addEventListener("error", function () {
                    ha.Vh.reject(
                      "".concat(qa.statusText, " ").concat(JSON.stringify(qa)),
                    );
                  });
                  qa.send();
                }
                break;
              case "image":
                this.Sy--;
                var ua = this.Tj[x.p];
                ca
                  ? ua.promise.reject(ca)
                  : pa(x, aa, ua) &&
                    ((ua.result = x),
                    (ua.result.url = Object(h.a)(
                      ""
                        .concat(this.$g, "../")
                        .concat(encodeURI(ua.result.url)),
                    )),
                    ua.resolve(ua.result));
                break;
              case "tiles":
                this.Sy--;
                ua = x.rID;
                ma = this.ui[ua];
                this.ui[ua] = null;
                this.gM.push(ua);
                if (ca) ma.reject(ca);
                else if (pa(x, aa, ma)) {
                  for (ca = 0; ca < x.tiles.length; ca++)
                    x.tiles[ca] = Object(h.a)(
                      "".concat(this.$g, "../").concat(encodeURI(x.tiles[ca])),
                    );
                  ma.resolve(x);
                }
                break;
              case "text":
                ua = this.Uj[x.p];
                if (ca) ua.reject(ca);
                else if (pa(x, aa, ua)) {
                  ua.$0();
                  var wa = new XMLHttpRequest();
                  x = Object(h.a)(
                    "".concat(this.$g, "../").concat(encodeURI(x.url)),
                  );
                  wa.open("GET", x);
                  wa.withCredentials = this.al();
                  wa.addEventListener("load", function () {
                    wa.readyState === wa.DONE &&
                      200 === wa.status &&
                      ((ua.result = JSON.parse(wa.response)),
                      ua.resolve(ua.result));
                  });
                  wa.addEventListener("error", function (Aa) {
                    ua.reject(
                      "".concat(wa.statusText, " ").concat(JSON.stringify(Aa)),
                    );
                  });
                  wa.send();
                }
                break;
              case "progress":
                "loading" === x.t &&
                  this.trigger(n.a.Events.DOCUMENT_LOADING_PROGRESS, [
                    x.bytes,
                    x.total,
                  ]);
            }
            this.CSa();
            !aa &&
              ea.echo &&
              ea &&
              "apstring2xod" === ea.echo.t &&
              (ea = ea.echo.reqID) &&
              (2 <= parseInt(this.VQ, 10)
                ? this.Qm[ea].reject("Message unhandled by server")
                : this.Qm[ea].reject());
          };
          ba.prototype.EDa = function () {
            return Object(ja.b)(this, void 0, void 0, function () {
              return Object(ja.d)(this, function (ea) {
                switch (ea.label) {
                  case 0:
                    return [4, this.MIa()];
                  case 1:
                    return (ea.aa(), [2, this.zv.promise]);
                }
              });
            });
          };
          ba.prototype.fDa = function (ea) {
            for (
              var ha = this,
                x = new XMLHttpRequest(),
                ca = Object(h.a)("".concat(this.$g, "aul"), { id: this.id }),
                aa = new FormData(),
                ma = {},
                la = 0;
              la < ea.body.length;
              la++
            ) {
              var ka = ea.body[la];
              ma[ka.id] = "".concat(ka.wT.w, ";").concat(ka.wT.h);
              aa.append(ka.id, ka.wT.dataString);
            }
            ea = { t: "apstring2xod", reqID: this.Xea++, parts: ma };
            var ra = this.VD(ea);
            aa.append("msg", JSON.stringify(ra));
            this.Qm[ra.reqID] = new r();
            x.open("POST", ca);
            x.withCredentials = this.al;
            ca = new Promise(function (qa, sa) {
              x.onreadystatechange = function () {
                4 === x.readyState &&
                  (200 === x.status
                    ? qa()
                    : sa(
                        "An error occurred while sending down appearance strings to the server",
                      ));
              };
            });
            x.send(aa);
            return ca.then(function () {
              return ha.Qm[ra.reqID].promise;
            });
          };
          ba.prototype.$va = function () {
            var ea = this.VQ.split("-")[0].split("."),
              ha = ["1", "5", "9"];
            if (3 !== ea.length) throw Error("Invalid WVS version length.");
            if (3 !== ha.length) throw Error("Invalid version length.");
            for (var x = 0; x < ea.length; ++x) {
              if (ha.length === x || ea[x] > ha[x]) return -1;
              if (ea[x] !== ha[x]) return 1;
            }
            return 0;
          };
          ba.prototype.vv = function () {
            return 0 >= this.$va();
          };
          ba.prototype.eW = function () {
            this.Vh ||
              ((this.Vh = new r()),
              this.vv()
                ? (this.Vh.request = { t: "cAnnots" })
                : (this.Vh.request = { t: "annots" }),
              this.dk(this.Vh.request));
            return this.Vh.promise;
          };
          ba.prototype.yP = function (ea, ha) {
            this.Tj[ha] ||
              ((this.Tj[ha] = new r()),
              (this.Tj[ha].request = { t: "image", p: ha }),
              this.tia(ea, this.Tj[ha].request));
            return this.Tj[ha].promise;
          };
          ba.prototype.xRa = function (ea) {
            this.Uj[ea] ||
              ((this.Uj[ea] = new r()),
              (this.Uj[ea].request = { t: "text", p: ea }),
              this.dk(this.Uj[ea].request));
            return this.Uj[ea].promise;
          };
          ba.prototype.yRa = function (ea, ha, x, ca, aa) {
            var ma = this.ui.length;
            this.gM.length && (ma = this.gM.pop());
            this.ui[ma] = new r();
            this.ui[ma].request = {
              t: "tiles",
              p: ha,
              z: x,
              r: ca,
              size: aa,
              rID: ma,
            };
            this.tia(ea, this.ui[ma].request);
            return this.ui[ma].promise;
          };
          ba.prototype.Mha = function () {
            this.Ih ||
              ((this.Ih = new r()),
              (this.Ih.request = { t: "pdf" }),
              this.A9
                ? this.Ih.resolve({ url: this.mV })
                : this.dk(this.Ih.request));
            return this.Ih.promise;
          };
          ba.prototype.dba = function (ea) {
            var ha = this,
              x = new XMLHttpRequest(),
              ca = Object(h.a)("".concat(this.$g, "aul"), { id: this.id }),
              aa = new FormData(),
              ma = {};
            ea.annots && (ma.annots = "xfdf");
            ea.watermark && (ma.watermark = "png");
            ea.redactions && (ma.redactions = "redact");
            ma = { t: "docmod", reqID: this.Xea++, parts: ma };
            ea.print && (ma.print = !0);
            var la = this.VD(ma);
            aa.append("msg", JSON.stringify(la));
            return Promise.all(
              [ea.annots, ea.watermark, ea.redactions].map(function (ka) {
                return Promise.resolve(ka);
              }),
            ).then(function (ka) {
              var ra = ka[0],
                qa = ka[1];
              ka = ka[2];
              ra && aa.append("annots", ra);
              qa && aa.append("watermark", qa);
              ka && aa.append("redactions", ka);
              ha.Qm[la.reqID] = new r();
              x.open("POST", ca);
              x.withCredentials = ha.al;
              ra = new Promise(function (sa, ua) {
                x.onreadystatechange = function () {
                  4 === x.readyState &&
                    (200 === x.status
                      ? sa()
                      : ua(
                          "An error occurred while sending down annotation data to the server",
                        ));
                };
              });
              x.send(aa);
              return ra.then(function () {
                return ha.Qm[la.reqID].promise;
              });
            });
          };
          ba.prototype.eca = function () {
            this.Gg ||
              ((this.Gg = new r()),
              (this.Gg.request = { t: "xod", noCreate: !0 }),
              this.dk(this.Gg.request));
            return this.Gg.promise;
          };
          ba.prototype.zRa = function () {
            this.Hg ||
              ((this.Hg = new r()),
              (this.Hg.request = { t: "xod" }),
              this.dk(this.Hg.request));
            return this.Hg.promise;
          };
          ba.prototype.cu = function () {
            return !0;
          };
          ba.prototype.request = function () {};
          ba.prototype.aha = function () {};
          ba.prototype.abort = function () {
            for (var ea = 0; ea < this.ui.length; ea++)
              this.ui[ea] &&
                (this.ui[ea].resolve(null),
                (this.ui[ea] = null),
                this.gM.push(ea));
            this.close();
          };
          ba.prototype.VP = function (ea) {
            this.Zj = this.Zj || {};
            this.Zj.headers = ea;
          };
          ba.prototype.ju = function (ea) {
            this.Zj = this.Zj || {};
            this.Zj.internal = this.Zj.internal || {};
            this.Zj.internal.withCredentials = ea;
          };
          ba.prototype.al = function () {
            return this.Zj && this.Zj.internal
              ? this.Zj.internal.withCredentials
              : null;
          };
          ba.prototype.getFileData = function () {
            return Promise.reject();
          };
          return ba;
        })();
        Object(ya.a)(e);
        Object(f.a)(e);
        Object(f.b)(e);
        va["default"] = e;
      },
      674: function (ya, va, e) {
        var na = e(0),
          pa = e(2),
          oa = e(37),
          ja = e(54),
          ia = e(261),
          fa = e(110),
          w = (function () {
            function n(f, b, h, r, a, y) {
              void 0 === h && (h = null);
              void 0 === r && (r = null);
              void 0 === a && (a = null);
              void 0 === y && (y = null);
              this.GX = !1;
              this.ni = 0;
              this.kG = 8;
              this.bia = 3e3;
              this.pQ = !1;
              this.Q7 = this.kZa(f);
              this.url = b
                ? "".concat(this.Q7, "/").concat(b)
                : "".concat(this.Q7, "/ws");
              this.UU = h;
              this.DG = r;
              this.TD = a;
              this.Nha = y;
            }
            n.prototype.kZa = function (f) {
              var b = f.indexOf("://"),
                h = "ws://";
              0 > b ? (b = 0) : (5 === b && (h = "wss://"), (b += 3));
              var r = f.lastIndexOf("/");
              0 > r && (r = f.length);
              return h + f.slice(b, r);
            };
            n.prototype.send = function (f) {
              this.wu.readyState === WebSocket.CLOSED ||
                this.GX ||
                this.wu.send(JSON.stringify(f));
            };
            n.prototype.FN = function () {
              return Object(na.b)(this, void 0, void 0, function () {
                var f,
                  b = this;
                return Object(na.d)(this, function () {
                  f = Object(ja.a)("wvsQueryParameters");
                  f.bcid = Object(oa.m)(8);
                  Object(ja.b)("wvsQueryParameters", f);
                  return [
                    2,
                    new Promise(function (h, r) {
                      var a = Object(ia.a)(b.url);
                      b.pQ = !1;
                      b.wu = new WebSocket(a);
                      b.wu.onopen = function () {
                        b.GX = !1;
                        b.ni = 0;
                        b.DG && b.DG();
                        h();
                      };
                      b.wu.onerror = function () {
                        b.GX = !0;
                      };
                      b.wu.onclose = function (y) {
                        y = y.code;
                        b.TD && b.TD();
                        1e3 !== y && 3e3 !== y && b.WHa(y, h, r);
                      };
                      b.wu.onmessage = function (y) {
                        y &&
                          y.data &&
                          ((y = JSON.parse(y.data)),
                          y.hb
                            ? b.send({ hb: !0 })
                            : y.end
                              ? close()
                              : b.UU(y));
                      };
                    }),
                  ];
                });
              });
            };
            n.prototype.WHa = function (f, b, h) {
              Object(na.b)(this, void 0, void 0, function () {
                var r = this;
                return Object(na.d)(this, function () {
                  if (this.pQ) return (b(), [2]);
                  this.ni < this.kG
                    ? setTimeout(function () {
                        r.pQ
                          ? b()
                          : (r.ni++,
                            Object(pa.j)(
                              "Failed to connect to server with WebSocket close code "
                                .concat(
                                  f,
                                  ". Reconnecting to WebViewer Server, attempt ",
                                )
                                .concat(r.ni, " of ")
                                .concat(r.kG, " ..."),
                            ),
                            r.FN().then(b).catch(h));
                      }, this.bia)
                    : h(fa.a);
                  return [2];
                });
              });
            };
            n.prototype.Wv = function () {
              var f;
              void 0 === f && (f = !1);
              this.ni = 0;
              this.pQ = !0;
              f ? this.wu.close(3e3) : this.wu.close();
              return Promise.resolve();
            };
            return n;
          })(),
          z = (function () {
            function n(f, b, h, r, a, y, ba) {
              void 0 === r && (r = null);
              void 0 === a && (a = null);
              void 0 === y && (y = null);
              void 0 === ba && (ba = null);
              this.ni = this.xP = this.id = 0;
              this.vF = !1;
              this.request = null;
              this.kG = 8;
              this.bia = 3e3;
              f = this.ePa(f);
              this.url = b
                ? "".concat(f, "/").concat(b, "pf")
                : "".concat(f, "/pf");
              this.OQ = h;
              this.UU = r;
              this.DG = a;
              this.TD = y;
              this.Nha = ba;
            }
            n.prototype.ePa = function (f) {
              var b = f.lastIndexOf("/");
              0 > b && (b = f.length);
              return f.slice(0, b);
            };
            n.prototype.Qxa = function (f) {
              f = f.split("\n");
              for (
                f[f.length - 1] && f.pop();
                0 < f.length && 3 > f[f.length - 1].length;

              )
                "]" === f.pop() && (this.id = 0);
              0 < f.length && 3 > f[0].length && f.shift();
              for (var b = 0; b < f.length; ++b)
                f[b].endsWith(",") && (f[b] = f[b].substr(0, f[b].length - 1));
              return f;
            };
            n.prototype.aia = function () {
              return Object(na.b)(this, void 0, void 0, function () {
                var f = this;
                return Object(na.d)(this, function (b) {
                  switch (b.label) {
                    case 0:
                      return this.ni++ < this.kG
                        ? [
                            4,
                            new Promise(function (h) {
                              return setTimeout(function () {
                                f.Nha();
                                f.FN();
                                h();
                              }, 3e3);
                            }),
                          ]
                        : [3, 2];
                    case 1:
                      (b.aa(), (b.label = 2));
                    case 2:
                      return [2];
                  }
                });
              });
            };
            n.prototype.kPa = function (f) {
              Object(na.b)(this, void 0, void 0, function () {
                var b, h;
                return Object(na.d)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      ((b = null), (h = 0), (r.label = 1));
                    case 1:
                      if (!(h < f.length)) return [3, 6];
                      b = JSON.parse(f[h]);
                      if (!b) return [3, 5];
                      if (!b.end) return [3, 2];
                      close();
                      return [3, 5];
                    case 2:
                      if (!b.id || Number(b.id) === this.id) return [3, 4];
                      Object(pa.j)("Reconnecting, new server detected");
                      this.Wv();
                      return [4, this.aia()];
                    case 3:
                      return (r.aa(), [3, 5]);
                    case 4:
                      (b.hb && Number(b.id) === this.id
                        ? this.send({ hb: !0 })
                        : this.vF || this.UU(b),
                        (r.label = 5));
                    case 5:
                      return (++h, [3, 1]);
                    case 6:
                      return [2];
                  }
                });
              });
            };
            n.prototype.$Ma = function (f) {
              Object(na.b)(this, void 0, void 0, function () {
                var b, h, r;
                return Object(na.d)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!(3 <= f.readyState)) return [3, 2];
                      try {
                        b = f.responseText.length;
                      } catch (y) {
                        return (Object(pa.h)("caught exception"), [2]);
                      }
                      if (0 < b)
                        try {
                          ((h = this.Qxa(f.responseText)),
                            0 === this.id &&
                              0 < h.length &&
                              ((r = JSON.parse(h.shift())),
                              (this.id = r.id),
                              (this.ni = 0)),
                            this.kPa(h));
                        } catch (y) {}
                      return this.vF ? [3, 2] : [4, this.L$()];
                    case 1:
                      (a.aa(), (a.label = 2));
                    case 2:
                      return [2];
                  }
                });
              });
            };
            n.prototype.L$ = function () {
              return Object(na.b)(this, void 0, void 0, function () {
                var f = this;
                return Object(na.d)(this, function () {
                  return [
                    2,
                    new Promise(function (b, h) {
                      function r() {
                        return Object(na.b)(f, void 0, void 0, function () {
                          return Object(na.d)(this, function (y) {
                            switch (y.label) {
                              case 0:
                                (h(), this.Wv(), (y.label = 1));
                              case 1:
                                return this.vF && this.ni < this.kG
                                  ? [4, this.aia()]
                                  : [3, 3];
                              case 2:
                                return (y.aa(), [3, 1]);
                              case 3:
                                return [2];
                            }
                          });
                        });
                      }
                      f.request = new XMLHttpRequest();
                      f.request.withCredentials = f.OQ;
                      var a = Object(ia.a)(
                        f.url,
                        0 !== f.id
                          ? { id: String(f.id), uc: String(f.xP) }
                          : { uc: String(f.xP) },
                      );
                      f.xP++;
                      f.request.open("GET", a, !0);
                      f.request.setRequestHeader("Cache-Control", "no-cache");
                      f.request.setRequestHeader(
                        "X-Requested-With",
                        "XMLHttpRequest",
                      );
                      f.request.onreadystatechange = function () {
                        f.$Ma(f.request);
                      };
                      f.request.addEventListener("error", r);
                      f.request.addEventListener("timeout", r);
                      f.request.addEventListener("load", function () {
                        f.DG && f.DG();
                        b();
                      });
                      f.request.send();
                    }),
                  ];
                });
              });
            };
            n.prototype.FN = function () {
              var f = Object(ja.a)("wvsQueryParameters");
              f.bcid = Object(oa.m)(8);
              Object(ja.b)("wvsQueryParameters", f);
              this.xP = this.id = 0;
              this.vF = !1;
              return this.L$();
            };
            n.prototype.send = function (f) {
              var b = this,
                h = new XMLHttpRequest();
              h.withCredentials = this.OQ;
              var r = Object(ia.a)(this.url, { id: String(this.id) }),
                a = new FormData();
              a.append("data", JSON.stringify(f));
              h.addEventListener("error", function () {
                b.Wv();
              });
              h.open("POST", r);
              h.setRequestHeader("X-Requested-With", "XMLHttpRequest");
              h.send(a);
            };
            n.prototype.Wv = function () {
              this.id = 0;
              this.vF = !0;
              this.TD && this.TD();
              this.request.abort();
              return Promise.resolve();
            };
            return n;
          })();
        ya = (function () {
          function n(f, b, h) {
            this.N8 = f;
            this.target = b;
            this.OQ = h;
          }
          n.prototype.RCa = function (f, b, h, r, a) {
            void 0 === f && (f = !0);
            void 0 === b && (b = null);
            void 0 === h && (h = null);
            void 0 === r && (r = null);
            void 0 === a && (a = null);
            return f
              ? new w(this.N8, this.target, b, h, r, a)
              : new z(this.N8, this.target, this.OQ, b, h, r, a);
          };
          return n;
        })();
        va.a = ya;
      },
    },
  ]);
}).call(this || window);
