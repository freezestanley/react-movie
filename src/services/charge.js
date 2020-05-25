/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

// 微信支付加签
export function wechatPaySign(data) {
  return request({
    url: '/wechat/sign',
    serve: 'pay',
    method: 'POST',
    data,
  });
}
