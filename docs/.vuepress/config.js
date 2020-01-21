// .vuepress/config.js
module.exports = {
  title: 'Sinarmas Digital',
  description: 'Welcome to our documentation space!',
  base: '/sinarmas-digital/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    smoothScroll : true,
    //displayAllHeaders: true, // Default: false
    sidebar: [
      ['/home/', 'Home'],
      { //GROUP 1
        title: 'Projects',   // required
        //path: '/home/',      // optional, which should be a absolute path.
        //collapsable: false, // optional, defaults to true
        //sidebarDepth: 2,    // optional, defaults to 1
        children: [
          ['/project/smartnet/','Engagement App'],
          ['/project/snd/','S&D'],
          ['/project/null/','MySF'],
          ['/project/null/','Jakarta Talkies'],
          ['/project/null/','Switch'],
          ['/project/null/','Gamification']
        ]
      },
      { //GROUP 2
        title: 'Guides',   // required
        //path: '/home/',      // optional, which should be a absolute path.
        //collapsable: false, // optional, defaults to true
        //sidebarDepth: 2,    // optional, defaults to 1
        children: [
          ['/guide/syntax/','Syntax'],
          ['/guide/deploy/','Deploy'],
          ['/guide/contact-pic/','Contact PIC'],
        ]
      }
    ]
    //displayAllHeaders: true // Default: false
  }
}