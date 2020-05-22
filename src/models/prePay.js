export default {
  namespace: 'prePay',
  state: {
    main: {},
    attach: {},
    type: 'product'  // 4种类型: product|seckill|vip|promote|phone
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}