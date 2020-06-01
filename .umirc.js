import px2rem from 'postcss-plugin-px2rem';
const routes = require('./routes');

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  alias: {
    '@': 'src'
  },
  routes: routes,
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
