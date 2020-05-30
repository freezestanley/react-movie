import px2rem from 'postcss-plugin-px2rem';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  alias: {
    '@': 'src'
  },
  routes: [
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
        { path: '/login', component: '../pages/login', title: '盎司登陆' },
        { path: '/topup', component: '../pages/topup', title: '充值', backgroundColor: 'gray', hasNavBar: false},
        { path: '/topup/temp', component: '../pages/topup/temp', backgroundColor: 'gray', hasNavBar: false},
        { path: '/', type: 'tabBar', component: '../pages/home', title: '首页', hasNavBar: false },
        { path: '/explore', type: 'tabBar', component: '../pages/explore', title: '发现', backgroundColor:'gray' },
        { path: '/orders', type: 'tabBar', component: '../pages/orders', backgroundColor:'gray',footer:false, fullSize: true, title: '订单', isNeedLogin: true },
        { path: '/my', type: 'tabBar', component: '../pages/my', title: '我的' },
        { path: '/charge', component: '../pages/charge', backgroundColor:'gray',title: '充值成功', },
        { path: '/orderdetail', component: '../pages/orderdetail', backgroundColor:'gray',title: '订单详情' },
        { path: '/phone', component: '../pages/phone', backgroundColor:'gray',title: '话费充值'},
        { path: '/seckill', component: '../pages/seckill', backgroundColor:'gray',title: '秒杀活动', isNeedLogin: true  },
        { path: '/successbuy',component: '../pages/successbuy', title: '购买成功',  },
        { path: '/memberrecharge',component: '../pages/memberrecharge',backgroundColor:'gray', title: '我的卡券包', isNeedLogin: true   },
        { path: '/history', component: '../pages/card/history', backgroundColor:'white',title: '历史卡券', isNeedLogin: true },
        { path: '/card', component: '../pages/card', backgroundColor:'white',title: '我的卡券', isNeedLogin: true },
        { path: '/active', component: '../pages/card/active', backgroundColor:'',title: '大礼包', footer:false  },
        { path: '/search', component: '../pages/search', backgroundColor:'white',title: '搜索',  },
        { path: '/vip', component: '../pages/vip' },
        { path: '/userinfo', component: '../pages/userinfo', backgroundColor:'white',title: '个人信息', isNeedLogin: true },
        { path: '/testvip', component: '../pages/testvip' },
        { path: '/year', component: '../pages/card/active/year', backgroundColor:'',title: '大礼包', footer:false  },
        { path: '/halfyear', component: '../pages/card/active/halfyear', backgroundColor:'',title: '大礼包', footer:false  },
        { path: '/month', component: '../pages/card/active/month', backgroundColor:'',title: '大礼包', footer:false  },
      ],
    }
  ],
  extraPostCSSPlugins: [px2rem({
    rootValue: 14,
    remUnit: 28,
    selectorBlackList: ['ex_']
  })],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '盎司一起',
      dll: true,
      pwa: {
        manifestOptions: {
          srcPath: './public/manifest.json',
        },
        workboxPluginMode: 'GenerateSW',
        // workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
          // swSrc: 'src/service-worker.js',
          swDest: 'sw.js',
        },
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    '/api': {
      // target: 'https://vip-gateway-test.zhongan.io',
      // target: 'http://tech-ants-web-gateway.pre.za-tech.net',
      // target: 'https://vip-pre.zhongan.io/api',
      // target: 'https://vip-pre.zhongan.io/api',
      target: 'https://vip-test.zhongan.io/api',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/api': '' },
    },
  }
}
