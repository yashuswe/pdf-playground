(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    2139: function (e, t, r) {
      "use strict";
      r.r(t);
      (r(26), r(59));
      var n = r(0),
        a = r.n(n),
        i = r(82),
        o = r(2),
        l = r.n(o),
        c = r(69),
        u = r(63),
        s = r(6),
        f = r(4),
        m =
          (r(9),
          r(10),
          r(14),
          r(38),
          r(21),
          r(50),
          r(20),
          r(12),
          r(22),
          r(18),
          r(16),
          r(1608),
          r(8),
          r(17),
          r(19),
          r(470),
          r(62),
          r(11),
          r(180),
          r(2073),
          r(115),
          r(153),
          r(13),
          r(1)),
        d = r(87);
      function v(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                i,
                o,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (l.push(n.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return g(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? g(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var y = /^([^\d#,.%]{0,10}[#0,]+)(\.0+)?([^\d]{0,10})$/,
        p = function (e) {
          return /^#,##0(\.0+)?;\(#,##0(\.0+)?\)$/.test(e);
        },
        b = function (e) {
          return /^_\(\$\* #,##0(\.0+)?_\);_\(\$\* \(#,##0(\.0+)?\);$/.test(e);
        };
      var h = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {
                  preserveTrailingSemicolon: !1,
                  adjustDecimalFunction: void 0,
                };
          if (!t.adjustDecimalFunction || !e.includes(";")) return e;
          var r = t.preserveTrailingSemicolon,
            n = void 0 !== r && r,
            a = t.adjustDecimalFunction,
            i = n && e.endsWith(";"),
            o = n ? e.replace(/;$/, "") : e,
            l = o.split(";"),
            c = v(l, 2),
            u = c[0],
            s = c[1],
            f = a(u),
            m = s ? a(s) : f,
            d = "".concat(f, ";").concat(m);
          return (i && (d += ";"), d);
        },
        S = function (e) {
          return e.replace(/(0)(\.0+)?/, function (e, t, r) {
            return r
              ? "".concat(t, ".").concat("0".repeat(r.length - 1 + 1))
              : "".concat(t, ".0");
          });
        },
        j = function (e) {
          var t = e.match(y);
          if (!t || t.length < 2) return e;
          var r = t[1],
            n = t[2] || "",
            a = t[3] || "";
          return n
            ? ("." === (n = n.slice(0, -1)) && (n = ""),
              "".concat(r).concat(n).concat(a))
            : e;
        };
      function w(e, t) {
        if (
          (function (e) {
            var t = /".+?"/.test(e),
              r = b(e),
              n = p(e),
              a = /[_*@]/.test(e),
              i = null == e ? void 0 : e.includes(";"),
              o = "general" === e.trim().toLowerCase(),
              l = /\b([ymdhs])\1*\b/i.test(e);
            return !e || o || l || t || (i && !n && !r) || (a && !r);
          })(e)
        )
          return e;
        var r = "increaseDecimalFormat" === t ? S : j;
        return p(e)
          ? h(e, { adjustDecimalFunction: r })
          : b(e)
            ? h(e, { preserveTrailingSemicolon: !0, adjustDecimalFunction: r })
            : r(e);
      }
      var F = function (e) {
        var t;
        (t =
          "decreaseDecimalFormat" === e || "increaseDecimalFormat" === e
            ? (function (e) {
                var t = m.a
                    .getDocumentViewer()
                    .getSpreadsheetEditorManager()
                    .getSelectedCells()[0],
                  r = t.getStyle();
                if (r) {
                  var n,
                    a = r.getDataFormatString();
                  return (
                    "General" === a &&
                      !Number.isNaN(t.numericCellValue) &&
                      (n = "#0"),
                    (n = w(n || a, e))
                  );
                }
              })(e)
            : d.h[e]) &&
          m.a
            .getDocumentViewer()
            .getSpreadsheetEditorManager()
            .setSelectedCellsStyle({ formatString: t });
      };
      function D() {
        return (D = Object.assign
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
      var C = {
          formatType: l.a.string,
          isFlyoutItem: l.a.bool,
          secondaryLabel: l.a.string,
          dataElement: l.a.string,
          style: l.a.object,
          className: l.a.string,
          selector: l.a.func,
          img: l.a.string,
          title: l.a.string,
        },
        E = Object(n.forwardRef)(function (e, t) {
          var r = e.isFlyoutItem,
            n = e.formatType,
            o = e.secondaryLabel,
            l = e.style,
            m = e.className,
            d = e.dataElement,
            v = void 0 === d ? u.b[n].dataElement : d,
            g = e.img,
            y = void 0 === g ? u.b[n].icon : g,
            p = e.title,
            b = void 0 === p ? u.b[n].title : p,
            h = Object(s.e)(function (e) {
              return f.a.getActiveCellFormatType(e);
            }),
            S = n === h,
            j = function () {
              F(n);
            };
          return r
            ? a.a.createElement(
                c.a,
                D({}, e, {
                  ref: t,
                  onClick: j,
                  secondaryLabel: o,
                  additionalClass: S ? "active" : "",
                }),
              )
            : a.a.createElement(i.a, {
                key: n,
                isActive: S,
                onClick: j,
                dataElement: v,
                title: b,
                img: y,
                ariaPressed: S,
                style: l,
                className: m,
              });
        });
      ((E.propTypes = C), (E.displayName = "CellFormatButton"));
      t.default = E;
    },
  },
]);
//# sourceMappingURL=chunk.91.js.map
