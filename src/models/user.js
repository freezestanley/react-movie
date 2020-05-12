
import * as services from '@/services/user';

export default {
  namespace: 'user',
  state: {},
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // login
    *login({ payload }, { put, call }) {
      const res = yield call(services.login, payload);
      return res;
    },
  },
};