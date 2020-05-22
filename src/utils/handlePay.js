import router from 'umi/router';
import { Loading } from 'zarm';
import { PAY_TYPE, BUY_MEMBER } from '@utils/constant';
import { Store, isWX } from '@utils/tools';
import { wechatPay, randomStr } from '@utils/wechatPay';

export default ({ dispatch, data, payType = PAY_TYPE.wechat, onSuccessCb }) => {
  // console.log('pay data: ', payload);
  // if the order is created successfully
  const openId = Store.get('openId');
  Loading.show();
  dispatch({
    type: 'charge/weChatPayStart',
    payload: {
      openId: openId,
      orderId: data.orderId,
      // 微信：1，支付宝：2
      payType,
    },
    callback(_data) {
      if (isWX) {
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
            Loading.hide();
            return _d;
          },
          // success callback
          () => {
            onSuccessCb
              ? onSuccessCb()
              : router.push(`/topup/temp/?out_trade_no=${data.orderId}`)
          },
        );
      } else {
        _data.payLink && browserPay(_data);
      }
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

function browserPay(data) {
  const uri = encodeURIComponent(
    window.location.origin +
      '/topup/temp/?' +
      '&out_trade_no=' +
      data.outTradeNo
  );

  window.location = data.payLink + `&redirect_url=${uri}`;
}
