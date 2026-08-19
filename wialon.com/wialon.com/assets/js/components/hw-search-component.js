(() => {
    "use strict";
    var e, t = {
            5066(e, t, r) {
                var o = r(3751),
                    s = r(641),
                    n = r(33);
                const a = ["action"],
                    l = ["placeholder"],
                    i = {
                        class: "field-dropdown"
                    },
                    c = ["href"],
                    u = {
                        class: "result-item"
                    },
                    d = {
                        class: "logo"
                    },
                    h = ["src", "alt"],
                    p = {
                        class: "title"
                    },
                    f = {
                        class: "type"
                    },
                    w = {
                        class: "field-dropdown-item"
                    },
                    b = {
                        class: "result-item"
                    },
                    m = {
                        class: "title"
                    };
                const g = new class {
                        constructor(e = "/v1/api") {
                            this.baseURL = e
                        }
                        async request(e, t) {
                            const r = await fetch(`${this.baseURL}/${e}`, { ...t,
                                    headers: {
                                        "Content-Type": "application/json",
                                        ...t.headers
                                    }
                                }),
                                o = await r.json();
                            return r.ok ? o : {
                                error: !0,
                                data: o,
                                status: r.status
                            }
                        }
                        get(e, t = {}) {
                            return this.request(e, {
                                method: "GET",
                                ...t
                            })
                        }
                        post(e, t, r = {}) {
                            return this.request(e, {
                                method: "POST",
                                ...r,
                                body: JSON.stringify(t)
                            })
                        }
                        put(e, t, r = {}) {
                            return this.request(e, {
                                method: "PUT",
                                ...r,
                                body: JSON.stringify(t)
                            })
                        }
                        delete(e, t = {}) {
                            return this.request(e, {
                                method: "DELETE",
                                ...t
                            })
                        }
                    },
                    v = {
                        name: "HWSearchComponent",
                        setup() {
                            const e = JSON.parse(document.querySelector('[data-js="meta"]') ? .textContent || "{}"),
                                {
                                    lang: t,
                                    translation: r
                                } = e;
                            return {
                                lang: t,
                                placeholder: r.placeholder,
                                feedbackMessage: r.feedbackMessage,
                                searchRedirectUrl: `/${t}/gps-hardware/search`
                            }
                        },
                        data: () => ({
                            query: "",
                            results: [],
                            showDropdown: !1
                        }),
                        mounted() {
                            this.debouncedHardwareSearch = this.debounce(this.hardwareSearch, 500)
                        },
                        methods: {
                            debounce(e, t) {
                                let r;
                                return function() {
                                    const o = this,
                                        s = arguments;
                                    clearTimeout(r), r = setTimeout((function() {
                                        r = null, e.apply(o, s)
                                    }), t)
                                }
                            },
                            async hardwareSearch() {
                                if (!this.query) return this.showDropdown = !1, void(this.results = []);
                                const e = await g.get(`hwd/search?lang=${this.lang}&q=${this.query}`);
                                this.showDropdown = !!this.query, this.results = await e
                            },
                            handleFocus() {
                                this.showDropdown = !!this.query
                            },
                            debounceSearch() {
                                this.debouncedHardwareSearch()
                            },
                            blurHandler(e) {
                                this.$el.contains(e.relatedTarget) || (this.showDropdown = !1)
                            }
                        }
                    };
                const y = (0, r(6262).A)(v, [
                    ["render", function(e, t, r, g, v, y) {
                        return (0, s.uX)(), (0, s.CE)("form", {
                            action: g.searchRedirectUrl
                        }, [(0, s.bo)((0, s.Lk)("input", {
                            placeholder: g.placeholder,
                            onInput: t[0] || (t[0] = (...e) => y.debounceSearch && y.debounceSearch(...e)),
                            onFocus: t[1] || (t[1] = (...e) => y.handleFocus && y.handleFocus(...e)),
                            autocomplete: "off",
                            "onUpdate:modelValue": t[2] || (t[2] = e => v.query = e),
                            class: "input field-input",
                            type: "text",
                            name: "q",
                            onBlur: t[3] || (t[3] = (...e) => y.blurHandler && y.blurHandler(...e))
                        }, null, 40, l), [
                            [o.Jo, v.query]
                        ]), t[4] || (t[4] = (0, s.Lk)("button", {
                            type: "submit",
                            class: "button field-icon-button"
                        }, [(0, s.Lk)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24"
                        }, [(0, s.Lk)("path", {
                            fill: "#A2A3C4",
                            "fill-rule": "evenodd",
                            d: "M2.75 11.5a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0Zm8.75 10.25c-5.66 0-10.25-4.59-10.25-10.25S5.84 1.25 11.5 1.25 21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75Z",
                            "clip-rule": "evenodd"
                        })])], -1)), (0, s.bo)((0, s.Lk)("div", i, [((0, s.uX)(!0), (0, s.CE)(s.FK, null, (0, s.pI)(v.results, (e => (0, s.bo)(((0, s.uX)(), (0, s.CE)("a", {
                            key: e.name,
                            class: "field-dropdown-item",
                            href: e.url
                        }, [(0, s.Lk)("span", u, [(0, s.Lk)("span", d, [(0, s.Lk)("img", {
                            src: e.logo,
                            alt: e.name,
                            loading: "lazy"
                        }, null, 8, h)]), (0, s.Lk)("span", p, (0, n.v_)(e.name), 1), (0, s.Lk)("span", f, (0, n.v_)(e.type), 1)])], 8, c)), [
                            [o.aG, v.results.length]
                        ]))), 128)), (0, s.bo)((0, s.Lk)("div", w, [(0, s.Lk)("div", b, [(0, s.Lk)("span", m, (0, n.v_)(g.feedbackMessage), 1)])], 512), [
                            [o.aG, !v.results.length]
                        ])], 512), [
                            [o.aG, v.showDropdown]
                        ])], 8, a)
                    }]
                ]);
                (0, o.Ef)(y).mount("#hw-search-component")
            }
        },
        r = {};

    function o(e) {
        var s = r[e];
        if (void 0 !== s) return s.exports;
        var n = r[e] = {
            id: e,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.exports
    }
    o.m = t, e = [], o.O = (t, r, s, n) => {
        if (!r) {
            var a = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [r, s, n] = e[u], l = !0, i = 0; i < r.length; i++)(!1 & n || a >= n) && Object.keys(o.O).every((e => o.O[e](r[i]))) ? r.splice(i--, 1) : (l = !1, n < a && (a = n));
                if (l) {
                    e.splice(u--, 1);
                    var c = s();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        n = n || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
        e[u] = [r, s, n]
    }, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, o.e = () => Promise.resolve(), o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.j = 119, (() => {
        var e;
        o.g.importScripts && (e = o.g.location + "");
        var t = o.g.document;
        if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
                for (var s = r.length - 1; s > -1 && (!e || !/^http(s?):/.test(e));) e = r[s--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
    })(), (() => {
        o.b = "undefined" != typeof document && document.baseURI || self.location.href;
        var e = {
            119: 0
        };
        o.O.j = t => 0 === e[t];
        var t = (t, r) => {
                var s, n, [a, l, i] = r,
                    c = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (s in l) o.o(l, s) && (o.m[s] = l[s]);
                    if (i) var u = i(o)
                }
                for (t && t(r); c < a.length; c++) n = a[c], o.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                return o.O(u)
            },
            r = self.webpackChunkwialon_webclient = self.webpackChunkwialon_webclient || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), o.nc = void 0;
    var s = o.O(void 0, [121], (() => o(5066)));
    s = o.O(s)
})();