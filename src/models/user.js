import { Toast } from 'zarm';
import * as services from '@/services/user';
import { Store } from '@/utils/tools';

export default {
  namespace: 'user',
  state: {
    isValidToken: false,
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
    // 获取会员等级列表
    *getMembershipList(_, { put, call }) {
      const res = yield call(services.getMembershipList);
      if (res.code === '0000' && res.data) {
        yield put({
          type: 'setState',
          payload: { membershipList: res.data },
        });
      }
    },
  },
};