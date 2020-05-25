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
        //
        { path: '/login', component: '../pages/login', title: '盎司登陆' },
        { path: '/topup', component: '../pages/topup', backgroundColor: 'gray', hasNavBar: false, hasBuyFooter: true },
        { path: '/', type: 'tabBar', component: '../pages/home', title: '首页', hasNavBar: false },
        { path: '/explore', type: 'tabBar', component: '../pages/explore', title: '发现', backgroundColor:'gray' },
        { path: '/orders', type: 'tabBar', component: '../pages/orders', backgroundColor:'gray', title: '订单' },
        { path: '/my', type: 'tabBar', component: '../pages/my', title: '我的' },
        { path: '/charge', component: '../pages/charge', backgroundColor:'gray',title: '充值成功' },
        { path: '/orderdetail', component: '../pages/orderdetail', backgroundColor:'gray',title: '订单详情' },
        { path: '/phone', component: '../pages/phone', backgroundColor:'gray',title: '话费充值', hasBuyFooter: true },
        { path: '/seckill', component: '../pages/seckill', backgroundColor:'gray',title: '秒杀活动',  },
        { path: '/successbuy',component: '../pages/successbuy', title: '购买成功',  },
        { path: '/cardpackage',component: '../pages/cardpackage',backgroundColor:'gray', title: '我的卡券包',  },
        { path: '/spike', component: '../pages/spike', backgroundColor:'gray',title: '秒杀活动',  },
        { path: '/history', component: '../pages/card/history', backgroundColor:'white',title: '历史卡券',  },
        { path: '/card', component: '../pages/card', backgroundColor:'white',title: '我的卡券',  },
        // { path: '/test', component: '../pages/test' },
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
