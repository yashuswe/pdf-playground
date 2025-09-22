(function () {
  /*
 @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (h) {
    var l = 0;
    return function () {
      return l < h.length ? { done: !1, value: h[l++] } : { done: !0 };
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
      : function (h, l, k) {
          if (h == Array.prototype || h == Object.prototype) return h;
          h[l] = k.value;
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
    for (var l = 0; l < h.length; ++l) {
      var k = h[l];
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
  var $jscomp$lookupPolyfilledValue = function (h, l, k) {
    if (!k || null != h) {
      k = $jscomp.propertyToPolyfillSymbol[l];
      if (null == k) return h[l];
      k = h[k];
      return void 0 !== k ? k : h[l];
    }
  };
  $jscomp.polyfill = function (h, l, k, f) {
    l &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(h, l, k, f)
        : $jscomp.polyfillUnisolated(h, l, k, f));
  };
  $jscomp.polyfillUnisolated = function (h, l, k, f) {
    k = $jscomp.global;
    h = h.split(".");
    for (f = 0; f < h.length - 1; f++) {
      var a = h[f];
      if (!(a in k)) return;
      k = k[a];
    }
    h = h[h.length - 1];
    f = k[h];
    l = l(f);
    l != f &&
      null != l &&
      $jscomp.defineProperty(k, h, {
        configurable: !0,
        writable: !0,
        value: l,
      });
  };
  $jscomp.polyfillIsolated = function (h, l, k, f) {
    var a = h.split(".");
    h = 1 === a.length;
    f = a[0];
    f = !h && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var n = 0; n < a.length - 1; n++) {
      var d = a[n];
      if (!(d in f)) return;
      f = f[d];
    }
    a = a[a.length - 1];
    k = $jscomp.IS_SYMBOL_NATIVE && "es6" === k ? f[a] : null;
    l = l(k);
    null != l &&
      (h
        ? $jscomp.defineProperty($jscomp.polyfills, a, {
            configurable: !0,
            writable: !0,
            value: l,
          })
        : l !== k &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[a] &&
            ((k = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[a] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(a)
              : $jscomp.POLYFILL_PREFIX + k + "$" + a)),
          $jscomp.defineProperty(f, $jscomp.propertyToPolyfillSymbol[a], {
            configurable: !0,
            writable: !0,
            value: l,
          })));
  };
  $jscomp.initSymbol = function () {};
  $jscomp.polyfill(
    "Symbol",
    function (h) {
      if (h) return h;
      var l = function (n, d) {
        this.$jscomp$symbol$id_ = n;
        $jscomp.defineProperty(this, "description", {
          configurable: !0,
          writable: !0,
          value: d,
        });
      };
      l.prototype.toString = function () {
        return this.$jscomp$symbol$id_;
      };
      var k = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        f = 0,
        a = function (n) {
          if (this instanceof a)
            throw new TypeError("Symbol is not a constructor");
          return new l(k + (n || "") + "_" + f++, n);
        };
      return a;
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
        var l =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " ",
            ),
          k = 0;
        k < l.length;
        k++
      ) {
        var f = $jscomp.global[l[k]];
        "function" === typeof f &&
          "function" != typeof f.prototype[h] &&
          $jscomp.defineProperty(f.prototype, h, {
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
  $jscomp.makeIterator = function (h) {
    var l =
      "undefined" != typeof Symbol && Symbol.iterator && h[Symbol.iterator];
    if (l) return l.call(h);
    if ("number" == typeof h.length) return $jscomp.arrayIterator(h);
    throw Error(String(h) + " is not an iterable or ArrayLike");
  };
  $jscomp.arrayFromIterator = function (h) {
    for (var l, k = []; !(l = h.next()).done; ) k.push(l.value);
    return k;
  };
  $jscomp.arrayFromIterable = function (h) {
    return h instanceof Array
      ? h
      : $jscomp.arrayFromIterator($jscomp.makeIterator(h));
  };
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var h = {},
        l = Object.create(
          new $jscomp.global.Proxy(h, {
            get: function (k, f, a) {
              return k == h && "q" == f && a == l;
            },
          }),
        );
      return !0 === l.q;
    } catch (k) {
      return !1;
    }
  };
  $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
  $jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy();
  $jscomp.owns = function (h, l) {
    return Object.prototype.hasOwnProperty.call(h, l);
  };
  $jscomp.polyfill(
    "WeakMap",
    function (h) {
      function l() {
        if (!h || !Object.seal) return !1;
        try {
          var e = Object.seal({}),
            g = Object.seal({}),
            q = new h([
              [e, 2],
              [g, 3],
            ]);
          if (2 != q.get(e) || 3 != q.get(g)) return !1;
          q.delete(e);
          q.set(g, 4);
          return !q.has(e) && 4 == q.get(g);
        } catch (t) {
          return !1;
        }
      }
      function k() {}
      function f(e) {
        var g = typeof e;
        return ("object" === g && null !== e) || "function" === g;
      }
      function a(e) {
        if (!$jscomp.owns(e, d)) {
          var g = new k();
          $jscomp.defineProperty(e, d, { value: g });
        }
      }
      function n(e) {
        if (!$jscomp.ISOLATE_POLYFILLS) {
          var g = Object[e];
          g &&
            (Object[e] = function (q) {
              if (q instanceof k) return q;
              Object.isExtensible(q) && a(q);
              return g(q);
            });
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (h && $jscomp.ES6_CONFORMANCE) return h;
      } else if (l()) return h;
      var d = "$jscomp_hidden_" + Math.random();
      n("freeze");
      n("preventExtensions");
      n("seal");
      var m = 0,
        b = function (e) {
          this.id_ = (m += Math.random() + 1).toString();
          if (e) {
            e = $jscomp.makeIterator(e);
            for (var g; !(g = e.next()).done; )
              ((g = g.value), this.set(g[0], g[1]));
          }
        };
      b.prototype.set = function (e, g) {
        if (!f(e)) throw Error("Invalid WeakMap key");
        a(e);
        if (!$jscomp.owns(e, d)) throw Error("WeakMap key fail: " + e);
        e[d][this.id_] = g;
        return this;
      };
      b.prototype.get = function (e) {
        return f(e) && $jscomp.owns(e, d) ? e[d][this.id_] : void 0;
      };
      b.prototype.has = function (e) {
        return f(e) && $jscomp.owns(e, d) && $jscomp.owns(e[d], this.id_);
      };
      b.prototype.delete = function (e) {
        return f(e) && $jscomp.owns(e, d) && $jscomp.owns(e[d], this.id_)
          ? delete e[d][this.id_]
          : !1;
      };
      return b;
    },
    "es6",
    "es3",
  );
  $jscomp.MapEntry = function () {};
  $jscomp.polyfill(
    "Map",
    function (h) {
      function l() {
        if (
          $jscomp.ASSUME_NO_NATIVE_MAP ||
          !h ||
          "function" != typeof h ||
          !h.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var b = Object.seal({ x: 4 }),
            e = new h($jscomp.makeIterator([[b, "s"]]));
          if (
            "s" != e.get(b) ||
            1 != e.size ||
            e.get({ x: 4 }) ||
            e.set({ x: 4 }, "t") != e ||
            2 != e.size
          )
            return !1;
          var g = e.entries(),
            q = g.next();
          if (q.done || q.value[0] != b || "s" != q.value[1]) return !1;
          q = g.next();
          return q.done ||
            4 != q.value[0].x ||
            "t" != q.value[1] ||
            !g.next().done
            ? !1
            : !0;
        } catch (t) {
          return !1;
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (h && $jscomp.ES6_CONFORMANCE) return h;
      } else if (l()) return h;
      var k = new WeakMap(),
        f = function (b) {
          this.data_ = {};
          this.head_ = d();
          this.size = 0;
          if (b) {
            b = $jscomp.makeIterator(b);
            for (var e; !(e = b.next()).done; )
              ((e = e.value), this.set(e[0], e[1]));
          }
        };
      f.prototype.set = function (b, e) {
        b = 0 === b ? 0 : b;
        var g = a(this, b);
        g.list || (g.list = this.data_[g.id] = []);
        g.entry
          ? (g.entry.value = e)
          : ((g.entry = {
              next: this.head_,
              previous: this.head_.previous,
              head: this.head_,
              key: b,
              value: e,
            }),
            g.list.push(g.entry),
            (this.head_.previous.next = g.entry),
            (this.head_.previous = g.entry),
            this.size++);
        return this;
      };
      f.prototype.delete = function (b) {
        b = a(this, b);
        return b.entry && b.list
          ? (b.list.splice(b.index, 1),
            b.list.length || delete this.data_[b.id],
            (b.entry.previous.next = b.entry.next),
            (b.entry.next.previous = b.entry.previous),
            (b.entry.head = null),
            this.size--,
            !0)
          : !1;
      };
      f.prototype.clear = function () {
        this.data_ = {};
        this.head_ = this.head_.previous = d();
        this.size = 0;
      };
      f.prototype.has = function (b) {
        return !!a(this, b).entry;
      };
      f.prototype.get = function (b) {
        return (b = a(this, b).entry) && b.value;
      };
      f.prototype.entries = function () {
        return n(this, function (b) {
          return [b.key, b.value];
        });
      };
      f.prototype.keys = function () {
        return n(this, function (b) {
          return b.key;
        });
      };
      f.prototype.values = function () {
        return n(this, function (b) {
          return b.value;
        });
      };
      f.prototype.forEach = function (b, e) {
        for (var g = this.entries(), q; !(q = g.next()).done; )
          ((q = q.value), b.call(e, q[1], q[0], this));
      };
      f.prototype[Symbol.iterator] = f.prototype.entries;
      var a = function (b, e) {
          var g = e && typeof e;
          "object" == g || "function" == g
            ? k.has(e)
              ? (g = k.get(e))
              : ((g = "" + ++m), k.set(e, g))
            : (g = "p_" + e);
          var q = b.data_[g];
          if (q && $jscomp.owns(b.data_, g))
            for (b = 0; b < q.length; b++) {
              var t = q[b];
              if ((e !== e && t.key !== t.key) || e === t.key)
                return { id: g, list: q, index: b, entry: t };
            }
          return { id: g, list: q, index: -1, entry: void 0 };
        },
        n = function (b, e) {
          var g = b.head_;
          return $jscomp.iteratorPrototype(function () {
            if (g) {
              for (; g.head != b.head_; ) g = g.previous;
              for (; g.next != g.head; )
                return ((g = g.next), { done: !1, value: e(g) });
              g = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        d = function () {
          var b = {};
          return (b.previous = b.next = b.head = b);
        },
        m = 0;
      return f;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Promise",
    function (h) {
      function l() {
        this.batch_ = null;
      }
      function k(d) {
        return d instanceof a
          ? d
          : new a(function (m, b) {
              m(d);
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
      l.prototype.asyncExecute = function (d) {
        if (null == this.batch_) {
          this.batch_ = [];
          var m = this;
          this.asyncExecuteFunction(function () {
            m.executeBatch_();
          });
        }
        this.batch_.push(d);
      };
      var f = $jscomp.global.setTimeout;
      l.prototype.asyncExecuteFunction = function (d) {
        f(d, 0);
      };
      l.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var d = this.batch_;
          this.batch_ = [];
          for (var m = 0; m < d.length; ++m) {
            var b = d[m];
            d[m] = null;
            try {
              b();
            } catch (e) {
              this.asyncThrow_(e);
            }
          }
        }
        this.batch_ = null;
      };
      l.prototype.asyncThrow_ = function (d) {
        this.asyncExecuteFunction(function () {
          throw d;
        });
      };
      var a = function (d) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var m = this.createResolveAndReject_();
        try {
          d(m.resolve, m.reject);
        } catch (b) {
          m.reject(b);
        }
      };
      a.prototype.createResolveAndReject_ = function () {
        function d(e) {
          return function (g) {
            b || ((b = !0), e.call(m, g));
          };
        }
        var m = this,
          b = !1;
        return { resolve: d(this.resolveTo_), reject: d(this.reject_) };
      };
      a.prototype.resolveTo_ = function (d) {
        if (d === this)
          this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (d instanceof a) this.settleSameAsPromise_(d);
        else {
          a: switch (typeof d) {
            case "object":
              var m = null != d;
              break a;
            case "function":
              m = !0;
              break a;
            default:
              m = !1;
          }
          m ? this.resolveToNonPromiseObj_(d) : this.fulfill_(d);
        }
      };
      a.prototype.resolveToNonPromiseObj_ = function (d) {
        var m = void 0;
        try {
          m = d.then;
        } catch (b) {
          this.reject_(b);
          return;
        }
        "function" == typeof m
          ? this.settleSameAsThenable_(m, d)
          : this.fulfill_(d);
      };
      a.prototype.reject_ = function (d) {
        this.settle_(2, d);
      };
      a.prototype.fulfill_ = function (d) {
        this.settle_(1, d);
      };
      a.prototype.settle_ = function (d, m) {
        if (0 != this.state_)
          throw Error(
            "Cannot settle(" +
              d +
              ", " +
              m +
              "): Promise already settled in state" +
              this.state_,
          );
        this.state_ = d;
        this.result_ = m;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      a.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var d = this;
        f(function () {
          if (d.notifyUnhandledRejection_()) {
            var m = $jscomp.global.console;
            "undefined" !== typeof m && m.error(d.result_);
          }
        }, 1);
      };
      a.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var d = $jscomp.global.CustomEvent,
          m = $jscomp.global.Event,
          b = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof b) return !0;
        "function" === typeof d
          ? (d = new d("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof m
            ? (d = new m("unhandledrejection", { cancelable: !0 }))
            : ((d = $jscomp.global.document.createEvent("CustomEvent")),
              d.initCustomEvent("unhandledrejection", !1, !0, d));
        d.promise = this;
        d.reason = this.result_;
        return b(d);
      };
      a.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var d = 0; d < this.onSettledCallbacks_.length; ++d)
            n.asyncExecute(this.onSettledCallbacks_[d]);
          this.onSettledCallbacks_ = null;
        }
      };
      var n = new l();
      a.prototype.settleSameAsPromise_ = function (d) {
        var m = this.createResolveAndReject_();
        d.callWhenSettled_(m.resolve, m.reject);
      };
      a.prototype.settleSameAsThenable_ = function (d, m) {
        var b = this.createResolveAndReject_();
        try {
          d.call(m, b.resolve, b.reject);
        } catch (e) {
          b.reject(e);
        }
      };
      a.prototype.then = function (d, m) {
        function b(t, v) {
          return "function" == typeof t
            ? function (B) {
                try {
                  e(t(B));
                } catch (p) {
                  g(p);
                }
              }
            : v;
        }
        var e,
          g,
          q = new a(function (t, v) {
            e = t;
            g = v;
          });
        this.callWhenSettled_(b(d, e), b(m, g));
        return q;
      };
      a.prototype.catch = function (d) {
        return this.then(void 0, d);
      };
      a.prototype.callWhenSettled_ = function (d, m) {
        function b() {
          switch (e.state_) {
            case 1:
              d(e.result_);
              break;
            case 2:
              m(e.result_);
              break;
            default:
              throw Error("Unexpected state: " + e.state_);
          }
        }
        var e = this;
        null == this.onSettledCallbacks_
          ? n.asyncExecute(b)
          : this.onSettledCallbacks_.push(b);
        this.isRejectionHandled_ = !0;
      };
      a.resolve = k;
      a.reject = function (d) {
        return new a(function (m, b) {
          b(d);
        });
      };
      a.race = function (d) {
        return new a(function (m, b) {
          for (
            var e = $jscomp.makeIterator(d), g = e.next();
            !g.done;
            g = e.next()
          )
            k(g.value).callWhenSettled_(m, b);
        });
      };
      a.all = function (d) {
        var m = $jscomp.makeIterator(d),
          b = m.next();
        return b.done
          ? k([])
          : new a(function (e, g) {
              function q(B) {
                return function (p) {
                  t[B] = p;
                  v--;
                  0 == v && e(t);
                };
              }
              var t = [],
                v = 0;
              do
                (t.push(void 0),
                  v++,
                  k(b.value).callWhenSettled_(q(t.length - 1), g),
                  (b = m.next()));
              while (!b.done);
            });
      };
      return a;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Array.from",
    function (h) {
      return h
        ? h
        : function (l, k, f) {
            k =
              null != k
                ? k
                : function (m) {
                    return m;
                  };
            var a = [],
              n =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                l[Symbol.iterator];
            if ("function" == typeof n) {
              l = n.call(l);
              for (var d = 0; !(n = l.next()).done; )
                a.push(k.call(f, n.value, d++));
            } else
              for (n = l.length, d = 0; d < n; d++) a.push(k.call(f, l[d], d));
            return a;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.checkStringArgs = function (h, l, k) {
    if (null == h)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          k +
          " must not be null or undefined",
      );
    if (l instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          k +
          " must not be a regular expression",
      );
    return h + "";
  };
  $jscomp.polyfill(
    "String.prototype.endsWith",
    function (h) {
      return h
        ? h
        : function (l, k) {
            var f = $jscomp.checkStringArgs(this, l, "endsWith");
            l += "";
            void 0 === k && (k = f.length);
            k = Math.max(0, Math.min(k | 0, f.length));
            for (var a = l.length; 0 < a && 0 < k; )
              if (f[--k] != l[--a]) return !1;
            return 0 >= a;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.underscoreProtoCanBeSet = function () {
    var h = { a: !0 },
      l = {};
    try {
      return ((l.__proto__ = h), l.a);
    } catch (k) {}
    return !1;
  };
  $jscomp.setPrototypeOf =
    $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : $jscomp.underscoreProtoCanBeSet()
        ? function (h, l) {
            h.__proto__ = l;
            if (h.__proto__ !== l)
              throw new TypeError(h + " is not extensible");
            return h;
          }
        : null;
  $jscomp.polyfill(
    "Object.setPrototypeOf",
    function (h) {
      return h || $jscomp.setPrototypeOf;
    },
    "es6",
    "es5",
  );
  $jscomp.assign =
    $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign
      ? Object.assign
      : function (h, l) {
          for (var k = 1; k < arguments.length; k++) {
            var f = arguments[k];
            if (f) for (var a in f) $jscomp.owns(f, a) && (h[a] = f[a]);
          }
          return h;
        };
  $jscomp.polyfill(
    "Object.assign",
    function (h) {
      return h || $jscomp.assign;
    },
    "es6",
    "es3",
  );
  (function (h) {
    function l(f) {
      if (k[f]) return k[f].exports;
      var a = (k[f] = { i: f, l: !1, exports: {} });
      h[f].call(a.exports, a, a.exports, l);
      a.l = !0;
      return a.exports;
    }
    var k = {};
    l.m = h;
    l.c = k;
    l.d = function (f, a, n) {
      l.o(f, a) || Object.defineProperty(f, a, { enumerable: !0, get: n });
    };
    l.r = function (f) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(f, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(f, "__esModule", { value: !0 });
    };
    l.t = function (f, a) {
      a & 1 && (f = l(f));
      if (a & 8 || (a & 4 && "object" === typeof f && f && f.__esModule))
        return f;
      var n = Object.create(null);
      l.r(n);
      Object.defineProperty(n, "default", { enumerable: !0, value: f });
      if (a & 2 && "string" != typeof f)
        for (var d in f)
          l.d(
            n,
            d,
            function (m) {
              return f[m];
            }.bind(null, d),
          );
      return n;
    };
    l.n = function (f) {
      var a =
        f && f.__esModule
          ? function () {
              return f["default"];
            }
          : function () {
              return f;
            };
      l.d(a, "a", a);
      return a;
    };
    l.o = function (f, a) {
      return Object.prototype.hasOwnProperty.call(f, a);
    };
    l.p = "/core/officeEditor";
    return l((l.s = 11));
  })([
    function (h, l, k) {
      k.d(l, "b", function () {
        return a;
      });
      k.d(l, "a", function () {
        return n;
      });
      var f = k(1),
        a = function (d, m) {
          Object(f.a)("disableLogs") ||
            (m ? console.warn("".concat(d, ": ").concat(m)) : console.warn(d));
        },
        n = function (d, m) {};
    },
    function (h, l, k) {
      k.d(l, "a", function () {
        return n;
      });
      k.d(l, "b", function () {
        return d;
      });
      var f = {},
        a = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          wvsQueryParameters: {},
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        },
        n = function (m) {
          return a[m];
        },
        d = function (m, b) {
          var e;
          a[m] = b;
          null === (e = f[m]) || void 0 === e
            ? void 0
            : e.forEach(function (g) {
                g(b);
              });
        };
    },
    function (h, l, k) {
      k.d(l, "a", function () {
        return da;
      });
      k.d(l, "b", function () {
        return aa;
      });
      var f = k(3),
        a = k(0),
        n = k(6),
        d = k(4),
        m = k(5),
        b = "undefined" === typeof window ? self : window,
        e = b.importScripts,
        g = !1,
        q = function (x, w) {
          g ||
            (e(Object(m.a)("".concat(b.basePath, "decode.min.js"))), (g = !0));
          x = Object(d.b)(x);
          x = self.BrotliDecode(x);
          return w ? x : Object(d.a)(x);
        },
        t = function (x, w) {
          return Object(f.b)(void 0, void 0, Promise, function () {
            var y;
            return Object(f.c)(this, function (E) {
              switch (E.label) {
                case 0:
                  return g
                    ? [3, 2]
                    : [
                        4,
                        Object(n.a)(
                          "".concat(
                            self.Core.getWorkerPath(),
                            "external/decode.min.js",
                          ),
                          "Failed to download decode.min.js",
                          window,
                        ),
                      ];
                case 1:
                  (E.sent(), (g = !0), (E.label = 2));
                case 2:
                  return (
                    (y = self.BrotliDecode(Object(d.b)(x))),
                    [2, w ? y : Object(d.a)(y)]
                  );
              }
            });
          });
        };
      (function () {
        function x() {
          this.remainingDataArrays = [];
        }
        x.prototype.processRaw = function (w) {
          return w;
        };
        x.prototype.processBrotli = function (w) {
          this.remainingDataArrays.push(w);
          return null;
        };
        x.prototype.GetNextChunk = function (w) {
          this.decodeFunction ||
            (this.decodeFunction =
              0 === w[0] && 97 === w[1] && 115 === w[2] && 109 === w[3]
                ? this.processRaw
                : this.processBrotli);
          return this.decodeFunction(w);
        };
        x.prototype.End = function () {
          if (this.remainingDataArrays.length) {
            for (var w = this.arrays, y = 0, E = 0; E < w.length; ++E)
              y += w[E].length;
            y = new Uint8Array(y);
            var H = 0;
            for (E = 0; E < w.length; ++E) {
              var K = w[E];
              y.set(K, H);
              H += K.length;
            }
            return q(y, !0);
          }
          return null;
        };
        return x;
      })();
      var v = function (x, w, y) {
          void 0 === w && (w = !0);
          void 0 === y && (y = !1);
          var E = new XMLHttpRequest();
          E.open("GET", x, w);
          x = y && E.overrideMimeType;
          E.responseType = x ? "text" : "arraybuffer";
          x && E.overrideMimeType("text/plain; charset=x-user-defined");
          return E;
        },
        B = function (x, w, y) {
          return new Promise(function (E, H) {
            var K = v(x, w, y);
            K.send();
            K.onload = function () {
              200 === this.status || 0 === this.status
                ? E(K.response)
                : H(Error("Download Failed ".concat(x)));
            };
            K.onerror = function () {
              H(Error("Network error occurred ".concat(x)));
            };
          });
        },
        p = function (x, w) {
          var y = w.decompressFunction,
            E = w.shouldOutputArray,
            H = w.compressedMaximum,
            K = "undefined" !== typeof e ? Date.now() : null;
          try {
            var W = E ? J(x) : x.join("");
            Object(a.a)("worker", "Result length is ".concat(W.length));
            if (W.length < H) {
              var U = y(W, E);
              Object(a.b)(
                "There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this.",
              );
              e &&
                Object(a.a)(
                  "worker",
                  "Decompressed length is ".concat(U.length),
                );
              W = U;
            } else E || (W = Object(d.a)(W));
            if (e) {
              var Q = w.paths.join(", ");
              Object(a.a)(
                "worker",
                ""
                  .concat(Q, " Decompression took ")
                  .concat(Date.now() - K, " ms"),
              );
            }
            return W;
          } catch (ba) {
            throw Error("Failed to decompress: ".concat(ba));
          }
        },
        J = function (x) {
          x = x.reduce(function (w, y) {
            y = new Uint8Array(y);
            return w.concat(Array.from(y));
          }, []);
          return new Uint8Array(x);
        },
        X = function (x) {
          var w = !x.shouldOutputArray,
            y = x.paths,
            E = x.isAsync;
          E
            ? (y = Promise.all(
                y.map(function (H) {
                  return B(H, E, w);
                }),
              )
                .then(function (H) {
                  return p(H, x);
                })
                .catch(function (H) {
                  throw Error(
                    "Failed to fetch or decompress files: ".concat(H.message),
                  );
                }))
            : ((y = y.map(function (H) {
                var K = v(H, E, w);
                K.send();
                if (200 === K.status || 0 === K.status) return K.response;
                throw Error("Failed to load ".concat(H));
              })),
              (y = p(y, x)));
          return y;
        },
        da = function (x) {
          var w = x.lastIndexOf("/");
          -1 === w && (w = 0);
          var y = x.slice(w).replace(".", ".br.");
          e ||
            (y.endsWith(".js.mem")
              ? (y = y.replace(".js.mem", ".mem"))
              : y.endsWith(".js") && (y = y.concat(".mem")));
          return x.slice(0, w) + y;
        },
        ea = function (x) {
          return x.map(function (w) {
            return da(w);
          });
        },
        Ca = function (x, w) {
          w.decompressFunction = e ? q : t;
          w.paths = ea(x);
          return X(w);
        },
        ta = function (x, w, y, E) {
          return x.catch(function (H) {
            Object(a.b)(H);
            return E(w, y);
          });
        },
        aa = function (x, w, y, E) {
          x = Array.isArray(x) ? x : [x];
          a: {
            var H = [Ca];
            w = { compressedMaximum: w, isAsync: y, shouldOutputArray: E };
            if (w.isAsync) {
              var K = H[0](x, w);
              for (y = 1; y < H.length; ++y) K = ta(K, x, w, H[y]);
            } else {
              for (y = 0; y < H.length; y++) {
                E = H[y];
                try {
                  K = E(x, w);
                  break a;
                } catch (W) {
                  Object(a.b)(W.message);
                }
              }
              throw Error("None of the worker files were able to load. ");
            }
          }
          return K;
        };
    },
    function (h, l, k) {
      function f(d, m, b, e) {
        function g(q) {
          return q instanceof b
            ? q
            : new b(function (t) {
                t(q);
              });
        }
        return new (b || (b = Promise))(function (q, t) {
          function v(J) {
            try {
              p(e.next(J));
            } catch (X) {
              t(X);
            }
          }
          function B(J) {
            try {
              p(e["throw"](J));
            } catch (X) {
              t(X);
            }
          }
          function p(J) {
            J.done ? q(J.value) : g(J.value).then(v, B);
          }
          p((e = e.apply(d, m || [])).next());
        });
      }
      function a(d, m) {
        function b(p) {
          return function (J) {
            return e([p, J]);
          };
        }
        function e(p) {
          if (q) throw new TypeError("Generator is already executing.");
          for (; B && ((B = 0), p[0] && (g = 0)), g; )
            try {
              if (
                ((q = 1),
                t &&
                  (v =
                    p[0] & 2
                      ? t["return"]
                      : p[0]
                        ? t["throw"] || ((v = t["return"]) && v.call(t), 0)
                        : t.next) &&
                  !(v = v.call(t, p[1])).done)
              )
                return v;
              if (((t = 0), v)) p = [p[0] & 2, v.value];
              switch (p[0]) {
                case 0:
                case 1:
                  v = p;
                  break;
                case 4:
                  return (g.label++, { value: p[1], done: !1 });
                case 5:
                  g.label++;
                  t = p[1];
                  p = [0];
                  continue;
                case 7:
                  p = g.ops.pop();
                  g.trys.pop();
                  continue;
                default:
                  if (
                    !((v = g.trys), (v = 0 < v.length && v[v.length - 1])) &&
                    (6 === p[0] || 2 === p[0])
                  ) {
                    g = 0;
                    continue;
                  }
                  if (3 === p[0] && (!v || (p[1] > v[0] && p[1] < v[3])))
                    g.label = p[1];
                  else if (6 === p[0] && g.label < v[1])
                    ((g.label = v[1]), (v = p));
                  else if (v && g.label < v[2])
                    ((g.label = v[2]), g.ops.push(p));
                  else {
                    v[2] && g.ops.pop();
                    g.trys.pop();
                    continue;
                  }
              }
              p = m.call(d, g);
            } catch (J) {
              ((p = [6, J]), (t = 0));
            } finally {
              q = v = 0;
            }
          if (p[0] & 5) throw p[1];
          return { value: p[0] ? p[1] : void 0, done: !0 };
        }
        var g = {
            label: 0,
            sent: function () {
              if (v[0] & 1) throw v[1];
              return v[1];
            },
            trys: [],
            ops: [],
          },
          q,
          t,
          v,
          B = Object.create(
            ("function" === typeof Iterator ? Iterator : Object).prototype,
          );
        return (
          (B.next = b(0)),
          (B["throw"] = b(1)),
          (B["return"] = b(2)),
          "function" === typeof Symbol &&
            (B[Symbol.iterator] = function () {
              return this;
            }),
          B
        );
      }
      k.d(l, "a", function () {
        return n;
      });
      k.d(l, "b", function () {
        return f;
      });
      k.d(l, "c", function () {
        return a;
      });
      var n = function () {
        n =
          Object.assign ||
          function (d) {
            for (var m, b = 1, e = arguments.length; b < e; b++) {
              m = arguments[b];
              for (var g in m)
                Object.prototype.hasOwnProperty.call(m, g) && (d[g] = m[g]);
            }
            return d;
          };
        return n.apply(this, arguments);
      };
    },
    function (h, l, k) {
      k.d(l, "b", function () {
        return f;
      });
      k.d(l, "a", function () {
        return a;
      });
      var f = function (n) {
          if ("string" === typeof n) {
            for (
              var d = new Uint8Array(n.length), m = n.length, b = 0;
              b < m;
              b++
            )
              d[b] = n.charCodeAt(b);
            return d;
          }
          return n;
        },
        a = function (n) {
          if ("string" !== typeof n) {
            for (var d = "", m = 0, b = n.length, e; m < b; )
              ((e = n.subarray(m, m + 1024)),
                (m += 1024),
                (d += String.fromCharCode.apply(null, e)));
            return d;
          }
          return n;
        };
    },
    function (h, l, k) {
      k.d(l, "a", function () {
        return g;
      });
      var f = k(3);
      h = k(8);
      var a = k.n(h),
        n = new Map(),
        d = function () {
          return ("undefined" === typeof window ? self : window).trustedTypes;
        },
        m = function (q, t) {
          return d().createPolicy(q, {
            createHTML: function (v) {
              return a.a.sanitize(
                v,
                Object(f.a)(Object(f.a)({}, t), { RETURN_TRUSTED_TYPE: !1 }),
              );
            },
            createScript: function (v) {
              return v;
            },
            createScriptURL: function (v) {
              return v;
            },
          });
        },
        b = function (q) {
          return d().createPolicy(q, {
            createHTML: function (t) {
              return t;
            },
            createScript: function (t) {
              return t;
            },
            createScriptURL: function (t) {
              return t;
            },
          });
        },
        e = function (q, t) {
          var v,
            B = {
              createHTML: function (p) {
                return a.a.sanitize(p, Object(f.a)({}, t));
              },
              createScript: function (p) {
                return p;
              },
              createScriptURL: function (p) {
                return p;
              },
            };
          if (null === (v = d()) || void 0 === v ? 0 : v.createPolicy)
            ((v = "".concat(q, "-po")),
              n.has(q) || ((B = b(v)), n.set(v, B), (B = m(q, t)), n.set(q, B)),
              (B = n.get(t.createPolicyOnly ? v : q)));
          return B;
        },
        g = function (q, t) {
          void 0 === t &&
            (t = { createPolicyOnly: !0, trustedTypesPolicyName: "webviewer" });
          return e(t.trustedTypesPolicyName, t).createScriptURL(q.toString());
        };
    },
    function (h, l, k) {
      function f(n, d, m) {
        return new Promise(function (b) {
          if (!n) return b();
          var e = m.document.createElement("script");
          e.type = "text/javascript";
          e.onload = function () {
            b();
          };
          e.onerror = function () {
            d && Object(a.b)(d);
            b();
          };
          e.src = n;
          m.document.getElementsByTagName("head")[0].appendChild(e);
        });
      }
      k.d(l, "a", function () {
        return f;
      });
      var a = k(0);
    },
    function (h, l, k) {
      function f(b, e, g, q) {
        return a(
          b,
          e,
          g,
          q,
          !!WebAssembly.instantiateStreaming,
          void 0,
          void 0,
        ).then(function (t) {
          Object(n.a)(
            "load",
            "WASM compilation took ".concat(Date.now() - NaN, " ms"),
          );
          return t;
        });
      }
      function a(b, e, g, q, t, v, B) {
        v = v || Date.now();
        if (t && !q)
          return (
            Object(n.a)("load", "Try instantiateStreaming"),
            fetch(Object(d.a)(b))
              .then(function (p) {
                return WebAssembly.instantiateStreaming(p, e);
              })
              .catch(function (p) {
                Object(n.a)(
                  "load",
                  "instantiateStreaming Failed "
                    .concat(b, " message ")
                    .concat(p.message),
                );
                return a(b, e, g, q, !1, v, B);
              })
          );
        t = q
          ? q.map(function (p, J) {
              return "".concat(p, "PDFNetCWasm-chunk-").concat(J, ".wasm");
            })
          : b;
        return Object(d.b)(t, g, !0, !0).then(function (p) {
          B = Date.now();
          Object(n.a)("load", "Request took ".concat(B - v, " ms"));
          return WebAssembly.instantiate(p, e);
        });
      }
      k.d(l, "a", function () {
        return f;
      });
      var n = k(0),
        d = k(2),
        m = k(6);
      k.d(l, "b", function () {
        return m.a;
      });
    },
    function (h, l, k) {
      (function (f, a) {
        h.exports = a();
      })(this, function () {
        function f(F) {
          return function (z) {
            z instanceof RegExp && (z.lastIndex = 0);
            for (
              var D = arguments.length, G = Array(1 < D ? D - 1 : 0), I = 1;
              I < D;
              I++
            )
              G[I - 1] = arguments[I];
            return X(F, z, G);
          };
        }
        function a(F, z) {
          var D =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : w;
          g && g(F, null);
          for (var G = z.length; G--; ) {
            var I = z[G];
            if ("string" === typeof I) {
              var Y = D(I);
              Y !== I && (q(z) || (z[G] = Y), (I = Y));
            }
            F[I] = !0;
          }
          return F;
        }
        function n(F) {
          for (
            var z = J(null), D = $jscomp.makeIterator(e(F)), G = D.next();
            !G.done;
            G = D.next()
          ) {
            var I = $jscomp.makeIterator(G.value);
            G = I.next().value;
            I = I.next().value;
            if (U(F, G))
              if (Array.isArray(I)) {
                for (var Y = 0; Y < I.length; Y++) U(I, Y) || (I[Y] = null);
                z[G] = I;
              } else
                z[G] =
                  I && "object" === typeof I && I.constructor === Object
                    ? n(I)
                    : I;
          }
          return z;
        }
        function d(F, z) {
          for (; null !== F; ) {
            var D = v(F, z);
            if (D) {
              if (D.get) return f(D.get);
              if ("function" === typeof D.value) return f(D.value);
            }
            F = t(F);
          }
          return function () {
            return null;
          };
        }
        function m() {
          function F(c, r, u) {
            ea(c, function (A) {
              A.call(D, r, u, fa);
            });
          }
          var z =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "undefined" === typeof window
                  ? null
                  : window,
            D = function (c) {
              return m(c);
            };
          D.version = "3.2.6";
          D.removed = [];
          if (
            !z ||
            !z.document ||
            z.document.nodeType !== na.document ||
            !z.Element
          )
            return ((D.isSupported = !1), D);
          var G = z.document,
            I = G,
            Y = I.currentScript,
            Ya = z.DocumentFragment,
            M = z.HTMLTemplateElement,
            Da = z.Node,
            Za = z.Element,
            oa = z.NodeFilter,
            Gb =
              void 0 === z.NamedNodeMap
                ? z.NamedNodeMap || z.MozNamedAttrMap
                : z.NamedNodeMap,
            Hb = z.HTMLFormElement,
            Ib = z.DOMParser,
            ua = z.trustedTypes;
          z = Za.prototype;
          var Jb = d(z, "cloneNode"),
            Kb = d(z, "remove"),
            Lb = d(z, "nextSibling"),
            Mb = d(z, "childNodes"),
            va = d(z, "parentNode");
          "function" === typeof M &&
            ((M = G.createElement("template")),
            M.content &&
              M.content.ownerDocument &&
              (G = M.content.ownerDocument));
          var S,
            pa = "";
          M = G;
          var Ea = M.implementation,
            Nb = M.createNodeIterator,
            Ob = M.createDocumentFragment,
            Pb = M.getElementsByTagName,
            Qb = I.importNode,
            T = $a();
          D.isSupported =
            "function" === typeof e &&
            "function" === typeof va &&
            Ea &&
            void 0 !== Ea.createHTMLDocument;
          M = ab;
          var Fa = M.MUSTACHE_EXPR,
            Ga = M.ERB_EXPR,
            Ha = M.TMPLIT_EXPR,
            Rb = M.DATA_ATTR,
            Sb = M.ARIA_ATTR,
            Tb = M.IS_SCRIPT_OR_DATA,
            bb = M.ATTR_WHITESPACE,
            cb = M.CUSTOM_ELEMENT,
            db = ab.IS_ALLOWED_URI,
            O = null,
            gb = a(
              {},
              [].concat(
                $jscomp.arrayFromIterable(eb),
                $jscomp.arrayFromIterable(Ia),
                $jscomp.arrayFromIterable(Ja),
                $jscomp.arrayFromIterable(Ka),
                $jscomp.arrayFromIterable(fb),
              ),
            ),
            R = null,
            jb = a(
              {},
              [].concat(
                $jscomp.arrayFromIterable(hb),
                $jscomp.arrayFromIterable(La),
                $jscomp.arrayFromIterable(ib),
                $jscomp.arrayFromIterable(wa),
              ),
            ),
            L = Object.seal(
              J(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              }),
            ),
            qa = null,
            Ma = null,
            kb = !0,
            Na = !0,
            lb = !1,
            mb = !0,
            ha = !1,
            xa = !0,
            ca = !1,
            Oa = !1,
            Pa = !1,
            ia = !1,
            ya = !1,
            za = !1,
            nb = !0,
            ob = !1,
            Qa = !0,
            ra = !1,
            ja = {},
            ka = null,
            pb = a(
              {},
              "annotation-xml audio colgroup desc foreignobject head iframe math mi mn mo ms mtext noembed noframes noscript plaintext script style svg template thead title video xmp".split(
                " ",
              ),
            ),
            qb = null,
            rb = a({}, "audio video img source image track".split(" ")),
            Ra = null,
            sb = a(
              {},
              "alt class for id label name pattern placeholder role summary title value style xmlns".split(
                " ",
              ),
            ),
            la = "http://www.w3.org/1999/xhtml",
            tb = !1,
            Sa = null,
            Ub = a(
              {},
              [
                "http://www.w3.org/1998/Math/MathML",
                "http://www.w3.org/2000/svg",
                "http://www.w3.org/1999/xhtml",
              ],
              y,
            ),
            Aa = a({}, ["mi", "mo", "mn", "ms", "mtext"]),
            Ba = a({}, ["annotation-xml"]),
            Vb = a({}, ["title", "style", "font", "a", "script"]),
            sa = null,
            Wb = ["application/xhtml+xml", "text/html"],
            P = null,
            fa = null,
            Xb = G.createElement("form"),
            ub = function (c) {
              return c instanceof RegExp || c instanceof Function;
            },
            Ta = function () {
              var c =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!fa || fa !== c) {
                (c && "object" === typeof c) || (c = {});
                c = n(c);
                sa =
                  -1 === Wb.indexOf(c.PARSER_MEDIA_TYPE)
                    ? "text/html"
                    : c.PARSER_MEDIA_TYPE;
                P = "application/xhtml+xml" === sa ? y : w;
                O = U(c, "ALLOWED_TAGS") ? a({}, c.ALLOWED_TAGS, P) : gb;
                R = U(c, "ALLOWED_ATTR") ? a({}, c.ALLOWED_ATTR, P) : jb;
                Sa = U(c, "ALLOWED_NAMESPACES")
                  ? a({}, c.ALLOWED_NAMESPACES, y)
                  : Ub;
                Ra = U(c, "ADD_URI_SAFE_ATTR")
                  ? a(n(sb), c.ADD_URI_SAFE_ATTR, P)
                  : sb;
                qb = U(c, "ADD_DATA_URI_TAGS")
                  ? a(n(rb), c.ADD_DATA_URI_TAGS, P)
                  : rb;
                ka = U(c, "FORBID_CONTENTS") ? a({}, c.FORBID_CONTENTS, P) : pb;
                qa = U(c, "FORBID_TAGS") ? a({}, c.FORBID_TAGS, P) : n({});
                Ma = U(c, "FORBID_ATTR") ? a({}, c.FORBID_ATTR, P) : n({});
                ja = U(c, "USE_PROFILES") ? c.USE_PROFILES : !1;
                kb = !1 !== c.ALLOW_ARIA_ATTR;
                Na = !1 !== c.ALLOW_DATA_ATTR;
                lb = c.ALLOW_UNKNOWN_PROTOCOLS || !1;
                mb = !1 !== c.ALLOW_SELF_CLOSE_IN_ATTR;
                ha = c.SAFE_FOR_TEMPLATES || !1;
                xa = !1 !== c.SAFE_FOR_XML;
                ca = c.WHOLE_DOCUMENT || !1;
                ia = c.RETURN_DOM || !1;
                ya = c.RETURN_DOM_FRAGMENT || !1;
                za = c.RETURN_TRUSTED_TYPE || !1;
                Pa = c.FORCE_BODY || !1;
                nb = !1 !== c.SANITIZE_DOM;
                ob = c.SANITIZE_NAMED_PROPS || !1;
                Qa = !1 !== c.KEEP_CONTENT;
                ra = c.IN_PLACE || !1;
                db = c.ALLOWED_URI_REGEXP || vb;
                la = c.NAMESPACE || "http://www.w3.org/1999/xhtml";
                Aa = c.MATHML_TEXT_INTEGRATION_POINTS || Aa;
                Ba = c.HTML_INTEGRATION_POINTS || Ba;
                L = c.CUSTOM_ELEMENT_HANDLING || {};
                c.CUSTOM_ELEMENT_HANDLING &&
                  ub(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (L.tagNameCheck = c.CUSTOM_ELEMENT_HANDLING.tagNameCheck);
                c.CUSTOM_ELEMENT_HANDLING &&
                  ub(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (L.attributeNameCheck =
                    c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck);
                c.CUSTOM_ELEMENT_HANDLING &&
                  "boolean" ===
                    typeof c.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements &&
                  (L.allowCustomizedBuiltInElements =
                    c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements);
                ha && (Na = !1);
                ya && (ia = !0);
                ja &&
                  ((O = a({}, fb)),
                  (R = []),
                  !0 === ja.html && (a(O, eb), a(R, hb)),
                  !0 === ja.svg && (a(O, Ia), a(R, La), a(R, wa)),
                  !0 === ja.svgFilters && (a(O, Ja), a(R, La), a(R, wa)),
                  !0 === ja.mathMl && (a(O, Ka), a(R, ib), a(R, wa)));
                c.ADD_TAGS && (O === gb && (O = n(O)), a(O, c.ADD_TAGS, P));
                c.ADD_ATTR && (R === jb && (R = n(R)), a(R, c.ADD_ATTR, P));
                c.ADD_URI_SAFE_ATTR && a(Ra, c.ADD_URI_SAFE_ATTR, P);
                c.FORBID_CONTENTS &&
                  (ka === pb && (ka = n(ka)), a(ka, c.FORBID_CONTENTS, P));
                Qa && (O["#text"] = !0);
                ca && a(O, ["html", "head", "body"]);
                O.table && (a(O, ["tbody"]), delete qa.tbody);
                if (c.TRUSTED_TYPES_POLICY) {
                  if ("function" !== typeof c.TRUSTED_TYPES_POLICY.createHTML)
                    throw ba(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
                    );
                  if (
                    "function" !== typeof c.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw ba(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
                    );
                  S = c.TRUSTED_TYPES_POLICY;
                  pa = S.createHTML("");
                } else
                  (void 0 === S && (S = Yb(ua, Y)),
                    null !== S &&
                      "string" === typeof pa &&
                      (pa = S.createHTML("")));
                p && p(c);
                fa = c;
              }
            },
            wb = a(
              {},
              [].concat(
                $jscomp.arrayFromIterable(Ia),
                $jscomp.arrayFromIterable(Ja),
                $jscomp.arrayFromIterable(Zb),
              ),
            ),
            xb = a(
              {},
              [].concat(
                $jscomp.arrayFromIterable(Ka),
                $jscomp.arrayFromIterable($b),
              ),
            ),
            ac = function (c) {
              var r = va(c);
              (r && r.tagName) ||
                (r = { namespaceURI: la, tagName: "template" });
              var u = w(c.tagName),
                A = w(r.tagName);
              return Sa[c.namespaceURI]
                ? "http://www.w3.org/2000/svg" === c.namespaceURI
                  ? "http://www.w3.org/1999/xhtml" === r.namespaceURI
                    ? "svg" === u
                    : "http://www.w3.org/1998/Math/MathML" === r.namespaceURI
                      ? "svg" === u && ("annotation-xml" === A || Aa[A])
                      : !!wb[u]
                  : "http://www.w3.org/1998/Math/MathML" === c.namespaceURI
                    ? "http://www.w3.org/1999/xhtml" === r.namespaceURI
                      ? "math" === u
                      : "http://www.w3.org/2000/svg" === r.namespaceURI
                        ? "math" === u && Ba[A]
                        : !!xb[u]
                    : "http://www.w3.org/1999/xhtml" === c.namespaceURI
                      ? ("http://www.w3.org/2000/svg" === r.namespaceURI &&
                          !Ba[A]) ||
                        ("http://www.w3.org/1998/Math/MathML" ===
                          r.namespaceURI &&
                          !Aa[A])
                        ? !1
                        : !xb[u] && (Vb[u] || !wb[u])
                      : "application/xhtml+xml" === sa && Sa[c.namespaceURI]
                        ? !0
                        : !1
                : !1;
            },
            Z = function (c) {
              aa(D.removed, { element: c });
              try {
                va(c).removeChild(c);
              } catch (r) {
                Kb(c);
              }
            },
            ma = function (c, r) {
              try {
                aa(D.removed, { attribute: r.getAttributeNode(c), from: r });
              } catch (u) {
                aa(D.removed, { attribute: null, from: r });
              }
              r.removeAttribute(c);
              if ("is" === c)
                if (ia || ya)
                  try {
                    Z(r);
                  } catch (u) {}
                else
                  try {
                    r.setAttribute(c, "");
                  } catch (u) {}
            },
            yb = function (c) {
              var r = null,
                u = null;
              Pa
                ? (c = "<remove></remove>" + c)
                : (u = (u = E(c, /^[\r\n\t ]+/)) && u[0]);
              "application/xhtml+xml" === sa &&
                "http://www.w3.org/1999/xhtml" === la &&
                (c =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  c +
                  "</body></html>");
              var A = S ? S.createHTML(c) : c;
              if ("http://www.w3.org/1999/xhtml" === la)
                try {
                  r = new Ib().parseFromString(A, sa);
                } catch (C) {}
              if (!r || !r.documentElement) {
                r = Ea.createDocument(la, "template", null);
                try {
                  r.documentElement.innerHTML = tb ? pa : A;
                } catch (C) {}
              }
              A = r.body || r.documentElement;
              c &&
                u &&
                A.insertBefore(G.createTextNode(u), A.childNodes[0] || null);
              return "http://www.w3.org/1999/xhtml" === la
                ? Pb.call(r, ca ? "html" : "body")[0]
                : ca
                  ? r.documentElement
                  : A;
            },
            zb = function (c) {
              return Nb.call(
                c.ownerDocument || c,
                c,
                oa.SHOW_ELEMENT |
                  oa.SHOW_COMMENT |
                  oa.SHOW_TEXT |
                  oa.SHOW_PROCESSING_INSTRUCTION |
                  oa.SHOW_CDATA_SECTION,
                null,
              );
            },
            Ua = function (c) {
              return (
                c instanceof Hb &&
                ("string" !== typeof c.nodeName ||
                  "string" !== typeof c.textContent ||
                  "function" !== typeof c.removeChild ||
                  !(c.attributes instanceof Gb) ||
                  "function" !== typeof c.removeAttribute ||
                  "function" !== typeof c.setAttribute ||
                  "string" !== typeof c.namespaceURI ||
                  "function" !== typeof c.insertBefore ||
                  "function" !== typeof c.hasChildNodes)
              );
            },
            Ab = function (c) {
              return "function" === typeof Da && c instanceof Da;
            },
            Bb = function (c) {
              var r = null;
              F(T.beforeSanitizeElements, c, null);
              if (Ua(c)) return (Z(c), !0);
              var u = P(c.nodeName);
              F(T.uponSanitizeElement, c, { tagName: u, allowedTags: O });
              if (
                (xa &&
                  c.hasChildNodes() &&
                  !Ab(c.firstElementChild) &&
                  Q(/<[/\w!]/g, c.innerHTML) &&
                  Q(/<[/\w!]/g, c.textContent)) ||
                c.nodeType === na.progressingInstruction ||
                (xa && c.nodeType === na.comment && Q(/<[/\w]/g, c.data))
              )
                return (Z(c), !0);
              if (!O[u] || qa[u]) {
                if (
                  !qa[u] &&
                  "annotation-xml" !== u &&
                  E(u, cb) &&
                  ((L.tagNameCheck instanceof RegExp && Q(L.tagNameCheck, u)) ||
                    (L.tagNameCheck instanceof Function && L.tagNameCheck(u)))
                )
                  return !1;
                if (Qa && !ka[u]) {
                  u = va(c) || c.parentNode;
                  var A = Mb(c) || c.childNodes;
                  if (A && u)
                    for (var C = A.length - 1; 0 <= C; --C) {
                      var N = Jb(A[C], !0);
                      N.__removalCount = (c.__removalCount || 0) + 1;
                      u.insertBefore(N, Lb(c));
                    }
                }
                Z(c);
                return !0;
              }
              if (
                (c instanceof Za && !ac(c)) ||
                (("noscript" === u || "noembed" === u || "noframes" === u) &&
                  Q(/<\/no(script|embed|frames)/i, c.innerHTML))
              )
                return (Z(c), !0);
              ha &&
                c.nodeType === na.text &&
                ((r = c.textContent),
                ea([Fa, Ga, Ha], function (V) {
                  r = H(r, V, " ");
                }),
                c.textContent !== r &&
                  (aa(D.removed, { element: c.cloneNode() }),
                  (c.textContent = r)));
              F(T.afterSanitizeElements, c, null);
              return !1;
            },
            Cb = function (c, r, u) {
              if (nb && ("id" === r || "name" === r) && (u in G || u in Xb))
                return !1;
              if (!Na || Ma[r] || !Q(Rb, r))
                if (!kb || !Q(Sb, r))
                  if (!R[r] || Ma[r]) {
                    if (
                      !(
                        ("annotation-xml" !== c &&
                          E(c, cb) &&
                          ((L.tagNameCheck instanceof RegExp &&
                            Q(L.tagNameCheck, c)) ||
                            (L.tagNameCheck instanceof Function &&
                              L.tagNameCheck(c))) &&
                          ((L.attributeNameCheck instanceof RegExp &&
                            Q(L.attributeNameCheck, r)) ||
                            (L.attributeNameCheck instanceof Function &&
                              L.attributeNameCheck(r)))) ||
                        ("is" === r &&
                          L.allowCustomizedBuiltInElements &&
                          ((L.tagNameCheck instanceof RegExp &&
                            Q(L.tagNameCheck, u)) ||
                            (L.tagNameCheck instanceof Function &&
                              L.tagNameCheck(u))))
                      )
                    )
                      return !1;
                  } else if (
                    !(
                      Ra[r] ||
                      Q(db, H(u, bb, "")) ||
                      (("src" === r || "xlink:href" === r || "href" === r) &&
                        "script" !== c &&
                        0 === K(u, "data:") &&
                        qb[c]) ||
                      (lb && !Q(Tb, H(u, bb, "")))
                    ) &&
                    u
                  )
                    return !1;
              return !0;
            },
            Eb = function (c) {
              F(T.beforeSanitizeAttributes, c, null);
              var r = c.attributes;
              if (r && !Ua(c)) {
                for (
                  var u = {
                      attrName: "",
                      attrValue: "",
                      keepAttr: !0,
                      allowedAttributes: R,
                      forceKeepAttr: void 0,
                    },
                    A = r.length,
                    C = {};
                  A--;

                ) {
                  var N = r[A],
                    V = N.name,
                    Va = N.namespaceURI,
                    Wa = N.value;
                  N = P(V);
                  C.$jscomp$loop$prop$value$6 = "value" === V ? Wa : W(Wa);
                  u.attrName = N;
                  u.attrValue = C.$jscomp$loop$prop$value$6;
                  u.keepAttr = !0;
                  u.forceKeepAttr = void 0;
                  F(T.uponSanitizeAttribute, c, u);
                  C.$jscomp$loop$prop$value$6 = u.attrValue;
                  !ob ||
                    ("id" !== N && "name" !== N) ||
                    (ma(V, c),
                    (C.$jscomp$loop$prop$value$6 =
                      "user-content-" + C.$jscomp$loop$prop$value$6));
                  if (
                    xa &&
                    Q(
                      /((--!?|])>)|<\/(style|title)/i,
                      C.$jscomp$loop$prop$value$6,
                    )
                  )
                    ma(V, c);
                  else if (!u.forceKeepAttr)
                    if (u.keepAttr)
                      if (!mb && Q(/\/>/i, C.$jscomp$loop$prop$value$6))
                        ma(V, c);
                      else {
                        ha &&
                          ea(
                            [Fa, Ga, Ha],
                            (function (Xa) {
                              return function (bc) {
                                Xa.$jscomp$loop$prop$value$6 = H(
                                  Xa.$jscomp$loop$prop$value$6,
                                  bc,
                                  " ",
                                );
                              };
                            })(C),
                          );
                        var Db = P(c.nodeName);
                        if (Cb(Db, N, C.$jscomp$loop$prop$value$6)) {
                          if (
                            S &&
                            "object" === typeof ua &&
                            "function" === typeof ua.getAttributeType &&
                            !Va
                          )
                            switch (ua.getAttributeType(Db, N)) {
                              case "TrustedHTML":
                                C.$jscomp$loop$prop$value$6 = S.createHTML(
                                  C.$jscomp$loop$prop$value$6,
                                );
                                break;
                              case "TrustedScriptURL":
                                C.$jscomp$loop$prop$value$6 = S.createScriptURL(
                                  C.$jscomp$loop$prop$value$6,
                                );
                            }
                          if (C.$jscomp$loop$prop$value$6 !== Wa)
                            try {
                              (Va
                                ? c.setAttributeNS(
                                    Va,
                                    V,
                                    C.$jscomp$loop$prop$value$6,
                                  )
                                : c.setAttribute(
                                    V,
                                    C.$jscomp$loop$prop$value$6,
                                  ),
                                Ua(c) ? Z(c) : ta(D.removed));
                            } catch (Xa) {
                              ma(V, c);
                            }
                        } else ma(V, c);
                      }
                    else ma(V, c);
                  C = {
                    $jscomp$loop$prop$value$6: C.$jscomp$loop$prop$value$6,
                  };
                }
                F(T.afterSanitizeAttributes, c, null);
              }
            },
            cc = function u(r) {
              var A,
                C = zb(r);
              for (F(T.beforeSanitizeShadowDOM, r, null); (A = C.nextNode()); )
                (F(T.uponSanitizeShadowNode, A, null),
                  Bb(A),
                  Eb(A),
                  A.content instanceof Ya && u(A.content));
              F(T.afterSanitizeShadowDOM, r, null);
            };
          D.sanitize = function (r) {
            var u =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              A = null,
              C = null;
            C = C = null;
            (tb = !r) && (r = "\x3c!--\x3e");
            if ("string" !== typeof r && !Ab(r))
              if ("function" === typeof r.toString) {
                if (((r = r.toString()), "string" !== typeof r))
                  throw ba("dirty is not a string, aborting");
              } else throw ba("toString is not a function");
            if (!D.isSupported) return r;
            Oa || Ta(u);
            D.removed = [];
            "string" === typeof r && (ra = !1);
            if (ra) {
              if (r.nodeName && ((u = P(r.nodeName)), !O[u] || qa[u]))
                throw ba(
                  "root node is forbidden and cannot be sanitized in-place",
                );
            } else if (r instanceof Da)
              ((A = yb("\x3c!----\x3e")),
                (C = A.ownerDocument.importNode(r, !0)),
                C.nodeType === na.element && "BODY" === C.nodeName
                  ? (A = C)
                  : "HTML" === C.nodeName
                    ? (A = C)
                    : A.appendChild(C));
            else {
              if (!ia && !ha && !ca && -1 === r.indexOf("<"))
                return S && za ? S.createHTML(r) : r;
              A = yb(r);
              if (!A) return ia ? null : za ? pa : "";
            }
            A && Pa && Z(A.firstChild);
            for (u = zb(ra ? r : A); (C = u.nextNode()); )
              (Bb(C), Eb(C), C.content instanceof Ya && cc(C.content));
            if (ra) return r;
            if (ia) {
              if (ya)
                for (C = Ob.call(A.ownerDocument); A.firstChild; )
                  C.appendChild(A.firstChild);
              else C = A;
              if (R.shadowroot || R.shadowrootmode) C = Qb.call(I, C, !0);
              return C;
            }
            var N = ca ? A.outerHTML : A.innerHTML;
            ca &&
              O["!doctype"] &&
              A.ownerDocument &&
              A.ownerDocument.doctype &&
              A.ownerDocument.doctype.name &&
              Q(Fb, A.ownerDocument.doctype.name) &&
              (N = "<!DOCTYPE " + A.ownerDocument.doctype.name + ">\n" + N);
            ha &&
              ea([Fa, Ga, Ha], function (V) {
                N = H(N, V, " ");
              });
            return S && za ? S.createHTML(N) : N;
          };
          D.setConfig = function () {
            Ta(
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            );
            Oa = !0;
          };
          D.clearConfig = function () {
            fa = null;
            Oa = !1;
          };
          D.isValidAttribute = function (r, u, A) {
            fa || Ta({});
            r = P(r);
            u = P(u);
            return Cb(r, u, A);
          };
          D.addHook = function (r, u) {
            "function" === typeof u && aa(T[r], u);
          };
          D.removeHook = function (r, u) {
            return void 0 !== u
              ? ((u = Ca(T[r], u)), -1 === u ? void 0 : x(T[r], u, 1)[0])
              : ta(T[r]);
          };
          D.removeHooks = function (r) {
            T[r] = [];
          };
          D.removeAllHooks = function () {
            T = $a();
          };
          return D;
        }
        var b = Object,
          e = b.entries,
          g = b.setPrototypeOf,
          q = b.isFrozen,
          t = b.getPrototypeOf,
          v = b.getOwnPropertyDescriptor,
          B = Object,
          p = B.freeze;
        b = B.seal;
        var J = B.create;
        B = "undefined" !== typeof Reflect && Reflect;
        var X = B.apply,
          da = B.construct;
        p ||
          (p = function (F) {
            return F;
          });
        b ||
          (b = function (F) {
            return F;
          });
        X ||
          (X = function (F, z, D) {
            return F.apply(z, D);
          });
        da ||
          (da = function (F, z) {
            return new (Function.prototype.bind.apply(
              F,
              [null].concat($jscomp.arrayFromIterable(z)),
            ))();
          });
        var ea = f(Array.prototype.forEach),
          Ca = f(Array.prototype.lastIndexOf),
          ta = f(Array.prototype.pop),
          aa = f(Array.prototype.push),
          x = f(Array.prototype.splice),
          w = f(String.prototype.toLowerCase),
          y = f(String.prototype.toString),
          E = f(String.prototype.match),
          H = f(String.prototype.replace),
          K = f(String.prototype.indexOf),
          W = f(String.prototype.trim),
          U = f(Object.prototype.hasOwnProperty),
          Q = f(RegExp.prototype.test),
          ba = (function (F) {
            return function () {
              for (var z = arguments.length, D = Array(z), G = 0; G < z; G++)
                D[G] = arguments[G];
              return da(F, D);
            };
          })(TypeError),
          eb = p(
            "a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dialog dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p picture pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(
              " ",
            ),
          ),
          Ia = p(
            "svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan view vkern".split(
              " ",
            ),
          ),
          Ja = p(
            "feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(
              " ",
            ),
          ),
          Zb = p(
            "animate color-profile cursor discard font-face font-face-format font-face-name font-face-src font-face-uri foreignobject hatch hatchpath mesh meshgradient meshpatch meshrow missing-glyph script set solidcolor unknown use".split(
              " ",
            ),
          ),
          Ka = p(
            "math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover mprescripts".split(
              " ",
            ),
          ),
          $b = p(
            "maction maligngroup malignmark mlongdiv mscarries mscarry msgroup mstack msline msrow semantics annotation annotation-xml mprescripts none".split(
              " ",
            ),
          ),
          fb = p(["#text"]),
          hb = p(
            "accept action align alt autocapitalize autocomplete autopictureinpicture autoplay background bgcolor border capture cellpadding cellspacing checked cite class clear color cols colspan controls controlslist coords crossorigin datetime decoding default dir disabled disablepictureinpicture disableremoteplayback download draggable enctype enterkeyhint face for headers height hidden high href hreflang id inputmode integrity ismap kind label lang list loading loop low max maxlength media method min minlength multiple muted name nonce noshade novalidate nowrap open optimum pattern placeholder playsinline popover popovertarget popovertargetaction poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title translate type usemap valign value width wrap xmlns slot".split(
              " ",
            ),
          ),
          La = p(
            "accent-height accumulate additive alignment-baseline amplitude ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clippathunits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end exponent fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 intercept k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering slope specularconstant specularexponent spreadmethod startoffset stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale systemlanguage tabindex tablevalues targetx targety transform transform-origin text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(
              " ",
            ),
          ),
          ib = p(
            "accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle encoding fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(
              " ",
            ),
          ),
          wa = p([
            "xlink:href",
            "xml:id",
            "xlink:title",
            "xml:space",
            "xmlns:xlink",
          ]);
        B = b(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        var dc = b(/<%[\w\W]*|[\w\W]*%>/gm),
          ec = b(/\$\{[\w\W]*/gm),
          fc = b(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          gc = b(/^aria-[\-\w]+$/),
          vb = b(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          hc = b(/^(?:\w+script|data):/i),
          ic = b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Fb = b(/^html$/i);
        b = b(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var ab = Object.freeze({
            __proto__: null,
            ARIA_ATTR: gc,
            ATTR_WHITESPACE: ic,
            CUSTOM_ELEMENT: b,
            DATA_ATTR: fc,
            DOCTYPE_NAME: Fb,
            ERB_EXPR: dc,
            IS_ALLOWED_URI: vb,
            IS_SCRIPT_OR_DATA: hc,
            MUSTACHE_EXPR: B,
            TMPLIT_EXPR: ec,
          }),
          na = {
            element: 1,
            attribute: 2,
            text: 3,
            cdataSection: 4,
            entityReference: 5,
            entityNode: 6,
            progressingInstruction: 7,
            comment: 8,
            document: 9,
            documentType: 10,
            documentFragment: 11,
            notation: 12,
          },
          Yb = function (F, z) {
            if ("object" !== typeof F || "function" !== typeof F.createPolicy)
              return null;
            var D = null;
            z &&
              z.hasAttribute("data-tt-policy-suffix") &&
              (D = z.getAttribute("data-tt-policy-suffix"));
            z = "dompurify" + (D ? "#" + D : "");
            try {
              return F.createPolicy(z, {
                createHTML: function (G) {
                  return G;
                },
                createScriptURL: function (G) {
                  return G;
                },
              });
            } catch (G) {
              return (
                console.warn(
                  "TrustedTypes policy " + z + " could not be created.",
                ),
                null
              );
            }
          },
          $a = function () {
            return {
              afterSanitizeAttributes: [],
              afterSanitizeElements: [],
              afterSanitizeShadowDOM: [],
              beforeSanitizeAttributes: [],
              beforeSanitizeElements: [],
              beforeSanitizeShadowDOM: [],
              uponSanitizeAttribute: [],
              uponSanitizeElement: [],
              uponSanitizeShadowNode: [],
            };
          };
        return m();
      });
    },
    function (h, l, k) {
      k.d(l, "a", function () {
        return b;
      });
      var f = k(2),
        a = k(7),
        n = k(10),
        d = k(5),
        m = (function () {
          function e(g) {
            var q = this;
            this.promise = g.then(function (t) {
              q.response = t;
              q.status = 200;
            });
          }
          e.prototype.addEventListener = function (g, q) {
            this.promise.then(q);
          };
          return e;
        })(),
        b = function (e, g, q, t) {
          if (Object(n.a)() && !q) {
            self.Module.instantiateWasm = function (B, p) {
              return Object(a.a)(
                "".concat(e, "Wasm.wasm"),
                B,
                g["Wasm.wasm"],
                t,
              ).then(function (J) {
                p(J.instance);
              });
            };
            if (g.disableObjectURLBlobs) {
              importScripts("".concat(e, "Wasm.js"));
              return;
            }
            q = Object(f.b)(
              "".concat(e, "Wasm.js.mem"),
              g["Wasm.js.mem"],
              !1,
              !1,
            );
          } else {
            if (g.disableObjectURLBlobs) {
              importScripts(
                "".concat(
                  (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + e,
                  ".js",
                ),
              );
              return;
            }
            q = Object(f.b)(
              "".concat(
                (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + e,
                ".js.mem",
              ),
              g[".js.mem"],
              !1,
            );
            var v = Object(f.b)(
              "".concat(
                (self.Module.memoryInitializerPrefixURL
                  ? self.Module.memoryInitializerPrefixURL
                  : "") + e,
                ".mem",
              ),
              g[".mem"],
              !0,
              !0,
            );
            self.Module.memoryInitializerRequest = new m(v);
          }
          q = new Blob([q], { type: "application/javascript" });
          importScripts(Object(d.a)(URL.createObjectURL(q)));
        };
    },
    function (h, l, k) {
      k.d(l, "a", function () {
        return B;
      });
      var f,
        a = "undefined" === typeof window ? self : window;
      h = (function () {
        var p = navigator.userAgent.toLowerCase();
        return (p =
          /(msie) ([\w.]+)/.exec(p) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(p))
          ? parseInt(p[2], 10)
          : p;
      })();
      var n = (function () {
        var p = a.navigator.userAgent.match(/OPR/),
          J = a.navigator.userAgent.match(/Maxthon/),
          X = a.navigator.userAgent.match(/Edge/);
        return a.navigator.userAgent.match(/Chrome\/(.*?) /) && !p && !J && !X;
      })();
      (function () {
        if (!n) return null;
        var p = a.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
        return p ? parseInt(p[1], 10) : p;
      })();
      var d =
        !!navigator.userAgent.match(/Edge/i) ||
        (navigator.userAgent.match(/Edg\/(.*?)/) &&
          a.navigator.userAgent.match(/Chrome\/(.*?) /));
      (function () {
        if (!d) return null;
        var p = a.navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return p ? parseInt(p[1], 10) : p;
      })();
      l =
        /iPad|iPhone|iPod/.test(a.navigator.platform) ||
        ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) ||
        /iPad|iPhone|iPod/.test(a.navigator.userAgent);
      var m = (function () {
          var p = a.navigator.userAgent.match(
            /.*\/([0-9\.]+)\s(Safari|Mobile).*/i,
          );
          return p ? parseFloat(p[1]) : p;
        })(),
        b =
          /^((?!chrome|android).)*safari/i.test(a.navigator.userAgent) ||
          (/^((?!chrome|android).)*$/.test(a.navigator.userAgent) && l);
      b &&
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
        parseInt(
          null === (f = navigator.userAgent.match(/Version\/(\d+)/)) ||
            void 0 === f
            ? void 0
            : f[1],
          10,
        );
      var e = a.navigator.userAgent.match(/Firefox/);
      (function () {
        if (!e) return null;
        var p = a.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return p ? parseInt(p[1], 10) : p;
      })();
      h || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);
      navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
      a.navigator.userAgent.indexOf("Android");
      var g = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(
          a.navigator.userAgent,
        ),
        q = a.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)
          ? 14 <=
            parseInt(
              a.navigator.userAgent.match(
                /(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i,
              )[3],
              10,
            )
          : !1,
        t = !(!self.WebAssembly || !self.WebAssembly.validate),
        v =
          -1 < a.navigator.userAgent.indexOf("Edge/16") ||
          -1 < a.navigator.userAgent.indexOf("MSAppHost"),
        B = function () {
          var p;
          if ((p = t && !v))
            ((p = b && null !== m && 14 > m), (p = !(!q && (p || g))));
          return p;
        };
    },
    function (h, l, k) {
      h.exports = k(12);
    },
    function (h, l, k) {
      function f(n, d) {
        (null == d || d > n.length) && (d = n.length);
        for (var m = 0, b = Array(d); m < d; m++) b[m] = n[m];
        return b;
      }
      k.r(l);
      h = k(9);
      var a = {};
      location.search
        .slice(1)
        .split("&")
        .forEach(function (n) {
          n = n.split("=");
          var d;
          var m = Array.isArray(n) ? n : void 0;
          if (!m)
            a: {
              var b =
                null == n
                  ? null
                  : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                    n["@@iterator"];
              if (null != b) {
                var e,
                  g,
                  q = [],
                  t = !0,
                  v = !1;
                try {
                  for (
                    e = (b = b.call(n)).next;
                    !(t = (d = e.call(b)).done) &&
                    (q.push(d.value), 2 !== q.length);
                    t = !0
                  );
                } catch (p) {
                  v = !0;
                  var B = p;
                } finally {
                  try {
                    if (
                      !t &&
                      null != b["return"] &&
                      ((g = b["return"]()), Object(g) !== g)
                    ) {
                      m = void 0;
                      break a;
                    }
                  } finally {
                    if (v) throw B;
                  }
                }
                m = q;
              } else m = void 0;
            }
          (d = m) ||
            (n
              ? "string" == typeof n
                ? (d = f(n, 2))
                : ((B = {}.toString.call(n).slice(8, -1)),
                  (d =
                    ("Object" === B &&
                      n.constructor &&
                      (B = n.constructor.name),
                    "Map" === B || "Set" === B
                      ? Array.from(n)
                      : "Arguments" === B ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)
                        ? f(n, 2)
                        : void 0)))
              : (d = void 0));
          if (!(n = d))
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          a[n[0]] = n[1];
        });
      self.Module = {};
      self.basePath = a.externalPath;
      self.workerCallbackId = null;
      self.runtimeInitialized = !1;
      self.onIdleHandler = {
        timeout: 0,
        minTimeout: 0,
        inactiveTimeout: 10,
        timeoutThreshold: 20,
        factor: 3 / 1.1,
        messagesBetweenCalls: 0,
        reset: function () {
          this.minTimeout = this.timeout = 0;
          setTimeout(this.handle.bind(this), this.timeout);
        },
        handle: function () {
          if (self.runtimeInitialized)
            try {
              var n = Date.now();
              if (Module._on_idle()) {
                var d = Date.now() - n;
                this.timeout = this.minTimeout;
                d < this.timeoutThreshold &&
                  this.timeout < d * this.factor &&
                  ((this.minTimeout = this.timeout = d * this.factor * 1.1),
                  console.warn(
                    "onIdleHandler: onIdle took "
                      .concat(d, " ms, which is less than the threshold of ")
                      .concat(
                        this.timeoutThreshold,
                        " ms - increasing timeout to ",
                      )
                      .concat(this.timeout, " ms"),
                  ));
              } else
                ((this.messagesBetweenCalls = 0),
                  (this.timeout = this.inactiveTimeout));
            } catch (m) {
              postMessage({
                action: "responseFromOnIdle",
                error: m.toString(),
              });
            }
          0 < this.messagesBetweenCalls &&
            ((this.timeout = Math.max(
              this.minTimeout,
              this.inactiveTimeout * this.messagesBetweenCalls,
            )),
            (this.messagesBetweenCalls = 0));
          setTimeout(this.handle.bind(this), this.timeout);
        },
        countMessage: function () {
          this.messagesBetweenCalls++;
        },
      };
      (function () {
        function n() {
          if (m && self.runtimeInitialized) {
            var g = m;
            m = null;
            g.forEach(function (q) {
              onmessage(q);
            });
          }
        }
        function d() {
          n();
          m && setTimeout(d, 100);
        }
        var m = null,
          b = null,
          e = 0;
        onmessage = function (g) {
          if (self.runtimeInitialized) {
            n();
            self.onIdleHandler.countMessage();
            "load_document" === g.data.action && self.onIdleHandler.reset();
            var q = Module["_".concat(g.data.action)];
            if (!q)
              throw Error(
                "invalid worker function to call: ".concat(g.data.funcName),
              );
            var t = g.data.data;
            if (t) {
              t.byteLength || (t = new Uint8Array(t));
              if (!b || e < t.length)
                (b && Module._free(b),
                  (e = t.length),
                  (b = Module._malloc(t.length)));
              Module.HEAP8.set(t, b);
            }
            self.workerCallbackId = g.data.callbackId;
            try {
              t ? q(b, t.length) : q(0, 0);
            } catch (v) {
              postMessage({
                callbackId: self.workerCallbackId,
                data: { error: v.toString() },
              });
            }
          } else (m || ((m = []), setTimeout(d, 100)), m.push(g));
        };
      })();
      Object(h.a)(
        "OfficeEditorWorker",
        { "Wasm.wasm": 1e8, "Wasm.js.mem": 1e5, ".js.mem": 5e6, ".mem": 3e6 },
        !!navigator.userAgent.match(/Edge/i),
      );
    },
  ]);
}).call(this || window);
