import router from 'umi/router';
import { Loading, ActivityIndicator } from 'zarm';
import { Store, isWX, BrowserInfo } from '@/utils/tools';
import { wechatPay, randomStr } from '@/utils/wechatPay';

const isPrd = /vip.zhongan.io$/.test(window.location.origin);
const superCodeURL = isPrd ? 'https://vpc-af.zhongan.io' : 'https://vpc-test-af.zhongan.io';

// 处理支付返回结果
function handlePayRes({ res, dispatch, callback}) {
  console.log('-----package res', res);
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
}

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
        handlePayRes({ res, dispatch, callback })
      })
    }
  })
}


export function AntiCheat({ dispatch, type, formData, callback }) {
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
          // 反欺诈
          did: _data.did,
          sid: _data.scene,
          token: _data.token,
        },
      }).then(res => {
        Loading.hide();
        callback && callback(res)
      
      })
    }
  })
}

// 重新拉起支付
export function reLanchPay({ dispatch, type = 'order/relaunchPay', formData, callback }) {
  const openId = Store.get('openId');
  if (openId) formData.openId = openId;
  dispatch({
    type: type,
    payload: {
      ...formData,
      // 1：普通h5浏览器 2：微信内部浏览器
      payEnv: isWX ? 2 : 1,
    },
  }).then(res => {
    handlePayRes({ res, dispatch, callback });
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