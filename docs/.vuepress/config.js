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
      { text: "User Agreement", link: '/User_Agreement' },
      { text: "Technical Guide", link: "/technical/" },
      {
        text: "Arrest Explorer",
        link: "https://icjia-arrest-explorer.netlify.app",
      },
    ],
    sidebar: [
    '',
    'User_Agreement',
    ['explorer','Using Arrest Explorer'],
    

    {title: 'Technical',
     collapsable: true,
     children: [
        ['/technical/','Technical Overview'],
        ['/technical/chri','CHRI Source Data'],
        ['/technical/data','Data in Arrest Explorer'],
        ['/technical/api','API'],
        ['/technical/Open_Source','Open Source']
     ]},
     'faq'



    ]


    ,
    repo: "ICJIA/icjia-arrest-explorer-docs",
    repoLabel: "GitHub",
    searchPlaceholder: "search",
  }
};
