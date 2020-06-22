export async function onBridgeReady(conf, getSig, callback) {
  // console.log('[2] wechatPay.js: ', '===> ready');
  const config = {
    // wechat普通浏览器 wx342d51d2757afaa6
    // wechat微信浏览器 wxef6a2198a1d0c3b4
    appId: 'wxef6a2198a1d0c3b4', //公众号名称，由商户传入
    timeStamp: '1395712654', //时间戳，自1970年以来的秒数
    nonceStr: 'e61463f8efa94090b1f366cccfbbb444', //随机串
    // package: 'prepay_id=u802345jgfjsdfgsdg888',
    signType: 'HMAC-SHA256', //微信签名方式
    // paySign: '', //微信签名
    ...conf,
  };

  // console.log('[15] wechatPay.js: ', config);

  // const signTarget = Object.keys(config)
  //   .map(key => `${key}=${config[key]}`)
  //   .join('&');

  // console.log('[15] wechatPay.js: ', signTarget);
  // console.log('[21] wechatPay.js: ', JSON.stringify(config));

  const _conf = {
    appId: config.appId,
    timeStamp: config.timeStamp,
    nonceStr: config.nonceStr,
    packageStr: config.package,
    signType: config.signType,
  };

  // alert(`config: ${JSON.stringify(_conf)}`);

  const sig = await getSig(_conf);

  // alert(`paySign: ${sig}`);

  // eslint-disable-next-line no-undef
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest',
    {
      ...config,
      paySign: sig, //微信签名
    },
    function(res) {
      if (res.err_msg === 'get_brand_wcpay_request:ok') {
        // 使用以上方式判断前端返回,微信团队郑重提示：
        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        // alert('wechatPay: success');
        typeof callback === 'function' && callback();
      }
    },
  );
}

export function wechatPay(config, getSig, callback) {
  const _onBridgeReady = () => onBridgeReady(config, getSig, callback);
  if (typeof WeixinJSBridge == 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', _onBridgeReady, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', _onBridgeReady);
      document.attachEvent('onWeixinJSBridgeReady', _onBridgeReady);
    }
  } else {
    _onBridgeReady();
  }
}

export function randomStr(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
