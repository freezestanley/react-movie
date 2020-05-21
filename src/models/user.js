import { Toast } from 'zarm';
import * as services from '@/services/user';
import { Store } from '@/utils/tools';

export default {
  namespace: 'user',
  state: {
    userInfo: {},
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // 微信登录
    *wxLogin({ payload }, { put, call }) {
      const res = yield call(services.wxLogin, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        Store.set('openId', data);
        return true;
      }
      return false;
    },

    // 手机验证码登录
    *login({ payload }, { put, call }) {
      const res = yield call(services.login, payload);
      if (res.code === '0000') {
        Store.set('token', res.data);
        return true;
      } else {
        Toast.show(res.msg);
        return false;
      }
    },

    // 发送验证码
    *sendCode({ payload }, { put, call }) {
      yield call(services.sendCode, payload);
    },

    // 是否注册过手机号
    // eslint-disable-next-line require-yield
    *checkRegistered({ payload }, { put, call }) {
      // yield call(services.checkRegistered, payload);
      return Math.random() > 0.5 ? true : false;
    },
  },
};