!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return (e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports);
  }
  ((r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (r.d(t, "a", t), t);
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/core/spreadsheetEditor"),
    r((r.s = 0)));
})([
  function (e, t, r) {
    e.exports = r(1);
  },
  function (e, t) {
    function r() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
        t,
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        i = o.toStringTag || "@@toStringTag";
      function c(r, o, a, i) {
        var c = o && o.prototype instanceof u ? o : u,
          f = Object.create(c.prototype);
        return (
          n(
            f,
            "_invoke",
            (function (r, n, o) {
              var a,
                i,
                c,
                u = 0,
                f = o || [],
                l = !1,
                p = {
                  p: 0,
                  n: 0,
                  v: e,
                  a: d,
                  f: d.bind(e, 4),
                  d: function (t, r) {
                    return ((a = t), (i = 0), (c = e), (p.n = r), s);
                  },
                };
              function d(r, n) {
                for (i = r, c = n, t = 0; !l && u && !o && t < f.length; t++) {
                  var o,
                    a = f[t],
                    d = p.p,
                    v = a[2];
                  r > 3
                    ? (o = v === n) &&
                      ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                      (a[4] = a[5] = e))
                    : a[0] <= d &&
                      ((o = r < 2 && d < a[1])
                        ? ((i = 0), (p.v = n), (p.n = a[1]))
                        : d < v &&
                          (o = r < 3 || a[0] > n || n > v) &&
                          ((a[4] = r), (a[5] = n), (p.n = v), (i = 0)));
                }
                if (o || r > 1) return s;
                throw ((l = !0), n);
              }
              return function (o, f, v) {
                if (u > 1) throw TypeError("Generator is already running");
                for (
                  l && 1 === f && d(f, v), i = f, c = v;
                  (t = i < 2 ? e : c) || !l;

                ) {
                  a ||
                    (i
                      ? i < 3
                        ? (i > 1 && (p.n = -1), d(i, c))
                        : (p.n = c)
                      : (p.v = c));
                  try {
                    if (((u = 2), a)) {
                      if ((i || (o = "next"), (t = a[o]))) {
                        if (!(t = t.call(a, c)))
                          throw TypeError("iterator result is not an object");
                        if (!t.done) return t;
                        ((c = t.value), i < 2 && (i = 0));
                      } else
                        (1 === i && (t = a.return) && t.call(a),
                          i < 2 &&
                            ((c = TypeError(
                              "The iterator does not provide a '" +
                                o +
                                "' method",
                            )),
                            (i = 1)));
                      a = e;
                    } else if ((t = (l = p.n < 0) ? c : r.call(n, p)) !== s)
                      break;
                  } catch (t) {
                    ((a = e), (i = 1), (c = t));
                  } finally {
                    u = 1;
                  }
                }
                return { value: t, done: l };
              };
            })(r, a, i),
            !0,
          ),
          f
        );
      }
      var s = {};
      function u() {}
      function f() {}
      function l() {}
      t = Object.getPrototypeOf;
      var p = [][a]
          ? t(t([][a]()))
          : (n((t = {}), a, function () {
              return this;
            }),
            t),
        d = (l.prototype = u.prototype = Object.create(p));
      function v(e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, l)
            : ((e.__proto__ = l), n(e, i, "GeneratorFunction")),
          (e.prototype = Object.create(d)),
          e
        );
      }
      return (
        (f.prototype = l),
        n(d, "constructor", l),
        n(l, "constructor", f),
        (f.displayName = "GeneratorFunction"),
        n(l, i, "GeneratorFunction"),
        n(d),
        n(d, i, "Generator"),
        n(d, a, function () {
          return this;
        }),
        n(d, "toString", function () {
          return "[object Generator]";
        }),
        (r = function () {
          return { w: c, m: v };
        })()
      );
    }
    function n(e, t, r, o) {
      var a = Object.defineProperty;
      try {
        a({}, "", {});
      } catch (e) {
        a = 0;
      }
      (n = function (e, t, r, o) {
        if (t)
          a
            ? a(e, t, {
                value: r,
                enumerable: !o,
                configurable: !o,
                writable: !o,
              })
            : (e[t] = r);
        else {
          var i = function (t, r) {
            n(e, t, function (e) {
              return this._invoke(t, r, e);
            });
          };
          (i("next", 0), i("throw", 1), i("return", 2));
        }
      })(e, t, r, o);
    }
    function o(e, t, r, n, o, a, i) {
      try {
        var c = e[a](i),
          s = c.value;
      } catch (e) {
        return void r(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(n, o);
    }
    function a(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, a) {
          var i = e.apply(t, r);
          function c(e) {
            o(i, n, a, c, s, "next", e);
          }
          function s(e) {
            o(i, n, a, c, s, "throw", e);
          }
          c(void 0);
        });
      };
    }
    var i, c;
    self.importScripts("SpreadsheetEditorEngine.js");
    var s = "startup",
      u = "initialize",
      f = "jsonToXlsx",
      l = "excelToJson",
      p = "engineLoaded",
      d = "engineLoadedError";
    function v() {
      return y.apply(this, arguments);
    }
    function y() {
      return (y = a(
        r().m(function e() {
          var t;
          return r().w(
            function (e) {
              for (;;)
                switch ((e.p = e.n)) {
                  case 0:
                    return ((e.p = 0), (e.n = 1), LtExcelEngineModule());
                  case 1:
                    ((i = e.v), self.postMessage({ type: p }), (e.n = 3));
                    break;
                  case 2:
                    ((e.p = 2),
                      (t = e.v),
                      self.postMessage({
                        type: d,
                        message:
                          "Error loading Leadtools.ExcelEngine.wasm, ".concat(
                            t.message,
                          ),
                      }));
                  case 3:
                    return e.a(2);
                }
            },
            e,
            null,
            [[0, 2]],
          );
        }),
      )).apply(this, arguments);
    }
    function g(e) {
      var t = null;
      try {
        var r = e.data.value;
        if (r) {
          var n = i.lengthBytesUTF8(r) + 1;
          ((t = i._malloc(n)), i.stringToUTF8(r, t, n));
        }
        var o = i._L_ExcelEngine_WASM_Initialize(t);
        self.postMessage({ type: e.data.action, message: "success", data: o });
      } catch (t) {
        self.postMessage({
          type: e.data.action,
          errorMessage: "Error Initializing Engine, ".concat(t),
        });
      } finally {
        t && i._free(t);
      }
    }
    function _(e) {
      var t = e.data.value,
        r = i._malloc(4),
        n = i.lengthBytesUTF8(t) + 1,
        o = i._malloc(n);
      i.stringToUTF8(t, o, n);
      var a = i._L_ExcelEngine_WASM_JsonToXlsx(o, r),
        c = i.HEAP32[r >> 2],
        s = new Uint8Array(i.HEAPU8.buffer, a, c);
      (self.postMessage({ type: f, message: s }),
        i._free(o),
        i._free(a),
        i._free(r));
    }
    function b(e) {
      var t, r, n;
      try {
        var o = e.data.value;
        n = i._malloc(4);
        var a = new Uint8Array(o);
        ((r = i._malloc(a.length)),
          i.HEAPU8.set(a, r),
          (t = i._L_ExcelEngine_WASM_ExcelToJson(r, a.length, n)));
        var c = i.HEAP32[n >> 2],
          s = new Uint8Array(i.HEAPU8).subarray(t, t + c),
          u = new TextDecoder("utf-8").decode(s);
        self.postMessage({ type: e.data.action, message: u });
      } catch (t) {
        self.postMessage({
          type: e.data.action,
          errorMessage: 'Error converting XLSX to supported format: "'.concat(
            t,
            '"',
          ),
        });
      } finally {
        (void 0 !== t && i._free(t),
          void 0 !== r && i._free(r),
          void 0 !== n && i._free(n));
      }
    }
    ((self.onmessage = (function () {
      var e = a(
        r().m(function e(t) {
          var n;
          return r().w(function (e) {
            for (;;)
              switch (e.n) {
                case 0:
                  ((c = t.data.action),
                    (n = t.data.action),
                    (e.n =
                      n === s
                        ? 1
                        : n === u
                          ? 3
                          : n === f
                            ? 4
                            : n === l
                              ? 5
                              : 6));
                  break;
                case 1:
                  return ((e.n = 2), v());
                case 2:
                  return e.a(3, 7);
                case 3:
                  return (g(t), e.a(3, 7));
                case 4:
                  return (_(t), e.a(3, 7));
                case 5:
                  return (b(t), e.a(3, 7));
                case 6:
                  console.error(
                    "Unknown SpreadsheetEditor worker message: ".concat(
                      t.data.action,
                      ".",
                    ),
                  );
                case 7:
                  return e.a(2);
              }
          }, e);
        }),
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })()),
      (self.onerror = function (e) {
        (this.postMessage({
          type: c,
          errorMessage: "Error in action [".concat(c, "]."),
          error: e,
        }),
          console.error(e));
      }));
  },
]);
