import * as service from '@/services/product';

export default {
  namespace: 'phone',
  state: {
    product: {},
    productItems: [],
    attachList: []
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getAttachList({ payload }, { put, call }) {
      console.log('-----payload', payload);
      const res = yield call(service.queryAdditionalProductItems, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { attachList: data.list || [] },
        });
      }
    },
    *getProductItems({ payload }, { put, call }) {
      const res = yield call(service.getProductItems, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { 
            productItems: data.productItems || [],
            product: data.product || {}
          }
        });
      }
    }
  }
}