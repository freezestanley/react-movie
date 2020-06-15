module.exports = [
  {
    path: '/',
    component: '../layouts/common',
    routes: [
      // footer: 是否显示footer图片，默认true
      // type: tabBar(是否作为tab页面)
      // backgroundColor: layout背景色,默认白色, `gray`为灰色
      // hasNavBar: 是否显示头部导航
      // isNeedLogin: 路由是否需要登陆
      // fullsize: 是否需要占用整个视窗
      { path: '/', component: '../pages/movie', backgroundColor:'',title: 'movie', footer:false  },
      { path: '/test', component: '../pages/test', backgroundColor:'',title: 'test', footer:false  }
    ],
  }
]
