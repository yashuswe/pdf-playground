(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    2087: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(12),
        n(31),
        n(26),
        n(28),
        n(59),
        n(24),
        n(8),
        n(91),
        n(11),
        n(13));
      var r = n(0),
        i = n.n(r),
        o = n(82),
        a = n(2),
        l = n.n(a),
        c = n(7),
        u = n(69),
        s = n(63),
        f = n(6),
        y = n(4),
        m = n(250);
      function b(t) {
        return (b =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(null, arguments);
      }
      function v(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != b(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" != b(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == b(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var d = {
          styleType: l.a.oneOf(Object.values(c.v)).isRequired,
          isFlyoutItem: l.a.bool,
          dataElement: l.a.string,
          style: l.a.object,
          className: l.a.string,
          img: l.a.string,
          title: l.a.string,
        },
        g = Object(r.forwardRef)(function (t, e) {
          var n = t.isFlyoutItem,
            r = t.styleType,
            a = t.style,
            l = t.className,
            c = s.b["".concat(r, "Button")],
            b = t.dataElement,
            d = void 0 === b ? c.dataElement : b,
            g = t.img,
            w = void 0 === g ? c.icon : g,
            j = t.title,
            O = void 0 === j ? c.title : j,
            S = Object(f.e)(function (t) {
              return y.a.getActiveCellRangeFontStyle(t, r);
            }),
            E = function () {
              Object(m.a)(v({}, r, !S));
            };
          return n
            ? i.a.createElement(
                u.a,
                p({}, t, {
                  ref: e,
                  onClick: E,
                  additionalClass: S ? "active" : "",
                }),
              )
            : i.a.createElement(o.a, {
                ariaCurrent: S,
                isActive: S,
                dataElement: d,
                title: O,
                img: w,
                onClick: E,
                style: a,
                className: l,
              });
        });
      ((g.propTypes = d),
        (g.displayName = "CellDecoratorButton"),
        (e.default = g));
    },
  },
]);
//# sourceMappingURL=chunk.90.js.map
