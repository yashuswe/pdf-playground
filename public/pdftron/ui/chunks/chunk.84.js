(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
  {
    2115: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(21),
        n(20),
        n(12),
        n(22),
        n(18),
        n(16),
        n(8),
        n(17),
        n(19),
        n(11),
        n(13));
      var r = n(0),
        a = n.n(r),
        l = n(305),
        i = n(41),
        o = n(5),
        c = n(60);
      n(1866);
      function u(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l,
                i,
                o = [],
                c = !0,
                u = !1;
              try {
                if (((l = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = l.call(n)).done) &&
                    (o.push(r.value), o.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return s(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? s(e, t)
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
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var m = function (e) {
          var t = e.closeModal,
            n = e.addLinkHandler,
            s = e.existingLink,
            m = u(Object(r.useState)(s), 2),
            f = m[0],
            d = m[1],
            b = u(Object(l.a)(), 1)[0],
            y = function () {
              (n(f), t());
            };
          return a.a.createElement(
            c.a,
            {
              className: "Modal LinkModal",
              "data-element": o.a.CONTENT_EDIT_LINK_MODAL,
              onMouseDown: t,
            },
            a.a.createElement(
              "div",
              {
                className: "container",
                onMouseDown: function (e) {
                  return e.stopPropagation();
                },
              },
              a.a.createElement(
                "div",
                { className: "header-container" },
                a.a.createElement(
                  "div",
                  { className: "header" },
                  a.a.createElement("label", null, b("link.insertLink")),
                  a.a.createElement(i.a, {
                    img: "icon-close",
                    onClick: t,
                    title: "action.close",
                  }),
                ),
              ),
              a.a.createElement(
                "div",
                { className: "tab-panel" },
                a.a.createElement(
                  "div",
                  { className: "panel-body" },
                  a.a.createElement(
                    "div",
                    { className: "add-url-link" },
                    a.a.createElement(
                      "form",
                      { onSubmit: y },
                      a.a.createElement(
                        "label",
                        { htmlFor: "urlInput", className: "inputLabel" },
                        b("link.enterUrlAlt"),
                      ),
                      a.a.createElement(
                        "div",
                        { className: "linkInput" },
                        a.a.createElement("input", {
                          id: "urlInput",
                          className: "urlInput",
                          value: f,
                          autoFocus: !0,
                          onChange: function (e) {
                            return d(e.target.value);
                          },
                        }),
                      ),
                    ),
                  ),
                ),
              ),
              a.a.createElement("div", { className: "divider" }),
              a.a.createElement(
                "div",
                { className: "footer" },
                a.a.createElement(i.a, {
                  className: "ok-button",
                  dataElement: "linkSubmitButton",
                  label: b("action.link"),
                  onClick: y,
                  disabled: !f.length,
                }),
              ),
            ),
          );
        },
        f = n(4),
        d = n(6),
        b = n(3);
      function y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l,
                i,
                o = [],
                c = !0,
                u = !1;
              try {
                if (((l = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = l.call(n)).done) &&
                    (o.push(r.value), o.length !== t);
                    c = !0
                  );
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return v(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? v(e, t)
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
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var p = function () {
        var e = y(
            Object(d.e)(function (e) {
              return [
                f.a.isElementOpen(e, o.a.CONTENT_EDIT_LINK_MODAL),
                f.a.getContentBoxEditor(e),
              ];
            }),
            2,
          ),
          t = e[0],
          n = e[1],
          l = Object(d.d)(),
          i = "";
        n && (i = n.hyperlink);
        var c = Object(r.useCallback)(
            function () {
              (l(b.a.closeElement(o.a.CONTENT_EDIT_LINK_MODAL)), n && n.blur());
            },
            [n],
          ),
          u = Object(r.useCallback)(
            function (e) {
              n && (n.insertHyperlink(e), n.blur());
            },
            [n],
          );
        return t
          ? a.a.createElement(m, {
              closeModal: c,
              addLinkHandler: u,
              existingLink: i,
            })
          : null;
      };
      t.default = p;
    },
  },
]);
//# sourceMappingURL=chunk.84.js.map
