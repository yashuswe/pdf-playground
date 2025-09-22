(function () {
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (h) {
    var g = 0;
    return function () {
      return g < h.length ? { done: !1, value: h[g++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (h) {
    return { next: $jscomp.arrayIteratorImpl(h) };
  };
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.ISOLATE_POLYFILLS = !1;
  $jscomp.FORCE_POLYFILL_PROMISE = !1;
  $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (h, g, k) {
          if (h == Array.prototype || h == Object.prototype) return h;
          h[g] = k.value;
          return h;
        };
  $jscomp.getGlobal = function (h) {
    h = [
      "object" == typeof globalThis && globalThis,
      h,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var g = 0; g < h.length; ++g) {
      var k = h[g];
      if (k && k.Math == Math) return k;
    }
    throw Error("Cannot find global object");
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.IS_SYMBOL_NATIVE =
    "function" === typeof Symbol && "symbol" === typeof Symbol("x");
  $jscomp.TRUST_ES6_POLYFILLS =
    !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
  $jscomp.polyfills = {};
  $jscomp.propertyToPolyfillSymbol = {};
  $jscomp.POLYFILL_PREFIX = "$jscp$";
  var $jscomp$lookupPolyfilledValue = function (h, g, k) {
    if (!k || null != h) {
      k = $jscomp.propertyToPolyfillSymbol[g];
      if (null == k) return h[g];
      k = h[k];
      return void 0 !== k ? k : h[g];
    }
  };
  $jscomp.polyfill = function (h, g, k, l) {
    g &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(h, g, k, l)
        : $jscomp.polyfillUnisolated(h, g, k, l));
  };
  $jscomp.polyfillUnisolated = function (h, g, k, l) {
    k = $jscomp.global;
    h = h.split(".");
    for (l = 0; l < h.length - 1; l++) {
      var f = h[l];
      if (!(f in k)) return;
      k = k[f];
    }
    h = h[h.length - 1];
    l = k[h];
    g = g(l);
    g != l &&
      null != g &&
      $jscomp.defineProperty(k, h, {
        configurable: !0,
        writable: !0,
        value: g,
      });
  };
  $jscomp.polyfillIsolated = function (h, g, k, l) {
    var f = h.split(".");
    h = 1 === f.length;
    l = f[0];
    l = !h && l in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var p = 0; p < f.length - 1; p++) {
      var c = f[p];
      if (!(c in l)) return;
      l = l[c];
    }
    f = f[f.length - 1];
    k = $jscomp.IS_SYMBOL_NATIVE && "es6" === k ? l[f] : null;
    g = g(k);
    null != g &&
      (h
        ? $jscomp.defineProperty($jscomp.polyfills, f, {
            configurable: !0,
            writable: !0,
            value: g,
          })
        : g !== k &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[f] &&
            ((k = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[f] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(f)
              : $jscomp.POLYFILL_PREFIX + k + "$" + f)),
          $jscomp.defineProperty(l, $jscomp.propertyToPolyfillSymbol[f], {
            configurable: !0,
            writable: !0,
            value: g,
          })));
  };
  $jscomp.initSymbol = function () {};
  $jscomp.polyfill(
    "Symbol",
    function (h) {
      if (h) return h;
      var g = function (p, c) {
        this.$jscomp$symbol$id_ = p;
        $jscomp.defineProperty(this, "description", {
          configurable: !0,
          writable: !0,
          value: c,
        });
      };
      g.prototype.toString = function () {
        return this.$jscomp$symbol$id_;
      };
      var k = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        l = 0,
        f = function (p) {
          if (this instanceof f)
            throw new TypeError("Symbol is not a constructor");
          return new g(k + (p || "") + "_" + l++, p);
        };
      return f;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Symbol.iterator",
    function (h) {
      if (h) return h;
      h = Symbol("Symbol.iterator");
      for (
        var g =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " ",
            ),
          k = 0;
        k < g.length;
        k++
      ) {
        var l = $jscomp.global[g[k]];
        "function" === typeof l &&
          "function" != typeof l.prototype[h] &&
          $jscomp.defineProperty(l.prototype, h, {
            configurable: !0,
            writable: !0,
            value: function () {
              return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
            },
          });
      }
      return h;
    },
    "es6",
    "es3",
  );
  $jscomp.iteratorPrototype = function (h) {
    h = { next: h };
    h[Symbol.iterator] = function () {
      return this;
    };
    return h;
  };
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var h = {},
        g = Object.create(
          new $jscomp.global.Proxy(h, {
            get: function (k, l, f) {
              return k == h && "q" == l && f == g;
            },
          }),
        );
      return !0 === g.q;
    } catch (k) {
      return !1;
    }
  };
  $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
  $jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy();
  $jscomp.makeIterator = function (h) {
    var g =
      "undefined" != typeof Symbol && Symbol.iterator && h[Symbol.iterator];
    if (g) return g.call(h);
    if ("number" == typeof h.length) return $jscomp.arrayIterator(h);
    throw Error(String(h) + " is not an iterable or ArrayLike");
  };
  $jscomp.owns = function (h, g) {
    return Object.prototype.hasOwnProperty.call(h, g);
  };
  $jscomp.MapEntry = function () {};
  $jscomp.polyfill(
    "Promise",
    function (h) {
      function g() {
        this.batch_ = null;
      }
      function k(c) {
        return c instanceof f
          ? c
          : new f(function (m, q) {
              m(c);
            });
      }
      if (
        h &&
        (!(
          $jscomp.FORCE_POLYFILL_PROMISE ||
          ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
            "undefined" === typeof $jscomp.global.PromiseRejectionEvent)
        ) ||
          !$jscomp.global.Promise ||
          -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))
      )
        return h;
      g.prototype.asyncExecute = function (c) {
        if (null == this.batch_) {
          this.batch_ = [];
          var m = this;
          this.asyncExecuteFunction(function () {
            m.executeBatch_();
          });
        }
        this.batch_.push(c);
      };
      var l = $jscomp.global.setTimeout;
      g.prototype.asyncExecuteFunction = function (c) {
        l(c, 0);
      };
      g.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var c = this.batch_;
          this.batch_ = [];
          for (var m = 0; m < c.length; ++m) {
            var q = c[m];
            c[m] = null;
            try {
              q();
            } catch (u) {
              this.asyncThrow_(u);
            }
          }
        }
        this.batch_ = null;
      };
      g.prototype.asyncThrow_ = function (c) {
        this.asyncExecuteFunction(function () {
          throw c;
        });
      };
      var f = function (c) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var m = this.createResolveAndReject_();
        try {
          c(m.resolve, m.reject);
        } catch (q) {
          m.reject(q);
        }
      };
      f.prototype.createResolveAndReject_ = function () {
        function c(u) {
          return function (v) {
            q || ((q = !0), u.call(m, v));
          };
        }
        var m = this,
          q = !1;
        return { resolve: c(this.resolveTo_), reject: c(this.reject_) };
      };
      f.prototype.resolveTo_ = function (c) {
        if (c === this)
          this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (c instanceof f) this.settleSameAsPromise_(c);
        else {
          a: switch (typeof c) {
            case "object":
              var m = null != c;
              break a;
            case "function":
              m = !0;
              break a;
            default:
              m = !1;
          }
          m ? this.resolveToNonPromiseObj_(c) : this.fulfill_(c);
        }
      };
      f.prototype.resolveToNonPromiseObj_ = function (c) {
        var m = void 0;
        try {
          m = c.then;
        } catch (q) {
          this.reject_(q);
          return;
        }
        "function" == typeof m
          ? this.settleSameAsThenable_(m, c)
          : this.fulfill_(c);
      };
      f.prototype.reject_ = function (c) {
        this.settle_(2, c);
      };
      f.prototype.fulfill_ = function (c) {
        this.settle_(1, c);
      };
      f.prototype.settle_ = function (c, m) {
        if (0 != this.state_)
          throw Error(
            "Cannot settle(" +
              c +
              ", " +
              m +
              "): Promise already settled in state" +
              this.state_,
          );
        this.state_ = c;
        this.result_ = m;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      f.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var c = this;
        l(function () {
          if (c.notifyUnhandledRejection_()) {
            var m = $jscomp.global.console;
            "undefined" !== typeof m && m.error(c.result_);
          }
        }, 1);
      };
      f.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var c = $jscomp.global.CustomEvent,
          m = $jscomp.global.Event,
          q = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof q) return !0;
        "function" === typeof c
          ? (c = new c("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof m
            ? (c = new m("unhandledrejection", { cancelable: !0 }))
            : ((c = $jscomp.global.document.createEvent("CustomEvent")),
              c.initCustomEvent("unhandledrejection", !1, !0, c));
        c.promise = this;
        c.reason = this.result_;
        return q(c);
      };
      f.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var c = 0; c < this.onSettledCallbacks_.length; ++c)
            p.asyncExecute(this.onSettledCallbacks_[c]);
          this.onSettledCallbacks_ = null;
        }
      };
      var p = new g();
      f.prototype.settleSameAsPromise_ = function (c) {
        var m = this.createResolveAndReject_();
        c.callWhenSettled_(m.resolve, m.reject);
      };
      f.prototype.settleSameAsThenable_ = function (c, m) {
        var q = this.createResolveAndReject_();
        try {
          c.call(m, q.resolve, q.reject);
        } catch (u) {
          q.reject(u);
        }
      };
      f.prototype.then = function (c, m) {
        function q(w, z) {
          return "function" == typeof w
            ? function (A) {
                try {
                  u(w(A));
                } catch (B) {
                  v(B);
                }
              }
            : z;
        }
        var u,
          v,
          x = new f(function (w, z) {
            u = w;
            v = z;
          });
        this.callWhenSettled_(q(c, u), q(m, v));
        return x;
      };
      f.prototype.catch = function (c) {
        return this.then(void 0, c);
      };
      f.prototype.callWhenSettled_ = function (c, m) {
        function q() {
          switch (u.state_) {
            case 1:
              c(u.result_);
              break;
            case 2:
              m(u.result_);
              break;
            default:
              throw Error("Unexpected state: " + u.state_);
          }
        }
        var u = this;
        null == this.onSettledCallbacks_
          ? p.asyncExecute(q)
          : this.onSettledCallbacks_.push(q);
        this.isRejectionHandled_ = !0;
      };
      f.resolve = k;
      f.reject = function (c) {
        return new f(function (m, q) {
          q(c);
        });
      };
      f.race = function (c) {
        return new f(function (m, q) {
          for (
            var u = $jscomp.makeIterator(c), v = u.next();
            !v.done;
            v = u.next()
          )
            k(v.value).callWhenSettled_(m, q);
        });
      };
      f.all = function (c) {
        var m = $jscomp.makeIterator(c),
          q = m.next();
        return q.done
          ? k([])
          : new f(function (u, v) {
              function x(A) {
                return function (B) {
                  w[A] = B;
                  z--;
                  0 == z && u(w);
                };
              }
              var w = [],
                z = 0;
              do
                (w.push(void 0),
                  z++,
                  k(q.value).callWhenSettled_(x(w.length - 1), v),
                  (q = m.next()));
              while (!q.done);
            });
      };
      return f;
    },
    "es6",
    "es3",
  );
  $jscomp.checkStringArgs = function (h, g, k) {
    if (null == h)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          k +
          " must not be null or undefined",
      );
    if (g instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          k +
          " must not be a regular expression",
      );
    return h + "";
  };
  (function (h) {
    function g(l) {
      if (k[l]) return k[l].exports;
      var f = (k[l] = { i: l, l: !1, exports: {} });
      h[l].call(f.exports, f, f.exports, g);
      f.l = !0;
      return f.exports;
    }
    var k = {};
    g.m = h;
    g.c = k;
    g.d = function (l, f, p) {
      g.o(l, f) || Object.defineProperty(l, f, { enumerable: !0, get: p });
    };
    g.r = function (l) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(l, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(l, "__esModule", { value: !0 });
    };
    g.t = function (l, f) {
      f & 1 && (l = g(l));
      if (f & 8 || (f & 4 && "object" === typeof l && l && l.__esModule))
        return l;
      var p = Object.create(null);
      g.r(p);
      Object.defineProperty(p, "default", { enumerable: !0, value: l });
      if (f & 2 && "string" != typeof l)
        for (var c in l)
          g.d(
            p,
            c,
            function (m) {
              return l[m];
            }.bind(null, c),
          );
      return p;
    };
    g.n = function (l) {
      var f =
        l && l.__esModule
          ? function () {
              return l["default"];
            }
          : function () {
              return l;
            };
      g.d(f, "a", f);
      return f;
    };
    g.o = function (l, f) {
      return Object.prototype.hasOwnProperty.call(l, f);
    };
    g.p = "/core";
    return g((g.s = 4));
  })([
    function (h, g, k) {
      k.d(g, "a", function () {
        return p;
      });
      k.d(g, "b", function () {
        return c;
      });
      var l = {},
        f = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          wvsQueryParameters: {},
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        },
        p = function (m) {
          return f[m];
        },
        c = function (m, q) {
          var u;
          f[m] = q;
          null === (u = l[m]) || void 0 === u
            ? void 0
            : u.forEach(function (v) {
                v(q);
              });
        };
    },
    function (h, g, k) {
      (function (l) {
        k.d(g, "b", function () {
          return K;
        });
        k.d(g, "a", function () {
          return C;
        });
        k.d(g, "c", function () {
          return G;
        });
        k.d(g, "d", function () {
          return H;
        });
        var f = k(2),
          p = k(7);
        k.n(p);
        var c = window,
          m = (function () {
            return function (d, a) {
              this.fsQ = this.fs_read_counter = 0;
              this.needCallback = !1;
              this.fs_read_total = d;
              this.fsQ = a;
            };
          })();
        c.AsyncFSHack = { readingAsyncFS: 0, readingCounter: 0, readCalls: {} };
        var q = c.Module,
          u = 0,
          v = {},
          x = function (d) {
            c.AsyncFSHack.readingAsyncFS = 1;
            d in c.AsyncFSHack.readCalls ||
              (c.AsyncFSHack.readCalls[d] = new m(
                c.AsyncFSHack.read_total,
                c.AsyncFSHack.q,
              ));
          },
          w = function (d) {
            var a = c.AsyncFSHack.readCalls[d];
            ++a.fs_read_counter;
            a.fs_read_counter >= a.fs_read_total &&
              (a.needCallback
                ? q._finish_do_call_operation(a.fsQ)
                : (c.AsyncFSHack.readingAsyncFS = 0),
              delete c.AsyncFSHack.readCalls[d]);
          },
          z = function (d, a, b, e, n, r, t) {
            this.lruList = [];
            this.chunkMap = {};
            this.chunkReader = {};
            this.chunkMap[a] = n;
            this.length = a;
            this.cacheDataSize = e;
            this.url = d;
            this.customHeaders = r;
            this.withCredentials = t;
            this.chunkSize = b;
          };
        z.prototype = {
          lruUpdate: function (d) {
            var a = this.lruList.lastIndexOf(d);
            0 <= a && this.lruList.splice(a, 1);
            this.lruList.push(d);
          },
          downloadChunk: function (d, a) {
            var b = !1;
            d in this.chunkReader || ((this.chunkReader[d] = []), (b = !0));
            a && this.chunkReader[d].push(a);
            if (b) {
              a = Math.min(d + this.chunkSize, this.length) - 1;
              var e = new XMLHttpRequest();
              e.open("GET", this.url, !0);
              e.responseType = "arraybuffer";
              e.setRequestHeader("Range", ["bytes=", d, "-", a].join(""));
              this.withCredentials &&
                (e.withCredentials = this.withCredentials);
              if (this.customHeaders)
                for (var n in this.customHeaders)
                  e.setRequestHeader(n, this.customHeaders[n]);
              e.send();
              var r = this;
              e.onload = function () {
                if (200 === e.status || 206 === e.status) {
                  var t = new Int8Array(e.response);
                  r.writeChunk(t, d);
                } else
                  (window.parent.parentWarn(
                    "Failed to load data from".concat(r.url),
                  ),
                    (t = new Int8Array(0)));
                for (var D = r.chunkReader[d], E = 0; E < D.length; E++)
                  D[E](t);
                delete r.chunkReader[d];
              };
            }
          },
          hadChunk: function (d) {
            return d in this.chunkMap;
          },
          hasChunk: function (d) {
            return this.chunkMap[d];
          },
          getCacheData: function () {
            return this.chunkMap[this.length];
          },
          updateCache: function (d) {
            for (var a = 0; a < d.length; a++) {
              var b = d[a];
              this.hadChunk(b) &&
                (this.hasChunk(b) ? this.lruUpdate(b) : this.downloadChunk(b));
            }
          },
          wrapChunkRetrieval: function (d, a, b) {
            this.downloadChunk(d, function (e) {
              b(e, a);
            });
          },
          downloadChunks: function (d, a) {
            for (
              var b = d.length,
                e = Array(b),
                n = 0,
                r = function (D, E) {
                  e[E] = D;
                  ++n;
                  n === b && a(e);
                },
                t = 0;
              t < b;
              ++t
            )
              this.wrapChunkRetrieval(d[t][0], t, r);
          },
          readFromCache: function (d, a, b) {
            var e = [],
              n = 0,
              r = Math.floor(a / this.chunkSize) * this.chunkSize,
              t = a % this.chunkSize;
            a = this.chunkSize - t;
            a = a > b ? b : a;
            this.chunkMap[r]
              ? ((t = this.chunkMap[r].subarray(t, t + a)),
                d.set(t),
                this.lruUpdate(r))
              : this.hadChunk(r)
                ? e.push([r, t, a, n])
                : ((t = new Int8Array(a)), d.set(t));
            for (b -= a; 0 < b; )
              ((n += a),
                (r += this.chunkSize),
                (a = this.chunkSize > b ? b : this.chunkSize),
                this.chunkMap[r]
                  ? ((t = this.chunkMap[r].subarray(0, a)),
                    d.set(t, n),
                    this.lruUpdate(r))
                  : this.hadChunk(r)
                    ? e.push([r, 0, a, n])
                    : ((t = new Int8Array(a)), d.set(t, n)),
                (b -= a));
            return e;
          },
          writeChunk: function (d, a, b) {
            Object(f.a)(this.lruList, this.chunkMap, this.chunkSize, d, a, b);
            this.lruUpdate(a);
          },
        };
        var A = function (d) {
          this.chunkStorage = d;
          this.position = 0;
          this.length = this.chunkStorage.length;
        };
        A.prototype = {
          read: function (d, a, b, e) {
            var n = e + b <= this.length,
              r = n ? b : this.length - e,
              t = c.AsyncFSHack.readingCounter.toString();
            if (0 < r) {
              x(t);
              var D = d.subarray(a, a + r);
              var E = this.chunkStorage.readFromCache(D, e, r);
              E.length
                ? ((c.AsyncFSHack.readCalls[t].needCallback = !0),
                  this.chunkStorage.downloadChunks(E, function (M) {
                    for (var I = 0; I < M.length; ++I) {
                      var J = E[I],
                        N = M[I].subarray(J[1], J[1] + J[2]);
                      D.set(N, J[3]);
                    }
                    w(t);
                  }))
                : n && w(t);
              e += r;
            } else r = 0;
            if (!n) {
              x(t);
              a += r;
              if ((b -= r)) {
                n = this.chunkStorage.getCacheData();
                b > n.length && (b = n.length);
                var L = e - this.length;
                b -= L;
                d = d.subarray(a, a + b);
                a = n.subarray(L, L + b);
                d.set(a);
              }
              (E && E.length) || w(t);
              e += b;
              r += b;
            }
            this.position = e;
            return r;
          },
          write: function (d, a, b, e) {
            var n = e + b <= this.length,
              r = e + b <= this.length ? b : this.length - e;
            if (0 < r) {
              var t = d.subarray(a, a + r),
                D = e % this.chunkStorage.chunkSize;
              this.chunkStorage.writeChunk(t, e - D, D);
              e += r;
            } else r = 0;
            if (!n) {
              t = a + r;
              if ((b -= r))
                ((a = this.chunkStorage.getCacheData()),
                  b > a.length && (b = a.length),
                  (n = e - this.length),
                  (b -= n),
                  (t = d.subarray(t, t + b)),
                  a.subarray(n, n + b).set(t));
              e += b;
              r += b;
            }
            this.position = e;
            return r;
          },
          seek: function (d) {
            this.position = d;
          },
          close: function () {
            this.chunkStorage = null;
          },
          getPos: function () {
            return this.position;
          },
          getTotalSize: function () {
            return this.length + this.chunkStorage.cacheDataSize;
          },
        };
        var B = function (d) {
          this.file = d;
          this.filePosition = 0;
          this.fileLength = d.size;
          this.readerPool = [];
        };
        B.prototype = {
          readFromFile: function (d, a, b) {
            var e = this.readerPool.length
              ? this.readerPool.pop()
              : new FileReader();
            var n = this;
            e.onload = function () {
              var r = new Int8Array(e.result);
              n.readerPool.push(e);
              b(r);
            };
            e.readAsArrayBuffer(this.file.slice(a, a + d));
          },
          read: function (d, a, b, e) {
            b = e + b <= this.fileLength ? b : this.fileLength - e;
            if (0 < b) {
              var n = c.AsyncFSHack.readingCounter.toString();
              x(n);
              var r = d.subarray(a, a + b);
              c.AsyncFSHack.readCalls[n].needCallback = !0;
              this.readFromFile(b, e, function (t) {
                r.set(t);
                w(n);
              });
              this.filePosition = e + b;
            }
            return b;
          },
          seek: function (d) {
            this.filePosition = d;
          },
          close: function () {
            this.reader = this.file = null;
          },
          getPos: function () {
            return this.filePosition;
          },
          getTotalSize: function () {
            return this.fileLength;
          },
        };
        var F = {
            open: function (d) {
              var a = d.path.slice(1);
              d.provider = q.docs[a].chunkStorage
                ? new A(q.docs[a].chunkStorage)
                : new B(q.docs[a]);
            },
            close: function (d) {
              d.provider.close();
            },
            read: function (d, a, b, e, n) {
              return d.provider.read(a, b, e, n);
            },
            llseek: function (d, a, b) {
              d = d.provider;
              1 === b
                ? (a += d.getPos())
                : 2 === b && (a = d.getTotalSize() + a);
              if (0 > a) throw new c.FS.ErrnoError(l.ERRNO_CODES.EINVAL);
              d.seek(a);
              return a;
            },
            write: function (d, a, b, e, n) {
              return e ? d.provider.write(a, b, e, n) : 0;
            },
          },
          y = function (d) {
            if (!v[d]) {
              var a = c.FS.makedev(3, 5);
              c.FS.registerDevice(a, F);
              c.FS.mkdev(d, 511, a);
              v[d] = !0;
            }
          },
          K = function (d, a, b, e, n) {
            var r = "docdev".concat(++u);
            y(r);
            var t = Math.ceil((a + b - 1) / b / 8),
              D = new Int8Array(new ArrayBuffer(t));
            d = new z(d, a, b, t, D, e, n);
            q.docs[r] = { chunkStorage: d };
            return r;
          },
          C = function (d) {
            var a = "docdev".concat(++u);
            y(a);
            q.docs[a] = d;
            return a;
          },
          G = function (d) {
            c.FS.unlink(d);
            q.docs[d] && delete q.docs[d];
          },
          H = function (d) {
            var a = Object.prototype.toString.call(d);
            return (
              "object" === typeof d &&
              null !== d &&
              ("[object File]" === a || "[object Blob]" === a)
            );
          };
      }).call(this, k(6));
    },
    function (h, g, k) {
      function l(f, p, c, m, q, u) {
        u = u || 0;
        var v = p[q],
          x = m.length,
          w = 100 <= f.length && !v;
        x !== c || m.buffer.byteLength !== x
          ? (w
              ? ((f = f.shift()),
                (v = p[f]),
                v.length < c && (v = new Int8Array(c)),
                (p[f] = null))
              : (v = v ? p[q] : new Int8Array(c)),
            v.subarray(u, u + x).set(m),
            (m = v))
          : w && ((f = f.shift()), (p[f] = null));
        p[q] = m;
      }
      k.d(g, "a", function () {
        return l;
      });
      k(3);
    },
    function (h, g, k) {
      k.d(g, "a", function () {
        return f;
      });
      var l = k(0),
        f = function (p, c) {
          Object(l.a)("disableLogs") ||
            (c ? console.warn("".concat(p, ": ").concat(c)) : console.warn(p));
        };
    },
    function (h, g, k) {
      h.exports = k(5);
    },
    function (h, g, k) {
      function l(a) {
        "@babel/helpers - typeof";
        return (
          (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (b) {
                  return typeof b;
                }
              : function (b) {
                  return b &&
                    "function" == typeof Symbol &&
                    b.constructor === Symbol &&
                    b !== Symbol.prototype
                    ? "symbol"
                    : typeof b;
                }),
          l(a)
        );
      }
      k.r(g);
      var f = k(1),
        p = window,
        c;
      p.Module.onRuntimeInitialized = function () {
        m = !0;
        u || (C.handleMessage({ action: "workerLoaded", data: {} }), (u = !0));
        C.sendTestResponse();
        p.PThread.receiveObjectTransfer = function () {
          var a = p.Module.GetNextResponseMessage();
          p.getThreadedWasmWorker().handleMessage(a);
          p.Module.PopNextResponseMessage();
        };
      };
      p.Module.locateFile = function (a) {
        return c + a;
      };
      p.Module.INITIAL_MEMORY = 100663296;
      var m = !1,
        q = !1,
        u = !1,
        v = 1,
        x = function (a) {
          if ("object" === l(a) && null !== a)
            if ("undefined" !== typeof a.byteLength) {
              var b = "mainThreadArrayBuffer".concat(v);
              v++;
              a = new Uint8Array(a);
              p.FS.writeFile(b, a);
              a = { handle: b, isArrayBufferRef: !0 };
            } else for (b in a) a.hasOwnProperty(b) && (a[b] = x(a[b]));
          return a;
        },
        w = function (a) {
          if ("object" === l(a) && null !== a)
            if (a.isArrayBufferRef) {
              var b = p.FS.readFile(a.handle, { encoding: "binary" });
              p.FS.unlink(a.handle);
              a = b.buffer;
            } else if (a.constructor === Uint8Array)
              a = new Uint8Array(a).buffer;
            else for (b in a) a.hasOwnProperty(b) && (a[b] = w(a[b]));
          return a;
        },
        z = 0,
        A = {},
        B = {},
        F = {},
        y = {},
        K = function (a) {
          var b = a.action,
            e = a.data,
            n = a.callbackId;
          if ("NewDoc" === b && e)
            ((b = e.value),
              "url" === e.type
                ? ((b = Object(f.b)(
                    b.url,
                    b.size,
                    e.chunkSize,
                    b.customHeaders,
                    b.withCredentials,
                  )),
                  (B[n] = b),
                  (e.value.docDevId = b))
                : Object(f.d)(b) &&
                  ((b = Object(f.a)(b)), (B[n] = b), (e.value = b)));
          else if (("SaveDoc" !== b && "SaveDocFromFixedElements" !== b) || !e)
            "GetCanvas" === b && e
              ? ((n = e.docId),
                n in y &&
                  ((b = y[n]),
                  b in p.Module.docs &&
                    ((b = p.Module.docs[b]),
                    "chunkStorage" in b &&
                      ((e = p.Module.GetRequiredChunkOffsetArray(
                        n,
                        e.pageIndex + 1,
                      )),
                      e.length && b.chunkStorage.updateCache(e)))))
              : "DeleteDocument" === b &&
                e &&
                ((e = e.docId), e in y && (F[n] = e));
          else {
            b = e.docId;
            var r = e.finishedWithDocument,
              t = "docFilePath".concat(z);
            A[n] = { filePath: t, docId: b, finishedWithDocument: r };
            z++;
            e.filePath = t;
          }
          p.Module.HandleMessage(x(a));
        },
        C;
      p.MainThreadLabel = !0;
      p.getThreadedWasmWorker = function () {
        return C;
      };
      var G = function (a) {
        window.parent.loadThreadedBackend(
          a,
          { "Wasm.wasm": 1e7, "Wasm.js": 15e4 },
          window,
        );
        this.eventListeners = [];
      };
      G.prototype = {
        addEventListener: function (a, b) {
          if ("message" === a) this.eventListeners.push(b);
          else
            throw Error(
              "event type ".concat(a, " is not supported by WasmWorker."),
            );
        },
        removeEventListener: function (a, b) {
          "message" === a &&
            (this.eventListeners = this.eventListeners.filter(function (e) {
              return e !== b;
            }));
        },
        sendTestResponse: function () {
          m &&
            q &&
            (this.handleMessage({
              action: "test",
              data: { supportTypedArray: !0, supportTransfers: !0 },
            }),
            (this.postMessage = K));
        },
        postMessage: function (a) {
          if ("test" === a.action) ((q = !0), this.sendTestResponse());
          else throw Error("Need to do handshake first!");
        },
        handleMessage: function (a) {
          var b = a.callbackId,
            e = a.data;
          if (b in B)
            (e && e.docId ? (y[e.docId] = B[b]) : Object(f.c)(B[b]),
              delete B[b]);
          else if (b in A) {
            if (!a.hasOwnProperty("error")) {
              var n = A[b].filePath,
                r = p.FS.readFile(n, { encoding: "binary" });
              e.fileData = r.buffer;
              e = A[b].docId;
              e in y && (Object(f.c)(y[e]), delete y[e]);
              e && !A[b].finishedWithDocument ? (y[e] = n) : p.FS.unlink(n);
            }
            delete A[b];
          } else
            b in F &&
              ((n = F[b]),
              n in y && (Object(f.c)(y[n]), delete y[n]),
              delete F[b]);
          a = w(a);
          window.parent.postMessage(a);
        },
        reset: function () {
          C = null;
          u = q = m = !1;
        },
      };
      var H = (function () {
          var a = {},
            b = new Promise(function (e, n) {
              a.resolve = e;
              a.reject = n;
            });
          a.promise = b;
          return a;
        })(),
        d = function (a) {
          "object" === l(a.data) &&
            "action" in a.data &&
            "workerLoaded" === a.data.action &&
            (H.resolve(C), C.removeEventListener("message", d));
        };
      window.addEventListener("message", function (a) {
        var b = a.data;
        a.origin === window.location.origin && "loadWasmWorker" === b.action
          ? ((c = b.workerFolder),
            (C = new G("".concat(b.wasmSource, "PDFNetThreaded"))),
            u || C.addEventListener("message", d))
          : a.origin === window.location.origin && "dispose" === b.action
            ? (C.removeEventListener("message", d), C.reset())
            : C.postMessage(b);
      });
      p.getWasmWorkerPromise = function () {
        return H.promise;
      };
    },
    function (h, g) {
      g = (function () {
        return this;
      })();
      try {
        g = g || new Function("return this")();
      } catch (k) {
        "object" === typeof window && (g = window);
      }
      h.exports = g;
    },
    function (h, g) {
      window.Module = { chunkMax: 100, docs: {} };
    },
  ]);
}).call(this || window);
