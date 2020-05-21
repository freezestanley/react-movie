import axios from 'axios';
import { Toast } from 'zarm';
// import router from 'umi/router';
import { Store, BrowserInfo } from './tools';

const source = BrowserInfo.isWeixin ? 'WX' : 'H5';

export const apiPrefix = {
  ance: '/api/ants_user/v1/ance',
  user: '/api/ants_user/v1/user',
  banner: '/api/ants_product/v1/banner',
  seckill: '/api/ants_product/v1/seckill',
  charge: '/api/ants_charge/v1/charge',
  pay: '/api/ants_charge/v1/pay',
  product: '/api/ants_product/v1/product',
}

// create an axios instance
const service = axios.create({
  timeout: 30 * 1000,
});

// request interceptor
service.interceptors.request.use(
  config => {
    const token = Store.get('token');
    token && (config.headers.Authorization = token);
    // 浏览器环境
    config.headers.source = source;
    return config;
  },
  error => {
    // do something with request error
    /* eslint-disable */
    // console.log(error) // for debug
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    // if (error.response.status) {
    //   switch (error.response.status) {
    //     case 401: // 未登录
    //       router.push('/login');
    //       break;
    //     case 403: // token过期
    //       Toast.show({
    //         content: '登录过期，请重新登录',
    //         stayTime: 1000,
    //       });
    //       localStorage.removeItem('token');
    //       setTimeout(() => {
    //         router.push('/login');
    //       }, 1000);
    //   }
    // }
    if (error.message.indexOf('500')) {
      Toast.show('服务器异常，请稍后再试' || error.message);
    }
    return Promise.reject(error);
  },
);

export default function (config) {
  const { serve, method, data, ...rest } = config;
  const options = {
    baseURL: apiPrefix[config.serve],
    method,
    [method === 'GET' ? 'params' : 'data']: data,
    ...rest
  }
  return service.request(options);
};
