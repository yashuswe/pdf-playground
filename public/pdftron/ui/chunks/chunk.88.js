(window.webpackJsonp = window.webpackJsonp || []).push([
  [88],
  {
    2088: function (t, e, n) {
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
        a = n(1),
        l = n(6),
        u = n(4),
        c = n(2),
        s = n.n(c),
        f = n(69),
        y = n(63),
        m = n(7);
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
      function d(t, e, n) {
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
      var v = {
          styleType: s.a.oneOf(Object.values(m.v)).isRequired,
          isFlyoutItem: s.a.bool,
          dataElement: s.a.string,
          style: s.a.object,
          className: s.a.string,
          img: s.a.string,
          title: s.a.string,
        },
        g = Object(r.forwardRef)(function (t, e) {
          var n = t.isFlyoutItem,
            r = t.styleType,
            c = t.style,
            s = t.className,
            m = y.b["".concat(r, "Button")],
            b = t.dataElement,
            v = void 0 === b ? m.dataElement : b,
            g = t.img,
            w = void 0 === g ? m.icon : g,
            S = t.title,
            j = void 0 === S ? m.title : S,
            O = Object(l.e)(function (t) {
              return u.a.isStyleButtonActive(t, r);
            }),
            E = function () {
              a.a.getOfficeEditor().updateSelectionAndCursorStyle(d({}, r, !0));
            };
          return n
            ? i.a.createElement(
                f.a,
                p({}, t, {
                  ref: e,
                  onClick: E,
                  additionalClass: O ? "active" : "",
                }),
              )
            : i.a.createElement(o.a, {
                key: r,
                isActive: O,
                onClick: E,
                dataElement: v,
                title: j,
                img: w,
                ariaPressed: O,
                style: c,
                className: s,
              });
        });
      ((g.propTypes = v),
        (g.displayName = "FontStyleToggleButton"),
        (e.default = g));
    },
  },
]);
//# sourceMappingURL=chunk.88.js.map
