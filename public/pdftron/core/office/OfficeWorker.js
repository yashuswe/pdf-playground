(function () {
  /*
 @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (e) {
    var l = 0;
    return function () {
      return l < e.length ? { done: !1, value: e[l++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (e) {
    return { next: $jscomp.arrayIteratorImpl(e) };
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
      : function (e, l, h) {
          if (e == Array.prototype || e == Object.prototype) return e;
          e[l] = h.value;
          return e;
        };
  $jscomp.getGlobal = function (e) {
    e = [
      "object" == typeof globalThis && globalThis,
      e,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var l = 0; l < e.length; ++l) {
      var h = e[l];
      if (h && h.Math == Math) return h;
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
  var $jscomp$lookupPolyfilledValue = function (e, l, h) {
    if (!h || null != e) {
      h = $jscomp.propertyToPolyfillSymbol[l];
      if (null == h) return e[l];
      h = e[h];
      return void 0 !== h ? h : e[l];
    }
  };
  $jscomp.polyfill = function (e, l, h, d) {
    l &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(e, l, h, d)
        : $jscomp.polyfillUnisolated(e, l, h, d));
  };
  $jscomp.polyfillUnisolated = function (e, l, h, d) {
    h = $jscomp.global;
    e = e.split(".");
    for (d = 0; d < e.length - 1; d++) {
      var a = e[d];
      if (!(a in h)) return;
      h = h[a];
    }
    e = e[e.length - 1];
    d = h[e];
    l = l(d);
    l != d &&
      null != l &&
      $jscomp.defineProperty(h, e, {
        configurable: !0,
        writable: !0,
        value: l,
      });
  };
  $jscomp.polyfillIsolated = function (e, l, h, d) {
    var a = e.split(".");
    e = 1 === a.length;
    d = a[0];
    d = !e && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var n = 0; n < a.length - 1; n++) {
      var f = a[n];
      if (!(f in d)) return;
      d = d[f];
    }
    a = a[a.length - 1];
    h = $jscomp.IS_SYMBOL_NATIVE && "es6" === h ? d[a] : null;
    l = l(h);
    null != l &&
      (e
        ? $jscomp.defineProperty($jscomp.polyfills, a, {
            configurable: !0,
            writable: !0,
            value: l,
          })
        : l !== h &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[a] &&
            ((h = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[a] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(a)
              : $jscomp.POLYFILL_PREFIX + h + "$" + a)),
          $jscomp.defineProperty(d, $jscomp.propertyToPolyfillSymbol[a], {
            configurable: !0,
            writable: !0,
            value: l,
          })));
  };
  $jscomp.initSymbol = function () {};
  $jscomp.polyfill(
    "Symbol",
    function (e) {
      if (e) return e;
      var l = function (n, f) {
        this.$jscomp$symbol$id_ = n;
        $jscomp.defineProperty(this, "description", {
          configurable: !0,
          writable: !0,
          value: f,
        });
      };
      l.prototype.toString = function () {
        return this.$jscomp$symbol$id_;
      };
      var h = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        d = 0,
        a = function (n) {
          if (this instanceof a)
            throw new TypeError("Symbol is not a constructor");
          return new l(h + (n || "") + "_" + d++, n);
        };
      return a;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Symbol.iterator",
    function (e) {
      if (e) return e;
      e = Symbol("Symbol.iterator");
      for (
        var l =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " ",
            ),
          h = 0;
        h < l.length;
        h++
      ) {
        var d = $jscomp.global[l[h]];
        "function" === typeof d &&
          "function" != typeof d.prototype[e] &&
          $jscomp.defineProperty(d.prototype, e, {
            configurable: !0,
            writable: !0,
            value: function () {
              return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
            },
          });
      }
      return e;
    },
    "es6",
    "es3",
  );
  $jscomp.iteratorPrototype = function (e) {
    e = { next: e };
    e[Symbol.iterator] = function () {
      return this;
    };
    return e;
  };
  $jscomp.makeIterator = function (e) {
    var l =
      "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
    if (l) return l.call(e);
    if ("number" == typeof e.length) return $jscomp.arrayIterator(e);
    throw Error(String(e) + " is not an iterable or ArrayLike");
  };
  $jscomp.arrayFromIterator = function (e) {
    for (var l, h = []; !(l = e.next()).done; ) h.push(l.value);
    return h;
  };
  $jscomp.arrayFromIterable = function (e) {
    return e instanceof Array
      ? e
      : $jscomp.arrayFromIterator($jscomp.makeIterator(e));
  };
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var e = {},
        l = Object.create(
          new $jscomp.global.Proxy(e, {
            get: function (h, d, a) {
              return h == e && "q" == d && a == l;
            },
          }),
        );
      return !0 === l.q;
    } catch (h) {
      return !1;
    }
  };
  $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
  $jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy();
  $jscomp.owns = function (e, l) {
    return Object.prototype.hasOwnProperty.call(e, l);
  };
  $jscomp.polyfill(
    "WeakMap",
    function (e) {
      function l() {
        if (!e || !Object.seal) return !1;
        try {
          var g = Object.seal({}),
            m = Object.seal({}),
            q = new e([
              [g, 2],
              [m, 3],
            ]);
          if (2 != q.get(g) || 3 != q.get(m)) return !1;
          q.delete(g);
          q.set(m, 4);
          return !q.has(g) && 4 == q.get(m);
        } catch (w) {
          return !1;
        }
      }
      function h() {}
      function d(g) {
        var m = typeof g;
        return ("object" === m && null !== g) || "function" === m;
      }
      function a(g) {
        if (!$jscomp.owns(g, f)) {
          var m = new h();
          $jscomp.defineProperty(g, f, { value: m });
        }
      }
      function n(g) {
        if (!$jscomp.ISOLATE_POLYFILLS) {
          var m = Object[g];
          m &&
            (Object[g] = function (q) {
              if (q instanceof h) return q;
              Object.isExtensible(q) && a(q);
              return m(q);
            });
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (e && $jscomp.ES6_CONFORMANCE) return e;
      } else if (l()) return e;
      var f = "$jscomp_hidden_" + Math.random();
      n("freeze");
      n("preventExtensions");
      n("seal");
      var k = 0,
        b = function (g) {
          this.id_ = (k += Math.random() + 1).toString();
          if (g) {
            g = $jscomp.makeIterator(g);
            for (var m; !(m = g.next()).done; )
              ((m = m.value), this.set(m[0], m[1]));
          }
        };
      b.prototype.set = function (g, m) {
        if (!d(g)) throw Error("Invalid WeakMap key");
        a(g);
        if (!$jscomp.owns(g, f)) throw Error("WeakMap key fail: " + g);
        g[f][this.id_] = m;
        return this;
      };
      b.prototype.get = function (g) {
        return d(g) && $jscomp.owns(g, f) ? g[f][this.id_] : void 0;
      };
      b.prototype.has = function (g) {
        return d(g) && $jscomp.owns(g, f) && $jscomp.owns(g[f], this.id_);
      };
      b.prototype.delete = function (g) {
        return d(g) && $jscomp.owns(g, f) && $jscomp.owns(g[f], this.id_)
          ? delete g[f][this.id_]
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
    function (e) {
      function l() {
        if (
          $jscomp.ASSUME_NO_NATIVE_MAP ||
          !e ||
          "function" != typeof e ||
          !e.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var b = Object.seal({ x: 4 }),
            g = new e($jscomp.makeIterator([[b, "s"]]));
          if (
            "s" != g.get(b) ||
            1 != g.size ||
            g.get({ x: 4 }) ||
            g.set({ x: 4 }, "t") != g ||
            2 != g.size
          )
            return !1;
          var m = g.entries(),
            q = m.next();
          if (q.done || q.value[0] != b || "s" != q.value[1]) return !1;
          q = m.next();
          return q.done ||
            4 != q.value[0].x ||
            "t" != q.value[1] ||
            !m.next().done
            ? !1
            : !0;
        } catch (w) {
          return !1;
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (e && $jscomp.ES6_CONFORMANCE) return e;
      } else if (l()) return e;
      var h = new WeakMap(),
        d = function (b) {
          this.data_ = {};
          this.head_ = f();
          this.size = 0;
          if (b) {
            b = $jscomp.makeIterator(b);
            for (var g; !(g = b.next()).done; )
              ((g = g.value), this.set(g[0], g[1]));
          }
        };
      d.prototype.set = function (b, g) {
        b = 0 === b ? 0 : b;
        var m = a(this, b);
        m.list || (m.list = this.data_[m.id] = []);
        m.entry
          ? (m.entry.value = g)
          : ((m.entry = {
              next: this.head_,
              previous: this.head_.previous,
              head: this.head_,
              key: b,
              value: g,
            }),
            m.list.push(m.entry),
            (this.head_.previous.next = m.entry),
            (this.head_.previous = m.entry),
            this.size++);
        return this;
      };
      d.prototype.delete = function (b) {
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
      d.prototype.clear = function () {
        this.data_ = {};
        this.head_ = this.head_.previous = f();
        this.size = 0;
      };
      d.prototype.has = function (b) {
        return !!a(this, b).entry;
      };
      d.prototype.get = function (b) {
        return (b = a(this, b).entry) && b.value;
      };
      d.prototype.entries = function () {
        return n(this, function (b) {
          return [b.key, b.value];
        });
      };
      d.prototype.keys = function () {
        return n(this, function (b) {
          return b.key;
        });
      };
      d.prototype.values = function () {
        return n(this, function (b) {
          return b.value;
        });
      };
      d.prototype.forEach = function (b, g) {
        for (var m = this.entries(), q; !(q = m.next()).done; )
          ((q = q.value), b.call(g, q[1], q[0], this));
      };
      d.prototype[Symbol.iterator] = d.prototype.entries;
      var a = function (b, g) {
          var m = g && typeof g;
          "object" == m || "function" == m
            ? h.has(g)
              ? (m = h.get(g))
              : ((m = "" + ++k), h.set(g, m))
            : (m = "p_" + g);
          var q = b.data_[m];
          if (q && $jscomp.owns(b.data_, m))
            for (b = 0; b < q.length; b++) {
              var w = q[b];
              if ((g !== g && w.key !== w.key) || g === w.key)
                return { id: m, list: q, index: b, entry: w };
            }
          return { id: m, list: q, index: -1, entry: void 0 };
        },
        n = function (b, g) {
          var m = b.head_;
          return $jscomp.iteratorPrototype(function () {
            if (m) {
              for (; m.head != b.head_; ) m = m.previous;
              for (; m.next != m.head; )
                return ((m = m.next), { done: !1, value: g(m) });
              m = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var b = {};
          return (b.previous = b.next = b.head = b);
        },
        k = 0;
      return d;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Promise",
    function (e) {
      function l() {
        this.batch_ = null;
      }
      function h(f) {
        return f instanceof a
          ? f
          : new a(function (k, b) {
              k(f);
            });
      }
      if (
        e &&
        (!(
          $jscomp.FORCE_POLYFILL_PROMISE ||
          ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
            "undefined" === typeof $jscomp.global.PromiseRejectionEvent)
        ) ||
          !$jscomp.global.Promise ||
          -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))
      )
        return e;
      l.prototype.asyncExecute = function (f) {
        if (null == this.batch_) {
          this.batch_ = [];
          var k = this;
          this.asyncExecuteFunction(function () {
            k.executeBatch_();
          });
        }
        this.batch_.push(f);
      };
      var d = $jscomp.global.setTimeout;
      l.prototype.asyncExecuteFunction = function (f) {
        d(f, 0);
      };
      l.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var f = this.batch_;
          this.batch_ = [];
          for (var k = 0; k < f.length; ++k) {
            var b = f[k];
            f[k] = null;
            try {
              b();
            } catch (g) {
              this.asyncThrow_(g);
            }
          }
        }
        this.batch_ = null;
      };
      l.prototype.asyncThrow_ = function (f) {
        this.asyncExecuteFunction(function () {
          throw f;
        });
      };
      var a = function (f) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var k = this.createResolveAndReject_();
        try {
          f(k.resolve, k.reject);
        } catch (b) {
          k.reject(b);
        }
      };
      a.prototype.createResolveAndReject_ = function () {
        function f(g) {
          return function (m) {
            b || ((b = !0), g.call(k, m));
          };
        }
        var k = this,
          b = !1;
        return { resolve: f(this.resolveTo_), reject: f(this.reject_) };
      };
      a.prototype.resolveTo_ = function (f) {
        if (f === this)
          this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (f instanceof a) this.settleSameAsPromise_(f);
        else {
          a: switch (typeof f) {
            case "object":
              var k = null != f;
              break a;
            case "function":
              k = !0;
              break a;
            default:
              k = !1;
          }
          k ? this.resolveToNonPromiseObj_(f) : this.fulfill_(f);
        }
      };
      a.prototype.resolveToNonPromiseObj_ = function (f) {
        var k = void 0;
        try {
          k = f.then;
        } catch (b) {
          this.reject_(b);
          return;
        }
        "function" == typeof k
          ? this.settleSameAsThenable_(k, f)
          : this.fulfill_(f);
      };
      a.prototype.reject_ = function (f) {
        this.settle_(2, f);
      };
      a.prototype.fulfill_ = function (f) {
        this.settle_(1, f);
      };
      a.prototype.settle_ = function (f, k) {
        if (0 != this.state_)
          throw Error(
            "Cannot settle(" +
              f +
              ", " +
              k +
              "): Promise already settled in state" +
              this.state_,
          );
        this.state_ = f;
        this.result_ = k;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      a.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var f = this;
        d(function () {
          if (f.notifyUnhandledRejection_()) {
            var k = $jscomp.global.console;
            "undefined" !== typeof k && k.error(f.result_);
          }
        }, 1);
      };
      a.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var f = $jscomp.global.CustomEvent,
          k = $jscomp.global.Event,
          b = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof b) return !0;
        "function" === typeof f
          ? (f = new f("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof k
            ? (f = new k("unhandledrejection", { cancelable: !0 }))
            : ((f = $jscomp.global.document.createEvent("CustomEvent")),
              f.initCustomEvent("unhandledrejection", !1, !0, f));
        f.promise = this;
        f.reason = this.result_;
        return b(f);
      };
      a.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var f = 0; f < this.onSettledCallbacks_.length; ++f)
            n.asyncExecute(this.onSettledCallbacks_[f]);
          this.onSettledCallbacks_ = null;
        }
      };
      var n = new l();
      a.prototype.settleSameAsPromise_ = function (f) {
        var k = this.createResolveAndReject_();
        f.callWhenSettled_(k.resolve, k.reject);
      };
      a.prototype.settleSameAsThenable_ = function (f, k) {
        var b = this.createResolveAndReject_();
        try {
          f.call(k, b.resolve, b.reject);
        } catch (g) {
          b.reject(g);
        }
      };
      a.prototype.then = function (f, k) {
        function b(w, x) {
          return "function" == typeof w
            ? function (A) {
                try {
                  g(w(A));
                } catch (p) {
                  m(p);
                }
              }
            : x;
        }
        var g,
          m,
          q = new a(function (w, x) {
            g = w;
            m = x;
          });
        this.callWhenSettled_(b(f, g), b(k, m));
        return q;
      };
      a.prototype.catch = function (f) {
        return this.then(void 0, f);
      };
      a.prototype.callWhenSettled_ = function (f, k) {
        function b() {
          switch (g.state_) {
            case 1:
              f(g.result_);
              break;
            case 2:
              k(g.result_);
              break;
            default:
              throw Error("Unexpected state: " + g.state_);
          }
        }
        var g = this;
        null == this.onSettledCallbacks_
          ? n.asyncExecute(b)
          : this.onSettledCallbacks_.push(b);
        this.isRejectionHandled_ = !0;
      };
      a.resolve = h;
      a.reject = function (f) {
        return new a(function (k, b) {
          b(f);
        });
      };
      a.race = function (f) {
        return new a(function (k, b) {
          for (
            var g = $jscomp.makeIterator(f), m = g.next();
            !m.done;
            m = g.next()
          )
            h(m.value).callWhenSettled_(k, b);
        });
      };
      a.all = function (f) {
        var k = $jscomp.makeIterator(f),
          b = k.next();
        return b.done
          ? h([])
          : new a(function (g, m) {
              function q(A) {
                return function (p) {
                  w[A] = p;
                  x--;
                  0 == x && g(w);
                };
              }
              var w = [],
                x = 0;
              do
                (w.push(void 0),
                  x++,
                  h(b.value).callWhenSettled_(q(w.length - 1), m),
                  (b = k.next()));
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
    function (e) {
      return e
        ? e
        : function (l, h, d) {
            h =
              null != h
                ? h
                : function (k) {
                    return k;
                  };
            var a = [],
              n =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                l[Symbol.iterator];
            if ("function" == typeof n) {
              l = n.call(l);
              for (var f = 0; !(n = l.next()).done; )
                a.push(h.call(d, n.value, f++));
            } else
              for (n = l.length, f = 0; f < n; f++) a.push(h.call(d, l[f], f));
            return a;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.checkStringArgs = function (e, l, h) {
    if (null == e)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          h +
          " must not be null or undefined",
      );
    if (l instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          h +
          " must not be a regular expression",
      );
    return e + "";
  };
  $jscomp.polyfill(
    "String.prototype.endsWith",
    function (e) {
      return e
        ? e
        : function (l, h) {
            var d = $jscomp.checkStringArgs(this, l, "endsWith");
            l += "";
            void 0 === h && (h = d.length);
            h = Math.max(0, Math.min(h | 0, d.length));
            for (var a = l.length; 0 < a && 0 < h; )
              if (d[--h] != l[--a]) return !1;
            return 0 >= a;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.underscoreProtoCanBeSet = function () {
    var e = { a: !0 },
      l = {};
    try {
      return ((l.__proto__ = e), l.a);
    } catch (h) {}
    return !1;
  };
  $jscomp.setPrototypeOf =
    $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : $jscomp.underscoreProtoCanBeSet()
        ? function (e, l) {
            e.__proto__ = l;
            if (e.__proto__ !== l)
              throw new TypeError(e + " is not extensible");
            return e;
          }
        : null;
  $jscomp.polyfill(
    "Object.setPrototypeOf",
    function (e) {
      return e || $jscomp.setPrototypeOf;
    },
    "es6",
    "es5",
  );
  $jscomp.assign =
    $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign
      ? Object.assign
      : function (e, l) {
          for (var h = 1; h < arguments.length; h++) {
            var d = arguments[h];
            if (d) for (var a in d) $jscomp.owns(d, a) && (e[a] = d[a]);
          }
          return e;
        };
  $jscomp.polyfill(
    "Object.assign",
    function (e) {
      return e || $jscomp.assign;
    },
    "es6",
    "es3",
  );
  (function (e) {
    function l(d) {
      if (h[d]) return h[d].exports;
      var a = (h[d] = { i: d, l: !1, exports: {} });
      e[d].call(a.exports, a, a.exports, l);
      a.l = !0;
      return a.exports;
    }
    var h = {};
    l.m = e;
    l.c = h;
    l.d = function (d, a, n) {
      l.o(d, a) || Object.defineProperty(d, a, { enumerable: !0, get: n });
    };
    l.r = function (d) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(d, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(d, "__esModule", { value: !0 });
    };
    l.t = function (d, a) {
      a & 1 && (d = l(d));
      if (a & 8 || (a & 4 && "object" === typeof d && d && d.__esModule))
        return d;
      var n = Object.create(null);
      l.r(n);
      Object.defineProperty(n, "default", { enumerable: !0, value: d });
      if (a & 2 && "string" != typeof d)
        for (var f in d)
          l.d(
            n,
            f,
            function (k) {
              return d[k];
            }.bind(null, f),
          );
      return n;
    };
    l.n = function (d) {
      var a =
        d && d.__esModule
          ? function () {
              return d["default"];
            }
          : function () {
              return d;
            };
      l.d(a, "a", a);
      return a;
    };
    l.o = function (d, a) {
      return Object.prototype.hasOwnProperty.call(d, a);
    };
    l.p = "/core/office/";
    return l((l.s = 15));
  })([
    function (e, l, h) {
      h.d(l, "b", function () {
        return a;
      });
      h.d(l, "a", function () {
        return n;
      });
      var d = h(1),
        a = function (f, k) {
          Object(d.a)("disableLogs") ||
            (k ? console.warn("".concat(f, ": ").concat(k)) : console.warn(f));
        },
        n = function (f, k) {};
    },
    function (e, l, h) {
      h.d(l, "a", function () {
        return n;
      });
      h.d(l, "b", function () {
        return f;
      });
      var d = {},
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
        n = function (k) {
          return a[k];
        },
        f = function (k, b) {
          var g;
          a[k] = b;
          null === (g = d[k]) || void 0 === g
            ? void 0
            : g.forEach(function (m) {
                m(b);
              });
        };
    },
    function (e, l, h) {
      h.d(l, "a", function () {
        return M;
      });
      h.d(l, "b", function () {
        return O;
      });
      var d = h(3),
        a = h(0),
        n = h(6),
        f = h(4),
        k = h(5),
        b = "undefined" === typeof window ? self : window,
        g = b.importScripts,
        m = !1,
        q = function (r, v) {
          m ||
            (g(Object(k.a)("".concat(b.basePath, "decode.min.js"))), (m = !0));
          r = Object(f.b)(r);
          r = self.BrotliDecode(r);
          return v ? r : Object(f.a)(r);
        },
        w = function (r, v) {
          return Object(d.b)(void 0, void 0, Promise, function () {
            var z;
            return Object(d.c)(this, function (D) {
              switch (D.label) {
                case 0:
                  return m
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
                  (D.sent(), (m = !0), (D.label = 2));
                case 2:
                  return (
                    (z = self.BrotliDecode(Object(f.b)(r))),
                    [2, v ? z : Object(f.a)(z)]
                  );
              }
            });
          });
        };
      (function () {
        function r() {
          this.remainingDataArrays = [];
        }
        r.prototype.processRaw = function (v) {
          return v;
        };
        r.prototype.processBrotli = function (v) {
          this.remainingDataArrays.push(v);
          return null;
        };
        r.prototype.GetNextChunk = function (v) {
          this.decodeFunction ||
            (this.decodeFunction =
              0 === v[0] && 97 === v[1] && 115 === v[2] && 109 === v[3]
                ? this.processRaw
                : this.processBrotli);
          return this.decodeFunction(v);
        };
        r.prototype.End = function () {
          if (this.remainingDataArrays.length) {
            for (var v = this.arrays, z = 0, D = 0; D < v.length; ++D)
              z += v[D].length;
            z = new Uint8Array(z);
            var I = 0;
            for (D = 0; D < v.length; ++D) {
              var S = v[D];
              z.set(S, I);
              I += S.length;
            }
            return q(z, !0);
          }
          return null;
        };
        return r;
      })();
      var x = function (r, v, z) {
          void 0 === v && (v = !0);
          void 0 === z && (z = !1);
          var D = new XMLHttpRequest();
          D.open("GET", r, v);
          r = z && D.overrideMimeType;
          D.responseType = r ? "text" : "arraybuffer";
          r && D.overrideMimeType("text/plain; charset=x-user-defined");
          return D;
        },
        A = function (r, v, z) {
          return new Promise(function (D, I) {
            var S = x(r, v, z);
            S.send();
            S.onload = function () {
              200 === this.status || 0 === this.status
                ? D(S.response)
                : I(Error("Download Failed ".concat(r)));
            };
            S.onerror = function () {
              I(Error("Network error occurred ".concat(r)));
            };
          });
        },
        p = function (r, v) {
          var z = v.decompressFunction,
            D = v.shouldOutputArray,
            I = v.compressedMaximum,
            S = "undefined" !== typeof g ? Date.now() : null;
          try {
            var t = D ? B(r) : r.join("");
            Object(a.a)("worker", "Result length is ".concat(t.length));
            if (t.length < I) {
              var C = z(t, D);
              Object(a.b)(
                "There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this.",
              );
              g &&
                Object(a.a)(
                  "worker",
                  "Decompressed length is ".concat(C.length),
                );
              t = C;
            } else D || (t = Object(f.a)(t));
            if (g) {
              var J = v.paths.join(", ");
              Object(a.a)(
                "worker",
                ""
                  .concat(J, " Decompression took ")
                  .concat(Date.now() - S, " ms"),
              );
            }
            return t;
          } catch (U) {
            throw Error("Failed to decompress: ".concat(U));
          }
        },
        B = function (r) {
          r = r.reduce(function (v, z) {
            z = new Uint8Array(z);
            return v.concat(Array.from(z));
          }, []);
          return new Uint8Array(r);
        },
        P = function (r) {
          var v = !r.shouldOutputArray,
            z = r.paths,
            D = r.isAsync;
          D
            ? (z = Promise.all(
                z.map(function (I) {
                  return A(I, D, v);
                }),
              )
                .then(function (I) {
                  return p(I, r);
                })
                .catch(function (I) {
                  throw Error(
                    "Failed to fetch or decompress files: ".concat(I.message),
                  );
                }))
            : ((z = z.map(function (I) {
                var S = x(I, D, v);
                S.send();
                if (200 === S.status || 0 === S.status) return S.response;
                throw Error("Failed to load ".concat(I));
              })),
              (z = p(z, r)));
          return z;
        },
        M = function (r) {
          var v = r.lastIndexOf("/");
          -1 === v && (v = 0);
          var z = r.slice(v).replace(".", ".br.");
          g ||
            (z.endsWith(".js.mem")
              ? (z = z.replace(".js.mem", ".mem"))
              : z.endsWith(".js") && (z = z.concat(".mem")));
          return r.slice(0, v) + z;
        },
        T = function (r) {
          return r.map(function (v) {
            return M(v);
          });
        },
        ba = function (r, v) {
          v.decompressFunction = g ? q : w;
          v.paths = T(r);
          return P(v);
        },
        K = function (r, v, z, D) {
          return r.catch(function (I) {
            Object(a.b)(I);
            return D(v, z);
          });
        },
        O = function (r, v, z, D) {
          r = Array.isArray(r) ? r : [r];
          a: {
            var I = [ba];
            v = { compressedMaximum: v, isAsync: z, shouldOutputArray: D };
            if (v.isAsync) {
              var S = I[0](r, v);
              for (z = 1; z < I.length; ++z) S = K(S, r, v, I[z]);
            } else {
              for (z = 0; z < I.length; z++) {
                D = I[z];
                try {
                  S = D(r, v);
                  break a;
                } catch (t) {
                  Object(a.b)(t.message);
                }
              }
              throw Error("None of the worker files were able to load. ");
            }
          }
          return S;
        };
    },
    function (e, l, h) {
      function d(f, k, b, g) {
        function m(q) {
          return q instanceof b
            ? q
            : new b(function (w) {
                w(q);
              });
        }
        return new (b || (b = Promise))(function (q, w) {
          function x(B) {
            try {
              p(g.next(B));
            } catch (P) {
              w(P);
            }
          }
          function A(B) {
            try {
              p(g["throw"](B));
            } catch (P) {
              w(P);
            }
          }
          function p(B) {
            B.done ? q(B.value) : m(B.value).then(x, A);
          }
          p((g = g.apply(f, k || [])).next());
        });
      }
      function a(f, k) {
        function b(p) {
          return function (B) {
            return g([p, B]);
          };
        }
        function g(p) {
          if (q) throw new TypeError("Generator is already executing.");
          for (; A && ((A = 0), p[0] && (m = 0)), m; )
            try {
              if (
                ((q = 1),
                w &&
                  (x =
                    p[0] & 2
                      ? w["return"]
                      : p[0]
                        ? w["throw"] || ((x = w["return"]) && x.call(w), 0)
                        : w.next) &&
                  !(x = x.call(w, p[1])).done)
              )
                return x;
              if (((w = 0), x)) p = [p[0] & 2, x.value];
              switch (p[0]) {
                case 0:
                case 1:
                  x = p;
                  break;
                case 4:
                  return (m.label++, { value: p[1], done: !1 });
                case 5:
                  m.label++;
                  w = p[1];
                  p = [0];
                  continue;
                case 7:
                  p = m.ops.pop();
                  m.trys.pop();
                  continue;
                default:
                  if (
                    !((x = m.trys), (x = 0 < x.length && x[x.length - 1])) &&
                    (6 === p[0] || 2 === p[0])
                  ) {
                    m = 0;
                    continue;
                  }
                  if (3 === p[0] && (!x || (p[1] > x[0] && p[1] < x[3])))
                    m.label = p[1];
                  else if (6 === p[0] && m.label < x[1])
                    ((m.label = x[1]), (x = p));
                  else if (x && m.label < x[2])
                    ((m.label = x[2]), m.ops.push(p));
                  else {
                    x[2] && m.ops.pop();
                    m.trys.pop();
                    continue;
                  }
              }
              p = k.call(f, m);
            } catch (B) {
              ((p = [6, B]), (w = 0));
            } finally {
              q = x = 0;
            }
          if (p[0] & 5) throw p[1];
          return { value: p[0] ? p[1] : void 0, done: !0 };
        }
        var m = {
            label: 0,
            sent: function () {
              if (x[0] & 1) throw x[1];
              return x[1];
            },
            trys: [],
            ops: [],
          },
          q,
          w,
          x,
          A = Object.create(
            ("function" === typeof Iterator ? Iterator : Object).prototype,
          );
        return (
          (A.next = b(0)),
          (A["throw"] = b(1)),
          (A["return"] = b(2)),
          "function" === typeof Symbol &&
            (A[Symbol.iterator] = function () {
              return this;
            }),
          A
        );
      }
      h.d(l, "a", function () {
        return n;
      });
      h.d(l, "b", function () {
        return d;
      });
      h.d(l, "c", function () {
        return a;
      });
      var n = function () {
        n =
          Object.assign ||
          function (f) {
            for (var k, b = 1, g = arguments.length; b < g; b++) {
              k = arguments[b];
              for (var m in k)
                Object.prototype.hasOwnProperty.call(k, m) && (f[m] = k[m]);
            }
            return f;
          };
        return n.apply(this, arguments);
      };
    },
    function (e, l, h) {
      h.d(l, "b", function () {
        return d;
      });
      h.d(l, "a", function () {
        return a;
      });
      var d = function (n) {
          if ("string" === typeof n) {
            for (
              var f = new Uint8Array(n.length), k = n.length, b = 0;
              b < k;
              b++
            )
              f[b] = n.charCodeAt(b);
            return f;
          }
          return n;
        },
        a = function (n) {
          if ("string" !== typeof n) {
            for (var f = "", k = 0, b = n.length, g; k < b; )
              ((g = n.subarray(k, k + 1024)),
                (k += 1024),
                (f += String.fromCharCode.apply(null, g)));
            return f;
          }
          return n;
        };
    },
    function (e, l, h) {
      h.d(l, "a", function () {
        return m;
      });
      var d = h(3);
      e = h(9);
      var a = h.n(e),
        n = new Map(),
        f = function () {
          return ("undefined" === typeof window ? self : window).trustedTypes;
        },
        k = function (q, w) {
          return f().createPolicy(q, {
            createHTML: function (x) {
              return a.a.sanitize(
                x,
                Object(d.a)(Object(d.a)({}, w), { RETURN_TRUSTED_TYPE: !1 }),
              );
            },
            createScript: function (x) {
              return x;
            },
            createScriptURL: function (x) {
              return x;
            },
          });
        },
        b = function (q) {
          return f().createPolicy(q, {
            createHTML: function (w) {
              return w;
            },
            createScript: function (w) {
              return w;
            },
            createScriptURL: function (w) {
              return w;
            },
          });
        },
        g = function (q, w) {
          var x,
            A = {
              createHTML: function (p) {
                return a.a.sanitize(p, Object(d.a)({}, w));
              },
              createScript: function (p) {
                return p;
              },
              createScriptURL: function (p) {
                return p;
              },
            };
          if (null === (x = f()) || void 0 === x ? 0 : x.createPolicy)
            ((x = "".concat(q, "-po")),
              n.has(q) || ((A = b(x)), n.set(x, A), (A = k(q, w)), n.set(q, A)),
              (A = n.get(w.createPolicyOnly ? x : q)));
          return A;
        },
        m = function (q, w) {
          void 0 === w &&
            (w = { createPolicyOnly: !0, trustedTypesPolicyName: "webviewer" });
          return g(w.trustedTypesPolicyName, w).createScriptURL(q.toString());
        };
    },
    function (e, l, h) {
      function d(n, f, k) {
        return new Promise(function (b) {
          if (!n) return b();
          var g = k.document.createElement("script");
          g.type = "text/javascript";
          g.onload = function () {
            b();
          };
          g.onerror = function () {
            f && Object(a.b)(f);
            b();
          };
          g.src = n;
          k.document.getElementsByTagName("head")[0].appendChild(g);
        });
      }
      h.d(l, "a", function () {
        return d;
      });
      var a = h(0);
    },
    function (e, l, h) {
      function d(b, g, m, q) {
        return a(
          b,
          g,
          m,
          q,
          !!WebAssembly.instantiateStreaming,
          void 0,
          void 0,
        ).then(function (w) {
          Object(n.a)(
            "load",
            "WASM compilation took ".concat(Date.now() - NaN, " ms"),
          );
          return w;
        });
      }
      function a(b, g, m, q, w, x, A) {
        x = x || Date.now();
        if (w && !q)
          return (
            Object(n.a)("load", "Try instantiateStreaming"),
            fetch(Object(f.a)(b))
              .then(function (p) {
                return WebAssembly.instantiateStreaming(p, g);
              })
              .catch(function (p) {
                Object(n.a)(
                  "load",
                  "instantiateStreaming Failed "
                    .concat(b, " message ")
                    .concat(p.message),
                );
                return a(b, g, m, q, !1, x, A);
              })
          );
        w = q
          ? q.map(function (p, B) {
              return "".concat(p, "PDFNetCWasm-chunk-").concat(B, ".wasm");
            })
          : b;
        return Object(f.b)(w, m, !0, !0).then(function (p) {
          A = Date.now();
          Object(n.a)("load", "Request took ".concat(A - x, " ms"));
          return WebAssembly.instantiate(p, g);
        });
      }
      h.d(l, "a", function () {
        return d;
      });
      var n = h(0),
        f = h(2),
        k = h(6);
      h.d(l, "b", function () {
        return k.a;
      });
    },
    function (e, l) {
      l = (function () {
        return this;
      })();
      try {
        l = l || new Function("return this")();
      } catch (h) {
        "object" === typeof window && (l = window);
      }
      e.exports = l;
    },
    function (e, l, h) {
      (function (d, a) {
        e.exports = a();
      })(this, function () {
        function d(L) {
          return function (E) {
            E instanceof RegExp && (E.lastIndex = 0);
            for (
              var H = arguments.length, N = Array(1 < H ? H - 1 : 0), Q = 1;
              Q < H;
              Q++
            )
              N[Q - 1] = arguments[Q];
            return P(L, E, N);
          };
        }
        function a(L, E) {
          var H =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : v;
          m && m(L, null);
          for (var N = E.length; N--; ) {
            var Q = E[N];
            if ("string" === typeof Q) {
              var fa = H(Q);
              fa !== Q && (q(E) || (E[N] = fa), (Q = fa));
            }
            L[Q] = !0;
          }
          return L;
        }
        function n(L) {
          for (
            var E = B(null), H = $jscomp.makeIterator(g(L)), N = H.next();
            !N.done;
            N = H.next()
          ) {
            var Q = $jscomp.makeIterator(N.value);
            N = Q.next().value;
            Q = Q.next().value;
            if (C(L, N))
              if (Array.isArray(Q)) {
                for (var fa = 0; fa < Q.length; fa++)
                  C(Q, fa) || (Q[fa] = null);
                E[N] = Q;
              } else
                E[N] =
                  Q && "object" === typeof Q && Q.constructor === Object
                    ? n(Q)
                    : Q;
          }
          return E;
        }
        function f(L, E) {
          for (; null !== L; ) {
            var H = x(L, E);
            if (H) {
              if (H.get) return d(H.get);
              if ("function" === typeof H.value) return d(H.value);
            }
            L = w(L);
          }
          return function () {
            return null;
          };
        }
        function k() {
          function L(c, u, y) {
            T(c, function (F) {
              F.call(H, u, y, la);
            });
          }
          var E =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "undefined" === typeof window
                  ? null
                  : window,
            H = function (c) {
              return k(c);
            };
          H.version = "3.2.6";
          H.removed = [];
          if (
            !E ||
            !E.document ||
            E.document.nodeType !== ta.document ||
            !E.Element
          )
            return ((H.isSupported = !1), H);
          var N = E.document,
            Q = N,
            fa = Q.currentScript,
            ab = E.DocumentFragment,
            W = E.HTMLTemplateElement,
            Ia = E.Node,
            bb = E.Element,
            ua = E.NodeFilter,
            Ib =
              void 0 === E.NamedNodeMap
                ? E.NamedNodeMap || E.MozNamedAttrMap
                : E.NamedNodeMap,
            Jb = E.HTMLFormElement,
            Kb = E.DOMParser,
            Aa = E.trustedTypes;
          E = bb.prototype;
          var Lb = f(E, "cloneNode"),
            Mb = f(E, "remove"),
            Nb = f(E, "nextSibling"),
            Ob = f(E, "childNodes"),
            Ba = f(E, "parentNode");
          "function" === typeof W &&
            ((W = N.createElement("template")),
            W.content &&
              W.content.ownerDocument &&
              (N = W.content.ownerDocument));
          var ca,
            va = "";
          W = N;
          var Ja = W.implementation,
            Pb = W.createNodeIterator,
            Qb = W.createDocumentFragment,
            Rb = W.getElementsByTagName,
            Sb = Q.importNode,
            da = cb();
          H.isSupported =
            "function" === typeof g &&
            "function" === typeof Ba &&
            Ja &&
            void 0 !== Ja.createHTMLDocument;
          W = db;
          var Ka = W.MUSTACHE_EXPR,
            La = W.ERB_EXPR,
            Ma = W.TMPLIT_EXPR,
            Tb = W.DATA_ATTR,
            Ub = W.ARIA_ATTR,
            Vb = W.IS_SCRIPT_OR_DATA,
            eb = W.ATTR_WHITESPACE,
            fb = W.CUSTOM_ELEMENT,
            gb = db.IS_ALLOWED_URI,
            Y = null,
            ib = a(
              {},
              [].concat(
                $jscomp.arrayFromIterable(R),
                $jscomp.arrayFromIterable(ja),
                $jscomp.arrayFromIterable(ia),
                $jscomp.arrayFromIterable(wa),
                $jscomp.arrayFromIterable(hb),
              ),
            ),
            aa = null,
            lb = a(
              {},
              [].concat(
                $jscomp.arrayFromIterable(jb),
                $jscomp.arrayFromIterable(Na),
                $jscomp.arrayFromIterable(kb),
                $jscomp.arrayFromIterable(Ca),
              ),
            ),
            V = Object.seal(
              B(null, {
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
            xa = null,
            Oa = null,
            mb = !0,
            Pa = !0,
            nb = !1,
            ob = !0,
            ma = !1,
            Da = !0,
            ka = !1,
            Qa = !1,
            Ra = !1,
            na = !1,
            Ea = !1,
            Fa = !1,
            pb = !0,
            qb = !1,
            Sa = !0,
            ya = !1,
            oa = {},
            pa = null,
            rb = a(
              {},
              "annotation-xml audio colgroup desc foreignobject head iframe math mi mn mo ms mtext noembed noframes noscript plaintext script style svg template thead title video xmp".split(
                " ",
              ),
            ),
            sb = null,
            tb = a({}, "audio video img source image track".split(" ")),
            Ta = null,
            ub = a(
              {},
              "alt class for id label name pattern placeholder role summary title value style xmlns".split(
                " ",
              ),
            ),
            qa = "http://www.w3.org/1999/xhtml",
            vb = !1,
            Ua = null,
            Wb = a(
              {},
              [
                "http://www.w3.org/1998/Math/MathML",
                "http://www.w3.org/2000/svg",
                "http://www.w3.org/1999/xhtml",
              ],
              z,
            ),
            Ga = a({}, ["mi", "mo", "mn", "ms", "mtext"]),
            Ha = a({}, ["annotation-xml"]),
            Xb = a({}, ["title", "style", "font", "a", "script"]),
            za = null,
            Yb = ["application/xhtml+xml", "text/html"],
            Z = null,
            la = null,
            Zb = N.createElement("form"),
            wb = function (c) {
              return c instanceof RegExp || c instanceof Function;
            },
            Va = function () {
              var c =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!la || la !== c) {
                (c && "object" === typeof c) || (c = {});
                c = n(c);
                za =
                  -1 === Yb.indexOf(c.PARSER_MEDIA_TYPE)
                    ? "text/html"
                    : c.PARSER_MEDIA_TYPE;
                Z = "application/xhtml+xml" === za ? z : v;
                Y = C(c, "ALLOWED_TAGS") ? a({}, c.ALLOWED_TAGS, Z) : ib;
                aa = C(c, "ALLOWED_ATTR") ? a({}, c.ALLOWED_ATTR, Z) : lb;
                Ua = C(c, "ALLOWED_NAMESPACES")
                  ? a({}, c.ALLOWED_NAMESPACES, z)
                  : Wb;
                Ta = C(c, "ADD_URI_SAFE_ATTR")
                  ? a(n(ub), c.ADD_URI_SAFE_ATTR, Z)
                  : ub;
                sb = C(c, "ADD_DATA_URI_TAGS")
                  ? a(n(tb), c.ADD_DATA_URI_TAGS, Z)
                  : tb;
                pa = C(c, "FORBID_CONTENTS") ? a({}, c.FORBID_CONTENTS, Z) : rb;
                xa = C(c, "FORBID_TAGS") ? a({}, c.FORBID_TAGS, Z) : n({});
                Oa = C(c, "FORBID_ATTR") ? a({}, c.FORBID_ATTR, Z) : n({});
                oa = C(c, "USE_PROFILES") ? c.USE_PROFILES : !1;
                mb = !1 !== c.ALLOW_ARIA_ATTR;
                Pa = !1 !== c.ALLOW_DATA_ATTR;
                nb = c.ALLOW_UNKNOWN_PROTOCOLS || !1;
                ob = !1 !== c.ALLOW_SELF_CLOSE_IN_ATTR;
                ma = c.SAFE_FOR_TEMPLATES || !1;
                Da = !1 !== c.SAFE_FOR_XML;
                ka = c.WHOLE_DOCUMENT || !1;
                na = c.RETURN_DOM || !1;
                Ea = c.RETURN_DOM_FRAGMENT || !1;
                Fa = c.RETURN_TRUSTED_TYPE || !1;
                Ra = c.FORCE_BODY || !1;
                pb = !1 !== c.SANITIZE_DOM;
                qb = c.SANITIZE_NAMED_PROPS || !1;
                Sa = !1 !== c.KEEP_CONTENT;
                ya = c.IN_PLACE || !1;
                gb = c.ALLOWED_URI_REGEXP || xb;
                qa = c.NAMESPACE || "http://www.w3.org/1999/xhtml";
                Ga = c.MATHML_TEXT_INTEGRATION_POINTS || Ga;
                Ha = c.HTML_INTEGRATION_POINTS || Ha;
                V = c.CUSTOM_ELEMENT_HANDLING || {};
                c.CUSTOM_ELEMENT_HANDLING &&
                  wb(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (V.tagNameCheck = c.CUSTOM_ELEMENT_HANDLING.tagNameCheck);
                c.CUSTOM_ELEMENT_HANDLING &&
                  wb(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (V.attributeNameCheck =
                    c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck);
                c.CUSTOM_ELEMENT_HANDLING &&
                  "boolean" ===
                    typeof c.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements &&
                  (V.allowCustomizedBuiltInElements =
                    c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements);
                ma && (Pa = !1);
                Ea && (na = !0);
                oa &&
                  ((Y = a({}, hb)),
                  (aa = []),
                  !0 === oa.html && (a(Y, R), a(aa, jb)),
                  !0 === oa.svg && (a(Y, ja), a(aa, Na), a(aa, Ca)),
                  !0 === oa.svgFilters && (a(Y, ia), a(aa, Na), a(aa, Ca)),
                  !0 === oa.mathMl && (a(Y, wa), a(aa, kb), a(aa, Ca)));
                c.ADD_TAGS && (Y === ib && (Y = n(Y)), a(Y, c.ADD_TAGS, Z));
                c.ADD_ATTR && (aa === lb && (aa = n(aa)), a(aa, c.ADD_ATTR, Z));
                c.ADD_URI_SAFE_ATTR && a(Ta, c.ADD_URI_SAFE_ATTR, Z);
                c.FORBID_CONTENTS &&
                  (pa === rb && (pa = n(pa)), a(pa, c.FORBID_CONTENTS, Z));
                Sa && (Y["#text"] = !0);
                ka && a(Y, ["html", "head", "body"]);
                Y.table && (a(Y, ["tbody"]), delete xa.tbody);
                if (c.TRUSTED_TYPES_POLICY) {
                  if ("function" !== typeof c.TRUSTED_TYPES_POLICY.createHTML)
                    throw U(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
                    );
                  if (
                    "function" !== typeof c.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw U(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
                    );
                  ca = c.TRUSTED_TYPES_POLICY;
                  va = ca.createHTML("");
                } else
                  (void 0 === ca && (ca = $b(Aa, fa)),
                    null !== ca &&
                      "string" === typeof va &&
                      (va = ca.createHTML("")));
                p && p(c);
                la = c;
              }
            },
            yb = a(
              {},
              [].concat(
                $jscomp.arrayFromIterable(ja),
                $jscomp.arrayFromIterable(ia),
                $jscomp.arrayFromIterable(ra),
              ),
            ),
            zb = a(
              {},
              [].concat(
                $jscomp.arrayFromIterable(wa),
                $jscomp.arrayFromIterable(Wa),
              ),
            ),
            ac = function (c) {
              var u = Ba(c);
              (u && u.tagName) ||
                (u = { namespaceURI: qa, tagName: "template" });
              var y = v(c.tagName),
                F = v(u.tagName);
              return Ua[c.namespaceURI]
                ? "http://www.w3.org/2000/svg" === c.namespaceURI
                  ? "http://www.w3.org/1999/xhtml" === u.namespaceURI
                    ? "svg" === y
                    : "http://www.w3.org/1998/Math/MathML" === u.namespaceURI
                      ? "svg" === y && ("annotation-xml" === F || Ga[F])
                      : !!yb[y]
                  : "http://www.w3.org/1998/Math/MathML" === c.namespaceURI
                    ? "http://www.w3.org/1999/xhtml" === u.namespaceURI
                      ? "math" === y
                      : "http://www.w3.org/2000/svg" === u.namespaceURI
                        ? "math" === y && Ha[F]
                        : !!zb[y]
                    : "http://www.w3.org/1999/xhtml" === c.namespaceURI
                      ? ("http://www.w3.org/2000/svg" === u.namespaceURI &&
                          !Ha[F]) ||
                        ("http://www.w3.org/1998/Math/MathML" ===
                          u.namespaceURI &&
                          !Ga[F])
                        ? !1
                        : !zb[y] && (Xb[y] || !yb[y])
                      : "application/xhtml+xml" === za && Ua[c.namespaceURI]
                        ? !0
                        : !1
                : !1;
            },
            ha = function (c) {
              O(H.removed, { element: c });
              try {
                Ba(c).removeChild(c);
              } catch (u) {
                Mb(c);
              }
            },
            sa = function (c, u) {
              try {
                O(H.removed, { attribute: u.getAttributeNode(c), from: u });
              } catch (y) {
                O(H.removed, { attribute: null, from: u });
              }
              u.removeAttribute(c);
              if ("is" === c)
                if (na || Ea)
                  try {
                    ha(u);
                  } catch (y) {}
                else
                  try {
                    u.setAttribute(c, "");
                  } catch (y) {}
            },
            Ab = function (c) {
              var u = null,
                y = null;
              Ra
                ? (c = "<remove></remove>" + c)
                : (y = (y = D(c, /^[\r\n\t ]+/)) && y[0]);
              "application/xhtml+xml" === za &&
                "http://www.w3.org/1999/xhtml" === qa &&
                (c =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  c +
                  "</body></html>");
              var F = ca ? ca.createHTML(c) : c;
              if ("http://www.w3.org/1999/xhtml" === qa)
                try {
                  u = new Kb().parseFromString(F, za);
                } catch (G) {}
              if (!u || !u.documentElement) {
                u = Ja.createDocument(qa, "template", null);
                try {
                  u.documentElement.innerHTML = vb ? va : F;
                } catch (G) {}
              }
              F = u.body || u.documentElement;
              c &&
                y &&
                F.insertBefore(N.createTextNode(y), F.childNodes[0] || null);
              return "http://www.w3.org/1999/xhtml" === qa
                ? Rb.call(u, ka ? "html" : "body")[0]
                : ka
                  ? u.documentElement
                  : F;
            },
            Bb = function (c) {
              return Pb.call(
                c.ownerDocument || c,
                c,
                ua.SHOW_ELEMENT |
                  ua.SHOW_COMMENT |
                  ua.SHOW_TEXT |
                  ua.SHOW_PROCESSING_INSTRUCTION |
                  ua.SHOW_CDATA_SECTION,
                null,
              );
            },
            Xa = function (c) {
              return (
                c instanceof Jb &&
                ("string" !== typeof c.nodeName ||
                  "string" !== typeof c.textContent ||
                  "function" !== typeof c.removeChild ||
                  !(c.attributes instanceof Ib) ||
                  "function" !== typeof c.removeAttribute ||
                  "function" !== typeof c.setAttribute ||
                  "string" !== typeof c.namespaceURI ||
                  "function" !== typeof c.insertBefore ||
                  "function" !== typeof c.hasChildNodes)
              );
            },
            Cb = function (c) {
              return "function" === typeof Ia && c instanceof Ia;
            },
            Db = function (c) {
              var u = null;
              L(da.beforeSanitizeElements, c, null);
              if (Xa(c)) return (ha(c), !0);
              var y = Z(c.nodeName);
              L(da.uponSanitizeElement, c, { tagName: y, allowedTags: Y });
              if (
                (Da &&
                  c.hasChildNodes() &&
                  !Cb(c.firstElementChild) &&
                  J(/<[/\w!]/g, c.innerHTML) &&
                  J(/<[/\w!]/g, c.textContent)) ||
                c.nodeType === ta.progressingInstruction ||
                (Da && c.nodeType === ta.comment && J(/<[/\w]/g, c.data))
              )
                return (ha(c), !0);
              if (!Y[y] || xa[y]) {
                if (
                  !xa[y] &&
                  "annotation-xml" !== y &&
                  D(y, fb) &&
                  ((V.tagNameCheck instanceof RegExp && J(V.tagNameCheck, y)) ||
                    (V.tagNameCheck instanceof Function && V.tagNameCheck(y)))
                )
                  return !1;
                if (Sa && !pa[y]) {
                  y = Ba(c) || c.parentNode;
                  var F = Ob(c) || c.childNodes;
                  if (F && y)
                    for (var G = F.length - 1; 0 <= G; --G) {
                      var X = Lb(F[G], !0);
                      X.__removalCount = (c.__removalCount || 0) + 1;
                      y.insertBefore(X, Nb(c));
                    }
                }
                ha(c);
                return !0;
              }
              if (
                (c instanceof bb && !ac(c)) ||
                (("noscript" === y || "noembed" === y || "noframes" === y) &&
                  J(/<\/no(script|embed|frames)/i, c.innerHTML))
              )
                return (ha(c), !0);
              ma &&
                c.nodeType === ta.text &&
                ((u = c.textContent),
                T([Ka, La, Ma], function (ea) {
                  u = I(u, ea, " ");
                }),
                c.textContent !== u &&
                  (O(H.removed, { element: c.cloneNode() }),
                  (c.textContent = u)));
              L(da.afterSanitizeElements, c, null);
              return !1;
            },
            Eb = function (c, u, y) {
              if (pb && ("id" === u || "name" === u) && (y in N || y in Zb))
                return !1;
              if (!Pa || Oa[u] || !J(Tb, u))
                if (!mb || !J(Ub, u))
                  if (!aa[u] || Oa[u]) {
                    if (
                      !(
                        ("annotation-xml" !== c &&
                          D(c, fb) &&
                          ((V.tagNameCheck instanceof RegExp &&
                            J(V.tagNameCheck, c)) ||
                            (V.tagNameCheck instanceof Function &&
                              V.tagNameCheck(c))) &&
                          ((V.attributeNameCheck instanceof RegExp &&
                            J(V.attributeNameCheck, u)) ||
                            (V.attributeNameCheck instanceof Function &&
                              V.attributeNameCheck(u)))) ||
                        ("is" === u &&
                          V.allowCustomizedBuiltInElements &&
                          ((V.tagNameCheck instanceof RegExp &&
                            J(V.tagNameCheck, y)) ||
                            (V.tagNameCheck instanceof Function &&
                              V.tagNameCheck(y))))
                      )
                    )
                      return !1;
                  } else if (
                    !(
                      Ta[u] ||
                      J(gb, I(y, eb, "")) ||
                      (("src" === u || "xlink:href" === u || "href" === u) &&
                        "script" !== c &&
                        0 === S(y, "data:") &&
                        sb[c]) ||
                      (nb && !J(Vb, I(y, eb, "")))
                    ) &&
                    y
                  )
                    return !1;
              return !0;
            },
            Gb = function (c) {
              L(da.beforeSanitizeAttributes, c, null);
              var u = c.attributes;
              if (u && !Xa(c)) {
                for (
                  var y = {
                      attrName: "",
                      attrValue: "",
                      keepAttr: !0,
                      allowedAttributes: aa,
                      forceKeepAttr: void 0,
                    },
                    F = u.length,
                    G = {};
                  F--;

                ) {
                  var X = u[F],
                    ea = X.name,
                    Ya = X.namespaceURI,
                    Za = X.value;
                  X = Z(ea);
                  G.$jscomp$loop$prop$value$8 = "value" === ea ? Za : t(Za);
                  y.attrName = X;
                  y.attrValue = G.$jscomp$loop$prop$value$8;
                  y.keepAttr = !0;
                  y.forceKeepAttr = void 0;
                  L(da.uponSanitizeAttribute, c, y);
                  G.$jscomp$loop$prop$value$8 = y.attrValue;
                  !qb ||
                    ("id" !== X && "name" !== X) ||
                    (sa(ea, c),
                    (G.$jscomp$loop$prop$value$8 =
                      "user-content-" + G.$jscomp$loop$prop$value$8));
                  if (
                    Da &&
                    J(
                      /((--!?|])>)|<\/(style|title)/i,
                      G.$jscomp$loop$prop$value$8,
                    )
                  )
                    sa(ea, c);
                  else if (!y.forceKeepAttr)
                    if (y.keepAttr)
                      if (!ob && J(/\/>/i, G.$jscomp$loop$prop$value$8))
                        sa(ea, c);
                      else {
                        ma &&
                          T(
                            [Ka, La, Ma],
                            (function ($a) {
                              return function (bc) {
                                $a.$jscomp$loop$prop$value$8 = I(
                                  $a.$jscomp$loop$prop$value$8,
                                  bc,
                                  " ",
                                );
                              };
                            })(G),
                          );
                        var Fb = Z(c.nodeName);
                        if (Eb(Fb, X, G.$jscomp$loop$prop$value$8)) {
                          if (
                            ca &&
                            "object" === typeof Aa &&
                            "function" === typeof Aa.getAttributeType &&
                            !Ya
                          )
                            switch (Aa.getAttributeType(Fb, X)) {
                              case "TrustedHTML":
                                G.$jscomp$loop$prop$value$8 = ca.createHTML(
                                  G.$jscomp$loop$prop$value$8,
                                );
                                break;
                              case "TrustedScriptURL":
                                G.$jscomp$loop$prop$value$8 =
                                  ca.createScriptURL(
                                    G.$jscomp$loop$prop$value$8,
                                  );
                            }
                          if (G.$jscomp$loop$prop$value$8 !== Za)
                            try {
                              (Ya
                                ? c.setAttributeNS(
                                    Ya,
                                    ea,
                                    G.$jscomp$loop$prop$value$8,
                                  )
                                : c.setAttribute(
                                    ea,
                                    G.$jscomp$loop$prop$value$8,
                                  ),
                                Xa(c) ? ha(c) : K(H.removed));
                            } catch ($a) {
                              sa(ea, c);
                            }
                        } else sa(ea, c);
                      }
                    else sa(ea, c);
                  G = {
                    $jscomp$loop$prop$value$8: G.$jscomp$loop$prop$value$8,
                  };
                }
                L(da.afterSanitizeAttributes, c, null);
              }
            },
            cc = function y(u) {
              var F,
                G = Bb(u);
              for (L(da.beforeSanitizeShadowDOM, u, null); (F = G.nextNode()); )
                (L(da.uponSanitizeShadowNode, F, null),
                  Db(F),
                  Gb(F),
                  F.content instanceof ab && y(F.content));
              L(da.afterSanitizeShadowDOM, u, null);
            };
          H.sanitize = function (u) {
            var y =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              F = null,
              G = null;
            G = G = null;
            (vb = !u) && (u = "\x3c!--\x3e");
            if ("string" !== typeof u && !Cb(u))
              if ("function" === typeof u.toString) {
                if (((u = u.toString()), "string" !== typeof u))
                  throw U("dirty is not a string, aborting");
              } else throw U("toString is not a function");
            if (!H.isSupported) return u;
            Qa || Va(y);
            H.removed = [];
            "string" === typeof u && (ya = !1);
            if (ya) {
              if (u.nodeName && ((y = Z(u.nodeName)), !Y[y] || xa[y]))
                throw U(
                  "root node is forbidden and cannot be sanitized in-place",
                );
            } else if (u instanceof Ia)
              ((F = Ab("\x3c!----\x3e")),
                (G = F.ownerDocument.importNode(u, !0)),
                G.nodeType === ta.element && "BODY" === G.nodeName
                  ? (F = G)
                  : "HTML" === G.nodeName
                    ? (F = G)
                    : F.appendChild(G));
            else {
              if (!na && !ma && !ka && -1 === u.indexOf("<"))
                return ca && Fa ? ca.createHTML(u) : u;
              F = Ab(u);
              if (!F) return na ? null : Fa ? va : "";
            }
            F && Ra && ha(F.firstChild);
            for (y = Bb(ya ? u : F); (G = y.nextNode()); )
              (Db(G), Gb(G), G.content instanceof ab && cc(G.content));
            if (ya) return u;
            if (na) {
              if (Ea)
                for (G = Qb.call(F.ownerDocument); F.firstChild; )
                  G.appendChild(F.firstChild);
              else G = F;
              if (aa.shadowroot || aa.shadowrootmode) G = Sb.call(Q, G, !0);
              return G;
            }
            var X = ka ? F.outerHTML : F.innerHTML;
            ka &&
              Y["!doctype"] &&
              F.ownerDocument &&
              F.ownerDocument.doctype &&
              F.ownerDocument.doctype.name &&
              J(Hb, F.ownerDocument.doctype.name) &&
              (X = "<!DOCTYPE " + F.ownerDocument.doctype.name + ">\n" + X);
            ma &&
              T([Ka, La, Ma], function (ea) {
                X = I(X, ea, " ");
              });
            return ca && Fa ? ca.createHTML(X) : X;
          };
          H.setConfig = function () {
            Va(
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            );
            Qa = !0;
          };
          H.clearConfig = function () {
            la = null;
            Qa = !1;
          };
          H.isValidAttribute = function (u, y, F) {
            la || Va({});
            u = Z(u);
            y = Z(y);
            return Eb(u, y, F);
          };
          H.addHook = function (u, y) {
            "function" === typeof y && O(da[u], y);
          };
          H.removeHook = function (u, y) {
            return void 0 !== y
              ? ((y = ba(da[u], y)), -1 === y ? void 0 : r(da[u], y, 1)[0])
              : K(da[u]);
          };
          H.removeHooks = function (u) {
            da[u] = [];
          };
          H.removeAllHooks = function () {
            da = cb();
          };
          return H;
        }
        var b = Object,
          g = b.entries,
          m = b.setPrototypeOf,
          q = b.isFrozen,
          w = b.getPrototypeOf,
          x = b.getOwnPropertyDescriptor,
          A = Object,
          p = A.freeze;
        b = A.seal;
        var B = A.create;
        A = "undefined" !== typeof Reflect && Reflect;
        var P = A.apply,
          M = A.construct;
        p ||
          (p = function (L) {
            return L;
          });
        b ||
          (b = function (L) {
            return L;
          });
        P ||
          (P = function (L, E, H) {
            return L.apply(E, H);
          });
        M ||
          (M = function (L, E) {
            return new (Function.prototype.bind.apply(
              L,
              [null].concat($jscomp.arrayFromIterable(E)),
            ))();
          });
        var T = d(Array.prototype.forEach),
          ba = d(Array.prototype.lastIndexOf),
          K = d(Array.prototype.pop),
          O = d(Array.prototype.push),
          r = d(Array.prototype.splice),
          v = d(String.prototype.toLowerCase),
          z = d(String.prototype.toString),
          D = d(String.prototype.match),
          I = d(String.prototype.replace),
          S = d(String.prototype.indexOf),
          t = d(String.prototype.trim),
          C = d(Object.prototype.hasOwnProperty),
          J = d(RegExp.prototype.test),
          U = (function (L) {
            return function () {
              for (var E = arguments.length, H = Array(E), N = 0; N < E; N++)
                H[N] = arguments[N];
              return M(L, H);
            };
          })(TypeError),
          R = p(
            "a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dialog dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p picture pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(
              " ",
            ),
          ),
          ja = p(
            "svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan view vkern".split(
              " ",
            ),
          ),
          ia = p(
            "feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(
              " ",
            ),
          ),
          ra = p(
            "animate color-profile cursor discard font-face font-face-format font-face-name font-face-src font-face-uri foreignobject hatch hatchpath mesh meshgradient meshpatch meshrow missing-glyph script set solidcolor unknown use".split(
              " ",
            ),
          ),
          wa = p(
            "math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover mprescripts".split(
              " ",
            ),
          ),
          Wa = p(
            "maction maligngroup malignmark mlongdiv mscarries mscarry msgroup mstack msline msrow semantics annotation annotation-xml mprescripts none".split(
              " ",
            ),
          ),
          hb = p(["#text"]),
          jb = p(
            "accept action align alt autocapitalize autocomplete autopictureinpicture autoplay background bgcolor border capture cellpadding cellspacing checked cite class clear color cols colspan controls controlslist coords crossorigin datetime decoding default dir disabled disablepictureinpicture disableremoteplayback download draggable enctype enterkeyhint face for headers height hidden high href hreflang id inputmode integrity ismap kind label lang list loading loop low max maxlength media method min minlength multiple muted name nonce noshade novalidate nowrap open optimum pattern placeholder playsinline popover popovertarget popovertargetaction poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title translate type usemap valign value width wrap xmlns slot".split(
              " ",
            ),
          ),
          Na = p(
            "accent-height accumulate additive alignment-baseline amplitude ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clippathunits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end exponent fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 intercept k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering slope specularconstant specularexponent spreadmethod startoffset stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale systemlanguage tabindex tablevalues targetx targety transform transform-origin text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(
              " ",
            ),
          ),
          kb = p(
            "accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle encoding fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(
              " ",
            ),
          ),
          Ca = p([
            "xlink:href",
            "xml:id",
            "xlink:title",
            "xml:space",
            "xmlns:xlink",
          ]);
        A = b(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        var dc = b(/<%[\w\W]*|[\w\W]*%>/gm),
          ec = b(/\$\{[\w\W]*/gm),
          fc = b(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          gc = b(/^aria-[\-\w]+$/),
          xb = b(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          hc = b(/^(?:\w+script|data):/i),
          ic = b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Hb = b(/^html$/i);
        b = b(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var db = Object.freeze({
            __proto__: null,
            ARIA_ATTR: gc,
            ATTR_WHITESPACE: ic,
            CUSTOM_ELEMENT: b,
            DATA_ATTR: fc,
            DOCTYPE_NAME: Hb,
            ERB_EXPR: dc,
            IS_ALLOWED_URI: xb,
            IS_SCRIPT_OR_DATA: hc,
            MUSTACHE_EXPR: A,
            TMPLIT_EXPR: ec,
          }),
          ta = {
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
          $b = function (L, E) {
            if ("object" !== typeof L || "function" !== typeof L.createPolicy)
              return null;
            var H = null;
            E &&
              E.hasAttribute("data-tt-policy-suffix") &&
              (H = E.getAttribute("data-tt-policy-suffix"));
            E = "dompurify" + (H ? "#" + H : "");
            try {
              return L.createPolicy(E, {
                createHTML: function (N) {
                  return N;
                },
                createScriptURL: function (N) {
                  return N;
                },
              });
            } catch (N) {
              return (
                console.warn(
                  "TrustedTypes policy " + E + " could not be created.",
                ),
                null
              );
            }
          },
          cb = function () {
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
        return k();
      });
    },
    function (e, l, h) {
      l.a = function () {
        ArrayBuffer.prototype.slice ||
          (ArrayBuffer.prototype.slice = function (d, a) {
            void 0 === d && (d = 0);
            void 0 === a && (a = this.byteLength);
            d = Math.floor(d);
            a = Math.floor(a);
            0 > d && (d += this.byteLength);
            0 > a && (a += this.byteLength);
            d = Math.min(Math.max(0, d), this.byteLength);
            a = Math.min(Math.max(0, a), this.byteLength);
            if (0 >= a - d) return new ArrayBuffer(0);
            var n = new ArrayBuffer(a - d),
              f = new Uint8Array(n);
            d = new Uint8Array(this, d, a - d);
            f.set(d);
            return n;
          });
      };
    },
    function (e, l, h) {
      h.d(l, "a", function () {
        return d;
      });
      h(12);
      var d = function (a, n) {
        return function () {};
      };
    },
    function (e, l, h) {
      l.a = function (d) {
        var a = {};
        decodeURIComponent(d.slice(1))
          .split("&")
          .forEach(function (n) {
            n = n.split("=", 2);
            a[n[0]] = n[1];
          });
        return a;
      };
    },
    function (e, l, h) {
      h.d(l, "a", function () {
        return b;
      });
      var d = h(2),
        a = h(7),
        n = h(14),
        f = h(5),
        k = (function () {
          function g(m) {
            var q = this;
            this.promise = m.then(function (w) {
              q.response = w;
              q.status = 200;
            });
          }
          g.prototype.addEventListener = function (m, q) {
            this.promise.then(q);
          };
          return g;
        })(),
        b = function (g, m, q, w) {
          if (Object(n.a)() && !q) {
            self.Module.instantiateWasm = function (A, p) {
              return Object(a.a)(
                "".concat(g, "Wasm.wasm"),
                A,
                m["Wasm.wasm"],
                w,
              ).then(function (B) {
                p(B.instance);
              });
            };
            if (m.disableObjectURLBlobs) {
              importScripts("".concat(g, "Wasm.js"));
              return;
            }
            q = Object(d.b)(
              "".concat(g, "Wasm.js.mem"),
              m["Wasm.js.mem"],
              !1,
              !1,
            );
          } else {
            if (m.disableObjectURLBlobs) {
              importScripts(
                "".concat(
                  (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + g,
                  ".js",
                ),
              );
              return;
            }
            q = Object(d.b)(
              "".concat(
                (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + g,
                ".js.mem",
              ),
              m[".js.mem"],
              !1,
            );
            var x = Object(d.b)(
              "".concat(
                (self.Module.memoryInitializerPrefixURL
                  ? self.Module.memoryInitializerPrefixURL
                  : "") + g,
                ".mem",
              ),
              m[".mem"],
              !0,
              !0,
            );
            self.Module.memoryInitializerRequest = new k(x);
          }
          q = new Blob([q], { type: "application/javascript" });
          importScripts(Object(f.a)(URL.createObjectURL(q)));
        };
    },
    function (e, l, h) {
      h.d(l, "a", function () {
        return A;
      });
      var d,
        a = "undefined" === typeof window ? self : window;
      e = (function () {
        var p = navigator.userAgent.toLowerCase();
        return (p =
          /(msie) ([\w.]+)/.exec(p) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(p))
          ? parseInt(p[2], 10)
          : p;
      })();
      var n = (function () {
        var p = a.navigator.userAgent.match(/OPR/),
          B = a.navigator.userAgent.match(/Maxthon/),
          P = a.navigator.userAgent.match(/Edge/);
        return a.navigator.userAgent.match(/Chrome\/(.*?) /) && !p && !B && !P;
      })();
      (function () {
        if (!n) return null;
        var p = a.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
        return p ? parseInt(p[1], 10) : p;
      })();
      var f =
        !!navigator.userAgent.match(/Edge/i) ||
        (navigator.userAgent.match(/Edg\/(.*?)/) &&
          a.navigator.userAgent.match(/Chrome\/(.*?) /));
      (function () {
        if (!f) return null;
        var p = a.navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return p ? parseInt(p[1], 10) : p;
      })();
      l =
        /iPad|iPhone|iPod/.test(a.navigator.platform) ||
        ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) ||
        /iPad|iPhone|iPod/.test(a.navigator.userAgent);
      var k = (function () {
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
          null === (d = navigator.userAgent.match(/Version\/(\d+)/)) ||
            void 0 === d
            ? void 0
            : d[1],
          10,
        );
      var g = a.navigator.userAgent.match(/Firefox/);
      (function () {
        if (!g) return null;
        var p = a.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return p ? parseInt(p[1], 10) : p;
      })();
      e || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);
      navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
      a.navigator.userAgent.indexOf("Android");
      var m = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(
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
        w = !(!self.WebAssembly || !self.WebAssembly.validate),
        x =
          -1 < a.navigator.userAgent.indexOf("Edge/16") ||
          -1 < a.navigator.userAgent.indexOf("MSAppHost"),
        A = function () {
          var p;
          if ((p = w && !x))
            ((p = b && null !== k && 14 > k), (p = !(!q && (p || m))));
          return p;
        };
    },
    function (e, l, h) {
      e.exports = h(16);
    },
    function (e, l, h) {
      h.r(l);
      h(17);
      h(22);
      e = h(10);
      h(23);
      Object(e.a)();
    },
    function (e, l, h) {
      (function (d, a) {
        function n(f) {
          "@babel/helpers - typeof";
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (k) {
                    return typeof k;
                  }
                : function (k) {
                    return k &&
                      "function" == typeof Symbol &&
                      k.constructor === Symbol &&
                      k !== Symbol.prototype
                      ? "symbol"
                      : typeof k;
                  }),
            n(f)
          );
        }
        (function (f) {
          function k() {
            for (var t = 0; t < I.length; t++) I[t][0](I[t][1]);
            I = [];
            S = !1;
          }
          function b(t, C) {
            I.push([t, C]);
            S || ((S = !0), D(k, 0));
          }
          function g(t, C) {
            function J(R) {
              w(C, R);
            }
            function U(R) {
              A(C, R);
            }
            try {
              t(J, U);
            } catch (R) {
              U(R);
            }
          }
          function m(t) {
            var C = t.owner,
              J = C.state_;
            C = C.data_;
            var U = t[J];
            t = t.then;
            if ("function" === typeof U) {
              J = r;
              try {
                C = U(C);
              } catch (R) {
                A(t, R);
              }
            }
            q(t, C) || (J === r && w(t, C), J === v && A(t, C));
          }
          function q(t, C) {
            var J;
            try {
              if (t === C)
                throw new TypeError(
                  "A promises callback cannot return that same promise.",
                );
              if (C && ("function" === typeof C || "object" === n(C))) {
                var U = C.then;
                if ("function" === typeof U)
                  return (
                    U.call(
                      C,
                      function (R) {
                        J || ((J = !0), C !== R ? w(t, R) : x(t, R));
                      },
                      function (R) {
                        J || ((J = !0), A(t, R));
                      },
                    ),
                    !0
                  );
              }
            } catch (R) {
              return (J || A(t, R), !0);
            }
            return !1;
          }
          function w(t, C) {
            (t !== C && q(t, C)) || x(t, C);
          }
          function x(t, C) {
            t.state_ === K && ((t.state_ = O), (t.data_ = C), b(B, t));
          }
          function A(t, C) {
            t.state_ === K && ((t.state_ = O), (t.data_ = C), b(P, t));
          }
          function p(t) {
            var C = t.then_;
            t.then_ = void 0;
            for (t = 0; t < C.length; t++) m(C[t]);
          }
          function B(t) {
            t.state_ = r;
            p(t);
          }
          function P(t) {
            t.state_ = v;
            p(t);
          }
          function M(t) {
            if ("function" !== typeof t)
              throw new TypeError(
                "Promise constructor takes a function argument",
              );
            if (!(this instanceof M))
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
              );
            this.then_ = [];
            g(t, this);
          }
          f.createPromiseCapability = function () {
            var t = {};
            t.promise = new M(function (C, J) {
              t.resolve = C;
              t.reject = J;
            });
            return t;
          };
          var T = f.Promise,
            ba =
              T &&
              "resolve" in T &&
              "reject" in T &&
              "all" in T &&
              "race" in T &&
              (function () {
                var t;
                new T(function (C) {
                  t = C;
                });
                return "function" === typeof t;
              })();
          "undefined" !== typeof exports && exports
            ? ((exports.Promise = ba ? T : M), (exports.Polyfill = M))
            : "function" === typeof define && h(21)
              ? define(function () {
                  return ba ? T : M;
                })
              : ba || (f.Promise = M);
          var K = "pending",
            O = "sealed",
            r = "fulfilled",
            v = "rejected",
            z = function () {},
            D = "undefined" !== typeof a ? a : setTimeout,
            I = [],
            S;
          M.prototype = {
            constructor: M,
            state_: K,
            then_: null,
            data_: void 0,
            then: function (t, C) {
              t = {
                owner: this,
                then: new this.constructor(z),
                fulfilled: t,
                rejected: C,
              };
              this.state_ === r || this.state_ === v
                ? b(m, t)
                : this.then_.push(t);
              return t.then;
            },
            catch: function (t) {
              return this.then(null, t);
            },
          };
          M.all = function (t) {
            if ("[object Array]" !== Object.prototype.toString.call(t))
              throw new TypeError("You must pass an array to Promise.all().");
            return new this(function (C, J) {
              function U(wa) {
                ja++;
                return function (Wa) {
                  R[wa] = Wa;
                  --ja || C(R);
                };
              }
              for (var R = [], ja = 0, ia = 0, ra; ia < t.length; ia++)
                (ra = t[ia]) && "function" === typeof ra.then
                  ? ra.then(U(ia), J)
                  : (R[ia] = ra);
              ja || C(R);
            });
          };
          M.race = function (t) {
            if ("[object Array]" !== Object.prototype.toString.call(t))
              throw new TypeError("You must pass an array to Promise.race().");
            return new this(function (C, J) {
              for (var U = 0, R; U < t.length; U++)
                (R = t[U]) && "function" === typeof R.then
                  ? R.then(C, J)
                  : C(R);
            });
          };
          M.resolve = function (t) {
            return t && "object" === n(t) && t.constructor === this
              ? t
              : new this(function (C) {
                  C(t);
                });
          };
          M.reject = function (t) {
            return new this(function (C, J) {
              J(t);
            });
          };
        })(
          "undefined" !== typeof window
            ? window
            : "undefined" !== typeof d
              ? d
              : "undefined" !== typeof self
                ? self
                : void 0,
        );
      }).call(this, h(8), h(18).setImmediate);
    },
    function (e, l, h) {
      (function (d) {
        function a(k, b) {
          this._id = k;
          this._clearFn = b;
        }
        var n =
            ("undefined" !== typeof d && d) ||
            ("undefined" !== typeof self && self) ||
            window,
          f = Function.prototype.apply;
        l.setTimeout = function () {
          return new a(f.call(setTimeout, n, arguments), clearTimeout);
        };
        l.setInterval = function () {
          return new a(f.call(setInterval, n, arguments), clearInterval);
        };
        l.clearTimeout = l.clearInterval = function (k) {
          k && k.close();
        };
        a.prototype.unref = a.prototype.ref = function () {};
        a.prototype.close = function () {
          this._clearFn.call(n, this._id);
        };
        l.enroll = function (k, b) {
          clearTimeout(k._idleTimeoutId);
          k._idleTimeout = b;
        };
        l.unenroll = function (k) {
          clearTimeout(k._idleTimeoutId);
          k._idleTimeout = -1;
        };
        l._unrefActive = l.active = function (k) {
          clearTimeout(k._idleTimeoutId);
          var b = k._idleTimeout;
          0 <= b &&
            (k._idleTimeoutId = setTimeout(function () {
              k._onTimeout && k._onTimeout();
            }, b));
        };
        h(19);
        l.setImmediate =
          ("undefined" !== typeof self && self.setImmediate) ||
          ("undefined" !== typeof d && d.setImmediate) ||
          (this && this.setImmediate);
        l.clearImmediate =
          ("undefined" !== typeof self && self.clearImmediate) ||
          ("undefined" !== typeof d && d.clearImmediate) ||
          (this && this.clearImmediate);
      }).call(this, h(8));
    },
    function (e, l, h) {
      (function (d, a) {
        (function (n, f) {
          function k(K) {
            delete B[K];
          }
          function b(K) {
            if (P) setTimeout(b, 0, K);
            else {
              var O = B[K];
              if (O) {
                P = !0;
                try {
                  var r = O.callback,
                    v = O.args;
                  switch (v.length) {
                    case 0:
                      r();
                      break;
                    case 1:
                      r(v[0]);
                      break;
                    case 2:
                      r(v[0], v[1]);
                      break;
                    case 3:
                      r(v[0], v[1], v[2]);
                      break;
                    default:
                      r.apply(f, v);
                  }
                } finally {
                  (k(K), (P = !1));
                }
              }
            }
          }
          function g() {
            T = function (K) {
              a.nextTick(function () {
                b(K);
              });
            };
          }
          function m() {
            if (n.postMessage && !n.importScripts) {
              var K = !0,
                O = n.onmessage;
              n.onmessage = function () {
                K = !1;
              };
              n.postMessage("", "*");
              n.onmessage = O;
              return K;
            }
          }
          function q() {
            var K = "setImmediate$" + Math.random() + "$",
              O = function (r) {
                r.source === n &&
                  "string" === typeof r.data &&
                  0 === r.data.indexOf(K) &&
                  b(+r.data.slice(K.length));
              };
            n.addEventListener
              ? n.addEventListener("message", O, !1)
              : n.attachEvent("onmessage", O);
            T = function (r) {
              n.postMessage(K + r, "*");
            };
          }
          function w() {
            var K = new MessageChannel();
            K.port1.onmessage = function (O) {
              b(O.data);
            };
            T = function (O) {
              K.port2.postMessage(O);
            };
          }
          function x() {
            var K = M.documentElement;
            T = function (O) {
              var r = M.createElement("script");
              r.onreadystatechange = function () {
                b(O);
                r.onreadystatechange = null;
                K.removeChild(r);
                r = null;
              };
              K.appendChild(r);
            };
          }
          function A() {
            T = function (K) {
              setTimeout(b, 0, K);
            };
          }
          if (!n.setImmediate) {
            var p = 1,
              B = {},
              P = !1,
              M = n.document,
              T,
              ba = Object.getPrototypeOf && Object.getPrototypeOf(n);
            ba = ba && ba.setTimeout ? ba : n;
            "[object process]" === {}.toString.call(n.process)
              ? g()
              : m()
                ? q()
                : n.MessageChannel
                  ? w()
                  : M && "onreadystatechange" in M.createElement("script")
                    ? x()
                    : A();
            ba.setImmediate = function (K) {
              "function" !== typeof K && (K = new Function("" + K));
              for (
                var O = Array(arguments.length - 1), r = 0;
                r < O.length;
                r++
              )
                O[r] = arguments[r + 1];
              B[p] = { callback: K, args: O };
              T(p);
              return p++;
            };
            ba.clearImmediate = k;
          }
        })(
          "undefined" === typeof self
            ? "undefined" === typeof d
              ? this
              : d
            : self,
        );
      }).call(this, h(8), h(20));
    },
    function (e, l) {
      function h() {
        throw Error("setTimeout has not been defined");
      }
      function d() {
        throw Error("clearTimeout has not been defined");
      }
      function a(B) {
        if (m === setTimeout) return setTimeout(B, 0);
        if ((m === h || !m) && setTimeout)
          return ((m = setTimeout), setTimeout(B, 0));
        try {
          return m(B, 0);
        } catch (P) {
          try {
            return m.call(null, B, 0);
          } catch (M) {
            return m.call(this, B, 0);
          }
        }
      }
      function n(B) {
        if (q === clearTimeout) return clearTimeout(B);
        if ((q === d || !q) && clearTimeout)
          return ((q = clearTimeout), clearTimeout(B));
        try {
          return q(B);
        } catch (P) {
          try {
            return q.call(null, B);
          } catch (M) {
            return q.call(this, B);
          }
        }
      }
      function f() {
        x &&
          A &&
          ((x = !1), A.length ? (w = A.concat(w)) : (p = -1), w.length && k());
      }
      function k() {
        if (!x) {
          var B = a(f);
          x = !0;
          for (var P = w.length; P; ) {
            A = w;
            for (w = []; ++p < P; ) A && A[p].run();
            p = -1;
            P = w.length;
          }
          A = null;
          x = !1;
          n(B);
        }
      }
      function b(B, P) {
        this.fun = B;
        this.array = P;
      }
      function g() {}
      e = e.exports = {};
      try {
        var m = "function" === typeof setTimeout ? setTimeout : h;
      } catch (B) {
        m = h;
      }
      try {
        var q = "function" === typeof clearTimeout ? clearTimeout : d;
      } catch (B) {
        q = d;
      }
      var w = [],
        x = !1,
        A,
        p = -1;
      e.nextTick = function (B) {
        var P = Array(arguments.length - 1);
        if (1 < arguments.length)
          for (var M = 1; M < arguments.length; M++) P[M - 1] = arguments[M];
        w.push(new b(B, P));
        1 !== w.length || x || a(k);
      };
      b.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      e.title = "browser";
      e.browser = !0;
      e.env = {};
      e.argv = [];
      e.version = "";
      e.versions = {};
      e.on = g;
      e.addListener = g;
      e.once = g;
      e.off = g;
      e.removeListener = g;
      e.removeAllListeners = g;
      e.emit = g;
      e.prependListener = g;
      e.prependOnceListener = g;
      e.listeners = function (B) {
        return [];
      };
      e.binding = function (B) {
        throw Error("process.binding is not supported");
      };
      e.cwd = function () {
        return "/";
      };
      e.chdir = function (B) {
        throw Error("process.chdir is not supported");
      };
      e.umask = function () {
        return 0;
      };
    },
    function (e, l) {
      e.exports = {};
    },
    function (e, l, h) {
      (function (d) {
        "undefined" === typeof d.crypto &&
          (d.crypto = {
            getRandomValues: function (a) {
              for (var n = 0; n < a.length; n++) a[n] = 256 * Math.random();
            },
          });
      })("undefined" === typeof window ? self : window);
    },
    function (e, l, h) {
      function d(k) {
        "@babel/helpers - typeof";
        return (
          (d =
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
          d(k)
        );
      }
      var a = h(11),
        n = h(13),
        f = null;
      (function (k) {
        function b(B) {
          A || (A = []);
          A.push(B);
        }
        var g,
          m,
          q,
          w,
          x = !1,
          A = [],
          p = function () {
            function B() {
              g = function () {};
            }
            function P(r) {
              var v = [];
              return {
                resource_array: v,
                msg: JSON.stringify(r.data, function (z, D) {
                  if (
                    "object" === d(D) &&
                    ((z = null),
                    D instanceof Uint8Array
                      ? (z = D)
                      : D instanceof ArrayBuffer && (z = new Uint8Array(D)),
                    z)
                  ) {
                    D = q(z.length);
                    var I = w(D);
                    I &&
                      new Uint8Array(Module.HEAPU8.buffer, I, z.length).set(z);
                    v.push(D);
                    return { __trn_res_id: D };
                  }
                  return D;
                }),
              };
            }
            function M() {
              x = !0;
              postMessage({
                type: "abort",
                data: { error: "Office worker has terminated unexpectedly" },
              });
            }
            function T(r) {
              if (!x)
                try {
                  var v = P(r);
                  m(v.msg);
                } catch (z) {
                  M(z);
                }
            }
            k.basePath = "../";
            var ba = k.officeWorkerPath || "";
            k.workerBasePath && (k.basePath = k.workerBasePath);
            k.basePath = k.externalPath
              ? k.externalPath
              : k.basePath + "external/";
            importScripts("".concat(k.basePath, "Promise.js"));
            k.ContinueFunc = function (r) {
              g("ContinueFunc called");
              setTimeout(function () {
                onmessage({ data: { action: "continue" } });
              }, r);
            };
            if (k.pdfWorkerPath) var K = k.pdfWorkerPath;
            if (k.officeAsmPath) var O = k.officeAsmPath;
            k.Module = {
              memoryInitializerPrefixURL: K,
              asmjsPrefix: O,
              onRuntimeInitialized: function () {
                g || B();
                var r = Date.now() - f;
                Object(a.a)(
                  "load",
                  "time duration from start to ready: ".concat(
                    JSON.stringify(r),
                  ),
                );
                m = function (v) {
                  if (null !== v && void 0 !== v && 0 !== v && !x) {
                    var z = (v.length << 2) + 1,
                      D = Module._malloc(z);
                    0 < stringToUTF8(v, D, z) && Module._TRN_OnMessage(D);
                  }
                };
                q = function (v) {
                  return Module._TRN_CreateBufferResource(v);
                };
                w = function (v) {
                  return Module._TRN_GetResourcePointer(v);
                };
                g("OnReady called");
                onmessage = T;
                Module._TRN_InitWorker();
                for (r = 0; r < A.length; ++r) onmessage(A[r]);
                A = null;
              },
              fetchSelf: function () {
                f = Date.now();
                Object(n.a)(
                  "".concat(ba, "WebOfficeWorker"),
                  {
                    "Wasm.wasm": 5e6,
                    "Wasm.js.mem": 1e5,
                    ".js.mem": 5e6,
                    ".mem": 25e5,
                    disableObjectURLBlobs: k.disableObjectURLBlobs,
                  },
                  !!navigator.userAgent.match(/Edge/i) || k.wasmDisabled,
                );
              },
              onAbort: M,
              noExitRuntime: !0,
            };
          };
        k.onmessage = function (B) {
          "init" === B.data.action &&
            ((k.wasmDisabled = !B.data.wasm),
            (k.externalPath = B.data.externalPath),
            (k.officeAsmPath = B.data.officeAsmPath),
            (k.pdfWorkerPath = B.data.pdfWorkerPath),
            (k.disableObjectURLBlobs = B.data.disableObjectURLBlobs),
            (k.onmessage = b),
            p(),
            k.Module.fetchSelf());
        };
      })("undefined" === typeof window ? self : window);
    },
  ]);
}).call(this || window);
