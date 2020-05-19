
import * as services from '@/services/user';

export default {
  namespace: 'home',
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
      // yield put({ type: 'setState', payload: { data: '123123' } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};