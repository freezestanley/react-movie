import { Toast } from 'zarm';
import * as services from '@/services/order';

export default {
  namespace: 'order',
  state: {
    hasVipOrder: false,
    orderInfo: {},
    orderDetails:{}
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // 获取会员等级列表
    *checkMemberFlag({ payload }, { put, call }) {
      const res = yield call(services.checkMemberFlag, payload);
      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: { hasVipOrder: res.data },
        });
      }
    },

    // 获取会员等级列表
    *createAndPay({ payload }, { put, call }) {
      const res = yield call(services.createAndPay, payload);
      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: { orderInfo: res.data },
        });
        return res.data;
      } else {
        Toast.show(res.msg || '订单创建失败，请重新尝试')
      }
    },
    *queryOrders({ payload }, { put, call }) {
      const res = yield call(services.queryOrders, payload);
      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: { orderInfo: res.data },
        });
        return res.data;
      }
    },
    *queryOrderDetials({ payload }, { put, call }) {
      const res = yield call(services.queryOrderDetails, payload);
      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: { orderDetails: res.data },
        });
        return res.data;
      }
    },
  },
};