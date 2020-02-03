// .vuepress/config.js
module.exports = {
  title: 'Sinarmas Digital',
  description: 'Software Development Group',
  base: '/sinarmas-digital/',
  plugins: [
    [
      "container",
      {
        type: "spoiler",
        before: info => "<details><summary>" + info + "</summary>\n",
        after: "</details>\n"
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    smoothScroll : true,
    //displayAllHeaders: true, // Default: false
    sidebar: [
      ['/pages/_home/', 'Home'],
      { //GROUP 1
        title: 'Projects',   // required
        //path: '/home/',      // optional, which should be a absolute path.
        //collapsable: false, // optional, defaults to true
        //sidebarDepth: 2,    // optional, defaults to 1
        children: [
          ['/pages/engagement/','Engagement App'],
          ['/pages/enterprise/','Enterprise B2B'],
          ['/pages/gamification/','Gamification'],
          ['/pages/jakies/','Jakarta Talkies'],
          ['/pages/mysf/','MySF'],          
          ['/pages/region/','Regional Finance Collection'],          
          ['/pages/snd/','S&D'],
          ['/pages/windmill/','Windmill']
        ]
      },
      { //GROUP 2
        title: 'Notes',   // required
        //path: '/home/',      // optional, which should be a absolute path.
        //collapsable: false, // optional, defaults to true
        //sidebarDepth: 2,    // optional, defaults to 1
        children: [
          ['/pages/_contact/','Contact PIC'],
          ['/pages/_weekly/','Weekly Meeting'],
         // ['/pages/_syntax/','Syntax'],
        ]
      }
    ]
    //displayAllHeaders: true // Default: false
  }
}