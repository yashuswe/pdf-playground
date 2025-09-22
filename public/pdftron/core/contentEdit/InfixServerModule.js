(function () {
  /*
 @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE  The buffer module from node.js, for the browser.

 @author   Feross Aboukhadijeh <http://feross.org>
 @license  MIT
*/
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (t) {
    var u = 0;
    return function () {
      return u < t.length ? { done: !1, value: t[u++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (t) {
    return { next: $jscomp.arrayIteratorImpl(t) };
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
      : function (t, u, n) {
          if (t == Array.prototype || t == Object.prototype) return t;
          t[u] = n.value;
          return t;
        };
  $jscomp.getGlobal = function (t) {
    t = [
      "object" == typeof globalThis && globalThis,
      t,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var u = 0; u < t.length; ++u) {
      var n = t[u];
      if (n && n.Math == Math) return n;
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
  var $jscomp$lookupPolyfilledValue = function (t, u, n) {
    if (!n || null != t) {
      n = $jscomp.propertyToPolyfillSymbol[u];
      if (null == n) return t[u];
      n = t[n];
      return void 0 !== n ? n : t[u];
    }
  };
  $jscomp.polyfill = function (t, u, n, k) {
    u &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(t, u, n, k)
        : $jscomp.polyfillUnisolated(t, u, n, k));
  };
  $jscomp.polyfillUnisolated = function (t, u, n, k) {
    n = $jscomp.global;
    t = t.split(".");
    for (k = 0; k < t.length - 1; k++) {
      var g = t[k];
      if (!(g in n)) return;
      n = n[g];
    }
    t = t[t.length - 1];
    k = n[t];
    u = u(k);
    u != k &&
      null != u &&
      $jscomp.defineProperty(n, t, {
        configurable: !0,
        writable: !0,
        value: u,
      });
  };
  $jscomp.polyfillIsolated = function (t, u, n, k) {
    var g = t.split(".");
    t = 1 === g.length;
    k = g[0];
    k = !t && k in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var p = 0; p < g.length - 1; p++) {
      var d = g[p];
      if (!(d in k)) return;
      k = k[d];
    }
    g = g[g.length - 1];
    n = $jscomp.IS_SYMBOL_NATIVE && "es6" === n ? k[g] : null;
    u = u(n);
    null != u &&
      (t
        ? $jscomp.defineProperty($jscomp.polyfills, g, {
            configurable: !0,
            writable: !0,
            value: u,
          })
        : u !== n &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[g] &&
            ((n = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[g] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(g)
              : $jscomp.POLYFILL_PREFIX + n + "$" + g)),
          $jscomp.defineProperty(k, $jscomp.propertyToPolyfillSymbol[g], {
            configurable: !0,
            writable: !0,
            value: u,
          })));
  };
  $jscomp.initSymbol = function () {};
  $jscomp.polyfill(
    "Symbol",
    function (t) {
      if (t) return t;
      var u = function (p, d) {
        this.$jscomp$symbol$id_ = p;
        $jscomp.defineProperty(this, "description", {
          configurable: !0,
          writable: !0,
          value: d,
        });
      };
      u.prototype.toString = function () {
        return this.$jscomp$symbol$id_;
      };
      var n = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        k = 0,
        g = function (p) {
          if (this instanceof g)
            throw new TypeError("Symbol is not a constructor");
          return new u(n + (p || "") + "_" + k++, p);
        };
      return g;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Symbol.iterator",
    function (t) {
      if (t) return t;
      t = Symbol("Symbol.iterator");
      for (
        var u =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " ",
            ),
          n = 0;
        n < u.length;
        n++
      ) {
        var k = $jscomp.global[u[n]];
        "function" === typeof k &&
          "function" != typeof k.prototype[t] &&
          $jscomp.defineProperty(k.prototype, t, {
            configurable: !0,
            writable: !0,
            value: function () {
              return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
            },
          });
      }
      return t;
    },
    "es6",
    "es3",
  );
  $jscomp.iteratorPrototype = function (t) {
    t = { next: t };
    t[Symbol.iterator] = function () {
      return this;
    };
    return t;
  };
  $jscomp.makeIterator = function (t) {
    var u =
      "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
    if (u) return u.call(t);
    if ("number" == typeof t.length) return $jscomp.arrayIterator(t);
    throw Error(String(t) + " is not an iterable or ArrayLike");
  };
  $jscomp.arrayFromIterator = function (t) {
    for (var u, n = []; !(u = t.next()).done; ) n.push(u.value);
    return n;
  };
  $jscomp.arrayFromIterable = function (t) {
    return t instanceof Array
      ? t
      : $jscomp.arrayFromIterator($jscomp.makeIterator(t));
  };
  $jscomp.polyfill(
    "Promise",
    function (t) {
      function u() {
        this.batch_ = null;
      }
      function n(d) {
        return d instanceof g
          ? d
          : new g(function (r, h) {
              r(d);
            });
      }
      if (
        t &&
        (!(
          $jscomp.FORCE_POLYFILL_PROMISE ||
          ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
            "undefined" === typeof $jscomp.global.PromiseRejectionEvent)
        ) ||
          !$jscomp.global.Promise ||
          -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))
      )
        return t;
      u.prototype.asyncExecute = function (d) {
        if (null == this.batch_) {
          this.batch_ = [];
          var r = this;
          this.asyncExecuteFunction(function () {
            r.executeBatch_();
          });
        }
        this.batch_.push(d);
      };
      var k = $jscomp.global.setTimeout;
      u.prototype.asyncExecuteFunction = function (d) {
        k(d, 0);
      };
      u.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var d = this.batch_;
          this.batch_ = [];
          for (var r = 0; r < d.length; ++r) {
            var h = d[r];
            d[r] = null;
            try {
              h();
            } catch (m) {
              this.asyncThrow_(m);
            }
          }
        }
        this.batch_ = null;
      };
      u.prototype.asyncThrow_ = function (d) {
        this.asyncExecuteFunction(function () {
          throw d;
        });
      };
      var g = function (d) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var r = this.createResolveAndReject_();
        try {
          d(r.resolve, r.reject);
        } catch (h) {
          r.reject(h);
        }
      };
      g.prototype.createResolveAndReject_ = function () {
        function d(m) {
          return function (q) {
            h || ((h = !0), m.call(r, q));
          };
        }
        var r = this,
          h = !1;
        return { resolve: d(this.resolveTo_), reject: d(this.reject_) };
      };
      g.prototype.resolveTo_ = function (d) {
        if (d === this)
          this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (d instanceof g) this.settleSameAsPromise_(d);
        else {
          a: switch (typeof d) {
            case "object":
              var r = null != d;
              break a;
            case "function":
              r = !0;
              break a;
            default:
              r = !1;
          }
          r ? this.resolveToNonPromiseObj_(d) : this.fulfill_(d);
        }
      };
      g.prototype.resolveToNonPromiseObj_ = function (d) {
        var r = void 0;
        try {
          r = d.then;
        } catch (h) {
          this.reject_(h);
          return;
        }
        "function" == typeof r
          ? this.settleSameAsThenable_(r, d)
          : this.fulfill_(d);
      };
      g.prototype.reject_ = function (d) {
        this.settle_(2, d);
      };
      g.prototype.fulfill_ = function (d) {
        this.settle_(1, d);
      };
      g.prototype.settle_ = function (d, r) {
        if (0 != this.state_)
          throw Error(
            "Cannot settle(" +
              d +
              ", " +
              r +
              "): Promise already settled in state" +
              this.state_,
          );
        this.state_ = d;
        this.result_ = r;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      g.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var d = this;
        k(function () {
          if (d.notifyUnhandledRejection_()) {
            var r = $jscomp.global.console;
            "undefined" !== typeof r && r.error(d.result_);
          }
        }, 1);
      };
      g.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var d = $jscomp.global.CustomEvent,
          r = $jscomp.global.Event,
          h = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof h) return !0;
        "function" === typeof d
          ? (d = new d("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof r
            ? (d = new r("unhandledrejection", { cancelable: !0 }))
            : ((d = $jscomp.global.document.createEvent("CustomEvent")),
              d.initCustomEvent("unhandledrejection", !1, !0, d));
        d.promise = this;
        d.reason = this.result_;
        return h(d);
      };
      g.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var d = 0; d < this.onSettledCallbacks_.length; ++d)
            p.asyncExecute(this.onSettledCallbacks_[d]);
          this.onSettledCallbacks_ = null;
        }
      };
      var p = new u();
      g.prototype.settleSameAsPromise_ = function (d) {
        var r = this.createResolveAndReject_();
        d.callWhenSettled_(r.resolve, r.reject);
      };
      g.prototype.settleSameAsThenable_ = function (d, r) {
        var h = this.createResolveAndReject_();
        try {
          d.call(r, h.resolve, h.reject);
        } catch (m) {
          h.reject(m);
        }
      };
      g.prototype.then = function (d, r) {
        function h(B, A) {
          return "function" == typeof B
            ? function (L) {
                try {
                  m(B(L));
                } catch (y) {
                  q(y);
                }
              }
            : A;
        }
        var m,
          q,
          x = new g(function (B, A) {
            m = B;
            q = A;
          });
        this.callWhenSettled_(h(d, m), h(r, q));
        return x;
      };
      g.prototype.catch = function (d) {
        return this.then(void 0, d);
      };
      g.prototype.callWhenSettled_ = function (d, r) {
        function h() {
          switch (m.state_) {
            case 1:
              d(m.result_);
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
          ? p.asyncExecute(h)
          : this.onSettledCallbacks_.push(h);
        this.isRejectionHandled_ = !0;
      };
      g.resolve = n;
      g.reject = function (d) {
        return new g(function (r, h) {
          h(d);
        });
      };
      g.race = function (d) {
        return new g(function (r, h) {
          for (
            var m = $jscomp.makeIterator(d), q = m.next();
            !q.done;
            q = m.next()
          )
            n(q.value).callWhenSettled_(r, h);
        });
      };
      g.all = function (d) {
        var r = $jscomp.makeIterator(d),
          h = r.next();
        return h.done
          ? n([])
          : new g(function (m, q) {
              function x(L) {
                return function (y) {
                  B[L] = y;
                  A--;
                  0 == A && m(B);
                };
              }
              var B = [],
                A = 0;
              do
                (B.push(void 0),
                  A++,
                  n(h.value).callWhenSettled_(x(B.length - 1), q),
                  (h = r.next()));
              while (!h.done);
            });
      };
      return g;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Array.from",
    function (t) {
      return t
        ? t
        : function (u, n, k) {
            n =
              null != n
                ? n
                : function (r) {
                    return r;
                  };
            var g = [],
              p =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                u[Symbol.iterator];
            if ("function" == typeof p) {
              u = p.call(u);
              for (var d = 0; !(p = u.next()).done; )
                g.push(n.call(k, p.value, d++));
            } else
              for (p = u.length, d = 0; d < p; d++) g.push(n.call(k, u[d], d));
            return g;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.checkStringArgs = function (t, u, n) {
    if (null == t)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          n +
          " must not be null or undefined",
      );
    if (u instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          n +
          " must not be a regular expression",
      );
    return t + "";
  };
  $jscomp.polyfill(
    "String.prototype.endsWith",
    function (t) {
      return t
        ? t
        : function (u, n) {
            var k = $jscomp.checkStringArgs(this, u, "endsWith");
            u += "";
            void 0 === n && (n = k.length);
            n = Math.max(0, Math.min(n | 0, k.length));
            for (var g = u.length; 0 < g && 0 < n; )
              if (k[--n] != u[--g]) return !1;
            return 0 >= g;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var t = {},
        u = Object.create(
          new $jscomp.global.Proxy(t, {
            get: function (n, k, g) {
              return n == t && "q" == k && g == u;
            },
          }),
        );
      return !0 === u.q;
    } catch (n) {
      return !1;
    }
  };
  $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
  $jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy();
  $jscomp.owns = function (t, u) {
    return Object.prototype.hasOwnProperty.call(t, u);
  };
  $jscomp.polyfill(
    "WeakMap",
    function (t) {
      function u() {
        if (!t || !Object.seal) return !1;
        try {
          var m = Object.seal({}),
            q = Object.seal({}),
            x = new t([
              [m, 2],
              [q, 3],
            ]);
          if (2 != x.get(m) || 3 != x.get(q)) return !1;
          x.delete(m);
          x.set(q, 4);
          return !x.has(m) && 4 == x.get(q);
        } catch (B) {
          return !1;
        }
      }
      function n() {}
      function k(m) {
        var q = typeof m;
        return ("object" === q && null !== m) || "function" === q;
      }
      function g(m) {
        if (!$jscomp.owns(m, d)) {
          var q = new n();
          $jscomp.defineProperty(m, d, { value: q });
        }
      }
      function p(m) {
        if (!$jscomp.ISOLATE_POLYFILLS) {
          var q = Object[m];
          q &&
            (Object[m] = function (x) {
              if (x instanceof n) return x;
              Object.isExtensible(x) && g(x);
              return q(x);
            });
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (t && $jscomp.ES6_CONFORMANCE) return t;
      } else if (u()) return t;
      var d = "$jscomp_hidden_" + Math.random();
      p("freeze");
      p("preventExtensions");
      p("seal");
      var r = 0,
        h = function (m) {
          this.id_ = (r += Math.random() + 1).toString();
          if (m) {
            m = $jscomp.makeIterator(m);
            for (var q; !(q = m.next()).done; )
              ((q = q.value), this.set(q[0], q[1]));
          }
        };
      h.prototype.set = function (m, q) {
        if (!k(m)) throw Error("Invalid WeakMap key");
        g(m);
        if (!$jscomp.owns(m, d)) throw Error("WeakMap key fail: " + m);
        m[d][this.id_] = q;
        return this;
      };
      h.prototype.get = function (m) {
        return k(m) && $jscomp.owns(m, d) ? m[d][this.id_] : void 0;
      };
      h.prototype.has = function (m) {
        return k(m) && $jscomp.owns(m, d) && $jscomp.owns(m[d], this.id_);
      };
      h.prototype.delete = function (m) {
        return k(m) && $jscomp.owns(m, d) && $jscomp.owns(m[d], this.id_)
          ? delete m[d][this.id_]
          : !1;
      };
      return h;
    },
    "es6",
    "es3",
  );
  $jscomp.MapEntry = function () {};
  $jscomp.polyfill(
    "Map",
    function (t) {
      function u() {
        if (
          $jscomp.ASSUME_NO_NATIVE_MAP ||
          !t ||
          "function" != typeof t ||
          !t.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var h = Object.seal({ x: 4 }),
            m = new t($jscomp.makeIterator([[h, "s"]]));
          if (
            "s" != m.get(h) ||
            1 != m.size ||
            m.get({ x: 4 }) ||
            m.set({ x: 4 }, "t") != m ||
            2 != m.size
          )
            return !1;
          var q = m.entries(),
            x = q.next();
          if (x.done || x.value[0] != h || "s" != x.value[1]) return !1;
          x = q.next();
          return x.done ||
            4 != x.value[0].x ||
            "t" != x.value[1] ||
            !q.next().done
            ? !1
            : !0;
        } catch (B) {
          return !1;
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (t && $jscomp.ES6_CONFORMANCE) return t;
      } else if (u()) return t;
      var n = new WeakMap(),
        k = function (h) {
          this.data_ = {};
          this.head_ = d();
          this.size = 0;
          if (h) {
            h = $jscomp.makeIterator(h);
            for (var m; !(m = h.next()).done; )
              ((m = m.value), this.set(m[0], m[1]));
          }
        };
      k.prototype.set = function (h, m) {
        h = 0 === h ? 0 : h;
        var q = g(this, h);
        q.list || (q.list = this.data_[q.id] = []);
        q.entry
          ? (q.entry.value = m)
          : ((q.entry = {
              next: this.head_,
              previous: this.head_.previous,
              head: this.head_,
              key: h,
              value: m,
            }),
            q.list.push(q.entry),
            (this.head_.previous.next = q.entry),
            (this.head_.previous = q.entry),
            this.size++);
        return this;
      };
      k.prototype.delete = function (h) {
        h = g(this, h);
        return h.entry && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.data_[h.id],
            (h.entry.previous.next = h.entry.next),
            (h.entry.next.previous = h.entry.previous),
            (h.entry.head = null),
            this.size--,
            !0)
          : !1;
      };
      k.prototype.clear = function () {
        this.data_ = {};
        this.head_ = this.head_.previous = d();
        this.size = 0;
      };
      k.prototype.has = function (h) {
        return !!g(this, h).entry;
      };
      k.prototype.get = function (h) {
        return (h = g(this, h).entry) && h.value;
      };
      k.prototype.entries = function () {
        return p(this, function (h) {
          return [h.key, h.value];
        });
      };
      k.prototype.keys = function () {
        return p(this, function (h) {
          return h.key;
        });
      };
      k.prototype.values = function () {
        return p(this, function (h) {
          return h.value;
        });
      };
      k.prototype.forEach = function (h, m) {
        for (var q = this.entries(), x; !(x = q.next()).done; )
          ((x = x.value), h.call(m, x[1], x[0], this));
      };
      k.prototype[Symbol.iterator] = k.prototype.entries;
      var g = function (h, m) {
          var q = m && typeof m;
          "object" == q || "function" == q
            ? n.has(m)
              ? (q = n.get(m))
              : ((q = "" + ++r), n.set(m, q))
            : (q = "p_" + m);
          var x = h.data_[q];
          if (x && $jscomp.owns(h.data_, q))
            for (h = 0; h < x.length; h++) {
              var B = x[h];
              if ((m !== m && B.key !== B.key) || m === B.key)
                return { id: q, list: x, index: h, entry: B };
            }
          return { id: q, list: x, index: -1, entry: void 0 };
        },
        p = function (h, m) {
          var q = h.head_;
          return $jscomp.iteratorPrototype(function () {
            if (q) {
              for (; q.head != h.head_; ) q = q.previous;
              for (; q.next != q.head; )
                return ((q = q.next), { done: !1, value: m(q) });
              q = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        d = function () {
          var h = {};
          return (h.previous = h.next = h.head = h);
        },
        r = 0;
      return k;
    },
    "es6",
    "es3",
  );
  $jscomp.underscoreProtoCanBeSet = function () {
    var t = { a: !0 },
      u = {};
    try {
      return ((u.__proto__ = t), u.a);
    } catch (n) {}
    return !1;
  };
  $jscomp.setPrototypeOf =
    $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : $jscomp.underscoreProtoCanBeSet()
        ? function (t, u) {
            t.__proto__ = u;
            if (t.__proto__ !== u)
              throw new TypeError(t + " is not extensible");
            return t;
          }
        : null;
  $jscomp.polyfill(
    "Object.setPrototypeOf",
    function (t) {
      return t || $jscomp.setPrototypeOf;
    },
    "es6",
    "es5",
  );
  $jscomp.assign =
    $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign
      ? Object.assign
      : function (t, u) {
          for (var n = 1; n < arguments.length; n++) {
            var k = arguments[n];
            if (k) for (var g in k) $jscomp.owns(k, g) && (t[g] = k[g]);
          }
          return t;
        };
  $jscomp.polyfill(
    "Object.assign",
    function (t) {
      return t || $jscomp.assign;
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "String.prototype.startsWith",
    function (t) {
      return t
        ? t
        : function (u, n) {
            var k = $jscomp.checkStringArgs(this, u, "startsWith");
            u += "";
            var g = k.length,
              p = u.length;
            n = Math.max(0, Math.min(n | 0, k.length));
            for (var d = 0; d < p && n < g; ) if (k[n++] != u[d++]) return !1;
            return d >= p;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Array.prototype.fill",
    function (t) {
      return t
        ? t
        : function (u, n, k) {
            var g = this.length || 0;
            0 > n && (n = Math.max(0, g + n));
            if (null == k || k > g) k = g;
            k = Number(k);
            0 > k && (k = Math.max(0, g + k));
            for (n = Number(n || 0); n < k; n++) this[n] = u;
            return this;
          };
    },
    "es6",
    "es3",
  );
  $jscomp.typedArrayFill = function (t) {
    return t ? t : Array.prototype.fill;
  };
  $jscomp.polyfill(
    "Int8Array.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  $jscomp.polyfill(
    "Uint8Array.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  $jscomp.polyfill(
    "Uint8ClampedArray.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  $jscomp.polyfill(
    "Int16Array.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  $jscomp.polyfill(
    "Uint16Array.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  $jscomp.polyfill(
    "Int32Array.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  $jscomp.polyfill(
    "Uint32Array.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  $jscomp.polyfill(
    "Float32Array.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  $jscomp.polyfill(
    "Float64Array.prototype.fill",
    $jscomp.typedArrayFill,
    "es6",
    "es5",
  );
  (function (t) {
    function u(k) {
      if (n[k]) return n[k].exports;
      var g = (n[k] = { i: k, l: !1, exports: {} });
      t[k].call(g.exports, g, g.exports, u);
      g.l = !0;
      return g.exports;
    }
    var n = {};
    u.m = t;
    u.c = n;
    u.d = function (k, g, p) {
      u.o(k, g) || Object.defineProperty(k, g, { enumerable: !0, get: p });
    };
    u.r = function (k) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(k, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(k, "__esModule", { value: !0 });
    };
    u.t = function (k, g) {
      g & 1 && (k = u(k));
      if (g & 8 || (g & 4 && "object" === typeof k && k && k.__esModule))
        return k;
      var p = Object.create(null);
      u.r(p);
      Object.defineProperty(p, "default", { enumerable: !0, value: k });
      if (g & 2 && "string" != typeof k)
        for (var d in k)
          u.d(
            p,
            d,
            function (r) {
              return k[r];
            }.bind(null, d),
          );
      return p;
    };
    u.n = function (k) {
      var g =
        k && k.__esModule
          ? function () {
              return k["default"];
            }
          : function () {
              return k;
            };
      u.d(g, "a", g);
      return g;
    };
    u.o = function (k, g) {
      return Object.prototype.hasOwnProperty.call(k, g);
    };
    u.p = "/core/contentEdit";
    return u((u.s = 11));
  })([
    function (t, u, n) {
      n.d(u, "b", function () {
        return g;
      });
      n.d(u, "a", function () {
        return p;
      });
      var k = n(2),
        g = function (d, r) {
          Object(k.a)("disableLogs") ||
            (r ? console.warn("".concat(d, ": ").concat(r)) : console.warn(d));
        },
        p = function (d, r) {};
    },
    function (t, u, n) {
      n.d(u, "a", function () {
        return ia;
      });
      n.d(u, "b", function () {
        return ma;
      });
      var k = n(3),
        g = n(0),
        p = n(6),
        d = n(4),
        r = n(5),
        h = "undefined" === typeof window ? self : window,
        m = h.importScripts,
        q = !1,
        x = function (F, v) {
          q ||
            (m(Object(r.a)("".concat(h.basePath, "decode.min.js"))), (q = !0));
          F = Object(d.b)(F);
          F = self.BrotliDecode(F);
          return v ? F : Object(d.a)(F);
        },
        B = function (F, v) {
          return Object(k.b)(void 0, void 0, Promise, function () {
            var e;
            return Object(k.c)(this, function (E) {
              switch (E.label) {
                case 0:
                  return q
                    ? [3, 2]
                    : [
                        4,
                        Object(p.a)(
                          "".concat(
                            self.Core.getWorkerPath(),
                            "external/decode.min.js",
                          ),
                          "Failed to download decode.min.js",
                          window,
                        ),
                      ];
                case 1:
                  (E.sent(), (q = !0), (E.label = 2));
                case 2:
                  return (
                    (e = self.BrotliDecode(Object(d.b)(F))),
                    [2, v ? e : Object(d.a)(e)]
                  );
              }
            });
          });
        };
      (function () {
        function F() {
          this.remainingDataArrays = [];
        }
        F.prototype.processRaw = function (v) {
          return v;
        };
        F.prototype.processBrotli = function (v) {
          this.remainingDataArrays.push(v);
          return null;
        };
        F.prototype.GetNextChunk = function (v) {
          this.decodeFunction ||
            (this.decodeFunction =
              0 === v[0] && 97 === v[1] && 115 === v[2] && 109 === v[3]
                ? this.processRaw
                : this.processBrotli);
          return this.decodeFunction(v);
        };
        F.prototype.End = function () {
          if (this.remainingDataArrays.length) {
            for (var v = this.arrays, e = 0, E = 0; E < v.length; ++E)
              e += v[E].length;
            e = new Uint8Array(e);
            var D = 0;
            for (E = 0; E < v.length; ++E) {
              var M = v[E];
              e.set(M, D);
              D += M.length;
            }
            return x(e, !0);
          }
          return null;
        };
        return F;
      })();
      var A = function (F, v, e) {
          void 0 === v && (v = !0);
          void 0 === e && (e = !1);
          var E = new XMLHttpRequest();
          E.open("GET", F, v);
          F = e && E.overrideMimeType;
          E.responseType = F ? "text" : "arraybuffer";
          F && E.overrideMimeType("text/plain; charset=x-user-defined");
          return E;
        },
        L = function (F, v, e) {
          return new Promise(function (E, D) {
            var M = A(F, v, e);
            M.send();
            M.onload = function () {
              200 === this.status || 0 === this.status
                ? E(M.response)
                : D(Error("Download Failed ".concat(F)));
            };
            M.onerror = function () {
              D(Error("Network error occurred ".concat(F)));
            };
          });
        },
        y = function (F, v) {
          var e = v.decompressFunction,
            E = v.shouldOutputArray,
            D = v.compressedMaximum,
            M = "undefined" !== typeof m ? Date.now() : null;
          try {
            var W = E ? P(F) : F.join("");
            Object(g.a)("worker", "Result length is ".concat(W.length));
            if (W.length < D) {
              var U = e(W, E);
              Object(g.b)(
                "There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this.",
              );
              m &&
                Object(g.a)(
                  "worker",
                  "Decompressed length is ".concat(U.length),
                );
              W = U;
            } else E || (W = Object(d.a)(W));
            if (m) {
              var R = v.paths.join(", ");
              Object(g.a)(
                "worker",
                ""
                  .concat(R, " Decompression took ")
                  .concat(Date.now() - M, " ms"),
              );
            }
            return W;
          } catch (ja) {
            throw Error("Failed to decompress: ".concat(ja));
          }
        },
        P = function (F) {
          F = F.reduce(function (v, e) {
            e = new Uint8Array(e);
            return v.concat(Array.from(e));
          }, []);
          return new Uint8Array(F);
        },
        ea = function (F) {
          var v = !F.shouldOutputArray,
            e = F.paths,
            E = F.isAsync;
          E
            ? (e = Promise.all(
                e.map(function (D) {
                  return L(D, E, v);
                }),
              )
                .then(function (D) {
                  return y(D, F);
                })
                .catch(function (D) {
                  throw Error(
                    "Failed to fetch or decompress files: ".concat(D.message),
                  );
                }))
            : ((e = e.map(function (D) {
                var M = A(D, E, v);
                M.send();
                if (200 === M.status || 0 === M.status) return M.response;
                throw Error("Failed to load ".concat(D));
              })),
              (e = y(e, F)));
          return e;
        },
        ia = function (F) {
          var v = F.lastIndexOf("/");
          -1 === v && (v = 0);
          var e = F.slice(v).replace(".", ".br.");
          m ||
            (e.endsWith(".js.mem")
              ? (e = e.replace(".js.mem", ".mem"))
              : e.endsWith(".js") && (e = e.concat(".mem")));
          return F.slice(0, v) + e;
        },
        O = function (F) {
          return F.map(function (v) {
            return ia(v);
          });
        },
        T = function (F, v) {
          v.decompressFunction = m ? x : B;
          v.paths = O(F);
          return ea(v);
        },
        qa = function (F, v, e, E) {
          return F.catch(function (D) {
            Object(g.b)(D);
            return E(v, e);
          });
        },
        ma = function (F, v, e, E) {
          F = Array.isArray(F) ? F : [F];
          a: {
            var D = [T];
            v = { compressedMaximum: v, isAsync: e, shouldOutputArray: E };
            if (v.isAsync) {
              var M = D[0](F, v);
              for (e = 1; e < D.length; ++e) M = qa(M, F, v, D[e]);
            } else {
              for (e = 0; e < D.length; e++) {
                E = D[e];
                try {
                  M = E(F, v);
                  break a;
                } catch (W) {
                  Object(g.b)(W.message);
                }
              }
              throw Error("None of the worker files were able to load. ");
            }
          }
          return M;
        };
    },
    function (t, u, n) {
      n.d(u, "a", function () {
        return p;
      });
      n.d(u, "b", function () {
        return d;
      });
      var k = {},
        g = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          wvsQueryParameters: {},
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        },
        p = function (r) {
          return g[r];
        },
        d = function (r, h) {
          var m;
          g[r] = h;
          null === (m = k[r]) || void 0 === m
            ? void 0
            : m.forEach(function (q) {
                q(h);
              });
        };
    },
    function (t, u, n) {
      function k(d, r, h, m) {
        function q(x) {
          return x instanceof h
            ? x
            : new h(function (B) {
                B(x);
              });
        }
        return new (h || (h = Promise))(function (x, B) {
          function A(P) {
            try {
              y(m.next(P));
            } catch (ea) {
              B(ea);
            }
          }
          function L(P) {
            try {
              y(m["throw"](P));
            } catch (ea) {
              B(ea);
            }
          }
          function y(P) {
            P.done ? x(P.value) : q(P.value).then(A, L);
          }
          y((m = m.apply(d, r || [])).next());
        });
      }
      function g(d, r) {
        function h(y) {
          return function (P) {
            return m([y, P]);
          };
        }
        function m(y) {
          if (x) throw new TypeError("Generator is already executing.");
          for (; L && ((L = 0), y[0] && (q = 0)), q; )
            try {
              if (
                ((x = 1),
                B &&
                  (A =
                    y[0] & 2
                      ? B["return"]
                      : y[0]
                        ? B["throw"] || ((A = B["return"]) && A.call(B), 0)
                        : B.next) &&
                  !(A = A.call(B, y[1])).done)
              )
                return A;
              if (((B = 0), A)) y = [y[0] & 2, A.value];
              switch (y[0]) {
                case 0:
                case 1:
                  A = y;
                  break;
                case 4:
                  return (q.label++, { value: y[1], done: !1 });
                case 5:
                  q.label++;
                  B = y[1];
                  y = [0];
                  continue;
                case 7:
                  y = q.ops.pop();
                  q.trys.pop();
                  continue;
                default:
                  if (
                    !((A = q.trys), (A = 0 < A.length && A[A.length - 1])) &&
                    (6 === y[0] || 2 === y[0])
                  ) {
                    q = 0;
                    continue;
                  }
                  if (3 === y[0] && (!A || (y[1] > A[0] && y[1] < A[3])))
                    q.label = y[1];
                  else if (6 === y[0] && q.label < A[1])
                    ((q.label = A[1]), (A = y));
                  else if (A && q.label < A[2])
                    ((q.label = A[2]), q.ops.push(y));
                  else {
                    A[2] && q.ops.pop();
                    q.trys.pop();
                    continue;
                  }
              }
              y = r.call(d, q);
            } catch (P) {
              ((y = [6, P]), (B = 0));
            } finally {
              x = A = 0;
            }
          if (y[0] & 5) throw y[1];
          return { value: y[0] ? y[1] : void 0, done: !0 };
        }
        var q = {
            label: 0,
            sent: function () {
              if (A[0] & 1) throw A[1];
              return A[1];
            },
            trys: [],
            ops: [],
          },
          x,
          B,
          A,
          L = Object.create(
            ("function" === typeof Iterator ? Iterator : Object).prototype,
          );
        return (
          (L.next = h(0)),
          (L["throw"] = h(1)),
          (L["return"] = h(2)),
          "function" === typeof Symbol &&
            (L[Symbol.iterator] = function () {
              return this;
            }),
          L
        );
      }
      n.d(u, "a", function () {
        return p;
      });
      n.d(u, "b", function () {
        return k;
      });
      n.d(u, "c", function () {
        return g;
      });
      var p = function () {
        p =
          Object.assign ||
          function (d) {
            for (var r, h = 1, m = arguments.length; h < m; h++) {
              r = arguments[h];
              for (var q in r)
                Object.prototype.hasOwnProperty.call(r, q) && (d[q] = r[q]);
            }
            return d;
          };
        return p.apply(this, arguments);
      };
    },
    function (t, u, n) {
      n.d(u, "b", function () {
        return k;
      });
      n.d(u, "a", function () {
        return g;
      });
      var k = function (p) {
          if ("string" === typeof p) {
            for (
              var d = new Uint8Array(p.length), r = p.length, h = 0;
              h < r;
              h++
            )
              d[h] = p.charCodeAt(h);
            return d;
          }
          return p;
        },
        g = function (p) {
          if ("string" !== typeof p) {
            for (var d = "", r = 0, h = p.length, m; r < h; )
              ((m = p.subarray(r, r + 1024)),
                (r += 1024),
                (d += String.fromCharCode.apply(null, m)));
            return d;
          }
          return p;
        };
    },
    function (t, u, n) {
      n.d(u, "a", function () {
        return q;
      });
      var k = n(3);
      t = n(8);
      var g = n.n(t),
        p = new Map(),
        d = function () {
          return ("undefined" === typeof window ? self : window).trustedTypes;
        },
        r = function (x, B) {
          return d().createPolicy(x, {
            createHTML: function (A) {
              return g.a.sanitize(
                A,
                Object(k.a)(Object(k.a)({}, B), { RETURN_TRUSTED_TYPE: !1 }),
              );
            },
            createScript: function (A) {
              return A;
            },
            createScriptURL: function (A) {
              return A;
            },
          });
        },
        h = function (x) {
          return d().createPolicy(x, {
            createHTML: function (B) {
              return B;
            },
            createScript: function (B) {
              return B;
            },
            createScriptURL: function (B) {
              return B;
            },
          });
        },
        m = function (x, B) {
          var A,
            L = {
              createHTML: function (y) {
                return g.a.sanitize(y, Object(k.a)({}, B));
              },
              createScript: function (y) {
                return y;
              },
              createScriptURL: function (y) {
                return y;
              },
            };
          if (null === (A = d()) || void 0 === A ? 0 : A.createPolicy)
            ((A = "".concat(x, "-po")),
              p.has(x) || ((L = h(A)), p.set(A, L), (L = r(x, B)), p.set(x, L)),
              (L = p.get(B.createPolicyOnly ? A : x)));
          return L;
        },
        q = function (x, B) {
          void 0 === B &&
            (B = { createPolicyOnly: !0, trustedTypesPolicyName: "webviewer" });
          return m(B.trustedTypesPolicyName, B).createScriptURL(x.toString());
        };
    },
    function (t, u, n) {
      function k(p, d, r) {
        return new Promise(function (h) {
          if (!p) return h();
          var m = r.document.createElement("script");
          m.type = "text/javascript";
          m.onload = function () {
            h();
          };
          m.onerror = function () {
            d && Object(g.b)(d);
            h();
          };
          m.src = p;
          r.document.getElementsByTagName("head")[0].appendChild(m);
        });
      }
      n.d(u, "a", function () {
        return k;
      });
      var g = n(0);
    },
    function (t, u, n) {
      function k(h, m, q, x) {
        return g(
          h,
          m,
          q,
          x,
          !!WebAssembly.instantiateStreaming,
          void 0,
          void 0,
        ).then(function (B) {
          Object(p.a)(
            "load",
            "WASM compilation took ".concat(Date.now() - NaN, " ms"),
          );
          return B;
        });
      }
      function g(h, m, q, x, B, A, L) {
        A = A || Date.now();
        if (B && !x)
          return (
            Object(p.a)("load", "Try instantiateStreaming"),
            fetch(Object(d.a)(h))
              .then(function (y) {
                return WebAssembly.instantiateStreaming(y, m);
              })
              .catch(function (y) {
                Object(p.a)(
                  "load",
                  "instantiateStreaming Failed "
                    .concat(h, " message ")
                    .concat(y.message),
                );
                return g(h, m, q, x, !1, A, L);
              })
          );
        B = x
          ? x.map(function (y, P) {
              return "".concat(y, "PDFNetCWasm-chunk-").concat(P, ".wasm");
            })
          : h;
        return Object(d.b)(B, q, !0, !0).then(function (y) {
          L = Date.now();
          Object(p.a)("load", "Request took ".concat(L - A, " ms"));
          return WebAssembly.instantiate(y, m);
        });
      }
      n.d(u, "a", function () {
        return k;
      });
      var p = n(0),
        d = n(1),
        r = n(6);
      n.d(u, "b", function () {
        return r.a;
      });
    },
    function (t, u, n) {
      (function (k, g) {
        t.exports = g();
      })(this, function () {
        function k(N) {
          return function (H) {
            H instanceof RegExp && (H.lastIndex = 0);
            for (
              var K = arguments.length, Q = Array(1 < K ? K - 1 : 0), S = 1;
              S < K;
              S++
            )
              Q[S - 1] = arguments[S];
            return ea(N, H, Q);
          };
        }
        function g(N, H) {
          var K =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : v;
          q && q(N, null);
          for (var Q = H.length; Q--; ) {
            var S = H[Q];
            if ("string" === typeof S) {
              var na = K(S);
              na !== S && (x(H) || (H[Q] = na), (S = na));
            }
            N[S] = !0;
          }
          return N;
        }
        function p(N) {
          for (
            var H = P(null), K = $jscomp.makeIterator(m(N)), Q = K.next();
            !Q.done;
            Q = K.next()
          ) {
            var S = $jscomp.makeIterator(Q.value);
            Q = S.next().value;
            S = S.next().value;
            if (U(N, Q))
              if (Array.isArray(S)) {
                for (var na = 0; na < S.length; na++)
                  U(S, na) || (S[na] = null);
                H[Q] = S;
              } else
                H[Q] =
                  S && "object" === typeof S && S.constructor === Object
                    ? p(S)
                    : S;
          }
          return H;
        }
        function d(N, H) {
          for (; null !== N; ) {
            var K = A(N, H);
            if (K) {
              if (K.get) return k(K.get);
              if ("function" === typeof K.value) return k(K.value);
            }
            N = B(N);
          }
          return function () {
            return null;
          };
        }
        function r() {
          function N(l, z, C) {
            O(l, function (I) {
              I.call(K, z, C, va);
            });
          }
          var H =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "undefined" === typeof window
                  ? null
                  : window,
            K = function (l) {
              return r(l);
            };
          K.version = "3.2.6";
          K.removed = [];
          if (
            !H ||
            !H.document ||
            H.document.nodeType !== Ha.document ||
            !H.Element
          )
            return ((K.isSupported = !1), K);
          var Q = H.document,
            S = Q,
            na = S.currentScript,
            db = H.DocumentFragment,
            X = H.HTMLTemplateElement,
            Pa = H.Node,
            eb = H.Element,
            Ca = H.NodeFilter,
            Fb =
              void 0 === H.NamedNodeMap
                ? H.NamedNodeMap || H.MozNamedAttrMap
                : H.NamedNodeMap,
            Wb = H.HTMLFormElement,
            Qa = H.DOMParser,
            Ra = H.trustedTypes;
          H = eb.prototype;
          var Xb = d(H, "cloneNode"),
            fb = d(H, "remove"),
            Yb = d(H, "nextSibling"),
            Zb = d(H, "childNodes"),
            Ia = d(H, "parentNode");
          "function" === typeof X &&
            ((X = Q.createElement("template")),
            X.content &&
              X.content.ownerDocument &&
              (Q = X.content.ownerDocument));
          var ha,
            Ja = "";
          X = Q;
          var Da = X.implementation,
            $b = X.createNodeIterator,
            ac = X.createDocumentFragment,
            Gb = X.getElementsByTagName,
            bc = S.importNode,
            ka = Hb();
          K.isSupported =
            "function" === typeof m &&
            "function" === typeof Ia &&
            Da &&
            void 0 !== Da.createHTMLDocument;
          X = Ib;
          var Sa = X.MUSTACHE_EXPR,
            Ta = X.ERB_EXPR,
            gb = X.TMPLIT_EXPR,
            Ua = X.DATA_ATTR,
            cc = X.ARIA_ATTR,
            dc = X.IS_SCRIPT_OR_DATA,
            hb = X.ATTR_WHITESPACE,
            Jb = X.CUSTOM_ELEMENT,
            ib = Ib.IS_ALLOWED_URI,
            aa = null,
            Kb = g(
              {},
              [].concat(
                $jscomp.arrayFromIterable(oa),
                $jscomp.arrayFromIterable(sa),
                $jscomp.arrayFromIterable(a),
                $jscomp.arrayFromIterable(c),
                $jscomp.arrayFromIterable(w),
              ),
            ),
            ba = null,
            jb = g(
              {},
              [].concat(
                $jscomp.arrayFromIterable(G),
                $jscomp.arrayFromIterable(V),
                $jscomp.arrayFromIterable(Y),
                $jscomp.arrayFromIterable(fa),
              ),
            ),
            Z = Object.seal(
              P(null, {
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
            Ka = null,
            kb = null,
            Lb = !0,
            Va = !0,
            lb = !1,
            Mb = !0,
            ra = !1,
            Ea = !0,
            wa = !1,
            mb = !1,
            Wa = !1,
            Fa = !1,
            Xa = !1,
            Ya = !1,
            nb = !0,
            ob = !1,
            Za = !0,
            La = !1,
            xa = {},
            ya = null,
            pb = g(
              {},
              "annotation-xml audio colgroup desc foreignobject head iframe math mi mn mo ms mtext noembed noframes noscript plaintext script style svg template thead title video xmp".split(
                " ",
              ),
            ),
            qb = null,
            rb = g({}, "audio video img source image track".split(" ")),
            $a = null,
            sb = g(
              {},
              "alt class for id label name pattern placeholder role summary title value style xmlns".split(
                " ",
              ),
            ),
            za = "http://www.w3.org/1999/xhtml",
            Nb = !1,
            tb = null,
            Ob = g(
              {},
              [
                "http://www.w3.org/1998/Math/MathML",
                "http://www.w3.org/2000/svg",
                "http://www.w3.org/1999/xhtml",
              ],
              e,
            ),
            ab = g({}, ["mi", "mo", "mn", "ms", "mtext"]),
            Ma = g({}, ["annotation-xml"]),
            ec = g({}, ["title", "style", "font", "a", "script"]),
            Na = null,
            Pb = ["application/xhtml+xml", "text/html"],
            da = null,
            va = null,
            Qb = Q.createElement("form"),
            Ga = function (l) {
              return l instanceof RegExp || l instanceof Function;
            },
            ub = function () {
              var l =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!va || va !== l) {
                (l && "object" === typeof l) || (l = {});
                l = p(l);
                Na =
                  -1 === Pb.indexOf(l.PARSER_MEDIA_TYPE)
                    ? "text/html"
                    : l.PARSER_MEDIA_TYPE;
                da = "application/xhtml+xml" === Na ? e : v;
                aa = U(l, "ALLOWED_TAGS") ? g({}, l.ALLOWED_TAGS, da) : Kb;
                ba = U(l, "ALLOWED_ATTR") ? g({}, l.ALLOWED_ATTR, da) : jb;
                tb = U(l, "ALLOWED_NAMESPACES")
                  ? g({}, l.ALLOWED_NAMESPACES, e)
                  : Ob;
                $a = U(l, "ADD_URI_SAFE_ATTR")
                  ? g(p(sb), l.ADD_URI_SAFE_ATTR, da)
                  : sb;
                qb = U(l, "ADD_DATA_URI_TAGS")
                  ? g(p(rb), l.ADD_DATA_URI_TAGS, da)
                  : rb;
                ya = U(l, "FORBID_CONTENTS")
                  ? g({}, l.FORBID_CONTENTS, da)
                  : pb;
                Ka = U(l, "FORBID_TAGS") ? g({}, l.FORBID_TAGS, da) : p({});
                kb = U(l, "FORBID_ATTR") ? g({}, l.FORBID_ATTR, da) : p({});
                xa = U(l, "USE_PROFILES") ? l.USE_PROFILES : !1;
                Lb = !1 !== l.ALLOW_ARIA_ATTR;
                Va = !1 !== l.ALLOW_DATA_ATTR;
                lb = l.ALLOW_UNKNOWN_PROTOCOLS || !1;
                Mb = !1 !== l.ALLOW_SELF_CLOSE_IN_ATTR;
                ra = l.SAFE_FOR_TEMPLATES || !1;
                Ea = !1 !== l.SAFE_FOR_XML;
                wa = l.WHOLE_DOCUMENT || !1;
                Fa = l.RETURN_DOM || !1;
                Xa = l.RETURN_DOM_FRAGMENT || !1;
                Ya = l.RETURN_TRUSTED_TYPE || !1;
                Wa = l.FORCE_BODY || !1;
                nb = !1 !== l.SANITIZE_DOM;
                ob = l.SANITIZE_NAMED_PROPS || !1;
                Za = !1 !== l.KEEP_CONTENT;
                La = l.IN_PLACE || !1;
                ib = l.ALLOWED_URI_REGEXP || ta;
                za = l.NAMESPACE || "http://www.w3.org/1999/xhtml";
                ab = l.MATHML_TEXT_INTEGRATION_POINTS || ab;
                Ma = l.HTML_INTEGRATION_POINTS || Ma;
                Z = l.CUSTOM_ELEMENT_HANDLING || {};
                l.CUSTOM_ELEMENT_HANDLING &&
                  Ga(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (Z.tagNameCheck = l.CUSTOM_ELEMENT_HANDLING.tagNameCheck);
                l.CUSTOM_ELEMENT_HANDLING &&
                  Ga(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (Z.attributeNameCheck =
                    l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck);
                l.CUSTOM_ELEMENT_HANDLING &&
                  "boolean" ===
                    typeof l.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements &&
                  (Z.allowCustomizedBuiltInElements =
                    l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements);
                ra && (Va = !1);
                Xa && (Fa = !0);
                xa &&
                  ((aa = g({}, w)),
                  (ba = []),
                  !0 === xa.html && (g(aa, oa), g(ba, G)),
                  !0 === xa.svg && (g(aa, sa), g(ba, V), g(ba, fa)),
                  !0 === xa.svgFilters && (g(aa, a), g(ba, V), g(ba, fa)),
                  !0 === xa.mathMl && (g(aa, c), g(ba, Y), g(ba, fa)));
                l.ADD_TAGS &&
                  (aa === Kb && (aa = p(aa)), g(aa, l.ADD_TAGS, da));
                l.ADD_ATTR &&
                  (ba === jb && (ba = p(ba)), g(ba, l.ADD_ATTR, da));
                l.ADD_URI_SAFE_ATTR && g($a, l.ADD_URI_SAFE_ATTR, da);
                l.FORBID_CONTENTS &&
                  (ya === pb && (ya = p(ya)), g(ya, l.FORBID_CONTENTS, da));
                Za && (aa["#text"] = !0);
                wa && g(aa, ["html", "head", "body"]);
                aa.table && (g(aa, ["tbody"]), delete Ka.tbody);
                if (l.TRUSTED_TYPES_POLICY) {
                  if ("function" !== typeof l.TRUSTED_TYPES_POLICY.createHTML)
                    throw ja(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
                    );
                  if (
                    "function" !== typeof l.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw ja(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
                    );
                  ha = l.TRUSTED_TYPES_POLICY;
                  Ja = ha.createHTML("");
                } else
                  (void 0 === ha && (ha = fc(Ra, na)),
                    null !== ha &&
                      "string" === typeof Ja &&
                      (Ja = ha.createHTML("")));
                y && y(l);
                va = l;
              }
            },
            vb = g(
              {},
              [].concat(
                $jscomp.arrayFromIterable(sa),
                $jscomp.arrayFromIterable(a),
                $jscomp.arrayFromIterable(b),
              ),
            ),
            Rb = g(
              {},
              [].concat(
                $jscomp.arrayFromIterable(c),
                $jscomp.arrayFromIterable(f),
              ),
            ),
            gc = function (l) {
              var z = Ia(l);
              (z && z.tagName) ||
                (z = { namespaceURI: za, tagName: "template" });
              var C = v(l.tagName),
                I = v(z.tagName);
              return tb[l.namespaceURI]
                ? "http://www.w3.org/2000/svg" === l.namespaceURI
                  ? "http://www.w3.org/1999/xhtml" === z.namespaceURI
                    ? "svg" === C
                    : "http://www.w3.org/1998/Math/MathML" === z.namespaceURI
                      ? "svg" === C && ("annotation-xml" === I || ab[I])
                      : !!vb[C]
                  : "http://www.w3.org/1998/Math/MathML" === l.namespaceURI
                    ? "http://www.w3.org/1999/xhtml" === z.namespaceURI
                      ? "math" === C
                      : "http://www.w3.org/2000/svg" === z.namespaceURI
                        ? "math" === C && Ma[I]
                        : !!Rb[C]
                    : "http://www.w3.org/1999/xhtml" === l.namespaceURI
                      ? ("http://www.w3.org/2000/svg" === z.namespaceURI &&
                          !Ma[I]) ||
                        ("http://www.w3.org/1998/Math/MathML" ===
                          z.namespaceURI &&
                          !ab[I])
                        ? !1
                        : !Rb[C] && (ec[C] || !vb[C])
                      : "application/xhtml+xml" === Na && tb[l.namespaceURI]
                        ? !0
                        : !1
                : !1;
            },
            pa = function (l) {
              ma(K.removed, { element: l });
              try {
                Ia(l).removeChild(l);
              } catch (z) {
                fb(l);
              }
            },
            Aa = function (l, z) {
              try {
                ma(K.removed, { attribute: z.getAttributeNode(l), from: z });
              } catch (C) {
                ma(K.removed, { attribute: null, from: z });
              }
              z.removeAttribute(l);
              if ("is" === l)
                if (Fa || Xa)
                  try {
                    pa(z);
                  } catch (C) {}
                else
                  try {
                    z.setAttribute(l, "");
                  } catch (C) {}
            },
            wb = function (l) {
              var z = null,
                C = null;
              Wa
                ? (l = "<remove></remove>" + l)
                : (C = (C = E(l, /^[\r\n\t ]+/)) && C[0]);
              "application/xhtml+xml" === Na &&
                "http://www.w3.org/1999/xhtml" === za &&
                (l =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  l +
                  "</body></html>");
              var I = ha ? ha.createHTML(l) : l;
              if ("http://www.w3.org/1999/xhtml" === za)
                try {
                  z = new Qa().parseFromString(I, Na);
                } catch (J) {}
              if (!z || !z.documentElement) {
                z = Da.createDocument(za, "template", null);
                try {
                  z.documentElement.innerHTML = Nb ? Ja : I;
                } catch (J) {}
              }
              I = z.body || z.documentElement;
              l &&
                C &&
                I.insertBefore(Q.createTextNode(C), I.childNodes[0] || null);
              return "http://www.w3.org/1999/xhtml" === za
                ? Gb.call(z, wa ? "html" : "body")[0]
                : wa
                  ? z.documentElement
                  : I;
            },
            xb = function (l) {
              return $b.call(
                l.ownerDocument || l,
                l,
                Ca.SHOW_ELEMENT |
                  Ca.SHOW_COMMENT |
                  Ca.SHOW_TEXT |
                  Ca.SHOW_PROCESSING_INSTRUCTION |
                  Ca.SHOW_CDATA_SECTION,
                null,
              );
            },
            Ba = function (l) {
              return (
                l instanceof Wb &&
                ("string" !== typeof l.nodeName ||
                  "string" !== typeof l.textContent ||
                  "function" !== typeof l.removeChild ||
                  !(l.attributes instanceof Fb) ||
                  "function" !== typeof l.removeAttribute ||
                  "function" !== typeof l.setAttribute ||
                  "string" !== typeof l.namespaceURI ||
                  "function" !== typeof l.insertBefore ||
                  "function" !== typeof l.hasChildNodes)
              );
            },
            yb = function (l) {
              return "function" === typeof Pa && l instanceof Pa;
            },
            Sb = function (l) {
              var z = null;
              N(ka.beforeSanitizeElements, l, null);
              if (Ba(l)) return (pa(l), !0);
              var C = da(l.nodeName);
              N(ka.uponSanitizeElement, l, { tagName: C, allowedTags: aa });
              if (
                (Ea &&
                  l.hasChildNodes() &&
                  !yb(l.firstElementChild) &&
                  R(/<[/\w!]/g, l.innerHTML) &&
                  R(/<[/\w!]/g, l.textContent)) ||
                l.nodeType === Ha.progressingInstruction ||
                (Ea && l.nodeType === Ha.comment && R(/<[/\w]/g, l.data))
              )
                return (pa(l), !0);
              if (!aa[C] || Ka[C]) {
                if (
                  !Ka[C] &&
                  "annotation-xml" !== C &&
                  E(C, Jb) &&
                  ((Z.tagNameCheck instanceof RegExp && R(Z.tagNameCheck, C)) ||
                    (Z.tagNameCheck instanceof Function && Z.tagNameCheck(C)))
                )
                  return !1;
                if (Za && !ya[C]) {
                  C = Ia(l) || l.parentNode;
                  var I = Zb(l) || l.childNodes;
                  if (I && C)
                    for (var J = I.length - 1; 0 <= J; --J) {
                      var ca = Xb(I[J], !0);
                      ca.__removalCount = (l.__removalCount || 0) + 1;
                      C.insertBefore(ca, Yb(l));
                    }
                }
                pa(l);
                return !0;
              }
              if (
                (l instanceof eb && !gc(l)) ||
                (("noscript" === C || "noembed" === C || "noframes" === C) &&
                  R(/<\/no(script|embed|frames)/i, l.innerHTML))
              )
                return (pa(l), !0);
              ra &&
                l.nodeType === Ha.text &&
                ((z = l.textContent),
                O([Sa, Ta, gb], function (la) {
                  z = D(z, la, " ");
                }),
                l.textContent !== z &&
                  (ma(K.removed, { element: l.cloneNode() }),
                  (l.textContent = z)));
              N(ka.afterSanitizeElements, l, null);
              return !1;
            },
            zb = function (l, z, C) {
              if (nb && ("id" === z || "name" === z) && (C in Q || C in Qb))
                return !1;
              if (!Va || kb[z] || !R(Ua, z))
                if (!Lb || !R(cc, z))
                  if (!ba[z] || kb[z]) {
                    if (
                      !(
                        ("annotation-xml" !== l &&
                          E(l, Jb) &&
                          ((Z.tagNameCheck instanceof RegExp &&
                            R(Z.tagNameCheck, l)) ||
                            (Z.tagNameCheck instanceof Function &&
                              Z.tagNameCheck(l))) &&
                          ((Z.attributeNameCheck instanceof RegExp &&
                            R(Z.attributeNameCheck, z)) ||
                            (Z.attributeNameCheck instanceof Function &&
                              Z.attributeNameCheck(z)))) ||
                        ("is" === z &&
                          Z.allowCustomizedBuiltInElements &&
                          ((Z.tagNameCheck instanceof RegExp &&
                            R(Z.tagNameCheck, C)) ||
                            (Z.tagNameCheck instanceof Function &&
                              Z.tagNameCheck(C))))
                      )
                    )
                      return !1;
                  } else if (
                    !(
                      $a[z] ||
                      R(ib, D(C, hb, "")) ||
                      (("src" === z || "xlink:href" === z || "href" === z) &&
                        "script" !== l &&
                        0 === M(C, "data:") &&
                        qb[l]) ||
                      (lb && !R(dc, D(C, hb, "")))
                    ) &&
                    C
                  )
                    return !1;
              return !0;
            },
            Cb = function (l) {
              N(ka.beforeSanitizeAttributes, l, null);
              var z = l.attributes;
              if (z && !Ba(l)) {
                for (
                  var C = {
                      attrName: "",
                      attrValue: "",
                      keepAttr: !0,
                      allowedAttributes: ba,
                      forceKeepAttr: void 0,
                    },
                    I = z.length,
                    J = {};
                  I--;

                ) {
                  var ca = z[I],
                    la = ca.name,
                    Ab = ca.namespaceURI,
                    bb = ca.value;
                  ca = da(la);
                  J.$jscomp$loop$prop$value$5 = "value" === la ? bb : W(bb);
                  C.attrName = ca;
                  C.attrValue = J.$jscomp$loop$prop$value$5;
                  C.keepAttr = !0;
                  C.forceKeepAttr = void 0;
                  N(ka.uponSanitizeAttribute, l, C);
                  J.$jscomp$loop$prop$value$5 = C.attrValue;
                  !ob ||
                    ("id" !== ca && "name" !== ca) ||
                    (Aa(la, l),
                    (J.$jscomp$loop$prop$value$5 =
                      "user-content-" + J.$jscomp$loop$prop$value$5));
                  if (
                    Ea &&
                    R(
                      /((--!?|])>)|<\/(style|title)/i,
                      J.$jscomp$loop$prop$value$5,
                    )
                  )
                    Aa(la, l);
                  else if (!C.forceKeepAttr)
                    if (C.keepAttr)
                      if (!Mb && R(/\/>/i, J.$jscomp$loop$prop$value$5))
                        Aa(la, l);
                      else {
                        ra &&
                          O(
                            [Sa, Ta, gb],
                            (function (cb) {
                              return function (hc) {
                                cb.$jscomp$loop$prop$value$5 = D(
                                  cb.$jscomp$loop$prop$value$5,
                                  hc,
                                  " ",
                                );
                              };
                            })(J),
                          );
                        var Bb = da(l.nodeName);
                        if (zb(Bb, ca, J.$jscomp$loop$prop$value$5)) {
                          if (
                            ha &&
                            "object" === typeof Ra &&
                            "function" === typeof Ra.getAttributeType &&
                            !Ab
                          )
                            switch (Ra.getAttributeType(Bb, ca)) {
                              case "TrustedHTML":
                                J.$jscomp$loop$prop$value$5 = ha.createHTML(
                                  J.$jscomp$loop$prop$value$5,
                                );
                                break;
                              case "TrustedScriptURL":
                                J.$jscomp$loop$prop$value$5 =
                                  ha.createScriptURL(
                                    J.$jscomp$loop$prop$value$5,
                                  );
                            }
                          if (J.$jscomp$loop$prop$value$5 !== bb)
                            try {
                              (Ab
                                ? l.setAttributeNS(
                                    Ab,
                                    la,
                                    J.$jscomp$loop$prop$value$5,
                                  )
                                : l.setAttribute(
                                    la,
                                    J.$jscomp$loop$prop$value$5,
                                  ),
                                Ba(l) ? pa(l) : qa(K.removed));
                            } catch (cb) {
                              Aa(la, l);
                            }
                        } else Aa(la, l);
                      }
                    else Aa(la, l);
                  J = {
                    $jscomp$loop$prop$value$5: J.$jscomp$loop$prop$value$5,
                  };
                }
                N(ka.afterSanitizeAttributes, l, null);
              }
            },
            Tb = function C(z) {
              var I,
                J = xb(z);
              for (N(ka.beforeSanitizeShadowDOM, z, null); (I = J.nextNode()); )
                (N(ka.uponSanitizeShadowNode, I, null),
                  Sb(I),
                  Cb(I),
                  I.content instanceof db && C(I.content));
              N(ka.afterSanitizeShadowDOM, z, null);
            };
          K.sanitize = function (z) {
            var C =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              I = null,
              J = null;
            J = J = null;
            (Nb = !z) && (z = "\x3c!--\x3e");
            if ("string" !== typeof z && !yb(z))
              if ("function" === typeof z.toString) {
                if (((z = z.toString()), "string" !== typeof z))
                  throw ja("dirty is not a string, aborting");
              } else throw ja("toString is not a function");
            if (!K.isSupported) return z;
            mb || ub(C);
            K.removed = [];
            "string" === typeof z && (La = !1);
            if (La) {
              if (z.nodeName && ((C = da(z.nodeName)), !aa[C] || Ka[C]))
                throw ja(
                  "root node is forbidden and cannot be sanitized in-place",
                );
            } else if (z instanceof Pa)
              ((I = wb("\x3c!----\x3e")),
                (J = I.ownerDocument.importNode(z, !0)),
                J.nodeType === Ha.element && "BODY" === J.nodeName
                  ? (I = J)
                  : "HTML" === J.nodeName
                    ? (I = J)
                    : I.appendChild(J));
            else {
              if (!Fa && !ra && !wa && -1 === z.indexOf("<"))
                return ha && Ya ? ha.createHTML(z) : z;
              I = wb(z);
              if (!I) return Fa ? null : Ya ? Ja : "";
            }
            I && Wa && pa(I.firstChild);
            for (C = xb(La ? z : I); (J = C.nextNode()); )
              (Sb(J), Cb(J), J.content instanceof db && Tb(J.content));
            if (La) return z;
            if (Fa) {
              if (Xa)
                for (J = ac.call(I.ownerDocument); I.firstChild; )
                  J.appendChild(I.firstChild);
              else J = I;
              if (ba.shadowroot || ba.shadowrootmode) J = bc.call(S, J, !0);
              return J;
            }
            var ca = wa ? I.outerHTML : I.innerHTML;
            wa &&
              aa["!doctype"] &&
              I.ownerDocument &&
              I.ownerDocument.doctype &&
              I.ownerDocument.doctype.name &&
              R(Ub, I.ownerDocument.doctype.name) &&
              (ca = "<!DOCTYPE " + I.ownerDocument.doctype.name + ">\n" + ca);
            ra &&
              O([Sa, Ta, gb], function (la) {
                ca = D(ca, la, " ");
              });
            return ha && Ya ? ha.createHTML(ca) : ca;
          };
          K.setConfig = function () {
            ub(
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            );
            mb = !0;
          };
          K.clearConfig = function () {
            va = null;
            mb = !1;
          };
          K.isValidAttribute = function (z, C, I) {
            va || ub({});
            z = da(z);
            C = da(C);
            return zb(z, C, I);
          };
          K.addHook = function (z, C) {
            "function" === typeof C && ma(ka[z], C);
          };
          K.removeHook = function (z, C) {
            return void 0 !== C
              ? ((C = T(ka[z], C)), -1 === C ? void 0 : F(ka[z], C, 1)[0])
              : qa(ka[z]);
          };
          K.removeHooks = function (z) {
            ka[z] = [];
          };
          K.removeAllHooks = function () {
            ka = Hb();
          };
          return K;
        }
        var h = Object,
          m = h.entries,
          q = h.setPrototypeOf,
          x = h.isFrozen,
          B = h.getPrototypeOf,
          A = h.getOwnPropertyDescriptor,
          L = Object,
          y = L.freeze;
        h = L.seal;
        var P = L.create;
        L = "undefined" !== typeof Reflect && Reflect;
        var ea = L.apply,
          ia = L.construct;
        y ||
          (y = function (N) {
            return N;
          });
        h ||
          (h = function (N) {
            return N;
          });
        ea ||
          (ea = function (N, H, K) {
            return N.apply(H, K);
          });
        ia ||
          (ia = function (N, H) {
            return new (Function.prototype.bind.apply(
              N,
              [null].concat($jscomp.arrayFromIterable(H)),
            ))();
          });
        var O = k(Array.prototype.forEach),
          T = k(Array.prototype.lastIndexOf),
          qa = k(Array.prototype.pop),
          ma = k(Array.prototype.push),
          F = k(Array.prototype.splice),
          v = k(String.prototype.toLowerCase),
          e = k(String.prototype.toString),
          E = k(String.prototype.match),
          D = k(String.prototype.replace),
          M = k(String.prototype.indexOf),
          W = k(String.prototype.trim),
          U = k(Object.prototype.hasOwnProperty),
          R = k(RegExp.prototype.test),
          ja = (function (N) {
            return function () {
              for (var H = arguments.length, K = Array(H), Q = 0; Q < H; Q++)
                K[Q] = arguments[Q];
              return ia(N, K);
            };
          })(TypeError),
          oa = y(
            "a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dialog dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p picture pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(
              " ",
            ),
          ),
          sa = y(
            "svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan view vkern".split(
              " ",
            ),
          ),
          a = y(
            "feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(
              " ",
            ),
          ),
          b = y(
            "animate color-profile cursor discard font-face font-face-format font-face-name font-face-src font-face-uri foreignobject hatch hatchpath mesh meshgradient meshpatch meshrow missing-glyph script set solidcolor unknown use".split(
              " ",
            ),
          ),
          c = y(
            "math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover mprescripts".split(
              " ",
            ),
          ),
          f = y(
            "maction maligngroup malignmark mlongdiv mscarries mscarry msgroup mstack msline msrow semantics annotation annotation-xml mprescripts none".split(
              " ",
            ),
          ),
          w = y(["#text"]),
          G = y(
            "accept action align alt autocapitalize autocomplete autopictureinpicture autoplay background bgcolor border capture cellpadding cellspacing checked cite class clear color cols colspan controls controlslist coords crossorigin datetime decoding default dir disabled disablepictureinpicture disableremoteplayback download draggable enctype enterkeyhint face for headers height hidden high href hreflang id inputmode integrity ismap kind label lang list loading loop low max maxlength media method min minlength multiple muted name nonce noshade novalidate nowrap open optimum pattern placeholder playsinline popover popovertarget popovertargetaction poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title translate type usemap valign value width wrap xmlns slot".split(
              " ",
            ),
          ),
          V = y(
            "accent-height accumulate additive alignment-baseline amplitude ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clippathunits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end exponent fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 intercept k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering slope specularconstant specularexponent spreadmethod startoffset stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale systemlanguage tabindex tablevalues targetx targety transform transform-origin text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(
              " ",
            ),
          ),
          Y = y(
            "accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle encoding fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(
              " ",
            ),
          ),
          fa = y([
            "xlink:href",
            "xml:id",
            "xlink:title",
            "xml:space",
            "xmlns:xlink",
          ]);
        L = h(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        var ua = h(/<%[\w\W]*|[\w\W]*%>/gm),
          Oa = h(/\$\{[\w\W]*/gm),
          Vb = h(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          ic = h(/^aria-[\-\w]+$/),
          ta = h(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          jc = h(/^(?:\w+script|data):/i),
          kc = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Ub = h(/^html$/i);
        h = h(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var Ib = Object.freeze({
            __proto__: null,
            ARIA_ATTR: ic,
            ATTR_WHITESPACE: kc,
            CUSTOM_ELEMENT: h,
            DATA_ATTR: Vb,
            DOCTYPE_NAME: Ub,
            ERB_EXPR: ua,
            IS_ALLOWED_URI: ta,
            IS_SCRIPT_OR_DATA: jc,
            MUSTACHE_EXPR: L,
            TMPLIT_EXPR: Oa,
          }),
          Ha = {
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
          fc = function (N, H) {
            if ("object" !== typeof N || "function" !== typeof N.createPolicy)
              return null;
            var K = null;
            H &&
              H.hasAttribute("data-tt-policy-suffix") &&
              (K = H.getAttribute("data-tt-policy-suffix"));
            H = "dompurify" + (K ? "#" + K : "");
            try {
              return N.createPolicy(H, {
                createHTML: function (Q) {
                  return Q;
                },
                createScriptURL: function (Q) {
                  return Q;
                },
              });
            } catch (Q) {
              return (
                console.warn(
                  "TrustedTypes policy " + H + " could not be created.",
                ),
                null
              );
            }
          },
          Hb = function () {
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
    function (t, u, n) {
      n.d(u, "a", function () {
        return h;
      });
      var k = n(1),
        g = n(7),
        p = n(10),
        d = n(5),
        r = (function () {
          function m(q) {
            var x = this;
            this.promise = q.then(function (B) {
              x.response = B;
              x.status = 200;
            });
          }
          m.prototype.addEventListener = function (q, x) {
            this.promise.then(x);
          };
          return m;
        })(),
        h = function (m, q, x, B) {
          if (Object(p.a)() && !x) {
            self.Module.instantiateWasm = function (L, y) {
              return Object(g.a)(
                "".concat(m, "Wasm.wasm"),
                L,
                q["Wasm.wasm"],
                B,
              ).then(function (P) {
                y(P.instance);
              });
            };
            if (q.disableObjectURLBlobs) {
              importScripts("".concat(m, "Wasm.js"));
              return;
            }
            x = Object(k.b)(
              "".concat(m, "Wasm.js.mem"),
              q["Wasm.js.mem"],
              !1,
              !1,
            );
          } else {
            if (q.disableObjectURLBlobs) {
              importScripts(
                "".concat(
                  (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + m,
                  ".js",
                ),
              );
              return;
            }
            x = Object(k.b)(
              "".concat(
                (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : "") + m,
                ".js.mem",
              ),
              q[".js.mem"],
              !1,
            );
            var A = Object(k.b)(
              "".concat(
                (self.Module.memoryInitializerPrefixURL
                  ? self.Module.memoryInitializerPrefixURL
                  : "") + m,
                ".mem",
              ),
              q[".mem"],
              !0,
              !0,
            );
            self.Module.memoryInitializerRequest = new r(A);
          }
          x = new Blob([x], { type: "application/javascript" });
          importScripts(Object(d.a)(URL.createObjectURL(x)));
        };
    },
    function (t, u, n) {
      n.d(u, "a", function () {
        return L;
      });
      var k,
        g = "undefined" === typeof window ? self : window;
      t = (function () {
        var y = navigator.userAgent.toLowerCase();
        return (y =
          /(msie) ([\w.]+)/.exec(y) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(y))
          ? parseInt(y[2], 10)
          : y;
      })();
      var p = (function () {
        var y = g.navigator.userAgent.match(/OPR/),
          P = g.navigator.userAgent.match(/Maxthon/),
          ea = g.navigator.userAgent.match(/Edge/);
        return g.navigator.userAgent.match(/Chrome\/(.*?) /) && !y && !P && !ea;
      })();
      (function () {
        if (!p) return null;
        var y = g.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
        return y ? parseInt(y[1], 10) : y;
      })();
      var d =
        !!navigator.userAgent.match(/Edge/i) ||
        (navigator.userAgent.match(/Edg\/(.*?)/) &&
          g.navigator.userAgent.match(/Chrome\/(.*?) /));
      (function () {
        if (!d) return null;
        var y = g.navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return y ? parseInt(y[1], 10) : y;
      })();
      u =
        /iPad|iPhone|iPod/.test(g.navigator.platform) ||
        ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) ||
        /iPad|iPhone|iPod/.test(g.navigator.userAgent);
      var r = (function () {
          var y = g.navigator.userAgent.match(
            /.*\/([0-9\.]+)\s(Safari|Mobile).*/i,
          );
          return y ? parseFloat(y[1]) : y;
        })(),
        h =
          /^((?!chrome|android).)*safari/i.test(g.navigator.userAgent) ||
          (/^((?!chrome|android).)*$/.test(g.navigator.userAgent) && u);
      h &&
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
        parseInt(
          null === (k = navigator.userAgent.match(/Version\/(\d+)/)) ||
            void 0 === k
            ? void 0
            : k[1],
          10,
        );
      var m = g.navigator.userAgent.match(/Firefox/);
      (function () {
        if (!m) return null;
        var y = g.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return y ? parseInt(y[1], 10) : y;
      })();
      t || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);
      navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
      g.navigator.userAgent.indexOf("Android");
      var q = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(
          g.navigator.userAgent,
        ),
        x = g.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)
          ? 14 <=
            parseInt(
              g.navigator.userAgent.match(
                /(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i,
              )[3],
              10,
            )
          : !1,
        B = !(!self.WebAssembly || !self.WebAssembly.validate),
        A =
          -1 < g.navigator.userAgent.indexOf("Edge/16") ||
          -1 < g.navigator.userAgent.indexOf("MSAppHost"),
        L = function () {
          var y;
          if ((y = B && !A))
            ((y = h && null !== r && 14 > r), (y = !(!x && (y || q))));
          return y;
        };
    },
    function (t, u, n) {
      t.exports = n(12);
    },
    function (t, u, n) {
      n.r(u);
      (function (k) {
        function g(v) {
          return v.split("<File>")[1].split("</File>")[0];
        }
        function p(v, e, E) {
          var D =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          v = "<InfixServer>".concat(v, "</InfixServer>");
          null == D && (D = "importCommand" + E + ".xml");
          FS.writeFile(D, v);
          F.ccall("wasmRunXML", "number", ["string", "string"], [D, e]);
          FS.unlink(D);
        }
        function d(v) {
          var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : !0,
            E = FS.readFile(v).buffer;
          e && FS.unlink(v);
          E || console.warn("No buffer results found for: ".concat(v));
          return E;
        }
        function r(v) {
          1 == ea
            ? postMessage({ cmd: "isReady", taskId: v })
            : setTimeout(function () {
                return r(v);
              }, 300);
        }
        function h(v, e) {
          var E = v.galleyId,
            D = v.cmd,
            M = v.subCmd,
            W = v.caretStart,
            U = v.caretEnd,
            R = v.resultsFile,
            ja = v.commandXML,
            oa = v.commandFile,
            sa = v.pageNumber;
          v = v.taskId;
          if ("editText" === D) var a = M;
          else if ("performUndoRedo" === D || "transformTextBox" === D) a = D;
          p(ja, R, 0, oa);
          D = d(R);
          postMessage(
            {
              cmd: "editText",
              subCmd: a,
              caretStart: W,
              caretEnd: U,
              galleyId: E,
              commandXML: !1 === e ? null : ja,
              resultsXML: D,
              pageNumber: sa,
              taskId: v,
            },
            [D],
          );
        }
        function m(v, e, E, D) {
          p(v, E, 0, e);
          e = d(E);
          D || (v = null);
          postMessage({ cmd: "insertTextBox", commandXML: v, resultsXML: e }, [
            e,
          ]);
        }
        function q(v, e) {
          var E = v.galleyId,
            D = v.resultsFile,
            M = v.willTriggerTextContentUpdated,
            W = v.pageNumber;
          p(v.commandXML, D, 0, v.commandFile);
          D = d(D);
          postMessage(
            {
              pageNumber: W,
              cmd: e,
              resultsXML: D,
              galleyId: E,
              willTriggerTextContentUpdated: M,
              taskId: v.taskId,
            },
            [D],
          );
        }
        function x(v, e, E, D, M, W) {
          if (e) {
            E = new Uint8Array(E);
            e = "inputFile" + v + ".pdf";
            FS.writeFile(e, E);
            D = new Uint8Array(D);
            var U = new TextDecoder("utf-8").decode(D);
            E = "objects" + v + ".xml";
            D = "results" + v + ".xml";
            U = '\n  <Commands>\n    <Command Name="LoadPDF"><File>'
              .concat(
                e,
                '</File></Command>\n    <Command Name="Page BBox"><StartPage>1</StartPage><EndPage>1</EndPage></Command>\n    ',
              )
              .concat(
                U
                  ? '<Command Name="AddTableBoxes">'.concat(U, "</Command>")
                  : "",
                '\n    <Command Name="Edit Page">\n      <WebFontURL>',
              )
              .concat(
                ma || "https://www.pdftron.com/webfonts/v2/",
                "</WebFontURL>\n      <Output>",
              )
              .concat(
                E,
                "</Output>\n      <ImagesAndText/>\n      <IgnoreRotation>false</IgnoreRotation>\n      ",
              )
              .concat(
                P ? "<ForceReflow/>" : "",
                "\n    </Command>\n  </Commands>",
              );
            p(U, D, 1);
            T = v;
            M &&
              ((M = d(e, !1)),
              (e = d(E)),
              (D = d(D)),
              postMessage(
                {
                  cmd: "exportFile",
                  pageNumber: v,
                  exportPerformed: !0,
                  pdfBuffer: M,
                  objectXML: e,
                  resultsXML: D,
                  taskId: W,
                },
                [M, D],
              ));
          } else
            postMessage({
              cmd: "exportFile",
              pageNumber: v,
              exportPerformed: !1,
            });
        }
        function B(v) {
          var e = v.pdfFile,
            E = v.tableData,
            D = v.subCmd,
            M = v.pageNumber,
            W = v.commandXML,
            U = v.objectID,
            R = v.isText,
            ja = v.isUpdatingRect,
            oa = v.oid,
            sa = v.canUndoRedo,
            a = v.outputFName;
          v = v.taskId;
          M !== T && x(M, !0, e, E, !1);
          var b = "results" + M + ".xml";
          e = R ? "transformTextBox" : "transformObject";
          p(W, b, M);
          E = d(a);
          b = d(b);
          postMessage(
            {
              cmd: e,
              pageNumber: M,
              pdfBuffer: E,
              resultsXML: b,
              id: U,
              isUpdatingRect: ja,
              isText: R,
              commandXML: W,
              subCmd: D,
              canUndoRedo: sa,
              oid: oa,
              outputFName: a,
              taskId: v,
            },
            [E, b],
          );
        }
        n.d(u, "extractFileNameFromCommand", function () {
          return g;
        });
        var A = n(9),
          L = n(1),
          y = "undefined" === typeof window ? self : window;
        y.Core = y.Core || {};
        var P = !0,
          ea = !1,
          ia = null,
          O = null,
          T = -1,
          qa = !1,
          ma,
          F = {
            noInitialRun: !0,
            onRuntimeInitialized: function () {
              ea = !0;
            },
            fetchSelf: function () {
              var v,
                e = "";
              if (
                null === (v = O) || void 0 === v
                  ? 0
                  : v.toLowerCase().startsWith("http")
              )
                e = O;
              v = "".concat(e, "InfixServer");
              Object(A.a)(
                v,
                {
                  "Wasm.wasm": 1e8,
                  "Wasm.js.mem": 1e5,
                  ".js.mem": 5e6,
                  ".mem": 3e6,
                  disableObjectURLBlobs: qa,
                },
                !!navigator.userAgent.match(/Edge/i),
              );
            },
            locateFile: function (v) {
              return v;
            },
            getPreloadedPackage: function (v, e) {
              "InfixServerWasm.br.mem" == v && (v = "InfixServerWasm.mem");
              return Object(L.b)("".concat(ia || "").concat(v), e, !1, !0)
                .buffer;
            },
          };
        self.Module = F;
        self.basePath = "../external/";
        onmessage = function (v) {
          var e = v.data;
          switch (e.cmd) {
            case "isReady":
              ia = e.resourcePath;
              O = e.workerPath;
              ia && (self.basePath = "".concat(ia, "../external/"));
              F.fetchSelf();
              r(e.taskId);
              break;
            case "initialiseInfixServer":
              var E = e.l,
                D = e.taskId;
              F.callMain([""]);
              F.ccall(
                "wasmInitInfixServer",
                "number",
                ["string", "string", "string"],
                ["infixcore.cfg", E, "results.xml"],
              );
              var M = d("results.xml");
              postMessage(
                { cmd: "initialiseInfixServer", resultsXML: M, taskId: D },
                [M],
              );
              break;
            case "disableObjectURLBlobs":
              qa = e.disableURLBlobs;
              break;
            case "loadAvailableFonts":
              var W = e.commandXML,
                U = e.taskId;
              ma = e.webFontURL;
              p(W, "results0.xml", 0);
              var R = d("results0.xml");
              postMessage(
                { cmd: "loadAvailableFonts", resultsXML: R, taskId: U },
                [R],
              );
              break;
            case "exportFile":
              x(
                e.pageNumber,
                e.performExport,
                e.pdfFile,
                e.tableData,
                !0,
                e.taskId,
              );
              break;
            case "applyTransformMatrix":
              var ja = e.oid,
                oa = e.pageNumber,
                sa = e.taskId;
              p(e.commandXML, "results" + oa + ".xml", oa);
              postMessage({
                cmd: "applyTransformMatrix",
                pageNumber: oa,
                id: ja,
                taskId: sa,
              });
              break;
            case "transformObject":
              B(e);
              break;
            case "deleteObject":
              var a = e.pdfFile,
                b = e.pageNumber,
                c = e.objectID,
                f = e.tableData,
                w = e.isUndoRedo,
                G = e.isPageDeleted,
                V = e.taskId;
              b !== T && x(b, !0, a, f, !1);
              var Y = "outputFile" + b + ".pdf",
                fa = "results" + b + ".xml";
              var ua =
                '<Commands><Command Name="DeleteObject">' +
                "<OID>".concat(c, "</OID></Command>");
              ua += '<Command Name="SavePDF"><File>'.concat(Y, "</File>");
              p(ua + "</Command></Commands>", fa, b);
              var Oa = d(Y),
                Vb = d(fa);
              postMessage(
                {
                  cmd: "deleteObject",
                  pageNumber: b,
                  pdfBuffer: Oa,
                  resultsXML: Vb,
                  oid: c,
                  isUndoRedo: w,
                  isPageDeleted: G,
                  taskId: V,
                },
                [Oa, Vb],
              );
              break;
            case "insertTextBox":
              m(e.commandXML, e.commandFile, e.resultsFile, !0);
              break;
            case "insertNewTextBox":
              var ic = e.pdfFile,
                ta = e.pageNumber,
                jc = e.topVal,
                kc = e.leftVal,
                Ub = e.bottomVal,
                Ib = e.rightVal,
                Ha = e.font,
                fc = e.fontSize,
                Hb = e.importData,
                N = e.content,
                H = e.canUndoRedo,
                K = e.taskId,
                Q = new TextEncoder().encode("").buffer;
              ta != T && x(ta, !0, ic, Q, !1);
              var S = "results" + ta + ".xml",
                na = "exported" + ta + ".xml",
                db = "outputFile" + ta + ".pdf";
              var X =
                '<Commands><Command Name="Insert Text Box">' +
                "<Rect><Top>".concat(jc, "</Top><Left>").concat(kc, "</Left>");
              X += "<Bottom>"
                .concat(Ub, "</Bottom><Right>")
                .concat(Ib, "</Right></Rect>");
              X += "<Size>"
                .concat(fc, "</Size><FontName>")
                .concat(Ha, "</FontName>");
              var Pa = "editText" + ta + ".xml";
              FS.writeFile(Pa, Hb);
              X += "<File>".concat(
                Pa,
                "</File><TransXML>coreTransXML.cfg</TransXML>",
              );
              X += "<ExportFile>".concat(
                na,
                "</ExportFile><TransXML>coreTransXML.cfg</TransXML>",
              );
              X =
                X +
                '<StartPage>1</StartPage><EndPage>LastPage</EndPage><AutoSubstitute/><AutoDeleteParas/><Fitting><Shrink><FontSize Min="0.65">true</FontSize><Leading>False</Leading></Shrink><Stretch><FontSize>False</FontSize><Leading>False</Leading></Stretch></Fitting><ResetLetterSpacing/><IgnoreFlightCheck/><MissingFont>Noto Sans Regular</MissingFont><SubstituteAllChars/><TargetLang>en</TargetLang></Command>' +
                '<Command Name="SavePDF"><File>'.concat(
                  db,
                  "</File></Command></Commands>",
                );
              p(X, S, ta);
              var eb = d(db),
                Ca = d(S),
                Fb = d(na);
              postMessage(
                {
                  cmd: "insertNewTextBox",
                  pageNumber: ta,
                  pdfBuffer: eb,
                  exportXML: Fb,
                  resultsXML: Ca,
                  contentHTML: N,
                  commandXML: X,
                  canUndoRedo: H,
                  taskId: K,
                },
                [eb, Fb, Ca],
              );
              break;
            case "AlignContentBox":
              var Wb = e.pdfFile,
                Qa = e.pageNumber,
                Ra = e.galleyId,
                Xb = e.tableData,
                fb = e.commandXML,
                Yb = e.taskId;
              Qa != T && x(Qa, !0, Wb, Xb, !1);
              var Zb = g(fb);
              p(fb, "results.xml", Qa);
              var Ia = d("results.xml"),
                ha = d(Zb);
              postMessage(
                {
                  cmd: "updateContentBox",
                  subCmd: "Set Para Attribs",
                  pageNumber: Qa,
                  pdfBuffer: ha,
                  resultsXML: Ia,
                  galleyId: Ra,
                  commandXML: fb,
                  taskId: Yb,
                },
                [ha, Ia],
              );
              break;
            case "RenderContentBox":
              var Ja = e.pdfFile,
                Da = e.pageNumber,
                $b = e.galleyId,
                ac = e.tableData,
                Gb = e.commandXML,
                bc = e.taskId;
              Da != T && x(Da, !0, Ja, ac, !1);
              var ka = g(Gb);
              p(Gb, "results.xml", Da);
              var Sa = d(ka),
                Ta = d("results.xml");
              postMessage(
                {
                  cmd: "renderContentBox",
                  pageNumber: Da,
                  pdfBuffer: Sa,
                  resultsXML: Ta,
                  galleyId: $b,
                  taskId: bc,
                },
                [Sa, Ta],
              );
              break;
            case "AlignParagraph":
              var gb = e.pdfFile,
                Ua = e.pageNumber,
                cc = e.galleyId,
                dc = e.tableData,
                hb = e.commandXML,
                Jb = e.taskId;
              Ua != T && x(Ua, !0, gb, dc, !1);
              p(hb, "results.xml", Ua);
              var ib = d("results.xml");
              postMessage(
                {
                  cmd: "editText",
                  subCmd: "Set Para Attribs",
                  galleyId: cc,
                  commandXML: hb,
                  pageNumber: Ua,
                  taskId: Jb,
                  resultsXML: ib,
                },
                [ib],
              );
              break;
            case "DecorateContentBox":
              var aa = e.commandXML,
                Kb = e.pdfFile,
                ba = e.pageNumber,
                jb = e.galleyId,
                Z = e.tableData,
                Ka = e.taskId,
                kb = e.subCmd;
              ba != T && x(ba, !0, Kb, Z, !1);
              var Lb = g(aa);
              p(aa, "results.xml", ba);
              var Va = d("results.xml"),
                lb = d(Lb);
              postMessage(
                {
                  cmd: "updateContentBox",
                  pageNumber: ba,
                  pdfBuffer: lb,
                  commandXML: aa,
                  resultsXML: Va,
                  subCmd: kb,
                  id: jb,
                  galleyId: jb,
                  taskId: Ka,
                },
                [lb, Va],
              );
              break;
            case "insertImage":
              var Mb = e.pdfFile,
                ra = e.pageNumber,
                Ea = e.newImage,
                wa = e.canUndoRedo,
                mb = e.taskId,
                Wa = e.commandXML,
                Fa = e.imageFileName,
                Xa = e.outputFileName,
                Ya = new TextEncoder().encode("").buffer;
              ra != T && x(ra, !0, Mb, Ya, !1);
              var nb = "results" + ra + ".xml";
              FS.writeFile(Fa, k.from(Ea));
              p(Wa, nb, ra);
              var ob = d(Xa),
                Za = d(nb);
              postMessage(
                {
                  cmd: "insertImage",
                  pageNumber: ra,
                  pdfBuffer: ob,
                  resultsXML: Za,
                  commandXML: Wa,
                  canUndoRedo: wa,
                  newImage: Ea,
                  taskId: mb,
                },
                [ob, Za, Ea],
              );
              break;
            case "runCommand":
              var La = e.subCmd,
                xa = e.resultsFile;
              p(e.commandXML, xa, 0, e.commandFile);
              var ya = d(xa);
              postMessage({ cmd: "runCommand", subCmd: La, resultsXML: ya }, [
                ya,
              ]);
              break;
            case "renderEditGalley":
              var pb = e.resultsFile;
              p(e.commandXML, pb, 0, e.commandFile);
              var qb = d(pb),
                rb = d(e.imageFName);
              postMessage(
                {
                  cmd: "renderEditGalley",
                  resultsXML: qb,
                  imageData: rb,
                  galleyId: e.galleyId,
                  taskId: e.taskId,
                },
                [qb, rb],
              );
              break;
            case "renderFullPage":
              var $a = e.resultsFile;
              p(e.commandXML, $a, 0, e.commandFile);
              var sb = d($a),
                za = d(e.imageFName);
              postMessage(
                {
                  cmd: "renderFullPage",
                  resultsXML: sb,
                  imageData: za,
                  outputWidth: e.width,
                  outputHeight: e.height,
                },
                [sb, za],
              );
              break;
            case "textAttributes":
              var Nb = e.id,
                tb = e.numChars,
                Ob = e.resultsFile,
                ab = e.taskId;
              p(e.commandXML, Ob, 0, e.commandFile);
              var Ma = d(Ob);
              postMessage(
                {
                  cmd: "textAttributes",
                  id: Nb,
                  numChars: tb,
                  resultsXML: Ma,
                  taskId: ab,
                },
                [Ma],
              );
              break;
            case "editText":
              h(e, !0);
              break;
            case "editObject":
              var ec = e.subCmd,
                Na = e.oid,
                Pb = e.resultsFile,
                da = e.commandXML;
              p(da, Pb, 0, e.commandFile);
              var va = d(Pb);
              postMessage(
                {
                  cmd: "editObject",
                  subCmd: ec,
                  oid: Na,
                  commandXML: da,
                  resultsXML: va,
                },
                [va],
              );
              break;
            case "performUndoRedo":
              switch (e.subCmd) {
                case "editText":
                  h(e, !1);
                  break;
                case "transformObject":
                  e.subCmd = "performUndoRedo";
                  B(e);
                  break;
                case "insertTextBoxRedo":
                  var Qb = e.commandXML,
                    Ga = e.pageNumber,
                    ub = e.taskId,
                    vb = "results" + Ga + ".xml",
                    Rb = "exported" + Ga + ".xml",
                    gc = "outputFile" + Ga + ".pdf";
                  p(Qb, vb, Ga);
                  var pa = d(gc),
                    Aa = d(vb),
                    wb = d(Rb);
                  postMessage(
                    {
                      cmd: "insertNewTextBox",
                      subCmd: "performUndoRedo",
                      pageNumber: Ga,
                      pdfBuffer: pa,
                      exportXML: wb,
                      resultsXML: Aa,
                      commandXML: Qb,
                      taskId: ub,
                    },
                    [pa, wb, Aa],
                  );
                  break;
                case "insertImageRedo":
                  var xb = e.commandXML,
                    Ba = e.pageNumber,
                    yb = e.newImage,
                    Sb = "outputFile" + Ba + ".pdf",
                    zb = "results" + Ba + ".xml",
                    Cb = "imageFile" + Ba + ".jpg";
                  FS.writeFile(Cb, k.from(yb));
                  p(xb, zb, Ba);
                  var Tb = d(Sb),
                    l = d(zb);
                  FS.unlink(Cb);
                  postMessage(
                    {
                      cmd: "insertImage",
                      pageNumber: Ba,
                      pdfBuffer: Tb,
                      resultsXML: l,
                      commandXML: xb,
                      newImage: yb,
                    },
                    [Tb, l],
                  );
              }
              break;
            case "insertTextBoxRedo":
              m(e.commandXML, e.commandFile, e.resultsFile, !1);
              break;
            case "copyText":
              q(e, "copyText");
              break;
            case "getUpdatedText":
              q(e, "getUpdatedText");
              break;
            case "dumpTextBox":
              var z = e.galleyId,
                C = e.resultsFile,
                I = e.taskId;
              p(e.commandXML, C, 0, e.commandFile);
              var J = d(C);
              postMessage(
                { cmd: "dumpTextBox", galleyId: z, resultsXML: J, taskId: I },
                [J],
              );
              break;
            case "transformTextBox":
              h(e, !1);
              break;
            case "savePDF":
              var ca = e.resultsFile,
                la = e.pdfFileName,
                Ab = new Uint8Array(e.pdfFile);
              FS.writeFile(e.pdfFileName, Ab);
              p(e.commandXML, ca, 0, e.commandFile);
              var bb = d(la),
                Bb = d(ca);
              postMessage({ cmd: "savePDF", pdfBuffer: bb, resultsXML: Bb }, [
                bb,
                Bb,
              ]);
              break;
            case "loadPDF":
              var cb = e.resultsFile,
                hc = new Uint8Array(e.pdfFile);
              FS.writeFile(e.pdfFileName, hc);
              p(e.commandXML, cb, 0, e.commandFile);
              var oc = d(cb);
              postMessage({ cmd: "loadPDF", resultsXML: oc }, [oc]);
              break;
            case "loadHyperlinkURL":
              var Bc = e.id,
                lc = e.resultsFile,
                Cc = e.taskId;
              p(e.commandXML, lc, 0, e.commandFile);
              var pc = FS.readFile(lc).buffer;
              FS.unlink(lc);
              postMessage(
                { id: Bc, cmd: "loadHyperlinkURL", resultsXML: pc, taskId: Cc },
                [pc],
              );
              break;
            case "setTypographyContentBox":
              var Dc = e.pdfFile,
                Db = e.pageNumber,
                qc = e.galleyId,
                Ec = e.subCmd,
                Fc = e.tableData,
                Gc = e.taskId,
                mc = e.commandXML;
              Db != T && x(Db, !0, Dc, Fc, !1);
              var rc = "results" + Db + ".xml";
              p(mc, rc, Db);
              var Hc = g(mc),
                sc = d(Hc),
                tc = d(rc);
              postMessage(
                {
                  cmd: "setTypographyContentBox",
                  subCmd: Ec,
                  pageNumber: Db,
                  pdfBuffer: sc,
                  commandXML: mc,
                  resultsXML: tc,
                  id: qc,
                  galleyId: qc,
                  taskId: Gc,
                },
                [sc, tc],
              );
              break;
            case "updateDocumentContent":
              var Eb = e.pageNumber,
                Ic = e.galleyId,
                Jc = e.outputFileName,
                uc = e.commandXML,
                Kc = e.isSearchReplace,
                Lc = e.callbackMapId,
                Mc = e.pdfPage,
                Nc = e.tableArray,
                Oc = e.taskId;
              Eb != T && x(Eb, !0, Mc, Nc, !1);
              var vc = "results" + Eb + ".xml";
              p(uc, vc, Eb);
              var wc = d(Jc),
                xc = d(vc);
              postMessage(
                {
                  cmd: "updateContentBox",
                  pageNumber: Eb,
                  pdfBuffer: wc,
                  commandXML: uc,
                  resultsXML: xc,
                  galleyId: Ic,
                  callbackMapId: Lc,
                  isSearchReplace: Kc,
                  taskId: Oc,
                },
                [wc, xc],
              );
              break;
            case "getInfixVersion":
              var Pc = e.taskId,
                yc = e.commandXML;
              p(yc, "results1.xml", 1);
              var zc = d("results1.xml");
              postMessage(
                {
                  cmd: "getInfixVersion",
                  commandXML: yc,
                  resultsXML: zc,
                  taskId: Pc,
                },
                [zc],
              );
              break;
            case "reloadPage":
              var nc = e.pageNumber,
                Qc = new Uint8Array(e.pdfFile),
                Ac = "inputFile" + nc + ".pdf";
              FS.writeFile(Ac, Qc);
              var Rc = "objects" + nc + ".xml",
                Sc = "results" + nc + ".xml",
                Tc = '\n  <Commands>\n    <Command Name="LoadPDF"><File>'
                  .concat(
                    Ac,
                    '</File></Command>\n    <Command Name="Page BBox"><StartPage>1</StartPage><EndPage>1</EndPage></Command>\n    <Command Name="Edit Page">\n    <Output>',
                  )
                  .concat(Rc, "</Output><ImagesOnly/>")
                  .concat(
                    P ? "<ForceReflow/>" : "",
                    "</Command>\n  </Commands>",
                  );
              p(Tc, Sc, 1);
              break;
            case "setTextReflow":
              P = e.textReflow;
              postMessage({ taskId: e.taskId });
              break;
            case "getTextReflow":
              postMessage({ taskId: e.taskId, textReflow: P });
          }
        };
      }).call(this, n(13).Buffer);
    },
    function (t, u, n) {
      (function (k) {
        function g() {
          try {
            var a = new Uint8Array(1);
            a.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            };
            return (
              42 === a.foo() &&
              "function" === typeof a.subarray &&
              0 === a.subarray(1, 1).byteLength
            );
          } catch (b) {
            return !1;
          }
        }
        function p(a, b) {
          if ((d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < b)
            throw new RangeError("Invalid typed array length");
          d.TYPED_ARRAY_SUPPORT
            ? ((a = new Uint8Array(b)), (a.__proto__ = d.prototype))
            : (null === a && (a = new d(b)), (a.length = b));
          return a;
        }
        function d(a, b, c) {
          if (!(d.TYPED_ARRAY_SUPPORT || this instanceof d))
            return new d(a, b, c);
          if ("number" === typeof a) {
            if ("string" === typeof b)
              throw Error(
                "If encoding is specified then the first argument must be a string",
              );
            return m(this, a);
          }
          return r(this, a, b, c);
        }
        function r(a, b, c, f) {
          if ("number" === typeof b)
            throw new TypeError('"value" argument must not be a number');
          if ("undefined" !== typeof ArrayBuffer && b instanceof ArrayBuffer) {
            b.byteLength;
            if (0 > c || b.byteLength < c)
              throw new RangeError("'offset' is out of bounds");
            if (b.byteLength < c + (f || 0))
              throw new RangeError("'length' is out of bounds");
            b =
              void 0 === c && void 0 === f
                ? new Uint8Array(b)
                : void 0 === f
                  ? new Uint8Array(b, c)
                  : new Uint8Array(b, c, f);
            d.TYPED_ARRAY_SUPPORT
              ? ((a = b), (a.__proto__ = d.prototype))
              : (a = q(a, b));
            return a;
          }
          if ("string" === typeof b) {
            f = a;
            a = c;
            if ("string" !== typeof a || "" === a) a = "utf8";
            if (!d.isEncoding(a))
              throw new TypeError('"encoding" must be a valid string encoding');
            c = A(b, a) | 0;
            f = p(f, c);
            b = f.write(b, a);
            b !== c && (f = f.slice(0, b));
            return f;
          }
          return x(a, b);
        }
        function h(a) {
          if ("number" !== typeof a)
            throw new TypeError('"size" argument must be a number');
          if (0 > a)
            throw new RangeError('"size" argument must not be negative');
        }
        function m(a, b) {
          h(b);
          a = p(a, 0 > b ? 0 : B(b) | 0);
          if (!d.TYPED_ARRAY_SUPPORT) for (var c = 0; c < b; ++c) a[c] = 0;
          return a;
        }
        function q(a, b) {
          var c = 0 > b.length ? 0 : B(b.length) | 0;
          a = p(a, c);
          for (var f = 0; f < c; f += 1) a[f] = b[f] & 255;
          return a;
        }
        function x(a, b) {
          if (d.isBuffer(b)) {
            var c = B(b.length) | 0;
            a = p(a, c);
            if (0 === a.length) return a;
            b.copy(a, 0, 0, c);
            return a;
          }
          if (b) {
            if (
              ("undefined" !== typeof ArrayBuffer &&
                b.buffer instanceof ArrayBuffer) ||
              "length" in b
            )
              return (
                (c = "number" !== typeof b.length) ||
                  ((c = b.length), (c = c !== c)),
                c ? p(a, 0) : q(a, b)
              );
            if ("Buffer" === b.type && ja(b.data)) return q(a, b.data);
          }
          throw new TypeError(
            "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.",
          );
        }
        function B(a) {
          if (a >= (d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823))
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                (d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) +
                " bytes",
            );
          return a | 0;
        }
        function A(a, b) {
          if (d.isBuffer(a)) return a.length;
          if (
            "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(a) || a instanceof ArrayBuffer)
          )
            return a.byteLength;
          "string" !== typeof a && (a = "" + a);
          var c = a.length;
          if (0 === c) return 0;
          for (var f = !1; ; )
            switch (b) {
              case "ascii":
              case "latin1":
              case "binary":
                return c;
              case "utf8":
              case "utf-8":
              case void 0:
                return E(a).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * c;
              case "hex":
                return c >>> 1;
              case "base64":
                return M(a).length;
              default:
                if (f) return E(a).length;
                b = ("" + b).toLowerCase();
                f = !0;
            }
        }
        function L(a, b, c) {
          var f = !1;
          if (void 0 === b || 0 > b) b = 0;
          if (b > this.length) return "";
          if (void 0 === c || c > this.length) c = this.length;
          if (0 >= c) return "";
          c >>>= 0;
          b >>>= 0;
          if (c <= b) return "";
          for (a || (a = "utf8"); ; )
            switch (a) {
              case "hex":
                a = b;
                b = c;
                c = this.length;
                if (!a || 0 > a) a = 0;
                if (!b || 0 > b || b > c) b = c;
                f = "";
                for (c = a; c < b; ++c)
                  ((a = f),
                    (f = this[c]),
                    (f = 16 > f ? "0" + f.toString(16) : f.toString(16)),
                    (f = a + f));
                return f;
              case "utf8":
              case "utf-8":
                return ia(this, b, c);
              case "ascii":
                a = "";
                for (c = Math.min(this.length, c); b < c; ++b)
                  a += String.fromCharCode(this[b] & 127);
                return a;
              case "latin1":
              case "binary":
                a = "";
                for (c = Math.min(this.length, c); b < c; ++b)
                  a += String.fromCharCode(this[b]);
                return a;
              case "base64":
                return (
                  (b =
                    0 === b && c === this.length
                      ? U.fromByteArray(this)
                      : U.fromByteArray(this.slice(b, c))),
                  b
                );
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                b = this.slice(b, c);
                c = "";
                for (a = 0; a < b.length; a += 2)
                  c += String.fromCharCode(b[a] + 256 * b[a + 1]);
                return c;
              default:
                if (f) throw new TypeError("Unknown encoding: " + a);
                a = (a + "").toLowerCase();
                f = !0;
            }
        }
        function y(a, b, c) {
          var f = a[b];
          a[b] = a[c];
          a[c] = f;
        }
        function P(a, b, c, f, w) {
          if (0 === a.length) return -1;
          "string" === typeof c
            ? ((f = c), (c = 0))
            : 2147483647 < c
              ? (c = 2147483647)
              : -2147483648 > c && (c = -2147483648);
          c = +c;
          isNaN(c) && (c = w ? 0 : a.length - 1);
          0 > c && (c = a.length + c);
          if (c >= a.length) {
            if (w) return -1;
            c = a.length - 1;
          } else if (0 > c)
            if (w) c = 0;
            else return -1;
          "string" === typeof b && (b = d.from(b, f));
          if (d.isBuffer(b)) return 0 === b.length ? -1 : ea(a, b, c, f, w);
          if ("number" === typeof b)
            return (
              (b &= 255),
              d.TYPED_ARRAY_SUPPORT &&
              "function" === typeof Uint8Array.prototype.indexOf
                ? w
                  ? Uint8Array.prototype.indexOf.call(a, b, c)
                  : Uint8Array.prototype.lastIndexOf.call(a, b, c)
                : ea(a, [b], c, f, w)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function ea(a, b, c, f, w) {
          function G(ua, Oa) {
            return 1 === V ? ua[Oa] : ua.readUInt16BE(Oa * V);
          }
          var V = 1,
            Y = a.length,
            fa = b.length;
          if (
            void 0 !== f &&
            ((f = String(f).toLowerCase()),
            "ucs2" === f ||
              "ucs-2" === f ||
              "utf16le" === f ||
              "utf-16le" === f)
          ) {
            if (2 > a.length || 2 > b.length) return -1;
            V = 2;
            Y /= 2;
            fa /= 2;
            c /= 2;
          }
          if (w)
            for (f = -1; c < Y; c++)
              if (G(a, c) === G(b, -1 === f ? 0 : c - f)) {
                if ((-1 === f && (f = c), c - f + 1 === fa)) return f * V;
              } else (-1 !== f && (c -= c - f), (f = -1));
          else
            for (c + fa > Y && (c = Y - fa); 0 <= c; c--) {
              Y = !0;
              for (f = 0; f < fa; f++)
                if (G(a, c + f) !== G(b, f)) {
                  Y = !1;
                  break;
                }
              if (Y) return c;
            }
          return -1;
        }
        function ia(a, b, c) {
          c = Math.min(a.length, c);
          for (var f = []; b < c; ) {
            var w = a[b],
              G = null,
              V = 239 < w ? 4 : 223 < w ? 3 : 191 < w ? 2 : 1;
            if (b + V <= c)
              switch (V) {
                case 1:
                  128 > w && (G = w);
                  break;
                case 2:
                  var Y = a[b + 1];
                  128 === (Y & 192) &&
                    ((w = ((w & 31) << 6) | (Y & 63)), 127 < w && (G = w));
                  break;
                case 3:
                  Y = a[b + 1];
                  var fa = a[b + 2];
                  128 === (Y & 192) &&
                    128 === (fa & 192) &&
                    ((w = ((w & 15) << 12) | ((Y & 63) << 6) | (fa & 63)),
                    2047 < w && (55296 > w || 57343 < w) && (G = w));
                  break;
                case 4:
                  Y = a[b + 1];
                  fa = a[b + 2];
                  var ua = a[b + 3];
                  128 === (Y & 192) &&
                    128 === (fa & 192) &&
                    128 === (ua & 192) &&
                    ((w =
                      ((w & 15) << 18) |
                      ((Y & 63) << 12) |
                      ((fa & 63) << 6) |
                      (ua & 63)),
                    65535 < w && 1114112 > w && (G = w));
              }
            null === G
              ? ((G = 65533), (V = 1))
              : 65535 < G &&
                ((G -= 65536),
                f.push(((G >>> 10) & 1023) | 55296),
                (G = 56320 | (G & 1023)));
            f.push(G);
            b += V;
          }
          a = f.length;
          if (a <= oa) f = String.fromCharCode.apply(String, f);
          else {
            c = "";
            for (b = 0; b < a; )
              c += String.fromCharCode.apply(String, f.slice(b, (b += oa)));
            f = c;
          }
          return f;
        }
        function O(a, b, c) {
          if (0 !== a % 1 || 0 > a) throw new RangeError("offset is not uint");
          if (a + b > c)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function T(a, b, c, f, w, G) {
          if (!d.isBuffer(a))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (b > w || b < G)
            throw new RangeError('"value" argument is out of bounds');
          if (c + f > a.length) throw new RangeError("Index out of range");
        }
        function qa(a, b, c, f) {
          0 > b && (b = 65535 + b + 1);
          for (var w = 0, G = Math.min(a.length - c, 2); w < G; ++w)
            a[c + w] =
              (b & (255 << (8 * (f ? w : 1 - w)))) >>> (8 * (f ? w : 1 - w));
        }
        function ma(a, b, c, f) {
          0 > b && (b = 4294967295 + b + 1);
          for (var w = 0, G = Math.min(a.length - c, 4); w < G; ++w)
            a[c + w] = (b >>> (8 * (f ? w : 3 - w))) & 255;
        }
        function F(a, b, c, f, w, G) {
          if (c + f > a.length) throw new RangeError("Index out of range");
          if (0 > c) throw new RangeError("Index out of range");
        }
        function v(a, b, c, f, w) {
          w || F(a, b, c, 4, 3.4028234663852886e38, -3.4028234663852886e38);
          R.write(a, b, c, f, 23, 4);
          return c + 4;
        }
        function e(a, b, c, f, w) {
          w || F(a, b, c, 8, 1.7976931348623157e308, -1.7976931348623157e308);
          R.write(a, b, c, f, 52, 8);
          return c + 8;
        }
        function E(a, b) {
          b = b || Infinity;
          for (var c, f = a.length, w = null, G = [], V = 0; V < f; ++V) {
            c = a.charCodeAt(V);
            if (55295 < c && 57344 > c) {
              if (!w) {
                if (56319 < c) {
                  -1 < (b -= 3) && G.push(239, 191, 189);
                  continue;
                } else if (V + 1 === f) {
                  -1 < (b -= 3) && G.push(239, 191, 189);
                  continue;
                }
                w = c;
                continue;
              }
              if (56320 > c) {
                -1 < (b -= 3) && G.push(239, 191, 189);
                w = c;
                continue;
              }
              c = (((w - 55296) << 10) | (c - 56320)) + 65536;
            } else w && -1 < (b -= 3) && G.push(239, 191, 189);
            w = null;
            if (128 > c) {
              if (0 > --b) break;
              G.push(c);
            } else if (2048 > c) {
              if (0 > (b -= 2)) break;
              G.push((c >> 6) | 192, (c & 63) | 128);
            } else if (65536 > c) {
              if (0 > (b -= 3)) break;
              G.push((c >> 12) | 224, ((c >> 6) & 63) | 128, (c & 63) | 128);
            } else if (1114112 > c) {
              if (0 > (b -= 4)) break;
              G.push(
                (c >> 18) | 240,
                ((c >> 12) & 63) | 128,
                ((c >> 6) & 63) | 128,
                (c & 63) | 128,
              );
            } else throw Error("Invalid code point");
          }
          return G;
        }
        function D(a) {
          for (var b = [], c = 0; c < a.length; ++c)
            b.push(a.charCodeAt(c) & 255);
          return b;
        }
        function M(a) {
          var b = U,
            c = b.toByteArray;
          a = (a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")).replace(sa, "");
          if (2 > a.length) a = "";
          else for (; 0 !== a.length % 4; ) a += "=";
          return c.call(b, a);
        }
        function W(a, b, c, f) {
          for (var w = 0; w < f && !(w + c >= b.length || w >= a.length); ++w)
            b[w + c] = a[w];
          return w;
        }
        var U = n(15),
          R = n(16),
          ja = n(17);
        u.Buffer = d;
        u.SlowBuffer = function (a) {
          +a != a && (a = 0);
          return d.alloc(+a);
        };
        u.INSPECT_MAX_BYTES = 50;
        d.TYPED_ARRAY_SUPPORT =
          void 0 !== k.TYPED_ARRAY_SUPPORT ? k.TYPED_ARRAY_SUPPORT : g();
        u.kMaxLength = d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        d.poolSize = 8192;
        d._augment = function (a) {
          a.__proto__ = d.prototype;
          return a;
        };
        d.from = function (a, b, c) {
          return r(null, a, b, c);
        };
        d.TYPED_ARRAY_SUPPORT &&
          ((d.prototype.__proto__ = Uint8Array.prototype),
          (d.__proto__ = Uint8Array),
          "undefined" !== typeof Symbol &&
            Symbol.species &&
            d[Symbol.species] === d &&
            Object.defineProperty(d, Symbol.species, {
              value: null,
              configurable: !0,
            }));
        d.alloc = function (a, b, c) {
          h(a);
          a =
            0 >= a
              ? p(null, a)
              : void 0 !== b
                ? "string" === typeof c
                  ? p(null, a).fill(b, c)
                  : p(null, a).fill(b)
                : p(null, a);
          return a;
        };
        d.allocUnsafe = function (a) {
          return m(null, a);
        };
        d.allocUnsafeSlow = function (a) {
          return m(null, a);
        };
        d.isBuffer = function (a) {
          return !(null == a || !a._isBuffer);
        };
        d.compare = function (a, b) {
          if (!d.isBuffer(a) || !d.isBuffer(b))
            throw new TypeError("Arguments must be Buffers");
          if (a === b) return 0;
          for (
            var c = a.length, f = b.length, w = 0, G = Math.min(c, f);
            w < G;
            ++w
          )
            if (a[w] !== b[w]) {
              c = a[w];
              f = b[w];
              break;
            }
          return c < f ? -1 : f < c ? 1 : 0;
        };
        d.isEncoding = function (a) {
          switch (String(a).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        };
        d.concat = function (a, b) {
          if (!ja(a))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === a.length) return d.alloc(0);
          var c;
          if (void 0 === b) for (c = b = 0; c < a.length; ++c) b += a[c].length;
          b = d.allocUnsafe(b);
          var f = 0;
          for (c = 0; c < a.length; ++c) {
            var w = a[c];
            if (!d.isBuffer(w))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            w.copy(b, f);
            f += w.length;
          }
          return b;
        };
        d.byteLength = A;
        d.prototype._isBuffer = !0;
        d.prototype.swap16 = function () {
          var a = this.length;
          if (0 !== a % 2)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var b = 0; b < a; b += 2) y(this, b, b + 1);
          return this;
        };
        d.prototype.swap32 = function () {
          var a = this.length;
          if (0 !== a % 4)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var b = 0; b < a; b += 4)
            (y(this, b, b + 3), y(this, b + 1, b + 2));
          return this;
        };
        d.prototype.swap64 = function () {
          var a = this.length;
          if (0 !== a % 8)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var b = 0; b < a; b += 8)
            (y(this, b, b + 7),
              y(this, b + 1, b + 6),
              y(this, b + 2, b + 5),
              y(this, b + 3, b + 4));
          return this;
        };
        d.prototype.toString = function () {
          var a = this.length | 0;
          return 0 === a
            ? ""
            : 0 === arguments.length
              ? ia(this, 0, a)
              : L.apply(this, arguments);
        };
        d.prototype.equals = function (a) {
          if (!d.isBuffer(a)) throw new TypeError("Argument must be a Buffer");
          return this === a ? !0 : 0 === d.compare(this, a);
        };
        d.prototype.inspect = function () {
          var a = "",
            b = u.INSPECT_MAX_BYTES;
          0 < this.length &&
            ((a = this.toString("hex", 0, b).match(/.{2}/g).join(" ")),
            this.length > b && (a += " ... "));
          return "<Buffer " + a + ">";
        };
        d.prototype.compare = function (a, b, c, f, w) {
          if (!d.isBuffer(a)) throw new TypeError("Argument must be a Buffer");
          void 0 === b && (b = 0);
          void 0 === c && (c = a ? a.length : 0);
          void 0 === f && (f = 0);
          void 0 === w && (w = this.length);
          if (0 > b || c > a.length || 0 > f || w > this.length)
            throw new RangeError("out of range index");
          if (f >= w && b >= c) return 0;
          if (f >= w) return -1;
          if (b >= c) return 1;
          b >>>= 0;
          c >>>= 0;
          f >>>= 0;
          w >>>= 0;
          if (this === a) return 0;
          var G = w - f,
            V = c - b,
            Y = Math.min(G, V);
          f = this.slice(f, w);
          a = a.slice(b, c);
          for (b = 0; b < Y; ++b)
            if (f[b] !== a[b]) {
              G = f[b];
              V = a[b];
              break;
            }
          return G < V ? -1 : V < G ? 1 : 0;
        };
        d.prototype.includes = function (a, b, c) {
          return -1 !== this.indexOf(a, b, c);
        };
        d.prototype.indexOf = function (a, b, c) {
          return P(this, a, b, c, !0);
        };
        d.prototype.lastIndexOf = function (a, b, c) {
          return P(this, a, b, c, !1);
        };
        d.prototype.write = function (a, b, c, f) {
          if (void 0 === b) ((f = "utf8"), (c = this.length), (b = 0));
          else if (void 0 === c && "string" === typeof b)
            ((f = b), (c = this.length), (b = 0));
          else if (isFinite(b))
            ((b |= 0),
              isFinite(c)
                ? ((c |= 0), void 0 === f && (f = "utf8"))
                : ((f = c), (c = void 0)));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported",
            );
          var w = this.length - b;
          if (void 0 === c || c > w) c = w;
          if ((0 < a.length && (0 > c || 0 > b)) || b > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
          f || (f = "utf8");
          for (w = !1; ; )
            switch (f) {
              case "hex":
                a: {
                  b = Number(b) || 0;
                  f = this.length - b;
                  c ? ((c = Number(c)), c > f && (c = f)) : (c = f);
                  f = a.length;
                  if (0 !== f % 2) throw new TypeError("Invalid hex string");
                  c > f / 2 && (c = f / 2);
                  for (f = 0; f < c; ++f) {
                    w = parseInt(a.substr(2 * f, 2), 16);
                    if (isNaN(w)) {
                      a = f;
                      break a;
                    }
                    this[b + f] = w;
                  }
                  a = f;
                }
                return a;
              case "utf8":
              case "utf-8":
                return W(E(a, this.length - b), this, b, c);
              case "ascii":
                return W(D(a), this, b, c);
              case "latin1":
              case "binary":
                return W(D(a), this, b, c);
              case "base64":
                return W(M(a), this, b, c);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                f = a;
                w = this.length - b;
                for (var G = [], V = 0; V < f.length && !(0 > (w -= 2)); ++V) {
                  var Y = f.charCodeAt(V);
                  a = Y >> 8;
                  Y %= 256;
                  G.push(Y);
                  G.push(a);
                }
                return W(G, this, b, c);
              default:
                if (w) throw new TypeError("Unknown encoding: " + f);
                f = ("" + f).toLowerCase();
                w = !0;
            }
        };
        d.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        };
        var oa = 4096;
        d.prototype.slice = function (a, b) {
          var c = this.length;
          a = ~~a;
          b = void 0 === b ? c : ~~b;
          0 > a ? ((a += c), 0 > a && (a = 0)) : a > c && (a = c);
          0 > b ? ((b += c), 0 > b && (b = 0)) : b > c && (b = c);
          b < a && (b = a);
          if (d.TYPED_ARRAY_SUPPORT)
            ((b = this.subarray(a, b)), (b.__proto__ = d.prototype));
          else {
            c = b - a;
            b = new d(c, void 0);
            for (var f = 0; f < c; ++f) b[f] = this[f + a];
          }
          return b;
        };
        d.prototype.readUIntLE = function (a, b, c) {
          a |= 0;
          b |= 0;
          c || O(a, b, this.length);
          c = this[a];
          for (var f = 1, w = 0; ++w < b && (f *= 256); ) c += this[a + w] * f;
          return c;
        };
        d.prototype.readUIntBE = function (a, b, c) {
          a |= 0;
          b |= 0;
          c || O(a, b, this.length);
          c = this[a + --b];
          for (var f = 1; 0 < b && (f *= 256); ) c += this[a + --b] * f;
          return c;
        };
        d.prototype.readUInt8 = function (a, b) {
          b || O(a, 1, this.length);
          return this[a];
        };
        d.prototype.readUInt16LE = function (a, b) {
          b || O(a, 2, this.length);
          return this[a] | (this[a + 1] << 8);
        };
        d.prototype.readUInt16BE = function (a, b) {
          b || O(a, 2, this.length);
          return (this[a] << 8) | this[a + 1];
        };
        d.prototype.readUInt32LE = function (a, b) {
          b || O(a, 4, this.length);
          return (
            (this[a] | (this[a + 1] << 8) | (this[a + 2] << 16)) +
            16777216 * this[a + 3]
          );
        };
        d.prototype.readUInt32BE = function (a, b) {
          b || O(a, 4, this.length);
          return (
            16777216 * this[a] +
            ((this[a + 1] << 16) | (this[a + 2] << 8) | this[a + 3])
          );
        };
        d.prototype.readIntLE = function (a, b, c) {
          a |= 0;
          b |= 0;
          c || O(a, b, this.length);
          c = this[a];
          for (var f = 1, w = 0; ++w < b && (f *= 256); ) c += this[a + w] * f;
          c >= 128 * f && (c -= Math.pow(2, 8 * b));
          return c;
        };
        d.prototype.readIntBE = function (a, b, c) {
          a |= 0;
          b |= 0;
          c || O(a, b, this.length);
          c = b;
          for (var f = 1, w = this[a + --c]; 0 < c && (f *= 256); )
            w += this[a + --c] * f;
          w >= 128 * f && (w -= Math.pow(2, 8 * b));
          return w;
        };
        d.prototype.readInt8 = function (a, b) {
          b || O(a, 1, this.length);
          return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
        };
        d.prototype.readInt16LE = function (a, b) {
          b || O(a, 2, this.length);
          a = this[a] | (this[a + 1] << 8);
          return a & 32768 ? a | 4294901760 : a;
        };
        d.prototype.readInt16BE = function (a, b) {
          b || O(a, 2, this.length);
          a = this[a + 1] | (this[a] << 8);
          return a & 32768 ? a | 4294901760 : a;
        };
        d.prototype.readInt32LE = function (a, b) {
          b || O(a, 4, this.length);
          return (
            this[a] |
            (this[a + 1] << 8) |
            (this[a + 2] << 16) |
            (this[a + 3] << 24)
          );
        };
        d.prototype.readInt32BE = function (a, b) {
          b || O(a, 4, this.length);
          return (
            (this[a] << 24) |
            (this[a + 1] << 16) |
            (this[a + 2] << 8) |
            this[a + 3]
          );
        };
        d.prototype.readFloatLE = function (a, b) {
          b || O(a, 4, this.length);
          return R.read(this, a, !0, 23, 4);
        };
        d.prototype.readFloatBE = function (a, b) {
          b || O(a, 4, this.length);
          return R.read(this, a, !1, 23, 4);
        };
        d.prototype.readDoubleLE = function (a, b) {
          b || O(a, 8, this.length);
          return R.read(this, a, !0, 52, 8);
        };
        d.prototype.readDoubleBE = function (a, b) {
          b || O(a, 8, this.length);
          return R.read(this, a, !1, 52, 8);
        };
        d.prototype.writeUIntLE = function (a, b, c, f) {
          a = +a;
          b |= 0;
          c |= 0;
          f || T(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
          f = 1;
          var w = 0;
          for (this[b] = a & 255; ++w < c && (f *= 256); )
            this[b + w] = (a / f) & 255;
          return b + c;
        };
        d.prototype.writeUIntBE = function (a, b, c, f) {
          a = +a;
          b |= 0;
          c |= 0;
          f || T(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
          f = c - 1;
          var w = 1;
          for (this[b + f] = a & 255; 0 <= --f && (w *= 256); )
            this[b + f] = (a / w) & 255;
          return b + c;
        };
        d.prototype.writeUInt8 = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 1, 255, 0);
          d.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
          this[b] = a & 255;
          return b + 1;
        };
        d.prototype.writeUInt16LE = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 2, 65535, 0);
          d.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a & 255), (this[b + 1] = a >>> 8))
            : qa(this, a, b, !0);
          return b + 2;
        };
        d.prototype.writeUInt16BE = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 2, 65535, 0);
          d.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a >>> 8), (this[b + 1] = a & 255))
            : qa(this, a, b, !1);
          return b + 2;
        };
        d.prototype.writeUInt32LE = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 4, 4294967295, 0);
          d.TYPED_ARRAY_SUPPORT
            ? ((this[b + 3] = a >>> 24),
              (this[b + 2] = a >>> 16),
              (this[b + 1] = a >>> 8),
              (this[b] = a & 255))
            : ma(this, a, b, !0);
          return b + 4;
        };
        d.prototype.writeUInt32BE = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 4, 4294967295, 0);
          d.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a >>> 24),
              (this[b + 1] = a >>> 16),
              (this[b + 2] = a >>> 8),
              (this[b + 3] = a & 255))
            : ma(this, a, b, !1);
          return b + 4;
        };
        d.prototype.writeIntLE = function (a, b, c, f) {
          a = +a;
          b |= 0;
          f || ((f = Math.pow(2, 8 * c - 1)), T(this, a, b, c, f - 1, -f));
          f = 0;
          var w = 1,
            G = 0;
          for (this[b] = a & 255; ++f < c && (w *= 256); )
            (0 > a && 0 === G && 0 !== this[b + f - 1] && (G = 1),
              (this[b + f] = (((a / w) >> 0) - G) & 255));
          return b + c;
        };
        d.prototype.writeIntBE = function (a, b, c, f) {
          a = +a;
          b |= 0;
          f || ((f = Math.pow(2, 8 * c - 1)), T(this, a, b, c, f - 1, -f));
          f = c - 1;
          var w = 1,
            G = 0;
          for (this[b + f] = a & 255; 0 <= --f && (w *= 256); )
            (0 > a && 0 === G && 0 !== this[b + f + 1] && (G = 1),
              (this[b + f] = (((a / w) >> 0) - G) & 255));
          return b + c;
        };
        d.prototype.writeInt8 = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 1, 127, -128);
          d.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
          0 > a && (a = 255 + a + 1);
          this[b] = a & 255;
          return b + 1;
        };
        d.prototype.writeInt16LE = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 2, 32767, -32768);
          d.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a & 255), (this[b + 1] = a >>> 8))
            : qa(this, a, b, !0);
          return b + 2;
        };
        d.prototype.writeInt16BE = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 2, 32767, -32768);
          d.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a >>> 8), (this[b + 1] = a & 255))
            : qa(this, a, b, !1);
          return b + 2;
        };
        d.prototype.writeInt32LE = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 4, 2147483647, -2147483648);
          d.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a & 255),
              (this[b + 1] = a >>> 8),
              (this[b + 2] = a >>> 16),
              (this[b + 3] = a >>> 24))
            : ma(this, a, b, !0);
          return b + 4;
        };
        d.prototype.writeInt32BE = function (a, b, c) {
          a = +a;
          b |= 0;
          c || T(this, a, b, 4, 2147483647, -2147483648);
          0 > a && (a = 4294967295 + a + 1);
          d.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a >>> 24),
              (this[b + 1] = a >>> 16),
              (this[b + 2] = a >>> 8),
              (this[b + 3] = a & 255))
            : ma(this, a, b, !1);
          return b + 4;
        };
        d.prototype.writeFloatLE = function (a, b, c) {
          return v(this, a, b, !0, c);
        };
        d.prototype.writeFloatBE = function (a, b, c) {
          return v(this, a, b, !1, c);
        };
        d.prototype.writeDoubleLE = function (a, b, c) {
          return e(this, a, b, !0, c);
        };
        d.prototype.writeDoubleBE = function (a, b, c) {
          return e(this, a, b, !1, c);
        };
        d.prototype.copy = function (a, b, c, f) {
          c || (c = 0);
          f || 0 === f || (f = this.length);
          b >= a.length && (b = a.length);
          b || (b = 0);
          0 < f && f < c && (f = c);
          if (f === c || 0 === a.length || 0 === this.length) return 0;
          if (0 > b) throw new RangeError("targetStart out of bounds");
          if (0 > c || c >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (0 > f) throw new RangeError("sourceEnd out of bounds");
          f > this.length && (f = this.length);
          a.length - b < f - c && (f = a.length - b + c);
          var w = f - c;
          if (this === a && c < b && b < f)
            for (f = w - 1; 0 <= f; --f) a[f + b] = this[f + c];
          else if (1e3 > w || !d.TYPED_ARRAY_SUPPORT)
            for (f = 0; f < w; ++f) a[f + b] = this[f + c];
          else Uint8Array.prototype.set.call(a, this.subarray(c, c + w), b);
          return w;
        };
        d.prototype.fill = function (a, b, c, f) {
          if ("string" === typeof a) {
            "string" === typeof b
              ? ((f = b), (b = 0), (c = this.length))
              : "string" === typeof c && ((f = c), (c = this.length));
            if (1 === a.length) {
              var w = a.charCodeAt(0);
              256 > w && (a = w);
            }
            if (void 0 !== f && "string" !== typeof f)
              throw new TypeError("encoding must be a string");
            if ("string" === typeof f && !d.isEncoding(f))
              throw new TypeError("Unknown encoding: " + f);
          } else "number" === typeof a && (a &= 255);
          if (0 > b || this.length < b || this.length < c)
            throw new RangeError("Out of range index");
          if (c <= b) return this;
          b >>>= 0;
          c = void 0 === c ? this.length : c >>> 0;
          a || (a = 0);
          if ("number" === typeof a) for (f = b; f < c; ++f) this[f] = a;
          else
            for (
              a = d.isBuffer(a) ? a : E(new d(a, f).toString()),
                w = a.length,
                f = 0;
              f < c - b;
              ++f
            )
              this[f + b] = a[f % w];
          return this;
        };
        var sa = /[^+\/0-9A-Za-z-_]/g;
      }).call(this, n(14));
    },
    function (t, u) {
      u = (function () {
        return this;
      })();
      try {
        u = u || new Function("return this")();
      } catch (n) {
        "object" === typeof window && (u = window);
      }
      t.exports = u;
    },
    function (t, u, n) {
      function k(r) {
        var h = r.length;
        if (0 < h % 4)
          throw Error("Invalid string. Length must be a multiple of 4");
        r = r.indexOf("=");
        -1 === r && (r = h);
        return [r, r === h ? 0 : 4 - (r % 4)];
      }
      u.byteLength = function (r) {
        r = k(r);
        var h = r[1];
        return (3 * (r[0] + h)) / 4 - h;
      };
      u.toByteArray = function (r) {
        var h = k(r);
        var m = h[0];
        h = h[1];
        var q = new d((3 * (m + h)) / 4 - h),
          x = 0,
          B = 0 < h ? m - 4 : m,
          A;
        for (A = 0; A < B; A += 4)
          ((m =
            (p[r.charCodeAt(A)] << 18) |
            (p[r.charCodeAt(A + 1)] << 12) |
            (p[r.charCodeAt(A + 2)] << 6) |
            p[r.charCodeAt(A + 3)]),
            (q[x++] = (m >> 16) & 255),
            (q[x++] = (m >> 8) & 255),
            (q[x++] = m & 255));
        2 === h &&
          ((m = (p[r.charCodeAt(A)] << 2) | (p[r.charCodeAt(A + 1)] >> 4)),
          (q[x++] = m & 255));
        1 === h &&
          ((m =
            (p[r.charCodeAt(A)] << 10) |
            (p[r.charCodeAt(A + 1)] << 4) |
            (p[r.charCodeAt(A + 2)] >> 2)),
          (q[x++] = (m >> 8) & 255),
          (q[x++] = m & 255));
        return q;
      };
      u.fromByteArray = function (r) {
        for (
          var h = r.length, m = h % 3, q = [], x = 0, B = h - m;
          x < B;
          x += 16383
        ) {
          for (
            var A = q,
              L = A.push,
              y,
              P = r,
              ea = x + 16383 > B ? B : x + 16383,
              ia = [],
              O = x;
            O < ea;
            O += 3
          )
            ((y =
              ((P[O] << 16) & 16711680) +
              ((P[O + 1] << 8) & 65280) +
              (P[O + 2] & 255)),
              ia.push(
                g[(y >> 18) & 63] +
                  g[(y >> 12) & 63] +
                  g[(y >> 6) & 63] +
                  g[y & 63],
              ));
          y = ia.join("");
          L.call(A, y);
        }
        1 === m
          ? ((r = r[h - 1]), q.push(g[r >> 2] + g[(r << 4) & 63] + "=="))
          : 2 === m &&
            ((r = (r[h - 2] << 8) + r[h - 1]),
            q.push(g[r >> 10] + g[(r >> 4) & 63] + g[(r << 2) & 63] + "="));
        return q.join("");
      };
      var g = [],
        p = [],
        d = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
      for (t = 0; 64 > t; ++t)
        ((g[t] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            t
          ]),
          (p[
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(
              t,
            )
          ] = t));
      p[45] = 62;
      p[95] = 63;
    },
    function (t, u) {
      u.read = function (n, k, g, p, d) {
        var r = 8 * d - p - 1;
        var h = (1 << r) - 1,
          m = h >> 1,
          q = -7;
        d = g ? d - 1 : 0;
        var x = g ? -1 : 1,
          B = n[k + d];
        d += x;
        g = B & ((1 << -q) - 1);
        B >>= -q;
        for (q += r; 0 < q; g = 256 * g + n[k + d], d += x, q -= 8);
        r = g & ((1 << -q) - 1);
        g >>= -q;
        for (q += p; 0 < q; r = 256 * r + n[k + d], d += x, q -= 8);
        if (0 === g) g = 1 - m;
        else {
          if (g === h) return r ? NaN : Infinity * (B ? -1 : 1);
          r += Math.pow(2, p);
          g -= m;
        }
        return (B ? -1 : 1) * r * Math.pow(2, g - p);
      };
      u.write = function (n, k, g, p, d, r) {
        var h,
          m = 8 * r - d - 1,
          q = (1 << m) - 1,
          x = q >> 1,
          B = 23 === d ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        r = p ? 0 : r - 1;
        var A = p ? 1 : -1,
          L = 0 > k || (0 === k && 0 > 1 / k) ? 1 : 0;
        k = Math.abs(k);
        isNaN(k) || Infinity === k
          ? ((k = isNaN(k) ? 1 : 0), (p = q))
          : ((p = Math.floor(Math.log(k) / Math.LN2)),
            1 > k * (h = Math.pow(2, -p)) && (p--, (h *= 2)),
            (k = 1 <= p + x ? k + B / h : k + B * Math.pow(2, 1 - x)),
            2 <= k * h && (p++, (h /= 2)),
            p + x >= q
              ? ((k = 0), (p = q))
              : 1 <= p + x
                ? ((k = (k * h - 1) * Math.pow(2, d)), (p += x))
                : ((k = k * Math.pow(2, x - 1) * Math.pow(2, d)), (p = 0)));
        for (; 8 <= d; n[g + r] = k & 255, r += A, k /= 256, d -= 8);
        p = (p << d) | k;
        for (m += d; 0 < m; n[g + r] = p & 255, r += A, p /= 256, m -= 8);
        n[g + r - A] |= 128 * L;
      };
    },
    function (t, u) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (k) {
          return "[object Array]" == n.call(k);
        };
    },
  ]);
}).call(this || window);
