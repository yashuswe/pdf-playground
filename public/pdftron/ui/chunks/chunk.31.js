(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    1565: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AttributeMap = e.OpIterator = e.Op = void 0));
      const r = n(1675),
        o = n(1620),
        i = n(1621),
        a = n(1676);
      e.AttributeMap = a.default;
      const u = n(1622);
      e.Op = u.default;
      const l = n(1677);
      e.OpIterator = l.default;
      const s = String.fromCharCode(0),
        c = (t, e) => {
          if ("object" != typeof t || null === t)
            throw new Error("cannot retain a " + typeof t);
          if ("object" != typeof e || null === e)
            throw new Error("cannot retain a " + typeof e);
          const n = Object.keys(t)[0];
          if (!n || n !== Object.keys(e)[0])
            throw new Error(
              `embed types not matched: ${n} != ${Object.keys(e)[0]}`,
            );
          return [n, t[n], e[n]];
        };
      class f {
        constructor(t) {
          Array.isArray(t)
            ? (this.ops = t)
            : null != t && Array.isArray(t.ops)
              ? (this.ops = t.ops)
              : (this.ops = []);
        }
        static registerEmbed(t, e) {
          this.handlers[t] = e;
        }
        static unregisterEmbed(t) {
          delete this.handlers[t];
        }
        static getHandler(t) {
          const e = this.handlers[t];
          if (!e) throw new Error(`no handlers for embed type "${t}"`);
          return e;
        }
        insert(t, e) {
          const n = {};
          return "string" == typeof t && 0 === t.length
            ? this
            : ((n.insert = t),
              null != e &&
                "object" == typeof e &&
                Object.keys(e).length > 0 &&
                (n.attributes = e),
              this.push(n));
        }
        delete(t) {
          return t <= 0 ? this : this.push({ delete: t });
        }
        retain(t, e) {
          if ("number" == typeof t && t <= 0) return this;
          const n = { retain: t };
          return (
            null != e &&
              "object" == typeof e &&
              Object.keys(e).length > 0 &&
              (n.attributes = e),
            this.push(n)
          );
        }
        push(t) {
          let e = this.ops.length,
            n = this.ops[e - 1];
          if (((t = o(t)), "object" == typeof n)) {
            if ("number" == typeof t.delete && "number" == typeof n.delete)
              return (
                (this.ops[e - 1] = { delete: n.delete + t.delete }),
                this
              );
            if (
              "number" == typeof n.delete &&
              null != t.insert &&
              ((e -= 1), (n = this.ops[e - 1]), "object" != typeof n)
            )
              return (this.ops.unshift(t), this);
            if (i(t.attributes, n.attributes)) {
              if ("string" == typeof t.insert && "string" == typeof n.insert)
                return (
                  (this.ops[e - 1] = { insert: n.insert + t.insert }),
                  "object" == typeof t.attributes &&
                    (this.ops[e - 1].attributes = t.attributes),
                  this
                );
              if ("number" == typeof t.retain && "number" == typeof n.retain)
                return (
                  (this.ops[e - 1] = { retain: n.retain + t.retain }),
                  "object" == typeof t.attributes &&
                    (this.ops[e - 1].attributes = t.attributes),
                  this
                );
            }
          }
          return (
            e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t),
            this
          );
        }
        chop() {
          const t = this.ops[this.ops.length - 1];
          return (
            t && "number" == typeof t.retain && !t.attributes && this.ops.pop(),
            this
          );
        }
        filter(t) {
          return this.ops.filter(t);
        }
        forEach(t) {
          this.ops.forEach(t);
        }
        map(t) {
          return this.ops.map(t);
        }
        partition(t) {
          const e = [],
            n = [];
          return (
            this.forEach((r) => {
              (t(r) ? e : n).push(r);
            }),
            [e, n]
          );
        }
        reduce(t, e) {
          return this.ops.reduce(t, e);
        }
        changeLength() {
          return this.reduce(
            (t, e) =>
              e.insert ? t + u.default.length(e) : e.delete ? t - e.delete : t,
            0,
          );
        }
        length() {
          return this.reduce((t, e) => t + u.default.length(e), 0);
        }
        slice(t = 0, e = 1 / 0) {
          const n = [],
            r = new l.default(this.ops);
          let o = 0;
          for (; o < e && r.hasNext(); ) {
            let i;
            (o < t ? (i = r.next(t - o)) : ((i = r.next(e - o)), n.push(i)),
              (o += u.default.length(i)));
          }
          return new f(n);
        }
        compose(t) {
          const e = new l.default(this.ops),
            n = new l.default(t.ops),
            r = [],
            o = n.peek();
          if (
            null != o &&
            "number" == typeof o.retain &&
            null == o.attributes
          ) {
            let t = o.retain;
            for (; "insert" === e.peekType() && e.peekLength() <= t; )
              ((t -= e.peekLength()), r.push(e.next()));
            o.retain - t > 0 && n.next(o.retain - t);
          }
          const u = new f(r);
          for (; e.hasNext() || n.hasNext(); )
            if ("insert" === n.peekType()) u.push(n.next());
            else if ("delete" === e.peekType()) u.push(e.next());
            else {
              const t = Math.min(e.peekLength(), n.peekLength()),
                r = e.next(t),
                o = n.next(t);
              if (o.retain) {
                const l = {};
                if ("number" == typeof r.retain)
                  l.retain = "number" == typeof o.retain ? t : o.retain;
                else if ("number" == typeof o.retain)
                  null == r.retain
                    ? (l.insert = r.insert)
                    : (l.retain = r.retain);
                else {
                  const t = null == r.retain ? "insert" : "retain",
                    [e, n, i] = c(r[t], o.retain),
                    a = f.getHandler(e);
                  l[t] = { [e]: a.compose(n, i, "retain" === t) };
                }
                const s = a.default.compose(
                  r.attributes,
                  o.attributes,
                  "number" == typeof r.retain,
                );
                if (
                  (s && (l.attributes = s),
                  u.push(l),
                  !n.hasNext() && i(u.ops[u.ops.length - 1], l))
                ) {
                  const t = new f(e.rest());
                  return u.concat(t).chop();
                }
              } else
                "number" == typeof o.delete &&
                  ("number" == typeof r.retain ||
                    ("object" == typeof r.retain && null !== r.retain)) &&
                  u.push(o);
            }
          return u.chop();
        }
        concat(t) {
          const e = new f(this.ops.slice());
          return (
            t.ops.length > 0 &&
              (e.push(t.ops[0]), (e.ops = e.ops.concat(t.ops.slice(1)))),
            e
          );
        }
        diff(t, e) {
          if (this.ops === t.ops) return new f();
          const n = [this, t].map((e) =>
              e
                .map((n) => {
                  if (null != n.insert)
                    return "string" == typeof n.insert ? n.insert : s;
                  throw new Error(
                    "diff() called " +
                      (e === t ? "on" : "with") +
                      " non-document",
                  );
                })
                .join(""),
            ),
            o = new f(),
            u = r(n[0], n[1], e, !0),
            c = new l.default(this.ops),
            h = new l.default(t.ops);
          return (
            u.forEach((t) => {
              let e = t[1].length;
              for (; e > 0; ) {
                let n = 0;
                switch (t[0]) {
                  case r.INSERT:
                    ((n = Math.min(h.peekLength(), e)), o.push(h.next(n)));
                    break;
                  case r.DELETE:
                    ((n = Math.min(e, c.peekLength())), c.next(n), o.delete(n));
                    break;
                  case r.EQUAL:
                    n = Math.min(c.peekLength(), h.peekLength(), e);
                    const t = c.next(n),
                      u = h.next(n);
                    i(t.insert, u.insert)
                      ? o.retain(n, a.default.diff(t.attributes, u.attributes))
                      : o.push(u).delete(n);
                }
                e -= n;
              }
            }),
            o.chop()
          );
        }
        eachLine(t, e = "\n") {
          const n = new l.default(this.ops);
          let r = new f(),
            o = 0;
          for (; n.hasNext(); ) {
            if ("insert" !== n.peekType()) return;
            const i = n.peek(),
              a = u.default.length(i) - n.peekLength(),
              l = "string" == typeof i.insert ? i.insert.indexOf(e, a) - a : -1;
            if (l < 0) r.push(n.next());
            else if (l > 0) r.push(n.next(l));
            else {
              if (!1 === t(r, n.next(1).attributes || {}, o)) return;
              ((o += 1), (r = new f()));
            }
          }
          r.length() > 0 && t(r, {}, o);
        }
        invert(t) {
          const e = new f();
          return (
            this.reduce((n, r) => {
              if (r.insert) e.delete(u.default.length(r));
              else {
                if ("number" == typeof r.retain && null == r.attributes)
                  return (e.retain(r.retain), n + r.retain);
                if (r.delete || "number" == typeof r.retain) {
                  const o = r.delete || r.retain;
                  return (
                    t.slice(n, n + o).forEach((t) => {
                      r.delete
                        ? e.push(t)
                        : r.retain &&
                          r.attributes &&
                          e.retain(
                            u.default.length(t),
                            a.default.invert(r.attributes, t.attributes),
                          );
                    }),
                    n + o
                  );
                }
                if ("object" == typeof r.retain && null !== r.retain) {
                  const o = t.slice(n, n + 1),
                    i = new l.default(o.ops).next(),
                    [u, s, h] = c(r.retain, i.insert),
                    p = f.getHandler(u);
                  return (
                    e.retain(
                      { [u]: p.invert(s, h) },
                      a.default.invert(r.attributes, i.attributes),
                    ),
                    n + 1
                  );
                }
              }
              return n;
            }, 0),
            e.chop()
          );
        }
        transform(t, e = !1) {
          if (((e = !!e), "number" == typeof t))
            return this.transformPosition(t, e);
          const n = t,
            r = new l.default(this.ops),
            o = new l.default(n.ops),
            i = new f();
          for (; r.hasNext() || o.hasNext(); )
            if ("insert" !== r.peekType() || (!e && "insert" === o.peekType()))
              if ("insert" === o.peekType()) i.push(o.next());
              else {
                const t = Math.min(r.peekLength(), o.peekLength()),
                  n = r.next(t),
                  u = o.next(t);
                if (n.delete) continue;
                if (u.delete) i.push(u);
                else {
                  const r = n.retain,
                    o = u.retain;
                  let l = "object" == typeof o && null !== o ? o : t;
                  if (
                    "object" == typeof r &&
                    null !== r &&
                    "object" == typeof o &&
                    null !== o
                  ) {
                    const t = Object.keys(r)[0];
                    if (t === Object.keys(o)[0]) {
                      const n = f.getHandler(t);
                      n && (l = { [t]: n.transform(r[t], o[t], e) });
                    }
                  }
                  i.retain(
                    l,
                    a.default.transform(n.attributes, u.attributes, e),
                  );
                }
              }
            else i.retain(u.default.length(r.next()));
          return i.chop();
        }
        transformPosition(t, e = !1) {
          e = !!e;
          const n = new l.default(this.ops);
          let r = 0;
          for (; n.hasNext() && r <= t; ) {
            const o = n.peekLength(),
              i = n.peekType();
            (n.next(),
              "delete" !== i
                ? ("insert" === i && (r < t || !e) && (t += o), (r += o))
                : (t -= Math.min(o, t - r)));
          }
          return t;
        }
      }
      ((f.Op = u.default),
        (f.OpIterator = l.default),
        (f.AttributeMap = a.default),
        (f.handlers = {}),
        (e.default = f),
        (t.exports = f),
        (t.exports.default = f));
    },
    1582: function (t, e, n) {
      "use strict";
      var r = {};
      (n.r(r),
        n.d(r, "Attributor", function () {
          return a;
        }),
        n.d(r, "AttributorStore", function () {
          return d;
        }),
        n.d(r, "BlockBlot", function () {
          return j;
        }),
        n.d(r, "ClassAttributor", function () {
          return f;
        }),
        n.d(r, "ContainerBlot", function () {
          return N;
        }),
        n.d(r, "EmbedBlot", function () {
          return C;
        }),
        n.d(r, "InlineBlot", function () {
          return A;
        }),
        n.d(r, "LeafBlot", function () {
          return v;
        }),
        n.d(r, "ParentBlot", function () {
          return E;
        }),
        n.d(r, "Registry", function () {
          return s;
        }),
        n.d(r, "Scope", function () {
          return i;
        }),
        n.d(r, "ScrollBlot", function () {
          return P;
        }),
        n.d(r, "StyleAttributor", function () {
          return p;
        }),
        n.d(r, "TextBlot", function () {
          return q;
        }));
      (n(9),
        n(10),
        n(14),
        n(21),
        n(76),
        n(20),
        n(22),
        n(18),
        n(16),
        n(48),
        n(24),
        n(47),
        n(49),
        n(17),
        n(19),
        n(11),
        n(13),
        n(30),
        n(38),
        n(34),
        n(81),
        n(27),
        n(12),
        n(44),
        n(118),
        n(31),
        n(28),
        n(228),
        n(627),
        n(37),
        n(8),
        n(181),
        n(153),
        n(29));
      var o = n(1591),
        i = ((t) => (
          (t[(t.TYPE = 3)] = "TYPE"),
          (t[(t.LEVEL = 12)] = "LEVEL"),
          (t[(t.ATTRIBUTE = 13)] = "ATTRIBUTE"),
          (t[(t.BLOT = 14)] = "BLOT"),
          (t[(t.INLINE = 7)] = "INLINE"),
          (t[(t.BLOCK = 11)] = "BLOCK"),
          (t[(t.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
          (t[(t.INLINE_BLOT = 6)] = "INLINE_BLOT"),
          (t[(t.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
          (t[(t.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
          (t[(t.ANY = 15)] = "ANY"),
          t
        ))(i || {});
      class a {
        constructor(t, e, n = {}) {
          ((this.attrName = t), (this.keyName = e));
          const r = i.TYPE & i.ATTRIBUTE;
          ((this.scope =
            null != n.scope ? (n.scope & i.LEVEL) | r : i.ATTRIBUTE),
            null != n.whitelist && (this.whitelist = n.whitelist));
        }
        static keys(t) {
          return Array.from(t.attributes).map((t) => t.name);
        }
        add(t, e) {
          return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0);
        }
        canAdd(t, e) {
          return (
            null == this.whitelist ||
            ("string" == typeof e
              ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1
              : this.whitelist.indexOf(e) > -1)
          );
        }
        remove(t) {
          t.removeAttribute(this.keyName);
        }
        value(t) {
          const e = t.getAttribute(this.keyName);
          return this.canAdd(t, e) && e ? e : "";
        }
      }
      class u extends Error {
        constructor(t) {
          (super((t = "[Parchment] " + t)),
            (this.message = t),
            (this.name = this.constructor.name));
        }
      }
      const l = class t {
        constructor() {
          ((this.attributes = {}),
            (this.classes = {}),
            (this.tags = {}),
            (this.types = {}));
        }
        static find(t, e = !1) {
          if (null == t) return null;
          if (this.blots.has(t)) return this.blots.get(t) || null;
          if (e) {
            let n = null;
            try {
              n = t.parentNode;
            } catch {
              return null;
            }
            return this.find(n, e);
          }
          return null;
        }
        create(e, n, r) {
          const o = this.query(n);
          if (null == o) throw new u(`Unable to create ${n} blot`);
          const i = o,
            a =
              n instanceof Node || n.nodeType === Node.TEXT_NODE
                ? n
                : i.create(r),
            l = new i(e, a, r);
          return (t.blots.set(l.domNode, l), l);
        }
        find(e, n = !1) {
          return t.find(e, n);
        }
        query(t, e = i.ANY) {
          let n;
          return (
            "string" == typeof t
              ? (n = this.types[t] || this.attributes[t])
              : t instanceof Text || t.nodeType === Node.TEXT_NODE
                ? (n = this.types.text)
                : "number" == typeof t
                  ? t & i.LEVEL & i.BLOCK
                    ? (n = this.types.block)
                    : t & i.LEVEL & i.INLINE && (n = this.types.inline)
                  : t instanceof Element &&
                    ((t.getAttribute("class") || "")
                      .split(/\s+/)
                      .some((t) => ((n = this.classes[t]), !!n)),
                    (n = n || this.tags[t.tagName])),
            null == n
              ? null
              : "scope" in n && e & i.LEVEL & n.scope && e & i.TYPE & n.scope
                ? n
                : null
          );
        }
        register(...t) {
          return t.map((t) => {
            const e = "blotName" in t,
              n = "attrName" in t;
            if (!e && !n) throw new u("Invalid definition");
            if (e && "abstract" === t.blotName)
              throw new u("Cannot register abstract class");
            const r = e ? t.blotName : n ? t.attrName : void 0;
            return (
              (this.types[r] = t),
              n
                ? "string" == typeof t.keyName &&
                  (this.attributes[t.keyName] = t)
                : e &&
                  (t.className && (this.classes[t.className] = t),
                  t.tagName &&
                    (Array.isArray(t.tagName)
                      ? (t.tagName = t.tagName.map((t) => t.toUpperCase()))
                      : (t.tagName = t.tagName.toUpperCase()),
                    (Array.isArray(t.tagName)
                      ? t.tagName
                      : [t.tagName]
                    ).forEach((e) => {
                      (null == this.tags[e] || null == t.className) &&
                        (this.tags[e] = t);
                    }))),
              t
            );
          });
        }
      };
      l.blots = new WeakMap();
      let s = l;
      function c(t, e) {
        return (t.getAttribute("class") || "")
          .split(/\s+/)
          .filter((t) => 0 === t.indexOf(e + "-"));
      }
      const f = class extends a {
        static keys(t) {
          return (t.getAttribute("class") || "")
            .split(/\s+/)
            .map((t) => t.split("-").slice(0, -1).join("-"));
        }
        add(t, e) {
          return (
            !!this.canAdd(t, e) &&
            (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0)
          );
        }
        remove(t) {
          (c(t, this.keyName).forEach((e) => {
            t.classList.remove(e);
          }),
            0 === t.classList.length && t.removeAttribute("class"));
        }
        value(t) {
          const e = (c(t, this.keyName)[0] || "").slice(
            this.keyName.length + 1,
          );
          return this.canAdd(t, e) ? e : "";
        }
      };
      function h(t) {
        const e = t.split("-"),
          n = e
            .slice(1)
            .map((t) => t[0].toUpperCase() + t.slice(1))
            .join("");
        return e[0] + n;
      }
      const p = class extends a {
        static keys(t) {
          return (t.getAttribute("style") || "")
            .split(";")
            .map((t) => t.split(":")[0].trim());
        }
        add(t, e) {
          return !!this.canAdd(t, e) && ((t.style[h(this.keyName)] = e), !0);
        }
        remove(t) {
          ((t.style[h(this.keyName)] = ""),
            t.getAttribute("style") || t.removeAttribute("style"));
        }
        value(t) {
          const e = t.style[h(this.keyName)];
          return this.canAdd(t, e) ? e : "";
        }
      };
      const d = class {
          constructor(t) {
            ((this.attributes = {}), (this.domNode = t), this.build());
          }
          attribute(t, e) {
            e
              ? t.add(this.domNode, e) &&
                (null != t.value(this.domNode)
                  ? (this.attributes[t.attrName] = t)
                  : delete this.attributes[t.attrName])
              : (t.remove(this.domNode), delete this.attributes[t.attrName]);
          }
          build() {
            this.attributes = {};
            const t = s.find(this.domNode);
            if (null == t) return;
            const e = a.keys(this.domNode),
              n = f.keys(this.domNode),
              r = p.keys(this.domNode);
            e.concat(n)
              .concat(r)
              .forEach((e) => {
                const n = t.scroll.query(e, i.ATTRIBUTE);
                n instanceof a && (this.attributes[n.attrName] = n);
              });
          }
          copy(t) {
            Object.keys(this.attributes).forEach((e) => {
              const n = this.attributes[e].value(this.domNode);
              t.format(e, n);
            });
          }
          move(t) {
            (this.copy(t),
              Object.keys(this.attributes).forEach((t) => {
                this.attributes[t].remove(this.domNode);
              }),
              (this.attributes = {}));
          }
          values() {
            return Object.keys(this.attributes).reduce(
              (t, e) => ((t[e] = this.attributes[e].value(this.domNode)), t),
              {},
            );
          }
        },
        y = class {
          constructor(t, e) {
            ((this.scroll = t),
              (this.domNode = e),
              s.blots.set(e, this),
              (this.prev = null),
              (this.next = null));
          }
          static create(t) {
            if (null == this.tagName)
              throw new u("Blot definition missing tagName");
            let e, n;
            return (
              Array.isArray(this.tagName)
                ? ("string" == typeof t
                    ? ((n = t.toUpperCase()),
                      parseInt(n, 10).toString() === n && (n = parseInt(n, 10)))
                    : "number" == typeof t && (n = t),
                  (e =
                    "number" == typeof n
                      ? document.createElement(this.tagName[n - 1])
                      : n && this.tagName.indexOf(n) > -1
                        ? document.createElement(n)
                        : document.createElement(this.tagName[0])))
                : (e = document.createElement(this.tagName)),
              this.className && e.classList.add(this.className),
              e
            );
          }
          get statics() {
            return this.constructor;
          }
          attach() {}
          clone() {
            const t = this.domNode.cloneNode(!1);
            return this.scroll.create(t);
          }
          detach() {
            (null != this.parent && this.parent.removeChild(this),
              s.blots.delete(this.domNode));
          }
          deleteAt(t, e) {
            this.isolate(t, e).remove();
          }
          formatAt(t, e, n, r) {
            const o = this.isolate(t, e);
            if (null != this.scroll.query(n, i.BLOT) && r) o.wrap(n, r);
            else if (null != this.scroll.query(n, i.ATTRIBUTE)) {
              const t = this.scroll.create(this.statics.scope);
              (o.wrap(t), t.format(n, r));
            }
          }
          insertAt(t, e, n) {
            const r =
                null == n
                  ? this.scroll.create("text", e)
                  : this.scroll.create(e, n),
              o = this.split(t);
            this.parent.insertBefore(r, o || void 0);
          }
          isolate(t, e) {
            const n = this.split(t);
            if (null == n) throw new Error("Attempt to isolate at end");
            return (n.split(e), n);
          }
          length() {
            return 1;
          }
          offset(t = this.parent) {
            return null == this.parent || this === t
              ? 0
              : this.parent.children.offset(this) + this.parent.offset(t);
          }
          optimize(t) {
            this.statics.requiredContainer &&
              !(this.parent instanceof this.statics.requiredContainer) &&
              this.wrap(this.statics.requiredContainer.blotName);
          }
          remove() {
            (null != this.domNode.parentNode &&
              this.domNode.parentNode.removeChild(this.domNode),
              this.detach());
          }
          replaceWith(t, e) {
            const n = "string" == typeof t ? this.scroll.create(t, e) : t;
            return (
              null != this.parent &&
                (this.parent.insertBefore(n, this.next || void 0),
                this.remove()),
              n
            );
          }
          split(t, e) {
            return 0 === t ? this : this.next;
          }
          update(t, e) {}
          wrap(t, e) {
            const n = "string" == typeof t ? this.scroll.create(t, e) : t;
            if (
              (null != this.parent &&
                this.parent.insertBefore(n, this.next || void 0),
              "function" != typeof n.appendChild)
            )
              throw new u("Cannot wrap " + t);
            return (n.appendChild(this), n);
          }
        };
      y.blotName = "abstract";
      let b = y;
      const m = class extends b {
        static value(t) {
          return !0;
        }
        index(t, e) {
          return this.domNode === t ||
            this.domNode.compareDocumentPosition(t) &
              Node.DOCUMENT_POSITION_CONTAINED_BY
            ? Math.min(e, 1)
            : -1;
        }
        position(t, e) {
          let n = Array.from(this.parent.domNode.childNodes).indexOf(
            this.domNode,
          );
          return (t > 0 && (n += 1), [this.parent.domNode, n]);
        }
        value() {
          return {
            [this.statics.blotName]: this.statics.value(this.domNode) || !0,
          };
        }
      };
      m.scope = i.INLINE_BLOT;
      const v = m;
      class g {
        constructor() {
          ((this.head = null), (this.tail = null), (this.length = 0));
        }
        append(...t) {
          if ((this.insertBefore(t[0], null), t.length > 1)) {
            const e = t.slice(1);
            this.append(...e);
          }
        }
        at(t) {
          const e = this.iterator();
          let n = e();
          for (; n && t > 0; ) ((t -= 1), (n = e()));
          return n;
        }
        contains(t) {
          const e = this.iterator();
          let n = e();
          for (; n; ) {
            if (n === t) return !0;
            n = e();
          }
          return !1;
        }
        indexOf(t) {
          const e = this.iterator();
          let n = e(),
            r = 0;
          for (; n; ) {
            if (n === t) return r;
            ((r += 1), (n = e()));
          }
          return -1;
        }
        insertBefore(t, e) {
          null != t &&
            (this.remove(t),
            (t.next = e),
            null != e
              ? ((t.prev = e.prev),
                null != e.prev && (e.prev.next = t),
                (e.prev = t),
                e === this.head && (this.head = t))
              : null != this.tail
                ? ((this.tail.next = t), (t.prev = this.tail), (this.tail = t))
                : ((t.prev = null), (this.head = this.tail = t)),
            (this.length += 1));
        }
        offset(t) {
          let e = 0,
            n = this.head;
          for (; null != n; ) {
            if (n === t) return e;
            ((e += n.length()), (n = n.next));
          }
          return -1;
        }
        remove(t) {
          this.contains(t) &&
            (null != t.prev && (t.prev.next = t.next),
            null != t.next && (t.next.prev = t.prev),
            t === this.head && (this.head = t.next),
            t === this.tail && (this.tail = t.prev),
            (this.length -= 1));
        }
        iterator(t = this.head) {
          return () => {
            const e = t;
            return (null != t && (t = t.next), e);
          };
        }
        find(t, e = !1) {
          const n = this.iterator();
          let r = n();
          for (; r; ) {
            const o = r.length();
            if (
              t < o ||
              (e && t === o && (null == r.next || 0 !== r.next.length()))
            )
              return [r, t];
            ((t -= o), (r = n()));
          }
          return [null, 0];
        }
        forEach(t) {
          const e = this.iterator();
          let n = e();
          for (; n; ) (t(n), (n = e()));
        }
        forEachAt(t, e, n) {
          if (e <= 0) return;
          const [r, o] = this.find(t);
          let i = t - o;
          const a = this.iterator(r);
          let u = a();
          for (; u && i < t + e; ) {
            const r = u.length();
            (t > i
              ? n(u, t - i, Math.min(e, i + r - t))
              : n(u, 0, Math.min(r, t + e - i)),
              (i += r),
              (u = a()));
          }
        }
        map(t) {
          return this.reduce((e, n) => (e.push(t(n)), e), []);
        }
        reduce(t, e) {
          const n = this.iterator();
          let r = n();
          for (; r; ) ((e = t(e, r)), (r = n()));
          return e;
        }
      }
      function w(t, e) {
        const n = e.find(t);
        if (n) return n;
        try {
          return e.create(t);
        } catch {
          const n = e.create(i.INLINE);
          return (
            Array.from(t.childNodes).forEach((t) => {
              n.domNode.appendChild(t);
            }),
            t.parentNode && t.parentNode.replaceChild(n.domNode, t),
            n.attach(),
            n
          );
        }
      }
      const O = class t extends b {
        constructor(t, e) {
          (super(t, e), (this.uiNode = null), this.build());
        }
        appendChild(t) {
          this.insertBefore(t);
        }
        attach() {
          (super.attach(),
            this.children.forEach((t) => {
              t.attach();
            }));
        }
        attachUI(e) {
          (null != this.uiNode && this.uiNode.remove(),
            (this.uiNode = e),
            t.uiClass && this.uiNode.classList.add(t.uiClass),
            this.uiNode.setAttribute("contenteditable", "false"),
            this.domNode.insertBefore(this.uiNode, this.domNode.firstChild));
        }
        build() {
          ((this.children = new g()),
            Array.from(this.domNode.childNodes)
              .filter((t) => t !== this.uiNode)
              .reverse()
              .forEach((t) => {
                try {
                  const e = w(t, this.scroll);
                  this.insertBefore(e, this.children.head || void 0);
                } catch (t) {
                  if (t instanceof u) return;
                  throw t;
                }
              }));
        }
        deleteAt(t, e) {
          if (0 === t && e === this.length()) return this.remove();
          this.children.forEachAt(t, e, (t, e, n) => {
            t.deleteAt(e, n);
          });
        }
        descendant(e, n = 0) {
          const [r, o] = this.children.find(n);
          return (null == e.blotName && e(r)) ||
            (null != e.blotName && r instanceof e)
            ? [r, o]
            : r instanceof t
              ? r.descendant(e, o)
              : [null, -1];
        }
        descendants(e, n = 0, r = Number.MAX_VALUE) {
          let o = [],
            i = r;
          return (
            this.children.forEachAt(n, r, (n, r, a) => {
              (((null == e.blotName && e(n)) ||
                (null != e.blotName && n instanceof e)) &&
                o.push(n),
                n instanceof t && (o = o.concat(n.descendants(e, r, i))),
                (i -= a));
            }),
            o
          );
        }
        detach() {
          (this.children.forEach((t) => {
            t.detach();
          }),
            super.detach());
        }
        enforceAllowedChildren() {
          let e = !1;
          this.children.forEach((n) => {
            e ||
              this.statics.allowedChildren.some((t) => n instanceof t) ||
              (n.statics.scope === i.BLOCK_BLOT
                ? (null != n.next && this.splitAfter(n),
                  null != n.prev && this.splitAfter(n.prev),
                  n.parent.unwrap(),
                  (e = !0))
                : n instanceof t
                  ? n.unwrap()
                  : n.remove());
          });
        }
        formatAt(t, e, n, r) {
          this.children.forEachAt(t, e, (t, e, o) => {
            t.formatAt(e, o, n, r);
          });
        }
        insertAt(t, e, n) {
          const [r, o] = this.children.find(t);
          if (r) r.insertAt(o, e, n);
          else {
            const t =
              null == n
                ? this.scroll.create("text", e)
                : this.scroll.create(e, n);
            this.appendChild(t);
          }
        }
        insertBefore(t, e) {
          null != t.parent && t.parent.children.remove(t);
          let n = null;
          (this.children.insertBefore(t, e || null),
            (t.parent = this),
            null != e && (n = e.domNode),
            (this.domNode.parentNode !== t.domNode ||
              this.domNode.nextSibling !== n) &&
              this.domNode.insertBefore(t.domNode, n),
            t.attach());
        }
        length() {
          return this.children.reduce((t, e) => t + e.length(), 0);
        }
        moveChildren(t, e) {
          this.children.forEach((n) => {
            t.insertBefore(n, e);
          });
        }
        optimize(t) {
          if (
            (super.optimize(t),
            this.enforceAllowedChildren(),
            null != this.uiNode &&
              this.uiNode !== this.domNode.firstChild &&
              this.domNode.insertBefore(this.uiNode, this.domNode.firstChild),
            0 === this.children.length)
          )
            if (null != this.statics.defaultChild) {
              const t = this.scroll.create(this.statics.defaultChild.blotName);
              this.appendChild(t);
            } else this.remove();
        }
        path(e, n = !1) {
          const [r, o] = this.children.find(e, n),
            i = [[this, e]];
          return r instanceof t
            ? i.concat(r.path(o, n))
            : (null != r && i.push([r, o]), i);
        }
        removeChild(t) {
          this.children.remove(t);
        }
        replaceWith(e, n) {
          const r = "string" == typeof e ? this.scroll.create(e, n) : e;
          return (r instanceof t && this.moveChildren(r), super.replaceWith(r));
        }
        split(t, e = !1) {
          if (!e) {
            if (0 === t) return this;
            if (t === this.length()) return this.next;
          }
          const n = this.clone();
          return (
            this.parent && this.parent.insertBefore(n, this.next || void 0),
            this.children.forEachAt(t, this.length(), (t, r, o) => {
              const i = t.split(r, e);
              null != i && n.appendChild(i);
            }),
            n
          );
        }
        splitAfter(t) {
          const e = this.clone();
          for (; null != t.next; ) e.appendChild(t.next);
          return (
            this.parent && this.parent.insertBefore(e, this.next || void 0),
            e
          );
        }
        unwrap() {
          (this.parent && this.moveChildren(this.parent, this.next || void 0),
            this.remove());
        }
        update(t, e) {
          const n = [],
            r = [];
          (t.forEach((t) => {
            t.target === this.domNode &&
              "childList" === t.type &&
              (n.push(...t.addedNodes), r.push(...t.removedNodes));
          }),
            r.forEach((t) => {
              if (
                null != t.parentNode &&
                "IFRAME" !== t.tagName &&
                document.body.compareDocumentPosition(t) &
                  Node.DOCUMENT_POSITION_CONTAINED_BY
              )
                return;
              const e = this.scroll.find(t);
              null != e &&
                (null == e.domNode.parentNode ||
                  e.domNode.parentNode === this.domNode) &&
                e.detach();
            }),
            n
              .filter((t) => t.parentNode === this.domNode && t !== this.uiNode)
              .sort((t, e) =>
                t === e
                  ? 0
                  : t.compareDocumentPosition(e) &
                      Node.DOCUMENT_POSITION_FOLLOWING
                    ? 1
                    : -1,
              )
              .forEach((t) => {
                let e = null;
                null != t.nextSibling && (e = this.scroll.find(t.nextSibling));
                const n = w(t, this.scroll);
                (n.next !== e || null == n.next) &&
                  (null != n.parent && n.parent.removeChild(this),
                  this.insertBefore(n, e || void 0));
              }),
            this.enforceAllowedChildren());
        }
      };
      O.uiClass = "";
      const E = O;
      const x = class t extends E {
        static create(t) {
          return super.create(t);
        }
        static formats(e, n) {
          const r = n.query(t.blotName);
          if (null == r || e.tagName !== r.tagName) {
            if ("string" == typeof this.tagName) return !0;
            if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
          }
        }
        constructor(t, e) {
          (super(t, e), (this.attributes = new d(this.domNode)));
        }
        format(e, n) {
          if (e !== this.statics.blotName || n) {
            const t = this.scroll.query(e, i.INLINE);
            if (null == t) return;
            t instanceof a
              ? this.attributes.attribute(t, n)
              : n &&
                (e !== this.statics.blotName || this.formats()[e] !== n) &&
                this.replaceWith(e, n);
          } else
            (this.children.forEach((e) => {
              (e instanceof t || (e = e.wrap(t.blotName, !0)),
                this.attributes.copy(e));
            }),
              this.unwrap());
        }
        formats() {
          const t = this.attributes.values(),
            e = this.statics.formats(this.domNode, this.scroll);
          return (null != e && (t[this.statics.blotName] = e), t);
        }
        formatAt(t, e, n, r) {
          null != this.formats()[n] || this.scroll.query(n, i.ATTRIBUTE)
            ? this.isolate(t, e).format(n, r)
            : super.formatAt(t, e, n, r);
        }
        optimize(e) {
          super.optimize(e);
          const n = this.formats();
          if (0 === Object.keys(n).length) return this.unwrap();
          const r = this.next;
          r instanceof t &&
            r.prev === this &&
            (function (t, e) {
              if (Object.keys(t).length !== Object.keys(e).length) return !1;
              for (const n in t) if (t[n] !== e[n]) return !1;
              return !0;
            })(n, r.formats()) &&
            (r.moveChildren(this), r.remove());
        }
        replaceWith(t, e) {
          const n = super.replaceWith(t, e);
          return (this.attributes.copy(n), n);
        }
        update(t, e) {
          (super.update(t, e),
            t.some(
              (t) => t.target === this.domNode && "attributes" === t.type,
            ) && this.attributes.build());
        }
        wrap(e, n) {
          const r = super.wrap(e, n);
          return (r instanceof t && this.attributes.move(r), r);
        }
      };
      ((x.allowedChildren = [x, v]),
        (x.blotName = "inline"),
        (x.scope = i.INLINE_BLOT),
        (x.tagName = "SPAN"));
      const A = x,
        k = class t extends E {
          static create(t) {
            return super.create(t);
          }
          static formats(e, n) {
            const r = n.query(t.blotName);
            if (null == r || e.tagName !== r.tagName) {
              if ("string" == typeof this.tagName) return !0;
              if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
            }
          }
          constructor(t, e) {
            (super(t, e), (this.attributes = new d(this.domNode)));
          }
          format(e, n) {
            const r = this.scroll.query(e, i.BLOCK);
            null != r &&
              (r instanceof a
                ? this.attributes.attribute(r, n)
                : e !== this.statics.blotName || n
                  ? n &&
                    (e !== this.statics.blotName || this.formats()[e] !== n) &&
                    this.replaceWith(e, n)
                  : this.replaceWith(t.blotName));
          }
          formats() {
            const t = this.attributes.values(),
              e = this.statics.formats(this.domNode, this.scroll);
            return (null != e && (t[this.statics.blotName] = e), t);
          }
          formatAt(t, e, n, r) {
            null != this.scroll.query(n, i.BLOCK)
              ? this.format(n, r)
              : super.formatAt(t, e, n, r);
          }
          insertAt(t, e, n) {
            if (null == n || null != this.scroll.query(e, i.INLINE))
              super.insertAt(t, e, n);
            else {
              const r = this.split(t);
              if (null == r)
                throw new Error("Attempt to insertAt after block boundaries");
              {
                const t = this.scroll.create(e, n);
                r.parent.insertBefore(t, r);
              }
            }
          }
          replaceWith(t, e) {
            const n = super.replaceWith(t, e);
            return (this.attributes.copy(n), n);
          }
          update(t, e) {
            (super.update(t, e),
              t.some(
                (t) => t.target === this.domNode && "attributes" === t.type,
              ) && this.attributes.build());
          }
        };
      ((k.blotName = "block"),
        (k.scope = i.BLOCK_BLOT),
        (k.tagName = "P"),
        (k.allowedChildren = [A, k, v]));
      const j = k,
        S = class extends E {
          checkMerge() {
            return (
              null !== this.next &&
              this.next.statics.blotName === this.statics.blotName
            );
          }
          deleteAt(t, e) {
            (super.deleteAt(t, e), this.enforceAllowedChildren());
          }
          formatAt(t, e, n, r) {
            (super.formatAt(t, e, n, r), this.enforceAllowedChildren());
          }
          insertAt(t, e, n) {
            (super.insertAt(t, e, n), this.enforceAllowedChildren());
          }
          optimize(t) {
            (super.optimize(t),
              this.children.length > 0 &&
                null != this.next &&
                this.checkMerge() &&
                (this.next.moveChildren(this), this.next.remove()));
          }
        };
      ((S.blotName = "container"), (S.scope = i.BLOCK_BLOT));
      const N = S;
      const C = class extends v {
          static formats(t, e) {}
          format(t, e) {
            super.formatAt(0, this.length(), t, e);
          }
          formatAt(t, e, n, r) {
            0 === t && e === this.length()
              ? this.format(n, r)
              : super.formatAt(t, e, n, r);
          }
          formats() {
            return this.statics.formats(this.domNode, this.scroll);
          }
        },
        T = {
          attributes: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0,
        },
        _ = class extends E {
          constructor(t, e) {
            (super(null, e),
              (this.registry = t),
              (this.scroll = this),
              this.build(),
              (this.observer = new MutationObserver((t) => {
                this.update(t);
              })),
              this.observer.observe(this.domNode, T),
              this.attach());
          }
          create(t, e) {
            return this.registry.create(this, t, e);
          }
          find(t, e = !1) {
            const n = this.registry.find(t, e);
            return n
              ? n.scroll === this
                ? n
                : e
                  ? this.find(n.scroll.domNode.parentNode, !0)
                  : null
              : null;
          }
          query(t, e = i.ANY) {
            return this.registry.query(t, e);
          }
          register(...t) {
            return this.registry.register(...t);
          }
          build() {
            null != this.scroll && super.build();
          }
          detach() {
            (super.detach(), this.observer.disconnect());
          }
          deleteAt(t, e) {
            (this.update(),
              0 === t && e === this.length()
                ? this.children.forEach((t) => {
                    t.remove();
                  })
                : super.deleteAt(t, e));
          }
          formatAt(t, e, n, r) {
            (this.update(), super.formatAt(t, e, n, r));
          }
          insertAt(t, e, n) {
            (this.update(), super.insertAt(t, e, n));
          }
          optimize(t = [], e = {}) {
            super.optimize(e);
            const n = e.mutationsMap || new WeakMap();
            let r = Array.from(this.observer.takeRecords());
            for (; r.length > 0; ) t.push(r.pop());
            const o = (t, e = !0) => {
                null == t ||
                  t === this ||
                  (null != t.domNode.parentNode &&
                    (n.has(t.domNode) || n.set(t.domNode, []),
                    e && o(t.parent)));
              },
              i = (t) => {
                n.has(t.domNode) &&
                  (t instanceof E && t.children.forEach(i),
                  n.delete(t.domNode),
                  t.optimize(e));
              };
            let a = t;
            for (let e = 0; a.length > 0; e += 1) {
              if (e >= 100)
                throw new Error(
                  "[Parchment] Maximum optimize iterations reached",
                );
              for (
                a.forEach((t) => {
                  const e = this.find(t.target, !0);
                  null != e &&
                    (e.domNode === t.target &&
                      ("childList" === t.type
                        ? (o(this.find(t.previousSibling, !1)),
                          Array.from(t.addedNodes).forEach((t) => {
                            const e = this.find(t, !1);
                            (o(e, !1),
                              e instanceof E &&
                                e.children.forEach((t) => {
                                  o(t, !1);
                                }));
                          }))
                        : "attributes" === t.type && o(e.prev)),
                    o(e));
                }),
                  this.children.forEach(i),
                  a = Array.from(this.observer.takeRecords()),
                  r = a.slice();
                r.length > 0;

              )
                t.push(r.pop());
            }
          }
          update(t, e = {}) {
            t = t || this.observer.takeRecords();
            const n = new WeakMap();
            (t
              .map((t) => {
                const e = this.find(t.target, !0);
                return null == e
                  ? null
                  : n.has(e.domNode)
                    ? (n.get(e.domNode).push(t), null)
                    : (n.set(e.domNode, [t]), e);
              })
              .forEach((t) => {
                null != t &&
                  t !== this &&
                  n.has(t.domNode) &&
                  t.update(n.get(t.domNode) || [], e);
              }),
              (e.mutationsMap = n),
              n.has(this.domNode) && super.update(n.get(this.domNode), e),
              this.optimize(t, e));
          }
        };
      ((_.blotName = "scroll"),
        (_.defaultChild = j),
        (_.allowedChildren = [j, N]),
        (_.scope = i.BLOCK_BLOT),
        (_.tagName = "DIV"));
      const P = _,
        R = class t extends v {
          static create(t) {
            return document.createTextNode(t);
          }
          static value(t) {
            return t.data;
          }
          constructor(t, e) {
            (super(t, e), (this.text = this.statics.value(this.domNode)));
          }
          deleteAt(t, e) {
            this.domNode.data = this.text =
              this.text.slice(0, t) + this.text.slice(t + e);
          }
          index(t, e) {
            return this.domNode === t ? e : -1;
          }
          insertAt(t, e, n) {
            null == n
              ? ((this.text = this.text.slice(0, t) + e + this.text.slice(t)),
                (this.domNode.data = this.text))
              : super.insertAt(t, e, n);
          }
          length() {
            return this.text.length;
          }
          optimize(e) {
            (super.optimize(e),
              (this.text = this.statics.value(this.domNode)),
              0 === this.text.length
                ? this.remove()
                : this.next instanceof t &&
                  this.next.prev === this &&
                  (this.insertAt(this.length(), this.next.value()),
                  this.next.remove()));
          }
          position(t, e = !1) {
            return [this.domNode, t];
          }
          split(t, e = !1) {
            if (!e) {
              if (0 === t) return this;
              if (t === this.length()) return this.next;
            }
            const n = this.scroll.create(this.domNode.splitText(t));
            return (
              this.parent.insertBefore(n, this.next || void 0),
              (this.text = this.statics.value(this.domNode)),
              n
            );
          }
          update(t, e) {
            t.some(
              (t) => "characterData" === t.type && t.target === this.domNode,
            ) && (this.text = this.statics.value(this.domNode));
          }
          value() {
            return this.text;
          }
        };
      ((R.blotName = "text"), (R.scope = i.INLINE_BLOT));
      const q = R;
      var D = n(1565),
        L = n.n(D),
        B = (n(85), n(470), n(180), n(115), n(618), n(1605));
      var I = function (t, e) {
          for (
            var n = -1, r = null == t ? 0 : t.length;
            ++n < r && !1 !== e(t[n], n, t);

          );
          return t;
        },
        M = n(1647),
        F = n(1578),
        U = n(1604),
        z = Object(U.a)(Object.keys, Object);
      var H = function (t, e) {
          return t && Object(F.a)(e, z(e), t);
        },
        V = n(1590);
      var W = function (t, e) {
          return t && Object(F.a)(e, Object(V.a)(e), t);
        },
        K = n(1645),
        $ = n(1644);
      var Z = function () {
        return [];
      };
      var G = function (t, e) {
        return Object(F.a)(t, Z(t), e);
      };
      var Y = function () {
        return [];
      };
      var X = function (t, e) {
          return Object(F.a)(t, Y(t), e);
        },
        Q = n(1625);
      var J = function (t) {
          var e = [];
          if (null != t) for (var n in Object(t)) e.push(n);
          return e;
        },
        tt = n(1623),
        et = Object.prototype.hasOwnProperty;
      var nt = function (t) {
        var e = t.length,
          n = new t.constructor(e);
        return (
          e &&
            "string" == typeof t[0] &&
            et.call(t, "index") &&
            ((n.index = t.index), (n.input = t.input)),
          n
        );
      };
      var rt = function (t) {
          return t;
        },
        ot = n(1657),
        it = n(1587),
        at = n(1603);
      var ut = function () {
          return !1;
        },
        lt = n(1580);
      var st = function () {
          return !1;
        },
        ct = {};
      ((ct["[object Arguments]"] =
        ct["[object Array]"] =
        ct["[object ArrayBuffer]"] =
        ct["[object DataView]"] =
        ct["[object Boolean]"] =
        ct["[object Date]"] =
        ct["[object Float32Array]"] =
        ct["[object Float64Array]"] =
        ct["[object Int8Array]"] =
        ct["[object Int16Array]"] =
        ct["[object Int32Array]"] =
        ct["[object Map]"] =
        ct["[object Number]"] =
        ct["[object Object]"] =
        ct["[object RegExp]"] =
        ct["[object Set]"] =
        ct["[object String]"] =
        ct["[object Symbol]"] =
        ct["[object Uint8Array]"] =
        ct["[object Uint8ClampedArray]"] =
        ct["[object Uint16Array]"] =
        ct["[object Uint32Array]"] =
          !0),
        (ct["[object Error]"] =
          ct["[object Function]"] =
          ct["[object WeakMap]"] =
            !1));
      var ft = function t(e, n, r, o, i, a) {
        var u,
          l = 1 & n,
          s = 2 & n,
          c = 4 & n;
        if ((r && (u = i ? r(e, o, i, a) : r(e)), void 0 !== u)) return u;
        if (!Object(lt.a)(e)) return e;
        var f = Object(it.a)(e);
        if (f) {
          if (((u = nt(e)), !l)) return Object($.a)(e, u);
        } else {
          var h = Object(tt.a)(e),
            p = "[object Function]" == h || "[object GeneratorFunction]" == h;
          if (Object(at.a)(e)) return Object(K.a)(e, l);
          if (
            "[object Object]" == h ||
            "[object Arguments]" == h ||
            (p && !i)
          ) {
            if (((u = s || p ? {} : Object(ot.a)(e)), !l))
              return s ? X(e, W(u, e)) : G(e, H(u, e));
          } else {
            if (!ct[h]) return i ? e : {};
            u = rt(e, h, l);
          }
        }
        a || (a = new B.a());
        var d = a.get(e);
        if (d) return d;
        (a.set(e, u),
          st(e)
            ? e.forEach(function (o) {
                u.add(t(o, n, r, o, e, a));
              })
            : ut(e) &&
              e.forEach(function (o, i) {
                u.set(i, t(o, n, r, i, e, a));
              }));
        var y = c ? (s ? J : Q.a) : s ? V.a : z,
          b = f ? void 0 : y(e);
        return (
          I(b || e, function (o, i) {
            (b && (o = e[(i = o)]), Object(M.a)(u, i, t(o, n, r, i, e, a)));
          }),
          u
        );
      };
      var ht = function (t) {
          return ft(t, 5);
        },
        pt = n(1844);
      (n(26), n(40), n(42), n(43), n(84), n(615), n(467));
      function dt(t) {
        return (dt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function yt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function bt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, mt(r.key), r));
        }
      }
      function mt(t) {
        var e = (function (t, e) {
          if ("object" != dt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != dt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == dt(e) ? e : e + "";
      }
      function vt(t, e, n) {
        return (
          (e = gt(e)),
          (function (t, e) {
            if (e && ("object" == dt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], gt(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function gt(t) {
        return (gt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function wt(t, e) {
        return (wt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var Ot = (function (t) {
        function e() {
          return (yt(this, e), vt(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && wt(t, e));
          })(e, t),
          (n = e),
          (o = [{ key: "value", value: function () {} }]),
          (r = [
            {
              key: "optimize",
              value: function () {
                (this.prev || this.next) && this.remove();
              },
            },
            {
              key: "length",
              value: function () {
                return 0;
              },
            },
            {
              key: "value",
              value: function () {
                return "";
              },
            },
          ]) && bt(n.prototype, r),
          o && bt(n, o),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o;
      })(C);
      ((Ot.blotName = "break"), (Ot.tagName = "BR"));
      var Et = Ot;
      function xt(t) {
        return (xt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function At(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, kt(r.key), r));
        }
      }
      function kt(t) {
        var e = (function (t, e) {
          if ("object" != xt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != xt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == xt(e) ? e : e + "";
      }
      function jt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function St(t, e, n) {
        return (
          (e = Nt(e)),
          (function (t, e) {
            if (e && ("object" == xt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Nt(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Nt(t) {
        return (Nt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Ct(t, e) {
        return (Ct = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var Tt = (function (t) {
          function e() {
            return (jt(this, e), St(this, e, arguments));
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && Ct(t, e));
            })(e, t),
            (n = e),
            r && At(n.prototype, r),
            o && At(n, o),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, r, o;
        })(q),
        _t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };
      function Pt(t) {
        return t.replace(/[&<>"']/g, function (t) {
          return _t[t];
        });
      }
      function Rt(t) {
        return (Rt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function qt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Dt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ht(r.key), r));
        }
      }
      function Lt(t, e, n) {
        return (
          (e = Ft(e)),
          (function (t, e) {
            if (e && ("object" == Rt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Ft(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Bt(t, e, n, r) {
        var o = It(Ft(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function It() {
        return (It =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Mt(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Mt(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ft(t)); );
        return t;
      }
      function Ft(t) {
        return (Ft = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Ut(t, e) {
        return (Ut = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function zt(t, e, n) {
        return (
          (e = Ht(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Ht(t) {
        var e = (function (t, e) {
          if ("object" != Rt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Rt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Rt(e) ? e : e + "";
      }
      var Vt = (function (t) {
        function e() {
          return (qt(this, e), Lt(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ut(t, e));
          })(e, t),
          (n = e),
          (o = [
            {
              key: "compare",
              value: function (t, n) {
                var r = e.order.indexOf(t),
                  o = e.order.indexOf(n);
                return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1;
              },
            },
          ]),
          (r = [
            {
              key: "formatAt",
              value: function (t, n, r, o) {
                if (
                  e.compare(this.statics.blotName, r) < 0 &&
                  this.scroll.query(r, i.BLOT)
                ) {
                  var a = this.isolate(t, n);
                  o && a.wrap(r, o);
                } else Bt(e, "formatAt", this, 3)([t, n, r, o]);
              },
            },
            {
              key: "optimize",
              value: function (t) {
                if (
                  (Bt(e, "optimize", this, 3)([t]),
                  this.parent instanceof e &&
                    e.compare(
                      this.statics.blotName,
                      this.parent.statics.blotName,
                    ) > 0)
                ) {
                  var n = this.parent.isolate(this.offset(), this.length());
                  (this.moveChildren(n), n.wrap(this));
                }
              },
            },
          ]) && Dt(n.prototype, r),
          o && Dt(n, o),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o;
      })(A);
      (zt(Vt, "allowedChildren", [Vt, Et, C, Tt]),
        zt(Vt, "order", [
          "cursor",
          "inline",
          "link",
          "underline",
          "strike",
          "italic",
          "bold",
          "script",
          "code",
        ]));
      var Wt = Vt;
      function Kt(t) {
        return (Kt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function $t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function Zt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $t(Object(n), !0).forEach(function (e) {
                ie(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : $t(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Gt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ae(r.key), r));
        }
      }
      function Xt(t, e, n) {
        return (
          e && Yt(t.prototype, e),
          n && Yt(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Qt(t, e, n) {
        return (
          (e = ne(e)),
          (function (t, e) {
            if (e && ("object" == Kt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], ne(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Jt(t, e, n, r) {
        var o = te(ne(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function te() {
        return (te =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = ee(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function ee(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ne(t)); );
        return t;
      }
      function ne(t) {
        return (ne = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function re(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && oe(t, e));
      }
      function oe(t, e) {
        return (oe = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function ie(t, e, n) {
        return (
          (e = ae(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ae(t) {
        var e = (function (t, e) {
          if ("object" != Kt(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Kt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Kt(e) ? e : e + "";
      }
      var ue = (function (t) {
        function e() {
          var t;
          Gt(this, e);
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (ie((t = Qt(this, e, [].concat(r))), "cache", {}), t);
        }
        return (
          re(e, t),
          Xt(e, [
            {
              key: "delta",
              value: function () {
                return (
                  null == this.cache.delta && (this.cache.delta = se(this)),
                  this.cache.delta
                );
              },
            },
            {
              key: "deleteAt",
              value: function (t, n) {
                (Jt(e, "deleteAt", this, 3)([t, n]), (this.cache = {}));
              },
            },
            {
              key: "formatAt",
              value: function (t, n, r, o) {
                n <= 0 ||
                  (this.scroll.query(r, i.BLOCK)
                    ? t + n === this.length() && this.format(r, o)
                    : Jt(
                        e,
                        "formatAt",
                        this,
                        3,
                      )([t, Math.min(n, this.length() - t - 1), r, o]),
                  (this.cache = {}));
              },
            },
            {
              key: "insertAt",
              value: function (t, n, r) {
                if (null != r)
                  return (
                    Jt(e, "insertAt", this, 3)([t, n, r]),
                    void (this.cache = {})
                  );
                if (0 !== n.length) {
                  var o = n.split("\n"),
                    i = o.shift();
                  i.length > 0 &&
                    (t < this.length() - 1 || null == this.children.tail
                      ? Jt(
                          e,
                          "insertAt",
                          this,
                          3,
                        )([Math.min(t, this.length() - 1), i])
                      : this.children.tail.insertAt(
                          this.children.tail.length(),
                          i,
                        ),
                    (this.cache = {}));
                  var a = this;
                  o.reduce(function (t, e) {
                    return ((a = a.split(t, !0)).insertAt(0, e), e.length);
                  }, t + i.length);
                }
              },
            },
            {
              key: "insertBefore",
              value: function (t, n) {
                var r = this.children.head;
                (Jt(e, "insertBefore", this, 3)([t, n]),
                  r instanceof Et && r.remove(),
                  (this.cache = {}));
              },
            },
            {
              key: "length",
              value: function () {
                return (
                  null == this.cache.length &&
                    (this.cache.length = Jt(e, "length", this, 3)([]) + 1),
                  this.cache.length
                );
              },
            },
            {
              key: "moveChildren",
              value: function (t, n) {
                (Jt(e, "moveChildren", this, 3)([t, n]), (this.cache = {}));
              },
            },
            {
              key: "optimize",
              value: function (t) {
                (Jt(e, "optimize", this, 3)([t]), (this.cache = {}));
              },
            },
            {
              key: "path",
              value: function (t) {
                return Jt(e, "path", this, 3)([t, !0]);
              },
            },
            {
              key: "removeChild",
              value: function (t) {
                (Jt(e, "removeChild", this, 3)([t]), (this.cache = {}));
              },
            },
            {
              key: "split",
              value: function (t) {
                var n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if (n && (0 === t || t >= this.length() - 1)) {
                  var r = this.clone();
                  return 0 === t
                    ? (this.parent.insertBefore(r, this), this)
                    : (this.parent.insertBefore(r, this.next), r);
                }
                var o = Jt(e, "split", this, 3)([t, n]);
                return ((this.cache = {}), o);
              },
            },
          ])
        );
      })(j);
      ((ue.blotName = "block"),
        (ue.tagName = "P"),
        (ue.defaultChild = Et),
        (ue.allowedChildren = [Et, Wt, C, Tt]));
      var le = (function (t) {
        function e() {
          return (Gt(this, e), Qt(this, e, arguments));
        }
        return (
          re(e, t),
          Xt(e, [
            {
              key: "attach",
              value: function () {
                (Jt(e, "attach", this, 3)([]),
                  (this.attributes = new d(this.domNode)));
              },
            },
            {
              key: "delta",
              value: function () {
                return new L.a().insert(
                  this.value(),
                  Zt(Zt({}, this.formats()), this.attributes.values()),
                );
              },
            },
            {
              key: "format",
              value: function (t, e) {
                var n = this.scroll.query(t, i.BLOCK_ATTRIBUTE);
                null != n && this.attributes.attribute(n, e);
              },
            },
            {
              key: "formatAt",
              value: function (t, e, n, r) {
                this.format(n, r);
              },
            },
            {
              key: "insertAt",
              value: function (t, n, r) {
                var o = this;
                if (null == r) {
                  var i = n.split("\n"),
                    a = i.pop(),
                    u = i.map(function (t) {
                      var e = o.scroll.create(ue.blotName);
                      return (e.insertAt(0, t), e);
                    }),
                    l = this.split(t);
                  (u.forEach(function (t) {
                    o.parent.insertBefore(t, l);
                  }),
                    a &&
                      this.parent.insertBefore(
                        this.scroll.create("text", a),
                        l,
                      ));
                } else Jt(e, "insertAt", this, 3)([t, n, r]);
              },
            },
          ])
        );
      })(C);
      function se(t) {
        var e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return t
          .descendants(v)
          .reduce(function (t, n) {
            return 0 === n.length() ? t : t.insert(n.value(), ce(n, {}, e));
          }, new L.a())
          .insert("\n", ce(t));
      }
      function ce(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return null == t
          ? e
          : ("formats" in t &&
              "function" == typeof t.formats &&
              ((e = Zt(Zt({}, e), t.formats())), n && delete e["code-token"]),
            null == t.parent ||
            "scroll" === t.parent.statics.blotName ||
            t.parent.statics.scope !== t.statics.scope
              ? e
              : ce(t.parent, e, n));
      }
      le.scope = i.BLOCK_BLOT;
      n(99);
      function fe(t) {
        return (fe =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function he(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, we(r.key), r));
        }
      }
      function pe(t, e, n) {
        return (
          (e = me(e)),
          (function (t, e) {
            if (e && ("object" == fe(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], me(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function de(t, e, n, r) {
        var o = ye(me(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function ye() {
        return (ye =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = be(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function be(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = me(t)); );
        return t;
      }
      function me(t) {
        return (me = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ve(t, e) {
        return (ve = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function ge(t, e, n) {
        return (
          (e = we(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function we(t) {
        var e = (function (t, e) {
          if ("object" != fe(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != fe(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == fe(e) ? e : e + "";
      }
      var Oe = (function (t) {
        function e(t, n, r) {
          var o;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((o = pe(this, e, [t, n])).selection = r),
            (o.textNode = document.createTextNode(e.CONTENTS)),
            o.domNode.appendChild(o.textNode),
            (o.savedLength = 0),
            o
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ve(t, e));
          })(e, t),
          (n = e),
          (o = [{ key: "value", value: function () {} }]),
          (r = [
            {
              key: "detach",
              value: function () {
                null != this.parent && this.parent.removeChild(this);
              },
            },
            {
              key: "format",
              value: function (t, n) {
                if (0 === this.savedLength) {
                  for (
                    var r = this, o = 0;
                    null != r && r.statics.scope !== i.BLOCK_BLOT;

                  )
                    ((o += r.offset(r.parent)), (r = r.parent));
                  null != r &&
                    ((this.savedLength = e.CONTENTS.length),
                    r.optimize(),
                    r.formatAt(o, e.CONTENTS.length, t, n),
                    (this.savedLength = 0));
                } else de(e, "format", this, 3)([t, n]);
              },
            },
            {
              key: "index",
              value: function (t, n) {
                return t === this.textNode
                  ? 0
                  : de(e, "index", this, 3)([t, n]);
              },
            },
            {
              key: "length",
              value: function () {
                return this.savedLength;
              },
            },
            {
              key: "position",
              value: function () {
                return [this.textNode, this.textNode.data.length];
              },
            },
            {
              key: "remove",
              value: function () {
                (de(e, "remove", this, 3)([]), (this.parent = null));
              },
            },
            {
              key: "restore",
              value: function () {
                if (this.selection.composing || null == this.parent)
                  return null;
                for (
                  var t = this.selection.getNativeRange();
                  null != this.domNode.lastChild &&
                  this.domNode.lastChild !== this.textNode;

                )
                  this.domNode.parentNode.insertBefore(
                    this.domNode.lastChild,
                    this.domNode,
                  );
                var n,
                  r = this.prev instanceof Tt ? this.prev : null,
                  o = r ? r.length() : 0,
                  i = this.next instanceof Tt ? this.next : null,
                  a = i ? i.text : "",
                  u = this.textNode,
                  l = u.data.split(e.CONTENTS).join("");
                if (((u.data = e.CONTENTS), r))
                  ((n = r),
                    (l || i) &&
                      (r.insertAt(r.length(), l + a), i && i.remove()));
                else if (i) ((n = i), i.insertAt(0, l));
                else {
                  var s = document.createTextNode(l);
                  ((n = this.scroll.create(s)),
                    this.parent.insertBefore(n, this));
                }
                if ((this.remove(), t)) {
                  var c = function (t, e) {
                      return r && t === r.domNode
                        ? e
                        : t === u
                          ? o + e - 1
                          : i && t === i.domNode
                            ? o + l.length + e
                            : null;
                    },
                    f = c(t.start.node, t.start.offset),
                    h = c(t.end.node, t.end.offset);
                  if (null !== f && null !== h)
                    return {
                      startNode: n.domNode,
                      startOffset: f,
                      endNode: n.domNode,
                      endOffset: h,
                    };
                }
                return null;
              },
            },
            {
              key: "update",
              value: function (t, e) {
                var n = this;
                if (
                  t.some(function (t) {
                    return (
                      "characterData" === t.type && t.target === n.textNode
                    );
                  })
                ) {
                  var r = this.restore();
                  r && (e.range = r);
                }
              },
            },
            {
              key: "optimize",
              value: function (t) {
                de(e, "optimize", this, 3)([t]);
                for (var n = this.parent; n; ) {
                  if ("A" === n.domNode.tagName) {
                    ((this.savedLength = e.CONTENTS.length),
                      n.isolate(this.offset(n), this.length()).unwrap(),
                      (this.savedLength = 0));
                    break;
                  }
                  n = n.parent;
                }
              },
            },
            {
              key: "value",
              value: function () {
                return "";
              },
            },
          ]) && he(n.prototype, r),
          o && he(n, o),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o;
      })(C);
      (ge(Oe, "blotName", "cursor"),
        ge(Oe, "className", "ql-cursor"),
        ge(Oe, "tagName", "span"),
        ge(Oe, "CONTENTS", "\ufeff"));
      var Ee = Oe,
        xe = (n(94), n(1678)),
        Ae = (n(1594), new WeakMap()),
        ke = ["error", "warn", "log", "info"],
        je = "warn";
      function Se(t) {
        if (je && ke.indexOf(t) <= ke.indexOf(je)) {
          for (
            var e,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          (e = console)[t].apply(e, r);
        }
      }
      function Ne(t) {
        return ke.reduce(function (e, n) {
          return ((e[n] = Se.bind(console, n, t)), e);
        }, {});
      }
      ((Ne.level = function (t) {
        je = t;
      }),
        (Se.level = Ne.level));
      var Ce = Ne;
      function Te(t) {
        return (Te =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function _e(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Me(r.key), r));
        }
      }
      function Pe(t, e, n) {
        return (
          (e = Le(e)),
          (function (t, e) {
            if (e && ("object" == Te(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Le(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Re(t, e, n, r) {
        var o = qe(Le(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function qe() {
        return (qe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = De(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function De(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Le(t)); );
        return t;
      }
      function Le(t) {
        return (Le = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Be(t, e) {
        return (Be = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Ie(t, e, n) {
        return (
          (e = Me(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Me(t) {
        var e = (function (t, e) {
          if ("object" != Te(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Te(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Te(e) ? e : e + "";
      }
      var Fe = Ce("quill:events");
      ["selectionchange", "mousedown", "mouseup", "click"].forEach(
        function (t) {
          document.addEventListener(t, function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            Array.from(document.querySelectorAll(".ql-container")).forEach(
              function (t) {
                var n,
                  r = Ae.get(t);
                r && r.emitter && (n = r.emitter).handleDOM.apply(n, e);
              },
            );
          });
        },
      );
      var Ue = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((t = Pe(this, e)).domListeners = {}),
            t.on("error", Fe.error),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Be(t, e));
          })(e, t),
          (n = e),
          (r = [
            {
              key: "emit",
              value: function () {
                for (
                  var t, n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return (
                  (t = Fe.log).call.apply(t, [Fe].concat(r)),
                  Re(e, "emit", this, 3)(r)
                );
              },
            },
            {
              key: "handleDOM",
              value: function (t) {
                for (
                  var e = arguments.length,
                    n = new Array(e > 1 ? e - 1 : 0),
                    r = 1;
                  r < e;
                  r++
                )
                  n[r - 1] = arguments[r];
                (this.domListeners[t.type] || []).forEach(function (e) {
                  var r = e.node,
                    o = e.handler;
                  (t.target === r || r.contains(t.target)) &&
                    o.apply(void 0, [t].concat(n));
                });
              },
            },
            {
              key: "listenDOM",
              value: function (t, e, n) {
                (this.domListeners[t] || (this.domListeners[t] = []),
                  this.domListeners[t].push({ node: e, handler: n }));
              },
            },
          ]) && _e(n.prototype, r),
          o && _e(n, o),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o;
      })(xe.EventEmitter);
      (Ie(Ue, "events", {
        EDITOR_CHANGE: "editor-change",
        SCROLL_BEFORE_UPDATE: "scroll-before-update",
        SCROLL_BLOT_MOUNT: "scroll-blot-mount",
        SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
        SCROLL_OPTIMIZE: "scroll-optimize",
        SCROLL_UPDATE: "scroll-update",
        SCROLL_EMBED_UPDATE: "scroll-embed-update",
        SELECTION_CHANGE: "selection-change",
        TEXT_CHANGE: "text-change",
        COMPOSITION_BEFORE_START: "composition-before-start",
        COMPOSITION_START: "composition-start",
        COMPOSITION_BEFORE_END: "composition-before-end",
        COMPOSITION_END: "composition-end",
      }),
        Ie(Ue, "sources", { API: "api", SILENT: "silent", USER: "user" }));
      var ze = Ue;
      function He(t) {
        return (He =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Ve(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return $e(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          Ke(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function We(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          Ke(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ke(t, e) {
        if (t) {
          if ("string" == typeof t) return $e(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? $e(t, e)
                : void 0
          );
        }
      }
      function $e(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Ze(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ye(r.key), r));
        }
      }
      function Ge(t, e, n) {
        return (
          e && Ze(t.prototype, e),
          n && Ze(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Ye(t) {
        var e = (function (t, e) {
          if ("object" != He(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != He(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == He(e) ? e : e + "";
      }
      function Xe(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var Qe = Ce("quill:selection"),
        Je = Ge(function t(e) {
          Xe(this, t);
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          ((this.index = e), (this.length = n));
        });
      function tn(t, e) {
        try {
          e.parentNode;
        } catch (t) {
          return !1;
        }
        return t.contains(e);
      }
      var en = (function () {
        return Ge(
          function t(e, n) {
            var r = this;
            (Xe(this, t),
              (this.emitter = n),
              (this.scroll = e),
              (this.composing = !1),
              (this.mouseDown = !1),
              (this.root = this.scroll.domNode),
              (this.cursor = this.scroll.create("cursor", this)),
              (this.savedRange = new Je(0, 0)),
              (this.lastRange = this.savedRange),
              (this.lastNative = null),
              this.handleComposition(),
              this.handleDragging(),
              this.emitter.listenDOM("selectionchange", document, function () {
                r.mouseDown ||
                  r.composing ||
                  setTimeout(r.update.bind(r, ze.sources.USER), 1);
              }),
              this.emitter.on(ze.events.SCROLL_BEFORE_UPDATE, function () {
                if (r.hasFocus()) {
                  var t = r.getNativeRange();
                  null != t &&
                    t.start.node !== r.cursor.textNode &&
                    r.emitter.once(ze.events.SCROLL_UPDATE, function (e, n) {
                      try {
                        r.root.contains(t.start.node) &&
                          r.root.contains(t.end.node) &&
                          r.setNativeRange(
                            t.start.node,
                            t.start.offset,
                            t.end.node,
                            t.end.offset,
                          );
                        var o = n.some(function (t) {
                          return (
                            "characterData" === t.type ||
                            "childList" === t.type ||
                            ("attributes" === t.type && t.target === r.root)
                          );
                        });
                        r.update(o ? ze.sources.SILENT : e);
                      } catch (t) {}
                    });
                }
              }),
              this.emitter.on(ze.events.SCROLL_OPTIMIZE, function (t, e) {
                if (e.range) {
                  var n = e.range,
                    o = n.startNode,
                    i = n.startOffset,
                    a = n.endNode,
                    u = n.endOffset;
                  (r.setNativeRange(o, i, a, u), r.update(ze.sources.SILENT));
                }
              }),
              this.update(ze.sources.SILENT));
          },
          [
            {
              key: "handleComposition",
              value: function () {
                var t = this;
                (this.emitter.on(
                  ze.events.COMPOSITION_BEFORE_START,
                  function () {
                    t.composing = !0;
                  },
                ),
                  this.emitter.on(ze.events.COMPOSITION_END, function () {
                    if (((t.composing = !1), t.cursor.parent)) {
                      var e = t.cursor.restore();
                      if (!e) return;
                      setTimeout(function () {
                        t.setNativeRange(
                          e.startNode,
                          e.startOffset,
                          e.endNode,
                          e.endOffset,
                        );
                      }, 1);
                    }
                  }));
              },
            },
            {
              key: "handleDragging",
              value: function () {
                var t = this;
                (this.emitter.listenDOM(
                  "mousedown",
                  document.body,
                  function () {
                    t.mouseDown = !0;
                  },
                ),
                  this.emitter.listenDOM("mouseup", document.body, function () {
                    ((t.mouseDown = !1), t.update(ze.sources.USER));
                  }));
              },
            },
            {
              key: "focus",
              value: function () {
                this.hasFocus() ||
                  (this.root.focus({ preventScroll: !0 }),
                  this.setRange(this.savedRange));
              },
            },
            {
              key: "format",
              value: function (t, e) {
                this.scroll.update();
                var n = this.getNativeRange();
                if (
                  null != n &&
                  n.native.collapsed &&
                  !this.scroll.query(t, i.BLOCK)
                ) {
                  if (n.start.node !== this.cursor.textNode) {
                    var r = this.scroll.find(n.start.node, !1);
                    if (null == r) return;
                    if (r instanceof v) {
                      var o = r.split(n.start.offset);
                      r.parent.insertBefore(this.cursor, o);
                    } else r.insertBefore(this.cursor, n.start.node);
                    this.cursor.attach();
                  }
                  (this.cursor.format(t, e),
                    this.scroll.optimize(),
                    this.setNativeRange(
                      this.cursor.textNode,
                      this.cursor.textNode.data.length,
                    ),
                    this.update());
                }
              },
            },
            {
              key: "getBounds",
              value: function (t) {
                var e,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  r = this.scroll.length();
                ((t = Math.min(t, r - 1)), (n = Math.min(t + n, r - 1) - t));
                var o = this.scroll.leaf(t),
                  i = We(o, 2),
                  a = i[0],
                  u = i[1];
                if (null == a) return null;
                if (n > 0 && u === a.length()) {
                  var l = this.scroll.leaf(t + 1),
                    s = We(l, 1),
                    c = s[0];
                  if (c) {
                    var f = this.scroll.line(t),
                      h = We(f, 1),
                      p = h[0],
                      d = this.scroll.line(t + 1),
                      y = We(d, 1),
                      b = y[0];
                    p === b && ((a = c), (u = 0));
                  }
                }
                var m = a.position(u, !0),
                  v = We(m, 2);
                ((e = v[0]), (u = v[1]));
                var g = document.createRange();
                if (n > 0) {
                  g.setStart(e, u);
                  var w = this.scroll.leaf(t + n),
                    O = We(w, 2);
                  if (((a = O[0]), (u = O[1]), null == a)) return null;
                  var E = a.position(u, !0),
                    x = We(E, 2);
                  return (
                    (e = x[0]),
                    (u = x[1]),
                    g.setEnd(e, u),
                    g.getBoundingClientRect()
                  );
                }
                var A,
                  k = "left";
                if (e instanceof Text) {
                  if (!e.data.length) return null;
                  (u < e.data.length
                    ? (g.setStart(e, u), g.setEnd(e, u + 1))
                    : (g.setStart(e, u - 1), g.setEnd(e, u), (k = "right")),
                    (A = g.getBoundingClientRect()));
                } else {
                  if (!(a.domNode instanceof Element)) return null;
                  ((A = a.domNode.getBoundingClientRect()),
                    u > 0 && (k = "right"));
                }
                return {
                  bottom: A.top + A.height,
                  height: A.height,
                  left: A[k],
                  right: A[k],
                  top: A.top,
                  width: 0,
                };
              },
            },
            {
              key: "getNativeRange",
              value: function () {
                var t = document.getSelection();
                if (null == t || t.rangeCount <= 0) return null;
                var e = t.getRangeAt(0);
                if (null == e) return null;
                var n = this.normalizeNative(e);
                return (Qe.info("getNativeRange", n), n);
              },
            },
            {
              key: "getRange",
              value: function () {
                var t = this.scroll.domNode;
                if ("isConnected" in t && !t.isConnected) return [null, null];
                var e = this.getNativeRange();
                return null == e
                  ? [null, null]
                  : [this.normalizedToRange(e), e];
              },
            },
            {
              key: "hasFocus",
              value: function () {
                return (
                  document.activeElement === this.root ||
                  (null != document.activeElement &&
                    tn(this.root, document.activeElement))
                );
              },
            },
            {
              key: "normalizedToRange",
              value: function (t) {
                var e = this,
                  n = [[t.start.node, t.start.offset]];
                t.native.collapsed || n.push([t.end.node, t.end.offset]);
                var r = n.map(function (t) {
                    var n = We(t, 2),
                      r = n[0],
                      o = n[1],
                      i = e.scroll.find(r, !0),
                      a = i.offset(e.scroll);
                    return 0 === o
                      ? a
                      : i instanceof v
                        ? a + i.index(r, o)
                        : a + i.length();
                  }),
                  o = Math.min(
                    Math.max.apply(Math, Ve(r)),
                    this.scroll.length() - 1,
                  ),
                  i = Math.min.apply(Math, [o].concat(Ve(r)));
                return new Je(i, o - i);
              },
            },
            {
              key: "normalizeNative",
              value: function (t) {
                if (
                  !tn(this.root, t.startContainer) ||
                  (!t.collapsed && !tn(this.root, t.endContainer))
                )
                  return null;
                var e = {
                  start: { node: t.startContainer, offset: t.startOffset },
                  end: { node: t.endContainer, offset: t.endOffset },
                  native: t,
                };
                return (
                  [e.start, e.end].forEach(function (t) {
                    for (
                      var e = t.node, n = t.offset;
                      !(e instanceof Text) && e.childNodes.length > 0;

                    )
                      if (e.childNodes.length > n)
                        ((e = e.childNodes[n]), (n = 0));
                      else {
                        if (e.childNodes.length !== n) break;
                        n =
                          (e = e.lastChild) instanceof Text
                            ? e.data.length
                            : e.childNodes.length > 0
                              ? e.childNodes.length
                              : e.childNodes.length + 1;
                      }
                    ((t.node = e), (t.offset = n));
                  }),
                  e
                );
              },
            },
            {
              key: "rangeToNative",
              value: function (t) {
                var e = this,
                  n = this.scroll.length(),
                  r = function (t, r) {
                    t = Math.min(n - 1, t);
                    var o = We(e.scroll.leaf(t), 2),
                      i = o[0],
                      a = o[1];
                    return i ? i.position(a, r) : [null, -1];
                  };
                return [].concat(
                  Ve(r(t.index, !1)),
                  Ve(r(t.index + t.length, !0)),
                );
              },
            },
            {
              key: "setNativeRange",
              value: function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : t,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : e,
                  o =
                    arguments.length > 4 &&
                    void 0 !== arguments[4] &&
                    arguments[4];
                if (
                  (Qe.info("setNativeRange", t, e, n, r),
                  null == t ||
                    (null != this.root.parentNode &&
                      null != t.parentNode &&
                      null != n.parentNode))
                ) {
                  var i = document.getSelection();
                  if (null != i)
                    if (null != t) {
                      this.hasFocus() || this.root.focus({ preventScroll: !0 });
                      var a = this.getNativeRange() || {},
                        u = a.native;
                      if (
                        null == u ||
                        o ||
                        t !== u.startContainer ||
                        e !== u.startOffset ||
                        n !== u.endContainer ||
                        r !== u.endOffset
                      ) {
                        (t instanceof Element &&
                          "BR" === t.tagName &&
                          ((e = Array.from(t.parentNode.childNodes).indexOf(t)),
                          (t = t.parentNode)),
                          n instanceof Element &&
                            "BR" === n.tagName &&
                            ((r = Array.from(n.parentNode.childNodes).indexOf(
                              n,
                            )),
                            (n = n.parentNode)));
                        var l = document.createRange();
                        (l.setStart(t, e),
                          l.setEnd(n, r),
                          i.removeAllRanges(),
                          i.addRange(l));
                      }
                    } else (i.removeAllRanges(), this.root.blur());
                }
              },
            },
            {
              key: "setRange",
              value: function (t) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : ze.sources.API;
                if (
                  ("string" == typeof e && ((n = e), (e = !1)),
                  Qe.info("setRange", t),
                  null != t)
                ) {
                  var r = this.rangeToNative(t);
                  this.setNativeRange.apply(this, Ve(r).concat([e]));
                } else this.setNativeRange(null);
                this.update(n);
              },
            },
            {
              key: "update",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ze.sources.USER,
                  e = this.lastRange,
                  n = this.getRange(),
                  r = We(n, 2),
                  o = r[0],
                  i = r[1];
                if (
                  ((this.lastRange = o),
                  (this.lastNative = i),
                  null != this.lastRange && (this.savedRange = this.lastRange),
                  !Object(pt.a)(e, this.lastRange))
                ) {
                  var a;
                  if (
                    !this.composing &&
                    null != i &&
                    i.native.collapsed &&
                    i.start.node !== this.cursor.textNode
                  ) {
                    var u = this.cursor.restore();
                    u &&
                      this.setNativeRange(
                        u.startNode,
                        u.startOffset,
                        u.endNode,
                        u.endOffset,
                      );
                  }
                  var l,
                    s = [
                      ze.events.SELECTION_CHANGE,
                      ht(this.lastRange),
                      ht(e),
                      t,
                    ];
                  if (
                    ((a = this.emitter).emit.apply(
                      a,
                      [ze.events.EDITOR_CHANGE].concat(s),
                    ),
                    t !== ze.sources.SILENT)
                  )
                    (l = this.emitter).emit.apply(l, s);
                }
              },
            },
          ],
        );
      })();
      function nn(t) {
        return (
          hn(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          cn(t) ||
          sn()
        );
      }
      function rn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function on(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rn(Object(n), !0).forEach(function (e) {
                an(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : rn(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function an(t, e, n) {
        return (
          (e = dn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function un(t) {
        return (un =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ln(t, e) {
        return (
          hn(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          cn(t, e) ||
          sn()
        );
      }
      function sn() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function cn(t, e) {
        if (t) {
          if ("string" == typeof t) return fn(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? fn(t, e)
                : void 0
          );
        }
      }
      function fn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function hn(t) {
        if (Array.isArray(t)) return t;
      }
      function pn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, dn(r.key), r));
        }
      }
      function dn(t) {
        var e = (function (t, e) {
          if ("object" != un(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != un(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == un(e) ? e : e + "";
      }
      var yn = /^[ -~]*$/;
      function bn(t, e, n) {
        if (0 === t.length) {
          var r = ln(gn(n.pop()), 1)[0];
          return e <= 0
            ? "</li></".concat(r, ">")
            : "</li></".concat(r, ">").concat(bn([], e - 1, n));
        }
        var o = nn(t),
          i = o[0],
          a = i.child,
          u = i.offset,
          l = i.length,
          s = i.indent,
          c = i.type,
          f = o.slice(1),
          h = ln(gn(c), 2),
          p = h[0],
          d = h[1];
        if (s > e)
          return (
            n.push(c),
            s === e + 1
              ? "<"
                  .concat(p, "><li")
                  .concat(d, ">")
                  .concat(mn(a, u, l))
                  .concat(bn(f, s, n))
              : "<".concat(p, "><li>").concat(bn(t, e + 1, n))
          );
        var y = n[n.length - 1];
        if (s === e && c === y)
          return "</li><li"
            .concat(d, ">")
            .concat(mn(a, u, l))
            .concat(bn(f, s, n));
        var b = ln(gn(n.pop()), 1)[0];
        return "</li></".concat(b, ">").concat(bn(t, e - 1, n));
      }
      function mn(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if ("html" in t && "function" == typeof t.html) return t.html(e, n);
        if (t instanceof Tt) {
          var o = Pt(t.value().slice(e, e + n));
          return o.replaceAll(" ", "&nbsp;");
        }
        if (t instanceof E) {
          if ("list-container" === t.statics.blotName) {
            var i = [];
            return (
              t.children.forEachAt(e, n, function (t, e, n) {
                var r =
                  "formats" in t && "function" == typeof t.formats
                    ? t.formats()
                    : {};
                i.push({
                  child: t,
                  offset: e,
                  length: n,
                  indent: r.indent || 0,
                  type: r.list,
                });
              }),
              bn(i, -1, [])
            );
          }
          var a = [];
          if (
            (t.children.forEachAt(e, n, function (t, e, n) {
              a.push(mn(t, e, n));
            }),
            r || "list" === t.statics.blotName)
          )
            return a.join("");
          var u = t.domNode,
            l = u.outerHTML,
            s = u.innerHTML,
            c = l.split(">".concat(s, "<")),
            f = ln(c, 2),
            h = f[0],
            p = f[1];
          return "<table" === h
            ? '<table style="border: 1px solid #000;">'
                .concat(a.join(""), "<")
                .concat(p)
            : "".concat(h, ">").concat(a.join(""), "<").concat(p);
        }
        return t.domNode instanceof Element ? t.domNode.outerHTML : "";
      }
      function vn(t, e) {
        return Object.keys(e).reduce(function (n, r) {
          if (null == t[r]) return n;
          var o = e[r];
          return (
            o === t[r]
              ? (n[r] = o)
              : Array.isArray(o)
                ? o.indexOf(t[r]) < 0
                  ? (n[r] = o.concat([t[r]]))
                  : (n[r] = o)
                : (n[r] = [o, t[r]]),
            n
          );
        }, {});
      }
      function gn(t) {
        var e = "ordered" === t ? "ol" : "ul";
        switch (t) {
          case "checked":
            return [e, ' data-list="checked"'];
          case "unchecked":
            return [e, ' data-list="unchecked"'];
          default:
            return [e, ""];
        }
      }
      function wn(t) {
        return t.reduce(function (t, e) {
          if ("string" == typeof e.insert) {
            var n = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            return t.insert(n, e.attributes);
          }
          return t.push(e);
        }, new L.a());
      }
      function On(t, e) {
        var n = t.index,
          r = t.length;
        return new Je(n + e, r);
      }
      var En = (function () {
        return (
          (t = function t(e) {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.scroll = e),
              (this.delta = this.getDelta()));
          }),
          (e = [
            {
              key: "applyDelta",
              value: function (t) {
                var e = this;
                this.scroll.update();
                var n = this.scroll.length();
                this.scroll.batchStart();
                var r,
                  a,
                  u = wn(t),
                  l = new L.a();
                return (
                  ((r = u.ops.slice()),
                  (a = []),
                  r.forEach(function (t) {
                    "string" == typeof t.insert
                      ? t.insert.split("\n").forEach(function (e, n) {
                          (n &&
                            a.push({ insert: "\n", attributes: t.attributes }),
                            e &&
                              a.push({ insert: e, attributes: t.attributes }));
                        })
                      : a.push(t);
                  }),
                  a).reduce(function (t, r) {
                    var a = D.Op.length(r),
                      u = r.attributes || {},
                      s = !1,
                      c = !1;
                    if (null != r.insert) {
                      if ((l.retain(a), "string" == typeof r.insert)) {
                        var f = r.insert;
                        ((c =
                          !f.endsWith("\n") &&
                          (n <= t || !!e.scroll.descendant(le, t)[0])),
                          e.scroll.insertAt(t, f));
                        var h = ln(e.scroll.line(t), 2),
                          p = h[0],
                          d = h[1],
                          y = Object(o.a)({}, ce(p));
                        if (p instanceof ue) {
                          var b = ln(p.descendant(v, d), 1)[0];
                          b && (y = Object(o.a)(y, ce(b)));
                        }
                        u = D.AttributeMap.diff(y, u) || {};
                      } else if ("object" === un(r.insert)) {
                        var m = Object.keys(r.insert)[0];
                        if (null == m) return t;
                        var g = null != e.scroll.query(m, i.INLINE);
                        if (g)
                          (n <= t || e.scroll.descendant(le, t)[0]) && (c = !0);
                        else if (t > 0) {
                          var w = ln(e.scroll.descendant(v, t - 1), 2),
                            O = w[0],
                            E = w[1];
                          O instanceof Tt
                            ? "\n" !== O.value()[E] && (s = !0)
                            : O instanceof C &&
                              O.statics.scope === i.INLINE_BLOT &&
                              (s = !0);
                        }
                        if ((e.scroll.insertAt(t, m, r.insert[m]), g)) {
                          var x = ln(e.scroll.descendant(v, t), 1)[0];
                          if (x) {
                            var A = Object(o.a)({}, ce(x));
                            u = D.AttributeMap.diff(A, u) || {};
                          }
                        }
                      }
                      n += a;
                    } else if (
                      (l.push(r),
                      null !== r.retain && "object" === un(r.retain))
                    ) {
                      var k = Object.keys(r.retain)[0];
                      if (null == k) return t;
                      e.scroll.updateEmbedAt(t, k, r.retain[k]);
                    }
                    Object.keys(u).forEach(function (n) {
                      e.scroll.formatAt(t, a, n, u[n]);
                    });
                    var j = s ? 1 : 0,
                      S = c ? 1 : 0;
                    return (
                      (n += j + S),
                      l.retain(j),
                      l.delete(S),
                      t + a + j + S
                    );
                  }, 0),
                  l.reduce(function (t, n) {
                    return "number" == typeof n.delete
                      ? (e.scroll.deleteAt(t, n.delete), t)
                      : t + D.Op.length(n);
                  }, 0),
                  this.scroll.batchEnd(),
                  this.scroll.optimize(),
                  this.update(u)
                );
              },
            },
            {
              key: "deleteText",
              value: function (t, e) {
                return (
                  this.scroll.deleteAt(t, e),
                  this.update(new L.a().retain(t).delete(e))
                );
              },
            },
            {
              key: "formatLine",
              value: function (t, e) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                (this.scroll.update(),
                  Object.keys(r).forEach(function (o) {
                    n.scroll.lines(t, Math.max(e, 1)).forEach(function (t) {
                      t.format(o, r[o]);
                    });
                  }),
                  this.scroll.optimize());
                var o = new L.a().retain(t).retain(e, ht(r));
                return this.update(o);
              },
            },
            {
              key: "formatText",
              value: function (t, e) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                Object.keys(r).forEach(function (o) {
                  n.scroll.formatAt(t, e, o, r[o]);
                });
                var o = new L.a().retain(t).retain(e, ht(r));
                return this.update(o);
              },
            },
            {
              key: "getContents",
              value: function (t, e) {
                return this.delta.slice(t, t + e);
              },
            },
            {
              key: "getDelta",
              value: function () {
                return this.scroll.lines().reduce(function (t, e) {
                  return t.concat(e.delta());
                }, new L.a());
              },
            },
            {
              key: "getFormat",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  n = [],
                  r = [];
                0 === e
                  ? this.scroll.path(t).forEach(function (t) {
                      var e = ln(t, 1)[0];
                      e instanceof ue ? n.push(e) : e instanceof v && r.push(e);
                    })
                  : ((n = this.scroll.lines(t, e)),
                    (r = this.scroll.descendants(v, t, e)));
                var o = [n, r].map(function (t) {
                    var e = t.shift();
                    if (null == e) return {};
                    for (var n = ce(e); Object.keys(n).length > 0; ) {
                      var r = t.shift();
                      if (null == r) return n;
                      n = vn(ce(r), n);
                    }
                    return n;
                  }),
                  i = ln(o, 2),
                  a = i[0],
                  u = i[1];
                return on(on({}, a), u);
              },
            },
            {
              key: "getHTML",
              value: function (t, e) {
                var n = ln(this.scroll.line(t), 2),
                  r = n[0],
                  o = n[1];
                if (r) {
                  var i = r.length();
                  return r.length() >= o + e && (0 !== o || e !== i)
                    ? mn(r, o, e, !0)
                    : mn(this.scroll, t, e, !0);
                }
                return "";
              },
            },
            {
              key: "getText",
              value: function (t, e) {
                return this.getContents(t, e)
                  .filter(function (t) {
                    return "string" == typeof t.insert;
                  })
                  .map(function (t) {
                    return t.insert;
                  })
                  .join("");
              },
            },
            {
              key: "insertContents",
              value: function (t, e) {
                var n = wn(e),
                  r = new L.a().retain(t).concat(n);
                return (this.scroll.insertContents(t, n), this.update(r));
              },
            },
            {
              key: "insertEmbed",
              value: function (t, e, n) {
                return (
                  this.scroll.insertAt(t, e, n),
                  this.update(new L.a().retain(t).insert(an({}, e, n)))
                );
              },
            },
            {
              key: "insertText",
              value: function (t, e) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return (
                  (e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n")),
                  this.scroll.insertAt(t, e),
                  Object.keys(r).forEach(function (o) {
                    n.scroll.formatAt(t, e.length, o, r[o]);
                  }),
                  this.update(new L.a().retain(t).insert(e, ht(r)))
                );
              },
            },
            {
              key: "isBlank",
              value: function () {
                if (0 === this.scroll.children.length) return !0;
                if (this.scroll.children.length > 1) return !1;
                var t = this.scroll.children.head;
                if ((null == t ? void 0 : t.statics.blotName) !== ue.blotName)
                  return !1;
                var e = t;
                return (
                  !(e.children.length > 1) && e.children.head instanceof Et
                );
              },
            },
            {
              key: "removeFormat",
              value: function (t, e) {
                var n = this.getText(t, e),
                  r = ln(this.scroll.line(t + e), 2),
                  o = r[0],
                  i = r[1],
                  a = 0,
                  u = new L.a();
                null != o &&
                  ((a = o.length() - i),
                  (u = o
                    .delta()
                    .slice(i, i + a - 1)
                    .insert("\n")));
                var l = this.getContents(t, e + a).diff(
                    new L.a().insert(n).concat(u),
                  ),
                  s = new L.a().retain(t).concat(l);
                return this.applyDelta(s);
              },
            },
            {
              key: "update",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : void 0,
                  r = this.delta;
                if (
                  1 === e.length &&
                  "characterData" === e[0].type &&
                  e[0].target.data.match(yn) &&
                  this.scroll.find(e[0].target)
                ) {
                  var o = this.scroll.find(e[0].target),
                    i = ce(o),
                    a = o.offset(this.scroll),
                    u = e[0].oldValue.replace(Ee.CONTENTS, ""),
                    l = new L.a().insert(u),
                    s = new L.a().insert(o.value()),
                    c = n && {
                      oldRange: On(n.oldRange, -a),
                      newRange: On(n.newRange, -a),
                    },
                    f = new L.a().retain(a).concat(l.diff(s, c));
                  ((t = f.reduce(function (t, e) {
                    return e.insert ? t.insert(e.insert, i) : t.push(e);
                  }, new L.a())),
                    (this.delta = r.compose(t)));
                } else
                  ((this.delta = this.getDelta()),
                    (t && Object(pt.a)(r.compose(t), this.delta)) ||
                      (t = r.diff(this.delta, n)));
                return t;
              },
            },
          ]) && pn(t.prototype, e),
          n && pn(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n;
      })();
      function xn(t) {
        return (xn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function An(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Sn(r.key), r));
        }
      }
      function kn(t, e, n) {
        return (
          e && An(t.prototype, e),
          n && An(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function jn(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Sn(t) {
        var e = (function (t, e) {
          if ("object" != xn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != xn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == xn(e) ? e : e + "";
      }
      var Nn,
        Cn,
        Tn,
        _n = kn(function t(e) {
          jn(this, t);
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          ((this.quill = e), (this.options = n));
        });
      ((Nn = _n),
        (Tn = {}),
        (Cn = Sn((Cn = "DEFAULTS"))) in Nn
          ? Object.defineProperty(Nn, Cn, {
              value: Tn,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (Nn[Cn] = Tn));
      var Pn = _n;
      n(1681);
      function Rn(t) {
        return (Rn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function qn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Dn(r.key), r));
        }
      }
      function Dn(t) {
        var e = (function (t, e) {
          if ("object" != Rn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Rn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Rn(e) ? e : e + "";
      }
      function Ln(t, e, n) {
        return (
          (e = Mn(e)),
          (function (t, e) {
            if (e && ("object" == Rn(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Mn(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Bn() {
        return (Bn =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = In(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function In(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Mn(t)); );
        return t;
      }
      function Mn(t) {
        return (Mn = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Fn(t, e) {
        return (Fn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var Un = (function (t) {
        function e(t, n) {
          var r;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((r = Ln(this, e, [t, n])).contentNode =
              document.createElement("span")),
            r.contentNode.setAttribute("contenteditable", "false"),
            Array.from(r.domNode.childNodes).forEach(function (t) {
              r.contentNode.appendChild(t);
            }),
            (r.leftGuard = document.createTextNode("\ufeff")),
            (r.rightGuard = document.createTextNode("\ufeff")),
            r.domNode.appendChild(r.leftGuard),
            r.domNode.appendChild(r.contentNode),
            r.domNode.appendChild(r.rightGuard),
            r
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Fn(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && qn(t.prototype, e),
              n && qn(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "index",
              value: function (t, n) {
                return t === this.leftGuard
                  ? 0
                  : t === this.rightGuard
                    ? 1
                    : (function (t, e, n, r) {
                        var o = Bn(Mn(1 & r ? t.prototype : t), e, n);
                        return 2 & r && "function" == typeof o
                          ? function (t) {
                              return o.apply(n, t);
                            }
                          : o;
                      })(
                        e,
                        "index",
                        this,
                        3,
                      )([t, n]);
              },
            },
            {
              key: "restore",
              value: function (t) {
                var e,
                  n = null,
                  r = t.data.split("\ufeff").join("");
                if (t === this.leftGuard)
                  if (this.prev instanceof Tt) {
                    var o = this.prev.length();
                    (this.prev.insertAt(o, r),
                      (n = {
                        startNode: this.prev.domNode,
                        startOffset: o + r.length,
                      }));
                  } else
                    ((e = document.createTextNode(r)),
                      this.parent.insertBefore(this.scroll.create(e), this),
                      (n = { startNode: e, startOffset: r.length }));
                else
                  t === this.rightGuard &&
                    (this.next instanceof Tt
                      ? (this.next.insertAt(0, r),
                        (n = {
                          startNode: this.next.domNode,
                          startOffset: r.length,
                        }))
                      : ((e = document.createTextNode(r)),
                        this.parent.insertBefore(
                          this.scroll.create(e),
                          this.next,
                        ),
                        (n = { startNode: e, startOffset: r.length })));
                return ((t.data = "\ufeff"), n);
              },
            },
            {
              key: "update",
              value: function (t, e) {
                var n = this;
                t.forEach(function (t) {
                  if (
                    "characterData" === t.type &&
                    (t.target === n.leftGuard || t.target === n.rightGuard)
                  ) {
                    var r = n.restore(t.target);
                    r && (e.range = r);
                  }
                });
              },
            },
          ])
        );
      })(C);
      function zn(t) {
        return (zn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Hn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Vn(r.key), r));
        }
      }
      function Vn(t) {
        var e = (function (t, e) {
          if ("object" != zn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != zn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == zn(e) ? e : e + "";
      }
      var Wn,
        Kn = (function () {
          return (function (t, e, n) {
            return (
              e && Hn(t.prototype, e),
              n && Hn(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(
            function t(e, n) {
              (!(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (function (t, e, n) {
                  (e = Vn(e)) in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
                })(this, "isComposing", !1),
                (this.scroll = e),
                (this.emitter = n),
                this.setupListeners());
            },
            [
              {
                key: "setupListeners",
                value: function () {
                  var t = this;
                  (this.scroll.domNode.addEventListener(
                    "compositionstart",
                    function (e) {
                      t.isComposing || t.handleCompositionStart(e);
                    },
                  ),
                    this.scroll.domNode.addEventListener(
                      "compositionend",
                      function (e) {
                        t.isComposing &&
                          queueMicrotask(function () {
                            t.handleCompositionEnd(e);
                          });
                      },
                    ));
                },
              },
              {
                key: "handleCompositionStart",
                value: function (t) {
                  var e =
                    t.target instanceof Node
                      ? this.scroll.find(t.target, !0)
                      : null;
                  !e ||
                    e instanceof Un ||
                    (this.emitter.emit(ze.events.COMPOSITION_BEFORE_START, t),
                    this.scroll.batchStart(),
                    this.emitter.emit(ze.events.COMPOSITION_START, t),
                    (this.isComposing = !0));
                },
              },
              {
                key: "handleCompositionEnd",
                value: function (t) {
                  (this.emitter.emit(ze.events.COMPOSITION_BEFORE_END, t),
                    this.scroll.batchEnd(),
                    this.emitter.emit(ze.events.COMPOSITION_END, t),
                    (this.isComposing = !1));
                },
              },
            ],
          );
        })();
      function $n(t) {
        return ($n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Zn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Yn(r.key), r));
        }
      }
      function Gn(t, e, n) {
        return (
          (e = Yn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Yn(t) {
        var e = (function (t, e) {
          if ("object" != $n(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != $n(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == $n(e) ? e : e + "";
      }
      var Xn = (function () {
        return (function (t, e, n) {
          return (
            e && Zn(t.prototype, e),
            n && Zn(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(
          function t(e, n) {
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Gn(this, "modules", {}),
              (this.quill = e),
              (this.options = n));
          },
          [
            {
              key: "init",
              value: function () {
                var t = this;
                Object.keys(this.options.modules).forEach(function (e) {
                  null == t.modules[e] && t.addModule(e);
                });
              },
            },
            {
              key: "addModule",
              value: function (t) {
                var e = this.quill.constructor.import("modules/".concat(t));
                return (
                  (this.modules[t] = new e(
                    this.quill,
                    this.options.modules[t] || {},
                  )),
                  this.modules[t]
                );
              },
            },
          ],
        );
      })();
      ((Wn = Xn),
        Gn(Xn, "DEFAULTS", { modules: {} }),
        Gn(Xn, "themes", { default: Wn }));
      var Qn = Xn,
        Jn =
          (n(1608),
          n(111),
          function (t) {
            var e = t.getBoundingClientRect(),
              n =
                ("offsetWidth" in t && Math.abs(e.width) / t.offsetWidth) || 1,
              r =
                ("offsetHeight" in t && Math.abs(e.height) / t.offsetHeight) ||
                1;
            return {
              top: e.top,
              right: e.left + t.clientWidth * n,
              bottom: e.top + t.clientHeight * r,
              left: e.left,
            };
          }),
        tr = function (t) {
          var e = parseInt(t, 10);
          return Number.isNaN(e) ? 0 : e;
        },
        er = function (t, e, n, r, o, i) {
          return t < n && e > r
            ? 0
            : t < n
              ? -(n - t + o)
              : e > r
                ? e - t > r - n
                  ? t + o - n
                  : e - r + i
                : 0;
        },
        nr = function (t, e) {
          for (var n, r = t.ownerDocument, o = e, i = t; i; ) {
            var a,
              u,
              l,
              s,
              c = i === r.body,
              f = c
                ? {
                    top: 0,
                    right:
                      null !==
                        (a =
                          null === (u = window.visualViewport) || void 0 === u
                            ? void 0
                            : u.width) && void 0 !== a
                        ? a
                        : r.documentElement.clientWidth,
                    bottom:
                      null !==
                        (l =
                          null === (s = window.visualViewport) || void 0 === s
                            ? void 0
                            : s.height) && void 0 !== l
                        ? l
                        : r.documentElement.clientHeight,
                    left: 0,
                  }
                : Jn(i),
              h = getComputedStyle(i),
              p = er(
                o.left,
                o.right,
                f.left,
                f.right,
                tr(h.scrollPaddingLeft),
                tr(h.scrollPaddingRight),
              ),
              d = er(
                o.top,
                o.bottom,
                f.top,
                f.bottom,
                tr(h.scrollPaddingTop),
                tr(h.scrollPaddingBottom),
              );
            if (p || d)
              if (c) {
                var y;
                null === (y = r.defaultView) ||
                  void 0 === y ||
                  y.scrollBy(p, d);
              } else {
                var b = i,
                  m = b.scrollLeft,
                  v = b.scrollTop;
                (d && (i.scrollTop += d), p && (i.scrollLeft += p));
                var g = i.scrollLeft - m,
                  w = i.scrollTop - v;
                o = {
                  left: o.left - g,
                  top: o.top - w,
                  right: o.right - g,
                  bottom: o.bottom - w,
                };
              }
            i =
              c || "fixed" === h.position
                ? null
                : (n = i).parentElement || n.getRootNode().host || null;
          }
        },
        rr = ["block", "break", "cursor", "inline", "scroll", "text"],
        or = function (t, e, n) {
          var r = new s();
          return (
            rr.forEach(function (t) {
              var n = e.query(t);
              n && r.register(n);
            }),
            t.forEach(function (t) {
              var o = e.query(t);
              o ||
                n.error(
                  'Cannot register "'.concat(
                    t,
                    '" specified in "formats" config. Are you sure it was registered?',
                  ),
                );
              for (var i = 0; o; ) {
                var a;
                if (
                  (r.register(o),
                  (o =
                    "blotName" in o &&
                    null !== (a = o.requiredContainer) &&
                    void 0 !== a
                      ? a
                      : null),
                  (i += 1) > 100)
                ) {
                  n.error(
                    'Cycle detected in registering blot requiredContainer: "'.concat(
                      t,
                      '"',
                    ),
                  );
                  break;
                }
              }
            }),
            r
          );
        },
        ir = ["modules"],
        ar = ["modules"];
      function ur(t) {
        return (ur =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function lr(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n = {};
            for (var r in t)
              if ({}.hasOwnProperty.call(t, r)) {
                if (-1 !== e.indexOf(r)) continue;
                n[r] = t[r];
              }
            return n;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            ((n = i[r]),
              -1 === e.indexOf(n) &&
                {}.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]));
        }
        return o;
      }
      function sr(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function cr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? sr(Object(n), !0).forEach(function (e) {
                yr(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : sr(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function fr(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return hr(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? hr(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function hr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function pr(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function dr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, br(r.key), r));
        }
      }
      function yr(t, e, n) {
        return (
          (e = br(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function br(t) {
        var e = (function (t, e) {
          if ("object" != ur(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != ur(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ur(e) ? e : e + "";
      }
      var mr = Ce("quill"),
        vr = new s();
      E.uiClass = "ql-ui";
      var gr = (function () {
        function t(e) {
          var n = this;
          pr(this, t);
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            ((this.options = xr(e, r)),
            (this.container = this.options.container),
            null != this.container)
          ) {
            this.options.debug && t.debug(this.options.debug);
            var o = this.container.innerHTML.trim();
            (this.container.classList.add("ql-container"),
              (this.container.innerHTML = ""),
              Ae.set(this.container, this),
              (this.root = this.addContainer("ql-editor")),
              this.root.classList.add("ql-blank"),
              (this.emitter = new ze()));
            var i = P.blotName,
              a = this.options.registry.query(i);
            if (!a || !("blotName" in a))
              throw new Error(
                'Cannot initialize Quill without "'.concat(i, '" blot'),
              );
            if (
              ((this.scroll = new a(this.options.registry, this.root, {
                emitter: this.emitter,
              })),
              (this.editor = new En(this.scroll)),
              (this.selection = new en(this.scroll, this.emitter)),
              (this.composition = new Kn(this.scroll, this.emitter)),
              (this.theme = new this.options.theme(this, this.options)),
              (this.keyboard = this.theme.addModule("keyboard")),
              (this.clipboard = this.theme.addModule("clipboard")),
              (this.history = this.theme.addModule("history")),
              (this.uploader = this.theme.addModule("uploader")),
              this.theme.addModule("input"),
              this.theme.addModule("uiNode"),
              this.theme.init(),
              this.emitter.on(ze.events.EDITOR_CHANGE, function (t) {
                t === ze.events.TEXT_CHANGE &&
                  n.root.classList.toggle("ql-blank", n.editor.isBlank());
              }),
              this.emitter.on(ze.events.SCROLL_UPDATE, function (t, e) {
                var r = n.selection.lastRange,
                  o = fr(n.selection.getRange(), 1)[0],
                  i = r && o ? { oldRange: r, newRange: o } : void 0;
                Ar.call(
                  n,
                  function () {
                    return n.editor.update(null, e, i);
                  },
                  t,
                );
              }),
              this.emitter.on(ze.events.SCROLL_EMBED_UPDATE, function (e, r) {
                var o = n.selection.lastRange,
                  i = fr(n.selection.getRange(), 1)[0],
                  a = o && i ? { oldRange: o, newRange: i } : void 0;
                Ar.call(
                  n,
                  function () {
                    var t = new L.a()
                      .retain(e.offset(n))
                      .retain(yr({}, e.statics.blotName, r));
                    return n.editor.update(t, [], a);
                  },
                  t.sources.USER,
                );
              }),
              o)
            ) {
              var u = this.clipboard.convert({
                html: "".concat(o, "<p><br></p>"),
                text: "\n",
              });
              this.setContents(u);
            }
            (this.history.clear(),
              this.options.placeholder &&
                this.root.setAttribute(
                  "data-placeholder",
                  this.options.placeholder,
                ),
              this.options.readOnly && this.disable(),
              (this.allowReadOnlyEdits = !1));
          } else mr.error("Invalid Quill container", e);
        }
        return (function (t, e, n) {
          return (
            e && dr(t.prototype, e),
            n && dr(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(
          t,
          [
            {
              key: "addContainer",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                if ("string" == typeof t) {
                  var n = t;
                  (t = document.createElement("div")).classList.add(n);
                }
                return (this.container.insertBefore(t, e), t);
              },
            },
            {
              key: "blur",
              value: function () {
                this.selection.setRange(null);
              },
            },
            {
              key: "deleteText",
              value: function (t, e, n) {
                var r = this,
                  o = fr(kr(t, e, n), 4);
                return (
                  (t = o[0]),
                  (e = o[1]),
                  (n = o[3]),
                  Ar.call(
                    this,
                    function () {
                      return r.editor.deleteText(t, e);
                    },
                    n,
                    t,
                    -1 * e,
                  )
                );
              },
            },
            {
              key: "disable",
              value: function () {
                this.enable(!1);
              },
            },
            {
              key: "editReadOnly",
              value: function (t) {
                this.allowReadOnlyEdits = !0;
                var e = t();
                return ((this.allowReadOnlyEdits = !1), e);
              },
            },
            {
              key: "enable",
              value: function () {
                var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                (this.scroll.enable(t),
                  this.container.classList.toggle("ql-disabled", !t));
              },
            },
            {
              key: "focus",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (this.selection.focus(),
                  t.preventScroll || this.scrollSelectionIntoView());
              },
            },
            {
              key: "format",
              value: function (t, e) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : ze.sources.API;
                return Ar.call(
                  this,
                  function () {
                    var r = n.getSelection(!0),
                      o = new L.a();
                    if (null == r) return o;
                    if (n.scroll.query(t, i.BLOCK))
                      o = n.editor.formatLine(r.index, r.length, yr({}, t, e));
                    else {
                      if (0 === r.length) return (n.selection.format(t, e), o);
                      o = n.editor.formatText(r.index, r.length, yr({}, t, e));
                    }
                    return (n.setSelection(r, ze.sources.SILENT), o);
                  },
                  r,
                );
              },
            },
            {
              key: "formatLine",
              value: function (t, e, n, r, o) {
                var i,
                  a = this,
                  u = fr(kr(t, e, n, r, o), 4);
                return (
                  (t = u[0]),
                  (e = u[1]),
                  (i = u[2]),
                  (o = u[3]),
                  Ar.call(
                    this,
                    function () {
                      return a.editor.formatLine(t, e, i);
                    },
                    o,
                    t,
                    0,
                  )
                );
              },
            },
            {
              key: "formatText",
              value: function (t, e, n, r, o) {
                var i,
                  a = this,
                  u = fr(kr(t, e, n, r, o), 4);
                return (
                  (t = u[0]),
                  (e = u[1]),
                  (i = u[2]),
                  (o = u[3]),
                  Ar.call(
                    this,
                    function () {
                      return a.editor.formatText(t, e, i);
                    },
                    o,
                    t,
                    0,
                  )
                );
              },
            },
            {
              key: "getBounds",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  n = null;
                if (
                  !(n =
                    "number" == typeof t
                      ? this.selection.getBounds(t, e)
                      : this.selection.getBounds(t.index, t.length))
                )
                  return null;
                var r = this.container.getBoundingClientRect();
                return {
                  bottom: n.bottom - r.top,
                  height: n.height,
                  left: n.left - r.left,
                  right: n.right - r.left,
                  top: n.top - r.top,
                  width: n.width,
                };
              },
            },
            {
              key: "getContents",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.getLength() - t,
                  n = kr(t, e),
                  r = fr(n, 2);
                return ((t = r[0]), (e = r[1]), this.editor.getContents(t, e));
              },
            },
            {
              key: "getFormat",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.getSelection(!0),
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                return "number" == typeof t
                  ? this.editor.getFormat(t, e)
                  : this.editor.getFormat(t.index, t.length);
              },
            },
            {
              key: "getIndex",
              value: function (t) {
                return t.offset(this.scroll);
              },
            },
            {
              key: "getLength",
              value: function () {
                return this.scroll.length();
              },
            },
            {
              key: "getLeaf",
              value: function (t) {
                return this.scroll.leaf(t);
              },
            },
            {
              key: "getLine",
              value: function (t) {
                return this.scroll.line(t);
              },
            },
            {
              key: "getLines",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Number.MAX_VALUE;
                return "number" != typeof t
                  ? this.scroll.lines(t.index, t.length)
                  : this.scroll.lines(t, e);
              },
            },
            {
              key: "getModule",
              value: function (t) {
                return this.theme.modules[t];
              },
            },
            {
              key: "getSelection",
              value: function () {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return (
                  t && this.focus(),
                  this.update(),
                  this.selection.getRange()[0]
                );
              },
            },
            {
              key: "getSemanticHTML",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e = arguments.length > 1 ? arguments[1] : void 0;
                "number" == typeof t &&
                  (e = null != e ? e : this.getLength() - t);
                var n = kr(t, e),
                  r = fr(n, 2);
                return ((t = r[0]), (e = r[1]), this.editor.getHTML(t, e));
              },
            },
            {
              key: "getText",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e = arguments.length > 1 ? arguments[1] : void 0;
                "number" == typeof t &&
                  (e = null != e ? e : this.getLength() - t);
                var n = kr(t, e),
                  r = fr(n, 2);
                return ((t = r[0]), (e = r[1]), this.editor.getText(t, e));
              },
            },
            {
              key: "hasFocus",
              value: function () {
                return this.selection.hasFocus();
              },
            },
            {
              key: "insertEmbed",
              value: function (e, n, r) {
                var o = this,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : t.sources.API;
                return Ar.call(
                  this,
                  function () {
                    return o.editor.insertEmbed(e, n, r);
                  },
                  i,
                  e,
                );
              },
            },
            {
              key: "insertText",
              value: function (t, e, n, r, o) {
                var i,
                  a = this,
                  u = fr(kr(t, 0, n, r, o), 4);
                return (
                  (t = u[0]),
                  (i = u[2]),
                  (o = u[3]),
                  Ar.call(
                    this,
                    function () {
                      return a.editor.insertText(t, e, i);
                    },
                    o,
                    t,
                    e.length,
                  )
                );
              },
            },
            {
              key: "isEnabled",
              value: function () {
                return this.scroll.isEnabled();
              },
            },
            {
              key: "off",
              value: function () {
                var t;
                return (t = this.emitter).off.apply(t, arguments);
              },
            },
            {
              key: "on",
              value: function () {
                var t;
                return (t = this.emitter).on.apply(t, arguments);
              },
            },
            {
              key: "once",
              value: function () {
                var t;
                return (t = this.emitter).once.apply(t, arguments);
              },
            },
            {
              key: "removeFormat",
              value: function (t, e, n) {
                var r = this,
                  o = fr(kr(t, e, n), 4);
                return (
                  (t = o[0]),
                  (e = o[1]),
                  (n = o[3]),
                  Ar.call(
                    this,
                    function () {
                      return r.editor.removeFormat(t, e);
                    },
                    n,
                    t,
                  )
                );
              },
            },
            {
              key: "scrollRectIntoView",
              value: function (t) {
                nr(this.root, t);
              },
            },
            {
              key: "scrollIntoView",
              value: function () {
                (console.warn(
                  "Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead.",
                ),
                  this.scrollSelectionIntoView());
              },
            },
            {
              key: "scrollSelectionIntoView",
              value: function () {
                var t = this.selection.lastRange,
                  e = t && this.selection.getBounds(t.index, t.length);
                e && this.scrollRectIntoView(e);
              },
            },
            {
              key: "setContents",
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ze.sources.API;
                return Ar.call(
                  this,
                  function () {
                    t = new L.a(t);
                    var n = e.getLength(),
                      r = e.editor.deleteText(0, n),
                      o = e.editor.insertContents(0, t),
                      i = e.editor.deleteText(e.getLength() - 1, 1);
                    return r.compose(o).compose(i);
                  },
                  n,
                );
              },
            },
            {
              key: "setSelection",
              value: function (e, n, r) {
                if (null == e)
                  this.selection.setRange(null, n || t.sources.API);
                else {
                  var o = fr(kr(e, n, r), 4);
                  ((e = o[0]),
                    (n = o[1]),
                    (r = o[3]),
                    this.selection.setRange(new Je(Math.max(0, e), n), r),
                    r !== ze.sources.SILENT && this.scrollSelectionIntoView());
                }
              },
            },
            {
              key: "setText",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ze.sources.API,
                  n = new L.a().insert(t);
                return this.setContents(n, e);
              },
            },
            {
              key: "update",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ze.sources.USER,
                  e = this.scroll.update(t);
                return (this.selection.update(t), e);
              },
            },
            {
              key: "updateContents",
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ze.sources.API;
                return Ar.call(
                  this,
                  function () {
                    return ((t = new L.a(t)), e.editor.applyDelta(t));
                  },
                  n,
                  !0,
                );
              },
            },
          ],
          [
            {
              key: "debug",
              value: function (t) {
                (!0 === t && (t = "log"), Ce.level(t));
              },
            },
            {
              key: "find",
              value: function (t) {
                var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return Ae.get(t) || vr.find(t, e);
              },
            },
            {
              key: "import",
              value: function (t) {
                return (
                  null == this.imports[t] &&
                    mr.error(
                      "Cannot import ".concat(
                        t,
                        ". Are you sure it was registered?",
                      ),
                    ),
                  this.imports[t]
                );
              },
            },
            {
              key: "register",
              value: function () {
                var t = this;
                if (
                  "string" !=
                  typeof (arguments.length <= 0 ? void 0 : arguments[0])
                ) {
                  var e = arguments.length <= 0 ? void 0 : arguments[0],
                    n = !!(arguments.length <= 1 ? void 0 : arguments[1]),
                    r = "attrName" in e ? e.attrName : e.blotName;
                  "string" == typeof r
                    ? this.register("formats/".concat(r), e, n)
                    : Object.keys(e).forEach(function (r) {
                        t.register(r, e[r], n);
                      });
                } else {
                  var o = arguments.length <= 0 ? void 0 : arguments[0],
                    i = arguments.length <= 1 ? void 0 : arguments[1],
                    a = !!(arguments.length <= 2 ? void 0 : arguments[2]);
                  (null == this.imports[o] ||
                    a ||
                    mr.warn("Overwriting ".concat(o, " with"), i),
                    (this.imports[o] = i),
                    (o.startsWith("blots/") || o.startsWith("formats/")) &&
                      i &&
                      "boolean" != typeof i &&
                      "abstract" !== i.blotName &&
                      vr.register(i),
                    "function" == typeof i.register && i.register(vr));
                }
              },
            },
          ],
        );
      })();
      function wr(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }
      function Or(t) {
        return Object.entries(null != t ? t : {}).reduce(function (t, e) {
          var n = fr(e, 2),
            r = n[0],
            o = n[1];
          return cr(cr({}, t), {}, yr({}, r, !0 === o ? {} : o));
        }, {});
      }
      function Er(t) {
        return Object.fromEntries(
          Object.entries(t).filter(function (t) {
            return void 0 !== t[1];
          }),
        );
      }
      function xr(t, e) {
        var n = wr(t);
        if (!n) throw new Error("Invalid Quill container");
        var r =
          !e.theme || e.theme === gr.DEFAULTS.theme
            ? Qn
            : gr.import("themes/".concat(e.theme));
        if (!r)
          throw new Error(
            "Invalid theme ".concat(e.theme, ". Did you register it?"),
          );
        var i = gr.DEFAULTS,
          a = i.modules,
          u = lr(i, ir),
          l = r.DEFAULTS,
          s = l.modules,
          c = lr(l, ar),
          f = Or(e.modules);
        null != f &&
          f.toolbar &&
          f.toolbar.constructor !== Object &&
          (f = cr(cr({}, f), {}, { toolbar: { container: f.toolbar } }));
        var h = Object(o.a)({}, Or(a), Or(s), f),
          p = cr(cr(cr({}, u), Er(c)), Er(e)),
          d = e.registry;
        return (
          d
            ? e.formats &&
              mr.warn(
                'Ignoring "formats" option because "registry" is specified',
              )
            : (d = e.formats ? or(e.formats, p.registry, mr) : p.registry),
          cr(
            cr({}, p),
            {},
            {
              registry: d,
              container: n,
              theme: r,
              modules: Object.entries(h).reduce(function (t, e) {
                var n = fr(e, 2),
                  r = n[0],
                  i = n[1];
                if (!i) return t;
                var a = gr.import("modules/".concat(r));
                return null == a
                  ? (mr.error(
                      "Cannot load ".concat(
                        r,
                        " module. Are you sure you registered it?",
                      ),
                    ),
                    t)
                  : cr(
                      cr({}, t),
                      {},
                      yr({}, r, Object(o.a)({}, a.DEFAULTS || {}, i)),
                    );
              }, {}),
              bounds: wr(p.bounds),
            },
          )
        );
      }
      function Ar(t, e, n, r) {
        if (
          !this.isEnabled() &&
          e === ze.sources.USER &&
          !this.allowReadOnlyEdits
        )
          return new L.a();
        var o = null == n ? null : this.getSelection(),
          i = this.editor.delta,
          a = t();
        if (
          (null != o &&
            (!0 === n && (n = o.index),
            null == r ? (o = jr(o, a, e)) : 0 !== r && (o = jr(o, n, r, e)),
            this.setSelection(o, ze.sources.SILENT)),
          a.length() > 0)
        ) {
          var u,
            l,
            s = [ze.events.TEXT_CHANGE, a, i, e];
          if (
            ((u = this.emitter).emit.apply(
              u,
              [ze.events.EDITOR_CHANGE].concat(s),
            ),
            e !== ze.sources.SILENT)
          )
            (l = this.emitter).emit.apply(l, s);
        }
        return a;
      }
      function kr(t, e, n, r, o) {
        var i = {};
        return (
          "number" == typeof t.index && "number" == typeof t.length
            ? "number" != typeof e
              ? ((o = r), (r = n), (n = e), (e = t.length), (t = t.index))
              : ((e = t.length), (t = t.index))
            : "number" != typeof e && ((o = r), (r = n), (n = e), (e = 0)),
          "object" === ur(n)
            ? ((i = n), (o = r))
            : "string" == typeof n && (null != r ? (i[n] = r) : (o = n)),
          [t, e, i, (o = o || ze.sources.API)]
        );
      }
      function jr(t, e, n, r) {
        var o,
          i,
          a = "number" == typeof n ? n : 0;
        if (null == t) return null;
        if (e && "function" == typeof e.transformPosition) {
          var u = fr(
            [t.index, t.index + t.length].map(function (t) {
              return e.transformPosition(t, r !== ze.sources.USER);
            }),
            2,
          );
          ((o = u[0]), (i = u[1]));
        } else {
          var l = fr(
            [t.index, t.index + t.length].map(function (t) {
              return t < e || (t === e && r === ze.sources.USER)
                ? t
                : a >= 0
                  ? t + a
                  : Math.max(e, t + a);
            }),
            2,
          );
          ((o = l[0]), (i = l[1]));
        }
        return new Je(o, i - o);
      }
      function Sr(t) {
        return (Sr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Nr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Cr(r.key), r));
        }
      }
      function Cr(t) {
        var e = (function (t, e) {
          if ("object" != Sr(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Sr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Sr(e) ? e : e + "";
      }
      function Tr(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function _r(t, e, n) {
        return (
          (e = Pr(e)),
          (function (t, e) {
            if (e && ("object" == Sr(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Pr(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Pr(t) {
        return (Pr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Rr(t, e) {
        return (Rr = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      (yr(gr, "DEFAULTS", {
        bounds: null,
        modules: { clipboard: !0, keyboard: !0, history: !0, uploader: !0 },
        placeholder: "",
        readOnly: !1,
        registry: vr,
        theme: "default",
      }),
        yr(gr, "events", ze.events),
        yr(gr, "sources", ze.sources),
        yr(gr, "version", "2.0.3"),
        yr(gr, "imports", {
          delta: L.a,
          parchment: r,
          "core/module": Pn,
          "core/theme": Qn,
        }));
      var qr = (function (t) {
        function e() {
          return (Tr(this, e), _r(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Rr(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Nr(t.prototype, e),
              n && Nr(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e)
        );
      })(N);
      function Dr(t) {
        return (Dr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Lr(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Br(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Br(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Br(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Ir(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Kr(r.key), r));
        }
      }
      function Mr(t, e, n) {
        return (
          (e = Hr(e)),
          (function (t, e) {
            if (e && ("object" == Dr(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Hr(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Fr(t, e, n, r) {
        var o = Ur(Hr(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Ur() {
        return (Ur =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = zr(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function zr(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Hr(t)); );
        return t;
      }
      function Hr(t) {
        return (Hr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Vr(t, e) {
        return (Vr = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Wr(t, e, n) {
        return (
          (e = Kr(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Kr(t) {
        var e = (function (t, e) {
          if ("object" != Dr(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Dr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Dr(e) ? e : e + "";
      }
      function $r(t) {
        return t instanceof ue || t instanceof le;
      }
      function Zr(t) {
        return "function" == typeof t.updateContent;
      }
      var Gr = (function (t) {
        function e(t, n, r) {
          var o;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var i = r.emitter;
          return (
            ((o = Mr(this, e, [t, n])).emitter = i),
            (o.batch = !1),
            o.optimize(),
            o.enable(),
            o.domNode.addEventListener("dragstart", function (t) {
              return o.handleDragStart(t);
            }),
            o
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Vr(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Ir(t.prototype, e),
              n && Ir(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "batchStart",
              value: function () {
                Array.isArray(this.batch) || (this.batch = []);
              },
            },
            {
              key: "batchEnd",
              value: function () {
                if (this.batch) {
                  var t = this.batch;
                  ((this.batch = !1), this.update(t));
                }
              },
            },
            {
              key: "emitMount",
              value: function (t) {
                this.emitter.emit(ze.events.SCROLL_BLOT_MOUNT, t);
              },
            },
            {
              key: "emitUnmount",
              value: function (t) {
                this.emitter.emit(ze.events.SCROLL_BLOT_UNMOUNT, t);
              },
            },
            {
              key: "emitEmbedUpdate",
              value: function (t, e) {
                this.emitter.emit(ze.events.SCROLL_EMBED_UPDATE, t, e);
              },
            },
            {
              key: "deleteAt",
              value: function (t, n) {
                var r = Lr(this.line(t), 2),
                  o = r[0],
                  i = r[1],
                  a = Lr(this.line(t + n), 1)[0];
                if (
                  (Fr(e, "deleteAt", this, 3)([t, n]),
                  null != a && o !== a && i > 0)
                ) {
                  if (o instanceof le || a instanceof le)
                    return void this.optimize();
                  var u =
                    a.children.head instanceof Et ? null : a.children.head;
                  (o.moveChildren(a, u), o.remove());
                }
                this.optimize();
              },
            },
            {
              key: "enable",
              value: function () {
                var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                this.domNode.setAttribute(
                  "contenteditable",
                  t ? "true" : "false",
                );
              },
            },
            {
              key: "formatAt",
              value: function (t, n, r, o) {
                (Fr(e, "formatAt", this, 3)([t, n, r, o]), this.optimize());
              },
            },
            {
              key: "insertAt",
              value: function (t, n, r) {
                if (t >= this.length())
                  if (null == r || null == this.scroll.query(n, i.BLOCK)) {
                    var o = this.scroll.create(
                      this.statics.defaultChild.blotName,
                    );
                    (this.appendChild(o),
                      null == r && n.endsWith("\n")
                        ? o.insertAt(0, n.slice(0, -1), r)
                        : o.insertAt(0, n, r));
                  } else {
                    var a = this.scroll.create(n, r);
                    this.appendChild(a);
                  }
                else Fr(e, "insertAt", this, 3)([t, n, r]);
                this.optimize();
              },
            },
            {
              key: "insertBefore",
              value: function (t, n) {
                if (t.statics.scope === i.INLINE_BLOT) {
                  var r = this.scroll.create(
                    this.statics.defaultChild.blotName,
                  );
                  (r.appendChild(t), Fr(e, "insertBefore", this, 3)([r, n]));
                } else Fr(e, "insertBefore", this, 3)([t, n]);
              },
            },
            {
              key: "insertContents",
              value: function (t, e) {
                var n = this,
                  r = this.deltaToRenderBlocks(
                    e.concat(new L.a().insert("\n")),
                  ),
                  o = r.pop();
                if (null != o) {
                  this.batchStart();
                  var i = r.shift();
                  if (i) {
                    var a =
                        "block" === i.type &&
                        (0 === i.delta.length() ||
                          (!this.descendant(le, t)[0] && t < this.length())),
                      u =
                        "block" === i.type
                          ? i.delta
                          : new L.a().insert(Wr({}, i.key, i.value));
                    Yr(this, t, u);
                    var l = "block" === i.type ? 1 : 0,
                      s = t + u.length() + l;
                    a && this.insertAt(s - 1, "\n");
                    var c = ce(this.line(t)[0]),
                      f = D.AttributeMap.diff(c, i.attributes) || {};
                    (Object.keys(f).forEach(function (t) {
                      n.formatAt(s - 1, 1, t, f[t]);
                    }),
                      (t = s));
                  }
                  var h = Lr(this.children.find(t), 2),
                    p = h[0],
                    d = h[1];
                  if (
                    (r.length &&
                      (p && ((p = p.split(d)), (d = 0)),
                      r.forEach(function (t) {
                        if ("block" === t.type) {
                          Yr(
                            n.createBlock(t.attributes, p || void 0),
                            0,
                            t.delta,
                          );
                        } else {
                          var e = n.create(t.key, t.value);
                          (n.insertBefore(e, p || void 0),
                            Object.keys(t.attributes).forEach(function (n) {
                              e.format(n, t.attributes[n]);
                            }));
                        }
                      })),
                    "block" === o.type && o.delta.length())
                  )
                    Yr(
                      this,
                      p ? p.offset(p.scroll) + d : this.length(),
                      o.delta,
                    );
                  (this.batchEnd(), this.optimize());
                }
              },
            },
            {
              key: "isEnabled",
              value: function () {
                return "true" === this.domNode.getAttribute("contenteditable");
              },
            },
            {
              key: "leaf",
              value: function (t) {
                var e = this.path(t).pop();
                if (!e) return [null, -1];
                var n = Lr(e, 2),
                  r = n[0],
                  o = n[1];
                return r instanceof v ? [r, o] : [null, -1];
              },
            },
            {
              key: "line",
              value: function (t) {
                return t === this.length()
                  ? this.line(t - 1)
                  : this.descendant($r, t);
              },
            },
            {
              key: "lines",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Number.MAX_VALUE,
                  n = function (t, e, r) {
                    var o = [],
                      i = r;
                    return (
                      t.children.forEachAt(e, r, function (t, e, r) {
                        ($r(t)
                          ? o.push(t)
                          : t instanceof N && (o = o.concat(n(t, e, i))),
                          (i -= r));
                      }),
                      o
                    );
                  };
                return n(this, t, e);
              },
            },
            {
              key: "optimize",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                this.batch ||
                  (Fr(e, "optimize", this, 3)([t, n]),
                  t.length > 0 &&
                    this.emitter.emit(ze.events.SCROLL_OPTIMIZE, t, n));
              },
            },
            {
              key: "path",
              value: function (t) {
                return Fr(e, "path", this, 3)([t]).slice(1);
              },
            },
            { key: "remove", value: function () {} },
            {
              key: "update",
              value: function (t) {
                var n = this;
                if (this.batch)
                  Array.isArray(t) && (this.batch = this.batch.concat(t));
                else {
                  var r = ze.sources.USER;
                  ("string" == typeof t && (r = t),
                    Array.isArray(t) || (t = this.observer.takeRecords()),
                    (t = t.filter(function (t) {
                      var e = t.target,
                        r = n.find(e, !0);
                      return r && !Zr(r);
                    })).length > 0 &&
                      this.emitter.emit(ze.events.SCROLL_BEFORE_UPDATE, r, t),
                    Fr(e, "update", this, 3)([t.concat([])]),
                    t.length > 0 &&
                      this.emitter.emit(ze.events.SCROLL_UPDATE, r, t));
                }
              },
            },
            {
              key: "updateEmbedAt",
              value: function (t, e, n) {
                var r = Lr(
                  this.descendant(function (t) {
                    return t instanceof le;
                  }, t),
                  1,
                )[0];
                r && r.statics.blotName === e && Zr(r) && r.updateContent(n);
              },
            },
            {
              key: "handleDragStart",
              value: function (t) {
                t.preventDefault();
              },
            },
            {
              key: "deltaToRenderBlocks",
              value: function (t) {
                var e = this,
                  n = [],
                  r = new L.a();
                return (
                  t.forEach(function (t) {
                    var o = null == t ? void 0 : t.insert;
                    if (o)
                      if ("string" == typeof o) {
                        var a = o.split("\n");
                        a.slice(0, -1).forEach(function (e) {
                          var o;
                          (r.insert(e, t.attributes),
                            n.push({
                              type: "block",
                              delta: r,
                              attributes:
                                null !== (o = t.attributes) && void 0 !== o
                                  ? o
                                  : {},
                            }),
                            (r = new L.a()));
                        });
                        var u = a[a.length - 1];
                        u && r.insert(u, t.attributes);
                      } else {
                        var l,
                          s = Object.keys(o)[0];
                        if (!s) return;
                        if (e.query(s, i.INLINE)) r.push(t);
                        else
                          (r.length() &&
                            n.push({ type: "block", delta: r, attributes: {} }),
                            (r = new L.a()),
                            n.push({
                              type: "blockEmbed",
                              key: s,
                              value: o[s],
                              attributes:
                                null !== (l = t.attributes) && void 0 !== l
                                  ? l
                                  : {},
                            }));
                      }
                  }),
                  r.length() &&
                    n.push({ type: "block", delta: r, attributes: {} }),
                  n
                );
              },
            },
            {
              key: "createBlock",
              value: function (t, e) {
                var n,
                  r = this,
                  o = {};
                Object.entries(t).forEach(function (t) {
                  var e = Lr(t, 2),
                    a = e[0],
                    u = e[1];
                  null != r.query(a, i.BLOCK & i.BLOT) ? (n = a) : (o[a] = u);
                });
                var a = this.create(
                  n || this.statics.defaultChild.blotName,
                  n ? t[n] : void 0,
                );
                this.insertBefore(a, e || void 0);
                var u = a.length();
                return (
                  Object.entries(o).forEach(function (t) {
                    var e = Lr(t, 2),
                      n = e[0],
                      r = e[1];
                    a.formatAt(0, u, n, r);
                  }),
                  a
                );
              },
            },
          ])
        );
      })(P);
      function Yr(t, e, n) {
        n.reduce(function (e, n) {
          var r = D.Op.length(n),
            o = n.attributes || {};
          if (null != n.insert)
            if ("string" == typeof n.insert) {
              var a = n.insert;
              t.insertAt(e, a);
              var u = ce(Lr(t.descendant(v, e), 1)[0]);
              o = D.AttributeMap.diff(u, o) || {};
            } else if ("object" === Dr(n.insert)) {
              var l = Object.keys(n.insert)[0];
              if (null == l) return e;
              if (
                (t.insertAt(e, l, n.insert[l]),
                null != t.scroll.query(l, i.INLINE))
              ) {
                var s = ce(Lr(t.descendant(v, e), 1)[0]);
                o = D.AttributeMap.diff(s, o) || {};
              }
            }
          return (
            Object.keys(o).forEach(function (n) {
              t.formatAt(e, r, n, o[n]);
            }),
            e + r
          );
        }, e);
      }
      (Wr(Gr, "blotName", "scroll"),
        Wr(Gr, "className", "ql-editor"),
        Wr(Gr, "tagName", "DIV"),
        Wr(Gr, "defaultChild", ue),
        Wr(Gr, "allowedChildren", [ue, le, qr]));
      var Xr = Gr,
        Qr =
          (n(50),
          n(133),
          n(62),
          { scope: i.BLOCK, whitelist: ["right", "center", "justify"] }),
        Jr = new a("align", "align", Qr),
        to = new f("align", "ql-align", Qr),
        eo = new p("align", "text-align", Qr);
      function no(t) {
        return (no =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ro(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function oo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, io(r.key), r));
        }
      }
      function io(t) {
        var e = (function (t, e) {
          if ("object" != no(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != no(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == no(e) ? e : e + "";
      }
      function ao(t, e, n) {
        return (
          (e = so(e)),
          (function (t, e) {
            if (e && ("object" == no(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], so(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function uo() {
        return (uo =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = lo(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function lo(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = so(t)); );
        return t;
      }
      function so(t) {
        return (so = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function co(t, e) {
        return (co = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var fo = (function (t) {
          function e() {
            return (ro(this, e), ao(this, e, arguments));
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && co(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && oo(t.prototype, e),
                n && oo(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(e, [
              {
                key: "value",
                value: function (t) {
                  var n = (function (t, e, n, r) {
                    var o = uo(so(1 & r ? t.prototype : t), e, n);
                    return 2 & r && "function" == typeof o
                      ? function (t) {
                          return o.apply(n, t);
                        }
                      : o;
                  })(
                    e,
                    "value",
                    this,
                    3,
                  )([t]);
                  if (!n.startsWith("rgb(")) return n;
                  n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
                  var r = n
                    .split(",")
                    .map(function (t) {
                      return "00"
                        .concat(parseInt(t, 10).toString(16))
                        .slice(-2);
                    })
                    .join("");
                  return "#".concat(r);
                },
              },
            ])
          );
        })(p),
        ho = new f("color", "ql-color", { scope: i.INLINE }),
        po = new fo("color", "color", { scope: i.INLINE }),
        yo = new f("background", "ql-bg", { scope: i.INLINE }),
        bo = new fo("background", "background-color", { scope: i.INLINE });
      function mo(t) {
        return (mo =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function vo(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function go(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Oo(r.key), r));
        }
      }
      function wo(t, e, n) {
        return (
          e && go(t.prototype, e),
          n && go(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Oo(t) {
        var e = (function (t, e) {
          if ("object" != mo(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != mo(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == mo(e) ? e : e + "";
      }
      function Eo(t, e, n) {
        return (
          (e = ko(e)),
          (function (t, e) {
            if (e && ("object" == mo(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], ko(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function xo() {
        return (xo =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Ao(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Ao(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ko(t)); );
        return t;
      }
      function ko(t) {
        return (ko = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function jo(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && So(t, e));
      }
      function So(t, e) {
        return (So = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var No = (function (t) {
          function e() {
            return (vo(this, e), Eo(this, e, arguments));
          }
          return (
            jo(e, t),
            wo(
              e,
              [
                {
                  key: "code",
                  value: function (t, e) {
                    return this.children
                      .map(function (t) {
                        return t.length() <= 1 ? "" : t.domNode.innerText;
                      })
                      .join("\n")
                      .slice(t, t + e);
                  },
                },
                {
                  key: "html",
                  value: function (t, e) {
                    return "<pre>\n".concat(Pt(this.code(t, e)), "\n</pre>");
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t) {
                    var n = (function (t, e, n, r) {
                      var o = xo(ko(1 & r ? t.prototype : t), e, n);
                      return 2 & r && "function" == typeof o
                        ? function (t) {
                            return o.apply(n, t);
                          }
                        : o;
                    })(
                      e,
                      "create",
                      this,
                      2,
                    )([t]);
                    return (n.setAttribute("spellcheck", "false"), n);
                  },
                },
              ],
            )
          );
        })(qr),
        Co = (function (t) {
          function e() {
            return (vo(this, e), Eo(this, e, arguments));
          }
          return (
            jo(e, t),
            wo(e, null, [
              {
                key: "register",
                value: function () {
                  gr.register(No);
                },
              },
            ])
          );
        })(ue);
      !(function (t, e, n) {
        (e = Oo(e)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n);
      })(Co, "TAB", "  ");
      var To = (function (t) {
        function e() {
          return (vo(this, e), Eo(this, e, arguments));
        }
        return (jo(e, t), wo(e));
      })(Wt);
      ((To.blotName = "code"),
        (To.tagName = "CODE"),
        (Co.blotName = "code-block"),
        (Co.className = "ql-code-block"),
        (Co.tagName = "DIV"),
        (No.blotName = "code-block-container"),
        (No.className = "ql-code-block-container"),
        (No.tagName = "DIV"),
        (No.allowedChildren = [Co]),
        (Co.allowedChildren = [Tt, Et, Ee]),
        (Co.requiredContainer = No));
      var _o = { scope: i.BLOCK, whitelist: ["rtl"] },
        Po = new a("direction", "dir", _o),
        Ro = new f("direction", "ql-direction", _o),
        qo = new p("direction", "direction", _o);
      function Do(t) {
        return (Do =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Lo(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Bo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Io(r.key), r));
        }
      }
      function Io(t) {
        var e = (function (t, e) {
          if ("object" != Do(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Do(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Do(e) ? e : e + "";
      }
      function Mo(t, e, n) {
        return (
          (e = zo(e)),
          (function (t, e) {
            if (e && ("object" == Do(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], zo(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Fo() {
        return (Fo =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Uo(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Uo(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = zo(t)); );
        return t;
      }
      function zo(t) {
        return (zo = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Ho(t, e) {
        return (Ho = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var Vo = { scope: i.INLINE, whitelist: ["serif", "monospace"] },
        Wo = new f("font", "ql-font", Vo),
        Ko = new ((function (t) {
          function e() {
            return (Lo(this, e), Mo(this, e, arguments));
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && Ho(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && Bo(t.prototype, e),
                n && Bo(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(e, [
              {
                key: "value",
                value: function (t) {
                  return (function (t, e, n, r) {
                    var o = Fo(zo(1 & r ? t.prototype : t), e, n);
                    return 2 & r && "function" == typeof o
                      ? function (t) {
                          return o.apply(n, t);
                        }
                      : o;
                  })(
                    e,
                    "value",
                    this,
                    3,
                  )([t]).replace(/["']/g, "");
                },
              },
            ])
          );
        })(p))("font", "font-family", Vo),
        $o = new f("size", "ql-size", {
          scope: i.INLINE,
          whitelist: ["small", "large", "huge"],
        }),
        Zo = new p("size", "font-size", {
          scope: i.INLINE,
          whitelist: ["10px", "18px", "32px"],
        });
      n(130);
      function Go(t) {
        return (Go =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Yo(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Xo(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Xo(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Xo(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Qo(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function Jo(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Qo(Object(n), !0).forEach(function (e) {
                ti(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Qo(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function ti(t, e, n) {
        return (
          (e = ni(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ei(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ni(r.key), r));
        }
      }
      function ni(t) {
        var e = (function (t, e) {
          if ("object" != Go(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Go(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Go(e) ? e : e + "";
      }
      function ri(t, e, n) {
        return (
          (e = oi(e)),
          (function (t, e) {
            if (e && ("object" == Go(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], oi(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function oi(t) {
        return (oi = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ii(t, e) {
        return (ii = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var ai = Ce("quill:keyboard"),
        ui = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
        li = (function (t) {
          function e(t, n) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((r = ri(this, e, [t, n])).bindings = {}),
              Object.keys(r.options.bindings).forEach(function (t) {
                r.options.bindings[t] && r.addBinding(r.options.bindings[t]);
              }),
              r.addBinding({ key: "Enter", shiftKey: null }, r.handleEnter),
              r.addBinding(
                { key: "Enter", metaKey: null, ctrlKey: null, altKey: null },
                function () {},
              ),
              /Firefox/i.test(navigator.userAgent)
                ? (r.addBinding(
                    { key: "Backspace" },
                    { collapsed: !0 },
                    r.handleBackspace,
                  ),
                  r.addBinding(
                    { key: "Delete" },
                    { collapsed: !0 },
                    r.handleDelete,
                  ))
                : (r.addBinding(
                    { key: "Backspace" },
                    { collapsed: !0, prefix: /^.?$/ },
                    r.handleBackspace,
                  ),
                  r.addBinding(
                    { key: "Delete" },
                    { collapsed: !0, suffix: /^.?$/ },
                    r.handleDelete,
                  )),
              r.addBinding(
                { key: "Backspace" },
                { collapsed: !1 },
                r.handleDeleteRange,
              ),
              r.addBinding(
                { key: "Delete" },
                { collapsed: !1 },
                r.handleDeleteRange,
              ),
              r.addBinding(
                {
                  key: "Backspace",
                  altKey: null,
                  ctrlKey: null,
                  metaKey: null,
                  shiftKey: null,
                },
                { collapsed: !0, offset: 0 },
                r.handleBackspace,
              ),
              r.listen(),
              r
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && ii(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && ei(t.prototype, e),
                n && ei(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(
              e,
              [
                {
                  key: "addBinding",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      o = di(t);
                    if (null != o) {
                      ("function" == typeof n && (n = { handler: n }),
                        "function" == typeof r && (r = { handler: r }));
                      var i = Array.isArray(o.key) ? o.key : [o.key];
                      i.forEach(function (t) {
                        var i = Jo(Jo(Jo({}, o), {}, { key: t }, n), r);
                        ((e.bindings[i.key] = e.bindings[i.key] || []),
                          e.bindings[i.key].push(i));
                      });
                    } else
                      ai.warn("Attempted to add invalid keyboard binding", o);
                  },
                },
                {
                  key: "listen",
                  value: function () {
                    var t = this;
                    this.quill.root.addEventListener("keydown", function (n) {
                      if (
                        !n.defaultPrevented &&
                        !n.isComposing &&
                        !(
                          229 === n.keyCode &&
                          ("Enter" === n.key || "Backspace" === n.key)
                        )
                      ) {
                        var r = (t.bindings[n.key] || [])
                          .concat(t.bindings[n.which] || [])
                          .filter(function (t) {
                            return e.match(n, t);
                          });
                        if (0 !== r.length) {
                          var o = gr.find(n.target, !0);
                          if (!o || o.scroll === t.quill.scroll) {
                            var i = t.quill.getSelection();
                            if (null != i && t.quill.hasFocus()) {
                              var a = Yo(t.quill.getLine(i.index), 2),
                                u = a[0],
                                l = a[1],
                                s = Yo(t.quill.getLeaf(i.index), 2),
                                c = s[0],
                                f = s[1],
                                h = Yo(
                                  0 === i.length
                                    ? [c, f]
                                    : t.quill.getLeaf(i.index + i.length),
                                  2,
                                ),
                                p = h[0],
                                d = h[1],
                                y = c instanceof q ? c.value().slice(0, f) : "",
                                b = p instanceof q ? p.value().slice(d) : "",
                                m = {
                                  collapsed: 0 === i.length,
                                  empty: 0 === i.length && u.length() <= 1,
                                  format: t.quill.getFormat(i),
                                  line: u,
                                  offset: l,
                                  prefix: y,
                                  suffix: b,
                                  event: n,
                                };
                              r.some(function (e) {
                                if (
                                  null != e.collapsed &&
                                  e.collapsed !== m.collapsed
                                )
                                  return !1;
                                if (null != e.empty && e.empty !== m.empty)
                                  return !1;
                                if (null != e.offset && e.offset !== m.offset)
                                  return !1;
                                if (Array.isArray(e.format)) {
                                  if (
                                    e.format.every(function (t) {
                                      return null == m.format[t];
                                    })
                                  )
                                    return !1;
                                } else if (
                                  "object" === Go(e.format) &&
                                  !Object.keys(e.format).every(function (t) {
                                    return !0 === e.format[t]
                                      ? null != m.format[t]
                                      : !1 === e.format[t]
                                        ? null == m.format[t]
                                        : Object(pt.a)(
                                            e.format[t],
                                            m.format[t],
                                          );
                                  })
                                )
                                  return !1;
                                return (
                                  !(
                                    null != e.prefix && !e.prefix.test(m.prefix)
                                  ) &&
                                  !(
                                    null != e.suffix && !e.suffix.test(m.suffix)
                                  ) &&
                                  !0 !== e.handler.call(t, i, m, e)
                                );
                              }) && n.preventDefault();
                            }
                          }
                        }
                      }
                    });
                  },
                },
                {
                  key: "handleBackspace",
                  value: function (t, e) {
                    var n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)
                      ? 2
                      : 1;
                    if (!(0 === t.index || this.quill.getLength() <= 1)) {
                      var r = {},
                        o = Yo(this.quill.getLine(t.index), 1)[0],
                        i = new L.a().retain(t.index - n).delete(n);
                      if (0 === e.offset) {
                        var a = Yo(this.quill.getLine(t.index - 1), 1)[0];
                        if (a)
                          if (
                            !("block" === a.statics.blotName && a.length() <= 1)
                          ) {
                            var u = o.formats(),
                              l = this.quill.getFormat(t.index - 1, 1);
                            if (
                              ((r = D.AttributeMap.diff(u, l) || {}),
                              Object.keys(r).length > 0)
                            ) {
                              var s = new L.a()
                                .retain(t.index + o.length() - 2)
                                .retain(1, r);
                              i = i.compose(s);
                            }
                          }
                      }
                      (this.quill.updateContents(i, gr.sources.USER),
                        this.quill.focus());
                    }
                  },
                },
                {
                  key: "handleDelete",
                  value: function (t, e) {
                    var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)
                      ? 2
                      : 1;
                    if (!(t.index >= this.quill.getLength() - n)) {
                      var r = {},
                        o = Yo(this.quill.getLine(t.index), 1)[0],
                        i = new L.a().retain(t.index).delete(n);
                      if (e.offset >= o.length() - 1) {
                        var a = Yo(this.quill.getLine(t.index + 1), 1)[0];
                        if (a) {
                          var u = o.formats(),
                            l = this.quill.getFormat(t.index, 1);
                          ((r = D.AttributeMap.diff(u, l) || {}),
                            Object.keys(r).length > 0 &&
                              (i = i.retain(a.length() - 1).retain(1, r)));
                        }
                      }
                      (this.quill.updateContents(i, gr.sources.USER),
                        this.quill.focus());
                    }
                  },
                },
                {
                  key: "handleDeleteRange",
                  value: function (t) {
                    (yi({ range: t, quill: this.quill }), this.quill.focus());
                  },
                },
                {
                  key: "handleEnter",
                  value: function (t, e) {
                    var n = this,
                      r = Object.keys(e.format).reduce(function (t, r) {
                        return (
                          n.quill.scroll.query(r, i.BLOCK) &&
                            !Array.isArray(e.format[r]) &&
                            (t[r] = e.format[r]),
                          t
                        );
                      }, {}),
                      o = new L.a()
                        .retain(t.index)
                        .delete(t.length)
                        .insert("\n", r);
                    (this.quill.updateContents(o, gr.sources.USER),
                      this.quill.setSelection(t.index + 1, gr.sources.SILENT),
                      this.quill.focus());
                  },
                },
              ],
              [
                {
                  key: "match",
                  value: function (t, e) {
                    return (
                      !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(
                        function (n) {
                          return !!e[n] !== t[n] && null !== e[n];
                        },
                      ) &&
                      (e.key === t.key || e.key === t.which)
                    );
                  },
                },
              ],
            )
          );
        })(Pn),
        si = {
          bindings: {
            bold: hi("bold"),
            italic: hi("italic"),
            underline: hi("underline"),
            indent: {
              key: "Tab",
              format: ["blockquote", "indent", "list"],
              handler: function (t, e) {
                return (
                  !(!e.collapsed || 0 === e.offset) ||
                  (this.quill.format("indent", "+1", gr.sources.USER), !1)
                );
              },
            },
            outdent: {
              key: "Tab",
              shiftKey: !0,
              format: ["blockquote", "indent", "list"],
              handler: function (t, e) {
                return (
                  !(!e.collapsed || 0 === e.offset) ||
                  (this.quill.format("indent", "-1", gr.sources.USER), !1)
                );
              },
            },
            "outdent backspace": {
              key: "Backspace",
              collapsed: !0,
              shiftKey: null,
              metaKey: null,
              ctrlKey: null,
              altKey: null,
              format: ["indent", "list"],
              offset: 0,
              handler: function (t, e) {
                null != e.format.indent
                  ? this.quill.format("indent", "-1", gr.sources.USER)
                  : null != e.format.list &&
                    this.quill.format("list", !1, gr.sources.USER);
              },
            },
            "indent code-block": ci(!0),
            "outdent code-block": ci(!1),
            "remove tab": {
              key: "Tab",
              shiftKey: !0,
              collapsed: !0,
              prefix: /\t$/,
              handler: function (t) {
                this.quill.deleteText(t.index - 1, 1, gr.sources.USER);
              },
            },
            tab: {
              key: "Tab",
              handler: function (t, e) {
                if (e.format.table) return !0;
                this.quill.history.cutoff();
                var n = new L.a().retain(t.index).delete(t.length).insert("\t");
                return (
                  this.quill.updateContents(n, gr.sources.USER),
                  this.quill.history.cutoff(),
                  this.quill.setSelection(t.index + 1, gr.sources.SILENT),
                  !1
                );
              },
            },
            "blockquote empty enter": {
              key: "Enter",
              collapsed: !0,
              format: ["blockquote"],
              empty: !0,
              handler: function () {
                this.quill.format("blockquote", !1, gr.sources.USER);
              },
            },
            "list empty enter": {
              key: "Enter",
              collapsed: !0,
              format: ["list"],
              empty: !0,
              handler: function (t, e) {
                var n = { list: !1 };
                (e.format.indent && (n.indent = !1),
                  this.quill.formatLine(t.index, t.length, n, gr.sources.USER));
              },
            },
            "checklist enter": {
              key: "Enter",
              collapsed: !0,
              format: { list: "checked" },
              handler: function (t) {
                var e = Yo(this.quill.getLine(t.index), 2),
                  n = e[0],
                  r = e[1],
                  o = Jo(Jo({}, n.formats()), {}, { list: "checked" }),
                  i = new L.a()
                    .retain(t.index)
                    .insert("\n", o)
                    .retain(n.length() - r - 1)
                    .retain(1, { list: "unchecked" });
                (this.quill.updateContents(i, gr.sources.USER),
                  this.quill.setSelection(t.index + 1, gr.sources.SILENT),
                  this.quill.scrollSelectionIntoView());
              },
            },
            "header enter": {
              key: "Enter",
              collapsed: !0,
              format: ["header"],
              suffix: /^$/,
              handler: function (t, e) {
                var n = Yo(this.quill.getLine(t.index), 2),
                  r = n[0],
                  o = n[1],
                  i = new L.a()
                    .retain(t.index)
                    .insert("\n", e.format)
                    .retain(r.length() - o - 1)
                    .retain(1, { header: null });
                (this.quill.updateContents(i, gr.sources.USER),
                  this.quill.setSelection(t.index + 1, gr.sources.SILENT),
                  this.quill.scrollSelectionIntoView());
              },
            },
            "table backspace": {
              key: "Backspace",
              format: ["table"],
              collapsed: !0,
              offset: 0,
              handler: function () {},
            },
            "table delete": {
              key: "Delete",
              format: ["table"],
              collapsed: !0,
              suffix: /^$/,
              handler: function () {},
            },
            "table enter": {
              key: "Enter",
              shiftKey: null,
              format: ["table"],
              handler: function (t) {
                var e = this.quill.getModule("table");
                if (e) {
                  var n = Yo(e.getTable(t), 4),
                    r = n[0],
                    o = (function (t, e, n, r) {
                      if (null == e.prev && null == e.next)
                        return null == n.prev && null == n.next
                          ? 0 === r
                            ? -1
                            : 1
                          : null == n.prev
                            ? -1
                            : 1;
                      if (null == e.prev) return -1;
                      if (null == e.next) return 1;
                      return null;
                    })(0, n[1], n[2], n[3]);
                  if (null == o) return;
                  var i = r.offset();
                  if (o < 0) {
                    var a = new L.a().retain(i).insert("\n");
                    (this.quill.updateContents(a, gr.sources.USER),
                      this.quill.setSelection(
                        t.index + 1,
                        t.length,
                        gr.sources.SILENT,
                      ));
                  } else if (o > 0) {
                    i += r.length();
                    var u = new L.a().retain(i).insert("\n");
                    (this.quill.updateContents(u, gr.sources.USER),
                      this.quill.setSelection(i, gr.sources.USER));
                  }
                }
              },
            },
            "table tab": {
              key: "Tab",
              shiftKey: null,
              format: ["table"],
              handler: function (t, e) {
                var n = e.event,
                  r = e.line,
                  o = r.offset(this.quill.scroll);
                n.shiftKey
                  ? this.quill.setSelection(o - 1, gr.sources.USER)
                  : this.quill.setSelection(o + r.length(), gr.sources.USER);
              },
            },
            "list autofill": {
              key: " ",
              shiftKey: null,
              collapsed: !0,
              format: { "code-block": !1, blockquote: !1, table: !1 },
              prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
              handler: function (t, e) {
                if (null == this.quill.scroll.query("list")) return !0;
                var n,
                  r = e.prefix.length,
                  o = Yo(this.quill.getLine(t.index), 2),
                  i = o[0],
                  a = o[1];
                if (a > r) return !0;
                switch (e.prefix.trim()) {
                  case "[]":
                  case "[ ]":
                    n = "unchecked";
                    break;
                  case "[x]":
                    n = "checked";
                    break;
                  case "-":
                  case "*":
                    n = "bullet";
                    break;
                  default:
                    n = "ordered";
                }
                (this.quill.insertText(t.index, " ", gr.sources.USER),
                  this.quill.history.cutoff());
                var u = new L.a()
                  .retain(t.index - a)
                  .delete(r + 1)
                  .retain(i.length() - 2 - a)
                  .retain(1, { list: n });
                return (
                  this.quill.updateContents(u, gr.sources.USER),
                  this.quill.history.cutoff(),
                  this.quill.setSelection(t.index - r, gr.sources.SILENT),
                  !1
                );
              },
            },
            "code exit": {
              key: "Enter",
              collapsed: !0,
              format: ["code-block"],
              prefix: /^$/,
              suffix: /^\s*$/,
              handler: function (t) {
                for (
                  var e = Yo(this.quill.getLine(t.index), 2),
                    n = e[0],
                    r = e[1],
                    o = 2,
                    i = n;
                  null != i && i.length() <= 1 && i.formats()["code-block"];

                )
                  if (((i = i.prev), (o -= 1) <= 0)) {
                    var a = new L.a()
                      .retain(t.index + n.length() - r - 2)
                      .retain(1, { "code-block": null })
                      .delete(1);
                    return (
                      this.quill.updateContents(a, gr.sources.USER),
                      this.quill.setSelection(t.index - 1, gr.sources.SILENT),
                      !1
                    );
                  }
                return !0;
              },
            },
            "embed left": fi("ArrowLeft", !1),
            "embed left shift": fi("ArrowLeft", !0),
            "embed right": fi("ArrowRight", !1),
            "embed right shift": fi("ArrowRight", !0),
            "table down": pi(!1),
            "table up": pi(!0),
          },
        };
      function ci(t) {
        return {
          key: "Tab",
          shiftKey: !t,
          format: { "code-block": !0 },
          handler: function (e, n) {
            var r = n.event,
              o = this.quill.scroll.query("code-block").TAB;
            if (0 === e.length && !r.shiftKey)
              return (
                this.quill.insertText(e.index, o, gr.sources.USER),
                void this.quill.setSelection(
                  e.index + o.length,
                  gr.sources.SILENT,
                )
              );
            var i =
                0 === e.length
                  ? this.quill.getLines(e.index, 1)
                  : this.quill.getLines(e),
              a = e.index,
              u = e.length;
            (i.forEach(function (e, n) {
              t
                ? (e.insertAt(0, o),
                  0 === n ? (a += o.length) : (u += o.length))
                : e.domNode.textContent.startsWith(o) &&
                  (e.deleteAt(0, o.length),
                  0 === n ? (a -= o.length) : (u -= o.length));
            }),
              this.quill.update(gr.sources.USER),
              this.quill.setSelection(a, u, gr.sources.SILENT));
          },
        };
      }
      function fi(t, e) {
        return ti(
          ti(
            { key: t, shiftKey: e, altKey: null },
            "ArrowLeft" === t ? "prefix" : "suffix",
            /^$/,
          ),
          "handler",
          function (n) {
            var r = n.index;
            return (
              "ArrowRight" === t && (r += n.length + 1),
              !(Yo(this.quill.getLeaf(r), 1)[0] instanceof C) ||
                ("ArrowLeft" === t
                  ? e
                    ? this.quill.setSelection(
                        n.index - 1,
                        n.length + 1,
                        gr.sources.USER,
                      )
                    : this.quill.setSelection(n.index - 1, gr.sources.USER)
                  : e
                    ? this.quill.setSelection(
                        n.index,
                        n.length + 1,
                        gr.sources.USER,
                      )
                    : this.quill.setSelection(
                        n.index + n.length + 1,
                        gr.sources.USER,
                      ),
                !1)
            );
          },
        );
      }
      function hi(t) {
        return {
          key: t[0],
          shortKey: !0,
          handler: function (e, n) {
            this.quill.format(t, !n.format[t], gr.sources.USER);
          },
        };
      }
      function pi(t) {
        return {
          key: t ? "ArrowUp" : "ArrowDown",
          collapsed: !0,
          format: ["table"],
          handler: function (e, n) {
            var r = t ? "prev" : "next",
              o = n.line,
              i = o.parent[r];
            if (null != i) {
              if ("table-row" === i.statics.blotName) {
                for (var a = i.children.head, u = o; null != u.prev; )
                  ((u = u.prev), (a = a.next));
                var l =
                  a.offset(this.quill.scroll) +
                  Math.min(n.offset, a.length() - 1);
                this.quill.setSelection(l, 0, gr.sources.USER);
              }
            } else {
              var s = o.table()[r];
              null != s &&
                (t
                  ? this.quill.setSelection(
                      s.offset(this.quill.scroll) + s.length() - 1,
                      0,
                      gr.sources.USER,
                    )
                  : this.quill.setSelection(
                      s.offset(this.quill.scroll),
                      0,
                      gr.sources.USER,
                    ));
            }
            return !1;
          },
        };
      }
      function di(t) {
        if ("string" == typeof t || "number" == typeof t) t = { key: t };
        else {
          if ("object" !== Go(t)) return null;
          t = ht(t);
        }
        return (t.shortKey && ((t[ui] = t.shortKey), delete t.shortKey), t);
      }
      function yi(t) {
        var e = t.quill,
          n = t.range,
          r = e.getLines(n),
          o = {};
        if (r.length > 1) {
          var i = r[0].formats(),
            a = r[r.length - 1].formats();
          o = D.AttributeMap.diff(a, i) || {};
        }
        (e.deleteText(n, gr.sources.USER),
          Object.keys(o).length > 0 &&
            e.formatLine(n.index, 1, o, gr.sources.USER),
          e.setSelection(n.index, gr.sources.SILENT));
      }
      function bi(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return mi(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return mi(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? mi(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function mi(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      li.DEFAULTS = si;
      var vi = /font-weight:\s*normal/,
        gi = ["P", "OL", "UL"],
        wi = function (t) {
          return t && gi.includes(t.tagName);
        };
      n(468);
      var Oi = /\bmso-list:[^;]*ignore/i,
        Ei = /\bmso-list:[^;]*\bl(\d+)/i,
        xi = /\bmso-list:[^;]*\blevel(\d+)/i,
        Ai = function (t) {
          var e = Array.from(t.querySelectorAll("[style*=mso-list]")),
            n = [],
            r = [];
          (e.forEach(function (t) {
            (t.getAttribute("style") || "").match(Oi) ? n.push(t) : r.push(t);
          }),
            n.forEach(function (t) {
              var e;
              return null === (e = t.parentNode) || void 0 === e
                ? void 0
                : e.removeChild(t);
            }));
          for (
            var o = t.documentElement.innerHTML,
              i = r
                .map(function (t) {
                  return (function (t, e) {
                    var n = t.getAttribute("style"),
                      r = null == n ? void 0 : n.match(Ei);
                    if (!r) return null;
                    var o = Number(r[1]),
                      i = null == n ? void 0 : n.match(xi),
                      a = i ? Number(i[1]) : 1,
                      u = new RegExp(
                        "@list l"
                          .concat(o, ":level")
                          .concat(
                            a,
                            "\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)",
                          ),
                        "i",
                      ),
                      l = e.match(u);
                    return {
                      id: o,
                      indent: a,
                      type: l && "bullet" === l[1] ? "bullet" : "ordered",
                      element: t,
                    };
                  })(t, o);
                })
                .filter(function (t) {
                  return t;
                }),
              a = function () {
                for (var t, e = [], n = i.shift(); n; ) {
                  var r;
                  (e.push(n),
                    (n =
                      i.length &&
                      (null === (r = i[0]) || void 0 === r
                        ? void 0
                        : r.element) === n.element.nextElementSibling &&
                      i[0].id === n.id
                        ? i.shift()
                        : null));
                }
                var o = document.createElement("ul");
                e.forEach(function (t) {
                  var e = document.createElement("li");
                  (e.setAttribute("data-list", t.type),
                    t.indent > 1 &&
                      e.setAttribute(
                        "class",
                        "ql-indent-".concat(t.indent - 1),
                      ),
                    (e.innerHTML = t.element.innerHTML),
                    o.appendChild(e));
                });
                var a =
                    null === (t = e[0]) || void 0 === t ? void 0 : t.element,
                  u = (null != a ? a : {}).parentNode;
                (a && (null == u || u.replaceChild(o, a)),
                  e.slice(1).forEach(function (t) {
                    var e = t.element;
                    null == u || u.removeChild(e);
                  }));
              };
            i.length;

          )
            a();
        };
      var ki = [
          function (t) {
            "urn:schemas-microsoft-com:office:word" ===
              t.documentElement.getAttribute("xmlns:w") && Ai(t);
          },
          function (t) {
            t.querySelector('[id^="docs-internal-guid-"]') &&
              ((function (t) {
                Array.from(t.querySelectorAll('b[style*="font-weight"]'))
                  .filter(function (t) {
                    var e;
                    return null === (e = t.getAttribute("style")) ||
                      void 0 === e
                      ? void 0
                      : e.match(vi);
                  })
                  .forEach(function (e) {
                    var n,
                      r = t.createDocumentFragment();
                    (r.append.apply(r, bi(e.childNodes)),
                      null === (n = e.parentNode) ||
                        void 0 === n ||
                        n.replaceChild(r, e));
                  });
              })(t),
              (function (t) {
                Array.from(t.querySelectorAll("br"))
                  .filter(function (t) {
                    return (
                      wi(t.previousElementSibling) && wi(t.nextElementSibling)
                    );
                  })
                  .forEach(function (t) {
                    var e;
                    null === (e = t.parentNode) ||
                      void 0 === e ||
                      e.removeChild(t);
                  });
              })(t));
          },
        ],
        ji = function (t) {
          t.documentElement &&
            ki.forEach(function (e) {
              e(t);
            });
        };
      function Si(t) {
        return (Si =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Ni(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function Ci(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ni(Object(n), !0).forEach(function (e) {
                Li(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ni(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Ti(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return _i(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? _i(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Pi(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Bi(r.key), r));
        }
      }
      function Ri(t, e, n) {
        return (
          (e = qi(e)),
          (function (t, e) {
            if (e && ("object" == Si(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], qi(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function qi(t) {
        return (qi = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Di(t, e) {
        return (Di = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Li(t, e, n) {
        return (
          (e = Bi(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Bi(t) {
        var e = (function (t, e) {
          if ("object" != Si(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Si(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Si(e) ? e : e + "";
      }
      var Ii = Ce("quill:clipboard"),
        Mi = [
          [
            Node.TEXT_NODE,
            function (t, e, n) {
              var r,
                o = t.data;
              if (
                "O:P" ===
                (null === (r = t.parentElement) || void 0 === r
                  ? void 0
                  : r.tagName)
              )
                return e.insert(o.trim());
              if (
                !(function t(e) {
                  if (null == e) return !1;
                  Ki.has(e) ||
                    ("PRE" === e.tagName
                      ? Ki.set(e, !0)
                      : Ki.set(e, t(e.parentNode)));
                  return Ki.get(e);
                })(t)
              ) {
                if (
                  0 === o.trim().length &&
                  o.includes("\n") &&
                  !(function (t, e) {
                    return (
                      t.previousElementSibling &&
                      t.nextElementSibling &&
                      !Wi(t.previousElementSibling, e) &&
                      !Wi(t.nextElementSibling, e)
                    );
                  })(t, n)
                )
                  return e;
                ((o = (o = o.replace(/[^\S\u00a0]/g, " ")).replace(
                  / {2,}/g,
                  " ",
                )),
                  ((null == t.previousSibling &&
                    null != t.parentElement &&
                    Wi(t.parentElement, n)) ||
                    (t.previousSibling instanceof Element &&
                      Wi(t.previousSibling, n))) &&
                    (o = o.replace(/^ /, "")),
                  ((null == t.nextSibling &&
                    null != t.parentElement &&
                    Wi(t.parentElement, n)) ||
                    (t.nextSibling instanceof Element &&
                      Wi(t.nextSibling, n))) &&
                    (o = o.replace(/ $/, "")),
                  (o = o.replaceAll(" ", " ")));
              }
              return e.insert(o);
            },
          ],
          [Node.TEXT_NODE, Gi],
          [
            "br",
            function (t, e) {
              Vi(e, "\n") || e.insert("\n");
              return e;
            },
          ],
          [Node.ELEMENT_NODE, Gi],
          [
            Node.ELEMENT_NODE,
            function (t, e, n) {
              var r = n.query(t);
              if (null == r) return e;
              if (r.prototype instanceof C) {
                var o = {},
                  i = r.value(t);
                if (null != i)
                  return (
                    (o[r.blotName] = i),
                    new L.a().insert(o, r.formats(t, n))
                  );
              } else if (
                (r.prototype instanceof j && !Vi(e, "\n") && e.insert("\n"),
                "blotName" in r &&
                  "formats" in r &&
                  "function" == typeof r.formats)
              )
                return Hi(e, r.blotName, r.formats(t, n), n);
              return e;
            },
          ],
          [
            Node.ELEMENT_NODE,
            function (t, e, n) {
              var r = a.keys(t),
                o = f.keys(t),
                u = p.keys(t),
                l = {};
              return (
                r
                  .concat(o)
                  .concat(u)
                  .forEach(function (e) {
                    var r = n.query(e, i.ATTRIBUTE);
                    (null != r &&
                      ((l[r.attrName] = r.value(t)), l[r.attrName])) ||
                      (null == (r = Fi[e]) ||
                        (r.attrName !== e && r.keyName !== e) ||
                        (l[r.attrName] = r.value(t) || void 0),
                      null == (r = Ui[e]) ||
                        (r.attrName !== e && r.keyName !== e) ||
                        ((r = Ui[e]), (l[r.attrName] = r.value(t) || void 0)));
                  }),
                Object.entries(l).reduce(function (t, e) {
                  var r = Ti(e, 2);
                  return Hi(t, r[0], r[1], n);
                }, e)
              );
            },
          ],
          [
            Node.ELEMENT_NODE,
            function (t, e, n) {
              var r,
                o = {},
                i = t.style || {};
              "italic" === i.fontStyle && (o.italic = !0);
              "underline" === i.textDecoration && (o.underline = !0);
              "line-through" === i.textDecoration && (o.strike = !0);
              ((null !== (r = i.fontWeight) &&
                void 0 !== r &&
                r.startsWith("bold")) ||
                parseInt(i.fontWeight, 10) >= 700) &&
                (o.bold = !0);
              if (
                ((e = Object.entries(o).reduce(function (t, e) {
                  var r = Ti(e, 2);
                  return Hi(t, r[0], r[1], n);
                }, e)),
                parseFloat(i.textIndent || 0) > 0)
              )
                return new L.a().insert("\t").concat(e);
              return e;
            },
          ],
          [
            "li",
            function (t, e, n) {
              var r = n.query(t);
              if (null == r || "list" !== r.blotName || !Vi(e, "\n")) return e;
              var o = -1,
                i = t.parentNode;
              for (; null != i; )
                (["OL", "UL"].includes(i.tagName) && (o += 1),
                  (i = i.parentNode));
              return o <= 0
                ? e
                : e.reduce(function (t, e) {
                    return e.insert
                      ? e.attributes && "number" == typeof e.attributes.indent
                        ? t.push(e)
                        : t.insert(
                            e.insert,
                            Ci({ indent: o }, e.attributes || {}),
                          )
                      : t;
                  }, new L.a());
            },
          ],
          [
            "ol, ul",
            function (t, e, n) {
              var r = t,
                o = "OL" === r.tagName ? "ordered" : "bullet",
                i = r.getAttribute("data-checked");
              i && (o = "true" === i ? "checked" : "unchecked");
              return Hi(e, "list", o, n);
            },
          ],
          [
            "pre",
            function (t, e, n) {
              var r = n.query("code-block"),
                o =
                  !r ||
                  !("formats" in r) ||
                  "function" != typeof r.formats ||
                  r.formats(t, n);
              return Hi(e, "code-block", o, n);
            },
          ],
          [
            "tr",
            function (t, e, n) {
              var r,
                o,
                i =
                  "TABLE" ===
                  (null === (r = t.parentElement) || void 0 === r
                    ? void 0
                    : r.tagName)
                    ? t.parentElement
                    : null === (o = t.parentElement) || void 0 === o
                      ? void 0
                      : o.parentElement;
              if (null != i) {
                var a = Array.from(i.querySelectorAll("tr")).indexOf(t) + 1;
                return Hi(e, "table", a, n);
              }
              return e;
            },
          ],
          ["b", Zi("bold")],
          ["i", Zi("italic")],
          ["strike", Zi("strike")],
          [
            "style",
            function () {
              return new L.a();
            },
          ],
        ],
        Fi = [Jr, Po].reduce(function (t, e) {
          return ((t[e.keyName] = e), t);
        }, {}),
        Ui = [eo, bo, po, qo, Ko, Zo].reduce(function (t, e) {
          return ((t[e.keyName] = e), t);
        }, {}),
        zi = (function (t) {
          function e(t, n) {
            var r, o;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (o = Ri(this, e, [t, n])).quill.root.addEventListener(
                "copy",
                function (t) {
                  return o.onCaptureCopy(t, !1);
                },
              ),
              o.quill.root.addEventListener("cut", function (t) {
                return o.onCaptureCopy(t, !0);
              }),
              o.quill.root.addEventListener("paste", o.onCapturePaste.bind(o)),
              (o.matchers = []),
              Mi.concat(
                null !== (r = o.options.matchers) && void 0 !== r ? r : [],
              ).forEach(function (t) {
                var e = Ti(t, 2),
                  n = e[0],
                  r = e[1];
                o.addMatcher(n, r);
              }),
              o
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && Di(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && Pi(t.prototype, e),
                n && Pi(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(e, [
              {
                key: "addMatcher",
                value: function (t, e) {
                  this.matchers.push([t, e]);
                },
              },
              {
                key: "convert",
                value: function (t) {
                  var e = t.html,
                    n = t.text,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  if (r[Co.blotName])
                    return new L.a().insert(
                      n || "",
                      Li({}, Co.blotName, r[Co.blotName]),
                    );
                  if (!e) return new L.a().insert(n || "", r);
                  var o = this.convertHTML(e);
                  return Vi(o, "\n") &&
                    (null == o.ops[o.ops.length - 1].attributes || r.table)
                    ? o.compose(new L.a().retain(o.length() - 1).delete(1))
                    : o;
                },
              },
              {
                key: "normalizeHTML",
                value: function (t) {
                  ji(t);
                },
              },
              {
                key: "convertHTML",
                value: function (t) {
                  var e = new DOMParser().parseFromString(t, "text/html");
                  this.normalizeHTML(e);
                  var n = e.body,
                    r = new WeakMap(),
                    o = Ti(this.prepareMatching(n, r), 2),
                    i = o[0],
                    a = o[1];
                  return $i(this.quill.scroll, n, i, a, r);
                },
              },
              {
                key: "dangerouslyPasteHTML",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : gr.sources.API;
                  if ("string" == typeof t) {
                    var r = this.convert({ html: t, text: "" });
                    (this.quill.setContents(r, e),
                      this.quill.setSelection(0, gr.sources.SILENT));
                  } else {
                    var o = this.convert({ html: e, text: "" });
                    (this.quill.updateContents(
                      new L.a().retain(t).concat(o),
                      n,
                    ),
                      this.quill.setSelection(
                        t + o.length(),
                        gr.sources.SILENT,
                      ));
                  }
                },
              },
              {
                key: "onCaptureCopy",
                value: function (t) {
                  var e,
                    n,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (!t.defaultPrevented) {
                    t.preventDefault();
                    var o = this.quill.selection.getRange(),
                      i = Ti(o, 1),
                      a = i[0];
                    if (null != a) {
                      var u = this.onCopy(a, r),
                        l = u.html,
                        s = u.text;
                      (null === (e = t.clipboardData) ||
                        void 0 === e ||
                        e.setData("text/plain", s),
                        null === (n = t.clipboardData) ||
                          void 0 === n ||
                          n.setData("text/html", l),
                        r && yi({ range: a, quill: this.quill }));
                    }
                  }
                },
              },
              {
                key: "normalizeURIList",
                value: function (t) {
                  return t
                    .split(/\r?\n/)
                    .filter(function (t) {
                      return "#" !== t[0];
                    })
                    .join("\n");
                },
              },
              {
                key: "onCapturePaste",
                value: function (t) {
                  var e, n, r;
                  if (!t.defaultPrevented && this.quill.isEnabled()) {
                    t.preventDefault();
                    var o = this.quill.getSelection(!0);
                    if (null != o) {
                      var i =
                          null === (e = t.clipboardData) || void 0 === e
                            ? void 0
                            : e.getData("text/html"),
                        a =
                          null === (n = t.clipboardData) || void 0 === n
                            ? void 0
                            : n.getData("text/plain");
                      if (!i && !a) {
                        var u,
                          l =
                            null === (u = t.clipboardData) || void 0 === u
                              ? void 0
                              : u.getData("text/uri-list");
                        l && (a = this.normalizeURIList(l));
                      }
                      var s = Array.from(
                        (null === (r = t.clipboardData) || void 0 === r
                          ? void 0
                          : r.files) || [],
                      );
                      if (!i && s.length > 0) this.quill.uploader.upload(o, s);
                      else {
                        if (i && s.length > 0) {
                          var c,
                            f = new DOMParser().parseFromString(i, "text/html");
                          if (
                            1 === f.body.childElementCount &&
                            "IMG" ===
                              (null === (c = f.body.firstElementChild) ||
                              void 0 === c
                                ? void 0
                                : c.tagName)
                          )
                            return void this.quill.uploader.upload(o, s);
                        }
                        this.onPaste(o, { html: i, text: a });
                      }
                    }
                  }
                },
              },
              {
                key: "onCopy",
                value: function (t) {
                  var e = this.quill.getText(t);
                  return { html: this.quill.getSemanticHTML(t), text: e };
                },
              },
              {
                key: "onPaste",
                value: function (t, e) {
                  var n = e.text,
                    r = e.html,
                    o = this.quill.getFormat(t.index),
                    i = this.convert({ text: n, html: r }, o);
                  Ii.log("onPaste", i, { text: n, html: r });
                  var a = new L.a().retain(t.index).delete(t.length).concat(i);
                  (this.quill.updateContents(a, gr.sources.USER),
                    this.quill.setSelection(
                      a.length() - t.length,
                      gr.sources.SILENT,
                    ),
                    this.quill.scrollSelectionIntoView());
                },
              },
              {
                key: "prepareMatching",
                value: function (t, e) {
                  var n = [],
                    r = [];
                  return (
                    this.matchers.forEach(function (o) {
                      var i = Ti(o, 2),
                        a = i[0],
                        u = i[1];
                      switch (a) {
                        case Node.TEXT_NODE:
                          r.push(u);
                          break;
                        case Node.ELEMENT_NODE:
                          n.push(u);
                          break;
                        default:
                          Array.from(t.querySelectorAll(a)).forEach(
                            function (t) {
                              if (e.has(t)) {
                                var n = e.get(t);
                                null == n || n.push(u);
                              } else e.set(t, [u]);
                            },
                          );
                      }
                    }),
                    [n, r]
                  );
                },
              },
            ])
          );
        })(Pn);
      function Hi(t, e, n, r) {
        return r.query(e)
          ? t.reduce(function (t, r) {
              if (!r.insert) return t;
              if (r.attributes && r.attributes[e]) return t.push(r);
              var o = n ? Li({}, e, n) : {};
              return t.insert(r.insert, Ci(Ci({}, o), r.attributes));
            }, new L.a())
          : t;
      }
      function Vi(t, e) {
        for (
          var n = "", r = t.ops.length - 1;
          r >= 0 && n.length < e.length;
          --r
        ) {
          var o = t.ops[r];
          if ("string" != typeof o.insert) break;
          n = o.insert + n;
        }
        return n.slice(-1 * e.length) === e;
      }
      function Wi(t, e) {
        if (!(t instanceof Element)) return !1;
        var n = e.query(t);
        return (
          !(n && n.prototype instanceof C) &&
          [
            "address",
            "article",
            "blockquote",
            "canvas",
            "dd",
            "div",
            "dl",
            "dt",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "header",
            "iframe",
            "li",
            "main",
            "nav",
            "ol",
            "output",
            "p",
            "pre",
            "section",
            "table",
            "td",
            "tr",
            "ul",
            "video",
          ].includes(t.tagName.toLowerCase())
        );
      }
      Li(zi, "DEFAULTS", { matchers: [] });
      var Ki = new WeakMap();
      function $i(t, e, n, r, o) {
        return e.nodeType === e.TEXT_NODE
          ? r.reduce(function (n, r) {
              return r(e, n, t);
            }, new L.a())
          : e.nodeType === e.ELEMENT_NODE
            ? Array.from(e.childNodes || []).reduce(function (i, a) {
                var u = $i(t, a, n, r, o);
                return (
                  a.nodeType === e.ELEMENT_NODE &&
                    ((u = n.reduce(function (e, n) {
                      return n(a, e, t);
                    }, u)),
                    (u = (o.get(a) || []).reduce(function (e, n) {
                      return n(a, e, t);
                    }, u))),
                  i.concat(u)
                );
              }, new L.a())
            : new L.a();
      }
      function Zi(t) {
        return function (e, n, r) {
          return Hi(n, t, !0, r);
        };
      }
      function Gi(t, e, n) {
        if (!Vi(e, "\n")) {
          if (
            Wi(t, n) &&
            (t.childNodes.length > 0 || t instanceof HTMLParagraphElement)
          )
            return e.insert("\n");
          if (e.length() > 0 && t.nextSibling)
            for (var r = t.nextSibling; null != r; ) {
              if (Wi(r, n)) return e.insert("\n");
              var o = n.query(r);
              if (o && o.prototype instanceof le) return e.insert("\n");
              r = r.firstChild;
            }
        }
        return e;
      }
      (n(129), n(377));
      function Yi(t) {
        return (Yi =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Xi(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, na(r.key), r));
        }
      }
      function Qi(t, e, n) {
        return (
          (e = Ji(e)),
          (function (t, e) {
            if (e && ("object" == Yi(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Ji(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Ji(t) {
        return (Ji = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ta(t, e) {
        return (ta = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function ea(t, e, n) {
        return (
          (e = na(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function na(t) {
        var e = (function (t, e) {
          if ("object" != Yi(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Yi(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Yi(e) ? e : e + "";
      }
      var ra = (function (t) {
        function e(t, n) {
          var r;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ea((r = Qi(this, e, [t, n])), "lastRecorded", 0),
            ea(r, "ignoreChange", !1),
            ea(r, "stack", { undo: [], redo: [] }),
            ea(r, "currentRange", null),
            r.quill.on(gr.events.EDITOR_CHANGE, function (t, e, n, o) {
              t === gr.events.SELECTION_CHANGE
                ? e && o !== gr.sources.SILENT && (r.currentRange = e)
                : t === gr.events.TEXT_CHANGE &&
                  (r.ignoreChange ||
                    (r.options.userOnly && o !== gr.sources.USER
                      ? r.transform(e)
                      : r.record(e, n)),
                  (r.currentRange = ia(r.currentRange, e)));
            }),
            r.quill.keyboard.addBinding(
              { key: "z", shortKey: !0 },
              r.undo.bind(r),
            ),
            r.quill.keyboard.addBinding(
              { key: ["z", "Z"], shortKey: !0, shiftKey: !0 },
              r.redo.bind(r),
            ),
            /Win/i.test(navigator.platform) &&
              r.quill.keyboard.addBinding(
                { key: "y", shortKey: !0 },
                r.redo.bind(r),
              ),
            r.quill.root.addEventListener("beforeinput", function (t) {
              "historyUndo" === t.inputType
                ? (r.undo(), t.preventDefault())
                : "historyRedo" === t.inputType &&
                  (r.redo(), t.preventDefault());
            }),
            r
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ta(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Xi(t.prototype, e),
              n && Xi(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "change",
              value: function (t, e) {
                if (0 !== this.stack[t].length) {
                  var n = this.stack[t].pop();
                  if (n) {
                    var r = this.quill.getContents(),
                      o = n.delta.invert(r);
                    (this.stack[e].push({ delta: o, range: ia(n.range, o) }),
                      (this.lastRecorded = 0),
                      (this.ignoreChange = !0),
                      this.quill.updateContents(n.delta, gr.sources.USER),
                      (this.ignoreChange = !1),
                      this.restoreSelection(n));
                  }
                }
              },
            },
            {
              key: "clear",
              value: function () {
                this.stack = { undo: [], redo: [] };
              },
            },
            {
              key: "cutoff",
              value: function () {
                this.lastRecorded = 0;
              },
            },
            {
              key: "record",
              value: function (t, e) {
                if (0 !== t.ops.length) {
                  this.stack.redo = [];
                  var n = t.invert(e),
                    r = this.currentRange,
                    o = Date.now();
                  if (
                    this.lastRecorded + this.options.delay > o &&
                    this.stack.undo.length > 0
                  ) {
                    var i = this.stack.undo.pop();
                    i && ((n = n.compose(i.delta)), (r = i.range));
                  } else this.lastRecorded = o;
                  0 !== n.length() &&
                    (this.stack.undo.push({ delta: n, range: r }),
                    this.stack.undo.length > this.options.maxStack &&
                      this.stack.undo.shift());
                }
              },
            },
            {
              key: "redo",
              value: function () {
                this.change("redo", "undo");
              },
            },
            {
              key: "transform",
              value: function (t) {
                (oa(this.stack.undo, t), oa(this.stack.redo, t));
              },
            },
            {
              key: "undo",
              value: function () {
                this.change("undo", "redo");
              },
            },
            {
              key: "restoreSelection",
              value: function (t) {
                if (t.range) this.quill.setSelection(t.range, gr.sources.USER);
                else {
                  var e = (function (t, e) {
                    var n = e.reduce(function (t, e) {
                        return t + (e.delete || 0);
                      }, 0),
                      r = e.length() - n;
                    (function (t, e) {
                      var n = e.ops[e.ops.length - 1];
                      if (null == n) return !1;
                      if (null != n.insert)
                        return (
                          "string" == typeof n.insert && n.insert.endsWith("\n")
                        );
                      if (null != n.attributes)
                        return Object.keys(n.attributes).some(function (e) {
                          return null != t.query(e, i.BLOCK);
                        });
                      return !1;
                    })(t, e) && (r -= 1);
                    return r;
                  })(this.quill.scroll, t.delta);
                  this.quill.setSelection(e, gr.sources.USER);
                }
              },
            },
          ])
        );
      })(Pn);
      function oa(t, e) {
        for (var n = e, r = t.length - 1; r >= 0; r -= 1) {
          var o = t[r];
          ((t[r] = {
            delta: n.transform(o.delta, !0),
            range: o.range && ia(o.range, n),
          }),
            (n = o.delta.transform(n)),
            0 === t[r].delta.length() && t.splice(r, 1));
        }
      }
      function ia(t, e) {
        if (!t) return t;
        var n = e.transformPosition(t.index);
        return {
          index: n,
          length: e.transformPosition(t.index + t.length) - n,
        };
      }
      ea(ra, "DEFAULTS", { delay: 1e3, maxStack: 100, userOnly: !1 });
      n(56);
      function aa(t) {
        return (aa =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ua(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, la(r.key), r));
        }
      }
      function la(t) {
        var e = (function (t, e) {
          if ("object" != aa(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != aa(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == aa(e) ? e : e + "";
      }
      function sa(t, e, n) {
        return (
          (e = ca(e)),
          (function (t, e) {
            if (e && ("object" == aa(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], ca(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function ca(t) {
        return (ca = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function fa(t, e) {
        return (fa = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var ha = (function (t) {
        function e(t, n) {
          var r;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (r = sa(this, e, [t, n])),
            t.root.addEventListener("drop", function (e) {
              e.preventDefault();
              var n = null;
              if (document.caretRangeFromPoint)
                n = document.caretRangeFromPoint(e.clientX, e.clientY);
              else if (document.caretPositionFromPoint) {
                var o = document.caretPositionFromPoint(e.clientX, e.clientY);
                ((n = document.createRange()).setStart(o.offsetNode, o.offset),
                  n.setEnd(o.offsetNode, o.offset));
              }
              var i = n && t.selection.normalizeNative(n);
              if (i) {
                var a,
                  u = t.selection.normalizedToRange(i);
                null !== (a = e.dataTransfer) &&
                  void 0 !== a &&
                  a.files &&
                  r.upload(u, e.dataTransfer.files);
              }
            }),
            r
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && fa(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && ua(t.prototype, e),
              n && ua(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "upload",
              value: function (t, e) {
                var n = this,
                  r = [];
                (Array.from(e).forEach(function (t) {
                  var e;
                  t &&
                    null !== (e = n.options.mimetypes) &&
                    void 0 !== e &&
                    e.includes(t.type) &&
                    r.push(t);
                }),
                  r.length > 0 && this.options.handler.call(this, t, r));
              },
            },
          ])
        );
      })(Pn);
      ha.DEFAULTS = {
        mimetypes: ["image/png", "image/jpeg"],
        handler: function (t, e) {
          var n = this;
          if (this.quill.scroll.query("image")) {
            var r = e.map(function (t) {
              return new Promise(function (e) {
                var n = new FileReader();
                ((n.onload = function () {
                  e(n.result);
                }),
                  n.readAsDataURL(t));
              });
            });
            Promise.all(r).then(function (e) {
              var r = e.reduce(function (t, e) {
                return t.insert({ image: e });
              }, new L.a().retain(t.index).delete(t.length));
              (n.quill.updateContents(r, ze.sources.USER),
                n.quill.setSelection(t.index + e.length, ze.sources.SILENT));
            });
          }
        },
      };
      var pa = ha;
      function da(t) {
        return (da =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ya(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ba(r.key), r));
        }
      }
      function ba(t) {
        var e = (function (t, e) {
          if ("object" != da(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != da(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == da(e) ? e : e + "";
      }
      function ma(t, e, n) {
        return (
          (e = va(e)),
          (function (t, e) {
            if (e && ("object" == da(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], va(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function va(t) {
        return (va = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ga(t, e) {
        return (ga = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var wa = ["insertText", "insertReplacementText"];
      var Oa = (function (t) {
        function e(t, n) {
          var r;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (r = ma(this, e, [t, n])),
            t.root.addEventListener("beforeinput", function (t) {
              r.handleBeforeInput(t);
            }),
            /Android/i.test(navigator.userAgent) ||
              t.on(gr.events.COMPOSITION_BEFORE_START, function () {
                r.handleCompositionStart();
              }),
            r
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ga(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && ya(t.prototype, e),
              n && ya(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "deleteRange",
              value: function (t) {
                yi({ range: t, quill: this.quill });
              },
            },
            {
              key: "replaceText",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
                if (0 === t.length) return !1;
                if (e) {
                  var n = this.quill.getFormat(t.index, 1);
                  (this.deleteRange(t),
                    this.quill.updateContents(
                      new L.a().retain(t.index).insert(e, n),
                      gr.sources.USER,
                    ));
                } else this.deleteRange(t);
                return (
                  this.quill.setSelection(
                    t.index + e.length,
                    0,
                    gr.sources.SILENT,
                  ),
                  !0
                );
              },
            },
            {
              key: "handleBeforeInput",
              value: function (t) {
                if (
                  !this.quill.composition.isComposing &&
                  !t.defaultPrevented &&
                  wa.includes(t.inputType)
                ) {
                  var e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
                  if (e && !0 !== e.collapsed) {
                    var n = (function (t) {
                      var e;
                      if ("string" == typeof t.data) return t.data;
                      if (
                        null !== (e = t.dataTransfer) &&
                        void 0 !== e &&
                        e.types.includes("text/plain")
                      )
                        return t.dataTransfer.getData("text/plain");
                      return null;
                    })(t);
                    if (null != n) {
                      var r = this.quill.selection.normalizeNative(e),
                        o = r
                          ? this.quill.selection.normalizedToRange(r)
                          : null;
                      o && this.replaceText(o, n) && t.preventDefault();
                    }
                  }
                }
              },
            },
            {
              key: "handleCompositionStart",
              value: function () {
                var t = this.quill.getSelection();
                t && this.replaceText(t);
              },
            },
          ])
        );
      })(Pn);
      function Ea(t) {
        return (Ea =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function xa(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Na(r.key), r));
        }
      }
      function Aa(t, e, n) {
        return (
          (e = ka(e)),
          (function (t, e) {
            if (e && ("object" == Ea(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], ka(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function ka(t) {
        return (ka = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ja(t, e) {
        return (ja = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Sa(t, e, n) {
        return (
          (e = Na(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Na(t) {
        var e = (function (t, e) {
          if ("object" != Ea(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Ea(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Ea(e) ? e : e + "";
      }
      var Ca = /Mac/i.test(navigator.platform),
        Ta = (function (t) {
          function e(t, n) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              Sa((r = Aa(this, e, [t, n])), "isListening", !1),
              Sa(r, "selectionChangeDeadline", 0),
              r.handleArrowKeys(),
              r.handleNavigationShortcuts(),
              r
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && ja(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && xa(t.prototype, e),
                n && xa(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(e, [
              {
                key: "handleArrowKeys",
                value: function () {
                  this.quill.keyboard.addBinding({
                    key: ["ArrowLeft", "ArrowRight"],
                    offset: 0,
                    shiftKey: null,
                    handler: function (t, e) {
                      var n = e.line,
                        r = e.event;
                      if (!(n instanceof E && n.uiNode)) return !0;
                      var o = "rtl" === getComputedStyle(n.domNode).direction;
                      return (
                        !!(
                          (o && "ArrowRight" !== r.key) ||
                          (!o && "ArrowLeft" !== r.key)
                        ) ||
                        (this.quill.setSelection(
                          t.index - 1,
                          t.length + (r.shiftKey ? 1 : 0),
                          gr.sources.USER,
                        ),
                        !1)
                      );
                    },
                  });
                },
              },
              {
                key: "handleNavigationShortcuts",
                value: function () {
                  var t = this;
                  this.quill.root.addEventListener("keydown", function (e) {
                    !e.defaultPrevented &&
                      (function (t) {
                        return (
                          "ArrowLeft" === t.key ||
                          "ArrowRight" === t.key ||
                          "ArrowUp" === t.key ||
                          "ArrowDown" === t.key ||
                          "Home" === t.key ||
                          !(!Ca || "a" !== t.key || !0 !== t.ctrlKey)
                        );
                      })(e) &&
                      t.ensureListeningToSelectionChange();
                  });
                },
              },
              {
                key: "ensureListeningToSelectionChange",
                value: function () {
                  var t = this;
                  if (
                    ((this.selectionChangeDeadline = Date.now() + 100),
                    !this.isListening)
                  ) {
                    this.isListening = !0;
                    document.addEventListener(
                      "selectionchange",
                      function () {
                        ((t.isListening = !1),
                          Date.now() <= t.selectionChangeDeadline &&
                            t.handleSelectionChange());
                      },
                      { once: !0 },
                    );
                  }
                },
              },
              {
                key: "handleSelectionChange",
                value: function () {
                  var t = document.getSelection();
                  if (t) {
                    var e = t.getRangeAt(0);
                    if (!0 === e.collapsed && 0 === e.startOffset) {
                      var n = this.quill.scroll.find(e.startContainer);
                      if (n instanceof E && n.uiNode) {
                        var r = document.createRange();
                        (r.setStartAfter(n.uiNode),
                          r.setEndAfter(n.uiNode),
                          t.removeAllRanges(),
                          t.addRange(r));
                      }
                    }
                  }
                },
              },
            ])
          );
        })(Pn);
      gr.register({
        "blots/block": ue,
        "blots/block/embed": le,
        "blots/break": Et,
        "blots/container": qr,
        "blots/cursor": Ee,
        "blots/embed": Un,
        "blots/inline": Wt,
        "blots/scroll": Xr,
        "blots/text": Tt,
        "modules/clipboard": zi,
        "modules/history": ra,
        "modules/keyboard": li,
        "modules/uploader": pa,
        "modules/input": Oa,
        "modules/uiNode": Ta,
      });
      var _a = gr;
      function Pa(t) {
        return (Pa =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Ra(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function qa(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Da(r.key), r));
        }
      }
      function Da(t) {
        var e = (function (t, e) {
          if ("object" != Pa(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Pa(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Pa(e) ? e : e + "";
      }
      function La(t, e, n) {
        return (
          (e = Fa(e)),
          (function (t, e) {
            if (e && ("object" == Pa(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Fa(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Ba(t, e, n, r) {
        var o = Ia(Fa(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Ia() {
        return (Ia =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Ma(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Ma(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Fa(t)); );
        return t;
      }
      function Fa(t) {
        return (Fa = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Ua(t, e) {
        return (Ua = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var za = new ((function (t) {
        function e() {
          return (Ra(this, e), La(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ua(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && qa(t.prototype, e),
              n && qa(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "add",
              value: function (t, n) {
                var r = 0;
                if ("+1" === n || "-1" === n) {
                  var o = this.value(t) || 0;
                  r = "+1" === n ? o + 1 : o - 1;
                } else "number" == typeof n && (r = n);
                return 0 === r
                  ? (this.remove(t), !0)
                  : Ba(e, "add", this, 3)([t, r.toString()]);
              },
            },
            {
              key: "canAdd",
              value: function (t, n) {
                return (
                  Ba(e, "canAdd", this, 3)([t, n]) ||
                  Ba(e, "canAdd", this, 3)([t, parseInt(n, 10)])
                );
              },
            },
            {
              key: "value",
              value: function (t) {
                return parseInt(Ba(e, "value", this, 3)([t]), 10) || void 0;
              },
            },
          ])
        );
      })(f))("indent", "ql-indent", {
        scope: i.BLOCK,
        whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
      });
      function Ha(t) {
        return (Ha =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Va(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ya(r.key), r));
        }
      }
      function Wa(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ka(t, e, n) {
        return (
          (e = $a(e)),
          (function (t, e) {
            if (e && ("object" == Ha(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], $a(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function $a(t) {
        return ($a = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Za(t, e) {
        return (Za = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Ga(t, e, n) {
        return (
          (e = Ya(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Ya(t) {
        var e = (function (t, e) {
          if ("object" != Ha(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Ha(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Ha(e) ? e : e + "";
      }
      var Xa = (function (t) {
        function e() {
          return (Wa(this, e), Ka(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Za(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Va(t.prototype, e),
              n && Va(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e)
        );
      })(ue);
      (Ga(Xa, "blotName", "blockquote"), Ga(Xa, "tagName", "blockquote"));
      var Qa = Xa;
      function Ja(t) {
        return (Ja =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tu(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function eu(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, au(r.key), r));
        }
      }
      function nu(t, e, n) {
        return (
          (e = ru(e)),
          (function (t, e) {
            if (e && ("object" == Ja(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], ru(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function ru(t) {
        return (ru = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ou(t, e) {
        return (ou = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function iu(t, e, n) {
        return (
          (e = au(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function au(t) {
        var e = (function (t, e) {
          if ("object" != Ja(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Ja(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Ja(e) ? e : e + "";
      }
      var uu = (function (t) {
        function e() {
          return (tu(this, e), nu(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ou(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && eu(t.prototype, e),
              n && eu(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, null, [
            {
              key: "formats",
              value: function (t) {
                return this.tagName.indexOf(t.tagName) + 1;
              },
            },
          ])
        );
      })(ue);
      (iu(uu, "blotName", "header"),
        iu(uu, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]));
      var lu = uu;
      function su(t) {
        return (su =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function cu(t, e, n, r) {
        var o = fu(vu(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function fu() {
        return (fu =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = hu(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function hu(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = vu(t)); );
        return t;
      }
      function pu(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, yu(r.key), r));
        }
      }
      function du(t, e, n) {
        return (
          e && pu(t.prototype, e),
          n && pu(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function yu(t) {
        var e = (function (t, e) {
          if ("object" != su(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != su(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == su(e) ? e : e + "";
      }
      function bu(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function mu(t, e, n) {
        return (
          (e = vu(e)),
          (function (t, e) {
            if (e && ("object" == su(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], vu(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function vu(t) {
        return (vu = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function gu(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && wu(t, e));
      }
      function wu(t, e) {
        return (wu = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var Ou = (function (t) {
        function e() {
          return (bu(this, e), mu(this, e, arguments));
        }
        return (gu(e, t), du(e));
      })(qr);
      ((Ou.blotName = "list-container"), (Ou.tagName = "OL"));
      var Eu = (function (t) {
        function e(t, n) {
          var r;
          (bu(this, e), (r = mu(this, e, [t, n])));
          var o = n.ownerDocument.createElement("span"),
            i = function (e) {
              if (t.isEnabled()) {
                var o = r.statics.formats(n, t);
                "checked" === o
                  ? (r.format("list", "unchecked"), e.preventDefault())
                  : "unchecked" === o &&
                    (r.format("list", "checked"), e.preventDefault());
              }
            };
          return (
            o.addEventListener("mousedown", i),
            o.addEventListener("touchstart", i),
            r.attachUI(o),
            r
          );
        }
        return (
          gu(e, t),
          du(
            e,
            [
              {
                key: "format",
                value: function (t, n) {
                  t === this.statics.blotName && n
                    ? this.domNode.setAttribute("data-list", n)
                    : cu(e, "format", this, 3)([t, n]);
                },
              },
            ],
            [
              {
                key: "create",
                value: function (t) {
                  var n = cu(e, "create", this, 2)([]);
                  return (n.setAttribute("data-list", t), n);
                },
              },
              {
                key: "formats",
                value: function (t) {
                  return t.getAttribute("data-list") || void 0;
                },
              },
              {
                key: "register",
                value: function () {
                  gr.register(Ou);
                },
              },
            ],
          )
        );
      })(ue);
      function xu(t) {
        return (xu =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Au(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function ku(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ru(r.key), r));
        }
      }
      function ju(t, e, n) {
        return (
          (e = Tu(e)),
          (function (t, e) {
            if (e && ("object" == xu(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Tu(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Su(t, e, n, r) {
        var o = Nu(Tu(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Nu() {
        return (Nu =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Cu(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Cu(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Tu(t)); );
        return t;
      }
      function Tu(t) {
        return (Tu = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function _u(t, e) {
        return (_u = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Pu(t, e, n) {
        return (
          (e = Ru(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Ru(t) {
        var e = (function (t, e) {
          if ("object" != xu(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != xu(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == xu(e) ? e : e + "";
      }
      ((Eu.blotName = "list"),
        (Eu.tagName = "LI"),
        (Ou.allowedChildren = [Eu]),
        (Eu.requiredContainer = Ou));
      var qu = (function (t) {
        function e() {
          return (Au(this, e), ju(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && _u(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && ku(t.prototype, e),
              n && ku(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(
            e,
            [
              {
                key: "optimize",
                value: function (t) {
                  (Su(e, "optimize", this, 3)([t]),
                    this.domNode.tagName !== this.statics.tagName[0] &&
                      this.replaceWith(this.statics.blotName));
                },
              },
            ],
            [
              {
                key: "create",
                value: function () {
                  return Su(e, "create", this, 2)([]);
                },
              },
              {
                key: "formats",
                value: function () {
                  return !0;
                },
              },
            ],
          )
        );
      })(Wt);
      (Pu(qu, "blotName", "bold"), Pu(qu, "tagName", ["STRONG", "B"]));
      var Du = qu;
      function Lu(t) {
        return (Lu =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Bu(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Hu(r.key), r));
        }
      }
      function Iu(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Mu(t, e, n) {
        return (
          (e = Fu(e)),
          (function (t, e) {
            if (e && ("object" == Lu(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Fu(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Fu(t) {
        return (Fu = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Uu(t, e) {
        return (Uu = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function zu(t, e, n) {
        return (
          (e = Hu(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Hu(t) {
        var e = (function (t, e) {
          if ("object" != Lu(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Lu(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Lu(e) ? e : e + "";
      }
      var Vu = (function (t) {
        function e() {
          return (Iu(this, e), Mu(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Uu(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Bu(t.prototype, e),
              n && Bu(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e)
        );
      })(Du);
      (zu(Vu, "blotName", "italic"), zu(Vu, "tagName", ["EM", "I"]));
      var Wu = Vu;
      function Ku(t) {
        return (Ku =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function $u(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Zu(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, nl(r.key), r));
        }
      }
      function Gu(t, e, n) {
        return (
          (e = Ju(e)),
          (function (t, e) {
            if (e && ("object" == Ku(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Ju(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Yu(t, e, n, r) {
        var o = Xu(Ju(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Xu() {
        return (Xu =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Qu(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Qu(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ju(t)); );
        return t;
      }
      function Ju(t) {
        return (Ju = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function tl(t, e) {
        return (tl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function el(t, e, n) {
        return (
          (e = nl(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function nl(t) {
        var e = (function (t, e) {
          if ("object" != Ku(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Ku(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Ku(e) ? e : e + "";
      }
      var rl = (function (t) {
        function e() {
          return ($u(this, e), Gu(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && tl(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Zu(t.prototype, e),
              n && Zu(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(
            e,
            [
              {
                key: "format",
                value: function (t, n) {
                  t === this.statics.blotName && n
                    ? this.domNode.setAttribute(
                        "href",
                        this.constructor.sanitize(n),
                      )
                    : Yu(e, "format", this, 3)([t, n]);
                },
              },
            ],
            [
              {
                key: "create",
                value: function (t) {
                  var n = Yu(e, "create", this, 2)([t]);
                  return (
                    n.setAttribute("href", this.sanitize(t)),
                    n.setAttribute("rel", "noopener noreferrer"),
                    n.setAttribute("target", "_blank"),
                    n
                  );
                },
              },
              {
                key: "formats",
                value: function (t) {
                  return t.getAttribute("href");
                },
              },
              {
                key: "sanitize",
                value: function (t) {
                  return ol(t, this.PROTOCOL_WHITELIST)
                    ? t
                    : this.SANITIZED_URL;
                },
              },
            ],
          )
        );
      })(Wt);
      function ol(t, e) {
        var n = document.createElement("a");
        n.href = t;
        var r = n.href.slice(0, n.href.indexOf(":"));
        return e.indexOf(r) > -1;
      }
      function il(t) {
        return (il =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function al(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function ul(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, dl(r.key), r));
        }
      }
      function ll(t, e, n) {
        return (
          (e = fl(e)),
          (function (t, e) {
            if (e && ("object" == il(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], fl(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function sl() {
        return (sl =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = cl(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function cl(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = fl(t)); );
        return t;
      }
      function fl(t) {
        return (fl = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function hl(t, e) {
        return (hl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function pl(t, e, n) {
        return (
          (e = dl(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function dl(t) {
        var e = (function (t, e) {
          if ("object" != il(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != il(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == il(e) ? e : e + "";
      }
      (el(rl, "blotName", "link"),
        el(rl, "tagName", "A"),
        el(rl, "SANITIZED_URL", "about:blank"),
        el(rl, "PROTOCOL_WHITELIST", [
          "http",
          "https",
          "mailto",
          "tel",
          "sms",
        ]));
      var yl = (function (t) {
        function e() {
          return (al(this, e), ll(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && hl(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && ul(t.prototype, e),
              n && ul(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, null, [
            {
              key: "create",
              value: function (t) {
                return "super" === t
                  ? document.createElement("sup")
                  : "sub" === t
                    ? document.createElement("sub")
                    : (function (t, e, n, r) {
                        var o = sl(fl(1 & r ? t.prototype : t), e, n);
                        return 2 & r && "function" == typeof o
                          ? function (t) {
                              return o.apply(n, t);
                            }
                          : o;
                      })(
                        e,
                        "create",
                        this,
                        2,
                      )([t]);
              },
            },
            {
              key: "formats",
              value: function (t) {
                return "SUB" === t.tagName
                  ? "sub"
                  : "SUP" === t.tagName
                    ? "super"
                    : void 0;
              },
            },
          ])
        );
      })(Wt);
      (pl(yl, "blotName", "script"), pl(yl, "tagName", ["SUB", "SUP"]));
      var bl = yl;
      function ml(t) {
        return (ml =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function vl(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Al(r.key), r));
        }
      }
      function gl(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function wl(t, e, n) {
        return (
          (e = Ol(e)),
          (function (t, e) {
            if (e && ("object" == ml(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Ol(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Ol(t) {
        return (Ol = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function El(t, e) {
        return (El = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function xl(t, e, n) {
        return (
          (e = Al(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Al(t) {
        var e = (function (t, e) {
          if ("object" != ml(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != ml(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ml(e) ? e : e + "";
      }
      var kl = (function (t) {
        function e() {
          return (gl(this, e), wl(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && El(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && vl(t.prototype, e),
              n && vl(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e)
        );
      })(Du);
      (xl(kl, "blotName", "strike"), xl(kl, "tagName", ["S", "STRIKE"]));
      var jl = kl;
      function Sl(t) {
        return (Sl =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Nl(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ql(r.key), r));
        }
      }
      function Cl(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Tl(t, e, n) {
        return (
          (e = _l(e)),
          (function (t, e) {
            if (e && ("object" == Sl(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], _l(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function _l(t) {
        return (_l = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Pl(t, e) {
        return (Pl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Rl(t, e, n) {
        return (
          (e = ql(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ql(t) {
        var e = (function (t, e) {
          if ("object" != Sl(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Sl(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Sl(e) ? e : e + "";
      }
      var Dl = (function (t) {
        function e() {
          return (Cl(this, e), Tl(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Pl(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Nl(t.prototype, e),
              n && Nl(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e)
        );
      })(Wt);
      (Rl(Dl, "blotName", "underline"), Rl(Dl, "tagName", "U"));
      var Ll = Dl;
      function Bl(t) {
        return (Bl =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Il(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ml(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Kl(r.key), r));
        }
      }
      function Fl(t, e, n) {
        return (
          (e = Hl(e)),
          (function (t, e) {
            if (e && ("object" == Bl(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Hl(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Ul() {
        return (Ul =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = zl(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function zl(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Hl(t)); );
        return t;
      }
      function Hl(t) {
        return (Hl = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Vl(t, e) {
        return (Vl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Wl(t, e, n) {
        return (
          (e = Kl(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Kl(t) {
        var e = (function (t, e) {
          if ("object" != Bl(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Bl(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Bl(e) ? e : e + "";
      }
      var $l = (function (t) {
        function e() {
          return (Il(this, e), Fl(this, e, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Vl(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Ml(t.prototype, e),
              n && Ml(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(
            e,
            [
              {
                key: "html",
                value: function () {
                  var t = this.value().formula;
                  return "<span>".concat(t, "</span>");
                },
              },
            ],
            [
              {
                key: "create",
                value: function (t) {
                  if (null == window.katex)
                    throw new Error("Formula module requires KaTeX.");
                  var n = (function (t, e, n, r) {
                    var o = Ul(Hl(1 & r ? t.prototype : t), e, n);
                    return 2 & r && "function" == typeof o
                      ? function (t) {
                          return o.apply(n, t);
                        }
                      : o;
                  })(
                    e,
                    "create",
                    this,
                    2,
                  )([t]);
                  return (
                    "string" == typeof t &&
                      (window.katex.render(t, n, {
                        throwOnError: !1,
                        errorColor: "#f00",
                      }),
                      n.setAttribute("data-value", t)),
                    n
                  );
                },
              },
              {
                key: "value",
                value: function (t) {
                  return t.getAttribute("data-value");
                },
              },
            ],
          )
        );
      })(Un);
      (Wl($l, "blotName", "formula"),
        Wl($l, "className", "ql-formula"),
        Wl($l, "tagName", "SPAN"));
      var Zl = $l;
      function Gl(t) {
        return (Gl =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Yl(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Xl(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, is(r.key), r));
        }
      }
      function Ql(t, e, n) {
        return (
          (e = ns(e)),
          (function (t, e) {
            if (e && ("object" == Gl(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], ns(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Jl(t, e, n, r) {
        var o = ts(ns(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function ts() {
        return (ts =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = es(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function es(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ns(t)); );
        return t;
      }
      function ns(t) {
        return (ns = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function rs(t, e) {
        return (rs = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function os(t, e, n) {
        return (
          (e = is(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function is(t) {
        var e = (function (t, e) {
          if ("object" != Gl(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Gl(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Gl(e) ? e : e + "";
      }
      var as = ["alt", "height", "width"],
        us = (function (t) {
          function e() {
            return (Yl(this, e), Ql(this, e, arguments));
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && rs(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && Xl(t.prototype, e),
                n && Xl(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(
              e,
              [
                {
                  key: "format",
                  value: function (t, n) {
                    as.indexOf(t) > -1
                      ? n
                        ? this.domNode.setAttribute(t, n)
                        : this.domNode.removeAttribute(t)
                      : Jl(e, "format", this, 3)([t, n]);
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t) {
                    var n = Jl(e, "create", this, 2)([t]);
                    return (
                      "string" == typeof t &&
                        n.setAttribute("src", this.sanitize(t)),
                      n
                    );
                  },
                },
                {
                  key: "formats",
                  value: function (t) {
                    return as.reduce(function (e, n) {
                      return (
                        t.hasAttribute(n) && (e[n] = t.getAttribute(n)),
                        e
                      );
                    }, {});
                  },
                },
                {
                  key: "match",
                  value: function (t) {
                    return (
                      /\.(jpe?g|gif|png)$/.test(t) ||
                      /^data:image\/.+;base64/.test(t)
                    );
                  },
                },
                {
                  key: "sanitize",
                  value: function (t) {
                    return ol(t, ["http", "https", "data"]) ? t : "//:0";
                  },
                },
                {
                  key: "value",
                  value: function (t) {
                    return t.getAttribute("src");
                  },
                },
              ],
            )
          );
        })(C);
      (os(us, "blotName", "image"), os(us, "tagName", "IMG"));
      var ls = us;
      function ss(t) {
        return (ss =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function cs(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function fs(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, gs(r.key), r));
        }
      }
      function hs(t, e, n) {
        return (
          (e = bs(e)),
          (function (t, e) {
            if (e && ("object" == ss(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], bs(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function ps(t, e, n, r) {
        var o = ds(bs(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function ds() {
        return (ds =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = ys(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function ys(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = bs(t)); );
        return t;
      }
      function bs(t) {
        return (bs = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ms(t, e) {
        return (ms = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function vs(t, e, n) {
        return (
          (e = gs(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function gs(t) {
        var e = (function (t, e) {
          if ("object" != ss(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != ss(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ss(e) ? e : e + "";
      }
      var ws = ["height", "width"],
        Os = (function (t) {
          function e() {
            return (cs(this, e), hs(this, e, arguments));
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && ms(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && fs(t.prototype, e),
                n && fs(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(
              e,
              [
                {
                  key: "format",
                  value: function (t, n) {
                    ws.indexOf(t) > -1
                      ? n
                        ? this.domNode.setAttribute(t, n)
                        : this.domNode.removeAttribute(t)
                      : ps(e, "format", this, 3)([t, n]);
                  },
                },
                {
                  key: "html",
                  value: function () {
                    var t = this.value().video;
                    return '<a href="'.concat(t, '">').concat(t, "</a>");
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t) {
                    var n = ps(e, "create", this, 2)([t]);
                    return (
                      n.setAttribute("frameborder", "0"),
                      n.setAttribute("allowfullscreen", "true"),
                      n.setAttribute("src", this.sanitize(t)),
                      n
                    );
                  },
                },
                {
                  key: "formats",
                  value: function (t) {
                    return ws.reduce(function (e, n) {
                      return (
                        t.hasAttribute(n) && (e[n] = t.getAttribute(n)),
                        e
                      );
                    }, {});
                  },
                },
                {
                  key: "sanitize",
                  value: function (t) {
                    return rl.sanitize(t);
                  },
                },
                {
                  key: "value",
                  value: function (t) {
                    return t.getAttribute("src");
                  },
                },
              ],
            )
          );
        })(le);
      (vs(Os, "blotName", "video"),
        vs(Os, "className", "ql-video"),
        vs(Os, "tagName", "IFRAME"));
      var Es = Os;
      function xs(t) {
        return (xs =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function As(t, e, n) {
        return (
          (e = Ts(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ks(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return js(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? js(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function js(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Ss(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ns(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ts(r.key), r));
        }
      }
      function Cs(t, e, n) {
        return (
          e && Ns(t.prototype, e),
          n && Ns(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Ts(t) {
        var e = (function (t, e) {
          if ("object" != xs(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != xs(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == xs(e) ? e : e + "";
      }
      function _s(t, e, n) {
        return (
          (e = Bs(e)),
          (function (t, e) {
            if (e && ("object" == xs(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Bs(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Ps(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && Rs(t, e));
      }
      function Rs(t, e) {
        return (Rs = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function qs(t, e, n, r) {
        var o = Ds(Bs(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Ds() {
        return (Ds =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Ls(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Ls(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Bs(t)); );
        return t;
      }
      function Bs(t) {
        return (Bs = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Is = new f("code-token", "hljs", { scope: i.INLINE }),
        Ms = (function (t) {
          function e(t, n, r) {
            var o;
            return (
              Ss(this, e),
              (o = _s(this, e, [t, n, r])),
              Is.add(o.domNode, r),
              o
            );
          }
          return (
            Ps(e, t),
            Cs(
              e,
              [
                {
                  key: "format",
                  value: function (t, n) {
                    t !== e.blotName
                      ? qs(e, "format", this, 3)([t, n])
                      : n
                        ? Is.add(this.domNode, n)
                        : (Is.remove(this.domNode),
                          this.domNode.classList.remove(
                            this.statics.className,
                          ));
                  },
                },
                {
                  key: "optimize",
                  value: function () {
                    (qs(e, "optimize", this, 3)(arguments),
                      Is.value(this.domNode) || this.unwrap());
                  },
                },
              ],
              [
                {
                  key: "formats",
                  value: function (t, n) {
                    for (; null != t && t !== n.domNode; ) {
                      if (t.classList && t.classList.contains(Co.className))
                        return qs(e, "formats", this, 2)([t, n]);
                      t = t.parentNode;
                    }
                  },
                },
              ],
            )
          );
        })(Wt);
      ((Ms.blotName = "code-token"), (Ms.className = "ql-token"));
      var Fs = (function (t) {
          function e() {
            return (Ss(this, e), _s(this, e, arguments));
          }
          return (
            Ps(e, t),
            Cs(
              e,
              [
                {
                  key: "format",
                  value: function (t, n) {
                    t === this.statics.blotName && n
                      ? this.domNode.setAttribute("data-language", n)
                      : qs(e, "format", this, 3)([t, n]);
                  },
                },
                {
                  key: "replaceWith",
                  value: function (t, n) {
                    return (
                      this.formatAt(0, this.length(), Ms.blotName, !1),
                      qs(e, "replaceWith", this, 3)([t, n])
                    );
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t) {
                    var n = qs(e, "create", this, 2)([t]);
                    return (
                      "string" == typeof t &&
                        n.setAttribute("data-language", t),
                      n
                    );
                  },
                },
                {
                  key: "formats",
                  value: function (t) {
                    return t.getAttribute("data-language") || "plain";
                  },
                },
                { key: "register", value: function () {} },
              ],
            )
          );
        })(Co),
        Us = (function (t) {
          function e() {
            return (Ss(this, e), _s(this, e, arguments));
          }
          return (
            Ps(e, t),
            Cs(e, [
              {
                key: "attach",
                value: function () {
                  (qs(e, "attach", this, 3)([]),
                    (this.forceNext = !1),
                    this.scroll.emitMount(this));
                },
              },
              {
                key: "format",
                value: function (t, e) {
                  t === Fs.blotName &&
                    ((this.forceNext = !0),
                    this.children.forEach(function (n) {
                      n.format(t, e);
                    }));
                },
              },
              {
                key: "formatAt",
                value: function (t, n, r, o) {
                  (r === Fs.blotName && (this.forceNext = !0),
                    qs(e, "formatAt", this, 3)([t, n, r, o]));
                },
              },
              {
                key: "highlight",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (null != this.children.head) {
                    var r = Array.from(this.domNode.childNodes).filter(
                        function (t) {
                          return t !== e.uiNode;
                        },
                      ),
                      o = "".concat(
                        r
                          .map(function (t) {
                            return t.textContent;
                          })
                          .join("\n"),
                        "\n",
                      ),
                      i = Fs.formats(this.children.head.domNode);
                    if (n || this.forceNext || this.cachedText !== o) {
                      if (o.trim().length > 0 || null == this.cachedText) {
                        var a = this.children.reduce(function (t, e) {
                            return t.concat(se(e, !1));
                          }, new L.a()),
                          u = t(o, i);
                        a.diff(u).reduce(function (t, n) {
                          var r = n.retain,
                            o = n.attributes;
                          return r
                            ? (o &&
                                Object.keys(o).forEach(function (n) {
                                  [Fs.blotName, Ms.blotName].includes(n) &&
                                    e.formatAt(t, r, n, o[n]);
                                }),
                              t + r)
                            : t;
                        }, 0);
                      }
                      ((this.cachedText = o), (this.forceNext = !1));
                    }
                  }
                },
              },
              {
                key: "html",
                value: function (t, e) {
                  var n = ks(this.children.find(t), 1)[0],
                    r = n ? Fs.formats(n.domNode) : "plain";
                  return '<pre data-language="'
                    .concat(r, '">\n')
                    .concat(Pt(this.code(t, e)), "\n</pre>");
                },
              },
              {
                key: "optimize",
                value: function (t) {
                  if (
                    (qs(e, "optimize", this, 3)([t]),
                    null != this.parent &&
                      null != this.children.head &&
                      null != this.uiNode)
                  ) {
                    var n = Fs.formats(this.children.head.domNode);
                    n !== this.uiNode.value && (this.uiNode.value = n);
                  }
                },
              },
            ])
          );
        })(No);
      ((Us.allowedChildren = [Fs]),
        (Fs.requiredContainer = Us),
        (Fs.allowedChildren = [Ms, Ee, Tt, Et]));
      var zs = function (t, e, n) {
          if ("string" == typeof t.versionString) {
            var r = t.versionString.split(".")[0];
            if (parseInt(r, 10) >= 11)
              return t.highlight(n, { language: e }).value;
          }
          return t.highlight(e, n).value;
        },
        Hs = (function (t) {
          function e(t, n) {
            var r;
            if ((Ss(this, e), null == (r = _s(this, e, [t, n])).options.hljs))
              throw new Error(
                "Syntax module requires highlight.js. Please include the library on the page before Quill.",
              );
            return (
              (r.languages = r.options.languages.reduce(function (t, e) {
                return ((t[e.key] = !0), t);
              }, {})),
              (r.highlightBlot = r.highlightBlot.bind(r)),
              r.initListener(),
              r.initTimer(),
              r
            );
          }
          return (
            Ps(e, t),
            Cs(
              e,
              [
                {
                  key: "initListener",
                  value: function () {
                    var t = this;
                    this.quill.on(gr.events.SCROLL_BLOT_MOUNT, function (e) {
                      if (e instanceof Us) {
                        var n =
                          t.quill.root.ownerDocument.createElement("select");
                        (t.options.languages.forEach(function (t) {
                          var e = t.key,
                            r = t.label,
                            o = n.ownerDocument.createElement("option");
                          ((o.textContent = r),
                            o.setAttribute("value", e),
                            n.appendChild(o));
                        }),
                          n.addEventListener("change", function () {
                            (e.format(Fs.blotName, n.value),
                              t.quill.root.focus(),
                              t.highlight(e, !0));
                          }),
                          null == e.uiNode &&
                            (e.attachUI(n),
                            e.children.head &&
                              (n.value = Fs.formats(e.children.head.domNode))));
                      }
                    });
                  },
                },
                {
                  key: "initTimer",
                  value: function () {
                    var t = this,
                      e = null;
                    this.quill.on(gr.events.SCROLL_OPTIMIZE, function () {
                      (e && clearTimeout(e),
                        (e = setTimeout(function () {
                          (t.highlight(), (e = null));
                        }, t.options.interval)));
                    });
                  },
                },
                {
                  key: "highlight",
                  value: function () {
                    var t = this,
                      e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                    if (!this.quill.selection.composing) {
                      this.quill.update(gr.sources.USER);
                      var r = this.quill.getSelection(),
                        o = null == e ? this.quill.scroll.descendants(Us) : [e];
                      (o.forEach(function (e) {
                        e.highlight(t.highlightBlot, n);
                      }),
                        this.quill.update(gr.sources.SILENT),
                        null != r &&
                          this.quill.setSelection(r, gr.sources.SILENT));
                    }
                  },
                },
                {
                  key: "highlightBlot",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "plain";
                    if ("plain" === (e = this.languages[e] ? e : "plain"))
                      return Pt(t)
                        .split("\n")
                        .reduce(function (t, n, r) {
                          return (
                            0 !== r && t.insert("\n", As({}, Co.blotName, e)),
                            t.insert(n)
                          );
                        }, new L.a());
                    var n = this.quill.root.ownerDocument.createElement("div");
                    return (
                      n.classList.add(Co.className),
                      (n.innerHTML = zs(this.options.hljs, e, t)),
                      $i(
                        this.quill.scroll,
                        n,
                        [
                          function (t, e) {
                            var n = Is.value(t);
                            return n
                              ? e.compose(
                                  new L.a().retain(
                                    e.length(),
                                    As({}, Ms.blotName, n),
                                  ),
                                )
                              : e;
                          },
                        ],
                        [
                          function (t, n) {
                            return t.data.split("\n").reduce(function (
                              t,
                              n,
                              r,
                            ) {
                              return (
                                0 !== r &&
                                  t.insert("\n", As({}, Co.blotName, e)),
                                t.insert(n)
                              );
                            }, n);
                          },
                        ],
                        new WeakMap(),
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: "register",
                  value: function () {
                    (gr.register(Ms, !0),
                      gr.register(Fs, !0),
                      gr.register(Us, !0));
                  },
                },
              ],
            )
          );
        })(Pn);
      Hs.DEFAULTS = {
        hljs: window.hljs,
        interval: 1e3,
        languages: [
          { key: "plain", label: "Plain" },
          { key: "bash", label: "Bash" },
          { key: "cpp", label: "C++" },
          { key: "cs", label: "C#" },
          { key: "css", label: "CSS" },
          { key: "diff", label: "Diff" },
          { key: "xml", label: "HTML/XML" },
          { key: "java", label: "Java" },
          { key: "javascript", label: "JavaScript" },
          { key: "markdown", label: "Markdown" },
          { key: "php", label: "PHP" },
          { key: "python", label: "Python" },
          { key: "ruby", label: "Ruby" },
          { key: "sql", label: "SQL" },
        ],
      };
      n(617);
      function Vs(t) {
        return (Vs =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Ws(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Ks(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ks(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ks(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function $s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Zs(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, oc(r.key), r));
        }
      }
      function Gs(t, e, n) {
        return (
          e && Zs(t.prototype, e),
          n && Zs(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Ys(t, e, n) {
        return (
          (e = tc(e)),
          (function (t, e) {
            if (e && ("object" == Vs(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], tc(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Xs(t, e, n, r) {
        var o = Qs(tc(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Qs() {
        return (Qs =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Js(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Js(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = tc(t)); );
        return t;
      }
      function tc(t) {
        return (tc = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ec(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && nc(t, e));
      }
      function nc(t, e) {
        return (nc = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function rc(t, e, n) {
        return (
          (e = oc(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function oc(t) {
        var e = (function (t, e) {
          if ("object" != Vs(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Vs(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Vs(e) ? e : e + "";
      }
      var ic = (function (t) {
        function e() {
          return ($s(this, e), Ys(this, e, arguments));
        }
        return (
          ec(e, t),
          Gs(
            e,
            [
              {
                key: "cellOffset",
                value: function () {
                  return this.parent ? this.parent.children.indexOf(this) : -1;
                },
              },
              {
                key: "format",
                value: function (t, n) {
                  t === e.blotName && n
                    ? this.domNode.setAttribute("data-row", n)
                    : Xs(e, "format", this, 3)([t, n]);
                },
              },
              {
                key: "row",
                value: function () {
                  return this.parent;
                },
              },
              {
                key: "rowOffset",
                value: function () {
                  return this.row() ? this.row().rowOffset() : -1;
                },
              },
              {
                key: "table",
                value: function () {
                  return this.row() && this.row().table();
                },
              },
            ],
            [
              {
                key: "create",
                value: function (t) {
                  var n = Xs(e, "create", this, 2)([]);
                  return (
                    t
                      ? n.setAttribute("data-row", t)
                      : n.setAttribute("data-row", sc()),
                    n
                  );
                },
              },
              {
                key: "formats",
                value: function (t) {
                  if (t.hasAttribute("data-row"))
                    return t.getAttribute("data-row");
                },
              },
            ],
          )
        );
      })(ue);
      (rc(ic, "blotName", "table"), rc(ic, "tagName", "TD"));
      var ac = (function (t) {
        function e() {
          return ($s(this, e), Ys(this, e, arguments));
        }
        return (
          ec(e, t),
          Gs(e, [
            {
              key: "checkMerge",
              value: function () {
                if (
                  Xs(e, "checkMerge", this, 3)([]) &&
                  null != this.next.children.head
                ) {
                  var t = this.children.head.formats(),
                    n = this.children.tail.formats(),
                    r = this.next.children.head.formats(),
                    o = this.next.children.tail.formats();
                  return (
                    t.table === n.table &&
                    t.table === r.table &&
                    t.table === o.table
                  );
                }
                return !1;
              },
            },
            {
              key: "optimize",
              value: function (t) {
                var n = this;
                (Xs(e, "optimize", this, 3)([t]),
                  this.children.forEach(function (t) {
                    if (null != t.next) {
                      var e = t.formats(),
                        r = t.next.formats();
                      if (e.table !== r.table) {
                        var o = n.splitAfter(t);
                        (o && o.optimize(), n.prev && n.prev.optimize());
                      }
                    }
                  }));
              },
            },
            {
              key: "rowOffset",
              value: function () {
                return this.parent ? this.parent.children.indexOf(this) : -1;
              },
            },
            {
              key: "table",
              value: function () {
                return this.parent && this.parent.parent;
              },
            },
          ])
        );
      })(qr);
      (rc(ac, "blotName", "table-row"), rc(ac, "tagName", "TR"));
      var uc = (function (t) {
        function e() {
          return ($s(this, e), Ys(this, e, arguments));
        }
        return (ec(e, t), Gs(e));
      })(qr);
      (rc(uc, "blotName", "table-body"), rc(uc, "tagName", "TBODY"));
      var lc = (function (t) {
        function e() {
          return ($s(this, e), Ys(this, e, arguments));
        }
        return (
          ec(e, t),
          Gs(e, [
            {
              key: "balanceCells",
              value: function () {
                var t = this,
                  e = this.descendants(ac),
                  n = e.reduce(function (t, e) {
                    return Math.max(e.children.length, t);
                  }, 0);
                e.forEach(function (e) {
                  new Array(n - e.children.length).fill(0).forEach(function () {
                    var n;
                    null != e.children.head &&
                      (n = ic.formats(e.children.head.domNode));
                    var r = t.scroll.create(ic.blotName, n);
                    (e.appendChild(r), r.optimize());
                  });
                });
              },
            },
            {
              key: "cells",
              value: function (t) {
                return this.rows().map(function (e) {
                  return e.children.at(t);
                });
              },
            },
            {
              key: "deleteColumn",
              value: function (t) {
                var e = Ws(this.descendant(uc), 1)[0];
                null != e &&
                  null != e.children.head &&
                  e.children.forEach(function (e) {
                    var n = e.children.at(t);
                    null != n && n.remove();
                  });
              },
            },
            {
              key: "insertColumn",
              value: function (t) {
                var e = this,
                  n = Ws(this.descendant(uc), 1)[0];
                null != n &&
                  null != n.children.head &&
                  n.children.forEach(function (n) {
                    var r = n.children.at(t),
                      o = ic.formats(n.children.head.domNode),
                      i = e.scroll.create(ic.blotName, o);
                    n.insertBefore(i, r);
                  });
              },
            },
            {
              key: "insertRow",
              value: function (t) {
                var e = this,
                  n = Ws(this.descendant(uc), 1)[0];
                if (null != n && null != n.children.head) {
                  var r = sc(),
                    o = this.scroll.create(ac.blotName);
                  n.children.head.children.forEach(function () {
                    var t = e.scroll.create(ic.blotName, r);
                    o.appendChild(t);
                  });
                  var i = n.children.at(t);
                  n.insertBefore(o, i);
                }
              },
            },
            {
              key: "rows",
              value: function () {
                var t = this.children.head;
                return null == t
                  ? []
                  : t.children.map(function (t) {
                      return t;
                    });
              },
            },
          ])
        );
      })(qr);
      function sc() {
        var t = Math.random().toString(36).slice(2, 6);
        return "row-".concat(t);
      }
      function cc(t) {
        return (cc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function fc(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return hc(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? hc(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function hc(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function pc(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function dc(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, yc(r.key), r));
        }
      }
      function yc(t) {
        var e = (function (t, e) {
          if ("object" != cc(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != cc(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == cc(e) ? e : e + "";
      }
      function bc(t, e, n) {
        return (
          (e = mc(e)),
          (function (t, e) {
            if (e && ("object" == cc(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], mc(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function mc(t) {
        return (mc = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function vc(t, e) {
        return (vc = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      (rc(lc, "blotName", "table-container"),
        rc(lc, "tagName", "TABLE"),
        (lc.allowedChildren = [uc]),
        (uc.requiredContainer = lc),
        (uc.allowedChildren = [ac]),
        (ac.requiredContainer = uc),
        (ac.allowedChildren = [ic]),
        (ic.requiredContainer = ac));
      var gc = (function (t) {
        function e() {
          var t;
          return (
            pc(this, e),
            (t = bc(this, e, arguments)).listenBalanceCells(),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && vc(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && dc(t.prototype, e),
              n && dc(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(
            e,
            [
              {
                key: "balanceTables",
                value: function () {
                  this.quill.scroll.descendants(lc).forEach(function (t) {
                    t.balanceCells();
                  });
                },
              },
              {
                key: "deleteColumn",
                value: function () {
                  var t = fc(this.getTable(), 3),
                    e = t[0],
                    n = t[2];
                  null != n &&
                    (e.deleteColumn(n.cellOffset()),
                    this.quill.update(gr.sources.USER));
                },
              },
              {
                key: "deleteRow",
                value: function () {
                  var t = fc(this.getTable(), 2)[1];
                  null != t && (t.remove(), this.quill.update(gr.sources.USER));
                },
              },
              {
                key: "deleteTable",
                value: function () {
                  var t = fc(this.getTable(), 1)[0];
                  if (null != t) {
                    var e = t.offset();
                    (t.remove(),
                      this.quill.update(gr.sources.USER),
                      this.quill.setSelection(e, gr.sources.SILENT));
                  }
                },
              },
              {
                key: "getTable",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.quill.getSelection();
                  if (null == t) return [null, null, null, -1];
                  var e = this.quill.getLine(t.index),
                    n = fc(e, 2),
                    r = n[0],
                    o = n[1];
                  if (null == r || r.statics.blotName !== ic.blotName)
                    return [null, null, null, -1];
                  var i = r.parent,
                    a = i.parent.parent;
                  return [a, i, r, o];
                },
              },
              {
                key: "insertColumn",
                value: function (t) {
                  var e = this.quill.getSelection();
                  if (e) {
                    var n = fc(this.getTable(e), 3),
                      r = n[0],
                      o = n[1],
                      i = n[2];
                    if (null != i) {
                      var a = i.cellOffset();
                      (r.insertColumn(a + t),
                        this.quill.update(gr.sources.USER));
                      var u = o.rowOffset();
                      (0 === t && (u += 1),
                        this.quill.setSelection(
                          e.index + u,
                          e.length,
                          gr.sources.SILENT,
                        ));
                    }
                  }
                },
              },
              {
                key: "insertColumnLeft",
                value: function () {
                  this.insertColumn(0);
                },
              },
              {
                key: "insertColumnRight",
                value: function () {
                  this.insertColumn(1);
                },
              },
              {
                key: "insertRow",
                value: function (t) {
                  var e = this.quill.getSelection();
                  if (e) {
                    var n = fc(this.getTable(e), 3),
                      r = n[0],
                      o = n[1];
                    if (null != n[2]) {
                      var i = o.rowOffset();
                      (r.insertRow(i + t),
                        this.quill.update(gr.sources.USER),
                        t > 0
                          ? this.quill.setSelection(e, gr.sources.SILENT)
                          : this.quill.setSelection(
                              e.index + o.children.length,
                              e.length,
                              gr.sources.SILENT,
                            ));
                    }
                  }
                },
              },
              {
                key: "insertRowAbove",
                value: function () {
                  this.insertRow(0);
                },
              },
              {
                key: "insertRowBelow",
                value: function () {
                  this.insertRow(1);
                },
              },
              {
                key: "insertTable",
                value: function (t, e) {
                  var n = this.quill.getSelection();
                  if (null != n) {
                    var r = new Array(t).fill(0).reduce(function (t) {
                      var n = new Array(e).fill("\n").join("");
                      return t.insert(n, { table: sc() });
                    }, new L.a().retain(n.index));
                    (this.quill.updateContents(r, gr.sources.USER),
                      this.quill.setSelection(n.index, gr.sources.SILENT),
                      this.balanceTables());
                  }
                },
              },
              {
                key: "listenBalanceCells",
                value: function () {
                  var t = this;
                  this.quill.on(gr.events.SCROLL_OPTIMIZE, function (e) {
                    e.some(function (e) {
                      return (
                        !!["TD", "TR", "TBODY", "TABLE"].includes(
                          e.target.tagName,
                        ) &&
                        (t.quill.once(
                          gr.events.TEXT_CHANGE,
                          function (e, n, r) {
                            r === gr.sources.USER && t.balanceTables();
                          },
                        ),
                        !0)
                      );
                    });
                  });
                },
              },
            ],
            [
              {
                key: "register",
                value: function () {
                  (gr.register(ic),
                    gr.register(ac),
                    gr.register(uc),
                    gr.register(lc));
                },
              },
            ],
          )
        );
      })(Pn);
      function wc(t) {
        return (wc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Oc(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Ec(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ec(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ec(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function xc(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ac(r.key), r));
        }
      }
      function Ac(t) {
        var e = (function (t, e) {
          if ("object" != wc(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != wc(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == wc(e) ? e : e + "";
      }
      function kc(t, e, n) {
        return (
          (e = Sc(e)),
          jc(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Sc(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function jc(t, e) {
        if (e && ("object" == wc(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function Sc(t) {
        return (Sc = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Nc(t, e) {
        return (Nc = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var Cc = Ce("quill:toolbar"),
        Tc = (function (t) {
          function e(t, n) {
            var r;
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (r = kc(this, e, [t, n])),
              Array.isArray(r.options.container))
            ) {
              var o,
                i,
                a = document.createElement("div");
              (a.setAttribute("role", "toolbar"),
                (function (t, e) {
                  Array.isArray(e[0]) || (e = [e]);
                  e.forEach(function (e) {
                    var n = document.createElement("span");
                    (n.classList.add("ql-formats"),
                      e.forEach(function (t) {
                        if ("string" == typeof t) _c(n, t);
                        else {
                          var e = Object.keys(t)[0],
                            r = t[e];
                          Array.isArray(r)
                            ? (function (t, e, n) {
                                var r = document.createElement("select");
                                (r.classList.add("ql-".concat(e)),
                                  n.forEach(function (t) {
                                    var e = document.createElement("option");
                                    (!1 !== t
                                      ? e.setAttribute("value", String(t))
                                      : e.setAttribute("selected", "selected"),
                                      r.appendChild(e));
                                  }),
                                  t.appendChild(r));
                              })(n, e, r)
                            : _c(n, e, r);
                        }
                      }),
                      t.appendChild(n));
                  });
                })(a, r.options.container),
                null === (o = t.container) ||
                  void 0 === o ||
                  null === (i = o.parentNode) ||
                  void 0 === i ||
                  i.insertBefore(a, t.container),
                (r.container = a));
            } else
              "string" == typeof r.options.container
                ? (r.container = document.querySelector(r.options.container))
                : (r.container = r.options.container);
            return r.container instanceof HTMLElement
              ? (r.container.classList.add("ql-toolbar"),
                (r.controls = []),
                (r.handlers = {}),
                r.options.handlers &&
                  Object.keys(r.options.handlers).forEach(function (t) {
                    var e,
                      n =
                        null === (e = r.options.handlers) || void 0 === e
                          ? void 0
                          : e[t];
                    n && r.addHandler(t, n);
                  }),
                Array.from(
                  r.container.querySelectorAll("button, select"),
                ).forEach(function (t) {
                  r.attach(t);
                }),
                r.quill.on(gr.events.EDITOR_CHANGE, function () {
                  var t = Oc(r.quill.selection.getRange(), 1)[0];
                  r.update(t);
                }),
                r)
              : (Cc.error("Container required for toolbar", r.options), jc(r));
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && Nc(t, e));
            })(e, t),
            (function (t, e, n) {
              return (
                e && xc(t.prototype, e),
                n && xc(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            })(e, [
              {
                key: "addHandler",
                value: function (t, e) {
                  this.handlers[t] = e;
                },
              },
              {
                key: "attach",
                value: function (t) {
                  var e = this,
                    n = Array.from(t.classList).find(function (t) {
                      return 0 === t.indexOf("ql-");
                    });
                  if (n)
                    if (
                      ((n = n.slice("ql-".length)),
                      "BUTTON" === t.tagName &&
                        t.setAttribute("type", "button"),
                      null != this.handlers[n] ||
                        null != this.quill.scroll.query(n))
                    ) {
                      var r = "SELECT" === t.tagName ? "change" : "click";
                      (t.addEventListener(r, function (r) {
                        var o;
                        if ("SELECT" === t.tagName) {
                          if (t.selectedIndex < 0) return;
                          var i = t.options[t.selectedIndex];
                          o = !i.hasAttribute("selected") && (i.value || !1);
                        } else
                          ((o =
                            !t.classList.contains("ql-active") &&
                            (t.value || !t.hasAttribute("value"))),
                            r.preventDefault());
                        e.quill.focus();
                        var a = Oc(e.quill.selection.getRange(), 1)[0];
                        if (null != e.handlers[n]) e.handlers[n].call(e, o);
                        else if (
                          e.quill.scroll.query(n).prototype instanceof C
                        ) {
                          if (!(o = prompt("Enter ".concat(n)))) return;
                          e.quill.updateContents(
                            new L.a()
                              .retain(a.index)
                              .delete(a.length)
                              .insert(
                                (function (t, e, n) {
                                  return (
                                    (e = Ac(e)) in t
                                      ? Object.defineProperty(t, e, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                        })
                                      : (t[e] = n),
                                    t
                                  );
                                })({}, n, o),
                              ),
                            gr.sources.USER,
                          );
                        } else e.quill.format(n, o, gr.sources.USER);
                        e.update(a);
                      }),
                        this.controls.push([n, t]));
                    } else
                      Cc.warn("ignoring attaching to nonexistent format", n, t);
                },
              },
              {
                key: "update",
                value: function (t) {
                  var e = null == t ? {} : this.quill.getFormat(t);
                  this.controls.forEach(function (n) {
                    var r = Oc(n, 2),
                      o = r[0],
                      i = r[1];
                    if ("SELECT" === i.tagName) {
                      var a = null;
                      if (null == t) a = null;
                      else if (null == e[o])
                        a = i.querySelector("option[selected]");
                      else if (!Array.isArray(e[o])) {
                        var u = e[o];
                        ("string" == typeof u && (u = u.replace(/"/g, '\\"')),
                          (a = i.querySelector(
                            'option[value="'.concat(u, '"]'),
                          )));
                      }
                      null == a
                        ? ((i.value = ""), (i.selectedIndex = -1))
                        : (a.selected = !0);
                    } else if (null == t)
                      (i.classList.remove("ql-active"),
                        i.setAttribute("aria-pressed", "false"));
                    else if (i.hasAttribute("value")) {
                      var l = e[o],
                        s =
                          l === i.getAttribute("value") ||
                          (null != l &&
                            l.toString() === i.getAttribute("value")) ||
                          (null == l && !i.getAttribute("value"));
                      (i.classList.toggle("ql-active", s),
                        i.setAttribute("aria-pressed", s.toString()));
                    } else {
                      var c = null != e[o];
                      (i.classList.toggle("ql-active", c),
                        i.setAttribute("aria-pressed", c.toString()));
                    }
                  });
                },
              },
            ])
          );
        })(Pn);
      function _c(t, e, n) {
        var r = document.createElement("button");
        (r.setAttribute("type", "button"),
          r.classList.add("ql-".concat(e)),
          r.setAttribute("aria-pressed", "false"),
          null != n
            ? ((r.value = n),
              r.setAttribute("aria-label", "".concat(e, ": ").concat(n)))
            : r.setAttribute("aria-label", e),
          t.appendChild(r));
      }
      ((Tc.DEFAULTS = {}),
        (Tc.DEFAULTS = {
          container: null,
          handlers: {
            clean: function () {
              var t = this,
                e = this.quill.getSelection();
              if (null != e)
                if (0 === e.length) {
                  var n = this.quill.getFormat();
                  Object.keys(n).forEach(function (e) {
                    null != t.quill.scroll.query(e, i.INLINE) &&
                      t.quill.format(e, !1, gr.sources.USER);
                  });
                } else
                  this.quill.removeFormat(e.index, e.length, gr.sources.USER);
            },
            direction: function (t) {
              var e = this.quill.getFormat().align;
              ("rtl" === t && null == e
                ? this.quill.format("align", "right", gr.sources.USER)
                : t ||
                  "right" !== e ||
                  this.quill.format("align", !1, gr.sources.USER),
                this.quill.format("direction", t, gr.sources.USER));
            },
            indent: function (t) {
              var e = this.quill.getSelection(),
                n = this.quill.getFormat(e),
                r = parseInt(n.indent || 0, 10);
              if ("+1" === t || "-1" === t) {
                var o = "+1" === t ? 1 : -1;
                ("rtl" === n.direction && (o *= -1),
                  this.quill.format("indent", r + o, gr.sources.USER));
              }
            },
            link: function (t) {
              (!0 === t && (t = prompt("Enter link URL:")),
                this.quill.format("link", t, gr.sources.USER));
            },
            list: function (t) {
              var e = this.quill.getSelection(),
                n = this.quill.getFormat(e);
              "check" === t
                ? "checked" === n.list || "unchecked" === n.list
                  ? this.quill.format("list", !1, gr.sources.USER)
                  : this.quill.format("list", "unchecked", gr.sources.USER)
                : this.quill.format("list", t, gr.sources.USER);
            },
          },
        }));
      var Pc =
          '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>',
        Rc = {
          align: {
            "": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>',
            center:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>',
            right:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>',
            justify:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>',
          },
          background:
            '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>',
          blockquote:
            '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>',
          bold: '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>',
          clean:
            '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>',
          code: Pc,
          "code-block": Pc,
          color:
            '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>',
          direction: {
            "": '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>',
            rtl: '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>',
          },
          formula:
            '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>',
          header: {
            1: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>',
            2: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
            3: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
            4: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>',
            5: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
            6: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>',
          },
          italic:
            '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>',
          image:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>',
          indent: {
            "+1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>',
            "-1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>',
          },
          link: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>',
          list: {
            bullet:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>',
            check:
              '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>',
            ordered:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>',
          },
          script: {
            sub: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>',
            super:
              '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>',
          },
          strike:
            '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>',
          table:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>',
          underline:
            '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>',
          video:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>',
        };
      function qc(t) {
        return (qc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Dc(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Lc(r.key), r));
        }
      }
      function Lc(t) {
        var e = (function (t, e) {
          if ("object" != qc(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != qc(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == qc(e) ? e : e + "";
      }
      var Bc = 0;
      function Ic(t, e) {
        t.setAttribute(e, "".concat(!("true" === t.getAttribute(e))));
      }
      var Mc = (function () {
        return (function (t, e, n) {
          return (
            e && Dc(t.prototype, e),
            n && Dc(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(
          function t(e) {
            var n = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.select = e),
              (this.container = document.createElement("span")),
              this.buildPicker(),
              (this.select.style.display = "none"),
              this.select.parentNode.insertBefore(this.container, this.select),
              this.label.addEventListener("mousedown", function () {
                n.togglePicker();
              }),
              this.label.addEventListener("keydown", function (t) {
                switch (t.key) {
                  case "Enter":
                    n.togglePicker();
                    break;
                  case "Escape":
                    (n.escape(), t.preventDefault());
                }
              }),
              this.select.addEventListener("change", this.update.bind(this)));
          },
          [
            {
              key: "togglePicker",
              value: function () {
                (this.container.classList.toggle("ql-expanded"),
                  Ic(this.label, "aria-expanded"),
                  Ic(this.options, "aria-hidden"));
              },
            },
            {
              key: "buildItem",
              value: function (t) {
                var e = this,
                  n = document.createElement("span");
                ((n.tabIndex = "0"),
                  n.setAttribute("role", "button"),
                  n.classList.add("ql-picker-item"));
                var r = t.getAttribute("value");
                return (
                  r && n.setAttribute("data-value", r),
                  t.textContent && n.setAttribute("data-label", t.textContent),
                  n.addEventListener("click", function () {
                    e.selectItem(n, !0);
                  }),
                  n.addEventListener("keydown", function (t) {
                    switch (t.key) {
                      case "Enter":
                        (e.selectItem(n, !0), t.preventDefault());
                        break;
                      case "Escape":
                        (e.escape(), t.preventDefault());
                    }
                  }),
                  n
                );
              },
            },
            {
              key: "buildLabel",
              value: function () {
                var t = document.createElement("span");
                return (
                  t.classList.add("ql-picker-label"),
                  (t.innerHTML =
                    '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>'),
                  (t.tabIndex = "0"),
                  t.setAttribute("role", "button"),
                  t.setAttribute("aria-expanded", "false"),
                  this.container.appendChild(t),
                  t
                );
              },
            },
            {
              key: "buildOptions",
              value: function () {
                var t = this,
                  e = document.createElement("span");
                (e.classList.add("ql-picker-options"),
                  e.setAttribute("aria-hidden", "true"),
                  (e.tabIndex = "-1"),
                  (e.id = "ql-picker-options-".concat(Bc)),
                  (Bc += 1),
                  this.label.setAttribute("aria-controls", e.id),
                  (this.options = e),
                  Array.from(this.select.options).forEach(function (n) {
                    var r = t.buildItem(n);
                    (e.appendChild(r), !0 === n.selected && t.selectItem(r));
                  }),
                  this.container.appendChild(e));
              },
            },
            {
              key: "buildPicker",
              value: function () {
                var t = this;
                (Array.from(this.select.attributes).forEach(function (e) {
                  t.container.setAttribute(e.name, e.value);
                }),
                  this.container.classList.add("ql-picker"),
                  (this.label = this.buildLabel()),
                  this.buildOptions());
              },
            },
            {
              key: "escape",
              value: function () {
                var t = this;
                (this.close(),
                  setTimeout(function () {
                    return t.label.focus();
                  }, 1));
              },
            },
            {
              key: "close",
              value: function () {
                (this.container.classList.remove("ql-expanded"),
                  this.label.setAttribute("aria-expanded", "false"),
                  this.options.setAttribute("aria-hidden", "true"));
              },
            },
            {
              key: "selectItem",
              value: function (t) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = this.container.querySelector(".ql-selected");
                t !== n &&
                  (null != n && n.classList.remove("ql-selected"),
                  null != t &&
                    (t.classList.add("ql-selected"),
                    (this.select.selectedIndex = Array.from(
                      t.parentNode.children,
                    ).indexOf(t)),
                    t.hasAttribute("data-value")
                      ? this.label.setAttribute(
                          "data-value",
                          t.getAttribute("data-value"),
                        )
                      : this.label.removeAttribute("data-value"),
                    t.hasAttribute("data-label")
                      ? this.label.setAttribute(
                          "data-label",
                          t.getAttribute("data-label"),
                        )
                      : this.label.removeAttribute("data-label"),
                    e &&
                      (this.select.dispatchEvent(new Event("change")),
                      this.close())));
              },
            },
            {
              key: "update",
              value: function () {
                var t;
                if (this.select.selectedIndex > -1) {
                  var e =
                    this.container.querySelector(".ql-picker-options").children[
                      this.select.selectedIndex
                    ];
                  ((t = this.select.options[this.select.selectedIndex]),
                    this.selectItem(e));
                } else this.selectItem(null);
                var n =
                  null != t &&
                  t !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("ql-active", n);
              },
            },
          ],
        );
      })();
      function Fc(t) {
        return (Fc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Uc(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, zc(r.key), r));
        }
      }
      function zc(t) {
        var e = (function (t, e) {
          if ("object" != Fc(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Fc(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Fc(e) ? e : e + "";
      }
      function Hc(t, e, n) {
        return (
          (e = $c(e)),
          (function (t, e) {
            if (e && ("object" == Fc(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], $c(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Vc(t, e, n, r) {
        var o = Wc($c(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Wc() {
        return (Wc =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Kc(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Kc(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = $c(t)); );
        return t;
      }
      function $c(t) {
        return ($c = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Zc(t, e) {
        return (Zc = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var Gc = (function (t) {
        function e(t, n) {
          var r;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((r = Hc(this, e, [t])).label.innerHTML = n),
            r.container.classList.add("ql-color-picker"),
            Array.from(r.container.querySelectorAll(".ql-picker-item"))
              .slice(0, 7)
              .forEach(function (t) {
                t.classList.add("ql-primary");
              }),
            r
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Zc(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Uc(t.prototype, e),
              n && Uc(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "buildItem",
              value: function (t) {
                var n = Vc(e, "buildItem", this, 3)([t]);
                return (
                  (n.style.backgroundColor = t.getAttribute("value") || ""),
                  n
                );
              },
            },
            {
              key: "selectItem",
              value: function (t, n) {
                Vc(e, "selectItem", this, 3)([t, n]);
                var r = this.label.querySelector(".ql-color-label"),
                  o = (t && t.getAttribute("data-value")) || "";
                r &&
                  ("line" === r.tagName
                    ? (r.style.stroke = o)
                    : (r.style.fill = o));
              },
            },
          ])
        );
      })(Mc);
      function Yc(t) {
        return (Yc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Xc(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Qc(r.key), r));
        }
      }
      function Qc(t) {
        var e = (function (t, e) {
          if ("object" != Yc(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Yc(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Yc(e) ? e : e + "";
      }
      function Jc(t, e, n) {
        return (
          (e = nf(e)),
          (function (t, e) {
            if (e && ("object" == Yc(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], nf(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function tf() {
        return (tf =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = ef(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function ef(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = nf(t)); );
        return t;
      }
      function nf(t) {
        return (nf = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function rf(t, e) {
        return (rf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var of = (function (t) {
        function e(t, n) {
          var r;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (r = Jc(this, e, [t])).container.classList.add("ql-icon-picker"),
            Array.from(r.container.querySelectorAll(".ql-picker-item")).forEach(
              function (t) {
                t.innerHTML = n[t.getAttribute("data-value") || ""];
              },
            ),
            (r.defaultItem = r.container.querySelector(".ql-selected")),
            r.selectItem(r.defaultItem),
            r
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && rf(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && Xc(t.prototype, e),
              n && Xc(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "selectItem",
              value: function (t, n) {
                !(function (t, e, n, r) {
                  var o = tf(nf(1 & r ? t.prototype : t), e, n);
                  return 2 & r && "function" == typeof o
                    ? function (t) {
                        return o.apply(n, t);
                      }
                    : o;
                })(
                  e,
                  "selectItem",
                  this,
                  3,
                )([t, n]);
                var r = t || this.defaultItem;
                if (null != r) {
                  if (this.label.innerHTML === r.innerHTML) return;
                  this.label.innerHTML = r.innerHTML;
                }
              },
            },
          ])
        );
      })(Mc);
      function af(t) {
        return (af =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function uf(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, lf(r.key), r));
        }
      }
      function lf(t) {
        var e = (function (t, e) {
          if ("object" != af(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != af(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == af(e) ? e : e + "";
      }
      var sf = (function () {
        return (function (t, e, n) {
          return (
            e && uf(t.prototype, e),
            n && uf(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(
          function t(e, n) {
            var r,
              o,
              i = this;
            (!(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.quill = e),
              (this.boundsContainer = n || document.body),
              (this.root = e.addContainer("ql-tooltip")),
              (this.root.innerHTML = this.constructor.TEMPLATE),
              (r = this.quill.root),
              "visible" !== (o = getComputedStyle(r, null).overflowY) &&
                "clip" !== o &&
                this.quill.root.addEventListener("scroll", function () {
                  i.root.style.marginTop = "".concat(
                    -1 * i.quill.root.scrollTop,
                    "px",
                  );
                }),
              this.hide());
          },
          [
            {
              key: "hide",
              value: function () {
                this.root.classList.add("ql-hidden");
              },
            },
            {
              key: "position",
              value: function (t) {
                var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
                  n = t.bottom + this.quill.root.scrollTop;
                ((this.root.style.left = "".concat(e, "px")),
                  (this.root.style.top = "".concat(n, "px")),
                  this.root.classList.remove("ql-flip"));
                var r = this.boundsContainer.getBoundingClientRect(),
                  o = this.root.getBoundingClientRect(),
                  i = 0;
                if (
                  (o.right > r.right &&
                    ((i = r.right - o.right),
                    (this.root.style.left = "".concat(e + i, "px"))),
                  o.left < r.left &&
                    ((i = r.left - o.left),
                    (this.root.style.left = "".concat(e + i, "px"))),
                  o.bottom > r.bottom)
                ) {
                  var a = o.bottom - o.top,
                    u = t.bottom - t.top + a;
                  ((this.root.style.top = "".concat(n - u, "px")),
                    this.root.classList.add("ql-flip"));
                }
                return i;
              },
            },
            {
              key: "show",
              value: function () {
                (this.root.classList.remove("ql-editing"),
                  this.root.classList.remove("ql-hidden"));
              },
            },
          ],
        );
      })();
      function cf(t) {
        return (cf =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ff(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function hf(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, df(r.key), r));
        }
      }
      function pf(t, e, n) {
        return (
          e && hf(t.prototype, e),
          n && hf(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function df(t) {
        var e = (function (t, e) {
          if ("object" != cf(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != cf(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == cf(e) ? e : e + "";
      }
      function yf(t, e, n) {
        return (
          (e = vf(e)),
          (function (t, e) {
            if (e && ("object" == cf(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], vf(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function bf() {
        return (bf =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = mf(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function mf(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = vf(t)); );
        return t;
      }
      function vf(t) {
        return (vf = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function gf(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && wf(t, e));
      }
      function wf(t, e) {
        return (wf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var Of = [!1, "center", "right", "justify"],
        Ef = [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
          "#facccc",
          "#ffebcc",
          "#ffffcc",
          "#cce8cc",
          "#cce0f5",
          "#ebd6ff",
          "#bbbbbb",
          "#f06666",
          "#ffc266",
          "#ffff66",
          "#66b966",
          "#66a3e0",
          "#c285ff",
          "#888888",
          "#a10000",
          "#b26b00",
          "#b2b200",
          "#006100",
          "#0047b2",
          "#6b24b2",
          "#444444",
          "#5c0000",
          "#663d00",
          "#666600",
          "#003700",
          "#002966",
          "#3d1466",
        ],
        xf = [!1, "serif", "monospace"],
        Af = ["1", "2", "3", !1],
        kf = ["small", !1, "large", "huge"],
        jf = (function (t) {
          function e(t, n) {
            var r;
            (ff(this, e), (r = yf(this, e, [t, n])));
            var o = function (e) {
              document.body.contains(t.root)
                ? (null == r.tooltip ||
                    r.tooltip.root.contains(e.target) ||
                    document.activeElement === r.tooltip.textbox ||
                    r.quill.hasFocus() ||
                    r.tooltip.hide(),
                  null != r.pickers &&
                    r.pickers.forEach(function (t) {
                      t.container.contains(e.target) || t.close();
                    }))
                : document.body.removeEventListener("click", o);
            };
            return (t.emitter.listenDOM("click", document.body, o), r);
          }
          return (
            gf(e, t),
            pf(e, [
              {
                key: "addModule",
                value: function (t) {
                  var n = (function (t, e, n, r) {
                    var o = bf(vf(1 & r ? t.prototype : t), e, n);
                    return 2 & r && "function" == typeof o
                      ? function (t) {
                          return o.apply(n, t);
                        }
                      : o;
                  })(
                    e,
                    "addModule",
                    this,
                    3,
                  )([t]);
                  return ("toolbar" === t && this.extendToolbar(n), n);
                },
              },
              {
                key: "buildButtons",
                value: function (t, e) {
                  Array.from(t).forEach(function (t) {
                    (t.getAttribute("class") || "")
                      .split(/\s+/)
                      .forEach(function (n) {
                        if (
                          n.startsWith("ql-") &&
                          ((n = n.slice("ql-".length)), null != e[n])
                        )
                          if ("direction" === n)
                            t.innerHTML = e[n][""] + e[n].rtl;
                          else if ("string" == typeof e[n]) t.innerHTML = e[n];
                          else {
                            var r = t.value || "";
                            null != r && e[n][r] && (t.innerHTML = e[n][r]);
                          }
                      });
                  });
                },
              },
              {
                key: "buildPickers",
                value: function (t, e) {
                  var n = this;
                  this.pickers = Array.from(t).map(function (t) {
                    if (
                      t.classList.contains("ql-align") &&
                      (null == t.querySelector("option") && Nf(t, Of),
                      "object" === cf(e.align))
                    )
                      return new of(t, e.align);
                    if (
                      t.classList.contains("ql-background") ||
                      t.classList.contains("ql-color")
                    ) {
                      var n = t.classList.contains("ql-background")
                        ? "background"
                        : "color";
                      return (
                        null == t.querySelector("option") &&
                          Nf(t, Ef, "background" === n ? "#ffffff" : "#000000"),
                        new Gc(t, e[n])
                      );
                    }
                    return (
                      null == t.querySelector("option") &&
                        (t.classList.contains("ql-font")
                          ? Nf(t, xf)
                          : t.classList.contains("ql-header")
                            ? Nf(t, Af)
                            : t.classList.contains("ql-size") && Nf(t, kf)),
                      new Mc(t)
                    );
                  });
                  this.quill.on(ze.events.EDITOR_CHANGE, function () {
                    n.pickers.forEach(function (t) {
                      t.update();
                    });
                  });
                },
              },
            ])
          );
        })(Qn);
      jf.DEFAULTS = Object(o.a)({}, Qn.DEFAULTS, {
        modules: {
          toolbar: {
            handlers: {
              formula: function () {
                this.quill.theme.tooltip.edit("formula");
              },
              image: function () {
                var t = this,
                  e = this.container.querySelector("input.ql-image[type=file]");
                (null == e &&
                  ((e = document.createElement("input")).setAttribute(
                    "type",
                    "file",
                  ),
                  e.setAttribute(
                    "accept",
                    this.quill.uploader.options.mimetypes.join(", "),
                  ),
                  e.classList.add("ql-image"),
                  e.addEventListener("change", function () {
                    var n = t.quill.getSelection(!0);
                    (t.quill.uploader.upload(n, e.files), (e.value = ""));
                  }),
                  this.container.appendChild(e)),
                  e.click());
              },
              video: function () {
                this.quill.theme.tooltip.edit("video");
              },
            },
          },
        },
      });
      var Sf = (function (t) {
        function e(t, n) {
          var r;
          return (
            ff(this, e),
            ((r = yf(this, e, [t, n])).textbox =
              r.root.querySelector('input[type="text"]')),
            r.listen(),
            r
          );
        }
        return (
          gf(e, t),
          pf(e, [
            {
              key: "listen",
              value: function () {
                var t = this;
                this.textbox.addEventListener("keydown", function (e) {
                  "Enter" === e.key
                    ? (t.save(), e.preventDefault())
                    : "Escape" === e.key && (t.cancel(), e.preventDefault());
                });
              },
            },
            {
              key: "cancel",
              value: function () {
                (this.hide(), this.restoreFocus());
              },
            },
            {
              key: "edit",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "link",
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                if (
                  (this.root.classList.remove("ql-hidden"),
                  this.root.classList.add("ql-editing"),
                  null != this.textbox)
                ) {
                  null != e
                    ? (this.textbox.value = e)
                    : t !== this.root.getAttribute("data-mode") &&
                      (this.textbox.value = "");
                  var n = this.quill.getBounds(this.quill.selection.savedRange);
                  (null != n && this.position(n),
                    this.textbox.select(),
                    this.textbox.setAttribute(
                      "placeholder",
                      this.textbox.getAttribute("data-".concat(t)) || "",
                    ),
                    this.root.setAttribute("data-mode", t));
                }
              },
            },
            {
              key: "restoreFocus",
              value: function () {
                this.quill.focus({ preventScroll: !0 });
              },
            },
            {
              key: "save",
              value: function () {
                var t = this.textbox.value;
                switch (this.root.getAttribute("data-mode")) {
                  case "link":
                    var e = this.quill.root.scrollTop;
                    (this.linkRange
                      ? (this.quill.formatText(
                          this.linkRange,
                          "link",
                          t,
                          ze.sources.USER,
                        ),
                        delete this.linkRange)
                      : (this.restoreFocus(),
                        this.quill.format("link", t, ze.sources.USER)),
                      (this.quill.root.scrollTop = e));
                    break;
                  case "video":
                    t = (function (t) {
                      var e =
                        t.match(
                          /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/,
                        ) ||
                        t.match(
                          /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,
                        );
                      if (e)
                        return ""
                          .concat(e[1] || "https", "://www.youtube.com/embed/")
                          .concat(e[2], "?showinfo=0");
                      if (
                        (e = t.match(
                          /^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/,
                        ))
                      )
                        return ""
                          .concat(e[1] || "https", "://player.vimeo.com/video/")
                          .concat(e[2], "/");
                      return t;
                    })(t);
                  case "formula":
                    if (!t) break;
                    var n = this.quill.getSelection(!0);
                    if (null != n) {
                      var r = n.index + n.length;
                      (this.quill.insertEmbed(
                        r,
                        this.root.getAttribute("data-mode"),
                        t,
                        ze.sources.USER,
                      ),
                        "formula" === this.root.getAttribute("data-mode") &&
                          this.quill.insertText(r + 1, " ", ze.sources.USER),
                        this.quill.setSelection(r + 2, ze.sources.USER));
                    }
                }
                ((this.textbox.value = ""), this.hide());
              },
            },
          ])
        );
      })(sf);
      function Nf(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e.forEach(function (e) {
          var r = document.createElement("option");
          (e === n
            ? r.setAttribute("selected", "selected")
            : r.setAttribute("value", String(e)),
            t.appendChild(r));
        });
      }
      function Cf(t) {
        return (Cf =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Tf(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function _f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ff(r.key), r));
        }
      }
      function Pf(t, e, n) {
        return (
          e && _f(t.prototype, e),
          n && _f(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Rf(t, e, n) {
        return (
          (e = Bf(e)),
          (function (t, e) {
            if (e && ("object" == Cf(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], Bf(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function qf(t, e, n, r) {
        var o = Df(Bf(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Df() {
        return (Df =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Lf(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Lf(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Bf(t)); );
        return t;
      }
      function Bf(t) {
        return (Bf = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function If(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && Mf(t, e));
      }
      function Mf(t, e) {
        return (Mf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function Ff(t) {
        var e = (function (t, e) {
          if ("object" != Cf(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Cf(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Cf(e) ? e : e + "";
      }
      var Uf = [
          ["bold", "italic", "link"],
          [{ header: 1 }, { header: 2 }, "blockquote"],
        ],
        zf = (function (t) {
          function e(t, n) {
            var r;
            return (
              Tf(this, e),
              (r = Rf(this, e, [t, n])).quill.on(
                ze.events.EDITOR_CHANGE,
                function (t, e, n, o) {
                  if (t === ze.events.SELECTION_CHANGE)
                    if (null != e && e.length > 0 && o === ze.sources.USER) {
                      (r.show(),
                        (r.root.style.left = "0px"),
                        (r.root.style.width = ""),
                        (r.root.style.width = "".concat(
                          r.root.offsetWidth,
                          "px",
                        )));
                      var i = r.quill.getLines(e.index, e.length);
                      if (1 === i.length) {
                        var a = r.quill.getBounds(e);
                        null != a && r.position(a);
                      } else {
                        var u = i[i.length - 1],
                          l = r.quill.getIndex(u),
                          s = Math.min(u.length() - 1, e.index + e.length - l),
                          c = r.quill.getBounds(new Je(l, s));
                        null != c && r.position(c);
                      }
                    } else
                      document.activeElement !== r.textbox &&
                        r.quill.hasFocus() &&
                        r.hide();
                },
              ),
              r
            );
          }
          return (
            If(e, t),
            Pf(e, [
              {
                key: "listen",
                value: function () {
                  var t = this;
                  (qf(e, "listen", this, 3)([]),
                    this.root
                      .querySelector(".ql-close")
                      .addEventListener("click", function () {
                        t.root.classList.remove("ql-editing");
                      }),
                    this.quill.on(ze.events.SCROLL_OPTIMIZE, function () {
                      setTimeout(function () {
                        if (!t.root.classList.contains("ql-hidden")) {
                          var e = t.quill.getSelection();
                          if (null != e) {
                            var n = t.quill.getBounds(e);
                            null != n && t.position(n);
                          }
                        }
                      }, 1);
                    }));
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.show();
                },
              },
              {
                key: "position",
                value: function (t) {
                  var n = qf(e, "position", this, 3)([t]),
                    r = this.root.querySelector(".ql-tooltip-arrow");
                  return (
                    (r.style.marginLeft = ""),
                    0 !== n &&
                      (r.style.marginLeft = "".concat(
                        -1 * n - r.offsetWidth / 2,
                        "px",
                      )),
                    n
                  );
                },
              },
            ])
          );
        })(Sf);
      !(function (t, e, n) {
        (e = Ff(e)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n);
      })(
        zf,
        "TEMPLATE",
        [
          '<span class="ql-tooltip-arrow"></span>',
          '<div class="ql-tooltip-editor">',
          '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
          '<a class="ql-close"></a>',
          "</div>",
        ].join(""),
      );
      var Hf = (function (t) {
        function e(t, n) {
          var r;
          return (
            Tf(this, e),
            null != n.modules.toolbar &&
              null == n.modules.toolbar.container &&
              (n.modules.toolbar.container = Uf),
            (r = Rf(this, e, [t, n])).quill.container.classList.add(
              "ql-bubble",
            ),
            r
          );
        }
        return (
          If(e, t),
          Pf(e, [
            {
              key: "extendToolbar",
              value: function (t) {
                ((this.tooltip = new zf(this.quill, this.options.bounds)),
                  null != t.container &&
                    (this.tooltip.root.appendChild(t.container),
                    this.buildButtons(
                      t.container.querySelectorAll("button"),
                      Rc,
                    ),
                    this.buildPickers(
                      t.container.querySelectorAll("select"),
                      Rc,
                    )));
              },
            },
          ])
        );
      })(jf);
      Hf.DEFAULTS = Object(o.a)({}, jf.DEFAULTS, {
        modules: {
          toolbar: {
            handlers: {
              link: function (t) {
                t
                  ? this.quill.theme.tooltip.edit()
                  : this.quill.format("link", !1, gr.sources.USER);
              },
            },
          },
        },
      });
      n(1618);
      function Vf(t) {
        return (Vf =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Wf(t, e) {
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
              var r,
                o,
                i,
                a,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Kf(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Kf(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Kf(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function $f(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Zf(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, oh(r.key), r));
        }
      }
      function Gf(t, e, n) {
        return (
          e && Zf(t.prototype, e),
          n && Zf(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Yf(t, e, n) {
        return (
          (e = th(e)),
          (function (t, e) {
            if (e && ("object" == Vf(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], th(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function Xf(t, e, n, r) {
        var o = Qf(th(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function Qf() {
        return (Qf =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = Jf(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function Jf(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = th(t)); );
        return t;
      }
      function th(t) {
        return (th = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function eh(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && nh(t, e));
      }
      function nh(t, e) {
        return (nh = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function rh(t, e, n) {
        return (
          (e = oh(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function oh(t) {
        var e = (function (t, e) {
          if ("object" != Vf(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != Vf(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Vf(e) ? e : e + "";
      }
      var ih = [
          [{ header: ["1", "2", "3", !1] }],
          ["bold", "italic", "underline", "link"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
        ],
        ah = (function (t) {
          function e() {
            var t;
            $f(this, e);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              rh(
                (t = Yf(this, e, [].concat(r))),
                "preview",
                t.root.querySelector("a.ql-preview"),
              ),
              t
            );
          }
          return (
            eh(e, t),
            Gf(e, [
              {
                key: "listen",
                value: function () {
                  var t = this;
                  (Xf(e, "listen", this, 3)([]),
                    this.root
                      .querySelector("a.ql-action")
                      .addEventListener("click", function (e) {
                        (t.root.classList.contains("ql-editing")
                          ? t.save()
                          : t.edit("link", t.preview.textContent),
                          e.preventDefault());
                      }),
                    this.root
                      .querySelector("a.ql-remove")
                      .addEventListener("click", function (e) {
                        if (null != t.linkRange) {
                          var n = t.linkRange;
                          (t.restoreFocus(),
                            t.quill.formatText(n, "link", !1, ze.sources.USER),
                            delete t.linkRange);
                        }
                        (e.preventDefault(), t.hide());
                      }),
                    this.quill.on(
                      ze.events.SELECTION_CHANGE,
                      function (e, n, r) {
                        if (null != e) {
                          if (0 === e.length && r === ze.sources.USER) {
                            var o = Wf(
                                t.quill.scroll.descendant(rl, e.index),
                                2,
                              ),
                              i = o[0],
                              a = o[1];
                            if (null != i) {
                              t.linkRange = new Je(e.index - a, i.length());
                              var u = rl.formats(i.domNode);
                              ((t.preview.textContent = u),
                                t.preview.setAttribute("href", u),
                                t.show());
                              var l = t.quill.getBounds(t.linkRange);
                              return void (null != l && t.position(l));
                            }
                          } else delete t.linkRange;
                          t.hide();
                        }
                      },
                    ));
                },
              },
              {
                key: "show",
                value: function () {
                  (Xf(e, "show", this, 3)([]),
                    this.root.removeAttribute("data-mode"));
                },
              },
            ])
          );
        })(Sf);
      rh(
        ah,
        "TEMPLATE",
        [
          '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
          '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
          '<a class="ql-action"></a>',
          '<a class="ql-remove"></a>',
        ].join(""),
      );
      var uh = (function (t) {
        function e(t, n) {
          var r;
          return (
            $f(this, e),
            null != n.modules.toolbar &&
              null == n.modules.toolbar.container &&
              (n.modules.toolbar.container = ih),
            (r = Yf(this, e, [t, n])).quill.container.classList.add("ql-snow"),
            r
          );
        }
        return (
          eh(e, t),
          Gf(e, [
            {
              key: "extendToolbar",
              value: function (t) {
                null != t.container &&
                  (t.container.classList.add("ql-snow"),
                  this.buildButtons(t.container.querySelectorAll("button"), Rc),
                  this.buildPickers(t.container.querySelectorAll("select"), Rc),
                  (this.tooltip = new ah(this.quill, this.options.bounds)),
                  t.container.querySelector(".ql-link") &&
                    this.quill.keyboard.addBinding(
                      { key: "k", shortKey: !0 },
                      function (e, n) {
                        t.handlers.link.call(t, !n.format.link);
                      },
                    ));
              },
            },
          ])
        );
      })(jf);
      uh.DEFAULTS = Object(o.a)({}, jf.DEFAULTS, {
        modules: {
          toolbar: {
            handlers: {
              link: function (t) {
                if (t) {
                  var e = this.quill.getSelection();
                  if (null == e || 0 === e.length) return;
                  var n = this.quill.getText(e);
                  (/^\S+@\S+\.\S+$/.test(n) &&
                    0 !== n.indexOf("mailto:") &&
                    (n = "mailto:".concat(n)),
                    this.quill.theme.tooltip.edit("link", n));
                } else this.quill.format("link", !1, gr.sources.USER);
              },
            },
          },
        },
      });
      var lh = uh;
      (_a.register(
        {
          "attributors/attribute/direction": Po,
          "attributors/class/align": to,
          "attributors/class/background": yo,
          "attributors/class/color": ho,
          "attributors/class/direction": Ro,
          "attributors/class/font": Wo,
          "attributors/class/size": $o,
          "attributors/style/align": eo,
          "attributors/style/background": bo,
          "attributors/style/color": po,
          "attributors/style/direction": qo,
          "attributors/style/font": Ko,
          "attributors/style/size": Zo,
        },
        !0,
      ),
        _a.register(
          {
            "formats/align": to,
            "formats/direction": Ro,
            "formats/indent": za,
            "formats/background": bo,
            "formats/color": po,
            "formats/font": Wo,
            "formats/size": $o,
            "formats/blockquote": Qa,
            "formats/code-block": Co,
            "formats/header": lu,
            "formats/list": Eu,
            "formats/bold": Du,
            "formats/code": To,
            "formats/italic": Wu,
            "formats/link": rl,
            "formats/script": bl,
            "formats/strike": jl,
            "formats/underline": Ll,
            "formats/formula": Zl,
            "formats/image": ls,
            "formats/video": Es,
            "modules/syntax": Hs,
            "modules/table": gc,
            "modules/toolbar": Tc,
            "themes/bubble": Hf,
            "themes/snow": lh,
            "ui/icons": Rc,
            "ui/picker": Mc,
            "ui/icon-picker": of,
            "ui/color-picker": Gc,
            "ui/tooltip": sf,
          },
          !0,
        ));
      e.a = _a;
    },
    1594: function (t, e, n) {
      n(1679);
    },
    1618: function (t, e, n) {
      "use strict";
      var r = n(55),
        o = n(406);
      r(
        { target: "String", proto: !0, forced: n(407)("link") },
        {
          link: function (t) {
            return o(this, "a", "href", t);
          },
        },
      );
    },
    1619: function (t, e, n) {
      "use strict";
      (n(9),
        n(10),
        n(14),
        n(30),
        n(38),
        n(34),
        n(27),
        n(21),
        n(20),
        n(12),
        n(22),
        n(99),
        n(31),
        n(18),
        n(26),
        n(16),
        n(28),
        n(40),
        n(48),
        n(24),
        n(47),
        n(49),
        n(42),
        n(37),
        n(43),
        n(8),
        n(56),
        n(84),
        n(17),
        n(19),
        n(11),
        n(29),
        n(13));
      var r = n(0),
        o = n.n(r),
        i = n(1844),
        a = n(1582);
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function s(t, e, n) {
        return (
          (e = d(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return h(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return h(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? h(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function p(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, d(r.key), r));
        }
      }
      function d(t) {
        var e = (function (t, e) {
          if ("object" != c(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != c(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == c(e) ? e : e + "";
      }
      function y(t, e, n) {
        return (
          (e = b(e)),
          (function (t, e) {
            if (e && ("object" == c(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], b(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function b(t) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function m(t, e) {
        return (m = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      n.d(e, "a", function () {
        return a.a;
      });
      var v = (function (t) {
        function e(t) {
          var n;
          (!(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            ((n = y(this, e, [t])).editingAreaRef = Object(r.createRef)()),
            (n.dirtyProps = [
              "modules",
              "formats",
              "bounds",
              "theme",
              "children",
            ]),
            (n.cleanProps = [
              "id",
              "className",
              "style",
              "placeholder",
              "tabIndex",
              "onChange",
              "onChangeSelection",
              "onFocus",
              "onBlur",
              "onKeyPress",
              "onKeyDown",
              "onKeyUp",
            ]),
            (n.state = { generation: 0 }),
            (n.selection = null),
            (n.onEditorChange = function (t, e, r, o) {
              var i, a;
              if ("text-change" === t)
                null === (i = (a = n).onEditorChangeText) ||
                  void 0 === i ||
                  i.call(
                    a,
                    n.editor.root.innerHTML,
                    e,
                    o,
                    n.unprivilegedEditor,
                  );
              else if ("selection-change" === t) {
                var u, l;
                null === (u = (l = n).onEditorChangeSelection) ||
                  void 0 === u ||
                  u.call(l, e, o, n.unprivilegedEditor);
              }
            }));
          var o = n.isControlled() ? t.value : t.defaultValue;
          return ((n.value = null != o ? o : ""), n);
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && m(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && p(t.prototype, e),
              n && p(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "validateProps",
              value: function (t) {
                if (o.a.Children.count(t.children) > 1)
                  throw new Error(
                    "The Quill editing area can only be composed of a single React element.",
                  );
                if (o.a.Children.count(t.children)) {
                  var e = o.a.Children.only(t.children);
                  if ("textarea" === (null == e ? void 0 : e.type))
                    throw new Error(
                      "Quill does not support editing on a <textarea>. Use a <div> instead.",
                    );
                }
                if (
                  this.lastDeltaChangeSet &&
                  t.value === this.lastDeltaChangeSet
                )
                  throw new Error(
                    "You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas",
                  );
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (t, e) {
                var n = this;
                if (
                  (this.validateProps(t),
                  !this.editor || this.state.generation !== e.generation)
                )
                  return !0;
                if ("value" in t) {
                  var r,
                    o = this.getEditorContents(),
                    a = null !== (r = t.value) && void 0 !== r ? r : "";
                  this.isEqualValue(a, o) ||
                    this.setEditorContents(this.editor, a);
                }
                return (
                  t.readOnly !== this.props.readOnly &&
                    this.setEditorReadOnly(this.editor, t.readOnly),
                  []
                    .concat(f(this.cleanProps), f(this.dirtyProps))
                    .some(function (e) {
                      return !Object(i.a)(t[e], n.props[e]);
                    })
                );
              },
            },
            {
              key: "shouldComponentRegenerate",
              value: function (t) {
                var e = this;
                return this.dirtyProps.some(function (n) {
                  return !Object(i.a)(t[n], e.props[n]);
                });
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                (this.instantiateEditor(),
                  this.setEditorContents(
                    this.editor,
                    this.getEditorContents(),
                  ));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.destroyEditor();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t, e) {
                var n = this;
                if (this.editor && this.shouldComponentRegenerate(t)) {
                  var r = this.editor.getContents(),
                    o = this.editor.getSelection();
                  ((this.regenerationSnapshot = { delta: r, selection: o }),
                    this.setState({ generation: this.state.generation + 1 }),
                    this.destroyEditor());
                }
                if (this.state.generation !== e.generation) {
                  var i = this.regenerationSnapshot,
                    a = i.delta,
                    u = i.selection;
                  (delete this.regenerationSnapshot, this.instantiateEditor());
                  var l = this.editor;
                  (l.setContents(a),
                    g(function () {
                      return n.setEditorSelection(l, u);
                    }));
                }
              },
            },
            {
              key: "instantiateEditor",
              value: function () {
                this.editor
                  ? this.hookEditor(this.editor)
                  : (this.editor = this.createEditor(
                      this.getEditingArea(),
                      this.getEditorConfig(),
                    ));
              },
            },
            {
              key: "destroyEditor",
              value: function () {
                var t;
                if (this.editor) {
                  this.unhookEditor(this.editor);
                  var e =
                    null === (t = this.props.modules) || void 0 === t
                      ? void 0
                      : t.toolbar;
                  if (
                    !(
                      ("object" === c(e) &&
                        e &&
                        "container" in e &&
                        "string" == typeof e.container) ||
                      "string" == typeof e
                    )
                  ) {
                    var n = document.querySelector(".ql-toolbar");
                    n && n.remove();
                  }
                  delete this.editor;
                }
              },
            },
            {
              key: "isControlled",
              value: function () {
                return "value" in this.props;
              },
            },
            {
              key: "getEditorConfig",
              value: function () {
                return {
                  bounds: this.props.bounds,
                  formats: this.props.formats,
                  modules: this.props.modules,
                  placeholder: this.props.placeholder,
                  readOnly: this.props.readOnly,
                  tabIndex: this.props.tabIndex,
                  theme: this.props.theme,
                };
              },
            },
            {
              key: "getEditor",
              value: function () {
                if (!this.editor)
                  throw new Error("Accessing non-instantiated editor");
                return this.editor;
              },
            },
            {
              key: "createEditor",
              value: function (t, e) {
                var n = new a.a(t, e);
                return (
                  null != e.tabIndex && this.setEditorTabIndex(n, e.tabIndex),
                  this.hookEditor(n),
                  n
                );
              },
            },
            {
              key: "hookEditor",
              value: function (t) {
                ((this.unprivilegedEditor = this.makeUnprivilegedEditor(t)),
                  t.on("editor-change", this.onEditorChange));
              },
            },
            {
              key: "unhookEditor",
              value: function (t) {
                t.off("editor-change", this.onEditorChange);
              },
            },
            {
              key: "getEditorContents",
              value: function () {
                return this.value;
              },
            },
            {
              key: "getEditorSelection",
              value: function () {
                return this.selection;
              },
            },
            {
              key: "isDelta",
              value: function (t) {
                return t && t.ops;
              },
            },
            {
              key: "isEqualValue",
              value: function (t, e) {
                return this.isDelta(t) && this.isDelta(e)
                  ? Object(i.a)(t.ops, e.ops)
                  : Object(i.a)(t, e);
              },
            },
            {
              key: "setEditorContents",
              value: function (t, e) {
                var n = this;
                this.value = e;
                var r = this.getEditorSelection();
                ("string" == typeof e
                  ? t.setContents(t.clipboard.convert({ html: e }))
                  : t.setContents(e),
                  g(function () {
                    return n.setEditorSelection(t, r);
                  }));
              },
            },
            {
              key: "setEditorSelection",
              value: function (t, e) {
                if (((this.selection = e), e)) {
                  var n = t.getLength();
                  ((e.index = Math.max(0, Math.min(e.index, n - 1))),
                    (e.length = Math.max(
                      0,
                      Math.min(e.length, n - 1 - e.index),
                    )),
                    t.setSelection(e));
                }
              },
            },
            {
              key: "setEditorTabIndex",
              value: function (t, e) {
                var n;
                null != t &&
                  null !== (n = t.scroll) &&
                  void 0 !== n &&
                  n.domNode &&
                  (t.scroll.domNode.tabIndex = e);
              },
            },
            {
              key: "setEditorReadOnly",
              value: function (t, e) {
                e ? t.disable() : t.enable();
              },
            },
            {
              key: "makeUnprivilegedEditor",
              value: function (t) {
                var e = t;
                return {
                  getHTML: function () {
                    return e.root.innerHTML;
                  },
                  getSemanticHTML: e.getSemanticHTML.bind(e),
                  getLength: e.getLength.bind(e),
                  getText: e.getText.bind(e),
                  getContents: e.getContents.bind(e),
                  getSelection: e.getSelection.bind(e),
                  getBounds: e.getBounds.bind(e),
                };
              },
            },
            {
              key: "getEditingArea",
              value: function () {
                var t = this.editingAreaRef.current;
                if (!t) throw new Error("Cannot find element for editing area");
                if (3 === t.nodeType)
                  throw new Error("Editing area cannot be a text node");
                return t;
              },
            },
            {
              key: "renderEditingArea",
              value: function () {
                var t = this.props,
                  e = t.children,
                  n = t.preserveWhitespace,
                  r = { key: this.state.generation, ref: this.editingAreaRef };
                return o.a.Children.count(e)
                  ? o.a.cloneElement(o.a.Children.only(e), r)
                  : n
                    ? o.a.createElement("pre", l({}, r))
                    : o.a.createElement("div", l({}, r));
              },
            },
            {
              key: "render",
              value: function () {
                var t;
                return o.a.createElement(
                  "div",
                  {
                    id: this.props.id,
                    style: this.props.style,
                    key: this.state.generation,
                    className: "quill ".concat(
                      null !== (t = this.props.className) && void 0 !== t
                        ? t
                        : "",
                    ),
                    onKeyPress: this.props.onKeyPress,
                    onKeyDown: this.props.onKeyDown,
                    onKeyUp: this.props.onKeyUp,
                  },
                  this.renderEditingArea(),
                );
              },
            },
            {
              key: "onEditorChangeText",
              value: function (t, e, n, r) {
                if (this.editor) {
                  var o,
                    i,
                    a = this.isDelta(this.value)
                      ? r.getContents()
                      : r.getHTML();
                  if (a !== this.getEditorContents())
                    ((this.lastDeltaChangeSet = e),
                      (this.value = a),
                      null === (o = (i = this.props).onChange) ||
                        void 0 === o ||
                        o.call(i, t, e, n, r));
                }
              },
            },
            {
              key: "onEditorChangeSelection",
              value: function (t, e, n) {
                var r, o;
                if (this.editor) {
                  var a,
                    u,
                    l = this.getEditorSelection(),
                    s = !l && t,
                    c = l && !t;
                  if (!Object(i.a)(t, l))
                    if (
                      ((this.selection = t),
                      null === (r = (o = this.props).onChangeSelection) ||
                        void 0 === r ||
                        r.call(o, t, e, n),
                      s)
                    )
                      null === (a = (u = this.props).onFocus) ||
                        void 0 === a ||
                        a.call(u, t, e, n);
                    else if (c) {
                      var f, h;
                      null === (f = (h = this.props).onBlur) ||
                        void 0 === f ||
                        f.call(h, l, e, n);
                    }
                }
              },
            },
            {
              key: "focus",
              value: function () {
                this.editor && this.editor.focus();
              },
            },
            {
              key: "blur",
              value: function () {
                this.editor && ((this.selection = null), this.editor.blur());
              },
            },
          ])
        );
      })(o.a.Component);
      function g(t) {
        Promise.resolve().then(t);
      }
      ((v.displayName = "React Quill"),
        (v.Quill = a.a),
        (v.defaultProps = { theme: "snow", modules: {}, readOnly: !1 }),
        (e.b = v));
    },
    1620: function (t, e, n) {
      (function (t, n) {
        var r = "[object Arguments]",
          o = "[object Function]",
          i = "[object GeneratorFunction]",
          a = "[object Map]",
          u = "[object Set]",
          l = /\w*$/,
          s = /^\[object .+?Constructor\]$/,
          c = /^(?:0|[1-9]\d*)$/,
          f = {};
        ((f[r] =
          f["[object Array]"] =
          f["[object ArrayBuffer]"] =
          f["[object DataView]"] =
          f["[object Boolean]"] =
          f["[object Date]"] =
          f["[object Float32Array]"] =
          f["[object Float64Array]"] =
          f["[object Int8Array]"] =
          f["[object Int16Array]"] =
          f["[object Int32Array]"] =
          f[a] =
          f["[object Number]"] =
          f["[object Object]"] =
          f["[object RegExp]"] =
          f[u] =
          f["[object String]"] =
          f["[object Symbol]"] =
          f["[object Uint8Array]"] =
          f["[object Uint8ClampedArray]"] =
          f["[object Uint16Array]"] =
          f["[object Uint32Array]"] =
            !0),
          (f["[object Error]"] = f[o] = f["[object WeakMap]"] = !1));
        var h = "object" == typeof t && t && t.Object === Object && t,
          p = "object" == typeof self && self && self.Object === Object && self,
          d = h || p || Function("return this")(),
          y = e && !e.nodeType && e,
          b = y && "object" == typeof n && n && !n.nodeType && n,
          m = b && b.exports === y;
        function v(t, e) {
          return (t.set(e[0], e[1]), t);
        }
        function g(t, e) {
          return (t.add(e), t);
        }
        function w(t, e, n, r) {
          var o = -1,
            i = t ? t.length : 0;
          for (r && i && (n = t[++o]); ++o < i; ) n = e(n, t[o], o, t);
          return n;
        }
        function O(t) {
          var e = !1;
          if (null != t && "function" != typeof t.toString)
            try {
              e = !!(t + "");
            } catch (t) {}
          return e;
        }
        function E(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t, r) {
              n[++e] = [r, t];
            }),
            n
          );
        }
        function x(t, e) {
          return function (n) {
            return t(e(n));
          };
        }
        function A(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t) {
              n[++e] = t;
            }),
            n
          );
        }
        var k,
          j = Array.prototype,
          S = Function.prototype,
          N = Object.prototype,
          C = d["__core-js_shared__"],
          T = (k = /[^.]+$/.exec((C && C.keys && C.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + k
            : "",
          _ = S.toString,
          P = N.hasOwnProperty,
          R = N.toString,
          q = RegExp(
            "^" +
              _.call(P)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          D = m ? d.Buffer : void 0,
          L = d.Symbol,
          B = d.Uint8Array,
          I = x(Object.getPrototypeOf, Object),
          M = Object.create,
          F = N.propertyIsEnumerable,
          U = j.splice,
          z = Object.getOwnPropertySymbols,
          H = D ? D.isBuffer : void 0,
          V = x(Object.keys, Object),
          W = bt(d, "DataView"),
          K = bt(d, "Map"),
          $ = bt(d, "Promise"),
          Z = bt(d, "Set"),
          G = bt(d, "WeakMap"),
          Y = bt(Object, "create"),
          X = Ot(W),
          Q = Ot(K),
          J = Ot($),
          tt = Ot(Z),
          et = Ot(G),
          nt = L ? L.prototype : void 0,
          rt = nt ? nt.valueOf : void 0;
        function ot(t) {
          var e = -1,
            n = t ? t.length : 0;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function it(t) {
          var e = -1,
            n = t ? t.length : 0;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function at(t) {
          var e = -1,
            n = t ? t.length : 0;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function ut(t) {
          this.__data__ = new it(t);
        }
        function lt(t, e) {
          var n =
              xt(t) ||
              (function (t) {
                return (
                  (function (t) {
                    return (
                      (function (t) {
                        return !!t && "object" == typeof t;
                      })(t) && At(t)
                    );
                  })(t) &&
                  P.call(t, "callee") &&
                  (!F.call(t, "callee") || R.call(t) == r)
                );
              })(t)
                ? (function (t, e) {
                    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                    return r;
                  })(t.length, String)
                : [],
            o = n.length,
            i = !!o;
          for (var a in t)
            (!e && !P.call(t, a)) ||
              (i && ("length" == a || gt(a, o))) ||
              n.push(a);
          return n;
        }
        function st(t, e, n) {
          var r = t[e];
          (P.call(t, e) && Et(r, n) && (void 0 !== n || e in t)) || (t[e] = n);
        }
        function ct(t, e) {
          for (var n = t.length; n--; ) if (Et(t[n][0], e)) return n;
          return -1;
        }
        function ft(t, e, n, s, c, h, p) {
          var d;
          if ((s && (d = h ? s(t, c, h, p) : s(t)), void 0 !== d)) return d;
          if (!St(t)) return t;
          var y = xt(t);
          if (y) {
            if (
              ((d = (function (t) {
                var e = t.length,
                  n = t.constructor(e);
                e &&
                  "string" == typeof t[0] &&
                  P.call(t, "index") &&
                  ((n.index = t.index), (n.input = t.input));
                return n;
              })(t)),
              !e)
            )
              return (function (t, e) {
                var n = -1,
                  r = t.length;
                e || (e = Array(r));
                for (; ++n < r; ) e[n] = t[n];
                return e;
              })(t, d);
          } else {
            var b = vt(t),
              m = b == o || b == i;
            if (kt(t))
              return (function (t, e) {
                if (e) return t.slice();
                var n = new t.constructor(t.length);
                return (t.copy(n), n);
              })(t, e);
            if ("[object Object]" == b || b == r || (m && !h)) {
              if (O(t)) return h ? t : {};
              if (
                ((d = (function (t) {
                  return "function" != typeof t.constructor || wt(t)
                    ? {}
                    : ((e = I(t)), St(e) ? M(e) : {});
                  var e;
                })(m ? {} : t)),
                !e)
              )
                return (function (t, e) {
                  return dt(t, mt(t), e);
                })(
                  t,
                  (function (t, e) {
                    return t && dt(e, Nt(e), t);
                  })(d, t),
                );
            } else {
              if (!f[b]) return h ? t : {};
              d = (function (t, e, n, r) {
                var o = t.constructor;
                switch (e) {
                  case "[object ArrayBuffer]":
                    return pt(t);
                  case "[object Boolean]":
                  case "[object Date]":
                    return new o(+t);
                  case "[object DataView]":
                    return (function (t, e) {
                      var n = e ? pt(t.buffer) : t.buffer;
                      return new t.constructor(n, t.byteOffset, t.byteLength);
                    })(t, r);
                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return (function (t, e) {
                      var n = e ? pt(t.buffer) : t.buffer;
                      return new t.constructor(n, t.byteOffset, t.length);
                    })(t, r);
                  case a:
                    return (function (t, e, n) {
                      return w(e ? n(E(t), !0) : E(t), v, new t.constructor());
                    })(t, r, n);
                  case "[object Number]":
                  case "[object String]":
                    return new o(t);
                  case "[object RegExp]":
                    return (function (t) {
                      var e = new t.constructor(t.source, l.exec(t));
                      return ((e.lastIndex = t.lastIndex), e);
                    })(t);
                  case u:
                    return (function (t, e, n) {
                      return w(e ? n(A(t), !0) : A(t), g, new t.constructor());
                    })(t, r, n);
                  case "[object Symbol]":
                    return ((i = t), rt ? Object(rt.call(i)) : {});
                }
                var i;
              })(t, b, ft, e);
            }
          }
          p || (p = new ut());
          var x = p.get(t);
          if (x) return x;
          if ((p.set(t, d), !y))
            var k = n
              ? (function (t) {
                  return (function (t, e, n) {
                    var r = e(t);
                    return xt(t)
                      ? r
                      : (function (t, e) {
                          for (
                            var n = -1, r = e.length, o = t.length;
                            ++n < r;

                          )
                            t[o + n] = e[n];
                          return t;
                        })(r, n(t));
                  })(t, Nt, mt);
                })(t)
              : Nt(t);
          return (
            (function (t, e) {
              for (
                var n = -1, r = t ? t.length : 0;
                ++n < r && !1 !== e(t[n], n, t);

              );
            })(k || t, function (r, o) {
              (k && (r = t[(o = r)]), st(d, o, ft(r, e, n, s, o, t, p)));
            }),
            d
          );
        }
        function ht(t) {
          return (
            !(!St(t) || ((e = t), T && T in e)) &&
            (jt(t) || O(t) ? q : s).test(Ot(t))
          );
          var e;
        }
        function pt(t) {
          var e = new t.constructor(t.byteLength);
          return (new B(e).set(new B(t)), e);
        }
        function dt(t, e, n, r) {
          n || (n = {});
          for (var o = -1, i = e.length; ++o < i; ) {
            var a = e[o],
              u = r ? r(n[a], t[a], a, n, t) : void 0;
            st(n, a, void 0 === u ? t[a] : u);
          }
          return n;
        }
        function yt(t, e) {
          var n,
            r,
            o = t.__data__;
          return (
            "string" == (r = typeof (n = e)) ||
            "number" == r ||
            "symbol" == r ||
            "boolean" == r
              ? "__proto__" !== n
              : null === n
          )
            ? o["string" == typeof e ? "string" : "hash"]
            : o.map;
        }
        function bt(t, e) {
          var n = (function (t, e) {
            return null == t ? void 0 : t[e];
          })(t, e);
          return ht(n) ? n : void 0;
        }
        ((ot.prototype.clear = function () {
          this.__data__ = Y ? Y(null) : {};
        }),
          (ot.prototype.delete = function (t) {
            return this.has(t) && delete this.__data__[t];
          }),
          (ot.prototype.get = function (t) {
            var e = this.__data__;
            if (Y) {
              var n = e[t];
              return "__lodash_hash_undefined__" === n ? void 0 : n;
            }
            return P.call(e, t) ? e[t] : void 0;
          }),
          (ot.prototype.has = function (t) {
            var e = this.__data__;
            return Y ? void 0 !== e[t] : P.call(e, t);
          }),
          (ot.prototype.set = function (t, e) {
            return (
              (this.__data__[t] =
                Y && void 0 === e ? "__lodash_hash_undefined__" : e),
              this
            );
          }),
          (it.prototype.clear = function () {
            this.__data__ = [];
          }),
          (it.prototype.delete = function (t) {
            var e = this.__data__,
              n = ct(e, t);
            return (
              !(n < 0) && (n == e.length - 1 ? e.pop() : U.call(e, n, 1), !0)
            );
          }),
          (it.prototype.get = function (t) {
            var e = this.__data__,
              n = ct(e, t);
            return n < 0 ? void 0 : e[n][1];
          }),
          (it.prototype.has = function (t) {
            return ct(this.__data__, t) > -1;
          }),
          (it.prototype.set = function (t, e) {
            var n = this.__data__,
              r = ct(n, t);
            return (r < 0 ? n.push([t, e]) : (n[r][1] = e), this);
          }),
          (at.prototype.clear = function () {
            this.__data__ = {
              hash: new ot(),
              map: new (K || it)(),
              string: new ot(),
            };
          }),
          (at.prototype.delete = function (t) {
            return yt(this, t).delete(t);
          }),
          (at.prototype.get = function (t) {
            return yt(this, t).get(t);
          }),
          (at.prototype.has = function (t) {
            return yt(this, t).has(t);
          }),
          (at.prototype.set = function (t, e) {
            return (yt(this, t).set(t, e), this);
          }),
          (ut.prototype.clear = function () {
            this.__data__ = new it();
          }),
          (ut.prototype.delete = function (t) {
            return this.__data__.delete(t);
          }),
          (ut.prototype.get = function (t) {
            return this.__data__.get(t);
          }),
          (ut.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (ut.prototype.set = function (t, e) {
            var n = this.__data__;
            if (n instanceof it) {
              var r = n.__data__;
              if (!K || r.length < 199) return (r.push([t, e]), this);
              n = this.__data__ = new at(r);
            }
            return (n.set(t, e), this);
          }));
        var mt = z
            ? x(z, Object)
            : function () {
                return [];
              },
          vt = function (t) {
            return R.call(t);
          };
        function gt(t, e) {
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ("number" == typeof t || c.test(t)) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        }
        function wt(t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || N);
        }
        function Ot(t) {
          if (null != t) {
            try {
              return _.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        }
        function Et(t, e) {
          return t === e || (t != t && e != e);
        }
        ((W && "[object DataView]" != vt(new W(new ArrayBuffer(1)))) ||
          (K && vt(new K()) != a) ||
          ($ && "[object Promise]" != vt($.resolve())) ||
          (Z && vt(new Z()) != u) ||
          (G && "[object WeakMap]" != vt(new G()))) &&
          (vt = function (t) {
            var e = R.call(t),
              n = "[object Object]" == e ? t.constructor : void 0,
              r = n ? Ot(n) : void 0;
            if (r)
              switch (r) {
                case X:
                  return "[object DataView]";
                case Q:
                  return a;
                case J:
                  return "[object Promise]";
                case tt:
                  return u;
                case et:
                  return "[object WeakMap]";
              }
            return e;
          });
        var xt = Array.isArray;
        function At(t) {
          return (
            null != t &&
            (function (t) {
              return (
                "number" == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            })(t.length) &&
            !jt(t)
          );
        }
        var kt =
          H ||
          function () {
            return !1;
          };
        function jt(t) {
          var e = St(t) ? R.call(t) : "";
          return e == o || e == i;
        }
        function St(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function Nt(t) {
          return At(t)
            ? lt(t)
            : (function (t) {
                if (!wt(t)) return V(t);
                var e = [];
                for (var n in Object(t))
                  P.call(t, n) && "constructor" != n && e.push(n);
                return e;
              })(t);
        }
        n.exports = function (t) {
          return ft(t, !0, !0);
        };
      }).call(this, n(120), n(619)(t));
    },
    1621: function (t, e, n) {
      (function (t, n) {
        var r = "[object Arguments]",
          o = "[object Map]",
          i = "[object Object]",
          a = "[object Set]",
          u = /^\[object .+?Constructor\]$/,
          l = /^(?:0|[1-9]\d*)$/,
          s = {};
        ((s["[object Float32Array]"] =
          s["[object Float64Array]"] =
          s["[object Int8Array]"] =
          s["[object Int16Array]"] =
          s["[object Int32Array]"] =
          s["[object Uint8Array]"] =
          s["[object Uint8ClampedArray]"] =
          s["[object Uint16Array]"] =
          s["[object Uint32Array]"] =
            !0),
          (s[r] =
            s["[object Array]"] =
            s["[object ArrayBuffer]"] =
            s["[object Boolean]"] =
            s["[object DataView]"] =
            s["[object Date]"] =
            s["[object Error]"] =
            s["[object Function]"] =
            s[o] =
            s["[object Number]"] =
            s[i] =
            s["[object RegExp]"] =
            s[a] =
            s["[object String]"] =
            s["[object WeakMap]"] =
              !1));
        var c = "object" == typeof t && t && t.Object === Object && t,
          f = "object" == typeof self && self && self.Object === Object && self,
          h = c || f || Function("return this")(),
          p = e && !e.nodeType && e,
          d = p && "object" == typeof n && n && !n.nodeType && n,
          y = d && d.exports === p,
          b = y && c.process,
          m = (function () {
            try {
              return b && b.binding && b.binding("util");
            } catch (t) {}
          })(),
          v = m && m.isTypedArray;
        function g(t, e) {
          for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
            if (e(t[n], n, t)) return !0;
          return !1;
        }
        function w(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t, r) {
              n[++e] = [r, t];
            }),
            n
          );
        }
        function O(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t) {
              n[++e] = t;
            }),
            n
          );
        }
        var E,
          x,
          A,
          k = Array.prototype,
          j = Function.prototype,
          S = Object.prototype,
          N = h["__core-js_shared__"],
          C = j.toString,
          T = S.hasOwnProperty,
          _ = (E = /[^.]+$/.exec((N && N.keys && N.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + E
            : "",
          P = S.toString,
          R = RegExp(
            "^" +
              C.call(T)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          q = y ? h.Buffer : void 0,
          D = h.Symbol,
          L = h.Uint8Array,
          B = S.propertyIsEnumerable,
          I = k.splice,
          M = D ? D.toStringTag : void 0,
          F = Object.getOwnPropertySymbols,
          U = q ? q.isBuffer : void 0,
          z =
            ((x = Object.keys),
            (A = Object),
            function (t) {
              return x(A(t));
            }),
          H = mt(h, "DataView"),
          V = mt(h, "Map"),
          W = mt(h, "Promise"),
          K = mt(h, "Set"),
          $ = mt(h, "WeakMap"),
          Z = mt(Object, "create"),
          G = Ot(H),
          Y = Ot(V),
          X = Ot(W),
          Q = Ot(K),
          J = Ot($),
          tt = D ? D.prototype : void 0,
          et = tt ? tt.valueOf : void 0;
        function nt(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function rt(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function ot(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function it(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.__data__ = new ot(); ++e < n; ) this.add(t[e]);
        }
        function at(t) {
          var e = (this.__data__ = new rt(t));
          this.size = e.size;
        }
        function ut(t, e) {
          var n = At(t),
            r = !n && xt(t),
            o = !n && !r && kt(t),
            i = !n && !r && !o && Tt(t),
            a = n || r || o || i,
            u = a
              ? (function (t, e) {
                  for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                  return r;
                })(t.length, String)
              : [],
            l = u.length;
          for (var s in t)
            (!e && !T.call(t, s)) ||
              (a &&
                ("length" == s ||
                  (o && ("offset" == s || "parent" == s)) ||
                  (i &&
                    ("buffer" == s ||
                      "byteLength" == s ||
                      "byteOffset" == s)) ||
                  wt(s, l))) ||
              u.push(s);
          return u;
        }
        function lt(t, e) {
          for (var n = t.length; n--; ) if (Et(t[n][0], e)) return n;
          return -1;
        }
        function st(t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : M && M in Object(t)
              ? (function (t) {
                  var e = T.call(t, M),
                    n = t[M];
                  try {
                    t[M] = void 0;
                    var r = !0;
                  } catch (t) {}
                  var o = P.call(t);
                  r && (e ? (t[M] = n) : delete t[M]);
                  return o;
                })(t)
              : (function (t) {
                  return P.call(t);
                })(t);
        }
        function ct(t) {
          return Ct(t) && st(t) == r;
        }
        function ft(t, e, n, u, l) {
          return (
            t === e ||
            (null == t || null == e || (!Ct(t) && !Ct(e))
              ? t != t && e != e
              : (function (t, e, n, u, l, s) {
                  var c = At(t),
                    f = At(e),
                    h = c ? "[object Array]" : gt(t),
                    p = f ? "[object Array]" : gt(e),
                    d = (h = h == r ? i : h) == i,
                    y = (p = p == r ? i : p) == i,
                    b = h == p;
                  if (b && kt(t)) {
                    if (!kt(e)) return !1;
                    ((c = !0), (d = !1));
                  }
                  if (b && !d)
                    return (
                      s || (s = new at()),
                      c || Tt(t)
                        ? dt(t, e, n, u, l, s)
                        : (function (t, e, n, r, i, u, l) {
                            switch (n) {
                              case "[object DataView]":
                                if (
                                  t.byteLength != e.byteLength ||
                                  t.byteOffset != e.byteOffset
                                )
                                  return !1;
                                ((t = t.buffer), (e = e.buffer));
                              case "[object ArrayBuffer]":
                                return !(
                                  t.byteLength != e.byteLength ||
                                  !u(new L(t), new L(e))
                                );
                              case "[object Boolean]":
                              case "[object Date]":
                              case "[object Number]":
                                return Et(+t, +e);
                              case "[object Error]":
                                return (
                                  t.name == e.name && t.message == e.message
                                );
                              case "[object RegExp]":
                              case "[object String]":
                                return t == e + "";
                              case o:
                                var s = w;
                              case a:
                                var c = 1 & r;
                                if ((s || (s = O), t.size != e.size && !c))
                                  return !1;
                                var f = l.get(t);
                                if (f) return f == e;
                                ((r |= 2), l.set(t, e));
                                var h = dt(s(t), s(e), r, i, u, l);
                                return (l.delete(t), h);
                              case "[object Symbol]":
                                if (et) return et.call(t) == et.call(e);
                            }
                            return !1;
                          })(t, e, h, n, u, l, s)
                    );
                  if (!(1 & n)) {
                    var m = d && T.call(t, "__wrapped__"),
                      v = y && T.call(e, "__wrapped__");
                    if (m || v) {
                      var g = m ? t.value() : t,
                        E = v ? e.value() : e;
                      return (s || (s = new at()), l(g, E, n, u, s));
                    }
                  }
                  if (!b) return !1;
                  return (
                    s || (s = new at()),
                    (function (t, e, n, r, o, i) {
                      var a = 1 & n,
                        u = yt(t),
                        l = u.length,
                        s = yt(e).length;
                      if (l != s && !a) return !1;
                      var c = l;
                      for (; c--; ) {
                        var f = u[c];
                        if (!(a ? f in e : T.call(e, f))) return !1;
                      }
                      var h = i.get(t);
                      if (h && i.get(e)) return h == e;
                      var p = !0;
                      (i.set(t, e), i.set(e, t));
                      var d = a;
                      for (; ++c < l; ) {
                        f = u[c];
                        var y = t[f],
                          b = e[f];
                        if (r)
                          var m = a ? r(b, y, f, e, t, i) : r(y, b, f, t, e, i);
                        if (!(void 0 === m ? y === b || o(y, b, n, r, i) : m)) {
                          p = !1;
                          break;
                        }
                        d || (d = "constructor" == f);
                      }
                      if (p && !d) {
                        var v = t.constructor,
                          g = e.constructor;
                        v == g ||
                          !("constructor" in t) ||
                          !("constructor" in e) ||
                          ("function" == typeof v &&
                            v instanceof v &&
                            "function" == typeof g &&
                            g instanceof g) ||
                          (p = !1);
                      }
                      return (i.delete(t), i.delete(e), p);
                    })(t, e, n, u, l, s)
                  );
                })(t, e, n, u, ft, l))
          );
        }
        function ht(t) {
          return (
            !(
              !Nt(t) ||
              (function (t) {
                return !!_ && _ in t;
              })(t)
            ) && (jt(t) ? R : u).test(Ot(t))
          );
        }
        function pt(t) {
          if (
            ((n = (e = t) && e.constructor),
            (r = ("function" == typeof n && n.prototype) || S),
            e !== r)
          )
            return z(t);
          var e,
            n,
            r,
            o = [];
          for (var i in Object(t))
            T.call(t, i) && "constructor" != i && o.push(i);
          return o;
        }
        function dt(t, e, n, r, o, i) {
          var a = 1 & n,
            u = t.length,
            l = e.length;
          if (u != l && !(a && l > u)) return !1;
          var s = i.get(t);
          if (s && i.get(e)) return s == e;
          var c = -1,
            f = !0,
            h = 2 & n ? new it() : void 0;
          for (i.set(t, e), i.set(e, t); ++c < u; ) {
            var p = t[c],
              d = e[c];
            if (r) var y = a ? r(d, p, c, e, t, i) : r(p, d, c, t, e, i);
            if (void 0 !== y) {
              if (y) continue;
              f = !1;
              break;
            }
            if (h) {
              if (
                !g(e, function (t, e) {
                  if (((a = e), !h.has(a) && (p === t || o(p, t, n, r, i))))
                    return h.push(e);
                  var a;
                })
              ) {
                f = !1;
                break;
              }
            } else if (p !== d && !o(p, d, n, r, i)) {
              f = !1;
              break;
            }
          }
          return (i.delete(t), i.delete(e), f);
        }
        function yt(t) {
          return (function (t, e, n) {
            var r = e(t);
            return At(t)
              ? r
              : (function (t, e) {
                  for (var n = -1, r = e.length, o = t.length; ++n < r; )
                    t[o + n] = e[n];
                  return t;
                })(r, n(t));
          })(t, _t, vt);
        }
        function bt(t, e) {
          var n,
            r,
            o = t.__data__;
          return (
            "string" == (r = typeof (n = e)) ||
            "number" == r ||
            "symbol" == r ||
            "boolean" == r
              ? "__proto__" !== n
              : null === n
          )
            ? o["string" == typeof e ? "string" : "hash"]
            : o.map;
        }
        function mt(t, e) {
          var n = (function (t, e) {
            return null == t ? void 0 : t[e];
          })(t, e);
          return ht(n) ? n : void 0;
        }
        ((nt.prototype.clear = function () {
          ((this.__data__ = Z ? Z(null) : {}), (this.size = 0));
        }),
          (nt.prototype.delete = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return ((this.size -= e ? 1 : 0), e);
          }),
          (nt.prototype.get = function (t) {
            var e = this.__data__;
            if (Z) {
              var n = e[t];
              return "__lodash_hash_undefined__" === n ? void 0 : n;
            }
            return T.call(e, t) ? e[t] : void 0;
          }),
          (nt.prototype.has = function (t) {
            var e = this.__data__;
            return Z ? void 0 !== e[t] : T.call(e, t);
          }),
          (nt.prototype.set = function (t, e) {
            var n = this.__data__;
            return (
              (this.size += this.has(t) ? 0 : 1),
              (n[t] = Z && void 0 === e ? "__lodash_hash_undefined__" : e),
              this
            );
          }),
          (rt.prototype.clear = function () {
            ((this.__data__ = []), (this.size = 0));
          }),
          (rt.prototype.delete = function (t) {
            var e = this.__data__,
              n = lt(e, t);
            return (
              !(n < 0) &&
              (n == e.length - 1 ? e.pop() : I.call(e, n, 1), --this.size, !0)
            );
          }),
          (rt.prototype.get = function (t) {
            var e = this.__data__,
              n = lt(e, t);
            return n < 0 ? void 0 : e[n][1];
          }),
          (rt.prototype.has = function (t) {
            return lt(this.__data__, t) > -1;
          }),
          (rt.prototype.set = function (t, e) {
            var n = this.__data__,
              r = lt(n, t);
            return (
              r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e),
              this
            );
          }),
          (ot.prototype.clear = function () {
            ((this.size = 0),
              (this.__data__ = {
                hash: new nt(),
                map: new (V || rt)(),
                string: new nt(),
              }));
          }),
          (ot.prototype.delete = function (t) {
            var e = bt(this, t).delete(t);
            return ((this.size -= e ? 1 : 0), e);
          }),
          (ot.prototype.get = function (t) {
            return bt(this, t).get(t);
          }),
          (ot.prototype.has = function (t) {
            return bt(this, t).has(t);
          }),
          (ot.prototype.set = function (t, e) {
            var n = bt(this, t),
              r = n.size;
            return (n.set(t, e), (this.size += n.size == r ? 0 : 1), this);
          }),
          (it.prototype.add = it.prototype.push =
            function (t) {
              return (this.__data__.set(t, "__lodash_hash_undefined__"), this);
            }),
          (it.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (at.prototype.clear = function () {
            ((this.__data__ = new rt()), (this.size = 0));
          }),
          (at.prototype.delete = function (t) {
            var e = this.__data__,
              n = e.delete(t);
            return ((this.size = e.size), n);
          }),
          (at.prototype.get = function (t) {
            return this.__data__.get(t);
          }),
          (at.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (at.prototype.set = function (t, e) {
            var n = this.__data__;
            if (n instanceof rt) {
              var r = n.__data__;
              if (!V || r.length < 199)
                return (r.push([t, e]), (this.size = ++n.size), this);
              n = this.__data__ = new ot(r);
            }
            return (n.set(t, e), (this.size = n.size), this);
          }));
        var vt = F
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    (function (t, e) {
                      for (
                        var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
                        ++n < r;

                      ) {
                        var a = t[n];
                        e(a, n, t) && (i[o++] = a);
                      }
                      return i;
                    })(F(t), function (e) {
                      return B.call(t, e);
                    }));
              }
            : function () {
                return [];
              },
          gt = st;
        function wt(t, e) {
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ("number" == typeof t || l.test(t)) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        }
        function Ot(t) {
          if (null != t) {
            try {
              return C.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        }
        function Et(t, e) {
          return t === e || (t != t && e != e);
        }
        ((H && "[object DataView]" != gt(new H(new ArrayBuffer(1)))) ||
          (V && gt(new V()) != o) ||
          (W && "[object Promise]" != gt(W.resolve())) ||
          (K && gt(new K()) != a) ||
          ($ && "[object WeakMap]" != gt(new $()))) &&
          (gt = function (t) {
            var e = st(t),
              n = e == i ? t.constructor : void 0,
              r = n ? Ot(n) : "";
            if (r)
              switch (r) {
                case G:
                  return "[object DataView]";
                case Y:
                  return o;
                case X:
                  return "[object Promise]";
                case Q:
                  return a;
                case J:
                  return "[object WeakMap]";
              }
            return e;
          });
        var xt = ct(
            (function () {
              return arguments;
            })(),
          )
            ? ct
            : function (t) {
                return Ct(t) && T.call(t, "callee") && !B.call(t, "callee");
              },
          At = Array.isArray;
        var kt =
          U ||
          function () {
            return !1;
          };
        function jt(t) {
          if (!Nt(t)) return !1;
          var e = st(t);
          return (
            "[object Function]" == e ||
            "[object GeneratorFunction]" == e ||
            "[object AsyncFunction]" == e ||
            "[object Proxy]" == e
          );
        }
        function St(t) {
          return (
            "number" == typeof t &&
            t > -1 &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        }
        function Nt(t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        }
        function Ct(t) {
          return null != t && "object" == typeof t;
        }
        var Tt = v
          ? (function (t) {
              return function (e) {
                return t(e);
              };
            })(v)
          : function (t) {
              return Ct(t) && St(t.length) && !!s[st(t)];
            };
        function _t(t) {
          return null != (e = t) && St(e.length) && !jt(e) ? ut(t) : pt(t);
          var e;
        }
        n.exports = function (t, e) {
          return ft(t, e);
        };
      }).call(this, n(120), n(619)(t));
    },
    1622: function (t, e, n) {
      "use strict";
      var r;
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t) {
          t.length = function (t) {
            return "number" == typeof t.delete
              ? t.delete
              : "number" == typeof t.retain
                ? t.retain
                : "object" == typeof t.retain && null !== t.retain
                  ? 1
                  : "string" == typeof t.insert
                    ? t.insert.length
                    : 1;
          };
        })(r || (r = {})),
        (e.default = r));
    },
    1623: function (t, e, n) {
      "use strict";
      var r = Object.prototype.toString;
      e.a = function (t) {
        return r.call(t);
      };
    },
    1625: function (t, e, n) {
      "use strict";
      var r = n(1604),
        o = Object(r.a)(Object.keys, Object);
      e.a = o;
    },
    1672: function (t, e, n) {
      var r = n(1673),
        o = n(626),
        i = /[&<>"']/g,
        a = RegExp(i.source);
      t.exports = function (t) {
        return (t = o(t)) && a.test(t) ? t.replace(i, r) : t;
      };
    },
    1673: function (t, e, n) {
      var r = n(1674)({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      });
      t.exports = r;
    },
    1674: function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    1675: function (t, e) {
      function n(t, e, p, d, y) {
        if (t === e) return t ? [[0, t]] : [];
        if (null != p) {
          var b = (function (t, e, n) {
            var r = "number" == typeof n ? { index: n, length: 0 } : n.oldRange,
              o = "number" == typeof n ? null : n.newRange,
              i = t.length,
              a = e.length;
            if (0 === r.length && (null === o || 0 === o.length)) {
              var u = r.index,
                l = t.slice(0, u),
                s = t.slice(u),
                c = o ? o.index : null,
                f = u + a - i;
              if ((null === c || c === f) && !(f < 0 || f > a)) {
                var h = e.slice(0, f);
                if ((w = e.slice(f)) === s) {
                  var p = Math.min(u, f),
                    d = l.slice(0, p),
                    y = h.slice(0, p);
                  if (d === y) {
                    var b = l.slice(p),
                      v = h.slice(p);
                    return m(d, b, v, s);
                  }
                }
              }
              if (null === c || c === u) {
                var g = u,
                  w = ((h = e.slice(0, g)), e.slice(g));
                if (h === l) {
                  var O = Math.min(i - g, a - g),
                    E = s.slice(s.length - O),
                    x = w.slice(w.length - O);
                  if (E === x) {
                    ((b = s.slice(0, s.length - O)),
                      (v = w.slice(0, w.length - O)));
                    return m(l, b, v, E);
                  }
                }
              }
            }
            if (r.length > 0 && o && 0 === o.length) {
              ((d = t.slice(0, r.index)),
                (E = t.slice(r.index + r.length)),
                (p = d.length),
                (O = E.length));
              if (!(a < p + O)) {
                ((y = e.slice(0, p)), (x = e.slice(a - O)));
                if (d === y && E === x) {
                  ((b = t.slice(p, i - O)), (v = e.slice(p, a - O)));
                  return m(d, b, v, E);
                }
              }
            }
            return null;
          })(t, e, p);
          if (b) return b;
        }
        var v = o(t, e),
          g = t.substring(0, v);
        v = a((t = t.substring(v)), (e = e.substring(v)));
        var w = t.substring(t.length - v),
          O = (function (t, e) {
            var i;
            if (!t) return [[1, e]];
            if (!e) return [[-1, t]];
            var u = t.length > e.length ? t : e,
              l = t.length > e.length ? e : t,
              s = u.indexOf(l);
            if (-1 !== s)
              return (
                (i = [
                  [1, u.substring(0, s)],
                  [0, l],
                  [1, u.substring(s + l.length)],
                ]),
                t.length > e.length && (i[0][0] = i[2][0] = -1),
                i
              );
            if (1 === l.length)
              return [
                [-1, t],
                [1, e],
              ];
            var c = (function (t, e) {
              var n = t.length > e.length ? t : e,
                r = t.length > e.length ? e : t;
              if (n.length < 4 || 2 * r.length < n.length) return null;
              function i(t, e, n) {
                for (
                  var r,
                    i,
                    u,
                    l,
                    s = t.substring(n, n + Math.floor(t.length / 4)),
                    c = -1,
                    f = "";
                  -1 !== (c = e.indexOf(s, c + 1));

                ) {
                  var h = o(t.substring(n), e.substring(c)),
                    p = a(t.substring(0, n), e.substring(0, c));
                  f.length < p + h &&
                    ((f = e.substring(c - p, c) + e.substring(c, c + h)),
                    (r = t.substring(0, n - p)),
                    (i = t.substring(n + h)),
                    (u = e.substring(0, c - p)),
                    (l = e.substring(c + h)));
                }
                return 2 * f.length >= t.length ? [r, i, u, l, f] : null;
              }
              var u,
                l,
                s,
                c,
                f,
                h = i(n, r, Math.ceil(n.length / 4)),
                p = i(n, r, Math.ceil(n.length / 2));
              if (!h && !p) return null;
              u = p ? (h && h[4].length > p[4].length ? h : p) : h;
              t.length > e.length
                ? ((l = u[0]), (s = u[1]), (c = u[2]), (f = u[3]))
                : ((c = u[0]), (f = u[1]), (l = u[2]), (s = u[3]));
              var d = u[4];
              return [l, s, c, f, d];
            })(t, e);
            if (c) {
              var f = c[0],
                h = c[1],
                p = c[2],
                d = c[3],
                y = c[4],
                b = n(f, p),
                m = n(h, d);
              return b.concat([[0, y]], m);
            }
            return (function (t, e) {
              for (
                var n = t.length,
                  o = e.length,
                  i = Math.ceil((n + o) / 2),
                  a = i,
                  u = 2 * i,
                  l = new Array(u),
                  s = new Array(u),
                  c = 0;
                c < u;
                c++
              )
                ((l[c] = -1), (s[c] = -1));
              ((l[a + 1] = 0), (s[a + 1] = 0));
              for (
                var f = n - o,
                  h = f % 2 != 0,
                  p = 0,
                  d = 0,
                  y = 0,
                  b = 0,
                  m = 0;
                m < i;
                m++
              ) {
                for (var v = -m + p; v <= m - d; v += 2) {
                  for (
                    var g = a + v,
                      w =
                        (k =
                          v === -m || (v !== m && l[g - 1] < l[g + 1])
                            ? l[g + 1]
                            : l[g - 1] + 1) - v;
                    k < n && w < o && t.charAt(k) === e.charAt(w);

                  )
                    (k++, w++);
                  if (((l[g] = k), k > n)) d += 2;
                  else if (w > o) p += 2;
                  else if (h) {
                    if ((x = a + f - v) >= 0 && x < u && -1 !== s[x]) {
                      var O = n - s[x];
                      if (k >= O) return r(t, e, k, w);
                    }
                  }
                }
                for (var E = -m + y; E <= m - b; E += 2) {
                  for (
                    var x = a + E,
                      A =
                        (O =
                          E === -m || (E !== m && s[x - 1] < s[x + 1])
                            ? s[x + 1]
                            : s[x - 1] + 1) - E;
                    O < n &&
                    A < o &&
                    t.charAt(n - O - 1) === e.charAt(o - A - 1);

                  )
                    (O++, A++);
                  if (((s[x] = O), O > n)) b += 2;
                  else if (A > o) y += 2;
                  else if (!h) {
                    if ((g = a + f - E) >= 0 && g < u && -1 !== l[g]) {
                      var k = l[g];
                      w = a + k - g;
                      if (k >= (O = n - O)) return r(t, e, k, w);
                    }
                  }
                }
              }
              return [
                [-1, t],
                [1, e],
              ];
            })(t, e);
          })(
            (t = t.substring(0, t.length - v)),
            (e = e.substring(0, e.length - v)),
          );
        return (
          g && O.unshift([0, g]),
          w && O.push([0, w]),
          h(O, y),
          d &&
            (function (t) {
              var e = !1,
                n = [],
                r = 0,
                o = null,
                p = 0,
                d = 0,
                y = 0,
                b = 0,
                m = 0;
              for (; p < t.length; )
                (0 == t[p][0]
                  ? ((n[r++] = p),
                    (d = b),
                    (y = m),
                    (b = 0),
                    (m = 0),
                    (o = t[p][1]))
                  : (1 == t[p][0]
                      ? (b += t[p][1].length)
                      : (m += t[p][1].length),
                    o &&
                      o.length <= Math.max(d, y) &&
                      o.length <= Math.max(b, m) &&
                      (t.splice(n[r - 1], 0, [-1, o]),
                      (t[n[r - 1] + 1][0] = 1),
                      r--,
                      r--,
                      (p = r > 0 ? n[r - 1] : -1),
                      (d = 0),
                      (y = 0),
                      (b = 0),
                      (m = 0),
                      (o = null),
                      (e = !0))),
                  p++);
              e && h(t);
              ((function (t) {
                function e(t, e) {
                  if (!t || !e) return 6;
                  var n = t.charAt(t.length - 1),
                    r = e.charAt(0),
                    o = n.match(u),
                    i = r.match(u),
                    a = o && n.match(l),
                    h = i && r.match(l),
                    p = a && n.match(s),
                    d = h && r.match(s),
                    y = p && t.match(c),
                    b = d && e.match(f);
                  return y || b
                    ? 5
                    : p || d
                      ? 4
                      : o && !a && h
                        ? 3
                        : a || h
                          ? 2
                          : o || i
                            ? 1
                            : 0;
                }
                var n = 1;
                for (; n < t.length - 1; ) {
                  if (0 == t[n - 1][0] && 0 == t[n + 1][0]) {
                    var r = t[n - 1][1],
                      o = t[n][1],
                      i = t[n + 1][1],
                      h = a(r, o);
                    if (h) {
                      var p = o.substring(o.length - h);
                      ((r = r.substring(0, r.length - h)),
                        (o = p + o.substring(0, o.length - h)),
                        (i = p + i));
                    }
                    for (
                      var d = r, y = o, b = i, m = e(r, o) + e(o, i);
                      o.charAt(0) === i.charAt(0);

                    ) {
                      ((r += o.charAt(0)),
                        (o = o.substring(1) + i.charAt(0)),
                        (i = i.substring(1)));
                      var v = e(r, o) + e(o, i);
                      v >= m && ((m = v), (d = r), (y = o), (b = i));
                    }
                    t[n - 1][1] != d &&
                      (d ? (t[n - 1][1] = d) : (t.splice(n - 1, 1), n--),
                      (t[n][1] = y),
                      b ? (t[n + 1][1] = b) : (t.splice(n + 1, 1), n--));
                  }
                  n++;
                }
              })(t),
                (p = 1));
              for (; p < t.length; ) {
                if (-1 == t[p - 1][0] && 1 == t[p][0]) {
                  var v = t[p - 1][1],
                    g = t[p][1],
                    w = i(v, g),
                    O = i(g, v);
                  (w >= O
                    ? (w >= v.length / 2 || w >= g.length / 2) &&
                      (t.splice(p, 0, [0, g.substring(0, w)]),
                      (t[p - 1][1] = v.substring(0, v.length - w)),
                      (t[p + 1][1] = g.substring(w)),
                      p++)
                    : (O >= v.length / 2 || O >= g.length / 2) &&
                      (t.splice(p, 0, [0, v.substring(0, O)]),
                      (t[p - 1][0] = 1),
                      (t[p - 1][1] = g.substring(0, g.length - O)),
                      (t[p + 1][0] = -1),
                      (t[p + 1][1] = v.substring(O)),
                      p++),
                    p++);
                }
                p++;
              }
            })(O),
          O
        );
      }
      function r(t, e, r, o) {
        var i = t.substring(0, r),
          a = e.substring(0, o),
          u = t.substring(r),
          l = e.substring(o),
          s = n(i, a),
          c = n(u, l);
        return s.concat(c);
      }
      function o(t, e) {
        if (!t || !e || t.charAt(0) !== e.charAt(0)) return 0;
        for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o; )
          (t.substring(i, o) == e.substring(i, o) ? (i = n = o) : (r = o),
            (o = Math.floor((r - n) / 2 + n)));
        return (p(t.charCodeAt(o - 1)) && o--, o);
      }
      function i(t, e) {
        var n = t.length,
          r = e.length;
        if (0 == n || 0 == r) return 0;
        n > r ? (t = t.substring(n - r)) : n < r && (e = e.substring(0, n));
        var o = Math.min(n, r);
        if (t == e) return o;
        for (var i = 0, a = 1; ; ) {
          var u = t.substring(o - a),
            l = e.indexOf(u);
          if (-1 == l) return i;
          ((a += l),
            (0 != l && t.substring(o - a) != e.substring(0, a)) ||
              ((i = a), a++));
        }
      }
      function a(t, e) {
        if (!t || !e || t.slice(-1) !== e.slice(-1)) return 0;
        for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o; )
          (t.substring(t.length - o, t.length - i) ==
          e.substring(e.length - o, e.length - i)
            ? (i = n = o)
            : (r = o),
            (o = Math.floor((r - n) / 2 + n)));
        return (d(t.charCodeAt(t.length - o)) && o--, o);
      }
      var u = /[^a-zA-Z0-9]/,
        l = /\s/,
        s = /[\r\n]/,
        c = /\n\r?\n$/,
        f = /^\r?\n\r?\n/;
      function h(t, e) {
        t.push([0, ""]);
        for (var n, r = 0, i = 0, u = 0, l = "", s = ""; r < t.length; )
          if (r < t.length - 1 && !t[r][1]) t.splice(r, 1);
          else
            switch (t[r][0]) {
              case 1:
                (u++, (s += t[r][1]), r++);
                break;
              case -1:
                (i++, (l += t[r][1]), r++);
                break;
              case 0:
                var c = r - u - i - 1;
                if (e) {
                  if (c >= 0 && b(t[c][1])) {
                    var f = t[c][1].slice(-1);
                    if (
                      ((t[c][1] = t[c][1].slice(0, -1)),
                      (l = f + l),
                      (s = f + s),
                      !t[c][1])
                    ) {
                      (t.splice(c, 1), r--);
                      var p = c - 1;
                      (t[p] && 1 === t[p][0] && (u++, (s = t[p][1] + s), p--),
                        t[p] && -1 === t[p][0] && (i++, (l = t[p][1] + l), p--),
                        (c = p));
                    }
                  }
                  if (y(t[r][1])) {
                    f = t[r][1].charAt(0);
                    ((t[r][1] = t[r][1].slice(1)), (l += f), (s += f));
                  }
                }
                if (r < t.length - 1 && !t[r][1]) {
                  t.splice(r, 1);
                  break;
                }
                if (l.length > 0 || s.length > 0) {
                  l.length > 0 &&
                    s.length > 0 &&
                    (0 !== (n = o(s, l)) &&
                      (c >= 0
                        ? (t[c][1] += s.substring(0, n))
                        : (t.splice(0, 0, [0, s.substring(0, n)]), r++),
                      (s = s.substring(n)),
                      (l = l.substring(n))),
                    0 !== (n = a(s, l)) &&
                      ((t[r][1] = s.substring(s.length - n) + t[r][1]),
                      (s = s.substring(0, s.length - n)),
                      (l = l.substring(0, l.length - n))));
                  var d = u + i;
                  0 === l.length && 0 === s.length
                    ? (t.splice(r - d, d), (r -= d))
                    : 0 === l.length
                      ? (t.splice(r - d, d, [1, s]), (r = r - d + 1))
                      : 0 === s.length
                        ? (t.splice(r - d, d, [-1, l]), (r = r - d + 1))
                        : (t.splice(r - d, d, [-1, l], [1, s]),
                          (r = r - d + 2));
                }
                (0 !== r && 0 === t[r - 1][0]
                  ? ((t[r - 1][1] += t[r][1]), t.splice(r, 1))
                  : r++,
                  (u = 0),
                  (i = 0),
                  (l = ""),
                  (s = ""));
            }
        "" === t[t.length - 1][1] && t.pop();
        var m = !1;
        for (r = 1; r < t.length - 1; )
          (0 === t[r - 1][0] &&
            0 === t[r + 1][0] &&
            (t[r][1].substring(t[r][1].length - t[r - 1][1].length) ===
            t[r - 1][1]
              ? ((t[r][1] =
                  t[r - 1][1] +
                  t[r][1].substring(0, t[r][1].length - t[r - 1][1].length)),
                (t[r + 1][1] = t[r - 1][1] + t[r + 1][1]),
                t.splice(r - 1, 1),
                (m = !0))
              : t[r][1].substring(0, t[r + 1][1].length) == t[r + 1][1] &&
                ((t[r - 1][1] += t[r + 1][1]),
                (t[r][1] = t[r][1].substring(t[r + 1][1].length) + t[r + 1][1]),
                t.splice(r + 1, 1),
                (m = !0))),
            r++);
        m && h(t, e);
      }
      function p(t) {
        return t >= 55296 && t <= 56319;
      }
      function d(t) {
        return t >= 56320 && t <= 57343;
      }
      function y(t) {
        return d(t.charCodeAt(0));
      }
      function b(t) {
        return p(t.charCodeAt(t.length - 1));
      }
      function m(t, e, n, r) {
        return b(t) || y(r)
          ? null
          : (function (t) {
              for (var e = [], n = 0; n < t.length; n++)
                t[n][1].length > 0 && e.push(t[n]);
              return e;
            })([
              [0, t],
              [-1, e],
              [1, n],
              [0, r],
            ]);
      }
      function v(t, e, r, o) {
        return n(t, e, r, o, !0);
      }
      ((v.INSERT = 1), (v.DELETE = -1), (v.EQUAL = 0), (t.exports = v));
    },
    1676: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const r = n(1620),
        o = n(1621);
      var i;
      (!(function (t) {
        ((t.compose = function (t = {}, e = {}, n = !1) {
          ("object" != typeof t && (t = {}), "object" != typeof e && (e = {}));
          let o = r(e);
          n ||
            (o = Object.keys(o).reduce(
              (t, e) => (null != o[e] && (t[e] = o[e]), t),
              {},
            ));
          for (const n in t)
            void 0 !== t[n] && void 0 === e[n] && (o[n] = t[n]);
          return Object.keys(o).length > 0 ? o : void 0;
        }),
          (t.diff = function (t = {}, e = {}) {
            ("object" != typeof t && (t = {}),
              "object" != typeof e && (e = {}));
            const n = Object.keys(t)
              .concat(Object.keys(e))
              .reduce(
                (n, r) => (
                  o(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]),
                  n
                ),
                {},
              );
            return Object.keys(n).length > 0 ? n : void 0;
          }),
          (t.invert = function (t = {}, e = {}) {
            t = t || {};
            const n = Object.keys(e).reduce(
              (n, r) => (e[r] !== t[r] && void 0 !== t[r] && (n[r] = e[r]), n),
              {},
            );
            return Object.keys(t).reduce(
              (n, r) => (t[r] !== e[r] && void 0 === e[r] && (n[r] = null), n),
              n,
            );
          }),
          (t.transform = function (t, e, n = !1) {
            if ("object" != typeof t) return e;
            if ("object" != typeof e) return;
            if (!n) return e;
            const r = Object.keys(e).reduce(
              (n, r) => (void 0 === t[r] && (n[r] = e[r]), n),
              {},
            );
            return Object.keys(r).length > 0 ? r : void 0;
          }));
      })(i || (i = {})),
        (e.default = i));
    },
    1677: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const r = n(1622);
      e.default = class {
        constructor(t) {
          ((this.ops = t), (this.index = 0), (this.offset = 0));
        }
        hasNext() {
          return this.peekLength() < 1 / 0;
        }
        next(t) {
          t || (t = 1 / 0);
          const e = this.ops[this.index];
          if (e) {
            const n = this.offset,
              o = r.default.length(e);
            if (
              (t >= o - n
                ? ((t = o - n), (this.index += 1), (this.offset = 0))
                : (this.offset += t),
              "number" == typeof e.delete)
            )
              return { delete: t };
            {
              const r = {};
              return (
                e.attributes && (r.attributes = e.attributes),
                "number" == typeof e.retain
                  ? (r.retain = t)
                  : "object" == typeof e.retain && null !== e.retain
                    ? (r.retain = e.retain)
                    : "string" == typeof e.insert
                      ? (r.insert = e.insert.substr(n, t))
                      : (r.insert = e.insert),
                r
              );
            }
          }
          return { retain: 1 / 0 };
        }
        peek() {
          return this.ops[this.index];
        }
        peekLength() {
          return this.ops[this.index]
            ? r.default.length(this.ops[this.index]) - this.offset
            : 1 / 0;
        }
        peekType() {
          const t = this.ops[this.index];
          return t
            ? "number" == typeof t.delete
              ? "delete"
              : "number" == typeof t.retain ||
                  ("object" == typeof t.retain && null !== t.retain)
                ? "retain"
                : "insert"
            : "retain";
        }
        rest() {
          if (this.hasNext()) {
            if (0 === this.offset) return this.ops.slice(this.index);
            {
              const t = this.offset,
                e = this.index,
                n = this.next(),
                r = this.ops.slice(this.index);
              return ((this.offset = t), (this.index = e), [n].concat(r));
            }
          }
          return [];
        }
      };
    },
    1678: function (t, e, n) {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        o = "~";
      function i() {}
      function a(t, e, n) {
        ((this.fn = t), (this.context = e), (this.once = n || !1));
      }
      function u(t, e, n, r, i) {
        if ("function" != typeof n)
          throw new TypeError("The listener must be a function");
        var u = new a(n, r || t, i),
          l = o ? o + e : e;
        return (
          t._events[l]
            ? t._events[l].fn
              ? (t._events[l] = [t._events[l], u])
              : t._events[l].push(u)
            : ((t._events[l] = u), t._eventsCount++),
          t
        );
      }
      function l(t, e) {
        0 == --t._eventsCount ? (t._events = new i()) : delete t._events[e];
      }
      function s() {
        ((this._events = new i()), (this._eventsCount = 0));
      }
      (Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
        (s.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(o ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (s.prototype.listeners = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, i = n.length, a = new Array(i); r < i; r++)
            a[r] = n[r].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (s.prototype.emit = function (t, e, n, r, i, a) {
          var u = o ? o + t : t;
          if (!this._events[u]) return !1;
          var l,
            s,
            c = this._events[u],
            f = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(t, c.fn, void 0, !0), f)) {
              case 1:
                return (c.fn.call(c.context), !0);
              case 2:
                return (c.fn.call(c.context, e), !0);
              case 3:
                return (c.fn.call(c.context, e, n), !0);
              case 4:
                return (c.fn.call(c.context, e, n, r), !0);
              case 5:
                return (c.fn.call(c.context, e, n, r, i), !0);
              case 6:
                return (c.fn.call(c.context, e, n, r, i, a), !0);
            }
            for (s = 1, l = new Array(f - 1); s < f; s++)
              l[s - 1] = arguments[s];
            c.fn.apply(c.context, l);
          } else {
            var h,
              p = c.length;
            for (s = 0; s < p; s++)
              switch (
                (c[s].once && this.removeListener(t, c[s].fn, void 0, !0), f)
              ) {
                case 1:
                  c[s].fn.call(c[s].context);
                  break;
                case 2:
                  c[s].fn.call(c[s].context, e);
                  break;
                case 3:
                  c[s].fn.call(c[s].context, e, n);
                  break;
                case 4:
                  c[s].fn.call(c[s].context, e, n, r);
                  break;
                default:
                  if (!l)
                    for (h = 1, l = new Array(f - 1); h < f; h++)
                      l[h - 1] = arguments[h];
                  c[s].fn.apply(c[s].context, l);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (t, e, n) {
          return u(this, t, e, n, !1);
        }),
        (s.prototype.once = function (t, e, n) {
          return u(this, t, e, n, !0);
        }),
        (s.prototype.removeListener = function (t, e, n, r) {
          var i = o ? o + t : t;
          if (!this._events[i]) return this;
          if (!e) return (l(this, i), this);
          var a = this._events[i];
          if (a.fn)
            a.fn !== e ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              l(this, i);
          else {
            for (var u = 0, s = [], c = a.length; u < c; u++)
              (a[u].fn !== e ||
                (r && !a[u].once) ||
                (n && a[u].context !== n)) &&
                s.push(a[u]);
            s.length
              ? (this._events[i] = 1 === s.length ? s[0] : s)
              : l(this, i);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = o ? o + t : t), this._events[e] && l(this, e))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = o),
        (s.EventEmitter = s),
        (t.exports = s));
    },
    1679: function (t, e, n) {
      "use strict";
      var r,
        o = n(52),
        i = n(70),
        a = n(376),
        u = n(474),
        l = n(477),
        s = n(1680),
        c = n(101),
        f = n(624),
        h = n(143).enforce,
        p = n(622),
        d = !o.ActiveXObject && "ActiveXObject" in o,
        y = function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        b = l("WeakMap", y, s);
      if (p && d) {
        ((r = s.getConstructor(y, "WeakMap", !0)), u.enable());
        var m = b.prototype,
          v = i(m.delete),
          g = i(m.has),
          w = i(m.get),
          O = i(m.set);
        a(m, {
          delete: function (t) {
            if (c(t) && !f(t)) {
              var e = h(this);
              return (
                e.frozen || (e.frozen = new r()),
                v(this, t) || e.frozen.delete(t)
              );
            }
            return v(this, t);
          },
          has: function (t) {
            if (c(t) && !f(t)) {
              var e = h(this);
              return (
                e.frozen || (e.frozen = new r()),
                g(this, t) || e.frozen.has(t)
              );
            }
            return g(this, t);
          },
          get: function (t) {
            if (c(t) && !f(t)) {
              var e = h(this);
              return (
                e.frozen || (e.frozen = new r()),
                g(this, t) ? w(this, t) : e.frozen.get(t)
              );
            }
            return w(this, t);
          },
          set: function (t, e) {
            if (c(t) && !f(t)) {
              var n = h(this);
              (n.frozen || (n.frozen = new r()),
                g(this, t) ? O(this, t, e) : n.frozen.set(t, e));
            } else O(this, t, e);
            return this;
          },
        });
      }
    },
    1680: function (t, e, n) {
      "use strict";
      var r = n(70),
        o = n(376),
        i = n(474).getWeakData,
        a = n(100),
        u = n(101),
        l = n(207),
        s = n(268),
        c = n(121),
        f = n(95),
        h = n(143),
        p = h.set,
        d = h.getterFor,
        y = c.find,
        b = c.findIndex,
        m = r([].splice),
        v = 0,
        g = function (t) {
          return t.frozen || (t.frozen = new w());
        },
        w = function () {
          this.entries = [];
        },
        O = function (t, e) {
          return y(t.entries, function (t) {
            return t[0] === e;
          });
        };
      ((w.prototype = {
        get: function (t) {
          var e = O(this, t);
          if (e) return e[1];
        },
        has: function (t) {
          return !!O(this, t);
        },
        set: function (t, e) {
          var n = O(this, t);
          n ? (n[1] = e) : this.entries.push([t, e]);
        },
        delete: function (t) {
          var e = b(this.entries, function (e) {
            return e[0] === t;
          });
          return (~e && m(this.entries, e, 1), !!~e);
        },
      }),
        (t.exports = {
          getConstructor: function (t, e, n, r) {
            var c = t(function (t, o) {
                (l(t, h),
                  p(t, { type: e, id: v++, frozen: void 0 }),
                  null != o && s(o, t[r], { that: t, AS_ENTRIES: n }));
              }),
              h = c.prototype,
              y = d(e),
              b = function (t, e, n) {
                var r = y(t),
                  o = i(a(e), !0);
                return (!0 === o ? g(r).set(e, n) : (o[r.id] = n), t);
              };
            return (
              o(h, {
                delete: function (t) {
                  var e = y(this);
                  if (!u(t)) return !1;
                  var n = i(t);
                  return !0 === n
                    ? g(e).delete(t)
                    : n && f(n, e.id) && delete n[e.id];
                },
                has: function (t) {
                  var e = y(this);
                  if (!u(t)) return !1;
                  var n = i(t);
                  return !0 === n ? g(e).has(t) : n && f(n, e.id);
                },
              }),
              o(
                h,
                n
                  ? {
                      get: function (t) {
                        var e = y(this);
                        if (u(t)) {
                          var n = i(t);
                          return !0 === n ? g(e).get(t) : n ? n[e.id] : void 0;
                        }
                      },
                      set: function (t, e) {
                        return b(this, t, e);
                      },
                    }
                  : {
                      add: function (t) {
                        return b(this, t, !0);
                      },
                    },
              ),
              c
            );
          },
        }));
    },
    1681: function (t, e, n) {
      var r = n(55),
        o = n(52),
        i = n(623),
        a = n(145),
        u = n(308),
        l = n(307),
        s = o.process;
      r(
        { global: !0, enumerable: !0, noTargetGet: !0 },
        {
          queueMicrotask: function (t) {
            (u(arguments.length, 1), a(t));
            var e = l && s.domain;
            i(e ? e.bind(t) : t);
          },
        },
      );
    },
    1690: function (t, e, n) {
      /*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
      t.exports = (function () {
        "use strict";
        const {
          entries: t,
          setPrototypeOf: e,
          isFrozen: n,
          getPrototypeOf: r,
          getOwnPropertyDescriptor: o,
        } = Object;
        let { freeze: i, seal: a, create: u } = Object,
          { apply: l, construct: s } = "undefined" != typeof Reflect && Reflect;
        (i ||
          (i = function (t) {
            return t;
          }),
          a ||
            (a = function (t) {
              return t;
            }),
          l ||
            (l = function (t, e, n) {
              return t.apply(e, n);
            }),
          s ||
            (s = function (t, e) {
              return new t(...e);
            }));
        const c = k(Array.prototype.forEach),
          f = k(Array.prototype.lastIndexOf),
          h = k(Array.prototype.pop),
          p = k(Array.prototype.push),
          d = k(Array.prototype.splice),
          y = k(String.prototype.toLowerCase),
          b = k(String.prototype.toString),
          m = k(String.prototype.match),
          v = k(String.prototype.replace),
          g = k(String.prototype.indexOf),
          w = k(String.prototype.trim),
          O = k(Object.prototype.hasOwnProperty),
          E = k(RegExp.prototype.test),
          x =
            ((A = TypeError),
            function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return s(A, e);
            });
        var A;
        function k(t) {
          return function (e) {
            e instanceof RegExp && (e.lastIndex = 0);
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return l(t, e, r);
          };
        }
        function j(t, r) {
          let o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y;
          e && e(t, null);
          let i = r.length;
          for (; i--; ) {
            let e = r[i];
            if ("string" == typeof e) {
              const t = o(e);
              t !== e && (n(r) || (r[i] = t), (e = t));
            }
            t[e] = !0;
          }
          return t;
        }
        function S(t) {
          for (let e = 0; e < t.length; e++) O(t, e) || (t[e] = null);
          return t;
        }
        function N(e) {
          const n = u(null);
          for (const [r, o] of t(e))
            O(e, r) &&
              (Array.isArray(o)
                ? (n[r] = S(o))
                : o && "object" == typeof o && o.constructor === Object
                  ? (n[r] = N(o))
                  : (n[r] = o));
          return n;
        }
        function C(t, e) {
          for (; null !== t; ) {
            const n = o(t, e);
            if (n) {
              if (n.get) return k(n.get);
              if ("function" == typeof n.value) return k(n.value);
            }
            t = r(t);
          }
          return function () {
            return null;
          };
        }
        const T = i([
            "a",
            "abbr",
            "acronym",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "bdi",
            "bdo",
            "big",
            "blink",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "cite",
            "code",
            "col",
            "colgroup",
            "content",
            "data",
            "datalist",
            "dd",
            "decorator",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "element",
            "em",
            "fieldset",
            "figcaption",
            "figure",
            "font",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meter",
            "nav",
            "nobr",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "section",
            "select",
            "shadow",
            "small",
            "source",
            "spacer",
            "span",
            "strike",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
          ]),
          _ = i([
            "svg",
            "a",
            "altglyph",
            "altglyphdef",
            "altglyphitem",
            "animatecolor",
            "animatemotion",
            "animatetransform",
            "circle",
            "clippath",
            "defs",
            "desc",
            "ellipse",
            "filter",
            "font",
            "g",
            "glyph",
            "glyphref",
            "hkern",
            "image",
            "line",
            "lineargradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialgradient",
            "rect",
            "stop",
            "style",
            "switch",
            "symbol",
            "text",
            "textpath",
            "title",
            "tref",
            "tspan",
            "view",
            "vkern",
          ]),
          P = i([
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feDropShadow",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
          ]),
          R = i([
            "animate",
            "color-profile",
            "cursor",
            "discard",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignobject",
            "hatch",
            "hatchpath",
            "mesh",
            "meshgradient",
            "meshpatch",
            "meshrow",
            "missing-glyph",
            "script",
            "set",
            "solidcolor",
            "unknown",
            "use",
          ]),
          q = i([
            "math",
            "menclose",
            "merror",
            "mfenced",
            "mfrac",
            "mglyph",
            "mi",
            "mlabeledtr",
            "mmultiscripts",
            "mn",
            "mo",
            "mover",
            "mpadded",
            "mphantom",
            "mroot",
            "mrow",
            "ms",
            "mspace",
            "msqrt",
            "mstyle",
            "msub",
            "msup",
            "msubsup",
            "mtable",
            "mtd",
            "mtext",
            "mtr",
            "munder",
            "munderover",
            "mprescripts",
          ]),
          D = i([
            "maction",
            "maligngroup",
            "malignmark",
            "mlongdiv",
            "mscarries",
            "mscarry",
            "msgroup",
            "mstack",
            "msline",
            "msrow",
            "semantics",
            "annotation",
            "annotation-xml",
            "mprescripts",
            "none",
          ]),
          L = i(["#text"]),
          B = i([
            "accept",
            "action",
            "align",
            "alt",
            "autocapitalize",
            "autocomplete",
            "autopictureinpicture",
            "autoplay",
            "background",
            "bgcolor",
            "border",
            "capture",
            "cellpadding",
            "cellspacing",
            "checked",
            "cite",
            "class",
            "clear",
            "color",
            "cols",
            "colspan",
            "controls",
            "controlslist",
            "coords",
            "crossorigin",
            "datetime",
            "decoding",
            "default",
            "dir",
            "disabled",
            "disablepictureinpicture",
            "disableremoteplayback",
            "download",
            "draggable",
            "enctype",
            "enterkeyhint",
            "face",
            "for",
            "headers",
            "height",
            "hidden",
            "high",
            "href",
            "hreflang",
            "id",
            "inputmode",
            "integrity",
            "ismap",
            "kind",
            "label",
            "lang",
            "list",
            "loading",
            "loop",
            "low",
            "max",
            "maxlength",
            "media",
            "method",
            "min",
            "minlength",
            "multiple",
            "muted",
            "name",
            "nonce",
            "noshade",
            "novalidate",
            "nowrap",
            "open",
            "optimum",
            "pattern",
            "placeholder",
            "playsinline",
            "popover",
            "popovertarget",
            "popovertargetaction",
            "poster",
            "preload",
            "pubdate",
            "radiogroup",
            "readonly",
            "rel",
            "required",
            "rev",
            "reversed",
            "role",
            "rows",
            "rowspan",
            "spellcheck",
            "scope",
            "selected",
            "shape",
            "size",
            "sizes",
            "span",
            "srclang",
            "start",
            "src",
            "srcset",
            "step",
            "style",
            "summary",
            "tabindex",
            "title",
            "translate",
            "type",
            "usemap",
            "valign",
            "value",
            "width",
            "wrap",
            "xmlns",
            "slot",
          ]),
          I = i([
            "accent-height",
            "accumulate",
            "additive",
            "alignment-baseline",
            "amplitude",
            "ascent",
            "attributename",
            "attributetype",
            "azimuth",
            "basefrequency",
            "baseline-shift",
            "begin",
            "bias",
            "by",
            "class",
            "clip",
            "clippathunits",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "cx",
            "cy",
            "d",
            "dx",
            "dy",
            "diffuseconstant",
            "direction",
            "display",
            "divisor",
            "dur",
            "edgemode",
            "elevation",
            "end",
            "exponent",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "filterunits",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyph-name",
            "glyphref",
            "gradientunits",
            "gradienttransform",
            "height",
            "href",
            "id",
            "image-rendering",
            "in",
            "in2",
            "intercept",
            "k",
            "k1",
            "k2",
            "k3",
            "k4",
            "kerning",
            "keypoints",
            "keysplines",
            "keytimes",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "kernelmatrix",
            "kernelunitlength",
            "lighting-color",
            "local",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerheight",
            "markerunits",
            "markerwidth",
            "maskcontentunits",
            "maskunits",
            "max",
            "mask",
            "media",
            "method",
            "mode",
            "min",
            "name",
            "numoctaves",
            "offset",
            "operator",
            "opacity",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "paint-order",
            "path",
            "pathlength",
            "patterncontentunits",
            "patterntransform",
            "patternunits",
            "points",
            "preservealpha",
            "preserveaspectratio",
            "primitiveunits",
            "r",
            "rx",
            "ry",
            "radius",
            "refx",
            "refy",
            "repeatcount",
            "repeatdur",
            "restart",
            "result",
            "rotate",
            "scale",
            "seed",
            "shape-rendering",
            "slope",
            "specularconstant",
            "specularexponent",
            "spreadmethod",
            "startoffset",
            "stddeviation",
            "stitchtiles",
            "stop-color",
            "stop-opacity",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke",
            "stroke-width",
            "style",
            "surfacescale",
            "systemlanguage",
            "tabindex",
            "tablevalues",
            "targetx",
            "targety",
            "transform",
            "transform-origin",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "type",
            "u1",
            "u2",
            "unicode",
            "values",
            "viewbox",
            "visibility",
            "version",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "width",
            "word-spacing",
            "wrap",
            "writing-mode",
            "xchannelselector",
            "ychannelselector",
            "x",
            "x1",
            "x2",
            "xmlns",
            "y",
            "y1",
            "y2",
            "z",
            "zoomandpan",
          ]),
          M = i([
            "accent",
            "accentunder",
            "align",
            "bevelled",
            "close",
            "columnsalign",
            "columnlines",
            "columnspan",
            "denomalign",
            "depth",
            "dir",
            "display",
            "displaystyle",
            "encoding",
            "fence",
            "frame",
            "height",
            "href",
            "id",
            "largeop",
            "length",
            "linethickness",
            "lspace",
            "lquote",
            "mathbackground",
            "mathcolor",
            "mathsize",
            "mathvariant",
            "maxsize",
            "minsize",
            "movablelimits",
            "notation",
            "numalign",
            "open",
            "rowalign",
            "rowlines",
            "rowspacing",
            "rowspan",
            "rspace",
            "rquote",
            "scriptlevel",
            "scriptminsize",
            "scriptsizemultiplier",
            "selection",
            "separator",
            "separators",
            "stretchy",
            "subscriptshift",
            "supscriptshift",
            "symmetric",
            "voffset",
            "width",
            "xmlns",
          ]),
          F = i([
            "xlink:href",
            "xml:id",
            "xlink:title",
            "xml:space",
            "xmlns:xlink",
          ]),
          U = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          z = a(/<%[\w\W]*|[\w\W]*%>/gm),
          H = a(/\$\{[\w\W]*/gm),
          V = a(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          W = a(/^aria-[\-\w]+$/),
          K = a(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          $ = a(/^(?:\w+script|data):/i),
          Z = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          G = a(/^html$/i),
          Y = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var X = Object.freeze({
          __proto__: null,
          ARIA_ATTR: W,
          ATTR_WHITESPACE: Z,
          CUSTOM_ELEMENT: Y,
          DATA_ATTR: V,
          DOCTYPE_NAME: G,
          ERB_EXPR: z,
          IS_ALLOWED_URI: K,
          IS_SCRIPT_OR_DATA: $,
          MUSTACHE_EXPR: U,
          TMPLIT_EXPR: H,
        });
        const Q = 1,
          J = 3,
          tt = 7,
          et = 8,
          nt = 9,
          rt = function () {
            return "undefined" == typeof window ? null : window;
          },
          ot = function (t, e) {
            if ("object" != typeof t || "function" != typeof t.createPolicy)
              return null;
            let n = null;
            e &&
              e.hasAttribute("data-tt-policy-suffix") &&
              (n = e.getAttribute("data-tt-policy-suffix"));
            const r = "dompurify" + (n ? "#" + n : "");
            try {
              return t.createPolicy(r, {
                createHTML: (t) => t,
                createScriptURL: (t) => t,
              });
            } catch (t) {
              return (
                console.warn(
                  "TrustedTypes policy " + r + " could not be created.",
                ),
                null
              );
            }
          };
        return (function e() {
          let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : rt();
          const r = (t) => e(t);
          if (
            ((r.version = "3.2.6"),
            (r.removed = []),
            !n || !n.document || n.document.nodeType !== nt || !n.Element)
          )
            return ((r.isSupported = !1), r);
          let { document: o } = n;
          const a = o,
            l = a.currentScript,
            {
              DocumentFragment: s,
              HTMLTemplateElement: A,
              Node: k,
              Element: S,
              NodeFilter: U,
              NamedNodeMap: z = n.NamedNodeMap || n.MozNamedAttrMap,
              HTMLFormElement: H,
              DOMParser: V,
              trustedTypes: W,
            } = n,
            $ = S.prototype,
            Z = C($, "cloneNode"),
            Y = C($, "remove"),
            it = C($, "nextSibling"),
            at = C($, "childNodes"),
            ut = C($, "parentNode");
          if ("function" == typeof A) {
            const t = o.createElement("template");
            t.content &&
              t.content.ownerDocument &&
              (o = t.content.ownerDocument);
          }
          let lt,
            st = "";
          const {
              implementation: ct,
              createNodeIterator: ft,
              createDocumentFragment: ht,
              getElementsByTagName: pt,
            } = o,
            { importNode: dt } = a;
          let yt = {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: [],
          };
          r.isSupported =
            "function" == typeof t &&
            "function" == typeof ut &&
            ct &&
            void 0 !== ct.createHTMLDocument;
          const {
            MUSTACHE_EXPR: bt,
            ERB_EXPR: mt,
            TMPLIT_EXPR: vt,
            DATA_ATTR: gt,
            ARIA_ATTR: wt,
            IS_SCRIPT_OR_DATA: Ot,
            ATTR_WHITESPACE: Et,
            CUSTOM_ELEMENT: xt,
          } = X;
          let { IS_ALLOWED_URI: At } = X,
            kt = null;
          const jt = j({}, [...T, ..._, ...P, ...q, ...L]);
          let St = null;
          const Nt = j({}, [...B, ...I, ...M, ...F]);
          let Ct = Object.seal(
              u(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              }),
            ),
            Tt = null,
            _t = null,
            Pt = !0,
            Rt = !0,
            qt = !1,
            Dt = !0,
            Lt = !1,
            Bt = !0,
            It = !1,
            Mt = !1,
            Ft = !1,
            Ut = !1,
            zt = !1,
            Ht = !1,
            Vt = !0,
            Wt = !1;
          const Kt = "user-content-";
          let $t = !0,
            Zt = !1,
            Gt = {},
            Yt = null;
          const Xt = j({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]);
          let Qt = null;
          const Jt = j({}, [
            "audio",
            "video",
            "img",
            "source",
            "image",
            "track",
          ]);
          let te = null;
          const ee = j({}, [
              "alt",
              "class",
              "for",
              "id",
              "label",
              "name",
              "pattern",
              "placeholder",
              "role",
              "summary",
              "title",
              "value",
              "style",
              "xmlns",
            ]),
            ne = "http://www.w3.org/1998/Math/MathML",
            re = "http://www.w3.org/2000/svg",
            oe = "http://www.w3.org/1999/xhtml";
          let ie = oe,
            ae = !1,
            ue = null;
          const le = j({}, [ne, re, oe], b);
          let se = j({}, ["mi", "mo", "mn", "ms", "mtext"]),
            ce = j({}, ["annotation-xml"]);
          const fe = j({}, ["title", "style", "font", "a", "script"]);
          let he = null;
          const pe = ["application/xhtml+xml", "text/html"],
            de = "text/html";
          let ye = null,
            be = null;
          const me = o.createElement("form"),
            ve = function (t) {
              return t instanceof RegExp || t instanceof Function;
            },
            ge = function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!be || be !== t) {
                if (
                  ((t && "object" == typeof t) || (t = {}),
                  (t = N(t)),
                  (he =
                    -1 === pe.indexOf(t.PARSER_MEDIA_TYPE)
                      ? de
                      : t.PARSER_MEDIA_TYPE),
                  (ye = "application/xhtml+xml" === he ? b : y),
                  (kt = O(t, "ALLOWED_TAGS") ? j({}, t.ALLOWED_TAGS, ye) : jt),
                  (St = O(t, "ALLOWED_ATTR") ? j({}, t.ALLOWED_ATTR, ye) : Nt),
                  (ue = O(t, "ALLOWED_NAMESPACES")
                    ? j({}, t.ALLOWED_NAMESPACES, b)
                    : le),
                  (te = O(t, "ADD_URI_SAFE_ATTR")
                    ? j(N(ee), t.ADD_URI_SAFE_ATTR, ye)
                    : ee),
                  (Qt = O(t, "ADD_DATA_URI_TAGS")
                    ? j(N(Jt), t.ADD_DATA_URI_TAGS, ye)
                    : Jt),
                  (Yt = O(t, "FORBID_CONTENTS")
                    ? j({}, t.FORBID_CONTENTS, ye)
                    : Xt),
                  (Tt = O(t, "FORBID_TAGS") ? j({}, t.FORBID_TAGS, ye) : N({})),
                  (_t = O(t, "FORBID_ATTR") ? j({}, t.FORBID_ATTR, ye) : N({})),
                  (Gt = !!O(t, "USE_PROFILES") && t.USE_PROFILES),
                  (Pt = !1 !== t.ALLOW_ARIA_ATTR),
                  (Rt = !1 !== t.ALLOW_DATA_ATTR),
                  (qt = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (Dt = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                  (Lt = t.SAFE_FOR_TEMPLATES || !1),
                  (Bt = !1 !== t.SAFE_FOR_XML),
                  (It = t.WHOLE_DOCUMENT || !1),
                  (Ut = t.RETURN_DOM || !1),
                  (zt = t.RETURN_DOM_FRAGMENT || !1),
                  (Ht = t.RETURN_TRUSTED_TYPE || !1),
                  (Ft = t.FORCE_BODY || !1),
                  (Vt = !1 !== t.SANITIZE_DOM),
                  (Wt = t.SANITIZE_NAMED_PROPS || !1),
                  ($t = !1 !== t.KEEP_CONTENT),
                  (Zt = t.IN_PLACE || !1),
                  (At = t.ALLOWED_URI_REGEXP || K),
                  (ie = t.NAMESPACE || oe),
                  (se = t.MATHML_TEXT_INTEGRATION_POINTS || se),
                  (ce = t.HTML_INTEGRATION_POINTS || ce),
                  (Ct = t.CUSTOM_ELEMENT_HANDLING || {}),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    ve(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (Ct.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    ve(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (Ct.attributeNameCheck =
                      t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    "boolean" ==
                      typeof t.CUSTOM_ELEMENT_HANDLING
                        .allowCustomizedBuiltInElements &&
                    (Ct.allowCustomizedBuiltInElements =
                      t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  Lt && (Rt = !1),
                  zt && (Ut = !0),
                  Gt &&
                    ((kt = j({}, L)),
                    (St = []),
                    !0 === Gt.html && (j(kt, T), j(St, B)),
                    !0 === Gt.svg && (j(kt, _), j(St, I), j(St, F)),
                    !0 === Gt.svgFilters && (j(kt, P), j(St, I), j(St, F)),
                    !0 === Gt.mathMl && (j(kt, q), j(St, M), j(St, F))),
                  t.ADD_TAGS &&
                    (kt === jt && (kt = N(kt)), j(kt, t.ADD_TAGS, ye)),
                  t.ADD_ATTR &&
                    (St === Nt && (St = N(St)), j(St, t.ADD_ATTR, ye)),
                  t.ADD_URI_SAFE_ATTR && j(te, t.ADD_URI_SAFE_ATTR, ye),
                  t.FORBID_CONTENTS &&
                    (Yt === Xt && (Yt = N(Yt)), j(Yt, t.FORBID_CONTENTS, ye)),
                  $t && (kt["#text"] = !0),
                  It && j(kt, ["html", "head", "body"]),
                  kt.table && (j(kt, ["tbody"]), delete Tt.tbody),
                  t.TRUSTED_TYPES_POLICY)
                ) {
                  if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML)
                    throw x(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
                    );
                  if (
                    "function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw x(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
                    );
                  ((lt = t.TRUSTED_TYPES_POLICY), (st = lt.createHTML("")));
                } else
                  (void 0 === lt && (lt = ot(W, l)),
                    null !== lt &&
                      "string" == typeof st &&
                      (st = lt.createHTML("")));
                (i && i(t), (be = t));
              }
            },
            we = j({}, [..._, ...P, ...R]),
            Oe = j({}, [...q, ...D]),
            Ee = function (t) {
              let e = ut(t);
              (e && e.tagName) ||
                (e = { namespaceURI: ie, tagName: "template" });
              const n = y(t.tagName),
                r = y(e.tagName);
              return (
                !!ue[t.namespaceURI] &&
                (t.namespaceURI === re
                  ? e.namespaceURI === oe
                    ? "svg" === n
                    : e.namespaceURI === ne
                      ? "svg" === n && ("annotation-xml" === r || se[r])
                      : Boolean(we[n])
                  : t.namespaceURI === ne
                    ? e.namespaceURI === oe
                      ? "math" === n
                      : e.namespaceURI === re
                        ? "math" === n && ce[r]
                        : Boolean(Oe[n])
                    : t.namespaceURI === oe
                      ? !(e.namespaceURI === re && !ce[r]) &&
                        !(e.namespaceURI === ne && !se[r]) &&
                        !Oe[n] &&
                        (fe[n] || !we[n])
                      : !(
                          "application/xhtml+xml" !== he || !ue[t.namespaceURI]
                        ))
              );
            },
            xe = function (t) {
              p(r.removed, { element: t });
              try {
                ut(t).removeChild(t);
              } catch (e) {
                Y(t);
              }
            },
            Ae = function (t, e) {
              try {
                p(r.removed, { attribute: e.getAttributeNode(t), from: e });
              } catch (t) {
                p(r.removed, { attribute: null, from: e });
              }
              if ((e.removeAttribute(t), "is" === t))
                if (Ut || zt)
                  try {
                    xe(e);
                  } catch (t) {}
                else
                  try {
                    e.setAttribute(t, "");
                  } catch (t) {}
            },
            ke = function (t) {
              let e = null,
                n = null;
              if (Ft) t = "<remove></remove>" + t;
              else {
                const e = m(t, /^[\r\n\t ]+/);
                n = e && e[0];
              }
              "application/xhtml+xml" === he &&
                ie === oe &&
                (t =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  t +
                  "</body></html>");
              const r = lt ? lt.createHTML(t) : t;
              if (ie === oe)
                try {
                  e = new V().parseFromString(r, he);
                } catch (t) {}
              if (!e || !e.documentElement) {
                e = ct.createDocument(ie, "template", null);
                try {
                  e.documentElement.innerHTML = ae ? st : r;
                } catch (t) {}
              }
              const i = e.body || e.documentElement;
              return (
                t &&
                  n &&
                  i.insertBefore(o.createTextNode(n), i.childNodes[0] || null),
                ie === oe
                  ? pt.call(e, It ? "html" : "body")[0]
                  : It
                    ? e.documentElement
                    : i
              );
            },
            je = function (t) {
              return ft.call(
                t.ownerDocument || t,
                t,
                U.SHOW_ELEMENT |
                  U.SHOW_COMMENT |
                  U.SHOW_TEXT |
                  U.SHOW_PROCESSING_INSTRUCTION |
                  U.SHOW_CDATA_SECTION,
                null,
              );
            },
            Se = function (t) {
              return (
                t instanceof H &&
                ("string" != typeof t.nodeName ||
                  "string" != typeof t.textContent ||
                  "function" != typeof t.removeChild ||
                  !(t.attributes instanceof z) ||
                  "function" != typeof t.removeAttribute ||
                  "function" != typeof t.setAttribute ||
                  "string" != typeof t.namespaceURI ||
                  "function" != typeof t.insertBefore ||
                  "function" != typeof t.hasChildNodes)
              );
            },
            Ne = function (t) {
              return "function" == typeof k && t instanceof k;
            };
          function Ce(t, e, n) {
            c(t, (t) => {
              t.call(r, e, n, be);
            });
          }
          const Te = function (t) {
              let e = null;
              if ((Ce(yt.beforeSanitizeElements, t, null), Se(t)))
                return (xe(t), !0);
              const n = ye(t.nodeName);
              if (
                (Ce(yt.uponSanitizeElement, t, { tagName: n, allowedTags: kt }),
                Bt &&
                  t.hasChildNodes() &&
                  !Ne(t.firstElementChild) &&
                  E(/<[/\w!]/g, t.innerHTML) &&
                  E(/<[/\w!]/g, t.textContent))
              )
                return (xe(t), !0);
              if (t.nodeType === tt) return (xe(t), !0);
              if (Bt && t.nodeType === et && E(/<[/\w]/g, t.data))
                return (xe(t), !0);
              if (!kt[n] || Tt[n]) {
                if (!Tt[n] && Pe(n)) {
                  if (
                    Ct.tagNameCheck instanceof RegExp &&
                    E(Ct.tagNameCheck, n)
                  )
                    return !1;
                  if (Ct.tagNameCheck instanceof Function && Ct.tagNameCheck(n))
                    return !1;
                }
                if ($t && !Yt[n]) {
                  const e = ut(t) || t.parentNode,
                    n = at(t) || t.childNodes;
                  if (n && e)
                    for (let r = n.length - 1; r >= 0; --r) {
                      const o = Z(n[r], !0);
                      ((o.__removalCount = (t.__removalCount || 0) + 1),
                        e.insertBefore(o, it(t)));
                    }
                }
                return (xe(t), !0);
              }
              return t instanceof S && !Ee(t)
                ? (xe(t), !0)
                : ("noscript" !== n && "noembed" !== n && "noframes" !== n) ||
                    !E(/<\/no(script|embed|frames)/i, t.innerHTML)
                  ? (Lt &&
                      t.nodeType === J &&
                      ((e = t.textContent),
                      c([bt, mt, vt], (t) => {
                        e = v(e, t, " ");
                      }),
                      t.textContent !== e &&
                        (p(r.removed, { element: t.cloneNode() }),
                        (t.textContent = e))),
                    Ce(yt.afterSanitizeElements, t, null),
                    !1)
                  : (xe(t), !0);
            },
            _e = function (t, e, n) {
              if (Vt && ("id" === e || "name" === e) && (n in o || n in me))
                return !1;
              if (Rt && !_t[e] && E(gt, e));
              else if (Pt && E(wt, e));
              else if (!St[e] || _t[e]) {
                if (
                  !(
                    (Pe(t) &&
                      ((Ct.tagNameCheck instanceof RegExp &&
                        E(Ct.tagNameCheck, t)) ||
                        (Ct.tagNameCheck instanceof Function &&
                          Ct.tagNameCheck(t))) &&
                      ((Ct.attributeNameCheck instanceof RegExp &&
                        E(Ct.attributeNameCheck, e)) ||
                        (Ct.attributeNameCheck instanceof Function &&
                          Ct.attributeNameCheck(e)))) ||
                    ("is" === e &&
                      Ct.allowCustomizedBuiltInElements &&
                      ((Ct.tagNameCheck instanceof RegExp &&
                        E(Ct.tagNameCheck, n)) ||
                        (Ct.tagNameCheck instanceof Function &&
                          Ct.tagNameCheck(n))))
                  )
                )
                  return !1;
              } else if (te[e]);
              else if (E(At, v(n, Et, "")));
              else if (
                ("src" !== e && "xlink:href" !== e && "href" !== e) ||
                "script" === t ||
                0 !== g(n, "data:") ||
                !Qt[t]
              )
                if (qt && !E(Ot, v(n, Et, "")));
                else if (n) return !1;
              return !0;
            },
            Pe = function (t) {
              return "annotation-xml" !== t && m(t, xt);
            },
            Re = function (t) {
              Ce(yt.beforeSanitizeAttributes, t, null);
              const { attributes: e } = t;
              if (!e || Se(t)) return;
              const n = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: St,
                forceKeepAttr: void 0,
              };
              let o = e.length;
              for (; o--; ) {
                const i = e[o],
                  { name: a, namespaceURI: u, value: l } = i,
                  s = ye(a),
                  f = l;
                let p = "value" === a ? f : w(f);
                if (
                  ((n.attrName = s),
                  (n.attrValue = p),
                  (n.keepAttr = !0),
                  (n.forceKeepAttr = void 0),
                  Ce(yt.uponSanitizeAttribute, t, n),
                  (p = n.attrValue),
                  !Wt ||
                    ("id" !== s && "name" !== s) ||
                    (Ae(a, t), (p = Kt + p)),
                  Bt && E(/((--!?|])>)|<\/(style|title)/i, p))
                ) {
                  Ae(a, t);
                  continue;
                }
                if (n.forceKeepAttr) continue;
                if (!n.keepAttr) {
                  Ae(a, t);
                  continue;
                }
                if (!Dt && E(/\/>/i, p)) {
                  Ae(a, t);
                  continue;
                }
                Lt &&
                  c([bt, mt, vt], (t) => {
                    p = v(p, t, " ");
                  });
                const d = ye(t.nodeName);
                if (_e(d, s, p)) {
                  if (
                    lt &&
                    "object" == typeof W &&
                    "function" == typeof W.getAttributeType
                  )
                    if (u);
                    else
                      switch (W.getAttributeType(d, s)) {
                        case "TrustedHTML":
                          p = lt.createHTML(p);
                          break;
                        case "TrustedScriptURL":
                          p = lt.createScriptURL(p);
                      }
                  if (p !== f)
                    try {
                      (u ? t.setAttributeNS(u, a, p) : t.setAttribute(a, p),
                        Se(t) ? xe(t) : h(r.removed));
                    } catch (e) {
                      Ae(a, t);
                    }
                } else Ae(a, t);
              }
              Ce(yt.afterSanitizeAttributes, t, null);
            },
            qe = function t(e) {
              let n = null;
              const r = je(e);
              for (
                Ce(yt.beforeSanitizeShadowDOM, e, null);
                (n = r.nextNode());

              )
                (Ce(yt.uponSanitizeShadowNode, n, null),
                  Te(n),
                  Re(n),
                  n.content instanceof s && t(n.content));
              Ce(yt.afterSanitizeShadowDOM, e, null);
            };
          return (
            (r.sanitize = function (t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = null,
                o = null,
                i = null,
                u = null;
              if (
                ((ae = !t),
                ae && (t = "\x3c!--\x3e"),
                "string" != typeof t && !Ne(t))
              ) {
                if ("function" != typeof t.toString)
                  throw x("toString is not a function");
                if ("string" != typeof (t = t.toString()))
                  throw x("dirty is not a string, aborting");
              }
              if (!r.isSupported) return t;
              if (
                (Mt || ge(e),
                (r.removed = []),
                "string" == typeof t && (Zt = !1),
                Zt)
              ) {
                if (t.nodeName) {
                  const e = ye(t.nodeName);
                  if (!kt[e] || Tt[e])
                    throw x(
                      "root node is forbidden and cannot be sanitized in-place",
                    );
                }
              } else if (t instanceof k)
                ((n = ke("\x3c!----\x3e")),
                  (o = n.ownerDocument.importNode(t, !0)),
                  (o.nodeType === Q && "BODY" === o.nodeName) ||
                  "HTML" === o.nodeName
                    ? (n = o)
                    : n.appendChild(o));
              else {
                if (!Ut && !Lt && !It && -1 === t.indexOf("<"))
                  return lt && Ht ? lt.createHTML(t) : t;
                if (((n = ke(t)), !n)) return Ut ? null : Ht ? st : "";
              }
              n && Ft && xe(n.firstChild);
              const l = je(Zt ? t : n);
              for (; (i = l.nextNode()); )
                (Te(i), Re(i), i.content instanceof s && qe(i.content));
              if (Zt) return t;
              if (Ut) {
                if (zt)
                  for (u = ht.call(n.ownerDocument); n.firstChild; )
                    u.appendChild(n.firstChild);
                else u = n;
                return (
                  (St.shadowroot || St.shadowrootmode) &&
                    (u = dt.call(a, u, !0)),
                  u
                );
              }
              let f = It ? n.outerHTML : n.innerHTML;
              return (
                It &&
                  kt["!doctype"] &&
                  n.ownerDocument &&
                  n.ownerDocument.doctype &&
                  n.ownerDocument.doctype.name &&
                  E(G, n.ownerDocument.doctype.name) &&
                  (f = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + f),
                Lt &&
                  c([bt, mt, vt], (t) => {
                    f = v(f, t, " ");
                  }),
                lt && Ht ? lt.createHTML(f) : f
              );
            }),
            (r.setConfig = function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              (ge(t), (Mt = !0));
            }),
            (r.clearConfig = function () {
              ((be = null), (Mt = !1));
            }),
            (r.isValidAttribute = function (t, e, n) {
              be || ge({});
              const r = ye(t),
                o = ye(e);
              return _e(r, o, n);
            }),
            (r.addHook = function (t, e) {
              "function" == typeof e && p(yt[t], e);
            }),
            (r.removeHook = function (t, e) {
              if (void 0 !== e) {
                const n = f(yt[t], e);
                return -1 === n ? void 0 : d(yt[t], n, 1)[0];
              }
              return h(yt[t]);
            }),
            (r.removeHooks = function (t) {
              yt[t] = [];
            }),
            (r.removeAllHooks = function () {
              yt = {
                afterSanitizeAttributes: [],
                afterSanitizeElements: [],
                afterSanitizeShadowDOM: [],
                beforeSanitizeAttributes: [],
                beforeSanitizeElements: [],
                beforeSanitizeShadowDOM: [],
                uponSanitizeAttribute: [],
                uponSanitizeElement: [],
                uponSanitizeShadowNode: [],
              };
            }),
            r
          );
        })();
      })();
    },
    1710: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
        return -1;
      }
      function o(t, e) {
        for (var n = t.length - 1; n >= 0; n--)
          !0 === e(t[n]) && t.splice(n, 1);
      }
      function i(t) {
        throw new Error("Unhandled case for value: '".concat(t, "'"));
      }
      var a = (function () {
        function t(t) {
          (void 0 === t && (t = {}),
            (this.tagName = ""),
            (this.attrs = {}),
            (this.innerHTML = ""),
            (this.whitespaceRegex = /\s+/),
            (this.tagName = t.tagName || ""),
            (this.attrs = t.attrs || {}),
            (this.innerHTML = t.innerHtml || t.innerHTML || ""));
        }
        return (
          (t.prototype.setTagName = function (t) {
            return ((this.tagName = t), this);
          }),
          (t.prototype.getTagName = function () {
            return this.tagName || "";
          }),
          (t.prototype.setAttr = function (t, e) {
            return ((this.getAttrs()[t] = e), this);
          }),
          (t.prototype.getAttr = function (t) {
            return this.getAttrs()[t];
          }),
          (t.prototype.setAttrs = function (t) {
            return (Object.assign(this.getAttrs(), t), this);
          }),
          (t.prototype.getAttrs = function () {
            return this.attrs || (this.attrs = {});
          }),
          (t.prototype.setClass = function (t) {
            return this.setAttr("class", t);
          }),
          (t.prototype.addClass = function (t) {
            for (
              var e,
                n = this.getClass(),
                o = this.whitespaceRegex,
                i = n ? n.split(o) : [],
                a = t.split(o);
              (e = a.shift());

            )
              -1 === r(i, e) && i.push(e);
            return ((this.getAttrs().class = i.join(" ")), this);
          }),
          (t.prototype.removeClass = function (t) {
            for (
              var e,
                n = this.getClass(),
                o = this.whitespaceRegex,
                i = n ? n.split(o) : [],
                a = t.split(o);
              i.length && (e = a.shift());

            ) {
              var u = r(i, e);
              -1 !== u && i.splice(u, 1);
            }
            return ((this.getAttrs().class = i.join(" ")), this);
          }),
          (t.prototype.getClass = function () {
            return this.getAttrs().class || "";
          }),
          (t.prototype.hasClass = function (t) {
            return -1 !== (" " + this.getClass() + " ").indexOf(" " + t + " ");
          }),
          (t.prototype.setInnerHTML = function (t) {
            return ((this.innerHTML = t), this);
          }),
          (t.prototype.setInnerHtml = function (t) {
            return this.setInnerHTML(t);
          }),
          (t.prototype.getInnerHTML = function () {
            return this.innerHTML || "";
          }),
          (t.prototype.getInnerHtml = function () {
            return this.getInnerHTML();
          }),
          (t.prototype.toAnchorString = function () {
            var t = this.getTagName(),
              e = this.buildAttrsStr();
            return [
              "<",
              t,
              (e = e ? " " + e : ""),
              ">",
              this.getInnerHtml(),
              "</",
              t,
              ">",
            ].join("");
          }),
          (t.prototype.buildAttrsStr = function () {
            if (!this.attrs) return "";
            var t = this.getAttrs(),
              e = [];
            for (var n in t)
              t.hasOwnProperty(n) && e.push(n + '="' + t[n] + '"');
            return e.join(" ");
          }),
          t
        );
      })();
      var u,
        l = (function () {
          function t(t) {
            (void 0 === t && (t = {}),
              (this.newWindow = !1),
              (this.truncate = {}),
              (this.className = ""),
              (this.newWindow = t.newWindow || !1),
              (this.truncate = t.truncate || {}),
              (this.className = t.className || ""));
          }
          return (
            (t.prototype.build = function (t) {
              return new a({
                tagName: "a",
                attrs: this.createAttrs(t),
                innerHtml: this.processAnchorText(t.getAnchorText()),
              });
            }),
            (t.prototype.createAttrs = function (t) {
              var e = { href: t.getAnchorHref() },
                n = this.createCssClass(t);
              return (
                n && (e.class = n),
                this.newWindow &&
                  ((e.target = "_blank"), (e.rel = "noopener noreferrer")),
                this.truncate &&
                  this.truncate.length &&
                  this.truncate.length < t.getAnchorText().length &&
                  (e.title = t.getAnchorHref()),
                e
              );
            }),
            (t.prototype.createCssClass = function (t) {
              var e = this.className;
              if (e) {
                for (
                  var n = [e], r = t.getCssClassSuffixes(), o = 0, i = r.length;
                  o < i;
                  o++
                )
                  n.push(e + "-" + r[o]);
                return n.join(" ");
              }
              return "";
            }),
            (t.prototype.processAnchorText = function (t) {
              return (t = this.doTruncate(t));
            }),
            (t.prototype.doTruncate = function (t) {
              var e = this.truncate;
              if (!e || !e.length) return t;
              var n = e.length,
                r = e.location;
              return "smart" === r
                ? (function (t, e, n) {
                    var r, o;
                    null == n
                      ? ((n = "&hellip;"), (o = 3), (r = 8))
                      : ((o = n.length), (r = n.length));
                    var i = function (t) {
                        var e = "";
                        return (
                          t.scheme && t.host && (e += t.scheme + "://"),
                          t.host && (e += t.host),
                          t.path && (e += "/" + t.path),
                          t.query && (e += "?" + t.query),
                          t.fragment && (e += "#" + t.fragment),
                          e
                        );
                      },
                      a = function (t, e) {
                        var r = e / 2,
                          o = Math.ceil(r),
                          i = -1 * Math.floor(r),
                          a = "";
                        return (
                          i < 0 && (a = t.substr(i)),
                          t.substr(0, o) + n + a
                        );
                      };
                    if (t.length <= e) return t;
                    var u = e - o,
                      l = (function (t) {
                        var e = {},
                          n = t,
                          r = n.match(/^([a-z]+):\/\//i);
                        return (
                          r && ((e.scheme = r[1]), (n = n.substr(r[0].length))),
                          (r = n.match(/^(.*?)(?=(\?|#|\/|$))/i)) &&
                            ((e.host = r[1]), (n = n.substr(r[0].length))),
                          (r = n.match(/^\/(.*?)(?=(\?|#|$))/i)) &&
                            ((e.path = r[1]), (n = n.substr(r[0].length))),
                          (r = n.match(/^\?(.*?)(?=(#|$))/i)) &&
                            ((e.query = r[1]), (n = n.substr(r[0].length))),
                          (r = n.match(/^#(.*?)$/i)) && (e.fragment = r[1]),
                          e
                        );
                      })(t);
                    if (l.query) {
                      var s = l.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
                      s &&
                        ((l.query = l.query.substr(0, s[1].length)),
                        (t = i(l)));
                    }
                    if (t.length <= e) return t;
                    if (
                      (l.host &&
                        ((l.host = l.host.replace(/^www\./, "")), (t = i(l))),
                      t.length <= e)
                    )
                      return t;
                    var c = "";
                    if ((l.host && (c += l.host), c.length >= u))
                      return l.host.length == e
                        ? (l.host.substr(0, e - o) + n).substr(0, u + r)
                        : a(c, u).substr(0, u + r);
                    var f = "";
                    if (
                      (l.path && (f += "/" + l.path),
                      l.query && (f += "?" + l.query),
                      f)
                    ) {
                      if ((c + f).length >= u)
                        return (c + f).length == e
                          ? (c + f).substr(0, e)
                          : (c + a(f, u - c.length)).substr(0, u + r);
                      c += f;
                    }
                    if (l.fragment) {
                      var h = "#" + l.fragment;
                      if ((c + h).length >= u)
                        return (c + h).length == e
                          ? (c + h).substr(0, e)
                          : (c + a(h, u - c.length)).substr(0, u + r);
                      c += h;
                    }
                    if (l.scheme && l.host) {
                      var p = l.scheme + "://";
                      if ((c + p).length < u) return (p + c).substr(0, e);
                    }
                    if (c.length <= e) return c;
                    var d = "";
                    return (
                      u > 0 && (d = c.substr(-1 * Math.floor(u / 2))),
                      (c.substr(0, Math.ceil(u / 2)) + n + d).substr(0, u + r)
                    );
                  })(t, n)
                : "middle" === r
                  ? (function (t, e, n) {
                      if (t.length <= e) return t;
                      var r, o;
                      null == n
                        ? ((n = "&hellip;"), (r = 8), (o = 3))
                        : ((r = n.length), (o = n.length));
                      var i = e - o,
                        a = "";
                      return (
                        i > 0 && (a = t.substr(-1 * Math.floor(i / 2))),
                        (t.substr(0, Math.ceil(i / 2)) + n + a).substr(0, i + r)
                      );
                    })(t, n)
                  : (function (t, e, n) {
                      return (function (t, e, n) {
                        var r;
                        return (
                          t.length > e &&
                            (null == n
                              ? ((n = "&hellip;"), (r = 3))
                              : (r = n.length),
                            (t = t.substring(0, e - r) + n)),
                          t
                        );
                      })(t, e, n);
                    })(t, n);
            }),
            t
          );
        })(),
        s = (function () {
          function t(t) {
            ((this.__jsduckDummyDocProp = null),
              (this.matchedText = ""),
              (this.offset = 0),
              (this.tagBuilder = t.tagBuilder),
              (this.matchedText = t.matchedText),
              (this.offset = t.offset));
          }
          return (
            (t.prototype.getMatchedText = function () {
              return this.matchedText;
            }),
            (t.prototype.setOffset = function (t) {
              this.offset = t;
            }),
            (t.prototype.getOffset = function () {
              return this.offset;
            }),
            (t.prototype.getCssClassSuffixes = function () {
              return [this.getType()];
            }),
            (t.prototype.buildTag = function () {
              return this.tagBuilder.build(this);
            }),
            t
          );
        })(),
        c = n(74),
        f = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return ((n.email = ""), (n.email = e.email), n);
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.getType = function () {
              return "email";
            }),
            (e.prototype.getEmail = function () {
              return this.email;
            }),
            (e.prototype.getAnchorHref = function () {
              return "mailto:" + this.email;
            }),
            (e.prototype.getAnchorText = function () {
              return this.email;
            }),
            e
          );
        })(s),
        h = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.serviceName = ""),
              (n.hashtag = ""),
              (n.serviceName = e.serviceName),
              (n.hashtag = e.hashtag),
              n
            );
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.getType = function () {
              return "hashtag";
            }),
            (e.prototype.getServiceName = function () {
              return this.serviceName;
            }),
            (e.prototype.getHashtag = function () {
              return this.hashtag;
            }),
            (e.prototype.getAnchorHref = function () {
              var t = this.serviceName,
                e = this.hashtag;
              switch (t) {
                case "twitter":
                  return "https://twitter.com/hashtag/" + e;
                case "facebook":
                  return "https://www.facebook.com/hashtag/" + e;
                case "instagram":
                  return "https://instagram.com/explore/tags/" + e;
                case "tiktok":
                  return "https://www.tiktok.com/tag/" + e;
                default:
                  throw new Error(
                    "Unknown service name to point hashtag to: " + t,
                  );
              }
            }),
            (e.prototype.getAnchorText = function () {
              return "#" + this.hashtag;
            }),
            e
          );
        })(s),
        p = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.serviceName = "twitter"),
              (n.mention = ""),
              (n.mention = e.mention),
              (n.serviceName = e.serviceName),
              n
            );
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.getType = function () {
              return "mention";
            }),
            (e.prototype.getMention = function () {
              return this.mention;
            }),
            (e.prototype.getServiceName = function () {
              return this.serviceName;
            }),
            (e.prototype.getAnchorHref = function () {
              switch (this.serviceName) {
                case "twitter":
                  return "https://twitter.com/" + this.mention;
                case "instagram":
                  return "https://instagram.com/" + this.mention;
                case "soundcloud":
                  return "https://soundcloud.com/" + this.mention;
                case "tiktok":
                  return "https://www.tiktok.com/@" + this.mention;
                default:
                  throw new Error(
                    "Unknown service name to point mention to: " +
                      this.serviceName,
                  );
              }
            }),
            (e.prototype.getAnchorText = function () {
              return "@" + this.mention;
            }),
            (e.prototype.getCssClassSuffixes = function () {
              var e = t.prototype.getCssClassSuffixes.call(this),
                n = this.getServiceName();
              return (n && e.push(n), e);
            }),
            e
          );
        })(s),
        d = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.number = ""),
              (n.plusSign = !1),
              (n.number = e.number),
              (n.plusSign = e.plusSign),
              n
            );
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.getType = function () {
              return "phone";
            }),
            (e.prototype.getPhoneNumber = function () {
              return this.number;
            }),
            (e.prototype.getNumber = function () {
              return this.getPhoneNumber();
            }),
            (e.prototype.getAnchorHref = function () {
              return "tel:" + (this.plusSign ? "+" : "") + this.number;
            }),
            (e.prototype.getAnchorText = function () {
              return this.matchedText;
            }),
            e
          );
        })(s),
        y = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.url = ""),
              (n.urlMatchType = "scheme"),
              (n.protocolUrlMatch = !1),
              (n.protocolRelativeMatch = !1),
              (n.stripPrefix = { scheme: !0, www: !0 }),
              (n.stripTrailingSlash = !0),
              (n.decodePercentEncoding = !0),
              (n.schemePrefixRegex = /^(https?:\/\/)?/i),
              (n.wwwPrefixRegex = /^(https?:\/\/)?(www\.)?/i),
              (n.protocolRelativeRegex = /^\/\//),
              (n.protocolPrepended = !1),
              (n.urlMatchType = e.urlMatchType),
              (n.url = e.url),
              (n.protocolUrlMatch = e.protocolUrlMatch),
              (n.protocolRelativeMatch = e.protocolRelativeMatch),
              (n.stripPrefix = e.stripPrefix),
              (n.stripTrailingSlash = e.stripTrailingSlash),
              (n.decodePercentEncoding = e.decodePercentEncoding),
              n
            );
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.getType = function () {
              return "url";
            }),
            (e.prototype.getUrlMatchType = function () {
              return this.urlMatchType;
            }),
            (e.prototype.getUrl = function () {
              var t = this.url;
              return (
                this.protocolRelativeMatch ||
                  this.protocolUrlMatch ||
                  this.protocolPrepended ||
                  ((t = this.url = "http://" + t),
                  (this.protocolPrepended = !0)),
                t
              );
            }),
            (e.prototype.getAnchorHref = function () {
              return this.getUrl().replace(/&amp;/g, "&");
            }),
            (e.prototype.getAnchorText = function () {
              var t = this.getMatchedText();
              return (
                this.protocolRelativeMatch &&
                  (t = this.stripProtocolRelativePrefix(t)),
                this.stripPrefix.scheme && (t = this.stripSchemePrefix(t)),
                this.stripPrefix.www && (t = this.stripWwwPrefix(t)),
                this.stripTrailingSlash && (t = this.removeTrailingSlash(t)),
                this.decodePercentEncoding &&
                  (t = this.removePercentEncoding(t)),
                t
              );
            }),
            (e.prototype.stripSchemePrefix = function (t) {
              return t.replace(this.schemePrefixRegex, "");
            }),
            (e.prototype.stripWwwPrefix = function (t) {
              return t.replace(this.wwwPrefixRegex, "$1");
            }),
            (e.prototype.stripProtocolRelativePrefix = function (t) {
              return t.replace(this.protocolRelativeRegex, "");
            }),
            (e.prototype.removeTrailingSlash = function (t) {
              return (
                "/" === t.charAt(t.length - 1) && (t = t.slice(0, -1)),
                t
              );
            }),
            (e.prototype.removePercentEncoding = function (t) {
              var e = t
                .replace(/%22/gi, "&quot;")
                .replace(/%26/gi, "&amp;")
                .replace(/%27/gi, "&#39;")
                .replace(/%3C/gi, "&lt;")
                .replace(/%3E/gi, "&gt;");
              try {
                return decodeURIComponent(e);
              } catch (t) {
                return e;
              }
            }),
            e
          );
        })(s),
        b = function (t) {
          ((this.__jsduckDummyDocProp = null),
            (this.tagBuilder = t.tagBuilder));
        },
        m = /[A-Za-z]/,
        v = /[\d]/,
        g = /[\D]/,
        w = /\s/,
        O = /['"]/,
        E = /[\x00-\x1F\x7F]/,
        x =
          /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/
            .source,
        A =
          x +
          /\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/
            .source +
          /\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/
            .source,
        k =
          /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/
            .source,
        j = A + k,
        S = A + k,
        N = "(?:[" + k + "]{1,3}\\.){3}[" + k + "]{1,3}",
        C = "[" + S + "](?:[" + S + "\\-]{0,61}[" + S + "])?",
        T = function (t) {
          return "(?=(" + C + "))\\" + t;
        },
        _ = function (t) {
          return "(?:" + T(t) + "(?:\\." + T(t + 1) + "){0,126}|" + N + ")";
        },
        P =
          (new RegExp("[" + S + ".\\-]*[" + S + "\\-]"),
          new RegExp("[".concat(S, "]"))),
        R =
          /(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|vermögensberatung|xn--3oq18vl8pn36a|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|afamilycompany|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|swiftcover|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|scjohnson|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|موريتانيا|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|budapest|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|католик|اتصالات|البحرين|الجزائر|العليان|پاکستان|كاثوليك|இந்தியா|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|भारतम्|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glade|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|lixil|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|ישראל|ایران|بازار|بھارت|سودان|سورية|همراه|भारोत|संगठन|বাংলা|భారత్|ഭാരതം|嘉里大酒店|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|duck|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|raid|read|reit|rent|rest|rich|rmit|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بارت|بيتك|ڀارت|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|ಭಾರತ|ලංකා|アマゾン|グーグル|クラウド|ポイント|大众汽车|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|csc|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|off|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|qvc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|عرب|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ລາວ|ストア|セール|みんな|中文网|亚马逊|天主教|我爱你|新加坡|淡马锡|诺基亚|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|ευ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|广东|微博|慈善|手机|招聘|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)/,
        q = new RegExp("[".concat(S, "!#$%&'*+/=?^_`{|}~-]")),
        D = new RegExp("^".concat(R.source, "$")),
        L = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return ((e.localPartCharRegex = q), (e.strictTldRegex = D), e);
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.parseMatches = function (t) {
              for (
                var e = this.tagBuilder,
                  n = this.localPartCharRegex,
                  r = this.strictTldRegex,
                  o = [],
                  a = t.length,
                  u = new B(),
                  l = { m: "a", a: "i", i: "l", l: "t", t: "o", o: ":" },
                  s = 0,
                  h = 0,
                  p = u;
                s < a;

              ) {
                var d = t.charAt(s);
                switch (h) {
                  case 0:
                    y(d);
                    break;
                  case 1:
                    b(t.charAt(s - 1), d);
                    break;
                  case 2:
                    m(d);
                    break;
                  case 3:
                    v(d);
                    break;
                  case 4:
                    g(d);
                    break;
                  case 5:
                    w(d);
                    break;
                  case 6:
                    O(d);
                    break;
                  case 7:
                    E(d);
                    break;
                  default:
                    i(h);
                }
                s++;
              }
              return (k(), o);
              function y(t) {
                "m" === t ? x(1) : n.test(t) && x();
              }
              function b(t, e) {
                ":" === t
                  ? n.test(e)
                    ? ((h = 2),
                      (p = new B(
                        Object(c.a)(Object(c.a)({}, p), {
                          hasMailtoPrefix: !0,
                        }),
                      )))
                    : A()
                  : l[t] === e ||
                    (n.test(e)
                      ? (h = 2)
                      : "." === e
                        ? (h = 3)
                        : "@" === e
                          ? (h = 4)
                          : A());
              }
              function m(t) {
                "." === t ? (h = 3) : "@" === t ? (h = 4) : n.test(t) || A();
              }
              function v(t) {
                "." === t || "@" === t ? A() : n.test(t) ? (h = 2) : A();
              }
              function g(t) {
                P.test(t) ? (h = 5) : A();
              }
              function w(t) {
                "." === t ? (h = 7) : "-" === t ? (h = 6) : P.test(t) || k();
              }
              function O(t) {
                "-" === t || "." === t ? k() : P.test(t) ? (h = 5) : k();
              }
              function E(t) {
                "." === t || "-" === t
                  ? k()
                  : P.test(t)
                    ? ((h = 5),
                      (p = new B(
                        Object(c.a)(Object(c.a)({}, p), { hasDomainDot: !0 }),
                      )))
                    : k();
              }
              function x(t) {
                (void 0 === t && (t = 2), (h = t), (p = new B({ idx: s })));
              }
              function A() {
                ((h = 0), (p = u));
              }
              function k() {
                if (p.hasDomainDot) {
                  var n = t.slice(p.idx, s);
                  /[-.]$/.test(n) && (n = n.slice(0, -1));
                  var i = p.hasMailtoPrefix ? n.slice("mailto:".length) : n;
                  (function (t) {
                    var e = (t.split(".").pop() || "").toLowerCase();
                    return r.test(e);
                  })(i) &&
                    o.push(
                      new f({
                        tagBuilder: e,
                        matchedText: n,
                        offset: p.idx,
                        email: i,
                      }),
                    );
                }
                A();
              }
            }),
            e
          );
        })(b),
        B = function (t) {
          (void 0 === t && (t = {}),
            (this.idx = void 0 !== t.idx ? t.idx : -1),
            (this.hasMailtoPrefix = !!t.hasMailtoPrefix),
            (this.hasDomainDot = !!t.hasDomainDot));
        },
        I = (function () {
          function t() {}
          return (
            (t.isValid = function (t, e) {
              return !(
                (e && !this.isValidUriScheme(e)) ||
                this.urlMatchDoesNotHaveProtocolOrDot(t, e) ||
                (this.urlMatchDoesNotHaveAtLeastOneWordChar(t, e) &&
                  !this.isValidIpAddress(t)) ||
                this.containsMultipleDots(t)
              );
            }),
            (t.isValidIpAddress = function (t) {
              var e = new RegExp(
                this.hasFullProtocolRegex.source + this.ipRegex.source,
              );
              return null !== t.match(e);
            }),
            (t.containsMultipleDots = function (t) {
              var e = t;
              return (
                this.hasFullProtocolRegex.test(t) && (e = t.split("://")[1]),
                e.split("/")[0].indexOf("..") > -1
              );
            }),
            (t.isValidUriScheme = function (t) {
              var e = t.match(this.uriSchemeRegex),
                n = e && e[0].toLowerCase();
              return "javascript:" !== n && "vbscript:" !== n;
            }),
            (t.urlMatchDoesNotHaveProtocolOrDot = function (t, e) {
              return !(
                !t ||
                (e && this.hasFullProtocolRegex.test(e)) ||
                -1 !== t.indexOf(".")
              );
            }),
            (t.urlMatchDoesNotHaveAtLeastOneWordChar = function (t, e) {
              return (
                !(!t || !e) &&
                !this.hasFullProtocolRegex.test(e) &&
                !this.hasWordCharAfterProtocolRegex.test(t)
              );
            }),
            (t.hasFullProtocolRegex = /^[A-Za-z][-.+A-Za-z0-9]*:\/\//),
            (t.uriSchemeRegex = /^[A-Za-z][-.+A-Za-z0-9]*:/),
            (t.hasWordCharAfterProtocolRegex = new RegExp(
              ":[^\\s]*?[" + x + "]",
            )),
            (t.ipRegex =
              /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/),
            t
          );
        })(),
        M =
          ((u = new RegExp(
            "[/?#](?:[" +
              S +
              "\\-+&@#/%=~_()|'$*\\[\\]{}?!:,.;^✓]*[" +
              S +
              "\\-+&@#/%=~_()|'$*\\[\\]{}✓])?",
          )),
          new RegExp(
            [
              "(?:",
              "(",
              /(?:[A-Za-z][-.+A-Za-z0-9]{0,63}:(?![A-Za-z][-.+A-Za-z0-9]{0,63}:\/\/)(?!\d+\/?)(?:\/\/)?)/
                .source,
              _(2),
              ")",
              "|",
              "(",
              "(//)?",
              /(?:www\.)/.source,
              _(6),
              ")",
              "|",
              "(",
              "(//)?",
              _(10) + "\\.",
              R.source,
              "(?![-" + j + "])",
              ")",
              ")",
              "(?::[0-9]+)?",
              "(?:" + u.source + ")?",
            ].join(""),
            "gi",
          )),
        F = new RegExp("[" + S + "]"),
        U = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.stripPrefix = { scheme: !0, www: !0 }),
              (n.stripTrailingSlash = !0),
              (n.decodePercentEncoding = !0),
              (n.matcherRegex = M),
              (n.wordCharRegExp = F),
              (n.stripPrefix = e.stripPrefix),
              (n.stripTrailingSlash = e.stripTrailingSlash),
              (n.decodePercentEncoding = e.decodePercentEncoding),
              n
            );
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.parseMatches = function (t) {
              for (
                var e,
                  n = this.matcherRegex,
                  r = this.stripPrefix,
                  o = this.stripTrailingSlash,
                  i = this.decodePercentEncoding,
                  a = this.tagBuilder,
                  u = [],
                  l = function () {
                    var n = e[0],
                      l = e[1],
                      c = e[4],
                      f = e[5],
                      h = e[9],
                      p = e.index,
                      d = f || h,
                      b = t.charAt(p - 1);
                    if (!I.isValid(n, l)) return "continue";
                    if (p > 0 && "@" === b) return "continue";
                    if (p > 0 && d && s.wordCharRegExp.test(b))
                      return "continue";
                    if (
                      (/\?$/.test(n) && (n = n.substr(0, n.length - 1)),
                      s.matchHasUnbalancedClosingParen(n))
                    )
                      n = n.substr(0, n.length - 1);
                    else {
                      var m = s.matchHasInvalidCharAfterTld(n, l);
                      m > -1 && (n = n.substr(0, m));
                    }
                    var v = ["http://", "https://"].find(function (t) {
                      return !!l && -1 !== l.indexOf(t);
                    });
                    if (v) {
                      var g = n.indexOf(v);
                      ((n = n.substr(g)), (l = l.substr(g)), (p += g));
                    }
                    var w = l ? "scheme" : c ? "www" : "tld",
                      O = !!l;
                    u.push(
                      new y({
                        tagBuilder: a,
                        matchedText: n,
                        offset: p,
                        urlMatchType: w,
                        url: n,
                        protocolUrlMatch: O,
                        protocolRelativeMatch: !!d,
                        stripPrefix: r,
                        stripTrailingSlash: o,
                        decodePercentEncoding: i,
                      }),
                    );
                  },
                  s = this;
                null !== (e = n.exec(t));

              )
                l();
              return u;
            }),
            (e.prototype.matchHasUnbalancedClosingParen = function (t) {
              var e,
                n = t.charAt(t.length - 1);
              if (")" === n) e = "(";
              else if ("]" === n) e = "[";
              else {
                if ("}" !== n) return !1;
                e = "{";
              }
              for (var r = 0, o = 0, i = t.length - 1; o < i; o++) {
                var a = t.charAt(o);
                a === e ? r++ : a === n && (r = Math.max(r - 1, 0));
              }
              return 0 === r;
            }),
            (e.prototype.matchHasInvalidCharAfterTld = function (t, e) {
              if (!t) return -1;
              var n = 0;
              e && ((n = t.indexOf(":")), (t = t.slice(n)));
              var r = new RegExp(
                "^((.?//)?[-." + S + "]*[-" + S + "]\\.[-" + S + "]+)",
              ).exec(t);
              return null === r
                ? -1
                : ((n += r[1].length),
                  (t = t.slice(r[1].length)),
                  /^[^-.A-Za-z0-9:\/?#]/.test(t) ? n : -1);
            }),
            e
          );
        })(b),
        z = new RegExp("#[_".concat(S, "]{1,139}(?![_").concat(S, "])"), "g"),
        H = new RegExp("[^" + S + "]"),
        V = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.serviceName = "twitter"),
              (n.matcherRegex = z),
              (n.nonWordCharRegex = H),
              (n.serviceName = e.serviceName),
              n
            );
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.parseMatches = function (t) {
              for (
                var e,
                  n = this.matcherRegex,
                  r = this.nonWordCharRegex,
                  o = this.serviceName,
                  i = this.tagBuilder,
                  a = [];
                null !== (e = n.exec(t));

              ) {
                var u = e.index,
                  l = t.charAt(u - 1);
                if (0 === u || r.test(l)) {
                  var s = e[0],
                    c = e[0].slice(1);
                  a.push(
                    new h({
                      tagBuilder: i,
                      matchedText: s,
                      offset: u,
                      serviceName: o,
                      hashtag: c,
                    }),
                  );
                }
              }
              return a;
            }),
            e
          );
        })(b),
        W = new RegExp(
          ""
            .concat(
              /(?:(?:(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-\040.]?(?:\d[-\040.]?){6,12}\d+))([,;]+[0-9]+#?)*/
                .source,
              "|",
            )
            .concat(
              /(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/
                .source,
            ),
          "g",
        ),
        K = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return ((e.matcherRegex = W), e);
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.parseMatches = function (t) {
              for (
                var e, n = this.matcherRegex, r = this.tagBuilder, o = [];
                null !== (e = n.exec(t));

              ) {
                var i = e[0],
                  a = i.replace(/[^0-9,;#]/g, ""),
                  u = !(!e[1] && !e[2]),
                  l = 0 == e.index ? "" : t.substr(e.index - 1, 1),
                  s = t.substr(e.index + i.length, 1),
                  c = !l.match(/\d/) && !s.match(/\d/);
                this.testMatch(e[3]) &&
                  this.testMatch(i) &&
                  c &&
                  o.push(
                    new d({
                      tagBuilder: r,
                      matchedText: i,
                      offset: e.index,
                      number: a,
                      plusSign: u,
                    }),
                  );
              }
              return o;
            }),
            (e.prototype.testMatch = function (t) {
              return g.test(t);
            }),
            e
          );
        })(b),
        $ = new RegExp("@[_".concat(S, "]{1,50}(?![_").concat(S, "])"), "g"),
        Z = new RegExp("@[_.".concat(S, "]{1,30}(?![_").concat(S, "])"), "g"),
        G = new RegExp("@[-_.".concat(S, "]{1,50}(?![-_").concat(S, "])"), "g"),
        Y = new RegExp(
          "@[_.".concat(S, "]{1,23}[_").concat(S, "](?![_").concat(S, "])"),
          "g",
        ),
        X = new RegExp("[^" + S + "]"),
        Q = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.serviceName = "twitter"),
              (n.matcherRegexes = {
                twitter: $,
                instagram: Z,
                soundcloud: G,
                tiktok: Y,
              }),
              (n.nonWordCharRegex = X),
              (n.serviceName = e.serviceName),
              n
            );
          }
          return (
            Object(c.b)(e, t),
            (e.prototype.parseMatches = function (t) {
              var e,
                n = this.serviceName,
                r = this.matcherRegexes[this.serviceName],
                o = this.nonWordCharRegex,
                i = this.tagBuilder,
                a = [];
              if (!r) return a;
              for (; null !== (e = r.exec(t)); ) {
                var u = e.index,
                  l = t.charAt(u - 1);
                if (0 === u || o.test(l)) {
                  var s = e[0].replace(/\.+$/g, ""),
                    c = s.slice(1);
                  a.push(
                    new p({
                      tagBuilder: i,
                      matchedText: s,
                      offset: u,
                      serviceName: n,
                      mention: c,
                    }),
                  );
                }
              }
              return a;
            }),
            e
          );
        })(b);
      function J(t, e) {
        for (
          var n,
            r = e.onOpenTag,
            o = e.onCloseTag,
            a = e.onText,
            u = e.onComment,
            l = e.onDoctype,
            s = new tt(),
            f = 0,
            h = t.length,
            p = 0,
            d = 0,
            y = s;
          f < h;

        ) {
          var b = t.charAt(f);
          switch (p) {
            case 0:
              g(b);
              break;
            case 1:
              x(b);
              break;
            case 2:
              k(b);
              break;
            case 3:
              A(b);
              break;
            case 4:
              j(b);
              break;
            case 5:
              S(b);
              break;
            case 6:
              N(b);
              break;
            case 7:
              C(b);
              break;
            case 8:
              T(b);
              break;
            case 9:
              _(b);
              break;
            case 10:
              P(b);
              break;
            case 11:
              R(b);
              break;
            case 12:
              q(b);
              break;
            case 13:
              D(b);
              break;
            case 14:
              L(b);
              break;
            case 15:
              B(b);
              break;
            case 16:
              I(b);
              break;
            case 17:
              M(b);
              break;
            case 18:
              F(b);
              break;
            case 19:
              U(b);
              break;
            case 20:
              z(b);
              break;
            default:
              i(p);
          }
          f++;
        }
        function g(t) {
          "<" === t && V();
        }
        function x(t) {
          "!" === t
            ? (p = 13)
            : "/" === t
              ? ((p = 2),
                (y = new tt(
                  Object(c.a)(Object(c.a)({}, y), { isClosing: !0 }),
                )))
              : "<" === t
                ? V()
                : m.test(t)
                  ? ((p = 3),
                    (y = new tt(
                      Object(c.a)(Object(c.a)({}, y), { isOpening: !0 }),
                    )))
                  : ((p = 0), (y = s));
        }
        function A(t) {
          w.test(t)
            ? ((y = new tt(Object(c.a)(Object(c.a)({}, y), { name: K() }))),
              (p = 4))
            : "<" === t
              ? V()
              : "/" === t
                ? ((y = new tt(Object(c.a)(Object(c.a)({}, y), { name: K() }))),
                  (p = 12))
                : ">" === t
                  ? ((y = new tt(
                      Object(c.a)(Object(c.a)({}, y), { name: K() }),
                    )),
                    W())
                  : m.test(t) || v.test(t) || ":" === t || H();
        }
        function k(t) {
          ">" === t ? H() : m.test(t) ? (p = 3) : H();
        }
        function j(t) {
          w.test(t) ||
            ("/" === t
              ? (p = 12)
              : ">" === t
                ? W()
                : "<" === t
                  ? V()
                  : "=" === t || O.test(t) || E.test(t)
                    ? H()
                    : (p = 5));
        }
        function S(t) {
          w.test(t)
            ? (p = 6)
            : "/" === t
              ? (p = 12)
              : "=" === t
                ? (p = 7)
                : ">" === t
                  ? W()
                  : "<" === t
                    ? V()
                    : O.test(t) && H();
        }
        function N(t) {
          w.test(t) ||
            ("/" === t
              ? (p = 12)
              : "=" === t
                ? (p = 7)
                : ">" === t
                  ? W()
                  : "<" === t
                    ? V()
                    : O.test(t)
                      ? H()
                      : (p = 5));
        }
        function C(t) {
          w.test(t) ||
            ('"' === t
              ? (p = 8)
              : "'" === t
                ? (p = 9)
                : /[>=`]/.test(t)
                  ? H()
                  : "<" === t
                    ? V()
                    : (p = 10));
        }
        function T(t) {
          '"' === t && (p = 11);
        }
        function _(t) {
          "'" === t && (p = 11);
        }
        function P(t) {
          w.test(t) ? (p = 4) : ">" === t ? W() : "<" === t && V();
        }
        function R(t) {
          w.test(t)
            ? (p = 4)
            : "/" === t
              ? (p = 12)
              : ">" === t
                ? W()
                : "<" === t
                  ? V()
                  : ((p = 4), f--);
        }
        function q(t) {
          ">" === t
            ? ((y = new tt(Object(c.a)(Object(c.a)({}, y), { isClosing: !0 }))),
              W())
            : (p = 4);
        }
        function D(e) {
          "--" === t.substr(f, 2)
            ? ((f += 2),
              (y = new tt(
                Object(c.a)(Object(c.a)({}, y), { type: "comment" }),
              )),
              (p = 14))
            : "DOCTYPE" === t.substr(f, 7).toUpperCase()
              ? ((f += 7),
                (y = new tt(
                  Object(c.a)(Object(c.a)({}, y), { type: "doctype" }),
                )),
                (p = 20))
              : H();
        }
        function L(t) {
          "-" === t ? (p = 15) : ">" === t ? H() : (p = 16);
        }
        function B(t) {
          "-" === t ? (p = 18) : ">" === t ? H() : (p = 16);
        }
        function I(t) {
          "-" === t && (p = 17);
        }
        function M(t) {
          p = "-" === t ? 18 : 16;
        }
        function F(t) {
          ">" === t ? W() : "!" === t ? (p = 19) : "-" === t || (p = 16);
        }
        function U(t) {
          "-" === t ? (p = 17) : ">" === t ? W() : (p = 16);
        }
        function z(t) {
          ">" === t ? W() : "<" === t && V();
        }
        function H() {
          ((p = 0), (y = s));
        }
        function V() {
          ((p = 1), (y = new tt({ idx: f })));
        }
        function W() {
          var e = t.slice(d, y.idx);
          (e && a(e, d),
            "comment" === y.type
              ? u(y.idx)
              : "doctype" === y.type
                ? l(y.idx)
                : (y.isOpening && r(y.name, y.idx),
                  y.isClosing && o(y.name, y.idx)),
            H(),
            (d = f + 1));
        }
        function K() {
          var e = y.idx + (y.isClosing ? 2 : 1);
          return t.slice(e, f).toLowerCase();
        }
        d < f && ((n = t.slice(d, f)), a(n, d), (d = f + 1));
      }
      var tt = function (t) {
          (void 0 === t && (t = {}),
            (this.idx = void 0 !== t.idx ? t.idx : -1),
            (this.type = t.type || "tag"),
            (this.name = t.name || ""),
            (this.isOpening = !!t.isOpening),
            (this.isClosing = !!t.isClosing));
        },
        et = (function () {
          function t(e) {
            (void 0 === e && (e = {}),
              (this.version = t.version),
              (this.urls = {}),
              (this.email = !0),
              (this.phone = !0),
              (this.hashtag = !1),
              (this.mention = !1),
              (this.newWindow = !0),
              (this.stripPrefix = { scheme: !0, www: !0 }),
              (this.stripTrailingSlash = !0),
              (this.decodePercentEncoding = !0),
              (this.truncate = { length: 0, location: "end" }),
              (this.className = ""),
              (this.replaceFn = null),
              (this.context = void 0),
              (this.sanitizeHtml = !1),
              (this.matchers = null),
              (this.tagBuilder = null),
              (this.urls = this.normalizeUrlsCfg(e.urls)),
              (this.email = "boolean" == typeof e.email ? e.email : this.email),
              (this.phone = "boolean" == typeof e.phone ? e.phone : this.phone),
              (this.hashtag = e.hashtag || this.hashtag),
              (this.mention = e.mention || this.mention),
              (this.newWindow =
                "boolean" == typeof e.newWindow ? e.newWindow : this.newWindow),
              (this.stripPrefix = this.normalizeStripPrefixCfg(e.stripPrefix)),
              (this.stripTrailingSlash =
                "boolean" == typeof e.stripTrailingSlash
                  ? e.stripTrailingSlash
                  : this.stripTrailingSlash),
              (this.decodePercentEncoding =
                "boolean" == typeof e.decodePercentEncoding
                  ? e.decodePercentEncoding
                  : this.decodePercentEncoding),
              (this.sanitizeHtml = e.sanitizeHtml || !1));
            var n = this.mention;
            if (
              !1 !== n &&
              -1 === ["twitter", "instagram", "soundcloud", "tiktok"].indexOf(n)
            )
              throw new Error(
                "invalid `mention` cfg '".concat(n, "' - see docs"),
              );
            var r = this.hashtag;
            if (
              !1 !== r &&
              -1 === ["twitter", "facebook", "instagram", "tiktok"].indexOf(r)
            )
              throw new Error(
                "invalid `hashtag` cfg '".concat(r, "' - see docs"),
              );
            ((this.truncate = this.normalizeTruncateCfg(e.truncate)),
              (this.className = e.className || this.className),
              (this.replaceFn = e.replaceFn || this.replaceFn),
              (this.context = e.context || this));
          }
          return (
            (t.link = function (e, n) {
              return new t(n).link(e);
            }),
            (t.parse = function (e, n) {
              return new t(n).parse(e);
            }),
            (t.prototype.normalizeUrlsCfg = function (t) {
              return (
                null == t && (t = !0),
                "boolean" == typeof t
                  ? { schemeMatches: t, wwwMatches: t, tldMatches: t }
                  : {
                      schemeMatches:
                        "boolean" != typeof t.schemeMatches || t.schemeMatches,
                      wwwMatches:
                        "boolean" != typeof t.wwwMatches || t.wwwMatches,
                      tldMatches:
                        "boolean" != typeof t.tldMatches || t.tldMatches,
                    }
              );
            }),
            (t.prototype.normalizeStripPrefixCfg = function (t) {
              return (
                null == t && (t = !0),
                "boolean" == typeof t
                  ? { scheme: t, www: t }
                  : {
                      scheme: "boolean" != typeof t.scheme || t.scheme,
                      www: "boolean" != typeof t.www || t.www,
                    }
              );
            }),
            (t.prototype.normalizeTruncateCfg = function (t) {
              return "number" == typeof t
                ? { length: t, location: "end" }
                : (function (t, e) {
                    for (var n in e)
                      e.hasOwnProperty(n) && void 0 === t[n] && (t[n] = e[n]);
                    return t;
                  })(t || {}, {
                    length: Number.POSITIVE_INFINITY,
                    location: "end",
                  });
            }),
            (t.prototype.parse = function (t) {
              var e = this,
                n = ["a", "style", "script"],
                r = 0,
                o = [];
              return (
                J(t, {
                  onOpenTag: function (t) {
                    n.indexOf(t) >= 0 && r++;
                  },
                  onText: function (t, n) {
                    if (0 === r) {
                      var i = (function (t, e) {
                          if (!e.global)
                            throw new Error(
                              "`splitRegex` must have the 'g' flag set",
                            );
                          for (var n, r = [], o = 0; (n = e.exec(t)); )
                            (r.push(t.substring(o, n.index)),
                              r.push(n[0]),
                              (o = n.index + n[0].length));
                          return (r.push(t.substring(o)), r);
                        })(
                          t,
                          /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
                        ),
                        a = n;
                      i.forEach(function (t, n) {
                        if (n % 2 == 0) {
                          var r = e.parseText(t, a);
                          o.push.apply(o, r);
                        }
                        a += t.length;
                      });
                    }
                  },
                  onCloseTag: function (t) {
                    n.indexOf(t) >= 0 && (r = Math.max(r - 1, 0));
                  },
                  onComment: function (t) {},
                  onDoctype: function (t) {},
                }),
                (o = this.compactMatches(o)),
                (o = this.removeUnwantedMatches(o))
              );
            }),
            (t.prototype.compactMatches = function (t) {
              t.sort(function (t, e) {
                return t.getOffset() - e.getOffset();
              });
              for (var e = 0; e < t.length - 1; ) {
                var n = t[e],
                  r = n.getOffset(),
                  o = n.getMatchedText().length,
                  i = r + o;
                if (e + 1 < t.length) {
                  if (t[e + 1].getOffset() === r) {
                    var a = t[e + 1].getMatchedText().length > o ? e : e + 1;
                    t.splice(a, 1);
                    continue;
                  }
                  if (t[e + 1].getOffset() < i) {
                    t.splice(e + 1, 1);
                    continue;
                  }
                }
                e++;
              }
              return t;
            }),
            (t.prototype.removeUnwantedMatches = function (t) {
              return (
                this.hashtag ||
                  o(t, function (t) {
                    return "hashtag" === t.getType();
                  }),
                this.email ||
                  o(t, function (t) {
                    return "email" === t.getType();
                  }),
                this.phone ||
                  o(t, function (t) {
                    return "phone" === t.getType();
                  }),
                this.mention ||
                  o(t, function (t) {
                    return "mention" === t.getType();
                  }),
                this.urls.schemeMatches ||
                  o(t, function (t) {
                    return (
                      "url" === t.getType() && "scheme" === t.getUrlMatchType()
                    );
                  }),
                this.urls.wwwMatches ||
                  o(t, function (t) {
                    return (
                      "url" === t.getType() && "www" === t.getUrlMatchType()
                    );
                  }),
                this.urls.tldMatches ||
                  o(t, function (t) {
                    return (
                      "url" === t.getType() && "tld" === t.getUrlMatchType()
                    );
                  }),
                t
              );
            }),
            (t.prototype.parseText = function (t, e) {
              (void 0 === e && (e = 0), (e = e || 0));
              for (
                var n = this.getMatchers(), r = [], o = 0, i = n.length;
                o < i;
                o++
              ) {
                for (
                  var a = n[o].parseMatches(t), u = 0, l = a.length;
                  u < l;
                  u++
                )
                  a[u].setOffset(e + a[u].getOffset());
                r.push.apply(r, a);
              }
              return r;
            }),
            (t.prototype.link = function (t) {
              if (!t) return "";
              this.sanitizeHtml &&
                (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
              for (
                var e = this.parse(t), n = [], r = 0, o = 0, i = e.length;
                o < i;
                o++
              ) {
                var a = e[o];
                (n.push(t.substring(r, a.getOffset())),
                  n.push(this.createMatchReturnVal(a)),
                  (r = a.getOffset() + a.getMatchedText().length));
              }
              return (n.push(t.substring(r)), n.join(""));
            }),
            (t.prototype.createMatchReturnVal = function (t) {
              var e;
              return (
                this.replaceFn && (e = this.replaceFn.call(this.context, t)),
                "string" == typeof e
                  ? e
                  : !1 === e
                    ? t.getMatchedText()
                    : e instanceof a
                      ? e.toAnchorString()
                      : t.buildTag().toAnchorString()
              );
            }),
            (t.prototype.getMatchers = function () {
              if (this.matchers) return this.matchers;
              var t = this.getTagBuilder(),
                e = [
                  new V({ tagBuilder: t, serviceName: this.hashtag }),
                  new L({ tagBuilder: t }),
                  new K({ tagBuilder: t }),
                  new Q({ tagBuilder: t, serviceName: this.mention }),
                  new U({
                    tagBuilder: t,
                    stripPrefix: this.stripPrefix,
                    stripTrailingSlash: this.stripTrailingSlash,
                    decodePercentEncoding: this.decodePercentEncoding,
                  }),
                ];
              return (this.matchers = e);
            }),
            (t.prototype.getTagBuilder = function () {
              var t = this.tagBuilder;
              return (
                t ||
                  (t = this.tagBuilder =
                    new l({
                      newWindow: this.newWindow,
                      truncate: this.truncate,
                      className: this.className,
                    })),
                t
              );
            }),
            (t.version = "3.15.0"),
            (t.AnchorTagBuilder = l),
            (t.HtmlTag = a),
            (t.matcher = {
              Email: L,
              Hashtag: V,
              Matcher: b,
              Mention: Q,
              Phone: K,
              Url: U,
            }),
            (t.match = {
              Email: f,
              Hashtag: h,
              Match: s,
              Mention: p,
              Phone: d,
              Url: y,
            }),
            t
          );
        })();
      e.a = et;
    },
    1711: function (t, e, n) {
      "use strict";
      (n.d(e, "b", function () {
        return O;
      }),
        n.d(e, "a", function () {
          return U;
        }));
      (n(9),
        n(10),
        n(14),
        n(30),
        n(27),
        n(76),
        n(12),
        n(31),
        n(18),
        n(26),
        n(234),
        n(28),
        n(59),
        n(40),
        n(24),
        n(47),
        n(42),
        n(37),
        n(43),
        n(8),
        n(84),
        n(615),
        n(19),
        n(11),
        n(29),
        n(13));
      var r = n(1582);
      function o(t, e, n, r) {
        var o = i(v(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
          ? function (t) {
              return o.apply(n, t);
            }
          : o;
      }
      function i() {
        return (i =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, n) {
                var r = a(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(null, arguments);
      }
      function a(t, e) {
        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = v(t)); );
        return t;
      }
      function u(t) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, c(r.key), r));
        }
      }
      function s(t, e, n) {
        return (
          e && l(t.prototype, e),
          n && l(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function c(t) {
        var e = (function (t, e) {
          if ("object" != u(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != u(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == u(e) ? e : e + "";
      }
      function f(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function h(t, e, n) {
        return (
          (e = v(e)),
          (function (t, e) {
            if (e && ("object" == u(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            b()
              ? Reflect.construct(e, n || [], v(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function p(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && m(t, e));
      }
      function d(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (d = function (t) {
          if (
            null === t ||
            !(function (t) {
              try {
                return (
                  -1 !== Function.toString.call(t).indexOf("[native code]")
                );
              } catch (e) {
                return "function" == typeof t;
              }
            })(t)
          )
            return t;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }
          function n() {
            return y(t, arguments, v(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            m(n, t)
          );
        })(t);
      }
      function y(t, e, n) {
        if (b()) return Reflect.construct.apply(null, arguments);
        var r = [null];
        r.push.apply(r, e);
        var o = new (t.bind.apply(t, r))();
        return (n && m(o, n.prototype), o);
      }
      function b() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (b = function () {
          return !!t;
        })();
      }
      function m(t, e) {
        return (m = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      function v(t) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var g = r.a.import("blots/embed"),
        w = (function (t) {
          function e(t, n) {
            var r;
            return (
              f(this, e),
              ((r = h(this, e, [t, n])).value = {}),
              (r.event = new Event(t)),
              r
            );
          }
          return (p(e, t), s(e));
        })(d(Event));
      var O = (function (t) {
        function e(t, n) {
          var r;
          return (f(this, e), ((r = h(this, e, [t, n])).mounted = !1), r);
        }
        return (
          p(e, t),
          s(
            e,
            [
              {
                key: "attach",
                value: function () {
                  (o(e, "attach", this, 3)([]),
                    this.mounted ||
                      ((this.mounted = !0),
                      (this.clickHandler = this.getClickHandler()),
                      (this.hoverHandler = this.getHoverHandler()),
                      this.domNode.addEventListener(
                        "click",
                        this.clickHandler,
                        !1,
                      ),
                      this.domNode.addEventListener(
                        "mouseenter",
                        this.hoverHandler,
                        !1,
                      )));
                },
              },
              {
                key: "detach",
                value: function () {
                  (o(e, "detach", this, 3)([]),
                    (this.mounted = !1),
                    this.clickHandler &&
                      (this.domNode.removeEventListener(
                        "click",
                        this.clickHandler,
                      ),
                      (this.clickHandler = void 0)));
                },
              },
              {
                key: "getClickHandler",
                value: function () {
                  var t = this;
                  return function (e) {
                    var n = t.buildEvent("mention-clicked", e);
                    (window.dispatchEvent(n), e.preventDefault());
                  };
                },
              },
              {
                key: "getHoverHandler",
                value: function () {
                  var t = this;
                  return function (e) {
                    var n = t.buildEvent("mention-hovered", e);
                    (window.dispatchEvent(n), e.preventDefault());
                  };
                },
              },
              {
                key: "buildEvent",
                value: function (t, e) {
                  var n = new w(t, { bubbles: !0, cancelable: !0 });
                  return (
                    (n.value = Object.assign({}, this.domNode.dataset)),
                    (n.event = e),
                    n
                  );
                },
              },
            ],
            [
              {
                key: "create",
                value: function (t) {
                  var n = o(e, "create", this, 2)([]);
                  if (
                    !(function (t) {
                      return (
                        "object" === u(t) &&
                        null !== t &&
                        "value" in t &&
                        "string" == typeof t.value &&
                        "denotationChar" in t &&
                        "string" == typeof t.denotationChar
                      );
                    })(t) ||
                    n instanceof HTMLElement == !1
                  )
                    return n;
                  var r = document.createElement("span");
                  if (
                    ((r.className = "ql-mention-denotation-char"),
                    (r.innerText = t.denotationChar),
                    n.appendChild(r),
                    "function" == typeof this.render)
                  )
                    n.appendChild(this.render(t));
                  else {
                    var i = document.createElement("span");
                    ((i.className = "ql-mention-value"),
                      (i.innerText = t.value),
                      n.appendChild(i));
                  }
                  return e.setDataValues(n, t);
                },
              },
              {
                key: "setDataValues",
                value: function (t, e) {
                  var n = t;
                  return (
                    Object.keys(e).forEach(function (t) {
                      n.dataset[t] = e[t];
                    }),
                    n
                  );
                },
              },
              {
                key: "value",
                value: function (t) {
                  return t.dataset;
                },
              },
            ],
          )
        );
      })(g);
      ((O.blotName = "mention"),
        (O.tagName = "span"),
        (O.className = "mention"));
      (n(38),
        n(34),
        n(21),
        n(20),
        n(22),
        n(16),
        n(1608),
        n(1662),
        n(48),
        n(49),
        n(468),
        n(17),
        n(94));
      var E = "Tab",
        x = "Enter",
        A = "Escape",
        k = "ArrowUp",
        j = "ArrowDown";
      (n(267), n(118), n(180));
      function S(t) {
        return (S =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function N(t, e, n) {
        var r = t;
        return (
          Object.keys(e).forEach(function (t) {
            n.indexOf(t) > -1 ? (r.dataset[t] = e[t]) : delete r.dataset[t];
          }),
          r
        );
      }
      function C(t, e) {
        null !== e &&
          ("object" === S(e) ? t.appendChild(e) : (t.innerText = e));
      }
      function T(t) {
        return (T =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function _(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(n), !0).forEach(function (e) {
                R(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : _(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function R(t, e, n) {
        return (
          (e = B(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function q(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return D(t, e);
                var n = {}.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? D(t, e)
                      : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return ((a = t.done), t);
          },
          e: function (t) {
            ((u = !0), (i = t));
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function D(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function L(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, B(r.key), r));
        }
      }
      function B(t) {
        var e = (function (t, e) {
          if ("object" != T(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != T(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == T(e) ? e : e + "";
      }
      function I(t, e, n) {
        return (
          (e = M(e)),
          (function (t, e) {
            if (e && ("object" == T(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            (function () {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (function () {
                return !!t;
              })();
            })()
              ? Reflect.construct(e, n || [], M(t).constructor)
              : e.apply(t, n),
          )
        );
      }
      function M(t) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function F(t, e) {
        return (F = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return ((t.__proto__ = e), t);
            })(t, e);
      }
      var U = (function (t) {
        function e(t, n) {
          var r, o;
          for (var i in ((function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          ((o = I(this, e, [t, n])).isOpen = !1),
          (o.itemIndex = 0),
          (o.values = []),
          (o.suspendMouseEnter = !1),
          Array.isArray(null == n ? void 0 : n.dataAttributes) &&
            (o.options.dataAttributes = o.options.dataAttributes
              ? o.options.dataAttributes.concat(n.dataAttributes)
              : n.dataAttributes),
          o.options)) {
            var a = i,
              u = o.options[a];
            "function" == typeof u && (o.options[a] = u.bind(o));
          }
          ((o.mentionContainer = document.createElement("div")),
            (o.mentionContainer.className = o.options.mentionContainerClass
              ? o.options.mentionContainerClass
              : ""),
            (o.mentionContainer.style.cssText =
              "display: none; position: absolute;"),
            (o.mentionContainer.onmousemove = o.onContainerMouseMove.bind(o)),
            o.options.fixMentionsToQuill &&
              (o.mentionContainer.style.width = "auto"),
            (o.mentionList = document.createElement("ul")),
            (o.mentionList.id = "quill-mention-list"),
            t.root.setAttribute("aria-owns", "quill-mention-list"),
            (o.mentionList.className = o.options.mentionListClass
              ? o.options.mentionListClass
              : ""),
            o.mentionContainer.appendChild(o.mentionList),
            t.on("text-change", o.onTextChange.bind(o)),
            t.on("selection-change", o.onSelectionChange.bind(o)),
            t.container.addEventListener("paste", function () {
              setTimeout(function () {
                var e = t.getSelection();
                o.onSelectionChange(e);
              });
            }),
            t.keyboard.addBinding({ key: E }, o.selectHandler.bind(o)),
            t.keyboard.bindings[E].unshift(t.keyboard.bindings[E].pop()));
          var l,
            s = q(null !== (r = o.options.selectKeys) && void 0 !== r ? r : []);
          try {
            for (s.s(); !(l = s.n()).done; ) {
              var c = l.value;
              t.keyboard.addBinding({ key: c }, o.selectHandler.bind(o));
            }
          } catch (t) {
            s.e(t);
          } finally {
            s.f();
          }
          return (
            t.keyboard.bindings[x].unshift(t.keyboard.bindings[x].pop()),
            t.keyboard.addBinding({ key: A }, o.escapeHandler.bind(o)),
            t.keyboard.addBinding({ key: k }, o.upHandler.bind(o)),
            t.keyboard.addBinding({ key: j }, o.downHandler.bind(o)),
            o
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && F(t, e));
          })(e, t),
          (function (t, e, n) {
            return (
              e && L(t.prototype, e),
              n && L(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          })(e, [
            {
              key: "selectHandler",
              value: function () {
                return (
                  !(this.isOpen && !this.existingSourceExecutionToken) ||
                  (this.selectItem(), !1)
                );
              },
            },
            {
              key: "escapeHandler",
              value: function () {
                return (
                  !this.isOpen ||
                  (this.existingSourceExecutionToken &&
                    (this.existingSourceExecutionToken.abandoned = !0),
                  this.hideMentionList(),
                  !1)
                );
              },
            },
            {
              key: "upHandler",
              value: function () {
                return (
                  !(this.isOpen && !this.existingSourceExecutionToken) ||
                  (this.prevItem(), !1)
                );
              },
            },
            {
              key: "downHandler",
              value: function () {
                return (
                  !(this.isOpen && !this.existingSourceExecutionToken) ||
                  (this.nextItem(), !1)
                );
              },
            },
            {
              key: "showMentionList",
              value: function () {
                ("fixed" === this.options.positioningStrategy
                  ? document.body.appendChild(this.mentionContainer)
                  : this.quill.container.appendChild(this.mentionContainer),
                  (this.mentionContainer.style.visibility = "hidden"),
                  (this.mentionContainer.style.display = ""),
                  (this.mentionContainer.scrollTop = 0),
                  this.setMentionContainerPosition(),
                  this.setIsOpen(!0));
              },
            },
            {
              key: "hideMentionList",
              value: function () {
                (this.options.onBeforeClose && this.options.onBeforeClose(),
                  (this.mentionContainer.style.display = "none"),
                  this.mentionContainer.remove(),
                  this.setIsOpen(!1),
                  this.quill.root.removeAttribute("aria-activedescendant"));
              },
            },
            {
              key: "highlightItem",
              value: function () {
                for (
                  var t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    e = 0;
                  e < this.mentionList.childNodes.length;
                  e += 1
                ) {
                  var n = this.mentionList.childNodes[e];
                  n instanceof HTMLElement && n.classList.remove("selected");
                }
                var r = this.mentionList.childNodes[this.itemIndex];
                if (
                  -1 !== this.itemIndex &&
                  "true" !== r.dataset.disabled &&
                  (r.classList.add("selected"),
                  this.quill.root.setAttribute("aria-activedescendant", r.id),
                  t)
                ) {
                  var o = r.offsetHeight,
                    i = r.offsetTop,
                    a = this.mentionContainer.scrollTop,
                    u = a + this.mentionContainer.offsetHeight;
                  i < a
                    ? (this.mentionContainer.scrollTop = i)
                    : i > u - o &&
                      (this.mentionContainer.scrollTop += i - u + o);
                }
              },
            },
            {
              key: "onContainerMouseMove",
              value: function () {
                this.suspendMouseEnter = !1;
              },
            },
            {
              key: "selectItem",
              value: function () {
                var t,
                  e,
                  n = this;
                if (-1 !== this.itemIndex) {
                  var r = this.mentionList.childNodes[this.itemIndex].dataset;
                  r.disabled ||
                    (null === (t = (e = this.options).onSelect) ||
                      void 0 === t ||
                      t.call(e, r, function (t) {
                        var e =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          r =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        return n.insertItem(t, e, r);
                      }),
                    this.hideMentionList());
                }
              },
            },
            {
              key: "insertItem",
              value: function (t, n) {
                var o,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  a = t;
                if (
                  null !== a &&
                  void 0 !== this.mentionCharPos &&
                  void 0 !== this.cursorPos
                ) {
                  var u,
                    l = P(P({}, this.options), i);
                  (l.showDenotationChar || (a.denotationChar = ""),
                    n
                      ? (u = this.cursorPos)
                      : ((u = this.mentionCharPos),
                        this.quill.deleteText(
                          this.mentionCharPos,
                          this.cursorPos - this.mentionCharPos,
                          r.a.sources.USER,
                        )));
                  var s = this.quill.insertEmbed(
                    u,
                    null !== (o = l.blotName) && void 0 !== o
                      ? o
                      : e.DEFAULTS.blotName,
                    a,
                    r.a.sources.USER,
                  );
                  return (
                    l.spaceAfterInsert
                      ? (this.quill.insertText(u + 1, " ", r.a.sources.USER),
                        this.quill.setSelection(u + 2, r.a.sources.USER))
                      : this.quill.setSelection(u + 1, r.a.sources.USER),
                    this.hideMentionList(),
                    s
                  );
                }
              },
            },
            {
              key: "onItemMouseEnter",
              value: function (t) {
                var e;
                if (
                  !this.suspendMouseEnter &&
                  t.target instanceof HTMLElement != !1
                ) {
                  var n = Number(
                    null === (e = t.target) || void 0 === e
                      ? void 0
                      : e.dataset.index,
                  );
                  Number.isNaN(n) ||
                    n === this.itemIndex ||
                    ((this.itemIndex = n), this.highlightItem(!1));
                }
              },
            },
            {
              key: "onDisabledItemMouseEnter",
              value: function () {
                this.suspendMouseEnter ||
                  ((this.itemIndex = -1), this.highlightItem(!1));
              },
            },
            {
              key: "onItemClick",
              value: function (t) {
                var e;
                (t.preventDefault(),
                  t.stopImmediatePropagation(),
                  t.currentTarget instanceof HTMLElement != !1 &&
                    ((this.itemIndex =
                      null !== (e = t.currentTarget) &&
                      void 0 !== e &&
                      e.dataset.index
                        ? Number.parseInt(t.currentTarget.dataset.index)
                        : -1),
                    this.highlightItem(),
                    this.selectItem()));
              },
            },
            {
              key: "onItemMouseDown",
              value: function (t) {
                (t.preventDefault(), t.stopImmediatePropagation());
              },
            },
            {
              key: "renderLoading",
              value: function () {
                var t,
                  e,
                  n,
                  r =
                    null !==
                      (t =
                        null === (e = (n = this.options).renderLoading) ||
                        void 0 === e
                          ? void 0
                          : e.call(n)) && void 0 !== t
                      ? t
                      : void 0;
                if (void 0 !== r)
                  if (
                    this.mentionContainer.getElementsByClassName(
                      "ql-mention-loading",
                    ).length > 0
                  )
                    this.showMentionList();
                  else {
                    this.mentionList.innerHTML = "";
                    var o = document.createElement("div");
                    ((o.className = "ql-mention-loading"),
                      C(o, r),
                      this.mentionContainer.append(o),
                      this.showMentionList());
                  }
              },
            },
            {
              key: "removeLoading",
              value: function () {
                var t =
                  this.mentionContainer.getElementsByClassName(
                    "ql-mention-loading",
                  );
                t.length > 0 && t[0].remove();
              },
            },
            {
              key: "renderList",
              value: function (t, e, n) {
                if (e && e.length > 0) {
                  (this.removeLoading(),
                    (this.values = e),
                    (this.mentionList.innerText = ""));
                  for (var r = -1, o = 0; o < e.length; o += 1) {
                    var i = document.createElement("li");
                    ((i.id = "quill-mention-item-" + o),
                      (i.className = this.options.listItemClass
                        ? this.options.listItemClass
                        : ""),
                      e[o].disabled
                        ? ((i.className += " disabled"),
                          i.setAttribute("aria-hidden", "true"))
                        : -1 === r && (r = o),
                      (i.dataset.index = o.toString()),
                      C(i, this.options.renderItem(e[o], n)),
                      e[o].disabled
                        ? (i.onmouseenter =
                            this.onDisabledItemMouseEnter.bind(this))
                        : ((i.onmouseenter = this.onItemMouseEnter.bind(this)),
                          (i.onmouseup = this.onItemClick.bind(this)),
                          (i.onmousedown = this.onItemMouseDown.bind(this))),
                      (i.dataset.denotationChar = t),
                      this.mentionList.appendChild(
                        N(i, e[o], this.options.dataAttributes),
                      ));
                  }
                  ((this.itemIndex = r),
                    this.highlightItem(),
                    this.showMentionList());
                } else this.hideMentionList();
              },
            },
            {
              key: "nextItem",
              value: function () {
                var t,
                  e,
                  n = 0;
                do {
                  if (
                    (n++,
                    (t = (this.itemIndex + n) % this.values.length),
                    (e =
                      "true" ===
                      this.mentionList.childNodes[t].dataset.disabled),
                    n === this.values.length + 1)
                  ) {
                    t = -1;
                    break;
                  }
                } while (e);
                ((this.itemIndex = t),
                  (this.suspendMouseEnter = !0),
                  this.highlightItem());
              },
            },
            {
              key: "prevItem",
              value: function () {
                var t,
                  e,
                  n = 0;
                do {
                  if (
                    (n++,
                    (t =
                      (this.itemIndex + this.values.length - n) %
                      this.values.length),
                    (e =
                      "true" ===
                      this.mentionList.childNodes[t].dataset.disabled),
                    n === this.values.length + 1)
                  ) {
                    t = -1;
                    break;
                  }
                } while (e);
                ((this.itemIndex = t),
                  (this.suspendMouseEnter = !0),
                  this.highlightItem());
              },
            },
            {
              key: "containerBottomIsNotVisible",
              value: function (t, e) {
                return (
                  t + this.mentionContainer.offsetHeight + e.top >
                  window.scrollY + window.innerHeight
                );
              },
            },
            {
              key: "containerRightIsNotVisible",
              value: function (t, e) {
                return (
                  !this.options.fixMentionsToQuill &&
                  t + this.mentionContainer.offsetWidth + e.left >
                    window.scrollX + document.documentElement.clientWidth
                );
              },
            },
            {
              key: "setIsOpen",
              value: function (t) {
                if (this.isOpen !== t) {
                  var e, n, r, o;
                  if (t)
                    null === (e = (n = this.options).onOpen) ||
                      void 0 === e ||
                      e.call(n);
                  else
                    null === (r = (o = this.options).onClose) ||
                      void 0 === r ||
                      r.call(o);
                  this.isOpen = t;
                }
              },
            },
            {
              key: "setMentionContainerPosition",
              value: function () {
                "fixed" === this.options.positioningStrategy
                  ? this.setMentionContainerPosition_Fixed()
                  : this.setMentionContainerPosition_Normal();
              },
            },
            {
              key: "setMentionContainerPosition_Normal",
              value: function () {
                var t = this;
                if (void 0 !== this.mentionCharPos) {
                  var e = this.quill.container.getBoundingClientRect(),
                    n = this.quill.getBounds(this.mentionCharPos);
                  if (null !== n) {
                    var r,
                      o,
                      i = this.mentionContainer.offsetHeight,
                      a = this.options.offsetTop,
                      u = this.options.offsetLeft;
                    if (this.options.fixMentionsToQuill) {
                      this.mentionContainer.style.right = "".concat(0, "px");
                    } else u += n.left;
                    if (this.containerRightIsNotVisible(u, e)) {
                      var l =
                        this.mentionContainer.offsetWidth +
                        this.options.offsetLeft;
                      u = e.width - l;
                    }
                    if ("top" === this.options.defaultMenuOrientation) {
                      if (
                        (a = this.options.fixMentionsToQuill
                          ? -1 * (i + this.options.offsetTop)
                          : n.top - (i + this.options.offsetTop)) +
                          e.top <=
                        0
                      ) {
                        var s = this.options.offsetTop;
                        (this.options.fixMentionsToQuill
                          ? (s += e.height)
                          : (s += n.bottom),
                          (a = s));
                      }
                    } else if (
                      (this.options.fixMentionsToQuill
                        ? (a += e.height)
                        : (a += n.bottom),
                      this.containerBottomIsNotVisible(a, e))
                    ) {
                      var c = -1 * this.options.offsetTop;
                      (this.options.fixMentionsToQuill || (c += n.top),
                        (a = c - i));
                    }
                    if (a >= 0)
                      null === (r = this.options.mentionContainerClass) ||
                        void 0 === r ||
                        r.split(" ").forEach(function (e) {
                          (t.mentionContainer.classList.add(
                            "".concat(e, "-bottom"),
                          ),
                            t.mentionContainer.classList.remove(
                              "".concat(e, "-top"),
                            ));
                        });
                    else
                      null === (o = this.options.mentionContainerClass) ||
                        void 0 === o ||
                        o.split(" ").forEach(function (e) {
                          (t.mentionContainer.classList.add(
                            "".concat(e, "-top"),
                          ),
                            t.mentionContainer.classList.remove(
                              "".concat(e, "-bottom"),
                            ));
                        });
                    ((this.mentionContainer.style.top = "".concat(a, "px")),
                      (this.mentionContainer.style.left = "".concat(u, "px")),
                      (this.mentionContainer.style.visibility = "visible"));
                  }
                }
              },
            },
            {
              key: "setMentionContainerPosition_Fixed",
              value: function () {
                var t = this;
                if (void 0 !== this.mentionCharPos) {
                  ((this.mentionContainer.style.position = "fixed"),
                    (this.mentionContainer.style.height = ""));
                  var e = this.quill.container.getBoundingClientRect(),
                    n = this.quill.getBounds(this.mentionCharPos);
                  if (null !== n) {
                    var r = {
                        right: e.right - n.right,
                        left: e.left + n.left,
                        top: e.top + n.top,
                        width: 0,
                        height: n.height,
                      },
                      o = this.options.fixMentionsToQuill ? e : r,
                      i = this.options.offsetTop,
                      a = this.options.offsetLeft;
                    if (this.options.fixMentionsToQuill) {
                      var u = o.right;
                      this.mentionContainer.style.right = "".concat(u, "px");
                    } else
                      (a += o.left) + this.mentionContainer.offsetWidth >
                        document.documentElement.clientWidth &&
                        (a -=
                          a +
                          this.mentionContainer.offsetWidth -
                          document.documentElement.clientWidth);
                    var l,
                      s,
                      c = o.top,
                      f =
                        document.documentElement.clientHeight -
                        (o.top + o.height),
                      h = this.mentionContainer.offsetHeight <= f,
                      p = this.mentionContainer.offsetHeight <= c;
                    if (
                      "bottom" ===
                      ("top" === this.options.defaultMenuOrientation && p
                        ? "top"
                        : ("bottom" === this.options.defaultMenuOrientation &&
                              h) ||
                            f > c
                          ? "bottom"
                          : "top")
                    )
                      ((i = o.top + o.height),
                        h ||
                          (this.mentionContainer.style.height = f - 3 + "px"),
                        null === (l = this.options.mentionContainerClass) ||
                          void 0 === l ||
                          l.split(" ").forEach(function (e) {
                            (t.mentionContainer.classList.add(
                              "".concat(e, "-bottom"),
                            ),
                              t.mentionContainer.classList.remove(
                                "".concat(e, "-top"),
                              ));
                          }));
                    else
                      ((i = o.top - this.mentionContainer.offsetHeight),
                        p ||
                          ((this.mentionContainer.style.height = c - 3 + "px"),
                          (i = 3)),
                        null === (s = this.options.mentionContainerClass) ||
                          void 0 === s ||
                          s.split(" ").forEach(function (e) {
                            (t.mentionContainer.classList.add(
                              "".concat(e, "-top"),
                            ),
                              t.mentionContainer.classList.remove(
                                "".concat(e, "-bottom"),
                              ));
                          }));
                    ((this.mentionContainer.style.top = "".concat(i, "px")),
                      (this.mentionContainer.style.left = "".concat(a, "px")),
                      (this.mentionContainer.style.visibility = "visible"));
                  }
                }
              },
            },
            {
              key: "getTextBeforeCursor",
              value: function () {
                var t,
                  e,
                  n = Math.max(
                    0,
                    (null !== (t = this.cursorPos) && void 0 !== t ? t : 0) -
                      this.options.maxChars,
                  );
                return this.quill.getText(
                  n,
                  (null !== (e = this.cursorPos) && void 0 !== e ? e : 0) - n,
                );
              },
            },
            {
              key: "onSomethingChange",
              value: function () {
                var t = this,
                  e = this.quill.getSelection();
                if (null != e) {
                  this.cursorPos = e.index;
                  var n,
                    r,
                    o,
                    i,
                    a = this.getTextBeforeCursor(),
                    u = Math.max(0, this.cursorPos - this.options.maxChars),
                    l = u ? this.quill.getText(u - 1, u) : "",
                    s =
                      ((n = a),
                      (r = this.options.mentionDenotationChars),
                      (o = this.options.isolateCharacter),
                      (i = this.options.allowInlineMentionChar),
                      r.reduce(
                        function (t, e) {
                          var r;
                          if (o && i) {
                            var a = new RegExp(
                                "^".concat(e, "|\\s").concat(e),
                                "g",
                              ),
                              u = (n.match(a) || []).pop();
                            if (!u)
                              return {
                                mentionChar: t.mentionChar,
                                mentionCharIndex: t.mentionCharIndex,
                              };
                            r =
                              u !== e
                                ? n.lastIndexOf(u) + u.length - e.length
                                : 0;
                          } else r = n.lastIndexOf(e);
                          return r > t.mentionCharIndex
                            ? { mentionChar: e, mentionCharIndex: r }
                            : {
                                mentionChar: t.mentionChar,
                                mentionCharIndex: t.mentionCharIndex,
                              };
                        },
                        { mentionChar: null, mentionCharIndex: -1 },
                      )),
                    c = s.mentionChar,
                    f = s.mentionCharIndex;
                  if (
                    null !== c &&
                    (function (t, e, n, r) {
                      if (-1 === t) return !1;
                      if (!n) return !0;
                      var o = t ? e[t - 1] : r;
                      return !o || !!o.match(/\s/);
                    })(f, a, this.options.isolateCharacter, l)
                  ) {
                    var h = this.cursorPos - (a.length - f);
                    this.mentionCharPos = h;
                    var p = a.substring(f + c.length);
                    if (
                      p.length >= this.options.minChars &&
                      (function (t, e) {
                        return e.test(t);
                      })(p, this.getAllowedCharsRegex(c))
                    ) {
                      var d, y;
                      (this.existingSourceExecutionToken &&
                        (this.existingSourceExecutionToken.abandoned = !0),
                        this.renderLoading());
                      var b = { abandoned: !1 };
                      ((this.existingSourceExecutionToken = b),
                        null === (d = (y = this.options).source) ||
                          void 0 === d ||
                          d.call(
                            y,
                            p,
                            function (e, n) {
                              b.abandoned ||
                                ((t.existingSourceExecutionToken = void 0),
                                t.renderList(c, e, n));
                            },
                            c,
                          ));
                    } else
                      (this.existingSourceExecutionToken &&
                        (this.existingSourceExecutionToken.abandoned = !0),
                        this.hideMentionList());
                  } else
                    (this.existingSourceExecutionToken &&
                      (this.existingSourceExecutionToken.abandoned = !0),
                      this.hideMentionList());
                }
              },
            },
            {
              key: "getAllowedCharsRegex",
              value: function (t) {
                return this.options.allowedChars instanceof RegExp
                  ? this.options.allowedChars
                  : null !==
                        (e =
                          null === (n = (r = this.options).allowedChars) ||
                          void 0 === n
                            ? void 0
                            : n.call(r, t)) && void 0 !== e
                    ? e
                    : /^[a-zA-Z0-9_]*$/;
                var e, n, r;
              },
            },
            {
              key: "onTextChange",
              value: function (t, e, n) {
                "user" === n &&
                  setTimeout(this.onSomethingChange.bind(this), 50);
              },
            },
            {
              key: "onSelectionChange",
              value: function (t) {
                null !== t && 0 === t.length
                  ? this.onSomethingChange()
                  : this.hideMentionList();
              },
            },
            {
              key: "openMenu",
              value: function (t) {
                var e = this.quill.getSelection(!0);
                (this.quill.insertText(e.index, t),
                  this.quill.blur(),
                  this.quill.focus());
              },
            },
          ])
        );
      })(r.a.import("core/module"));
      U.DEFAULTS = {
        mentionDenotationChars: ["@"],
        showDenotationChar: !0,
        allowedChars: /^[a-zA-Z0-9_]*$/,
        minChars: 0,
        maxChars: 31,
        offsetTop: 2,
        offsetLeft: 0,
        isolateCharacter: !1,
        allowInlineMentionChar: !1,
        fixMentionsToQuill: !1,
        positioningStrategy: "normal",
        defaultMenuOrientation: "bottom",
        blotName: "mention",
        dataAttributes: [
          "id",
          "value",
          "denotationChar",
          "link",
          "target",
          "disabled",
        ],
        linkTarget: "_blank",
        listItemClass: "ql-mention-list-item",
        mentionContainerClass: "ql-mention-list-container",
        mentionListClass: "ql-mention-list",
        spaceAfterInsert: !0,
        selectKeys: [x],
        source: function (t, e, n) {
          e([], t);
        },
        renderItem: function (t) {
          var e = t.value;
          return "".concat(e);
        },
        onSelect: function (t, e) {
          return e(t);
        },
        onOpen: function () {
          return !0;
        },
        onBeforeClose: function () {
          return !0;
        },
        onClose: function () {
          return !0;
        },
        renderLoading: function () {
          return null;
        },
      };
    },
    1844: function (t, e, n) {
      "use strict";
      var r = n(1605),
        o = n(1587);
      var i = function () {
        if (!arguments.length) return [];
        var t = arguments[0];
        return Object(o.a)(t) ? t : [t];
      };
      var a = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      };
      var u = function (t, e, n) {
        for (var r = n - 1, o = t.length; ++r < o; ) if (t[r] === e) return r;
        return -1;
      };
      var l = function (t, e) {
        return !!(null == t ? 0 : t.length) && u(t, e, 0) > -1;
      };
      var s = function (t, e, n, r, o, u) {
        var s = 1 & n,
          c = t.length,
          f = e.length;
        if (c != f && !(s && f > c)) return !1;
        var h = u.get(t),
          p = u.get(e);
        if (h && p) return h == e && p == t;
        var d = -1,
          y = !0,
          b = 2 & n ? new i() : void 0;
        for (u.set(t, e), u.set(e, t); ++d < c; ) {
          var m = t[d],
            v = e[d];
          if (r) var g = s ? r(v, m, d, e, t, u) : r(m, v, d, t, e, u);
          if (void 0 !== g) {
            if (g) continue;
            y = !1;
            break;
          }
          if (b) {
            if (
              !a(e, function (t, e) {
                if (!l(b, e) && (m === t || o(m, t, n, r, u))) return b.push(e);
              })
            ) {
              y = !1;
              break;
            }
          } else if (m !== v && !o(m, v, n, r, u)) {
            y = !1;
            break;
          }
        }
        return (u.delete(t), u.delete(e), y);
      };
      var c = function (t, e) {
          return t === e || (t != t && e != e);
        },
        f = n(1625),
        h = Object.prototype.hasOwnProperty;
      var p = function (t, e, n, r, o, i) {
          var a = 1 & n,
            u = Object(f.a)(t),
            l = u.length;
          if (l != Object(f.a)(e).length && !a) return !1;
          for (var s = l; s--; ) {
            var c = u[s];
            if (!(a ? c in e : h.call(e, c))) return !1;
          }
          var p = i.get(t),
            d = i.get(e);
          if (p && d) return p == e && d == t;
          var y = !0;
          (i.set(t, e), i.set(e, t));
          for (var b = a; ++s < l; ) {
            var m = t[(c = u[s])],
              v = e[c];
            if (r) var g = a ? r(v, m, c, e, t, i) : r(m, v, c, t, e, i);
            if (!(void 0 === g ? m === v || o(m, v, n, r, i) : g)) {
              y = !1;
              break;
            }
            b || (b = "constructor" == c);
          }
          if (y && !b) {
            var w = t.constructor,
              O = e.constructor;
            w == O ||
              !("constructor" in t) ||
              !("constructor" in e) ||
              ("function" == typeof w &&
                w instanceof w &&
                "function" == typeof O &&
                O instanceof O) ||
              (y = !1);
          }
          return (i.delete(t), i.delete(e), y);
        },
        d = n(1623),
        y = n(1603),
        b = n(1643),
        m = "[object Object]",
        v = Object.prototype.hasOwnProperty;
      var g = function (t, e, n, i, a, u) {
          var l = Object(o.a)(t),
            f = Object(o.a)(e),
            h = l ? "[object Array]" : Object(d.a)(t),
            g = f ? "[object Array]" : Object(d.a)(e),
            w = (h = "[object Arguments]" == h ? m : h) == m,
            O = (g = "[object Arguments]" == g ? m : g) == m,
            E = h == g;
          if (E && Object(y.a)(t)) {
            if (!Object(y.a)(e)) return !1;
            ((l = !0), (w = !1));
          }
          if (E && !w)
            return (
              u || (u = new r.a()),
              l || Object(b.a)(t) ? s(t, e, n, i, a, u) : c(t, e, h, n, i, a, u)
            );
          if (!(1 & n)) {
            var x = w && v.call(t, "__wrapped__"),
              A = O && v.call(e, "__wrapped__");
            if (x || A) {
              var k = x ? t.value() : t,
                j = A ? e.value() : e;
              return (u || (u = new r.a()), a(k, j, n, i, u));
            }
          }
          return !!E && (u || (u = new r.a()), p(t, e, n, i, a, u));
        },
        w = n(1607);
      var O = function t(e, n, r, o, i) {
        return (
          e === n ||
          (null == e || null == n || (!Object(w.a)(e) && !Object(w.a)(n))
            ? e != e && n != n
            : g(e, n, r, o, t, i))
        );
      };
      e.a = function (t, e) {
        return O(t, e);
      };
    },
  },
]);
//# sourceMappingURL=chunk.31.js.map
