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
      console.log('----')
      const res = yield call(service.queryProduct, payload);
      console.log(res)
      const { code, data } = res || {};
      console.log(code)
      if (code === '0000') {
        console.log(data)
        yield put({
          type: 'setState',
          payload: { info: data },
        });
      }
   } 
  }
}