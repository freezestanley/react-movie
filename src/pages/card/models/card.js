
import * as services from '@/services/card';

export default {
  namespace: 'card',
  state: {
      card: '12312312',
      historyCards:[],//历史卡券
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
    //history cards
    *getHistoryCard({ payload }, { put, call }) {
      // debugger
      const res = yield call(services.getCard, payload);
      console.log(res,'res')
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