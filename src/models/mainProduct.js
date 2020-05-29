import * as service from '@/services/product';

export default {
  namespace: 'mainProduct',
  state: {
    info: {},
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    * getmain({ payload }, { put, call }) {
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