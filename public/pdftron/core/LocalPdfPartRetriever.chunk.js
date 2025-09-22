/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [8],
    {
      647: function (ya, va, e) {
        e.r(va);
        var na = e(0);
        ya = e(52);
        var pa = e(567),
          oa = e(325),
          ja = e(26),
          ia = window;
        e = (function () {
          function fa(w) {
            var z = this;
            this.aKa = function (n) {
              return (
                n &&
                ("image" === n.type.split("/")[0].toLowerCase() ||
                  (n.name && !!n.name.match(/.(jpg|jpeg|png|gif)$/i)))
              );
            };
            this.file = w;
            this.sKa = new Promise(function (n) {
              return Object(na.b)(z, void 0, void 0, function () {
                var f;
                return Object(na.d)(this, function (b) {
                  switch (b.label) {
                    case 0:
                      return this.aKa(this.file)
                        ? [4, Object(oa.b)(w)]
                        : [3, 2];
                    case 1:
                      ((f = b.aa()),
                        (this.file = ja.r
                          ? new Blob([f], { type: w.type })
                          : new File(
                              [f],
                              null === w || void 0 === w ? void 0 : w.name,
                              { type: w.type },
                            )),
                        (b.label = 2));
                    case 2:
                      return (n(!0), [2]);
                  }
                });
              });
            });
          }
          fa.prototype.getFileData = function (w) {
            var z = this,
              n = new FileReader();
            n.onload = function (f) {
              z.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                f.loaded,
                f.loaded,
              ]);
              w(new Uint8Array(f.target.result));
            };
            n.onprogress = function (f) {
              f.lengthComputable &&
                z.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                  f.loaded,
                  0 < f.total ? f.total : 0,
                ]);
            };
            n.readAsArrayBuffer(this.file);
          };
          fa.prototype.getFile = function () {
            return Object(na.b)(this, void 0, Promise, function () {
              return Object(na.d)(this, function (w) {
                switch (w.label) {
                  case 0:
                    return [4, this.sKa];
                  case 1:
                    return (
                      w.aa(),
                      ia.da.isJSWorker ? [2, this.file.path] : [2, this.file]
                    );
                }
              });
            });
          };
          fa.Events = { DOCUMENT_LOADING_PROGRESS: "documentLoadingProgress" };
          return fa;
        })();
        Object(ya.a)(e);
        Object(pa.a)(e);
        Object(pa.b)(e);
        va["default"] = e;
      },
    },
  ]);
}).call(this || window);
