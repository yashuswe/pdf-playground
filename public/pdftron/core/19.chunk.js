/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [19],
    {
      662: function (ya) {
        (function () {
          ya.exports = {
            Pa: function () {
              function va(h, r) {
                this.scrollLeft = h;
                this.scrollTop = r;
              }
              function e(h) {
                if (
                  null === h ||
                  "object" !== typeof h ||
                  void 0 === h.behavior ||
                  "auto" === h.behavior ||
                  "instant" === h.behavior
                )
                  return !0;
                if ("object" === typeof h && "smooth" === h.behavior) return !1;
                throw new TypeError(
                  "behavior member of ScrollOptions " +
                    h.behavior +
                    " is not a valid value for enumeration ScrollBehavior.",
                );
              }
              function na(h, r) {
                if ("Y" === r) return h.clientHeight + b < h.scrollHeight;
                if ("X" === r) return h.clientWidth + b < h.scrollWidth;
              }
              function pa(h, r) {
                h = fa.getComputedStyle(h, null)["overflow" + r];
                return "auto" === h || "scroll" === h;
              }
              function oa(h) {
                var r = na(h, "Y") && pa(h, "Y");
                h = na(h, "X") && pa(h, "X");
                return r || h;
              }
              function ja(h) {
                var r = (f() - h.startTime) / 468;
                var a = 0.5 * (1 - Math.cos(Math.PI * (1 < r ? 1 : r)));
                r = h.Fr + (h.x - h.Fr) * a;
                a = h.SH + (h.y - h.SH) * a;
                h.method.call(h.HP, r, a);
                (r === h.x && a === h.y) ||
                  fa.requestAnimationFrame(ja.bind(fa, h));
              }
              function ia(h, r, a) {
                var y = f();
                if (h === w.body) {
                  var ba = fa;
                  var ea = fa.scrollX || fa.pageXOffset;
                  h = fa.scrollY || fa.pageYOffset;
                  var ha = n.scroll;
                } else
                  ((ba = h), (ea = h.scrollLeft), (h = h.scrollTop), (ha = va));
                ja({
                  HP: ba,
                  method: ha,
                  startTime: y,
                  Fr: ea,
                  SH: h,
                  x: r,
                  y: a,
                });
              }
              var fa = window,
                w = document;
              if (
                !("scrollBehavior" in w.documentElement.style && !0 !== fa.h0a)
              ) {
                var z = fa.HTMLElement || fa.Element,
                  n = {
                    scroll: fa.scroll || fa.scrollTo,
                    scrollBy: fa.scrollBy,
                    k$: z.prototype.scroll || va,
                    scrollIntoView: z.prototype.scrollIntoView,
                  },
                  f =
                    fa.performance && fa.performance.now
                      ? fa.performance.now.bind(fa.performance)
                      : Date.now,
                  b = RegExp("MSIE |Trident/|Edge/").test(
                    fa.navigator.userAgent,
                  )
                    ? 1
                    : 0;
                fa.scroll = fa.scrollTo = function (h, r) {
                  void 0 !== h &&
                    (!0 === e(h)
                      ? n.scroll.call(
                          fa,
                          void 0 !== h.left
                            ? h.left
                            : "object" !== typeof h
                              ? h
                              : fa.scrollX || fa.pageXOffset,
                          void 0 !== h.top
                            ? h.top
                            : void 0 !== r
                              ? r
                              : fa.scrollY || fa.pageYOffset,
                        )
                      : ia.call(
                          fa,
                          w.body,
                          void 0 !== h.left
                            ? ~~h.left
                            : fa.scrollX || fa.pageXOffset,
                          void 0 !== h.top
                            ? ~~h.top
                            : fa.scrollY || fa.pageYOffset,
                        ));
                };
                fa.scrollBy = function (h, r) {
                  void 0 !== h &&
                    (e(h)
                      ? n.scrollBy.call(
                          fa,
                          void 0 !== h.left
                            ? h.left
                            : "object" !== typeof h
                              ? h
                              : 0,
                          void 0 !== h.top ? h.top : void 0 !== r ? r : 0,
                        )
                      : ia.call(
                          fa,
                          w.body,
                          ~~h.left + (fa.scrollX || fa.pageXOffset),
                          ~~h.top + (fa.scrollY || fa.pageYOffset),
                        ));
                };
                z.prototype.scroll = z.prototype.scrollTo = function (h, r) {
                  if (void 0 !== h)
                    if (!0 === e(h)) {
                      if ("number" === typeof h && void 0 === r)
                        throw new SyntaxError("Value could not be converted");
                      n.k$.call(
                        this,
                        void 0 !== h.left
                          ? ~~h.left
                          : "object" !== typeof h
                            ? ~~h
                            : this.scrollLeft,
                        void 0 !== h.top
                          ? ~~h.top
                          : void 0 !== r
                            ? ~~r
                            : this.scrollTop,
                      );
                    } else
                      ((r = h.left),
                        (h = h.top),
                        ia.call(
                          this,
                          this,
                          "undefined" === typeof r ? this.scrollLeft : ~~r,
                          "undefined" === typeof h ? this.scrollTop : ~~h,
                        ));
                };
                z.prototype.scrollBy = function (h, r) {
                  void 0 !== h &&
                    (!0 === e(h)
                      ? n.k$.call(
                          this,
                          void 0 !== h.left
                            ? ~~h.left + this.scrollLeft
                            : ~~h + this.scrollLeft,
                          void 0 !== h.top
                            ? ~~h.top + this.scrollTop
                            : ~~r + this.scrollTop,
                        )
                      : this.scroll({
                          left: ~~h.left + this.scrollLeft,
                          top: ~~h.top + this.scrollTop,
                          behavior: h.behavior,
                        }));
                };
                z.prototype.scrollIntoView = function (h) {
                  if (!0 === e(h))
                    n.scrollIntoView.call(this, void 0 === h ? !0 : h);
                  else {
                    for (h = this; h !== w.body && !1 === oa(h); )
                      h = h.parentNode || h.host;
                    var r = h.getBoundingClientRect(),
                      a = this.getBoundingClientRect();
                    h !== w.body
                      ? (ia.call(
                          this,
                          h,
                          h.scrollLeft + a.left - r.left,
                          h.scrollTop + a.top - r.top,
                        ),
                        "fixed" !== fa.getComputedStyle(h).position &&
                          fa.scrollBy({
                            left: r.left,
                            top: r.top,
                            behavior: "smooth",
                          }))
                      : fa.scrollBy({
                          left: a.left,
                          top: a.top,
                          behavior: "smooth",
                        });
                  }
                };
              }
            },
          };
        })();
      },
    },
  ]);
}).call(this || window);
