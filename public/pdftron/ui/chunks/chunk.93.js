(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    2138: function (e, t, a) {
      "use strict";
      a.r(t);
      (a(26), a(59));
      var n = a(0),
        l = a.n(n),
        i = a(82),
        r = a(6),
        s = a(2),
        o = a.n(s),
        c = a(4),
        g = a(69),
        d = a(63),
        u = a(1);
      var m = function (e) {
        u.a
          .getDocumentViewer()
          .getSpreadsheetEditorManager()
          .setSelectedCellsStyle({ merge: e });
      };
      function p() {
        return (p = Object.assign
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
      var f = {
          type: o.a.string,
          isFlyoutItem: o.a.bool,
          dataElement: o.a.string,
          style: o.a.object,
          className: o.a.string,
          img: o.a.string,
          title: o.a.string,
        },
        b = Object(n.forwardRef)(function (e, t) {
          var a = Object(r.e)(function (e) {
              return c.a.getIsCellRangeMerged(e);
            }),
            n = Object(r.e)(function (e) {
              return c.a.getIsSingleCell(e);
            }),
            s = d.b[a ? "cellUnmergeToggle" : "cellMergeToggle"],
            o = e.isFlyoutItem,
            u = e.type,
            f = e.style,
            b = e.className,
            y = e.dataElement,
            v = void 0 === y ? s.dataElement : y,
            w = e.img,
            E = void 0 === w ? s.icon : w,
            j = e.title,
            C = void 0 === j ? s.title : j,
            O = function () {
              m(!a);
            };
          return o
            ? l.a.createElement(
                g.a,
                p({}, e, {
                  ref: t,
                  onClick: O,
                  additionalClass: a ? "active" : "",
                  disabled: n,
                }),
              )
            : l.a.createElement(i.a, {
                key: u,
                isActive: a,
                onClick: O,
                dataElement: v,
                title: C,
                img: E,
                ariaPressed: a,
                style: f,
                className: b,
                disabled: n,
              });
        });
      ((b.propTypes = f), (b.displayName = "MergeToggleButton"));
      t.default = b;
    },
  },
]);
//# sourceMappingURL=chunk.93.js.map
