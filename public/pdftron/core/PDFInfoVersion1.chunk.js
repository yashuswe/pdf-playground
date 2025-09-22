/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [9],
    {
      658: function (ya, va, e) {
        function na(ca) {
          ca.$a();
          ca.advance();
          var aa = ca.current.textContent;
          ca.Jb();
          return aa;
        }
        function pa(ca) {
          var aa = [];
          for (ca.$a(); ca.advance(); ) {
            var ma = ca.pb();
            "field" === ma
              ? aa.push(String(ca.ka("name")))
              : Object(h.j)("unrecognised field list element: ".concat(ma));
          }
          ca.Jb();
          return aa;
        }
        function oa(ca, aa) {
          return aa ? "false" !== ca : "true" === ca;
        }
        function ja(ca, aa) {
          var ma = ca.pb();
          switch (ma) {
            case "javascript":
              return { name: "JavaScript", javascript: ca.current.textContent };
            case "uri":
              return { name: "URI", uri: ca.ka("uri") };
            case "goto":
              ma = null;
              ca.$a();
              if (ca.advance()) {
                var la = ca.ka("fit");
                ma = { page: ca.ka("page"), fit: la };
                if ("0" === ma.page)
                  Object(h.j)("null page encountered in dest");
                else
                  switch (((aa = aa(Number(ma.page))), la)) {
                    case "Fit":
                    case "FitB":
                      break;
                    case "FitH":
                    case "FitBH":
                      ma.top = aa.Ba({ x: 0, y: ca.ka("top") || 0 }).y;
                      break;
                    case "FitV":
                    case "FitBV":
                      ma.left = aa.Ba({ x: ca.ka("left") || 0, y: 0 }).x;
                      break;
                    case "FitR":
                      la = aa.Ba({
                        x: ca.ka("left") || 0,
                        y: ca.ka("top") || 0,
                      });
                      aa = aa.Ba({
                        x: ca.ka("right") || 0,
                        y: ca.ka("bottom") || 0,
                      });
                      aa = new y.d(la.x, la.y, aa.x, aa.y);
                      ma.top = aa.y1;
                      ma.left = aa.x1;
                      ma.bottom = aa.y2;
                      ma.right = aa.x2;
                      break;
                    case "XYZ":
                      la = aa.Ba({
                        x: ca.ka("left") || 0,
                        y: ca.ka("top") || 0,
                      });
                      ma.top = la.y;
                      ma.left = la.x;
                      ma.zoom = ca.ka("zoom") || 0;
                      break;
                    default:
                      Object(h.j)("unknown dest fit: ".concat(la));
                  }
                ma = { name: "GoTo", dest: ma };
              } else Object(h.j)("missing dest in GoTo action");
              ca.Jb();
              return ma;
            case "submit-form":
              ma = {
                name: "SubmitForm",
                url: ca.ka("url"),
                format: ca.ka("format"),
                method: ca.ka("method") || "POST",
                exclude: oa(ca.ka("exclude"), !1),
              };
              aa = ca.ka("flags");
              ma.flags = aa ? aa.split(" ") : [];
              for (ca.$a(); ca.advance(); )
                switch (((aa = ca.pb()), aa)) {
                  case "fields":
                    ma.fields = pa(ca);
                    break;
                  default:
                    Object(h.j)("unrecognised submit-form child: ".concat(aa));
                }
              ca.Jb();
              return ma;
            case "reset-form":
              ma = { name: "ResetForm", exclude: oa(ca.ka("exclude"), !1) };
              for (ca.$a(); ca.advance(); )
                switch (((aa = ca.pb()), aa)) {
                  case "fields":
                    ma.fields = pa(ca);
                    break;
                  default:
                    Object(h.j)("unrecognised reset-form child: ".concat(aa));
                }
              ca.Jb();
              return ma;
            case "hide":
              ma = { name: "Hide", hide: oa(ca.ka("hide"), !0) };
              for (ca.$a(); ca.advance(); )
                switch (((aa = ca.pb()), aa)) {
                  case "fields":
                    ma.fields = pa(ca);
                    break;
                  default:
                    Object(h.j)("unrecognised hide child: ".concat(aa));
                }
              ca.Jb();
              return ma;
            case "named":
              return { name: "Named", action: ca.ka("name") };
            default:
              Object(h.j)("Encountered unexpected action type: ".concat(ma));
          }
          return null;
        }
        function ia(ca, aa, ma) {
          var la = {};
          for (ca.$a(); ca.advance(); ) {
            var ka = ca.pb();
            switch (ka) {
              case "action":
                ka = ca.ka("trigger");
                if (aa ? -1 !== aa.indexOf(ka) : 1) {
                  la[ka] = [];
                  for (ca.$a(); ca.advance(); ) {
                    var ra = ja(ca, ma);
                    Object(r.isNull)(ra) || la[ka].push(ra);
                  }
                  ca.Jb();
                } else
                  Object(h.j)(
                    "encountered unexpected trigger on field: ".concat(ka),
                  );
                break;
              default:
                Object(h.j)("encountered unknown action child: ".concat(ka));
            }
          }
          ca.Jb();
          return la;
        }
        function fa(ca) {
          return new ba.a(
            ca.ka("r") || 0,
            ca.ka("g") || 0,
            ca.ka("b") || 0,
            ca.ka("a") || 1,
          );
        }
        function w(ca, aa) {
          var ma = ca.ka("name"),
            la = ca.ka("type") || "Type1",
            ka = ca.ka("size"),
            ra = aa.Ba({ x: 0, y: 0 });
          ka = aa.Ba({ x: Number(ka), y: 0 });
          aa = ra.x - ka.x;
          ra = ra.y - ka.y;
          ma = {
            name: ma,
            type: la,
            size: Math.sqrt(aa * aa + ra * ra) || 0,
            strokeColor: [0, 0, 0],
            fillColor: [0, 0, 0],
          };
          for (ca.$a(); ca.advance(); )
            switch (((la = ca.pb()), la)) {
              case "stroke-color":
                ma.strokeColor = fa(ca);
                break;
              case "fill-color":
                ma.fillColor = fa(ca);
                break;
              default:
                Object(h.j)("unrecognised font child: ".concat(la));
            }
          ca.Jb();
          return ma;
        }
        function z(ca) {
          var aa = [];
          for (ca.$a(); ca.advance(); ) {
            var ma = ca.pb();
            switch (ma) {
              case "option":
                ma = aa;
                var la = ma.push;
                var ka = ca;
                ka = {
                  value: ka.ka("value"),
                  displayValue: ka.ka("display-value") || void 0,
                };
                la.call(ma, ka);
                break;
              default:
                Object(h.j)("unrecognised options child: ".concat(ma));
            }
          }
          ca.Jb();
          return aa;
        }
        function n(ca, aa) {
          var ma = ca.ka("name"),
            la = {
              type: ca.ka("type"),
              quadding: ca.ka("quadding") || "Left-justified",
              maxLen: ca.ka("max-len") || -1,
            },
            ka = ca.ka("flags");
          Object(r.isString)(ka) && (la.flags = ka.split(" "));
          for (ca.$a(); ca.advance(); )
            switch (((ka = ca.pb()), ka)) {
              case "actions":
                la.actions = ia(ca, ["C", "F", "K", "V"], function () {
                  return aa;
                });
                break;
              case "default-value":
                la.defaultValue = na(ca);
                break;
              case "font":
                la.font = w(ca, aa);
                break;
              case "options":
                la.options = z(ca);
                break;
              default:
                Object(h.j)("unknown field child: ".concat(ka));
            }
          ca.Jb();
          return new window.da.Annotations.la.xa(ma, la);
        }
        function f(ca, aa) {
          switch (ca.type) {
            case "Tx":
              try {
                if (Object(ha.c)(ca.actions))
                  return new a.a.DatePickerWidgetAnnotation(ca, aa);
              } catch (ma) {
                Object(h.j)(ma);
              }
              return new a.a.TextWidgetAnnotation(ca, aa);
            case "Ch":
              return ca.flags.get(x.WidgetFlags.COMBO)
                ? new a.a.ChoiceWidgetAnnotation(ca, aa)
                : new a.a.ListWidgetAnnotation(ca, aa);
            case "Btn":
              return ca.flags.get(x.WidgetFlags.PUSH_BUTTON)
                ? new a.a.PushButtonWidgetAnnotation(ca, aa)
                : ca.flags.get(x.WidgetFlags.RADIO)
                  ? new a.a.RadioButtonWidgetAnnotation(ca, aa)
                  : new a.a.CheckButtonWidgetAnnotation(ca, aa);
            case "Sig":
              return new a.a.SignatureWidgetAnnotation(ca, aa);
            default:
              Object(h.j)("Unrecognised field type: ".concat(ca.type));
          }
          return null;
        }
        function b(ca, aa, ma, la) {
          var ka = [],
            ra = {};
          ca.$a();
          var qa = [],
            sa = {},
            ua = [];
          Object(ea.a)(
            function () {
              if (ca.advance()) {
                var wa = ca.pb();
                switch (wa) {
                  case "calculation-order":
                    qa = "calculation-order" === ca.pb() ? pa(ca) : [];
                    break;
                  case "document-actions":
                    sa = ia(ca, ["Init", "Open"], aa);
                    break;
                  case "pages":
                    wa = [];
                    for (ca.$a(); ca.advance(); ) {
                      var Aa = ca.pb();
                      switch (Aa) {
                        case "page":
                          Aa = wa;
                          var Ba = Aa.push,
                            Ea = ca,
                            za = aa,
                            Ca = { number: Ea.ka("number") };
                          for (Ea.$a(); Ea.advance(); ) {
                            var Ia = Ea.pb();
                            switch (Ia) {
                              case "actions":
                                Ca.actions = ia(Ea, ["O", "C"], za);
                                break;
                              default:
                                Object(h.j)(
                                  "unrecognised page child: ".concat(Ia),
                                );
                            }
                          }
                          Ea.Jb();
                          Ba.call(Aa, Ca);
                          break;
                        default:
                          Object(h.j)("unrecognised page child: ".concat(Aa));
                      }
                    }
                    ca.Jb();
                    ua = wa;
                    break;
                  case "field":
                    Aa = n(ca, aa(1));
                    ra[Aa.name] = Aa;
                    break;
                  case "widget":
                    wa = {
                      border: { style: "Solid", width: 1 },
                      backgroundColor: [],
                      fieldName: ca.ka("field"),
                      page: ca.ka("page"),
                      index: ca.ka("index") || 0,
                      rotation: ca.ka("rotation") || 0,
                      flags: [],
                      isImporting: !0,
                    };
                    (Aa = ca.ka("appearance")) && (wa.appearance = Aa);
                    (Aa = ca.ka("flags")) && (wa.flags = Aa.split(" "));
                    for (ca.$a(); ca.advance(); )
                      switch (((Aa = ca.pb()), Aa)) {
                        case "rect":
                          Ba = ca;
                          Ea = aa(Number(wa.page));
                          Aa = Ea.Ba({
                            x: Ba.ka("x1") || 0,
                            y: Ba.ka("y1") || 0,
                          });
                          Ba = Ea.Ba({
                            x: Ba.ka("x2") || 0,
                            y: Ba.ka("y2") || 0,
                          });
                          Aa = new y.d(Aa.x, Aa.y, Ba.x, Ba.y);
                          Aa.normalize();
                          wa.rect = {
                            x1: Aa.x1,
                            y1: Aa.y1,
                            x2: Aa.x2,
                            y2: Aa.y2,
                          };
                          break;
                        case "border":
                          Aa = ca;
                          Ba = {
                            style: Aa.ka("style") || "Solid",
                            width: Aa.ka("width") || 1,
                            color: [0, 0, 0],
                          };
                          for (Aa.$a(); Aa.advance(); )
                            switch (((Ea = Aa.pb()), Ea)) {
                              case "color":
                                Ba.color = fa(Aa);
                                break;
                              default:
                                Object(h.j)(
                                  "unrecognised border child: ".concat(Ea),
                                );
                            }
                          Aa.Jb();
                          wa.border = Ba;
                          break;
                        case "background-color":
                          wa.backgroundColor = fa(ca);
                          break;
                        case "actions":
                          wa.actions = ia(
                            ca,
                            "E X D U Fo Bl PO PC PV PI".split(" "),
                            aa,
                          );
                          break;
                        case "appearances":
                          Aa = ca;
                          Ba = Object(ha.b)(wa, "appearances");
                          for (Aa.$a(); Aa.advance(); )
                            if (((Ea = Aa.pb()), "appearance" === Ea)) {
                              Ea = Aa.ka("name");
                              za = Object(ha.b)(Ba, Ea);
                              Ea = Aa;
                              for (Ea.$a(); Ea.advance(); )
                                switch (((Ca = Ea.pb()), Ca)) {
                                  case "Normal":
                                    Object(ha.b)(za, "Normal").data =
                                      Ea.current.textContent;
                                    break;
                                  default:
                                    Object(h.j)(
                                      "unexpected appearance state: ",
                                      Ca,
                                    );
                                }
                              Ea.Jb();
                            } else
                              Object(h.j)(
                                "unexpected appearances child: ".concat(Ea),
                              );
                          Aa.Jb();
                          break;
                        case "extra":
                          Aa = ca;
                          Ba = aa;
                          Ea = {};
                          for (Aa.$a(); Aa.advance(); )
                            switch (((za = Aa.pb()), za)) {
                              case "font":
                                Ea.font = w(Aa, Ba(1));
                                break;
                              default:
                                Object(h.j)(
                                  "unrecognised extra child: ".concat(za),
                                );
                            }
                          Aa.Jb();
                          Aa = Ea;
                          Aa.font && (wa.font = Aa.font);
                          break;
                        case "captions":
                          Ba = ca;
                          Aa = {};
                          (Ea = Ba.ka("Normal")) && (Aa.Normal = Ea);
                          (Ea = Ba.ka("Rollover")) && (Aa.Rollover = Ea);
                          (Ba = Ba.ka("Down")) && (Aa.Down = Ba);
                          wa.captions = Aa;
                          break;
                        default:
                          Object(h.j)("unrecognised widget child: ".concat(Aa));
                      }
                    ca.Jb();
                    (Aa = ra[wa.fieldName])
                      ? ((wa = f(Aa, wa)), ka.push(wa))
                      : Object(h.j)(
                          "ignoring widget with no corresponding field data: ".concat(
                            wa.fieldName,
                          ),
                        );
                    break;
                  default:
                    Object(h.j)(
                      "Unknown element encountered in PDFInfo: ".concat(wa),
                    );
                }
                return !0;
              }
              return !1;
            },
            function () {
              ca.Jb();
              ma({
                calculationOrder: qa,
                widgets: ka,
                fields: ra,
                documentActions: sa,
                pages: ua,
                custom: [],
              });
            },
            la,
          );
        }
        e.r(va);
        e.d(va, "parse", function () {
          return b;
        });
        var h = e(2),
          r = e(1);
        e.n(r);
        var a = e(180),
          y = e(4),
          ba = e(11),
          ea = e(26),
          ha = e(149),
          x = e(18);
      },
    },
  ]);
}).call(this || window);
