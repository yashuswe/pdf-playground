/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [4],
    {
      661: function (ya, va, e) {
        e.r(va);
        var na = e(0),
          pa = e(683),
          oa = e(684),
          ja;
        (function (ia) {
          ia[(ia.EXTERNAL_XFDF_NOT_REQUESTED = 0)] =
            "EXTERNAL_XFDF_NOT_REQUESTED";
          ia[(ia.EXTERNAL_XFDF_NOT_AVAILABLE = 1)] =
            "EXTERNAL_XFDF_NOT_AVAILABLE";
          ia[(ia.EXTERNAL_XFDF_AVAILABLE = 2)] = "EXTERNAL_XFDF_AVAILABLE";
        })(ja || (ja = {}));
        ya = (function () {
          function ia(fa) {
            this.ba = fa;
            this.state = ja.EXTERNAL_XFDF_NOT_REQUESTED;
          }
          ia.prototype.dHa = function () {
            var fa = this;
            return function (w, z, n) {
              return Object(na.b)(fa, void 0, void 0, function () {
                var f,
                  b,
                  h,
                  r,
                  a,
                  y,
                  ba,
                  ea = this,
                  ha;
                return Object(na.d)(this, function (x) {
                  switch (x.label) {
                    case 0:
                      if (this.state !== ja.EXTERNAL_XFDF_NOT_REQUESTED)
                        return [3, 2];
                      f = this.ba.getDocument().kw();
                      return [4, this.hEa(f)];
                    case 1:
                      ((b = x.aa()),
                        (h = this.nxa(b)),
                        (this.JV =
                          null !==
                            (ha =
                              null === h || void 0 === h
                                ? void 0
                                : h.parse()) && void 0 !== ha
                            ? ha
                            : null),
                        (this.state =
                          null === this.JV
                            ? ja.EXTERNAL_XFDF_NOT_AVAILABLE
                            : ja.EXTERNAL_XFDF_AVAILABLE),
                        (x.label = 2));
                    case 2:
                      if (this.state === ja.EXTERNAL_XFDF_NOT_AVAILABLE)
                        return (n(w), [2]);
                      r = new DOMParser();
                      a = r.parseFromString(w, "text/xml");
                      z.forEach(function (ca) {
                        ea.merge(a, ea.JV, ca - 1);
                      });
                      y = new XMLSerializer();
                      ba = y.serializeToString(a);
                      n(ba);
                      return [2];
                  }
                });
              });
            };
          };
          ia.prototype.Z0 = function (fa) {
            this.hEa = fa;
          };
          ia.prototype.Wf = function () {
            this.JV = void 0;
            this.state = ja.EXTERNAL_XFDF_NOT_REQUESTED;
          };
          ia.prototype.nxa = function (fa) {
            return fa
              ? Array.isArray(fa)
                ? new pa.a(fa)
                : "string" !== typeof fa
                  ? null
                  : new DOMParser()
                        .parseFromString(fa, "text/xml")
                        .querySelector("xfdf > add")
                    ? new pa.a(fa)
                    : new oa.a(fa)
              : null;
          };
          ia.prototype.merge = function (fa, w, z) {
            var n = this;
            0 === z && (this.ULa(fa, w.rv), this.XLa(fa, w.nV));
            var f = w.ea[z];
            f &&
              (this.YLa(fa, f.jv),
              this.$La(fa, f.zla, w.ct),
              this.ZLa(fa, f.page, z),
              this.WLa(fa, f.H9));
            f = this.ba.Cb();
            if (z === f - 1) {
              var b = w.ct;
              Object.keys(b).forEach(function (h) {
                b[h].IX || n.Bea(fa, h, b[h]);
              });
            }
          };
          ia.prototype.ULa = function (fa, w) {
            null !== w &&
              ((fa = this.xD(fa)), this.px(fa, "calculation-order", w));
          };
          ia.prototype.XLa = function (fa, w) {
            null !== w &&
              ((fa = this.xD(fa)), this.px(fa, "document-actions", w));
          };
          ia.prototype.YLa = function (fa, w) {
            var z = this,
              n = this.wD(fa.querySelector("xfdf"), "annots");
            Object.keys(w).forEach(function (f) {
              z.px(n, '[name="'.concat(f, '"]'), w[f]);
            });
          };
          ia.prototype.$La = function (fa, w, z) {
            var n = this;
            if (0 !== w.length) {
              var f = this.xD(fa);
              w.forEach(function (b) {
                var h = b.getAttribute("field"),
                  r = z[h];
                r && (n.Bea(fa, h, r), n.px(f, "null", b));
              });
            }
          };
          ia.prototype.Bea = function (fa, w, z) {
            var n = this.xD(fa),
              f = n.querySelector('ffield[name="'.concat(w, '"]'));
            null !== z.$L &&
              null === f &&
              this.px(n, 'ffield[name="'.concat(w, '"]'), z.$L);
            fa = this.wD(fa.querySelector("xfdf"), "xfdf > fields", "fields");
            w = w.split(".");
            this.H_(fa, w, 0, z.value);
            z.IX = !0;
          };
          ia.prototype.ZLa = function (fa, w, z) {
            null !== w &&
              ((fa = this.xD(fa)),
              (fa = this.wD(fa, "pages")),
              this.px(fa, '[number="'.concat(z + 1, '"]'), w));
          };
          ia.prototype.WLa = function (fa, w) {
            Object.keys(w).forEach(function (z) {
              (z = fa.querySelector('annots [name="'.concat(z, '"]'))) &&
                z.parentElement.removeChild(z);
            });
          };
          ia.prototype.H_ = function (fa, w, z, n) {
            if (z === w.length)
              ((w = document.createElementNS("", "value")),
                (w.textContent = n),
                this.px(fa, "value", w));
            else {
              var f = w[z];
              this.wD(fa, '[name="'.concat(f, '"]'), "field").setAttribute(
                "name",
                f,
              );
              fa = fa.querySelectorAll('[name="'.concat(f, '"]'));
              1 === fa.length
                ? this.H_(fa[0], w, z + 1, n)
                : ((f = this.mCa(fa)),
                  this.H_(
                    z === w.length - 1 ? f : this.sXa(fa, f),
                    w,
                    z + 1,
                    n,
                  ));
            }
          };
          ia.prototype.mCa = function (fa) {
            for (var w = null, z = 0; z < fa.length; z++) {
              var n = fa[z];
              if (
                0 === n.childElementCount ||
                (1 === n.childElementCount && "value" === n.children[0].tagName)
              ) {
                w = n;
                break;
              }
            }
            return w;
          };
          ia.prototype.sXa = function (fa, w) {
            for (var z = 0; z < fa.length; z++) if (fa[z] !== w) return fa[z];
            return null;
          };
          ia.prototype.px = function (fa, w, z) {
            w = fa.querySelector(w);
            null !== w && fa.removeChild(w);
            fa.appendChild(z);
          };
          ia.prototype.xD = function (fa) {
            var w = fa.querySelector("pdf-info");
            if (null !== w) return w;
            w = this.wD(fa.querySelector("xfdf"), "pdf-info");
            w.setAttribute("xmlns", "http://www.pdftron.com/pdfinfo");
            w.setAttribute("version", "2");
            w.setAttribute("import-version", "4");
            return w;
          };
          ia.prototype.wD = function (fa, w, z) {
            var n = fa.querySelector(w);
            if (null !== n) return n;
            n = document.createElementNS("", z || w);
            fa.appendChild(n);
            return n;
          };
          return ia;
        })();
        va["default"] = ya;
      },
      672: function (ya, va) {
        ya = (function () {
          function e() {}
          e.prototype.$J = function (na) {
            var pa = { rv: null, nV: null, ct: {}, ea: {} };
            na = new DOMParser().parseFromString(na, "text/xml");
            pa.rv = na.querySelector("pdf-info calculation-order");
            pa.nV = na.querySelector("pdf-info document-actions");
            pa.ct = this.UNa(na);
            pa.ea = this.hOa(na);
            return pa;
          };
          e.prototype.UNa = function (na) {
            var pa = na.querySelector("fields");
            na = na.querySelectorAll("pdf-info > ffield");
            if (null === pa && null === na) return {};
            var oa = {};
            this.Vsa(oa, pa);
            this.Tsa(oa, na);
            return oa;
          };
          e.prototype.Vsa = function (na, pa) {
            if (null !== pa && pa.children) {
              for (var oa = [], ja = 0; ja < pa.children.length; ja++) {
                var ia = pa.children[ja];
                oa.push({ name: ia.getAttribute("name"), element: ia });
              }
              for (; 0 !== oa.length; )
                for (
                  pa = oa.shift(), ja = 0;
                  ja < pa.element.children.length;
                  ja++
                )
                  ((ia = pa.element.children[ja]),
                    "value" === ia.tagName
                      ? (na[pa.name] = {
                          value: ia.textContent,
                          $L: null,
                          IX: !1,
                        })
                      : ia.children &&
                        oa.push({
                          name: ""
                            .concat(pa.name, ".")
                            .concat(ia.getAttribute("name")),
                          element: ia,
                        }));
            }
          };
          e.prototype.Tsa = function (na, pa) {
            pa.forEach(function (oa) {
              var ja = oa.getAttribute("name");
              na[ja]
                ? (na[ja].$L = oa)
                : (na[ja] = { value: null, $L: oa, IX: !1 });
            });
          };
          e.prototype.hOa = function (na) {
            var pa = this,
              oa = {};
            na.querySelectorAll("pdf-info widget").forEach(function (ja) {
              var ia = parseInt(ja.getAttribute("page"), 10) - 1;
              pa.EN(oa, ia);
              oa[ia].zla.push(ja);
            });
            na.querySelectorAll("pdf-info page").forEach(function (ja) {
              var ia = parseInt(ja.getAttribute("number"), 10) - 1;
              pa.EN(oa, ia);
              oa[ia].page = ja;
            });
            this.bba(na).forEach(function (ja) {
              var ia = parseInt(ja.getAttribute("page"), 10),
                fa = ja.getAttribute("name");
              pa.EN(oa, ia);
              oa[ia].jv[fa] = ja;
            });
            this.Gaa(na).forEach(function (ja) {
              var ia = parseInt(ja.getAttribute("page"), 10);
              ja = ja.textContent;
              pa.EN(oa, ia);
              oa[ia].H9[ja] = !0;
            });
            return oa;
          };
          e.prototype.EN = function (na, pa) {
            na[pa] || (na[pa] = { jv: {}, H9: {}, zla: [], page: null });
          };
          return e;
        })();
        va.a = ya;
      },
      683: function (ya, va, e) {
        var na = e(0),
          pa = e(1);
        e.n(pa);
        ya = (function (oa) {
          function ja(ia) {
            var fa = oa.call(this) || this;
            fa.RBa = Array.isArray(ia) ? ia : [ia];
            return fa;
          }
          Object(na.c)(ja, oa);
          ja.prototype.parse = function () {
            var ia = this,
              fa = { rv: null, nV: null, ct: {}, ea: {} };
            this.RBa.forEach(function (w) {
              fa = Object(pa.merge)(fa, ia.$J(w));
            });
            return fa;
          };
          ja.prototype.bba = function (ia) {
            var fa = [];
            ia.querySelectorAll("add > *").forEach(function (w) {
              fa.push(w);
            });
            ia.querySelectorAll("modify > *").forEach(function (w) {
              fa.push(w);
            });
            return fa;
          };
          ja.prototype.Gaa = function (ia) {
            return ia.querySelectorAll("delete > *");
          };
          return ja;
        })(e(672).a);
        va.a = ya;
      },
      684: function (ya, va, e) {
        var na = e(0);
        ya = (function (pa) {
          function oa(ja) {
            var ia = pa.call(this) || this;
            ia.SBa = ja;
            return ia;
          }
          Object(na.c)(oa, pa);
          oa.prototype.parse = function () {
            return this.$J(this.SBa);
          };
          oa.prototype.bba = function (ja) {
            return ja.querySelectorAll("annots > *");
          };
          oa.prototype.Gaa = function () {
            return [];
          };
          return oa;
        })(e(672).a);
        va.a = ya;
      },
    },
  ]);
}).call(this || window);
