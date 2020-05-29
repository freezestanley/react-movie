/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

// 兑换卡券
export function exchangeCoupon(data) {
  return request({
    url: `/exchange`,
    serve: 'card',
    method: 'POST',
    data
  });
}