import * as service from '@/services/seckill';

export default {
  namespace: 'seckill',
  state: {
    info: {},
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getSeckillDetail({ payload }, { put, call }) {
      const resDetail = yield call(service.querySeckillDetail, payload);
      if (resDetail.code !== '0000') {
        return;
      }

      const detail = resDetail.data;
      const eventCode = detail.eventCode;
      yield put({
        type: 'setState',
        payload: { info: { detail } },
      });
      const resRegister = yield call(service.registerSeckill, { eventCode });
      if (resRegister.code !== '0000') {
        return;
      }

      const resGetStock = yield call(service.getStock, { eventCode });
      if (resGetStock.code !== '0000') {
        return;
      }

      yield put({
        type: 'setState',
        payload: { info: { detail, mystock: resGetStock.data.userStock } },
      });
    },
  },
};
