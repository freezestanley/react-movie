
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  alias: {
    '@': 'src'
  },
  routes: [
    { path: '/login', component: '../pages/login' },
    {
      path: '/',
      component: '../layouts/main',
      routes: [
        { path: '/', component: '../pages/home' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'ants-mobile',
      dll: false,
      
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
