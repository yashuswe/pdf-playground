(window.webpackJsonp = window.webpackJsonp || []).push([
  [89],
  {
    2086: function (e, t, a) {
      "use strict";
      a.r(t);
      (a(26), a(59));
      var r = a(0),
        o = a.n(r),
        n = a(82),
        s = a(2),
        i = a.n(s),
        l = a(69),
        u = a(63),
        c = a(7),
        d = a(1);
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var E = {
          type: i.a.string,
          isFlyoutItem: i.a.bool,
          dataElement: i.a.string,
          style: i.a.object,
          className: i.a.string,
          buttonType: i.a.string,
          img: i.a.string,
          title: i.a.string,
        },
        v = Object(r.forwardRef)(function (e, t) {
          var a = e.isFlyoutItem,
            r = e.type,
            s = e.style,
            i = e.className,
            E = e.buttonType,
            v = e.dataElement,
            R = void 0 === v ? u.b[E].dataElement : v,
            T = e.img,
            f = void 0 === T ? u.b[E].icon : T,
            C = e.title,
            g = void 0 === C ? u.b[E].title : C,
            _ = function () {
              var e,
                t,
                a =
                  null === (e = d.a.getDocument()) ||
                  void 0 === e ||
                  null === (t = e.getSpreadsheetEditorDocument()) ||
                  void 0 === t
                    ? void 0
                    : t.getWorkbook(),
                r = null == a ? void 0 : a.getSheetAt(a.activeSheetIndex);
              if (!r)
                return console.error("SpreadsheetEditorDocument is not loaded");
              var o = d.a
                .getDocumentViewer()
                .getSpreadsheetEditorManager()
                .getSelectedCellRange();
              switch (E) {
                case c.a.INSERT_COLUMN_LEFT:
                  return void r.createColumns(o.firstColumn, 1);
                case c.a.INSERT_COLUMN_RIGHT:
                  return void r.createColumns(o.lastColumn + 1, 1);
                case c.a.INSERT_ROW_TOP:
                  return void r.createRows(o.firstRow, 1);
                case c.a.INSERT_ROW_BOTTOM:
                  return void r.createRows(o.lastRow + 1, 1);
                case c.a.INSERT_COLUMN_SHIFT_DOWN:
                  return;
                case c.a.INSERT_COLUMN_SHIFT_RIGHT:
                  for (var n = o.firstRow; n <= o.lastRow; n++)
                    for (
                      var s = r.getRowAt(n), i = o.firstColumn;
                      i <= o.lastColumn;
                      i++
                    )
                      s.createCell(i);
                  return;
                case c.a.DELETE_COLUMN:
                  return void r.removeColumns(
                    o.firstColumn,
                    o.lastColumn - o.firstColumn + 1,
                  );
                case c.a.DELETE_ROW:
                  return void r.removeRows(
                    o.firstRow,
                    o.lastRow - o.firstRow + 1,
                  );
                case c.a.DELETE_COLUMN_SHIFT_UP:
                case c.a.DELETE_COLUMN_SHIFT_LEFT:
                default:
                  return;
              }
            };
          return a
            ? o.a.createElement(
                l.a,
                m({}, e, { ref: t, onClick: _, additionalClass: "" }),
              )
            : o.a.createElement(n.a, {
                key: r,
                isActive: !1,
                onClick: _,
                dataElement: R,
                title: g,
                img: f,
                ariaPressed: !1,
                style: s,
                className: i,
              });
        });
      ((v.propTypes = E),
        (v.displayName = "CellAdjustmentButton"),
        (t.default = v));
    },
  },
]);
//# sourceMappingURL=chunk.89.js.map
