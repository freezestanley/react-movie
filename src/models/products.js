import * as service from '@/services/product';

export default {
  namespace: 'products',
  state: {
    list: [],
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getProducts({ payload }, { put, call }) {
      const res = yield call(service.queryProducts, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { list: data.products || [] }
        });
      }
    }
  }
}