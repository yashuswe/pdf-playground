(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    2123: function (e, t, a) {
      "use strict";
      a.r(t);
      (a(26), a(59), a(91));
      var n = a(0),
        i = a.n(n),
        c = a(82),
        r = a(2),
        s = a.n(r),
        o = a(69),
        l = a(63),
        u = a(87),
        d =
          (a(22),
          function (e) {
            return "string" != typeof e
              ? ""
              : e.charAt(0).toUpperCase() + e.slice(1);
          }),
        p = a(6),
        b = a(4),
        m = a(1);
      var f = function (e) {
        if (e) {
          var t = m.a
            .getDocumentViewer()
            .getDocument()
            .getSpreadsheetEditorDocument()
            .getClipboard();
          switch (e) {
            case "copy":
              t.copy();
              break;
            case "paste":
              t.paste();
              break;
            case "cut":
              t.cut();
          }
        }
      };
      function g() {
        return (g = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                  ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      var y = {
          actionType: s.a.oneOf(Object.values(u.b)).isRequired,
          isFlyoutItem: s.a.bool,
          dataElement: s.a.string,
          style: s.a.object,
          className: s.a.string,
          img: s.a.string,
          title: s.a.string,
        },
        v = Object(n.forwardRef)(function (e, t) {
          var a = e.isFlyoutItem,
            n = e.actionType,
            r = e.style,
            s = e.className,
            u = "cell".concat(d(n)),
            m = e.dataElement,
            y = void 0 === m ? l.b[u].dataElement : m,
            v = e.img,
            w = void 0 === v ? l.b[u].icon : v,
            C = e.title,
            k = void 0 === C ? l.b[u].title : C,
            E = Object(p.e)(function (e) {
              var t = "getCan".concat(d(n)),
                a = b.a[t];
              return !!a && a(e);
            }),
            O = function () {
              f(n);
            };
          return a
            ? i.a.createElement(
                o.a,
                g({}, e, {
                  ref: t,
                  onClick: O,
                  additionalClass: "",
                  disabled: !E,
                }),
              )
            : i.a.createElement(c.a, {
                disabled: !E,
                key: n,
                isActive: !1,
                onClick: O,
                dataElement: y,
                title: k,
                img: w,
                ariaPressed: !1,
                style: r,
                className: s,
              });
        });
      ((v.propTypes = y), (v.displayName = "CopyPasteCutButton"));
      t.default = v;
    },
  },
]);
//# sourceMappingURL=chunk.92.js.map
