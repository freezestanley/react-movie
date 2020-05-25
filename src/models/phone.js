import * as service from '@/services/product';
import map from 'lodash/map';

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
      const res = yield call(service.queryAdditionalProductItems, payload);
      const { code, data } = res || {};
      if (code === '0000') {
        yield put({
          type: 'setState',
          payload: { attachList: map(data || [], ({ product, productItem }) => ({
            id: product.id,
            icon: product.image,
            title: product.name,
            subTitle:productItem.name,
            price: productItem.price,
            payPrice: productItem.additionalPrice,
            productItemId: productItem.id,
            productItemName: productItem.name
          })) },
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