(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    1964: function (e, n, t) {
      var o = t(35),
        i = t(1965);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(n).forEach((e) => o.push(e)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...e(n, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < n.length; o++) {
            const i = n[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (i.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      e.exports = i.locals || {};
    },
    1965: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FileListPanel{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;width:100%;height:100%;overflow:auto;padding-top:20px;padding-bottom:20px;background-color:var(--document-background-color);border-radius:4px}.FileListPanel ul{display:flex;flex-wrap:wrap;justify-content:center;align-content:flex-start;list-style:none;margin:0;padding:16px;height:30em;width:100%}.FileListPanel ul li.selected{border:1px solid #48a4e0}.FileListPanel ul li{background:var(--gray-1);border:1px solid var(--blue-1);box-sizing:border-box;border-radius:6px;width:100%;height:60px;margin:4px 0;padding:8px 10px;display:flex;flex-direction:row;cursor:pointer}.FileListPanel ul li:hover{border:1px solid #48a4e0}.FileListPanel ul li .li-div{background:#fff;width:42px;height:100%;float:inline-start;border-radius:4px;position:relative}.FileListPanel ul li .li-div-img{position:absolute;inset-block-start:50%;inset-inline-start:50%;transform:translateY(-50%) translateX(-50%);width:28px}.FileListPanel ul li .li-div-img.with-border{height:34px;border:1px solid var(--blue-1)}.FileListPanel ul li .li-div-txt{margin-inline-start:10px;line-height:40px}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    1969: function (e, n, t) {
      var o = t(35),
        i = t(1970);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let n;
          ((n = document.getElementsByTagName("apryse-webviewer")),
            n.length ||
              (n = (function e(n, t = document) {
                const o = [];
                return (
                  t.querySelectorAll(n).forEach((e) => o.push(e)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && o.push(...e(n, t.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const t = [];
          for (let o = 0; o < n.length; o++) {
            const i = n[o];
            if (0 === o)
              (i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  t.length > 0 &&
                    t.forEach((n) => {
                      n.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const n = e.cloneNode(!0);
              (i.shadowRoot.appendChild(n), t.push(n));
            }
          }
        },
        singleton: !1,
      };
      o(i, a);
      e.exports = i.locals || {};
    },
    1970: function (e, n, t) {
      ((n = e.exports = t(36)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.fileSelectedPanel.container{width:791px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel.container{width:494px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel.container .page-number-input{width:92px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel.container{width:494px}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel.container .page-number-input{width:92px}}.fileSelectedPanel .modal-container .wrapper .header-container{padding-bottom:16px!important}.fileSelectedPanel .header .left-header{display:flex;align-items:center;grid-gap:4px;gap:4px}.fileSelectedPanel .header .Button{justify-content:center}.fileSelectedPanel .header .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.fileSelectedPanel .page-number-error{margin-top:8px;font-size:13px;color:var(--color-message-error)}.fileSelectedPanel .page-replacement-text{padding:0 8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .page-replacement-text{padding:0;display:flex;justify-content:center;align-items:center}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .page-replacement-text{padding:0;display:flex;justify-content:center;align-items:center}}.fileSelectedPanel .modal-body{padding:16px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body .thumb-card{width:132px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body .thumb-card{width:132px}}.fileSelectedPanel .modal-body .modal-body-container{display:flex}.fileSelectedPanel .modal-body .modal-body-container.isLoading{justify-content:center;align-items:center}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body .modal-body-container{padding:18px;height:calc(100vh - 296px)}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body .modal-body-container .thumb-card{flex:0 0 calc(50% - 10px);box-sizing:border-box}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body .modal-body-container .thumb-card-img{height:110px;width:83px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body .modal-body-container .thumb-body{align-items:center}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body .modal-body-container .thumb-image{width:100%;padding-inline-end:0}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body .modal-body-container .ui__choice__input{position:absolute;inset-block-start:6px;inset-inline-end:6px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body .modal-body-container .ui__choice{margin:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body .modal-body-container{padding:18px;height:calc(100vh - 296px)}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body .modal-body-container .thumb-card{flex:0 0 calc(50% - 10px);box-sizing:border-box}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body .modal-body-container .thumb-card-img{height:110px;width:83px}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body .modal-body-container .thumb-body{align-items:center}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body .modal-body-container .thumb-image{width:100%;padding-inline-end:0}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body .modal-body-container .ui__choice__input{position:absolute;inset-block-start:6px;inset-inline-end:6px}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body .modal-body-container .ui__choice{margin:0}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .modal-body{height:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .modal-body{height:100%}}.fileSelectedPanel .replace-page-input-container{height:60px;margin-bottom:8px;display:flex;align-items:baseline}.fileSelectedPanel .replace-page-input-container :first-child{padding-inline-start:0}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .replace-page-input-container{justify-content:space-between}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .replace-page-input-container :first-child{padding-inline-end:8px;padding-inline-start:0}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .replace-page-input-container{justify-content:space-between}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .replace-page-input-container :first-child{padding-inline-end:8px;padding-inline-start:0}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .replace-page-input-container{display:grid;grid-template-columns:auto auto auto;grid-gap:16px;grid-row-gap:24px;row-gap:24px;margin-bottom:32px;height:88px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .replace-page-input-container .page-number-error{margin-top:4px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .replace-page-input-container{display:grid;grid-template-columns:auto auto auto;grid-gap:16px;grid-row-gap:24px;row-gap:24px;margin-bottom:32px;height:88px}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .replace-page-input-container .page-number-error{margin-top:4px}}.fileSelectedPanel .replace-page-input{padding-inline-start:8px;padding-inline-end:8px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .replace-page-input{padding-inline-end:0;padding-inline-start:4px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .replace-page-input .page-replace-doc-name{word-break:break-all}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .replace-page-input{padding-inline-end:0;padding-inline-start:4px}.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .replace-page-input .page-replace-doc-name{word-break:break-all}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .replace-page-input{display:flex;justify-content:left;align-items:center;padding-inline-start:0;padding-inline-end:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .replace-page-input{display:flex;justify-content:left;align-items:center;padding-inline-start:0;padding-inline-end:0}}.fileSelectedPanel .page-replace-doc-name{font-weight:700}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .header-container{height:72px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .header-container{height:72px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .fileSelectedPanel .deselect-thumbnails{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .fileSelectedPanel .deselect-thumbnails{font-size:13px}}",
        "",
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2093: function (e, n, t) {
      "use strict";
      t.r(n);
      (t(9),
        t(10),
        t(14),
        t(30),
        t(34),
        t(27),
        t(21),
        t(20),
        t(12),
        t(22),
        t(31),
        t(18),
        t(16),
        t(28),
        t(48),
        t(24),
        t(47),
        t(49),
        t(37),
        t(8),
        t(17),
        t(19),
        t(11),
        t(29),
        t(13));
      var o = t(0),
        i = t.n(o),
        a = t(4),
        r = t(3),
        l = t(6),
        c = (t(76), t(26), t(40), t(42), t(43), t(56), t(468), t(15)),
        p = t.n(c),
        d = t(1),
        s = t(305),
        u =
          (t(81),
          t(44),
          t(1964),
          function (e) {
            var n = e.defaultValue,
              t = e.onFileSelect,
              o = e.list,
              a = void 0 === o ? [] : o,
              r = (n || {}).id,
              l = a.map(function (e, n) {
                var o = r === e.id,
                  l = p()({ selected: o }),
                  c = (function (e) {
                    if (e.hasOwnProperty("thumbnail")) {
                      var n = null,
                        t = e.thumbnail;
                      t.url ? (n = t.url) : t.toDataURL && (n = t.toDataURL());
                      var o = i.a.createElement("img", {
                        src: n,
                        className: "li-div-img",
                      });
                      return i.a.createElement(
                        "div",
                        { className: "li-div" },
                        o,
                      );
                    }
                    return null;
                  })(e);
                return i.a.createElement(
                  "li",
                  {
                    tabIndex: "0",
                    key: n,
                    onClick: function () {
                      return (function (e) {
                        t(
                          a.find(function (n) {
                            return n.id === e;
                          }),
                        );
                      })(e.id);
                    },
                    onKeyDown: function (n) {
                      return (function (e, n) {
                        "Enter" === e.key &&
                          t(
                            a.find(function (e) {
                              return e.id === n;
                            }),
                          );
                      })(n, e.id);
                    },
                    className: l,
                  },
                  c,
                  i.a.createElement(
                    "div",
                    { className: "li-div-txt" },
                    e.filename,
                  ),
                );
              });
            return i.a.createElement(
              "div",
              { className: "FileListPanel" },
              i.a.createElement("ul", null, l),
            );
          }),
        m = t(1878),
        f = t(483),
        b = t(138),
        y = t(41),
        g = (t(59), t(38), t(118), t(111), t(476)),
        h = (t(1798), t(1969), t(1873)),
        w = t(61),
        x = t(373);
      function v(e) {
        return (v =
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
      function P(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o));
        }
        return t;
      }
      function S(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? P(Object(t), !0).forEach(function (n) {
                E(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      function E(e, n, t) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ("object" != v(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(e, n || "default");
                if ("object" != v(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === n ? String : Number)(e);
            })(e, "string");
            return "symbol" == v(n) ? n : n + "";
          })(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function O(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                i,
                a,
                r,
                l = [],
                c = !0,
                p = !1;
              try {
                if (((a = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    c = !0
                  );
              } catch (e) {
                ((p = !0), (i = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (p) throw i;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return j(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? j(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function j(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var k = i.a.forwardRef(function (e, n) {
        var t = e.closeThisModal,
          a = e.clearLoadedFile,
          r = e.pageIndicesToReplace,
          l = e.sourceDocument,
          c = e.replacePagesHandler,
          d = e.documentInViewer,
          u = e.closeModalWarning,
          m = O(Object(s.a)(), 1)[0],
          f = O(
            Object(o.useState)(
              r.map(function (e) {
                return e + 1;
              }),
            ),
            2,
          ),
          b = f[0],
          v = f[1],
          P = O(Object(o.useState)([]), 2),
          j = P[0],
          k = P[1],
          A = O(Object(o.useState)({}), 2),
          N = A[0],
          T = A[1],
          F = O(Object(o.useState)(!0), 2),
          R = F[0],
          D = F[1],
          I = O(Object(o.useState)(null), 2),
          C = I[0],
          M = I[1],
          _ = O(Object(o.useState)(null), 2),
          L = _[0],
          H = _[1],
          B = O(Object(o.useState)(0), 2),
          G = B[0],
          z = B[1],
          W = O(Object(o.useState)(""), 2),
          U = W[0],
          V = W[1],
          q = O(Object(o.useState)(""), 2),
          $ = q[0],
          J = q[1],
          K = Object(w.d)(),
          X = Object(w.b)(),
          Y = function () {
            var e = [];
            for (var n in N) N[n] && e.push(parseInt(n));
            return e;
          };
        (Object(o.useEffect)(
          function () {
            if (l) {
              for (var e = l.getPageCount(), n = {}, t = 1; t <= e; t++)
                n[t] = !0;
              T(n);
            }
          },
          [l],
        ),
          Object(o.useEffect)(
            function () {
              k(Y());
            },
            [N],
          ),
          Object(o.useEffect)(
            function () {
              function e(e) {
                return e.length > 25
                  ? K && !X
                    ? '"'
                        .concat(e.slice(0, 4), "...")
                        .concat(e.slice(e.length), '"')
                    : '"'
                        .concat(e.slice(0, 10), "...")
                        .concat(e.slice(e.length - 10), '"')
                  : '"'.concat(e, '"');
              }
              if (l) {
                var n = l.getPageCount();
                (z(n), M(e(l.getFilename())), H(e(d.getFilename())));
              }
            },
            [l],
          ));
        var Q = function (e) {
            e.length > 0 && J("");
            var n = e.reduce(function (e, n) {
              return S(S({}, e), {}, E({}, n, !0));
            }, {});
            T(S({}, n));
          },
          Z = function () {
            u();
          },
          ee = d.getPageCount();
        return i.a.createElement(
          "div",
          {
            className: "fileSelectedPanel container",
            onMouseDown: function (e) {
              return e.stopPropagation();
            },
            ref: n,
          },
          i.a.createElement(
            x.a,
            {
              title: m("component.pageReplaceModalTitle"),
              closeButtonDataElement: "pageReplacementModalClose",
              onCloseClick: Z,
              swipeToClose: !0,
              closeHandler: Z,
              backButtonDataElement: "insertFromFileBackButton",
              onBackClick: a,
            },
            i.a.createElement(
              "div",
              { className: "modal-body" },
              i.a.createElement(
                "div",
                { className: "replace-page-input-container" },
                i.a.createElement(
                  "div",
                  { className: "page-replacement-text" },
                  m("option.pageReplacementModal.pageReplaceInputLabel"),
                  ":",
                ),
                i.a.createElement(
                  "div",
                  { className: "replace-page-input-current-doc-containers" },
                  i.a.createElement(g.a, {
                    selectedPageNumbers: b,
                    pageCount: ee,
                    onSelectedPageNumbersChange: function (e) {
                      e.length > 0 && (V(""), v(e));
                    },
                    onBlurHandler: v,
                    onError: function (e) {
                      e &&
                        V(
                          ""
                            .concat(m("message.errorPageNumber"), " ")
                            .concat(ee),
                        );
                    },
                    pageNumberError: U,
                  }),
                ),
                i.a.createElement(
                  "div",
                  { className: "replace-page-input" },
                  i.a.createElement(
                    "span",
                    { className: "page-replace-doc-name" },
                    L,
                  ),
                ),
                i.a.createElement(
                  "div",
                  { className: "page-replacement-text" },
                  m("option.pageReplacementModal.pageReplaceInputFromSource"),
                  ":",
                ),
                i.a.createElement(g.a, {
                  selectedPageNumbers: j,
                  pageCount: G,
                  onSelectedPageNumbersChange: function (e) {
                    e.length > 0 ? (k(e), Q(e)) : Y();
                  },
                  onBlurHandler: Q,
                  onError: function (e) {
                    e &&
                      J("".concat(m("message.errorPageNumber"), " ").concat(G));
                  },
                  pageNumberError: $,
                }),
                i.a.createElement(
                  "div",
                  { className: "replace-page-input" },
                  i.a.createElement(
                    "span",
                    { className: "page-replace-doc-name" },
                    C,
                  ),
                ),
              ),
              i.a.createElement(
                "div",
                { className: p()("modal-body-container", { isLoading: R }) },
                i.a.createElement(h.a, {
                  document: l,
                  onThumbnailSelected: function (e) {
                    (void 0 === N[e] ? (N[e] = !0) : (N[e] = !N[e]),
                      T(S({}, N)));
                  },
                  selectedThumbnails: N,
                  onfileLoadedHandler: D,
                }),
              ),
            ),
            i.a.createElement("div", { className: "page-replacement-divider" }),
            i.a.createElement(
              "div",
              { className: p()("footer", { isFileSelected: !R }) },
              i.a.createElement(
                "button",
                {
                  className: p()("deselect-thumbnails", { disabled: R }),
                  onClick: function () {
                    T({});
                  },
                  disabled: R,
                },
                m("action.deselectAll"),
              ),
              i.a.createElement(y.a, {
                className: "modal-btn replace-btn",
                onClick: function () {
                  return ((e = Y()), c(l, b, e), void t());
                  var e;
                },
                label: m("action.replace"),
                disabled: (function () {
                  if (b.length < 1 || U || $) return !0;
                  for (var e in N) if (N[e]) return !1;
                  return !0;
                })(),
              }),
            ),
          ),
        );
      });
      k.displayName = "FileSelectedPanel";
      var A = k,
        N = t(122);
      function T() {
        return (T = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var o in t)
                  ({}).hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      var F = i.a.forwardRef(function (e, n) {
        var t = d.a.getDocument();
        return i.a.createElement(
          A,
          T({}, e, { documentInViewer: t, replacePagesHandler: N.n, ref: n }),
        );
      });
      F.displayName = "FileSelectedPanelContainer";
      var R = F,
        D = t(23);
      function I(e) {
        return (I =
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
      function C(e, n, t) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ("object" != I(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(e, n || "default");
                if ("object" != I(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === n ? String : Number)(e);
            })(e, "string");
            return "symbol" == I(n) ? n : n + "";
          })(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function M() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          n,
          t = "function" == typeof Symbol ? Symbol : {},
          o = t.iterator || "@@iterator",
          i = t.toStringTag || "@@toStringTag";
        function a(t, o, i, a) {
          var c = o && o.prototype instanceof l ? o : l,
            p = Object.create(c.prototype);
          return (
            _(
              p,
              "_invoke",
              (function (t, o, i) {
                var a,
                  l,
                  c,
                  p = 0,
                  d = i || [],
                  s = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: m,
                    f: m.bind(e, 4),
                    d: function (n, t) {
                      return ((a = n), (l = 0), (c = e), (u.n = t), r);
                    },
                  };
                function m(t, o) {
                  for (
                    l = t, c = o, n = 0;
                    !s && p && !i && n < d.length;
                    n++
                  ) {
                    var i,
                      a = d[n],
                      m = u.p,
                      f = a[2];
                    t > 3
                      ? (i = f === o) &&
                        ((c = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                        (a[4] = a[5] = e))
                      : a[0] <= m &&
                        ((i = t < 2 && m < a[1])
                          ? ((l = 0), (u.v = o), (u.n = a[1]))
                          : m < f &&
                            (i = t < 3 || a[0] > o || o > f) &&
                            ((a[4] = t), (a[5] = o), (u.n = f), (l = 0)));
                  }
                  if (i || t > 1) return r;
                  throw ((s = !0), o);
                }
                return function (i, d, f) {
                  if (p > 1) throw TypeError("Generator is already running");
                  for (
                    s && 1 === d && m(d, f), l = d, c = f;
                    (n = l < 2 ? e : c) || !s;

                  ) {
                    a ||
                      (l
                        ? l < 3
                          ? (l > 1 && (u.n = -1), m(l, c))
                          : (u.n = c)
                        : (u.v = c));
                    try {
                      if (((p = 2), a)) {
                        if ((l || (i = "next"), (n = a[i]))) {
                          if (!(n = n.call(a, c)))
                            throw TypeError("iterator result is not an object");
                          if (!n.done) return n;
                          ((c = n.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (n = a.return) && n.call(a),
                            l < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  i +
                                  "' method",
                              )),
                              (l = 1)));
                        a = e;
                      } else if ((n = (s = u.n < 0) ? c : t.call(o, u)) !== r)
                        break;
                    } catch (n) {
                      ((a = e), (l = 1), (c = n));
                    } finally {
                      p = 1;
                    }
                  }
                  return { value: n, done: s };
                };
              })(t, i, a),
              !0,
            ),
            p
          );
        }
        var r = {};
        function l() {}
        function c() {}
        function p() {}
        n = Object.getPrototypeOf;
        var d = [][o]
            ? n(n([][o]()))
            : (_((n = {}), o, function () {
                return this;
              }),
              n),
          s = (p.prototype = l.prototype = Object.create(d));
        function u(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, p)
              : ((e.__proto__ = p), _(e, i, "GeneratorFunction")),
            (e.prototype = Object.create(s)),
            e
          );
        }
        return (
          (c.prototype = p),
          _(s, "constructor", p),
          _(p, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          _(p, i, "GeneratorFunction"),
          _(s),
          _(s, i, "Generator"),
          _(s, o, function () {
            return this;
          }),
          _(s, "toString", function () {
            return "[object Generator]";
          }),
          (M = function () {
            return { w: a, m: u };
          })()
        );
      }
      function _(e, n, t, o) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (e) {
          i = 0;
        }
        (_ = function (e, n, t, o) {
          if (n)
            i
              ? i(e, n, {
                  value: t,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[n] = t);
          else {
            var a = function (n, t) {
              _(e, n, function (e) {
                return this._invoke(n, t, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, n, t, o);
      }
      function L(e, n, t, o, i, a, r) {
        try {
          var l = e[a](r),
            c = l.value;
        } catch (e) {
          return void t(e);
        }
        l.done ? n(c) : Promise.resolve(c).then(o, i);
      }
      function H(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(n, t);
            function r(e) {
              L(a, o, i, r, l, "next", e);
            }
            function l(e) {
              L(a, o, i, r, l, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function B(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                i,
                a,
                r,
                l = [],
                c = !0,
                p = !1;
              try {
                if (((a = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    c = !0
                  );
              } catch (e) {
                ((p = !0), (i = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (p) throw i;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return G(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? G(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function G(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var z = new RegExp(
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
          "m",
        ),
        W = { loadAsPDF: !0 },
        U = function (e) {
          var n = e.closeModal,
            t = e.selectableFiles,
            r = e.isOpen,
            c = e.selectedThumbnailPageIndexes,
            g = e.selectedTab,
            h = B(Object(s.a)(), 1)[0],
            w = B(Object(o.useState)({}), 2),
            v = w[0],
            P = w[1],
            S = B(Object(o.useState)(null), 2),
            E = S[0],
            O = S[1],
            j = B(Object(o.useState)(null), 2),
            k = j[0],
            A = j[1],
            T = B(Object(o.useState)(!1), 2),
            F = T[0],
            I = T[1],
            _ = B(Object(o.useState)(null), 2),
            L = _[0],
            G = _[1],
            U = Object(l.d)(),
            V = Object(l.e)(function (e) {
              var n;
              return null === (n = a.a.getFeatureFlags(e)) || void 0 === n
                ? void 0
                : n.customizableUI;
            });
          Object(o.useEffect)(
            function () {
              r && L !== g && G(g);
            },
            [r, L, g],
          );
          var q = function () {
              (A(null), I(!1));
              var e = Object(D.a)().querySelector(
                "#".concat("pageReplacementFileInputId"),
              );
              (e && (e.value = null), n(), G(null), P({}));
            },
            $ = function () {
              return Object(N.d)(q, U);
            },
            J = p()({
              Modal: !0,
              PageReplacementModal: !0,
              open: r,
              closed: !r,
              "modular-ui": V,
            }),
            K = v[L],
            X = (function () {
              var e = H(
                M().m(function e() {
                  var n, t;
                  return M().w(
                    function (e) {
                      for (;;)
                        switch ((e.p = e.n)) {
                          case 0:
                            if (!K || "customFileListPanelButton" !== L) {
                              e.n = 3;
                              break;
                            }
                            if (!K.onSelect) {
                              e.n = 2;
                              break;
                            }
                            return ((e.n = 1), K.onSelect());
                          case 1:
                            ((n = e.v), A(n));
                          case 2:
                            (I(!0), (e.n = 7));
                            break;
                          case 3:
                            if (!K) {
                              e.n = 7;
                              break;
                            }
                            return (
                              (e.p = 4),
                              (e.n = 5),
                              d.a.createDocument(K, W)
                            );
                          case 5:
                            ((n = e.v), A(n), I(!0), (e.n = 7));
                            break;
                          case 6:
                            ((e.p = 6),
                              (t = e.v),
                              O(h("message.urlInputFileLoadError")),
                              I(!1),
                              console.error("Error loading file from URL:", t));
                          case 7:
                            return e.a(2);
                        }
                    },
                    e,
                    null,
                    [[4, 6]],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Y = (function () {
              var e = H(
                M().m(function e(n) {
                  var t;
                  return M().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (
                            !(n instanceof Object(D.c)().instance.Core.Document)
                          ) {
                            e.n = 1;
                            break;
                          }
                          ((t = n), (e.n = 3));
                          break;
                        case 1:
                          return ((e.n = 2), d.a.createDocument(n, W));
                        case 2:
                          t = e.v;
                        case 3:
                          (A(t), I(!0));
                        case 4:
                          return e.a(2);
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            Q = void 0 === K;
          "urlInputPanelButton" !== L || z.test(K) || (Q = !0);
          var Z,
            ee = function () {
              (A(null), I(!1));
            };
          return r
            ? i.a.createElement(
                "div",
                {
                  className: J,
                  "data-element": "pageReplacementModal",
                  onMouseDown: F ? $ : q,
                  id: "pageReplacementModal",
                },
                F
                  ? i.a.createElement(R, {
                      closeThisModal: q,
                      clearLoadedFile: ee,
                      pageIndicesToReplace: c,
                      sourceDocument: k,
                      closeModalWarning: $,
                    })
                  : ((Z = t && t.length > 0),
                    i.a.createElement(
                      "div",
                      {
                        className: "container tabs",
                        onMouseDown: function (e) {
                          return e.stopPropagation();
                        },
                      },
                      i.a.createElement(
                        x.a,
                        {
                          isOpen: r,
                          title: h("component.pageReplaceModalTitle"),
                          closeButtonDataElement: "pageReplacementModalClose",
                          onCloseClick: q,
                          swipeToClose: !0,
                          closeHandler: q,
                        },
                        i.a.createElement("div", {
                          className: "swipe-indicator",
                        }),
                        i.a.createElement(
                          b.d,
                          {
                            className: "page-replacement-tabs",
                            id: "pageReplacementModal",
                          },
                          i.a.createElement(
                            "div",
                            { className: "tabs-header-container" },
                            i.a.createElement(
                              "div",
                              { role: "tablist", className: "tab-list" },
                              Z &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    b.a,
                                    {
                                      dataElement: "customFileListPanelButton",
                                    },
                                    i.a.createElement(
                                      "button",
                                      {
                                        role: "tab",
                                        className: "tab-options-button",
                                      },
                                      h(
                                        "option.pageReplacementModal.yourFiles",
                                      ),
                                    ),
                                  ),
                                  i.a.createElement("div", {
                                    className: "tab-options-divider",
                                  }),
                                ),
                              i.a.createElement(
                                b.a,
                                { dataElement: "urlInputPanelButton" },
                                i.a.createElement(
                                  "button",
                                  {
                                    role: "tab",
                                    className: "tab-options-button",
                                  },
                                  h("link.url"),
                                ),
                              ),
                              i.a.createElement("div", {
                                className: "tab-options-divider",
                              }),
                              i.a.createElement(
                                b.a,
                                { dataElement: "filePickerPanelButton" },
                                i.a.createElement(
                                  "button",
                                  {
                                    role: "tab",
                                    className: "tab-options-button",
                                  },
                                  h("option.pageReplacementModal.localFile"),
                                ),
                              ),
                            ),
                          ),
                          i.a.createElement(
                            b.c,
                            { dataElement: "customFileListPanel" },
                            i.a.createElement(
                              "div",
                              { className: "panel-body" },
                              i.a.createElement(u, {
                                onFileSelect: function (e) {
                                  P(C({}, L, e));
                                },
                                list: t,
                                defaultValue: K,
                              }),
                            ),
                          ),
                          i.a.createElement(
                            b.c,
                            { dataElement: "urlInputPanel" },
                            i.a.createElement(
                              "div",
                              { className: "panel-body" },
                              i.a.createElement(m.a, {
                                error: E,
                                onFileSelect: function (e) {
                                  P(C({}, L, e));
                                },
                                defaultValue: v.urlInputPanelButton,
                              }),
                            ),
                          ),
                          i.a.createElement(
                            b.c,
                            { dataElement: "filePickerPanel" },
                            i.a.createElement(
                              "div",
                              { className: "panel-body upload" },
                              i.a.createElement(f.a, {
                                fileInputId: "pageReplacementFileInputId",
                                onFileProcessed: function (e) {
                                  return Y(e);
                                },
                              }),
                            ),
                          ),
                        ),
                        i.a.createElement("div", {
                          className: "page-replacement-divider",
                        }),
                        i.a.createElement(
                          "div",
                          { className: "footer" },
                          i.a.createElement(y.a, {
                            className: p()("modal-btn", { noFile: Q }),
                            onClick: function () {
                              return Q ? null : X();
                            },
                            label: h("action.select"),
                            disabled: Q,
                          }),
                        ),
                      ),
                    )),
              )
            : null;
        };
      function V(e) {
        return (V =
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
      var q = ["closePageReplacement"];
      function $(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o));
        }
        return t;
      }
      function J(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? $(Object(t), !0).forEach(function (n) {
                K(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      function K(e, n, t) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ("object" != V(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(e, n || "default");
                if ("object" != V(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === n ? String : Number)(e);
            })(e, "string");
            return "symbol" == V(n) ? n : n + "";
          })(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var X = function (e) {
          var n = e.closePageReplacement,
            t = (function (e, n) {
              if (null == e) return {};
              var t,
                o,
                i = (function (e, n) {
                  if (null == e) return {};
                  var t = {};
                  for (var o in e)
                    if ({}.hasOwnProperty.call(e, o)) {
                      if (-1 !== n.indexOf(o)) continue;
                      t[o] = e[o];
                    }
                  return t;
                })(e, n);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                  ((t = a[o]),
                    -1 === n.indexOf(t) &&
                      {}.propertyIsEnumerable.call(e, t) &&
                      (i[t] = e[t]));
              }
              return i;
            })(e, q),
            a = Object(o.useCallback)(
              function () {
                n();
              },
              [n],
            ),
            r = J(J({}, t), {}, { closeModal: a });
          return i.a.createElement(U, r);
        },
        Y = t(5);
      function Q(e) {
        return (Q =
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
      function Z(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o));
        }
        return t;
      }
      function ee(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Z(Object(t), !0).forEach(function (n) {
                ne(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      function ne(e, n, t) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ("object" != Q(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var o = t.call(e, n || "default");
                if ("object" != Q(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === n ? String : Number)(e);
            })(e, "string");
            return "symbol" == Q(n) ? n : n + "";
          })(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function te(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                i,
                a,
                r,
                l = [],
                c = !0,
                p = !1;
              try {
                if (((a = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(t)).done) &&
                    (l.push(o.value), l.length !== n);
                    c = !0
                  );
              } catch (e) {
                ((p = !0), (i = e));
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((r = t.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (p) throw i;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return oe(e, n);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? oe(e, n)
                    : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function oe(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      var ie = function (e) {
        var n = Object(l.d)(),
          t = Object(l.e)(function (e) {
            return a.a.getPageReplacementFileList(e);
          }),
          o = te(
            Object(l.e)(function (e) {
              return [a.a.isElementOpen(e, Y.a.PAGE_REPLACEMENT_MODAL)];
            }),
            1,
          )[0],
          c = Object(l.e)(function (e) {
            return a.a.getSelectedThumbnailPageIndexes(e);
          }),
          p = Object(l.e)(function (e) {
            return a.a.getSelectedTab(e, Y.a.PAGE_REPLACEMENT_MODAL);
          }),
          d = ee(
            ee({}, e),
            {},
            {
              closePageReplacement: function () {
                n(r.a.closeElement(Y.a.PAGE_REPLACEMENT_MODAL));
              },
              selectableFiles: t,
              isOpen: o,
              selectedThumbnailPageIndexes: c,
              selectedTab: p,
            },
          );
        return i.a.createElement(X, d);
      };
      n.default = ie;
    },
  },
]);
//# sourceMappingURL=chunk.53.js.map
