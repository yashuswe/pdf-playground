/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [2],
    {
      649: function (ya, va, e) {
        e.r(va);
        ya = e(52);
        e = e(567);
        var na = (function () {
          function pa(oa) {
            this.buffer = oa;
            this.fileSize =
              null === oa || void 0 === oa ? void 0 : oa.byteLength;
          }
          pa.prototype.getFileData = function (oa) {
            oa(new Uint8Array(this.buffer));
          };
          pa.prototype.getFile = function () {
            return Promise.resolve(null);
          };
          return pa;
        })();
        Object(ya.a)(na);
        Object(e.a)(na);
        Object(e.b)(na);
        va["default"] = na;
      },
    },
  ]);
}).call(this || window);
