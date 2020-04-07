module.exports = {
  title: "Arrest Explorer",
  description: "Documentation site for ICJIA Arrest Explorer.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/icjia-default.jpg",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  ],
  themeConfig: {
    logo: "/assets/icjia-logo.png",
    nav: [
      { text: "User Agreement", link: "/agreement/" },
      { text: "User Guide", link: "/guide/" },
      { text: "Developer Guide", link: "/dev-guide/" },
      { text: "Arrest Explorer", link: "https://" },
    ],
    sidebar: {
      "/guide/": [
        "/guide/",
        "/guide/chri",
        "/guide/data",
        "/guide/explorer",
        "/guide/api",
        "/guide/faq",
      ],
      "/dev-guide/": ["/dev-guide/", "/dev-guide/architecture"],
    },
    repo: "bobaekang/icjia-arrest-explorer-docs",
    repoLabel: "GitHub",
  },
};
