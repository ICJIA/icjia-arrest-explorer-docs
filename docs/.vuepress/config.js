module.exports = {
  title: "Arrest Explorer",
  base: "/arrestexplorer/docs/",
  description:
    "Documentation site for the Illinois Criminal Justice Information Authority Arrest Explorer.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/favicon.ico",
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
      {
        text: "Arrest Explorer",
        link: "https://icjia-arrest-explorer.netlify.app",
      },
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
    repo: "ICJIA/icjia-arrest-explorer-docs",
    repoLabel: "GitHub",
    searchPlaceholder: "search",
  },
};
