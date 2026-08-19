(() => {
    "use strict";
    var e, a, t, o = {
            2298(e, a, t) {
                t.d(a, {
                    A: () => n
                });
                var o = t(8985),
                    r = t(7518);
                const n = (0, t(6262).A)(r.A, [
                    ["render", o.X]
                ])
            },
            5503(e, a, t) {
                t.d(a, {
                    A: () => o
                });
                const o = {
                    name: "FormButton",
                    props: {
                        type: {
                            type: String,
                            default: "button"
                        },
                        classes: {
                            type: [String, Array, Object],
                            default: ""
                        },
                        buttonStyles: {
                            type: Object,
                            default: () => ({
                                primary: !1,
                                forward: !1,
                                back: !1
                            })
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        text: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        computedClasses() {
                            return ["button-form", {
                                "button primary primary-small v1": this.buttonStyles.primary
                            }, {
                                "button-form-forward": this.buttonStyles.forward
                            }, {
                                "button-form-back": this.buttonStyles.back
                            }, this.classes]
                        }
                    }
                }
            },
            1576(e, a, t) {
                t.d(a, {
                    A: () => n
                });
                var o = t(9429),
                    r = t(932);
                const n = (0, t(6262).A)(r.A, [
                    ["render", o.X]
                ])
            },
            2665(e, a, t) {
                t.d(a, {
                    A: () => o
                });
                const o = {
                    name: "InputField",
                    props: {
                        field: {
                            type: {
                                id: String,
                                placeholder: String,
                                type: String,
                                name: String,
                                checked: Boolean
                            },
                            default: () => {}
                        },
                        modelValue: {
                            type: [String, Number, Boolean],
                            default: ""
                        }
                    },
                    emits: ["update:modelValue"],
                    methods: {
                        handleInput(e) {
                            const a = this.field.preventNegative ? e.target.value.replace("-", "") : e.target.value;
                            e.target.value = a, this.$emit("update:modelValue", a)
                        }
                    }
                }
            },
            6808(e, a, t) {
                t.d(a, {
                    A: () => b
                });
                var o = t(641),
                    r = t(953),
                    n = t(33),
                    i = t(3876),
                    l = t(2057);
                const s = {
                        class: "request-form-button-group"
                    },
                    d = ["for"],
                    c = ["id", "value", "checked", "onInput"],
                    u = {
                        class: "request-form-button request-form-button-icon",
                        tabindex: "0"
                    },
                    m = {
                        key: 0,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16"
                    },
                    p = {
                        key: 1,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16"
                    },
                    b = {
                        __name: "FormTabs",
                        setup(e) {
                            const a = (0, l.J)(i.t.language),
                                t = [{
                                    id: "business-use",
                                    purpose: null,
                                    component: "InitialStep",
                                    label: a.tabs.business,
                                    business: !0
                                }, {
                                    id: "personal-use",
                                    purpose: "Personal",
                                    component: "PersonalStep",
                                    gtmEvent: "personal-request",
                                    label: a.tabs.personal,
                                    personal: !0
                                }];
                            return (e, a) => ((0, o.uX)(), (0, o.CE)("div", s, [((0, o.uX)(), (0, o.CE)(o.FK, null, (0, o.pI)(t, ((e, t) => (0, o.Lk)("label", {
                                key: t,
                                class: "request-form-button-label",
                                for: e.id,
                                role: "button"
                            }, [(0, o.Lk)("input", {
                                id: e.id,
                                class: "request-form-button-input",
                                type: "radio",
                                name: "purpose",
                                value: e.value,
                                checked: (0, r.R1)(i.t).state.ui.activeTab === e.purpose || "" === (0, r.R1)(i.t).state.ui.activeTab && e.business,
                                onInput: a => function({
                                    purpose: e,
                                    gtmEvent: a,
                                    component: t
                                }) {
                                    i.t.mutations.updateFormData({
                                        acquisition: e,
                                        gtmEvent: a
                                    }), i.t.mutations.updateProperties("ui", {
                                        activeTab: e,
                                        component: t
                                    })
                                }(e)
                            }, null, 40, c), (0, o.Lk)("span", u, [e.business ? ((0, o.uX)(), (0, o.CE)("svg", m, [...a[0] || (a[0] = [(0, o.Lk)("path", {
                                fill: "#05055d",
                                "fill-rule": "evenodd",
                                d: "M8.035.833h-.07c-.599 0-1.098 0-1.495.054-.418.056-.796.18-1.1.483-.303.304-.427.682-.483 1.1-.054.397-.054.896-.054 1.495v.052c-1.347.044-2.156.202-2.719.764-.78.781-.78 2.038-.78 4.552s0 3.772.78 4.553c.781.78 2.039.78 4.553.78h2.666c2.514 0 3.772 0 4.553-.78.78-.781.78-2.038.78-4.553 0-2.514 0-3.77-.78-4.552-.563-.562-1.372-.72-2.72-.764v-.052c0-.599 0-1.098-.053-1.495-.056-.418-.18-.796-.483-1.1-.304-.303-.682-.427-1.1-.483C9.133.833 8.634.833 8.035.833Zm2.132 3.168V4c0-.643-.001-1.074-.045-1.396-.041-.308-.113-.44-.2-.527-.086-.086-.218-.158-.526-.2-.322-.043-.753-.044-1.396-.044-.643 0-1.074.001-1.396.045-.308.041-.44.113-.527.2-.086.086-.158.218-.2.526-.043.322-.044.753-.044 1.396v.001L6.667 4h2.666l.834.001ZM11.333 6A.667.667 0 1 1 10 6a.667.667 0 0 1 1.333 0Zm-6 .667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z",
                                "clip-rule": "evenodd"
                            }, null, -1)])])) : (0, o.Q3)("v-if", !0), e.personal ? ((0, o.uX)(), (0, o.CE)("svg", p, [...a[1] || (a[1] = [(0, o.Lk)("circle", {
                                cx: "8",
                                cy: "4",
                                r: "2.667",
                                fill: "#05055d"
                            }, null, -1), (0, o.Lk)("path", {
                                fill: "#05055d",
                                d: "M13.333 11.667c0 1.656 0 3-5.333 3s-5.333-1.344-5.333-3c0-1.657 2.387-3 5.333-3 2.945 0 5.333 1.343 5.333 3Z"
                            }, null, -1)])])) : (0, o.Q3)("v-if", !0), (0, o.eW)(" " + (0, n.v_)(e.label), 1)])], 8, d))), 64))]))
                        }
                    }
            },
            7518(e, a, t) {
                t.d(a, {
                    A: () => o.A
                });
                var o = t(5503)
            },
            932(e, a, t) {
                t.d(a, {
                    A: () => o.A
                });
                var o = t(2665)
            },
            9429(e, a, t) {
                t.d(a, {
                    X: () => o.X
                });
                var o = t(4224)
            },
            8985(e, a, t) {
                t.d(a, {
                    X: () => i
                });
                var o = t(641),
                    r = t(33);
                const n = ["type", "disabled"];

                function i(e, a, t, i, l, s) {
                    return (0, o.uX)(), (0, o.CE)("button", {
                        type: t.type,
                        class: (0, r.C4)(s.computedClasses),
                        disabled: t.disabled
                    }, (0, r.v_)(t.text), 11, n)
                }
            },
            4224(e, a, t) {
                t.d(a, {
                    X: () => i
                });
                var o = t(641);
                const r = ["id", "type", "name", "value", "checked", "placeholder", "min"],
                    n = {
                        key: 0,
                        class: "radio-checkmark"
                    };

                function i(e, a, t, i, l, s) {
                    return (0, o.uX)(), (0, o.CE)(o.FK, null, [(0, o.Lk)("input", {
                        id: t.field.id,
                        type: t.field.type,
                        name: t.field.name,
                        value: t.modelValue,
                        checked: t.field.checked,
                        placeholder: t.field.placeholder,
                        min: t.field.min,
                        class: "field-input",
                        onInput: a[0] || (a[0] = (...e) => s.handleInput && s.handleInput(...e))
                    }, null, 40, r), "radio" === t.field.type ? ((0, o.uX)(), (0, o.CE)("span", n)) : (0, o.Q3)("v-if", !0)], 64)
                }
            },
            3600(e, a, t) {
                var o = t(3751),
                    r = t(641),
                    n = t(33);
                const i = {
                        class: "request-form-header"
                    },
                    l = {
                        class: "request-form-title"
                    },
                    s = {
                        key: 0,
                        class: "request-form-lead"
                    },
                    d = {
                        class: "request-form-business-start"
                    },
                    c = {
                        class: "request-form-text-bold"
                    },
                    u = ["for"],
                    m = {
                        class: "button-form-wrapper"
                    };
                var p = t(6808),
                    b = t(7735),
                    h = t(3876),
                    f = t(1576),
                    g = t(2298);
                const v = {
                    name: b.xR.name,
                    components: {
                        FormButton: g.A,
                        InputField: f.A,
                        FormTabs: p.A
                    },
                    setup: () => ({
                        config: b.xR.init(h.t.language),
                        store: h.t
                    }),
                    data: () => ({
                        selectedOption: {}
                    }),
                    activated() {
                        this.selectedOption.acquisition && h.t.mutations.updateFormData({
                            acquisition: this.selectedOption.acquisition
                        })
                    },
                    methods: {
                        handleAcquisitionPurpose({
                            gtmEvent: e,
                            acquisition: a,
                            component: t
                        }) {
                            this.selectedOption = {
                                acquisition: a,
                                component: t
                            }, h.t.mutations.updateFormData({
                                acquisition: a,
                                gtmEvent: e
                            })
                        }
                    }
                };
                var y = t(6262);
                const w = (0, y.A)(v, [
                    ["render", function(e, a, t, o, p, b) {
                        const h = (0, r.g2)("FormTabs"),
                            f = (0, r.g2)("InputField"),
                            g = (0, r.g2)("FormButton");
                        return (0, r.uX)(), (0, r.CE)(r.FK, null, [(0, r.Lk)("header", i, [(0, r.Lk)("h4", l, (0, n.v_)(o.store.state.heading || o.config.heading), 1), o.store.state.subheading ? ((0, r.uX)(), (0, r.CE)("div", s, (0, n.v_)(o.store.state.subheading), 1)) : (0, r.Q3)("v-if", !0)]), (0, r.bF)(h), (0, r.Lk)("div", d, [(0, r.Lk)("p", c, (0, n.v_)(o.config.subheading) + "*", 1), ((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(o.config.fields, (e => ((0, r.uX)(), (0, r.CE)("label", {
                            key: e.id,
                            class: "radio-label",
                            role: "button",
                            for: e.id
                        }, [(0, r.eW)((0, n.v_)(e.label) + " ", 1), (0, r.bF)(f, {
                            field: e,
                            "onUpdate:modelValue": a => b.handleAcquisitionPurpose(e)
                        }, null, 8, ["field", "onUpdate:modelValue"])], 8, u)))), 128))]), (0, r.Lk)("div", m, [(0, r.bF)(g, {
                            buttonStyles: {
                                primary: !0,
                                forward: !0
                            },
                            text: o.config.flow.next.label,
                            disabled: !o.store.state.formData ? .acquisition,
                            onClick: a[0] || (a[0] = e => o.store.mutations.setActiveComponent(p.selectedOption.component))
                        }, null, 8, ["text", "disabled"])])], 64)
                    }]
                ]);
                var S = t(9979),
                    q = t(215);
                const C = {
                        name: "SpinnerComponent",
                        props: {
                            transparent: {
                                type: Boolean,
                                default: !1
                            }
                        }
                    },
                    k = (0, y.A)(C, [
                        ["render", function(e, a, t, o, i, l) {
                            return (0, r.uX)(), (0, r.CE)("div", {
                                class: (0, n.C4)(["spinner", {
                                    transparent: t.transparent
                                }])
                            }, [...a[0] || (a[0] = [(0, r.Lk)("img", {
                                src: "/assets/media/spinner-2.svg",
                                width: "70",
                                height: "70",
                                alt: "Loading..."
                            }, null, -1)])], 2)
                        }]
                    ]),
                    E = {
                        EndUserInitialStep: (0, r.$V)((() => Promise.all([t.e(121), t.e(965), t.e(716)]).then(t.bind(t, 7684)))),
                        ProviderIdentifierStep: (0, r.$V)((() => Promise.all([t.e(121), t.e(727)]).then(t.bind(t, 9453)))),
                        StartupInitialStep: (0, r.$V)((() => Promise.all([t.e(121), t.e(965), t.e(316)]).then(t.bind(t, 8159)))),
                        StartupDetailsStep: (0, r.$V)((() => Promise.all([t.e(121), t.e(167)]).then(t.bind(t, 3449)))),
                        IntegratorInitialStep: (0, r.$V)((() => Promise.all([t.e(121), t.e(965), t.e(706)]).then(t.bind(t, 9136)))),
                        IntegratorDetailsStep: (0, r.$V)((() => Promise.all([t.e(121), t.e(313)]).then(t.bind(t, 6104)))),
                        SuccessMessage: (0, r.$V)((() => t.e(440).then(t.bind(t, 4440)))),
                        PersonalStep: (0, r.$V)((() => Promise.all([t.e(121), t.e(965), t.e(702)]).then(t.bind(t, 6702)))),
                        InitialStep: w
                    },
                    P = {
                        name: "RequestFormComponent",
                        components: {
                            LoadingSpinner: k
                        },
                        setup() {
                            const {
                                language: e,
                                state: a,
                                mutations: t
                            } = h.t;
                            (0, r.Gt)("getCountryLocationsById", (async function(a) {
                                t.setLoadingState("city", !0);
                                const o = await S.F.getAndTransformCountryLocations(a, e);
                                o ? .length && t.updateCommonData("locationsForSelectedCountry", o).setLoadingState("city", !1)
                            })), (0, r.Gt)("fetchCountries", (async function() {
                                if (a.commonData.countries.length) return;
                                t.setLoadingState("country", !0);
                                const o = await S.F.getAndTransformAllCountries(e);
                                o ? .length && t.updateCommonData("countries", o).setLoadingState("country", !1)
                            })), (0, r.Gt)("goto", (function(e) {
                                t.setActiveComponent(e)
                            }));
                            return {
                                asyncComponent: (0, r.EW)((() => {
                                    const {
                                        component: e
                                    } = a.ui;
                                    return E[e] || e
                                })),
                                store: h.t
                            }
                        },
                        data: () => ({
                            hasTrackedFieldInteraction: !1
                        }),
                        mounted() {
                            this.hideDOMSpinner()
                        },
                        methods: {
                            handleFieldInteraction(e) {
                                const a = e.target.closest("input, textarea, select, .checkmark");
                                if (this.hasTrackedFieldInteraction || !a) return;
                                const {
                                    acquisition: t
                                } = h.t.state.formData;
                                if (!t) return;
                                (0, q.zS)().sendFieldInteractionEvent({
                                    EndUser: "End user",
                                    Integrator: "Integrator",
                                    Personal: "Personal",
                                    Startup: "Startup"
                                }[t], h.t.state.ui.stepsIndicatorCurrent, a), this.hasTrackedFieldInteraction = !0
                            },
                            hideDOMSpinner() {
                                const e = document.querySelector('[data-js="spinner"]');
                                e && e.remove()
                            }
                        }
                    },
                    I = (0, y.A)(P, [
                        ["render", function(e, a, t, i, l, s) {
                            const d = (0, r.g2)("LoadingSpinner");
                            return (0, r.uX)(), (0, r.CE)("form", {
                                class: (0, n.C4)(["request-form", {
                                    sending: i.store.state.ui.loadingStates.sending,
                                    sent: i.store.state.ui.loadingStates.sent
                                }]),
                                novalidate: "",
                                onFocusin: a[0] || (a[0] = (...e) => s.handleFieldInteraction && s.handleFieldInteraction(...e)),
                                onInput: a[1] || (a[1] = (...e) => s.handleFieldInteraction && s.handleFieldInteraction(...e)),
                                onSubmit: a[2] || (a[2] = (0, o.D$)((() => {}), ["prevent"]))
                            }, [(0, r.bo)((0, r.bF)(d, {
                                transparent: !0
                            }, null, 512), [
                                [o.aG, i.store.state.ui.loadingStates.sending]
                            ]), ((0, r.uX)(), (0, r.Wv)(r.PR, null, [((0, r.uX)(), (0, r.Wv)(r.tY, null, {
                                default: (0, r.k6)((() => [((0, r.uX)(), (0, r.Wv)((0, r.$y)(i.asyncComponent), {
                                    key: i.store.state.ui.component
                                }))])),
                                fallback: (0, r.k6)((() => [(0, r.bF)(d, {
                                    transparent: !0
                                })])),
                                _: 1
                            }))], 1024))], 34)
                        }]
                    ]),
                    N = document.getElementById("request-form-component");
                N && ((0, h.M)(N), (0, o.Ef)(I).mount(N))
            },
            9979(e, a, t) {
                t.d(a, {
                    F: () => r
                });
                const o = new class {
                        constructor(e = "/v1/api") {
                            this.baseURL = e
                        }
                        async request(e, a) {
                            const t = await fetch(`${this.baseURL}/${e}`, { ...a,
                                    headers: {
                                        "Content-Type": "application/json",
                                        ...a.headers
                                    }
                                }),
                                o = await t.json();
                            return t.ok ? o : {
                                error: !0,
                                data: o,
                                status: t.status
                            }
                        }
                        get(e, a = {}) {
                            return this.request(e, {
                                method: "GET",
                                ...a
                            })
                        }
                        post(e, a, t = {}) {
                            return this.request(e, {
                                method: "POST",
                                ...t,
                                body: JSON.stringify(a)
                            })
                        }
                        put(e, a, t = {}) {
                            return this.request(e, {
                                method: "PUT",
                                ...t,
                                body: JSON.stringify(a)
                            })
                        }
                        delete(e, a = {}) {
                            return this.request(e, {
                                method: "DELETE",
                                ...a
                            })
                        }
                    },
                    r = {
                        getAndTransformCountryLocations: async (e, a = "en") => (await o.get(`countries/${e}/locations?lang=${a}`, {
                            priority: "low"
                        })).map((e => ({ ...e,
                            label: e.name
                        }))),
                        getAndTransformAllCountries: async (e = "en") => (await o.get(`countries?lang=${e}`, {
                            priority: "low"
                        })).map((e => ({ ...e,
                            label: e.name
                        }))),
                        geCountryById: e => o.get(`countries/${e}`),
                        geLocationId: e => o.get(`locations/${e}`),
                        getAndTransformOffices: async () => (await o.get("offices")).map((e => ({
                            type: "Feature",
                            geometry: {
                                coordinates: [parseFloat(e.coordinates.longitude), parseFloat(e.coordinates.latitude)],
                                type: "Point"
                            },
                            id: e.id,
                            countryId: e.countryId,
                            stateId: e.stateId,
                            cityId: e.cityId
                        }))),
                        getOfficeById: e => o.get(`offices/${e}`),
                        newLead: e => o.post("leads", { ...e,
                            requestPage: window.location.href
                        }),
                        getbusinessSpheres: () => o.get("business-spheres")
                    }
            },
            2057(e, a, t) {
                t.d(a, {
                    J: () => r
                });
                const o = {
                    en: {
                        endUser: {
                            label: "We are a fleet owner and want to track our corporate vehicles"
                        },
                        startup: {
                            label: "We are going to start a fleet management business and track our clients' vehicles"
                        },
                        integrator: {
                            label: "We’re already in the fleet management business but want to expand the product portfolio"
                        },
                        heading: "Fill out a request form to start working with Wialon, a fleet management software",
                        initialStep: {
                            heading: "Why are you interested in Wialon?"
                        },
                        next: "Next",
                        previous: "Back",
                        tabs: {
                            business: "Business use",
                            personal: "Personal use"
                        },
                        firstName: {
                            label: "First name",
                            placeholder: "Enter your first name",
                            error: "Please enter your first name"
                        },
                        lastName: {
                            label: "Last name",
                            placeholder: "Enter your last name",
                            error: "Please enter your last name"
                        },
                        email: {
                            label: "Email",
                            placeholder: "Enter your email",
                            error: "Please enter your email"
                        },
                        phone: {
                            label: "Phone",
                            error: "Please enter your phone number"
                        },
                        country: {
                            label: "Country"
                        },
                        selectOptions: "Select one of the options",
                        city: {
                            label: "City"
                        },
                        company: {
                            label: "Company",
                            placeholder: "Enter your company name",
                            error: "Please enter your company"
                        },
                        website: {
                            label: "Website",
                            placeholder: "Enter your company's website"
                        },
                        fleetSize: {
                            endUser: {
                                label: "Fleet size",
                                placeholder: "Number of vehicles (numeric only)",
                                error: ""
                            },
                            startup: {
                                label: "Potential number of tracked vehicles",
                                placeholder: "Number of vehicles (numeric only)",
                                error: ""
                            },
                            integrator: {
                                label: "Number of vehicles in your current system",
                                placeholder: "Number of vehicles (numeric only)",
                                error: ""
                            }
                        },
                        newsConsent: "I’m interested in receiving updates and news about Wialon. I understand I can revoke my consent at any time.",
                        personalDataConsent: 'I agree to personal data processing in accordance with Gurtam <a href="https://wialon.com/en/privacy-policy" target="_blank">Privacy Policy</a>',
                        step: {
                            label: "Step",
                            of: "of"
                        },
                        popup: {
                            noRegisteredOfficesFound: {
                                body: (e, a) => `We're sorry, but there are no Wialon partner offices in ${e} ${a?" / "+a:""} yet. However, there are Wialon partners nearby. Please send us a direct request, and we will introduce you via email. You can also change the search conditions.`
                            },
                            partnerConfirmation: {
                                heading: "You are sending the request to a partner from another country. Send anyway?"
                            },
                            partnerDetails: {
                                workDays: "Working days",
                                workTime: "Opening hours",
                                select: "Select partner"
                            }
                        },
                        cancel: "Cancel",
                        select: "Select",
                        request: "Request",
                        submit: "Submit",
                        comment: {
                            label: "Comment",
                            placeholder: "Enter your comment"
                        },
                        trial: "Get the trial version of Wialon",
                        businessNeeds: {
                            label: "What specific tasks in your business do you want to address with Wialon?",
                            options: [{
                                id: "FC",
                                label: "Fuel control"
                            }, {
                                id: "RO",
                                label: "Route optimization"
                            }, {
                                id: "JD",
                                label: "Job dispatching"
                            }, {
                                id: "WM",
                                label: "Workforce management"
                            }, {
                                id: "SDR",
                                label: "Sensor data readings"
                            }, {
                                id: "GP",
                                label: "Geofence and POI control"
                            }, {
                                id: "DBM",
                                label: "Driver behaviour monitoring"
                            }, {
                                id: "VT",
                                label: "Video telematics"
                            }, {
                                id: "RAM",
                                label: "Remote asset management"
                            }, {
                                id: "MM",
                                label: "Maintenance management"
                            }, {
                                id: "AR",
                                label: "Alerts and reports"
                            }, {
                                id: "OTH",
                                label: "Other"
                            }]
                        },
                        domain: {
                            label: "Your business domain"
                        },
                        trackingTarget: {
                            label: "What do you want to track?",
                            error: "Please specify what exactly you need to track",
                            options: [{
                                id: "MP",
                                label: "My mobile phone"
                            }, {
                                id: "FM",
                                label: "My family members"
                            }, {
                                id: "FMV",
                                label: "My family members' vehicles"
                            }, {
                                id: "PET",
                                label: "My pet(s)"
                            }, {
                                id: "other",
                                label: "Other"
                            }]
                        },
                        trackingTargetOther: {
                            placeholder: "Please specify what you need to track*"
                        },
                        hardware: {
                            label: "GPS hardware you use/want to use",
                            placeholder: "Specify GPS hardware you use/want to use"
                        },
                        fleetManagementSoftware: {
                            label: "Your current fleet management software",
                            placeholder: "Specify your current fleet management software"
                        },
                        successMessage: {
                            internal: "Thank you! Your data is sent. Our specialist will contact you.",
                            external: "Thanks! Your request has been sent. A Wialon partner will contact you soon."
                        },
                        shareDataWithPartnersConsent: "I understand that Wialon does not work directly with fleet owners, and I consent to my request and the associated data being shared with a Wialon partner.",
                        legalDisclaimer: "We may send you updates about our product. You can unsubscribe at any time."
                    },
                    ru: {
                        endUser: {
                            label: "Мы владеем автопарком и хотим его контролировать"
                        },
                        startup: {
                            label: "Мы – стартап в области управления автопарком"
                        },
                        integrator: {
                            label: "Мы предоставляем услуги по мониторингу транспорта, но хотим расширить их спектр"
                        },
                        heading: "Заполните заявку, чтобы начать работу с системой мониторинга транспорта Wialon",
                        initialStep: {
                            heading: "Цель приобретения Wialon"
                        },
                        next: "Далее",
                        previous: "Назад",
                        tabs: {
                            business: "Использование в бизнесе",
                            personal: "Личное использование"
                        },
                        firstName: {
                            label: "Имя",
                            placeholder: "Введите ваше имя",
                            error: "Пожалуйста, заполните поле «Имя»"
                        },
                        lastName: {
                            label: "Фамилия",
                            placeholder: "Введите вашу фамилию",
                            error: "Пожалуйста, заполните поле «Фамилия»"
                        },
                        email: {
                            label: "Email",
                            placeholder: "Введите ваш email",
                            error: "Пожалуйста, заполните поле «Email»"
                        },
                        phone: {
                            label: "Телефон",
                            error: "Пожалуйста, заполните поле «Телефон»"
                        },
                        country: {
                            label: "Страна"
                        },
                        selectOptions: "Выберите один из вариантов",
                        city: {
                            label: "Город"
                        },
                        company: {
                            label: "Компания",
                            placeholder: "Введите название вашей компании",
                            error: "Пожалуйста, заполните поле «Компания»"
                        },
                        website: {
                            label: "Сайт",
                            placeholder: "Введите сайт вашей компании"
                        },
                        fleetSize: {
                            endUser: {
                                label: "Размер автопарка",
                                placeholder: "Количество ТС (только число)",
                                error: ""
                            },
                            startup: {
                                label: "Потенциальное количество отслеживаемых транспортных средств",
                                placeholder: "Количество ТС (только число)",
                                error: ""
                            },
                            integrator: {
                                label: "Количество транспортных средств в вашей текущей системе",
                                placeholder: "Количество ТС (только число)",
                                error: ""
                            }
                        },
                        newsConsent: "Я хочу получать обновления и новости Wialon. Я понимаю, что могу отписаться от рассылки в любое время.",
                        personalDataConsent: 'Я согласен(а) на обработку персональных данных в соответствии с <a href="https://wialon.com/ru/privacy-policy" target="_blank">Политикой конфиденциальности</a> Gurtam',
                        step: {
                            label: "Шаг",
                            of: "из"
                        },
                        popup: {
                            noRegisteredOfficesFound: {
                                body: (e, a) => `К сожалению, в ${e} ${a?" / "+a:""} офисов партнеров Wialon еще нет, но они есть поблизости. Пожалуйста, напишите нам и мы вас представим. Также вы можете изменить условия поиска.`
                            },
                            partnerConfirmation: {
                                heading: "Вы отправляете заявку партнеру из другой страны. Все равно отправить?"
                            },
                            partnerDetails: {
                                workDays: "Рабочие дни",
                                workTime: "Время работы",
                                select: "Выбрать партнера"
                            }
                        },
                        cancel: "Отмена",
                        select: "Выбрать",
                        request: "Отправить заявку",
                        submit: "Отправить",
                        comment: {
                            label: "Комментарий",
                            placeholder: "Комментарий"
                        },
                        trial: "Получить пробную версию Wialon",
                        businessNeeds: {
                            label: "Какие бизнес-задачи вы хотите решить с помощью Wialon?",
                            options: [{
                                id: "КРТ",
                                label: "Контроль расхода топлива"
                            }, {
                                id: "ОМ",
                                label: "Оптимизация маршрутов"
                            }, {
                                id: "ДИСП",
                                label: "Диспетчеризация"
                            }, {
                                id: "УМС",
                                label: "Управление мобильными сотрудниками"
                            }, {
                                id: "ЧАД",
                                label: "Чтение и анализ данных с датчиков"
                            }, {
                                id: "КГЗ",
                                label: "Контроль геозон"
                            }, {
                                id: "ККВ",
                                label: "Контроль качества вождения"
                            }, {
                                id: "ВМ",
                                label: "Видеомониторинг"
                            }, {
                                id: "ДУО",
                                label: "Дистанционное управление объектами"
                            }, {
                                id: "УТО",
                                label: "Управление техобслуживанием"
                            }, {
                                id: "УУО",
                                label: "Уведомления и отчеты"
                            }, {
                                id: "ДРУГ",
                                label: "Другое"
                            }]
                        },
                        domain: {
                            label: "Ваша сфера бизнеса"
                        },
                        trackingTarget: {
                            label: "Что вы хотите контролировать?",
                            error: "Пожалуйста, укажите, что именно вы хотите отслеживать",
                            options: [{
                                id: "ММТ",
                                label: "Мой мобильный телефон"
                            }, {
                                id: "МС",
                                label: "Моя семья"
                            }, {
                                id: "МАА",
                                label: "Мое авто или автомобили моей семьи"
                            }, {
                                id: "МП",
                                label: "Мой питомец/питомцы"
                            }, {
                                id: "other",
                                label: "Другое"
                            }]
                        },
                        trackingTargetOther: {
                            placeholder: "Пожалуйста, укажите, что вы хотите отслеживать*"
                        },
                        hardware: {
                            label: "Оборудование в пользовании/планируемое оборудование",
                            placeholder: "Укажите оборудование в пользовании/планируемое оборудование"
                        },
                        fleetManagementSoftware: {
                            label: "Текущая система управления автопарком",
                            placeholder: "Пожалуйста, укажите текущую систему управления автопарком"
                        },
                        successMessage: {
                            internal: "Спасибо! Ваши данные отправлены. Наш специалист свяжется с вами.",
                            external: "Спасибо! Ваша заявка отправлена. Партнер Wialon скоро c вами свяжется."
                        },
                        shareDataWithPartnersConsent: "Я понимаю, что Wialon не работает напрямую с владельцами автопарков, и даю согласие на передачу моего запроса и связанных с ним данных партнеру Wialon.",
                        legalDisclaimer: "Мы можем связаться с вами и рассказать подробнее о нашем продукте. Отписаться можно в любое время."
                    },
                    es: {
                        endUser: {
                            label: "Somos propietarios de una flota y queremos rastrear nuestros vehículos corporativos"
                        },
                        startup: {
                            label: "Queremos emprender un negocio de gestión de flotas y hacer un seguimiento de los vehículos de nuestros clientes"
                        },
                        integrator: {
                            label: "Nos dedicamos a la gestión de flotas y queremos ampliar nuestra cartera de productos"
                        },
                        heading: "Rellene el formulario de solicitud para empezar a utilizar la plataforma de gestión de flotas Wialon",
                        initialStep: {
                            heading: "¿Por qué está usted interesado en Wialon?"
                        },
                        next: "Siguiente",
                        previous: "Anterior",
                        tabs: {
                            business: "El uso comercial",
                            personal: "El uso personal"
                        },
                        firstName: {
                            label: "Nombre",
                            placeholder: "Escriba su nombre",
                            error: 'Por favor, llene el campo "Nombre"'
                        },
                        lastName: {
                            label: "Apellido",
                            placeholder: "Escriba su apellido",
                            error: 'Por favor, llene el campo "Apellido"'
                        },
                        email: {
                            label: "E-mail",
                            placeholder: "Escriba su e-mail",
                            error: "Por favor, llene el campo “E-mail”"
                        },
                        phone: {
                            label: "Teléfono",
                            error: 'Por favor, llene el campo "Teléfono”'
                        },
                        country: {
                            label: "País"
                        },
                        selectOptions: "Seleccione una de las opciones",
                        city: {
                            label: "Ciudad"
                        },
                        company: {
                            label: "Empresa",
                            placeholder: "Escriba el nombre de su empresa",
                            error: 'Por favor, llene el campo "Empresa"'
                        },
                        website: {
                            label: "Página web",
                            placeholder: "Escriba la página web de su empresa"
                        },
                        fleetSize: {
                            endUser: {
                                label: "Tamaño de la flota",
                                placeholder: "Cantidad de vehículos (solo números)",
                                error: ""
                            },
                            startup: {
                                label: "Número potencial de vehículos rastreados",
                                placeholder: "Cantidad de vehículos (solo números)",
                                error: ""
                            },
                            integrator: {
                                label: "Número de vehículos en su sistema actual",
                                placeholder: "Cantidad de vehículos (solo números)",
                                error: ""
                            }
                        },
                        newsConsent: "Me gustaría recibir actualizaciones y noticias de Wialon. Entiendo que puedo revocar mi consentimiento en cualquier momento.",
                        personalDataConsent: 'Acepto el procesamiento de datos personales de acuerdo con la <a href="https://wialon.com/es/privacy-policy" target="_blank">Política de privacidad</a> de Gurtam',
                        step: {
                            label: "Paso",
                            of: "de"
                        },
                        popup: {
                            noRegisteredOfficesFound: {
                                body: (e, a) => `Lo sentimos, pero aún no hay oficinas de socios de Wialon en ${e} ${a?" / "+a:""} Sin embargo, hay socios de Wialon en las regiones cercanas. Por favor, envíenos una solicitud directa y le presentaremos vía e-mail. También puede cambiar los criterios de búsqueda.`
                            },
                            partnerConfirmation: {
                                heading: "Está a punto de enviar la solicitud a un socio ubicado en otro país. ¿Quiere proceder con la solicitud?"
                            },
                            partnerDetails: {
                                workDays: "Días de trabajo",
                                workTime: "Horario",
                                select: "Seleccionar socio"
                            }
                        },
                        cancel: "Cancelar",
                        select: "Seleccionar",
                        request: "Enviar solicitud",
                        submit: "Enviar",
                        comment: {
                            label: "Comentario",
                            placeholder: "Comentario"
                        },
                        trial: "Solicitar una versión de prueba de Wialon",
                        businessNeeds: {
                            label: "¿Qué tareas específicas de su empresa desea resolver con Wialon?",
                            options: [{
                                id: "CC",
                                label: "Control del consumo de combustible"
                            }, {
                                id: "OR",
                                label: "Optimización de rutas"
                            }, {
                                id: "AT",
                                label: "Asignación de tareas"
                            }, {
                                id: "AM",
                                label: "Administración de trabajadores móviles"
                            }, {
                                id: "LDS",
                                label: "Lectura de datos de sensores"
                            }, {
                                id: "CG",
                                label: "Control de geocercas"
                            }, {
                                id: "CDC",
                                label: "Control del comportamiento de conductores"
                            }, {
                                id: "SV",
                                label: "Seguimiento por vídeo"
                            }, {
                                id: "GRA",
                                label: "Gestión remota de activos"
                            }, {
                                id: "GMT",
                                label: "Gestión del mantenimiento técnico"
                            }, {
                                id: "NI",
                                label: "Notificaciones e informes"
                            }, {
                                id: "OTRO",
                                label: "Otro"
                            }]
                        },
                        domain: {
                            label: "¿En qué sector se especializa su empresa?"
                        },
                        trackingTarget: {
                            label: "¿Qué desea rastrear?",
                            error: "Por favor, indique exactamente lo que necesita rastrear",
                            options: [{
                                id: "MNT",
                                label: "Mi número de teléfono"
                            }, {
                                id: "MF",
                                label: "Mi familia"
                            }, {
                                id: "MVF",
                                label: "Mi vehículo o los vehículos de los miembros de mi familia"
                            }, {
                                id: "MM",
                                label: "Mi(s) mascota(s)"
                            }, {
                                id: "other",
                                label: "Otros"
                            }]
                        },
                        trackingTargetOther: {
                            placeholder: "Por favor, indique qué necesita rastrear*"
                        },
                        hardware: {
                            label: "Hardware GPS que utiliza/quiere utilizar",
                            placeholder: "Indique el hardware GPS que utiliza/quiere utilizar"
                        },
                        fleetManagementSoftware: {
                            label: "Su software de gestión de flotas actual",
                            placeholder: "Indique el nombre de su software de gestión de flotas actual"
                        },
                        successMessage: {
                            internal: "¡Gracias! Sus datos han sido enviados correctamente. Nuestro especialista se pondrá en contacto con usted.",
                            external: "¡Gracias! Su solicitud ha sido enviada. El socio de Wialon se comunicará con usted pronto."
                        },
                        shareDataWithPartnersConsent: "Entiendo que Wialon no trabaja directamente con los propietarios de flotas y doy mi consentimiento para que mi solicitud y los datos asociados sean compartidos con el socio de Wialon.",
                        legalDisclaimer: "Podemos contactarte con más información sobre nuestro producto. Puedes darte de baja en cualquier momento."
                    },
                    fr: {
                        endUser: {
                            label: "Nous sommes propriétaires d'une flotte et souhaitons suivre les véhicules de notre entreprise"
                        },
                        startup: {
                            label: "Nous allons démarrer une entreprise de gestion de flotte et suivre les véhicules de nos clients"
                        },
                        integrator: {
                            label: "Nous sommes déjà présents dans le secteur de la gestion de flotte, mais souhaitons élargir notre portefeuille de produits"
                        },
                        heading: "Veuillez remplir un formulaire de demande pour commencer à travailler avec Wialon, un logiciel de gestion de flotte",
                        initialStep: {
                            heading: "Pourquoi êtes-vous intéressé par Wialon ?"
                        },
                        next: "Suivant",
                        previous: "Retour",
                        tabs: {
                            business: "Un usage professionnel",
                            personal: "Un usage personnel"
                        },
                        firstName: {
                            label: "Prénom",
                            placeholder: "Saisissez votre prénom",
                            error: "Veuillez remplir le champ « Prénom »"
                        },
                        lastName: {
                            label: "Nom",
                            placeholder: "Saisissez votre nom",
                            error: "Veuillez remplir le champ « Nom »"
                        },
                        email: {
                            label: "Email",
                            placeholder: "Entrez votre email",
                            error: "Veuillez remplir le champ « Email »"
                        },
                        phone: {
                            label: "Téléphone",
                            error: "Veuillez remplir le champ « Téléphone »"
                        },
                        country: {
                            label: "Pays"
                        },
                        selectOptions: "Choisissez une des options",
                        city: {
                            label: "Ville"
                        },
                        company: {
                            label: "Entreprise",
                            placeholder: "Entrez le nom de votre entreprise",
                            error: "Veuillez remplir le champ « Entreprise »"
                        },
                        website: {
                            label: "Site",
                            placeholder: "Entrez le site de votre entreprise"
                        },
                        fleetSize: {
                            endUser: {
                                label: "Taille de la flotte",
                                placeholder: "Nombre de véhicules (chiffres uniquement)",
                                error: ""
                            },
                            startup: {
                                label: "Nombre potentiel de véhicules suivis",
                                placeholder: "Nombre de véhicules (chiffres uniquement)",
                                error: ""
                            },
                            integrator: {
                                label: "Nombre de véhicules dans votre système actuel",
                                placeholder: "Nombre de véhicules (chiffres uniquement)",
                                error: ""
                            }
                        },
                        newsConsent: "Je souhaite recevoir des mises à jour et des informations sur Wialon. Je comprends que je peux révoquer mon consentement à tout moment.",
                        personalDataConsent: 'J’accepte le traitement des données personnelles conformément à la <a href="https://wialon.com/fr/privacy-policy" target="_blank">Politique de confidentialité</a> de Gurtam',
                        step: {
                            label: "Étape",
                            of: "sur"
                        },
                        popup: {
                            noRegisteredOfficesFound: {
                                body: (e, a) => `Nous sommes désolés, mais il n'y a pas encore de bureaux de partenaires Wialon à ${e} ${a?" / "+a:""}. Cependant, il y a des partenaires Wialon à proximité. Veuillez nous envoyer une demande directe, et nous vous mettrons en relation par e-mail. Vous pouvez également modifier les conditions de recherche.`
                            },
                            partnerConfirmation: {
                                heading: "Vous envoyez la demande à un partenaire d'un autre pays. Envoyer quand même ?"
                            },
                            partnerDetails: {
                                workDays: "Jours",
                                workTime: "Heures d'ouverture",
                                select: "Sélectionner un partenaire"
                            }
                        },
                        cancel: "Annuler",
                        select: "Sélectionner",
                        request: "Envoyer la demande",
                        submit: "Soumettre",
                        comment: {
                            label: "Commentaire",
                            placeholder: "Commentaire"
                        },
                        trial: "Demander une démo de Wialon",
                        businessNeeds: {
                            label: "Quelles sont les tâches spécifiques à votre activité que vous souhaitez traiter avec Wialon ?",
                            options: [{
                                id: "CCC",
                                label: "Contrôle de consommation de combustible"
                            }, {
                                id: "OI",
                                label: "Optimisation de l'itinéraire"
                            }, {
                                id: "RT",
                                label: "Répartition des tâches"
                            }, {
                                id: "GMM",
                                label: "Gestion de la main-d'œuvre mobile"
                            }, {
                                id: "LDC",
                                label: "Lectures de données de capteur"
                            }, {
                                id: "CZ",
                                label: "Contrôle des zones"
                            }, {
                                id: "SCC",
                                label: "Surveillance du comportement du conducteur"
                            }, {
                                id: "SV",
                                label: "Surveillence vidéo"
                            }, {
                                id: "GAD",
                                label: "Gestion des actifs à distance"
                            }, {
                                id: "GM",
                                label: "Gestion de la maintenance"
                            }, {
                                id: "NEP",
                                label: "Notifications et rapports"
                            }, {
                                id: "AUT",
                                label: "Autre"
                            }]
                        },
                        domain: {
                            label: "Votre domaine d'activité"
                        },
                        trackingTarget: {
                            label: "Que voulez-vous suivre ?",
                            error: "Veuillez spécifier ce que vous voulez suivre exactement",
                            options: [{
                                id: "MNT",
                                label: "Mon numéro de téléphone"
                            }, {
                                id: "MF",
                                label: "Ma famille"
                            }, {
                                id: "VMF",
                                label: "Véhicules des membres de ma famille"
                            }, {
                                id: "MAD",
                                label: "Mon (mes) animal (-ux) domestique (-s)"
                            }, {
                                id: "other",
                                label: "Autre"
                            }]
                        },
                        trackingTargetOther: {
                            placeholder: "Veuillez spécifier ce que vous souhaitez suivre*"
                        },
                        hardware: {
                            label: "Matériel GPS que vous utilisez/souhaitez utiliser",
                            placeholder: "Veuillez spécifier le matériel GPS que vous utilisez/souhaitez utiliser"
                        },
                        fleetManagementSoftware: {
                            label: "Votre logiciel de gestion de flotte actuel",
                            placeholder: "Spécifiez votre logiciel de gestion de flotte actuel"
                        },
                        successMessage: {
                            internal: "Merci! Vos coordonnées ont été envoyées. Notre spécialiste vous contactera.",
                            external: "Merci ! Votre demande a été envoyée. Un partenaire Wialon vous contactera bientôt."
                        },
                        shareDataWithPartnersConsent: "Je comprends que Wialon ne travaille pas directement avec les propriétaires de flotte, et je consens à ce que ma demande et les données associées soient partagées avec un partenaire Wialon.",
                        legalDisclaimer: "Nous pourrions vous contacter pour vous donner plus d'infos sur notre produit. Vous pouvez vous désinscrire à tout moment."
                    },
                    pt: {
                        endUser: {
                            label: "Somos donos de uma frota e queremos rastrear nossos veículos corporativos"
                        },
                        startup: {
                            label: "Vamos abrir uma empresa de gestão de frotas e rastrear os veículos de nossos clientes"
                        },
                        integrator: {
                            label: "Já atuamos no ramo de gestão de frotas, mas queremos ampliar o portfólio de produtos"
                        },
                        heading: "Preencha um formulário de solicitação para começar a usar o Wialon, o software de gestão de frotas",
                        initialStep: {
                            heading: "Por que você está interessado no Wialon?"
                        },
                        next: "Próximo",
                        previous: "Voltar",
                        tabs: {
                            business: "Uso comercial",
                            personal: "Uso pessoal"
                        },
                        firstName: {
                            label: "Primeiro nome",
                            placeholder: "Insira seu primeiro nome",
                            error: "Por favor, insira seu primeiro nome"
                        },
                        lastName: {
                            label: "Sobrenome",
                            placeholder: "Insira seu sobrenome",
                            error: "Por favor, insira seu sobrenome"
                        },
                        email: {
                            label: "Email",
                            placeholder: "Insira seu email",
                            error: "Por favor, insira seu email"
                        },
                        phone: {
                            label: "Telefone",
                            error: "Por favor, insira seu número de telefone"
                        },
                        country: {
                            label: "País"
                        },
                        selectOptions: "Selecione uma das opções",
                        city: {
                            label: "Cidade"
                        },
                        company: {
                            label: "Empresa",
                            placeholder: "Insina o nome da sua empresa",
                            error: "Por favor, insira o nome da sua empresa"
                        },
                        website: {
                            label: "Site",
                            placeholder: "Insira o site da sua empresa"
                        },
                        fleetSize: {
                            endUser: {
                                label: "Tamanho da frota",
                                placeholder: "Número de veículos (apenas números)",
                                error: ""
                            },
                            startup: {
                                label: "Número potencial de veículos monitorados",
                                placeholder: "Número de veículos (apenas números)",
                                error: ""
                            },
                            integrator: {
                                label: "Número de veículos no seu sistema atual",
                                placeholder: "Número de veículos (apenas números)",
                                error: ""
                            }
                        },
                        newsConsent: "Tenho interesse em receber atualizações e novidades sobre o Wialon. Entendo que posso revogar meu consentimento a qualquer momento.",
                        personalDataConsent: 'Eu concordo com o processamento de dados pessoais de acordo com a <a href="https://wialon.com/pt/privacy-policy" target="_blank">Política de Privacida</a> de Gurtam',
                        step: {
                            label: "Etapa",
                            of: "de"
                        },
                        popup: {
                            noRegisteredOfficesFound: {
                                body: (e, a) => `Infelizmente ainda não temos escritórios de parceiros na região selecionada no mapa de parceiros Wialon ${e} ${a?" / "+a:""}. Entretanto, temos parceiros Wialon que atendem essa região. Por favor, envie-nos uma solicitação direta e nós os apresentaremos à você por e-mail. Você pode também alterar as condições da busca no mapa.`
                            },
                            partnerConfirmation: {
                                heading: "Você está enviando uma solicitação para um parceiro de um país diferente do seu. Gostaria de enviar mesmo assim?"
                            },
                            partnerDetails: {
                                workDays: "Dias úteis",
                                workTime: "Horário de funcionamento",
                                select: "Selecionar parceiro"
                            }
                        },
                        cancel: "Cancelar",
                        select: "Selecionar",
                        request: "Enviar solicitação",
                        submit: "Enviar",
                        comment: {
                            label: "Comentário",
                            placeholder: "Comentário"
                        },
                        trial: "Obtenha a versão de teste do Wialon",
                        businessNeeds: {
                            label: "Quais tarefas específicas da sua empresa você deseja realizar com Wialon?",
                            options: [{
                                id: "FC",
                                label: "Fuel control"
                            }, {
                                id: "RO",
                                label: "Route optimization"
                            }, {
                                id: "JD",
                                label: "Job dispatching"
                            }, {
                                id: "WM",
                                label: "Workforce management"
                            }, {
                                id: "SDR",
                                label: "Sensor data readings"
                            }, {
                                id: "GP",
                                label: "Geofence and POI control"
                            }, {
                                id: "DBM",
                                label: "Driver behaviour monitoring"
                            }, {
                                id: "VT",
                                label: "Video telematics"
                            }, {
                                id: "RAM",
                                label: "Remote asset management"
                            }, {
                                id: "MM",
                                label: "Maintenance management"
                            }, {
                                id: "AR",
                                label: "Alerts and reports"
                            }, {
                                id: "OTH",
                                label: "Other"
                            }]
                        },
                        domain: {
                            label: "Área de atuação da sua empresa"
                        },
                        trackingTarget: {
                            label: "O que você deseja rastrear?",
                            error: "Especifique exatamente o que você precisa rastrear",
                            options: [{
                                id: "MNT",
                                label: "Mon numéro de téléphone"
                            }, {
                                id: "MF",
                                label: "Ma famille"
                            }, {
                                id: "VMF",
                                label: "Véhicules des membres de ma famille"
                            }, {
                                id: "MAD",
                                label: "Mon (mes) animal (-ux) domestique (-s)"
                            }, {
                                id: "other",
                                label: "Autre"
                            }]
                        },
                        trackingTargetOther: {
                            placeholder: "Especifique o que você precisa rastrear*"
                        },
                        hardware: {
                            label: "Hardware GPS que você usa/gostaria de usar",
                            placeholder: "Especifique o hardware GPS que você usa/gostaria de usar"
                        },
                        fleetManagementSoftware: {
                            label: "Seu software de gerenciamento de frota atual",
                            placeholder: "Especifique o seu software de gestão de frota atual"
                        },
                        successMessage: {
                            internal: "Obrigado! Seus dados foram enviados. Nossos especialistas entrarão em contato.",
                            external: "Obrigado! Sua solicitação foi enviada. Um parceiro Wialon entrará em contato em breve."
                        },
                        shareDataWithPartnersConsent: "Entendo que o Wialon não trabalha diretamente com donos de frotas e concordo que minha solicitação e os dados associados a ela sejam compartilhados com um parceiro Wialon.",
                        legalDisclaimer: "Podemos entrar em contato com mais informações sobre nosso produto. Você pode cancelar a inscrição a qualquer momento."
                    }
                };

                function r(e) {
                    return o[e] || o.en
                }
            },
            215(e, a, t) {
                function o(e) {
                    const a = new URL(e);
                    let t = a.hostname;
                    const o = a.pathname.split("/").filter(Boolean);
                    return (o.length > 1 || 1 === o.length && o[0].length > 2) && (t += "/" + o.slice(1).join("/")), t
                }

                function r() {
                    return window.dataLayer = window.dataLayer || [], {
                        sendFieldInteractionEvent: (e, a, t) => {
                            window.dataLayer.push({
                                event: "field_interaction",
                                formType: "lead_request",
                                formAcquisition: e,
                                formStep: a,
                                fieldName: t.id || t.name
                            })
                        },
                        sendRequestErrorEvent: e => {
                            !Number.isInteger(e) || e < 400 || e >= 600 || window.dataLayer.push({
                                event: `request-error-${Math.floor(e/100)}xx`
                            })
                        },
                        sendConversionEvent: (e, a, t) => {
                            const r = {
                                page: o(window.location.href),
                                wialonRequestId: t,
                                language: a,
                                event: e
                            };
                            window.dataLayer.push({
                                formType: "step-by-step",
                                ...r
                            }), window.parent.postMessage({
                                type: "conversion.event",
                                payload: r
                            }, "*")
                        }
                    }
                }

                function n(e) {
                    const {
                        acquisition: a,
                        firstName: t,
                        lastName: o,
                        email: r,
                        phone: n,
                        personalDataConsent: i,
                        newsConsent: l,
                        country: s,
                        city: d,
                        company: c,
                        website: u,
                        fleetSize: m,
                        ...p
                    } = e, b = {
                        personalDataConsent: i,
                        countryId: s ? .id,
                        cityId: d ? .id,
                        acquisition: a,
                        newsConsent: l,
                        firstName: t,
                        lastName: o,
                        email: r,
                        phone: n
                    }, h = { ...b,
                        fleetSize: m,
                        company: c,
                        website: u
                    }, f = {
                        EndUser: () => {
                            const {
                                businessSphere: e,
                                ...a
                            } = p, t = a ? .businessNeeds ? .length ? a ? .businessNeeds.map((e => e.label)).join(", ") : "";
                            return { ...h,
                                businessSphereId: e.value,
                                businessNeeds: t,
                                comment: a ? .comment || "",
                                trial: a ? .trial || !1
                            }
                        },
                        Integrator: () => {
                            const {
                                hardware: a,
                                software: t,
                                comment: o,
                                trial: r
                            } = e;
                            return { ...h,
                                hardware: a,
                                comment: o,
                                software: t,
                                trial: r
                            }
                        },
                        Startup: () => {
                            const {
                                hardware: a,
                                comment: t,
                                trial: o
                            } = e;
                            return { ...h,
                                hardware: a,
                                comment: t,
                                trial: o
                            }
                        },
                        Personal: () => {
                            const {
                                trackingTarget: a,
                                trackingTargetOther: t
                            } = e;
                            let o = a.label;
                            return "other" === a.id && "" !== t && (o = `${a.label}: ${t}`), {
                                trackingTarget: o,
                                company: `${e.firstName} ${e.lastName}`,
                                ...b
                            }
                        }
                    };
                    return f[a] ? f[a]() : void 0
                }

                function i(e) {
                    const a = e.replace(/\D/g, "").length;
                    return !e || "" === e.trim() || /^(\+)?[\d\s()-]+$/.test(e) && a >= 7 && a <= 15
                }

                function l(e) {
                    return !e || "" === e.trim() || /^(?=.*\p{L})[\p{L} -]+$/u.test(e)
                }
                t.d(a, {
                    cG: () => n,
                    g0: () => i,
                    uV: () => l,
                    zS: () => r
                })
            },
            7735(e, a, t) {
                t.d(a, {
                    KM: () => u,
                    do: () => p,
                    xR: () => d,
                    z5: () => m
                });
                var o = t(3855),
                    r = t(953),
                    n = t(641),
                    i = t(9639),
                    l = t(2057),
                    s = t(215);
                const d = {
                        name: "InitialStep",
                        init: e => {
                            const a = (0, l.J)(e);
                            return {
                                flow: {
                                    next: {
                                        label: a.next
                                    }
                                },
                                fields: [{
                                    acquisition: "EndUser",
                                    label: a.endUser.label,
                                    component: "EndUserInitialStep",
                                    id: "acquisition-end-user",
                                    value: "End user",
                                    gtmEvent: "end-user-request",
                                    name: "acquisition",
                                    type: "radio"
                                }, {
                                    acquisition: "Startup",
                                    label: a.startup.label,
                                    component: "StartupInitialStep",
                                    id: "acquisition-startup",
                                    value: "Startup",
                                    gtmEvent: "start-up-request",
                                    name: "acquisition",
                                    type: "radio"
                                }, {
                                    acquisition: "Integrator",
                                    label: a.integrator.label,
                                    component: "IntegratorInitialStep",
                                    id: "acquisition-integrator",
                                    value: "Integrator",
                                    gtmEvent: "integrator-request",
                                    name: "acquisition",
                                    type: "radio"
                                }],
                                heading: a.heading,
                                subheading: a.initialStep.heading
                            }
                        }
                    },
                    c = [{
                        value: "1-10"
                    }, {
                        value: "11-50"
                    }, {
                        value: "51-99"
                    }, {
                        value: "100-250"
                    }, {
                        value: "251-500"
                    }, {
                        value: "500+"
                    }],
                    u = {
                        fleetSize: (e, a = c) => ({
                            label: e,
                            name: "fleetSize",
                            id: "fleet-size",
                            type: "radio",
                            inlineGroup: !0,
                            component: "InlineGroup",
                            required: !0,
                            options: a
                        }),
                        fleetSizeInt: e => ({
                            placeholder: e.placeholder,
                            label: e.label,
                            error: e.error,
                            name: "fleetSize",
                            id: "fleet-size",
                            type: "number",
                            min: 1,
                            preventNegative: !0,
                            required: !0,
                            text: !0,
                            component: "InputField"
                        }),
                        fleetSizeIntValidationRules: {
                            required: o.mw,
                            integer: o.nd,
                            minValue: (0, o.Ww)(1),
                            maxLength: (0, o.Ru)(7)
                        },
                        website: e => ({
                            label: e.label,
                            placeholder: e.placeholder,
                            name: "website",
                            type: "url",
                            text: !0,
                            component: "InputField"
                        }),
                        newsConsent: e => ({
                            name: "newsConsent",
                            id: "newsletter",
                            checkbox: !0,
                            label: e,
                            component: "FormCheckbox"
                        }),
                        personalDataConsent: e => ({
                            name: "personalDataConsent",
                            id: "privacy",
                            label: e,
                            checkbox: !0,
                            required: !0,
                            component: "FormCheckbox"
                        }),
                        company: e => ({
                            label: e.label,
                            placeholder: e.placeholder,
                            error: e.error,
                            name: "company",
                            id: "company",
                            type: "text",
                            text: !0,
                            required: !0,
                            component: "InputField"
                        }),
                        phone: (e, a = !0) => ({
                            required: a,
                            label: e.label,
                            error: e.error,
                            custom: !0,
                            name: "phone",
                            id: "phone",
                            tel: !0,
                            inline: !0,
                            type: "tel",
                            component: "TelInput"
                        }),
                        email: e => ({
                            label: e.label,
                            placeholder: e.placeholder,
                            error: e.error,
                            name: "email",
                            type: "email",
                            id: "email",
                            text: !0,
                            required: !0,
                            inline: !0,
                            component: "InputField"
                        }),
                        lastName: e => ({
                            label: e.label,
                            placeholder: e.placeholder,
                            error: e.error,
                            name: "lastName",
                            id: "last-name",
                            type: "text",
                            text: !0,
                            required: !0,
                            inline: !0,
                            component: "InputField"
                        }),
                        firstName: e => ({
                            label: e.label,
                            placeholder: e.placeholder,
                            error: e.error,
                            name: "firstName",
                            id: "first-name",
                            required: !0,
                            type: "text",
                            text: !0,
                            inline: !0,
                            component: "InputField"
                        }),
                        country: (e, a) => ({
                            label: e.label,
                            error: e.error,
                            placeholder: a,
                            options: "countries",
                            name: "country",
                            id: "country",
                            required: !0,
                            inline: !0,
                            select: !0
                        }),
                        city: (e, a) => ({
                            label: e,
                            placeholder: a,
                            name: "city",
                            id: "city",
                            options: "locationsForSelectedCountry",
                            inline: !0,
                            select: !0
                        }),
                        comment: e => ({
                            label: e.label,
                            placeholder: e.placeholder || "",
                            name: "comment",
                            id: "comment",
                            textarea: !0,
                            component: "TextareaField"
                        }),
                        trial: e => ({
                            name: "trial",
                            id: "trial",
                            label: e,
                            checkbox: !0,
                            component: "FormCheckbox"
                        }),
                        legalDisclaimer: e => ({
                            type: "note",
                            label: e
                        })
                    },
                    m = {
                        name: "PersonalStep",
                        validator() {
                            const e = (0, r.Kh)({
                                    trackingTarget: "",
                                    trackingTargetOther: "",
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    country: "",
                                    city: "",
                                    phone: "",
                                    personalDataConsent: !1,
                                    shareDataWithPartnersConsent: !1
                                }),
                                a = (0, n.EW)((() => ({
                                    trackingTarget: {
                                        required: o.mw
                                    },
                                    firstName: {
                                        required: o.mw,
                                        isValidName: s.uV
                                    },
                                    lastName: {
                                        required: o.mw,
                                        isValidName: s.uV
                                    },
                                    country: {
                                        required: o.mw
                                    },
                                    email: {
                                        required: o.mw,
                                        email: o.Rp
                                    },
                                    phone: {
                                        required: o.mw,
                                        isValidPhoneNumber: s.g0
                                    },
                                    personalDataConsent: {
                                        sameAs: (0, o.f4)(!0)
                                    },
                                    shareDataWithPartnersConsent: {
                                        sameAs: (0, o.f4)(!0)
                                    }
                                })));
                            return {
                                state: e,
                                v$: (0, i.Ay)(a, e)
                            }
                        },
                        init: e => {
                            const a = (0, l.J)(e);
                            return {
                                heading: a.heading,
                                flow: {
                                    submit: {
                                        label: a.submit
                                    }
                                },
                                fields: [{
                                    placeholder: a.selectOptions,
                                    options: a.trackingTarget.options,
                                    label: a.trackingTarget.label,
                                    error: a.trackingTarget.error,
                                    name: "trackingTarget",
                                    id: "what-to-track",
                                    select: !0,
                                    required: !0,
                                    selectedHandler: "handleTargetSelected",
                                    onUpdateModelValueHandler: "handleTargetUpdate"
                                }, {
                                    placeholder: a.trackingTargetOther.placeholder,
                                    name: "trackingTargetOther",
                                    id: "exactly-to-track",
                                    textarea: !0,
                                    component: "TextareaField"
                                }, u.firstName(a.firstName), u.lastName(a.lastName), u.email(a.email), u.phone(a.phone), { ...u.country(a.country, a.selectOptions),
                                    selectedHandler: "fetchLocationsForSelectedCountry"
                                }, u.city(a.city.label, a.selectOptions), u.personalDataConsent(a.personalDataConsent), {
                                    name: "shareDataWithPartnersConsent",
                                    id: "share-data-with-partners-consent",
                                    checkbox: !0,
                                    required: !0,
                                    label: a.shareDataWithPartnersConsent,
                                    component: "FormCheckbox"
                                }]
                            }
                        }
                    };

                function p() {
                    const e = (0, r.Kh)({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            company: "",
                            fleetSize: "",
                            personalDataConsent: !1
                        }),
                        a = (0, n.EW)((() => ({
                            firstName: {
                                required: o.mw,
                                isValidName: s.uV
                            },
                            lastName: {
                                required: o.mw,
                                isValidName: s.uV
                            },
                            email: {
                                required: o.mw,
                                email: o.Rp
                            },
                            company: {
                                required: o.mw
                            },
                            fleetSize: u.fleetSizeIntValidationRules,
                            phone: {
                                isValidPhoneNumber: s.g0
                            },
                            personalDataConsent: {
                                sameAs: (0, o.f4)(!0)
                            }
                        })));
                    return {
                        state: e,
                        v$: (0, i.Ay)(a, e)
                    }
                }
            },
            3876(e, a, t) {
                t.d(a, {
                    M: () => s,
                    t: () => l
                });
                var o = t(953);
                var r = t(215),
                    n = t(9979);
                const i = globalThis.location.pathname.split("/").find(Boolean) || "en";
                const l = (0, o.Kh)({
                    language: i,
                    state: {
                        heading: null,
                        subheading: null,
                        ui: {
                            activeTab: "",
                            component: "InitialStep",
                            stepsIndicatorTotal: 2,
                            stepsIndicatorCurrent: 1,
                            loadingStates: {
                                country: !1,
                                submit: !1,
                                city: !1,
                                map: !1,
                                sending: !1,
                                sent: !1
                            }
                        },
                        commonData: {
                            countries: [],
                            locationsForSelectedCountry: []
                        },
                        formData: {},
                        invalidFields: {}
                    },
                    mutations: {
                        updateFormData(e) {
                            return l.state.formData = { ...l.state.formData,
                                ...e
                            }, this
                        },
                        updateCommonData(e, a) {
                            return l.state.commonData[e] = a, this
                        },
                        setLoadingState(e, a) {
                            return l.state.ui.loadingStates[e] = a, this
                        },
                        setActiveComponent(e) {
                            return l.state.ui.component = e, this
                        },
                        setInvalidFields(e) {
                            e.forEach((e => {
                                l.state.invalidFields[e] = !0
                            }))
                        },
                        resetInvalidFields() {
                            l.state.invalidFields = {}
                        },
                        updateProperties(e, a) {
                            const t = e.split("."),
                                o = t.pop();
                            let r = l.state;
                            for (const e of t) {
                                if (!(e in r)) return;
                                r = r[e]
                            }
                            o in r && ("object" == typeof r[o] && "object" == typeof a ? r[o] = Object.assign({}, r[o], a) : r[o] = a)
                        },
                        async sendNewLead(e = [], a = l.state.ui.component) {
                            l.mutations.setLoadingState("submit", !0).setLoadingState("sending", !0), l.mutations.resetInvalidFields();
                            try {
                                const {
                                    language: o,
                                    state: i
                                } = l, {
                                    gtmEvent: s,
                                    ...d
                                } = i.formData, c = (0, r.cG)({ ...d
                                }), u = await n.F.newLead({
                                    langId: o,
                                    ...c
                                });
                                if (u.error) {
                                    (0, r.zS)().sendRequestErrorEvent(u.status);
                                    const t = u ? .data ? .message ? ? [];
                                    if (t ? .length) {
                                        const o = e.filter((e => t.includes(e)));
                                        o ? .length || l.mutations.setActiveComponent(a), l.mutations.setInvalidFields(t)
                                    }
                                    return void l.mutations.setLoadingState("submit", !1).setLoadingState("sending", !1)
                                }(0, r.zS)().sendConversionEvent(s, o, u ? .id), document.dispatchEvent(new CustomEvent("experiment:conversion", {
                                    detail: {
                                        type: (t = i.formData ? .acquisition, t ? `lead_request:${t}` : "lead_request")
                                    }
                                })), l.mutations.setActiveComponent("SuccessMessage").setLoadingState("sending", !1).setLoadingState("submit", !1).setLoadingState("sent", !0)
                            } catch {
                                l.mutations.setLoadingState("submit", !1).setLoadingState("sending", !1)
                            }
                            var t
                        }
                    }
                });

                function s(e) {
                    e ? .dataset ? .heading && (l.state.heading = e.dataset.heading), e ? .dataset ? .subheading && (l.state.subheading = e.dataset.subheading)
                }
            }
        },
        r = {};

    function n(e) {
        var a = r[e];
        if (void 0 !== a) return a.exports;
        var t = r[e] = {
            id: e,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, n), t.exports
    }
    n.m = o, e = [], n.O = (a, t, o, r) => {
        if (!t) {
            var i = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [t, o, r] = e[c], l = !0, s = 0; s < t.length; s++)(!1 & r || i >= r) && Object.keys(n.O).every((e => n.O[e](t[s]))) ? t.splice(s--, 1) : (l = !1, r < i && (i = r));
                if (l) {
                    e.splice(c--, 1);
                    var d = o();
                    void 0 !== d && (a = d)
                }
            }
            return a
        }
        r = r || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
        e[c] = [t, o, r]
    }, n.n = e => {
        var a = e && e.__esModule ? () => e.default : () => e;
        return n.d(a, {
            a
        }), a
    }, n.d = (e, a) => {
        for (var t in a) n.o(a, t) && !n.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
        })
    }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, t) => (n.f[t](e, a), a)), [])), n.u = e => (({
        167: "startup-2",
        313: "integrator-2",
        316: "startup-1",
        706: "integrator-1",
        716: "end-user-1",
        727: "end-user-2"
    }[e] || e) + "." + {
        167: "ee8ba868",
        313: "3429f0ad",
        316: "0792ad1c",
        440: "a9e9da26",
        702: "efd83a41",
        706: "bec85c54",
        716: "d629c9c0",
        727: "00727ecb",
        965: "77a47d14"
    }[e] + ".js"), n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), a = {}, t = "wialon-webclient:", n.l = (e, o, r, i) => {
        if (a[e]) a[e].push(o);
        else {
            var l, s;
            if (void 0 !== r)
                for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
                    var u = d[c];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == t + r) {
                        l = u;
                        break
                    }
                }
            l || (s = !0, (l = document.createElement("script")).charset = "utf-8", n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + r), l.src = e), a[e] = [o];
            var m = (t, o) => {
                    l.onerror = l.onload = null, clearTimeout(p);
                    var r = a[e];
                    if (delete a[e], l.parentNode && l.parentNode.removeChild(l), r && r.forEach((e => e(o))), t) return t(o)
                },
                p = setTimeout(m.bind(null, void 0, {
                    type: "timeout",
                    target: l
                }), 12e4);
            l.onerror = m.bind(null, l.onerror), l.onload = m.bind(null, l.onload), s && document.head.appendChild(l)
        }
    }, n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.j = 583, (() => {
        var e;
        n.g.importScripts && (e = n.g.location + "");
        var a = n.g.document;
        if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
                for (var o = t.length - 1; o > -1 && (!e || !/^http(s?):/.test(e));) e = t[o--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
    })(), (() => {
        n.b = "undefined" != typeof document && document.baseURI || self.location.href;
        var e = {
            583: 0
        };
        n.f.j = (a, t) => {
            var o = n.o(e, a) ? e[a] : void 0;
            if (0 !== o)
                if (o) t.push(o[2]);
                else {
                    var r = new Promise(((t, r) => o = e[a] = [t, r]));
                    t.push(o[2] = r);
                    var i = n.p + n.u(a),
                        l = new Error;
                    n.l(i, (t => {
                        if (n.o(e, a) && (0 !== (o = e[a]) && (e[a] = void 0), o)) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            l.message = "Loading chunk " + a + " failed.\n(" + r + ": " + i + ")", l.name = "ChunkLoadError", l.type = r, l.request = i, o[1](l)
                        }
                    }), "chunk-" + a, a)
                }
        }, n.O.j = a => 0 === e[a];
        var a = (a, t) => {
                var o, r, [i, l, s] = t,
                    d = 0;
                if (i.some((a => 0 !== e[a]))) {
                    for (o in l) n.o(l, o) && (n.m[o] = l[o]);
                    if (s) var c = s(n)
                }
                for (a && a(t); d < i.length; d++) r = i[d], n.o(e, r) && e[r] && e[r][0](), e[r] = 0;
                return n.O(c)
            },
            t = self.webpackChunkwialon_webclient = self.webpackChunkwialon_webclient || [];
        t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
    })(), n.nc = void 0;
    var i = n.O(void 0, [121], (() => n(3600)));
    i = n.O(i)
})();