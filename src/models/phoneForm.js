export default {
  namespace: 'phoneForm',
  state: {
    rechargeAccount: '',
    main: {},
    attach: {}
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}