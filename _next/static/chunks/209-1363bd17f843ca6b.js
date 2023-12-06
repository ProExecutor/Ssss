"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [209],
  {
    19552: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ea;
        },
        F: function () {
          return el;
        },
      });
      var o = n(24246),
        r = n(60074),
        i = n(91125),
        a = n(66428),
        s = n(28898),
        c = n(32655),
        l = n(54270),
        u = n(27378),
        d = n(34172),
        h = n.n(d),
        p = n(40861),
        f = n.n(p),
        v = n(56141),
        m = n.n(v),
        b = n(64374);
      function g() {
        let e = (0, u.useRef)(!1);
        return (
          (0, b.W)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      function y(e) {
        let t = (function (e) {
            let [t, n] = (0, u.useState)(!1);
            return (
              (0, u.useEffect)(() => {
                function t(t) {
                  t.which === e && n(!0);
                }
                function o(t) {
                  t.which === e && n(!1);
                }
                function r() {
                  n(!1);
                }
                return (
                  window.addEventListener("keydown", t),
                  window.addEventListener("keyup", o),
                  window.addEventListener("blur", r),
                  () => {
                    window.removeEventListener("keydown", t),
                      window.removeEventListener("keyup", o),
                      window.removeEventListener("blur", r);
                  }
                );
              }, [e]),
              t
            );
          })(e),
          n = (0, u.useRef)(!1);
        return (
          (0, u.useEffect)(() => {
            n.current = t;
          }, [t]),
          n
        );
      }
      var w = n(84384),
        k = n(27617),
        x = n.n(k);
      function j(e, t) {
        let {
            enabled: n = !0,
            timeout: o = 3e4,
            pingInterval: r,
            handshakeTime: i,
            initialConnectTime: a,
            ...s
          } = t,
          [c, l] = (0, u.useState)(null),
          [d, h] = (0, w.C)({
            connected: !1,
            connecting: !1,
            queue: void 0,
            concurrentQueue: void 0,
          }),
          p = E(s),
          f = E(d),
          v = g();
        return (
          (0, u.useEffect)(() => {
            if (n) {
              let t = new (x())(e, {
                pingInterval: r,
                handshakeTime: i,
                initialConnectTime: a,
              });
              l(t), h({ connecting: !0 });
              let n = { socket: t, url: e, getState: () => f.current },
                s = setTimeout(() => {
                  var e, t;
                  null === (t = (e = p.current).onTimeout) ||
                    void 0 === t ||
                    t.call(e, n);
                }, o);
              return (
                t.on("connect", () => {
                  var e, t;
                  clearTimeout(s),
                    null === (t = (e = p.current).onConnect) ||
                      void 0 === t ||
                      t.call(e, n),
                    (n.timeConnected = Date.now()),
                    h({ connected: !0, connecting: !1, userError: void 0 });
                }),
                t.on("disconnect", () => {
                  if ((clearTimeout(s), v.current)) {
                    var e, t;
                    null === (t = (e = p.current).onDisconnect) ||
                      void 0 === t ||
                      t.call(e, n),
                      h({
                        connected: !1,
                        connecting: !1,
                        queue: void 0,
                        concurrentQueue: void 0,
                        launchStatus: void 0,
                      });
                  }
                }),
                t.on("userError", (e) => {
                  var t, o;
                  null === (o = (t = p.current).onUserError) ||
                    void 0 === o ||
                    o.call(t, n, e),
                    h({ userError: e.message });
                }),
                t.on("queue", (e) => {
                  var t, o;
                  null === (o = (t = p.current).onQueue) ||
                    void 0 === o ||
                    o.call(t, n, e),
                    h({ queue: e.position, concurrentQueue: void 0 });
                }),
                t.on("concurrentQueue", (e) => {
                  var t, o;
                  null === (o = (t = p.current).onConcurrentQueue) ||
                    void 0 === o ||
                    o.call(t, n, e),
                    h({ concurrentQueue: e, queue: void 0 });
                }),
                t.on("newSession", (e) => {
                  var t, o;
                  null === (o = (t = p.current).onNewSession) ||
                    void 0 === o ||
                    o.call(t, n, e),
                    h({ queue: void 0, concurrentQueue: void 0 });
                }),
                t.on("launchStatus", (e) => {
                  var t, o;
                  null === (o = (t = p.current).onLaunchStatus) ||
                    void 0 === o ||
                    o.call(t, n, e),
                    h({ launchStatus: e.status });
                }),
                t.on("frameData", (e) => {
                  var o, r;
                  null === (r = (o = p.current).onFrameData) ||
                    void 0 === r ||
                    r.call(o, n, e),
                    t.emit("frameReceived", { hash: e.hash });
                }),
                t.on("h264Data", (e) => {
                  var o, r;
                  null === (r = (o = p.current).onH264Data) ||
                    void 0 === r ||
                    r.call(o, n, e),
                    t.emit("frameReceived", { hash: e.hash });
                }),
                [
                  ["error", "onError"],
                  ["close", "onClose"],
                  ["endSession", "onEndSession"],
                  ["reset", "onReset"],
                  ["adbOverTcp", "onAdbOverTcp"],
                  ["audioData", "onAudioData"],
                  ["countdownWarning", "onCountdownWarning"],
                  ["timeoutWarning", "onTimeoutWarning"],
                  ["timeLimitCountdown", "onTimeLimitCountdown"],
                  ["timeoutReset", "onTimeoutReset"],
                  ["screenshot", "onScreenshot"],
                  ["capabilities", "onCapabilities"],
                  ["uiDump", "onUiDump"],
                  ["debug", "onDebug"],
                  ["appLaunch", "onAppLaunch"],
                  ["userInteractionReceived", "onUserInteractionReceived"],
                  ["playbackError", "onPlaybackError"],
                  ["playbackFoundAndSent", "onPlaybackFoundAndSent"],
                  ["deleteEvent", "onDeleteEvent"],
                  ["recordedAction", "onRecordedAction"],
                  ["recordedEvent", "onRecordedEvent"],
                  ["interceptRequest", "onInterceptRequest"],
                  ["interceptResponse", "onInterceptResponse"],
                  ["interceptError", "onInterceptError"],
                  ["devtoolsConnection", "onDevtoolsConnection"],
                  ["reconnect", "onReconnect"],
                  ["ready", "onReady"],
                ].forEach((e) => {
                  let [o, r] = e;
                  t.on(o, (e) => {
                    var t, o;
                    null === (o = (t = p.current)[r]) ||
                      void 0 === o ||
                      o.call(t, n, e);
                  });
                }),
                () => {
                  clearTimeout(s),
                    t.connected && t.emit("disconnect"),
                    t.disconnect();
                }
              );
            }
            l(null), h({ connected: !1 });
          }, [e, n]),
          (0, u.useMemo)(() => ({ socket: c, ...d }), [c, d])
        );
      }
      function E(e) {
        let t = (0, u.useRef)(e);
        return (
          (0, b.W)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      var T = n(86677),
        _ = n.n(T),
        R = n(48966),
        S = n(55693),
        C = n(37116),
        D = n(42121),
        A = n(3793),
        P = n(80673),
        L = n(13551);
      let M = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("],
        O = {
          47: "?",
          44: "<",
          45: "_",
          46: ">",
          91: "{",
          92: "|",
          93: "}",
          96: "~",
          59: ":",
          61: "+",
          39: '"',
        };
      function N(e) {
        for (let t in O)
          if (e === O[t]) return { key: String.fromCharCode(t), shiftKey: !0 };
        let t = M.indexOf(e);
        return t > -1
          ? { key: String.fromCharCode(t + 48).toLowerCase(), shiftKey: !0 }
          : e !== e.toLowerCase()
          ? { key: e.toLowerCase(), shiftKey: !0 }
          : { key: e, shiftKey: !1 };
      }
      var I = n(85073),
        z = n(62584),
        V = n(15409),
        q = n.n(V),
        F = n(53041);
      let B = {
        deviceColor: "white",
        volume: 0.5,
        codec: "h264",
        orientation: "portrait",
        audio: !1,
      };
      var Z = n(59974),
        K = n(2926),
        U = n.n(K),
        W = n(50820),
        Y = n(40105),
        Q = n(22895),
        H = n(24912),
        J = n(92465),
        X = n.n(J),
        G = n(15539),
        $ = n.n(G);
      function ee(e, t, n) {
        let { delay: o, skipFirst: r } = n,
          i = (0, u.useRef)(!0);
        (0, u.useEffect)(() => {
          if (r && i.current) i.current = !1;
          else {
            let t = setTimeout(e, o);
            return () => clearTimeout(t);
          }
        }, t);
      }
      function et() {
        let {
            requestSession: e,
            app: t,
            appLaunched: n,
            userInteraction: o,
            rotate: r,
            setConfig: i,
            pasteText: a,
            endSession: s,
            screenshot: c,
            sockets: l,
            config: d,
            spec: h,
          } = el(),
          { appetizer: p, webserver: f } = l,
          v = (0, T.useRouter)(),
          { postMessage: m, version: b } = (0, Z.b1)(),
          g = (0, u.useMemo)(() => {
            let e = (e) => Math.round(e * (d.scale / 100));
            if (h) {
              let t = (e) =>
                  "portrait" === d.orientation ? e.width : e.height,
                n = (e) => ("portrait" === d.orientation ? e.height : e.width);
              return {
                type: h.type,
                name: h.label,
                osVersion: h.osVersion,
                orientation: d.orientation,
                screen: {
                  width: t(h.screen),
                  height: n(h.screen),
                  devicePixelRatio: h.screen.devicePixelRatio,
                },
                embed: {
                  width: e(t(d.screenOnly ? h.screen : h)),
                  height: e(n(d.screenOnly ? h.screen : h)),
                  screen: {
                    width: e(t(h.screen)),
                    height: e(n(h.screen)),
                    offset: {
                      x: e(
                        "portrait" === d.orientation
                          ? h.screen.left
                          : h.screen.top
                      ),
                      y: e(
                        "portrait" === d.orientation
                          ? h.screen.top
                          : h.screen.left
                      ),
                    },
                  },
                },
              };
            }
            return null;
          }, [d.orientation, d.scale, d.screenOnly, h]),
          y = (0, u.useMemo)(() => {
            if (t) {
              var e;
              let n = (e) =>
                $()(
                  {
                    name: e.name,
                    appDisplayName: e.appDisplayName,
                    appVersionCode: e.appVersionCode,
                    bundle: e.bundle,
                    publicKey: e.publicKey,
                    platform: e.platform,
                    versionCode: e.versionCode,
                    architectures: e.architectures,
                    iconUrl: e.iconUrl,
                    created: e.created,
                  },
                  X()
                );
              return $()(
                {
                  ...n(t),
                  apps:
                    null === (e = t.appObjects) || void 0 === e
                      ? void 0
                      : e.map(n),
                },
                X()
              );
            }
            return null;
          }, [t]);
        (0, Z.s_)(async (t, l, u) => {
          let d = (e) => {
            console.error(
              'Error handling xdoc message "'.concat(t, '": ').concat(e)
            );
          };
          switch (t) {
            case "getApp":
              u(y);
              break;
            case "getDeviceInfo":
              u(g);
              break;
            case "emitSocketEvent":
              if ((0, H.isObject)(l) && (0, H.isObject)(l.value)) {
                let e = l.value;
                "webserver" === e.socket
                  ? null == f || f.emit(e.type, e.value)
                  : "appetizer" === e.socket &&
                    (null == p || p.emit(e.type, e.value));
              }
              break;
            case "requestSession":
              try {
                await e();
              } catch (e) {
                console.error(e);
              } finally {
                u();
              }
              break;
            case "setConfig":
              if (
                (0, H.isObject)(l) &&
                (0, H.isObject)(null == l ? void 0 : l.value)
              ) {
                l.value.device &&
                  ((l.value.deviceType = l.value.device),
                  delete l.value.device);
                let { value: e, invalid: t } = (0, Q.parseConfig)(l.value);
                e.orientation &&
                  !e.rotation &&
                  (e.rotation = "landscape" === e.orientation ? 270 : 0),
                  "auto" === e.scale
                    ? (delete e.scale,
                      await v.replace(
                        { query: { ...v.query, scale: "auto" } },
                        void 0,
                        { shallow: !0 }
                      ))
                    : e.scale &&
                      (await v.replace(
                        { query: { ...v.query, scale: e.scale } },
                        void 0,
                        { shallow: !0 }
                      )),
                  Object.entries(t).forEach((e) => {
                    let [, t] = e;
                    console.warn(t);
                  }),
                  await new Promise((t) => {
                    i(e, (e) => {
                      u(e), t(null);
                    });
                  });
              }
              break;
            case "emitHomeButton":
              o({ type: "keypress", shiftKey: !1, key: "home" });
              break;
            case "rotateLeft":
              r("left");
              break;
            case "rotateRight":
              r("right");
              break;
            case "playAction":
              (0, H.isObject)(l) &&
                (0, H.isObject)(l.value) &&
                p &&
                n &&
                p.emit("playAction", l.value);
              break;
            case "playEvent":
              (0, H.isObject)(l) &&
                (0, H.isObject)(l.value) &&
                p &&
                n &&
                p.emit("playEvent", l.value);
              break;
            case "setParams": {
              let { value: e, invalid: t } = (0, Q.parseConfigValue)(
                "params",
                (0, H.isObject)(l) ? (null == l ? void 0 : l.value) : void 0
              );
              t ? d(t) : i({ params: e });
              break;
            }
            case "setLaunchUrl": {
              let { value: e, invalid: t } = (0, Q.parseConfigValue)(
                "launchUrl",
                (0, H.isObject)(l) ? (null == l ? void 0 : l.value) : void 0
              );
              t && d(t), e && i({ launchUrl: e });
              break;
            }
            case "enableSessionStart":
              i({ disableSessionStart: !1 });
              break;
            case "disableSessionStart":
              i({ disableSessionStart: !0 });
              break;
            case "endSession":
              s();
              break;
            case "getScreenshot":
              await c(), u();
              break;
            case "saveScreenshot": {
              let e = await c();
              if (e) {
                let t = "Screenshot.".concat(e.mimeType.split("/").pop()),
                  n = (0, Y.L0)();
                U().saveAs(
                  new Blob([e.data], { type: e.mimeType }),
                  ""
                    .concat(n, " ")
                    .concat(e.highRes ? "High Res" : "", " ")
                    .concat(t)
                );
              }
              u();
              break;
            }
            case "heartbeat":
              o({ type: "heartbeat" });
              break;
            case "disableInteractions":
              i({ userInteractionDisabled: !0 });
              break;
            case "enableInteractions":
              i({ userInteractionDisabled: !1 });
              break;
            case "mouseclick":
              (0, H.isObject)(l)
                ? (o({
                    type: "mousedown",
                    xPos: l.x,
                    yPos: l.y,
                    timestamp: l.timestamp,
                  }),
                  o({
                    type: "mouseup",
                    xPos: l.x,
                    yPos: l.y,
                    timestamp: l.timestamp ? l.timestamp + 10 : Date.now(),
                  }))
                : d("data must be an object");
              break;
            case "mousedown":
            case "mousemove":
            case "mouseup":
              (0, H.isObject)(l)
                ? o({ type: t, xPos: l.x, yPos: l.y, timestamp: l.timestamp })
                : d("data must be an object");
              break;
            case "keypress":
              (0, H.isObject)(l)
                ? o({
                    type: "keypress",
                    shiftKey: l.shiftKey + "",
                    key: l.key,
                    timestamp: l.timestamp,
                  })
                : d("data must be an object");
              break;
            case "pasteText":
              (0, H.isObject)(l) && (0, H.isString)(l.value)
                ? a(l.value)
                : d("value must be a string"),
                u();
              break;
            case "language":
            case "adbShellCommand":
            case "location": {
              let { value: e, invalid: n } = (0, Q.parseConfigValue)(
                t,
                (0, H.isObject)(l) ? (null == l ? void 0 : l.value) : void 0
              );
              n ? d(n) : e && i({ [t]: e });
              break;
            }
            case "openUrl":
            case "url":
              (0, H.isObject)(l) &&
                (0, H.isString)(l.value) &&
                (null == p ||
                  p.emit("openUrl", { url: l.value, timestamp: Date.now() }));
              break;
            case "androidKeycodeMenu":
            case "shakeDevice":
            case "biometryMatch":
            case "biometryNonMatch":
            case "dumpUi":
            case "restartApp":
            case "reinstallApp":
              null == p || p.emit(t);
              break;
            case "setScale": {
              let { value: e, invalid: t } = (0, Q.parseConfigValue)(
                "scale",
                (0, H.isObject)(l) ? (null == l ? void 0 : l.value) : void 0
              );
              t ? d(t) : i({ scale: e });
              break;
            }
            case "setVolume": {
              let { value: e, invalid: t } = (0, Q.parseConfigValue)(
                "volume",
                (0, H.isObject)(l) ? (null == l ? void 0 : l.value) : void 0
              );
              t ? d(t) : i({ volume: e });
              break;
            }
            case "ping":
              m({ type: "pong" });
          }
        });
        let w = (0, W.R)((e) => {
            let { type: t, value: n } = e,
              o = b.major + b.minor + b.patch > 0;
            o &&
              m({
                type: "socketEvent",
                value: { type: t, value: n, socket: "webserver" },
              });
          }),
          k = (0, W.R)((e) => {
            let { type: t, value: n } = e,
              o = b.major + b.minor + b.patch > 0;
            o &&
              m({
                type: "socketEvent",
                value: { type: t, value: n, socket: "appetizer" },
              });
          });
        return (
          (0, u.useEffect)(
            () => (
              null == f || f.on("*", w),
              () => {
                null == f || f.off("*", w);
              }
            ),
            [w, f]
          ),
          (0, u.useEffect)(
            () => (
              null == p || p.on("*", k),
              () => {
                null == p || p.off("*", k);
              }
            ),
            [p, k]
          ),
          (0, u.useEffect)(() => {
            if (h) {
              let { width: e, height: t } = d.screenOnly ? h.screen : h;
              m({ type: "deviceDimensions", value: { width: e, height: t } });
            }
          }, [h.type, d.screenOnly]),
          ee(
            () => {
              g && m({ type: "deviceInfo", value: g });
            },
            [g, m],
            { delay: 100 }
          ),
          ee(
            () => {
              let e = { ...d, device: d.deviceType };
              delete e.deviceType, m({ type: "config", value: e });
            },
            [d, m],
            { delay: 100 }
          ),
          (0, u.useEffect)(() => {
            y && m({ type: "app", value: y });
          }, [y, m]),
          (0, u.useEffect)(() => {
            window.playAction = async (e) => {
              let t = (1e6 * Math.random()).toFixed(0);
              return (
                null == p ||
                  p.emit("playAction", {
                    id: t,
                    action: e,
                    options: { timeout: 10 },
                  }),
                new Promise((e, n) => {
                  if (!p) {
                    n("No session");
                    return;
                  }
                  let o = (n) => {
                      var i;
                      (null === (i = n.playback.event) || void 0 === i
                        ? void 0
                        : i.id) === t &&
                        (e(n),
                        null == p || p.off("playbackFoundAndSent", o),
                        null == p || p.off("playbackError", r));
                    },
                    r = (e) => {
                      var n, i;
                      (null === (n = e.playback) || void 0 === n
                        ? void 0
                        : null === (i = n.event) || void 0 === i
                        ? void 0
                        : i.id) === t &&
                        (null == p || p.off("playbackFoundAndSent", o),
                        null == p || p.off("playbackError", r),
                        console.error(e));
                    };
                  null == p || p.on("playbackFoundAndSent", o),
                    null == p || p.on("playbackError", r);
                })
              );
            };
          }, [p]),
          null
        );
      }
      function en(e) {
        let [t, n] = (0, u.useTransition)(),
          o = (0, u.useRef)(),
          [r, i] = (0, u.useState)({});
        return (
          (0, u.useEffect)(() => {
            !t && o.current && (o.current(e), (o.current = void 0));
          }, [r, t, e]),
          (e) => {
            (o.current = e),
              n(() => {
                i({});
              });
          }
        );
      }
      var eo = n(74418),
        er = n(75861),
        ei = n(2128),
        ea = (0, u.forwardRef)(function (e, t) {
          var n, d, p, v, b, k;
          let {
              app: x,
              children: E,
              onConfig: S,
              playButton: M,
              isEmbed: O,
              isCrossPlatform: V,
              onSessionStart: K,
              onSessionEnd: U,
              parseConfigFromUrl: Y,
              autoScale: H,
              disabled: J,
            } = e,
            X = g(),
            { devices: G } = (0, z.ZD)(),
            $ = y(16),
            ee = y(18),
            ea = (0, u.useRef)(null),
            { user: el } = (0, i.a)(),
            { isOnprem: eu } = (0, z.ZD)(),
            ed = (0, T.useRouter)(),
            eh = en(),
            { postMessage: ep } = (0, Z.b1)(),
            ef =
              null === (n = x.publicKey) || void 0 === n
                ? void 0
                : n.startsWith("demo"),
            ev =
              null === (d = x.publicKey) || void 0 === d
                ? void 0
                : d.startsWith("standalone"),
            em = (0, u.useMemo)(() => {
              if (Y) {
                let { value: e, invalid: t } = (0, Q.parseConfig)({
                  ...ed.query,
                  deviceType: ed.query.device,
                  payerCode: ed.query.payerCode || ed.query.pc,
                  scale: H ? 0 : ed.query.scale,
                });
                return (
                  Object.entries(t).forEach((e) => {
                    let [, t] = e;
                    console.warn(t);
                  }),
                  e
                );
              }
              return {};
            }, []),
            { config: eb, setConfig: eg } = (function (e) {
              let { app: t, isCrossPlatform: n, initialValue: o } = e,
                r = (0, u.useMemo)(() => t, [t.publicKey]),
                i = (function (e, t) {
                  let { devices: n } = (0, z.ZD)(),
                    o = (0, F.q)(),
                    r = (0, u.useRef)(null);
                  return (0, u.useCallback)(
                    (i, a) => {
                      var s, c, l, u, d, h;
                      let p = (function (o) {
                          let r = Object.keys(n.compatibleDevices.ios),
                            i = Object.keys(n.compatibleDevices.android);
                          if (o) {
                            let n = r.includes(o),
                              a = i.includes(o),
                              s = t || !e.platform || "ios" === e.platform,
                              c = t || !e.platform || "android" === e.platform;
                            if ((n && s) || (a && c)) return o;
                          }
                          return (0, P.u2)(t ? void 0 : e.platform, o);
                        })(i.deviceType),
                        f = (0, P.Xf)(p),
                        v = (function (t, r) {
                          var i, s, c, l, u;
                          let d = r && (0, P.vQ)(t, r),
                            h =
                              null !==
                                (l =
                                  null === (i = e.defaultOSVersions) ||
                                  void 0 === i
                                    ? void 0
                                    : i[t]) && void 0 !== l
                                ? l
                                : n.osVersionDefaults[t],
                            p = null != d ? d : h,
                            f =
                              (null == e ? void 0 : e.platform) === "android" &&
                              (0, P.iE)(p).major < 11 &&
                              (null !==
                                (u =
                                  null === (s = e.architectures) || void 0 === s
                                    ? void 0
                                    : s.length) && void 0 !== u
                                ? u
                                : 0) > 0 &&
                              (null === (c = e.architectures) || void 0 === c
                                ? void 0
                                : c.indexOf("x86")) === -1;
                          return (r &&
                            p !== r &&
                            a &&
                            (o.remove(),
                            d
                              ? o.error(
                                  "Invalid osVersion. OS: "
                                    .concat(r, " for device: ")
                                    .concat(
                                      t,
                                      " not supported. Device will use "
                                    )
                                    .concat(p)
                                )
                              : o.error(
                                  "Invalid osVersion. OS: "
                                    .concat(r, " for device: ")
                                    .concat(
                                      t,
                                      " not supported. Device will use default version"
                                    )
                                )),
                          f)
                            ? (d &&
                                (o.remove(),
                                o.warning(
                                  "APK has native code but does not have x86 architecture. Switching osVersion to Android 11+."
                                )),
                              "11.0")
                            : p;
                        })(p, i.osVersion),
                        m =
                          (l = i.scale) && l >= 10
                            ? Math.round(100 * l) / 100
                            : p &&
                              (null === (u = A.Z.devices[p]) || void 0 === u
                                ? void 0
                                : u.isTablet)
                            ? 50
                            : 75,
                        b =
                          (!(d = i.record) ||
                            "android" !== f ||
                            !v ||
                            !((0, P.iE)(v).major <= 6)) &&
                          d,
                        g =
                          ((h = i.enableAdb),
                          "android" === f &&
                            (i.record && h
                              ? (o.warning(
                                  "AppRecorder and ADB Tunnel cannot be used at the same time. Disabling ADB Tunnel."
                                ),
                                !1)
                              : h)),
                        y =
                          null !== (s = i.deviceColor) && void 0 !== s
                            ? s
                            : B.deviceColor,
                        w =
                          null !== (c = i.rotation) && void 0 !== c
                            ? c
                            : "landscape" === i.orientation
                            ? 270
                            : 0,
                        k = {
                          rotation: w,
                          ...i,
                          deviceColor: y,
                          deviceType: p,
                          platform: f,
                          osVersion: v,
                          scale: m,
                          orientation:
                            270 === w || 90 === w ? "landscape" : "portrait",
                          enableAdb: g,
                          record: b,
                        };
                      return (r.current = k), k;
                    },
                    [
                      e.architectures,
                      e.defaultOSVersions,
                      e.platform,
                      n.compatibleDevices.android,
                      n.compatibleDevices.ios,
                      n.osVersionDefaults,
                      o,
                      t,
                    ]
                  );
                })(r, n),
                [a, s] = (0, w.C)(() => i(q()({}, B, o), !0));
              return {
                config: (0, u.useMemo)(() => a, [a]),
                setConfig: (0, u.useCallback)(
                  (e, t) => s((t) => i({ ...t, ...e }), t),
                  [s, i]
                ),
              };
            })({
              app: x,
              isCrossPlatform: V,
              initialValue: { ...e.config, ...em },
            }),
            [ey, ew] = (0, w.C)(() => ({
              isJmuxerReady: !1,
              isStreaming: !1,
              isPlaying: !1,
              isRotating: !1,
              appLaunched: !1,
              networkLog: {},
              debugLog: [],
              volume: 0.5,
              deviceType: G.iosDefault,
            }));
          function ek(e) {
            if ((toastr.remove(), e.requiresArm))
              toastr.warning(
                "APK has native code but does not have x86 architecture. Switching osVersion to Android 12."
              ),
                eg({ osVersion: "12.0" }),
                ep("requiresArm");
            else {
              let t = e.message;
              if ("string" == typeof t) {
                let e = {};
                t.includes("You've reached your account's usage limit") &&
                  ((t =
                    "You've reached your account's usage limit. Click here to upgrade your plan and continue streaming."),
                  (e.onclick = () => {
                    window.open("https://appetize.io/pricing", "_blank");
                  })),
                  toastr.error(t, "", e);
              } else toastr.error("There was an error loading your app");
            }
            ep("userError"),
              ep({ type: "userErrorMessage", message: e.message });
          }
          let {
              queue: ex,
              concurrentQueue: ej,
              socket: eE,
            } = j("/client", {
              enabled: !ey.session,
              onConnect: () => {
                I.k.withTag("device (webserver)").debug("connect");
              },
              onTimeout: () => {
                toastr.error(
                  "You may be offline, or your browser may not support secure WebSockets. More info at https://websocketstest.com.",
                  "",
                  {
                    onclick: function () {
                      window.open("https://websocketstest.com");
                    },
                  }
                ),
                  ey.session || ew({ isStreaming: !1, isPlaying: !1 });
              },
              onDisconnect: () => {
                I.k.withTag("device (webserver)").debug("disconnect"),
                  ey.session || ew({ isStreaming: !1, isPlaying: !1 }),
                  (ex || ej) &&
                    X.current &&
                    toastr.info("Server lost connection, please try again");
              },
              onNewSession: (e, t) => {
                I.k.withTag("device (webserver)").debug("newSession", t),
                  ey.isPlaying &&
                    (ew({ session: t }),
                    null == K || K(t),
                    ep({
                      type: "sessionConnecting",
                      token: t.sessionToken,
                      path: t.path,
                    }));
              },
              onQueue: (e, t) => {
                I.k.withTag("device (webserver)").debug("queue", t.position),
                  ex ||
                    (toastr.remove(),
                    toastr.info(
                      "All devices are currently in use. Please wait until requested device becomes available."
                    ),
                    ep("sessionQueued")),
                  ep({ type: "sessionQueuedPosition", position: t.position });
              },
              onConcurrentQueue: (e, t) => {
                I.k
                  .withTag("device (webserver)")
                  .debug("concurrentQueue", {
                    position: t.position,
                    name: t.name,
                  }),
                  ej ||
                    (toastr.remove(),
                    toastr.info(
                      "All slots for this account are currently in use. Please wait until a slot becomes available."
                    ),
                    ep("concurrentQueued")),
                  ep({
                    type: "concurrentQueuedPosition",
                    name: t.name,
                    position: t.position,
                  });
              },
              onUserError: (e, t) => {
                I.k.withTag("device (webserver)").debug("userError", t),
                  ek(t),
                  ey.session || ew({ isStreaming: !1, isPlaying: !1 });
              },
            }),
            {
              launchStatus: eT,
              connected: e_,
              socket: eR,
              userError: eS,
            } = j(
              ""
                .concat(
                  null === (p = ey.session) || void 0 === p ? void 0 : p.path,
                  "/client?sessionToken="
                )
                .concat(
                  null === (v = ey.session) || void 0 === v
                    ? void 0
                    : v.sessionToken
                ),
              {
                enabled: !!ey.session && (ey.isJmuxerReady || eb.noVideo),
                onConnect: (e) => {
                  I.k.withTag("device (appetizer)").debug("connect", e.url);
                },
                onClose: (e, t) => {
                  if (!t.wasClean) {
                    let e = Error(
                      "Streaming server websocket did not close cleanly"
                    );
                    console.error(e);
                  }
                },
                onError: (e, t) => {
                  let { hostname: n } = new URL(e.url);
                  "ECONNREFUSED" === t.reason &&
                    (0, ei.xg)(() => {
                      var t, o;
                      let i = Error(
                        "Streaming server websocket error ECONNREFUSED"
                      );
                      console.error(i),
                        r.Tb(i, {
                          tags: {
                            streaming_server: n,
                            session_token:
                              null === (t = ey.session) || void 0 === t
                                ? void 0
                                : t.sessionToken,
                          },
                          extra: {
                            url: e.url,
                            sessionToken:
                              null === (o = ey.session) || void 0 === o
                                ? void 0
                                : o.sessionToken,
                            config: JSON.stringify(eb, null, 2),
                            timeConnected: e.timeConnected
                              ? Date.now() - e.timeConnected
                              : 0,
                          },
                        });
                    });
                },
                onTimeout: (e) => {
                  let { hostname: t } = new URL(e.url);
                  I.k.error(
                    "Appetizer websocket connection timed out for ".concat(t),
                    { url: e.url }
                  ),
                    eO.endSession(),
                    toastr.error(
                      "We were unable to establish a connection to the device. If this persists, please contact support."
                    ),
                    (0, ei.xg)(() => {
                      var n;
                      r.Tb(Error("Appetizer websocket connection timed out"), {
                        tags: { streaming_server: t },
                        extra: {
                          url: e.url,
                          sessionToken:
                            null === (n = ey.session) || void 0 === n
                              ? void 0
                              : n.sessionToken,
                          config: JSON.stringify(eb, null, 2),
                        },
                      });
                    });
                },
                onDisconnect: (e) => {
                  var t;
                  let { url: n } = e;
                  I.k.withTag("device (appetizer)").debug("disconnect", n);
                  let o =
                    ey.session &&
                    n.endsWith(
                      null === (t = ey.session) || void 0 === t
                        ? void 0
                        : t.sessionToken
                    );
                  o &&
                    (eO.endSession(),
                    !eS &&
                      X.current &&
                      (toastr.remove(),
                      toastr.error("Unexpectedly lost connection to device")));
                },
                onEndSession: (e, t) => {
                  if (
                    (I.k.withTag("device (appetizer)").debug("endSession", t),
                    null == t ? void 0 : t.timeLimitElapsed)
                  )
                    toastr.remove(),
                      (null == t ? void 0 : t.timeLimitFreeTier)
                        ? toastr.info(
                            "Free tier has a " +
                              t.timeLimit / 60 +
                              " minute time limit. Please upgrade your plan to remove session time limits.",
                            "",
                            {
                              onclick: () => {
                                window.open(
                                  "https://appetize.io/pricing",
                                  "_blank"
                                );
                              },
                            }
                          )
                        : ef && (null == t ? void 0 : t.timeLimit)
                        ? toastr.info(
                            "Demo has a " + t.timeLimit + " second time limit"
                          )
                        : (null == t ? void 0 : t.maxSessionLength)
                        ? toastr.info(
                            "Sessions are limitted to ".concat(
                              (0, a.Z)(
                                (0, s.Z)({
                                  start: 0,
                                  end: 1e3 * t.maxSessionLength,
                                })
                              )
                            )
                          )
                        : (null == t ? void 0 : t.timeLimit) &&
                          toastr.info("Time limit for this app has elapsed");
                  else {
                    let t = !!ey.inactivity;
                    eh(() => {
                      let { userError: n } = e.getState();
                      if (!n) {
                        if (t) {
                          toastr.info("Session ended due to inactivity");
                          let e = "app";
                          "ag_" === x.publicKey.substring(0, 3)
                            ? (e = "appgroup")
                            : "standalone_" === x.publicKey.substring(0, 11) &&
                              (e = "standalone"),
                            C.Z.track(
                              "appetize_session_inactivity_timeout",
                              {
                                platform: eb.platform,
                                deviceType: eb.deviceType,
                                osVersion: eb.osVersion,
                                embed: O,
                                demo: ef,
                                type: e,
                              },
                              el
                            );
                        } else toastr.info("Session ended");
                      }
                    });
                  }
                  eO.endSession();
                },
                onReady: () => {
                  I.k.withTag("device (appetizer)").debug("ready"),
                    ew((e) => ({
                      isStreaming:
                        (null != eb && !!eb.noVideo) || e.isStreaming,
                      appLaunched: !0,
                    }));
                },
                onAppLaunch: () => {
                  I.k.withTag("device (appetizer)").debug("appLaunch"),
                    ew((e) => ({
                      appLaunched: !0,
                      isStreaming:
                        (null != eb && !!eb.noVideo) || e.isStreaming,
                    })),
                    ep("appLaunch");
                },
                onUserError: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("userError", t),
                    ek(t);
                },
                onLaunchStatus: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("launchStatus", t);
                },
                onCountdownWarning: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("countdownWarning"),
                    ew({
                      inactivity: {
                        warning: !1,
                        countdown: t.secondsRemaining,
                      },
                    }),
                    ep("countdownWarning");
                },
                onTimeoutReset: () => {
                  I.k.withTag("device (appetizer)").debug("timeoutReset"),
                    ew({ inactivity: void 0 });
                },
                onTimeoutWarning: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("timeoutWarning", t),
                    ep("timeoutWarning"),
                    ew({ inactivity: { warning: !0 } });
                },
                onTimeLimitCountdown: (e, t) => {
                  I.k
                    .withTag("device (appetizer)")
                    .debug("timelimit", t.secondsRemaining),
                    ew({ timeLimit: t.secondsRemaining }),
                    ep({
                      type: "timeLimitCountdown",
                      value: t.secondsRemaining,
                    });
                },
                onUserInteractionReceived: (e, t) => {
                  I.k
                    .withTag("device (appetizer)")
                    .debug("userInteractionReceived", t),
                    ey.inactivity && ew({ inactivity: void 0 }),
                    "heartbeat" === t.type
                      ? ep("heartbeatReceived")
                      : (ep("userInteractionReceived"),
                        ep({ type: "userInteractionReceived", value: t }));
                },
                onFrameData: (e, t) => {
                  let n = (0, D.Sg)(new Uint8Array(t.buffer), "image/jpeg");
                  ep({
                    type: "frameData",
                    value: {
                      data: n,
                      width: t.width,
                      height: t.height,
                      hash: t.hash,
                    },
                  });
                },
                onAdbOverTcp: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("adbOverTcp", t);
                  let n = { ...t, command: (0, P.SX)(t) };
                  ep({ type: "adbConnectionInfo", adbConnectionInfo: n }),
                    ew({ adbConnectionInfo: n });
                },
                onCapabilities: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("capabilities", t),
                    ew({ capabilities: { screenshot: !!t.getScreenshot } });
                },
                onUiDump: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("uiDump", t),
                    ep({ type: "uiDump", value: t });
                },
                onPlaybackError: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("playbackError", t),
                    ep({ type: "playbackError", value: t });
                },
                onPlaybackFoundAndSent: (e, t) => {
                  I.k
                    .withTag("device (appetizer)")
                    .debug("playbackFoundAndSent", t),
                    ep({ type: "playbackFoundAndSent", value: t });
                },
                onDeleteEvent: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("deleteEvent", t),
                    ep({ type: "deleteEvent", value: t }),
                    (window.lastEvent = null);
                },
                onRecordedEvent(e, t) {
                  I.k.withTag("device (appetizer)").debug("recordedEvent", t),
                    ep({ type: "recordedEvent", value: t });
                },
                onRecordedAction: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("recordedAction", t),
                    ep({ type: "recordedAction", value: t }),
                    (window.lastEvent2 = window.lastEvent),
                    (window.lastEvent = t);
                },
                onDebug: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("debug", t),
                    ep({ type: "debug", message: t.message, value: t.message }),
                    ew((e) => ({ debugLog: [...e.debugLog, t.message] }));
                },
                onInterceptRequest: (e, t) => {
                  I.k
                    .withTag("device (appetizer)")
                    .debug("interceptRequest", t),
                    ep({ type: "interceptRequest", value: t }),
                    ew((e) => ({
                      networkLog: { ...e.networkLog, [t.requestId]: t },
                    }));
                },
                onInterceptResponse: (e, t) => {
                  I.k
                    .withTag("device (appetizer)")
                    .debug("interceptResponse", t),
                    ep({ type: "interceptResponse", value: t }),
                    ew((e) => ({
                      networkLog: { ...e.networkLog, [t.requestId]: t },
                    }));
                },
                onInterceptError: (e, t) => {
                  I.k.withTag("device (appetizer)").debug("interceptError", t),
                    ep({ type: "interceptError", value: t }),
                    ew((e) => ({
                      networkLog: { ...e.networkLog, [t.requestId]: t },
                    }));
                },
                onDevtoolsConnection: (e, t) => {
                  I.k
                    .withTag("device (appetizer)")
                    .debug("devtoolsConnection", t);
                  let n =
                    A.Z.chromeDevToolsBaseUrl +
                    (t.secure ? "?wss=" : "?ws=") +
                    t.url;
                  ew({ devToolsConnection: n }),
                    ep({
                      type: "chromeDevToolsUrl",
                      value: new URL(n, document.baseURI).href,
                    });
                },
              }
            ),
            eC = (0, u.useMemo)(
              () => ({
                type: eb.deviceType,
                platform: eb.platform,
                osVersion:
                  null !== (k = eb.osVersion) && void 0 !== k
                    ? k
                    : G.osVersionDefaults[eb.deviceType],
                orientation: eb.orientation,
                color: eb.deviceColor,
                ...A.Z.devices[eb.deviceType],
              }),
              [
                eb.deviceColor,
                eb.deviceType,
                eb.orientation,
                eb.osVersion,
                eb.platform,
                G.osVersionDefaults,
              ]
            ),
            eD = (0, u.useMemo)(
              () => ({ appetizer: eR, webserver: eE }),
              [eR, eE]
            ),
            eA = (0, u.useMemo)(() => {
              var e, t;
              let n = eb.orientation,
                o = Object.entries(
                  null !== (t = x.appPermissions) && void 0 !== t ? t : {}
                ).reduce((e, t) => {
                  let [n, o] = t;
                  return (
                    e ||
                    ("authenticated" === o &&
                    !el &&
                    ("run" === n ||
                      ("networkIntercept" === n && "intercept" === eb.proxy) ||
                      ("networkProxy" === n && eb.proxy) ||
                      (("adbConnect" === n || "androidPackageManager" === n) &&
                        eb.enableAdb) ||
                      ("debugLog" === n && eb.debug))
                      ? n
                      : e)
                  );
                }, void 0);
              return {
                ...ey,
                app: x,
                queue: ex,
                permissionError: o,
                requiresAuth:
                  !!o &&
                  (null === (e = x.appPermissions) || void 0 === e
                    ? void 0
                    : e[o]) === "authenticated",
                concurrentQueue: ej,
                launchStatus: eT,
                autoScale: H,
                sockets: eD,
                orientation: n,
                config: eb,
                postMessage: ep,
                spec: eC,
                lastFrame: ea,
                isDemo: ef,
                isStandalone: ev,
                isEmbed: O,
                isCrossPlatform: V,
                playButton: M,
                sponsor: {
                  loading: !(null == x ? void 0 : x.whitelabel) && !eu,
                  prelaunch: null == x ? void 0 : x.sponsored,
                },
                disabled: J,
              };
            }, [
              H,
              ej,
              x,
              eb,
              ef,
              O,
              V,
              eu,
              ev,
              eT,
              M,
              ep,
              ex,
              eD,
              eC,
              ey,
              el,
              J,
            ]),
            [eP, eL, eM] = (function (e) {
              var t;
              let n = (0, L.ib)(),
                o = (0, T.useRouter)(),
                { devices: r } = (0, z.ZD)(),
                { isSDK: a, version: s } = (0, Z.b1)(),
                { promptAuthPopup: c, authPopupRef: l } = (function (e) {
                  let { checkAuth: t } = (0, i.a)(),
                    n = (0, u.useRef)(null),
                    [o, r] = (0, u.useState)(null);
                  return {
                    authPopupRef: n,
                    promptAuthPopup: (0, u.useCallback)(async () => {
                      if (o) return o;
                      {
                        let o = new Promise((o) => {
                          let r = !1;
                          function i() {
                            var e;
                            window.removeEventListener("message", a),
                              null === (e = n.current) ||
                                void 0 === e ||
                                e.close(),
                              self.focus();
                          }
                          async function a(e) {
                            if ("user_loggedin" === e.data) {
                              r = !0;
                              try {
                                await t();
                              } catch (e) {
                                console.error(e);
                              }
                              i(), o(!0);
                            }
                          }
                          if (
                            ((n.current = window.open(
                              e,
                              "popup",
                              "width=600,height=600"
                            )),
                            n.current)
                          ) {
                            window.addEventListener("message", a);
                            let e = setInterval(() => {
                              var t;
                              (!n.current ||
                                (null === (t = n.current) || void 0 === t
                                  ? void 0
                                  : t.closed)) &&
                                (self.focus(), clearInterval(e), i(), o(r));
                            }, 100);
                          } else o(!1);
                        }).finally(() => {
                          r(null), (n.current = null);
                        });
                        return r(o), o;
                      }
                    }, [t, o, e]),
                  };
                })(
                  ""
                    .concat(window.location.origin)
                    .concat(
                      null !== (t = e.values.app.authUrl) && void 0 !== t
                        ? t
                        : "/login"
                    )
                ),
                d = (0, er.e)(e),
                h = (0, W.R)(() => {
                  var t, n;
                  return Boolean(
                    e.values.app &&
                      (null === (t = e.values.sockets.webserver) || void 0 === t
                        ? void 0
                        : t.id) &&
                      (null === (n = e.values.sockets.webserver) || void 0 === n
                        ? void 0
                        : n.connected)
                  );
                }),
                p = (0, W.R)(() =>
                  Boolean(
                    e.values.session || e.values.config.disableSessionStart
                  )
                );
              return (function (e, t) {
                let n = (function (e) {
                    let t = en(void 0);
                    return (0, W.R)(
                      async () =>
                        new Promise((e) => {
                          t((t) => {
                            e(t);
                          });
                        })
                    );
                  })(),
                  o = (0, u.useRef)(null),
                  r = (0, u.useRef)(null),
                  [i, a, s] = (function (e) {
                    let [t, n] = (0, u.useState)(e),
                      o = (0, u.useRef)(t),
                      r = (0, u.useCallback)((e) => {
                        "function" == typeof e
                          ? n((t) => {
                              let n = e(t);
                              return (o.current = n), n;
                            })
                          : ((o.current = e), n(e));
                      }, []);
                    return [t, r, o];
                  })(!1);
                return [
                  (0, W.R)(() => {
                    var i;
                    return (
                      null == t ||
                        null === (i = t.onInvoke) ||
                        void 0 === i ||
                        i.call(t),
                      r.current ||
                        (a(!0),
                        (r.current = new Promise(async (t, i) => {
                          let c = {};
                          for (
                            o.current = e();
                            s.current && o.current && !c.done;

                          )
                            (c = await o.current.next()), await n();
                          (o.current = null),
                            (r.current = null),
                            s.current
                              ? (a(!1), t(c.value))
                              : i(Error("cancelled"));
                        }))),
                      r.current
                    );
                  }),
                  i,
                  (0, W.R)(() => {
                    var e;
                    (o.current = null),
                      (r.current = null),
                      null == t ||
                        null === (e = t.onCancel) ||
                        void 0 === e ||
                        e.call(t),
                      a(!1);
                  }),
                ];
              })(
                async function* () {
                  if (window.isCrawler) {
                    toastr.remove(),
                      toastr.warning(
                        "Crawler detected. Session failed to start"
                      );
                    return;
                  }
                  if (p()) return;
                  if (!h()) {
                    for (
                      d.current.values.requiresAuth || d.current.onPlaying(!0);
                      !d.current.values.sockets.webserver;

                    )
                      yield;
                    for (
                      d.current.values.sockets.webserver.connected ||
                      d.current.values.sockets.webserver.connect();
                      !h();

                    )
                      yield;
                  }
                  if (d.current.values.requiresAuth) {
                    let e = async () => {
                        if (d.current.values.isEmbed) {
                          let e = await c();
                          return (
                            e ||
                              (toastr.clear(),
                              toastr.error(
                                "You must be logged in to an authorized account in order to stream this app"
                              ),
                              d.current.onPlaying(!1)),
                            e
                          );
                        }
                        {
                          var e;
                          let t = Object.keys(
                            null !== (e = o.query) && void 0 !== e ? e : {}
                          ).length
                            ? ""
                                .concat(o.asPath, "?")
                                .concat(R.stringify(o.query))
                            : o.asPath;
                          if (
                            (setTimeout(() => {
                              o.push("/login?next=".concat(t));
                            }),
                            d.current.values.requiresAuth)
                          ) {
                            let e;
                            switch (d.current.values.permissionError) {
                              case "adbConnect":
                              case "androidPackageManager":
                                e = "ADB";
                                break;
                              case "networkIntercept":
                              case "networkProxy":
                                e = "a proxy";
                                break;
                              case "debugLog":
                                e = "debug";
                            }
                            return (
                              setTimeout(() => {
                                e
                                  ? toastr.error(
                                      "You must be logged in to an authorized account in order to stream this app with ".concat(
                                        e
                                      )
                                    )
                                  : toastr.error(
                                      "You must be logged in to an authorized account in order to stream this app"
                                    );
                              }, 1),
                              !1
                            );
                          }
                        }
                      },
                      t = await e();
                    if (!t) return;
                  }
                  d.current.onRequest(), d.current.onPlaying(!0);
                  let { app: e, config: t } = d.current.values;
                  try {
                    var i, l;
                    await n("/api/session/request", {
                      method: "POST",
                      redirectOnUnauthorized: !1,
                      body: {
                        data: {
                          scale: o.query.scale,
                          sdkVersion:
                            a && s
                              ? "v"
                                  .concat(s.major, ".")
                                  .concat(s.minor, ".")
                                  .concat(s.patch)
                              : void 0,
                          publicKey: e.publicKey,
                          payerCode: t.payerCode,
                          deviceType: t.deviceType,
                          platform: t.platform,
                          codec: t.codec,
                          osVersion:
                            null !== (l = t.osVersion) && void 0 !== l
                              ? l
                              : r.osVersionDefaults[t.deviceType],
                          userTimezone: (0, eo.S)(),
                          rotation: t.rotation,
                          timestamp: Date.now(),
                          accessibility: !!t.accessibility,
                          autoplay: !!t.autoplay,
                          debug: !!t.debug,
                          enableAdb: !!t.enableAdb,
                          loopback: !!t.loopback,
                          noVideo: !!t.noVideo,
                          screenRecording: !!t.screenRecording,
                          xdocMsg: !!t.xdocMsg,
                          params: t.params,
                          launchArgs: t.launchArgs,
                          plistEdit: t.plistEdit,
                          androidPackageManager: !!t.androidPackageManager,
                          language: t.language,
                          locale: t.locale,
                          adbShellCommand: t.adbShellCommand,
                          disableVirtualKeyboard: t.disableVirtualKeyboard,
                          timezone: t.timezone,
                          iosKeyboard: t.iosKeyboard,
                          iosAutocorrect: t.iosAutocorrect,
                          appearance: t.appearance,
                          location: t.location,
                          launchUrl: t.launchUrl,
                          proxy: t.proxy,
                          audio: t.audio,
                          referrer:
                            d.current.values.isEmbed && window !== window.parent
                              ? document.referrer
                              : document.location.href,
                          region: t.region,
                          grantPermissions: t.grantPermissions,
                          hidePasswords: t.hidePasswords,
                          record: t.record,
                          href: document.location.href,
                        },
                        socketid:
                          null === (i = d.current.values.sockets.webserver) ||
                          void 0 === i
                            ? void 0
                            : i.id,
                      },
                    });
                  } catch (e) {
                    d.current.onPlaying(!1), d.current.onRequestError(e);
                  }
                },
                {
                  onInvoke: () => {
                    l.current && l.current.focus();
                  },
                }
              );
            })({
              values: eA,
              onPlaying(e) {
                e && ew({ isPlaying: e });
              },
              onRequest: () => {
                ep("sessionRequested");
              },
              onRequestError: (e) => {
                let t = "Error requesting session";
                if (e instanceof L.kp) {
                  if (400 === e.status)
                    I.k.error(
                      Error(
                        "Bad request for session - possible stale socket id"
                      )
                    ),
                      toastr.error(
                        e instanceof L.kp && e.message ? e.message : t
                      );
                  else if (401 === e.status) {
                    let t = (0, c.qY)();
                    I.k.error(e),
                      O && (null == t ? void 0 : t.name) === "safari"
                        ? toastr.error(
                            "Safari is not supported for authentication in embeds. Please use Google Chrome or Firefox."
                          )
                        : toastr.error(
                            "You are not authorized to run this app"
                          );
                  } else
                    r.Tb(
                      Error(
                        "Error requesting session: "
                          .concat(e.status, " ")
                          .concat(e.message)
                      )
                    );
                } else I.k.error(e), toastr.error(t), r.Tb(e);
                ew({ session: void 0, isStreaming: !1, isPlaying: !1 });
              },
            }),
            eO = (0, u.useMemo)(() => {
              function e(e) {
                if (eR && !eb.userInteractionDisabled) {
                  if (ey.inactivity)
                    eR.emit("userInteraction", { type: "heartbeat" }),
                      ew({ inactivity: void 0 });
                  else {
                    var t;
                    let n = {
                      ...e,
                      shiftKey: $.current || e.shiftKey,
                      altKey: ee.current,
                      timestamp:
                        null !== (t = e.timestamp) && void 0 !== t
                          ? t
                          : Date.now(),
                    };
                    n.timestamp > Date.now() + 1e3 &&
                      console.warn(
                        "userInteraction timestamp is in the future. You may see unexpected results."
                      ),
                      eR.emit("userInteraction", n);
                  }
                }
              }
              return {
                userInteraction: e,
                endSession: function () {
                  null == eE ||
                    eE.emit("removeFromQueue", { timestamp: Date.now() }),
                    X.current &&
                      (eM(),
                      ew({
                        session: void 0,
                        isStreaming: !1,
                        isPlaying: !1,
                        inactivity: void 0,
                        timeLimit: void 0,
                        adbConnectionInfo: void 0,
                        appLaunched: !1,
                      })),
                    eb.endSessionRedirectUrl &&
                      (window.location.href = eb.endSessionRedirectUrl);
                },
                setConfig: eg,
                requestSession: eP,
                setJmuxerReady: (e) => {
                  ew({ isJmuxerReady: !!e });
                },
                rotate: (e) => {
                  if (eb.noVideo) {
                    toastr.remove(),
                      toastr.warning(
                        "Rotation not supported when noVideo=true"
                      );
                    return;
                  }
                  if (ey.isPlaying)
                    ew({ isRotating: e }),
                      null == eR ||
                        eR.emit("userInteraction", {
                          type: "keypress",
                          key: "left" === e ? "rotateLeft" : "rotateRight",
                          timestamp: Date.now(),
                        });
                  else {
                    let t = eb.rotation + ("left" === e ? -90 : 90);
                    t < 0 ? (t = Math.abs(360 + (t % 360))) : (t %= 360),
                      eg({ rotation: t });
                  }
                },
                pasteText: (t) => {
                  let n = [...t].map(N);
                  e({
                    type: "keypressArray",
                    shiftKeyArray: n.map((e) => e.shiftKey),
                    keyArray: n.map((e) => e.key),
                    value: t,
                  });
                },
                toggleSoftKeyboard: () => {
                  eR && "ios" === eb.platform && eR.emit("toggleSoftKeyboard");
                },
                screenshot: async () => {
                  var e, t;
                  if (
                    (null === (e = ey.capabilities) || void 0 === e
                      ? void 0
                      : e.screenshot) &&
                    eR
                  ) {
                    console.log("High Res Screenshot requested");
                    let e = await new Promise((e, t) => {
                      let n = setTimeout(() => {
                        let e = Error("Screenshot timed out after 10 seconds");
                        toastr.remove(), toastr.error(e.message), t(e);
                      }, 1e4);
                      eR.once("screenshot", (o) => {
                        clearTimeout(n),
                          !1 === o.success
                            ? t(Error(o.error || "Error getting screenshot"))
                            : e({
                                data: o.data,
                                base64: (0, D.Sg)(
                                  new Uint8Array(o.data),
                                  o.mimeType
                                ),
                                mimeType: o.mimeType,
                                highRes: !0,
                              });
                      }),
                        eR.emit("getScreenshot");
                    });
                    return ep({ type: "screenshot", data: e.base64 }), e;
                  }
                  if (ea.current) {
                    let e = ea.current.split("base64,").pop(),
                      n =
                        null === (t = ea.current.match(/data:(.*);/)) ||
                        void 0 === t
                          ? void 0
                          : t[1];
                    if (n)
                      return (
                        ep({ type: "screenshot", data: ea.current }),
                        {
                          data: (0, D.eh)(e),
                          mimeType: n,
                          base64: ea.current,
                          highRes: !1,
                        }
                      );
                  }
                  return null;
                },
                setVideoElement: (e) => ew({ videoElement: e }),
                setAudioElement: (e) => ew({ audioElement: e }),
              };
            }, [
              eg,
              eP,
              eE,
              X,
              eb.endSessionRedirectUrl,
              eb.userInteractionDisabled,
              eb.noVideo,
              eb.rotation,
              eb.platform,
              eM,
              ew,
              eR,
              ey.inactivity,
              ey.isPlaying,
              null === (b = ey.capabilities) || void 0 === b
                ? void 0
                : b.screenshot,
              $,
              ee,
              ep,
            ]),
            eN = (0, u.useMemo)(() => ({ ...eA, ...eO }), [eA, eO]);
          return (
            (0, u.useEffect)(() => {
              null == S || S(eb);
            }, [eb]),
            (0, u.useEffect)(() => {
              function e() {
                ew({ isStreaming: !0 }), ep("firstFrameReceived");
              }
              function t() {
                ew({ isStreaming: !0 });
              }
              if ((ew({ isStreaming: !1 }), eR && ey.session))
                return eb.noVideo
                  ? (eR.once("appLaunch", t),
                    () => {
                      eR.off("appLaunch", t);
                    })
                  : (eR.once("h264Data", e),
                    eR.once("frameData", e),
                    () => {
                      eR.off("h264Data", e), eR.off("frameData", e);
                    });
            }, [eR, ey.session]),
            (0, u.useEffect)(() => {
              if (eR) {
                var e, t;
                let n =
                  null !==
                    (t =
                      null === (e = ey.inactivity) || void 0 === e
                        ? void 0
                        : e.countdown) && void 0 !== t
                    ? t
                    : 0;
                if (n > 0) {
                  let e = setTimeout(() => {
                    ew((e) => {
                      var t, n;
                      let o =
                        null !==
                          (n =
                            null === (t = e.inactivity) || void 0 === t
                              ? void 0
                              : t.countdown) && void 0 !== n
                          ? n
                          : 0;
                      return e.inactivity && o > 0
                        ? { inactivity: { warning: !1, countdown: o - 1 } }
                        : {};
                    });
                  }, 1e3);
                  return () => {
                    clearTimeout(e);
                  };
                }
              }
            }, [ey.inactivity]),
            (0, u.useEffect)(() => {
              let e = eb.rotation + ("left" === ey.isRotating ? -90 : 90);
              function t(t) {
                let n = t.width < t.height ? "portrait" : "landscape";
                eb.orientation !== n &&
                  (ep({ type: "orientationChanged", value: n }),
                  !1 === ey.isRotating
                    ? eg({ rotation: "portrait" === n ? 0 : 90 })
                    : (eg({ rotation: e }), ew({ isRotating: !1 })));
              }
              if ((e < 0 ? (e = Math.abs(360 + (e % 360))) : (e %= 360), eR)) {
                let e = setTimeout(() => {
                  ey.isRotating && ew({ isRotating: !1 });
                }, 5e3);
                return (
                  eR.on("h264Data", t),
                  eR.on("frameData", t),
                  () => {
                    clearTimeout(e),
                      eR.off("h264Data", t),
                      eR.off("frameData", t);
                  }
                );
              }
              ey.isRotating && (eg({ rotation: e }), ew({ isRotating: !1 }));
            }, [eR, ey.isRotating, eb.orientation]),
            (0, u.useEffect)(() => {
              eb.autoplay &&
                (ef || x.publicKey.startsWith("demo")
                  ? (toastr.remove(),
                    toastr.warning("Autoplay is not supported for demo apps"))
                  : eO.requestSession().catch((e) => {
                      console.error(e);
                    }));
            }, [eb.autoplay, x.publicKey]),
            (0, u.useEffect)(() => {
              if (!O && Y) {
                let e = [
                  "device",
                  "osVersion",
                  "scale",
                  "deviceColor",
                  "orientation",
                  "enableAdb",
                  "proxy",
                  "debug",
                  "record",
                ].reduce(
                  (e, t) => {
                    let n = eb[t];
                    if (
                      ("device" === t && (n = eb.deviceType),
                      "scale" === t && H)
                    )
                      return e;
                    if (
                      ["deviceColor", "orientation"].includes(t) &&
                      n === B[t]
                    )
                      return delete e[t], e;
                    switch (typeof n) {
                      case "boolean":
                        if (n) return { ...e, [t]: "true" };
                        return delete e[t], e;
                      case "undefined":
                        return delete e[t], e;
                      default:
                        return { ...e, [t]: n };
                    }
                  },
                  { ...ed.query }
                );
                _().replace({ query: e }, void 0, { scroll: !1, shallow: !0 });
              }
            }, [JSON.stringify(eb), Y, H]),
            (0, l.P)(() => {
              ey.session || e_ || (null == U || U(), ep("sessionEnded"));
            }, [ey.session, e_]),
            !(function (e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : m(),
                o = (0, u.useRef)(!1),
                r = (function (e) {
                  let t = (0, u.useRef)(e);
                  return (
                    (0, u.useEffect)(() => {
                      t.current = e;
                    }, [e]),
                    t.current
                  );
                })(t);
              (0, u.useEffect)(() => {
                o.current &&
                  !n(r, t) &&
                  e(
                    (function e(t, n) {
                      return h()(
                        null != t ? t : {},
                        (t, o, r) => (
                          m()(o, null == n ? void 0 : n[r]) ||
                            (t[r] =
                              f()(o) && f()(null == n ? void 0 : n[r])
                                ? e(o, null == n ? void 0 : n[r])
                                : o),
                          t
                        ),
                        {}
                      );
                    })(t, r)
                  ),
                  (o.current = !0);
              }, [t]);
            })(
              (e) => {
                e && eg(e);
              },
              { ...eb, ...e.config }
            ),
            (0, u.useEffect)(() => {
              if (!ey.isPlaying) {
                let e = setTimeout(() => {
                  I.k.warn("Disconnected client due to inactivity"),
                    null == eE || eE.disconnect();
                }, 6e4);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [eE, ey.isPlaying]),
            (0, u.useImperativeHandle)(t, () => eN, [eN]),
            (0, o.jsxs)(ec.Provider, {
              value: eN,
              children: [
                (0, o.jsx)(es, {}),
                (0, o.jsx)(et, {}),
                x && ("function" == typeof E ? E(eN) : E),
              ],
            })
          );
        });
      function es() {
        let {
          endSession: e,
          app: t,
          lastFrame: n,
          sockets: o,
          isDemo: r,
          isPlaying: i,
          config: {
            adbShellCommand: a,
            autoplay: s,
            language: c,
            deviceType: u,
            osVersion: d,
            codec: h,
            debug: p,
            enableAdb: f,
            proxy: v,
            iosKeyboard: m,
            iosAutocorrect: b,
            location: g,
          },
        } = el();
        return (
          (0, l.P)(() => {
            var e;
            null === (e = o.appetizer) ||
              void 0 === e ||
              e.emit("setLanguage", { language: c, timestamp: Date.now() });
          }, [c]),
          (0, l.P)(() => {
            var e;
            null === (e = o.appetizer) ||
              void 0 === e ||
              e.emit("adbShellCommand", { command: a, timestamp: Date.now() });
          }, [a]),
          (0, l.P)(() => {
            var e;
            null === (e = o.appetizer) ||
              void 0 === e ||
              e.emit("setLocation", { location: g, timestamp: Date.now() });
          }, [g]),
          (0, l.P)(() => {
            i &&
              (e({ restart: s && !r && !t.publicKey.startsWith("demo") }),
              (n.current = null));
          }, [t.publicKey, u, d, h, p, f, v, m, b]),
          null
        );
      }
      let ec = (0, S.kr)({});
      function el(e) {
        return (0, S.Sz)(ec, null != e ? e : (e) => e);
      }
    },
    38988: function (e, t, n) {
      n.d(t, {
        a: function () {
          return c;
        },
      });
      var o = n(24246),
        r = n(78164),
        i = n.n(r),
        a = n(38944),
        s = n(19552);
      function c(e) {
        var t, n, r, c, l, u, d, h, p, f, v, m;
        let b,
          { screen: g, showOverflow: y = !1, children: w, className: k } = e,
          {
            spec: x,
            config: { screenOnly: j, orientation: E, rotation: T },
          } = (0, s.F)();
        switch (T) {
          case 90:
            b = {
              right: "".concat(x.screen.top, "px"),
              top: "".concat(x.screen.left, "px"),
            };
            break;
          case 180:
            b = {
              right: "".concat(x.screen.left, "px"),
              bottom: "".concat(x.screen.top, "px"),
            };
            break;
          case 270:
            b = {
              left: "".concat(x.screen.top, "px"),
              bottom: "".concat(x.screen.left, "px"),
            };
            break;
          default:
            b = {
              left: "".concat(x.screen.left, "px"),
              top: "".concat(x.screen.top, "px"),
            };
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i(), {
              id: "9ee41b3cbb163c44",
              dynamic: [
                null !== (t = b.top) && void 0 !== t ? t : "auto",
                null !== (n = b.left) && void 0 !== n ? n : "auto",
                null !== (r = b.right) && void 0 !== r ? r : "auto",
                null !== (c = b.bottom) && void 0 !== c ? c : "auto",
                y ? "visible" : "hidden",
                "portrait" === E ? x.screen.width : x.screen.height,
                "portrait" === E ? x.screen.height : x.screen.width,
                x.screen.borderRadius || 0,
              ],
              children:
                ".root.__jsx-style-dynamic-selector{-webkit-tap-highlight-color:transparent}.screen.__jsx-style-dynamic-selector{top:"
                  .concat(
                    null !== (l = b.top) && void 0 !== l ? l : "auto",
                    ";left:"
                  )
                  .concat(
                    null !== (u = b.left) && void 0 !== u ? u : "auto",
                    ";right:"
                  )
                  .concat(
                    null !== (d = b.right) && void 0 !== d ? d : "auto",
                    ";bottom:"
                  )
                  .concat(
                    null !== (h = b.bottom) && void 0 !== h ? h : "auto",
                    ";cursor:pointer;overflow:"
                  )
                  .concat(y ? "visible" : "hidden", ";width:")
                  .concat(
                    "portrait" === E ? x.screen.width : x.screen.height,
                    "px;height:"
                  )
                  .concat(
                    "portrait" === E ? x.screen.height : x.screen.width,
                    "px}.screen.__jsx-style-dynamic-selector{-webkit-border-radius:"
                  )
                  .concat(x.screen.borderRadius || 0, "px;-moz-border-radius:")
                  .concat(x.screen.borderRadius || 0, "px;border-radius:")
                  .concat(
                    x.screen.borderRadius || 0,
                    "px}.screen-only.__jsx-style-dynamic-selector{top:0;left:0;right:0;bottom:0}"
                  ),
            }),
            (0, o.jsx)("div", {
              className:
                i().dynamic([
                  [
                    "9ee41b3cbb163c44",
                    [
                      null !== (p = b.top) && void 0 !== p ? p : "auto",
                      null !== (f = b.left) && void 0 !== f ? f : "auto",
                      null !== (v = b.right) && void 0 !== v ? v : "auto",
                      null !== (m = b.bottom) && void 0 !== m ? m : "auto",
                      y ? "visible" : "hidden",
                      "portrait" === E ? x.screen.width : x.screen.height,
                      "portrait" === E ? x.screen.height : x.screen.width,
                      x.screen.borderRadius || 0,
                    ],
                  ],
                ]) +
                " " +
                ((0, a.Z)(
                  "absolute inset-0 pointer-events-none user-select-none",
                  "root",
                  g && "screen",
                  j && "screen-only",
                  x.isGeneric && "generic",
                  x.type,
                  k
                ) || ""),
              children: w,
            }),
          ],
        });
      }
    },
    68764: function (e, t, n) {
      n.d(t, {
        Yk: function () {
          return u.Z;
        },
        ZP: function () {
          return W;
        },
        Fy: function () {
          return u.F;
        },
      });
      var o,
        r,
        i = n(24246),
        a = n(78164),
        s = n.n(a),
        c = n(27378),
        l = n(97329),
        u = n(19552),
        d = n(83926),
        h = n.n(d),
        p = n(64374),
        f = n(32655);
      function v() {
        return !(
          !window.MediaSource ||
          (window.MSInputMethodContext && document.documentMode)
        );
      }
      function m() {
        let {
            config: { volume: e },
            sockets: t,
            setAudioElement: n,
            setConfig: o,
          } = (0, u.F)(),
          r = t.appetizer,
          a = (0, c.useRef)(null),
          s = (0, c.useRef)(null),
          [l, d] = (0, c.useState)(!1),
          [f, m] = (0, c.useState)(!0);
        (0, p.W)(() => {
          n(a.current);
        }, []),
          (0, c.useEffect)(() => {
            void 0 !== e && a.current && (a.current.volume = e);
          }, [e]),
          (0, c.useEffect)(() => {
            v()
              ? (s.current = new (h())({
                  node: a.current,
                  mode: "audio",
                  flushingTime: 1.5,
                  onReady: () => {
                    s.current &&
                      s.current.mediaSource &&
                      (s.current.mediaSource.duration = 1 / 0);
                  },
                }))
              : (console.warn(
                  "Browser does not support Media Source Extensions, disabling audio"
                ),
                o({ audio: !1 }));
          }, []);
        let b = (0, c.useCallback)(() => {
            var e;
            let t = !f,
              n = ["AbortError", "NotAllowedError"];
            null === (e = a.current) ||
              void 0 === e ||
              e.play().catch((e) => {
                "NotAllowedError" === e.name
                  ? t ||
                    ((t = !0),
                    m(!1),
                    console.log(
                      "We are blocked from playing audio on Safari",
                      e
                    ),
                    toastr.remove(),
                    toastr.warning(
                      "Audio blocked by browser. Please click anywhere on the page to enable audio."
                    ))
                  : e.message && !n.includes(e.name) && console.error(e);
              });
          }, [f]),
          g = (0, c.useCallback)(() => {
            let e = a.current;
            (null == e ? void 0 : e.buffered.length) &&
              ((e.currentTime = e.buffered.end(e.buffered.length - 1)), b());
          }, [b]);
        return (
          (0, c.useEffect)(() => {
            let e = 0;
            function t(t) {
              let n = a.current;
              if (t.buffer && f && n)
                try {
                  var o;
                  l || g();
                  let n = 23;
                  (e += 1024e3 / 44100 - n) > 1 && ((n = 24), (e -= 1)),
                    null === (o = s.current) ||
                      void 0 === o ||
                      o.feed({ audio: t.buffer, duration: n });
                } catch (e) {
                  console.error(e);
                }
            }
            function n() {
              var e;
              null === (e = s.current) || void 0 === e || e.reset();
            }
            if (r)
              return (
                r.on("audioData", t),
                r.on("disconnect", n),
                () => {
                  r.off("audioData", t), r.off("disconnect", n);
                }
              );
          }, [r, f, l, g]),
          (0, c.useEffect)(() => {
            if (!f)
              return (
                window.addEventListener("click", g),
                () => {
                  window.removeEventListener("click", g);
                }
              );
          }, [g, f]),
          (0, c.useEffect)(() => {
            function e() {
              g();
            }
            return (
              window.addEventListener("focus", e),
              () => {
                window.removeEventListener("focus", e);
              }
            );
          }, [g]),
          (0, i.jsx)("audio", {
            ref: a,
            autoPlay: !0,
            onTimeUpdate: function () {
              let e = a.current;
              if (e && e.buffered && e.buffered.length) {
                let t = e.buffered.end(e.buffered.length - 1),
                  n = t - e.currentTime;
                n > 1
                  ? g()
                  : n > 0.5
                  ? (e.playbackRate = 1.5)
                  : 1 !== e.playbackRate && (e.playbackRate = 1);
              } else console.log("no audio buffered");
            },
            onPlay: () => {
              d(!0), m(!0);
            },
            onPause: (e) => {
              e.preventDefault(), g();
            },
            onEnded: () => {
              d(!1);
            },
          })
        );
      }
      var b = n(3793),
        g = n(38988),
        y = n(80673),
        w = n(2128);
      function k() {
        var e,
          t,
          n,
          o,
          r,
          a,
          l,
          d,
          h,
          p,
          f,
          v,
          m,
          k,
          x,
          j,
          E,
          T,
          _,
          R,
          S,
          C,
          D,
          A,
          P,
          L,
          M,
          O,
          N,
          I,
          z;
        let {
            app: V,
            config: { rotation: q },
            userInteraction: F,
            spec: B,
            isPlaying: Z,
          } = (0, u.F)(),
          { config: K } = (0, u.F)();
        (0, c.useEffect)(() => {
          if (!K.screenOnly)
            try {
              let e = Object.entries(b.Z.devices).flatMap((e) => {
                let [t, n] = e;
                if (!K.platform || (0, y.Xf)(t) === K.platform) {
                  var o, r;
                  return [
                    null === (o = n.chrome) || void 0 === o ? void 0 : o.black,
                    null === (r = n.chrome) || void 0 === r ? void 0 : r.white,
                  ].filter(Boolean);
                }
                return [];
              });
              e.forEach((e) => {
                let t = new Image();
                t.src = e;
              });
            } catch (e) {
              w.TF.captureException(e),
                console.error("Error preloading device chromes", e);
            }
        }, [K.platform, K.screenOnly]);
        let U = (
            null === (e = B.homeButton) || void 0 === e ? void 0 : e.bottom
          )
            ? "".concat(
                null === (t = B.homeButton) || void 0 === t ? void 0 : t.bottom,
                "px"
              )
            : "0px",
          W =
            null !==
              (z =
                null === (n = B.chrome) || void 0 === n
                  ? void 0
                  : n[B.color]) && void 0 !== z
              ? z
              : null === (o = B.chrome) || void 0 === o
              ? void 0
              : o.black;
        return (0, i.jsxs)(g.a, {
          children: [
            (0, i.jsx)(s(), {
              id: "1de86ed82774f53",
              dynamic: [
                q,
                Math.floor(B.width),
                Math.floor(B.height),
                null === (r = B.homeButton) || void 0 === r ? void 0 : r.width,
                null === (a = B.homeButton) || void 0 === a ? void 0 : a.height,
                "white" === B.color ? "black" : "white",
                "white" === B.color ? 0.025 : 0.1,
                U,
                U,
                U,
                U,
              ],
              children:
                ".rotation.__jsx-style-dynamic-selector{-webkit-transform:rotate("
                  .concat(q, "deg)translatez(0);-moz-transform:rotate(")
                  .concat(q, "deg)translatez(0);transform:rotate(")
                  .concat(
                    q,
                    "deg)translatez(0);-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}.device-border.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:"
                  )
                  .concat(Math.floor(B.width), "px;height:")
                  .concat(
                    Math.floor(B.height),
                    "px}.home-button.__jsx-style-dynamic-selector{pointer-events:all;position:absolute;overflow:hidden;margin:auto;width:"
                  )
                  .concat(
                    null === (l = B.homeButton) || void 0 === l
                      ? void 0
                      : l.width,
                    "px;height:"
                  )
                  .concat(
                    null === (d = B.homeButton) || void 0 === d
                      ? void 0
                      : d.height,
                    "px;cursor:pointer;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;z-index:5}.home-button.__jsx-style-dynamic-selector:hover:not([disabled]){background-color:"
                  )
                  .concat("white" === B.color ? "black" : "white", ";opacity:")
                  .concat(
                    "white" === B.color ? 0.025 : 0.1,
                    "}.home-button.rotated-0.__jsx-style-dynamic-selector{left:0;right:0;bottom:"
                  )
                  .concat(
                    U,
                    "}.home-button.rotated-90.__jsx-style-dynamic-selector{top:0;bottom:0;left:"
                  )
                  .concat(
                    U,
                    "}.home-button.rotated-180.__jsx-style-dynamic-selector{left:0;right:0;top:"
                  )
                  .concat(
                    U,
                    "}.home-button.rotated-270.__jsx-style-dynamic-selector{top:0;bottom:0;right:"
                  )
                  .concat(U, "}"),
            }),
            (0, i.jsxs)("div", {
              className: s().dynamic([
                [
                  "1de86ed82774f53",
                  [
                    q,
                    Math.floor(B.width),
                    Math.floor(B.height),
                    null === (h = B.homeButton) || void 0 === h
                      ? void 0
                      : h.width,
                    null === (p = B.homeButton) || void 0 === p
                      ? void 0
                      : p.height,
                    "white" === B.color ? "black" : "white",
                    "white" === B.color ? 0.025 : 0.1,
                    U,
                    U,
                    U,
                    U,
                  ],
                ],
              ]),
              children: [
                B.isGeneric &&
                  (0, i.jsx)("div", {
                    className: s().dynamic([
                      [
                        "1de86ed82774f53",
                        [
                          q,
                          Math.floor(B.width),
                          Math.floor(B.height),
                          null === (f = B.homeButton) || void 0 === f
                            ? void 0
                            : f.width,
                          null === (v = B.homeButton) || void 0 === v
                            ? void 0
                            : v.height,
                          "white" === B.color ? "black" : "white",
                          "white" === B.color ? 0.025 : 0.1,
                          U,
                          U,
                          U,
                          U,
                        ],
                      ],
                    ]),
                    children: (0, i.jsxs)("div", {
                      className:
                        s().dynamic([
                          [
                            "1de86ed82774f53",
                            [
                              q,
                              Math.floor(B.width),
                              Math.floor(B.height),
                              null === (m = B.homeButton) || void 0 === m
                                ? void 0
                                : m.width,
                              null === (k = B.homeButton) || void 0 === k
                                ? void 0
                                : k.height,
                              "white" === B.color ? "black" : "white",
                              "white" === B.color ? 0.025 : 0.1,
                              U,
                              U,
                              U,
                              U,
                            ],
                          ],
                        ]) +
                        " " +
                        "device-border rotation marvel-device s5 ".concat(
                          B.color
                        ),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            s().dynamic([
                              [
                                "1de86ed82774f53",
                                [
                                  q,
                                  Math.floor(B.width),
                                  Math.floor(B.height),
                                  null === (x = B.homeButton) || void 0 === x
                                    ? void 0
                                    : x.width,
                                  null === (j = B.homeButton) || void 0 === j
                                    ? void 0
                                    : j.height,
                                  "white" === B.color ? "black" : "white",
                                  "white" === B.color ? 0.025 : 0.1,
                                  U,
                                  U,
                                  U,
                                  U,
                                ],
                              ],
                            ]) + " top-bar",
                        }),
                        (0, i.jsx)("div", {
                          className:
                            s().dynamic([
                              [
                                "1de86ed82774f53",
                                [
                                  q,
                                  Math.floor(B.width),
                                  Math.floor(B.height),
                                  null === (E = B.homeButton) || void 0 === E
                                    ? void 0
                                    : E.width,
                                  null === (T = B.homeButton) || void 0 === T
                                    ? void 0
                                    : T.height,
                                  "white" === B.color ? "black" : "white",
                                  "white" === B.color ? 0.025 : 0.1,
                                  U,
                                  U,
                                  U,
                                  U,
                                ],
                              ],
                            ]) + " sleep",
                        }),
                        (0, i.jsx)("div", {
                          className:
                            s().dynamic([
                              [
                                "1de86ed82774f53",
                                [
                                  q,
                                  Math.floor(B.width),
                                  Math.floor(B.height),
                                  null === (_ = B.homeButton) || void 0 === _
                                    ? void 0
                                    : _.width,
                                  null === (R = B.homeButton) || void 0 === R
                                    ? void 0
                                    : R.height,
                                  "white" === B.color ? "black" : "white",
                                  "white" === B.color ? 0.025 : 0.1,
                                  U,
                                  U,
                                  U,
                                  U,
                                ],
                              ],
                            ]) + " camera",
                        }),
                        (0, i.jsx)("div", {
                          className:
                            s().dynamic([
                              [
                                "1de86ed82774f53",
                                [
                                  q,
                                  Math.floor(B.width),
                                  Math.floor(B.height),
                                  null === (S = B.homeButton) || void 0 === S
                                    ? void 0
                                    : S.width,
                                  null === (C = B.homeButton) || void 0 === C
                                    ? void 0
                                    : C.height,
                                  "white" === B.color ? "black" : "white",
                                  "white" === B.color ? 0.025 : 0.1,
                                  U,
                                  U,
                                  U,
                                  U,
                                ],
                              ],
                            ]) + " sensor",
                        }),
                        (0, i.jsx)("div", {
                          className:
                            s().dynamic([
                              [
                                "1de86ed82774f53",
                                [
                                  q,
                                  Math.floor(B.width),
                                  Math.floor(B.height),
                                  null === (D = B.homeButton) || void 0 === D
                                    ? void 0
                                    : D.width,
                                  null === (A = B.homeButton) || void 0 === A
                                    ? void 0
                                    : A.height,
                                  "white" === B.color ? "black" : "white",
                                  "white" === B.color ? 0.025 : 0.1,
                                  U,
                                  U,
                                  U,
                                  U,
                                ],
                              ],
                            ]) + " speaker",
                        }),
                        (0, i.jsx)("div", {
                          className:
                            s().dynamic([
                              [
                                "1de86ed82774f53",
                                [
                                  q,
                                  Math.floor(B.width),
                                  Math.floor(B.height),
                                  null === (P = B.homeButton) || void 0 === P
                                    ? void 0
                                    : P.width,
                                  null === (L = B.homeButton) || void 0 === L
                                    ? void 0
                                    : L.height,
                                  "white" === B.color ? "black" : "white",
                                  "white" === B.color ? 0.025 : 0.1,
                                  U,
                                  U,
                                  U,
                                  U,
                                ],
                              ],
                            ]) + " home",
                        }),
                      ],
                    }),
                  }),
                !B.isGeneric &&
                  W &&
                  (0, i.jsx)("img", {
                    alt: "device border",
                    src: W,
                    className:
                      s().dynamic([
                        [
                          "1de86ed82774f53",
                          [
                            q,
                            Math.floor(B.width),
                            Math.floor(B.height),
                            null === (M = B.homeButton) || void 0 === M
                              ? void 0
                              : M.width,
                            null === (O = B.homeButton) || void 0 === O
                              ? void 0
                              : O.height,
                            "white" === B.color ? "black" : "white",
                            "white" === B.color ? 0.025 : 0.1,
                            U,
                            U,
                            U,
                            U,
                          ],
                        ],
                      ]) + " device-border rotation",
                  }),
                B.homeButton &&
                  (0, i.jsx)("button", {
                    "aria-label": "Home button",
                    disabled: V.disableHome || !Z,
                    onClick: () => {
                      F({ type: "keypress", key: "home" });
                    },
                    className:
                      s().dynamic([
                        [
                          "1de86ed82774f53",
                          [
                            q,
                            Math.floor(B.width),
                            Math.floor(B.height),
                            null === (N = B.homeButton) || void 0 === N
                              ? void 0
                              : N.width,
                            null === (I = B.homeButton) || void 0 === I
                              ? void 0
                              : I.height,
                            "white" === B.color ? "black" : "white",
                            "white" === B.color ? 0.025 : 0.1,
                            U,
                            U,
                            U,
                            U,
                          ],
                        ],
                      ]) +
                      " " +
                      "home-button rotation rotated-".concat(q),
                  }),
              ],
            }),
          ],
        });
      }
      function x() {
        let {
            config: { screenOnly: e },
            isRotating: t,
            rotate: n,
            isPlaying: o,
            isStreaming: r,
          } = (0, u.F)(),
          a = !!t || (o && !r);
        return (0, i.jsxs)(g.a, {
          screen: e,
          showOverflow: !0,
          children: [
            (0, i.jsx)(s(), {
              id: "6171b81c0efc6cab",
              children:
                "img.jsx-6171b81c0efc6cab{max-width:none}button.jsx-6171b81c0efc6cab{opacity:.8;background:none;border:none}button.jsx-6171b81c0efc6cab:hover:not([disabled]){opacity:1}button.jsx-6171b81c0efc6cab:disabled{opacity:.5}.root.jsx-6171b81c0efc6cab{pointer-events:all;position:absolute;right:0;bottom:0}.counter-clockwise.jsx-6171b81c0efc6cab{position:absolute;right:-65px;bottom:0px;-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-ms-transform:rotate(270deg);-o-transform:rotate(270deg);transform:rotate(270deg);-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}.clockwise.jsx-6171b81c0efc6cab{position:absolute;right:-5px;bottom:-60px;-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-ms-transform:rotate(270deg);-o-transform:rotate(270deg);transform:rotate(270deg);-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}.counter-clockwise.jsx-6171b81c0efc6cab img.jsx-6171b81c0efc6cab{width:60px}.clockwise.jsx-6171b81c0efc6cab img.jsx-6171b81c0efc6cab{height:60px}",
            }),
            (0, i.jsxs)("div", {
              className: "jsx-6171b81c0efc6cab root",
              children: [
                (0, i.jsx)("button", {
                  disabled: a,
                  onClick: () => n("left"),
                  className: "jsx-6171b81c0efc6cab counter-clockwise",
                  children: (0, i.jsx)("img", {
                    src: "/images/rotate1.png",
                    alt: "rotate left",
                    className: "jsx-6171b81c0efc6cab",
                  }),
                }),
                (0, i.jsx)("button", {
                  disabled: a,
                  onClick: () => n("right"),
                  className: "jsx-6171b81c0efc6cab clockwise",
                  children: (0, i.jsx)("img", {
                    src: "/images/rotate2.png",
                    alt: "rotate right",
                    className: "jsx-6171b81c0efc6cab",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var j = n(38785),
        E = n(29721),
        T = n(42351),
        _ = n(38944);
      function R() {
        return (R = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      let S = (e) =>
        c.createElement(
          "svg",
          R({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 690 124" }, e),
          o ||
            (o = c.createElement("path", {
              d: "M96.965 37.964 24.24 110.687 0 86.446l72.724-72.723 24.24 24.24ZM82.95 72.431 107.19 48.19l38.086 38.086-24.241 24.241L82.95 72.431ZM219.611 92.841c-4.227-3.676-6.403-8.72-6.403-14.856 0-14.59 11.446-22.36 27.804-22.36 4.593.06 9.147.842 13.498 2.317V53.45c0-6.65-5.586-11.047-13.09-11.047-6.944 0-12.263 3.277-15.806 9.68l-10.496-9.813c5.044-9.138 15.54-13.907 26.445-13.907 17.307 0 28.497 8.73 28.497 25.22v43.211h-15.265v-5.177c-5.044 4.503-11.456 6.65-19.084 6.65-6.421.028-11.74-1.739-16.1-5.425Zm19.225-8.178c6.403 0 11.722-1.9 15.674-5.7v-7.599a39.84 39.84 0 0 0-13.907-2.726c-7.219 0-11.855 3.002-11.855 8.312 0 4.445 3.543 7.713 10.088 7.713ZM293.531 91.892v31.346h-15.54V29.987h15.275v6.003c4.749-5.044 11.17-7.6 18.941-7.6 9.546 0 17.316 3.278 23.453 9.956 6.136 6.678 9.128 14.99 9.128 25.077 0 10.088-2.992 18.41-9.128 25.087-6.137 6.678-13.907 9.812-23.453 9.812a28.737 28.737 0 0 1-18.676-6.43Zm30.673-13.365a25.962 25.962 0 0 0 0-29.989c-3.167-4.084-7.527-6.13-13.08-6.136-11.456 0-17.858 9.138-17.858 21.135 0 11.997 6.402 21.126 17.858 21.126 5.585 0 9.945-2.045 13.08-6.136ZM366.636 91.892v31.346h-15.541V29.987h15.275v6.003c4.749-5.044 11.171-7.6 18.941-7.6 9.546 0 17.316 3.278 23.453 9.956 6.136 6.678 9.128 14.99 9.128 25.077 0 10.088-2.992 18.41-9.128 25.087-6.137 6.678-13.907 9.812-23.453 9.812a28.753 28.753 0 0 1-18.675-6.43Zm30.672-13.365a25.912 25.912 0 0 0 0-29.989c-3.135-4.084-7.495-6.13-13.08-6.136-11.456 0-17.858 9.138-17.858 21.135 0 11.997 6.402 21.126 17.858 21.126 5.579 0 9.952-2.045 13.118-6.136h-.038ZM487.168 68.03h-45.671c.684 9.955 7.6 16.224 17.583 16.224 7.232 0 12.96-3.134 17.184-9.404l10.496 9.813c-7.096 9.138-16.357 13.63-27.68 13.63-9.945 0-18.124-3.134-24.26-9.498-6.137-6.364-9.272-14.724-9.272-24.954 0-9.945 2.85-18.4 8.454-25.22 5.605-6.82 13.356-10.22 22.798-10.22 21.677 0 30.539 17.316 30.539 34.196l-.171 5.433Zm-44.854-12.406h28.497c-.133-6.953-4.493-13.08-13.897-13.08-8.188 0-13.099 5.909-14.6 13.08ZM533.533 96.793h-25.895a6.27 6.27 0 0 1-6.278-6.27v-46.62h-11.314V29.996h11.314V11.321h15.398v18.675h39.534v13.907h-39.534v38.176h16.775v14.714Z",
            })),
          r ||
            (r = c.createElement("path", {
              d: "M549.472 2.858a9.89 9.89 0 0 1 13.907 0 9.711 9.711 0 0 1 0 13.773 9.87 9.87 0 0 1-13.907 0 9.719 9.719 0 0 1-2.858-6.887 9.734 9.734 0 0 1 2.858-6.886Zm-.95 93.926V29.987h15.54v66.797h-15.54ZM572.127 29.996h50.848V43.22l-32.581 39.535h34.196v14.04h-53.194V83.598l32.296-39.668h-31.565V29.996ZM689.829 68.03h-45.671c.684 9.955 7.599 16.224 17.582 16.224 7.226 0 12.951-3.134 17.175-9.404l10.506 9.813c-7.096 9.138-16.367 13.63-27.681 13.63-9.945 0-18.124-3.134-24.26-9.498-6.136-6.364-9.271-14.724-9.271-24.954 0-9.945 2.85-18.4 8.454-25.22 5.605-6.82 13.356-10.22 22.798-10.22C681.137 28.4 690 45.716 690 62.596l-.171 5.433Zm-44.854-12.406h28.497c-.133-6.953-4.493-13.08-13.897-13.08-8.188 0-13.099 5.909-14.6 13.08Z",
            }))
        );
      function C(e) {
        let { white: t } = e;
        return (0, i.jsxs)("a", {
          className: (0, _.Z)(
            "flex flex-col justify-center items-center gap-2 text-[#aaaaaa] fill-[#aaaaaa]",
            t && "text-white brightness-0 invert"
          ),
          children: [
            (0, i.jsx)("span", {
              className: "text-sm",
              children: "Powered by",
            }),
            (0, i.jsx)(S, { height: "1.5rem" }),
          ],
        });
      }
      var D = n(42121),
        A = n(60074),
        P = n(75861);
      function L(e) {
        let { className: t, onError: n } = e,
          {
            isPlaying: o,
            isStreaming: r,
            setJmuxerReady: a,
            sockets: l,
            lastFrame: d,
            app: m,
            setVideoElement: b,
            config: { codec: g, debugSession: y, orientation: w },
            spec: k,
            setConfig: x,
          } = (0, u.F)(),
          j = (0, c.useRef)(null),
          E = (0, c.useRef)(null),
          T = (0, c.useRef)(null),
          R = l.appetizer,
          S = (0, P.e)(R),
          C = "portrait" === w ? k.screen.width : k.screen.height,
          L = "portrait" === w ? k.screen.height : k.screen.width,
          O = (0, c.useRef)([]);
        (0, c.useEffect)(() => {
          y &&
            (window.downloadSession = () => {
              window.saveAs(new Blob(O.current), "session.h264");
            });
        }, [y]);
        let N = (0, c.useCallback)(() => {
            let e = ["AbortError", "NotAllowedError"];
            M(E.current) &&
              E.current.play().catch((t) => {
                t.message && !e.includes(t.name) && console.error(t);
              });
          }, []),
          I = (0, c.useCallback)(() => {
            let e = E.current;
            e &&
              M(e) &&
              e.buffered.length &&
              ((e.currentTime = e.buffered.end(e.buffered.length - 1)), N());
          }, [N]);
        (0, p.W)(
          () => (
            b(E.current),
            () => {
              b(null);
            }
          ),
          [g]
        ),
          (0, c.useEffect)(
            () => (
              "h264" === g && M(E.current)
                ? (function () {
                    {
                      let e = (0, f.qY)();
                      return (
                        (!e || "firefox" !== e.name || "Android OS" !== e.os) &&
                        v()
                      );
                    }
                  })()
                  ? (T.current = new (h())({
                      node: E.current,
                      mode: "video",
                      flushingTime: 15,
                      onReady: () => {
                        T.current &&
                          T.current.mediaSource &&
                          (T.current.mediaSource.duration = 1 / 0),
                          a(!0);
                      },
                      onError: function (e) {
                        if (
                          /Safari/.test(navigator.userAgent) &&
                          /Apple Computer/.test(navigator.vendor)
                        ) {
                          var t;
                          console.log(
                            "h264 streaming interrupted, requesting new keyframe"
                          ),
                            null === (t = S.current) ||
                              void 0 === t ||
                              t.emit("requestKeyFrame");
                          let e = 0,
                            n = setInterval(() => {
                              e < 5 ? (I(), e++) : clearInterval(n);
                            }, 250);
                        }
                        null == n || n(e, T.current), console.error(e);
                      },
                    }))
                  : (v()
                      ? console.warn(
                          "Browser has no h264 support, switching codec to jpeg"
                        )
                      : console.warn(
                          "Browser does not support Media Source Extensions, switching codec to jpeg"
                        ),
                    x({ codec: "jpeg" }))
                : a(!0),
              () => {
                var e;
                null === (e = T.current) || void 0 === e || e.destroy(),
                  (T.current = null),
                  a(!1);
              }
            ),
            [g]
          ),
          (0, c.useEffect)(() => {
            var e, t, n, o, r;
            let i =
                null === (e = (0, f.qY)()) || void 0 === e
                  ? void 0
                  : e.name.includes("chrom"),
              a =
                (null === (t = (0, f.qY)()) || void 0 === t
                  ? void 0
                  : null === (n = t.os) || void 0 === n
                  ? void 0
                  : n.includes("Windows")) ||
                (null === (o = (0, f.qY)()) || void 0 === o ? void 0 : o.os) ===
                  "Linux" ||
                (null === (r = (0, f.qY)()) || void 0 === r ? void 0 : r.os) ===
                  "Android OS";
            function s() {
              M(E.current) && N();
            }
            function c(e) {
              try {
                var t, n;
                i &&
                  a &&
                  j.current &&
                  (j.current.width !== e.width ||
                    j.current.height !== e.height) &&
                  (null === (n = T.current) || void 0 === n || n.reset()),
                  y && O.current.push(e.buffer),
                  null === (t = T.current) ||
                    void 0 === t ||
                    t.feed({ video: e.buffer });
              } catch (e) {
                e instanceof Error && (e.name = "JMuxer Feed Error"),
                  console.error(e),
                  A.Tb(e);
              } finally {
                j.current = e;
              }
            }
            function l(e) {
              if (!M(E.current)) {
                let t = new Uint8Array(e.buffer),
                  n = (0, D.DA)(t),
                  o = btoa(n);
                E.current.src = "data:image/jpeg;base64," + o;
              }
              j.current = e;
            }
            if (R)
              return (
                R.once("h264Data", s),
                R.once("frameData", s),
                R.on("frameData", l),
                R.on("h264Data", c),
                () => {
                  R.off("frameData", l),
                    R.off("frameData", s),
                    R.off("h264Data", c),
                    R.off("h264Data", s);
                }
              );
          }, [R, I, N, y]),
          (0, c.useEffect)(() => {
            if (!o) {
              var e;
              null === (e = T.current) || void 0 === e || e.reset(),
                (j.current = null);
            }
          }, [o]),
          (0, c.useEffect)(() => {
            if (m.useLastFrame && r && E.current) {
              let e = document.createElement("canvas"),
                { width: t, height: n } = E.current,
                o = e.getContext("2d");
              d.current = null;
              let r = setInterval(() => {
                o &&
                  E.current &&
                  ((e.width = t),
                  (e.height = n),
                  o.drawImage(E.current, 0, 0, e.width, e.height),
                  (d.current = e.toDataURL("image/jpeg")));
              }, 1e3);
              return () => {
                clearInterval(r);
              };
            }
          }, [m, r, d]),
          (0, c.useEffect)(() => {
            function e() {
              I(), null == R || R.emit("requestKeyFrame");
            }
            return (
              window.addEventListener("focus", e),
              () => {
                window.removeEventListener("focus", e);
              }
            );
          }, [I, R]);
        let z = {
          className: (0, _.Z)(
            "block pointer-events-none",
            o && !r ? "bg-black" : "bg-none",
            t
          ),
          width: C,
          height: L,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s(), {
              id: "10a88a74a9119afd",
              children:
                "video.jsx-10a88a74a9119afd{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-filter:blur(0);filter:blur(0)}",
            }),
            "jpeg" === g
              ? (0, i.jsx)("img", {
                  "data-screen": !0,
                  ref: E,
                  ...z,
                  className:
                    "jsx-10a88a74a9119afd " +
                    ((z && null != z.className && z.className) || ""),
                })
              : (0, i.jsx)("video", {
                  ref: E,
                  "data-screen": !0,
                  autoPlay: !0,
                  poster: o ? void 0 : "/images/empty.png",
                  playsInline: !0,
                  preload: "none",
                  onTimeUpdate: function () {
                    if (M(E.current)) {
                      let e = E.current;
                      if (null == e ? void 0 : e.buffered.length) {
                        let t =
                          e.buffered.end(e.buffered.length - 1) - e.currentTime;
                        t > 1
                          ? I()
                          : t > 0.7
                          ? (e.playbackRate = 5)
                          : t > 0.5
                          ? (e.playbackRate = 3)
                          : t > 0.2
                          ? (e.playbackRate = 2)
                          : (e.playbackRate = 1);
                      }
                    }
                  },
                  disablePictureInPicture: !0,
                  controls: !1,
                  muted: !0,
                  onPause: (e) => {
                    e.preventDefault(), I();
                  },
                  ...z,
                  className:
                    "jsx-10a88a74a9119afd " +
                    ((z && null != z.className && z.className) || ""),
                }),
          ],
        });
      }
      function M(e) {
        return (null == e ? void 0 : e.tagName) === "VIDEO";
      }
      var O = n(50820),
        N = n(38452),
        I = n(20071),
        z = n(86681);
      function V(e) {
        let { children: t } = e,
          {
            config: { noVideo: n },
            isStreaming: o,
            disabled: r,
          } = (0, u.F)(),
          a = {
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            textAlign: "center",
            fontSize: 20,
            color: "white",
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            r &&
              !!r.isDisabled &&
              !!r.message &&
              (0, i.jsx)(z.Z, {
                children: (0, i.jsx)(g.a, {
                  screen: !0,
                  className: "z-[100] pointer-events-auto cursor-default",
                  children: (0, i.jsxs)("div", {
                    style: { ...a },
                    "data-testid": "screen-disabled-overlay",
                    children: [
                      r.message,
                      (0, i.jsx)("div", {
                        className: "absolute left-0 bottom-4 right-0 z-[100]",
                        children: (0, i.jsx)(C, {}),
                      }),
                    ],
                  }),
                }),
              }),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(g.a, {
                  screen: !0,
                  children: (0, i.jsx)(q, {
                    children: n
                      ? (0, i.jsx)(i.Fragment, {
                          children:
                            o &&
                            (0, i.jsxs)("div", {
                              style: a,
                              children: [
                                (0, i.jsx)("p", {
                                  children: "App launch command sent.",
                                }),
                                (0, i.jsx)("p", { children: "noVideo=true" }),
                                (0, i.jsx)("br", {}),
                                (0, i.jsx)("br", {}),
                                (0, i.jsx)("p", {
                                  children:
                                    "Mouse, touch and keyboard events are still active when this canvas is focused.",
                                }),
                              ],
                            }),
                        })
                      : (0, i.jsx)(L, {}),
                  }),
                }),
                (0, i.jsxs)(g.a, {
                  screen: !0,
                  children: [
                    (0, i.jsx)(F, {}),
                    (0, i.jsx)(K, {}),
                    (0, i.jsx)(Z, {}),
                    t,
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function q(e) {
        let { children: t } = e,
          n = (0, c.useRef)(null),
          {
            app: o,
            pasteText: r,
            sockets: a,
            userInteraction: s,
            config: l,
            spec: d,
            inactivity: h,
            toggleSoftKeyboard: p,
          } = (0, u.F)(),
          f = a.appetizer,
          v = (0, c.useRef)(!1),
          m = (0, c.useRef)(!1),
          b = (0, c.useRef)(null),
          g = "portrait" === l.orientation ? d.screen.width : d.screen.height,
          y = "portrait" === l.orientation ? d.screen.height : d.screen.width,
          w = (0, c.useCallback)(
            (e, t) => {
              let o = (e, t, n) => Math.min(Math.max(e, t), n);
              if (n.current) {
                let {
                    left: r,
                    right: i,
                    top: a,
                    bottom: s,
                  } = n.current.getBoundingClientRect(),
                  c = o(((e - r) / (i - r)) * g - 1, 0, g - 1),
                  l = o(((t - a) / (s - a)) * y - 1, 0, y - 1);
                return { x: c, y: l };
              }
              return { x: 0, y: 0 };
            },
            [y, g]
          ),
          k = (0, O.R)((e) => {
            let { x: t, y: n } = w(e.x, e.y);
            f && s({ type: e.type, xPos: t, yPos: n });
          }),
          x = (0, O.R)((e) => {
            h || (v.current = !0),
              (m.current = !1),
              (b.current = { x: e.clientX, y: e.clientY }),
              k({ type: "mousedown", x: e.clientX, y: e.clientY });
          }),
          E = (0, O.R)((e) => {
            v.current &&
              ((v.current = !1),
              (m.current = !1),
              (b.current = null),
              _(),
              k({ type: "mouseup", x: e.clientX, y: e.clientY }));
          }),
          [T, _] = (0, I.f)(
            (e) => {
              if (!v.current) return;
              let t = l.scale,
                n = 4 / (t / 100),
                o = e.clientX,
                r = e.clientY;
              (!m.current &&
                b.current &&
                Math.abs(b.current.x - o) < n &&
                Math.abs(b.current.y - r) < n) ||
                ((b.current = { x: o, y: r }),
                (m.current = !0),
                k({ type: "mousemove", x: o, y: r }));
            },
            10,
            !0
          ),
          R = (0, O.R)((e) => {
            v.current && E(e);
          }),
          S = (0, O.R)((e) => {
            if (f) {
              let t, n;
              let o = e.getModifierState("CapsLock");
              if (!e.metaKey && !e.ctrlKey) {
                switch (e.which) {
                  case 20:
                  case 18:
                  case 12:
                  case 16:
                  case 17:
                  case 33:
                  case 34:
                  case 35:
                  case 36:
                  case 91:
                  case 93:
                  case 27:
                  case 46:
                  case 106:
                  case 107:
                  case 109:
                  case 111:
                  case 112:
                  case 113:
                  case 114:
                  case 115:
                  case 116:
                  case 117:
                  case 118:
                  case 119:
                  case 120:
                  case 121:
                  case 122:
                  case 123:
                  case 124:
                  case 127:
                  case 144:
                    return;
                  case 8:
                  case 9:
                  case 32:
                    (n = !0), (t = String.fromCharCode(e.which));
                    break;
                  case 37:
                    (n = !0), (t = "leftArrow");
                    break;
                  case 38:
                    (n = !0), (t = "upArrow");
                    break;
                  case 39:
                    (n = !0), (t = "rightArrow");
                    break;
                  case 40:
                    (n = !0), (t = "downArrow");
                    break;
                  case 186:
                    t = ";";
                    break;
                  case 187:
                    t = "=";
                    break;
                  case 188:
                    t = ",";
                    break;
                  case 173:
                  case 189:
                    t = "-";
                    break;
                  case 110:
                  case 190:
                    t = ".";
                    break;
                  case 191:
                    t = "/";
                    break;
                  case 192:
                    t = "`";
                    break;
                  case 219:
                    t = "[";
                    break;
                  case 220:
                    t = "\\";
                    break;
                  case 221:
                    t = "]";
                    break;
                  case 222:
                    t = "'";
                    break;
                  case 96:
                  case 97:
                  case 98:
                  case 99:
                  case 100:
                  case 101:
                  case 102:
                  case 103:
                  case 104:
                  case 105:
                    t = String.fromCharCode(e.which - 48);
                    break;
                  default:
                    t = String.fromCharCode(e.which);
                }
                t &&
                  (n && e.preventDefault(),
                  s({
                    type: "keypress",
                    which: e.which,
                    key: t,
                    shiftKey: o && /^[a-zA-Z]$/i.test(t),
                    character: e.key,
                  }));
              }
            }
          });
        return (
          (0, c.useEffect)(() => {
            function e(e) {
              var t;
              let n =
                null === (t = e.clipboardData) || void 0 === t
                  ? void 0
                  : t.getData("text");
              n && r(n);
            }
            return (
              window.addEventListener("paste", e),
              () => {
                window.removeEventListener("paste", e);
              }
            );
          }, [r]),
          (0, j.y1)(
            "ctrl+h, command+h",
            (e) => {
              (null == o ? void 0 : o.disableHome) ||
                (e.preventDefault(), s({ type: "keypress", key: "home" }));
            },
            [s, o]
          ),
          (0, j.y1)(
            "ctrl+k, command+k",
            () => {
              p();
            },
            [p]
          ),
          (0, i.jsx)("div", {
            className:
              "h-full w-full pointer-events-auto touch-none select-none focus:outline-none",
            ref: n,
            tabIndex: 0,
            onPointerDown: x,
            onPointerUp: E,
            onPointerMove: T,
            onPointerLeave: R,
            onKeyDown: S,
            children: t,
          })
        );
      }
      function F() {
        var e, t, n, o, r, a, s, l, d, h, p;
        let f;
        let {
            app: v,
            requiresAuth: m,
            spec: b,
            isPlaying: g,
            isStreaming: y,
            lastFrame: w,
            requestSession: k,
            playButton: x,
            sponsor: j,
          } = (0, u.F)(),
          [E, T] = (0, c.useState)(!1);
        (0, c.useEffect)(() => {
          y && T(!0);
        }, [y]),
          (0, c.useEffect)(() => {
            T(!1);
          }, [b.type, b.osVersion]);
        let _ =
          ((f = {
            text:
              null !== (e = null == x ? void 0 : x.text) && void 0 !== e
                ? e
                : "Tap to Play",
            color:
              null !== (t = null == x ? void 0 : x.color) && void 0 !== t
                ? t
                : "white",
            backgroundColor:
              null !== (n = null == x ? void 0 : x.backgroundColor) &&
              void 0 !== n
                ? n
                : "#009ddc",
            backgroundOpacity: 0.5,
            onClick: (e) => {
              e.stopPropagation(),
                k().catch((e) => {
                  console.error(e);
                });
            },
          }),
          (f = E
            ? {
                ...f,
                text:
                  null !== (o = null == v ? void 0 : v.postSessionButtonText) &&
                  void 0 !== o
                    ? o
                    : f.text,
                backgroundColor:
                  null !==
                    (r =
                      null == v
                        ? void 0
                        : v.postSessionButtonBackgroundColor) && void 0 !== r
                    ? r
                    : f.backgroundColor,
                color:
                  null !==
                    (a = null == v ? void 0 : v.postSessionButtonTextColor) &&
                  void 0 !== a
                    ? a
                    : f.color,
                backgroundOpacity:
                  null !==
                    (s =
                      null == v
                        ? void 0
                        : v.postSessionButtonBackgroundOpacity) && void 0 !== s
                    ? s
                    : f.backgroundOpacity,
              }
            : {
                ...f,
                text:
                  null !== (l = null == v ? void 0 : v.buttonText) &&
                  void 0 !== l
                    ? l
                    : f.text,
                backgroundColor:
                  null !==
                    (d =
                      null == v ? void 0 : v.preLaunchButtonBackgroundColor) &&
                  void 0 !== d
                    ? d
                    : f.backgroundColor,
                color:
                  null !==
                    (h = null == v ? void 0 : v.preLaunchButtonTextColor) &&
                  void 0 !== h
                    ? h
                    : f.color,
                backgroundOpacity:
                  null !==
                    (p =
                      null == v
                        ? void 0
                        : v.preLaunchButtonBackgroundOpacity) && void 0 !== p
                    ? p
                    : f.backgroundOpacity,
              }));
        if (g) return null;
        let R = !m && !!_.text.trim();
        return (0, i.jsxs)("div", {
          className: "relative flex justify-center items-start h-full w-full",
          style: { pointerEvents: "all" },
          onClick: () =>
            k().catch((e) => {
              console.error(e);
            }),
          children: [
            (0, i.jsx)("div", {
              className: "absolute inset-0 bg-cover bg-no-repeat",
              style: {
                backgroundPosition: "50%",
                backgroundImage: 'url("'.concat(
                  (function () {
                    var e, t, n, o;
                    let r = "/images/galaxy.jpg",
                      i =
                        (null == v ? void 0 : v.useLastFrame) && w.current
                          ? w.current
                          : null !==
                              (n =
                                null == v
                                  ? void 0
                                  : null === (e = v.postSessionGraphic) ||
                                    void 0 === e
                                  ? void 0
                                  : e[b.type]) && void 0 !== n
                          ? n
                          : r,
                      a =
                        null !==
                          (o =
                            null == v
                              ? void 0
                              : null === (t = v.preLaunchGraphic) ||
                                void 0 === t
                              ? void 0
                              : t[b.type]) && void 0 !== o
                          ? o
                          : r;
                    return E ? i : a;
                  })(),
                  '")'
                ),
              },
              children:
                (null == v ? void 0 : v.useLastFrame) &&
                w.current &&
                (0, i.jsx)("div", {
                  className: "absolute bg-black opacity-50 inset-0",
                }),
            }),
            R && (0, i.jsx)(B, { ..._ }),
            m && (0, i.jsx)(B, { ..._, text: "Tap to Login" }),
            (null == j ? void 0 : j.prelaunch) &&
              (0, i.jsx)("div", {
                className:
                  "absolute inline-flex justify-center items-center left-0 right-0 bottom-4",
                children: (0, i.jsx)(C, { white: !0 }),
              }),
          ],
        });
      }
      function B(e) {
        let {
            color: t,
            backgroundColor: n,
            backgroundOpacity: o,
            text: r,
            onClick: a,
          } = e,
          { spec: s } = (0, u.F)();
        return (0, i.jsxs)("button", {
          className:
            "relative inline-flex justify-center items-center rounded-full overflow-hidden",
          style: {
            height: s.isTablet ? "100px" : "75px",
            padding: "0 ".concat(s.isTablet ? "70px" : "40px"),
            marginTop: "".concat(s.isTablet ? "220px" : "120px"),
            maxWidth: "".concat(s.isTablet ? "700px" : "310px"),
          },
          onClick: a,
          children: [
            (0, i.jsx)("div", {
              className: "absolute inset-0",
              style: { background: n, opacity: o },
            }),
            (0, i.jsx)("span", {
              className: "font-thin relative text-center",
              style: {
                zIndex: 1,
                color: t,
                fontSize: s.isTablet ? "28pt" : "22pt",
              },
              children: r,
            }),
          ],
        });
      }
      function Z() {
        let { timeLimit: e } = (0, u.F)(),
          [t, n] = (0, c.useState)(0);
        return ((0, c.useEffect)(() => {
          if (e) {
            n(e);
            let t = setInterval(() => n((e) => (e > 0 ? e - 1 : 0)), 1e3);
            return () => {
              clearInterval(t);
            };
          }
        }, [e]),
        t && e)
          ? (0, i.jsx)("div", {
              className: "absolute bottom-0 left-0 right-0",
              children: (0, i.jsx)(T.Z, { value: t / e, duration: 1 }),
            })
          : null;
      }
      function K() {
        var e;
        let {
            isPlaying: t,
            isStreaming: n,
            isRotating: o,
            inactivity: r,
            launchStatus: a,
            queue: s,
            concurrentQueue: l,
            app: d,
            sponsor: h,
            spec: f,
          } = (0, u.F)(),
          v = (0, c.useRef)(null),
          m = (null == d ? void 0 : d.iFrameLoading) && t && !n,
          b = t && !n,
          g = l && l.name ? l.name : "Place in Queue",
          y = l ? l.position : s,
          w = void 0 !== y && y > 0,
          k = (null == h ? void 0 : h.loading) && (b || w),
          x = (0, c.useMemo)(() => {
            if (o) return { content: "Rotating...", spinner: !0, opacity: 0.8 };
            if (b) {
              if (w)
                return {
                  content: (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("span", { children: g }),
                      (0, i.jsx)("div", {
                        className: "text-[4rem]",
                        children: y,
                      }),
                    ],
                  }),
                };
              if (a) {
                let e;
                switch (a) {
                  case "switchingDevice":
                    e = "Switching device...";
                    break;
                  case "downloadingApp":
                    e = "Downloading app...";
                    break;
                  case "installingApp":
                    e = "Installing app...";
                    break;
                  case "launchingApp":
                    e = "Launching app...";
                    break;
                  default:
                    e = "Loading...";
                }
                return { content: e, spinner: !0 };
              }
              return { content: "Loading...", spinner: !0 };
            }
            if (r)
              return {
                content: r.countdown
                  ? (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("span", { children: "Inactivity Timeout" }),
                        (0, i.jsx)("div", {
                          className: "text-[4rem]",
                          children: r.countdown,
                        }),
                      ],
                    })
                  : null,
                opacity: r.countdown ? 0.8 : 0.5,
              };
          }, [r, g, y, w, b, o, a]),
          [j, T] = (0, c.useState)(),
          _ = f.isTablet ? 80 : 56;
        return (
          (0, p.W)(() => {
            if (x && m) {
              var e, t;
              T(
                null !==
                  (t =
                    null === (e = v.current) || void 0 === e
                      ? void 0
                      : e.querySelector(".iframe-container")) && void 0 !== t
                  ? t
                  : document.body
              );
            } else T(document.body);
          }, [x, m]),
          (0, i.jsxs)("div", {
            className: "w-full h-full text-center text-white z-10",
            ref: v,
            children: [
              x &&
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("div", {
                      className: "absolute inset-0 bg-black",
                      style: {
                        opacity:
                          null !== (e = x.opacity) && void 0 !== e ? e : 1,
                      },
                    }),
                    (0, i.jsxs)("div", {
                      className: "absolute inset-0 iframe-container",
                      style: { padding: f.isTablet ? 0 : 20 },
                      children: [
                        !m &&
                          (0, i.jsx)("div", {
                            className: "py-[30px] font-thin",
                            style: { fontSize: f.isTablet ? 48 : 32 },
                            children: x.content,
                          }),
                        !m &&
                          x.spinner &&
                          (0, i.jsx)(N.Z, {
                            className:
                              "animate-spin mt-0 mb-0 ml-auto mr-auto text-white",
                            style: { width: _, height: _ },
                          }),
                        k &&
                          (0, i.jsx)("div", {
                            className:
                              "absolute left-0 bottom-4 right-0 z-[100]",
                            children: (0, i.jsx)(C, {}),
                          }),
                      ],
                    }),
                  ],
                }),
              (null == d ? void 0 : d.iFrameLoading) &&
                (0, i.jsx)(z.Z, {
                  children: (0, i.jsx)(E.Z, {
                    node: j,
                    children: (0, i.jsx)("iframe", {
                      src: d.iFrameLoading,
                      className: m
                        ? "absolute inset-0 w-full h-full"
                        : "hidden",
                      hidden: !m,
                      frameBorder: "0",
                      scrolling: "no",
                    }),
                  }),
                }),
            ],
          })
        );
      }
      var U = n(85073),
        W = function (e) {
          let { className: t, children: n, center: o } = e,
            {
              config: {
                audio: r,
                screenOnly: a,
                showRotateButtons: d,
                orientation: h,
                scale: f,
              },
              setConfig: v,
              spec: b,
              autoScale: g,
              isPlaying: y,
            } = (0, u.F)(),
            w = (0, c.useRef)(null),
            [j, E] = (0, c.useState)(!!g),
            T = a ? b.screen : b,
            R = "portrait" === h ? T.width : T.height,
            S = "portrait" === h ? T.height : T.width,
            C = (0, c.useCallback)(() => {
              if (g && w.current) {
                let e = w.current.getBoundingClientRect(),
                  t = Math.min((e.width / R) * 100, (e.height / S) * 100);
                U.k.debug("autoScale", t), v({ scale: t }), E(!1);
              }
            }, [g, S, R, v]);
          return (
            (0, p.W)(() => {
              if (g) {
                let e = new l.Z(() => {
                  requestAnimationFrame(() => {
                    C();
                  });
                });
                return (
                  C(),
                  e.observe(w.current),
                  () => {
                    e.disconnect();
                  }
                );
              }
            }, [g, C]),
            (0, i.jsxs)("div", {
              ref: w,
              "data-scale": f,
              className:
                s().dynamic([
                  ["2426dd4d2cd307be", [f / 100, R, S, S, f / 100, R, f / 100]],
                ]) +
                " " +
                ((0, _.Z)(
                  "w-full h-full flex",
                  "horizontal" === o && "justify-center",
                  "vertical" === o && "items-center",
                  !0 === o && "justify-center items-center",
                  j && "invisible"
                ) || ""),
              children: [
                (0, i.jsx)(s(), {
                  id: "2426dd4d2cd307be",
                  dynamic: [f / 100, R, S, S, f / 100, R, f / 100],
                  children:
                    ".device.__jsx-style-dynamic-selector{position:relative;font-family:proxima-nova,sans-serif;-webkit-transform:scale("
                      .concat(f / 100, ")translatez(0);-moz-transform:scale(")
                      .concat(f / 100, ")translatez(0);transform:scale(")
                      .concat(f / 100, ")translatez(0);width:")
                      .concat(R, "px;height:")
                      .concat(
                        S,
                        "px;margin:-webkit-calc(\n                            (-"
                      )
                      .concat(S, "px) * (1 - ")
                      .concat(
                        f / 100,
                        ") / 2\n                        )-webkit-calc((-"
                      )
                      .concat(R, "px) * (1 - ")
                      .concat(
                        f / 100,
                        ") / 2);margin:-moz-calc(\n                            (-"
                      )
                      .concat(S, "px) * (1 - ")
                      .concat(
                        f / 100,
                        ") / 2\n                        )-moz-calc((-"
                      )
                      .concat(R, "px) * (1 - ")
                      .concat(
                        f / 100,
                        ") / 2);margin:calc(\n                            (-"
                      )
                      .concat(S, "px) * (1 - ")
                      .concat(
                        f / 100,
                        ") / 2\n                        )calc((-"
                      )
                      .concat(R, "px) * (1 - ")
                      .concat(f / 100, ") / 2)}"),
                }),
                (0, i.jsxs)("div", {
                  className: s().dynamic([
                    [
                      "2426dd4d2cd307be",
                      [f / 100, R, S, S, f / 100, R, f / 100],
                    ],
                  ]),
                  children: [
                    r && y && (0, i.jsx)(m, {}),
                    (0, i.jsxs)("div", {
                      className:
                        s().dynamic([
                          [
                            "2426dd4d2cd307be",
                            [f / 100, R, S, S, f / 100, R, f / 100],
                          ],
                        ]) +
                        " " +
                        ((0, _.Z)(
                          "device",
                          b.isGeneric && "generic",
                          b.isGeneric && !a && "top-[5px]",
                          t
                        ) || ""),
                      children: [
                        !a && (0, i.jsx)(k, {}),
                        (0, i.jsx)(V, {}),
                        n,
                        !g && d && (0, i.jsx)(x, {}),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    86681: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(24246),
        r = n(27378);
      function i(e) {
        let { children: t } = e,
          [n, i] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
          i(!0);
        }, []),
        n)
          ? (0, o.jsx)(o.Fragment, { children: t })
          : null;
      }
    },
    42351: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var o = n(24246),
        r = n(78164),
        i = n.n(r),
        a = n(38944);
      function s(e) {
        let {
          value: t,
          color: n = "#355067",
          backgroundColor: r = "#c2c7cc",
          height: s = "4px",
          duration: c = 0.3,
          ...l
        } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i(), {
              id: "777c503210e3bd9a",
              dynamic: [s, r, 100 * t, n, c],
              children:
                ".root.__jsx-style-dynamic-selector{position:relative;width:100%}.bar.__jsx-style-dynamic-selector{overflow:hidden;height:"
                  .concat(s, ";background-color:")
                  .concat(
                    r,
                    "}.progress.__jsx-style-dynamic-selector{height:100%;width:"
                  )
                  .concat(100 * t, "%;background-color:")
                  .concat(n, ";-webkit-transition:width ")
                  .concat(c, "s linear;-moz-transition:width ")
                  .concat(c, "s linear;-o-transition:width ")
                  .concat(c, "s linear;transition:width ")
                  .concat(c, "s linear}"),
            }),
            (0, o.jsx)("div", {
              ...l,
              className:
                i().dynamic([["777c503210e3bd9a", [s, r, 100 * t, n, c]]]) +
                " " +
                ((0, a.Z)("root", l.className) || ""),
              children: (0, o.jsx)("div", {
                className:
                  i().dynamic([["777c503210e3bd9a", [s, r, 100 * t, n, c]]]) +
                  " bar",
                children: (0, o.jsx)("div", {
                  className:
                    i().dynamic([["777c503210e3bd9a", [s, r, 100 * t, n, c]]]) +
                    " progress",
                }),
              }),
            }),
          ],
        });
      }
    },
    75861: function (e, t, n) {
      n.d(t, {
        e: function () {
          return r;
        },
      });
      var o = n(27378);
      function r(e) {
        let t = (0, o.useRef)(e);
        return (
          (0, o.useEffect)(() => {
            t.current = e;
          }),
          t
        );
      }
    },
    84384: function (e, t, n) {
      n.d(t, {
        C: function () {
          return r;
        },
      });
      var o = n(27378);
      function r(e) {
        let t = (0, o.useRef)([]),
          n = (0, o.useMemo)(() => ("function" == typeof e ? e() : e), []),
          [r, a] = (0, o.useReducer)(i, n),
          s = (0, o.useCallback)((e, n) => {
            n && t.current.push(n), a(e);
          }, []);
        return (
          (0, o.useEffect)(() => {
            t.current.forEach((e) => e(r)), (t.current = []);
          }, [r]),
          [(0, o.useMemo)(() => r, [r]), s]
        );
      }
      function i(e, t) {
        return { ...e, ...("function" == typeof t ? t(e) : t) };
      }
    },
    20071: function (e, t, n) {
      n.d(t, {
        f: function () {
          return i;
        },
      });
      var o = n(27378),
        r = n(50820);
      function i(e, t, n) {
        let i = (0, o.useRef)(Date.now()),
          a = (0, o.useRef)(void 0),
          s = (0, r.R)(function () {
            for (var o = arguments.length, r = Array(o), s = 0; s < o; s++)
              r[s] = arguments[s];
            let c = i.current + t - Date.now() >= 0;
            clearTimeout(a.current),
              c
                ? n &&
                  (a.current = window.setTimeout(() => {
                    e.call(this, ...r);
                  }, t))
                : (e.call(this, ...r), (i.current = Date.now()));
          }),
          c = (0, o.useCallback)(() => {
            clearTimeout(a.current);
          }, []);
        return [s, c];
      }
    },
    8183: function (e, t, n) {
      n.d(t, {
        C: function () {
          return a;
        },
        _: function () {
          return i;
        },
      });
      var o = n(80673),
        r = n(62584);
      async function i(e, t, n) {
        let { demoApps: o } = (0, r.ZD)();
        if ("demo-android" === t) {
          let e = null == o ? void 0 : o.android;
          return (
            e ||
            (console.warn("No demo app found for Android, using standalone"),
            { publicKey: "standalone" })
          );
        }
        if ("demo-ios" === t) {
          let e = null == o ? void 0 : o.ios;
          return (
            e ||
            (console.warn("No demo app found for iOS, using standalone"),
            { publicKey: "standalone" })
          );
        }
        if ("standalone" === t) return { publicKey: "standalone" };
        if ("<PUBLIC KEY>" === t || t.indexOf("<") > -1 || t.indexOf(">") > -1)
          throw Error(
            "Please replace <PUBLIC KEY> with your app's publicKey, also excluding the < and >"
          );
        return e("/api/app/".concat(t, "?pc=").concat(null != n ? n : ""));
      }
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "ios",
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = (0, r.ZD)().demoApps;
        if ("ios" === e && t && (0, o.iE)(t).major <= 12) {
          var i;
          return null !== (i = null == n ? void 0 : n.ios12) && void 0 !== i
            ? i
            : null == n
            ? void 0
            : n.ios;
        }
        return null == n ? void 0 : n[e];
      }
    },
    42121: function (e, t, n) {
      function o(e) {
        let t = e.length,
          n = "";
        for (let o = 0; o < t; o += 65535) {
          let r = 65535;
          o + 65535 > t && (r = t - o),
            (n += String.fromCharCode.apply(null, e.subarray(o, o + r)));
        }
        return n;
      }
      function r(e, t) {
        let n = o(e),
          r = btoa(n);
        return "data:".concat(t, ";base64,") + r;
      }
      function i(e) {
        let t = window.atob(e),
          n = t.length,
          o = new Uint8Array(n);
        for (let e = 0; e < n; e++) o[e] = t.charCodeAt(e);
        return o.buffer;
      }
      n.d(t, {
        DA: function () {
          return o;
        },
        Sg: function () {
          return r;
        },
        eh: function () {
          return i;
        },
      });
    },
    80673: function (e, t, n) {
      n.d(t, {
        $Z: function () {
          return l;
        },
        Em: function () {
          return c;
        },
        SX: function () {
          return d;
        },
        Xf: function () {
          return i;
        },
        iE: function () {
          return u;
        },
        tn: function () {
          return s;
        },
        u2: function () {
          return h;
        },
        vQ: function () {
          return a;
        },
      });
      var o = n(3793),
        r = n(62584);
      function i(e) {
        let { devices: t } = (0, r.ZD)();
        return Object.keys(t.compatibleDevices.android).includes(e)
          ? "android"
          : "ios";
      }
      function a(e, t) {
        var n;
        let { devices: o } = (0, r.ZD)(),
          a = i(e),
          s = null !== (n = o.compatibleDevices[a][e]) && void 0 !== n ? n : [];
        if (s.includes(t)) return t;
        let c = !!t && s.find((e) => u(e).major === u(t).major);
        return c || null;
      }
      function s(e, t) {
        var n, o, r;
        let a = i(t),
          s = (e) => e.match(/\./);
        return null !==
          (r =
            null !== (o = e.availableDevices[a][t]) && void 0 !== o
              ? o
              : null === (n = e.compatibleDevices[a][t]) || void 0 === n
              ? void 0
              : n.filter(s)) && void 0 !== r
          ? r
          : [];
      }
      function c(e) {
        var t;
        return null === (t = o.Z.devices[e]) || void 0 === t
          ? void 0
          : t.isTablet;
      }
      function l(e) {
        return c(e) ? 50 : 75;
      }
      function u(e) {
        let [t, n, o] = e.split(".");
        return {
          major: t ? parseInt(t) : 0,
          minor: n ? parseInt(n) : 0,
          patch: o ? parseInt(o) : 0,
        };
      }
      function d(e) {
        if (!e || !e.forwards[0]) return;
        let t =
          "ssh -fN -o StrictHostKeyChecking=no -oHostKeyAlgorithms=+ssh-rsa -p SERVER_PORT USERNAME@HOSTNAME -L6000:FORWARD_DESTINATION:FORWARD_PORT && adb connect localhost:6000";
        return (t = (t = (t = (t = t.replace(
          /SERVER_PORT/,
          e.port.toString()
        )).replace(/USERNAME/, e.user)).replace(
          /HOSTNAME/,
          e.hostname
        )).replace(/FORWARD_DESTINATION/, e.forwards[0].destination)).replace(
          /FORWARD_PORT/,
          e.forwards[0].port.toString()
        );
      }
      let h = (e, t) => {
        let { devices: n } = (0, r.ZD)();
        if (e && t && n.compatibleDevices[e][t]) return t;
        if (t) {
          if (!e || "ios" === e)
            switch (!0) {
              case "iphone" === t:
              case t.startsWith("ipod"):
              case t.startsWith("iphone4"):
              case t.startsWith("iphone5"):
              case t.startsWith("iphone6"):
              case t.startsWith("iphone7"):
              case t.startsWith("iphone8"):
                return "iphone8";
              case null == t ? void 0 : t.startsWith("iphonex"):
              case t.startsWith("iphone11"):
                return "iphone11pro";
              case t.startsWith("iphone13"):
                return "iphone13pro";
              case t.startsWith("iphone14"):
                return "iphone14pro";
              case t.startsWith("ipad"):
                return "ipadair4thgeneration";
            }
          if (!e || "android" === e)
            switch (!0) {
              case t.startsWith("nexus7"):
              case t.startsWith("nexus9"):
              case t.startsWith("galaxy"):
                return "galaxytabs7";
              case t.startsWith("pixel"):
                return "pixel4";
              case t.startsWith("nexus"):
                return "nexus5";
            }
        }
        return "android" === e
          ? n.androidDefault
          : "ios" === e
          ? n.iosDefault
          : n.systemDefault;
      };
    },
    27617: function (e, t, n) {
      var o,
        r,
        i = n(50343),
        a = n(37131),
        s = n(71323);
      function c(e, t) {
        if (
          ((t = t || {}),
          (this.isAlive = !0),
          (this._pingInterval = 5e3),
          (this._handshakeTime = 5e3),
          (this._initialConnectTime = 6e4),
          e && "function" == typeof e.close)
        ) {
          if (((this.isClient = !1), (this._ws = e), !t.id))
            throw Error("Server appsocket missing opts.id");
          "number" == typeof t.pingInterval &&
            (this._pingInterval = t.pingInterval),
            "number" == typeof t.handshakeTime &&
              (this._handshakeTime = t.handshakeTime),
            "number" == typeof t.initialConnectTime &&
              (this._initialConnectTime = t.initialConnectTime),
            this._setId(t.id),
            this._attach(),
            (this._state = 2),
            this._startHearbeat();
        } else {
          var n, o;
          (this.isClient = !0),
            (this.url =
              ((n = e),
              window.location &&
                window.location.href &&
                (n = a.resolve(window.location.href || "", n)),
              "http:" === (o = a.parse(n)).protocol && (o.protocol = "ws:"),
              "https:" === o.protocol && (o.protocol = "wss:"),
              a.format(o))),
            (this.opts = t),
            "number" == typeof t.pingInterval &&
              (this._pingInterval = t.pingInterval),
            "number" == typeof t.handshakeTime &&
              (this._handshakeTime = t.handshakeTime),
            (this.reconnection =
              "boolean" != typeof this.opts.reconnection ||
              this.opts.reconnection),
            (this.reconnectionAttempts =
              "number" == typeof this.opts.reconnectionAttempts
                ? this.opts.reconnectionAttempts
                : 1 / 0),
            (this.reconnectionDelay =
              "number" == typeof this.opts.reconnectionDelay
                ? this.opts.reconnectionDelay
                : 1e4),
            (this.reconnectionDelayMax =
              "number" == typeof this.opts.reconnectionDelayMax
                ? this.opts.reconnectionDelayMax
                : 2e4),
            (this.reconnectionDelayMin =
              "number" == typeof this.opts.reconnectionDelayMin
                ? this.opts.reconnectionDelayMin
                : 3e3),
            (this.randomizationFactor =
              "number" == typeof this.opts.randomizationFactor
                ? this.opts.randomizationFactor
                : 0.5),
            (this._state = 3),
            (this._attempt = 0),
            this.connect(),
            "function" == typeof window.addEventListener &&
              window.addEventListener("unload", this.close.bind(this));
        }
        this.on("error", () => {}),
          this._sendHandshake(),
          c.prototype.hasOwnProperty("volatile") ||
            Object.defineProperty(c.prototype, "volatile", {
              get: function () {
                return (this._nextVolatile = !0), this;
              },
            }),
          c.prototype.hasOwnProperty("connected") ||
            Object.defineProperty(c.prototype, "connected", {
              get: function () {
                return 2 === this._state;
              },
            });
        var r = this;
        r.on("ping", function () {
          r.emit("pong");
        }),
          r.on("pong", function () {
            r.isAlive = !0;
          });
      }
      (o = window.CBOR),
        (r = window.WebSocket),
        s.inherits(c, i),
        (e.exports = c),
        (e.exports.events = [
          "close",
          "error",
          "connect",
          "disconnect",
          "reconnect",
        ]),
        (c.prototype.connect = function () {
          if (
            ((this._noReconnect = !1),
            this.isClient && 3 === this._state && !this._ws)
          ) {
            (this._state = 0),
              "function" == typeof r.Server
                ? (this._ws = new r(this.url, this.opts))
                : ((this._ws = new r(this.url)),
                  (this._ws.binaryType = "arraybuffer"));
            var e = this;
            (this._connectTimeout = setTimeout(function () {
              e.forceClose(),
                e._detach(),
                (e.state = 3),
                e._queueReconnection();
            }, this._initialConnectTime)),
              this._attempt++,
              this._setId(null),
              (this.isAlive = !0),
              this._attach();
          }
        }),
        (c.prototype.disconnect = function () {
          (this._noReconnect = !0), this.forceClose();
        }),
        (c.prototype.close = c.prototype.disconnect),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype._setId = function (e) {
          (this.id = e), (this.io = { engine: { id: e } });
        }),
        (c.prototype._attach = function () {
          var e = this;
          "function" == typeof e._ws.on
            ? (e._ws.on("open", function () {
                e._connected();
              }),
              e._ws.on("close", function (t) {
                e.emit("close", t), e._disconnected();
              }),
              e._ws.on("message", function (t) {
                e._message(t);
              }),
              e._ws.on("error", function (t) {
                e.emit("error", t), e._handleError(t);
              }))
            : "function" == typeof e._ws.addEventListener &&
              (e._ws.addEventListener("open", function () {
                e._connected();
              }),
              e._ws.addEventListener("close", function (t) {
                e.emit("close", t), e._disconnected();
              }),
              e._ws.addEventListener("message", function (t) {
                e._message(t);
              }),
              e._ws.addEventListener("error", function (t) {
                e.emit("error", t), e._handleError(t);
              }));
        }),
        (c.prototype._detach = function () {
          this._ws &&
            ("function" == typeof this._ws.removeAllListeners &&
              this._ws.removeAllListeners(),
            (this._ws = null)),
            clearInterval(this._heartbeatInterval),
            (this._heartbeatInterval = null),
            this._handshakeTimeout &&
              (clearTimeout(this._handshakeTimeout),
              (this._handshakeTimeout = null)),
            this._connectTimeout &&
              (clearTimeout(this._connectTimeout),
              (this._connectTimeout = null));
        }),
        (c.prototype._sendHandshake = function () {
          this.isClient ||
            1 !== this._ws.readyState ||
            this._ws.send(o.encode({ t: "handshake", id: this.id }));
        }),
        (c.prototype._connected = function () {
          if (
            (this._connectTimeout &&
              (clearTimeout(this._connectTimeout),
              (this._connectTimeout = null)),
            0 === this._state)
          ) {
            this._state = 1;
            var e = this;
            (this._handshakeTimeout = setTimeout(function () {
              e._ws && e.forceClose(),
                e._detach(),
                (e._state = 3),
                e._queueReconnection();
            }, this._handshakeTime)),
              this._startHearbeat();
          }
        }),
        (c.prototype._startHearbeat = function () {
          var e = this;
          e._heartbeatInterval = setInterval(function () {
            if (!e.isAlive) return e.forceClose(), e._disconnected();
            (e.isAlive = !1), 1 === e._ws.readyState && e.emit("ping");
          }, e._pingInterval);
        }),
        (c.prototype._disconnected = function () {
          (1 === this._state || 2 === this._state) &&
            ((this._state = 3),
            this._detach(),
            this.emit("disconnect"),
            this.reconnection &&
              !this._noReconnect &&
              this._queueReconnection());
        }),
        (c.prototype._handleError = function (e) {
          this.forceClose(),
            this._detach(),
            (0 === this._state || this.reconnection) &&
              this._queueReconnection(),
            (this._state = 3);
        }),
        (c.prototype.forceClose = function () {
          if (this._ws)
            try {
              this._ws.close(), this._ws.terminate();
            } catch (e) {}
        }),
        (c.prototype._queueReconnection = function () {
          if (!(this._attempt >= this.reconnectionAttempts)) {
            var e =
              this.reconnectionDelay *
              (1 + (Math.random() - 0.5) * 2 * this.randomizationFactor);
            e > this.reconnectionDelayMax && (e = this.reconnectionDelayMax),
              e < this.reconnectionDelayMax && (e = this.reconnectionDelayMin);
            var t = this;
            setTimeout(function () {
              t._noReconnect ||
                (t.emit("reconnect", { attempt: t._attempt }), t.connect());
            }, e);
          }
        }),
        (c.prototype._message = function (t) {
          try {
            var n;
            if (!(n = t.data ? o.decode(t.data) : o.decode(t))) return;
            if (this.isClient && "handshake" === n.t) {
              if (1 !== this._state) return;
              this._handshakeTimeout &&
                (clearTimeout(this._handshakeTimeout),
                (this._handshakeTimeout = null)),
                (this._attempt = 0),
                (this._state = 2),
                this._setId(n.id),
                this.emit("connect");
              return;
            }
            if (2 !== this._state) return;
            if (
              ((this.isAlive = !0),
              n.name && -1 === e.exports.events.indexOf(n.name))
            )
              try {
                i.prototype.emit.call(this, n.name, n.payload),
                  i.prototype.emit.call(this, "*", {
                    type: n.name,
                    value: n.payload,
                  });
              } catch (e) {
                console.error(e);
              }
          } catch (e) {}
        }),
        (c.prototype.emit = function (t, n) {
          if (-1 !== e.exports.events.indexOf(t)) {
            i.prototype.emit.apply(this, arguments),
              i.prototype.emit.apply(this, ["*", { type: t, value: n }]);
            return;
          }
          this._send(t, n);
        }),
        (c.prototype._send = function (e, t) {
          var n;
          if (this._ws && 1 === this._ws.readyState) {
            if (
              this._nextVolatile &&
              ((this._nextVolatile = !1), this._ws.bufferedAmount > 100)
            )
              return;
            (n = t ? o.encode({ name: e, payload: t }) : o.encode({ name: e })),
              this._ws.send(n);
          }
        }),
        Object.defineProperty(c.prototype, "bufferedAmount", {
          get: function () {
            return this._ws ? this._ws.bufferedAmount : 0;
          },
        });
    },
    22895: function (e, t, n) {
      let {
        isArray: o,
        isBoolean: r,
        isNumber: i,
        isObject: a,
        isString: s,
      } = n(24912);
      function c(e, t) {
        let n = (t) =>
            'Invalid value for "'.concat(e, '". Expected ').concat(t),
          c = (t) => 'Invalid value for "'.concat(e, '". ').concat(t);
        if (void 0 === t) return { value: t };
        try {
          switch (e) {
            case "codec":
              if ("h264" !== t && "jpeg" !== t)
                return { invalid: n('"h264" | "jpeg"') };
              break;
            case "color":
              if ("black" !== t && "white" !== t)
                return { invalid: n('"black" | "white"') };
              break;
            case "orientation":
              if ("landscape" !== t && "portrait" !== t)
                return { invalid: n('"landscape" | "portrait"') };
              break;
            case "location":
              if (s(t)) {
                let e = t.split(",");
                if ((null == e ? void 0 : e.length) === 2)
                  return { value: e.map((e) => parseFloat(e)) };
                return {
                  invalid: c(
                    "Please provide 2 numbers separated by a comma. ex: 10.123,42.12"
                  ),
                };
              }
              if (!o(t)) return { invalid: n("[number, number]") };
              if (2 === t.length)
                return { value: t.slice(0, 2).map((e) => parseFloat(e)) };
              return {
                invalid: c("Please provide 2 numbers. ex: [10.123,42.12]"),
              };
            case "proxy":
              if (!s(t)) return { invalid: n("string") };
              if ("false" === t) return { value: void 0 };
              if ("intercept" === t) break;
              try {
                let e = new URL(t);
                if ("http:" !== e.protocol)
                  return { invalid: c("Must be http: protocol") };
                if (!e.hostname) return { invalid: c("URL requires hostname") };
                if (e.port) {
                  let t = parseInt(e.port);
                  if (isNaN(t) || t <= 0 || t > 65535)
                    return { invalid: c("Port must be between 0 and 65535") };
                }
              } catch (e) {
                return { invalid: c("Must be a valid URL") };
              }
              break;
            case "params":
            case "plistEdit": {
              let e = t;
              if (s(t))
                try {
                  e = JSON.parse(t);
                } catch (e) {
                  return { invalid: c(e.message) };
                }
              let r = (a(e) && !o(e)) || null === e;
              if (r) return { value: e };
              return { invalid: n("object or JSON encoded string") };
            }
            case "launchArgs": {
              let e = t;
              if (s(t))
                try {
                  e = JSON.parse(t);
                } catch (e) {
                  return { invalid: c(e.message) };
                }
              if (o(e)) return { value: e };
              return { invalid: n("array or JSON encoded string") };
            }
            case "volume":
              if (i(t)) break;
              if (s(t)) return { value: parseFloat(t) };
              return { invalid: n("number") };
            case "rotation":
            case "scale":
              if (i(t) || "auto" === t) break;
              if (s(t)) return { value: parseInt(t) };
              return { invalid: n("number") };
            case "accessibility":
            case "autoplay":
            case "androidPackageManager":
            case "audio":
            case "debug":
            case "disableSessionStart":
            case "disableVirtualKeyboard":
            case "embedLogs":
            case "enableAdb":
            case "grantPermissions":
            case "hidePasswords":
            case "loopback":
            case "noVideo":
            case "record":
            case "screenOnly":
            case "screenRecording":
            case "showRotateButtons":
            case "iosAutocorrect":
            case "xdocMsg":
            case "userInteractionDisabled":
            case "debugSession":
              if (s(t)) {
                if ("true" === t) return { value: !0 };
                if ("false" === t || "" === t) return { value: !1 };
                return { invalid: n("boolean") };
              }
              if (!r(t)) return { invalid: n("boolean") };
              break;
            case "sdkVersion":
            case "osVersion":
            case "deviceType":
            case "platform":
            case "adbShellCommand":
            case "appearance":
            case "deviceColor":
            case "iosKeyboard":
            case "language":
            case "launchUrl":
            case "locale":
            case "payerCode":
            case "region":
            case "timezone":
            case "endSessionRedirectUrl":
              if (!s(t)) return { invalid: n("string") };
          }
          return { value: t };
        } catch (e) {
          return { invalid: c(e.message) };
        }
      }
      e.exports = {
        parseConfig: function (e) {
          let t = Object.keys(e);
          return t.reduce(
            (t, n) => {
              let o = c(n, e[n]);
              return o.invalid
                ? { ...t, invalid: { ...t.invalid, [n]: o.invalid } }
                : { ...t, value: { ...t.value, [n]: o.value } };
            },
            { invalid: {}, value: {} }
          );
        },
        parseConfigValue: c,
      };
    },
    24912: function (e) {
      e.exports = {
        isFunction: (e) => "function" == typeof e,
        isObject: (e) =>
          "object" == typeof e && null !== e && !Array.isArray(e),
        isString: (e) => "string" == typeof e,
        isNumber: (e) => "number" == typeof e,
        isBoolean: (e) => "boolean" == typeof e,
        isArray: (e) => Array.isArray(e),
      };
    },
  },
]);
