
export default {
  namespace: 'global',
  state: {
    title: '',
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {},
};