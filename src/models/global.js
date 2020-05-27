
export default {
  namespace: 'global',
  state: {
    title: '',
    routesMap: [],
    tabPageList: [],
    currRoute: {},
    hasBuyFooter: false
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