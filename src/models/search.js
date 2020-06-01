import * as service from '@/services/product';

export default {
  namespace: 'search',
  state: {
    list: [],
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getTopSearch({ payload }, { put, call }) {
      const res = yield call(service.queryHotSearch, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { list: data || [] },
        });
      }
    }
  }
}