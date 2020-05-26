import { Toast } from 'zarm';
import * as services from '@/services/user';
import { Store } from '@/utils/tools';

export default {
  namespace: 'user',
  state: {
    userInfo: {},
    isVIP: false,
    membershipList: [],
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
    *loginOut(_, { put, call }) {
      const res = yield call(services.loginOut);
      if (res.code === '0000') {
        localStorage.clear();
        sessionStorage.clear();
      }
    },

    // 发送验证码
    *sendCode({ payload }, { put, call }) {
      yield call(services.sendCode, payload);
    },

    // 是否注册过手机号
    *checkRegistered({ payload }, { put, call }) {
      const res = yield call(services.checkRegistered, payload);
      return res.data;
    },

    // 获取QQ昵称
    *getQQInfo({ payload }, { put, call }) {
      const res = yield call(services.getQQInfo, payload);
      return res.data;
    },

    // 获取用户信息
    *getUserInfo({ payload, hasToast = true }, { put, call }) {
      const res = yield call(services.getUserInfo, payload);
      if (res.code === '0000') {
        const _data = res.data || {};
        yield put({
          type: 'setState',
          payload: {
            userInfo: _data,
            // 0 - 非会员；
            // 1 - GOLD（金卡）；
            // 2 - PLATINUM（白金卡）；
            // 3 - DIAMOND（钻石卡）
            isVIP: _data.membershipLevel !== 0,
            userId: _data.id
          },
        })
        // console.log('[84] user.js: ', _data.id);
        Store.set('userId', _data.id)
      } else {
        hasToast && Toast.show(res.msg)
      }
    },

    // 获取会员等级列表
    *getMembershipList(_, { put, call }) {
      const res = yield call(services.getMembershipList);
      // const { code, data } = res || {};
      if (res.code === '0000' && res.data) {
        yield put({
          type: 'setState',
          payload: { membershipList: res.data },
        });
      }
    },
  },
};