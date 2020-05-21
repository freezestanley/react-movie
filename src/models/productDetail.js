import * as service from '@/services/product';

export default {
  namespace: 'productDetail',
  state: {
    info: {},
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getProduct({ payload }, { put, call }) {
      console.log('----payload', payload);
      const res = yield call(service.queryProduct, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { info: data },
        });
      }
    }
  }
}