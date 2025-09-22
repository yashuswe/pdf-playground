/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [22],
    {
      664: function (ya, va, e) {
        e.r(va);
        var na = e(0),
          pa = e(7),
          oa = e(2);
        ya = e(52);
        var ja = e(37),
          ia = e(20);
        e = (function () {
          function fa() {
            this.init();
          }
          fa.prototype.init = function () {
            this.Wva = !1;
            this.$g = this.Wp = this.connection = null;
            this.am = {};
            this.ha = this.QQ = null;
          };
          fa.prototype.cC = function (w) {
            for (var z = this, n = 0; n < w.length; ++n) {
              var f = w[n];
              switch (f.at) {
                case "create":
                  this.am[f.author] || (this.am[f.author] = f.aName);
                  this.CIa(f);
                  break;
                case "modify":
                  this.ha.Dt(f.xfdf).then(function (b) {
                    z.ha.Fb(b[0]);
                  });
                  break;
                case "delete":
                  ((f = "<delete><id>".concat(f.aId, "</id></delete>")),
                    this.ha.Dt(f));
              }
            }
          };
          fa.prototype.CIa = function (w) {
            var z = this;
            this.ha.Dt(w.xfdf).then(function (n) {
              n = n[0];
              n.authorId = w.author;
              z.ha.Fb(n);
              z.ha.trigger(pa.d.UPDATE_ANNOTATION_PERMISSION, [n]);
            });
          };
          fa.prototype.oHa = function (w, z, n) {
            this.Wp && this.Wp(w, z, n);
          };
          fa.prototype.preloadAnnotations = function (w) {
            this.addEventListener(
              "webViewerServerAnnotationsEnabled",
              this.oHa.bind(this, w, "add", { imported: !1 }),
              { once: !0 },
            );
          };
          fa.prototype.initiateCollaboration = function (w, z, n) {
            var f = this;
            if (w) {
              f.$g = z;
              f.ha = n.ia();
              n.addEventListener(pa.i.DOCUMENT_UNLOADED, function () {
                f.disableCollaboration();
              });
              f.$Ya(w);
              var b = new XMLHttpRequest();
              b.addEventListener("load", function () {
                if (200 === b.status && 0 < b.responseText.length)
                  try {
                    var h = JSON.parse(b.responseText);
                    f.connection = exports.da.H_a(
                      Object(ja.l)(f.$g, "blackbox/"),
                      "annot",
                    );
                    f.QQ = h.id;
                    f.am[h.id] = h.user_name;
                    f.ha.V0(h.id);
                    f.connection.p3a(
                      function (r) {
                        r.t && r.t.startsWith("a_") && r.data && f.cC(r.data);
                      },
                      function () {
                        f.connection.send({ t: "a_retrieve", dId: w });
                        f.trigger(
                          fa.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,
                          [f.am[h.id], f.QQ],
                        );
                      },
                      function () {
                        f.disableCollaboration();
                      },
                    );
                  } catch (r) {
                    Object(oa.g)(r.message);
                  }
              });
              b.open("GET", Object(ja.l)(this.$g, "demo/SessionInfo.jsp"));
              b.withCredentials = !0;
              b.send();
              f.Wva = !0;
              f.ha.Aia(function (h) {
                return f.am[h.Author] || h.Author;
              });
            } else Object(oa.g)("Document ID required for collaboration");
          };
          fa.prototype.disableCollaboration = function () {
            this.Wp &&
              (this.ha.removeEventListener(
                ia.a.Events.ANNOTATION_CHANGED,
                this.Wp,
              ),
              (this.Wp = null));
            this.connection && this.connection.Wv();
            this.ha && this.ha.V0("Guest");
            this.init();
            this.trigger(fa.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED);
          };
          fa.prototype.$Ya = function (w) {
            var z = this;
            this.Wp &&
              this.ha.removeEventListener(
                ia.a.Events.ANNOTATION_CHANGED,
                this.Wp,
              );
            this.Wp = function (n, f, b) {
              return Object(na.b)(this, void 0, void 0, function () {
                var h, r, a, y, ba, ea, ha, x, ca;
                return Object(na.d)(this, function (aa) {
                  switch (aa.label) {
                    case 0:
                      if (b.imported) return [2];
                      h = { t: "a_".concat(f), dId: w, annots: [] };
                      return [4, z.ha.w$()];
                    case 1:
                      r = aa.aa();
                      "delete" !== f &&
                        ((a = new DOMParser().parseFromString(r, "text/xml")),
                        (y = new XMLSerializer()));
                      for (ba = 0; ba < n.length; ba++)
                        ((ea = n[ba]),
                          (x = ha = void 0),
                          "add" === f
                            ? ((ha = a.querySelector(
                                '[name="'.concat(ea.Id, '"]'),
                              )),
                              (x = y.serializeToString(ha)),
                              (ca = null),
                              ea.InReplyTo &&
                                (ca =
                                  z.ha.Df(ea.InReplyTo).authorId || "default"),
                              h.annots.push({
                                at: "create",
                                aId: ea.Id,
                                author: z.QQ,
                                aName: z.am[z.QQ],
                                parent: ca,
                                xfdf: "<add>".concat(x, "</add>"),
                              }))
                            : "modify" === f
                              ? ((ha = a.querySelector(
                                  '[name="'.concat(ea.Id, '"]'),
                                )),
                                (x = y.serializeToString(ha)),
                                h.annots.push({
                                  at: "modify",
                                  aId: ea.Id,
                                  xfdf: "<modify>".concat(x, "</modify>"),
                                }))
                              : "delete" === f &&
                                h.annots.push({ at: "delete", aId: ea.Id }));
                      0 < h.annots.length && z.connection.send(h);
                      return [2];
                  }
                });
              });
            }.bind(z);
            this.ha.addEventListener(ia.a.Events.ANNOTATION_CHANGED, this.Wp);
          };
          fa.Events = {
            WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:
              "webViewerServerAnnotationsEnabled",
            WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:
              "webViewerServerAnnotationsDisabled",
          };
          return fa;
        })();
        Object(ya.a)(e);
        va["default"] = e;
      },
    },
  ]);
}).call(this || window);
