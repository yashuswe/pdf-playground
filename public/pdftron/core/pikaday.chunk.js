/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  /*
 Pikaday

 Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
*/
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [16],
    {
      645: function (ya, va) {
        !(function (e, na) {
          if ("object" == typeof va) {
            try {
              var pa = require("moment");
            } catch (oa) {}
            ya.exports = na(pa);
          } else
            "function" == typeof define && define.amd
              ? define(function (oa) {
                  try {
                    pa = oa("moment");
                  } catch (ja) {}
                  return na(pa);
                })
              : (e.Pikaday = na(e.moment));
        })(this, function (e) {
          function na(ma) {
            var la = this,
              ka = la.config(ma);
            la._onMouseDown = function (ra) {
              if (la._v) {
                var qa = (ra = ra || window.event).target || ra.srcElement;
                if (qa)
                  if (
                    (a(qa, "is-disabled") ||
                      (!a(qa, "pika-button") ||
                      a(qa, "is-empty") ||
                      a(qa.parentNode, "is-disabled")
                        ? a(qa, "pika-prev")
                          ? la.prevMonth()
                          : a(qa, "pika-next")
                            ? la.nextMonth()
                            : a(qa, "pika-set-today") &&
                              (la.setDate(new Date()), la.hide())
                        : (la.setDate(
                            new Date(
                              qa.getAttribute("data-pika-year"),
                              qa.getAttribute("data-pika-month"),
                              qa.getAttribute("data-pika-day"),
                            ),
                          ),
                          ka.bound &&
                            ca(function () {
                              la.hide();
                              ka.blurFieldOnSelect &&
                                ka.field &&
                                ka.field.blur();
                            }, 100))),
                    a(qa, "pika-select"))
                  )
                    la._c = !0;
                  else {
                    if (!ra.preventDefault) return ((ra.returnValue = !1), !1);
                    ra.preventDefault();
                  }
              }
            };
            la._onChange = function (ra) {
              var qa = (ra = ra || window.event).target || ra.srcElement;
              qa &&
                (a(qa, "pika-select-month")
                  ? la.gotoMonth(qa.value)
                  : a(qa, "pika-select-year") && la.gotoYear(qa.value));
            };
            la._onKeyChange = function (ra) {
              if (((ra = ra || window.event), la.isVisible()))
                switch (ra.keyCode) {
                  case 13:
                  case 27:
                    ka.field && ka.field.blur();
                    break;
                  case 37:
                    la.adjustDate("subtract", 1);
                    break;
                  case 38:
                    la.adjustDate("subtract", 7);
                    break;
                  case 39:
                    la.adjustDate("add", 1);
                    break;
                  case 40:
                    la.adjustDate("add", 7);
                    break;
                  case 8:
                  case 46:
                    la.setDate(null);
                }
            };
            la._parseFieldValue = function () {
              if (ka.parse) return ka.parse(ka.field.value, ka.format);
              if (ea) {
                var ra = e(ka.field.value, ka.format, ka.formatStrict);
                return ra && ra.isValid() ? ra.toDate() : null;
              }
              return new Date(Date.parse(ka.field.value));
            };
            la._onInputChange = function (ra) {
              var qa;
              ra.firedBy !== la &&
                ((qa = la._parseFieldValue()),
                f(qa) && la.setDate(qa),
                la._v || la.show());
            };
            la._onInputFocus = function () {
              la.show();
            };
            la._onInputClick = function () {
              la.show();
            };
            la._onInputBlur = function () {
              var ra = x.activeElement;
              do if (a(ra, "pika-single")) return;
              while ((ra = ra.parentNode));
              la._c ||
                (la._b = ca(function () {
                  la.hide();
                }, 50));
              la._c = !1;
            };
            la._onClick = function (ra) {
              var qa = (ra = ra || window.event).target || ra.srcElement;
              if ((ra = qa)) {
                !ha &&
                  a(qa, "pika-select") &&
                  (qa.onchange ||
                    (qa.setAttribute("onchange", "return;"),
                    ba(qa, "change", la._onChange)));
                do if (a(ra, "pika-single") || ra === ka.trigger) return;
                while ((ra = ra.parentNode));
                la._v && qa !== ka.trigger && ra !== ka.trigger && la.hide();
              }
            };
            la.el = x.createElement("div");
            la.el.className =
              "pika-single" +
              (ka.isRTL ? " is-rtl" : "") +
              (ka.theme ? " " + ka.theme : "");
            ba(la.el, "mousedown", la._onMouseDown, !0);
            ba(la.el, "touchend", la._onMouseDown, !0);
            ba(la.el, "change", la._onChange);
            ka.keyboardInput && ba(x, "keydown", la._onKeyChange);
            ka.field &&
              (ka.container
                ? ka.container.appendChild(la.el)
                : ka.bound
                  ? x.body.appendChild(la.el)
                  : ka.field.parentNode.insertBefore(
                      la.el,
                      ka.field.nextSibling,
                    ),
              ba(ka.field, "change", la._onInputChange),
              ka.defaultDate ||
                ((ka.defaultDate = la._parseFieldValue()),
                (ka.setDefaultDate = !0)));
            ma = ka.defaultDate;
            f(ma)
              ? ka.setDefaultDate
                ? la.setDate(ma, !0)
                : la.gotoDate(ma)
              : la.gotoDate(new Date());
            ka.bound
              ? (this.hide(),
                (la.el.className += " is-bound"),
                ba(ka.trigger, "click", la._onInputClick),
                ba(ka.trigger, "focus", la._onInputFocus),
                ba(ka.trigger, "blur", la._onInputBlur))
              : this.show();
          }
          function pa(ma, la, ka) {
            return (
              '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' +
              ka +
              '">' +
              (function (ra) {
                var qa,
                  sa = [];
                ra.showWeekNumber && sa.push("<th></th>");
                for (qa = 0; 7 > qa; qa++)
                  sa.push(
                    '<th scope="col"><abbr title="' +
                      ja(ra, qa) +
                      '">' +
                      ja(ra, qa, !0) +
                      "</abbr></th>",
                  );
                return (
                  "<thead><tr>" +
                  (ra.isRTL ? sa.reverse() : sa).join("") +
                  "</tr></thead>"
                );
              })(ma) +
              ("<tbody>" + la.join("") + "</tbody>") +
              (ma.showTodayButton
                ? (function (ra) {
                    var qa = [];
                    return (
                      qa.push(
                        '<td colspan="' +
                          (ra.showWeekNumber ? "8" : "7") +
                          '"><button class="pika-set-today">' +
                          ra.i18n.today +
                          "</button></td>",
                      ),
                      "<tfoot>" +
                        (ra.isRTL ? qa.reverse() : qa).join("") +
                        "</tfoot>"
                    );
                  })(ma)
                : "") +
              "</table>"
            );
          }
          function oa(ma, la, ka, ra, qa, sa) {
            var ua,
              wa,
              Aa = ma._o,
              Ba = ka === Aa.minYear,
              Ea = ka === Aa.maxYear,
              za =
                '<div id="' +
                sa +
                '" class="pika-title" role="heading" aria-live="assertive">',
              Ca = !0,
              Ia = !0;
            var La = [];
            for (sa = 0; 12 > sa; sa++)
              La.push(
                '<option value="' +
                  (ka === qa ? sa - la : 12 + sa - la) +
                  '"' +
                  (sa === ra ? ' selected="selected"' : "") +
                  ((Ba && sa < Aa.minMonth) || (Ea && sa > Aa.maxMonth)
                    ? ' disabled="disabled"'
                    : "") +
                  ">" +
                  Aa.i18n.months[sa] +
                  "</option>",
              );
            qa =
              '<div class="pika-label">' +
              Aa.i18n.months[ra] +
              '<select class="pika-select pika-select-month" tabindex="-1">' +
              La.join("") +
              "</select></div>";
            b(Aa.yearRange)
              ? ((sa = Aa.yearRange[0]), (ua = Aa.yearRange[1] + 1))
              : ((sa = ka - Aa.yearRange), (ua = 1 + ka + Aa.yearRange));
            for (La = []; sa < ua && sa <= Aa.maxYear; sa++)
              sa >= Aa.minYear &&
                La.push(
                  '<option value="' +
                    sa +
                    '"' +
                    (sa === ka ? ' selected="selected"' : "") +
                    ">" +
                    sa +
                    "</option>",
                );
            return (
              (wa =
                '<div class="pika-label">' +
                ka +
                Aa.yearSuffix +
                '<select class="pika-select pika-select-year" tabindex="-1">' +
                La.join("") +
                "</select></div>"),
              Aa.showMonthAfterYear ? (za += wa + qa) : (za += qa + wa),
              Ba && (0 === ra || Aa.minMonth >= ra) && (Ca = !1),
              Ea && (11 === ra || Aa.maxMonth <= ra) && (Ia = !1),
              0 === la &&
                (za +=
                  '<button class="pika-prev' +
                  (Ca ? "" : " is-disabled") +
                  '" type="button">' +
                  Aa.i18n.previousMonth +
                  "</button>"),
              la === ma._o.numberOfMonths - 1 &&
                (za +=
                  '<button class="pika-next' +
                  (Ia ? "" : " is-disabled") +
                  '" type="button">' +
                  Aa.i18n.nextMonth +
                  "</button>"),
              za + "</div>"
            );
          }
          function ja(ma, la, ka) {
            for (la += ma.firstDay; 7 <= la; ) la -= 7;
            return ka ? ma.i18n.weekdaysShort[la] : ma.i18n.weekdays[la];
          }
          function ia(ma) {
            return (
              0 > ma.month &&
                ((ma.year -= Math.ceil(Math.abs(ma.month) / 12)),
                (ma.month += 12)),
              11 < ma.month &&
                ((ma.year += Math.floor(Math.abs(ma.month) / 12)),
                (ma.month -= 12)),
              ma
            );
          }
          function fa(ma, la, ka) {
            var ra;
            x.createEvent
              ? ((ra = x.createEvent("HTMLEvents")).initEvent(la, !0, !1),
                (ra = w(ra, ka)),
                ma.dispatchEvent(ra))
              : x.createEventObject &&
                ((ra = x.createEventObject()),
                (ra = w(ra, ka)),
                ma.fireEvent("on" + la, ra));
          }
          function w(ma, la, ka) {
            var ra, qa;
            for (ra in la)
              (qa = void 0 !== ma[ra]) &&
              "object" == typeof la[ra] &&
              null !== la[ra] &&
              void 0 === la[ra].nodeName
                ? f(la[ra])
                  ? ka && (ma[ra] = new Date(la[ra].getTime()))
                  : b(la[ra])
                    ? ka && (ma[ra] = la[ra].slice(0))
                    : (ma[ra] = w({}, la[ra], ka))
                : (!ka && qa) || (ma[ra] = la[ra]);
            return ma;
          }
          function z(ma) {
            f(ma) && ma.setHours(0, 0, 0, 0);
          }
          function n(ma, la) {
            return [
              31,
              (0 == ma % 4 && 0 != ma % 100) || 0 == ma % 400 ? 29 : 28,
              31,
              30,
              31,
              30,
              31,
              31,
              30,
              31,
              30,
              31,
            ][la];
          }
          function f(ma) {
            return (
              /Date/.test(Object.prototype.toString.call(ma)) &&
              !isNaN(ma.getTime())
            );
          }
          function b(ma) {
            return /Array/.test(Object.prototype.toString.call(ma));
          }
          function h(ma, la) {
            var ka;
            ma.className = (ka = (" " + ma.className + " ").replace(
              " " + la + " ",
              " ",
            )).trim
              ? ka.trim()
              : ka.replace(/^\s+|\s+$/g, "");
          }
          function r(ma, la) {
            a(ma, la) ||
              (ma.className =
                "" === ma.className ? la : ma.className + " " + la);
          }
          function a(ma, la) {
            return -1 !== (" " + ma.className + " ").indexOf(" " + la + " ");
          }
          function y(ma, la, ka, ra) {
            ha
              ? ma.removeEventListener(la, ka, !!ra)
              : ma.detachEvent("on" + la, ka);
          }
          function ba(ma, la, ka, ra) {
            ha
              ? ma.addEventListener(la, ka, !!ra)
              : ma.attachEvent("on" + la, ka);
          }
          var ea = "function" == typeof e,
            ha = !!window.addEventListener,
            x = window.document,
            ca = window.setTimeout,
            aa = {
              field: null,
              bound: void 0,
              ariaLabel: "Use the arrow keys to pick a date",
              position: "bottom left",
              reposition: !0,
              format: "YYYY-MM-DD",
              toString: null,
              parse: null,
              defaultDate: null,
              setDefaultDate: !1,
              firstDay: 0,
              firstWeekOfYearMinDays: 4,
              formatStrict: !1,
              minDate: null,
              maxDate: null,
              yearRange: 10,
              showWeekNumber: !1,
              showTodayButton: !1,
              pickWholeWeek: !1,
              minYear: 0,
              maxYear: 9999,
              minMonth: void 0,
              maxMonth: void 0,
              startRange: null,
              endRange: null,
              isRTL: !1,
              yearSuffix: "",
              showMonthAfterYear: !1,
              showDaysInNextAndPreviousMonths: !1,
              enableSelectionDaysInNextAndPreviousMonths: !1,
              numberOfMonths: 1,
              mainCalendar: "left",
              container: void 0,
              blurFieldOnSelect: !0,
              i18n: {
                previousMonth: "Previous Month",
                nextMonth: "Next Month",
                today: "Today",
                months:
                  "January February March April May June July August September October November December".split(
                    " ",
                  ),
                weekdays:
                  "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                    " ",
                  ),
                weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
              },
              theme: null,
              events: [],
              onSelect: null,
              onOpen: null,
              onClose: null,
              onDraw: null,
              keyboardInput: !0,
            };
          return (
            (na.prototype = {
              config: function (ma) {
                this._o || (this._o = w({}, aa, !0));
                ma = w(this._o, ma, !0);
                ma.isRTL = !!ma.isRTL;
                ma.field = ma.field && ma.field.nodeName ? ma.field : null;
                ma.theme =
                  "string" == typeof ma.theme && ma.theme ? ma.theme : null;
                ma.bound = !!(void 0 !== ma.bound
                  ? ma.field && ma.bound
                  : ma.field);
                ma.trigger =
                  ma.trigger && ma.trigger.nodeName ? ma.trigger : ma.field;
                ma.disableWeekends = !!ma.disableWeekends;
                ma.disableDayFn =
                  "function" == typeof ma.disableDayFn ? ma.disableDayFn : null;
                var la = parseInt(ma.numberOfMonths, 10) || 1;
                ((ma.numberOfMonths = 4 < la ? 4 : la),
                f(ma.minDate) || (ma.minDate = !1),
                f(ma.maxDate) || (ma.maxDate = !1),
                ma.minDate &&
                  ma.maxDate &&
                  ma.maxDate < ma.minDate &&
                  (ma.maxDate = ma.minDate = !1),
                ma.minDate && this.setMinDate(ma.minDate),
                ma.maxDate && this.setMaxDate(ma.maxDate),
                b(ma.yearRange))
                  ? ((la = new Date().getFullYear() - 10),
                    (ma.yearRange[0] = parseInt(ma.yearRange[0], 10) || la),
                    (ma.yearRange[1] = parseInt(ma.yearRange[1], 10) || la))
                  : ((ma.yearRange =
                      Math.abs(parseInt(ma.yearRange, 10)) || aa.yearRange),
                    100 < ma.yearRange && (ma.yearRange = 100));
                return ma;
              },
              toString: function (ma) {
                return (
                  (ma = ma || this._o.format),
                  f(this._d)
                    ? this._o.toString
                      ? this._o.toString(this._d, ma)
                      : ea
                        ? e(this._d).format(ma)
                        : this._d.toDateString()
                    : ""
                );
              },
              getMoment: function () {
                return ea ? e(this._d) : null;
              },
              setMoment: function (ma, la) {
                ea && e.isMoment(ma) && this.setDate(ma.toDate(), la);
              },
              getDate: function () {
                return f(this._d) ? new Date(this._d.getTime()) : null;
              },
              setDate: function (ma, la) {
                if (!ma)
                  return (
                    (this._d = null),
                    this._o.field &&
                      ((this._o.field.value = ""),
                      fa(this._o.field, "change", { firedBy: this })),
                    this.draw()
                  );
                if (
                  ("string" == typeof ma && (ma = new Date(Date.parse(ma))),
                  f(ma))
                ) {
                  var ka = this._o.minDate,
                    ra = this._o.maxDate;
                  f(ka) && ma < ka ? (ma = ka) : f(ra) && ma > ra && (ma = ra);
                  this._d = new Date(ma.getTime());
                  this.gotoDate(this._d);
                  this._o.field &&
                    ((this._o.field.value = this.toString()),
                    fa(this._o.field, "change", { firedBy: this }));
                  la ||
                    "function" != typeof this._o.onSelect ||
                    this._o.onSelect.call(this, this.getDate());
                }
              },
              clear: function () {
                this.setDate(null);
              },
              gotoDate: function (ma) {
                var la = !0;
                if (f(ma)) {
                  if (this.calendars) {
                    la = new Date(
                      this.calendars[0].year,
                      this.calendars[0].month,
                      1,
                    );
                    var ka = new Date(
                        this.calendars[this.calendars.length - 1].year,
                        this.calendars[this.calendars.length - 1].month,
                        1,
                      ),
                      ra = ma.getTime();
                    ka.setMonth(ka.getMonth() + 1);
                    ka.setDate(ka.getDate() - 1);
                    la = ra < la.getTime() || ka.getTime() < ra;
                  }
                  la &&
                    ((this.calendars = [
                      { month: ma.getMonth(), year: ma.getFullYear() },
                    ]),
                    "right" === this._o.mainCalendar &&
                      (this.calendars[0].month += 1 - this._o.numberOfMonths));
                  this.adjustCalendars();
                }
              },
              adjustDate: function (ma, la) {
                var ka,
                  ra = this.getDate() || new Date();
                la = 864e5 * parseInt(la);
                "add" === ma
                  ? (ka = new Date(ra.valueOf() + la))
                  : "subtract" === ma && (ka = new Date(ra.valueOf() - la));
                this.setDate(ka);
              },
              adjustCalendars: function () {
                this.calendars[0] = ia(this.calendars[0]);
                for (var ma = 1; ma < this._o.numberOfMonths; ma++)
                  this.calendars[ma] = ia({
                    month: this.calendars[0].month + ma,
                    year: this.calendars[0].year,
                  });
                this.draw();
              },
              gotoToday: function () {
                this.gotoDate(new Date());
              },
              gotoMonth: function (ma) {
                isNaN(ma) ||
                  ((this.calendars[0].month = parseInt(ma, 10)),
                  this.adjustCalendars());
              },
              nextMonth: function () {
                this.calendars[0].month++;
                this.adjustCalendars();
              },
              prevMonth: function () {
                this.calendars[0].month--;
                this.adjustCalendars();
              },
              gotoYear: function (ma) {
                isNaN(ma) ||
                  ((this.calendars[0].year = parseInt(ma, 10)),
                  this.adjustCalendars());
              },
              setMinDate: function (ma) {
                ma instanceof Date
                  ? (z(ma),
                    (this._o.minDate = ma),
                    (this._o.minYear = ma.getFullYear()),
                    (this._o.minMonth = ma.getMonth()))
                  : ((this._o.minDate = aa.minDate),
                    (this._o.minYear = aa.minYear),
                    (this._o.minMonth = aa.minMonth),
                    (this._o.startRange = aa.startRange));
                this.draw();
              },
              setMaxDate: function (ma) {
                ma instanceof Date
                  ? (z(ma),
                    (this._o.maxDate = ma),
                    (this._o.maxYear = ma.getFullYear()),
                    (this._o.maxMonth = ma.getMonth()))
                  : ((this._o.maxDate = aa.maxDate),
                    (this._o.maxYear = aa.maxYear),
                    (this._o.maxMonth = aa.maxMonth),
                    (this._o.endRange = aa.endRange));
                this.draw();
              },
              setStartRange: function (ma) {
                this._o.startRange = ma;
              },
              setEndRange: function (ma) {
                this._o.endRange = ma;
              },
              draw: function (ma) {
                if (this._v || ma) {
                  var la = this._o;
                  var ka = la.minYear;
                  var ra = la.maxYear,
                    qa = la.minMonth,
                    sa = la.maxMonth;
                  ma = "";
                  this._y <= ka &&
                    ((this._y = ka),
                    !isNaN(qa) && this._m < qa && (this._m = qa));
                  this._y >= ra &&
                    ((this._y = ra),
                    !isNaN(sa) && this._m > sa && (this._m = sa));
                  for (ra = 0; ra < la.numberOfMonths; ra++)
                    ((ka =
                      "pika-title-" +
                      Math.random()
                        .toString(36)
                        .replace(/[^a-z]+/g, "")
                        .substr(0, 2)),
                      (ma +=
                        '<div class="pika-lendar">' +
                        oa(
                          this,
                          ra,
                          this.calendars[ra].year,
                          this.calendars[ra].month,
                          this.calendars[0].year,
                          ka,
                        ) +
                        this.render(
                          this.calendars[ra].year,
                          this.calendars[ra].month,
                          ka,
                        ) +
                        "</div>"));
                  this.el.innerHTML = ma;
                  la.bound &&
                    "hidden" !== la.field.type &&
                    ca(function () {
                      la.trigger.focus();
                    }, 1);
                  "function" == typeof this._o.onDraw && this._o.onDraw(this);
                  la.bound && la.field.setAttribute("aria-label", la.ariaLabel);
                }
              },
              adjustPosition: function () {
                var ma, la, ka, ra, qa, sa, ua, wa, Aa;
                if (!this._o.container) {
                  if (
                    ((this.el.style.position = "absolute"),
                    (la = ma = this._o.trigger),
                    (ka = this.el.offsetWidth),
                    (ra = this.el.offsetHeight),
                    (qa = window.innerWidth || x.documentElement.clientWidth),
                    (sa = window.innerHeight || x.documentElement.clientHeight),
                    (ua =
                      window.pageYOffset ||
                      x.body.scrollTop ||
                      x.documentElement.scrollTop),
                    (wa = !0),
                    (Aa = !0),
                    "function" == typeof ma.getBoundingClientRect)
                  ) {
                    var Ba =
                      (la = ma.getBoundingClientRect()).left +
                      window.pageXOffset;
                    var Ea = la.bottom + window.pageYOffset;
                  } else
                    for (
                      Ba = la.offsetLeft, Ea = la.offsetTop + la.offsetHeight;
                      (la = la.offsetParent);

                    )
                      ((Ba += la.offsetLeft), (Ea += la.offsetTop));
                  ((this._o.reposition && Ba + ka > qa) ||
                    (-1 < this._o.position.indexOf("right") &&
                      0 < Ba - ka + ma.offsetWidth)) &&
                    ((Ba = Ba - ka + ma.offsetWidth), (wa = !1));
                  ((this._o.reposition && Ea + ra > sa + ua) ||
                    (-1 < this._o.position.indexOf("top") &&
                      0 < Ea - ra - ma.offsetHeight)) &&
                    ((Ea = Ea - ra - ma.offsetHeight), (Aa = !1));
                  0 > Ba && (Ba = 0);
                  0 > Ea && (Ea = 0);
                  this.el.style.left = Ba + "px";
                  this.el.style.top = Ea + "px";
                  r(this.el, wa ? "left-aligned" : "right-aligned");
                  r(this.el, Aa ? "bottom-aligned" : "top-aligned");
                  h(this.el, wa ? "right-aligned" : "left-aligned");
                  h(this.el, Aa ? "top-aligned" : "bottom-aligned");
                }
              },
              render: function (ma, la, ka) {
                var ra = this._o,
                  qa = new Date(),
                  sa = n(ma, la),
                  ua = new Date(ma, la, 1).getDay(),
                  wa = [],
                  Aa = [];
                z(qa);
                0 < ra.firstDay && 0 > (ua -= ra.firstDay) && (ua += 7);
                for (
                  var Ba = 0 === la ? 11 : la - 1,
                    Ea = 11 === la ? 0 : la + 1,
                    za = 0 === la ? ma - 1 : ma,
                    Ca = 11 === la ? ma + 1 : ma,
                    Ia = n(za, Ba),
                    La = sa + ua,
                    Ka = La;
                  7 < Ka;

                )
                  Ka -= 7;
                La += 7 - Ka;
                for (var Oa = !1, Qa = (Ka = 0); Ka < La; Ka++) {
                  var Na = new Date(ma, la, Ka - ua + 1),
                    eb = !!f(this._d) && Na.getTime() === this._d.getTime(),
                    Xa = Na.getTime() === qa.getTime(),
                    jb = -1 !== ra.events.indexOf(Na.toDateString()),
                    gb = Ka < ua || Ka >= sa + ua,
                    Ha = Ka - ua + 1,
                    Va = la,
                    Ra = ma,
                    Wa =
                      ra.startRange && ra.startRange.getTime() === Na.getTime(),
                    $a = ra.endRange && ra.endRange.getTime() === Na.getTime(),
                    bb =
                      ra.startRange &&
                      ra.endRange &&
                      ra.startRange < Na &&
                      Na < ra.endRange;
                  gb &&
                    (Ka < ua
                      ? ((Ha = Ia + Ha), (Va = Ba), (Ra = za))
                      : ((Ha -= sa), (Va = Ea), (Ra = Ca)));
                  var nb = eb,
                    tb;
                  !(tb =
                    (ra.minDate && Na < ra.minDate) ||
                    (ra.maxDate && Na > ra.maxDate)) &&
                    (tb = ra.disableWeekends) &&
                    ((tb = Na.getDay()), (tb = 0 === tb || 6 === tb));
                  gb = {
                    day: Ha,
                    month: Va,
                    year: Ra,
                    hasEvent: jb,
                    isSelected: nb,
                    isToday: Xa,
                    isDisabled: tb || (ra.disableDayFn && ra.disableDayFn(Na)),
                    isEmpty: gb,
                    isStartRange: Wa,
                    isEndRange: $a,
                    isInRange: bb,
                    showDaysInNextAndPreviousMonths:
                      ra.showDaysInNextAndPreviousMonths,
                    enableSelectionDaysInNextAndPreviousMonths:
                      ra.enableSelectionDaysInNextAndPreviousMonths,
                  };
                  ra.pickWholeWeek && eb && (Oa = !0);
                  eb = Aa;
                  Na = eb.push;
                  a: {
                    Wa = gb;
                    $a = [];
                    bb = "false";
                    if (Wa.isEmpty) {
                      if (!Wa.showDaysInNextAndPreviousMonths) {
                        gb = '<td class="is-empty"></td>';
                        break a;
                      }
                      $a.push("is-outside-current-month");
                      Wa.enableSelectionDaysInNextAndPreviousMonths ||
                        $a.push("is-selection-disabled");
                    }
                    gb =
                      (Wa.isDisabled && $a.push("is-disabled"),
                      Wa.isToday && $a.push("is-today"),
                      Wa.isSelected && ($a.push("is-selected"), (bb = "true")),
                      Wa.hasEvent && $a.push("has-event"),
                      Wa.isInRange && $a.push("is-inrange"),
                      Wa.isStartRange && $a.push("is-startrange"),
                      Wa.isEndRange && $a.push("is-endrange"),
                      '<td data-day="' +
                        Wa.day +
                        '" class="' +
                        $a.join(" ") +
                        '" aria-selected="' +
                        bb +
                        '"><button class="pika-button pika-day" type="button" data-pika-year="' +
                        Wa.year +
                        '" data-pika-month="' +
                        Wa.month +
                        '" data-pika-day="' +
                        Wa.day +
                        '">' +
                        Wa.day +
                        "</button></td>");
                  }
                  Na.call(eb, gb);
                  7 == ++Qa &&
                    (ra.showWeekNumber &&
                      ((Qa = Aa),
                      (eb = Qa.unshift),
                      (Wa = ra.firstWeekOfYearMinDays),
                      (Na = new Date(ma, la, Ka - ua)),
                      ea
                        ? (Na = e(Na).isoWeek())
                        : (Na.setHours(0, 0, 0, 0),
                          ($a = Na.getDate()),
                          (gb = Wa - 1),
                          Na.setDate($a + gb - ((Na.getDay() + 7 - 1) % 7)),
                          (Wa = new Date(Na.getFullYear(), 0, Wa)),
                          (Na =
                            1 +
                            Math.round(
                              ((Na.getTime() - Wa.getTime()) / 864e5 -
                                gb +
                                ((Wa.getDay() + 7 - 1) % 7)) /
                                7,
                            ))),
                      eb.call(Qa, '<td class="pika-week">' + Na + "</td>")),
                    (Qa = wa),
                    (eb = Qa.push),
                    (Aa =
                      '<tr class="pika-row' +
                      (ra.pickWholeWeek ? " pick-whole-week" : "") +
                      (Oa ? " is-selected" : "") +
                      '">' +
                      (ra.isRTL ? Aa.reverse() : Aa).join("") +
                      "</tr>"),
                    eb.call(Qa, Aa),
                    (Aa = []),
                    (Qa = 0),
                    (Oa = !1));
                }
                return pa(ra, wa, ka);
              },
              isVisible: function () {
                return this._v;
              },
              show: function () {
                this.isVisible() ||
                  ((this._v = !0),
                  this.draw(),
                  h(this.el, "is-hidden"),
                  this._o.bound &&
                    (ba(x, "click", this._onClick), this.adjustPosition()),
                  "function" == typeof this._o.onOpen &&
                    this._o.onOpen.call(this));
              },
              hide: function () {
                var ma = this._v;
                !1 !== ma &&
                  (this._o.bound && y(x, "click", this._onClick),
                  this._o.container ||
                    ((this.el.style.position = "static"),
                    (this.el.style.left = "auto"),
                    (this.el.style.top = "auto")),
                  r(this.el, "is-hidden"),
                  (this._v = !1),
                  void 0 !== ma &&
                    "function" == typeof this._o.onClose &&
                    this._o.onClose.call(this));
              },
              destroy: function () {
                var ma = this._o;
                this.hide();
                y(this.el, "mousedown", this._onMouseDown, !0);
                y(this.el, "touchend", this._onMouseDown, !0);
                y(this.el, "change", this._onChange);
                ma.keyboardInput && y(x, "keydown", this._onKeyChange);
                ma.field &&
                  (y(ma.field, "change", this._onInputChange),
                  ma.bound &&
                    (y(ma.trigger, "click", this._onInputClick),
                    y(ma.trigger, "focus", this._onInputFocus),
                    y(ma.trigger, "blur", this._onInputBlur)));
                this.el.parentNode && this.el.parentNode.removeChild(this.el);
              },
            }),
            na
          );
        });
      },
    },
  ]);
}).call(this || window);
