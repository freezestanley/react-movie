import axios from 'axios';
import { Toast } from 'zarm';

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
    // console.log('[20] request.js: ', config);

    // if (process.env.NODE_ENV === 'development') {
    //   if (config.method === 'post') {
    //     config.url = config.url + '?hackuid=' + uid;
    //   }

    //   if (config.method === 'get') {
    //     config.params.hackuid = uid;
    //   }
    // }
    // console.log('-----config', config);
    // if (config.serve) {
    //   config.url = apiPrefix[config.serve] + config.url;
    // }

    // if (config.method === 'GET') {
    //   config.params = config.data;
    // }

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
    return response;
  },
  error => {
    if (error.message.indexOf('500')) {
      Toast.show('服务器异常，请稍后再试' || error.message);
    }
    const { host, hash } = location;

    if (host.indexOf('localhost') > -1) {
      return;
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
