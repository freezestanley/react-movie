// import { Toast } from 'zarm';
import * as services from '@/services/order';

export default {
  namespace: 'order',
  state: {
    hasVipOrder: false,
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // 获取会员等级列表
    *checkMemberFlag({ payload }, { put, call }) {
      const res = yield call(services.checkMemberFlag, payload);
      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: { hasVipOrder: res.data },
        });
      }
    },
  },
};