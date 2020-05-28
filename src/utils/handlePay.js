import router from 'umi/router';
import { Loading, ActivityIndicator } from 'zarm';
import { Store, isWX, BrowserInfo } from '@/utils/tools';
import { wechatPay, randomStr } from '@/utils/wechatPay';

const isPrd = /vip.zhongan.io$/.test(window.location.origin);
const superCodeURL = isPrd ? 'https://vpc-af.zhongan.io' : 'https://vpc-test-af.zhongan.io';

export default function superCodePay({ dispatch, type = 'order/createAndPay', formData, callback }) {
  Loading.show();
  window.__SuperCode && window.__SuperCode.show({
    serverDomain: superCodeURL,
    onFinaly() {
      Loading.hide();
    },
    onSuccess(data) {
      Loading.hide();
      Loading.show({ content: <ActivityIndicator size="lg" /> });
      const _data = data.data;

      const openId = Store.get('openId');
      if (openId) formData.openId = openId;
      dispatch({
        type: type,
        payload: {
          ...formData,
          // 1：普通h5浏览器 2：微信内部浏览器
          payEnv: isWX ? 2 : 1,
          // 反欺诈
          did: _data.did,
          sid: _data.scene,
          token: _data.token,
        },
      }).then(res => {
        Loading.hide();
        if (!res) return;
        if (res.outTradeNo && !res.payLink && !res.prepayId) {
          router.replace(`/orderdetail?id=${res.outTradeNo}`);
        }
        if (isWX) {
          if (!res.prepayId) return;
          wechatPay(
            {
              // config
              timeStamp: Date.now().toString(),
              nonceStr: randomStr(24),
              package: `prepay_id=${res.prepayId}`,
            },
            // get paySign
            async params => {
              const _d = (await dispatch({
                type: 'charge/wechatPaySign',
                payload: { ...params, orderId: res.outTradeNo },
              })) || {};
              return _d;
            },
            // success callback
            () => {
              callback
                ? callback()
                : router.replace(`/orderdetail?id=${res.outTradeNo}`)
            },
          );
        } else {
          if (res.payLink) {
            const link = wxPayLink(res);
            if (BrowserInfo.isAndroid) {
              window.open(link);
            } else {
              window.location.href = link;
            }
          }
        }
      })
    }
  })
}

export function superCodePayV1({ dispatch, type = 'order/createAndPay', formData, callback }) {
  window.__SuperCode && window.__SuperCode.show({
    serverDomain: superCodeURL,
    onSuccess(data) {
      const _data = data.data;
      const openId = Store.get('openId');
      if (openId) formData.openId = openId;
      dispatch({
        type: type,
        payload: {
          ...formData,
          // 1：普通h5浏览器 2：微信内部浏览器
          payEnv: isWX ? 2 : 1,
          // 反欺诈
          did: _data.did,
          sid: _data.scene,
          token: _data.token,
        },
      }).then(res => {
        console.log('-----res', res);
        if (res) {
          callback();
        } else {
          alert('创建订单出错～');
        }
      })
    }
  })
}

export function wxPayLink(data) {
  const uri = encodeURIComponent(
    window.location.origin +
      '/topup/temp?' +
      'out_trade_no=' +
      data.outTradeNo +
      '&paylink=' + encodeURIComponent(data.payLink)
  );

  return data.payLink + `&redirect_url=${uri}`;
}