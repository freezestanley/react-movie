
import * as services from '@/services/card';

export default {
  namespace: 'card',
  state: {
      card: '12312312'
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // login
    *getCard({ payload }, { put, call }) {
      debugger
      const res = yield call(services.getCard, payload);
      return res;
      // yield put({ type: 'setState', payload: { data: '123123' } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // if (pathname === '/card') {
        //     debugger
        //   dispatch({ type: 'getCard', payload: query });
        // }
      });
    },
  },
};