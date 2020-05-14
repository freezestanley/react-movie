import Taro from '@tarojs/taro';
import { PAY_TYPE, BUY_MEMBER } from '@utils/constant';
import { getStore } from '@utils/tools';
import { wechatPay, randomStr } from '@utils/wechatPay';

export default ({ dispatch, data, payType = PAY_TYPE.wechat, onSuccessCb }) => {
  // console.log('pay data: ', payload);
  // if the order is created successfully
  const userInfo = getStore('userInfo') || {};
  Taro.showLoading();
  dispatch({
    type: 'charge/weChatPayStart',
    payload: {
      openId: userInfo.userOpenId,
      orderId: data.orderId,
      // 微信：1，支付宝：2
      payType,
    },
    callback(_data) {
      wechatPay(
        {
          // config
          timeStamp: Date.now().toString(),
          nonceStr: randomStr(24),
          package: `prepay_id=${_data.prepayId}`,
        },
        // get paySign
        async params => {
          const _d = (await dispatch({
            type: 'charge/weChatPaySign',
            payload: { ...params, orderId: data.orderId },
          })) || {};
          Taro.hideLoading();
          return _d;
        },
        // success callback
        () => {
          onSuccessCb && onSuccessCb();
          Taro.navigateTo({ url: `/topup/result?out_trade_no=${data.orderId}` })
        },
      );
    }
  })
}

export function formatPayForm(dispatch) {
  dispatch({
    type: 'global/payForm',
    payload: {
      accountType: null,
      rechargeAccount: null,
      productItemId: null,
      productId: null,
      quantity: 1,
      buyMember: BUY_MEMBER.no,
    }
  })
}