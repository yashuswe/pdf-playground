/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [5],
    {
      651: function (ya, va, e) {
        e.r(va);
        var na = e(0);
        ya = e(52);
        var pa = e(261),
          oa = e(567),
          ja = e(325),
          ia = window;
        e = (function () {
          function fa(w, z) {
            this.qda = function (n) {
              n = n.split(".");
              return n[n.length - 1].match(/(jpg|jpeg|png|gif)$/i);
            };
            z = z || {};
            this.url = w;
            this.filename = z.filename || w;
            this.Vf = z.customHeaders;
            this.KYa = !!z.useDownloader;
            this.withCredentials = !!z.withCredentials;
          }
          fa.prototype.VP = function (w) {
            this.Vf = w;
          };
          fa.prototype.getCustomHeaders = function () {
            return this.Vf;
          };
          fa.prototype.getFileData = function (w) {
            var z = this,
              n = this,
              f = new XMLHttpRequest(),
              b = 0 === this.url.indexOf("blob:") ? "blob" : "arraybuffer";
            f.open("GET", this.url, !0);
            f.withCredentials = this.withCredentials;
            f.responseType = b;
            this.Vf &&
              Object.keys(this.Vf).forEach(function (r) {
                f.setRequestHeader(r, z.Vf[r]);
              });
            var h = /^https?:/i.test(this.url);
            f.addEventListener(
              "load",
              function (r) {
                return Object(na.b)(this, void 0, void 0, function () {
                  var a, y, ba, ea, ha, x;
                  return Object(na.d)(this, function (ca) {
                    switch (ca.label) {
                      case 0:
                        if (200 !== this.status && (h || 0 !== this.status))
                          return [3, 10];
                        n.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                          r.loaded,
                          r.loaded,
                        ]);
                        if ("blob" !== this.responseType) return [3, 4];
                        a = this.response;
                        return n.qda(n.filename)
                          ? [4, Object(ja.b)(a)]
                          : [3, 2];
                      case 1:
                        return (
                          (y = ca.aa()),
                          (n.fileSize = y.byteLength),
                          w(new Uint8Array(y)),
                          [3, 3]
                        );
                      case 2:
                        ((ba = new FileReader()),
                          (ba.onload = function (aa) {
                            aa = new Uint8Array(aa.target.result);
                            n.fileSize = aa.length;
                            w(aa);
                          }),
                          ba.readAsArrayBuffer(a),
                          (ca.label = 3));
                      case 3:
                        return [3, 9];
                      case 4:
                        ca.Oc.push([4, 8, , 9]);
                        ea = new Uint8Array(this.response);
                        if (!n.qda(n.filename)) return [3, 6];
                        a = new Blob([ea.buffer]);
                        return [4, Object(ja.b)(a)];
                      case 5:
                        return (
                          (y = ca.aa()),
                          (n.fileSize = y.byteLength),
                          w(new Uint8Array(y)),
                          [3, 7]
                        );
                      case 6:
                        ((n.fileSize = ea.length), w(ea), (ca.label = 7));
                      case 7:
                        return [3, 9];
                      case 8:
                        return (
                          ca.aa(),
                          n.trigger(fa.Events.ERROR, [
                            "pdfLoad",
                            "Out of memory",
                          ]),
                          [3, 9]
                        );
                      case 9:
                        return [3, 11];
                      case 10:
                        ((ha = r.currentTarget),
                          (x = Object(pa.b)(ha)),
                          n.trigger(fa.Events.ERROR, [
                            "pdfLoad",
                            "".concat(this.status, " ").concat(ha.statusText),
                            x,
                          ]),
                          (ca.label = 11));
                      case 11:
                        return ((n.wI = null), [2]);
                    }
                  });
                });
              },
              !1,
            );
            f.onprogress = function (r) {
              n.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                r.loaded,
                0 < r.total ? r.total : 0,
              ]);
            };
            f.addEventListener(
              "error",
              function () {
                n.trigger(fa.Events.ERROR, ["pdfLoad", "Network failure"]);
                n.wI = null;
              },
              !1,
            );
            f.send();
            this.wI = f;
          };
          fa.prototype.getFile = function () {
            var w = this;
            return new Promise(function (z) {
              ia.da.isJSWorker && z(w.url);
              if (w.KYa) {
                var n = Object(na.a)(
                  { url: w.url },
                  w.Vf ? { customHeaders: w.Vf } : {},
                );
                z(n);
              }
              z(null);
            });
          };
          fa.prototype.abort = function () {
            this.wI && (this.wI.abort(), (this.wI = null));
          };
          fa.Events = {
            DOCUMENT_LOADING_PROGRESS: "documentLoadingProgress",
            ERROR: "error",
          };
          return fa;
        })();
        Object(ya.a)(e);
        Object(oa.a)(e);
        Object(oa.b)(e);
        va["default"] = e;
      },
    },
  ]);
}).call(this || window);
