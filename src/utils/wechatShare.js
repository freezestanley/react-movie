/* eslint-disable no-undef */
import { Toast } from 'zarm';
import debounce from 'lodash/debounce';
import { wxSignSignature } from '@services/global';

export const wechatShareSign = debounce(async function wechatShareSign(url) {
  const _data = await wxSignSignature({ url });

  if (!_data[0]) {
    Toast.show(_data[1]);
    return;
  }
  const data = _data[1];

  // console.log('[17] wechatShare.js: ', data);

  const shareConfig = {
    appId: "wxef6a2198a1d0c3b4", // 公众号appID
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.noncestr, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
  };

  wx.config(shareConfig);
}, 500, { leading: true, trailing: false });

export default function wechatShare({
  title = '盎司会员',
  desc = '',
  link = window.location.href,
  imgUrl = `${window.location.origin}/static/images/logo.png`,
  onSuccess,
}) {
  wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
    wx.updateAppMessageShareData({
      title, // 分享标题
      desc, // 分享描述
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function () {
        // 设置成功
        onSuccess && onSuccess();
      }
    });
    wx.updateTimelineShareData({
      title, // 分享标题
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function () {
        // 设置成功
        onSuccess && onSuccess();
      }
    });
  });
}