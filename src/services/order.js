/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

// 检查是否存在未付款的会员费订单
export function checkMemberFlag(userId) {
  return request({
    url: `/checkMemberFlag/${userId}`,
    serve: 'order',
    method: 'GET',
  });
}
