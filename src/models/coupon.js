import { Toast } from 'zarm';
import * as services from '@/services/coupon';

export default {
  namespace: 'coupon',
  state: {
    
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
   
    *exchangeMember({ payload }, { put, call }) {
      const res = yield call(services.exchangeCoupon, payload);
      return res
    },
  },
};