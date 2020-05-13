
import { Toast } from 'zarm';
import * as services from '@/services/user';

export default {
  namespace: 'user',
  state: {
    userInfo: {},
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // login
    *login({ payload }, { put, call }) {
      const res = yield call(services.login, payload);
      if (res.code === '0000') {
        yield put({
          type: 'setState',
          payload: {
            userInfo: res.data
          }
        })
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        return true;
      } else {
        Toast.show(res.msg);
        return false;
      }
    },
  },
};