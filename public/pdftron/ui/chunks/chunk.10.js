(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    1845: function (e, t, a) {
      "use strict";
      (a(9),
        a(10),
        a(14),
        a(21),
        a(20),
        a(12),
        a(22),
        a(18),
        a(16),
        a(8),
        a(17),
        a(19),
        a(11),
        a(13));
      var n = a(0),
        c = a.n(n),
        o = a(6),
        r = a(4),
        l = (a(38), a(305)),
        i = a(60),
        m = a(41);
      var s = function (e) {
          var t = Object(l.a)().t,
            a = e.deletePages,
            n = e.extractPages,
            o = e.insertPages,
            r = e.replacePages;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              i.a,
              { dataElement: "pageManipulationHeader", className: "type" },
              t("action.pageManipulation"),
            ),
            c.a.createElement(
              i.a,
              { className: "row", dataElement: "insertPage", onClick: o },
              c.a.createElement(m.a, {
                title: "action.insertPage",
                img: "icon-page-insertion-insert",
                role: "option",
                onClickAnnouncement: ""
                  .concat(t("action.insertPage"), " ")
                  .concat(t("action.modal"), " ")
                  .concat(t("action.isOpen")),
              }),
              c.a.createElement(
                "div",
                { className: "title" },
                t("action.insert"),
              ),
            ),
            c.a.createElement(
              i.a,
              { className: "row", dataElement: "replacePage", onClick: r },
              c.a.createElement(m.a, {
                title: "action.replacePage",
                img: "icon-page-replacement",
                role: "option",
                onClickAnnouncement: ""
                  .concat(t("action.replacePage"), " ")
                  .concat(t("action.modal"), " ")
                  .concat(t("action.isOpen")),
              }),
              c.a.createElement(
                "div",
                { className: "title" },
                t("action.replace"),
              ),
            ),
            c.a.createElement(
              i.a,
              { className: "row", dataElement: "extractPage", onClick: n },
              c.a.createElement(m.a, {
                title: "action.extractPage",
                img: "icon-page-manipulation-extract",
                role: "option",
                onClickAnnouncement: ""
                  .concat(t("action.extractPage"), " ")
                  .concat(t("action.modal"), " ")
                  .concat(t("action.isOpen")),
              }),
              c.a.createElement(
                "div",
                { className: "title" },
                t("action.extract"),
              ),
            ),
            c.a.createElement(
              i.a,
              { dataElement: "deletePage", className: "row", onClick: a },
              c.a.createElement(m.a, {
                title: "option.thumbnailPanel.delete",
                img: "icon-delete-line",
                role: "option",
                onClickAnnouncement: ""
                  .concat(t("action.delete"), " ")
                  .concat(t("action.modal"), " ")
                  .concat(t("action.isOpen")),
              }),
              c.a.createElement(
                "div",
                { className: "title" },
                t("action.delete"),
              ),
            ),
          );
        },
        u = a(122),
        p = a(2),
        g = a.n(p),
        E = a(3),
        b = a(45),
        d = a(5);
      function O(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != a) {
              var n,
                c,
                o,
                r,
                l = [],
                i = !0,
                m = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  i = !1;
                } else
                  for (
                    ;
                    !(i = (n = o.call(a)).done) &&
                    (l.push(n.value), l.length !== t);
                    i = !0
                  );
              } catch (e) {
                ((m = !0), (c = e));
              } finally {
                try {
                  if (
                    !i &&
                    null != a.return &&
                    ((r = a.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (m) throw c;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return f(e, t);
              var a = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                    ? f(e, t)
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
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var A = { pageNumbers: g.a.arrayOf(g.a.number), warn: g.a.bool };
      function P(e) {
        var t = Object(o.d)(),
          a = e.pageNumbers,
          n = e.warn,
          l = O(
            Object(o.e)(function (e) {
              return [r.a.pageDeletionConfirmationModalEnabled(e)];
            }),
            1,
          )[0],
          i = function () {
            (t(E.a.closeElement(d.a.PAGE_MANIPULATION_OVERLAY)),
              t(E.a.openElement("insertPageModal")));
          };
        return c.a.createElement(s, {
          insertPages: function () {
            (n ? !Object(u.k)(a, t) && i() : i(),
              Object(b.k)() &&
                t(E.a.closeElement(d.a.PAGE_MANIPULATION_OVERLAY)));
          },
          deletePages: function () {
            (n
              ? !Object(u.k)(a, t) && Object(u.b)(a, t, l)
              : Object(u.b)(a, t, l),
              Object(b.k)() &&
                t(E.a.closeElement(d.a.PAGE_MANIPULATION_OVERLAY)));
          },
          extractPages: function () {
            (n ? !Object(u.k)(a, t) && Object(u.e)(a, t) : Object(u.e)(a, t),
              Object(b.k)() &&
                t(E.a.closeElement(d.a.PAGE_MANIPULATION_OVERLAY)));
          },
          replacePages: function () {
            (n ? !Object(u.k)(a, t) && Object(u.m)(t) : Object(u.m)(t),
              Object(b.k)() &&
                t(E.a.closeElement(d.a.PAGE_MANIPULATION_OVERLAY)));
          },
        });
      }
      P.propTypes = A;
      var j = P;
      t.a = j;
    },
  },
]);
//# sourceMappingURL=chunk.10.js.map
