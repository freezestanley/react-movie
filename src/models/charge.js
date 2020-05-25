// import { Toast } from 'zarm';
import * as services from '@/services/order';

export default {
  namespace: 'charge',
  state: {},
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // 微信支付加签
    *wechatPaySign({ payload }, { call }) {
      const res = yield call(services.wechatPaySign, payload);
      if (res.code === '0000') {
        return res.data;
      }
    },
  },
};