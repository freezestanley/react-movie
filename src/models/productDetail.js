import * as service from '@/services/product';

export default {
  namespace: 'productDetail',
  state: {
    info: {},
    eventList:[]
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getProduct({ payload }, { put, call }) {
      const res = yield call(service.queryProduct, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { info: data },
        });
      }
    },
    *getEventList({ payload }, { put, call }) {
      console.log('----payload', payload);
      const res = yield call(service.eventList, payload);

      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: { eventList: res.data },
        });
      }
    },
    *getProductItems({ payload }, { put, call }) {
      const res = yield call(service.getProductItems, payload);
      // console.log('[27] productDetail.js: ', res.data);
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