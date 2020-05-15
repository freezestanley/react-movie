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
        { path: '/login', component: '../pages/login', title: '盎司登陆' },
        { path: '/', type: 'navBar', component: '../pages/home', title: '首页' },
        { path: '/vip', type: 'navBar', component: '../pages/vip', title: 'VIP' },
        { path: '/my', type: 'navBar', component: '../pages/my', title: '我的' },
        // {
        //   path: '/',
        //   component: '../layouts/tabBar',
        //   routes: [
        //     { path: '/', type: 'tabNav', component: '../pages/home', title: '首页' },
        //     { path: '/vip', type: 'tabNav', component: '../pages/vip', title: 'VIP' },
        //     { path: '/my', type: 'tabNav', component: '../pages/my', title: '我的' },
        //   ],
        // },
      ],
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '盎司一起',
      dll: true,
      hd: {
        theme: {
          // antd-mobile 高清方案
          '@hd': '2px',
        },
        // more: https://github.com/pigcan/postcss-plugin-px2rem#configuration
        px2rem: {
          rootValue: 50,
          minPixelValue: 2,
          selectorBlackList: ['ex_'], //以包含ex_的class不需要转换
        },
      },

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
