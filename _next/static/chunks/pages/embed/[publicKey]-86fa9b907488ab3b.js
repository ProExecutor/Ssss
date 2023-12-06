(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7503],
  {
    68241: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/embed/[publicKey]",
        function () {
          return o(4737);
        },
      ]);
    },
    14877: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = o(24246),
        r = o(88038),
        i = o.n(r),
        a = o(62584);
      function s(e) {
        let {
            title: t,
            description: o = d.home,
            robots: r = "all",
            canonical: s,
          } = e,
          l = (0, a.ZD)(),
          p = "function" == typeof o ? o(d) : o,
          u = l.disableSEO || l.isOnprem;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(i(), {
              children: [
                t &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("title", { children: t }, "title"),
                      (0, n.jsx)(
                        "meta",
                        { name: "og:title", content: t },
                        "og:title"
                      ),
                      (0, n.jsx)(
                        "meta",
                        { name: "twitter:title", content: t },
                        "twitter:title"
                      ),
                    ],
                  }),
                u
                  ? (0, n.jsx)("meta", { name: "robots", content: "none" })
                  : (0, n.jsx)("meta", { name: "robots", content: r }),
                !u &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      p &&
                        (0, n.jsx)(
                          "meta",
                          { name: "description", content: p },
                          "description"
                        ),
                      p &&
                        (0, n.jsx)(
                          "meta",
                          { property: "og:description", content: p },
                          "og:description"
                        ),
                      p &&
                        (0, n.jsx)(
                          "meta",
                          { property: "twitter:description", content: p },
                          "twitter:description"
                        ),
                      s &&
                        (0, n.jsx)("link", {
                          rel: "canonical",
                          href: s.startsWith("http")
                            ? s
                            : "https://appetize.io".concat(s),
                        }),
                    ],
                  }),
              ],
            }),
            (0, n.jsx)("h1", { className: "sr-only", children: p }),
          ],
        });
      }
      let d = {
        home: "Online web based iOS Simulators and Android Emulators. Run iPhone, iPad, Mobile Safari, APK, mobile apps in your browser with HTML5 and Javascript. For mobile app customer support, training, app previews, testing, and much more.",
        upload:
          "Upload an iOS app or Android APK to stream instantly using online web based iOS Simulators and Android Emulators.",
        demo: "Demo Appetize.io's online web based iOS Simulators and Android Emulators directly in your browser.",
        docs: "Easily request an API token to gain programmatic access to Appetize.io online web based iOS Simulators and Android Emulators.",
        moreInfo:
          "Pricing, terms, service level agreement, and other information regarding Appetize.io's online web based iOS Simulators and Android Emulators.",
        login:
          "Sign in to your Appetize.io account to update app settings, upload new builds, setup billing, and more.",
        reset: "Reset your Appetize.io account password.",
        signup:
          "Sign up for your Appetize.io account to update app settings, upload new builds, setup billing, and more.",
        terms:
          "Terms and policies regarding Appetize.ios online web based iOS Simulators and Android Emulators.",
        standalone:
          "Run Appetize.io as a barebones iOS Simulator or Android Emulator",
      };
    },
    4737: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return g;
          },
        });
      var n = o(24246),
        r = o(78164),
        i = o.n(r),
        a = o(68764),
        s = o(86677),
        d = o(14877),
        l = o(62584),
        p = o(8183),
        u = o(80673),
        c = o(27378),
        m = o(13551),
        b = o(59974),
        f = o(24912),
        h = o(2128);
      function g(e) {
        var t, o;
        let { error: r, isDemo: l, ...u } = e,
          [m, b] = (0, c.useState)(u.app),
          { query: f } = (0, s.useRouter)(),
          [h] = (0, c.useState)(
            (function () {
              try {
                return window.self !== window.top;
              } catch (e) {
                return !0;
              }
            })()
          );
        return (0, n.jsxs)("div", {
          className: "jsx-e10fd77b75bb744d root",
          children: [
            (0, n.jsx)(i(), {
              id: "1d1ff4c713864159",
              children: "body{background:transparent}",
            }),
            (0, n.jsx)(i(), {
              id: "97bc111e822b769a",
              children:
                ".root.jsx-e10fd77b75bb744d{height:100vh;width:100vw;overflow:auto}",
            }),
            (0, n.jsx)(d.Z, { title: "Embed", robots: "none" }),
            m &&
              (0, n.jsxs)(a.Yk, {
                app: m,
                isEmbed: !0,
                parseConfigFromUrl: !0,
                autoScale: "auto" === f.scale,
                config: { deviceColor: "black", showRotateButtons: !1 },
                isCrossPlatform: l,
                onConfig: (e) => {
                  if (l) {
                    let t = (0, p.C)(e.platform, e.osVersion);
                    (null == t ? void 0 : t.publicKey) !== m.publicKey && b(t);
                  }
                },
                disabled: {
                  isDisabled: !m.isEmbeddable && h,
                  message: m.isEmbeddable
                    ? void 0
                    : "Embeds are not enabled for this app. The app owner must upgrade their plan to enable embeds.",
                },
                children: [
                  (0, n.jsx)(w, { onAppLoaded: b }),
                  (0, n.jsx)(a.ZP, {
                    center:
                      "both" ===
                        (o =
                          null !== (t = f.centered) && void 0 !== t
                            ? t
                            : f.center) ||
                      "true" === o ||
                      ("horizontal" === o
                        ? "horizontal"
                        : "vertical" === o && "vertical"),
                  }),
                ],
              }),
            r &&
              (0, n.jsx)("div", {
                className: "jsx-e10fd77b75bb744d error",
                children: (0, n.jsx)("h4", {
                  className: "jsx-e10fd77b75bb744d",
                  children: r,
                }),
              }),
          ],
        });
      }
      function w(e) {
        let { onAppLoaded: t } = e,
          o = (0, m.ib)(),
          { config: n } = (0, a.Fy)(),
          { query: r } = (0, s.useRouter)();
        return (
          (0, b.s_)(async (e, i, a) => {
            if ("loadApp" === e && (0, f.isObject)(i)) {
              let e = i.value;
              if ("demo" === e) {
                let e = (0, p.C)(n.platform, n.osVersion);
                e ? (t(e), a(e)) : a({ error: "App not found" });
              } else
                try {
                  let n = await (0, p._)(o, e, r.payerCode || r.pc);
                  if (n) t(n), a(n);
                  else throw Error("App not found");
                } catch (t) {
                  var s;
                  console.error(t);
                  let e = null !== (s = t.message) && void 0 !== s ? s : "";
                  a(
                    e
                      ? e.match(/not found/i)
                        ? { error: "App not found" }
                        : { error: e }
                      : { error: "Unable to load app" }
                  );
                }
            }
          }),
          null
        );
      }
      (0, l.kK)(g, async (e) => {
        if ("demo" === e.query.publicKey)
          return {
            isDemo: !0,
            app: (0, p.C)((0, u.Xf)(e.query.device), e.query.osVersion),
          };
        try {
          return {
            isDemo: !1,
            app: await (0, p._)(
              e.fetch,
              e.query.publicKey,
              e.query.payerCode || e.query.pc
            ),
          };
        } catch (e) {
          if ((0, m.oC)(e))
            return { error: "App not found, please verify URL" };
          return h.TF.captureException(e), { error: e.message };
        }
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        8559, 9376, 8177, 4433, 7329, 4293, 5409, 2880, 6211, 209, 9774, 2888,
        179,
      ],
      function () {
        return e((e.s = 68241));
      }
    ),
      (_N_E = e.O());
  },
]);
