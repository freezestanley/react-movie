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
        { path: '/login', component: '../pages/login', title: '登陆' },
        {
          path: '/',
          component: '../layouts/tabBar',
          routes: [
            { path: '/', component: '../pages/home' },
          ],
        },
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
}
