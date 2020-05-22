// 底部支付Bar需要展示的信息&需要传给支付按钮的信息
export default {
  namespace: 'prePay',
  state: {
    main: {},  // 主产品信息
    attach: {}, // 附加产品信息
    type: 'product'  // 支付产品类型，共4种类型: product|seckill|vip|promote|phone
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}