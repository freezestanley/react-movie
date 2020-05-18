import * as service from '@/services/banner';

export default {
  namespace: 'banner',
  state: {
    list: [],
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getBanner({ payload }, { put, call }) {
      const res = yield call(service.getBanners, payload);
      const { code, data } = res.data || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { list: data.list || [] },
        });
      }
    }
  }
}