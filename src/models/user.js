import { Toast } from 'zarm';
import * as services from '@/services/user';
import { Store } from '@/utils/tools';

export default {
  namespace: 'user',
  state: {
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
  },
};