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
        const res = yield call(service.querySeckillDetail, payload);

        if (res.code === '0000') {
          yield put({
            type: 'setState',
            payload: { info: res.data },
          });
        }
      },
  }
}