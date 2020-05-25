
export default {
  namespace: 'global',
  state: {
    title: '',
    routesMap: [],
    tabPageList: [],
    currRoute: {},
    isVIP: true,
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *title({ payload }, { put }) {
      yield put({
        type: 'setState',
        payload: { title: payload },
      })
    }
  },
};