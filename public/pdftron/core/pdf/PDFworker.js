(function () {
  /*
 @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (v) {
    var A = 0;
    return function () {
      return A < v.length ? { done: !1, value: v[A++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (v) {
    return { next: $jscomp.arrayIteratorImpl(v) };
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
      : function (v, A, u) {
          if (v == Array.prototype || v == Object.prototype) return v;
          v[A] = u.value;
          return v;
        };
  $jscomp.getGlobal = function (v) {
    v = [
      "object" == typeof globalThis && globalThis,
      v,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var A = 0; A < v.length; ++A) {
      var u = v[A];
      if (u && u.Math == Math) return u;
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
  var $jscomp$lookupPolyfilledValue = function (v, A, u) {
    if (!u || null != v) {
      u = $jscomp.propertyToPolyfillSymbol[A];
      if (null == u) return v[A];
      u = v[u];
      return void 0 !== u ? u : v[A];
    }
  };
  $jscomp.polyfill = function (v, A, u, p) {
    A &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(v, A, u, p)
        : $jscomp.polyfillUnisolated(v, A, u, p));
  };
  $jscomp.polyfillUnisolated = function (v, A, u, p) {
    u = $jscomp.global;
    v = v.split(".");
    for (p = 0; p < v.length - 1; p++) {
      var n = v[p];
      if (!(n in u)) return;
      u = u[n];
    }
    v = v[v.length - 1];
    p = u[v];
    A = A(p);
    A != p &&
      null != A &&
      $jscomp.defineProperty(u, v, {
        configurable: !0,
        writable: !0,
        value: A,
      });
  };
  $jscomp.polyfillIsolated = function (v, A, u, p) {
    var n = v.split(".");
    v = 1 === n.length;
    p = n[0];
    p = !v && p in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var x = 0; x < n.length - 1; x++) {
      var l = n[x];
      if (!(l in p)) return;
      p = p[l];
    }
    n = n[n.length - 1];
    u = $jscomp.IS_SYMBOL_NATIVE && "es6" === u ? p[n] : null;
    A = A(u);
    null != A &&
      (v
        ? $jscomp.defineProperty($jscomp.polyfills, n, {
            configurable: !0,
            writable: !0,
            value: A,
          })
        : A !== u &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[n] &&
            ((u = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[n] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(n)
              : $jscomp.POLYFILL_PREFIX + u + "$" + n)),
          $jscomp.defineProperty(p, $jscomp.propertyToPolyfillSymbol[n], {
            configurable: !0,
            writable: !0,
            value: A,
          })));
  };
  $jscomp.initSymbol = function () {};
  $jscomp.polyfill(
    "Symbol",
    function (v) {
      if (v) return v;
      var A = function (x, l) {
        this.$jscomp$symbol$id_ = x;
        $jscomp.defineProperty(this, "description", {
          configurable: !0,
          writable: !0,
          value: l,
        });
      };
      A.prototype.toString = function () {
        return this.$jscomp$symbol$id_;
      };
      var u = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        p = 0,
        n = function (x) {
          if (this instanceof n)
            throw new TypeError("Symbol is not a constructor");
          return new A(u + (x || "") + "_" + p++, x);
        };
      return n;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Symbol.iterator",
    function (v) {
      if (v) return v;
      v = Symbol("Symbol.iterator");
      for (
        var A =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " ",
            ),
          u = 0;
        u < A.length;
        u++
      ) {
        var p = $jscomp.global[A[u]];
        "function" === typeof p &&
          "function" != typeof p.prototype[v] &&
          $jscomp.defineProperty(p.prototype, v, {
            configurable: !0,
            writable: !0,
            value: function () {
              return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
            },
          });
      }
      return v;
    },
    "es6",
    "es3",
  );
  $jscomp.iteratorPrototype = function (v) {
    v = { next: v };
    v[Symbol.iterator] = function () {
      return this;
    };
    return v;
  };
  $jscomp.makeIterator = function (v) {
    var A =
      "undefined" != typeof Symbol && Symbol.iterator && v[Symbol.iterator];
    if (A) return A.call(v);
    if ("number" == typeof v.length) return $jscomp.arrayIterator(v);
    throw Error(String(v) + " is not an iterable or ArrayLike");
  };
  $jscomp.arrayFromIterator = function (v) {
    for (var A, u = []; !(A = v.next()).done; ) u.push(A.value);
    return u;
  };
  $jscomp.arrayFromIterable = function (v) {
    return v instanceof Array
      ? v
      : $jscomp.arrayFromIterator($jscomp.makeIterator(v));
  };
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var v = {},
        A = Object.create(
          new $jscomp.global.Proxy(v, {
            get: function (u, p, n) {
              return u == v && "q" == p && n == A;
            },
          }),
        );
      return !0 === A.q;
    } catch (u) {
      return !1;
    }
  };
  $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
  $jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy();
  $jscomp.owns = function (v, A) {
    return Object.prototype.hasOwnProperty.call(v, A);
  };
  $jscomp.polyfill(
    "WeakMap",
    function (v) {
      function A() {
        if (!v || !Object.seal) return !1;
        try {
          var m = Object.seal({}),
            f = Object.seal({}),
            k = new v([
              [m, 2],
              [f, 3],
            ]);
          if (2 != k.get(m) || 3 != k.get(f)) return !1;
          k.delete(m);
          k.set(f, 4);
          return !k.has(m) && 4 == k.get(f);
        } catch (h) {
          return !1;
        }
      }
      function u() {}
      function p(m) {
        var f = typeof m;
        return ("object" === f && null !== m) || "function" === f;
      }
      function n(m) {
        if (!$jscomp.owns(m, l)) {
          var f = new u();
          $jscomp.defineProperty(m, l, { value: f });
        }
      }
      function x(m) {
        if (!$jscomp.ISOLATE_POLYFILLS) {
          var f = Object[m];
          f &&
            (Object[m] = function (k) {
              if (k instanceof u) return k;
              Object.isExtensible(k) && n(k);
              return f(k);
            });
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (v && $jscomp.ES6_CONFORMANCE) return v;
      } else if (A()) return v;
      var l = "$jscomp_hidden_" + Math.random();
      x("freeze");
      x("preventExtensions");
      x("seal");
      var r = 0,
        c = function (m) {
          this.id_ = (r += Math.random() + 1).toString();
          if (m) {
            m = $jscomp.makeIterator(m);
            for (var f; !(f = m.next()).done; )
              ((f = f.value), this.set(f[0], f[1]));
          }
        };
      c.prototype.set = function (m, f) {
        if (!p(m)) throw Error("Invalid WeakMap key");
        n(m);
        if (!$jscomp.owns(m, l)) throw Error("WeakMap key fail: " + m);
        m[l][this.id_] = f;
        return this;
      };
      c.prototype.get = function (m) {
        return p(m) && $jscomp.owns(m, l) ? m[l][this.id_] : void 0;
      };
      c.prototype.has = function (m) {
        return p(m) && $jscomp.owns(m, l) && $jscomp.owns(m[l], this.id_);
      };
      c.prototype.delete = function (m) {
        return p(m) && $jscomp.owns(m, l) && $jscomp.owns(m[l], this.id_)
          ? delete m[l][this.id_]
          : !1;
      };
      return c;
    },
    "es6",
    "es3",
  );
  $jscomp.MapEntry = function () {};
  $jscomp.polyfill(
    "Map",
    function (v) {
      function A() {
        if (
          $jscomp.ASSUME_NO_NATIVE_MAP ||
          !v ||
          "function" != typeof v ||
          !v.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            m = new v($jscomp.makeIterator([[c, "s"]]));
          if (
            "s" != m.get(c) ||
            1 != m.size ||
            m.get({ x: 4 }) ||
            m.set({ x: 4 }, "t") != m ||
            2 != m.size
          )
            return !1;
          var f = m.entries(),
            k = f.next();
          if (k.done || k.value[0] != c || "s" != k.value[1]) return !1;
          k = f.next();
          return k.done ||
            4 != k.value[0].x ||
            "t" != k.value[1] ||
            !f.next().done
            ? !1
            : !0;
        } catch (h) {
          return !1;
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (v && $jscomp.ES6_CONFORMANCE) return v;
      } else if (A()) return v;
      var u = new WeakMap(),
        p = function (c) {
          this.data_ = {};
          this.head_ = l();
          this.size = 0;
          if (c) {
            c = $jscomp.makeIterator(c);
            for (var m; !(m = c.next()).done; )
              ((m = m.value), this.set(m[0], m[1]));
          }
        };
      p.prototype.set = function (c, m) {
        c = 0 === c ? 0 : c;
        var f = n(this, c);
        f.list || (f.list = this.data_[f.id] = []);
        f.entry
          ? (f.entry.value = m)
          : ((f.entry = {
              next: this.head_,
              previous: this.head_.previous,
              head: this.head_,
              key: c,
              value: m,
            }),
            f.list.push(f.entry),
            (this.head_.previous.next = f.entry),
            (this.head_.previous = f.entry),
            this.size++);
        return this;
      };
      p.prototype.delete = function (c) {
        c = n(this, c);
        return c.entry && c.list
          ? (c.list.splice(c.index, 1),
            c.list.length || delete this.data_[c.id],
            (c.entry.previous.next = c.entry.next),
            (c.entry.next.previous = c.entry.previous),
            (c.entry.head = null),
            this.size--,
            !0)
          : !1;
      };
      p.prototype.clear = function () {
        this.data_ = {};
        this.head_ = this.head_.previous = l();
        this.size = 0;
      };
      p.prototype.has = function (c) {
        return !!n(this, c).entry;
      };
      p.prototype.get = function (c) {
        return (c = n(this, c).entry) && c.value;
      };
      p.prototype.entries = function () {
        return x(this, function (c) {
          return [c.key, c.value];
        });
      };
      p.prototype.keys = function () {
        return x(this, function (c) {
          return c.key;
        });
      };
      p.prototype.values = function () {
        return x(this, function (c) {
          return c.value;
        });
      };
      p.prototype.forEach = function (c, m) {
        for (var f = this.entries(), k; !(k = f.next()).done; )
          ((k = k.value), c.call(m, k[1], k[0], this));
      };
      p.prototype[Symbol.iterator] = p.prototype.entries;
      var n = function (c, m) {
          var f = m && typeof m;
          "object" == f || "function" == f
            ? u.has(m)
              ? (f = u.get(m))
              : ((f = "" + ++r), u.set(m, f))
            : (f = "p_" + m);
          var k = c.data_[f];
          if (k && $jscomp.owns(c.data_, f))
            for (c = 0; c < k.length; c++) {
              var h = k[c];
              if ((m !== m && h.key !== h.key) || m === h.key)
                return { id: f, list: k, index: c, entry: h };
            }
          return { id: f, list: k, index: -1, entry: void 0 };
        },
        x = function (c, m) {
          var f = c.head_;
          return $jscomp.iteratorPrototype(function () {
            if (f) {
              for (; f.head != c.head_; ) f = f.previous;
              for (; f.next != f.head; )
                return ((f = f.next), { done: !1, value: m(f) });
              f = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        l = function () {
          var c = {};
          return (c.previous = c.next = c.head = c);
        },
        r = 0;
      return p;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Promise",
    function (v) {
      function A() {
        this.batch_ = null;
      }
      function u(l) {
        return l instanceof n
          ? l
          : new n(function (r, c) {
              r(l);
            });
      }
      if (
        v &&
        (!(
          $jscomp.FORCE_POLYFILL_PROMISE ||
          ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
            "undefined" === typeof $jscomp.global.PromiseRejectionEvent)
        ) ||
          !$jscomp.global.Promise ||
          -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))
      )
        return v;
      A.prototype.asyncExecute = function (l) {
        if (null == this.batch_) {
          this.batch_ = [];
          var r = this;
          this.asyncExecuteFunction(function () {
            r.executeBatch_();
          });
        }
        this.batch_.push(l);
      };
      var p = $jscomp.global.setTimeout;
      A.prototype.asyncExecuteFunction = function (l) {
        p(l, 0);
      };
      A.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var l = this.batch_;
          this.batch_ = [];
          for (var r = 0; r < l.length; ++r) {
            var c = l[r];
            l[r] = null;
            try {
              c();
            } catch (m) {
              this.asyncThrow_(m);
            }
          }
        }
        this.batch_ = null;
      };
      A.prototype.asyncThrow_ = function (l) {
        this.asyncExecuteFunction(function () {
          throw l;
        });
      };
      var n = function (l) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var r = this.createResolveAndReject_();
        try {
          l(r.resolve, r.reject);
        } catch (c) {
          r.reject(c);
        }
      };
      n.prototype.createResolveAndReject_ = function () {
        function l(m) {
          return function (f) {
            c || ((c = !0), m.call(r, f));
          };
        }
        var r = this,
          c = !1;
        return { resolve: l(this.resolveTo_), reject: l(this.reject_) };
      };
      n.prototype.resolveTo_ = function (l) {
        if (l === this)
          this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (l instanceof n) this.settleSameAsPromise_(l);
        else {
          a: switch (typeof l) {
            case "object":
              var r = null != l;
              break a;
            case "function":
              r = !0;
              break a;
            default:
              r = !1;
          }
          r ? this.resolveToNonPromiseObj_(l) : this.fulfill_(l);
        }
      };
      n.prototype.resolveToNonPromiseObj_ = function (l) {
        var r = void 0;
        try {
          r = l.then;
        } catch (c) {
          this.reject_(c);
          return;
        }
        "function" == typeof r
          ? this.settleSameAsThenable_(r, l)
          : this.fulfill_(l);
      };
      n.prototype.reject_ = function (l) {
        this.settle_(2, l);
      };
      n.prototype.fulfill_ = function (l) {
        this.settle_(1, l);
      };
      n.prototype.settle_ = function (l, r) {
        if (0 != this.state_)
          throw Error(
            "Cannot settle(" +
              l +
              ", " +
              r +
              "): Promise already settled in state" +
              this.state_,
          );
        this.state_ = l;
        this.result_ = r;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      n.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var l = this;
        p(function () {
          if (l.notifyUnhandledRejection_()) {
            var r = $jscomp.global.console;
            "undefined" !== typeof r && r.error(l.result_);
          }
        }, 1);
      };
      n.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var l = $jscomp.global.CustomEvent,
          r = $jscomp.global.Event,
          c = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof c) return !0;
        "function" === typeof l
          ? (l = new l("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof r
            ? (l = new r("unhandledrejection", { cancelable: !0 }))
            : ((l = $jscomp.global.document.createEvent("CustomEvent")),
              l.initCustomEvent("unhandledrejection", !1, !0, l));
        l.promise = this;
        l.reason = this.result_;
        return c(l);
      };
      n.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var l = 0; l < this.onSettledCallbacks_.length; ++l)
            x.asyncExecute(this.onSettledCallbacks_[l]);
          this.onSettledCallbacks_ = null;
        }
      };
      var x = new A();
      n.prototype.settleSameAsPromise_ = function (l) {
        var r = this.createResolveAndReject_();
        l.callWhenSettled_(r.resolve, r.reject);
      };
      n.prototype.settleSameAsThenable_ = function (l, r) {
        var c = this.createResolveAndReject_();
        try {
          l.call(r, c.resolve, c.reject);
        } catch (m) {
          c.reject(m);
        }
      };
      n.prototype.then = function (l, r) {
        function c(h, t) {
          return "function" == typeof h
            ? function (q) {
                try {
                  m(h(q));
                } catch (g) {
                  f(g);
                }
              }
            : t;
        }
        var m,
          f,
          k = new n(function (h, t) {
            m = h;
            f = t;
          });
        this.callWhenSettled_(c(l, m), c(r, f));
        return k;
      };
      n.prototype.catch = function (l) {
        return this.then(void 0, l);
      };
      n.prototype.callWhenSettled_ = function (l, r) {
        function c() {
          switch (m.state_) {
            case 1:
              l(m.result_);
              break;
            case 2:
              r(m.result_);
              break;
            default:
              throw Error("Unexpected state: " + m.state_);
          }
        }
        var m = this;
        null == this.onSettledCallbacks_
          ? x.asyncExecute(c)
          : this.onSettledCallbacks_.push(c);
        this.isRejectionHandled_ = !0;
      };
      n.resolve = u;
      n.reject = function (l) {
        return new n(function (r, c) {
          c(l);
        });
      };
      n.race = function (l) {
        return new n(function (r, c) {
          for (
            var m = $jscomp.makeIterator(l), f = m.next();
            !f.done;
            f = m.next()
          )
            u(f.value).callWhenSettled_(r, c);
        });
      };
      n.all = function (l) {
        var r = $jscomp.makeIterator(l),
          c = r.next();
        return c.done
          ? u([])
          : new n(function (m, f) {
              function k(q) {
                return function (g) {
                  h[q] = g;
                  t--;
                  0 == t && m(h);
                };
              }
              var h = [],
                t = 0;
              do
                (h.push(void 0),
                  t++,
                  u(c.value).callWhenSettled_(k(h.length - 1), f),
                  (c = r.next()));
              while (!c.done);
            });
      };
      return n;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Array.from",
    function (v) {
      return v
        ? v
        : function (A, u, p) {
            u =
              null != u
                ? u
                : function (r) {
                    return r;
                  };
            var n = [],
              x =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                A[Symbol.iterator];
            if ("function" == typeof x) {
              A = x.call(A);
              for (var l = 0; !(x = A.next()).done; )
                n.push(u.call(p, x.value, l++));
            } else
              for (x = A.length, l = 0; l < x; l++) n.push(u.call(p, A[l], l));
            return n;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.checkStringArgs = function (v, A, u) {
    if (null == v)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          u +
          " must not be null or undefined",
      );
    if (A instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          u +
          " must not be a regular expression",
      );
    return v + "";
  };
  $jscomp.polyfill(
    "String.prototype.endsWith",
    function (v) {
      return v
        ? v
        : function (A, u) {
            var p = $jscomp.checkStringArgs(this, A, "endsWith");
            A += "";
            void 0 === u && (u = p.length);
            u = Math.max(0, Math.min(u | 0, p.length));
            for (var n = A.length; 0 < n && 0 < u; )
              if (p[--u] != A[--n]) return !1;
            return 0 >= n;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.underscoreProtoCanBeSet = function () {
    var v = { a: !0 },
      A = {};
    try {
      return ((A.__proto__ = v), A.a);
    } catch (u) {}
    return !1;
  };
  $jscomp.setPrototypeOf =
    $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : $jscomp.underscoreProtoCanBeSet()
        ? function (v, A) {
            v.__proto__ = A;
            if (v.__proto__ !== A)
              throw new TypeError(v + " is not extensible");
            return v;
          }
        : null;
  $jscomp.polyfill(
    "Object.setPrototypeOf",
    function (v) {
      return v || $jscomp.setPrototypeOf;
    },
    "es6",
    "es5",
  );
  $jscomp.assign =
    $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign
      ? Object.assign
      : function (v, A) {
          for (var u = 1; u < arguments.length; u++) {
            var p = arguments[u];
            if (p) for (var n in p) $jscomp.owns(p, n) && (v[n] = p[n]);
          }
          return v;
        };
  $jscomp.polyfill(
    "Object.assign",
    function (v) {
      return v || $jscomp.assign;
    },
    "es6",
    "es3",
  );
  $jscomp.findInternal = function (v, A, u) {
    v instanceof String && (v = String(v));
    for (var p = v.length, n = 0; n < p; n++) {
      var x = v[n];
      if (A.call(u, x, n, v)) return { i: n, v: x };
    }
    return { i: -1, v: void 0 };
  };
  $jscomp.polyfill(
    "Array.prototype.find",
    function (v) {
      return v
        ? v
        : function (A, u) {
            return $jscomp.findInternal(this, A, u).v;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Set",
    function (v) {
      function A() {
        if (
          $jscomp.ASSUME_NO_NATIVE_SET ||
          !v ||
          "function" != typeof v ||
          !v.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var p = Object.seal({ x: 4 }),
            n = new v($jscomp.makeIterator([p]));
          if (
            !n.has(p) ||
            1 != n.size ||
            n.add(p) != n ||
            1 != n.size ||
            n.add({ x: 4 }) != n ||
            2 != n.size
          )
            return !1;
          var x = n.entries(),
            l = x.next();
          if (l.done || l.value[0] != p || l.value[1] != p) return !1;
          l = x.next();
          return l.done ||
            l.value[0] == p ||
            4 != l.value[0].x ||
            l.value[1] != l.value[0]
            ? !1
            : x.next().done;
        } catch (r) {
          return !1;
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (v && $jscomp.ES6_CONFORMANCE) return v;
      } else if (A()) return v;
      var u = function (p) {
        this.map_ = new Map();
        if (p) {
          p = $jscomp.makeIterator(p);
          for (var n; !(n = p.next()).done; ) this.add(n.value);
        }
        this.size = this.map_.size;
      };
      u.prototype.add = function (p) {
        p = 0 === p ? 0 : p;
        this.map_.set(p, p);
        this.size = this.map_.size;
        return this;
      };
      u.prototype.delete = function (p) {
        p = this.map_.delete(p);
        this.size = this.map_.size;
        return p;
      };
      u.prototype.clear = function () {
        this.map_.clear();
        this.size = 0;
      };
      u.prototype.has = function (p) {
        return this.map_.has(p);
      };
      u.prototype.entries = function () {
        return this.map_.entries();
      };
      u.prototype.values = function () {
        return this.map_.values();
      };
      u.prototype.keys = u.prototype.values;
      u.prototype[Symbol.iterator] = u.prototype.values;
      u.prototype.forEach = function (p, n) {
        var x = this;
        this.map_.forEach(function (l) {
          return p.call(n, l, l, x);
        });
      };
      return u;
    },
    "es6",
    "es3",
  );
  $jscomp.iteratorFromArray = function (v, A) {
    v instanceof String && (v += "");
    var u = 0,
      p = !1,
      n = {
        next: function () {
          if (!p && u < v.length) {
            var x = u++;
            return { value: A(x, v[x]), done: !1 };
          }
          p = !0;
          return { done: !0, value: void 0 };
        },
      };
    n[Symbol.iterator] = function () {
      return n;
    };
    return n;
  };
  $jscomp.polyfill(
    "Array.prototype.keys",
    function (v) {
      return v
        ? v
        : function () {
            return $jscomp.iteratorFromArray(this, function (A) {
              return A;
            });
          };
    },
    "es6",
    "es3",
  );
  (function (v) {
    function A(p) {
      if (u[p]) return u[p].exports;
      var n = (u[p] = { i: p, l: !1, exports: {} });
      v[p].call(n.exports, n, n.exports, A);
      n.l = !0;
      return n.exports;
    }
    var u = {};
    A.m = v;
    A.c = u;
    A.d = function (p, n, x) {
      A.o(p, n) || Object.defineProperty(p, n, { enumerable: !0, get: x });
    };
    A.r = function (p) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(p, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(p, "__esModule", { value: !0 });
    };
    A.t = function (p, n) {
      n & 1 && (p = A(p));
      if (n & 8 || (n & 4 && "object" === typeof p && p && p.__esModule))
        return p;
      var x = Object.create(null);
      A.r(x);
      Object.defineProperty(x, "default", { enumerable: !0, value: p });
      if (n & 2 && "string" != typeof p)
        for (var l in p)
          A.d(
            x,
            l,
            function (r) {
              return p[r];
            }.bind(null, l),
          );
      return x;
    };
    A.n = function (p) {
      var n =
        p && p.__esModule
          ? function () {
              return p["default"];
            }
          : function () {
              return p;
            };
      A.d(n, "a", n);
      return n;
    };
    A.o = function (p, n) {
      return Object.prototype.hasOwnProperty.call(p, n);
    };
    A.p = "/core/pdf/";
    return A((A.s = 21));
  })([
    function (v, A, u) {
      u.d(A, "d", function () {
        return x;
      });
      u.d(A, "e", function () {
        return n;
      });
      u.d(A, "c", function () {
        return l;
      });
      u.d(A, "a", function () {
        return r;
      });
      u.d(A, "b", function () {
        return c;
      });
      var p = u(2),
        n = function (m, f) {
          Object(p.a)("disableLogs") ||
            (f ? console.warn("".concat(m, ": ").concat(f)) : console.warn(m));
        },
        x = function (m, f) {
          Object(p.a)("disableLogs") ||
            (f ? console.log("".concat(m, ": ").concat(f)) : console.log(m));
        },
        l = function (m) {
          if (!Object(p.a)("disableLogs")) throw (console.error(m), Error(m));
        },
        r = function (m, f) {},
        c = function (m, f) {};
    },
    function (v, A, u) {
      u.d(A, "c", function () {
        return c;
      });
      u.d(A, "a", function () {
        return m;
      });
      u.d(A, "b", function () {
        return f;
      });
      u.d(A, "d", function () {
        return k;
      });
      var p = u(16),
        n = console.log,
        x = console.warn,
        l = console.error,
        r = function (h) {
          void 0 === h && (h = !0);
          h
            ? ((console.log = function () {}),
              (console.warn = function () {}),
              (console.error = function () {}))
            : ((console.log = n), (console.warn = x), (console.error = l));
        },
        c = function () {
          var h = Object(p.a)(location.search);
          r("1" === h.disableLogs);
        },
        m = function (h) {
          h.on("disableLogs", function (t) {
            r(t.disabled);
          });
        },
        f = function (h, t) {
          return function () {};
        },
        k = function (h, t) {
          t ? console.warn("".concat(h, ": ").concat(t)) : console.warn(h);
        };
    },
    function (v, A, u) {
      u.d(A, "a", function () {
        return x;
      });
      u.d(A, "b", function () {
        return l;
      });
      var p = {},
        n = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          wvsQueryParameters: {},
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        },
        x = function (r) {
          return n[r];
        },
        l = function (r, c) {
          var m;
          n[r] = c;
          null === (m = p[r]) || void 0 === m
            ? void 0
            : m.forEach(function (f) {
                f(c);
              });
        };
    },
    function (v, A, u) {
      u.d(A, "a", function () {
        return D;
      });
      u.d(A, "b", function () {
        return F;
      });
      var p = u(4),
        n = u(0),
        x = u(5),
        l = u(6),
        r = u(8),
        c = "undefined" === typeof window ? self : window,
        m = c.importScripts,
        f = !1,
        k = function (a, b) {
          f ||
            (m(Object(r.a)("".concat(c.basePath, "decode.min.js"))), (f = !0));
          a = Object(l.b)(a);
          a = self.BrotliDecode(a);
          return b ? a : Object(l.a)(a);
        },
        h = function (a, b) {
          return Object(p.b)(void 0, void 0, Promise, function () {
            var d;
            return Object(p.c)(this, function (e) {
              switch (e.label) {
                case 0:
                  return f
                    ? [3, 2]
                    : [
                        4,
                        Object(x.a)(
                          "".concat(
                            self.Core.getWorkerPath(),
                            "external/decode.min.js",
                          ),
                          "Failed to download decode.min.js",
                          window,
                        ),
                      ];
                case 1:
                  (e.sent(), (f = !0), (e.label = 2));
                case 2:
                  return (
                    (d = self.BrotliDecode(Object(l.b)(a))),
                    [2, b ? d : Object(l.a)(d)]
                  );
              }
            });
          });
        };
      (function () {
        function a() {
          this.remainingDataArrays = [];
        }
        a.prototype.processRaw = function (b) {
          return b;
        };
        a.prototype.processBrotli = function (b) {
          this.remainingDataArrays.push(b);
          return null;
        };
        a.prototype.GetNextChunk = function (b) {
          this.decodeFunction ||
            (this.decodeFunction =
              0 === b[0] && 97 === b[1] && 115 === b[2] && 109 === b[3]
                ? this.processRaw
                : this.processBrotli);
          return this.decodeFunction(b);
        };
        a.prototype.End = function () {
          if (this.remainingDataArrays.length) {
            for (var b = this.arrays, d = 0, e = 0; e < b.length; ++e)
              d += b[e].length;
            d = new Uint8Array(d);
            var w = 0;
            for (e = 0; e < b.length; ++e) {
              var C = b[e];
              d.set(C, w);
              w += C.length;
            }
            return k(d, !0);
          }
          return null;
        };
        return a;
      })();
      var t = function (a, b, d) {
          void 0 === b && (b = !0);
          void 0 === d && (d = !1);
          var e = new XMLHttpRequest();
          e.open("GET", a, b);
          a = d && e.overrideMimeType;
          e.responseType = a ? "text" : "arraybuffer";
          a && e.overrideMimeType("text/plain; charset=x-user-defined");
          return e;
        },
        q = function (a, b, d) {
          return new Promise(function (e, w) {
            var C = t(a, b, d);
            C.send();
            C.onload = function () {
              200 === this.status || 0 === this.status
                ? e(C.response)
                : w(Error("Download Failed ".concat(a)));
            };
            C.onerror = function () {
              w(Error("Network error occurred ".concat(a)));
            };
          });
        },
        g = function (a, b) {
          var d = b.decompressFunction,
            e = b.shouldOutputArray,
            w = b.compressedMaximum,
            C = "undefined" !== typeof m ? Date.now() : null;
          try {
            var y = e ? z(a) : a.join("");
            Object(n.a)("worker", "Result length is ".concat(y.length));
            if (y.length < w) {
              var E = d(y, e);
              Object(n.e)(
                "There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this.",
              );
              m &&
                Object(n.a)(
                  "worker",
                  "Decompressed length is ".concat(E.length),
                );
              y = E;
            } else e || (y = Object(l.a)(y));
            if (m) {
              var L = b.paths.join(", ");
              Object(n.a)(
                "worker",
                ""
                  .concat(L, " Decompression took ")
                  .concat(Date.now() - C, " ms"),
              );
            }
            return y;
          } catch (N) {
            throw Error("Failed to decompress: ".concat(N));
          }
        },
        z = function (a) {
          a = a.reduce(function (b, d) {
            d = new Uint8Array(d);
            return b.concat(Array.from(d));
          }, []);
          return new Uint8Array(a);
        },
        G = function (a) {
          var b = !a.shouldOutputArray,
            d = a.paths,
            e = a.isAsync;
          e
            ? (d = Promise.all(
                d.map(function (w) {
                  return q(w, e, b);
                }),
              )
                .then(function (w) {
                  return g(w, a);
                })
                .catch(function (w) {
                  throw Error(
                    "Failed to fetch or decompress files: ".concat(w.message),
                  );
                }))
            : ((d = d.map(function (w) {
                var C = t(w, e, b);
                C.send();
                if (200 === C.status || 0 === C.status) return C.response;
                throw Error("Failed to load ".concat(w));
              })),
              (d = g(d, a)));
          return d;
        },
        D = function (a) {
          var b = a.lastIndexOf("/");
          -1 === b && (b = 0);
          var d = a.slice(b).replace(".", ".br.");
          m ||
            (d.endsWith(".js.mem")
              ? (d = d.replace(".js.mem", ".mem"))
              : d.endsWith(".js") && (d = d.concat(".mem")));
          return a.slice(0, b) + d;
        },
        H = function (a) {
          return a.map(function (b) {
            return D(b);
          });
        },
        I = function (a, b) {
          b.decompressFunction = m ? k : h;
          b.paths = H(a);
          return G(b);
        },
        J = function (a, b, d, e) {
          return a.catch(function (w) {
            Object(n.e)(w);
            return e(b, d);
          });
        },
        F = function (a, b, d, e) {
          a = Array.isArray(a) ? a : [a];
          a: {
            var w = [I];
            b = { compressedMaximum: b, isAsync: d, shouldOutputArray: e };
            if (b.isAsync) {
              var C = w[0](a, b);
              for (d = 1; d < w.length; ++d) C = J(C, a, b, w[d]);
            } else {
              for (d = 0; d < w.length; d++) {
                e = w[d];
                try {
                  C = e(a, b);
                  break a;
                } catch (y) {
                  Object(n.e)(y.message);
                }
              }
              throw Error("None of the worker files were able to load. ");
            }
          }
          return C;
        };
    },
    function (v, A, u) {
      function p(l, r, c, m) {
        function f(k) {
          return k instanceof c
            ? k
            : new c(function (h) {
                h(k);
              });
        }
        return new (c || (c = Promise))(function (k, h) {
          function t(z) {
            try {
              g(m.next(z));
            } catch (G) {
              h(G);
            }
          }
          function q(z) {
            try {
              g(m["throw"](z));
            } catch (G) {
              h(G);
            }
          }
          function g(z) {
            z.done ? k(z.value) : f(z.value).then(t, q);
          }
          g((m = m.apply(l, r || [])).next());
        });
      }
      function n(l, r) {
        function c(g) {
          return function (z) {
            return m([g, z]);
          };
        }
        function m(g) {
          if (k) throw new TypeError("Generator is already executing.");
          for (; q && ((q = 0), g[0] && (f = 0)), f; )
            try {
              if (
                ((k = 1),
                h &&
                  (t =
                    g[0] & 2
                      ? h["return"]
                      : g[0]
                        ? h["throw"] || ((t = h["return"]) && t.call(h), 0)
                        : h.next) &&
                  !(t = t.call(h, g[1])).done)
              )
                return t;
              if (((h = 0), t)) g = [g[0] & 2, t.value];
              switch (g[0]) {
                case 0:
                case 1:
                  t = g;
                  break;
                case 4:
                  return (f.label++, { value: g[1], done: !1 });
                case 5:
                  f.label++;
                  h = g[1];
                  g = [0];
                  continue;
                case 7:
                  g = f.ops.pop();
                  f.trys.pop();
                  continue;
                default:
                  if (
                    !((t = f.trys), (t = 0 < t.length && t[t.length - 1])) &&
                    (6 === g[0] || 2 === g[0])
                  ) {
                    f = 0;
                    continue;
                  }
                  if (3 === g[0] && (!t || (g[1] > t[0] && g[1] < t[3])))
                    f.label = g[1];
                  else if (6 === g[0] && f.label < t[1])
                    ((f.label = t[1]), (t = g));
                  else if (t && f.label < t[2])
                    ((f.label = t[2]), f.ops.push(g));
                  else {
                    t[2] && f.ops.pop();
                    f.trys.pop();
                    continue;
                  }
              }
              g = r.call(l, f);
            } catch (z) {
              ((g = [6, z]), (h = 0));
            } finally {
              k = t = 0;
            }
          if (g[0] & 5) throw g[1];
          return { value: g[0] ? g[1] : void 0, done: !0 };
        }
        var f = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          k,
          h,
          t,
          q = Object.create(
            ("function" === typeof Iterator ? Iterator : Object).prototype,
          );
        return (
          (q.next = c(0)),
          (q["throw"] = c(1)),
          (q["return"] = c(2)),
          "function" === typeof Symbol &&
            (q[Symbol.iterator] = function () {
              return this;
            }),
          q
        );
      }
      u.d(A, "a", function () {
        return x;
      });
      u.d(A, "b", function () {
        return p;
      });
      u.d(A, "c", function () {
        return n;
      });
      var x = function () {
        x =
          Object.assign ||
          function (l) {
            for (var r, c = 1, m = arguments.length; c < m; c++) {
              r = arguments[c];
              for (var f in r)
                Object.prototype.hasOwnProperty.call(r, f) && (l[f] = r[f]);
            }
            return l;
          };
        return x.apply(this, arguments);
      };
    },
    function (v, A, u) {
      function p(l, r, c) {
        return new Promise(function (m) {
          if (!l) return m();
          var f = c.document.createElement("script");
          f.type = "text/javascript";
          f.onload = function () {
            m();
          };
          f.onerror = function () {
            r && Object(x.e)(r);
            m();
          };
          f.src = l;
          c.document.getElementsByTagName("head")[0].appendChild(f);
        });
      }
      function n(l, r, c, m, f, k) {
        k = k || 0;
        var h = r[f],
          t = m.length,
          q = 100 <= l.length && !h;
        t !== c || m.buffer.byteLength !== t
          ? (q
              ? ((l = l.shift()),
                (h = r[l]),
                h.length < c && (h = new Int8Array(c)),
                (r[l] = null))
              : (h = h ? r[f] : new Int8Array(c)),
            h.subarray(k, k + t).set(m),
            (m = h))
          : q && ((l = l.shift()), (r[l] = null));
        r[f] = m;
      }
      u.d(A, "a", function () {
        return p;
      });
      u.d(A, "b", function () {
        return n;
      });
      var x = u(0);
    },
    function (v, A, u) {
      u.d(A, "b", function () {
        return p;
      });
      u.d(A, "a", function () {
        return n;
      });
      var p = function (x) {
          if ("string" === typeof x) {
            for (
              var l = new Uint8Array(x.length), r = x.length, c = 0;
              c < r;
              c++
            )
              l[c] = x.charCodeAt(c);
            return l;
          }
          return x;
        },
        n = function (x) {
          if ("string" !== typeof x) {
            for (var l = "", r = 0, c = x.length, m; r < c; )
              ((m = x.subarray(r, r + 1024)),
                (r += 1024),
                (l += String.fromCharCode.apply(null, m)));
            return l;
          }
          return x;
        };
    },
    function (v, A, u) {
      u.d(A, "a", function () {
        return q;
      });
      var p,
        n = "undefined" === typeof window ? self : window;
      v = (function () {
        var g = navigator.userAgent.toLowerCase();
        return (g =
          /(msie) ([\w.]+)/.exec(g) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(g))
          ? parseInt(g[2], 10)
          : g;
      })();
      var x = (function () {
        var g = n.navigator.userAgent.match(/OPR/),
          z = n.navigator.userAgent.match(/Maxthon/),
          G = n.navigator.userAgent.match(/Edge/);
        return n.navigator.userAgent.match(/Chrome\/(.*?) /) && !g && !z && !G;
      })();
      (function () {
        if (!x) return null;
        var g = n.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
        return g ? parseInt(g[1], 10) : g;
      })();
      var l =
        !!navigator.userAgent.match(/Edge/i) ||
        (navigator.userAgent.match(/Edg\/(.*?)/) &&
          n.navigator.userAgent.match(/Chrome\/(.*?) /));
      (function () {
        if (!l) return null;
        var g = n.navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return g ? parseInt(g[1], 10) : g;
      })();
      A =
        /iPad|iPhone|iPod/.test(n.navigator.platform) ||
        ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) ||
        /iPad|iPhone|iPod/.test(n.navigator.userAgent);
      var r = (function () {
          var g = n.navigator.userAgent.match(
            /.*\/([0-9\.]+)\s(Safari|Mobile).*/i,
          );
          return g ? parseFloat(g[1]) : g;
        })(),
        c =
          /^((?!chrome|android).)*safari/i.test(n.navigator.userAgent) ||
          (/^((?!chrome|android).)*$/.test(n.navigator.userAgent) && A);
      c &&
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
        parseInt(
          null === (p = navigator.userAgent.match(/Version\/(\d+)/)) ||
            void 0 === p
            ? void 0
            : p[1],
          10,
        );
      var m = n.navigator.userAgent.match(/Firefox/);
      (function () {
        if (!m) return null;
        var g = n.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return g ? parseInt(g[1], 10) : g;
      })();
      v || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);
      navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
      n.navigator.userAgent.indexOf("Android");
      var f = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(
          n.navigator.userAgent,
        ),
        k = n.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)
          ? 14 <=
            parseInt(
              n.navigator.userAgent.match(
                /(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i,
              )[3],
              10,
            )
          : !1,
        h = !(!self.WebAssembly || !self.WebAssembly.validate),
        t =
          -1 < n.navigator.userAgent.indexOf("Edge/16") ||
          -1 < n.navigator.userAgent.indexOf("MSAppHost"),
        q = function () {
          var g;
          if ((g = h && !t))
            ((g = c && null !== r && 14 > r), (g = !(!k && (g || f))));
          return g;
        };
    },
    function (v, A, u) {
      u.d(A, "a", function () {
        return f;
      });
      var p = u(4);
      v = u(13);
      var n = u.n(v),
        x = new Map(),
        l = function () {
          return ("undefined" === typeof window ? self : window).trustedTypes;
        },
        r = function (k, h) {
          return l().createPolicy(k, {
            createHTML: function (t) {
              return n.a.sanitize(
                t,
                Object(p.a)(Object(p.a)({}, h), { RETURN_TRUSTED_TYPE: !1 }),
              );
            },
            createScript: function (t) {
              return t;
            },
            createScriptURL: function (t) {
              return t;
            },
          });
        },
        c = function (k) {
          return l().createPolicy(k, {
            createHTML: function (h) {
              return h;
            },
            createScript: function (h) {
              return h;
            },
            createScriptURL: function (h) {
              return h;
            },
          });
        },
        m = function (k, h) {
          var t,
            q = {
              createHTML: function (g) {
                return n.a.sanitize(g, Object(p.a)({}, h));
              },
              createScript: function (g) {
                return g;
              },
              createScriptURL: function (g) {
                return g;
              },
            };
          if (null === (t = l()) || void 0 === t ? 0 : t.createPolicy)
            ((t = "".concat(k, "-po")),
              x.has(k) || ((q = c(t)), x.set(t, q), (q = r(k, h)), x.set(k, q)),
              (q = x.get(h.createPolicyOnly ? t : k)));
          return q;
        },
        f = function (k, h) {
          void 0 === h &&
            (h = { createPolicyOnly: !0, trustedTypesPolicyName: "webviewer" });
          return m(h.trustedTypesPolicyName, h).createScriptURL(k.toString());
        };
    },
    function (v, A, u) {
      function p(r) {
        "@babel/helpers - typeof";
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (c) {
                  return typeof c;
                }
              : function (c) {
                  return c &&
                    "function" == typeof Symbol &&
                    c.constructor === Symbol &&
                    c !== Symbol.prototype
                    ? "symbol"
                    : typeof c;
                }),
          p(r)
        );
      }
      var n, x, l;
      !(function (r) {
        "object" === p(A) && "undefined" !== typeof v
          ? (v.exports = r())
          : !((x = []),
            (n = r),
            (l = "function" === typeof n ? n.apply(A, x) : n),
            void 0 !== l && (v.exports = l));
      })(function () {
        return (function k(c, m, f) {
          function h(g, z) {
            if (!m[g]) {
              if (!c[g]) {
                if (t) return t(g, !0);
                z = Error("Cannot find module '".concat(g, "'"));
                throw ((z.code = "MODULE_NOT_FOUND"), z);
              }
              z = m[g] = { exports: {} };
              c[g][0].call(
                z.exports,
                function (G) {
                  return h(c[g][1][G] || G);
                },
                z,
                z.exports,
                k,
                c,
                m,
                f,
              );
            }
            return m[g].exports;
          }
          for (var t = !1, q = 0; q < f.length; q++) h(f[q]);
          return h;
        })(
          {
            1: [
              function (c, m, f) {
                var k = {}.hasOwnProperty,
                  h = function (t, q) {
                    function g() {
                      this.constructor = t;
                    }
                    for (var z in q) k.call(q, z) && (t[z] = q[z]);
                    g.prototype = q.prototype;
                    t.prototype = new g();
                    t.__super__ = q.prototype;
                    return t;
                  };
                f = c("./PriorityQueue/AbstractPriorityQueue");
                c = c("./PriorityQueue/ArrayStrategy");
                f = (function (t) {
                  function q(g) {
                    g || (g = {});
                    g.strategy || (g.strategy = BinaryHeapStrategy);
                    g.comparator ||
                      (g.comparator = function (z, G) {
                        return (z || 0) - (G || 0);
                      });
                    q.__super__.constructor.call(this, g);
                  }
                  h(q, t);
                  return q;
                })(f);
                f.ArrayStrategy = c;
                m.exports = f;
              },
              {
                "./PriorityQueue/AbstractPriorityQueue": 2,
                "./PriorityQueue/ArrayStrategy": 3,
              },
            ],
            2: [
              function (c, m, f) {
                m.exports = (function () {
                  function k(h) {
                    if (null == (null != h ? h.strategy : void 0))
                      throw "Must pass options.strategy, a strategy";
                    if (null == (null != h ? h.comparator : void 0))
                      throw "Must pass options.comparator, a comparator";
                    this.priv = new h.strategy(h);
                    this.length = 0;
                  }
                  k.prototype.queue = function (h) {
                    this.length++;
                    this.priv.queue(h);
                  };
                  k.prototype.dequeue = function (h) {
                    if (!this.length) throw "Empty queue";
                    this.length--;
                    return this.priv.dequeue();
                  };
                  k.prototype.peek = function (h) {
                    if (!this.length) throw "Empty queue";
                    return this.priv.peek();
                  };
                  k.prototype.remove = function (h) {
                    this.priv.remove(h) && --this.length;
                  };
                  k.prototype.find = function (h) {
                    return 0 <= this.priv.find(h);
                  };
                  k.prototype.removeAllMatching = function (h, t) {
                    h = this.priv.removeAllMatching(h, t);
                    this.length -= h;
                  };
                  return k;
                })();
              },
              {},
            ],
            3: [
              function (c, m, f) {
                var k = function (h, t, q) {
                  var g;
                  var z = 0;
                  for (g = h.length; z < g; ) {
                    var G = (z + g) >>> 1;
                    0 <= q(h[G], t) ? (z = G + 1) : (g = G);
                  }
                  return z;
                };
                m.exports = (function () {
                  function h(t) {
                    var q;
                    this.options = t;
                    this.comparator = this.options.comparator;
                    this.data =
                      (null != (q = this.options.initialValues)
                        ? q.slice(0)
                        : void 0) || [];
                    this.data.sort(this.comparator).reverse();
                  }
                  h.prototype.queue = function (t) {
                    var q = k(this.data, t, this.comparator);
                    this.data.splice(q, 0, t);
                  };
                  h.prototype.dequeue = function () {
                    return this.data.pop();
                  };
                  h.prototype.peek = function () {
                    return this.data[this.data.length - 1];
                  };
                  h.prototype.find = function (t) {
                    var q = k(this.data, t, this.comparator) - 1;
                    return 0 <= q && !this.comparator(this.data[q], t) ? q : -1;
                  };
                  h.prototype.remove = function (t) {
                    t = this.find(t);
                    return 0 <= t ? (this.data.splice(t, 1), !0) : !1;
                  };
                  h.prototype.removeAllMatching = function (t, q) {
                    for (var g = 0, z = this.data.length - 1; 0 <= z; --z)
                      if (t(this.data[z])) {
                        var G = this.data.splice(z, 1)[0];
                        q && q(G);
                        ++g;
                      }
                    return g;
                  };
                  return h;
                })();
              },
              {},
            ],
          },
          {},
          [1],
        )(1);
      });
    },
    function (v, A, u) {
      (function (p) {
        function n(r, c) {
          this._id = r;
          this._clearFn = c;
        }
        var x =
            ("undefined" !== typeof p && p) ||
            ("undefined" !== typeof self && self) ||
            window,
          l = Function.prototype.apply;
        A.setTimeout = function () {
          return new n(l.call(setTimeout, x, arguments), clearTimeout);
        };
        A.setInterval = function () {
          return new n(l.call(setInterval, x, arguments), clearInterval);
        };
        A.clearTimeout = A.clearInterval = function (r) {
          r && r.close();
        };
        n.prototype.unref = n.prototype.ref = function () {};
        n.prototype.close = function () {
          this._clearFn.call(x, this._id);
        };
        A.enroll = function (r, c) {
          clearTimeout(r._idleTimeoutId);
          r._idleTimeout = c;
        };
        A.unenroll = function (r) {
          clearTimeout(r._idleTimeoutId);
          r._idleTimeout = -1;
        };
        A._unrefActive = A.active = function (r) {
          clearTimeout(r._idleTimeoutId);
          var c = r._idleTimeout;
          0 <= c &&
            (r._idleTimeoutId = setTimeout(function () {
              r._onTimeout && r._onTimeout();
            }, c));
        };
        u(25);
        A.setImmediate =
          ("undefined" !== typeof self && self.setImmediate) ||
          ("undefined" !== typeof p && p.setImmediate) ||
          (this && this.setImmediate);
        A.clearImmediate =
          ("undefined" !== typeof self && self.clearImmediate) ||
          ("undefined" !== typeof p && p.clearImmediate) ||
          (this && this.clearImmediate);
      }).call(this, u(12));
    },
    function (v, A, u) {
      function p(c, m, f, k) {
        return n(
          c,
          m,
          f,
          k,
          !!WebAssembly.instantiateStreaming,
          void 0,
          void 0,
        ).then(function (h) {
          Object(x.a)(
            "load",
            "WASM compilation took ".concat(Date.now() - NaN, " ms"),
          );
          return h;
        });
      }
      function n(c, m, f, k, h, t, q) {
        t = t || Date.now();
        if (h && !k)
          return (
            Object(x.a)("load", "Try instantiateStreaming"),
            fetch(Object(l.a)(c))
              .then(function (g) {
                return WebAssembly.instantiateStreaming(g, m);
              })
              .catch(function (g) {
                Object(x.a)(
                  "load",
                  "instantiateStreaming Failed "
                    .concat(c, " message ")
                    .concat(g.message),
                );
                return n(c, m, f, k, !1, t, q);
              })
          );
        h = k
          ? k.map(function (g, z) {
              return "".concat(g, "PDFNetCWasm-chunk-").concat(z, ".wasm");
            })
          : c;
        return Object(l.b)(h, f, !0, !0).then(function (g) {
          q = Date.now();
          Object(x.a)("load", "Request took ".concat(q - t, " ms"));
          return WebAssembly.instantiate(g, m);
        });
      }
      u.d(A, "a", function () {
        return p;
      });
      var x = u(0),
        l = u(3),
        r = u(5);
      u.d(A, "b", function () {
        return r.a;
      });
    },
    function (v, A) {
      A = (function () {
        return this;
      })();
      try {
        A = A || new Function("return this")();
      } catch (u) {
        "object" === typeof window && (A = window);
      }
      v.exports = A;
    },
    function (v, A, u) {
      (function (p, n) {
        v.exports = n();
      })(this, function () {
        function p(T) {
          return function (O) {
            O instanceof RegExp && (O.lastIndex = 0);
            for (
              var S = arguments.length, U = Array(1 < S ? S - 1 : 0), W = 1;
              W < S;
              W++
            )
              U[W - 1] = arguments[W];
            return G(T, O, U);
          };
        }
        function n(T, O) {
          var S =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : b;
          f && f(T, null);
          for (var U = O.length; U--; ) {
            var W = O[U];
            if ("string" === typeof W) {
              var ma = S(W);
              ma !== W && (k(O) || (O[U] = ma), (W = ma));
            }
            T[W] = !0;
          }
          return T;
        }
        function x(T) {
          for (
            var O = z(null), S = $jscomp.makeIterator(m(T)), U = S.next();
            !U.done;
            U = S.next()
          ) {
            var W = $jscomp.makeIterator(U.value);
            U = W.next().value;
            W = W.next().value;
            if (E(T, U))
              if (Array.isArray(W)) {
                for (var ma = 0; ma < W.length; ma++)
                  E(W, ma) || (W[ma] = null);
                O[U] = W;
              } else
                O[U] =
                  W && "object" === typeof W && W.constructor === Object
                    ? x(W)
                    : W;
          }
          return O;
        }
        function l(T, O) {
          for (; null !== T; ) {
            var S = t(T, O);
            if (S) {
              if (S.get) return p(S.get);
              if ("function" === typeof S.value) return p(S.value);
            }
            T = h(T);
          }
          return function () {
            return null;
          };
        }
        function r() {
          function T(B, K, M) {
            H(B, function (P) {
              P.call(S, K, M, ua);
            });
          }
          var O =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "undefined" === typeof window
                  ? null
                  : window,
            S = function (B) {
              return r(B);
            };
          S.version = "3.2.6";
          S.removed = [];
          if (
            !O ||
            !O.document ||
            O.document.nodeType !== Ba.document ||
            !O.Element
          )
            return ((S.isSupported = !1), S);
          var U = O.document,
            W = U,
            ma = W.currentScript,
            lb = O.DocumentFragment,
            Z = O.HTMLTemplateElement,
            Ta = O.Node,
            mb = O.Element,
            Ca = O.NodeFilter,
            Ob =
              void 0 === O.NamedNodeMap
                ? O.NamedNodeMap || O.MozNamedAttrMap
                : O.NamedNodeMap,
            Pb = O.HTMLFormElement,
            Qb = O.DOMParser,
            Ia = O.trustedTypes;
          O = mb.prototype;
          var Rb = l(O, "cloneNode"),
            Sb = l(O, "remove"),
            Tb = l(O, "nextSibling"),
            Ub = l(O, "childNodes"),
            Ja = l(O, "parentNode");
          "function" === typeof Z &&
            ((Z = U.createElement("template")),
            Z.content &&
              Z.content.ownerDocument &&
              (U = Z.content.ownerDocument));
          var ha,
            Da = "";
          Z = U;
          var Ua = Z.implementation,
            Vb = Z.createNodeIterator,
            Wb = Z.createDocumentFragment,
            Xb = Z.getElementsByTagName,
            Yb = W.importNode,
            ia = nb();
          S.isSupported =
            "function" === typeof m &&
            "function" === typeof Ja &&
            Ua &&
            void 0 !== Ua.createHTMLDocument;
          Z = ob;
          var Va = Z.MUSTACHE_EXPR,
            Wa = Z.ERB_EXPR,
            Xa = Z.TMPLIT_EXPR,
            Zb = Z.DATA_ATTR,
            $b = Z.ARIA_ATTR,
            ac = Z.IS_SCRIPT_OR_DATA,
            pb = Z.ATTR_WHITESPACE,
            qb = Z.CUSTOM_ELEMENT,
            rb = ob.IS_ALLOWED_URI,
            ca = null,
            sb = n(
              {},
              [].concat(
                $jscomp.arrayFromIterable(Q),
                $jscomp.arrayFromIterable(V),
                $jscomp.arrayFromIterable(X),
                $jscomp.arrayFromIterable(la),
                $jscomp.arrayFromIterable(na),
              ),
            ),
            ea = null,
            tb = n(
              {},
              [].concat(
                $jscomp.arrayFromIterable(ra),
                $jscomp.arrayFromIterable(pa),
                $jscomp.arrayFromIterable(aa),
                $jscomp.arrayFromIterable(qa),
              ),
            ),
            Y = Object.seal(
              z(null, {
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
            Ea = null,
            Ya = null,
            ub = !0,
            Za = !0,
            vb = !1,
            wb = !0,
            va = !1,
            Ka = !0,
            sa = !1,
            $a = !1,
            ab = !1,
            wa = !1,
            La = !1,
            Ma = !1,
            xb = !0,
            yb = !1,
            bb = !0,
            Fa = !1,
            xa = {},
            ya = null,
            zb = n(
              {},
              "annotation-xml audio colgroup desc foreignobject head iframe math mi mn mo ms mtext noembed noframes noscript plaintext script style svg template thead title video xmp".split(
                " ",
              ),
            ),
            Ab = null,
            Bb = n({}, "audio video img source image track".split(" ")),
            cb = null,
            Cb = n(
              {},
              "alt class for id label name pattern placeholder role summary title value style xmlns".split(
                " ",
              ),
            ),
            za = "http://www.w3.org/1999/xhtml",
            Db = !1,
            db = null,
            bc = n(
              {},
              [
                "http://www.w3.org/1998/Math/MathML",
                "http://www.w3.org/2000/svg",
                "http://www.w3.org/1999/xhtml",
              ],
              d,
            ),
            Na = n({}, ["mi", "mo", "mn", "ms", "mtext"]),
            Oa = n({}, ["annotation-xml"]),
            cc = n({}, ["title", "style", "font", "a", "script"]),
            Ga = null,
            dc = ["application/xhtml+xml", "text/html"],
            da = null,
            ua = null,
            ec = U.createElement("form"),
            Eb = function (B) {
              return B instanceof RegExp || B instanceof Function;
            },
            eb = function () {
              var B =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!ua || ua !== B) {
                (B && "object" === typeof B) || (B = {});
                B = x(B);
                Ga =
                  -1 === dc.indexOf(B.PARSER_MEDIA_TYPE)
                    ? "text/html"
                    : B.PARSER_MEDIA_TYPE;
                da = "application/xhtml+xml" === Ga ? d : b;
                ca = E(B, "ALLOWED_TAGS") ? n({}, B.ALLOWED_TAGS, da) : sb;
                ea = E(B, "ALLOWED_ATTR") ? n({}, B.ALLOWED_ATTR, da) : tb;
                db = E(B, "ALLOWED_NAMESPACES")
                  ? n({}, B.ALLOWED_NAMESPACES, d)
                  : bc;
                cb = E(B, "ADD_URI_SAFE_ATTR")
                  ? n(x(Cb), B.ADD_URI_SAFE_ATTR, da)
                  : Cb;
                Ab = E(B, "ADD_DATA_URI_TAGS")
                  ? n(x(Bb), B.ADD_DATA_URI_TAGS, da)
                  : Bb;
                ya = E(B, "FORBID_CONTENTS")
                  ? n({}, B.FORBID_CONTENTS, da)
                  : zb;
                Ea = E(B, "FORBID_TAGS") ? n({}, B.FORBID_TAGS, da) : x({});
                Ya = E(B, "FORBID_ATTR") ? n({}, B.FORBID_ATTR, da) : x({});
                xa = E(B, "USE_PROFILES") ? B.USE_PROFILES : !1;
                ub = !1 !== B.ALLOW_ARIA_ATTR;
                Za = !1 !== B.ALLOW_DATA_ATTR;
                vb = B.ALLOW_UNKNOWN_PROTOCOLS || !1;
                wb = !1 !== B.ALLOW_SELF_CLOSE_IN_ATTR;
                va = B.SAFE_FOR_TEMPLATES || !1;
                Ka = !1 !== B.SAFE_FOR_XML;
                sa = B.WHOLE_DOCUMENT || !1;
                wa = B.RETURN_DOM || !1;
                La = B.RETURN_DOM_FRAGMENT || !1;
                Ma = B.RETURN_TRUSTED_TYPE || !1;
                ab = B.FORCE_BODY || !1;
                xb = !1 !== B.SANITIZE_DOM;
                yb = B.SANITIZE_NAMED_PROPS || !1;
                bb = !1 !== B.KEEP_CONTENT;
                Fa = B.IN_PLACE || !1;
                rb = B.ALLOWED_URI_REGEXP || Pa;
                za = B.NAMESPACE || "http://www.w3.org/1999/xhtml";
                Na = B.MATHML_TEXT_INTEGRATION_POINTS || Na;
                Oa = B.HTML_INTEGRATION_POINTS || Oa;
                Y = B.CUSTOM_ELEMENT_HANDLING || {};
                B.CUSTOM_ELEMENT_HANDLING &&
                  Eb(B.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (Y.tagNameCheck = B.CUSTOM_ELEMENT_HANDLING.tagNameCheck);
                B.CUSTOM_ELEMENT_HANDLING &&
                  Eb(B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (Y.attributeNameCheck =
                    B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck);
                B.CUSTOM_ELEMENT_HANDLING &&
                  "boolean" ===
                    typeof B.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements &&
                  (Y.allowCustomizedBuiltInElements =
                    B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements);
                va && (Za = !1);
                La && (wa = !0);
                xa &&
                  ((ca = n({}, na)),
                  (ea = []),
                  !0 === xa.html && (n(ca, Q), n(ea, ra)),
                  !0 === xa.svg && (n(ca, V), n(ea, pa), n(ea, qa)),
                  !0 === xa.svgFilters && (n(ca, X), n(ea, pa), n(ea, qa)),
                  !0 === xa.mathMl && (n(ca, la), n(ea, aa), n(ea, qa)));
                B.ADD_TAGS &&
                  (ca === sb && (ca = x(ca)), n(ca, B.ADD_TAGS, da));
                B.ADD_ATTR &&
                  (ea === tb && (ea = x(ea)), n(ea, B.ADD_ATTR, da));
                B.ADD_URI_SAFE_ATTR && n(cb, B.ADD_URI_SAFE_ATTR, da);
                B.FORBID_CONTENTS &&
                  (ya === zb && (ya = x(ya)), n(ya, B.FORBID_CONTENTS, da));
                bb && (ca["#text"] = !0);
                sa && n(ca, ["html", "head", "body"]);
                ca.table && (n(ca, ["tbody"]), delete Ea.tbody);
                if (B.TRUSTED_TYPES_POLICY) {
                  if ("function" !== typeof B.TRUSTED_TYPES_POLICY.createHTML)
                    throw N(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
                    );
                  if (
                    "function" !== typeof B.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw N(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
                    );
                  ha = B.TRUSTED_TYPES_POLICY;
                  Da = ha.createHTML("");
                } else
                  (void 0 === ha && (ha = fc(Ia, ma)),
                    null !== ha &&
                      "string" === typeof Da &&
                      (Da = ha.createHTML("")));
                g && g(B);
                ua = B;
              }
            },
            Fb = n(
              {},
              [].concat(
                $jscomp.arrayFromIterable(V),
                $jscomp.arrayFromIterable(X),
                $jscomp.arrayFromIterable(ja),
              ),
            ),
            Gb = n(
              {},
              [].concat(
                $jscomp.arrayFromIterable(la),
                $jscomp.arrayFromIterable(fa),
              ),
            ),
            gc = function (B) {
              var K = Ja(B);
              (K && K.tagName) ||
                (K = { namespaceURI: za, tagName: "template" });
              var M = b(B.tagName),
                P = b(K.tagName);
              return db[B.namespaceURI]
                ? "http://www.w3.org/2000/svg" === B.namespaceURI
                  ? "http://www.w3.org/1999/xhtml" === K.namespaceURI
                    ? "svg" === M
                    : "http://www.w3.org/1998/Math/MathML" === K.namespaceURI
                      ? "svg" === M && ("annotation-xml" === P || Na[P])
                      : !!Fb[M]
                  : "http://www.w3.org/1998/Math/MathML" === B.namespaceURI
                    ? "http://www.w3.org/1999/xhtml" === K.namespaceURI
                      ? "math" === M
                      : "http://www.w3.org/2000/svg" === K.namespaceURI
                        ? "math" === M && Oa[P]
                        : !!Gb[M]
                    : "http://www.w3.org/1999/xhtml" === B.namespaceURI
                      ? ("http://www.w3.org/2000/svg" === K.namespaceURI &&
                          !Oa[P]) ||
                        ("http://www.w3.org/1998/Math/MathML" ===
                          K.namespaceURI &&
                          !Na[P])
                        ? !1
                        : !Gb[M] && (cc[M] || !Fb[M])
                      : "application/xhtml+xml" === Ga && db[B.namespaceURI]
                        ? !0
                        : !1
                : !1;
            },
            oa = function (B) {
              F(S.removed, { element: B });
              try {
                Ja(B).removeChild(B);
              } catch (K) {
                Sb(B);
              }
            },
            Aa = function (B, K) {
              try {
                F(S.removed, { attribute: K.getAttributeNode(B), from: K });
              } catch (M) {
                F(S.removed, { attribute: null, from: K });
              }
              K.removeAttribute(B);
              if ("is" === B)
                if (wa || La)
                  try {
                    oa(K);
                  } catch (M) {}
                else
                  try {
                    K.setAttribute(B, "");
                  } catch (M) {}
            },
            Hb = function (B) {
              var K = null,
                M = null;
              ab
                ? (B = "<remove></remove>" + B)
                : (M = (M = e(B, /^[\r\n\t ]+/)) && M[0]);
              "application/xhtml+xml" === Ga &&
                "http://www.w3.org/1999/xhtml" === za &&
                (B =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  B +
                  "</body></html>");
              var P = ha ? ha.createHTML(B) : B;
              if ("http://www.w3.org/1999/xhtml" === za)
                try {
                  K = new Qb().parseFromString(P, Ga);
                } catch (R) {}
              if (!K || !K.documentElement) {
                K = Ua.createDocument(za, "template", null);
                try {
                  K.documentElement.innerHTML = Db ? Da : P;
                } catch (R) {}
              }
              P = K.body || K.documentElement;
              B &&
                M &&
                P.insertBefore(U.createTextNode(M), P.childNodes[0] || null);
              return "http://www.w3.org/1999/xhtml" === za
                ? Xb.call(K, sa ? "html" : "body")[0]
                : sa
                  ? K.documentElement
                  : P;
            },
            Ib = function (B) {
              return Vb.call(
                B.ownerDocument || B,
                B,
                Ca.SHOW_ELEMENT |
                  Ca.SHOW_COMMENT |
                  Ca.SHOW_TEXT |
                  Ca.SHOW_PROCESSING_INSTRUCTION |
                  Ca.SHOW_CDATA_SECTION,
                null,
              );
            },
            fb = function (B) {
              return (
                B instanceof Pb &&
                ("string" !== typeof B.nodeName ||
                  "string" !== typeof B.textContent ||
                  "function" !== typeof B.removeChild ||
                  !(B.attributes instanceof Ob) ||
                  "function" !== typeof B.removeAttribute ||
                  "function" !== typeof B.setAttribute ||
                  "string" !== typeof B.namespaceURI ||
                  "function" !== typeof B.insertBefore ||
                  "function" !== typeof B.hasChildNodes)
              );
            },
            Jb = function (B) {
              return "function" === typeof Ta && B instanceof Ta;
            },
            Kb = function (B) {
              var K = null;
              T(ia.beforeSanitizeElements, B, null);
              if (fb(B)) return (oa(B), !0);
              var M = da(B.nodeName);
              T(ia.uponSanitizeElement, B, { tagName: M, allowedTags: ca });
              if (
                (Ka &&
                  B.hasChildNodes() &&
                  !Jb(B.firstElementChild) &&
                  L(/<[/\w!]/g, B.innerHTML) &&
                  L(/<[/\w!]/g, B.textContent)) ||
                B.nodeType === Ba.progressingInstruction ||
                (Ka && B.nodeType === Ba.comment && L(/<[/\w]/g, B.data))
              )
                return (oa(B), !0);
              if (!ca[M] || Ea[M]) {
                if (
                  !Ea[M] &&
                  "annotation-xml" !== M &&
                  e(M, qb) &&
                  ((Y.tagNameCheck instanceof RegExp && L(Y.tagNameCheck, M)) ||
                    (Y.tagNameCheck instanceof Function && Y.tagNameCheck(M)))
                )
                  return !1;
                if (bb && !ya[M]) {
                  M = Ja(B) || B.parentNode;
                  var P = Ub(B) || B.childNodes;
                  if (P && M)
                    for (var R = P.length - 1; 0 <= R; --R) {
                      var ba = Rb(P[R], !0);
                      ba.__removalCount = (B.__removalCount || 0) + 1;
                      M.insertBefore(ba, Tb(B));
                    }
                }
                oa(B);
                return !0;
              }
              if (
                (B instanceof mb && !gc(B)) ||
                (("noscript" === M || "noembed" === M || "noframes" === M) &&
                  L(/<\/no(script|embed|frames)/i, B.innerHTML))
              )
                return (oa(B), !0);
              va &&
                B.nodeType === Ba.text &&
                ((K = B.textContent),
                H([Va, Wa, Xa], function (ka) {
                  K = w(K, ka, " ");
                }),
                B.textContent !== K &&
                  (F(S.removed, { element: B.cloneNode() }),
                  (B.textContent = K)));
              T(ia.afterSanitizeElements, B, null);
              return !1;
            },
            Lb = function (B, K, M) {
              if (xb && ("id" === K || "name" === K) && (M in U || M in ec))
                return !1;
              if (!Za || Ya[K] || !L(Zb, K))
                if (!ub || !L($b, K))
                  if (!ea[K] || Ya[K]) {
                    if (
                      !(
                        ("annotation-xml" !== B &&
                          e(B, qb) &&
                          ((Y.tagNameCheck instanceof RegExp &&
                            L(Y.tagNameCheck, B)) ||
                            (Y.tagNameCheck instanceof Function &&
                              Y.tagNameCheck(B))) &&
                          ((Y.attributeNameCheck instanceof RegExp &&
                            L(Y.attributeNameCheck, K)) ||
                            (Y.attributeNameCheck instanceof Function &&
                              Y.attributeNameCheck(K)))) ||
                        ("is" === K &&
                          Y.allowCustomizedBuiltInElements &&
                          ((Y.tagNameCheck instanceof RegExp &&
                            L(Y.tagNameCheck, M)) ||
                            (Y.tagNameCheck instanceof Function &&
                              Y.tagNameCheck(M))))
                      )
                    )
                      return !1;
                  } else if (
                    !(
                      cb[K] ||
                      L(rb, w(M, pb, "")) ||
                      (("src" === K || "xlink:href" === K || "href" === K) &&
                        "script" !== B &&
                        0 === C(M, "data:") &&
                        Ab[B]) ||
                      (vb && !L(ac, w(M, pb, "")))
                    ) &&
                    M
                  )
                    return !1;
              return !0;
            },
            Nb = function (B) {
              T(ia.beforeSanitizeAttributes, B, null);
              var K = B.attributes;
              if (K && !fb(B)) {
                for (
                  var M = {
                      attrName: "",
                      attrValue: "",
                      keepAttr: !0,
                      allowedAttributes: ea,
                      forceKeepAttr: void 0,
                    },
                    P = K.length,
                    R = {};
                  P--;

                ) {
                  var ba = K[P],
                    ka = ba.name,
                    gb = ba.namespaceURI,
                    hb = ba.value;
                  ba = da(ka);
                  R.$jscomp$loop$prop$value$10 = "value" === ka ? hb : y(hb);
                  M.attrName = ba;
                  M.attrValue = R.$jscomp$loop$prop$value$10;
                  M.keepAttr = !0;
                  M.forceKeepAttr = void 0;
                  T(ia.uponSanitizeAttribute, B, M);
                  R.$jscomp$loop$prop$value$10 = M.attrValue;
                  !yb ||
                    ("id" !== ba && "name" !== ba) ||
                    (Aa(ka, B),
                    (R.$jscomp$loop$prop$value$10 =
                      "user-content-" + R.$jscomp$loop$prop$value$10));
                  if (
                    Ka &&
                    L(
                      /((--!?|])>)|<\/(style|title)/i,
                      R.$jscomp$loop$prop$value$10,
                    )
                  )
                    Aa(ka, B);
                  else if (!M.forceKeepAttr)
                    if (M.keepAttr)
                      if (!wb && L(/\/>/i, R.$jscomp$loop$prop$value$10))
                        Aa(ka, B);
                      else {
                        va &&
                          H(
                            [Va, Wa, Xa],
                            (function (ib) {
                              return function (hc) {
                                ib.$jscomp$loop$prop$value$10 = w(
                                  ib.$jscomp$loop$prop$value$10,
                                  hc,
                                  " ",
                                );
                              };
                            })(R),
                          );
                        var Mb = da(B.nodeName);
                        if (Lb(Mb, ba, R.$jscomp$loop$prop$value$10)) {
                          if (
                            ha &&
                            "object" === typeof Ia &&
                            "function" === typeof Ia.getAttributeType &&
                            !gb
                          )
                            switch (Ia.getAttributeType(Mb, ba)) {
                              case "TrustedHTML":
                                R.$jscomp$loop$prop$value$10 = ha.createHTML(
                                  R.$jscomp$loop$prop$value$10,
                                );
                                break;
                              case "TrustedScriptURL":
                                R.$jscomp$loop$prop$value$10 =
                                  ha.createScriptURL(
                                    R.$jscomp$loop$prop$value$10,
                                  );
                            }
                          if (R.$jscomp$loop$prop$value$10 !== hb)
                            try {
                              (gb
                                ? B.setAttributeNS(
                                    gb,
                                    ka,
                                    R.$jscomp$loop$prop$value$10,
                                  )
                                : B.setAttribute(
                                    ka,
                                    R.$jscomp$loop$prop$value$10,
                                  ),
                                fb(B) ? oa(B) : J(S.removed));
                            } catch (ib) {
                              Aa(ka, B);
                            }
                        } else Aa(ka, B);
                      }
                    else Aa(ka, B);
                  R = {
                    $jscomp$loop$prop$value$10: R.$jscomp$loop$prop$value$10,
                  };
                }
                T(ia.afterSanitizeAttributes, B, null);
              }
            },
            ic = function M(K) {
              var P,
                R = Ib(K);
              for (T(ia.beforeSanitizeShadowDOM, K, null); (P = R.nextNode()); )
                (T(ia.uponSanitizeShadowNode, P, null),
                  Kb(P),
                  Nb(P),
                  P.content instanceof lb && M(P.content));
              T(ia.afterSanitizeShadowDOM, K, null);
            };
          S.sanitize = function (K) {
            var M =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              P = null,
              R = null;
            R = R = null;
            (Db = !K) && (K = "\x3c!--\x3e");
            if ("string" !== typeof K && !Jb(K))
              if ("function" === typeof K.toString) {
                if (((K = K.toString()), "string" !== typeof K))
                  throw N("dirty is not a string, aborting");
              } else throw N("toString is not a function");
            if (!S.isSupported) return K;
            $a || eb(M);
            S.removed = [];
            "string" === typeof K && (Fa = !1);
            if (Fa) {
              if (K.nodeName && ((M = da(K.nodeName)), !ca[M] || Ea[M]))
                throw N(
                  "root node is forbidden and cannot be sanitized in-place",
                );
            } else if (K instanceof Ta)
              ((P = Hb("\x3c!----\x3e")),
                (R = P.ownerDocument.importNode(K, !0)),
                R.nodeType === Ba.element && "BODY" === R.nodeName
                  ? (P = R)
                  : "HTML" === R.nodeName
                    ? (P = R)
                    : P.appendChild(R));
            else {
              if (!wa && !va && !sa && -1 === K.indexOf("<"))
                return ha && Ma ? ha.createHTML(K) : K;
              P = Hb(K);
              if (!P) return wa ? null : Ma ? Da : "";
            }
            P && ab && oa(P.firstChild);
            for (M = Ib(Fa ? K : P); (R = M.nextNode()); )
              (Kb(R), Nb(R), R.content instanceof lb && ic(R.content));
            if (Fa) return K;
            if (wa) {
              if (La)
                for (R = Wb.call(P.ownerDocument); P.firstChild; )
                  R.appendChild(P.firstChild);
              else R = P;
              if (ea.shadowroot || ea.shadowrootmode) R = Yb.call(W, R, !0);
              return R;
            }
            var ba = sa ? P.outerHTML : P.innerHTML;
            sa &&
              ca["!doctype"] &&
              P.ownerDocument &&
              P.ownerDocument.doctype &&
              P.ownerDocument.doctype.name &&
              L(Qa, P.ownerDocument.doctype.name) &&
              (ba = "<!DOCTYPE " + P.ownerDocument.doctype.name + ">\n" + ba);
            va &&
              H([Va, Wa, Xa], function (ka) {
                ba = w(ba, ka, " ");
              });
            return ha && Ma ? ha.createHTML(ba) : ba;
          };
          S.setConfig = function () {
            eb(
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            );
            $a = !0;
          };
          S.clearConfig = function () {
            ua = null;
            $a = !1;
          };
          S.isValidAttribute = function (K, M, P) {
            ua || eb({});
            K = da(K);
            M = da(M);
            return Lb(K, M, P);
          };
          S.addHook = function (K, M) {
            "function" === typeof M && F(ia[K], M);
          };
          S.removeHook = function (K, M) {
            return void 0 !== M
              ? ((M = I(ia[K], M)), -1 === M ? void 0 : a(ia[K], M, 1)[0])
              : J(ia[K]);
          };
          S.removeHooks = function (K) {
            ia[K] = [];
          };
          S.removeAllHooks = function () {
            ia = nb();
          };
          return S;
        }
        var c = Object,
          m = c.entries,
          f = c.setPrototypeOf,
          k = c.isFrozen,
          h = c.getPrototypeOf,
          t = c.getOwnPropertyDescriptor,
          q = Object,
          g = q.freeze;
        c = q.seal;
        var z = q.create;
        q = "undefined" !== typeof Reflect && Reflect;
        var G = q.apply,
          D = q.construct;
        g ||
          (g = function (T) {
            return T;
          });
        c ||
          (c = function (T) {
            return T;
          });
        G ||
          (G = function (T, O, S) {
            return T.apply(O, S);
          });
        D ||
          (D = function (T, O) {
            return new (Function.prototype.bind.apply(
              T,
              [null].concat($jscomp.arrayFromIterable(O)),
            ))();
          });
        var H = p(Array.prototype.forEach),
          I = p(Array.prototype.lastIndexOf),
          J = p(Array.prototype.pop),
          F = p(Array.prototype.push),
          a = p(Array.prototype.splice),
          b = p(String.prototype.toLowerCase),
          d = p(String.prototype.toString),
          e = p(String.prototype.match),
          w = p(String.prototype.replace),
          C = p(String.prototype.indexOf),
          y = p(String.prototype.trim),
          E = p(Object.prototype.hasOwnProperty),
          L = p(RegExp.prototype.test),
          N = (function (T) {
            return function () {
              for (var O = arguments.length, S = Array(O), U = 0; U < O; U++)
                S[U] = arguments[U];
              return D(T, S);
            };
          })(TypeError),
          Q = g(
            "a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dialog dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p picture pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(
              " ",
            ),
          ),
          V = g(
            "svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan view vkern".split(
              " ",
            ),
          ),
          X = g(
            "feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(
              " ",
            ),
          ),
          ja = g(
            "animate color-profile cursor discard font-face font-face-format font-face-name font-face-src font-face-uri foreignobject hatch hatchpath mesh meshgradient meshpatch meshrow missing-glyph script set solidcolor unknown use".split(
              " ",
            ),
          ),
          la = g(
            "math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover mprescripts".split(
              " ",
            ),
          ),
          fa = g(
            "maction maligngroup malignmark mlongdiv mscarries mscarry msgroup mstack msline msrow semantics annotation annotation-xml mprescripts none".split(
              " ",
            ),
          ),
          na = g(["#text"]),
          ra = g(
            "accept action align alt autocapitalize autocomplete autopictureinpicture autoplay background bgcolor border capture cellpadding cellspacing checked cite class clear color cols colspan controls controlslist coords crossorigin datetime decoding default dir disabled disablepictureinpicture disableremoteplayback download draggable enctype enterkeyhint face for headers height hidden high href hreflang id inputmode integrity ismap kind label lang list loading loop low max maxlength media method min minlength multiple muted name nonce noshade novalidate nowrap open optimum pattern placeholder playsinline popover popovertarget popovertargetaction poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title translate type usemap valign value width wrap xmlns slot".split(
              " ",
            ),
          ),
          pa = g(
            "accent-height accumulate additive alignment-baseline amplitude ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clippathunits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end exponent fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 intercept k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering slope specularconstant specularexponent spreadmethod startoffset stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale systemlanguage tabindex tablevalues targetx targety transform transform-origin text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(
              " ",
            ),
          ),
          aa = g(
            "accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle encoding fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(
              " ",
            ),
          ),
          qa = g([
            "xlink:href",
            "xml:id",
            "xlink:title",
            "xml:space",
            "xmlns:xlink",
          ]);
        q = c(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        var jb = c(/<%[\w\W]*|[\w\W]*%>/gm),
          Ra = c(/\$\{[\w\W]*/gm),
          kb = c(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          Sa = c(/^aria-[\-\w]+$/),
          Pa = c(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          Ha = c(/^(?:\w+script|data):/i),
          ta = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Qa = c(/^html$/i);
        c = c(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var ob = Object.freeze({
            __proto__: null,
            ARIA_ATTR: Sa,
            ATTR_WHITESPACE: ta,
            CUSTOM_ELEMENT: c,
            DATA_ATTR: kb,
            DOCTYPE_NAME: Qa,
            ERB_EXPR: jb,
            IS_ALLOWED_URI: Pa,
            IS_SCRIPT_OR_DATA: Ha,
            MUSTACHE_EXPR: q,
            TMPLIT_EXPR: Ra,
          }),
          Ba = {
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
          fc = function (T, O) {
            if ("object" !== typeof T || "function" !== typeof T.createPolicy)
              return null;
            var S = null;
            O &&
              O.hasAttribute("data-tt-policy-suffix") &&
              (S = O.getAttribute("data-tt-policy-suffix"));
            O = "dompurify" + (S ? "#" + S : "");
            try {
              return T.createPolicy(O, {
                createHTML: function (U) {
                  return U;
                },
                createScriptURL: function (U) {
                  return U;
                },
              });
            } catch (U) {
              return (
                console.warn(
                  "TrustedTypes policy " + O + " could not be created.",
                ),
                null
              );
            }
          },
          nb = function () {
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
        return r();
      });
    },
    function (v, A) {
      function u() {
        throw Error("setTimeout has not been defined");
      }
      function p() {
        throw Error("clearTimeout has not been defined");
      }
      function n(z) {
        if (f === setTimeout) return setTimeout(z, 0);
        if ((f === u || !f) && setTimeout)
          return ((f = setTimeout), setTimeout(z, 0));
        try {
          return f(z, 0);
        } catch (G) {
          try {
            return f.call(null, z, 0);
          } catch (D) {
            return f.call(this, z, 0);
          }
        }
      }
      function x(z) {
        if (k === clearTimeout) return clearTimeout(z);
        if ((k === p || !k) && clearTimeout)
          return ((k = clearTimeout), clearTimeout(z));
        try {
          return k(z);
        } catch (G) {
          try {
            return k.call(null, z);
          } catch (D) {
            return k.call(this, z);
          }
        }
      }
      function l() {
        t &&
          q &&
          ((t = !1), q.length ? (h = q.concat(h)) : (g = -1), h.length && r());
      }
      function r() {
        if (!t) {
          var z = n(l);
          t = !0;
          for (var G = h.length; G; ) {
            q = h;
            for (h = []; ++g < G; ) q && q[g].run();
            g = -1;
            G = h.length;
          }
          q = null;
          t = !1;
          x(z);
        }
      }
      function c(z, G) {
        this.fun = z;
        this.array = G;
      }
      function m() {}
      v = v.exports = {};
      try {
        var f = "function" === typeof setTimeout ? setTimeout : u;
      } catch (z) {
        f = u;
      }
      try {
        var k = "function" === typeof clearTimeout ? clearTimeout : p;
      } catch (z) {
        k = p;
      }
      var h = [],
        t = !1,
        q,
        g = -1;
      v.nextTick = function (z) {
        var G = Array(arguments.length - 1);
        if (1 < arguments.length)
          for (var D = 1; D < arguments.length; D++) G[D - 1] = arguments[D];
        h.push(new c(z, G));
        1 !== h.length || t || n(r);
      };
      c.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      v.title = "browser";
      v.browser = !0;
      v.env = {};
      v.argv = [];
      v.version = "";
      v.versions = {};
      v.on = m;
      v.addListener = m;
      v.once = m;
      v.off = m;
      v.removeListener = m;
      v.removeAllListeners = m;
      v.emit = m;
      v.prependListener = m;
      v.prependOnceListener = m;
      v.listeners = function (z) {
        return [];
      };
      v.binding = function (z) {
        throw Error("process.binding is not supported");
      };
      v.cwd = function () {
        return "/";
      };
      v.chdir = function (z) {
        throw Error("process.chdir is not supported");
      };
      v.umask = function () {
        return 0;
      };
    },
    function (v, A, u) {
      A.a = function () {
        ArrayBuffer.prototype.slice ||
          (ArrayBuffer.prototype.slice = function (p, n) {
            void 0 === p && (p = 0);
            void 0 === n && (n = this.byteLength);
            p = Math.floor(p);
            n = Math.floor(n);
            0 > p && (p += this.byteLength);
            0 > n && (n += this.byteLength);
            p = Math.min(Math.max(0, p), this.byteLength);
            n = Math.min(Math.max(0, n), this.byteLength);
            if (0 >= n - p) return new ArrayBuffer(0);
            var x = new ArrayBuffer(n - p),
              l = new Uint8Array(x);
            p = new Uint8Array(this, p, n - p);
            l.set(p);
            return x;
          });
      };
    },
    function (v, A, u) {
      A.a = function (p) {
        var n = {};
        decodeURIComponent(p.slice(1))
          .split("&")
          .forEach(function (x) {
            x = x.split("=", 2);
            n[x[0]] = x[1];
          });
        return n;
      };
    },
    function (v, A, u) {
      (function (p) {
        function n(H) {
          "function" !== typeof H && (H = new Function("".concat(H)));
          for (var I = Array(arguments.length - 1), J = 0; J < I.length; J++)
            I[J] = arguments[J + 1];
          q[t] = { callback: H, args: I };
          G(t);
          return t++;
        }
        function x(H) {
          delete q[H];
        }
        function l(H) {
          if (g) setTimeout(l, 0, H);
          else {
            var I = q[H];
            if (I) {
              g = !0;
              try {
                var J = I.callback,
                  F = I.args;
                switch (F.length) {
                  case 0:
                    J();
                    break;
                  case 1:
                    J(F[0]);
                    break;
                  case 2:
                    J(F[0], F[1]);
                    break;
                  case 3:
                    J(F[0], F[1], F[2]);
                    break;
                  default:
                    J.apply(void 0, F);
                }
              } finally {
                (x(H), (g = !1));
              }
            }
          }
        }
        function r() {
          G = function (H) {
            p.nextTick(function () {
              l(H);
            });
          };
        }
        function c() {
          if (h.postMessage && !h.importScripts) {
            var H = !0,
              I = h.onmessage;
            h.onmessage = function () {
              H = !1;
            };
            h.postMessage("", "*");
            h.onmessage = I;
            return H;
          }
        }
        function m() {
          var H = "setImmediate$".concat(Math.random(), "$"),
            I = function (J) {
              (J.source !== h && J.source !== h.parent) ||
                "string" !== typeof J.data ||
                0 !== J.data.indexOf(H) ||
                l(+J.data.slice(H.length));
            };
          h.addEventListener
            ? h.addEventListener("message", I, !1)
            : h.attachEvent("onmessage", I);
          G = function (J) {
            h.postMessage(H + J, "*");
          };
        }
        function f() {
          var H = z.documentElement;
          G = function (I) {
            var J = z.createElement("script");
            J.onreadystatechange = function () {
              l(I);
              J.onreadystatechange = null;
              H.removeChild(J);
              J = null;
            };
            H.appendChild(J);
          };
        }
        function k() {
          G = function (H) {
            setTimeout(l, 0, H);
          };
        }
        var h = "undefined" === typeof window ? self : window,
          t = 1,
          q = {},
          g = !1,
          z = h.document,
          G,
          D = Object.getPrototypeOf && Object.getPrototypeOf(h);
        D = D && D.setTimeout ? D : h;
        "[object process]" === {}.toString.call(h.process)
          ? r()
          : c()
            ? m()
            : z && "onreadystatechange" in z.createElement("script")
              ? f()
              : k();
        D.setImmediate = n;
        D.clearImmediate = x;
        A.a = { setImmediate: n, clearImmediate: x };
      }).call(this, u(14));
    },
    function (v, A, u) {
      var p = u(0),
        n = u(2);
      v = (function () {
        function x(l, r) {
          this.name = l;
          this.comObj = r;
          this.callbackIndex = 1;
          this.postMessageTransfers = !0;
          this.callbacksCapabilities = {};
          this.actionHandler = {};
          this.actionHandlerAsync = {};
          this.pdfnetCommandChain = this.nextAsync = null;
          this.pdfnetActiveCommands = new Set();
          this.isReset = !1;
          this.actionHandler.console_log = [
            function (c) {
              Object(p.d)(c);
            },
          ];
          this.actionHandler.console_error = [
            function (c) {
              Object(p.c)(c);
            },
          ];
          this.actionHandler.workerLoaded = [function () {}];
          this.msgHandler = this.handleMessage.bind(this);
          r.addEventListener("message", this.msgHandler);
        }
        x.prototype.on = function (l, r, c) {
          var m = this.actionHandler;
          m[l] &&
            Object(p.c)(
              'There is already an actionName called "'.concat(l, '"'),
            );
          m[l] = [r, c];
        };
        x.prototype.clearActionHandlers = function () {
          this.actionHandler = {};
          this.comObj.removeEventListener("message", this.msgHandler);
        };
        x.prototype.reset = function () {
          var l = this;
          this.isReset = !0;
          Object.keys(this.callbacksCapabilities).forEach(function (r) {
            l.cancelPromise(parseInt(r, 10));
          });
          this.clearActionHandlers();
          this.comObj.reset && this.comObj.reset();
          this.comObj = {};
          this.callbacksCapabilities = {};
        };
        x.prototype.replace = function (l, r, c) {
          this.actionHandler[l] = [r, c];
        };
        x.prototype.onAsync = function (l, r, c) {
          var m = this.actionHandlerAsync;
          m[l] &&
            Object(p.c)(
              'There is already an actionName called "'.concat(l, '"'),
            );
          m[l] = [r, c];
        };
        x.prototype.replaceAsync = function (l, r, c) {
          var m = this.actionHandlerAsync,
            f = this.actionHandler;
          f[l] && delete f[l];
          m[l] = [r, c];
        };
        x.prototype.onNextAsync = function (l) {
          this.nextAsync = l;
        };
        x.prototype.send = function (l, r) {
          this.postMessage({ action: l, data: r });
        };
        x.prototype.getNextId = function () {
          return this.callbackIndex++;
        };
        x.prototype.sendWithPromise = function (l, r, c) {
          var m = this.getNextId();
          l = { action: l, data: r, callbackId: m, priority: c };
          r = window.createPromiseCapability();
          if (!this.isReset) {
            this.callbacksCapabilities[m] = r;
            try {
              this.postMessage(l);
            } catch (f) {
              r.reject(f);
            }
          }
          return r.promise;
        };
        x.prototype.sendWithPromiseReturnId = function (l, r, c) {
          var m = this.getNextId();
          l = { action: l, data: r, callbackId: m, priority: c };
          r = window.createPromiseCapability();
          if (!this.isReset) {
            this.callbacksCapabilities[m] = r;
            try {
              this.postMessage(l);
            } catch (f) {
              r.reject(f);
            }
          }
          return { promise: r.promise, callbackId: m };
        };
        x.prototype.sendWithPromiseWithId = function (l, r, c) {
          r > this.callbackIndex &&
            Object(p.c)(
              "Can't reuse callbackId "
                .concat(r, " lesser than callbackIndex ")
                .concat(this.callbackIndex),
            );
          r in this.callbacksCapabilities &&
            Object(p.c)(
              "Can't reuse callbackId ".concat(
                r,
                ". There is a capability waiting to be resolved. ",
              ),
            );
          l = { action: l, data: c, callbackId: r };
          c = window.createPromiseCapability();
          if (!this.isReset) {
            this.callbacksCapabilities[r] = c;
            try {
              this.postMessage(l);
            } catch (m) {
              c.reject(m);
            }
          }
          return c.promise;
        };
        x.prototype.sendError = function (l, r) {
          if (l.message || l.errorData) {
            l.message && l.message.message && (l.message = l.message.message);
            var c = l.errorData;
            l = {
              type: l.type ? l.type : "JavascriptError",
              message: l.message,
            };
            c &&
              Object.keys(c).forEach(function (m) {
                c.hasOwnProperty(m) && (l[m] = c[m]);
              });
          }
          this.postMessage({ isReply: !0, callbackId: r, error: l });
        };
        x.prototype.getPromise = function (l) {
          if (l in this.callbacksCapabilities)
            return this.callbacksCapabilities[l];
          Object(p.c)("Cannot get promise for callback ".concat(l));
        };
        x.prototype.cancelPromise = function (l) {
          if (l in this.callbacksCapabilities) {
            var r = this.callbacksCapabilities[l];
            delete this.callbacksCapabilities[l];
            this.pdfnetActiveCommands.has(l) &&
              this.pdfnetActiveCommands.delete(l);
            r.reject({
              type: "Cancelled",
              message: "Request has been cancelled.",
            });
            this.postMessage({
              action: "actionCancel",
              data: { callbackId: l },
            });
          } else Object(p.b)("Cannot cancel callback ".concat(l));
        };
        x.prototype.postMessage = function (l) {
          "officeeditor" !== this.name &&
            Object(n.a)("enableWorkerLogs") &&
            Object(p.d)(
              "PDFWorker",
              "".concat(performance.now(), " Sent ").concat(JSON.stringify(l)),
            );
          if (this.postMessageTransfers) {
            var r = this.getTransfersArray(l);
            this.comObj.postMessage(l, r);
          } else this.comObj.postMessage(l);
        };
        x.prototype.getObjectTransfers = function (l, r) {
          var c = this;
          null !== l &&
            "object" === typeof l &&
            (l instanceof Uint8Array
              ? r.push(l.buffer)
              : l instanceof ArrayBuffer
                ? r.push(l)
                : Object.keys(l).forEach(function (m) {
                    l.hasOwnProperty(m) && c.getObjectTransfers(l[m], r);
                  }));
        };
        x.prototype.getTransfersArray = function (l) {
          var r = [];
          this.getObjectTransfers(l, r);
          return 0 === r.length ? void 0 : r;
        };
        x.prototype.handleMessage = function (l) {
          var r = this,
            c = l.data;
          "officeeditor" !== this.name &&
            Object(n.a)("enableWorkerLogs") &&
            Object(p.d)(
              "PDFWorker",
              ""
                .concat(performance.now(), " Received ")
                .concat(JSON.stringify(c)),
            );
          var m = this.actionHandler,
            f = this.actionHandlerAsync;
          l = this.callbacksCapabilities;
          var k = this.pdfnetActiveCommands;
          if (c.isReply)
            ((m = c.callbackId),
              m in l
                ? ((f = l[m]),
                  delete l[m],
                  k.has(m) && k.delete(m),
                  "error" in c ? f.reject(c.error) : f.resolve(c.data))
                : Object(p.a)("Cannot resolve callback ".concat(m)));
          else if (c.action in m) {
            var h = m[c.action];
            c.callbackId
              ? Promise.resolve()
                  .then(function () {
                    return h[0].call(h[1], c.data);
                  })
                  .then(
                    function (t) {
                      r.postMessage({
                        isReply: !0,
                        callbackId: c.callbackId,
                        data: t,
                      });
                    },
                    function (t) {
                      r.sendError(t, c.callbackId);
                    },
                  )
              : h[0].call(h[1], c.data);
          } else
            c.action in f
              ? ((h = f[c.action]),
                c.callbackId
                  ? h[0].call(h[1], c).then(
                      function (t) {
                        r.postMessage({
                          isReply: !0,
                          callbackId: c.callbackId,
                          data: t,
                        });
                        r.nextAsync();
                      },
                      function (t) {
                        r.sendError(t, c.callbackId);
                        r.nextAsync();
                      },
                    )
                  : h[0].call(h[1], c).then(
                      function () {
                        r.nextAsync();
                      },
                      function () {
                        r.nextAsync();
                      },
                    ))
              : Object(p.c)("Unknown action from worker: ".concat(c.action));
        };
        return x;
      })();
      A.a = v;
    },
    function (v, A, u) {
      u.d(A, "a", function () {
        return c;
      });
      var p = u(3),
        n = u(11),
        x = u(7),
        l = u(8),
        r = (function () {
          function m(f) {
            var k = this;
            this.promise = f.then(function (h) {
              k.response = h;
              k.status = 200;
            });
          }
          m.prototype.addEventListener = function (f, k) {
            this.promise.then(k);
          };
          return m;
        })(),
        c = function (m, f, k, h) {
          if (Object(x.a)() && !k) {
            self.Module.instantiateWasm = function (q, g) {
              return Object(n.a)(
                "".concat(m, "Wasm.wasm"),
                q,
                f["Wasm.wasm"],
                h,
              ).then(function (z) {
                g(z.instance);
              });
            };
            if (f.disableObjectURLBlobs) {
              importScripts("".concat(m, "Wasm.js"));
              return;
            }
            k = Object(p.b)(
              "".concat(m, "Wasm.js.mem"),
              f["Wasm.js.mem"],
              !1,
              !1,
            );
          } else {
            if (f.disableObjectURLBlobs) {
              importScripts(
                "".concat(
                  (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + m,
                  ".js",
                ),
              );
              return;
            }
            k = Object(p.b)(
              "".concat(
                (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + m,
                ".js.mem",
              ),
              f[".js.mem"],
              !1,
            );
            var t = Object(p.b)(
              "".concat(
                (self.Module.memoryInitializerPrefixURL
                  ? self.Module.memoryInitializerPrefixURL
                  : "") + m,
                ".mem",
              ),
              f[".mem"],
              !0,
              !0,
            );
            self.Module.memoryInitializerRequest = new r(t);
          }
          k = new Blob([k], { type: "application/javascript" });
          importScripts(Object(l.a)(URL.createObjectURL(k)));
        };
    },
    function (v, A, u) {
      u.d(A, "a", function () {
        return p;
      });
      var p = "optimized/";
    },
    function (v, A, u) {
      v.exports = u(22);
    },
    function (v, A, u) {
      u.r(A);
      u(7);
      v = u(15);
      u(23);
      u(24);
      u(27);
      u(28);
      u(29);
      u(30);
      u(31);
      Object(v.a)();
    },
    function (v, A, u) {
      (function (p) {
        "undefined" === typeof p.crypto &&
          (p.crypto = {
            getRandomValues: function (n) {
              for (var x = 0; x < n.length; x++) n[x] = 256 * Math.random();
            },
          });
      })("undefined" === typeof window ? self : window);
    },
    function (v, A, u) {
      (function (p, n) {
        function x(l) {
          "@babel/helpers - typeof";
          return (
            (x =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (r) {
                    return typeof r;
                  }
                : function (r) {
                    return r &&
                      "function" == typeof Symbol &&
                      r.constructor === Symbol &&
                      r !== Symbol.prototype
                      ? "symbol"
                      : typeof r;
                  }),
            x(l)
          );
        }
        (function (l) {
          function r() {
            for (var y = 0; y < w.length; y++) w[y][0](w[y][1]);
            w = [];
            C = !1;
          }
          function c(y, E) {
            w.push([y, E]);
            C || ((C = !0), e(r, 0));
          }
          function m(y, E) {
            function L(Q) {
              h(E, Q);
            }
            function N(Q) {
              q(E, Q);
            }
            try {
              y(L, N);
            } catch (Q) {
              N(Q);
            }
          }
          function f(y) {
            var E = y.owner,
              L = E.state_;
            E = E.data_;
            var N = y[L];
            y = y.then;
            if ("function" === typeof N) {
              L = a;
              try {
                E = N(E);
              } catch (Q) {
                q(y, Q);
              }
            }
            k(y, E) || (L === a && h(y, E), L === b && q(y, E));
          }
          function k(y, E) {
            var L;
            try {
              if (y === E)
                throw new TypeError(
                  "A promises callback cannot return that same promise.",
                );
              if (E && ("function" === typeof E || "object" === x(E))) {
                var N = E.then;
                if ("function" === typeof N)
                  return (
                    N.call(
                      E,
                      function (Q) {
                        L || ((L = !0), E !== Q ? h(y, Q) : t(y, Q));
                      },
                      function (Q) {
                        L || ((L = !0), q(y, Q));
                      },
                    ),
                    !0
                  );
              }
            } catch (Q) {
              return (L || q(y, Q), !0);
            }
            return !1;
          }
          function h(y, E) {
            (y !== E && k(y, E)) || t(y, E);
          }
          function t(y, E) {
            y.state_ === J && ((y.state_ = F), (y.data_ = E), c(z, y));
          }
          function q(y, E) {
            y.state_ === J && ((y.state_ = F), (y.data_ = E), c(G, y));
          }
          function g(y) {
            var E = y.then_;
            y.then_ = void 0;
            for (y = 0; y < E.length; y++) f(E[y]);
          }
          function z(y) {
            y.state_ = a;
            g(y);
          }
          function G(y) {
            y.state_ = b;
            g(y);
          }
          function D(y) {
            if ("function" !== typeof y)
              throw new TypeError(
                "Promise constructor takes a function argument",
              );
            if (!(this instanceof D))
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
              );
            this.then_ = [];
            m(y, this);
          }
          l.createPromiseCapability = function () {
            var y = {};
            y.promise = new D(function (E, L) {
              y.resolve = E;
              y.reject = L;
            });
            return y;
          };
          var H = l.Promise,
            I =
              H &&
              "resolve" in H &&
              "reject" in H &&
              "all" in H &&
              "race" in H &&
              (function () {
                var y;
                new H(function (E) {
                  y = E;
                });
                return "function" === typeof y;
              })();
          "undefined" !== typeof exports && exports
            ? ((exports.Promise = I ? H : D), (exports.Polyfill = D))
            : "function" === typeof define && u(26)
              ? define(function () {
                  return I ? H : D;
                })
              : I || (l.Promise = D);
          var J = "pending",
            F = "sealed",
            a = "fulfilled",
            b = "rejected",
            d = function () {},
            e = "undefined" !== typeof n ? n : setTimeout,
            w = [],
            C;
          D.prototype = {
            constructor: D,
            state_: J,
            then_: null,
            data_: void 0,
            then: function (y, E) {
              y = {
                owner: this,
                then: new this.constructor(d),
                fulfilled: y,
                rejected: E,
              };
              this.state_ === a || this.state_ === b
                ? c(f, y)
                : this.then_.push(y);
              return y.then;
            },
            catch: function (y) {
              return this.then(null, y);
            },
          };
          D.all = function (y) {
            if ("[object Array]" !== Object.prototype.toString.call(y))
              throw new TypeError("You must pass an array to Promise.all().");
            return new this(function (E, L) {
              function N(la) {
                V++;
                return function (fa) {
                  Q[la] = fa;
                  --V || E(Q);
                };
              }
              for (var Q = [], V = 0, X = 0, ja; X < y.length; X++)
                (ja = y[X]) && "function" === typeof ja.then
                  ? ja.then(N(X), L)
                  : (Q[X] = ja);
              V || E(Q);
            });
          };
          D.race = function (y) {
            if ("[object Array]" !== Object.prototype.toString.call(y))
              throw new TypeError("You must pass an array to Promise.race().");
            return new this(function (E, L) {
              for (var N = 0, Q; N < y.length; N++)
                (Q = y[N]) && "function" === typeof Q.then
                  ? Q.then(E, L)
                  : E(Q);
            });
          };
          D.resolve = function (y) {
            return y && "object" === x(y) && y.constructor === this
              ? y
              : new this(function (E) {
                  E(y);
                });
          };
          D.reject = function (y) {
            return new this(function (E, L) {
              L(y);
            });
          };
        })(
          "undefined" !== typeof window
            ? window
            : "undefined" !== typeof p
              ? p
              : "undefined" !== typeof self
                ? self
                : void 0,
        );
      }).call(this, u(12), u(10).setImmediate);
    },
    function (v, A, u) {
      (function (p, n) {
        (function (x, l) {
          function r(J) {
            delete z[J];
          }
          function c(J) {
            if (G) setTimeout(c, 0, J);
            else {
              var F = z[J];
              if (F) {
                G = !0;
                try {
                  var a = F.callback,
                    b = F.args;
                  switch (b.length) {
                    case 0:
                      a();
                      break;
                    case 1:
                      a(b[0]);
                      break;
                    case 2:
                      a(b[0], b[1]);
                      break;
                    case 3:
                      a(b[0], b[1], b[2]);
                      break;
                    default:
                      a.apply(l, b);
                  }
                } finally {
                  (r(J), (G = !1));
                }
              }
            }
          }
          function m() {
            H = function (J) {
              n.nextTick(function () {
                c(J);
              });
            };
          }
          function f() {
            if (x.postMessage && !x.importScripts) {
              var J = !0,
                F = x.onmessage;
              x.onmessage = function () {
                J = !1;
              };
              x.postMessage("", "*");
              x.onmessage = F;
              return J;
            }
          }
          function k() {
            var J = "setImmediate$" + Math.random() + "$",
              F = function (a) {
                a.source === x &&
                  "string" === typeof a.data &&
                  0 === a.data.indexOf(J) &&
                  c(+a.data.slice(J.length));
              };
            x.addEventListener
              ? x.addEventListener("message", F, !1)
              : x.attachEvent("onmessage", F);
            H = function (a) {
              x.postMessage(J + a, "*");
            };
          }
          function h() {
            var J = new MessageChannel();
            J.port1.onmessage = function (F) {
              c(F.data);
            };
            H = function (F) {
              J.port2.postMessage(F);
            };
          }
          function t() {
            var J = D.documentElement;
            H = function (F) {
              var a = D.createElement("script");
              a.onreadystatechange = function () {
                c(F);
                a.onreadystatechange = null;
                J.removeChild(a);
                a = null;
              };
              J.appendChild(a);
            };
          }
          function q() {
            H = function (J) {
              setTimeout(c, 0, J);
            };
          }
          if (!x.setImmediate) {
            var g = 1,
              z = {},
              G = !1,
              D = x.document,
              H,
              I = Object.getPrototypeOf && Object.getPrototypeOf(x);
            I = I && I.setTimeout ? I : x;
            "[object process]" === {}.toString.call(x.process)
              ? m()
              : f()
                ? k()
                : x.MessageChannel
                  ? h()
                  : D && "onreadystatechange" in D.createElement("script")
                    ? t()
                    : q();
            I.setImmediate = function (J) {
              "function" !== typeof J && (J = new Function("" + J));
              for (
                var F = Array(arguments.length - 1), a = 0;
                a < F.length;
                a++
              )
                F[a] = arguments[a + 1];
              z[g] = { callback: J, args: F };
              H(g);
              return g++;
            };
            I.clearImmediate = r;
          }
        })(
          "undefined" === typeof self
            ? "undefined" === typeof p
              ? this
              : p
            : self,
        );
      }).call(this, u(12), u(14));
    },
    function (v, A) {
      v.exports = {};
    },
    function (v, A, u) {
      (function (p) {
        var n = function (x, l) {
          var r = function (m) {
              m = this["catch"](m);
              return {
                cancel: l,
                promise: m,
                then: c.bind(m),
                catch: r.bind(m),
              };
            },
            c = function (m, f) {
              m = this.then(m, f);
              return {
                cancel: l,
                promise: m,
                then: c.bind(m),
                catch: r.bind(m),
              };
            };
          return { cancel: l, promise: x, then: c.bind(x), catch: r.bind(x) };
        };
        p.CancellablePromise = function (x, l) {
          var r = !1,
            c,
            m = new Promise(function (f, k) {
              c = function () {
                r || (l(), k("cancelled"));
              };
              new Promise(x).then(
                function (h) {
                  r = !0;
                  f(h);
                },
                function (h) {
                  r = !0;
                  k(h);
                },
              );
            });
          return n(m, c);
        };
        p.CancellablePromise.all = function (x) {
          var l = Promise.all(x);
          return n(l, function () {
            x.forEach(function (r) {
              r.cancel && r.cancel();
            });
          });
        };
      })("undefined" === typeof self ? void 0 : self);
    },
    function (v, A, u) {
      (function (p, n) {
        function x(m) {
          "@babel/helpers - typeof";
          return (
            (x =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (f) {
                    return typeof f;
                  }
                : function (f) {
                    return f &&
                      "function" == typeof Symbol &&
                      f.constructor === Symbol &&
                      f !== Symbol.prototype
                      ? "symbol"
                      : typeof f;
                  }),
            x(m)
          );
        }
        function l(m, f) {
          var k = Object.keys(m);
          if (Object.getOwnPropertySymbols) {
            var h = Object.getOwnPropertySymbols(m);
            f &&
              (h = h.filter(function (t) {
                return Object.getOwnPropertyDescriptor(m, t).enumerable;
              }));
            k.push.apply(k, h);
          }
          return k;
        }
        function r(m) {
          for (var f = 1; f < arguments.length; f++) {
            var k = null != arguments[f] ? arguments[f] : {};
            f % 2
              ? l(Object(k), !0).forEach(function (h) {
                  var t,
                    q = k[h];
                  a: if ("object" == x(h) && h) {
                    var g = h[Symbol.toPrimitive];
                    if (void 0 !== g) {
                      h = g.call(h, "string");
                      if ("object" != x(h)) break a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    h = String(h);
                  }
                  (t = "symbol" == x(h) ? h : h + "") in m
                    ? Object.defineProperty(m, t, {
                        value: q,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (m[t] = q);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    m,
                    Object.getOwnPropertyDescriptors(k),
                  )
                : l(Object(k)).forEach(function (h) {
                    Object.defineProperty(
                      m,
                      h,
                      Object.getOwnPropertyDescriptor(k, h),
                    );
                  });
          }
          return m;
        }
        var c = u(1);
        (function (m) {
          m.Module = {
            INITIAL_MEMORY: 50331648,
            noExitRuntime: !0,
            devicePixelRatio: 1,
            cur_doc: null,
            cachePtrSize: 0,
            hasBufOwnership: !0,
            loaded: !1,
            initCb: null,
            cachePtr: null,
            cleanupState: null,
            docs: {},
            postEvent: function (f, k, h) {
              Module.workerMessageHandler.send("event", {
                docId: f,
                type: k,
                data: h,
              });
            },
            postProgressiveRenderingStartEvent: function (f, k) {
              Module.postEvent(f, "progressiveRenderingStart", { pageNum: k });
            },
            postPagesUpdatedEvent: function (f, k, h, t) {
              f = { pageDimensions: Module.GetPageDimensions(f) };
              if (h)
                for (var q = 0; q < h.length; ++q)
                  h[q] in f.pageDimensions
                    ? ((f.pageDimensions[h[q]].contentChanged = !0),
                      t && (f.pageDimensions[h[q]].annotationsUnchanged = !0))
                    : console.warn("Invalid Page Number ".concat(h[q]));
              Module.postEvent(k, "pagesUpdated", f);
              return f;
            },
            postPagesRenamedEvent: function (f, k) {
              var h = {};
              f = Module.PDFDocGetPageIterator(f, 1);
              for (var t = 1; Module.IteratorHasNext(f); ++t) {
                var q = Module.stackSave(),
                  g = Module.IteratorCurrent(f);
                h[t] = Module.PageGetId(g);
                Module.IteratorNext(f);
                Module.stackRestore(q);
              }
              Module.postEvent(k, "pagesRenamed", { pageNumToId: h });
            },
            GetAnnotationObjs: function (f) {
              var k = [],
                h = 1;
              for (
                f = Module.PDFDocGetPageIterator(f, 1);
                Module.IteratorHasNext(f);
                Module.IteratorNext(f)
              ) {
                for (
                  var t = Module.PageGetNumAnnots(Module.IteratorCurrent(f)),
                    q = 0;
                  q < t;
                  ++q
                ) {
                  var g = Module.PageGetAnnot(Module.IteratorCurrent(f), q);
                  g = Module.AnnotGetSDFObjNum(g);
                  k.push(g);
                }
                h++;
              }
              return k;
            },
            GetLinearizedSaveReferenceChanges: function (f, k) {
              var h = [],
                t = 0,
                q = 1;
              for (
                f = Module.PDFDocGetPageIterator(f, 1);
                Module.IteratorHasNext(f);
                Module.IteratorNext(f)
              )
                for (
                  var g = Module.PageGetNumAnnots(Module.IteratorCurrent(f)),
                    z = 0;
                  z < g;
                  ++z
                ) {
                  var G = Module.PageGetAnnot(Module.IteratorCurrent(f), z),
                    D = Module.AnnotGetSDFObjNum(G);
                  D != k[t] &&
                    ((G = Module.AnnotGetSDFObjGen(G)),
                    h.push({
                      oldObjNum: k[t],
                      discardAppearance: !1,
                      newObjNum: D,
                      genNum: G,
                      pageNum: q,
                    }));
                  ++t;
                  ++q;
                }
              t != k.length &&
                console.warn(
                  "Annotation count has changed, cannot sync all the new obj numbers.",
                );
              return h;
            },
            GetIndividualPageDimensions: function (f, k, h) {
              f = Module.PageGetPageInfo(h);
              f.id = Module.PageGetId(h);
              return f;
            },
            GetPageDimensionsRange: function (f, k, h) {
              for (
                var t = {}, q = Module.PDFDocGetPageIterator(f, k);
                k < h && Module.IteratorHasNext(q);
                ++k
              ) {
                var g = Module.stackSave(),
                  z = Module.IteratorCurrent(q);
                t[k] = this.GetIndividualPageDimensions(f, k, z);
                Module.IteratorNext(q);
                Module.stackRestore(g);
              }
              return t;
            },
            GetPageDimensionsContentChangedList: function (f, k) {
              k.sort(function (H, I) {
                return H - I;
              });
              for (
                var h = {},
                  t = k[0],
                  q = k[k.length - 1],
                  g = 0,
                  z = Module.PDFDocGetPageIterator(f, t);
                t <= q && Module.IteratorHasNext(z);
                ++t
              ) {
                if (k[g] == t) {
                  for (++g; k[g] == t; ) ++g;
                  var G = Module.stackSave(),
                    D = Module.IteratorCurrent(z);
                  D = this.GetIndividualPageDimensions(f, t, D);
                  D.contentChanged = !0;
                  h[t] = D;
                  Module.stackRestore(G);
                }
                Module.IteratorNext(z);
              }
              return h;
            },
            GetPageDimensions: function (f) {
              try {
                var k = Module.stackSave();
                var h = Module.GetPageCount(f);
                if (0 === h) throw "This document has no pages.";
                return Module.GetPageDimensionsRange(f, 1, h + 1);
              } finally {
                Module.stackRestore(k);
              }
            },
            loadDoc: function (f, k) {
              "undefined" === typeof Module && this._main();
              var h = null;
              try {
                var t = Module.stackSave();
                f.customHandlerId &&
                  Module._TRN_PDFNetAddPDFTronCustomHandler(f.customHandlerId);
                k = Module.CreateDoc(f, k);
                var q = Module.GetDoc(k);
                if (Module.PDFDocInitSecurityHandler(q))
                  return {
                    docId: k,
                    pageDimensions: Module.GetPageDimensions(q),
                  };
                h = {
                  type: "NeedsPassword",
                  errorData: { docId: k },
                  message: "This document requires a password",
                };
              } catch (g) {
                h = { type: "InvalidPDF", message: g };
              } finally {
                Module.stackRestore(t);
              }
              throw h;
            },
            loadCanvas: function (f, k, h, t, q, g, z, G) {
              var D = Module.GetDoc(f),
                H = Module.docs[f].chunkStorage,
                I = Promise.resolve();
              if (H && 2 === G.overprintMode) {
                var J = Module.GetDownloadData(D);
                if (!J.docInfoRequested) {
                  var F = Module.allocate(4, "i8", Module.ALLOC_STACK);
                  REX(Module._TRN_DownloaderPrefetchDocInfo(J.downloader, F));
                  0 == Module.getValue(F, "i8") &&
                    (I = J.docInfoPromiseCapability.promise);
                  J.docInfoRequested = !0;
                }
              }
              return new Promise(function (a, b) {
                var d = k + 1,
                  e = function () {
                    a(
                      I.then(function () {
                        return Module.RasterizePage(D, d, h, t, g, q, z, G, f);
                      }),
                    );
                  };
                if (H) {
                  var w = Module.GetDownloadData(D).downloader,
                    C = H.getRequiredChunkOffsetArrays(w, d);
                  H.keepChunks(C.have);
                  w = function () {
                    var y = H.getChunks(C.missing);
                    Module.loadPromise = y
                      .then(function () {
                        var E = Module.loadPromise.cancelled;
                        Module.loadPromise = null;
                        E || e();
                      })
                      ["catch"](function (E) {
                        "cancelled" !== E ? b(E) : (Module.loadPromise = null);
                      });
                  };
                  Module.loadPromise ? Module.loadPromise.then(w, w) : w();
                } else e();
              });
            },
            loadResources: function (f, k) {
              Module.Initialize(k);
              Object(c.b)("worker", "PDFNet initialized!");
              Module._TRN_PDFNetSetDefaultDiskCachingEnabled(!1);
              f = new Uint8Array(f);
              Module.PDFNetSetResourceData(f);
            },
            onRuntimeInitialized: function () {
              "undefined" === typeof Module &&
                (("undefined" !== typeof window ? window : self).Module = {});
              (function (f) {
                f.PDFDocExportXFDF = function (k, h) {
                  k = Module.GetDoc(k);
                  var t = Module.stackSave();
                  try {
                    var q = h
                      ? Module.PDFDocFDFExtract(k, h)
                      : Module.PDFDocFDFExtract(k);
                    var g = Module.FDFDocSaveAsXFDF(q);
                    Module.stackRestore(t);
                  } catch (z) {
                    throw (Module.stackRestore(t), z);
                  }
                  return g;
                };
                f.PageArrayToPageSet = function (k) {
                  var h = Module.stackSave();
                  try {
                    var t = Module.PageSetCreate();
                    for (var q = 0; q < k.length; ++q)
                      Module.PageSetAddPage(t, k[q]);
                    Module.stackRestore(h);
                  } catch (g) {
                    throw (Module.stackRestore(h), g);
                  }
                  return t;
                };
                f.cancelCurrent = function () {
                  var k = Module.loadPromise;
                  return k
                    ? (k.cancel(), (k.cancelled = !0))
                    : (k = Module.cleanupState)
                      ? (p(k.timeout),
                        k.cleanupArr.reverse().forEach(function (h) {
                          h();
                        }),
                        (Module.cleanupState = null),
                        !0)
                      : !1;
                };
                f.SetWorkerRestartCallback = function (k) {
                  Module.workerRestartCallback = k;
                };
                f.XFDFMerge = function (k, h, t) {
                  if (h) {
                    var q = Module.GetDoc(k),
                      g = [];
                    try {
                      Object(c.b)(
                        "worker",
                        "Merge XFDF of length ".concat(h.length),
                      );
                      var z = Module.GetUStringFromJSString(h, !0);
                      g.push(function () {
                        Module.UStringDestroy(z);
                      });
                      var G = Module.allocate(4, "i8", Module.ALLOC_STACK);
                      REX(Module._TRN_FDFDocCreateFromXFDF(z, G));
                      var D = Module.getValue(G, "i8*");
                      g.push(function () {
                        Module.FDFDocDestroy(D);
                      });
                      var H = Module.PDFDocFDFUpdate(q, D, t);
                      H &&
                        H.length &&
                        Module.postEvent(k, "apRefChanged", {
                          apRefChanges: H,
                        });
                    } finally {
                      g.reverse().forEach(function (I) {
                        I();
                      });
                    }
                  }
                };
                f.MergeXFDF = function (k, h, t) {
                  return new Promise(function (q, g) {
                    var z = [];
                    try {
                      var G = Module.stackSave();
                      z[z.length] = function () {
                        Module.stackRestore(G);
                      };
                      Module.XFDFMerge(k, h, t);
                      z.forEach(function (D) {
                        D();
                      });
                      q({});
                    } catch (D) {
                      (z.forEach(function (H) {
                        H();
                      }),
                        g(D));
                    }
                  });
                };
                f.CreateBufferFile = function (k, h, t) {
                  Module.MakeDev(k);
                  var q = new ArrayBuffer(h);
                  q = new Uint8Array(q);
                  t = t ? 0 : 255;
                  for (var g = 0; g < h; ++g) q[g] = t;
                  Module.docs[k] = { buffer: q };
                };
                f.ReadBufferFile = function (k, h) {
                  var t = Module.docs[k].buffer;
                  h &&
                    (Module.docs[k].buffer = new Uint8Array(t.buffer.slice(0)));
                  return t;
                };
                f.RemoveBufferFile = function (k) {
                  Module.docs[k] = null;
                };
                f.SaveHelper = function (k, h, t) {
                  t = "undefined" === typeof t ? 2 : t;
                  Module.MakeDev(h);
                  var q = [];
                  t & 16 && (q = Module.GetAnnotationObjs(k));
                  var g = Module._TRN_PDFDocSave(
                    k,
                    Module.GetUStringFromJSString(h),
                    t,
                  );
                  Module.docs[h].sink = null;
                  REX(g);
                  t & 16 &&
                    (Module.postPagesRenamedEvent(k, h),
                    0 < q.length &&
                      ((k = Module.GetLinearizedSaveReferenceChanges(k, q)),
                      0 < k.length &&
                        Module.postEvent(h, "apRefChanged", {
                          apRefChanges: k,
                        })));
                  return Module.docs[h].buffer.buffer;
                };
                f.SaveDoc = function (k, h, t, q, g, z, G, D, H) {
                  return new Promise(function (I, J) {
                    var F = [];
                    try {
                      var a = Module.GetDoc(k),
                        b = Module.stackSave();
                      F[F.length] = function () {
                        Module.stackRestore(b);
                      };
                      Module.XFDFMerge(k, h, G);
                      var d = Module.allocate(8, "i8", Module.ALLOC_STACK),
                        e = Module.allocate(
                          Module.intArrayFromString(
                            '{"UseNonStandardRotation": true}',
                          ),
                          "i8",
                          Module.ALLOC_STACK,
                        );
                      Module.setValue(d, e, "i8*");
                      Module.setValue(d + 4, 0, "i32");
                      Module._TRN_PDFDocRefreshAnnotAppearances(a, d);
                      if (z) {
                        d = function (aa) {
                          aa = new Uint8Array(aa);
                          m.FS.writeFile("watermarkFile", aa);
                          aa = Module.ImageCreateFromFile(
                            a,
                            Module.GetUStringFromJSString("watermarkFile"),
                          );
                          m.FS.unlink("watermarkFile");
                          return aa;
                        };
                        var w = Module.ElementBuilderCreate();
                        F.push(function () {
                          Module.ElementBuilderDestroy(w);
                        });
                        var C = Module.ElementWriterCreate();
                        F.push(function () {
                          Module.ElementWriterDestroy(C);
                        });
                        try {
                          if (!z.hasOwnProperty("default"))
                            throw Error(
                              "Watermark dictionary has no 'default' key!",
                            );
                          var y = d(z["default"]),
                            E = Module.PDFDocGetPageIterator(a, 1);
                          for (e = -1; Module.IteratorHasNext(E); ) {
                            var L = Module.IteratorCurrent(E);
                            Module.IteratorNext(E);
                            e++;
                            var N = e.toString();
                            try {
                              var Q = void 0;
                              if (z.hasOwnProperty(N)) {
                                var V = z[N];
                                if (V) Q = d(V);
                                else continue;
                              } else Q = y;
                              var X = Module.PageGetPageInfo(L),
                                ja = Module.ElementBuilderCreateImage(
                                  w,
                                  Q,
                                  0,
                                  0,
                                  X.width,
                                  X.height,
                                );
                              Module.ElementWriterBegin(C, L);
                              Module.ElementWriterWritePlacedElement(C, ja);
                              Module.ElementWriterEnd(C);
                            } catch (aa) {
                              console.warn(
                                "Watermark for page " +
                                  N +
                                  "can not be added due to error: " +
                                  aa,
                              );
                            }
                          }
                        } catch (aa) {
                          console.warn(
                            "Watermarks can not be added due to error: " + aa,
                          );
                        }
                      }
                      if (D) {
                        var la = Module.SecurityHandlerCreate(H);
                        la &&
                          (Module.SecurityHandlerChangeUserPasswordUString(
                            la,
                            D,
                          ),
                          Module.PDFDocSetSecurityHandler(a, la));
                      }
                      y = 0;
                      if (q) {
                        var fa = Module.PDFDocGetRoot(a);
                        (y = Module.ObjFindObj(fa, "OpenAction")) &&
                          Module.ObjPut(fa, "__OpenActionBackup__", y);
                        var na = Module.ObjPutDict(fa, "OpenAction");
                        Module.ObjPutName(na, "Type", "Action");
                        Module.ObjPutName(na, "S", "JavaScript");
                        Module.ObjPutString(na, "JS", "this.print()");
                      }
                      var ra = Module.SaveHelper(a, k, g);
                      q &&
                        (y
                          ? Module.ObjPut(
                              fa,
                              "OpenAction",
                              Module.ObjFindObj(fa, "__OpenActionBackup__"),
                            )
                          : Module.ObjErase(fa, "OpenAction"));
                      F.reverse().forEach(function (aa) {
                        aa();
                      });
                      if (t) I({ fileData: ra });
                      else {
                        var pa = ra.slice(0);
                        I({ fileData: pa });
                      }
                    } catch (aa) {
                      (F.reverse().forEach(function (qa) {
                        qa();
                      }),
                        J(aa));
                    }
                  });
                };
                f.SaveDocFromFixedElements = function (k, h, t, q, g, z) {
                  k = Module.PDFDocCreateFromLayoutEls(k);
                  k = Module.CreateDoc({ type: "ptr", value: k });
                  return Module.SaveDoc(k, h, !0, !1, t, q, g, z);
                };
                f.GetCurrentCanvasData = function (k) {
                  var h = Module.currentRenderData;
                  if (!h) return null;
                  k && REX(Module._TRN_PDFRasterizerUpdateBuffer(h.rast));
                  var t = Date.now();
                  if (h.bufPtr) {
                    k = new Uint8Array(new ArrayBuffer(h.buf_size));
                    for (var q = 0, g = 0; g < h.out_height; ++g)
                      for (
                        var z = h.bufPtr + h.stride * g, G = 0;
                        G < h.out_width;
                        ++G
                      )
                        ((k[q++] = Module.HEAPU8[z + 2]),
                          (k[q++] = Module.HEAPU8[z + 1]),
                          (k[q++] = Module.HEAPU8[z]),
                          (k[q++] = Module.HEAPU8[z + 3]),
                          (z += 4));
                  } else k = Module.ReadBufferFile("b", k);
                  Object(c.b)(
                    "bufferTiming",
                    "Copy took ".concat(Date.now() - t),
                  );
                  return {
                    pageBuf: k.buffer,
                    pageWidth: h.out_width,
                    pageHeight: h.out_height,
                  };
                };
                f.RasterizePage = function (k, h, t, q, g, z, G, D, H) {
                  return new Promise(function (I, J) {
                    Module.currentRenderData = {};
                    var F = Module.currentRenderData;
                    F.out_width = parseInt(t, 10);
                    F.out_height = parseInt(q, 10);
                    var a = [];
                    a.push(function () {
                      Module.currentRenderData = null;
                    });
                    try {
                      var b = Module.stackSave();
                      a[a.length] = function () {
                        Module.stackRestore(b);
                      };
                      var d = Module.GetPage(k, h),
                        e = Module.PageGetPageWidth(d),
                        w = Module.PageGetPageHeight(d);
                      F.stride = 4 * F.out_width;
                      F.buf_size = F.out_width * F.out_height * 4;
                      Object(c.b)("Memory", "Created rasterizer");
                      F.rast = Module.PDFRasterizerCreate();
                      a.push(function () {
                        Object(c.b)("Memory", "Destroyed rasterizer");
                        Module._TRN_PDFRasterizerDestroy(F.rast);
                      });
                      if (G) {
                        var C = Module.EMSCreateUpdatedLayersContext(k, G);
                        0 !== C &&
                          (REX(
                            Module._TRN_PDFRasterizerSetOCGContext(F.rast, C),
                          ),
                          a.push(function () {
                            Module._TRN_OCGContextDestroy(C);
                          }));
                      }
                      var y = !1;
                      D.hasOwnProperty("renderAnnots")
                        ? (D.renderAnnots && (y = !0),
                          REX(
                            Module._TRN_PDFRasterizerSetDrawAnnotations(
                              F.rast,
                              D.renderAnnots ? 1 : 0,
                            ),
                          ))
                        : REX(
                            Module._TRN_PDFRasterizerSetDrawAnnotations(
                              F.rast,
                              0,
                            ),
                          );
                      D.hasOwnProperty("highlightFields") &&
                        (D.highlightFields && (y = !0),
                        REX(
                          Module._TRN_PDFRasterizerSetHighlightFields(
                            F.rast,
                            D.highlightFields,
                          ),
                        ));
                      D.hasOwnProperty("antiAliasing") &&
                        REX(
                          Module._TRN_PDFRasterizerSetAntiAliasing(
                            F.rast,
                            D.antiAliasing,
                          ),
                        );
                      D.hasOwnProperty("pathHinting") &&
                        REX(
                          Module._TRN_PDFRasterizerSetPathHinting(
                            F.rast,
                            D.pathHinting,
                          ),
                        );
                      if (D.hasOwnProperty("thinLinePixelGridFit")) {
                        var E = !0;
                        D.hasOwnProperty("thinLineStrokeAdjust") &&
                          (E = D.thinLineStrokeAdjust);
                        REX(
                          Module._TRN_PDFRasterizerSetThinLineAdjustment(
                            F.rast,
                            D.thinLinePixelGridFit,
                            E,
                          ),
                        );
                      } else
                        D.hasOwnProperty("thinLineStrokeAdjust") &&
                          REX(
                            Module._TRN_PDFRasterizerSetThinLineAdjustment(
                              F.rast,
                              !1,
                              D.thinLineStrokeAdjust,
                            ),
                          );
                      D.hasOwnProperty("thinLineScaling") &&
                        REX(
                          Module._TRN_PDFRasterizerSetThinLineScaling(
                            F.rast,
                            D.thinLineScaling,
                          ),
                        );
                      if (
                        D.hasOwnProperty("nightModeTuningContrast") ||
                        D.hasOwnProperty("nightModeTuningSaturation") ||
                        D.hasOwnProperty("nightModeTuningFlipness")
                      ) {
                        var L = D.hasOwnProperty("nightModeTuningContrast")
                            ? D.nightModeTuningContrast
                            : 0.9,
                          N = D.hasOwnProperty("nightModeTuningSaturation")
                            ? D.nightModeTuningSaturation
                            : 0.8,
                          Q = D.hasOwnProperty("nightModeTuningFlipness")
                            ? D.nightModeTuningFlipness
                            : 1;
                        REX(
                          Module._TRN_PDFRasterizerSetNightModeTuning(
                            F.rast,
                            L,
                            N,
                            Q,
                          ),
                        );
                      }
                      D.hasOwnProperty("imageSmoothing")
                        ? ((E = !1),
                          D.hasOwnProperty("hqImageResampling") &&
                            (E = D.hqImageResampling),
                          REX(
                            Module._TRN_PDFRasterizerSetImageSmoothing(
                              F.rast,
                              D.imageSmoothing,
                              E,
                            ),
                          ))
                        : D.hasOwnProperty("hqImageResampling") &&
                          REX(
                            Module._TRN_PDFRasterizerSetImageSmoothing(
                              F.rast,
                              !0,
                              D.hqImageResampling,
                            ),
                          );
                      D.hasOwnProperty("caching") &&
                        REX(
                          Module._TRN_PDFRasterizerSetCaching(
                            F.rast,
                            D.caching,
                          ),
                        );
                      D.hasOwnProperty("expGamma") &&
                        REX(
                          Module._TRN_PDFRasterizerSetGamma(F.rast, D.expGamma),
                        );
                      D.hasOwnProperty("isPrinting") &&
                        (D.isPrinting && (y = !0),
                        REX(
                          Module._TRN_PDFRasterizerSetPrintMode(
                            F.rast,
                            D.isPrinting,
                          ),
                        ));
                      D.hasOwnProperty("colorPostProcessMode") &&
                        (D.colorPostProcessMode && (y = !0),
                        REX(
                          Module._TRN_PDFRasterizerSetColorPostProcessMode(
                            F.rast,
                            D.colorPostProcessMode,
                          ),
                        ));
                      var V = Module.PageGetRotation(d);
                      E = 1 === z || 3 === z;
                      V = (1 === V || 3 === V) !== E;
                      var X = Module.allocate(48, "i8", Module.ALLOC_STACK);
                      if (g) {
                        g.x1 = g[0];
                        g.y1 = g[1];
                        g.x2 = g[2];
                        g.y2 = g[3];
                        var ja = Module.PageGetDefaultMatrix(d, 0),
                          la = Module.Matrix2DInverse(ja);
                        g = Module.Matrix2DMultBBox(la, g);
                        if (g.x2 < g.x1) {
                          var fa = g.x1;
                          g.x1 = g.x2;
                          g.x2 = fa;
                        }
                        g.y2 < g.y1 &&
                          ((fa = g.y1), (g.y1 = g.y2), (g.y2 = fa));
                        var na = F.out_width / (V ? g.y2 - g.y1 : g.x2 - g.x1);
                        var ra = Module.GetDefaultMatrixBox(d, g, z);
                      } else
                        ((ra = Module.PageGetDefaultMatrix(d, z)),
                          (na = F.out_width / (E ? w : e)));
                      Module.Matrix2DSet(X, na, 0, 0, na, 0, 0);
                      Module.Matrix2DConcat(X, ra);
                      var pa = Module.allocate(4, "i8", Module.ALLOC_STACK),
                        aa = Module.allocate(4, "i8", Module.ALLOC_STACK);
                      y
                        ? ((F.bufPtr = Module._malloc(F.buf_size)),
                          Module._memset(
                            F.bufPtr,
                            D.pageTransparent ? 0 : 255,
                            F.buf_size,
                          ),
                          a.push(function () {
                            Module._free(F.bufPtr);
                          }))
                        : (Module.CreateBufferFile(
                            "b",
                            F.buf_size,
                            D.pageTransparent,
                          ),
                          a.push(function () {
                            Module.RemoveBufferFile("b");
                          }));
                      var qa = D.overprintMode;
                      if (10 === qa) {
                        REX(Module._TRN_PDFRasterizerSetOverprint(F.rast, 1));
                        var jb = Module.PDFRasterizerRasterizeSeparations(
                          F.rast,
                          d,
                          F.out_width,
                          F.out_height,
                          X,
                          0,
                          0,
                        );
                        I({
                          pageBuf: jb,
                          pageWidth: F.out_width,
                          pageHeight: F.out_height,
                        });
                      } else {
                        REX(Module._TRN_PDFRasterizerSetOverprint(F.rast, qa));
                        y
                          ? REX(
                              Module._TRN_PDFRasterizerGetChunkRenderer(
                                F.rast,
                                d,
                                F.bufPtr,
                                F.out_width,
                                F.out_height,
                                F.stride,
                                4,
                                !0,
                                X,
                                0,
                                0,
                                0,
                                pa,
                              ),
                            )
                          : REX(
                              Module._TRN_PDFRasterizerGetChunkRendererPath(
                                F.rast,
                                d,
                                Module.GetUStringFromJSString("b"),
                                F.out_width,
                                F.out_height,
                                !0,
                                X,
                                0,
                                0,
                                0,
                                pa,
                              ),
                            );
                        var Ra = Module.getValue(pa, "i8*");
                        a.push(function () {
                          REX(Module._TRN_ChunkRendererDestroy(Ra));
                        });
                      }
                      var kb = new Date().getTime(),
                        Sa = function () {
                          try {
                            if (
                              (REX(
                                Module._TRN_ChunkRendererRenderForTimePeriod(
                                  Ra,
                                  200,
                                  aa,
                                ),
                              ),
                              Module.getValue(aa, "i8"))
                            )
                              Module.cleanupState.timeout = n(Sa);
                            else {
                              var Ha = Module.GetCurrentCanvasData(!1);
                              Object(c.b)(
                                "worker",
                                "Total Page Time ".concat(
                                  new Date().getTime() - kb,
                                ),
                              );
                              a.reverse().forEach(function (ta) {
                                ta();
                              });
                              I(Ha);
                            }
                          } catch (ta) {
                            (a.reverse().forEach(function (Qa) {
                              Qa();
                            }),
                              J(ta));
                          }
                        };
                      D.useProgress &&
                        Module.postProgressiveRenderingStartEvent(H, h);
                      var Pa = n(Sa);
                      Module.cleanupState = { cleanupArr: a, timeout: Pa };
                      a.push(function () {
                        Module.cleanupState = null;
                      });
                    } catch (Ha) {
                      (a.reverse().forEach(function (ta) {
                        ta();
                      }),
                        J(Ha));
                    }
                  });
                };
                f.UpdatePassword = function (k, h) {
                  try {
                    var t = Module.stackSave();
                    var q = Module.GetDoc(k);
                    return Module.PDFDocInitStdSecurityHandler(q, h)
                      ? (q in downloadDataMap &&
                          REX(
                            Module._TRN_PDFDocDownloaderInitialize(
                              q,
                              downloadDataMap[q].downloader,
                            ),
                          ),
                        {
                          success: !0,
                          pageDimensions: Module.GetPageDimensions(q),
                        })
                      : { success: !1 };
                  } finally {
                    Module.stackRestore(t);
                  }
                };
                f.UpdateCustomHeader = function (k, h) {
                  Module.customHeadersMap[k] =
                    k in Module.customHeadersMap
                      ? r(r({}, Module.customHeadersMap[k]), h)
                      : h;
                  Module.docs[k].chunkStorage &&
                    (Module.docs[k].chunkStorage.customHeaders =
                      Module.customHeadersMap[k]);
                };
                f.TriggerFullDownload = function (k) {
                  return new Promise(function (h, t) {
                    var q = Module.GetDoc(k);
                    try {
                      (q in downloadDataMap &&
                        REX(
                          Module.PDFDocDownloaderTriggerFullDownload(
                            q,
                            downloadDataMap[q].downloader,
                          ),
                        ),
                        h({}));
                    } catch (g) {
                      t(g);
                    }
                  });
                };
                f.InsertBlankPages = function (k, h, t, q) {
                  return new Promise(function (g, z) {
                    var G = [],
                      D = Module.GetDoc(k);
                    try {
                      var H = Module.stackSave();
                      G[G.length] = function () {
                        Module.stackRestore(H);
                      };
                      for (var I = h.length - 1; 0 <= I; --I) {
                        var J = Module.PDFDocGetPageIterator(D, h[I]),
                          F = Module.PDFDocPageCreate(D, t, q);
                        Module.PDFDocPageInsert(D, J, F);
                      }
                      var a = Module.postPagesUpdatedEvent(D, k);
                      G.forEach(function (b) {
                        b();
                      });
                      g(a);
                    } catch (b) {
                      (G.forEach(function (d) {
                        d();
                      }),
                        z(b));
                    }
                  });
                };
                f.InsertPages = function (k, h, t, q, g, z) {
                  return new Promise(function (G, D) {
                    var H = [],
                      I = Module.GetDoc(k);
                    try {
                      var J = Module.stackSave();
                      H[H.length] = function () {
                        Module.stackRestore(J);
                      };
                      if (h instanceof ArrayBuffer) {
                        var F = Module.CreateDoc(h);
                        var a = Module.GetDoc(F);
                        H[H.length] = function () {
                          Module.DeleteDoc(F);
                        };
                      } else a = Module.GetDoc(h);
                      for (
                        var b = t.length, d = Module.PageSetCreate(), e = 0;
                        e < b;
                        ++e
                      )
                        Module.PageSetAddPage(d, t[e]);
                      z
                        ? Module.PDFDocInsertPages2(I, q, a, d, g)
                        : Module.PDFDocInsertPages(I, q, a, d, g);
                      var w;
                      z || (w = Module.postPagesUpdatedEvent(I, k));
                      H.reverse().forEach(function (C) {
                        C();
                      });
                      G(w);
                    } catch (C) {
                      (H.reverse().forEach(function (y) {
                        y();
                      }),
                        D(C));
                    }
                  });
                };
                f.MovePages = function (k, h, t) {
                  return new Promise(function (q, g) {
                    var z = [],
                      G = Module.GetDoc(k);
                    try {
                      var D = Module.stackSave();
                      z[z.length] = function () {
                        Module.stackRestore(D);
                      };
                      for (
                        var H = h.length, I = Module.PageSetCreate(), J = 0;
                        J < H;
                        ++J
                      )
                        Module.PageSetAddPage(I, h[J]);
                      Module.PDFDocMovePages(G, t, I);
                      var F = Module.postPagesUpdatedEvent(G, k);
                      z.forEach(function (a) {
                        a();
                      });
                      q(F);
                    } catch (a) {
                      (z.forEach(function (b) {
                        b();
                      }),
                        g(a));
                    }
                  });
                };
                f.RemovePages = function (k, h, t) {
                  return new Promise(function (q, g) {
                    var z = Module.GetDoc(k),
                      G = [];
                    try {
                      var D = Module.stackSave();
                      G[G.length] = function () {
                        Module.stackRestore(D);
                      };
                      for (var H = h.length - 1; 0 <= H; --H) {
                        var I = Module.PDFDocGetPageIterator(z, h[H]);
                        Module.IteratorHasNext(I) &&
                          (t
                            ? Module.PDFDocPageRemove2(z, I)
                            : Module.PDFDocPageRemove(z, I));
                      }
                      var J;
                      t || (J = Module.postPagesUpdatedEvent(z, k));
                      G.forEach(function (F) {
                        F();
                      });
                      q(J);
                    } catch (F) {
                      (G.forEach(function (a) {
                        a();
                      }),
                        g(F));
                    }
                  });
                };
                f.RotatePages = function (k, h, t) {
                  return new Promise(function (q, g) {
                    var z = Module.GetDoc(k),
                      G = [];
                    try {
                      var D = Module.stackSave();
                      G[G.length] = function () {
                        Module.stackRestore(D);
                      };
                      var H = h.length,
                        I = 0,
                        J = Module.PDFDocGetPageIterator(z, h[0]),
                        F = [];
                      G.push(function () {
                        Module._TRN_IteratorDestroy(J);
                      });
                      for (
                        var a = h[0];
                        Module.IteratorHasNext(J) && I < h[H - 1];
                        ++a
                      ) {
                        if (a === h[I]) {
                          var b = Module.IteratorCurrent(J),
                            d = (Module.PageGetRotation(b) + t) % 4;
                          Module.PageSetRotation(b, d);
                          F.push(a);
                          I++;
                        }
                        Module.IteratorNext(J);
                      }
                      var e = Module.postPagesUpdatedEvent(z, k, F, !0);
                      G.reverse().forEach(function (w) {
                        w();
                      });
                      q(e);
                    } catch (w) {
                      (G.reverse().forEach(function (C) {
                        C();
                      }),
                        g(w));
                    }
                  });
                };
                f.ExtractPages = function (k, h, t, q, g, z) {
                  return new Promise(function (G, D) {
                    var H = [];
                    try {
                      var I = Module.stackSave();
                      H[H.length] = function () {
                        Module.stackRestore(I);
                      };
                      var J = function (b) {
                        H.reverse().forEach(function (d) {
                          d();
                        });
                        D(b);
                      };
                      Module.XFDFMerge(k, t, g);
                      var F = Module.CreateEmptyDoc();
                      H[H.length] = function () {
                        Module.DeleteDoc(F);
                      };
                      var a = Module.InsertPages(F, k, h, 1, !0, z)
                        .then(function () {
                          return Module.SaveDoc(F, void 0, !0, !1, void 0, q);
                        })
                        .then(function (b) {
                          H.reverse().forEach(function (d) {
                            d();
                          });
                          return b;
                        });
                      G(a);
                    } catch (b) {
                      J(b);
                    }
                  });
                };
                f.CropPages = function (k, h, t, q, g, z) {
                  return new Promise(function (G, D) {
                    var H = Module.GetDoc(k),
                      I = [];
                    try {
                      var J = Module.stackSave();
                      I[I.length] = function () {
                        Module.stackRestore(J);
                      };
                      var F = h.length,
                        a = 0,
                        b = Module.PDFDocGetPageIterator(H, h[0]);
                      I.push(function () {
                        Module._TRN_IteratorDestroy(b);
                      });
                      for (
                        var d = [], e = h[0];
                        Module.IteratorHasNext(b) && a < h[F - 1];
                        ++e
                      ) {
                        if (e === h[a]) {
                          var w = Module.IteratorCurrent(b),
                            C = Module.allocate(8, "i8", Module.ALLOC_STACK);
                          REX(Module._TRN_PageGetCropBox(w, C));
                          var y = Module.PageGetRotation(w),
                            E = Module.getValue(C, "double"),
                            L = Module.getValue(C + 8, "double"),
                            N = Module.getValue(C + 16, "double"),
                            Q = Module.getValue(C + 24, "double");
                          0 === y % 4
                            ? (Module.setValue(C, E + g, "double"),
                              Module.setValue(C + 8, L + q, "double"),
                              Module.setValue(C + 16, N - z, "double"),
                              Module.setValue(C + 24, Q - t, "double"))
                            : 1 === y % 4
                              ? (Module.setValue(C, E + t, "double"),
                                Module.setValue(C + 8, L + g, "double"),
                                Module.setValue(C + 16, N - q, "double"),
                                Module.setValue(C + 24, Q - z, "double"))
                              : 2 === y % 4
                                ? (Module.setValue(C, E + z, "double"),
                                  Module.setValue(C + 8, L + t, "double"),
                                  Module.setValue(C + 16, N - g, "double"),
                                  Module.setValue(C + 24, Q - q, "double"))
                                : 3 === y % 4 &&
                                  (Module.setValue(C, E + q, "double"),
                                  Module.setValue(C + 8, L + z, "double"),
                                  Module.setValue(C + 16, N - t, "double"),
                                  Module.setValue(C + 24, Q - g, "double"));
                          Module.setValue(C + 32, 0, "double");
                          REX(Module._TRN_PageSetBox(w, 0, C));
                          REX(Module._TRN_PageSetBox(w, 1, C));
                          d.push(e);
                          a++;
                        }
                        Module.IteratorNext(b);
                      }
                      var V = Module.postPagesUpdatedEvent(H, k, d, !0);
                      I.reverse().forEach(function (X) {
                        X();
                      });
                      G(V);
                    } catch (X) {
                      (I.reverse().forEach(function (ja) {
                        ja();
                      }),
                        D(X));
                    }
                  });
                };
              })("undefined" === typeof self ? this.Module : self.Module);
              this.loaded = !0;
              Module.initCb && Module.initCb();
            },
          };
        })(self);
      }).call(this, u(10).clearImmediate, u(10).setImmediate);
    },
    function (v, A, u) {
      (function (p) {
        function n(c) {
          "@babel/helpers - typeof";
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (m) {
                    return typeof m;
                  }
                : function (m) {
                    return m &&
                      "function" == typeof Symbol &&
                      m.constructor === Symbol &&
                      m !== Symbol.prototype
                      ? "symbol"
                      : typeof m;
                  }),
            n(c)
          );
        }
        var x = u(1),
          l = u(5),
          r = "undefined" !== typeof window ? window : self;
        r.global = r;
        (function (c) {
          c.currentFileString = "/current";
          var m = 0,
            f = 0,
            k = {},
            h = null;
          Module.chunkMax = 200;
          var t = function (a, b, d, e, w) {
              var C = new XMLHttpRequest();
              return CancellablePromise(
                function (y, E) {
                  C.open("GET", a, !0);
                  C.responseType = "arraybuffer";
                  C.onerror = function () {
                    E("Network error occurred");
                  };
                  C.onload = function () {
                    if (206 === this.status && C.response.byteLength === d) {
                      var N = new Int8Array(C.response);
                      y(N);
                    } else E("Download Failed");
                  };
                  var L = ["bytes=", b, "-", b + d - 1].join("");
                  C.setRequestHeader("Range", L);
                  w && (C.withCredentials = w);
                  e &&
                    Object.keys(e).forEach(function (N) {
                      C.setRequestHeader(N, e[N]);
                    });
                  C.send();
                },
                function () {
                  C.abort();
                },
              );
            },
            q = function (a) {
              this.maxChunkNum = a;
              this.lruList = [];
              this.chunkMap = {};
            };
          q.prototype = {
            has: function (a) {
              return a in this.chunkMap;
            },
            insert: function (a, b) {
              this.lruList.length >= this.maxChunkNum &&
                (delete this.chunkMap[this.lruList[0]], this.lruList.shift());
              this.lruList.push(b);
              this.chunkMap[b] = a;
            },
            get: function (a) {
              var b = this.lruList.lastIndexOf(a);
              0 <= b && this.lruList.splice(b, 1);
              this.lruList.push(a);
              return this.chunkMap[a];
            },
          };
          var g = function (a) {
            this.file = a;
            this.filePosition = 0;
            this.fileLength = a.size;
            this.chunkSize = 1048576;
            this.chunkCache = new q(8);
            this.reader = new FileReaderSync();
          };
          g.prototype = {
            read: function (a, b, d) {
              d =
                this.filePosition + d <= this.fileLength
                  ? d
                  : this.fileLength - this.filePosition;
              a = a.subarray(b, b + d);
              b = d;
              for (
                var e = this.filePosition % this.chunkSize,
                  w = this.filePosition - e,
                  C = 0;
                0 < d;

              ) {
                if (this.chunkCache.has(w)) var y = this.chunkCache.get(w);
                else
                  ((y = new Int8Array(
                    this.reader.readAsArrayBuffer(
                      this.file.slice(w, w + this.chunkSize),
                    ),
                  )),
                    this.chunkCache.insert(y, w));
                var E = y.length,
                  L = e + d;
                L <= E
                  ? (a.set(y.subarray(e, L), C),
                    (this.filePosition += d),
                    (d = 0))
                  : (a.set(y.subarray(e), C),
                    (this.filePosition += E - e),
                    (e = 0),
                    (w = this.filePosition),
                    (d = L - E),
                    (C = b - d));
              }
              return b;
            },
            seek: function (a) {
              this.filePosition = a;
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
          var z = function (a) {
            this.data = a;
            this.position = 0;
            this.length = this.data.length;
          };
          z.prototype = {
            read: function (a, b, d) {
              d =
                this.position + d <= this.length
                  ? d
                  : this.length - this.position;
              a = a.subarray(b, b + d);
              b = this.data.subarray(this.position, this.position + d);
              a.set(b);
              this.position += d;
              return d;
            },
            write: function (a, b, d) {
              d =
                this.position + d <= this.length
                  ? d
                  : this.length - this.position;
              a = a.subarray(b, b + d);
              this.data.subarray(this.position, this.position + d).set(a);
              this.position += d;
              return d;
            },
            seek: function (a) {
              this.position = a;
            },
            close: function () {
              this.data = null;
            },
            getPos: function () {
              return this.position;
            },
            getTotalSize: function () {
              return this.length;
            },
          };
          var G = function (a, b, d, e, w, C) {
            "object" === n(a)
              ? ((this.lruList = a.lruList),
                (this.chunkMap = a.chunkMap),
                (this.length = a.length),
                (this.url = a.url),
                (this.customHeaders = a.customHeaders),
                (this.withCredentials = a.withCredentials),
                (this.chunkSize = a.chunkSize))
              : ((this.lruList = []),
                (this.chunkMap = {}),
                (this.chunkMap[b] = C),
                (this.length = b),
                (this.url = a),
                (this.customHeaders = e),
                (this.withCredentials = w),
                (this.chunkSize = d));
          };
          G.prototype = {
            lruUpdate: function (a) {
              var b = this.lruList.lastIndexOf(a);
              0 <= b && this.lruList.splice(b, 1);
              this.lruList.push(a);
            },
            getChunk: function (a) {
              var b = this;
              if (this.chunkMap[a]) this.lruUpdate(a);
              else {
                var d = Math.min(a + this.chunkSize, this.length) - 1,
                  e = new XMLHttpRequest();
                e.open("GET", this.url, !1);
                e.responseType = "arraybuffer";
                e.setRequestHeader("Range", ["bytes=", a, "-", d].join(""));
                this.withCredentials &&
                  (e.withCredentials = this.withCredentials);
                this.customHeaders &&
                  Object.keys(this.customHeaders).forEach(function (w) {
                    e.setRequestHeader(w, b.customHeaders[w]);
                  });
                e.send();
                if (200 === e.status || 206 === e.status)
                  this.writeChunk(new Int8Array(e.response), a);
                else throw Error("Failed to load data from");
              }
              return this.chunkMap[a];
            },
            hadChunk: function (a) {
              return a in this.chunkMap;
            },
            hasChunk: function (a) {
              return this.chunkMap[a];
            },
            getCacheData: function () {
              return this.chunkMap[this.length];
            },
            getRequiredChunkOffsetArrays: function (a, b) {
              var d = { have: [], downloading: [], missing: [] };
              try {
                var e = Module.stackSave();
                var w = Module.allocate(4, "i8", Module.ALLOC_STACK);
                REX(Module._TRN_DownloaderGetRequiredChunksSize(a, b, w));
                var C = Module.getValue(w, "i8*");
                if (C) {
                  var y = Module._malloc(8 * C);
                  REX(Module._TRN_DownloaderGetRequiredChunks(a, b, y, C));
                  for (a = 0; a < C; ++a) {
                    var E = Module.getValue(y + 8 * a, "double");
                    this.hasChunk(E)
                      ? d.have.push(E)
                      : this.hadChunk(E)
                        ? d.missing.push(E)
                        : d.downloading.push(E);
                  }
                }
              } finally {
                (y && Module._free(y), Module.stackRestore(e));
              }
              return d;
            },
            keepVisibleChunks: function (a, b) {
              for (
                var d = b.length, e = Module.chunkMax / 2, w = 0, C = 0;
                C < d;
                ++C
              ) {
                var y = this.getRequiredChunkOffsetArrays(a, b[C]),
                  E = y.have,
                  L = E.length;
                w += L;
                if (w > e) {
                  this.keepChunks(E.slice(0, L - w + e));
                  break;
                }
                this.keepChunks(y.have);
              }
            },
            getChunkAsync: function (a) {
              var b = this,
                d = a + this.chunkSize,
                e = this.chunkSize;
              d > this.length && (e -= d - this.length);
              return t(
                this.url,
                a,
                e,
                this.customHeaders,
                this.withCredentials,
              ).then(function (w) {
                b.writeChunk(w, a);
              });
            },
            getChunks: function (a) {
              for (var b = a.length, d = Array(b), e = 0; e < b; ++e)
                d[e] = this.getChunkAsync(a[e]);
              return CancellablePromise.all(d);
            },
            keepChunks: function (a) {
              for (var b = a.length, d = 0; d < b; ++d) this.lruUpdate(a[d]);
            },
            writeChunk: function (a, b, d) {
              Object(l.b)(this.lruList, this.chunkMap, this.chunkSize, a, b, d);
              this.lruUpdate(b);
            },
          };
          var D = function (a) {
            this.chunkStorage = a;
            this.position = 0;
            this.length = this.chunkStorage.length;
            this.chunkSize = a.chunkSize;
          };
          D.prototype = {
            read: function (a, b, d) {
              var e = this.position + d <= this.length,
                w = e ? d : this.length - this.position;
              if (this.position < this.length) {
                var C;
                for (C = 0; C < w; ) {
                  var y = this.position % this.chunkSize;
                  var E = this.position - y;
                  var L = w - C,
                    N = a.subarray(b + C, b + C + L);
                  if (this.chunkStorage.hadChunk(E))
                    ((E = this.chunkStorage.getChunk(E).subarray(y, y + L)),
                      N.set(E),
                      (N = E.length),
                      (C += N),
                      (this.position += N));
                  else for (this.position += L; C < w; ++C) N[C] = 0;
                }
              }
              if (!e) {
                b += w;
                if ((d -= w))
                  ((e = this.chunkStorage.getCacheData()),
                    d > e.length && (d = e.length),
                    (C = this.position - this.length),
                    (a = a.subarray(b, b + d)),
                    (E = e.subarray(C, C + d)),
                    a.set(E));
                this.position += d;
                return w + d;
              }
              return w;
            },
            write: function (a, b, d) {
              var e = this.position + d <= this.length,
                w =
                  this.position + d <= this.length
                    ? d
                    : this.length - this.position,
                C = a.subarray(b, b + w),
                y = this.position % this.chunkSize;
              this.chunkStorage.writeChunk(C, this.position - y, y);
              this.position += w;
              if (!e) {
                C = b + w;
                if ((d -= w))
                  ((b = this.chunkStorage.getCacheData()),
                    d > b.length && (d = b.length),
                    (e = this.position - this.length),
                    (C = a.subarray(C, C + d)),
                    b.subarray(e, e + d).set(C));
                this.position += d;
                return w + d;
              }
              return w;
            },
            seek: function (a) {
              this.position = a;
            },
            close: function () {
              this.chunkStorage = null;
            },
            getPos: function () {
              return this.position;
            },
            getTotalSize: function () {
              return this.length;
            },
          };
          var H = function (a) {
            this.docId = a;
            this.length = 0;
            this.data = new Int8Array(8192);
            this.position = 0;
          };
          H.prototype = {
            seek: function (a) {
              this.position = a;
            },
            close: function () {
              var a = new Int8Array(this.data.buffer.slice(0, this.length));
              Module.ChangeDocBackend(this.docId, {
                ptr: Module.GetDoc(this.docId),
                buffer: a,
              });
              this.data = null;
            },
            getPos: function () {
              return this.position;
            },
            getTotalSize: function () {
              return this.length;
            },
            read: function (a, b, d) {
              var e = this.data.length;
              d = d + b < e ? d : e - b;
              a = a.subarray(b, b + d);
              b = this.data.subarray(this.position, this.position + d);
              a.set(b);
              this.position += d;
              return d;
            },
            write: function (a, b, d) {
              for (var e = this.position + d, w = this.data.length; e > w; ) {
                w = Math.max(w * (16777216 < w ? 1.5 : 2), e);
                var C = new Int8Array(w);
                C.set(this.data.subarray(0, this.length), 0);
                this.data = C;
              }
              a = a.subarray(b, b + d);
              this.data.set(a, this.position);
              this.position += d;
              this.position > this.length && (this.length = this.position);
              return d;
            },
          };
          var I = {
            IsSink: function (a) {
              return 66 === (a.flags & 255);
            },
            open: function (a) {
              var b = a.path.slice(1);
              this.IsSink(a)
                ? ((a.provider = new H(b)), (Module.docs[b].sink = a.provider))
                : (a.provider = Module.docs[b].sink
                    ? new z(Module.docs[b].sink.data)
                    : Module.docs[b].chunkStorage
                      ? new D(Module.docs[b].chunkStorage)
                      : Module.docs[b].buffer
                        ? new z(Module.docs[b].buffer)
                        : new g(Module.docs[b].file));
            },
            close: function (a) {
              a.provider.close();
            },
            read: function (a, b, d, e, w) {
              return a.provider.read(b, d, e);
            },
            llseek: function (a, b, d) {
              a = a.provider;
              1 === d
                ? (b += a.getPos())
                : 2 === d && (b = a.getTotalSize() + b);
              if (0 > b) throw new FS.ErrnoError(r.ERRNO_CODES.EINVAL);
              a.seek(b);
              return b;
            },
            write: function (a, b, d, e, w) {
              return e ? a.provider.write(b, d, e) : 0;
            },
          };
          r.THROW = function (a) {
            throw { type: "PDFWorkerError", message: a };
          };
          var J = function (a) {
            return "Exception: \n\t Message: "
              .concat(
                c.GetJSStringFromCString(Module._TRN_GetMessage(a)),
                "\n\t Filename: ",
              )
              .concat(
                c.GetJSStringFromCString(Module._TRN_GetFileName(a)),
                "\n\t Function: ",
              )
              .concat(
                c.GetJSStringFromCString(Module._TRN_GetFunction(a)),
                "\n\t Linenumber: ",
              )
              .concat(c.GetJSStringFromCString(Module._TRN_GetLineNum(a)));
          };
          c.GetErrToString = J;
          r.REX = function (a) {
            a && THROW(J(a));
          };
          c.Initialize = function (a) {
            var b = Module.stackSave();
            a = a
              ? Module.allocate(
                  Module.intArrayFromString(a),
                  "i8",
                  Module.ALLOC_STACK,
                )
              : 0;
            REX(Module._TRN_PDFNetInitialize(a));
            Module.stackRestore(b);
          };
          c.GetDoc = function (a) {
            if (a in Module.docs) return Module.docs[a].ptr;
            throw {
              type: "InvalidDocReference",
              message: "Unable to access Document id=".concat(
                a,
                ". The document appears to be invalid or was deleted.",
              ),
            };
          };
          c.clearDocBackend = function () {
            null !== Module.cachePtr
              ? (Module.hasBufOwnership && Module._free(Module.cachePtr),
                (Module.cachePtr = null))
              : Module.docs[c.currentFileString] &&
                delete Module.docs[c.currentFileString];
          };
          c.MakeDev = function (a) {
            if (!k[a]) {
              var b = FS.makedev(3, 5);
              FS.registerDevice(b, I);
              FS.mkdev(a, 511, b);
              k[a] = !0;
            }
          };
          c.CreateDocFileBackend = function (a, b) {
            Module.MakeDev(b);
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            Module.docs[b] = { file: a };
            a = Module.allocate(
              Module.intArrayFromString(b),
              "i8",
              Module.ALLOC_STACK,
            );
            REX(Module._TRN_PDFDocCreateFromFilePath(a, d));
            d = Module.getValue(d, "i8*");
            Module.docs[b].ptr = d;
          };
          c.InsertImageIntoDoc = function (a, b, d) {
            var e = [];
            try {
              var w = Module.ElementBuilderCreate();
              e.push(function () {
                Module.ElementBuilderDestroy(w);
              });
              var C = Module.ElementWriterCreate();
              e.push(function () {
                Module.ElementWriterDestroy(C);
              });
              if (d) {
                var y = d.width;
                var E = d.height;
              } else
                ((y = Module.ImageGetImageWidth(b)),
                  (E = Module.ImageGetImageHeight(b)),
                  (d = y / E),
                  d > 612 / 792
                    ? ((y = 612), (E = parseInt(y / d, 10)))
                    : ((E = 792), (y = parseInt(E * d, 10))));
              var L = Module.ElementBuilderCreateImage(w, b, 0, 0, y, E),
                N = Module.PDFDocPageCreate(a, y, E);
              Module.ElementWriterBegin(C, N);
              Module.ElementWriterWritePlacedElement(C, L);
              Module.ElementWriterEnd(C);
              Module.PDFDocPagePushBack(a, N);
            } finally {
              e.reverse().forEach(function (Q) {
                Q();
              });
            }
          };
          var F = function (a, b, d) {
            "object" === n(a)
              ? ((this.m_pages = a.m_pages),
                (this.m_has_named_dests = a.m_has_named_dests),
                (this.m_finished_download = a.m_finished_download),
                (this.m_has_outline = a.m_has_outline),
                (this.m_current_page = a.m_current_page),
                (this.m_id = a.m_id),
                (this.size = a.size),
                (this.timeout = a.timeout),
                (this.eventPageArray = a.eventPageArray),
                (this.requirePageCallbacks = a.requirePageCallbacks))
              : ((this.m_pages = []),
                (this.m_has_outline =
                  this.m_finished_download =
                  this.m_has_named_dests =
                    !1),
                (this.m_current_page = 1),
                (this.m_id = d),
                (this.size = a),
                (this.timeout = null),
                (this.eventPageArray = []),
                (this.requirePageCallbacks = {}));
            this.downloadUserData = Module.createDownloadUserData(b, d);
          };
          F.prototype = {
            getJSUrl: function () {
              return Module.extractDownloadUserData(this.downloadUserData).url;
            },
            getDocId: function () {
              return Module.extractDownloadUserData(this.downloadUserData)
                .docId;
            },
            destroyUserData: function () {
              this.m_id in Module.withCredentials &&
                delete Module.withCredentials[this.m_id];
              this.m_id in Module.customHeadersMap &&
                delete Module.customHeadersMap[this.m_id];
              Module.destroyDownloadUserData(this.downloadUserData);
            },
          };
          c.createDownloadUserData = function (a, b) {
            a = Module.allocate(
              Module.intArrayFromString(a),
              "i8",
              Module.ALLOC_NORMAL,
            );
            var d = Module.allocate(8, "i8", Module.ALLOC_NORMAL);
            Module.setValue(d, a, "i8*");
            Module.setValue(d + 4, parseInt(b, 10), "i32");
            return (this.downloadUserData = d);
          };
          c.extractDownloadUserData = function (a) {
            var b = Module.getValue(a, "i8*");
            b = c.GetJSStringFromCString(b);
            a = Module.getValue(a + 4, "i32").toString();
            return { url: b, docId: a };
          };
          c.destroyDownloadUserData = function (a) {
            Module._free(Module.getValue(a, "i8*"));
            Module._free(a);
          };
          r.downloadDataMap = {};
          Module.customHeadersMap = {};
          Module.withCredentials = {};
          c.GetDownloadData = function (a) {
            if (a in downloadDataMap) return downloadDataMap[a];
          };
          c.DownloaderHint = function (a, b) {
            var d = Module.GetDoc(a),
              e = downloadDataMap[d];
            b.currentPage && (e.m_current_page = b.currentPage);
            if (b.visiblePages) {
              var w = b.visiblePages;
              for (b = 0; b < w.length; ++b) ++w[b];
              Object.keys(e.requirePageCallbacks).forEach(function (y) {
                e.requirePageCallbacks.hasOwnProperty(y) &&
                  w.push(parseInt(y, 10));
              });
              (b = Module.docs[a].chunkStorage) &&
                b.keepVisibleChunks(e.downloader, w);
              a = w.length;
              var C = Module.allocate(4 * a, "i8", Module.ALLOC_STACK);
              for (b = 0; b < a; ++b) Module.setValue(C + 4 * b, w[b], "i32");
              REX(Module._TRN_PDFDocDownloadPages(d, C, a, 1, 0));
            }
          };
          c.RequirePage = function (a, b) {
            return new Promise(function (d, e) {
              e = Module.GetDoc(a);
              var w = downloadDataMap[e];
              !w || w.m_finished_download || w.m_pages[b]
                ? d()
                : (b in w.requirePageCallbacks
                    ? w.requirePageCallbacks[b].push(d)
                    : (w.requirePageCallbacks[b] = [d]),
                  (d = Module.allocate(4, "i8", Module.ALLOC_STACK)),
                  Module.setValue(d, b, "i32"),
                  Module._TRN_PDFDocDownloadPages(e, d, 1, 0, 0));
            });
          };
          c.IsLinearizationValid = function (a) {
            a = Module.GetDoc(a);
            if ((a = downloadDataMap[a])) {
              var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
              REX(Module._TRN_DownloaderIsLinearizationValid(a.downloader, b));
              return 0 !== Module.getValue(b, "i8");
            }
            return !1;
          };
          c.ShouldRunRender = function (a, b) {
            a = Module.GetDoc(a);
            return (a = downloadDataMap[a])
              ? a.m_finished_download
                ? !0
                : a.m_pages[b]
              : !0;
          };
          c.postPagesDownloadedEvent = function (a, b, d) {
            a = {
              pageDimensions: Module.GetPageDimensionsContentChangedList(a, d),
              pageNumbers: d,
            };
            Module.postEvent(b, "pagesDownloaded", a);
            return a;
          };
          c.createCallbacksStruct = function (a) {
            if (!h) {
              var b = function (d) {
                return function (e) {
                  var w = arguments;
                  e in downloadDataMap
                    ? d.apply(this, w)
                    : p(function () {
                        e in downloadDataMap && d.apply(this, w);
                      }, 0);
                };
              };
              h = {
                downloadProc: Module.addFunction(function (d, e, w, C, y) {
                  p(function () {
                    var E = Module.extractDownloadUserData(C),
                      L = E.docId;
                    t(
                      E.url,
                      e,
                      w,
                      Module.customHeadersMap[L],
                      Module.withCredentials[L],
                    ).then(function (N) {
                      L in Module.docs &&
                        Module.docs[L].chunkStorage &&
                        Module.docs[L].chunkStorage.writeChunk(N, e);
                      Module._TRN_DownloadComplete(0, e, w, d);
                    });
                  });
                }, "vidiii"),
                notifyUpdatePage: Module.addFunction(
                  b(function (d, e, w, C) {
                    var y = downloadDataMap[d];
                    y.m_pages[e] = !0;
                    var E = y.eventPageArray;
                    if (e in y.requirePageCallbacks)
                      for (
                        w = y.requirePageCallbacks[e], C = 0;
                        C < w.length;
                        ++C
                      )
                        w[C]();
                    y.timeout
                      ? E.push(e)
                      : ((E = y.eventPageArray = [e]),
                        (y.timeout = setTimeout(function () {
                          Module.postPagesDownloadedEvent(d, y.m_id, E);
                          y.timeout = null;
                        }, 100)));
                  }),
                  "viiii",
                ),
                notifyUpdateOutline: Module.addFunction(
                  b(function (d, e) {
                    d = downloadDataMap[d];
                    d.m_has_outline ||
                      ((d.m_has_outline = !0),
                      Module.postEvent(d.m_id, "bookmarksUpdated", {}));
                  }),
                  "vii",
                ),
                notifyUpdateNamedDests: Module.addFunction(
                  b(function (d, e) {
                    d = downloadDataMap[d];
                    d.m_has_named_dests || (d.m_has_named_dests = !0);
                  }),
                  "vii",
                ),
                notifyDocInfoDownloaded: Module.addFunction(
                  b(function (d, e) {
                    downloadDataMap[d].docInfoPromiseCapability.resolve();
                  }),
                  "vii",
                ),
                notifyUpdateThumb: Module.addFunction(
                  b(function (d, e) {}),
                  "viiii",
                ),
                notifyFinishedDownload: Module.addFunction(
                  b(function (d, e) {
                    d = downloadDataMap[d];
                    d.m_finished_download ||
                      ((d.m_finished_download = !0),
                      Module.postEvent(d.m_id, "documentComplete", {}));
                  }),
                  "vii",
                ),
                notifyDocumentError: Module.addFunction(function (
                  d,
                  e,
                ) {}, "viii"),
                getCurrentPage: Module.addFunction(function (d, e) {
                  return downloadDataMap[d].m_current_page;
                }, "iii"),
              };
            }
            b = Module.allocate(44, "i8", Module.ALLOC_STACK);
            Module.setValue(b, h.downloadProc, "i8*");
            Module.setValue(b + 4, a, "i8*");
            Module.setValue(b + 8, h.notifyUpdatePage, "i8*");
            Module.setValue(b + 12, h.notifyUpdateOutline, "i8*");
            Module.setValue(b + 16, h.notifyUpdateNamedDests, "i8*");
            Module.setValue(b + 20, h.notifyDocInfoDownloaded, "i8*");
            Module.setValue(b + 24, h.notifyUpdateThumb, "i8*");
            Module.setValue(b + 28, h.notifyFinishedDownload, "i8*");
            Module.setValue(b + 32, h.notifyDocumentError, "i8*");
            Module.setValue(b + 36, h.getCurrentPage, "i8*");
            Module.setValue(b + 40, 0, "i8*");
            return b;
          };
          c.CreateDocDownloaderBackend = function (a, b, d) {
            var e = a.url,
              w = a.size,
              C = a.customHeaders,
              y = a.withCredentials,
              E = a.shouldUseMinimumDownloads,
              L = a.chunkSize;
            C && (Module.customHeadersMap[d] = C);
            y && (Module.withCredentials[d] = y);
            var N = a.downloadData
              ? new F(a.downloadData, e, d)
              : new F(a.size, e, d);
            var Q = Module.createCallbacksStruct(N.downloadUserData),
              V = Module.allocate(4, "i8", Module.ALLOC_STACK);
            Module.MakeDev(d);
            a.chunkStorage
              ? (e = new G(a.chunkStorage))
              : ((a = new Int8Array(
                  new ArrayBuffer(Math.ceil((a.size + L - 1) / L / 8)),
                )),
                (e = new G(e, w, L, C, y, a)));
            Module.docs[d] = { chunkStorage: e };
            REX(
              Module._TRN_DownloaderCreate(
                Q,
                w,
                Module.GetUStringFromJSString(d),
                E,
                e.chunkSize,
                V,
              ),
            );
            N.downloader = Module.getValue(V, "i8*");
            N.docInfoPromiseCapability = createPromiseCapability();
            N.docInfoRequested = !1;
            if ((w = Module._TRN_PDFDocCreateFromFilter(N.downloader, b)))
              (Module._TRN_FilterDestroy(N.downloader), REX(w));
            b = Module.getValue(b, "i8*");
            Module.docs[d].ptr = b;
            Module.PDFDocInitSecurityHandler(b) &&
              REX(Module._TRN_PDFDocDownloaderInitialize(b, N.downloader));
            downloadDataMap[b] = N;
          };
          c.CreateDocBackend = function (a, b) {
            var d = a.value,
              e = a.extension,
              w = a.type,
              C = Module.allocate(4, "i8", Module.ALLOC_STACK),
              y = Module.stackSave();
            try {
              if (d)
                if ("ptr" === w) Module.docs[b] = { ptr: d };
                else {
                  d.shouldUseMinimumDownloads = a.shouldUseMinimumDownloads;
                  d.chunkSize = a.chunkSize;
                  var E = "object" === n(d) && d.url;
                  w = e && "pdf" !== e;
                  if (E) c.CreateDocDownloaderBackend(d, C, b);
                  else {
                    var L = d instanceof ArrayBuffer;
                    E = L ? "buffer" : "file";
                    if (
                      L &&
                      ((d = new Uint8Array(d)), 10485760 > d.length + m && !w)
                    ) {
                      m += d.length;
                      var N = d.length,
                        Q = Module._malloc(d.length);
                      Module.HEAPU8.set(d, Q);
                      REX(Module._TRN_PDFDocCreateFromBuffer(Q, N, C));
                      var V = Module.getValue(C, "i8*");
                      Module.docs[b] = {
                        ptr: V,
                        bufPtr: Q,
                        bufPtrSize: N,
                        ownership: !0,
                      };
                      Module.docs[b].extension = e;
                      return;
                    }
                    Module.MakeDev(b);
                    L = {};
                    L[E] = d;
                    Module.docs[b] = L;
                    if (w) {
                      if (a.pageSizes && a.pageSizes.length)
                        var X = a.pageSizes[0];
                      else a.defaultPageSize && (X = a.defaultPageSize);
                      var ja = Module.GetUStringFromJSString(b);
                      REX(Module._TRN_PDFDocCreate(C));
                      V = Module.getValue(C, "i8*");
                      var la = Module.ImageCreateFromFile(V, ja);
                      Module.InsertImageIntoDoc(V, la, X);
                    } else {
                      var fa = Module.allocate(
                        Module.intArrayFromString(b),
                        "i8",
                        Module.ALLOC_STACK,
                      );
                      REX(Module._TRN_PDFDocCreateFromFilePath(fa, C));
                      V = Module.getValue(C, "i8*");
                    }
                    Module.docs[b].extension = e;
                    Module.docs[b].ptr = V;
                  }
                }
              else
                (REX(Module._TRN_PDFDocCreate(C)),
                  (V = Module.getValue(C, "i8*")),
                  (Module.docs[b] = { ptr: V }),
                  (Module.docs[b].extension = e));
            } finally {
              Module.stackRestore(y);
            }
          };
          c.ChangeDocBackend = function (a, b) {
            var d = Module.docs[a];
            d
              ? (d.bufPtr &&
                  d.ownership &&
                  (Module._free(d.bufPtr), (m -= d.bufPtrSize)),
                delete Module.docs[a])
              : Object(x.d)(
                  "Trying to delete document ".concat(
                    a,
                    " that does not exist.",
                  ),
                );
            Module.docs[a] = b;
          };
          c.DeleteDoc = function (a) {
            var b = Module.docs[a];
            b
              ? (b.ptr &&
                  (b.ptr in downloadDataMap &&
                    (clearTimeout(downloadDataMap[b.ptr].timeout),
                    downloadDataMap[b.ptr].destroyUserData(),
                    delete downloadDataMap[b.ptr]),
                  Module.PDFDocDestroy(b.ptr)),
                b.bufPtr &&
                  b.ownership &&
                  (Module._free(b.bufPtr), (m -= b.bufPtrSize)),
                delete Module.docs[a])
              : Object(x.d)(
                  "Trying to delete document ".concat(
                    a,
                    " that does not exist.",
                  ),
                );
          };
          c.CreateDoc = function (a, b) {
            if ("id" === a.type) {
              if (
                Module.docPtrStringToIdMap &&
                a.value in Module.docPtrStringToIdMap
              )
                return Module.docPtrStringToIdMap[a.value];
              a.type = "ptr";
              a.value = Number("0x".concat(a.value));
            }
            if (!b) {
              do b = (++f).toString();
              while (b in Module.docs);
            }
            Module.hasBufOwnership = !0;
            c.CreateDocBackend(a, b);
            return b;
          };
          c.CreateEmptyDoc = function () {
            var a = (++f).toString(),
              b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocCreate(b));
            b = Module.getValue(b, "i8*");
            Module.docs[a] = { ptr: b };
            return a;
          };
          c.PDFDocCreateFromLayoutEls = function (a) {
            var b = new Uint8Array(a);
            a = Module._malloc(b.length);
            var d = Module.stackSave(),
              e = Module.allocate(4, "i8", Module.ALLOC_STACK);
            Module.HEAPU8.set(b, a);
            b = Module._TRN_PDFDocCreateFromLayoutEls(a, b.length, e);
            e = Module.getValue(e, "i8*");
            Module._free(a);
            Module.stackRestore(d);
            REX(b);
            return e;
          };
          c.GetPageCount = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetPageCount(a, b));
            return Module.getValue(b, "i8*");
          };
          c.GetPage = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetPage(a, b, d));
            a = Module.getValue(d, "i8*");
            Module.PageIsValid(a) ||
              THROW(
                "Trying to access page that doesn't exist at index ".concat(b),
              );
            return a;
          };
          c.PageGetPageWidth = function (a) {
            var b = Module.allocate(8, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetPageWidth(a, 1, b));
            return Module.getValue(b, "double");
          };
          c.PageGetPageHeight = function (a) {
            var b = Module.allocate(8, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetPageHeight(a, 1, b));
            return Module.getValue(b, "double");
          };
          c.PageGetDefaultMatrix = function (a, b) {
            var d = Module.allocate(48, "i8", Module.ALLOC_STACK);
            b || (b = 0);
            REX(Module._TRN_PageGetDefaultMatrix(a, !0, 1, b, d));
            return d;
          };
          c.GetMatrixAsArray = function (a) {
            for (var b = [], d = 0; 6 > d; ++d)
              b[d] = Module.getValue(a + 8 * d, "double");
            return b;
          };
          c.PageGetPageInfo = function (a) {
            var b = Module.allocate(48, "i8", Module.ALLOC_STACK),
              d = Module.allocate(8, "i8", Module.ALLOC_STACK),
              e = Module.allocate(8, "i8", Module.ALLOC_STACK),
              w = Module.allocate(4, "i8", Module.ALLOC_STACK),
              C = Module.allocate(4, "i8", Module.ALLOC_STACK),
              y = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetPageInfo(a, !0, 1, 0, d, e, b, w, C, y));
            return {
              rotation: Module.getValue(w, "i8*"),
              width: Module.getValue(d, "double"),
              height: Module.getValue(e, "double"),
              matrix: Module.GetMatrixAsArray(b),
              linkAnnotCount: Module.getValue(C, "i8*"),
              otherExceptPopupAnnotCount: Module.getValue(y, "i8*"),
            };
          };
          c.GetUStringFromJSString = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK),
              e = 2 * (a.length + 1),
              w = Module.allocate(
                e,
                "i8",
                b ? Module.ALLOC_NORMAL : Module.ALLOC_STACK,
              );
            Module.stringToUTF16(a, w, e);
            a = Module._TRN_UStringCreateFromString(w, d);
            b && Module._free(w);
            REX(a);
            return Module.getValue(d, "i8*");
          };
          c.GetJSStringFromUString = function (a) {
            var b = Module.allocate(4, "i16*", Module.ALLOC_STACK);
            REX(Module._TRN_UStringCStr(a, b));
            return Module.UTF16ToString(Module.getValue(b, "i16*"));
          };
          c.GetJSStringFromCString = function (a) {
            return Module.UTF8ToString(a);
          };
          c.PDFNetSetResourceData = function (a) {
            Module.res_ptr = Module._malloc(a.length);
            Module.HEAPU8.set(a, Module.res_ptr);
            REX(Module._TRN_PDFNetSetResourceData(Module.res_ptr, a.length));
            Module.res_ptr_size = a.length;
          };
          c.PDFDocDestroy = function (a) {
            REX(Module._TRN_PDFDocDestroy(a));
          };
          c.VectorGetSize = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_VectorGetSize(a, b));
            return Module.getValue(b, "i32");
          };
          c.VectorGetAt = function (a, b) {
            var d = Module.allocate(1, "i8*", Module.ALLOC_STACK);
            REX(Module._TRN_VectorGetAt(a, b, d));
            return Module.getValue(d, "i8*");
          };
          c.VectorDestroy = function (a) {
            REX(Module._TRN_VectorDestroy(a));
          };
          c.PDFRasterizerCreate = function () {
            var a = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFRasterizerCreate(0, a));
            return Module.getValue(a, "i8*");
          };
          c.ExtractSeparationData = function (a) {
            var b = Module.getValue(a, "i8*"),
              d = Module.getValue(a + 4, "i32"),
              e = Module.getValue(a + 8, "i8*"),
              w = Module.HEAPU8[a + 12],
              C = Module.HEAPU8[a + 13],
              y = Module.HEAPU8[a + 14];
            a = Module.HEAPU8[a + 15];
            var E = new Uint8Array(d);
            E.set(Module.HEAPU8.subarray(b, b + d));
            b = Module.GetJSStringFromUString(e);
            return { color: [w, C, y, a], data: E.buffer, name: b };
          };
          c.ExtractApRefChangeData = function (a) {
            var b = Module.getValue(a, "i32"),
              d = Module.getValue(a + 4, "i32"),
              e = Module.getValue(a + 8, "i32"),
              w = Module.getValue(a + 12, "i32");
            a = 0 !== Module.getValue(a + 16, "i8");
            return {
              oldObjNum: b,
              discardAppearance: a,
              newObjNum: d,
              genNum: e,
              pageNum: w,
            };
          };
          c.PDFRasterizerRasterizeSeparations = function (a, b, d, e, w, C, y) {
            var E = Module.allocate(8, "i8", Module.ALLOC_STACK);
            REX(
              Module._TRN_PDFRasterizerRasterizeSeparations(
                a,
                b,
                d,
                e,
                w,
                C,
                y,
                E,
              ),
            );
            a = Module.getValue(E, "i8*");
            b = Module.VectorGetSize(a);
            d = Array(b);
            for (e = 0; e < b; ++e)
              ((w = Module.VectorGetAt(a, e)),
                (d[e] = Module.ExtractSeparationData(w)));
            Module.VectorDestroy(a);
            return d;
          };
          c.PageGetRotation = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetRotation(a, b));
            return Module.getValue(b, "i8*");
          };
          c.PageGetId = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetSDFObj(a, b));
            b = Module.getValue(b, "i8*");
            a = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetObjNum(b, a));
            a = Module.getValue(a, "i32");
            var d = Module.allocate(2, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetGenNum(b, d));
            d = Module.getValue(d, "i16");
            return "".concat(a, "-").concat(d);
          };
          c.PageSetRotation = function (a, b) {
            REX(Module._TRN_PageSetRotation(a, b));
          };
          c.GetDefaultMatrixBox = function (a, b, d) {
            var e = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetRotation(a, e));
            a = (Module.getValue(e, "i32") + d) % 4;
            d = Module.allocate(48, "i8", Module.ALLOC_STACK);
            switch (a) {
              case 0:
                return (
                  REX(Module._TRN_Matrix2DSet(d, 1, 0, 0, -1, -b.x1, b.y2)),
                  d
                );
              case 1:
                return (
                  REX(Module._TRN_Matrix2DSet(d, 0, 1, 1, 0, -b.y1, -b.x1)),
                  d
                );
              case 2:
                return (
                  REX(Module._TRN_Matrix2DSet(d, -1, 0, 0, 1, b.x2, -b.y1)),
                  d
                );
              case 3:
                return (
                  REX(Module._TRN_Matrix2DSet(d, 0, -1, -1, 0, b.y2, b.x2)),
                  d
                );
            }
            throw Error("Yikes, we don't support that rotation type");
          };
          c.Matrix2DMultBBox = function (a, b) {
            var d = Module.allocate(8, "i8", Module.ALLOC_STACK),
              e = Module.allocate(8, "i8", Module.ALLOC_STACK);
            Module.setValue(d, b.x1, "double");
            Module.setValue(e, b.y1, "double");
            REX(Module._TRN_Matrix2DMult(a, d, e));
            b.x1 = Module.getValue(d, "double");
            b.y1 = Module.getValue(e, "double");
            Module.setValue(d, b.x2, "double");
            Module.setValue(e, b.y2, "double");
            REX(Module._TRN_Matrix2DMult(a, d, e));
            b.x2 = Module.getValue(d, "double");
            b.y2 = Module.getValue(e, "double");
            return b;
          };
          c.Matrix2DMult = function (a, b) {
            var d = Module.allocate(8, "i8", Module.ALLOC_STACK),
              e = Module.allocate(8, "i8", Module.ALLOC_STACK);
            Module.setValue(d, b.x, "double");
            Module.setValue(e, b.y, "double");
            REX(Module._TRN_Matrix2DMult(a, d, e));
            b.x = Module.getValue(d, "double");
            b.y = Module.getValue(e, "double");
            return b;
          };
          c.Matrix2DConcat = function (a, b) {
            var d = Module.getValue(b, "double"),
              e = Module.getValue(b + 8, "double"),
              w = Module.getValue(b + 16, "double"),
              C = Module.getValue(b + 24, "double"),
              y = Module.getValue(b + 32, "double");
            b = Module.getValue(b + 40, "double");
            REX(Module._TRN_Matrix2DConcat(a, d, e, w, C, y, b));
          };
          c.Matrix2DSet = function (a, b, d, e, w, C, y) {
            REX(Module._TRN_Matrix2DSet(a, b, d, e, w, C, y));
          };
          c.IteratorHasNext = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_IteratorHasNext(a, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.IteratorCurrent = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_IteratorCurrent(a, b));
            return Module.getValue(Module.getValue(b, "i8*"), "i8*");
          };
          c.IteratorNext = function (a) {
            REX(Module._TRN_IteratorNext(a));
          };
          c.PageGetNumAnnots = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetNumAnnots(a, b));
            return Module.getValue(b, "i32");
          };
          c.PageGetAnnot = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetAnnot(a, b, d));
            return Module.getValue(d, "i8*");
          };
          c.PageAnnotRemove = function (a, b) {
            REX(Module._TRN_PageAnnotRemoveByIndex(a, b));
          };
          c.AnnotGetType = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_AnnotGetType(a, b));
            return Module.getValue(b, "i32");
          };
          c.AnnotGetSDFObjNum = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_AnnotGetSDFObj(a, b));
            b = Module.getValue(b, "i8*");
            a = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetObjNum(b, a));
            return (a = Module.getValue(a, "i32"));
          };
          c.AnnotGetSDFObjGen = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_AnnotGetSDFObj(a, b));
            b = Module.getValue(b, "i8*");
            a = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetGenNum(b, a));
            return (a = Module.getValue(a, "i32"));
          };
          c.AnnotHasAppearance = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_AnnotGetAppearance(a, 0, 0, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.AnnotRefreshAppearance = function (a) {
            REX(Module._TRN_AnnotRefreshAppearance(a));
          };
          c.ObjErase = function (a, b) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              "i8",
              Module.ALLOC_STACK,
            );
            REX(Module._TRN_ObjEraseFromKey(a, b));
          };
          c.GetJSDoubleArrFromCore = function (a, b) {
            for (var d = Array(b), e = 0; e < b; ++e)
              ((d[e] = Module.getValue(a, "double")), (a += 8));
            return d;
          };
          c.GetJSIntArrayFromCore = function (a, b) {
            for (var d = Array(b), e = 0; e < b; ++e)
              ((d[e] = Module.getValue(a, "i32")), (a += 4));
            return d;
          };
          c.BookmarkIsValid = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkIsValid(a, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.BookmarkGetNext = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkGetNext(a, b));
            return Module.getValue(b, "i8*");
          };
          c.BookmarkGetFirstChild = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkGetFirstChild(a, b));
            return Module.getValue(b, "i8*");
          };
          c.BookmarkHasChildren = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkHasChildren(a, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.BookmarkGetAction = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkGetAction(a, b));
            return Module.getValue(b, "i8*");
          };
          c.BookmarkGetTitle = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkGetTitle(a, b));
            a = Module.getValue(b, "i8*");
            return Module.GetJSStringFromUString(a);
          };
          c.ActionIsValid = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ActionIsValid(a, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.ActionGetType = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ActionGetType(a, b));
            return Module.getValue(b, "i32");
          };
          c.ActionGetDest = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ActionGetDest(a, b));
            return Module.getValue(b, "i8*");
          };
          c.DestinationIsValid = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_DestinationIsValid(a, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.DestinationGetPage = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_DestinationGetPage(a, b));
            return Module.getValue(b, "i8*");
          };
          c.PageIsValid = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageIsValid(a, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.PageGetIndex = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageGetIndex(a, b));
            return Module.getValue(b, "i32");
          };
          c.ObjGetAsPDFText = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetAsPDFText(a, b));
            a = Module.getValue(b, "i8*");
            return Module.GetJSStringFromUString(a);
          };
          c.ObjFindObj = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            b = Module.allocate(
              Module.intArrayFromString(b),
              "i8",
              Module.ALLOC_STACK,
            );
            REX(Module._TRN_ObjFindObj(a, b, d));
            return Module.getValue(d, "i8*");
          };
          c.PDFDocGetFirstBookmark = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetFirstBookmark(a, b));
            return Module.getValue(b, "i8*");
          };
          c.DestinationGetExplicitDestObj = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_DestinationGetExplicitDestObj(a, b));
            return Module.getValue(b, "i8*");
          };
          c.DestinationGetFitType = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_DestinationGetFitType(a, b));
            return Module.getValue(b, "i32");
          };
          c.ObjIsNumber = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjIsNumber(a, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.ObjGetNumber = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetNumber(a, b));
            return Module.getValue(b, "double");
          };
          c.PDFDocGetRoot = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetRoot(a, b));
            return Module.getValue(b, "i8*");
          };
          c.ObjPutName = function (a, b, d) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              "i8",
              Module.ALLOC_STACK,
            );
            d = Module.allocate(
              Module.intArrayFromString(d),
              "i8",
              Module.ALLOC_STACK,
            );
            var e = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjPutName(a, b, d, e));
            return Module.getValue(e, "i8*");
          };
          c.ObjPutDict = function (a, b) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              "i8",
              Module.ALLOC_STACK,
            );
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjPutDict(a, b, d));
            return Module.getValue(d, "i8*");
          };
          c.ObjPutString = function (a, b, d) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              "i8",
              Module.ALLOC_STACK,
            );
            d = Module.allocate(
              Module.intArrayFromString(d),
              "i8",
              Module.ALLOC_STACK,
            );
            var e = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjPutString(a, b, d, e));
            return Module.getValue(e, "i8*");
          };
          c.ObjPut = function (a, b, d) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              "i8",
              Module.ALLOC_STACK,
            );
            var e = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjPut(a, b, d, e));
            return Module.getValue(e, "i8*");
          };
          c.ObjGetAt = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetAt(a, b, d));
            return Module.getValue(d, "i8*");
          };
          c.Matrix2DInverse = function (a) {
            var b = Module.allocate(48, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_Matrix2DInverse(a, b));
            return b;
          };
          c.PDFDocInitSecurityHandler = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocInitSecurityHandler(a, 0, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.PDFDocSetSecurityHandler = function (a, b) {
            REX(Module._TRN_PDFDocSetSecurityHandler(a, b));
          };
          c.SecurityHandlerCreate = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_SecurityHandlerCreate(a, b));
            return Module.getValue(b, "i8*");
          };
          c.SecurityHandlerChangeUserPasswordUString = function (a, b) {
            REX(
              Module._TRN_SecurityHandlerChangeUserPasswordUString(
                a,
                Module.GetUStringFromJSString(b),
              ),
            );
          };
          c.PDFDocInitStdSecurityHandler = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(
              Module._TRN_PDFDocInitStdSecurityHandlerUString(
                a,
                Module.GetUStringFromJSString(b),
                d,
              ),
            );
            return 0 !== Module.getValue(d, "i8");
          };
          c.PDFDocDownloaderTriggerFullDownload = function (a, b) {
            REX(Module._TRN_PDFDocDownloaderTriggerFullDownload(a, b));
          };
          c.PDFDocInsertPages = function (a, b, d, e, w) {
            REX(Module._TRN_PDFDocInsertPageSet(a, b, d, e, w ? 1 : 0, 0));
          };
          c.PDFDocInsertPages2 = function (a, b, d, e, w) {
            REX(Module._TRN_PDFDocInsertPageSet2(a, b, d, e, w ? 1 : 0, 0));
          };
          c.PDFDocMovePages = function (a, b, d) {
            REX(Module._TRN_PDFDocMovePageSet(a, b, a, d, 0, 0));
          };
          c.PDFDocGetPageIterator = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetPageIterator(a, b, d));
            return Module.getValue(d, "i8*");
          };
          c.PDFDocPageRemove = function (a, b) {
            REX(Module._TRN_PDFDocPageRemove(a, b));
          };
          c.PDFDocPageRemove2 = function (a, b) {
            REX(Module._TRN_PDFDocPageRemove2(a, b));
          };
          c.PDFDocPageCreate = function (a, b, d) {
            var e = Module.allocate(40, "i8", Module.ALLOC_STACK);
            Module.setValue(e, 0, "double");
            Module.setValue(e + 8, 0, "double");
            Module.setValue(e + 16, b, "double");
            Module.setValue(e + 24, d, "double");
            Module.setValue(e + 32, 0, "double");
            b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocPageCreate(a, e, b));
            return Module.getValue(b, "i8*");
          };
          c.PDFDocPageInsert = function (a, b, d) {
            REX(Module._TRN_PDFDocPageInsert(a, b, d));
          };
          c.PageSetCreate = function () {
            var a = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageSetCreate(a));
            return Module.getValue(a, "i8*");
          };
          c.PageSetCreateRange = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PageSetCreateRange(d, a, b));
            return Module.getValue(d, "i8*");
          };
          c.PageSetAddPage = function (a, b) {
            REX(Module._TRN_PageSetAddPage(a, b));
          };
          c.ElementBuilderCreate = function () {
            var a = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ElementBuilderCreate(a));
            return Module.getValue(a, "i8*");
          };
          c.ElementBuilderDestroy = function (a) {
            REX(Module._TRN_ElementBuilderDestroy(a));
          };
          c.ElementBuilderCreateImage = function (a, b, d, e, w, C) {
            var y = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(
              Module._TRN_ElementBuilderCreateImageScaled(a, b, d, e, w, C, y),
            );
            return Module.getValue(y, "i8*");
          };
          c.ElementWriterCreate = function () {
            var a = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ElementWriterCreate(a));
            return Module.getValue(a, "i8*");
          };
          c.ElementWriterDestroy = function (a) {
            REX(Module._TRN_ElementWriterDestroy(a));
          };
          c.ElementWriterBegin = function (a, b) {
            REX(Module._TRN_ElementWriterBeginOnPage(a, b, 1, 1, 1, 0));
          };
          c.ElementWriterWritePlacedElement = function (a, b) {
            REX(Module._TRN_ElementWriterWritePlacedElement(a, b));
          };
          c.ElementWriterEnd = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ElementWriterEnd(a, b));
          };
          c.ImageGetImageWidth = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ImageGetImageWidth(a, b));
            return Module.getValue(b, "i32");
          };
          c.ImageGetImageHeight = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ImageGetImageHeight(a, b));
            return Module.getValue(b, "i32");
          };
          c.ImageCreateFromMemory2 = function (a, b, d) {
            var e = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ImageCreateFromMemory2(a, b, d, 0, e));
            return Module.getValue(e, "i8*");
          };
          c.ImageCreateFromFile = function (a, b) {
            var d = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_ImageCreateFromFile(a, b, 0, d));
            return Module.getValue(d, "i8*");
          };
          c.PDFDocPagePushBack = function (a, b) {
            REX(Module._TRN_PDFDocPagePushBack(a, b));
          };
          c.PDFDocHasOC = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocHasOC(a, b));
            return 0 !== Module.getValue(b, "i8");
          };
          c.PDFDocGetOCGConfig = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetOCGConfig(a, b));
            return Module.getValue(b, "i8*");
          };
          c.OCGContextCreate = function (a) {
            var b = Module.allocate(4, "i8", Module.ALLOC_STACK);
            REX(Module._TRN_OCGContextCreateFromConfig(a, b));
            return Module.getValue(b, "i8*");
          };
          c.UStringDestroy = function (a) {
            REX(Module._TRN_UStringDestroy(a));
          };
          c.PDFDocFDFUpdate = function (a, b, d) {
            if (d) {
              for (
                var e = Object.keys(d),
                  w = e.length,
                  C = Module._malloc(8 * w),
                  y = 0;
                y < w;
                ++y
              ) {
                var E = 8 * y,
                  L = e[y],
                  N = Module.GetDoc(d[L]);
                L = Module.GetUStringFromJSString(L);
                Module.setValue(C + E, N, "i8*");
                Module.setValue(C + E + 4, L, "i8*");
              }
              d = Module.allocate(8, "i8", Module.ALLOC_STACK);
              REX(Module._TRN_PDFDocFDFUpdateAppearanceDocs(a, b, C, w, d));
              a = Module.getValue(d, "i8*");
              b = Module.VectorGetSize(a);
              w = Array(b);
              for (C = 0; C < b; ++C)
                ((d = Module.VectorGetAt(a, C)),
                  (w[C] = Module.ExtractApRefChangeData(d)));
              Module.VectorDestroy(a);
              if (b) return w;
            } else REX(Module._TRN_PDFDocFDFUpdate(a, b));
          };
          c.FDFDocDestroy = function (a) {
            REX(Module._TRN_FDFDocDestroy(a));
          };
        })(r.Module);
      }).call(this, u(10).setImmediate);
    },
    function (v, A, u) {
      function p(n) {
        "@babel/helpers - typeof";
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (x) {
                  return typeof x;
                }
              : function (x) {
                  return x &&
                    "function" == typeof Symbol &&
                    x.constructor === Symbol &&
                    x !== Symbol.prototype
                    ? "symbol"
                    : typeof x;
                }),
          p(n)
        );
      }
      (function (n) {
        n.SetupPDFNetFunctions = function (x) {
          Module._IB_ = [];
          for (
            var l = function (g) {
                if ("object" === p(g) && null !== g)
                  if ("undefined" !== typeof g.byteLength) {
                    var z = Module._IB_.length;
                    Module._IB_[z] = new Uint8Array(g);
                    g = { handle: z, isArrayBufferRef: !0 };
                  } else
                    Object.keys(g).forEach(function (G) {
                      g.hasOwnProperty(G) && (g[G] = l(g[G]));
                    });
                return g;
              },
              r = function (g) {
                "object" === p(g) &&
                  null !== g &&
                  (g.buffer
                    ? (g = g.buffer.slice(
                        g.byteOffset,
                        g.byteOffset + g.length,
                      ))
                    : g.isArrayBufferRef
                      ? (g = Module._IB_[g.handle].buffer)
                      : Object.keys(g).forEach(function (z) {
                          g.hasOwnProperty(z) && (g[z] = r(g[z]));
                        }));
                return g;
              },
              c = Module._TRN_EMSCreateSharedWorkerInstance(),
              m,
              f = Module._TRN_EMSWorkerInstanceGetFunctionIterator(c),
              k = function (g, z) {
                return new Promise(function (G, D) {
                  g = l(g);
                  var H = g.docId;
                  H = H ? Module.GetDoc(H) : 0;
                  (H = Module.EMSCallSharedFunction(c, z, H))
                    ? D({
                        type: "PDFWorkerError",
                        message: Module.GetErrToString(H),
                      })
                    : ((D = Module.EMSGetLastResponse(c)), (D = r(D)), G(D));
                });
              };
            (m = Module._TRN_EMSFunctionIteratorGetNextCommandName(f));

          )
            ((m = Module.GetJSStringFromCString(m)), n.queue.onAsync(m, k));
          Module._TRN_EMSFunctionIteratorDestroy(f);
          if (Module._TRN_EMSCreatePDFNetWorkerInstance) {
            var h = {};
            f = function (g, z) {
              x.on(g, z);
              h[g] = !0;
            };
            Module.docPtrStringToIdMap = {};
            var t = function (g) {
              if (g in Module.docPtrStringToIdMap)
                return Module.docPtrStringToIdMap[g];
              throw Error("Couldn't find document ".concat(g));
            };
            n.queue.onAsync("PDFDoc.RequirePage", function (g) {
              return Module.RequirePage(t(g.docId), g.pageNum);
            });
            f("pdfDocCreateFromBuffer", function (g) {
              g = Module.CreateDoc({ type: "array", value: g.buf });
              var z = Module.GetDoc(g).toString(16);
              Module.docPtrStringToIdMap[z] = g;
              return z;
            });
            f("PDFDoc.destroy", function (g) {
              g = t(g.auto_dealloc_obj);
              Module.DeleteDoc(g);
            });
            f("PDFDoc.saveMemoryBuffer", function (g) {
              var z = t(g.doc);
              return Module.SaveHelper(Module.GetDoc(z), z, g.flags).slice(0);
            });
            f("pdfDocCreate", function () {
              var g = Module.CreateDoc({ type: "new" }),
                z = Module.GetDoc(g).toString(16);
              Module.docPtrStringToIdMap[z] = g;
              return z;
            });
            f("GetPDFDoc", function (g) {
              g = g.docId;
              var z = Module.GetDoc(g).toString(16);
              Module.docPtrStringToIdMap[z] = g;
              return z;
            });
            f("ExtractPDFNetLayersContext", function (g) {
              var z = g.layers;
              g = Module.GetDoc(g.docId);
              var G = 0;
              z
                ? (G = Module.EMSCreateUpdatedLayersContext(g, z))
                : Module.PDFDocHasOC(g) &&
                  ((z = Module.PDFDocGetOCGConfig(g)),
                  (G = Module.OCGContextCreate(z)));
              return G.toString(16);
            });
            var q = Module._TRN_EMSCreatePDFNetWorkerInstance();
            f = Module._TRN_EMSWorkerInstanceGetFunctionIterator(q);
            for (
              k = function (g) {
                return new Promise(function (z, G) {
                  g = l(g);
                  var D = Module.EMSCallPDFNetFunction(q, g);
                  D
                    ? G(Module.GetErrToString(D))
                    : ((G = Module.EMSGetLastResponse(q)), (G = r(G)), z(G));
                });
              };
              (m = Module._TRN_EMSFunctionIteratorGetNextCommandName(f));

            )
              if (((m = Module.GetJSStringFromCString(m)), !h[m]))
                x.onAsync(m, k);
            Module._TRN_EMSFunctionIteratorDestroy(f);
          }
        };
      })(self);
    },
    function (v, A, u) {
      v = u(9);
      var p = u.n(v),
        n = u(17),
        x = u(18),
        l = u(7),
        r = u(19),
        c = u(1),
        m = u(20);
      (function (f) {
        var k = null;
        f.basePath = "../";
        var h = function () {
          var q = f.pdfWorkerPath || "";
          f.workerBasePath && (f.basePath = f.workerBasePath);
          var g = f.isFull,
            z = g ? "full/" : "lean/";
          f.useOptimizedWorker && (z += m.a);
          var G = f.wasmDisabled,
            D = f.disableObjectURLBlobs,
            H = f.pdfWorkerChunkPaths;
          Object(c.c)();
          f.overriddenPdfWorkerPath &&
            ((q = f.overriddenPdfWorkerPath),
            (f.basePath = "../"),
            !Object(l.a)() || G) &&
            (q = "");
          f.basePath = f.externalPath
            ? f.externalPath
            : f.basePath + "external/";
          Object(r.a)(
            "".concat(q + z, "PDFNetC"),
            {
              "Wasm.wasm": g ? 1e7 : 4e6,
              "Wasm.js.mem": 1e5,
              ".js.mem": 12e6,
              ".mem": g ? 2e6 : 6e5,
              disableObjectURLBlobs: D,
            },
            G,
            H,
          );
        };
        f.EmscriptenPDFManager = function () {};
        f.EmscriptenPDFManager.prototype = {
          OnInitialized: function (q) {
            Module.loaded
              ? q()
              : ((Module.initCb = function () {
                  q();
                }),
                Object(c.b)("worker", "PDFNet is not initialized yet!"));
          },
          NewDoc: function (q, g) {
            return new Promise(function (z, G) {
              try {
                z(Module.loadDoc(q, g));
              } catch (D) {
                G(D);
              }
            });
          },
          Initialize: function (q, g, z, G) {
            q && (Module.TOTAL_MEMORY = q);
            Module.memoryInitializerPrefixURL = g;
            Module.asmjsPrefix = z;
            f.basePath = G;
            h();
          },
          shouldRunRender: function (q) {
            return Module.ShouldRunRender(q.docId, q.pageIndex + 1);
          },
        };
        var t = {
          setup: function (q) {
            function g(e) {
              var w = e.data,
                C = e.action;
              var y =
                "GetCanvas" === C || "GetCanvasPartial" === C
                  ? H.shouldRunRender(w)
                  : !0;
              if (y) {
                k = e;
                var E = e.asyncCallCapability;
                Object(c.b)("Memory", "Worker running command: ".concat(C));
                I.actionMap[C](w, e).then(
                  function (L) {
                    "BeginOperation" !== k.action && (k = null);
                    E.resolve(L);
                  },
                  function (L) {
                    k = null;
                    E.reject(L);
                  },
                );
              } else (f.deferredQueue.queue(e), D());
            }
            function z(e) {
              e.asyncCallCapability = createPromiseCapability();
              k || I.length ? I.queue(e) : g(e);
              return e.asyncCallCapability.promise;
            }
            function G(e) {
              self.shouldResize &&
                H.Initialize(
                  e.options.workerHeapSize,
                  e.options.pdfResourcePath,
                  e.options.pdfAsmPath,
                  e.options.parentUrl,
                );
              Module.chunkMax = e.options.chunkMax;
              if (e.array instanceof Uint8Array) {
                var w = 255 === e.array[0];
                q.postMessageTransfers = w;
                "response" in new XMLHttpRequest()
                  ? H.OnInitialized(function () {
                      f.SetupPDFNetFunctions(q);
                      a();
                      q.send("test", {
                        supportTypedArray: !0,
                        supportTransfers: w,
                      });
                    })
                  : q.send("test", !1);
              } else q.send("test", !1);
            }
            function D() {
              n.a.setImmediate(function () {
                if ((!k || "BeginOperation" !== k.action) && I.length && !k) {
                  var e = I.dequeue();
                  g(e);
                }
              });
            }
            var H = new f.EmscriptenPDFManager(),
              I,
              J = !1,
              F = !1;
            Module.workerMessageHandler = q;
            var a = function () {
              J ? F || (q.send("workerLoaded", {}), (F = !0)) : (J = !0);
            };
            H.OnInitialized(a);
            (function () {
              f.queue = I = new p.a({
                strategy: p.a.ArrayStrategy,
                comparator: function (e, w) {
                  return e.priority === w.priority
                    ? e.callbackId - w.callbackId
                    : w.priority - e.priority;
                },
              });
              f.deferredQueue = new p.a({
                strategy: p.a.ArrayStrategy,
                comparator: function (e, w) {
                  return e.priority === w.priority
                    ? e.callbackId - w.callbackId
                    : w.priority - e.priority;
                },
              });
              I.actionMap = {};
              I.onAsync = function (e, w) {
                q.onAsync(e, z);
                I.actionMap[e] = w;
              };
            })();
            q.on("test", G);
            q.on("InitWorker", G);
            var b = function (e) {
                k && e(k) && (Module.cancelCurrent(), (k = null));
                I.removeAllMatching(e, function (w) {
                  w.asyncCallCapability.reject({
                    type: "Cancelled",
                    message:
                      "Operation was cancelled due to a change affecting the loaded document.",
                  });
                });
              },
              d = function (e) {
                b(function (w) {
                  return w.data && w.data.docId === e;
                });
              };
            q.on("UpdatePassword", function (e) {
              return Module.UpdatePassword(e.docId, e.password);
            });
            q.on("UpdateCustomHeader", function (e) {
              return Module.UpdateCustomHeader(e.docId, e.customHeader);
            });
            q.on("LoadRes", function (e) {
              Module.loadResources(e.array, e.l);
              return {};
            });
            q.on("DownloaderHint", function (e) {
              Module.DownloaderHint(e.docId, e.hint);
            });
            q.on("IsLinearized", function (e) {
              return Module.IsLinearizationValid(e.docId);
            });
            q.onNextAsync(D);
            I.onAsync("NewDoc", function (e) {
              return H.NewDoc(e);
            });
            I.onAsync("GetCanvas", function (e) {
              Object(c.b)(
                "workerdetails",
                "Run GetCanvas PageIdx: "
                  .concat(e.pageIndex, " Width: ")
                  .concat(e.width),
              );
              Object(c.b)(
                "Memory",
                "loadCanvas with potential memory usage ".concat(
                  e.width * e.height * 8,
                ),
              );
              return Module.loadCanvas(
                e.docId,
                e.pageIndex,
                e.width,
                e.height,
                e.rotation,
                null,
                e.layers,
                e.renderOptions,
              );
            });
            I.onAsync("GetCanvasPartial", function (e) {
              Object(c.b)(
                "Memory",
                "GetCanvasPartial with potential memory usage ".concat(
                  e.width * e.height * 8,
                ),
              );
              return Module.loadCanvas(
                e.docId,
                e.pageIndex,
                e.width,
                e.height,
                e.rotation,
                e.bbox,
                e.layers,
                e.renderOptions,
              );
            });
            I.onAsync("SaveDoc", function (e) {
              return Module.SaveDoc(
                e.docId,
                e.xfdfString,
                e.finishedWithDocument,
                e.printDocument,
                e.flags,
                e.watermarks,
                e.apdocs,
                e.password,
                e.encryptionAlgorithmType,
              );
            });
            I.onAsync("SaveDocFromFixedElements", function (e) {
              return Module.SaveDocFromFixedElements(
                e.bytes,
                e.xfdfString,
                e.flags,
                e.watermarks,
                e.password,
                e.encryptionAlgorithmType,
              );
            });
            I.onAsync("MergeXFDF", function (e) {
              return Module.MergeXFDF(e.docId, e.xfdf, e.apdocs);
            });
            I.onAsync("InsertPages", function (e) {
              return Module.InsertPages(
                e.docId,
                e.doc,
                e.pageArray,
                e.destPos,
                e.insertBookmarks,
                e.skipUpdateEvent,
              );
            });
            I.onAsync("MovePages", function (e) {
              return Module.MovePages(e.docId, e.pageArray, e.destPos);
            });
            I.onAsync("RemovePages", function (e) {
              return Module.RemovePages(
                e.docId,
                e.pageArray,
                e.skipUpdateEvent,
              );
            });
            I.onAsync("RotatePages", function (e) {
              return Module.RotatePages(e.docId, e.pageArray, e.rotation);
            });
            I.onAsync("ExtractPages", function (e) {
              return Module.ExtractPages(
                e.docId,
                e.pageArray,
                e.xfdfString,
                e.watermarks,
                e.apdocs,
                e.skipUpdateEvent,
              );
            });
            I.onAsync("CropPages", function (e) {
              return Module.CropPages(
                e.docId,
                e.pageArray,
                e.topMargin,
                e.botMargin,
                e.leftMargin,
                e.rightMargin,
              );
            });
            I.onAsync("TriggerFullDownload", function (e) {
              return Module.TriggerFullDownload(e.docId);
            });
            I.onAsync("InsertBlankPages", function (e) {
              return Module.InsertBlankPages(
                e.docId,
                e.pageArray,
                e.width,
                e.height,
              );
            });
            I.onAsync("BeginOperation", function () {
              return Promise.resolve();
            });
            I.onAsync("RequirePage", function (e, w) {
              return Module.RequirePage(e.docId, e.pageNum);
            });
            q.on("FinishOperation", function () {
              if (k && "BeginOperation" === k.action) ((k = null), D());
              else throw { message: "Operation has not started." };
            });
            q.on("DeleteDocument", function (e) {
              e = e.docId;
              d(e);
              Module.DeleteDoc(e);
            });
            q.on("GetCanvasProgressive", function (e) {
              if (k && k.callbackId === e.callbackId) {
                Object(c.b)("worker", "Progressive request in progress");
                var w = Module.GetCurrentCanvasData(!0);
              } else {
                if (I.find({ priority: 0, callbackId: e.callbackId }))
                  throw (
                    Object(c.b)("worker", "Progressive request Queued"),
                    {
                      type: "Queued",
                      message: "Rendering has not started yet.",
                    }
                  );
                if (
                  f.deferredQueue.find({
                    priority: 0,
                    callbackId: e.callbackId,
                  })
                )
                  throw (
                    Object(c.b)("worker", "Progressive request Deferred"),
                    {
                      type: "Queued",
                      message: "Rendering has not started yet.",
                    }
                  );
              }
              if (!w)
                throw (
                  Object(c.b)(
                    "worker",
                    "Progressive request invalid (render already complete)",
                  ),
                  {
                    type: "Unavailable",
                    message: "Rendering is complete or was cancelled.",
                  }
                );
              return w;
            });
            q.on("actionCancel", function (e) {
              k && k.callbackId === e.callbackId
                ? (Object(c.b)("workerdetails", "Cancelled Current Operation"),
                  Module.cancelCurrent() && ((k = null), D()))
                : (Object(c.b)("workerdetails", "Cancelled queued operation"),
                  I.remove({ priority: 0, callbackId: e.callbackId }),
                  f.deferredQueue.remove({
                    priority: 0,
                    callbackId: e.callbackId,
                  }));
            });
          },
        };
        f.onmessage = function (q) {
          if ("init" === q.data.action) {
            var g = q.data.shouldResize;
            f.shouldResize = g;
            f.isFull = q.data.isFull;
            f.wasmDisabled = !q.data.wasm;
            f.externalPath = q.data.externalPath;
            f.useOptimizedWorker = q.data.useOptimizedWorker;
            f.disableObjectURLBlobs = q.data.disableObjectURLBlobs;
            f.pdfWorkerChunkPaths = q.data.pdfWorkerChunkPaths;
            if ((q = q.data.pdfWorkerPath)) f.overriddenPdfWorkerPath = q;
            g || h();
            g = new x.a("worker_processor", self);
            Object(c.a)(g);
            t.setup(g);
          }
        };
      })("undefined" === typeof window ? self : window);
    },
  ]);
}).call(this || window);
