(window.webpackJsonp = window.webpackJsonp || []).push([
  [71],
  {
    2004: function (e, t, n) {
      var o = n(35),
        r = n(2005);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var i = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          ((t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer")));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              (r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                }));
            else {
              const t = e.cloneNode(!0);
              (r.shadowRoot.appendChild(t), n.push(t));
            }
          }
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    2005: function (e, t, n) {
      ((t = e.exports = n(36)(!1)).push([
        e.i,
        ".open.Model3DModal{visibility:visible}.closed.Model3DModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.Model3DModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.Model3DModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.Model3DModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.Model3DModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.Model3DModal .footer .modal-button.cancel:hover,.Model3DModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.Model3DModal .footer .modal-button.cancel,.Model3DModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.Model3DModal .footer .modal-button.cancel.disabled,.Model3DModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.Model3DModal .footer .modal-button.cancel.disabled span,.Model3DModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.Model3DModal{position:fixed;inset-inline-start:0;inset-block-end:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.Model3DModal .modal-container .wrapper .modal-content{padding:10px}.Model3DModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.Model3DModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.Model3DModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.Model3DModal .footer .modal-button.confirm{margin-inline-start:4px}.Model3DModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Model3DModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Model3DModal .footer .modal-button{padding:23px 8px}}.Model3DModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;inset-block-start:12px;margin-inline-start:auto;margin-inline-end:auto;inset-inline-start:0;inset-inline-end:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Model3DModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .Model3DModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Model3DModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Model3DModal .swipe-indicator{width:32px}}.Model3DModal .container{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .Model3DModal .container,.Model3DModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .Model3DModal .container,.Model3DModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Model3DModal .container,.Model3DModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;inset-inline-start:0;inset-block-end:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Model3DModal .container,.Model3DModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;inset-inline-start:0;inset-block-end:0;padding-top:4px;min-width:100px}}.Model3DModal .container{display:flex;flex-direction:column;justify-content:center;align-items:center;width:500px;border-radius:4px;padding:8px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Model3DModal .container{padding-top:24px;padding-bottom:16px;padding-inline-start:24px;padding-inline-end:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Model3DModal .container{padding-top:24px;padding-bottom:16px;padding-inline-start:24px;padding-inline-end:24px}}.Model3DModal .container .inputWrapper>label{width:100%}.Model3DModal .container .divider{height:1px;width:100%;background:var(--divider);margin:16px 0}.Model3DModal .container input{margin-top:8px;width:100%;height:30px;padding-inline-start:8px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding-bottom:6px;padding-inline-end:42px;padding-top:4px}.Model3DModal .container input:focus{outline:none;border:1px solid var(--focus-border)}.Model3DModal .container input::-moz-placeholder{color:var(--placeholder-text)}.Model3DModal .container input::placeholder{color:var(--placeholder-text)}.Model3DModal .container input::-webkit-inner-spin-button,.Model3DModal .container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.Model3DModal .container input[type=number]{-moz-appearance:textfield}.Model3DModal .container form{width:100%}.Model3DModal .container .error{width:100%;color:red;margin:5px 0}.Model3DModal .container .Button{display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);font-weight:600;padding:6px 18px;margin-top:8px;margin-inline-start:5px;width:auto;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;height:30px;cursor:pointer}.Model3DModal .container .Button:hover{background:var(--primary-button-hover)}.Model3DModal .container .Button.disabled{background:var(--gray-6);border-color:var(--gray-6);cursor:not-allowed}.model-3D-btn{padding:0;border:none;background-color:transparent;border:1px solid var(--icon-color);width:162px;height:26px;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-inline-end:8px}:host(:not([data-tabbing=true])) .model-3D-btn,html:not([data-tabbing=true]) .model-3D-btn{outline:none}.model-3D-btn img{max-width:100%;max-height:100%}.model-3D-btn.interactable:hover{background:var(--tools-overlay-button-hover)}.model-3D-btn.active,.model-3D-btn.interactable.active{background:var(--tools-overlay-button-active)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .model-3D-btn.add-btn{width:auto;padding-inline-start:0;width:190px;height:30px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .model-3D-btn.add-btn{width:auto;padding-inline-start:0;width:190px;height:30px}}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" }));
    },
    2107: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(9),
        n(10),
        n(14),
        n(30),
        n(34),
        n(27),
        n(21),
        n(20),
        n(12),
        n(22),
        n(31),
        n(18),
        n(16),
        n(28),
        n(48),
        n(24),
        n(47),
        n(49),
        n(37),
        n(8),
        n(17),
        n(19),
        n(11),
        n(29),
        n(13));
      var o = n(0),
        r = n.n(o),
        i = n(4),
        a = n(3),
        l = n(1),
        d = n(6),
        c = (n(76), n(26), n(40), n(42), n(43), n(56), n(153), n(15)),
        u = n.n(c),
        p = n(305),
        s = n(41),
        f = n(235),
        b = n(150);
      n(2004);
      function m(e) {
        return (m =
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
      function y() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function i(n, o, r, i) {
          var d = o && o.prototype instanceof l ? o : l,
            c = Object.create(d.prototype);
          return (
            h(
              c,
              "_invoke",
              (function (n, o, r) {
                var i,
                  l,
                  d,
                  c = 0,
                  u = r || [],
                  p = !1,
                  s = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: f,
                    f: f.bind(e, 4),
                    d: function (t, n) {
                      return ((i = t), (l = 0), (d = e), (s.n = n), a);
                    },
                  };
                function f(n, o) {
                  for (
                    l = n, d = o, t = 0;
                    !p && c && !r && t < u.length;
                    t++
                  ) {
                    var r,
                      i = u[t],
                      f = s.p,
                      b = i[2];
                    n > 3
                      ? (r = b === o) &&
                        ((d = i[(l = i[4]) ? 5 : ((l = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= f &&
                        ((r = n < 2 && f < i[1])
                          ? ((l = 0), (s.v = o), (s.n = i[1]))
                          : f < b &&
                            (r = n < 3 || i[0] > o || o > b) &&
                            ((i[4] = n), (i[5] = o), (s.n = b), (l = 0)));
                  }
                  if (r || n > 1) return a;
                  throw ((p = !0), o);
                }
                return function (r, u, b) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === u && f(u, b), l = u, d = b;
                    (t = l < 2 ? e : d) || !p;

                  ) {
                    i ||
                      (l
                        ? l < 3
                          ? (l > 1 && (s.n = -1), f(l, d))
                          : (s.n = d)
                        : (s.v = d));
                    try {
                      if (((c = 2), i)) {
                        if ((l || (r = "next"), (t = i[r]))) {
                          if (!(t = t.call(i, d)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((d = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = i.return) && t.call(i),
                            l < 2 &&
                              ((d = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method",
                              )),
                              (l = 1)));
                        i = e;
                      } else if ((t = (p = s.n < 0) ? d : n.call(o, s)) !== a)
                        break;
                    } catch (t) {
                      ((i = e), (l = 1), (d = t));
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: t, done: p };
                };
              })(n, r, i),
              !0,
            ),
            c
          );
        }
        var a = {};
        function l() {}
        function d() {}
        function c() {}
        t = Object.getPrototypeOf;
        var u = [][o]
            ? t(t([][o]()))
            : (h((t = {}), o, function () {
                return this;
              }),
              t),
          p = (c.prototype = l.prototype = Object.create(u));
        function s(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, c)
              : ((e.__proto__ = c), h(e, r, "GeneratorFunction")),
            (e.prototype = Object.create(p)),
            e
          );
        }
        return (
          (d.prototype = c),
          h(p, "constructor", c),
          h(c, "constructor", d),
          (d.displayName = "GeneratorFunction"),
          h(c, r, "GeneratorFunction"),
          h(p),
          h(p, r, "Generator"),
          h(p, o, function () {
            return this;
          }),
          h(p, "toString", function () {
            return "[object Generator]";
          }),
          (y = function () {
            return { w: i, m: s };
          })()
        );
      }
      function h(e, t, n, o) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (e) {
          r = 0;
        }
        (h = function (e, t, n, o) {
          if (t)
            r
              ? r(e, t, {
                  value: n,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = n);
          else {
            var i = function (t, n) {
              h(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (i("next", 0), i("throw", 1), i("return", 2));
          }
        })(e, t, n, o);
      }
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function g(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != m(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != m(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == m(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function x(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            d = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(d) : Promise.resolve(d).then(o, r);
      }
      function M(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = e.apply(t, n);
            function a(e) {
              x(i, o, r, a, l, "next", e);
            }
            function l(e) {
              x(i, o, r, a, l, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function D(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                d = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    d = !0
                  );
              } catch (e) {
                ((c = !0), (r = e));
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return O(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? O(e, t)
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
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var j = function (e) {
        var t = e.fileInput,
          n = e.urlInput,
          i = e.error,
          a = e.setError,
          d = e.file,
          c = e.setFile,
          m = e.url,
          h = e.setURL,
          v = e.closeModal,
          g = e.isDisabled,
          x = e.isOpen,
          O = D(Object(p.a)(), 1)[0],
          j = D(Object(o.useState)("url"), 2),
          E = j[0],
          k = j[1],
          A = D(Object(o.useState)(""), 2),
          S = A[0],
          P = A[1],
          L = r.a.createRef(),
          R = r.a.createRef(),
          T = function (e) {
            var t = new window.Core.Annotations.Model3DAnnotation();
            (t.set3DData(S), "url" === E && t.set3DData(m, "url"));
            var n = l.a.getZoom();
            ((t.X = e.layerX / n),
              (t.Y = e.layerY / n),
              (t.Width = 300),
              (t.Height = 300),
              (t.Author = l.a.getCurrentUser()),
              t.setPageNumber(l.a.getCurrentPage()),
              l.a.addAnnotations([t]),
              l.a.drawAnnotationsFromList([t]),
              l.a.removeEventListener("click", T));
          },
          _ = function (e) {
            return e.split(".").pop();
          },
          I = (function () {
            var e = M(
              y().m(function e(t) {
                var n, o, r;
                return y().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if ((t.preventDefault(), "url" !== E)) {
                          e.n = 3;
                          break;
                        }
                        if ("glb" === _(m)) {
                          e.n = 1;
                          break;
                        }
                        return (
                          a(
                            w(w({}, i), { urlError: O("Model3D.formatError") }),
                          ),
                          e.a(2)
                        );
                      case 1:
                        return (
                          (n = (function () {
                            var e = M(
                              y().m(function e(t) {
                                var n;
                                return y().w(function (e) {
                                  for (;;)
                                    switch (e.n) {
                                      case 0:
                                        return (
                                          (n = function (e) {
                                            return new Promise(function (t) {
                                              var n = new XMLHttpRequest();
                                              ((n.onload = M(
                                                y().m(function e() {
                                                  var o;
                                                  return y().w(function (e) {
                                                    for (;;)
                                                      switch (e.n) {
                                                        case 0:
                                                          return (
                                                            ((o =
                                                              new FileReader()).onloadend =
                                                              function () {
                                                                t(o.result);
                                                              }),
                                                            (e.n = 1),
                                                            o.readAsDataURL(
                                                              n.response,
                                                            )
                                                          );
                                                        case 1:
                                                          return e.a(2);
                                                      }
                                                  }, e);
                                                }),
                                              )),
                                                n.open("GET", e),
                                                (n.responseType = "blob"),
                                                n.send());
                                            });
                                          }),
                                          (e.n = 1),
                                          n(t)
                                        );
                                      case 1:
                                        return e.a(2, e.v);
                                    }
                                }, e);
                              }),
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()),
                          (o = P),
                          (e.n = 2),
                          n(m)
                        );
                      case 2:
                        ((r = e.v), o(r), (e.n = 4));
                        break;
                      case 3:
                        if ("file" !== E) {
                          e.n = 4;
                          break;
                        }
                        if ("glb" === _(d.name)) {
                          e.n = 4;
                          break;
                        }
                        return (
                          a(
                            w(w({}, i), { urlError: O("Model3D.formatError") }),
                          ),
                          e.a(2)
                        );
                      case 4:
                        (v(),
                          l.a.setToolMode("Pan"),
                          (l.a.getViewerElement().style.cursor = "crosshair"),
                          l.a.addEventListener("click", T));
                      case 5:
                        return e.a(2);
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          N = u()({ Modal: !0, Model3DModal: !0, open: x, closed: !x }),
          F = (function () {
            var e = M(
              y().m(function e(t) {
                var n, o;
                return y().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          k("file"),
                          (n = t.target.files[0]),
                          c(n),
                          (o = function (e) {
                            return new Promise(function () {
                              var t = new FileReader();
                              (t.readAsDataURL(e),
                                (t.onload = function () {
                                  return P(t.result);
                                }));
                            });
                          }),
                          (e.n = 1),
                          o(n)
                        );
                      case 1:
                        (a({}), h(""));
                      case 2:
                        return e.a(2);
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          C = r.a.createElement("input", {
            className: "urlInput",
            type: "url",
            ref: n,
            value: m,
            onChange: function (e) {
              return (function (e) {
                (k("url"), h(e.trim()), a(""), (t.current.value = null));
              })(e.target.value);
            },
            onFocus: function () {
              return L.current.click();
            },
            placeholder: O("Model3D.enterurl"),
          }),
          G = r.a.createElement("input", {
            type: "file",
            ref: t,
            onChange: F,
            accept: ".glb",
            onFocus: function () {
              return R.current.click();
            },
          });
        return g
          ? null
          : r.a.createElement(
              b.a,
              {
                onSwipedUp: v,
                onSwipedDown: v,
                preventDefaultTouchmoveEvent: !0,
              },
              r.a.createElement(
                "div",
                {
                  className: N,
                  "data-element": "Model3DModal",
                  onMouseDown: v,
                },
                r.a.createElement(
                  "div",
                  {
                    className: "container",
                    onMouseDown: function (e) {
                      return e.stopPropagation();
                    },
                  },
                  r.a.createElement("div", { className: "swipe-indicator" }),
                  r.a.createElement(
                    "form",
                    { onSubmit: I },
                    r.a.createElement(
                      "div",
                      { className: "col" },
                      O("Model3D.enterurlOrLocalFile"),
                    ),
                    r.a.createElement(f.a, {
                      dataElement: "3DAnnotationLink",
                      id: "3D-annotation-link",
                      name: "3DInput",
                      className: "inputWrapper",
                      ref: L,
                      radio: !0,
                      label: C,
                      center: !0,
                    }),
                    (null == i ? void 0 : i.urlError) &&
                      r.a.createElement(
                        "p",
                        { className: "error" },
                        "* ",
                        i.urlError,
                      ),
                    r.a.createElement(f.a, {
                      dataElement: "3DAnnotationLocalFile",
                      id: "3D-annotation-file",
                      name: "3DInput",
                      className: "inputWrapper",
                      ref: R,
                      radio: !0,
                      label: G,
                      center: !0,
                    }),
                    (null == i ? void 0 : i.fileError) &&
                      r.a.createElement(
                        "p",
                        { className: "error" },
                        "* ",
                        i.fileError,
                      ),
                    r.a.createElement(s.a, {
                      dataElement: "linkSubmitButton",
                      label: O("action.draw"),
                      onClick: I,
                    }),
                  ),
                ),
              ),
            );
      };
      function E(e) {
        return (E =
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
      var k = ["close3DModal"];
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                P(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : A(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function P(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != E(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != E(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == E(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var L = function (e) {
          var t = e.close3DModal,
            n = (function (e, t) {
              if (null == e) return {};
              var n,
                o,
                r = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var o in e)
                    if ({}.hasOwnProperty.call(e, o)) {
                      if (-1 !== t.indexOf(o)) continue;
                      n[o] = e[o];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  ((n = i[o]),
                    -1 === t.indexOf(n) &&
                      {}.propertyIsEnumerable.call(e, n) &&
                      (r[n] = e[n]));
              }
              return r;
            })(e, k),
            i = Object(o.useCallback)(
              function () {
                t();
              },
              [t],
            ),
            a = S(S({}, n), {}, { closeModal: i });
          return r.a.createElement(j, a);
        },
        R = n(5);
      function T(e) {
        return (T =
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
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                N(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function N(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != T(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != T(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == T(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function F(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                d = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    d = !0
                  );
              } catch (e) {
                ((c = !0), (r = e));
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return C(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? C(e, t)
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
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var G = function (e) {
        var t = Object(d.d)(),
          n = F(Object(o.useState)(""), 2),
          c = n[0],
          u = n[1],
          p = F(Object(o.useState)({}), 2),
          s = p[0],
          f = p[1],
          b = F(Object(o.useState)({ fileError: "", urlError: "" }), 2),
          m = b[0],
          y = b[1],
          h = r.a.createRef(),
          v = r.a.createRef(),
          w = F(
            Object(d.e)(function (e) {
              return [
                i.a.isElementDisabled(e, R.a.MODEL3D_MODAL),
                i.a.isElementOpen(e, R.a.MODEL3D_MODAL),
              ];
            }),
            2,
          ),
          g = w[0],
          x = w[1];
        (Object(o.useEffect)(function () {
          var e = function () {
            t(a.a.closeElement(R.a.MODEL3D_MODAL));
          };
          return (
            l.a.addEventListener("toolUpdated", e),
            function () {
              return l.a.removeEventListener("toolUpdated", e);
            }
          );
        }, []),
          Object(o.useEffect)(
            function () {
              x &&
                (v.current.focus(),
                t(
                  a.a.closeElements([
                    R.a.PRINT_MODAL,
                    R.a.LOADING_MODAL,
                    R.a.PROGRESS_MODAL,
                    R.a.ERROR_MODAL,
                    R.a.OPEN_FILE_MODAL,
                  ]),
                ));
            },
            [t, x],
          ));
        var M = I(
          I({}, e),
          {},
          {
            isDisabled: g,
            isOpen: x,
            close3DModal: function () {
              (t(a.a.closeElement(R.a.MODEL3D_MODAL)),
                u(""),
                f({}),
                y({}),
                h.current && (h.current.value = null));
            },
            fileInput: h,
            urlInput: v,
            error: m,
            setError: y,
            file: s,
            setFile: f,
            url: c,
            setURL: u,
          },
        );
        return r.a.createElement(L, M);
      };
      t.default = G;
    },
  },
]);
//# sourceMappingURL=chunk.71.js.map
