import axios from 'axios';
import { Toast } from 'zarm';


// create an axios instance
const service = axios.create({
  // baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 30 * 1000, // request timeout
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

    if (config.method === 'GET') {
      config.params = config.data;
    }

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
    // console.log('[55] request.js: ', response);
    const res = response.data || {};
    // const msg = res.msg;
    // const code = res.code;

    // if (code !== '0000') {
    //   Toast.show(msg);
    // }

    return res;
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

export default service;
