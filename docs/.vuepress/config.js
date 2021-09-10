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

      { text: "User Guide", link: "/" },
      { text: "User Agreement", link: '/User Agreement' },
      { text: "Technical Guide", link: "/technical/" },
      {
        text: "Arrest Explorer",
        link: "https://icjia-arrest-explorer.netlify.app",
      },
    ],
    sidebar: [
    '',
    'User Agreement',
    ['explorer','Using Arrest Explorer'],
    ['chri','About CHRI Data'],

    {title: 'Technical',
     collapsable: true,
     children: [
        ['/technical/','Technical Overview'],
        ['/technical/data','Data Procedures'],
        ['/technical/api','API'],
        ['/technical/architecture','Architecture']

     ]},
     'faq'



    ]


    ,
    repo: "ICJIA/icjia-arrest-explorer-docs",
    repoLabel: "GitHub",
    searchPlaceholder: "search",
  }
};
