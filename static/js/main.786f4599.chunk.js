(this.webpackJsonp0xppl = this.webpackJsonp0xppl || []).push([
  [0],
  {
    12: function (e, s, c) {},
    14: function (e, s, c) {},
    15: function (e, s, c) {
      "use strict";
      c.r(s);
      var a = c(1),
        t = c.n(a),
        i = c(6),
        n = c.n(i),
        l = (c(12), c.p + "0xppl/static/media/profile_picture.9aa196e0.svg"),
        r = c.p + "0xppl/static/media/ppl_logo.8a60281e.svg",
        j = c(0);
      var o = function () {
          return Object(j.jsxs)("div", {
            className: "AboutUs",
            children: [
              Object(j.jsx)("img", {
                src: l,
                className: "AboutUs__profileImage",
                alt: "profileImage",
              }),
              Object(j.jsx)("img", {
                src: r,
                className: "AboutUs__pplLogo",
                alt: "pplLogo",
              }),
              Object(j.jsxs)("div", {
                className: "AboutUs__desc",
                children: [
                  Object(j.jsx)("p", {
                    className: "AboutUs__desc--title",
                    children: "Welcome to 0xPeople,",
                  }),
                  Object(j.jsx)("p", {
                    className: "AboutUs__desc--subTitle",
                    children:
                      "a decentralized social network for the crypto natives.",
                  }),
                  Object(j.jsxs)("p", {
                    className: "AboutUs__desc--info",
                    children: [
                      "For the first time, you can communicate with users behind the ETH addresses. Follow what the others are doing and engage in cummunication.",
                      " ",
                    ],
                  }),
                  Object(j.jsxs)("p", {
                    className: "AboutUs__desc--info",
                    children: [
                      "Service is run on a distributed proof-of-stake network. There\u2019s no central company owning the servers.",
                      " ",
                    ],
                  }),
                  Object(j.jsx)("p", {
                    className: "AboutUs__desc--learnMore",
                    children: "Learn more",
                  }),
                ],
              }),
            ],
          });
        },
        d = c(5),
        m = c.p + "0xppl/static/media/search_icon.f8920ee2.svg",
        b = c.p + "0xppl/static/media/close.3e1e9c70.svg",
        h = c.p + "0xppl/static/media/communities_icon.f0a8018e.svg",
        O = c.p + "0xppl/static/media/message_icon.cb2f5bdf.svg",
        x = c.p + "0xppl/static/media/home_icon.76f4fcad.svg";
      var _ = function () {
        return Object(j.jsxs)("div", {
          className: "Tabs",
          children: [
            Object(j.jsxs)("div", {
              className: "Tabs__tab activeTab",
              children: [
                Object(j.jsx)("img", {
                  src: x,
                  className: "Tabs__tab--icon",
                  alt: "search",
                }),
                Object(j.jsx)("span", {
                  className: "Tabs__tab--section",
                  children: "FEED",
                }),
              ],
            }),
            Object(j.jsxs)("div", {
              className: "Tabs__tab",
              children: [
                Object(j.jsx)("img", {
                  src: h,
                  className: "Tabs__tab--icon",
                  alt: "search",
                }),
                Object(j.jsx)("span", {
                  className: "Tabs__tab--section",
                  children: "COMMUNITIES",
                }),
              ],
            }),
            Object(j.jsxs)("div", {
              className: "Tabs__tab",
              children: [
                Object(j.jsx)("img", {
                  src: O,
                  className: "Tabs__tab--icon",
                  alt: "search",
                }),
                Object(j.jsx)("span", {
                  className: "Tabs__tab--section",
                  children: "MESSAGES",
                }),
              ],
            }),
          ],
        });
      };
      var u = function () {
          var e = Object(a.useState)(!1),
            s = Object(d.a)(e, 2),
            c = s[0],
            t = s[1],
            i = Object(a.useState)(""),
            n = Object(d.a)(i, 2),
            l = n[0],
            r = n[1],
            o = function (e) {
              t(e), e || r("");
            };
          return Object(j.jsxs)("div", {
            className: "TabsHeader",
            children: [
              Object(j.jsx)("div", {
                className: "tabs",
                children: Object(j.jsx)(_, {}),
              }),
              Object(j.jsxs)("div", {
                className: c ? "search searchActive" : "search",
                children: [
                  Object(j.jsx)("img", {
                    src: m,
                    className: "icon",
                    alt: "search",
                  }),
                  Object(j.jsx)("input", {
                    className: "input",
                    value: l,
                    onChange: function (e) {
                      r(e.target.value);
                    },
                    placeholder: "SEARCH...",
                    onFocus: function () {
                      return o(!0);
                    },
                  }),
                  Object(j.jsx)("img", {
                    src: b,
                    className: c ? "close-icon show-close-icon" : "close-icon",
                    alt: "close",
                    onClick: function () {
                      return o(!1);
                    },
                  }),
                ],
              }),
            ],
          });
        },
        p = c(7),
        v = c.p + "0xppl/static/media/comment.7b81ed0e.svg",
        N = c.p + "0xppl/static/media/heart.eb110182.svg",
        g = c.p + "0xppl/static/media/ellipsis.b927814c.svg",
        f = c.p + "0xppl/static/media/verified.b72fad51.svg",
        T = c.p + "0xppl/static/media/verified_bw.0ca31340.svg";
      var w = function () {
        return Object(j.jsxs)("div", {
          className: "ListItem",
          children: [
            Object(j.jsx)("img", {
              src: l,
              className: "ListItem__image",
              alt: "search",
            }),
            Object(j.jsxs)("div", {
              className: "ListItem__details",
              children: [
                Object(j.jsxs)("div", {
                  className: "ListItem__details--user-info",
                  children: [
                    Object(j.jsxs)("div", {
                      children: [
                        " ",
                        Object(j.jsxs)("span", {
                          className: "user-name",
                          children: [
                            "Prasanna S",
                            Object(j.jsx)("img", {
                              src: f,
                              className: "verified-icon",
                              alt: "search",
                            }),
                          ],
                        }),
                        Object(j.jsx)("span", {
                          className: "wallet-name",
                          children: "0xPras",
                        }),
                        Object(j.jsxs)("span", {
                          className: "wallet-address",
                          children: [
                            "0x035...df435",
                            Object(j.jsx)("img", {
                              src: T,
                              className: "verified-icon",
                              alt: "search",
                            }),
                          ],
                        }),
                        Object(j.jsx)("span", { children: "24m" }),
                      ],
                    }),
                    Object(j.jsx)("img", {
                      src: g,
                      className: "ellipsis",
                      alt: "search",
                    }),
                  ],
                }),
                Object(j.jsxs)("div", {
                  className: "ListItem__details--feed-info",
                  children: [
                    "Swaped ",
                    Object(j.jsx)("span", {
                      className: "dollerValue",
                      children: "$4,200,000",
                    }),
                    " of",
                    " ",
                    Object(j.jsx)("span", {
                      className: "weth-crypto",
                      children: "WETH",
                    }),
                    " ",
                    Object(j.jsx)("span", {
                      className: "weth-change",
                      children: " -100%",
                    }),
                    " for",
                    " ",
                    Object(j.jsx)("span", {
                      className: "atom-crypto",
                      children: "ATOM",
                    }),
                    " ",
                    Object(j.jsx)("span", {
                      className: "atom-change",
                      children: "+28%",
                    }),
                  ],
                }),
                Object(j.jsxs)("div", {
                  className: "ListItem__details--user-actions",
                  children: [
                    Object(j.jsxs)("div", {
                      className: "comment",
                      children: [
                        Object(j.jsx)("img", {
                          src: v,
                          className: "comment__icon",
                          alt: "search",
                        }),
                        Object(j.jsx)("span", {
                          className: "comment__count",
                          children: "256",
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "like",
                      children: [
                        Object(j.jsx)("img", {
                          src: N,
                          className: "like__icon",
                          alt: "search",
                        }),
                        Object(j.jsx)("span", {
                          className: "like__count",
                          children: "1.2K",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var A = function () {
        return Object(j.jsxs)("div", {
          className: "List",
          children: [
            Object(j.jsxs)("div", {
              className: "List__filters",
              children: [
                Object(j.jsx)("span", {
                  children: "Most interesting blockchain activity",
                }),
                Object(j.jsxs)("span", {
                  children: [
                    "Filter:",
                    Object(j.jsx)("span", {
                      className: "List__filters--options",
                      children: " TOP ACTIVITY",
                    }),
                  ],
                }),
              ],
            }),
            Object(p.a)(Array(20)).map(function (e, s) {
              return Object(j.jsx)(w, { index: s + 1 }, s + 1);
            }),
          ],
        });
      };
      var C = function () {
          return Object(j.jsxs)("div", {
            className: "Content",
            children: [
              Object(j.jsx)("div", {
                className: "Content__tabs",
                children: Object(j.jsx)(u, {}),
              }),
              Object(j.jsx)("div", {
                className: "Content__list",
                children: Object(j.jsx)(A, {}),
              }),
            ],
          });
        },
        k = c.p + "0xppl/static/media/coinbase.98411986.svg",
        y = c.p + "0xppl/static/media/metamask.7185db00.svg",
        I = c.p + "0xppl/static/media/wallet_connect.fea73ba6.svg",
        L = c.p + "0xppl/static/media/user_default.356ce2fa.svg";
      var W = function () {
        return Object(j.jsxs)("div", {
          className: "Wallet",
          children: [
            Object(j.jsx)("div", {
              className: "Wallet__user",
              children: Object(j.jsx)("img", {
                src: L,
                className: "Wallet__user--icon",
                alt: "user-icon",
              }),
            }),
            Object(j.jsxs)("div", {
              className: "Wallet__connect",
              children: [
                Object(j.jsx)("p", {
                  className: "Wallet__connect--title",
                  children: "Connect your wallet",
                }),
                Object(j.jsx)("div", {
                  className: "Wallet__connect--features",
                  children: Object(j.jsxs)("ul", {
                    children: [
                      Object(j.jsx)("li", { children: "Add your updates" }),
                      Object(j.jsx)("li", { children: "Customize your Feed" }),
                      Object(j.jsx)("li", { children: "Join Communities" }),
                      Object(j.jsx)("li", { children: "Enable Messaging" }),
                    ],
                  }),
                }),
                Object(j.jsxs)("button", {
                  className: "Wallet__connect--metamask",
                  children: [
                    "MetaMask ",
                    Object(j.jsx)("img", {
                      src: y,
                      className: "icon",
                      alt: "metamask",
                    }),
                  ],
                }),
                Object(j.jsxs)("button", {
                  className: "Wallet__connect--wallet-connect",
                  children: [
                    "WalletConnect",
                    " ",
                    Object(j.jsx)("img", {
                      src: I,
                      className: "icon",
                      alt: "walletconnecct",
                    }),
                  ],
                }),
                Object(j.jsxs)("button", {
                  className: "Wallet__connect--coinbase",
                  children: [
                    "Coinbase",
                    Object(j.jsx)("img", {
                      src: k,
                      className: "icon",
                      alt: "coinbase",
                    }),
                  ],
                }),
                Object(j.jsx)("p", {
                  className: "Wallet__connect--privacy",
                  children: "How is your privacy protected?",
                }),
              ],
            }),
          ],
        });
      };
      var S = function () {
        return Object(j.jsxs)("div", {
          className: "Home",
          children: [
            Object(j.jsx)("div", {
              className: "Home__aboutUs",
              children: Object(j.jsx)(o, {}),
            }),
            Object(j.jsx)("div", {
              className: "Home__content",
              children: Object(j.jsx)(C, {}),
            }),
            Object(j.jsx)("div", {
              className: "Home__wallet",
              children: Object(j.jsx)(W, {}),
            }),
          ],
        });
      };
      c(14);
      var U = function () {
          return Object(j.jsx)("div", {
            className: "App",
            children: Object(j.jsx)(S, {}),
          });
        },
        E = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 16))
              .then(function (s) {
                var c = s.getCLS,
                  a = s.getFID,
                  t = s.getFCP,
                  i = s.getLCP,
                  n = s.getTTFB;
                c(e), a(e), t(e), i(e), n(e);
              });
        };
      n.a.render(
        Object(j.jsx)(t.a.StrictMode, { children: Object(j.jsx)(U, {}) }),
        document.getElementById("root")
      ),
        E();
    },
  },
  [[15, 1, 2]],
]);
//# sourceMappingURL=main.786f4599.chunk.js.map
