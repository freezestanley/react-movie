
import { Toast } from 'zarm';
import * as services from '@/services/user';
import { Store, cookie } from '@/utils/tools';

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
        cookie.set('token', data);
        return true;
      }
      return false;
    },

    // 手机验证码登录
    *login({ payload }, { put, call }) {
      const res = yield call(services.login, payload);
      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: {
            userInfo: res.data
          }
        })
        Store.set('userInfo', res.data);
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
  },
};