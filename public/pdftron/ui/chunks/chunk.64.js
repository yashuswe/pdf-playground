(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    1973: function (t, e, n) {
      var o = n(35),
        a = n(1974);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, ""]]);
      var i = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let e;
          ((e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function t(e, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(e).forEach((t) => o.push(t)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...t(e, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < e.length; o++) {
            const a = e[o];
            if (0 === o)
              (a.shadowRoot.appendChild(t),
                (t.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                }));
            else {
              const e = t.cloneNode(!0);
              (a.shadowRoot.appendChild(e), n.push(e));
            }
          }
        },
        singleton: !1,
      };
      o(a, i);
      t.exports = a.locals || {};
    },
    1974: function (t, e, n) {
      ((e = t.exports = n(36)(!1)).push([
        t.i,
        ".open.FilterAnnotModal{visibility:visible}.closed.FilterAnnotModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FilterAnnotModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.FilterAnnotModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.FilterAnnotModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.FilterAnnotModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.FilterAnnotModal .footer .modal-button.cancel:hover,.FilterAnnotModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.FilterAnnotModal .footer .modal-button.cancel,.FilterAnnotModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.FilterAnnotModal .footer .modal-button.cancel.disabled,.FilterAnnotModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.FilterAnnotModal .footer .modal-button.cancel.disabled span,.FilterAnnotModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.FilterAnnotModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.FilterAnnotModal .modal-container .wrapper .modal-content{padding:10px}.FilterAnnotModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.FilterAnnotModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.FilterAnnotModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.FilterAnnotModal .footer .modal-button.confirm{margin-inline-start:4px}.FilterAnnotModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .footer .modal-button{padding:23px 8px}}.FilterAnnotModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .swipe-indicator{width:32px}}.FilterAnnotModal .container .filter-modal .body .tab-list{width:100%;height:28px;display:flex;border-radius:4px;color:var(--text-color)}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button{background-color:transparent;text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button.selected{background:var(--tab-color-selected);cursor:default}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button.focus-visible,.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:focus-visible{outline:var(--focus-visible-outline)}.FilterAnnotModal{font-size:.9em}.FilterAnnotModal .container{display:flex;flex-direction:column;align-items:center;border-radius:4px;background:var(--component-background);width:360px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .container{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .container{width:100%}}.FilterAnnotModal .container .message{font-size:14px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .container .message{font-size:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .container .message{font-size:16px}}.FilterAnnotModal .container .filter-modal{display:flex;flex-direction:column;width:100%}.FilterAnnotModal .container .filter-modal .divider{height:1px;width:100%;background:var(--divider)}.FilterAnnotModal .container .filter-modal .header{display:flex;justify-content:space-between;margin:16px;font-size:16px;font-weight:700;align-items:center;height:24px}.FilterAnnotModal .container .filter-modal .header .Button{height:32px}.FilterAnnotModal .container .filter-modal .body{padding:16px}.FilterAnnotModal .container .filter-modal .body .filter-options{height:200px;width:100%}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel{height:100%;width:100%;display:flex;flex-direction:column}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .include-replies{display:flex;height:20px;margin-top:12px}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .include-replies label{color:var(--gray-7)}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .three-column-filter{margin-top:20px;overflow-y:scroll;display:grid;grid-gap:5px 16px;grid-template-columns:repeat(3,minmax(0,1fr))}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .color-filters{margin-top:20px;overflow-y:scroll;display:grid;grid-gap:16px;grid-template-columns:repeat(5,minmax(0,1fr))}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .buttons{display:grid;padding:6px 0;grid-template-columns:100px 100px}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .colorSelect{display:flex;flex-direction:row}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .colorSelect .colorCell{width:22px;height:22px;border-radius:10000000px;margin-inline-start:4px;border:1px solid var(--gray-6)}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel label{overflow:hidden}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel label div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.FilterAnnotModal .container .filter-modal .settings-body{display:flex;flex-direction:column;margin:16px 0 0;border:0;padding:16px;font-size:var(--font-size-default);grid-gap:12px;gap:12px}.FilterAnnotModal .container .filter-modal .settings-body .settings-header{font-weight:var(--font-weight-bold);padding:0}.FilterAnnotModal .container .filter-modal .settings-body .settings{display:flex;flex-direction:column;grid-gap:8px;gap:8px}.FilterAnnotModal .container .filter-modal .footer{display:flex;justify-content:space-between;width:100%;padding:16px;margin-top:0}.FilterAnnotModal .container .filter-modal .footer .Button{display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);padding:6px 18px;width:auto;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;height:32px;cursor:pointer}.FilterAnnotModal .container .filter-modal .footer .Button.filter-annot-apply:hover{background:var(--primary-button-hover)}.FilterAnnotModal .container .filter-modal .footer .Button.disabled{border-color:var(--gray-6);cursor:not-allowed}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear{color:var(--blue-5);background:none}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear:not(.disabled):hover{color:var(--secondary-button-hover);background:none}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear:disabled{opacity:.5}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear:disabled span{color:unset}.FilterAnnotModal .container .tab-list .tab-options-divider+.tab-options-button{border-inline-start:none!important}.FilterAnnotModal .container .tab-list .tab-options-button{border-top:1px solid var(--tab-border-color);border-bottom:1px solid var(--tab-border-color)}.FilterAnnotModal .container .tab-list .tab-options-button:first-child{border-inline-start:1px solid var(--tab-border-color)}.FilterAnnotModal .container .tab-list .tab-options-button:last-child{border-inline-end:1px solid var(--tab-border-color)}.FilterAnnotModal .container .tab-list .tab-options-button:hover{background:var(--tab-background-color-hover);border-top:1px solid var(--tab-border-color-hover);border-bottom:1px solid var(--tab-border-color-hover);border-inline-end:1px solid var(--tab-border-color-hover)}.FilterAnnotModal .container .tab-list .tab-options-button:hover+button,.FilterAnnotModal .container .tab-list .tab-options-button:hover+div{border-inline-start:none}.FilterAnnotModal .container .tab-list .tab-options-button.selected{background:var(--tab-color-selected);border:1px solid var(--tab-color-selected);color:var(--tab-text-color-selected)}.FilterAnnotModal .container .tab-list .tab-options-button.selected+button,.FilterAnnotModal .container .tab-list .tab-options-button.selected+div{border-inline-start:none!important}.FilterAnnotModal .container .tab-list .tab-options-button:not(.selected){border-inline-end:solid 1px var(--tab-border-color)}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2118: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(0),
        a = n.n(o),
        i =
          (n(9),
          n(10),
          n(14),
          n(38),
          n(34),
          n(27),
          n(21),
          n(50),
          n(76),
          n(20),
          n(12),
          n(44),
          n(22),
          n(142),
          n(18),
          n(16),
          n(59),
          n(8),
          n(111),
          n(17),
          n(19),
          n(132),
          n(62),
          n(11),
          n(29),
          n(13),
          n(15)),
        r = n.n(i),
        l = n(6),
        d = n(305),
        c = n(1),
        s = n(3),
        p = n(4),
        u = n(2),
        b = n.n(u),
        m = n(66),
        f = n(68),
        h = n(54),
        g = n(53),
        A = n(5),
        v = n(161),
        y = n(262),
        x = n(160),
        w = n(41),
        F = n(138),
        M = n(116),
        E = n(107),
        N = n(373);
      n(1973);
      function O(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return j(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          S(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function k(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = S(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var o = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return o >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[o++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          r = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return ((r = t.done), t);
          },
          e: function (t) {
            ((l = !0), (i = t));
          },
          f: function () {
            try {
              r || null == n.return || n.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function T(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var o,
                a,
                i,
                r,
                l = [],
                d = !0,
                c = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    d = !0
                  );
              } catch (t) {
                ((c = !0), (a = t));
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(t, e) ||
          S(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function S(t, e) {
        if (t) {
          if ("string" == typeof t) return j(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? j(t, e)
                : void 0
          );
        }
      }
      function j(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var L = "filterAnnotModal",
        I = function (t) {
          var e = t.isInFormBuilderMode,
            n = T(
              Object(l.e)(function (t) {
                return [
                  p.a.isElementDisabled(t, A.a.FILTER_MODAL),
                  p.a.isElementOpen(t, A.a.FILTER_MODAL),
                  p.a.getColorMap(t),
                  p.a.getSelectedTab(t, L),
                  p.a.getAnnotationFilters(t),
                  p.a.getIsMeasurementAnnotationFilterEnabled(t),
                  p.a.getCustomNoteFilter(t),
                ];
              }),
              7,
            ),
            i = n[0],
            u = n[1],
            b = n[2],
            S = n[3],
            j = n[4],
            I = n[5],
            C = n[6],
            _ = T(Object(d.a)(), 1)[0],
            R = Object(l.d)(),
            D = T(Object(o.useState)([]), 2),
            B = D[0],
            U = D[1],
            P = T(Object(o.useState)([]), 2),
            V = P[0],
            z = P[1],
            H = T(Object(o.useState)([]), 2),
            G = H[0],
            W = H[1],
            q = T(Object(o.useState)([]), 2),
            J = q[0],
            Y = q[1],
            $ = T(Object(o.useState)([]), 2),
            K = $[0],
            Q = $[1],
            X = T(Object(o.useState)([]), 2),
            Z = X[0],
            tt = X[1],
            et = T(Object(o.useState)([]), 2),
            nt = et[0],
            ot = et[1],
            at = T(Object(o.useState)(!0), 2),
            it = at[0],
            rt = at[1],
            lt = T(Object(o.useState)(!1), 2),
            dt = lt[0],
            ct = lt[1],
            st = T(Object(o.useState)([]), 2),
            pt = st[0],
            ut = st[1],
            bt = T(Object(o.useState)(0), 2),
            mt = bt[0],
            ft = bt[1],
            ht = T(Object(o.useState)(!1), 2),
            gt = ht[0],
            At = ht[1],
            vt = function (t) {
              var e,
                n = Object(g.g)(t);
              return t[
                null === (e = b[n]) || void 0 === e ? void 0 : e.iconColor
              ];
            },
            yt = function (t, e) {
              var n = t.map(function (t) {
                return Object.assign({
                  R: parseInt("".concat(t[1]).concat(t[2]), 16),
                  G: parseInt("".concat(t[3]).concat(t[4]), 16),
                  B: parseInt("".concat(t[5]).concat(t[6]), 16),
                });
              });
              return !!n.filter(function (t) {
                return (
                  Math.abs(e.R - t.R) < 10 &&
                  Math.abs(e.G - t.G) < 10 &&
                  Math.abs(e.B - t.B) < 10
                );
              }).length;
            },
            xt = function () {
              var t = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  n = !0,
                  o = !0,
                  a = !0,
                  i = !0;
                if (Z.length > 0) {
                  var r = t.IT || t.getCustomData("trn-is-count");
                  if (I && r) {
                    var l = Object(g.g)(t);
                    n = Z.includes(l);
                  } else n = Z.includes(Object(y.a)(t));
                }
                if (
                  K.length > 0 &&
                  !(o = K.includes(c.a.getDisplayAuthor(t.Author, e))) &&
                  it
                ) {
                  var d,
                    s = t.getReplies(),
                    p = k(s);
                  try {
                    for (p.s(); !(d = p.n()).done; ) {
                      var u = d.value;
                      if (K.includes(c.a.getDisplayAuthor(u.Author, e))) {
                        o = !0;
                        break;
                      }
                    }
                  } catch (t) {
                    p.e(t);
                  } finally {
                    p.f();
                  }
                }
                if (nt.length > 0) {
                  var b = vt(t);
                  a = b ? yt(nt, b) : nt.includes(E.b.gray8);
                }
                return (
                  pt.length > 0 &&
                    (i = t.getStatus()
                      ? pt.includes(t.getStatus())
                      : pt.includes("None")),
                  n && o && a && i
                );
              };
              (R(s.a.setInternalNoteFilter(t)),
                R(
                  s.a.setAnnotationFilters({
                    isDocumentFilterActive: dt,
                    includeReplies: it,
                    authorFilter: K,
                    colorFilter: nt,
                    typeFilter: Z,
                    statusFilter: pt,
                  }),
                ));
              var n = [];
              (dt
                ? c.a.getDocumentViewers().forEach(function (o, a) {
                    return o
                      .getAnnotationManager()
                      .getAnnotationsList()
                      .forEach(function (o) {
                        if (
                          e ||
                          !(
                            o instanceof
                            window.Core.Annotations.WidgetAnnotation
                          )
                        ) {
                          var i = !t(o, a + 1);
                          i !== o.NoView && ((o.NoView = i), n.push(o));
                        }
                      });
                  })
                : c.a.getDocumentViewers().forEach(function (t) {
                    return t
                      .getAnnotationManager()
                      .getAnnotationsList()
                      .forEach(function (t) {
                        !0 === t.NoView && ((t.NoView = !1), n.push(t));
                      });
                  }),
                c.a.getDocumentViewers().forEach(function (t) {
                  return t.getAnnotationManager().drawAnnotationsFromList(n);
                }),
                Object(m.a)(h.a.ANNOTATION_FILTER_CHANGED, {
                  types: Z,
                  authors: K,
                  colors: nt,
                  statuses: pt,
                  checkRepliesForAuthorFilter: it,
                }),
                Ft());
            },
            wt = function () {
              (rt(!1), ct(!1), Q([]), tt([]), ot([]), ut([]));
              var t = [];
              (c.a.getDocumentViewers().forEach(function (e) {
                return e
                  .getAnnotationManager()
                  .getAnnotationsList()
                  .forEach(function (e) {
                    !0 === e.NoView && ((e.NoView = !1), t.push(e));
                  });
              }),
                c.a.getDocumentViewers().forEach(function (e) {
                  return e.getAnnotationManager().drawAnnotationsFromList(t);
                }));
            },
            Ft = function () {
              (R(s.a.closeElement(A.a.FILTER_MODAL)), c.a.setToolMode(f.a));
            };
          (Object(o.useEffect)(function () {
            var t = function () {
              (wt(), xt());
            };
            return (
              c.a.addEventListener("documentUnloaded", t),
              function () {
                c.a.removeEventListener("documentUnloaded", t);
              }
            );
          }, []),
            Object(o.useEffect)(
              function () {
                var t,
                  n = c.a.getDocumentViewers().map(function (t) {
                    return t.getAnnotationManager().getAnnotationsList();
                  });
                if (C) {
                  var o = n[0] ? n[0].filter(C) : [];
                  n[0] = o;
                  var a = n[1] ? n[1].filter(C) : [];
                  n[1] = a;
                }
                var i = (t = []).concat.apply(t, O(n)).filter(function (t) {
                    return !t.Hidden;
                  }),
                  r = new Set(),
                  l = new Set(),
                  d = new Set(),
                  s = new Set();
                return (
                  i.forEach(function (t) {
                    var n = c.a.getDisplayAuthor(t.Author);
                    if (
                      (n && "" !== n && r.add(n),
                      !(
                        (!e &&
                          t instanceof
                            window.Core.Annotations.WidgetAnnotation) ||
                        (t instanceof
                          window.Core.Annotations.StickyAnnotation &&
                          t.isReply()) ||
                        t instanceof window.Core.Annotations.Link
                      ))
                    ) {
                      var o = t.IT || t.getCustomData("trn-is-count");
                      if (I && o) {
                        var a = Object(g.g)(t);
                        l.add(a);
                      } else l.add(Object(y.a)(t));
                      var i = vt(t);
                      (i &&
                        !yt(O(d), i) &&
                        d.add(Object(v.e)(i.R, i.G, i.B, i.A)),
                        t.getStatus() ? s.add(t.getStatus()) : s.add("None"));
                    }
                  }),
                  U(O(r)),
                  z(O(l)),
                  W(O(d)),
                  Y(O(s)),
                  c.a.addEventListener("documentUnloaded", Ft),
                  function () {
                    c.a.removeEventListener("documentUnloaded", Ft);
                  }
                );
              },
              [u, I],
            ),
            Object(o.useEffect)(
              function () {
                S !== A.a.ANNOTATION_STATUS_FILTER_PANEL_BUTTON ||
                  gt ||
                  R(
                    s.a.setSelectedTab(
                      L,
                      A.a.ANNOTATION_USER_FILTER_PANEL_BUTTON,
                    ),
                  );
              },
              [u, S, gt],
            ),
            Object(o.useEffect)(
              function () {
                ft(
                  (it ? 1 : 0) +
                    (dt ? 1 : 0) +
                    K.length +
                    nt.length +
                    Z.length +
                    pt.length,
                );
              },
              [it, dt, K, nt, Z, pt],
            ),
            Object(o.useEffect)(
              function () {
                At(J.length > 1 || (1 === J.length && "None" !== J[0]));
              },
              [J],
            ),
            Object(o.useEffect)(
              function () {
                u &&
                  (ct(j.isDocumentFilterActive),
                  rt(j.includeReplies),
                  Q(j.authorFilter),
                  ot(j.colorFilter),
                  tt(j.typeFilter),
                  ut(j.statusFilter));
              },
              [u],
            ));
          var Mt = r()({
            Modal: !0,
            FilterAnnotModal: !0,
            open: u,
            closed: !u,
          });
          return i
            ? null
            : a.a.createElement(
                "div",
                { className: Mt, "data-element": A.a.FILTER_MODAL },
                a.a.createElement(
                  N.a,
                  {
                    isOpen: u,
                    title: ""
                      .concat(_("option.filterAnnotModal.filters"), " (")
                      .concat(mt, ")"),
                    closeHandler: Ft,
                    onCloseClick: Ft,
                    swipeToClose: !0,
                  },
                  a.a.createElement(
                    "div",
                    {
                      className: "container",
                      onMouseDown: function (t) {
                        return t.stopPropagation();
                      },
                    },
                    c.a.getAnnotationsList().length > 0
                      ? a.a.createElement(
                          "div",
                          { className: "filter-modal" },
                          a.a.createElement(
                            "div",
                            { className: "body" },
                            a.a.createElement(
                              F.d,
                              { id: L },
                              a.a.createElement(
                                "div",
                                { className: "tab-list" },
                                a.a.createElement(
                                  F.a,
                                  {
                                    dataElement:
                                      A.a.ANNOTATION_USER_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    "button",
                                    { className: "tab-options-button" },
                                    _("option.filterAnnotModal.user"),
                                  ),
                                ),
                                a.a.createElement("div", {
                                  className: "tab-options-divider",
                                }),
                                a.a.createElement(
                                  F.a,
                                  {
                                    dataElement:
                                      A.a.ANNOTATION_COLOR_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    "button",
                                    { className: "tab-options-button" },
                                    _("option.filterAnnotModal.color"),
                                  ),
                                ),
                                a.a.createElement("div", {
                                  className: "tab-options-divider",
                                }),
                                a.a.createElement(
                                  F.a,
                                  {
                                    dataElement:
                                      A.a.ANNOTATION_TYPE_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    "button",
                                    { className: "tab-options-button" },
                                    _("option.filterAnnotModal.type"),
                                  ),
                                ),
                                gt &&
                                  a.a.createElement(
                                    a.a.Fragment,
                                    null,
                                    a.a.createElement("div", {
                                      className: "tab-options-divider",
                                    }),
                                    a.a.createElement(
                                      F.a,
                                      {
                                        dataElement:
                                          A.a
                                            .ANNOTATION_STATUS_FILTER_PANEL_BUTTON,
                                      },
                                      a.a.createElement(
                                        "button",
                                        { className: "tab-options-button" },
                                        _("option.filterAnnotModal.status"),
                                      ),
                                    ),
                                  ),
                              ),
                              a.a.createElement(
                                "div",
                                { className: "filter-options" },
                                a.a.createElement(
                                  F.c,
                                  { dataElement: "annotationUserFilterPanel" },
                                  a.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-filters three-column-filter",
                                    },
                                    O(B).map(function (t, e) {
                                      return a.a.createElement(x.a, {
                                        type: "checkbox",
                                        key: e,
                                        "aria-label": ""
                                          .concat(t, " ")
                                          .concat(
                                            _("formField.types.checkbox"),
                                          ),
                                        label: a.a.createElement(
                                          M.a,
                                          { content: t },
                                          a.a.createElement("div", null, t),
                                        ),
                                        checked: K.includes(t),
                                        id: t,
                                        onChange: function (t) {
                                          -1 ===
                                          K.indexOf(t.target.getAttribute("id"))
                                            ? Q(
                                                [].concat(O(K), [
                                                  t.target.getAttribute("id"),
                                                ]),
                                              )
                                            : Q(
                                                K.filter(function (e) {
                                                  return (
                                                    e !==
                                                    t.target.getAttribute("id")
                                                  );
                                                }),
                                              );
                                        },
                                      });
                                    }),
                                  ),
                                ),
                                a.a.createElement(
                                  F.c,
                                  { dataElement: "annotationColorFilterPanel" },
                                  a.a.createElement(
                                    "div",
                                    { className: "color-filters" },
                                    O(G).map(function (t, e) {
                                      var n;
                                      return a.a.createElement(
                                        "div",
                                        {
                                          className: "colorSelect",
                                          key: "color".concat(e),
                                        },
                                        a.a.createElement(
                                          M.a,
                                          {
                                            content: ""
                                              .concat(
                                                _(
                                                  "option.colorPalette.colorLabel",
                                                ),
                                                " ",
                                              )
                                              .concat(
                                                null == t ||
                                                  null ===
                                                    (n = t.toUpperCase) ||
                                                  void 0 === n
                                                  ? void 0
                                                  : n.call(t),
                                              ),
                                            hideOnClick: !1,
                                          },
                                          a.a.createElement(x.a, {
                                            type: "checkbox",
                                            checked: nt.includes(t),
                                            "aria-label": ""
                                              .concat(
                                                _(
                                                  "option.colorPalette.colorLabel",
                                                ),
                                                " ",
                                              )
                                              .concat(
                                                null == t
                                                  ? void 0
                                                  : t.toUpperCase(),
                                                " ",
                                              )
                                              .concat(
                                                _("formField.types.checkbox"),
                                              ),
                                            id: t,
                                            onChange: function (t) {
                                              -1 ===
                                              nt.indexOf(
                                                t.target.getAttribute("id"),
                                              )
                                                ? ot(
                                                    [].concat(O(nt), [
                                                      t.target.getAttribute(
                                                        "id",
                                                      ),
                                                    ]),
                                                  )
                                                : ot(
                                                    nt.filter(function (e) {
                                                      return (
                                                        e !==
                                                        t.target.getAttribute(
                                                          "id",
                                                        )
                                                      );
                                                    }),
                                                  );
                                            },
                                          }),
                                        ),
                                        a.a.createElement("div", {
                                          className: "colorCell",
                                          style: { background: Object(v.a)(t) },
                                        }),
                                      );
                                    }),
                                  ),
                                ),
                                a.a.createElement(
                                  F.c,
                                  { dataElement: "annotationTypeFilterPanel" },
                                  a.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "type-filters three-column-filter",
                                    },
                                    O(V)
                                      .sort(function (t, e) {
                                        return _("annotation.".concat(t)) <=
                                          _("annotation.".concat(e))
                                          ? -1
                                          : 1;
                                      })
                                      .map(function (t, e) {
                                        return a.a.createElement(x.a, {
                                          type: "checkbox",
                                          key: e,
                                          label: a.a.createElement(
                                            M.a,
                                            {
                                              content: _(
                                                "annotation.".concat(t),
                                              ),
                                            },
                                            a.a.createElement(
                                              "div",
                                              null,
                                              _("annotation.".concat(t)),
                                            ),
                                          ),
                                          checked: Z.includes(t),
                                          id: t,
                                          onChange: function (t) {
                                            -1 ===
                                            Z.indexOf(
                                              t.target.getAttribute("id"),
                                            )
                                              ? tt(
                                                  [].concat(O(Z), [
                                                    t.target.getAttribute("id"),
                                                  ]),
                                                )
                                              : tt(
                                                  Z.filter(function (e) {
                                                    return (
                                                      e !==
                                                      t.target.getAttribute(
                                                        "id",
                                                      )
                                                    );
                                                  }),
                                                );
                                          },
                                        });
                                      }),
                                  ),
                                ),
                                gt &&
                                  a.a.createElement(
                                    F.c,
                                    {
                                      dataElement:
                                        "annotationStatusFilterPanel",
                                    },
                                    a.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "status-filters three-column-filter",
                                      },
                                      O(J).map(function (t, e) {
                                        return a.a.createElement(x.a, {
                                          type: "checkbox",
                                          key: e,
                                          checked: pt.includes(t),
                                          "aria-label": ""
                                            .concat(t, " ")
                                            .concat(
                                              _("formField.types.checkbox"),
                                            ),
                                          label: _(
                                            "option.state.".concat(
                                              t.toLocaleLowerCase(),
                                            ),
                                          ),
                                          id: t,
                                          onChange: function (t) {
                                            -1 ===
                                            pt.indexOf(
                                              t.target.getAttribute("id"),
                                            )
                                              ? ut(
                                                  [].concat(O(pt), [
                                                    t.target.getAttribute("id"),
                                                  ]),
                                                )
                                              : ut(
                                                  pt.filter(function (e) {
                                                    return (
                                                      e !==
                                                      t.target.getAttribute(
                                                        "id",
                                                      )
                                                    );
                                                  }),
                                                );
                                          },
                                        });
                                      }),
                                    ),
                                  ),
                              ),
                            ),
                          ),
                          a.a.createElement("div", { className: "divider" }),
                          a.a.createElement(
                            "fieldset",
                            { className: "settings-body" },
                            a.a.createElement(
                              "legend",
                              {
                                id: "filter-settings",
                                className: "settings-header",
                              },
                              _("option.filterAnnotModal.filterSettings"),
                            ),
                            a.a.createElement(
                              "div",
                              {
                                className: "settings",
                                role: "group",
                                "aria-labelledby": "filter-settings",
                              },
                              a.a.createElement(x.a, {
                                label: _(
                                  "option.filterAnnotModal.includeReplies",
                                ),
                                checked: it,
                                onChange: function (t) {
                                  return rt(t.target.checked);
                                },
                                id: "filter-annot-modal-include-replies",
                              }),
                              a.a.createElement(x.a, {
                                label: _(
                                  "option.filterAnnotModal.filterDocument",
                                ),
                                checked: dt,
                                onChange: function (t) {
                                  return ct(t.target.checked);
                                },
                                id: "filter-annot-modal-filter-document",
                              }),
                            ),
                          ),
                          a.a.createElement("div", { className: "divider" }),
                          a.a.createElement(
                            "div",
                            { className: "footer" },
                            a.a.createElement(w.a, {
                              className: "filter-annot-clear",
                              onClick: wt,
                              label: _("action.clearAll"),
                              disabled: 0 === mt,
                            }),
                            a.a.createElement(w.a, {
                              className: "filter-annot-apply",
                              onClick: xt,
                              label: _("action.apply"),
                            }),
                          ),
                        )
                      : a.a.createElement(
                          "div",
                          null,
                          a.a.createElement("div", {
                            className: "swipe-indicator",
                          }),
                          a.a.createElement(
                            "div",
                            { className: "message" },
                            _("message.noAnnotationsFilter"),
                          ),
                        ),
                  ),
                ),
              );
        };
      I.propTypes = { isInFormBuilderMode: b.a.bool };
      var C = I;
      var _ = function () {
        var t = c.a
          .getAnnotationManager()
          .getFormFieldCreationManager()
          .isInFormFieldCreationMode();
        return a.a.createElement(C, { isInFormBuilderMode: t });
      };
      e.default = _;
    },
  },
]);
//# sourceMappingURL=chunk.64.js.map
