module.exports = {
  title: "Arrest Explorer",
  // base: "/",
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
      { text: "User Guide", link: "/" },
      { text: "User Agreement", link: "/user_agreement" },
      { text: "Technical Guide", link: "/technical/" },
      {
        text: "Arrest Explorer",
        link: "https://icjia-arrest-explorer.netlify.app",
      },
    ],
    sidebar: [
      "",
      ["user_agreement", "Data User Agreement"],
      ["explorer", "Using Arrest Explorer"],

      {
        title: "Technical Guide",
        collapsable: true,
        children: [
          ["/technical/", "Technical Overview"],
          ["/technical/chri", "CHRI Source Data"],
          ["/technical/data", "Data in Arrest Explorer"],
          ["/technical/export-data", "Exporting Data"],
          ["/technical/api", "API"],
          ["/technical/open_source", "Open Source"],
        ],
      },
    ],

    repo: "ICJIA/icjia-arrest-explorer-docs",
    repoLabel: "GitHub",
    searchPlaceholder: "search",
  },
};
