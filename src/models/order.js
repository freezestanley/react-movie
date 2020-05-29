import { Toast } from 'zarm';
import * as services from '@/services/order';

export default {
  namespace: 'order',
  state: {
    hasVipOrder: false,
    orderInfo: {},
    orderDetails:{},
    productList: [],
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

    // 普通商品下单
    *createAndPay({ payload }, { put, call }) {
      const res = yield call(services.createAndPay, payload);
      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: { orderInfo: res.data },
        });
        return res.data;
      } else {
        Toast.show(res.msg || '订单创建失败，请重新尝试');
        return false;
      }
    },
    // 秒杀下单
    *createSeckillOrderAndPay({ payload }, { put, call }) {
      const res = yield call(services.createSeckillOrder, payload);
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
    //地推开通会员 购买大礼包
    *openMemberAccount({ payload }, { put, call }) {
      const res = yield call(services.createPackageOrder, payload);
      if (res.code === '0000') {
        Toast.show('会员开通成功！')
      } else {
        Toast.show(res.msg || '开通会员失败，请重新尝试')
      }
    },
    // 单独购买会员下单
    *createMemberOrder({ payload }, { put, call }) {
      const res = yield call(services.createMemberOrder, payload);
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
          payload: {
            orderDetails: res.data,
            productList: res.data.productList || [],
          },
        });
        return res.data;
      }
    },
  },
};