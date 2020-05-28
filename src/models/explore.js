import * as productService from '@/services/product';
import * as recommendService from '@/services/recommend';

export default {
  namespace: 'explore',
  state: {
    hot: [],
    categories: [],
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getCategories({ payload }, { put, call }) {
      const res = yield call(productService.queryProductsGroupByCategory, payload);
      if (res.code !== '0000') {
        return;
      }

      const detail = res.data.queryProductItemDtoList;
      yield put({
        type: 'setState',
        payload: { categories: detail },
      });
    },
    *getHotRecommends({ payload }, { put, call }) {
      const res = yield call(recommendService.getBanners, payload);
      if (res.code !== '0000') {
        return;
      }

      const detail = res.data.list;
      yield put({
        type: 'setState',
        payload: { hot: detail },
      });
    },
  },
};
