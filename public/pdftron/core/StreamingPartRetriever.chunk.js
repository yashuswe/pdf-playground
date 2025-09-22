/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [11],
    {
      653: function (ya, va, e) {
        e.r(va);
        var na = e(0),
          pa = e(1);
        e.n(pa);
        var oa = e(2),
          ja = e(234);
        ya = e(52);
        var ia = e(136),
          fa = e(383),
          w = e(107),
          z = e(382);
        e = e(567);
        var n = window,
          f = (function () {
            function r(a, y, ba) {
              var ea = -1 === a.indexOf("?") ? "?" : "&";
              switch (y) {
                case w.a.NEVER_CACHE:
                  this.url = ""
                    .concat(a + ea, "_=")
                    .concat(Object(pa.uniqueId)());
                  break;
                default:
                  this.url = a;
              }
              this.Vf = ba;
              this.request = new XMLHttpRequest();
              this.request.open("GET", this.url, !0);
              this.request.setRequestHeader(
                "X-Requested-With",
                "XMLHttpRequest",
              );
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
            r.prototype.start = function (a, y) {
              var ba = this,
                ea = this,
                ha = this.request,
                x;
              ea.cG = 0;
              a &&
                Object.keys(a).forEach(function (ca) {
                  ba.request.setRequestHeader(ca, a[ca]);
                });
              y && (this.request.withCredentials = y);
              this.gP = setInterval(function () {
                var ca = 0 === window.document.URL.indexOf("file:///");
                ca = 200 === ha.status || (ca && 0 === ha.status);
                if (ha.readyState !== z.b.DONE || ca) {
                  try {
                    ha.responseText;
                  } catch (aa) {
                    return;
                  }
                  ea.cG < ha.responseText.length &&
                    (x = ea.vPa()) &&
                    ea.trigger(r.Events.DATA, [x]);
                  0 === ha.readyState &&
                    (clearInterval(ea.gP), ea.trigger(r.Events.DONE));
                } else
                  (clearInterval(ea.gP),
                    ea.trigger(r.Events.DONE, [
                      "Error received return status ".concat(ha.status),
                    ]));
              }, 1e3);
              this.request.send(null);
              this.status = z.a.STARTED;
            };
            r.prototype.vPa = function () {
              var a = this.request,
                y = a.responseText;
              if (0 !== y.length)
                if (this.cG === y.length)
                  (clearInterval(this.gP), this.trigger(r.Events.DONE));
                else
                  return (
                    (y = Math.min(this.cG + 3e6, y.length)),
                    (a = n.yba(a, this.cG, !0, y)),
                    (this.cG = y),
                    a
                  );
            };
            r.prototype.abort = function () {
              clearInterval(this.gP);
              var a = this;
              this.request.onreadystatechange = function () {
                Object(oa.j)("StreamingRequest aborted");
                a.status = z.a.ABORTED;
                return a.trigger(r.Events.ABORTED);
              };
              this.request.abort();
            };
            r.prototype.finish = function () {
              var a = this;
              this.request.onreadystatechange = function () {
                a.status = z.a.SUCCESS;
                return a.trigger(r.Events.DONE);
              };
              this.request.abort();
            };
            r.Events = { DONE: "done", DATA: "data", ABORTED: "aborted" };
            return r;
          })();
        Object(ya.a)(f);
        var b;
        (function (r) {
          r[(r.LOCAL_HEADER = 0)] = "LOCAL_HEADER";
          r[(r.FILE = 1)] = "FILE";
          r[(r.CENTRAL_DIR = 2)] = "CENTRAL_DIR";
        })(b || (b = {}));
        var h = (function (r) {
          function a() {
            var y = r.call(this) || this;
            y.buffer = "";
            y.state = b.LOCAL_HEADER;
            y.J1 = 4;
            y.Zq = null;
            y.TA = ja.c;
            y.dt = {};
            return y;
          }
          Object(na.c)(a, r);
          a.prototype.gPa = function (y) {
            var ba;
            for (y = this.buffer + y; y.length >= this.TA; )
              switch (this.state) {
                case b.LOCAL_HEADER:
                  this.Zq = ba = this.zPa(y.slice(0, this.TA));
                  if (ba.HB !== ja.g)
                    throw Error(
                      "Wrong signature in local header: ".concat(ba.HB),
                    );
                  y = y.slice(this.TA);
                  this.state = b.FILE;
                  this.TA = ba.WT + ba.$w + ba.xE + this.J1;
                  this.trigger(a.Events.HEADER, [ba]);
                  break;
                case b.FILE:
                  this.Zq.name = y.slice(0, this.Zq.$w);
                  this.dt[this.Zq.name] = this.Zq;
                  ba = this.TA - this.J1;
                  var ea = y.slice(this.Zq.$w + this.Zq.xE, ba);
                  this.trigger(a.Events.FILE, [this.Zq.name, ea, this.Zq.zU]);
                  y = y.slice(ba);
                  if (y.slice(0, this.J1) === ja.h)
                    ((this.state = b.LOCAL_HEADER), (this.TA = ja.c));
                  else return ((this.state = b.CENTRAL_DIR), !0);
              }
            this.buffer = y;
            return !1;
          };
          a.Events = { HEADER: "header", FILE: "file" };
          return a;
        })(fa.a);
        Object(ya.a)(h);
        ya = (function (r) {
          function a(y, ba, ea, ha, x) {
            ea = r.call(this, y, ea, ha) || this;
            ea.url = y;
            ea.stream = new f(y, ba);
            ea.bf = new h();
            ea.mga = window.createPromiseCapability();
            ea.bha = {};
            ea.Vf = x;
            return ea;
          }
          Object(na.c)(a, r);
          a.prototype.mH = function (y) {
            var ba = this;
            this.request([this.wn, this.xp, this.vn]);
            this.stream.addEventListener(f.Events.DATA, function (ea) {
              try {
                if (ba.bf.gPa(ea)) return ba.stream.finish();
              } catch (ha) {
                throw (ba.stream.abort(), ba.$v(ha), y(ha), ha);
              }
            });
            this.stream.addEventListener(f.Events.DONE, function (ea) {
              ba.AOa = !0;
              ba.mga.resolve();
              ea && (ba.$v(ea), y(ea));
            });
            this.bf.addEventListener(
              h.Events.HEADER,
              Object(pa.bind)(this.aha, this),
            );
            this.bf.addEventListener(
              h.Events.FILE,
              Object(pa.bind)(this.QPa, this),
            );
            return this.stream.start(this.Vf, this.withCredentials);
          };
          a.prototype.sba = function (y) {
            var ba = this;
            this.mga.promise.then(function () {
              y(Object.keys(ba.bf.dt));
            });
          };
          a.prototype.cu = function () {
            return !0;
          };
          a.prototype.request = function (y) {
            var ba = this;
            this.AOa &&
              y.forEach(function (ea) {
                ba.bha[ea] || ba.LXa(ea);
              });
          };
          a.prototype.aha = function () {};
          a.prototype.abort = function () {
            this.stream && this.stream.abort();
          };
          a.prototype.LXa = function (y) {
            this.trigger(ia.a.Events.PART_READY, [
              { Qb: y, error: "Requested part not found", im: !1, Ii: !1 },
            ]);
          };
          a.prototype.QPa = function (y, ba, ea) {
            this.bha[y] = !0;
            this.trigger(ia.a.Events.PART_READY, [
              { Qb: y, data: ba, im: !1, Ii: !1, error: null, Je: ea },
            ]);
          };
          return a;
        })(ia.a);
        Object(e.a)(ya);
        Object(e.b)(ya);
        va["default"] = ya;
      },
    },
  ]);
}).call(this || window);
