(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    1846: function (e, t, r) {
      "use strict";
      (r(9),
        r(10),
        r(14),
        r(30),
        r(38),
        r(34),
        r(81),
        r(27),
        r(12),
        r(85),
        r(44),
        r(99),
        r(31),
        r(26),
        r(28),
        r(59),
        r(48),
        r(24),
        r(47),
        r(49),
        r(37),
        r(8),
        r(56),
        r(17),
        r(11),
        r(115),
        r(29),
        r(13));
      var n = r(0),
        o = r.n(n),
        a = r(2),
        c = r.n(a),
        i = r(6),
        u = r(254),
        l = r(353),
        f = r(349),
        p = r(82),
        s = r(596),
        m = r(184),
        y = r(4);
      function b(e) {
        return (b =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function d() {
        return (d = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function g(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != b(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != b(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == b(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var j = {
          dataElement: c.a.string.isRequired,
          children: c.a.arrayOf(c.a.any).isRequired,
        },
        E = function (e) {
          var t = e.dataElement,
            r = e.children,
            n = e.childrenClassName,
            a = Object(i.e)(function (e) {
              return y.a.getPopupItems(e, t);
            }, i.c),
            c = o.a.Children.toArray(r);
          return a.map(function (e, t) {
            var r = e.dataElement,
              a = e.type,
              i = e.hidden,
              y = "".concat(a, "-").concat(r || t),
              b =
                null == i
                  ? void 0
                  : i
                      .map(function (e) {
                        return "hide-in-".concat(e);
                      })
                      .join(" "),
              v = c.find(function (e) {
                return e.props.dataElement === r;
              });
            if (!v) {
              var g = O(O({}, e), {}, { mediaQueryClassName: b, className: n });
              ("toolButton" === a && (v = o.a.createElement(u.a, g)),
                "toolGroupButton" === a && (v = o.a.createElement(l.a, g)),
                "toggleElementButton" === a && (v = o.a.createElement(f.a, g)),
                "actionButton" === a && (v = o.a.createElement(p.a, g)),
                "statefulButton" === a && (v = o.a.createElement(s.a, g)),
                "customElement" === a && (v = o.a.createElement(m.a, g)),
                ("spacer" !== a && "divider" !== a) ||
                  (v = o.a.createElement(
                    "div",
                    d({ className: "".concat(a, " ").concat(b) }, g),
                  )));
            }
            return v ? o.a.cloneElement(v, { key: y }) : null;
          });
        };
      E.propTypes = j;
      var w = E;
      t.a = w;
    },
  },
]);
//# sourceMappingURL=chunk.9.js.map
